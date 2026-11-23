const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  let mainWindow = null;

  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1200,
      height: 820,
      minWidth: 480,
      minHeight: 600,
      title: 'Santa Biblia Reina Valera Gómez 2010 (RVG2010)',
      backgroundColor: '#faf8f5',
      icon: path.join(__dirname, 'icon.ico'),
      autoHideMenuBar: true,
      webPreferences: {
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: true
      }
    });

    mainWindow.loadFile(path.join(__dirname, 'www', 'index.html'));

    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        shell.openExternal(url);
        return { action: 'deny' };
      }
      return { action: 'allow' };
    });

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  }

  function buildMenu() {
    const template = [
      {
        label: 'Archivo',
        submenu: [
          {
            label: 'Imprimir',
            accelerator: 'CmdOrCtrl+P',
            click: () => {
              if (mainWindow) mainWindow.webContents.print();
            }
          },
          { type: 'separator' },
          { label: 'Salir', accelerator: 'Alt+F4', role: 'quit' }
        ]
      },
      {
        label: 'Ver',
        submenu: [
          { label: 'Recargar', role: 'reload' },
          { type: 'separator' },
          { label: 'Tamaño real', role: 'resetZoom' },
          { label: 'Acercar', role: 'zoomIn' },
          { label: 'Alejar', role: 'zoomOut' },
          { type: 'separator' },
          { label: 'Pantalla completa', role: 'togglefullscreen' }
        ]
      },
      {
        label: 'Ayuda',
        submenu: [
          {
            label: 'Versión web',
            click: () => shell.openExternal('https://santa-biblia-9017e.web.app/')
          },
          {
            label: 'Acerca de',
            click: () => {
              dialog.showMessageBox(mainWindow, {
                type: 'info',
                title: 'Santa Biblia RVG2010',
                message: 'Santa Biblia Reina Valera Gómez 2010 (RVG2010)',
                detail: 'Lector moderno, accesible y 100% offline.\nDiseñado por Gerardo Velázquez.\nWeb: https://santa-biblia-9017e.web.app/'
              });
            }
          }
        ]
      }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  }

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(() => {
    buildMenu();
    createWindow();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}

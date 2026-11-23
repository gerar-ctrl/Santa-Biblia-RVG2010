/**
 * ============================================================================
 * SANTA BIBLIA REINA VALERA GÓMEZ 2010 (RVG2010)
 * Motor de Lectura Local, Offline y Gestor de Preferencias
 * ============================================================================
 */

// --- 1. Canon Bíblico Oficial (66 Libros) ---
const BIBLE_CANON = [
  // Antiguo Testamento (39 libros)
  { id: "GEN", name: "Génesis", testament: "AT", chapters: 50 },
  { id: "EXO", name: "Éxodo", testament: "AT", chapters: 40 },
  { id: "LEV", name: "Levítico", testament: "AT", chapters: 27 },
  { id: "NUM", name: "Números", testament: "AT", chapters: 36 },
  { id: "DEU", name: "Deuteronomio", testament: "AT", chapters: 34 },
  { id: "JOS", name: "Josué", testament: "AT", chapters: 24 },
  { id: "JDG", name: "Jueces", testament: "AT", chapters: 21 },
  { id: "RUT", name: "Rut", testament: "AT", chapters: 4 },
  { id: "1SA", name: "1 Samuel", testament: "AT", chapters: 31 },
  { id: "2SA", name: "2 Samuel", testament: "AT", chapters: 24 },
  { id: "1KI", name: "1 Reyes", testament: "AT", chapters: 22 },
  { id: "2KI", name: "2 Reyes", testament: "AT", chapters: 25 },
  { id: "1CH", name: "1 Crónicas", testament: "AT", chapters: 29 },
  { id: "2CH", name: "2 Crónicas", testament: "AT", chapters: 36 },
  { id: "EZR", name: "Esdras", testament: "AT", chapters: 10 },
  { id: "NEH", name: "Nehemías", testament: "AT", chapters: 13 },
  { id: "EST", name: "Ester", testament: "AT", chapters: 10 },
  { id: "JOB", name: "Job", testament: "AT", chapters: 42 },
  { id: "PSA", name: "Salmos", testament: "AT", chapters: 150 },
  { id: "PRO", name: "Proverbios", testament: "AT", chapters: 31 },
  { id: "ECC", name: "Eclesiastés", testament: "AT", chapters: 12 },
  { id: "SNG", name: "Cantares", testament: "AT", chapters: 8 },
  { id: "ISA", name: "Isaías", testament: "AT", chapters: 66 },
  { id: "JER", name: "Jeremías", testament: "AT", chapters: 52 },
  { id: "LAM", name: "Lamentaciones", testament: "AT", chapters: 5 },
  { id: "EZK", name: "Ezequiel", testament: "AT", chapters: 48 },
  { id: "DAN", name: "Daniel", testament: "AT", chapters: 12 },
  { id: "HOS", name: "Oseas", testament: "AT", chapters: 14 },
  { id: "JOL", name: "Joel", testament: "AT", chapters: 3 },
  { id: "AMO", name: "Amós", testament: "AT", chapters: 9 },
  { id: "OBA", name: "Abdías", testament: "AT", chapters: 1 },
  { id: "JON", name: "Jonás", testament: "AT", chapters: 4 },
  { id: "MIC", name: "Miqueas", testament: "AT", chapters: 7 },
  { id: "NAM", name: "Nahúm", testament: "AT", chapters: 3 },
  { id: "HAB", name: "Habacuc", testament: "AT", chapters: 3 },
  { id: "ZEP", name: "Sofonías", testament: "AT", chapters: 3 },
  { id: "HAG", name: "Hageo", testament: "AT", chapters: 2 },
  { id: "ZEC", name: "Zacarías", testament: "AT", chapters: 14 },
  { id: "MAL", name: "Malaquías", testament: "AT", chapters: 4 },

  // Nuevo Testamento (27 libros)
  { id: "MAT", name: "Mateo", testament: "NT", chapters: 28 },
  { id: "MRK", name: "Marcos", testament: "NT", chapters: 16 },
  { id: "LUK", name: "Lucas", testament: "NT", chapters: 24 },
  { id: "JHN", name: "Juan", testament: "NT", chapters: 21 },
  { id: "ACT", name: "Hechos", testament: "NT", chapters: 28 },
  { id: "ROM", name: "Romanos", testament: "NT", chapters: 16 },
  { id: "1CO", name: "1 Corintios", testament: "NT", chapters: 16 },
  { id: "2CO", name: "2 Corintios", testament: "NT", chapters: 13 },
  { id: "GAL", name: "Gálatas", testament: "NT", chapters: 6 },
  { id: "EPH", name: "Efesios", testament: "NT", chapters: 6 },
  { id: "PHP", name: "Filipenses", testament: "NT", chapters: 4 },
  { id: "COL", name: "Colosenses", testament: "NT", chapters: 4 },
  { id: "1TH", name: "1 Tesalonicenses", testament: "NT", chapters: 5 },
  { id: "2TH", name: "2 Tesalonicenses", testament: "NT", chapters: 3 },
  { id: "1TI", name: "1 Timoteo", testament: "NT", chapters: 6 },
  { id: "2TI", name: "2 Timoteo", testament: "NT", chapters: 4 },
  { id: "TIT", name: "Tito", testament: "NT", chapters: 3 },
  { id: "PHM", name: "Filemón", testament: "NT", chapters: 1 },
  { id: "HEB", name: "Hebreos", testament: "NT", chapters: 13 },
  { id: "JAS", name: "Santiago", testament: "NT", chapters: 5 },
  { id: "1PE", name: "1 Pedro", testament: "NT", chapters: 5 },
  { id: "2PE", name: "2 Pedro", testament: "NT", chapters: 3 },
  { id: "1JN", name: "1 Juan", testament: "NT", chapters: 5 },
  { id: "2JN", name: "2 Juan", testament: "NT", chapters: 1 },
  { id: "3JN", name: "3 Juan", testament: "NT", chapters: 1 },
  { id: "JUD", name: "Judas", testament: "NT", chapters: 1 },
  { id: "REV", name: "Apocalipsis", testament: "NT", chapters: 22 }
];

// --- 2. Catálogo de Tipografías (50 Fuentes de Lectura) ---
const FONT_FAMILIES = {
  // 1. Bíblicas y Litúrgicas Clásicas (1-10)
  "font-merriweather": "'Merriweather', Georgia, 'Times New Roman', serif",
  "font-lora": "'Lora', Georgia, 'Times New Roman', serif",
  "font-eb-garamond": "'EB Garamond', Garamond, 'Times New Roman', Georgia, serif",
  "font-cinzel": "'Cinzel', Georgia, 'Times New Roman', serif",
  "font-noto-serif": "'Noto Serif', Georgia, 'Times New Roman', serif",
  "font-cormorant": "'Cormorant Garamond', Garamond, Georgia, serif",
  "font-playfair": "'Playfair Display', Georgia, 'Times New Roman', serif",
  "font-cinzel-decorative": "'Cinzel Decorative', 'Cinzel', Georgia, serif",
  "font-unifraktur": "'UnifrakturMaguntia', Georgia, serif",
  "font-medievalsharp": "'MedievalSharp', cursive, Georgia, serif",

  // 2. Serif Literarias y Editoriales (11-20)
  "font-baskervville": "'Baskervville', Baskerville, Georgia, serif",
  "font-spectral": "'Spectral', Georgia, 'Times New Roman', serif",
  "font-alegreya": "'Alegreya', Georgia, 'Times New Roman', serif",
  "font-libre-baskerville": "'Libre Baskerville', Baskerville, Georgia, serif",
  "font-cardo": "'Cardo', 'Times New Roman', Georgia, serif",
  "font-crimson-text": "'Crimson Text', Garamond, Georgia, serif",
  "font-gentium-plus": "'Gentium Plus', Georgia, 'Times New Roman', serif",
  "font-vollkorn": "'Vollkorn', Georgia, 'Times New Roman', serif",
  "font-faustina": "'Faustina', Georgia, 'Times New Roman', serif",
  "font-prata": "'Prata', Didot, 'Bodoni MT', Georgia, serif",

  // 3. Sans-Serif Modernas y Limpias (21-30)
  "font-inter": "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  "font-roboto": "'Roboto', Arial, system-ui, -apple-system, sans-serif",
  "font-open-sans": "'Open Sans', 'Segoe UI', system-ui, -apple-system, sans-serif",
  "font-outfit": "'Outfit', 'Segoe UI', system-ui, -apple-system, sans-serif",
  "font-lato": "'Lato', 'Segoe UI', system-ui, -apple-system, sans-serif",
  "font-montserrat": "'Montserrat', 'Segoe UI', system-ui, -apple-system, sans-serif",
  "font-poppins": "'Poppins', 'Segoe UI', system-ui, -apple-system, sans-serif",
  "font-source-sans": "'Source Sans 3', 'Source Sans Pro', 'Segoe UI', sans-serif",
  "font-raleway": "'Raleway', 'Segoe UI', system-ui, sans-serif",
  "font-nunito": "'Nunito', 'Segoe UI', system-ui, sans-serif",

  // 4. Sans Humanistas y Amigables (31-40)
  "font-pt-sans": "'PT Sans', 'Segoe UI', Arial, sans-serif",
  "font-fira-sans": "'Fira Sans', 'Segoe UI', sans-serif",
  "font-work-sans": "'Work Sans', 'Segoe UI', sans-serif",
  "font-rubik": "'Rubik', 'Segoe UI', sans-serif",
  "font-quicksand": "'Quicksand', 'Segoe UI', sans-serif",
  "font-cabin": "'Cabin', 'Segoe UI', sans-serif",
  "font-karla": "'Karla', 'Segoe UI', sans-serif",
  "font-dm-sans": "'DM Sans', 'Segoe UI', sans-serif",
  "font-urbanist": "'Urbanist', 'Segoe UI', sans-serif",
  "font-manrope": "'Manrope', 'Segoe UI', sans-serif",

  // 5. Monospace y Precisión (41-45)
  "font-jetbrains": "'JetBrains Mono', 'Courier New', Courier, monospace",
  "font-fira-code": "'Fira Code', 'Courier New', Courier, monospace",
  "font-source-code": "'Source Code Pro', 'Courier New', Courier, monospace",
  "font-space-mono": "'Space Mono', 'Courier New', Courier, monospace",
  "font-inconsolata": "'Inconsolata', 'Courier New', Courier, monospace",

  // 6. Fuentes Clásicas del Sistema (46-50)
  "font-georgia-sys": "Georgia, 'Times New Roman', serif",
  "font-palatino-sys": "'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif",
  "font-times-sys": "'Times New Roman', Times, serif",
  "font-baskerville-sys": "Baskerville, 'Garamond', 'Hoefler Text', Georgia, serif",
  "font-segoe-sys": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
};

// --- Utilidades de Texto y Normalización ---
function normalizeKey(str) {
  if (!str) return "";
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Diccionario de Libros y Abreviaturas Populares en Español e Inglés
const BIBLE_BOOK_ALIASES = {};

BIBLE_CANON.forEach(b => {
  BIBLE_BOOK_ALIASES[normalizeKey(b.name)] = b.name;
  BIBLE_BOOK_ALIASES[normalizeKey(b.id)] = b.name;
});

const EXTRA_ALIASES = {
  // Antiguo Testamento
  "genesis": "Génesis", "gen": "Génesis", "gn": "Génesis", "ge": "Génesis",
  "exodo": "Éxodo", "exo": "Éxodo", "ex": "Éxodo",
  "levitico": "Levítico", "lev": "Levítico", "lv": "Levítico",
  "numeros": "Números", "num": "Números", "nm": "Números", "nu": "Números",
  "deuteronomio": "Deuteronomio", "deu": "Deuteronomio", "dt": "Deuteronomio", "deut": "Deuteronomio",
  "josue": "Josué", "jos": "Josué", "js": "Josué",
  "jueces": "Jueces", "jdg": "Jueces", "jue": "Jueces", "jc": "Jueces",
  "rut": "Rut", "rt": "Rut", "rth": "Rut",
  "1 samuel": "1 Samuel", "1 sam": "1 Samuel", "1samuel": "1 Samuel", "1sam": "1 Samuel", "1sa": "1 Samuel", "1 s": "1 Samuel", "1s": "1 Samuel",
  "2 samuel": "2 Samuel", "2 sam": "2 Samuel", "2samuel": "2 Samuel", "2sam": "2 Samuel", "2sa": "2 Samuel", "2 s": "2 Samuel", "2s": "2 Samuel",
  "1 reyes": "1 Reyes", "1 rey": "1 Reyes", "1reyes": "1 Reyes", "1re": "1 Reyes", "1ki": "1 Reyes", "1 r": "1 Reyes", "1r": "1 Reyes",
  "2 reyes": "2 Reyes", "2 rey": "2 Reyes", "2reyes": "2 Reyes", "2re": "2 Reyes", "2ki": "2 Reyes", "2 r": "2 Reyes", "2r": "2 Reyes",
  "1 cronicas": "1 Crónicas", "1 cron": "1 Crónicas", "1cronicas": "1 Crónicas", "1cr": "1 Crónicas", "1ch": "1 Crónicas",
  "2 cronicas": "2 Crónicas", "2 cron": "2 Crónicas", "2cronicas": "2 Crónicas", "2cr": "2 Crónicas", "2ch": "2 Crónicas",
  "esdras": "Esdras", "esd": "Esdras", "ezr": "Esdras",
  "nehemias": "Nehemías", "neh": "Nehemías", "ne": "Nehemías",
  "ester": "Ester", "est": "Ester", "es": "Ester",
  "job": "Job", "jb": "Job",
  "salmos": "Salmos", "salmo": "Salmos", "sal": "Salmos", "psa": "Salmos", "ps": "Salmos", "psalm": "Salmos", "psalms": "Salmos",
  "proverbios": "Proverbios", "proverbio": "Proverbios", "pro": "Proverbios", "prv": "Proverbios", "pr": "Proverbios",
  "eclesiastes": "Eclesiastés", "ecl": "Eclesiastés", "ecc": "Eclesiastés", "ec": "Eclesiastés",
  "cantares": "Cantares", "cantar": "Cantares", "cantares de salomon": "Cantares", "cantar de los cantares": "Cantares", "sng": "Cantares", "cnt": "Cantares", "can": "Cantares",
  "isaias": "Isaías", "isa": "Isaías", "is": "Isaías",
  "jeremias": "Jeremías", "jer": "Jeremías", "jr": "Jeremías",
  "lamentaciones": "Lamentaciones", "lamentacion": "Lamentaciones", "lam": "Lamentaciones", "lm": "Lamentaciones",
  "ezequiel": "Ezequiel", "ezk": "Ezequiel", "ez": "Ezequiel", "eze": "Ezequiel",
  "daniel": "Daniel", "dan": "Daniel", "dn": "Daniel", "da": "Daniel",
  "oseas": "Oseas", "hos": "Oseas", "os": "Oseas",
  "joel": "Joel", "jol": "Joel", "jl": "Joel",
  "amos": "Amós", "amo": "Amós", "am": "Amós",
  "abdias": "Abdías", "oba": "Abdías", "abd": "Abdías", "ab": "Abdías",
  "jonas": "Jonás", "jon": "Jonás", "jns": "Jonás",
  "miqueas": "Miqueas", "mic": "Miqueas", "miq": "Miqueas", "mi": "Miqueas",
  "nahum": "Nahúm", "nam": "Nahúm", "nah": "Nahúm",
  "habacuc": "Habacuc", "hab": "Habacuc", "hb": "Habacuc",
  "sofonias": "Sofonías", "zep": "Sofonías", "sof": "Sofonías", "so": "Sofonías",
  "hageo": "Hageo", "hag": "Hageo", "hg": "Hageo",
  "zacarias": "Zacarías", "zec": "Zacarías", "zac": "Zacarías", "za": "Zacarías",
  "malaquias": "Malaquías", "mal": "Malaquías", "ml": "Malaquías",

  // Nuevo Testamento
  "mateo": "Mateo", "mat": "Mateo", "mt": "Mateo",
  "marcos": "Marcos", "mrk": "Marcos", "mc": "Marcos", "mr": "Marcos",
  "lucas": "Lucas", "luk": "Lucas", "lc": "Lucas", "lu": "Lucas",
  "juan": "Juan", "jhn": "Juan", "jn": "Juan", "j": "Juan",
  "hechos": "Hechos", "act": "Hechos", "hch": "Hechos", "hec": "Hechos",
  "romanos": "Romanos", "romano": "Romanos", "rom": "Romanos", "ro": "Romanos", "rm": "Romanos",
  "1 corintios": "1 Corintios", "1 cor": "1 Corintios", "1corintios": "1 Corintios", "1co": "1 Corintios", "1cor": "1 Corintios",
  "2 corintios": "2 Corintios", "2 cor": "2 Corintios", "2corintios": "2 Corintios", "2co": "2 Corintios", "2cor": "2 Corintios",
  "galatas": "Gálatas", "gal": "Gálatas", "ga": "Gálatas",
  "efesios": "Efesios", "eph": "Efesios", "ef": "Efesios", "efe": "Efesios",
  "filipenses": "Filipenses", "php": "Filipenses", "fil": "Filipenses", "flp": "Filipenses", "fp": "Filipenses",
  "colosenses": "Colosenses", "col": "Colosenses", "cl": "Colosenses",
  "1 tesalonicenses": "1 Tesalonicenses", "1 tes": "1 Tesalonicenses", "1tesalonicenses": "1 Tesalonicenses", "1th": "1 Tesalonicenses", "1tes": "1 Tesalonicenses",
  "2 tesalonicenses": "2 Tesalonicenses", "2 tes": "2 Tesalonicenses", "2tesalonicenses": "2 Tesalonicenses", "2th": "2 Tesalonicenses", "2tes": "2 Tesalonicenses",
  "1 timoteo": "1 Timoteo", "1 tim": "1 Timoteo", "1timoteo": "1 Timoteo", "1ti": "1 Timoteo", "1tim": "1 Timoteo",
  "2 timoteo": "2 Timoteo", "2 tim": "2 Timoteo", "2timoteo": "2 Timoteo", "2ti": "2 Timoteo", "2tim": "2 Timoteo",
  "tito": "Tito", "tit": "Tito", "tt": "Tito",
  "filemon": "Filemón", "phm": "Filemón", "flm": "Filemón", "fm": "Filemón",
  "hebreos": "Hebreos", "heb": "Hebreos", "he": "Hebreos",
  "santiago": "Santiago", "jas": "Santiago", "stg": "Santiago", "stgo": "Santiago", "sant": "Santiago",
  "1 pedro": "1 Pedro", "1 ped": "1 Pedro", "1pedro": "1 Pedro", "1pe": "1 Pedro", "1ped": "1 Pedro", "1 p": "1 Pedro", "1p": "1 Pedro",
  "2 pedro": "2 Pedro", "2 ped": "2 Pedro", "2pedro": "2 Pedro", "2pe": "2 Pedro", "2ped": "2 Pedro", "2 p": "2 Pedro", "2p": "2 Pedro",
  "1 juan": "1 Juan", "1 jn": "1 Juan", "1juan": "1 Juan", "1jn": "1 Juan", "1 j": "1 Juan", "1j": "1 Juan",
  "2 juan": "2 Juan", "2 jn": "2 Juan", "2juan": "2 Juan", "2jn": "2 Juan", "2 j": "2 Juan", "2j": "2 Juan",
  "3 juan": "3 Juan", "3 jn": "3 Juan", "3juan": "3 Juan", "3jn": "3 Juan", "3 j": "3 Juan", "3j": "3 Juan",
  "judas": "Judas", "jud": "Judas", "jd": "Judas",
  "apocalipsis": "Apocalipsis", "rev": "Apocalipsis", "apoc": "Apocalipsis", "apo": "Apocalipsis", "ap": "Apocalipsis"
};

for (const k in EXTRA_ALIASES) {
  BIBLE_BOOK_ALIASES[normalizeKey(k)] = EXTRA_ALIASES[k];
}

// --- 3. Estado Global de la Aplicación ---
const AppState = {
  // Datos bíblicos cargados en memoria
  versesData: [],
  chapterIndex: new Map(),
  quotesData: [],
  quotesIndex: new Map(),
  titlesData: [],
  titlesIndex: new Map(),
  isLoaded: false,

  // Ubicación actual
  currentBook: "Génesis",
  currentChapter: 1,

  // Preferencias de lectura
  settings: {
    theme: "luz-clasico",
    fontFamily: "font-merriweather",
    fontStyle: "normal", // "normal", "italic", "semibold", "bold", "bold-italic", "light"
    fontSize: 19,
    lineHeight: "1.7",
    layoutMode: "paragraph", // "paragraph" o "lines"
    showVerseNumbers: true,
    showTitles: true,        // Títulos de sección (Reina Valera 1960)
    highlightQuotes: true,   // Resaltar citas bíblicas en negrita
    jesusWordsRed: true,     // Palabras de Jesús en rojo (Edición Letra Roja)
    textAlign: "left",       // "left" o "justify"
    raeMode: false           // Modo Diccionario RAE con desambiguación gramatical
  },

  // Estado de navegación en Drawer
  drawer: {
    filterTestament: "ALL", // "ALL", "AT", "NT"
    searchQuery: "",
    selectedBookForChapters: null
  },

  // Estado del Buscador Bíblico (Frase exacta o Cita de libro, cap y versículo)
  search: {
    query: "",
    scope: "ALL", // "ALL", "AT", "NT", "BOOK"
    exactPhrase: true,
    debounceTimer: null,
    limit: 50,
    lastCitationMatch: null,
    currentResults: []
  },

  // Selección de versículos para copiar / compartir / WhatsApp
  selection: {
    selectedVerses: new Map(), // verseNum -> { verse, text }
    lastClickedVerse: null
  }
};

// --- 3. Inicialización de la Aplicación ---
let deferredPwaInstallPrompt = null;

// Capturar evento nativo de instalación PWA lo antes posible (Android y PC Chrome/Edge/Brave)
if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPwaInstallPrompt = e;
    updateInstallUiState();
    maybeShowInstallBanner();
  });

  window.addEventListener("appinstalled", () => {
    deferredPwaInstallPrompt = null;
    localStorage.setItem("rvg_pwa_installed", "true");
    hideInstallBanner();
    updateInstallUiState();
    showToast("¡Santa Biblia RVG2010 instalada correctamente!");
  });
}

async function initApp() {
  try {
    initSettings();
    setupEventListeners();
    initPwaInstaller();
    disableFingerZoom();
    renderBooksGrid();
    await loadBibleData();
    restoreLastPosition();
    handleUrlLaunchParams();
  } catch (err) {
    console.error("Error durante la carga e inicialización de la Biblia:", err);
  }

  try {
    renderCurrentChapter();
  } catch (renderErr) {
    console.error("Error al renderizar el capítulo actual:", renderErr);
    const container = document.getElementById("bibleTextBody");
    if (container) {
      container.innerHTML = `<div class="p-8 text-center text-red-500 font-semibold">Error al renderizar el texto bíblico: ${renderErr.message || renderErr}</div>`;
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// --- 4. Carga e Indexación de Datos Bíblicos y Citas del Antiguo Testamento ---
function indexBibleData() {
  AppState.chapterIndex = new Map();
  if (!Array.isArray(AppState.versesData)) return;
  for (let i = 0; i < AppState.versesData.length; i++) {
    const v = AppState.versesData[i];
    const key = `${v.book.toLowerCase()}_${v.chapter}`;
    let list = AppState.chapterIndex.get(key);
    if (!list) {
      list = [];
      AppState.chapterIndex.set(key, list);
    }
    list.push(v);
  }
}

function indexQuotesData() {
  AppState.quotesIndex = new Map();
  if (!Array.isArray(AppState.quotesData)) return;
  for (let i = 0; i < AppState.quotesData.length; i++) {
    const item = AppState.quotesData[i];
    const key = `${item.book.toLowerCase()}_${item.chapter}_${item.verse}`;
    AppState.quotesIndex.set(key, item.quotes);
  }
}

async function loadQuotesData() {
  // 1. Si los datos de citas ya están en memoria mediante bible_quotes.js (óptimo para protocolo file://)
  if (window.BIBLE_QUOTES_DATA && Array.isArray(window.BIBLE_QUOTES_DATA) && window.BIBLE_QUOTES_DATA.length > 0) {
    AppState.quotesData = window.BIBLE_QUOTES_DATA;
    indexQuotesData();
    return;
  }

  // 2. Carga asíncrona mediante JSON vía fetch (para protocolo http/https)
  try {
    const response = await fetch("data/bible_quotes.json");
    if (response.ok) {
      AppState.quotesData = await response.json();
      indexQuotesData();
    }
  } catch (error) {
    console.warn("Aviso al intentar fetch de citas bíblicas:", error);
    if (window.BIBLE_QUOTES_DATA && Array.isArray(window.BIBLE_QUOTES_DATA)) {
      AppState.quotesData = window.BIBLE_QUOTES_DATA;
      indexQuotesData();
    }
  }
}

function indexBibleTitles() {
  AppState.titlesIndex = new Map();
  if (!Array.isArray(AppState.titlesData)) return;
  for (let i = 0; i < AppState.titlesData.length; i++) {
    const item = AppState.titlesData[i];
    if (!item || !item.title) continue;
    if (item.book) {
      const keyName = `${item.book.toLowerCase()}_${item.chapter}_${item.verse}`;
      AppState.titlesIndex.set(keyName, item.title);
    }
    if (item.book_code) {
      const keyCode = `${item.book_code.toLowerCase()}_${item.chapter}_${item.verse}`;
      AppState.titlesIndex.set(keyCode, item.title);
    }
  }
}

async function loadTitlesData() {
  // 1. Si los datos de títulos ya están en memoria mediante bible_titles.js (óptimo para protocolo file://)
  if (window.BIBLE_TITLES_DATA && Array.isArray(window.BIBLE_TITLES_DATA) && window.BIBLE_TITLES_DATA.length > 0) {
    AppState.titlesData = window.BIBLE_TITLES_DATA;
    indexBibleTitles();
    return;
  }

  // 2. Carga asíncrona mediante JSON vía fetch (para protocolo http/https)
  try {
    const response = await fetch("data/bible_titles.json");
    if (response.ok) {
      AppState.titlesData = await response.json();
      indexBibleTitles();
    }
  } catch (error) {
    console.warn("Aviso al intentar fetch de títulos bíblicos:", error);
    if (window.BIBLE_TITLES_DATA && Array.isArray(window.BIBLE_TITLES_DATA)) {
      AppState.titlesData = window.BIBLE_TITLES_DATA;
      indexBibleTitles();
    }
  }
}

async function loadBibleData() {
  // Carga paralela de citas bíblicas y títulos de sección (Reina Valera 1960)
  await Promise.all([loadQuotesData(), loadTitlesData()]);

  // 1. Si los datos ya están en memoria mediante rvg2010.js (óptimo para protocolo file://)
  if (window.RVG_BIBLE_DATA && Array.isArray(window.RVG_BIBLE_DATA) && window.RVG_BIBLE_DATA.length > 0) {
    AppState.versesData = window.RVG_BIBLE_DATA;
    AppState.isLoaded = true;
    indexBibleData();
    return;
  }

  // 2. Carga asíncrona mediante JSON vía fetch (para protocolo http/https)
  try {
    const response = await fetch("data/rvg2010.json");
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    AppState.versesData = await response.json();
    AppState.isLoaded = true;
    indexBibleData();
  } catch (error) {
    console.warn("Aviso al intentar fetch local de datos bíblicos:", error);
    if (window.RVG_BIBLE_DATA && Array.isArray(window.RVG_BIBLE_DATA)) {
      AppState.versesData = window.RVG_BIBLE_DATA;
      AppState.isLoaded = true;
      indexBibleData();
    }
  }
}

// --- 5. Gestión de Preferencias y LocalStorage ---
function initSettings() {
  const saved = localStorage.getItem("rvg_settings");
  if (saved) {
    try {
      AppState.settings = { ...AppState.settings, ...JSON.parse(saved) };
      if (!AppState.settings.fontStyle) {
        AppState.settings.fontStyle = "normal";
      }
    } catch (e) {
      console.error("Error al parsear rvg_settings:", e);
    }
  }
  applySettingsToDOM();
}

function saveSettings() {
  localStorage.setItem("rvg_settings", JSON.stringify(AppState.settings));
  applySettingsToDOM();
}

function applySettingsToDOM() {
  const root = document.documentElement;
  const s = AppState.settings;

  // Tema
  root.setAttribute("data-theme", s.theme);
  document.querySelectorAll(".theme-swatch").forEach(el => {
    el.classList.toggle("active", el.getAttribute("data-theme-target") === s.theme);
  });
  const themeNames = {
    "luz-clasico": "1. Luz Clásico",
    "sepia-pergamino": "2. Sepia Pergamino",
    "noche-oscuro": "3. Noche Oscuro",
    "oled-negro": "4. OLED Negro",
    "bosque-salvia": "5. Bosque Salvia",
    "azul-medianoche": "6. Azul Medianoche",
    "papel-cafe": "7. Papel Café",
    "lavanda-crepusculo": "8. Lavanda Crepúsculo",
    "monocromo-retro": "9. Prensa Vintage",
    "cafe-moca": "10. Café Moca"
  };
  const themeDotColors = {
    "luz-clasico": "#991b1b",
    "sepia-pergamino": "#8b4513",
    "noche-oscuro": "#60a5fa",
    "oled-negro": "#38bdf8",
    "bosque-salvia": "#2d6a4f",
    "azul-medianoche": "#38bdf8",
    "papel-cafe": "#a2673f",
    "lavanda-crepusculo": "#c084fc",
    "monocromo-retro": "#8c5d31",
    "cafe-moca": "#d4a373"
  };
  const themeLabel = document.getElementById("currentThemeLabel");
  if (themeLabel) themeLabel.textContent = themeNames[s.theme] || s.theme;
  const themeDot = document.getElementById("currentThemeDot");
  if (themeDot) themeDot.style.background = themeDotColors[s.theme] || "var(--accent-color)";
  const metaThemeColor = document.getElementById("metaThemeColor");
  if (metaThemeColor) metaThemeColor.setAttribute("content", themeDotColors[s.theme] || "#991b1b");

  // Tipografía
  const fontCss = FONT_FAMILIES[s.fontFamily] || FONT_FAMILIES["font-merriweather"];
  root.style.setProperty("--font-reading", fontCss);

  const reader = document.getElementById("readerContent");
  if (reader) {
    const fontClasses = Object.keys(FONT_FAMILIES);
    fontClasses.forEach(cls => reader.classList.remove(cls));
    reader.classList.add(s.fontFamily);
  }
  const selectFont = document.getElementById("selectFontFamily");
  if (selectFont) selectFont.value = s.fontFamily;

  // Estilo de fuente (Cursiva, Negrita, etc.)
  const fontStyle = s.fontStyle || "normal";
  root.setAttribute("data-font-style", fontStyle);

  let fw = "400";
  let fs = "normal";
  switch (fontStyle) {
    case "italic":
      fw = "400";
      fs = "italic";
      break;
    case "semibold":
      fw = "600";
      fs = "normal";
      break;
    case "bold":
      fw = "700";
      fs = "normal";
      break;
    case "bold-italic":
      fw = "700";
      fs = "italic";
      break;
    case "light":
      fw = "300";
      fs = "normal";
      break;
    case "normal":
    default:
      fw = "400";
      fs = "normal";
      break;
  }
  root.style.setProperty("--font-weight", fw);
  root.style.setProperty("--font-style", fs);

  const styleNames = {
    "normal": "Normal",
    "italic": "Cursiva",
    "semibold": "Seminegrita",
    "bold": "Negrita",
    "bold-italic": "Negrita Cursiva",
    "light": "Ligera"
  };

  const styleLabel = document.getElementById("fontStyleCurrentLabel");
  if (styleLabel) {
    styleLabel.textContent = styleNames[fontStyle] || "Normal";
  }

  const sampleEl = document.getElementById("currentFontStyleSample");
  if (sampleEl) {
    sampleEl.style.fontWeight = fw;
    sampleEl.style.fontStyle = fs;
  }

  document.querySelectorAll(".font-style-btn").forEach(btn => {
    const isTarget = btn.getAttribute("data-font-style-target") === fontStyle;
    btn.classList.toggle("active-font-style", isTarget);
    btn.classList.toggle("border-[var(--accent-color)]", isTarget);
    btn.classList.toggle("text-[var(--accent-color)]", isTarget);
  });

  // Tamaño de texto
  root.style.setProperty("--font-size", `${s.fontSize}px`);
  const fontDisplay = document.getElementById("fontSizeDisplay");
  if (fontDisplay) fontDisplay.textContent = `${s.fontSize} px`;
  const slider = document.getElementById("fontSizeSlider");
  if (slider) slider.value = s.fontSize;

  // Interlineado
  root.style.setProperty("--line-height", s.lineHeight);
  const lhDisplay = document.getElementById("lineHeightDisplay");
  if (lhDisplay) {
    const val = parseFloat(s.lineHeight);
    lhDisplay.textContent = Math.round(val * 100) % 10 === 0 ? val.toFixed(1) : val.toFixed(2);
  }
  const lhSlider = document.getElementById("lineHeightSlider");
  if (lhSlider) lhSlider.value = parseFloat(s.lineHeight);

  // Disposición de versículos
  const textBody = document.getElementById("bibleTextBody");
  if (textBody) {
    textBody.classList.remove("mode-paragraph", "mode-lines");
    textBody.classList.add(s.layoutMode === "lines" ? "mode-lines" : "mode-paragraph");
    textBody.classList.toggle("hide-verse-numbers", !s.showVerseNumbers);
  }
  const btnPara = document.getElementById("btnLayoutParagraph");
  const btnLines = document.getElementById("btnLayoutLines");
  if (btnPara && btnLines) {
    btnPara.classList.toggle("border-[var(--accent-color)]", s.layoutMode === "paragraph");
    btnPara.classList.toggle("bg-[var(--bg-surface)]", s.layoutMode === "paragraph");
    btnLines.classList.toggle("border-[var(--accent-color)]", s.layoutMode === "lines");
    btnLines.classList.toggle("bg-[var(--bg-surface)]", s.layoutMode === "lines");
  }

  // Toggle números de versículo
  const toggleNum = document.getElementById("toggleVerseNumbers");
  if (toggleNum) toggleNum.checked = s.showVerseNumbers;

  // Toggle títulos bíblicos (Reina Valera 1960)
  const toggleTitles = document.getElementById("toggleBibleTitles");
  if (toggleTitles) toggleTitles.checked = s.showTitles !== false;
  document.body.classList.toggle("hide-titles", s.showTitles === false);
  if (textBody) textBody.classList.toggle("hide-titles", s.showTitles === false);

  // Toggle resaltar citas bíblicas en negrita
  const toggleQuotes = document.getElementById("toggleHighlightQuotes");
  if (toggleQuotes) toggleQuotes.checked = s.highlightQuotes !== false;

  // Toggle Palabras de Jesús en rojo
  const toggleJesus = document.getElementById("toggleJesusWords");
  if (toggleJesus) toggleJesus.checked = s.jesusWordsRed !== false;
  document.body.classList.toggle("hide-jesus-words", s.jesusWordsRed === false);

  // Modo Diccionario RAE
  document.body.classList.toggle("rae-mode-active", !!s.raeMode);
  const toggleRaeSetting = document.getElementById("toggleRaeModeSetting");
  if (toggleRaeSetting) {
    toggleRaeSetting.checked = !!s.raeMode;
  }

  // Alineación
  root.style.setProperty("--text-alignment", s.textAlign);
  const btnLeft = document.getElementById("btnAlignLeft");
  const btnJust = document.getElementById("btnAlignJustify");
  if (btnLeft && btnJust) {
    btnLeft.classList.toggle("border-[var(--accent-color)]", s.textAlign === "left");
    btnLeft.classList.toggle("text-[var(--accent-color)]", s.textAlign === "left");
    btnJust.classList.toggle("border-[var(--accent-color)]", s.textAlign === "justify");
    btnJust.classList.toggle("text-[var(--accent-color)]", s.textAlign === "justify");
  }
}

// Guardar y restaurar la última posición leída
function saveCurrentPosition() {
  const pos = {
    book: AppState.currentBook,
    chapter: AppState.currentChapter
  };
  localStorage.setItem("rvg_last_position", JSON.stringify(pos));
}

function restoreLastPosition() {
  const saved = localStorage.getItem("rvg_last_position");
  if (saved) {
    try {
      const pos = JSON.parse(saved);
      if (pos.book && pos.chapter) {
        AppState.currentBook = pos.book;
        AppState.currentChapter = parseInt(pos.chapter, 10);
      }
    } catch (e) {
      console.warn("No se pudo restaurar posición anterior:", e);
    }
  }
}

// --- 6. Motor de Renderizado de Capítulos y Versículos ---

// Helper para convertir texto de versículo en palabras interactivas para Modo RAE
function appendTextAsRaeWords(parentEl, textStr, verseItem) {
  if (!textStr) return;
  const parts = textStr.split(/([a-záéíóúüñA-ZÁÉÍÓÚÜÑ]+)/);
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    if (/[a-záéíóúüñA-ZÁÉÍÓÚÜÑ]/.test(part)) {
      const span = document.createElement("span");
      span.className = "rae-word";
      span.textContent = part;
      span.setAttribute("data-word", part);
      span.setAttribute("data-verse", verseItem.verse);
      parentEl.appendChild(span);
    } else {
      parentEl.appendChild(document.createTextNode(part));
    }
  }
}



// Helper para renderizar texto con soporte para Modo Diccionario RAE
function renderTextWithRae(parentEl, textStr, verseItem) {
  if (!textStr) return;
  appendTextAsRaeWords(parentEl, textStr, verseItem);
}

function renderVerseWithQuotes(verseEl, fullText, quoteList, isParagraphMode, verseItem) {
  // Encontrar todas las coincidencias válidas de las citas en el texto del versículo o segmento
  const matches = [];
  for (let i = 0; i < quoteList.length; i++) {
    const q = quoteList[i];
    if (!q || !q.text) continue;
    const cleanQuoteText = q.text.replace(/[\u2039\u203a]/g, "");
    const idx = fullText.indexOf(cleanQuoteText);
    if (idx !== -1) {
      matches.push({ start: idx, end: idx + cleanQuoteText.length, quote: q, matchedText: cleanQuoteText });
    }
  }

  // Si ninguna coincide como subcadena exacta, renderizar texto regular con soporte de RAE
  if (matches.length === 0) {
    const textStr = isParagraphMode ? ` ${fullText} ` : fullText;
    renderTextWithRae(verseEl, textStr, verseItem);
    return;
  }

  // Ordenar de izquierda a derecha por posición de inicio
  matches.sort((a, b) => a.start - b.start);

  let lastIndex = 0;
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    if (m.start < lastIndex) continue; // Evitar solapamientos

    let before = fullText.slice(lastIndex, m.start);
    if (lastIndex === 0 && isParagraphMode) {
      before = " " + before;
    }
    if (before) {
      renderTextWithRae(verseEl, before, verseItem);
    }

    // Elemento strong con clase .bible-quote y tooltip con la referencia del pasaje citado
    const strongEl = document.createElement("strong");
    strongEl.className = "bible-quote font-bold";
    if (m.quote.ref) {
      strongEl.setAttribute("data-quote-ref", m.quote.ref);
      strongEl.title = `Cita bíblica de: ${m.quote.ref}`;
    } else {
      strongEl.title = "Cita de las Escrituras del Antiguo Testamento";
    }
    renderTextWithRae(strongEl, m.matchedText, verseItem);
    verseEl.appendChild(strongEl);

    lastIndex = m.end;
  }

  let after = fullText.slice(lastIndex);
  if (isParagraphMode) {
    after = after + " ";
  }
  if (after) {
    renderTextWithRae(verseEl, after, verseItem);
  }
}

// Helper para formatear texto con palabras de Jesús para vistas HTML rápidas (buscador, tarjeta de cita)
function formatTextWithJesusWords(text) {
  if (!text) return "";
  if (!text.includes("\u2039") && !text.includes("\u203a")) return text;
  return text.replace(/\u2039([^\u203a]*)\u203a/g, '<span class="words-of-jesus">$1</span>').replace(/[\u2039\u203a]/g, "");
}

// Helper para parsear versículos dividiéndolos en segmentos de palabras de Jesús y texto regular
function parseJesusSegments(text) {
  if (!text || (!text.includes("\u2039") && !text.includes("\u203a"))) {
    return [{ text: text || "", isJesus: false }];
  }
  const segments = [];
  let cursor = 0;
  while (cursor < text.length) {
    const openIdx = text.indexOf("\u2039", cursor);
    if (openIdx === -1) {
      const rest = text.slice(cursor).replace(/[\u2039\u203a]/g, "");
      if (rest) segments.push({ text: rest, isJesus: false });
      break;
    }
    if (openIdx > cursor) {
      const before = text.slice(cursor, openIdx).replace(/[\u2039\u203a]/g, "");
      if (before) segments.push({ text: before, isJesus: false });
    }
    const closeIdx = text.indexOf("\u203a", openIdx + 1);
    if (closeIdx === -1) {
      const inside = text.slice(openIdx + 1).replace(/[\u2039\u203a]/g, "");
      if (inside) segments.push({ text: inside, isJesus: true });
      break;
    }
    const inside = text.slice(openIdx + 1, closeIdx).replace(/[\u2039\u203a]/g, "");
    if (inside) segments.push({ text: inside, isJesus: true });
    cursor = closeIdx + 1;
  }
  return segments.length > 0 ? segments : [{ text: text.replace(/[\u2039\u203a]/g, ""), isJesus: false }];
}

// Renderiza el contenido integral del versículo integrando:
// 1. Palabras de Jesús en rojo (.words-of-jesus)
// 2. Citas del Antiguo Testamento (.bible-quote)
// 3. Modo Diccionario RAE (.rae-word)
function renderVerseContent(verseEl, fullText, quoteList, isParagraphMode, verseItem) {
  const segments = parseJesusSegments(fullText);

  if (isParagraphMode && segments.length > 0) {
    segments[0].text = " " + segments[0].text;
    segments[segments.length - 1].text = segments[segments.length - 1].text + " ";
  }

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    let targetEl = verseEl;

    if (seg.isJesus) {
      const jesusSpan = document.createElement("span");
      jesusSpan.className = "words-of-jesus";
      verseEl.appendChild(jesusSpan);
      targetEl = jesusSpan;
    }

    if (quoteList && quoteList.length > 0) {
      renderVerseWithQuotes(targetEl, seg.text, quoteList, false, verseItem);
    } else {
      renderTextWithRae(targetEl, seg.text, verseItem);
    }
  }
}

function renderCurrentChapter() {
  clearVerseSelection();
  const bookMeta = BIBLE_CANON.find(b => b.name.toLowerCase() === AppState.currentBook.toLowerCase()) || BIBLE_CANON[0];
  
  // Actualizar Títulos de la interfaz
  const locationText = `${bookMeta.name} ${AppState.currentChapter}`;
  document.title = `${locationText} - Santa Biblia RVG2010`;
  
  const headerLoc = document.getElementById("headerCurrentLocation");
  if (headerLoc) headerLoc.textContent = locationText;
  
  const bookTitle = document.getElementById("currentBookTitle");
  if (bookTitle) bookTitle.textContent = locationText;

  const badge = document.getElementById("currentTestamentBadge");
  if (badge) {
    badge.textContent = bookMeta.testament === "AT" ? "Antiguo Testamento" : "Nuevo Testamento";
  }

  // Obtener versículos correspondientes al libro y capítulo actual (búsqueda optimizada O(1))
  const key = `${bookMeta.name.toLowerCase()}_${AppState.currentChapter}`;
  let currentVerses = AppState.chapterIndex ? AppState.chapterIndex.get(key) : null;
  if (!currentVerses) {
    currentVerses = AppState.versesData.filter(v => 
      v.book.toLowerCase() === bookMeta.name.toLowerCase() && 
      parseInt(v.chapter, 10) === AppState.currentChapter
    );
  }

  const container = document.getElementById("bibleTextBody");
  if (!container) return;

  if (currentVerses && currentVerses.length > 0) {
    // Renderizado según modo
    container.innerHTML = "";
    currentVerses.sort((a, b) => a.verse - b.verse).forEach(verseItem => {
      // Título de sección / Subtítulo bíblico (Reina Valera 1960)
      const titleKey = `${bookMeta.name.toLowerCase()}_${AppState.currentChapter}_${verseItem.verse}`;
      const codeKey = bookMeta.id ? `${bookMeta.id.toLowerCase()}_${AppState.currentChapter}_${verseItem.verse}` : "";
      const sectionTitle = AppState.titlesIndex ? (AppState.titlesIndex.get(titleKey) || AppState.titlesIndex.get(codeKey)) : null;

      if (sectionTitle && AppState.settings.showTitles !== false) {
        const headingWrapper = document.createElement("div");
        headingWrapper.className = "bible-section-heading";
        const headingTitle = document.createElement("h3");
        headingTitle.className = "bible-section-title";
        headingTitle.textContent = sectionTitle;
        headingWrapper.appendChild(headingTitle);
        container.appendChild(headingWrapper);
      }

      const verseEl = document.createElement("span");
      verseEl.className = "bible-verse cursor-pointer";
      verseEl.id = `v-${verseItem.verse}`;
      verseEl.setAttribute("data-verse-number", verseItem.verse);
      verseEl.title = `Clic para seleccionar o compartir ${bookMeta.name} ${AppState.currentChapter}:${verseItem.verse}`;

      const numEl = document.createElement("sup");
      numEl.className = "verse-number";
      numEl.textContent = verseItem.verse;
      verseEl.appendChild(numEl);

      // Renderizado integral con Palabras de Jesús en rojo, Citas del AT y RAE
      const quoteKey = `${bookMeta.name.toLowerCase()}_${AppState.currentChapter}_${verseItem.verse}`;
      const quoteList = (AppState.settings.highlightQuotes && AppState.quotesIndex)
        ? AppState.quotesIndex.get(quoteKey)
        : null;

      renderVerseContent(verseEl, verseItem.text, quoteList, AppState.settings.layoutMode === "paragraph", verseItem);

      // Clic para alternar selección (uno o varios versículos)
      verseEl.addEventListener("click", (e) => {
        handleVerseClick(verseItem, e);
      });

      container.appendChild(verseEl);
    });

    // Poblar dropdowns de salto a capítulo y versículo
    populateChapterSelector(bookMeta.chapters, AppState.currentChapter);
    populateVerseSelector(currentVerses.length);
  } else {
    // Fallback si por alguna razón no hubiera versículos
    container.innerHTML = `
      <div class="p-8 my-6 text-center border-2 border-dashed border-[var(--border-color)] rounded-xl bg-[var(--bg-surface)]">
        <svg class="w-12 h-12 mx-auto text-[var(--accent-color)] opacity-70 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
        <h3 class="text-lg font-bold mb-1">${bookMeta.name} ${AppState.currentChapter}</h3>
        <p class="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto mb-2">
          No se encontraron versículos disponibles para este capítulo.
        </p>
      </div>
    `;
    populateChapterSelector(bookMeta.chapters, AppState.currentChapter);
    populateVerseSelector(0);
  }

  updateNavButtonsState();
  saveCurrentPosition();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Poblar selector rápido de capítulos del libro actual
function populateChapterSelector(totalChapters, currentChapter) {
  const sel = document.getElementById("selectQuickChapter");
  if (!sel) return;
  sel.innerHTML = '<option value="">Capítulo...</option>';
  for (let i = 1; i <= totalChapters; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `Cap. ${i}`;
    if (i === currentChapter) {
      opt.selected = true;
    }
    sel.appendChild(opt);
  }
}

// Poblar selector rápido de versículos
function populateVerseSelector(count) {
  const sel = document.getElementById("selectQuickVerse");
  if (!sel) return;
  sel.innerHTML = '<option value="">Versículo...</option>';
  for (let i = 1; i <= count; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `V. ${i}`;
    sel.appendChild(opt);
  }
}

// Salto suave a versículo específico
function scrollToVerse(verseNum) {
  const el = document.getElementById(`v-${verseNum}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    highlightVerse(verseNum);
  }
}

function highlightVerse(verseNum) {
  document.querySelectorAll(".bible-verse").forEach(v => v.classList.remove("verse-highlight"));
  const target = document.getElementById(`v-${verseNum}`);
  if (target) {
    target.classList.add("verse-highlight");
    setTimeout(() => {
      target.classList.remove("verse-highlight");
    }, 2500);
  }
}

// --- 7. Gestión de Selección Múltiple y Compartición de Versículos ---

// Obtener versículos del capítulo actual en orden numérico
function getCurrentChapterVerses() {
  const bookMeta = BIBLE_CANON.find(b => b.name.toLowerCase() === AppState.currentBook.toLowerCase()) || BIBLE_CANON[0];
  const key = `${bookMeta.name.toLowerCase()}_${AppState.currentChapter}`;
  let verses = AppState.chapterIndex ? AppState.chapterIndex.get(key) : null;
  if (!verses) {
    verses = AppState.versesData.filter(v => 
      v.book.toLowerCase() === bookMeta.name.toLowerCase() && 
      parseInt(v.chapter, 10) === AppState.currentChapter
    );
  }
  return verses ? verses.slice().sort((a, b) => a.verse - b.verse) : [];
}

// Formatear rangos continuos y discontinuos (ej. 1-3, 5, 7-9)
function formatVerseRanges(verseNumbers) {
  if (!verseNumbers || verseNumbers.length === 0) return "";
  const sorted = Array.from(verseNumbers).map(Number).sort((a, b) => a - b);
  const ranges = [];
  let start = sorted[0];
  let prev = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const curr = sorted[i];
    if (curr === prev + 1) {
      prev = curr;
    } else {
      ranges.push(start === prev ? `${start}` : `${start}-${prev}`);
      start = curr;
      prev = curr;
    }
  }
  ranges.push(start === prev ? `${start}` : `${start}-${prev}`);
  return ranges.join(", ");
}

// Manejar clic en versículo (selección individual o por rango con tecla Shift)
function handleVerseClick(verseItem, event) {
  // Si el Modo RAE está activado y el usuario hizo clic en una palabra específica o seleccionó texto
  if (AppState.settings.raeMode) {
    const sel = (typeof window !== "undefined" && window.getSelection) ? window.getSelection().toString().trim() : "";
    const raeWordEl = event.target.closest(".rae-word");
    if (sel && sel.length > 0 && sel.length <= 60) {
      event.stopPropagation();
      goToRaeDefinition(sel, verseItem.text);
      return;
    }
    if (raeWordEl) {
      event.stopPropagation();
      const rawWord = raeWordEl.getAttribute("data-word") || raeWordEl.textContent;
      goToRaeDefinition(rawWord, verseItem.text);
      return;
    }
  }

  if (!AppState.selection) {
    AppState.selection = { selectedVerses: new Map(), lastClickedVerse: null };
  }

  // Selección de rango con Shift
  if (event.shiftKey && AppState.selection.lastClickedVerse !== null) {
    const start = Math.min(AppState.selection.lastClickedVerse, verseItem.verse);
    const end = Math.max(AppState.selection.lastClickedVerse, verseItem.verse);
    const chapterVerses = getCurrentChapterVerses();
    chapterVerses.forEach(v => {
      if (v.verse >= start && v.verse <= end) {
        AppState.selection.selectedVerses.set(v.verse, { verse: v.verse, text: v.text });
      }
    });
  } else {
    // Alternar selección individual
    if (AppState.selection.selectedVerses.has(verseItem.verse)) {
      AppState.selection.selectedVerses.delete(verseItem.verse);
    } else {
      AppState.selection.selectedVerses.set(verseItem.verse, { verse: verseItem.verse, text: verseItem.text });
    }
  }

  AppState.selection.lastClickedVerse = verseItem.verse;
  syncVerseSelectionVisuals();
  updateVerseActionBar();
}

// Sincronizar clases visuales de selección en el DOM
function syncVerseSelectionVisuals() {
  const container = document.getElementById("bibleTextBody");
  if (!container) return;
  const elements = container.querySelectorAll(".bible-verse");
  elements.forEach(el => {
    const vNum = parseInt(el.getAttribute("data-verse-number"), 10);
    if (AppState.selection && AppState.selection.selectedVerses.has(vNum)) {
      el.classList.add("verse-selected");
    } else {
      el.classList.remove("verse-selected");
    }
  });
}

// Actualizar barra flotante inferior con referencia y conteo de versículos
function updateVerseActionBar() {
  const bar = document.getElementById("verseActionBar");
  if (!bar) return;

  const count = AppState.selection ? AppState.selection.selectedVerses.size : 0;
  if (count === 0) {
    bar.classList.add("hidden");
    return;
  }

  bar.classList.remove("hidden");

  const countBadge = document.getElementById("verseActionCount");
  const citationSpan = document.getElementById("verseActionCitation");
  const btnSelectAll = document.getElementById("btnSelectAllVerses");

  const sortedVerses = Array.from(AppState.selection.selectedVerses.values()).sort((a, b) => a.verse - b.verse);
  const verseNums = sortedVerses.map(v => v.verse);
  const ranges = formatVerseRanges(verseNums);
  const citation = `${AppState.currentBook} ${AppState.currentChapter}:${ranges}`;

  if (countBadge) countBadge.textContent = count;
  if (citationSpan) {
    citationSpan.textContent = citation;
    citationSpan.title = citation;
  }
  if (btnSelectAll) {
    const chapterVerses = getCurrentChapterVerses();
    const isAll = chapterVerses.length > 0 && count === chapterVerses.length;
    btnSelectAll.textContent = isAll ? "Deseleccionar todo" : "Seleccionar todo";
  }
}

// Alternar entre seleccionar y deseleccionar todos los versículos del capítulo
function toggleSelectAllVerses() {
  const chapterVerses = getCurrentChapterVerses();
  if (!chapterVerses || chapterVerses.length === 0) return;

  if (AppState.selection.selectedVerses.size === chapterVerses.length) {
    clearVerseSelection();
  } else {
    chapterVerses.forEach(v => {
      AppState.selection.selectedVerses.set(v.verse, { verse: v.verse, text: v.text });
    });
    AppState.selection.lastClickedVerse = chapterVerses[0].verse;
    syncVerseSelectionVisuals();
    updateVerseActionBar();
  }
}

// Limpiar toda la selección de versículos
function clearVerseSelection() {
  if (AppState.selection) {
    AppState.selection.selectedVerses.clear();
    AppState.selection.lastClickedVerse = null;
  }
  syncVerseSelectionVisuals();
  const bar = document.getElementById("verseActionBar");
  if (bar) bar.classList.add("hidden");
}

// Formatear texto de un versículo incluyendo asteriscos (*) en las citas del Antiguo Testamento y limpiando delimitadores técnicos
function formatVerseTextWithQuotes(book, chapter, verse, text) {
  if (!text) return text || "";
  const cleanText = text.replace(/[\u2039\u203a]/g, "");
  if (!AppState.quotesIndex) return cleanText;

  const canonical = BIBLE_BOOK_ALIASES[normalizeKey(book)] || book;
  const quoteKey = `${canonical.toLowerCase()}_${chapter}_${verse}`;
  const quoteList = AppState.quotesIndex.get(quoteKey);

  if (!quoteList || !Array.isArray(quoteList) || quoteList.length === 0) {
    return cleanText;
  }

  // Encontrar todas las coincidencias válidas de las citas en el texto del versículo
  const matches = [];
  for (let i = 0; i < quoteList.length; i++) {
    const q = quoteList[i];
    if (!q || !q.text) continue;
    const cleanQ = q.text.replace(/[\u2039\u203a]/g, "");
    const idx = cleanText.indexOf(cleanQ);
    if (idx !== -1) {
      matches.push({ start: idx, end: idx + cleanQ.length, quoteText: cleanQ });
    }
  }

  if (matches.length === 0) {
    return cleanText;
  }

  // Ordenar de izquierda a derecha por posición de inicio
  matches.sort((a, b) => a.start - b.start);

  let result = "";
  let lastIndex = 0;
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    if (m.start < lastIndex) continue; // Evitar solapamientos
    result += cleanText.slice(lastIndex, m.start);
    result += `*${m.quoteText}*`;
    lastIndex = m.end;
  }
  result += cleanText.slice(lastIndex);
  return result;
}

// Copiar los versículos seleccionados al portapapeles
function copySelectedVerses() {
  if (!AppState.selection || AppState.selection.selectedVerses.size === 0) return;

  const sortedVerses = Array.from(AppState.selection.selectedVerses.values()).sort((a, b) => a.verse - b.verse);
  const verseNums = sortedVerses.map(v => v.verse);
  const ranges = formatVerseRanges(verseNums);
  const citation = `${AppState.currentBook} ${AppState.currentChapter}:${ranges}`;

  let bodyText = "";
  if (sortedVerses.length === 1) {
    const vText = formatVerseTextWithQuotes(AppState.currentBook, AppState.currentChapter, sortedVerses[0].verse, sortedVerses[0].text);
    bodyText = `"${vText}"`;
  } else {
    bodyText = sortedVerses.map(v => `${v.verse} ${formatVerseTextWithQuotes(AppState.currentBook, AppState.currentChapter, v.verse, v.text)}`).join("\n");
    bodyText = `"${bodyText}"`;
  }

  const fullText = `${bodyText}\n— ${citation} (RVG2010)`;
  copyTextToClipboard(fullText, `Copiado: ${citation}`);
}

// Compartir los versículos seleccionados directamente a WhatsApp
function shareSelectedVersesToWhatsapp() {
  if (!AppState.selection || AppState.selection.selectedVerses.size === 0) return;

  const sortedVerses = Array.from(AppState.selection.selectedVerses.values()).sort((a, b) => a.verse - b.verse);
  const verseNums = sortedVerses.map(v => v.verse);
  const ranges = formatVerseRanges(verseNums);
  const citation = `${AppState.currentBook} ${AppState.currentChapter}:${ranges}`;

  let bodyText = "";
  if (sortedVerses.length === 1) {
    const vText = formatVerseTextWithQuotes(AppState.currentBook, AppState.currentChapter, sortedVerses[0].verse, sortedVerses[0].text);
    bodyText = `"${vText}"`;
  } else {
    bodyText = sortedVerses.map(v => `*${v.verse}* ${formatVerseTextWithQuotes(AppState.currentBook, AppState.currentChapter, v.verse, v.text)}`).join("\n\n");
  }

  const message = `*${citation} (RVG2010)*\n\n${bodyText}\n\n_Santa Biblia Reina Valera Gómez 2010_`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
  showToast(`Abriendo WhatsApp: ${citation}`);
}

// Compartir los versículos seleccionados mediante Web Share API
async function shareSelectedVersesNative() {
  if (!AppState.selection || AppState.selection.selectedVerses.size === 0) return;

  const sortedVerses = Array.from(AppState.selection.selectedVerses.values()).sort((a, b) => a.verse - b.verse);
  const verseNums = sortedVerses.map(v => v.verse);
  const ranges = formatVerseRanges(verseNums);
  const citation = `${AppState.currentBook} ${AppState.currentChapter}:${ranges}`;

  let bodyText = "";
  if (sortedVerses.length === 1) {
    const vText = formatVerseTextWithQuotes(AppState.currentBook, AppState.currentChapter, sortedVerses[0].verse, sortedVerses[0].text);
    bodyText = `"${vText}"`;
  } else {
    bodyText = sortedVerses.map(v => `${v.verse} ${formatVerseTextWithQuotes(AppState.currentBook, AppState.currentChapter, v.verse, v.text)}`).join("\n");
    bodyText = `"${bodyText}"`;
  }

  const fullText = `${bodyText}\n— ${citation} (RVG2010)`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: `${citation} - RVG2010`,
        text: fullText
      });
      showToast(`Compartido: ${citation}`);
    } catch (err) {
      if (err.name !== "AbortError") {
        copyTextToClipboard(fullText, `Copiado para compartir: ${citation}`);
      }
    }
  } else {
    copyTextToClipboard(fullText, `Copiado para compartir: ${citation}`);
  }
}

// Compartir un versículo individual directamente a WhatsApp (para buscador)
function shareVerseToWhatsapp(book, chapter, verse, text) {
  const citation = `${book} ${chapter}:${verse}`;
  const vText = formatVerseTextWithQuotes(book, chapter, verse, text);
  const message = `*${citation} (RVG2010)*\n\n"${vText}"\n\n_Santa Biblia Reina Valera Gómez 2010_`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  showToast(`Abriendo WhatsApp: ${citation}`);
}

// Copiar un versículo individual al portapapeles
function copyVerseToClipboard(book, chapter, verse, text, quoteRef = null) {
  const vText = formatVerseTextWithQuotes(book, chapter, verse, text);
  const citation = `"${vText}" — ${book} ${chapter}:${verse} (RVG2010)`;
  const toastMsg = quoteRef 
    ? `Copiado: ${book} ${chapter}:${verse} (Cita: ${quoteRef})` 
    : `Copiado: ${book} ${chapter}:${verse}`;
  copyTextToClipboard(citation, toastMsg);
}

// Utilidad genérica para copiar texto al portapapeles con fallback robusto
function copyTextToClipboard(text, successToastMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successToastMsg || "Copiado al portapapeles");
    }).catch(() => {
      fallbackCopyText(text, successToastMsg);
    });
  } else {
    fallbackCopyText(text, successToastMsg);
  }
}

function fallbackCopyText(text, successToastMsg) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textArea);
    if (ok) {
      showToast(successToastMsg || "Copiado al portapapeles");
    } else {
      showToast("Texto preparado para copiar");
    }
  } catch (e) {
    showToast("Texto preparado para copiar");
  }
}

// Toast de notificación
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msg = document.getElementById("toastMessage");
  if (!toast || !msg) return;
  msg.textContent = message;
  toast.classList.remove("opacity-0", "translate-y-16", "pointer-events-none");
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-16", "pointer-events-none");
  }, 2200);
}

// --- 7. Navegación Anterior / Siguiente Capítulo ---
function getAdjacentChapterInfo(delta) {
  const bookIndex = BIBLE_CANON.findIndex(b => b.name.toLowerCase() === AppState.currentBook.toLowerCase());
  if (bookIndex === -1) return null;

  const currentBookMeta = BIBLE_CANON[bookIndex];
  let newChapter = AppState.currentChapter + delta;
  let newBook = currentBookMeta.name;

  if (newChapter < 1) {
    if (bookIndex > 0) {
      const prevBook = BIBLE_CANON[bookIndex - 1];
      newBook = prevBook.name;
      newChapter = prevBook.chapters;
    } else {
      return null; // Principio de la Biblia (Génesis 1)
    }
  } else if (newChapter > currentBookMeta.chapters) {
    if (bookIndex < BIBLE_CANON.length - 1) {
      const nextBook = BIBLE_CANON[bookIndex + 1];
      newBook = nextBook.name;
      newChapter = 1;
    } else {
      return null; // Final de la Biblia (Apocalipsis 22)
    }
  }

  return { book: newBook, chapter: newChapter };
}

function changeChapter(delta) {
  const target = getAdjacentChapterInfo(delta);
  if (!target) return false;
  goToChapter(target.book, target.chapter);
  return true;
}

function goToChapter(bookName, chapterNum) {
  AppState.currentBook = bookName;
  AppState.currentChapter = parseInt(chapterNum, 10);
  closeNavDrawer();
  renderCurrentChapter();
}

function goToVerse(bookName, chapterNum, verseNum) {
  AppState.currentBook = bookName;
  AppState.currentChapter = parseInt(chapterNum, 10);
  closeNavDrawer();
  closeSearchModal();
  renderCurrentChapter();
  if (verseNum) {
    setTimeout(() => {
      scrollToVerse(verseNum);
    }, 150);
  }
}

function updateNavButtonsState() {
  const bookIndex = BIBLE_CANON.findIndex(b => b.name.toLowerCase() === AppState.currentBook.toLowerCase());
  const isStart = bookIndex === 0 && AppState.currentChapter === 1;
  const isEnd = bookIndex === BIBLE_CANON.length - 1 && AppState.currentChapter === BIBLE_CANON[bookIndex].chapters;

  const prevBtns = [document.getElementById("btnHeaderPrev"), document.getElementById("btnFooterPrev")];
  const nextBtns = [document.getElementById("btnHeaderNext"), document.getElementById("btnFooterNext")];

  prevBtns.forEach(b => { if (b) b.disabled = isStart; });
  nextBtns.forEach(b => { if (b) b.disabled = isEnd; });
}

// --- 8. Drawer de Navegación de Libros y Capítulos ---
function renderBooksGrid() {
  const container = document.getElementById("booksGrid");
  if (!container) return;

  const q = AppState.drawer.searchQuery.trim().toLowerCase();
  const testFilter = AppState.drawer.filterTestament;

  const filtered = BIBLE_CANON.filter(b => {
    const matchesTestament = testFilter === "ALL" || b.testament === testFilter;
    const matchesSearch = !q || b.name.toLowerCase().includes(q) || b.id.toLowerCase().includes(q);
    return matchesTestament && matchesSearch;
  });

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-2 text-center py-6 text-xs text-[var(--text-muted)]">No se encontró ningún libro.</div>`;
    return;
  }

  filtered.forEach(b => {
    const btn = document.createElement("button");
    const isCurrent = b.name.toLowerCase() === AppState.currentBook.toLowerCase();
    btn.type = "button";
    btn.className = `p-2.5 rounded-lg border text-left text-xs font-semibold flex items-center justify-between transition ${
      isCurrent 
        ? "border-[var(--accent-color)] bg-[var(--accent-color)] text-[var(--accent-text)]" 
        : "border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-color)]"
    }`;

    btn.innerHTML = `
      <span class="truncate">${b.name}</span>
      <span class="text-[10px] opacity-75 font-normal ml-1 shrink-0">${b.chapters} cap</span>
    `;

    btn.addEventListener("click", () => {
      openChapterPickerForBook(b);
    });

    container.appendChild(btn);
  });
}

function openChapterPickerForBook(bookMeta) {
  AppState.drawer.selectedBookForChapters = bookMeta;
  
  const stepBooks = document.getElementById("stepBooksList");
  const stepChapters = document.getElementById("stepChaptersList");
  const display = document.getElementById("selectedBookNameDisplay");
  const chaptersGrid = document.getElementById("chaptersGrid");

  if (!stepBooks || !stepChapters || !display || !chaptersGrid) return;

  display.textContent = `${bookMeta.name} (${bookMeta.chapters} cap)`;
  chaptersGrid.innerHTML = "";

  for (let ch = 1; ch <= bookMeta.chapters; ch++) {
    const chBtn = document.createElement("button");
    chBtn.type = "button";
    const isCurrent = bookMeta.name.toLowerCase() === AppState.currentBook.toLowerCase() && ch === AppState.currentChapter;
    chBtn.className = `py-2 rounded-md text-xs font-bold border transition ${
      isCurrent 
        ? "bg-[var(--accent-color)] text-[var(--accent-text)] border-[var(--accent-color)]" 
        : "border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
    }`;
    chBtn.textContent = ch;

    chBtn.addEventListener("click", () => {
      goToChapter(bookMeta.name, ch);
    });

    chaptersGrid.appendChild(chBtn);
  }

  stepBooks.classList.add("hidden");
  stepChapters.classList.remove("hidden");
}

function backToBooksList() {
  const stepBooks = document.getElementById("stepBooksList");
  const stepChapters = document.getElementById("stepChaptersList");
  if (stepBooks && stepChapters) {
    stepChapters.classList.add("hidden");
    stepBooks.classList.remove("hidden");
  }
}

// Drawer Open / Close
function openNavDrawer() {
  document.getElementById("navDrawer")?.classList.add("active");
  document.getElementById("navDrawerBackdrop")?.classList.add("active");
  // Si no hay libro abierto en paso 2, renderizar vista de libros
  backToBooksList();
  renderBooksGrid();
}

function closeNavDrawer() {
  document.getElementById("navDrawer")?.classList.remove("active");
  document.getElementById("navDrawerBackdrop")?.classList.remove("active");
}

function openSettingsDrawer() {
  document.getElementById("settingsDrawer")?.classList.add("active");
  document.getElementById("settingsDrawerBackdrop")?.classList.add("active");
}

function closeSettingsDrawer() {
  document.getElementById("settingsDrawer")?.classList.remove("active");
  document.getElementById("settingsDrawerBackdrop")?.classList.remove("active");
}

function openAboutModal() {
  document.getElementById("aboutModalOverlay")?.classList.add("active");
}

function closeAboutModal() {
  document.getElementById("aboutModalOverlay")?.classList.remove("active");
}

function jumpToVerseDirectly(bookName, chapter, verse) {
  const b = BIBLE_CANON.find(item => item.name.toLowerCase() === bookName.toLowerCase());
  if (b) {
    AppState.currentBook = b.name;
    AppState.currentChapter = parseInt(chapter, 10);
    renderCurrentChapter();
    setTimeout(() => {
      scrollToVerse(verse || 1);
    }, 200);
    showToast(`Navegando a ${b.name} ${chapter}:${verse || 1}`);
  }
}

// ============================================================================
// --- 9. MOTOR DEL BUSCADOR BÍBLICO (FRASE EXACTA Y LIBRO/CAP/VERSÍCULO) ---
// ============================================================================

// Tabla de sustitución de acentos para búsquedas flexibles e insensibles a diacríticos
const ACCENT_MAP = {
  a: "[aáAÁ]", e: "[eéEÉ]", i: "[iíIÍ]", o: "[oóOÓ]", u: "[uúüUÚÜ]",
  n: "[nñNÑ]", c: "[cçCÇ]"
};

function buildFlexibleHighlightRegex(query) {
  if (!query) return null;
  const clean = query.trim().replace(/[‹›«»\[\]\(\)\.,;:!\?¿¡"'-]/g, " ");
  const words = clean.split(/\s+/).filter(w => w.length > 0);
  if (words.length === 0) return null;

  const wordPatterns = words.map(word => {
    return word.split("").map(ch => {
      const lower = ch.toLowerCase();
      return ACCENT_MAP[lower] || escapeRegExp(ch);
    }).join("");
  });

  const pattern = wordPatterns.join("[\\s‹›«»\\[\\]\\.,;:!\\?¿¡\"'\\-]+");
  try {
    return new RegExp("(" + pattern + ")", "gi");
  } catch (e) {
    return null;
  }
}

// Analizador de Citas Bíblicas (Libro, Capítulo y Versículo)
function parseBibleCitation(query) {
  if (!query || typeof query !== "string") return null;
  let str = query.trim().replace(/\./g, " ").replace(/,/g, " ");
  str = str.replace(/^([1-3])([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ])/i, "$1 $2");

  const m = str.match(/^(\d?\s*[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+(?:\s+[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+)?)\s+(\d+)(?:[:\s]+(\d+))?(?:-\d+)?$/i);
  if (!m) return null;

  const rawBook = m[1].trim();
  const chNum = parseInt(m[2], 10);
  const verseNum = m[3] ? parseInt(m[3], 10) : null;

  const normKey = normalizeKey(rawBook);
  const canonicalName = BIBLE_BOOK_ALIASES[normKey];
  if (!canonicalName) return null;

  const bookMeta = BIBLE_CANON.find(b => b.name === canonicalName);
  if (!bookMeta) return null;

  if (chNum < 1 || chNum > bookMeta.chapters) return null;

  let verseObj = null;
  if (verseNum !== null) {
    const key = `${canonicalName.toLowerCase()}_${chNum}`;
    let list = AppState.chapterIndex.get(key);
    if (!list && Array.isArray(AppState.versesData)) {
      list = AppState.versesData.filter(v => v.book.toLowerCase() === canonicalName.toLowerCase() && parseInt(v.chapter, 10) === chNum);
    }
    if (list) {
      verseObj = list.find(v => parseInt(v.verse, 10) === verseNum) || null;
    }
  }

  return {
    isCitation: true,
    canonicalName,
    bookMeta,
    chapter: chNum,
    verse: verseNum,
    verseData: verseObj
  };
}

function openSearchModal(initialQuery = "") {
  const modal = document.getElementById("searchModalOverlay");
  const input = document.getElementById("bibleSearchInput");
  const scopeBookBtn = document.getElementById("btnScopeCurrentBook");

  if (scopeBookBtn) {
    scopeBookBtn.textContent = `Solo ${AppState.currentBook}`;
  }

  if (modal) {
    modal.classList.add("active");
  }

  if (input) {
    if (initialQuery) {
      input.value = initialQuery;
      AppState.search.query = initialQuery;
    }
    setTimeout(() => {
      input.focus();
      if (initialQuery) input.select();
    }, 100);
  }

  executeBibleSearch();
}

function closeSearchModal() {
  document.getElementById("searchModalOverlay")?.classList.remove("active");
}

function executeBibleSearch() {
  const container = document.getElementById("searchResultsContainer");
  const countDisplay = document.getElementById("searchResultsCount");
  const clearBtn = document.getElementById("btnClearSearch");
  if (!container) return;

  const rawQuery = (AppState.search.query || "").trim();
  
  if (clearBtn) {
    clearBtn.classList.toggle("hidden", rawQuery.length === 0);
  }

  AppState.search.lastCitationMatch = null;
  AppState.search.currentResults = [];

  // Estado Inicial: Mostrar sugerencias y ejemplos
  if (rawQuery.length < 2) {
    if (countDisplay) {
      countDisplay.textContent = "Escribe una frase exacta o una cita bíblica (ej. Juan 3:16).";
    }
    container.innerHTML = `
      <div class="py-6 px-4 text-center space-y-4">
        <div class="w-12 h-12 mx-auto rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] shadow-sm">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <div>
          <h4 class="font-bold text-sm text-[var(--text-primary)]">Buscador Bíblico RVG2010</h4>
          <p class="text-xs text-[var(--text-muted)] max-w-md mx-auto mt-1">
            Encuentra <strong>frases exactas</strong> (con o sin tilde) en los 31,102 versículos de la Santa Biblia, o salta directamente especificando el <strong>libro con su capítulo y versículo</strong>.
          </p>
        </div>

        <div class="pt-2">
          <p class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">Citas bíblicas directas (haz clic para probar):</p>
          <div class="flex flex-wrap items-center justify-center gap-1.5 max-w-lg mx-auto">
            <button type="button" class="search-pill btn-example-pill" data-search="Juan 3:16">Juan 3:16</button>
            <button type="button" class="search-pill btn-example-pill" data-search="Salmos 23:1">Salmos 23:1</button>
            <button type="button" class="search-pill btn-example-pill" data-search="Génesis 1:1">Génesis 1:1</button>
            <button type="button" class="search-pill btn-example-pill" data-search="Romanos 8:28">Romanos 8:28</button>
            <button type="button" class="search-pill btn-example-pill" data-search="1 Corintios 13:4">1 Corintios 13:4</button>
            <button type="button" class="search-pill btn-example-pill" data-search="Filipenses 4:13">Filipenses 4:13</button>
            <button type="button" class="search-pill btn-example-pill" data-search="Apocalipsis 22:21">Apocalipsis 22:21</button>
          </div>
        </div>

        <div class="pt-2">
          <p class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">Frases exactas populares:</p>
          <div class="flex flex-wrap items-center justify-center gap-1.5 max-w-lg mx-auto">
            <button type="button" class="search-pill btn-example-pill" data-search="en el principio">"en el principio"</button>
            <button type="button" class="search-pill btn-example-pill" data-search="de tal manera amó">"de tal manera amó"</button>
            <button type="button" class="search-pill btn-example-pill" data-search="Jehová es mi pastor">"Jehová es mi pastor"</button>
            <button type="button" class="search-pill btn-example-pill" data-search="lámpara es a mis pies">"lámpara es a mis pies"</button>
            <button type="button" class="search-pill btn-example-pill" data-search="árbol de la vida">"árbol de la vida"</button>
            <button type="button" class="search-pill btn-example-pill" data-search="amor de Dios">"amor de Dios"</button>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll(".btn-example-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const val = pill.getAttribute("data-search");
        const input = document.getElementById("bibleSearchInput");
        if (input && val) {
          input.value = val;
          AppState.search.query = val;
          executeBibleSearch();
        }
      });
    });
    return;
  }

  // 1. Detectar si coincide con una Cita Bíblica (Libro + Capítulo + Versículo)
  const citation = parseBibleCitation(rawQuery);
  AppState.search.lastCitationMatch = citation;

  // 2. Realizar Búsqueda de Frase Exacta en el Texto Bíblico
  let versesList = AppState.versesData || [];
  const scope = AppState.search.scope;

  if (scope === "AT") {
    versesList = versesList.filter(v => v.testament === "AT");
  } else if (scope === "NT") {
    versesList = versesList.filter(v => v.testament === "NT");
  } else if (scope === "BOOK") {
    versesList = versesList.filter(v => v.book.toLowerCase() === AppState.currentBook.toLowerCase());
  }

  const highlightRegex = buildFlexibleHighlightRegex(rawQuery);
  let matchedVerses = [];

  if (highlightRegex) {
    if (AppState.search.exactPhrase) {
      matchedVerses = versesList.filter(v => {
        highlightRegex.lastIndex = 0;
        return highlightRegex.test(v.text);
      });
    } else {
      const normWords = normalizeKey(rawQuery).split(/\s+/).filter(w => w.length > 0);
      matchedVerses = versesList.filter(v => {
        const normV = normalizeKey(v.text);
        return normWords.every(w => normV.includes(w));
      });
    }
  }

  AppState.search.currentResults = matchedVerses;

  container.innerHTML = "";

  // A. Tarjeta de Cita Bíblica Detectada (si existe)
  if (citation) {
    const citCard = document.createElement("div");
    citCard.className = "direct-citation-card p-4 rounded-xl border-2 border-[var(--accent-color)] bg-[var(--bg-surface)] shadow-md space-y-2 mb-4";
    
    if (citation.verseData) {
      citCard.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[var(--accent-color)] text-[var(--accent-text)]">
              🎯 Pasaje Bíblico Detectado
            </span>
            <span class="text-sm sm:text-base font-bold text-[var(--text-primary)]">
              ${citation.canonicalName} ${citation.chapter}:${citation.verse}
            </span>
            <span class="text-[11px] text-[var(--text-muted)] font-medium">RVG2010</span>
          </div>
          <div class="flex items-center gap-1">
            <button type="button" class="btn-whatsapp-citation p-1.5 rounded-lg border border-[var(--border-color)] bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition" title="Compartir en WhatsApp">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </button>
            <button type="button" class="btn-copy-citation p-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition" title="Copiar versículo">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </button>
          </div>
        </div>
        <p class="text-sm sm:text-base font-serif leading-relaxed text-[var(--text-primary)] bg-[var(--bg-primary)] p-3 rounded-lg border border-[var(--border-color)]">
          "${formatTextWithJesusWords(citation.verseData.text)}"
        </p>
        <div class="pt-1 flex items-center justify-between gap-2 flex-wrap">
          <span class="text-xs text-[var(--text-muted)]">Presiona Enter o haz clic para ir directamente</span>
          <button type="button" class="btn-jump-passage px-3.5 py-1.5 rounded-lg bg-[var(--accent-color)] text-[var(--accent-text)] text-xs font-bold hover:opacity-90 flex items-center gap-1.5 shadow-sm transition">
            <span>Ir a ${citation.canonicalName} ${citation.chapter}:${citation.verse}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      `;

      citCard.querySelector(".btn-jump-passage")?.addEventListener("click", () => {
        goToVerse(citation.canonicalName, citation.chapter, citation.verse);
      });

      citCard.querySelector(".btn-whatsapp-citation")?.addEventListener("click", (e) => {
        e.stopPropagation();
        shareVerseToWhatsapp(citation.canonicalName, citation.chapter, citation.verse, citation.verseData.text);
      });

      citCard.querySelector(".btn-copy-citation")?.addEventListener("click", (e) => {
        e.stopPropagation();
        copyVerseToClipboard(citation.canonicalName, citation.chapter, citation.verse, citation.verseData.text);
      });
    } else {
      // Solo libro y capítulo (sin versículo específico)
      citCard.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[var(--accent-color)] text-[var(--accent-text)]">
              📖 Capítulo Bíblico
            </span>
            <span class="text-sm sm:text-base font-bold text-[var(--text-primary)]">
              ${citation.canonicalName} Capítulo ${citation.chapter}
            </span>
            <span class="text-xs text-[var(--text-muted)]">(${citation.bookMeta.chapters} capítulos en total)</span>
          </div>
          <button type="button" class="btn-jump-passage px-3.5 py-1.5 rounded-lg bg-[var(--accent-color)] text-[var(--accent-text)] text-xs font-bold hover:opacity-90 flex items-center gap-1.5 shadow-sm transition">
            <span>Abrir Capítulo ${citation.chapter}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      `;

      citCard.querySelector(".btn-jump-passage")?.addEventListener("click", () => {
        goToVerse(citation.canonicalName, citation.chapter, 1);
      });
    }

    container.appendChild(citCard);
  }


  // B. Resultados de la Búsqueda de Frase Exacta
  const totalCount = matchedVerses.length;
  const isExact = AppState.search.exactPhrase;

  if (countDisplay) {
    if (citation && totalCount === 0) {
      countDisplay.textContent = `Cita detectada: ${citation.canonicalName} ${citation.chapter}${citation.verse ? `:${citation.verse}` : ""}`;
    } else {
      countDisplay.textContent = `${totalCount} ${totalCount === 1 ? "versículo encontrado" : "versículos encontrados"}${isExact ? " con la frase exacta" : ""}`;
    }
  }

  if (totalCount > 0) {
    const resultsHeader = document.createElement("div");
    resultsHeader.className = "flex items-center justify-between text-xs text-[var(--text-muted)] font-semibold pb-1 border-b border-[var(--border-color)]";
    resultsHeader.innerHTML = `
      <span>Versículos con la frase exacta <span class="text-[var(--text-primary)]">"${rawQuery}"</span>:</span>
      <span class="text-[var(--accent-color)] font-bold">${totalCount}</span>
    `;
    container.appendChild(resultsHeader);

    const renderLimit = Math.min(totalCount, AppState.search.limit);
    const visibleVerses = matchedVerses.slice(0, renderLimit);

    visibleVerses.forEach(vItem => {
      const itemEl = document.createElement("div");
      itemEl.className = "search-result-item p-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-color)] cursor-pointer transition space-y-1.5";
      
      let highlightedText = formatTextWithJesusWords(vItem.text);
      if (highlightRegex) {
        highlightRegex.lastIndex = 0;
        highlightText = highlightedText.replace(highlightRegex, '<mark class="search-highlight">$1</mark>');
      }

      itemEl.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="text-xs sm:text-sm font-bold text-[var(--accent-color)]">
              ${vItem.book} ${vItem.chapter}:${vItem.verse}
            </span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] font-medium text-[var(--text-muted)]">
              ${vItem.testament === "AT" ? "Antiguo Testamento" : "Nuevo Testamento"}
            </span>
          </div>
          <div class="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
            <button type="button" class="btn-whatsapp-result p-1 rounded hover:bg-[#25D366]/20 text-[#25D366] transition" title="Compartir en WhatsApp">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </button>
            <button type="button" class="btn-copy-result p-1 rounded hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)] transition" title="Copiar versículo">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </button>
            <span class="hidden sm:inline font-medium hover:text-[var(--accent-color)]">Ver pasaje →</span>
          </div>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed text-[var(--text-primary)] font-serif">
          ${highlightText}
        </p>
      `;

      itemEl.addEventListener("click", () => {
        goToVerse(vItem.book, vItem.chapter, vItem.verse);
      });

      itemEl.querySelector(".btn-whatsapp-result")?.addEventListener("click", (e) => {
        e.stopPropagation();
        shareVerseToWhatsapp(vItem.book, vItem.chapter, vItem.verse, vItem.text);
      });

      itemEl.querySelector(".btn-copy-result")?.addEventListener("click", (e) => {
        e.stopPropagation();
        copyVerseToClipboard(vItem.book, vItem.chapter, vItem.verse, vItem.text);
      });

      container.appendChild(itemEl);
    });

    if (totalCount > renderLimit) {
      const moreBtn = document.createElement("button");
      moreBtn.type = "button";
      moreBtn.className = "w-full py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-color)] text-xs font-semibold text-[var(--text-primary)] transition";
      moreBtn.textContent = `Mostrar más resultados (${totalCount - renderLimit} restantes)`;
      moreBtn.addEventListener("click", () => {
        AppState.search.limit += 50;
        executeBibleSearch();
      });
      container.appendChild(moreBtn);
    }
  } else if (!citation) {
    container.innerHTML = `
      <div class="py-10 text-center space-y-3">
        <svg class="w-10 h-10 mx-auto text-[var(--text-muted)] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <p class="text-sm font-semibold text-[var(--text-primary)]">
          No se encontraron versículos con la frase exacta: "${rawQuery}"
        </p>
        <p class="text-xs text-[var(--text-muted)] max-w-sm mx-auto leading-relaxed">
          Sugerencias: verifica la ortografía o intenta buscar una cita como <code class="bg-[var(--bg-surface)] border border-[var(--border-color)] px-1.5 py-0.5 rounded font-mono">Juan 3:16</code> o palabras clave más cortas.
        </p>
      </div>
    `;
  }
}

// ============================================================================
// --- 10. MODO DICCIONARIO RAE Y MOTOR DE DESAMBIGUACIÓN GRAMATICAL ---
// Evita confusiones gramaticales (sustantivo vs verbo, adjetivo vs sustantivo,
// adverbio vs adjetivo, preposiciones, conjunciones y participios compuestos)
// y abre dle.rae.es en una pestaña nueva sin cerrar la app.
// ============================================================================

// new_rae_engine.js
const RAE_HOMOGRAPHS = {
  // --- SUSTANTIVO vs VERBO vs ADJETIVO ---
  "creído": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "creer",
        label: "Consultar como VERBO («creer» - participio) en la RAE ↗",
        description: "Forma de participio del verbo creer («han creído», «yo sé en quién he creído»). Abre la definición y conjugación oficial del verbo.",
        hint: "Participio del verbo creer"
      }
    ]
  },
  "vino": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "venir",
        label: "Consultar como VERBO («venir») en la RAE ↗",
        description: "Forma de la 3.ª persona singular del pretérito perfecto simple de venir («vino Jesús»). Abre conjugación completa y acepciones verbales.",
        hint: "Forma del verbo venir"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "vino",
        label: "Consultar como SUSTANTIVO («vino» - bebida) en la RAE ↗",
        description: "Bebida alcohólica que se hace del zumo de las uvas exprimido y fermentado («bebió del vino»).",
        hint: "Sustantivo masculino: bebida de uva"
      }
    ]
  },
  "principio": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "principio",
        label: "Consultar como SUSTANTIVO («principio» - origen / inicio) en la RAE ↗",
        description: "Primer instante del ser de la existencia; causa inicial, fundamento o norma moral («En el principio creó Dios»).",
        hint: "Sustantivo: origen o fundamento"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "principiar",
        label: "Consultar como VERBO («principiar») en la RAE ↗",
        description: "1.ª persona singular del presente de indicativo de principiar («yo principio»).",
        hint: "Forma verbal de principiar"
      }
    ]
  },
  "camino": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "camino",
        label: "Consultar como SUSTANTIVO («camino» - senda / vía) en la RAE ↗",
        description: "Vía de tierra hollada por donde se transita; sendero espiritual o conducta moral («el camino de la vida»).",
        hint: "Sustantivo: vía, sendero"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "caminar",
        label: "Consultar como VERBO («caminar») en la RAE ↗",
        description: "1.ª persona singular del presente de indicativo de caminar («yo camino en rectitud»).",
        hint: "Forma verbal de caminar"
      }
    ]
  },
  "canto": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "canto",
        label: "Consultar como SUSTANTIVO («canto» - melodía / borde) en la RAE ↗",
        description: "Acción de cantar, cántico o composición vocal; extremo o borde de algo; piedra.",
        hint: "Sustantivo: melodía, cántico o borde"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "cantar",
        label: "Consultar como VERBO («cantar») en la RAE ↗",
        description: "1.ª persona singular del presente de indicativo de cantar («yo canto a Jehová»).",
        hint: "Forma verbal de cantar"
      }
    ]
  },
  "cuenta": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "cuenta",
        label: "Consultar como SUSTANTIVO («cuenta» - cálculo / razón) en la RAE ↗",
        description: "Operación de cálculo, cómputo o razón y satisfacción que se da de algo ante Dios.",
        hint: "Sustantivo: cálculo, razón o registro"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "contar",
        label: "Consultar como VERBO («contar») en la RAE ↗",
        description: "3.ª persona singular del presente o imperativo de contar («él cuenta las estrellas»).",
        hint: "Forma verbal de contar"
      }
    ]
  },
  "cura": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "cura",
        label: "Consultar como SUSTANTIVO («cura» - sacerdote / sanación) en la RAE ↗",
        description: "Sacerdote / presbítero (m.) o acción y efecto de curar y sanar (f.).",
        hint: "Sustantivo: sacerdote o sanación"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "curar",
        label: "Consultar como VERBO («curar») en la RAE ↗",
        description: "3.ª persona singular del presente o imperativo de curar («Él cura a los quebrantados»).",
        hint: "Forma verbal de curar"
      }
    ]
  },
  "llama": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "llama",
        label: "Consultar como SUSTANTIVO («llama» - fuego / rumiante) en la RAE ↗",
        description: "Masa gaseosa en combustión que se eleva de los cuerpos que arden; mamífero rumiante.",
        hint: "Sustantivo: masa de fuego o animal"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "llamar",
        label: "Consultar como VERBO («llamar») en la RAE ↗",
        description: "3.ª persona singular del presente o imperativo de llamar («Él llama por nombre»).",
        hint: "Forma verbal de llamar"
      }
    ]
  },
  "haz": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "hacer",
        label: "Consultar como VERBO («hacer» - imperativo) en la RAE ↗",
        description: "Modo imperativo en 2.ª persona singular de hacer («hazte un arca de madera», «haz esto»).",
        hint: "Forma verbal imperativa de hacer"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "haz",
        label: "Consultar como SUSTANTIVO («haz» - faz / manojo / luz) en la RAE ↗",
        description: "Cara o superficie de algo; porción atada de mieses/leña; conjunto de rayos luminosos.",
        hint: "Sustantivo: superficie/faz o manojo"
      }
    ]
  },
  "sal": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "sal",
        label: "Consultar como SUSTANTIVO («sal» - condimento) en la RAE ↗",
        description: "Sustancia blanca cristalina (cloruro sódico) empleada para sazonar y preservar («vosotros sois la sal de la tierra»).",
        hint: "Sustantivo: cloruro sódico"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "salir",
        label: "Consultar como VERBO («salir» - imperativo) en la RAE ↗",
        description: "Modo imperativo en 2.ª persona singular de salir («sal del arca tú y tu casa»).",
        hint: "Forma verbal imperativa de salir"
      }
    ]
  },
  "ve": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "ir",
        label: "Consultar como VERBO («ir» - imperativo) en la RAE ↗",
        description: "Modo imperativo de ir en 2.ª persona («ve en paz», «ve y dile a mi pueblo»).",
        hint: "Forma imperativa del verbo ir"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "ver",
        label: "Consultar como VERBO («ver» - presente) en la RAE ↗",
        description: "3.ª persona singular del presente de ver («él ve en lo secreto»).",
        hint: "Forma del presente del verbo ver"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "ve",
        label: "Consultar como SUSTANTIVO («ve» - letra) en la RAE ↗",
        description: "Nombre oficial de la letra v en el abecedario español.",
        hint: "Sustantivo: nombre de letra"
      }
    ]
  },
  "era": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "ser",
        label: "Consultar como VERBO («ser» - imperfecto) en la RAE ↗",
        description: "1.ª o 3.ª persona del pretérito imperfecto de indicativo del verbo ser («la luz era buena», «era un varón justo»).",
        hint: "Forma del imperfecto de ser"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "era",
        label: "Consultar como SUSTANTIVO («era» - época / trilla) en la RAE ↗",
        description: "Cómputo de tiempo histórico o espacio limpio y llano donde se trillan las mieses («la era de trillar»).",
        hint: "Sustantivo: época o espacio de trilla"
      }
    ]
  },
  "fue": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "ser",
        label: "Consultar como VERBO («ser» - pretérito) en la RAE ↗",
        description: "3.ª persona singular del pretérito perfecto simple de ser («fue la tarde y la mañana», «fue la luz»).",
        hint: "Forma pretérita de ser"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "ir",
        label: "Consultar como VERBO («ir» - pretérito) en la RAE ↗",
        description: "3.ª persona singular del pretérito perfecto simple de ir («se fue al monte»).",
        hint: "Forma pretérita de ir"
      }
    ]
  },
  "obra": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "obra",
        label: "Consultar como SUSTANTIVO («obra» - creación / trabajo) en la RAE ↗",
        description: "Cosa hecha o producida por un agente; trabajo, creación divina o acción moral («acabó Dios su obra»).",
        hint: "Sustantivo: creación o trabajo"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "obrar",
        label: "Consultar como VERBO («obrar») en la RAE ↗",
        description: "3.ª persona singular del presente de indicativo de obrar («el que obra justicia»).",
        hint: "Forma verbal de obrar"
      }
    ]
  },
  "pasa": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "pasar",
        label: "Consultar como VERBO («pasar») en la RAE ↗",
        description: "3.ª persona singular del presente o imperativo de pasar («el tiempo pasa», «el mundo pasa»).",
        hint: "Forma verbal de pasar"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "pasa",
        label: "Consultar como SUSTANTIVO («pasa» - uva seca) en la RAE ↗",
        description: "Uva seca al sol o mediante calor artificial («panes de pasas»).",
        hint: "Sustantivo: fruto de uva seca"
      }
    ]
  },
  "da": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "dar",
        label: "Consultar como VERBO («dar») en la RAE ↗",
        description: "3.ª persona singular del presente de dar («árbol que da fruto», «Dios da la vida»).",
        hint: "Forma verbal de dar"
      }
    ]
  },
  "sé": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "saber",
        label: "Consultar como VERBO («saber» - presente) en la RAE ↗",
        description: "1.ª persona singular del presente de saber («yo sé en quién he creído», «no sé»).",
        hint: "Forma presente de saber"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "ser",
        label: "Consultar como VERBO («ser» - imperativo) en la RAE ↗",
        description: "Modo imperativo singular de ser («sé fiel hasta la muerte»).",
        hint: "Forma imperativa de ser"
      }
    ]
  },
  "sobre": {
    options: [
      {
        categoryKey: "PREP",
        category: "Preposición",
        lemma: "sobre",
        label: "Consultar como PREPOSICIÓN («sobre» - encima de) en la RAE ↗",
        description: "Denota superioridad física o asunto («sobre la faz de las aguas», «sobre la tierra»).",
        hint: "Preposición: encima de, acerca de"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "sobre",
        label: "Consultar como SUSTANTIVO («sobre» - envoltorio) en la RAE ↗",
        description: "Cubierta, por lo común de papel, en que se incluye una carta o mensaje.",
        hint: "Sustantivo: envoltorio de cartas"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "sobrar",
        label: "Consultar como VERBO («sobrar») en la RAE ↗",
        description: "Forma de subjuntivo de sobrar.",
        hint: "Forma verbal de sobrar"
      }
    ]
  },
  "bajo": {
    options: [
      {
        categoryKey: "PREP",
        category: "Preposición",
        lemma: "bajo",
        label: "Consultar como PREPOSICIÓN («bajo» - debajo de) en la RAE ↗",
        description: "Denota situación inferior o sujeción («bajo el cielo», «bajo sus pies»).",
        hint: "Preposición: debajo de, sujeto a"
      },
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "bajo",
        label: "Consultar como ADJETIVO («bajo» - de poca altura / humilde) en la RAE ↗",
        description: "De corta elevación física o de condición modesta y humilde («piso bajo»).",
        hint: "Adjetivo: de corta altura o humilde"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "bajar",
        label: "Consultar como VERBO («bajar») en la RAE ↗",
        description: "1.ª persona singular del presente de bajar («yo bajo»).",
        hint: "Forma verbal de bajar"
      },
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "bajo",
        label: "Consultar como ADVERBIO («bajo» - en voz baja) en la RAE ↗",
        description: "Con tono suave o silencioso («hablar bajo»).",
        hint: "Adverbio: en voz baja"
      }
    ]
  },
  "reino": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "reino",
        label: "Consultar como SUSTANTIVO («reino» - territorio/monarquía) en la RAE ↗",
        description: "Territorio cuyos habitantes están sujetos a un rey; el Reino de Dios.",
        hint: "Sustantivo: territorio o estado"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "reinar",
        label: "Consultar como VERBO («reinar») en la RAE ↗",
        description: "1.ª persona singular del presente de indicativo de reinar («yo reino»).",
        hint: "Forma verbal de reinar"
      }
    ]
  },
  "gloria": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "gloria",
        label: "Consultar como SUSTANTIVO («gloria» - honor/majestad) en la RAE ↗",
        description: "Reputación, honor supremo, majestad y resplandor de la presencia divina.",
        hint: "Sustantivo: esplendor, honor supremo"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "gloriar",
        label: "Consultar como VERBO («gloriar») en la RAE ↗",
        description: "Forma verbal de gloriar o gloriarse.",
        hint: "Forma verbal de gloriarse"
      }
    ]
  },
  "guía": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "guía",
        label: "Consultar como SUSTANTIVO («guía» - conductor/manual) en la RAE ↗",
        description: "Persona que conduce a otra por el camino; norma de conducta.",
        hint: "Sustantivo: quien conduce o enseña el camino"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "guiar",
        label: "Consultar como VERBO («guiar») en la RAE ↗",
        description: "3.ª persona singular del presente de guiar («Él me guía por sendas de justicia»).",
        hint: "Forma verbal de guiar"
      }
    ]
  },
  "casa": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "casa",
        label: "Consultar como SUSTANTIVO («casa» - morada/familia) en la RAE ↗",
        description: "Edificio para habitar; linaje, familia o descendencia («la casa de David»).",
        hint: "Sustantivo: morada o linaje"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "casar",
        label: "Consultar como VERBO («casar») en la RAE ↗",
        description: "3.ª persona singular del presente de casar («él se casa»).",
        hint: "Forma verbal de casar"
      }
    ]
  },
  "ayuda": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "ayuda",
        label: "Consultar como SUSTANTIVO («ayuda» - auxilio) en la RAE ↗",
        description: "Acción y efecto de ayudar, socorro o persona idónea para colaborar («ayuda idónea para él»).",
        hint: "Sustantivo: auxilio, socorro"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "ayudar",
        label: "Consultar como VERBO («ayudar») en la RAE ↗",
        description: "3.ª persona singular del presente o imperativo de ayudar («Dios ayuda al necesitado»).",
        hint: "Forma verbal de ayudar"
      }
    ]
  },
  "fuerza": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "fuerza",
        label: "Consultar como SUSTANTIVO («fuerza» - vigor/poder) en la RAE ↗",
        description: "Vigor, robustez y capacidad para mover o sostener peso; poder moral o espiritual.",
        hint: "Sustantivo: vigor, potencia"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "forzar",
        label: "Consultar como VERBO («forzar») en la RAE ↗",
        description: "Forma del presente de indicativo de forzar.",
        hint: "Forma verbal de forzar"
      }
    ]
  },
  "corte": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "corte",
        label: "Consultar como SUSTANTIVO («corte» - filo / tribunal) en la RAE ↗",
        description: "Filo de un instrumento cortante (m.) o tribunal y séquito regio (f.).",
        hint: "Sustantivo: filo o tribunal"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "cortar",
        label: "Consultar como VERBO («cortar») en la RAE ↗",
        description: "Forma de subjuntivo o imperativo de cortar.",
        hint: "Forma verbal de cortar"
      }
    ]
  },
  "oído": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "oír",
        label: "Consultar como VERBO («oír» - participio) en la RAE ↗",
        description: "Participio del verbo oír («habéis oído que fue dicho», «han oído su voz»).",
        hint: "Participio del verbo oír"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "oído",
        label: "Consultar como SUSTANTIVO («oído» - órgano/sentido) en la RAE ↗",
        description: "Órgano y sentido corporal de la audición («el oído que oye», «inclinad vuestro oído»).",
        hint: "Sustantivo: sentido u órgano auditivo"
      }
    ]
  },
  "dicho": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "decir",
        label: "Consultar como VERBO («decir» - participio) en la RAE ↗",
        description: "Participio irregular del verbo decir («ha dicho Jehová», «como está dicho»).",
        hint: "Participio del verbo decir"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "dicho",
        label: "Consultar como SUSTANTIVO («dicho» - palabra/refrán) en la RAE ↗",
        description: "Palabra o conjunto de palabras con que se expresa un concepto cabal.",
        hint: "Sustantivo: frase, palabra o refrán"
      }
    ]
  },
  "hecho": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "hacer",
        label: "Consultar como VERBO («hacer» - participio) en la RAE ↗",
        description: "Participio irregular del verbo hacer («ha hecho maravillas», «fue hecho el hombre»).",
        hint: "Participio del verbo hacer"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "hecho",
        label: "Consultar como SUSTANTIVO («hecho» - obra/acción) en la RAE ↗",
        description: "Acción u obra realizada («los hechos de los apóstoles»).",
        hint: "Sustantivo: obra, suceso o acción"
      }
    ]
  },
  "puesto": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "poner",
        label: "Consultar como VERBO («poner» - participio) en la RAE ↗",
        description: "Participio irregular del verbo poner («ha puesto», «puesto de rodillas»).",
        hint: "Participio del verbo poner"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "puesto",
        label: "Consultar como SUSTANTIVO («puesto» - sitio/cargo) en la RAE ↗",
        description: "Sitio o espacio que ocupa o puede ocupar alguien.",
        hint: "Sustantivo: sitio, lugar o empleo"
      }
    ]
  },
  "visto": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "ver",
        label: "Consultar como VERBO («ver» - participio) en la RAE ↗",
        description: "Participio irregular del verbo ver («hemos visto su gloria», «nadie ha visto a Dios»).",
        hint: "Participio del verbo ver"
      },
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "visto",
        label: "Consultar como ADJETIVO («visto») en la RAE ↗",
        description: "Adjetivo derivado: conocido o manifiesto.",
        hint: "Adjetivo: manifiesto"
      }
    ]
  },
  "escrito": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "escribir",
        label: "Consultar como VERBO («escribir» - participio) en la RAE ↗",
        description: "Participio irregular del verbo escribir («escrito está», «ha escrito»).",
        hint: "Participio del verbo escribir"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "escrito",
        label: "Consultar como SUSTANTIVO («escrito» - carta/documento) en la RAE ↗",
        description: "Carta, documento o texto impreso («escrito de divorcio»).",
        hint: "Sustantivo: texto o documento"
      }
    ]
  },
  "sabido": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "saber",
        label: "Consultar como VERBO («saber» - participio) en la RAE ↗",
        description: "Participio del verbo saber («habéis sabido», «ha sabido»).",
        hint: "Participio del verbo saber"
      },
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "sabido",
        label: "Consultar como ADJETIVO («sabido») en la RAE ↗",
        description: "Que posee sabiduría o es comúnmente conocido.",
        hint: "Adjetivo: conocido o docto"
      }
    ]
  },
  "leído": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "leer",
        label: "Consultar como VERBO («leer» - participio) en la RAE ↗",
        description: "Participio del verbo leer («¿no habéis leído?», «ha leído en la ley»).",
        hint: "Participio del verbo leer"
      },
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "leído",
        label: "Consultar como ADJETIVO («leído») en la RAE ↗",
        description: "Instruido por la lectura.",
        hint: "Adjetivo: instruido"
      }
    ]
  },
  "dado": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "dar",
        label: "Consultar como VERBO («dar» - participio) en la RAE ↗",
        description: "Participio del verbo dar («nos ha dado vida», «dado por vosotros»).",
        hint: "Participio del verbo dar"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "dado",
        label: "Consultar como SUSTANTIVO («dado» - juego) en la RAE ↗",
        description: "Pieza cúbica con números que se usa en juegos de suerte.",
        hint: "Sustantivo: pieza de juego"
      }
    ]
  },
  "vestido": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "vestido",
        label: "Consultar como SUSTANTIVO («vestido» - vestidura) en la RAE ↗",
        description: "Prenda o conjunto de prendas con que se cubre el cuerpo («su vestido era blanco»).",
        hint: "Sustantivo: ropa o vestidura"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "vestir",
        label: "Consultar como VERBO («vestir» - participio) en la RAE ↗",
        description: "Participio del verbo vestir («se ha vestido», «estando vestido»).",
        hint: "Participio del verbo vestir"
      }
    ]
  },
  "amado": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "amado",
        label: "Consultar como ADJETIVO («amado») en la RAE ↗",
        description: "Que es objeto de amor («este es mi Hijo amado»).",
        hint: "Adjetivo: querido, dilecto"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "amar",
        label: "Consultar como VERBO («amar» - participio) en la RAE ↗",
        description: "Participio del verbo amar («nos ha amado con amor eterno»).",
        hint: "Participio del verbo amar"
      }
    ]
  },
  "llamado": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "llamar",
        label: "Consultar como VERBO («llamar» - participio) en la RAE ↗",
        description: "Participio del verbo llamar («un varón llamado Zaqueo», «nos ha llamado de las tinieblas»).",
        hint: "Participio del verbo llamar"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "llamado",
        label: "Consultar como SUSTANTIVO («llamado» - llamamiento) en la RAE ↗",
        description: "Acción de llamar, llamamiento.",
        hint: "Sustantivo: llamamiento"
      }
    ]
  },
  "enviado": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "enviar",
        label: "Consultar como VERBO («enviar» - participio) en la RAE ↗",
        description: "Participio del verbo enviar («Dios ha enviado a su Hijo», «fue enviado»).",
        hint: "Participio del verbo enviar"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "enviado",
        label: "Consultar como SUSTANTIVO («enviado» - mensajero) en la RAE ↗",
        description: "Persona que ha sido comisionada o enviada como representante.",
        hint: "Sustantivo: emisario, mensajero"
      }
    ]
  },
  "partido": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "partir",
        label: "Consultar como VERBO («partir» - participio) en la RAE ↗",
        description: "Participio del verbo partir («habiendo partido el pan», «se ha partido»).",
        hint: "Participio del verbo partir"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "partido",
        label: "Consultar como SUSTANTIVO («partido») en la RAE ↗",
        description: "Grupo o bando que sigue una opinión.",
        hint: "Sustantivo: facción o bando"
      }
    ]
  },
  "pasado": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "pasar",
        label: "Consultar como VERBO («pasar» - participio) en la RAE ↗",
        description: "Participio del verbo pasar («ha pasado de muerte a vida»).",
        hint: "Participio del verbo pasar"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "pasado",
        label: "Consultar como SUSTANTIVO («pasado» - tiempo pretérito) en la RAE ↗",
        description: "Tiempo que ya ha transcurrido.",
        hint: "Sustantivo: tiempo transcurrido"
      }
    ]
  },
  "cumplido": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "cumplir",
        label: "Consultar como VERBO («cumplir» - participio) en la RAE ↗",
        description: "Participio del verbo cumplir («el tiempo se ha cumplido»).",
        hint: "Participio del verbo cumplir"
      },
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "cumplido",
        label: "Consultar como ADJETIVO («cumplido») en la RAE ↗",
        description: "Cabal, intachable o cortés.",
        hint: "Adjetivo: cabal, perfecto"
      }
    ]
  },
  "perdido": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "perdido",
        label: "Consultar como ADJETIVO («perdido») en la RAE ↗",
        description: "Que carece de rumbo espiritual («la oveja perdida», «el hijo pródigo perdido»).",
        hint: "Adjetivo: extraviado"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "perder",
        label: "Consultar como VERBO («perder» - participio) en la RAE ↗",
        description: "Participio del verbo perder («se ha perdido»).",
        hint: "Participio del verbo perder"
      }
    ]
  },
  "nacido": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "nacer",
        label: "Consultar como VERBO («nacer» - participio) en la RAE ↗",
        description: "Participio del verbo nacer («el que es nacido de Dios», «ha nacido hoy un Salvador»).",
        hint: "Participio del verbo nacer"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "nacido",
        label: "Consultar como SUSTANTIVO («nacido») en la RAE ↗",
        description: "Tumor o grano pequeño.",
        hint: "Sustantivo"
      }
    ]
  },
  "abierto": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "abierto",
        label: "Consultar como ADJETIVO («abierto») en la RAE ↗",
        description: "Que no está cerrado («puerta abierta»).",
        hint: "Adjetivo: no cerrado"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "abrir",
        label: "Consultar como VERBO («abrir» - participio) en la RAE ↗",
        description: "Participio irregular del verbo abrir («ha abierto el libro», «fueron abiertos sus ojos»).",
        hint: "Participio del verbo abrir"
      }
    ]
  },
  "cubierto": {
    options: [
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "cubrir",
        label: "Consultar como VERBO («cubrir» - participio) en la RAE ↗",
        description: "Participio irregular del verbo cubrir («ha cubierto la multitud de pecados»).",
        hint: "Participio del verbo cubrir"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "cubierto",
        label: "Consultar como SUSTANTIVO («cubierto») en la RAE ↗",
        description: "Servicio de mesa o resguardo.",
        hint: "Sustantivo: servicio o resguardo"
      }
    ]
  },
  "para": {
    options: [
      {
        categoryKey: "PREP",
        category: "Preposición",
        lemma: "para",
        label: "Consultar como PREPOSICIÓN («para») en la RAE ↗",
        description: "Denota destino, fin, propósito o dirección («para salvación», «para siempre»).",
        hint: "Preposición: fin o destino"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "parar",
        label: "Consultar como VERBO («parar») en la RAE ↗",
        description: "3.ª persona del presente del verbo parar («él para»).",
        hint: "Forma verbal de parar"
      }
    ]
  },
  "como": {
    options: [
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "como",
        label: "Consultar como ADVERBIO / CONJUNCIÓN («como») en la RAE ↗",
        description: "Denota modo, semejanza o comparación («como está escrito», «así como»).",
        hint: "Adverbio / Conjunción de modo"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "comer",
        label: "Consultar como VERBO («comer») en la RAE ↗",
        description: "1.ª persona singular del presente de comer («yo como»).",
        hint: "Forma verbal de comer"
      }
    ]
  },
  "sino": {
    options: [
      {
        categoryKey: "CONJ",
        category: "Conjunción",
        lemma: "sino",
        label: "Consultar como CONJUNCIÓN («sino») en la RAE ↗",
        description: "Conjunción adversativa («no he venido a llamar a justos, sino a pecadores»).",
        hint: "Conjunción adversativa"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "sino",
        label: "Consultar como SUSTANTIVO («sino» - destino) en la RAE ↗",
        description: "Fado, destino o hado.",
        hint: "Sustantivo: destino"
      }
    ]
  },
  "mas": {
    options: [
      {
        categoryKey: "CONJ",
        category: "Conjunción",
        lemma: "mas",
        label: "Consultar como CONJUNCIÓN («mas» - pero) en la RAE ↗",
        description: "Conjunción adversativa equivalente a pero («mas a todos los que le recibieron»).",
        hint: "Conjunción adversativa"
      },
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "más",
        label: "Consultar como ADVERBIO («más») en la RAE ↗",
        description: "Adverbio de cantidad o grado.",
        hint: "Adverbio de cantidad"
      }
    ]
  },

  // --- ADJETIVO vs SUSTANTIVO ---
  "justo": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "justo",
        label: "Consultar como ADJETIVO («justo» - recto / equitativo) en la RAE ↗",
        description: "Que obra según la justicia, la razón y la ley de Dios («varón justo y perfecto»).",
        hint: "Adjetivo: recto, imparcial, santo"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "justo",
        label: "Consultar como SUSTANTIVO («el justo» - creyente piadoso) en la RAE ↗",
        description: "Persona justa que vive por fe y obedece los mandatos de Dios («el justo florecerá»).",
        hint: "Sustantivo: hombre justo"
      },
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "justo",
        label: "Consultar como ADVERBIO («justo» - exactamente) en la RAE ↗",
        description: "Precisamente, cabalmente o con exactitud («justo a tiempo»).",
        hint: "Adverbio: precisamente, exactamente"
      }
    ]
  },
  "santo": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "santo",
        label: "Consultar como ADJETIVO («santo» - sagrado/consagrado) en la RAE ↗",
        description: "Perfecto, puro y apartado enteramente para Dios («lugar santo», «día santo»).",
        hint: "Adjetivo: sagrado, apartado"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "santo",
        label: "Consultar como SUSTANTIVO («el santo» / «los santos») en la RAE ↗",
        description: "Persona consagrada a Dios; los creyentes fieles («los santos del Altísimo»).",
        hint: "Sustantivo: creyente consagrado"
      }
    ]
  },
  "fiel": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "fiel",
        label: "Consultar como ADJETIVO («fiel» - leal / constante) en la RAE ↗",
        description: "Que guarda fidelidad y es constante en sus afectos o deberes («siervo fiel», «Dios es fiel»).",
        hint: "Adjetivo: leal, perseverante"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "fiel",
        label: "Consultar como SUSTANTIVO («los fieles») en la RAE ↗",
        description: "El creyente que profesa la fe («los fieles en Cristo»).",
        hint: "Sustantivo: el creyente leal"
      }
    ]
  },
  "ciego": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "ciego",
        label: "Consultar como ADJETIVO («ciego» - sin vista) en la RAE ↗",
        description: "Privado de la vista o falto de entendimiento espiritual («hombre ciego», «guías ciegos»).",
        hint: "Adjetivo: sin vista"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "ciego",
        label: "Consultar como SUSTANTIVO («un ciego») en la RAE ↗",
        description: "Persona que carece del sentido de la vista («dio vista a los ciegos»).",
        hint: "Sustantivo: la persona invidente"
      }
    ]
  },
  "pobre": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "pobre",
        label: "Consultar como ADJETIVO («pobre» - necesitado / humilde) en la RAE ↗",
        description: "Necesitado, que carece de lo necesario; humilde de espíritu («pobres en espíritu»).",
        hint: "Adjetivo: de escasos recursos o humilde"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "pobre",
        label: "Consultar como SUSTANTIVO («los pobres») en la RAE ↗",
        description: "Persona necesitada o indigente («dar a los pobres»).",
        hint: "Sustantivo: la persona necesitada"
      }
    ]
  },
  "sabio": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "sabio",
        label: "Consultar como ADJETIVO («sabio» - con prudencia) en la RAE ↗",
        description: "Que posee sabiduría, prudencia o conocimiento recto («varón sabio», «hijo sabio»).",
        hint: "Adjetivo: prudente, docto"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "sabio",
        label: "Consultar como SUSTANTIVO («los sabios») en la RAE ↗",
        description: "Persona que posee sabiduría («los sabios de corazón»).",
        hint: "Sustantivo: persona sabia"
      }
    ]
  },
  "muerto": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "muerto",
        label: "Consultar como ADJETIVO («muerto» - sin vida) en la RAE ↗",
        description: "Que está sin vida biológica o espiritual («estaba muerto», «obras muertas»).",
        hint: "Adjetivo: sin vida"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "morir",
        label: "Consultar como VERBO («morir» - participio) en la RAE ↗",
        description: "Participio irregular del verbo morir («ha muerto», «habiendo muerto»).",
        hint: "Participio del verbo morir"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "muerto",
        label: "Consultar como SUSTANTIVO («el muerto» / «los muertos») en la RAE ↗",
        description: "Persona difunta («resucitó de los muertos»).",
        hint: "Sustantivo: persona fallecida"
      }
    ]
  },
  "vivo": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "vivo",
        label: "Consultar como ADJETIVO («vivo» - con vida / eficaz) en la RAE ↗",
        description: "Que goza de vida; eficaz y activo («Dios vivo», «palabra viva»).",
        hint: "Adjetivo: viviente, animado"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "vivo",
        label: "Consultar como SUSTANTIVO («los vivos») en la RAE ↗",
        description: "Ser viviente («juez de vivos y muertos»).",
        hint: "Sustantivo: el ser que vive"
      },
      {
        categoryKey: "VERB",
        category: "Verbo",
        lemma: "vivir",
        label: "Consultar como VERBO («vivir») en la RAE ↗",
        description: "1.ª persona singular del presente de indicativo de vivir («yo vivo»).",
        hint: "Forma verbal de vivir"
      }
    ]
  },

  // --- ADVERBIO vs SUSTANTIVO / ADJETIVO ---
  "bien": {
    options: [
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "bien",
        label: "Consultar como ADVERBIO («bien» - rectamente) en la RAE ↗",
        description: "De manera conveniente, adecuada, justa o recta («si bien hicieres», «habló bien»).",
        hint: "Adverbio: correctamente, rectamente"
      },
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "bien",
        label: "Consultar como SUSTANTIVO («el bien» - beneficio moral) en la RAE ↗",
        description: "Aquello moralmente bueno, bendición o beneficio («árbol del conocimiento del bien y del mal»).",
        hint: "Sustantivo: lo bueno moral o beneficio"
      }
    ]
  },
  "mal": {
    options: [
      {
        categoryKey: "NOUN",
        category: "Sustantivo",
        lemma: "mal",
        label: "Consultar como SUSTANTIVO («el mal» - pecado / desgracia) en la RAE ↗",
        description: "Lo contrario al bien; daño moral, pecado o calamidad («apartarse del mal»).",
        hint: "Sustantivo: lo moralmente malo o perjuicio"
      },
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "mal",
        label: "Consultar como ADVERBIO («mal» - indebidamente) en la RAE ↗",
        description: "De manera contraria a lo conveniente, a lo justo o a lo debido («actuó mal», «hizo mal»).",
        hint: "Adverbio: erróneamente, indebidamente"
      }
    ]
  },
  "cierto": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "cierto",
        label: "Consultar como ADJETIVO («cierto» - seguro / determinado) en la RAE ↗",
        description: "Verdadero, indubitable, o designación de alguien determinado («cierto varón»).",
        hint: "Adjetivo / Determinante: verídico o indeterminado"
      },
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "cierto",
        label: "Consultar como ADVERBIO («por cierto») en la RAE ↗",
        description: "Ciertamente, verdaderamente.",
        hint: "Adverbio: ciertamente"
      }
    ]
  },
  "solo": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "solo",
        label: "Consultar como ADJETIVO («solo» - único / en soledad) en la RAE ↗",
        description: "Único en su especie; sin compañía («no es bueno que el hombre esté solo», «un solo Dios»).",
        hint: "Adjetivo: único o solitario"
      },
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "solo",
        label: "Consultar como ADVERBIO («solamente») en la RAE ↗",
        description: "Únicamente, solamente («no solo de pan vivirá el hombre»).",
        hint: "Adverbio: solamente, únicamente"
      }
    ]
  },
  "pronto": {
    options: [
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "pronto",
        label: "Consultar como ADVERBIO («pronto» - con rapidez) en la RAE ↗",
        description: "En breve tiempo o con presteza («vengo pronto», «el Señor vendrá pronto»).",
        hint: "Adverbio: rápidamente, en breve"
      },
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "pronto",
        label: "Consultar como ADJETIVO («pronto» - veloz / dispuesto) en la RAE ↗",
        description: "Veloz, diligente o presto («pronto auxilio en las tribulaciones»).",
        hint: "Adjetivo: diligente, veloz"
      }
    ]
  },
  "claro": {
    options: [
      {
        categoryKey: "ADJ",
        category: "Adjetivo",
        lemma: "claro",
        label: "Consultar como ADJETIVO («claro» - luminoso / evidente) en la RAE ↗",
        description: "Lleno de luz o indudable («agua clara»).",
        hint: "Adjetivo: luminoso, manifiesto"
      },
      {
        categoryKey: "ADV",
        category: "Adverbio",
        lemma: "claro",
        label: "Consultar como ADVERBIO («claramente») en la RAE ↗",
        description: "Claramente, sin rodeos.",
        hint: "Adverbio: claramente"
      }
    ]
  }
};

const RAE_AUXILIARY_HABER = new Set([
  "he", "has", "ha", "hemos", "habéis", "habeis", "han",
  "había", "habia", "habías", "habias", "habíamos", "habiamos", "habíais", "habiais", "habían", "habian",
  "hube", "hubiste", "hubo", "hubimos", "hubisteis", "hubieron",
  "habré", "habre", "habrás", "habras", "habrá", "habra", "habremos", "habréis", "habreis", "habrán", "habran",
  "habría", "habria", "habrías", "habrias", "habríamos", "habriamos", "habríais", "habriais", "habrían", "habrian",
  "haya", "hayas", "hayamos", "hayáis", "hayais", "hayan",
  "hubiera", "hubieras", "hubiéramos", "hubieramos", "hubierais", "hubieran",
  "hubiese", "hubieses", "hubiésemos", "hubiesemos", "hubieseis", "hubiesen",
  "hubiere", "hubieres", "hubiéremos", "hubieremos", "hubiereis", "hubieren",
  "habiendo"
]);

const RAE_PREPOSITIONS = new Set([
  "a", "ante", "bajo", "cabe", "con", "contra", "de", "desde", "durante",
  "en", "entre", "hacia", "hasta", "mediante", "para", "por", "según", "segun",
  "sin", "so", "sobre", "tras"
]);

const RAE_CONJUNCTIONS = new Set([
  "y", "e", "ni", "o", "u", "pero", "mas", "sino", "porque", "pues", "aunque",
  "si", "siquiera", "conque", "ora"
]);

const RAE_PRONOUNS = new Set([
  "yo", "tú", "él", "ella", "ello", "nosotros", "nosotras", "vosotros", "vosotras",
  "ellos", "ellas", "usted", "ustedes", "mí", "ti", "sí", "me", "te", "se",
  "nos", "os", "le", "les", "la", "las", "lo", "los", "conmigo", "contigo", "consigo",
  "quien", "quién", "quienes", "quiénes", "cual", "cuál", "cuales", "cuáles"
]);

const RAE_DETERMINERS = new Set([
  "el", "la", "los", "las", "un", "una", "unos", "unas",
  "este", "esta", "estos", "estas", "ese", "esa", "esos", "esas",
  "aquel", "aquella", "aquellos", "aquellas",
  "mi", "mis", "tu", "tus", "su", "sus", "nuestro", "nuestra", "nuestros", "nuestras",
  "vuestro", "vuestra", "vuestros", "vuestras", "cada", "todo", "toda", "todos", "todas"
]);

const RAE_ADVERBS = new Set([
  "no", "sí", "siempre", "nunca", "jamás", "jamas", "también", "tambien", "tampoco",
  "ya", "aun", "aún", "ahora", "hoy", "ayer", "mañana", "luego", "después", "despues",
  "antes", "pronto", "tarde", "temprano", "aquí", "aqui", "allí", "alli", "allá", "alla",
  "acá", "aca", "cerca", "lejos", "arriba", "abajo", "delante", "detrás", "detras",
  "encima", "debajo", "adentro", "afuera", "dentro", "fuera", "muy", "mucho", "poco",
  "casi", "tan", "tanto", "más", "mas", "menos", "bastante", "así", "asi", "bien", "mal",
  "apenas", "quizá", "quizás", "quizas", "donde", "dónde", "cuando", "cuándo", "cómo", "solamente"
]);

const RAE_PARTICIPLES = {
  "creído": "creer", "creída": "creer", "creídos": "creer", "creídas": "creer",
  "oído": "oír", "oída": "oír", "oídos": "oír", "oídas": "oír",
  "leído": "leer", "leída": "leer", "leídos": "leer", "leídas": "leer",
  "traído": "traer", "traída": "traer", "traídos": "traer", "traídas": "traer",
  "caído": "caer", "caída": "caer", "caídos": "caer", "caídas": "caer",
  "poseído": "poseer", "proveído": "proveer", "raído": "raer", "roído": "roer",
  "reído": "reír", "sonreído": "sonreír", "desvaído": "desvaír",
  "dicho": "decir", "dicha": "decir", "dichos": "decir", "dichas": "decir",
  "hecho": "hacer", "hecha": "hacer", "hechos": "hacer", "hechas": "hacer",
  "puesto": "poner", "puesta": "poner", "puestos": "poner", "puestas": "poner",
  "visto": "ver", "vista": "ver", "vistas": "ver", "vistos": "ver",
  "escrito": "escribir", "escrita": "escribir", "escritos": "escribir", "escritas": "escribir",
  "muerto": "morir", "muerta": "morir", "muertos": "morir", "muertas": "morir",
  "abierto": "abrir", "abierta": "abrir", "abiertos": "abrir", "abiertas": "abrir",
  "cubierto": "cubrir", "cubierta": "cubrir", "cubiertos": "cubrir", "cubiertas": "cubrir",
  "vuelto": "volver", "vuelta": "volver", "vueltos": "volver", "vueltas": "volver",
  "roto": "romper", "rota": "romper", "rotos": "romper", "rotas": "romper",
  "preso": "prender", "presa": "prender", "presos": "prender", "presas": "prender",
  "resuelto": "resolver", "resuelta": "resolver", "resueltos": "resolver", "resueltas": "resolver",
  "satisfecho": "satisfacer", "satisfecha": "satisfacer", "satisfechos": "satisfacer", "satisfechas": "satisfacer",
  "dado": "dar", "dada": "dar", "dados": "dar", "dadas": "dar",
  "sido": "ser", "ido": "ir", "venido": "venir", "tenido": "tener",
  "sabido": "saber", "podido": "poder", "querido": "querer", "habido": "haber",
  "nacido": "nacer", "vivido": "vivir", "partido": "partir", "salido": "salir",
  "cumplido": "cumplir", "conocido": "conocer", "entendido": "entender",
  "perdido": "perder", "vestido": "vestir", "amado": "amar", "llamado": "llamar",
  "enviado": "enviar", "resucitado": "resucitar", "crucificado": "crucificar",
  "santificado": "santificar", "justificado": "justificar", "glorificado": "glorificar",
  "salvado": "salvar", "acabado": "acabar", "edificado": "edificar",
  "guardado": "guardar", "pecado": "pecar", "recibido": "recibir",
  "hallado": "hallar", "andado": "andar", "hablado": "hablar",
  "pasado": "pasar", "sentido": "sentir", "seguido": "seguir", "corrido": "correr"
};

const RAE_VERB_LEMMAS = {
  // creer
  "creó": "crear", "creo": "creer", "creyó": "creer", "creyeron": "creer", "cree": "creer", "creed": "creer",
  "creído": "creer", "creídos": "creer", "creída": "creer", "creídas": "creer",
  "creí": "creer", "creíste": "creer", "creímos": "creer", "creéis": "creer", "creían": "creer", "creía": "creer",
  "creerá": "creer", "creerán": "creer", "creeré": "creer", "creeréis": "creer",
  "creyendo": "creer", "creyere": "creer", "creyeren": "creer", "creyese": "creer", "creyera": "creer",
  // decir
  "di": "decir", "dijo": "decir", "dijeron": "decir", "dice": "decir", "dicen": "decir", "diciendo": "decir", "dicho": "decir", "dirá": "decir", "dirán": "decir", "digan": "decir", "dije": "decir", "decía": "decir", "decían": "decir",
  // venir
  "vino": "venir", "vinieron": "venir", "viene": "venir", "vienen": "venir", "viniendo": "venir", "vendrá": "venir", "vendrán": "venir", "venga": "venir", "vengan": "venir", "ven": "venir", "venid": "venir", "venido": "venir", "vine": "venir", "venía": "venir",
  // ser
  "fue": "ser", "fueron": "ser", "era": "ser", "eran": "ser", "es": "ser", "son": "ser", "somos": "ser", "sea": "ser", "sean": "ser", "siendo": "ser", "sido": "ser", "será": "ser", "serán": "ser", "seré": "ser", "erais": "ser",
  // hacer
  "hizo": "hacer", "hicieron": "hacer", "hace": "hacer", "hacen": "hacer", "haciendo": "hacer", "hecho": "hacer", "hará": "hacer", "harán": "hacer", "haz": "hacer", "haced": "hacer", "hice": "hacer", "hacía": "hacer", "hacían": "hacer",
  // dar
  "dio": "dar", "dieron": "dar", "da": "dar", "dan": "dar", "dando": "dar", "dado": "dar", "dará": "dar", "darán": "dar", "dé": "dar", "den": "dar", "dad": "dar", "di": "dar", "diste": "dar", "dimos": "dar",
  // ver
  "vio": "ver", "vieron": "ver", "ve": "ver", "ven": "ver", "viendo": "ver", "visto": "ver", "verá": "ver", "verán": "ver", "ved": "ver", "veo": "ver", "veía": "ver", "veían": "ver", "vea": "ver", "vean": "ver",
  // oír
  "oyó": "oír", "oyeron": "oír", "oye": "oír", "oyen": "oír", "oyendo": "oír", "oído": "oír", "oirá": "oír", "oirán": "oír", "oíd": "oír", "oigo": "oír", "oía": "oír", "oían": "oír", "oiga": "oír", "oigan": "oír",
  // andar
  "anduvo": "andar", "anduvieron": "andar", "anda": "andar", "andan": "andar", "andando": "andar", "andado": "andar", "andará": "andar",
  // tener
  "tuvo": "tener", "tuvieron": "tener", "tiene": "tener", "tienen": "tener", "teniendo": "tener", "tenido": "tener", "tendrá": "tener", "tendrán": "tener", "ten": "tener", "tened": "tener", "tenía": "tener", "tenían": "tener", "tenga": "tener", "tengan": "tener",
  // poner
  "puso": "poner", "pusieron": "poner", "pone": "poner", "ponen": "poner", "poniendo": "poner", "puesto": "poner", "pondrá": "poner", "pondrán": "poner", "pon": "poner", "ponga": "poner", "pongan": "poner",
  // saber
  "supo": "saber", "supieron": "saber", "sabe": "saber", "saben": "saber", "sabiendo": "saber", "sabido": "saber", "sabrá": "saber", "sabrán": "saber", "sé": "saber", "sabemos": "saber", "sabía": "saber",
  // poder
  "pudo": "poder", "pudieron": "poder", "puede": "poder", "pueden": "poder", "pudiendo": "poder", "podido": "poder", "podrá": "poder", "podrán": "poder", "puedo": "poder", "podemos": "poder", "podía": "poder",
  // traer
  "trajo": "traer", "trajeron": "traer", "trae": "traer", "traen": "traer", "trayendo": "traer", "traído": "traer", "traerá": "traer",
  // hablar
  "habló": "hablar", "hablaron": "hablar", "habla": "hablar", "hablan": "hablar", "hablando": "hablar", "hablado": "hablar", "hablará": "hablar", "hablarán": "hablar",
  // clamar, llamar, responder, enviar
  "clamó": "clamar", "clamaron": "clamar", "clama": "clamar", "clamando": "clamar",
  "llamó": "llamar", "llamaron": "llamar", "llama": "llamar", "llamando": "llamar", "llamado": "llamar",
  "respondió": "responder", "respondieron": "responder", "responde": "responder", "respondiendo": "responder", "respondido": "responder",
  "envió": "enviar", "enviaron": "enviar", "envía": "enviar", "enviando": "enviar", "enviado": "enviar",
  // bendecir, maldecir, morir, vivir
  "bendijo": "bendecir", "bendijeron": "bendecir", "bendice": "bendecir", "bendiciendo": "bendecir", "bendito": "bendecir",
  "maldijo": "maldecir", "maldijeron": "maldecir", "maldice": "maldecir", "maldiciendo": "maldecir", "maldito": "maldecir",
  "murió": "morir", "murieron": "morir", "muere": "morir", "mueren": "morir", "muriendo": "morir", "muerto": "morir",
  "vivió": "vivir", "vivieron": "vivir", "vive": "vivir", "viven": "vivir", "viviendo": "vivir", "vivido": "vivir",
  // salvación, santificación, gracia
  "salvó": "salvar", "salvaron": "salvar", "salva": "salvar", "salvando": "salvar", "salvado": "salvar",
  "santificó": "santificar", "santificaron": "santificar", "santifica": "santificar", "santificado": "santificar",
  "justificó": "justificar", "justificaron": "justificar", "justifica": "justificar", "justificado": "justificar",
  "glorificó": "glorificar", "glorificaron": "glorificar", "glorifica": "glorificar", "glorificado": "glorificar",
  "arrepintió": "arrepentir", "arrepintieron": "arrepentir", "arrepiente": "arrepentir",
  "acabó": "acabar", "acabaron": "acabar", "acabados": "acabar", "acabado": "acabar",
  "descansó": "descansar", "plantó": "plantar", "tomó": "tomar", "comió": "comer", "bebió": "beber",
  "escribió": "escribir", "escribieron": "escribir", "escribe": "escribir", "escribiendo": "escribir", "escrito": "escribir",
  "resucitó": "resucitar", "resucitaron": "resucitar", "resucitado": "resucitar",
  "crucificó": "crucificar", "crucificaron": "crucificar", "crucificado": "crucificar"
};

const RAE_PLURAL_NOUNS = {
  "cielos": "cielo", "aguas": "agua", "tinieblas": "tiniebla", "estrellas": "estrella",
  "árboles": "árbol", "lumbreras": "lumbrera", "hombres": "hombre", "mujeres": "mujer",
  "días": "día", "noches": "noche", "naciones": "nación", "ciudades": "ciudad",
  "palabras": "palabra", "mandamientos": "mandamiento", "pecados": "pecado", "oraciones": "oración",
  "hijos": "hijo", "hijas": "hija", "bestias": "bestia", "montañas": "montaña",
  "ojos": "ojo", "manos": "mano", "pies": "pie", "peces": "pez", "aves": "ave",
  "reyes": "rey", "leyes": "ley", "dioses": "dios", "ángeles": "ángel", "corazones": "corazón"
};

const RAE_CANONICAL_NOUNS = {
  "dios": {
    lemma: "dios",
    category: "Sustantivo",
    description: "Ser supremo que en las religiones monoteístas es considerado hacedor del universo y objeto de culto."
  },
  "jehová": {
    lemma: "jehová",
    category: "Nombre propio",
    description: "Nombre propio de Dios en las Sagradas Escrituras (Tetragrámaton YHWH)."
  },
  "jesús": {
    lemma: "jesús",
    category: "Nombre propio",
    description: "Jesucristo, el Hijo de Dios y Salvador en el Nuevo Testamento."
  },
  "cristo": {
    lemma: "cristo",
    category: "Sustantivo",
    description: "Mesías o Ungido de Dios."
  },
  "señor": {
    lemma: "señor",
    category: "Sustantivo",
    description: "Dios o Jesucristo; soberano, amo."
  },
  "espíritu": {
    lemma: "espíritu",
    category: "Sustantivo",
    description: "El Espíritu Santo; ser inmaterial dotado de razón."
  }
};

const RaeLinguisticEngine = {
  cleanToken(token) {
    if (!token) return "";
    return token.replace(/^[«»‹›“”‘’"'\(\)\[\]¿?¡!,.;:—–\-_/]+|[«»‹›“”‘’"'\(\)\[\]¿?¡!,.;:—–\-_/]+$/g, "").trim().normalize("NFC");
  },

  analyzeWordInContext(rawWord, verseText) {
    const clean = this.cleanToken(rawWord);
    const lower = clean.toLowerCase();

    // 0. Detección de tiempos verbales compuestos seleccionados conjuntamente (ej. "han creído", "he creído", "ha creído", "habían creído")
    const wordsInSelection = lower.split(/\s+/).filter(Boolean);
    if (wordsInSelection.length >= 2 && wordsInSelection.length <= 4) {
      let foundPart = null;
      for (const w of wordsInSelection) {
        if (w.startsWith("creí") || w.startsWith("crei") || RAE_PARTICIPLES[w]) {
          foundPart = w;
          break;
        }
      }
      if (foundPart) {
        const lemma = (foundPart.startsWith("creí") || foundPart.startsWith("crei"))
          ? "creer"
          : (RAE_PARTICIPLES[foundPart] || RAE_VERB_LEMMAS[foundPart] || foundPart);
        return {
          word: clean,
          detectedCategory: "VERB",
          detectedExplanation: `Tiempo verbal compuesto («${clean}»), correspondiente al verbo «${lemma}».`,
          isHomograph: false,
          options: [
            {
              categoryKey: "VERB",
              category: "Verbo",
              lemma: lemma,
              isRecommended: true,
              label: `Consultar VERBO («${lemma}») en la RAE ↗`,
              description: `Abre el lema oficial del infinitivo (${lemma}) en la RAE con su modelo de conjugación completo.`,
              url: `https://dle.rae.es/${encodeURIComponent(lemma)}`
            }
          ]
        };
      }
    }

    // Extraer tokens sintácticos del versículo
    const allTokens = (verseText || "").replace(/[«»"'\(\)\[\]¿?¡!,.;:—–\-_/]/g, " ")
      .split(/\s+/)
      .map(t => t.trim().toLowerCase())
      .filter(Boolean);

    const idx = allTokens.indexOf(lower);
    const prev = idx > 0 ? allTokens[idx - 1] : null;
    const prev2 = idx > 1 ? allTokens[idx - 2] : null;
    const next = (idx >= 0 && idx < allTokens.length - 1) ? allTokens[idx + 1] : null;

    const nounTriggers = ["el", "la", "los", "las", "un", "una", "unos", "unas", "al", "del", "mi", "tu", "su", "mis", "tus", "sus", "nuestro", "nuestra", "este", "esta", "estos", "estas", "ese", "esa", "aquel", "aquella", "todo", "toda", "cada"];
    const prepTriggers = ["de", "en", "con", "por", "sin", "contra", "hacia", "desde", "hasta"];
    const verbSubjectTriggers = ["yo", "tú", "él", "ella", "nosotros", "vosotros", "ellos", "ellas", "usted", "ustedes", "me", "te", "se", "nos", "os", "le", "les", "ha", "había", "hubo", "quien", "que", "dios", "jehová", "jesús", "señor"];

    const isAfterAuxiliaryHaber = (prev && RAE_AUXILIARY_HABER.has(prev)) ||
      (prev2 && RAE_AUXILIARY_HABER.has(prev2) && prev && ["no", "ya", "siempre", "nunca", "aun", "aún", "le", "les", "me", "nos", "te"].includes(prev));

    // 1. Detección en Catálogo de Homógrafos Críticos
    if (RAE_HOMOGRAPHS[lower]) {
      const homograph = RAE_HOMOGRAPHS[lower];
      // Categoría por defecto: la primera y principal opción canónica en la Biblia
      let detectedCategory = homograph.options[0].categoryKey;
      let detectedExplanation = "";
      let targetLemma = homograph.options[0].lemma;

      if (lower === "creído" || lower === "creída" || lower === "creídos" || lower === "creídas") {
        detectedCategory = "VERB";
        targetLemma = "creer";
        detectedExplanation = isAfterAuxiliaryHaber
          ? `Forma de participio del verbo creer en tiempo compuesto («${prev || 'haber'} ${clean}»).`
          : `Forma de participio perteneciente al verbo «creer».`;
      } else if (lower === "vino") {
        if (prev && (nounTriggers.includes(prev) || prepTriggers.includes(prev))) {
          detectedCategory = "NOUN";
          targetLemma = "vino";
          detectedExplanation = `Precedido de «${prev}», funcionando como sustantivo común (bebida).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "venir";
          detectedExplanation = `Forma del verbo venir en pretérito perfecto simple («vino»).`;
        }
      } else if (lower === "camino") {
        if (prev && (nounTriggers.includes(prev) || prepTriggers.includes(prev))) {
          detectedCategory = "NOUN";
          targetLemma = "camino";
          detectedExplanation = `Precedido de «${prev}», funcionando como sustantivo (senda, vía).`;
        } else if (prev && ["yo", "no"].includes(prev)) {
          detectedCategory = "VERB";
          targetLemma = "caminar";
          detectedExplanation = `1.ª persona del presente del verbo caminar.`;
        }
      } else if (lower === "principio") {
        if (prev && (nounTriggers.includes(prev) || prepTriggers.includes(prev))) {
          detectedCategory = "NOUN";
          targetLemma = "principio";
          detectedExplanation = `Precedido de «${prev}», funcionando como sustantivo (origen, fundamento).`;
        } else {
          detectedCategory = "NOUN";
          targetLemma = "principio";
          detectedExplanation = `Sustantivo principal en la oración.`;
        }
      } else if (lower === "justo") {
        if (prev && nounTriggers.includes(prev)) {
          if (next && ["y", "que", "es", "era", "será", "vivirá", "florecerá"].includes(next)) {
            detectedCategory = "NOUN";
            targetLemma = "justo";
            detectedExplanation = `Precedido de «${prev}», funcionando sustantivado («el justo»).`;
          } else {
            detectedCategory = "ADJ";
            targetLemma = "justo";
            detectedExplanation = `Modificador adjetival de cualidad.`;
          }
        } else if (prev && ["varón", "hombre", "dios", "juez", "siervo", "camino"].includes(prev)) {
          detectedCategory = "ADJ";
          targetLemma = "justo";
          detectedExplanation = `Modifica directamente al sustantivo «${prev}», funcionando como adjetivo.`;
        } else if (prev && ["muy", "tan", "más"].includes(prev)) {
          detectedCategory = "ADJ";
          targetLemma = "justo";
          detectedExplanation = `Modificado por adverbio de grado «${prev}».`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "justo";
          detectedExplanation = `Adjetivo calificativo de rectitud o santidad.`;
        }
      } else if (lower === "bien") {
        if (prev && (nounTriggers.includes(prev) || prev === "del" || prev === "al")) {
          detectedCategory = "NOUN";
          targetLemma = "bien";
          detectedExplanation = `Precedido de «${prev}», funcionando como sustantivo («el bien moral»).`;
        } else {
          detectedCategory = "ADV";
          targetLemma = "bien";
          detectedExplanation = `Modifica la acción o verbo, funcionando como adverbio de modo.`;
        }
      } else if (lower === "mal") {
        if (prev && (nounTriggers.includes(prev) || prev === "del" || prev === "al" || prepTriggers.includes(prev))) {
          detectedCategory = "NOUN";
          targetLemma = "mal";
          detectedExplanation = `Precedido de «${prev}», funcionando como sustantivo («el mal»).`;
        } else {
          detectedCategory = "ADV";
          targetLemma = "mal";
          detectedExplanation = `Modifica la acción o verbo («hizo mal»), funcionando como adverbio de modo.`;
        }
      } else if (lower === "santo") {
        if (prev && nounTriggers.includes(prev) && (!next || ["y", "que", "de", "del"].includes(next))) {
          detectedCategory = "NOUN";
          targetLemma = "santo";
          detectedExplanation = `Precedido de «${prev}», funcionando sustantivado («los santos»).`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "santo";
          detectedExplanation = `Modifica como adjetivo calificativo («lugar santo», «Dios santo»).`;
        }
      } else if (lower === "fiel") {
        if (prev && nounTriggers.includes(prev) && (!next || ["y", "que", "de"].includes(next))) {
          detectedCategory = "NOUN";
          targetLemma = "fiel";
          detectedExplanation = `Precedido de determinante, funcionando sustantivado («los fieles»).`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "fiel";
          detectedExplanation = `Adjetivo de lealtad y constancia («siervo fiel», «Dios es fiel»).`;
        }
      } else if (lower === "ciego") {
        if (prev && nounTriggers.includes(prev) && (!next || ["y", "que", "de"].includes(next))) {
          detectedCategory = "NOUN";
          targetLemma = "ciego";
          detectedExplanation = `Precedido de determinante, funcionando sustantivado («los ciegos»).`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "ciego";
          detectedExplanation = `Adjetivo calificador («hombre ciego», «guías ciegos»).`;
        }
      } else if (lower === "pobre") {
        if (prev && nounTriggers.includes(prev) && (!next || ["y", "que"].includes(next))) {
          detectedCategory = "NOUN";
          targetLemma = "pobre";
          detectedExplanation = `Precedido de determinante, funcionando sustantivado («los pobres»).`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "pobre";
          detectedExplanation = `Adjetivo calificador («pobres en espíritu»).`;
        }
      } else if (lower === "sabio") {
        if (prev && nounTriggers.includes(prev) && (!next || ["y", "que", "de"].includes(next))) {
          detectedCategory = "NOUN";
          targetLemma = "sabio";
          detectedExplanation = `Precedido de determinante, funcionando sustantivado («los sabios»).`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "sabio";
          detectedExplanation = `Adjetivo calificador («varón sabio», «hijo sabio»).`;
        }
      } else if (lower === "muerto") {
        if (isAfterAuxiliaryHaber) {
          detectedCategory = "VERB";
          targetLemma = "morir";
          detectedExplanation = `Participio del verbo morir en tiempo compuesto («ha muerto»).`;
        } else if (prev && nounTriggers.includes(prev) && (!next || ["y", "que", "de"].includes(next))) {
          detectedCategory = "NOUN";
          targetLemma = "muerto";
          detectedExplanation = `Precedido de determinante, funcionando sustantivado («el muerto», «los muertos»).`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "muerto";
          detectedExplanation = `Adjetivo o participio atributivo («estaba muerto», «hijo muerto»).`;
        }
      } else if (lower === "vivo") {
        if (prev && ["yo", "no"].includes(prev)) {
          detectedCategory = "VERB";
          targetLemma = "vivir";
          detectedExplanation = `1.ª persona del presente del verbo vivir («yo vivo»).`;
        } else if (prev && nounTriggers.includes(prev) && (!next || ["y", "que", "de"].includes(next))) {
          detectedCategory = "NOUN";
          targetLemma = "vivo";
          detectedExplanation = `Precedido de determinante, funcionando sustantivado («los vivos»).`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "vivo";
          detectedExplanation = `Adjetivo calificador («Dios vivo», «palabra viva»).`;
        }
      } else if (lower === "era") {
        if (prev && (nounTriggers.includes(prev) || prepTriggers.includes(prev)) && next && ["de", "del"].includes(next)) {
          detectedCategory = "NOUN";
          targetLemma = "era";
          detectedExplanation = `Sustantivo común («la era de trillar»).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "ser";
          detectedExplanation = `Pretérito imperfecto de indicativo del verbo «ser» («En el principio era el Verbo»).`;
        }
      } else if (lower === "ve") {
        if (next && ["y", "a", "al", "en", "por", "fuera"].includes(next)) {
          detectedCategory = "VERB";
          targetLemma = "ir";
          detectedExplanation = `Modo imperativo en 2.ª persona del verbo ir («ve y dile», «ve en paz»).`;
        } else if (prev && verbSubjectTriggers.includes(prev)) {
          detectedCategory = "VERB";
          targetLemma = "ver";
          detectedExplanation = `3.ª persona singular del presente del verbo ver («él ve»).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "ir";
          detectedExplanation = `Forma verbal imperativa del verbo ir («ve»).`;
        }
      } else if (lower === "fue") {
        if (prev === "se" || (next && ["a", "al", "hacia", "lejos"].includes(next))) {
          detectedCategory = "VERB";
          targetLemma = "ir";
          detectedExplanation = `Pretérito perfecto simple del verbo ir («se fue»).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "ser";
          detectedExplanation = `Pretérito perfecto simple del verbo ser («fue la luz», «fue hecho»).`;
        }
      } else if (lower === "sé") {
        if (next && ["fiel", "santo", "limpio", "valiente", "sobrio", "sabio"].includes(next)) {
          detectedCategory = "VERB";
          targetLemma = "ser";
          detectedExplanation = `Modo imperativo singular del verbo ser («sé fiel»).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "saber";
          detectedExplanation = `1.ª persona del presente del verbo saber («yo sé en quién he creído»).`;
        }
      } else if (lower === "haz") {
        if (prev && ["la", "una", "sobre"].includes(prev)) {
          detectedCategory = "NOUN";
          targetLemma = "haz";
          detectedExplanation = `Sustantivo común (faz, superficie, haz de luz o manojo).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "hacer";
          detectedExplanation = `Modo imperativo en 2.ª persona del verbo hacer («haz ${next || 'esto'}»).`;
        }
      } else if (lower === "sal") {
        if (prev && (nounTriggers.includes(prev) || prepTriggers.includes(prev))) {
          detectedCategory = "NOUN";
          targetLemma = "sal";
          detectedExplanation = `Sustantivo común («la sal de la tierra»).`;
        } else if (next && ["del", "de", "fuera", "tú"].includes(next)) {
          detectedCategory = "VERB";
          targetLemma = "salir";
          detectedExplanation = `Modo imperativo del verbo salir («sal del arca»).`;
        } else {
          detectedCategory = "NOUN";
          targetLemma = "sal";
          detectedExplanation = `Sustantivo común (cloruro sódico, condimento).`;
        }
      } else if (lower === "casa") {
        if (prev && ["se", "que"].includes(prev)) {
          detectedCategory = "VERB";
          targetLemma = "casar";
          detectedExplanation = `3.ª persona singular del presente del verbo casar («se casa»).`;
        } else {
          detectedCategory = "NOUN";
          targetLemma = "casa";
          detectedExplanation = `Sustantivo común («la casa»).`;
        }
      } else if (lower === "ayuda") {
        if (prev && ["me", "te", "se", "nos", "os", "le", "les", "dios"].includes(prev)) {
          detectedCategory = "VERB";
          targetLemma = "ayudar";
          detectedExplanation = `Forma verbal del verbo ayudar («nos ayuda»).`;
        } else {
          detectedCategory = "NOUN";
          targetLemma = "ayuda";
          detectedExplanation = `Sustantivo común («ayuda idónea»).`;
        }
      } else if (lower === "guía") {
        if (prev && ["me", "te", "se", "nos", "os", "le", "les", "él", "dios"].includes(prev)) {
          detectedCategory = "VERB";
          targetLemma = "guiar";
          detectedExplanation = `3.ª persona del presente del verbo guiar («me guía»).`;
        } else {
          detectedCategory = "NOUN";
          targetLemma = "guía";
          detectedExplanation = `Sustantivo común («guía de ciegos»).`;
        }
      } else if (lower === "vestido") {
        if (isAfterAuxiliaryHaber || (prev && ["se", "estaba"].includes(prev))) {
          detectedCategory = "VERB";
          targetLemma = "vestir";
          detectedExplanation = `Participio del verbo vestir («se ha vestido»).`;
        } else {
          detectedCategory = "NOUN";
          targetLemma = "vestido";
          detectedExplanation = `Sustantivo común («su vestido»).`;
        }
      } else if (lower === "sobre") {
        detectedCategory = "PREP";
        targetLemma = "sobre";
        detectedExplanation = `Preposición de lugar o asunto («sobre la faz de las aguas»).`;
      } else if (lower === "bajo") {
        if (prev && ["varón", "hombre", "lugar", "piso", "estado"].includes(prev)) {
          detectedCategory = "ADJ";
          targetLemma = "bajo";
          detectedExplanation = `Adjetivo calificativo («de bajo grado»).`;
        } else {
          detectedCategory = "PREP";
          targetLemma = "bajo";
          detectedExplanation = `Preposición («bajo el cielo», «bajo sus pies»).`;
        }
      } else if (lower === "para") {
        detectedCategory = "PREP";
        targetLemma = "para";
        detectedExplanation = `Preposición de propósito, fin o destino («para que», «para siempre»).`;
      } else if (lower === "como") {
        detectedCategory = "ADV";
        targetLemma = "como";
        detectedExplanation = `Adverbio o conjunción comparativa de modo («como está escrito»).`;
      } else if (lower === "sino") {
        detectedCategory = "CONJ";
        targetLemma = "sino";
        detectedExplanation = `Conjunción adversativa («no... sino a pecadores»).`;
      } else if (lower === "mas") {
        detectedCategory = "CONJ";
        targetLemma = "mas";
        detectedExplanation = `Conjunción adversativa equivalente a pero («mas a todos»).`;
      } else if (lower === "pronto") {
        if (next && ["auxilio", "socorro"].includes(next)) {
          detectedCategory = "ADJ";
          targetLemma = "pronto";
          detectedExplanation = `Adjetivo («pronto auxilio»).`;
        } else {
          detectedCategory = "ADV";
          targetLemma = "pronto";
          detectedExplanation = `Adverbio de tiempo o presteza («vendrá pronto»).`;
        }
      } else if (lower === "cierto") {
        if (prev === "por") {
          detectedCategory = "ADV";
          targetLemma = "cierto";
          detectedExplanation = `Locución adverbial («por cierto»).`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "cierto";
          detectedExplanation = `Adjetivo / determinante de cualidad o certeza («cierto varón»).`;
        }
      } else if (lower === "solo") {
        if (prev === "no") {
          detectedCategory = "ADV";
          targetLemma = "solo";
          detectedExplanation = `Adverbio equivalente a solamente («no solo de pan»).`;
        } else {
          detectedCategory = "ADJ";
          targetLemma = "solo";
          detectedExplanation = `Adjetivo de soledad o unicidad («un solo Dios»).`;
        }
      } else if (lower === "claro") {
        if (prev && (nounTriggers.includes(prev) || ["agua", "luz", "día"].includes(prev))) {
          detectedCategory = "ADJ";
          targetLemma = "claro";
          detectedExplanation = `Adjetivo calificador («agua clara»).`;
        } else {
          detectedCategory = "ADV";
          targetLemma = "claro";
          detectedExplanation = `Adverbio de modo.`;
        }
      } else if (lower === "oído") {
        if (isAfterAuxiliaryHaber) {
          detectedCategory = "VERB";
          targetLemma = "oír";
          detectedExplanation = `Participio del verbo oír en tiempo compuesto («habéis oído»).`;
        } else if (prev && (nounTriggers.includes(prev) || prepTriggers.includes(prev))) {
          detectedCategory = "NOUN";
          targetLemma = "oído";
          detectedExplanation = `Sustantivo común («el oído», «vuestro oído»).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "oír";
          detectedExplanation = `Forma del verbo oír.`;
        }
      } else if (lower === "dicho") {
        if (isAfterAuxiliaryHaber || (prev && ["fue", "es", "era"].includes(prev))) {
          detectedCategory = "VERB";
          targetLemma = "decir";
          detectedExplanation = `Participio irregular del verbo decir («ha dicho», «fue dicho»).`;
        } else if (prev && nounTriggers.includes(prev)) {
          detectedCategory = "NOUN";
          targetLemma = "dicho";
          detectedExplanation = `Sustantivo común («un dicho»).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "decir";
          detectedExplanation = `Participio verbal del verbo decir.`;
        }
      } else if (lower === "hecho") {
        if (isAfterAuxiliaryHaber || (prev && ["fue", "es", "era"].includes(prev))) {
          detectedCategory = "VERB";
          targetLemma = "hacer";
          detectedExplanation = `Participio irregular del verbo hacer («ha hecho», «fue hecho»).`;
        } else if (prev && (nounTriggers.includes(prev) || prepTriggers.includes(prev))) {
          detectedCategory = "NOUN";
          targetLemma = "hecho";
          detectedExplanation = `Sustantivo común («los hechos»).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "hacer";
          detectedExplanation = `Participio del verbo hacer.`;
        }
      } else if (lower === "puesto") {
        if (isAfterAuxiliaryHaber || (next && next === "de")) {
          detectedCategory = "VERB";
          targetLemma = "poner";
          detectedExplanation = `Participio irregular del verbo poner («ha puesto», «puesto de rodillas»).`;
        } else if (prev && nounTriggers.includes(prev)) {
          detectedCategory = "NOUN";
          targetLemma = "puesto";
          detectedExplanation = `Sustantivo («un puesto»).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "poner";
          detectedExplanation = `Participio del verbo poner.`;
        }
      } else if (lower === "visto") {
        detectedCategory = "VERB";
        targetLemma = "ver";
        detectedExplanation = `Participio irregular del verbo ver («ha visto», «habiendo visto»).`;
      } else if (lower === "escrito") {
        if (prev && ["está", "estaba", "ha", "fue"].includes(prev) || (next && next === "está")) {
          detectedCategory = "VERB";
          targetLemma = "escribir";
          detectedExplanation = `Participio irregular del verbo escribir («escrito está», «ha escrito»).`;
        } else if (prev && (nounTriggers.includes(prev) || prepTriggers.includes(prev))) {
          detectedCategory = "NOUN";
          targetLemma = "escrito";
          detectedExplanation = `Sustantivo («el escrito de divorcio»).`;
        } else {
          detectedCategory = "VERB";
          targetLemma = "escribir";
          detectedExplanation = `Participio del verbo escribir.`;
        }
      }

      // Reordenar opciones marcando la recomendada de acuerdo con el contexto
      const options = homograph.options.map(opt => {
        const matchesCategory = opt.categoryKey === detectedCategory;
        const matchesLemma = targetLemma ? opt.lemma === targetLemma : true;
        const isRec = matchesCategory && matchesLemma;
        return {
          ...opt,
          isRecommended: isRec,
          url: `https://dle.rae.es/${encodeURIComponent(opt.lemma)}`
        };
      });

      // Asegurar que si ninguna coincidió exactamente, la más afín sea recomendada
      if (!options.some(o => o.isRecommended)) {
        const byCat = options.find(o => o.categoryKey === detectedCategory);
        if (byCat) byCat.isRecommended = true;
        else options[0].isRecommended = true;
      }

      return {
        word: clean,
        detectedCategory,
        detectedExplanation,
        isHomograph: true,
        options
      };
    }

    // 2. Tiempos compuestos y participios verbales (haber + participio o participios específicos)
    if (isAfterAuxiliaryHaber || RAE_PARTICIPLES[lower]) {
      const verbLemma = RAE_PARTICIPLES[lower] ||
        (lower.endsWith("ado") ? lower.slice(0, -3) + "ar" :
         lower.endsWith("ada") ? lower.slice(0, -3) + "ar" :
         lower.endsWith("ados") ? lower.slice(0, -4) + "ar" :
         lower.endsWith("adas") ? lower.slice(0, -4) + "ar" :
         lower.endsWith("ido") ? lower.slice(0, -3) + "er" : null);

      if (verbLemma) {
        return {
          word: clean,
          detectedCategory: "VERB",
          detectedExplanation: `Forma en participio del verbo «${verbLemma}» («${prev || 'haber'} ${clean}»).`,
          isHomograph: false,
          options: [
            {
              categoryKey: "VERB",
              category: "Verbo",
              lemma: verbLemma,
              isRecommended: true,
              label: `Consultar VERBO («${verbLemma}») en la RAE ↗`,
              description: `Abre el lema oficial del infinitivo (${verbLemma}) en la RAE con su modelo de conjugación completo.`,
              url: `https://dle.rae.es/${encodeURIComponent(verbLemma)}`
            }
          ]
        };
      }
    }

    // 3. Preposiciones
    if (RAE_PREPOSITIONS.has(lower)) {
      return {
        word: clean,
        detectedCategory: "PREP",
        detectedExplanation: `Preposición oficial en el Diccionario de la RAE.`,
        isHomograph: false,
        options: [
          {
            categoryKey: "PREP",
            category: "Preposición",
            lemma: clean,
            isRecommended: true,
            label: `Consultar PREPOSICIÓN («${clean}») en la RAE ↗`,
            description: `Abre la definición oficial de la preposición en dle.rae.es.`,
            url: `https://dle.rae.es/${encodeURIComponent(clean)}`
          }
        ]
      };
    }

    // 4. Conjunciones
    if (RAE_CONJUNCTIONS.has(lower)) {
      return {
        word: clean,
        detectedCategory: "CONJ",
        detectedExplanation: `Conjunción gramatical en el Diccionario de la RAE.`,
        isHomograph: false,
        options: [
          {
            categoryKey: "CONJ",
            category: "Conjunción",
            lemma: clean,
            isRecommended: true,
            label: `Consultar CONJUNCIÓN («${clean}») en la RAE ↗`,
            description: `Abre la definición oficial de la conjunción en dle.rae.es.`,
            url: `https://dle.rae.es/${encodeURIComponent(clean)}`
          }
        ]
      };
    }

    // 5. Pronombres personales y relativos
    if (RAE_PRONOUNS.has(lower)) {
      return {
        word: clean,
        detectedCategory: "PRON",
        detectedExplanation: `Pronombre oficial en el Diccionario de la RAE.`,
        isHomograph: false,
        options: [
          {
            categoryKey: "PRON",
            category: "Pronombre",
            lemma: clean,
            isRecommended: true,
            label: `Consultar PRONOMBRE («${clean}») en la RAE ↗`,
            description: `Abre la definición del pronombre en dle.rae.es.`,
            url: `https://dle.rae.es/${encodeURIComponent(clean)}`
          }
        ]
      };
    }

    // 6. Adverbios
    if (RAE_ADVERBS.has(lower) || (lower.endsWith("mente") && lower.length > 5)) {
      return {
        word: clean,
        detectedCategory: "ADV",
        detectedExplanation: `Adverbio en el Diccionario de la Real Academia Española.`,
        isHomograph: false,
        options: [
          {
            categoryKey: "ADV",
            category: "Adverbio",
            lemma: clean,
            isRecommended: true,
            label: `Consultar ADVERBIO («${clean}») en la RAE ↗`,
            description: `Definición adverbial en el Diccionario de la RAE.`,
            url: `https://dle.rae.es/${encodeURIComponent(clean)}`
          }
        ]
      };
    }

    // 7. Determinantes y Artículos
    if (RAE_DETERMINERS.has(lower)) {
      return {
        word: clean,
        detectedCategory: "DET",
        detectedExplanation: `Determinante / artículo en la gramática española.`,
        isHomograph: false,
        options: [
          {
            categoryKey: "DET",
            category: "Determinante",
            lemma: clean,
            isRecommended: true,
            label: `Consultar DETERMINANTE («${clean}») en la RAE ↗`,
            description: `Abre la definición oficial en dle.rae.es.`,
            url: `https://dle.rae.es/${encodeURIComponent(clean)}`
          }
        ]
      };
    }

    // 8. Sustantivos canónicos sagrados
    if (RAE_CANONICAL_NOUNS[lower]) {
      const canonical = RAE_CANONICAL_NOUNS[lower];
      return {
        word: clean,
        detectedCategory: "NOUN",
        detectedExplanation: canonical.description,
        isHomograph: false,
        options: [
          {
            categoryKey: "NOUN",
            category: canonical.category,
            lemma: canonical.lemma,
            isRecommended: true,
            label: `Consultar ${canonical.category.toUpperCase()} («${canonical.lemma}») en la RAE ↗`,
            description: canonical.description,
            url: `https://dle.rae.es/${encodeURIComponent(canonical.lemma)}`
          }
        ]
      };
    }

    // 9. Verbos con pronombres enclíticos bíblicos (ej. díjole, hízose, fuéronse, diciéndoles)
    const ENCLITIC_EXCLUSIONS = new Set([
      "este", "éste", "esta", "ésta", "estos", "éstos", "estas", "éstas",
      "ese", "ése", "esa", "ésa", "esos", "ésos", "esas", "ésas",
      "dios", "dioses", "pos", "velo", "vela", "oídos"
    ]);

    const encliticMatch = !ENCLITIC_EXCLUSIONS.has(lower) && lower.match(/^([a-záéíóúüñ]+?)(le|les|la|las|lo|los|me|te|se|nos|os)$/i);
    if (encliticMatch) {
      const rawBase = encliticMatch[1];
      const unaccented = rawBase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const baseCandidates = [rawBase, unaccented, unaccented + "o", unaccented + "e", unaccented + "on"];
      for (const cand of baseCandidates) {
        if (RAE_VERB_LEMMAS[cand]) {
          const lemma = RAE_VERB_LEMMAS[cand];
          return {
            word: clean,
            detectedCategory: "VERB",
            detectedExplanation: `Forma verbal con pronombre enclítico incorporado («${cand}» + «${encliticMatch[2]}»), correspondiente al verbo «${lemma}».`,
            isHomograph: false,
            options: [
              {
                categoryKey: "VERB",
                category: "Verbo",
                lemma: lemma,
                isRecommended: true,
                label: `Consultar VERBO («${lemma}») en la RAE ↗`,
                description: `Abre el lema oficial del infinitivo (${lemma}) en la RAE con su tabla de conjugaciones completa.`,
                url: `https://dle.rae.es/${encodeURIComponent(lemma)}`
              }
            ]
          };
        }
      }
    }

    // 10. Formas verbales conjugadas catalogadas
    if (RAE_VERB_LEMMAS[lower]) {
      const lemma = RAE_VERB_LEMMAS[lower];
      return {
        word: clean,
        detectedCategory: "VERB",
        detectedExplanation: `Forma verbal conjugada perteneciente al verbo «${lemma}».`,
        isHomograph: false,
        options: [
          {
            categoryKey: "VERB",
            category: "Verbo",
            lemma: lemma,
            isRecommended: true,
            label: `Consultar VERBO («${lemma}») en la RAE ↗`,
            description: `Abre el lema oficial del infinitivo (${lemma}) en la RAE con su definición y modelo de conjugación.`,
            url: `https://dle.rae.es/${encodeURIComponent(lemma)}`
          }
        ]
      };
    }

    // 11. Heurísticas verbales:
    // Gerundios en -ando / -iendo / -yendo
    if (lower.endsWith("ando") && lower.length > 5) {
      const lemma = lower.slice(0, -4) + "ar";
      return {
        word: clean,
        detectedCategory: "VERB",
        detectedExplanation: `Gerundio regular del verbo «${lemma}».`,
        isHomograph: false,
        options: [{
          categoryKey: "VERB",
          category: "Verbo",
          lemma: lemma,
          isRecommended: true,
          label: `Consultar VERBO («${lemma}») en la RAE ↗`,
          description: `Abre el infinitivo oficial del verbo en la RAE.`,
          url: `https://dle.rae.es/${encodeURIComponent(lemma)}`
        }]
      };
    }
    if ((lower.endsWith("iendo") || lower.endsWith("yendo")) && lower.length > 6) {
      const stem = lower.endsWith("iendo") ? lower.slice(0, -5) : lower.slice(0, -5);
      const lemma = stem + "er";
      return {
        word: clean,
        detectedCategory: "VERB",
        detectedExplanation: `Gerundio del verbo «${lemma}».`,
        isHomograph: false,
        options: [{
          categoryKey: "VERB",
          category: "Verbo",
          lemma: lemma,
          isRecommended: true,
          label: `Consultar VERBO («${lemma}») en la RAE ↗`,
          description: `Abre el infinitivo oficial del verbo en la RAE.`,
          url: `https://dle.rae.es/${encodeURIComponent(lemma)}`
        }]
      };
    }

    // Pretérito regular en -ó (ej. clamó, multiplicó, edificó, santificó)
    if (lower.endsWith("ó") && lower.length > 3) {
      const lemma = lower.slice(0, -1) + "ar";
      return {
        word: clean,
        detectedCategory: "VERB",
        detectedExplanation: `Forma verbal en pretérito perfecto simple, 3.ª persona singular («${lemma}»).`,
        isHomograph: false,
        options: [
          {
            categoryKey: "VERB",
            category: "Verbo",
            lemma: lemma,
            isRecommended: true,
            label: `Consultar VERBO («${lemma}») en la RAE ↗`,
            description: `Abre el infinitivo oficial del verbo en la RAE con su tabla de conjugación.`,
            url: `https://dle.rae.es/${encodeURIComponent(lemma)}`
          }
        ]
      };
    }

    // Pretérito regular plural en -aron (ej. clamaron, edificaron)
    if (lower.endsWith("aron") && lower.length > 5) {
      const lemma = lower.slice(0, -4) + "ar";
      return {
        word: clean,
        detectedCategory: "VERB",
        detectedExplanation: `Forma verbal en pretérito perfecto simple plural («${lemma}»).`,
        isHomograph: false,
        options: [{
          categoryKey: "VERB",
          category: "Verbo",
          lemma: lemma,
          isRecommended: true,
          label: `Consultar VERBO («${lemma}») en la RAE ↗`,
          description: `Abre el infinitivo oficial en la RAE.`,
          url: `https://dle.rae.es/${encodeURIComponent(lemma)}`
        }]
      };
    }

    // Pretérito regular en -ió / -ieron
    if (lower.endsWith("ió") && lower.length > 4) {
      const lemma = lower.slice(0, -2) + "er";
      return {
        word: clean,
        detectedCategory: "VERB",
        detectedExplanation: `Forma verbal en pretérito («${lemma}»).`,
        isHomograph: false,
        options: [{
          categoryKey: "VERB",
          category: "Verbo",
          lemma: lemma,
          isRecommended: true,
          label: `Consultar VERBO («${lemma}») en la RAE ↗`,
          description: `Abre el infinitivo oficial en la RAE.`,
          url: `https://dle.rae.es/${encodeURIComponent(lemma)}`
        }]
      };
    }

    // Imperfecto en -aba / -aban
    if ((lower.endsWith("aba") || lower.endsWith("aban")) && lower.length > 5) {
      const stem = lower.endsWith("aban") ? lower.slice(0, -4) : lower.slice(0, -3);
      const lemma = stem + "ar";
      return {
        word: clean,
        detectedCategory: "VERB",
        detectedExplanation: `Forma de pretérito imperfecto («${lemma}»).`,
        isHomograph: false,
        options: [{
          categoryKey: "VERB",
          category: "Verbo",
          lemma: lemma,
          isRecommended: true,
          label: `Consultar VERBO («${lemma}») en la RAE ↗`,
          description: `Abre el infinitivo oficial en la RAE.`,
          url: `https://dle.rae.es/${encodeURIComponent(lemma)}`
        }]
      };
    }

    // 12. Sustantivos en plural (ej. cielos -> cielo, aguas -> agua)
    if (RAE_PLURAL_NOUNS[lower]) {
      const singular = RAE_PLURAL_NOUNS[lower];
      return {
        word: clean,
        detectedCategory: "NOUN",
        detectedExplanation: `Sustantivo en plural. Se recomienda consultar el lema singular oficial («${singular}»).`,
        isHomograph: false,
        options: [
          {
            categoryKey: "NOUN",
            category: "Sustantivo",
            lemma: singular,
            isRecommended: true,
            label: `Consultar SUSTANTIVO («${singular}») en la RAE ↗`,
            description: `Forma singular canónica en el Diccionario de la RAE.`,
            url: `https://dle.rae.es/${encodeURIComponent(singular)}`
          }
        ]
      };
    }

    // 13. Sustantivo general precedido de determinante
    if (prev && nounTriggers.includes(prev)) {
      return {
        word: clean,
        detectedCategory: "NOUN",
        detectedExplanation: `Precedido por el determinante «${prev}», funcionando como sustantivo.`,
        isHomograph: false,
        options: [
          {
            categoryKey: "NOUN",
            category: "Sustantivo",
            lemma: clean,
            isRecommended: true,
            label: `Consultar SUSTANTIVO («${clean}») en la RAE ↗`,
            description: `Definición oficial en el Diccionario de la Real Academia Española.`,
            url: `https://dle.rae.es/${encodeURIComponent(clean)}`
          }
        ]
      };
    }

    // Por defecto: Consulta estándar
    return {
      word: clean,
      detectedCategory: "WORD",
      detectedExplanation: `Consulta léxica en el Diccionario de la Real Academia Española.`,
      isHomograph: false,
      options: [
        {
          categoryKey: "WORD",
          category: "Palabra",
          lemma: clean,
          isRecommended: true,
          label: `Consultar «${clean}» en la RAE ↗`,
          description: `Abre la definición oficial en dle.rae.es en una pestaña nueva sin salir de la Biblia.`,
          url: `https://dle.rae.es/${encodeURIComponent(clean)}`
        }
      ]
    };
  },

  getRaeTarget(rawWord, verseText) {
    const analysis = this.analyzeWordInContext(rawWord, verseText);
    const recommended = (analysis.options && analysis.options.find(o => o.isRecommended)) || (analysis.options && analysis.options[0]);

    let lemma = (recommended && recommended.lemma) || analysis.word;
    let category = (recommended && recommended.category) || "Término";
    let categoryKey = (recommended && recommended.categoryKey) || analysis.detectedCategory || "WORD";
    let url = (recommended && recommended.url) || `https://dle.rae.es/${encodeURIComponent(analysis.word)}`;

    // Salvaguarda absoluta para el verbo creer: jamás permitir redirección al adjetivo moderno "creído"
    const lowerClean = this.cleanToken(rawWord).toLowerCase().normalize("NFC");
    if (lowerClean === "creído" || lowerClean === "creida" || lowerClean === "creido" || lowerClean === "creída" ||
        lowerClean === "creídos" || lowerClean === "creidos" || lowerClean === "creídas" || lowerClean === "creidas" ||
        lowerClean.includes("creído") || lowerClean.includes("creido")) {
      lemma = "creer";
      category = "Verbo";
      categoryKey = "VERB";
      url = "https://dle.rae.es/creer";
    }

    return {
      word: analysis.word,
      lemma,
      category,
      categoryKey,
      url
    };
  }
};

if (typeof window !== "undefined") {
  window.RaeLinguisticEngine = RaeLinguisticEngine;
}

// Alternar Modo RAE
function toggleRaeMode() {
  AppState.settings.raeMode = !AppState.settings.raeMode;
  saveSettings();
  showToast(AppState.settings.raeMode ? "Modo RAE activado: haz clic en cualquier palabra" : "Modo RAE desactivado");
}

// Navegar directamente a la definición exacta de la RAE en una nueva pestaña (sin cerrar la app)
function goToRaeDefinition(rawWord, verseText) {
  const target = RaeLinguisticEngine.getRaeTarget(rawWord, verseText);
  if (!target || !target.url) return;

  // Abrir en nueva pestaña evitando que la Biblia se cierre o recargue
  window.open(target.url, "_blank", "noopener,noreferrer");
  showToast(`RAE: consultando «${target.lemma}» (${target.category})`);
}


// --- 12. Controladores de Eventos ---
function setupEventListeners() {
  // Botones de Apertura y Cierre
  // --- Barra Inferior Móvil (Mobile Bottom Nav) ---
  document.getElementById("btnMobileNavIndex")?.addEventListener("click", openNavDrawer);
  document.getElementById("btnMobileNavSearch")?.addEventListener("click", () => openSearchModal());
  document.getElementById("btnMobileNavPrev")?.addEventListener("click", () => changeChapter(-1));
  document.getElementById("btnMobileNavNext")?.addEventListener("click", () => changeChapter(1));
  document.getElementById("btnMobileNavSettings")?.addEventListener("click", openSettingsDrawer);

  // --- Ventana de Opciones / Ajustes de Lectura (Drawer lateral derecho) ---
  document.getElementById("btnOpenSettings")?.addEventListener("click", openSettingsDrawer);
  document.getElementById("btnCloseSettings")?.addEventListener("click", closeSettingsDrawer);
  document.getElementById("settingsDrawerBackdrop")?.addEventListener("click", closeSettingsDrawer);

  // --- Navegación e Índice de Libros (Drawer lateral izquierdo) ---
  document.getElementById("btnOpenNav")?.addEventListener("click", openNavDrawer);
  document.getElementById("btnQuickSelect")?.addEventListener("click", openNavDrawer);
  document.getElementById("btnFooterIndex")?.addEventListener("click", openNavDrawer);
  document.getElementById("btnCloseNav")?.addEventListener("click", closeNavDrawer);
  document.getElementById("navDrawerBackdrop")?.addEventListener("click", closeNavDrawer);

  // --- Modal de Búsqueda Bíblica ---
  document.getElementById("btnOpenSearch")?.addEventListener("click", () => openSearchModal());
  document.getElementById("btnDrawerOpenSearch")?.addEventListener("click", () => {
    closeNavDrawer();
    openSearchModal();
  });
  document.getElementById("btnCloseSearchModal")?.addEventListener("click", closeSearchModal);
  document.getElementById("searchModalOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "searchModalOverlay") closeSearchModal();
  });

  // --- Modal Acerca de y Créditos Legales ---
  document.getElementById("btnOpenAbout")?.addEventListener("click", openAboutModal);
  document.getElementById("btnCloseAboutModal")?.addEventListener("click", closeAboutModal);
  document.getElementById("btnAckAbout")?.addEventListener("click", closeAboutModal);
  document.getElementById("aboutModalOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "aboutModalOverlay") closeAboutModal();
  });

  // --- Barra de Acciones de Versículos (Copiar, WhatsApp, Compartir) ---
  document.getElementById("btnSelectAllVerses")?.addEventListener("click", toggleSelectAllVerses);
  document.getElementById("btnCloseVerseAction")?.addEventListener("click", clearVerseSelection);
  document.getElementById("btnCopySelectedVerses")?.addEventListener("click", copySelectedVerses);
  document.getElementById("btnWhatsappSelectedVerses")?.addEventListener("click", shareSelectedVersesToWhatsapp);
  document.getElementById("btnShareSelectedVerses")?.addEventListener("click", shareSelectedVersesNative);

  // --- Input del Buscador Bíblico y Limpieza ---
  const bibleSearchInput = document.getElementById("bibleSearchInput");
  bibleSearchInput?.addEventListener("input", (e) => {
    AppState.search.query = e.target.value;
    clearTimeout(AppState.search.debounceTimer);
    AppState.search.debounceTimer = setTimeout(() => {
      executeBibleSearch();
    }, 250);
  });
  bibleSearchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      clearTimeout(AppState.search.debounceTimer);
      executeBibleSearch();
    }
  });

  document.getElementById("btnClearSearch")?.addEventListener("click", () => {
    if (bibleSearchInput) {
      bibleSearchInput.value = "";
      bibleSearchInput.focus();
    }
    AppState.search.query = "";
    executeBibleSearch();
  });

  // Filtros de Ámbito de Búsqueda (Todo, AT, NT, Solo libro actual)
  document.querySelectorAll(".search-scope-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const scope = btn.getAttribute("data-scope");
      if (!scope) return;
      AppState.search.scope = scope;
      document.querySelectorAll(".search-scope-btn").forEach(b => {
        const isActive = b.getAttribute("data-scope") === scope;
        b.classList.toggle("active-scope", isActive);
        b.classList.toggle("bg-[var(--bg-surface)]", isActive);
        b.classList.toggle("text-[var(--accent-color)]", isActive);
        b.classList.toggle("font-semibold", isActive);
        b.classList.toggle("opacity-70", !isActive);
      });
      executeBibleSearch();
    });
  });

  // Buscador Bíblico: Toggle de Frase Exacta
  document.getElementById("checkExactPhrase")?.addEventListener("change", (e) => {
    AppState.search.exactPhrase = e.target.checked;
    executeBibleSearch();
  });

  // Botón volver a lista de libros
  document.getElementById("btnBackToBooks")?.addEventListener("click", backToBooksList);

  // Navegación Anterior / Siguiente
  document.getElementById("btnHeaderPrev")?.addEventListener("click", () => changeChapter(-1));
  document.getElementById("btnHeaderNext")?.addEventListener("click", () => changeChapter(1));
  document.getElementById("btnFooterPrev")?.addEventListener("click", () => changeChapter(-1));
  document.getElementById("btnFooterNext")?.addEventListener("click", () => changeChapter(1));

  // Salto a capítulo
  document.getElementById("selectQuickChapter")?.addEventListener("change", (e) => {
    const ch = parseInt(e.target.value, 10);
    if (ch && ch !== AppState.currentChapter) {
      goToChapter(AppState.currentBook, ch);
    }
  });

  // Salto a versículo
  document.getElementById("selectQuickVerse")?.addEventListener("change", (e) => {
    const v = e.target.value;
    if (v) scrollToVerse(v);
  });

  // Pestañas de Testamentos en Drawer
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".nav-tab").forEach(t => {
        t.classList.remove("bg-[var(--bg-surface)]", "active-tab", "opacity-100");
        t.classList.add("opacity-70");
      });
      tab.classList.add("bg-[var(--bg-surface)]", "active-tab", "opacity-100");
      tab.classList.remove("opacity-70");
      AppState.drawer.filterTestament = tab.getAttribute("data-filter") || "ALL";
      renderBooksGrid();
    });
  });

  // Buscador de libros
  document.getElementById("bookSearchInput")?.addEventListener("input", (e) => {
    AppState.drawer.searchQuery = e.target.value;
    renderBooksGrid();
  });

  // Desplegable de Temas de Color (Acordeón)
  const btnToggleThemes = document.getElementById("btnToggleThemes");
  const themesContainer = document.getElementById("themesCollapseContainer");
  const themesChevron = document.getElementById("themesChevron");
  const themesToggleText = document.getElementById("themesToggleText");

  if (btnToggleThemes && themesContainer) {
    btnToggleThemes.addEventListener("click", () => {
      const isHidden = themesContainer.classList.contains("hidden");
      if (isHidden) {
        themesContainer.classList.remove("hidden");
        btnToggleThemes.setAttribute("aria-expanded", "true");
        if (themesChevron) themesChevron.classList.add("rotate-180");
        if (themesToggleText) themesToggleText.textContent = "Ocultar";
      } else {
        themesContainer.classList.add("hidden");
        btnToggleThemes.setAttribute("aria-expanded", "false");
        if (themesChevron) themesChevron.classList.remove("rotate-180");
        if (themesToggleText) themesToggleText.textContent = "Cambiar";
      }
    });
  }

  // Selección de Temas (10)
  document.querySelectorAll(".theme-swatch").forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme-target");
      if (theme) {
        AppState.settings.theme = theme;
        saveSettings();
        const themeNamesMap = {
          "luz-clasico": "1. Luz Clásico",
          "sepia-pergamino": "2. Sepia Pergamino",
          "noche-oscuro": "3. Noche Oscuro",
          "oled-negro": "4. OLED Negro",
          "bosque-salvia": "5. Bosque Salvia",
          "azul-medianoche": "6. Azul Medianoche",
          "papel-cafe": "7. Papel Café",
          "lavanda-crepusculo": "8. Lavanda Crepúsculo",
          "monocromo-retro": "9. Prensa Vintage",
          "cafe-moca": "10. Café Moca"
        };
        showToast(`Tema activado: ${themeNamesMap[theme] || theme}`);
      }
    });
  });

  // Selección de Tipografía (50)
  document.getElementById("selectFontFamily")?.addEventListener("change", (e) => {
    AppState.settings.fontFamily = e.target.value;
    saveSettings();
    const selectedOption = e.target.options[e.target.selectedIndex];
    showToast(`Fuente: ${selectedOption ? selectedOption.text.split('(')[0].trim() : 'Actualizada'}`);
  });

  // Desplegable de Estilo de Fuente (Acordeón)
  const btnToggleFontStyles = document.getElementById("btnToggleFontStyles");
  const fontStylesContainer = document.getElementById("fontStylesCollapseContainer");
  const fontStylesChevron = document.getElementById("fontStylesChevron");
  const fontStylesToggleText = document.getElementById("fontStylesToggleText");

  if (btnToggleFontStyles && fontStylesContainer) {
    btnToggleFontStyles.addEventListener("click", () => {
      const isHidden = fontStylesContainer.classList.contains("hidden");
      if (isHidden) {
        fontStylesContainer.classList.remove("hidden");
        btnToggleFontStyles.setAttribute("aria-expanded", "true");
        if (fontStylesChevron) fontStylesChevron.classList.add("rotate-180");
        if (fontStylesToggleText) fontStylesToggleText.textContent = "Ocultar";
      } else {
        fontStylesContainer.classList.add("hidden");
        btnToggleFontStyles.setAttribute("aria-expanded", "false");
        if (fontStylesChevron) fontStylesChevron.classList.remove("rotate-180");
        if (fontStylesToggleText) fontStylesToggleText.textContent = "Cambiar";
      }
    });
  }

  // Selección de Estilo de Fuente (Normal, Cursiva, Negrita, etc.)
  document.querySelectorAll(".font-style-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetStyle = btn.getAttribute("data-font-style-target") || "normal";
      AppState.settings.fontStyle = targetStyle;
      saveSettings();
      const styleNames = {
        "normal": "Normal",
        "italic": "Cursiva",
        "semibold": "Seminegrita",
        "bold": "Negrita",
        "bold-italic": "Negrita Cursiva",
        "light": "Ligera"
      };
      showToast(`Estilo de fuente: ${styleNames[targetStyle] || targetStyle}`);
    });
  });

  // Tamaño de Fuente (A-, A+ y Slider)
  document.getElementById("btnFontDec")?.addEventListener("click", () => {
    if (AppState.settings.fontSize > 14) {
      AppState.settings.fontSize -= 1;
      saveSettings();
    }
  });

  document.getElementById("btnFontInc")?.addEventListener("click", () => {
    if (AppState.settings.fontSize < 32) {
      AppState.settings.fontSize += 1;
      saveSettings();
    }
  });

  document.getElementById("fontSizeSlider")?.addEventListener("input", (e) => {
    AppState.settings.fontSize = parseInt(e.target.value, 10);
    saveSettings();
  });

  // Interlineado (Botones - / + y Slider)
  document.getElementById("btnLineHeightDec")?.addEventListener("click", () => {
    let current = parseFloat(AppState.settings.lineHeight) || 1.7;
    if (current > 0.8) {
      current = Math.max(0.8, Math.round((current - 0.05) * 100) / 100);
      AppState.settings.lineHeight = current.toString();
      saveSettings();
    }
  });

  document.getElementById("btnLineHeightInc")?.addEventListener("click", () => {
    let current = parseFloat(AppState.settings.lineHeight) || 1.7;
    if (current < 2.6) {
      current = Math.min(2.6, Math.round((current + 0.05) * 100) / 100);
      AppState.settings.lineHeight = current.toString();
      saveSettings();
    }
  });

  document.getElementById("lineHeightSlider")?.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    AppState.settings.lineHeight = (Math.round(val * 100) / 100).toString();
    saveSettings();
  });

  // Modos de Disposición
  document.getElementById("btnLayoutParagraph")?.addEventListener("click", () => {
    AppState.settings.layoutMode = "paragraph";
    saveSettings();
    renderCurrentChapter();
  });

  document.getElementById("btnLayoutLines")?.addEventListener("click", () => {
    AppState.settings.layoutMode = "lines";
    saveSettings();
    renderCurrentChapter();
  });

  // Toggle números de versículos
  document.getElementById("toggleVerseNumbers")?.addEventListener("change", (e) => {
    AppState.settings.showVerseNumbers = e.target.checked;
    saveSettings();
  });

  // Toggle títulos bíblicos (Reina Valera 1960)
  document.getElementById("toggleBibleTitles")?.addEventListener("change", (e) => {
    AppState.settings.showTitles = e.target.checked;
    saveSettings();
    renderCurrentChapter();
    showToast(AppState.settings.showTitles ? "Títulos activados" : "Títulos desactivados");
  });

  // Toggle resaltar citas bíblicas en negrita
  document.getElementById("toggleHighlightQuotes")?.addEventListener("change", (e) => {
    AppState.settings.highlightQuotes = e.target.checked;
    saveSettings();
    renderCurrentChapter();
    showToast(AppState.settings.highlightQuotes ? "Citas en negritas activadas" : "Citas en negritas desactivadas");
  });

  // Toggle Palabras de Jesús en rojo (Edición Letra Roja)
  document.getElementById("toggleJesusWords")?.addEventListener("change", (e) => {
    AppState.settings.jesusWordsRed = e.target.checked;
    saveSettings();
    showToast(AppState.settings.jesusWordsRed ? "Palabras de Jesús en rojo activadas" : "Palabras de Jesús en rojo desactivadas");
  });

  // Toggle Modo Diccionario RAE
  document.getElementById("toggleRaeModeSetting")?.addEventListener("change", (e) => {
    AppState.settings.raeMode = e.target.checked;
    saveSettings();
    showToast(AppState.settings.raeMode ? "Modo Diccionario RAE activado" : "Modo Diccionario RAE desactivado");
  });

  // Alineación
  document.getElementById("btnAlignLeft")?.addEventListener("click", () => {
    AppState.settings.textAlign = "left";
    saveSettings();
  });

  document.getElementById("btnAlignJustify")?.addEventListener("click", () => {
    AppState.settings.textAlign = "justify";
    saveSettings();
  });

  // Restablecer valores predeterminados
  document.getElementById("btnResetSettings")?.addEventListener("click", () => {
    AppState.settings = {
      theme: "luz-clasico",
      fontFamily: "font-merriweather",
      fontStyle: "normal", // "normal", "italic", "semibold", "bold", "bold-italic", "light"
      fontSize: 19,
      lineHeight: "1.7",
      layoutMode: "paragraph",
      showVerseNumbers: true,
      showTitles: true,
      highlightQuotes: true,
      jesusWordsRed: true,
      textAlign: "left",
      raeMode: false
    };
    saveSettings();
    renderCurrentChapter();
    showToast("Ajustes restablecidos");
  });

  // Atajos de Teclado Ergonómicos
  window.addEventListener("keydown", (e) => {
    // Si hay versículos seleccionados o modales abiertos, deseleccionar o cerrar con Escape
    if (e.key === "Escape") {
      if (AppState.selection && AppState.selection.selectedVerses.size > 0) {
        clearVerseSelection();
        return;
      }
      closeSearchModal();
      closeNavDrawer();
      closeSettingsDrawer();
      closeAboutModal();
      closeInstallModal();
      return;
    }

    // Ctrl + C o Cmd + C: Copiar versículos seleccionados al portapapeles
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
      if (document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        const sel = window.getSelection();
        if (AppState.selection && AppState.selection.selectedVerses.size > 0 && (!sel || sel.isCollapsed || sel.rangeCount === 0)) {
          e.preventDefault();
          copySelectedVerses();
          return;
        }
      }
    }

    // Ctrl + K o Cmd + K: Abrir Buscador Bíblico
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearchModal();
      return;
    }

    // Tecla '/' para abrir buscador rápido cuando no se esté escribiendo en un input
    if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "SELECT") {
      e.preventDefault();
      openSearchModal();
      return;
    }

    // Flecha izquierda = Capítulo anterior, Flecha derecha = Siguiente capítulo (si no está escribiendo en un input)
    if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "SELECT") return;

    if (e.key === "ArrowLeft") {
      changeChapter(-1);
    } else if (e.key === "ArrowRight") {
      changeChapter(1);
    }
  });

  // Copiar con el cursor/mouse en el lector bíblico respetando formato de citas bíblicas entre asteriscos (*)
  document.addEventListener("copy", (e) => {
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.isContentEditable)) {
      return;
    }
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;

    const bibleContainer = document.getElementById("bibleTextBody") || document.getElementById("readerContent");
    if (!bibleContainer) return;

    const range = sel.getRangeAt(0);
    if (!bibleContainer.contains(range.commonAncestorContainer) && !range.commonAncestorContainer.contains(bibleContainer)) {
      return;
    }

    const fragment = range.cloneContents();
    const quotes = fragment.querySelectorAll(".bible-quote");
    if (quotes.length > 0) {
      quotes.forEach(q => {
        const textNode = document.createTextNode(`*${q.textContent}*`);
        q.parentNode.replaceChild(textNode, q);
      });
      const text = fragment.textContent;
      if (text && e.clipboardData) {
        e.clipboardData.setData("text/plain", text);
        e.preventDefault();
      }
    }
  });
}

// ============================================================================
// --- 13. INSTALADOR MULTIPLATAFORMA PWA (CELULAR ANDROID / iOS Y PC) ---
// ============================================================================

function isRunningStandalone() {
  try {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.matchMedia("(display-mode: window-controls-overlay)").matches ||
      window.navigator.standalone === true
    );
  } catch (e) {
    return false;
  }
}

function detectUserPlatform() {
  const ua = (navigator.userAgent || navigator.vendor || "").toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isIOS) return "ios";
  if (/android/.test(ua)) return "android";
  return "pc";
}

function registerPwaServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (window.location.protocol !== "https:" && window.location.protocol !== "http:") return;

  let refreshingSw = false;
  const triggerCleanReload = () => {
    if (refreshingSw) return;
    refreshingSw = true;
    window.location.reload();
  };

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    triggerCleanReload();
  });

  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SW_UPDATED_RELOAD") {
      triggerCleanReload();
    }
  });

  navigator.serviceWorker
    .register("./sw.js", { scope: "./", updateViaCache: "none" })
    .then((reg) => {
      reg.update().catch(() => {});
      if (reg.waiting) {
        reg.waiting.postMessage({ type: "SKIP_WAITING" });
      }
      reg.addEventListener("updatefound", () => {
        const newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            newWorker.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
    })
    .catch((err) => {
      console.warn("Aviso al registrar Service Worker PWA:", err);
    });
}

function handleUrlLaunchParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const bookParam = params.get("book");
    const chParam = params.get("chapter");
    const actionParam = params.get("action");

    if (bookParam) {
      const norm = normalizeKey(bookParam);
      const canonical = BIBLE_BOOK_ALIASES[norm];
      if (canonical) {
        const bookMeta = BIBLE_CANON.find((b) => b.name === canonical);
        if (bookMeta) {
          AppState.currentBook = bookMeta.name;
          const ch = parseInt(chParam, 10);
          AppState.currentChapter = ch >= 1 && ch <= bookMeta.chapters ? ch : 1;
        }
      }
    }

    if (actionParam === "search") {
      setTimeout(() => openSearchModal(), 250);
    }
  } catch (e) {
    // Ignorar errores de URL
  }
}

function switchInstallTab(tabKey) {
  const validTab = ["android", "ios", "pc"].includes(tabKey) ? tabKey : detectUserPlatform();

  document.querySelectorAll(".install-tab-btn").forEach((btn) => {
    const isTarget = btn.getAttribute("data-install-tab") === validTab;
    btn.classList.toggle("active-install-tab", isTarget);
  });

  const panelAndroid = document.getElementById("installPanelAndroid");
  const panelIos = document.getElementById("installPanelIos");
  const panelPc = document.getElementById("installPanelPc");

  if (panelAndroid) panelAndroid.classList.toggle("hidden", validTab !== "android");
  if (panelIos) panelIos.classList.toggle("hidden", validTab !== "ios");
  if (panelPc) panelPc.classList.toggle("hidden", validTab !== "pc");
}

function updateInstallUiState() {
  const standalone = isRunningStandalone();
  const hasPrompt = !!deferredPwaInstallPrompt;

  const btnHeaderInstall = document.getElementById("btnInstallApp");
  const btnTopBarInstall = document.getElementById("btnTopBarInstall");
  const topBarLabel = document.getElementById("topBarInstallLabel");
  const nativeBox = document.getElementById("nativeInstallReadyBox");
  const installedBox = document.getElementById("alreadyInstalledBox");
  const statusBadge = document.getElementById("installStatusBadge");

  if (nativeBox) {
    nativeBox.classList.toggle("hidden", !hasPrompt || standalone);
  }

  if (installedBox) {
    installedBox.classList.toggle("hidden", !standalone);
  }

  if (statusBadge) {
    if (standalone) {
      statusBadge.textContent = "App Instalada ✓";
    } else if (hasPrompt) {
      statusBadge.textContent = "Lista para Instalar";
    } else {
      statusBadge.textContent = "Offline · Sin Internet";
    }
  }

  if (standalone) {
    if (btnHeaderInstall) btnHeaderInstall.classList.add("hidden");
    if (btnTopBarInstall && topBarLabel) {
      topBarLabel.textContent = "App Instalada ✓";
    }
    hideInstallBanner();
  } else {
    if (btnHeaderInstall) btnHeaderInstall.classList.remove("hidden");
    if (btnTopBarInstall && topBarLabel) {
      const platform = detectUserPlatform();
      topBarLabel.textContent = platform === "pc" ? "Instalar en tu PC" : "Instalar en tu Celular";
    }
  }
}

async function triggerNativePwaInstall() {
  if (!deferredPwaInstallPrompt) {
    openInstallModal();
    return;
  }

  try {
    deferredPwaInstallPrompt.prompt();
    const choiceResult = await deferredPwaInstallPrompt.userChoice;
    if (choiceResult && choiceResult.outcome === "accepted") {
      deferredPwaInstallPrompt = null;
      localStorage.setItem("rvg_pwa_installed", "true");
      hideInstallBanner();
      closeInstallModal();
      updateInstallUiState();
      showToast("¡Instalando Santa Biblia RVG2010!");
    } else {
      updateInstallUiState();
    }
  } catch (err) {
    console.warn("Aviso al invocar prompt de instalación:", err);
    openInstallModal();
  }
}

function openInstallModal() {
  updateInstallUiState();
  switchInstallTab(detectUserPlatform());
  document.getElementById("installModalOverlay")?.classList.add("active");
}

function closeInstallModal() {
  document.getElementById("installModalOverlay")?.classList.remove("active");
}

function maybeShowInstallBanner() {
  if (isRunningStandalone()) return;
  if (sessionStorage.getItem("rvg_install_banner_dismissed") === "1") return;

  const banner = document.getElementById("pwaInstallBanner");
  if (banner) {
    banner.classList.remove("hidden");
  }
}

function hideInstallBanner(rememberDismiss = false) {
  const banner = document.getElementById("pwaInstallBanner");
  if (banner) {
    banner.classList.add("hidden");
  }
  if (rememberDismiss) {
    sessionStorage.setItem("rvg_install_banner_dismissed", "1");
  }
}

function handleMainInstallAction() {
  if (deferredPwaInstallPrompt && !isRunningStandalone()) {
    triggerNativePwaInstall();
  } else {
    openInstallModal();
  }
}

function initPwaInstaller() {
  registerPwaServiceWorker();
  updateInstallUiState();
  switchInstallTab(detectUserPlatform());

  // Botones de apertura del instalador
  document.getElementById("btnInstallApp")?.addEventListener("click", handleMainInstallAction);
  document.getElementById("btnTopBarInstall")?.addEventListener("click", openInstallModal);
  document.getElementById("btnAboutOpenInstaller")?.addEventListener("click", () => {
    closeAboutModal();
    openInstallModal();
  });

  // Botones dentro del modal instalador
  document.getElementById("btnModalTriggerNativeInstall")?.addEventListener("click", triggerNativePwaInstall);
  document.getElementById("btnCloseInstallModal")?.addEventListener("click", closeInstallModal);
  document.getElementById("btnAckInstallModal")?.addEventListener("click", closeInstallModal);
  document.getElementById("installModalOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "installModalOverlay") closeInstallModal();
  });

  // Pestañas de plataforma (Android, iOS, PC)
  document.querySelectorAll(".install-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-install-tab");
      if (tab) switchInstallTab(tab);
    });
  });

  // Botones del banner flotante
  document.getElementById("btnBannerInstallNow")?.addEventListener("click", handleMainInstallAction);
  document.getElementById("btnBannerMoreInfo")?.addEventListener("click", () => {
    hideInstallBanner(false);
    openInstallModal();
  });
  document.getElementById("btnDismissInstallBanner")?.addEventListener("click", () => {
    hideInstallBanner(true);
  });

  // En iOS (donde no existe beforeinstallprompt), mostrar el banner de instalación tras unos segundos si no está instalada
  if (detectUserPlatform() === "ios" && !isRunningStandalone() && localStorage.getItem("rvg_pwa_installed") !== "true") {
    setTimeout(() => {
      maybeShowInstallBanner();
    }, 3500);
  }
}

// ============================================================================
// --- 14. BLOQUEO DE ZOOM CON EL DEDO (TAMAÑO DE TEXTO FIJO POR CONFIGURACIÓN) ---
// Deshabilita pellizcar para hacer zoom (pinch-to-zoom) y doble toque para zoom,
// manteniendo el tamaño de texto fijo y controlado exclusivamente desde Ajustes.
// ============================================================================

function disableFingerZoom() {
  // 1. Bloquear pellizco con dos o más dedos (pinch-to-zoom) en pantallas táctiles
  document.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches && e.touches.length > 1 && e.cancelable) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  document.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches && e.touches.length > 1 && e.cancelable) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  // 2. Bloquear eventos nativos de gesto de zoom en iOS / Safari WebKit
  const preventGestureZoom = (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
  };
  document.addEventListener("gesturestart", preventGestureZoom, { passive: false });
  document.addEventListener("gesturechange", preventGestureZoom, { passive: false });
  document.addEventListener("gestureend", preventGestureZoom, { passive: false });

  // 3. Bloquear zoom por pellizco en trackpad / Ctrl + rueda
  document.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey && e.cancelable) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
}

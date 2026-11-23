/**
 * ============================================================================
 * SERVICE WORKER — SANTA BIBLIA REINA VALERA GÓMEZ 2010 (RVG2010)
 * Soporte PWA Instalable en Celular (Android / iOS) y PC (Windows / Mac / Linux)
 * Funcionamiento 100% Offline
 * ============================================================================
 */

const CACHE_NAME = "rvg2010-pwa-v20261123_01";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./data/rvg2010.js",
  "./data/bible_quotes.js",
  "./data/bible_titles.js"
];

// Instalación: precachear recursos esenciales forzando bypass de caché HTTP del navegador
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of CORE_ASSETS) {
        try {
          const freshReq = new Request(asset, { cache: "reload" });
          const resp = await fetch(freshReq);
          if (resp && resp.status === 200) {
            await cache.put(asset, resp);
          }
        } catch (err) {
          console.warn("[SW] No se pudo precachear recurso:", asset, err);
        }
      }
    })
  );
});

// Activación: limpiar todas las cachés antiguas, reclamar clientes y forzar actualización limpia
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      let deletedOld = false;
      await Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            deletedOld = true;
            return caches.delete(name);
          }
          return Promise.resolve();
        })
      );

      await self.clients.claim();

      if (deletedOld) {
        const windowClients = await self.clients.matchAll({
          type: "window",
          includeUncontrolled: true
        });
        for (const client of windowClients) {
          try {
            client.postMessage({ type: "SW_UPDATED_RELOAD", cache: CACHE_NAME });
          } catch (e) {
            // Ignorar error de postMessage
          }
        }
      }
    })()
  );
});

// Mensajes desde la aplicación (ej. actualización inmediata)
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Estrategia de intercepción de peticiones:
// - Datos pesados (data/*) e iconos (icons/*): Cache-First
// - HTML / JS / CSS / Manifest: Network-First sin caché HTTP intermedia (cache: "no-store") y fallback a CacheStorage offline
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Solo manejar peticiones http/https
  if (!url.protocol.startsWith("http")) return;

  // Para recursos estáticos pesados de la Biblia e iconos: Cache-First
  if (
    url.origin === self.location.origin &&
    (url.pathname.includes("/data/") || url.pathname.includes("/icons/"))
  ) {
    event.respondWith(
      caches.match(req, { ignoreSearch: true }).then((cachedResp) => {
        if (cachedResp) return cachedResp;
        return fetch(req).then((networkResp) => {
          if (networkResp && networkResp.status === 200) {
            const copy = networkResp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkResp;
        });
      })
    );
    return;
  }

  // Para documentos HTML, app.js, styles.css y manifest.json: Network-First real (ignorando HTTP disk cache viejo)
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req.url, { cache: "no-store" })
        .then((networkResp) => {
          if (networkResp && networkResp.status === 200) {
            const copy = networkResp.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, copy.clone());
              if (url.pathname === "/" || url.pathname.endsWith("/index.html")) {
                cache.put("./", copy.clone());
                cache.put("./index.html", copy.clone());
              } else if (url.pathname.endsWith("/app.js")) {
                cache.put("./app.js", copy.clone());
              } else if (url.pathname.endsWith("/styles.css")) {
                cache.put("./styles.css", copy.clone());
              }
            });
          }
          return networkResp;
        })
        .catch(async () => {
          const exactMatch = await caches.match(req);
          if (exactMatch) return exactMatch;
          const noQueryMatch = await caches.match(req, { ignoreSearch: true });
          if (noQueryMatch) return noQueryMatch;
          if (req.mode === "navigate") {
            return caches.match("./index.html", { ignoreSearch: true });
          }
          return new Response("Offline", { status: 503, statusText: "Offline" });
        })
    );
    return;
  }

  // Para CDN externos (Tailwind, Google Fonts): Cache-First con actualización en segundo plano
  event.respondWith(
    caches.match(req).then((cachedResp) => {
      const fetchPromise = fetch(req)
        .then((networkResp) => {
          if (networkResp && (networkResp.status === 200 || networkResp.type === "opaque")) {
            const copy = networkResp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkResp;
        })
        .catch(() => cachedResp);
      return cachedResp || fetchPromise;
    })
  );
});

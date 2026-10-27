// Service Worker — Vocab Quiz
// Estrategia: «primero red» para los archivos de la app (siempre ves la última versión
// cuando hay internet) y caché como respaldo sin conexión. Las fuentes de Google van
// «primero caché». Ya no hace falta subir la versión en cada cambio; súbela solo si
// cambias la lista ASSETS o quieres forzar una limpieza de la caché.
const CACHE_NAME = 'vocab-quiz-v6';

const ASSETS = [
  './',
  './index.html',
  './vocab.js',
  './grammar.js',
  './prof/index.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function saveCopy(request, response) {
  if (response && response.ok) {
    const copy = response.clone();
    caches.open(CACHE_NAME).then((c) => c.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = event.request.url;
  const isFont = url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com');

  if (isFont) {
    event.respondWith(
      caches.match(event.request).then((cached) =>
        cached || fetch(event.request).then((r) => saveCopy(event.request, r))
      )
    );
    return;
  }
  if (!url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request)
      .then((r) => saveCopy(event.request, r))
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match('./index.html'))
      )
  );
});

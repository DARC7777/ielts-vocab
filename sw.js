// Service Worker — Vocab Quiz
// Sube la versión (v2 → v3...) cada vez que cambies index.html o vocab.js
const CACHE_NAME = 'vocab-quiz-v2';

const ASSETS = [
  './',
  './index.html',
  './vocab.js',
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

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const url = event.request.url;
          const cacheable =
            response.ok &&
            (url.startsWith(self.location.origin) ||
              url.includes('fonts.googleapis.com') ||
              url.includes('fonts.gstatic.com'));
          if (cacheable) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});

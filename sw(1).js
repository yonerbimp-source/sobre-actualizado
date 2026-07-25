const CACHE_NAME = 'sobres-cache-v6';
const FILES = ['./', './index(1).html', './style.css', './app(1).js', './manifest(1).json', './icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});

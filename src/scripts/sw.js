import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  '/',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/images/heros/hero-image_4.jpg',
  '/images/heros/hero-image-large.jpg',
  '/images/heros/hero-image-small.jpg',
  '/index.html',
  '/favicon.png',
  '/app.bundle.js',
  '/app.webmanifest',
  '/sw.bundle.js',
];

self.addEventListener('install', (event) => {
  // Caching app shell resource
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  // Delete old cache
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // Add/get fetch request to/from cache
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

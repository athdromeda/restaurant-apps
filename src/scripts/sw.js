import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  '/',
  '/icons/maskable_icon.png',
  '/icons/maskable_icon_x48.png',
  '/icons/maskable_icon_x72.png',
  '/icons/maskable_icon_x96.png',
  '/icons/maskable_icon_x128.png',
  '/icons/maskable_icon_x192.png',
  '/icons/maskable_icon_x384.png',
  '/icons/maskable_icon_x512.png',
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

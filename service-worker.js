self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.8eb769481435401d3c64.js",
    "revision": "c2939f53b516b8b199d2"
  },
  {
    "url": "/_next/static/chunks/styles.a567de47c534d6fe4647.js",
    "revision": "21e8b5f67b2e3731b50a"
  },
  {
    "url": "/_next/static/css/styles.e57e9bff.chunk.css",
    "revision": "21e8b5f67b2e3731b50a"
  },
  {
    "url": "/_next/static/runtime/main-d291910c20cf95cb7684.js",
    "revision": "cbe420467866371a5c11"
  },
  {
    "url": "/_next/static/runtime/webpack-8ed9452df514b4d17d80.js",
    "revision": "c9d4f4ac318bec9c37e2"
  },
  {
    "url": "/_next/static\\HOXAux_RGqWKG9aiDYIrR\\pages\\_app.js",
    "revision": "c717c38ab766ae8c4e50"
  },
  {
    "url": "/_next/static\\HOXAux_RGqWKG9aiDYIrR\\pages\\_error.js",
    "revision": "74a81adb7f900fbe7ff0"
  },
  {
    "url": "/_next/static\\HOXAux_RGqWKG9aiDYIrR\\pages\\index.js",
    "revision": "456ed698687711ba94ac"
  },
  {
    "url": "/_next/static\\HOXAux_RGqWKG9aiDYIrR\\pages\\topic.js",
    "revision": "389126cf67da1904fe0c"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

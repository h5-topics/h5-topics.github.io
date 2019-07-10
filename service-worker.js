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
    "url": "/_next/static\\WbDhRIX-aoeoxPa2b_1yT\\pages\\_app.js",
    "revision": "fa0c0fdb1da41bf99502"
  },
  {
    "url": "/_next/static\\WbDhRIX-aoeoxPa2b_1yT\\pages\\_error.js",
    "revision": "b40c2a24cdc0de9b83d0"
  },
  {
    "url": "/_next/static\\WbDhRIX-aoeoxPa2b_1yT\\pages\\index.js",
    "revision": "aee60d81736c1333ad9d"
  },
  {
    "url": "/_next/static\\WbDhRIX-aoeoxPa2b_1yT\\pages\\topic.js",
    "revision": "0ac0671bcb15c5440af1"
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

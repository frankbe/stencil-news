importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "ads/ad.html",
    "revision": "30d2124ba2f7a96ab30dfa01d173843f"
  },
  {
    "url": "build/app.js",
    "revision": "0093131784535a0a0d1cd2de271747c1"
  },
  {
    "url": "build/app/app-detail.js",
    "revision": "9e89950d85a6b18146a9f7a3ae45c372"
  },
  {
    "url": "build/app/app-header.js",
    "revision": "2fecca36caceaa20076bf79f296104e6"
  },
  {
    "url": "build/app/app-list.js",
    "revision": "ab3fdb099541e1e418aa24d5ff69ffd7"
  },
  {
    "url": "build/app/app-login.js",
    "revision": "4547388351feefb5977083de7e5169bf"
  },
  {
    "url": "build/app/app-toast.js",
    "revision": "6a284231a3b4f5c7ae6de511f4ccbd94"
  },
  {
    "url": "build/app/app.core.js",
    "revision": "0aaf682040e155458385569c59d09531"
  },
  {
    "url": "build/app/app.core.pf.js",
    "revision": "bb4f5a37a36c79344b3196d5101f5221"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "ef27afe68b540a817bd02081c2242d63"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "firebase-messaging-sw.js",
    "revision": "bfd265ba9be65a2b644da6e2749b4fd0"
  },
  {
    "url": "images/512.png",
    "revision": "bd715a7318045ab5a167ca52cd689440"
  },
  {
    "url": "index.html",
    "revision": "bd1050498d4736f1148cc1fa7172827a"
  },
  {
    "url": "manifest.json",
    "revision": "14131a92ed197c530fbef888b7b724e2"
  },
  {
    "url": "workbox-sw.prod.v1.1.0.js",
    "revision": "df86dfc69c6d017722ecb8a16d34c849"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);

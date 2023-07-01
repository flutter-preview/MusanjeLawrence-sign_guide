'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "357465bd5151ee0cc2158c8a10cfc1b9",
"assets/assets/images/1.jpg": "f86bccb7a50c059ab3ef6b3e3e87171a",
"assets/assets/images/5.jpg": "347a86ef045755191320aa21f14cfbbe",
"assets/assets/images/W.jpg": "c8b648582ed59a0e891485a0a7011818",
"assets/assets/images/F.jpg": "ac2c5b7aebcdde9cc7caf8bd13fb5908",
"assets/assets/images/T.jpg": "ef751dbf96a99872d1f5996ff1166b78",
"assets/assets/images/R.jpg": "99274ac6be3f5d5ac7084a53ac6dd5bc",
"assets/assets/images/P.jpg": "68258785877448065412a61c6ae83ec8",
"assets/assets/images/G.jpg": "a71de1f987d3de4f713c4101e3065a06",
"assets/assets/images/10.jpg": "03a2c03354bee3527adb43bfe287395d",
"assets/assets/images/6.jpg": "a6f3f9bbd4d1c7cfcda285713147bbba",
"assets/assets/images/B.jpg": "8c86c5094b7b392bba9d1fafe28a79e2",
"assets/assets/images/J.jpg": "1b5191655983d9f919b23094ab6927c6",
"assets/assets/images/N.jpg": "ac2d749e058ff0e10bf853c66d07b241",
"assets/assets/images/S.jpg": "b4db6955a43cf358b06755022fd57b8d",
"assets/assets/images/X.jpg": "174545040e2402afde434bfa2b6918a9",
"assets/assets/images/3.jpg": "e42de9aa73d4e6046ec7ab5cb5e9a8c7",
"assets/assets/images/Y.jpg": "606540c74fdeb1291df2426659621a18",
"assets/assets/images/L.jpg": "98aba57ea0e17505b5bd2e6fd298a3e5",
"assets/assets/images/M.jpg": "2c4bb34c02421777a0b847451de59914",
"assets/assets/images/V.jpg": "c2df0f835c2f6af417f2eac46a2ba24a",
"assets/assets/images/D.jpg": "03f3bdb979679925d3ea8bd705bf07d4",
"assets/assets/images/O.jpg": "0fd016aea431292671a8bdd197c61cfd",
"assets/assets/images/logo.jpg": "ca1e77a3a543e83228fc2e8a922f237b",
"assets/assets/images/Q.jpg": "e198a2839628ef3c037b803a991ec6e8",
"assets/assets/images/2.jpg": "c5986b77490b529d557d73e07b635672",
"assets/assets/images/9.jpg": "6da6632ebaa67e92b8a7e734e5833da2",
"assets/assets/images/H.jpg": "0b20b3fefa15cb9ccc2fd40e6e91fb7f",
"assets/assets/images/C.jpg": "68cb070145545b06de92300974db3fa7",
"assets/assets/images/4.jpg": "e8745742b869f121989bfaf939950eca",
"assets/assets/images/U.jpg": "ce109154e99d5c796304f1f8df76ff0b",
"assets/assets/images/7.jpg": "e3b1f889ec2c5d81ae2cb2feeaebbe7d",
"assets/assets/images/add_file.png": "26c4f71981b8f53548f6fd1e38ebbb5a",
"assets/assets/images/I.jpg": "74d0572645954d559d23845cf38b22d7",
"assets/assets/images/E.jpg": "60d2eb9c1f7652e1b4cb1993b8b4fc88",
"assets/assets/images/K.jpg": "b1203a31a8025a654fcd6dab6a26fb2c",
"assets/assets/images/8.jpg": "dce8b3111163744c9a4a10eb9a3359f0",
"assets/assets/images/Z.jpg": "7aab27ce1e2d9cc113e17e21cd3d61c0",
"assets/assets/images/A.jpg": "c7e92fb59b208cf91dbcd4b260fdca13",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "42d667bfdc7d3fd90b37326fce8a454a",
"assets/AssetManifest.json": "361f5c15652108a0a41c6bf39e60d11b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/fonts/MaterialIcons-Regular.otf": "31b0b00bfe113103a00756597cdafe2a",
"index.html": "bfb73916012b369233bbf953e0b4cfd1",
"/": "bfb73916012b369233bbf953e0b4cfd1",
"main.dart.js": "f56dc7d25e7e253fffe415ca95e1028a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"version.json": "74b9911886a6e496ede0e267911a868c",
"manifest.json": "2470ba32df9bbb412a4991da64152ac1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

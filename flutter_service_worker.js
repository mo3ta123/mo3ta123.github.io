'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d1f6c1e7ab5de7419b5659a5145d6cf5",
"assets/assets/images/auger.jpg": "e951f90f2dee12ecc5fc8d0beaf8c5d9",
"assets/assets/images/belt.jpg": "d77c683c0d201c8387385631166c925c",
"assets/assets/images/corn.jpg": "7107889679748a539d10f75b8a131a2f",
"assets/assets/images/drapper.jpg": "312656333c8e09eed4041bff4a491343",
"assets/assets/images/home.jpg": "f81dfedf2fa913180a0fdc3f649a80d1",
"assets/assets/images/home1.jpg": "3a9524a040564ac616487d082732b7c1",
"assets/assets/images/kabkab.jpg": "25e3020fd848174aed6a295834a9df3c",
"assets/assets/images/Logo/Logo_official.png": "71edcad6bf2fe6eb65991a89cd0ee9e9",
"assets/assets/images/Logo/nakhlatech_logo_trans_black.png": "855a09192c20bd9c4e50a0e9e1026e05",
"assets/assets/images/Logo/nakhlatech_logo_trans_main.png": "3578582eeab447b03a679aab557c5ad8",
"assets/assets/images/Logo/nakhlatech_logo_trans_main_logo.png": "133f1fea66a75b9e2183472fb9a4b7c3",
"assets/assets/images/Logo/nakhlatech_logo_trans_text.png": "93fb89dd4daa2548beabdcc4e605bf08",
"assets/assets/images/Logo/nakhlatech_logo_trans_text_cutted.png": "b59b50e5acc764dfbd6004fc9c4e066b",
"assets/assets/images/Logo/nakhlatech_logo_trans_white.png": "be0f761b884316fba5c54ae1a123023c",
"assets/assets/images/mozafati.jpg": "2c8e9e02859970cfcd8000924e18c852",
"assets/assets/images/person.jpg": "b0b918a91478e22518bab8a4cefd1d2e",
"assets/assets/images/person1.jpg": "d27aad729aee390d7c486359e167eb47",
"assets/assets/images/person2.jpg": "fa3539d8f9769cab944fb50c71591757",
"assets/assets/images/person3.png": "fb7d0443b0a873224b52c488728cc276",
"assets/assets/images/person4.jpg": "58f8f87e55d895c0357059ab0a99077d",
"assets/assets/images/person5.jpg": "4f73570558781498cd010d7d7f708e65",
"assets/assets/images/piarom.jpg": "b230c6a05e421f1d9109cab0ccda7219",
"assets/assets/images/rabi.jpg": "e7ddcd460413a9351cb6c064488d7a91",
"assets/assets/images/sayer.jpg": "e1bb8b3033bc28660e3d6a772e584f4b",
"assets/assets/images/team/GHAREEB.png": "57fde864c07fd9c8521cec45da494c0f",
"assets/assets/images/team/MARAM.png": "c20037b4b43c404412daa87fdf47135b",
"assets/assets/images/team/OMAR.png": "6f9fac93dc883fc0bfe88b9f52c9b510",
"assets/assets/images/team/SALAH.png": "bfefc19ca0ec75d29197548ec3dcf336",
"assets/assets/images/temp_img.jpg": "82863c8e540124c3848145bf16484e61",
"assets/assets/images/zahedi.jpg": "0b6ded8a7a08704264f1523629e085c9",
"assets/assets/videos/raining_rive.mp4": "9afa59f48d63780b19d9f97b47ca285c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0f25c9d49073eff6d5a80de577c0275e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2ae6ace84542820bebf1110b50ec56a7",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51577c902ebee959d87be0af89c9d316",
"/": "51577c902ebee959d87be0af89c9d316",
"main.dart.js": "411f1647351d71833f73708145c7b482",
"manifest.json": "1e5036633eb4175106c589a2f1bba4e1",
"version.json": "fc6d254bb4592a7a3023863bdbba1d59"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

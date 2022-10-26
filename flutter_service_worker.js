'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "989aa351522248c575d6d70aab4e5a1c",
".git/config": "f554cac607fac568f8ac1d1190526cd4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3f4264c7852b7fa32334174f5b10f26b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1f8011d05402c6aef12ecd816e6fa98b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ef11c2c6fd7d47b83d6f23991dca9ce",
".git/logs/refs/heads/main": "4ef11c2c6fd7d47b83d6f23991dca9ce",
".git/logs/refs/remotes/origin/main": "044f836335f9527d672e43f0b537a99d",
".git/objects/17/b93c82a7e21e4b95aa08c4218f3ac93c15385f": "39f08562e99b470a65f8118ade9165da",
".git/objects/1d/92717424faf17e5e8d1f7a7eaf584725e7420a": "5b4e5c20d2b330f5345dfe4627be9609",
".git/objects/39/7bb254797cf40cf87bf8522d6cbd94072153ff": "83f253dc36556e30f8e5ea35f97b0c54",
".git/objects/39/c4ffc9bcc729f920e018ebcf1d059b8260a8e0": "6e9bc0d51d37470ceb09257164a2c1ab",
".git/objects/3a/f85c632dcef9ee5e8931f89e27d30efa26d008": "9792c0ca70839da7c86b5c5d384b0456",
".git/objects/48/46e6a123e4d499542e4ff1ab3427e0bd7f5730": "e2a0e70da00d3d62b1b7b486c99da0fd",
".git/objects/71/20cc0ed499165a6390f31d55dc623b453f2782": "346687aa944e58db73b6a1809f07090d",
".git/objects/78/3e62f798699033e371c364c58528d2248aa567": "41653db6f1020feebf8506a5632ab161",
".git/objects/ec/e755855362a8c48ddbe5613d18df65b5d375f6": "aceaa0a8a23c573dcad73f32d8c0bd47",
".git/objects/f8/6247d4a92f6d897cca3500c45bfcc5f50bbff7": "b7f17881572f749116d2bfbab41542dc",
".git/objects/fd/3c5d0f588fbabee5e41b2fc5d65cd090ca1209": "ca3593c2ab439eadb71df0416fdfe004",
".git/objects/pack/pack-690f5215564cdc098ce8b5579ddbd01c75325841.idx": "d7df52fca9d63ea3a0dc8519c38dabd3",
".git/objects/pack/pack-690f5215564cdc098ce8b5579ddbd01c75325841.pack": "99b72a9edc4588ec9a8863f45342a721",
".git/refs/heads/main": "e2eb21c2af22dacd8a7f2a6be8093ce6",
".git/refs/remotes/origin/main": "e2eb21c2af22dacd8a7f2a6be8093ce6",
"assets/AssetManifest.json": "74c4d1cab25854973549aa9c81df928a",
"assets/assets/images/card.jpeg": "6243e1fe7ff455e08318ff97603e2313",
"assets/assets/images/card1.jpeg": "5fae9f75b6022e902513d6e11d2f1bc7",
"assets/assets/images/card3.jpeg": "4c3b99a1f5b33a304b07b01b7be58ac9",
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
"assets/assets/images/wallpaper1.jpg": "72ee56ee14f0ea1daefe59c300c9a85b",
"assets/assets/images/wallpaper2.jpg": "7e44f454fdbc75fcf4c0679f328b8e3f",
"assets/assets/images/wallpaper3.jpg": "1e9e0fb4edbd49747be78ec8960538f9",
"assets/assets/images/zahedi.jpg": "0b6ded8a7a08704264f1523629e085c9",
"assets/assets/videos/Demo_Video.mp4": "031c2aa34879f10ef59cd9f43ce10bf2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c71fe4ea0ba574e740f03cdf6da1080b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2ae6ace84542820bebf1110b50ec56a7",
"canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "f19961a423d43dd47490b92e2169d4d0",
"flutter.js": "db931120412af26cc1511fa058afaf0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf04d3c8f6d5e603bc59b4330e23c8d7",
"/": "bf04d3c8f6d5e603bc59b4330e23c8d7",
"main.dart.js": "9dc0bbc880943e8fa350440d744b3104",
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

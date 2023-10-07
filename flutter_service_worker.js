'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8f57ec30c22a6ae47facb9e49b87e508",
"assets/AssetManifest.json": "ef924e18d41a816f5ed25dabe803d06a",
"assets/assets/images/coming-soon.png": "02862fa23e1c154df4cd1837589f535f",
"assets/assets/images/intro-image.png": "1764c5bfa447d49400151308f0f0c7c1",
"assets/assets/project-images/tiktaktoe-app.png": "1da18796fd3fc146af105c1f0892f6e3",
"assets/assets/project-images/todo-app.png": "def8f3990901f683bd281bb7a69c48d4",
"assets/assets/social-media-svg/facebook-outlined.svg": "29f409995ceeb3a84446a8326cd63028",
"assets/assets/social-media-svg/facebook.svg": "a6a36fca4b5a389d0eefbbd3a9c53a7e",
"assets/assets/social-media-svg/github-outlined.svg": "3c7f33536d3be82c15efd2503cae493a",
"assets/assets/social-media-svg/github.svg": "4427fedd16df8ab5da0f388e0d94ffe2",
"assets/assets/social-media-svg/instagram-outlined.svg": "4dc5ed4a875f2618aaf5a27d24893781",
"assets/assets/social-media-svg/instagram.svg": "2fa21f6fce030076be9d89dd85496a56",
"assets/assets/social-media-svg/linkedin-outlined.svg": "72bc547df961c5eda233e79bae4560a5",
"assets/assets/social-media-svg/linkedin.svg": "5100826d208b6c173e599d9463b36dcf",
"assets/assets/social-media-svg/twitter-outlined.svg": "7542493d1224cf74db40759947931e3b",
"assets/assets/social-media-svg/twitter.svg": "37caa6621fbf99d618c438b5a3c3ca5e",
"assets/assets/tech-svg/bootstrap.svg": "5994f5e44d7f1e0546aeaf23a16b3ac6",
"assets/assets/tech-svg/canva.svg": "795b4c789a7301a6b0b858ded8d69820",
"assets/assets/tech-svg/css.svg": "23fb587b9e10139c30391eb3633a7375",
"assets/assets/tech-svg/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/tech-svg/figma.svg": "3b0fb69f67df8e1c5665644cc8f7a983",
"assets/assets/tech-svg/firebase.svg": "1da8d950e3f30a69d7c957c26238e1de",
"assets/assets/tech-svg/flutter.svg": "92199e1295daa401a178e23bcfc438c8",
"assets/assets/tech-svg/github.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/tech-svg/google-maps.svg": "6bafda451909ba2a5c14510482cfd146",
"assets/assets/tech-svg/html.svg": "a0657d1cac3b20f1e113738056db3c63",
"assets/assets/tech-svg/jira.svg": "a397460c103a310f9ac429fdee79cf9c",
"assets/assets/tech-svg/laravel.svg": "82639bcdcf4afbefaebfed38a7c7fab4",
"assets/assets/tech-svg/mongodb.svg": "c2a864c96dbfc449ec45dd7ac4438628",
"assets/assets/tech-svg/nodejs.svg": "a123152868245dee71c441124a98ac3e",
"assets/assets/tech-svg/python.svg": "4948e6764d2214fe0c09621c6defe06b",
"assets/assets/tech-svg/rest-api.svg": "65c19716cde7fd4c78d62fcb533574de",
"assets/assets/tech-svg/weka.svg": "573788c312ff6d748bc5418d97d17dc1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1eb6adbd3fbaf88bcef6f9cd44645636",
"assets/NOTICES": "282e693895997495fe861898e6db70f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c8cb693e9ad598428a3bddf4f135e728",
"/": "c8cb693e9ad598428a3bddf4f135e728",
"main.dart.js": "1e3429baf5c68c09c4121bcb0172d1a7",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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

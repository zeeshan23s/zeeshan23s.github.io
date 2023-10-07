'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c622580e099bfd4e328059ba7605289a",
".git/config": "d6203b65509c18c4c6fb330825294e92",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b4b357f8a2c460d3394f43aba9b0544a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "868098f4dc34923688eeb267a30d725f",
".git/logs/refs/heads/main": "459bee3c15b70a317d1e14a721711a4e",
".git/logs/refs/remotes/origin/main": "3117cdb40721c67a64a17710654099f5",
".git/objects/00/8f504c9f0cb38ca47c827955feeaeb353a7ca2": "e3ac869db40440b5c10edbcf79bbadec",
".git/objects/01/8e38be6695c12892bb0175649ae35d0ba25d93": "d24c2c1367faa5ba516b4744bc825432",
".git/objects/01/e6aecfcfa26968916a160713b8fa70ecf7e69a": "b89e4eb65f754d959273e4c8f377514c",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0d/5df6d73ab85ef9c1114467937741a11875b5c6": "1c012f08025883cb386225a25e86cf9e",
".git/objects/18/034217efde237c7827cb71944cc98c9d0927a8": "ce53fc3aa0c8b3e6a6153bb64171a1e9",
".git/objects/23/df82b2a1dbf159652a11698b02ecb5b0e93d1e": "86e9929e1e5c1f47923bf7c4c24996f9",
".git/objects/25/f05b930c4a4fa2de2ac72c61fffcf9ebd3800f": "23e12f5d947ca479d2e13664f3e851b9",
".git/objects/29/f294c6a871833cc6521b1e8fbe3115e5434cff": "5588b27763b63c7952311369f9524a54",
".git/objects/2d/e04e2a87d7070da751ed01220735429d18c0d0": "f2a53c29d75988c357c3404303a6609e",
".git/objects/2d/f609188b47cd8379952c19a69ea1eca13c269c": "5acf2cce301996cfaa7b734c40795f83",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/53e251204652d6a6fb6f45c213df8521fcd15a": "e265185bcd826f4b7ec03bfd11d3a38d",
".git/objects/4a/ce5cc84a3ab623aec2a03c5b4a8016032a3a0b": "5045d83287bf22e0f50a322b3a5d3b93",
".git/objects/4c/c45ff8d502d2ac11c10b6407f98d29c00be539": "58375e5d1b4e79ea2428f54344779512",
".git/objects/4e/40f2b83c9180ada5de6026ed8ac5ce3da7d7af": "b023202566f5a193dbf45dcb63a61181",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/4f/4933cf3dd1aa6e1eb1872454e8bce2c9aa7541": "c48d958181043f50befbbd87f7a41c3c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/63/e6695bb4e5d4d59038c0a1a90d7a5df934da4c": "6be13af6a876f642af057b7f2e55717b",
".git/objects/64/26e6b74dd6b71f379123c053aa914c21f08045": "daeea075d3f658afa5ccd9a3f22b9089",
".git/objects/65/0a1154ef2790dbb22a22a2ee4e8fe1600efaa4": "5f40b091cab5bd68a3038362bcdbd018",
".git/objects/69/651ad1243f04e2f215323dd16397f53cd95e75": "ce6e05cf40892defef2f09daccd191e4",
".git/objects/6e/efa54131cf4891e3446790f98aff581de03579": "a7b245be1a2f3be064afd5fa5cf46850",
".git/objects/76/4ccf588f0bd4aa1870d0ef8cb115838b24ada2": "ed8db600382c66c122df449eb0d9856d",
".git/objects/77/1221cabcce228a3592e7d1185086cecf257fb7": "d11c330c0ec533e6de08aa165ffc77d4",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7c/8cc9f7acd5d3e248e7995aba30498df9cd5c4b": "33b3f689f1d7a5656357574478e1b516",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/457c90acf7d87a0ad39ebb0dbdd6de0f381a4e": "56ff6935832122f04ffea648622cca6b",
".git/objects/92/09dad318e7cb40b1556681124c2defba391374": "68c98ec18f6f293e575f270b55dd66a5",
".git/objects/92/4d3e737d8f62c3e24771e0b9efc4e82b2b104f": "4a4a222c9760ecedf03d2ad542e5e9cc",
".git/objects/98/4a9dd3c96d383fab71a5fd395439f2d03e2d72": "bf1f53b1dd5fd85d533b35fa07e14b67",
".git/objects/9c/6b13d676327ca0a4dbe0a322685bd79c653d06": "67fb6496e0d356f57001ec2e3de2b5be",
".git/objects/9d/11f7b0121fbe0618a148f69b8bb4226d504c9a": "3c16103d45174f090db689dded086146",
".git/objects/a0/0aabb8198ea2611555ae8a5ca4481407794769": "7f7a69925b6547aae8c0712f6e642b7f",
".git/objects/a1/6fb4b273aa5f59f3932f1ec741623c5ad37a65": "92603eb276d50532871b6a9142c1dc09",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ad/bb09cd78df6d9700908a90c4380e94763ffe18": "03487c091da970855426f660e7bbc1f1",
".git/objects/b3/865e7a49acabc56c274321c90d240fdac60e9a": "ef0947efe58e4293c99ffaa37b49a85e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/849415b2b21155043ec8fccd5bde6afa9e8cb2": "8de3e0fa68a3eebbf570b11a6badd565",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/e6687b3789a091f1cea69d6b698ac66d0c5751": "66ca82e63a45e0d7a96572b3a60d3288",
".git/objects/c9/d20c28ad241475fe314763fdd2ff118874590b": "f44d61434144a4e4b5c6f154b8b64262",
".git/objects/cc/f4e6ff64c160bf7faec48165babd2fcd312113": "ddf25e449a422c829be0f73dff669e76",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/388bf4e5507432954fc57634966eb2dd3b2693": "612a103724a94d4992b5ee0286fc5cd5",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/034fe4827eabfc13ef7ef00452173c2eafc93e": "aba4821ede53bb3b6ea49e5eb5e14d49",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/fc0664ed5a814849377ba8989f737d1e94daed": "4b5267ec3bc5f74aea1573fee05f2ed6",
".git/objects/e3/3a9b2dd6566848189785adbbb860d861365e11": "5ea15e7dd336f99eef45bfd73ccdf435",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/816722b6e34622cecf2c83e0ae3afa67dc135c": "f22f33c0db6a02ab71a74164a2f8e536",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cf9a460a31d3fbcf239d440ff64e7c0bb3711d": "321e995efb9f0e1559d228807be3fe6f",
".git/objects/f5/c9db014efd984f3f35918a274dba7136240b9e": "9cb74048d763d3e96b73baf1abd4888e",
".git/objects/fc/d0bef978f20e6703698bd2a61bbfa558499bd6": "747453ef7f39339a07fb0c2b0bc08294",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/085fe0fffa9294563350f813af0ca18118e1a0": "1598bb855a43e089fb3b8a4c33f40872",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/dd950c5da474c4723228b135429725c7ae0f1a": "9aced54674266d38276cf8b38f990f39",
".git/refs/heads/main": "564faec46f89a8061db7a121c85a83cb",
".git/refs/remotes/origin/main": "564faec46f89a8061db7a121c85a83cb",
"assets/AssetManifest.bin": "8f57ec30c22a6ae47facb9e49b87e508",
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
"favicon.PNG": "4e03ac3334d663e751a70de3285b7bae",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "00e0bb1fcf0d8cd4293247dbd6433f81",
"/": "00e0bb1fcf0d8cd4293247dbd6433f81",
"main.dart.js": "140b55586a8cd11f46d8ed4eecdebd18",
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

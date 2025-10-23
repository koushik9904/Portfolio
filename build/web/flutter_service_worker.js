'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin.json": "6821d8a4b74e0842bd3a058444aa8ccd",
"assets/assets/contact_me/picture.png": "13a4b677d9fa726efd9e771189222bf5",
"assets/assets/contact_me/constant/picture.png": "1a817a95a42d8c43031378d122a05ffe",
"assets/assets/contact_me/constant/location-dark.png": "08a65e7c79b85fbcb40e8fce00953e47",
"assets/assets/contact_me/constant/location.png": "dbc10b089546daaee5c45d9bb754f989",
"assets/assets/contact_me/profile.jpeg": "b93c01486925e5c8209e6f7100dd87c0",
"assets/assets/contact_me/profile(3).jpeg": "8a40ed053b6d9dd933cf67ebe1a1319d",
"assets/assets/home/constant/link.png": "6bd16f15b5c2d30c08557a84b776f3a6",
"assets/assets/home/constant/email.png": "b4ac60cde3dabbe4bc1b8b7c88dc4585",
"assets/assets/home/constant/leetcode.png": "b76f662706530971dccaf8281a0acc45",
"assets/assets/home/constant/codeforces.png": "638c404223d7165317ff3ac81d22fdb1",
"assets/assets/home/constant/linkedin.png": "f23f5409fa61de28d92d02527411c140",
"assets/assets/home/constant/stackoverflow.png": "c9fe76704b498db68c7d263216b9e680",
"assets/assets/home/constant/medium.png": "5a77eaa1f4fc98e76a2129c5ebaa119a",
"assets/assets/home/constant/facebook.png": "9c8bf990645fc6189df6caedab34628c",
"assets/assets/home/constant/instagram.png": "6a5e75ccceace8a900c3ca017bb5933b",
"assets/assets/home/constant/github.png": "9b1ceae0aa31486938531880614681a3",
"assets/assets/home/constant/twitter.png": "babebb599190a8bd5bb5417e4f7fdcad",
"assets/assets/projects/constant/stars.png": "449614124a2ef5910c35e1e9d62aec5e",
"assets/assets/projects/constant/forks.png": "84f1baf0bcf3b4cf3ea5edb36548e069",
"assets/assets/what_i_do/node.png": "7ad99c3cb09847d32f14901a18ae5495",
"assets/assets/what_i_do/constant/checklist.png": "bce0e7781492fe752297f8369c666494",
"assets/assets/what_i_do/constant/checklist-light.png": "c6a80a3ff27e7db249fb88159383f74d",
"assets/assets/what_i_do/java.png": "53b82a97cf4e13fac807691e7b0be082",
"assets/assets/what_i_do/c.png": "9f6665a404d1b2384b4a90419ad08fd2",
"assets/assets/what_i_do/cpp.png": "efeec8be519a45426ed24cd91b86fc53",
"assets/assets/what_i_do/bash.png": "8aec2de4c0634c93202ec36d7ac4a5de",
"assets/assets/what_i_do/git.png": "2f2db226d2f03acc82b77c7fe652fd3b",
"assets/assets/what_i_do/react.png": "3702c0ecd4c16997ba93da2a0fd13371",
"assets/assets/what_i_do/flutter.png": "5b26614dbdbcf4b3ecb80bed00ad3702",
"assets/assets/what_i_do/python.png": "d464079775fdeabf0ffb1323b2a02d2c",
"assets/assets/what_i_do/linux.png": "0dda41d21f571add8b3a558c9914c8ff",
"assets/assets/portfolio.json": "4a373041e719393f8ebccae08dcff86f",
"assets/assets/experience/cropdarpan.png": "9aa8d6f8354a09d829f8c16ebd4cd5ce",
"assets/assets/experience/constant/experience.png": "8f6a768aa1f3a803088eff838313f7b0",
"assets/assets/experience/ekko.png": "465a59cd0ceb084c32ff599c728168b1",
"assets/assets/experience/opensource.png": "997db9ffb7f57a2c0ef1323c6056c44b",
"assets/assets/experience/coding-ninjas.png": "5b94a7d8ef90a9b60a3967745e044778",
"assets/assets/experience/HopeLogAvatar.png": "17bcfc19497b3e2503ff29359d73e622",
"assets/assets/experience/credanic.png": "27b5605cf2f3291e4cfe71f4f97daaf2",
"assets/assets/experience/GDSC.png": "a144476dba333629f9a232e8c7cd64bf",
"assets/assets/experience/rcctechz.png": "40de2922a15538d96a1210fd9eb8457c",
"assets/assets/fonts/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/FjallaOne-Regular.ttf": "4fa3683005fa20dd058f47b9cfd411df",
"assets/assets/education/constant/education.png": "1ebc9c3cdde631ddd2f356001c79eceb",
"assets/assets/education/gitaram.png": "e0c528ff1e67d954a6039ce204c38c8f",
"assets/assets/education/rcciit.png": "e549f157d5783656caeb1f605259b897",
"assets/assets/education/college.png": "3aa36a28bdb5717d529a296f23655a4e",
"assets/assets/education/school.png": "a607bb2d5356a68cdf26d64f44d8884d",
"assets/assets/education/stxaviers.png": "54936ceae932c0337c5c4096d2bf6037",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "91559fa22dff83ec89bba62b04ecb955",
"assets/FontManifest.json": "f0f4be009d67b49f6afb66286f706923",
"assets/fonts/MaterialIcons-Regular.otf": "c77eb278e9d4e23765e556f8b5578cc8",
"assets/NOTICES": "b28d42d5f176c2fa2dfb9cc0cf04f019",
"assets/dotenv": "0f6566a1bff67c48eb5979c1e0a896d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin": "872a526a3af4035fc23ee8f0359703a8",
"version.json": "db8990b8a733cdd52065ba1549ba9aa5",
"flutter_bootstrap.js": "f18c688d350f65b15553c863c8c34b7a",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"main.dart.js": "73bd327e19550009ce8ce68e28d15f13",
"index.html": "00377d3022038141e9178b95a78feefc",
"/": "00377d3022038141e9178b95a78feefc",
"style.css": "ffba23ff301032bec9a3922e763ddcca",
"manifest.json": "6cbe41637e331ef626d9a50c26f95fc1",
"flutter.js": "888483df48293866f9f41d3d9274a779",
".vercel/README.txt": "2b13c79d37d6ed82a3255b83b6815034",
".vercel/project.json": "5b2b98b91a447c404bce73b8a437d802"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

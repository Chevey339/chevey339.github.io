'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b63897962c3c4a0339df2e871eb9b025",
"assets/AssetManifest.bin.json": "2d701373ae621eb1e48c3ee22b93d832",
"assets/AssetManifest.json": "65788e6127c9588823b91fd03fd6f971",
"assets/assets/app_icon_foreground.svg": "c9b1e627ab74709c1c613a36137f4173",
"assets/assets/icons/302ai-color.svg": "78f2202c22048c9d9246114ff5bfa5b0",
"assets/assets/icons/aihubmix-color.svg": "9961f61d85b755eebc890a6d274040f2",
"assets/assets/icons/alibabacloud-color.svg": "ff035bf78d5ba1cab5bd84f200fb01b4",
"assets/assets/icons/anthropic.svg": "4752173e6ad2c7cb5e8ead6938646380",
"assets/assets/icons/bing.png": "ea8f00001278e0b29a5d2ba1e8f4fcbb",
"assets/assets/icons/brave-color.svg": "a1d27891734378faa1303452a6274287",
"assets/assets/icons/bytedance-color.svg": "26554d835b8da2b686f6b266ec05ba91",
"assets/assets/icons/claude-color.svg": "b37d68ab86d1701a30d5bd956b7dd058",
"assets/assets/icons/cloudflare-color.svg": "137d8a62a38b4df419d7aa102eb71444",
"assets/assets/icons/cohere-color.svg": "b303b0cbd0334ecec9324f086b68a7ac",
"assets/assets/icons/deepseek-color.svg": "e79363c865a1f098e0e87550862815f5",
"assets/assets/icons/deepthink.svg": "31ca9bb47cf33d9027b05bf67e82eec0",
"assets/assets/icons/doubao-color.svg": "23df27e021b43f8f13ec55923d95950c",
"assets/assets/icons/exa.png": "3b112b2392f0683398107e91e82802c6",
"assets/assets/icons/gemini-color.svg": "738fc28717976793bc5143d7138eae01",
"assets/assets/icons/gemma-color.svg": "019b63eccac8614ba055d9d4a28b256c",
"assets/assets/icons/github.svg": "782a26d5568b388130cccbc4361700d5",
"assets/assets/icons/google-color.svg": "c655b437e35ff9e86371a6a872499c4b",
"assets/assets/icons/grok.svg": "a3e0ccafa80d83f28f2747d53604c0b1",
"assets/assets/icons/hunyuan-color.svg": "8f106c4f71894af09556210df04a2290",
"assets/assets/icons/internlm-color.svg": "3176a0ddec7638670a36865e47f81a32",
"assets/assets/icons/juhenext.png": "4be7beac1cb13f0a643ccbe8ba1a2071",
"assets/assets/icons/kimi-color.svg": "422486debd2c13a6a57dcf1bec748e9c",
"assets/assets/icons/linkup.png": "af9410f1cc57c09007152a0a5d47df1f",
"assets/assets/icons/meta-color.svg": "1e2a824a00860184b4305311af2017c0",
"assets/assets/icons/minimax-color.svg": "b79e91c651a03521cb7a96a9d6ffa14f",
"assets/assets/icons/mistral-color.svg": "9ca07eed783cd14677a843651b941a62",
"assets/assets/icons/ollama.svg": "24bda001bd2d6a3d81e8bfbf64269fb6",
"assets/assets/icons/openai.svg": "eb2553e579562fd4fe90315108bc1f94",
"assets/assets/icons/openrouter.svg": "40645826c2812819dfeb57cf29491eb9",
"assets/assets/icons/perplexity-color.svg": "3e58e106dcabadd484cfa512ab6a3c46",
"assets/assets/icons/qwen-color.svg": "4510e3ea6b30dc4edb0f04d711a1e3fa",
"assets/assets/icons/siliconflow-color.svg": "159f3cd39d3786c4a46e3cbf53503e00",
"assets/assets/icons/stepfun-color.svg": "37c371f8678ab668dfaefe20eb176756",
"assets/assets/icons/tavily.png": "76933c90f5012d01d3cf6e03b27463fb",
"assets/assets/icons/xai.svg": "1b3d6c1b868528b3a5a250f7b4d9b410",
"assets/assets/icons/zhipu-color.svg": "5a0074359f73ee8b0a93ee90a90221ef",
"assets/FontManifest.json": "94206c0bf58c84dcb34287cdaad01c4a",
"assets/fonts/MaterialIcons-Regular.otf": "309c0b3a38322cd6d0512dd2fe079e98",
"assets/NOTICES": "ecec2e8d2d013457bf7693febab20919",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/gpt_markdown/lib/fonts/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "42b9678b68cadf6f0e142045fd0b7327",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "ea43aa7c18fe3dac85cb587d7c12c0f7",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "28ed992bea12531d0f4168d45965d504",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "6b19cd69f6a3c95a02e3e49e6e19d207",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "25ef9a4fb04689db70098e6e581c4338",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "53999d2d356a94261e12b3391152c713",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "9fa442d01f297bf1efda14eee82352c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "719650bb4e260221506c9aed1837b662",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5fa242a3cc337641737a84d21e16c908",
"/": "5fa242a3cc337641737a84d21e16c908",
"main.dart.js": "cefc2c5056d4fde37e64aeda1347dc65",
"manifest.json": "35230707260494c4e989a1513b8dac9a",
"version.json": "61e8b333907d8e72bc1224aa8ead9b00"};
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

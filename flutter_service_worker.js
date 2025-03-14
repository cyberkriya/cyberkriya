'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c9434b348c2520de3cf047d9e6ae3a7b",
"version.json": "aa91ded353f399308a39767b979463a1",
"index.html": "3241ac5c40bd36e9acdfc3a5205a9536",
"/": "3241ac5c40bd36e9acdfc3a5205a9536",
"main.dart.js": "63eac53f86a985910e5c9716c88fe033",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "239ffade191f0e0b92f2f6d52c12a381",
"icons/Icon-192.png": "6d8ff118ce6b0de27d54a7c906786a97",
"icons/Icon-maskable-192.png": "22b103ff9fe36ae15985397054f9334e",
"icons/Icon-maskable-512.png": "6fc4cfc30cd29db4ae1b1bb1b3e5e0b7",
"icons/Icon-512.png": "809d60e35001afec7f8947c51101c8d4",
"manifest.json": "5114c48734924d62016028924dd5566b",
".git/ORIG_HEAD": "d3ea1aa61cc352d095a6e675ae9196cc",
".git/config": "c3b6084a04f0fef63aee59005ce4bafd",
".git/objects/59/a84bdbdaebd048893a88a6e3a26f6ab2a6c9d2": "6070aedfd63f70c14e0ed67fd2341341",
".git/objects/3e/a7e6be3b8be4d12714c85a2a4192783e0999ef": "3e300cd5d2f13a6df106113e8b3e735f",
".git/objects/3e/34132453931a6b77e1d46e4d1cf83cf7d38c04": "f18523b85681ee8414a7d721e4f1829c",
".git/objects/50/54605cfec56b711d8e6c0473a03c98ffd0b8db": "6a6154b59a67b965e92a6e2f00f3ccdf",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/6f/61490a3505f651ddad15d688d6523ffcbf25ee": "08da154789b0da9063ccb6011b90fd38",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/702423c2c8ec63febdbc6b863c46bdc3287f34": "1a3d16bf5c298fb25710a36640c3425a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/1cb852ea3edcd8c1a2ca80eac532677cd2c312": "4a47bef685caf56fd1d02da1a91b26b4",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/ab4b215ee2dd0b72b686c1d8ec0eeefec817b6": "bf0b7eeb3a86d5e7a81c4e9860b2ae4b",
".git/objects/0b/7b6ff310991ea58982d82c116a14f2c1e4b8f8": "a9594903b4d683f4e1b2782f04479442",
".git/objects/0b/fb0aa620530a7eccc19cc5de896e779acbde29": "73833d2353b2b1307c3a748dfbe77f47",
".git/objects/93/993cd9a959ab20cbdb3a67e3cc023cae097c0c": "7b01f3a91739e8466d6ee38745ac167a",
".git/objects/0e/e6467c0e5221003c3d73b23846baafe9a4cdcd": "a8b99bf7974feb649c53a5719716e6bb",
".git/objects/34/506793ff5cfd7367f5dfb76552007179394a09": "ec7ec8c69199acc460019c85470e9b49",
".git/objects/5a/ee54e7eb4ad4862f05f4c3e5dbeb5190239d40": "57684e3d1002e807b0641c806be4c0c8",
".git/objects/5a/2b0eb2ae6d0da8ab3af2e14d520a6cdcb6496b": "2f0e6bfc6fbc5cc0b07f282f60e4fb70",
".git/objects/ac/e1c22793536334eff5fda7891ccf3b70819f14": "4e52196a472f71bccdbcb1203ee89fa9",
".git/objects/ad/9b90528a8bd4e218f5f3b653ef35683ac95208": "1186fdee373407b2ffe99061633fe92b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/52ec839368156f84312a5416389dac70970b13": "646d740b22e5c27d1633ae7f16d224b9",
".git/objects/b4/6210da8bd8ff02de5d5a7c16d34a5fcd9f9213": "3eb04e39f14b968ac549b807e1f3b6b8",
".git/objects/bd/0d6759e6b4e25ce5a797289f508b67126f3e04": "dbb5451b0ad69b42447cf27e748626f4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9ecb4e29ece0a144ffb75d778f446f943bff92": "4fa79d2ff63d4af06d92c00aadd9f259",
".git/objects/bc/68c6620b6f1740be775b54c38405ffa832abbe": "e3e8f360e20ec815f0b4695fb9c6bdbe",
".git/objects/ab/c1369a75f22c990804187dc6f9d8e021930e4d": "172712807dfdecd8adb7875f8bb687f0",
".git/objects/e5/800c3dcf07cf4d770b3f79df96cfca6007e65d": "0ed2054840c2bc7ccfa359abef6beab0",
".git/objects/f3/4522bfd246be43fdf15a4346157dd16c889fcf": "fdc029dbbde1e43178d6b7834d496b7c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a9f54ca49d81cc9fcaebf59f638b73facf97ba": "80bfe4951797dff516f95f9d02356f5e",
".git/objects/fd/532df594abb6ce2d45a0517709ad903e9bc793": "e4140ad1c2850972bb25e9fd94dd9d1c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f2ee0aceb7352af6bd1c6972492d990b2c0f5d": "c89b5a3c3c7f349226903719ca7acd1e",
".git/objects/f5/14122816fa9c2d349b6bb8774347c6014cd11d": "9440b7e8bce564df198be78c35af5981",
".git/objects/cf/a9c07f455e42a5ac320bba05292d249d444a6b": "110ef191e912fb09b25c6ae254869329",
".git/objects/c8/8ccc4fc39850ccf9a0518f52e3050fedc1a018": "b096d86ccc1b93d186b0c45e84dcbf42",
".git/objects/c1/97e8bbe15dbb38eb973db1c3d9fb8009aab5c8": "c7c6740d4a4cfd99bba1d9cf1c0ae49b",
".git/objects/ec/d6254212c0b4aa8a5c36b75c0774f1c519e6bd": "e0189d6c467cf40e665015eaca484332",
".git/objects/4e/0c81458d2ad757c5a141d26a4872da0674d4d0": "b3e33f9e80639f1ac30260398023a9f1",
".git/objects/27/dcf269571b1ce51637c84b675923a5de9542f3": "2367e0604659df06fe15177eded52e8d",
".git/objects/7d/9e25cb69bf9067b0294cac1808f7c69358f8e3": "dcec33697b12eaa8eb2ef44c0afec4d6",
".git/objects/7d/3cf5152f05f558e2d3d155feb76de5f6863211": "b96d49ffb05278965a592559ffdab88e",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8f/d27f154a2c86ed1903e8d598a53a17e4a15394": "239b9d441416b364e840e12c2845a0da",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/f1136ca80222399de42b874d3bf3ac660dd6a8": "008c7608f9718e55a7a26be323003c86",
".git/objects/72/1de2f75bb914fd82e017f4a8cd5ac1208d3833": "8642e9284f9930178e5855d231515407",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/c9c4b6e73317a9af7539623e33a48407202042": "3a15a6757b4e74bace3f261aeaf75169",
".git/objects/38/030395b5942240897514bbd6775fdcc4eafdf9": "87daf127a05307879ff4ee858e453b06",
".git/objects/5c/193e6edd51bac72e990697628bbca71993e9e6": "078a8272fa9291637eb5ad0323752aa9",
".git/objects/5c/8f9ebc9b241a57f0cc7901ac41b4875fb9a175": "f621c5757356c92b7cfbe10ff05c5996",
".git/objects/5c/682aa421339edacf8f1f5a87ad70c424828f26": "e84de81740031a0e99aa8208aa6ba71a",
".git/objects/09/b5d8f3955cf70d1f65fdd5a340bac5aaca7a8e": "3148ef01d0823423031cb43d0d1453b7",
".git/objects/5d/7f59528cd0baa6d04743350fe06e8e2e7ba5ee": "7ff8e590f5fb5e5fe91f1cfc6984689a",
".git/objects/91/e7a6b225f57a79954e3484f3191cbc249b0fd9": "499afe85368e97b1126975198a704586",
".git/objects/65/6e8fe5ba10727f3ef8ea4031d47bf0350d7c3c": "4ed785d257fcf0425af359a8c90796e0",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/f54d931dca1720209f5a319115688908629094": "b00ef5ca8b6e27a9fc71d464f3f36b79",
".git/objects/5b/2cf0e2aef1127f652d030e3f4000b17452e977": "eb76b6f8f2094621dee821920af9f27d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6c/13beecd960091e480666b81e4a89f59a35066d": "c43fcd93ba35a99412992e242f337ef6",
".git/objects/64/38f5bd291c27d4a23666366d4393f3a65f84de": "1f63495be092df7356851bbe2a6308e8",
".git/objects/64/b121d5bc02a65e1dd546d82fc57b0b70d04135": "2071f27fa51c52990baa9764e573e51b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/dac1ccce7fe046a51fcfe00ccd2b017fc407aa": "d96934e05811842651e1d1f301cbf269",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/8c431d1ba19fa9abd32374daf61329d3ed3c36": "79ce2e7260dcbdeffcb6ec30030bbb0d",
".git/objects/dc/3272258f2d7c83839c8e49450a71bd514555b3": "8a859a97a67fadf6ba9794ba81feb32d",
".git/objects/d2/e18b26aa3b95fdeedc4875542c09d238f43053": "461a03d6db8c75791cce71d4d80828ba",
".git/objects/d2/a9a392a5b87d3c457d39b965ab096ecc522c2c": "40ff42c76aa2cd17e0c489658124a914",
".git/objects/aa/e0c4a4f1fc27a87feacf72ad4429006717a3c6": "50b88d04898f9681dcdd0f3fe5a9dc31",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/9a3204a1cb00709f3f7b811e8b2f0ef5533c4a": "f5b7aede0ab358b8b4449ff83f9b1840",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/13e2e18b0b91f14fe00e8a0816f0ce997ef525": "b0dd2d52309e65ead632f9e6b0d57b65",
".git/objects/cc/a52b5716c05519f38f5c524bf3d695a220c18d": "b84b277264ba19b78a8e0de6a9d52df6",
".git/objects/c5/7a9c9f8714911d6ac3b21fe810f4e25d7ae7cf": "be33aff9574963eccd9d9cc6a8229f8b",
".git/objects/e7/981f2820d3e4eb87c468390a2a5c69d89c9023": "3d505adf1c43a7a13d34c86ce165689b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/f79b2ba7fd8a4bfad65b1aa1be28eba797fb08": "d1490c386be28a3d267c4583bcf000e1",
".git/objects/83/bab2b193a7bea4a9076aeb5e00227bbc2efec3": "e527a5693df6884a812615dd15c2c977",
".git/objects/77/50f8ba642089a7b77bbaccd7a8a84124fd3122": "586004838f667dece2e15756fe5b5d14",
".git/objects/70/1e19aba05968b2769b330937d5bd5f8a42a46a": "5a370f2fc61a1abcf5c0f62bcaaa4036",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/97f5482b08fc1d446a479543e2d2f365746376": "637eee343bafaf9d82ab37ced42ea86a",
".git/objects/15/82e02cb806f9fd67e2e24c10cd8d668acca10b": "12caf1b92db2f06d988518691cab7049",
".git/objects/12/20df1d9af94b925ffb10e2c99e7ff1c7ae1c69": "fe60fddfd61bac6687d036fd5b38be58",
".git/objects/12/b392b89eda38a78c6b981c9771d1099738d106": "3a03d6474058a671b9cfa9d09b4c38f2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/40/c40690172adb3c6704c5e3905884e0f84f4059": "3fb4b21a1b4618348941e90ae2a05f24",
".git/objects/40/9dba7d65caafa696c0d35b9dcce972f523bde5": "9adcd0b588f0701fce862223fac3d423",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/1144d5be34cd3c87b1e0a6ca17e1c8cac7de13": "32770d8e0357a22841d4c5361b266a1f",
".git/objects/14/c7c1b043a8578641c1d3447bb2997dedd60bdb": "c19bf3fd92b0c4b754bb0432f19c37c7",
".git/objects/22/89e4a0f9ddccf7ddcaf73402170156957ed09c": "ee8701c2a7371b363c7fdf63ffc18e1d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f20588c779befd4c8e7bc06d5d2bb11c",
".git/logs/refs/heads/main": "f20588c779befd4c8e7bc06d5d2bb11c",
".git/logs/refs/remotes/origin/main": "d197faafa5752b5b9251100544f71372",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c168d763cdbe7000bfc0c77dd161bfbd",
".git/refs/remotes/origin/main": "c168d763cdbe7000bfc0c77dd161bfbd",
".git/index": "e3da681386bdf8b3bd28a408e72629b0",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "10ad2d3334d6466a44b6a2446e15906c",
".git/FETCH_HEAD": "5606f6f6df7fe35742bf5e263b8f2725",
"assets/AssetManifest.json": "8649f23142515175b6ea615421cd6976",
"assets/NOTICES": "75efcfc204e67a097bd60cd352055764",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1eac9ef107ceb54cb7d919ab62139059",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "81985b35a113594024680fc813f3f787",
"assets/fonts/MaterialIcons-Regular.otf": "5bdcee25fdcffae13309c6541bcb6f51",
"assets/assets/author1.jpg": "c717b3fa1886bbad49753475caab03df",
"assets/assets/author2.jpg": "55142c4950256f020a96d045284f0818",
"assets/assets/logo.png": "f5a48734c98da427300f185075221ce0",
"assets/assets/book_cover.png": "2b7b46758091f287c36ba66c149af5eb",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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

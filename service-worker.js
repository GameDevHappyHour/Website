"use strict";var precacheConfig=[["/404.html","6fe4c47d386d45726b6992c3e9c2da55"],["/Code-of-Conduct.html","4d0509f23e2cfb767bffbef1118d763a"],["/a-systemic-game-design-framework-game-d.html","8baa0be502b638f413257da25c77a416"],["/apple-touch-icon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/assassins-creed-building-a-credible-and.html","2549c12c8b6db9346192c00a86ff5f2f"],["/assets/js/user.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/svg/GameDevHappyHour_Logo_Full_Colour.svg","7986378d37bb1e7b081ac48821e13a20"],["/assets/themes/curtana/css/app.css","78596edba7d060990f64d61ab1b40701"],["/assets/themes/curtana/js/app.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/themes/curtana/js/lightense.min.js","328ac8176d02ecd57d914cca99b0c2dd"],["/burnout-and-ideation-game-dev-happy-hou.html","d1198eebfe2a6bc962b8acd819fdf3b7"],["/creating-kojum-solo-dev-adventures-game.html","89d182e272ba1bab46383813492277e0"],["/elevator-pitch-basics-game-dev-happy-ho.html","48f85add210bc11e7bf45ea4f76499e2"],["/events/index.html","63f590b516a0d96454204160485c5465"],["/favicon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/favicon.svg","0c59b9a115a2a26dedc0504aff0a2176"],["/forgetter-making-a-game-as-a-museum-exh.html","ef1eadf3fd43f814300e7400ce2cab4c"],["/game-development-as-a-hobby-game-dev-ha.html","2f6c14ede81231255b709777845cbc8a"],["/git-gud-pixel-art-game-dev-happy-hour-d.html","5d9053514b413532be8007f5c725a6d6"],["/global-game-jam-hong-kong-2021-ggjhk21.html","34fd2bdca1b626b96ed4cb05a2608863"],["/go-run-a-dungeon-lessons-learned-so-far.html","10873b6b2e1c8b7036370d71832bc1a2"],["/index.html","1b8ef447822f9e32e3014927f13a8232"],["/logo.png","22b3d8a53c0aacf94033e48b39fa7a17"],["/markdown-features-test.html","93e46faafd4283efee566be03b93bc16"],["/markup-example.html","7fb878ca4c4f48cd07bc17d676955afa"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/monthly.html","9b5126728d672bbb7d34c63b2edee324"],["/monthlyplus.html","98c501c99276dd18aa08949faec8e2fb"],["/neophyte-postmortem-game-dev-happy-hour.html","50af93bb8af12fd763240096519dc5ca"],["/news/index.html","dceac04322005cf252f05fa133a9f93e"],["/no-money-no-problem-game-dev-happy-hour.html","fb18cd6180b4ab6fc6438e2c9682801c"],["/open-graph.html","e46371f1dcbd87d9046b43a43abbd531"],["/our-team.html","3777035c62ec380749917affea583245"],["/pixel-petz-making-a-game-you-love-game.html","089efe4de5324c15260bff55df513a6d"],["/practice-is-boring-game-dev-happy-hour.html","b8e49435acd707011dbdd2ba1060b724"],["/press-kit.html","1ba1122bf2e4746eb15a35edce512347"],["/questions.html","f3e4b57b2134f268bb253916646f7913"],["/recording-in-unideal-spaces-game-dev-ha.html","d9152b42665986751a06cb3ecb4e2285"],["/romance-of-the-three-consoles-game-dev.html","ba4d450f766cb399274ab4f3ce5e8aea"],["/steam-as-a-platform-game-dev-happy-hour.html","585717c5ad8cb9aba5173fc12ed39a4e"],["/test-driven-development-game-dev-happy.html","e75a680c7c5ac7312de864a280c1890b"],["/the-development-loop-for-indie-games-ga.html","0f267e5631fa1a65a24ad69770a09f6b"],["/the-sound-of-games-game-dev-happy-hour.html","b91206854788f51dba297765c38a9cb2"],["/welcome.html","5aada1558f38abafff41b9000e6b7fbb"],["/working-in-chinas-games-industry-101-ga.html","bf93ba2867ea0b3001bd4ef62736dd71"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";!(a=urlsToCacheKeys.has(t))&&n&&(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return fetch(e.request)})))}}));
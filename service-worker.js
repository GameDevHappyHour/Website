"use strict";var precacheConfig=[["/404.html","6fe4c47d386d45726b6992c3e9c2da55"],["/Code-of-Conduct.html","99369c9cb1b5c468d16f7990e1e3985d"],["/a-systemic-game-design-framework-game-d.html","e6530be704b92d5c7b5a3f0359627cba"],["/all-you-need-is-you-game-dev-happy-hour.html","1c2f090242ee0e0b423764ee3eee20d2"],["/apple-touch-icon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/assassins-creed-building-a-credible-and.html","8939258675abe9788558fa07fc8f1088"],["/assets/js/user.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/svg/GameDevHappyHour_Logo_Full_Colour.svg","7986378d37bb1e7b081ac48821e13a20"],["/assets/themes/curtana/css/app.css","f5657f9d09b14ce0626b081569acc7af"],["/assets/themes/curtana/js/app.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/themes/curtana/js/lightense.min.js","328ac8176d02ecd57d914cca99b0c2dd"],["/building-intelligent-npcs-a-crash-cours.html","125c719e938a58fed64bfa447509a877"],["/burnout-and-ideation-game-dev-happy-hou.html","64a2d3a792021337d2f9e307715e8106"],["/collaborating-with-local-ip-game-dev-ha.html","02dea9179625b49f34a2751ef8d2c43b"],["/creating-kojum-solo-dev-adventures-game.html","979904d3ce030a70839eb4e47bf36bf1"],["/elevator-pitch-basics-game-dev-happy-ho.html","ab42d67446a0ce0b8222bd10f81f69ba"],["/events/index.html","d5684def061057a0d85e86ca4e78ee41"],["/favicon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/favicon.svg","0c59b9a115a2a26dedc0504aff0a2176"],["/forgetter-making-a-game-as-a-museum-exh.html","15dbeb486ca40598a6bea79dcfbab05b"],["/game-development-as-a-hobby-game-dev-ha.html","dae1e21d562fdf9900d93e6fc0074b91"],["/git-gud-pixel-art-game-dev-happy-hour-d.html","a6578ea48cc76afc2a7fbf37378bc7b7"],["/global-game-jam-hong-kong-2021-ggjhk21.html","e34509af593d2cc5694e9df54c875e32"],["/go-run-a-dungeon-lessons-learned-so-far.html","d5f5b744a52a7551382d7985fedb833c"],["/index.html","1b8ef447822f9e32e3014927f13a8232"],["/logo.png","22b3d8a53c0aacf94033e48b39fa7a17"],["/markdown-features-test.html","5be87a4fea5328df7a89627c874bdfaf"],["/markup-example.html","7ae12f0c527de1149bd7ff7f5e98fdfb"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/monthly.html","ba62034b57c491c821e50d012aa5a5da"],["/monthlyplus.html","3f0c84e9f65d264af5a2b8cba6eafa8d"],["/neophyte-postmortem-game-dev-happy-hour.html","367b51a08f861eec43a89cb882941a40"],["/news/index.html","dceac04322005cf252f05fa133a9f93e"],["/no-money-no-problem-game-dev-happy-hour.html","3ffeee6a9c23d909d2e7646a91be0ed4"],["/oh-boy-its-a-gameboy-homebrewing-for-a.html","368fef7576f335bc3fa888ff8bed6f52"],["/online-multiplayer-101-the-building-blo.html","0a9d7017c92b9fdfa99b9f0be562554e"],["/open-graph.html","7b88c6f37e47fa81bb8c442db6090b84"],["/our-team.html","63b0100d3a348f4907d39160d17a8c58"],["/pixel-petz-making-a-game-you-love-game.html","fd0087f8891686880d10cb29b31860b3"],["/practice-is-boring-game-dev-happy-hour.html","b7ef32d835096fbd9df7f874076e7867"],["/press-kit.html","ec7eff860fb0ea2bf4f03aac097a9bc5"],["/questions.html","f9f213c8f5a05a195e482b33935ca2e1"],["/recording-in-unideal-spaces-game-dev-ha.html","973225c2d1026dd4bd302fe7972e03c8"],["/romance-of-the-three-consoles-game-dev.html","15cdca33cf7734de00abd8a074284906"],["/steam-as-a-platform-game-dev-happy-hour.html","66ff7840dfec2370c32009512ab60a10"],["/test-driven-development-game-dev-happy.html","48fd9e345fc69cf2d967f15b07d30362"],["/the-development-loop-for-indie-games-ga.html","97347b72b11e1428f73ded95c74e76c3"],["/the-sound-of-games-game-dev-happy-hour.html","333ab92f4a2682a24337331fb38f4b04"],["/welcome.html","9ce4300ae7160de80c1a41e7dd952c38"],["/working-in-chinas-games-industry-101-ga.html","b544bfe86609f1fc461e0270711a6bae"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";!(a=urlsToCacheKeys.has(t))&&n&&(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return fetch(e.request)})))}}));
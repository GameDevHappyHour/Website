"use strict";var precacheConfig=[["/404.html","6fe4c47d386d45726b6992c3e9c2da55"],["/Code-of-Conduct.html","e798092528df750bdb243b86866253bc"],["/a-systemic-game-design-framework-game-d.html","b65034bc91be18652703a930cc3a233e"],["/apple-touch-icon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/assassins-creed-building-a-credible-and.html","d22ddb44ab8f675a6cf36d384ba7b8ed"],["/assets/js/user.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/svg/GameDevHappyHour_Logo_Full_Colour.svg","7986378d37bb1e7b081ac48821e13a20"],["/assets/themes/curtana/css/app.css","78596edba7d060990f64d61ab1b40701"],["/assets/themes/curtana/js/app.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/themes/curtana/js/lightense.min.js","328ac8176d02ecd57d914cca99b0c2dd"],["/burnout-and-ideation-game-dev-happy-hou.html","0c190ee76285b0003244d4dbf618d19a"],["/creating-kojum-solo-dev-adventures-game.html","a07db9e89903881f1ec4ef2da02dba40"],["/elevator-pitch-basics-game-dev-happy-ho.html","b37514c350ac4df4c7f3a66b58938de3"],["/events/index.html","63f590b516a0d96454204160485c5465"],["/favicon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/favicon.svg","0c59b9a115a2a26dedc0504aff0a2176"],["/forgetter-making-a-game-as-a-museum-exh.html","9c5b48a109ef07fb16e89de836cc7faa"],["/game-development-as-a-hobby-game-dev-ha.html","fca26cfca80584e5096cae35eadb906b"],["/git-gud-pixel-art-game-dev-happy-hour-d.html","8c118d143becbeead93986778ead92f4"],["/global-game-jam-hong-kong-2021-ggjhk21.html","2a29ae3573546d043db5c20edb3ff86e"],["/go-run-a-dungeon-lessons-learned-so-far.html","5f4f010da862616cdfd2852c7c95c2f0"],["/index.html","1b8ef447822f9e32e3014927f13a8232"],["/logo.png","22b3d8a53c0aacf94033e48b39fa7a17"],["/markdown-features-test.html","87c4838078d5ecad1574ce840261d935"],["/markup-example.html","7c59a12b0bc6b713f13c78819ff1bea4"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/monthly.html","9284642f1260baa78bd191a415f6cef8"],["/monthlyplus.html","71b2fb099e837dbf19e675122cdfbd85"],["/neophyte-postmortem-game-dev-happy-hour.html","b723f11efeb73af4803cdcbb6d1a8971"],["/news/index.html","dceac04322005cf252f05fa133a9f93e"],["/no-money-no-problem-game-dev-happy-hour.html","16a978ffec1c9117ddd6fe493824e0de"],["/open-graph.html","1c4da09cd7f94bf6aa660f804a8376b5"],["/our-team.html","58fd96fbe9f8f22774593152f5294eda"],["/pixel-petz-making-a-game-you-love-game.html","07d251d4f0eae734bb38a21d2acf85ce"],["/practice-is-boring-game-dev-happy-hour.html","763745a1055af47e6323c1dd412e61f4"],["/press-kit.html","04292240b832ef06f8c5f39f9d60c451"],["/questions.html","6393290de6355703c913bd5b4e1db7a0"],["/recording-in-unideal-spaces-game-dev-ha.html","e9f233007a8736fe8585b63561f58807"],["/romance-of-the-three-consoles-game-dev.html","5fc6b02d5f60fb2fe81068c7d8876b34"],["/steam-as-a-platform-game-dev-happy-hour.html","98d53a4b2328ec3d4e78a7b1cc925bd0"],["/test-driven-development-game-dev-happy.html","87297db31c8ec0befc1a29dfd4738df8"],["/the-development-loop-for-indie-games-ga.html","9ad1653de3c11c13aaf7f767026a344d"],["/the-sound-of-games-game-dev-happy-hour.html","db7d0f0d3f8eba827cb3cd1335b13551"],["/welcome.html","1c889fe645e4b18930704ccafc25dc61"],["/working-in-chinas-games-industry-101-ga.html","185d78c586e121316e88f4bc2e3d8b51"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";!(a=urlsToCacheKeys.has(t))&&n&&(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return fetch(e.request)})))}}));
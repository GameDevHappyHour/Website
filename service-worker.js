"use strict";var precacheConfig=[["/404.html","6fe4c47d386d45726b6992c3e9c2da55"],["/Code-of-Conduct.html","12764fdbd90fed67c6561e36bdaa502b"],["/a-systemic-game-design-framework-game-d.html","03d49b69f41060aec19e76c706ae8207"],["/apple-touch-icon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/assassins-creed-building-a-credible-and.html","f57ffb193f82a9afa266296244fc750e"],["/assets/js/user.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/svg/GameDevHappyHour_Logo_Full_Colour.svg","7986378d37bb1e7b081ac48821e13a20"],["/assets/themes/curtana/css/app.css","78596edba7d060990f64d61ab1b40701"],["/assets/themes/curtana/js/app.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/themes/curtana/js/lightense.min.js","328ac8176d02ecd57d914cca99b0c2dd"],["/burnout-and-ideation-game-dev-happy-hou.html","e21348eac830ab5816aeb06ef8149556"],["/collaborating-with-local-ip-game-dev-ha.html","7b1bbfc1014130c29bc5117df5c6530a"],["/creating-kojum-solo-dev-adventures-game.html","1529cbc441a9c2dd1342a57bea899f1d"],["/elevator-pitch-basics-game-dev-happy-ho.html","3f93e17f4f9f1281803b916e36a6eb41"],["/events/index.html","d32a310b682ca072c9747604646d0283"],["/favicon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/favicon.svg","0c59b9a115a2a26dedc0504aff0a2176"],["/forgetter-making-a-game-as-a-museum-exh.html","57b034a3c49f6abed4262fb7343cc110"],["/game-development-as-a-hobby-game-dev-ha.html","18b0bc27f098cdce18329d936902652c"],["/git-gud-pixel-art-game-dev-happy-hour-d.html","ba5d1d30b785e12eca9fb2e7fc100d7c"],["/global-game-jam-hong-kong-2021-ggjhk21.html","5816ab78b51077cc620fa1467b579828"],["/go-run-a-dungeon-lessons-learned-so-far.html","47576c64b6354b7173f8d3b293964374"],["/index.html","1b8ef447822f9e32e3014927f13a8232"],["/logo.png","22b3d8a53c0aacf94033e48b39fa7a17"],["/markdown-features-test.html","8d10ca4bc4a49a47ebdfb6dd94dff308"],["/markup-example.html","a5da86b5f496283c30b38530f9b413a8"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/monthly.html","837f8cf923ed6a776ef49c31160dde5b"],["/monthlyplus.html","1748b6d96df5ad01e2b3aece8d4697fb"],["/neophyte-postmortem-game-dev-happy-hour.html","a3454c1bfd5ce3d70245c8c9f18f2df9"],["/news/index.html","dceac04322005cf252f05fa133a9f93e"],["/no-money-no-problem-game-dev-happy-hour.html","846003acbb705f25bdd8f19ffa5fcdd8"],["/oh-boy-its-a-gameboy-homebrewing-for-a.html","7409dbf277995118b67678fc56206243"],["/open-graph.html","5caad723a6fbc477fcfda5d334fdd2bc"],["/our-team.html","2330eef983fd37c4621d61f4f4e814b1"],["/pixel-petz-making-a-game-you-love-game.html","dc8c0030947f6b0b5b959b70ad3b5e4c"],["/practice-is-boring-game-dev-happy-hour.html","cd15054ae22e6bd07f6a921dec8fb7c6"],["/press-kit.html","cb864177a8c503d78217d3a212ffdd6d"],["/questions.html","3e78e22e8a1e3467bb862581f26abdba"],["/recording-in-unideal-spaces-game-dev-ha.html","290639df675402519f3b905c43c8290e"],["/romance-of-the-three-consoles-game-dev.html","205d7a6aad0f234b13bba473d7341a5e"],["/steam-as-a-platform-game-dev-happy-hour.html","d5098271382dafc6956efe00ad654e0d"],["/test-driven-development-game-dev-happy.html","0f44c4d4b7576e589696e1168ca830d7"],["/the-development-loop-for-indie-games-ga.html","db7ceec351403f0d7d2811f099ce02e1"],["/the-sound-of-games-game-dev-happy-hour.html","66946b6677f8ee804d1bd9d9639c5ce0"],["/welcome.html","d831ebcb5e31bfda0d302adc3acdd914"],["/working-in-chinas-games-industry-101-ga.html","3f48bd4faa57ce0e0245ea4c912adf83"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";!(a=urlsToCacheKeys.has(t))&&n&&(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return fetch(e.request)})))}}));
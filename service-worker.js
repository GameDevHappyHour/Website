"use strict";var precacheConfig=[["/2020-03-14-march.html","98948f7639145d1df35ad75e18552357"],["/2020-04-05-april.html","d9710e25eaddad339cf9844f6821d561"],["/2020-11-03-november.html","dcaaed141f748f610e40497951f1562d"],["/2020-12-04-december.html","98ba829c0668e0436c715a264b8228d5"],["/2021-10-09-october.html","eda9293718d3667f14793fc1b9fd72da"],["/404.html","0e9f6599d3ccb599991b42dffa1d9780"],["/apple-touch-icon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/assets/js/user.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/svg/GameDevHappyHour_Logo_Full_Colour.svg","7986378d37bb1e7b081ac48821e13a20"],["/assets/themes/curtana/css/app.css","8960337690bd10e516fd69718b1b2031"],["/assets/themes/curtana/js/app.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/themes/curtana/js/lightense.min.js","328ac8176d02ecd57d914cca99b0c2dd"],["/august.html","987e8542f951ffb72dcf16abcdd9362f"],["/favicon.png","3eb3e22c70427c55894e3367ae5b6f01"],["/favicon.svg","0c59b9a115a2a26dedc0504aff0a2176"],["/ggj.html","4af9af998b683fcd70af6ead93678e3b"],["/index.html","28363f5faf3844416cd0ad76b8d3d964"],["/july.html","07099758cea69cc2c705e8e515b3210d"],["/june.html","9f311c60fb56dead435623f1cbd43fdd"],["/logo.png","22b3d8a53c0aacf94033e48b39fa7a17"],["/march.html","232588835835b386c12c506e9b3bc2bc"],["/markdown-features-test.html","df79abee95d7a6c5634e1dbe6756e74e"],["/markup-example.html","ad44111ee733f7c64afab0daf72db43b"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/may.html","cd36fde176f27ad3821ae0605812f077"],["/monthly.html","1f1f588c6ab1a45ee0d043d002573a18"],["/monthlyplus.html","d6ab40526d911b999c7b7e990db05b1b"],["/news/index.html","d18697c96d04fe3440179983d375b587"],["/open-graph.html","d3f7643858f6ec50235749c4523b6cfc"],["/our-team.html","cd33cc72d15c8e342b611cb94547635b"],["/press-kit.html","990f39a91dd92d21025f83f21816dcde"],["/questions.html","9a8cbfb26bc75ec231f3228802ac949c"],["/september.html","ceb0c9e63f7552f9dd1663f05ea1cc69"],["/welcome.html","a8606061f9fb0834f3fdf6d814345861"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return fetch(e.request)})))}}));
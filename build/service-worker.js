"use strict";var precacheConfig=[["/index.html","fa93e9d9f4d56e119a7657296ada65e5"],["/static/css/main.653b6cf4.css","8ac5390f589985c9583914aa847b0590"],["/static/js/main.49e69ce0.js","dbf65c7069fe9745ada6898925ed776c"],["/static/media/8yr.2fb40d57.jpg","2fb40d571eda30e19aa1880d8fdd765b"],["/static/media/corporate4_dark.bcbfca5f.jpg","bcbfca5f072e435d5abbbfa027bfb898"],["/static/media/down_arrow.cd3fee20.svg","cd3fee20d724d9b21a94a863f0515286"],["/static/media/email_icon.da45685b.svg","da45685b18ff262b1bad352f49083f81"],["/static/media/event1.be77ba18.jpg","be77ba1894db2e4651df506ae8f2fb75"],["/static/media/facebook_icon.0e5020af.svg","0e5020afc2b288fb812d952dc735c7a2"],["/static/media/grit.d0dac35f.png","d0dac35fb310d81a60c46e201ddd0cdb"],["/static/media/hamburger_menu.47deaf00.svg","47deaf00198ed35487a6daee63295da9"],["/static/media/instagram_icon.74b7ec35.svg","74b7ec3565e7d60bf72ad5af93a2dd5c"],["/static/media/pw_manhole.1b770242.png","1b770242f501daeb9baeb65e63c653a3"],["/static/media/scan20.61490863.jpg","61490863e7fef1e2fc820e2648aa6f10"],["/static/media/scan22.08f334b2.jpg","08f334b2bf2bfbe894f9f0a6ff62a454"],["/static/media/twitter_icon.845d25ec.svg","845d25ecfe9ff63117638431bd4e61d1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
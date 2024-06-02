(()=>{"use strict";var e={136:()=>{try{self["workbox:core:7.0.0"]&&_()}catch(e){}},447:()=>{try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}},227:()=>{try{self["workbox:routing:7.0.0"]&&_()}catch(e){}},390:()=>{try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}(()=>{s(136);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}const t=new Set,a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),r=e=>e||n(a.precache);function i(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}let c,o;class h{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}function l(e,t){const s=t();return e.waitUntil(s),s}function u(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:a}=t;if(!a)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),r=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:r.href}}s(447);class d{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}function p(e){return"string"==typeof e?new Request(e):e}s(390);class g{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new h,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let a=p(t);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=p(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(s,a){const n=p(s);await(0,new Promise((e=>setTimeout(e,0))));const r=await this.getCacheKey(n,"write");if(!a)throw new e("cache-put-with-no-response",{url:(c=r.url,new URL(String(c),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var c;const o=await this._ensureResponseSafeToCache(a);if(!o)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,s,a){const n=i(t.url,s);if(t.url===n)return e.match(t,a);const r=Object.assign(Object.assign({},a),{ignoreSearch:!0}),c=await e.keys(t,r);for(const t of c)if(n===i(t.url,s))return e.match(t,a)}(u,r.clone(),["__WB_REVISION__"],l):null;try{await u.put(r,d?o.clone():o)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of t)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:h,oldResponse:f,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=p(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class y{constructor(e={}){this.cacheName=e.cacheName||n(a.runtime),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new g(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(t,s,a){let n;await t.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,t),!n||"error"===n.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(n=await r({error:e,event:a,request:s}),n)break;if(!n)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))n=await e({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class w extends y{constructor(e={}){e.cacheName=r(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(w.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=n.integrity,r=t.integrity,i=!r||r===e;a=await s.fetch(new Request(t,{integrity:"no-cors"!==t.mode?r||e:void 0})),e&&i&&"no-cors"!==t.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,a.clone()))}return a}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(t);if(!await s.cachePut(t,a.clone()))throw new e("bad-precaching-response",{url:t.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==w.copyRedirectedCacheableResponsesPlugin&&(a===w.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(w.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}w.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},w.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let a=null;if(t.url&&(a=new URL(t.url).origin),a!==self.location.origin)throw new e("cross-origin-copy-response",{origin:a});const n=t.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=s?s(r):r,o=function(){if(void 0===c){const e=new Response("");if("body"in e)try{new Response(e.body),c=!0}catch(e){c=!1}c=!1}return c}()?n.body:await n.blob();return new Response(o,i)}(t):t};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new w({cacheName:r(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const a of t){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:t,url:n}=u(a),r="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:t});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==a.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(t,a.integrity)}if(this._urlsToCacheKeys.set(n,t),this._urlsToCacheModes.set(n,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return l(e,(async()=>{const t=new d;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return l(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}const _=()=>(o||(o=new m),o);s(227);const R=e=>e&&"object"==typeof e?e:{handle:e};class v{constructor(e,t,s="GET"){this.handler=R(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=R(e)}}class C extends v{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class b{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async a=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:n})}catch(e){e instanceof Error&&(a=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,R(e))}setCatchHandler(e){this._catchHandler=R(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let q;class U extends v{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(n);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}var L;self.addEventListener("activate",(()=>self.clients.claim())),self.skipWaiting(),L=[{'revision':'9285899b6f33151b1690904ae37c9023','url':'bundle.js'},{'revision':'b6d5669cbb935c88c2ffc1f350c869c6','url':'guides.html'},{'revision':'efa9578d938af1f286c4ca8b12ce6b89','url':'index.html'},{'revision':'6b1c61b2a63386c3e888abb9fc935e4d','url':'manifest.json'},{'revision':'311c1ffe7b9220c85733f35c148ef496','url':'media/1.jpg'},{'revision':'b5b9e076937dc5b04f61d98c3f2aafb2','url':'media/10.jpg'},{'revision':'902b565944b90a6e4b1bfe178ebff83d','url':'media/11.jpg'},{'revision':'5f3be0d43497ac347fd3c378db2bf6ba','url':'media/12.jpg'},{'revision':'142c1f10e65d4cf757fdc51b2b71abf7','url':'media/13.jpg'},{'revision':'d8cbaa9c8694775f19aa298b54b2899a','url':'media/14.jpg'},{'revision':'1468cff7cc2b5612208fc5bfff102420','url':'media/2.jpg'},{'revision':'88b5aeb85d7e46b4a3cef72a2f3e78c5','url':'media/3.jpg'},{'revision':'39738b2da8ea317fa0255721a79f730b','url':'media/4.jpg'},{'revision':'4842f1dead37eef497108b0dde79e684','url':'media/5.jpg'},{'revision':'3eaf9532d01a5c0776b5915af5f1d117','url':'media/6.jpg'},{'revision':'f0c5d28df995e37e57a365021e2f6170','url':'media/7.jpg'},{'revision':'8419abc9c66bed1e2e3ff5a5f8625a18','url':'media/8.jpg'},{'revision':'85653a6a41f7f3b0de2772c9675be704','url':'media/9.jpg'},{'revision':'c6920862999c47845fce50cffefca705','url':'media/Mona-Sans.ttf'},{'revision':'246198881d3a6952e4504048178c1df1','url':'media/al_biology.jpg'},{'revision':'632a6fc3568d02bc7f718a7ad3254396','url':'media/al_chemistry.jpg'},{'revision':'e3996093bde67a778f3bb24a46181d70','url':'media/al_physics.jpg'},{'revision':'68cb06091028c9b5e62354ae28c2e700','url':'media/cr_biology.jpg'},{'revision':'bc5c13828fbae86940d7b6091efe64fe','url':'media/cr_chemistry.jpg'},{'revision':'6944ac549db1b92e9768a83f150b0825','url':'media/cr_combined.jpg'},{'revision':'65278b413337355776ecf99d8b90639b','url':'media/cr_physics.jpg'},{'revision':'5be8c59f85d729426e3226b785c5183b','url':'media/guides/and1.png'},{'revision':'f930ec84b907eb527c666d5d57ffaa69','url':'media/guides/and2.png'},{'revision':'68901f1e4b9559896560a8741a64bea9','url':'media/guides/and3.png'},{'revision':'c46b963b6286584c1767e3279c2c3a78','url':'media/guides/and4.png'},{'revision':'50368db7ec4ded33dd112e8a599f09fc','url':'media/guides/and5.png'},{'revision':'62fb8660d603a48bff8da81566b150fb','url':'media/guides/ios1.png'},{'revision':'e6064097a9fc9583434887cc122ac0cf','url':'media/guides/ios2.png'},{'revision':'5ee37ef888f283c3518cda54dd47c0e4','url':'media/guides/ios3.png'},{'revision':'e406af7f71f0e4bb1e7b51d3c3bfc4da','url':'media/guides/ios4.png'},{'revision':'72ca640ffd3e764c354920deb7a18153','url':'media/guides/win1.png'},{'revision':'62ccff505fdda11f92de63f65311ae85','url':'media/guides/win2.png'},{'revision':'16aed966830941b61baa745b185a77e9','url':'media/icon/favicon-x16.ico'},{'revision':'7b2a7dd881a8e363fc27b7a78543bdc0','url':'media/icon/favicon-x24.ico'},{'revision':'60bcebbbe62a0bab04d1773935f6e561','url':'media/icon/favicon-x32.ico'},{'revision':'6860281dbd926ad9cb8eba19ea6d25d0','url':'media/icon/favicon-x48.ico'},{'revision':'9c5517bd6a6c4209c7522639f3845b0c','url':'media/icon/favicon-x64.ico'},{'revision':'4773261c83132e436bbfe790a52d84b7','url':'media/icon/icon-x128.png'},{'revision':'0fa9b039cf39075641f98905b582874c','url':'media/icon/icon-x144.png'},{'revision':'d67d27ef9c257bdddf280dbcae17e28c','url':'media/icon/icon-x152.png'},{'revision':'d70031dcde44706aebddd2f217b19d1f','url':'media/icon/icon-x16.png'},{'revision':'df969defdbb5c4218b1b7a1929fffa6d','url':'media/icon/icon-x180.png'},{'revision':'384c6962ccd7d157b859d90246a80e82','url':'media/icon/icon-x192.png'},{'revision':'c9cfa9feef1fdeae72c3365f8688e06d','url':'media/icon/icon-x24.png'},{'revision':'7c8050740e8c66d5e48baebcdec07621','url':'media/icon/icon-x32.png'},{'revision':'0d15ba323c350f4a2dd35e4b65b7d84b','url':'media/icon/icon-x384.png'},{'revision':'f3f14d801010e23ca191fcdb52c2f247','url':'media/icon/icon-x48.png'},{'revision':'3d0f83d6d0c11f1f62b58b2e6dd06e78','url':'media/icon/icon-x512.png'},{'revision':'57d2829dac929dedb177ec9c22f8d20b','url':'media/icon/icon-x64.png'},{'revision':'b9f3cfa6edd48bec6a557b19c155e598','url':'media/icon/icon-x72.png'},{'revision':'9ca1ed24c889f56077aa91990c1b4ab6','url':'media/icon/icon-x96.png'},{'revision':'c67741ea9b2eddc15d013b45f28045bb','url':'media/icon/iconx192.png'},{'revision':'be4a3b17e8e8106ceca58ddffa029255','url':'media/ol_biology.jpg'},{'revision':'f4a46e946504680e7f7b34f2c734946a','url':'media/ol_chemistry.jpg'},{'revision':'5f3b26627232388cdfe6538730a6bf30','url':'media/ol_combined.jpg'},{'revision':'c71aa621fbc0a03eb72ea26516c737b6','url':'media/ol_economics.jpg'},{'revision':'313826be61477a6319bb1926a289862d','url':'media/ol_physics.jpg'},{'revision':'bc4499d583baeb612d7167e0b0a50954','url':'media/screenshots/screenshot-mobile1.png'},{'revision':'0987b4ae0dd8d9bcfdcda421cc09bad1','url':'media/screenshots/screenshot-mobile2.png'},{'revision':'f85ad0960dbeda5608f9c64cdf5d9e71','url':'media/screenshots/screenshot-mobile3.png'},{'revision':'96606dd23ab9e1fb8e7769f2ff023d58','url':'media/screenshots/screenshot1.png'},{'revision':'d06b83f033526aca12d87f8693822eee','url':'media/screenshots/screenshot2.png'},{'revision':'28d34dc0eb9d3878e734437b73e2ffd4','url':'media/screenshots/screenshot3.png'}],_().precache(L),function(t){const s=_();!function(t,s,a){let n;if("string"==typeof t){const e=new URL(t,location.href);n=new v((({url:t})=>t.href===e.href),s,a)}else if(t instanceof RegExp)n=new C(t,s,a);else if("function"==typeof t)n=new v(t,s,a);else{if(!(t instanceof v))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=t}(q||(q=new b,q.addFetchListener(),q.addCacheListener()),q).registerRoute(n)}(new U(s,t))}(undefined)})()})();
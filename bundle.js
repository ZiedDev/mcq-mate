/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@pdftron/pdfjs-express/webviewer.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/@pdftron/pdfjs-express/webviewer.min.js ***!
  \**************************************************************/
/***/ ((module) => {

!function(e,t){if(true)module.exports=t();else { var o, n; }}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(2),e.exports=n(6)},function(e,t,n){(function(o,i){var r,a;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o,i){"object"==s(t)&&void 0!==e?i():void 0===(a="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=a)}(0,(function(){"use strict";function e(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}function t(){}function n(e){if(!(this instanceof n))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function r(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,n._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void c(t.promise,e)}a(t.promise,o)}else(1===e._state?a:c)(t.promise,e._value)}))):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==s(t)||"function"==typeof t)){var o=t.then;if(t instanceof n)return e._state=3,e._value=t,void l(e);if("function"==typeof o)return void d(function(e,t){return function(){e.apply(t,arguments)}}(o,t),e)}e._state=1,e._value=t,l(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&n._immediateFn((function(){e._handled||n._unhandledRejectionFn(e._value)}));for(var t=0,o=e._deferreds.length;o>t;t++)r(e,e._deferreds[t]);e._deferreds=null}function d(e,t){var n=!1;try{e((function(e){n||(n=!0,a(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(e){if(n)return;n=!0,c(t,e)}}var u=setTimeout;n.prototype.catch=function(e){return this.then(null,e)},n.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,n,o)),o},n.prototype.finally=e,n.all=function(e){return new n((function(t,n){function o(e,a){try{if(a&&("object"==s(a)||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,(function(t){o(e,t)}),n)}i[e]=a,0==--r&&t(i)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var r=i.length,a=0;i.length>a;a++)o(a,i[a])}))},n.resolve=function(e){return e&&"object"==s(e)&&e.constructor===n?e:new n((function(t){t(e)}))},n.reject=function(e){return new n((function(t,n){n(e)}))},n.race=function(e){return new n((function(t,n){for(var o=0,i=e.length;i>o;o++)e[o].then(t,n)}))},n._immediateFn="function"==typeof o&&function(e){o(e)}||function(e){u(e,0)},n._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var f=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw Error("unable to locate global object")}();"Promise"in f?f.Promise.prototype.finally||(f.Promise.prototype.finally=e):f.Promise=n}))}).call(this,n(3).setImmediate,n(0))},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,i,r,a,s,c=1,l={},d=!1,u=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){h(e.data)},o=function(e){r.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(i=u.documentElement,o=function(e){var t=u.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):o=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),o=function(t){e.postMessage(a+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return l[c]=i,o(c),c++},f.clearImmediate=p}function p(e){delete l[e]}function h(e){if(d)setTimeout(h,0,e);else{var t=l[e];if(t){d=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),d=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(5))},function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,l=[],d=!1,u=-1;function f(){d&&c&&(d=!1,c.length?l=c.concat(l):u=-1,l.length&&p())}function p(){if(!d){var e=s(f);d=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,d=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||d||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t),n.d(t,"getInstance",(function(){return w}));var o={ASM:"asm",WASM:"ems",JS_WORKER:"jsworker",THREADED_WASM:"wasm-threads"};function i(e,t){if("string"!=typeof e||!t)return e;var n=t.substr(0,t.lastIndexOf("/"));return/^(\/|%2F|[a-z0-9-]+:)/i.test(e)?e:n+"/"+e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={},l=0;window.isPdfjs=!0,"undefined"==typeof console&&(window.console={log:function(){},warn:function(){},error:function(){}});var d=function(){for(var e=1;e<arguments.length;e++)for(var t=Object.keys(arguments[e]),n=0;n<t.length;n++)arguments[0][t[n]]=arguments[e][t[n]];return arguments[0]},u=function(e){var t=[];return e.forEach((function(e){t.push(e)})),t},f=function(e,t){var n;try{n=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0})}catch(o){(n=document.createEvent("Event")).initEvent(e,!0,!0),n.detail=t}return n};window.PDFNet&&!c.skipPDFNetWebViewerWarning&&console.warn("PDFNet.js and WebViewer.js have been included in the same context. See https://www.pdftron.com/kb_same_context for an explanation of why this could be an error in your application.");var p=new Map,h=new Map;c.WebViewer=function(e,t){var n=this;if(h.get(t))throw new Error("Two instances of WebViewer were created on the same HTML element. Please create a new element for each instance of WebViewer");h.set(t,!0);t.addEventListener("ready",(function e(){p.get(t).instance=n.getCompleteInstance(),t.removeEventListener("ready",e)})),this._validateOptions(e);var o=e.webviewerServerURL||e.pdftronServer;e.fullAPI&&o&&(e.forceClientSideInit||console.warn("The fullAPI and webviewerServerURL options have both been set so the forceClientSideInit option is now enabled. This means that WebViewer will switch to client side rendering and processing to allow use of the full API."),e.forceClientSideInit=!0),this.options=d({},c.WebViewer.Options,e);var i=this.options.path.length-1;i>0&&"/"!==this.options.path[i]&&(this.options.path+="/"),this.options.uiPath=this.options.path+this.options.uiPath,t||console.error("ViewerElement is not defined. This may be caused by calling the WebViewer constructor before the DOM is loaded, or an invalid selector. Please see http://r.pdftron.com/guides/quick-start for an example."),this.element=t,this.element.style.overflow="hidden";var r=this;this.messageHandler=function(t){if("requestl"===t.data&&t.source&&t.source.postMessage({type:"responsel",value:e.l||e.licenseKey},"*"),"requestConfig"===t.data.type&&t.data.id===r.id&&t.source){var n=e.config?r._correctRelativePath(e.config):"";t.source.postMessage({type:"responseConfig",value:n},"*")}},window.addEventListener("message",this.messageHandler,!1),this.options.autoCreate&&this.create()};var m={licenseKey:void 0,enableAzureWorkaround:!1,isAdminUser:!1,isReadOnly:!1};c.WebViewer.prototype={version:"8.7.4",create:function(){if(this.options.initialDoc){var e=this._correctRelativePath(this.options.initialDoc);e=encodeURIComponent(JSON.stringify(e)),this.options.initialDoc=e}this._create()},_create:function(){this.id=++l,void 0===this._trigger&&(this._trigger=function(e,t){var n=f(e,t);this.element.dispatchEvent(n)});var e=this.options.type.replace(" ","").split(",");e.length<1&&(e[0]="html5"),this._createViewer(e)},_validateOptions:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var o=t[n];o in d({},m,c.WebViewer.Options)||console.warn("".concat(o," is not a valid option name. See http://r.pdftron.com/api/options_anchor for all available options."))}var i=e.webviewerServerURL||e.pdftronServer;!e.enableRedaction||e.fullAPI||i||console.warn("FullAPI or WebViewer Server is needed to apply redactions")},_notSupportedMobile:function(){var e=document.createElement("div");e.id="webviewer-browser-unsupported",e.textContent="PDF document viewing is not supported by this browser.",this.element.appendChild(e)},_createViewer:function(e){var t,n=this;if(n.selectedType=null,this.isMobileDevice()){if(this.options.documentType&&"xod"!==this.options.documentType&&!this._testWebAssembly())return void this._notSupportedMobile();if(e=Array("html5Mobile"),n.selectedType="html5Mobile",this.options.mobileRedirect)return t=this.options.uiPath+this._getHTML5OptionsURL(),void(window.location=t)}for(var o=!1,i=!1,r=0;r<e.length;r++){if("html5mobile"===e[r].toLowerCase()){if(this.options.documentType&&"xod"!==this.options.documentType&&!this._testWebAssembly())continue;if(o=!0,n._testHTML5()){if(this.options.mobileRedirect)return n.selectedType="html5Mobile",t=this.options.uiPath+this._getHTML5OptionsURL(),void(window.location=t);if(this.options.xdomainProxyUrl||n.isSameOrigin(decodeURIComponent(n.options.initialDoc))||n._testCORS()){n.selectedType="html5Mobile";break}i=!0}}if("html5"===e[r].toLowerCase()&&(o=!0,n._testHTML5())){var a=n.isSameOrigin(decodeURIComponent(n.options.initialDoc));if(this.options.xdomainProxyUrl||a||n._testCORS()){n.selectedType="html5";break}i=!0}}if("html5"===n.selectedType)n._createHTML5();else if("html5Mobile"===n.selectedType)n._createHTML5Mobile();else{var s;if(i?s="This browser does not support cross origin requests. Please configure xdomain to support CORS.":o&&(s="Please use an HTML5 compatible browser."),s){var c=document.createElement("div");c.id="webviewer-browser-unsupported",c.textContent=s,n.element.appendChild(c)}}},_viewerLoaded:function(e){this._trigger("ready");try{var t=e.contentWindow;if(t.postMessage({type:"viewerLoaded"},"*"),void 0!==this.options.encryption){var n=decodeURIComponent(this.options.initialDoc);this.options.initialDoc&&(n=JSON.parse(n));var o={decrypt:t.Core.Encryption.decrypt,decryptOptions:this.options.encryption,documentId:this.options.documentId,extension:"xod"};this.getInstance().loadDocument(n,o)}}catch(e){console.warn("Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See http://r.pdftron.com/kb_cross_origin for more information.")}},_getHTML5OptionsURL:function(){var e,t,n,o=this.options,i=o.webviewerServerURL||o.pdftronServer,r="";if(o.initialDoc&&(r+="#d=".concat(o.initialDoc)),void 0===o.backendType&&(o.backendType=o.pdfBackend),o.documentType&&"xod"===o.documentType&&(e=o.documentType),o.preloadWorker&&"xod"===o.preloadWorker&&(e=o.preloadWorker),o.extension&&(e=o.extension),e&&(r+="&extension=".concat(e)),o.documentType&&"xod"!==o.documentType&&(t=o.documentType),o.preloadWorker&&"xod"!==o.preloadWorker&&(t=o.preloadWorker),t&&(r+="&preloadWorker=".concat(t)),o.backendType&&(r+="&pdf=".concat(o.backendType,"&office=").concat(o.backendType,"&legacyOffice=").concat(o.backendType)),o.filename&&(r+="&filename=".concat(o.filename)),void 0!==o.streaming&&(r+="&streaming=".concat(o.streaming)),o.externalPath){var a=this._correctRelativePath(o.externalPath);a=encodeURIComponent(a),r+="&p=".concat(a)}if(o.encryption&&(r+="&auto_load=false"),o.enableAnnotations&&(r+="&a=1"),o.disabledElements){var s=encodeURIComponent(o.disabledElements.join(","));r+="&disabledElements=".concat(s)}if(o.serverUrl){var c=this._correctRelativePath(o.serverUrl);c=encodeURIComponent(c),r+="&server_url=".concat(c)}if(o.serverUrlHeaders&&(r+="&serverUrlHeaders=".concat(JSON.stringify(o.serverUrlHeaders))),o.documentId&&(r+="&did=".concat(o.documentId)),o.css){var l=this._correctRelativePath(o.css);l=encodeURIComponent(l),r+="&css=".concat(l)}if(o.disableI18n&&(r+="&disableI18n=1"),o.enableOfflineMode&&(r+="&offline=1"),o.startOffline&&(r+="&startOffline=1"),(o.enableReadOnlyMode||o.isReadOnly)&&(r+="&readonly=1"),o.hideAnnotationPanel&&(r+="&hideAnnotationPanel=1"),o.disableToolGroupReordering&&(r+="&disableToolGroupReordering=1"),void 0!==o.annotationUser&&(r+="&user=".concat(o.annotationUser)),void 0===o.annotationAdmin&&void 0===o.isAdminUser||(r+="&admin=".concat(o.annotationAdmin||o.isAdminUser?1:0)),void 0!==o.custom&&(r+="&custom=".concat(encodeURIComponent(o.custom))),void 0===o.showLocalFilePicker&&void 0===o.enableFilePicker||(r+="&filepicker=".concat(o.showLocalFilePicker||o.enableFilePicker?1:0)),void 0!==o.fullAPI){if(o.fullAPI)throw new Error('"fullAPI" is not a valid constuctor option for PDF.js Express. Please make sure you are referring to the proper documentation (https://pdfjs.express/documentation)');r+="&pdfnet=".concat(o.fullAPI?1:0)}(void 0!==o.enableRedaction&&(r+="&enableRedaction=".concat(o.enableRedaction?1:0)),void 0!==o.disableVirtualDisplayMode&&(r+="&disableVirtualDisplayMode=".concat(o.disableVirtualDisplayMode?1:0)),void 0!==o.enableMeasurement&&(r+="&enableMeasurement=".concat(o.enableMeasurement?1:0)),void 0!==o.showToolbarControl&&(r+="&toolbar=".concat(o.showToolbarControl?"true":"false")),void 0!==o.showPageHistoryButtons&&(r+="&pageHistory=".concat(o.showPageHistoryButtons?1:0)),void 0!==o.notesInLeftPanel&&(r+="&notesInLeftPanel=".concat(o.notesInLeftPanel?1:0)),void 0!==o.xdomainProxyUrl)&&(n="string"==typeof o.xdomainProxyUrl?{url:o.xdomainProxyUrl}:o.xdomainProxyUrl,r+="&xdomain_urls=".concat(encodeURIComponent(JSON.stringify(n))));return(o.azureWorkaround||o.enableAzureWorkaround)&&(r+="&azureWorkaround=1"),o.enableOptimizedWorkers||(r+="&enableOptimizedWorkers=0"),o.useDownloader||(r+="&useDownloader=0"),o.disableWebsockets&&(r+="&disableWebsockets=1"),o.disableStreaming&&(r+="&disableStreaming=1"),o.forceClientSideInit&&(r+="&forceClientSideInit=1"),o.loadAsPDF&&(r+="&loadAsPDF=1"),void 0!==o.workerTransportPromise&&(r+="&useSharedWorker=".concat(o.workerTransportPromise?"true":"false")),void 0!==i&&i&&(r+="&webviewerServerURL=".concat(encodeURIComponent(i))),o.fallbackToClientSide&&(r+="&fallbackToClientSide=1"),void 0!==o.singleServerMode&&(r+="&singleServerMode=".concat(o.singleServerMode?"true":"false")),void 0!==o.accessibleMode&&(r+="&accessibleMode=".concat(o.accessibleMode?1:0)),o.disableLogs&&(r+="&disableLogs=1"),o.enableViewStateAnnotations&&(r+="&enableViewStateAnnotations=1"),o.disableFlattenedAnnotations&&(r+="&disableFlattenedAnnotations=1"),o.highContrastMode&&(r+="&highContrastMode=1"),void 0!==o.selectAnnotationOnCreation&&(r+="&selectAnnotationOnCreation=".concat(o.selectAnnotationOnCreation?1:0)),void 0!==o.autoFocusNoteOnAnnotationSelection&&(r+="&autoFocusNoteOnAnnotationSelection=".concat(o.autoFocusNoteOnAnnotationSelection?1:0)),r+="&id=".concat(this.id),(r+="&basePath=".concat(encodeURIComponent(window.location.pathname))).length>0&&"&"===r[0]&&(r="#".concat(r.slice(1))),r+="&webViewerJSVersion=".concat(this.version)},setInstanceData:function(e){p.set(this.element,{iframe:e,l:this.options.l||this.options.licenseKey,workerTransportPromise:this.options.workerTransportPromise})},_createHTML5:function(){var e=this,t=this.options.uiPath+this._getHTML5OptionsURL(),n=document.createElement("iframe");this.setInstanceData(n),n.id="webviewer-".concat(this.id),n.src=t,n.title="webviewer",n.frameBorder=0,n.width="100%",n.height="100%",n.setAttribute("allowfullscreen",!0),n.setAttribute("webkitallowfullscreen",!0),n.setAttribute("mozallowfullscreen",!0),this.iframe=n,this.options.backgroundColor&&n.setAttribute("data-bgcolor",this.options.backgroundColor),this.options.assetPath&&n.setAttribute("data-assetpath",encodeURIComponent(this.options.assetPath)),this.element.appendChild(n);window.addEventListener("message",(function t(n){if("viewerLoaded"===n.data.type&&n.data.id===e.id)try{e.instance=e.iframe.contentWindow.instance}catch(e){}finally{window.removeEventListener("message",t),e._viewerLoaded(e.iframe)}}))},_createHTML5Mobile:function(){var e=this,t=this.options.uiPath+this._getHTML5OptionsURL(),n=document.createElement("iframe");this.setInstanceData(n),n.id="webviewer-".concat(this.id),n.src=t,n.frameborder=0,this.options.assetPath&&n.setAttribute("data-assetpath",encodeURIComponent(this.options.assetPath)),n.style.width="100%",n.style.height="100%",this.iframe=n,this.element.appendChild(n);window.addEventListener("message",(function t(n){if("viewerLoaded"===n.data.type&&n.data.id===e.id)try{e.instance=e.iframe.contentWindow.instance}catch(e){}finally{window.removeEventListener("message",t),e._viewerLoaded(e.iframe)}}))},dispose:function(){var e=this;return new Promise((function(t){p.delete(e.element),h.delete(e.element),window.removeEventListener("message",e.messageHandler),e.iframe.removeEventListener("load",e.loadListener),e.iframe=null,console.clear(),e.instance.Core.documentViewer.closeDocument().then((function(){t()}))}))},getInstance:function(){return this.instance},setCompleteInstance:function(e){this.completeInstance=e},getCompleteInstance:function(){return this.completeInstance},_correctRelativePath:function(e){var t=window.location.pathname;return Array.isArray(e)?e.map((function(e){return i(e,t)})):i(e,t)},_testHTML5:function(){try{var e=document.createElement("canvas");return e&&e.getContext("2d")}catch(e){return!1}},_testWebAssembly:function(){return!(!window.WebAssembly||!window.WebAssembly.validate)},_testCORS:function(){return"XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest},isIE:function(){var e=navigator.userAgent.toLowerCase(),t=/(msie) ([\w.]+)/.exec(e)||/(trident)(?:.*? rv:([\w.]+)|)/.exec(e);return t?parseInt(t[2],10):t},isMobileDevice:function(){return!this.isIE()&&(0===this.scrollbarWidth()&&navigator.userAgent.match(/Edge/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Touch/i)||navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/Silk/i))},scrollbarWidth:function(){var e=document.createElement("div");e.style.cssText="width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},isSameOrigin:function(e){var t=window.location,n=document.createElement("a");n.href=e,""===n.host&&(n.href=n.href);var o=window.location.port,i=n.port;return"http:"===n.protocol?(i=i||"80",o=o||"80"):"https:"===n.protocol&&(i=i||"443",o=o||"443"),n.hostname===t.hostname&&n.protocol===t.protocol&&i===o}},c.WebViewer.Options={initialDoc:void 0,annotationAdmin:void 0,isAdminUser:void 0,annotationUser:void 0,assetPath:void 0,autoCreate:!0,autoFocusNoteOnAnnotationSelection:!0,azureWorkaround:!1,additionalTranslations:void 0,enableAzureWorkaround:!1,enableOptimizedWorkers:!0,backgroundColor:void 0,backendType:void 0,css:void 0,config:void 0,custom:void 0,documentId:void 0,documentType:void 0,preloadWorker:void 0,extension:void 0,enableAnnotations:!0,filename:void 0,disableI18n:!1,disabledElements:void 0,disableWebsockets:!1,enableOfflineMode:!1,enableReadOnlyMode:!1,isReadOnly:!1,enableRedaction:!1,disableVirtualDisplayMode:!1,enableMeasurement:!1,encryption:void 0,externalPath:void 0,hideAnnotationPanel:!1,disableToolGroupReordering:!1,uiPath:"./ui/index.html",l:void 0,licenseKey:void 0,mobileRedirect:!1,path:"",pdfBackend:void 0,webviewerServerURL:void 0,fallbackToClientSide:!1,singleServerMode:!1,fullAPI:!1,preloadPDFWorker:!0,serverUrl:void 0,serverUrlHeaders:void 0,showLocalFilePicker:!1,enableFilePicker:!1,showPageHistoryButtons:!0,showToolbarControl:void 0,startOffline:!1,streaming:void 0,type:"html5",useDownloader:!0,workerTransportPromise:void 0,xdomainProxyUrl:void 0,ui:void 0,forceClientSideInit:!1,loadAsPDF:!1,accessibleMode:void 0,disableLogs:!1,enableViewStateAnnotations:!1,highContrastMode:!1,selectAnnotationOnCreation:!1,notesInLeftPanel:!1,documentXFDFRetriever:void 0,disableFlattenedAnnotations:!1,disableStreaming:!1};var v=function(e,t){return new Promise((function(n,o){e.l=e.l||e.licenseKey,e.azureWorkaround=e.azureWorkaround||e.enableAzureWorkaround,e.annotationAdmin=e.annotationAdmin||e.isAdminUser,e.enableReadOnlyMode=e.enableReadOnlyMode||e.isReadOnly,e.showLocalFilePicker=e.showLocalFilePicker||e.enableFilePicker;t.addEventListener("ready",(function r(){t.removeEventListener("ready",r);try{var c=t.querySelector("iframe").contentWindow;if(void 0===c.Tools)throw new Error("Viewer isn't instantiated correctly. It could be caused by the 'path' option in the WebViewer constructor not being defined correctly. The 'path' option should be relative to the HTML file you're loading the script on and the lib folder needs to be publicly accessible.");var l=i.getInstance(),u={iframeWindow:c,dispose:i.dispose.bind(i)},f=d({},l,a(s({},l.UI_NAMESPACE_KEY,a(a({},l[l.UI_NAMESPACE_KEY]),u)),u));i.setCompleteInstance(f);var p=Promise.resolve();if(e.documentXFDFRetriever&&(p=f[l.CORE_NAMESPACE_KEY].documentViewer.setDocumentXFDFRetriever(e.documentXFDFRetriever)),e.additionalTranslations){var h=e.additionalTranslations;f[l.UI_NAMESPACE_KEY].setTranslations(h.language,h.translations)}p.then((function(){n(f)}))}catch(t){if("config"in e&&""!==e.config)return n();o("Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See https://www.pdftron.com/kb_cross_origin for more information.")}}));var i=new c.WebViewer(e,t)}))},b=function(e){for(var t=u(p),n=0;n<t.length;n++){var o=t[n];if(o.iframe===e)return o}return null};v.l=function(e){var t=b(e);return t&&t.l},v.workerTransportPromise=function(e){var t=b(e);return t&&t.workerTransportPromise},v.WorkerTypes={ALL:"all",OFFICE:"office",LEGACY_OFFICE:"legacyOffice",PDF:"pdf",CONTENT_EDIT:"contentEdit"},v.BackendTypes=o;var w=function(e){var t=u(p);if(!t.length||!t.filter((function(e){return e.instance})).length)return console.warn("WebViewer.getInstance() was called before any instances were available"),null;if(t.length>1&&!e)throw new Error("More than one instance of WebViewer was found, and no element was passed into getInstance(). Please specify which instance you want to get.");return e?(p.get(e)||{}).instance:(t[0]||{}).instance};v.getInstance=w,window.WebViewer=v;t.default=v}])}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal-container {
    position: fixed;
    z-index: 10000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    position: relative;
    z-index: 100;
    padding: 2rem;
    background-color: #E6EDF3;
    color: #0D1117;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    animation: zoomIn forwards 250ms ease-out;
}

@media only screen and (max-width: 425px) {
    .modal {
        padding: 1rem;
    }

    .modal h2 {
        font-size: 1.4em;
    }
}

.modal h1,
.modal h2 {
    text-align: center;
    color: #0D1117;
}

.modal>div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.modal>.modal-buttons-container {
    justify-content: center;
    gap: 1rem;
}

.modal>.modal-buttons-container>button {
    cursor: pointer;

    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #0D1117;

    font-size: large;
    font-weight: bold;

    outline: none;
    transition: background-color 100ms ease;
}

@media (pointer: fine) {
    .modal>.modal-buttons-container>button:hover {
        background-color: #21262D;
    }
}

.modal input[type="checkbox"] {
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: solid 3pt #0D1117;

    font-size: large;

    outline: none;
}

.modal>button {
    cursor: pointer;
}

.backdrop {
    position: absolute;
    z-index: 95;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

    animation: fadeId 250ms forwards;
}

@keyframes fadeId {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes zoomIn {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}

@keyframes zoomOut {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(0);
    }
}

@media screen and (max-width: 475px) {

    .modal>div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,cAAc;IACd,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;;IAEP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,mBAAmB;;IAEnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;IAET,yCAAyC;AAC7C;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,gBAAgB;IACpB;AACJ;;AAEA;;IAEI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,qBAAqB;IACrB,YAAY;IACZ,yBAAyB;;IAEzB,gBAAgB;IAChB,iBAAiB;;IAEjB,aAAa;IACb,uCAAuC;AAC3C;;AAEA;IACI;QACI,yBAAyB;IAC7B;AACJ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,qBAAqB;IACrB,yBAAyB;;IAEzB,gBAAgB;;IAEhB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,oCAAoC;;IAEpC,gCAAgC;AACpC;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA;;IAEI;QACI,WAAW;QACX,aAAa;QACb,mBAAmB;QACnB,8BAA8B;QAC9B,eAAe;QACf,SAAS;IACb;AACJ","sourcesContent":[".modal-container {\r\n    position: fixed;\r\n    z-index: 10000;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal {\r\n    position: relative;\r\n    z-index: 100;\r\n    padding: 2rem;\r\n    background-color: #E6EDF3;\r\n    color: #0D1117;\r\n    border-radius: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n\r\n    animation: zoomIn forwards 250ms ease-out;\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n    .modal {\r\n        padding: 1rem;\r\n    }\r\n\r\n    .modal h2 {\r\n        font-size: 1.4em;\r\n    }\r\n}\r\n\r\n.modal h1,\r\n.modal h2 {\r\n    text-align: center;\r\n    color: #0D1117;\r\n}\r\n\r\n.modal>div {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n}\r\n\r\n.modal>.modal-buttons-container {\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.modal>.modal-buttons-container>button {\r\n    cursor: pointer;\r\n\r\n    padding: 1rem;\r\n    border-radius: 0.5rem;\r\n    border: none;\r\n    background-color: #0D1117;\r\n\r\n    font-size: large;\r\n    font-weight: bold;\r\n\r\n    outline: none;\r\n    transition: background-color 100ms ease;\r\n}\r\n\r\n@media (pointer: fine) {\r\n    .modal>.modal-buttons-container>button:hover {\r\n        background-color: #21262D;\r\n    }\r\n}\r\n\r\n.modal input[type=\"checkbox\"] {\r\n    height: 2rem;\r\n    width: 2rem;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    border: solid 3pt #0D1117;\r\n\r\n    font-size: large;\r\n\r\n    outline: none;\r\n}\r\n\r\n.modal>button {\r\n    cursor: pointer;\r\n}\r\n\r\n.backdrop {\r\n    position: absolute;\r\n    z-index: 95;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n\r\n    animation: fadeId 250ms forwards;\r\n}\r\n\r\n@keyframes fadeId {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeOut {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n\r\n    to {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes zoomIn {\r\n    from {\r\n        transform: scale(0);\r\n    }\r\n\r\n    to {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes zoomOut {\r\n    from {\r\n        transform: scale(1);\r\n    }\r\n\r\n    to {\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 475px) {\r\n\r\n    .modal>div {\r\n        width: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        flex-wrap: wrap;\r\n        gap: 1rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/js-confetti/dist/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/js-confetti/dist/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function normalizeComputedStyleValue(string) {
  // "250px" --> 250
  return +string.replace(/px/, '');
}

function fixDPR(canvas) {
  var dpr = window.devicePixelRatio;
  var computedStyles = getComputedStyle(canvas);
  var width = normalizeComputedStyleValue(computedStyles.getPropertyValue('width'));
  var height = normalizeComputedStyleValue(computedStyles.getPropertyValue('height'));
  canvas.setAttribute('width', (width * dpr).toString());
  canvas.setAttribute('height', (height * dpr).toString());
}

function generateRandomNumber(min, max) {
  var fractionDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);
}

function generateRandomArrayElement(arr) {
  return arr[generateRandomNumber(0, arr.length)];
}

var FREE_FALLING_OBJECT_ACCELERATION = 0.00125;
var MIN_DRAG_FORCE_COEFFICIENT = 0.0005;
var MAX_DRAG_FORCE_COEFFICIENT = 0.0009;
var ROTATION_SLOWDOWN_ACCELERATION = 0.00001;
var INITIAL_SHAPE_RADIUS = 6;
var INITIAL_EMOJI_SIZE = 80;
var MIN_INITIAL_CONFETTI_SPEED = 0.9;
var MAX_INITIAL_CONFETTI_SPEED = 1.7;
var MIN_FINAL_X_CONFETTI_SPEED = 0.2;
var MAX_FINAL_X_CONFETTI_SPEED = 0.6;
var MIN_INITIAL_ROTATION_SPEED = 0.03;
var MAX_INITIAL_ROTATION_SPEED = 0.07;
var MIN_CONFETTI_ANGLE = 15;
var MAX_CONFETTI_ANGLE = 82;
var MAX_CONFETTI_POSITION_SHIFT = 150;
var SHAPE_VISIBILITY_TRESHOLD = 100;
var DEFAULT_CONFETTI_NUMBER = 250;
var DEFAULT_EMOJIS_NUMBER = 40;
var DEFAULT_CONFETTI_COLORS = ['#fcf403', '#62fc03', '#f4fc03', '#03e7fc', '#03fca5', '#a503fc', '#fc03ad', '#fc03c2'];

function getWindowWidthCoefficient(canvasWidth) {
  var HD_SCREEN_WIDTH = 1920;
  return Math.log(canvasWidth) / Math.log(HD_SCREEN_WIDTH);
}

var ConfettiShape = /*#__PURE__*/function () {
  function ConfettiShape(args) {
    _classCallCheck(this, ConfettiShape);

    var initialPosition = args.initialPosition,
        direction = args.direction,
        confettiRadius = args.confettiRadius,
        confettiColors = args.confettiColors,
        emojis = args.emojis,
        emojiSize = args.emojiSize,
        canvasWidth = args.canvasWidth;
    var randomConfettiSpeed = generateRandomNumber(MIN_INITIAL_CONFETTI_SPEED, MAX_INITIAL_CONFETTI_SPEED, 3);
    var initialSpeed = randomConfettiSpeed * getWindowWidthCoefficient(canvasWidth);
    this.confettiSpeed = {
      x: initialSpeed,
      y: initialSpeed
    };
    this.finalConfettiSpeedX = generateRandomNumber(MIN_FINAL_X_CONFETTI_SPEED, MAX_FINAL_X_CONFETTI_SPEED, 3);
    this.rotationSpeed = emojis.length ? 0.01 : generateRandomNumber(MIN_INITIAL_ROTATION_SPEED, MAX_INITIAL_ROTATION_SPEED, 3) * getWindowWidthCoefficient(canvasWidth);
    this.dragForceCoefficient = generateRandomNumber(MIN_DRAG_FORCE_COEFFICIENT, MAX_DRAG_FORCE_COEFFICIENT, 6);
    this.radius = {
      x: confettiRadius,
      y: confettiRadius
    };
    this.initialRadius = confettiRadius;
    this.rotationAngle = direction === 'left' ? generateRandomNumber(0, 0.2, 3) : generateRandomNumber(-0.2, 0, 3);
    this.emojiSize = emojiSize;
    this.emojiRotationAngle = generateRandomNumber(0, 2 * Math.PI);
    this.radiusYUpdateDirection = 'down';
    var angle = direction === 'left' ? generateRandomNumber(MAX_CONFETTI_ANGLE, MIN_CONFETTI_ANGLE) * Math.PI / 180 : generateRandomNumber(-MIN_CONFETTI_ANGLE, -MAX_CONFETTI_ANGLE) * Math.PI / 180;
    this.absCos = Math.abs(Math.cos(angle));
    this.absSin = Math.abs(Math.sin(angle));
    var positionShift = generateRandomNumber(-MAX_CONFETTI_POSITION_SHIFT, 0);
    var shiftedInitialPosition = {
      x: initialPosition.x + (direction === 'left' ? -positionShift : positionShift) * this.absCos,
      y: initialPosition.y - positionShift * this.absSin
    };
    this.currentPosition = Object.assign({}, shiftedInitialPosition);
    this.initialPosition = Object.assign({}, shiftedInitialPosition);
    this.color = emojis.length ? null : generateRandomArrayElement(confettiColors);
    this.emoji = emojis.length ? generateRandomArrayElement(emojis) : null;
    this.createdAt = new Date().getTime();
    this.direction = direction;
  }

  _createClass(ConfettiShape, [{
    key: "draw",
    value: function draw(canvasContext) {
      var currentPosition = this.currentPosition,
          radius = this.radius,
          color = this.color,
          emoji = this.emoji,
          rotationAngle = this.rotationAngle,
          emojiRotationAngle = this.emojiRotationAngle,
          emojiSize = this.emojiSize;
      var dpr = window.devicePixelRatio;

      if (color) {
        canvasContext.fillStyle = color;
        canvasContext.beginPath();
        canvasContext.ellipse(currentPosition.x * dpr, currentPosition.y * dpr, radius.x * dpr, radius.y * dpr, rotationAngle, 0, 2 * Math.PI);
        canvasContext.fill();
      } else if (emoji) {
        canvasContext.font = "".concat(emojiSize, "px serif");
        canvasContext.save();
        canvasContext.translate(dpr * currentPosition.x, dpr * currentPosition.y);
        canvasContext.rotate(emojiRotationAngle);
        canvasContext.textAlign = 'center';
        canvasContext.fillText(emoji, 0, 0);
        canvasContext.restore();
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(iterationTimeDelta, currentTime) {
      var confettiSpeed = this.confettiSpeed,
          dragForceCoefficient = this.dragForceCoefficient,
          finalConfettiSpeedX = this.finalConfettiSpeedX,
          radiusYUpdateDirection = this.radiusYUpdateDirection,
          rotationSpeed = this.rotationSpeed,
          createdAt = this.createdAt,
          direction = this.direction;
      var timeDeltaSinceCreation = currentTime - createdAt;
      if (confettiSpeed.x > finalConfettiSpeedX) this.confettiSpeed.x -= dragForceCoefficient * iterationTimeDelta;
      this.currentPosition.x += confettiSpeed.x * (direction === 'left' ? -this.absCos : this.absCos) * iterationTimeDelta;
      this.currentPosition.y = this.initialPosition.y - confettiSpeed.y * this.absSin * timeDeltaSinceCreation + FREE_FALLING_OBJECT_ACCELERATION * Math.pow(timeDeltaSinceCreation, 2) / 2;
      this.rotationSpeed -= this.emoji ? 0.0001 : ROTATION_SLOWDOWN_ACCELERATION * iterationTimeDelta;
      if (this.rotationSpeed < 0) this.rotationSpeed = 0; // no need to update rotation radius for emoji

      if (this.emoji) {
        this.emojiRotationAngle += this.rotationSpeed * iterationTimeDelta % (2 * Math.PI);
        return;
      }

      if (radiusYUpdateDirection === 'down') {
        this.radius.y -= iterationTimeDelta * rotationSpeed;

        if (this.radius.y <= 0) {
          this.radius.y = 0;
          this.radiusYUpdateDirection = 'up';
        }
      } else {
        this.radius.y += iterationTimeDelta * rotationSpeed;

        if (this.radius.y >= this.initialRadius) {
          this.radius.y = this.initialRadius;
          this.radiusYUpdateDirection = 'down';
        }
      }
    }
  }, {
    key: "getIsVisibleOnCanvas",
    value: function getIsVisibleOnCanvas(canvasHeight) {
      return this.currentPosition.y < canvasHeight + SHAPE_VISIBILITY_TRESHOLD;
    }
  }]);

  return ConfettiShape;
}();

function createCanvas() {
  var canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '1000';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);
  return canvas;
}

function normalizeConfettiConfig(confettiConfig) {
  var _confettiConfig$confe = confettiConfig.confettiRadius,
      confettiRadius = _confettiConfig$confe === void 0 ? INITIAL_SHAPE_RADIUS : _confettiConfig$confe,
      _confettiConfig$confe2 = confettiConfig.confettiNumber,
      confettiNumber = _confettiConfig$confe2 === void 0 ? confettiConfig.confettiesNumber || (confettiConfig.emojis ? DEFAULT_EMOJIS_NUMBER : DEFAULT_CONFETTI_NUMBER) : _confettiConfig$confe2,
      _confettiConfig$confe3 = confettiConfig.confettiColors,
      confettiColors = _confettiConfig$confe3 === void 0 ? DEFAULT_CONFETTI_COLORS : _confettiConfig$confe3,
      _confettiConfig$emoji = confettiConfig.emojis,
      emojis = _confettiConfig$emoji === void 0 ? confettiConfig.emojies || [] : _confettiConfig$emoji,
      _confettiConfig$emoji2 = confettiConfig.emojiSize,
      emojiSize = _confettiConfig$emoji2 === void 0 ? INITIAL_EMOJI_SIZE : _confettiConfig$emoji2; // deprecate wrong plural forms, used in early releases

  if (confettiConfig.emojies) console.error("emojies argument is deprecated, please use emojis instead");
  if (confettiConfig.confettiesNumber) console.error("confettiesNumber argument is deprecated, please use confettiNumber instead");
  return {
    confettiRadius: confettiRadius,
    confettiNumber: confettiNumber,
    confettiColors: confettiColors,
    emojis: emojis,
    emojiSize: emojiSize
  };
}

var ConfettiBatch = /*#__PURE__*/function () {
  function ConfettiBatch(canvasContext) {
    var _this = this;

    _classCallCheck(this, ConfettiBatch);

    this.canvasContext = canvasContext;
    this.shapes = [];
    this.promise = new Promise(function (completionCallback) {
      return _this.resolvePromise = completionCallback;
    });
  }

  _createClass(ConfettiBatch, [{
    key: "getBatchCompletePromise",
    value: function getBatchCompletePromise() {
      return this.promise;
    }
  }, {
    key: "addShapes",
    value: function addShapes() {
      var _this$shapes;

      (_this$shapes = this.shapes).push.apply(_this$shapes, arguments);
    }
  }, {
    key: "complete",
    value: function complete() {
      var _a;

      if (this.shapes.length) {
        return false;
      }

      (_a = this.resolvePromise) === null || _a === void 0 ? void 0 : _a.call(this);
      return true;
    }
  }, {
    key: "processShapes",
    value: function processShapes(time, canvasHeight, cleanupInvisibleShapes) {
      var _this2 = this;

      var timeDelta = time.timeDelta,
          currentTime = time.currentTime;
      this.shapes = this.shapes.filter(function (shape) {
        // Render the shapes in this batch
        shape.updatePosition(timeDelta, currentTime);
        shape.draw(_this2.canvasContext); // Only cleanup the shapes if we're being asked to

        if (!cleanupInvisibleShapes) {
          return true;
        }

        return shape.getIsVisibleOnCanvas(canvasHeight);
      });
    }
  }]);

  return ConfettiBatch;
}();

var JSConfetti = /*#__PURE__*/function () {
  function JSConfetti() {
    var jsConfettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, JSConfetti);

    this.activeConfettiBatches = [];
    this.canvas = jsConfettiConfig.canvas || createCanvas();
    this.canvasContext = this.canvas.getContext('2d');
    this.requestAnimationFrameRequested = false;
    this.lastUpdated = new Date().getTime();
    this.iterationIndex = 0;
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  _createClass(JSConfetti, [{
    key: "loop",
    value: function loop() {
      this.requestAnimationFrameRequested = false;
      fixDPR(this.canvas);
      var currentTime = new Date().getTime();
      var timeDelta = currentTime - this.lastUpdated;
      var canvasHeight = this.canvas.offsetHeight;
      var cleanupInvisibleShapes = this.iterationIndex % 10 === 0;
      this.activeConfettiBatches = this.activeConfettiBatches.filter(function (batch) {
        batch.processShapes({
          timeDelta: timeDelta,
          currentTime: currentTime
        }, canvasHeight, cleanupInvisibleShapes); // Do not remove invisible shapes on every iteration

        if (!cleanupInvisibleShapes) {
          return true;
        }

        return !batch.complete();
      });
      this.iterationIndex++;
      this.queueAnimationFrameIfNeeded(currentTime);
    }
  }, {
    key: "queueAnimationFrameIfNeeded",
    value: function queueAnimationFrameIfNeeded(currentTime) {
      if (this.requestAnimationFrameRequested) {
        // We already have a pended animation frame, so there is no more work
        return;
      }

      if (this.activeConfettiBatches.length < 1) {
        // No shapes to animate, so don't queue another frame
        return;
      }

      this.requestAnimationFrameRequested = true; // Capture the last updated time for animation

      this.lastUpdated = currentTime || new Date().getTime();
      requestAnimationFrame(this.loop);
    }
  }, {
    key: "addConfetti",
    value: function addConfetti() {
      var confettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _normalizeConfettiCon = normalizeConfettiConfig(confettiConfig),
          confettiRadius = _normalizeConfettiCon.confettiRadius,
          confettiNumber = _normalizeConfettiCon.confettiNumber,
          confettiColors = _normalizeConfettiCon.confettiColors,
          emojis = _normalizeConfettiCon.emojis,
          emojiSize = _normalizeConfettiCon.emojiSize; // Use the bounding rect rather tahn the canvas width / height, because
      // .width / .height are unset until a layout pass has been completed. Upon
      // confetti being immediately queued on a page load, this hasn't happened so
      // the default of 300x150 will be returned, causing an improper source point
      // for the confetti animation.


      var canvasRect = this.canvas.getBoundingClientRect();
      var canvasWidth = canvasRect.width;
      var canvasHeight = canvasRect.height;
      var yPosition = canvasHeight * 5 / 7;
      var leftConfettiPosition = {
        x: 0,
        y: yPosition
      };
      var rightConfettiPosition = {
        x: canvasWidth,
        y: yPosition
      };
      var confettiGroup = new ConfettiBatch(this.canvasContext);

      for (var i = 0; i < confettiNumber / 2; i++) {
        var confettiOnTheRight = new ConfettiShape({
          initialPosition: leftConfettiPosition,
          direction: 'right',
          confettiRadius: confettiRadius,
          confettiColors: confettiColors,
          confettiNumber: confettiNumber,
          emojis: emojis,
          emojiSize: emojiSize,
          canvasWidth: canvasWidth
        });
        var confettiOnTheLeft = new ConfettiShape({
          initialPosition: rightConfettiPosition,
          direction: 'left',
          confettiRadius: confettiRadius,
          confettiColors: confettiColors,
          confettiNumber: confettiNumber,
          emojis: emojis,
          emojiSize: emojiSize,
          canvasWidth: canvasWidth
        });
        confettiGroup.addShapes(confettiOnTheRight, confettiOnTheLeft);
      }

      this.activeConfettiBatches.push(confettiGroup);
      this.queueAnimationFrameIfNeeded();
      return confettiGroup.getBatchCompletePromise();
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.activeConfettiBatches = [];
    }
  }, {
    key: "destroyCanvas",
    value: function destroyCanvas() {
      this.canvas.remove();
    }
  }]);

  return JSConfetti;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSConfetti);


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/generateElements.js":
/*!************************************!*\
  !*** ./src/js/generateElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateMainButton: () => (/* binding */ generateMainButton),
/* harmony export */   generateRandomImages: () => (/* binding */ generateRandomImages),
/* harmony export */   generateSideButton: () => (/* binding */ generateSideButton)
/* harmony export */ });
/* harmony import */ var _media_images_al_biology_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/images/al_biology.webp */ "./src/media/images/al_biology.webp");
/* harmony import */ var _media_images_al_chemistry_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/images/al_chemistry.webp */ "./src/media/images/al_chemistry.webp");
/* harmony import */ var _media_images_al_physics_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/images/al_physics.webp */ "./src/media/images/al_physics.webp");
/* harmony import */ var _media_images_ol_biology_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/images/ol_biology.webp */ "./src/media/images/ol_biology.webp");
/* harmony import */ var _media_images_ol_chemistry_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media/images/ol_chemistry.webp */ "./src/media/images/ol_chemistry.webp");
/* harmony import */ var _media_images_ol_combined_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/images/ol_combined.webp */ "./src/media/images/ol_combined.webp");
/* harmony import */ var _media_images_ol_economics_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/images/ol_economics.webp */ "./src/media/images/ol_economics.webp");
/* harmony import */ var _media_images_ol_physics_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../media/images/ol_physics.webp */ "./src/media/images/ol_physics.webp");
/* harmony import */ var _media_images_cr_biology_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../media/images/cr_biology.webp */ "./src/media/images/cr_biology.webp");
/* harmony import */ var _media_images_cr_chemistry_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../media/images/cr_chemistry.webp */ "./src/media/images/cr_chemistry.webp");
/* harmony import */ var _media_images_cr_combined_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../media/images/cr_combined.webp */ "./src/media/images/cr_combined.webp");
/* harmony import */ var _media_images_cr_physics_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../media/images/cr_physics.webp */ "./src/media/images/cr_physics.webp");
/* harmony import */ var _media_images_Random_1_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../media/images/Random/1.webp */ "./src/media/images/Random/1.webp");
/* harmony import */ var _media_images_Random_2_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../media/images/Random/2.webp */ "./src/media/images/Random/2.webp");
/* harmony import */ var _media_images_Random_3_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../media/images/Random/3.webp */ "./src/media/images/Random/3.webp");
/* harmony import */ var _media_images_Random_4_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../media/images/Random/4.webp */ "./src/media/images/Random/4.webp");
/* harmony import */ var _media_images_Random_5_webp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../media/images/Random/5.webp */ "./src/media/images/Random/5.webp");
/* harmony import */ var _media_images_Random_6_webp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../media/images/Random/6.webp */ "./src/media/images/Random/6.webp");
/* harmony import */ var _media_images_Random_7_webp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../media/images/Random/7.webp */ "./src/media/images/Random/7.webp");
/* harmony import */ var _media_images_Random_8_webp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../media/images/Random/8.webp */ "./src/media/images/Random/8.webp");
/* harmony import */ var _media_images_Random_9_webp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../media/images/Random/9.webp */ "./src/media/images/Random/9.webp");
/* harmony import */ var _media_images_Random_10_webp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../media/images/Random/10.webp */ "./src/media/images/Random/10.webp");
/* harmony import */ var _media_images_Random_11_webp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../media/images/Random/11.webp */ "./src/media/images/Random/11.webp");
/* harmony import */ var _media_images_Random_12_webp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../media/images/Random/12.webp */ "./src/media/images/Random/12.webp");
/* harmony import */ var _media_images_Random_13_webp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../media/images/Random/13.webp */ "./src/media/images/Random/13.webp");
/* harmony import */ var _media_images_Random_14_webp__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../media/images/Random/14.webp */ "./src/media/images/Random/14.webp");






























const randomImages = {
    randomImage1: _media_images_Random_1_webp__WEBPACK_IMPORTED_MODULE_12__,
    randomImage2: _media_images_Random_2_webp__WEBPACK_IMPORTED_MODULE_13__,
    randomImage3: _media_images_Random_3_webp__WEBPACK_IMPORTED_MODULE_14__,
    randomImage4: _media_images_Random_4_webp__WEBPACK_IMPORTED_MODULE_15__,
    randomImage5: _media_images_Random_5_webp__WEBPACK_IMPORTED_MODULE_16__,
    randomImage6: _media_images_Random_6_webp__WEBPACK_IMPORTED_MODULE_17__,
    randomImage7: _media_images_Random_7_webp__WEBPACK_IMPORTED_MODULE_18__,
    randomImage8: _media_images_Random_8_webp__WEBPACK_IMPORTED_MODULE_19__,
    randomImage9: _media_images_Random_9_webp__WEBPACK_IMPORTED_MODULE_20__,
    randomImage10: _media_images_Random_10_webp__WEBPACK_IMPORTED_MODULE_21__,
    randomImage11: _media_images_Random_11_webp__WEBPACK_IMPORTED_MODULE_22__,
    randomImage12: _media_images_Random_12_webp__WEBPACK_IMPORTED_MODULE_23__,
    randomImage13: _media_images_Random_13_webp__WEBPACK_IMPORTED_MODULE_24__,
    randomImage14: _media_images_Random_14_webp__WEBPACK_IMPORTED_MODULE_25__,
};
const images = {
    al_biology: _media_images_al_biology_webp__WEBPACK_IMPORTED_MODULE_0__,
    al_chemistry: _media_images_al_chemistry_webp__WEBPACK_IMPORTED_MODULE_1__,
    al_physics: _media_images_al_physics_webp__WEBPACK_IMPORTED_MODULE_2__,
    ol_biology: _media_images_ol_biology_webp__WEBPACK_IMPORTED_MODULE_3__,
    ol_chemistry: _media_images_ol_chemistry_webp__WEBPACK_IMPORTED_MODULE_4__,
    ol_combined: _media_images_ol_combined_webp__WEBPACK_IMPORTED_MODULE_5__,
    ol_economics: _media_images_ol_economics_webp__WEBPACK_IMPORTED_MODULE_6__,
    ol_physics: _media_images_ol_physics_webp__WEBPACK_IMPORTED_MODULE_7__,
    cr_biology: _media_images_cr_biology_webp__WEBPACK_IMPORTED_MODULE_8__,
    cr_chemistry: _media_images_cr_chemistry_webp__WEBPACK_IMPORTED_MODULE_9__,
    cr_physics: _media_images_cr_physics_webp__WEBPACK_IMPORTED_MODULE_11__,
    cr_combined: _media_images_cr_combined_webp__WEBPACK_IMPORTED_MODULE_10__,
};

function generateSideButton({
    level,
    subject,
    year,
    session,
    variant,
    generateContainerCallback,
    removeContainerCallback = () => { },
    opened,
}) {
    const element = document.createElement("div");
    element.classList.add("side-container");
    element.id =
        variant == undefined
            ? session == undefined
                ? year == undefined
                    ? `side-${level}-${subject}`
                    : `side-${level}-${subject}-${year}`
                : `side-${level}-${subject}-${year}-${session}`
            : `side-${level}-${subject}-${year}-${session}-${variant}`;

    const buttonElement = document.createElement("div");
    buttonElement.id =
        variant == undefined
            ? session == undefined
                ? year == undefined
                    ? `side-${level}-button-${subject}`
                    : `side-${level}-button-${subject}-${year}`
                : `side-${level}-button-${subject}-${year}-${session}`
            : `side-${level}-button-${subject}-${year}-${session}-${variant}`;
    buttonElement.classList.add(`side-button`);
    buttonElement.classList.add(
        `side-button-${variant == undefined
            ? session == undefined
                ? year == undefined
                    ? "subject"
                    : "year"
                : "session"
            : "variant"
        }`
    );

    const arrowDownSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    arrowDownSvg.classList.add("side-button-arrow");
    arrowDownSvg.setAttribute("width", "32");
    arrowDownSvg.setAttribute("height", "32");
    arrowDownSvg.setAttribute("viewBox", "0 0 256 256");
    arrowDownSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    arrowDownSvg.innerHTML =
        '<path fill="currentColor" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />';
    const arrowUpSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    arrowUpSvg.classList.add("side-button-arrow");
    arrowUpSvg.setAttribute("width", "32");
    arrowUpSvg.setAttribute("height", "32");
    arrowUpSvg.setAttribute("viewBox", "0 0 256 256");
    arrowUpSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    arrowUpSvg.innerHTML =
        '<path fill="currentColor"d="M216.49 168.49a12 12 0 0 1-17 0L128 97l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0l80 80a12 12 0 0 1 0 17" />';
    if (opened) {
        arrowDownSvg.classList.add("hidden");
    } else {
        arrowUpSvg.classList.add("hidden");
    }

    if (variant == undefined) {
        buttonElement.appendChild(arrowDownSvg);
        buttonElement.appendChild(arrowUpSvg);
    }

    const title = document.createElement("div");
    title.textContent =
        variant == undefined
            ? session == undefined
                ? year == undefined
                    ? subject == "Combined"
                        ? "Combined Science"
                        : subject
                    : year
                : session == "m"
                    ? "Feb / Mar"
                    : session == "s"
                        ? "May / Jun"
                        : "Oct / Nov"
            : `Variant ${Number(variant) + 1}`;
    title.id =
        variant == undefined
            ? session == undefined
                ? year == undefined
                    ? `side-${level}-${subject}-title`
                    : `side-${level}-${subject}-${year}-title`
                : `side-${level}-${subject}-${year}-${session}-title`
            : `side-${level}-${subject}-${year}-${session}-${variant}-title`;

    buttonElement.appendChild(title);

    element.appendChild(buttonElement);
    if (variant == undefined) {
        const container = document.createElement("div");
        container.classList.add("side-container");
        if (!opened) {
            container.classList.add("collapsed");
        }
        container.id =
            session == undefined
                ? year == undefined
                    ? `side-${level}-${subject}-years-container`
                    : `side-${level}-${subject}-${year}-sessions-container`
                : `side-${level}-${subject}-${year}-${session}-variants-container`;

        const group = document.createElement("div");
        group.classList.add("side-group");
        group.id =
            session == undefined
                ? year == undefined
                    ? `side-${level}-${subject}-years`
                    : `side-${level}-${subject}-${year}-sessions`
                : `side-${level}-${subject}-${year}-${session}-variants`;

        container.appendChild(group);

        element.appendChild(container);

        if (opened) {
            let timeout = setTimeout(() => {
                generateContainerCallback();
                clearTimeout(timeout);
            }, 1);
        }

        arrowDownSvg.addEventListener("click", () => {
            arrowDownSvg.classList.add("hidden");
            arrowUpSvg.classList.remove("hidden");
            generateContainerCallback();
            container.classList.remove("collapsed");
        });

        arrowUpSvg.addEventListener("click", () => {
            arrowDownSvg.classList.remove("hidden");
            arrowUpSvg.classList.add("hidden");
            removeContainerCallback();
            container.classList.add("collapsed");
        });
    }

    return element;
}

function generateMainButton(
    level,
    subject,
    year,
    session,
    variant,
    randomImage
) {
    const elementContainer = document.createElement("div");
    elementContainer.classList.add("card-container");
    elementContainer.id =
        variant == undefined
            ? session == undefined
                ? year == undefined
                    ? `${level}-${subject}-card-container`
                    : `${level}-${subject}-${year}-card-container`
                : `${level}-${subject}-${year}-${session}-card-container`
            : `${level}-${subject}-${year}-${session}-${variant}-card-container`;

    const element = document.createElement("div");
    element.classList.add("card");
    element.id =
        variant == undefined
            ? session == undefined
                ? year == undefined
                    ? `${level}-${subject}-card`
                    : `${level}-${subject}-${year}-card`
                : `${level}-${subject}-${year}-${session}-card`
            : `${level}-${subject}-${year}-${session}-${variant}-card`;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const image = document.createElement("img");

    const imageIcon = document.createElement("div");
    imageIcon.classList.add("image-icon");
    if (subject == "Biology") {
        imageIcon.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M224 204h-12a92.1 92.1 0 0 0-64-143.22V32a20 20 0 0 0-20-20H80a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V85.08A68.1 68.1 0 0 1 204 152a67.39 67.39 0 0 1-24.18 52H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24m-100-80H84V36h40Zm-52 64a12 12 0 0 1 0-24h64a12 12 0 0 1 0 24Z"/></svg>';
    } else if (subject == "Physics") {
        imageIcon.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M209.84 47.44A91.42 91.42 0 0 0 144.62 20h-.35a91.44 91.44 0 0 0-65.12 27l-61.39 62.17a20 20 0 0 0 .08 28.21L46.5 166a19.89 19.89 0 0 0 14.15 5.86h.11a19.86 19.86 0 0 0 14.2-6l60.87-62.39a12.07 12.07 0 0 1 16.77-.12a11.63 11.63 0 0 1 3.5 8.35a12.85 12.85 0 0 1-3.66 9.11L90.19 181a20 20 0 0 0-.21 28.5l28.66 28.66a20.08 20.08 0 0 0 28.15.14l61.76-60.44l.09-.09c36.01-35.99 36.54-94.46 1.2-130.33M60.62 146.21l-23-23l18.19-18.41l22.88 22.88Zm72.2 72.18l-23-23l18.61-18l22.88 22.87Zm58.89-57.62l-23.23 22.73l-22.78-22.77L169.21 138l.15-.14a37 37 0 0 0 10.74-26.37a35.44 35.44 0 0 0-10.85-25.41a36.2 36.2 0 0 0-50.44.48l-.1.11l-23.25 23.82l-22.78-22.77l23.5-23.8A67.55 67.55 0 0 1 144.27 44h.26a67.62 67.62 0 0 1 48.21 20.29c26.11 26.49 25.64 69.76-1.03 96.48"/></svg>';
    } else if (subject == "Chemistry") {
        imageIcon.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M225.15 197.71L164 95.81V44h4a12 12 0 0 0 0-24H88a12 12 0 0 0 0 24h4v51.81l-61.15 101.9A20 20 0 0 0 48 228h160a20 20 0 0 0 17.15-30.29M140 44v55.14a12 12 0 0 0 1.71 6.17l35.13 58.54c-10.79.86-25.15-1.31-43.42-10.56c-14-7.08-27.46-11.33-40.27-12.76l21.14-35.22a12 12 0 0 0 1.71-6.17V44ZM55.06 204L79 164.19c13-1.11 27.62 2.42 43.62 10.52c19.61 9.92 36.25 13.31 49.85 13.31a75.44 75.44 0 0 0 17.64-2.02l10.83 18Z"/></svg>';
    } else if (subject == "Economics") {
        imageIcon.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v99l43.51-43.52a12 12 0 0 1 17 0L128 127l43-43h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12v40a12 12 0 0 1-24 0v-11l-51.51 51.52a12 12 0 0 1-17 0L96 129l-52 52v15h180a12 12 0 0 1 12 12"/></svg>';
    } else if (subject == "Combined") {
        imageIcon.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M219.23 159.2a196.66 196.66 0 0 0-18-31.2a196.66 196.66 0 0 0 18-31.2c11.84-26.31 11.69-47.48-.43-59.6s-33.29-12.27-59.6-.43a196.66 196.66 0 0 0-31.2 18a196.66 196.66 0 0 0-31.2-18c-26.31-11.84-47.48-11.69-59.6.43s-12.27 33.29-.43 59.6a196.66 196.66 0 0 0 18 31.2a196.66 196.66 0 0 0-18 31.2c-11.84 26.31-11.69 47.48.43 59.6c6.13 6.13 14.58 9.2 24.8 9.2c10 0 21.77-2.92 34.76-8.77a196.66 196.66 0 0 0 31.2-18a196.66 196.66 0 0 0 31.2 18c13 5.85 24.74 8.77 34.76 8.77c10.26 0 18.71-3.07 24.84-9.2c12.16-12.12 12.31-33.29.47-59.6m-17.41-105c5.25 5.26 1.79 26-16 53.78c-5.61-6.66-11.65-13.25-18.07-19.67S154.7 75.83 148 70.22c27.82-17.83 48.56-21.29 53.82-16.04ZM171.24 128a288.6 288.6 0 0 1-20.51 22.73A288.6 288.6 0 0 1 128 171.24a288.6 288.6 0 0 1-22.73-20.51A288.6 288.6 0 0 1 84.76 128A298.55 298.55 0 0 1 128 84.76a286.83 286.83 0 0 1 22.73 20.51A286.83 286.83 0 0 1 171.24 128M54.18 54.18c1.46-1.45 4.1-2.24 7.75-2.24c9.53 0 25.94 5.39 46 18.28c-6.66 5.61-13.25 11.65-19.67 18.07S75.83 101.3 70.22 108C52.39 80.18 48.93 59.44 54.18 54.18m0 147.64c-5.25-5.26-1.79-26 16-53.78c5.61 6.66 11.65 13.25 18.07 19.67s13 12.46 19.67 18.07c-27.74 17.83-48.48 21.29-53.74 16.04m147.64 0c-5.26 5.25-26 1.79-53.78-16c6.66-5.61 13.25-11.65 19.67-18.07s12.46-13 18.07-19.67c17.83 27.74 21.29 48.48 16.04 53.74M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"/></svg>';
    }

    imageIcon.classList.add("hidden");
    image.classList.add("hidden");
    imageIcon.classList.remove("hidden");
    image.onerror = () => {
        image.classList.add("hidden");
        imageIcon.classList.remove("hidden");
    };
    image.onload = () => {
        image.classList.remove("hidden");
        imageIcon.classList.add("hidden");
    };
    if (randomImage != undefined) {
        image.src = randomImages[`randomImage${randomImage + 1}`];
        image.alt = "random image";
    } else {
        image.src = images[`${level}_${subject.toLowerCase()}`];
        image.alt = `${level} ${subject.toLowerCase()} image`;
    }

    imageContainer.appendChild(imageIcon);
    imageContainer.appendChild(image);
    element.appendChild(imageContainer);

    const title = document.createElement("div");
    title.textContent =
        variant == undefined
            ? session == undefined
                ? year == undefined
                    ? subject == "Combined"
                        ? "Combined Science"
                        : subject
                    : year
                : session == "m"
                    ? "Feb / Mar"
                    : session == "s"
                        ? "May / Jun"
                        : "Oct / Nov"
            : `Variant ${Number(variant) + 1}`;
    title.classList.add("card-title");
    element.appendChild(title);

    elementContainer.appendChild(element);

    return elementContainer;
}

function generateRandomImages() {
    const randomImagesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    shuffle(randomImagesArray);

    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
    }

    return randomImagesArray;
}




/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/modal.css */ "./src/css/modal.css");

const animationTime = 200;
let modalTimeout;

function createModal(
    title,
    contents,
    submitButtonBehavior,
    cancelButtonBehavior,
    defaultBehavior = () => { }
) {
    const modalContainer = document.createElement("div");
    const modal = document.createElement("div");
    const backdrop = document.createElement("div");
    const modalButtonsContainer = document.createElement("div");
    const modalTitle = document.createElement("h1");
    modalTitle.textContent = title;

    modalContainer.appendChild(modal);
    modalContainer.appendChild(backdrop);
    modal.appendChild(modalTitle);

    for (let i = 0; i < contents.length; i++) {
        const modalContent = document.createElement("h2");
        modalContent.innerHTML =
            typeof contents[i] == "string" ? contents[i] : contents[i][0];

        if (typeof contents[i][1] == "function") {
            contents[i][1]();
        }

        modal.appendChild(modalContent);
    }

    modalContainer.classList.add("modal-container");
    modalContainer.id = "modal-container";
    modal.classList.add("modal");
    backdrop.classList.add("backdrop");

    backdrop.addEventListener("click", () => {
        modal.style.animation = `zoomOut forwards ${animationTime}ms ease-out`;
        backdrop.style.animation = `fadeOut forwards ${animationTime}ms`;
        clearTimeout(modalTimeout);
        modalTimeout = setTimeout(() => {
            defaultBehavior();
            modalContainer.parentNode.removeChild(modalContainer);
        }, animationTime);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            if (modalContainer.parentNode == null) {
                return;
            }

            modal.style.animation = `zoomOut forwards ${animationTime}ms ease-out`;
            backdrop.style.animation = `fadeOut forwards ${animationTime}ms`;
            clearTimeout(modalTimeout);
            modalTimeout = setTimeout(() => {
                defaultBehavior();
                modalContainer.parentNode.removeChild(modalContainer);
            }, animationTime);
        }
    });

    modalButtonsContainer.classList.add("modal-buttons-container");
    modal.appendChild(modalButtonsContainer);

    if (submitButtonBehavior != undefined) {
        const submitButton = document.createElement("button");
        submitButton.textContent = submitButtonBehavior[0];

        submitButton.addEventListener("click", () => {
            modal.style.animation = `zoomOut forwards ${animationTime}ms ease-out`;
            backdrop.style.animation = `fadeOut forwards ${animationTime}ms`;
            clearTimeout(modalTimeout);
            modalTimeout = setTimeout(() => {
                submitButtonBehavior[1]();
                modalContainer.parentNode.removeChild(modalContainer);
            }, animationTime);
        });

        modalButtonsContainer.appendChild(submitButton);
    }

    if (cancelButtonBehavior != undefined) {
        const cancelButton = document.createElement("button");
        cancelButton.textContent = cancelButtonBehavior[0];

        cancelButton.addEventListener("click", () => {
            modal.style.animation = `zoomOut forwards ${animationTime}ms ease-out`;
            backdrop.style.animation = `fadeOut forwards ${animationTime}ms`;
            clearTimeout(modalTimeout);
            modalTimeout = setTimeout(() => {
                cancelButtonBehavior[1]();
                modalContainer.parentNode.removeChild(modalContainer);
            }, animationTime);
        });

        modalButtonsContainer.appendChild(cancelButton);
    }

    document.body.appendChild(modalContainer);

    return modalContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal);


/***/ }),

/***/ "./src/js/serviceWorkerRegistration.js":
/*!*********************************************!*\
  !*** ./src/js/serviceWorkerRegistration.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerServiceWorker)
/* harmony export */ });
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/js/modal.js");



function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    const wp = new workbox_window__WEBPACK_IMPORTED_MODULE_0__.Workbox("sw.js");

    wp.addEventListener("installed", (event) => {
      if (event.isUpdate) {
        (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
          "", // title
          ["New Update is available"], // content,
          [
            "Update",
            () => {
              window.location.reload();
            },
          ],
          undefined,
          () => {
            window.location.reload();
          }
        );
      }
    });

    wp.register();
  }
}


/***/ }),

/***/ "./src/media/audio/timer-audio.mp3":
/*!*****************************************!*\
  !*** ./src/media/audio/timer-audio.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/timer-audio.mp3";

/***/ }),

/***/ "./src/media/images/Random/1.webp":
/*!****************************************!*\
  !*** ./src/media/images/Random/1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/1.webp";

/***/ }),

/***/ "./src/media/images/Random/10.webp":
/*!*****************************************!*\
  !*** ./src/media/images/Random/10.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/10.webp";

/***/ }),

/***/ "./src/media/images/Random/11.webp":
/*!*****************************************!*\
  !*** ./src/media/images/Random/11.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/11.webp";

/***/ }),

/***/ "./src/media/images/Random/12.webp":
/*!*****************************************!*\
  !*** ./src/media/images/Random/12.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/12.webp";

/***/ }),

/***/ "./src/media/images/Random/13.webp":
/*!*****************************************!*\
  !*** ./src/media/images/Random/13.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/13.webp";

/***/ }),

/***/ "./src/media/images/Random/14.webp":
/*!*****************************************!*\
  !*** ./src/media/images/Random/14.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/14.webp";

/***/ }),

/***/ "./src/media/images/Random/2.webp":
/*!****************************************!*\
  !*** ./src/media/images/Random/2.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/2.webp";

/***/ }),

/***/ "./src/media/images/Random/3.webp":
/*!****************************************!*\
  !*** ./src/media/images/Random/3.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/3.webp";

/***/ }),

/***/ "./src/media/images/Random/4.webp":
/*!****************************************!*\
  !*** ./src/media/images/Random/4.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/4.webp";

/***/ }),

/***/ "./src/media/images/Random/5.webp":
/*!****************************************!*\
  !*** ./src/media/images/Random/5.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/5.webp";

/***/ }),

/***/ "./src/media/images/Random/6.webp":
/*!****************************************!*\
  !*** ./src/media/images/Random/6.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/6.webp";

/***/ }),

/***/ "./src/media/images/Random/7.webp":
/*!****************************************!*\
  !*** ./src/media/images/Random/7.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/7.webp";

/***/ }),

/***/ "./src/media/images/Random/8.webp":
/*!****************************************!*\
  !*** ./src/media/images/Random/8.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/8.webp";

/***/ }),

/***/ "./src/media/images/Random/9.webp":
/*!****************************************!*\
  !*** ./src/media/images/Random/9.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/9.webp";

/***/ }),

/***/ "./src/media/images/al_biology.webp":
/*!******************************************!*\
  !*** ./src/media/images/al_biology.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/al_biology.webp";

/***/ }),

/***/ "./src/media/images/al_chemistry.webp":
/*!********************************************!*\
  !*** ./src/media/images/al_chemistry.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/al_chemistry.webp";

/***/ }),

/***/ "./src/media/images/al_physics.webp":
/*!******************************************!*\
  !*** ./src/media/images/al_physics.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/al_physics.webp";

/***/ }),

/***/ "./src/media/images/cr_biology.webp":
/*!******************************************!*\
  !*** ./src/media/images/cr_biology.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/cr_biology.webp";

/***/ }),

/***/ "./src/media/images/cr_chemistry.webp":
/*!********************************************!*\
  !*** ./src/media/images/cr_chemistry.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/cr_chemistry.webp";

/***/ }),

/***/ "./src/media/images/cr_combined.webp":
/*!*******************************************!*\
  !*** ./src/media/images/cr_combined.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/cr_combined.webp";

/***/ }),

/***/ "./src/media/images/cr_physics.webp":
/*!******************************************!*\
  !*** ./src/media/images/cr_physics.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/cr_physics.webp";

/***/ }),

/***/ "./src/media/images/ol_biology.webp":
/*!******************************************!*\
  !*** ./src/media/images/ol_biology.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_biology.webp";

/***/ }),

/***/ "./src/media/images/ol_chemistry.webp":
/*!********************************************!*\
  !*** ./src/media/images/ol_chemistry.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_chemistry.webp";

/***/ }),

/***/ "./src/media/images/ol_combined.webp":
/*!*******************************************!*\
  !*** ./src/media/images/ol_combined.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_combined.webp";

/***/ }),

/***/ "./src/media/images/ol_economics.webp":
/*!********************************************!*\
  !*** ./src/media/images/ol_economics.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_economics.webp";

/***/ }),

/***/ "./src/media/images/ol_physics.webp":
/*!******************************************!*\
  !*** ./src/media/images/ol_physics.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_physics.webp";

/***/ }),

/***/ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Workbox: () => (/* binding */ l),
/* harmony export */   WorkboxEvent: () => (/* binding */ c),
/* harmony export */   messageSW: () => (/* binding */ n)
/* harmony export */ });
try{self["workbox:window:7.0.0"]&&_()}catch(n){}function n(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[e.port2])}))}function t(n){var t=function(n,t){if("object"!=typeof n||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,t||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==typeof t?t:t+""}function r(n,r){for(var e=0;e<r.length;e++){var i=r[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,t(i.key),i)}}function e(n,t){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},e(n,t)}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function o(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(r)return(r=r.call(n)).next.bind(r);if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return i(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}try{self["workbox:core:7.0.0"]&&_()}catch(n){}var u=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function a(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var c=function(n,t){this.type=n,Object.assign(this,t)};function f(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function s(){}var v={type:"SKIP_WAITING"};function h(n,t){if(!t)return n&&n.then?n.then(s):Promise.resolve()}var l=function(t){function i(n,r){var e,i;return void 0===r&&(r={}),(e=t.call(this)||this).nn={},e.tn=0,e.rn=new u,e.en=new u,e.on=new u,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,t=n.installing;e.tn>0||!a(t.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=t,n.removeEventListener("updatefound",e.cn)):(e.hn=t,e.an.add(t),e.rn.resolve(t)),++e.tn,t.addEventListener("statechange",e.ln)},e.ln=function(n){var t=e.fn,r=n.target,i=r.state,o=r===e.vn,u={sw:r,isExternal:o,originalEvent:n};!o&&e.mn&&(u.isUpdate=!0),e.dispatchEvent(new c(i,u)),"installed"===i?e.wn=self.setTimeout((function(){"installed"===i&&t.waiting===r&&e.dispatchEvent(new c("waiting",u))}),200):"activating"===i&&(clearTimeout(e.wn),o||e.en.resolve(r))},e.yn=function(n){var t=e.hn,r=t!==navigator.serviceWorker.controller;e.dispatchEvent(new c("controlling",{isExternal:r,originalEvent:n,sw:t,isUpdate:e.mn})),r||e.on.resolve(t)},e.gn=(i=function(n){var t=n.data,r=n.ports,i=n.source;return f(e.getSW(),(function(){e.an.has(i)&&e.dispatchEvent(new c("message",{data:t,originalEvent:n,ports:r,sw:i}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(i.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=n,e.nn=r,navigator.serviceWorker.addEventListener("message",e.gn),e}var o,s;s=t,(o=i).prototype=Object.create(s.prototype),o.prototype.constructor=o,e(o,s);var l,m,w,y=i.prototype;return y.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return f(function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&"complete"!==document.readyState)return h(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.mn=Boolean(navigator.serviceWorker.controller),e.dn=e.pn(),f(e.bn(),(function(n){e.fn=n,e.dn&&(e.hn=e.dn,e.en.resolve(e.dn),e.on.resolve(e.dn),e.dn.addEventListener("statechange",e.ln,{once:!0}));var t=e.fn.waiting;return t&&a(t.scriptURL,e.sn.toString())&&(e.hn=t,Promise.resolve().then((function(){e.dispatchEvent(new c("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener("updatefound",e.cn),navigator.serviceWorker.addEventListener("controllerchange",e.yn),e.fn}))})))}catch(n){return Promise.reject(n)}},y.update=function(){try{return this.fn?f(h(this.fn.update())):f()}catch(n){return Promise.reject(n)}},y.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},y.messageSW=function(t){try{return f(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},y.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,v)},y.pn=function(){var n=navigator.serviceWorker.controller;return n&&a(n.scriptURL,this.sn.toString())?n:void 0},y.bn=function(){try{var n=this;return f(function(n,t){try{var r=n()}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return f(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n})))}catch(n){return Promise.reject(n)}},l=i,(m=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&r(l.prototype,m),w&&r(l,w),Object.defineProperty(l,"prototype",{writable:!1}),l}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.jn(n).add(t)},t.removeEventListener=function(n,t){this.jn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,r=o(this.jn(n.type));!(t=r()).done;){(0,t.value)(n)}},t.jn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());
//# sourceMappingURL=workbox-window.prod.es5.mjs.map


/***/ }),

/***/ "./src/json/AL_subjects_ms.json":
/*!**************************************!*\
  !*** ./src/json/AL_subjects_ms.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Physics":{"2010":{"m":[null,null,null],"s":["DAABCBBCBACDACBDABDDACBACCADDADDAAADCACC","BDBABCABCDAACCDBBADADCACBDDACDADAAADACCC","ACBBBDACDCAABCABDBADDBCCADDCADAADDAACCCA"],"w":["DCBABCBACBBBABDBDDDDABACAADADBCABCCBACDC","ABACDDDACBBCDDDBCCCDAACCDCBAADACDBBBBDCB","BBCDAACBBBBCDABDDBADBDAACDADBACCCBAABCCD"]},"2011":{"m":[null,null,null],"s":["CCCCAABBADBDCCABCCDBADBADBDACDCAACCCDDBD","CBADDDDADBABDABCCDDACBCBCBDCBABCDDACBCCB","CCCACBABDADCBCACBCDABADBBDDDACACCACDCDDB"],"w":["DBCBBADBBCAAACCCABCACCBBCBADACACADABDBBD","CDDDBCBDDBADDBBBADAACABDBBBADAACDAACBACC","CDBBBDABBACACACACCABBBCCBCDACACADAADBBDB"]},"2012":{"m":[null,null,null],"s":["ADCDCCDBDDBACDDBCBDDDBCBBCBBCCDCCACBACAB","CDDBBAADAABDABDDBDBDCCCBCDCDCBCCDBDDDCBB","CADCDDCDBADBDCDCBDBBBCBDDBCCBCDACCBCCABA"],"w":["BCDBBCADACCAAABBCAACDDABBDABCBBACDCCBCAB","BABCBADACDADDDBDCCADDAADDDBCADABCCCCCBCD","BDBCBACBDABCBBDDABADBABBCBBABAACDBDBDACB"]},"2013":{"m":[null,null,null],"s":["DCCDDDBDADDACBACBBBBDAACACACBBDAAABDDCAB","BBADCBDBDBDABDBBCACDCBBDDBCBCDACAADDCCBB","BACADBBCBBABDAAACACADACCCBDDCDDCCBCBCCDB"],"w":["BCBBCCCCDBCDADBBACBDACDADCADBABCCBBADCCA","BCBBCCCCDBCDADBBACBDACDADCADBABCCBBADCCA","DBDADDBBDCBBABCADDCBCCDCAADBACDCCABDCCDA"]},"2014":{"m":[null,null,null],"s":["ABADBDDABABCBDCBDDBBCDBDBBDDAADBADBACBBA","CBBCDBCCCBADACBBCBDACCCCBDDADBAAADBBBCCC","CDABCCCDCCBCCADDCBCCDDADCCBABBACDDAAACCD"],"w":["BCADCACAADAACACABCBAABDDDDBBABACACBCDDBC","BCADCACAADAACACABCBAABDDDDBBABACACBCDDBC","ACADDDDACBBCCCDCAADABACBCAACCDDCDDBAAACC"]},"2015":{"m":[null,null,null],"s":["CBADABDCDDCCACCCCBDACABDBDABDBDBBDCDACCB","CDCCDCDDCCDCABCDDDABABCCBCBBBBCAADABAACC","CDDBBCDDBCCBCAAAACBBBACDCDDDCBDDCCAACDAC"],"w":["BBAABCCBDDADCABDBDDBBABCAADABACABCAADDDB","CBCBDABCAACACCABCCBBDDCBDDADCCAAACABADCD","ADABBBABCCCDDABDBCABCCCDBBBCBAAADAAADCCD"]},"2016":{"m":[null,"CDCCBCABBBCABBCCDDBABBABCCDAACCBDDDAAACB",null],"s":["BCCADBADADCABBCCDADCBABADDDADCDCDAABBADA","CCABDAAACCDDADCBACBDDABCCDDCBCCABBDBDCBD","DBCCCABBAABCBBCCAADCDCBBDBADDADACACBBDBC"],"w":["DBAADBBCACADAADBCCACDAADDCAACABACBBDAACB","BDDCADBBDCADBDCCCBCCDBABABDCCBACDBBBCACA","DBAADBBCACADAADBCCACDAADDCAACABACBBDAACB"]},"2017":{"m":[null,"CBDCDABADBBBCCBAACCBACACDACCDADBCACDBCBC",null],"s":["DDADCBBCDAADCAACCDADABBBCBCCAABACACBCABC","BADCBACBCACDDCBCCAADBCBADBDBBCCAACABBABA","BBDCBADCDADAAADCBDBABACDDABCDDBBCBCAADAA"],"w":["CBBCDCBBBDDAABBDABBADBCADCACDCCCCADBBDBA","DACDCBBDCBDBDABADABDADDBCDDCCDABDCABBAAC","CCABBDCDBABBCAADCDADACDACCDCBCACDDCBCDCB"]},"2018":{"m":[null,"BBDBBBBACCAACCCCABACDACCBDCDBDDCDAACDCDB",null],"s":["ACCACABABADDCCDBCBBBABDCBABDBCADACBBDCDD","CBDDACCDCDCBACDBCCBDDBDADCDACDAABBAACCBB","BBAADBCBCADDBADBBDCCDBDBDAABCABDBACDDDCA"],"w":["DDBBCDACDACACABBCBBCDCADAACCCBBDABBAABDB","ABBAACBBBDDCACDAABADDDBADDABACCDAADBBCCA","CCCBBABAACABDDDBCCDBDBBDBDCCBBDABCADCCAA"]},"2019":{"m":[null,"ABDABACBACCDDDCDBDBDCDCDDCCABABDCADBADDD",null],"s":["ACBDBBDABCDACCDACBCABAACDBDBDCADBBACCAAD","BDACDCDBCADDCDDBDACACBADDBDCCBAABACAACCD","CDCBACBCCBACADDCABBCCCBDABCDBDDBADACBBAA"],"w":["DAACDCACDCDACADCCBDDCCBADCAABBBBABDDCDBD","DABCBBDDAAADBACDBABDDCCBCBDBCBBCCACCABCB","CDCBCBADBBAABAABABDCCBBBACADCCDDCCDAABDA"]},"2020":{"m":[null,"CDDCDDADCBAABBBDACBCBABDDCBCDADDBDBBCDDC",null],"s":["CBBBDDAACDDACDBCBCDBDAABBCBBACDACBCDBDBC","DCBDBBBCDBBABCCDCCBBACADDABBAADADBACAABA","CCAADACDBCBBADBDDCCAABDBDACADCDDCDCBDAAC"],"w":["CBADDDBCBBBBDDBCABCCCBCACAAABAAADABBADAA","BCADBAADBCCAACBADCACCDDBCAABCBBBABDBDDCD","BABACACBDDABBDDBCABCCDBBADBCACDDBACCDCDB"]},"2021":{"m":[null,"DCCBDDCDAAADCCDABBBCBBCCDBDCDBADCBCCDABB",null],"s":["ADCBDCCDACADCDADABBCDBAAABABBDCACBDCBBBA","DBDDDDBCBDACBCAADDADBABABCBBCADAABACACCA","CCABBDCCDBABAABDCBDDCBAADBCBABDACAACBCCD"],"w":["BBAABBDCBDCADDDCBACADBDADADCCBACDADCAACB","CADADCBABDBCCDCBCAABADDDCACBAAACBBBCAACB","CDCBDBDAAABAACCBCCBCDBDACBACDBBDDDBAABDB"]},"2022":{"m":[null,"BBDBDDCACDACDDABCDCDBCADCCDBDBACCAABCCBD",null],"s":["DBACCCDDBDCBABAACAADADCDABBABDCBDDDADDCC","CBCBADCABBCDCBCBACBADCDAABBDDCBADABADCCB","DDBCACDCDBACDBAACCBCBBBDAABCBBDDDBDAABBA"],"w":["CDCADBCAADBACDCDCCCDABBDAAABDCBCABCDCBAD","DCDCAADCBCDDBACACBCBADBABDBCCDBBDDABACBB","BBCDABDDABDDBCBBCBCAACBACBCCDDDACBCCBADD"]},"2023":{"m":[null,"CBABBDDCDCCBDDBCBCBDAADBCDBCADABBABACCAA",null],"s":["CBDBCCCAADDACACBBAADACCCBACDACBDBCABDDDA","BDDCBACBDABCAADABDBBBCDBAABDCCADCDABCCDA","CADACDBBDCBCDACCDBBADDBCBACBDADBBAACADAA"],"w":["CADCBADBBBCADDDAACDBBCCDABCDACDABBAABDCB","BDDADBACBCACBCACDBDDCACCCBBADBBDADABDABC","BACADCBDACCBBADBBCADDABCABAACCADACCDDBAD"]}},"Biology":{"2010":{"m":[null,null,null],"s":["DCCCDBADABACBADCDDCBCCAADBABCDBCABDACACB","BCBDDDBACBACCDCDBCBCCAAADAADCBACBACDCDBA","DACACDDABCDCDADCBADBCABDCCBCABBCDCBCABAA"],"w":["DBAABBCADACCBDBABCBBCBDCBADBCBBAADDDDBAD","DCBBCBCCDBDDACBABCCACDAADBADABDDABBDCBCC","BDCAACBBABBADCCCDDADDDABABBDDCCBBBABBADB"]},"2011":{"m":[null,null,null],"s":["BDDCBABAABADACCBACDCDACCBCADCBCADCDBBADB","CADCDBBCDDDCCACCADBBCCAADDAADBCABCBACBBA","DBAACBCDBCDBCABDCDBDCCADCDCCADABABAAABBC"],"w":["BADCCAAADCDDDDBCBABBAABCBBADBBCACCBDDCBD","DACABCAABCDACDBDDBDCCCCADCBDBDAACCAABBBD","CDBABCCDAACCCBDDDDAACDDBDCBAAABBBBCBABDB"]},"2012":{"m":[null,null,null],"s":["DDCBDAACACBADBDCBADCCACBBDACDDBADCACDCCB","CACDDBBDBBAABDCDDAAABABADCDDDDCACBBCCCAB","CCBDCDDBBDCCAABACDABADACCCDBABACCDCDBDDA"],"w":["BADABBCDACDABBDACACDDCDCBABDABCCDDAACBAA","AABCBCBBBCDCCADADADCBCAABDCBDBBCDCABCCCD","ADBBDDABBADADBACCDBCCDDAAABCBBDDDCCCBCDC"]},"2013":{"m":[null,null,null],"s":["DCCCACDADCCCBBBABBDBDDCABABAACADAAABDDAA","CBCADAABBACBDCBDDCABCCCBCABBACDDBBCADDAA","BCAAADCACABBBCCDBACDDDBBDBCDABDBDAACCADA"],"w":["DBCCBCACBDAABCABABBDCDBCADBCCACCBADDCBBC","CABDCACCABBDABDBDCCBACDDDBCBCABACACBCCDD","BDDCCADBADBBCABCDDCCBDDBDADBBAABADBBADAC"]},"2014":{"m":[null,null,null],"s":["AACCCBCCCCAABACDBBBDBDDABCBBDAACBDDCADAD","DADCCABACDCABADCDACCCADBBBACDDDABDCABDDB","DCBBDCCDCCDACAADCDBBDCDADADCAADABCCDBBCC"],"w":["CDABABBADCADCCDBCCBAADBDCCCDDDBBDABBACCD","DDBBCCAADABAADDBDACDCCABAABADBDCCACDCBAB","BDCDACBDCDBABDBDCACCABABCCDCADCBCADBADDA"]},"2015":{"m":[null,null,null],"s":["CDBADBBDBBAADBCACCBBACCDBABBABACABADBDAD","ACCBCBBDCBBCDCDCDBDDDADADDBACAABDABBBADC","ACACDBDCDCDBDCBBBBDACAADDCBBCBBACDCBACCA"],"w":["BAADABCCDADBADADBCDDBCDACDDDCAACCBBAACAA","BCCCBDBDCCAACABBBDBACBDADCACABACDBBACCDB","BBCBACCBBABACDCBCDCDBCABAABDCBCDADDDCDCA"]},"2016":{"m":[null,"CBCDADBCADAACDCACACBDBCAABBBDBCCBDBCDADC",null],"s":["DCBDACBCDACDDCCACBCCABACCDABDDABADDDCBDA","DDCDBCCAACBDADDACBABABCABCDACACCDBCCACCA","AABBABBACDCDQBDADADDABCDBBACAADDADABCBCD"],"w":["DBACCAACDACCADBBDABAADDBCDDDCADBACCCABDB","BCCCBBDDDACBADAABABDDBCABDCBCDACDCDCBCAC","BBABBDDDACDDCDCDADBCCDDDBACDACBCCCADBAAA"]},"2017":{"m":[null,"CCCABDDBADCDBDCBBDACCABDCBAADABAADCBBBAB",null],"s":["DCCDBADDDDCBBACCBDCCBCCDADDCAACABAAAABBC","CDAACDBBDBCBDCDADCCDCDCACBCDBAADCBDADAAA","ACCBBADACBCCDBABBBDADCDBDCACCCBCACDCDBDD"],"w":["BCAABBBABDDCAAADBBCCCDCDBBADBCBBAAADDBCD","DDBBAACCABABCDDADACBACCDCABACBAADCDDCADB","BACCACABDADBDAACABCDCDCBBCBDAADDCCDABCBA"]},"2018":{"m":[null,"DCACBDADABABCAACBDBDDCCDBBDCACDBDCCDCBCA",null],"s":["ABCBCCACCADADABACBDDACCDDCDBBACCCDCBDBDB","ABBBAACCDBCADCBCBABCDDBACCDCCBDDACCADCAD","DABADBDADCABBCBABCDBAACACCDBBACBCADCADAD"],"w":["CCCBADBBCADDCBAAACBBCBDABAABBADADDACBDDA","BDABBCCABADDCDCDDAACBBDCDDDBBBACACDABBCC","CCDBADDDBCCBDABCDCCDABAACBCAABBDDCBDBABD"]},"2019":{"m":[null,"ACCAACADACBDBACBDABDBDACBACCDBACDDCDDBBD",null],"s":["DCABABAADABBCDABBBCDDBCBCDCACBDDBDCADAAC","DBDBBBABBDCCCCBAAABCDDBCDDDCBDBADACADCAB","DBCCDDDDCBDAADABDBAACBCBCBBBCCBAABCBACAC"],"w":["CBDCADBACDACDDBADADBBBAACCCBDDDDABBACBDC","DCCACABBBABDBDBCBCDBDBBAABAADDCBCADADACA","CDADDBCCCBADAABCBDAAACBCABBBCDBDACCDDBCD"]},"2020":{"m":[null,null,null],"s":["BADABDABAAACBCDBCDDBABCCADBCDDCCBBCADDCA","CABCDACCCABDBDDBCDDCACBDCCDACAADBDDBDABD","CBDCBBBDABDAADBABCDBCCBAABDBDABDCDBCADBA"],"w":["CBCCADCBDADDABDAABBDAACAABAACACBDCBABCBD","BDDDABACDDBADBDBBACCBCAAABBCACCDBBBAAABD","DCBDADCAAACDCBDABBABDCCCBDBDCCBCBACDDABC"]},"2021":{"m":[null,"DBACBDCACCDCBBADBCCACDBDABABDCDABCDCDAAB",null],"s":["CDADDBCBABDCDDADCCBDBBADBBDBBADCAABBAABC","DBCDBBDCCABABAADCCAADCABCCBCBDBCCDCBDADB","ACCBCABDCDCBDDCADDABDCBAADACBBAACCADBDAC"],"w":["BADCCAADACCDCBDDCADBCBDDDBBDDCCADACAABAC","CBDBBDCBAACCACBDBDDABBCBBBDDBAADCCCADCDB","CBCAABQBACDBCDBCDADCCBBCDACDDDCBCDAAADAB"]},"2022":{"m":[null,"DACDBBDDDADCDCCBAABBCDBCCADACDBACACBCABD",null],"s":["CDBAACCAAACBBCBBABADCCCBAAADDDCCBBDDABDD","CCCBDDAABBAADCAAAADBCDCCBCABDBDACDBCADDC","BCCDDCBDBCBBBABCACCDCCBDADCABCCACDAADDBB"],"w":["DACADAADCCDACBDCDDBCDCBBBCACABCCDBBBABDD","DACBDADCBCBCACCCCABBCADBDDCDDCAAADABADAB","DBBCAAAABADADACBAACBADCCDCDBCADDCCBBBDAC"]},"2023":{"m":[null,"ACCBDCABADCDBABBDBACCBDCADDDCAABCCBCBADC",null],"s":["BAADBDCCCCBBDBBCDBCBDCABAAACBADCDDBCDADC","BBBBCBDBBDBAACCDCAADBABBCBBCACABBADCCDDB","BDCABABCACDDBACADBBABCCBDCCBDDDCACBACCDC"],"w":["BCBBCCDCADBBACCCBBDACDBDABQCDAABABQDBACB","DDBADAADBCDDABCCCBAACCCDBABBCCBDADBDBCBB","CBCDABCCBACBDADCBDDBBDBDBDAABDCDBCDDCBDC"]}},"Chemistry":{"2010":{"m":[null,null,null],"s":["CACCBDADCDADAAACBDACCBDCBDADBDBDBBCBACAB","CCACBDCDDAAADAADACBCBDCBCDBDDABBDBCBAACB","CACBCCDADDAADAAACBDCBCCDBDDADBDBBCBBCAAB"],"w":["DBBDADCBBBCCADDDABCCDABBDDBCCDACADAADBBD","DBCBDAADCBCDBCDCDBCCBCBADBABDDDBCAADACAD","BBDDACDADBBBCCDADBCACDDBBDBCCDAACADDABDB"]},"2011":{"m":[null,null,null],"s":["BACCDABDCCCBCDBDCCCCCABBBDDBBDDBDBADBCAA","BCBCBBCCACCBDBABDBABDCBACDCCDADDDCAAADAD","BDCABACCDCBCCDCBDCCACCBDBBBDDBBDDBDBCAAA"],"w":["BCDCBCCADDACABBBCCACAADACDDCDCBDBABABBDC","AADCCBDCDACBCCDBCDCCCDABBAABDAACADBDDBCA","CDBBCCCDAACDABBCBCACDAAACCDDCDBBBDAACDBB"]},"2012":{"m":[null,null,null],"s":["ADDBCBCBBDACCBACDCCDCABCACDBADBBDBAABACD","CCDBACDDCBCDCBADBBACAABACCDDCBACDBADBACB","DABDCCBBADBCCABCCDDCCBCACAADBDDBBAABABDC"],"w":["BCDABDDCACABACBADCADDCCCDCBCABBABDDBDBCD","BCDABDDCACABACBADCADDCCCDCBCABBABDDBDBCD","DDCAABCCDCACADDABCDCCBBDABDCCCABABDBABCB"]},"2013":{"m":[null,null,null],"s":["CCDADCADACBDCDADAACBBDDAACADBBDBBADBCBBC","BBDDCDBDCABCADCBBCBDACBCDADBBBACCACDADAD","DBCCBADDACCABCDBDABBBDCBBDACDCACABCABDDA"],"w":["DABCCDBDADBDABCCDCDBCCBABBCBDAACCAABBAAD","DABCCDBDADBDABCCDCDBCCBABBCBDAACCAABBAAD","DABDCDCCBAACCBBDADDABDACCDCDBABCDBCDBABB"]},"2014":{"m":[null,null,null],"s":["BBDDBCBADCCDCBBCABBABCBCDADCCACDDBACCBAA","CCAABCBBBABADDDBADAADACCCACBCCABBADDDCBA","BBADABCCDACAACADADBACADBBADDDDABBBBCCDBC"],"w":["ADBABABACABBDCBACCDADDCCDCACDBACBCBBBDBD","ADBABABACABBDCBACCDADDCCDCACDBACBCBBBDBD","BDDABCDDDACBACDCABCCADDCCCBABCABABAABCDA"]},"2015":{"m":[null,null,null],"s":["DDABCBBCAABCDBCADACCBAADDCBABDADDDBDCCAC","BBADDCABAABDBCBBDCCBCDCBDAADCBDDBBCABACA","CDBCCABACAACBDBDCBBCCDDBABBCAADCDBDADAAB"],"w":["CABACDBDBBCAAADDBAACCDBCDADBBBCBBDBACCDB","BCDADACCBCCDBDBADDCBBDAACDBCAADADCDBCCBA","CABACDBDBBCAAADDBAACCDBCDADBBBCBBDBACCDB"]},"2016":{"m":[null,"ADDDDCCACACDCDABABADBBCDBDDCABBDBCADCBAC",null],"s":["CBCACDCDDDCADACCBCCDDABABCBBAAAACADABBBB","DDACDCDBCCDDADCBCACBBAABABABDBCBABACADDC","BDBCCACBCADDDBADCDBCCBBDABBCDCAABAABCADB"],"w":["CDDBCADCAACDCDCDBDBBADADCDBAABBABDCBACDB","DCBDDADCBAADADCACCDCCBCCDCCBDBABBDBABBAB","CDDBCADCAACDCDCDBDBBADADCDBAABBABDCBACDB"]},"2017":{"m":[null,"CBDCCBBACBDCCACCADDDDACBACDDBCDDBBAAACAA",null],"s":["CDACBADCBCBABACCACABDBBCDCACABBDDADABDBA","BBCDADCCAACBBCDCDDBDDCADDBDADCBCCABABBAB","ADBBDBABABBCCBDADBCCCDACDDBAACCBABAAADCB"],"w":["AADCBADDDCCAABCDDCBCAABBABCBDCBBADBCBDCA","ACBCCDBDCDAABCCAABCCABABBACBDCABDDABABDB","AADCBADDDCCAABCDDCBCAABBABCBDCBBADBCBDCA"]},"2018":{"m":[null,"DACCCDCBBDCBABBDBDCDAAACAABDCBDABDDAABAB",null],"s":["ADCCDABABDBDCDBDADDBBABACBAACCDBDCDACCBA","CDDDBACDBABDDABDDCDABABCDBDBACCADCABABCB","BDBCCADDCDDCDCABCBBCDDCBBACDBBAACBAABACC"],"w":["DAACCCBCDDCCCBBADDDBACBDBDABCCADBCAABCAB","DBCDAABBDAADBBBCCCCACBCCDBAAACDDBDDBDDAC","DAACCCBCDDCCCBBADDDBACBDBDABCCADBCAABCAB"]},"2019":{"m":[null,"BADCBBBCDBCABAABDADCABCBADCDDCCADBCADBAC",null],"s":["BDCACABDBCDDCABCDCBDABDBDCAAACBDACDAABCC","BBACCCBBCCBDCDDDBADCADADBCBBDCADAADBABAC","DCDCBCDABADDBCBCCBDDABDCCBACCADABAACBDAB"],"w":["CCDBCAADDCAADBBCAADACDCBCAABCDADBBCDBBAD","DAADCDBCCCCBACCDACBDABACADDCBABADAABDBCC","CCDBCAADDCAADBBCAADACDCBCAABCDADBBCDBBAD"]},"2020":{"m":[null,"ADACDABCBDBDACBDCACBBBCADCADBDCADBDBACCA",null],"s":["ACBDCCBBDACDDABDCDAACCBACDBDAABADACBCBDA","BCCADDBCABDCDBBBCDAACDBAABCCDCBCAADACADB","BAADDDCDBCBBDADAABACDCABCCBACDACBCABDADB"],"w":["CBCABCBABCCBBACCDDCDDADCDBCADAADADBABCAB","AACDDACCCBCBBBDBCDDBCBABADDDACBBDAADBCAC","CBCABCBABCCBBACCDDCDDADCDBCADAADADBABCAB"]},"2021":{"m":[null,"ADABCDACBCDBCDBAACDDCDADACADCBBBCADCBBAB",null],"s":["CCBDBBCADDCBBAACDCDABBCDAACBCDAADBDAABDC","CDBCADDAABCBCCDDDBCBDABCAACDBDBACBDAAACB","ADCACBADDADBBCCDCBCBBBADAADCBDBBCADADCAC"],"w":["ACABCDBCCBDDCCADDABABDBCADACBBADABDCBDCA","ACCBBBDABDDCBDACDADCACACDDACBBACDCCBAABD","ACABCDBCCBDDCCADDABABDBCADACBBADABDCBDCA"]},"2022":{"m":[null,"AACDBBCDAACABDABACDBDDBCDCCABACADCAABCCB",null],"s":["BBADDCAADCBCDBBCACACBDDDCCACBACCADBDBBDA","CADBCBDBADDCBCAABCABDDDBCCAABBADCADBCACD","DCAADBCCBABDBDDCAACBBACACDABCCDABDCDBABC"],"w":["ACDDCBADCBCBBAAACBADCBCDDBBADACAABCDDBCD","ACDBCABCABBDCCDADDBABCBCADADABDDBCACBDCA","ACDDCBADCBCBBAAACBADCBCDDBBADACAABCDDBCD"]},"2023":{"m":[null,"DDBADABCBDCCCDCAABABBCDDDBABDADBADCABCBB",null],"s":["BAAABCBCABDAACBDCCCCCBBCBDACACCCBADABCDC","CBDCBDBBBDCBBBCCDDCABAACABBDCDCDCBDADCCB","BDBADCDBABBACDCACBBDBACCDACBCDBCDDABAABD"],"w":["BDACAAAADDABCDDADADABABCBBDDDBDDDBDDCCCA","DCBACCDBACBBCCDCDDDBBACDBBCBCADDACACCCCB","BDACAAAADDABCDDADADABABCBBDDDBDDDBDDCCCA"]}}}');

/***/ }),

/***/ "./src/json/CR_subjects_ms.json":
/*!**************************************!*\
  !*** ./src/json/CR_subjects_ms.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Physics":{"2010":{"m":[null,null,null],"s":["CABBBADCBAAADDCCCADCADCDABDBBDCBCADADBBB","ABCDBCBBAAADCAADDCCCADACDBADCBBDDCBBBBAD",null],"w":["ADDDDBCBCCBDACADABBBCBCDADCCCACCACAABDCD","BACDDDDBDBCADCABABBBCCADCCCACCCADCAABDCD","CADABCDDDDBBCBCDAABBDABCCDCCCCCAAACABCDD"]},"2011":{"m":[null,null,null],"s":["ABADAACDBDCDDCCAABBCDDCCAABBDDABCADBCBCC","AABADBAACACCDDDCDBDBCCDCBADAABDACDBCCBCB","AABADBAACACCDDDCDBDBCCDCBADAABDACDBCCBCB"],"w":["BDDBCACBCCDCDCCDAACABCDDCCBABDCBDBCBABBA","DBACDBCBCCCDCCADADCBACDDBDBCABCCDCBBABBA","DDDBCBCCBCACDDDCACADCABCDCCBBDACBBCABABB"]},"2012":{"m":[null,null,null],"s":["ACBDBDACCBCBAADADADBDACCCDADCDCDBCBDCBBB","ADBDADACCBBCCBABDADCABDCCAACCDBDCDCCBDBD","ADBCCDABBDAACBCADADDCCDBCADCCDCBDADBBCBB"],"w":["CABACCADDCBBDBDDDABBCADBCABABBBBBACADDCD","BCAACADBCBDBDCDBDDBAAACBCDBBBBBCABAADDDC","CABAACABDCBBCCBDDDCABDACAAABDBDDAACBDBCC"]},"2013":{"m":[null,null,null],"s":["BABBDABCCCDBDBACDCDCBAADBBACBCDDADCCDBCC","DDBBCABCCACADBACDCACABADAADCCADCBABCDDCA","BBADBBACCDCBDABCCDDBCAADABBCCDBADDCCBDCC"],"w":["BCADABDBBDCAACBBDCBCBBCACCBDDBCCACBAADAD","CBABDABDBDCACABBCDBBCBCACBCDDCBACBCAAADD","CAADABABACBCDCBBBCBCACBBBDBBDBBAACBACDAB"]},"2014":{"m":[null,null,null],"s":["CDCABBDACDACADCDDAAABBBCABCCACBBBABDBCCC","BDCDBADCCBACACBCBDAADABACCBBCBCDBDAABBCA","ACDCDBDABCADDCDACBCAAABBCCBBCABABBADCCCB"],"w":["ADDBBDBDBDDCADCDBAABDDBACCCBADACBBBABCBD","DADDBBDBDCBDCBDAAADBABACBDDBCCABCDBACBDB","ADCBBCBCACAACCADDAACADAACCCCADADBDBBBBDA"]},"2015":{"m":[null,null,null],"s":["BCBDDBDDACCACDCCBBDCACCBAAACABACADCCACBC","BDBBDCCDACCAADDCBDDAACABBADDDBACACDDBCCA","AABBDADAADAACDBDBCDAACBBBADCCBCCACBBCACD"],"w":["AADCDCCBDCBADAACBDABBDBBDCDBBBBABDCACACB","ADDCACDCDBCBDAACDADBBABBDCDBBCACBADABBCB","DADADCBBDBCCDACDBDCDBCBBDCACABDCBBDADCCB"]},"2016":{"m":[null,"BBACDDABCDABDBCCCAABDBDCDBCCABCABCAABDAA",null],"s":["ACAADDDCBBDDBAACDCBCCAABBDBCDBACDABBBDAB","ABBAACBCBDDCBCBADCCCCACBDBACBBAADABBBAAC","ACBCACCCBBBABADDBBDCCABCBCACADCDDABBBDBC"],"w":["CADDBDBDACAACBCAABBDCDDACDABABAABAACAACD","AADDDCAAACAACABAADCCBADBCAABABCDBBDCAACC","AADBBCDDADAACDCADCDDBBABCBACABBCBBDCADCB"]},"2017":{"m":[null,"BDDBABCBCCBCCBDBBBCDACBACACAACACBABADCDC",null],"s":["ABCACCDADCADAAADADADDDCAADDCABDBCCADBADA","CBCDBBCABDDCABBDDCCDADCAACAACCCBBCDDBBAC","CCCDACBBCDDCDACDCDADADACAABADBABACBDABAC"],"w":["ACBDABBBBCBDBADADBABCADDCBCDCDCABBCDBDBB","BCDDABABCBBDBADDDBCBACDDABCCCCABBBCCDABA","ABBDABBBDCBBBADADCDCDCDDCDCBDCACBCDCADBD"]},"2018":{"m":[null,"DACCDCCBBBABBCDDACCDBDBADCCABBAADACAAADB",null],"s":["ADCBDCABDDACDCACBBBBABAABDCBACCDDBCCDDCC","ABCCDABBDDCBBDDBBDBBCACBDCBCCDDDBAACDBAB","ADCBBBDBCBADBBBCBCBDAABCDCBCCBBDBCBCDCAB"],"w":["CDBCACCBACCAACAABABBCBCBDDCBCCBDDABABABC","CDBCDADBACDBAAADBACDCBDBBDBBBCCBBADABBBC","CAACBCABCCBAADADBAACCDABAADBDCCDBACCBDBC"]},"2019":{"m":[null,"BCCABDACDBDDBABCDDBCBCACCACDBAACBBBDBCAB",null],"s":["AADACCDDACDACABAAADBDBBBBBDDBDBCBBDBDABD","ACDDACCDACBACDBAAABDABDBBBABBDBABBDCACCD","CDDCBCDDACBACCCDADABDBCCBBABBDACCBCCBDBD"],"w":["BCBCDDCCCBACCBCCCADACCCCDBAACCDDABCBADDA","ABBADDDCCCACAADDBABDBCCCDBCACBDDBBBADCAA","BABBADDACBCCAAADCADCACBCDBCACABDBBBDADDA"]},"2020":{"m":[null,"ABADCDAABCBBDAACACBADAAACDCAADDDADBCBBAB",null],"s":["BCADDBABCBCADBABAACCBCACABDCCCCBADBDADAD","AAADBCCDBDCAACCBAAACBCBDADACBBCAADDCADAD","BBADADADDDCAABABABBDBCBBABCCACCBDDBCAAAC"],"w":["CABABBADBBABCACABABDBBBBDBCAAAADCBABDDCB","CCCABCBBBBACCADCDCCDADBBBBAAACCACDADDADB","CBBABBCADBACDADDDBDDBBBAABCACDACCBAADAAB"]},"2021":{"m":[null,"BCCCDCADBDCCACDABCADCDADBCAAADABABCBCBAB",null],"s":["CAAACABDCDDDBDBADDCADDAACDBCCABBDBBADBCB","ACAABDBDAADDDCBADDCBDBABADDACCCCBBCADDAB","CABABDDDBADDAABCADCABCBACDADCCCBDBCCDACB"],"w":["BDACBBBDABCCCBDBABDCDACBCBADCCDACCACDDCA","BDCCABDDBACCABDBACDCBDABCACDACDABABCDBCC","CAACCBBDACDCBBABACDCADCBBCBDDCBAACAADABD"]},"2022":{"m":[null,"BADBADCADBDBCDCDBDCCABBCABDDABAACBBACAAB",null],"s":["BBDBCADCACDAABCBACBBACAABDDBACCBABDBDBAA","BBDCCDDABABAABBAACABABAABCBADDAACBBDDBAC","BADBCDBBBAAADACDACDBACABBCBCAACABBBDADAD"],"w":["ADABDACCACAADBCDBBABCBBAACDBCDBDDADDBAAC","ABCBDCCBAABCCCCAAABBABABDDDBCADDADCBDDCC","ABDBACCBACCCDCAADDCBCBCBBBBBCAAADDCADCDB"]},"2023":{"m":[null,"CDBBDDBADAADCABCBCCCDACBBCACDBBCDADACBBB",null],"s":["DCBCDADDDABACCBDACBBBACBBDADBBACCCBCCABA","DBCBBDBCBADDBACABBBDCCACDBDDDCCCCABCCCDC","CBBCBAAAADCCCAADCADCCBBCCADACBCDBCCABDAC"],"w":["BDCDCBAABACACCBBDBDCBBDDDCDBADDCBCBBABCB","BCBBCDDCAADBABCADADDBABCCCABDADABDBCACBC","ABCDAACDCACDCACBDBCBCDBCBDBBCBABBCDABACD"]},"2024":{"m":[null,"BACADBCCCDDBBACDDADACBCADBACBCCBCADACDAD",null],"s":[null,null,null],"w":[null,null,null]}},"Biology":{"2010":{"m":[null,null,null],"s":["DAABABCCCCAABABBACBDCDDAACDABBBDCDDCDCCB","ABBCDACABCCAAAABDBCBDDACBAACDDCCBCCDDBBD","ABBCDACABCCAAAABDBCBDDACBAACDDCCBCCDDBBD"],"w":["CADADDADBCCBACCDBBDBCBABCABAACCCCDDDBCCA","ADDADDCADCACCBCBCABBBDBCBCCABAACCBCDADCD","DADACDDACBCDBCACCDBABBCBBCACBAACACDCCBDD"]},"2011":{"m":[null,null,null],"s":["DBDCCBDDDCDDDBDBDBACCDDBBDBDCAAADBAAABBC","ADBCBDCDDBDAADBDCCBAADDDCABDDADCDBDBBCBB","ADBCBDCDDBDAADBDCCBAADDDCABDDADCDBDBBCBB"],"w":["DDDBBBCBADADBCCABADDBCBCDADBCDACDCAABBCB","BBDDCDBBBAAADCDCCBBBDDCADBADDACCCBDBBAAC","BCDBBDDBDACDCABADDCCBDABBCCDABDACABCBDBA"]},"2012":{"m":[null,null,null],"s":["CCBCABBCBDAAACBDCCBCDADADADCBCAAADBDBABA","BBDBBBBAADACBBAAABDDADCCBDAADBBCCCACCAAA","CACCBBBBACDACCDABCCADDBAACADDABACBABDABD"],"w":["BBADCCADADACCCCDCDBBACBBCDDADABCABCBDCCB","BABCDACDADDCCACCCBDBBACDBCADDBACCBABCBDC","CCACAADDABDCBBABACACCABADDCBDBBCCCCBDACB"]},"2013":{"m":[null,null,null],"s":["DBDDDDBAACBCCCAADBBDACDCCCCBACBBBDACDCAC","ACCAABCCBCCCACADCBCADADCCCCADABBABDADBAD","BDDDDDABCBACCAACBADBDCCDCCACBBBCACDBCDCA"],"w":["CBAADBBBCABCCDABDCCACDAAADCDCAADACABAABC","BAACBBBDCABDCCBADACCCDADAACDACADAACBABCA","DBBCCAAABBACBABDBCDBCAABDBBAAAAAADACDBCA"]},"2014":{"m":[null,null,null],"s":["CCCADBBCCDCABBDCBDCDDCDADABBBADBADACBCBB","CBCACBACCBCCDCACABCDDCDDBCBBBBADADACBCBD","CCCABDCBDCCADBBDCBCDCDDDAABBBBADCADACBBB"],"w":["BACCBAACBAACABAACDAABBCCACDACBBDBDCAAABA","BACCABBACAAABACCAADACBBDCCABACDBDBACAABA","BCCADCDBAACBBBBBCDAACACBAACACBBABDBAADBA"]},"2015":{"m":[null,"BCBABBCADACABBBCABDAADDBCBCABAAADDBDCDBA",null],"s":["BABBABADBBCCDABBABCBBAAADCDDADCCBACCCBAC","BDBCBAADBCACCBBABCAAAACCADDDBCDCDCAACBCA","BCBDABBDBACBCBAACDAADDBCBDCDDACBAABCADAC"],"w":["ABBBCBAABACDBADCCCCCADBCCCBBBBDDBDDADCDC","DACABCDAACDDCBACDCACACAACCBABCDDBDDADCDC","DBDCAABACCBBDABDCCCBDABCCCDBCBDBDDADACDC"]},"2016":{"m":[null,"BCDDDBCCCDBDCBABACDDBCBBBDAADBCCDBABDAAB",null],"s":["CCCBBCBACACCBDCBBACBCDCCCDDCBABCADDCBCBA","CACBDCBDCBADCDBBABCCCAABDDABDDDBDBAABDBA","CBCBBAABCDABCDADBABCABCDADCCBAAACDCBABBA"],"w":["DBDBACAABBCCCDABCBCCBBDBDDACCBCBDDDBDDBA","CBDBCCAABCCCBCACDABCCCBCDDACBBBBDADCCDAA","ADDBCCADBACCDAAADBCCBCBADAACABBCDDCBABCA"]},"2017":{"m":[null,"CBDCCDCCDBDBAAACBCBDAABDBBBADBBBBADDDACA",null],"s":["BCBBCBCADBDACBBDCBCCADABDBCCDCCBBDCBBCBA","BCBBCABACDDBCCCDBCDCADDDABBCADDBBDDBBBBA","BCBBCCBAADCCCABDDBCCADDDCDCCADBDBBCCBABA"],"w":["BCBABBCCCCAABBCBBDDAAAABBACADBABBCDDCDDA","AADCBCCACBBABBABABADBCABACCABABACDCDBCBA","ACDABBADBCCBBDBDBDADCBABAACABBAABCBCCAAA"]},"2018":{"m":[null,"CDDACBAADAACCCABDACDAACACBBCADCCBABBCBBC",null],"s":["ABCDBBABCABBBACCBDADADBBCCABBCDBDABDBBAD","ABCDBBBBCABACDDBBDCDACDDACBDDADDBBADCBBA","ABCDBBABCABBAAACBDCDAADBACBAABCABBBCDBBB"],"w":["ABAABCBCDDCCCCDBDBCDCAABDCBCBAABBDADDCBA","CAABBBBDDDCBCDDBDBCACABCDCBCBBBCDBDCBACC","ABBCBBBADDCACACBDBCCCABACCBCAAAABADDCBBC"]},"2019":{"m":[null,"CACCDCBACDDAABCBCCCDBBBCCDDCBCDCDDCBDCAC",null],"s":["BCBBACDCCCCBDBABBACCCABAABDBCDAABCDCAACC","CCCBDCBACCCAABABBBCACABADADADDCCCCBCBCBD","CCDBBCDBCCCDBAABBCCBCCBADDCCBADBACCDDDCB"],"w":["DBCCAABACAABAADCBBBBACCBBCCDBABDDCADDAAA","BDACAABADDABDACCDBBAACAABCCBCCCADAACAAAA","CDBCAAAABDABCADCBCCDACADBDACAACDCBADBAAA"]},"2020":{"m":[null,"BBBDDABACCABBCBADDDDACDCABDAAACADADDCCBA",null],"s":["DACDDABBDCBCACABCCBCBBCBABCDAACCCBDCBBCA","DABABACBCDBDACACCBBCCDBCCDDBDBACCBCCBBDB","DADBCADBAABCACACCBBBBBDCDDBBACDAABDCBBDB"],"w":["DBDDABADADCBDBABDDDDBBCCDDDDABBBCBABADCC","ABBDDBADADCBABABDCDBBBCCCDDADBBBAACBDBBC","BBBDDBADADCBCBCBDADDBBBCCDCBAAADBCABBBCB"]},"2021":{"m":[null,"DDCCCBADAABDCDACBADCBCAACDDBAABBCBDCBDBC",null],"s":["DCDCCBBDCBDABDACBCCADDACDDBDADCCBBDACBAB","DDDBCBBCCBAACDABDCCADDCCBDBBDDDDDAADCDBB","DBDCCBBDCBCADDBBACCADDACBBBAADBDADBDADCB"],"w":["DBBCCCBCCACDDCCCDCDBBADBADAACCCDCACBAADC","BCBBCBDACACACCCBACDBBBCDACCABDBDCBCDDAAA","CCBCCDDCCACBDCCCCCDDBCBAACDACACDCBCABACD"]},"2022":{"m":[null,"BDABDCDCBACADABCBDCCABBACCBDACDCDBCBDCCC",null],"s":["CAAACBABDABCCBCBDDBBBBCDDCACBCADDADCCBAA","CCAACBCBDCBCCBABADABADBBABCACBABABDCDBAA","CCBACABBDBBCCCBBBBDBDBBDBACDDBAADADCCBAA"],"w":["CCCBAADBBDCDACDACDDACCDACBBBACCCCBCCDABA","CCCBBACBBDCDCDBCCDDACCCBAABDCADCACDBCCAA","CCCBBBADBACDBDBCCDDACCADBCCBDCCABACCBACD"]},"2023":{"m":[null,"CBBDBDDABCABAABADBAABACDCBAACDBAADBBCCCB",null],"s":["CABCBCCDADDCBDADAABCDBABCCDCCCABDCCCABAC","ADACBCBAABCCCCCAADBCDDDACBCCBBAACDCDDADD","AAABCABCBCBBCABCDDDBBCCADBDABDCDAACDAABC"],"w":["CBCBBCBBDBDCDADBDDDBCBCDDADABCABCCBCABAC","CBABBABABBDBABCCCCAADCDABCABBBCACABCBCBA","DBCCBDDACCDDBADBDBABDACBBCCCABACADBCBBAD"]},"2024":{"m":[null,"CDCAABCCABDCDCBABADDACBABABABDCDACCABBDD",null],"s":[null,null,null],"w":[null,null,null]}},"Chemistry":{"2010":{"m":[null,null,null],"s":["BAADABACBCADACBDDAACCDCCCDACDDCADABDCBBB","BDBAAAAADBCCAADCBDCDCACCDDCADCDCBAADBBBC","BDBAAAAADBCCAADCBDCDCACCDDCADCDCBAADBBBC"],"w":["DBACDBBDDBDBBBDABDCBCDAABADCCAAADBBABBCD","DABDBDBBDCBDBACBDBBDAADCABCDACDAAABBDCBB","DDCABDBBDBBDBABDBBDCAADCBADACDCAAABBCDBB"]},"2011":{"m":[null,null,null],"s":["DABCCACDBCABBBCBCBBBCBBDDAACABCDDADCCBDA","DACABCABCBCDBCBBCBCBBBBBCDDAAADCDADDACBC","DACABCABCBCDBCBBCBCBBBBBCDDAAADCDADDACBC"],"w":[null,null,null]},"2012":{"m":[null,null,null],"s":["CDDBCDBBCBCCADABDCDBACCBABBCDCADACCABACD","CDDBCCBBBDDACCDCCBCBACBACABDAACDAACACBDD","CDDBBCDCBBACCADCBDADBBCABCCBDCAACDCBAADC"],"w":["CBCBABADADDDBACBCDDBCCDCBAAADADBCDCACACA","CCBABABDDADADBCCDBDCBCBDCAAAADDCBDACCCAA","CBCAABADADDDDCCCCDDADCDCBDABAADCBACDCABC"]},"2013":{"m":[null,null,null],"s":["BCCDDDCABDBBCDCBAACCDCDCDBDDCCBDABCBCDAA","BABDACCCADBADAACCBCCDDBACBDDADDACBDBABAD","BCDCDCDBABDCBDBCAADCCDCDCBDCDCBBDABCCADA"],"w":["BBAADCAADDDDDBADBDAADCADBDBBBCACBBBCDCDC","BBADACADADDDDDBADABDABDACBABBCCDBBBDCDCC","DCABCDBADBBADDADBDADDCADABBACCABDDBBACCB"]},"2014":{"m":[null,null,null],"s":["DACADCDBDCCBABABBBDBDACDCCCCBADCCABADBBC","CCBDDCACDCBADAABABBDBACDCCDABACBBCBDDDCA","DCAACDBCDDCBAABBBDDBBCDCACCACBACDCADBBBC"],"w":["DADABACCDDDACCBBBDBABBBBADDDABCBDAADACBB","DDAAACCBDDADCCBBDBBABBBDABADDCBBAADADBCB","DCDDBACBBDDADCDBBDBCCBBBAADDBBCADACDCBBC"]},"2015":{"m":[null,"CDCCCBDDABDBCBCACBCDDAADAAACCDDBBBCADBCB",null],"s":["BCCBBDACDDCDBABBDAABCDBDABCBADADCCBDACBC","BDBABDACDCCBBADBBBDBADDCACCBABCDCAADCDBA","CBAABBACDDDABABBBDCBDDBDADCCAACDCCDDACBD"],"w":["BACCDDABACAADCDDACDCBDCAAACCDCCBBABDAACA","BCACDDCDADBDDADCABCBBCCABCCDDCABBABDCABC","ABBDDDCCACBADDCBABDBBDAAAACDDBBBBAADDACA"]},"2016":{"m":[null,"BCACDDACBCDCCBABDDCCAADDDADDCCCDCCBBBCCD",null],"s":["DCCBCBACBCADDCADDCBDACCCCDCDDABBDCDBDCBA","DACACBACBBCDDBBBDDDCAADBBCAADABBCDDCDCBD","DCCDCAACBCBDDCADDBCDAAADCCBCDACBCDDBBDBB"],"w":["CBCBBDCBADBABDCACCDCCBBCDDBCCBDDBCBCBCCB","CBCCABCCABAADDCACCACABACCDCBCBACBBBDDCCA","CBDADACAAACBBDCDCCDCABBCDDDCCBCDACBBCCCB"]},"2017":{"m":[null,"BDBCDDBCAADDBBBDDDBCBCDCBBDCBACCBDCDCACB",null],"s":["BBCBBCBCAABCCDABACCDDADDBBBCAACCDDCBDADC","BBCBDCABCBBCABABCACACADDBDBCADBCCDDACBCC","BDDBDDCCCADCBCABBDCCCADDBCBCABBCCDBBACDC"],"w":["DBCDCACBCBBCBCBBBCABCABDAAAACCBACCCBBABC","DBBCDCDDDCBCBCBBBDBABBADABCACCBDCDBCBABC","BCCBBACBDCBDBCDBBBCBBAADABADCABACCCDBABC"]},"2018":{"m":[null,"CBCDBCCACACABBBABBCDAABAABCBCCABCDDBCABB",null],"s":["BABDBACCCBBDBABCCACBAACDBBBCCCDCDAABCCAD","DDBDABCCDDADDABCCBBCCDACBBBCCABCAAABACBC","BADBBACCBBCDBABCCCBADDBCAABCCCADBAABBCAC"],"w":["DCDADABBDBDDCCDDCCCCBBBBDDDAAAACBACCAAAD","BDCABACDCCDDABDCCBDCABBBBCAAADACBACCBADD","BCCADCBDACDDBDDAABABDBBBCBDAAAACBACCCAAB"]},"2019":{"m":[null,"CADCCBACABADCDDDDDACDCCAABDDAADBDBCCAABC",null],"s":["DABDBDACCCACCDACADBDCBABDDCBADADCDADDCCB","DCBBBBADCBBCCDABADACCBDBCDCBBDBDCDADACCB","ACDCABAACDCBADAAABDBAAABCDCBCDADCBADBCCA"],"w":["AADBCAADDBBABBDBBBBDBDCCDDBBCBABDDCCCBDD","AADBCACDCBBDBBAACDBBBADCACABCBABCCCBDBBD","AADCBCCDBADAACDCDCBDBBDCAADBCBABADDBABBD"]},"2020":{"m":[null,"ABDDACCBCADABABBDDACDDBACDDBCCCCCBDBBACB",null],"s":["ACCACADCABBDACDDCCBABBBBCACABBBCCACBDBDD","DDBBBACCCDBCDDDDDCDADBABAAACCBCBCACBDDBA","CBDADACCABBBBDDDBCABBBCBDAAABBCDCACCDDAA"],"w":["CDDABBDCCDCCABADCADBDDCCBCABAADBBDACBBCC","CBDAAADDCDCCCBCDBBCBABACADABDCDCBDCCDBAC","CDDADBACCDCDDCDCABACBBBCCDABCABDCDBCCBAD"]},"2021":{"m":[null,"DADDBADADCAABCAACBBACCCABDBBCABDCCDCBCBA",null],"s":["BBDAADDBDABDCCBCBBBDADBCCACACBCBCDAADBCD",null,"BDDAACBCDACCACDABBCBABDCCACDBDCBDBAADDBD"],"w":["BCDBAABDCCABBABCDCDCBABBAADADCCDBDCCBDAD","CCDBABDBCDBABDCCABCCBACBABAABDCDCDACCBDD","ACDCACDCCBBDBDACBDACBBCBACCAAACDDDCBABDD"]},"2022":{"m":[null,"ADADCCAADCBCCDCBCACBBCDCBADAAAABBBCDDBCD",null],"s":["CADABACADDABDBBBDBDDCCAAABCDACDBACCCBCCB","CADCBCADADBBBDBBABDACCCAABDDBCDADCDCCBAC","DADBBAADADBBAABCCBDDCCCABAADADDCCCCDBBDB"],"w":["CBBDCABCBADBCBCACAABADADDDBDDAADBCCCCDBB","ACABCCDCDBDBCCBACCBBDBAAABADDABDBDCCDCAD","DBCCCACCBADBCDDACCBBCAABADADDADDBCCDABCB"]},"2023":{"m":[null,"DCAAADDBDBCBBCADDBCBBCACADCBCCBADABCABCD",null],"s":["DCDBDAAABABCDBBCCCBDAACABCADBACDDDBBADBC","CADACBBDAACCDAADCDCCBBACCDDADCCBADDBCBDB","ABDDBBDCBDBDBDACDDCAADCCBCBACAACABBDCBDD"],"w":["DCBABDBACDDABBAADADADBBBCBCBACAADADCCADA","DCDDBAABABDCDDAADCBAADBBDCBDBACDBCCCCACD","DAABBAADCDBBBACBDBADACBAACDCBBCCABDACACA"]},"2024":{"m":[null,"DCBCADDABDBCAACBCBADBBDCACADCABABAACDDDC",null],"s":[null,null,null],"w":[null,null,null]}},"Combined":{"2010":{"m":[null,null,null],"s":["BBDDBCABCACDCBADDBCCDBCACCBBCCDDBDDCAAAC","BDBBDCBCACADCDADBCBBCCDCABCCADDBDDCCBAAC","BDBBDCBCACADCDADBCBBCCDCABCCADDBDDCCBAAC"],"w":["BAACBCADBDDAABDBCADADACCCDCADCADCABCABBD","CABABDCABABBDADBBDADAACDCCCACDAABCDCBBAD","BCAAACDBBADDDABCDBAAADCCDCCDACDACACBBBAD"]},"2011":{"m":[null,null,null],"s":["CACCACCABDBBBBCCBCADAADBAADADBCCDACDBBDB","CACCCCAABDBBBCBBCCAAADADBDADCBACDCABDBBD",null],"w":["CBDAACBDACBADDBDADAACACBCACCBCCADDBBCCDC","ACBDBACACDADBBDDAADACBACCCACCBACBDDBCDCC","BACDCBACDADBADBCAAADDCBAACCBCCCABDDBDCCC"]},"2012":{"m":[null,null,null],"s":[null,"ABDABACBCDBBABDCACCABCCADABBCBABBBCACBCA","ABDABACBCDBBABDCACCABCCADABBCBABBBCACBCA"],"w":["BACDCCDAADBBABDDAABDCBAAADBBBAACBADADBBB","ABDCDCCADBAABBDADBADACABBADABBCAADABDBBB","BBABCCDBADBAADBCBCDCCCDCADBDBAABBAAADCDA"]},"2013":{"m":[null,null,null],"s":["ACDDBCCBDBAADBAACBDCCDCABCDCDCBACACADBDB","ADDDCAADDBCAABAACBABBCDBCDDABABADACDCDAD","CADDCBBDCABADBACABCDDCBCADCCBDCCAAACDDBB"],"w":["BABBADCADBCABCBCDCBDAABCDCDCADABBBAADCDB","BABBADCADBCABCBCDCBDAABCDCDCADABBBAADCDB","DACCACDCDCACACBCDCBBACDACBCABAABBBCADDCA"]},"2014":{"m":[null,null,null],"s":["ADDDABCDBBDBCBDCCCADCBACDBBADABDBDDBBCAC","CDDBCABABABBCDCCDACADBCCBABDDABDAACABBBC","ADDDDABCBDBCBBCCDACCDACBBBDDAADBBDBDBCCA"],"w":["BBBCCCBDCCACDADABAADCABBADDACCAADBBCBBDA","BBBCCBCCCDCADBADAAACADBBADDCACAADBBBCBAD","BCBCABCDCDBACACCBACDDDAADDACABADDBBCBBDD"]},"2015":{"m":[null,null,null],"s":["ACBAABACCAADBABCACDDABAAADCDCDCBBCAADBAB","CCBBACBCAAABCCCBDBDDAACAABACCBABBCDAABDA","BCBCBCBDCABABDABBDCDAACAADBBCABDBBAADDBC"],"w":["DCCCBCCBADBBBDBDDDBBACACACDADBBDCACBDABD","DCDCBACBDDBBCCBDDDAABCACBCDBDABCBABDDAAD","DACDDCBDBBBCCBBDCDADACADDACCCABACBBDDADD"]},"2016":{"m":[null,null,null],"s":["DCAABDCBADBDCBCBDCCACABDABCDBCABBBAACCDD","DCDCACDBCABBCBBCDBCDAACDBBCABABBDBDDCCDC","ACCDBDBDBBDDCBCBDCDBDAAACBACBDABABDCBCDD"],"w":["DCBCBDDBCADADCBBDBADBBDACDABAAADDABACACC","CCABDBDDBADDDCCCDBABBCACADBBDDADACBABDCC","DCBACDDCDADDACACDBDDBABCCDBDDDADCBAABBCD"]},"2017":{"m":[null,"ABABBACCDDDDABBADAABDBCBCCDADABCBABACBDD",null],"s":["CDABABCBABCDCDBDBCACCDACCAABCADCCBAACBBB","DBBCABCBAACBDDDACCDBDCDCBAABCDABDAADCBCC","DBBCABCBAACBDDDACCDBDCDCBAABCDABDAADCBCC"],"w":["BBCBBCDCDAACBBDBABACADDCABCBBACCBADBCBAA","BDCCBCBBDDAAABDBDBABACADABCBBDDDADACBABD","BBCCCBACCAADBBDDBBADAACDABCBBCCCBDACCABB"]},"2018":{"m":[null,"DACBDBAAACBCBDCBBDDCCAAABCBADBCCDBBCBDAB",null],"s":["DBCDADBCCDBDCABBCCDCBDCBAADCCCDBDACDBBAA","CDCDABBCADCDAADCADDCBDCBDABCDDABDCDCBBAD","CDCDABBCADCDAADCADDCBDCBDABCDDABDCDCBBAD"],"w":["BCBCAADDCBCBABBABDDACBABCADCAADBACBCBBDC","CCABADDCDCBBABACDBDDABBACAAABADABCABCCCD","BCCCDDDABCBBABDDBBCAACBABCACADDABBCBBCAC"]},"2019":{"m":[null,"BCABDABDACBBDCBBDBBDBABCDCDDAABCCDDDBBBD",null],"s":["ACCCBBBDBDADACDCCDCCDBAABBABABADBDDCCCBB","BACABDDBDDBCDCCACDAADBADCBBCCBDBBADDBDAB","BDBBDDDBDCBDACACCACCDBAABBDAAABBDDBCBCDB"],"w":["AABACABCDDBBDDDBDCBBCACDAACBDDDAABAABCDC","BDCBBDCADBBBACABDCCBACDDDBACADADCDACBDCD","BDCBBDCADBBBACABDCCBACDDDBACADADCDACBDCD"]},"2020":{"m":[null,"DBBACAABDCABCCCBDCABCABDCDAADABBCDDCCACA",null],"s":["DADAABCBDBCCBACACBCBCDDBDDBBADCDDBABCCDD",null,null],"w":["CCCBACDADADBADDCBCCACADBDABABDCBCBDACBDB","DCBBBDCCBDACADDCCBCDAAACDBBABBCBDCDDDBBA","BCBCCCBDAABDABDDABCBCAACDABCABDCBBDADABD"]},"2021":{"m":[null,"AACCBABCBDACDDCDAABABDCCBADDDABBDACCBCDA",null],"s":["ACDABBDCAAADCBBDDAACABCBDCCDACBCDADBBACD","DCBBABBDCDDACBADDACCBCCBDCACBDCDCAADBBAD","CADABBDCABBDCABDAABCCDCBDCBDCADACDABABAD"],"w":["CAABACBDBBCDDABBDBCCACBDCDABDAAACBCDCDAD","CDCAAAACDABDBCABDCDCADBBCABADBBADACCCDAB","CDCAAAACDABDBCABDCDCADBBCABADBBADACCCDAB"]},"2022":{"m":[null,"DABCBADCDDABCDBABBCCADCCDDADADABCCCADABD",null],"s":["BDBACDCDBADADABCDBDACCABBCDACDDCDCBBBDAA","BDDACADDDCCBADBCABDCCCABBADBADCBCDCDBBAA","BDBDCDAADCABCBBDAAACCCABCDDBBDCCDBCBDBAA"],"w":["BDABDCDCDCBAADDBACAABBADCDCCCDBBCABBDACD","BDBDDCBCACCADCBBABAABDACDDCCDBBADACBDAAD","BDBDDCBCACCADCBBABAABDACDDCCDBBADACBDAAD"]},"2023":{"m":[null,"BCCCADDBABBDBDBCACBDADCDABADDACDAABBCCBC",null],"s":["CABCCDBADDBBADDBCBCCADBABCABDDABCBACADAC","CBBDCCAACDAAABDADBBBBCCCCABACCBDCDBBDDAB","CCBDCABABCBAACCBABDBBCCCADCCCACBCDCABBDB"],"w":["BACCAAADBBCDCBCCACBDADDCBDADBAABBDACCDBC","DDBCDABDCAAAACDBBCAACCCAACCCADBAABDBDCCD","DDBCDABDCAAAACDBBCAACCCAACCCADBAABDBDCCD"]}}}');

/***/ }),

/***/ "./src/json/OL_subjects_ms.json":
/*!**************************************!*\
  !*** ./src/json/OL_subjects_ms.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Physics":{"2016":{"m":[null,"CCDCDBACCDCADBBCCBBBBDBDDCAABBCABCCBDCAA",null],"s":["AAADACBCBCCDBACCDABACDDBDBDABAADABBCBDDB","ABBAAACBBABDBABDDCACDCABDAABAAADABBCBADC","ACCACCDCBABDBADBCADCCDCDCBDADBADABBCDCBD"],"w":["ADAABBACACCDDCBACBBDCDBACDDABABDACBCDCDC","ADCBDBABBCCDDDACBCCBDDABCAADADAACABCCADC","ADABBBDCCBBCDDCADBBCDACCBDACADDABBACADCA"]},"2017":{"m":[null,"BDBBBACCCBDBBCACCACDDBBACBACAABABBADDCCA",null],"s":["ABBCCDCBAACCCABDCDBDDAADACCADCBBCDCDBBAB","ABCBBBCACABDCADADDBCDAABCCABDDABBBDABCAC","ACCBCBBDCCBDCAADCDBADAABCDAAACBBADCDAAAB"],"w":["AAADBCBCDDBBBAADACACACDDABBCCACBBBADCABA","BDCDCCCCCCABBADADCBCDAADBCCCAACBCBDABBDA","AAADCDDCCBDBBADAACCCDCADDDBCABCCDBCDCACD"]},"2018":{"m":[null,"DCDDCCADBBBACBDADBACDBADCBDCCABDADDAACDA",null],"s":["ACDBAABBCCCCDDBBCBDBADADCBCCDBDBBCAADDCA","ACBCDCDBCDDCBDBBBDBDAAADCBBCDBDBDAAADDAA","ACABAABDBBBDBDBCBBBDAADBCDDCCCDBACCCDCDA"],"w":["BCBDCDADCBCAAADAACBBCDBBCBBACDADCACABABA","BBBDADADCCCAAAADAACACDCBBBABDCBADADABCBC","BAADCDCCCCCAAADDDBACCABBBABDCACDACCCBDBC"]},"2019":{"m":[null,"DCCABDCBBACBCBDDCCDCCCDADBCCBBACAABADCAC",null],"s":["CCDCCDDCCBCACAABDBBCBDDBADDBCBBABCDCDCBB","CCDDCBBCCCADCAABBBDCDBDBABDBAABDCADABCBC","CDDDCDDBBACBCDABDBCADBDBABDBCCBCCBCCADBA"],"w":["CCBCDBDCBCDCCBCDAACBACADDDCDBDABBCBCAABA","DCBADCDCBCCBCCBACAADDACBDDDCDDAAABBCDBBA","CDBBBADCBACCCCABADDBABDDDDCDDBCBBBBBAACC"]},"2020":{"m":[null,"AADDCDACCBCCCDBCACACDAADADCCACBDDDBCCBBB",null],"s":["BAACDBCAACBACBACAACABCCACCBCCABACBBCADAA","AAACBCBCABCACBADAADBABCADCCBCCABBBCBADAA","BAACADBBDDCACCDBAABDBCAAACDACDABABBAADAA"],"w":["CADBBBABCCCABCDACCACDCBBABBCACACABACCDAC","DCCBDCABCCDACCDCCACADCDBBBBACBCABBACDAAC","BBBBAACBCCCABCDADBBCDCDBACBBAAACBDAADADC"]},"2021":{"m":[null,"BDCDCACCCDBCACDCABBADACDDBCBDCBDDADCDCBB",null],"s":["CBADADDDCDADDCBABBACCBAADBCBCDBCDBBBDDAB","AADCDDDCABADCCBADCAACBBACCDADCDDCDBCCDBB","CABCDDCDBCDDADBCADBACBAABDCDCDCBCBACDABB"],"w":["DDACCBADBBACBCDBDBBCDACBBBCDBDCACCADCABA","CDBCABCDAACCDCDBCCBCBACBAABDDDDABDBCCBAB","BADCABBDCCDCBCBBACBCAAABDCADDDAAADAACBAB"]},"2022":{"m":[null,"BDDAACCDDBDBCBBCBBCCBDCBDADDABAAACBCDADB",null],"s":["BDACCADCDBACADBBBABCBACBAABDABBAACCDDCAD","DDDCCCDBBBBBACBBBABABCBDAABBBDCACDDDACBB","BDCCCCDAABBCAAACBABDBCCCAABCDCCBABBDCCBA"],"w":["DDDBABBCDCCAAABDCBCBCACABCABDCBDDADBBCAC","ABCBDDBBCACCAADADACBADDBBDCBDABDBDCACACD","CBDBCDCBCCCCAABABDABCDDBBBABAADADDCACCDC"]},"2023":{"m":[null,"BDBADDBDBACDCDDCCCCCDACBACDCCBDCDDCDBBDA",null],"s":["DBCDDABCAACADCBBAABBDACBCDCCBCCDCBACADDD","CCCBBBCBCABDAABCBAADBCACDACDDCDCDBABCDDA","BCCCBADBDDDCBAAACDCCCBBCAABACADACCCADBCB"],"w":["DDCABBBADACAAAABDBACBCDDCCBBCBDCBABCADCB","CCCBBDCCAADBDAAADACDBADCCCCBDDDABABCCCBD","CBABCAADAACDDDCBBBDBCBACADDBDAABBADABBCB"]},"2024":{"m":[null,"BBCADDABABACCBCCDDACBDADCBBBCACADCBCCADA",null],"s":[null,null,null],"w":[null,null,null]}},"Biology":{"2016":{"m":[null,"CDDBDBABCDDDCCBABCCCBCAADCAAACBDBCCBDDBA",null],"s":["CCCBBBBBCACBDACBAAADDDCBDBBBCBBABDCBDBAA","CDABBADCBAAABCACCBCBADDBBADDBBDACBCABDAA","CBABBBDCCACCBCBAACAABADDDBBCCADACBCBDBCA"],"w":["DBDBACBACBCACCABABBCDABDBBACBDACDCCBCDAA","CBDBDCDAADCCBCACADBCADBCCBACCADBCDDCCDAB","ADDBCCADCACADAABACBCBCBACBACDCBDCBACCDAC"]},"2017":{"m":[null,"CBCDCDCCABDCABCCDCBDADDABDCBBCCBCCCCDDAA",null],"s":["BCCBCBDABBDCCBBADDCBAACCDBDBDCADADBBBCBA","BCCBCBDACDACCBCCDDBBDADBDCDBDCACDCABBCBA","BCBBCDAAADDCCBCADADBAAADCDDBDAACADACBABA"],"w":["DACBCBDBDCDBABBBBAACADAAADCACBCCDBDDDDAC","BABADBAAABABBBCBDABCAAABADCDACDCBBADDDBB","DADDABABCADBDBCBCACCAAAAADAAABABDBCCDABC"]},"2018":{"m":[null,"BDDABDBADAACBDAADACBBBCBABBCBDCABBBBCBBC",null],"s":["ABCDBBABCABBBACCBDAABDCBCCDABDBBBDCBCACD","ABCDBBBBCABACDDBBDAABADACBDCDCACACACDADA","ABCDBBABCABBAAACBDAAADDBBCCDBBBBCABCABCD"],"w":["DBABBDDBDACCCCDADBACDCACBDCDCBBDCDBCDCBB","DBBBBCDCDACACDDADBACACBCBDCDCBBBBDBDBDDD","DACBBADDDBCDCACADBACCCBCCDBCAADBABCDBCDD"]},"2019":{"m":[null,"CADCCBACADBDCACBCCCCCDBADBDACCBADADBCBDB",null],"s":["BCBBBCDCCCCBDCABBCCCAAADCCCADADCDDBDDDDC","CCBBCCBACCCBACDBBDCAAADADCACCAACBADAADBD","CCABDCDBCCCDBCCBBACBACAAACCDAAACABDCCDCB"],"w":["DBCCCABACAABCABDBABDACBCBBACBCADCBCBDDAA","BDACCABADDABBACDDABCABBBBCBDBDABBDCBDBAA","CDBCDADABDABCADABACCABBDBDBCBBACDCBCCBAA"]},"2020":{"m":[null,"BBBDBABACCCBBCBADDADCCCBCBAACBBDDBABCBCA",null],"s":["DADAABBBDCCCCBABCBCCBBACDDBADBBCBCCABBAC","DAABAABBCACDDBCCBCCBBAACABBABBDCBCCABBCC","DABCABBBADCACABACCCBDDDDDACBCCCABCCABBDC"],"w":["DBDCADABDDADBADDDDABCBDDCAABADBBBBAACADC","ABDCADABDDAABADCDBDBCDCDACCDCBBACAACCACB","BBDCADABDDACBCDADDDBBDCDCDDACDCAACDBBDBC"]},"2021":{"m":[null,"DDCCCDADBBBDCDCCBACAACCCBCDAAABBCBCADDDB",null],"s":["DADCCBBACDBDABCABBCCAAACDCDDACBDDBDBCACC","DBDBCBBACCBAABCADCCAAACABDBBDCACBCDBBBDA","DDDCCBBACBBCABCBACCDAAAABBBAACCCBDBCABAA"],"w":["DDCCCDBDCACBDCCDBACABDDCABCABCCDCBCBCACC","BDBCCDCDCACBCBCADABBBABBCCBADCBCDBCDCAAC","CDCCCDCDCACBCCCCCADABBCADDCAABADACCDBCCD"]},"2022":{"m":[null,"BCDBDCBBACABAABDCDABBACBBDCDDACACBBDBCCA",null],"s":["CDACABDCAADBBCDDACABBCBCBDDCDCBBBDCBAACA","CDACCBDBCADCBAADCBCCBDBBCABCCBCBBDDBAACA","CDACBBDBBADBCBBBDDBDDCBCACDABBBCBDCBAACA"],"w":["CCBABCBCDDBDCCCADBCCDACBBBADDCCACCDCDCCA","CCBBBCCABDADCCCADBCCCBABBDCDBCCCABACBDBA","CCBBBBBDCACDCCCADCCCADBBCBDCBCADDADBACDA"]},"2023":{"m":[null,"CBDCDABDAABAACDBACACCDCBDACBDDDDDACDBCCD",null],"s":["CACBDDABDACBDACABCBBBCCDBDBABDACCCCBCADC","ADCBDDCBCDACCCAABCBDDCBAADBCACCCBADBCAAC","CABBBCCDBCCAABBCDBADCACABBCDDDCCCBDACCDB"],"w":["CBABDCBBDCACDAABDBADCBCCDACBABDCBDBCCDCD","CBDBBABABBCBABDCCDCCDADCBCBBCBDDBACBBBDB","DBBCCDBACDBDBABBDBABDBCDBCCACBBDCCCDCAAD"]},"2024":{"m":[null,"ACBCABBBDCADCBABADBCCDACABAADCBBABACDDBD",null],"s":[null,null,null],"w":[null,null,null]}},"Chemistry":{"2016":{"m":[null,"BCACABCDDBBDADBBDDADCCAAAACBDBCCACCBCDBD",null],"s":["CCDBCCADCADCCDABCDDAACCCBCDDDAABDDDBADBC","DADBCCDBDADDBDCBCDDAAADBABABDACDADDCDDAB","BCBBCCCBAADBADABCDDDAAADCACDDABCBDDBCDBC"],"w":["CBCBBCADBAADAABCCBCCDCABDCACCBCCBBCBCBCA","CBCCCCBAAAABDABBDBCCDCACCBDBCBCBCBBBCBAA","CBDAABDCBABABBDAABCCDCDCDAAACBBCBACBCBCB"]},"2017":{"m":[null,"ABCCCCAADDBDBBAADBCDBCCBDCDCBCABCDCCACBC",null],"s":["DCDBCDBABBBCBCACDACDDACDABCCADDCCDCCCCBC","DCAABBBABBBCBAAADBBAAABDDBCCACADCCDACDBD","DDBCCCCABBDCDBACDADDCADDABDCACBBCCBBCDBB"],"w":["DCBACBABADBBBBCCBBABCABDAADDCBCBDCCCBBCB","CBBBBCABADBBBDCBBBBABBADABBACDACDCDBBBBD","CCCDBAABADCBBDAABBCBBAADACDCCCABDCCCBBDC"]},"2018":{"m":[null,"ACBCAAACCBCABCBACABBCADBCBCCCDABBDADCADB",null],"s":["ADACBDDBBDCABCBBCDCCCBACCDBBCCDACDADCAAB","CCDCBBDBBDCAACDDCCCCBCCABCBBCCDACAADCAAD","CDACBBDCCCCBBCDCCDBCBADBCAABCCDADBADCAAB"],"w":["BADCBCBDACCDBDCBCCCCBBBCDDCAAAABAAACADCD","AABADCBCABCBBDCDCDCCBBBDBADCDAACAAACAAAD","AADBDDCCDCCCBDBBAABCBBBACDCCAAABAAACADDD"]},"2019":{"m":[null,"ADCCCBDDACAABDBDDDCDBDBCDCDBCDDBBCDABBCA",null],"s":["BABBAAADADCBDDBBDAADCABCBDCBDDBCCCADCCCB","DCCBAACABCBBDDDBCADCCDBCBDCABDDCCCAAACBB","DCBAAADCADDADDDADACBAABCBDCBBDABCCABDCCB"],"w":["CACCABDCDACBBCBBAACBBACBCCBDABABBCDCBDDA","BACCCBBCCCBBBCBCBDAABDDBBCADBBDBDCCCBCDC","BACCCBBCDCBBDCCABBBCBDDBCCDDCBDBACDDBBDC"]},"2020":{"m":[null,"BBDACBCBCCDBCDDCBAADDACDBADDDBACCDDBADAC",null],"s":["DCCAADBCAAABADDCCDDCCBBBBBADACBDABBBDDBD","DDCBABDDAAAAACDCBDDCCDBABBAACABCACBDDBBA","DBCAABCDADACABCBBDDCBBBCBDACABBDABBADACA"],"w":["DBDADCABCDCCCDADBACBBDACCCADDACCBBCACBCD","DCDAACCBCDCCCBADBBCADAACABABDABDBDCCDBDD","DDDABCACCDCCADDCADDCCBACCAACDDAABBBDDBAA"]},"2021":{"m":[null,"CACDDADDDCACBACACBBACAAABDBDBABDCDDBBBBA",null],"s":["CBDAABDCBAADBCCDABBDCDDDCCACBCDBBCBACBBD","CBDAADDBCADCBCCDBBDCACDADCCBCBACBDAACCBD","CBDAADBBBACBCCCDCBBCCDCACBDBDDBDDAAABABD"],"w":["BCDBADCDCCBBCCBDCADCBBBBAACBDBADADACBAAA","ACDBACCBADBCCACDABDCBAABACCBCDADDDCBDBCA","BCDCACCAABBBCBBDDDACBDDBACCBADDDCDCBDABA"]},"2022":{"m":[null,"ADADCBABDCACCDCBDAABADDCDADACBDBBBCABCCC",null],"s":["BACAADAACDBBDDBBCBDCCDCDABCCDBDBACCDBCDA","BADCCAADADBBBDBBDBDBCDBAADDCCADABCCDCDCB","BABBDAAACDBBACBCCBDDCCAABAACCADDACCDBBDB"],"w":["DCBBDABCAADBCBAACCACBDADADDDDBBDBCDBACCC","ABDBDDBCDBDBDCCAACCBCDBDCABDDABDBCABDAAC","BCCCBDCCCADBADDABCBDCAADACDDDCBDBACBAABC"]},"2023":{"m":[null,"BBDACBDBACDBCDDCCADBBCABCAABBDCAABCAABCD",null],"s":["DCBABAABBACBDCCABCDBDACBDCAABBDCCDDCACDB","CDCBDBABACAACDACCDDDCBACCDDADBDADABBCCBB","ABDCDBCDDCCABCCBDAAADCACBCDACBDABBBBABCD"],"w":["DBBACBBDCBCABCCAAADACBDCBBCDBBBDDCCCACDA","DCDBBBBAACBDAAADDDDBCBACBADDBCBACCDDCCAC","CBACDCAADCADBBBCBBDDAAABACCCBABDDACDACBA"]},"2024":{"m":[null,"BCABDAADDDBADABABBCCDACADBCDCCDBBAABBABC",null],"s":[null,null,null],"w":[null,null,null]}},"Combined":{"2017":{"m":[null,"BADAACBACADDABAABABBCDBDCCADDDABCBCBDCBD",null],"s":["CAADDBCABABDCDDBCABACDDCAACDCCDCCBADCBBA","DCBBBCBDABDDCDBACCADBCACCAABCCDAACADCBCB","BADCCBCBDCDCCDADCBACAAACABCBCCDCDDBDCBBA"],"w":["BDABDCCDDAACDBDCABBACCCBDBAABCBCDDBCACAC","BDCCDBBDDDAACBDAACBADBCBDBDBBCCBADACADAB","BDDCCACBADADBBDDCBBACDCCBBAADCAABDDCABAD"]},"2018":{"m":[null,"DCCBDBADDACCADBACBCCAACABDCDBCCABBBCCCDA",null],"s":["DACDDBCBCABADABBCDBCBACCADABDADBDDCBABDA","CCDBDCCADADDBADCBDACBACCCDADAACDBCBCABAB","BCBDDBDCCADACABBCDBCBDAADDDCADCDACCABBDB"],"w":["BCBDBACBDBABACBDACCDABAABABDABDBACCCBAAB","ACADBBDDCCBBACAADBCDACADAADBCADDABADBACB","DCCBBDDBABCBACDBBDBAABACCACDACDABBDBACAA"]},"2019":{"m":[null,"BCBDBBCABACDDCBDDBCBCABCACDCCABBCDDABBCC",null],"s":["DBDACBBDDDACCCDCACADBBADBADBABBCDDDCBBAB","DCBACDBDDDCCBCCADCADABDDBBDDCDACDDDBBABB","ADBCBDADDDCACCACBCDDAACDBDDADACDDCCCBDAB"],"w":["ABAAABDDBBDACCDDDCCDACADABBCCAABACACBDDD","ACBACDDCBBBCDCADCDDCDDABBACCCCAADAABCDDC","AABAADCABCDBCCDDCDBACDCABDBCCBDBCACABDDD"]},"2020":{"m":[null,"BCBADADBDBAACADBCDBCACBDDAADDABDBDCCBBBA",null],"s":["DBABCAADBCCABDACCCBDBADADDBBADCCAABDBACD","CDBBBAABDBABDACBCBAADCBDDCCDBCADCCDBBDCD",null],"w":["CBBABDADABACDDCDBDABCACBDBACCDBBABDDABBC","CBCBADBDACABDDDCDACCAACADBBCCBAABDCDABDD","BBCAADCCDAABCBCDDABDDCAACDBCDDDCBABDABDD"]},"2021":{"m":[null,"AACDBCACCDDBCDCDCBACDABACBDDCBBBADCBDCDA",null],"s":["DCDCBBCAADDBCBBDADBCDCACAACCDADBCABADBCD","DCBCDBBCDADCCDBABDCABCBDACCDDCBCAADABBCD","DCBDBBBCABADCACBDBCDBCACABCADBACCBBDBCCD"],"w":["CAADACBCABCDBDACABCBCDCBDDAADCBBCDADDBAD","CACCDDBDABADBCDBACDBCBCDAAAACDDABCADDBAB","CAABDACDABBDCCDBACABCDCBBDADDCADBBCDCDBA"]},"2022":{"m":[null,"AACBDDBCDACBCDBABDCACDAACDDBADBABCBCDCDC",null],"s":["BDBDADCDBABACBCABDCCABACBDCCCBCDCDBCBAAC","BDBADDCDDCABBBCBDCDAACBADDCABABCDDCBDACB","BBBAADADCAABDBDCBACDAABCDDCCDCBDBDACBACA"],"w":["BABBBDCDCDABADDCBBABDBCCACACDCBBABDBACDD","BABDCCACDACDBCBDDBABCDADCCABBBDBACBCACDD","BADBCDDAACBACBBABDABDDBADCACBDBDABBACBDD"]},"2023":{"m":[null,"CDDBCDBABBAACDACAAACBDDBDACCBCDDADBCABBC",null],"s":["CADADCBBADBCADDBCDBCADBBACCDDCBBCAADBACA","CBABDCBCAAADBBDABBCBBCACBCAACDBACBCDCCDB","CCACCCBADCADBCCBBBBDCCCABCDCCCBDBCADACBB"],"w":["BBAAACADDDBCABCACBDCDACCABDDBCCBDDDCACDB","CDCACDBBCCAACCDDBBAACCCABBCCCBBCAABDDBBA","ADCDACBCDADDBAABBCCDCAACBCDBAADACCABDBCB"]}},"Economics":{"2010":{"m":[null,null,null],"s":["BAACDCCBDCDADBADDBDDDAABBCBBBC","ABCADDCCBDCDABBDDADDDBAABBCCBB",null],"w":["BBCCDBBBDCBDACCDBBDDAAAABAACCD","CBBCBDBBADCBDBCCDBADDABAACAADC","CCBBBBDBDADCBBBCCDAADDABAACACD"]},"2011":{"m":[null,null,null],"s":["CADCBABCACDBDDDDAADDCDBBBACDDB","ADCCABCABDBDDCDAADDCDBDBBCDABD","ADCCABCABDBDDCDAADDCDBDBBCDABD"],"w":["ABCDADABDBBABDADCDCBCCCDADBCAA","CABDDADABDBBABCADCDCCCBADAADCB","BCABDDADABDBBADCADCCCCDABAABDC"]},"2012":{"m":[null,null,null],"s":["BADCACDBCDBDDDBACDBADCABDDDBDC","ADDBBCDACBBADDBDADCACCADABCBAD","ADDBBCDACBBADDBDADCACCADABCBAD"],"w":["BDDCBAACAACBBCADBCDAAAABCBCDCB","CBBCADBCDBDDCBAACAACBCDCBAAAAB","CDABADDCBCCACBDDDACCDCDDCBDADB"]},"2013":{"m":[null,null,null],"s":["DBCCCBACBACDABDCBDCCABCBADAAAB","ACCBCDAABACDADACBCDBCADCBBBCCB","DCBDCCABCDBCCCBACBACDABABDAABA"],"w":["BCBCBDBDCCDDBDBCAABACDDBBCBACA","CDDBDBCAABACDDBCBCBDBDCCACBABB","CCBADDDBABACCCACDCCDBDCCDDADCB"]},"2014":{"m":[null,null,null],"s":["BBDBACCCBADCDDDABBCCCDAADCABBA","CBACBBBCCCDBCDDAABCACAABDAADDC","BDBBCCADDDCDABCADCCCBBAABBACDA"],"w":["BAACBDCBBDBCACBDBCCBABDDDBACDA","AACBDCBBBBDACCBCDBCDBABBDADACD","AABABDCBBDDCACBBDCCDCABABBDDBA"]},"2015":{"m":[null,null,null],"s":["BABDAADBACCDAADDBDBACACBCDACBD","BDADDCDBCBDABADCBDDBADCCAABCBD","ABADDADBACBDCCDBBDCCBCBADAACCD"],"w":["ABCCDBAADABBCABDADCDCCCCBDDDBD","BCACBCAABABCAABDAACCBDBDCDDABD",null]},"2016":{"m":[null,"CADDACCACDBBBCAABCCABDBBAABBDD",null],"s":["AACDBADCADBADBABABDCCAACBCDCCB","DABDCABAADBAABCBCCCCBADAADDCCB","BACDBABCADCACDABDDBCCABDBCDCCB"],"w":[null,"DBBCDDCADDDCBCQBCCBAADBDCCCDAA",null]},"2017":{"m":[null,"DCDBBBDCDBBADADAABBDBACDABBBDA",null],"s":["DDBDBDCBADCDBCBBCCCBDABABCADDB","CABDBDACDDDDACCBBCABAACBBAAADA","AABCBCACBBCDBCDBBCABAADDBDACBD"],"w":["ABCAABCBCCBAADCCDDBCACCBBCBBBB","CBDDDBCBBABACDACADACDCACBCBBAB","ACCCABDDABAAADBCDDDCDCDBBABADC"]},"2018":{"m":[null,"CCCABBDAABADCBDCABBCABDDBCADDD",null],"s":["CADBCDBCDCCBDBDCCCBCADBDBDABBC","CADACDBBADCDABDCCCBDCDBBADDBAC","ABCABDBCCCDADBDCCCBDADBBADABAC"],"w":["BDCBADBBABDBCDDACCADADCCACCBBC","CDCDADBBDBBBCDDCCBABADCABCDBDC","DDBACCBBBACAADDCCBABADCDBCCBBC"]},"2019":{"m":[null,"CBCABDBCACACDCCADDBDBDADCBCAAB",null],"s":["CBBCCCBBDADCBABADBBAAABDDCDDAD","CBBABAACBADCCABCBADDCDDBDCDCDD","DCBCBACBBADDDABBABDCBCDCDCDADD"],"w":["BCCBDACCCCDDABBBDAACBDCDBDAADC","DCCBCBCCDCDCABBBAACDACDABDAABC","AACBCDABBCDADBBDABBCDDCCBDADBC"]},"2020":{"m":[null,"ACCACADDBACCDABDAABBCBCACBBCAA",null],"s":["AABBBDCBCDCDBADACCDDBCADDACDDD","DBBCBABDADCABBDACBABCCADBACBAD","DDABAABBDDCCBBDACADBBCABAACDDD"],"w":["DAABACBDDBDDAABAADACCABCDACDDC","BCCAAADBBBDAADDAACDCDABDDACBCC","CBBDCADCABDDABBAACDBBABCDACDAC"]},"2021":{"m":[null,"CDADDCCBBDACBBDABCABADADADAACB",null],"s":["DDDCCDADBCCADBDDABBDDBDDCDBABD","BBBDADCDBBBACDBABCCADBDDCDADBD","DDDBDACDBCABCCBBBBCADBDDCDBDAD"],"w":["ABDDADABCCBCDADBBACADQABADBDCD","AADCAADDCDADDACBBBCDAQAABDBDBD","ACDBDBACBABDBBCDBDCBCQAABDCDAD"]},"2022":{"m":[null,"ACBADDDCBDDCDCACBCAADQCCBDBADB",null],"s":["ACCCBDDABBABBBAACADDACBDBDCADC","DBCADBDCDABADCACCDABBDCCCDCACB","DBDABBADDCBAACABBBCCCAACCDBACB"],"w":["CAACCCDBBBDDCCCCADBDDCDDABACDA","CABBCACABBDDBBADBCCABDADCCACBA","CADCCABCBBDDDACDCCBABABDDAACAD"]},"2023":{"m":[null,"BAACCDADCADDDBAACBBBCACDCBDBAD",null],"s":["DCBBCDAACCADCBABCBDBDCDBBCBDBB","DDDCACABBCCDDDABCBDCCDBABBCACA","DCBBCDBCCBAADDBBCABDCCACADDACA"],"w":["DBADCDDBBCCDBBACCCBACACBAAACCA","DACCDADDDAAADACDACBBCBCADBCBAB","DCADCDDABBBACBBACBDDBCBDBABCBA"]}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/OL_subjects_ms.json */ "./src/json/OL_subjects_ms.json");
/* harmony import */ var _json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/AL_subjects_ms.json */ "./src/json/AL_subjects_ms.json");
/* harmony import */ var _json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json/CR_subjects_ms.json */ "./src/json/CR_subjects_ms.json");
/* harmony import */ var _media_audio_timer_audio_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/audio/timer-audio.mp3 */ "./src/media/audio/timer-audio.mp3");
/* harmony import */ var _generateElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateElements.js */ "./src/js/generateElements.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.js */ "./src/js/modal.js");
/* harmony import */ var _node_modules_pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@pdftron/pdfjs-express */ "./node_modules/@pdftron/pdfjs-express/webviewer.min.js");
/* harmony import */ var _node_modules_pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _serviceWorkerRegistration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./serviceWorkerRegistration.js */ "./src/js/serviceWorkerRegistration.js");
/* harmony import */ var js_confetti__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-confetti */ "./node_modules/js-confetti/dist/es/index.js");










(0,_serviceWorkerRegistration_js__WEBPACK_IMPORTED_MODULE_7__["default"])();

const hamburgerMenuContainer = document.getElementById(
  "hamburger-menu-container"
);
const hamburgerMenuButtonOpen = document.getElementById(
  "hamburger-menu-button-opened"
);
const hamburgerMenuButtonClose = document.getElementById(
  "hamburger-menu-button-closed"
);
const headerContent = document.getElementById("header-content");
let hamburgerOpened = false;
hamburgerMenuContainer.addEventListener("click", () => {
  if (!hamburgerOpened) {
    headerContent.style.animation = "";
    hamburgerMenuButtonOpen.classList.add("hidden");
    hamburgerMenuButtonClose.classList.remove("hidden");
    headerContent.classList.add("header-content-opened");
    hamburgerMenuContainer.classList.add("hamburger-menu-container-opened");
    let timeout = setTimeout(() => {
      hamburgerOpened = true;
      clearTimeout(timeout);
    }, 1);
  }
});
document.addEventListener("click", (e) => {
  if (hamburgerOpened) {
    const headerContentMousePos = {
      x:
        (e.clientX - headerContent.getBoundingClientRect().x) /
        headerContent.getBoundingClientRect().width,
      y:
        (e.clientY - headerContent.getBoundingClientRect().y) /
        headerContent.getBoundingClientRect().height,
    };
    if (
      headerContentMousePos.x < 0 ||
      headerContentMousePos.x > 1 ||
      headerContentMousePos.y < 0 ||
      headerContentMousePos.y > 1
    ) {
      hamburgerMenuButtonOpen.classList.remove("hidden");
      hamburgerMenuButtonClose.classList.add("hidden");
      headerContent.style.animation = "closeHeaderContent 100ms";
      hamburgerMenuContainer.classList.remove(
        "hamburger-menu-container-opened"
      );
      headerContent.classList.remove("header-content-opened");
      hamburgerOpened = false;
    }
  }
});

let importedFile;

async function readImport(e) {
  const file = e.target.files.item(0);
  const content = await file.text();

  importedFile = content;
}

const dataButton = document.getElementById("data");
dataButton.addEventListener("click", () => {
  (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
    "Your data", // title
    ["Here you can Export or Import your data to not lose your progress"], // content
    [
      "Import",
      () => {
        (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
          "Import",
          [
            "Import an existing data.json file to load it.",
            "WARNING: Importing clears your current local data.",
            [
              `<input type="file" id="imported-file" style="padding: 2rem;background: transparent;border-radius: 1rem;border: #0D1117 2pt dashed; color: #010409;" accept=".json">`,
              () => {
                addGlobalEventListener("change", "#imported-file", readImport);
              },
            ],
          ],
          [
            "  Import  ",
            () => {
              try {
                importJson(importedFile);
                document.body.appendChild(
                  (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Done", ["Date Imported"], ["  Ok  ", () => { }])
                );
              } catch (error) {
                console.log(error);
                document.body.appendChild(
                  (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Error", ["Invalid Import"], ["  Ok  ", () => { }])
                );
              }
            },
          ]
        );
      },
    ],
    [
      "Export",
      () => {
        let blob = new Blob([getExportJson()], { type: "application/json" });

        const a = document.createElement("a");
        const todayDate = new Date().toISOString().slice(0, 10);
        a.download = `My MCQ Mate data ${todayDate}.json`;
        a.href = window.URL.createObjectURL(blob);
        a.click(); // Trigger download
      },
    ]
  );
});

function getExportJson() {
  let dict = localStorage;
  delete dict["persist:viewer"];
  return JSON.stringify(dict);
}

function importJson(content) {
  try {
    const parsed = JSON.parse(content);
    const regexPattern = new RegExp(/[a-z]{3}[oac][0-9]{2}[wsm][1-3][s]?/gim);
    Object.keys(parsed).forEach((key) => {
      if (
        JSON.stringify(key.match(regexPattern)) != JSON.stringify([`${key}`])
      ) {
        throw new Error("bro gave us a broken file 😔");
      }
    });

    localStorage.clear();
    Object.keys(parsed).forEach((key) => {
      localStorage.setItem(key, parsed[key]);
    });
  } catch (error) {
    console.log(error);
    throw new Error("bro gave us a broken file 😔");
  }
}


const jsConfetti = new js_confetti__WEBPACK_IMPORTED_MODULE_8__["default"]();

// GLOBAL VARIABLES
let globalPdfViewer;
let globalPeriodicTablePdfViewer;
let globalTimer;
let timerInterval;
let userAnswers;
const subjectCode = {
  CRBiology: "0610",
  CRChemistry: "0620",
  CRCombined: "0653",
  CRPhysics: "0625",
  OLBiology: "0610",
  OLChemistry: "0620",
  OLCombined: "0653",
  OLEconomics: "0455",
  OLPhysics: "0625",
  ALBiology: "9700",
  ALChemistry: "9701",
  ALPhysics: "9702",
};

let randomImagesArray = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateRandomImages)();
let randomImageCounter = 0;

// credits button behavior
const creditsButton = document.getElementById("credits");
creditsButton.addEventListener("click", () => {
  (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
    "Credit", // title
    [
      "Thanks For using <br> the website <3",
      `Website created by <br> <a href="https://github.com/ZiedDev" target="_blank">Zied</a> & <a href="https://github.com/omar-elsherbiny" target="_blank">Sherbo</a>`,
      `Special Thanks to: <br> <a href="https://gceguide.net/" target="_blank">GCE Guide</a> <br> <a href="https://papacambridge.com/" target="_blank">Papa Cambridge</a>`,
      `Repository: <br> <a href="https://github.com/ZiedDev/mcq-mate" target="_blank">MCQ Mate</a>`,
    ] // content
  );
});

// path direction behavior
const moveBackwardsArrow = document.getElementById("backwards-arrow");
const moveForwardsArrow = document.getElementById("forwards-arrow");

let backward_stack = [];
let current_path = ''; // important to put in datatype and format of root path
let forward_stack = [];

function isBackwardAvailable() {
  return backward_stack.length > 0 ? 1 : 0;
}

function isForwardAvailable() {
  return forward_stack.length > 0 ? 1 : 0;
}

function backwardPath() {
  randomImagesArray = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateRandomImages)();
  randomImageCounter = 0;
  if (backward_stack.length == 0) return 0;
  forward_stack.push(current_path);
  current_path = backward_stack.pop();

  if (isBackwardAvailable()) {
    moveBackwardsArrow.classList.add("active");
  } else {
    moveBackwardsArrow.classList.remove("active");
  }
  if (isForwardAvailable()) {
    moveForwardsArrow.classList.add("active");
  } else {
    moveForwardsArrow.classList.remove("active");
  }

  updatePathElement(true);
  updatePathIcon();
}

function changePath(new_path) {
  if (current_path == new_path) {
    return;
  }

  randomImagesArray = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateRandomImages)();
  randomImageCounter = 0;
  backward_stack.push(current_path);
  forward_stack = [];
  current_path = new_path;

  if (isBackwardAvailable()) {
    moveBackwardsArrow.classList.add("active");
  } else {
    moveBackwardsArrow.classList.remove("active");
  }
  if (isForwardAvailable()) {
    moveForwardsArrow.classList.add("active");
  } else {
    moveForwardsArrow.classList.remove("active");
  }

  updatePathElement();
  updatePathIcon();
}

function forwardPath() {
  randomImagesArray = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateRandomImages)();
  randomImageCounter = 0;
  if (forward_stack.length == 0) return 0;
  backward_stack.push(current_path);
  current_path = forward_stack.pop();
  if (isBackwardAvailable()) {
    moveBackwardsArrow.classList.add("active");
  } else {
    moveBackwardsArrow.classList.remove("active");
  }
  if (isForwardAvailable()) {
    moveForwardsArrow.classList.add("active");
  } else {
    moveForwardsArrow.classList.remove("active");
  }

  updatePathElement(true);
  updatePathIcon();
}

let timeout;
function updatePathElement() {
  const path = document.getElementById("path");
  const pathText = current_path.split(">");
  main.style.animation = "200ms closeMenu forwards ease";

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    main.innerHTML = "";
    if (globalPdfViewer != undefined) {
      globalPdfViewer.parentNode.removeChild(globalPdfViewer);
      globalPdfViewer = undefined;
    }
    if (globalPeriodicTablePdfViewer != undefined) {
      globalPeriodicTablePdfViewer.parentNode.removeChild(
        globalPeriodicTablePdfViewer
      );
      globalPeriodicTablePdfViewer = undefined;
    }
    if (globalTimer != undefined) {
      globalTimer.parentNode.removeChild(globalTimer);
      globalTimer = undefined;
    }
    if (timerInterval != undefined) {
      clearInterval(timerInterval);
      timerInterval = undefined;
    }
    if (pathText.length == 5) {
      path.innerHTML = "";
      path.appendChild(
        createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true)
      );
      path.appendChild(createPathElement(pathText[2]));
      path.appendChild(
        createPathElement(
          pathText[3] == "m"
            ? "Feb / Mar"
            : pathText[3] == "s"
              ? "May / Jun"
              : "Oct / Nov"
        )
      );
      path.appendChild(
        createPathElement(`Variant ${Number(pathText[4]) + 1}`, false, true)
      );
      main.appendChild(
        createBubbleSheetMenu(
          pathText[0],
          pathText[1],
          pathText[2],
          pathText[3],
          pathText[4]
        )
      );
    } else if (pathText.length == 4) {
      path.innerHTML = "";
      path.appendChild(
        createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true)
      );
      path.appendChild(createPathElement(pathText[2]));
      path.appendChild(
        createPathElement(
          pathText[3] == "m"
            ? "Feb / Mar"
            : pathText[3] == "s"
              ? "May / Jun"
              : "Oct / Nov",
          false,
          true
        )
      );
      main.appendChild(
        CreateSubMenu(pathText[0], pathText[1], pathText[2], pathText[3])
      );
    } else if (pathText.length == 3) {
      path.innerHTML = "";
      path.appendChild(
        createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true)
      );
      path.appendChild(createPathElement(pathText[2], false, true));
      main.appendChild(CreateSubMenu(pathText[0], pathText[1], pathText[2]));
    } else if (pathText.length == 2) {
      path.innerHTML = "";
      path.appendChild(
        createPathElement(
          `${pathText[0].toUpperCase()} ${pathText[1]}`,
          true,
          true
        )
      );
      main.appendChild(CreateSubMenu(pathText[0], pathText[1]));
    } else if (pathText.length <= 1) {
      path.innerHTML = "";
      main.appendChild(createHomeMenu());
    }
    main.style.animation = "200ms openMenu forwards ease";
  }, 100);
}

moveBackwardsArrow.addEventListener("click", () => {
  if (isBackwardAvailable()) {
    backwardPath();
  }
});
moveForwardsArrow.addEventListener("click", () => {
  if (isForwardAvailable()) {
    forwardPath();
  }
});

document.addEventListener("mousedown", (e) => {
  if (e.buttons == 8) {
    if (isBackwardAvailable()) {
      backwardPath();
    }
  }
});
document.addEventListener("mousedown", (e) => {
  if (e.buttons == 16) {
    if (isForwardAvailable()) {
      forwardPath();
    }
  }
});
document.addEventListener("mouseup", (e) => {
  e.preventDefault();
});

function createPathElement(title, first, last) {
  const element = document.createElement("div");

  const pathElement = document.createElement("div");
  pathElement.textContent = title;
  if (title.split(" ")[0] == "CR") {
    pathElement.textContent = `Core ${title.split(" ")[1]}`;
  }

  if (!first) {
    const arrowElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    arrowElement.setAttribute("width", "32");
    arrowElement.setAttribute("height", "32");
    arrowElement.setAttribute("viewBox", "0 0 256 256");
    arrowElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    arrowElement.innerHTML = `<path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17" />`;
    element.appendChild(arrowElement);
  }

  if (!last) {
    pathElement.classList.add("path-clickable");
  } else {
    pathElement.classList.add("path-not-clickable");
  }

  const pathText = current_path.split(">");
  element.appendChild(pathElement);
  pathElement.addEventListener("click", () => {
    if (title == `${pathText[0].toUpperCase()} ${pathText[1]}`) {
      changePath(`${pathText[0]}>${pathText[1]}`);
    } else if (title == pathText[2]) {
      changePath(`${pathText[0]}>${pathText[1]}>${pathText[2]}`);
    } else if (
      title == "Feb / Mar" ||
      title == "May / Jun" ||
      title == "Oct / Nov"
    ) {
      changePath(`${pathText[0]}>${pathText[1]}>${pathText[2]}>${pathText[3]}`);
    }
  });

  return element;
}

function updatePathIcon() {
  const pathIcon = document.getElementById("path-icon");

  if (current_path.split(">")[1] == undefined) {
    pathIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m222.14 105.85l-80-80a20 20 0 0 0-28.28 0l-80 80A19.86 19.86 0 0 0 28 120v96a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-52h24v52a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-96a19.86 19.86 0 0 0-5.86-14.15M204 204h-40v-52a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H52v-82.35l76-76l76 76Z" /></svg>`;
  } else if (current_path.split(">")[1] == "Biology") {
    pathIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M224 204h-12a92.1 92.1 0 0 0-64-143.22V32a20 20 0 0 0-20-20H80a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V85.08A68.1 68.1 0 0 1 204 152a67.39 67.39 0 0 1-24.18 52H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24m-100-80H84V36h40Zm-52 64a12 12 0 0 1 0-24h64a12 12 0 0 1 0 24Z"/></svg>`;
  } else if (current_path.split(">")[1] == "Physics") {
    pathIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M209.84 47.44A91.42 91.42 0 0 0 144.62 20h-.35a91.44 91.44 0 0 0-65.12 27l-61.39 62.17a20 20 0 0 0 .08 28.21L46.5 166a19.89 19.89 0 0 0 14.15 5.86h.11a19.86 19.86 0 0 0 14.2-6l60.87-62.39a12.07 12.07 0 0 1 16.77-.12a11.63 11.63 0 0 1 3.5 8.35a12.85 12.85 0 0 1-3.66 9.11L90.19 181a20 20 0 0 0-.21 28.5l28.66 28.66a20.08 20.08 0 0 0 28.15.14l61.76-60.44l.09-.09c36.01-35.99 36.54-94.46 1.2-130.33M60.62 146.21l-23-23l18.19-18.41l22.88 22.88Zm72.2 72.18l-23-23l18.61-18l22.88 22.87Zm58.89-57.62l-23.23 22.73l-22.78-22.77L169.21 138l.15-.14a37 37 0 0 0 10.74-26.37a35.44 35.44 0 0 0-10.85-25.41a36.2 36.2 0 0 0-50.44.48l-.1.11l-23.25 23.82l-22.78-22.77l23.5-23.8A67.55 67.55 0 0 1 144.27 44h.26a67.62 67.62 0 0 1 48.21 20.29c26.11 26.49 25.64 69.76-1.03 96.48"/></svg>`;
  } else if (current_path.split(">")[1] == "Chemistry") {
    pathIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M225.15 197.71L164 95.81V44h4a12 12 0 0 0 0-24H88a12 12 0 0 0 0 24h4v51.81l-61.15 101.9A20 20 0 0 0 48 228h160a20 20 0 0 0 17.15-30.29M140 44v55.14a12 12 0 0 0 1.71 6.17l35.13 58.54c-10.79.86-25.15-1.31-43.42-10.56c-14-7.08-27.46-11.33-40.27-12.76l21.14-35.22a12 12 0 0 0 1.71-6.17V44ZM55.06 204L79 164.19c13-1.11 27.62 2.42 43.62 10.52c19.61 9.92 36.25 13.31 49.85 13.31a75.44 75.44 0 0 0 17.64-2.02l10.83 18Z"/></svg>`;
  } else if (current_path.split(">")[1] == "Economics") {
    pathIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v99l43.51-43.52a12 12 0 0 1 17 0L128 127l43-43h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12v40a12 12 0 0 1-24 0v-11l-51.51 51.52a12 12 0 0 1-17 0L96 129l-52 52v15h180a12 12 0 0 1 12 12"/></svg>`;
  } else if (current_path.split(">")[1] == "Combined") {
    pathIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M219.23 159.2a196.66 196.66 0 0 0-18-31.2a196.66 196.66 0 0 0 18-31.2c11.84-26.31 11.69-47.48-.43-59.6s-33.29-12.27-59.6-.43a196.66 196.66 0 0 0-31.2 18a196.66 196.66 0 0 0-31.2-18c-26.31-11.84-47.48-11.69-59.6.43s-12.27 33.29-.43 59.6a196.66 196.66 0 0 0 18 31.2a196.66 196.66 0 0 0-18 31.2c-11.84 26.31-11.69 47.48.43 59.6c6.13 6.13 14.58 9.2 24.8 9.2c10 0 21.77-2.92 34.76-8.77a196.66 196.66 0 0 0 31.2-18a196.66 196.66 0 0 0 31.2 18c13 5.85 24.74 8.77 34.76 8.77c10.26 0 18.71-3.07 24.84-9.2c12.16-12.12 12.31-33.29.47-59.6m-17.41-105c5.25 5.26 1.79 26-16 53.78c-5.61-6.66-11.65-13.25-18.07-19.67S154.7 75.83 148 70.22c27.82-17.83 48.56-21.29 53.82-16.04ZM171.24 128a288.6 288.6 0 0 1-20.51 22.73A288.6 288.6 0 0 1 128 171.24a288.6 288.6 0 0 1-22.73-20.51A288.6 288.6 0 0 1 84.76 128A298.55 298.55 0 0 1 128 84.76a286.83 286.83 0 0 1 22.73 20.51A286.83 286.83 0 0 1 171.24 128M54.18 54.18c1.46-1.45 4.1-2.24 7.75-2.24c9.53 0 25.94 5.39 46 18.28c-6.66 5.61-13.25 11.65-19.67 18.07S75.83 101.3 70.22 108C52.39 80.18 48.93 59.44 54.18 54.18m0 147.64c-5.25-5.26-1.79-26 16-53.78c5.61 6.66 11.65 13.25 18.07 19.67s13 12.46 19.67 18.07c-27.74 17.83-48.48 21.29-53.74 16.04m147.64 0c-5.26 5.25-26 1.79-53.78-16c6.66-5.61 13.25-11.65 19.67-18.07s12.46-13 18.07-19.67c17.83 27.74 21.29 48.48 16.04 53.74M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"/></svg>`;
  }
}

const pathIcon = document.getElementById("path-icon");
pathIcon.addEventListener("click", () => {
  if (current_path != "home") {
    changePath("home");
  }
});

// side bar
const openedSideBarArray = [];

// creating side buttons for ol subjects
const sideGroupOl = document.getElementById("side-group-ol");
Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__).forEach((subject) => {
  const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
    level: "ol",
    subject: subject,
    generateContainerCallback: () => {
      const sideSubjectYears = document.getElementById(
        `side-ol-${subject}-years`
      );
      Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject]).forEach((year) => {
        let opened =
          openedSideBarArray.indexOf(`ol-${subject}-${year}`) == -1
            ? false
            : true;
        const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
          opened: opened,
          level: "ol",
          subject: subject,
          year: year,
          generateContainerCallback: () => {
            if (!opened) {
              openedSideBarArray.push(`ol-${subject}-${year}`);
            }
            const sideYearSessions = document.getElementById(
              `side-ol-${subject}-${year}-sessions`
            );
            Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject][year]).forEach((session) => {
              if (
                JSON.stringify(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject][year][session]) !=
                JSON.stringify([null, null, null])
              ) {
                let opened =
                  openedSideBarArray.indexOf(
                    `ol-${subject}-${year}-${session}`
                  ) == -1
                    ? false
                    : true;
                const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
                  opened: opened,
                  level: "ol",
                  subject: subject,
                  year: year,
                  session: session,
                  generateContainerCallback: () => {
                    if (!opened) {
                      openedSideBarArray.push(
                        `ol-${subject}-${year}-${session}`
                      );
                    }
                    const sideSessionVariants = document.getElementById(
                      `side-ol-${subject}-${year}-${session}-variants`
                    );
                    Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject][year][session]).forEach(
                      (variant) => {
                        if (
                          _json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject][year][session][variant] != null
                        ) {
                          const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
                            level: "ol",
                            subject: subject,
                            year: year,
                            session: session,
                            variant: variant,
                          });
                          variantElement.addEventListener("click", (e) => {
                            if (
                              e.target.id ==
                              `side-ol-button-${subject}-${year}-${session}-${variant}` ||
                              e.target.id ==
                              `side-ol-${subject}-${year}-${session}-${variant}-title`
                            ) {
                              changePath(
                                `ol>${subject}>${year}>${session}>${variant}`
                              );
                            }
                          });
                          sideSessionVariants.appendChild(variantElement);
                        }
                      }
                    );
                  },
                  removeContainerCallback: () => {
                    let index = openedSideBarArray.indexOf(
                      `ol-${subject}-${year}-${session}`
                    );
                    if (index != -1) {
                      openedSideBarArray.splice(index, 1);
                    }
                    const sideSessionVariants = document.getElementById(
                      `side-ol-${subject}-${year}-${session}-variants`
                    );
                    const variantsLength =
                      sideSessionVariants.childNodes.length;
                    for (let i = 0; i < variantsLength; i++) {
                      let timeout = setTimeout(() => {
                        sideSessionVariants.removeChild(
                          sideSessionVariants.childNodes[0]
                        );
                        clearTimeout(timeout);
                      }, 100);
                    }
                  },
                });
                sessionElement.addEventListener("click", (e) => {
                  if (
                    e.target.id ==
                    `side-ol-button-${subject}-${year}-${session}` ||
                    e.target.id == `side-ol-${subject}-${year}-${session}-title`
                  ) {
                    changePath(`ol>${subject}>${year}>${session}`);
                  }
                });
                sideYearSessions.appendChild(sessionElement);
              }
            });
          },
          removeContainerCallback: () => {
            let index = openedSideBarArray.indexOf(`ol-${subject}-${year}`);
            if (index != -1) {
              openedSideBarArray.splice(index, 1);
            }
            const sideYearSessions = document.getElementById(
              `side-ol-${subject}-${year}-sessions`
            );
            const sessionsLength = sideYearSessions.childNodes.length;
            for (let i = 0; i < sessionsLength; i++) {
              let timeout = setTimeout(() => {
                sideYearSessions.removeChild(sideYearSessions.childNodes[0]);
                clearTimeout(timeout);
              }, 100);
            }
          },
        });
        yearElement.addEventListener("click", (e) => {
          if (
            e.target.id == `side-ol-button-${subject}-${year}` ||
            e.target.id == `side-ol-${subject}-${year}-title`
          ) {
            changePath(`ol>${subject}>${year}`);
          }
        });

        sideSubjectYears.appendChild(yearElement);
      });
    },
    removeContainerCallback: () => {
      const sideSubjectYears = document.getElementById(
        `side-ol-${subject}-years`
      );
      const yearLength = sideSubjectYears.childNodes.length;
      for (let i = 0; i < yearLength; i++) {
        let timeout = setTimeout(() => {
          sideSubjectYears.removeChild(sideSubjectYears.childNodes[0]);
          clearTimeout(timeout);
        }, 100);
      }
    },
  });
  subjectElement.addEventListener("click", (e) => {
    if (
      e.target.id == `side-ol-button-${subject}` ||
      e.target.id == `side-ol-${subject}-title`
    ) {
      changePath(`ol>${subject}`);
    }
  });

  sideGroupOl.appendChild(subjectElement);
});

// creating side buttons for al subjects
const sideGroupAl = document.getElementById("side-group-al");
Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__).forEach((subject) => {
  const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
    level: "al",
    subject: subject,
    generateContainerCallback: () => {
      const sideSubjectYears = document.getElementById(
        `side-al-${subject}-years`
      );
      Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject]).forEach((year) => {
        let opened =
          openedSideBarArray.indexOf(`al-${subject}-${year}`) == -1
            ? false
            : true;
        const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
          opened: opened,
          level: "al",
          subject: subject,
          year: year,
          generateContainerCallback: () => {
            if (!opened) {
              openedSideBarArray.push(`al-${subject}-${year}`);
            }
            const sideYearSessions = document.getElementById(
              `side-al-${subject}-${year}-sessions`
            );
            Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year]).forEach((session) => {
              if (
                JSON.stringify(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session]) !=
                JSON.stringify([null, null, null])
              ) {
                let opened =
                  openedSideBarArray.indexOf(
                    `al-${subject}-${year}-${session}`
                  ) == -1
                    ? false
                    : true;
                const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
                  opened: opened,
                  level: "al",
                  subject: subject,
                  year: year,
                  session: session,
                  generateContainerCallback: () => {
                    if (!opened) {
                      openedSideBarArray.push(
                        `al-${subject}-${year}-${session}`
                      );
                    }
                    const sideSessionVariants = document.getElementById(
                      `side-al-${subject}-${year}-${session}-variants`
                    );
                    Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session]).forEach(
                      (variant) => {
                        if (
                          _json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session][variant] != null
                        ) {
                          const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
                            level: "al",
                            subject: subject,
                            year: year,
                            session: session,
                            variant: variant,
                          });
                          variantElement.addEventListener("click", (e) => {
                            if (
                              e.target.id ==
                              `side-al-button-${subject}-${year}-${session}-${variant}` ||
                              e.target.id ==
                              `side-al-${subject}-${year}-${session}-${variant}-title`
                            ) {
                              changePath(
                                `al>${subject}>${year}>${session}>${variant}`
                              );
                            }
                          });
                          sideSessionVariants.appendChild(variantElement);
                        }
                      }
                    );
                  },
                  removeContainerCallback: () => {
                    let index = openedSideBarArray.indexOf(
                      `al-${subject}-${year}-${session}`
                    );
                    if (index != -1) {
                      openedSideBarArray.splice(index, 1);
                    }
                    const sideSessionVariants = document.getElementById(
                      `side-al-${subject}-${year}-${session}-variants`
                    );
                    const variantsLength =
                      sideSessionVariants.childNodes.length;
                    for (let i = 0; i < variantsLength; i++) {
                      let timeout = setTimeout(() => {
                        sideSessionVariants.removeChild(
                          sideSessionVariants.childNodes[0]
                        );
                        clearTimeout(timeout);
                      }, 100);
                    }
                  },
                });
                sessionElement.addEventListener("click", (e) => {
                  if (
                    e.target.id ==
                    `side-al-button-${subject}-${year}-${session}` ||
                    e.target.id == `side-al-${subject}-${year}-${session}-title`
                  ) {
                    changePath(`al>${subject}>${year}>${session}`);
                  }
                });
                sideYearSessions.appendChild(sessionElement);
              }
            });
          },
          removeContainerCallback: () => {
            let index = openedSideBarArray.indexOf(`al-${subject}-${year}`);
            if (index != -1) {
              openedSideBarArray.splice(index, 1);
            }
            const sideYearSessions = document.getElementById(
              `side-al-${subject}-${year}-sessions`
            );
            const sessionsLength = sideYearSessions.childNodes.length;
            for (let i = 0; i < sessionsLength; i++) {
              let timeout = setTimeout(() => {
                sideYearSessions.removeChild(sideYearSessions.childNodes[0]);
                clearTimeout(timeout);
              }, 100);
            }
          },
        });
        yearElement.addEventListener("click", (e) => {
          if (
            e.target.id == `side-al-button-${subject}-${year}` ||
            e.target.id == `side-al-${subject}-${year}-title`
          ) {
            changePath(`al>${subject}>${year}`);
          }
        });

        sideSubjectYears.appendChild(yearElement);
      });
    },
    removeContainerCallback: () => {
      const sideSubjectYears = document.getElementById(
        `side-al-${subject}-years`
      );
      const yearLength = sideSubjectYears.childNodes.length;
      for (let i = 0; i < yearLength; i++) {
        let timeout = setTimeout(() => {
          sideSubjectYears.removeChild(sideSubjectYears.childNodes[0]);
          clearTimeout(timeout);
        }, 100);
      }
    },
  });
  subjectElement.addEventListener("click", (e) => {
    if (
      e.target.id == `side-al-button-${subject}` ||
      e.target.id == `side-al-${subject}-title`
    ) {
      changePath(`al>${subject}`);
    }
  });

  sideGroupAl.appendChild(subjectElement);
});

// // creating side button for core subjects
const sideGroupCr = document.getElementById("side-group-cr");
Object.keys(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__).forEach((subject) => {
  const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
    level: "cr",
    subject: subject,
    generateContainerCallback: () => {
      const sideSubjectYears = document.getElementById(
        `side-cr-${subject}-years`
      );
      Object.keys(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject]).forEach((year) => {
        let opened =
          openedSideBarArray.indexOf(`cr-${subject}-${year}`) == -1
            ? false
            : true;
        const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
          opened: opened,
          level: "cr",
          subject: subject,
          year: year,
          generateContainerCallback: () => {
            if (!opened) {
              openedSideBarArray.push(`cr-${subject}-${year}`);
            }
            const sideYearSessions = document.getElementById(
              `side-cr-${subject}-${year}-sessions`
            );
            Object.keys(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year]).forEach((session) => {
              if (
                JSON.stringify(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session]) !=
                JSON.stringify([null, null, null])
              ) {
                let opened =
                  openedSideBarArray.indexOf(
                    `cr-${subject}-${year}-${session}`
                  ) == -1
                    ? false
                    : true;
                const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
                  opened: opened,
                  level: "cr",
                  subject: subject,
                  year: year,
                  session: session,
                  generateContainerCallback: () => {
                    if (!opened) {
                      openedSideBarArray.push(
                        `cr-${subject}-${year}-${session}`
                      );
                    }
                    const sideSessionVariants = document.getElementById(
                      `side-cr-${subject}-${year}-${session}-variants`
                    );
                    Object.keys(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session]).forEach(
                      (variant) => {
                        if (
                          _json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session][variant] != null
                        ) {
                          const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateSideButton)({
                            level: "cr",
                            subject: subject,
                            year: year,
                            session: session,
                            variant: variant,
                          });
                          variantElement.addEventListener("click", (e) => {
                            if (
                              e.target.id ==
                              `side-cr-button-${subject}-${year}-${session}-${variant}` ||
                              e.target.id ==
                              `side-cr-${subject}-${year}-${session}-${variant}-title`
                            ) {
                              changePath(
                                `cr>${subject}>${year}>${session}>${variant}`
                              );
                            }
                          });
                          sideSessionVariants.appendChild(variantElement);
                        }
                      }
                    );
                  },
                  removeContainerCallback: () => {
                    let index = openedSideBarArray.indexOf(
                      `cr-${subject}-${year}-${session}`
                    );
                    if (index != -1) {
                      openedSideBarArray.splice(index, 1);
                    }
                    const sideSessionVariants = document.getElementById(
                      `side-cr-${subject}-${year}-${session}-variants`
                    );
                    const variantsLength =
                      sideSessionVariants.childNodes.length;
                    for (let i = 0; i < variantsLength; i++) {
                      let timeout = setTimeout(() => {
                        sideSessionVariants.removeChild(
                          sideSessionVariants.childNodes[0]
                        );
                        clearTimeout(timeout);
                      }, 100);
                    }
                  },
                });
                sessionElement.addEventListener("click", (e) => {
                  if (
                    e.target.id ==
                    `side-cr-button-${subject}-${year}-${session}` ||
                    e.target.id == `side-cr-${subject}-${year}-${session}-title`
                  ) {
                    changePath(`cr>${subject}>${year}>${session}`);
                  }
                });
                sideYearSessions.appendChild(sessionElement);
              }
            });
          },
          removeContainerCallback: () => {
            let index = openedSideBarArray.indexOf(`cr-${subject}-${year}`);
            if (index != -1) {
              openedSideBarArray.splice(index, 1);
            }
            const sideYearSessions = document.getElementById(
              `side-cr-${subject}-${year}-sessions`
            );
            const sessionsLength = sideYearSessions.childNodes.length;
            for (let i = 0; i < sessionsLength; i++) {
              let timeout = setTimeout(() => {
                sideYearSessions.removeChild(sideYearSessions.childNodes[0]);
                clearTimeout(timeout);
              }, 100);
            }
          },
        });
        yearElement.addEventListener("click", (e) => {
          if (
            e.target.id == `side-cr-button-${subject}-${year}` ||
            e.target.id == `side-cr-${subject}-${year}-title`
          ) {
            changePath(`cr>${subject}>${year}`);
          }
        });

        sideSubjectYears.appendChild(yearElement);
      });
    },
    removeContainerCallback: () => {
      const sideSubjectYears = document.getElementById(
        `side-cr-${subject}-years`
      );
      const yearLength = sideSubjectYears.childNodes.length;
      for (let i = 0; i < yearLength; i++) {
        let timeout = setTimeout(() => {
          sideSubjectYears.removeChild(sideSubjectYears.childNodes[0]);
          clearTimeout(timeout);
        }, 100);
      }
    },
  });
  subjectElement.addEventListener("click", (e) => {
    if (
      e.target.id == `side-cr-button-${subject}` ||
      e.target.id == `side-cr-${subject}-title`
    ) {
      changePath(`cr>${subject}`);
    }
  });

  sideGroupCr.appendChild(subjectElement);
});

// creating home menu

function createHomeMenu() {
  const home = document.createElement("div");
  home.id = "home";
  home.classList.add("home");

  const olTitle = document.createElement("h2");
  olTitle.textContent = "OL Subjects";
  home.appendChild(olTitle);

  const olCardsContainer = document.createElement("div");
  Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__).forEach((subject) => {
    const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)("ol", subject);
    createRotatingCard(subjectElement);
    subjectElement.addEventListener("click", () => {
      changePath(`ol>${subject}`);
    });

    olCardsContainer.appendChild(subjectElement);
  });
  home.appendChild(olCardsContainer);

  const alTitle = document.createElement("h2");
  alTitle.textContent = "AL Subjects";
  home.appendChild(alTitle);

  const alCardsContainer = document.createElement("div");
  Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__).forEach((subject) => {
    const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)("al", subject);
    createRotatingCard(subjectElement);
    subjectElement.addEventListener("click", () => {
      changePath(`al>${subject}`);
    });

    alCardsContainer.appendChild(subjectElement);
  });
  home.appendChild(alCardsContainer);

  const crTitle = document.createElement("h2");
  crTitle.textContent = "Core Subjects";
  home.appendChild(crTitle);

  const crCardsContainer = document.createElement("div");
  Object.keys(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__).forEach((subject) => {
    const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)("cr", subject);
    createRotatingCard(subjectElement);
    subjectElement.addEventListener("click", () => {
      changePath(`cr>${subject}`);
    });

    crCardsContainer.appendChild(subjectElement);
  });
  home.appendChild(crCardsContainer);

  return home;
}

// creating the sub menu buttons
function CreateSubMenu(level, subject, year, session) {
  const menu = document.createElement("div");
  menu.id = `Select a ${session == undefined
    ? year == undefined
      ? "years-menu"
      : "sessions-menu"
    : "variants-menu"
    }`;
  menu.classList.add("sub-menu");
  const title = document.createElement("h2");
  title.textContent = `Select a ${session == undefined ? (year == undefined ? "year" : "session") : "variant"
    }`;
  menu.appendChild(title);

  const cardsContainer = document.createElement("div");

  if (level.toLowerCase() == "cr") {
    if (session == undefined) {
      if (year == undefined) {
        Object.keys(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject]).forEach((year) => {
          const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)(
            "cr",
            subject,
            year,
            undefined,
            undefined,
            randomImagesArray[randomImageCounter]
          );
          randomImageCounter++;
          createRotatingCard(yearElement);
          yearElement.addEventListener("click", () => {
            changePath(`cr>${subject}>${year}`);
          });

          cardsContainer.appendChild(yearElement);
        });
      } else {
        Object.keys(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year]).forEach((session) => {
          if (
            JSON.stringify(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session]) !=
            JSON.stringify([null, null, null])
          ) {
            const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)(
              "cr",
              subject,
              year,
              session,
              undefined,
              randomImagesArray[randomImageCounter]
            );
            randomImageCounter++;
            createRotatingCard(sessionElement);
            sessionElement.addEventListener("click", () => {
              changePath(`cr>${subject}>${year}>${session}`);
            });
            cardsContainer.appendChild(sessionElement);
          }
        });
      }
    } else {
      Object.keys(_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session]).forEach((variant) => {
        if (_json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session][variant] != null) {
          const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)(
            "cr",
            subject,
            year,
            session,
            variant,
            randomImagesArray[randomImageCounter]
          );
          randomImageCounter++;
          createRotatingCard(variantElement);
          variantElement.addEventListener("click", () => {
            changePath(`cr>${subject}>${year}>${session}>${variant}`);
          });

          cardsContainer.appendChild(variantElement);
        }
      });
    }
  } else if (level.toLowerCase() == "ol") {
    if (session == undefined) {
      if (year == undefined) {
        Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject]).forEach((year) => {
          const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)(
            "ol",
            subject,
            year,
            undefined,
            undefined,
            randomImagesArray[randomImageCounter]
          );
          randomImageCounter++;
          createRotatingCard(yearElement);
          yearElement.addEventListener("click", () => {
            changePath(`ol>${subject}>${year}`);
          });

          cardsContainer.appendChild(yearElement);
        });
      } else {
        Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject][year]).forEach((session) => {
          if (
            JSON.stringify(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject][year][session]) !=
            JSON.stringify([null, null, null])
          ) {
            const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)(
              "ol",
              subject,
              year,
              session,
              undefined,
              randomImagesArray[randomImageCounter]
            );
            randomImageCounter++;
            createRotatingCard(sessionElement);
            sessionElement.addEventListener("click", () => {
              changePath(`ol>${subject}>${year}>${session}`);
            });
            cardsContainer.appendChild(sessionElement);
          }
        });
      }
    } else {
      Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject][year][session]).forEach((variant) => {
        if (_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject][year][session][variant] != null) {
          const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)(
            "ol",
            subject,
            year,
            session,
            variant,
            randomImagesArray[randomImageCounter]
          );
          randomImageCounter++;
          createRotatingCard(variantElement);
          variantElement.addEventListener("click", () => {
            changePath(`ol>${subject}>${year}>${session}>${variant}`);
          });

          cardsContainer.appendChild(variantElement);
        }
      });
    }
  } else if (level.toLowerCase() == "al") {
    if (session == undefined) {
      if (year == undefined) {
        Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject]).forEach((year) => {
          const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)(
            "al",
            subject,
            year,
            undefined,
            undefined,
            randomImagesArray[randomImageCounter]
          );
          randomImageCounter++;
          createRotatingCard(yearElement);
          yearElement.addEventListener("click", () => {
            changePath(`al>${subject}>${year}`);
          });

          cardsContainer.appendChild(yearElement);
        });
      } else {
        Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year]).forEach((session) => {
          if (
            JSON.stringify(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session]) !=
            JSON.stringify([null, null, null])
          ) {
            const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)(
              "al",
              subject,
              year,
              session,
              undefined,
              randomImagesArray[randomImageCounter]
            );
            randomImageCounter++;
            createRotatingCard(sessionElement);
            sessionElement.addEventListener("click", () => {
              changePath(`al>${subject}>${year}>${session}`);
            });
            cardsContainer.appendChild(sessionElement);
          }
        });
      }
    } else {
      Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session]).forEach((variant) => {
        if (_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session][variant] != null) {
          const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_4__.generateMainButton)(
            "al",
            subject,
            year,
            session,
            variant,
            randomImagesArray[randomImageCounter]
          );
          randomImageCounter++;
          createRotatingCard(variantElement);
          variantElement.addEventListener("click", () => {
            changePath(`al>${subject}>${year}>${session}>${variant}`);
          });

          cardsContainer.appendChild(variantElement);
        }
      });
    }
  }
  menu.appendChild(cardsContainer);

  return menu;
}

function createRotatingCard(elementContainer) {
  const element = elementContainer.children[0];

  elementContainer.addEventListener("mouseenter", (e) => {
    element.style.transition = `transform 100ms ease-in-out, scale 150ms ease, box-shadow 150ms ease`;
    const aTimeout = setTimeout(() => {
      rotateCard(e);
    }, 50);
    const anotherTimeout = setTimeout(() => {
      element.style.transition = `scale 150ms ease, box-shadow 150ms ease`;
      elementContainer.addEventListener("mousemove", rotateCard);
    }, 100);

    elementContainer.addEventListener("mouseleave", () => {
      clearTimeout(aTimeout);
      clearTimeout(anotherTimeout);

      elementContainer.removeEventListener("mousemove", rotateCard);
      element.style.transition = `transform 100ms ease-in-out, scale 150ms ease, box-shadow 150ms ease`;
      element.style.transform = ``;
    });
  });

  function rotateCard(e) {
    const mousePos = {
      x:
        ((e.clientX - elementContainer.getBoundingClientRect().x) /
          elementContainer.getBoundingClientRect().width) *
        (45 / 2) -
        45 / 2 / 2,
      y:
        ((e.clientY - elementContainer.getBoundingClientRect().y) /
          elementContainer.getBoundingClientRect().height) *
        (45 / 2) -
        45 / 2 / 2,
    };
    element.style.transform = `rotateY(${mousePos.x
      }deg) rotateX(${-mousePos.y}deg) scale(1.025)`;
  }
}

function createBubbleSheetMenu(
  level,
  subject,
  year,
  session,
  variant,
  useLocalAnswers
) {
  const menu = document.createElement("div");
  menu.id = "bubble-sheet-menu";
  menu.classList.add("bubble-sheet-menu");

  const title = document.createElement("h2");
  title.classList.add("bubble-sheet-title");
  title.id = "bubble-sheet-title";
  title.textContent = "Everything is set. Now you can start solving.";
  menu.appendChild(title);

  const pdfLink = document.createElement("a");
  pdfLink.classList.add("bubble-sheet-pdf-link");
  pdfLink.id = "bubble-sheet-pdf-link";
  pdfLink.textContent = "Open pdf in external tab";
  pdfLink.href = `./pdfs/${level.toUpperCase()}-${subject}/${year}/${session == "s" ? "May-Jun" : session == "w" ? "Oct-Nov" : "Feb-Mar"
    }/${subjectCode[level.toUpperCase() + subject]}_${session}${Number(year) - 2000
    }_qp_${subject == "Economics" ? 1 : level == "al" || level == "cr" ? 1 : 2}${Number(variant) + 1
    }.pdf`;
  pdfLink.setAttribute("target", "_blank");
  menu.appendChild(pdfLink);

  const bubbleSheetContainer = document.createElement("div");
  bubbleSheetContainer.id = "bubble-sheet-container";
  bubbleSheetContainer.classList.add("bubble-sheet-container");

  let modelAnswers =
    level == "cr"
      ? _json_CR_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session][variant]
      : level == "ol"
        ? _json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_0__[subject][year][session][variant]
        : level == "al"
          ? _json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session][variant]
          : "";
  let localKey = `${subject.toLowerCase().substring(0, 3)}${level
    .toLowerCase()
    .substring(0, 1)}${Number(year) - 2000}${session}${Number(variant) + 1}`;

  if (localStorage.getItem(localKey) == null) {
    localStorage.setItem(
      localKey,
      Array.from({ length: 40 }).fill("N").join("")
    );
    localStorage.setItem(localKey + "s", "");
  }

  if (
    useLocalAnswers ||
    localStorage.getItem(localKey + "s", "") != "" ||
    localStorage.getItem(localKey + "s", "") != null
  ) {
    userAnswers = localStorage.getItem(localKey).split("");
  } else {
    userAnswers = Array(40).fill("N");
  }

  for (let i = 0; i < modelAnswers.length; i++) {
    const questionNumber = document.createElement("div");
    questionNumber.classList.add("bubble-box");
    questionNumber.textContent = i + 1;
    questionNumber.id = `question-${i}-number`;
    bubbleSheetContainer.appendChild(questionNumber);

    const questionA = document.createElement("div");
    questionA.classList.add("bubble-box");
    questionA.classList.add("bubble-choice");
    questionA.textContent = "A";
    questionA.id = `question-${i}-a`;

    const questionB = document.createElement("div");
    questionB.classList.add("bubble-box");
    questionB.classList.add("bubble-choice");
    questionB.textContent = "B";
    questionB.id = `question-${i}-b`;

    const questionC = document.createElement("div");
    questionC.classList.add("bubble-box");
    questionC.classList.add("bubble-choice");
    questionC.textContent = "C";
    questionC.id = `question-${i}-c`;

    const questionD = document.createElement("div");
    questionD.classList.add("bubble-box");
    questionD.classList.add("bubble-choice");
    questionD.textContent = "D";
    questionD.id = `question-${i}-d`;

    if (userAnswers[i] == "A") {
      questionA.classList.add("bubble-chosen");
      questionB.classList.remove("bubble-chosen");
      questionC.classList.remove("bubble-chosen");
      questionD.classList.remove("bubble-chosen");
    } else if (userAnswers[i] == "B") {
      questionA.classList.remove("bubble-chosen");
      questionB.classList.add("bubble-chosen");
      questionC.classList.remove("bubble-chosen");
      questionD.classList.remove("bubble-chosen");
    } else if (userAnswers[i] == "C") {
      questionA.classList.remove("bubble-chosen");
      questionB.classList.remove("bubble-chosen");
      questionC.classList.add("bubble-chosen");
      questionD.classList.remove("bubble-chosen");
    } else if (userAnswers[i] == "D") {
      questionA.classList.remove("bubble-chosen");
      questionB.classList.remove("bubble-chosen");
      questionC.classList.remove("bubble-chosen");
      questionD.classList.add("bubble-chosen");
    }

    questionA.addEventListener("click", () => {
      if (userAnswers[i] != "A") {
        questionA.classList.add("bubble-chosen");
        questionB.classList.remove("bubble-chosen");
        questionC.classList.remove("bubble-chosen");
        questionD.classList.remove("bubble-chosen");
        userAnswers[i] = "A";
        let localAnswersString = localStorage.getItem(localKey).split("");
        localAnswersString[i] = "A";
        localStorage.setItem(localKey, localAnswersString.join(""));
      } else {
        questionA.classList.remove("bubble-chosen");
        questionB.classList.remove("bubble-chosen");
        questionC.classList.remove("bubble-chosen");
        questionD.classList.remove("bubble-chosen");
        userAnswers[i] = "N";
        let localAnswersString = localStorage.getItem(localKey).split("");
        localAnswersString[i] = "N";
        localStorage.setItem(localKey, localAnswersString.join(""));
      }
    });
    bubbleSheetContainer.appendChild(questionA);

    questionB.addEventListener("click", () => {
      if (userAnswers[i] != "B") {
        questionA.classList.remove("bubble-chosen");
        questionB.classList.add("bubble-chosen");
        questionC.classList.remove("bubble-chosen");
        questionD.classList.remove("bubble-chosen");
        userAnswers[i] = "B";
        let localAnswersString = localStorage.getItem(localKey).split("");
        localAnswersString[i] = "B";
        localStorage.setItem(localKey, localAnswersString.join(""));
      } else {
        questionA.classList.remove("bubble-chosen");
        questionB.classList.remove("bubble-chosen");
        questionC.classList.remove("bubble-chosen");
        questionD.classList.remove("bubble-chosen");
        userAnswers[i] = "N";
        let localAnswersString = localStorage.getItem(localKey).split("");
        localAnswersString[i] = "N";
        localStorage.setItem(localKey, localAnswersString.join(""));
      }
    });
    bubbleSheetContainer.appendChild(questionB);

    questionC.addEventListener("click", () => {
      if (userAnswers[i] != "C") {
        questionA.classList.remove("bubble-chosen");
        questionB.classList.remove("bubble-chosen");
        questionC.classList.add("bubble-chosen");
        questionD.classList.remove("bubble-chosen");
        userAnswers[i] = "C";
        let localAnswersString = localStorage.getItem(localKey).split("");
        localAnswersString[i] = "C";
        localStorage.setItem(localKey, localAnswersString.join(""));
      } else {
        questionA.classList.remove("bubble-chosen");
        questionB.classList.remove("bubble-chosen");
        questionC.classList.remove("bubble-chosen");
        questionD.classList.remove("bubble-chosen");
        userAnswers[i] = "N";
        let localAnswersString = localStorage.getItem(localKey).split("");
        localAnswersString[i] = "N";
        localStorage.setItem(localKey, localAnswersString.join(""));
      }
    });
    bubbleSheetContainer.appendChild(questionC);

    questionD.addEventListener("click", () => {
      if (userAnswers[i] != "D") {
        questionA.classList.remove("bubble-chosen");
        questionB.classList.remove("bubble-chosen");
        questionC.classList.remove("bubble-chosen");
        questionD.classList.add("bubble-chosen");
        userAnswers[i] = "D";
        let localAnswersString = localStorage.getItem(localKey).split("");
        localAnswersString[i] = "D";
        localStorage.setItem(localKey, localAnswersString.join(""));
      } else {
        questionA.classList.remove("bubble-chosen");
        questionB.classList.remove("bubble-chosen");
        questionC.classList.remove("bubble-chosen");
        questionD.classList.remove("bubble-chosen");
        userAnswers[i] = "N";
        let localAnswersString = localStorage.getItem(localKey).split("");
        localAnswersString[i] = "N";
        localStorage.setItem(localKey, localAnswersString.join(""));
      }
    });
    bubbleSheetContainer.appendChild(questionD);
  }
  menu.appendChild(bubbleSheetContainer);

  if (useLocalAnswers) {
    let waitForBubbleSheet = setTimeout(() => {
      let focus = userAnswers.length - 1;
      for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] == "N") {
          focus = i;
          break;
        }
      }
      if (focus > 3) {
        const focusElement = document.getElementById(
          `question-${focus - 2}-number`
        );
        focusElement.scrollIntoView({ behavior: "smooth" });
        clearTimeout(waitForBubbleSheet);
      }
    }, 1);
  }

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("bubble-sheet-buttons-container");
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.classList.add("bubble-sheet-submit-button");
  submitButton.id = "bubble-sheet-submit-button";

  const revealButton = document.createElement("button");
  revealButton.textContent = "Reveal all answers";
  revealButton.classList.add("bubble-sheet-reveal-button");
  revealButton.id = "bubble-sheet-reveal-button";

  const mark = document.createElement("div");
  mark.id = "exam-mark";
  mark.classList.add("exam-mark");
  mark.textContent = `- / ${modelAnswers.length}`;

  if (localStorage.getItem(localKey + "s") != "") {
    let waitForBubbleSheet = setTimeout(() => {
      submitBehavior(localStorage.getItem(localKey + "s"));
      for (let i = 0; i < localStorage.getItem(localKey + "s").length; i++) {
        if (localStorage.getItem(localKey + "s").split("")[i] == "A") {
          document
            .getElementById(`question-${i}-a`)
            .classList.add("bubble-chosen");
          document
            .getElementById(`question-${i}-b`)
            .classList.remove("bubble-chosen");
          document
            .getElementById(`question-${i}-c`)
            .classList.remove("bubble-chosen");
          document
            .getElementById(`question-${i}-d`)
            .classList.remove("bubble-chosen");
        } else if (localStorage.getItem(localKey + "s").split("")[i] == "B") {
          document
            .getElementById(`question-${i}-a`)
            .classList.remove("bubble-chosen");
          document
            .getElementById(`question-${i}-b`)
            .classList.add("bubble-chosen");
          document
            .getElementById(`question-${i}-c`)
            .classList.remove("bubble-chosen");
          document
            .getElementById(`question-${i}-d`)
            .classList.remove("bubble-chosen");
        } else if (localStorage.getItem(localKey + "s").split("")[i] == "C") {
          document
            .getElementById(`question-${i}-a`)
            .classList.remove("bubble-chosen");
          document
            .getElementById(`question-${i}-b`)
            .classList.remove("bubble-chosen");
          document
            .getElementById(`question-${i}-c`)
            .classList.add("bubble-chosen");
          document
            .getElementById(`question-${i}-d`)
            .classList.remove("bubble-chosen");
        } else if (localStorage.getItem(localKey + "s").split("")[i] == "D") {
          document
            .getElementById(`question-${i}-a`)
            .classList.remove("bubble-chosen");
          document
            .getElementById(`question-${i}-b`)
            .classList.remove("bubble-chosen");
          document
            .getElementById(`question-${i}-c`)
            .classList.remove("bubble-chosen");
          document
            .getElementById(`question-${i}-d`)
            .classList.add("bubble-chosen");
        }
      }
      (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
        "", // title
        [
          `You have already submitted this exam before and got ${recalculatePastExam(localStorage.getItem(localKey + "s"))[0]
          } / ${recalculatePastExam(localStorage.getItem(localKey + "s"))[1]}.`,
          `Do you want to solve it again or inspect your answers?`,
        ], // content,
        [
          "Resolve",
          () => {
            localStorage.setItem(
              localKey,
              Array.from({ length: 40 }).fill("N").join("")
            );
            localStorage.setItem(localKey + "s", "");
            resetBubbleSheet();
          },
        ],
        ["Inspect", () => { }]
      );

      clearTimeout(waitForBubbleSheet);
    }, 1);
  } else if (
    localStorage.getItem(localKey) != "" &&
    localStorage.getItem(localKey) != null &&
    localStorage.getItem(localKey) !=
    "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN" &&
    !useLocalAnswers
  ) {
    let waitForBubbleSheet = setTimeout(() => {
      (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
        "", // title
        [
          `You already started solving this exam before.`,
          `Do you want to continue where you left?`,
        ], // content,
        [
          "Continue",
          () => {
            resetBubbleSheet(true);
          },
        ],
        [
          "Restart",
          () => {
            localStorage.setItem(
              localKey,
              Array.from({ length: 40 }).fill("N").join("")
            );
            localStorage.setItem(localKey + "s", "");
            resetBubbleSheet();
          },
        ],
        () => {
          resetBubbleSheet(true);
        }
      );

      clearTimeout(waitForBubbleSheet);
    }, 1);
  }

  submitButton.addEventListener("click", () => {
    let userAnswersTemp = userAnswers;
    if (subject == "Economics") {
      userAnswersTemp = userAnswersTemp.join("").substring(0, 30).split("");
    }
    if (userAnswersTemp.includes("N")) {
      (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
        "Are you sure?", // title
        [
          "Seems like there are some questions you missed. <br> Only the solved questions will be graded.",
        ], // content,
        [
          "Confirm",
          () => {
            localStorage.setItem(
              localKey + "s",
              localStorage.getItem(localKey).split("").join("")
            );
            submitBehavior(localStorage.getItem(localKey + "s"));
            if (
              recalculatePastExam(localStorage.getItem(localKey + "s"))[0] ==
              recalculatePastExam(localStorage.getItem(localKey + "s"))[1]
            ) {
              jsConfetti.addConfetti();
            }
            document
              .querySelector(".timer-play-icon")
              .classList.toggle("hidden");
            document
              .querySelector(".timer-pause-icon")
              .classList.toggle("hidden");
            clearInterval(timerInterval);
            isTimerRunning = false;
            timerAudio.pause();
            timerAudio.currentTime = 0;
            document.querySelector(".toggle-clock path").style.fill = "";
          },
        ],
        ["Cancel", () => { }]
      );
    } else {
      localStorage.setItem(
        localKey + "s",
        localStorage.getItem(localKey).split("").join("")
      );
      submitBehavior(localStorage.getItem(localKey + "s"));
      if (
        recalculatePastExam(localStorage.getItem(localKey + "s"))[0] ==
        recalculatePastExam(localStorage.getItem(localKey + "s"))[1]
      ) {
        jsConfetti.addConfetti();
      }
      document.querySelector(".timer-play-icon").classList.toggle("hidden");
      document.querySelector(".timer-pause-icon").classList.toggle("hidden");
      clearInterval(timerInterval);
      isTimerRunning = false;
      timerAudio.pause();
      timerAudio.currentTime = 0;
      document.querySelector(".toggle-clock path").style.fill = "";
    }
  });

  revealButton.addEventListener("click", () => {
    (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
      "Are you sure?", // title
      [
        "This will only highlight the correct answers and will not correct your answers.",
      ], // content,
      [
        "Confirm",
        () => {
          revealBehavior();
        },
      ],
      ["Cancel", () => { }]
    );
  });
  buttonsContainer.appendChild(submitButton);
  buttonsContainer.appendChild(revealButton);

  menu.appendChild(buttonsContainer);
  menu.appendChild(mark);

  // timer
  let timerTimes = {
    al_physics: [1, 1, 5, 0, 0],
    al_biology: [1, 0, 0, 0, 0],
    al_chemistry: [1, 0, 0, 0, 0],
    default: [0, 4, 5, 0, 0],
  };

  let timeArray = Object.keys(timerTimes).includes(
    `${level}_${subject.toLowerCase()}`
  )
    ? [...timerTimes[`${level}_${subject.toLowerCase()}`]]
    : [...timerTimes["default"]];
  let isTimerRunning;
  let timerModal = createClock();
  let timerAudio = new Audio(_media_audio_timer_audio_mp3__WEBPACK_IMPORTED_MODULE_3__);

  globalTimer = timerModal;
  document.getElementById("top-bar").after(globalTimer);

  document
    .querySelector(".timer-play-pause-button")
    .addEventListener("click", () => {
      document.querySelector(".timer-play-icon").classList.toggle("hidden");
      document.querySelector(".timer-pause-icon").classList.toggle("hidden");
      if (!isTimerRunning) {
        autoClock();
        document.querySelector(".toggle-clock path").style.fill = "#1aad72";
      } else {
        clearInterval(timerInterval);
        isTimerRunning = false;
        timerAudio.pause();
        timerAudio.currentTime = 0;
        document.querySelector(".toggle-clock path").style.fill = "";
      }
    });

  document.querySelector(".timer-stop-button").addEventListener("click", () => {
    document.querySelector(".timer-play-icon").classList.remove("hidden");
    document.querySelector(".timer-pause-icon").classList.add("hidden");
    document.querySelector(".toggle-clock path").style.fill = "";
    clearInterval(timerInterval);
    isTimerRunning = false;
    timeArray = Object.keys(timerTimes).includes(
      `${level}_${subject.toLowerCase()}`
    )
      ? [...timerTimes[`${level}_${subject.toLowerCase()}`]]
      : [...timerTimes["default"]];
    setClock(timeArray);
  });

  document
    .querySelector(".timer-toggle-button")
    .addEventListener("click", () => {
      document.querySelector(".clock").classList.remove("clock-opened");
      document
        .querySelector(".toggle-clock")
        .classList.remove("toggle-clock-opened");
    });

  function setClock(time) {
    const digits = document.querySelectorAll(".digit");
    digits.forEach((digit, dIndex) => {
      let numbers = digit.children;
      let target = time[dIndex];
      if (target != null) {
        for (let i = 0; i < 10; i++) {
          const number = numbers[i];
          number.classList.remove("current");
          number.classList.remove("out");
          if (i < target) {
            number.classList.add("out");
          } else if (i == target) {
            number.classList.add("current");
          }
        }
      }
    });
  }

  function autoClock() {
    isTimerRunning = true;
    setClock(timeArray);
    if (
      timeArray[0] > 0 ||
      timeArray[1] > 0 ||
      timeArray[2] > 0 ||
      timeArray[3] > 0 ||
      timeArray[4] > 0
    ) {
      timerInterval = setInterval(() => {
        timeArray[4] -= 1;
        if (timeArray[4] < 0) {
          timeArray[3] -= 1;
          timeArray[4] = 9;
        }
        if (timeArray[3] < 0) {
          timeArray[2] -= 1;
          timeArray[3] = 5;
        }
        if (timeArray[2] < 0) {
          timeArray[1] -= 1;
          timeArray[2] = 9;
        }
        if (timeArray[1] < 0) {
          timeArray[0] -= 1;
          timeArray[1] = 5;
        }
        if (
          timeArray[0] <= 0 &&
          timeArray[1] <= 0 &&
          timeArray[2] <= 0 &&
          timeArray[3] <= 0 &&
          timeArray[4] <= 0
        ) {
          clearInterval(timerInterval); //finish
          timerAudio.play();
          setTimeout(() => {
            timerAudio.pause();
            timerAudio.currentTime = 0;
          }, 14000);
          (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
            "Time is finished",
            [],
            [
              "OK",
              () => {
                timerAudio.pause();
                timerAudio.currentTime = 0;
              },
            ],
            undefined,
            () => {
              timerAudio.pause();
              timerAudio.currentTime = 0;
            }
          );
        }

        setClock(timeArray);
      }, 1000);
    }
  }

  function createClock() {
    let clockElementContainer = document.createElement("div");
    clockElementContainer.classList.add("clock-container");

    let toggleClock = document.createElement("div");
    toggleClock.classList.add("toggle-clock");
    toggleClock.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M128 44a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 168a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m36.49-112.49a12 12 0 0 1 0 17l-28 28a12 12 0 0 1-17-17l28-28a12 12 0 0 1 17 0M92 16a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12"/></svg>`;

    let clockElement = document.createElement("div");
    clockElement.classList.add("clock");
    clockElement.innerHTML = `
        <div class="digit"><p class="current">0</p><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p></div>
        <p>:</p>
        <div class="digit"><p class="current">0</p><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p></div>
        <div class="digit"><p class="current">0</p><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p></div>
        <p>:</p>
        <div class="digit"><p class="current">0</p><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p></div>
        <div class="digit"><p class="current">0</p><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p>
        </div>
        <button class="timer-toggle-button" id="timer-toggle-button">
        <svg class="timer-toggle-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#000000" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"/></svg>
        </button>
        <button class="timer-stop-button" id="class="timer-stop-button">
        <svg class="timer-play-stop" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#000000" d="M140 80v41.21l34.17 20.5a12 12 0 1 1-12.34 20.58l-40-24A12 12 0 0 1 116 128V80a12 12 0 0 1 24 0m-12-52a99.38 99.38 0 0 0-70.76 29.34c-4.69 4.74-9 9.37-13.24 14V64a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24H57.77c5.23-6 10.6-11.78 16.49-17.74a76 76 0 1 1 1.58 109a12 12 0 0 0-16.48 17.46A100 100 0 1 0 128 28"/></svg>
        </button>
        <button class="timer-play-pause-button" id="class="timer-play-pause-button">
        <svg class="timer-play-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#000000" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128"/></svg>
        <svg class="timer-pause-icon hidden" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#000000" d="M216 48v160a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16M96 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"/></svg>
        </button>`;

    toggleClock.addEventListener("click", () => {
      toggleClock.classList.add("toggle-clock-opened");
      clockElement.classList.add("clock-opened");
      setClock(timeArray);
    });

    clockElementContainer.appendChild(clockElement);
    clockElementContainer.appendChild(toggleClock);
    return clockElementContainer;
  }

  // pdf viewer
  let pdfViewOpened = false;
  let periodicTablePdfViewOpened = false;

  const pdfViewerContainer = document.createElement("div");
  pdfViewerContainer.classList.add("pdf-viewer-container");
  const switchToPdf = document.createElement("div");
  switchToPdf.classList.add("switch-to-pdf");
  switchToPdf.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M200 164v8h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24Zm-108 8a32 32 0 0 1-32 32h-4v4a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h16a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8h-4v16h4a8 8 0 0 0 8-8m100 8a40 40 0 0 1-40 40h-16a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h16a40 40 0 0 1 40 40m-24 0a16 16 0 0 0-16-16h-4v32h4a16 16 0 0 0 16-16M36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-51v23h23Z"/></svg>`;
  switchToPdf.addEventListener("click", openPdf);

  function shortcutsFunc(e) {
    try {
      if (e.key == "z" && !e.shiftKey && !e.ctrlKey) {
        openPdf();
      }

      if (
        e.key == "x" &&
        !e.shiftKey &&
        !e.ctrlKey &&
        (subject == "Chemistry" || subject == "Combined")
      ) {
        openPeriodicTable();
      }

      if (e.key == "c" && !e.shiftKey && !e.ctrlKey) {
        document.querySelector(".clock").classList.toggle("clock-opened");
        document
          .querySelector(".toggle-clock")
          .classList.toggle("toggle-clock-opened");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  document.addEventListener("keyup", (e) => {
    shortcutsFunc(e);
  });

  function openPdf() {
    if (!pdfViewOpened) {
      if (navigator.onLine) {
        const pdfViewer = document.createElement("div");
        pdfViewer.id = "pdf-viewer";
        pdfViewer.classList.add("pdf-viewer");

        _node_modules_pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_6___default()(
          {
            licenseKey: "QFn6U78TMfzwzFamsiBl",
            path: "./pdf-viewer", // point to where the files you copied are served from
            initialDoc: `./pdfs/${level.toUpperCase()}-${subject}/${year}/${session == "s"
              ? "May-Jun"
              : session == "w"
                ? "Oct-Nov"
                : "Feb-Mar"
              }/${subjectCode[level.toUpperCase() + subject]}_${session}${Number(year) - 2000
              }_qp_${subject == "Economics"
                ? 1
                : level == "al" || level == "cr"
                  ? 1
                  : 2
              }${Number(variant) + 1}.pdf`, // path to your document
          },
          pdfViewer
        ).then((instance) => {
          instance.UI.setTheme("dark");
          instance.UI.disableElements([
            "toolbarGroup-FillAndSign",
            "themeChangeButton",
            "languageButton",
            "toggleNotesButton",
            "stickyToolGroupButton",
            "toolbarGroup-Insert",
            "stickyToolButton",
            "polygonCloudToolGroupButton",
            "printButton",
          ]);
          instance.enableFeatures([instance.Feature.Download]);
          instance.UI.disableTools(["calloutTool"]);
          pdfViewOpened = true;

          instance.addEventListener("keyup", (e) => {
            shortcutsFunc(e);
          });

          //console.clear()
        });

        pdfViewerContainer.appendChild(pdfViewer);
      } else {
        (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
          "You are currently offline", // title
          [
            "Unable to load the pdfs while in offline.",
            "Check you internet connectivity and try again.",
          ], // content,
          ["Close", () => { }]
        );
      }
    } else {
      const pdfViewer = document.getElementById("pdf-viewer");
      pdfViewer.classList.toggle("hide-viewer");
    }
  }

  pdfViewerContainer.appendChild(switchToPdf);

  globalPdfViewer = pdfViewerContainer;
  document.body.appendChild(pdfViewerContainer);

  const iButton = document.createElement("div");
  iButton.classList.add("i-button");
  iButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 5 15"><circle cx="2" cy="2" r="2"/><path d="M5,13.51c0,.65-.42,1.21-1.01,1.4-.15,.06-.31,.09-.48,.09h-.01c-1.37,0-2.49-1.11-2.49-2.49v-4.11C.42,8.21,0,7.65,0,6.99s.42-1.21,1.01-1.4c.15-.06,.31-.09,.48-.09h.01c1.37,0,2.49,1.11,2.49,2.49v4.11c.59,.19,1.01,.75,1.01,1.41Z"/></svg>`;
  iButton.addEventListener("click", () => {
    (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
      "Color Code for answers", // title
      [
        `<span class="green">Green</span> → Correct Answer`,
        `<span class="red">Red</span> → Incorrect Answer`,
        `<span class="purple">Purple</span> → Discounted Answer <button id="i-button-discounted"><svg class="discounted-question-info" id="discounted-question-info" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 5 15"><circle cx="2" cy="2" r="2"/><path d="M5,13.51c0,.65-.42,1.21-1.01,1.4-.15,.06-.31,.09-.48,.09h-.01c-1.37,0-2.49-1.11-2.49-2.49v-4.11C.42,8.21,0,7.65,0,6.99s.42-1.21,1.01-1.4c.15-.06,.31-.09,.48-.09h.01c1.37,0,2.49,1.11,2.49,2.49v4.11c.59,.19,1.01,.75,1.01,1.41Z"/></svg></button>`,
      ], // content
      ["Close", () => { }]
    );

    const iButtonDiscounted = document.getElementById("i-button-discounted");
    iButtonDiscounted.addEventListener("click", () => {
      document
        .getElementById("modal-container")
        .parentNode.removeChild(document.getElementById("modal-container"));
      (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
        "Discounted Questions",
        ["These are disqualified question from the mark scheme."],
        ["Close", () => { }]
      );
    });
  });
  menu.appendChild(iButton);

  const periodicTablePdfViewContainer = document.createElement("div");
  if (subject == "Chemistry" || subject == "Combined") {
    periodicTablePdfViewContainer.classList.add(
      "periodic-table-pdf-viewer-container"
    );
    const switchToPdf = document.createElement("div");
    switchToPdf.classList.add("switch-to-periodic-table-pdf");
    switchToPdf.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 25.52 22.13"><path d="M21.58,22.13H3.94c-.55,0-1-.45-1-1v-2.87c0-.55,.45-1,1-1H21.58c.55,0,1,.45,1,1v2.87c0,.55-.45,1-1,1Zm-16.64-2h15.64v-.87H4.94v.87Z"/><path d="M24.52,16.83H1c-.55,0-1-.45-1-1V1C0,.45,.45,0,1,0H3.94c.55,0,1,.45,1,1v1.94h1.94c.55,0,1,.45,1,1v1.94h3.88v-1.94c0-.55,.45-1,1-1h7.82V1c0-.55,.45-1,1-1h2.94c.55,0,1,.45,1,1V15.83c0,.55-.45,1-1,1ZM2,14.83H23.52V2h-.94v1.94c0,.55-.45,1-1,1h-7.82v1.94c0,.55-.45,1-1,1H6.88c-.55,0-1-.45-1-1v-1.94h-1.94c-.55,0-1-.45-1-1v-1.94h-.94V14.83Z"/></svg>`;
    switchToPdf.addEventListener("click", openPeriodicTable);

    periodicTablePdfViewContainer.appendChild(switchToPdf);

    globalPeriodicTablePdfViewer = periodicTablePdfViewContainer;
    document.body.appendChild(periodicTablePdfViewContainer);
  }

  function openPeriodicTable() {
    if (!periodicTablePdfViewOpened) {
      if (navigator.onLine) {
        const pdfViewer = document.createElement("div");
        pdfViewer.id = "periodic-table-pdf-viewer";
        pdfViewer.classList.add("periodic-table-pdf-viewer");

        _node_modules_pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_6___default()(
          {
            licenseKey: "QFn6U78TMfzwzFamsiBl",
            path: "./pdf-viewer", // point to where the files you copied are served from
            initialDoc: `./pdfs/periodic-table.pdf`, // path to your document
          },
          pdfViewer
        ).then((instance) => {
          instance.UI.setTheme("dark");
          instance.enableFeatures([instance.Feature.Download]);
          instance.UI.disableTools(["calloutTool"]);
          periodicTablePdfViewOpened = true;

          instance.addEventListener("keyup", (e) => {
            shortcutsFunc(e);
          });

          //console.clear()
        });

        periodicTablePdfViewContainer.appendChild(pdfViewer);
      } else {
        (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
          "You are currently offline", // title
          [
            "Unable to load the pdfs while in offline.",
            "Check you internet connectivity and try again.",
          ], // content,
          ["Close", () => { }]
        );
      }
    } else {
      const pdfViewer = document.getElementById("periodic-table-pdf-viewer");
      pdfViewer.classList.toggle("hide-viewer");
    }
  }

  function recalculatePastExam(userAnswers) {
    let correctAnswers = 0;
    for (let i = 0; i < modelAnswers.length; i++) {
      if (modelAnswers[i] == "Q" || modelAnswers[i] == userAnswers[i]) {
        correctAnswers++;
      }
    }

    return [correctAnswers, modelAnswers.length];
  }

  function resetBubbleSheet(useLocalAnswers) {
    main.innerHTML = "";
    if (globalPdfViewer != undefined) {
      globalPdfViewer.parentNode.removeChild(globalPdfViewer);
      globalPdfViewer = undefined;
    }
    if (globalPeriodicTablePdfViewer != undefined) {
      globalPeriodicTablePdfViewer.parentNode.removeChild(
        globalPeriodicTablePdfViewer
      );
      globalPeriodicTablePdfViewer = undefined;
    }
    if (globalTimer != undefined) {
      globalTimer.parentNode.removeChild(globalTimer);
      globalTimer = undefined;
    }
    if (timerInterval != undefined) {
      clearInterval(timerInterval);
      timerInterval = undefined;
    }
    main.appendChild(
      createBubbleSheetMenu(
        level,
        subject,
        year,
        session,
        variant,
        useLocalAnswers
      )
    );
  }

  function submitBehavior(userAnswers) {
    let correctAnswers = 0;
    for (let i = 0; i < modelAnswers.length; i++) {
      const Question = document.getElementById(`question-${i}-number`);
      const correctedQuestion = document.getElementById(
        `question-${i}-${modelAnswers[i].toLowerCase()}`
      );

      correctedQuestion.classList.remove("corrected-question");
      Question.classList.remove("wrong-question");
      Question.classList.remove("correct-question");
      Question.classList.remove("discounted-question");

      if (modelAnswers[i] == "Q") {
        correctAnswers++;
        Question.classList.add("discounted-question");
      } else if (modelAnswers[i] == userAnswers[i]) {
        correctAnswers++;
        Question.classList.add("correct-question");
      } else if (userAnswers[i] == "" || userAnswers[i] == "N") {
        return;
      } else {
        Question.classList.add("wrong-question");

        correctedQuestion.classList.add("corrected-question");
      }
    }
    mark.textContent = `${correctAnswers} / ${modelAnswers.length}`;
    if (correctAnswers == modelAnswers.length) {
      mark.classList.add("ACE");
    }
  }

  function revealBehavior() {
    for (let i = 0; i < modelAnswers.length; i++) {
      if (modelAnswers[i].toLowerCase() != "q") {
        const correctedQuestion = document.getElementById(
          `question-${i}-${modelAnswers[i].toLowerCase()}`
        );
        correctedQuestion.classList.add("corrected-question");
      } else {
        const discountedQuestionA = document.getElementById(`question-${i}-a`);
        const discountedQuestionB = document.getElementById(`question-${i}-b`);
        const discountedQuestionC = document.getElementById(`question-${i}-c`);
        const discountedQuestionD = document.getElementById(`question-${i}-d`);

        discountedQuestionA.classList.add("corrected-discounted-question");
        discountedQuestionB.classList.add("corrected-discounted-question");
        discountedQuestionC.classList.add("corrected-discounted-question");
        discountedQuestionD.classList.add("corrected-discounted-question");
      }
    }
  }

  return menu;
}

// Global EventListener
function addGlobalEventListener(type, selector, callback, options) {
  document.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) callback(e);
    },
    options
  );
}

// appending home to main
const main = document.getElementById("main");
changePath('home')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWUsR0FBRyxJQUFpRCxvQkFBb0IsS0FBSyxhQUFpSSxDQUFDLG9CQUFvQixtQkFBbUIsU0FBUyxjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsdUNBQXVDLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMsaUJBQWlCLGlDQUFpQyxpQkFBaUIsWUFBWSxVQUFVLHNCQUFzQixtQkFBbUIsaURBQWlELGtCQUFrQixnQkFBZ0IsTUFBTSxhQUFhLFlBQVksR0FBRyxJQUFJLG1DQUFtQyxTQUFTLG9DQUFvQyxZQUFZLGlCQUFpQixvQkFBb0IsaUJBQWlCLGVBQWUsUUFBUSxjQUFjLGlGQUFpRixnQkFBZ0IsYUFBYSxvR0FBb0csS0FBSyxlQUFlLHFHQUFxRyxlQUFlLGFBQWEsY0FBYyx1QkFBdUIsOEJBQThCLHVDQUF1QyxTQUFTLEdBQUcsZUFBZSx1Q0FBdUMsbUJBQW1CLEdBQUcsR0FBRyxjQUFjLGNBQWMsb0ZBQW9GLDhEQUE4RCwrRUFBK0UsZ0JBQWdCLEtBQUssYUFBYSxZQUFZLHVEQUF1RCw4Q0FBOEMsYUFBYSxNQUFNLElBQUksY0FBYyxTQUFTLDJCQUEyQixlQUFlLDJDQUEyQyx5QkFBeUIsZ0JBQWdCLElBQUksMEVBQTBFLDhDQUE4QyxhQUFhLHlEQUF5RCxvREFBb0Qsa0JBQWtCLHNCQUFzQixTQUFTLDJCQUEyQixTQUFTLFFBQVEsZ0JBQWdCLDJCQUEyQixjQUFjLGtFQUFrRSw4Q0FBOEMsR0FBRyxrQ0FBa0MsSUFBSSx5QkFBeUIsa0JBQWtCLGdCQUFnQixTQUFTLElBQUksZUFBZSxpQkFBaUIsZUFBZSxpQkFBaUIsR0FBRyxTQUFTLFlBQVksYUFBYSxpQkFBaUIsOEJBQThCLHlCQUF5QixnQ0FBZ0MsOEJBQThCLGtDQUFrQyx3R0FBd0csV0FBVyx5Q0FBeUMsNEJBQTRCLGdCQUFnQixJQUFJLDhDQUE4QyxhQUFhLDBEQUEwRCxPQUFPLEtBQUssb0JBQW9CLFNBQVMsTUFBTSw2RUFBNkUsb0NBQW9DLDZCQUE2Qix1QkFBdUIsV0FBVyxjQUFjLEdBQUcsdUJBQXVCLGlFQUFpRSxLQUFLLEdBQUcsc0JBQXNCLDRCQUE0QixLQUFLLEdBQUcsb0JBQW9CLDRCQUE0Qix1QkFBdUIsSUFBSSxtQkFBbUIsR0FBRyxrREFBa0QsS0FBSyxjQUFjLE9BQU8scUNBQXFDLG9GQUFvRixpQkFBaUIsd0NBQXdDLDRDQUE0Qyx1QkFBdUIsOENBQThDLEdBQUcsdUZBQXVGLEdBQUcsb0NBQW9DLGlCQUFpQixhQUFhLHVGQUF1RixnQkFBZ0IsMkJBQTJCLHdCQUF3QiwwREFBMEQsMEJBQTBCLDREQUE0RCw0Q0FBNEMsYUFBYSwrQ0FBK0MsOEJBQThCLCtCQUErQix3QkFBd0IsZ0RBQWdELHdCQUF3QixpREFBaUQscUNBQXFDLCtCQUErQixxQkFBcUIsK0NBQStDLDZCQUE2QixNQUFNLDhPQUE4TyxrQkFBa0IsaUJBQWlCLGVBQWUsZUFBZSxhQUFhLG9CQUFvQixzQkFBc0IscUVBQXFFLDZDQUE2Qyx3Q0FBd0MsdUJBQXVCLEtBQUssR0FBRyxhQUFhLG9DQUFvQyx1QkFBdUIsOEJBQThCLEtBQUssd0NBQXdDLHdFQUF3RSxVQUFVLGVBQWUsdUJBQXVCLHlGQUF5RixnQ0FBZ0MsZ0NBQWdDLHVEQUF1RCxrQkFBa0IsZ0JBQWdCLGtCQUFrQixvREFBb0QseUZBQXlGLGtHQUFrRyx1QkFBdUIsNkJBQTZCLDZDQUE2Qyw0Q0FBNEMsV0FBVyx3QkFBd0IsT0FBTyxtQkFBbUIsdUJBQXVCLG9CQUFvQixjQUFjLFlBQVksY0FBYyx1QkFBdUIsS0FBSyxXQUFXLE1BQU0sS0FBSyxJQUFJLGFBQWEsMEJBQTBCLGlCQUFpQixXQUFXLE1BQU0sZUFBZSxNQUFNLG9CQUFvQixNQUFNLHlCQUF5QixNQUFNLDJCQUEyQixJQUFJLFFBQVEsY0FBYyxrREFBa0QsdUJBQXVCLGVBQWUsdUJBQXVCLGFBQWEsbURBQW1ELGFBQWEscURBQXFELGNBQWMseUNBQXlDLCtEQUErRCxJQUFJLGNBQWMsU0FBUyxJQUFJLHdCQUF3QixTQUFTLDBCQUEwQixZQUFZLElBQUksNkNBQTZDLFNBQVMsSUFBSSxJQUFJLGlEQUFpRCxTQUFTLEtBQUssR0FBRyxxQkFBcUIsYUFBYSx1REFBdUQsYUFBYSxPQUFPLFdBQVcsS0FBSyxtQkFBbUIsRUFBRSxFQUFFLGFBQWEsTUFBTSxlQUFlLGdCQUFnQix3QkFBd0IsMkNBQTJDLG1FQUFtRSxJQUFJLEtBQUssU0FBUyxJQUFJLHNCQUFzQixTQUFTLHdCQUF3QixLQUFLLGdCQUFnQix3QkFBd0IsY0FBYyx1QkFBdUIsb0NBQW9DLGtDQUFrQyxtQkFBbUIsd0JBQXdCLHlDQUF5Qyw0QkFBNEIsZ0NBQWdDLHdDQUF3QyxxQ0FBcUMsZ0tBQWdLLFNBQVMsdUJBQXVCLG9EQUFvRCxrQkFBa0IsVUFBVSxxQkFBcUIsa0RBQWtELG9CQUFvQixVQUFVLGlCQUFpQixhQUFhLHVDQUF1QyxTQUFTLEdBQUcsT0FBTyx3RUFBd0UsZ0JBQWdCLG1DQUFtQyxxQ0FBcUMsaURBQWlELGdCQUFnQixxQkFBcUIsaUNBQWlDLHNDQUFzQyw0QkFBNEIsdURBQXVELHNCQUFzQixTQUFTLGNBQWMsWUFBWSxtQkFBbUIsS0FBSyx5Q0FBeUMseUNBQXlDLFlBQVkscUlBQXFJLGdFQUFnRSxHQUFHLFNBQVMsa0JBQWtCLHlDQUF5QyxrREFBa0QsV0FBVyxRQUFRLEtBQUssZ0VBQWdFLGdCQUFnQixrQkFBa0Isb0JBQW9CLEVBQUUsaUJBQWlCLFlBQVksbUJBQW1CLDRDQUE0QyxXQUFXLDBDQUEwQyxvQkFBb0IsZUFBZSxTQUFTLDhCQUE4QixVQUFVLEtBQUssaUJBQWlCLE1BQU0sSUFBSSxxQkFBcUIsa0NBQWtDLEVBQUUsU0FBUyxnRUFBZ0UsVUFBVSxtUEFBbVAsd0JBQXdCLDBCQUEwQixXQUFXLDRKQUE0SixZQUFZLHlDQUF5QywyRUFBMkUsNEJBQTRCLDRDQUE0Qyw2VEFBNlQsd0JBQXdCLGlDQUFpQyx1WUFBdVksV0FBVyxnQ0FBZ0Msd0RBQXdELHlDQUF5QyxpRUFBaUUsbURBQW1ELHNCQUFzQiw4QkFBOEIsT0FBTyxtR0FBbUcsT0FBTyx5RUFBeUUsdUJBQXVCLGtDQUFrQyw0QkFBNEIseURBQXlELGtFQUFrRSxlQUFlLG9CQUFvQixpRUFBaUUsYUFBYSw4QkFBOEIsRUFBRSxtREFBbUQsaURBQWlELDhCQUE4Qiw2QkFBNkIsV0FBVyxLQUFLLFdBQVcsU0FBUywwSkFBMEosNENBQTRDLDRHQUE0RyxnQ0FBZ0Msb0NBQW9DLHdJQUF3SSwyQkFBMkIsYUFBYSw4Q0FBOEMsaUlBQWlJLG1LQUFtSyxzQkFBc0IsV0FBVyxLQUFLLHVDQUF1QyxtR0FBbUcsd0JBQXdCLDRJQUE0SSwwR0FBMEcsNkJBQTZCLE1BQU0sTUFBTSx3REFBd0QsK0RBQStELG1EQUFtRCx1QkFBdUIsTUFBTSxNQUFNLDZDQUE2Qyw4REFBOEQsS0FBSyxNQUFNLDRKQUE0SixvQ0FBb0MsZ0ZBQWdGLDJCQUEyQix1QkFBdUIsSUFBSSxzQkFBc0Isa0JBQWtCLG9CQUFvQix3Q0FBd0Msa0RBQWtELDJDQUEyQyxPQUFPLDZIQUE2SCxzQ0FBc0MsU0FBUyxzT0FBc08sZ0NBQWdDLHNFQUFzRSxpckJBQWlyQixnREFBZ0QsMkNBQTJDLDhGQUE4Rix1REFBdUQsa0NBQWtDLGdCQUFnQiw2Q0FBNkMsb0RBQW9ELG1KQUFtSix1Q0FBdUMsNkNBQTZDLDRyQkFBNHJCLG9NQUFvTSxvQ0FBb0MsaW5CQUFpbkIsc0JBQXNCLHNGQUFzRixrNkNBQWs2Qyw2QkFBNkIsb0JBQW9CLDhHQUE4RyxFQUFFLHlCQUF5QiwrRkFBK0YscWVBQXFlLGlEQUFpRCxzREFBc0QsMkNBQTJDLFVBQVUsUUFBUSxtRUFBbUUsR0FBRywrQkFBK0IsK0ZBQStGLDJRQUEyUSxpREFBaUQsc0RBQXNELDJDQUEyQyxVQUFVLFFBQVEsbUVBQW1FLEdBQUcsb0JBQW9CLFdBQVcsZ0NBQWdDLGlQQUFpUCxJQUFJLEdBQUcsR0FBRyx3QkFBd0IscUJBQXFCLGlDQUFpQyx3QkFBd0IsZ0NBQWdDLDZCQUE2QixrQ0FBa0MsK0JBQStCLDJDQUEyQyxjQUFjLFVBQVUsdUJBQXVCLElBQUksdUNBQXVDLDZCQUE2QixTQUFTLFVBQVUsNkJBQTZCLDJEQUEyRCxzQkFBc0Isd0VBQXdFLGlCQUFpQiw2R0FBNkcsNkJBQTZCLDJCQUEyQiwrWEFBK1gsMkJBQTJCLG9DQUFvQyw2QkFBNkIsYUFBYSwyQkFBMkIsa0JBQWtCLDBDQUEwQyxrQ0FBa0Msc0NBQXNDLDBCQUEwQixvREFBb0Qsc0NBQXNDLG9DQUFvQyx5SkFBeUosc0JBQXNCLDI1Q0FBMjVDLG9CQUFvQixrQ0FBa0MsOFBBQThQLHlDQUF5QyxpQ0FBaUMsSUFBSSw4Q0FBOEMscVRBQXFULHlCQUF5Qix5Q0FBeUMsT0FBTyxTQUFTLDBCQUEwQixnQ0FBZ0MseUJBQXlCLHdCQUF3QixtSkFBbUosK0JBQStCLGlFQUFpRSxtQkFBbUIsS0FBSyxHQUFHLFNBQVMsMENBQTBDLDhOQUE4TixHQUFHLDJCQUEyQixHQUFHLGVBQWUsbUJBQW1CLFdBQVcsS0FBSyxXQUFXLHlCQUF5QixhQUFhLGdCQUFnQixXQUFXLGNBQWMsc0NBQXNDLFdBQVcsbUNBQW1DLGdCQUFnQiw0RkFBNEYsa0JBQWtCLGtCQUFrQixXQUFXLHFDQUFxQyxrQkFBa0IsNkdBQTZHLGlMQUFpTCxzQkFBc0Isb0JBQW9CLFlBQVksbUNBQW1DLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E5azJCO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxjQUFjLFdBQVcs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O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7O0FBRW5HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5Q0FBeUM7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFr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SSxvQkFBb0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0Esc0JBQXNCLEVBQUUsR0FBRyw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBLFFBQVE7QUFDUix3RUFBd0UsRUFBRTtBQUMxRSx3RUFBd0UsRUFBRTtBQUMxRSx3RUFBd0UsRUFBRTtBQUMxRSx3RUFBd0UsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL0BwZGZ0cm9uL3BkZmpzLWV4cHJlc3Mvd2Vidmlld2VyLm1pbi5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvanMtY29uZmV0dGkvZGlzdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2Nzcy9tb2RhbC5jc3M/ZjM4MSIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9zcmMvanMvZ2VuZXJhdGVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2pzL21vZGFsLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9zcmMvanMvc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtd2luZG93L2J1aWxkL3dvcmtib3gtd2luZG93LnByb2QuZXM1Lm1qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2pzL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIG49dCgpO2Zvcih2YXIgbyBpbiBuKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW29dPW5bb119fSh3aW5kb3csKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4obyl7aWYodFtvXSlyZXR1cm4gdFtvXS5leHBvcnRzO3ZhciBpPXRbb109e2k6byxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW29dLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLG4pLGkubD0hMCxpLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQsbyl7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om99KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbz1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihvKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIGkgaW4gZSluLmQobyxpLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsaSkpO3JldHVybiBvfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiL1wiLG4obi5zPTEpfShbZnVuY3Rpb24oZSx0KXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufSxmdW5jdGlvbihlLHQsbil7bigyKSxlLmV4cG9ydHM9big2KX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihvLGkpe3ZhciByLGE7ZnVuY3Rpb24gcyhlKXtyZXR1cm4ocz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9IWZ1bmN0aW9uKG8saSl7XCJvYmplY3RcIj09cyh0KSYmdm9pZCAwIT09ZT9pKCk6dm9pZCAwPT09KGE9XCJmdW5jdGlvblwiPT10eXBlb2Yocj1pKT9yLmNhbGwodCxuLHQsZSk6cil8fChlLmV4cG9ydHM9YSl9KDAsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBufSkpfSksKGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiB0LnJlamVjdChuKX0pKX0pKX1mdW5jdGlvbiB0KCl7fWZ1bmN0aW9uIG4oZSl7aWYoISh0aGlzIGluc3RhbmNlb2YgbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLl9zdGF0ZT0wLHRoaXMuX2hhbmRsZWQ9ITEsdGhpcy5fdmFsdWU9dm9pZCAwLHRoaXMuX2RlZmVycmVkcz1bXSxkKGUsdGhpcyl9ZnVuY3Rpb24gcihlLHQpe2Zvcig7Mz09PWUuX3N0YXRlOyllPWUuX3ZhbHVlOzAhPT1lLl9zdGF0ZT8oZS5faGFuZGxlZD0hMCxuLl9pbW1lZGlhdGVGbigoZnVuY3Rpb24oKXt2YXIgbj0xPT09ZS5fc3RhdGU/dC5vbkZ1bGZpbGxlZDp0Lm9uUmVqZWN0ZWQ7aWYobnVsbCE9PW4pe3ZhciBvO3RyeXtvPW4oZS5fdmFsdWUpfWNhdGNoKGUpe3JldHVybiB2b2lkIGModC5wcm9taXNlLGUpfWEodC5wcm9taXNlLG8pfWVsc2UoMT09PWUuX3N0YXRlP2E6YykodC5wcm9taXNlLGUuX3ZhbHVlKX0pKSk6ZS5fZGVmZXJyZWRzLnB1c2godCl9ZnVuY3Rpb24gYShlLHQpe3RyeXtpZih0PT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7aWYodCYmKFwib2JqZWN0XCI9PXModCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpKXt2YXIgbz10LnRoZW47aWYodCBpbnN0YW5jZW9mIG4pcmV0dXJuIGUuX3N0YXRlPTMsZS5fdmFsdWU9dCx2b2lkIGwoZSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbylyZXR1cm4gdm9pZCBkKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fShvLHQpLGUpfWUuX3N0YXRlPTEsZS5fdmFsdWU9dCxsKGUpfWNhdGNoKHQpe2MoZSx0KX19ZnVuY3Rpb24gYyhlLHQpe2UuX3N0YXRlPTIsZS5fdmFsdWU9dCxsKGUpfWZ1bmN0aW9uIGwoZSl7Mj09PWUuX3N0YXRlJiYwPT09ZS5fZGVmZXJyZWRzLmxlbmd0aCYmbi5faW1tZWRpYXRlRm4oKGZ1bmN0aW9uKCl7ZS5faGFuZGxlZHx8bi5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oZS5fdmFsdWUpfSkpO2Zvcih2YXIgdD0wLG89ZS5fZGVmZXJyZWRzLmxlbmd0aDtvPnQ7dCsrKXIoZSxlLl9kZWZlcnJlZHNbdF0pO2UuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIGQoZSx0KXt2YXIgbj0hMTt0cnl7ZSgoZnVuY3Rpb24oZSl7bnx8KG49ITAsYSh0LGUpKX0pLChmdW5jdGlvbihlKXtufHwobj0hMCxjKHQsZSkpfSkpfWNhdGNoKGUpe2lmKG4pcmV0dXJuO249ITAsYyh0LGUpfX12YXIgdT1zZXRUaW1lb3V0O24ucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4obnVsbCxlKX0sbi5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlLG4pe3ZhciBvPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHQpO3JldHVybiByKHRoaXMsbmV3IGZ1bmN0aW9uKGUsdCxuKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6bnVsbCx0aGlzLnByb21pc2U9bn0oZSxuLG8pKSxvfSxuLnByb3RvdHlwZS5maW5hbGx5PWUsbi5hbGw9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBuKChmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIG8oZSxhKXt0cnl7aWYoYSYmKFwib2JqZWN0XCI9PXMoYSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpKXt2YXIgYz1hLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYylyZXR1cm4gdm9pZCBjLmNhbGwoYSwoZnVuY3Rpb24odCl7byhlLHQpfSksbil9aVtlXT1hLDA9PS0tciYmdChpKX1jYXRjaChlKXtuKGUpfX1pZighZXx8dm9pZCAwPT09ZS5sZW5ndGgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXlcIik7dmFyIGk9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSk7aWYoMD09PWkubGVuZ3RoKXJldHVybiB0KFtdKTtmb3IodmFyIHI9aS5sZW5ndGgsYT0wO2kubGVuZ3RoPmE7YSsrKW8oYSxpW2FdKX0pKX0sbi5yZXNvbHZlPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZcIm9iamVjdFwiPT1zKGUpJiZlLmNvbnN0cnVjdG9yPT09bj9lOm5ldyBuKChmdW5jdGlvbih0KXt0KGUpfSkpfSxuLnJlamVjdD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IG4oKGZ1bmN0aW9uKHQsbil7bihlKX0pKX0sbi5yYWNlPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgbigoZnVuY3Rpb24odCxuKXtmb3IodmFyIG89MCxpPWUubGVuZ3RoO2k+bztvKyspZVtvXS50aGVuKHQsbil9KSl9LG4uX2ltbWVkaWF0ZUZuPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJmZ1bmN0aW9uKGUpe28oZSl9fHxmdW5jdGlvbihlKXt1KGUsMCl9LG4uX3VuaGFuZGxlZFJlamVjdGlvbkZuPWZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWNvbnNvbGUmJmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIixlKX07dmFyIGY9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZilyZXR1cm4gc2VsZjtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXJldHVybiB3aW5kb3c7aWYodm9pZCAwIT09aSlyZXR1cm4gaTt0aHJvdyBFcnJvcihcInVuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdFwiKX0oKTtcIlByb21pc2VcImluIGY/Zi5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5fHwoZi5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5PWUpOmYuUHJvbWlzZT1ufSkpfSkuY2FsbCh0aGlzLG4oMykuc2V0SW1tZWRpYXRlLG4oMCkpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUpe3ZhciBvPXZvaWQgMCE9PWUmJmV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmfHx3aW5kb3csaT1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7ZnVuY3Rpb24gcihlLHQpe3RoaXMuX2lkPWUsdGhpcy5fY2xlYXJGbj10fXQuc2V0VGltZW91dD1mdW5jdGlvbigpe3JldHVybiBuZXcgcihpLmNhbGwoc2V0VGltZW91dCxvLGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sdC5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgcihpLmNhbGwoc2V0SW50ZXJ2YWwsbyxhcmd1bWVudHMpLGNsZWFySW50ZXJ2YWwpfSx0LmNsZWFyVGltZW91dD10LmNsZWFySW50ZXJ2YWw9ZnVuY3Rpb24oZSl7ZSYmZS5jbG9zZSgpfSxyLnByb3RvdHlwZS51bnJlZj1yLnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24oKXt9LHIucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJGbi5jYWxsKG8sdGhpcy5faWQpfSx0LmVucm9sbD1mdW5jdGlvbihlLHQpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD10fSx0LnVuZW5yb2xsPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD0tMX0sdC5fdW5yZWZBY3RpdmU9dC5hY3RpdmU9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpO3ZhciB0PWUuX2lkbGVUaW1lb3V0O3Q+PTAmJihlLl9pZGxlVGltZW91dElkPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS5fb25UaW1lb3V0JiZlLl9vblRpbWVvdXQoKX0pLHQpKX0sbig0KSx0LnNldEltbWVkaWF0ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5zZXRJbW1lZGlhdGV8fHZvaWQgMCE9PWUmJmUuc2V0SW1tZWRpYXRlfHx0aGlzJiZ0aGlzLnNldEltbWVkaWF0ZSx0LmNsZWFySW1tZWRpYXRlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLmNsZWFySW1tZWRpYXRlfHx2b2lkIDAhPT1lJiZlLmNsZWFySW1tZWRpYXRlfHx0aGlzJiZ0aGlzLmNsZWFySW1tZWRpYXRlfSkuY2FsbCh0aGlzLG4oMCkpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUsbil7XCJ1c2Ugc3RyaWN0XCI7aWYoIWUuc2V0SW1tZWRpYXRlKXt2YXIgbyxpLHIsYSxzLGM9MSxsPXt9LGQ9ITEsdT1lLmRvY3VtZW50LGY9T2JqZWN0LmdldFByb3RvdHlwZU9mJiZPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk7Zj1mJiZmLnNldFRpbWVvdXQ/ZjplLFwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChlLnByb2Nlc3MpP289ZnVuY3Rpb24oZSl7dC5uZXh0VGljaygoZnVuY3Rpb24oKXtoKGUpfSkpfTohZnVuY3Rpb24oKXtpZihlLnBvc3RNZXNzYWdlJiYhZS5pbXBvcnRTY3JpcHRzKXt2YXIgdD0hMCxuPWUub25tZXNzYWdlO3JldHVybiBlLm9ubWVzc2FnZT1mdW5jdGlvbigpe3Q9ITF9LGUucG9zdE1lc3NhZ2UoXCJcIixcIipcIiksZS5vbm1lc3NhZ2U9bix0fX0oKT9lLk1lc3NhZ2VDaGFubmVsPygocj1uZXcgTWVzc2FnZUNoYW5uZWwpLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbihlKXtoKGUuZGF0YSl9LG89ZnVuY3Rpb24oZSl7ci5wb3J0Mi5wb3N0TWVzc2FnZShlKX0pOnUmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiB1LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/KGk9dS5kb2N1bWVudEVsZW1lbnQsbz1mdW5jdGlvbihlKXt2YXIgdD11LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7dC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtoKGUpLHQub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsaS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9LGkuYXBwZW5kQ2hpbGQodCl9KTpvPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoaCwwLGUpfTooYT1cInNldEltbWVkaWF0ZSRcIitNYXRoLnJhbmRvbSgpK1wiJFwiLHM9ZnVuY3Rpb24odCl7dC5zb3VyY2U9PT1lJiZcInN0cmluZ1wiPT10eXBlb2YgdC5kYXRhJiYwPT09dC5kYXRhLmluZGV4T2YoYSkmJmgoK3QuZGF0YS5zbGljZShhLmxlbmd0aCkpfSxlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHMsITEpOmUuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixzKSxvPWZ1bmN0aW9uKHQpe2UucG9zdE1lc3NhZ2UoYSt0LFwiKlwiKX0pLGYuc2V0SW1tZWRpYXRlPWZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJihlPW5ldyBGdW5jdGlvbihcIlwiK2UpKTtmb3IodmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSksbj0wO248dC5sZW5ndGg7bisrKXRbbl09YXJndW1lbnRzW24rMV07dmFyIGk9e2NhbGxiYWNrOmUsYXJnczp0fTtyZXR1cm4gbFtjXT1pLG8oYyksYysrfSxmLmNsZWFySW1tZWRpYXRlPXB9ZnVuY3Rpb24gcChlKXtkZWxldGUgbFtlXX1mdW5jdGlvbiBoKGUpe2lmKGQpc2V0VGltZW91dChoLDAsZSk7ZWxzZXt2YXIgdD1sW2VdO2lmKHQpe2Q9ITA7dHJ5eyFmdW5jdGlvbihlKXt2YXIgdD1lLmNhbGxiYWNrLG49ZS5hcmdzO3N3aXRjaChuLmxlbmd0aCl7Y2FzZSAwOnQoKTticmVhaztjYXNlIDE6dChuWzBdKTticmVhaztjYXNlIDI6dChuWzBdLG5bMV0pO2JyZWFrO2Nhc2UgMzp0KG5bMF0sblsxXSxuWzJdKTticmVhaztkZWZhdWx0OnQuYXBwbHkodm9pZCAwLG4pfX0odCl9ZmluYWxseXtwKGUpLGQ9ITF9fX19fShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj92b2lkIDA9PT1lP3RoaXM6ZTpzZWxmKX0pLmNhbGwodGhpcyxuKDApLG4oNSkpfSxmdW5jdGlvbihlLHQpe3ZhciBuLG8saT1lLmV4cG9ydHM9e307ZnVuY3Rpb24gcigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gYSgpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBzKGUpe2lmKG49PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KGUsMCk7aWYoKG49PT1yfHwhbikmJnNldFRpbWVvdXQpcmV0dXJuIG49c2V0VGltZW91dCxzZXRUaW1lb3V0KGUsMCk7dHJ5e3JldHVybiBuKGUsMCl9Y2F0Y2godCl7dHJ5e3JldHVybiBuLmNhbGwobnVsbCxlLDApfWNhdGNoKHQpe3JldHVybiBuLmNhbGwodGhpcyxlLDApfX19IWZ1bmN0aW9uKCl7dHJ5e249XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnJ9Y2F0Y2goZSl7bj1yfXRyeXtvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6YX1jYXRjaChlKXtvPWF9fSgpO3ZhciBjLGw9W10sZD0hMSx1PS0xO2Z1bmN0aW9uIGYoKXtkJiZjJiYoZD0hMSxjLmxlbmd0aD9sPWMuY29uY2F0KGwpOnU9LTEsbC5sZW5ndGgmJnAoKSl9ZnVuY3Rpb24gcCgpe2lmKCFkKXt2YXIgZT1zKGYpO2Q9ITA7Zm9yKHZhciB0PWwubGVuZ3RoO3Q7KXtmb3IoYz1sLGw9W107Kyt1PHQ7KWMmJmNbdV0ucnVuKCk7dT0tMSx0PWwubGVuZ3RofWM9bnVsbCxkPSExLGZ1bmN0aW9uKGUpe2lmKG89PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dChlKTtpZigobz09PWF8fCFvKSYmY2xlYXJUaW1lb3V0KXJldHVybiBvPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQoZSk7dHJ5e28oZSl9Y2F0Y2godCl7dHJ5e3JldHVybiBvLmNhbGwobnVsbCxlKX1jYXRjaCh0KXtyZXR1cm4gby5jYWxsKHRoaXMsZSl9fX0oZSl9fWZ1bmN0aW9uIGgoZSx0KXt0aGlzLmZ1bj1lLHRoaXMuYXJyYXk9dH1mdW5jdGlvbiBtKCl7fWkubmV4dFRpY2s9ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdFtuLTFdPWFyZ3VtZW50c1tuXTtsLnB1c2gobmV3IGgoZSx0KSksMSE9PWwubGVuZ3RofHxkfHxzKHApfSxoLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxpLnRpdGxlPVwiYnJvd3NlclwiLGkuYnJvd3Nlcj0hMCxpLmVudj17fSxpLmFyZ3Y9W10saS52ZXJzaW9uPVwiXCIsaS52ZXJzaW9ucz17fSxpLm9uPW0saS5hZGRMaXN0ZW5lcj1tLGkub25jZT1tLGkub2ZmPW0saS5yZW1vdmVMaXN0ZW5lcj1tLGkucmVtb3ZlQWxsTGlzdGVuZXJzPW0saS5lbWl0PW0saS5wcmVwZW5kTGlzdGVuZXI9bSxpLnByZXBlbmRPbmNlTGlzdGVuZXI9bSxpLmxpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm5bXX0saS5iaW5kaW5nPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxpLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxpLmNoZGlyPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0saS51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24ucih0KSxuLmQodCxcImdldEluc3RhbmNlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHd9KSk7dmFyIG89e0FTTTpcImFzbVwiLFdBU006XCJlbXNcIixKU19XT1JLRVI6XCJqc3dvcmtlclwiLFRIUkVBREVEX1dBU006XCJ3YXNtLXRocmVhZHNcIn07ZnVuY3Rpb24gaShlLHQpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhdClyZXR1cm4gZTt2YXIgbj10LnN1YnN0cigwLHQubGFzdEluZGV4T2YoXCIvXCIpKTtyZXR1cm4vXihcXC98JTJGfFthLXowLTktXSs6KS9pLnRlc3QoZSk/ZTpuK1wiL1wiK2V9ZnVuY3Rpb24gcihlLHQpe3ZhciBuPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG89by5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksbi5wdXNoLmFwcGx5KG4sbyl9cmV0dXJuIG59ZnVuY3Rpb24gYShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9yKE9iamVjdChuKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7cyhlLHQsblt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhuKSk6cihPYmplY3QobikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBzKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX12YXIgYz17fSxsPTA7d2luZG93LmlzUGRmanM9ITAsXCJ1bmRlZmluZWRcIj09dHlwZW9mIGNvbnNvbGUmJih3aW5kb3cuY29uc29sZT17bG9nOmZ1bmN0aW9uKCl7fSx3YXJuOmZ1bmN0aW9uKCl7fSxlcnJvcjpmdW5jdGlvbigpe319KTt2YXIgZD1mdW5jdGlvbigpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspZm9yKHZhciB0PU9iamVjdC5rZXlzKGFyZ3VtZW50c1tlXSksbj0wO248dC5sZW5ndGg7bisrKWFyZ3VtZW50c1swXVt0W25dXT1hcmd1bWVudHNbZV1bdFtuXV07cmV0dXJuIGFyZ3VtZW50c1swXX0sdT1mdW5jdGlvbihlKXt2YXIgdD1bXTtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihlKXt0LnB1c2goZSl9KSksdH0sZj1mdW5jdGlvbihlLHQpe3ZhciBuO3RyeXtuPW5ldyBDdXN0b21FdmVudChlLHtkZXRhaWw6dCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KX1jYXRjaChvKXsobj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpKS5pbml0RXZlbnQoZSwhMCwhMCksbi5kZXRhaWw9dH1yZXR1cm4gbn07d2luZG93LlBERk5ldCYmIWMuc2tpcFBERk5ldFdlYlZpZXdlcldhcm5pbmcmJmNvbnNvbGUud2FybihcIlBERk5ldC5qcyBhbmQgV2ViVmlld2VyLmpzIGhhdmUgYmVlbiBpbmNsdWRlZCBpbiB0aGUgc2FtZSBjb250ZXh0LiBTZWUgaHR0cHM6Ly93d3cucGRmdHJvbi5jb20va2Jfc2FtZV9jb250ZXh0IGZvciBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBjb3VsZCBiZSBhbiBlcnJvciBpbiB5b3VyIGFwcGxpY2F0aW9uLlwiKTt2YXIgcD1uZXcgTWFwLGg9bmV3IE1hcDtjLldlYlZpZXdlcj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7aWYoaC5nZXQodCkpdGhyb3cgbmV3IEVycm9yKFwiVHdvIGluc3RhbmNlcyBvZiBXZWJWaWV3ZXIgd2VyZSBjcmVhdGVkIG9uIHRoZSBzYW1lIEhUTUwgZWxlbWVudC4gUGxlYXNlIGNyZWF0ZSBhIG5ldyBlbGVtZW50IGZvciBlYWNoIGluc3RhbmNlIG9mIFdlYlZpZXdlclwiKTtoLnNldCh0LCEwKTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLChmdW5jdGlvbiBlKCl7cC5nZXQodCkuaW5zdGFuY2U9bi5nZXRDb21wbGV0ZUluc3RhbmNlKCksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlcIixlKX0pKSx0aGlzLl92YWxpZGF0ZU9wdGlvbnMoZSk7dmFyIG89ZS53ZWJ2aWV3ZXJTZXJ2ZXJVUkx8fGUucGRmdHJvblNlcnZlcjtlLmZ1bGxBUEkmJm8mJihlLmZvcmNlQ2xpZW50U2lkZUluaXR8fGNvbnNvbGUud2FybihcIlRoZSBmdWxsQVBJIGFuZCB3ZWJ2aWV3ZXJTZXJ2ZXJVUkwgb3B0aW9ucyBoYXZlIGJvdGggYmVlbiBzZXQgc28gdGhlIGZvcmNlQ2xpZW50U2lkZUluaXQgb3B0aW9uIGlzIG5vdyBlbmFibGVkLiBUaGlzIG1lYW5zIHRoYXQgV2ViVmlld2VyIHdpbGwgc3dpdGNoIHRvIGNsaWVudCBzaWRlIHJlbmRlcmluZyBhbmQgcHJvY2Vzc2luZyB0byBhbGxvdyB1c2Ugb2YgdGhlIGZ1bGwgQVBJLlwiKSxlLmZvcmNlQ2xpZW50U2lkZUluaXQ9ITApLHRoaXMub3B0aW9ucz1kKHt9LGMuV2ViVmlld2VyLk9wdGlvbnMsZSk7dmFyIGk9dGhpcy5vcHRpb25zLnBhdGgubGVuZ3RoLTE7aT4wJiZcIi9cIiE9PXRoaXMub3B0aW9ucy5wYXRoW2ldJiYodGhpcy5vcHRpb25zLnBhdGgrPVwiL1wiKSx0aGlzLm9wdGlvbnMudWlQYXRoPXRoaXMub3B0aW9ucy5wYXRoK3RoaXMub3B0aW9ucy51aVBhdGgsdHx8Y29uc29sZS5lcnJvcihcIlZpZXdlckVsZW1lbnQgaXMgbm90IGRlZmluZWQuIFRoaXMgbWF5IGJlIGNhdXNlZCBieSBjYWxsaW5nIHRoZSBXZWJWaWV3ZXIgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBET00gaXMgbG9hZGVkLCBvciBhbiBpbnZhbGlkIHNlbGVjdG9yLiBQbGVhc2Ugc2VlIGh0dHA6Ly9yLnBkZnRyb24uY29tL2d1aWRlcy9xdWljay1zdGFydCBmb3IgYW4gZXhhbXBsZS5cIiksdGhpcy5lbGVtZW50PXQsdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7dmFyIHI9dGhpczt0aGlzLm1lc3NhZ2VIYW5kbGVyPWZ1bmN0aW9uKHQpe2lmKFwicmVxdWVzdGxcIj09PXQuZGF0YSYmdC5zb3VyY2UmJnQuc291cmNlLnBvc3RNZXNzYWdlKHt0eXBlOlwicmVzcG9uc2VsXCIsdmFsdWU6ZS5sfHxlLmxpY2Vuc2VLZXl9LFwiKlwiKSxcInJlcXVlc3RDb25maWdcIj09PXQuZGF0YS50eXBlJiZ0LmRhdGEuaWQ9PT1yLmlkJiZ0LnNvdXJjZSl7dmFyIG49ZS5jb25maWc/ci5fY29ycmVjdFJlbGF0aXZlUGF0aChlLmNvbmZpZyk6XCJcIjt0LnNvdXJjZS5wb3N0TWVzc2FnZSh7dHlwZTpcInJlc3BvbnNlQ29uZmlnXCIsdmFsdWU6bn0sXCIqXCIpfX0sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdGhpcy5tZXNzYWdlSGFuZGxlciwhMSksdGhpcy5vcHRpb25zLmF1dG9DcmVhdGUmJnRoaXMuY3JlYXRlKCl9O3ZhciBtPXtsaWNlbnNlS2V5OnZvaWQgMCxlbmFibGVBenVyZVdvcmthcm91bmQ6ITEsaXNBZG1pblVzZXI6ITEsaXNSZWFkT25seTohMX07Yy5XZWJWaWV3ZXIucHJvdG90eXBlPXt2ZXJzaW9uOlwiOC43LjRcIixjcmVhdGU6ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyl7dmFyIGU9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aCh0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyk7ZT1lbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZSkpLHRoaXMub3B0aW9ucy5pbml0aWFsRG9jPWV9dGhpcy5fY3JlYXRlKCl9LF9jcmVhdGU6ZnVuY3Rpb24oKXt0aGlzLmlkPSsrbCx2b2lkIDA9PT10aGlzLl90cmlnZ2VyJiYodGhpcy5fdHJpZ2dlcj1mdW5jdGlvbihlLHQpe3ZhciBuPWYoZSx0KTt0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuKX0pO3ZhciBlPXRoaXMub3B0aW9ucy50eXBlLnJlcGxhY2UoXCIgXCIsXCJcIikuc3BsaXQoXCIsXCIpO2UubGVuZ3RoPDEmJihlWzBdPVwiaHRtbDVcIiksdGhpcy5fY3JlYXRlVmlld2VyKGUpfSxfdmFsaWRhdGVPcHRpb25zOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1PYmplY3Qua2V5cyhlKSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07byBpbiBkKHt9LG0sYy5XZWJWaWV3ZXIuT3B0aW9ucyl8fGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChvLFwiIGlzIG5vdCBhIHZhbGlkIG9wdGlvbiBuYW1lLiBTZWUgaHR0cDovL3IucGRmdHJvbi5jb20vYXBpL29wdGlvbnNfYW5jaG9yIGZvciBhbGwgYXZhaWxhYmxlIG9wdGlvbnMuXCIpKX12YXIgaT1lLndlYnZpZXdlclNlcnZlclVSTHx8ZS5wZGZ0cm9uU2VydmVyOyFlLmVuYWJsZVJlZGFjdGlvbnx8ZS5mdWxsQVBJfHxpfHxjb25zb2xlLndhcm4oXCJGdWxsQVBJIG9yIFdlYlZpZXdlciBTZXJ2ZXIgaXMgbmVlZGVkIHRvIGFwcGx5IHJlZGFjdGlvbnNcIil9LF9ub3RTdXBwb3J0ZWRNb2JpbGU6ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaWQ9XCJ3ZWJ2aWV3ZXItYnJvd3Nlci11bnN1cHBvcnRlZFwiLGUudGV4dENvbnRlbnQ9XCJQREYgZG9jdW1lbnQgdmlld2luZyBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci5cIix0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZSl9LF9jcmVhdGVWaWV3ZXI6ZnVuY3Rpb24oZSl7dmFyIHQsbj10aGlzO2lmKG4uc2VsZWN0ZWRUeXBlPW51bGwsdGhpcy5pc01vYmlsZURldmljZSgpKXtpZih0aGlzLm9wdGlvbnMuZG9jdW1lbnRUeXBlJiZcInhvZFwiIT09dGhpcy5vcHRpb25zLmRvY3VtZW50VHlwZSYmIXRoaXMuX3Rlc3RXZWJBc3NlbWJseSgpKXJldHVybiB2b2lkIHRoaXMuX25vdFN1cHBvcnRlZE1vYmlsZSgpO2lmKGU9QXJyYXkoXCJodG1sNU1vYmlsZVwiKSxuLnNlbGVjdGVkVHlwZT1cImh0bWw1TW9iaWxlXCIsdGhpcy5vcHRpb25zLm1vYmlsZVJlZGlyZWN0KXJldHVybiB0PXRoaXMub3B0aW9ucy51aVBhdGgrdGhpcy5fZ2V0SFRNTDVPcHRpb25zVVJMKCksdm9pZCh3aW5kb3cubG9jYXRpb249dCl9Zm9yKHZhciBvPSExLGk9ITEscj0wO3I8ZS5sZW5ndGg7cisrKXtpZihcImh0bWw1bW9iaWxlXCI9PT1lW3JdLnRvTG93ZXJDYXNlKCkpe2lmKHRoaXMub3B0aW9ucy5kb2N1bWVudFR5cGUmJlwieG9kXCIhPT10aGlzLm9wdGlvbnMuZG9jdW1lbnRUeXBlJiYhdGhpcy5fdGVzdFdlYkFzc2VtYmx5KCkpY29udGludWU7aWYobz0hMCxuLl90ZXN0SFRNTDUoKSl7aWYodGhpcy5vcHRpb25zLm1vYmlsZVJlZGlyZWN0KXJldHVybiBuLnNlbGVjdGVkVHlwZT1cImh0bWw1TW9iaWxlXCIsdD10aGlzLm9wdGlvbnMudWlQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLHZvaWQod2luZG93LmxvY2F0aW9uPXQpO2lmKHRoaXMub3B0aW9ucy54ZG9tYWluUHJveHlVcmx8fG4uaXNTYW1lT3JpZ2luKGRlY29kZVVSSUNvbXBvbmVudChuLm9wdGlvbnMuaW5pdGlhbERvYykpfHxuLl90ZXN0Q09SUygpKXtuLnNlbGVjdGVkVHlwZT1cImh0bWw1TW9iaWxlXCI7YnJlYWt9aT0hMH19aWYoXCJodG1sNVwiPT09ZVtyXS50b0xvd2VyQ2FzZSgpJiYobz0hMCxuLl90ZXN0SFRNTDUoKSkpe3ZhciBhPW4uaXNTYW1lT3JpZ2luKGRlY29kZVVSSUNvbXBvbmVudChuLm9wdGlvbnMuaW5pdGlhbERvYykpO2lmKHRoaXMub3B0aW9ucy54ZG9tYWluUHJveHlVcmx8fGF8fG4uX3Rlc3RDT1JTKCkpe24uc2VsZWN0ZWRUeXBlPVwiaHRtbDVcIjticmVha31pPSEwfX1pZihcImh0bWw1XCI9PT1uLnNlbGVjdGVkVHlwZSluLl9jcmVhdGVIVE1MNSgpO2Vsc2UgaWYoXCJodG1sNU1vYmlsZVwiPT09bi5zZWxlY3RlZFR5cGUpbi5fY3JlYXRlSFRNTDVNb2JpbGUoKTtlbHNle3ZhciBzO2lmKGk/cz1cIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzIG9yaWdpbiByZXF1ZXN0cy4gUGxlYXNlIGNvbmZpZ3VyZSB4ZG9tYWluIHRvIHN1cHBvcnQgQ09SUy5cIjpvJiYocz1cIlBsZWFzZSB1c2UgYW4gSFRNTDUgY29tcGF0aWJsZSBicm93c2VyLlwiKSxzKXt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2MuaWQ9XCJ3ZWJ2aWV3ZXItYnJvd3Nlci11bnN1cHBvcnRlZFwiLGMudGV4dENvbnRlbnQ9cyxuLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYyl9fX0sX3ZpZXdlckxvYWRlZDpmdW5jdGlvbihlKXt0aGlzLl90cmlnZ2VyKFwicmVhZHlcIik7dHJ5e3ZhciB0PWUuY29udGVudFdpbmRvdztpZih0LnBvc3RNZXNzYWdlKHt0eXBlOlwidmlld2VyTG9hZGVkXCJ9LFwiKlwiKSx2b2lkIDAhPT10aGlzLm9wdGlvbnMuZW5jcnlwdGlvbil7dmFyIG49ZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMub3B0aW9ucy5pbml0aWFsRG9jKTt0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyYmKG49SlNPTi5wYXJzZShuKSk7dmFyIG89e2RlY3J5cHQ6dC5Db3JlLkVuY3J5cHRpb24uZGVjcnlwdCxkZWNyeXB0T3B0aW9uczp0aGlzLm9wdGlvbnMuZW5jcnlwdGlvbixkb2N1bWVudElkOnRoaXMub3B0aW9ucy5kb2N1bWVudElkLGV4dGVuc2lvbjpcInhvZFwifTt0aGlzLmdldEluc3RhbmNlKCkubG9hZERvY3VtZW50KG4sbyl9fWNhdGNoKGUpe2NvbnNvbGUud2FybihcIlZpZXdlciBpcyBvbiBhIGRpZmZlcmVudCBkb21haW4sIHRoZSBwcm9taXNlIGZyb20gV2ViVmlld2VyIGZ1bmN0aW9uIGlzIHJlamVjdGVkIGFuZCBBUEkgZnVuY3Rpb25zIHdpbGwgbm90IHdvcmsgYmVjYXVzZSBvZiBjcm9zcyBkb21haW4gcGVybWlzc2lvbnMuIFNlZSBodHRwOi8vci5wZGZ0cm9uLmNvbS9rYl9jcm9zc19vcmlnaW4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpfX0sX2dldEhUTUw1T3B0aW9uc1VSTDpmdW5jdGlvbigpe3ZhciBlLHQsbixvPXRoaXMub3B0aW9ucyxpPW8ud2Vidmlld2VyU2VydmVyVVJMfHxvLnBkZnRyb25TZXJ2ZXIscj1cIlwiO2lmKG8uaW5pdGlhbERvYyYmKHIrPVwiI2Q9XCIuY29uY2F0KG8uaW5pdGlhbERvYykpLHZvaWQgMD09PW8uYmFja2VuZFR5cGUmJihvLmJhY2tlbmRUeXBlPW8ucGRmQmFja2VuZCksby5kb2N1bWVudFR5cGUmJlwieG9kXCI9PT1vLmRvY3VtZW50VHlwZSYmKGU9by5kb2N1bWVudFR5cGUpLG8ucHJlbG9hZFdvcmtlciYmXCJ4b2RcIj09PW8ucHJlbG9hZFdvcmtlciYmKGU9by5wcmVsb2FkV29ya2VyKSxvLmV4dGVuc2lvbiYmKGU9by5leHRlbnNpb24pLGUmJihyKz1cIiZleHRlbnNpb249XCIuY29uY2F0KGUpKSxvLmRvY3VtZW50VHlwZSYmXCJ4b2RcIiE9PW8uZG9jdW1lbnRUeXBlJiYodD1vLmRvY3VtZW50VHlwZSksby5wcmVsb2FkV29ya2VyJiZcInhvZFwiIT09by5wcmVsb2FkV29ya2VyJiYodD1vLnByZWxvYWRXb3JrZXIpLHQmJihyKz1cIiZwcmVsb2FkV29ya2VyPVwiLmNvbmNhdCh0KSksby5iYWNrZW5kVHlwZSYmKHIrPVwiJnBkZj1cIi5jb25jYXQoby5iYWNrZW5kVHlwZSxcIiZvZmZpY2U9XCIpLmNvbmNhdChvLmJhY2tlbmRUeXBlLFwiJmxlZ2FjeU9mZmljZT1cIikuY29uY2F0KG8uYmFja2VuZFR5cGUpKSxvLmZpbGVuYW1lJiYocis9XCImZmlsZW5hbWU9XCIuY29uY2F0KG8uZmlsZW5hbWUpKSx2b2lkIDAhPT1vLnN0cmVhbWluZyYmKHIrPVwiJnN0cmVhbWluZz1cIi5jb25jYXQoby5zdHJlYW1pbmcpKSxvLmV4dGVybmFsUGF0aCl7dmFyIGE9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aChvLmV4dGVybmFsUGF0aCk7YT1lbmNvZGVVUklDb21wb25lbnQoYSkscis9XCImcD1cIi5jb25jYXQoYSl9aWYoby5lbmNyeXB0aW9uJiYocis9XCImYXV0b19sb2FkPWZhbHNlXCIpLG8uZW5hYmxlQW5ub3RhdGlvbnMmJihyKz1cIiZhPTFcIiksby5kaXNhYmxlZEVsZW1lbnRzKXt2YXIgcz1lbmNvZGVVUklDb21wb25lbnQoby5kaXNhYmxlZEVsZW1lbnRzLmpvaW4oXCIsXCIpKTtyKz1cIiZkaXNhYmxlZEVsZW1lbnRzPVwiLmNvbmNhdChzKX1pZihvLnNlcnZlclVybCl7dmFyIGM9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aChvLnNlcnZlclVybCk7Yz1lbmNvZGVVUklDb21wb25lbnQoYykscis9XCImc2VydmVyX3VybD1cIi5jb25jYXQoYyl9aWYoby5zZXJ2ZXJVcmxIZWFkZXJzJiYocis9XCImc2VydmVyVXJsSGVhZGVycz1cIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoby5zZXJ2ZXJVcmxIZWFkZXJzKSkpLG8uZG9jdW1lbnRJZCYmKHIrPVwiJmRpZD1cIi5jb25jYXQoby5kb2N1bWVudElkKSksby5jc3Mpe3ZhciBsPXRoaXMuX2NvcnJlY3RSZWxhdGl2ZVBhdGgoby5jc3MpO2w9ZW5jb2RlVVJJQ29tcG9uZW50KGwpLHIrPVwiJmNzcz1cIi5jb25jYXQobCl9aWYoby5kaXNhYmxlSTE4biYmKHIrPVwiJmRpc2FibGVJMThuPTFcIiksby5lbmFibGVPZmZsaW5lTW9kZSYmKHIrPVwiJm9mZmxpbmU9MVwiKSxvLnN0YXJ0T2ZmbGluZSYmKHIrPVwiJnN0YXJ0T2ZmbGluZT0xXCIpLChvLmVuYWJsZVJlYWRPbmx5TW9kZXx8by5pc1JlYWRPbmx5KSYmKHIrPVwiJnJlYWRvbmx5PTFcIiksby5oaWRlQW5ub3RhdGlvblBhbmVsJiYocis9XCImaGlkZUFubm90YXRpb25QYW5lbD0xXCIpLG8uZGlzYWJsZVRvb2xHcm91cFJlb3JkZXJpbmcmJihyKz1cIiZkaXNhYmxlVG9vbEdyb3VwUmVvcmRlcmluZz0xXCIpLHZvaWQgMCE9PW8uYW5ub3RhdGlvblVzZXImJihyKz1cIiZ1c2VyPVwiLmNvbmNhdChvLmFubm90YXRpb25Vc2VyKSksdm9pZCAwPT09by5hbm5vdGF0aW9uQWRtaW4mJnZvaWQgMD09PW8uaXNBZG1pblVzZXJ8fChyKz1cIiZhZG1pbj1cIi5jb25jYXQoby5hbm5vdGF0aW9uQWRtaW58fG8uaXNBZG1pblVzZXI/MTowKSksdm9pZCAwIT09by5jdXN0b20mJihyKz1cIiZjdXN0b209XCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChvLmN1c3RvbSkpKSx2b2lkIDA9PT1vLnNob3dMb2NhbEZpbGVQaWNrZXImJnZvaWQgMD09PW8uZW5hYmxlRmlsZVBpY2tlcnx8KHIrPVwiJmZpbGVwaWNrZXI9XCIuY29uY2F0KG8uc2hvd0xvY2FsRmlsZVBpY2tlcnx8by5lbmFibGVGaWxlUGlja2VyPzE6MCkpLHZvaWQgMCE9PW8uZnVsbEFQSSl7aWYoby5mdWxsQVBJKXRocm93IG5ldyBFcnJvcignXCJmdWxsQVBJXCIgaXMgbm90IGEgdmFsaWQgY29uc3R1Y3RvciBvcHRpb24gZm9yIFBERi5qcyBFeHByZXNzLiBQbGVhc2UgbWFrZSBzdXJlIHlvdSBhcmUgcmVmZXJyaW5nIHRvIHRoZSBwcm9wZXIgZG9jdW1lbnRhdGlvbiAoaHR0cHM6Ly9wZGZqcy5leHByZXNzL2RvY3VtZW50YXRpb24pJyk7cis9XCImcGRmbmV0PVwiLmNvbmNhdChvLmZ1bGxBUEk/MTowKX0odm9pZCAwIT09by5lbmFibGVSZWRhY3Rpb24mJihyKz1cIiZlbmFibGVSZWRhY3Rpb249XCIuY29uY2F0KG8uZW5hYmxlUmVkYWN0aW9uPzE6MCkpLHZvaWQgMCE9PW8uZGlzYWJsZVZpcnR1YWxEaXNwbGF5TW9kZSYmKHIrPVwiJmRpc2FibGVWaXJ0dWFsRGlzcGxheU1vZGU9XCIuY29uY2F0KG8uZGlzYWJsZVZpcnR1YWxEaXNwbGF5TW9kZT8xOjApKSx2b2lkIDAhPT1vLmVuYWJsZU1lYXN1cmVtZW50JiYocis9XCImZW5hYmxlTWVhc3VyZW1lbnQ9XCIuY29uY2F0KG8uZW5hYmxlTWVhc3VyZW1lbnQ/MTowKSksdm9pZCAwIT09by5zaG93VG9vbGJhckNvbnRyb2wmJihyKz1cIiZ0b29sYmFyPVwiLmNvbmNhdChvLnNob3dUb29sYmFyQ29udHJvbD9cInRydWVcIjpcImZhbHNlXCIpKSx2b2lkIDAhPT1vLnNob3dQYWdlSGlzdG9yeUJ1dHRvbnMmJihyKz1cIiZwYWdlSGlzdG9yeT1cIi5jb25jYXQoby5zaG93UGFnZUhpc3RvcnlCdXR0b25zPzE6MCkpLHZvaWQgMCE9PW8ubm90ZXNJbkxlZnRQYW5lbCYmKHIrPVwiJm5vdGVzSW5MZWZ0UGFuZWw9XCIuY29uY2F0KG8ubm90ZXNJbkxlZnRQYW5lbD8xOjApKSx2b2lkIDAhPT1vLnhkb21haW5Qcm94eVVybCkmJihuPVwic3RyaW5nXCI9PXR5cGVvZiBvLnhkb21haW5Qcm94eVVybD97dXJsOm8ueGRvbWFpblByb3h5VXJsfTpvLnhkb21haW5Qcm94eVVybCxyKz1cIiZ4ZG9tYWluX3VybHM9XCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTtyZXR1cm4oby5henVyZVdvcmthcm91bmR8fG8uZW5hYmxlQXp1cmVXb3JrYXJvdW5kKSYmKHIrPVwiJmF6dXJlV29ya2Fyb3VuZD0xXCIpLG8uZW5hYmxlT3B0aW1pemVkV29ya2Vyc3x8KHIrPVwiJmVuYWJsZU9wdGltaXplZFdvcmtlcnM9MFwiKSxvLnVzZURvd25sb2FkZXJ8fChyKz1cIiZ1c2VEb3dubG9hZGVyPTBcIiksby5kaXNhYmxlV2Vic29ja2V0cyYmKHIrPVwiJmRpc2FibGVXZWJzb2NrZXRzPTFcIiksby5kaXNhYmxlU3RyZWFtaW5nJiYocis9XCImZGlzYWJsZVN0cmVhbWluZz0xXCIpLG8uZm9yY2VDbGllbnRTaWRlSW5pdCYmKHIrPVwiJmZvcmNlQ2xpZW50U2lkZUluaXQ9MVwiKSxvLmxvYWRBc1BERiYmKHIrPVwiJmxvYWRBc1BERj0xXCIpLHZvaWQgMCE9PW8ud29ya2VyVHJhbnNwb3J0UHJvbWlzZSYmKHIrPVwiJnVzZVNoYXJlZFdvcmtlcj1cIi5jb25jYXQoby53b3JrZXJUcmFuc3BvcnRQcm9taXNlP1widHJ1ZVwiOlwiZmFsc2VcIikpLHZvaWQgMCE9PWkmJmkmJihyKz1cIiZ3ZWJ2aWV3ZXJTZXJ2ZXJVUkw9XCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChpKSkpLG8uZmFsbGJhY2tUb0NsaWVudFNpZGUmJihyKz1cIiZmYWxsYmFja1RvQ2xpZW50U2lkZT0xXCIpLHZvaWQgMCE9PW8uc2luZ2xlU2VydmVyTW9kZSYmKHIrPVwiJnNpbmdsZVNlcnZlck1vZGU9XCIuY29uY2F0KG8uc2luZ2xlU2VydmVyTW9kZT9cInRydWVcIjpcImZhbHNlXCIpKSx2b2lkIDAhPT1vLmFjY2Vzc2libGVNb2RlJiYocis9XCImYWNjZXNzaWJsZU1vZGU9XCIuY29uY2F0KG8uYWNjZXNzaWJsZU1vZGU/MTowKSksby5kaXNhYmxlTG9ncyYmKHIrPVwiJmRpc2FibGVMb2dzPTFcIiksby5lbmFibGVWaWV3U3RhdGVBbm5vdGF0aW9ucyYmKHIrPVwiJmVuYWJsZVZpZXdTdGF0ZUFubm90YXRpb25zPTFcIiksby5kaXNhYmxlRmxhdHRlbmVkQW5ub3RhdGlvbnMmJihyKz1cIiZkaXNhYmxlRmxhdHRlbmVkQW5ub3RhdGlvbnM9MVwiKSxvLmhpZ2hDb250cmFzdE1vZGUmJihyKz1cIiZoaWdoQ29udHJhc3RNb2RlPTFcIiksdm9pZCAwIT09by5zZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbiYmKHIrPVwiJnNlbGVjdEFubm90YXRpb25PbkNyZWF0aW9uPVwiLmNvbmNhdChvLnNlbGVjdEFubm90YXRpb25PbkNyZWF0aW9uPzE6MCkpLHZvaWQgMCE9PW8uYXV0b0ZvY3VzTm90ZU9uQW5ub3RhdGlvblNlbGVjdGlvbiYmKHIrPVwiJmF1dG9Gb2N1c05vdGVPbkFubm90YXRpb25TZWxlY3Rpb249XCIuY29uY2F0KG8uYXV0b0ZvY3VzTm90ZU9uQW5ub3RhdGlvblNlbGVjdGlvbj8xOjApKSxyKz1cIiZpZD1cIi5jb25jYXQodGhpcy5pZCksKHIrPVwiJmJhc2VQYXRoPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkpLmxlbmd0aD4wJiZcIiZcIj09PXJbMF0mJihyPVwiI1wiLmNvbmNhdChyLnNsaWNlKDEpKSkscis9XCImd2ViVmlld2VySlNWZXJzaW9uPVwiLmNvbmNhdCh0aGlzLnZlcnNpb24pfSxzZXRJbnN0YW5jZURhdGE6ZnVuY3Rpb24oZSl7cC5zZXQodGhpcy5lbGVtZW50LHtpZnJhbWU6ZSxsOnRoaXMub3B0aW9ucy5sfHx0aGlzLm9wdGlvbnMubGljZW5zZUtleSx3b3JrZXJUcmFuc3BvcnRQcm9taXNlOnRoaXMub3B0aW9ucy53b3JrZXJUcmFuc3BvcnRQcm9taXNlfSl9LF9jcmVhdGVIVE1MNTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLm9wdGlvbnMudWlQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTt0aGlzLnNldEluc3RhbmNlRGF0YShuKSxuLmlkPVwid2Vidmlld2VyLVwiLmNvbmNhdCh0aGlzLmlkKSxuLnNyYz10LG4udGl0bGU9XCJ3ZWJ2aWV3ZXJcIixuLmZyYW1lQm9yZGVyPTAsbi53aWR0aD1cIjEwMCVcIixuLmhlaWdodD1cIjEwMCVcIixuLnNldEF0dHJpYnV0ZShcImFsbG93ZnVsbHNjcmVlblwiLCEwKSxuLnNldEF0dHJpYnV0ZShcIndlYmtpdGFsbG93ZnVsbHNjcmVlblwiLCEwKSxuLnNldEF0dHJpYnV0ZShcIm1vemFsbG93ZnVsbHNjcmVlblwiLCEwKSx0aGlzLmlmcmFtZT1uLHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3ImJm4uc2V0QXR0cmlidXRlKFwiZGF0YS1iZ2NvbG9yXCIsdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvciksdGhpcy5vcHRpb25zLmFzc2V0UGF0aCYmbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFzc2V0cGF0aFwiLGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wdGlvbnMuYXNzZXRQYXRoKSksdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG4pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLChmdW5jdGlvbiB0KG4pe2lmKFwidmlld2VyTG9hZGVkXCI9PT1uLmRhdGEudHlwZSYmbi5kYXRhLmlkPT09ZS5pZCl0cnl7ZS5pbnN0YW5jZT1lLmlmcmFtZS5jb250ZW50V2luZG93Lmluc3RhbmNlfWNhdGNoKGUpe31maW5hbGx5e3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQpLGUuX3ZpZXdlckxvYWRlZChlLmlmcmFtZSl9fSkpfSxfY3JlYXRlSFRNTDVNb2JpbGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5vcHRpb25zLnVpUGF0aCt0aGlzLl9nZXRIVE1MNU9wdGlvbnNVUkwoKSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7dGhpcy5zZXRJbnN0YW5jZURhdGEobiksbi5pZD1cIndlYnZpZXdlci1cIi5jb25jYXQodGhpcy5pZCksbi5zcmM9dCxuLmZyYW1lYm9yZGVyPTAsdGhpcy5vcHRpb25zLmFzc2V0UGF0aCYmbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFzc2V0cGF0aFwiLGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wdGlvbnMuYXNzZXRQYXRoKSksbi5zdHlsZS53aWR0aD1cIjEwMCVcIixuLnN0eWxlLmhlaWdodD1cIjEwMCVcIix0aGlzLmlmcmFtZT1uLHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChuKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwoZnVuY3Rpb24gdChuKXtpZihcInZpZXdlckxvYWRlZFwiPT09bi5kYXRhLnR5cGUmJm4uZGF0YS5pZD09PWUuaWQpdHJ5e2UuaW5zdGFuY2U9ZS5pZnJhbWUuY29udGVudFdpbmRvdy5pbnN0YW5jZX1jYXRjaChlKXt9ZmluYWxseXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0KSxlLl92aWV3ZXJMb2FkZWQoZS5pZnJhbWUpfX0pKX0sZGlzcG9zZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtwLmRlbGV0ZShlLmVsZW1lbnQpLGguZGVsZXRlKGUuZWxlbWVudCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZS5tZXNzYWdlSGFuZGxlciksZS5pZnJhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixlLmxvYWRMaXN0ZW5lciksZS5pZnJhbWU9bnVsbCxjb25zb2xlLmNsZWFyKCksZS5pbnN0YW5jZS5Db3JlLmRvY3VtZW50Vmlld2VyLmNsb3NlRG9jdW1lbnQoKS50aGVuKChmdW5jdGlvbigpe3QoKX0pKX0pKX0sZ2V0SW5zdGFuY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbnN0YW5jZX0sc2V0Q29tcGxldGVJbnN0YW5jZTpmdW5jdGlvbihlKXt0aGlzLmNvbXBsZXRlSW5zdGFuY2U9ZX0sZ2V0Q29tcGxldGVJbnN0YW5jZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbXBsZXRlSW5zdGFuY2V9LF9jb3JyZWN0UmVsYXRpdmVQYXRoOmZ1bmN0aW9uKGUpe3ZhciB0PXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGkoZSx0KX0pKTppKGUsdCl9LF90ZXN0SFRNTDU6ZnVuY3Rpb24oKXt0cnl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyZXR1cm4gZSYmZS5nZXRDb250ZXh0KFwiMmRcIil9Y2F0Y2goZSl7cmV0dXJuITF9fSxfdGVzdFdlYkFzc2VtYmx5OmZ1bmN0aW9uKCl7cmV0dXJuISghd2luZG93LldlYkFzc2VtYmx5fHwhd2luZG93LldlYkFzc2VtYmx5LnZhbGlkYXRlKX0sX3Rlc3RDT1JTOmZ1bmN0aW9uKCl7cmV0dXJuXCJYTUxIdHRwUmVxdWVzdFwiaW4gd2luZG93JiZcIndpdGhDcmVkZW50aWFsc1wiaW4gbmV3IFhNTEh0dHBSZXF1ZXN0fSxpc0lFOmZ1bmN0aW9uKCl7dmFyIGU9bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLHQ9Lyhtc2llKSAoW1xcdy5dKykvLmV4ZWMoZSl8fC8odHJpZGVudCkoPzouKj8gcnY6KFtcXHcuXSspfCkvLmV4ZWMoZSk7cmV0dXJuIHQ/cGFyc2VJbnQodFsyXSwxMCk6dH0saXNNb2JpbGVEZXZpY2U6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc0lFKCkmJigwPT09dGhpcy5zY3JvbGxiYXJXaWR0aCgpJiZuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9Ub3VjaC9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1NpbGsvaSkpfSxzY3JvbGxiYXJXaWR0aDpmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6MTAwcHg7aGVpZ2h0OjEwMHB4O292ZXJmbG93OnNjcm9sbCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4XCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKTt2YXIgdD1lLm9mZnNldFdpZHRoLWUuY2xpZW50V2lkdGg7cmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZSksdH0saXNTYW1lT3JpZ2luOmZ1bmN0aW9uKGUpe3ZhciB0PXdpbmRvdy5sb2NhdGlvbixuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO24uaHJlZj1lLFwiXCI9PT1uLmhvc3QmJihuLmhyZWY9bi5ocmVmKTt2YXIgbz13aW5kb3cubG9jYXRpb24ucG9ydCxpPW4ucG9ydDtyZXR1cm5cImh0dHA6XCI9PT1uLnByb3RvY29sPyhpPWl8fFwiODBcIixvPW98fFwiODBcIik6XCJodHRwczpcIj09PW4ucHJvdG9jb2wmJihpPWl8fFwiNDQzXCIsbz1vfHxcIjQ0M1wiKSxuLmhvc3RuYW1lPT09dC5ob3N0bmFtZSYmbi5wcm90b2NvbD09PXQucHJvdG9jb2wmJmk9PT1vfX0sYy5XZWJWaWV3ZXIuT3B0aW9ucz17aW5pdGlhbERvYzp2b2lkIDAsYW5ub3RhdGlvbkFkbWluOnZvaWQgMCxpc0FkbWluVXNlcjp2b2lkIDAsYW5ub3RhdGlvblVzZXI6dm9pZCAwLGFzc2V0UGF0aDp2b2lkIDAsYXV0b0NyZWF0ZTohMCxhdXRvRm9jdXNOb3RlT25Bbm5vdGF0aW9uU2VsZWN0aW9uOiEwLGF6dXJlV29ya2Fyb3VuZDohMSxhZGRpdGlvbmFsVHJhbnNsYXRpb25zOnZvaWQgMCxlbmFibGVBenVyZVdvcmthcm91bmQ6ITEsZW5hYmxlT3B0aW1pemVkV29ya2VyczohMCxiYWNrZ3JvdW5kQ29sb3I6dm9pZCAwLGJhY2tlbmRUeXBlOnZvaWQgMCxjc3M6dm9pZCAwLGNvbmZpZzp2b2lkIDAsY3VzdG9tOnZvaWQgMCxkb2N1bWVudElkOnZvaWQgMCxkb2N1bWVudFR5cGU6dm9pZCAwLHByZWxvYWRXb3JrZXI6dm9pZCAwLGV4dGVuc2lvbjp2b2lkIDAsZW5hYmxlQW5ub3RhdGlvbnM6ITAsZmlsZW5hbWU6dm9pZCAwLGRpc2FibGVJMThuOiExLGRpc2FibGVkRWxlbWVudHM6dm9pZCAwLGRpc2FibGVXZWJzb2NrZXRzOiExLGVuYWJsZU9mZmxpbmVNb2RlOiExLGVuYWJsZVJlYWRPbmx5TW9kZTohMSxpc1JlYWRPbmx5OiExLGVuYWJsZVJlZGFjdGlvbjohMSxkaXNhYmxlVmlydHVhbERpc3BsYXlNb2RlOiExLGVuYWJsZU1lYXN1cmVtZW50OiExLGVuY3J5cHRpb246dm9pZCAwLGV4dGVybmFsUGF0aDp2b2lkIDAsaGlkZUFubm90YXRpb25QYW5lbDohMSxkaXNhYmxlVG9vbEdyb3VwUmVvcmRlcmluZzohMSx1aVBhdGg6XCIuL3VpL2luZGV4Lmh0bWxcIixsOnZvaWQgMCxsaWNlbnNlS2V5OnZvaWQgMCxtb2JpbGVSZWRpcmVjdDohMSxwYXRoOlwiXCIscGRmQmFja2VuZDp2b2lkIDAsd2Vidmlld2VyU2VydmVyVVJMOnZvaWQgMCxmYWxsYmFja1RvQ2xpZW50U2lkZTohMSxzaW5nbGVTZXJ2ZXJNb2RlOiExLGZ1bGxBUEk6ITEscHJlbG9hZFBERldvcmtlcjohMCxzZXJ2ZXJVcmw6dm9pZCAwLHNlcnZlclVybEhlYWRlcnM6dm9pZCAwLHNob3dMb2NhbEZpbGVQaWNrZXI6ITEsZW5hYmxlRmlsZVBpY2tlcjohMSxzaG93UGFnZUhpc3RvcnlCdXR0b25zOiEwLHNob3dUb29sYmFyQ29udHJvbDp2b2lkIDAsc3RhcnRPZmZsaW5lOiExLHN0cmVhbWluZzp2b2lkIDAsdHlwZTpcImh0bWw1XCIsdXNlRG93bmxvYWRlcjohMCx3b3JrZXJUcmFuc3BvcnRQcm9taXNlOnZvaWQgMCx4ZG9tYWluUHJveHlVcmw6dm9pZCAwLHVpOnZvaWQgMCxmb3JjZUNsaWVudFNpZGVJbml0OiExLGxvYWRBc1BERjohMSxhY2Nlc3NpYmxlTW9kZTp2b2lkIDAsZGlzYWJsZUxvZ3M6ITEsZW5hYmxlVmlld1N0YXRlQW5ub3RhdGlvbnM6ITEsaGlnaENvbnRyYXN0TW9kZTohMSxzZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbjohMSxub3Rlc0luTGVmdFBhbmVsOiExLGRvY3VtZW50WEZERlJldHJpZXZlcjp2b2lkIDAsZGlzYWJsZUZsYXR0ZW5lZEFubm90YXRpb25zOiExLGRpc2FibGVTdHJlYW1pbmc6ITF9O3ZhciB2PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuLG8pe2UubD1lLmx8fGUubGljZW5zZUtleSxlLmF6dXJlV29ya2Fyb3VuZD1lLmF6dXJlV29ya2Fyb3VuZHx8ZS5lbmFibGVBenVyZVdvcmthcm91bmQsZS5hbm5vdGF0aW9uQWRtaW49ZS5hbm5vdGF0aW9uQWRtaW58fGUuaXNBZG1pblVzZXIsZS5lbmFibGVSZWFkT25seU1vZGU9ZS5lbmFibGVSZWFkT25seU1vZGV8fGUuaXNSZWFkT25seSxlLnNob3dMb2NhbEZpbGVQaWNrZXI9ZS5zaG93TG9jYWxGaWxlUGlja2VyfHxlLmVuYWJsZUZpbGVQaWNrZXI7dC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwoZnVuY3Rpb24gcigpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIscik7dHJ5e3ZhciBjPXQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKS5jb250ZW50V2luZG93O2lmKHZvaWQgMD09PWMuVG9vbHMpdGhyb3cgbmV3IEVycm9yKFwiVmlld2VyIGlzbid0IGluc3RhbnRpYXRlZCBjb3JyZWN0bHkuIEl0IGNvdWxkIGJlIGNhdXNlZCBieSB0aGUgJ3BhdGgnIG9wdGlvbiBpbiB0aGUgV2ViVmlld2VyIGNvbnN0cnVjdG9yIG5vdCBiZWluZyBkZWZpbmVkIGNvcnJlY3RseS4gVGhlICdwYXRoJyBvcHRpb24gc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBIVE1MIGZpbGUgeW91J3JlIGxvYWRpbmcgdGhlIHNjcmlwdCBvbiBhbmQgdGhlIGxpYiBmb2xkZXIgbmVlZHMgdG8gYmUgcHVibGljbHkgYWNjZXNzaWJsZS5cIik7dmFyIGw9aS5nZXRJbnN0YW5jZSgpLHU9e2lmcmFtZVdpbmRvdzpjLGRpc3Bvc2U6aS5kaXNwb3NlLmJpbmQoaSl9LGY9ZCh7fSxsLGEocyh7fSxsLlVJX05BTUVTUEFDRV9LRVksYShhKHt9LGxbbC5VSV9OQU1FU1BBQ0VfS0VZXSksdSkpLHUpKTtpLnNldENvbXBsZXRlSW5zdGFuY2UoZik7dmFyIHA9UHJvbWlzZS5yZXNvbHZlKCk7aWYoZS5kb2N1bWVudFhGREZSZXRyaWV2ZXImJihwPWZbbC5DT1JFX05BTUVTUEFDRV9LRVldLmRvY3VtZW50Vmlld2VyLnNldERvY3VtZW50WEZERlJldHJpZXZlcihlLmRvY3VtZW50WEZERlJldHJpZXZlcikpLGUuYWRkaXRpb25hbFRyYW5zbGF0aW9ucyl7dmFyIGg9ZS5hZGRpdGlvbmFsVHJhbnNsYXRpb25zO2ZbbC5VSV9OQU1FU1BBQ0VfS0VZXS5zZXRUcmFuc2xhdGlvbnMoaC5sYW5ndWFnZSxoLnRyYW5zbGF0aW9ucyl9cC50aGVuKChmdW5jdGlvbigpe24oZil9KSl9Y2F0Y2godCl7aWYoXCJjb25maWdcImluIGUmJlwiXCIhPT1lLmNvbmZpZylyZXR1cm4gbigpO28oXCJWaWV3ZXIgaXMgb24gYSBkaWZmZXJlbnQgZG9tYWluLCB0aGUgcHJvbWlzZSBmcm9tIFdlYlZpZXdlciBmdW5jdGlvbiBpcyByZWplY3RlZCBhbmQgQVBJIGZ1bmN0aW9ucyB3aWxsIG5vdCB3b3JrIGJlY2F1c2Ugb2YgY3Jvc3MgZG9tYWluIHBlcm1pc3Npb25zLiBTZWUgaHR0cHM6Ly93d3cucGRmdHJvbi5jb20va2JfY3Jvc3Nfb3JpZ2luIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKX19KSk7dmFyIGk9bmV3IGMuV2ViVmlld2VyKGUsdCl9KSl9LGI9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXUocCksbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO2lmKG8uaWZyYW1lPT09ZSlyZXR1cm4gb31yZXR1cm4gbnVsbH07di5sPWZ1bmN0aW9uKGUpe3ZhciB0PWIoZSk7cmV0dXJuIHQmJnQubH0sdi53b3JrZXJUcmFuc3BvcnRQcm9taXNlPWZ1bmN0aW9uKGUpe3ZhciB0PWIoZSk7cmV0dXJuIHQmJnQud29ya2VyVHJhbnNwb3J0UHJvbWlzZX0sdi5Xb3JrZXJUeXBlcz17QUxMOlwiYWxsXCIsT0ZGSUNFOlwib2ZmaWNlXCIsTEVHQUNZX09GRklDRTpcImxlZ2FjeU9mZmljZVwiLFBERjpcInBkZlwiLENPTlRFTlRfRURJVDpcImNvbnRlbnRFZGl0XCJ9LHYuQmFja2VuZFR5cGVzPW87dmFyIHc9ZnVuY3Rpb24oZSl7dmFyIHQ9dShwKTtpZighdC5sZW5ndGh8fCF0LmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5zdGFuY2V9KSkubGVuZ3RoKXJldHVybiBjb25zb2xlLndhcm4oXCJXZWJWaWV3ZXIuZ2V0SW5zdGFuY2UoKSB3YXMgY2FsbGVkIGJlZm9yZSBhbnkgaW5zdGFuY2VzIHdlcmUgYXZhaWxhYmxlXCIpLG51bGw7aWYodC5sZW5ndGg+MSYmIWUpdGhyb3cgbmV3IEVycm9yKFwiTW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBvZiBXZWJWaWV3ZXIgd2FzIGZvdW5kLCBhbmQgbm8gZWxlbWVudCB3YXMgcGFzc2VkIGludG8gZ2V0SW5zdGFuY2UoKS4gUGxlYXNlIHNwZWNpZnkgd2hpY2ggaW5zdGFuY2UgeW91IHdhbnQgdG8gZ2V0LlwiKTtyZXR1cm4gZT8ocC5nZXQoZSl8fHt9KS5pbnN0YW5jZToodFswXXx8e30pLmluc3RhbmNlfTt2LmdldEluc3RhbmNlPXcsd2luZG93LldlYlZpZXdlcj12O3QuZGVmYXVsdD12fV0pfSkpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubW9kYWwtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RURGMztcclxuICAgIGNvbG9yOiAjMEQxMTE3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICBhbmltYXRpb246IHpvb21JbiBmb3J3YXJkcyAyNTBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLm1vZGFsIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIH1cclxufVxyXG5cclxuLm1vZGFsIGgxLFxyXG4ubW9kYWwgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwRDExMTc7XHJcbn1cclxuXHJcbi5tb2RhbD5kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsPi5tb2RhbC1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsPi5tb2RhbC1idXR0b25zLWNvbnRhaW5lcj5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxMTE3O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcclxuICAgIC5tb2RhbD4ubW9kYWwtYnV0dG9ucy1jb250YWluZXI+YnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHQgIzBEMTExNztcclxuXHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG5cclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbD5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBmYWRlSWQgMjUwbXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUlkIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21PdXQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc1cHgpIHtcclxuXHJcbiAgICAubW9kYWw+ZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPOztJQUVQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHlCQUF5Qjs7SUFFekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCOztJQUV6QixnQkFBZ0I7O0lBRWhCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1Asb0NBQW9DOztJQUVwQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLGVBQWU7UUFDZixTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxMDAwMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkVERjM7XFxyXFxuICAgIGNvbG9yOiAjMEQxMTE3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgICBhbmltYXRpb246IHpvb21JbiBmb3J3YXJkcyAyNTBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcclxcbiAgICAubW9kYWwge1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9kYWwgaDIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaDEsXFxyXFxuLm1vZGFsIGgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzBEMTExNztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPmRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPi5tb2RhbC1idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbD4ubW9kYWwtYnV0dG9ucy1jb250YWluZXI+YnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTExNztcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgIC5tb2RhbD4ubW9kYWwtYnV0dG9ucy1jb250YWluZXI+YnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI2MkQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHQgIzBEMTExNztcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG5cXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA5NTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUlkIDI1MG1zIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJZCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbUluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB6b29tT3V0IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc1cHgpIHtcXHJcXG5cXHJcXG4gICAgLm1vZGFsPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVDb21wdXRlZFN0eWxlVmFsdWUoc3RyaW5nKSB7XG4gIC8vIFwiMjUwcHhcIiAtLT4gMjUwXG4gIHJldHVybiArc3RyaW5nLnJlcGxhY2UoL3B4LywgJycpO1xufVxuXG5mdW5jdGlvbiBmaXhEUFIoY2FudmFzKSB7XG4gIHZhciBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgdmFyIGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpO1xuICB2YXIgd2lkdGggPSBub3JtYWxpemVDb21wdXRlZFN0eWxlVmFsdWUoY29tcHV0ZWRTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSk7XG4gIHZhciBoZWlnaHQgPSBub3JtYWxpemVDb21wdXRlZFN0eWxlVmFsdWUoY29tcHV0ZWRTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsICh3aWR0aCAqIGRwcikudG9TdHJpbmcoKSk7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIChoZWlnaHQgKiBkcHIpLnRvU3RyaW5nKCkpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICB2YXIgZnJhY3Rpb25EaWdpdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG4gIHZhciByYW5kb21OdW1iZXIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbU51bWJlciAqIE1hdGgucG93KDEwLCBmcmFjdGlvbkRpZ2l0cykpIC8gTWF0aC5wb3coMTAsIGZyYWN0aW9uRGlnaXRzKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21BcnJheUVsZW1lbnQoYXJyKSB7XG4gIHJldHVybiBhcnJbZ2VuZXJhdGVSYW5kb21OdW1iZXIoMCwgYXJyLmxlbmd0aCldO1xufVxuXG52YXIgRlJFRV9GQUxMSU5HX09CSkVDVF9BQ0NFTEVSQVRJT04gPSAwLjAwMTI1O1xudmFyIE1JTl9EUkFHX0ZPUkNFX0NPRUZGSUNJRU5UID0gMC4wMDA1O1xudmFyIE1BWF9EUkFHX0ZPUkNFX0NPRUZGSUNJRU5UID0gMC4wMDA5O1xudmFyIFJPVEFUSU9OX1NMT1dET1dOX0FDQ0VMRVJBVElPTiA9IDAuMDAwMDE7XG52YXIgSU5JVElBTF9TSEFQRV9SQURJVVMgPSA2O1xudmFyIElOSVRJQUxfRU1PSklfU0laRSA9IDgwO1xudmFyIE1JTl9JTklUSUFMX0NPTkZFVFRJX1NQRUVEID0gMC45O1xudmFyIE1BWF9JTklUSUFMX0NPTkZFVFRJX1NQRUVEID0gMS43O1xudmFyIE1JTl9GSU5BTF9YX0NPTkZFVFRJX1NQRUVEID0gMC4yO1xudmFyIE1BWF9GSU5BTF9YX0NPTkZFVFRJX1NQRUVEID0gMC42O1xudmFyIE1JTl9JTklUSUFMX1JPVEFUSU9OX1NQRUVEID0gMC4wMztcbnZhciBNQVhfSU5JVElBTF9ST1RBVElPTl9TUEVFRCA9IDAuMDc7XG52YXIgTUlOX0NPTkZFVFRJX0FOR0xFID0gMTU7XG52YXIgTUFYX0NPTkZFVFRJX0FOR0xFID0gODI7XG52YXIgTUFYX0NPTkZFVFRJX1BPU0lUSU9OX1NISUZUID0gMTUwO1xudmFyIFNIQVBFX1ZJU0lCSUxJVFlfVFJFU0hPTEQgPSAxMDA7XG52YXIgREVGQVVMVF9DT05GRVRUSV9OVU1CRVIgPSAyNTA7XG52YXIgREVGQVVMVF9FTU9KSVNfTlVNQkVSID0gNDA7XG52YXIgREVGQVVMVF9DT05GRVRUSV9DT0xPUlMgPSBbJyNmY2Y0MDMnLCAnIzYyZmMwMycsICcjZjRmYzAzJywgJyMwM2U3ZmMnLCAnIzAzZmNhNScsICcjYTUwM2ZjJywgJyNmYzAzYWQnLCAnI2ZjMDNjMiddO1xuXG5mdW5jdGlvbiBnZXRXaW5kb3dXaWR0aENvZWZmaWNpZW50KGNhbnZhc1dpZHRoKSB7XG4gIHZhciBIRF9TQ1JFRU5fV0lEVEggPSAxOTIwO1xuICByZXR1cm4gTWF0aC5sb2coY2FudmFzV2lkdGgpIC8gTWF0aC5sb2coSERfU0NSRUVOX1dJRFRIKTtcbn1cblxudmFyIENvbmZldHRpU2hhcGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb25mZXR0aVNoYXBlKGFyZ3MpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uZmV0dGlTaGFwZSk7XG5cbiAgICB2YXIgaW5pdGlhbFBvc2l0aW9uID0gYXJncy5pbml0aWFsUG9zaXRpb24sXG4gICAgICAgIGRpcmVjdGlvbiA9IGFyZ3MuZGlyZWN0aW9uLFxuICAgICAgICBjb25mZXR0aVJhZGl1cyA9IGFyZ3MuY29uZmV0dGlSYWRpdXMsXG4gICAgICAgIGNvbmZldHRpQ29sb3JzID0gYXJncy5jb25mZXR0aUNvbG9ycyxcbiAgICAgICAgZW1vamlzID0gYXJncy5lbW9qaXMsXG4gICAgICAgIGVtb2ppU2l6ZSA9IGFyZ3MuZW1vamlTaXplLFxuICAgICAgICBjYW52YXNXaWR0aCA9IGFyZ3MuY2FudmFzV2lkdGg7XG4gICAgdmFyIHJhbmRvbUNvbmZldHRpU3BlZWQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihNSU5fSU5JVElBTF9DT05GRVRUSV9TUEVFRCwgTUFYX0lOSVRJQUxfQ09ORkVUVElfU1BFRUQsIDMpO1xuICAgIHZhciBpbml0aWFsU3BlZWQgPSByYW5kb21Db25mZXR0aVNwZWVkICogZ2V0V2luZG93V2lkdGhDb2VmZmljaWVudChjYW52YXNXaWR0aCk7XG4gICAgdGhpcy5jb25mZXR0aVNwZWVkID0ge1xuICAgICAgeDogaW5pdGlhbFNwZWVkLFxuICAgICAgeTogaW5pdGlhbFNwZWVkXG4gICAgfTtcbiAgICB0aGlzLmZpbmFsQ29uZmV0dGlTcGVlZFggPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihNSU5fRklOQUxfWF9DT05GRVRUSV9TUEVFRCwgTUFYX0ZJTkFMX1hfQ09ORkVUVElfU1BFRUQsIDMpO1xuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IGVtb2ppcy5sZW5ndGggPyAwLjAxIDogZ2VuZXJhdGVSYW5kb21OdW1iZXIoTUlOX0lOSVRJQUxfUk9UQVRJT05fU1BFRUQsIE1BWF9JTklUSUFMX1JPVEFUSU9OX1NQRUVELCAzKSAqIGdldFdpbmRvd1dpZHRoQ29lZmZpY2llbnQoY2FudmFzV2lkdGgpO1xuICAgIHRoaXMuZHJhZ0ZvcmNlQ29lZmZpY2llbnQgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihNSU5fRFJBR19GT1JDRV9DT0VGRklDSUVOVCwgTUFYX0RSQUdfRk9SQ0VfQ09FRkZJQ0lFTlQsIDYpO1xuICAgIHRoaXMucmFkaXVzID0ge1xuICAgICAgeDogY29uZmV0dGlSYWRpdXMsXG4gICAgICB5OiBjb25mZXR0aVJhZGl1c1xuICAgIH07XG4gICAgdGhpcy5pbml0aWFsUmFkaXVzID0gY29uZmV0dGlSYWRpdXM7XG4gICAgdGhpcy5yb3RhdGlvbkFuZ2xlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyBnZW5lcmF0ZVJhbmRvbU51bWJlcigwLCAwLjIsIDMpIDogZ2VuZXJhdGVSYW5kb21OdW1iZXIoLTAuMiwgMCwgMyk7XG4gICAgdGhpcy5lbW9qaVNpemUgPSBlbW9qaVNpemU7XG4gICAgdGhpcy5lbW9qaVJvdGF0aW9uQW5nbGUgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigwLCAyICogTWF0aC5QSSk7XG4gICAgdGhpcy5yYWRpdXNZVXBkYXRlRGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgIHZhciBhbmdsZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gZ2VuZXJhdGVSYW5kb21OdW1iZXIoTUFYX0NPTkZFVFRJX0FOR0xFLCBNSU5fQ09ORkVUVElfQU5HTEUpICogTWF0aC5QSSAvIDE4MCA6IGdlbmVyYXRlUmFuZG9tTnVtYmVyKC1NSU5fQ09ORkVUVElfQU5HTEUsIC1NQVhfQ09ORkVUVElfQU5HTEUpICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLmFic0NvcyA9IE1hdGguYWJzKE1hdGguY29zKGFuZ2xlKSk7XG4gICAgdGhpcy5hYnNTaW4gPSBNYXRoLmFicyhNYXRoLnNpbihhbmdsZSkpO1xuICAgIHZhciBwb3NpdGlvblNoaWZ0ID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoLU1BWF9DT05GRVRUSV9QT1NJVElPTl9TSElGVCwgMCk7XG4gICAgdmFyIHNoaWZ0ZWRJbml0aWFsUG9zaXRpb24gPSB7XG4gICAgICB4OiBpbml0aWFsUG9zaXRpb24ueCArIChkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IC1wb3NpdGlvblNoaWZ0IDogcG9zaXRpb25TaGlmdCkgKiB0aGlzLmFic0NvcyxcbiAgICAgIHk6IGluaXRpYWxQb3NpdGlvbi55IC0gcG9zaXRpb25TaGlmdCAqIHRoaXMuYWJzU2luXG4gICAgfTtcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHNoaWZ0ZWRJbml0aWFsUG9zaXRpb24pO1xuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgc2hpZnRlZEluaXRpYWxQb3NpdGlvbik7XG4gICAgdGhpcy5jb2xvciA9IGVtb2ppcy5sZW5ndGggPyBudWxsIDogZ2VuZXJhdGVSYW5kb21BcnJheUVsZW1lbnQoY29uZmV0dGlDb2xvcnMpO1xuICAgIHRoaXMuZW1vamkgPSBlbW9qaXMubGVuZ3RoID8gZ2VuZXJhdGVSYW5kb21BcnJheUVsZW1lbnQoZW1vamlzKSA6IG51bGw7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb25mZXR0aVNoYXBlLCBbe1xuICAgIGtleTogXCJkcmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXcoY2FudmFzQ29udGV4dCkge1xuICAgICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuY3VycmVudFBvc2l0aW9uLFxuICAgICAgICAgIHJhZGl1cyA9IHRoaXMucmFkaXVzLFxuICAgICAgICAgIGNvbG9yID0gdGhpcy5jb2xvcixcbiAgICAgICAgICBlbW9qaSA9IHRoaXMuZW1vamksXG4gICAgICAgICAgcm90YXRpb25BbmdsZSA9IHRoaXMucm90YXRpb25BbmdsZSxcbiAgICAgICAgICBlbW9qaVJvdGF0aW9uQW5nbGUgPSB0aGlzLmVtb2ppUm90YXRpb25BbmdsZSxcbiAgICAgICAgICBlbW9qaVNpemUgPSB0aGlzLmVtb2ppU2l6ZTtcbiAgICAgIHZhciBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGNhbnZhc0NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNhbnZhc0NvbnRleHQuZWxsaXBzZShjdXJyZW50UG9zaXRpb24ueCAqIGRwciwgY3VycmVudFBvc2l0aW9uLnkgKiBkcHIsIHJhZGl1cy54ICogZHByLCByYWRpdXMueSAqIGRwciwgcm90YXRpb25BbmdsZSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjYW52YXNDb250ZXh0LmZpbGwoKTtcbiAgICAgIH0gZWxzZSBpZiAoZW1vamkpIHtcbiAgICAgICAgY2FudmFzQ29udGV4dC5mb250ID0gXCJcIi5jb25jYXQoZW1vamlTaXplLCBcInB4IHNlcmlmXCIpO1xuICAgICAgICBjYW52YXNDb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY2FudmFzQ29udGV4dC50cmFuc2xhdGUoZHByICogY3VycmVudFBvc2l0aW9uLngsIGRwciAqIGN1cnJlbnRQb3NpdGlvbi55KTtcbiAgICAgICAgY2FudmFzQ29udGV4dC5yb3RhdGUoZW1vamlSb3RhdGlvbkFuZ2xlKTtcbiAgICAgICAgY2FudmFzQ29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgY2FudmFzQ29udGV4dC5maWxsVGV4dChlbW9qaSwgMCwgMCk7XG4gICAgICAgIGNhbnZhc0NvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihpdGVyYXRpb25UaW1lRGVsdGEsIGN1cnJlbnRUaW1lKSB7XG4gICAgICB2YXIgY29uZmV0dGlTcGVlZCA9IHRoaXMuY29uZmV0dGlTcGVlZCxcbiAgICAgICAgICBkcmFnRm9yY2VDb2VmZmljaWVudCA9IHRoaXMuZHJhZ0ZvcmNlQ29lZmZpY2llbnQsXG4gICAgICAgICAgZmluYWxDb25mZXR0aVNwZWVkWCA9IHRoaXMuZmluYWxDb25mZXR0aVNwZWVkWCxcbiAgICAgICAgICByYWRpdXNZVXBkYXRlRGlyZWN0aW9uID0gdGhpcy5yYWRpdXNZVXBkYXRlRGlyZWN0aW9uLFxuICAgICAgICAgIHJvdGF0aW9uU3BlZWQgPSB0aGlzLnJvdGF0aW9uU3BlZWQsXG4gICAgICAgICAgY3JlYXRlZEF0ID0gdGhpcy5jcmVhdGVkQXQsXG4gICAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICB2YXIgdGltZURlbHRhU2luY2VDcmVhdGlvbiA9IGN1cnJlbnRUaW1lIC0gY3JlYXRlZEF0O1xuICAgICAgaWYgKGNvbmZldHRpU3BlZWQueCA+IGZpbmFsQ29uZmV0dGlTcGVlZFgpIHRoaXMuY29uZmV0dGlTcGVlZC54IC09IGRyYWdGb3JjZUNvZWZmaWNpZW50ICogaXRlcmF0aW9uVGltZURlbHRhO1xuICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24ueCArPSBjb25mZXR0aVNwZWVkLnggKiAoZGlyZWN0aW9uID09PSAnbGVmdCcgPyAtdGhpcy5hYnNDb3MgOiB0aGlzLmFic0NvcykgKiBpdGVyYXRpb25UaW1lRGVsdGE7XG4gICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbi55ID0gdGhpcy5pbml0aWFsUG9zaXRpb24ueSAtIGNvbmZldHRpU3BlZWQueSAqIHRoaXMuYWJzU2luICogdGltZURlbHRhU2luY2VDcmVhdGlvbiArIEZSRUVfRkFMTElOR19PQkpFQ1RfQUNDRUxFUkFUSU9OICogTWF0aC5wb3codGltZURlbHRhU2luY2VDcmVhdGlvbiwgMikgLyAyO1xuICAgICAgdGhpcy5yb3RhdGlvblNwZWVkIC09IHRoaXMuZW1vamkgPyAwLjAwMDEgOiBST1RBVElPTl9TTE9XRE9XTl9BQ0NFTEVSQVRJT04gKiBpdGVyYXRpb25UaW1lRGVsdGE7XG4gICAgICBpZiAodGhpcy5yb3RhdGlvblNwZWVkIDwgMCkgdGhpcy5yb3RhdGlvblNwZWVkID0gMDsgLy8gbm8gbmVlZCB0byB1cGRhdGUgcm90YXRpb24gcmFkaXVzIGZvciBlbW9qaVxuXG4gICAgICBpZiAodGhpcy5lbW9qaSkge1xuICAgICAgICB0aGlzLmVtb2ppUm90YXRpb25BbmdsZSArPSB0aGlzLnJvdGF0aW9uU3BlZWQgKiBpdGVyYXRpb25UaW1lRGVsdGEgJSAoMiAqIE1hdGguUEkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChyYWRpdXNZVXBkYXRlRGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMueSAtPSBpdGVyYXRpb25UaW1lRGVsdGEgKiByb3RhdGlvblNwZWVkO1xuXG4gICAgICAgIGlmICh0aGlzLnJhZGl1cy55IDw9IDApIHtcbiAgICAgICAgICB0aGlzLnJhZGl1cy55ID0gMDtcbiAgICAgICAgICB0aGlzLnJhZGl1c1lVcGRhdGVEaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJhZGl1cy55ICs9IGl0ZXJhdGlvblRpbWVEZWx0YSAqIHJvdGF0aW9uU3BlZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucmFkaXVzLnkgPj0gdGhpcy5pbml0aWFsUmFkaXVzKSB7XG4gICAgICAgICAgdGhpcy5yYWRpdXMueSA9IHRoaXMuaW5pdGlhbFJhZGl1cztcbiAgICAgICAgICB0aGlzLnJhZGl1c1lVcGRhdGVEaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SXNWaXNpYmxlT25DYW52YXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SXNWaXNpYmxlT25DYW52YXMoY2FudmFzSGVpZ2h0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50UG9zaXRpb24ueSA8IGNhbnZhc0hlaWdodCArIFNIQVBFX1ZJU0lCSUxJVFlfVFJFU0hPTEQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbmZldHRpU2hhcGU7XG59KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhcygpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICBjYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gIGNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG4gIGNhbnZhcy5zdHlsZS5sZWZ0ID0gJzAnO1xuICBjYW52YXMuc3R5bGUuekluZGV4ID0gJzEwMDAnO1xuICBjYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICByZXR1cm4gY2FudmFzO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVDb25mZXR0aUNvbmZpZyhjb25mZXR0aUNvbmZpZykge1xuICB2YXIgX2NvbmZldHRpQ29uZmlnJGNvbmZlID0gY29uZmV0dGlDb25maWcuY29uZmV0dGlSYWRpdXMsXG4gICAgICBjb25mZXR0aVJhZGl1cyA9IF9jb25mZXR0aUNvbmZpZyRjb25mZSA9PT0gdm9pZCAwID8gSU5JVElBTF9TSEFQRV9SQURJVVMgOiBfY29uZmV0dGlDb25maWckY29uZmUsXG4gICAgICBfY29uZmV0dGlDb25maWckY29uZmUyID0gY29uZmV0dGlDb25maWcuY29uZmV0dGlOdW1iZXIsXG4gICAgICBjb25mZXR0aU51bWJlciA9IF9jb25mZXR0aUNvbmZpZyRjb25mZTIgPT09IHZvaWQgMCA/IGNvbmZldHRpQ29uZmlnLmNvbmZldHRpZXNOdW1iZXIgfHwgKGNvbmZldHRpQ29uZmlnLmVtb2ppcyA/IERFRkFVTFRfRU1PSklTX05VTUJFUiA6IERFRkFVTFRfQ09ORkVUVElfTlVNQkVSKSA6IF9jb25mZXR0aUNvbmZpZyRjb25mZTIsXG4gICAgICBfY29uZmV0dGlDb25maWckY29uZmUzID0gY29uZmV0dGlDb25maWcuY29uZmV0dGlDb2xvcnMsXG4gICAgICBjb25mZXR0aUNvbG9ycyA9IF9jb25mZXR0aUNvbmZpZyRjb25mZTMgPT09IHZvaWQgMCA/IERFRkFVTFRfQ09ORkVUVElfQ09MT1JTIDogX2NvbmZldHRpQ29uZmlnJGNvbmZlMyxcbiAgICAgIF9jb25mZXR0aUNvbmZpZyRlbW9qaSA9IGNvbmZldHRpQ29uZmlnLmVtb2ppcyxcbiAgICAgIGVtb2ppcyA9IF9jb25mZXR0aUNvbmZpZyRlbW9qaSA9PT0gdm9pZCAwID8gY29uZmV0dGlDb25maWcuZW1vamllcyB8fCBbXSA6IF9jb25mZXR0aUNvbmZpZyRlbW9qaSxcbiAgICAgIF9jb25mZXR0aUNvbmZpZyRlbW9qaTIgPSBjb25mZXR0aUNvbmZpZy5lbW9qaVNpemUsXG4gICAgICBlbW9qaVNpemUgPSBfY29uZmV0dGlDb25maWckZW1vamkyID09PSB2b2lkIDAgPyBJTklUSUFMX0VNT0pJX1NJWkUgOiBfY29uZmV0dGlDb25maWckZW1vamkyOyAvLyBkZXByZWNhdGUgd3JvbmcgcGx1cmFsIGZvcm1zLCB1c2VkIGluIGVhcmx5IHJlbGVhc2VzXG5cbiAgaWYgKGNvbmZldHRpQ29uZmlnLmVtb2ppZXMpIGNvbnNvbGUuZXJyb3IoXCJlbW9qaWVzIGFyZ3VtZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgZW1vamlzIGluc3RlYWRcIik7XG4gIGlmIChjb25mZXR0aUNvbmZpZy5jb25mZXR0aWVzTnVtYmVyKSBjb25zb2xlLmVycm9yKFwiY29uZmV0dGllc051bWJlciBhcmd1bWVudCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGNvbmZldHRpTnVtYmVyIGluc3RlYWRcIik7XG4gIHJldHVybiB7XG4gICAgY29uZmV0dGlSYWRpdXM6IGNvbmZldHRpUmFkaXVzLFxuICAgIGNvbmZldHRpTnVtYmVyOiBjb25mZXR0aU51bWJlcixcbiAgICBjb25mZXR0aUNvbG9yczogY29uZmV0dGlDb2xvcnMsXG4gICAgZW1vamlzOiBlbW9qaXMsXG4gICAgZW1vamlTaXplOiBlbW9qaVNpemVcbiAgfTtcbn1cblxudmFyIENvbmZldHRpQmF0Y2ggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb25mZXR0aUJhdGNoKGNhbnZhc0NvbnRleHQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbmZldHRpQmF0Y2gpO1xuXG4gICAgdGhpcy5jYW52YXNDb250ZXh0ID0gY2FudmFzQ29udGV4dDtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChjb21wbGV0aW9uQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlUHJvbWlzZSA9IGNvbXBsZXRpb25DYWxsYmFjaztcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb25mZXR0aUJhdGNoLCBbe1xuICAgIGtleTogXCJnZXRCYXRjaENvbXBsZXRlUHJvbWlzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCYXRjaENvbXBsZXRlUHJvbWlzZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFNoYXBlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTaGFwZXMoKSB7XG4gICAgICB2YXIgX3RoaXMkc2hhcGVzO1xuXG4gICAgICAoX3RoaXMkc2hhcGVzID0gdGhpcy5zaGFwZXMpLnB1c2guYXBwbHkoX3RoaXMkc2hhcGVzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wbGV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIHZhciBfYTtcblxuICAgICAgaWYgKHRoaXMuc2hhcGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIChfYSA9IHRoaXMucmVzb2x2ZVByb21pc2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByb2Nlc3NTaGFwZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvY2Vzc1NoYXBlcyh0aW1lLCBjYW52YXNIZWlnaHQsIGNsZWFudXBJbnZpc2libGVTaGFwZXMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdGltZURlbHRhID0gdGltZS50aW1lRGVsdGEsXG4gICAgICAgICAgY3VycmVudFRpbWUgPSB0aW1lLmN1cnJlbnRUaW1lO1xuICAgICAgdGhpcy5zaGFwZXMgPSB0aGlzLnNoYXBlcy5maWx0ZXIoZnVuY3Rpb24gKHNoYXBlKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgc2hhcGVzIGluIHRoaXMgYmF0Y2hcbiAgICAgICAgc2hhcGUudXBkYXRlUG9zaXRpb24odGltZURlbHRhLCBjdXJyZW50VGltZSk7XG4gICAgICAgIHNoYXBlLmRyYXcoX3RoaXMyLmNhbnZhc0NvbnRleHQpOyAvLyBPbmx5IGNsZWFudXAgdGhlIHNoYXBlcyBpZiB3ZSdyZSBiZWluZyBhc2tlZCB0b1xuXG4gICAgICAgIGlmICghY2xlYW51cEludmlzaWJsZVNoYXBlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNoYXBlLmdldElzVmlzaWJsZU9uQ2FudmFzKGNhbnZhc0hlaWdodCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29uZmV0dGlCYXRjaDtcbn0oKTtcblxudmFyIEpTQ29uZmV0dGkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBKU0NvbmZldHRpKCkge1xuICAgIHZhciBqc0NvbmZldHRpQ29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBKU0NvbmZldHRpKTtcblxuICAgIHRoaXMuYWN0aXZlQ29uZmV0dGlCYXRjaGVzID0gW107XG4gICAgdGhpcy5jYW52YXMgPSBqc0NvbmZldHRpQ29uZmlnLmNhbnZhcyB8fCBjcmVhdGVDYW52YXMoKTtcbiAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMuaXRlcmF0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEpTQ29uZmV0dGksIFt7XG4gICAga2V5OiBcImxvb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICBmaXhEUFIodGhpcy5jYW52YXMpO1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZURlbHRhID0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RVcGRhdGVkO1xuICAgICAgdmFyIGNhbnZhc0hlaWdodCA9IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcbiAgICAgIHZhciBjbGVhbnVwSW52aXNpYmxlU2hhcGVzID0gdGhpcy5pdGVyYXRpb25JbmRleCAlIDEwID09PSAwO1xuICAgICAgdGhpcy5hY3RpdmVDb25mZXR0aUJhdGNoZXMgPSB0aGlzLmFjdGl2ZUNvbmZldHRpQmF0Y2hlcy5maWx0ZXIoZnVuY3Rpb24gKGJhdGNoKSB7XG4gICAgICAgIGJhdGNoLnByb2Nlc3NTaGFwZXMoe1xuICAgICAgICAgIHRpbWVEZWx0YTogdGltZURlbHRhLFxuICAgICAgICAgIGN1cnJlbnRUaW1lOiBjdXJyZW50VGltZVxuICAgICAgICB9LCBjYW52YXNIZWlnaHQsIGNsZWFudXBJbnZpc2libGVTaGFwZXMpOyAvLyBEbyBub3QgcmVtb3ZlIGludmlzaWJsZSBzaGFwZXMgb24gZXZlcnkgaXRlcmF0aW9uXG5cbiAgICAgICAgaWYgKCFjbGVhbnVwSW52aXNpYmxlU2hhcGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIWJhdGNoLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXRlcmF0aW9uSW5kZXgrKztcbiAgICAgIHRoaXMucXVldWVBbmltYXRpb25GcmFtZUlmTmVlZGVkKGN1cnJlbnRUaW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicXVldWVBbmltYXRpb25GcmFtZUlmTmVlZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHF1ZXVlQW5pbWF0aW9uRnJhbWVJZk5lZWRlZChjdXJyZW50VGltZSkge1xuICAgICAgaWYgKHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lUmVxdWVzdGVkKSB7XG4gICAgICAgIC8vIFdlIGFscmVhZHkgaGF2ZSBhIHBlbmRlZCBhbmltYXRpb24gZnJhbWUsIHNvIHRoZXJlIGlzIG5vIG1vcmUgd29ya1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZUNvbmZldHRpQmF0Y2hlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgIC8vIE5vIHNoYXBlcyB0byBhbmltYXRlLCBzbyBkb24ndCBxdWV1ZSBhbm90aGVyIGZyYW1lXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVSZXF1ZXN0ZWQgPSB0cnVlOyAvLyBDYXB0dXJlIHRoZSBsYXN0IHVwZGF0ZWQgdGltZSBmb3IgYW5pbWF0aW9uXG5cbiAgICAgIHRoaXMubGFzdFVwZGF0ZWQgPSBjdXJyZW50VGltZSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRDb25mZXR0aVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDb25mZXR0aSgpIHtcbiAgICAgIHZhciBjb25mZXR0aUNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIHZhciBfbm9ybWFsaXplQ29uZmV0dGlDb24gPSBub3JtYWxpemVDb25mZXR0aUNvbmZpZyhjb25mZXR0aUNvbmZpZyksXG4gICAgICAgICAgY29uZmV0dGlSYWRpdXMgPSBfbm9ybWFsaXplQ29uZmV0dGlDb24uY29uZmV0dGlSYWRpdXMsXG4gICAgICAgICAgY29uZmV0dGlOdW1iZXIgPSBfbm9ybWFsaXplQ29uZmV0dGlDb24uY29uZmV0dGlOdW1iZXIsXG4gICAgICAgICAgY29uZmV0dGlDb2xvcnMgPSBfbm9ybWFsaXplQ29uZmV0dGlDb24uY29uZmV0dGlDb2xvcnMsXG4gICAgICAgICAgZW1vamlzID0gX25vcm1hbGl6ZUNvbmZldHRpQ29uLmVtb2ppcyxcbiAgICAgICAgICBlbW9qaVNpemUgPSBfbm9ybWFsaXplQ29uZmV0dGlDb24uZW1vamlTaXplOyAvLyBVc2UgdGhlIGJvdW5kaW5nIHJlY3QgcmF0aGVyIHRhaG4gdGhlIGNhbnZhcyB3aWR0aCAvIGhlaWdodCwgYmVjYXVzZVxuICAgICAgLy8gLndpZHRoIC8gLmhlaWdodCBhcmUgdW5zZXQgdW50aWwgYSBsYXlvdXQgcGFzcyBoYXMgYmVlbiBjb21wbGV0ZWQuIFVwb25cbiAgICAgIC8vIGNvbmZldHRpIGJlaW5nIGltbWVkaWF0ZWx5IHF1ZXVlZCBvbiBhIHBhZ2UgbG9hZCwgdGhpcyBoYXNuJ3QgaGFwcGVuZWQgc29cbiAgICAgIC8vIHRoZSBkZWZhdWx0IG9mIDMwMHgxNTAgd2lsbCBiZSByZXR1cm5lZCwgY2F1c2luZyBhbiBpbXByb3BlciBzb3VyY2UgcG9pbnRcbiAgICAgIC8vIGZvciB0aGUgY29uZmV0dGkgYW5pbWF0aW9uLlxuXG5cbiAgICAgIHZhciBjYW52YXNSZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgY2FudmFzV2lkdGggPSBjYW52YXNSZWN0LndpZHRoO1xuICAgICAgdmFyIGNhbnZhc0hlaWdodCA9IGNhbnZhc1JlY3QuaGVpZ2h0O1xuICAgICAgdmFyIHlQb3NpdGlvbiA9IGNhbnZhc0hlaWdodCAqIDUgLyA3O1xuICAgICAgdmFyIGxlZnRDb25mZXR0aVBvc2l0aW9uID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiB5UG9zaXRpb25cbiAgICAgIH07XG4gICAgICB2YXIgcmlnaHRDb25mZXR0aVBvc2l0aW9uID0ge1xuICAgICAgICB4OiBjYW52YXNXaWR0aCxcbiAgICAgICAgeTogeVBvc2l0aW9uXG4gICAgICB9O1xuICAgICAgdmFyIGNvbmZldHRpR3JvdXAgPSBuZXcgQ29uZmV0dGlCYXRjaCh0aGlzLmNhbnZhc0NvbnRleHQpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZldHRpTnVtYmVyIC8gMjsgaSsrKSB7XG4gICAgICAgIHZhciBjb25mZXR0aU9uVGhlUmlnaHQgPSBuZXcgQ29uZmV0dGlTaGFwZSh7XG4gICAgICAgICAgaW5pdGlhbFBvc2l0aW9uOiBsZWZ0Q29uZmV0dGlQb3NpdGlvbixcbiAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICAgICAgY29uZmV0dGlSYWRpdXM6IGNvbmZldHRpUmFkaXVzLFxuICAgICAgICAgIGNvbmZldHRpQ29sb3JzOiBjb25mZXR0aUNvbG9ycyxcbiAgICAgICAgICBjb25mZXR0aU51bWJlcjogY29uZmV0dGlOdW1iZXIsXG4gICAgICAgICAgZW1vamlzOiBlbW9qaXMsXG4gICAgICAgICAgZW1vamlTaXplOiBlbW9qaVNpemUsXG4gICAgICAgICAgY2FudmFzV2lkdGg6IGNhbnZhc1dpZHRoXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY29uZmV0dGlPblRoZUxlZnQgPSBuZXcgQ29uZmV0dGlTaGFwZSh7XG4gICAgICAgICAgaW5pdGlhbFBvc2l0aW9uOiByaWdodENvbmZldHRpUG9zaXRpb24sXG4gICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgY29uZmV0dGlSYWRpdXM6IGNvbmZldHRpUmFkaXVzLFxuICAgICAgICAgIGNvbmZldHRpQ29sb3JzOiBjb25mZXR0aUNvbG9ycyxcbiAgICAgICAgICBjb25mZXR0aU51bWJlcjogY29uZmV0dGlOdW1iZXIsXG4gICAgICAgICAgZW1vamlzOiBlbW9qaXMsXG4gICAgICAgICAgZW1vamlTaXplOiBlbW9qaVNpemUsXG4gICAgICAgICAgY2FudmFzV2lkdGg6IGNhbnZhc1dpZHRoXG4gICAgICAgIH0pO1xuICAgICAgICBjb25mZXR0aUdyb3VwLmFkZFNoYXBlcyhjb25mZXR0aU9uVGhlUmlnaHQsIGNvbmZldHRpT25UaGVMZWZ0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hY3RpdmVDb25mZXR0aUJhdGNoZXMucHVzaChjb25mZXR0aUdyb3VwKTtcbiAgICAgIHRoaXMucXVldWVBbmltYXRpb25GcmFtZUlmTmVlZGVkKCk7XG4gICAgICByZXR1cm4gY29uZmV0dGlHcm91cC5nZXRCYXRjaENvbXBsZXRlUHJvbWlzZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhckNhbnZhc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ29uZmV0dGlCYXRjaGVzID0gW107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lDYW52YXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveUNhbnZhcygpIHtcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBKU0NvbmZldHRpO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBKU0NvbmZldHRpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFsX2Jpb2xvZ3kgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9hbF9iaW9sb2d5LndlYnBcIjtcclxuaW1wb3J0IGFsX2NoZW1pc3RyeSBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2FsX2NoZW1pc3RyeS53ZWJwXCI7XHJcbmltcG9ydCBhbF9waHlzaWNzIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvYWxfcGh5c2ljcy53ZWJwXCI7XHJcblxyXG5pbXBvcnQgb2xfYmlvbG9neSBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL29sX2Jpb2xvZ3kud2VicFwiO1xyXG5pbXBvcnQgb2xfY2hlbWlzdHJ5IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvb2xfY2hlbWlzdHJ5LndlYnBcIjtcclxuaW1wb3J0IG9sX2NvbWJpbmVkIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvb2xfY29tYmluZWQud2VicFwiO1xyXG5pbXBvcnQgb2xfZWNvbm9taWNzIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvb2xfZWNvbm9taWNzLndlYnBcIjtcclxuaW1wb3J0IG9sX3BoeXNpY3MgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9vbF9waHlzaWNzLndlYnBcIjtcclxuXHJcbmltcG9ydCBjcl9iaW9sb2d5IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvY3JfYmlvbG9neS53ZWJwXCI7XHJcbmltcG9ydCBjcl9jaGVtaXN0cnkgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9jcl9jaGVtaXN0cnkud2VicFwiO1xyXG5pbXBvcnQgY3JfY29tYmluZWQgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9jcl9jb21iaW5lZC53ZWJwXCI7XHJcbmltcG9ydCBjcl9waHlzaWNzIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvY3JfcGh5c2ljcy53ZWJwXCI7XHJcblxyXG5pbXBvcnQgcmFuZG9tSW1hZ2UxIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzEud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2UyIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzIud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2UzIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzMud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2U0IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzQud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2U1IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzUud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2U2IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzYud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2U3IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzcud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2U4IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzgud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2U5IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzkud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2UxMCBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL1JhbmRvbS8xMC53ZWJwXCI7XHJcbmltcG9ydCByYW5kb21JbWFnZTExIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzExLndlYnBcIjtcclxuaW1wb3J0IHJhbmRvbUltYWdlMTIgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9SYW5kb20vMTIud2VicFwiO1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2UxMyBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL1JhbmRvbS8xMy53ZWJwXCI7XHJcbmltcG9ydCByYW5kb21JbWFnZTE0IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzE0LndlYnBcIjtcclxuXHJcbmNvbnN0IHJhbmRvbUltYWdlcyA9IHtcclxuICAgIHJhbmRvbUltYWdlMSxcclxuICAgIHJhbmRvbUltYWdlMixcclxuICAgIHJhbmRvbUltYWdlMyxcclxuICAgIHJhbmRvbUltYWdlNCxcclxuICAgIHJhbmRvbUltYWdlNSxcclxuICAgIHJhbmRvbUltYWdlNixcclxuICAgIHJhbmRvbUltYWdlNyxcclxuICAgIHJhbmRvbUltYWdlOCxcclxuICAgIHJhbmRvbUltYWdlOSxcclxuICAgIHJhbmRvbUltYWdlMTAsXHJcbiAgICByYW5kb21JbWFnZTExLFxyXG4gICAgcmFuZG9tSW1hZ2UxMixcclxuICAgIHJhbmRvbUltYWdlMTMsXHJcbiAgICByYW5kb21JbWFnZTE0LFxyXG59O1xyXG5jb25zdCBpbWFnZXMgPSB7XHJcbiAgICBhbF9iaW9sb2d5LFxyXG4gICAgYWxfY2hlbWlzdHJ5LFxyXG4gICAgYWxfcGh5c2ljcyxcclxuICAgIG9sX2Jpb2xvZ3ksXHJcbiAgICBvbF9jaGVtaXN0cnksXHJcbiAgICBvbF9jb21iaW5lZCxcclxuICAgIG9sX2Vjb25vbWljcyxcclxuICAgIG9sX3BoeXNpY3MsXHJcbiAgICBjcl9iaW9sb2d5LFxyXG4gICAgY3JfY2hlbWlzdHJ5LFxyXG4gICAgY3JfcGh5c2ljcyxcclxuICAgIGNyX2NvbWJpbmVkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlQnV0dG9uKHtcclxuICAgIGxldmVsLFxyXG4gICAgc3ViamVjdCxcclxuICAgIHllYXIsXHJcbiAgICBzZXNzaW9uLFxyXG4gICAgdmFyaWFudCxcclxuICAgIGdlbmVyYXRlQ29udGFpbmVyQ2FsbGJhY2ssXHJcbiAgICByZW1vdmVDb250YWluZXJDYWxsYmFjayA9ICgpID0+IHsgfSxcclxuICAgIG9wZW5lZCxcclxufSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaWRlLWNvbnRhaW5lclwiKTtcclxuICAgIGVsZW1lbnQuaWQgPVxyXG4gICAgICAgIHZhcmlhbnQgPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc2Vzc2lvbiA9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8geWVhciA9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH1gXHJcbiAgICAgICAgICAgICAgICAgICAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn1gXHJcbiAgICAgICAgICAgICAgICA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259YFxyXG4gICAgICAgICAgICA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH1gO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnV0dG9uRWxlbWVudC5pZCA9XHJcbiAgICAgICAgdmFyaWFudCA9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBzZXNzaW9uID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyB5ZWFyID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gYHNpZGUtJHtsZXZlbH0tYnV0dG9uLSR7c3ViamVjdH1gXHJcbiAgICAgICAgICAgICAgICAgICAgOiBgc2lkZS0ke2xldmVsfS1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9YFxyXG4gICAgICAgICAgICAgICAgOiBgc2lkZS0ke2xldmVsfS1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn1gXHJcbiAgICAgICAgICAgIDogYHNpZGUtJHtsZXZlbH0tYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH1gO1xyXG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBzaWRlLWJ1dHRvbmApO1xyXG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgIGBzaWRlLWJ1dHRvbi0ke3ZhcmlhbnQgPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc2Vzc2lvbiA9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8geWVhciA9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IFwic3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcInllYXJcIlxyXG4gICAgICAgICAgICAgICAgOiBcInNlc3Npb25cIlxyXG4gICAgICAgICAgICA6IFwidmFyaWFudFwiXHJcbiAgICAgICAgfWBcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXJyb3dEb3duU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICBcInN2Z1wiXHJcbiAgICApO1xyXG4gICAgYXJyb3dEb3duU3ZnLmNsYXNzTGlzdC5hZGQoXCJzaWRlLWJ1dHRvbi1hcnJvd1wiKTtcclxuICAgIGFycm93RG93blN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjMyXCIpO1xyXG4gICAgYXJyb3dEb3duU3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjMyXCIpO1xyXG4gICAgYXJyb3dEb3duU3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjU2IDI1NlwiKTtcclxuICAgIGFycm93RG93blN2Zy5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xyXG4gICAgYXJyb3dEb3duU3ZnLmlubmVySFRNTCA9XHJcbiAgICAgICAgJzxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTIxNi40OSAxMDQuNDlsLTgwIDgwYTEyIDEyIDAgMCAxLTE3IDBsLTgwLTgwYTEyIDEyIDAgMCAxIDE3LTE3TDEyOCAxNTlsNzEuNTEtNzEuNTJhMTIgMTIgMCAwIDEgMTcgMTdaXCIgLz4nO1xyXG4gICAgY29uc3QgYXJyb3dVcFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgXCJzdmdcIlxyXG4gICAgKTtcclxuICAgIGFycm93VXBTdmcuY2xhc3NMaXN0LmFkZChcInNpZGUtYnV0dG9uLWFycm93XCIpO1xyXG4gICAgYXJyb3dVcFN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjMyXCIpO1xyXG4gICAgYXJyb3dVcFN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzMlwiKTtcclxuICAgIGFycm93VXBTdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNTYgMjU2XCIpO1xyXG4gICAgYXJyb3dVcFN2Zy5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xyXG4gICAgYXJyb3dVcFN2Zy5pbm5lckhUTUwgPVxyXG4gICAgICAgICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCJkPVwiTTIxNi40OSAxNjguNDlhMTIgMTIgMCAwIDEtMTcgMEwxMjggOTdsLTcxLjUxIDcxLjQ5YTEyIDEyIDAgMCAxLTE3LTE3bDgwLTgwYTEyIDEyIDAgMCAxIDE3IDBsODAgODBhMTIgMTIgMCAwIDEgMCAxN1wiIC8+JztcclxuICAgIGlmIChvcGVuZWQpIHtcclxuICAgICAgICBhcnJvd0Rvd25TdmcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXJyb3dVcFN2Zy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YXJpYW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJ1dHRvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoYXJyb3dEb3duU3ZnKTtcclxuICAgICAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGFycm93VXBTdmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID1cclxuICAgICAgICB2YXJpYW50ID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHNlc3Npb24gPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IHllYXIgPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzdWJqZWN0ID09IFwiQ29tYmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29tYmluZWQgU2NpZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3ViamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDogeWVhclxyXG4gICAgICAgICAgICAgICAgOiBzZXNzaW9uID09IFwibVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIkZlYiAvIE1hclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZXNzaW9uID09IFwic1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJNYXkgLyBKdW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiT2N0IC8gTm92XCJcclxuICAgICAgICAgICAgOiBgVmFyaWFudCAke051bWJlcih2YXJpYW50KSArIDF9YDtcclxuICAgIHRpdGxlLmlkID1cclxuICAgICAgICB2YXJpYW50ID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHNlc3Npb24gPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IHllYXIgPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LXRpdGxlYFxyXG4gICAgICAgICAgICAgICAgICAgIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LXRpdGxlYFxyXG4gICAgICAgICAgICAgICAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS10aXRsZWBcclxuICAgICAgICAgICAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9LXRpdGxlYDtcclxuXHJcbiAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgaWYgKHZhcmlhbnQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGUtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGlmICghb3BlbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXIuaWQgPVxyXG4gICAgICAgICAgICBzZXNzaW9uID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyB5ZWFyID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS15ZWFycy1jb250YWluZXJgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tc2Vzc2lvbnMtY29udGFpbmVyYFxyXG4gICAgICAgICAgICAgICAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS12YXJpYW50cy1jb250YWluZXJgO1xyXG5cclxuICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZ3JvdXAuY2xhc3NMaXN0LmFkZChcInNpZGUtZ3JvdXBcIik7XHJcbiAgICAgICAgZ3JvdXAuaWQgPVxyXG4gICAgICAgICAgICBzZXNzaW9uID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyB5ZWFyID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS15ZWFyc2BcclxuICAgICAgICAgICAgICAgICAgICA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS1zZXNzaW9uc2BcclxuICAgICAgICAgICAgICAgIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tdmFyaWFudHNgO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXApO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGlmIChvcGVuZWQpIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29udGFpbmVyQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnJvd0Rvd25TdmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgYXJyb3dEb3duU3ZnLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFycm93VXBTdmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVDb250YWluZXJDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXJyb3dVcFN2Zy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBhcnJvd0Rvd25TdmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgYXJyb3dVcFN2Zy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICByZW1vdmVDb250YWluZXJDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNYWluQnV0dG9uKFxyXG4gICAgbGV2ZWwsXHJcbiAgICBzdWJqZWN0LFxyXG4gICAgeWVhcixcclxuICAgIHNlc3Npb24sXHJcbiAgICB2YXJpYW50LFxyXG4gICAgcmFuZG9tSW1hZ2VcclxuKSB7XHJcbiAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5pZCA9XHJcbiAgICAgICAgdmFyaWFudCA9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBzZXNzaW9uID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyB5ZWFyID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7bGV2ZWx9LSR7c3ViamVjdH0tY2FyZC1jb250YWluZXJgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LWNhcmQtY29udGFpbmVyYFxyXG4gICAgICAgICAgICAgICAgOiBgJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tY2FyZC1jb250YWluZXJgXHJcbiAgICAgICAgICAgIDogYCR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH0tY2FyZC1jb250YWluZXJgO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgIGVsZW1lbnQuaWQgPVxyXG4gICAgICAgIHZhcmlhbnQgPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc2Vzc2lvbiA9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8geWVhciA9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IGAke2xldmVsfS0ke3N1YmplY3R9LWNhcmRgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LWNhcmRgXHJcbiAgICAgICAgICAgICAgICA6IGAke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS1jYXJkYFxyXG4gICAgICAgICAgICA6IGAke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9LWNhcmRgO1xyXG5cclxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGltYWdlSWNvbi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtaWNvblwiKTtcclxuICAgIGlmIChzdWJqZWN0ID09IFwiQmlvbG9neVwiKSB7XHJcbiAgICAgICAgaW1hZ2VJY29uLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCJNMjI0IDIwNGgtMTJhOTIuMSA5Mi4xIDAgMCAwLTY0LTE0My4yMlYzMmEyMCAyMCAwIDAgMC0yMC0yMEg4MGEyMCAyMCAwIDAgMC0yMCAyMHY5NmEyMCAyMCAwIDAgMCAyMCAyMGg0OGEyMCAyMCAwIDAgMCAyMC0yMFY4NS4wOEE2OC4xIDY4LjEgMCAwIDEgMjA0IDE1MmE2Ny4zOSA2Ny4zOSAwIDAgMS0yNC4xOCA1MkgzMmExMiAxMiAwIDAgMCAwIDI0aDE5MmExMiAxMiAwIDAgMCAwLTI0bS0xMDAtODBIODRWMzZoNDBabS01MiA2NGExMiAxMiAwIDAgMSAwLTI0aDY0YTEyIDEyIDAgMCAxIDAgMjRaXCIvPjwvc3ZnPic7XHJcbiAgICB9IGVsc2UgaWYgKHN1YmplY3QgPT0gXCJQaHlzaWNzXCIpIHtcclxuICAgICAgICBpbWFnZUljb24uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMDkuODQgNDcuNDRBOTEuNDIgOTEuNDIgMCAwIDAgMTQ0LjYyIDIwaC0uMzVhOTEuNDQgOTEuNDQgMCAwIDAtNjUuMTIgMjdsLTYxLjM5IDYyLjE3YTIwIDIwIDAgMCAwIC4wOCAyOC4yMUw0Ni41IDE2NmExOS44OSAxOS44OSAwIDAgMCAxNC4xNSA1Ljg2aC4xMWExOS44NiAxOS44NiAwIDAgMCAxNC4yLTZsNjAuODctNjIuMzlhMTIuMDcgMTIuMDcgMCAwIDEgMTYuNzctLjEyYTExLjYzIDExLjYzIDAgMCAxIDMuNSA4LjM1YTEyLjg1IDEyLjg1IDAgMCAxLTMuNjYgOS4xMUw5MC4xOSAxODFhMjAgMjAgMCAwIDAtLjIxIDI4LjVsMjguNjYgMjguNjZhMjAuMDggMjAuMDggMCAwIDAgMjguMTUuMTRsNjEuNzYtNjAuNDRsLjA5LS4wOWMzNi4wMS0zNS45OSAzNi41NC05NC40NiAxLjItMTMwLjMzTTYwLjYyIDE0Ni4yMWwtMjMtMjNsMTguMTktMTguNDFsMjIuODggMjIuODhabTcyLjIgNzIuMThsLTIzLTIzbDE4LjYxLTE4bDIyLjg4IDIyLjg3Wm01OC44OS01Ny42MmwtMjMuMjMgMjIuNzNsLTIyLjc4LTIyLjc3TDE2OS4yMSAxMzhsLjE1LS4xNGEzNyAzNyAwIDAgMCAxMC43NC0yNi4zN2EzNS40NCAzNS40NCAwIDAgMC0xMC44NS0yNS40MWEzNi4yIDM2LjIgMCAwIDAtNTAuNDQuNDhsLS4xLjExbC0yMy4yNSAyMy44MmwtMjIuNzgtMjIuNzdsMjMuNS0yMy44QTY3LjU1IDY3LjU1IDAgMCAxIDE0NC4yNyA0NGguMjZhNjcuNjIgNjcuNjIgMCAwIDEgNDguMjEgMjAuMjljMjYuMTEgMjYuNDkgMjUuNjQgNjkuNzYtMS4wMyA5Ni40OFwiLz48L3N2Zz4nO1xyXG4gICAgfSBlbHNlIGlmIChzdWJqZWN0ID09IFwiQ2hlbWlzdHJ5XCIpIHtcclxuICAgICAgICBpbWFnZUljb24uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMjUuMTUgMTk3LjcxTDE2NCA5NS44MVY0NGg0YTEyIDEyIDAgMCAwIDAtMjRIODhhMTIgMTIgMCAwIDAgMCAyNGg0djUxLjgxbC02MS4xNSAxMDEuOUEyMCAyMCAwIDAgMCA0OCAyMjhoMTYwYTIwIDIwIDAgMCAwIDE3LjE1LTMwLjI5TTE0MCA0NHY1NS4xNGExMiAxMiAwIDAgMCAxLjcxIDYuMTdsMzUuMTMgNTguNTRjLTEwLjc5Ljg2LTI1LjE1LTEuMzEtNDMuNDItMTAuNTZjLTE0LTcuMDgtMjcuNDYtMTEuMzMtNDAuMjctMTIuNzZsMjEuMTQtMzUuMjJhMTIgMTIgMCAwIDAgMS43MS02LjE3VjQ0Wk01NS4wNiAyMDRMNzkgMTY0LjE5YzEzLTEuMTEgMjcuNjIgMi40MiA0My42MiAxMC41MmMxOS42MSA5LjkyIDM2LjI1IDEzLjMxIDQ5Ljg1IDEzLjMxYTc1LjQ0IDc1LjQ0IDAgMCAwIDE3LjY0LTIuMDJsMTAuODMgMThaXCIvPjwvc3ZnPic7XHJcbiAgICB9IGVsc2UgaWYgKHN1YmplY3QgPT0gXCJFY29ub21pY3NcIikge1xyXG4gICAgICAgIGltYWdlSWNvbi5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIzNiAyMDhhMTIgMTIgMCAwIDEtMTIgMTJIMzJhMTIgMTIgMCAwIDEtMTItMTJWNDhhMTIgMTIgMCAwIDEgMjQgMHY5OWw0My41MS00My41MmExMiAxMiAwIDAgMSAxNyAwTDEyOCAxMjdsNDMtNDNoLTExYTEyIDEyIDAgMCAxIDAtMjRoNDBhMTIgMTIgMCAwIDEgMTIgMTJ2NDBhMTIgMTIgMCAwIDEtMjQgMHYtMTFsLTUxLjUxIDUxLjUyYTEyIDEyIDAgMCAxLTE3IDBMOTYgMTI5bC01MiA1MnYxNWgxODBhMTIgMTIgMCAwIDEgMTIgMTJcIi8+PC9zdmc+JztcclxuICAgIH0gZWxzZSBpZiAoc3ViamVjdCA9PSBcIkNvbWJpbmVkXCIpIHtcclxuICAgICAgICBpbWFnZUljb24uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMTkuMjMgMTU5LjJhMTk2LjY2IDE5Ni42NiAwIDAgMC0xOC0zMS4yYTE5Ni42NiAxOTYuNjYgMCAwIDAgMTgtMzEuMmMxMS44NC0yNi4zMSAxMS42OS00Ny40OC0uNDMtNTkuNnMtMzMuMjktMTIuMjctNTkuNi0uNDNhMTk2LjY2IDE5Ni42NiAwIDAgMC0zMS4yIDE4YTE5Ni42NiAxOTYuNjYgMCAwIDAtMzEuMi0xOGMtMjYuMzEtMTEuODQtNDcuNDgtMTEuNjktNTkuNi40M3MtMTIuMjcgMzMuMjktLjQzIDU5LjZhMTk2LjY2IDE5Ni42NiAwIDAgMCAxOCAzMS4yYTE5Ni42NiAxOTYuNjYgMCAwIDAtMTggMzEuMmMtMTEuODQgMjYuMzEtMTEuNjkgNDcuNDguNDMgNTkuNmM2LjEzIDYuMTMgMTQuNTggOS4yIDI0LjggOS4yYzEwIDAgMjEuNzctMi45MiAzNC43Ni04Ljc3YTE5Ni42NiAxOTYuNjYgMCAwIDAgMzEuMi0xOGExOTYuNjYgMTk2LjY2IDAgMCAwIDMxLjIgMThjMTMgNS44NSAyNC43NCA4Ljc3IDM0Ljc2IDguNzdjMTAuMjYgMCAxOC43MS0zLjA3IDI0Ljg0LTkuMmMxMi4xNi0xMi4xMiAxMi4zMS0zMy4yOS40Ny01OS42bS0xNy40MS0xMDVjNS4yNSA1LjI2IDEuNzkgMjYtMTYgNTMuNzhjLTUuNjEtNi42Ni0xMS42NS0xMy4yNS0xOC4wNy0xOS42N1MxNTQuNyA3NS44MyAxNDggNzAuMjJjMjcuODItMTcuODMgNDguNTYtMjEuMjkgNTMuODItMTYuMDRaTTE3MS4yNCAxMjhhMjg4LjYgMjg4LjYgMCAwIDEtMjAuNTEgMjIuNzNBMjg4LjYgMjg4LjYgMCAwIDEgMTI4IDE3MS4yNGEyODguNiAyODguNiAwIDAgMS0yMi43My0yMC41MUEyODguNiAyODguNiAwIDAgMSA4NC43NiAxMjhBMjk4LjU1IDI5OC41NSAwIDAgMSAxMjggODQuNzZhMjg2LjgzIDI4Ni44MyAwIDAgMSAyMi43MyAyMC41MUEyODYuODMgMjg2LjgzIDAgMCAxIDE3MS4yNCAxMjhNNTQuMTggNTQuMThjMS40Ni0xLjQ1IDQuMS0yLjI0IDcuNzUtMi4yNGM5LjUzIDAgMjUuOTQgNS4zOSA0NiAxOC4yOGMtNi42NiA1LjYxLTEzLjI1IDExLjY1LTE5LjY3IDE4LjA3Uzc1LjgzIDEwMS4zIDcwLjIyIDEwOEM1Mi4zOSA4MC4xOCA0OC45MyA1OS40NCA1NC4xOCA1NC4xOG0wIDE0Ny42NGMtNS4yNS01LjI2LTEuNzktMjYgMTYtNTMuNzhjNS42MSA2LjY2IDExLjY1IDEzLjI1IDE4LjA3IDE5LjY3czEzIDEyLjQ2IDE5LjY3IDE4LjA3Yy0yNy43NCAxNy44My00OC40OCAyMS4yOS01My43NCAxNi4wNG0xNDcuNjQgMGMtNS4yNiA1LjI1LTI2IDEuNzktNTMuNzgtMTZjNi42Ni01LjYxIDEzLjI1LTExLjY1IDE5LjY3LTE4LjA3czEyLjQ2LTEzIDE4LjA3LTE5LjY3YzE3LjgzIDI3Ljc0IDIxLjI5IDQ4LjQ4IDE2LjA0IDUzLjc0TTE0NCAxMjhhMTYgMTYgMCAxIDEtMTYtMTZhMTYgMTYgMCAwIDEgMTYgMTZcIi8+PC9zdmc+JztcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZUljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBpbWFnZUljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIGltYWdlLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBpbWFnZUljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH07XHJcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBpbWFnZUljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH07XHJcbiAgICBpZiAocmFuZG9tSW1hZ2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gcmFuZG9tSW1hZ2VzW2ByYW5kb21JbWFnZSR7cmFuZG9tSW1hZ2UgKyAxfWBdO1xyXG4gICAgICAgIGltYWdlLmFsdCA9IFwicmFuZG9tIGltYWdlXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGltYWdlc1tgJHtsZXZlbH1fJHtzdWJqZWN0LnRvTG93ZXJDYXNlKCl9YF07XHJcbiAgICAgICAgaW1hZ2UuYWx0ID0gYCR7bGV2ZWx9ICR7c3ViamVjdC50b0xvd2VyQ2FzZSgpfSBpbWFnZWA7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VJY29uKTtcclxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID1cclxuICAgICAgICB2YXJpYW50ID09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHNlc3Npb24gPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IHllYXIgPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzdWJqZWN0ID09IFwiQ29tYmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ29tYmluZWQgU2NpZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3ViamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDogeWVhclxyXG4gICAgICAgICAgICAgICAgOiBzZXNzaW9uID09IFwibVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIkZlYiAvIE1hclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZXNzaW9uID09IFwic1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJNYXkgLyBKdW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiT2N0IC8gTm92XCJcclxuICAgICAgICAgICAgOiBgVmFyaWFudCAke051bWJlcih2YXJpYW50KSArIDF9YDtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXRpdGxlXCIpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudENvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JbWFnZXMoKSB7XHJcbiAgICBjb25zdCByYW5kb21JbWFnZXNBcnJheSA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxM107XHJcbiAgICBzaHVmZmxlKHJhbmRvbUltYWdlc0FycmF5KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cclxuICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4ICE9IDApIHtcclxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xyXG5cclxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAgICAgICBbYXJyYXlbY3VycmVudEluZGV4XSwgYXJyYXlbcmFuZG9tSW5kZXhdXSA9IFtcclxuICAgICAgICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSxcclxuICAgICAgICAgICAgICAgIGFycmF5W2N1cnJlbnRJbmRleF0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByYW5kb21JbWFnZXNBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVTaWRlQnV0dG9uLCBnZW5lcmF0ZU1haW5CdXR0b24sIGdlbmVyYXRlUmFuZG9tSW1hZ2VzIH07XHJcbiIsImltcG9ydCBcIi4uL2Nzcy9tb2RhbC5jc3NcIjtcclxuY29uc3QgYW5pbWF0aW9uVGltZSA9IDIwMDtcclxubGV0IG1vZGFsVGltZW91dDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKFxyXG4gICAgdGl0bGUsXHJcbiAgICBjb250ZW50cyxcclxuICAgIHN1Ym1pdEJ1dHRvbkJlaGF2aW9yLFxyXG4gICAgY2FuY2VsQnV0dG9uQmVoYXZpb3IsXHJcbiAgICBkZWZhdWx0QmVoYXZpb3IgPSAoKSA9PiB7IH1cclxuKSB7XHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBtb2RhbEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZHJvcCk7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICB0eXBlb2YgY29udGVudHNbaV0gPT0gXCJzdHJpbmdcIiA/IGNvbnRlbnRzW2ldIDogY29udGVudHNbaV1bMF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudHNbaV1bMV0gPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRzW2ldWzFdKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250YWluZXJcIik7XHJcbiAgICBtb2RhbENvbnRhaW5lci5pZCA9IFwibW9kYWwtY29udGFpbmVyXCI7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwiYmFja2Ryb3BcIik7XHJcblxyXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5hbmltYXRpb24gPSBgem9vbU91dCBmb3J3YXJkcyAke2FuaW1hdGlvblRpbWV9bXMgZWFzZS1vdXRgO1xyXG4gICAgICAgIGJhY2tkcm9wLnN0eWxlLmFuaW1hdGlvbiA9IGBmYWRlT3V0IGZvcndhcmRzICR7YW5pbWF0aW9uVGltZX1tc2A7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vZGFsVGltZW91dCk7XHJcbiAgICAgICAgbW9kYWxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcigpO1xyXG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKTtcclxuICAgICAgICB9LCBhbmltYXRpb25UaW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgaWYgKG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5hbmltYXRpb24gPSBgem9vbU91dCBmb3J3YXJkcyAke2FuaW1hdGlvblRpbWV9bXMgZWFzZS1vdXRgO1xyXG4gICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBgZmFkZU91dCBmb3J3YXJkcyAke2FuaW1hdGlvblRpbWV9bXNgO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW9kYWxUaW1lb3V0KTtcclxuICAgICAgICAgICAgbW9kYWxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3IoKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9LCBhbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbEJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJ1dHRvbnMtY29udGFpbmVyXCIpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxCdXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgICBpZiAoc3VibWl0QnV0dG9uQmVoYXZpb3IgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBzdWJtaXRCdXR0b25CZWhhdmlvclswXTtcclxuXHJcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmFuaW1hdGlvbiA9IGB6b29tT3V0IGZvcndhcmRzICR7YW5pbWF0aW9uVGltZX1tcyBlYXNlLW91dGA7XHJcbiAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLmFuaW1hdGlvbiA9IGBmYWRlT3V0IGZvcndhcmRzICR7YW5pbWF0aW9uVGltZX1tc2A7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb2RhbFRpbWVvdXQpO1xyXG4gICAgICAgICAgICBtb2RhbFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbkJlaGF2aW9yWzFdKCk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSwgYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1vZGFsQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjYW5jZWxCdXR0b25CZWhhdmlvciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IGNhbmNlbEJ1dHRvbkJlaGF2aW9yWzBdO1xyXG5cclxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYW5pbWF0aW9uID0gYHpvb21PdXQgZm9yd2FyZHMgJHthbmltYXRpb25UaW1lfW1zIGVhc2Utb3V0YDtcclxuICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuYW5pbWF0aW9uID0gYGZhZGVPdXQgZm9yd2FyZHMgJHthbmltYXRpb25UaW1lfW1zYDtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1vZGFsVGltZW91dCk7XHJcbiAgICAgICAgICAgIG1vZGFsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQmVoYXZpb3JbMV0oKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9LCBhbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbW9kYWxCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbDtcclxuIiwiaW1wb3J0IHsgV29ya2JveCB9IGZyb20gXCJ3b3JrYm94LXdpbmRvd1wiO1xyXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4vbW9kYWwuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpIHtcclxuICBpZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICBjb25zdCB3cCA9IG5ldyBXb3JrYm94KFwic3cuanNcIik7XHJcblxyXG4gICAgd3AuYWRkRXZlbnRMaXN0ZW5lcihcImluc3RhbGxlZFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmlzVXBkYXRlKSB7XHJcbiAgICAgICAgY3JlYXRlTW9kYWwoXHJcbiAgICAgICAgICBcIlwiLCAvLyB0aXRsZVxyXG4gICAgICAgICAgW1wiTmV3IFVwZGF0ZSBpcyBhdmFpbGFibGVcIl0sIC8vIGNvbnRlbnQsXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiVXBkYXRlXCIsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd3AucmVnaXN0ZXIoKTtcclxuICB9XHJcbn1cclxuIiwidHJ5e3NlbGZbXCJ3b3JrYm94OndpbmRvdzo3LjAuMFwiXSYmXygpfWNhdGNoKG4pe31mdW5jdGlvbiBuKG4sdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihyKXt2YXIgZT1uZXcgTWVzc2FnZUNoYW5uZWw7ZS5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24obil7cihuLmRhdGEpfSxuLnBvc3RNZXNzYWdlKHQsW2UucG9ydDJdKX0pKX1mdW5jdGlvbiB0KG4pe3ZhciB0PWZ1bmN0aW9uKG4sdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIG58fCFuKXJldHVybiBuO3ZhciByPW5bU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgZT1yLmNhbGwobix0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGUpcmV0dXJuIGU7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShuKX0obixcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OnQrXCJcIn1mdW5jdGlvbiByKG4scil7Zm9yKHZhciBlPTA7ZTxyLmxlbmd0aDtlKyspe3ZhciBpPXJbZV07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLHQoaS5rZXkpLGkpfX1mdW5jdGlvbiBlKG4sdCl7cmV0dXJuIGU9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCk6ZnVuY3Rpb24obix0KXtyZXR1cm4gbi5fX3Byb3RvX189dCxufSxlKG4sdCl9ZnVuY3Rpb24gaShuLHQpeyhudWxsPT10fHx0Pm4ubGVuZ3RoKSYmKHQ9bi5sZW5ndGgpO2Zvcih2YXIgcj0wLGU9bmV3IEFycmF5KHQpO3I8dDtyKyspZVtyXT1uW3JdO3JldHVybiBlfWZ1bmN0aW9uIG8obix0KXt2YXIgcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZuW1N5bWJvbC5pdGVyYXRvcl18fG5bXCJAQGl0ZXJhdG9yXCJdO2lmKHIpcmV0dXJuKHI9ci5jYWxsKG4pKS5uZXh0LmJpbmQocik7aWYoQXJyYXkuaXNBcnJheShuKXx8KHI9ZnVuY3Rpb24obix0KXtpZihuKXtpZihcInN0cmluZ1wiPT10eXBlb2YgbilyZXR1cm4gaShuLHQpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09ciYmbi5jb25zdHJ1Y3RvciYmKHI9bi5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09cnx8XCJTZXRcIj09PXI/QXJyYXkuZnJvbShuKTpcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qocik/aShuLHQpOnZvaWQgMH19KG4pKXx8dCYmbiYmXCJudW1iZXJcIj09dHlwZW9mIG4ubGVuZ3RoKXtyJiYobj1yKTt2YXIgZT0wO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlPj1uLmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6bltlKytdfX19dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfXRyeXtzZWxmW1wid29ya2JveDpjb3JlOjcuMC4wXCJdJiZfKCl9Y2F0Y2gobil7fXZhciB1PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLnByb21pc2U9bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQscil7bi5yZXNvbHZlPXQsbi5yZWplY3Q9cn0pKX07ZnVuY3Rpb24gYShuLHQpe3ZhciByPWxvY2F0aW9uLmhyZWY7cmV0dXJuIG5ldyBVUkwobixyKS5ocmVmPT09bmV3IFVSTCh0LHIpLmhyZWZ9dmFyIGM9ZnVuY3Rpb24obix0KXt0aGlzLnR5cGU9bixPYmplY3QuYXNzaWduKHRoaXMsdCl9O2Z1bmN0aW9uIGYobix0LHIpe3JldHVybiByP3Q/dChuKTpuOihuJiZuLnRoZW58fChuPVByb21pc2UucmVzb2x2ZShuKSksdD9uLnRoZW4odCk6bil9ZnVuY3Rpb24gcygpe312YXIgdj17dHlwZTpcIlNLSVBfV0FJVElOR1wifTtmdW5jdGlvbiBoKG4sdCl7aWYoIXQpcmV0dXJuIG4mJm4udGhlbj9uLnRoZW4ocyk6UHJvbWlzZS5yZXNvbHZlKCl9dmFyIGw9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gaShuLHIpe3ZhciBlLGk7cmV0dXJuIHZvaWQgMD09PXImJihyPXt9KSwoZT10LmNhbGwodGhpcyl8fHRoaXMpLm5uPXt9LGUudG49MCxlLnJuPW5ldyB1LGUuZW49bmV3IHUsZS5vbj1uZXcgdSxlLnVuPTAsZS5hbj1uZXcgU2V0LGUuY249ZnVuY3Rpb24oKXt2YXIgbj1lLmZuLHQ9bi5pbnN0YWxsaW5nO2UudG4+MHx8IWEodC5zY3JpcHRVUkwsZS5zbi50b1N0cmluZygpKXx8cGVyZm9ybWFuY2Uubm93KCk+ZS51bis2ZTQ/KGUudm49dCxuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLGUuY24pKTooZS5obj10LGUuYW4uYWRkKHQpLGUucm4ucmVzb2x2ZSh0KSksKytlLnRuLHQuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXRlY2hhbmdlXCIsZS5sbil9LGUubG49ZnVuY3Rpb24obil7dmFyIHQ9ZS5mbixyPW4udGFyZ2V0LGk9ci5zdGF0ZSxvPXI9PT1lLnZuLHU9e3N3OnIsaXNFeHRlcm5hbDpvLG9yaWdpbmFsRXZlbnQ6bn07IW8mJmUubW4mJih1LmlzVXBkYXRlPSEwKSxlLmRpc3BhdGNoRXZlbnQobmV3IGMoaSx1KSksXCJpbnN0YWxsZWRcIj09PWk/ZS53bj1zZWxmLnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7XCJpbnN0YWxsZWRcIj09PWkmJnQud2FpdGluZz09PXImJmUuZGlzcGF0Y2hFdmVudChuZXcgYyhcIndhaXRpbmdcIix1KSl9KSwyMDApOlwiYWN0aXZhdGluZ1wiPT09aSYmKGNsZWFyVGltZW91dChlLnduKSxvfHxlLmVuLnJlc29sdmUocikpfSxlLnluPWZ1bmN0aW9uKG4pe3ZhciB0PWUuaG4scj10IT09bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcjtlLmRpc3BhdGNoRXZlbnQobmV3IGMoXCJjb250cm9sbGluZ1wiLHtpc0V4dGVybmFsOnIsb3JpZ2luYWxFdmVudDpuLHN3OnQsaXNVcGRhdGU6ZS5tbn0pKSxyfHxlLm9uLnJlc29sdmUodCl9LGUuZ249KGk9ZnVuY3Rpb24obil7dmFyIHQ9bi5kYXRhLHI9bi5wb3J0cyxpPW4uc291cmNlO3JldHVybiBmKGUuZ2V0U1coKSwoZnVuY3Rpb24oKXtlLmFuLmhhcyhpKSYmZS5kaXNwYXRjaEV2ZW50KG5ldyBjKFwibWVzc2FnZVwiLHtkYXRhOnQsb3JpZ2luYWxFdmVudDpuLHBvcnRzOnIsc3c6aX0pKX0pKX0sZnVuY3Rpb24oKXtmb3IodmFyIG49W10sdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspblt0XT1hcmd1bWVudHNbdF07dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUoaS5hcHBseSh0aGlzLG4pKX1jYXRjaChuKXtyZXR1cm4gUHJvbWlzZS5yZWplY3Qobil9fSksZS5zbj1uLGUubm49cixuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUuZ24pLGV9dmFyIG8scztzPXQsKG89aSkucHJvdG90eXBlPU9iamVjdC5jcmVhdGUocy5wcm90b3R5cGUpLG8ucHJvdG90eXBlLmNvbnN0cnVjdG9yPW8sZShvLHMpO3ZhciBsLG0sdyx5PWkucHJvdG90eXBlO3JldHVybiB5LnJlZ2lzdGVyPWZ1bmN0aW9uKG4pe3ZhciB0PSh2b2lkIDA9PT1uP3t9Om4pLmltbWVkaWF0ZSxyPXZvaWQgMCE9PXQmJnQ7dHJ5e3ZhciBlPXRoaXM7cmV0dXJuIGYoZnVuY3Rpb24obix0KXt2YXIgcj1uKCk7aWYociYmci50aGVuKXJldHVybiByLnRoZW4odCk7cmV0dXJuIHQocil9KChmdW5jdGlvbigpe2lmKCFyJiZcImNvbXBsZXRlXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlKXJldHVybiBoKG5ldyBQcm9taXNlKChmdW5jdGlvbihuKXtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbil9KSkpfSksKGZ1bmN0aW9uKCl7cmV0dXJuIGUubW49Qm9vbGVhbihuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSxlLmRuPWUucG4oKSxmKGUuYm4oKSwoZnVuY3Rpb24obil7ZS5mbj1uLGUuZG4mJihlLmhuPWUuZG4sZS5lbi5yZXNvbHZlKGUuZG4pLGUub24ucmVzb2x2ZShlLmRuKSxlLmRuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLGUubG4se29uY2U6ITB9KSk7dmFyIHQ9ZS5mbi53YWl0aW5nO3JldHVybiB0JiZhKHQuc2NyaXB0VVJMLGUuc24udG9TdHJpbmcoKSkmJihlLmhuPXQsUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKXtlLmRpc3BhdGNoRXZlbnQobmV3IGMoXCJ3YWl0aW5nXCIse3N3OnQsd2FzV2FpdGluZ0JlZm9yZVJlZ2lzdGVyOiEwfSkpfSkpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpKSxlLmhuJiYoZS5ybi5yZXNvbHZlKGUuaG4pLGUuYW4uYWRkKGUuaG4pKSxlLmZuLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLGUuY24pLG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250cm9sbGVyY2hhbmdlXCIsZS55biksZS5mbn0pKX0pKSl9Y2F0Y2gobil7cmV0dXJuIFByb21pc2UucmVqZWN0KG4pfX0seS51cGRhdGU9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIHRoaXMuZm4/ZihoKHRoaXMuZm4udXBkYXRlKCkpKTpmKCl9Y2F0Y2gobil7cmV0dXJuIFByb21pc2UucmVqZWN0KG4pfX0seS5nZXRTVz1mdW5jdGlvbigpe3JldHVybiB2b2lkIDAhPT10aGlzLmhuP1Byb21pc2UucmVzb2x2ZSh0aGlzLmhuKTp0aGlzLnJuLnByb21pc2V9LHkubWVzc2FnZVNXPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gZih0aGlzLmdldFNXKCksKGZ1bmN0aW9uKHIpe3JldHVybiBuKHIsdCl9KSl9Y2F0Y2gobil7cmV0dXJuIFByb21pc2UucmVqZWN0KG4pfX0seS5tZXNzYWdlU2tpcFdhaXRpbmc9ZnVuY3Rpb24oKXt0aGlzLmZuJiZ0aGlzLmZuLndhaXRpbmcmJm4odGhpcy5mbi53YWl0aW5nLHYpfSx5LnBuPWZ1bmN0aW9uKCl7dmFyIG49bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcjtyZXR1cm4gbiYmYShuLnNjcmlwdFVSTCx0aGlzLnNuLnRvU3RyaW5nKCkpP246dm9pZCAwfSx5LmJuPWZ1bmN0aW9uKCl7dHJ5e3ZhciBuPXRoaXM7cmV0dXJuIGYoZnVuY3Rpb24obix0KXt0cnl7dmFyIHI9bigpfWNhdGNoKG4pe3JldHVybiB0KG4pfWlmKHImJnIudGhlbilyZXR1cm4gci50aGVuKHZvaWQgMCx0KTtyZXR1cm4gcn0oKGZ1bmN0aW9uKCl7cmV0dXJuIGYobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIobi5zbixuLm5uKSwoZnVuY3Rpb24odCl7cmV0dXJuIG4udW49cGVyZm9ybWFuY2Uubm93KCksdH0pKX0pLChmdW5jdGlvbihuKXt0aHJvdyBufSkpKX1jYXRjaChuKXtyZXR1cm4gUHJvbWlzZS5yZWplY3Qobil9fSxsPWksKG09W3trZXk6XCJhY3RpdmVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbi5wcm9taXNlfX0se2tleTpcImNvbnRyb2xsaW5nXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub24ucHJvbWlzZX19XSkmJnIobC5wcm90b3R5cGUsbSksdyYmcihsLHcpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsLFwicHJvdG90eXBlXCIse3dyaXRhYmxlOiExfSksbH0oZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7dGhpcy5Qbj1uZXcgTWFwfXZhciB0PW4ucHJvdG90eXBlO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLmpuKG4pLmFkZCh0KX0sdC5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKG4sdCl7dGhpcy5qbihuKS5kZWxldGUodCl9LHQuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihuKXtuLnRhcmdldD10aGlzO2Zvcih2YXIgdCxyPW8odGhpcy5qbihuLnR5cGUpKTshKHQ9cigpKS5kb25lOyl7KDAsdC52YWx1ZSkobil9fSx0LmpuPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLlBuLmhhcyhuKXx8dGhpcy5Qbi5zZXQobixuZXcgU2V0KSx0aGlzLlBuLmdldChuKX0sbn0oKSk7ZXhwb3J0e2wgYXMgV29ya2JveCxjIGFzIFdvcmtib3hFdmVudCxuIGFzIG1lc3NhZ2VTV307XG4vLyMgc291cmNlTWFwcGluZ1VSTD13b3JrYm94LXdpbmRvdy5wcm9kLmVzNS5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IG9sU3ViamVjdHNNUyBmcm9tIFwiLi4vanNvbi9PTF9zdWJqZWN0c19tcy5qc29uXCI7XHJcbmltcG9ydCBhbFN1YmplY3RzTVMgZnJvbSBcIi4uL2pzb24vQUxfc3ViamVjdHNfbXMuanNvblwiO1xyXG5pbXBvcnQgY3JTdWJqZWN0c01TIGZyb20gXCIuLi9qc29uL0NSX3N1YmplY3RzX21zLmpzb25cIjtcclxuaW1wb3J0IFRpbWVyQXVkaW8gZnJvbSBcIi4uL21lZGlhL2F1ZGlvL3RpbWVyLWF1ZGlvLm1wM1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZW5lcmF0ZVNpZGVCdXR0b24sXHJcbiAgZ2VuZXJhdGVNYWluQnV0dG9uLFxyXG4gIGdlbmVyYXRlUmFuZG9tSW1hZ2VzLFxyXG59IGZyb20gXCIuL2dlbmVyYXRlRWxlbWVudHMuanNcIjtcclxuaW1wb3J0IGNyZWF0ZU1vZGFsIGZyb20gXCIuL21vZGFsLmpzXCI7XHJcbmltcG9ydCBXZWJWaWV3ZXIgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9AcGRmdHJvbi9wZGZqcy1leHByZXNzXCI7XHJcblxyXG5pbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gXCIuL3NlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24uanNcIjtcclxucmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCk7XHJcblxyXG5jb25zdCBoYW1idXJnZXJNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJoYW1idXJnZXItbWVudS1jb250YWluZXJcIlxyXG4pO1xyXG5jb25zdCBoYW1idXJnZXJNZW51QnV0dG9uT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwiaGFtYnVyZ2VyLW1lbnUtYnV0dG9uLW9wZW5lZFwiXHJcbik7XHJcbmNvbnN0IGhhbWJ1cmdlck1lbnVCdXR0b25DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwiaGFtYnVyZ2VyLW1lbnUtYnV0dG9uLWNsb3NlZFwiXHJcbik7XHJcbmNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1jb250ZW50XCIpO1xyXG5sZXQgaGFtYnVyZ2VyT3BlbmVkID0gZmFsc2U7XHJcbmhhbWJ1cmdlck1lbnVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoIWhhbWJ1cmdlck9wZW5lZCkge1xyXG4gICAgaGVhZGVyQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xyXG4gICAgaGFtYnVyZ2VyTWVudUJ1dHRvbk9wZW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIGhhbWJ1cmdlck1lbnVCdXR0b25DbG9zZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgaGVhZGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRlbnQtb3BlbmVkXCIpO1xyXG4gICAgaGFtYnVyZ2VyTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyLW1lbnUtY29udGFpbmVyLW9wZW5lZFwiKTtcclxuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGhhbWJ1cmdlck9wZW5lZCA9IHRydWU7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChoYW1idXJnZXJPcGVuZWQpIHtcclxuICAgIGNvbnN0IGhlYWRlckNvbnRlbnRNb3VzZVBvcyA9IHtcclxuICAgICAgeDpcclxuICAgICAgICAoZS5jbGllbnRYIC0gaGVhZGVyQ29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54KSAvXHJcbiAgICAgICAgaGVhZGVyQ29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcclxuICAgICAgeTpcclxuICAgICAgICAoZS5jbGllbnRZIC0gaGVhZGVyQ29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55KSAvXHJcbiAgICAgICAgaGVhZGVyQ29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXHJcbiAgICB9O1xyXG4gICAgaWYgKFxyXG4gICAgICBoZWFkZXJDb250ZW50TW91c2VQb3MueCA8IDAgfHxcclxuICAgICAgaGVhZGVyQ29udGVudE1vdXNlUG9zLnggPiAxIHx8XHJcbiAgICAgIGhlYWRlckNvbnRlbnRNb3VzZVBvcy55IDwgMCB8fFxyXG4gICAgICBoZWFkZXJDb250ZW50TW91c2VQb3MueSA+IDFcclxuICAgICkge1xyXG4gICAgICBoYW1idXJnZXJNZW51QnV0dG9uT3Blbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICBoYW1idXJnZXJNZW51QnV0dG9uQ2xvc2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgaGVhZGVyQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImNsb3NlSGVhZGVyQ29udGVudCAxMDBtc1wiO1xyXG4gICAgICBoYW1idXJnZXJNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgXCJoYW1idXJnZXItbWVudS1jb250YWluZXItb3BlbmVkXCJcclxuICAgICAgKTtcclxuICAgICAgaGVhZGVyQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLWNvbnRlbnQtb3BlbmVkXCIpO1xyXG4gICAgICBoYW1idXJnZXJPcGVuZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxubGV0IGltcG9ydGVkRmlsZTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlYWRJbXBvcnQoZSkge1xyXG4gIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcy5pdGVtKDApO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmaWxlLnRleHQoKTtcclxuXHJcbiAgaW1wb3J0ZWRGaWxlID0gY29udGVudDtcclxufVxyXG5cclxuY29uc3QgZGF0YUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0YVwiKTtcclxuZGF0YUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNyZWF0ZU1vZGFsKFxyXG4gICAgXCJZb3VyIGRhdGFcIiwgLy8gdGl0bGVcclxuICAgIFtcIkhlcmUgeW91IGNhbiBFeHBvcnQgb3IgSW1wb3J0IHlvdXIgZGF0YSB0byBub3QgbG9zZSB5b3VyIHByb2dyZXNzXCJdLCAvLyBjb250ZW50XHJcbiAgICBbXHJcbiAgICAgIFwiSW1wb3J0XCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjcmVhdGVNb2RhbChcclxuICAgICAgICAgIFwiSW1wb3J0XCIsXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiSW1wb3J0IGFuIGV4aXN0aW5nIGRhdGEuanNvbiBmaWxlIHRvIGxvYWQgaXQuXCIsXHJcbiAgICAgICAgICAgIFwiV0FSTklORzogSW1wb3J0aW5nIGNsZWFycyB5b3VyIGN1cnJlbnQgbG9jYWwgZGF0YS5cIixcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgIGA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImltcG9ydGVkLWZpbGVcIiBzdHlsZT1cInBhZGRpbmc6IDJyZW07YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czogMXJlbTtib3JkZXI6ICMwRDExMTcgMnB0IGRhc2hlZDsgY29sb3I6ICMwMTA0MDk7XCIgYWNjZXB0PVwiLmpzb25cIj5gLFxyXG4gICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgXCIjaW1wb3J0ZWQtZmlsZVwiLCByZWFkSW1wb3J0KTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgXCLCoMKgSW1wb3J0wqDCoFwiLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGltcG9ydEpzb24oaW1wb3J0ZWRGaWxlKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZU1vZGFsKFwiRG9uZVwiLCBbXCJEYXRlIEltcG9ydGVkXCJdLCBbXCLCoMKgT2vCoMKgXCIsICgpID0+IHsgfV0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVNb2RhbChcIkVycm9yXCIsIFtcIkludmFsaWQgSW1wb3J0XCJdLCBbXCLCoMKgT2vCoMKgXCIsICgpID0+IHsgfV0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJFeHBvcnRcIixcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2dldEV4cG9ydEpzb24oKV0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgIGEuZG93bmxvYWQgPSBgTXkgTUNRIE1hdGUgZGF0YSAke3RvZGF5RGF0ZX0uanNvbmA7XHJcbiAgICAgICAgYS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgYS5jbGljaygpOyAvLyBUcmlnZ2VyIGRvd25sb2FkXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRFeHBvcnRKc29uKCkge1xyXG4gIGxldCBkaWN0ID0gbG9jYWxTdG9yYWdlO1xyXG4gIGRlbGV0ZSBkaWN0W1wicGVyc2lzdDp2aWV3ZXJcIl07XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRpY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRKc29uKGNvbnRlbnQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShjb250ZW50KTtcclxuICAgIGNvbnN0IHJlZ2V4UGF0dGVybiA9IG5ldyBSZWdFeHAoL1thLXpdezN9W29hY11bMC05XXsyfVt3c21dWzEtM11bc10/L2dpbSk7XHJcbiAgICBPYmplY3Qua2V5cyhwYXJzZWQpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoa2V5Lm1hdGNoKHJlZ2V4UGF0dGVybikpICE9IEpTT04uc3RyaW5naWZ5KFtgJHtrZXl9YF0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJybyBnYXZlIHVzIGEgYnJva2VuIGZpbGUg8J+YlFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBPYmplY3Qua2V5cyhwYXJzZWQpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHBhcnNlZFtrZXldKTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJicm8gZ2F2ZSB1cyBhIGJyb2tlbiBmaWxlIPCfmJRcIik7XHJcbiAgfVxyXG59XHJcblxyXG5pbXBvcnQgSlNDb25mZXR0aSBmcm9tIFwianMtY29uZmV0dGlcIjtcclxuY29uc3QganNDb25mZXR0aSA9IG5ldyBKU0NvbmZldHRpKCk7XHJcblxyXG4vLyBHTE9CQUwgVkFSSUFCTEVTXHJcbmxldCBnbG9iYWxQZGZWaWV3ZXI7XHJcbmxldCBnbG9iYWxQZXJpb2RpY1RhYmxlUGRmVmlld2VyO1xyXG5sZXQgZ2xvYmFsVGltZXI7XHJcbmxldCB0aW1lckludGVydmFsO1xyXG5sZXQgdXNlckFuc3dlcnM7XHJcbmNvbnN0IHN1YmplY3RDb2RlID0ge1xyXG4gIENSQmlvbG9neTogXCIwNjEwXCIsXHJcbiAgQ1JDaGVtaXN0cnk6IFwiMDYyMFwiLFxyXG4gIENSQ29tYmluZWQ6IFwiMDY1M1wiLFxyXG4gIENSUGh5c2ljczogXCIwNjI1XCIsXHJcbiAgT0xCaW9sb2d5OiBcIjA2MTBcIixcclxuICBPTENoZW1pc3RyeTogXCIwNjIwXCIsXHJcbiAgT0xDb21iaW5lZDogXCIwNjUzXCIsXHJcbiAgT0xFY29ub21pY3M6IFwiMDQ1NVwiLFxyXG4gIE9MUGh5c2ljczogXCIwNjI1XCIsXHJcbiAgQUxCaW9sb2d5OiBcIjk3MDBcIixcclxuICBBTENoZW1pc3RyeTogXCI5NzAxXCIsXHJcbiAgQUxQaHlzaWNzOiBcIjk3MDJcIixcclxufTtcclxuXHJcbmxldCByYW5kb21JbWFnZXNBcnJheSA9IGdlbmVyYXRlUmFuZG9tSW1hZ2VzKCk7XHJcbmxldCByYW5kb21JbWFnZUNvdW50ZXIgPSAwO1xyXG5cclxuLy8gY3JlZGl0cyBidXR0b24gYmVoYXZpb3JcclxuY29uc3QgY3JlZGl0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlZGl0c1wiKTtcclxuY3JlZGl0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNyZWF0ZU1vZGFsKFxyXG4gICAgXCJDcmVkaXRcIiwgLy8gdGl0bGVcclxuICAgIFtcclxuICAgICAgXCJUaGFua3MgRm9yIHVzaW5nIDxicj4gdGhlIHdlYnNpdGUgPDNcIixcclxuICAgICAgYFdlYnNpdGUgY3JlYXRlZCBieSA8YnI+IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vWmllZERldlwiIHRhcmdldD1cIl9ibGFua1wiPlppZWQ8L2E+ICYgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vbWFyLWVsc2hlcmJpbnlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TaGVyYm88L2E+YCxcclxuICAgICAgYFNwZWNpYWwgVGhhbmtzIHRvOiA8YnI+IDxhIGhyZWY9XCJodHRwczovL2djZWd1aWRlLm5ldC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HQ0UgR3VpZGU8L2E+IDxicj4gPGEgaHJlZj1cImh0dHBzOi8vcGFwYWNhbWJyaWRnZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UGFwYSBDYW1icmlkZ2U8L2E+YCxcclxuICAgICAgYFJlcG9zaXRvcnk6IDxicj4gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9aaWVkRGV2L21jcS1tYXRlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TUNRIE1hdGU8L2E+YCxcclxuICAgIF0gLy8gY29udGVudFxyXG4gICk7XHJcbn0pO1xyXG5cclxuLy8gcGF0aCBkaXJlY3Rpb24gYmVoYXZpb3JcclxuY29uc3QgbW92ZUJhY2t3YXJkc0Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrd2FyZHMtYXJyb3dcIik7XHJcbmNvbnN0IG1vdmVGb3J3YXJkc0Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkcy1hcnJvd1wiKTtcclxuXHJcbmxldCBiYWNrd2FyZF9zdGFjayA9IFtdO1xyXG5sZXQgY3VycmVudF9wYXRoID0gJyc7IC8vIGltcG9ydGFudCB0byBwdXQgaW4gZGF0YXR5cGUgYW5kIGZvcm1hdCBvZiByb290IHBhdGhcclxubGV0IGZvcndhcmRfc3RhY2sgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGlzQmFja3dhcmRBdmFpbGFibGUoKSB7XHJcbiAgcmV0dXJuIGJhY2t3YXJkX3N0YWNrLmxlbmd0aCA+IDAgPyAxIDogMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGb3J3YXJkQXZhaWxhYmxlKCkge1xyXG4gIHJldHVybiBmb3J3YXJkX3N0YWNrLmxlbmd0aCA+IDAgPyAxIDogMDtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFja3dhcmRQYXRoKCkge1xyXG4gIHJhbmRvbUltYWdlc0FycmF5ID0gZ2VuZXJhdGVSYW5kb21JbWFnZXMoKTtcclxuICByYW5kb21JbWFnZUNvdW50ZXIgPSAwO1xyXG4gIGlmIChiYWNrd2FyZF9zdGFjay5sZW5ndGggPT0gMCkgcmV0dXJuIDA7XHJcbiAgZm9yd2FyZF9zdGFjay5wdXNoKGN1cnJlbnRfcGF0aCk7XHJcbiAgY3VycmVudF9wYXRoID0gYmFja3dhcmRfc3RhY2sucG9wKCk7XHJcblxyXG4gIGlmIChpc0JhY2t3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgIG1vdmVCYWNrd2FyZHNBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb3ZlQmFja3dhcmRzQXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9XHJcbiAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGF0aEVsZW1lbnQodHJ1ZSk7XHJcbiAgdXBkYXRlUGF0aEljb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUGF0aChuZXdfcGF0aCkge1xyXG4gIGlmIChjdXJyZW50X3BhdGggPT0gbmV3X3BhdGgpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJhbmRvbUltYWdlc0FycmF5ID0gZ2VuZXJhdGVSYW5kb21JbWFnZXMoKTtcclxuICByYW5kb21JbWFnZUNvdW50ZXIgPSAwO1xyXG4gIGJhY2t3YXJkX3N0YWNrLnB1c2goY3VycmVudF9wYXRoKTtcclxuICBmb3J3YXJkX3N0YWNrID0gW107XHJcbiAgY3VycmVudF9wYXRoID0gbmV3X3BhdGg7XHJcblxyXG4gIGlmIChpc0JhY2t3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgIG1vdmVCYWNrd2FyZHNBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb3ZlQmFja3dhcmRzQXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9XHJcbiAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGF0aEVsZW1lbnQoKTtcclxuICB1cGRhdGVQYXRoSWNvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkUGF0aCgpIHtcclxuICByYW5kb21JbWFnZXNBcnJheSA9IGdlbmVyYXRlUmFuZG9tSW1hZ2VzKCk7XHJcbiAgcmFuZG9tSW1hZ2VDb3VudGVyID0gMDtcclxuICBpZiAoZm9yd2FyZF9zdGFjay5sZW5ndGggPT0gMCkgcmV0dXJuIDA7XHJcbiAgYmFja3dhcmRfc3RhY2sucHVzaChjdXJyZW50X3BhdGgpO1xyXG4gIGN1cnJlbnRfcGF0aCA9IGZvcndhcmRfc3RhY2sucG9wKCk7XHJcbiAgaWYgKGlzQmFja3dhcmRBdmFpbGFibGUoKSkge1xyXG4gICAgbW92ZUJhY2t3YXJkc0Fycm93LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vdmVCYWNrd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuICBpZiAoaXNGb3J3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgIG1vdmVGb3J3YXJkc0Fycm93LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vdmVGb3J3YXJkc0Fycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQYXRoRWxlbWVudCh0cnVlKTtcclxuICB1cGRhdGVQYXRoSWNvbigpO1xyXG59XHJcblxyXG5sZXQgdGltZW91dDtcclxuZnVuY3Rpb24gdXBkYXRlUGF0aEVsZW1lbnQoKSB7XHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aFwiKTtcclxuICBjb25zdCBwYXRoVGV4dCA9IGN1cnJlbnRfcGF0aC5zcGxpdChcIj5cIik7XHJcbiAgbWFpbi5zdHlsZS5hbmltYXRpb24gPSBcIjIwMG1zIGNsb3NlTWVudSBmb3J3YXJkcyBlYXNlXCI7XHJcblxyXG4gIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHJcbiAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKGdsb2JhbFBkZlZpZXdlciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZ2xvYmFsUGRmVmlld2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ2xvYmFsUGRmVmlld2VyKTtcclxuICAgICAgZ2xvYmFsUGRmVmlld2VyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKGdsb2JhbFBlcmlvZGljVGFibGVQZGZWaWV3ZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdsb2JhbFBlcmlvZGljVGFibGVQZGZWaWV3ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcclxuICAgICAgICBnbG9iYWxQZXJpb2RpY1RhYmxlUGRmVmlld2VyXHJcbiAgICAgICk7XHJcbiAgICAgIGdsb2JhbFBlcmlvZGljVGFibGVQZGZWaWV3ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2xvYmFsVGltZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdsb2JhbFRpbWVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ2xvYmFsVGltZXIpO1xyXG4gICAgICBnbG9iYWxUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmICh0aW1lckludGVydmFsICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICB0aW1lckludGVydmFsID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhUZXh0Lmxlbmd0aCA9PSA1KSB7XHJcbiAgICAgIHBhdGguaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgcGF0aC5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVQYXRoRWxlbWVudChgJHtwYXRoVGV4dFswXS50b1VwcGVyQ2FzZSgpfSAke3BhdGhUZXh0WzFdfWAsIHRydWUpXHJcbiAgICAgICk7XHJcbiAgICAgIHBhdGguYXBwZW5kQ2hpbGQoY3JlYXRlUGF0aEVsZW1lbnQocGF0aFRleHRbMl0pKTtcclxuICAgICAgcGF0aC5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVQYXRoRWxlbWVudChcclxuICAgICAgICAgIHBhdGhUZXh0WzNdID09IFwibVwiXHJcbiAgICAgICAgICAgID8gXCJGZWIgLyBNYXJcIlxyXG4gICAgICAgICAgICA6IHBhdGhUZXh0WzNdID09IFwic1wiXHJcbiAgICAgICAgICAgICAgPyBcIk1heSAvIEp1blwiXHJcbiAgICAgICAgICAgICAgOiBcIk9jdCAvIE5vdlwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBwYXRoLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZVBhdGhFbGVtZW50KGBWYXJpYW50ICR7TnVtYmVyKHBhdGhUZXh0WzRdKSArIDF9YCwgZmFsc2UsIHRydWUpXHJcbiAgICAgICk7XHJcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgY3JlYXRlQnViYmxlU2hlZXRNZW51KFxyXG4gICAgICAgICAgcGF0aFRleHRbMF0sXHJcbiAgICAgICAgICBwYXRoVGV4dFsxXSxcclxuICAgICAgICAgIHBhdGhUZXh0WzJdLFxyXG4gICAgICAgICAgcGF0aFRleHRbM10sXHJcbiAgICAgICAgICBwYXRoVGV4dFs0XVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocGF0aFRleHQubGVuZ3RoID09IDQpIHtcclxuICAgICAgcGF0aC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBwYXRoLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZVBhdGhFbGVtZW50KGAke3BhdGhUZXh0WzBdLnRvVXBwZXJDYXNlKCl9ICR7cGF0aFRleHRbMV19YCwgdHJ1ZSlcclxuICAgICAgKTtcclxuICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChwYXRoVGV4dFsyXSkpO1xyXG4gICAgICBwYXRoLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZVBhdGhFbGVtZW50KFxyXG4gICAgICAgICAgcGF0aFRleHRbM10gPT0gXCJtXCJcclxuICAgICAgICAgICAgPyBcIkZlYiAvIE1hclwiXHJcbiAgICAgICAgICAgIDogcGF0aFRleHRbM10gPT0gXCJzXCJcclxuICAgICAgICAgICAgICA/IFwiTWF5IC8gSnVuXCJcclxuICAgICAgICAgICAgICA6IFwiT2N0IC8gTm92XCIsXHJcbiAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgQ3JlYXRlU3ViTWVudShwYXRoVGV4dFswXSwgcGF0aFRleHRbMV0sIHBhdGhUZXh0WzJdLCBwYXRoVGV4dFszXSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocGF0aFRleHQubGVuZ3RoID09IDMpIHtcclxuICAgICAgcGF0aC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBwYXRoLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZVBhdGhFbGVtZW50KGAke3BhdGhUZXh0WzBdLnRvVXBwZXJDYXNlKCl9ICR7cGF0aFRleHRbMV19YCwgdHJ1ZSlcclxuICAgICAgKTtcclxuICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChwYXRoVGV4dFsyXSwgZmFsc2UsIHRydWUpKTtcclxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KHBhdGhUZXh0WzBdLCBwYXRoVGV4dFsxXSwgcGF0aFRleHRbMl0pKTtcclxuICAgIH0gZWxzZSBpZiAocGF0aFRleHQubGVuZ3RoID09IDIpIHtcclxuICAgICAgcGF0aC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBwYXRoLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZVBhdGhFbGVtZW50KFxyXG4gICAgICAgICAgYCR7cGF0aFRleHRbMF0udG9VcHBlckNhc2UoKX0gJHtwYXRoVGV4dFsxXX1gLFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ3JlYXRlU3ViTWVudShwYXRoVGV4dFswXSwgcGF0aFRleHRbMV0pKTtcclxuICAgIH0gZWxzZSBpZiAocGF0aFRleHQubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgcGF0aC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVNZW51KCkpO1xyXG4gICAgfVxyXG4gICAgbWFpbi5zdHlsZS5hbmltYXRpb24gPSBcIjIwMG1zIG9wZW5NZW51IGZvcndhcmRzIGVhc2VcIjtcclxuICB9LCAxMDApO1xyXG59XHJcblxyXG5tb3ZlQmFja3dhcmRzQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoaXNCYWNrd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICBiYWNrd2FyZFBhdGgoKTtcclxuICB9XHJcbn0pO1xyXG5tb3ZlRm9yd2FyZHNBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChpc0ZvcndhcmRBdmFpbGFibGUoKSkge1xyXG4gICAgZm9yd2FyZFBhdGgoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gIGlmIChlLmJ1dHRvbnMgPT0gOCkge1xyXG4gICAgaWYgKGlzQmFja3dhcmRBdmFpbGFibGUoKSkge1xyXG4gICAgICBiYWNrd2FyZFBhdGgoKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUuYnV0dG9ucyA9PSAxNikge1xyXG4gICAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgIGZvcndhcmRQYXRoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGF0aEVsZW1lbnQodGl0bGUsIGZpcnN0LCBsYXN0KSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGNvbnN0IHBhdGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwYXRoRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIGlmICh0aXRsZS5zcGxpdChcIiBcIilbMF0gPT0gXCJDUlwiKSB7XHJcbiAgICBwYXRoRWxlbWVudC50ZXh0Q29udGVudCA9IGBDb3JlICR7dGl0bGUuc3BsaXQoXCIgXCIpWzFdfWA7XHJcbiAgfVxyXG5cclxuICBpZiAoIWZpcnN0KSB7XHJcbiAgICBjb25zdCBhcnJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJzdmdcIlxyXG4gICAgKTtcclxuICAgIGFycm93RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjMyXCIpO1xyXG4gICAgYXJyb3dFbGVtZW50LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjMyXCIpO1xyXG4gICAgYXJyb3dFbGVtZW50LnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjU2IDI1NlwiKTtcclxuICAgIGFycm93RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xyXG4gICAgYXJyb3dFbGVtZW50LmlubmVySFRNTCA9IGA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0xODQuNDkgMTM2LjQ5bC04MCA4MGExMiAxMiAwIDAgMS0xNy0xN0wxNTkgMTI4TDg3LjUxIDU2LjQ5YTEyIDEyIDAgMSAxIDE3LTE3bDgwIDgwYTEyIDEyIDAgMCAxLS4wMiAxN1wiIC8+YDtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYXJyb3dFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGlmICghbGFzdCkge1xyXG4gICAgcGF0aEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBhdGgtY2xpY2thYmxlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXRoRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicGF0aC1ub3QtY2xpY2thYmxlXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGF0aFRleHQgPSBjdXJyZW50X3BhdGguc3BsaXQoXCI+XCIpO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocGF0aEVsZW1lbnQpO1xyXG4gIHBhdGhFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAodGl0bGUgPT0gYCR7cGF0aFRleHRbMF0udG9VcHBlckNhc2UoKX0gJHtwYXRoVGV4dFsxXX1gKSB7XHJcbiAgICAgIGNoYW5nZVBhdGgoYCR7cGF0aFRleHRbMF19PiR7cGF0aFRleHRbMV19YCk7XHJcbiAgICB9IGVsc2UgaWYgKHRpdGxlID09IHBhdGhUZXh0WzJdKSB7XHJcbiAgICAgIGNoYW5nZVBhdGgoYCR7cGF0aFRleHRbMF19PiR7cGF0aFRleHRbMV19PiR7cGF0aFRleHRbMl19YCk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aXRsZSA9PSBcIkZlYiAvIE1hclwiIHx8XHJcbiAgICAgIHRpdGxlID09IFwiTWF5IC8gSnVuXCIgfHxcclxuICAgICAgdGl0bGUgPT0gXCJPY3QgLyBOb3ZcIlxyXG4gICAgKSB7XHJcbiAgICAgIGNoYW5nZVBhdGgoYCR7cGF0aFRleHRbMF19PiR7cGF0aFRleHRbMV19PiR7cGF0aFRleHRbMl19PiR7cGF0aFRleHRbM119YCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXRoSWNvbigpIHtcclxuICBjb25zdCBwYXRoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aC1pY29uXCIpO1xyXG5cclxuICBpZiAoY3VycmVudF9wYXRoLnNwbGl0KFwiPlwiKVsxXSA9PSB1bmRlZmluZWQpIHtcclxuICAgIHBhdGhJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yMjIuMTQgMTA1Ljg1bC04MC04MGEyMCAyMCAwIDAgMC0yOC4yOCAwbC04MCA4MEExOS44NiAxOS44NiAwIDAgMCAyOCAxMjB2OTZhMTIgMTIgMCAwIDAgMTIgMTJoNjRhMTIgMTIgMCAwIDAgMTItMTJ2LTUyaDI0djUyYTEyIDEyIDAgMCAwIDEyIDEyaDY0YTEyIDEyIDAgMCAwIDEyLTEydi05NmExOS44NiAxOS44NiAwIDAgMC01Ljg2LTE0LjE1TTIwNCAyMDRoLTQwdi01MmExMiAxMiAwIDAgMC0xMi0xMmgtNDhhMTIgMTIgMCAwIDAtMTIgMTJ2NTJINTJ2LTgyLjM1bDc2LTc2bDc2IDc2WlwiIC8+PC9zdmc+YDtcclxuICB9IGVsc2UgaWYgKGN1cnJlbnRfcGF0aC5zcGxpdChcIj5cIilbMV0gPT0gXCJCaW9sb2d5XCIpIHtcclxuICAgIHBhdGhJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCJNMjI0IDIwNGgtMTJhOTIuMSA5Mi4xIDAgMCAwLTY0LTE0My4yMlYzMmEyMCAyMCAwIDAgMC0yMC0yMEg4MGEyMCAyMCAwIDAgMC0yMCAyMHY5NmEyMCAyMCAwIDAgMCAyMCAyMGg0OGEyMCAyMCAwIDAgMCAyMC0yMFY4NS4wOEE2OC4xIDY4LjEgMCAwIDEgMjA0IDE1MmE2Ny4zOSA2Ny4zOSAwIDAgMS0yNC4xOCA1MkgzMmExMiAxMiAwIDAgMCAwIDI0aDE5MmExMiAxMiAwIDAgMCAwLTI0bS0xMDAtODBIODRWMzZoNDBabS01MiA2NGExMiAxMiAwIDAgMSAwLTI0aDY0YTEyIDEyIDAgMCAxIDAgMjRaXCIvPjwvc3ZnPmA7XHJcbiAgfSBlbHNlIGlmIChjdXJyZW50X3BhdGguc3BsaXQoXCI+XCIpWzFdID09IFwiUGh5c2ljc1wiKSB7XHJcbiAgICBwYXRoSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIwOS44NCA0Ny40NEE5MS40MiA5MS40MiAwIDAgMCAxNDQuNjIgMjBoLS4zNWE5MS40NCA5MS40NCAwIDAgMC02NS4xMiAyN2wtNjEuMzkgNjIuMTdhMjAgMjAgMCAwIDAgLjA4IDI4LjIxTDQ2LjUgMTY2YTE5Ljg5IDE5Ljg5IDAgMCAwIDE0LjE1IDUuODZoLjExYTE5Ljg2IDE5Ljg2IDAgMCAwIDE0LjItNmw2MC44Ny02Mi4zOWExMi4wNyAxMi4wNyAwIDAgMSAxNi43Ny0uMTJhMTEuNjMgMTEuNjMgMCAwIDEgMy41IDguMzVhMTIuODUgMTIuODUgMCAwIDEtMy42NiA5LjExTDkwLjE5IDE4MWEyMCAyMCAwIDAgMC0uMjEgMjguNWwyOC42NiAyOC42NmEyMC4wOCAyMC4wOCAwIDAgMCAyOC4xNS4xNGw2MS43Ni02MC40NGwuMDktLjA5YzM2LjAxLTM1Ljk5IDM2LjU0LTk0LjQ2IDEuMi0xMzAuMzNNNjAuNjIgMTQ2LjIxbC0yMy0yM2wxOC4xOS0xOC40MWwyMi44OCAyMi44OFptNzIuMiA3Mi4xOGwtMjMtMjNsMTguNjEtMThsMjIuODggMjIuODdabTU4Ljg5LTU3LjYybC0yMy4yMyAyMi43M2wtMjIuNzgtMjIuNzdMMTY5LjIxIDEzOGwuMTUtLjE0YTM3IDM3IDAgMCAwIDEwLjc0LTI2LjM3YTM1LjQ0IDM1LjQ0IDAgMCAwLTEwLjg1LTI1LjQxYTM2LjIgMzYuMiAwIDAgMC01MC40NC40OGwtLjEuMTFsLTIzLjI1IDIzLjgybC0yMi43OC0yMi43N2wyMy41LTIzLjhBNjcuNTUgNjcuNTUgMCAwIDEgMTQ0LjI3IDQ0aC4yNmE2Ny42MiA2Ny42MiAwIDAgMSA0OC4yMSAyMC4yOWMyNi4xMSAyNi40OSAyNS42NCA2OS43Ni0xLjAzIDk2LjQ4XCIvPjwvc3ZnPmA7XHJcbiAgfSBlbHNlIGlmIChjdXJyZW50X3BhdGguc3BsaXQoXCI+XCIpWzFdID09IFwiQ2hlbWlzdHJ5XCIpIHtcclxuICAgIHBhdGhJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCJNMjI1LjE1IDE5Ny43MUwxNjQgOTUuODFWNDRoNGExMiAxMiAwIDAgMCAwLTI0SDg4YTEyIDEyIDAgMCAwIDAgMjRoNHY1MS44MWwtNjEuMTUgMTAxLjlBMjAgMjAgMCAwIDAgNDggMjI4aDE2MGEyMCAyMCAwIDAgMCAxNy4xNS0zMC4yOU0xNDAgNDR2NTUuMTRhMTIgMTIgMCAwIDAgMS43MSA2LjE3bDM1LjEzIDU4LjU0Yy0xMC43OS44Ni0yNS4xNS0xLjMxLTQzLjQyLTEwLjU2Yy0xNC03LjA4LTI3LjQ2LTExLjMzLTQwLjI3LTEyLjc2bDIxLjE0LTM1LjIyYTEyIDEyIDAgMCAwIDEuNzEtNi4xN1Y0NFpNNTUuMDYgMjA0TDc5IDE2NC4xOWMxMy0xLjExIDI3LjYyIDIuNDIgNDMuNjIgMTAuNTJjMTkuNjEgOS45MiAzNi4yNSAxMy4zMSA0OS44NSAxMy4zMWE3NS40NCA3NS40NCAwIDAgMCAxNy42NC0yLjAybDEwLjgzIDE4WlwiLz48L3N2Zz5gO1xyXG4gIH0gZWxzZSBpZiAoY3VycmVudF9wYXRoLnNwbGl0KFwiPlwiKVsxXSA9PSBcIkVjb25vbWljc1wiKSB7XHJcbiAgICBwYXRoSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIzNiAyMDhhMTIgMTIgMCAwIDEtMTIgMTJIMzJhMTIgMTIgMCAwIDEtMTItMTJWNDhhMTIgMTIgMCAwIDEgMjQgMHY5OWw0My41MS00My41MmExMiAxMiAwIDAgMSAxNyAwTDEyOCAxMjdsNDMtNDNoLTExYTEyIDEyIDAgMCAxIDAtMjRoNDBhMTIgMTIgMCAwIDEgMTIgMTJ2NDBhMTIgMTIgMCAwIDEtMjQgMHYtMTFsLTUxLjUxIDUxLjUyYTEyIDEyIDAgMCAxLTE3IDBMOTYgMTI5bC01MiA1MnYxNWgxODBhMTIgMTIgMCAwIDEgMTIgMTJcIi8+PC9zdmc+YDtcclxuICB9IGVsc2UgaWYgKGN1cnJlbnRfcGF0aC5zcGxpdChcIj5cIilbMV0gPT0gXCJDb21iaW5lZFwiKSB7XHJcbiAgICBwYXRoSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIxOS4yMyAxNTkuMmExOTYuNjYgMTk2LjY2IDAgMCAwLTE4LTMxLjJhMTk2LjY2IDE5Ni42NiAwIDAgMCAxOC0zMS4yYzExLjg0LTI2LjMxIDExLjY5LTQ3LjQ4LS40My01OS42cy0zMy4yOS0xMi4yNy01OS42LS40M2ExOTYuNjYgMTk2LjY2IDAgMCAwLTMxLjIgMThhMTk2LjY2IDE5Ni42NiAwIDAgMC0zMS4yLTE4Yy0yNi4zMS0xMS44NC00Ny40OC0xMS42OS01OS42LjQzcy0xMi4yNyAzMy4yOS0uNDMgNTkuNmExOTYuNjYgMTk2LjY2IDAgMCAwIDE4IDMxLjJhMTk2LjY2IDE5Ni42NiAwIDAgMC0xOCAzMS4yYy0xMS44NCAyNi4zMS0xMS42OSA0Ny40OC40MyA1OS42YzYuMTMgNi4xMyAxNC41OCA5LjIgMjQuOCA5LjJjMTAgMCAyMS43Ny0yLjkyIDM0Ljc2LTguNzdhMTk2LjY2IDE5Ni42NiAwIDAgMCAzMS4yLTE4YTE5Ni42NiAxOTYuNjYgMCAwIDAgMzEuMiAxOGMxMyA1Ljg1IDI0Ljc0IDguNzcgMzQuNzYgOC43N2MxMC4yNiAwIDE4LjcxLTMuMDcgMjQuODQtOS4yYzEyLjE2LTEyLjEyIDEyLjMxLTMzLjI5LjQ3LTU5LjZtLTE3LjQxLTEwNWM1LjI1IDUuMjYgMS43OSAyNi0xNiA1My43OGMtNS42MS02LjY2LTExLjY1LTEzLjI1LTE4LjA3LTE5LjY3UzE1NC43IDc1LjgzIDE0OCA3MC4yMmMyNy44Mi0xNy44MyA0OC41Ni0yMS4yOSA1My44Mi0xNi4wNFpNMTcxLjI0IDEyOGEyODguNiAyODguNiAwIDAgMS0yMC41MSAyMi43M0EyODguNiAyODguNiAwIDAgMSAxMjggMTcxLjI0YTI4OC42IDI4OC42IDAgMCAxLTIyLjczLTIwLjUxQTI4OC42IDI4OC42IDAgMCAxIDg0Ljc2IDEyOEEyOTguNTUgMjk4LjU1IDAgMCAxIDEyOCA4NC43NmEyODYuODMgMjg2LjgzIDAgMCAxIDIyLjczIDIwLjUxQTI4Ni44MyAyODYuODMgMCAwIDEgMTcxLjI0IDEyOE01NC4xOCA1NC4xOGMxLjQ2LTEuNDUgNC4xLTIuMjQgNy43NS0yLjI0YzkuNTMgMCAyNS45NCA1LjM5IDQ2IDE4LjI4Yy02LjY2IDUuNjEtMTMuMjUgMTEuNjUtMTkuNjcgMTguMDdTNzUuODMgMTAxLjMgNzAuMjIgMTA4QzUyLjM5IDgwLjE4IDQ4LjkzIDU5LjQ0IDU0LjE4IDU0LjE4bTAgMTQ3LjY0Yy01LjI1LTUuMjYtMS43OS0yNiAxNi01My43OGM1LjYxIDYuNjYgMTEuNjUgMTMuMjUgMTguMDcgMTkuNjdzMTMgMTIuNDYgMTkuNjcgMTguMDdjLTI3Ljc0IDE3LjgzLTQ4LjQ4IDIxLjI5LTUzLjc0IDE2LjA0bTE0Ny42NCAwYy01LjI2IDUuMjUtMjYgMS43OS01My43OC0xNmM2LjY2LTUuNjEgMTMuMjUtMTEuNjUgMTkuNjctMTguMDdzMTIuNDYtMTMgMTguMDctMTkuNjdjMTcuODMgMjcuNzQgMjEuMjkgNDguNDggMTYuMDQgNTMuNzRNMTQ0IDEyOGExNiAxNiAwIDEgMS0xNi0xNmExNiAxNiAwIDAgMSAxNiAxNlwiLz48L3N2Zz5gO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGF0aEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdGgtaWNvblwiKTtcclxucGF0aEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoY3VycmVudF9wYXRoICE9IFwiaG9tZVwiKSB7XHJcbiAgICBjaGFuZ2VQYXRoKFwiaG9tZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gc2lkZSBiYXJcclxuY29uc3Qgb3BlbmVkU2lkZUJhckFycmF5ID0gW107XHJcblxyXG4vLyBjcmVhdGluZyBzaWRlIGJ1dHRvbnMgZm9yIG9sIHN1YmplY3RzXHJcbmNvbnN0IHNpZGVHcm91cE9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWdyb3VwLW9sXCIpO1xyXG5PYmplY3Qua2V5cyhvbFN1YmplY3RzTVMpLmZvckVhY2goKHN1YmplY3QpID0+IHtcclxuICBjb25zdCBzdWJqZWN0RWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbih7XHJcbiAgICBsZXZlbDogXCJvbFwiLFxyXG4gICAgc3ViamVjdDogc3ViamVjdCxcclxuICAgIGdlbmVyYXRlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2lkZVN1YmplY3RZZWFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIGBzaWRlLW9sLSR7c3ViamVjdH0teWVhcnNgXHJcbiAgICAgICk7XHJcbiAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XSkuZm9yRWFjaCgoeWVhcikgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuZWQgPVxyXG4gICAgICAgICAgb3BlbmVkU2lkZUJhckFycmF5LmluZGV4T2YoYG9sLSR7c3ViamVjdH0tJHt5ZWFyfWApID09IC0xXHJcbiAgICAgICAgICAgID8gZmFsc2VcclxuICAgICAgICAgICAgOiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHllYXJFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKHtcclxuICAgICAgICAgIG9wZW5lZDogb3BlbmVkLFxyXG4gICAgICAgICAgbGV2ZWw6IFwib2xcIixcclxuICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgICAgICB5ZWFyOiB5ZWFyLFxyXG4gICAgICAgICAgZ2VuZXJhdGVDb250YWluZXJDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9wZW5lZCkge1xyXG4gICAgICAgICAgICAgIG9wZW5lZFNpZGVCYXJBcnJheS5wdXNoKGBvbC0ke3N1YmplY3R9LSR7eWVhcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzaWRlWWVhclNlc3Npb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgYHNpZGUtb2wtJHtzdWJqZWN0fS0ke3llYXJ9LXNlc3Npb25zYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl0pLmZvckVhY2goKHNlc3Npb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShvbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl0pICE9XHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbbnVsbCwgbnVsbCwgbnVsbF0pXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3BlbmVkID1cclxuICAgICAgICAgICAgICAgICAgb3BlbmVkU2lkZUJhckFycmF5LmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgYG9sLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259YFxyXG4gICAgICAgICAgICAgICAgICApID09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25FbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgb3BlbmVkOiBvcGVuZWQsXHJcbiAgICAgICAgICAgICAgICAgIGxldmVsOiBcIm9sXCIsXHJcbiAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgICAgICAgICAgICAgIHllYXI6IHllYXIsXHJcbiAgICAgICAgICAgICAgICAgIHNlc3Npb246IHNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BlbmVkU2lkZUJhckFycmF5LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBvbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWBcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZGVTZXNzaW9uVmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgICAgICAgICAgIGBzaWRlLW9sLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzYFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob2xTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHZhcmlhbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XSAhPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBcIm9sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogeWVhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb246IHNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiB2YXJpYW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pZCA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc2lkZS1vbC1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fWAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaWQgPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNpZGUtb2wtJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fS10aXRsZWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBvbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufT4ke3ZhcmlhbnR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVTZXNzaW9uVmFyaWFudHMuYXBwZW5kQ2hpbGQodmFyaWFudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBvcGVuZWRTaWRlQmFyQXJyYXkuaW5kZXhPZihcclxuICAgICAgICAgICAgICAgICAgICAgIGBvbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BlbmVkU2lkZUJhckFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZGVTZXNzaW9uVmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgICAgICAgICAgIGBzaWRlLW9sLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzYFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudHNMZW5ndGggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2lkZVNlc3Npb25WYXJpYW50cy5jaGlsZE5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhbnRzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVTZXNzaW9uVmFyaWFudHMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZVNlc3Npb25WYXJpYW50cy5jaGlsZE5vZGVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlkID09XHJcbiAgICAgICAgICAgICAgICAgICAgYHNpZGUtb2wtYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259YCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXRpdGxlYFxyXG4gICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufWApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNpZGVZZWFyU2Vzc2lvbnMuYXBwZW5kQ2hpbGQoc2Vzc2lvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVtb3ZlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gb3BlbmVkU2lkZUJhckFycmF5LmluZGV4T2YoYG9sLSR7c3ViamVjdH0tJHt5ZWFyfWApO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgICBvcGVuZWRTaWRlQmFyQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzaWRlWWVhclNlc3Npb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgYHNpZGUtb2wtJHtzdWJqZWN0fS0ke3llYXJ9LXNlc3Npb25zYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uc0xlbmd0aCA9IHNpZGVZZWFyU2Vzc2lvbnMuY2hpbGROb2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Vzc2lvbnNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzaWRlWWVhclNlc3Npb25zLnJlbW92ZUNoaWxkKHNpZGVZZWFyU2Vzc2lvbnMuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5ZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgZS50YXJnZXQuaWQgPT0gYHNpZGUtb2wtYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfWAgfHxcclxuICAgICAgICAgICAgZS50YXJnZXQuaWQgPT0gYHNpZGUtb2wtJHtzdWJqZWN0fS0ke3llYXJ9LXRpdGxlYFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVBhdGgoYG9sPiR7c3ViamVjdH0+JHt5ZWFyfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzaWRlU3ViamVjdFllYXJzLmFwcGVuZENoaWxkKHllYXJFbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2lkZVN1YmplY3RZZWFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIGBzaWRlLW9sLSR7c3ViamVjdH0teWVhcnNgXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHllYXJMZW5ndGggPSBzaWRlU3ViamVjdFllYXJzLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHllYXJMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzaWRlU3ViamVjdFllYXJzLnJlbW92ZUNoaWxkKHNpZGVTdWJqZWN0WWVhcnMuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuICBzdWJqZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZS50YXJnZXQuaWQgPT0gYHNpZGUtb2wtYnV0dG9uLSR7c3ViamVjdH1gIHx8XHJcbiAgICAgIGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLSR7c3ViamVjdH0tdGl0bGVgXHJcbiAgICApIHtcclxuICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fWApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzaWRlR3JvdXBPbC5hcHBlbmRDaGlsZChzdWJqZWN0RWxlbWVudCk7XHJcbn0pO1xyXG5cclxuLy8gY3JlYXRpbmcgc2lkZSBidXR0b25zIGZvciBhbCBzdWJqZWN0c1xyXG5jb25zdCBzaWRlR3JvdXBBbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1ncm91cC1hbFwiKTtcclxuT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TKS5mb3JFYWNoKChzdWJqZWN0KSA9PiB7XHJcbiAgY29uc3Qgc3ViamVjdEVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oe1xyXG4gICAgbGV2ZWw6IFwiYWxcIixcclxuICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICBnZW5lcmF0ZUNvbnRhaW5lckNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpZGVTdWJqZWN0WWVhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBgc2lkZS1hbC0ke3N1YmplY3R9LXllYXJzYFxyXG4gICAgICApO1xyXG4gICAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVNbc3ViamVjdF0pLmZvckVhY2goKHllYXIpID0+IHtcclxuICAgICAgICBsZXQgb3BlbmVkID1cclxuICAgICAgICAgIG9wZW5lZFNpZGVCYXJBcnJheS5pbmRleE9mKGBhbC0ke3N1YmplY3R9LSR7eWVhcn1gKSA9PSAtMVxyXG4gICAgICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgICAgIDogdHJ1ZTtcclxuICAgICAgICBjb25zdCB5ZWFyRWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbih7XHJcbiAgICAgICAgICBvcGVuZWQ6IG9wZW5lZCxcclxuICAgICAgICAgIGxldmVsOiBcImFsXCIsXHJcbiAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxyXG4gICAgICAgICAgeWVhcjogeWVhcixcclxuICAgICAgICAgIGdlbmVyYXRlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvcGVuZWQpIHtcclxuICAgICAgICAgICAgICBvcGVuZWRTaWRlQmFyQXJyYXkucHVzaChgYWwtJHtzdWJqZWN0fS0ke3llYXJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc2lkZVllYXJTZXNzaW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICAgIGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS1zZXNzaW9uc2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdKS5mb3JFYWNoKChzZXNzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKSAhPVxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW251bGwsIG51bGwsIG51bGxdKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wZW5lZCA9XHJcbiAgICAgICAgICAgICAgICAgIG9wZW5lZFNpZGVCYXJBcnJheS5pbmRleE9mKFxyXG4gICAgICAgICAgICAgICAgICAgIGBhbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWBcclxuICAgICAgICAgICAgICAgICAgKSA9PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgID8gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXNzaW9uRWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgIG9wZW5lZDogb3BlbmVkLFxyXG4gICAgICAgICAgICAgICAgICBsZXZlbDogXCJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxyXG4gICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgICBzZXNzaW9uOiBzZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvbnRhaW5lckNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZFNpZGVCYXJBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgYWwtJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWRlU2Vzc2lvblZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBgc2lkZS1hbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS12YXJpYW50c2BcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFsU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXSkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgICAgICh2YXJpYW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl1bdmFyaWFudF0gIT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50RWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IHllYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uOiBzZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogdmFyaWFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaWQgPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNpZGUtYWwtYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH1gIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlkID09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH0tdGl0bGVgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYWw+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn0+JHt2YXJpYW50fWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlU2Vzc2lvblZhcmlhbnRzLmFwcGVuZENoaWxkKHZhcmlhbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUNvbnRhaW5lckNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gb3BlbmVkU2lkZUJhckFycmF5LmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICBgYWwtJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZFNpZGVCYXJBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWRlU2Vzc2lvblZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBgc2lkZS1hbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS12YXJpYW50c2BcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRzTGVuZ3RoID1cclxuICAgICAgICAgICAgICAgICAgICAgIHNpZGVTZXNzaW9uVmFyaWFudHMuY2hpbGROb2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYW50c0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlU2Vzc2lvblZhcmlhbnRzLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVTZXNzaW9uVmFyaWFudHMuY2hpbGROb2Rlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pZCA9PVxyXG4gICAgICAgICAgICAgICAgICAgIGBzaWRlLWFsLWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWAgfHxcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS10aXRsZWBcclxuICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn1gKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzaWRlWWVhclNlc3Npb25zLmFwcGVuZENoaWxkKHNlc3Npb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlbW92ZUNvbnRhaW5lckNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IG9wZW5lZFNpZGVCYXJBcnJheS5pbmRleE9mKGBhbC0ke3N1YmplY3R9LSR7eWVhcn1gKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgb3BlbmVkU2lkZUJhckFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc2lkZVllYXJTZXNzaW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICAgIGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS1zZXNzaW9uc2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbnNMZW5ndGggPSBzaWRlWWVhclNlc3Npb25zLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlc3Npb25zTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2lkZVllYXJTZXNzaW9ucy5yZW1vdmVDaGlsZChzaWRlWWVhclNlc3Npb25zLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmlkID09IGBzaWRlLWFsLWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn1gIHx8XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmlkID09IGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS10aXRsZWBcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9PiR7eWVhcn1gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2lkZVN1YmplY3RZZWFycy5hcHBlbmRDaGlsZCh5ZWFyRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUNvbnRhaW5lckNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpZGVTdWJqZWN0WWVhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBgc2lkZS1hbC0ke3N1YmplY3R9LXllYXJzYFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB5ZWFyTGVuZ3RoID0gc2lkZVN1YmplY3RZZWFycy5jaGlsZE5vZGVzLmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFyTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2lkZVN1YmplY3RZZWFycy5yZW1vdmVDaGlsZChzaWRlU3ViamVjdFllYXJzLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgc3ViamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUudGFyZ2V0LmlkID09IGBzaWRlLWFsLWJ1dHRvbi0ke3N1YmplY3R9YCB8fFxyXG4gICAgICBlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC0ke3N1YmplY3R9LXRpdGxlYFxyXG4gICAgKSB7XHJcbiAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH1gKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2lkZUdyb3VwQWwuYXBwZW5kQ2hpbGQoc3ViamVjdEVsZW1lbnQpO1xyXG59KTtcclxuXHJcbi8vIC8vIGNyZWF0aW5nIHNpZGUgYnV0dG9uIGZvciBjb3JlIHN1YmplY3RzXHJcbmNvbnN0IHNpZGVHcm91cENyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlLWdyb3VwLWNyXCIpO1xyXG5PYmplY3Qua2V5cyhjclN1YmplY3RzTVMpLmZvckVhY2goKHN1YmplY3QpID0+IHtcclxuICBjb25zdCBzdWJqZWN0RWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbih7XHJcbiAgICBsZXZlbDogXCJjclwiLFxyXG4gICAgc3ViamVjdDogc3ViamVjdCxcclxuICAgIGdlbmVyYXRlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2lkZVN1YmplY3RZZWFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIGBzaWRlLWNyLSR7c3ViamVjdH0teWVhcnNgXHJcbiAgICAgICk7XHJcbiAgICAgIE9iamVjdC5rZXlzKGNyU3ViamVjdHNNU1tzdWJqZWN0XSkuZm9yRWFjaCgoeWVhcikgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuZWQgPVxyXG4gICAgICAgICAgb3BlbmVkU2lkZUJhckFycmF5LmluZGV4T2YoYGNyLSR7c3ViamVjdH0tJHt5ZWFyfWApID09IC0xXHJcbiAgICAgICAgICAgID8gZmFsc2VcclxuICAgICAgICAgICAgOiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHllYXJFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKHtcclxuICAgICAgICAgIG9wZW5lZDogb3BlbmVkLFxyXG4gICAgICAgICAgbGV2ZWw6IFwiY3JcIixcclxuICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgICAgICB5ZWFyOiB5ZWFyLFxyXG4gICAgICAgICAgZ2VuZXJhdGVDb250YWluZXJDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9wZW5lZCkge1xyXG4gICAgICAgICAgICAgIG9wZW5lZFNpZGVCYXJBcnJheS5wdXNoKGBjci0ke3N1YmplY3R9LSR7eWVhcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzaWRlWWVhclNlc3Npb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgYHNpZGUtY3ItJHtzdWJqZWN0fS0ke3llYXJ9LXNlc3Npb25zYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjclN1YmplY3RzTVNbc3ViamVjdF1beWVhcl0pLmZvckVhY2goKHNlc3Npb24pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjclN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl0pICE9XHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbbnVsbCwgbnVsbCwgbnVsbF0pXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3BlbmVkID1cclxuICAgICAgICAgICAgICAgICAgb3BlbmVkU2lkZUJhckFycmF5LmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgYGNyLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259YFxyXG4gICAgICAgICAgICAgICAgICApID09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25FbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgb3BlbmVkOiBvcGVuZWQsXHJcbiAgICAgICAgICAgICAgICAgIGxldmVsOiBcImNyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgICAgICAgICAgICAgIHllYXI6IHllYXIsXHJcbiAgICAgICAgICAgICAgICAgIHNlc3Npb246IHNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BlbmVkU2lkZUJhckFycmF5LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBjci0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWBcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZGVTZXNzaW9uVmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgICAgICAgICAgIGBzaWRlLWNyLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzYFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY3JTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHZhcmlhbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XSAhPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBcImNyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogeWVhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb246IHNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiB2YXJpYW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pZCA9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc2lkZS1jci1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fWAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaWQgPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNpZGUtY3ItJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fS10aXRsZWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjcj4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufT4ke3ZhcmlhbnR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVTZXNzaW9uVmFyaWFudHMuYXBwZW5kQ2hpbGQodmFyaWFudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBvcGVuZWRTaWRlQmFyQXJyYXkuaW5kZXhPZihcclxuICAgICAgICAgICAgICAgICAgICAgIGBjci0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BlbmVkU2lkZUJhckFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZGVTZXNzaW9uVmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgICAgICAgICAgIGBzaWRlLWNyLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzYFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudHNMZW5ndGggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2lkZVNlc3Npb25WYXJpYW50cy5jaGlsZE5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhbnRzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVTZXNzaW9uVmFyaWFudHMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZVNlc3Npb25WYXJpYW50cy5jaGlsZE5vZGVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlkID09XHJcbiAgICAgICAgICAgICAgICAgICAgYHNpZGUtY3ItYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259YCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlkID09IGBzaWRlLWNyLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXRpdGxlYFxyXG4gICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBjcj4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufWApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNpZGVZZWFyU2Vzc2lvbnMuYXBwZW5kQ2hpbGQoc2Vzc2lvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVtb3ZlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gb3BlbmVkU2lkZUJhckFycmF5LmluZGV4T2YoYGNyLSR7c3ViamVjdH0tJHt5ZWFyfWApO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgICBvcGVuZWRTaWRlQmFyQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzaWRlWWVhclNlc3Npb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgYHNpZGUtY3ItJHtzdWJqZWN0fS0ke3llYXJ9LXNlc3Npb25zYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uc0xlbmd0aCA9IHNpZGVZZWFyU2Vzc2lvbnMuY2hpbGROb2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Vzc2lvbnNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzaWRlWWVhclNlc3Npb25zLnJlbW92ZUNoaWxkKHNpZGVZZWFyU2Vzc2lvbnMuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5ZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgZS50YXJnZXQuaWQgPT0gYHNpZGUtY3ItYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfWAgfHxcclxuICAgICAgICAgICAgZS50YXJnZXQuaWQgPT0gYHNpZGUtY3ItJHtzdWJqZWN0fS0ke3llYXJ9LXRpdGxlYFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVBhdGgoYGNyPiR7c3ViamVjdH0+JHt5ZWFyfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzaWRlU3ViamVjdFllYXJzLmFwcGVuZENoaWxkKHllYXJFbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQ29udGFpbmVyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2lkZVN1YmplY3RZZWFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIGBzaWRlLWNyLSR7c3ViamVjdH0teWVhcnNgXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHllYXJMZW5ndGggPSBzaWRlU3ViamVjdFllYXJzLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHllYXJMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzaWRlU3ViamVjdFllYXJzLnJlbW92ZUNoaWxkKHNpZGVTdWJqZWN0WWVhcnMuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuICBzdWJqZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZS50YXJnZXQuaWQgPT0gYHNpZGUtY3ItYnV0dG9uLSR7c3ViamVjdH1gIHx8XHJcbiAgICAgIGUudGFyZ2V0LmlkID09IGBzaWRlLWNyLSR7c3ViamVjdH0tdGl0bGVgXHJcbiAgICApIHtcclxuICAgICAgY2hhbmdlUGF0aChgY3I+JHtzdWJqZWN0fWApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzaWRlR3JvdXBDci5hcHBlbmRDaGlsZChzdWJqZWN0RWxlbWVudCk7XHJcbn0pO1xyXG5cclxuLy8gY3JlYXRpbmcgaG9tZSBtZW51XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lTWVudSgpIHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob21lLmlkID0gXCJob21lXCI7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuXHJcbiAgY29uc3Qgb2xUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBvbFRpdGxlLnRleHRDb250ZW50ID0gXCJPTCBTdWJqZWN0c1wiO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQob2xUaXRsZSk7XHJcblxyXG4gIGNvbnN0IG9sQ2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNUykuZm9yRWFjaCgoc3ViamVjdCkgPT4ge1xyXG4gICAgY29uc3Qgc3ViamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oXCJvbFwiLCBzdWJqZWN0KTtcclxuICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZChzdWJqZWN0RWxlbWVudCk7XHJcbiAgICBzdWJqZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBvbENhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmplY3RFbGVtZW50KTtcclxuICB9KTtcclxuICBob21lLmFwcGVuZENoaWxkKG9sQ2FyZHNDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIkFMIFN1YmplY3RzXCI7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChhbFRpdGxlKTtcclxuXHJcbiAgY29uc3QgYWxDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TKS5mb3JFYWNoKChzdWJqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBzdWJqZWN0RWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbihcImFsXCIsIHN1YmplY3QpO1xyXG4gICAgY3JlYXRlUm90YXRpbmdDYXJkKHN1YmplY3RFbGVtZW50KTtcclxuICAgIHN1YmplY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFsQ2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViamVjdEVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoYWxDYXJkc0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGNyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgY3JUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29yZSBTdWJqZWN0c1wiO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JUaXRsZSk7XHJcblxyXG4gIGNvbnN0IGNyQ2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIE9iamVjdC5rZXlzKGNyU3ViamVjdHNNUykuZm9yRWFjaCgoc3ViamVjdCkgPT4ge1xyXG4gICAgY29uc3Qgc3ViamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oXCJjclwiLCBzdWJqZWN0KTtcclxuICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZChzdWJqZWN0RWxlbWVudCk7XHJcbiAgICBzdWJqZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VQYXRoKGBjcj4ke3N1YmplY3R9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjckNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmplY3RFbGVtZW50KTtcclxuICB9KTtcclxuICBob21lLmFwcGVuZENoaWxkKGNyQ2FyZHNDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuLy8gY3JlYXRpbmcgdGhlIHN1YiBtZW51IGJ1dHRvbnNcclxuZnVuY3Rpb24gQ3JlYXRlU3ViTWVudShsZXZlbCwgc3ViamVjdCwgeWVhciwgc2Vzc2lvbikge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUuaWQgPSBgU2VsZWN0IGEgJHtzZXNzaW9uID09IHVuZGVmaW5lZFxyXG4gICAgPyB5ZWFyID09IHVuZGVmaW5lZFxyXG4gICAgICA/IFwieWVhcnMtbWVudVwiXHJcbiAgICAgIDogXCJzZXNzaW9ucy1tZW51XCJcclxuICAgIDogXCJ2YXJpYW50cy1tZW51XCJcclxuICAgIH1gO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcInN1Yi1tZW51XCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gYFNlbGVjdCBhICR7c2Vzc2lvbiA9PSB1bmRlZmluZWQgPyAoeWVhciA9PSB1bmRlZmluZWQgPyBcInllYXJcIiA6IFwic2Vzc2lvblwiKSA6IFwidmFyaWFudFwiXHJcbiAgICB9YDtcclxuICBtZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBpZiAobGV2ZWwudG9Mb3dlckNhc2UoKSA9PSBcImNyXCIpIHtcclxuICAgIGlmIChzZXNzaW9uID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoeWVhciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhjclN1YmplY3RzTVNbc3ViamVjdF0pLmZvckVhY2goKHllYXIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHllYXJFbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKFxyXG4gICAgICAgICAgICBcImNyXCIsXHJcbiAgICAgICAgICAgIHN1YmplY3QsXHJcbiAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByYW5kb21JbWFnZXNBcnJheVtyYW5kb21JbWFnZUNvdW50ZXJdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmFuZG9tSW1hZ2VDb3VudGVyKys7XHJcbiAgICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQoeWVhckVsZW1lbnQpO1xyXG4gICAgICAgICAgeWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlUGF0aChgY3I+JHtzdWJqZWN0fT4ke3llYXJ9YCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZWFyRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoY3JTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdKS5mb3JFYWNoKChzZXNzaW9uKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXSkgIT1cclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW251bGwsIG51bGwsIG51bGxdKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb25FbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKFxyXG4gICAgICAgICAgICAgIFwiY3JcIixcclxuICAgICAgICAgICAgICBzdWJqZWN0LFxyXG4gICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgc2Vzc2lvbixcclxuICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgcmFuZG9tSW1hZ2VzQXJyYXlbcmFuZG9tSW1hZ2VDb3VudGVyXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByYW5kb21JbWFnZUNvdW50ZXIrKztcclxuICAgICAgICAgICAgY3JlYXRlUm90YXRpbmdDYXJkKHNlc3Npb25FbGVtZW50KTtcclxuICAgICAgICAgICAgc2Vzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBjcj4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vzc2lvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBPYmplY3Qua2V5cyhjclN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl0pLmZvckVhY2goKHZhcmlhbnQpID0+IHtcclxuICAgICAgICBpZiAoY3JTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dW3ZhcmlhbnRdICE9IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKFxyXG4gICAgICAgICAgICBcImNyXCIsXHJcbiAgICAgICAgICAgIHN1YmplY3QsXHJcbiAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgIHNlc3Npb24sXHJcbiAgICAgICAgICAgIHZhcmlhbnQsXHJcbiAgICAgICAgICAgIHJhbmRvbUltYWdlc0FycmF5W3JhbmRvbUltYWdlQ291bnRlcl1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByYW5kb21JbWFnZUNvdW50ZXIrKztcclxuICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZCh2YXJpYW50RWxlbWVudCk7XHJcbiAgICAgICAgICB2YXJpYW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VQYXRoKGBjcj4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufT4ke3ZhcmlhbnR9YCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2YXJpYW50RWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGxldmVsLnRvTG93ZXJDYXNlKCkgPT0gXCJvbFwiKSB7XHJcbiAgICBpZiAoc2Vzc2lvbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHllYXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2xTdWJqZWN0c01TW3N1YmplY3RdKS5mb3JFYWNoKCh5ZWFyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB5ZWFyRWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbihcclxuICAgICAgICAgICAgXCJvbFwiLFxyXG4gICAgICAgICAgICBzdWJqZWN0LFxyXG4gICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcmFuZG9tSW1hZ2VzQXJyYXlbcmFuZG9tSW1hZ2VDb3VudGVyXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJhbmRvbUltYWdlQ291bnRlcisrO1xyXG4gICAgICAgICAgY3JlYXRlUm90YXRpbmdDYXJkKHllYXJFbGVtZW50KTtcclxuICAgICAgICAgIHllYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZVBhdGgoYG9sPiR7c3ViamVjdH0+JHt5ZWFyfWApO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoeWVhckVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXSkuZm9yRWFjaCgoc2Vzc2lvbikgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShvbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl0pICE9XHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFtudWxsLCBudWxsLCBudWxsXSlcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uRWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbihcclxuICAgICAgICAgICAgICBcIm9sXCIsXHJcbiAgICAgICAgICAgICAgc3ViamVjdCxcclxuICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgIHNlc3Npb24sXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIHJhbmRvbUltYWdlc0FycmF5W3JhbmRvbUltYWdlQ291bnRlcl1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmFuZG9tSW1hZ2VDb3VudGVyKys7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZChzZXNzaW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHNlc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlc3Npb25FbGVtZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgT2JqZWN0LmtleXMob2xTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKS5mb3JFYWNoKCh2YXJpYW50KSA9PiB7XHJcbiAgICAgICAgaWYgKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCB2YXJpYW50RWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbihcclxuICAgICAgICAgICAgXCJvbFwiLFxyXG4gICAgICAgICAgICBzdWJqZWN0LFxyXG4gICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICBzZXNzaW9uLFxyXG4gICAgICAgICAgICB2YXJpYW50LFxyXG4gICAgICAgICAgICByYW5kb21JbWFnZXNBcnJheVtyYW5kb21JbWFnZUNvdW50ZXJdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmFuZG9tSW1hZ2VDb3VudGVyKys7XHJcbiAgICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQodmFyaWFudEVsZW1lbnQpO1xyXG4gICAgICAgICAgdmFyaWFudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn0+JHt2YXJpYW50fWApO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQodmFyaWFudEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChsZXZlbC50b0xvd2VyQ2FzZSgpID09IFwiYWxcIikge1xyXG4gICAgaWYgKHNlc3Npb24gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh5ZWFyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGFsU3ViamVjdHNNU1tzdWJqZWN0XSkuZm9yRWFjaCgoeWVhcikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeWVhckVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oXHJcbiAgICAgICAgICAgIFwiYWxcIixcclxuICAgICAgICAgICAgc3ViamVjdCxcclxuICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJhbmRvbUltYWdlc0FycmF5W3JhbmRvbUltYWdlQ291bnRlcl1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByYW5kb21JbWFnZUNvdW50ZXIrKztcclxuICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZCh5ZWFyRWxlbWVudCk7XHJcbiAgICAgICAgICB5ZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9PiR7eWVhcn1gKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHllYXJFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl0pLmZvckVhY2goKHNlc3Npb24pID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKSAhPVxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbbnVsbCwgbnVsbCwgbnVsbF0pXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oXHJcbiAgICAgICAgICAgICAgXCJhbFwiLFxyXG4gICAgICAgICAgICAgIHN1YmplY3QsXHJcbiAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICBzZXNzaW9uLFxyXG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICByYW5kb21JbWFnZXNBcnJheVtyYW5kb21JbWFnZUNvdW50ZXJdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJhbmRvbUltYWdlQ291bnRlcisrO1xyXG4gICAgICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQoc2Vzc2lvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICBzZXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH0+JHt5ZWFyfT4ke3Nlc3Npb259YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZXNzaW9uRWxlbWVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGFsU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXSkuZm9yRWFjaCgodmFyaWFudCkgPT4ge1xyXG4gICAgICAgIGlmIChhbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl1bdmFyaWFudF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgdmFyaWFudEVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oXHJcbiAgICAgICAgICAgIFwiYWxcIixcclxuICAgICAgICAgICAgc3ViamVjdCxcclxuICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgc2Vzc2lvbixcclxuICAgICAgICAgICAgdmFyaWFudCxcclxuICAgICAgICAgICAgcmFuZG9tSW1hZ2VzQXJyYXlbcmFuZG9tSW1hZ2VDb3VudGVyXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJhbmRvbUltYWdlQ291bnRlcisrO1xyXG4gICAgICAgICAgY3JlYXRlUm90YXRpbmdDYXJkKHZhcmlhbnRFbGVtZW50KTtcclxuICAgICAgICAgIHZhcmlhbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH0+JHt5ZWFyfT4ke3Nlc3Npb259PiR7dmFyaWFudH1gKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhcmlhbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBtZW51LmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdGF0aW5nQ2FyZChlbGVtZW50Q29udGFpbmVyKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRDb250YWluZXIuY2hpbGRyZW5bMF07XHJcblxyXG4gIGVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQsIHNjYWxlIDE1MG1zIGVhc2UsIGJveC1zaGFkb3cgMTUwbXMgZWFzZWA7XHJcbiAgICBjb25zdCBhVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByb3RhdGVDYXJkKGUpO1xyXG4gICAgfSwgNTApO1xyXG4gICAgY29uc3QgYW5vdGhlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYHNjYWxlIDE1MG1zIGVhc2UsIGJveC1zaGFkb3cgMTUwbXMgZWFzZWA7XHJcbiAgICAgIGVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCByb3RhdGVDYXJkKTtcclxuICAgIH0sIDEwMCk7XHJcblxyXG4gICAgZWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dChhVGltZW91dCk7XHJcbiAgICAgIGNsZWFyVGltZW91dChhbm90aGVyVGltZW91dCk7XHJcblxyXG4gICAgICBlbGVtZW50Q29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcm90YXRlQ2FyZCk7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQsIHNjYWxlIDE1MG1zIGVhc2UsIGJveC1zaGFkb3cgMTUwbXMgZWFzZWA7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYGA7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gcm90YXRlQ2FyZChlKSB7XHJcbiAgICBjb25zdCBtb3VzZVBvcyA9IHtcclxuICAgICAgeDpcclxuICAgICAgICAoKGUuY2xpZW50WCAtIGVsZW1lbnRDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCkgL1xyXG4gICAgICAgICAgZWxlbWVudENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkgKlxyXG4gICAgICAgICg0NSAvIDIpIC1cclxuICAgICAgICA0NSAvIDIgLyAyLFxyXG4gICAgICB5OlxyXG4gICAgICAgICgoZS5jbGllbnRZIC0gZWxlbWVudENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55KSAvXHJcbiAgICAgICAgICBlbGVtZW50Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCkgKlxyXG4gICAgICAgICg0NSAvIDIpIC1cclxuICAgICAgICA0NSAvIDIgLyAyLFxyXG4gICAgfTtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHttb3VzZVBvcy54XHJcbiAgICAgIH1kZWcpIHJvdGF0ZVgoJHstbW91c2VQb3MueX1kZWcpIHNjYWxlKDEuMDI1KWA7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdWJibGVTaGVldE1lbnUoXHJcbiAgbGV2ZWwsXHJcbiAgc3ViamVjdCxcclxuICB5ZWFyLFxyXG4gIHNlc3Npb24sXHJcbiAgdmFyaWFudCxcclxuICB1c2VMb2NhbEFuc3dlcnNcclxuKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudS5pZCA9IFwiYnViYmxlLXNoZWV0LW1lbnVcIjtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJidWJibGUtc2hlZXQtbWVudVwiKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImJ1YmJsZS1zaGVldC10aXRsZVwiKTtcclxuICB0aXRsZS5pZCA9IFwiYnViYmxlLXNoZWV0LXRpdGxlXCI7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkV2ZXJ5dGhpbmcgaXMgc2V0LiBOb3cgeW91IGNhbiBzdGFydCBzb2x2aW5nLlwiO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICBjb25zdCBwZGZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgcGRmTGluay5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLXNoZWV0LXBkZi1saW5rXCIpO1xyXG4gIHBkZkxpbmsuaWQgPSBcImJ1YmJsZS1zaGVldC1wZGYtbGlua1wiO1xyXG4gIHBkZkxpbmsudGV4dENvbnRlbnQgPSBcIk9wZW4gcGRmIGluIGV4dGVybmFsIHRhYlwiO1xyXG4gIHBkZkxpbmsuaHJlZiA9IGAuL3BkZnMvJHtsZXZlbC50b1VwcGVyQ2FzZSgpfS0ke3N1YmplY3R9LyR7eWVhcn0vJHtzZXNzaW9uID09IFwic1wiID8gXCJNYXktSnVuXCIgOiBzZXNzaW9uID09IFwid1wiID8gXCJPY3QtTm92XCIgOiBcIkZlYi1NYXJcIlxyXG4gICAgfS8ke3N1YmplY3RDb2RlW2xldmVsLnRvVXBwZXJDYXNlKCkgKyBzdWJqZWN0XX1fJHtzZXNzaW9ufSR7TnVtYmVyKHllYXIpIC0gMjAwMFxyXG4gICAgfV9xcF8ke3N1YmplY3QgPT0gXCJFY29ub21pY3NcIiA/IDEgOiBsZXZlbCA9PSBcImFsXCIgfHwgbGV2ZWwgPT0gXCJjclwiID8gMSA6IDJ9JHtOdW1iZXIodmFyaWFudCkgKyAxXHJcbiAgICB9LnBkZmA7XHJcbiAgcGRmTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChwZGZMaW5rKTtcclxuXHJcbiAgY29uc3QgYnViYmxlU2hlZXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmlkID0gXCJidWJibGUtc2hlZXQtY29udGFpbmVyXCI7XHJcbiAgYnViYmxlU2hlZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1YmJsZS1zaGVldC1jb250YWluZXJcIik7XHJcblxyXG4gIGxldCBtb2RlbEFuc3dlcnMgPVxyXG4gICAgbGV2ZWwgPT0gXCJjclwiXHJcbiAgICAgID8gY3JTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dW3ZhcmlhbnRdXHJcbiAgICAgIDogbGV2ZWwgPT0gXCJvbFwiXHJcbiAgICAgICAgPyBvbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl1bdmFyaWFudF1cclxuICAgICAgICA6IGxldmVsID09IFwiYWxcIlxyXG4gICAgICAgICAgPyBhbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl1bdmFyaWFudF1cclxuICAgICAgICAgIDogXCJcIjtcclxuICBsZXQgbG9jYWxLZXkgPSBgJHtzdWJqZWN0LnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDAsIDMpfSR7bGV2ZWxcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAuc3Vic3RyaW5nKDAsIDEpfSR7TnVtYmVyKHllYXIpIC0gMjAwMH0ke3Nlc3Npb259JHtOdW1iZXIodmFyaWFudCkgKyAxfWA7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSkgPT0gbnVsbCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgIGxvY2FsS2V5LFxyXG4gICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiA0MCB9KS5maWxsKFwiTlwiKS5qb2luKFwiXCIpXHJcbiAgICApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxLZXkgKyBcInNcIiwgXCJcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICB1c2VMb2NhbEFuc3dlcnMgfHxcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIsIFwiXCIpICE9IFwiXCIgfHxcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIsIFwiXCIpICE9IG51bGxcclxuICApIHtcclxuICAgIHVzZXJBbnN3ZXJzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxLZXkpLnNwbGl0KFwiXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1c2VyQW5zd2VycyA9IEFycmF5KDQwKS5maWxsKFwiTlwiKTtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBxdWVzdGlvbk51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBxdWVzdGlvbk51bWJlci5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWJveFwiKTtcclxuICAgIHF1ZXN0aW9uTnVtYmVyLnRleHRDb250ZW50ID0gaSArIDE7XHJcbiAgICBxdWVzdGlvbk51bWJlci5pZCA9IGBxdWVzdGlvbi0ke2l9LW51bWJlcmA7XHJcbiAgICBidWJibGVTaGVldENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbk51bWJlcik7XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb25BID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWJveFwiKTtcclxuICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWNob2ljZVwiKTtcclxuICAgIHF1ZXN0aW9uQS50ZXh0Q29udGVudCA9IFwiQVwiO1xyXG4gICAgcXVlc3Rpb25BLmlkID0gYHF1ZXN0aW9uLSR7aX0tYWA7XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb25CID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWJveFwiKTtcclxuICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWNob2ljZVwiKTtcclxuICAgIHF1ZXN0aW9uQi50ZXh0Q29udGVudCA9IFwiQlwiO1xyXG4gICAgcXVlc3Rpb25CLmlkID0gYHF1ZXN0aW9uLSR7aX0tYmA7XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb25DID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWJveFwiKTtcclxuICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWNob2ljZVwiKTtcclxuICAgIHF1ZXN0aW9uQy50ZXh0Q29udGVudCA9IFwiQ1wiO1xyXG4gICAgcXVlc3Rpb25DLmlkID0gYHF1ZXN0aW9uLSR7aX0tY2A7XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb25EID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWJveFwiKTtcclxuICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWNob2ljZVwiKTtcclxuICAgIHF1ZXN0aW9uRC50ZXh0Q29udGVudCA9IFwiRFwiO1xyXG4gICAgcXVlc3Rpb25ELmlkID0gYHF1ZXN0aW9uLSR7aX0tZGA7XHJcblxyXG4gICAgaWYgKHVzZXJBbnN3ZXJzW2ldID09IFwiQVwiKSB7XHJcbiAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgcXVlc3Rpb25CLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgIH0gZWxzZSBpZiAodXNlckFuc3dlcnNbaV0gPT0gXCJCXCIpIHtcclxuICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LmFkZChcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyQW5zd2Vyc1tpXSA9PSBcIkNcIikge1xyXG4gICAgICBxdWVzdGlvbkEuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgcXVlc3Rpb25DLmNsYXNzTGlzdC5hZGQoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICBxdWVzdGlvbkQuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXJBbnN3ZXJzW2ldID09IFwiRFwiKSB7XHJcbiAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgcXVlc3Rpb25CLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBxdWVzdGlvbkEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKHVzZXJBbnN3ZXJzW2ldICE9IFwiQVwiKSB7XHJcbiAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5hZGQoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHVzZXJBbnN3ZXJzW2ldID0gXCJBXCI7XHJcbiAgICAgICAgbGV0IGxvY2FsQW5zd2Vyc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5KS5zcGxpdChcIlwiKTtcclxuICAgICAgICBsb2NhbEFuc3dlcnNTdHJpbmdbaV0gPSBcIkFcIjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbEtleSwgbG9jYWxBbnN3ZXJzU3RyaW5nLmpvaW4oXCJcIikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgcXVlc3Rpb25DLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICB1c2VyQW5zd2Vyc1tpXSA9IFwiTlwiO1xyXG4gICAgICAgIGxldCBsb2NhbEFuc3dlcnNTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSkuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgbG9jYWxBbnN3ZXJzU3RyaW5nW2ldID0gXCJOXCI7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxLZXksIGxvY2FsQW5zd2Vyc1N0cmluZy5qb2luKFwiXCIpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBidWJibGVTaGVldENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbkEpO1xyXG5cclxuICAgIHF1ZXN0aW9uQi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAodXNlckFuc3dlcnNbaV0gIT0gXCJCXCIpIHtcclxuICAgICAgICBxdWVzdGlvbkEuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgcXVlc3Rpb25CLmNsYXNzTGlzdC5hZGQoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICBxdWVzdGlvbkQuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgdXNlckFuc3dlcnNbaV0gPSBcIkJcIjtcclxuICAgICAgICBsZXQgbG9jYWxBbnN3ZXJzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxLZXkpLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGxvY2FsQW5zd2Vyc1N0cmluZ1tpXSA9IFwiQlwiO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsS2V5LCBsb2NhbEFuc3dlcnNTdHJpbmcuam9pbihcIlwiKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHVzZXJBbnN3ZXJzW2ldID0gXCJOXCI7XHJcbiAgICAgICAgbGV0IGxvY2FsQW5zd2Vyc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5KS5zcGxpdChcIlwiKTtcclxuICAgICAgICBsb2NhbEFuc3dlcnNTdHJpbmdbaV0gPSBcIk5cIjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbEtleSwgbG9jYWxBbnN3ZXJzU3RyaW5nLmpvaW4oXCJcIikpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uQik7XHJcblxyXG4gICAgcXVlc3Rpb25DLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyQW5zd2Vyc1tpXSAhPSBcIkNcIikge1xyXG4gICAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgcXVlc3Rpb25DLmNsYXNzTGlzdC5hZGQoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICB1c2VyQW5zd2Vyc1tpXSA9IFwiQ1wiO1xyXG4gICAgICAgIGxldCBsb2NhbEFuc3dlcnNTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSkuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgbG9jYWxBbnN3ZXJzU3RyaW5nW2ldID0gXCJDXCI7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxLZXksIGxvY2FsQW5zd2Vyc1N0cmluZy5qb2luKFwiXCIpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVzdGlvbkEuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgcXVlc3Rpb25CLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICBxdWVzdGlvbkQuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgdXNlckFuc3dlcnNbaV0gPSBcIk5cIjtcclxuICAgICAgICBsZXQgbG9jYWxBbnN3ZXJzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxLZXkpLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGxvY2FsQW5zd2Vyc1N0cmluZ1tpXSA9IFwiTlwiO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsS2V5LCBsb2NhbEFuc3dlcnNTdHJpbmcuam9pbihcIlwiKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYnViYmxlU2hlZXRDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25DKTtcclxuXHJcbiAgICBxdWVzdGlvbkQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKHVzZXJBbnN3ZXJzW2ldICE9IFwiRFwiKSB7XHJcbiAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5hZGQoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHVzZXJBbnN3ZXJzW2ldID0gXCJEXCI7XHJcbiAgICAgICAgbGV0IGxvY2FsQW5zd2Vyc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5KS5zcGxpdChcIlwiKTtcclxuICAgICAgICBsb2NhbEFuc3dlcnNTdHJpbmdbaV0gPSBcIkRcIjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbEtleSwgbG9jYWxBbnN3ZXJzU3RyaW5nLmpvaW4oXCJcIikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgcXVlc3Rpb25DLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICB1c2VyQW5zd2Vyc1tpXSA9IFwiTlwiO1xyXG4gICAgICAgIGxldCBsb2NhbEFuc3dlcnNTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSkuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgbG9jYWxBbnN3ZXJzU3RyaW5nW2ldID0gXCJOXCI7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxLZXksIGxvY2FsQW5zd2Vyc1N0cmluZy5qb2luKFwiXCIpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBidWJibGVTaGVldENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbkQpO1xyXG4gIH1cclxuICBtZW51LmFwcGVuZENoaWxkKGJ1YmJsZVNoZWV0Q29udGFpbmVyKTtcclxuXHJcbiAgaWYgKHVzZUxvY2FsQW5zd2Vycykge1xyXG4gICAgbGV0IHdhaXRGb3JCdWJibGVTaGVldCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsZXQgZm9jdXMgPSB1c2VyQW5zd2Vycy5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHVzZXJBbnN3ZXJzW2ldID09IFwiTlwiKSB7XHJcbiAgICAgICAgICBmb2N1cyA9IGk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvY3VzID4gMykge1xyXG4gICAgICAgIGNvbnN0IGZvY3VzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgYHF1ZXN0aW9uLSR7Zm9jdXMgLSAyfS1udW1iZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmb2N1c0VsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgICBjbGVhclRpbWVvdXQod2FpdEZvckJ1YmJsZVNoZWV0KTtcclxuICAgICAgfVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidWJibGUtc2hlZXQtYnV0dG9ucy1jb250YWluZXJcIik7XHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLXNoZWV0LXN1Ym1pdC1idXR0b25cIik7XHJcbiAgc3VibWl0QnV0dG9uLmlkID0gXCJidWJibGUtc2hlZXQtc3VibWl0LWJ1dHRvblwiO1xyXG5cclxuICBjb25zdCByZXZlYWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHJldmVhbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmV2ZWFsIGFsbCBhbnN3ZXJzXCI7XHJcbiAgcmV2ZWFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidWJibGUtc2hlZXQtcmV2ZWFsLWJ1dHRvblwiKTtcclxuICByZXZlYWxCdXR0b24uaWQgPSBcImJ1YmJsZS1zaGVldC1yZXZlYWwtYnV0dG9uXCI7XHJcblxyXG4gIGNvbnN0IG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1hcmsuaWQgPSBcImV4YW0tbWFya1wiO1xyXG4gIG1hcmsuY2xhc3NMaXN0LmFkZChcImV4YW0tbWFya1wiKTtcclxuICBtYXJrLnRleHRDb250ZW50ID0gYC0gLyAke21vZGVsQW5zd2Vycy5sZW5ndGh9YDtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIpICE9IFwiXCIpIHtcclxuICAgIGxldCB3YWl0Rm9yQnViYmxlU2hlZXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc3VibWl0QmVoYXZpb3IobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxLZXkgKyBcInNcIikpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIpLnNwbGl0KFwiXCIpW2ldID09IFwiQVwiKSB7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tYWApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1iYClcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LWNgKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tZGApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIpLnNwbGl0KFwiXCIpW2ldID09IFwiQlwiKSB7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tYWApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1iYClcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LWNgKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tZGApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIpLnNwbGl0KFwiXCIpW2ldID09IFwiQ1wiKSB7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tYWApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1iYClcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LWNgKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tZGApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIpLnNwbGl0KFwiXCIpW2ldID09IFwiRFwiKSB7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tYWApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1iYClcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGUtY2hvc2VuXCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LWNgKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImJ1YmJsZS1jaG9zZW5cIik7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tZGApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiYnViYmxlLWNob3NlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY3JlYXRlTW9kYWwoXHJcbiAgICAgICAgXCJcIiwgLy8gdGl0bGVcclxuICAgICAgICBbXHJcbiAgICAgICAgICBgWW91IGhhdmUgYWxyZWFkeSBzdWJtaXR0ZWQgdGhpcyBleGFtIGJlZm9yZSBhbmQgZ290ICR7cmVjYWxjdWxhdGVQYXN0RXhhbShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSArIFwic1wiKSlbMF1cclxuICAgICAgICAgIH0gLyAke3JlY2FsY3VsYXRlUGFzdEV4YW0obG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxLZXkgKyBcInNcIikpWzFdfS5gLFxyXG4gICAgICAgICAgYERvIHlvdSB3YW50IHRvIHNvbHZlIGl0IGFnYWluIG9yIGluc3BlY3QgeW91ciBhbnN3ZXJzP2AsXHJcbiAgICAgICAgXSwgLy8gY29udGVudCxcclxuICAgICAgICBbXHJcbiAgICAgICAgICBcIlJlc29sdmVcIixcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgICAgbG9jYWxLZXksXHJcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogNDAgfSkuZmlsbChcIk5cIikuam9pbihcIlwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbEtleSArIFwic1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgcmVzZXRCdWJibGVTaGVldCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcIkluc3BlY3RcIiwgKCkgPT4geyB9XVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY2xlYXJUaW1lb3V0KHdhaXRGb3JCdWJibGVTaGVldCk7XHJcbiAgICB9LCAxKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxLZXkpICE9IFwiXCIgJiZcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5KSAhPSBudWxsICYmXHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSkgIT1cclxuICAgIFwiTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTlwiICYmXHJcbiAgICAhdXNlTG9jYWxBbnN3ZXJzXHJcbiAgKSB7XHJcbiAgICBsZXQgd2FpdEZvckJ1YmJsZVNoZWV0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNyZWF0ZU1vZGFsKFxyXG4gICAgICAgIFwiXCIsIC8vIHRpdGxlXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgYFlvdSBhbHJlYWR5IHN0YXJ0ZWQgc29sdmluZyB0aGlzIGV4YW0gYmVmb3JlLmAsXHJcbiAgICAgICAgICBgRG8geW91IHdhbnQgdG8gY29udGludWUgd2hlcmUgeW91IGxlZnQ/YCxcclxuICAgICAgICBdLCAvLyBjb250ZW50LFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIFwiQ29udGludWVcIixcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgcmVzZXRCdWJibGVTaGVldCh0cnVlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICBcIlJlc3RhcnRcIixcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgICAgbG9jYWxLZXksXHJcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogNDAgfSkuZmlsbChcIk5cIikuam9pbihcIlwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbEtleSArIFwic1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgcmVzZXRCdWJibGVTaGVldCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJlc2V0QnViYmxlU2hlZXQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY2xlYXJUaW1lb3V0KHdhaXRGb3JCdWJibGVTaGVldCk7XHJcbiAgICB9LCAxKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHVzZXJBbnN3ZXJzVGVtcCA9IHVzZXJBbnN3ZXJzO1xyXG4gICAgaWYgKHN1YmplY3QgPT0gXCJFY29ub21pY3NcIikge1xyXG4gICAgICB1c2VyQW5zd2Vyc1RlbXAgPSB1c2VyQW5zd2Vyc1RlbXAuam9pbihcIlwiKS5zdWJzdHJpbmcoMCwgMzApLnNwbGl0KFwiXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXJBbnN3ZXJzVGVtcC5pbmNsdWRlcyhcIk5cIikpIHtcclxuICAgICAgY3JlYXRlTW9kYWwoXHJcbiAgICAgICAgXCJBcmUgeW91IHN1cmU/XCIsIC8vIHRpdGxlXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgXCJTZWVtcyBsaWtlIHRoZXJlIGFyZSBzb21lIHF1ZXN0aW9ucyB5b3UgbWlzc2VkLiA8YnI+IE9ubHkgdGhlIHNvbHZlZCBxdWVzdGlvbnMgd2lsbCBiZSBncmFkZWQuXCIsXHJcbiAgICAgICAgXSwgLy8gY29udGVudCxcclxuICAgICAgICBbXHJcbiAgICAgICAgICBcIkNvbmZpcm1cIixcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgICAgbG9jYWxLZXkgKyBcInNcIixcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSkuc3BsaXQoXCJcIikuam9pbihcIlwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzdWJtaXRCZWhhdmlvcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSArIFwic1wiKSk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICByZWNhbGN1bGF0ZVBhc3RFeGFtKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIpKVswXSA9PVxyXG4gICAgICAgICAgICAgIHJlY2FsY3VsYXRlUGFzdEV4YW0obG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxLZXkgKyBcInNcIikpWzFdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGpzQ29uZmV0dGkuYWRkQ29uZmV0dGkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyLXBsYXktaWNvblwiKVxyXG4gICAgICAgICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyLXBhdXNlLWljb25cIilcclxuICAgICAgICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgICAgICAgaXNUaW1lclJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGltZXJBdWRpby5wYXVzZSgpO1xyXG4gICAgICAgICAgICB0aW1lckF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtY2xvY2sgcGF0aFwiKS5zdHlsZS5maWxsID0gXCJcIjtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXCJDYW5jZWxcIiwgKCkgPT4geyB9XVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgbG9jYWxLZXkgKyBcInNcIixcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSkuc3BsaXQoXCJcIikuam9pbihcIlwiKVxyXG4gICAgICApO1xyXG4gICAgICBzdWJtaXRCZWhhdmlvcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbEtleSArIFwic1wiKSk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICByZWNhbGN1bGF0ZVBhc3RFeGFtKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsS2V5ICsgXCJzXCIpKVswXSA9PVxyXG4gICAgICAgIHJlY2FsY3VsYXRlUGFzdEV4YW0obG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxLZXkgKyBcInNcIikpWzFdXHJcbiAgICAgICkge1xyXG4gICAgICAgIGpzQ29uZmV0dGkuYWRkQ29uZmV0dGkoKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyLXBsYXktaWNvblwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyLXBhdXNlLWljb25cIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgaXNUaW1lclJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgdGltZXJBdWRpby5wYXVzZSgpO1xyXG4gICAgICB0aW1lckF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtY2xvY2sgcGF0aFwiKS5zdHlsZS5maWxsID0gXCJcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV2ZWFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjcmVhdGVNb2RhbChcclxuICAgICAgXCJBcmUgeW91IHN1cmU/XCIsIC8vIHRpdGxlXHJcbiAgICAgIFtcclxuICAgICAgICBcIlRoaXMgd2lsbCBvbmx5IGhpZ2hsaWdodCB0aGUgY29ycmVjdCBhbnN3ZXJzIGFuZCB3aWxsIG5vdCBjb3JyZWN0IHlvdXIgYW5zd2Vycy5cIixcclxuICAgICAgXSwgLy8gY29udGVudCxcclxuICAgICAgW1xyXG4gICAgICAgIFwiQ29uZmlybVwiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJldmVhbEJlaGF2aW9yKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW1wiQ2FuY2VsXCIsICgpID0+IHsgfV1cclxuICAgICk7XHJcbiAgfSk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2ZWFsQnV0dG9uKTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuICBtZW51LmFwcGVuZENoaWxkKG1hcmspO1xyXG5cclxuICAvLyB0aW1lclxyXG4gIGxldCB0aW1lclRpbWVzID0ge1xyXG4gICAgYWxfcGh5c2ljczogWzEsIDEsIDUsIDAsIDBdLFxyXG4gICAgYWxfYmlvbG9neTogWzEsIDAsIDAsIDAsIDBdLFxyXG4gICAgYWxfY2hlbWlzdHJ5OiBbMSwgMCwgMCwgMCwgMF0sXHJcbiAgICBkZWZhdWx0OiBbMCwgNCwgNSwgMCwgMF0sXHJcbiAgfTtcclxuXHJcbiAgbGV0IHRpbWVBcnJheSA9IE9iamVjdC5rZXlzKHRpbWVyVGltZXMpLmluY2x1ZGVzKFxyXG4gICAgYCR7bGV2ZWx9XyR7c3ViamVjdC50b0xvd2VyQ2FzZSgpfWBcclxuICApXHJcbiAgICA/IFsuLi50aW1lclRpbWVzW2Ake2xldmVsfV8ke3N1YmplY3QudG9Mb3dlckNhc2UoKX1gXV1cclxuICAgIDogWy4uLnRpbWVyVGltZXNbXCJkZWZhdWx0XCJdXTtcclxuICBsZXQgaXNUaW1lclJ1bm5pbmc7XHJcbiAgbGV0IHRpbWVyTW9kYWwgPSBjcmVhdGVDbG9jaygpO1xyXG4gIGxldCB0aW1lckF1ZGlvID0gbmV3IEF1ZGlvKFRpbWVyQXVkaW8pO1xyXG5cclxuICBnbG9iYWxUaW1lciA9IHRpbWVyTW9kYWw7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3AtYmFyXCIpLmFmdGVyKGdsb2JhbFRpbWVyKTtcclxuXHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyLXBsYXktcGF1c2UtYnV0dG9uXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lci1wbGF5LWljb25cIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lci1wYXVzZS1pY29uXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICAgIGlmICghaXNUaW1lclJ1bm5pbmcpIHtcclxuICAgICAgICBhdXRvQ2xvY2soKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1jbG9jayBwYXRoXCIpLnN0eWxlLmZpbGwgPSBcIiMxYWFkNzJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICAgIGlzVGltZXJSdW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGltZXJBdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIHRpbWVyQXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLWNsb2NrIHBhdGhcIikuc3R5bGUuZmlsbCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyLXN0b3AtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyLXBsYXktaWNvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lci1wYXVzZS1pY29uXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1jbG9jayBwYXRoXCIpLnN0eWxlLmZpbGwgPSBcIlwiO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgIGlzVGltZXJSdW5uaW5nID0gZmFsc2U7XHJcbiAgICB0aW1lQXJyYXkgPSBPYmplY3Qua2V5cyh0aW1lclRpbWVzKS5pbmNsdWRlcyhcclxuICAgICAgYCR7bGV2ZWx9XyR7c3ViamVjdC50b0xvd2VyQ2FzZSgpfWBcclxuICAgIClcclxuICAgICAgPyBbLi4udGltZXJUaW1lc1tgJHtsZXZlbH1fJHtzdWJqZWN0LnRvTG93ZXJDYXNlKCl9YF1dXHJcbiAgICAgIDogWy4uLnRpbWVyVGltZXNbXCJkZWZhdWx0XCJdXTtcclxuICAgIHNldENsb2NrKHRpbWVBcnJheSk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi50aW1lci10b2dnbGUtYnV0dG9uXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9ja1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvY2stb3BlbmVkXCIpO1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1jbG9ja1wiKVxyXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlLWNsb2NrLW9wZW5lZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzZXRDbG9jayh0aW1lKSB7XHJcbiAgICBjb25zdCBkaWdpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRpZ2l0XCIpO1xyXG4gICAgZGlnaXRzLmZvckVhY2goKGRpZ2l0LCBkSW5kZXgpID0+IHtcclxuICAgICAgbGV0IG51bWJlcnMgPSBkaWdpdC5jaGlsZHJlbjtcclxuICAgICAgbGV0IHRhcmdldCA9IHRpbWVbZEluZGV4XTtcclxuICAgICAgaWYgKHRhcmdldCAhPSBudWxsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBudW1iZXIgPSBudW1iZXJzW2ldO1xyXG4gICAgICAgICAgbnVtYmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgbnVtYmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRcIik7XHJcbiAgICAgICAgICBpZiAoaSA8IHRhcmdldCkge1xyXG4gICAgICAgICAgICBudW1iZXIuY2xhc3NMaXN0LmFkZChcIm91dFwiKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvQ2xvY2soKSB7XHJcbiAgICBpc1RpbWVyUnVubmluZyA9IHRydWU7XHJcbiAgICBzZXRDbG9jayh0aW1lQXJyYXkpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aW1lQXJyYXlbMF0gPiAwIHx8XHJcbiAgICAgIHRpbWVBcnJheVsxXSA+IDAgfHxcclxuICAgICAgdGltZUFycmF5WzJdID4gMCB8fFxyXG4gICAgICB0aW1lQXJyYXlbM10gPiAwIHx8XHJcbiAgICAgIHRpbWVBcnJheVs0XSA+IDBcclxuICAgICkge1xyXG4gICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRpbWVBcnJheVs0XSAtPSAxO1xyXG4gICAgICAgIGlmICh0aW1lQXJyYXlbNF0gPCAwKSB7XHJcbiAgICAgICAgICB0aW1lQXJyYXlbM10gLT0gMTtcclxuICAgICAgICAgIHRpbWVBcnJheVs0XSA9IDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lQXJyYXlbM10gPCAwKSB7XHJcbiAgICAgICAgICB0aW1lQXJyYXlbMl0gLT0gMTtcclxuICAgICAgICAgIHRpbWVBcnJheVszXSA9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lQXJyYXlbMl0gPCAwKSB7XHJcbiAgICAgICAgICB0aW1lQXJyYXlbMV0gLT0gMTtcclxuICAgICAgICAgIHRpbWVBcnJheVsyXSA9IDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lQXJyYXlbMV0gPCAwKSB7XHJcbiAgICAgICAgICB0aW1lQXJyYXlbMF0gLT0gMTtcclxuICAgICAgICAgIHRpbWVBcnJheVsxXSA9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRpbWVBcnJheVswXSA8PSAwICYmXHJcbiAgICAgICAgICB0aW1lQXJyYXlbMV0gPD0gMCAmJlxyXG4gICAgICAgICAgdGltZUFycmF5WzJdIDw9IDAgJiZcclxuICAgICAgICAgIHRpbWVBcnJheVszXSA8PSAwICYmXHJcbiAgICAgICAgICB0aW1lQXJyYXlbNF0gPD0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTsgLy9maW5pc2hcclxuICAgICAgICAgIHRpbWVyQXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRpbWVyQXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgdGltZXJBdWRpby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICB9LCAxNDAwMCk7XHJcbiAgICAgICAgICBjcmVhdGVNb2RhbChcclxuICAgICAgICAgICAgXCJUaW1lIGlzIGZpbmlzaGVkXCIsXHJcbiAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgXCJPS1wiLFxyXG4gICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRpbWVyQXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVyQXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRpbWVyQXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgICB0aW1lckF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENsb2NrKHRpbWVBcnJheSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2xvY2soKSB7XHJcbiAgICBsZXQgY2xvY2tFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNsb2NrRWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvY2stY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCB0b2dnbGVDbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2dnbGVDbG9jay5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLWNsb2NrXCIpO1xyXG4gICAgdG9nZ2xlQ2xvY2suaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGQ9XCJNMTI4IDQ0YTk2IDk2IDAgMSAwIDk2IDk2YTk2LjExIDk2LjExIDAgMCAwLTk2LTk2bTAgMTY4YTcyIDcyIDAgMSAxIDcyLTcyYTcyLjA4IDcyLjA4IDAgMCAxLTcyIDcybTM2LjQ5LTExMi40OWExMiAxMiAwIDAgMSAwIDE3bC0yOCAyOGExMiAxMiAwIDAgMS0xNy0xN2wyOC0yOGExMiAxMiAwIDAgMSAxNyAwTTkyIDE2YTEyIDEyIDAgMCAxIDEyLTEyaDQ4YTEyIDEyIDAgMCAxIDAgMjRoLTQ4YTEyIDEyIDAgMCAxLTEyLTEyXCIvPjwvc3ZnPmA7XHJcblxyXG4gICAgbGV0IGNsb2NrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjbG9ja0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNsb2NrXCIpO1xyXG4gICAgY2xvY2tFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlnaXRcIj48cCBjbGFzcz1cImN1cnJlbnRcIj4wPC9wPjxwPjE8L3A+PHA+MjwvcD48cD4zPC9wPjxwPjQ8L3A+PHA+NTwvcD48cD42PC9wPjxwPjc8L3A+PHA+ODwvcD48cD45PC9wPjwvZGl2PlxyXG4gICAgICAgIDxwPjo8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0XCI+PHAgY2xhc3M9XCJjdXJyZW50XCI+MDwvcD48cD4xPC9wPjxwPjI8L3A+PHA+MzwvcD48cD40PC9wPjxwPjU8L3A+PHA+NjwvcD48cD43PC9wPjxwPjg8L3A+PHA+OTwvcD48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlnaXRcIj48cCBjbGFzcz1cImN1cnJlbnRcIj4wPC9wPjxwPjE8L3A+PHA+MjwvcD48cD4zPC9wPjxwPjQ8L3A+PHA+NTwvcD48cD42PC9wPjxwPjc8L3A+PHA+ODwvcD48cD45PC9wPjwvZGl2PlxyXG4gICAgICAgIDxwPjo8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0XCI+PHAgY2xhc3M9XCJjdXJyZW50XCI+MDwvcD48cD4xPC9wPjxwPjI8L3A+PHA+MzwvcD48cD40PC9wPjxwPjU8L3A+PHA+NjwvcD48cD43PC9wPjxwPjg8L3A+PHA+OTwvcD48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlnaXRcIj48cCBjbGFzcz1cImN1cnJlbnRcIj4wPC9wPjxwPjE8L3A+PHA+MjwvcD48cD4zPC9wPjxwPjQ8L3A+PHA+NTwvcD48cD42PC9wPjxwPjc8L3A+PHA+ODwvcD48cD45PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0aW1lci10b2dnbGUtYnV0dG9uXCIgaWQ9XCJ0aW1lci10b2dnbGUtYnV0dG9uXCI+XHJcbiAgICAgICAgPHN2ZyBjbGFzcz1cInRpbWVyLXRvZ2dsZS1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjMDAwMDAwXCIgZD1cIk0xNjguNDkgMTk5LjUxYTEyIDEyIDAgMCAxLTE3IDE3bC04MC04MGExMiAxMiAwIDAgMSAwLTE3bDgwLTgwYTEyIDEyIDAgMCAxIDE3IDE3TDk3IDEyOFpcIi8+PC9zdmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRpbWVyLXN0b3AtYnV0dG9uXCIgaWQ9XCJjbGFzcz1cInRpbWVyLXN0b3AtYnV0dG9uXCI+XHJcbiAgICAgICAgPHN2ZyBjbGFzcz1cInRpbWVyLXBsYXktc3RvcFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiIzAwMDAwMFwiIGQ9XCJNMTQwIDgwdjQxLjIxbDM0LjE3IDIwLjVhMTIgMTIgMCAxIDEtMTIuMzQgMjAuNThsLTQwLTI0QTEyIDEyIDAgMCAxIDExNiAxMjhWODBhMTIgMTIgMCAwIDEgMjQgMG0tMTItNTJhOTkuMzggOTkuMzggMCAwIDAtNzAuNzYgMjkuMzRjLTQuNjkgNC43NC05IDkuMzctMTMuMjQgMTRWNjRhMTIgMTIgMCAwIDAtMjQgMHY0MGExMiAxMiAwIDAgMCAxMiAxMmg0MGExMiAxMiAwIDAgMCAwLTI0SDU3Ljc3YzUuMjMtNiAxMC42LTExLjc4IDE2LjQ5LTE3Ljc0YTc2IDc2IDAgMSAxIDEuNTggMTA5YTEyIDEyIDAgMCAwLTE2LjQ4IDE3LjQ2QTEwMCAxMDAgMCAxIDAgMTI4IDI4XCIvPjwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0aW1lci1wbGF5LXBhdXNlLWJ1dHRvblwiIGlkPVwiY2xhc3M9XCJ0aW1lci1wbGF5LXBhdXNlLWJ1dHRvblwiPlxyXG4gICAgICAgIDxzdmcgY2xhc3M9XCJ0aW1lci1wbGF5LWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiMwMDAwMDBcIiBkPVwiTTI0MCAxMjhhMTUuNzQgMTUuNzQgMCAwIDEtNy42IDEzLjUxTDg4LjMyIDIyOS42NWExNiAxNiAwIDAgMS0xNi4yLjNBMTUuODYgMTUuODYgMCAwIDEgNjQgMjE2LjEzVjM5Ljg3YTE1Ljg2IDE1Ljg2IDAgMCAxIDguMTItMTMuODJhMTYgMTYgMCAwIDEgMTYuMi4zbDE0NC4wOCA4OC4xNEExNS43NCAxNS43NCAwIDAgMSAyNDAgMTI4XCIvPjwvc3ZnPlxyXG4gICAgICAgIDxzdmcgY2xhc3M9XCJ0aW1lci1wYXVzZS1pY29uIGhpZGRlblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiIzAwMDAwMFwiIGQ9XCJNMjE2IDQ4djE2MGExNiAxNiAwIDAgMS0xNiAxNmgtNDBhMTYgMTYgMCAwIDEtMTYtMTZWNDhhMTYgMTYgMCAwIDEgMTYtMTZoNDBhMTYgMTYgMCAwIDEgMTYgMTZNOTYgMzJINTZhMTYgMTYgMCAwIDAtMTYgMTZ2MTYwYTE2IDE2IDAgMCAwIDE2IDE2aDQwYTE2IDE2IDAgMCAwIDE2LTE2VjQ4YTE2IDE2IDAgMCAwLTE2LTE2XCIvPjwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPmA7XHJcblxyXG4gICAgdG9nZ2xlQ2xvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdG9nZ2xlQ2xvY2suY2xhc3NMaXN0LmFkZChcInRvZ2dsZS1jbG9jay1vcGVuZWRcIik7XHJcbiAgICAgIGNsb2NrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2xvY2stb3BlbmVkXCIpO1xyXG4gICAgICBzZXRDbG9jayh0aW1lQXJyYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvY2tFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb2NrRWxlbWVudCk7XHJcbiAgICBjbG9ja0VsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlQ2xvY2spO1xyXG4gICAgcmV0dXJuIGNsb2NrRWxlbWVudENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8vIHBkZiB2aWV3ZXJcclxuICBsZXQgcGRmVmlld09wZW5lZCA9IGZhbHNlO1xyXG4gIGxldCBwZXJpb2RpY1RhYmxlUGRmVmlld09wZW5lZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBwZGZWaWV3ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBkZlZpZXdlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGRmLXZpZXdlci1jb250YWluZXJcIik7XHJcbiAgY29uc3Qgc3dpdGNoVG9QZGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHN3aXRjaFRvUGRmLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2gtdG8tcGRmXCIpO1xyXG4gIHN3aXRjaFRvUGRmLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCJNMjAwIDE2NHY4aDEyYTEyIDEyIDAgMCAxIDAgMjRoLTEydjEyYTEyIDEyIDAgMCAxLTI0IDB2LTU2YTEyIDEyIDAgMCAxIDEyLTEyaDMyYTEyIDEyIDAgMCAxIDAgMjRabS0xMDggOGEzMiAzMiAwIDAgMS0zMiAzMmgtNHY0YTEyIDEyIDAgMCAxLTI0IDB2LTU2YTEyIDEyIDAgMCAxIDEyLTEyaDE2YTMyIDMyIDAgMCAxIDMyIDMybS0yNCAwYTggOCAwIDAgMC04LThoLTR2MTZoNGE4IDggMCAwIDAgOC04bTEwMCA4YTQwIDQwIDAgMCAxLTQwIDQwaC0xNmExMiAxMiAwIDAgMS0xMi0xMnYtNTZhMTIgMTIgMCAwIDEgMTItMTJoMTZhNDAgNDAgMCAwIDEgNDAgNDBtLTI0IDBhMTYgMTYgMCAwIDAtMTYtMTZoLTR2MzJoNGExNiAxNiAwIDAgMCAxNi0xNk0zNiAxMDhWNDBhMjAgMjAgMCAwIDEgMjAtMjBoOTZhMTIgMTIgMCAwIDEgOC40OSAzLjUybDU2IDU2QTEyIDEyIDAgMCAxIDIyMCA4OHYyMGExMiAxMiAwIDAgMS0yNCAwdi00aC00OGExMiAxMiAwIDAgMS0xMi0xMlY0NEg2MHY2NGExMiAxMiAwIDAgMS0yNCAwbTEyNC01MXYyM2gyM1pcIi8+PC9zdmc+YDtcclxuICBzd2l0Y2hUb1BkZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblBkZik7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3J0Y3V0c0Z1bmMoZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGUua2V5ID09IFwielwiICYmICFlLnNoaWZ0S2V5ICYmICFlLmN0cmxLZXkpIHtcclxuICAgICAgICBvcGVuUGRmKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBlLmtleSA9PSBcInhcIiAmJlxyXG4gICAgICAgICFlLnNoaWZ0S2V5ICYmXHJcbiAgICAgICAgIWUuY3RybEtleSAmJlxyXG4gICAgICAgIChzdWJqZWN0ID09IFwiQ2hlbWlzdHJ5XCIgfHwgc3ViamVjdCA9PSBcIkNvbWJpbmVkXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIG9wZW5QZXJpb2RpY1RhYmxlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlLmtleSA9PSBcImNcIiAmJiAhZS5zaGlmdEtleSAmJiAhZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9ja1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvY2stb3BlbmVkXCIpO1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtY2xvY2tcIilcclxuICAgICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlLWNsb2NrLW9wZW5lZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgc2hvcnRjdXRzRnVuYyhlKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gb3BlblBkZigpIHtcclxuICAgIGlmICghcGRmVmlld09wZW5lZCkge1xyXG4gICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgIGNvbnN0IHBkZlZpZXdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcGRmVmlld2VyLmlkID0gXCJwZGYtdmlld2VyXCI7XHJcbiAgICAgICAgcGRmVmlld2VyLmNsYXNzTGlzdC5hZGQoXCJwZGYtdmlld2VyXCIpO1xyXG5cclxuICAgICAgICBXZWJWaWV3ZXIoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpY2Vuc2VLZXk6IFwiUUZuNlU3OFRNZnp3ekZhbXNpQmxcIixcclxuICAgICAgICAgICAgcGF0aDogXCIuL3BkZi12aWV3ZXJcIiwgLy8gcG9pbnQgdG8gd2hlcmUgdGhlIGZpbGVzIHlvdSBjb3BpZWQgYXJlIHNlcnZlZCBmcm9tXHJcbiAgICAgICAgICAgIGluaXRpYWxEb2M6IGAuL3BkZnMvJHtsZXZlbC50b1VwcGVyQ2FzZSgpfS0ke3N1YmplY3R9LyR7eWVhcn0vJHtzZXNzaW9uID09IFwic1wiXHJcbiAgICAgICAgICAgICAgPyBcIk1heS1KdW5cIlxyXG4gICAgICAgICAgICAgIDogc2Vzc2lvbiA9PSBcIndcIlxyXG4gICAgICAgICAgICAgICAgPyBcIk9jdC1Ob3ZcIlxyXG4gICAgICAgICAgICAgICAgOiBcIkZlYi1NYXJcIlxyXG4gICAgICAgICAgICAgIH0vJHtzdWJqZWN0Q29kZVtsZXZlbC50b1VwcGVyQ2FzZSgpICsgc3ViamVjdF19XyR7c2Vzc2lvbn0ke051bWJlcih5ZWFyKSAtIDIwMDBcclxuICAgICAgICAgICAgICB9X3FwXyR7c3ViamVjdCA9PSBcIkVjb25vbWljc1wiXHJcbiAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgIDogbGV2ZWwgPT0gXCJhbFwiIHx8IGxldmVsID09IFwiY3JcIlxyXG4gICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgOiAyXHJcbiAgICAgICAgICAgICAgfSR7TnVtYmVyKHZhcmlhbnQpICsgMX0ucGRmYCwgLy8gcGF0aCB0byB5b3VyIGRvY3VtZW50XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGRmVmlld2VyXHJcbiAgICAgICAgKS50aGVuKChpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgICAgaW5zdGFuY2UuVUkuc2V0VGhlbWUoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgaW5zdGFuY2UuVUkuZGlzYWJsZUVsZW1lbnRzKFtcclxuICAgICAgICAgICAgXCJ0b29sYmFyR3JvdXAtRmlsbEFuZFNpZ25cIixcclxuICAgICAgICAgICAgXCJ0aGVtZUNoYW5nZUJ1dHRvblwiLFxyXG4gICAgICAgICAgICBcImxhbmd1YWdlQnV0dG9uXCIsXHJcbiAgICAgICAgICAgIFwidG9nZ2xlTm90ZXNCdXR0b25cIixcclxuICAgICAgICAgICAgXCJzdGlja3lUb29sR3JvdXBCdXR0b25cIixcclxuICAgICAgICAgICAgXCJ0b29sYmFyR3JvdXAtSW5zZXJ0XCIsXHJcbiAgICAgICAgICAgIFwic3RpY2t5VG9vbEJ1dHRvblwiLFxyXG4gICAgICAgICAgICBcInBvbHlnb25DbG91ZFRvb2xHcm91cEJ1dHRvblwiLFxyXG4gICAgICAgICAgICBcInByaW50QnV0dG9uXCIsXHJcbiAgICAgICAgICBdKTtcclxuICAgICAgICAgIGluc3RhbmNlLmVuYWJsZUZlYXR1cmVzKFtpbnN0YW5jZS5GZWF0dXJlLkRvd25sb2FkXSk7XHJcbiAgICAgICAgICBpbnN0YW5jZS5VSS5kaXNhYmxlVG9vbHMoW1wiY2FsbG91dFRvb2xcIl0pO1xyXG4gICAgICAgICAgcGRmVmlld09wZW5lZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgaW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNob3J0Y3V0c0Z1bmMoZSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvL2NvbnNvbGUuY2xlYXIoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwZGZWaWV3ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGRmVmlld2VyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGVNb2RhbChcclxuICAgICAgICAgIFwiWW91IGFyZSBjdXJyZW50bHkgb2ZmbGluZVwiLCAvLyB0aXRsZVxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICBcIlVuYWJsZSB0byBsb2FkIHRoZSBwZGZzIHdoaWxlIGluIG9mZmxpbmUuXCIsXHJcbiAgICAgICAgICAgIFwiQ2hlY2sgeW91IGludGVybmV0IGNvbm5lY3Rpdml0eSBhbmQgdHJ5IGFnYWluLlwiLFxyXG4gICAgICAgICAgXSwgLy8gY29udGVudCxcclxuICAgICAgICAgIFtcIkNsb3NlXCIsICgpID0+IHsgfV1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwZGZWaWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBkZi12aWV3ZXJcIik7XHJcbiAgICAgIHBkZlZpZXdlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS12aWV3ZXJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwZGZWaWV3ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3dpdGNoVG9QZGYpO1xyXG5cclxuICBnbG9iYWxQZGZWaWV3ZXIgPSBwZGZWaWV3ZXJDb250YWluZXI7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwZGZWaWV3ZXJDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBpQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpLWJ1dHRvblwiKTtcclxuICBpQnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDUgMTVcIj48Y2lyY2xlIGN4PVwiMlwiIGN5PVwiMlwiIHI9XCIyXCIvPjxwYXRoIGQ9XCJNNSwxMy41MWMwLC42NS0uNDIsMS4yMS0xLjAxLDEuNC0uMTUsLjA2LS4zMSwuMDktLjQ4LC4wOWgtLjAxYy0xLjM3LDAtMi40OS0xLjExLTIuNDktMi40OXYtNC4xMUMuNDIsOC4yMSwwLDcuNjUsMCw2Ljk5cy40Mi0xLjIxLDEuMDEtMS40Yy4xNS0uMDYsLjMxLS4wOSwuNDgtLjA5aC4wMWMxLjM3LDAsMi40OSwxLjExLDIuNDksMi40OXY0LjExYy41OSwuMTksMS4wMSwuNzUsMS4wMSwxLjQxWlwiLz48L3N2Zz5gO1xyXG4gIGlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNyZWF0ZU1vZGFsKFxyXG4gICAgICBcIkNvbG9yIENvZGUgZm9yIGFuc3dlcnNcIiwgLy8gdGl0bGVcclxuICAgICAgW1xyXG4gICAgICAgIGA8c3BhbiBjbGFzcz1cImdyZWVuXCI+R3JlZW48L3NwYW4+IOKGkiBDb3JyZWN0IEFuc3dlcmAsXHJcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwicmVkXCI+UmVkPC9zcGFuPiDihpIgSW5jb3JyZWN0IEFuc3dlcmAsXHJcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwicHVycGxlXCI+UHVycGxlPC9zcGFuPiDihpIgRGlzY291bnRlZCBBbnN3ZXIgPGJ1dHRvbiBpZD1cImktYnV0dG9uLWRpc2NvdW50ZWRcIj48c3ZnIGNsYXNzPVwiZGlzY291bnRlZC1xdWVzdGlvbi1pbmZvXCIgaWQ9XCJkaXNjb3VudGVkLXF1ZXN0aW9uLWluZm9cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCA1IDE1XCI+PGNpcmNsZSBjeD1cIjJcIiBjeT1cIjJcIiByPVwiMlwiLz48cGF0aCBkPVwiTTUsMTMuNTFjMCwuNjUtLjQyLDEuMjEtMS4wMSwxLjQtLjE1LC4wNi0uMzEsLjA5LS40OCwuMDloLS4wMWMtMS4zNywwLTIuNDktMS4xMS0yLjQ5LTIuNDl2LTQuMTFDLjQyLDguMjEsMCw3LjY1LDAsNi45OXMuNDItMS4yMSwxLjAxLTEuNGMuMTUtLjA2LC4zMS0uMDksLjQ4LS4wOWguMDFjMS4zNywwLDIuNDksMS4xMSwyLjQ5LDIuNDl2NC4xMWMuNTksLjE5LDEuMDEsLjc1LDEuMDEsMS40MVpcIi8+PC9zdmc+PC9idXR0b24+YCxcclxuICAgICAgXSwgLy8gY29udGVudFxyXG4gICAgICBbXCJDbG9zZVwiLCAoKSA9PiB7IH1dXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGlCdXR0b25EaXNjb3VudGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpLWJ1dHRvbi1kaXNjb3VudGVkXCIpO1xyXG4gICAgaUJ1dHRvbkRpc2NvdW50ZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIilcclxuICAgICAgICAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKSk7XHJcbiAgICAgIGNyZWF0ZU1vZGFsKFxyXG4gICAgICAgIFwiRGlzY291bnRlZCBRdWVzdGlvbnNcIixcclxuICAgICAgICBbXCJUaGVzZSBhcmUgZGlzcXVhbGlmaWVkIHF1ZXN0aW9uIGZyb20gdGhlIG1hcmsgc2NoZW1lLlwiXSxcclxuICAgICAgICBbXCJDbG9zZVwiLCAoKSA9PiB7IH1dXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBtZW51LmFwcGVuZENoaWxkKGlCdXR0b24pO1xyXG5cclxuICBjb25zdCBwZXJpb2RpY1RhYmxlUGRmVmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaWYgKHN1YmplY3QgPT0gXCJDaGVtaXN0cnlcIiB8fCBzdWJqZWN0ID09IFwiQ29tYmluZWRcIikge1xyXG4gICAgcGVyaW9kaWNUYWJsZVBkZlZpZXdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICAgXCJwZXJpb2RpYy10YWJsZS1wZGYtdmlld2VyLWNvbnRhaW5lclwiXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3dpdGNoVG9QZGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3dpdGNoVG9QZGYuY2xhc3NMaXN0LmFkZChcInN3aXRjaC10by1wZXJpb2RpYy10YWJsZS1wZGZcIik7XHJcbiAgICBzd2l0Y2hUb1BkZi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNS41MiAyMi4xM1wiPjxwYXRoIGQ9XCJNMjEuNTgsMjIuMTNIMy45NGMtLjU1LDAtMS0uNDUtMS0xdi0yLjg3YzAtLjU1LC40NS0xLDEtMUgyMS41OGMuNTUsMCwxLC40NSwxLDF2Mi44N2MwLC41NS0uNDUsMS0xLDFabS0xNi42NC0yaDE1LjY0di0uODdINC45NHYuODdaXCIvPjxwYXRoIGQ9XCJNMjQuNTIsMTYuODNIMWMtLjU1LDAtMS0uNDUtMS0xVjFDMCwuNDUsLjQ1LDAsMSwwSDMuOTRjLjU1LDAsMSwuNDUsMSwxdjEuOTRoMS45NGMuNTUsMCwxLC40NSwxLDF2MS45NGgzLjg4di0xLjk0YzAtLjU1LC40NS0xLDEtMWg3LjgyVjFjMC0uNTUsLjQ1LTEsMS0xaDIuOTRjLjU1LDAsMSwuNDUsMSwxVjE1LjgzYzAsLjU1LS40NSwxLTEsMVpNMiwxNC44M0gyMy41MlYyaC0uOTR2MS45NGMwLC41NS0uNDUsMS0xLDFoLTcuODJ2MS45NGMwLC41NS0uNDUsMS0xLDFINi44OGMtLjU1LDAtMS0uNDUtMS0xdi0xLjk0aC0xLjk0Yy0uNTUsMC0xLS40NS0xLTF2LTEuOTRoLS45NFYxNC44M1pcIi8+PC9zdmc+YDtcclxuICAgIHN3aXRjaFRvUGRmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUGVyaW9kaWNUYWJsZSk7XHJcblxyXG4gICAgcGVyaW9kaWNUYWJsZVBkZlZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoc3dpdGNoVG9QZGYpO1xyXG5cclxuICAgIGdsb2JhbFBlcmlvZGljVGFibGVQZGZWaWV3ZXIgPSBwZXJpb2RpY1RhYmxlUGRmVmlld0NvbnRhaW5lcjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGVyaW9kaWNUYWJsZVBkZlZpZXdDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlblBlcmlvZGljVGFibGUoKSB7XHJcbiAgICBpZiAoIXBlcmlvZGljVGFibGVQZGZWaWV3T3BlbmVkKSB7XHJcbiAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgY29uc3QgcGRmVmlld2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwZGZWaWV3ZXIuaWQgPSBcInBlcmlvZGljLXRhYmxlLXBkZi12aWV3ZXJcIjtcclxuICAgICAgICBwZGZWaWV3ZXIuY2xhc3NMaXN0LmFkZChcInBlcmlvZGljLXRhYmxlLXBkZi12aWV3ZXJcIik7XHJcblxyXG4gICAgICAgIFdlYlZpZXdlcihcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGljZW5zZUtleTogXCJRRm42VTc4VE1mend6RmFtc2lCbFwiLFxyXG4gICAgICAgICAgICBwYXRoOiBcIi4vcGRmLXZpZXdlclwiLCAvLyBwb2ludCB0byB3aGVyZSB0aGUgZmlsZXMgeW91IGNvcGllZCBhcmUgc2VydmVkIGZyb21cclxuICAgICAgICAgICAgaW5pdGlhbERvYzogYC4vcGRmcy9wZXJpb2RpYy10YWJsZS5wZGZgLCAvLyBwYXRoIHRvIHlvdXIgZG9jdW1lbnRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwZGZWaWV3ZXJcclxuICAgICAgICApLnRoZW4oKGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICBpbnN0YW5jZS5VSS5zZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICAgICAgICBpbnN0YW5jZS5lbmFibGVGZWF0dXJlcyhbaW5zdGFuY2UuRmVhdHVyZS5Eb3dubG9hZF0pO1xyXG4gICAgICAgICAgaW5zdGFuY2UuVUkuZGlzYWJsZVRvb2xzKFtcImNhbGxvdXRUb29sXCJdKTtcclxuICAgICAgICAgIHBlcmlvZGljVGFibGVQZGZWaWV3T3BlbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgc2hvcnRjdXRzRnVuYyhlKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vY29uc29sZS5jbGVhcigpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBlcmlvZGljVGFibGVQZGZWaWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHBkZlZpZXdlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRlTW9kYWwoXHJcbiAgICAgICAgICBcIllvdSBhcmUgY3VycmVudGx5IG9mZmxpbmVcIiwgLy8gdGl0bGVcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgXCJVbmFibGUgdG8gbG9hZCB0aGUgcGRmcyB3aGlsZSBpbiBvZmZsaW5lLlwiLFxyXG4gICAgICAgICAgICBcIkNoZWNrIHlvdSBpbnRlcm5ldCBjb25uZWN0aXZpdHkgYW5kIHRyeSBhZ2Fpbi5cIixcclxuICAgICAgICAgIF0sIC8vIGNvbnRlbnQsXHJcbiAgICAgICAgICBbXCJDbG9zZVwiLCAoKSA9PiB7IH1dXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcGRmVmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJpb2RpYy10YWJsZS1wZGYtdmlld2VyXCIpO1xyXG4gICAgICBwZGZWaWV3ZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtdmlld2VyXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVjYWxjdWxhdGVQYXN0RXhhbSh1c2VyQW5zd2Vycykge1xyXG4gICAgbGV0IGNvcnJlY3RBbnN3ZXJzID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChtb2RlbEFuc3dlcnNbaV0gPT0gXCJRXCIgfHwgbW9kZWxBbnN3ZXJzW2ldID09IHVzZXJBbnN3ZXJzW2ldKSB7XHJcbiAgICAgICAgY29ycmVjdEFuc3dlcnMrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbY29ycmVjdEFuc3dlcnMsIG1vZGVsQW5zd2Vycy5sZW5ndGhdO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRCdWJibGVTaGVldCh1c2VMb2NhbEFuc3dlcnMpIHtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChnbG9iYWxQZGZWaWV3ZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdsb2JhbFBkZlZpZXdlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdsb2JhbFBkZlZpZXdlcik7XHJcbiAgICAgIGdsb2JhbFBkZlZpZXdlciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChnbG9iYWxQZXJpb2RpY1RhYmxlUGRmVmlld2VyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBnbG9iYWxQZXJpb2RpY1RhYmxlUGRmVmlld2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgZ2xvYmFsUGVyaW9kaWNUYWJsZVBkZlZpZXdlclxyXG4gICAgICApO1xyXG4gICAgICBnbG9iYWxQZXJpb2RpY1RhYmxlUGRmVmlld2VyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKGdsb2JhbFRpbWVyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBnbG9iYWxUaW1lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdsb2JhbFRpbWVyKTtcclxuICAgICAgZ2xvYmFsVGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGltZXJJbnRlcnZhbCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgdGltZXJJbnRlcnZhbCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoXHJcbiAgICAgIGNyZWF0ZUJ1YmJsZVNoZWV0TWVudShcclxuICAgICAgICBsZXZlbCxcclxuICAgICAgICBzdWJqZWN0LFxyXG4gICAgICAgIHllYXIsXHJcbiAgICAgICAgc2Vzc2lvbixcclxuICAgICAgICB2YXJpYW50LFxyXG4gICAgICAgIHVzZUxvY2FsQW5zd2Vyc1xyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0QmVoYXZpb3IodXNlckFuc3dlcnMpIHtcclxuICAgIGxldCBjb3JyZWN0QW5zd2VycyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsQW5zd2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LW51bWJlcmApO1xyXG4gICAgICBjb25zdCBjb3JyZWN0ZWRRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIGBxdWVzdGlvbi0ke2l9LSR7bW9kZWxBbnN3ZXJzW2ldLnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29ycmVjdGVkUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImNvcnJlY3RlZC1xdWVzdGlvblwiKTtcclxuICAgICAgUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcIndyb25nLXF1ZXN0aW9uXCIpO1xyXG4gICAgICBRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdC1xdWVzdGlvblwiKTtcclxuICAgICAgUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2NvdW50ZWQtcXVlc3Rpb25cIik7XHJcblxyXG4gICAgICBpZiAobW9kZWxBbnN3ZXJzW2ldID09IFwiUVwiKSB7XHJcbiAgICAgICAgY29ycmVjdEFuc3dlcnMrKztcclxuICAgICAgICBRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGlzY291bnRlZC1xdWVzdGlvblwiKTtcclxuICAgICAgfSBlbHNlIGlmIChtb2RlbEFuc3dlcnNbaV0gPT0gdXNlckFuc3dlcnNbaV0pIHtcclxuICAgICAgICBjb3JyZWN0QW5zd2VycysrO1xyXG4gICAgICAgIFF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0LXF1ZXN0aW9uXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHVzZXJBbnN3ZXJzW2ldID09IFwiXCIgfHwgdXNlckFuc3dlcnNbaV0gPT0gXCJOXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgUXVlc3Rpb24uY2xhc3NMaXN0LmFkZChcIndyb25nLXF1ZXN0aW9uXCIpO1xyXG5cclxuICAgICAgICBjb3JyZWN0ZWRRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdGVkLXF1ZXN0aW9uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXJrLnRleHRDb250ZW50ID0gYCR7Y29ycmVjdEFuc3dlcnN9IC8gJHttb2RlbEFuc3dlcnMubGVuZ3RofWA7XHJcbiAgICBpZiAoY29ycmVjdEFuc3dlcnMgPT0gbW9kZWxBbnN3ZXJzLmxlbmd0aCkge1xyXG4gICAgICBtYXJrLmNsYXNzTGlzdC5hZGQoXCJBQ0VcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXZlYWxCZWhhdmlvcigpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChtb2RlbEFuc3dlcnNbaV0udG9Mb3dlckNhc2UoKSAhPSBcInFcIikge1xyXG4gICAgICAgIGNvbnN0IGNvcnJlY3RlZFF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICBgcXVlc3Rpb24tJHtpfS0ke21vZGVsQW5zd2Vyc1tpXS50b0xvd2VyQ2FzZSgpfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvcnJlY3RlZFF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0ZWQtcXVlc3Rpb25cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGlzY291bnRlZFF1ZXN0aW9uQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LWFgKTtcclxuICAgICAgICBjb25zdCBkaXNjb3VudGVkUXVlc3Rpb25CID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tYmApO1xyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50ZWRRdWVzdGlvbkMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1jYCk7XHJcbiAgICAgICAgY29uc3QgZGlzY291bnRlZFF1ZXN0aW9uRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LWRgKTtcclxuXHJcbiAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uQS5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdGVkLWRpc2NvdW50ZWQtcXVlc3Rpb25cIik7XHJcbiAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uQi5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdGVkLWRpc2NvdW50ZWQtcXVlc3Rpb25cIik7XHJcbiAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uQy5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdGVkLWRpc2NvdW50ZWQtcXVlc3Rpb25cIik7XHJcbiAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uRC5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdGVkLWRpc2NvdW50ZWQtcXVlc3Rpb25cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBtZW51O1xyXG59XHJcblxyXG4vLyBHbG9iYWwgRXZlbnRMaXN0ZW5lclxyXG5mdW5jdGlvbiBhZGRHbG9iYWxFdmVudExpc3RlbmVyKHR5cGUsIHNlbGVjdG9yLCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICB0eXBlLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSBjYWxsYmFjayhlKTtcclxuICAgIH0sXHJcbiAgICBvcHRpb25zXHJcbiAgKTtcclxufVxyXG5cclxuLy8gYXBwZW5kaW5nIGhvbWUgdG8gbWFpblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG5jaGFuZ2VQYXRoKCdob21lJylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
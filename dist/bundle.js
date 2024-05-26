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
    position: absolute;
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

    animation: zoomIn forwards 100ms ease-out;
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

    padding: 0.5rem;
    border-radius: 0.5rem;
    border: solid 3pt #0D1117;
    color: #0D1117;

    font-size: large;
    font-weight: bold;

    outline: none;
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

    animation: fadeId forwards 100ms;
}

@keyframes fadeId {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes zoomIn {
    from {
        scale: 0;
    }

    to {
        scale: 1;
    }
}

@media screen and (max-width: 475px) {

    .modal>div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        gap: 1rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;;IAEP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,mBAAmB;;IAEnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;IAET,yCAAyC;AAC7C;;AAEA;;IAEI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,eAAe;;IAEf,eAAe;IACf,qBAAqB;IACrB,yBAAyB;IACzB,cAAc;;IAEd,gBAAgB;IAChB,iBAAiB;;IAEjB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,qBAAqB;IACrB,yBAAyB;;IAEzB,gBAAgB;;IAEhB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,oCAAoC;;IAEpC,gCAAgC;AACpC;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;AACJ;;AAEA;;IAEI;QACI,WAAW;QACX,aAAa;QACb,mBAAmB;QACnB,8BAA8B;QAC9B,sBAAsB;QACtB,SAAS;IACb;AACJ","sourcesContent":[".modal-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal {\r\n    position: relative;\r\n    z-index: 100;\r\n    padding: 2rem;\r\n    background-color: #E6EDF3;\r\n    color: #0D1117;\r\n    border-radius: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n\r\n    animation: zoomIn forwards 100ms ease-out;\r\n}\r\n\r\n.modal h1,\r\n.modal h2 {\r\n    text-align: center;\r\n    color: #0D1117;\r\n}\r\n\r\n.modal>div {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n}\r\n\r\n.modal>.modal-buttons-container {\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.modal>.modal-buttons-container>button {\r\n    cursor: pointer;\r\n\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    border: solid 3pt #0D1117;\r\n    color: #0D1117;\r\n\r\n    font-size: large;\r\n    font-weight: bold;\r\n\r\n    outline: none;\r\n}\r\n\r\n.modal input[type=\"checkbox\"] {\r\n    height: 2rem;\r\n    width: 2rem;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    border: solid 3pt #0D1117;\r\n\r\n    font-size: large;\r\n\r\n    outline: none;\r\n}\r\n\r\n.modal>button {\r\n    cursor: pointer;\r\n}\r\n\r\n.backdrop {\r\n    position: absolute;\r\n    z-index: 95;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n\r\n    animation: fadeId forwards 100ms;\r\n}\r\n\r\n@keyframes fadeId {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes zoomIn {\r\n    from {\r\n        scale: 0;\r\n    }\r\n\r\n    to {\r\n        scale: 1;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 475px) {\r\n\r\n    .modal>div {\r\n        width: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        flex-direction: column;\r\n        gap: 1rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/fonts/Mona Sans/Mona-Sans.ttf */ "./src/media/fonts/Mona Sans/Mona-Sans.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*#region root/html/body*/
:root {
    --shadow-color: 0deg 0% 0%;
    --shadow-elevation-low: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.1), 0px 0.8px 0.9px -1.2px hsl(var(--shadow-color) / 0.1), 0px 2px 2.3px -2.5px hsl(var(--shadow-color) / 0.1);
    --shadow-elevation-medium: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.11), 0px 1.6px 1.8px -0.8px hsl(var(--shadow-color) / 0.11), 0px 4.1px 4.6px -1.7px hsl(var(--shadow-color) / 0.11), 0px 9.9px 11.1px -2.5px hsl(var(--shadow-color) / 0.11);
    --shadow-elevation-high: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.1), 0px 2.9px 3.3px -0.4px hsl(var(--shadow-color) / 0.1), 0px 5.4px 6.1px -0.7px hsl(var(--shadow-color) / 0.1), 0px 8.9px 10px -1.1px hsl(var(--shadow-color) / 0.1), -0.1px 14.2px 16px -1.4px hsl(var(--shadow-color) / 0.1), -0.1px 22.1px 24.9px -1.8px hsl(var(--shadow-color) / 0.1), -0.1px 33.6px 37.8px -2.1px hsl(var(--shadow-color) / 0.1), -0.2px 49.5px 55.7px -2.5px hsl(var(--shadow-color) / 0.1);
}

@font-face {
    font-family: 'Mona Sans';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

html,
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #010409;
}

body {
    color: #E6EDF3;
    min-height: 100dvh;
}

body * {
    font-family: 'Mona Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    margin: 0;
    padding: 0;

    color: #E6EDF3;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

a {
    color: #6c96bb;
    text-decoration: underline 1.5pt;
}

.hidden {
    display: none !important;
}

/*#endregion*/

/*#region header*/
header {
    width: 100%;
    height: 4rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #010409;
    position: relative;
    z-index: 10;
}

header>.title {
    width: 60%;
    padding-left: 5%;
    display: flex;
}

header>.content {
    width: 30%;
    padding-right: 5%;
    display: flex;
    gap: 10%;
    justify-content: flex-end;
    align-items: center;
}

header>.content>.credits {
    width: 7rem;
    height: 5rem;
    background: transparent;
    border: none;
    cursor: pointer;
}

@media (hover: hover) {
    header>.content>.credits:hover {
        text-decoration: underline solid 2pt;
    }
}

@media only screen and (max-width: 854px) {
    header {
        justify-content: center;
        position: relative;
    }

    header>.title {
        width: fit-content;
        padding-left: 0;
    }

    header>.content {
        position: absolute;
        width: 100%;
        height: 100%;
        /* display: none; */
    }

    header>.content>.credits {
        width: 100%;
        height: 100%;
        padding: 0;
        color: transparent;
    }

    header>.content>.credits>h2 {
        color: transparent;
    }
}

/*#endregion*/

/*#region top bar*/
.top-bar {
    height: 3rem;
    background-color: #010409;
    border-bottom: #21262D solid 1pt;
    display: grid;
    padding: 0 1rem 0.75rem 1rem;
    gap: 1rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    grid-template-columns: 2rem 2rem 1fr;

    box-shadow: var(--shadow-elevation-medium);
    position: relative;
    z-index: 10;
}

.top-bar button {
    background-color: transparent;
    border: none;
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    transition: background-color 200ms ease;
}

.top-bar button svg path {
    fill: #abafb2;
}

.top-bar .active {
    cursor: pointer;
}

.top-bar .active svg path {
    fill: #E6EDF3;
}

@media (hover: hover) {
    .top-bar .active:hover {
        background-color: rgba(231, 238, 243, 0.125);
    }
}

.top-bar .bar {
    height: 3rem;
    background-color: #21262D;
    margin: 0.25rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: large;
    font-weight: 500;
    overflow-y: hidden;
    overflow: auto;
}

.top-bar .bar::-webkit-scrollbar {
    height: 0.5rem;
}

.top-bar .bar::-webkit-scrollbar-thumb {
    background-color: #abafb2;
    border-radius: 0.125rem;
}

.top-bar .bar :-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.top-bar .bar .path-icon-container {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    min-width: 4rem;
    height: 1.5rem;
}

.top-bar .bar .path-icon-container .path-icon {
    width: 100%;
    height: 100%;
}

.top-bar .bar .path-icon-container .path-icon {
    padding: 0.5rem;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    cursor: pointer;
    transition: background-color 100ms ease;
}

@media (hover: hover) {
    .top-bar .bar .path-icon-container .path-icon:hover {
        background-color: #363B42;
    }
}

.top-bar .bar .path-icon-container svg {
    width: 100%;
    height: 100%;
}

.top-bar .bar .path {
    display: flex;
    width: max-content;
    padding-right: 1rem;
}

.top-bar .bar .path>div {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.top-bar .bar .path>div>div {
    padding: 0.5rem;
    margin: 0;
    border-radius: 1rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

.path-not-clickable {
    pointer-events: none;
}

.path-clickable {
    cursor: pointer;
    transition: background-color 100ms ease;
}

@media (hover: hover) {
    .path-clickable:hover {
        background-color: #363B42;
    }
}

.top-bar .bar .path div svg {
    display: flex;
    align-items: center;
    width: 2rem;
    height: 1.5rem;
}

.top-bar .bar .path-arrow {
    font-size: 24pt;
}

/*#endregion*/

.main-section {
    display: flex;
}

/*#region side panel*/
.side-panel {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;

    padding: 1rem 1rem 8rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 15rem;
    height: calc(100dvh - 16.75rem - 1pt);
    overflow: auto;

    background-color: #010409;
    border-right: #21262D solid 1pt;

    z-index: 9;
    position: relative;
}

.side-panel::-webkit-scrollbar {
    width: 0.5rem;
}

.side-panel::-webkit-scrollbar-thumb {
    background-color: #21262D;
    border-radius: 0.125rem;
}

.side-panel::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.side-group-title {
    font-size: larger;
    font-weight: 700;
    padding-bottom: 0.5rem;
}

.side-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.side-button svg {
    min-width: 1.5rem;
    max-width: 1.5rem;
}

.side-button {
    cursor: pointer;
    height: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background-color 100ms ease;
}

@media (hover: hover) {
    .side-button:hover {
        background-color: #21262D;
    }
}

.side-button-year {
    margin-left: 1rem;
}

.side-button-session {
    margin-left: 2rem;
}

.side-button-variant {
    padding: 0.5rem 1rem 0.5rem 2.5rem;
    margin-left: 3rem;
}

.side-container {
    display: grid;
    grid-template-rows: 1fr;
    transition: grid-template-rows 250ms ease;
}

.collapsed {
    grid-template-rows: 0fr;
}

.side-group {
    overflow: hidden;
}

.side-button-arrow {
    pointer-events: all;
}

.side-button-arrow path {
    fill: #E6EDF3;
    transition: fill 100ms ease-in-out;
}

@media (hover: hover) {
    .side-button-arrow:hover path {
        fill: #abafb2;
    }
}

.side-panel .credits {
    pointer-events: none;
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 16.5rem;
    height: 7rem;
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 0.25rem;

    /* margin-top: auto;
    text-align: center; */
}

.side-panel .credits div {
    pointer-events: all;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    text-align: center;
    font-weight: 550;
    font-size: 14pt;
}

.side-panel .credits::before {
    backdrop-filter: blur(10px);
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 100%);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%);
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

/*#endregion*/

.main {
    width: calc(100% - 17rem);
    height: calc(100dvh - 7.75rem - 1pt);

    background-color: #0D1117;
    overflow: auto;
}

.main * {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

.main::-webkit-scrollbar {
    width: 0.5rem;
}

.main::-webkit-scrollbar-thumb {
    background-color: #21262D;
    border-radius: 0.125rem;
}

.main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.home,
.sub-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.home>h2,
.sub-menu>h2 {
    margin: 1.5rem 0 0 1.5rem;
}

.home>div,
.sub-menu>div {
    display: flex;
    flex-wrap: wrap;
}

.card-container {
    margin: 2.5rem;
    width: 15rem;
    height: 15rem;
    perspective: 600px;
}

.card {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    z-index: 10;
    transition: scale 150ms ease, box-shadow 150ms ease;
    border: #363B42 solid 0.5pt;
    box-shadow: var(--shadow-elevation-medium);
}

@media (hover: hover) {
    .card:hover {
        scale: 1.025;
        box-shadow: var(--shadow-elevation-high);
    }

    .card:hover img {
        scale: 1.05;
    }
}

.image-container {
    overflow: hidden;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
}

.image-container img {
    overflow: hidden;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: scale 150ms ease-in-out;
}

.image-container::before {
    pointer-events: none;
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.75));
}

.card-title {
    pointer-events: none;
    z-index: 1;
    position: absolute;
    bottom: 10%;
    left: 10%;
    font-size: x-large;
    font-weight: bold;
}

.bubble-sheet-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    padding: 1rem 0 2rem 0;
}

.bubble-sheet-title {
    padding: 2rem;
    font-size: x-large;
    font-weight: 600;
}

.bubble-sheet-container {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 1rem;
}

.bubble-sheet-container div {
    font-size: x-large;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    border: #363B42 solid 0.25pt;
    transition: background-color 100ms ease;
}

.bubble-chosen {
    background-color: #5E656E;
}

@media (hover: hover) {
    .bubble-choice:hover {
        cursor: pointer;
        background-color: #21262D;
    }
}

.bubble-sheet-menu button {
    font-size: x-large;
    font-weight: bold;
    padding: 1.5rem;
    margin: 1rem;
    border-radius: 1rem;
    background-color: #238636;
    border: none;
    box-shadow: var(--shadow-elevation-medium);
    transition: background-color 100ms ease;
}

@media (hover: hover) {
    .bubble-sheet-menu button:hover {
        cursor: pointer;
        background-color: #1c6b2b;
    }
}

.bubble-sheet-menu .exam-mark {
    margin: 1rem 0;
    padding: 2.5rem;
    border-radius: 1rem;
    background-color: #E6EDF3;
    color: #0D1117;
    font-size: xx-large;
    font-weight: bold;
}

.correct-question {
    background-color: #238636;
}

.wrong-question {
    background-color: #862323;
}

.discounted-question {
    background-color: #86237e;
}

.corrected-discounted-question {
    position: relative;
}

.corrected-discounted-question::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: #86237e solid 0.25rem;
    border-radius: 0.5rem;
}

.corrected-question {
    position: relative;
}

.corrected-question::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: #E6EDF3 solid 0.25rem;
    border-radius: 0.5rem;
}

.switch-to-pdf {
    position: fixed;
    z-index: 1;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
    background-color: #E6EDF3;
    border-radius: 100%;
    box-shadow: var(--shadow-elevation-medium);
    transition: scale 150ms ease;
}

@media (hover: hover) {
    .switch-to-pdf:hover {
        scale: 1.05;
    }
}

.switch-to-pdf svg {
    width: 100%;
    height: 100%;
}

.switch-to-pdf svg path {
    fill: #0D1117;
}

.pdf-viewer {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    position: fixed;
    bottom: 0;
    width: calc(100% - 17rem);
    height: calc(100dvh - 7.75rem - 1pt);
    transition: bottom 100ms ease;
}

.hide-viewer {
    bottom: -100%;
}

@keyframes openMenu {
    0% {
        margin-top: 1.5rem;
        opacity: 0;
    }

    100% {
        margin-top: 0rem;
        opacity: 1;
    }
}

@keyframes closeMenu {
    0% {
        margin-top: 0rem;
        opacity: 1;
    }

    100% {
        margin-top: 1.5rem;
        opacity: 0;
    }
}

@media only screen and (max-width: 921px) {
    .side-panel {
        display: none;
    }

    .side-panel .credits {
        left: -100%;
    }

    .main {
        width: 100%;
    }

    .main>div>div {
        justify-content: center;
    }

    .main>div>h2 {
        text-align: center;
    }

    .card-container {
        margin: 1rem;
    }

    .bubble-sheet-menu {
        margin-bottom: 8rem;
    }

    .bubble-sheet-buttons-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .bubble-sheet-reveal-button {
        position: absolute;
        width: 12rem;
        top: calc(100% + 9rem);
    }

    .pdf-viewer {
        width: 100%;
    }
}

@media only screen and (max-width: 551px) {
    .card-container {
        height: 7rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/*#region root/html/body*/\r\n:root {\r\n    --shadow-color: 0deg 0% 0%;\r\n    --shadow-elevation-low: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.1), 0px 0.8px 0.9px -1.2px hsl(var(--shadow-color) / 0.1), 0px 2px 2.3px -2.5px hsl(var(--shadow-color) / 0.1);\r\n    --shadow-elevation-medium: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.11), 0px 1.6px 1.8px -0.8px hsl(var(--shadow-color) / 0.11), 0px 4.1px 4.6px -1.7px hsl(var(--shadow-color) / 0.11), 0px 9.9px 11.1px -2.5px hsl(var(--shadow-color) / 0.11);\r\n    --shadow-elevation-high: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.1), 0px 2.9px 3.3px -0.4px hsl(var(--shadow-color) / 0.1), 0px 5.4px 6.1px -0.7px hsl(var(--shadow-color) / 0.1), 0px 8.9px 10px -1.1px hsl(var(--shadow-color) / 0.1), -0.1px 14.2px 16px -1.4px hsl(var(--shadow-color) / 0.1), -0.1px 22.1px 24.9px -1.8px hsl(var(--shadow-color) / 0.1), -0.1px 33.6px 37.8px -2.1px hsl(var(--shadow-color) / 0.1), -0.2px 49.5px 55.7px -2.5px hsl(var(--shadow-color) / 0.1);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Mona Sans';\r\n    src: url('../media/fonts/Mona Sans/Mona-Sans.ttf');\r\n}\r\n\r\nhtml,\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #010409;\r\n}\r\n\r\nbody {\r\n    color: #E6EDF3;\r\n    min-height: 100dvh;\r\n}\r\n\r\nbody * {\r\n    font-family: 'Mona Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    color: #E6EDF3;\r\n\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\na {\r\n    color: #6c96bb;\r\n    text-decoration: underline 1.5pt;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n/*#region header*/\r\nheader {\r\n    width: 100%;\r\n    height: 4rem;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #010409;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\nheader>.title {\r\n    width: 60%;\r\n    padding-left: 5%;\r\n    display: flex;\r\n}\r\n\r\nheader>.content {\r\n    width: 30%;\r\n    padding-right: 5%;\r\n    display: flex;\r\n    gap: 10%;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\nheader>.content>.credits {\r\n    width: 7rem;\r\n    height: 5rem;\r\n    background: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (hover: hover) {\r\n    header>.content>.credits:hover {\r\n        text-decoration: underline solid 2pt;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 854px) {\r\n    header {\r\n        justify-content: center;\r\n        position: relative;\r\n    }\r\n\r\n    header>.title {\r\n        width: fit-content;\r\n        padding-left: 0;\r\n    }\r\n\r\n    header>.content {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        /* display: none; */\r\n    }\r\n\r\n    header>.content>.credits {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0;\r\n        color: transparent;\r\n    }\r\n\r\n    header>.content>.credits>h2 {\r\n        color: transparent;\r\n    }\r\n}\r\n\r\n/*#endregion*/\r\n\r\n/*#region top bar*/\r\n.top-bar {\r\n    height: 3rem;\r\n    background-color: #010409;\r\n    border-bottom: #21262D solid 1pt;\r\n    display: grid;\r\n    padding: 0 1rem 0.75rem 1rem;\r\n    gap: 1rem;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    grid-template-columns: 2rem 2rem 1fr;\r\n\r\n    box-shadow: var(--shadow-elevation-medium);\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\n.top-bar button {\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 100%;\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    transition: background-color 200ms ease;\r\n}\r\n\r\n.top-bar button svg path {\r\n    fill: #abafb2;\r\n}\r\n\r\n.top-bar .active {\r\n    cursor: pointer;\r\n}\r\n\r\n.top-bar .active svg path {\r\n    fill: #E6EDF3;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .top-bar .active:hover {\r\n        background-color: rgba(231, 238, 243, 0.125);\r\n    }\r\n}\r\n\r\n.top-bar .bar {\r\n    height: 3rem;\r\n    background-color: #21262D;\r\n    margin: 0.25rem;\r\n    border-radius: 0.5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.25rem;\r\n    font-size: large;\r\n    font-weight: 500;\r\n    overflow-y: hidden;\r\n    overflow: auto;\r\n}\r\n\r\n.top-bar .bar::-webkit-scrollbar {\r\n    height: 0.5rem;\r\n}\r\n\r\n.top-bar .bar::-webkit-scrollbar-thumb {\r\n    background-color: #abafb2;\r\n    border-radius: 0.125rem;\r\n}\r\n\r\n.top-bar .bar :-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.top-bar .bar .path-icon-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 0.5rem;\r\n    min-width: 4rem;\r\n    height: 1.5rem;\r\n}\r\n\r\n.top-bar .bar .path-icon-container .path-icon {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.top-bar .bar .path-icon-container .path-icon {\r\n    padding: 0.5rem;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n    transition: background-color 100ms ease;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .top-bar .bar .path-icon-container .path-icon:hover {\r\n        background-color: #363B42;\r\n    }\r\n}\r\n\r\n.top-bar .bar .path-icon-container svg {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.top-bar .bar .path {\r\n    display: flex;\r\n    width: max-content;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.top-bar .bar .path>div {\r\n    display: flex;\r\n    align-items: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.top-bar .bar .path>div>div {\r\n    padding: 0.5rem;\r\n    margin: 0;\r\n    border-radius: 1rem;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\n.path-not-clickable {\r\n    pointer-events: none;\r\n}\r\n\r\n.path-clickable {\r\n    cursor: pointer;\r\n    transition: background-color 100ms ease;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .path-clickable:hover {\r\n        background-color: #363B42;\r\n    }\r\n}\r\n\r\n.top-bar .bar .path div svg {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 2rem;\r\n    height: 1.5rem;\r\n}\r\n\r\n.top-bar .bar .path-arrow {\r\n    font-size: 24pt;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n.main-section {\r\n    display: flex;\r\n}\r\n\r\n/*#region side panel*/\r\n.side-panel {\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n\r\n    padding: 1rem 1rem 8rem 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    width: 15rem;\r\n    height: calc(100dvh - 16.75rem - 1pt);\r\n    overflow: auto;\r\n\r\n    background-color: #010409;\r\n    border-right: #21262D solid 1pt;\r\n\r\n    z-index: 9;\r\n    position: relative;\r\n}\r\n\r\n.side-panel::-webkit-scrollbar {\r\n    width: 0.5rem;\r\n}\r\n\r\n.side-panel::-webkit-scrollbar-thumb {\r\n    background-color: #21262D;\r\n    border-radius: 0.125rem;\r\n}\r\n\r\n.side-panel::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.side-group-title {\r\n    font-size: larger;\r\n    font-weight: 700;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n.side-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.side-button svg {\r\n    min-width: 1.5rem;\r\n    max-width: 1.5rem;\r\n}\r\n\r\n.side-button {\r\n    cursor: pointer;\r\n    height: 1.25rem;\r\n    padding: 0.5rem 1rem;\r\n    border-radius: 0.5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    transition: background-color 100ms ease;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .side-button:hover {\r\n        background-color: #21262D;\r\n    }\r\n}\r\n\r\n.side-button-year {\r\n    margin-left: 1rem;\r\n}\r\n\r\n.side-button-session {\r\n    margin-left: 2rem;\r\n}\r\n\r\n.side-button-variant {\r\n    padding: 0.5rem 1rem 0.5rem 2.5rem;\r\n    margin-left: 3rem;\r\n}\r\n\r\n.side-container {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    transition: grid-template-rows 250ms ease;\r\n}\r\n\r\n.collapsed {\r\n    grid-template-rows: 0fr;\r\n}\r\n\r\n.side-group {\r\n    overflow: hidden;\r\n}\r\n\r\n.side-button-arrow {\r\n    pointer-events: all;\r\n}\r\n\r\n.side-button-arrow path {\r\n    fill: #E6EDF3;\r\n    transition: fill 100ms ease-in-out;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .side-button-arrow:hover path {\r\n        fill: #abafb2;\r\n    }\r\n}\r\n\r\n.side-panel .credits {\r\n    pointer-events: none;\r\n    z-index: 1;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 16.5rem;\r\n    height: 7rem;\r\n    display: flex;\r\n    align-items: end;\r\n    justify-content: center;\r\n    gap: 0.25rem;\r\n\r\n    /* margin-top: auto;\r\n    text-align: center; */\r\n}\r\n\r\n.side-panel .credits div {\r\n    pointer-events: all;\r\n    width: 100%;\r\n    padding-top: 2rem;\r\n    padding-bottom: 1.5rem;\r\n    text-align: center;\r\n    font-weight: 550;\r\n    font-size: 14pt;\r\n}\r\n\r\n.side-panel .credits::before {\r\n    backdrop-filter: blur(10px);\r\n    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 100%);\r\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%);\r\n    z-index: -1;\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n.main {\r\n    width: calc(100% - 17rem);\r\n    height: calc(100dvh - 7.75rem - 1pt);\r\n\r\n    background-color: #0D1117;\r\n    overflow: auto;\r\n}\r\n\r\n.main * {\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n    width: 0.5rem;\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n    background-color: #21262D;\r\n    border-radius: 0.125rem;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.home,\r\n.sub-menu {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.home>h2,\r\n.sub-menu>h2 {\r\n    margin: 1.5rem 0 0 1.5rem;\r\n}\r\n\r\n.home>div,\r\n.sub-menu>div {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.card-container {\r\n    margin: 2.5rem;\r\n    width: 15rem;\r\n    height: 15rem;\r\n    perspective: 600px;\r\n}\r\n\r\n.card {\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 1rem;\r\n    overflow: hidden;\r\n    position: relative;\r\n    z-index: 10;\r\n    transition: scale 150ms ease, box-shadow 150ms ease;\r\n    border: #363B42 solid 0.5pt;\r\n    box-shadow: var(--shadow-elevation-medium);\r\n}\r\n\r\n@media (hover: hover) {\r\n    .card:hover {\r\n        scale: 1.025;\r\n        box-shadow: var(--shadow-elevation-high);\r\n    }\r\n\r\n    .card:hover img {\r\n        scale: 1.05;\r\n    }\r\n}\r\n\r\n.image-container {\r\n    overflow: hidden;\r\n    border-radius: 1rem;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.image-container img {\r\n    overflow: hidden;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    pointer-events: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    transition: scale 150ms ease-in-out;\r\n}\r\n\r\n.image-container::before {\r\n    pointer-events: none;\r\n    content: '';\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.75));\r\n}\r\n\r\n.card-title {\r\n    pointer-events: none;\r\n    z-index: 1;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    left: 10%;\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.bubble-sheet-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: relative;\r\n\r\n    padding: 1rem 0 2rem 0;\r\n}\r\n\r\n.bubble-sheet-title {\r\n    padding: 2rem;\r\n    font-size: x-large;\r\n    font-weight: 600;\r\n}\r\n\r\n.bubble-sheet-container {\r\n    width: 80%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n    padding: 1rem;\r\n}\r\n\r\n.bubble-sheet-container div {\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1.5rem 1rem;\r\n    border: #363B42 solid 0.25pt;\r\n    transition: background-color 100ms ease;\r\n}\r\n\r\n.bubble-chosen {\r\n    background-color: #5E656E;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .bubble-choice:hover {\r\n        cursor: pointer;\r\n        background-color: #21262D;\r\n    }\r\n}\r\n\r\n.bubble-sheet-menu button {\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n    padding: 1.5rem;\r\n    margin: 1rem;\r\n    border-radius: 1rem;\r\n    background-color: #238636;\r\n    border: none;\r\n    box-shadow: var(--shadow-elevation-medium);\r\n    transition: background-color 100ms ease;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .bubble-sheet-menu button:hover {\r\n        cursor: pointer;\r\n        background-color: #1c6b2b;\r\n    }\r\n}\r\n\r\n.bubble-sheet-menu .exam-mark {\r\n    margin: 1rem 0;\r\n    padding: 2.5rem;\r\n    border-radius: 1rem;\r\n    background-color: #E6EDF3;\r\n    color: #0D1117;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.correct-question {\r\n    background-color: #238636;\r\n}\r\n\r\n.wrong-question {\r\n    background-color: #862323;\r\n}\r\n\r\n.discounted-question {\r\n    background-color: #86237e;\r\n}\r\n\r\n.corrected-discounted-question {\r\n    position: relative;\r\n}\r\n\r\n.corrected-discounted-question::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    border: #86237e solid 0.25rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.corrected-question {\r\n    position: relative;\r\n}\r\n\r\n.corrected-question::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    border: #E6EDF3 solid 0.25rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.switch-to-pdf {\r\n    position: fixed;\r\n    z-index: 1;\r\n    bottom: 1rem;\r\n    right: 1rem;\r\n    padding: 1rem;\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n\r\n    cursor: pointer;\r\n    background-color: #E6EDF3;\r\n    border-radius: 100%;\r\n    box-shadow: var(--shadow-elevation-medium);\r\n    transition: scale 150ms ease;\r\n}\r\n\r\n@media (hover: hover) {\r\n    .switch-to-pdf:hover {\r\n        scale: 1.05;\r\n    }\r\n}\r\n\r\n.switch-to-pdf svg {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.switch-to-pdf svg path {\r\n    fill: #0D1117;\r\n}\r\n\r\n.pdf-viewer {\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: calc(100% - 17rem);\r\n    height: calc(100dvh - 7.75rem - 1pt);\r\n    transition: bottom 100ms ease;\r\n}\r\n\r\n.hide-viewer {\r\n    bottom: -100%;\r\n}\r\n\r\n@keyframes openMenu {\r\n    0% {\r\n        margin-top: 1.5rem;\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        margin-top: 0rem;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes closeMenu {\r\n    0% {\r\n        margin-top: 0rem;\r\n        opacity: 1;\r\n    }\r\n\r\n    100% {\r\n        margin-top: 1.5rem;\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 921px) {\r\n    .side-panel {\r\n        display: none;\r\n    }\r\n\r\n    .side-panel .credits {\r\n        left: -100%;\r\n    }\r\n\r\n    .main {\r\n        width: 100%;\r\n    }\r\n\r\n    .main>div>div {\r\n        justify-content: center;\r\n    }\r\n\r\n    .main>div>h2 {\r\n        text-align: center;\r\n    }\r\n\r\n    .card-container {\r\n        margin: 1rem;\r\n    }\r\n\r\n    .bubble-sheet-menu {\r\n        margin-bottom: 8rem;\r\n    }\r\n\r\n    .bubble-sheet-buttons-container {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        position: relative;\r\n    }\r\n\r\n    .bubble-sheet-reveal-button {\r\n        position: absolute;\r\n        width: 12rem;\r\n        top: calc(100% + 9rem);\r\n    }\r\n\r\n    .pdf-viewer {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 551px) {\r\n    .card-container {\r\n        height: 7rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _media_images_al_biology_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/images/al_biology.jpg */ "./src/media/images/al_biology.jpg");
/* harmony import */ var _media_images_al_chemistry_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/images/al_chemistry.jpg */ "./src/media/images/al_chemistry.jpg");
/* harmony import */ var _media_images_al_physics_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/images/al_physics.jpg */ "./src/media/images/al_physics.jpg");
/* harmony import */ var _media_images_ol_biology_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/images/ol_biology.jpg */ "./src/media/images/ol_biology.jpg");
/* harmony import */ var _media_images_ol_chemistry_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media/images/ol_chemistry.jpg */ "./src/media/images/ol_chemistry.jpg");
/* harmony import */ var _media_images_ol_combined_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/images/ol_combined.png */ "./src/media/images/ol_combined.png");
/* harmony import */ var _media_images_ol_economics_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/images/ol_economics.png */ "./src/media/images/ol_economics.png");
/* harmony import */ var _media_images_ol_physics_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../media/images/ol_physics.jpg */ "./src/media/images/ol_physics.jpg");
/* harmony import */ var _media_images_Random_1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../media/images/Random/1.jpg */ "./src/media/images/Random/1.jpg");
/* harmony import */ var _media_images_Random_2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../media/images/Random/2.jpg */ "./src/media/images/Random/2.jpg");
/* harmony import */ var _media_images_Random_3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../media/images/Random/3.jpg */ "./src/media/images/Random/3.jpg");
/* harmony import */ var _media_images_Random_4_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../media/images/Random/4.jpg */ "./src/media/images/Random/4.jpg");
/* harmony import */ var _media_images_Random_5_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../media/images/Random/5.jpg */ "./src/media/images/Random/5.jpg");
/* harmony import */ var _media_images_Random_6_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../media/images/Random/6.jpg */ "./src/media/images/Random/6.jpg");
/* harmony import */ var _media_images_Random_7_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../media/images/Random/7.jpg */ "./src/media/images/Random/7.jpg");
/* harmony import */ var _media_images_Random_8_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../media/images/Random/8.jpg */ "./src/media/images/Random/8.jpg");
/* harmony import */ var _media_images_Random_9_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../media/images/Random/9.jpg */ "./src/media/images/Random/9.jpg");
/* harmony import */ var _media_images_Random_10_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../media/images/Random/10.jpg */ "./src/media/images/Random/10.jpg");
/* harmony import */ var _media_images_Random_11_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../media/images/Random/11.jpg */ "./src/media/images/Random/11.jpg");
/* harmony import */ var _media_images_Random_12_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../media/images/Random/12.jpg */ "./src/media/images/Random/12.jpg");
/* harmony import */ var _media_images_Random_13_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../media/images/Random/13.jpg */ "./src/media/images/Random/13.jpg");
/* harmony import */ var _media_images_Random_14_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../media/images/Random/14.jpg */ "./src/media/images/Random/14.jpg");

























const randomImages = { randomImage1: _media_images_Random_1_jpg__WEBPACK_IMPORTED_MODULE_8__, randomImage2: _media_images_Random_2_jpg__WEBPACK_IMPORTED_MODULE_9__, randomImage3: _media_images_Random_3_jpg__WEBPACK_IMPORTED_MODULE_10__, randomImage4: _media_images_Random_4_jpg__WEBPACK_IMPORTED_MODULE_11__, randomImage5: _media_images_Random_5_jpg__WEBPACK_IMPORTED_MODULE_12__, randomImage6: _media_images_Random_6_jpg__WEBPACK_IMPORTED_MODULE_13__, randomImage7: _media_images_Random_7_jpg__WEBPACK_IMPORTED_MODULE_14__, randomImage8: _media_images_Random_8_jpg__WEBPACK_IMPORTED_MODULE_15__, randomImage9: _media_images_Random_9_jpg__WEBPACK_IMPORTED_MODULE_16__, randomImage10: _media_images_Random_10_jpg__WEBPACK_IMPORTED_MODULE_17__, randomImage11: _media_images_Random_11_jpg__WEBPACK_IMPORTED_MODULE_18__, randomImage12: _media_images_Random_12_jpg__WEBPACK_IMPORTED_MODULE_19__, randomImage13: _media_images_Random_13_jpg__WEBPACK_IMPORTED_MODULE_20__, randomImage14: _media_images_Random_14_jpg__WEBPACK_IMPORTED_MODULE_21__ }
const images = { al_biology: _media_images_al_biology_jpg__WEBPACK_IMPORTED_MODULE_0__, al_chemistry: _media_images_al_chemistry_jpg__WEBPACK_IMPORTED_MODULE_1__, al_physics: _media_images_al_physics_jpg__WEBPACK_IMPORTED_MODULE_2__, ol_biology: _media_images_ol_biology_jpg__WEBPACK_IMPORTED_MODULE_3__, ol_chemistry: _media_images_ol_chemistry_jpg__WEBPACK_IMPORTED_MODULE_4__, ol_combined: _media_images_ol_combined_png__WEBPACK_IMPORTED_MODULE_5__, ol_economics: _media_images_ol_economics_png__WEBPACK_IMPORTED_MODULE_6__, ol_physics: _media_images_ol_physics_jpg__WEBPACK_IMPORTED_MODULE_7__ }

function generateSideButton(level, subject, year, session, variant) {
    const element = document.createElement('div')
    element.classList.add('side-container')
    element.id = variant == undefined ? session == undefined ? year == undefined ? `side-${level}-${subject}` : `side-${level}-${subject}-${year}` : `side-${level}-${subject}-${year}-${session}` : `side-${level}-${subject}-${year}-${session}-${variant}`

    const buttonElement = document.createElement('div')
    buttonElement.id = variant == undefined ? session == undefined ? year == undefined ? `side-${level}-button-${subject}` : `side-${level}-button-${subject}-${year}` : `side-${level}-button-${subject}-${year}-${session}` : `side-${level}-button-${subject}-${year}-${session}-${variant}`
    buttonElement.classList.add(`side-button`)
    buttonElement.classList.add(`side-button-${variant == undefined ? session == undefined ? year == undefined ? 'subject' : 'year' : 'session' : 'variant'}`)

    const arrowDownSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowDownSvg.classList.add('side-button-arrow'); arrowDownSvg.setAttribute('width', '32'); arrowDownSvg.setAttribute('height', '32'); arrowDownSvg.setAttribute('viewBox', '0 0 256 256'); arrowDownSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowDownSvg.innerHTML = '<path fill="currentColor" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />'
    const arrowUpSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowUpSvg.classList.add('side-button-arrow'); arrowUpSvg.classList.add('hidden'); arrowUpSvg.setAttribute('width', '32'); arrowUpSvg.setAttribute('height', '32'); arrowUpSvg.setAttribute('viewBox', '0 0 256 256'); arrowUpSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowUpSvg.innerHTML = '<path fill="currentColor"d="M216.49 168.49a12 12 0 0 1-17 0L128 97l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0l80 80a12 12 0 0 1 0 17" />'
    if (variant == undefined) {
        buttonElement.appendChild(arrowDownSvg)
        buttonElement.appendChild(arrowUpSvg)
    }

    const title = document.createElement('div')
    title.textContent = variant == undefined ? session == undefined ? year == undefined ? subject == 'Combined' ? 'Combined Science' : subject : year : (session == 'm' ? 'Feb / Mar' : session == 's' ? 'May / Jun' : 'Oct / Nov') : `Variant ${Number(variant) + 1}`
    title.id = variant == undefined ? session == undefined ? year == undefined ? `side-${level}-${subject}-title` : `side-${level}-${subject}-${year}-title` : `side-${level}-${subject}-${year}-${session}-title` : `side-${level}-${subject}-${year}-${session}-${variant}-title`

    buttonElement.appendChild(title)

    element.appendChild(buttonElement)
    if (variant == undefined) {
        const container = document.createElement('div')
        container.classList.add('side-container')
        container.classList.add('collapsed')
        container.id = session == undefined ? year == undefined ? `side-${level}-${subject}-years-container` : `side-${level}-${subject}-${year}-sessions-container` : `side-${level}-${subject}-${year}-${session}-variants-container`

        const group = document.createElement('div')
        group.classList.add('side-group')
        group.id = session == undefined ? year == undefined ? `side-${level}-${subject}-years` : `side-${level}-${subject}-${year}-sessions` : `side-${level}-${subject}-${year}-${session}-variants`

        container.appendChild(group)

        element.appendChild(container)

        arrowDownSvg.addEventListener('click', () => {
            arrowDownSvg.classList.add('hidden')
            arrowUpSvg.classList.remove('hidden')
            container.classList.remove('collapsed')
        })

        arrowUpSvg.addEventListener('click', () => {
            arrowDownSvg.classList.remove('hidden')
            arrowUpSvg.classList.add('hidden')
            container.classList.add('collapsed')
        })
    }

    return element
}

function generateMainButton(level, subject, year, session, variant, randomImage) {
    const elementContainer = document.createElement('div')
    elementContainer.classList.add('card-container')
    elementContainer.id = variant == undefined ? session == undefined ? year == undefined ? `${level}-${subject}-card-container` : `${level}-${subject}-${year}-card-container` : `${level}-${subject}-${year}-${session}-card-container` : `${level}-${subject}-${year}-${session}-${variant}-card-container`

    const element = document.createElement('div')
    element.classList.add('card')
    element.id = variant == undefined ? session == undefined ? year == undefined ? `${level}-${subject}-card` : `${level}-${subject}-${year}-card` : `${level}-${subject}-${year}-${session}-card` : `${level}-${subject}-${year}-${session}-${variant}-card`

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')
    const image = document.createElement('img')
    if (randomImage != undefined) {
        image.src = randomImages[`randomImage${randomImage + 1}`]
    } else {
        image.src = images[`${level}_${subject.toLowerCase()}`]
    }
    imageContainer.appendChild(image)
    element.appendChild(imageContainer)

    const title = document.createElement('div')
    title.textContent = variant == undefined ? session == undefined ? year == undefined ? subject == 'Combined' ? 'Combined Science' : subject : year : (session == 'm' ? 'Feb / Mar' : session == 's' ? 'May / Jun' : 'Oct / Nov') : `Variant ${Number(variant) + 1}`
    title.classList.add('card-title')
    element.appendChild(title)

    elementContainer.appendChild(element)

    return elementContainer
}

function generateRandomImages() {
    const randomImagesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    shuffle(randomImagesArray)

    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }

    return randomImagesArray
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


function createModal(title, contents, submitButtonBehavior, cancelButtonBehavior) {
    const modalContainer = document.createElement('div')
    const modal = document.createElement('div')
    const backdrop = document.createElement('div')
    const modalButtonsContainer = document.createElement('div')
    const modalTitle = document.createElement('h1')
    modalTitle.textContent = title

    modalContainer.appendChild(modal)
    modalContainer.appendChild(backdrop)
    modal.appendChild(modalTitle)

    for (let i = 0; i < contents.length; i++) {
        const modalContent = document.createElement('h2')
        modalContent.innerHTML = typeof (contents[i]) == 'string' ? contents[i] : contents[i][0]

        if (typeof (contents[i][1]) == 'function') {
            contents[i][1]()
        }

        modal.appendChild(modalContent)
    }

    modalContainer.classList.add('modal-container')
    modal.classList.add('modal')
    backdrop.classList.add('backdrop')

    backdrop.addEventListener('click', () => {
        modalContainer.parentNode.removeChild(modalContainer)
    })

    document.addEventListener('keydown', e => {
        if (e.key == 'Escape') {
            if (modalContainer.parentNode == null) {
                return
            }

            modalContainer.parentNode.removeChild(modalContainer)
        }

    })

    modalButtonsContainer.classList.add('modal-buttons-container')
    modal.appendChild(modalButtonsContainer)

    if (submitButtonBehavior != undefined) {
        const submitButton = document.createElement('button')
        submitButton.textContent = submitButtonBehavior[0]

        submitButton.addEventListener('click', () => {
            submitButtonBehavior[1]()
            modalContainer.parentNode.removeChild(modalContainer)
        })

        modalButtonsContainer.appendChild(submitButton)
    }

    if (cancelButtonBehavior != undefined) {
        const cancelButton = document.createElement('button')
        cancelButton.textContent = cancelButtonBehavior[0]

        cancelButton.addEventListener('click', () => {
            cancelButtonBehavior[1]()
            modalContainer.parentNode.removeChild(modalContainer)
        })

        modalButtonsContainer.appendChild(cancelButton)
    }

    document.body.appendChild(modalContainer)

    return modalContainer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModal); 

/***/ }),

/***/ "./src/media/fonts/Mona Sans/Mona-Sans.ttf":
/*!*************************************************!*\
  !*** ./src/media/fonts/Mona Sans/Mona-Sans.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/Mona-Sans.ttf";

/***/ }),

/***/ "./src/media/images/Random/1.jpg":
/*!***************************************!*\
  !*** ./src/media/images/Random/1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/1.jpg";

/***/ }),

/***/ "./src/media/images/Random/10.jpg":
/*!****************************************!*\
  !*** ./src/media/images/Random/10.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/10.jpg";

/***/ }),

/***/ "./src/media/images/Random/11.jpg":
/*!****************************************!*\
  !*** ./src/media/images/Random/11.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/11.jpg";

/***/ }),

/***/ "./src/media/images/Random/12.jpg":
/*!****************************************!*\
  !*** ./src/media/images/Random/12.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/12.jpg";

/***/ }),

/***/ "./src/media/images/Random/13.jpg":
/*!****************************************!*\
  !*** ./src/media/images/Random/13.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/13.jpg";

/***/ }),

/***/ "./src/media/images/Random/14.jpg":
/*!****************************************!*\
  !*** ./src/media/images/Random/14.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/14.jpg";

/***/ }),

/***/ "./src/media/images/Random/2.jpg":
/*!***************************************!*\
  !*** ./src/media/images/Random/2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/2.jpg";

/***/ }),

/***/ "./src/media/images/Random/3.jpg":
/*!***************************************!*\
  !*** ./src/media/images/Random/3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/3.jpg";

/***/ }),

/***/ "./src/media/images/Random/4.jpg":
/*!***************************************!*\
  !*** ./src/media/images/Random/4.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/4.jpg";

/***/ }),

/***/ "./src/media/images/Random/5.jpg":
/*!***************************************!*\
  !*** ./src/media/images/Random/5.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/5.jpg";

/***/ }),

/***/ "./src/media/images/Random/6.jpg":
/*!***************************************!*\
  !*** ./src/media/images/Random/6.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/6.jpg";

/***/ }),

/***/ "./src/media/images/Random/7.jpg":
/*!***************************************!*\
  !*** ./src/media/images/Random/7.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/7.jpg";

/***/ }),

/***/ "./src/media/images/Random/8.jpg":
/*!***************************************!*\
  !*** ./src/media/images/Random/8.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/8.jpg";

/***/ }),

/***/ "./src/media/images/Random/9.jpg":
/*!***************************************!*\
  !*** ./src/media/images/Random/9.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/9.jpg";

/***/ }),

/***/ "./src/media/images/al_biology.jpg":
/*!*****************************************!*\
  !*** ./src/media/images/al_biology.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/al_biology.jpg";

/***/ }),

/***/ "./src/media/images/al_chemistry.jpg":
/*!*******************************************!*\
  !*** ./src/media/images/al_chemistry.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/al_chemistry.jpg";

/***/ }),

/***/ "./src/media/images/al_physics.jpg":
/*!*****************************************!*\
  !*** ./src/media/images/al_physics.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/al_physics.jpg";

/***/ }),

/***/ "./src/media/images/ol_biology.jpg":
/*!*****************************************!*\
  !*** ./src/media/images/ol_biology.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_biology.jpg";

/***/ }),

/***/ "./src/media/images/ol_chemistry.jpg":
/*!*******************************************!*\
  !*** ./src/media/images/ol_chemistry.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_chemistry.jpg";

/***/ }),

/***/ "./src/media/images/ol_combined.png":
/*!******************************************!*\
  !*** ./src/media/images/ol_combined.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_combined.png";

/***/ }),

/***/ "./src/media/images/ol_economics.png":
/*!*******************************************!*\
  !*** ./src/media/images/ol_economics.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_economics.png";

/***/ }),

/***/ "./src/media/images/ol_physics.jpg":
/*!*****************************************!*\
  !*** ./src/media/images/ol_physics.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "media/ol_physics.jpg";

/***/ }),

/***/ "./src/json/AL_subjects_ms.json":
/*!**************************************!*\
  !*** ./src/json/AL_subjects_ms.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Physics":{"2017":{"m":[null,"CBDCDABADBBBCCBAACCBACACDACCDADBCACDBCBC",null],"s":["DDADCBBCDAADCAACCDADABBBCBCCAABACACBCABC","BADCBACBCACDDCBCCAADBCBADBDBBCCAACABBABA","BBDCBADCDADAAADCBDBABACDDABCDDBBCBCAADAA"],"w":["CBBCDCBBBDDAABBDABBADBCADCACDCCCCADBBDBA","DACDCBBDCBDBDABADABDADDBCDDCCDABDCABBAAC","CCABBDCDBABBCAADCDADACDACCDCBCACDDCBCDCB"]},"2018":{"m":[null,"BBDBBBBACCAACCCCABACDACCBDCDBDDCDAACDCDB",null],"s":["ACCACABABADDCCDBCBBBABDCBABDBCADACBBDCDD","CBDDACCDCDCBACDBCCBDDBDADCDACDAABBAACCBB","BBAADBCBCADDBADBBDCCDBDBDAABCABDBACDDDCA"],"w":["DDBBCDACDACACABBCBBCDCADAACCCBBDABBAABDB","ABBAACBBBDDCACDAABADDDBADDABACCDAADBBCCA","CCCBBABAACABDDDBCCDBDBBDBDCCBBDABCADCCAA"]},"2019":{"m":[null,"ABDABACBACCDDDCDBDBDCDCDDCCABABDCADBADDD",null],"s":["ACBDBBDABCDACCDACBCABAACDBDBDCADBBACCAAD","BDACDCDBCADDCDDBDACACBADDBDCCBAABACAACCD","CDCBACBCCBACADDCABBCCCBDABCDBDDBADACBBAA"],"w":["DAACDCACDCDACADCCBDDCCBADCAABBBBABDDCDBD","DABCBBDDAAADBACDBABDDCCBCBDBCBBCCACCABCB","CDCBCBADBBAABAABABDCCBBBACADCCDDCCDAABDA"]},"2020":{"m":[null,"CDDCDDADCBAABBBDACBCBABDDCBCDADDBDBBCDDC",null],"s":["CBBBDDAACDDACDBCBCDBDAABBCBBACDACBCDBDBC","DCBDBBBCDBBABCCDCCBBACADDABBAADADBACAABA","CCAADACDBCBBADBDDCCAABDBDACADCDDCDCBDAAC"],"w":["CBADDDBCBBBBDDBCABCCCBCACAAABAAADABBADAA","BCADBAADBCCAACBADCACCDDBCAABCBBBABDBDDCD","BABACACBDDABBDDBCABCCDBBADBCACDDBACCDCDB"]},"2021":{"m":[null,"DCCBDDCDAAADCCDABBBCBBCCDBDCDBADCBCCDABB",null],"s":["ADCBDCCDACADCDADABBCDBAAABABBDCACBDCBBBA","DBDDDDBCBDACBCAADDADBABABCBBCADAABACACCA","CCABBDCCDBABAABDCBDDCBAADBCBABDACAACBCCD"],"w":["BBAABBDCBDCADDDCBACADBDADADCCBACDADCAACB","CADADCBABDBCCDCBCAABADDDCACBAAACBBBCAACB","CDCBDBDAAABAACCBCCBCDBDACBACDBBDDDBAABDB"]},"2022":{"m":[null,"BBDBDDCACDACDDABCDCDBCADCCDBDBACCAABCCBD",null],"s":["DBACCCDDBDCBABAACAADADCDABBABDCBDDDADDCC","CBCBADCABBCDCBCBACBADCDAABBDDCBADABADCCB","DDBCACDCDBACDBAACCBCBBBDAABCBBDDDBDAABBA"],"w":["CDCADBCAADBACDCDCCCDABBDAAABDCBCABCDCBAD","DCDCAADCBCDDBACACBCBADBABDBCCDBBDDABACBB","BBCDABDDABDDBCBBCBCAACBACBCCDDDACBCCBADD"]},"2023":{"m":[null,"CBABBDDCDCCBDDBCBCBDAADBCDBCADABBABACCAA",null],"s":["CBDBCCCAADDACACBBAADACCCBACDACBDBCABDDDA","BDDCBACBDABCAADABDBBBCDBAABDCCADCDABCCDA","CADACDBBDCBCDACCDBBADDBCBACBDADBBAACADAA"],"w":[null,null,null]}},"Biology":{"2017":{"m":[null,"CCCABDDBADCDBDCBBDACCABDCBAADABAADCBBBAB",null],"s":["DCCDBADDDDCBBACCBDCCBCCDADDCAACABAAAABBC","CDAACDBBDBCBDCDADCCDCDCACBCDBAADCBDADAAA","ACCBBADACBCCDBABBBDADCDBDCACCCBCACDCDBDD"],"w":["BCAABBBABDDCAAADBBCCCDCDBBADBCBBAAADDBCD","DDBBAACCABABCDDADACBACCDCABACBAADCDDCADB","BACCACABDADBDAACABCDCDCBBCBDAADDCCDABCBA"]},"2018":{"m":[null,"DCACBDADABABCAACBDBDDCCDBBDCACDBDCCDCBCA",null],"s":["ABCBCCACCADADABACBDDACCDDCDBBACCCDCBDBDB","ABBBAACCDBCADCBCBABCDDBACCDCCBDDACCADCAD","DABADBDADCABBCBABCDBAACACCDBBACBCADCADAD"],"w":["CCCBADBBCADDCBAAACBBCBDABAABBADADDACBDDA","BDABBCCABADDCDCDDAACBBDCDDDBBBACACDABBCC","CCDBADDDBCCBDABCDCCDABAACBCAABBDDCBDBABD"]},"2019":{"m":[null,"ACCAACADACBDBACBDABDBDACBACCDBACDDCDDBBD",null],"s":["DCABABAADABBCDABBBCDDBCBCDCACBDDBDCADAAC","DBDBBBABBDCCCCBAAABCDDBCDDDCBDBADACADCAB","DBCCDDDDCBDAADABDBAACBCBCBBBCCBAABCBACAC"],"w":["CBDCADBACDACDDBADADBBBAACCCBDDDDABBACBDC","DCCACABBBABDBDBCBCDBDBBAABAADDCBCADADACA","CDADDBCCCBADAABCBDAAACBCABBBCDBDACCDDBCD"]},"2020":{"m":[null,"CACCDACACBCBDBDBAABDCADDCBDBABAACCDDADBA",null],"s":["BADABDABAAACBCDBCDDBABCCADBCDDCCBBCADDCA","CABCDACCCABDBDDBCDDCACBDCCDACAADBDDBDABD","CBDCBBBDABDAADBABCDBCCBAABDBDABDCDBCADBA"],"w":["CBCCADCBDADDABDAABBDAACAABAACACBDCBABCBD","BDDDABACDDBADBDBBACCBCAAABBCACCDBBBAAABD","DCBDADCAAACDCBDABBABDCCCBDBDCCBCBACDDABC"]},"2021":{"m":[null,"DBACBDCACCDCBBADBCCACDBDABABDCDABCDCDAAB",null],"s":["CDADDBCBABDCDDADCCBDBBADBBDBBADCAABBAABC","DBCDBBDCCABABAADCCAADCABCCBCBDBCCDCBDADB","ACCBCABDCDCBDDCADDABDCBAADACBBAACCADBDAC"],"w":["BADCCAADACCDCBDDCADBCBDDDBBDDCCADACAABAC","CBDBBDCBAACCACBDBDDABBCBBBDDBAADCCCADCDB","CBCAABQBACDBCDBCDADCCBBCDACDDDCBCDAAADAB"]},"2022":{"m":[null,"DACDBBDDDADCDCCBAABBCDBCCADACDBACACBCABD",null],"s":["CDBAACCAAACBBCBBABADCCCBAAADDDCCBBDDABDD","CCCBDDAABBAADCAAAADBCDCCBCABDBDACDBCADDC","BCCDDCBDBCBBBABCACCDCCBDADCABCCACDAADDBB"],"w":["DACADAADCCDACBDCDDBCDCBBBCACABCCDBBBABDD","DACBDADCBCBCACCCCABBCADBDDCDDCAAADABADAB","DBBCAAAABADADACBAACBADCCDCDBCADDCCBBBDAC"]},"2023":{"m":[null,"ACCBDCABADCDBABBDBACCBDCADDDCAABCCBCBADC",null],"s":["BAADBDCCCCBBDBBCDBCBDCABAAACBADCDDBCDADC","BBBBCBDBBDBAACCDCAADBABBCBBCACABBADCCDDB","BDCABABCACDDBACADBBABCCBDCCBDDDCACBACCDC"],"w":[null,null,null]}},"Chemistry":{"2017":{"m":[null,"CBDCCBBACBDCCACCADDDDACBACDDBCDDBBAAACAA",null],"s":["CDACBADCBCBABACCACABDBBCDCACABBDDADABDBA","BBCDADCCAACBBCDCDDBDDCADDBDADCBCCABABBAB","ADBBDBABABBCCBDADBCCCDACDDBAACCBABAAADCB"],"w":["AADCBADDDCCAABCDDCBCAABBABCBDCBBADBCBDCA","ACBCCDBDCDAABCCAABCCABABBACBDCABDDABABDB","AADCBADDDCCAABCDDCBCAABBABCBDCBBADBCBDCA"]},"2018":{"m":[null,"DACCCDCBBDCBABBDBDCDAAACAABDCBDABDDAABAB",null],"s":["ADCCDABABDBDCDBDADDBBABACBAACCDBDCDACCBA","CDDDBACDBABDDABDDCDABABCDBDBACCADCABABCB","BDBCCADDCDDCDCABCBBCDDCBBACDBBAACBAABACC"],"w":["DAACCCBCDDCCCBBADDDBACBDBDABCCADBCAABCAB","DBCDAABBDAADBBBCCCCACBCCDBAAACDDBDDBDDAC","DAACCCBCDDCCCBBADDDBACBDBDABCCADBCAABCAB"]},"2019":{"m":[null,"BADCBBBCDBCABAABDADCABCBADCDDCCADBCADBAC",null],"s":["BDCACABDBCDDCABCDCBDABDBDCAAACBDACDAABCC","BBACCCBBCCBDCDDDBADCADADBCBBDCADAADBABAC","DCDCBCDABADDBCBCCBDDABDCCBACCADABAACBDAB"],"w":["CCDBCAADDCAADBBCAADACDCBCAABCDADBBCDBBAD","DAADCDBCCCCBACCDACBDABACADDCBABADAABDBCC","CCDBCAADDCAADBBCAADACDCBCAABCDADBBCDBBAD"]},"2020":{"m":[null,"ADACDABCBDBDACBDCACBBBCADCADBDCADBDBACCA",null],"s":["ACBDCCBBDACDDABDCDAACCBACDBDAABADACBCBDA","BCCADDBCABDCDBBBCDAACDBAABCCDCBCAADACADB","BAADDDCDBCBBDADAABACDCABCCBACDACBCABDADB"],"w":["CBCABCBABCCBBACCDDCDDADCDBCADAADADBABCAB","AACDDACCCBCBBBDBCDDBCBABADDDACBBDAADBCAC","CBCABCBABCCBBACCDDCDDADCDBCADAADADBABCAB"]},"2021":{"m":[null,"ADABCDACBCDBCDBAACDDCDADACADCBBBCADCBBAB",null],"s":["CCBDBBCADDCBBAACDCDABBCDAACBCDAADBDAABDC","CDBCADDAABCBCCDDDBCBDABCAACDBDBACBDAAACB","ADCACBADDADBBCCDCBCBBBADAADCBDBBCADADCAC"],"w":["ACABCDBCCBDDCCADDABABDBCADACBBADABDCBDCA","ACCBBBDABDDCBDACDADCACACDDACBBACDCCBAABD","ACABCDBCCBDDCCADDABABDBCADACBBADABDCBDCA"]},"2022":{"m":[null,"AACDBBCDAACABDABACDBDDBCDCCABACADCAABCCB",null],"s":["BBADDCAADCBCDBBCACACBDDDCCACBACCADBDBBDA","CADBCBDBADDCBCAABCABDDDBCCAABBADCADBCACD","DCAADBCCBABDBDDCAACBBACACDABCCDABDCDBABC"],"w":["ACDDCBADCBCBBAAACBADCBCDDBBADACAABCDDBCD","ACDBCABCABBDCCDADDBABCBCADADABDDBCACBDCA","ACDDCBADCBCBBAAACBADCBCDDBBADACAABCDDBCD"]},"2023":{"m":[null,"DDBADABCBDCCCDCAABABBCDDDBABDADBADCABCBB",null],"s":["BAAABCBCABDAACBDCCCCCBBCBDACACCCBADABCDC","CBDCBDBBBDCBBBCCDDCABAACABBDCDCDCBDADCCB","BDBADCDBABBACDCACBBDBACCDACBCDBCDDABAABD"],"w":[null,null,null]}}}');

/***/ }),

/***/ "./src/json/OL_subjects_ms.json":
/*!**************************************!*\
  !*** ./src/json/OL_subjects_ms.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Physics":{"2017":{"m":[null,"BDBBBACCCBDBBCACCACDDBBACBACAABABBADDCCA",null],"s":["ABBCCDCBAACCCABDCDBDDAADACCADCBBCDCDBBAB","ABCBBBCACABDCADADDBCDAABCCABDDABBBDABCAC","ACCBCBBDCCBDCAADCDBADAABCDAAACBBADCDAAAB"],"w":["AAADBCBCDDBBBAADACACACDDABBCCACBBBADCABA","BDCDCCCCCCABBADADCBCDAADBCCCAACBCBDABBDA","AAADCDDCCBDBBADAACCCDCADDDBCABCCDBCDCACD"]},"2018":{"m":[null,"DCDDCCADBBBACBDADBACDBADCBDCCABDADDAACDA",null],"s":["ACDBAABBCCCCDDBBCBDBADADCBCCDBDBBCAADDCA","ACBCDCDBCDDCBDBBBDBDAAADCBBCDBDBDAAADDAA","ACABAABDBBBDBDBCBBBDAADBCDDCCCDBACCCDCDA"],"w":["BCBDCDADCBCAAADAACBBCDBBCBBACDADCACABABA","BBBDADADCCCAAAADAACACDCBBBABDCBADADABCBC","BAADCDCCCCCAAADDDBACCABBBABDCACDACCCBDBC"]},"2019":{"m":[null,"DCCABDCBBACBCBDDCCDCCCDADBCCBBACAABADCAC",null],"s":["CCDCCDDCCBCACAABDBBCBDDBADDBCBBABCDCDCBB","CCDDCBBCCCADCAABBBDCDBDBABDBAABDCADABCBC","CDDDCDDBBACBCDABDBCADBDBABDBCCBCCBCCADBA"],"w":["CCBCDBDCBCDCCBCDAACBACADDDCDBDABBCBCAABA","DCBADCDCBCCBCCBACAADDACBDDDCDDAAABBCDBBA","CDBBBADCBACCCCABADDBABDDDDCDDBCBBBBBAACC"]},"2020":{"m":[null,"AADDCDACCBCCCDBCACACDAADADCCACBDDDBCCBBB",null],"s":["BAACDBCAACBACBACAACABCCACCBCCABACBBCADAA","AAACBCBCABCACBADAADBABCADCCBCCABBBCBADAA","BAACADBBDDCACCDBAABDBCAAACDACDABABBAADAA"],"w":["CADBBBABCCCABCDACCACDCBBABBCACACABACCDAC","DCCBDCABCCDACCDCCACADCDBBBBACBCABBACDAAC","BBBBAACBCCCABCDADBBCDCDBACBBAAACBDAADADC"]},"2021":{"m":[null,"BDCDCACCCDBCACDCABBADACDDBCBDCBDDADCDCBB",null],"s":["CBADADDDCDADDCBABBACCBAADBCBCDBCDBBBDDAB","AADCDDDCABADCCBADCAACBBACCDADCDDCDBCCDBB","CABCDDCDBCDDADBCADBACBAABDCDCDCBCBACDABB"],"w":["DDACCBADBBACBCDBDBBCDACBBBCDBDCACCADCABA","CDBCABCDAACCDCDBCCBCBACBAABDDDDABDBCCBAB","BADCABBDCCDCBCBBACBCAAABDCADDDAAADAACBAB"]},"2022":{"m":[null,"BDDAACCDDBDBCBBCBBCCBDCBDADDABAAACBCDADB",null],"s":["BDACCADCDBACADBBBABCBACBAABDABBAACCDDCAD","DDDCCCDBBBBBACBBBABABCBDAABBBDCACDDDACBB","BDCCCCDAABBCAAACBABDBCCCAABCDCCBABBDCCBA"],"w":["BCCBCBDABBDCCBBADDCBAACCDBDBDCADADBBBCBA","ABCBDDBBCACCAADADACBADDBBDCBDABDBDCACACD","CBDBCDCBCCCCAABABDABCDDBBBABAADADDCACCDC"]},"2023":{"m":[null,"BDBADDBDBACDCDDCCCCCDACBACDCCBDCDDCDBBDA",null],"s":["DBCDDABCAACADCBBAABBDACBCDCCBCCDCBACADDD","CCCBBBCBCABDAABCBAADBCACDACDDCDCDBABCDDA","BCCCBADBDDDCBAAACDCCCBBCAABACADACCCADBCB"],"w":[null,null,null]}},"Biology":{"2017":{"m":[null,"CBCDCDCCABDCABCCDCBDADDABDCBBCCBCCCCDDAA",null],"s":["BCCBCBDABBDCCBBADDCBAACCDBDBDCADADBBBCBA","BCCBCBDACDACCBCCDDBBDADBDCDBDCACDCABBCBA","BCBBCDAAADDCCBCADADBAAADCDDBDAACADACBABA"],"w":["DACBCBDBDCDBABBBBAACADAAADCACBCCDBDDDDAC","BABADBAAABABBBCBDABCAAABADCDACDCBBADDDBB","DADDABABCADBDBCBCACCAAAAADAAABABDBCCDABC"]},"2018":{"m":[null,"BDDABDBADAACBDAADACBBBCBABBCBDCABBBBCBBC",null],"s":["ABCDBBABCABBBACCBDAABDCBCCDABDBBBDCBCACD","ABCDBBBBCABACDDBBDAABADACBDCDCACACACDADA","ABCDBBABCABBAAACBDAAADDBBCCDBBBBCABCABCD"],"w":["DBABBDDBDACCCCDADBACDCACBDCDCBBDCDBCDCBB","DBBBBCDCDACACDDADBACACBCBDCDCBBBBDBDBDDD","DACBBADDDBCDCACADBACCCBCCDBCAADBABCDBCDD"]},"2019":{"m":[null,"CADCCBACADBDCACBCCCCCDBADBDACCBADADBCBDB",null],"s":["BCBBBCDCCCCBDCABBCCCAAADCCCADADCDDBDDDDC","CCBBCCBACCCBACDBBDCAAADADCACCAACBADAADBD","CCABDCDBCCCDBCCBBACBACAAACCDAAACABDCCDCB"],"w":["DBCCCABACAABCABDBABDACBCBBACBCADCBCBDDAA","BDACCABADDABBACDDABCABBBBCBDBDABBDCBDBAA","CDBCDADABDABCADABACCABBDBDBCBBACDCBCCBAA"]},"2020":{"m":[null,"BBBDBABACCCBBCBADDADCCCBCBAACBBDDBABCBCA",null],"s":["DADAABBBDCCCCBABCBCCBBACDDBADBBCBCCABBAC","DAABAABBCACDDBCCBCCBBAACABBABBDCBCCABBCC","DABCABBBADCACABACCCBDDDDDACBCCCABCCABBDC"],"w":["DBDCADABDDADBADDDDABCBDDCAABADBBBBAACADC","ABDCADABDDAABADCDBDBCDCDACCDCBBACAACCACB","BBDCADABDDACBCDADDDBBDCDCDDACDCAACDBBDBC"]},"2021":{"m":[null,"DDCCCDADBBBDCDCCBACAACCCBCDAAABBCBCADDDB",null],"s":["DADCCBBACDBDABCABBCCAAACDCDDACBDDBDBCACC","DBDBCBBACCBAABCADCCAAACABDBBDCACBCDBBBDA","DDDCCBBACBBCABCBACCDAAAABBBAACCCBDBCABAA"],"w":["DDCCCDBDCACBDCCDBACABDDCABCABCCDCBCBCACC","BDBCCDCDCACBCBCADABBBABBCCBADCBCDBCDCAAC","CDCCCDCDCACBCCCCCADABBCADDCAABADACCDBCCD"]},"2022":{"m":[null,"BCDBDCBBACABAABDCDABBACBBDCDDACACBBDBCCA",null],"s":["CDACABDCAADBBCDDACABBCBCBDDCDCBBBDCBAACA","CDACCBDBCADCBAADCBCCBDBBCABCCBCBBDDBAACA","CDACBBDBBADBCBBBDDBDDCBCACDABBBCBDCBAACA"],"w":["CCBABCBCDDBDCCCADBCCDACBBBADDCCACCDCDCCA","CCBBBCCABDADCCCADBCCCBABBDCDBCCCABACBDBA","CCBBBBBDCACDCCCADCCCADBBCBDCBCADDADBACDA"]},"2023":{"m":[null,"CBDCDABDAABAACDBACACCDCBDACBDDDDDACDBCCD",null],"s":["CACBDDABDACBDACABCBBBCCDBDBABDACCCCBCADC","ADCBDDCBCDACCCAABCBDDCBAADBCACCCBADBCAAC","CABBBCCDBCCAABBCDBADCACABBCDDDCCCBDACCDB"],"w":[null,null,null]}},"Chemistry":{"2017":{"m":[null,"ABCCCCAADDBDBBAADBCDBCCBDCDCBCABCDCCACBC",null],"s":["DCDBCDBABBBCBCACDACDDACDABCCADDCCDCCCCBC","DCAABBBABBBCBAAADBBAAABDDBCCACADCCDACDBD","DDBCCCCABBDCDBACDADDCADDABDCACBBCCBBCDBB"],"w":["DCBACBABADBBBBCCBBABCABDAADDCBCBDCCCBBCB","CBBBBCABADBBBDCBBBBABBADABBACDACDCDBBBBD","CCCDBAABADCBBDAABBCBBAADACDCCCABDCCCBBDC"]},"2018":{"m":[null,"ACBCAAACCBCABCBACABBCADBCBCCCDABBDADCADB",null],"s":["ADACBDDBBDCABCBBCDCCCBACCDBBCCDACDADCAAB","CCDCBBDBBDCAACDDCCCCBCCABCBBCCDACAADCAAD","CDACBBDCCCCBBCDCCDBCBADBCAABCCDADBADCAAB"],"w":["BADCBCBDACCDBDCBCCCCBBBCDDCAAAABAAACADCD","AABADCBCABCBBDCDCDCCBBBDBADCDAACAAACAAAD","AADBDDCCDCCCBDBBAABCBBBACDCCAAABAAACADDD"]},"2019":{"m":[null,"ADCCCBDDACAABDBDDDCDBDBCDCDBCDDBBCDABBCA",null],"s":["BABBAAADADCBDDBBDAADCABCBDCBDDBCCCADCCCB","DCCBAACABCBBDDDBCADCCDBCBDCABDDCCCAAACBB","DCBAAADCADDADDDADACBAABCBDCBBDABCCABDCCB"],"w":["CACCABDCDACBBCBBAACBBACBCCBDABABBCDCBDDA","BACCCBBCCCBBBCBCBDAABDDBBCADBBDBDCCCBCDC","BACCCBBCDCBBDCCABBBCBDDBCCDDCBDBACDDBBDC"]},"2020":{"m":[null,"BBDACBCBCCDBCDDCBAADDACDBADDDBACCDDBADAC",null],"s":["DCCAADBCAAABADDCCDDCCBBBBBADACBDABBBDDBD","DDCBABDDAAAAACDCBDDCCDBABBAACABCACBDDBBA","DBCAABCDADACABCBBDDCBBBCBDACABBDABBADACA"],"w":["DBDADCABCDCCCDADBACBBDACCCADDACCBBCACBCD","DCDAACCBCDCCCBADBBCADAACABABDABDBDCCDBDD","DDDABCACCDCCADDCADDCCBACCAACDDAABBBDDBAA"]},"2021":{"m":[null,"CACDDADDDCACBACACBBACAAABDBDBABDCDDBBBBA",null],"s":["CBDAABDCBAADBCCDABBDCDDDCCACBCDBBCBACBBD","CBDAADDBCADCBCCDBBDCACDADCCBCBACBDAACCBD","CBDAADBBBACBCCCDCBBCCDCACBDBDDBDDAAABABD"],"w":["BCDBADCDCCBBCCBDCADCBBBBAACBDBADADACBAAA","ACDBACCBADBCCACDABDCBAABACCBCDADDDCBDBCA","BCDCACCAABBBCBBDDDACBDDBACCBADDDCDCBDABA"]},"2022":{"m":[null,"ADADCBABDCACCDCBDAABADDCDADACBDBBBCABCCC",null],"s":["BACAADAACDBBDDBBCBDCCDCDABCCDBDBACCDBCDA","BADCCAADADBBBDBBDBDBCDBAADDCCADABCCDCDCB","BABBDAAACDBBACBCCBDDCCAABAACCADDACCDBBDB"],"w":["DCBBDABCAADBCBAACCACBDADADDDDBBDBCDBACCC","ABDBDDBCDBDBDCCAACCBCDBDCABDDABDBCABDAAC","BCCCBDCCCADBADDABCBDCAADACDDDCBDBACBAABC"]},"2023":{"m":[null,"BBDACBDBACDBCDDCCADBBCABCAABBDCAABCAABCD",null],"s":["DCBABAABBACBDCCABCDBDACBDCAABBDCCDDCACDB","CDCBDBABACAACDACCDDDCBACCDDADBDADABBCCBB","ABDCDBCDDCCABCCBDAAADCACBCDACBDABBBBABCD"],"w":[null,null,null]}},"Combined":{"2017":{"m":[null,"BADAACBACADDABAABABBCDBDCCADDDABCBCBDCBD",null],"s":["CAADDBCABABDCDDBCABACDDCAACDCCDCCBADCBBA","DCBBBCBDABDDCDBACCADBCACCAABCCDAACADCBCB","BADCCBCBDCDCCDADCBACAAACABCBCCDCDDBDCBBA"],"w":["BDABDCCDDAACDBDCABBACCCBDBAABCBCDDBCACAC","BDCCDBBDDDAACBDAACBADBCBDBDBBCCBADACADAB","BDDCCACBADADBBDDCBBACDCCBBAADCAABDDCABAD"]},"2018":{"m":[null,"DCCBDBADDACCADBACBCCAACABDCDBCCABBBCCCDA",null],"s":["DACDDBCBCABADABBCDBCBACCADABDADBDDCBABDA","CCDBDCCADADDBADCBDACBACCCDADAACDBCBCABAB","BCBDDBDCCADACABBCDBCBDAADDDCADCDACCABBDB"],"w":["BCBDBACBDBABACBDACCDABAABABDABDBACCCBAAB","ACADBBDDCCBBACAADBCDACADAADBCADDABADBACB","DCCBBDDBABCBACDBBDBAABACCACDACDABBDBACAA"]},"2019":{"m":[null,"BCBDBBCABACDDCBDDBCBCABCACDCCABBCDDABBCC",null],"s":["DBDACBBDDDACCCDCACADBBADBADBABBCDDDCBBAB","DCBACDBDDDCCBCCADCADABDDBBDDCDACDDDBBABB","ADBCBDADDDCACCACBCDDAACDBDDADACDDCCCBDAB"],"w":["ABAAABDDBBDACCDDDCCDACADABBCCAABACACBDDD","ACBACDDCBBBCDCADCDDCDDABBACCCCAADAABCDDC","AABAADCABCDBCCDDCDBACDCABDBCCBDBCACABDDD"]},"2020":{"m":[null,"BCBADADBDBAACADBCDBCACBDDAADDABDBDCCBBBA",null],"s":["DBABCAADBCCABDACCCBDBADADDBBADCCAABDBACD","CDBBBAABDBABDACBCBAADCBDDCCDBCADCCDBBDCD",null],"w":["CBBABDADABACDDCDBDABCACBDBACCDBBABDDABBC","CBCBADBDACABDDDCDACCAACADBBCCBAABDCDABDD","BBCAADCCDAABCBCDDABDDCAACDBCDDDCBABDABDD"]},"2021":{"m":[null,"AACDBCACCDDBCDCDCBACDABACBDDCBBBADCBDCDA",null],"s":["DCDCBBCAADDBCBBDADBCDCACAACCDADBCABADBCD","DCBCDBBCDADCCDBABDCABCBDACCDDCBCAADABBCD","DCBDBBBCABADCACBDBCDBCACABCADBACCBBDBCCD"],"w":["CAADACBCABCDBDACABCBCDCBDDAADCBBCDADDBAD","CACCDDBDABADBCDBACDBCBCDAAAACDDABCADDBAB","CAABDACDABBDCCDBACABCDCBBDADDCADBBCDCDBA"]},"2022":{"m":[null,"AACBDDBCDACBCDBABDCACDAACDDBADBABCBCDCDC",null],"s":["BDBDADCDBABACBCABDCCABACBDCCCBCDCDBCBAAC","BDBADDCDDCABBBCBDCDAACBADDCABABCDDCBDACB","BBBAADADCAABDBDCBACDAABCDDCCDCBDBDACBACA"],"w":["BABBBDCDCDABADDCBBABDBCCACACDCBBABDBACDD","BABDCCACDACDBCBDDBABCDADCCABBBDBACBCACDD","BADBCDDAACBACBBABDABDDBADCACBDBDABBACBDD"]},"2023":{"m":[null,"CDDBCDBABBAACDACAAACBDDBDACCBCDDADBCABBC",null],"s":["CADADCBBADBCADDBCDBCADBBACCDDCBBCAADBACA","CBABDCBCAAADBBDABBCBBCACBCAACDBACBCDCCDB","CCACCCBADCADBCCBBBBDCCCABCDCCCBDBCADACBB"],"w":[null,null,null]}},"Economics":{"2017":{"m":[null,"DCDBBBDCDBBADADAABBDBACDABBBDA",null],"s":["DDBDBDCBADCDBCBBCCCBDABABCADDB","CABDBDACDDDDACCBBCABAACBBAAADA","AABCBCACBBCDBCDBBCABAADDBDACBD"],"w":["ABCAABCBCCBAADCCDDBCACCBBCBBBB","CBDDDBCBBABACDACADACDCACBCBBAB","ACCCABDDABAAADBCDDDCDCDBBABADC"]},"2018":{"m":[null,"CCCABBDAABADCBDCABBCABDDBCADDD",null],"s":["CADBCDBCDCCBDBDCCCBCADBDBDABBC","CADACDBBADCDABDCCCBDCDBBADDBAC","ABCABDBCCCDADBDCCCBDADBBADABAC"],"w":["BDCBADBBABDBCDDACCADADCCACCBBC","CDCDADBBDBBBCDDCCBABADCABCDBDC","DDBACCBBBACAADDCCBABADCDBCCBBC"]},"2019":{"m":[null,"CBCABDBCACACDCCADDBDBDADCBCAAB",null],"s":["CBBCCCBBDADCBABADBBAAABDDCDDAD","CBBABAACBADCCABCBADDCDDBDCDCDD","DCBCBACBBADDDABBABDCBCDCDCDADD"],"w":["BCCBDACCCCDDABBBDAACBDCDBDAADC","DCCBCBCCDCDCABBBAACDACDABDAABC","AACBCDABBCDADBBDABBCDDCCBDADBC"]},"2020":{"m":[null,"ACCACADDBACCDABDAABBCBCACBBCAA",null],"s":["AABBBDCBCDCDBADACCDDBCADDACDDD","DBBCBABDADCABBDACBABCCADBACBAD","DDABAABBDDCCBBDACADBBCABAACDDD"],"w":["DAABACBDDBDDAABAADACCABCDACDDC","BCCAAADBBBDAADDAACDCDABDDACBCC","CBBDCADCABDDABBAACDBBABCDACDAC"]},"2021":{"m":[null,"CDADDCCBBDACBBDABCABADADADAACB",null],"s":["DDDCCDADBCCADBDDABBDDBDDCDBABD","BBBDADCDBBBACDBABCCADBDDCDADBD","DDDBDACDBCABCCBBBBCADBDDCDBDAD"],"w":["ABDDADABCCBCDADBBACADQABADBDCD","AADCAADDCDADDACBBBCDAQAABDBDBD","ACDBDBACBABDBBCDBDCBCQAABDCDAD"]},"2022":{"m":[null,"ACBADDDCBDDCDCACBCAADQCCBDBADB",null],"s":["ACCCBDDABBABBBAACADDACBDBDCADC","DBCADBDCDABADCACCDABBDCCCDCACB","DBDABBADDCBAACABBBCCCAACCDBACB"],"w":["CAACCCDBBBDDCCCCADBDDCDDABACDA","CABBCACABBDDBBADBCCABDADCCACBA","CADCCABCBBDDDACDCCBABABDDAACAD"]},"2023":{"m":[null,"BAACCDADCADDDBAACBBBCACDCBDBAD",null],"s":["DCBBCDAACCADCBABCBDBDCDBBCBDBB","DDDCACABBCCDDDABCBDCCDBABBCACA","DCBBCDBCCBAADDBBCABDCCACADDACA"],"w":[null,null,null]}}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/OL_subjects_ms.json */ "./src/json/OL_subjects_ms.json");
/* harmony import */ var _json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json/AL_subjects_ms.json */ "./src/json/AL_subjects_ms.json");
/* harmony import */ var _generateElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateElements.js */ "./src/js/generateElements.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ "./src/js/modal.js");
/* harmony import */ var _pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pdftron/pdfjs-express */ "./node_modules/@pdftron/pdfjs-express/webviewer.min.js");
/* harmony import */ var _pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_5__);









// GLOBAL VARIABLES
let userAnswers = []
let inExam = false
let confirm = false
const subjectCode = {
    OLBiology: '0610',
    OLChemistry: '0620',
    OLCombined: '0653',
    OLEconomics: '0455',
    OLPhysics: '0625',
    ALBiology: '9700',
    ALChemistry: '9701',
    ALPhysics: '9702',
}

let randomImagesArray = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateRandomImages)()
let randomImageCounter = 0

// credits button behavior
const creditsButton = document.getElementById('credits')
creditsButton.addEventListener('click', () => {
    ;(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
        'Credit', // title
        [
            'Thanks For using <br> the website <3',
            'Website created by <br> <a href="https://github.com/ZiedDev">Zied</a> & <a href="https://github.com/omar-elsherbiny">Sherbo</a>',
            'Repository: <br> <a href="https://github.com/ZiedDev/mcq-mate">MCQ Mate</a>'
        ], // content
    )
})

// path direction behavior
const moveBackwardsArrow = document.getElementById('backwards-arrow')
const moveForwardsArrow = document.getElementById('forwards-arrow')

let backward_stack = [];
let current_path = "home"; // important to put in datatype and format of root path
let forward_stack = [];

function isBackwardAvailable() {
    return backward_stack.length > 0 ? 1 : 0;
}

function isForwardAvailable() {
    return forward_stack.length > 0 ? 1 : 0;
}

function backwardPath() {
    if (backward_stack.length == 0) return 0;
    forward_stack.push(current_path);
    current_path = backward_stack.pop()


    if (isBackwardAvailable()) {
        moveBackwardsArrow.classList.add('active')
    } else {
        moveBackwardsArrow.classList.remove('active')
    }
    if (isForwardAvailable()) {
        moveForwardsArrow.classList.add('active')
    } else {
        moveForwardsArrow.classList.remove('active')
    }

    updatePathElement(true)
    updatePathIcon()
}

function changePath(new_path) {
    randomImagesArray = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateRandomImages)()
    randomImageCounter = 0
    backward_stack.push(current_path);
    forward_stack = [];
    current_path = new_path;

    if (isBackwardAvailable()) {
        moveBackwardsArrow.classList.add('active')
    } else {
        moveBackwardsArrow.classList.remove('active')
    }
    if (isForwardAvailable()) {
        moveForwardsArrow.classList.add('active')
    } else {
        moveForwardsArrow.classList.remove('active')
    }

    updatePathElement()
    updatePathIcon()
}

function forwardPath() {
    if (forward_stack.length == 0) return 0;
    backward_stack.push(current_path);
    current_path = forward_stack.pop();
    if (isBackwardAvailable()) {
        moveBackwardsArrow.classList.add('active')
    } else {
        moveBackwardsArrow.classList.remove('active')
    }
    if (isForwardAvailable()) {
        moveForwardsArrow.classList.add('active')
    } else {
        moveForwardsArrow.classList.remove('active')
    }

    updatePathElement(true)
    updatePathIcon()
}

let timeout
function updatePathElement(createSheet) {
    const path = document.getElementById('path')
    const pathText = current_path.split('>')
    main.style.animation = '200ms closeMenu forwards ease'

    clearTimeout(timeout)

    timeout = setTimeout(() => {
        main.innerHTML = ''
        if (pathText.length == 5) {
            path.innerHTML = ''
            path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true))
            path.appendChild(createPathElement(pathText[2]))
            path.appendChild(createPathElement(pathText[3] == 'm' ? 'Feb / Mar' : pathText[3] == 's' ? 'May / Jun' : 'Oct / Nov'))
            path.appendChild(createPathElement(`Variant ${Number(pathText[4]) + 1}`, false, true))
            main.appendChild(createBubbleSheetMenu(pathText[0], pathText[1], pathText[2], pathText[3], pathText[4]))
        } else if (pathText.length == 4) {
            path.innerHTML = ''
            path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true))
            path.appendChild(createPathElement(pathText[2]))
            path.appendChild(createPathElement(pathText[3] == 'm' ? 'Feb / Mar' : pathText[3] == 's' ? 'May / Jun' : 'Oct / Nov', false, true))
            main.appendChild(CreateSubMenu(pathText[0], pathText[1], pathText[2], pathText[3]))
        } else if (pathText.length == 3) {
            path.innerHTML = ''
            path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true))
            path.appendChild(createPathElement(pathText[2], false, true))
            main.appendChild(CreateSubMenu(pathText[0], pathText[1], pathText[2]))
        } else if (pathText.length == 2) {
            path.innerHTML = ''
            path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true, true))
            main.appendChild(CreateSubMenu(pathText[0], pathText[1]))
        } else if (pathText.length <= 1) {
            path.innerHTML = ''
            main.appendChild(createHomeMenu())
        }
        main.style.animation = '200ms openMenu forwards ease'
    }, 100);
}

moveBackwardsArrow.addEventListener('click', () => {
    if (isBackwardAvailable()) {
        navConfirm(() => { backwardPath() })
    }
})
moveForwardsArrow.addEventListener('click', () => {
    if (isForwardAvailable()) {
        navConfirm(() => { forwardPath() })
    }
})

document.addEventListener('mousedown', e => {
    if (e.buttons == 8) {
        if (isBackwardAvailable()) {
            navConfirm(() => { backwardPath() })
        }
    }
})
document.addEventListener('mousedown', e => {
    if (e.buttons == 16) {
        if (isForwardAvailable()) {
            navConfirm(() => { forwardPath() })
        }
    }
})
document.addEventListener('mouseup', e => {
    e.preventDefault()
})

function navConfirm(confirmCallback) {
    if (inExam) {
        (0,_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
            'Are you sure?', // title
            [
                'Navigating will lose your past progress on the current exam',
            ], // content,
            [
                'Confirm',
                () => {
                    inExam = false
                    confirmCallback()
                },
            ],
            [
                'Cancel',
                () => { }
            ]
        )
    } else {
        confirmCallback()
    }
}

function createPathElement(title, first, last) {
    const element = document.createElement('div')

    const pathElement = document.createElement('div')
    pathElement.textContent = title

    if (!first) {
        const arrowElement = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowElement.setAttribute('width', '32'); arrowElement.setAttribute('height', '32'); arrowElement.setAttribute('viewBox', '0 0 256 256'); arrowElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowElement.innerHTML = '                    <path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17" />'
        element.appendChild(arrowElement)
    }

    if (!last) {
        pathElement.classList.add('path-clickable')
    } else {
        pathElement.classList.add('path-not-clickable')
    }

    const pathText = current_path.split('>')
    element.appendChild(pathElement)
    pathElement.addEventListener('click', () => {
        if (true) {
            if (title == `${pathText[0].toUpperCase()} ${pathText[1]}`) {
                navConfirm(() => { changePath(`${pathText[0]}>${pathText[1]}`) })
            } else if (title == pathText[2]) {
                navConfirm(() => { changePath(`${pathText[0]}>${pathText[1]}>${pathText[2]}`) })
            } else if (title == 'Feb / Mar' || title == 'May / Jun' || title == 'Oct / Nov') {
                navConfirm(() => { changePath(`${pathText[0]}>${pathText[1]}>${pathText[2]}>${pathText[3]}`) })
            }
        }
    })

    return element
}

function updatePathIcon() {
    const pathIcon = document.getElementById('path-icon')

    if (current_path.split('>')[1] == undefined) {
        pathIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m222.14 105.85l-80-80a20 20 0 0 0-28.28 0l-80 80A19.86 19.86 0 0 0 28 120v96a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-52h24v52a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-96a19.86 19.86 0 0 0-5.86-14.15M204 204h-40v-52a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H52v-82.35l76-76l76 76Z" /></svg>'
    } else if (current_path.split('>')[1] == 'Biology') {
        pathIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M224 204h-12a92.1 92.1 0 0 0-64-143.22V32a20 20 0 0 0-20-20H80a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V85.08A68.1 68.1 0 0 1 204 152a67.39 67.39 0 0 1-24.18 52H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24m-100-80H84V36h40Zm-52 64a12 12 0 0 1 0-24h64a12 12 0 0 1 0 24Z"/></svg>'
    } else if (current_path.split('>')[1] == 'Physics') {
        pathIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M209.84 47.44A91.42 91.42 0 0 0 144.62 20h-.35a91.44 91.44 0 0 0-65.12 27l-61.39 62.17a20 20 0 0 0 .08 28.21L46.5 166a19.89 19.89 0 0 0 14.15 5.86h.11a19.86 19.86 0 0 0 14.2-6l60.87-62.39a12.07 12.07 0 0 1 16.77-.12a11.63 11.63 0 0 1 3.5 8.35a12.85 12.85 0 0 1-3.66 9.11L90.19 181a20 20 0 0 0-.21 28.5l28.66 28.66a20.08 20.08 0 0 0 28.15.14l61.76-60.44l.09-.09c36.01-35.99 36.54-94.46 1.2-130.33M60.62 146.21l-23-23l18.19-18.41l22.88 22.88Zm72.2 72.18l-23-23l18.61-18l22.88 22.87Zm58.89-57.62l-23.23 22.73l-22.78-22.77L169.21 138l.15-.14a37 37 0 0 0 10.74-26.37a35.44 35.44 0 0 0-10.85-25.41a36.2 36.2 0 0 0-50.44.48l-.1.11l-23.25 23.82l-22.78-22.77l23.5-23.8A67.55 67.55 0 0 1 144.27 44h.26a67.62 67.62 0 0 1 48.21 20.29c26.11 26.49 25.64 69.76-1.03 96.48"/></svg>'
    } else if (current_path.split('>')[1] == 'Chemistry') {
        pathIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M225.15 197.71L164 95.81V44h4a12 12 0 0 0 0-24H88a12 12 0 0 0 0 24h4v51.81l-61.15 101.9A20 20 0 0 0 48 228h160a20 20 0 0 0 17.15-30.29M140 44v55.14a12 12 0 0 0 1.71 6.17l35.13 58.54c-10.79.86-25.15-1.31-43.42-10.56c-14-7.08-27.46-11.33-40.27-12.76l21.14-35.22a12 12 0 0 0 1.71-6.17V44ZM55.06 204L79 164.19c13-1.11 27.62 2.42 43.62 10.52c19.61 9.92 36.25 13.31 49.85 13.31a75.44 75.44 0 0 0 17.64-2.02l10.83 18Z"/></svg>'
    } else if (current_path.split('>')[1] == 'Economics') {
        pathIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v99l43.51-43.52a12 12 0 0 1 17 0L128 127l43-43h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12v40a12 12 0 0 1-24 0v-11l-51.51 51.52a12 12 0 0 1-17 0L96 129l-52 52v15h180a12 12 0 0 1 12 12"/></svg>'
    } else if (current_path.split('>')[1] == 'Combined') {
        pathIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M219.23 159.2a196.66 196.66 0 0 0-18-31.2a196.66 196.66 0 0 0 18-31.2c11.84-26.31 11.69-47.48-.43-59.6s-33.29-12.27-59.6-.43a196.66 196.66 0 0 0-31.2 18a196.66 196.66 0 0 0-31.2-18c-26.31-11.84-47.48-11.69-59.6.43s-12.27 33.29-.43 59.6a196.66 196.66 0 0 0 18 31.2a196.66 196.66 0 0 0-18 31.2c-11.84 26.31-11.69 47.48.43 59.6c6.13 6.13 14.58 9.2 24.8 9.2c10 0 21.77-2.92 34.76-8.77a196.66 196.66 0 0 0 31.2-18a196.66 196.66 0 0 0 31.2 18c13 5.85 24.74 8.77 34.76 8.77c10.26 0 18.71-3.07 24.84-9.2c12.16-12.12 12.31-33.29.47-59.6m-17.41-105c5.25 5.26 1.79 26-16 53.78c-5.61-6.66-11.65-13.25-18.07-19.67S154.7 75.83 148 70.22c27.82-17.83 48.56-21.29 53.82-16.04ZM171.24 128a288.6 288.6 0 0 1-20.51 22.73A288.6 288.6 0 0 1 128 171.24a288.6 288.6 0 0 1-22.73-20.51A288.6 288.6 0 0 1 84.76 128A298.55 298.55 0 0 1 128 84.76a286.83 286.83 0 0 1 22.73 20.51A286.83 286.83 0 0 1 171.24 128M54.18 54.18c1.46-1.45 4.1-2.24 7.75-2.24c9.53 0 25.94 5.39 46 18.28c-6.66 5.61-13.25 11.65-19.67 18.07S75.83 101.3 70.22 108C52.39 80.18 48.93 59.44 54.18 54.18m0 147.64c-5.25-5.26-1.79-26 16-53.78c5.61 6.66 11.65 13.25 18.07 19.67s13 12.46 19.67 18.07c-27.74 17.83-48.48 21.29-53.74 16.04m147.64 0c-5.26 5.25-26 1.79-53.78-16c6.66-5.61 13.25-11.65 19.67-18.07s12.46-13 18.07-19.67c17.83 27.74 21.29 48.48 16.04 53.74M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"/></svg>'
    }
}

const pathIcon = document.getElementById('path-icon')
pathIcon.addEventListener('click', () => {
    navConfirm(() => {
        if (current_path != 'home') {
            changePath('home')
            path.innerHTML = ''
            inExam = false
        }
    })
})

// creating side buttons for ol subjects
const sideGroupOl = document.getElementById('side-group-ol')
Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__).forEach(subject => {
    const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateSideButton)('ol', subject)
    subjectElement.addEventListener('click', e => {
        if (e.target.id == `side-ol-button-${subject}` || e.target.id == `side-ol-${subject}-title`) {
            navConfirm(() => {
                changePath(`ol>${subject}`)
            })
        }
    })

    sideGroupOl.appendChild(subjectElement)

    const sideSubjectYears = document.getElementById(`side-ol-${subject}-years`)
    Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject]).forEach(year => {
        const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateSideButton)('ol', subject, year)
        yearElement.addEventListener('click', e => {
            if (e.target.id == `side-ol-button-${subject}-${year}` || e.target.id == `side-ol-${subject}-${year}-title`) {
                navConfirm(() => {
                    changePath(`ol>${subject}>${year}`)
                })
            }
        })

        sideSubjectYears.appendChild(yearElement)

        const sideYearSessions = document.getElementById(`side-ol-${subject}-${year}-sessions`)
        Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year]).forEach(session => {
            const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateSideButton)('ol', subject, year, session)
            sessionElement.addEventListener('click', e => {
                if (e.target.id == `side-ol-button-${subject}-${year}-${session}` || e.target.id == `side-ol-${subject}-${year}-${session}-title`) {
                    navConfirm(() => {
                        changePath(`ol>${subject}>${year}>${session}`)
                    })
                }


            })

            sideYearSessions.appendChild(sessionElement)

            const sideSessionVariants = document.getElementById(`side-ol-${subject}-${year}-${session}-variants`)
            Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session]).forEach(variant => {
                if (_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session][variant] != null) {
                    const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateSideButton)('ol', subject, year, session, variant)
                    variantElement.addEventListener('click', e => {
                        if (e.target.id == `side-ol-button-${subject}-${year}-${session}-${variant}` || e.target.id == `side-ol-${subject}-${year}-${session}-${variant}-title`) {
                            navConfirm(() => {
                                changePath(`ol>${subject}>${year}>${session}>${variant}`)
                            })
                        }
                    })

                    sideSessionVariants.appendChild(variantElement)
                }
            })
        })
    })
})

// creating side buttons for al subjects
const sideGroupAl = document.getElementById('side-group-al')
Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__).forEach(subject => {
    const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateSideButton)('al', subject)
    subjectElement.addEventListener('click', e => {
        if (e.target.id == `side-al-button-${subject}` || e.target.id == `side-al-${subject}-title`) {
            navConfirm(() => {
                changePath(`al>${subject}`)
            })
        }
    })

    sideGroupAl.appendChild(subjectElement)

    const sideSubjectYears = document.getElementById(`side-al-${subject}-years`)
    Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject]).forEach(year => {
        const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateSideButton)('al', subject, year)
        yearElement.addEventListener('click', e => {
            if (e.target.id == `side-al-button-${subject}-${year}-year` || e.target.id == `side-al-${subject}-${year}-title`) {
                navConfirm(() => {
                    changePath(`al>${subject}>${year}`)
                })
            }
        })

        sideSubjectYears.appendChild(yearElement)

        const sideYearSessions = document.getElementById(`side-al-${subject}-${year}-sessions`)
        Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year]).forEach(session => {
            const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateSideButton)('al', subject, year, session)
            sessionElement.addEventListener('click', e => {
                if (e.target.id == `side-al-button-${subject}-${year}-${session}-year` || e.target.id == `side-al-${subject}-${year}-${session}-title`) {
                    navConfirm(() => {
                        changePath(`al>${subject}>${year}>${session}`)
                    })
                }
            })

            sideYearSessions.appendChild(sessionElement)

            const sideSessionVariants = document.getElementById(`side-al-${subject}-${year}-${session}-variants`)
            Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session]).forEach(variant => {
                if (_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session][variant] != null) {
                    const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateSideButton)('al', subject, year, session, variant)
                    variantElement.addEventListener('click', e => {
                        if (e.target.id == `side-al-button-${subject}-${year}-${session}-${variant}-year` || e.target.id == `side-al-${subject}-${year}-${session}-${variant}-title`) {
                            navConfirm(() => {
                                changePath(`al>${subject}>${year}>${session}>${variant}`)
                            })
                        }
                    })

                    sideSessionVariants.appendChild(variantElement)
                }
            })
        })
    })
})

// creating home menu
function createHomeMenu() {
    const home = document.createElement('div')
    home.id = 'home'
    home.classList.add('home')
    const olTitle = document.createElement('h2')
    olTitle.textContent = 'OL Subjects'
    home.appendChild(olTitle)

    const olCardsContainer = document.createElement('div')
    Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__).forEach(subject => {
        const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('ol', subject)
        createRotatingCard(subjectElement)
        subjectElement.addEventListener('click', () => {
            navConfirm(() => {
                changePath(`ol>${subject}`)
            })
        })

        olCardsContainer.appendChild(subjectElement)
    })
    home.appendChild(olCardsContainer)

    const alTitle = document.createElement('h2')
    alTitle.textContent = 'AL Subjects'
    home.appendChild(alTitle)

    const alCardsContainer = document.createElement('div')
    Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__).forEach(subject => {
        const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('al', subject)
        createRotatingCard(subjectElement)
        subjectElement.addEventListener('click', () => {
            navConfirm(() => {
                changePath(`al>${subject}`)
            })
        })

        alCardsContainer.appendChild(subjectElement)
    })
    home.appendChild(alCardsContainer)

    return home
}

// creating the sub menu buttons
function CreateSubMenu(level, subject, year, session) {
    const menu = document.createElement('div')
    menu.id = `Select a ${session == undefined ? year == undefined ? 'years-menu' : 'sessions-menu' : 'variants-menu'}`
    menu.classList.add('sub-menu')
    const title = document.createElement('h2')
    title.textContent = `Select a ${session == undefined ? year == undefined ? 'year' : 'session' : 'variant'}`
    menu.appendChild(title)

    const cardsContainer = document.createElement('div')
    if (level.toLowerCase() == 'ol') {
        if (session == undefined) {
            if (year == undefined) {
                Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject]).forEach(year => {
                    const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('ol', subject, year, undefined, undefined, randomImagesArray[randomImageCounter])
                    randomImageCounter++
                    createRotatingCard(yearElement)
                    yearElement.addEventListener('click', () => {
                        navConfirm(() => {
                            changePath(`ol>${subject}>${year}`)
                        })
                    })

                    cardsContainer.appendChild(yearElement)
                })
            } else {
                Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year]).forEach(session => {
                    const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('ol', subject, year, session, undefined, randomImagesArray[randomImageCounter])
                    randomImageCounter++
                    createRotatingCard(sessionElement)
                    sessionElement.addEventListener('click', () => {
                        navConfirm(() => {
                            changePath(`ol>${subject}>${year}>${session}`)
                        })
                    })

                    cardsContainer.appendChild(sessionElement)

                })
            }
        } else {
            Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session]).forEach(variant => {
                if (_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session][variant] != null) {
                    const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('ol', subject, year, session, variant, randomImagesArray[randomImageCounter])
                    randomImageCounter++
                    createRotatingCard(variantElement)
                    variantElement.addEventListener('click', () => {
                        navConfirm(() => {
                            changePath(`ol>${subject}>${year}>${session}>${variant}`)
                        })
                    })

                    cardsContainer.appendChild(variantElement)
                }
            })
        }
    } else if (level.toLowerCase() == 'al') {
        if (session == undefined) {
            if (year == undefined) {
                Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject]).forEach(year => {
                    const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('al', subject, year, undefined, undefined, randomImagesArray[randomImageCounter])
                    randomImageCounter++
                    createRotatingCard(yearElement)
                    yearElement.addEventListener('click', () => {
                        navConfirm(() => {
                            changePath(`al>${subject}>${year}`)
                        })
                    })

                    cardsContainer.appendChild(yearElement)
                })
            } else {
                Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year]).forEach(session => {
                    const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('al', subject, year, session, undefined, randomImagesArray[randomImageCounter])
                    randomImageCounter++
                    createRotatingCard(sessionElement)
                    sessionElement.addEventListener('click', () => {
                        navConfirm(() => {
                            changePath(`al>${subject}>${year}>${session}`)
                        })
                    })

                    cardsContainer.appendChild(sessionElement)

                })
            }
        } else {
            Object.keys(_json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session]).forEach(variant => {
                if (_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session][variant] != null) {
                    const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('al', subject, year, session, variant, randomImagesArray[randomImageCounter])
                    randomImageCounter++
                    createRotatingCard(variantElement)
                    variantElement.addEventListener('click', () => {
                        navConfirm(() => {
                            changePath(`al>${subject}>${year}>${session}>${variant}`)
                        })
                    })

                    cardsContainer.appendChild(variantElement)
                }
            })
        }
    }
    menu.appendChild(cardsContainer)

    return menu
}

function createRotatingCard(elementContainer) {
    const element = elementContainer.children[0]

    elementContainer.addEventListener('mouseenter', e => {
        element.style.transition = `transform 100ms ease-in-out, scale 150ms ease, box-shadow 150ms ease`
        const aTimeout = setTimeout(() => {
            rotateCard(e)
        }, 50);
        const anotherTimeout = setTimeout(() => {
            element.style.transition = `scale 150ms ease, box-shadow 150ms ease`
            elementContainer.addEventListener('mousemove', rotateCard)
        }, 100);

        elementContainer.addEventListener('mouseleave', e => {
            clearTimeout(aTimeout)
            clearTimeout(anotherTimeout)

            elementContainer.removeEventListener('mousemove', rotateCard)
            element.style.transition = `transform 100ms ease-in-out, scale 150ms ease, box-shadow 150ms ease`
            element.style.transform = ``
        })
    })

    function rotateCard(e) {
        const mousePos = {
            x: (((e.clientX - elementContainer.getBoundingClientRect().x) / elementContainer.getBoundingClientRect().width * (45 / 2)) - (45 / 2) / 2),
            y: (((e.clientY - elementContainer.getBoundingClientRect().y) / elementContainer.getBoundingClientRect().height * (45 / 2)) - (45 / 2) / 2)
        }
        element.style.transform = `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1.025)`
    }
}

function createBubbleSheetMenu(level, subject, year, session, variant) {
    const menu = document.createElement('div')
    menu.id = 'bubble-sheet-menu'
    menu.classList.add('bubble-sheet-menu')

    const title = document.createElement('h2')
    title.classList.add('bubble-sheet-title')
    title.id = 'bubble-sheet-title'
    title.textContent = 'Everything is set. Now you can start solving.'
    menu.appendChild(title)

    const pdfLink = document.createElement('a')
    pdfLink.classList.add('bubble-sheet-pdf-link')
    pdfLink.id = 'bubble-sheet-pdf-link'
    pdfLink.textContent = 'Open pdf in external tab'
    pdfLink.href = `./pdfs/${level.toUpperCase()}-${subject}/${year}/${session == 's' ? 'May-Jun' : session == 'w' ? 'Oct-Nov' : 'Feb-Mar'}/${subjectCode[`${level.toUpperCase()}${subject}`]}_${session}${Number(year) - 2000}_qp_${subject == 'Economics' ? 1 : level == 'al' ? 1 : 2}${Number(variant) + 1}.pdf`
    pdfLink.setAttribute('target', '_blank')
    menu.appendChild(pdfLink)

    const bubbleSheetContainer = document.createElement('div')
    bubbleSheetContainer.id = 'bubble-sheet-container'
    bubbleSheetContainer.classList.add('bubble-sheet-container')

    let modelAnswers = level == 'ol' ? _json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__[subject][year][session][variant] : _json_AL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_2__[subject][year][session][variant]
    userAnswers = Array(modelAnswers.length).fill('')

    for (let i = 0; i < modelAnswers.length; i++) {
        const questionNumber = document.createElement('div')
        questionNumber.classList.add('bubble-box')
        questionNumber.textContent = i + 1
        questionNumber.id = `question-${i}-number`
        bubbleSheetContainer.appendChild(questionNumber)

        const questionA = document.createElement('div')
        questionA.classList.add('bubble-box')
        questionA.classList.add('bubble-choice')
        questionA.textContent = 'A'
        questionA.id = `question-${i}-a`
        questionA.addEventListener('click', () => {
            inExam = true
            questionA.classList.add('bubble-chosen')
            questionB.classList.remove('bubble-chosen')
            questionC.classList.remove('bubble-chosen')
            questionD.classList.remove('bubble-chosen')
            userAnswers[i] = 'A'
        })
        bubbleSheetContainer.appendChild(questionA)

        const questionB = document.createElement('div')
        questionB.classList.add('bubble-box')
        questionB.classList.add('bubble-choice')
        questionB.textContent = 'B'
        questionB.id = `question-${i}-b`
        questionB.addEventListener('click', () => {
            inExam = true
            questionA.classList.remove('bubble-chosen')
            questionB.classList.add('bubble-chosen')
            questionC.classList.remove('bubble-chosen')
            questionD.classList.remove('bubble-chosen')
            userAnswers[i] = 'B'
        })
        bubbleSheetContainer.appendChild(questionB)

        const questionC = document.createElement('div')
        questionC.classList.add('bubble-box')
        questionC.classList.add('bubble-choice')
        questionC.textContent = 'C'
        questionC.id = `question-${i}-c`
        questionC.addEventListener('click', () => {
            inExam = true
            questionA.classList.remove('bubble-chosen')
            questionB.classList.remove('bubble-chosen')
            questionC.classList.add('bubble-chosen')
            questionD.classList.remove('bubble-chosen')
            userAnswers[i] = 'C'
        })
        bubbleSheetContainer.appendChild(questionC)

        const questionD = document.createElement('div')
        questionD.classList.add('bubble-box')
        questionD.classList.add('bubble-choice')
        questionD.textContent = 'D'
        questionD.id = `question-${i}-d`
        questionD.addEventListener('click', () => {
            inExam = true
            questionA.classList.remove('bubble-chosen')
            questionB.classList.remove('bubble-chosen')
            questionC.classList.remove('bubble-chosen')
            questionD.classList.add('bubble-chosen')
            userAnswers[i] = 'D'
        })
        bubbleSheetContainer.appendChild(questionD)
    }
    menu.appendChild(bubbleSheetContainer)

    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('bubble-sheet-buttons-container')
    const submitButton = document.createElement('button')
    submitButton.textContent = 'Submit'
    submitButton.classList.add('bubble-sheet-submit-button')
    submitButton.id = 'bubble-sheet-submit-button'

    const revealButton = document.createElement('button')
    revealButton.textContent = 'Reveal all answers'
    revealButton.classList.add('bubble-sheet-reveal-button')
    revealButton.id = 'bubble-sheet-reveal-button'

    const mark = document.createElement('div')
    mark.id = 'exam-mark'
    mark.classList.add('exam-mark')
    mark.textContent = `- / ${modelAnswers.length}`

    submitButton.addEventListener('click', () => {
        if (userAnswers.includes('')) {
            (0,_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
                'Are you sure?', // title
                [
                    'Seems like there are some questions you missed. <br> Only the solved questions will be graded.',
                ], // content,
                [
                    'Confirm',
                    () => {
                        let correctAnswers = 0;
                        for (let i = 0; i < modelAnswers.length; i++) {
                            if (modelAnswers[i] == 'Q') {
                                correctAnswers++

                                const discountedQuestion = document.getElementById(`question-${i}-number`)
                                discountedQuestion.classList.remove('wrong-question')
                                discountedQuestion.classList.remove('correct-question')
                                discountedQuestion.classList.add('discounted-question')

                            } else if (modelAnswers[i] == userAnswers[i]) {
                                correctAnswers++
                                const correctQuestion = document.getElementById(`question-${i}-number`)
                                correctQuestion.classList.remove('wrong-question')
                                correctQuestion.classList.add('correct-question')
                            } else if (userAnswers[i] == '') { } else {
                                const wrongQuestion = document.getElementById(`question-${i}-number`)
                                wrongQuestion.classList.remove('correct-question')
                                wrongQuestion.classList.add('wrong-question')

                                const correctedQuestion = document.getElementById(`question-${i}-${modelAnswers[i].toLowerCase()}`)
                                correctedQuestion.classList.add('corrected-question')
                            }
                        }
                        mark.textContent = `${correctAnswers} / ${modelAnswers.length}`
                    },
                ],
                [
                    'Cancel',
                    () => { }
                ]
            )
        } else {
            let correctAnswers = 0;
            for (let i = 0; i < modelAnswers.length; i++) {
                if (modelAnswers[i] == 'Q') {
                    correctAnswers++

                    const discountedQuestion = document.getElementById(`question-${i}-number`)
                    discountedQuestion.classList.remove('wrong-question')
                    discountedQuestion.classList.remove('correct-question')
                    discountedQuestion.classList.add('discounted-question')

                } else if (modelAnswers[i] == userAnswers[i]) {
                    correctAnswers++

                    const correctQuestion = document.getElementById(`question-${i}-number`)
                    correctQuestion.classList.remove('wrong-question')
                    correctQuestion.classList.add('correct-question')
                } else if (userAnswers[i] == '') { } else {
                    const wrongQuestion = document.getElementById(`question-${i}-number`)
                    wrongQuestion.classList.remove('correct-question')
                    wrongQuestion.classList.add('wrong-question')

                    const correctedQuestion = document.getElementById(`question-${i}-${modelAnswers[i].toLowerCase()}`)
                    correctedQuestion.classList.add('corrected-question')
                }
            }
            mark.textContent = `${correctAnswers} / ${modelAnswers.length}`
        }
    })

    revealButton.addEventListener('click', () => {
        ;(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
            'Are you sure?', // title
            [
                'This will only highlight the correct answers and will not correct your answers.',
            ], // content,
            [
                'Confirm',
                () => {
                    for (let i = 0; i < modelAnswers.length; i++) {
                        if (modelAnswers[i].toLowerCase() != 'q') {
                            const correctedQuestion = document.getElementById(`question-${i}-${modelAnswers[i].toLowerCase()}`)
                            correctedQuestion.classList.add('corrected-question')
                        } else {
                            const discountedQuestionA = document.getElementById(`question-${i}-a`)
                            const discountedQuestionB = document.getElementById(`question-${i}-b`)
                            const discountedQuestionC = document.getElementById(`question-${i}-c`)
                            const discountedQuestionD = document.getElementById(`question-${i}-d`)

                            discountedQuestionA.classList.add('corrected-discounted-question')
                            discountedQuestionB.classList.add('corrected-discounted-question')
                            discountedQuestionC.classList.add('corrected-discounted-question')
                            discountedQuestionD.classList.add('corrected-discounted-question')
                        }
                    }
                },
            ],
            [
                'Cancel',
                () => { }
            ]
        )
    })
    buttonsContainer.appendChild(submitButton)
    buttonsContainer.appendChild(revealButton)

    menu.appendChild(buttonsContainer)
    menu.appendChild(mark)

    // pdf viewer
    let pdfViewOpened = false
    const switchToPdf = document.createElement('div')
    switchToPdf.classList.add('switch-to-pdf')
    switchToPdf.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M200 164v8h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24Zm-108 8a32 32 0 0 1-32 32h-4v4a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h16a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8h-4v16h4a8 8 0 0 0 8-8m100 8a40 40 0 0 1-40 40h-16a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h16a40 40 0 0 1 40 40m-24 0a16 16 0 0 0-16-16h-4v32h4a16 16 0 0 0 16-16M36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-51v23h23Z"/></svg>`
    switchToPdf.addEventListener('click', () => {
        if (!pdfViewOpened) {
            const pdfViewer = document.createElement('div')
            pdfViewer.id = 'pdf-viewer'
            pdfViewer.classList.add('pdf-viewer')

            _pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_5___default()({
                licenseKey: 'QFn6U78TMfzwzFamsiBl',
                path: './pdf-viewer', // point to where the files you copied are served from
                initialDoc: `./pdfs/${level.toUpperCase()}-${subject}/${year}/${session == 's' ? 'May-Jun' : session == 'w' ? 'Oct-Nov' : 'Feb-Mar'}/${subjectCode[`${level.toUpperCase()}${subject}`]}_${session}${Number(year) - 2000}_qp_${subject == 'Economics' ? 1 : level == 'al' ? 1 : 2}${Number(variant) + 1}.pdf` // path to your document
            }, pdfViewer).then((instance) => {
                instance.UI.setTheme('dark');
                instance.UI.disableElements(['toolbarGroup-FillAndSign', 'themeChangeButton', 'languageButton', 'toggleNotesButton', 'stickyToolGroupButton', 'toolbarGroup-Insert', 'stickyToolButton', 'polygonCloudToolGroupButton', 'printButton']);
                instance.enableFeatures([instance.Feature.Download]);
            })

            pdfViewOpened = true
            menu.appendChild(pdfViewer)
        } else {
            const pdfViewer = document.getElementById('pdf-viewer')
            pdfViewer.classList.toggle('hide-viewer')
        }

    })
    menu.appendChild(switchToPdf)

    return menu
}

// appending home to main
const main = document.getElementById('main')
main.appendChild(createHomeMenu())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0ZBQW9GLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSywyQ0FBMkMsMkJBQTJCLGVBQWUsa0JBQWtCLGlCQUFpQixnQkFBZ0IsMEJBQTBCLGdDQUFnQyw0QkFBNEIsS0FBSyxnQkFBZ0IsMkJBQTJCLHFCQUFxQixzQkFBc0Isa0NBQWtDLHVCQUF1Qiw0QkFBNEIsMEJBQTBCLCtCQUErQixnQ0FBZ0MsNEJBQTRCLGtCQUFrQixzREFBc0QsS0FBSyxpQ0FBaUMsMkJBQTJCLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0Isc0JBQXNCLDRCQUE0Qix1Q0FBdUMsa0JBQWtCLEtBQUsseUNBQXlDLGdDQUFnQyxrQkFBa0IsS0FBSyxnREFBZ0Qsd0JBQXdCLDRCQUE0Qiw4QkFBOEIsa0NBQWtDLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLDBCQUEwQixLQUFLLHlDQUF5QyxxQkFBcUIsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLDZCQUE2QiwwQkFBMEIsS0FBSyx1QkFBdUIsd0JBQXdCLEtBQUssbUJBQW1CLDJCQUEyQixvQkFBb0IsZUFBZSxrQkFBa0IsaUJBQWlCLGdCQUFnQiw2Q0FBNkMsNkNBQTZDLEtBQUssMkJBQTJCLGNBQWMsdUJBQXVCLFNBQVMsZ0JBQWdCLHVCQUF1QixTQUFTLEtBQUssMkJBQTJCLGNBQWMscUJBQXFCLFNBQVMsZ0JBQWdCLHFCQUFxQixTQUFTLEtBQUssOENBQThDLHdCQUF3Qix3QkFBd0IsMEJBQTBCLGdDQUFnQywyQ0FBMkMsbUNBQW1DLHNCQUFzQixTQUFTLEtBQUssbUJBQW1CO0FBQ2xxRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0h2QztBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SkFBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywyRkFBMkYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGNBQWMsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLDhEQUE4RCxtQ0FBbUMsMkxB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eUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVFMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dB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QSxrRkFBa0YsRUFBRSxHQUFHLDhCQUE4QjtBQUNySDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCLElBQUksb0JBQW9CO0FBQzFFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLHNEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBLDBGQUEwRixFQUFFLEdBQUcsOEJBQThCO0FBQzdIO0FBQ0EsMEJBQTBCO0FBQzFCLDRGQUE0RixFQUFFO0FBQzlGLDRGQUE0RixFQUFFO0FBQzlGLDRGQUE0RixFQUFFO0FBQzlGLDRGQUE0RixFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBUztBQUNyQjtBQUNBO0FBQ0Esc0NBQXNDLG9CQUFvQixHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsb0VBQW9FLEdBQUcsZUFBZSxvQkFBb0IsRUFBRSxRQUFRLEdBQUcsR0FBRyxRQUFRLEVBQUUsb0JBQW9CLE1BQU0sbURBQW1ELEVBQUUsb0JBQW9CO0FBQ3ZULGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL0BwZGZ0cm9uL3BkZmpzLWV4cHJlc3Mvd2Vidmlld2VyLm1pbi5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2Nzcy9tb2RhbC5jc3M/ZjM4MSIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9zcmMvanMvZ2VuZXJhdGVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2pzL21vZGFsLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL3NyYy9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNle3ZhciBuPXQoKTtmb3IodmFyIG8gaW4gbikoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtvXT1uW29dfX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKG8pe2lmKHRbb10pcmV0dXJuIHRbb10uZXhwb3J0czt2YXIgaT10W29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtvXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyxuKSxpLmw9ITAsaS5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LG8pe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBpIGluIGUpbi5kKG8saSxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLGkpKTtyZXR1cm4gb30sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIi9cIixuKG4ucz0xKX0oW2Z1bmN0aW9uKGUsdCl7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4pe24oMiksZS5leHBvcnRzPW4oNil9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24obyxpKXt2YXIgcixhO2Z1bmN0aW9uIHMoZSl7cmV0dXJuKHM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfSFmdW5jdGlvbihvLGkpe1wib2JqZWN0XCI9PXModCkmJnZvaWQgMCE9PWU/aSgpOnZvaWQgMD09PShhPVwiZnVuY3Rpb25cIj09dHlwZW9mKHI9aSk/ci5jYWxsKHQsbix0LGUpOnIpfHwoZS5leHBvcnRzPWEpfSgwLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKChmdW5jdGlvbihuKXtyZXR1cm4gdC5yZXNvbHZlKGUoKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gbn0pKX0pLChmdW5jdGlvbihuKXtyZXR1cm4gdC5yZXNvbHZlKGUoKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gdC5yZWplY3Qobil9KSl9KSl9ZnVuY3Rpb24gdCgpe31mdW5jdGlvbiBuKGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIG4pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5fc3RhdGU9MCx0aGlzLl9oYW5kbGVkPSExLHRoaXMuX3ZhbHVlPXZvaWQgMCx0aGlzLl9kZWZlcnJlZHM9W10sZChlLHRoaXMpfWZ1bmN0aW9uIHIoZSx0KXtmb3IoOzM9PT1lLl9zdGF0ZTspZT1lLl92YWx1ZTswIT09ZS5fc3RhdGU/KGUuX2hhbmRsZWQ9ITAsbi5faW1tZWRpYXRlRm4oKGZ1bmN0aW9uKCl7dmFyIG49MT09PWUuX3N0YXRlP3Qub25GdWxmaWxsZWQ6dC5vblJlamVjdGVkO2lmKG51bGwhPT1uKXt2YXIgbzt0cnl7bz1uKGUuX3ZhbHVlKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBjKHQucHJvbWlzZSxlKX1hKHQucHJvbWlzZSxvKX1lbHNlKDE9PT1lLl9zdGF0ZT9hOmMpKHQucHJvbWlzZSxlLl92YWx1ZSl9KSkpOmUuX2RlZmVycmVkcy5wdXNoKHQpfWZ1bmN0aW9uIGEoZSx0KXt0cnl7aWYodD09PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKHQmJihcIm9iamVjdFwiPT1zKHQpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KSl7dmFyIG89dC50aGVuO2lmKHQgaW5zdGFuY2VvZiBuKXJldHVybiBlLl9zdGF0ZT0zLGUuX3ZhbHVlPXQsdm9pZCBsKGUpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pcmV0dXJuIHZvaWQgZChmdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbigpe2UuYXBwbHkodCxhcmd1bWVudHMpfX0obyx0KSxlKX1lLl9zdGF0ZT0xLGUuX3ZhbHVlPXQsbChlKX1jYXRjaCh0KXtjKGUsdCl9fWZ1bmN0aW9uIGMoZSx0KXtlLl9zdGF0ZT0yLGUuX3ZhbHVlPXQsbChlKX1mdW5jdGlvbiBsKGUpezI9PT1lLl9zdGF0ZSYmMD09PWUuX2RlZmVycmVkcy5sZW5ndGgmJm4uX2ltbWVkaWF0ZUZuKChmdW5jdGlvbigpe2UuX2hhbmRsZWR8fG4uX3VuaGFuZGxlZFJlamVjdGlvbkZuKGUuX3ZhbHVlKX0pKTtmb3IodmFyIHQ9MCxvPWUuX2RlZmVycmVkcy5sZW5ndGg7bz50O3QrKylyKGUsZS5fZGVmZXJyZWRzW3RdKTtlLl9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiBkKGUsdCl7dmFyIG49ITE7dHJ5e2UoKGZ1bmN0aW9uKGUpe258fChuPSEwLGEodCxlKSl9KSwoZnVuY3Rpb24oZSl7bnx8KG49ITAsYyh0LGUpKX0pKX1jYXRjaChlKXtpZihuKXJldHVybjtuPSEwLGModCxlKX19dmFyIHU9c2V0VGltZW91dDtuLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsZSl9LG4ucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oZSxuKXt2YXIgbz1uZXcgdGhpcy5jb25zdHJ1Y3Rvcih0KTtyZXR1cm4gcih0aGlzLG5ldyBmdW5jdGlvbihlLHQsbil7dGhpcy5vbkZ1bGZpbGxlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLm9uUmVqZWN0ZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGwsdGhpcy5wcm9taXNlPW59KGUsbixvKSksb30sbi5wcm90b3R5cGUuZmluYWxseT1lLG4uYWxsPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgbigoZnVuY3Rpb24odCxuKXtmdW5jdGlvbiBvKGUsYSl7dHJ5e2lmKGEmJihcIm9iamVjdFwiPT1zKGEpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSl7dmFyIGM9YS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMpcmV0dXJuIHZvaWQgYy5jYWxsKGEsKGZ1bmN0aW9uKHQpe28oZSx0KX0pLG4pfWlbZV09YSwwPT0tLXImJnQoaSl9Y2F0Y2goZSl7bihlKX19aWYoIWV8fHZvaWQgMD09PWUubGVuZ3RoKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5XCIpO3ZhciBpPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpO2lmKDA9PT1pLmxlbmd0aClyZXR1cm4gdChbXSk7Zm9yKHZhciByPWkubGVuZ3RoLGE9MDtpLmxlbmd0aD5hO2ErKylvKGEsaVthXSl9KSl9LG4ucmVzb2x2ZT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09cyhlKSYmZS5jb25zdHJ1Y3Rvcj09PW4/ZTpuZXcgbigoZnVuY3Rpb24odCl7dChlKX0pKX0sbi5yZWplY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBuKChmdW5jdGlvbih0LG4pe24oZSl9KSl9LG4ucmFjZT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IG4oKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciBvPTAsaT1lLmxlbmd0aDtpPm87bysrKWVbb10udGhlbih0LG4pfSkpfSxuLl9pbW1lZGlhdGVGbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvJiZmdW5jdGlvbihlKXtvKGUpfXx8ZnVuY3Rpb24oZSl7dShlLDApfSxuLl91bmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbihlKXt2b2lkIDAhPT1jb25zb2xlJiZjb25zb2xlJiZjb25zb2xlLndhcm4oXCJQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246XCIsZSl9O3ZhciBmPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYpcmV0dXJuIHNlbGY7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdylyZXR1cm4gd2luZG93O2lmKHZvaWQgMCE9PWkpcmV0dXJuIGk7dGhyb3cgRXJyb3IoXCJ1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3RcIil9KCk7XCJQcm9taXNlXCJpbiBmP2YuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseXx8KGYuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseT1lKTpmLlByb21pc2U9bn0pKX0pLmNhbGwodGhpcyxuKDMpLnNldEltbWVkaWF0ZSxuKDApKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihlKXt2YXIgbz12b2lkIDAhPT1lJiZlfHxcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZnx8d2luZG93LGk9RnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O2Z1bmN0aW9uIHIoZSx0KXt0aGlzLl9pZD1lLHRoaXMuX2NsZWFyRm49dH10LnNldFRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoaS5jYWxsKHNldFRpbWVvdXQsbyxhcmd1bWVudHMpLGNsZWFyVGltZW91dCl9LHQuc2V0SW50ZXJ2YWw9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoaS5jYWxsKHNldEludGVydmFsLG8sYXJndW1lbnRzKSxjbGVhckludGVydmFsKX0sdC5jbGVhclRpbWVvdXQ9dC5jbGVhckludGVydmFsPWZ1bmN0aW9uKGUpe2UmJmUuY2xvc2UoKX0sci5wcm90b3R5cGUudW5yZWY9ci5wcm90b3R5cGUucmVmPWZ1bmN0aW9uKCl7fSxyLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2NsZWFyRm4uY2FsbChvLHRoaXMuX2lkKX0sdC5lbnJvbGw9ZnVuY3Rpb24oZSx0KXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9dH0sdC51bmVucm9sbD1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9LTF9LHQuX3VucmVmQWN0aXZlPXQuYWN0aXZlPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKTt2YXIgdD1lLl9pZGxlVGltZW91dDt0Pj0wJiYoZS5faWRsZVRpbWVvdXRJZD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2UuX29uVGltZW91dCYmZS5fb25UaW1lb3V0KCl9KSx0KSl9LG4oNCksdC5zZXRJbW1lZGlhdGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuc2V0SW1tZWRpYXRlfHx2b2lkIDAhPT1lJiZlLnNldEltbWVkaWF0ZXx8dGhpcyYmdGhpcy5zZXRJbW1lZGlhdGUsdC5jbGVhckltbWVkaWF0ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5jbGVhckltbWVkaWF0ZXx8dm9pZCAwIT09ZSYmZS5jbGVhckltbWVkaWF0ZXx8dGhpcyYmdGhpcy5jbGVhckltbWVkaWF0ZX0pLmNhbGwodGhpcyxuKDApKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLG4pe1widXNlIHN0cmljdFwiO2lmKCFlLnNldEltbWVkaWF0ZSl7dmFyIG8saSxyLGEscyxjPTEsbD17fSxkPSExLHU9ZS5kb2N1bWVudCxmPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpO2Y9ZiYmZi5zZXRUaW1lb3V0P2Y6ZSxcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwoZS5wcm9jZXNzKT9vPWZ1bmN0aW9uKGUpe3QubmV4dFRpY2soKGZ1bmN0aW9uKCl7aChlKX0pKX06IWZ1bmN0aW9uKCl7aWYoZS5wb3N0TWVzc2FnZSYmIWUuaW1wb3J0U2NyaXB0cyl7dmFyIHQ9ITAsbj1lLm9ubWVzc2FnZTtyZXR1cm4gZS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXt0PSExfSxlLnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLGUub25tZXNzYWdlPW4sdH19KCk/ZS5NZXNzYWdlQ2hhbm5lbD8oKHI9bmV3IE1lc3NhZ2VDaGFubmVsKS5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7aChlLmRhdGEpfSxvPWZ1bmN0aW9uKGUpe3IucG9ydDIucG9zdE1lc3NhZ2UoZSl9KTp1JiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gdS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpPyhpPXUuZG9jdW1lbnRFbGVtZW50LG89ZnVuY3Rpb24oZSl7dmFyIHQ9dS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Qub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aChlKSx0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGkucmVtb3ZlQ2hpbGQodCksdD1udWxsfSxpLmFwcGVuZENoaWxkKHQpfSk6bz1mdW5jdGlvbihlKXtzZXRUaW1lb3V0KGgsMCxlKX06KGE9XCJzZXRJbW1lZGlhdGUkXCIrTWF0aC5yYW5kb20oKStcIiRcIixzPWZ1bmN0aW9uKHQpe3Quc291cmNlPT09ZSYmXCJzdHJpbmdcIj09dHlwZW9mIHQuZGF0YSYmMD09PXQuZGF0YS5pbmRleE9mKGEpJiZoKCt0LmRhdGEuc2xpY2UoYS5sZW5ndGgpKX0sZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixzLCExKTplLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIscyksbz1mdW5jdGlvbih0KXtlLnBvc3RNZXNzYWdlKGErdCxcIipcIil9KSxmLnNldEltbWVkaWF0ZT1mdW5jdGlvbihlKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoZT1uZXcgRnVuY3Rpb24oXCJcIitlKSk7Zm9yKHZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLG49MDtuPHQubGVuZ3RoO24rKyl0W25dPWFyZ3VtZW50c1tuKzFdO3ZhciBpPXtjYWxsYmFjazplLGFyZ3M6dH07cmV0dXJuIGxbY109aSxvKGMpLGMrK30sZi5jbGVhckltbWVkaWF0ZT1wfWZ1bmN0aW9uIHAoZSl7ZGVsZXRlIGxbZV19ZnVuY3Rpb24gaChlKXtpZihkKXNldFRpbWVvdXQoaCwwLGUpO2Vsc2V7dmFyIHQ9bFtlXTtpZih0KXtkPSEwO3RyeXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jYWxsYmFjayxuPWUuYXJncztzd2l0Y2gobi5sZW5ndGgpe2Nhc2UgMDp0KCk7YnJlYWs7Y2FzZSAxOnQoblswXSk7YnJlYWs7Y2FzZSAyOnQoblswXSxuWzFdKTticmVhaztjYXNlIDM6dChuWzBdLG5bMV0sblsyXSk7YnJlYWs7ZGVmYXVsdDp0LmFwcGx5KHZvaWQgMCxuKX19KHQpfWZpbmFsbHl7cChlKSxkPSExfX19fX0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/dm9pZCAwPT09ZT90aGlzOmU6c2VsZil9KS5jYWxsKHRoaXMsbigwKSxuKDUpKX0sZnVuY3Rpb24oZSx0KXt2YXIgbixvLGk9ZS5leHBvcnRzPXt9O2Z1bmN0aW9uIHIoKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIGEoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gcyhlKXtpZihuPT09c2V0VGltZW91dClyZXR1cm4gc2V0VGltZW91dChlLDApO2lmKChuPT09cnx8IW4pJiZzZXRUaW1lb3V0KXJldHVybiBuPXNldFRpbWVvdXQsc2V0VGltZW91dChlLDApO3RyeXtyZXR1cm4gbihlLDApfWNhdGNoKHQpe3RyeXtyZXR1cm4gbi5jYWxsKG51bGwsZSwwKX1jYXRjaCh0KXtyZXR1cm4gbi5jYWxsKHRoaXMsZSwwKX19fSFmdW5jdGlvbigpe3RyeXtuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDpyfWNhdGNoKGUpe249cn10cnl7bz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OmF9Y2F0Y2goZSl7bz1hfX0oKTt2YXIgYyxsPVtdLGQ9ITEsdT0tMTtmdW5jdGlvbiBmKCl7ZCYmYyYmKGQ9ITEsYy5sZW5ndGg/bD1jLmNvbmNhdChsKTp1PS0xLGwubGVuZ3RoJiZwKCkpfWZ1bmN0aW9uIHAoKXtpZighZCl7dmFyIGU9cyhmKTtkPSEwO2Zvcih2YXIgdD1sLmxlbmd0aDt0Oyl7Zm9yKGM9bCxsPVtdOysrdTx0OyljJiZjW3VdLnJ1bigpO3U9LTEsdD1sLmxlbmd0aH1jPW51bGwsZD0hMSxmdW5jdGlvbihlKXtpZihvPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQoZSk7aWYoKG89PT1hfHwhbykmJmNsZWFyVGltZW91dClyZXR1cm4gbz1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KGUpO3RyeXtvKGUpfWNhdGNoKHQpe3RyeXtyZXR1cm4gby5jYWxsKG51bGwsZSl9Y2F0Y2godCl7cmV0dXJuIG8uY2FsbCh0aGlzLGUpfX19KGUpfX1mdW5jdGlvbiBoKGUsdCl7dGhpcy5mdW49ZSx0aGlzLmFycmF5PXR9ZnVuY3Rpb24gbSgpe31pLm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbi0xXT1hcmd1bWVudHNbbl07bC5wdXNoKG5ldyBoKGUsdCkpLDEhPT1sLmxlbmd0aHx8ZHx8cyhwKX0saC5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0saS50aXRsZT1cImJyb3dzZXJcIixpLmJyb3dzZXI9ITAsaS5lbnY9e30saS5hcmd2PVtdLGkudmVyc2lvbj1cIlwiLGkudmVyc2lvbnM9e30saS5vbj1tLGkuYWRkTGlzdGVuZXI9bSxpLm9uY2U9bSxpLm9mZj1tLGkucmVtb3ZlTGlzdGVuZXI9bSxpLnJlbW92ZUFsbExpc3RlbmVycz1tLGkuZW1pdD1tLGkucHJlcGVuZExpc3RlbmVyPW0saS5wcmVwZW5kT25jZUxpc3RlbmVyPW0saS5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuW119LGkuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0saS5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0saS5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGkudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCksbi5kKHQsXCJnZXRJbnN0YW5jZVwiLChmdW5jdGlvbigpe3JldHVybiB3fSkpO3ZhciBvPXtBU006XCJhc21cIixXQVNNOlwiZW1zXCIsSlNfV09SS0VSOlwianN3b3JrZXJcIixUSFJFQURFRF9XQVNNOlwid2FzbS10aHJlYWRzXCJ9O2Z1bmN0aW9uIGkoZSx0KXtpZihcInN0cmluZ1wiIT10eXBlb2YgZXx8IXQpcmV0dXJuIGU7dmFyIG49dC5zdWJzdHIoMCx0Lmxhc3RJbmRleE9mKFwiL1wiKSk7cmV0dXJuL14oXFwvfCUyRnxbYS16MC05LV0rOikvaS50ZXN0KGUpP2U6bitcIi9cIitlfWZ1bmN0aW9uIHIoZSx0KXt2YXIgbj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihvPW8uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLG8pfXJldHVybiBufWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/cihPYmplY3QobiksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe3MoZSx0LG5bdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobikpOnIoT2JqZWN0KG4pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gcyhlLHQsbil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1uLGV9dmFyIGM9e30sbD0wO3dpbmRvdy5pc1BkZmpzPSEwLFwidW5kZWZpbmVkXCI9PXR5cGVvZiBjb25zb2xlJiYod2luZG93LmNvbnNvbGU9e2xvZzpmdW5jdGlvbigpe30sd2FybjpmdW5jdGlvbigpe30sZXJyb3I6ZnVuY3Rpb24oKXt9fSk7dmFyIGQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKWZvcih2YXIgdD1PYmplY3Qua2V5cyhhcmd1bWVudHNbZV0pLG49MDtuPHQubGVuZ3RoO24rKylhcmd1bWVudHNbMF1bdFtuXV09YXJndW1lbnRzW2VdW3Rbbl1dO3JldHVybiBhcmd1bWVudHNbMF19LHU9ZnVuY3Rpb24oZSl7dmFyIHQ9W107cmV0dXJuIGUuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC5wdXNoKGUpfSkpLHR9LGY9ZnVuY3Rpb24oZSx0KXt2YXIgbjt0cnl7bj1uZXcgQ3VzdG9tRXZlbnQoZSx7ZGV0YWlsOnQsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSl9Y2F0Y2gobyl7KG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKSkuaW5pdEV2ZW50KGUsITAsITApLG4uZGV0YWlsPXR9cmV0dXJuIG59O3dpbmRvdy5QREZOZXQmJiFjLnNraXBQREZOZXRXZWJWaWV3ZXJXYXJuaW5nJiZjb25zb2xlLndhcm4oXCJQREZOZXQuanMgYW5kIFdlYlZpZXdlci5qcyBoYXZlIGJlZW4gaW5jbHVkZWQgaW4gdGhlIHNhbWUgY29udGV4dC4gU2VlIGh0dHBzOi8vd3d3LnBkZnRyb24uY29tL2tiX3NhbWVfY29udGV4dCBmb3IgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgY291bGQgYmUgYW4gZXJyb3IgaW4geW91ciBhcHBsaWNhdGlvbi5cIik7dmFyIHA9bmV3IE1hcCxoPW5ldyBNYXA7Yy5XZWJWaWV3ZXI9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO2lmKGguZ2V0KHQpKXRocm93IG5ldyBFcnJvcihcIlR3byBpbnN0YW5jZXMgb2YgV2ViVmlld2VyIHdlcmUgY3JlYXRlZCBvbiB0aGUgc2FtZSBIVE1MIGVsZW1lbnQuIFBsZWFzZSBjcmVhdGUgYSBuZXcgZWxlbWVudCBmb3IgZWFjaCBpbnN0YW5jZSBvZiBXZWJWaWV3ZXJcIik7aC5zZXQodCwhMCk7dC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwoZnVuY3Rpb24gZSgpe3AuZ2V0KHQpLmluc3RhbmNlPW4uZ2V0Q29tcGxldGVJbnN0YW5jZSgpLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsZSl9KSksdGhpcy5fdmFsaWRhdGVPcHRpb25zKGUpO3ZhciBvPWUud2Vidmlld2VyU2VydmVyVVJMfHxlLnBkZnRyb25TZXJ2ZXI7ZS5mdWxsQVBJJiZvJiYoZS5mb3JjZUNsaWVudFNpZGVJbml0fHxjb25zb2xlLndhcm4oXCJUaGUgZnVsbEFQSSBhbmQgd2Vidmlld2VyU2VydmVyVVJMIG9wdGlvbnMgaGF2ZSBib3RoIGJlZW4gc2V0IHNvIHRoZSBmb3JjZUNsaWVudFNpZGVJbml0IG9wdGlvbiBpcyBub3cgZW5hYmxlZC4gVGhpcyBtZWFucyB0aGF0IFdlYlZpZXdlciB3aWxsIHN3aXRjaCB0byBjbGllbnQgc2lkZSByZW5kZXJpbmcgYW5kIHByb2Nlc3NpbmcgdG8gYWxsb3cgdXNlIG9mIHRoZSBmdWxsIEFQSS5cIiksZS5mb3JjZUNsaWVudFNpZGVJbml0PSEwKSx0aGlzLm9wdGlvbnM9ZCh7fSxjLldlYlZpZXdlci5PcHRpb25zLGUpO3ZhciBpPXRoaXMub3B0aW9ucy5wYXRoLmxlbmd0aC0xO2k+MCYmXCIvXCIhPT10aGlzLm9wdGlvbnMucGF0aFtpXSYmKHRoaXMub3B0aW9ucy5wYXRoKz1cIi9cIiksdGhpcy5vcHRpb25zLnVpUGF0aD10aGlzLm9wdGlvbnMucGF0aCt0aGlzLm9wdGlvbnMudWlQYXRoLHR8fGNvbnNvbGUuZXJyb3IoXCJWaWV3ZXJFbGVtZW50IGlzIG5vdCBkZWZpbmVkLiBUaGlzIG1heSBiZSBjYXVzZWQgYnkgY2FsbGluZyB0aGUgV2ViVmlld2VyIGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgRE9NIGlzIGxvYWRlZCwgb3IgYW4gaW52YWxpZCBzZWxlY3Rvci4gUGxlYXNlIHNlZSBodHRwOi8vci5wZGZ0cm9uLmNvbS9ndWlkZXMvcXVpY2stc3RhcnQgZm9yIGFuIGV4YW1wbGUuXCIpLHRoaXMuZWxlbWVudD10LHRoaXMuZWxlbWVudC5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiO3ZhciByPXRoaXM7dGhpcy5tZXNzYWdlSGFuZGxlcj1mdW5jdGlvbih0KXtpZihcInJlcXVlc3RsXCI9PT10LmRhdGEmJnQuc291cmNlJiZ0LnNvdXJjZS5wb3N0TWVzc2FnZSh7dHlwZTpcInJlc3BvbnNlbFwiLHZhbHVlOmUubHx8ZS5saWNlbnNlS2V5fSxcIipcIiksXCJyZXF1ZXN0Q29uZmlnXCI9PT10LmRhdGEudHlwZSYmdC5kYXRhLmlkPT09ci5pZCYmdC5zb3VyY2Upe3ZhciBuPWUuY29uZmlnP3IuX2NvcnJlY3RSZWxhdGl2ZVBhdGgoZS5jb25maWcpOlwiXCI7dC5zb3VyY2UucG9zdE1lc3NhZ2Uoe3R5cGU6XCJyZXNwb25zZUNvbmZpZ1wiLHZhbHVlOm59LFwiKlwiKX19LHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHRoaXMubWVzc2FnZUhhbmRsZXIsITEpLHRoaXMub3B0aW9ucy5hdXRvQ3JlYXRlJiZ0aGlzLmNyZWF0ZSgpfTt2YXIgbT17bGljZW5zZUtleTp2b2lkIDAsZW5hYmxlQXp1cmVXb3JrYXJvdW5kOiExLGlzQWRtaW5Vc2VyOiExLGlzUmVhZE9ubHk6ITF9O2MuV2ViVmlld2VyLnByb3RvdHlwZT17dmVyc2lvbjpcIjguNy40XCIsY3JlYXRlOmZ1bmN0aW9uKCl7aWYodGhpcy5vcHRpb25zLmluaXRpYWxEb2Mpe3ZhciBlPXRoaXMuX2NvcnJlY3RSZWxhdGl2ZVBhdGgodGhpcy5vcHRpb25zLmluaXRpYWxEb2MpO2U9ZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGUpKSx0aGlzLm9wdGlvbnMuaW5pdGlhbERvYz1lfXRoaXMuX2NyZWF0ZSgpfSxfY3JlYXRlOmZ1bmN0aW9uKCl7dGhpcy5pZD0rK2wsdm9pZCAwPT09dGhpcy5fdHJpZ2dlciYmKHRoaXMuX3RyaWdnZXI9ZnVuY3Rpb24oZSx0KXt2YXIgbj1mKGUsdCk7dGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobil9KTt2YXIgZT10aGlzLm9wdGlvbnMudHlwZS5yZXBsYWNlKFwiIFwiLFwiXCIpLnNwbGl0KFwiLFwiKTtlLmxlbmd0aDwxJiYoZVswXT1cImh0bWw1XCIpLHRoaXMuX2NyZWF0ZVZpZXdlcihlKX0sX3ZhbGlkYXRlT3B0aW9uczpmdW5jdGlvbihlKXtmb3IodmFyIHQ9T2JqZWN0LmtleXMoZSksbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28gaW4gZCh7fSxtLGMuV2ViVmlld2VyLk9wdGlvbnMpfHxjb25zb2xlLndhcm4oXCJcIi5jb25jYXQobyxcIiBpcyBub3QgYSB2YWxpZCBvcHRpb24gbmFtZS4gU2VlIGh0dHA6Ly9yLnBkZnRyb24uY29tL2FwaS9vcHRpb25zX2FuY2hvciBmb3IgYWxsIGF2YWlsYWJsZSBvcHRpb25zLlwiKSl9dmFyIGk9ZS53ZWJ2aWV3ZXJTZXJ2ZXJVUkx8fGUucGRmdHJvblNlcnZlcjshZS5lbmFibGVSZWRhY3Rpb258fGUuZnVsbEFQSXx8aXx8Y29uc29sZS53YXJuKFwiRnVsbEFQSSBvciBXZWJWaWV3ZXIgU2VydmVyIGlzIG5lZWRlZCB0byBhcHBseSByZWRhY3Rpb25zXCIpfSxfbm90U3VwcG9ydGVkTW9iaWxlOmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPVwid2Vidmlld2VyLWJyb3dzZXItdW5zdXBwb3J0ZWRcIixlLnRleHRDb250ZW50PVwiUERGIGRvY3VtZW50IHZpZXdpbmcgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuXCIsdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGUpfSxfY3JlYXRlVmlld2VyOmZ1bmN0aW9uKGUpe3ZhciB0LG49dGhpcztpZihuLnNlbGVjdGVkVHlwZT1udWxsLHRoaXMuaXNNb2JpbGVEZXZpY2UoKSl7aWYodGhpcy5vcHRpb25zLmRvY3VtZW50VHlwZSYmXCJ4b2RcIiE9PXRoaXMub3B0aW9ucy5kb2N1bWVudFR5cGUmJiF0aGlzLl90ZXN0V2ViQXNzZW1ibHkoKSlyZXR1cm4gdm9pZCB0aGlzLl9ub3RTdXBwb3J0ZWRNb2JpbGUoKTtpZihlPUFycmF5KFwiaHRtbDVNb2JpbGVcIiksbi5zZWxlY3RlZFR5cGU9XCJodG1sNU1vYmlsZVwiLHRoaXMub3B0aW9ucy5tb2JpbGVSZWRpcmVjdClyZXR1cm4gdD10aGlzLm9wdGlvbnMudWlQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLHZvaWQod2luZG93LmxvY2F0aW9uPXQpfWZvcih2YXIgbz0hMSxpPSExLHI9MDtyPGUubGVuZ3RoO3IrKyl7aWYoXCJodG1sNW1vYmlsZVwiPT09ZVtyXS50b0xvd2VyQ2FzZSgpKXtpZih0aGlzLm9wdGlvbnMuZG9jdW1lbnRUeXBlJiZcInhvZFwiIT09dGhpcy5vcHRpb25zLmRvY3VtZW50VHlwZSYmIXRoaXMuX3Rlc3RXZWJBc3NlbWJseSgpKWNvbnRpbnVlO2lmKG89ITAsbi5fdGVzdEhUTUw1KCkpe2lmKHRoaXMub3B0aW9ucy5tb2JpbGVSZWRpcmVjdClyZXR1cm4gbi5zZWxlY3RlZFR5cGU9XCJodG1sNU1vYmlsZVwiLHQ9dGhpcy5vcHRpb25zLnVpUGF0aCt0aGlzLl9nZXRIVE1MNU9wdGlvbnNVUkwoKSx2b2lkKHdpbmRvdy5sb2NhdGlvbj10KTtpZih0aGlzLm9wdGlvbnMueGRvbWFpblByb3h5VXJsfHxuLmlzU2FtZU9yaWdpbihkZWNvZGVVUklDb21wb25lbnQobi5vcHRpb25zLmluaXRpYWxEb2MpKXx8bi5fdGVzdENPUlMoKSl7bi5zZWxlY3RlZFR5cGU9XCJodG1sNU1vYmlsZVwiO2JyZWFrfWk9ITB9fWlmKFwiaHRtbDVcIj09PWVbcl0udG9Mb3dlckNhc2UoKSYmKG89ITAsbi5fdGVzdEhUTUw1KCkpKXt2YXIgYT1uLmlzU2FtZU9yaWdpbihkZWNvZGVVUklDb21wb25lbnQobi5vcHRpb25zLmluaXRpYWxEb2MpKTtpZih0aGlzLm9wdGlvbnMueGRvbWFpblByb3h5VXJsfHxhfHxuLl90ZXN0Q09SUygpKXtuLnNlbGVjdGVkVHlwZT1cImh0bWw1XCI7YnJlYWt9aT0hMH19aWYoXCJodG1sNVwiPT09bi5zZWxlY3RlZFR5cGUpbi5fY3JlYXRlSFRNTDUoKTtlbHNlIGlmKFwiaHRtbDVNb2JpbGVcIj09PW4uc2VsZWN0ZWRUeXBlKW4uX2NyZWF0ZUhUTUw1TW9iaWxlKCk7ZWxzZXt2YXIgcztpZihpP3M9XCJUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBjcm9zcyBvcmlnaW4gcmVxdWVzdHMuIFBsZWFzZSBjb25maWd1cmUgeGRvbWFpbiB0byBzdXBwb3J0IENPUlMuXCI6byYmKHM9XCJQbGVhc2UgdXNlIGFuIEhUTUw1IGNvbXBhdGlibGUgYnJvd3Nlci5cIikscyl7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLmlkPVwid2Vidmlld2VyLWJyb3dzZXItdW5zdXBwb3J0ZWRcIixjLnRleHRDb250ZW50PXMsbi5lbGVtZW50LmFwcGVuZENoaWxkKGMpfX19LF92aWV3ZXJMb2FkZWQ6ZnVuY3Rpb24oZSl7dGhpcy5fdHJpZ2dlcihcInJlYWR5XCIpO3RyeXt2YXIgdD1lLmNvbnRlbnRXaW5kb3c7aWYodC5wb3N0TWVzc2FnZSh7dHlwZTpcInZpZXdlckxvYWRlZFwifSxcIipcIiksdm9pZCAwIT09dGhpcy5vcHRpb25zLmVuY3J5cHRpb24pe3ZhciBuPWRlY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyk7dGhpcy5vcHRpb25zLmluaXRpYWxEb2MmJihuPUpTT04ucGFyc2UobikpO3ZhciBvPXtkZWNyeXB0OnQuQ29yZS5FbmNyeXB0aW9uLmRlY3J5cHQsZGVjcnlwdE9wdGlvbnM6dGhpcy5vcHRpb25zLmVuY3J5cHRpb24sZG9jdW1lbnRJZDp0aGlzLm9wdGlvbnMuZG9jdW1lbnRJZCxleHRlbnNpb246XCJ4b2RcIn07dGhpcy5nZXRJbnN0YW5jZSgpLmxvYWREb2N1bWVudChuLG8pfX1jYXRjaChlKXtjb25zb2xlLndhcm4oXCJWaWV3ZXIgaXMgb24gYSBkaWZmZXJlbnQgZG9tYWluLCB0aGUgcHJvbWlzZSBmcm9tIFdlYlZpZXdlciBmdW5jdGlvbiBpcyByZWplY3RlZCBhbmQgQVBJIGZ1bmN0aW9ucyB3aWxsIG5vdCB3b3JrIGJlY2F1c2Ugb2YgY3Jvc3MgZG9tYWluIHBlcm1pc3Npb25zLiBTZWUgaHR0cDovL3IucGRmdHJvbi5jb20va2JfY3Jvc3Nfb3JpZ2luIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKX19LF9nZXRIVE1MNU9wdGlvbnNVUkw6ZnVuY3Rpb24oKXt2YXIgZSx0LG4sbz10aGlzLm9wdGlvbnMsaT1vLndlYnZpZXdlclNlcnZlclVSTHx8by5wZGZ0cm9uU2VydmVyLHI9XCJcIjtpZihvLmluaXRpYWxEb2MmJihyKz1cIiNkPVwiLmNvbmNhdChvLmluaXRpYWxEb2MpKSx2b2lkIDA9PT1vLmJhY2tlbmRUeXBlJiYoby5iYWNrZW5kVHlwZT1vLnBkZkJhY2tlbmQpLG8uZG9jdW1lbnRUeXBlJiZcInhvZFwiPT09by5kb2N1bWVudFR5cGUmJihlPW8uZG9jdW1lbnRUeXBlKSxvLnByZWxvYWRXb3JrZXImJlwieG9kXCI9PT1vLnByZWxvYWRXb3JrZXImJihlPW8ucHJlbG9hZFdvcmtlciksby5leHRlbnNpb24mJihlPW8uZXh0ZW5zaW9uKSxlJiYocis9XCImZXh0ZW5zaW9uPVwiLmNvbmNhdChlKSksby5kb2N1bWVudFR5cGUmJlwieG9kXCIhPT1vLmRvY3VtZW50VHlwZSYmKHQ9by5kb2N1bWVudFR5cGUpLG8ucHJlbG9hZFdvcmtlciYmXCJ4b2RcIiE9PW8ucHJlbG9hZFdvcmtlciYmKHQ9by5wcmVsb2FkV29ya2VyKSx0JiYocis9XCImcHJlbG9hZFdvcmtlcj1cIi5jb25jYXQodCkpLG8uYmFja2VuZFR5cGUmJihyKz1cIiZwZGY9XCIuY29uY2F0KG8uYmFja2VuZFR5cGUsXCImb2ZmaWNlPVwiKS5jb25jYXQoby5iYWNrZW5kVHlwZSxcIiZsZWdhY3lPZmZpY2U9XCIpLmNvbmNhdChvLmJhY2tlbmRUeXBlKSksby5maWxlbmFtZSYmKHIrPVwiJmZpbGVuYW1lPVwiLmNvbmNhdChvLmZpbGVuYW1lKSksdm9pZCAwIT09by5zdHJlYW1pbmcmJihyKz1cIiZzdHJlYW1pbmc9XCIuY29uY2F0KG8uc3RyZWFtaW5nKSksby5leHRlcm5hbFBhdGgpe3ZhciBhPXRoaXMuX2NvcnJlY3RSZWxhdGl2ZVBhdGgoby5leHRlcm5hbFBhdGgpO2E9ZW5jb2RlVVJJQ29tcG9uZW50KGEpLHIrPVwiJnA9XCIuY29uY2F0KGEpfWlmKG8uZW5jcnlwdGlvbiYmKHIrPVwiJmF1dG9fbG9hZD1mYWxzZVwiKSxvLmVuYWJsZUFubm90YXRpb25zJiYocis9XCImYT0xXCIpLG8uZGlzYWJsZWRFbGVtZW50cyl7dmFyIHM9ZW5jb2RlVVJJQ29tcG9uZW50KG8uZGlzYWJsZWRFbGVtZW50cy5qb2luKFwiLFwiKSk7cis9XCImZGlzYWJsZWRFbGVtZW50cz1cIi5jb25jYXQocyl9aWYoby5zZXJ2ZXJVcmwpe3ZhciBjPXRoaXMuX2NvcnJlY3RSZWxhdGl2ZVBhdGgoby5zZXJ2ZXJVcmwpO2M9ZW5jb2RlVVJJQ29tcG9uZW50KGMpLHIrPVwiJnNlcnZlcl91cmw9XCIuY29uY2F0KGMpfWlmKG8uc2VydmVyVXJsSGVhZGVycyYmKHIrPVwiJnNlcnZlclVybEhlYWRlcnM9XCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KG8uc2VydmVyVXJsSGVhZGVycykpKSxvLmRvY3VtZW50SWQmJihyKz1cIiZkaWQ9XCIuY29uY2F0KG8uZG9jdW1lbnRJZCkpLG8uY3NzKXt2YXIgbD10aGlzLl9jb3JyZWN0UmVsYXRpdmVQYXRoKG8uY3NzKTtsPWVuY29kZVVSSUNvbXBvbmVudChsKSxyKz1cIiZjc3M9XCIuY29uY2F0KGwpfWlmKG8uZGlzYWJsZUkxOG4mJihyKz1cIiZkaXNhYmxlSTE4bj0xXCIpLG8uZW5hYmxlT2ZmbGluZU1vZGUmJihyKz1cIiZvZmZsaW5lPTFcIiksby5zdGFydE9mZmxpbmUmJihyKz1cIiZzdGFydE9mZmxpbmU9MVwiKSwoby5lbmFibGVSZWFkT25seU1vZGV8fG8uaXNSZWFkT25seSkmJihyKz1cIiZyZWFkb25seT0xXCIpLG8uaGlkZUFubm90YXRpb25QYW5lbCYmKHIrPVwiJmhpZGVBbm5vdGF0aW9uUGFuZWw9MVwiKSxvLmRpc2FibGVUb29sR3JvdXBSZW9yZGVyaW5nJiYocis9XCImZGlzYWJsZVRvb2xHcm91cFJlb3JkZXJpbmc9MVwiKSx2b2lkIDAhPT1vLmFubm90YXRpb25Vc2VyJiYocis9XCImdXNlcj1cIi5jb25jYXQoby5hbm5vdGF0aW9uVXNlcikpLHZvaWQgMD09PW8uYW5ub3RhdGlvbkFkbWluJiZ2b2lkIDA9PT1vLmlzQWRtaW5Vc2VyfHwocis9XCImYWRtaW49XCIuY29uY2F0KG8uYW5ub3RhdGlvbkFkbWlufHxvLmlzQWRtaW5Vc2VyPzE6MCkpLHZvaWQgMCE9PW8uY3VzdG9tJiYocis9XCImY3VzdG9tPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoby5jdXN0b20pKSksdm9pZCAwPT09by5zaG93TG9jYWxGaWxlUGlja2VyJiZ2b2lkIDA9PT1vLmVuYWJsZUZpbGVQaWNrZXJ8fChyKz1cIiZmaWxlcGlja2VyPVwiLmNvbmNhdChvLnNob3dMb2NhbEZpbGVQaWNrZXJ8fG8uZW5hYmxlRmlsZVBpY2tlcj8xOjApKSx2b2lkIDAhPT1vLmZ1bGxBUEkpe2lmKG8uZnVsbEFQSSl0aHJvdyBuZXcgRXJyb3IoJ1wiZnVsbEFQSVwiIGlzIG5vdCBhIHZhbGlkIGNvbnN0dWN0b3Igb3B0aW9uIGZvciBQREYuanMgRXhwcmVzcy4gUGxlYXNlIG1ha2Ugc3VyZSB5b3UgYXJlIHJlZmVycmluZyB0byB0aGUgcHJvcGVyIGRvY3VtZW50YXRpb24gKGh0dHBzOi8vcGRmanMuZXhwcmVzcy9kb2N1bWVudGF0aW9uKScpO3IrPVwiJnBkZm5ldD1cIi5jb25jYXQoby5mdWxsQVBJPzE6MCl9KHZvaWQgMCE9PW8uZW5hYmxlUmVkYWN0aW9uJiYocis9XCImZW5hYmxlUmVkYWN0aW9uPVwiLmNvbmNhdChvLmVuYWJsZVJlZGFjdGlvbj8xOjApKSx2b2lkIDAhPT1vLmRpc2FibGVWaXJ0dWFsRGlzcGxheU1vZGUmJihyKz1cIiZkaXNhYmxlVmlydHVhbERpc3BsYXlNb2RlPVwiLmNvbmNhdChvLmRpc2FibGVWaXJ0dWFsRGlzcGxheU1vZGU/MTowKSksdm9pZCAwIT09by5lbmFibGVNZWFzdXJlbWVudCYmKHIrPVwiJmVuYWJsZU1lYXN1cmVtZW50PVwiLmNvbmNhdChvLmVuYWJsZU1lYXN1cmVtZW50PzE6MCkpLHZvaWQgMCE9PW8uc2hvd1Rvb2xiYXJDb250cm9sJiYocis9XCImdG9vbGJhcj1cIi5jb25jYXQoby5zaG93VG9vbGJhckNvbnRyb2w/XCJ0cnVlXCI6XCJmYWxzZVwiKSksdm9pZCAwIT09by5zaG93UGFnZUhpc3RvcnlCdXR0b25zJiYocis9XCImcGFnZUhpc3Rvcnk9XCIuY29uY2F0KG8uc2hvd1BhZ2VIaXN0b3J5QnV0dG9ucz8xOjApKSx2b2lkIDAhPT1vLm5vdGVzSW5MZWZ0UGFuZWwmJihyKz1cIiZub3Rlc0luTGVmdFBhbmVsPVwiLmNvbmNhdChvLm5vdGVzSW5MZWZ0UGFuZWw/MTowKSksdm9pZCAwIT09by54ZG9tYWluUHJveHlVcmwpJiYobj1cInN0cmluZ1wiPT10eXBlb2Ygby54ZG9tYWluUHJveHlVcmw/e3VybDpvLnhkb21haW5Qcm94eVVybH06by54ZG9tYWluUHJveHlVcmwscis9XCImeGRvbWFpbl91cmxzPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7cmV0dXJuKG8uYXp1cmVXb3JrYXJvdW5kfHxvLmVuYWJsZUF6dXJlV29ya2Fyb3VuZCkmJihyKz1cIiZhenVyZVdvcmthcm91bmQ9MVwiKSxvLmVuYWJsZU9wdGltaXplZFdvcmtlcnN8fChyKz1cIiZlbmFibGVPcHRpbWl6ZWRXb3JrZXJzPTBcIiksby51c2VEb3dubG9hZGVyfHwocis9XCImdXNlRG93bmxvYWRlcj0wXCIpLG8uZGlzYWJsZVdlYnNvY2tldHMmJihyKz1cIiZkaXNhYmxlV2Vic29ja2V0cz0xXCIpLG8uZGlzYWJsZVN0cmVhbWluZyYmKHIrPVwiJmRpc2FibGVTdHJlYW1pbmc9MVwiKSxvLmZvcmNlQ2xpZW50U2lkZUluaXQmJihyKz1cIiZmb3JjZUNsaWVudFNpZGVJbml0PTFcIiksby5sb2FkQXNQREYmJihyKz1cIiZsb2FkQXNQREY9MVwiKSx2b2lkIDAhPT1vLndvcmtlclRyYW5zcG9ydFByb21pc2UmJihyKz1cIiZ1c2VTaGFyZWRXb3JrZXI9XCIuY29uY2F0KG8ud29ya2VyVHJhbnNwb3J0UHJvbWlzZT9cInRydWVcIjpcImZhbHNlXCIpKSx2b2lkIDAhPT1pJiZpJiYocis9XCImd2Vidmlld2VyU2VydmVyVVJMPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoaSkpKSxvLmZhbGxiYWNrVG9DbGllbnRTaWRlJiYocis9XCImZmFsbGJhY2tUb0NsaWVudFNpZGU9MVwiKSx2b2lkIDAhPT1vLnNpbmdsZVNlcnZlck1vZGUmJihyKz1cIiZzaW5nbGVTZXJ2ZXJNb2RlPVwiLmNvbmNhdChvLnNpbmdsZVNlcnZlck1vZGU/XCJ0cnVlXCI6XCJmYWxzZVwiKSksdm9pZCAwIT09by5hY2Nlc3NpYmxlTW9kZSYmKHIrPVwiJmFjY2Vzc2libGVNb2RlPVwiLmNvbmNhdChvLmFjY2Vzc2libGVNb2RlPzE6MCkpLG8uZGlzYWJsZUxvZ3MmJihyKz1cIiZkaXNhYmxlTG9ncz0xXCIpLG8uZW5hYmxlVmlld1N0YXRlQW5ub3RhdGlvbnMmJihyKz1cIiZlbmFibGVWaWV3U3RhdGVBbm5vdGF0aW9ucz0xXCIpLG8uZGlzYWJsZUZsYXR0ZW5lZEFubm90YXRpb25zJiYocis9XCImZGlzYWJsZUZsYXR0ZW5lZEFubm90YXRpb25zPTFcIiksby5oaWdoQ29udHJhc3RNb2RlJiYocis9XCImaGlnaENvbnRyYXN0TW9kZT0xXCIpLHZvaWQgMCE9PW8uc2VsZWN0QW5ub3RhdGlvbk9uQ3JlYXRpb24mJihyKz1cIiZzZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbj1cIi5jb25jYXQoby5zZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbj8xOjApKSx2b2lkIDAhPT1vLmF1dG9Gb2N1c05vdGVPbkFubm90YXRpb25TZWxlY3Rpb24mJihyKz1cIiZhdXRvRm9jdXNOb3RlT25Bbm5vdGF0aW9uU2VsZWN0aW9uPVwiLmNvbmNhdChvLmF1dG9Gb2N1c05vdGVPbkFubm90YXRpb25TZWxlY3Rpb24/MTowKSkscis9XCImaWQ9XCIuY29uY2F0KHRoaXMuaWQpLChyKz1cIiZiYXNlUGF0aD1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpKS5sZW5ndGg+MCYmXCImXCI9PT1yWzBdJiYocj1cIiNcIi5jb25jYXQoci5zbGljZSgxKSkpLHIrPVwiJndlYlZpZXdlckpTVmVyc2lvbj1cIi5jb25jYXQodGhpcy52ZXJzaW9uKX0sc2V0SW5zdGFuY2VEYXRhOmZ1bmN0aW9uKGUpe3Auc2V0KHRoaXMuZWxlbWVudCx7aWZyYW1lOmUsbDp0aGlzLm9wdGlvbnMubHx8dGhpcy5vcHRpb25zLmxpY2Vuc2VLZXksd29ya2VyVHJhbnNwb3J0UHJvbWlzZTp0aGlzLm9wdGlvbnMud29ya2VyVHJhbnNwb3J0UHJvbWlzZX0pfSxfY3JlYXRlSFRNTDU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5vcHRpb25zLnVpUGF0aCt0aGlzLl9nZXRIVE1MNU9wdGlvbnNVUkwoKSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7dGhpcy5zZXRJbnN0YW5jZURhdGEobiksbi5pZD1cIndlYnZpZXdlci1cIi5jb25jYXQodGhpcy5pZCksbi5zcmM9dCxuLnRpdGxlPVwid2Vidmlld2VyXCIsbi5mcmFtZUJvcmRlcj0wLG4ud2lkdGg9XCIxMDAlXCIsbi5oZWlnaHQ9XCIxMDAlXCIsbi5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwhMCksbi5zZXRBdHRyaWJ1dGUoXCJ3ZWJraXRhbGxvd2Z1bGxzY3JlZW5cIiwhMCksbi5zZXRBdHRyaWJ1dGUoXCJtb3phbGxvd2Z1bGxzY3JlZW5cIiwhMCksdGhpcy5pZnJhbWU9bix0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yJiZuLnNldEF0dHJpYnV0ZShcImRhdGEtYmdjb2xvclwiLHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpLHRoaXMub3B0aW9ucy5hc3NldFBhdGgmJm4uc2V0QXR0cmlidXRlKFwiZGF0YS1hc3NldHBhdGhcIixlbmNvZGVVUklDb21wb25lbnQodGhpcy5vcHRpb25zLmFzc2V0UGF0aCkpLHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChuKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwoZnVuY3Rpb24gdChuKXtpZihcInZpZXdlckxvYWRlZFwiPT09bi5kYXRhLnR5cGUmJm4uZGF0YS5pZD09PWUuaWQpdHJ5e2UuaW5zdGFuY2U9ZS5pZnJhbWUuY29udGVudFdpbmRvdy5pbnN0YW5jZX1jYXRjaChlKXt9ZmluYWxseXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0KSxlLl92aWV3ZXJMb2FkZWQoZS5pZnJhbWUpfX0pKX0sX2NyZWF0ZUhUTUw1TW9iaWxlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMub3B0aW9ucy51aVBhdGgrdGhpcy5fZ2V0SFRNTDVPcHRpb25zVVJMKCksbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3RoaXMuc2V0SW5zdGFuY2VEYXRhKG4pLG4uaWQ9XCJ3ZWJ2aWV3ZXItXCIuY29uY2F0KHRoaXMuaWQpLG4uc3JjPXQsbi5mcmFtZWJvcmRlcj0wLHRoaXMub3B0aW9ucy5hc3NldFBhdGgmJm4uc2V0QXR0cmlidXRlKFwiZGF0YS1hc3NldHBhdGhcIixlbmNvZGVVUklDb21wb25lbnQodGhpcy5vcHRpb25zLmFzc2V0UGF0aCkpLG4uc3R5bGUud2lkdGg9XCIxMDAlXCIsbi5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIsdGhpcy5pZnJhbWU9bix0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobik7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsKGZ1bmN0aW9uIHQobil7aWYoXCJ2aWV3ZXJMb2FkZWRcIj09PW4uZGF0YS50eXBlJiZuLmRhdGEuaWQ9PT1lLmlkKXRyeXtlLmluc3RhbmNlPWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuaW5zdGFuY2V9Y2F0Y2goZSl7fWZpbmFsbHl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdCksZS5fdmlld2VyTG9hZGVkKGUuaWZyYW1lKX19KSl9LGRpc3Bvc2U6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7cC5kZWxldGUoZS5lbGVtZW50KSxoLmRlbGV0ZShlLmVsZW1lbnQpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUubWVzc2FnZUhhbmRsZXIpLGUuaWZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZS5sb2FkTGlzdGVuZXIpLGUuaWZyYW1lPW51bGwsY29uc29sZS5jbGVhcigpLGUuaW5zdGFuY2UuQ29yZS5kb2N1bWVudFZpZXdlci5jbG9zZURvY3VtZW50KCkudGhlbigoZnVuY3Rpb24oKXt0KCl9KSl9KSl9LGdldEluc3RhbmNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5zdGFuY2V9LHNldENvbXBsZXRlSW5zdGFuY2U6ZnVuY3Rpb24oZSl7dGhpcy5jb21wbGV0ZUluc3RhbmNlPWV9LGdldENvbXBsZXRlSW5zdGFuY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb21wbGV0ZUluc3RhbmNlfSxfY29ycmVjdFJlbGF0aXZlUGF0aDpmdW5jdGlvbihlKXt2YXIgdD13aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBpKGUsdCl9KSk6aShlLHQpfSxfdGVzdEhUTUw1OmZ1bmN0aW9uKCl7dHJ5e3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cmV0dXJuIGUmJmUuZ2V0Q29udGV4dChcIjJkXCIpfWNhdGNoKGUpe3JldHVybiExfX0sX3Rlc3RXZWJBc3NlbWJseTpmdW5jdGlvbigpe3JldHVybiEoIXdpbmRvdy5XZWJBc3NlbWJseXx8IXdpbmRvdy5XZWJBc3NlbWJseS52YWxpZGF0ZSl9LF90ZXN0Q09SUzpmdW5jdGlvbigpe3JldHVyblwiWE1MSHR0cFJlcXVlc3RcImluIHdpbmRvdyYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIG5ldyBYTUxIdHRwUmVxdWVzdH0saXNJRTpmdW5jdGlvbigpe3ZhciBlPW5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSx0PS8obXNpZSkgKFtcXHcuXSspLy5leGVjKGUpfHwvKHRyaWRlbnQpKD86Lio/IHJ2OihbXFx3Ll0rKXwpLy5leGVjKGUpO3JldHVybiB0P3BhcnNlSW50KHRbMl0sMTApOnR9LGlzTW9iaWxlRGV2aWNlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNJRSgpJiYoMD09PXRoaXMuc2Nyb2xsYmFyV2lkdGgoKSYmbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVG91Y2gvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9TaWxrL2kpKX0sc2Nyb2xsYmFyV2lkdGg6ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Uuc3R5bGUuY3NzVGV4dD1cIndpZHRoOjEwMHB4O2hlaWdodDoxMDBweDtvdmVyZmxvdzpzY3JvbGwgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTk5OTlweFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSk7dmFyIHQ9ZS5vZmZzZXRXaWR0aC1lLmNsaWVudFdpZHRoO3JldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUpLHR9LGlzU2FtZU9yaWdpbjpmdW5jdGlvbihlKXt2YXIgdD13aW5kb3cubG9jYXRpb24sbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtuLmhyZWY9ZSxcIlwiPT09bi5ob3N0JiYobi5ocmVmPW4uaHJlZik7dmFyIG89d2luZG93LmxvY2F0aW9uLnBvcnQsaT1uLnBvcnQ7cmV0dXJuXCJodHRwOlwiPT09bi5wcm90b2NvbD8oaT1pfHxcIjgwXCIsbz1vfHxcIjgwXCIpOlwiaHR0cHM6XCI9PT1uLnByb3RvY29sJiYoaT1pfHxcIjQ0M1wiLG89b3x8XCI0NDNcIiksbi5ob3N0bmFtZT09PXQuaG9zdG5hbWUmJm4ucHJvdG9jb2w9PT10LnByb3RvY29sJiZpPT09b319LGMuV2ViVmlld2VyLk9wdGlvbnM9e2luaXRpYWxEb2M6dm9pZCAwLGFubm90YXRpb25BZG1pbjp2b2lkIDAsaXNBZG1pblVzZXI6dm9pZCAwLGFubm90YXRpb25Vc2VyOnZvaWQgMCxhc3NldFBhdGg6dm9pZCAwLGF1dG9DcmVhdGU6ITAsYXV0b0ZvY3VzTm90ZU9uQW5ub3RhdGlvblNlbGVjdGlvbjohMCxhenVyZVdvcmthcm91bmQ6ITEsYWRkaXRpb25hbFRyYW5zbGF0aW9uczp2b2lkIDAsZW5hYmxlQXp1cmVXb3JrYXJvdW5kOiExLGVuYWJsZU9wdGltaXplZFdvcmtlcnM6ITAsYmFja2dyb3VuZENvbG9yOnZvaWQgMCxiYWNrZW5kVHlwZTp2b2lkIDAsY3NzOnZvaWQgMCxjb25maWc6dm9pZCAwLGN1c3RvbTp2b2lkIDAsZG9jdW1lbnRJZDp2b2lkIDAsZG9jdW1lbnRUeXBlOnZvaWQgMCxwcmVsb2FkV29ya2VyOnZvaWQgMCxleHRlbnNpb246dm9pZCAwLGVuYWJsZUFubm90YXRpb25zOiEwLGZpbGVuYW1lOnZvaWQgMCxkaXNhYmxlSTE4bjohMSxkaXNhYmxlZEVsZW1lbnRzOnZvaWQgMCxkaXNhYmxlV2Vic29ja2V0czohMSxlbmFibGVPZmZsaW5lTW9kZTohMSxlbmFibGVSZWFkT25seU1vZGU6ITEsaXNSZWFkT25seTohMSxlbmFibGVSZWRhY3Rpb246ITEsZGlzYWJsZVZpcnR1YWxEaXNwbGF5TW9kZTohMSxlbmFibGVNZWFzdXJlbWVudDohMSxlbmNyeXB0aW9uOnZvaWQgMCxleHRlcm5hbFBhdGg6dm9pZCAwLGhpZGVBbm5vdGF0aW9uUGFuZWw6ITEsZGlzYWJsZVRvb2xHcm91cFJlb3JkZXJpbmc6ITEsdWlQYXRoOlwiLi91aS9pbmRleC5odG1sXCIsbDp2b2lkIDAsbGljZW5zZUtleTp2b2lkIDAsbW9iaWxlUmVkaXJlY3Q6ITEscGF0aDpcIlwiLHBkZkJhY2tlbmQ6dm9pZCAwLHdlYnZpZXdlclNlcnZlclVSTDp2b2lkIDAsZmFsbGJhY2tUb0NsaWVudFNpZGU6ITEsc2luZ2xlU2VydmVyTW9kZTohMSxmdWxsQVBJOiExLHByZWxvYWRQREZXb3JrZXI6ITAsc2VydmVyVXJsOnZvaWQgMCxzZXJ2ZXJVcmxIZWFkZXJzOnZvaWQgMCxzaG93TG9jYWxGaWxlUGlja2VyOiExLGVuYWJsZUZpbGVQaWNrZXI6ITEsc2hvd1BhZ2VIaXN0b3J5QnV0dG9uczohMCxzaG93VG9vbGJhckNvbnRyb2w6dm9pZCAwLHN0YXJ0T2ZmbGluZTohMSxzdHJlYW1pbmc6dm9pZCAwLHR5cGU6XCJodG1sNVwiLHVzZURvd25sb2FkZXI6ITAsd29ya2VyVHJhbnNwb3J0UHJvbWlzZTp2b2lkIDAseGRvbWFpblByb3h5VXJsOnZvaWQgMCx1aTp2b2lkIDAsZm9yY2VDbGllbnRTaWRlSW5pdDohMSxsb2FkQXNQREY6ITEsYWNjZXNzaWJsZU1vZGU6dm9pZCAwLGRpc2FibGVMb2dzOiExLGVuYWJsZVZpZXdTdGF0ZUFubm90YXRpb25zOiExLGhpZ2hDb250cmFzdE1vZGU6ITEsc2VsZWN0QW5ub3RhdGlvbk9uQ3JlYXRpb246ITEsbm90ZXNJbkxlZnRQYW5lbDohMSxkb2N1bWVudFhGREZSZXRyaWV2ZXI6dm9pZCAwLGRpc2FibGVGbGF0dGVuZWRBbm5vdGF0aW9uczohMSxkaXNhYmxlU3RyZWFtaW5nOiExfTt2YXIgdj1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24obixvKXtlLmw9ZS5sfHxlLmxpY2Vuc2VLZXksZS5henVyZVdvcmthcm91bmQ9ZS5henVyZVdvcmthcm91bmR8fGUuZW5hYmxlQXp1cmVXb3JrYXJvdW5kLGUuYW5ub3RhdGlvbkFkbWluPWUuYW5ub3RhdGlvbkFkbWlufHxlLmlzQWRtaW5Vc2VyLGUuZW5hYmxlUmVhZE9ubHlNb2RlPWUuZW5hYmxlUmVhZE9ubHlNb2RlfHxlLmlzUmVhZE9ubHksZS5zaG93TG9jYWxGaWxlUGlja2VyPWUuc2hvd0xvY2FsRmlsZVBpY2tlcnx8ZS5lbmFibGVGaWxlUGlja2VyO3QuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsKGZ1bmN0aW9uIHIoKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLHIpO3RyeXt2YXIgYz10LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikuY29udGVudFdpbmRvdztpZih2b2lkIDA9PT1jLlRvb2xzKXRocm93IG5ldyBFcnJvcihcIlZpZXdlciBpc24ndCBpbnN0YW50aWF0ZWQgY29ycmVjdGx5LiBJdCBjb3VsZCBiZSBjYXVzZWQgYnkgdGhlICdwYXRoJyBvcHRpb24gaW4gdGhlIFdlYlZpZXdlciBjb25zdHJ1Y3RvciBub3QgYmVpbmcgZGVmaW5lZCBjb3JyZWN0bHkuIFRoZSAncGF0aCcgb3B0aW9uIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgSFRNTCBmaWxlIHlvdSdyZSBsb2FkaW5nIHRoZSBzY3JpcHQgb24gYW5kIHRoZSBsaWIgZm9sZGVyIG5lZWRzIHRvIGJlIHB1YmxpY2x5IGFjY2Vzc2libGUuXCIpO3ZhciBsPWkuZ2V0SW5zdGFuY2UoKSx1PXtpZnJhbWVXaW5kb3c6YyxkaXNwb3NlOmkuZGlzcG9zZS5iaW5kKGkpfSxmPWQoe30sbCxhKHMoe30sbC5VSV9OQU1FU1BBQ0VfS0VZLGEoYSh7fSxsW2wuVUlfTkFNRVNQQUNFX0tFWV0pLHUpKSx1KSk7aS5zZXRDb21wbGV0ZUluc3RhbmNlKGYpO3ZhciBwPVByb21pc2UucmVzb2x2ZSgpO2lmKGUuZG9jdW1lbnRYRkRGUmV0cmlldmVyJiYocD1mW2wuQ09SRV9OQU1FU1BBQ0VfS0VZXS5kb2N1bWVudFZpZXdlci5zZXREb2N1bWVudFhGREZSZXRyaWV2ZXIoZS5kb2N1bWVudFhGREZSZXRyaWV2ZXIpKSxlLmFkZGl0aW9uYWxUcmFuc2xhdGlvbnMpe3ZhciBoPWUuYWRkaXRpb25hbFRyYW5zbGF0aW9ucztmW2wuVUlfTkFNRVNQQUNFX0tFWV0uc2V0VHJhbnNsYXRpb25zKGgubGFuZ3VhZ2UsaC50cmFuc2xhdGlvbnMpfXAudGhlbigoZnVuY3Rpb24oKXtuKGYpfSkpfWNhdGNoKHQpe2lmKFwiY29uZmlnXCJpbiBlJiZcIlwiIT09ZS5jb25maWcpcmV0dXJuIG4oKTtvKFwiVmlld2VyIGlzIG9uIGEgZGlmZmVyZW50IGRvbWFpbiwgdGhlIHByb21pc2UgZnJvbSBXZWJWaWV3ZXIgZnVuY3Rpb24gaXMgcmVqZWN0ZWQgYW5kIEFQSSBmdW5jdGlvbnMgd2lsbCBub3Qgd29yayBiZWNhdXNlIG9mIGNyb3NzIGRvbWFpbiBwZXJtaXNzaW9ucy4gU2VlIGh0dHBzOi8vd3d3LnBkZnRyb24uY29tL2tiX2Nyb3NzX29yaWdpbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIil9fSkpO3ZhciBpPW5ldyBjLldlYlZpZXdlcihlLHQpfSkpfSxiPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD11KHApLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtpZihvLmlmcmFtZT09PWUpcmV0dXJuIG99cmV0dXJuIG51bGx9O3YubD1mdW5jdGlvbihlKXt2YXIgdD1iKGUpO3JldHVybiB0JiZ0Lmx9LHYud29ya2VyVHJhbnNwb3J0UHJvbWlzZT1mdW5jdGlvbihlKXt2YXIgdD1iKGUpO3JldHVybiB0JiZ0LndvcmtlclRyYW5zcG9ydFByb21pc2V9LHYuV29ya2VyVHlwZXM9e0FMTDpcImFsbFwiLE9GRklDRTpcIm9mZmljZVwiLExFR0FDWV9PRkZJQ0U6XCJsZWdhY3lPZmZpY2VcIixQREY6XCJwZGZcIixDT05URU5UX0VESVQ6XCJjb250ZW50RWRpdFwifSx2LkJhY2tlbmRUeXBlcz1vO3ZhciB3PWZ1bmN0aW9uKGUpe3ZhciB0PXUocCk7aWYoIXQubGVuZ3RofHwhdC5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmluc3RhbmNlfSkpLmxlbmd0aClyZXR1cm4gY29uc29sZS53YXJuKFwiV2ViVmlld2VyLmdldEluc3RhbmNlKCkgd2FzIGNhbGxlZCBiZWZvcmUgYW55IGluc3RhbmNlcyB3ZXJlIGF2YWlsYWJsZVwiKSxudWxsO2lmKHQubGVuZ3RoPjEmJiFlKXRocm93IG5ldyBFcnJvcihcIk1vcmUgdGhhbiBvbmUgaW5zdGFuY2Ugb2YgV2ViVmlld2VyIHdhcyBmb3VuZCwgYW5kIG5vIGVsZW1lbnQgd2FzIHBhc3NlZCBpbnRvIGdldEluc3RhbmNlKCkuIFBsZWFzZSBzcGVjaWZ5IHdoaWNoIGluc3RhbmNlIHlvdSB3YW50IHRvIGdldC5cIik7cmV0dXJuIGU/KHAuZ2V0KGUpfHx7fSkuaW5zdGFuY2U6KHRbMF18fHt9KS5pbnN0YW5jZX07di5nZXRJbnN0YW5jZT13LHdpbmRvdy5XZWJWaWV3ZXI9djt0LmRlZmF1bHQ9dn1dKX0pKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFREYzO1xyXG4gICAgY29sb3I6ICMwRDExMTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgIGFuaW1hdGlvbjogem9vbUluIGZvcndhcmRzIDEwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubW9kYWwgaDEsXHJcbi5tb2RhbCBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBEMTExNztcclxufVxyXG5cclxuLm1vZGFsPmRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubW9kYWw+Lm1vZGFsLWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubW9kYWw+Lm1vZGFsLWJ1dHRvbnMtY29udGFpbmVyPmJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHQgIzBEMTExNztcclxuICAgIGNvbG9yOiAjMEQxMTE3O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHQgIzBEMTExNztcclxuXHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG5cclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbD5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBmYWRlSWQgZm9yd2FyZHMgMTAwbXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUlkIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHNjYWxlOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBzY2FsZTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc1cHgpIHtcclxuXHJcbiAgICAubW9kYWw+ZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPOztJQUVQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULHlDQUF5QztBQUM3Qzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixjQUFjOztJQUVkLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCOztJQUV6QixnQkFBZ0I7O0lBRWhCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1Asb0NBQW9DOztJQUVwQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkVERjM7XFxyXFxuICAgIGNvbG9yOiAjMEQxMTE3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgICBhbmltYXRpb246IHpvb21JbiBmb3J3YXJkcyAxMDBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGgxLFxcclxcbi5tb2RhbCBoMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwRDExMTc7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbD5kaXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbD4ubW9kYWwtYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWw+Lm1vZGFsLWJ1dHRvbnMtY29udGFpbmVyPmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlcjogc29saWQgM3B0ICMwRDExMTc7XFxyXFxuICAgIGNvbG9yOiAjMEQxMTE3O1xcclxcblxcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHQgIzBEMTExNztcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG5cXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA5NTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUlkIGZvcndhcmRzIDEwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJZCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbUluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBzY2FsZTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBzY2FsZTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzVweCkge1xcclxcblxcclxcbiAgICAubW9kYWw+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvZm9udHMvTW9uYSBTYW5zL01vbmEtU2Fucy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qI3JlZ2lvbiByb290L2h0bWwvYm9keSovXHJcbjpyb290IHtcclxuICAgIC0tc2hhZG93LWNvbG9yOiAwZGVnIDAlIDAlO1xyXG4gICAgLS1zaGFkb3ctZWxldmF0aW9uLWxvdzogMHB4IDAuNXB4IDAuNnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgMHB4IDAuOHB4IDAuOXB4IC0xLjJweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIDBweCAycHggMi4zcHggLTIuNXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKTtcclxuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW06IDBweCAwLjVweCAwLjZweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMTEpLCAwcHggMS42cHggMS44cHggLTAuOHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xMSksIDBweCA0LjFweCA0LjZweCAtMS43cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjExKSwgMHB4IDkuOXB4IDExLjFweCAtMi41cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjExKTtcclxuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1oaWdoOiAwcHggMC41cHggMC42cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAwcHggMi45cHggMy4zcHggLTAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgMHB4IDUuNHB4IDYuMXB4IC0wLjdweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIDBweCA4LjlweCAxMHB4IC0xLjFweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIC0wLjFweCAxNC4ycHggMTZweCAtMS40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAtMC4xcHggMjIuMXB4IDI0LjlweCAtMS44cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAtMC4xcHggMzMuNnB4IDM3LjhweCAtMi4xcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAtMC4ycHggNDkuNXB4IDU1LjdweCAtMi41cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9uYSBTYW5zJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDQwOTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBjb2xvcjogI0U2RURGMztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcclxufVxyXG5cclxuYm9keSAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9uYSBTYW5zJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBjb2xvcjogI0U2RURGMztcclxuXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjNmM5NmJiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMS41cHQ7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIGhlYWRlciovXHJcbmhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDQwOTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5oZWFkZXI+LnRpdGxlIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuaGVhZGVyPi5jb250ZW50IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXI+LmNvbnRlbnQ+LmNyZWRpdHMge1xyXG4gICAgd2lkdGg6IDdyZW07XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAgIGhlYWRlcj4uY29udGVudD4uY3JlZGl0czpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgc29saWQgMnB0O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1NHB4KSB7XHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXI+LnRpdGxlIHtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlcj4uY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlcj4uY29udGVudD4uY3JlZGl0cyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlcj4uY29udGVudD4uY3JlZGl0cz5oMiB7XHJcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIHRvcCBiYXIqL1xyXG4udG9wLWJhciB7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwNDA5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogIzIxMjYyRCBzb2xpZCAxcHQ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDAuNzVyZW0gMXJlbTtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAycmVtIDFmcjtcclxuXHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLW1lZGl1bSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnRvcC1iYXIgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZTtcclxufVxyXG5cclxuLnRvcC1iYXIgYnV0dG9uIHN2ZyBwYXRoIHtcclxuICAgIGZpbGw6ICNhYmFmYjI7XHJcbn1cclxuXHJcbi50b3AtYmFyIC5hY3RpdmUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG9wLWJhciAuYWN0aXZlIHN2ZyBwYXRoIHtcclxuICAgIGZpbGw6ICNFNkVERjM7XHJcbn1cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICAudG9wLWJhciAuYWN0aXZlOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMjM4LCAyNDMsIDAuMTI1KTtcclxuICAgIH1cclxufVxyXG5cclxuLnRvcC1iYXIgLmJhciB7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xyXG4gICAgbWFyZ2luOiAwLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnRvcC1iYXIgLmJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWZiMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyIDotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyIC5wYXRoLWljb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIG1pbi13aWR0aDogNHJlbTtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyIC5wYXRoLWljb24tY29udGFpbmVyIC5wYXRoLWljb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50b3AtYmFyIC5iYXIgLnBhdGgtaWNvbi1jb250YWluZXIgLnBhdGgtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICAudG9wLWJhciAuYmFyIC5wYXRoLWljb24tY29udGFpbmVyIC5wYXRoLWljb246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjNCNDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b3AtYmFyIC5iYXIgLnBhdGgtaWNvbi1jb250YWluZXIgc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyIC5wYXRoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyIC5wYXRoPmRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi50b3AtYmFyIC5iYXIgLnBhdGg+ZGl2PmRpdiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnBhdGgtbm90LWNsaWNrYWJsZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnBhdGgtY2xpY2thYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAgIC5wYXRoLWNsaWNrYWJsZTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2M0I0MjtcclxuICAgIH1cclxufVxyXG5cclxuLnRvcC1iYXIgLmJhciAucGF0aCBkaXYgc3ZnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLnRvcC1iYXIgLmJhciAucGF0aC1hcnJvdyB7XHJcbiAgICBmb250LXNpemU6IDI0cHQ7XHJcbn1cclxuXHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4ubWFpbi1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi8qI3JlZ2lvbiBzaWRlIHBhbmVsKi9cclxuLnNpZGUtcGFuZWwge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gOHJlbSAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogY2FsYygxMDBkdmggLSAxNi43NXJlbSAtIDFwdCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwNDA5O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAjMjEyNjJEIHNvbGlkIDFwdDtcclxuXHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2lkZS1wYW5lbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDAuNXJlbTtcclxufVxyXG5cclxuLnNpZGUtcGFuZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI2MkQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcclxufVxyXG5cclxuLnNpZGUtcGFuZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5zaWRlLWdyb3VwLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zaWRlLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zaWRlLWJ1dHRvbiBzdmcge1xyXG4gICAgbWluLXdpZHRoOiAxLjVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDEuNXJlbTtcclxufVxyXG5cclxuLnNpZGUtYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMS4yNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAgIC5zaWRlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjYyRDtcclxuICAgIH1cclxufVxyXG5cclxuLnNpZGUtYnV0dG9uLXllYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5zaWRlLWJ1dHRvbi1zZXNzaW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uc2lkZS1idXR0b24tdmFyaWFudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMi41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbn1cclxuXHJcbi5zaWRlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgMjUwbXMgZWFzZTtcclxufVxyXG5cclxuLmNvbGxhcHNlZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcclxufVxyXG5cclxuLnNpZGUtZ3JvdXAge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNpZGUtYnV0dG9uLWFycm93IHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbi5zaWRlLWJ1dHRvbi1hcnJvdyBwYXRoIHtcclxuICAgIGZpbGw6ICNFNkVERjM7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xyXG4gICAgLnNpZGUtYnV0dG9uLWFycm93OmhvdmVyIHBhdGgge1xyXG4gICAgICAgIGZpbGw6ICNhYmFmYjI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaWRlLXBhbmVsIC5jcmVkaXRzIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTYuNXJlbTtcclxuICAgIGhlaWdodDogN3JlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcblxyXG4gICAgLyogbWFyZ2luLXRvcDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLnNpZGUtcGFuZWwgLmNyZWRpdHMgZGl2IHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbn1cclxuXHJcbi5zaWRlLXBhbmVsIC5jcmVkaXRzOjpiZWZvcmUge1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAxKSAyNSUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSkgNTAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi5tYWluIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNy43NXJlbSAtIDFwdCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTExNztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubWFpbiAqIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMC41cmVtO1xyXG59XHJcblxyXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjYyRDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xyXG59XHJcblxyXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmhvbWUsXHJcbi5zdWItbWVudSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaG9tZT5oMixcclxuLnN1Yi1tZW51PmgyIHtcclxuICAgIG1hcmdpbjogMS41cmVtIDAgMCAxLjVyZW07XHJcbn1cclxuXHJcbi5ob21lPmRpdixcclxuLnN1Yi1tZW51PmRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyLjVyZW07XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAxNTBtcyBlYXNlLCBib3gtc2hhZG93IDE1MG1zIGVhc2U7XHJcbiAgICBib3JkZXI6ICMzNjNCNDIgc29saWQgMC41cHQ7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLW1lZGl1bSk7XHJcbn1cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgc2NhbGU6IDEuMDI1O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24taGlnaCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ6aG92ZXIgaW1nIHtcclxuICAgICAgICBzY2FsZTogMS4wNTtcclxuICAgIH1cclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb246IHNjYWxlIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyOjpiZWZvcmUge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgwLCAwLCAwLCAwLjc1KSk7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idWJibGUtc2hlZXQtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgcGFkZGluZzogMXJlbSAwIDJyZW0gMDtcclxufVxyXG5cclxuLmJ1YmJsZS1zaGVldC10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJ1YmJsZS1zaGVldC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uYnViYmxlLXNoZWV0LWNvbnRhaW5lciBkaXYge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XHJcbiAgICBib3JkZXI6ICMzNjNCNDIgc29saWQgMC4yNXB0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlO1xyXG59XHJcblxyXG4uYnViYmxlLWNob3NlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU2NTZFO1xyXG59XHJcblxyXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xyXG4gICAgLmJ1YmJsZS1jaG9pY2U6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnViYmxlLXNoZWV0LW1lbnUgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzg2MzY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLW1lZGl1bSk7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICAuYnViYmxlLXNoZWV0LW1lbnUgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjNmIyYjtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1YmJsZS1zaGVldC1tZW51IC5leGFtLW1hcmsge1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RURGMztcclxuICAgIGNvbG9yOiAjMEQxMTE3O1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29ycmVjdC1xdWVzdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4NjM2O1xyXG59XHJcblxyXG4ud3JvbmctcXVlc3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2MjMyMztcclxufVxyXG5cclxuLmRpc2NvdW50ZWQtcXVlc3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2MjM3ZTtcclxufVxyXG5cclxuLmNvcnJlY3RlZC1kaXNjb3VudGVkLXF1ZXN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvcnJlY3RlZC1kaXNjb3VudGVkLXF1ZXN0aW9uOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlcjogIzg2MjM3ZSBzb2xpZCAwLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uY29ycmVjdGVkLXF1ZXN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvcnJlY3RlZC1xdWVzdGlvbjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXI6ICNFNkVERjMgc29saWQgMC4yNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLnN3aXRjaC10by1wZGYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvdHRvbTogMXJlbTtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFREYzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtKTtcclxuICAgIHRyYW5zaXRpb246IHNjYWxlIDE1MG1zIGVhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICAuc3dpdGNoLXRvLXBkZjpob3ZlciB7XHJcbiAgICAgICAgc2NhbGU6IDEuMDU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zd2l0Y2gtdG8tcGRmIHN2ZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN3aXRjaC10by1wZGYgc3ZnIHBhdGgge1xyXG4gICAgZmlsbDogIzBEMTExNztcclxufVxyXG5cclxuLnBkZi12aWV3ZXIge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNy43NXJlbSAtIDFwdCk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMTAwbXMgZWFzZTtcclxufVxyXG5cclxuLmhpZGUtdmlld2VyIHtcclxuICAgIGJvdHRvbTogLTEwMCU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgb3Blbk1lbnUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjbG9zZU1lbnUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjFweCkge1xyXG4gICAgLnNpZGUtcGFuZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtcGFuZWwgLmNyZWRpdHMge1xyXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbj5kaXY+ZGl2IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbj5kaXY+aDIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnViYmxlLXNoZWV0LW1lbnUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1YmJsZS1zaGVldC1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idWJibGUtc2hlZXQtcmV2ZWFsLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDlyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZGYtdmlld2VyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTFweCkge1xyXG4gICAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHlCQUF5QjtBQUN6QjtJQUNJLDBCQUEwQjtJQUMxQixrTEFBa0w7SUFDbEwsbVBBQW1QO0lBQ25QLHlkQUF5ZDtBQUM3ZDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBa0Q7QUFDdEQ7O0FBRUE7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdLQUFnSzs7SUFFaEssU0FBUztJQUNULFVBQVU7O0lBRVYsY0FBYzs7SUFFZCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUEsYUFBYTs7QUFFYixpQkFBaUI7QUFDakI7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksb0NBQW9DO0lBQ3hDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJ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QWM7O0lBRWQsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsU0FBUztJQUNULHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyojcmVnaW9uIHJvb3QvaHRtbC9ib2R5Ki9cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tc2hhZG93LWNvbG9yOiAwZGVnIDAlIDAlO1xcclxcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbG93OiAwcHggMC41cHggMC42cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAwcHggMC44cHggMC45cHggLTEuMnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgMHB4IDJweCAyLjNweCAtMi41cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpO1xcclxcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtOiAwcHggMC41cHggMC42cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjExKSwgMHB4IDEuNnB4IDEuOHB4IC0wLjhweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMTEpLCAwcHggNC4xcHggNC42cHggLTEuN3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xMSksIDBweCA5LjlweCAxMS4xcHggLTIuNXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xMSk7XFxyXFxuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1oaWdoOiAwcHggMC41cHggMC42cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAwcHggMi45cHggMy4zcHggLTAuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgMHB4IDUuNHB4IDYuMXB4IC0wLjdweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIDBweCA4LjlweCAxMHB4IC0xLjFweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIC0wLjFweCAxNC4ycHggMTZweCAtMS40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAtMC4xcHggMjIuMXB4IDI0LjlweCAtMS44cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAtMC4xcHggMzMuNnB4IDM3LjhweCAtMi4xcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAtMC4ycHggNDkuNXB4IDU1LjdweCAtMi41cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb25hIFNhbnMnO1xcclxcbiAgICBzcmM6IHVybCgnLi4vbWVkaWEvZm9udHMvTW9uYSBTYW5zL01vbmEtU2Fucy50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwNDA5O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgY29sb3I6ICNFNkVERjM7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSAqIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb25hIFNhbnMnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgICBjb2xvcjogI0U2RURGMztcXHJcXG5cXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjogIzZjOTZiYjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMS41cHQ7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qI2VuZHJlZ2lvbiovXFxyXFxuXFxyXFxuLyojcmVnaW9uIGhlYWRlciovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwNDA5O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXI+LnRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyPi5jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXI+LmNvbnRlbnQ+LmNyZWRpdHMge1xcclxcbiAgICB3aWR0aDogN3JlbTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgIGhlYWRlcj4uY29udGVudD4uY3JlZGl0czpob3ZlciB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBzb2xpZCAycHQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xcclxcbiAgICBoZWFkZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVyPi50aXRsZSB7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVyPi5jb250ZW50IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoZWFkZXI+LmNvbnRlbnQ+LmNyZWRpdHMge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlcj4uY29udGVudD4uY3JlZGl0cz5oMiB7XFxyXFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyojZW5kcmVnaW9uKi9cXHJcXG5cXHJcXG4vKiNyZWdpb24gdG9wIGJhciovXFxyXFxuLnRvcC1iYXIge1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTA0MDk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206ICMyMTI2MkQgc29saWQgMXB0O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwYWRkaW5nOiAwIDFyZW0gMC43NXJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAycmVtIDFmcjtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW0pO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICB3aWR0aDogMi41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciBidXR0b24gc3ZnIHBhdGgge1xcclxcbiAgICBmaWxsOiAjYWJhZmIyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYWN0aXZlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYWN0aXZlIHN2ZyBwYXRoIHtcXHJcXG4gICAgZmlsbDogI0U2RURGMztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgLnRvcC1iYXIgLmFjdGl2ZTpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMjM4LCAyNDMsIDAuMTI1KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyIHtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xcclxcbiAgICBtYXJnaW46IDAuMjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjI1cmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGhlaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFmYjI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyIDotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi50b3AtYmFyIC5iYXIgLnBhdGgtaWNvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgICBtaW4td2lkdGg6IDRyZW07XFxyXFxuICAgIGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyIC5wYXRoLWljb24tY29udGFpbmVyIC5wYXRoLWljb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyIC5wYXRoLWljb24tY29udGFpbmVyIC5wYXRoLWljb24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcclxcbiAgICAudG9wLWJhciAuYmFyIC5wYXRoLWljb24tY29udGFpbmVyIC5wYXRoLWljb246aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2M0I0MjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyIC5wYXRoLWljb24tY29udGFpbmVyIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b3AtYmFyIC5iYXIgLnBhdGgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50b3AtYmFyIC5iYXIgLnBhdGg+ZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1iYXIgLmJhciAucGF0aD5kaXY+ZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF0aC1ub3QtY2xpY2thYmxlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wYXRoLWNsaWNrYWJsZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcclxcbiAgICAucGF0aC1jbGlja2FibGU6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2M0I0MjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyIC5wYXRoIGRpdiBzdmcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50b3AtYmFyIC5iYXIgLnBhdGgtYXJyb3cge1xcclxcbiAgICBmb250LXNpemU6IDI0cHQ7XFxyXFxufVxcclxcblxcclxcbi8qI2VuZHJlZ2lvbiovXFxyXFxuXFxyXFxuLm1haW4tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qI3JlZ2lvbiBzaWRlIHBhbmVsKi9cXHJcXG4uc2lkZS1wYW5lbCB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gOHJlbSAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMTYuNzVyZW0gLSAxcHQpO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDQwOTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAjMjEyNjJEIHNvbGlkIDFwdDtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogOTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtcGFuZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtZ3JvdXAtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtZ3JvdXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYnV0dG9uIHN2ZyB7XFxyXFxuICAgIG1pbi13aWR0aDogMS41cmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBoZWlnaHQ6IDEuMjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2U7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgIC5zaWRlLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbi15ZWFyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbi1zZXNzaW9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbi12YXJpYW50IHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDIuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgMjUwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbGxhcHNlZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1ncm91cCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbi1hcnJvdyB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbi1hcnJvdyBwYXRoIHtcXHJcXG4gICAgZmlsbDogI0U2RURGMztcXHJcXG4gICAgdHJhbnNpdGlvbjogZmlsbCAxMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgLnNpZGUtYnV0dG9uLWFycm93OmhvdmVyIHBhdGgge1xcclxcbiAgICAgICAgZmlsbDogI2FiYWZiMjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbCAuY3JlZGl0cyB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDE2LjVyZW07XFxyXFxuICAgIGhlaWdodDogN3JlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC4yNXJlbTtcXHJcXG5cXHJcXG4gICAgLyogbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbCAuY3JlZGl0cyBkaXYge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbCAuY3JlZGl0czo6YmVmb3JlIHtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDEpIDI1JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpIDUwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyojZW5kcmVnaW9uKi9cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDBkdmggLSA3Ljc1cmVtIC0gMXB0KTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTExNztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tYWluICoge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjYyRDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5ob21lLFxcclxcbi5zdWItbWVudSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZT5oMixcXHJcXG4uc3ViLW1lbnU+aDIge1xcclxcbiAgICBtYXJnaW46IDEuNXJlbSAwIDAgMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZT5kaXYsXFxyXFxuLnN1Yi1tZW51PmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXHJcXG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMTUwbXMgZWFzZSwgYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xcclxcbiAgICBib3JkZXI6ICMzNjNCNDIgc29saWQgMC41cHQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgLmNhcmQ6aG92ZXIge1xcclxcbiAgICAgICAgc2NhbGU6IDEuMDI1O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi1oaWdoKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZDpob3ZlciBpbWcge1xcclxcbiAgICAgICAgc2NhbGU6IDEuMDU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMCwgMCwgMCwgMC43NSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMTAlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5idWJibGUtc2hlZXQtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMXJlbSAwIDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1YmJsZS1zaGVldC10aXRsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1YmJsZS1zaGVldC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idWJibGUtc2hlZXQtY29udGFpbmVyIGRpdiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAjMzYzQjQyIHNvbGlkIDAuMjVwdDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnViYmxlLWNob3NlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RTY1NkU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgIC5idWJibGUtY2hvaWNlOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI2MkQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ1YmJsZS1zaGVldC1tZW51IGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4NjM2O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcclxcbiAgICAuYnViYmxlLXNoZWV0LW1lbnUgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzZiMmI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ1YmJsZS1zaGVldC1tZW51IC5leGFtLW1hcmsge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgcGFkZGluZzogMi41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFREYzO1xcclxcbiAgICBjb2xvcjogIzBEMTExNztcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jb3JyZWN0LXF1ZXN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzODYzNjtcXHJcXG59XFxyXFxuXFxyXFxuLndyb25nLXF1ZXN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2MjMyMztcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2NvdW50ZWQtcXVlc3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODYyMzdlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ycmVjdGVkLWRpc2NvdW50ZWQtcXVlc3Rpb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jb3JyZWN0ZWQtZGlzY291bnRlZC1xdWVzdGlvbjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlcjogIzg2MjM3ZSBzb2xpZCAwLjI1cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb3JyZWN0ZWQtcXVlc3Rpb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jb3JyZWN0ZWQtcXVlc3Rpb246OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3JkZXI6ICNFNkVERjMgc29saWQgMC4yNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoLXRvLXBkZiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYm90dG9tOiAxcmVtO1xcclxcbiAgICByaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RURGMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW0pO1xcclxcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAxNTBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcclxcbiAgICAuc3dpdGNoLXRvLXBkZjpob3ZlciB7XFxyXFxuICAgICAgICBzY2FsZTogMS4wNTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoLXRvLXBkZiBzdmcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoLXRvLXBkZiBzdmcgcGF0aCB7XFxyXFxuICAgIGZpbGw6ICMwRDExMTc7XFxyXFxufVxcclxcblxcclxcbi5wZGYtdmlld2VyIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTdyZW0pO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNy43NXJlbSAtIDFwdCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAxMDBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZS12aWV3ZXIge1xcclxcbiAgICBib3R0b206IC0xMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG9wZW5NZW51IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDByZW07XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2xvc2VNZW51IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMHJlbTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIxcHgpIHtcXHJcXG4gICAgLnNpZGUtcGFuZWwge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lkZS1wYW5lbCAuY3JlZGl0cyB7XFxyXFxuICAgICAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbj5kaXY+ZGl2IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluPmRpdj5oMiB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnViYmxlLXNoZWV0LW1lbnUge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnViYmxlLXNoZWV0LWJ1dHRvbnMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnViYmxlLXNoZWV0LXJldmVhbC1idXR0b24ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEycmVtO1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyA5cmVtKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGRmLXZpZXdlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MXB4KSB7XFxyXFxuICAgIC5jYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDdyZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhbF9iaW9sb2d5IGZyb20gJy4uL21lZGlhL2ltYWdlcy9hbF9iaW9sb2d5LmpwZydcclxuaW1wb3J0IGFsX2NoZW1pc3RyeSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvYWxfY2hlbWlzdHJ5LmpwZydcclxuaW1wb3J0IGFsX3BoeXNpY3MgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL2FsX3BoeXNpY3MuanBnJ1xyXG5cclxuaW1wb3J0IG9sX2Jpb2xvZ3kgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL29sX2Jpb2xvZ3kuanBnJ1xyXG5pbXBvcnQgb2xfY2hlbWlzdHJ5IGZyb20gJy4uL21lZGlhL2ltYWdlcy9vbF9jaGVtaXN0cnkuanBnJ1xyXG5pbXBvcnQgb2xfY29tYmluZWQgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL29sX2NvbWJpbmVkLnBuZydcclxuaW1wb3J0IG9sX2Vjb25vbWljcyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvb2xfZWNvbm9taWNzLnBuZydcclxuaW1wb3J0IG9sX3BoeXNpY3MgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL29sX3BoeXNpY3MuanBnJ1xyXG5cclxuaW1wb3J0IHJhbmRvbUltYWdlMSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzEuanBnJ1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2UyIGZyb20gJy4uL21lZGlhL2ltYWdlcy9SYW5kb20vMi5qcGcnXHJcbmltcG9ydCByYW5kb21JbWFnZTMgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL1JhbmRvbS8zLmpwZydcclxuaW1wb3J0IHJhbmRvbUltYWdlNCBmcm9tICcuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzQuanBnJ1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2U1IGZyb20gJy4uL21lZGlhL2ltYWdlcy9SYW5kb20vNS5qcGcnXHJcbmltcG9ydCByYW5kb21JbWFnZTYgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL1JhbmRvbS82LmpwZydcclxuaW1wb3J0IHJhbmRvbUltYWdlNyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzcuanBnJ1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2U4IGZyb20gJy4uL21lZGlhL2ltYWdlcy9SYW5kb20vOC5qcGcnXHJcbmltcG9ydCByYW5kb21JbWFnZTkgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL1JhbmRvbS85LmpwZydcclxuaW1wb3J0IHJhbmRvbUltYWdlMTAgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL1JhbmRvbS8xMC5qcGcnXHJcbmltcG9ydCByYW5kb21JbWFnZTExIGZyb20gJy4uL21lZGlhL2ltYWdlcy9SYW5kb20vMTEuanBnJ1xyXG5pbXBvcnQgcmFuZG9tSW1hZ2UxMiBmcm9tICcuLi9tZWRpYS9pbWFnZXMvUmFuZG9tLzEyLmpwZydcclxuaW1wb3J0IHJhbmRvbUltYWdlMTMgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL1JhbmRvbS8xMy5qcGcnXHJcbmltcG9ydCByYW5kb21JbWFnZTE0IGZyb20gJy4uL21lZGlhL2ltYWdlcy9SYW5kb20vMTQuanBnJ1xyXG5cclxuY29uc3QgcmFuZG9tSW1hZ2VzID0geyByYW5kb21JbWFnZTEsIHJhbmRvbUltYWdlMiwgcmFuZG9tSW1hZ2UzLCByYW5kb21JbWFnZTQsIHJhbmRvbUltYWdlNSwgcmFuZG9tSW1hZ2U2LCByYW5kb21JbWFnZTcsIHJhbmRvbUltYWdlOCwgcmFuZG9tSW1hZ2U5LCByYW5kb21JbWFnZTEwLCByYW5kb21JbWFnZTExLCByYW5kb21JbWFnZTEyLCByYW5kb21JbWFnZTEzLCByYW5kb21JbWFnZTE0IH1cclxuY29uc3QgaW1hZ2VzID0geyBhbF9iaW9sb2d5LCBhbF9jaGVtaXN0cnksIGFsX3BoeXNpY3MsIG9sX2Jpb2xvZ3ksIG9sX2NoZW1pc3RyeSwgb2xfY29tYmluZWQsIG9sX2Vjb25vbWljcywgb2xfcGh5c2ljcyB9XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGVCdXR0b24obGV2ZWwsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaWRlLWNvbnRhaW5lcicpXHJcbiAgICBlbGVtZW50LmlkID0gdmFyaWFudCA9PSB1bmRlZmluZWQgPyBzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fWAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn1gIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn1gIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fWBcclxuXHJcbiAgICBjb25zdCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ1dHRvbkVsZW1lbnQuaWQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBgc2lkZS0ke2xldmVsfS1idXR0b24tJHtzdWJqZWN0fWAgOiBgc2lkZS0ke2xldmVsfS1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9YCA6IGBzaWRlLSR7bGV2ZWx9LWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWAgOiBgc2lkZS0ke2xldmVsfS1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fWBcclxuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChgc2lkZS1idXR0b25gKVxyXG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBzaWRlLWJ1dHRvbi0ke3ZhcmlhbnQgPT0gdW5kZWZpbmVkID8gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/ICdzdWJqZWN0JyA6ICd5ZWFyJyA6ICdzZXNzaW9uJyA6ICd2YXJpYW50J31gKVxyXG5cclxuICAgIGNvbnN0IGFycm93RG93blN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpOyBhcnJvd0Rvd25TdmcuY2xhc3NMaXN0LmFkZCgnc2lkZS1idXR0b24tYXJyb3cnKTsgYXJyb3dEb3duU3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMzInKTsgYXJyb3dEb3duU3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzMyJyk7IGFycm93RG93blN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI1NiAyNTYnKTsgYXJyb3dEb3duU3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTsgYXJyb3dEb3duU3ZnLmlubmVySFRNTCA9ICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yMTYuNDkgMTA0LjQ5bC04MCA4MGExMiAxMiAwIDAgMS0xNyAwbC04MC04MGExMiAxMiAwIDAgMSAxNy0xN0wxMjggMTU5bDcxLjUxLTcxLjUyYTEyIDEyIDAgMCAxIDE3IDE3WlwiIC8+J1xyXG4gICAgY29uc3QgYXJyb3dVcFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpOyBhcnJvd1VwU3ZnLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYnV0dG9uLWFycm93Jyk7IGFycm93VXBTdmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7IGFycm93VXBTdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICczMicpOyBhcnJvd1VwU3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzMyJyk7IGFycm93VXBTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNTYgMjU2Jyk7IGFycm93VXBTdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpOyBhcnJvd1VwU3ZnLmlubmVySFRNTCA9ICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCJkPVwiTTIxNi40OSAxNjguNDlhMTIgMTIgMCAwIDEtMTcgMEwxMjggOTdsLTcxLjUxIDcxLjQ5YTEyIDEyIDAgMCAxLTE3LTE3bDgwLTgwYTEyIDEyIDAgMCAxIDE3IDBsODAgODBhMTIgMTIgMCAwIDEgMCAxN1wiIC8+J1xyXG4gICAgaWYgKHZhcmlhbnQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChhcnJvd0Rvd25TdmcpXHJcbiAgICAgICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChhcnJvd1VwU3ZnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdmFyaWFudCA9PSB1bmRlZmluZWQgPyBzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gc3ViamVjdCA9PSAnQ29tYmluZWQnID8gJ0NvbWJpbmVkIFNjaWVuY2UnIDogc3ViamVjdCA6IHllYXIgOiAoc2Vzc2lvbiA9PSAnbScgPyAnRmViIC8gTWFyJyA6IHNlc3Npb24gPT0gJ3MnID8gJ01heSAvIEp1bicgOiAnT2N0IC8gTm92JykgOiBgVmFyaWFudCAke051bWJlcih2YXJpYW50KSArIDF9YFxyXG4gICAgdGl0bGUuaWQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LXRpdGxlYCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS10aXRsZWAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS10aXRsZWAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9LXRpdGxlYFxyXG5cclxuICAgIGJ1dHRvbkVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KVxyXG4gICAgaWYgKHZhcmlhbnQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1jb250YWluZXInKVxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKVxyXG4gICAgICAgIGNvbnRhaW5lci5pZCA9IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LXllYXJzLWNvbnRhaW5lcmAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tc2Vzc2lvbnMtY29udGFpbmVyYCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzLWNvbnRhaW5lcmBcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ3NpZGUtZ3JvdXAnKVxyXG4gICAgICAgIGdyb3VwLmlkID0gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0teWVhcnNgIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LXNlc3Npb25zYCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzYFxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXApXHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5cclxuICAgICAgICBhcnJvd0Rvd25TdmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFycm93RG93blN2Zy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgICAgICAgICBhcnJvd1VwU3ZnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGFycm93VXBTdmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFycm93RG93blN2Zy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gICAgICAgICAgICBhcnJvd1VwU3ZnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNYWluQnV0dG9uKGxldmVsLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uLCB2YXJpYW50LCByYW5kb21JbWFnZSkge1xyXG4gICAgY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJylcclxuICAgIGVsZW1lbnRDb250YWluZXIuaWQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBgJHtsZXZlbH0tJHtzdWJqZWN0fS1jYXJkLWNvbnRhaW5lcmAgOiBgJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LWNhcmQtY29udGFpbmVyYCA6IGAke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS1jYXJkLWNvbnRhaW5lcmAgOiBgJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fS1jYXJkLWNvbnRhaW5lcmBcclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXHJcbiAgICBlbGVtZW50LmlkID0gdmFyaWFudCA9PSB1bmRlZmluZWQgPyBzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gYCR7bGV2ZWx9LSR7c3ViamVjdH0tY2FyZGAgOiBgJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LWNhcmRgIDogYCR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LWNhcmRgIDogYCR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH0tY2FyZGBcclxuXHJcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWFnZS1jb250YWluZXInKVxyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgaWYgKHJhbmRvbUltYWdlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHJhbmRvbUltYWdlc1tgcmFuZG9tSW1hZ2Uke3JhbmRvbUltYWdlICsgMX1gXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZXNbYCR7bGV2ZWx9XyR7c3ViamVjdC50b0xvd2VyQ2FzZSgpfWBdXHJcbiAgICB9XHJcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSlcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBzdWJqZWN0ID09ICdDb21iaW5lZCcgPyAnQ29tYmluZWQgU2NpZW5jZScgOiBzdWJqZWN0IDogeWVhciA6IChzZXNzaW9uID09ICdtJyA/ICdGZWIgLyBNYXInIDogc2Vzc2lvbiA9PSAncycgPyAnTWF5IC8gSnVuJyA6ICdPY3QgLyBOb3YnKSA6IGBWYXJpYW50ICR7TnVtYmVyKHZhcmlhbnQpICsgMX1gXHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJylcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50Q29udGFpbmVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSW1hZ2VzKCkge1xyXG4gICAgY29uc3QgcmFuZG9tSW1hZ2VzQXJyYXkgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTNdXHJcbiAgICBzaHVmZmxlKHJhbmRvbUltYWdlc0FycmF5KVxyXG5cclxuICAgIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoO1xyXG5cclxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT0gMCkge1xyXG5cclxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xyXG5cclxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAgICAgICBbYXJyYXlbY3VycmVudEluZGV4XSwgYXJyYXlbcmFuZG9tSW5kZXhdXSA9IFtcclxuICAgICAgICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSwgYXJyYXlbY3VycmVudEluZGV4XV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByYW5kb21JbWFnZXNBcnJheVxyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVNpZGVCdXR0b24sIGdlbmVyYXRlTWFpbkJ1dHRvbiwgZ2VuZXJhdGVSYW5kb21JbWFnZXMgfSIsImltcG9ydCAnLi4vY3NzL21vZGFsLmNzcydcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRpdGxlLCBjb250ZW50cywgc3VibWl0QnV0dG9uQmVoYXZpb3IsIGNhbmNlbEJ1dHRvbkJlaGF2aW9yKSB7XHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBtb2RhbEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVxyXG5cclxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKVxyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2Ryb3ApXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IHR5cGVvZiAoY29udGVudHNbaV0pID09ICdzdHJpbmcnID8gY29udGVudHNbaV0gOiBjb250ZW50c1tpXVswXVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChjb250ZW50c1tpXVsxXSkgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjb250ZW50c1tpXVsxXSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGFpbmVyJylcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcclxuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wJylcclxuXHJcbiAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICAgIG1vZGFsQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idXR0b25zLWNvbnRhaW5lcicpXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbEJ1dHRvbnNDb250YWluZXIpXHJcblxyXG4gICAgaWYgKHN1Ym1pdEJ1dHRvbkJlaGF2aW9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gc3VibWl0QnV0dG9uQmVoYXZpb3JbMF1cclxuXHJcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b25CZWhhdmlvclsxXSgpXHJcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbW9kYWxCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2FuY2VsQnV0dG9uQmVoYXZpb3IgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBjYW5jZWxCdXR0b25CZWhhdmlvclswXVxyXG5cclxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkJlaGF2aW9yWzFdKClcclxuICAgICAgICAgICAgbW9kYWxDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtb2RhbEJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpXHJcblxyXG4gICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1vZGFsICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCJcclxuaW1wb3J0IG9sU3ViamVjdHNNUyBmcm9tIFwiLi4vanNvbi9PTF9zdWJqZWN0c19tcy5qc29uXCJcclxuaW1wb3J0IGFsU3ViamVjdHNNUyBmcm9tIFwiLi4vanNvbi9BTF9zdWJqZWN0c19tcy5qc29uXCJcclxuXHJcbmltcG9ydCB7IGdlbmVyYXRlU2lkZUJ1dHRvbiwgZ2VuZXJhdGVNYWluQnV0dG9uLCBnZW5lcmF0ZVJhbmRvbUltYWdlcyB9IGZyb20gXCIuL2dlbmVyYXRlRWxlbWVudHMuanNcIlxyXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4vbW9kYWwuanNcIlxyXG5cclxuaW1wb3J0IFdlYlZpZXdlciBmcm9tICdAcGRmdHJvbi9wZGZqcy1leHByZXNzJ1xyXG5cclxuLy8gR0xPQkFMIFZBUklBQkxFU1xyXG5sZXQgdXNlckFuc3dlcnMgPSBbXVxyXG5sZXQgaW5FeGFtID0gZmFsc2VcclxubGV0IGNvbmZpcm0gPSBmYWxzZVxyXG5jb25zdCBzdWJqZWN0Q29kZSA9IHtcclxuICAgIE9MQmlvbG9neTogJzA2MTAnLFxyXG4gICAgT0xDaGVtaXN0cnk6ICcwNjIwJyxcclxuICAgIE9MQ29tYmluZWQ6ICcwNjUzJyxcclxuICAgIE9MRWNvbm9taWNzOiAnMDQ1NScsXHJcbiAgICBPTFBoeXNpY3M6ICcwNjI1JyxcclxuICAgIEFMQmlvbG9neTogJzk3MDAnLFxyXG4gICAgQUxDaGVtaXN0cnk6ICc5NzAxJyxcclxuICAgIEFMUGh5c2ljczogJzk3MDInLFxyXG59XHJcblxyXG5sZXQgcmFuZG9tSW1hZ2VzQXJyYXkgPSBnZW5lcmF0ZVJhbmRvbUltYWdlcygpXHJcbmxldCByYW5kb21JbWFnZUNvdW50ZXIgPSAwXHJcblxyXG4vLyBjcmVkaXRzIGJ1dHRvbiBiZWhhdmlvclxyXG5jb25zdCBjcmVkaXRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWRpdHMnKVxyXG5jcmVkaXRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3JlYXRlTW9kYWwoXHJcbiAgICAgICAgJ0NyZWRpdCcsIC8vIHRpdGxlXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVGhhbmtzIEZvciB1c2luZyA8YnI+IHRoZSB3ZWJzaXRlIDwzJyxcclxuICAgICAgICAgICAgJ1dlYnNpdGUgY3JlYXRlZCBieSA8YnI+IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vWmllZERldlwiPlppZWQ8L2E+ICYgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vbWFyLWVsc2hlcmJpbnlcIj5TaGVyYm88L2E+JyxcclxuICAgICAgICAgICAgJ1JlcG9zaXRvcnk6IDxicj4gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9aaWVkRGV2L21jcS1tYXRlXCI+TUNRIE1hdGU8L2E+J1xyXG4gICAgICAgIF0sIC8vIGNvbnRlbnRcclxuICAgIClcclxufSlcclxuXHJcbi8vIHBhdGggZGlyZWN0aW9uIGJlaGF2aW9yXHJcbmNvbnN0IG1vdmVCYWNrd2FyZHNBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrd2FyZHMtYXJyb3cnKVxyXG5jb25zdCBtb3ZlRm9yd2FyZHNBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3J3YXJkcy1hcnJvdycpXHJcblxyXG5sZXQgYmFja3dhcmRfc3RhY2sgPSBbXTtcclxubGV0IGN1cnJlbnRfcGF0aCA9IFwiaG9tZVwiOyAvLyBpbXBvcnRhbnQgdG8gcHV0IGluIGRhdGF0eXBlIGFuZCBmb3JtYXQgb2Ygcm9vdCBwYXRoXHJcbmxldCBmb3J3YXJkX3N0YWNrID0gW107XHJcblxyXG5mdW5jdGlvbiBpc0JhY2t3YXJkQXZhaWxhYmxlKCkge1xyXG4gICAgcmV0dXJuIGJhY2t3YXJkX3N0YWNrLmxlbmd0aCA+IDAgPyAxIDogMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGb3J3YXJkQXZhaWxhYmxlKCkge1xyXG4gICAgcmV0dXJuIGZvcndhcmRfc3RhY2subGVuZ3RoID4gMCA/IDEgOiAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYWNrd2FyZFBhdGgoKSB7XHJcbiAgICBpZiAoYmFja3dhcmRfc3RhY2subGVuZ3RoID09IDApIHJldHVybiAwO1xyXG4gICAgZm9yd2FyZF9zdGFjay5wdXNoKGN1cnJlbnRfcGF0aCk7XHJcbiAgICBjdXJyZW50X3BhdGggPSBiYWNrd2FyZF9zdGFjay5wb3AoKVxyXG5cclxuXHJcbiAgICBpZiAoaXNCYWNrd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUJhY2t3YXJkc0Fycm93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vdmVCYWNrd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXRoRWxlbWVudCh0cnVlKVxyXG4gICAgdXBkYXRlUGF0aEljb24oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQYXRoKG5ld19wYXRoKSB7XHJcbiAgICByYW5kb21JbWFnZXNBcnJheSA9IGdlbmVyYXRlUmFuZG9tSW1hZ2VzKClcclxuICAgIHJhbmRvbUltYWdlQ291bnRlciA9IDBcclxuICAgIGJhY2t3YXJkX3N0YWNrLnB1c2goY3VycmVudF9wYXRoKTtcclxuICAgIGZvcndhcmRfc3RhY2sgPSBbXTtcclxuICAgIGN1cnJlbnRfcGF0aCA9IG5ld19wYXRoO1xyXG5cclxuICAgIGlmIChpc0JhY2t3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICBtb3ZlQmFja3dhcmRzQXJyb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW92ZUJhY2t3YXJkc0Fycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICBpZiAoaXNGb3J3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhdGhFbGVtZW50KClcclxuICAgIHVwZGF0ZVBhdGhJY29uKClcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yd2FyZFBhdGgoKSB7XHJcbiAgICBpZiAoZm9yd2FyZF9zdGFjay5sZW5ndGggPT0gMCkgcmV0dXJuIDA7XHJcbiAgICBiYWNrd2FyZF9zdGFjay5wdXNoKGN1cnJlbnRfcGF0aCk7XHJcbiAgICBjdXJyZW50X3BhdGggPSBmb3J3YXJkX3N0YWNrLnBvcCgpO1xyXG4gICAgaWYgKGlzQmFja3dhcmRBdmFpbGFibGUoKSkge1xyXG4gICAgICAgIG1vdmVCYWNrd2FyZHNBcnJvdy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb3ZlQmFja3dhcmRzQXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuICAgIGlmIChpc0ZvcndhcmRBdmFpbGFibGUoKSkge1xyXG4gICAgICAgIG1vdmVGb3J3YXJkc0Fycm93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vdmVGb3J3YXJkc0Fycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGF0aEVsZW1lbnQodHJ1ZSlcclxuICAgIHVwZGF0ZVBhdGhJY29uKClcclxufVxyXG5cclxubGV0IHRpbWVvdXRcclxuZnVuY3Rpb24gdXBkYXRlUGF0aEVsZW1lbnQoY3JlYXRlU2hlZXQpIHtcclxuICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF0aCcpXHJcbiAgICBjb25zdCBwYXRoVGV4dCA9IGN1cnJlbnRfcGF0aC5zcGxpdCgnPicpXHJcbiAgICBtYWluLnN0eWxlLmFuaW1hdGlvbiA9ICcyMDBtcyBjbG9zZU1lbnUgZm9yd2FyZHMgZWFzZSdcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcclxuXHJcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGlmIChwYXRoVGV4dC5sZW5ndGggPT0gNSkge1xyXG4gICAgICAgICAgICBwYXRoLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIHBhdGguYXBwZW5kQ2hpbGQoY3JlYXRlUGF0aEVsZW1lbnQoYCR7cGF0aFRleHRbMF0udG9VcHBlckNhc2UoKX0gJHtwYXRoVGV4dFsxXX1gLCB0cnVlKSlcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChwYXRoVGV4dFsyXSkpXHJcbiAgICAgICAgICAgIHBhdGguYXBwZW5kQ2hpbGQoY3JlYXRlUGF0aEVsZW1lbnQocGF0aFRleHRbM10gPT0gJ20nID8gJ0ZlYiAvIE1hcicgOiBwYXRoVGV4dFszXSA9PSAncycgPyAnTWF5IC8gSnVuJyA6ICdPY3QgLyBOb3YnKSlcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChgVmFyaWFudCAke051bWJlcihwYXRoVGV4dFs0XSkgKyAxfWAsIGZhbHNlLCB0cnVlKSlcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVCdWJibGVTaGVldE1lbnUocGF0aFRleHRbMF0sIHBhdGhUZXh0WzFdLCBwYXRoVGV4dFsyXSwgcGF0aFRleHRbM10sIHBhdGhUZXh0WzRdKSlcclxuICAgICAgICB9IGVsc2UgaWYgKHBhdGhUZXh0Lmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHBhdGguaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChgJHtwYXRoVGV4dFswXS50b1VwcGVyQ2FzZSgpfSAke3BhdGhUZXh0WzFdfWAsIHRydWUpKVxyXG4gICAgICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KHBhdGhUZXh0WzJdKSlcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChwYXRoVGV4dFszXSA9PSAnbScgPyAnRmViIC8gTWFyJyA6IHBhdGhUZXh0WzNdID09ICdzJyA/ICdNYXkgLyBKdW4nIDogJ09jdCAvIE5vdicsIGZhbHNlLCB0cnVlKSlcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KHBhdGhUZXh0WzBdLCBwYXRoVGV4dFsxXSwgcGF0aFRleHRbMl0sIHBhdGhUZXh0WzNdKSlcclxuICAgICAgICB9IGVsc2UgaWYgKHBhdGhUZXh0Lmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHBhdGguaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChgJHtwYXRoVGV4dFswXS50b1VwcGVyQ2FzZSgpfSAke3BhdGhUZXh0WzFdfWAsIHRydWUpKVxyXG4gICAgICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KHBhdGhUZXh0WzJdLCBmYWxzZSwgdHJ1ZSkpXHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ3JlYXRlU3ViTWVudShwYXRoVGV4dFswXSwgcGF0aFRleHRbMV0sIHBhdGhUZXh0WzJdKSlcclxuICAgICAgICB9IGVsc2UgaWYgKHBhdGhUZXh0Lmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHBhdGguaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChgJHtwYXRoVGV4dFswXS50b1VwcGVyQ2FzZSgpfSAke3BhdGhUZXh0WzFdfWAsIHRydWUsIHRydWUpKVxyXG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKENyZWF0ZVN1Yk1lbnUocGF0aFRleHRbMF0sIHBhdGhUZXh0WzFdKSlcclxuICAgICAgICB9IGVsc2UgaWYgKHBhdGhUZXh0Lmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHBhdGguaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lTWVudSgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYWluLnN0eWxlLmFuaW1hdGlvbiA9ICcyMDBtcyBvcGVuTWVudSBmb3J3YXJkcyBlYXNlJ1xyXG4gICAgfSwgMTAwKTtcclxufVxyXG5cclxubW92ZUJhY2t3YXJkc0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGlzQmFja3dhcmRBdmFpbGFibGUoKSkge1xyXG4gICAgICAgIG5hdkNvbmZpcm0oKCkgPT4geyBiYWNrd2FyZFBhdGgoKSB9KVxyXG4gICAgfVxyXG59KVxyXG5tb3ZlRm9yd2FyZHNBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChpc0ZvcndhcmRBdmFpbGFibGUoKSkge1xyXG4gICAgICAgIG5hdkNvbmZpcm0oKCkgPT4geyBmb3J3YXJkUGF0aCgpIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgIGlmIChlLmJ1dHRvbnMgPT0gOCkge1xyXG4gICAgICAgIGlmIChpc0JhY2t3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7IGJhY2t3YXJkUGF0aCgpIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgIGlmIChlLmJ1dHRvbnMgPT0gMTYpIHtcclxuICAgICAgICBpZiAoaXNGb3J3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7IGZvcndhcmRQYXRoKCkgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gbmF2Q29uZmlybShjb25maXJtQ2FsbGJhY2spIHtcclxuICAgIGlmIChpbkV4YW0pIHtcclxuICAgICAgICBjcmVhdGVNb2RhbChcclxuICAgICAgICAgICAgJ0FyZSB5b3Ugc3VyZT8nLCAvLyB0aXRsZVxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnTmF2aWdhdGluZyB3aWxsIGxvc2UgeW91ciBwYXN0IHByb2dyZXNzIG9uIHRoZSBjdXJyZW50IGV4YW0nLFxyXG4gICAgICAgICAgICBdLCAvLyBjb250ZW50LFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5FeGFtID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2FsbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGF0aEVsZW1lbnQodGl0bGUsIGZpcnN0LCBsYXN0KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICBjb25zdCBwYXRoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwYXRoRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXHJcblxyXG4gICAgaWYgKCFmaXJzdCkge1xyXG4gICAgICAgIGNvbnN0IGFycm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpOyBhcnJvd0VsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsICczMicpOyBhcnJvd0VsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMzInKTsgYXJyb3dFbGVtZW50LnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjU2IDI1NicpOyBhcnJvd0VsZW1lbnQuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpOyBhcnJvd0VsZW1lbnQuaW5uZXJIVE1MID0gJyAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMTg0LjQ5IDEzNi40OWwtODAgODBhMTIgMTIgMCAwIDEtMTctMTdMMTU5IDEyOEw4Ny41MSA1Ni40OWExMiAxMiAwIDEgMSAxNy0xN2w4MCA4MGExMiAxMiAwIDAgMS0uMDIgMTdcIiAvPidcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGFycm93RWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWxhc3QpIHtcclxuICAgICAgICBwYXRoRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwYXRoLWNsaWNrYWJsZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGhFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BhdGgtbm90LWNsaWNrYWJsZScpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF0aFRleHQgPSBjdXJyZW50X3BhdGguc3BsaXQoJz4nKVxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChwYXRoRWxlbWVudClcclxuICAgIHBhdGhFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aXRsZSA9PSBgJHtwYXRoVGV4dFswXS50b1VwcGVyQ2FzZSgpfSAke3BhdGhUZXh0WzFdfWApIHtcclxuICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4geyBjaGFuZ2VQYXRoKGAke3BhdGhUZXh0WzBdfT4ke3BhdGhUZXh0WzFdfWApIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGl0bGUgPT0gcGF0aFRleHRbMl0pIHtcclxuICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4geyBjaGFuZ2VQYXRoKGAke3BhdGhUZXh0WzBdfT4ke3BhdGhUZXh0WzFdfT4ke3BhdGhUZXh0WzJdfWApIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGl0bGUgPT0gJ0ZlYiAvIE1hcicgfHwgdGl0bGUgPT0gJ01heSAvIEp1bicgfHwgdGl0bGUgPT0gJ09jdCAvIE5vdicpIHtcclxuICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4geyBjaGFuZ2VQYXRoKGAke3BhdGhUZXh0WzBdfT4ke3BhdGhUZXh0WzFdfT4ke3BhdGhUZXh0WzJdfT4ke3BhdGhUZXh0WzNdfWApIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhdGhJY29uKCkge1xyXG4gICAgY29uc3QgcGF0aEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF0aC1pY29uJylcclxuXHJcbiAgICBpZiAoY3VycmVudF9wYXRoLnNwbGl0KCc+JylbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGF0aEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTIyMi4xNCAxMDUuODVsLTgwLTgwYTIwIDIwIDAgMCAwLTI4LjI4IDBsLTgwIDgwQTE5Ljg2IDE5Ljg2IDAgMCAwIDI4IDEyMHY5NmExMiAxMiAwIDAgMCAxMiAxMmg2NGExMiAxMiAwIDAgMCAxMi0xMnYtNTJoMjR2NTJhMTIgMTIgMCAwIDAgMTIgMTJoNjRhMTIgMTIgMCAwIDAgMTItMTJ2LTk2YTE5Ljg2IDE5Ljg2IDAgMCAwLTUuODYtMTQuMTVNMjA0IDIwNGgtNDB2LTUyYTEyIDEyIDAgMCAwLTEyLTEyaC00OGExMiAxMiAwIDAgMC0xMiAxMnY1Mkg1MnYtODIuMzVsNzYtNzZsNzYgNzZaXCIgLz48L3N2Zz4nXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRfcGF0aC5zcGxpdCgnPicpWzFdID09ICdCaW9sb2d5Jykge1xyXG4gICAgICAgIHBhdGhJY29uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCJNMjI0IDIwNGgtMTJhOTIuMSA5Mi4xIDAgMCAwLTY0LTE0My4yMlYzMmEyMCAyMCAwIDAgMC0yMC0yMEg4MGEyMCAyMCAwIDAgMC0yMCAyMHY5NmEyMCAyMCAwIDAgMCAyMCAyMGg0OGEyMCAyMCAwIDAgMCAyMC0yMFY4NS4wOEE2OC4xIDY4LjEgMCAwIDEgMjA0IDE1MmE2Ny4zOSA2Ny4zOSAwIDAgMS0yNC4xOCA1MkgzMmExMiAxMiAwIDAgMCAwIDI0aDE5MmExMiAxMiAwIDAgMCAwLTI0bS0xMDAtODBIODRWMzZoNDBabS01MiA2NGExMiAxMiAwIDAgMSAwLTI0aDY0YTEyIDEyIDAgMCAxIDAgMjRaXCIvPjwvc3ZnPidcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudF9wYXRoLnNwbGl0KCc+JylbMV0gPT0gJ1BoeXNpY3MnKSB7XHJcbiAgICAgICAgcGF0aEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMDkuODQgNDcuNDRBOTEuNDIgOTEuNDIgMCAwIDAgMTQ0LjYyIDIwaC0uMzVhOTEuNDQgOTEuNDQgMCAwIDAtNjUuMTIgMjdsLTYxLjM5IDYyLjE3YTIwIDIwIDAgMCAwIC4wOCAyOC4yMUw0Ni41IDE2NmExOS44OSAxOS44OSAwIDAgMCAxNC4xNSA1Ljg2aC4xMWExOS44NiAxOS44NiAwIDAgMCAxNC4yLTZsNjAuODctNjIuMzlhMTIuMDcgMTIuMDcgMCAwIDEgMTYuNzctLjEyYTExLjYzIDExLjYzIDAgMCAxIDMuNSA4LjM1YTEyLjg1IDEyLjg1IDAgMCAxLTMuNjYgOS4xMUw5MC4xOSAxODFhMjAgMjAgMCAwIDAtLjIxIDI4LjVsMjguNjYgMjguNjZhMjAuMDggMjAuMDggMCAwIDAgMjguMTUuMTRsNjEuNzYtNjAuNDRsLjA5LS4wOWMzNi4wMS0zNS45OSAzNi41NC05NC40NiAxLjItMTMwLjMzTTYwLjYyIDE0Ni4yMWwtMjMtMjNsMTguMTktMTguNDFsMjIuODggMjIuODhabTcyLjIgNzIuMThsLTIzLTIzbDE4LjYxLTE4bDIyLjg4IDIyLjg3Wm01OC44OS01Ny42MmwtMjMuMjMgMjIuNzNsLTIyLjc4LTIyLjc3TDE2OS4yMSAxMzhsLjE1LS4xNGEzNyAzNyAwIDAgMCAxMC43NC0yNi4zN2EzNS40NCAzNS40NCAwIDAgMC0xMC44NS0yNS40MWEzNi4yIDM2LjIgMCAwIDAtNTAuNDQuNDhsLS4xLjExbC0yMy4yNSAyMy44MmwtMjIuNzgtMjIuNzdsMjMuNS0yMy44QTY3LjU1IDY3LjU1IDAgMCAxIDE0NC4yNyA0NGguMjZhNjcuNjIgNjcuNjIgMCAwIDEgNDguMjEgMjAuMjljMjYuMTEgMjYuNDkgMjUuNjQgNjkuNzYtMS4wMyA5Ni40OFwiLz48L3N2Zz4nXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRfcGF0aC5zcGxpdCgnPicpWzFdID09ICdDaGVtaXN0cnknKSB7XHJcbiAgICAgICAgcGF0aEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMjUuMTUgMTk3LjcxTDE2NCA5NS44MVY0NGg0YTEyIDEyIDAgMCAwIDAtMjRIODhhMTIgMTIgMCAwIDAgMCAyNGg0djUxLjgxbC02MS4xNSAxMDEuOUEyMCAyMCAwIDAgMCA0OCAyMjhoMTYwYTIwIDIwIDAgMCAwIDE3LjE1LTMwLjI5TTE0MCA0NHY1NS4xNGExMiAxMiAwIDAgMCAxLjcxIDYuMTdsMzUuMTMgNTguNTRjLTEwLjc5Ljg2LTI1LjE1LTEuMzEtNDMuNDItMTAuNTZjLTE0LTcuMDgtMjcuNDYtMTEuMzMtNDAuMjctMTIuNzZsMjEuMTQtMzUuMjJhMTIgMTIgMCAwIDAgMS43MS02LjE3VjQ0Wk01NS4wNiAyMDRMNzkgMTY0LjE5YzEzLTEuMTEgMjcuNjIgMi40MiA0My42MiAxMC41MmMxOS42MSA5LjkyIDM2LjI1IDEzLjMxIDQ5Ljg1IDEzLjMxYTc1LjQ0IDc1LjQ0IDAgMCAwIDE3LjY0LTIuMDJsMTAuODMgMThaXCIvPjwvc3ZnPidcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudF9wYXRoLnNwbGl0KCc+JylbMV0gPT0gJ0Vjb25vbWljcycpIHtcclxuICAgICAgICBwYXRoSWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIzNiAyMDhhMTIgMTIgMCAwIDEtMTIgMTJIMzJhMTIgMTIgMCAwIDEtMTItMTJWNDhhMTIgMTIgMCAwIDEgMjQgMHY5OWw0My41MS00My41MmExMiAxMiAwIDAgMSAxNyAwTDEyOCAxMjdsNDMtNDNoLTExYTEyIDEyIDAgMCAxIDAtMjRoNDBhMTIgMTIgMCAwIDEgMTIgMTJ2NDBhMTIgMTIgMCAwIDEtMjQgMHYtMTFsLTUxLjUxIDUxLjUyYTEyIDEyIDAgMCAxLTE3IDBMOTYgMTI5bC01MiA1MnYxNWgxODBhMTIgMTIgMCAwIDEgMTIgMTJcIi8+PC9zdmc+J1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50X3BhdGguc3BsaXQoJz4nKVsxXSA9PSAnQ29tYmluZWQnKSB7XHJcbiAgICAgICAgcGF0aEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMTkuMjMgMTU5LjJhMTk2LjY2IDE5Ni42NiAwIDAgMC0xOC0zMS4yYTE5Ni42NiAxOTYuNjYgMCAwIDAgMTgtMzEuMmMxMS44NC0yNi4zMSAxMS42OS00Ny40OC0uNDMtNTkuNnMtMzMuMjktMTIuMjctNTkuNi0uNDNhMTk2LjY2IDE5Ni42NiAwIDAgMC0zMS4yIDE4YTE5Ni42NiAxOTYuNjYgMCAwIDAtMzEuMi0xOGMtMjYuMzEtMTEuODQtNDcuNDgtMTEuNjktNTkuNi40M3MtMTIuMjcgMzMuMjktLjQzIDU5LjZhMTk2LjY2IDE5Ni42NiAwIDAgMCAxOCAzMS4yYTE5Ni42NiAxOTYuNjYgMCAwIDAtMTggMzEuMmMtMTEuODQgMjYuMzEtMTEuNjkgNDcuNDguNDMgNTkuNmM2LjEzIDYuMTMgMTQuNTggOS4yIDI0LjggOS4yYzEwIDAgMjEuNzctMi45MiAzNC43Ni04Ljc3YTE5Ni42NiAxOTYuNjYgMCAwIDAgMzEuMi0xOGExOTYuNjYgMTk2LjY2IDAgMCAwIDMxLjIgMThjMTMgNS44NSAyNC43NCA4Ljc3IDM0Ljc2IDguNzdjMTAuMjYgMCAxOC43MS0zLjA3IDI0Ljg0LTkuMmMxMi4xNi0xMi4xMiAxMi4zMS0zMy4yOS40Ny01OS42bS0xNy40MS0xMDVjNS4yNSA1LjI2IDEuNzkgMjYtMTYgNTMuNzhjLTUuNjEtNi42Ni0xMS42NS0xMy4yNS0xOC4wNy0xOS42N1MxNTQuNyA3NS44MyAxNDggNzAuMjJjMjcuODItMTcuODMgNDguNTYtMjEuMjkgNTMuODItMTYuMDRaTTE3MS4yNCAxMjhhMjg4LjYgMjg4LjYgMCAwIDEtMjAuNTEgMjIuNzNBMjg4LjYgMjg4LjYgMCAwIDEgMTI4IDE3MS4yNGEyODguNiAyODguNiAwIDAgMS0yMi43My0yMC41MUEyODguNiAyODguNiAwIDAgMSA4NC43NiAxMjhBMjk4LjU1IDI5OC41NSAwIDAgMSAxMjggODQuNzZhMjg2LjgzIDI4Ni44MyAwIDAgMSAyMi43MyAyMC41MUEyODYuODMgMjg2LjgzIDAgMCAxIDE3MS4yNCAxMjhNNTQuMTggNTQuMThjMS40Ni0xLjQ1IDQuMS0yLjI0IDcuNzUtMi4yNGM5LjUzIDAgMjUuOTQgNS4zOSA0NiAxOC4yOGMtNi42NiA1LjYxLTEzLjI1IDExLjY1LTE5LjY3IDE4LjA3Uzc1LjgzIDEwMS4zIDcwLjIyIDEwOEM1Mi4zOSA4MC4xOCA0OC45MyA1OS40NCA1NC4xOCA1NC4xOG0wIDE0Ny42NGMtNS4yNS01LjI2LTEuNzktMjYgMTYtNTMuNzhjNS42MSA2LjY2IDExLjY1IDEzLjI1IDE4LjA3IDE5LjY3czEzIDEyLjQ2IDE5LjY3IDE4LjA3Yy0yNy43NCAxNy44My00OC40OCAyMS4yOS01My43NCAxNi4wNG0xNDcuNjQgMGMtNS4yNiA1LjI1LTI2IDEuNzktNTMuNzgtMTZjNi42Ni01LjYxIDEzLjI1LTExLjY1IDE5LjY3LTE4LjA3czEyLjQ2LTEzIDE4LjA3LTE5LjY3YzE3LjgzIDI3Ljc0IDIxLjI5IDQ4LjQ4IDE2LjA0IDUzLjc0TTE0NCAxMjhhMTYgMTYgMCAxIDEtMTYtMTZhMTYgMTYgMCAwIDEgMTYgMTZcIi8+PC9zdmc+J1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwYXRoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXRoLWljb24nKVxyXG5wYXRoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50X3BhdGggIT0gJ2hvbWUnKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVBhdGgoJ2hvbWUnKVxyXG4gICAgICAgICAgICBwYXRoLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIGluRXhhbSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vIGNyZWF0aW5nIHNpZGUgYnV0dG9ucyBmb3Igb2wgc3ViamVjdHNcclxuY29uc3Qgc2lkZUdyb3VwT2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZS1ncm91cC1vbCcpXHJcbk9iamVjdC5rZXlzKG9sU3ViamVjdHNNUykuZm9yRWFjaChzdWJqZWN0ID0+IHtcclxuICAgIGNvbnN0IHN1YmplY3RFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKCdvbCcsIHN1YmplY3QpXHJcbiAgICBzdWJqZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1vbC1idXR0b24tJHtzdWJqZWN0fWAgfHwgZS50YXJnZXQuaWQgPT0gYHNpZGUtb2wtJHtzdWJqZWN0fS10aXRsZWApIHtcclxuICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9YClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHNpZGVHcm91cE9sLmFwcGVuZENoaWxkKHN1YmplY3RFbGVtZW50KVxyXG5cclxuICAgIGNvbnN0IHNpZGVTdWJqZWN0WWVhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2lkZS1vbC0ke3N1YmplY3R9LXllYXJzYClcclxuICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XSkuZm9yRWFjaCh5ZWFyID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFyRWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbignb2wnLCBzdWJqZWN0LCB5ZWFyKVxyXG4gICAgICAgIHllYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1vbC1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9YCB8fCBlLnRhcmdldC5pZCA9PSBgc2lkZS1vbC0ke3N1YmplY3R9LSR7eWVhcn0tdGl0bGVgKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn1gKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNpZGVTdWJqZWN0WWVhcnMuYXBwZW5kQ2hpbGQoeWVhckVsZW1lbnQpXHJcblxyXG4gICAgICAgIGNvbnN0IHNpZGVZZWFyU2Vzc2lvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2lkZS1vbC0ke3N1YmplY3R9LSR7eWVhcn0tc2Vzc2lvbnNgKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXSkuZm9yRWFjaChzZXNzaW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oJ29sJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbilcclxuICAgICAgICAgICAgc2Vzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1vbC1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn1gIHx8IGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXRpdGxlYCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufWApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2lkZVllYXJTZXNzaW9ucy5hcHBlbmRDaGlsZChzZXNzaW9uRWxlbWVudClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGVTZXNzaW9uVmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2lkZS1vbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS12YXJpYW50c2ApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXSkuZm9yRWFjaCh2YXJpYW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl1bdmFyaWFudF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKCdvbCcsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9YCB8fCBlLnRhcmdldC5pZCA9PSBgc2lkZS1vbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9LXRpdGxlYCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn0+JHt2YXJpYW50fWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVNlc3Npb25WYXJpYW50cy5hcHBlbmRDaGlsZCh2YXJpYW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vIGNyZWF0aW5nIHNpZGUgYnV0dG9ucyBmb3IgYWwgc3ViamVjdHNcclxuY29uc3Qgc2lkZUdyb3VwQWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZS1ncm91cC1hbCcpXHJcbk9iamVjdC5rZXlzKGFsU3ViamVjdHNNUykuZm9yRWFjaChzdWJqZWN0ID0+IHtcclxuICAgIGNvbnN0IHN1YmplY3RFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKCdhbCcsIHN1YmplY3QpXHJcbiAgICBzdWJqZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC1idXR0b24tJHtzdWJqZWN0fWAgfHwgZS50YXJnZXQuaWQgPT0gYHNpZGUtYWwtJHtzdWJqZWN0fS10aXRsZWApIHtcclxuICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9YClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHNpZGVHcm91cEFsLmFwcGVuZENoaWxkKHN1YmplY3RFbGVtZW50KVxyXG5cclxuICAgIGNvbnN0IHNpZGVTdWJqZWN0WWVhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2lkZS1hbC0ke3N1YmplY3R9LXllYXJzYClcclxuICAgIE9iamVjdC5rZXlzKGFsU3ViamVjdHNNU1tzdWJqZWN0XSkuZm9yRWFjaCh5ZWFyID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFyRWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbignYWwnLCBzdWJqZWN0LCB5ZWFyKVxyXG4gICAgICAgIHllYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LXllYXJgIHx8IGUudGFyZ2V0LmlkID09IGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS10aXRsZWApIHtcclxuICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH0+JHt5ZWFyfWApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2lkZVN1YmplY3RZZWFycy5hcHBlbmRDaGlsZCh5ZWFyRWxlbWVudClcclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZVllYXJTZXNzaW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS1zZXNzaW9uc2ApXHJcbiAgICAgICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdKS5mb3JFYWNoKHNlc3Npb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uRWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbignYWwnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uKVxyXG4gICAgICAgICAgICBzZXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGBzaWRlLWFsLWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS15ZWFyYCB8fCBlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS10aXRsZWApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn1gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzaWRlWWVhclNlc3Npb25zLmFwcGVuZENoaWxkKHNlc3Npb25FbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2lkZVNlc3Npb25WYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzYClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKS5mb3JFYWNoKHZhcmlhbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudEVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oJ2FsJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbiwgdmFyaWFudClcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gYHNpZGUtYWwtYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH0teWVhcmAgfHwgZS50YXJnZXQuaWQgPT0gYHNpZGUtYWwtJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fS10aXRsZWApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH0+JHt5ZWFyfT4ke3Nlc3Npb259PiR7dmFyaWFudH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVTZXNzaW9uVmFyaWFudHMuYXBwZW5kQ2hpbGQodmFyaWFudEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pXHJcblxyXG4vLyBjcmVhdGluZyBob21lIG1lbnVcclxuZnVuY3Rpb24gY3JlYXRlSG9tZU1lbnUoKSB7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhvbWUuaWQgPSAnaG9tZSdcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpXHJcbiAgICBjb25zdCBvbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgb2xUaXRsZS50ZXh0Q29udGVudCA9ICdPTCBTdWJqZWN0cydcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQob2xUaXRsZSlcclxuXHJcbiAgICBjb25zdCBvbENhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNUykuZm9yRWFjaChzdWJqZWN0ID0+IHtcclxuICAgICAgICBjb25zdCBzdWJqZWN0RWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbignb2wnLCBzdWJqZWN0KVxyXG4gICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZChzdWJqZWN0RWxlbWVudClcclxuICAgICAgICBzdWJqZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9YClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvbENhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmplY3RFbGVtZW50KVxyXG4gICAgfSlcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQob2xDYXJkc0NvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCBhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgYWxUaXRsZS50ZXh0Q29udGVudCA9ICdBTCBTdWJqZWN0cydcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoYWxUaXRsZSlcclxuXHJcbiAgICBjb25zdCBhbENhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIE9iamVjdC5rZXlzKGFsU3ViamVjdHNNUykuZm9yRWFjaChzdWJqZWN0ID0+IHtcclxuICAgICAgICBjb25zdCBzdWJqZWN0RWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbignYWwnLCBzdWJqZWN0KVxyXG4gICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZChzdWJqZWN0RWxlbWVudClcclxuICAgICAgICBzdWJqZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9YClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhbENhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmplY3RFbGVtZW50KVxyXG4gICAgfSlcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoYWxDYXJkc0NvbnRhaW5lcilcclxuXHJcbiAgICByZXR1cm4gaG9tZVxyXG59XHJcblxyXG4vLyBjcmVhdGluZyB0aGUgc3ViIG1lbnUgYnV0dG9uc1xyXG5mdW5jdGlvbiBDcmVhdGVTdWJNZW51KGxldmVsLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1lbnUuaWQgPSBgU2VsZWN0IGEgJHtzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gJ3llYXJzLW1lbnUnIDogJ3Nlc3Npb25zLW1lbnUnIDogJ3ZhcmlhbnRzLW1lbnUnfWBcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnc3ViLW1lbnUnKVxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBTZWxlY3QgYSAke3Nlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyAneWVhcicgOiAnc2Vzc2lvbicgOiAndmFyaWFudCd9YFxyXG4gICAgbWVudS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuXHJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpZiAobGV2ZWwudG9Mb3dlckNhc2UoKSA9PSAnb2wnKSB7XHJcbiAgICAgICAgaWYgKHNlc3Npb24gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh5ZWFyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob2xTdWJqZWN0c01TW3N1YmplY3RdKS5mb3JFYWNoKHllYXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHllYXJFbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKCdvbCcsIHN1YmplY3QsIHllYXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCByYW5kb21JbWFnZXNBcnJheVtyYW5kb21JbWFnZUNvdW50ZXJdKVxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUltYWdlQ291bnRlcisrXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUm90YXRpbmdDYXJkKHllYXJFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHllYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYG9sPiR7c3ViamVjdH0+JHt5ZWFyfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoeWVhckVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob2xTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdKS5mb3JFYWNoKHNlc3Npb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25FbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKCdvbCcsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHVuZGVmaW5lZCwgcmFuZG9tSW1hZ2VzQXJyYXlbcmFuZG9tSW1hZ2VDb3VudGVyXSlcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21JbWFnZUNvdW50ZXIrK1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZChzZXNzaW9uRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vzc2lvbkVsZW1lbnQpXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXSkuZm9yRWFjaCh2YXJpYW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl1bdmFyaWFudF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKCdvbCcsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQsIHJhbmRvbUltYWdlc0FycmF5W3JhbmRvbUltYWdlQ291bnRlcl0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1hZ2VDb3VudGVyKytcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQodmFyaWFudEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn0+JHt2YXJpYW50fWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQodmFyaWFudEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChsZXZlbC50b0xvd2VyQ2FzZSgpID09ICdhbCcpIHtcclxuICAgICAgICBpZiAoc2Vzc2lvbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHllYXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVNbc3ViamVjdF0pLmZvckVhY2goeWVhciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeWVhckVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ2FsJywgc3ViamVjdCwgeWVhciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJhbmRvbUltYWdlc0FycmF5W3JhbmRvbUltYWdlQ291bnRlcl0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1hZ2VDb3VudGVyKytcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQoeWVhckVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fT4ke3llYXJ9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZWFyRWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl0pLmZvckVhY2goc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ2FsJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbiwgdW5kZWZpbmVkLCByYW5kb21JbWFnZXNBcnJheVtyYW5kb21JbWFnZUNvdW50ZXJdKVxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUltYWdlQ291bnRlcisrXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUm90YXRpbmdDYXJkKHNlc3Npb25FbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH0+JHt5ZWFyfT4ke3Nlc3Npb259YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZXNzaW9uRWxlbWVudClcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKS5mb3JFYWNoKHZhcmlhbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudEVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ2FsJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbiwgdmFyaWFudCwgcmFuZG9tSW1hZ2VzQXJyYXlbcmFuZG9tSW1hZ2VDb3VudGVyXSlcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21JbWFnZUNvdW50ZXIrK1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZCh2YXJpYW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufT4ke3ZhcmlhbnR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2YXJpYW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKVxyXG5cclxuICAgIHJldHVybiBtZW51XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdGF0aW5nQ2FyZChlbGVtZW50Q29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudENvbnRhaW5lci5jaGlsZHJlblswXVxyXG5cclxuICAgIGVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGUgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQsIHNjYWxlIDE1MG1zIGVhc2UsIGJveC1zaGFkb3cgMTUwbXMgZWFzZWBcclxuICAgICAgICBjb25zdCBhVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByb3RhdGVDYXJkKGUpXHJcbiAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIGNvbnN0IGFub3RoZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGBzY2FsZSAxNTBtcyBlYXNlLCBib3gtc2hhZG93IDE1MG1zIGVhc2VgXHJcbiAgICAgICAgICAgIGVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcm90YXRlQ2FyZClcclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgICBlbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFUaW1lb3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYW5vdGhlclRpbWVvdXQpXHJcblxyXG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJvdGF0ZUNhcmQpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQsIHNjYWxlIDE1MG1zIGVhc2UsIGJveC1zaGFkb3cgMTUwbXMgZWFzZWBcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgYFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIHJvdGF0ZUNhcmQoZSkge1xyXG4gICAgICAgIGNvbnN0IG1vdXNlUG9zID0ge1xyXG4gICAgICAgICAgICB4OiAoKChlLmNsaWVudFggLSBlbGVtZW50Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLngpIC8gZWxlbWVudENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqICg0NSAvIDIpKSAtICg0NSAvIDIpIC8gMiksXHJcbiAgICAgICAgICAgIHk6ICgoKGUuY2xpZW50WSAtIGVsZW1lbnRDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSkgLyBlbGVtZW50Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqICg0NSAvIDIpKSAtICg0NSAvIDIpIC8gMilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke21vdXNlUG9zLnh9ZGVnKSByb3RhdGVYKCR7LW1vdXNlUG9zLnl9ZGVnKSBzY2FsZSgxLjAyNSlgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1YmJsZVNoZWV0TWVudShsZXZlbCwgc3ViamVjdCwgeWVhciwgc2Vzc2lvbiwgdmFyaWFudCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtZW51LmlkID0gJ2J1YmJsZS1zaGVldC1tZW51J1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdidWJibGUtc2hlZXQtbWVudScpXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdidWJibGUtc2hlZXQtdGl0bGUnKVxyXG4gICAgdGl0bGUuaWQgPSAnYnViYmxlLXNoZWV0LXRpdGxlJ1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnRXZlcnl0aGluZyBpcyBzZXQuIE5vdyB5b3UgY2FuIHN0YXJ0IHNvbHZpbmcuJ1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuXHJcbiAgICBjb25zdCBwZGZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBwZGZMaW5rLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1zaGVldC1wZGYtbGluaycpXHJcbiAgICBwZGZMaW5rLmlkID0gJ2J1YmJsZS1zaGVldC1wZGYtbGluaydcclxuICAgIHBkZkxpbmsudGV4dENvbnRlbnQgPSAnT3BlbiBwZGYgaW4gZXh0ZXJuYWwgdGFiJ1xyXG4gICAgcGRmTGluay5ocmVmID0gYC4vcGRmcy8ke2xldmVsLnRvVXBwZXJDYXNlKCl9LSR7c3ViamVjdH0vJHt5ZWFyfS8ke3Nlc3Npb24gPT0gJ3MnID8gJ01heS1KdW4nIDogc2Vzc2lvbiA9PSAndycgPyAnT2N0LU5vdicgOiAnRmViLU1hcid9LyR7c3ViamVjdENvZGVbYCR7bGV2ZWwudG9VcHBlckNhc2UoKX0ke3N1YmplY3R9YF19XyR7c2Vzc2lvbn0ke051bWJlcih5ZWFyKSAtIDIwMDB9X3FwXyR7c3ViamVjdCA9PSAnRWNvbm9taWNzJyA/IDEgOiBsZXZlbCA9PSAnYWwnID8gMSA6IDJ9JHtOdW1iZXIodmFyaWFudCkgKyAxfS5wZGZgXHJcbiAgICBwZGZMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKHBkZkxpbmspXHJcblxyXG4gICAgY29uc3QgYnViYmxlU2hlZXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnViYmxlU2hlZXRDb250YWluZXIuaWQgPSAnYnViYmxlLXNoZWV0LWNvbnRhaW5lcidcclxuICAgIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1zaGVldC1jb250YWluZXInKVxyXG5cclxuICAgIGxldCBtb2RlbEFuc3dlcnMgPSBsZXZlbCA9PSAnb2wnID8gb2xTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dW3ZhcmlhbnRdIDogYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dW3ZhcmlhbnRdXHJcbiAgICB1c2VyQW5zd2VycyA9IEFycmF5KG1vZGVsQW5zd2Vycy5sZW5ndGgpLmZpbGwoJycpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbEFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBxdWVzdGlvbk51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlc3Rpb25OdW1iZXIuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWJveCcpXHJcbiAgICAgICAgcXVlc3Rpb25OdW1iZXIudGV4dENvbnRlbnQgPSBpICsgMVxyXG4gICAgICAgIHF1ZXN0aW9uTnVtYmVyLmlkID0gYHF1ZXN0aW9uLSR7aX0tbnVtYmVyYFxyXG4gICAgICAgIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uTnVtYmVyKVxyXG5cclxuICAgICAgICBjb25zdCBxdWVzdGlvbkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QuYWRkKCdidWJibGUtYm94JylcclxuICAgICAgICBxdWVzdGlvbkEuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob2ljZScpXHJcbiAgICAgICAgcXVlc3Rpb25BLnRleHRDb250ZW50ID0gJ0EnXHJcbiAgICAgICAgcXVlc3Rpb25BLmlkID0gYHF1ZXN0aW9uLSR7aX0tYWBcclxuICAgICAgICBxdWVzdGlvbkEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGluRXhhbSA9IHRydWVcclxuICAgICAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICB1c2VyQW5zd2Vyc1tpXSA9ICdBJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnViYmxlU2hlZXRDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25BKVxyXG5cclxuICAgICAgICBjb25zdCBxdWVzdGlvbkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QuYWRkKCdidWJibGUtYm94JylcclxuICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob2ljZScpXHJcbiAgICAgICAgcXVlc3Rpb25CLnRleHRDb250ZW50ID0gJ0InXHJcbiAgICAgICAgcXVlc3Rpb25CLmlkID0gYHF1ZXN0aW9uLSR7aX0tYmBcclxuICAgICAgICBxdWVzdGlvbkIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGluRXhhbSA9IHRydWVcclxuICAgICAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICB1c2VyQW5zd2Vyc1tpXSA9ICdCJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnViYmxlU2hlZXRDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25CKVxyXG5cclxuICAgICAgICBjb25zdCBxdWVzdGlvbkMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QuYWRkKCdidWJibGUtYm94JylcclxuICAgICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob2ljZScpXHJcbiAgICAgICAgcXVlc3Rpb25DLnRleHRDb250ZW50ID0gJ0MnXHJcbiAgICAgICAgcXVlc3Rpb25DLmlkID0gYHF1ZXN0aW9uLSR7aX0tY2BcclxuICAgICAgICBxdWVzdGlvbkMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGluRXhhbSA9IHRydWVcclxuICAgICAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QuYWRkKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICB1c2VyQW5zd2Vyc1tpXSA9ICdDJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnViYmxlU2hlZXRDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25DKVxyXG5cclxuICAgICAgICBjb25zdCBxdWVzdGlvbkQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QuYWRkKCdidWJibGUtYm94JylcclxuICAgICAgICBxdWVzdGlvbkQuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob2ljZScpXHJcbiAgICAgICAgcXVlc3Rpb25ELnRleHRDb250ZW50ID0gJ0QnXHJcbiAgICAgICAgcXVlc3Rpb25ELmlkID0gYHF1ZXN0aW9uLSR7aX0tZGBcclxuICAgICAgICBxdWVzdGlvbkQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGluRXhhbSA9IHRydWVcclxuICAgICAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICB1c2VyQW5zd2Vyc1tpXSA9ICdEJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnViYmxlU2hlZXRDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25EKVxyXG4gICAgfVxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChidWJibGVTaGVldENvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnViYmxlLXNoZWV0LWJ1dHRvbnMtY29udGFpbmVyJylcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0J1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1zaGVldC1zdWJtaXQtYnV0dG9uJylcclxuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9ICdidWJibGUtc2hlZXQtc3VibWl0LWJ1dHRvbidcclxuXHJcbiAgICBjb25zdCByZXZlYWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgcmV2ZWFsQnV0dG9uLnRleHRDb250ZW50ID0gJ1JldmVhbCBhbGwgYW5zd2VycydcclxuICAgIHJldmVhbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidWJibGUtc2hlZXQtcmV2ZWFsLWJ1dHRvbicpXHJcbiAgICByZXZlYWxCdXR0b24uaWQgPSAnYnViYmxlLXNoZWV0LXJldmVhbC1idXR0b24nXHJcblxyXG4gICAgY29uc3QgbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtYXJrLmlkID0gJ2V4YW0tbWFyaydcclxuICAgIG1hcmsuY2xhc3NMaXN0LmFkZCgnZXhhbS1tYXJrJylcclxuICAgIG1hcmsudGV4dENvbnRlbnQgPSBgLSAvICR7bW9kZWxBbnN3ZXJzLmxlbmd0aH1gXHJcblxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyQW5zd2Vycy5pbmNsdWRlcygnJykpIHtcclxuICAgICAgICAgICAgY3JlYXRlTW9kYWwoXHJcbiAgICAgICAgICAgICAgICAnQXJlIHlvdSBzdXJlPycsIC8vIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlZW1zIGxpa2UgdGhlcmUgYXJlIHNvbWUgcXVlc3Rpb25zIHlvdSBtaXNzZWQuIDxicj4gT25seSB0aGUgc29sdmVkIHF1ZXN0aW9ucyB3aWxsIGJlIGdyYWRlZC4nLFxyXG4gICAgICAgICAgICAgICAgXSwgLy8gY29udGVudCxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29ycmVjdEFuc3dlcnMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsQW5zd2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsQW5zd2Vyc1tpXSA9PSAnUScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0QW5zd2VycysrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc2NvdW50ZWRRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LW51bWJlcmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2NvdW50ZWQtcXVlc3Rpb24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWxBbnN3ZXJzW2ldID09IHVzZXJBbnN3ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlcnMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcnJlY3RRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LW51bWJlcmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0UXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnY29ycmVjdC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVzZXJBbnN3ZXJzW2ldID09ICcnKSB7IH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JvbmdRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LW51bWJlcmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JvbmdRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0LXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cm9uZ1F1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dyb25nLXF1ZXN0aW9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ycmVjdGVkUXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS0ke21vZGVsQW5zd2Vyc1tpXS50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdGVkUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnY29ycmVjdGVkLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrLnRleHRDb250ZW50ID0gYCR7Y29ycmVjdEFuc3dlcnN9IC8gJHttb2RlbEFuc3dlcnMubGVuZ3RofWBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7IH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb3JyZWN0QW5zd2VycyA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kZWxBbnN3ZXJzW2ldID09ICdRJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJzKytcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzY291bnRlZFF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tbnVtYmVyYClcclxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnd3JvbmctcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ZWRRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0LXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnZGlzY291bnRlZC1xdWVzdGlvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbEFuc3dlcnNbaV0gPT0gdXNlckFuc3dlcnNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0QW5zd2VycysrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcnJlY3RRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LW51bWJlcmApXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0UXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnY29ycmVjdC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVzZXJBbnN3ZXJzW2ldID09ICcnKSB7IH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JvbmdRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LW51bWJlcmApXHJcbiAgICAgICAgICAgICAgICAgICAgd3JvbmdRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0LXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICB3cm9uZ1F1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dyb25nLXF1ZXN0aW9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ycmVjdGVkUXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS0ke21vZGVsQW5zd2Vyc1tpXS50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdGVkUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnY29ycmVjdGVkLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJrLnRleHRDb250ZW50ID0gYCR7Y29ycmVjdEFuc3dlcnN9IC8gJHttb2RlbEFuc3dlcnMubGVuZ3RofWBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldmVhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjcmVhdGVNb2RhbChcclxuICAgICAgICAgICAgJ0FyZSB5b3Ugc3VyZT8nLCAvLyB0aXRsZVxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnVGhpcyB3aWxsIG9ubHkgaGlnaGxpZ2h0IHRoZSBjb3JyZWN0IGFuc3dlcnMgYW5kIHdpbGwgbm90IGNvcnJlY3QgeW91ciBhbnN3ZXJzLicsXHJcbiAgICAgICAgICAgIF0sIC8vIGNvbnRlbnQsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICdDb25maXJtJyxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsQW5zd2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxBbnN3ZXJzW2ldLnRvTG93ZXJDYXNlKCkgIT0gJ3EnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3JyZWN0ZWRRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LSR7bW9kZWxBbnN3ZXJzW2ldLnRvTG93ZXJDYXNlKCl9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RlZFF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3RlZC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudGVkUXVlc3Rpb25BID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tYWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudGVkUXVlc3Rpb25CID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tYmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudGVkUXVlc3Rpb25DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tY2ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudGVkUXVlc3Rpb25EID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tZGApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uQS5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0ZWQtZGlzY291bnRlZC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkUXVlc3Rpb25CLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3RlZC1kaXNjb3VudGVkLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ZWRRdWVzdGlvbkMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdGVkLWRpc2NvdW50ZWQtcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uRC5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0ZWQtZGlzY291bnRlZC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICgpID0+IHsgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZlYWxCdXR0b24pXHJcblxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKVxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtYXJrKVxyXG5cclxuICAgIC8vIHBkZiB2aWV3ZXJcclxuICAgIGxldCBwZGZWaWV3T3BlbmVkID0gZmFsc2VcclxuICAgIGNvbnN0IHN3aXRjaFRvUGRmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHN3aXRjaFRvUGRmLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaC10by1wZGYnKVxyXG4gICAgc3dpdGNoVG9QZGYuaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMDAgMTY0djhoMTJhMTIgMTIgMCAwIDEgMCAyNGgtMTJ2MTJhMTIgMTIgMCAwIDEtMjQgMHYtNTZhMTIgMTIgMCAwIDEgMTItMTJoMzJhMTIgMTIgMCAwIDEgMCAyNFptLTEwOCA4YTMyIDMyIDAgMCAxLTMyIDMyaC00djRhMTIgMTIgMCAwIDEtMjQgMHYtNTZhMTIgMTIgMCAwIDEgMTItMTJoMTZhMzIgMzIgMCAwIDEgMzIgMzJtLTI0IDBhOCA4IDAgMCAwLTgtOGgtNHYxNmg0YTggOCAwIDAgMCA4LThtMTAwIDhhNDAgNDAgMCAwIDEtNDAgNDBoLTE2YTEyIDEyIDAgMCAxLTEyLTEydi01NmExMiAxMiAwIDAgMSAxMi0xMmgxNmE0MCA0MCAwIDAgMSA0MCA0MG0tMjQgMGExNiAxNiAwIDAgMC0xNi0xNmgtNHYzMmg0YTE2IDE2IDAgMCAwIDE2LTE2TTM2IDEwOFY0MGEyMCAyMCAwIDAgMSAyMC0yMGg5NmExMiAxMiAwIDAgMSA4LjQ5IDMuNTJsNTYgNTZBMTIgMTIgMCAwIDEgMjIwIDg4djIwYTEyIDEyIDAgMCAxLTI0IDB2LTRoLTQ4YTEyIDEyIDAgMCAxLTEyLTEyVjQ0SDYwdjY0YTEyIDEyIDAgMCAxLTI0IDBtMTI0LTUxdjIzaDIzWlwiLz48L3N2Zz5gXHJcbiAgICBzd2l0Y2hUb1BkZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoIXBkZlZpZXdPcGVuZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGRmVmlld2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgcGRmVmlld2VyLmlkID0gJ3BkZi12aWV3ZXInXHJcbiAgICAgICAgICAgIHBkZlZpZXdlci5jbGFzc0xpc3QuYWRkKCdwZGYtdmlld2VyJylcclxuXHJcbiAgICAgICAgICAgIFdlYlZpZXdlcih7XHJcbiAgICAgICAgICAgICAgICBsaWNlbnNlS2V5OiAnUUZuNlU3OFRNZnp3ekZhbXNpQmwnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy4vcGRmLXZpZXdlcicsIC8vIHBvaW50IHRvIHdoZXJlIHRoZSBmaWxlcyB5b3UgY29waWVkIGFyZSBzZXJ2ZWQgZnJvbVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbERvYzogYC4vcGRmcy8ke2xldmVsLnRvVXBwZXJDYXNlKCl9LSR7c3ViamVjdH0vJHt5ZWFyfS8ke3Nlc3Npb24gPT0gJ3MnID8gJ01heS1KdW4nIDogc2Vzc2lvbiA9PSAndycgPyAnT2N0LU5vdicgOiAnRmViLU1hcid9LyR7c3ViamVjdENvZGVbYCR7bGV2ZWwudG9VcHBlckNhc2UoKX0ke3N1YmplY3R9YF19XyR7c2Vzc2lvbn0ke051bWJlcih5ZWFyKSAtIDIwMDB9X3FwXyR7c3ViamVjdCA9PSAnRWNvbm9taWNzJyA/IDEgOiBsZXZlbCA9PSAnYWwnID8gMSA6IDJ9JHtOdW1iZXIodmFyaWFudCkgKyAxfS5wZGZgIC8vIHBhdGggdG8geW91ciBkb2N1bWVudFxyXG4gICAgICAgICAgICB9LCBwZGZWaWV3ZXIpLnRoZW4oKGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5VSS5zZXRUaGVtZSgnZGFyaycpO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuVUkuZGlzYWJsZUVsZW1lbnRzKFsndG9vbGJhckdyb3VwLUZpbGxBbmRTaWduJywgJ3RoZW1lQ2hhbmdlQnV0dG9uJywgJ2xhbmd1YWdlQnV0dG9uJywgJ3RvZ2dsZU5vdGVzQnV0dG9uJywgJ3N0aWNreVRvb2xHcm91cEJ1dHRvbicsICd0b29sYmFyR3JvdXAtSW5zZXJ0JywgJ3N0aWNreVRvb2xCdXR0b24nLCAncG9seWdvbkNsb3VkVG9vbEdyb3VwQnV0dG9uJywgJ3ByaW50QnV0dG9uJ10pO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuZW5hYmxlRmVhdHVyZXMoW2luc3RhbmNlLkZlYXR1cmUuRG93bmxvYWRdKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHBkZlZpZXdPcGVuZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQocGRmVmlld2VyKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBkZlZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYtdmlld2VyJylcclxuICAgICAgICAgICAgcGRmVmlld2VyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtdmlld2VyJylcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc3dpdGNoVG9QZGYpXHJcblxyXG4gICAgcmV0dXJuIG1lbnVcclxufVxyXG5cclxuLy8gYXBwZW5kaW5nIGhvbWUgdG8gbWFpblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxyXG5tYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVNZW51KCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
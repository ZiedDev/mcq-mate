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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\n\nSyntaxError\n\n(169:5) D:\\Projects\\repos\\mcq-mate\\src\\css\\style.css Unclosed block\n\n \u001b[90m 167 | \u001b[39m    \u001b[33m}\u001b[39m\n \u001b[90m 168 | \u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 169 | \u001b[39m    \u001b[33m.top-bar\u001b[39m \u001b[33m.bar\u001b[39m \u001b[33m.path-icon-container\u001b[39m svg \u001b[33m{\u001b[39m\n \u001b[90m     | \u001b[39m    \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 170 | \u001b[39m        \u001b[33m.top-bar\u001b[39m \u001b[33m.bar\u001b[39m \u001b[33m.path-icon-container\u001b[39m \u001b[33m.path-icon\u001b[39m \u001b[33m{\u001b[39m\n \u001b[90m 171 | \u001b[39m            width\u001b[33m:\u001b[39m 100%\u001b[33m;\u001b[39m\n");

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


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

function generateMainButton(level, subject, year, session, variant) {
    const elementContainer = document.createElement('div')
    elementContainer.classList.add('card-container')
    elementContainer.id = variant == undefined ? session == undefined ? year == undefined ? `${level}-${subject}-card-container` : `${level}-${subject}-${year}-card-container` : `${level}-${subject}-${year}-${session}-card-container` : `${level}-${subject}-${year}-${session}-${variant}-card-container`

    const element = document.createElement('div')
    element.classList.add('card')
    element.id = variant == undefined ? session == undefined ? year == undefined ? `${level}-${subject}-card` : `${level}-${subject}-${year}-card` : `${level}-${subject}-${year}-${session}-card` : `${level}-${subject}-${year}-${session}-${variant}-card`

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')
    const image = document.createElement('img')
    image.src = images[`${level}_${subject.toLowerCase()}`]
    imageContainer.appendChild(image)
    element.appendChild(imageContainer)

    const title = document.createElement('div')
    title.textContent = variant == undefined ? session == undefined ? year == undefined ? subject == 'Combined' ? 'Combined Science' : subject : year : (session == 'm' ? 'Feb / Mar' : session == 's' ? 'May / Jun' : 'Oct / Nov') : `Variant ${Number(variant) + 1}`
    title.classList.add('card-title')
    element.appendChild(title)

    elementContainer.appendChild(element)

    return elementContainer
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

/***/ "./src/media/images/al_biology.jpg":
/*!*****************************************!*\
  !*** ./src/media/images/al_biology.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "615bc06e21a5b863a82e.jpg";

/***/ }),

/***/ "./src/media/images/al_chemistry.jpg":
/*!*******************************************!*\
  !*** ./src/media/images/al_chemistry.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eee47c385ae13c8ffe6e.jpg";

/***/ }),

/***/ "./src/media/images/al_physics.jpg":
/*!*****************************************!*\
  !*** ./src/media/images/al_physics.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6eb0b99c52ea45bbf714.jpg";

/***/ }),

/***/ "./src/media/images/ol_biology.jpg":
/*!*****************************************!*\
  !*** ./src/media/images/ol_biology.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "77c1ad1dcb4c286fd379.jpg";

/***/ }),

/***/ "./src/media/images/ol_chemistry.jpg":
/*!*******************************************!*\
  !*** ./src/media/images/ol_chemistry.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "75681d1e770412e40743.jpg";

/***/ }),

/***/ "./src/media/images/ol_combined.png":
/*!******************************************!*\
  !*** ./src/media/images/ol_combined.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1b9107ee1659d5ecc7a7.png";

/***/ }),

/***/ "./src/media/images/ol_economics.png":
/*!*******************************************!*\
  !*** ./src/media/images/ol_economics.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a93c571be2566376463c.png";

/***/ }),

/***/ "./src/media/images/ol_physics.jpg":
/*!*****************************************!*\
  !*** ./src/media/images/ol_physics.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "024c2dde81d3b2f1c611.jpg";

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
    updatePathElement(true)
    updatePathIcon()
}

function changePath(new_path) {
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
            path.appendChild(createPathElement(`Variant ${Number(pathText[4]) + 1}`))
            main.appendChild(createBubbleSheetMenu(pathText[0], pathText[1], pathText[2], pathText[3], pathText[4]))
        } else if (pathText.length == 4) {
            path.innerHTML = ''
            path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true))
            path.appendChild(createPathElement(pathText[2]))
            path.appendChild(createPathElement(pathText[3] == 'm' ? 'Feb / Mar' : pathText[3] == 's' ? 'May / Jun' : 'Oct / Nov'))
            main.appendChild(CreateSubMenu(pathText[0], pathText[1], pathText[2], pathText[3]))
        } else if (pathText.length == 3) {
            path.innerHTML = ''
            path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true))
            path.appendChild(createPathElement(pathText[2]))
            main.appendChild(CreateSubMenu(pathText[0], pathText[1], pathText[2]))
        } else if (pathText.length == 2) {
            path.innerHTML = ''
            path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`, true))
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
    if (isBackwardAvailable()) {
        navConfirm(() => { backwardPath() })
    }
})
moveForwardsArrow.addEventListener('click', () => {
    if (isForwardAvailable()) {
        navConfirm(() => { forwardPath() })
    }
    if (isForwardAvailable()) {
        navConfirm(() => { forwardPath() })
    }
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

function createPathElement(title, first) {
    const element = document.createElement('div')

    const pathElement = document.createElement('div')
    pathElement.textContent = title

    if (!first) {
        const arrowElement = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowElement.classList.add('side-button-arrow'); arrowElement.setAttribute('width', '32'); arrowElement.setAttribute('height', '32'); arrowElement.setAttribute('viewBox', '0 0 256 256'); arrowElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowElement.innerHTML = '                    <path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17" />'
        element.appendChild(arrowElement)
    }

    element.appendChild(pathElement)

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
            main.appendChild(createHomeMenu())
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
                                inExam = true
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
                                inExam = true
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
                    const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('ol', subject, year)
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
                    const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('ol', subject, year, session)
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
                    const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('ol', subject, year, session, variant)
                    createRotatingCard(variantElement)
                    variantElement.addEventListener('click', () => {
                        navConfirm(() => {
                            inExam = true
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
                    const yearElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('al', subject, year)
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
                    const sessionElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('al', subject, year, session)
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
                    const variantElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateMainButton)('al', subject, year, session, variant)
                    createRotatingCard(variantElement)
                    variantElement.addEventListener('click', () => {
                        navConfirm(() => {
                            inExam = true
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

    const title = document.createElement('div')
    title.classList.add('bubble-sheet-title')
    title.id = 'bubble-sheet-title'
    title.textContent = 'Everything is set. Now you can start solving.'
    menu.appendChild(title)

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
                instance.UI.disableElements(['toolbarGroup-FillAndSign', 'themeChangeButton', 'languageButton', 'toggleNotesButton', 'stickyToolGroupButton', 'toolbarGroup-Insert', 'stickyToolButton', 'polygonCloudToolGroupButton']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0ZBQW9GLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBUztBQUNyQjtBQUNBO0FBQ0Esc0NBQXNDLG9CQUFvQixHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsb0VBQW9FLEdBQUcsZUFBZSxvQkFBb0IsRUFBRSxRQUFRLEdBQUcsR0FBRyxRQUFRLEVBQUUsb0JBQW9CLE1BQU0sbURBQW1ELEVBQUUsb0JBQW9CO0FBQ3ZULGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9AcGRmdHJvbi9wZGZqcy1leHByZXNzL3dlYnZpZXdlci5taW4uanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL3NyYy9jc3MvbW9kYWwuY3NzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2Nzcy9tb2RhbC5jc3M/ZjM4MSIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2pzL2dlbmVyYXRlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL3NyYy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2pzL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIG49dCgpO2Zvcih2YXIgbyBpbiBuKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW29dPW5bb119fSh3aW5kb3csKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4obyl7aWYodFtvXSlyZXR1cm4gdFtvXS5leHBvcnRzO3ZhciBpPXRbb109e2k6byxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW29dLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLG4pLGkubD0hMCxpLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQsbyl7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om99KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbz1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihvKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIGkgaW4gZSluLmQobyxpLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsaSkpO3JldHVybiBvfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiL1wiLG4obi5zPTEpfShbZnVuY3Rpb24oZSx0KXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufSxmdW5jdGlvbihlLHQsbil7bigyKSxlLmV4cG9ydHM9big2KX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihvLGkpe3ZhciByLGE7ZnVuY3Rpb24gcyhlKXtyZXR1cm4ocz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9IWZ1bmN0aW9uKG8saSl7XCJvYmplY3RcIj09cyh0KSYmdm9pZCAwIT09ZT9pKCk6dm9pZCAwPT09KGE9XCJmdW5jdGlvblwiPT10eXBlb2Yocj1pKT9yLmNhbGwodCxuLHQsZSk6cil8fChlLmV4cG9ydHM9YSl9KDAsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBufSkpfSksKGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiB0LnJlamVjdChuKX0pKX0pKX1mdW5jdGlvbiB0KCl7fWZ1bmN0aW9uIG4oZSl7aWYoISh0aGlzIGluc3RhbmNlb2YgbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLl9zdGF0ZT0wLHRoaXMuX2hhbmRsZWQ9ITEsdGhpcy5fdmFsdWU9dm9pZCAwLHRoaXMuX2RlZmVycmVkcz1bXSxkKGUsdGhpcyl9ZnVuY3Rpb24gcihlLHQpe2Zvcig7Mz09PWUuX3N0YXRlOyllPWUuX3ZhbHVlOzAhPT1lLl9zdGF0ZT8oZS5faGFuZGxlZD0hMCxuLl9pbW1lZGlhdGVGbigoZnVuY3Rpb24oKXt2YXIgbj0xPT09ZS5fc3RhdGU/dC5vbkZ1bGZpbGxlZDp0Lm9uUmVqZWN0ZWQ7aWYobnVsbCE9PW4pe3ZhciBvO3RyeXtvPW4oZS5fdmFsdWUpfWNhdGNoKGUpe3JldHVybiB2b2lkIGModC5wcm9taXNlLGUpfWEodC5wcm9taXNlLG8pfWVsc2UoMT09PWUuX3N0YXRlP2E6YykodC5wcm9taXNlLGUuX3ZhbHVlKX0pKSk6ZS5fZGVmZXJyZWRzLnB1c2godCl9ZnVuY3Rpb24gYShlLHQpe3RyeXtpZih0PT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7aWYodCYmKFwib2JqZWN0XCI9PXModCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpKXt2YXIgbz10LnRoZW47aWYodCBpbnN0YW5jZW9mIG4pcmV0dXJuIGUuX3N0YXRlPTMsZS5fdmFsdWU9dCx2b2lkIGwoZSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbylyZXR1cm4gdm9pZCBkKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fShvLHQpLGUpfWUuX3N0YXRlPTEsZS5fdmFsdWU9dCxsKGUpfWNhdGNoKHQpe2MoZSx0KX19ZnVuY3Rpb24gYyhlLHQpe2UuX3N0YXRlPTIsZS5fdmFsdWU9dCxsKGUpfWZ1bmN0aW9uIGwoZSl7Mj09PWUuX3N0YXRlJiYwPT09ZS5fZGVmZXJyZWRzLmxlbmd0aCYmbi5faW1tZWRpYXRlRm4oKGZ1bmN0aW9uKCl7ZS5faGFuZGxlZHx8bi5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oZS5fdmFsdWUpfSkpO2Zvcih2YXIgdD0wLG89ZS5fZGVmZXJyZWRzLmxlbmd0aDtvPnQ7dCsrKXIoZSxlLl9kZWZlcnJlZHNbdF0pO2UuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIGQoZSx0KXt2YXIgbj0hMTt0cnl7ZSgoZnVuY3Rpb24oZSl7bnx8KG49ITAsYSh0LGUpKX0pLChmdW5jdGlvbihlKXtufHwobj0hMCxjKHQsZSkpfSkpfWNhdGNoKGUpe2lmKG4pcmV0dXJuO249ITAsYyh0LGUpfX12YXIgdT1zZXRUaW1lb3V0O24ucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4obnVsbCxlKX0sbi5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlLG4pe3ZhciBvPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHQpO3JldHVybiByKHRoaXMsbmV3IGZ1bmN0aW9uKGUsdCxuKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6bnVsbCx0aGlzLnByb21pc2U9bn0oZSxuLG8pKSxvfSxuLnByb3RvdHlwZS5maW5hbGx5PWUsbi5hbGw9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBuKChmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIG8oZSxhKXt0cnl7aWYoYSYmKFwib2JqZWN0XCI9PXMoYSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpKXt2YXIgYz1hLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYylyZXR1cm4gdm9pZCBjLmNhbGwoYSwoZnVuY3Rpb24odCl7byhlLHQpfSksbil9aVtlXT1hLDA9PS0tciYmdChpKX1jYXRjaChlKXtuKGUpfX1pZighZXx8dm9pZCAwPT09ZS5sZW5ndGgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXlcIik7dmFyIGk9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSk7aWYoMD09PWkubGVuZ3RoKXJldHVybiB0KFtdKTtmb3IodmFyIHI9aS5sZW5ndGgsYT0wO2kubGVuZ3RoPmE7YSsrKW8oYSxpW2FdKX0pKX0sbi5yZXNvbHZlPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZcIm9iamVjdFwiPT1zKGUpJiZlLmNvbnN0cnVjdG9yPT09bj9lOm5ldyBuKChmdW5jdGlvbih0KXt0KGUpfSkpfSxuLnJlamVjdD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IG4oKGZ1bmN0aW9uKHQsbil7bihlKX0pKX0sbi5yYWNlPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgbigoZnVuY3Rpb24odCxuKXtmb3IodmFyIG89MCxpPWUubGVuZ3RoO2k+bztvKyspZVtvXS50aGVuKHQsbil9KSl9LG4uX2ltbWVkaWF0ZUZuPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJmZ1bmN0aW9uKGUpe28oZSl9fHxmdW5jdGlvbihlKXt1KGUsMCl9LG4uX3VuaGFuZGxlZFJlamVjdGlvbkZuPWZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWNvbnNvbGUmJmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIixlKX07dmFyIGY9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZilyZXR1cm4gc2VsZjtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXJldHVybiB3aW5kb3c7aWYodm9pZCAwIT09aSlyZXR1cm4gaTt0aHJvdyBFcnJvcihcInVuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdFwiKX0oKTtcIlByb21pc2VcImluIGY/Zi5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5fHwoZi5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5PWUpOmYuUHJvbWlzZT1ufSkpfSkuY2FsbCh0aGlzLG4oMykuc2V0SW1tZWRpYXRlLG4oMCkpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUpe3ZhciBvPXZvaWQgMCE9PWUmJmV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmfHx3aW5kb3csaT1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7ZnVuY3Rpb24gcihlLHQpe3RoaXMuX2lkPWUsdGhpcy5fY2xlYXJGbj10fXQuc2V0VGltZW91dD1mdW5jdGlvbigpe3JldHVybiBuZXcgcihpLmNhbGwoc2V0VGltZW91dCxvLGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sdC5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgcihpLmNhbGwoc2V0SW50ZXJ2YWwsbyxhcmd1bWVudHMpLGNsZWFySW50ZXJ2YWwpfSx0LmNsZWFyVGltZW91dD10LmNsZWFySW50ZXJ2YWw9ZnVuY3Rpb24oZSl7ZSYmZS5jbG9zZSgpfSxyLnByb3RvdHlwZS51bnJlZj1yLnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24oKXt9LHIucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJGbi5jYWxsKG8sdGhpcy5faWQpfSx0LmVucm9sbD1mdW5jdGlvbihlLHQpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD10fSx0LnVuZW5yb2xsPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD0tMX0sdC5fdW5yZWZBY3RpdmU9dC5hY3RpdmU9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpO3ZhciB0PWUuX2lkbGVUaW1lb3V0O3Q+PTAmJihlLl9pZGxlVGltZW91dElkPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS5fb25UaW1lb3V0JiZlLl9vblRpbWVvdXQoKX0pLHQpKX0sbig0KSx0LnNldEltbWVkaWF0ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5zZXRJbW1lZGlhdGV8fHZvaWQgMCE9PWUmJmUuc2V0SW1tZWRpYXRlfHx0aGlzJiZ0aGlzLnNldEltbWVkaWF0ZSx0LmNsZWFySW1tZWRpYXRlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLmNsZWFySW1tZWRpYXRlfHx2b2lkIDAhPT1lJiZlLmNsZWFySW1tZWRpYXRlfHx0aGlzJiZ0aGlzLmNsZWFySW1tZWRpYXRlfSkuY2FsbCh0aGlzLG4oMCkpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUsbil7XCJ1c2Ugc3RyaWN0XCI7aWYoIWUuc2V0SW1tZWRpYXRlKXt2YXIgbyxpLHIsYSxzLGM9MSxsPXt9LGQ9ITEsdT1lLmRvY3VtZW50LGY9T2JqZWN0LmdldFByb3RvdHlwZU9mJiZPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk7Zj1mJiZmLnNldFRpbWVvdXQ/ZjplLFwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChlLnByb2Nlc3MpP289ZnVuY3Rpb24oZSl7dC5uZXh0VGljaygoZnVuY3Rpb24oKXtoKGUpfSkpfTohZnVuY3Rpb24oKXtpZihlLnBvc3RNZXNzYWdlJiYhZS5pbXBvcnRTY3JpcHRzKXt2YXIgdD0hMCxuPWUub25tZXNzYWdlO3JldHVybiBlLm9ubWVzc2FnZT1mdW5jdGlvbigpe3Q9ITF9LGUucG9zdE1lc3NhZ2UoXCJcIixcIipcIiksZS5vbm1lc3NhZ2U9bix0fX0oKT9lLk1lc3NhZ2VDaGFubmVsPygocj1uZXcgTWVzc2FnZUNoYW5uZWwpLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbihlKXtoKGUuZGF0YSl9LG89ZnVuY3Rpb24oZSl7ci5wb3J0Mi5wb3N0TWVzc2FnZShlKX0pOnUmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiB1LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/KGk9dS5kb2N1bWVudEVsZW1lbnQsbz1mdW5jdGlvbihlKXt2YXIgdD11LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7dC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtoKGUpLHQub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsaS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9LGkuYXBwZW5kQ2hpbGQodCl9KTpvPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoaCwwLGUpfTooYT1cInNldEltbWVkaWF0ZSRcIitNYXRoLnJhbmRvbSgpK1wiJFwiLHM9ZnVuY3Rpb24odCl7dC5zb3VyY2U9PT1lJiZcInN0cmluZ1wiPT10eXBlb2YgdC5kYXRhJiYwPT09dC5kYXRhLmluZGV4T2YoYSkmJmgoK3QuZGF0YS5zbGljZShhLmxlbmd0aCkpfSxlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHMsITEpOmUuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixzKSxvPWZ1bmN0aW9uKHQpe2UucG9zdE1lc3NhZ2UoYSt0LFwiKlwiKX0pLGYuc2V0SW1tZWRpYXRlPWZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJihlPW5ldyBGdW5jdGlvbihcIlwiK2UpKTtmb3IodmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSksbj0wO248dC5sZW5ndGg7bisrKXRbbl09YXJndW1lbnRzW24rMV07dmFyIGk9e2NhbGxiYWNrOmUsYXJnczp0fTtyZXR1cm4gbFtjXT1pLG8oYyksYysrfSxmLmNsZWFySW1tZWRpYXRlPXB9ZnVuY3Rpb24gcChlKXtkZWxldGUgbFtlXX1mdW5jdGlvbiBoKGUpe2lmKGQpc2V0VGltZW91dChoLDAsZSk7ZWxzZXt2YXIgdD1sW2VdO2lmKHQpe2Q9ITA7dHJ5eyFmdW5jdGlvbihlKXt2YXIgdD1lLmNhbGxiYWNrLG49ZS5hcmdzO3N3aXRjaChuLmxlbmd0aCl7Y2FzZSAwOnQoKTticmVhaztjYXNlIDE6dChuWzBdKTticmVhaztjYXNlIDI6dChuWzBdLG5bMV0pO2JyZWFrO2Nhc2UgMzp0KG5bMF0sblsxXSxuWzJdKTticmVhaztkZWZhdWx0OnQuYXBwbHkodm9pZCAwLG4pfX0odCl9ZmluYWxseXtwKGUpLGQ9ITF9fX19fShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj92b2lkIDA9PT1lP3RoaXM6ZTpzZWxmKX0pLmNhbGwodGhpcyxuKDApLG4oNSkpfSxmdW5jdGlvbihlLHQpe3ZhciBuLG8saT1lLmV4cG9ydHM9e307ZnVuY3Rpb24gcigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gYSgpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBzKGUpe2lmKG49PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KGUsMCk7aWYoKG49PT1yfHwhbikmJnNldFRpbWVvdXQpcmV0dXJuIG49c2V0VGltZW91dCxzZXRUaW1lb3V0KGUsMCk7dHJ5e3JldHVybiBuKGUsMCl9Y2F0Y2godCl7dHJ5e3JldHVybiBuLmNhbGwobnVsbCxlLDApfWNhdGNoKHQpe3JldHVybiBuLmNhbGwodGhpcyxlLDApfX19IWZ1bmN0aW9uKCl7dHJ5e249XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnJ9Y2F0Y2goZSl7bj1yfXRyeXtvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6YX1jYXRjaChlKXtvPWF9fSgpO3ZhciBjLGw9W10sZD0hMSx1PS0xO2Z1bmN0aW9uIGYoKXtkJiZjJiYoZD0hMSxjLmxlbmd0aD9sPWMuY29uY2F0KGwpOnU9LTEsbC5sZW5ndGgmJnAoKSl9ZnVuY3Rpb24gcCgpe2lmKCFkKXt2YXIgZT1zKGYpO2Q9ITA7Zm9yKHZhciB0PWwubGVuZ3RoO3Q7KXtmb3IoYz1sLGw9W107Kyt1PHQ7KWMmJmNbdV0ucnVuKCk7dT0tMSx0PWwubGVuZ3RofWM9bnVsbCxkPSExLGZ1bmN0aW9uKGUpe2lmKG89PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dChlKTtpZigobz09PWF8fCFvKSYmY2xlYXJUaW1lb3V0KXJldHVybiBvPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQoZSk7dHJ5e28oZSl9Y2F0Y2godCl7dHJ5e3JldHVybiBvLmNhbGwobnVsbCxlKX1jYXRjaCh0KXtyZXR1cm4gby5jYWxsKHRoaXMsZSl9fX0oZSl9fWZ1bmN0aW9uIGgoZSx0KXt0aGlzLmZ1bj1lLHRoaXMuYXJyYXk9dH1mdW5jdGlvbiBtKCl7fWkubmV4dFRpY2s9ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdFtuLTFdPWFyZ3VtZW50c1tuXTtsLnB1c2gobmV3IGgoZSx0KSksMSE9PWwubGVuZ3RofHxkfHxzKHApfSxoLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxpLnRpdGxlPVwiYnJvd3NlclwiLGkuYnJvd3Nlcj0hMCxpLmVudj17fSxpLmFyZ3Y9W10saS52ZXJzaW9uPVwiXCIsaS52ZXJzaW9ucz17fSxpLm9uPW0saS5hZGRMaXN0ZW5lcj1tLGkub25jZT1tLGkub2ZmPW0saS5yZW1vdmVMaXN0ZW5lcj1tLGkucmVtb3ZlQWxsTGlzdGVuZXJzPW0saS5lbWl0PW0saS5wcmVwZW5kTGlzdGVuZXI9bSxpLnByZXBlbmRPbmNlTGlzdGVuZXI9bSxpLmxpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm5bXX0saS5iaW5kaW5nPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxpLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxpLmNoZGlyPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0saS51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24ucih0KSxuLmQodCxcImdldEluc3RhbmNlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHd9KSk7dmFyIG89e0FTTTpcImFzbVwiLFdBU006XCJlbXNcIixKU19XT1JLRVI6XCJqc3dvcmtlclwiLFRIUkVBREVEX1dBU006XCJ3YXNtLXRocmVhZHNcIn07ZnVuY3Rpb24gaShlLHQpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhdClyZXR1cm4gZTt2YXIgbj10LnN1YnN0cigwLHQubGFzdEluZGV4T2YoXCIvXCIpKTtyZXR1cm4vXihcXC98JTJGfFthLXowLTktXSs6KS9pLnRlc3QoZSk/ZTpuK1wiL1wiK2V9ZnVuY3Rpb24gcihlLHQpe3ZhciBuPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG89by5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksbi5wdXNoLmFwcGx5KG4sbyl9cmV0dXJuIG59ZnVuY3Rpb24gYShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9yKE9iamVjdChuKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7cyhlLHQsblt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhuKSk6cihPYmplY3QobikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBzKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX12YXIgYz17fSxsPTA7d2luZG93LmlzUGRmanM9ITAsXCJ1bmRlZmluZWRcIj09dHlwZW9mIGNvbnNvbGUmJih3aW5kb3cuY29uc29sZT17bG9nOmZ1bmN0aW9uKCl7fSx3YXJuOmZ1bmN0aW9uKCl7fSxlcnJvcjpmdW5jdGlvbigpe319KTt2YXIgZD1mdW5jdGlvbigpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspZm9yKHZhciB0PU9iamVjdC5rZXlzKGFyZ3VtZW50c1tlXSksbj0wO248dC5sZW5ndGg7bisrKWFyZ3VtZW50c1swXVt0W25dXT1hcmd1bWVudHNbZV1bdFtuXV07cmV0dXJuIGFyZ3VtZW50c1swXX0sdT1mdW5jdGlvbihlKXt2YXIgdD1bXTtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihlKXt0LnB1c2goZSl9KSksdH0sZj1mdW5jdGlvbihlLHQpe3ZhciBuO3RyeXtuPW5ldyBDdXN0b21FdmVudChlLHtkZXRhaWw6dCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KX1jYXRjaChvKXsobj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpKS5pbml0RXZlbnQoZSwhMCwhMCksbi5kZXRhaWw9dH1yZXR1cm4gbn07d2luZG93LlBERk5ldCYmIWMuc2tpcFBERk5ldFdlYlZpZXdlcldhcm5pbmcmJmNvbnNvbGUud2FybihcIlBERk5ldC5qcyBhbmQgV2ViVmlld2VyLmpzIGhhdmUgYmVlbiBpbmNsdWRlZCBpbiB0aGUgc2FtZSBjb250ZXh0LiBTZWUgaHR0cHM6Ly93d3cucGRmdHJvbi5jb20va2Jfc2FtZV9jb250ZXh0IGZvciBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBjb3VsZCBiZSBhbiBlcnJvciBpbiB5b3VyIGFwcGxpY2F0aW9uLlwiKTt2YXIgcD1uZXcgTWFwLGg9bmV3IE1hcDtjLldlYlZpZXdlcj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7aWYoaC5nZXQodCkpdGhyb3cgbmV3IEVycm9yKFwiVHdvIGluc3RhbmNlcyBvZiBXZWJWaWV3ZXIgd2VyZSBjcmVhdGVkIG9uIHRoZSBzYW1lIEhUTUwgZWxlbWVudC4gUGxlYXNlIGNyZWF0ZSBhIG5ldyBlbGVtZW50IGZvciBlYWNoIGluc3RhbmNlIG9mIFdlYlZpZXdlclwiKTtoLnNldCh0LCEwKTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLChmdW5jdGlvbiBlKCl7cC5nZXQodCkuaW5zdGFuY2U9bi5nZXRDb21wbGV0ZUluc3RhbmNlKCksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlcIixlKX0pKSx0aGlzLl92YWxpZGF0ZU9wdGlvbnMoZSk7dmFyIG89ZS53ZWJ2aWV3ZXJTZXJ2ZXJVUkx8fGUucGRmdHJvblNlcnZlcjtlLmZ1bGxBUEkmJm8mJihlLmZvcmNlQ2xpZW50U2lkZUluaXR8fGNvbnNvbGUud2FybihcIlRoZSBmdWxsQVBJIGFuZCB3ZWJ2aWV3ZXJTZXJ2ZXJVUkwgb3B0aW9ucyBoYXZlIGJvdGggYmVlbiBzZXQgc28gdGhlIGZvcmNlQ2xpZW50U2lkZUluaXQgb3B0aW9uIGlzIG5vdyBlbmFibGVkLiBUaGlzIG1lYW5zIHRoYXQgV2ViVmlld2VyIHdpbGwgc3dpdGNoIHRvIGNsaWVudCBzaWRlIHJlbmRlcmluZyBhbmQgcHJvY2Vzc2luZyB0byBhbGxvdyB1c2Ugb2YgdGhlIGZ1bGwgQVBJLlwiKSxlLmZvcmNlQ2xpZW50U2lkZUluaXQ9ITApLHRoaXMub3B0aW9ucz1kKHt9LGMuV2ViVmlld2VyLk9wdGlvbnMsZSk7dmFyIGk9dGhpcy5vcHRpb25zLnBhdGgubGVuZ3RoLTE7aT4wJiZcIi9cIiE9PXRoaXMub3B0aW9ucy5wYXRoW2ldJiYodGhpcy5vcHRpb25zLnBhdGgrPVwiL1wiKSx0aGlzLm9wdGlvbnMudWlQYXRoPXRoaXMub3B0aW9ucy5wYXRoK3RoaXMub3B0aW9ucy51aVBhdGgsdHx8Y29uc29sZS5lcnJvcihcIlZpZXdlckVsZW1lbnQgaXMgbm90IGRlZmluZWQuIFRoaXMgbWF5IGJlIGNhdXNlZCBieSBjYWxsaW5nIHRoZSBXZWJWaWV3ZXIgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBET00gaXMgbG9hZGVkLCBvciBhbiBpbnZhbGlkIHNlbGVjdG9yLiBQbGVhc2Ugc2VlIGh0dHA6Ly9yLnBkZnRyb24uY29tL2d1aWRlcy9xdWljay1zdGFydCBmb3IgYW4gZXhhbXBsZS5cIiksdGhpcy5lbGVtZW50PXQsdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7dmFyIHI9dGhpczt0aGlzLm1lc3NhZ2VIYW5kbGVyPWZ1bmN0aW9uKHQpe2lmKFwicmVxdWVzdGxcIj09PXQuZGF0YSYmdC5zb3VyY2UmJnQuc291cmNlLnBvc3RNZXNzYWdlKHt0eXBlOlwicmVzcG9uc2VsXCIsdmFsdWU6ZS5sfHxlLmxpY2Vuc2VLZXl9LFwiKlwiKSxcInJlcXVlc3RDb25maWdcIj09PXQuZGF0YS50eXBlJiZ0LmRhdGEuaWQ9PT1yLmlkJiZ0LnNvdXJjZSl7dmFyIG49ZS5jb25maWc/ci5fY29ycmVjdFJlbGF0aXZlUGF0aChlLmNvbmZpZyk6XCJcIjt0LnNvdXJjZS5wb3N0TWVzc2FnZSh7dHlwZTpcInJlc3BvbnNlQ29uZmlnXCIsdmFsdWU6bn0sXCIqXCIpfX0sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdGhpcy5tZXNzYWdlSGFuZGxlciwhMSksdGhpcy5vcHRpb25zLmF1dG9DcmVhdGUmJnRoaXMuY3JlYXRlKCl9O3ZhciBtPXtsaWNlbnNlS2V5OnZvaWQgMCxlbmFibGVBenVyZVdvcmthcm91bmQ6ITEsaXNBZG1pblVzZXI6ITEsaXNSZWFkT25seTohMX07Yy5XZWJWaWV3ZXIucHJvdG90eXBlPXt2ZXJzaW9uOlwiOC43LjRcIixjcmVhdGU6ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyl7dmFyIGU9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aCh0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyk7ZT1lbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZSkpLHRoaXMub3B0aW9ucy5pbml0aWFsRG9jPWV9dGhpcy5fY3JlYXRlKCl9LF9jcmVhdGU6ZnVuY3Rpb24oKXt0aGlzLmlkPSsrbCx2b2lkIDA9PT10aGlzLl90cmlnZ2VyJiYodGhpcy5fdHJpZ2dlcj1mdW5jdGlvbihlLHQpe3ZhciBuPWYoZSx0KTt0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuKX0pO3ZhciBlPXRoaXMub3B0aW9ucy50eXBlLnJlcGxhY2UoXCIgXCIsXCJcIikuc3BsaXQoXCIsXCIpO2UubGVuZ3RoPDEmJihlWzBdPVwiaHRtbDVcIiksdGhpcy5fY3JlYXRlVmlld2VyKGUpfSxfdmFsaWRhdGVPcHRpb25zOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1PYmplY3Qua2V5cyhlKSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07byBpbiBkKHt9LG0sYy5XZWJWaWV3ZXIuT3B0aW9ucyl8fGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChvLFwiIGlzIG5vdCBhIHZhbGlkIG9wdGlvbiBuYW1lLiBTZWUgaHR0cDovL3IucGRmdHJvbi5jb20vYXBpL29wdGlvbnNfYW5jaG9yIGZvciBhbGwgYXZhaWxhYmxlIG9wdGlvbnMuXCIpKX12YXIgaT1lLndlYnZpZXdlclNlcnZlclVSTHx8ZS5wZGZ0cm9uU2VydmVyOyFlLmVuYWJsZVJlZGFjdGlvbnx8ZS5mdWxsQVBJfHxpfHxjb25zb2xlLndhcm4oXCJGdWxsQVBJIG9yIFdlYlZpZXdlciBTZXJ2ZXIgaXMgbmVlZGVkIHRvIGFwcGx5IHJlZGFjdGlvbnNcIil9LF9ub3RTdXBwb3J0ZWRNb2JpbGU6ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaWQ9XCJ3ZWJ2aWV3ZXItYnJvd3Nlci11bnN1cHBvcnRlZFwiLGUudGV4dENvbnRlbnQ9XCJQREYgZG9jdW1lbnQgdmlld2luZyBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci5cIix0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZSl9LF9jcmVhdGVWaWV3ZXI6ZnVuY3Rpb24oZSl7dmFyIHQsbj10aGlzO2lmKG4uc2VsZWN0ZWRUeXBlPW51bGwsdGhpcy5pc01vYmlsZURldmljZSgpKXtpZih0aGlzLm9wdGlvbnMuZG9jdW1lbnRUeXBlJiZcInhvZFwiIT09dGhpcy5vcHRpb25zLmRvY3VtZW50VHlwZSYmIXRoaXMuX3Rlc3RXZWJBc3NlbWJseSgpKXJldHVybiB2b2lkIHRoaXMuX25vdFN1cHBvcnRlZE1vYmlsZSgpO2lmKGU9QXJyYXkoXCJodG1sNU1vYmlsZVwiKSxuLnNlbGVjdGVkVHlwZT1cImh0bWw1TW9iaWxlXCIsdGhpcy5vcHRpb25zLm1vYmlsZVJlZGlyZWN0KXJldHVybiB0PXRoaXMub3B0aW9ucy51aVBhdGgrdGhpcy5fZ2V0SFRNTDVPcHRpb25zVVJMKCksdm9pZCh3aW5kb3cubG9jYXRpb249dCl9Zm9yKHZhciBvPSExLGk9ITEscj0wO3I8ZS5sZW5ndGg7cisrKXtpZihcImh0bWw1bW9iaWxlXCI9PT1lW3JdLnRvTG93ZXJDYXNlKCkpe2lmKHRoaXMub3B0aW9ucy5kb2N1bWVudFR5cGUmJlwieG9kXCIhPT10aGlzLm9wdGlvbnMuZG9jdW1lbnRUeXBlJiYhdGhpcy5fdGVzdFdlYkFzc2VtYmx5KCkpY29udGludWU7aWYobz0hMCxuLl90ZXN0SFRNTDUoKSl7aWYodGhpcy5vcHRpb25zLm1vYmlsZVJlZGlyZWN0KXJldHVybiBuLnNlbGVjdGVkVHlwZT1cImh0bWw1TW9iaWxlXCIsdD10aGlzLm9wdGlvbnMudWlQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLHZvaWQod2luZG93LmxvY2F0aW9uPXQpO2lmKHRoaXMub3B0aW9ucy54ZG9tYWluUHJveHlVcmx8fG4uaXNTYW1lT3JpZ2luKGRlY29kZVVSSUNvbXBvbmVudChuLm9wdGlvbnMuaW5pdGlhbERvYykpfHxuLl90ZXN0Q09SUygpKXtuLnNlbGVjdGVkVHlwZT1cImh0bWw1TW9iaWxlXCI7YnJlYWt9aT0hMH19aWYoXCJodG1sNVwiPT09ZVtyXS50b0xvd2VyQ2FzZSgpJiYobz0hMCxuLl90ZXN0SFRNTDUoKSkpe3ZhciBhPW4uaXNTYW1lT3JpZ2luKGRlY29kZVVSSUNvbXBvbmVudChuLm9wdGlvbnMuaW5pdGlhbERvYykpO2lmKHRoaXMub3B0aW9ucy54ZG9tYWluUHJveHlVcmx8fGF8fG4uX3Rlc3RDT1JTKCkpe24uc2VsZWN0ZWRUeXBlPVwiaHRtbDVcIjticmVha31pPSEwfX1pZihcImh0bWw1XCI9PT1uLnNlbGVjdGVkVHlwZSluLl9jcmVhdGVIVE1MNSgpO2Vsc2UgaWYoXCJodG1sNU1vYmlsZVwiPT09bi5zZWxlY3RlZFR5cGUpbi5fY3JlYXRlSFRNTDVNb2JpbGUoKTtlbHNle3ZhciBzO2lmKGk/cz1cIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzIG9yaWdpbiByZXF1ZXN0cy4gUGxlYXNlIGNvbmZpZ3VyZSB4ZG9tYWluIHRvIHN1cHBvcnQgQ09SUy5cIjpvJiYocz1cIlBsZWFzZSB1c2UgYW4gSFRNTDUgY29tcGF0aWJsZSBicm93c2VyLlwiKSxzKXt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2MuaWQ9XCJ3ZWJ2aWV3ZXItYnJvd3Nlci11bnN1cHBvcnRlZFwiLGMudGV4dENvbnRlbnQ9cyxuLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYyl9fX0sX3ZpZXdlckxvYWRlZDpmdW5jdGlvbihlKXt0aGlzLl90cmlnZ2VyKFwicmVhZHlcIik7dHJ5e3ZhciB0PWUuY29udGVudFdpbmRvdztpZih0LnBvc3RNZXNzYWdlKHt0eXBlOlwidmlld2VyTG9hZGVkXCJ9LFwiKlwiKSx2b2lkIDAhPT10aGlzLm9wdGlvbnMuZW5jcnlwdGlvbil7dmFyIG49ZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMub3B0aW9ucy5pbml0aWFsRG9jKTt0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyYmKG49SlNPTi5wYXJzZShuKSk7dmFyIG89e2RlY3J5cHQ6dC5Db3JlLkVuY3J5cHRpb24uZGVjcnlwdCxkZWNyeXB0T3B0aW9uczp0aGlzLm9wdGlvbnMuZW5jcnlwdGlvbixkb2N1bWVudElkOnRoaXMub3B0aW9ucy5kb2N1bWVudElkLGV4dGVuc2lvbjpcInhvZFwifTt0aGlzLmdldEluc3RhbmNlKCkubG9hZERvY3VtZW50KG4sbyl9fWNhdGNoKGUpe2NvbnNvbGUud2FybihcIlZpZXdlciBpcyBvbiBhIGRpZmZlcmVudCBkb21haW4sIHRoZSBwcm9taXNlIGZyb20gV2ViVmlld2VyIGZ1bmN0aW9uIGlzIHJlamVjdGVkIGFuZCBBUEkgZnVuY3Rpb25zIHdpbGwgbm90IHdvcmsgYmVjYXVzZSBvZiBjcm9zcyBkb21haW4gcGVybWlzc2lvbnMuIFNlZSBodHRwOi8vci5wZGZ0cm9uLmNvbS9rYl9jcm9zc19vcmlnaW4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpfX0sX2dldEhUTUw1T3B0aW9uc1VSTDpmdW5jdGlvbigpe3ZhciBlLHQsbixvPXRoaXMub3B0aW9ucyxpPW8ud2Vidmlld2VyU2VydmVyVVJMfHxvLnBkZnRyb25TZXJ2ZXIscj1cIlwiO2lmKG8uaW5pdGlhbERvYyYmKHIrPVwiI2Q9XCIuY29uY2F0KG8uaW5pdGlhbERvYykpLHZvaWQgMD09PW8uYmFja2VuZFR5cGUmJihvLmJhY2tlbmRUeXBlPW8ucGRmQmFja2VuZCksby5kb2N1bWVudFR5cGUmJlwieG9kXCI9PT1vLmRvY3VtZW50VHlwZSYmKGU9by5kb2N1bWVudFR5cGUpLG8ucHJlbG9hZFdvcmtlciYmXCJ4b2RcIj09PW8ucHJlbG9hZFdvcmtlciYmKGU9by5wcmVsb2FkV29ya2VyKSxvLmV4dGVuc2lvbiYmKGU9by5leHRlbnNpb24pLGUmJihyKz1cIiZleHRlbnNpb249XCIuY29uY2F0KGUpKSxvLmRvY3VtZW50VHlwZSYmXCJ4b2RcIiE9PW8uZG9jdW1lbnRUeXBlJiYodD1vLmRvY3VtZW50VHlwZSksby5wcmVsb2FkV29ya2VyJiZcInhvZFwiIT09by5wcmVsb2FkV29ya2VyJiYodD1vLnByZWxvYWRXb3JrZXIpLHQmJihyKz1cIiZwcmVsb2FkV29ya2VyPVwiLmNvbmNhdCh0KSksby5iYWNrZW5kVHlwZSYmKHIrPVwiJnBkZj1cIi5jb25jYXQoby5iYWNrZW5kVHlwZSxcIiZvZmZpY2U9XCIpLmNvbmNhdChvLmJhY2tlbmRUeXBlLFwiJmxlZ2FjeU9mZmljZT1cIikuY29uY2F0KG8uYmFja2VuZFR5cGUpKSxvLmZpbGVuYW1lJiYocis9XCImZmlsZW5hbWU9XCIuY29uY2F0KG8uZmlsZW5hbWUpKSx2b2lkIDAhPT1vLnN0cmVhbWluZyYmKHIrPVwiJnN0cmVhbWluZz1cIi5jb25jYXQoby5zdHJlYW1pbmcpKSxvLmV4dGVybmFsUGF0aCl7dmFyIGE9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aChvLmV4dGVybmFsUGF0aCk7YT1lbmNvZGVVUklDb21wb25lbnQoYSkscis9XCImcD1cIi5jb25jYXQoYSl9aWYoby5lbmNyeXB0aW9uJiYocis9XCImYXV0b19sb2FkPWZhbHNlXCIpLG8uZW5hYmxlQW5ub3RhdGlvbnMmJihyKz1cIiZhPTFcIiksby5kaXNhYmxlZEVsZW1lbnRzKXt2YXIgcz1lbmNvZGVVUklDb21wb25lbnQoby5kaXNhYmxlZEVsZW1lbnRzLmpvaW4oXCIsXCIpKTtyKz1cIiZkaXNhYmxlZEVsZW1lbnRzPVwiLmNvbmNhdChzKX1pZihvLnNlcnZlclVybCl7dmFyIGM9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aChvLnNlcnZlclVybCk7Yz1lbmNvZGVVUklDb21wb25lbnQoYykscis9XCImc2VydmVyX3VybD1cIi5jb25jYXQoYyl9aWYoby5zZXJ2ZXJVcmxIZWFkZXJzJiYocis9XCImc2VydmVyVXJsSGVhZGVycz1cIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoby5zZXJ2ZXJVcmxIZWFkZXJzKSkpLG8uZG9jdW1lbnRJZCYmKHIrPVwiJmRpZD1cIi5jb25jYXQoby5kb2N1bWVudElkKSksby5jc3Mpe3ZhciBsPXRoaXMuX2NvcnJlY3RSZWxhdGl2ZVBhdGgoby5jc3MpO2w9ZW5jb2RlVVJJQ29tcG9uZW50KGwpLHIrPVwiJmNzcz1cIi5jb25jYXQobCl9aWYoby5kaXNhYmxlSTE4biYmKHIrPVwiJmRpc2FibGVJMThuPTFcIiksby5lbmFibGVPZmZsaW5lTW9kZSYmKHIrPVwiJm9mZmxpbmU9MVwiKSxvLnN0YXJ0T2ZmbGluZSYmKHIrPVwiJnN0YXJ0T2ZmbGluZT0xXCIpLChvLmVuYWJsZVJlYWRPbmx5TW9kZXx8by5pc1JlYWRPbmx5KSYmKHIrPVwiJnJlYWRvbmx5PTFcIiksby5oaWRlQW5ub3RhdGlvblBhbmVsJiYocis9XCImaGlkZUFubm90YXRpb25QYW5lbD0xXCIpLG8uZGlzYWJsZVRvb2xHcm91cFJlb3JkZXJpbmcmJihyKz1cIiZkaXNhYmxlVG9vbEdyb3VwUmVvcmRlcmluZz0xXCIpLHZvaWQgMCE9PW8uYW5ub3RhdGlvblVzZXImJihyKz1cIiZ1c2VyPVwiLmNvbmNhdChvLmFubm90YXRpb25Vc2VyKSksdm9pZCAwPT09by5hbm5vdGF0aW9uQWRtaW4mJnZvaWQgMD09PW8uaXNBZG1pblVzZXJ8fChyKz1cIiZhZG1pbj1cIi5jb25jYXQoby5hbm5vdGF0aW9uQWRtaW58fG8uaXNBZG1pblVzZXI/MTowKSksdm9pZCAwIT09by5jdXN0b20mJihyKz1cIiZjdXN0b209XCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChvLmN1c3RvbSkpKSx2b2lkIDA9PT1vLnNob3dMb2NhbEZpbGVQaWNrZXImJnZvaWQgMD09PW8uZW5hYmxlRmlsZVBpY2tlcnx8KHIrPVwiJmZpbGVwaWNrZXI9XCIuY29uY2F0KG8uc2hvd0xvY2FsRmlsZVBpY2tlcnx8by5lbmFibGVGaWxlUGlja2VyPzE6MCkpLHZvaWQgMCE9PW8uZnVsbEFQSSl7aWYoby5mdWxsQVBJKXRocm93IG5ldyBFcnJvcignXCJmdWxsQVBJXCIgaXMgbm90IGEgdmFsaWQgY29uc3R1Y3RvciBvcHRpb24gZm9yIFBERi5qcyBFeHByZXNzLiBQbGVhc2UgbWFrZSBzdXJlIHlvdSBhcmUgcmVmZXJyaW5nIHRvIHRoZSBwcm9wZXIgZG9jdW1lbnRhdGlvbiAoaHR0cHM6Ly9wZGZqcy5leHByZXNzL2RvY3VtZW50YXRpb24pJyk7cis9XCImcGRmbmV0PVwiLmNvbmNhdChvLmZ1bGxBUEk/MTowKX0odm9pZCAwIT09by5lbmFibGVSZWRhY3Rpb24mJihyKz1cIiZlbmFibGVSZWRhY3Rpb249XCIuY29uY2F0KG8uZW5hYmxlUmVkYWN0aW9uPzE6MCkpLHZvaWQgMCE9PW8uZGlzYWJsZVZpcnR1YWxEaXNwbGF5TW9kZSYmKHIrPVwiJmRpc2FibGVWaXJ0dWFsRGlzcGxheU1vZGU9XCIuY29uY2F0KG8uZGlzYWJsZVZpcnR1YWxEaXNwbGF5TW9kZT8xOjApKSx2b2lkIDAhPT1vLmVuYWJsZU1lYXN1cmVtZW50JiYocis9XCImZW5hYmxlTWVhc3VyZW1lbnQ9XCIuY29uY2F0KG8uZW5hYmxlTWVhc3VyZW1lbnQ/MTowKSksdm9pZCAwIT09by5zaG93VG9vbGJhckNvbnRyb2wmJihyKz1cIiZ0b29sYmFyPVwiLmNvbmNhdChvLnNob3dUb29sYmFyQ29udHJvbD9cInRydWVcIjpcImZhbHNlXCIpKSx2b2lkIDAhPT1vLnNob3dQYWdlSGlzdG9yeUJ1dHRvbnMmJihyKz1cIiZwYWdlSGlzdG9yeT1cIi5jb25jYXQoby5zaG93UGFnZUhpc3RvcnlCdXR0b25zPzE6MCkpLHZvaWQgMCE9PW8ubm90ZXNJbkxlZnRQYW5lbCYmKHIrPVwiJm5vdGVzSW5MZWZ0UGFuZWw9XCIuY29uY2F0KG8ubm90ZXNJbkxlZnRQYW5lbD8xOjApKSx2b2lkIDAhPT1vLnhkb21haW5Qcm94eVVybCkmJihuPVwic3RyaW5nXCI9PXR5cGVvZiBvLnhkb21haW5Qcm94eVVybD97dXJsOm8ueGRvbWFpblByb3h5VXJsfTpvLnhkb21haW5Qcm94eVVybCxyKz1cIiZ4ZG9tYWluX3VybHM9XCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTtyZXR1cm4oby5henVyZVdvcmthcm91bmR8fG8uZW5hYmxlQXp1cmVXb3JrYXJvdW5kKSYmKHIrPVwiJmF6dXJlV29ya2Fyb3VuZD0xXCIpLG8uZW5hYmxlT3B0aW1pemVkV29ya2Vyc3x8KHIrPVwiJmVuYWJsZU9wdGltaXplZFdvcmtlcnM9MFwiKSxvLnVzZURvd25sb2FkZXJ8fChyKz1cIiZ1c2VEb3dubG9hZGVyPTBcIiksby5kaXNhYmxlV2Vic29ja2V0cyYmKHIrPVwiJmRpc2FibGVXZWJzb2NrZXRzPTFcIiksby5kaXNhYmxlU3RyZWFtaW5nJiYocis9XCImZGlzYWJsZVN0cmVhbWluZz0xXCIpLG8uZm9yY2VDbGllbnRTaWRlSW5pdCYmKHIrPVwiJmZvcmNlQ2xpZW50U2lkZUluaXQ9MVwiKSxvLmxvYWRBc1BERiYmKHIrPVwiJmxvYWRBc1BERj0xXCIpLHZvaWQgMCE9PW8ud29ya2VyVHJhbnNwb3J0UHJvbWlzZSYmKHIrPVwiJnVzZVNoYXJlZFdvcmtlcj1cIi5jb25jYXQoby53b3JrZXJUcmFuc3BvcnRQcm9taXNlP1widHJ1ZVwiOlwiZmFsc2VcIikpLHZvaWQgMCE9PWkmJmkmJihyKz1cIiZ3ZWJ2aWV3ZXJTZXJ2ZXJVUkw9XCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChpKSkpLG8uZmFsbGJhY2tUb0NsaWVudFNpZGUmJihyKz1cIiZmYWxsYmFja1RvQ2xpZW50U2lkZT0xXCIpLHZvaWQgMCE9PW8uc2luZ2xlU2VydmVyTW9kZSYmKHIrPVwiJnNpbmdsZVNlcnZlck1vZGU9XCIuY29uY2F0KG8uc2luZ2xlU2VydmVyTW9kZT9cInRydWVcIjpcImZhbHNlXCIpKSx2b2lkIDAhPT1vLmFjY2Vzc2libGVNb2RlJiYocis9XCImYWNjZXNzaWJsZU1vZGU9XCIuY29uY2F0KG8uYWNjZXNzaWJsZU1vZGU/MTowKSksby5kaXNhYmxlTG9ncyYmKHIrPVwiJmRpc2FibGVMb2dzPTFcIiksby5lbmFibGVWaWV3U3RhdGVBbm5vdGF0aW9ucyYmKHIrPVwiJmVuYWJsZVZpZXdTdGF0ZUFubm90YXRpb25zPTFcIiksby5kaXNhYmxlRmxhdHRlbmVkQW5ub3RhdGlvbnMmJihyKz1cIiZkaXNhYmxlRmxhdHRlbmVkQW5ub3RhdGlvbnM9MVwiKSxvLmhpZ2hDb250cmFzdE1vZGUmJihyKz1cIiZoaWdoQ29udHJhc3RNb2RlPTFcIiksdm9pZCAwIT09by5zZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbiYmKHIrPVwiJnNlbGVjdEFubm90YXRpb25PbkNyZWF0aW9uPVwiLmNvbmNhdChvLnNlbGVjdEFubm90YXRpb25PbkNyZWF0aW9uPzE6MCkpLHZvaWQgMCE9PW8uYXV0b0ZvY3VzTm90ZU9uQW5ub3RhdGlvblNlbGVjdGlvbiYmKHIrPVwiJmF1dG9Gb2N1c05vdGVPbkFubm90YXRpb25TZWxlY3Rpb249XCIuY29uY2F0KG8uYXV0b0ZvY3VzTm90ZU9uQW5ub3RhdGlvblNlbGVjdGlvbj8xOjApKSxyKz1cIiZpZD1cIi5jb25jYXQodGhpcy5pZCksKHIrPVwiJmJhc2VQYXRoPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkpLmxlbmd0aD4wJiZcIiZcIj09PXJbMF0mJihyPVwiI1wiLmNvbmNhdChyLnNsaWNlKDEpKSkscis9XCImd2ViVmlld2VySlNWZXJzaW9uPVwiLmNvbmNhdCh0aGlzLnZlcnNpb24pfSxzZXRJbnN0YW5jZURhdGE6ZnVuY3Rpb24oZSl7cC5zZXQodGhpcy5lbGVtZW50LHtpZnJhbWU6ZSxsOnRoaXMub3B0aW9ucy5sfHx0aGlzLm9wdGlvbnMubGljZW5zZUtleSx3b3JrZXJUcmFuc3BvcnRQcm9taXNlOnRoaXMub3B0aW9ucy53b3JrZXJUcmFuc3BvcnRQcm9taXNlfSl9LF9jcmVhdGVIVE1MNTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLm9wdGlvbnMudWlQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTt0aGlzLnNldEluc3RhbmNlRGF0YShuKSxuLmlkPVwid2Vidmlld2VyLVwiLmNvbmNhdCh0aGlzLmlkKSxuLnNyYz10LG4udGl0bGU9XCJ3ZWJ2aWV3ZXJcIixuLmZyYW1lQm9yZGVyPTAsbi53aWR0aD1cIjEwMCVcIixuLmhlaWdodD1cIjEwMCVcIixuLnNldEF0dHJpYnV0ZShcImFsbG93ZnVsbHNjcmVlblwiLCEwKSxuLnNldEF0dHJpYnV0ZShcIndlYmtpdGFsbG93ZnVsbHNjcmVlblwiLCEwKSxuLnNldEF0dHJpYnV0ZShcIm1vemFsbG93ZnVsbHNjcmVlblwiLCEwKSx0aGlzLmlmcmFtZT1uLHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3ImJm4uc2V0QXR0cmlidXRlKFwiZGF0YS1iZ2NvbG9yXCIsdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvciksdGhpcy5vcHRpb25zLmFzc2V0UGF0aCYmbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFzc2V0cGF0aFwiLGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wdGlvbnMuYXNzZXRQYXRoKSksdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG4pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLChmdW5jdGlvbiB0KG4pe2lmKFwidmlld2VyTG9hZGVkXCI9PT1uLmRhdGEudHlwZSYmbi5kYXRhLmlkPT09ZS5pZCl0cnl7ZS5pbnN0YW5jZT1lLmlmcmFtZS5jb250ZW50V2luZG93Lmluc3RhbmNlfWNhdGNoKGUpe31maW5hbGx5e3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQpLGUuX3ZpZXdlckxvYWRlZChlLmlmcmFtZSl9fSkpfSxfY3JlYXRlSFRNTDVNb2JpbGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5vcHRpb25zLnVpUGF0aCt0aGlzLl9nZXRIVE1MNU9wdGlvbnNVUkwoKSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7dGhpcy5zZXRJbnN0YW5jZURhdGEobiksbi5pZD1cIndlYnZpZXdlci1cIi5jb25jYXQodGhpcy5pZCksbi5zcmM9dCxuLmZyYW1lYm9yZGVyPTAsdGhpcy5vcHRpb25zLmFzc2V0UGF0aCYmbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFzc2V0cGF0aFwiLGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wdGlvbnMuYXNzZXRQYXRoKSksbi5zdHlsZS53aWR0aD1cIjEwMCVcIixuLnN0eWxlLmhlaWdodD1cIjEwMCVcIix0aGlzLmlmcmFtZT1uLHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChuKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwoZnVuY3Rpb24gdChuKXtpZihcInZpZXdlckxvYWRlZFwiPT09bi5kYXRhLnR5cGUmJm4uZGF0YS5pZD09PWUuaWQpdHJ5e2UuaW5zdGFuY2U9ZS5pZnJhbWUuY29udGVudFdpbmRvdy5pbnN0YW5jZX1jYXRjaChlKXt9ZmluYWxseXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0KSxlLl92aWV3ZXJMb2FkZWQoZS5pZnJhbWUpfX0pKX0sZGlzcG9zZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtwLmRlbGV0ZShlLmVsZW1lbnQpLGguZGVsZXRlKGUuZWxlbWVudCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZS5tZXNzYWdlSGFuZGxlciksZS5pZnJhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixlLmxvYWRMaXN0ZW5lciksZS5pZnJhbWU9bnVsbCxjb25zb2xlLmNsZWFyKCksZS5pbnN0YW5jZS5Db3JlLmRvY3VtZW50Vmlld2VyLmNsb3NlRG9jdW1lbnQoKS50aGVuKChmdW5jdGlvbigpe3QoKX0pKX0pKX0sZ2V0SW5zdGFuY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbnN0YW5jZX0sc2V0Q29tcGxldGVJbnN0YW5jZTpmdW5jdGlvbihlKXt0aGlzLmNvbXBsZXRlSW5zdGFuY2U9ZX0sZ2V0Q29tcGxldGVJbnN0YW5jZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbXBsZXRlSW5zdGFuY2V9LF9jb3JyZWN0UmVsYXRpdmVQYXRoOmZ1bmN0aW9uKGUpe3ZhciB0PXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGkoZSx0KX0pKTppKGUsdCl9LF90ZXN0SFRNTDU6ZnVuY3Rpb24oKXt0cnl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyZXR1cm4gZSYmZS5nZXRDb250ZXh0KFwiMmRcIil9Y2F0Y2goZSl7cmV0dXJuITF9fSxfdGVzdFdlYkFzc2VtYmx5OmZ1bmN0aW9uKCl7cmV0dXJuISghd2luZG93LldlYkFzc2VtYmx5fHwhd2luZG93LldlYkFzc2VtYmx5LnZhbGlkYXRlKX0sX3Rlc3RDT1JTOmZ1bmN0aW9uKCl7cmV0dXJuXCJYTUxIdHRwUmVxdWVzdFwiaW4gd2luZG93JiZcIndpdGhDcmVkZW50aWFsc1wiaW4gbmV3IFhNTEh0dHBSZXF1ZXN0fSxpc0lFOmZ1bmN0aW9uKCl7dmFyIGU9bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLHQ9Lyhtc2llKSAoW1xcdy5dKykvLmV4ZWMoZSl8fC8odHJpZGVudCkoPzouKj8gcnY6KFtcXHcuXSspfCkvLmV4ZWMoZSk7cmV0dXJuIHQ/cGFyc2VJbnQodFsyXSwxMCk6dH0saXNNb2JpbGVEZXZpY2U6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc0lFKCkmJigwPT09dGhpcy5zY3JvbGxiYXJXaWR0aCgpJiZuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9Ub3VjaC9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1NpbGsvaSkpfSxzY3JvbGxiYXJXaWR0aDpmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6MTAwcHg7aGVpZ2h0OjEwMHB4O292ZXJmbG93OnNjcm9sbCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4XCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKTt2YXIgdD1lLm9mZnNldFdpZHRoLWUuY2xpZW50V2lkdGg7cmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZSksdH0saXNTYW1lT3JpZ2luOmZ1bmN0aW9uKGUpe3ZhciB0PXdpbmRvdy5sb2NhdGlvbixuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO24uaHJlZj1lLFwiXCI9PT1uLmhvc3QmJihuLmhyZWY9bi5ocmVmKTt2YXIgbz13aW5kb3cubG9jYXRpb24ucG9ydCxpPW4ucG9ydDtyZXR1cm5cImh0dHA6XCI9PT1uLnByb3RvY29sPyhpPWl8fFwiODBcIixvPW98fFwiODBcIik6XCJodHRwczpcIj09PW4ucHJvdG9jb2wmJihpPWl8fFwiNDQzXCIsbz1vfHxcIjQ0M1wiKSxuLmhvc3RuYW1lPT09dC5ob3N0bmFtZSYmbi5wcm90b2NvbD09PXQucHJvdG9jb2wmJmk9PT1vfX0sYy5XZWJWaWV3ZXIuT3B0aW9ucz17aW5pdGlhbERvYzp2b2lkIDAsYW5ub3RhdGlvbkFkbWluOnZvaWQgMCxpc0FkbWluVXNlcjp2b2lkIDAsYW5ub3RhdGlvblVzZXI6dm9pZCAwLGFzc2V0UGF0aDp2b2lkIDAsYXV0b0NyZWF0ZTohMCxhdXRvRm9jdXNOb3RlT25Bbm5vdGF0aW9uU2VsZWN0aW9uOiEwLGF6dXJlV29ya2Fyb3VuZDohMSxhZGRpdGlvbmFsVHJhbnNsYXRpb25zOnZvaWQgMCxlbmFibGVBenVyZVdvcmthcm91bmQ6ITEsZW5hYmxlT3B0aW1pemVkV29ya2VyczohMCxiYWNrZ3JvdW5kQ29sb3I6dm9pZCAwLGJhY2tlbmRUeXBlOnZvaWQgMCxjc3M6dm9pZCAwLGNvbmZpZzp2b2lkIDAsY3VzdG9tOnZvaWQgMCxkb2N1bWVudElkOnZvaWQgMCxkb2N1bWVudFR5cGU6dm9pZCAwLHByZWxvYWRXb3JrZXI6dm9pZCAwLGV4dGVuc2lvbjp2b2lkIDAsZW5hYmxlQW5ub3RhdGlvbnM6ITAsZmlsZW5hbWU6dm9pZCAwLGRpc2FibGVJMThuOiExLGRpc2FibGVkRWxlbWVudHM6dm9pZCAwLGRpc2FibGVXZWJzb2NrZXRzOiExLGVuYWJsZU9mZmxpbmVNb2RlOiExLGVuYWJsZVJlYWRPbmx5TW9kZTohMSxpc1JlYWRPbmx5OiExLGVuYWJsZVJlZGFjdGlvbjohMSxkaXNhYmxlVmlydHVhbERpc3BsYXlNb2RlOiExLGVuYWJsZU1lYXN1cmVtZW50OiExLGVuY3J5cHRpb246dm9pZCAwLGV4dGVybmFsUGF0aDp2b2lkIDAsaGlkZUFubm90YXRpb25QYW5lbDohMSxkaXNhYmxlVG9vbEdyb3VwUmVvcmRlcmluZzohMSx1aVBhdGg6XCIuL3VpL2luZGV4Lmh0bWxcIixsOnZvaWQgMCxsaWNlbnNlS2V5OnZvaWQgMCxtb2JpbGVSZWRpcmVjdDohMSxwYXRoOlwiXCIscGRmQmFja2VuZDp2b2lkIDAsd2Vidmlld2VyU2VydmVyVVJMOnZvaWQgMCxmYWxsYmFja1RvQ2xpZW50U2lkZTohMSxzaW5nbGVTZXJ2ZXJNb2RlOiExLGZ1bGxBUEk6ITEscHJlbG9hZFBERldvcmtlcjohMCxzZXJ2ZXJVcmw6dm9pZCAwLHNlcnZlclVybEhlYWRlcnM6dm9pZCAwLHNob3dMb2NhbEZpbGVQaWNrZXI6ITEsZW5hYmxlRmlsZVBpY2tlcjohMSxzaG93UGFnZUhpc3RvcnlCdXR0b25zOiEwLHNob3dUb29sYmFyQ29udHJvbDp2b2lkIDAsc3RhcnRPZmZsaW5lOiExLHN0cmVhbWluZzp2b2lkIDAsdHlwZTpcImh0bWw1XCIsdXNlRG93bmxvYWRlcjohMCx3b3JrZXJUcmFuc3BvcnRQcm9taXNlOnZvaWQgMCx4ZG9tYWluUHJveHlVcmw6dm9pZCAwLHVpOnZvaWQgMCxmb3JjZUNsaWVudFNpZGVJbml0OiExLGxvYWRBc1BERjohMSxhY2Nlc3NpYmxlTW9kZTp2b2lkIDAsZGlzYWJsZUxvZ3M6ITEsZW5hYmxlVmlld1N0YXRlQW5ub3RhdGlvbnM6ITEsaGlnaENvbnRyYXN0TW9kZTohMSxzZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbjohMSxub3Rlc0luTGVmdFBhbmVsOiExLGRvY3VtZW50WEZERlJldHJpZXZlcjp2b2lkIDAsZGlzYWJsZUZsYXR0ZW5lZEFubm90YXRpb25zOiExLGRpc2FibGVTdHJlYW1pbmc6ITF9O3ZhciB2PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuLG8pe2UubD1lLmx8fGUubGljZW5zZUtleSxlLmF6dXJlV29ya2Fyb3VuZD1lLmF6dXJlV29ya2Fyb3VuZHx8ZS5lbmFibGVBenVyZVdvcmthcm91bmQsZS5hbm5vdGF0aW9uQWRtaW49ZS5hbm5vdGF0aW9uQWRtaW58fGUuaXNBZG1pblVzZXIsZS5lbmFibGVSZWFkT25seU1vZGU9ZS5lbmFibGVSZWFkT25seU1vZGV8fGUuaXNSZWFkT25seSxlLnNob3dMb2NhbEZpbGVQaWNrZXI9ZS5zaG93TG9jYWxGaWxlUGlja2VyfHxlLmVuYWJsZUZpbGVQaWNrZXI7dC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwoZnVuY3Rpb24gcigpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIscik7dHJ5e3ZhciBjPXQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKS5jb250ZW50V2luZG93O2lmKHZvaWQgMD09PWMuVG9vbHMpdGhyb3cgbmV3IEVycm9yKFwiVmlld2VyIGlzbid0IGluc3RhbnRpYXRlZCBjb3JyZWN0bHkuIEl0IGNvdWxkIGJlIGNhdXNlZCBieSB0aGUgJ3BhdGgnIG9wdGlvbiBpbiB0aGUgV2ViVmlld2VyIGNvbnN0cnVjdG9yIG5vdCBiZWluZyBkZWZpbmVkIGNvcnJlY3RseS4gVGhlICdwYXRoJyBvcHRpb24gc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBIVE1MIGZpbGUgeW91J3JlIGxvYWRpbmcgdGhlIHNjcmlwdCBvbiBhbmQgdGhlIGxpYiBmb2xkZXIgbmVlZHMgdG8gYmUgcHVibGljbHkgYWNjZXNzaWJsZS5cIik7dmFyIGw9aS5nZXRJbnN0YW5jZSgpLHU9e2lmcmFtZVdpbmRvdzpjLGRpc3Bvc2U6aS5kaXNwb3NlLmJpbmQoaSl9LGY9ZCh7fSxsLGEocyh7fSxsLlVJX05BTUVTUEFDRV9LRVksYShhKHt9LGxbbC5VSV9OQU1FU1BBQ0VfS0VZXSksdSkpLHUpKTtpLnNldENvbXBsZXRlSW5zdGFuY2UoZik7dmFyIHA9UHJvbWlzZS5yZXNvbHZlKCk7aWYoZS5kb2N1bWVudFhGREZSZXRyaWV2ZXImJihwPWZbbC5DT1JFX05BTUVTUEFDRV9LRVldLmRvY3VtZW50Vmlld2VyLnNldERvY3VtZW50WEZERlJldHJpZXZlcihlLmRvY3VtZW50WEZERlJldHJpZXZlcikpLGUuYWRkaXRpb25hbFRyYW5zbGF0aW9ucyl7dmFyIGg9ZS5hZGRpdGlvbmFsVHJhbnNsYXRpb25zO2ZbbC5VSV9OQU1FU1BBQ0VfS0VZXS5zZXRUcmFuc2xhdGlvbnMoaC5sYW5ndWFnZSxoLnRyYW5zbGF0aW9ucyl9cC50aGVuKChmdW5jdGlvbigpe24oZil9KSl9Y2F0Y2godCl7aWYoXCJjb25maWdcImluIGUmJlwiXCIhPT1lLmNvbmZpZylyZXR1cm4gbigpO28oXCJWaWV3ZXIgaXMgb24gYSBkaWZmZXJlbnQgZG9tYWluLCB0aGUgcHJvbWlzZSBmcm9tIFdlYlZpZXdlciBmdW5jdGlvbiBpcyByZWplY3RlZCBhbmQgQVBJIGZ1bmN0aW9ucyB3aWxsIG5vdCB3b3JrIGJlY2F1c2Ugb2YgY3Jvc3MgZG9tYWluIHBlcm1pc3Npb25zLiBTZWUgaHR0cHM6Ly93d3cucGRmdHJvbi5jb20va2JfY3Jvc3Nfb3JpZ2luIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKX19KSk7dmFyIGk9bmV3IGMuV2ViVmlld2VyKGUsdCl9KSl9LGI9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXUocCksbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO2lmKG8uaWZyYW1lPT09ZSlyZXR1cm4gb31yZXR1cm4gbnVsbH07di5sPWZ1bmN0aW9uKGUpe3ZhciB0PWIoZSk7cmV0dXJuIHQmJnQubH0sdi53b3JrZXJUcmFuc3BvcnRQcm9taXNlPWZ1bmN0aW9uKGUpe3ZhciB0PWIoZSk7cmV0dXJuIHQmJnQud29ya2VyVHJhbnNwb3J0UHJvbWlzZX0sdi5Xb3JrZXJUeXBlcz17QUxMOlwiYWxsXCIsT0ZGSUNFOlwib2ZmaWNlXCIsTEVHQUNZX09GRklDRTpcImxlZ2FjeU9mZmljZVwiLFBERjpcInBkZlwiLENPTlRFTlRfRURJVDpcImNvbnRlbnRFZGl0XCJ9LHYuQmFja2VuZFR5cGVzPW87dmFyIHc9ZnVuY3Rpb24oZSl7dmFyIHQ9dShwKTtpZighdC5sZW5ndGh8fCF0LmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5zdGFuY2V9KSkubGVuZ3RoKXJldHVybiBjb25zb2xlLndhcm4oXCJXZWJWaWV3ZXIuZ2V0SW5zdGFuY2UoKSB3YXMgY2FsbGVkIGJlZm9yZSBhbnkgaW5zdGFuY2VzIHdlcmUgYXZhaWxhYmxlXCIpLG51bGw7aWYodC5sZW5ndGg+MSYmIWUpdGhyb3cgbmV3IEVycm9yKFwiTW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBvZiBXZWJWaWV3ZXIgd2FzIGZvdW5kLCBhbmQgbm8gZWxlbWVudCB3YXMgcGFzc2VkIGludG8gZ2V0SW5zdGFuY2UoKS4gUGxlYXNlIHNwZWNpZnkgd2hpY2ggaW5zdGFuY2UgeW91IHdhbnQgdG8gZ2V0LlwiKTtyZXR1cm4gZT8ocC5nZXQoZSl8fHt9KS5pbnN0YW5jZToodFswXXx8e30pLmluc3RhbmNlfTt2LmdldEluc3RhbmNlPXcsd2luZG93LldlYlZpZXdlcj12O3QuZGVmYXVsdD12fV0pfSkpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubW9kYWwtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkVERjM7XHJcbiAgICBjb2xvcjogIzBEMTExNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgYW5pbWF0aW9uOiB6b29tSW4gZm9yd2FyZHMgMTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5tb2RhbCBoMSxcclxuLm1vZGFsIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMEQxMTE3O1xyXG59XHJcblxyXG4ubW9kYWw+ZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5tb2RhbD4ubW9kYWwtYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5tb2RhbD4ubW9kYWwtYnV0dG9ucy1jb250YWluZXI+YnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IHNvbGlkIDNwdCAjMEQxMTE3O1xyXG4gICAgY29sb3I6ICMwRDExMTc7XHJcblxyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IHNvbGlkIDNwdCAjMEQxMTE3O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsPmJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5NTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBhbmltYXRpb246IGZhZGVJZCBmb3J3YXJkcyAxMDBtcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSWQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgc2NhbGU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHNjYWxlOiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzVweCkge1xyXG5cclxuICAgIC5tb2RhbD5kaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87O0lBRVAsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQseUNBQXlDO0FBQzdDOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGNBQWM7O0lBRWQsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7SUFFakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix5QkFBeUI7O0lBRXpCLGdCQUFnQjs7SUFFaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxvQ0FBb0M7O0lBRXBDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFFBQVE7SUFDWjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RURGMztcXHJcXG4gICAgY29sb3I6ICMwRDExMTc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogem9vbUluIGZvcndhcmRzIDEwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaDEsXFxyXFxuLm1vZGFsIGgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzBEMTExNztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPmRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPi5tb2RhbC1idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbD4ubW9kYWwtYnV0dG9ucy1jb250YWluZXI+YnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHQgIzBEMTExNztcXHJcXG4gICAgY29sb3I6ICMwRDExMTc7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDNwdCAjMEQxMTE3O1xcclxcblxcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcblxcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWw+YnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDk1O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlSWQgZm9yd2FyZHMgMTAwbXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUlkIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB6b29tSW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHNjYWxlOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHNjYWxlOiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3NXB4KSB7XFxyXFxuXFxyXFxuICAgIC5tb2RhbD5kaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFsX2Jpb2xvZ3kgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL2FsX2Jpb2xvZ3kuanBnJ1xyXG5pbXBvcnQgYWxfY2hlbWlzdHJ5IGZyb20gJy4uL21lZGlhL2ltYWdlcy9hbF9jaGVtaXN0cnkuanBnJ1xyXG5pbXBvcnQgYWxfcGh5c2ljcyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvYWxfcGh5c2ljcy5qcGcnXHJcblxyXG5pbXBvcnQgb2xfYmlvbG9neSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvb2xfYmlvbG9neS5qcGcnXHJcbmltcG9ydCBvbF9jaGVtaXN0cnkgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL29sX2NoZW1pc3RyeS5qcGcnXHJcbmltcG9ydCBvbF9jb21iaW5lZCBmcm9tICcuLi9tZWRpYS9pbWFnZXMvb2xfY29tYmluZWQucG5nJ1xyXG5pbXBvcnQgb2xfZWNvbm9taWNzIGZyb20gJy4uL21lZGlhL2ltYWdlcy9vbF9lY29ub21pY3MucG5nJ1xyXG5pbXBvcnQgb2xfcGh5c2ljcyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvb2xfcGh5c2ljcy5qcGcnXHJcblxyXG5jb25zdCBpbWFnZXMgPSB7IGFsX2Jpb2xvZ3ksIGFsX2NoZW1pc3RyeSwgYWxfcGh5c2ljcywgb2xfYmlvbG9neSwgb2xfY2hlbWlzdHJ5LCBvbF9jb21iaW5lZCwgb2xfZWNvbm9taWNzLCBvbF9waHlzaWNzIH1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZUJ1dHRvbihsZXZlbCwgc3ViamVjdCwgeWVhciwgc2Vzc2lvbiwgdmFyaWFudCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NpZGUtY29udGFpbmVyJylcclxuICAgIGVsZW1lbnQuaWQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9YCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfWAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9YFxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnV0dG9uRWxlbWVudC5pZCA9IHZhcmlhbnQgPT0gdW5kZWZpbmVkID8gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/IGBzaWRlLSR7bGV2ZWx9LWJ1dHRvbi0ke3N1YmplY3R9YCA6IGBzaWRlLSR7bGV2ZWx9LWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn1gIDogYHNpZGUtJHtsZXZlbH0tYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259YCA6IGBzaWRlLSR7bGV2ZWx9LWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9YFxyXG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBzaWRlLWJ1dHRvbmApXHJcbiAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoYHNpZGUtYnV0dG9uLSR7dmFyaWFudCA9PSB1bmRlZmluZWQgPyBzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gJ3N1YmplY3QnIDogJ3llYXInIDogJ3Nlc3Npb24nIDogJ3ZhcmlhbnQnfWApXHJcblxyXG4gICAgY29uc3QgYXJyb3dEb3duU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7IGFycm93RG93blN2Zy5jbGFzc0xpc3QuYWRkKCdzaWRlLWJ1dHRvbi1hcnJvdycpOyBhcnJvd0Rvd25Tdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICczMicpOyBhcnJvd0Rvd25Tdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMzInKTsgYXJyb3dEb3duU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjU2IDI1NicpOyBhcnJvd0Rvd25Tdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpOyBhcnJvd0Rvd25TdmcuaW5uZXJIVE1MID0gJzxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTIxNi40OSAxMDQuNDlsLTgwIDgwYTEyIDEyIDAgMCAxLTE3IDBsLTgwLTgwYTEyIDEyIDAgMCAxIDE3LTE3TDEyOCAxNTlsNzEuNTEtNzEuNTJhMTIgMTIgMCAwIDEgMTcgMTdaXCIgLz4nXHJcbiAgICBjb25zdCBhcnJvd1VwU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7IGFycm93VXBTdmcuY2xhc3NMaXN0LmFkZCgnc2lkZS1idXR0b24tYXJyb3cnKTsgYXJyb3dVcFN2Zy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTsgYXJyb3dVcFN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzMyJyk7IGFycm93VXBTdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMzInKTsgYXJyb3dVcFN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI1NiAyNTYnKTsgYXJyb3dVcFN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7IGFycm93VXBTdmcuaW5uZXJIVE1MID0gJzxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcImQ9XCJNMjE2LjQ5IDE2OC40OWExMiAxMiAwIDAgMS0xNyAwTDEyOCA5N2wtNzEuNTEgNzEuNDlhMTIgMTIgMCAwIDEtMTctMTdsODAtODBhMTIgMTIgMCAwIDEgMTcgMGw4MCA4MGExMiAxMiAwIDAgMSAwIDE3XCIgLz4nXHJcbiAgICBpZiAodmFyaWFudCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGFycm93RG93blN2ZylcclxuICAgICAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGFycm93VXBTdmcpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBzdWJqZWN0ID09ICdDb21iaW5lZCcgPyAnQ29tYmluZWQgU2NpZW5jZScgOiBzdWJqZWN0IDogeWVhciA6IChzZXNzaW9uID09ICdtJyA/ICdGZWIgLyBNYXInIDogc2Vzc2lvbiA9PSAncycgPyAnTWF5IC8gSnVuJyA6ICdPY3QgLyBOb3YnKSA6IGBWYXJpYW50ICR7TnVtYmVyKHZhcmlhbnQpICsgMX1gXHJcbiAgICB0aXRsZS5pZCA9IHZhcmlhbnQgPT0gdW5kZWZpbmVkID8gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tdGl0bGVgIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LXRpdGxlYCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXRpdGxlYCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH0tdGl0bGVgXHJcblxyXG4gICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSlcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpXHJcbiAgICBpZiAodmFyaWFudCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlLWNvbnRhaW5lcicpXHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpXHJcbiAgICAgICAgY29udGFpbmVyLmlkID0gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0teWVhcnMtY29udGFpbmVyYCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS1zZXNzaW9ucy1jb250YWluZXJgIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tdmFyaWFudHMtY29udGFpbmVyYFxyXG5cclxuICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZ3JvdXAuY2xhc3NMaXN0LmFkZCgnc2lkZS1ncm91cCcpXHJcbiAgICAgICAgZ3JvdXAuaWQgPSBzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS15ZWFyc2AgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tc2Vzc2lvbnNgIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tdmFyaWFudHNgXHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cClcclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcblxyXG4gICAgICAgIGFycm93RG93blN2Zy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYXJyb3dEb3duU3ZnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgIGFycm93VXBTdmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYXJyb3dVcFN2Zy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYXJyb3dEb3duU3ZnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgIGFycm93VXBTdmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZU1haW5CdXR0b24obGV2ZWwsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpXHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmlkID0gdmFyaWFudCA9PSB1bmRlZmluZWQgPyBzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gYCR7bGV2ZWx9LSR7c3ViamVjdH0tY2FyZC1jb250YWluZXJgIDogYCR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS1jYXJkLWNvbnRhaW5lcmAgOiBgJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tY2FyZC1jb250YWluZXJgIDogYCR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH0tY2FyZC1jb250YWluZXJgXHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxyXG4gICAgZWxlbWVudC5pZCA9IHZhcmlhbnQgPT0gdW5kZWZpbmVkID8gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/IGAke2xldmVsfS0ke3N1YmplY3R9LWNhcmRgIDogYCR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS1jYXJkYCA6IGAke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS1jYXJkYCA6IGAke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9LWNhcmRgXHJcblxyXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGFpbmVyJylcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGltYWdlLnNyYyA9IGltYWdlc1tgJHtsZXZlbH1fJHtzdWJqZWN0LnRvTG93ZXJDYXNlKCl9YF1cclxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHZhcmlhbnQgPT0gdW5kZWZpbmVkID8gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/IHN1YmplY3QgPT0gJ0NvbWJpbmVkJyA/ICdDb21iaW5lZCBTY2llbmNlJyA6IHN1YmplY3QgOiB5ZWFyIDogKHNlc3Npb24gPT0gJ20nID8gJ0ZlYiAvIE1hcicgOiBzZXNzaW9uID09ICdzJyA/ICdNYXkgLyBKdW4nIDogJ09jdCAvIE5vdicpIDogYFZhcmlhbnQgJHtOdW1iZXIodmFyaWFudCkgKyAxfWBcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKVxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSlcclxuXHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRDb250YWluZXJcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVTaWRlQnV0dG9uLCBnZW5lcmF0ZU1haW5CdXR0b24gfSIsImltcG9ydCAnLi4vY3NzL21vZGFsLmNzcydcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRpdGxlLCBjb250ZW50cywgc3VibWl0QnV0dG9uQmVoYXZpb3IsIGNhbmNlbEJ1dHRvbkJlaGF2aW9yKSB7XHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBtb2RhbEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVxyXG5cclxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKVxyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2Ryb3ApXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IHR5cGVvZiAoY29udGVudHNbaV0pID09ICdzdHJpbmcnID8gY29udGVudHNbaV0gOiBjb250ZW50c1tpXVswXVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChjb250ZW50c1tpXVsxXSkgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjb250ZW50c1tpXVsxXSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGFpbmVyJylcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcclxuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wJylcclxuXHJcbiAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICAgIG1vZGFsQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idXR0b25zLWNvbnRhaW5lcicpXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbEJ1dHRvbnNDb250YWluZXIpXHJcblxyXG4gICAgaWYgKHN1Ym1pdEJ1dHRvbkJlaGF2aW9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gc3VibWl0QnV0dG9uQmVoYXZpb3JbMF1cclxuXHJcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b25CZWhhdmlvclsxXSgpXHJcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbW9kYWxCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2FuY2VsQnV0dG9uQmVoYXZpb3IgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBjYW5jZWxCdXR0b25CZWhhdmlvclswXVxyXG5cclxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkJlaGF2aW9yWzFdKClcclxuICAgICAgICAgICAgbW9kYWxDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtb2RhbEJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpXHJcblxyXG4gICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1vZGFsICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCJcclxuaW1wb3J0IG9sU3ViamVjdHNNUyBmcm9tIFwiLi4vanNvbi9PTF9zdWJqZWN0c19tcy5qc29uXCJcclxuaW1wb3J0IGFsU3ViamVjdHNNUyBmcm9tIFwiLi4vanNvbi9BTF9zdWJqZWN0c19tcy5qc29uXCJcclxuXHJcbmltcG9ydCB7IGdlbmVyYXRlU2lkZUJ1dHRvbiwgZ2VuZXJhdGVNYWluQnV0dG9uIH0gZnJvbSBcIi4vZ2VuZXJhdGVFbGVtZW50cy5qc1wiXHJcbmltcG9ydCBjcmVhdGVNb2RhbCBmcm9tIFwiLi9tb2RhbC5qc1wiXHJcblxyXG5pbXBvcnQgV2ViVmlld2VyIGZyb20gJ0BwZGZ0cm9uL3BkZmpzLWV4cHJlc3MnXHJcblxyXG4vLyBHTE9CQUwgVkFSSUFCTEVTXHJcbmxldCB1c2VyQW5zd2VycyA9IFtdXHJcbmxldCBpbkV4YW0gPSBmYWxzZVxyXG5sZXQgY29uZmlybSA9IGZhbHNlXHJcbmNvbnN0IHN1YmplY3RDb2RlID0ge1xyXG4gICAgT0xCaW9sb2d5OiAnMDYxMCcsXHJcbiAgICBPTENoZW1pc3RyeTogJzA2MjAnLFxyXG4gICAgT0xDb21iaW5lZDogJzA2NTMnLFxyXG4gICAgT0xFY29ub21pY3M6ICcwNDU1JyxcclxuICAgIE9MUGh5c2ljczogJzA2MjUnLFxyXG4gICAgQUxCaW9sb2d5OiAnOTcwMCcsXHJcbiAgICBBTENoZW1pc3RyeTogJzk3MDEnLFxyXG4gICAgQUxQaHlzaWNzOiAnOTcwMicsXHJcbn1cclxuXHJcbi8vIGNyZWRpdHMgYnV0dG9uIGJlaGF2aW9yXHJcbmNvbnN0IGNyZWRpdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlZGl0cycpXHJcbmNyZWRpdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjcmVhdGVNb2RhbChcclxuICAgICAgICAnQ3JlZGl0JywgLy8gdGl0bGVcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdUaGFua3MgRm9yIHVzaW5nIDxicj4gdGhlIHdlYnNpdGUgPDMnLFxyXG4gICAgICAgICAgICAnV2Vic2l0ZSBjcmVhdGVkIGJ5IDxicj4gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9aaWVkRGV2XCI+WmllZDwvYT4gJiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL29tYXItZWxzaGVyYmlueVwiPlNoZXJibzwvYT4nLFxyXG4gICAgICAgICAgICAnUmVwb3NpdG9yeTogPGJyPiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ppZWREZXYvbWNxLW1hdGVcIj5NQ1EgTWF0ZTwvYT4nXHJcbiAgICAgICAgXSwgLy8gY29udGVudFxyXG4gICAgKVxyXG59KVxyXG5cclxuLy8gcGF0aCBkaXJlY3Rpb24gYmVoYXZpb3JcclxuY29uc3QgbW92ZUJhY2t3YXJkc0Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2t3YXJkcy1hcnJvdycpXHJcbmNvbnN0IG1vdmVGb3J3YXJkc0Fycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcndhcmRzLWFycm93JylcclxuXHJcbmxldCBiYWNrd2FyZF9zdGFjayA9IFtdO1xyXG5sZXQgY3VycmVudF9wYXRoID0gXCJob21lXCI7IC8vIGltcG9ydGFudCB0byBwdXQgaW4gZGF0YXR5cGUgYW5kIGZvcm1hdCBvZiByb290IHBhdGhcclxubGV0IGZvcndhcmRfc3RhY2sgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGlzQmFja3dhcmRBdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gYmFja3dhcmRfc3RhY2subGVuZ3RoID4gMCA/IDEgOiAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0ZvcndhcmRBdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gZm9yd2FyZF9zdGFjay5sZW5ndGggPiAwID8gMSA6IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhY2t3YXJkUGF0aCgpIHtcclxuICAgIGlmIChiYWNrd2FyZF9zdGFjay5sZW5ndGggPT0gMCkgcmV0dXJuIDA7XHJcbiAgICBmb3J3YXJkX3N0YWNrLnB1c2goY3VycmVudF9wYXRoKTtcclxuICAgIGN1cnJlbnRfcGF0aCA9IGJhY2t3YXJkX3N0YWNrLnBvcCgpXHJcblxyXG5cclxuICAgIGlmIChpc0JhY2t3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICBtb3ZlQmFja3dhcmRzQXJyb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW92ZUJhY2t3YXJkc0Fycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICBpZiAoaXNGb3J3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhdGhFbGVtZW50KHRydWUpXHJcbiAgICB1cGRhdGVQYXRoSWNvbigpXHJcbiAgICB1cGRhdGVQYXRoRWxlbWVudCh0cnVlKVxyXG4gICAgdXBkYXRlUGF0aEljb24oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQYXRoKG5ld19wYXRoKSB7XHJcbiAgICBiYWNrd2FyZF9zdGFjay5wdXNoKGN1cnJlbnRfcGF0aCk7XHJcbiAgICBmb3J3YXJkX3N0YWNrID0gW107XHJcbiAgICBjdXJyZW50X3BhdGggPSBuZXdfcGF0aDtcclxuXHJcbiAgICBpZiAoaXNCYWNrd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUJhY2t3YXJkc0Fycm93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vdmVCYWNrd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXRoRWxlbWVudCgpXHJcbiAgICB1cGRhdGVQYXRoSWNvbigpXHJcblxyXG4gICAgdXBkYXRlUGF0aEVsZW1lbnQoKVxyXG4gICAgdXBkYXRlUGF0aEljb24oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkUGF0aCgpIHtcclxuICAgIGlmIChmb3J3YXJkX3N0YWNrLmxlbmd0aCA9PSAwKSByZXR1cm4gMDtcclxuICAgIGJhY2t3YXJkX3N0YWNrLnB1c2goY3VycmVudF9wYXRoKTtcclxuICAgIGN1cnJlbnRfcGF0aCA9IGZvcndhcmRfc3RhY2sucG9wKCk7XHJcbiAgICBpZiAoaXNCYWNrd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUJhY2t3YXJkc0Fycm93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vdmVCYWNrd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXRoRWxlbWVudCh0cnVlKVxyXG4gICAgdXBkYXRlUGF0aEljb24oKVxyXG59XHJcblxyXG5sZXQgdGltZW91dFxyXG5mdW5jdGlvbiB1cGRhdGVQYXRoRWxlbWVudChjcmVhdGVTaGVldCkge1xyXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXRoJylcclxuICAgIGNvbnN0IHBhdGhUZXh0ID0gY3VycmVudF9wYXRoLnNwbGl0KCc+JylcclxuICAgIG1haW4uc3R5bGUuYW5pbWF0aW9uID0gJzIwMG1zIGNsb3NlTWVudSBmb3J3YXJkcyBlYXNlJ1xyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxyXG5cclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgaWYgKHBhdGhUZXh0Lmxlbmd0aCA9PSA1KSB7XHJcbiAgICAgICAgICAgIHBhdGguaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChgJHtwYXRoVGV4dFswXS50b1VwcGVyQ2FzZSgpfSAke3BhdGhUZXh0WzFdfWAsIHRydWUpKVxyXG4gICAgICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KHBhdGhUZXh0WzJdKSlcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChwYXRoVGV4dFszXSA9PSAnbScgPyAnRmViIC8gTWFyJyA6IHBhdGhUZXh0WzNdID09ICdzJyA/ICdNYXkgLyBKdW4nIDogJ09jdCAvIE5vdicpKVxyXG4gICAgICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KGBWYXJpYW50ICR7TnVtYmVyKHBhdGhUZXh0WzRdKSArIDF9YCkpXHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQnViYmxlU2hlZXRNZW51KHBhdGhUZXh0WzBdLCBwYXRoVGV4dFsxXSwgcGF0aFRleHRbMl0sIHBhdGhUZXh0WzNdLCBwYXRoVGV4dFs0XSkpXHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoVGV4dC5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgICAgICBwYXRoLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIHBhdGguYXBwZW5kQ2hpbGQoY3JlYXRlUGF0aEVsZW1lbnQoYCR7cGF0aFRleHRbMF0udG9VcHBlckNhc2UoKX0gJHtwYXRoVGV4dFsxXX1gLCB0cnVlKSlcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChwYXRoVGV4dFsyXSkpXHJcbiAgICAgICAgICAgIHBhdGguYXBwZW5kQ2hpbGQoY3JlYXRlUGF0aEVsZW1lbnQocGF0aFRleHRbM10gPT0gJ20nID8gJ0ZlYiAvIE1hcicgOiBwYXRoVGV4dFszXSA9PSAncycgPyAnTWF5IC8gSnVuJyA6ICdPY3QgLyBOb3YnKSlcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KHBhdGhUZXh0WzBdLCBwYXRoVGV4dFsxXSwgcGF0aFRleHRbMl0sIHBhdGhUZXh0WzNdKSlcclxuICAgICAgICB9IGVsc2UgaWYgKHBhdGhUZXh0Lmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHBhdGguaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChgJHtwYXRoVGV4dFswXS50b1VwcGVyQ2FzZSgpfSAke3BhdGhUZXh0WzFdfWAsIHRydWUpKVxyXG4gICAgICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KHBhdGhUZXh0WzJdKSlcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KHBhdGhUZXh0WzBdLCBwYXRoVGV4dFsxXSwgcGF0aFRleHRbMl0pKVxyXG4gICAgICAgIH0gZWxzZSBpZiAocGF0aFRleHQubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgcGF0aC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KGAke3BhdGhUZXh0WzBdLnRvVXBwZXJDYXNlKCl9ICR7cGF0aFRleHRbMV19YCwgdHJ1ZSkpXHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ3JlYXRlU3ViTWVudShwYXRoVGV4dFswXSwgcGF0aFRleHRbMV0pKVxyXG4gICAgICAgIH0gZWxzZSBpZiAocGF0aFRleHQubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgcGF0aC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVNZW51KCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1haW4uc3R5bGUuYW5pbWF0aW9uID0gJzIwMG1zIG9wZW5NZW51IGZvcndhcmRzIGVhc2UnXHJcbiAgICB9LCAxMDApO1xyXG59XHJcblxyXG5tb3ZlQmFja3dhcmRzQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaXNCYWNrd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7IGJhY2t3YXJkUGF0aCgpIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoaXNCYWNrd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7IGJhY2t3YXJkUGF0aCgpIH0pXHJcbiAgICB9XHJcbn0pXHJcbm1vdmVGb3J3YXJkc0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7IGZvcndhcmRQYXRoKCkgfSlcclxuICAgIH1cclxuICAgIGlmIChpc0ZvcndhcmRBdmFpbGFibGUoKSkge1xyXG4gICAgICAgIG5hdkNvbmZpcm0oKCkgPT4geyBmb3J3YXJkUGF0aCgpIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBuYXZDb25maXJtKGNvbmZpcm1DYWxsYmFjaykge1xyXG4gICAgaWYgKGluRXhhbSkge1xyXG4gICAgICAgIGNyZWF0ZU1vZGFsKFxyXG4gICAgICAgICAgICAnQXJlIHlvdSBzdXJlPycsIC8vIHRpdGxlXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICdOYXZpZ2F0aW5nIHdpbGwgbG9zZSB5b3VyIHBhc3QgcHJvZ3Jlc3Mgb24gdGhlIGN1cnJlbnQgZXhhbScsXHJcbiAgICAgICAgICAgIF0sIC8vIGNvbnRlbnQsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICdDb25maXJtJyxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbkV4YW0gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1DYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICgpID0+IHsgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25maXJtQ2FsbGJhY2soKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYXRoRWxlbWVudCh0aXRsZSwgZmlyc3QpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIGNvbnN0IHBhdGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHBhdGhFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGVcclxuXHJcbiAgICBpZiAoIWZpcnN0KSB7XHJcbiAgICAgICAgY29uc3QgYXJyb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7IGFycm93RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaWRlLWJ1dHRvbi1hcnJvdycpOyBhcnJvd0VsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsICczMicpOyBhcnJvd0VsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMzInKTsgYXJyb3dFbGVtZW50LnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjU2IDI1NicpOyBhcnJvd0VsZW1lbnQuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpOyBhcnJvd0VsZW1lbnQuaW5uZXJIVE1MID0gJyAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMTg0LjQ5IDEzNi40OWwtODAgODBhMTIgMTIgMCAwIDEtMTctMTdMMTU5IDEyOEw4Ny41MSA1Ni40OWExMiAxMiAwIDEgMSAxNy0xN2w4MCA4MGExMiAxMiAwIDAgMS0uMDIgMTdcIiAvPidcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGFycm93RWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhdGhFbGVtZW50KVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhdGhJY29uKCkge1xyXG4gICAgY29uc3QgcGF0aEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF0aC1pY29uJylcclxuXHJcbiAgICBpZiAoY3VycmVudF9wYXRoLnNwbGl0KCc+JylbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGF0aEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTIyMi4xNCAxMDUuODVsLTgwLTgwYTIwIDIwIDAgMCAwLTI4LjI4IDBsLTgwIDgwQTE5Ljg2IDE5Ljg2IDAgMCAwIDI4IDEyMHY5NmExMiAxMiAwIDAgMCAxMiAxMmg2NGExMiAxMiAwIDAgMCAxMi0xMnYtNTJoMjR2NTJhMTIgMTIgMCAwIDAgMTIgMTJoNjRhMTIgMTIgMCAwIDAgMTItMTJ2LTk2YTE5Ljg2IDE5Ljg2IDAgMCAwLTUuODYtMTQuMTVNMjA0IDIwNGgtNDB2LTUyYTEyIDEyIDAgMCAwLTEyLTEyaC00OGExMiAxMiAwIDAgMC0xMiAxMnY1Mkg1MnYtODIuMzVsNzYtNzZsNzYgNzZaXCIgLz48L3N2Zz4nXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRfcGF0aC5zcGxpdCgnPicpWzFdID09ICdCaW9sb2d5Jykge1xyXG4gICAgICAgIHBhdGhJY29uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCJNMjI0IDIwNGgtMTJhOTIuMSA5Mi4xIDAgMCAwLTY0LTE0My4yMlYzMmEyMCAyMCAwIDAgMC0yMC0yMEg4MGEyMCAyMCAwIDAgMC0yMCAyMHY5NmEyMCAyMCAwIDAgMCAyMCAyMGg0OGEyMCAyMCAwIDAgMCAyMC0yMFY4NS4wOEE2OC4xIDY4LjEgMCAwIDEgMjA0IDE1MmE2Ny4zOSA2Ny4zOSAwIDAgMS0yNC4xOCA1MkgzMmExMiAxMiAwIDAgMCAwIDI0aDE5MmExMiAxMiAwIDAgMCAwLTI0bS0xMDAtODBIODRWMzZoNDBabS01MiA2NGExMiAxMiAwIDAgMSAwLTI0aDY0YTEyIDEyIDAgMCAxIDAgMjRaXCIvPjwvc3ZnPidcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudF9wYXRoLnNwbGl0KCc+JylbMV0gPT0gJ1BoeXNpY3MnKSB7XHJcbiAgICAgICAgcGF0aEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMDkuODQgNDcuNDRBOTEuNDIgOTEuNDIgMCAwIDAgMTQ0LjYyIDIwaC0uMzVhOTEuNDQgOTEuNDQgMCAwIDAtNjUuMTIgMjdsLTYxLjM5IDYyLjE3YTIwIDIwIDAgMCAwIC4wOCAyOC4yMUw0Ni41IDE2NmExOS44OSAxOS44OSAwIDAgMCAxNC4xNSA1Ljg2aC4xMWExOS44NiAxOS44NiAwIDAgMCAxNC4yLTZsNjAuODctNjIuMzlhMTIuMDcgMTIuMDcgMCAwIDEgMTYuNzctLjEyYTExLjYzIDExLjYzIDAgMCAxIDMuNSA4LjM1YTEyLjg1IDEyLjg1IDAgMCAxLTMuNjYgOS4xMUw5MC4xOSAxODFhMjAgMjAgMCAwIDAtLjIxIDI4LjVsMjguNjYgMjguNjZhMjAuMDggMjAuMDggMCAwIDAgMjguMTUuMTRsNjEuNzYtNjAuNDRsLjA5LS4wOWMzNi4wMS0zNS45OSAzNi41NC05NC40NiAxLjItMTMwLjMzTTYwLjYyIDE0Ni4yMWwtMjMtMjNsMTguMTktMTguNDFsMjIuODggMjIuODhabTcyLjIgNzIuMThsLTIzLTIzbDE4LjYxLTE4bDIyLjg4IDIyLjg3Wm01OC44OS01Ny42MmwtMjMuMjMgMjIuNzNsLTIyLjc4LTIyLjc3TDE2OS4yMSAxMzhsLjE1LS4xNGEzNyAzNyAwIDAgMCAxMC43NC0yNi4zN2EzNS40NCAzNS40NCAwIDAgMC0xMC44NS0yNS40MWEzNi4yIDM2LjIgMCAwIDAtNTAuNDQuNDhsLS4xLjExbC0yMy4yNSAyMy44MmwtMjIuNzgtMjIuNzdsMjMuNS0yMy44QTY3LjU1IDY3LjU1IDAgMCAxIDE0NC4yNyA0NGguMjZhNjcuNjIgNjcuNjIgMCAwIDEgNDguMjEgMjAuMjljMjYuMTEgMjYuNDkgMjUuNjQgNjkuNzYtMS4wMyA5Ni40OFwiLz48L3N2Zz4nXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRfcGF0aC5zcGxpdCgnPicpWzFdID09ICdDaGVtaXN0cnknKSB7XHJcbiAgICAgICAgcGF0aEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMjUuMTUgMTk3LjcxTDE2NCA5NS44MVY0NGg0YTEyIDEyIDAgMCAwIDAtMjRIODhhMTIgMTIgMCAwIDAgMCAyNGg0djUxLjgxbC02MS4xNSAxMDEuOUEyMCAyMCAwIDAgMCA0OCAyMjhoMTYwYTIwIDIwIDAgMCAwIDE3LjE1LTMwLjI5TTE0MCA0NHY1NS4xNGExMiAxMiAwIDAgMCAxLjcxIDYuMTdsMzUuMTMgNTguNTRjLTEwLjc5Ljg2LTI1LjE1LTEuMzEtNDMuNDItMTAuNTZjLTE0LTcuMDgtMjcuNDYtMTEuMzMtNDAuMjctMTIuNzZsMjEuMTQtMzUuMjJhMTIgMTIgMCAwIDAgMS43MS02LjE3VjQ0Wk01NS4wNiAyMDRMNzkgMTY0LjE5YzEzLTEuMTEgMjcuNjIgMi40MiA0My42MiAxMC41MmMxOS42MSA5LjkyIDM2LjI1IDEzLjMxIDQ5Ljg1IDEzLjMxYTc1LjQ0IDc1LjQ0IDAgMCAwIDE3LjY0LTIuMDJsMTAuODMgMThaXCIvPjwvc3ZnPidcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudF9wYXRoLnNwbGl0KCc+JylbMV0gPT0gJ0Vjb25vbWljcycpIHtcclxuICAgICAgICBwYXRoSWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIzNiAyMDhhMTIgMTIgMCAwIDEtMTIgMTJIMzJhMTIgMTIgMCAwIDEtMTItMTJWNDhhMTIgMTIgMCAwIDEgMjQgMHY5OWw0My41MS00My41MmExMiAxMiAwIDAgMSAxNyAwTDEyOCAxMjdsNDMtNDNoLTExYTEyIDEyIDAgMCAxIDAtMjRoNDBhMTIgMTIgMCAwIDEgMTIgMTJ2NDBhMTIgMTIgMCAwIDEtMjQgMHYtMTFsLTUxLjUxIDUxLjUyYTEyIDEyIDAgMCAxLTE3IDBMOTYgMTI5bC01MiA1MnYxNWgxODBhMTIgMTIgMCAwIDEgMTIgMTJcIi8+PC9zdmc+J1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50X3BhdGguc3BsaXQoJz4nKVsxXSA9PSAnQ29tYmluZWQnKSB7XHJcbiAgICAgICAgcGF0aEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMTkuMjMgMTU5LjJhMTk2LjY2IDE5Ni42NiAwIDAgMC0xOC0zMS4yYTE5Ni42NiAxOTYuNjYgMCAwIDAgMTgtMzEuMmMxMS44NC0yNi4zMSAxMS42OS00Ny40OC0uNDMtNTkuNnMtMzMuMjktMTIuMjctNTkuNi0uNDNhMTk2LjY2IDE5Ni42NiAwIDAgMC0zMS4yIDE4YTE5Ni42NiAxOTYuNjYgMCAwIDAtMzEuMi0xOGMtMjYuMzEtMTEuODQtNDcuNDgtMTEuNjktNTkuNi40M3MtMTIuMjcgMzMuMjktLjQzIDU5LjZhMTk2LjY2IDE5Ni42NiAwIDAgMCAxOCAzMS4yYTE5Ni42NiAxOTYuNjYgMCAwIDAtMTggMzEuMmMtMTEuODQgMjYuMzEtMTEuNjkgNDcuNDguNDMgNTkuNmM2LjEzIDYuMTMgMTQuNTggOS4yIDI0LjggOS4yYzEwIDAgMjEuNzctMi45MiAzNC43Ni04Ljc3YTE5Ni42NiAxOTYuNjYgMCAwIDAgMzEuMi0xOGExOTYuNjYgMTk2LjY2IDAgMCAwIDMxLjIgMThjMTMgNS44NSAyNC43NCA4Ljc3IDM0Ljc2IDguNzdjMTAuMjYgMCAxOC43MS0zLjA3IDI0Ljg0LTkuMmMxMi4xNi0xMi4xMiAxMi4zMS0zMy4yOS40Ny01OS42bS0xNy40MS0xMDVjNS4yNSA1LjI2IDEuNzkgMjYtMTYgNTMuNzhjLTUuNjEtNi42Ni0xMS42NS0xMy4yNS0xOC4wNy0xOS42N1MxNTQuNyA3NS44MyAxNDggNzAuMjJjMjcuODItMTcuODMgNDguNTYtMjEuMjkgNTMuODItMTYuMDRaTTE3MS4yNCAxMjhhMjg4LjYgMjg4LjYgMCAwIDEtMjAuNTEgMjIuNzNBMjg4LjYgMjg4LjYgMCAwIDEgMTI4IDE3MS4yNGEyODguNiAyODguNiAwIDAgMS0yMi43My0yMC41MUEyODguNiAyODguNiAwIDAgMSA4NC43NiAxMjhBMjk4LjU1IDI5OC41NSAwIDAgMSAxMjggODQuNzZhMjg2LjgzIDI4Ni44MyAwIDAgMSAyMi43MyAyMC41MUEyODYuODMgMjg2LjgzIDAgMCAxIDE3MS4yNCAxMjhNNTQuMTggNTQuMThjMS40Ni0xLjQ1IDQuMS0yLjI0IDcuNzUtMi4yNGM5LjUzIDAgMjUuOTQgNS4zOSA0NiAxOC4yOGMtNi42NiA1LjYxLTEzLjI1IDExLjY1LTE5LjY3IDE4LjA3Uzc1LjgzIDEwMS4zIDcwLjIyIDEwOEM1Mi4zOSA4MC4xOCA0OC45MyA1OS40NCA1NC4xOCA1NC4xOG0wIDE0Ny42NGMtNS4yNS01LjI2LTEuNzktMjYgMTYtNTMuNzhjNS42MSA2LjY2IDExLjY1IDEzLjI1IDE4LjA3IDE5LjY3czEzIDEyLjQ2IDE5LjY3IDE4LjA3Yy0yNy43NCAxNy44My00OC40OCAyMS4yOS01My43NCAxNi4wNG0xNDcuNjQgMGMtNS4yNiA1LjI1LTI2IDEuNzktNTMuNzgtMTZjNi42Ni01LjYxIDEzLjI1LTExLjY1IDE5LjY3LTE4LjA3czEyLjQ2LTEzIDE4LjA3LTE5LjY3YzE3LjgzIDI3Ljc0IDIxLjI5IDQ4LjQ4IDE2LjA0IDUzLjc0TTE0NCAxMjhhMTYgMTYgMCAxIDEtMTYtMTZhMTYgMTYgMCAwIDEgMTYgMTZcIi8+PC9zdmc+J1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwYXRoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXRoLWljb24nKVxyXG5wYXRoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50X3BhdGggIT0gJ2hvbWUnKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVBhdGgoJ2hvbWUnKVxyXG4gICAgICAgICAgICBwYXRoLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIGluRXhhbSA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZU1lbnUoKSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy8gY3JlYXRpbmcgc2lkZSBidXR0b25zIGZvciBvbCBzdWJqZWN0c1xyXG5jb25zdCBzaWRlR3JvdXBPbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlLWdyb3VwLW9sJylcclxuT2JqZWN0LmtleXMob2xTdWJqZWN0c01TKS5mb3JFYWNoKHN1YmplY3QgPT4ge1xyXG4gICAgY29uc3Qgc3ViamVjdEVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oJ29sJywgc3ViamVjdClcclxuICAgIHN1YmplY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLWJ1dHRvbi0ke3N1YmplY3R9YCB8fCBlLnRhcmdldC5pZCA9PSBgc2lkZS1vbC0ke3N1YmplY3R9LXRpdGxlYCkge1xyXG4gICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYG9sPiR7c3ViamVjdH1gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgc2lkZUdyb3VwT2wuYXBwZW5kQ2hpbGQoc3ViamVjdEVsZW1lbnQpXHJcblxyXG4gICAgY29uc3Qgc2lkZVN1YmplY3RZZWFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaWRlLW9sLSR7c3ViamVjdH0teWVhcnNgKVxyXG4gICAgT2JqZWN0LmtleXMob2xTdWJqZWN0c01TW3N1YmplY3RdKS5mb3JFYWNoKHllYXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKCdvbCcsIHN1YmplY3QsIHllYXIpXHJcbiAgICAgICAgeWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn1gIHx8IGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLSR7c3ViamVjdH0tJHt5ZWFyfS10aXRsZWApIHtcclxuICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYG9sPiR7c3ViamVjdH0+JHt5ZWFyfWApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2lkZVN1YmplY3RZZWFycy5hcHBlbmRDaGlsZCh5ZWFyRWxlbWVudClcclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZVllYXJTZXNzaW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaWRlLW9sLSR7c3ViamVjdH0tJHt5ZWFyfS1zZXNzaW9uc2ApXHJcbiAgICAgICAgT2JqZWN0LmtleXMob2xTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdKS5mb3JFYWNoKHNlc3Npb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uRWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbignb2wnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uKVxyXG4gICAgICAgICAgICBzZXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWAgfHwgZS50YXJnZXQuaWQgPT0gYHNpZGUtb2wtJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tdGl0bGVgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYG9sPiR7c3ViamVjdH0+JHt5ZWFyfT4ke3Nlc3Npb259YClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzaWRlWWVhclNlc3Npb25zLmFwcGVuZENoaWxkKHNlc3Npb25FbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2lkZVNlc3Npb25WYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaWRlLW9sLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzYClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMob2xTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKS5mb3JFYWNoKHZhcmlhbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudEVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oJ29sJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbiwgdmFyaWFudClcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gYHNpZGUtb2wtYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH1gIHx8IGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH0tdGl0bGVgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkV4YW0gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn0+JHt2YXJpYW50fWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZVNlc3Npb25WYXJpYW50cy5hcHBlbmRDaGlsZCh2YXJpYW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vIGNyZWF0aW5nIHNpZGUgYnV0dG9ucyBmb3IgYWwgc3ViamVjdHNcclxuY29uc3Qgc2lkZUdyb3VwQWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZS1ncm91cC1hbCcpXHJcbk9iamVjdC5rZXlzKGFsU3ViamVjdHNNUykuZm9yRWFjaChzdWJqZWN0ID0+IHtcclxuICAgIGNvbnN0IHN1YmplY3RFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKCdhbCcsIHN1YmplY3QpXHJcbiAgICBzdWJqZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC1idXR0b24tJHtzdWJqZWN0fWAgfHwgZS50YXJnZXQuaWQgPT0gYHNpZGUtYWwtJHtzdWJqZWN0fS10aXRsZWApIHtcclxuICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9YClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHNpZGVHcm91cEFsLmFwcGVuZENoaWxkKHN1YmplY3RFbGVtZW50KVxyXG5cclxuICAgIGNvbnN0IHNpZGVTdWJqZWN0WWVhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2lkZS1hbC0ke3N1YmplY3R9LXllYXJzYClcclxuICAgIE9iamVjdC5rZXlzKGFsU3ViamVjdHNNU1tzdWJqZWN0XSkuZm9yRWFjaCh5ZWFyID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFyRWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbignYWwnLCBzdWJqZWN0LCB5ZWFyKVxyXG4gICAgICAgIHllYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LXllYXJgIHx8IGUudGFyZ2V0LmlkID09IGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS10aXRsZWApIHtcclxuICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH0+JHt5ZWFyfWApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2lkZVN1YmplY3RZZWFycy5hcHBlbmRDaGlsZCh5ZWFyRWxlbWVudClcclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZVllYXJTZXNzaW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS1zZXNzaW9uc2ApXHJcbiAgICAgICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdKS5mb3JFYWNoKHNlc3Npb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uRWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbignYWwnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uKVxyXG4gICAgICAgICAgICBzZXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGBzaWRlLWFsLWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS15ZWFyYCB8fCBlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS10aXRsZWApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn1gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzaWRlWWVhclNlc3Npb25zLmFwcGVuZENoaWxkKHNlc3Npb25FbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2lkZVNlc3Npb25WYXJpYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaWRlLWFsLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzYClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKS5mb3JFYWNoKHZhcmlhbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudEVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oJ2FsJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbiwgdmFyaWFudClcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gYHNpZGUtYWwtYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LSR7dmFyaWFudH0teWVhcmAgfHwgZS50YXJnZXQuaWQgPT0gYHNpZGUtYWwtJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fS10aXRsZWApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluRXhhbSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufT4ke3ZhcmlhbnR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzaWRlU2Vzc2lvblZhcmlhbnRzLmFwcGVuZENoaWxkKHZhcmlhbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy8gY3JlYXRpbmcgaG9tZSBtZW51XHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVNZW51KCkge1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBob21lLmlkID0gJ2hvbWUnXHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxyXG4gICAgY29uc3Qgb2xUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIG9sVGl0bGUudGV4dENvbnRlbnQgPSAnT0wgU3ViamVjdHMnXHJcbiAgICBob21lLmFwcGVuZENoaWxkKG9sVGl0bGUpXHJcblxyXG4gICAgY29uc3Qgb2xDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBPYmplY3Qua2V5cyhvbFN1YmplY3RzTVMpLmZvckVhY2goc3ViamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3ViamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ29sJywgc3ViamVjdClcclxuICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQoc3ViamVjdEVsZW1lbnQpXHJcbiAgICAgICAgc3ViamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgb2xDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJqZWN0RWxlbWVudClcclxuICAgIH0pXHJcbiAgICBob21lLmFwcGVuZENoaWxkKG9sQ2FyZHNDb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGFsVGl0bGUudGV4dENvbnRlbnQgPSAnQUwgU3ViamVjdHMnXHJcbiAgICBob21lLmFwcGVuZENoaWxkKGFsVGl0bGUpXHJcblxyXG4gICAgY29uc3QgYWxDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVMpLmZvckVhY2goc3ViamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3ViamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ2FsJywgc3ViamVjdClcclxuICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQoc3ViamVjdEVsZW1lbnQpXHJcbiAgICAgICAgc3ViamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYWxDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJqZWN0RWxlbWVudClcclxuICAgIH0pXHJcbiAgICBob21lLmFwcGVuZENoaWxkKGFsQ2FyZHNDb250YWluZXIpXHJcblxyXG4gICAgcmV0dXJuIGhvbWVcclxufVxyXG5cclxuLy8gY3JlYXRpbmcgdGhlIHN1YiBtZW51IGJ1dHRvbnNcclxuZnVuY3Rpb24gQ3JlYXRlU3ViTWVudShsZXZlbCwgc3ViamVjdCwgeWVhciwgc2Vzc2lvbikge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtZW51LmlkID0gYFNlbGVjdCBhICR7c2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/ICd5ZWFycy1tZW51JyA6ICdzZXNzaW9ucy1tZW51JyA6ICd2YXJpYW50cy1tZW51J31gXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3N1Yi1tZW51JylcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgU2VsZWN0IGEgJHtzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gJ3llYXInIDogJ3Nlc3Npb24nIDogJ3ZhcmlhbnQnfWBcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaWYgKGxldmVsLnRvTG93ZXJDYXNlKCkgPT0gJ29sJykge1xyXG4gICAgICAgIGlmIChzZXNzaW9uID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoeWVhciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XSkuZm9yRWFjaCh5ZWFyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ZWFyRWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbignb2wnLCBzdWJqZWN0LCB5ZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZCh5ZWFyRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHllYXJFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXSkuZm9yRWFjaChzZXNzaW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXNzaW9uRWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbignb2wnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZChzZXNzaW9uRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vzc2lvbkVsZW1lbnQpXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXSkuZm9yRWFjaCh2YXJpYW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl1bdmFyaWFudF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKCdvbCcsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUm90YXRpbmdDYXJkKHZhcmlhbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluRXhhbSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYG9sPiR7c3ViamVjdH0+JHt5ZWFyfT4ke3Nlc3Npb259PiR7dmFyaWFudH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhcmlhbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobGV2ZWwudG9Mb3dlckNhc2UoKSA9PSAnYWwnKSB7XHJcbiAgICAgICAgaWYgKHNlc3Npb24gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh5ZWFyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdKS5mb3JFYWNoKHllYXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHllYXJFbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKCdhbCcsIHN1YmplY3QsIHllYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUm90YXRpbmdDYXJkKHllYXJFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHllYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH0+JHt5ZWFyfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoeWVhckVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdKS5mb3JFYWNoKHNlc3Npb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25FbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKCdhbCcsIHN1YmplY3QsIHllYXIsIHNlc3Npb24pXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUm90YXRpbmdDYXJkKHNlc3Npb25FbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH0+JHt5ZWFyfT4ke3Nlc3Npb259YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZXNzaW9uRWxlbWVudClcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dKS5mb3JFYWNoKHZhcmlhbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudEVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ2FsJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbiwgdmFyaWFudClcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQodmFyaWFudEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5FeGFtID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn0+JHt2YXJpYW50fWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQodmFyaWFudEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcilcclxuXHJcbiAgICByZXR1cm4gbWVudVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSb3RhdGluZ0NhcmQoZWxlbWVudENvbnRhaW5lcikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRDb250YWluZXIuY2hpbGRyZW5bMF1cclxuXHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0LCBzY2FsZSAxNTBtcyBlYXNlLCBib3gtc2hhZG93IDE1MG1zIGVhc2VgXHJcbiAgICAgICAgY29uc3QgYVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcm90YXRlQ2FyZChlKVxyXG4gICAgICAgIH0sIDUwKTtcclxuICAgICAgICBjb25zdCBhbm90aGVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgc2NhbGUgMTUwbXMgZWFzZSwgYm94LXNoYWRvdyAxNTBtcyBlYXNlYFxyXG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJvdGF0ZUNhcmQpXHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgZWxlbWVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhVGltZW91dClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFub3RoZXJUaW1lb3V0KVxyXG5cclxuICAgICAgICAgICAgZWxlbWVudENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCByb3RhdGVDYXJkKVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0LCBzY2FsZSAxNTBtcyBlYXNlLCBib3gtc2hhZG93IDE1MG1zIGVhc2VgXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYGBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGVDYXJkKGUpIHtcclxuICAgICAgICBjb25zdCBtb3VzZVBvcyA9IHtcclxuICAgICAgICAgICAgeDogKCgoZS5jbGllbnRYIC0gZWxlbWVudENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54KSAvIGVsZW1lbnRDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiAoNDUgLyAyKSkgLSAoNDUgLyAyKSAvIDIpLFxyXG4gICAgICAgICAgICB5OiAoKChlLmNsaWVudFkgLSBlbGVtZW50Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkpIC8gZWxlbWVudENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKiAoNDUgLyAyKSkgLSAoNDUgLyAyKSAvIDIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHttb3VzZVBvcy54fWRlZykgcm90YXRlWCgkey1tb3VzZVBvcy55fWRlZykgc2NhbGUoMS4wMjUpYFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdWJibGVTaGVldE1lbnUobGV2ZWwsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQpIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbWVudS5pZCA9ICdidWJibGUtc2hlZXQtbWVudSdcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYnViYmxlLXNoZWV0LW1lbnUnKVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1zaGVldC10aXRsZScpXHJcbiAgICB0aXRsZS5pZCA9ICdidWJibGUtc2hlZXQtdGl0bGUnXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdFdmVyeXRoaW5nIGlzIHNldC4gTm93IHlvdSBjYW4gc3RhcnQgc29sdmluZy4nXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKHRpdGxlKVxyXG5cclxuICAgIGNvbnN0IGJ1YmJsZVNoZWV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmlkID0gJ2J1YmJsZS1zaGVldC1jb250YWluZXInXHJcbiAgICBidWJibGVTaGVldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidWJibGUtc2hlZXQtY29udGFpbmVyJylcclxuXHJcbiAgICBsZXQgbW9kZWxBbnN3ZXJzID0gbGV2ZWwgPT0gJ29sJyA/IG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XSA6IGFsU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXVt2YXJpYW50XVxyXG4gICAgdXNlckFuc3dlcnMgPSBBcnJheShtb2RlbEFuc3dlcnMubGVuZ3RoKS5maWxsKCcnKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb25OdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXN0aW9uTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1ib3gnKVxyXG4gICAgICAgIHF1ZXN0aW9uTnVtYmVyLnRleHRDb250ZW50ID0gaSArIDFcclxuICAgICAgICBxdWVzdGlvbk51bWJlci5pZCA9IGBxdWVzdGlvbi0ke2l9LW51bWJlcmBcclxuICAgICAgICBidWJibGVTaGVldENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbk51bWJlcilcclxuXHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb25BID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVzdGlvbkEuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWJveCcpXHJcbiAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1jaG9pY2UnKVxyXG4gICAgICAgIHF1ZXN0aW9uQS50ZXh0Q29udGVudCA9ICdBJ1xyXG4gICAgICAgIHF1ZXN0aW9uQS5pZCA9IGBxdWVzdGlvbi0ke2l9LWFgXHJcbiAgICAgICAgcXVlc3Rpb25BLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVzdGlvbkEuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25DLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkQuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHVzZXJBbnN3ZXJzW2ldID0gJ0EnXHJcbiAgICAgICAgfSlcclxuICAgICAgICBidWJibGVTaGVldENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbkEpXHJcblxyXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlc3Rpb25CLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1ib3gnKVxyXG4gICAgICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QuYWRkKCdidWJibGUtY2hvaWNlJylcclxuICAgICAgICBxdWVzdGlvbkIudGV4dENvbnRlbnQgPSAnQidcclxuICAgICAgICBxdWVzdGlvbkIuaWQgPSBgcXVlc3Rpb24tJHtpfS1iYFxyXG4gICAgICAgIHF1ZXN0aW9uQi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICB1c2VyQW5zd2Vyc1tpXSA9ICdCJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnViYmxlU2hlZXRDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25CKVxyXG5cclxuICAgICAgICBjb25zdCBxdWVzdGlvbkMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QuYWRkKCdidWJibGUtYm94JylcclxuICAgICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob2ljZScpXHJcbiAgICAgICAgcXVlc3Rpb25DLnRleHRDb250ZW50ID0gJ0MnXHJcbiAgICAgICAgcXVlc3Rpb25DLmlkID0gYHF1ZXN0aW9uLSR7aX0tY2BcclxuICAgICAgICBxdWVzdGlvbkMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25CLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgdXNlckFuc3dlcnNbaV0gPSAnQydcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uQylcclxuXHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb25EID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVzdGlvbkQuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWJveCcpXHJcbiAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1jaG9pY2UnKVxyXG4gICAgICAgIHF1ZXN0aW9uRC50ZXh0Q29udGVudCA9ICdEJ1xyXG4gICAgICAgIHF1ZXN0aW9uRC5pZCA9IGBxdWVzdGlvbi0ke2l9LWRgXHJcbiAgICAgICAgcXVlc3Rpb25ELmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVzdGlvbkEuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25DLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkQuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHVzZXJBbnN3ZXJzW2ldID0gJ0QnXHJcbiAgICAgICAgfSlcclxuICAgICAgICBidWJibGVTaGVldENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbkQpXHJcbiAgICB9XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGJ1YmJsZVNoZWV0Q29udGFpbmVyKVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnViYmxlLXNoZWV0LXN1Ym1pdC1idXR0b24nKVxyXG4gICAgc3VibWl0QnV0dG9uLmlkID0gJ2J1YmJsZS1zaGVldC1zdWJtaXQtYnV0dG9uJ1xyXG5cclxuICAgIGNvbnN0IHJldmVhbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICByZXZlYWxCdXR0b24udGV4dENvbnRlbnQgPSAnUmV2ZWFsIGFsbCBhbnN3ZXJzJ1xyXG4gICAgcmV2ZWFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1zaGVldC1yZXZlYWwtYnV0dG9uJylcclxuICAgIHJldmVhbEJ1dHRvbi5pZCA9ICdidWJibGUtc2hlZXQtcmV2ZWFsLWJ1dHRvbidcclxuXHJcbiAgICBjb25zdCBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1hcmsuaWQgPSAnZXhhbS1tYXJrJ1xyXG4gICAgbWFyay5jbGFzc0xpc3QuYWRkKCdleGFtLW1hcmsnKVxyXG4gICAgbWFyay50ZXh0Q29udGVudCA9IGAtIC8gJHttb2RlbEFuc3dlcnMubGVuZ3RofWBcclxuXHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJBbnN3ZXJzLmluY2x1ZGVzKCcnKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVNb2RhbChcclxuICAgICAgICAgICAgICAgICdBcmUgeW91IHN1cmU/JywgLy8gdGl0bGVcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnU2VlbXMgbGlrZSB0aGVyZSBhcmUgc29tZSBxdWVzdGlvbnMgeW91IG1pc3NlZC4gPGJyPiBPbmx5IHRoZSBzb2x2ZWQgcXVlc3Rpb25zIHdpbGwgYmUgZ3JhZGVkLicsXHJcbiAgICAgICAgICAgICAgICBdLCAvLyBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtJyxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3JyZWN0QW5zd2VycyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxBbnN3ZXJzW2ldID09ICdRJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJzKytcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzY291bnRlZFF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tbnVtYmVyYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnd3JvbmctcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ZWRRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0LXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnZGlzY291bnRlZC1xdWVzdGlvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbEFuc3dlcnNbaV0gPT0gdXNlckFuc3dlcnNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0QW5zd2VycysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ycmVjdFF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tbnVtYmVyYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0UXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnd3JvbmctcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0LXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXNlckFuc3dlcnNbaV0gPT0gJycpIHsgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3cm9uZ1F1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tbnVtYmVyYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cm9uZ1F1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QtcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyb25nUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnd3JvbmctcXVlc3Rpb24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3JyZWN0ZWRRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LSR7bW9kZWxBbnN3ZXJzW2ldLnRvTG93ZXJDYXNlKCl9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0ZWRRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0ZWQtcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmsudGV4dENvbnRlbnQgPSBgJHtjb3JyZWN0QW5zd2Vyc30gLyAke21vZGVsQW5zd2Vycy5sZW5ndGh9YFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHsgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNvcnJlY3RBbnN3ZXJzID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbEFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb2RlbEFuc3dlcnNbaV0gPT0gJ1EnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlcnMrK1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudGVkUXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1udW1iZXJgKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ZWRRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd3cm9uZy1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QtcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ZWRRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdkaXNjb3VudGVkLXF1ZXN0aW9uJylcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGVsQW5zd2Vyc1tpXSA9PSB1c2VyQW5zd2Vyc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJzKytcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ycmVjdFF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tbnVtYmVyYClcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0UXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnd3JvbmctcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0LXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXNlckFuc3dlcnNbaV0gPT0gJycpIHsgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3cm9uZ1F1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tbnVtYmVyYClcclxuICAgICAgICAgICAgICAgICAgICB3cm9uZ1F1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QtcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyb25nUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnd3JvbmctcXVlc3Rpb24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3JyZWN0ZWRRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LSR7bW9kZWxBbnN3ZXJzW2ldLnRvTG93ZXJDYXNlKCl9YClcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0ZWRRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0ZWQtcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcmsudGV4dENvbnRlbnQgPSBgJHtjb3JyZWN0QW5zd2Vyc30gLyAke21vZGVsQW5zd2Vycy5sZW5ndGh9YFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV2ZWFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZU1vZGFsKFxyXG4gICAgICAgICAgICAnQXJlIHlvdSBzdXJlPycsIC8vIHRpdGxlXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICdUaGlzIHdpbGwgb25seSBoaWdobGlnaHQgdGhlIGNvcnJlY3QgYW5zd2VycyBhbmQgd2lsbCBub3QgY29ycmVjdCB5b3VyIGFuc3dlcnMuJyxcclxuICAgICAgICAgICAgXSwgLy8gY29udGVudCxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJ0NvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbEFuc3dlcnNbaV0udG9Mb3dlckNhc2UoKSAhPSAncScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcnJlY3RlZFF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tJHttb2RlbEFuc3dlcnNbaV0udG9Mb3dlckNhc2UoKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdGVkUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnY29ycmVjdGVkLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc2NvdW50ZWRRdWVzdGlvbkEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1hYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc2NvdW50ZWRRdWVzdGlvbkIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1iYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc2NvdW50ZWRRdWVzdGlvbkMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1jYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc2NvdW50ZWRRdWVzdGlvbkQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1kYClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkUXVlc3Rpb25BLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3RlZC1kaXNjb3VudGVkLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ZWRRdWVzdGlvbkIuY2xhc3NMaXN0LmFkZCgnY29ycmVjdGVkLWRpc2NvdW50ZWQtcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRlZFF1ZXN0aW9uQy5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0ZWQtZGlzY291bnRlZC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkUXVlc3Rpb25ELmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3RlZC1kaXNjb3VudGVkLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4geyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApXHJcbiAgICB9KVxyXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXHJcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJldmVhbEJ1dHRvbilcclxuXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKG1hcmspXHJcblxyXG4gICAgLy8gcGRmIHZpZXdlclxyXG4gICAgbGV0IHBkZlZpZXdPcGVuZWQgPSBmYWxzZVxyXG4gICAgY29uc3Qgc3dpdGNoVG9QZGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc3dpdGNoVG9QZGYuY2xhc3NMaXN0LmFkZCgnc3dpdGNoLXRvLXBkZicpXHJcbiAgICBzd2l0Y2hUb1BkZi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIwMCAxNjR2OGgxMmExMiAxMiAwIDAgMSAwIDI0aC0xMnYxMmExMiAxMiAwIDAgMS0yNCAwdi01NmExMiAxMiAwIDAgMSAxMi0xMmgzMmExMiAxMiAwIDAgMSAwIDI0Wm0tMTA4IDhhMzIgMzIgMCAwIDEtMzIgMzJoLTR2NGExMiAxMiAwIDAgMS0yNCAwdi01NmExMiAxMiAwIDAgMSAxMi0xMmgxNmEzMiAzMiAwIDAgMSAzMiAzMm0tMjQgMGE4IDggMCAwIDAtOC04aC00djE2aDRhOCA4IDAgMCAwIDgtOG0xMDAgOGE0MCA0MCAwIDAgMS00MCA0MGgtMTZhMTIgMTIgMCAwIDEtMTItMTJ2LTU2YTEyIDEyIDAgMCAxIDEyLTEyaDE2YTQwIDQwIDAgMCAxIDQwIDQwbS0yNCAwYTE2IDE2IDAgMCAwLTE2LTE2aC00djMyaDRhMTYgMTYgMCAwIDAgMTYtMTZNMzYgMTA4VjQwYTIwIDIwIDAgMCAxIDIwLTIwaDk2YTEyIDEyIDAgMCAxIDguNDkgMy41Mmw1NiA1NkExMiAxMiAwIDAgMSAyMjAgODh2MjBhMTIgMTIgMCAwIDEtMjQgMHYtNGgtNDhhMTIgMTIgMCAwIDEtMTItMTJWNDRINjB2NjRhMTIgMTIgMCAwIDEtMjQgMG0xMjQtNTF2MjNoMjNaXCIvPjwvc3ZnPmBcclxuICAgIHN3aXRjaFRvUGRmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICghcGRmVmlld09wZW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBwZGZWaWV3ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBwZGZWaWV3ZXIuaWQgPSAncGRmLXZpZXdlcidcclxuICAgICAgICAgICAgcGRmVmlld2VyLmNsYXNzTGlzdC5hZGQoJ3BkZi12aWV3ZXInKVxyXG5cclxuICAgICAgICAgICAgV2ViVmlld2VyKHtcclxuICAgICAgICAgICAgICAgIGxpY2Vuc2VLZXk6ICdRRm42VTc4VE1mend6RmFtc2lCbCcsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnLi9wZGYtdmlld2VyJywgLy8gcG9pbnQgdG8gd2hlcmUgdGhlIGZpbGVzIHlvdSBjb3BpZWQgYXJlIHNlcnZlZCBmcm9tXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsRG9jOiBgLi9wZGZzLyR7bGV2ZWwudG9VcHBlckNhc2UoKX0tJHtzdWJqZWN0fS8ke3llYXJ9LyR7c2Vzc2lvbiA9PSAncycgPyAnTWF5LUp1bicgOiBzZXNzaW9uID09ICd3JyA/ICdPY3QtTm92JyA6ICdGZWItTWFyJ30vJHtzdWJqZWN0Q29kZVtgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfSR7c3ViamVjdH1gXX1fJHtzZXNzaW9ufSR7TnVtYmVyKHllYXIpIC0gMjAwMH1fcXBfJHtzdWJqZWN0ID09ICdFY29ub21pY3MnID8gMSA6IGxldmVsID09ICdhbCcgPyAxIDogMn0ke051bWJlcih2YXJpYW50KSArIDF9LnBkZmAgLy8gcGF0aCB0byB5b3VyIGRvY3VtZW50XHJcbiAgICAgICAgICAgIH0sIHBkZlZpZXdlcikudGhlbigoaW5zdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLlVJLnNldFRoZW1lKCdkYXJrJyk7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5VSS5kaXNhYmxlRWxlbWVudHMoWyd0b29sYmFyR3JvdXAtRmlsbEFuZFNpZ24nLCAndGhlbWVDaGFuZ2VCdXR0b24nLCAnbGFuZ3VhZ2VCdXR0b24nLCAndG9nZ2xlTm90ZXNCdXR0b24nLCAnc3RpY2t5VG9vbEdyb3VwQnV0dG9uJywgJ3Rvb2xiYXJHcm91cC1JbnNlcnQnLCAnc3RpY2t5VG9vbEJ1dHRvbicsICdwb2x5Z29uQ2xvdWRUb29sR3JvdXBCdXR0b24nXSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBwZGZWaWV3T3BlbmVkID0gdHJ1ZVxyXG4gICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKHBkZlZpZXdlcilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBwZGZWaWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLXZpZXdlcicpXHJcbiAgICAgICAgICAgIHBkZlZpZXdlci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLXZpZXdlcicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKHN3aXRjaFRvUGRmKVxyXG5cclxuICAgIHJldHVybiBtZW51XHJcbn1cclxuXHJcbi8vIGFwcGVuZGluZyBob21lIHRvIG1haW5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcclxubWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lTWVudSgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
}

body {
    color: #E6EDF3;
    background-color: #0D1117;
    min-height: 100dvh;
}

body * {
    font-family: 'Mona Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    margin: 0;
    padding: 0;

    color: #E6EDF3;
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #010409;
    position: relative;
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

header>.content>.credits:hover {
    text-decoration: underline solid 2pt;
}

@media only screen and (max-width: 854px) {
    header {
        justify-content: center;
    }

    header>.title {
        width: fit-content;
        padding-left: 0;
    }

    header>.content {
        display: none;
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
    grid-template-columns: 2rem 2rem 1fr;

    box-shadow: var(--shadow-elevation-medium);
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

.top-bar .active:hover {
    background-color: rgba(231, 238, 243, 0.125);
}

.top-bar .bar {
    background-color: #21262D;
    margin: 0.25rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: large;
    font-weight: 500;
}

.top-bar .bar .path-icon-container {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    width: 3rem;
    height: 1.5rem;
}

.top-bar .bar .path-icon-container .path-icon {
    width: 100%;
    height: 100%;
}

.top-bar .bar .path-icon-container svg {
    width: 100%;
    height: 100%;
}

.top-bar .bar .path {
    display: flex;
}

.top-bar .bar .path div {
    display: flex;
    align-items: center;
}

.top-bar .bar .path div svg {
    display: flex;
    align-items: center;
    width: 3rem;
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

.side-button:hover {
    background-color: #21262D;
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

.side-button-arrow path {
    fill: #E6EDF3;
    transition: fill 100ms ease-in-out;
}

.side-button-arrow:hover path {
    fill: #abafb2;
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

    overflow: auto;
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
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    transition: scale 150ms ease, box-shadow 150ms ease;
    border: #363B42 solid 0.5pt;
    box-shadow: var(--shadow-elevation-medium);
}

.card:hover {
    position: relative;
    z-index: 10;
    scale: 1.025;
    box-shadow: var(--shadow-elevation-high);
}

.card:hover img {
    scale: 1.05;
}

.image-container img {
    width: 100%;
    height: 100%;
    position: absolute;
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

.bubble-choice:hover {
    cursor: pointer;
    background-color: #21262D;
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

.bubble-sheet-menu button:hover {
    cursor: pointer;
    background-color: #1c6b2b;
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

.switch-to-pdf:hover {
    scale: 1.05;
}

.switch-to-pdf svg {
    width: 100%;
    height: 100%;
}

.switch-to-pdf svg path {
    fill: #0D1117;
}

.pdf-viewer {
    width: 100%;
    height: 100%;
}

@keyframes closeMenu {
    from {
        transform: translateY(0);
        opacity: 1;
    }

    to {
        transform: translateY(5rem);
        opacity: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/*#region root/html/body*/\r\n:root {\r\n    --shadow-color: 0deg 0% 0%;\r\n    --shadow-elevation-low: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.1), 0px 0.8px 0.9px -1.2px hsl(var(--shadow-color) / 0.1), 0px 2px 2.3px -2.5px hsl(var(--shadow-color) / 0.1);\r\n    --shadow-elevation-medium: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.11), 0px 1.6px 1.8px -0.8px hsl(var(--shadow-color) / 0.11), 0px 4.1px 4.6px -1.7px hsl(var(--shadow-color) / 0.11), 0px 9.9px 11.1px -2.5px hsl(var(--shadow-color) / 0.11);\r\n    --shadow-elevation-high: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.1), 0px 2.9px 3.3px -0.4px hsl(var(--shadow-color) / 0.1), 0px 5.4px 6.1px -0.7px hsl(var(--shadow-color) / 0.1), 0px 8.9px 10px -1.1px hsl(var(--shadow-color) / 0.1), -0.1px 14.2px 16px -1.4px hsl(var(--shadow-color) / 0.1), -0.1px 22.1px 24.9px -1.8px hsl(var(--shadow-color) / 0.1), -0.1px 33.6px 37.8px -2.1px hsl(var(--shadow-color) / 0.1), -0.2px 49.5px 55.7px -2.5px hsl(var(--shadow-color) / 0.1);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Mona Sans';\r\n    src: url('../media/fonts/Mona Sans/Mona-Sans.ttf');\r\n}\r\n\r\nhtml,\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    color: #E6EDF3;\r\n    background-color: #0D1117;\r\n    min-height: 100dvh;\r\n}\r\n\r\nbody * {\r\n    font-family: 'Mona Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    color: #E6EDF3;\r\n}\r\n\r\na {\r\n    color: #6c96bb;\r\n    text-decoration: underline 1.5pt;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n/*#region header*/\r\nheader {\r\n    width: 100%;\r\n    height: 4rem;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #010409;\r\n    position: relative;\r\n}\r\n\r\nheader>.title {\r\n    width: 60%;\r\n    padding-left: 5%;\r\n    display: flex;\r\n}\r\n\r\nheader>.content {\r\n    width: 30%;\r\n    padding-right: 5%;\r\n    display: flex;\r\n    gap: 10%;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\nheader>.content>.credits {\r\n    width: 7rem;\r\n    height: 5rem;\r\n    background: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\nheader>.content>.credits:hover {\r\n    text-decoration: underline solid 2pt;\r\n}\r\n\r\n@media only screen and (max-width: 854px) {\r\n    header {\r\n        justify-content: center;\r\n    }\r\n\r\n    header>.title {\r\n        width: fit-content;\r\n        padding-left: 0;\r\n    }\r\n\r\n    header>.content {\r\n        display: none;\r\n    }\r\n}\r\n\r\n/*#endregion*/\r\n\r\n/*#region top bar*/\r\n.top-bar {\r\n    height: 3rem;\r\n    background-color: #010409;\r\n    border-bottom: #21262D solid 1pt;\r\n    display: grid;\r\n    padding: 0 1rem 0.75rem 1rem;\r\n    gap: 1rem;\r\n    justify-content: center;\r\n    align-content: center;\r\n    grid-template-columns: 2rem 2rem 1fr;\r\n\r\n    box-shadow: var(--shadow-elevation-medium);\r\n}\r\n\r\n.top-bar button {\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 100%;\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    transition: background-color 200ms ease;\r\n}\r\n\r\n.top-bar button svg path {\r\n    fill: #abafb2;\r\n}\r\n\r\n.top-bar .active {\r\n    cursor: pointer;\r\n}\r\n\r\n.top-bar .active svg path {\r\n    fill: #E6EDF3;\r\n}\r\n\r\n.top-bar .active:hover {\r\n    background-color: rgba(231, 238, 243, 0.125);\r\n}\r\n\r\n.top-bar .bar {\r\n    background-color: #21262D;\r\n    margin: 0.25rem;\r\n    border-radius: 0.5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.25rem;\r\n    font-size: large;\r\n    font-weight: 500;\r\n}\r\n\r\n.top-bar .bar .path-icon-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 0.5rem;\r\n    width: 3rem;\r\n    height: 1.5rem;\r\n}\r\n\r\n.top-bar .bar .path-icon-container .path-icon {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.top-bar .bar .path-icon-container svg {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.top-bar .bar .path {\r\n    display: flex;\r\n}\r\n\r\n.top-bar .bar .path div {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.top-bar .bar .path div svg {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 3rem;\r\n    height: 1.5rem;\r\n}\r\n\r\n.top-bar .bar .path-arrow {\r\n    font-size: 24pt;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n.main-section {\r\n    display: flex;\r\n}\r\n\r\n/*#region side panel*/\r\n.side-panel {\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n\r\n    padding: 1rem 1rem 8rem 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    width: 15rem;\r\n    height: calc(100dvh - 16.75rem - 1pt);\r\n    overflow: auto;\r\n\r\n    background-color: #010409;\r\n    border-right: #21262D solid 1pt;\r\n\r\n    z-index: 9;\r\n    position: relative;\r\n}\r\n\r\n.side-panel::-webkit-scrollbar {\r\n    width: 0.5rem;\r\n}\r\n\r\n.side-panel::-webkit-scrollbar-thumb {\r\n    background-color: #21262D;\r\n    border-radius: 0.125rem;\r\n}\r\n\r\n.side-panel::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.side-group-title {\r\n    font-size: larger;\r\n    font-weight: 700;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n.side-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.side-button svg {\r\n    min-width: 1.5rem;\r\n    max-width: 1.5rem;\r\n}\r\n\r\n.side-button {\r\n    cursor: pointer;\r\n    height: 1.25rem;\r\n    padding: 0.5rem 1rem;\r\n    border-radius: 0.5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    transition: background-color 100ms ease;\r\n}\r\n\r\n.side-button:hover {\r\n    background-color: #21262D;\r\n}\r\n\r\n.side-button-year {\r\n    margin-left: 1rem;\r\n}\r\n\r\n.side-button-session {\r\n    margin-left: 2rem;\r\n}\r\n\r\n.side-button-variant {\r\n    padding: 0.5rem 1rem 0.5rem 2.5rem;\r\n    margin-left: 3rem;\r\n}\r\n\r\n.side-container {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    transition: grid-template-rows 250ms ease;\r\n}\r\n\r\n.collapsed {\r\n    grid-template-rows: 0fr;\r\n}\r\n\r\n.side-group {\r\n    overflow: hidden;\r\n}\r\n\r\n.side-button-arrow path {\r\n    fill: #E6EDF3;\r\n    transition: fill 100ms ease-in-out;\r\n}\r\n\r\n.side-button-arrow:hover path {\r\n    fill: #abafb2;\r\n}\r\n\r\n.side-panel .credits {\r\n    pointer-events: none;\r\n    z-index: 1;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 16.5rem;\r\n    height: 7rem;\r\n    display: flex;\r\n    align-items: end;\r\n    justify-content: center;\r\n    gap: 0.25rem;\r\n\r\n    /* margin-top: auto;\r\n    text-align: center; */\r\n}\r\n\r\n.side-panel .credits div {\r\n    pointer-events: all;\r\n    width: 100%;\r\n    padding-top: 2rem;\r\n    padding-bottom: 1.5rem;\r\n    text-align: center;\r\n    font-weight: 550;\r\n    font-size: 14pt;\r\n}\r\n\r\n.side-panel .credits::before {\r\n    backdrop-filter: blur(10px);\r\n    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 100%);\r\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%);\r\n    z-index: -1;\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n/*#endregion*/\r\n\r\n.main {\r\n    width: calc(100% - 17rem);\r\n    height: calc(100dvh - 7.75rem - 1pt);\r\n\r\n    overflow: auto;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n    width: 0.5rem;\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n    background-color: #21262D;\r\n    border-radius: 0.125rem;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.home,\r\n.sub-menu {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.home>h2,\r\n.sub-menu>h2 {\r\n    margin: 1.5rem 0 0 1.5rem;\r\n}\r\n\r\n.home>div,\r\n.sub-menu>div {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.card-container {\r\n    margin: 2.5rem;\r\n    width: 15rem;\r\n    height: 15rem;\r\n    perspective: 600px;\r\n}\r\n\r\n.card {\r\n    cursor: pointer;\r\n    width: 15rem;\r\n    height: 15rem;\r\n    border-radius: 1rem;\r\n    overflow: hidden;\r\n    position: relative;\r\n    transition: scale 150ms ease, box-shadow 150ms ease;\r\n    border: #363B42 solid 0.5pt;\r\n    box-shadow: var(--shadow-elevation-medium);\r\n}\r\n\r\n.card:hover {\r\n    position: relative;\r\n    z-index: 10;\r\n    scale: 1.025;\r\n    box-shadow: var(--shadow-elevation-high);\r\n}\r\n\r\n.card:hover img {\r\n    scale: 1.05;\r\n}\r\n\r\n.image-container img {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    object-fit: cover;\r\n    transition: scale 150ms ease-in-out;\r\n}\r\n\r\n.image-container::before {\r\n    pointer-events: none;\r\n    content: '';\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.75));\r\n}\r\n\r\n.card-title {\r\n    pointer-events: none;\r\n    z-index: 1;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    left: 10%;\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.bubble-sheet-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: relative;\r\n\r\n    padding: 1rem 0 2rem 0;\r\n}\r\n\r\n.bubble-sheet-title {\r\n    padding: 2rem;\r\n    font-size: x-large;\r\n    font-weight: 600;\r\n}\r\n\r\n.bubble-sheet-container {\r\n    width: 80%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n    padding: 1rem;\r\n}\r\n\r\n.bubble-sheet-container div {\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1.5rem 1rem;\r\n    border: #363B42 solid 0.25pt;\r\n    transition: background-color 100ms ease;\r\n}\r\n\r\n.bubble-chosen {\r\n    background-color: #5E656E;\r\n}\r\n\r\n.bubble-choice:hover {\r\n    cursor: pointer;\r\n    background-color: #21262D;\r\n}\r\n\r\n.bubble-sheet-menu button {\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n    padding: 1.5rem;\r\n    margin: 1rem;\r\n    border-radius: 1rem;\r\n    background-color: #238636;\r\n    border: none;\r\n    box-shadow: var(--shadow-elevation-medium);\r\n    transition: background-color 100ms ease;\r\n}\r\n\r\n.bubble-sheet-menu button:hover {\r\n    cursor: pointer;\r\n    background-color: #1c6b2b;\r\n}\r\n\r\n.bubble-sheet-menu .exam-mark {\r\n    margin: 1rem 0;\r\n    padding: 2.5rem;\r\n    border-radius: 1rem;\r\n    background-color: #E6EDF3;\r\n    color: #0D1117;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.correct-question {\r\n    background-color: #238636;\r\n}\r\n\r\n.wrong-question {\r\n    background-color: #862323;\r\n}\r\n\r\n.corrected-question {\r\n    position: relative;\r\n}\r\n\r\n.corrected-question::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    border: #E6EDF3 solid 0.25rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.switch-to-pdf {\r\n    position: fixed;\r\n    bottom: 1rem;\r\n    right: 1rem;\r\n    padding: 1rem;\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n\r\n    cursor: pointer;\r\n    background-color: #E6EDF3;\r\n    border-radius: 100%;\r\n    box-shadow: var(--shadow-elevation-medium);\r\n    transition: scale 150ms ease;\r\n}\r\n\r\n.switch-to-pdf:hover {\r\n    scale: 1.05;\r\n}\r\n\r\n.switch-to-pdf svg {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.switch-to-pdf svg path {\r\n    fill: #0D1117;\r\n}\r\n\r\n.pdf-viewer {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n@keyframes closeMenu {\r\n    from {\r\n        transform: translateY(0);\r\n        opacity: 1;\r\n    }\r\n\r\n    to {\r\n        transform: translateY(5rem);\r\n        opacity: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/media/fonts/Mona Sans/Mona-Sans.ttf":
/*!*************************************************!*\
  !*** ./src/media/fonts/Mona Sans/Mona-Sans.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "16d953e2d42c311318e8.ttf";

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

function updatePathElement(createSheet) {
    const path = document.getElementById('path')
    const pathText = current_path.split('>')
    main.innerHTML = ''
    if (pathText.length == 5) {
        path.innerHTML = ''
        path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`))
        path.appendChild(createPathElement(pathText[2]))
        path.appendChild(createPathElement(pathText[3] == 'm' ? 'Feb / Mar' : pathText[3] == 's' ? 'May / Jun' : 'Oct / Nov'))
        path.appendChild(createPathElement(`Variant ${Number(pathText[4]) + 1}`, true))
        if (createSheet) {
            inExam = true
            main.appendChild(createBubbleSheetMenu(pathText[0], pathText[1], pathText[2], pathText[3], pathText[4]))
        }
    } else if (pathText.length == 4) {
        path.innerHTML = ''
        path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`))
        path.appendChild(createPathElement(pathText[2]))
        path.appendChild(createPathElement(pathText[3] == 'm' ? 'Feb / Mar' : pathText[3] == 's' ? 'May / Jun' : 'Oct / Nov'))
        main.appendChild(CreateSubMenu(pathText[0], pathText[1], pathText[2], pathText[3]))
    } else if (pathText.length == 3) {
        path.innerHTML = ''
        path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`))
        path.appendChild(createPathElement(pathText[2]))
        main.appendChild(CreateSubMenu(pathText[0], pathText[1], pathText[2]))
    } else if (pathText.length == 2) {
        path.innerHTML = ''
        path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`))
        main.appendChild(CreateSubMenu(pathText[0], pathText[1]))
    } else if (pathText.length <= 1) {
        path.innerHTML = ''
        main.appendChild(createHomeMenu())
    }
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

function createPathElement(title, last) {
    const element = document.createElement('div')

    const pathElement = document.createElement('div')
    pathElement.textContent = title
    element.appendChild(pathElement)

    if (!last) {
        const arrowElement = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowElement.classList.add('side-button-arrow'); arrowElement.setAttribute('width', '32'); arrowElement.setAttribute('height', '32'); arrowElement.setAttribute('viewBox', '0 0 256 256'); arrowElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowElement.innerHTML = '                    <path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17" />'
        element.appendChild(arrowElement)
    }

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


// creating side buttons for ol subjects
const sideGroupOl = document.getElementById('side-group-ol')
Object.keys(_json_OL_subjects_ms_json__WEBPACK_IMPORTED_MODULE_1__).forEach(subject => {
    const subjectElement = (0,_generateElements_js__WEBPACK_IMPORTED_MODULE_3__.generateSideButton)('ol', subject)
    subjectElement.addEventListener('click', e => {
        if (e.target.id == `side-ol-button-${subject}` || e.target.id == `side-ol-${subject}-title`) {
            navConfirm(() => {
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('ol', subject))
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
                    main.innerHTML = ''
                    main.appendChild(CreateSubMenu('ol', subject, year))
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
                        main.innerHTML = ''
                        main.appendChild(CreateSubMenu('ol', subject, year, session))
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
                                main.innerHTML = ``
                                changePath(`ol>${subject}>${year}>${session}>${variant}`)
                                main.appendChild(createBubbleSheetMenu('ol', subject, year, session, variant))
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
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('al', subject))
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
                    main.innerHTML = ''
                    main.appendChild(CreateSubMenu('al', subject, year))
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
                        main.innerHTML = ''
                        main.appendChild(CreateSubMenu('al', subject, year, session))
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
                                main.innerHTML = ``
                                changePath(`al>${subject}>${year}>${session}>${variant}`)
                                main.appendChild(createBubbleSheetMenu('al', subject, year, session, variant))
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
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('ol', subject))
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
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('al', subject))
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
                            main.innerHTML = ''
                            main.appendChild(CreateSubMenu('ol', subject, year))
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
                            main.innerHTML = ''
                            main.appendChild(CreateSubMenu('ol', subject, year, session))
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
                            main.innerHTML = ``
                            changePath(`ol>${subject}>${year}>${session}>${variant}`)
                            main.appendChild(createBubbleSheetMenu('ol', subject, year, session, variant))
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
                            main.innerHTML = ''
                            main.appendChild(CreateSubMenu('al', subject, year))
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
                            main.innerHTML = ''
                            main.appendChild(CreateSubMenu('al', subject, year, session))
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
                            main.innerHTML = `${level} > ${subject} > ${year} > ${session} > ${variant + 1}`
                            changePath(`al>${subject}>${year}>${session}>${variant}`)
                            main.appendChild(createBubbleSheetMenu('al', subject, year, session, variant))
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

// pdf viewer
const pdfViewer = document.createElement('div')
pdfViewer.id = 'pdf-viewer'
pdfViewer.classList.add('pdf-viewer')

;
_pdftron_pdfjs_express__WEBPACK_IMPORTED_MODULE_5___default()({
    licenseKey: 'QFn6U78TMfzwzFamsiBl',
    path: './pdf-viewer', // point to where the files you copied are served from
    initialDoc: './pdfs/0620_w23_qp_43.pdf' // path to your document
}, pdfViewer).then((instance) => {
    instance.UI.setTheme('dark');
    instance.UI.disableElements(['toolbarGroup-FillAndSign', 'themeChangeButton', 'languageButton', 'toggleNotesButton']);
})

function createBubbleSheetMenu(level, subject, year, session, variant) {
    const menu = document.createElement('div')
    menu.id = 'bubble-sheet-menu'
    menu.classList.add('bubble-sheet-menu')

    const title = document.createElement('div')
    title.classList.add('bubble-sheet-title')
    title.id = 'bubble-sheet-title'
    title.textContent = 'K start the exam ya nigger'
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
                            if (modelAnswers[i] == userAnswers[i]) {
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
                if (modelAnswers[i] == userAnswers[i]) {
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
                        const correctedQuestion = document.getElementById(`question-${i}-${modelAnswers[i].toLowerCase()}`)
                        correctedQuestion.classList.add('corrected-question')
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

    const switchToPdf = document.createElement('div')
    switchToPdf.classList.add('switch-to-pdf')
    switchToPdf.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M200 164v8h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24Zm-108 8a32 32 0 0 1-32 32h-4v4a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h16a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8h-4v16h4a8 8 0 0 0 8-8m100 8a40 40 0 0 1-40 40h-16a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h16a40 40 0 0 1 40 40m-24 0a16 16 0 0 0-16-16h-4v32h4a16 16 0 0 0 16-16M36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-51v23h23Z"/></svg>`
    menu.appendChild(switchToPdf)

    return menu
}

// appending home to main
const main = document.getElementById('main')
main.appendChild(createHomeMenu())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0ZBQW9GLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSywyQ0FBMkMsMkJBQTJCLGVBQWUsa0JBQWtCLGlCQUFpQixnQkFBZ0IsMEJBQTBCLGdDQUFnQyw0QkFBNEIsS0FBSyxnQkFBZ0IsMkJBQTJCLHFCQUFxQixzQkFBc0Isa0NBQWtDLHVCQUF1Qiw0QkFBNEIsMEJBQTBCLCtCQUErQixnQ0FBZ0MsNEJBQTRCLGtCQUFrQixzREFBc0QsS0FBSyxpQ0FBaUMsMkJBQTJCLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0Isc0JBQXNCLDRCQUE0Qix1Q0FBdUMsa0JBQWtCLEtBQUsseUNBQXlDLGdDQUFnQyxrQkFBa0IsS0FBSyxnREFBZ0Qsd0JBQXdCLDRCQUE0Qiw4QkFBOEIsa0NBQWtDLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLDBCQUEwQixLQUFLLHlDQUF5QyxxQkFBcUIsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLDZCQUE2QiwwQkFBMEIsS0FBSyx1QkFBdUIsd0JBQXdCLEtBQUssbUJBQW1CLDJCQUEyQixvQkFBb0IsZUFBZSxrQkFBa0IsaUJBQWlCLGdCQUFnQiw2Q0FBNkMsNkNBQTZDLEtBQUssMkJBQTJCLGNBQWMsdUJBQXVCLFNBQVMsZ0JBQWdCLHVCQUF1QixTQUFTLEtBQUssMkJBQTJCLGNBQWMscUJBQXFCLFNBQVMsZ0JBQWdCLHFCQUFxQixTQUFTLEtBQUssOENBQThDLHdCQUF3Qix3QkFBd0IsMEJBQTBCLGdDQUFnQywyQ0FBMkMsbUNBQW1DLHNCQUFzQixTQUFTLEtBQUssbUJBQW1CO0FBQ2xxRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0h2QztBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SkFBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxjQUFjLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUss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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsRUFBRTtBQUNsRjtBQUNBO0FBQ0Esa0JBQWtCLG1DQUFtQztBQUNyRCw4RUFBOEUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsRUFBRSxHQUFHLDhCQUE4QjtBQUNySDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCLElBQUksb0JBQW9CO0FBQzFFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLHNEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RCxzRkFBc0YsRUFBRSxHQUFHLDhCQUE4QjtBQUN6SDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9AcGRmdHJvbi9wZGZqcy1leHByZXNzL3dlYnZpZXdlci5taW4uanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL3NyYy9jc3MvbW9kYWwuY3NzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL3NyYy9jc3MvbW9kYWwuY3NzP2YzODEiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vc3JjL2pzL2dlbmVyYXRlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL3NyYy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9zcmMvanMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgbj10KCk7Zm9yKHZhciBvIGluIG4pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109bltvXX19KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihvKXtpZih0W29dKXJldHVybiB0W29dLmV4cG9ydHM7dmFyIGk9dFtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsbiksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxvKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgaSBpbiBlKW4uZChvLGksZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxpKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCIvXCIsbihuLnM9MSl9KFtmdW5jdGlvbihlLHQpe3ZhciBuO249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKTt0cnl7bj1ufHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKGUpe1wib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJihuPXdpbmRvdyl9ZS5leHBvcnRzPW59LGZ1bmN0aW9uKGUsdCxuKXtuKDIpLGUuZXhwb3J0cz1uKDYpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKG8saSl7dmFyIHIsYTtmdW5jdGlvbiBzKGUpe3JldHVybihzPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX0hZnVuY3Rpb24obyxpKXtcIm9iamVjdFwiPT1zKHQpJiZ2b2lkIDAhPT1lP2koKTp2b2lkIDA9PT0oYT1cImZ1bmN0aW9uXCI9PXR5cGVvZihyPWkpP3IuY2FsbCh0LG4sdCxlKTpyKXx8KGUuZXhwb3J0cz1hKX0oMCwoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbigoZnVuY3Rpb24obil7cmV0dXJuIHQucmVzb2x2ZShlKCkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIG59KSl9KSwoZnVuY3Rpb24obil7cmV0dXJuIHQucmVzb2x2ZShlKCkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIHQucmVqZWN0KG4pfSkpfSkpfWZ1bmN0aW9uIHQoKXt9ZnVuY3Rpb24gbihlKXtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3XCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBhIGZ1bmN0aW9uXCIpO3RoaXMuX3N0YXRlPTAsdGhpcy5faGFuZGxlZD0hMSx0aGlzLl92YWx1ZT12b2lkIDAsdGhpcy5fZGVmZXJyZWRzPVtdLGQoZSx0aGlzKX1mdW5jdGlvbiByKGUsdCl7Zm9yKDszPT09ZS5fc3RhdGU7KWU9ZS5fdmFsdWU7MCE9PWUuX3N0YXRlPyhlLl9oYW5kbGVkPSEwLG4uX2ltbWVkaWF0ZUZuKChmdW5jdGlvbigpe3ZhciBuPTE9PT1lLl9zdGF0ZT90Lm9uRnVsZmlsbGVkOnQub25SZWplY3RlZDtpZihudWxsIT09bil7dmFyIG87dHJ5e289bihlLl92YWx1ZSl9Y2F0Y2goZSl7cmV0dXJuIHZvaWQgYyh0LnByb21pc2UsZSl9YSh0LnByb21pc2Usbyl9ZWxzZSgxPT09ZS5fc3RhdGU/YTpjKSh0LnByb21pc2UsZS5fdmFsdWUpfSkpKTplLl9kZWZlcnJlZHMucHVzaCh0KX1mdW5jdGlvbiBhKGUsdCl7dHJ5e2lmKHQ9PT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKTtpZih0JiYoXCJvYmplY3RcIj09cyh0KXx8XCJmdW5jdGlvblwiPT10eXBlb2YgdCkpe3ZhciBvPXQudGhlbjtpZih0IGluc3RhbmNlb2YgbilyZXR1cm4gZS5fc3RhdGU9MyxlLl92YWx1ZT10LHZvaWQgbChlKTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBvKXJldHVybiB2b2lkIGQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19KG8sdCksZSl9ZS5fc3RhdGU9MSxlLl92YWx1ZT10LGwoZSl9Y2F0Y2godCl7YyhlLHQpfX1mdW5jdGlvbiBjKGUsdCl7ZS5fc3RhdGU9MixlLl92YWx1ZT10LGwoZSl9ZnVuY3Rpb24gbChlKXsyPT09ZS5fc3RhdGUmJjA9PT1lLl9kZWZlcnJlZHMubGVuZ3RoJiZuLl9pbW1lZGlhdGVGbigoZnVuY3Rpb24oKXtlLl9oYW5kbGVkfHxuLl91bmhhbmRsZWRSZWplY3Rpb25GbihlLl92YWx1ZSl9KSk7Zm9yKHZhciB0PTAsbz1lLl9kZWZlcnJlZHMubGVuZ3RoO28+dDt0KyspcihlLGUuX2RlZmVycmVkc1t0XSk7ZS5fZGVmZXJyZWRzPW51bGx9ZnVuY3Rpb24gZChlLHQpe3ZhciBuPSExO3RyeXtlKChmdW5jdGlvbihlKXtufHwobj0hMCxhKHQsZSkpfSksKGZ1bmN0aW9uKGUpe258fChuPSEwLGModCxlKSl9KSl9Y2F0Y2goZSl7aWYobilyZXR1cm47bj0hMCxjKHQsZSl9fXZhciB1PXNldFRpbWVvdXQ7bi5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGUpfSxuLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUsbil7dmFyIG89bmV3IHRoaXMuY29uc3RydWN0b3IodCk7cmV0dXJuIHIodGhpcyxuZXcgZnVuY3Rpb24oZSx0LG4pe3RoaXMub25GdWxmaWxsZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOm51bGwsdGhpcy5vblJlamVjdGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsLHRoaXMucHJvbWlzZT1ufShlLG4sbykpLG99LG4ucHJvdG90eXBlLmZpbmFsbHk9ZSxuLmFsbD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IG4oKGZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gbyhlLGEpe3RyeXtpZihhJiYoXCJvYmplY3RcIj09cyhhKXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkpe3ZhciBjPWEudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBjKXJldHVybiB2b2lkIGMuY2FsbChhLChmdW5jdGlvbih0KXtvKGUsdCl9KSxuKX1pW2VdPWEsMD09LS1yJiZ0KGkpfWNhdGNoKGUpe24oZSl9fWlmKCFlfHx2b2lkIDA9PT1lLmxlbmd0aCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheVwiKTt2YXIgaT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKTtpZigwPT09aS5sZW5ndGgpcmV0dXJuIHQoW10pO2Zvcih2YXIgcj1pLmxlbmd0aCxhPTA7aS5sZW5ndGg+YTthKyspbyhhLGlbYV0pfSkpfSxuLnJlc29sdmU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXMoZSkmJmUuY29uc3RydWN0b3I9PT1uP2U6bmV3IG4oKGZ1bmN0aW9uKHQpe3QoZSl9KSl9LG4ucmVqZWN0PWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgbigoZnVuY3Rpb24odCxuKXtuKGUpfSkpfSxuLnJhY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBuKChmdW5jdGlvbih0LG4pe2Zvcih2YXIgbz0wLGk9ZS5sZW5ndGg7aT5vO28rKyllW29dLnRoZW4odCxuKX0pKX0sbi5faW1tZWRpYXRlRm49XCJmdW5jdGlvblwiPT10eXBlb2YgbyYmZnVuY3Rpb24oZSl7byhlKX18fGZ1bmN0aW9uKGUpe3UoZSwwKX0sbi5fdW5oYW5kbGVkUmVqZWN0aW9uRm49ZnVuY3Rpb24oZSl7dm9pZCAwIT09Y29uc29sZSYmY29uc29sZSYmY29uc29sZS53YXJuKFwiUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOlwiLGUpfTt2YXIgZj1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmKXJldHVybiBzZWxmO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpcmV0dXJuIHdpbmRvdztpZih2b2lkIDAhPT1pKXJldHVybiBpO3Rocm93IEVycm9yKFwidW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0XCIpfSgpO1wiUHJvbWlzZVwiaW4gZj9mLlByb21pc2UucHJvdG90eXBlLmZpbmFsbHl8fChmLlByb21pc2UucHJvdG90eXBlLmZpbmFsbHk9ZSk6Zi5Qcm9taXNlPW59KSl9KS5jYWxsKHRoaXMsbigzKS5zZXRJbW1lZGlhdGUsbigwKSl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSl7dmFyIG89dm9pZCAwIT09ZSYmZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGZ8fHdpbmRvdyxpPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtmdW5jdGlvbiByKGUsdCl7dGhpcy5faWQ9ZSx0aGlzLl9jbGVhckZuPXR9dC5zZXRUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKGkuY2FsbChzZXRUaW1lb3V0LG8sYXJndW1lbnRzKSxjbGVhclRpbWVvdXQpfSx0LnNldEludGVydmFsPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKGkuY2FsbChzZXRJbnRlcnZhbCxvLGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LHQuY2xlYXJUaW1lb3V0PXQuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbihlKXtlJiZlLmNsb3NlKCl9LHIucHJvdG90eXBlLnVucmVmPXIucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30sci5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwobyx0aGlzLl9pZCl9LHQuZW5yb2xsPWZ1bmN0aW9uKGUsdCl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PXR9LHQudW5lbnJvbGw9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PS0xfSx0Ll91bnJlZkFjdGl2ZT10LmFjdGl2ZT1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCk7dmFyIHQ9ZS5faWRsZVRpbWVvdXQ7dD49MCYmKGUuX2lkbGVUaW1lb3V0SWQ9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtlLl9vblRpbWVvdXQmJmUuX29uVGltZW91dCgpfSksdCkpfSxuKDQpLHQuc2V0SW1tZWRpYXRlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLnNldEltbWVkaWF0ZXx8dm9pZCAwIT09ZSYmZS5zZXRJbW1lZGlhdGV8fHRoaXMmJnRoaXMuc2V0SW1tZWRpYXRlLHQuY2xlYXJJbW1lZGlhdGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuY2xlYXJJbW1lZGlhdGV8fHZvaWQgMCE9PWUmJmUuY2xlYXJJbW1lZGlhdGV8fHRoaXMmJnRoaXMuY2xlYXJJbW1lZGlhdGV9KS5jYWxsKHRoaXMsbigwKSl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSxuKXtcInVzZSBzdHJpY3RcIjtpZighZS5zZXRJbW1lZGlhdGUpe3ZhciBvLGkscixhLHMsYz0xLGw9e30sZD0hMSx1PWUuZG9jdW1lbnQsZj1PYmplY3QuZ2V0UHJvdG90eXBlT2YmJk9iamVjdC5nZXRQcm90b3R5cGVPZihlKTtmPWYmJmYuc2V0VGltZW91dD9mOmUsXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKGUucHJvY2Vzcyk/bz1mdW5jdGlvbihlKXt0Lm5leHRUaWNrKChmdW5jdGlvbigpe2goZSl9KSl9OiFmdW5jdGlvbigpe2lmKGUucG9zdE1lc3NhZ2UmJiFlLmltcG9ydFNjcmlwdHMpe3ZhciB0PSEwLG49ZS5vbm1lc3NhZ2U7cmV0dXJuIGUub25tZXNzYWdlPWZ1bmN0aW9uKCl7dD0hMX0sZS5wb3N0TWVzc2FnZShcIlwiLFwiKlwiKSxlLm9ubWVzc2FnZT1uLHR9fSgpP2UuTWVzc2FnZUNoYW5uZWw/KChyPW5ldyBNZXNzYWdlQ2hhbm5lbCkucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKGUpe2goZS5kYXRhKX0sbz1mdW5jdGlvbihlKXtyLnBvcnQyLnBvc3RNZXNzYWdlKGUpfSk6dSYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIHUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT8oaT11LmRvY3VtZW50RWxlbWVudCxvPWZ1bmN0aW9uKGUpe3ZhciB0PXUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2goZSksdC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxpLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH0saS5hcHBlbmRDaGlsZCh0KX0pOm89ZnVuY3Rpb24oZSl7c2V0VGltZW91dChoLDAsZSl9OihhPVwic2V0SW1tZWRpYXRlJFwiK01hdGgucmFuZG9tKCkrXCIkXCIscz1mdW5jdGlvbih0KXt0LnNvdXJjZT09PWUmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmRhdGEmJjA9PT10LmRhdGEuaW5kZXhPZihhKSYmaCgrdC5kYXRhLnNsaWNlKGEubGVuZ3RoKSl9LGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscywhMSk6ZS5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLHMpLG89ZnVuY3Rpb24odCl7ZS5wb3N0TWVzc2FnZShhK3QsXCIqXCIpfSksZi5zZXRJbW1lZGlhdGU9ZnVuY3Rpb24oZSl7XCJmdW5jdGlvblwiIT10eXBlb2YgZSYmKGU9bmV3IEZ1bmN0aW9uKFwiXCIrZSkpO2Zvcih2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKSxuPTA7bjx0Lmxlbmd0aDtuKyspdFtuXT1hcmd1bWVudHNbbisxXTt2YXIgaT17Y2FsbGJhY2s6ZSxhcmdzOnR9O3JldHVybiBsW2NdPWksbyhjKSxjKyt9LGYuY2xlYXJJbW1lZGlhdGU9cH1mdW5jdGlvbiBwKGUpe2RlbGV0ZSBsW2VdfWZ1bmN0aW9uIGgoZSl7aWYoZClzZXRUaW1lb3V0KGgsMCxlKTtlbHNle3ZhciB0PWxbZV07aWYodCl7ZD0hMDt0cnl7IWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2FsbGJhY2ssbj1lLmFyZ3M7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6dCgpO2JyZWFrO2Nhc2UgMTp0KG5bMF0pO2JyZWFrO2Nhc2UgMjp0KG5bMF0sblsxXSk7YnJlYWs7Y2FzZSAzOnQoblswXSxuWzFdLG5bMl0pO2JyZWFrO2RlZmF1bHQ6dC5hcHBseSh2b2lkIDAsbil9fSh0KX1maW5hbGx5e3AoZSksZD0hMX19fX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PWU/dGhpczplOnNlbGYpfSkuY2FsbCh0aGlzLG4oMCksbig1KSl9LGZ1bmN0aW9uKGUsdCl7dmFyIG4sbyxpPWUuZXhwb3J0cz17fTtmdW5jdGlvbiByKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBhKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHMoZSl7aWYobj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQoZSwwKTtpZigobj09PXJ8fCFuKSYmc2V0VGltZW91dClyZXR1cm4gbj1zZXRUaW1lb3V0LHNldFRpbWVvdXQoZSwwKTt0cnl7cmV0dXJuIG4oZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIG4uY2FsbCh0aGlzLGUsMCl9fX0hZnVuY3Rpb24oKXt0cnl7bj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6cn1jYXRjaChlKXtuPXJ9dHJ5e289XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDphfWNhdGNoKGUpe289YX19KCk7dmFyIGMsbD1bXSxkPSExLHU9LTE7ZnVuY3Rpb24gZigpe2QmJmMmJihkPSExLGMubGVuZ3RoP2w9Yy5jb25jYXQobCk6dT0tMSxsLmxlbmd0aCYmcCgpKX1mdW5jdGlvbiBwKCl7aWYoIWQpe3ZhciBlPXMoZik7ZD0hMDtmb3IodmFyIHQ9bC5sZW5ndGg7dDspe2ZvcihjPWwsbD1bXTsrK3U8dDspYyYmY1t1XS5ydW4oKTt1PS0xLHQ9bC5sZW5ndGh9Yz1udWxsLGQ9ITEsZnVuY3Rpb24oZSl7aWYobz09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KGUpO2lmKChvPT09YXx8IW8pJiZjbGVhclRpbWVvdXQpcmV0dXJuIG89Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dChlKTt0cnl7byhlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG8uY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiBvLmNhbGwodGhpcyxlKX19fShlKX19ZnVuY3Rpb24gaChlLHQpe3RoaXMuZnVuPWUsdGhpcy5hcnJheT10fWZ1bmN0aW9uIG0oKXt9aS5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO2wucHVzaChuZXcgaChlLHQpKSwxIT09bC5sZW5ndGh8fGR8fHMocCl9LGgucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LGkudGl0bGU9XCJicm93c2VyXCIsaS5icm93c2VyPSEwLGkuZW52PXt9LGkuYXJndj1bXSxpLnZlcnNpb249XCJcIixpLnZlcnNpb25zPXt9LGkub249bSxpLmFkZExpc3RlbmVyPW0saS5vbmNlPW0saS5vZmY9bSxpLnJlbW92ZUxpc3RlbmVyPW0saS5yZW1vdmVBbGxMaXN0ZW5lcnM9bSxpLmVtaXQ9bSxpLnByZXBlbmRMaXN0ZW5lcj1tLGkucHJlcGVuZE9uY2VMaXN0ZW5lcj1tLGkubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfSxpLmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGkuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LGkuY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxpLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKHQpLG4uZCh0LFwiZ2V0SW5zdGFuY2VcIiwoZnVuY3Rpb24oKXtyZXR1cm4gd30pKTt2YXIgbz17QVNNOlwiYXNtXCIsV0FTTTpcImVtc1wiLEpTX1dPUktFUjpcImpzd29ya2VyXCIsVEhSRUFERURfV0FTTTpcIndhc20tdGhyZWFkc1wifTtmdW5jdGlvbiBpKGUsdCl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGV8fCF0KXJldHVybiBlO3ZhciBuPXQuc3Vic3RyKDAsdC5sYXN0SW5kZXhPZihcIi9cIikpO3JldHVybi9eKFxcL3wlMkZ8W2EtejAtOS1dKzopL2kudGVzdChlKT9lOm4rXCIvXCIrZX1mdW5jdGlvbiByKGUsdCl7dmFyIG49T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG89T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobz1vLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxuLnB1c2guYXBwbHkobixvKX1yZXR1cm4gbn1mdW5jdGlvbiBhKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP3IoT2JqZWN0KG4pLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtzKGUsdCxuW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG4pKTpyKE9iamVjdChuKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIHMoZSx0LG4pe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09bixlfXZhciBjPXt9LGw9MDt3aW5kb3cuaXNQZGZqcz0hMCxcInVuZGVmaW5lZFwiPT10eXBlb2YgY29uc29sZSYmKHdpbmRvdy5jb25zb2xlPXtsb2c6ZnVuY3Rpb24oKXt9LHdhcm46ZnVuY3Rpb24oKXt9LGVycm9yOmZ1bmN0aW9uKCl7fX0pO3ZhciBkPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKylmb3IodmFyIHQ9T2JqZWN0LmtleXMoYXJndW1lbnRzW2VdKSxuPTA7bjx0Lmxlbmd0aDtuKyspYXJndW1lbnRzWzBdW3Rbbl1dPWFyZ3VtZW50c1tlXVt0W25dXTtyZXR1cm4gYXJndW1lbnRzWzBdfSx1PWZ1bmN0aW9uKGUpe3ZhciB0PVtdO3JldHVybiBlLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QucHVzaChlKX0pKSx0fSxmPWZ1bmN0aW9uKGUsdCl7dmFyIG47dHJ5e249bmV3IEN1c3RvbUV2ZW50KGUse2RldGFpbDp0LGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pfWNhdGNoKG8peyhuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIikpLmluaXRFdmVudChlLCEwLCEwKSxuLmRldGFpbD10fXJldHVybiBufTt3aW5kb3cuUERGTmV0JiYhYy5za2lwUERGTmV0V2ViVmlld2VyV2FybmluZyYmY29uc29sZS53YXJuKFwiUERGTmV0LmpzIGFuZCBXZWJWaWV3ZXIuanMgaGF2ZSBiZWVuIGluY2x1ZGVkIGluIHRoZSBzYW1lIGNvbnRleHQuIFNlZSBodHRwczovL3d3dy5wZGZ0cm9uLmNvbS9rYl9zYW1lX2NvbnRleHQgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIGNvdWxkIGJlIGFuIGVycm9yIGluIHlvdXIgYXBwbGljYXRpb24uXCIpO3ZhciBwPW5ldyBNYXAsaD1uZXcgTWFwO2MuV2ViVmlld2VyPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztpZihoLmdldCh0KSl0aHJvdyBuZXcgRXJyb3IoXCJUd28gaW5zdGFuY2VzIG9mIFdlYlZpZXdlciB3ZXJlIGNyZWF0ZWQgb24gdGhlIHNhbWUgSFRNTCBlbGVtZW50LiBQbGVhc2UgY3JlYXRlIGEgbmV3IGVsZW1lbnQgZm9yIGVhY2ggaW5zdGFuY2Ugb2YgV2ViVmlld2VyXCIpO2guc2V0KHQsITApO3QuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsKGZ1bmN0aW9uIGUoKXtwLmdldCh0KS5pbnN0YW5jZT1uLmdldENvbXBsZXRlSW5zdGFuY2UoKSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLGUpfSkpLHRoaXMuX3ZhbGlkYXRlT3B0aW9ucyhlKTt2YXIgbz1lLndlYnZpZXdlclNlcnZlclVSTHx8ZS5wZGZ0cm9uU2VydmVyO2UuZnVsbEFQSSYmbyYmKGUuZm9yY2VDbGllbnRTaWRlSW5pdHx8Y29uc29sZS53YXJuKFwiVGhlIGZ1bGxBUEkgYW5kIHdlYnZpZXdlclNlcnZlclVSTCBvcHRpb25zIGhhdmUgYm90aCBiZWVuIHNldCBzbyB0aGUgZm9yY2VDbGllbnRTaWRlSW5pdCBvcHRpb24gaXMgbm93IGVuYWJsZWQuIFRoaXMgbWVhbnMgdGhhdCBXZWJWaWV3ZXIgd2lsbCBzd2l0Y2ggdG8gY2xpZW50IHNpZGUgcmVuZGVyaW5nIGFuZCBwcm9jZXNzaW5nIHRvIGFsbG93IHVzZSBvZiB0aGUgZnVsbCBBUEkuXCIpLGUuZm9yY2VDbGllbnRTaWRlSW5pdD0hMCksdGhpcy5vcHRpb25zPWQoe30sYy5XZWJWaWV3ZXIuT3B0aW9ucyxlKTt2YXIgaT10aGlzLm9wdGlvbnMucGF0aC5sZW5ndGgtMTtpPjAmJlwiL1wiIT09dGhpcy5vcHRpb25zLnBhdGhbaV0mJih0aGlzLm9wdGlvbnMucGF0aCs9XCIvXCIpLHRoaXMub3B0aW9ucy51aVBhdGg9dGhpcy5vcHRpb25zLnBhdGgrdGhpcy5vcHRpb25zLnVpUGF0aCx0fHxjb25zb2xlLmVycm9yKFwiVmlld2VyRWxlbWVudCBpcyBub3QgZGVmaW5lZC4gVGhpcyBtYXkgYmUgY2F1c2VkIGJ5IGNhbGxpbmcgdGhlIFdlYlZpZXdlciBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIERPTSBpcyBsb2FkZWQsIG9yIGFuIGludmFsaWQgc2VsZWN0b3IuIFBsZWFzZSBzZWUgaHR0cDovL3IucGRmdHJvbi5jb20vZ3VpZGVzL3F1aWNrLXN0YXJ0IGZvciBhbiBleGFtcGxlLlwiKSx0aGlzLmVsZW1lbnQ9dCx0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIjt2YXIgcj10aGlzO3RoaXMubWVzc2FnZUhhbmRsZXI9ZnVuY3Rpb24odCl7aWYoXCJyZXF1ZXN0bFwiPT09dC5kYXRhJiZ0LnNvdXJjZSYmdC5zb3VyY2UucG9zdE1lc3NhZ2Uoe3R5cGU6XCJyZXNwb25zZWxcIix2YWx1ZTplLmx8fGUubGljZW5zZUtleX0sXCIqXCIpLFwicmVxdWVzdENvbmZpZ1wiPT09dC5kYXRhLnR5cGUmJnQuZGF0YS5pZD09PXIuaWQmJnQuc291cmNlKXt2YXIgbj1lLmNvbmZpZz9yLl9jb3JyZWN0UmVsYXRpdmVQYXRoKGUuY29uZmlnKTpcIlwiO3Quc291cmNlLnBvc3RNZXNzYWdlKHt0eXBlOlwicmVzcG9uc2VDb25maWdcIix2YWx1ZTpufSxcIipcIil9fSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0aGlzLm1lc3NhZ2VIYW5kbGVyLCExKSx0aGlzLm9wdGlvbnMuYXV0b0NyZWF0ZSYmdGhpcy5jcmVhdGUoKX07dmFyIG09e2xpY2Vuc2VLZXk6dm9pZCAwLGVuYWJsZUF6dXJlV29ya2Fyb3VuZDohMSxpc0FkbWluVXNlcjohMSxpc1JlYWRPbmx5OiExfTtjLldlYlZpZXdlci5wcm90b3R5cGU9e3ZlcnNpb246XCI4LjcuNFwiLGNyZWF0ZTpmdW5jdGlvbigpe2lmKHRoaXMub3B0aW9ucy5pbml0aWFsRG9jKXt2YXIgZT10aGlzLl9jb3JyZWN0UmVsYXRpdmVQYXRoKHRoaXMub3B0aW9ucy5pbml0aWFsRG9jKTtlPWVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShlKSksdGhpcy5vcHRpb25zLmluaXRpYWxEb2M9ZX10aGlzLl9jcmVhdGUoKX0sX2NyZWF0ZTpmdW5jdGlvbigpe3RoaXMuaWQ9KytsLHZvaWQgMD09PXRoaXMuX3RyaWdnZXImJih0aGlzLl90cmlnZ2VyPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZihlLHQpO3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG4pfSk7dmFyIGU9dGhpcy5vcHRpb25zLnR5cGUucmVwbGFjZShcIiBcIixcIlwiKS5zcGxpdChcIixcIik7ZS5sZW5ndGg8MSYmKGVbMF09XCJodG1sNVwiKSx0aGlzLl9jcmVhdGVWaWV3ZXIoZSl9LF92YWxpZGF0ZU9wdGlvbnM6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PU9iamVjdC5rZXlzKGUpLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvIGluIGQoe30sbSxjLldlYlZpZXdlci5PcHRpb25zKXx8Y29uc29sZS53YXJuKFwiXCIuY29uY2F0KG8sXCIgaXMgbm90IGEgdmFsaWQgb3B0aW9uIG5hbWUuIFNlZSBodHRwOi8vci5wZGZ0cm9uLmNvbS9hcGkvb3B0aW9uc19hbmNob3IgZm9yIGFsbCBhdmFpbGFibGUgb3B0aW9ucy5cIikpfXZhciBpPWUud2Vidmlld2VyU2VydmVyVVJMfHxlLnBkZnRyb25TZXJ2ZXI7IWUuZW5hYmxlUmVkYWN0aW9ufHxlLmZ1bGxBUEl8fGl8fGNvbnNvbGUud2FybihcIkZ1bGxBUEkgb3IgV2ViVmlld2VyIFNlcnZlciBpcyBuZWVkZWQgdG8gYXBwbHkgcmVkYWN0aW9uc1wiKX0sX25vdFN1cHBvcnRlZE1vYmlsZTpmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1cIndlYnZpZXdlci1icm93c2VyLXVuc3VwcG9ydGVkXCIsZS50ZXh0Q29udGVudD1cIlBERiBkb2N1bWVudCB2aWV3aW5nIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLlwiLHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlKX0sX2NyZWF0ZVZpZXdlcjpmdW5jdGlvbihlKXt2YXIgdCxuPXRoaXM7aWYobi5zZWxlY3RlZFR5cGU9bnVsbCx0aGlzLmlzTW9iaWxlRGV2aWNlKCkpe2lmKHRoaXMub3B0aW9ucy5kb2N1bWVudFR5cGUmJlwieG9kXCIhPT10aGlzLm9wdGlvbnMuZG9jdW1lbnRUeXBlJiYhdGhpcy5fdGVzdFdlYkFzc2VtYmx5KCkpcmV0dXJuIHZvaWQgdGhpcy5fbm90U3VwcG9ydGVkTW9iaWxlKCk7aWYoZT1BcnJheShcImh0bWw1TW9iaWxlXCIpLG4uc2VsZWN0ZWRUeXBlPVwiaHRtbDVNb2JpbGVcIix0aGlzLm9wdGlvbnMubW9iaWxlUmVkaXJlY3QpcmV0dXJuIHQ9dGhpcy5vcHRpb25zLnVpUGF0aCt0aGlzLl9nZXRIVE1MNU9wdGlvbnNVUkwoKSx2b2lkKHdpbmRvdy5sb2NhdGlvbj10KX1mb3IodmFyIG89ITEsaT0hMSxyPTA7cjxlLmxlbmd0aDtyKyspe2lmKFwiaHRtbDVtb2JpbGVcIj09PWVbcl0udG9Mb3dlckNhc2UoKSl7aWYodGhpcy5vcHRpb25zLmRvY3VtZW50VHlwZSYmXCJ4b2RcIiE9PXRoaXMub3B0aW9ucy5kb2N1bWVudFR5cGUmJiF0aGlzLl90ZXN0V2ViQXNzZW1ibHkoKSljb250aW51ZTtpZihvPSEwLG4uX3Rlc3RIVE1MNSgpKXtpZih0aGlzLm9wdGlvbnMubW9iaWxlUmVkaXJlY3QpcmV0dXJuIG4uc2VsZWN0ZWRUeXBlPVwiaHRtbDVNb2JpbGVcIix0PXRoaXMub3B0aW9ucy51aVBhdGgrdGhpcy5fZ2V0SFRNTDVPcHRpb25zVVJMKCksdm9pZCh3aW5kb3cubG9jYXRpb249dCk7aWYodGhpcy5vcHRpb25zLnhkb21haW5Qcm94eVVybHx8bi5pc1NhbWVPcmlnaW4oZGVjb2RlVVJJQ29tcG9uZW50KG4ub3B0aW9ucy5pbml0aWFsRG9jKSl8fG4uX3Rlc3RDT1JTKCkpe24uc2VsZWN0ZWRUeXBlPVwiaHRtbDVNb2JpbGVcIjticmVha31pPSEwfX1pZihcImh0bWw1XCI9PT1lW3JdLnRvTG93ZXJDYXNlKCkmJihvPSEwLG4uX3Rlc3RIVE1MNSgpKSl7dmFyIGE9bi5pc1NhbWVPcmlnaW4oZGVjb2RlVVJJQ29tcG9uZW50KG4ub3B0aW9ucy5pbml0aWFsRG9jKSk7aWYodGhpcy5vcHRpb25zLnhkb21haW5Qcm94eVVybHx8YXx8bi5fdGVzdENPUlMoKSl7bi5zZWxlY3RlZFR5cGU9XCJodG1sNVwiO2JyZWFrfWk9ITB9fWlmKFwiaHRtbDVcIj09PW4uc2VsZWN0ZWRUeXBlKW4uX2NyZWF0ZUhUTUw1KCk7ZWxzZSBpZihcImh0bWw1TW9iaWxlXCI9PT1uLnNlbGVjdGVkVHlwZSluLl9jcmVhdGVIVE1MNU1vYmlsZSgpO2Vsc2V7dmFyIHM7aWYoaT9zPVwiVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzLiBQbGVhc2UgY29uZmlndXJlIHhkb21haW4gdG8gc3VwcG9ydCBDT1JTLlwiOm8mJihzPVwiUGxlYXNlIHVzZSBhbiBIVE1MNSBjb21wYXRpYmxlIGJyb3dzZXIuXCIpLHMpe3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yy5pZD1cIndlYnZpZXdlci1icm93c2VyLXVuc3VwcG9ydGVkXCIsYy50ZXh0Q29udGVudD1zLG4uZWxlbWVudC5hcHBlbmRDaGlsZChjKX19fSxfdmlld2VyTG9hZGVkOmZ1bmN0aW9uKGUpe3RoaXMuX3RyaWdnZXIoXCJyZWFkeVwiKTt0cnl7dmFyIHQ9ZS5jb250ZW50V2luZG93O2lmKHQucG9zdE1lc3NhZ2Uoe3R5cGU6XCJ2aWV3ZXJMb2FkZWRcIn0sXCIqXCIpLHZvaWQgMCE9PXRoaXMub3B0aW9ucy5lbmNyeXB0aW9uKXt2YXIgbj1kZWNvZGVVUklDb21wb25lbnQodGhpcy5vcHRpb25zLmluaXRpYWxEb2MpO3RoaXMub3B0aW9ucy5pbml0aWFsRG9jJiYobj1KU09OLnBhcnNlKG4pKTt2YXIgbz17ZGVjcnlwdDp0LkNvcmUuRW5jcnlwdGlvbi5kZWNyeXB0LGRlY3J5cHRPcHRpb25zOnRoaXMub3B0aW9ucy5lbmNyeXB0aW9uLGRvY3VtZW50SWQ6dGhpcy5vcHRpb25zLmRvY3VtZW50SWQsZXh0ZW5zaW9uOlwieG9kXCJ9O3RoaXMuZ2V0SW5zdGFuY2UoKS5sb2FkRG9jdW1lbnQobixvKX19Y2F0Y2goZSl7Y29uc29sZS53YXJuKFwiVmlld2VyIGlzIG9uIGEgZGlmZmVyZW50IGRvbWFpbiwgdGhlIHByb21pc2UgZnJvbSBXZWJWaWV3ZXIgZnVuY3Rpb24gaXMgcmVqZWN0ZWQgYW5kIEFQSSBmdW5jdGlvbnMgd2lsbCBub3Qgd29yayBiZWNhdXNlIG9mIGNyb3NzIGRvbWFpbiBwZXJtaXNzaW9ucy4gU2VlIGh0dHA6Ly9yLnBkZnRyb24uY29tL2tiX2Nyb3NzX29yaWdpbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIil9fSxfZ2V0SFRNTDVPcHRpb25zVVJMOmZ1bmN0aW9uKCl7dmFyIGUsdCxuLG89dGhpcy5vcHRpb25zLGk9by53ZWJ2aWV3ZXJTZXJ2ZXJVUkx8fG8ucGRmdHJvblNlcnZlcixyPVwiXCI7aWYoby5pbml0aWFsRG9jJiYocis9XCIjZD1cIi5jb25jYXQoby5pbml0aWFsRG9jKSksdm9pZCAwPT09by5iYWNrZW5kVHlwZSYmKG8uYmFja2VuZFR5cGU9by5wZGZCYWNrZW5kKSxvLmRvY3VtZW50VHlwZSYmXCJ4b2RcIj09PW8uZG9jdW1lbnRUeXBlJiYoZT1vLmRvY3VtZW50VHlwZSksby5wcmVsb2FkV29ya2VyJiZcInhvZFwiPT09by5wcmVsb2FkV29ya2VyJiYoZT1vLnByZWxvYWRXb3JrZXIpLG8uZXh0ZW5zaW9uJiYoZT1vLmV4dGVuc2lvbiksZSYmKHIrPVwiJmV4dGVuc2lvbj1cIi5jb25jYXQoZSkpLG8uZG9jdW1lbnRUeXBlJiZcInhvZFwiIT09by5kb2N1bWVudFR5cGUmJih0PW8uZG9jdW1lbnRUeXBlKSxvLnByZWxvYWRXb3JrZXImJlwieG9kXCIhPT1vLnByZWxvYWRXb3JrZXImJih0PW8ucHJlbG9hZFdvcmtlciksdCYmKHIrPVwiJnByZWxvYWRXb3JrZXI9XCIuY29uY2F0KHQpKSxvLmJhY2tlbmRUeXBlJiYocis9XCImcGRmPVwiLmNvbmNhdChvLmJhY2tlbmRUeXBlLFwiJm9mZmljZT1cIikuY29uY2F0KG8uYmFja2VuZFR5cGUsXCImbGVnYWN5T2ZmaWNlPVwiKS5jb25jYXQoby5iYWNrZW5kVHlwZSkpLG8uZmlsZW5hbWUmJihyKz1cIiZmaWxlbmFtZT1cIi5jb25jYXQoby5maWxlbmFtZSkpLHZvaWQgMCE9PW8uc3RyZWFtaW5nJiYocis9XCImc3RyZWFtaW5nPVwiLmNvbmNhdChvLnN0cmVhbWluZykpLG8uZXh0ZXJuYWxQYXRoKXt2YXIgYT10aGlzLl9jb3JyZWN0UmVsYXRpdmVQYXRoKG8uZXh0ZXJuYWxQYXRoKTthPWVuY29kZVVSSUNvbXBvbmVudChhKSxyKz1cIiZwPVwiLmNvbmNhdChhKX1pZihvLmVuY3J5cHRpb24mJihyKz1cIiZhdXRvX2xvYWQ9ZmFsc2VcIiksby5lbmFibGVBbm5vdGF0aW9ucyYmKHIrPVwiJmE9MVwiKSxvLmRpc2FibGVkRWxlbWVudHMpe3ZhciBzPWVuY29kZVVSSUNvbXBvbmVudChvLmRpc2FibGVkRWxlbWVudHMuam9pbihcIixcIikpO3IrPVwiJmRpc2FibGVkRWxlbWVudHM9XCIuY29uY2F0KHMpfWlmKG8uc2VydmVyVXJsKXt2YXIgYz10aGlzLl9jb3JyZWN0UmVsYXRpdmVQYXRoKG8uc2VydmVyVXJsKTtjPWVuY29kZVVSSUNvbXBvbmVudChjKSxyKz1cIiZzZXJ2ZXJfdXJsPVwiLmNvbmNhdChjKX1pZihvLnNlcnZlclVybEhlYWRlcnMmJihyKz1cIiZzZXJ2ZXJVcmxIZWFkZXJzPVwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShvLnNlcnZlclVybEhlYWRlcnMpKSksby5kb2N1bWVudElkJiYocis9XCImZGlkPVwiLmNvbmNhdChvLmRvY3VtZW50SWQpKSxvLmNzcyl7dmFyIGw9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aChvLmNzcyk7bD1lbmNvZGVVUklDb21wb25lbnQobCkscis9XCImY3NzPVwiLmNvbmNhdChsKX1pZihvLmRpc2FibGVJMThuJiYocis9XCImZGlzYWJsZUkxOG49MVwiKSxvLmVuYWJsZU9mZmxpbmVNb2RlJiYocis9XCImb2ZmbGluZT0xXCIpLG8uc3RhcnRPZmZsaW5lJiYocis9XCImc3RhcnRPZmZsaW5lPTFcIiksKG8uZW5hYmxlUmVhZE9ubHlNb2RlfHxvLmlzUmVhZE9ubHkpJiYocis9XCImcmVhZG9ubHk9MVwiKSxvLmhpZGVBbm5vdGF0aW9uUGFuZWwmJihyKz1cIiZoaWRlQW5ub3RhdGlvblBhbmVsPTFcIiksby5kaXNhYmxlVG9vbEdyb3VwUmVvcmRlcmluZyYmKHIrPVwiJmRpc2FibGVUb29sR3JvdXBSZW9yZGVyaW5nPTFcIiksdm9pZCAwIT09by5hbm5vdGF0aW9uVXNlciYmKHIrPVwiJnVzZXI9XCIuY29uY2F0KG8uYW5ub3RhdGlvblVzZXIpKSx2b2lkIDA9PT1vLmFubm90YXRpb25BZG1pbiYmdm9pZCAwPT09by5pc0FkbWluVXNlcnx8KHIrPVwiJmFkbWluPVwiLmNvbmNhdChvLmFubm90YXRpb25BZG1pbnx8by5pc0FkbWluVXNlcj8xOjApKSx2b2lkIDAhPT1vLmN1c3RvbSYmKHIrPVwiJmN1c3RvbT1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KG8uY3VzdG9tKSkpLHZvaWQgMD09PW8uc2hvd0xvY2FsRmlsZVBpY2tlciYmdm9pZCAwPT09by5lbmFibGVGaWxlUGlja2VyfHwocis9XCImZmlsZXBpY2tlcj1cIi5jb25jYXQoby5zaG93TG9jYWxGaWxlUGlja2VyfHxvLmVuYWJsZUZpbGVQaWNrZXI/MTowKSksdm9pZCAwIT09by5mdWxsQVBJKXtpZihvLmZ1bGxBUEkpdGhyb3cgbmV3IEVycm9yKCdcImZ1bGxBUElcIiBpcyBub3QgYSB2YWxpZCBjb25zdHVjdG9yIG9wdGlvbiBmb3IgUERGLmpzIEV4cHJlc3MuIFBsZWFzZSBtYWtlIHN1cmUgeW91IGFyZSByZWZlcnJpbmcgdG8gdGhlIHByb3BlciBkb2N1bWVudGF0aW9uIChodHRwczovL3BkZmpzLmV4cHJlc3MvZG9jdW1lbnRhdGlvbiknKTtyKz1cIiZwZGZuZXQ9XCIuY29uY2F0KG8uZnVsbEFQST8xOjApfSh2b2lkIDAhPT1vLmVuYWJsZVJlZGFjdGlvbiYmKHIrPVwiJmVuYWJsZVJlZGFjdGlvbj1cIi5jb25jYXQoby5lbmFibGVSZWRhY3Rpb24/MTowKSksdm9pZCAwIT09by5kaXNhYmxlVmlydHVhbERpc3BsYXlNb2RlJiYocis9XCImZGlzYWJsZVZpcnR1YWxEaXNwbGF5TW9kZT1cIi5jb25jYXQoby5kaXNhYmxlVmlydHVhbERpc3BsYXlNb2RlPzE6MCkpLHZvaWQgMCE9PW8uZW5hYmxlTWVhc3VyZW1lbnQmJihyKz1cIiZlbmFibGVNZWFzdXJlbWVudD1cIi5jb25jYXQoby5lbmFibGVNZWFzdXJlbWVudD8xOjApKSx2b2lkIDAhPT1vLnNob3dUb29sYmFyQ29udHJvbCYmKHIrPVwiJnRvb2xiYXI9XCIuY29uY2F0KG8uc2hvd1Rvb2xiYXJDb250cm9sP1widHJ1ZVwiOlwiZmFsc2VcIikpLHZvaWQgMCE9PW8uc2hvd1BhZ2VIaXN0b3J5QnV0dG9ucyYmKHIrPVwiJnBhZ2VIaXN0b3J5PVwiLmNvbmNhdChvLnNob3dQYWdlSGlzdG9yeUJ1dHRvbnM/MTowKSksdm9pZCAwIT09by5ub3Rlc0luTGVmdFBhbmVsJiYocis9XCImbm90ZXNJbkxlZnRQYW5lbD1cIi5jb25jYXQoby5ub3Rlc0luTGVmdFBhbmVsPzE6MCkpLHZvaWQgMCE9PW8ueGRvbWFpblByb3h5VXJsKSYmKG49XCJzdHJpbmdcIj09dHlwZW9mIG8ueGRvbWFpblByb3h5VXJsP3t1cmw6by54ZG9tYWluUHJveHlVcmx9Om8ueGRvbWFpblByb3h5VXJsLHIrPVwiJnhkb21haW5fdXJscz1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3JldHVybihvLmF6dXJlV29ya2Fyb3VuZHx8by5lbmFibGVBenVyZVdvcmthcm91bmQpJiYocis9XCImYXp1cmVXb3JrYXJvdW5kPTFcIiksby5lbmFibGVPcHRpbWl6ZWRXb3JrZXJzfHwocis9XCImZW5hYmxlT3B0aW1pemVkV29ya2Vycz0wXCIpLG8udXNlRG93bmxvYWRlcnx8KHIrPVwiJnVzZURvd25sb2FkZXI9MFwiKSxvLmRpc2FibGVXZWJzb2NrZXRzJiYocis9XCImZGlzYWJsZVdlYnNvY2tldHM9MVwiKSxvLmRpc2FibGVTdHJlYW1pbmcmJihyKz1cIiZkaXNhYmxlU3RyZWFtaW5nPTFcIiksby5mb3JjZUNsaWVudFNpZGVJbml0JiYocis9XCImZm9yY2VDbGllbnRTaWRlSW5pdD0xXCIpLG8ubG9hZEFzUERGJiYocis9XCImbG9hZEFzUERGPTFcIiksdm9pZCAwIT09by53b3JrZXJUcmFuc3BvcnRQcm9taXNlJiYocis9XCImdXNlU2hhcmVkV29ya2VyPVwiLmNvbmNhdChvLndvcmtlclRyYW5zcG9ydFByb21pc2U/XCJ0cnVlXCI6XCJmYWxzZVwiKSksdm9pZCAwIT09aSYmaSYmKHIrPVwiJndlYnZpZXdlclNlcnZlclVSTD1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KGkpKSksby5mYWxsYmFja1RvQ2xpZW50U2lkZSYmKHIrPVwiJmZhbGxiYWNrVG9DbGllbnRTaWRlPTFcIiksdm9pZCAwIT09by5zaW5nbGVTZXJ2ZXJNb2RlJiYocis9XCImc2luZ2xlU2VydmVyTW9kZT1cIi5jb25jYXQoby5zaW5nbGVTZXJ2ZXJNb2RlP1widHJ1ZVwiOlwiZmFsc2VcIikpLHZvaWQgMCE9PW8uYWNjZXNzaWJsZU1vZGUmJihyKz1cIiZhY2Nlc3NpYmxlTW9kZT1cIi5jb25jYXQoby5hY2Nlc3NpYmxlTW9kZT8xOjApKSxvLmRpc2FibGVMb2dzJiYocis9XCImZGlzYWJsZUxvZ3M9MVwiKSxvLmVuYWJsZVZpZXdTdGF0ZUFubm90YXRpb25zJiYocis9XCImZW5hYmxlVmlld1N0YXRlQW5ub3RhdGlvbnM9MVwiKSxvLmRpc2FibGVGbGF0dGVuZWRBbm5vdGF0aW9ucyYmKHIrPVwiJmRpc2FibGVGbGF0dGVuZWRBbm5vdGF0aW9ucz0xXCIpLG8uaGlnaENvbnRyYXN0TW9kZSYmKHIrPVwiJmhpZ2hDb250cmFzdE1vZGU9MVwiKSx2b2lkIDAhPT1vLnNlbGVjdEFubm90YXRpb25PbkNyZWF0aW9uJiYocis9XCImc2VsZWN0QW5ub3RhdGlvbk9uQ3JlYXRpb249XCIuY29uY2F0KG8uc2VsZWN0QW5ub3RhdGlvbk9uQ3JlYXRpb24/MTowKSksdm9pZCAwIT09by5hdXRvRm9jdXNOb3RlT25Bbm5vdGF0aW9uU2VsZWN0aW9uJiYocis9XCImYXV0b0ZvY3VzTm90ZU9uQW5ub3RhdGlvblNlbGVjdGlvbj1cIi5jb25jYXQoby5hdXRvRm9jdXNOb3RlT25Bbm5vdGF0aW9uU2VsZWN0aW9uPzE6MCkpLHIrPVwiJmlkPVwiLmNvbmNhdCh0aGlzLmlkKSwocis9XCImYmFzZVBhdGg9XCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSkubGVuZ3RoPjAmJlwiJlwiPT09clswXSYmKHI9XCIjXCIuY29uY2F0KHIuc2xpY2UoMSkpKSxyKz1cIiZ3ZWJWaWV3ZXJKU1ZlcnNpb249XCIuY29uY2F0KHRoaXMudmVyc2lvbil9LHNldEluc3RhbmNlRGF0YTpmdW5jdGlvbihlKXtwLnNldCh0aGlzLmVsZW1lbnQse2lmcmFtZTplLGw6dGhpcy5vcHRpb25zLmx8fHRoaXMub3B0aW9ucy5saWNlbnNlS2V5LHdvcmtlclRyYW5zcG9ydFByb21pc2U6dGhpcy5vcHRpb25zLndvcmtlclRyYW5zcG9ydFByb21pc2V9KX0sX2NyZWF0ZUhUTUw1OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMub3B0aW9ucy51aVBhdGgrdGhpcy5fZ2V0SFRNTDVPcHRpb25zVVJMKCksbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3RoaXMuc2V0SW5zdGFuY2VEYXRhKG4pLG4uaWQ9XCJ3ZWJ2aWV3ZXItXCIuY29uY2F0KHRoaXMuaWQpLG4uc3JjPXQsbi50aXRsZT1cIndlYnZpZXdlclwiLG4uZnJhbWVCb3JkZXI9MCxuLndpZHRoPVwiMTAwJVwiLG4uaGVpZ2h0PVwiMTAwJVwiLG4uc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsITApLG4uc2V0QXR0cmlidXRlKFwid2Via2l0YWxsb3dmdWxsc2NyZWVuXCIsITApLG4uc2V0QXR0cmlidXRlKFwibW96YWxsb3dmdWxsc2NyZWVuXCIsITApLHRoaXMuaWZyYW1lPW4sdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvciYmbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJnY29sb3JcIix0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSx0aGlzLm9wdGlvbnMuYXNzZXRQYXRoJiZuLnNldEF0dHJpYnV0ZShcImRhdGEtYXNzZXRwYXRoXCIsZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMub3B0aW9ucy5hc3NldFBhdGgpKSx0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobik7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsKGZ1bmN0aW9uIHQobil7aWYoXCJ2aWV3ZXJMb2FkZWRcIj09PW4uZGF0YS50eXBlJiZuLmRhdGEuaWQ9PT1lLmlkKXRyeXtlLmluc3RhbmNlPWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuaW5zdGFuY2V9Y2F0Y2goZSl7fWZpbmFsbHl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdCksZS5fdmlld2VyTG9hZGVkKGUuaWZyYW1lKX19KSl9LF9jcmVhdGVIVE1MNU1vYmlsZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLm9wdGlvbnMudWlQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTt0aGlzLnNldEluc3RhbmNlRGF0YShuKSxuLmlkPVwid2Vidmlld2VyLVwiLmNvbmNhdCh0aGlzLmlkKSxuLnNyYz10LG4uZnJhbWVib3JkZXI9MCx0aGlzLm9wdGlvbnMuYXNzZXRQYXRoJiZuLnNldEF0dHJpYnV0ZShcImRhdGEtYXNzZXRwYXRoXCIsZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMub3B0aW9ucy5hc3NldFBhdGgpKSxuLnN0eWxlLndpZHRoPVwiMTAwJVwiLG4uc3R5bGUuaGVpZ2h0PVwiMTAwJVwiLHRoaXMuaWZyYW1lPW4sdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG4pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLChmdW5jdGlvbiB0KG4pe2lmKFwidmlld2VyTG9hZGVkXCI9PT1uLmRhdGEudHlwZSYmbi5kYXRhLmlkPT09ZS5pZCl0cnl7ZS5pbnN0YW5jZT1lLmlmcmFtZS5jb250ZW50V2luZG93Lmluc3RhbmNlfWNhdGNoKGUpe31maW5hbGx5e3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHQpLGUuX3ZpZXdlckxvYWRlZChlLmlmcmFtZSl9fSkpfSxkaXNwb3NlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHQpe3AuZGVsZXRlKGUuZWxlbWVudCksaC5kZWxldGUoZS5lbGVtZW50KSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixlLm1lc3NhZ2VIYW5kbGVyKSxlLmlmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLGUubG9hZExpc3RlbmVyKSxlLmlmcmFtZT1udWxsLGNvbnNvbGUuY2xlYXIoKSxlLmluc3RhbmNlLkNvcmUuZG9jdW1lbnRWaWV3ZXIuY2xvc2VEb2N1bWVudCgpLnRoZW4oKGZ1bmN0aW9uKCl7dCgpfSkpfSkpfSxnZXRJbnN0YW5jZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlfSxzZXRDb21wbGV0ZUluc3RhbmNlOmZ1bmN0aW9uKGUpe3RoaXMuY29tcGxldGVJbnN0YW5jZT1lfSxnZXRDb21wbGV0ZUluc3RhbmNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29tcGxldGVJbnN0YW5jZX0sX2NvcnJlY3RSZWxhdGl2ZVBhdGg6ZnVuY3Rpb24oZSl7dmFyIHQ9d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO3JldHVybiBBcnJheS5pc0FycmF5KGUpP2UubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gaShlLHQpfSkpOmkoZSx0KX0sX3Rlc3RIVE1MNTpmdW5jdGlvbigpe3RyeXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3JldHVybiBlJiZlLmdldENvbnRleHQoXCIyZFwiKX1jYXRjaChlKXtyZXR1cm4hMX19LF90ZXN0V2ViQXNzZW1ibHk6ZnVuY3Rpb24oKXtyZXR1cm4hKCF3aW5kb3cuV2ViQXNzZW1ibHl8fCF3aW5kb3cuV2ViQXNzZW1ibHkudmFsaWRhdGUpfSxfdGVzdENPUlM6ZnVuY3Rpb24oKXtyZXR1cm5cIlhNTEh0dHBSZXF1ZXN0XCJpbiB3aW5kb3cmJlwid2l0aENyZWRlbnRpYWxzXCJpbiBuZXcgWE1MSHR0cFJlcXVlc3R9LGlzSUU6ZnVuY3Rpb24oKXt2YXIgZT1uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksdD0vKG1zaWUpIChbXFx3Ll0rKS8uZXhlYyhlKXx8Lyh0cmlkZW50KSg/Oi4qPyBydjooW1xcdy5dKyl8KS8uZXhlYyhlKTtyZXR1cm4gdD9wYXJzZUludCh0WzJdLDEwKTp0fSxpc01vYmlsZURldmljZTpmdW5jdGlvbigpe3JldHVybiF0aGlzLmlzSUUoKSYmKDA9PT10aGlzLnNjcm9sbGJhcldpZHRoKCkmJm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2UvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RvdWNoL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvU2lsay9pKSl9LHNjcm9sbGJhcldpZHRoOmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDoxMDBweDtoZWlnaHQ6MTAwcHg7b3ZlcmZsb3c6c2Nyb2xsICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHhcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO3ZhciB0PWUub2Zmc2V0V2lkdGgtZS5jbGllbnRXaWR0aDtyZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlKSx0fSxpc1NhbWVPcmlnaW46ZnVuY3Rpb24oZSl7dmFyIHQ9d2luZG93LmxvY2F0aW9uLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7bi5ocmVmPWUsXCJcIj09PW4uaG9zdCYmKG4uaHJlZj1uLmhyZWYpO3ZhciBvPXdpbmRvdy5sb2NhdGlvbi5wb3J0LGk9bi5wb3J0O3JldHVyblwiaHR0cDpcIj09PW4ucHJvdG9jb2w/KGk9aXx8XCI4MFwiLG89b3x8XCI4MFwiKTpcImh0dHBzOlwiPT09bi5wcm90b2NvbCYmKGk9aXx8XCI0NDNcIixvPW98fFwiNDQzXCIpLG4uaG9zdG5hbWU9PT10Lmhvc3RuYW1lJiZuLnByb3RvY29sPT09dC5wcm90b2NvbCYmaT09PW99fSxjLldlYlZpZXdlci5PcHRpb25zPXtpbml0aWFsRG9jOnZvaWQgMCxhbm5vdGF0aW9uQWRtaW46dm9pZCAwLGlzQWRtaW5Vc2VyOnZvaWQgMCxhbm5vdGF0aW9uVXNlcjp2b2lkIDAsYXNzZXRQYXRoOnZvaWQgMCxhdXRvQ3JlYXRlOiEwLGF1dG9Gb2N1c05vdGVPbkFubm90YXRpb25TZWxlY3Rpb246ITAsYXp1cmVXb3JrYXJvdW5kOiExLGFkZGl0aW9uYWxUcmFuc2xhdGlvbnM6dm9pZCAwLGVuYWJsZUF6dXJlV29ya2Fyb3VuZDohMSxlbmFibGVPcHRpbWl6ZWRXb3JrZXJzOiEwLGJhY2tncm91bmRDb2xvcjp2b2lkIDAsYmFja2VuZFR5cGU6dm9pZCAwLGNzczp2b2lkIDAsY29uZmlnOnZvaWQgMCxjdXN0b206dm9pZCAwLGRvY3VtZW50SWQ6dm9pZCAwLGRvY3VtZW50VHlwZTp2b2lkIDAscHJlbG9hZFdvcmtlcjp2b2lkIDAsZXh0ZW5zaW9uOnZvaWQgMCxlbmFibGVBbm5vdGF0aW9uczohMCxmaWxlbmFtZTp2b2lkIDAsZGlzYWJsZUkxOG46ITEsZGlzYWJsZWRFbGVtZW50czp2b2lkIDAsZGlzYWJsZVdlYnNvY2tldHM6ITEsZW5hYmxlT2ZmbGluZU1vZGU6ITEsZW5hYmxlUmVhZE9ubHlNb2RlOiExLGlzUmVhZE9ubHk6ITEsZW5hYmxlUmVkYWN0aW9uOiExLGRpc2FibGVWaXJ0dWFsRGlzcGxheU1vZGU6ITEsZW5hYmxlTWVhc3VyZW1lbnQ6ITEsZW5jcnlwdGlvbjp2b2lkIDAsZXh0ZXJuYWxQYXRoOnZvaWQgMCxoaWRlQW5ub3RhdGlvblBhbmVsOiExLGRpc2FibGVUb29sR3JvdXBSZW9yZGVyaW5nOiExLHVpUGF0aDpcIi4vdWkvaW5kZXguaHRtbFwiLGw6dm9pZCAwLGxpY2Vuc2VLZXk6dm9pZCAwLG1vYmlsZVJlZGlyZWN0OiExLHBhdGg6XCJcIixwZGZCYWNrZW5kOnZvaWQgMCx3ZWJ2aWV3ZXJTZXJ2ZXJVUkw6dm9pZCAwLGZhbGxiYWNrVG9DbGllbnRTaWRlOiExLHNpbmdsZVNlcnZlck1vZGU6ITEsZnVsbEFQSTohMSxwcmVsb2FkUERGV29ya2VyOiEwLHNlcnZlclVybDp2b2lkIDAsc2VydmVyVXJsSGVhZGVyczp2b2lkIDAsc2hvd0xvY2FsRmlsZVBpY2tlcjohMSxlbmFibGVGaWxlUGlja2VyOiExLHNob3dQYWdlSGlzdG9yeUJ1dHRvbnM6ITAsc2hvd1Rvb2xiYXJDb250cm9sOnZvaWQgMCxzdGFydE9mZmxpbmU6ITEsc3RyZWFtaW5nOnZvaWQgMCx0eXBlOlwiaHRtbDVcIix1c2VEb3dubG9hZGVyOiEwLHdvcmtlclRyYW5zcG9ydFByb21pc2U6dm9pZCAwLHhkb21haW5Qcm94eVVybDp2b2lkIDAsdWk6dm9pZCAwLGZvcmNlQ2xpZW50U2lkZUluaXQ6ITEsbG9hZEFzUERGOiExLGFjY2Vzc2libGVNb2RlOnZvaWQgMCxkaXNhYmxlTG9nczohMSxlbmFibGVWaWV3U3RhdGVBbm5vdGF0aW9uczohMSxoaWdoQ29udHJhc3RNb2RlOiExLHNlbGVjdEFubm90YXRpb25PbkNyZWF0aW9uOiExLG5vdGVzSW5MZWZ0UGFuZWw6ITEsZG9jdW1lbnRYRkRGUmV0cmlldmVyOnZvaWQgMCxkaXNhYmxlRmxhdHRlbmVkQW5ub3RhdGlvbnM6ITEsZGlzYWJsZVN0cmVhbWluZzohMX07dmFyIHY9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4sbyl7ZS5sPWUubHx8ZS5saWNlbnNlS2V5LGUuYXp1cmVXb3JrYXJvdW5kPWUuYXp1cmVXb3JrYXJvdW5kfHxlLmVuYWJsZUF6dXJlV29ya2Fyb3VuZCxlLmFubm90YXRpb25BZG1pbj1lLmFubm90YXRpb25BZG1pbnx8ZS5pc0FkbWluVXNlcixlLmVuYWJsZVJlYWRPbmx5TW9kZT1lLmVuYWJsZVJlYWRPbmx5TW9kZXx8ZS5pc1JlYWRPbmx5LGUuc2hvd0xvY2FsRmlsZVBpY2tlcj1lLnNob3dMb2NhbEZpbGVQaWNrZXJ8fGUuZW5hYmxlRmlsZVBpY2tlcjt0LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLChmdW5jdGlvbiByKCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlcIixyKTt0cnl7dmFyIGM9dC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpLmNvbnRlbnRXaW5kb3c7aWYodm9pZCAwPT09Yy5Ub29scyl0aHJvdyBuZXcgRXJyb3IoXCJWaWV3ZXIgaXNuJ3QgaW5zdGFudGlhdGVkIGNvcnJlY3RseS4gSXQgY291bGQgYmUgY2F1c2VkIGJ5IHRoZSAncGF0aCcgb3B0aW9uIGluIHRoZSBXZWJWaWV3ZXIgY29uc3RydWN0b3Igbm90IGJlaW5nIGRlZmluZWQgY29ycmVjdGx5LiBUaGUgJ3BhdGgnIG9wdGlvbiBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIEhUTUwgZmlsZSB5b3UncmUgbG9hZGluZyB0aGUgc2NyaXB0IG9uIGFuZCB0aGUgbGliIGZvbGRlciBuZWVkcyB0byBiZSBwdWJsaWNseSBhY2Nlc3NpYmxlLlwiKTt2YXIgbD1pLmdldEluc3RhbmNlKCksdT17aWZyYW1lV2luZG93OmMsZGlzcG9zZTppLmRpc3Bvc2UuYmluZChpKX0sZj1kKHt9LGwsYShzKHt9LGwuVUlfTkFNRVNQQUNFX0tFWSxhKGEoe30sbFtsLlVJX05BTUVTUEFDRV9LRVldKSx1KSksdSkpO2kuc2V0Q29tcGxldGVJbnN0YW5jZShmKTt2YXIgcD1Qcm9taXNlLnJlc29sdmUoKTtpZihlLmRvY3VtZW50WEZERlJldHJpZXZlciYmKHA9ZltsLkNPUkVfTkFNRVNQQUNFX0tFWV0uZG9jdW1lbnRWaWV3ZXIuc2V0RG9jdW1lbnRYRkRGUmV0cmlldmVyKGUuZG9jdW1lbnRYRkRGUmV0cmlldmVyKSksZS5hZGRpdGlvbmFsVHJhbnNsYXRpb25zKXt2YXIgaD1lLmFkZGl0aW9uYWxUcmFuc2xhdGlvbnM7ZltsLlVJX05BTUVTUEFDRV9LRVldLnNldFRyYW5zbGF0aW9ucyhoLmxhbmd1YWdlLGgudHJhbnNsYXRpb25zKX1wLnRoZW4oKGZ1bmN0aW9uKCl7bihmKX0pKX1jYXRjaCh0KXtpZihcImNvbmZpZ1wiaW4gZSYmXCJcIiE9PWUuY29uZmlnKXJldHVybiBuKCk7byhcIlZpZXdlciBpcyBvbiBhIGRpZmZlcmVudCBkb21haW4sIHRoZSBwcm9taXNlIGZyb20gV2ViVmlld2VyIGZ1bmN0aW9uIGlzIHJlamVjdGVkIGFuZCBBUEkgZnVuY3Rpb25zIHdpbGwgbm90IHdvcmsgYmVjYXVzZSBvZiBjcm9zcyBkb21haW4gcGVybWlzc2lvbnMuIFNlZSBodHRwczovL3d3dy5wZGZ0cm9uLmNvbS9rYl9jcm9zc19vcmlnaW4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpfX0pKTt2YXIgaT1uZXcgYy5XZWJWaWV3ZXIoZSx0KX0pKX0sYj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9dShwKSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07aWYoby5pZnJhbWU9PT1lKXJldHVybiBvfXJldHVybiBudWxsfTt2Lmw9ZnVuY3Rpb24oZSl7dmFyIHQ9YihlKTtyZXR1cm4gdCYmdC5sfSx2LndvcmtlclRyYW5zcG9ydFByb21pc2U9ZnVuY3Rpb24oZSl7dmFyIHQ9YihlKTtyZXR1cm4gdCYmdC53b3JrZXJUcmFuc3BvcnRQcm9taXNlfSx2LldvcmtlclR5cGVzPXtBTEw6XCJhbGxcIixPRkZJQ0U6XCJvZmZpY2VcIixMRUdBQ1lfT0ZGSUNFOlwibGVnYWN5T2ZmaWNlXCIsUERGOlwicGRmXCIsQ09OVEVOVF9FRElUOlwiY29udGVudEVkaXRcIn0sdi5CYWNrZW5kVHlwZXM9bzt2YXIgdz1mdW5jdGlvbihlKXt2YXIgdD11KHApO2lmKCF0Lmxlbmd0aHx8IXQuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5pbnN0YW5jZX0pKS5sZW5ndGgpcmV0dXJuIGNvbnNvbGUud2FybihcIldlYlZpZXdlci5nZXRJbnN0YW5jZSgpIHdhcyBjYWxsZWQgYmVmb3JlIGFueSBpbnN0YW5jZXMgd2VyZSBhdmFpbGFibGVcIiksbnVsbDtpZih0Lmxlbmd0aD4xJiYhZSl0aHJvdyBuZXcgRXJyb3IoXCJNb3JlIHRoYW4gb25lIGluc3RhbmNlIG9mIFdlYlZpZXdlciB3YXMgZm91bmQsIGFuZCBubyBlbGVtZW50IHdhcyBwYXNzZWQgaW50byBnZXRJbnN0YW5jZSgpLiBQbGVhc2Ugc3BlY2lmeSB3aGljaCBpbnN0YW5jZSB5b3Ugd2FudCB0byBnZXQuXCIpO3JldHVybiBlPyhwLmdldChlKXx8e30pLmluc3RhbmNlOih0WzBdfHx7fSkuaW5zdGFuY2V9O3YuZ2V0SW5zdGFuY2U9dyx3aW5kb3cuV2ViVmlld2VyPXY7dC5kZWZhdWx0PXZ9XSl9KSk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RURGMztcclxuICAgIGNvbG9yOiAjMEQxMTE3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICBhbmltYXRpb246IHpvb21JbiBmb3J3YXJkcyAxMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1vZGFsIGgxLFxyXG4ubW9kYWwgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwRDExMTc7XHJcbn1cclxuXHJcbi5tb2RhbD5kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsPi5tb2RhbC1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsPi5tb2RhbC1idXR0b25zLWNvbnRhaW5lcj5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogc29saWQgM3B0ICMwRDExMTc7XHJcbiAgICBjb2xvcjogIzBEMTExNztcclxuXHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogc29saWQgM3B0ICMwRDExMTc7XHJcblxyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWw+YnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk1O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIGFuaW1hdGlvbjogZmFkZUlkIGZvcndhcmRzIDEwMG1zO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJZCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBzY2FsZTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgc2NhbGU6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3NXB4KSB7XHJcblxyXG4gICAgLm1vZGFsPmRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTzs7SUFFUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1COztJQUVuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCx5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsY0FBYzs7SUFFZCxnQkFBZ0I7SUFDaEIsaUJBQWlCOztJQUVqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHlCQUF5Qjs7SUFFekIsZ0JBQWdCOztJQUVoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLG9DQUFvQzs7SUFFcEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFREYzO1xcclxcbiAgICBjb2xvcjogIzBEMTExNztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiB6b29tSW4gZm9yd2FyZHMgMTAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBoMSxcXHJcXG4ubW9kYWwgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMEQxMTE3O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWw+ZGl2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWw+Lm1vZGFsLWJ1dHRvbnMtY29udGFpbmVyIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPi5tb2RhbC1idXR0b25zLWNvbnRhaW5lcj5idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDNwdCAjMEQxMTE3O1xcclxcbiAgICBjb2xvcjogIzBEMTExNztcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlcjogc29saWQgM3B0ICMwRDExMTc7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuXFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbD5idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZHJvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogOTU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcblxcclxcbiAgICBhbmltYXRpb246IGZhZGVJZCBmb3J3YXJkcyAxMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSWQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgc2NhbGU6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgc2NhbGU6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc1cHgpIHtcXHJcXG5cXHJcXG4gICAgLm1vZGFsPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ZvbnRzL01vbmEgU2Fucy9Nb25hLVNhbnMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiNyZWdpb24gcm9vdC9odG1sL2JvZHkqL1xyXG46cm9vdCB7XHJcbiAgICAtLXNoYWRvdy1jb2xvcjogMGRlZyAwJSAwJTtcclxuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1sb3c6IDBweCAwLjVweCAwLjZweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIDBweCAwLjhweCAwLjlweCAtMS4ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAwcHggMnB4IDIuM3B4IC0yLjVweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSk7XHJcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtOiAwcHggMC41cHggMC42cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjExKSwgMHB4IDEuNnB4IDEuOHB4IC0wLjhweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMTEpLCAwcHggNC4xcHggNC42cHggLTEuN3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xMSksIDBweCA5LjlweCAxMS4xcHggLTIuNXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xMSk7XHJcbiAgICAtLXNoYWRvdy1lbGV2YXRpb24taGlnaDogMHB4IDAuNXB4IDAuNnB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgMHB4IDIuOXB4IDMuM3B4IC0wLjRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIDBweCA1LjRweCA2LjFweCAtMC43cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAwcHggOC45cHggMTBweCAtMS4xcHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAtMC4xcHggMTQuMnB4IDE2cHggLTEuNHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgLTAuMXB4IDIyLjFweCAyNC45cHggLTEuOHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgLTAuMXB4IDMzLjZweCAzNy44cHggLTIuMXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgLTAuMnB4IDQ5LjVweCA1NS43cHggLTIuNXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbmEgU2Fucyc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGNvbG9yOiAjRTZFREYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTExNztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcclxufVxyXG5cclxuYm9keSAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9uYSBTYW5zJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBjb2xvcjogI0U2RURGMztcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzZjOTZiYjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDEuNXB0O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi8qI3JlZ2lvbiBoZWFkZXIqL1xyXG5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDQwOTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaGVhZGVyPi50aXRsZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmhlYWRlcj4uY29udGVudCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyPi5jb250ZW50Pi5jcmVkaXRzIHtcclxuICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlcj4uY29udGVudD4uY3JlZGl0czpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBzb2xpZCAycHQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODU0cHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyPi50aXRsZSB7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXI+LmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qI2VuZHJlZ2lvbiovXHJcblxyXG4vKiNyZWdpb24gdG9wIGJhciovXHJcbi50b3AtYmFyIHtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTA0MDk7XHJcbiAgICBib3JkZXItYm90dG9tOiAjMjEyNjJEIHNvbGlkIDFwdDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMC43NXJlbSAxcmVtO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMnJlbSAxZnI7XHJcblxyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW0pO1xyXG59XHJcblxyXG4udG9wLWJhciBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlO1xyXG59XHJcblxyXG4udG9wLWJhciBidXR0b24gc3ZnIHBhdGgge1xyXG4gICAgZmlsbDogI2FiYWZiMjtcclxufVxyXG5cclxuLnRvcC1iYXIgLmFjdGl2ZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b3AtYmFyIC5hY3RpdmUgc3ZnIHBhdGgge1xyXG4gICAgZmlsbDogI0U2RURGMztcclxufVxyXG5cclxuLnRvcC1iYXIgLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMjM4LCAyNDMsIDAuMTI1KTtcclxufVxyXG5cclxuLnRvcC1iYXIgLmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xyXG4gICAgbWFyZ2luOiAwLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRvcC1iYXIgLmJhciAucGF0aC1pY29uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICB3aWR0aDogM3JlbTtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyIC5wYXRoLWljb24tY29udGFpbmVyIC5wYXRoLWljb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50b3AtYmFyIC5iYXIgLnBhdGgtaWNvbi1jb250YWluZXIgc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyIC5wYXRoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50b3AtYmFyIC5iYXIgLnBhdGggZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyIC5wYXRoIGRpdiBzdmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogM3JlbTtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4udG9wLWJhciAuYmFyIC5wYXRoLWFycm93IHtcclxuICAgIGZvbnQtc2l6ZTogMjRwdDtcclxufVxyXG5cclxuLyojZW5kcmVnaW9uKi9cclxuXHJcbi5tYWluLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLyojcmVnaW9uIHNpZGUgcGFuZWwqL1xyXG4uc2lkZS1wYW5lbCB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDhyZW0gMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMTYuNzVyZW0gLSAxcHQpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDQwOTtcclxuICAgIGJvcmRlci1yaWdodDogIzIxMjYyRCBzb2xpZCAxcHQ7XHJcblxyXG4gICAgei1pbmRleDogOTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNpZGUtcGFuZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zaWRlLXBhbmVsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XHJcbn1cclxuXHJcbi5zaWRlLXBhbmVsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uc2lkZS1ncm91cC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uc2lkZS1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uc2lkZS1idXR0b24gc3ZnIHtcclxuICAgIG1pbi13aWR0aDogMS41cmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zaWRlLWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5zaWRlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xyXG59XHJcblxyXG4uc2lkZS1idXR0b24teWVhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnNpZGUtYnV0dG9uLXNlc3Npb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5zaWRlLWJ1dHRvbi12YXJpYW50IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAyLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxufVxyXG5cclxuLnNpZGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIHRyYW5zaXRpb246IGdyaWQtdGVtcGxhdGUtcm93cyAyNTBtcyBlYXNlO1xyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xyXG59XHJcblxyXG4uc2lkZS1ncm91cCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2lkZS1idXR0b24tYXJyb3cgcGF0aCB7XHJcbiAgICBmaWxsOiAjRTZFREYzO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsbCAxMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZGUtYnV0dG9uLWFycm93OmhvdmVyIHBhdGgge1xyXG4gICAgZmlsbDogI2FiYWZiMjtcclxufVxyXG5cclxuLnNpZGUtcGFuZWwgLmNyZWRpdHMge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxNi41cmVtO1xyXG4gICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuXHJcbiAgICAvKiBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG59XHJcblxyXG4uc2lkZS1wYW5lbCAuY3JlZGl0cyBkaXYge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxufVxyXG5cclxuLnNpZGUtcGFuZWwgLmNyZWRpdHM6OmJlZm9yZSB7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDEpIDI1JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSA1MCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLm1haW4ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3cmVtKTtcclxuICAgIGhlaWdodDogY2FsYygxMDBkdmggLSA3Ljc1cmVtIC0gMXB0KTtcclxuXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XHJcbn1cclxuXHJcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uaG9tZSxcclxuLnN1Yi1tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5ob21lPmgyLFxyXG4uc3ViLW1lbnU+aDIge1xyXG4gICAgbWFyZ2luOiAxLjVyZW0gMCAwIDEuNXJlbTtcclxufVxyXG5cclxuLmhvbWU+ZGl2LFxyXG4uc3ViLW1lbnU+ZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIuNXJlbTtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogMTVyZW07XHJcbiAgICBwZXJzcGVjdGl2ZTogNjAwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogMTVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IHNjYWxlIDE1MG1zIGVhc2UsIGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcclxuICAgIGJvcmRlcjogIzM2M0I0MiBzb2xpZCAwLjVwdDtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtKTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBzY2FsZTogMS4wMjU7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLWhpZ2gpO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciBpbWcge1xyXG4gICAgc2NhbGU6IDEuMDU7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAxNTBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMCwgMCwgMCwgMC43NSkpO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnViYmxlLXNoZWV0LW1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHBhZGRpbmc6IDFyZW0gMCAycmVtIDA7XHJcbn1cclxuXHJcbi5idWJibGUtc2hlZXQtdGl0bGUge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5idWJibGUtc2hlZXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmJ1YmJsZS1zaGVldC1jb250YWluZXIgZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAjMzYzQjQyIHNvbGlkIDAuMjVwdDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZTtcclxufVxyXG5cclxuLmJ1YmJsZS1jaG9zZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFNjU2RTtcclxufVxyXG5cclxuLmJ1YmJsZS1jaG9pY2U6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjYyRDtcclxufVxyXG5cclxuLmJ1YmJsZS1zaGVldC1tZW51IGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4NjM2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW0pO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlO1xyXG59XHJcblxyXG4uYnViYmxlLXNoZWV0LW1lbnUgYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzZiMmI7XHJcbn1cclxuXHJcbi5idWJibGUtc2hlZXQtbWVudSAuZXhhbS1tYXJrIHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgcGFkZGluZzogMi41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkVERjM7XHJcbiAgICBjb2xvcjogIzBEMTExNztcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvcnJlY3QtcXVlc3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzODYzNjtcclxufVxyXG5cclxuLndyb25nLXF1ZXN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NjIzMjM7XHJcbn1cclxuXHJcbi5jb3JyZWN0ZWQtcXVlc3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29ycmVjdGVkLXF1ZXN0aW9uOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlcjogI0U2RURGMyBzb2xpZCAwLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uc3dpdGNoLXRvLXBkZiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RURGMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLW1lZGl1bSk7XHJcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAxNTBtcyBlYXNlO1xyXG59XHJcblxyXG4uc3dpdGNoLXRvLXBkZjpob3ZlciB7XHJcbiAgICBzY2FsZTogMS4wNTtcclxufVxyXG5cclxuLnN3aXRjaC10by1wZGYgc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3dpdGNoLXRvLXBkZiBzdmcgcGF0aCB7XHJcbiAgICBmaWxsOiAjMEQxMTE3O1xyXG59XHJcblxyXG4ucGRmLXZpZXdlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjbG9zZU1lbnUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5QkFBeUI7QUFDekI7SUFDSSwwQkFBMEI7SUFDMUIsa0xBQWtMO0lBQ2xMLG1QQUFtUDtJQUNuUCx5ZEFBeWQ7QUFDN2Q7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQWtEO0FBQ3REOztBQUVBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdLQUFnSzs7SUFFaEssU0FBUztJQUNULFVBQVU7O0lBRVYsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNB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Zix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUiw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjOztJQUVkLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLDJCQUEyQjtRQUMzQixVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiNyZWdpb24gcm9vdC9odG1sL2JvZHkqL1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1zaGFkb3ctY29sb3I6IDBkZWcgMCUgMCU7XFxyXFxuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1sb3c6IDBweCAwLjVweCAwLjZweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIDBweCAwLjhweCAwLjlweCAtMS4ycHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAwcHggMnB4IDIuM3B4IC0yLjVweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSk7XFxyXFxuICAgIC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW06IDBweCAwLjVweCAwLjZweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMTEpLCAwcHggMS42cHggMS44cHggLTAuOHB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xMSksIDBweCA0LjFweCA0LjZweCAtMS43cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjExKSwgMHB4IDkuOXB4IDExLjFweCAtMi41cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjExKTtcXHJcXG4gICAgLS1zaGFkb3ctZWxldmF0aW9uLWhpZ2g6IDBweCAwLjVweCAwLjZweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIDBweCAyLjlweCAzLjNweCAtMC40cHggaHNsKHZhcigtLXNoYWRvdy1jb2xvcikgLyAwLjEpLCAwcHggNS40cHggNi4xcHggLTAuN3B4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgMHB4IDguOXB4IDEwcHggLTEuMXB4IGhzbCh2YXIoLS1zaGFkb3ctY29sb3IpIC8gMC4xKSwgLTAuMXB4IDE0LjJweCAxNnB4IC0xLjRweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIC0wLjFweCAyMi4xcHggMjQuOXB4IC0xLjhweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIC0wLjFweCAzMy42cHggMzcuOHB4IC0yLjFweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSksIC0wLjJweCA0OS41cHggNTUuN3B4IC0yLjVweCBoc2wodmFyKC0tc2hhZG93LWNvbG9yKSAvIDAuMSk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbmEgU2Fucyc7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9tZWRpYS9mb250cy9Nb25hIFNhbnMvTW9uYS1TYW5zLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBjb2xvcjogI0U2RURGMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTExNztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwZHZoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ICoge1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbmEgU2FucycsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiAjRTZFREYzO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgY29sb3I6ICM2Yzk2YmI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDEuNXB0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiNlbmRyZWdpb24qL1xcclxcblxcclxcbi8qI3JlZ2lvbiBoZWFkZXIqL1xcclxcbmhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDQwOTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXI+LnRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyPi5jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXI+LmNvbnRlbnQ+LmNyZWRpdHMge1xcclxcbiAgICB3aWR0aDogN3JlbTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcj4uY29udGVudD4uY3JlZGl0czpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHNvbGlkIDJwdDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xcclxcbiAgICBoZWFkZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVyPi50aXRsZSB7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVyPi5jb250ZW50IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyojZW5kcmVnaW9uKi9cXHJcXG5cXHJcXG4vKiNyZWdpb24gdG9wIGJhciovXFxyXFxuLnRvcC1iYXIge1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTA0MDk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206ICMyMTI2MkQgc29saWQgMXB0O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwYWRkaW5nOiAwIDFyZW0gMC43NXJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAycmVtIDFmcjtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW0pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICB3aWR0aDogMi41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciBidXR0b24gc3ZnIHBhdGgge1xcclxcbiAgICBmaWxsOiAjYWJhZmIyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYWN0aXZlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYWN0aXZlIHN2ZyBwYXRoIHtcXHJcXG4gICAgZmlsbDogI0U2RURGMztcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1iYXIgLmFjdGl2ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAyMzgsIDI0MywgMC4xMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjYyRDtcXHJcXG4gICAgbWFyZ2luOiAwLjI1cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC4yNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1iYXIgLmJhciAucGF0aC1pY29uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1iYXIgLmJhciAucGF0aC1pY29uLWNvbnRhaW5lciAucGF0aC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1iYXIgLmJhciAucGF0aC1pY29uLWNvbnRhaW5lciBzdmcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyIC5wYXRoIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1iYXIgLmJhciAucGF0aCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhciAuYmFyIC5wYXRoIGRpdiBzdmcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50b3AtYmFyIC5iYXIgLnBhdGgtYXJyb3cge1xcclxcbiAgICBmb250LXNpemU6IDI0cHQ7XFxyXFxufVxcclxcblxcclxcbi8qI2VuZHJlZ2lvbiovXFxyXFxuXFxyXFxuLm1haW4tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qI3JlZ2lvbiBzaWRlIHBhbmVsKi9cXHJcXG4uc2lkZS1wYW5lbCB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gOHJlbSAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMTYuNzVyZW0gLSAxcHQpO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDQwOTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAjMjEyNjJEIHNvbGlkIDFwdDtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogOTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjJEO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtcGFuZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtZ3JvdXAtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtZ3JvdXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYnV0dG9uIHN2ZyB7XFxyXFxuICAgIG1pbi13aWR0aDogMS41cmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBoZWlnaHQ6IDEuMjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI2MkQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbi15ZWFyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbi1zZXNzaW9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbi12YXJpYW50IHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDIuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgMjUwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbGxhcHNlZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1ncm91cCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJ1dHRvbi1hcnJvdyBwYXRoIHtcXHJcXG4gICAgZmlsbDogI0U2RURGMztcXHJcXG4gICAgdHJhbnNpdGlvbjogZmlsbCAxMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYnV0dG9uLWFycm93OmhvdmVyIHBhdGgge1xcclxcbiAgICBmaWxsOiAjYWJhZmIyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbCAuY3JlZGl0cyB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDE2LjVyZW07XFxyXFxuICAgIGhlaWdodDogN3JlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC4yNXJlbTtcXHJcXG5cXHJcXG4gICAgLyogbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbCAuY3JlZGl0cyBkaXYge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbCAuY3JlZGl0czo6YmVmb3JlIHtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDEpIDI1JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpIDUwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyojZW5kcmVnaW9uKi9cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDBkdmggLSA3Ljc1cmVtIC0gMXB0KTtcXHJcXG5cXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI2MkQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSxcXHJcXG4uc3ViLW1lbnUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWU+aDIsXFxyXFxuLnN1Yi1tZW51PmgyIHtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW0gMCAwIDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWU+ZGl2LFxcclxcbi5zdWItbWVudT5kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMi41cmVtO1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAxNTBtcyBlYXNlLCBib3gtc2hhZG93IDE1MG1zIGVhc2U7XFxyXFxuICAgIGJvcmRlcjogIzM2M0I0MiBzb2xpZCAwLjVwdDtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi1tZWRpdW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIHNjYWxlOiAxLjAyNTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi1oaWdoKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6aG92ZXIgaW1nIHtcXHJcXG4gICAgc2NhbGU6IDEuMDU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250YWluZXI6OmJlZm9yZSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDAsIDAsIDAsIDAuNzUpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDEwJTtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYnViYmxlLXNoZWV0LW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMCAycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5idWJibGUtc2hlZXQtdGl0bGUge1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5idWJibGUtc2hlZXQtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnViYmxlLXNoZWV0LWNvbnRhaW5lciBkaXYge1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlcjogIzM2M0I0MiBzb2xpZCAwLjI1cHQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1YmJsZS1jaG9zZW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU2NTZFO1xcclxcbn1cXHJcXG5cXHJcXG4uYnViYmxlLWNob2ljZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjYyRDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1YmJsZS1zaGVldC1tZW51IGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4NjM2O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnViYmxlLXNoZWV0LW1lbnUgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM2YjJiO1xcclxcbn1cXHJcXG5cXHJcXG4uYnViYmxlLXNoZWV0LW1lbnUgLmV4YW0tbWFyayB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICBwYWRkaW5nOiAyLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkVERjM7XFxyXFxuICAgIGNvbG9yOiAjMEQxMTE3O1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcnJlY3QtcXVlc3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4NjM2O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JvbmctcXVlc3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODYyMzIzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ycmVjdGVkLXF1ZXN0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ycmVjdGVkLXF1ZXN0aW9uOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm9yZGVyOiAjRTZFREYzIHNvbGlkIDAuMjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC10by1wZGYge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMXJlbTtcXHJcXG4gICAgcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAyLjVyZW07XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcblxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkVERjM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24tbWVkaXVtKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMTUwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC10by1wZGY6aG92ZXIge1xcclxcbiAgICBzY2FsZTogMS4wNTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC10by1wZGYgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC10by1wZGYgc3ZnIHBhdGgge1xcclxcbiAgICBmaWxsOiAjMEQxMTE3O1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmLXZpZXdlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2xvc2VNZW51IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhbF9iaW9sb2d5IGZyb20gJy4uL21lZGlhL2ltYWdlcy9hbF9iaW9sb2d5LmpwZydcclxuaW1wb3J0IGFsX2NoZW1pc3RyeSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvYWxfY2hlbWlzdHJ5LmpwZydcclxuaW1wb3J0IGFsX3BoeXNpY3MgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL2FsX3BoeXNpY3MuanBnJ1xyXG5cclxuaW1wb3J0IG9sX2Jpb2xvZ3kgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL29sX2Jpb2xvZ3kuanBnJ1xyXG5pbXBvcnQgb2xfY2hlbWlzdHJ5IGZyb20gJy4uL21lZGlhL2ltYWdlcy9vbF9jaGVtaXN0cnkuanBnJ1xyXG5pbXBvcnQgb2xfY29tYmluZWQgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL29sX2NvbWJpbmVkLnBuZydcclxuaW1wb3J0IG9sX2Vjb25vbWljcyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvb2xfZWNvbm9taWNzLnBuZydcclxuaW1wb3J0IG9sX3BoeXNpY3MgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL29sX3BoeXNpY3MuanBnJ1xyXG5cclxuY29uc3QgaW1hZ2VzID0geyBhbF9iaW9sb2d5LCBhbF9jaGVtaXN0cnksIGFsX3BoeXNpY3MsIG9sX2Jpb2xvZ3ksIG9sX2NoZW1pc3RyeSwgb2xfY29tYmluZWQsIG9sX2Vjb25vbWljcywgb2xfcGh5c2ljcyB9XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGVCdXR0b24obGV2ZWwsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaWRlLWNvbnRhaW5lcicpXHJcbiAgICBlbGVtZW50LmlkID0gdmFyaWFudCA9PSB1bmRlZmluZWQgPyBzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fWAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn1gIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn1gIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fWBcclxuXHJcbiAgICBjb25zdCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ1dHRvbkVsZW1lbnQuaWQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBgc2lkZS0ke2xldmVsfS1idXR0b24tJHtzdWJqZWN0fWAgOiBgc2lkZS0ke2xldmVsfS1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9YCA6IGBzaWRlLSR7bGV2ZWx9LWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufWAgOiBgc2lkZS0ke2xldmVsfS1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fWBcclxuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChgc2lkZS1idXR0b25gKVxyXG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBzaWRlLWJ1dHRvbi0ke3ZhcmlhbnQgPT0gdW5kZWZpbmVkID8gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/ICdzdWJqZWN0JyA6ICd5ZWFyJyA6ICdzZXNzaW9uJyA6ICd2YXJpYW50J31gKVxyXG5cclxuICAgIGNvbnN0IGFycm93RG93blN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpOyBhcnJvd0Rvd25TdmcuY2xhc3NMaXN0LmFkZCgnc2lkZS1idXR0b24tYXJyb3cnKTsgYXJyb3dEb3duU3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMzInKTsgYXJyb3dEb3duU3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzMyJyk7IGFycm93RG93blN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI1NiAyNTYnKTsgYXJyb3dEb3duU3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTsgYXJyb3dEb3duU3ZnLmlubmVySFRNTCA9ICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yMTYuNDkgMTA0LjQ5bC04MCA4MGExMiAxMiAwIDAgMS0xNyAwbC04MC04MGExMiAxMiAwIDAgMSAxNy0xN0wxMjggMTU5bDcxLjUxLTcxLjUyYTEyIDEyIDAgMCAxIDE3IDE3WlwiIC8+J1xyXG4gICAgY29uc3QgYXJyb3dVcFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpOyBhcnJvd1VwU3ZnLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYnV0dG9uLWFycm93Jyk7IGFycm93VXBTdmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7IGFycm93VXBTdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICczMicpOyBhcnJvd1VwU3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzMyJyk7IGFycm93VXBTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNTYgMjU2Jyk7IGFycm93VXBTdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpOyBhcnJvd1VwU3ZnLmlubmVySFRNTCA9ICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCJkPVwiTTIxNi40OSAxNjguNDlhMTIgMTIgMCAwIDEtMTcgMEwxMjggOTdsLTcxLjUxIDcxLjQ5YTEyIDEyIDAgMCAxLTE3LTE3bDgwLTgwYTEyIDEyIDAgMCAxIDE3IDBsODAgODBhMTIgMTIgMCAwIDEgMCAxN1wiIC8+J1xyXG4gICAgaWYgKHZhcmlhbnQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChhcnJvd0Rvd25TdmcpXHJcbiAgICAgICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChhcnJvd1VwU3ZnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdmFyaWFudCA9PSB1bmRlZmluZWQgPyBzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gc3ViamVjdCA9PSAnQ29tYmluZWQnID8gJ0NvbWJpbmVkIFNjaWVuY2UnIDogc3ViamVjdCA6IHllYXIgOiAoc2Vzc2lvbiA9PSAnbScgPyAnRmViIC8gTWFyJyA6IHNlc3Npb24gPT0gJ3MnID8gJ01heSAvIEp1bicgOiAnT2N0IC8gTm92JykgOiBgVmFyaWFudCAke051bWJlcih2YXJpYW50KSArIDF9YFxyXG4gICAgdGl0bGUuaWQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LXRpdGxlYCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS10aXRsZWAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS10aXRsZWAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9LXRpdGxlYFxyXG5cclxuICAgIGJ1dHRvbkVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KVxyXG4gICAgaWYgKHZhcmlhbnQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1jb250YWluZXInKVxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKVxyXG4gICAgICAgIGNvbnRhaW5lci5pZCA9IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LXllYXJzLWNvbnRhaW5lcmAgOiBgc2lkZS0ke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tc2Vzc2lvbnMtY29udGFpbmVyYCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzLWNvbnRhaW5lcmBcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ3NpZGUtZ3JvdXAnKVxyXG4gICAgICAgIGdyb3VwLmlkID0gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0teWVhcnNgIDogYHNpZGUtJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LXNlc3Npb25zYCA6IGBzaWRlLSR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXZhcmlhbnRzYFxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXApXHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5cclxuICAgICAgICBhcnJvd0Rvd25TdmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFycm93RG93blN2Zy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgICAgICAgICBhcnJvd1VwU3ZnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGFycm93VXBTdmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFycm93RG93blN2Zy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gICAgICAgICAgICBhcnJvd1VwU3ZnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNYWluQnV0dG9uKGxldmVsLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uLCB2YXJpYW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKVxyXG4gICAgZWxlbWVudENvbnRhaW5lci5pZCA9IHZhcmlhbnQgPT0gdW5kZWZpbmVkID8gc2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/IGAke2xldmVsfS0ke3N1YmplY3R9LWNhcmQtY29udGFpbmVyYCA6IGAke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tY2FyZC1jb250YWluZXJgIDogYCR7bGV2ZWx9LSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LWNhcmQtY29udGFpbmVyYCA6IGAke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9LWNhcmQtY29udGFpbmVyYFxyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcclxuICAgIGVsZW1lbnQuaWQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBgJHtsZXZlbH0tJHtzdWJqZWN0fS1jYXJkYCA6IGAke2xldmVsfS0ke3N1YmplY3R9LSR7eWVhcn0tY2FyZGAgOiBgJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tY2FyZGAgOiBgJHtsZXZlbH0tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fS1jYXJkYFxyXG5cclxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWNvbnRhaW5lcicpXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWFnZS5zcmMgPSBpbWFnZXNbYCR7bGV2ZWx9XyR7c3ViamVjdC50b0xvd2VyQ2FzZSgpfWBdXHJcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSlcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB2YXJpYW50ID09IHVuZGVmaW5lZCA/IHNlc3Npb24gPT0gdW5kZWZpbmVkID8geWVhciA9PSB1bmRlZmluZWQgPyBzdWJqZWN0ID09ICdDb21iaW5lZCcgPyAnQ29tYmluZWQgU2NpZW5jZScgOiBzdWJqZWN0IDogeWVhciA6IChzZXNzaW9uID09ICdtJyA/ICdGZWIgLyBNYXInIDogc2Vzc2lvbiA9PSAncycgPyAnTWF5IC8gSnVuJyA6ICdPY3QgLyBOb3YnKSA6IGBWYXJpYW50ICR7TnVtYmVyKHZhcmlhbnQpICsgMX1gXHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJylcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50Q29udGFpbmVyXHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlU2lkZUJ1dHRvbiwgZ2VuZXJhdGVNYWluQnV0dG9uIH0iLCJpbXBvcnQgJy4uL2Nzcy9tb2RhbC5jc3MnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNb2RhbCh0aXRsZSwgY29udGVudHMsIHN1Ym1pdEJ1dHRvbkJlaGF2aW9yLCBjYW5jZWxCdXR0b25CZWhhdmlvcikge1xyXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbW9kYWxCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuXHJcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbClcclxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tkcm9wKVxyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSlcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSB0eXBlb2YgKGNvbnRlbnRzW2ldKSA9PSAnc3RyaW5nJyA/IGNvbnRlbnRzW2ldIDogY29udGVudHNbaV1bMF1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoY29udGVudHNbaV1bMV0pID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY29udGVudHNbaV1bMV0oKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRhaW5lcicpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXHJcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcCcpXHJcblxyXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICBpZiAobW9kYWxDb250YWluZXIucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbW9kYWxDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBtb2RhbEJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnV0dG9ucy1jb250YWluZXInKVxyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxCdXR0b25zQ29udGFpbmVyKVxyXG5cclxuICAgIGlmIChzdWJtaXRCdXR0b25CZWhhdmlvciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IHN1Ym1pdEJ1dHRvbkJlaGF2aW9yWzBdXHJcblxyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uQmVoYXZpb3JbMV0oKVxyXG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG1vZGFsQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhbmNlbEJ1dHRvbkJlaGF2aW9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gY2FuY2VsQnV0dG9uQmVoYXZpb3JbMF1cclxuXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25CZWhhdmlvclsxXSgpXHJcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbW9kYWxCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbilcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxyXG5cclxuICAgIHJldHVybiBtb2RhbENvbnRhaW5lclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb2RhbCAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBvbFN1YmplY3RzTVMgZnJvbSBcIi4uL2pzb24vT0xfc3ViamVjdHNfbXMuanNvblwiXHJcbmltcG9ydCBhbFN1YmplY3RzTVMgZnJvbSBcIi4uL2pzb24vQUxfc3ViamVjdHNfbXMuanNvblwiXHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZVNpZGVCdXR0b24sIGdlbmVyYXRlTWFpbkJ1dHRvbiB9IGZyb20gXCIuL2dlbmVyYXRlRWxlbWVudHMuanNcIlxyXG5pbXBvcnQgY3JlYXRlTW9kYWwgZnJvbSBcIi4vbW9kYWwuanNcIlxyXG5cclxuLy8gR0xPQkFMIFZBUklBQkxFU1xyXG5sZXQgdXNlckFuc3dlcnMgPSBbXVxyXG5sZXQgaW5FeGFtID0gZmFsc2VcclxubGV0IGNvbmZpcm0gPSBmYWxzZVxyXG5cclxuLy8gY3JlZGl0cyBidXR0b24gYmVoYXZpb3JcclxuY29uc3QgY3JlZGl0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVkaXRzJylcclxuY3JlZGl0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNyZWF0ZU1vZGFsKFxyXG4gICAgICAgICdDcmVkaXQnLCAvLyB0aXRsZVxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1RoYW5rcyBGb3IgdXNpbmcgPGJyPiB0aGUgd2Vic2l0ZSA8MycsXHJcbiAgICAgICAgICAgICdXZWJzaXRlIGNyZWF0ZWQgYnkgPGJyPiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ppZWREZXZcIj5aaWVkPC9hPiAmIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vb21hci1lbHNoZXJiaW55XCI+U2hlcmJvPC9hPicsXHJcbiAgICAgICAgICAgICdSZXBvc2l0b3J5OiA8YnI+IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vWmllZERldi9tY3EtbWF0ZVwiPk1DUSBNYXRlPC9hPidcclxuICAgICAgICBdLCAvLyBjb250ZW50XHJcbiAgICApXHJcbn0pXHJcblxyXG4vLyBwYXRoIGRpcmVjdGlvbiBiZWhhdmlvclxyXG5jb25zdCBtb3ZlQmFja3dhcmRzQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja3dhcmRzLWFycm93JylcclxuY29uc3QgbW92ZUZvcndhcmRzQXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yd2FyZHMtYXJyb3cnKVxyXG5cclxubGV0IGJhY2t3YXJkX3N0YWNrID0gW107XHJcbmxldCBjdXJyZW50X3BhdGggPSBcImhvbWVcIjsgLy8gaW1wb3J0YW50IHRvIHB1dCBpbiBkYXRhdHlwZSBhbmQgZm9ybWF0IG9mIHJvb3QgcGF0aFxyXG5sZXQgZm9yd2FyZF9zdGFjayA9IFtdO1xyXG5cclxuZnVuY3Rpb24gaXNCYWNrd2FyZEF2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiBiYWNrd2FyZF9zdGFjay5sZW5ndGggPiAwID8gMSA6IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRm9yd2FyZEF2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiBmb3J3YXJkX3N0YWNrLmxlbmd0aCA+IDAgPyAxIDogMDtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFja3dhcmRQYXRoKCkge1xyXG4gICAgaWYgKGJhY2t3YXJkX3N0YWNrLmxlbmd0aCA9PSAwKSByZXR1cm4gMDtcclxuICAgIGZvcndhcmRfc3RhY2sucHVzaChjdXJyZW50X3BhdGgpO1xyXG4gICAgY3VycmVudF9wYXRoID0gYmFja3dhcmRfc3RhY2sucG9wKClcclxuXHJcbiAgICBpZiAoaXNCYWNrd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUJhY2t3YXJkc0Fycm93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vdmVCYWNrd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXRoRWxlbWVudCh0cnVlKVxyXG4gICAgdXBkYXRlUGF0aEljb24oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQYXRoKG5ld19wYXRoKSB7XHJcbiAgICBiYWNrd2FyZF9zdGFjay5wdXNoKGN1cnJlbnRfcGF0aCk7XHJcbiAgICBmb3J3YXJkX3N0YWNrID0gW107XHJcbiAgICBjdXJyZW50X3BhdGggPSBuZXdfcGF0aDtcclxuXHJcbiAgICBpZiAoaXNCYWNrd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUJhY2t3YXJkc0Fycm93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vdmVCYWNrd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW92ZUZvcndhcmRzQXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXRoRWxlbWVudCgpXHJcbiAgICB1cGRhdGVQYXRoSWNvbigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcndhcmRQYXRoKCkge1xyXG4gICAgaWYgKGZvcndhcmRfc3RhY2subGVuZ3RoID09IDApIHJldHVybiAwO1xyXG4gICAgYmFja3dhcmRfc3RhY2sucHVzaChjdXJyZW50X3BhdGgpO1xyXG4gICAgY3VycmVudF9wYXRoID0gZm9yd2FyZF9zdGFjay5wb3AoKTtcclxuICAgIGlmIChpc0JhY2t3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICBtb3ZlQmFja3dhcmRzQXJyb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW92ZUJhY2t3YXJkc0Fycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICBpZiAoaXNGb3J3YXJkQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb3ZlRm9yd2FyZHNBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhdGhFbGVtZW50KHRydWUpXHJcbiAgICB1cGRhdGVQYXRoSWNvbigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhdGhFbGVtZW50KGNyZWF0ZVNoZWV0KSB7XHJcbiAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdGgnKVxyXG4gICAgY29uc3QgcGF0aFRleHQgPSBjdXJyZW50X3BhdGguc3BsaXQoJz4nKVxyXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgaWYgKHBhdGhUZXh0Lmxlbmd0aCA9PSA1KSB7XHJcbiAgICAgICAgcGF0aC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHBhdGguYXBwZW5kQ2hpbGQoY3JlYXRlUGF0aEVsZW1lbnQoYCR7cGF0aFRleHRbMF0udG9VcHBlckNhc2UoKX0gJHtwYXRoVGV4dFsxXX1gKSlcclxuICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KHBhdGhUZXh0WzJdKSlcclxuICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KHBhdGhUZXh0WzNdID09ICdtJyA/ICdGZWIgLyBNYXInIDogcGF0aFRleHRbM10gPT0gJ3MnID8gJ01heSAvIEp1bicgOiAnT2N0IC8gTm92JykpXHJcbiAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChgVmFyaWFudCAke051bWJlcihwYXRoVGV4dFs0XSkgKyAxfWAsIHRydWUpKVxyXG4gICAgICAgIGlmIChjcmVhdGVTaGVldCkge1xyXG4gICAgICAgICAgICBpbkV4YW0gPSB0cnVlXHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQnViYmxlU2hlZXRNZW51KHBhdGhUZXh0WzBdLCBwYXRoVGV4dFsxXSwgcGF0aFRleHRbMl0sIHBhdGhUZXh0WzNdLCBwYXRoVGV4dFs0XSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChwYXRoVGV4dC5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgIHBhdGguaW5uZXJIVE1MID0gJydcclxuICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KGAke3BhdGhUZXh0WzBdLnRvVXBwZXJDYXNlKCl9ICR7cGF0aFRleHRbMV19YCkpXHJcbiAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChwYXRoVGV4dFsyXSkpXHJcbiAgICAgICAgcGF0aC5hcHBlbmRDaGlsZChjcmVhdGVQYXRoRWxlbWVudChwYXRoVGV4dFszXSA9PSAnbScgPyAnRmViIC8gTWFyJyA6IHBhdGhUZXh0WzNdID09ICdzJyA/ICdNYXkgLyBKdW4nIDogJ09jdCAvIE5vdicpKVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ3JlYXRlU3ViTWVudShwYXRoVGV4dFswXSwgcGF0aFRleHRbMV0sIHBhdGhUZXh0WzJdLCBwYXRoVGV4dFszXSkpXHJcbiAgICB9IGVsc2UgaWYgKHBhdGhUZXh0Lmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgcGF0aC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHBhdGguYXBwZW5kQ2hpbGQoY3JlYXRlUGF0aEVsZW1lbnQoYCR7cGF0aFRleHRbMF0udG9VcHBlckNhc2UoKX0gJHtwYXRoVGV4dFsxXX1gKSlcclxuICAgICAgICBwYXRoLmFwcGVuZENoaWxkKGNyZWF0ZVBhdGhFbGVtZW50KHBhdGhUZXh0WzJdKSlcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKENyZWF0ZVN1Yk1lbnUocGF0aFRleHRbMF0sIHBhdGhUZXh0WzFdLCBwYXRoVGV4dFsyXSkpXHJcbiAgICB9IGVsc2UgaWYgKHBhdGhUZXh0Lmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgcGF0aC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHBhdGguYXBwZW5kQ2hpbGQoY3JlYXRlUGF0aEVsZW1lbnQoYCR7cGF0aFRleHRbMF0udG9VcHBlckNhc2UoKX0gJHtwYXRoVGV4dFsxXX1gKSlcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKENyZWF0ZVN1Yk1lbnUocGF0aFRleHRbMF0sIHBhdGhUZXh0WzFdKSlcclxuICAgIH0gZWxzZSBpZiAocGF0aFRleHQubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICBwYXRoLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lTWVudSgpKVxyXG4gICAgfVxyXG59XHJcblxyXG5tb3ZlQmFja3dhcmRzQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaXNCYWNrd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7IGJhY2t3YXJkUGF0aCgpIH0pXHJcbiAgICB9XHJcbn0pXHJcbm1vdmVGb3J3YXJkc0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGlzRm9yd2FyZEF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7IGZvcndhcmRQYXRoKCkgfSlcclxuICAgIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIG5hdkNvbmZpcm0oY29uZmlybUNhbGxiYWNrKSB7XHJcbiAgICBpZiAoaW5FeGFtKSB7XHJcbiAgICAgICAgY3JlYXRlTW9kYWwoXHJcbiAgICAgICAgICAgICdBcmUgeW91IHN1cmU/JywgLy8gdGl0bGVcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJ05hdmlnYXRpbmcgd2lsbCBsb3NlIHlvdXIgcGFzdCBwcm9ncmVzcyBvbiB0aGUgY3VycmVudCBleGFtJyxcclxuICAgICAgICAgICAgXSwgLy8gY29udGVudCxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJ0NvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGluRXhhbSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4geyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhdGhFbGVtZW50KHRpdGxlLCBsYXN0KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICBjb25zdCBwYXRoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwYXRoRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhdGhFbGVtZW50KVxyXG5cclxuICAgIGlmICghbGFzdCkge1xyXG4gICAgICAgIGNvbnN0IGFycm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpOyBhcnJvd0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS1idXR0b24tYXJyb3cnKTsgYXJyb3dFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMzInKTsgYXJyb3dFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzMyJyk7IGFycm93RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI1NiAyNTYnKTsgYXJyb3dFbGVtZW50LnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTsgYXJyb3dFbGVtZW50LmlubmVySFRNTCA9ICcgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTE4NC40OSAxMzYuNDlsLTgwIDgwYTEyIDEyIDAgMCAxLTE3LTE3TDE1OSAxMjhMODcuNTEgNTYuNDlhMTIgMTIgMCAxIDEgMTctMTdsODAgODBhMTIgMTIgMCAwIDEtLjAyIDE3XCIgLz4nXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChhcnJvd0VsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUGF0aEljb24oKSB7XHJcbiAgICBjb25zdCBwYXRoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXRoLWljb24nKVxyXG5cclxuICAgIGlmIChjdXJyZW50X3BhdGguc3BsaXQoJz4nKVsxXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwYXRoSWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMjIyLjE0IDEwNS44NWwtODAtODBhMjAgMjAgMCAwIDAtMjguMjggMGwtODAgODBBMTkuODYgMTkuODYgMCAwIDAgMjggMTIwdjk2YTEyIDEyIDAgMCAwIDEyIDEyaDY0YTEyIDEyIDAgMCAwIDEyLTEydi01MmgyNHY1MmExMiAxMiAwIDAgMCAxMiAxMmg2NGExMiAxMiAwIDAgMCAxMi0xMnYtOTZhMTkuODYgMTkuODYgMCAwIDAtNS44Ni0xNC4xNU0yMDQgMjA0aC00MHYtNTJhMTIgMTIgMCAwIDAtMTItMTJoLTQ4YTEyIDEyIDAgMCAwLTEyIDEydjUySDUydi04Mi4zNWw3Ni03Nmw3NiA3NlpcIiAvPjwvc3ZnPidcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudF9wYXRoLnNwbGl0KCc+JylbMV0gPT0gJ0Jpb2xvZ3knKSB7XHJcbiAgICAgICAgcGF0aEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPjxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIk0yMjQgMjA0aC0xMmE5Mi4xIDkyLjEgMCAwIDAtNjQtMTQzLjIyVjMyYTIwIDIwIDAgMCAwLTIwLTIwSDgwYTIwIDIwIDAgMCAwLTIwIDIwdjk2YTIwIDIwIDAgMCAwIDIwIDIwaDQ4YTIwIDIwIDAgMCAwIDIwLTIwVjg1LjA4QTY4LjEgNjguMSAwIDAgMSAyMDQgMTUyYTY3LjM5IDY3LjM5IDAgMCAxLTI0LjE4IDUySDMyYTEyIDEyIDAgMCAwIDAgMjRoMTkyYTEyIDEyIDAgMCAwIDAtMjRtLTEwMC04MEg4NFYzNmg0MFptLTUyIDY0YTEyIDEyIDAgMCAxIDAtMjRoNjRhMTIgMTIgMCAwIDEgMCAyNFpcIi8+PC9zdmc+J1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50X3BhdGguc3BsaXQoJz4nKVsxXSA9PSAnUGh5c2ljcycpIHtcclxuICAgICAgICBwYXRoSWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIwOS44NCA0Ny40NEE5MS40MiA5MS40MiAwIDAgMCAxNDQuNjIgMjBoLS4zNWE5MS40NCA5MS40NCAwIDAgMC02NS4xMiAyN2wtNjEuMzkgNjIuMTdhMjAgMjAgMCAwIDAgLjA4IDI4LjIxTDQ2LjUgMTY2YTE5Ljg5IDE5Ljg5IDAgMCAwIDE0LjE1IDUuODZoLjExYTE5Ljg2IDE5Ljg2IDAgMCAwIDE0LjItNmw2MC44Ny02Mi4zOWExMi4wNyAxMi4wNyAwIDAgMSAxNi43Ny0uMTJhMTEuNjMgMTEuNjMgMCAwIDEgMy41IDguMzVhMTIuODUgMTIuODUgMCAwIDEtMy42NiA5LjExTDkwLjE5IDE4MWEyMCAyMCAwIDAgMC0uMjEgMjguNWwyOC42NiAyOC42NmEyMC4wOCAyMC4wOCAwIDAgMCAyOC4xNS4xNGw2MS43Ni02MC40NGwuMDktLjA5YzM2LjAxLTM1Ljk5IDM2LjU0LTk0LjQ2IDEuMi0xMzAuMzNNNjAuNjIgMTQ2LjIxbC0yMy0yM2wxOC4xOS0xOC40MWwyMi44OCAyMi44OFptNzIuMiA3Mi4xOGwtMjMtMjNsMTguNjEtMThsMjIuODggMjIuODdabTU4Ljg5LTU3LjYybC0yMy4yMyAyMi43M2wtMjIuNzgtMjIuNzdMMTY5LjIxIDEzOGwuMTUtLjE0YTM3IDM3IDAgMCAwIDEwLjc0LTI2LjM3YTM1LjQ0IDM1LjQ0IDAgMCAwLTEwLjg1LTI1LjQxYTM2LjIgMzYuMiAwIDAgMC01MC40NC40OGwtLjEuMTFsLTIzLjI1IDIzLjgybC0yMi43OC0yMi43N2wyMy41LTIzLjhBNjcuNTUgNjcuNTUgMCAwIDEgMTQ0LjI3IDQ0aC4yNmE2Ny42MiA2Ny42MiAwIDAgMSA0OC4yMSAyMC4yOWMyNi4xMSAyNi40OSAyNS42NCA2OS43Ni0xLjAzIDk2LjQ4XCIvPjwvc3ZnPidcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudF9wYXRoLnNwbGl0KCc+JylbMV0gPT0gJ0NoZW1pc3RyeScpIHtcclxuICAgICAgICBwYXRoSWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIyNS4xNSAxOTcuNzFMMTY0IDk1LjgxVjQ0aDRhMTIgMTIgMCAwIDAgMC0yNEg4OGExMiAxMiAwIDAgMCAwIDI0aDR2NTEuODFsLTYxLjE1IDEwMS45QTIwIDIwIDAgMCAwIDQ4IDIyOGgxNjBhMjAgMjAgMCAwIDAgMTcuMTUtMzAuMjlNMTQwIDQ0djU1LjE0YTEyIDEyIDAgMCAwIDEuNzEgNi4xN2wzNS4xMyA1OC41NGMtMTAuNzkuODYtMjUuMTUtMS4zMS00My40Mi0xMC41NmMtMTQtNy4wOC0yNy40Ni0xMS4zMy00MC4yNy0xMi43NmwyMS4xNC0zNS4yMmExMiAxMiAwIDAgMCAxLjcxLTYuMTdWNDRaTTU1LjA2IDIwNEw3OSAxNjQuMTljMTMtMS4xMSAyNy42MiAyLjQyIDQzLjYyIDEwLjUyYzE5LjYxIDkuOTIgMzYuMjUgMTMuMzEgNDkuODUgMTMuMzFhNzUuNDQgNzUuNDQgMCAwIDAgMTcuNjQtMi4wMmwxMC44MyAxOFpcIi8+PC9zdmc+J1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50X3BhdGguc3BsaXQoJz4nKVsxXSA9PSAnRWNvbm9taWNzJykge1xyXG4gICAgICAgIHBhdGhJY29uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCJNMjM2IDIwOGExMiAxMiAwIDAgMS0xMiAxMkgzMmExMiAxMiAwIDAgMS0xMi0xMlY0OGExMiAxMiAwIDAgMSAyNCAwdjk5bDQzLjUxLTQzLjUyYTEyIDEyIDAgMCAxIDE3IDBMMTI4IDEyN2w0My00M2gtMTFhMTIgMTIgMCAwIDEgMC0yNGg0MGExMiAxMiAwIDAgMSAxMiAxMnY0MGExMiAxMiAwIDAgMS0yNCAwdi0xMWwtNTEuNTEgNTEuNTJhMTIgMTIgMCAwIDEtMTcgMEw5NiAxMjlsLTUyIDUydjE1aDE4MGExMiAxMiAwIDAgMSAxMiAxMlwiLz48L3N2Zz4nXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRfcGF0aC5zcGxpdCgnPicpWzFdID09ICdDb21iaW5lZCcpIHtcclxuICAgICAgICBwYXRoSWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiTTIxOS4yMyAxNTkuMmExOTYuNjYgMTk2LjY2IDAgMCAwLTE4LTMxLjJhMTk2LjY2IDE5Ni42NiAwIDAgMCAxOC0zMS4yYzExLjg0LTI2LjMxIDExLjY5LTQ3LjQ4LS40My01OS42cy0zMy4yOS0xMi4yNy01OS42LS40M2ExOTYuNjYgMTk2LjY2IDAgMCAwLTMxLjIgMThhMTk2LjY2IDE5Ni42NiAwIDAgMC0zMS4yLTE4Yy0yNi4zMS0xMS44NC00Ny40OC0xMS42OS01OS42LjQzcy0xMi4yNyAzMy4yOS0uNDMgNTkuNmExOTYuNjYgMTk2LjY2IDAgMCAwIDE4IDMxLjJhMTk2LjY2IDE5Ni42NiAwIDAgMC0xOCAzMS4yYy0xMS44NCAyNi4zMS0xMS42OSA0Ny40OC40MyA1OS42YzYuMTMgNi4xMyAxNC41OCA5LjIgMjQuOCA5LjJjMTAgMCAyMS43Ny0yLjkyIDM0Ljc2LTguNzdhMTk2LjY2IDE5Ni42NiAwIDAgMCAzMS4yLTE4YTE5Ni42NiAxOTYuNjYgMCAwIDAgMzEuMiAxOGMxMyA1Ljg1IDI0Ljc0IDguNzcgMzQuNzYgOC43N2MxMC4yNiAwIDE4LjcxLTMuMDcgMjQuODQtOS4yYzEyLjE2LTEyLjEyIDEyLjMxLTMzLjI5LjQ3LTU5LjZtLTE3LjQxLTEwNWM1LjI1IDUuMjYgMS43OSAyNi0xNiA1My43OGMtNS42MS02LjY2LTExLjY1LTEzLjI1LTE4LjA3LTE5LjY3UzE1NC43IDc1LjgzIDE0OCA3MC4yMmMyNy44Mi0xNy44MyA0OC41Ni0yMS4yOSA1My44Mi0xNi4wNFpNMTcxLjI0IDEyOGEyODguNiAyODguNiAwIDAgMS0yMC41MSAyMi43M0EyODguNiAyODguNiAwIDAgMSAxMjggMTcxLjI0YTI4OC42IDI4OC42IDAgMCAxLTIyLjczLTIwLjUxQTI4OC42IDI4OC42IDAgMCAxIDg0Ljc2IDEyOEEyOTguNTUgMjk4LjU1IDAgMCAxIDEyOCA4NC43NmEyODYuODMgMjg2LjgzIDAgMCAxIDIyLjczIDIwLjUxQTI4Ni44MyAyODYuODMgMCAwIDEgMTcxLjI0IDEyOE01NC4xOCA1NC4xOGMxLjQ2LTEuNDUgNC4xLTIuMjQgNy43NS0yLjI0YzkuNTMgMCAyNS45NCA1LjM5IDQ2IDE4LjI4Yy02LjY2IDUuNjEtMTMuMjUgMTEuNjUtMTkuNjcgMTguMDdTNzUuODMgMTAxLjMgNzAuMjIgMTA4QzUyLjM5IDgwLjE4IDQ4LjkzIDU5LjQ0IDU0LjE4IDU0LjE4bTAgMTQ3LjY0Yy01LjI1LTUuMjYtMS43OS0yNiAxNi01My43OGM1LjYxIDYuNjYgMTEuNjUgMTMuMjUgMTguMDcgMTkuNjdzMTMgMTIuNDYgMTkuNjcgMTguMDdjLTI3Ljc0IDE3LjgzLTQ4LjQ4IDIxLjI5LTUzLjc0IDE2LjA0bTE0Ny42NCAwYy01LjI2IDUuMjUtMjYgMS43OS01My43OC0xNmM2LjY2LTUuNjEgMTMuMjUtMTEuNjUgMTkuNjctMTguMDdzMTIuNDYtMTMgMTguMDctMTkuNjdjMTcuODMgMjcuNzQgMjEuMjkgNDguNDggMTYuMDQgNTMuNzRNMTQ0IDEyOGExNiAxNiAwIDEgMS0xNi0xNmExNiAxNiAwIDAgMSAxNiAxNlwiLz48L3N2Zz4nXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBjcmVhdGluZyBzaWRlIGJ1dHRvbnMgZm9yIG9sIHN1YmplY3RzXHJcbmNvbnN0IHNpZGVHcm91cE9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGUtZ3JvdXAtb2wnKVxyXG5PYmplY3Qua2V5cyhvbFN1YmplY3RzTVMpLmZvckVhY2goc3ViamVjdCA9PiB7XHJcbiAgICBjb25zdCBzdWJqZWN0RWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbignb2wnLCBzdWJqZWN0KVxyXG4gICAgc3ViamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gYHNpZGUtb2wtYnV0dG9uLSR7c3ViamVjdH1gIHx8IGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLSR7c3ViamVjdH0tdGl0bGVgKSB7XHJcbiAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KCdvbCcsIHN1YmplY3QpKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBzaWRlR3JvdXBPbC5hcHBlbmRDaGlsZChzdWJqZWN0RWxlbWVudClcclxuXHJcbiAgICBjb25zdCBzaWRlU3ViamVjdFllYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNpZGUtb2wtJHtzdWJqZWN0fS15ZWFyc2ApXHJcbiAgICBPYmplY3Qua2V5cyhvbFN1YmplY3RzTVNbc3ViamVjdF0pLmZvckVhY2goeWVhciA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhckVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oJ29sJywgc3ViamVjdCwgeWVhcilcclxuICAgICAgICB5ZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gYHNpZGUtb2wtYnV0dG9uLSR7c3ViamVjdH0tJHt5ZWFyfWAgfHwgZS50YXJnZXQuaWQgPT0gYHNpZGUtb2wtJHtzdWJqZWN0fS0ke3llYXJ9LXRpdGxlYCkge1xyXG4gICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ3JlYXRlU3ViTWVudSgnb2wnLCBzdWJqZWN0LCB5ZWFyKSlcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn1gKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNpZGVTdWJqZWN0WWVhcnMuYXBwZW5kQ2hpbGQoeWVhckVsZW1lbnQpXHJcblxyXG4gICAgICAgIGNvbnN0IHNpZGVZZWFyU2Vzc2lvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2lkZS1vbC0ke3N1YmplY3R9LSR7eWVhcn0tc2Vzc2lvbnNgKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXSkuZm9yRWFjaChzZXNzaW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oJ29sJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbilcclxuICAgICAgICAgICAgc2Vzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1vbC1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn1gIHx8IGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLSR7c3ViamVjdH0tJHt5ZWFyfS0ke3Nlc3Npb259LXRpdGxlYCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ3JlYXRlU3ViTWVudSgnb2wnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn1gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2lkZVllYXJTZXNzaW9ucy5hcHBlbmRDaGlsZChzZXNzaW9uRWxlbWVudClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGVTZXNzaW9uVmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2lkZS1vbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS12YXJpYW50c2ApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXSkuZm9yRWFjaCh2YXJpYW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl1bdmFyaWFudF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKCdvbCcsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGBzaWRlLW9sLWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9YCB8fCBlLnRhcmdldC5pZCA9PSBgc2lkZS1vbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9LXRpdGxlYCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5FeGFtID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gYGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufT4ke3ZhcmlhbnR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUJ1YmJsZVNoZWV0TWVudSgnb2wnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uLCB2YXJpYW50KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzaWRlU2Vzc2lvblZhcmlhbnRzLmFwcGVuZENoaWxkKHZhcmlhbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy8gY3JlYXRpbmcgc2lkZSBidXR0b25zIGZvciBhbCBzdWJqZWN0c1xyXG5jb25zdCBzaWRlR3JvdXBBbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlLWdyb3VwLWFsJylcclxuT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TKS5mb3JFYWNoKHN1YmplY3QgPT4ge1xyXG4gICAgY29uc3Qgc3ViamVjdEVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oJ2FsJywgc3ViamVjdClcclxuICAgIHN1YmplY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGBzaWRlLWFsLWJ1dHRvbi0ke3N1YmplY3R9YCB8fCBlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC0ke3N1YmplY3R9LXRpdGxlYCkge1xyXG4gICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ3JlYXRlU3ViTWVudSgnYWwnLCBzdWJqZWN0KSlcclxuICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYGFsPiR7c3ViamVjdH1gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgc2lkZUdyb3VwQWwuYXBwZW5kQ2hpbGQoc3ViamVjdEVsZW1lbnQpXHJcblxyXG4gICAgY29uc3Qgc2lkZVN1YmplY3RZZWFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaWRlLWFsLSR7c3ViamVjdH0teWVhcnNgKVxyXG4gICAgT2JqZWN0LmtleXMoYWxTdWJqZWN0c01TW3N1YmplY3RdKS5mb3JFYWNoKHllYXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJFbGVtZW50ID0gZ2VuZXJhdGVTaWRlQnV0dG9uKCdhbCcsIHN1YmplY3QsIHllYXIpXHJcbiAgICAgICAgeWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09IGBzaWRlLWFsLWJ1dHRvbi0ke3N1YmplY3R9LSR7eWVhcn0teWVhcmAgfHwgZS50YXJnZXQuaWQgPT0gYHNpZGUtYWwtJHtzdWJqZWN0fS0ke3llYXJ9LXRpdGxlYCkge1xyXG4gICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ3JlYXRlU3ViTWVudSgnYWwnLCBzdWJqZWN0LCB5ZWFyKSlcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9PiR7eWVhcn1gKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNpZGVTdWJqZWN0WWVhcnMuYXBwZW5kQ2hpbGQoeWVhckVsZW1lbnQpXHJcblxyXG4gICAgICAgIGNvbnN0IHNpZGVZZWFyU2Vzc2lvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2lkZS1hbC0ke3N1YmplY3R9LSR7eWVhcn0tc2Vzc2lvbnNgKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKGFsU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXSkuZm9yRWFjaChzZXNzaW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkVsZW1lbnQgPSBnZW5lcmF0ZVNpZGVCdXR0b24oJ2FsJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbilcclxuICAgICAgICAgICAgc2Vzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0teWVhcmAgfHwgZS50YXJnZXQuaWQgPT0gYHNpZGUtYWwtJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tdGl0bGVgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KCdhbCcsIHN1YmplY3QsIHllYXIsIHNlc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufWApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNpZGVZZWFyU2Vzc2lvbnMuYXBwZW5kQ2hpbGQoc2Vzc2lvbkVsZW1lbnQpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaWRlU2Vzc2lvblZhcmlhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNpZGUtYWwtJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tdmFyaWFudHNgKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl0pLmZvckVhY2godmFyaWFudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dW3ZhcmlhbnRdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50RWxlbWVudCA9IGdlbmVyYXRlU2lkZUJ1dHRvbignYWwnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uLCB2YXJpYW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC1idXR0b24tJHtzdWJqZWN0fS0ke3llYXJ9LSR7c2Vzc2lvbn0tJHt2YXJpYW50fS15ZWFyYCB8fCBlLnRhcmdldC5pZCA9PSBgc2lkZS1hbC0ke3N1YmplY3R9LSR7eWVhcn0tJHtzZXNzaW9ufS0ke3ZhcmlhbnR9LXRpdGxlYCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5FeGFtID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gYGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBhbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufT4ke3ZhcmlhbnR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUJ1YmJsZVNoZWV0TWVudSgnYWwnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uLCB2YXJpYW50KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzaWRlU2Vzc2lvblZhcmlhbnRzLmFwcGVuZENoaWxkKHZhcmlhbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy8gY3JlYXRpbmcgaG9tZSBtZW51XHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVNZW51KCkge1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBob21lLmlkID0gJ2hvbWUnXHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxyXG4gICAgY29uc3Qgb2xUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIG9sVGl0bGUudGV4dENvbnRlbnQgPSAnT0wgU3ViamVjdHMnXHJcbiAgICBob21lLmFwcGVuZENoaWxkKG9sVGl0bGUpXHJcblxyXG4gICAgY29uc3Qgb2xDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBPYmplY3Qua2V5cyhvbFN1YmplY3RzTVMpLmZvckVhY2goc3ViamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3ViamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ29sJywgc3ViamVjdClcclxuICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQoc3ViamVjdEVsZW1lbnQpXHJcbiAgICAgICAgc3ViamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KCdvbCcsIHN1YmplY3QpKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgb2w+JHtzdWJqZWN0fWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgb2xDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJqZWN0RWxlbWVudClcclxuICAgIH0pXHJcbiAgICBob21lLmFwcGVuZENoaWxkKG9sQ2FyZHNDb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGFsVGl0bGUudGV4dENvbnRlbnQgPSAnQUwgU3ViamVjdHMnXHJcbiAgICBob21lLmFwcGVuZENoaWxkKGFsVGl0bGUpXHJcblxyXG4gICAgY29uc3QgYWxDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVMpLmZvckVhY2goc3ViamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3ViamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ2FsJywgc3ViamVjdClcclxuICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQoc3ViamVjdEVsZW1lbnQpXHJcbiAgICAgICAgc3ViamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KCdhbCcsIHN1YmplY3QpKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYWxDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJqZWN0RWxlbWVudClcclxuICAgIH0pXHJcbiAgICBob21lLmFwcGVuZENoaWxkKGFsQ2FyZHNDb250YWluZXIpXHJcblxyXG4gICAgcmV0dXJuIGhvbWVcclxufVxyXG5cclxuLy8gY3JlYXRpbmcgdGhlIHN1YiBtZW51IGJ1dHRvbnNcclxuZnVuY3Rpb24gQ3JlYXRlU3ViTWVudShsZXZlbCwgc3ViamVjdCwgeWVhciwgc2Vzc2lvbikge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtZW51LmlkID0gYFNlbGVjdCBhICR7c2Vzc2lvbiA9PSB1bmRlZmluZWQgPyB5ZWFyID09IHVuZGVmaW5lZCA/ICd5ZWFycy1tZW51JyA6ICdzZXNzaW9ucy1tZW51JyA6ICd2YXJpYW50cy1tZW51J31gXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3N1Yi1tZW51JylcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgU2VsZWN0IGEgJHtzZXNzaW9uID09IHVuZGVmaW5lZCA/IHllYXIgPT0gdW5kZWZpbmVkID8gJ3llYXInIDogJ3Nlc3Npb24nIDogJ3ZhcmlhbnQnfWBcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaWYgKGxldmVsLnRvTG93ZXJDYXNlKCkgPT0gJ29sJykge1xyXG4gICAgICAgIGlmIChzZXNzaW9uID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoeWVhciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XSkuZm9yRWFjaCh5ZWFyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ZWFyRWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbignb2wnLCBzdWJqZWN0LCB5ZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZCh5ZWFyRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKENyZWF0ZVN1Yk1lbnUoJ29sJywgc3ViamVjdCwgeWVhcikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHllYXJFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXSkuZm9yRWFjaChzZXNzaW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXNzaW9uRWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbignb2wnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZChzZXNzaW9uRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKENyZWF0ZVN1Yk1lbnUoJ29sJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYXRoKGBvbD4ke3N1YmplY3R9PiR7eWVhcn0+JHtzZXNzaW9ufWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vzc2lvbkVsZW1lbnQpXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sU3ViamVjdHNNU1tzdWJqZWN0XVt5ZWFyXVtzZXNzaW9uXSkuZm9yRWFjaCh2YXJpYW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl1bdmFyaWFudF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZ2VuZXJhdGVNYWluQnV0dG9uKCdvbCcsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUm90YXRpbmdDYXJkKHZhcmlhbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZDb25maXJtKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluRXhhbSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gYGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhdGgoYG9sPiR7c3ViamVjdH0+JHt5ZWFyfT4ke3Nlc3Npb259PiR7dmFyaWFudH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVCdWJibGVTaGVldE1lbnUoJ29sJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbiwgdmFyaWFudCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQodmFyaWFudEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChsZXZlbC50b0xvd2VyQ2FzZSgpID09ICdhbCcpIHtcclxuICAgICAgICBpZiAoc2Vzc2lvbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHllYXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVNbc3ViamVjdF0pLmZvckVhY2goeWVhciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeWVhckVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ2FsJywgc3ViamVjdCwgeWVhcilcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQoeWVhckVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KCdhbCcsIHN1YmplY3QsIHllYXIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fT4ke3llYXJ9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZWFyRWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl0pLmZvckVhY2goc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkVsZW1lbnQgPSBnZW5lcmF0ZU1haW5CdXR0b24oJ2FsJywgc3ViamVjdCwgeWVhciwgc2Vzc2lvbilcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVSb3RhdGluZ0NhcmQoc2Vzc2lvbkVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdkNvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChDcmVhdGVTdWJNZW51KCdhbCcsIHN1YmplY3QsIHllYXIsIHNlc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlc3Npb25FbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhbFN1YmplY3RzTVNbc3ViamVjdF1beWVhcl1bc2Vzc2lvbl0pLmZvckVhY2godmFyaWFudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dW3ZhcmlhbnRdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50RWxlbWVudCA9IGdlbmVyYXRlTWFpbkJ1dHRvbignYWwnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uLCB2YXJpYW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJvdGF0aW5nQ2FyZCh2YXJpYW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkV4YW0gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmlubmVySFRNTCA9IGAke2xldmVsfSA+ICR7c3ViamVjdH0gPiAke3llYXJ9ID4gJHtzZXNzaW9ufSA+ICR7dmFyaWFudCArIDF9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGF0aChgYWw+JHtzdWJqZWN0fT4ke3llYXJ9PiR7c2Vzc2lvbn0+JHt2YXJpYW50fWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUJ1YmJsZVNoZWV0TWVudSgnYWwnLCBzdWJqZWN0LCB5ZWFyLCBzZXNzaW9uLCB2YXJpYW50KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2YXJpYW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKVxyXG5cclxuICAgIHJldHVybiBtZW51XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdGF0aW5nQ2FyZChlbGVtZW50Q29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudENvbnRhaW5lci5jaGlsZHJlblswXVxyXG5cclxuICAgIGVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGUgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQsIHNjYWxlIDE1MG1zIGVhc2UsIGJveC1zaGFkb3cgMTUwbXMgZWFzZWBcclxuICAgICAgICBjb25zdCBhVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByb3RhdGVDYXJkKGUpXHJcbiAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIGNvbnN0IGFub3RoZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGBzY2FsZSAxNTBtcyBlYXNlLCBib3gtc2hhZG93IDE1MG1zIGVhc2VgXHJcbiAgICAgICAgICAgIGVsZW1lbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcm90YXRlQ2FyZClcclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgICBlbGVtZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFUaW1lb3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYW5vdGhlclRpbWVvdXQpXHJcblxyXG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJvdGF0ZUNhcmQpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQsIHNjYWxlIDE1MG1zIGVhc2UsIGJveC1zaGFkb3cgMTUwbXMgZWFzZWBcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgYFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIHJvdGF0ZUNhcmQoZSkge1xyXG4gICAgICAgIGNvbnN0IG1vdXNlUG9zID0ge1xyXG4gICAgICAgICAgICB4OiAoKChlLmNsaWVudFggLSBlbGVtZW50Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLngpIC8gZWxlbWVudENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqICg0NSAvIDIpKSAtICg0NSAvIDIpIC8gMiksXHJcbiAgICAgICAgICAgIHk6ICgoKGUuY2xpZW50WSAtIGVsZW1lbnRDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSkgLyBlbGVtZW50Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqICg0NSAvIDIpKSAtICg0NSAvIDIpIC8gMilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke21vdXNlUG9zLnh9ZGVnKSByb3RhdGVYKCR7LW1vdXNlUG9zLnl9ZGVnKSBzY2FsZSgxLjAyNSlgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHBkZiB2aWV3ZXJcclxuY29uc3QgcGRmVmlld2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxucGRmVmlld2VyLmlkID0gJ3BkZi12aWV3ZXInXHJcbnBkZlZpZXdlci5jbGFzc0xpc3QuYWRkKCdwZGYtdmlld2VyJylcclxuXHJcbmltcG9ydCBXZWJWaWV3ZXIgZnJvbSAnQHBkZnRyb24vcGRmanMtZXhwcmVzcydcclxuV2ViVmlld2VyKHtcclxuICAgIGxpY2Vuc2VLZXk6ICdRRm42VTc4VE1mend6RmFtc2lCbCcsXHJcbiAgICBwYXRoOiAnLi9wZGYtdmlld2VyJywgLy8gcG9pbnQgdG8gd2hlcmUgdGhlIGZpbGVzIHlvdSBjb3BpZWQgYXJlIHNlcnZlZCBmcm9tXHJcbiAgICBpbml0aWFsRG9jOiAnLi9wZGZzLzA2MjBfdzIzX3FwXzQzLnBkZicgLy8gcGF0aCB0byB5b3VyIGRvY3VtZW50XHJcbn0sIHBkZlZpZXdlcikudGhlbigoaW5zdGFuY2UpID0+IHtcclxuICAgIGluc3RhbmNlLlVJLnNldFRoZW1lKCdkYXJrJyk7XHJcbiAgICBpbnN0YW5jZS5VSS5kaXNhYmxlRWxlbWVudHMoWyd0b29sYmFyR3JvdXAtRmlsbEFuZFNpZ24nLCAndGhlbWVDaGFuZ2VCdXR0b24nLCAnbGFuZ3VhZ2VCdXR0b24nLCAndG9nZ2xlTm90ZXNCdXR0b24nXSk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdWJibGVTaGVldE1lbnUobGV2ZWwsIHN1YmplY3QsIHllYXIsIHNlc3Npb24sIHZhcmlhbnQpIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbWVudS5pZCA9ICdidWJibGUtc2hlZXQtbWVudSdcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYnViYmxlLXNoZWV0LW1lbnUnKVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1zaGVldC10aXRsZScpXHJcbiAgICB0aXRsZS5pZCA9ICdidWJibGUtc2hlZXQtdGl0bGUnXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdLIHN0YXJ0IHRoZSBleGFtIHlhIG5pZ2dlcidcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gICAgY29uc3QgYnViYmxlU2hlZXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnViYmxlU2hlZXRDb250YWluZXIuaWQgPSAnYnViYmxlLXNoZWV0LWNvbnRhaW5lcidcclxuICAgIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1zaGVldC1jb250YWluZXInKVxyXG5cclxuICAgIGxldCBtb2RlbEFuc3dlcnMgPSBsZXZlbCA9PSAnb2wnID8gb2xTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dW3ZhcmlhbnRdIDogYWxTdWJqZWN0c01TW3N1YmplY3RdW3llYXJdW3Nlc3Npb25dW3ZhcmlhbnRdXHJcbiAgICB1c2VyQW5zd2VycyA9IEFycmF5KG1vZGVsQW5zd2Vycy5sZW5ndGgpLmZpbGwoJycpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbEFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBxdWVzdGlvbk51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlc3Rpb25OdW1iZXIuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWJveCcpXHJcbiAgICAgICAgcXVlc3Rpb25OdW1iZXIudGV4dENvbnRlbnQgPSBpICsgMVxyXG4gICAgICAgIHF1ZXN0aW9uTnVtYmVyLmlkID0gYHF1ZXN0aW9uLSR7aX0tbnVtYmVyYFxyXG4gICAgICAgIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uTnVtYmVyKVxyXG5cclxuICAgICAgICBjb25zdCBxdWVzdGlvbkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QuYWRkKCdidWJibGUtYm94JylcclxuICAgICAgICBxdWVzdGlvbkEuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob2ljZScpXHJcbiAgICAgICAgcXVlc3Rpb25BLnRleHRDb250ZW50ID0gJ0EnXHJcbiAgICAgICAgcXVlc3Rpb25BLmlkID0gYHF1ZXN0aW9uLSR7aX0tYWBcclxuICAgICAgICBxdWVzdGlvbkEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QuYWRkKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25CLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgdXNlckFuc3dlcnNbaV0gPSAnQSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uQSlcclxuXHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb25CID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWJveCcpXHJcbiAgICAgICAgcXVlc3Rpb25CLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1jaG9pY2UnKVxyXG4gICAgICAgIHF1ZXN0aW9uQi50ZXh0Q29udGVudCA9ICdCJ1xyXG4gICAgICAgIHF1ZXN0aW9uQi5pZCA9IGBxdWVzdGlvbi0ke2l9LWJgXHJcbiAgICAgICAgcXVlc3Rpb25CLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVzdGlvbkEuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQi5jbGFzc0xpc3QuYWRkKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25DLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkQuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHVzZXJBbnN3ZXJzW2ldID0gJ0InXHJcbiAgICAgICAgfSlcclxuICAgICAgICBidWJibGVTaGVldENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbkIpXHJcblxyXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcXVlc3Rpb25DLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1ib3gnKVxyXG4gICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QuYWRkKCdidWJibGUtY2hvaWNlJylcclxuICAgICAgICBxdWVzdGlvbkMudGV4dENvbnRlbnQgPSAnQydcclxuICAgICAgICBxdWVzdGlvbkMuaWQgPSBgcXVlc3Rpb24tJHtpfS1jYFxyXG4gICAgICAgIHF1ZXN0aW9uQy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcXVlc3Rpb25BLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkIuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQy5jbGFzc0xpc3QuYWRkKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25ELmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICB1c2VyQW5zd2Vyc1tpXSA9ICdDJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnViYmxlU2hlZXRDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25DKVxyXG5cclxuICAgICAgICBjb25zdCBxdWVzdGlvbkQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QuYWRkKCdidWJibGUtYm94JylcclxuICAgICAgICBxdWVzdGlvbkQuY2xhc3NMaXN0LmFkZCgnYnViYmxlLWNob2ljZScpXHJcbiAgICAgICAgcXVlc3Rpb25ELnRleHRDb250ZW50ID0gJ0QnXHJcbiAgICAgICAgcXVlc3Rpb25ELmlkID0gYHF1ZXN0aW9uLSR7aX0tZGBcclxuICAgICAgICBxdWVzdGlvbkQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uQS5jbGFzc0xpc3QucmVtb3ZlKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgcXVlc3Rpb25CLmNsYXNzTGlzdC5yZW1vdmUoJ2J1YmJsZS1jaG9zZW4nKVxyXG4gICAgICAgICAgICBxdWVzdGlvbkMuY2xhc3NMaXN0LnJlbW92ZSgnYnViYmxlLWNob3NlbicpXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uRC5jbGFzc0xpc3QuYWRkKCdidWJibGUtY2hvc2VuJylcclxuICAgICAgICAgICAgdXNlckFuc3dlcnNbaV0gPSAnRCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJ1YmJsZVNoZWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uRClcclxuICAgIH1cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYnViYmxlU2hlZXRDb250YWluZXIpXHJcblxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnViYmxlLXNoZWV0LXN1Ym1pdC1idXR0b24nKVxyXG4gICAgc3VibWl0QnV0dG9uLmlkID0gJ2J1YmJsZS1zaGVldC1zdWJtaXQtYnV0dG9uJ1xyXG5cclxuICAgIGNvbnN0IHJldmVhbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICByZXZlYWxCdXR0b24udGV4dENvbnRlbnQgPSAnUmV2ZWFsIGFsbCBhbnN3ZXJzJ1xyXG4gICAgcmV2ZWFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1zaGVldC1yZXZlYWwtYnV0dG9uJylcclxuICAgIHJldmVhbEJ1dHRvbi5pZCA9ICdidWJibGUtc2hlZXQtcmV2ZWFsLWJ1dHRvbidcclxuXHJcbiAgICBjb25zdCBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1hcmsuaWQgPSAnZXhhbS1tYXJrJ1xyXG4gICAgbWFyay5jbGFzc0xpc3QuYWRkKCdleGFtLW1hcmsnKVxyXG4gICAgbWFyay50ZXh0Q29udGVudCA9IGAtIC8gJHttb2RlbEFuc3dlcnMubGVuZ3RofWBcclxuXHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJBbnN3ZXJzLmluY2x1ZGVzKCcnKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVNb2RhbChcclxuICAgICAgICAgICAgICAgICdBcmUgeW91IHN1cmU/JywgLy8gdGl0bGVcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnU2VlbXMgbGlrZSB0aGVyZSBhcmUgc29tZSBxdWVzdGlvbnMgeW91IG1pc3NlZC4gPGJyPiBPbmx5IHRoZSBzb2x2ZWQgcXVlc3Rpb25zIHdpbGwgYmUgZ3JhZGVkLicsXHJcbiAgICAgICAgICAgICAgICBdLCAvLyBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtJyxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3JyZWN0QW5zd2VycyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxBbnN3ZXJzW2ldID09IHVzZXJBbnN3ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlcnMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcnJlY3RRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LW51bWJlcmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3dyb25nLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0UXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnY29ycmVjdC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVzZXJBbnN3ZXJzW2ldID09ICcnKSB7IH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JvbmdRdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdWVzdGlvbi0ke2l9LW51bWJlcmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JvbmdRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0LXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cm9uZ1F1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dyb25nLXF1ZXN0aW9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ycmVjdGVkUXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS0ke21vZGVsQW5zd2Vyc1tpXS50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdGVkUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnY29ycmVjdGVkLXF1ZXN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrLnRleHRDb250ZW50ID0gYCR7Y29ycmVjdEFuc3dlcnN9IC8gJHttb2RlbEFuc3dlcnMubGVuZ3RofWBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7IH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb3JyZWN0QW5zd2VycyA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kZWxBbnN3ZXJzW2ldID09IHVzZXJBbnN3ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdEFuc3dlcnMrK1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3JyZWN0UXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1udW1iZXJgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd3cm9uZy1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdFF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QtcXVlc3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1c2VyQW5zd2Vyc1tpXSA9PSAnJykgeyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdyb25nUXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS1udW1iZXJgKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyb25nUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JvbmdRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCd3cm9uZy1xdWVzdGlvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcnJlY3RlZFF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF1ZXN0aW9uLSR7aX0tJHttb2RlbEFuc3dlcnNbaV0udG9Mb3dlckNhc2UoKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RlZFF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3RlZC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFyay50ZXh0Q29udGVudCA9IGAke2NvcnJlY3RBbnN3ZXJzfSAvICR7bW9kZWxBbnN3ZXJzLmxlbmd0aH1gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXZlYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlTW9kYWwoXHJcbiAgICAgICAgICAgICdBcmUgeW91IHN1cmU/JywgLy8gdGl0bGVcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJ1RoaXMgd2lsbCBvbmx5IGhpZ2hsaWdodCB0aGUgY29ycmVjdCBhbnN3ZXJzIGFuZCB3aWxsIG5vdCBjb3JyZWN0IHlvdXIgYW5zd2Vycy4nLFxyXG4gICAgICAgICAgICBdLCAvLyBjb250ZW50LFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbEFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29ycmVjdGVkUXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXVlc3Rpb24tJHtpfS0ke21vZGVsQW5zd2Vyc1tpXS50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3RlZFF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3RlZC1xdWVzdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2ZWFsQnV0dG9uKVxyXG5cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcilcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWFyaylcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hUb1BkZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBzd2l0Y2hUb1BkZi5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gtdG8tcGRmJylcclxuICAgIHN3aXRjaFRvUGRmLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCJNMjAwIDE2NHY4aDEyYTEyIDEyIDAgMCAxIDAgMjRoLTEydjEyYTEyIDEyIDAgMCAxLTI0IDB2LTU2YTEyIDEyIDAgMCAxIDEyLTEyaDMyYTEyIDEyIDAgMCAxIDAgMjRabS0xMDggOGEzMiAzMiAwIDAgMS0zMiAzMmgtNHY0YTEyIDEyIDAgMCAxLTI0IDB2LTU2YTEyIDEyIDAgMCAxIDEyLTEyaDE2YTMyIDMyIDAgMCAxIDMyIDMybS0yNCAwYTggOCAwIDAgMC04LThoLTR2MTZoNGE4IDggMCAwIDAgOC04bTEwMCA4YTQwIDQwIDAgMCAxLTQwIDQwaC0xNmExMiAxMiAwIDAgMS0xMi0xMnYtNTZhMTIgMTIgMCAwIDEgMTItMTJoMTZhNDAgNDAgMCAwIDEgNDAgNDBtLTI0IDBhMTYgMTYgMCAwIDAtMTYtMTZoLTR2MzJoNGExNiAxNiAwIDAgMCAxNi0xNk0zNiAxMDhWNDBhMjAgMjAgMCAwIDEgMjAtMjBoOTZhMTIgMTIgMCAwIDEgOC40OSAzLjUybDU2IDU2QTEyIDEyIDAgMCAxIDIyMCA4OHYyMGExMiAxMiAwIDAgMS0yNCAwdi00aC00OGExMiAxMiAwIDAgMS0xMi0xMlY0NEg2MHY2NGExMiAxMiAwIDAgMS0yNCAwbTEyNC01MXYyM2gyM1pcIi8+PC9zdmc+YFxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChzd2l0Y2hUb1BkZilcclxuXHJcbiAgICByZXR1cm4gbWVudVxyXG59XHJcblxyXG4vLyBhcHBlbmRpbmcgaG9tZSB0byBtYWluXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXHJcbm1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZU1lbnUoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_private.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* reexport safe */ _private_Deferred_js__WEBPACK_IMPORTED_MODULE_6__.Deferred),
/* harmony export */   WorkboxError: () => (/* reexport safe */ _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_13__.WorkboxError),
/* harmony export */   assert: () => (/* reexport safe */ _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   cacheMatchIgnoreParams: () => (/* reexport safe */ _private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_2__.cacheMatchIgnoreParams),
/* harmony export */   cacheNames: () => (/* reexport safe */ _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames),
/* harmony export */   canConstructReadableStream: () => (/* reexport safe */ _private_canConstructReadableStream_js__WEBPACK_IMPORTED_MODULE_3__.canConstructReadableStream),
/* harmony export */   canConstructResponseFromBodyStream: () => (/* reexport safe */ _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_4__.canConstructResponseFromBodyStream),
/* harmony export */   dontWaitFor: () => (/* reexport safe */ _private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_5__.dontWaitFor),
/* harmony export */   executeQuotaErrorCallbacks: () => (/* reexport safe */ _private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_7__.executeQuotaErrorCallbacks),
/* harmony export */   getFriendlyURL: () => (/* reexport safe */ _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_8__.getFriendlyURL),
/* harmony export */   logger: () => (/* reexport safe */ _private_logger_js__WEBPACK_IMPORTED_MODULE_9__.logger),
/* harmony export */   resultingClientExists: () => (/* reexport safe */ _private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_10__.resultingClientExists),
/* harmony export */   timeout: () => (/* reexport safe */ _private_timeout_js__WEBPACK_IMPORTED_MODULE_11__.timeout),
/* harmony export */   waitUntil: () => (/* reexport safe */ _private_waitUntil_js__WEBPACK_IMPORTED_MODULE_12__.waitUntil)
/* harmony export */ });
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var _private_canConstructReadableStream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_private/canConstructReadableStream.js */ "./node_modules/workbox-core/_private/canConstructReadableStream.js");
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var _private_Deferred_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var _private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_private/resultingClientExists.js */ "./node_modules/workbox-core/_private/resultingClientExists.js");
/* harmony import */ var _private_timeout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var _private_waitUntil_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_14__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
// We either expose defaults or we expose every named export.


















/***/ }),

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructReadableStream.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructReadableStream.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructReadableStream: () => (/* binding */ canConstructReadableStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
 * object.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `ReadableStream`, `false` otherwise.
 *
 * @private
 */
function canConstructReadableStream() {
    if (supportStatus === undefined) {
        // See https://github.com/GoogleChrome/workbox/issues/1473
        try {
            new ReadableStream({ start() { } });
            supportStatus = true;
        }
        catch (error) {
            supportStatus = false;
        }
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/dontWaitFor.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-core/_private/dontWaitFor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dontWaitFor: () => (/* binding */ dontWaitFor)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A helper function that prevents a promise from being flagged as unused.
 *
 * @private
 **/
function dontWaitFor(promise) {
    // Effective no-op.
    void promise.then(() => { });
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/workbox-core/_private/resultingClientExists.js":
/*!*********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/resultingClientExists.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resultingClientExists: () => (/* binding */ resultingClientExists)
/* harmony export */ });
/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const MAX_RETRY_TIME = 2000;
/**
 * Returns a promise that resolves to a window client matching the passed
 * `resultingClientId`. For browsers that don't support `resultingClientId`
 * or if waiting for the resulting client to apper takes too long, resolve to
 * `undefined`.
 *
 * @param {string} [resultingClientId]
 * @return {Promise<Client|undefined>}
 * @private
 */
async function resultingClientExists(resultingClientId) {
    if (!resultingClientId) {
        return;
    }
    let existingWindows = await self.clients.matchAll({ type: 'window' });
    const existingWindowIds = new Set(existingWindows.map((w) => w.id));
    let resultingWindow;
    const startTime = performance.now();
    // Only wait up to `MAX_RETRY_TIME` to find a matching client.
    while (performance.now() - startTime < MAX_RETRY_TIME) {
        existingWindows = await self.clients.matchAll({ type: 'window' });
        resultingWindow = existingWindows.find((w) => {
            if (resultingClientId) {
                // If we have a `resultingClientId`, we can match on that.
                return w.id === resultingClientId;
            }
            else {
                // Otherwise match on finding a window not in `existingWindowIds`.
                return !existingWindowIds.has(w.id);
            }
        });
        if (resultingWindow) {
            break;
        }
        // Sleep for 100ms and retry.
        await (0,_timeout_js__WEBPACK_IMPORTED_MODULE_0__.timeout)(100);
    }
    return resultingWindow;
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/cacheNames.js":
/*!*************************************************!*\
  !*** ./node_modules/workbox-core/cacheNames.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Get the current cache names and prefix/suffix used by Workbox.
 *
 * `cacheNames.precache` is used for precached assets,
 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
 * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
 *
 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
 *
 * @return {Object} An object with `precache`, `runtime`, `prefix`, and
 *     `googleAnalytics` properties.
 *
 * @memberof workbox-core
 */
const cacheNames = {
    get googleAnalytics() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getGoogleAnalyticsName();
    },
    get precache() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
    },
    get prefix() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrefix();
    },
    get runtime() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName();
    },
    get suffix() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getSuffix();
    },
};



/***/ }),

/***/ "./node_modules/workbox-core/clientsClaim.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/clientsClaim.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clientsClaim: () => (/* binding */ clientsClaim)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Claim any currently available clients once the service worker
 * becomes active. This is normally used in conjunction with `skipWaiting()`.
 *
 * @memberof workbox-core
 */
function clientsClaim() {
    self.addEventListener('activate', () => self.clients.claim());
}



/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/index.js":
/*!********************************************!*\
  !*** ./node_modules/workbox-core/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _private: () => (/* reexport module object */ _private_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   cacheNames: () => (/* reexport safe */ _cacheNames_js__WEBPACK_IMPORTED_MODULE_2__.cacheNames),
/* harmony export */   clientsClaim: () => (/* reexport safe */ _clientsClaim_js__WEBPACK_IMPORTED_MODULE_4__.clientsClaim),
/* harmony export */   copyResponse: () => (/* reexport safe */ _copyResponse_js__WEBPACK_IMPORTED_MODULE_3__.copyResponse),
/* harmony export */   registerQuotaErrorCallback: () => (/* reexport safe */ _registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_0__.registerQuotaErrorCallback),
/* harmony export */   setCacheNameDetails: () => (/* reexport safe */ _setCacheNameDetails_js__WEBPACK_IMPORTED_MODULE_5__.setCacheNameDetails),
/* harmony export */   skipWaiting: () => (/* reexport safe */ _skipWaiting_js__WEBPACK_IMPORTED_MODULE_6__.skipWaiting)
/* harmony export */ });
/* harmony import */ var _registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerQuotaErrorCallback.js */ "./node_modules/workbox-core/registerQuotaErrorCallback.js");
/* harmony import */ var _private_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private.js */ "./node_modules/workbox-core/_private.js");
/* harmony import */ var _cacheNames_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cacheNames.js */ "./node_modules/workbox-core/cacheNames.js");
/* harmony import */ var _copyResponse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var _clientsClaim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientsClaim.js */ "./node_modules/workbox-core/clientsClaim.js");
/* harmony import */ var _setCacheNameDetails_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCacheNameDetails.js */ "./node_modules/workbox-core/setCacheNameDetails.js");
/* harmony import */ var _skipWaiting_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skipWaiting.js */ "./node_modules/workbox-core/skipWaiting.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types.js */ "./node_modules/workbox-core/types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * All of the Workbox service worker libraries use workbox-core for shared
 * code as well as setting default values that need to be shared (like cache
 * names).
 *
 * @module workbox-core
 */




/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-core/registerQuotaErrorCallback.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/registerQuotaErrorCallback.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerQuotaErrorCallback: () => (/* binding */ registerQuotaErrorCallback)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param {Function} callback
 * @memberof workbox-core
 */
// Can't change Function type
// eslint-disable-next-line @typescript-eslint/ban-types
function registerQuotaErrorCallback(callback) {
    if (true) {
        _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert.isType(callback, 'function', {
            moduleName: 'workbox-core',
            funcName: 'register',
            paramName: 'callback',
        });
    }
    _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__.quotaErrorCallbacks.add(callback);
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Registered a callback to respond to quota errors.', callback);
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/setCacheNameDetails.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/setCacheNameDetails.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCacheNameDetails: () => (/* binding */ setCacheNameDetails)
/* harmony export */ });
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Modifies the default cache names used by the Workbox packages.
 * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
 *
 * @param {Object} details
 * @param {Object} [details.prefix] The string to add to the beginning of
 *     the precache and runtime cache names.
 * @param {Object} [details.suffix] The string to add to the end of
 *     the precache and runtime cache names.
 * @param {Object} [details.precache] The cache name to use for precache
 *     caching.
 * @param {Object} [details.runtime] The cache name to use for runtime caching.
 * @param {Object} [details.googleAnalytics] The cache name to use for
 *     `workbox-google-analytics` caching.
 *
 * @memberof workbox-core
 */
function setCacheNameDetails(details) {
    if (true) {
        Object.keys(details).forEach((key) => {
            _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(details[key], 'string', {
                moduleName: 'workbox-core',
                funcName: 'setCacheNameDetails',
                paramName: `details.${key}`,
            });
        });
        if ('precache' in details && details['precache'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('invalid-cache-name', {
                cacheNameId: 'precache',
                value: details['precache'],
            });
        }
        if ('runtime' in details && details['runtime'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('invalid-cache-name', {
                cacheNameId: 'runtime',
                value: details['runtime'],
            });
        }
        if ('googleAnalytics' in details &&
            details['googleAnalytics'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('invalid-cache-name', {
                cacheNameId: 'googleAnalytics',
                value: details['googleAnalytics'],
            });
        }
    }
    _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.updateDetails(details);
}



/***/ }),

/***/ "./node_modules/workbox-core/skipWaiting.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-core/skipWaiting.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skipWaiting: () => (/* binding */ skipWaiting)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * This method is deprecated, and will be removed in Workbox v7.
 *
 * Calling self.skipWaiting() is equivalent, and should be used instead.
 *
 * @memberof workbox-core
 */
function skipWaiting() {
    // Just call self.skipWaiting() directly.
    // See https://github.com/GoogleChrome/workbox/issues/2525
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.warn(`skipWaiting() from workbox-core is no longer recommended ` +
            `and will be removed in Workbox v7. Using self.skipWaiting() instead ` +
            `is equivalent.`);
    }
    void self.skipWaiting();
}



/***/ }),

/***/ "./node_modules/workbox-core/types.js":
/*!********************************************!*\
  !*** ./node_modules/workbox-core/types.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_types.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/_types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/workbox-core/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _private: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__._private),
/* harmony export */   cacheNames: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames),
/* harmony export */   clientsClaim: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.clientsClaim),
/* harmony export */   copyResponse: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse),
/* harmony export */   registerQuotaErrorCallback: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.registerQuotaErrorCallback),
/* harmony export */   setCacheNameDetails: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.setCacheNameDetails),
/* harmony export */   skipWaiting: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.skipWaiting)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-core/index.js");


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/src-sw.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core */ "./node_modules/workbox-core/index.mjs");
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");



(0,workbox_core__WEBPACK_IMPORTED_MODULE_0__.clientsClaim)();
self.skipWaiting();

(0,workbox_precaching__WEBPACK_IMPORTED_MODULE_1__.precacheAndRoute)([{'revision':'5773d10592e7b0decd47bfc0638ab414','url':'bundle.js'},{'revision':'8ec67e46dc38dbb8a81d8f0ba213509f','url':'guides.html'},{'revision':'af57c49cf609c236a9b9c10f0e656cda','url':'index.html'},{'revision':'98d6d5faae2f2bd96428beaf400653a5','url':'manifest.json'},{'revision':'86a9730c0c007638330d0fc947c80700','url':'media/1.webp'},{'revision':'931de933510495ff0994ccfc65a6333a','url':'media/10.webp'},{'revision':'389dffae72be1c0a3cee402019aa70bf','url':'media/11.webp'},{'revision':'9051e9351a616f584d1a3dfe77c4ba3e','url':'media/12.webp'},{'revision':'5d4fd5101853d51da7762c0eaaad5d8d','url':'media/13.webp'},{'revision':'8d1ebfcac11d02c97f73bb73f6d2e01b','url':'media/14.webp'},{'revision':'b02e13a61c2306c5798d10664cf1e93e','url':'media/2.webp'},{'revision':'0db657c8bbd0e6a021b5052b2e1b889f','url':'media/3.webp'},{'revision':'baa8f2e054bb7561e367e4fc21770157','url':'media/4.webp'},{'revision':'f6cfecbce8a337e18992638ee003baf2','url':'media/5.webp'},{'revision':'22a5e4a189509523d9591d173f391433','url':'media/6.webp'},{'revision':'d6311f9c77592ae219cf10f411f62786','url':'media/7.webp'},{'revision':'1dc07c45af2db241652d6692323ff8b6','url':'media/8.webp'},{'revision':'3407a7e102c50fcb03bdfc58b52dafce','url':'media/9.webp'},{'revision':'8bc3efb3659a31a865b850b5ff58e141','url':'media/al_biology.webp'},{'revision':'ee4e65552ebdf2a3b12abcbc1d2b61c0','url':'media/al_chemistry.webp'},{'revision':'bdd0068abdcd0e4026a316c09d3126f4','url':'media/al_physics.webp'},{'revision':'7f5620c034b72af5c940a24c86a0d8a1','url':'media/cr_biology.webp'},{'revision':'ddec2b54e24df1ad8dbf8ec5a20789e7','url':'media/cr_chemistry.webp'},{'revision':'81b2c4ea8e17f18f0758ec24dcdd9e38','url':'media/cr_combined.webp'},{'revision':'d8cbad421c3e67d8e9403e283eb7f7d3','url':'media/cr_physics.webp'},{'revision':'69a8600f31682b9a63d8e71071af35e8','url':'media/guides/and1.webp'},{'revision':'c0c0ac6ef9b154a3272bf3f8b38c170f','url':'media/guides/and2.webp'},{'revision':'bdb68d413c874fa2c8029db90b951665','url':'media/guides/and3.webp'},{'revision':'bc5ceeac27774624ad3febcaef810b73','url':'media/guides/and4.webp'},{'revision':'2dfd107d847fc93a051d067373915531','url':'media/guides/and5.webp'},{'revision':'3a5b285f441f98cea796b384e2f5a9a6','url':'media/guides/ios1.webp'},{'revision':'c90b616985ac6fc680eb324543550640','url':'media/guides/ios2.webp'},{'revision':'81758a74e0b1f8e996c3ae434f5fb0c7','url':'media/guides/ios3.webp'},{'revision':'e3804c780a67e6455bd76d470c62ffa9','url':'media/guides/ios4.webp'},{'revision':'e81c645a3a3d00ff01228b8074eb5613','url':'media/guides/win1.webp'},{'revision':'8e2e1d24e3ba5a44808d839c241a5022','url':'media/guides/win2.webp'},{'revision':'16aed966830941b61baa745b185a77e9','url':'media/icon/favicon-x16.ico'},{'revision':'7b2a7dd881a8e363fc27b7a78543bdc0','url':'media/icon/favicon-x24.ico'},{'revision':'60bcebbbe62a0bab04d1773935f6e561','url':'media/icon/favicon-x32.ico'},{'revision':'7d82fb8d4781b3d6781576e6ddff0245','url':'media/icon/favicon-x48.ico'},{'revision':'9c5517bd6a6c4209c7522639f3845b0c','url':'media/icon/favicon-x64.ico'},{'revision':'4773261c83132e436bbfe790a52d84b7','url':'media/icon/icon-x128.png'},{'revision':'0fa9b039cf39075641f98905b582874c','url':'media/icon/icon-x144.png'},{'revision':'d67d27ef9c257bdddf280dbcae17e28c','url':'media/icon/icon-x152.png'},{'revision':'d70031dcde44706aebddd2f217b19d1f','url':'media/icon/icon-x16.png'},{'revision':'df969defdbb5c4218b1b7a1929fffa6d','url':'media/icon/icon-x180.png'},{'revision':'384c6962ccd7d157b859d90246a80e82','url':'media/icon/icon-x192.png'},{'revision':'c9cfa9feef1fdeae72c3365f8688e06d','url':'media/icon/icon-x24.png'},{'revision':'7c8050740e8c66d5e48baebcdec07621','url':'media/icon/icon-x32.png'},{'revision':'0d15ba323c350f4a2dd35e4b65b7d84b','url':'media/icon/icon-x384.png'},{'revision':'f3f14d801010e23ca191fcdb52c2f247','url':'media/icon/icon-x48.png'},{'revision':'3d0f83d6d0c11f1f62b58b2e6dd06e78','url':'media/icon/icon-x512.png'},{'revision':'57d2829dac929dedb177ec9c22f8d20b','url':'media/icon/icon-x64.png'},{'revision':'b9f3cfa6edd48bec6a557b19c155e598','url':'media/icon/icon-x72.png'},{'revision':'9ca1ed24c889f56077aa91990c1b4ab6','url':'media/icon/icon-x96.png'},{'revision':'c67741ea9b2eddc15d013b45f28045bb','url':'media/icon/iconx192.png'},{'revision':'bfd4fe38326c20a56f6f57aac5fbee15','url':'media/ol_biology.webp'},{'revision':'44dfafd1859bc3cffe5c37d542014128','url':'media/ol_chemistry.webp'},{'revision':'e5073c7f4d8b5f0e475fa3de3fe43aeb','url':'media/ol_combined.webp'},{'revision':'d1896a4f6ee4e5f6262f2356c2ec7cc1','url':'media/ol_economics.webp'},{'revision':'fcf39462afb72aba7a5fe4f8a302fbf3','url':'media/ol_physics.webp'},{'revision':'773d822084e6b6bd48992bf3647e42ce','url':'media/screenshots/screenshot-mobile1.webp'},{'revision':'6acee6ac6072ad42aae755f93bf6bd17','url':'media/screenshots/screenshot-mobile2.webp'},{'revision':'1d3e109fa406c00b246bfdb34a49e963','url':'media/screenshots/screenshot-mobile3.webp'},{'revision':'a1cfb59a341d606dafcaddd64999c3b4','url':'media/screenshots/screenshot1.webp'},{'revision':'351c65932bdff678eb8b14e618b8799f','url':'media/screenshots/screenshot2.webp'},{'revision':'4f03343250830e5ea1c45086ba10b77c','url':'media/screenshots/screenshot3.webp'},{'revision':'ea58c8381dd5bf6bc47b552d38dffa80','url':'media/timer-audio.mp3'},{'revision':'9e04d6f58e2b89de2e9627c29cf637ee','url':'style-min.css'}]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVR0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ1U7QUFDdEQ7QUFDQSwwREFBWTtBQUNaO0FBQ0E7QUFDQSxvRUFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9EZWZlcnJlZC5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZWFkYWJsZVN0cmVhbS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2RvbnRXYWl0Rm9yLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9yZXN1bHRpbmdDbGllbnRFeGlzdHMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvdGltZW91dC5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS93YWl0VW50aWwuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvY2FjaGVOYW1lcy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9jbGllbnRzQ2xhaW0uanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvY29weVJlc3BvbnNlLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL2luZGV4LmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9zZXRDYWNoZU5hbWVEZXRhaWxzLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL3NraXBXYWl0aW5nLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL3R5cGVzLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL1ByZWNhY2hlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9QcmVjYWNoZUZhbGxiYWNrUGx1Z2luLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL1ByZWNhY2hlUm91dGUuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvUHJlY2FjaGVTdHJhdGVneS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9fdHlwZXMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvYWRkUGx1Z2lucy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9hZGRSb3V0ZS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9jbGVhbnVwT3V0ZGF0ZWRDYWNoZXMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvZ2V0Q2FjaGVLZXlGb3JVUkwuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvbWF0Y2hQcmVjYWNoZS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9wcmVjYWNoZS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9wcmVjYWNoZUFuZFJvdXRlLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL1ByZWNhY2hlQ2FjaGVLZXlQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2NyZWF0ZUNhY2hlS2V5LmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2RlbGV0ZU91dGRhdGVkQ2FjaGVzLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2dlbmVyYXRlVVJMVmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9wcmludENsZWFudXBEZXRhaWxzLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3ByaW50SW5zdGFsbERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9SZWdFeHBSb3V0ZS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9Sb3V0ZS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvcmVnaXN0ZXJSb3V0ZS5qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvU3RyYXRlZ3kuanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvU3RyYXRlZ3lIYW5kbGVyLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL192ZXJzaW9uLmpzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbWJyaWRnZS1tY3EtY2hlY2tlci1yZXdvcmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYW1icmlkZ2UtbWNxLWNoZWNrZXItcmV3b3JrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FtYnJpZGdlLW1jcS1jaGVja2VyLXJld29yay8uL3NyYy9qcy9zcmMtc3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuLy8gV2UgZWl0aGVyIGV4cG9zZSBkZWZhdWx0cyBvciB3ZSBleHBvc2UgZXZlcnkgbmFtZWQgZXhwb3J0LlxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJy4vX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBjYWNoZU1hdGNoSWdub3JlUGFyYW1zIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYWNoZU1hdGNoSWdub3JlUGFyYW1zLmpzJztcbmltcG9ydCB7IGNhbkNvbnN0cnVjdFJlYWRhYmxlU3RyZWFtIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZWFkYWJsZVN0cmVhbS5qcyc7XG5pbXBvcnQgeyBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLmpzJztcbmltcG9ydCB7IGRvbnRXYWl0Rm9yIH0gZnJvbSAnLi9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyc7XG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJy4vX3ByaXZhdGUvRGVmZXJyZWQuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MgfSBmcm9tICcuL19wcml2YXRlL2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnLi9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyByZXN1bHRpbmdDbGllbnRFeGlzdHMgfSBmcm9tICcuL19wcml2YXRlL3Jlc3VsdGluZ0NsaWVudEV4aXN0cy5qcyc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnLi9fcHJpdmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7IHdhaXRVbnRpbCB9IGZyb20gJy4vX3ByaXZhdGUvd2FpdFVudGlsLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgeyBhc3NlcnQsIGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMsIGNhY2hlTmFtZXMsIGNhbkNvbnN0cnVjdFJlYWRhYmxlU3RyZWFtLCBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLCBkb250V2FpdEZvciwgRGVmZXJyZWQsIGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLCBnZXRGcmllbmRseVVSTCwgbG9nZ2VyLCByZXN1bHRpbmdDbGllbnRFeGlzdHMsIHRpbWVvdXQsIHdhaXRVbnRpbCwgV29ya2JveEVycm9yLCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBEZWZlcnJlZCBjbGFzcyBjb21wb3NlcyBQcm9taXNlcyBpbiBhIHdheSB0aGF0IGFsbG93cyBmb3IgdGhlbSB0byBiZVxuICogcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgZnJvbSBvdXRzaWRlIHRoZSBjb25zdHJ1Y3Rvci4gSW4gbW9zdCBjYXNlcyBwcm9taXNlc1xuICogc2hvdWxkIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCBEZWZlcnJlZHMgY2FuIGJlIG5lY2Vzc2FyeSB3aGVuIHRoZSBsb2dpYyB0b1xuICogcmVzb2x2ZSBhIHByb21pc2UgbXVzdCBiZSBzZXBhcmF0ZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBEZWZlcnJlZCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHByb21pc2UgYW5kIGV4cG9zZXMgaXRzIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgYXMgbWV0aG9kcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgeyBEZWZlcnJlZCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbWVzc2FnZUdlbmVyYXRvciB9IGZyb20gJy4uL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBXb3JrYm94IGVycm9ycyBzaG91bGQgYmUgdGhyb3duIHdpdGggdGhpcyBjbGFzcy5cbiAqIFRoaXMgYWxsb3dzIHVzZSB0byBlbnN1cmUgdGhlIHR5cGUgZWFzaWx5IGluIHRlc3RzLFxuICogaGVscHMgZGV2ZWxvcGVycyBpZGVudGlmeSBlcnJvcnMgZnJvbSB3b3JrYm94XG4gKiBlYXNpbHkgYW5kIGFsbG93cyB1c2UgdG8gb3B0aW1pc2UgZXJyb3JcbiAqIG1lc3NhZ2VzIGNvcnJlY3RseS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBXb3JrYm94RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JDb2RlIFRoZSBlcnJvciBjb2RlIHRoYXRcbiAgICAgKiBpZGVudGlmaWVzIHRoaXMgcGFydGljdWxhciBlcnJvci5cbiAgICAgKiBAcGFyYW0ge09iamVjdD19IGRldGFpbHMgQW55IHJlbGV2YW50IGFyZ3VtZW50c1xuICAgICAqIHRoYXQgd2lsbCBoZWxwIGRldmVsb3BlcnMgaWRlbnRpZnkgaXNzdWVzIHNob3VsZFxuICAgICAqIGJlIGFkZGVkIGFzIGEga2V5IG9uIHRoZSBjb250ZXh0IG9iamVjdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGUsIGRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VHZW5lcmF0b3IoZXJyb3JDb2RlLCBkZXRhaWxzKTtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IGVycm9yQ29kZTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICB9XG59XG5leHBvcnQgeyBXb3JrYm94RXJyb3IgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4uL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qXG4gKiBUaGlzIG1ldGhvZCB0aHJvd3MgaWYgdGhlIHN1cHBsaWVkIHZhbHVlIGlzIG5vdCBhbiBhcnJheS5cbiAqIFRoZSBkZXN0cnVjdGVkIHZhbHVlcyBhcmUgcmVxdWlyZWQgdG8gcHJvZHVjZSBhIG1lYW5pbmdmdWwgZXJyb3IgZm9yIHVzZXJzLlxuICogVGhlIGRlc3RydWN0ZWQgYW5kIHJlc3RydWN0dXJlZCBvYmplY3QgaXMgc28gaXQncyBjbGVhciB3aGF0IGlzXG4gKiBuZWVkZWQuXG4gKi9cbmNvbnN0IGlzQXJyYXkgPSAodmFsdWUsIGRldGFpbHMpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hbi1hcnJheScsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBoYXNNZXRob2QgPSAob2JqZWN0LCBleHBlY3RlZE1ldGhvZCwgZGV0YWlscykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2Ygb2JqZWN0W2V4cGVjdGVkTWV0aG9kXTtcbiAgICBpZiAodHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkZXRhaWxzWydleHBlY3RlZE1ldGhvZCddID0gZXhwZWN0ZWRNZXRob2Q7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21pc3NpbmctYS1tZXRob2QnLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaXNUeXBlID0gKG9iamVjdCwgZXhwZWN0ZWRUeXBlLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICBkZXRhaWxzWydleHBlY3RlZFR5cGUnXSA9IGV4cGVjdGVkVHlwZTtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LXR5cGUnLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaXNJbnN0YW5jZSA9IChvYmplY3QsIFxuLy8gTmVlZCB0aGUgZ2VuZXJhbCB0eXBlIHRvIGRvIHRoZSBjaGVjayBsYXRlci5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBlY3RlZENsYXNzLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCEob2JqZWN0IGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRDbGFzc05hbWUnXSA9IGV4cGVjdGVkQ2xhc3MubmFtZTtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LWNsYXNzJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzT25lT2YgPSAodmFsdWUsIHZhbGlkVmFsdWVzLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCF2YWxpZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgZGV0YWlsc1sndmFsaWRWYWx1ZURlc2NyaXB0aW9uJ10gPSBgVmFsaWQgdmFsdWVzIGFyZSAke0pTT04uc3RyaW5naWZ5KHZhbGlkVmFsdWVzKX0uYDtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC12YWx1ZScsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBpc0FycmF5T2ZDbGFzcyA9ICh2YWx1ZSwgXG4vLyBOZWVkIGdlbmVyYWwgdHlwZSB0byBkbyBjaGVjayBsYXRlci5cbmV4cGVjdGVkQ2xhc3MsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmRldGFpbHMpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hcnJheS1vZi1jbGFzcycsIGRldGFpbHMpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGZpbmFsQXNzZXJ0RXhwb3J0cyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IG51bGxcbiAgICA6IHtcbiAgICAgICAgaGFzTWV0aG9kLFxuICAgICAgICBpc0FycmF5LFxuICAgICAgICBpc0luc3RhbmNlLFxuICAgICAgICBpc09uZU9mLFxuICAgICAgICBpc1R5cGUsXG4gICAgICAgIGlzQXJyYXlPZkNsYXNzLFxuICAgIH07XG5leHBvcnQgeyBmaW5hbEFzc2VydEV4cG9ydHMgYXMgYXNzZXJ0IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5mdW5jdGlvbiBzdHJpcFBhcmFtcyhmdWxsVVJMLCBpZ25vcmVQYXJhbXMpIHtcbiAgICBjb25zdCBzdHJpcHBlZFVSTCA9IG5ldyBVUkwoZnVsbFVSTCk7XG4gICAgZm9yIChjb25zdCBwYXJhbSBvZiBpZ25vcmVQYXJhbXMpIHtcbiAgICAgICAgc3RyaXBwZWRVUkwuc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbSk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpcHBlZFVSTC5ocmVmO1xufVxuLyoqXG4gKiBNYXRjaGVzIGFuIGl0ZW0gaW4gdGhlIGNhY2hlLCBpZ25vcmluZyBzcGVjaWZpYyBVUkwgcGFyYW1zLiBUaGlzIGlzIHNpbWlsYXJcbiAqIHRvIHRoZSBgaWdub3JlU2VhcmNoYCBvcHRpb24sIGJ1dCBpdCBhbGxvd3MgeW91IHRvIGlnbm9yZSBqdXN0IHNwZWNpZmljXG4gKiBwYXJhbXMgKHdoaWxlIGNvbnRpbnVpbmcgdG8gbWF0Y2ggb24gdGhlIG90aGVycykuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Q2FjaGV9IGNhY2hlXG4gKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXRjaE9wdGlvbnNcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gaWdub3JlUGFyYW1zXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMoY2FjaGUsIHJlcXVlc3QsIGlnbm9yZVBhcmFtcywgbWF0Y2hPcHRpb25zKSB7XG4gICAgY29uc3Qgc3RyaXBwZWRSZXF1ZXN0VVJMID0gc3RyaXBQYXJhbXMocmVxdWVzdC51cmwsIGlnbm9yZVBhcmFtcyk7XG4gICAgLy8gSWYgdGhlIHJlcXVlc3QgZG9lc24ndCBpbmNsdWRlIGFueSBpZ25vcmVkIHBhcmFtcywgbWF0Y2ggYXMgbm9ybWFsLlxuICAgIGlmIChyZXF1ZXN0LnVybCA9PT0gc3RyaXBwZWRSZXF1ZXN0VVJMKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5tYXRjaChyZXF1ZXN0LCBtYXRjaE9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIG1hdGNoIGJ5IGNvbXBhcmluZyBrZXlzXG4gICAgY29uc3Qga2V5c09wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1hdGNoT3B0aW9ucyksIHsgaWdub3JlU2VhcmNoOiB0cnVlIH0pO1xuICAgIGNvbnN0IGNhY2hlS2V5cyA9IGF3YWl0IGNhY2hlLmtleXMocmVxdWVzdCwga2V5c09wdGlvbnMpO1xuICAgIGZvciAoY29uc3QgY2FjaGVLZXkgb2YgY2FjaGVLZXlzKSB7XG4gICAgICAgIGNvbnN0IHN0cmlwcGVkQ2FjaGVLZXlVUkwgPSBzdHJpcFBhcmFtcyhjYWNoZUtleS51cmwsIGlnbm9yZVBhcmFtcyk7XG4gICAgICAgIGlmIChzdHJpcHBlZFJlcXVlc3RVUkwgPT09IHN0cmlwcGVkQ2FjaGVLZXlVUkwpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5tYXRjaChjYWNoZUtleSwgbWF0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5leHBvcnQgeyBjYWNoZU1hdGNoSWdub3JlUGFyYW1zIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IF9jYWNoZU5hbWVEZXRhaWxzID0ge1xuICAgIGdvb2dsZUFuYWx5dGljczogJ2dvb2dsZUFuYWx5dGljcycsXG4gICAgcHJlY2FjaGU6ICdwcmVjYWNoZS12MicsXG4gICAgcHJlZml4OiAnd29ya2JveCcsXG4gICAgcnVudGltZTogJ3J1bnRpbWUnLFxuICAgIHN1ZmZpeDogdHlwZW9mIHJlZ2lzdHJhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyByZWdpc3RyYXRpb24uc2NvcGUgOiAnJyxcbn07XG5jb25zdCBfY3JlYXRlQ2FjaGVOYW1lID0gKGNhY2hlTmFtZSkgPT4ge1xuICAgIHJldHVybiBbX2NhY2hlTmFtZURldGFpbHMucHJlZml4LCBjYWNoZU5hbWUsIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeF1cbiAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApXG4gICAgICAgIC5qb2luKCctJyk7XG59O1xuY29uc3QgZWFjaENhY2hlTmFtZURldGFpbCA9IChmbikgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKF9jYWNoZU5hbWVEZXRhaWxzKSkge1xuICAgICAgICBmbihrZXkpO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgY2FjaGVOYW1lcyA9IHtcbiAgICB1cGRhdGVEZXRhaWxzOiAoZGV0YWlscykgPT4ge1xuICAgICAgICBlYWNoQ2FjaGVOYW1lRGV0YWlsKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGV0YWlsc1trZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIF9jYWNoZU5hbWVEZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0R29vZ2xlQW5hbHl0aWNzTmFtZTogKHVzZXJDYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5nb29nbGVBbmFseXRpY3MpO1xuICAgIH0sXG4gICAgZ2V0UHJlY2FjaGVOYW1lOiAodXNlckNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLnByZWNhY2hlKTtcbiAgICB9LFxuICAgIGdldFByZWZpeDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2NhY2hlTmFtZURldGFpbHMucHJlZml4O1xuICAgIH0sXG4gICAgZ2V0UnVudGltZU5hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucnVudGltZSk7XG4gICAgfSxcbiAgICBnZXRTdWZmaXg6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeDtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IHN1cHBvcnRTdGF0dXM7XG4vKipcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzXG4gKiBjb25zdHJ1Y3RpbmcgYSBbYFJlYWRhYmxlU3RyZWFtYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1JlYWRhYmxlU3RyZWFtL1JlYWRhYmxlU3RyZWFtKVxuICogb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCwgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBjYW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgY29uc3RydWN0IGEgYFJlYWRhYmxlU3RyZWFtYCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FuQ29uc3RydWN0UmVhZGFibGVTdHJlYW0oKSB7XG4gICAgaWYgKHN1cHBvcnRTdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNDczXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgUmVhZGFibGVTdHJlYW0oeyBzdGFydCgpIHsgfSB9KTtcbiAgICAgICAgICAgIHN1cHBvcnRTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc3VwcG9ydFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0U3RhdHVzO1xufVxuZXhwb3J0IHsgY2FuQ29uc3RydWN0UmVhZGFibGVTdHJlYW0gfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IHN1cHBvcnRTdGF0dXM7XG4vKipcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzXG4gKiBjb25zdHJ1Y3RpbmcgYSBuZXcgYFJlc3BvbnNlYCBmcm9tIGEgYHJlc3BvbnNlLmJvZHlgIHN0cmVhbS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAsIGlmIHRoZSBjdXJyZW50IGJyb3dzZXIgY2FuIHN1Y2Nlc3NmdWxseVxuICogICAgIGNvbnN0cnVjdCBhIGBSZXNwb25zZWAgZnJvbSBhIGByZXNwb25zZS5ib2R5YCBzdHJlYW0sIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0oKSB7XG4gICAgaWYgKHN1cHBvcnRTdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB0ZXN0UmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoJycpO1xuICAgICAgICBpZiAoJ2JvZHknIGluIHRlc3RSZXNwb25zZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBuZXcgUmVzcG9uc2UodGVzdFJlc3BvbnNlLmJvZHkpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnRTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cHBvcnRTdGF0dXMgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRTdGF0dXM7XG59XG5leHBvcnQgeyBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgcHJldmVudHMgYSBwcm9taXNlIGZyb20gYmVpbmcgZmxhZ2dlZCBhcyB1bnVzZWQuXG4gKlxuICogQHByaXZhdGVcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBkb250V2FpdEZvcihwcm9taXNlKSB7XG4gICAgLy8gRWZmZWN0aXZlIG5vLW9wLlxuICAgIHZvaWQgcHJvbWlzZS50aGVuKCgpID0+IHsgfSk7XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJy4uL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSdW5zIGFsbCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zLCBvbmUgYXQgYSB0aW1lIHNlcXVlbnRpYWxseSwgaW4gdGhlIG9yZGVyXG4gKiBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKiBAcHJpdmF0ZVxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKGBBYm91dCB0byBydW4gJHtxdW90YUVycm9yQ2FsbGJhY2tzLnNpemV9IGAgK1xuICAgICAgICAgICAgYGNhbGxiYWNrcyB0byBjbGVhbiB1cCBjYWNoZXMuYCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgcXVvdGFFcnJvckNhbGxiYWNrcykge1xuICAgICAgICBhd2FpdCBjYWxsYmFjaygpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhjYWxsYmFjaywgJ2lzIGNvbXBsZXRlLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coJ0ZpbmlzaGVkIHJ1bm5pbmcgY2FsbGJhY2tzLicpO1xuICAgIH1cbn1cbmV4cG9ydCB7IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IGdldEZyaWVuZGx5VVJMID0gKHVybCkgPT4ge1xuICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwoU3RyaW5nKHVybCksIGxvY2F0aW9uLmhyZWYpO1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIzMjNcbiAgICAvLyBXZSB3YW50IHRvIGluY2x1ZGUgZXZlcnl0aGluZywgZXhjZXB0IGZvciB0aGUgb3JpZ2luIGlmIGl0J3Mgc2FtZS1vcmlnaW4uXG4gICAgcmV0dXJuIHVybE9iai5ocmVmLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7bG9jYXRpb24ub3JpZ2lufWApLCAnJyk7XG59O1xuZXhwb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IGxvZ2dlciA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBudWxsXG4gICAgOiAoKCkgPT4ge1xuICAgICAgICAvLyBEb24ndCBvdmVyd3JpdGUgdGhpcyB2YWx1ZSBpZiBpdCdzIGFscmVhZHkgc2V0LlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L3B1bGwvMjI4NCNpc3N1ZWNvbW1lbnQtNTYwNDcwOTIzXG4gICAgICAgIGlmICghKCdfX1dCX0RJU0FCTEVfREVWX0xPR1MnIGluIGdsb2JhbFRoaXMpKSB7XG4gICAgICAgICAgICBzZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbkdyb3VwID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG1ldGhvZFRvQ29sb3JNYXAgPSB7XG4gICAgICAgICAgICBkZWJ1ZzogYCM3ZjhjOGRgLFxuICAgICAgICAgICAgbG9nOiBgIzJlY2M3MWAsXG4gICAgICAgICAgICB3YXJuOiBgI2YzOWMxMmAsXG4gICAgICAgICAgICBlcnJvcjogYCNjMDM5MmJgLFxuICAgICAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGAjMzQ5OGRiYCxcbiAgICAgICAgICAgIGdyb3VwRW5kOiBudWxsLCAvLyBObyBjb2xvcmVkIHByZWZpeCBvbiBncm91cEVuZFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwcmludCA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBTYWZhcmkgZG9lc24ndCBwcmludCBhbGwgY29uc29sZS5ncm91cENvbGxhcHNlZCgpIGFyZ3VtZW50czpcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTgyNzU0XG4gICAgICAgICAgICAgICAgaWYgKC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgICAgICAgICAgIGBiYWNrZ3JvdW5kOiAke21ldGhvZFRvQ29sb3JNYXBbbWV0aG9kXX1gLFxuICAgICAgICAgICAgICAgIGBib3JkZXItcmFkaXVzOiAwLjVlbWAsXG4gICAgICAgICAgICAgICAgYGNvbG9yOiB3aGl0ZWAsXG4gICAgICAgICAgICAgICAgYGZvbnQtd2VpZ2h0OiBib2xkYCxcbiAgICAgICAgICAgICAgICBgcGFkZGluZzogMnB4IDAuNWVtYCxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBXaGVuIGluIGEgZ3JvdXAsIHRoZSB3b3JrYm94IHByZWZpeCBpcyBub3QgZGlzcGxheWVkLlxuICAgICAgICAgICAgY29uc3QgbG9nUHJlZml4ID0gaW5Hcm91cCA/IFtdIDogWyclY3dvcmtib3gnLCBzdHlsZXMuam9pbignOycpXTtcbiAgICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5sb2dQcmVmaXgsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwQ29sbGFwc2VkJykge1xuICAgICAgICAgICAgICAgIGluR3JvdXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwRW5kJykge1xuICAgICAgICAgICAgICAgIGluR3JvdXAgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgICAgICAgY29uc3QgYXBpID0ge307XG4gICAgICAgIGNvbnN0IGxvZ2dlck1ldGhvZHMgPSBPYmplY3Qua2V5cyhtZXRob2RUb0NvbG9yTWFwKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgbG9nZ2VyTWV0aG9kcykge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0ga2V5O1xuICAgICAgICAgICAgYXBpW21ldGhvZF0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHByaW50KG1ldGhvZCwgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcGk7XG4gICAgfSkoKSk7XG5leHBvcnQgeyBsb2dnZXIgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnLi90aW1lb3V0LmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgTUFYX1JFVFJZX1RJTUUgPSAyMDAwO1xuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgd2luZG93IGNsaWVudCBtYXRjaGluZyB0aGUgcGFzc2VkXG4gKiBgcmVzdWx0aW5nQ2xpZW50SWRgLiBGb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IGByZXN1bHRpbmdDbGllbnRJZGBcbiAqIG9yIGlmIHdhaXRpbmcgZm9yIHRoZSByZXN1bHRpbmcgY2xpZW50IHRvIGFwcGVyIHRha2VzIHRvbyBsb25nLCByZXNvbHZlIHRvXG4gKiBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3VsdGluZ0NsaWVudElkXVxuICogQHJldHVybiB7UHJvbWlzZTxDbGllbnR8dW5kZWZpbmVkPn1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXN1bHRpbmdDbGllbnRFeGlzdHMocmVzdWx0aW5nQ2xpZW50SWQpIHtcbiAgICBpZiAoIXJlc3VsdGluZ0NsaWVudElkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGV4aXN0aW5nV2luZG93cyA9IGF3YWl0IHNlbGYuY2xpZW50cy5tYXRjaEFsbCh7IHR5cGU6ICd3aW5kb3cnIH0pO1xuICAgIGNvbnN0IGV4aXN0aW5nV2luZG93SWRzID0gbmV3IFNldChleGlzdGluZ1dpbmRvd3MubWFwKCh3KSA9PiB3LmlkKSk7XG4gICAgbGV0IHJlc3VsdGluZ1dpbmRvdztcbiAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAvLyBPbmx5IHdhaXQgdXAgdG8gYE1BWF9SRVRSWV9USU1FYCB0byBmaW5kIGEgbWF0Y2hpbmcgY2xpZW50LlxuICAgIHdoaWxlIChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZSA8IE1BWF9SRVRSWV9USU1FKSB7XG4gICAgICAgIGV4aXN0aW5nV2luZG93cyA9IGF3YWl0IHNlbGYuY2xpZW50cy5tYXRjaEFsbCh7IHR5cGU6ICd3aW5kb3cnIH0pO1xuICAgICAgICByZXN1bHRpbmdXaW5kb3cgPSBleGlzdGluZ1dpbmRvd3MuZmluZCgodykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdGluZ0NsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGByZXN1bHRpbmdDbGllbnRJZGAsIHdlIGNhbiBtYXRjaCBvbiB0aGF0LlxuICAgICAgICAgICAgICAgIHJldHVybiB3LmlkID09PSByZXN1bHRpbmdDbGllbnRJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBtYXRjaCBvbiBmaW5kaW5nIGEgd2luZG93IG5vdCBpbiBgZXhpc3RpbmdXaW5kb3dJZHNgLlxuICAgICAgICAgICAgICAgIHJldHVybiAhZXhpc3RpbmdXaW5kb3dJZHMuaGFzKHcuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdGluZ1dpbmRvdykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2xlZXAgZm9yIDEwMG1zIGFuZCByZXRyeS5cbiAgICAgICAgYXdhaXQgdGltZW91dCgxMDApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0aW5nV2luZG93O1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFuZCB0aGUgcGFzc2VkIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gKiBUaGlzIHV0aWxpdHkgaXMgYW4gYXN5bmMvYXdhaXQtZnJpZW5kbHkgdmVyc2lvbiBvZiBgc2V0VGltZW91dGAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSB1dGlsaXR5IG1ldGhvZCB0aGF0IG1ha2VzIGl0IGVhc2llciB0byB1c2UgYGV2ZW50LndhaXRVbnRpbGAgd2l0aFxuICogYXN5bmMgZnVuY3Rpb25zIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzeW5jRm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gd2FpdFVudGlsKGV2ZW50LCBhc3luY0ZuKSB7XG4gICAgY29uc3QgcmV0dXJuUHJvbWlzZSA9IGFzeW5jRm4oKTtcbiAgICBldmVudC53YWl0VW50aWwocmV0dXJuUHJvbWlzZSk7XG4gICAgcmV0dXJuIHJldHVyblByb21pc2U7XG59XG5leHBvcnQgeyB3YWl0VW50aWwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OmNvcmU6Ny4wLjAnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYWNoZU5hbWVzIGFzIF9jYWNoZU5hbWVzIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBjYWNoZSBuYW1lcyBhbmQgcHJlZml4L3N1ZmZpeCB1c2VkIGJ5IFdvcmtib3guXG4gKlxuICogYGNhY2hlTmFtZXMucHJlY2FjaGVgIGlzIHVzZWQgZm9yIHByZWNhY2hlZCBhc3NldHMsXG4gKiBgY2FjaGVOYW1lcy5nb29nbGVBbmFseXRpY3NgIGlzIHVzZWQgYnkgYHdvcmtib3gtZ29vZ2xlLWFuYWx5dGljc2AgdG9cbiAqIHN0b3JlIGBhbmFseXRpY3MuanNgLCBhbmQgYGNhY2hlTmFtZXMucnVudGltZWAgaXMgdXNlZCBmb3IgZXZlcnl0aGluZyBlbHNlLlxuICpcbiAqIGBjYWNoZU5hbWVzLnByZWZpeGAgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUganVzdCB0aGUgY3VycmVudCBwcmVmaXggdmFsdWUuXG4gKiBgY2FjaGVOYW1lcy5zdWZmaXhgIGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIGp1c3QgdGhlIGN1cnJlbnQgc3VmZml4IHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYHByZWNhY2hlYCwgYHJ1bnRpbWVgLCBgcHJlZml4YCwgYW5kXG4gKiAgICAgYGdvb2dsZUFuYWx5dGljc2AgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKi9cbmNvbnN0IGNhY2hlTmFtZXMgPSB7XG4gICAgZ2V0IGdvb2dsZUFuYWx5dGljcygpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldEdvb2dsZUFuYWx5dGljc05hbWUoKTtcbiAgICB9LFxuICAgIGdldCBwcmVjYWNoZSgpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFByZWNhY2hlTmFtZSgpO1xuICAgIH0sXG4gICAgZ2V0IHByZWZpeCgpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFByZWZpeCgpO1xuICAgIH0sXG4gICAgZ2V0IHJ1bnRpbWUoKSB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZSgpO1xuICAgIH0sXG4gICAgZ2V0IHN1ZmZpeCgpIHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVzLmdldFN1ZmZpeCgpO1xuICAgIH0sXG59O1xuZXhwb3J0IHsgY2FjaGVOYW1lcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQ2xhaW0gYW55IGN1cnJlbnRseSBhdmFpbGFibGUgY2xpZW50cyBvbmNlIHRoZSBzZXJ2aWNlIHdvcmtlclxuICogYmVjb21lcyBhY3RpdmUuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBza2lwV2FpdGluZygpYC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKi9cbmZ1bmN0aW9uIGNsaWVudHNDbGFpbSgpIHtcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKCkgPT4gc2VsZi5jbGllbnRzLmNsYWltKCkpO1xufVxuZXhwb3J0IHsgY2xpZW50c0NsYWltIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFsbG93cyBkZXZlbG9wZXJzIHRvIGNvcHkgYSByZXNwb25zZSBhbmQgbW9kaWZ5IGl0cyBgaGVhZGVyc2AsIGBzdGF0dXNgLFxuICogb3IgYHN0YXR1c1RleHRgIHZhbHVlcyAodGhlIHZhbHVlcyBzZXR0YWJsZSB2aWEgYVxuICogW2BSZXNwb25zZUluaXRgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzcG9uc2UvUmVzcG9uc2UjU3ludGF4fVxuICogb2JqZWN0IGluIHRoZSBjb25zdHJ1Y3RvcikuXG4gKiBUbyBtb2RpZnkgdGhlc2UgdmFsdWVzLCBwYXNzIGEgZnVuY3Rpb24gYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhhdFxuICogZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdpdGggYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHJlc3BvbnNlIHByb3BlcnRpZXNcbiAqIGB7aGVhZGVycywgc3RhdHVzLCBzdGF0dXNUZXh0fWAuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhpcyBmdW5jdGlvbiB3aWxsXG4gKiBiZSB1c2VkIGFzIHRoZSBgUmVzcG9uc2VJbml0YCBmb3IgdGhlIG5ldyBgUmVzcG9uc2VgLiBUbyBjaGFuZ2UgdGhlIHZhbHVlc1xuICogZWl0aGVyIG1vZGlmeSB0aGUgcGFzc2VkIHBhcmFtZXRlcihzKSBhbmQgcmV0dXJuIGl0LCBvciByZXR1cm4gYSB0b3RhbGx5XG4gKiBuZXcgb2JqZWN0LlxuICpcbiAqIFRoaXMgbWV0aG9kIGlzIGludGVudGlvbmFsbHkgbGltaXRlZCB0byBzYW1lLW9yaWdpbiByZXNwb25zZXMsIHJlZ2FyZGxlc3Mgb2ZcbiAqIHdoZXRoZXIgQ09SUyB3YXMgdXNlZCBvciBub3QuXG4gKlxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1vZGlmaWVyXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvcHlSZXNwb25zZShyZXNwb25zZSwgbW9kaWZpZXIpIHtcbiAgICBsZXQgb3JpZ2luID0gbnVsbDtcbiAgICAvLyBJZiByZXNwb25zZS51cmwgaXNuJ3Qgc2V0LCBhc3N1bWUgaXQncyBjcm9zcy1vcmlnaW4gYW5kIGtlZXAgb3JpZ2luIG51bGwuXG4gICAgaWYgKHJlc3BvbnNlLnVybCkge1xuICAgICAgICBjb25zdCByZXNwb25zZVVSTCA9IG5ldyBVUkwocmVzcG9uc2UudXJsKTtcbiAgICAgICAgb3JpZ2luID0gcmVzcG9uc2VVUkwub3JpZ2luO1xuICAgIH1cbiAgICBpZiAob3JpZ2luICE9PSBzZWxmLmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjcm9zcy1vcmlnaW4tY29weS1yZXNwb25zZScsIHsgb3JpZ2luIH0pO1xuICAgIH1cbiAgICBjb25zdCBjbG9uZWRSZXNwb25zZSA9IHJlc3BvbnNlLmNsb25lKCk7XG4gICAgLy8gQ3JlYXRlIGEgZnJlc2ggYFJlc3BvbnNlSW5pdGAgb2JqZWN0IGJ5IGNsb25pbmcgdGhlIGhlYWRlcnMuXG4gICAgY29uc3QgcmVzcG9uc2VJbml0ID0ge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyhjbG9uZWRSZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgc3RhdHVzOiBjbG9uZWRSZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IGNsb25lZFJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgfTtcbiAgICAvLyBBcHBseSBhbnkgdXNlciBtb2RpZmljYXRpb25zLlxuICAgIGNvbnN0IG1vZGlmaWVkUmVzcG9uc2VJbml0ID0gbW9kaWZpZXIgPyBtb2RpZmllcihyZXNwb25zZUluaXQpIDogcmVzcG9uc2VJbml0O1xuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHJlc3BvbnNlIGZyb20gdGhlIGJvZHkgc3RyZWFtIGFuZCBgUmVzcG9uc2VJbml0YFxuICAgIC8vIG1vZGlmaWNhdGlvbnMuIE5vdGU6IG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB0aGUgUmVzcG9uc2UuYm9keSBzdHJlYW0sXG4gICAgLy8gc28gZmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIGVudGlyZSBib2R5IGludG8gbWVtb3J5IGFzIGEgYmxvYi5cbiAgICBjb25zdCBib2R5ID0gY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSgpXG4gICAgICAgID8gY2xvbmVkUmVzcG9uc2UuYm9keVxuICAgICAgICA6IGF3YWl0IGNsb25lZFJlc3BvbnNlLmJsb2IoKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIG1vZGlmaWVkUmVzcG9uc2VJbml0KTtcbn1cbmV4cG9ydCB7IGNvcHlSZXNwb25zZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2sgfSBmcm9tICcuL3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrLmpzJztcbmltcG9ydCAqIGFzIF9wcml2YXRlIGZyb20gJy4vX3ByaXZhdGUuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJy4vY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBjb3B5UmVzcG9uc2UgfSBmcm9tICcuL2NvcHlSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBjbGllbnRzQ2xhaW0gfSBmcm9tICcuL2NsaWVudHNDbGFpbS5qcyc7XG5pbXBvcnQgeyBzZXRDYWNoZU5hbWVEZXRhaWxzIH0gZnJvbSAnLi9zZXRDYWNoZU5hbWVEZXRhaWxzLmpzJztcbmltcG9ydCB7IHNraXBXYWl0aW5nIH0gZnJvbSAnLi9za2lwV2FpdGluZy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbGwgb2YgdGhlIFdvcmtib3ggc2VydmljZSB3b3JrZXIgbGlicmFyaWVzIHVzZSB3b3JrYm94LWNvcmUgZm9yIHNoYXJlZFxuICogY29kZSBhcyB3ZWxsIGFzIHNldHRpbmcgZGVmYXVsdCB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHNoYXJlZCAobGlrZSBjYWNoZVxuICogbmFtZXMpLlxuICpcbiAqIEBtb2R1bGUgd29ya2JveC1jb3JlXG4gKi9cbmV4cG9ydCB7IF9wcml2YXRlLCBjYWNoZU5hbWVzLCBjbGllbnRzQ2xhaW0sIGNvcHlSZXNwb25zZSwgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2ssIHNldENhY2hlTmFtZURldGFpbHMsIHNraXBXYWl0aW5nLCB9O1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy5qcyc7XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBmYWxsYmFjayA9IChjb2RlLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IG1zZyA9IGNvZGU7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBtc2cgKz0gYCA6OiAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWA7XG4gICAgfVxuICAgIHJldHVybiBtc2c7XG59O1xuY29uc3QgZ2VuZXJhdG9yRnVuY3Rpb24gPSAoY29kZSwgZGV0YWlscyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VzW2NvZGVdO1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIG1lc3NhZ2UgZm9yIGNvZGUgJyR7Y29kZX0nLmApO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZShkZXRhaWxzKTtcbn07XG5leHBvcnQgY29uc3QgbWVzc2FnZUdlbmVyYXRvciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBmYWxsYmFjayA6IGdlbmVyYXRvckZ1bmN0aW9uO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSB7XG4gICAgJ2ludmFsaWQtdmFsdWUnOiAoeyBwYXJhbU5hbWUsIHZhbGlkVmFsdWVEZXNjcmlwdGlvbiwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtTmFtZSB8fCAhdmFsaWRWYWx1ZURlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2ludmFsaWQtdmFsdWUnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYFRoZSAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGdpdmVuIGEgdmFsdWUgd2l0aCBhbiBgICtcbiAgICAgICAgICAgIGB1bmV4cGVjdGVkIHZhbHVlLiAke3ZhbGlkVmFsdWVEZXNjcmlwdGlvbn0gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0uYCk7XG4gICAgfSxcbiAgICAnbm90LWFuLWFycmF5JzogKHsgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lIH0pID0+IHtcbiAgICAgICAgaWYgKCFtb2R1bGVOYW1lIHx8ICFjbGFzc05hbWUgfHwgIWZ1bmNOYW1lIHx8ICFwYXJhbU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbm90LWFuLWFycmF5JyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIGFuIGFycmF5LmApO1xuICAgIH0sXG4gICAgJ2luY29ycmVjdC10eXBlJzogKHsgZXhwZWN0ZWRUeXBlLCBwYXJhbU5hbWUsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIH0pID0+IHtcbiAgICAgICAgaWYgKCFleHBlY3RlZFR5cGUgfHwgIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LXR5cGUnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZVN0ciA9IGNsYXNzTmFtZSA/IGAke2NsYXNzTmFtZX0uYCA6ICcnO1xuICAgICAgICByZXR1cm4gKGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfWAgK1xuICAgICAgICAgICAgYCR7ZnVuY05hbWV9KCknIG11c3QgYmUgb2YgdHlwZSAke2V4cGVjdGVkVHlwZX0uYCk7XG4gICAgfSxcbiAgICAnaW5jb3JyZWN0LWNsYXNzJzogKHsgZXhwZWN0ZWRDbGFzc05hbWUsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgaXNSZXR1cm5WYWx1ZVByb2JsZW0sIH0pID0+IHtcbiAgICAgICAgaWYgKCFleHBlY3RlZENsYXNzTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LWNsYXNzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWVTdHIgPSBjbGFzc05hbWUgPyBgJHtjbGFzc05hbWV9LmAgOiAnJztcbiAgICAgICAgaWYgKGlzUmV0dXJuVmFsdWVQcm9ibGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gKGBUaGUgcmV0dXJuIHZhbHVlIGZyb20gYCArXG4gICAgICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgICAgICAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzc05hbWV9LmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYFRoZSBwYXJhbWV0ZXIgJyR7cGFyYW1OYW1lfScgcGFzc2VkIGludG8gYCArXG4gICAgICAgICAgICBgJyR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWVTdHJ9JHtmdW5jTmFtZX0oKScgYCArXG4gICAgICAgICAgICBgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBjbGFzcyAke2V4cGVjdGVkQ2xhc3NOYW1lfS5gKTtcbiAgICB9LFxuICAgICdtaXNzaW5nLWEtbWV0aG9kJzogKHsgZXhwZWN0ZWRNZXRob2QsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgfSkgPT4ge1xuICAgICAgICBpZiAoIWV4cGVjdGVkTWV0aG9kIHx8XG4gICAgICAgICAgICAhcGFyYW1OYW1lIHx8XG4gICAgICAgICAgICAhbW9kdWxlTmFtZSB8fFxuICAgICAgICAgICAgIWNsYXNzTmFtZSB8fFxuICAgICAgICAgICAgIWZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ21pc3NpbmctYS1tZXRob2QnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYCR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCkgZXhwZWN0ZWQgdGhlIGAgK1xuICAgICAgICAgICAgYCcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB0byBleHBvc2UgYSAnJHtleHBlY3RlZE1ldGhvZH0nIG1ldGhvZC5gKTtcbiAgICB9LFxuICAgICdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnOiAoeyBlbnRyeSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYEFuIHVuZXhwZWN0ZWQgZW50cnkgd2FzIHBhc3NlZCB0byBgICtcbiAgICAgICAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBUaGUgZW50cnkgYCArXG4gICAgICAgICAgICBgJyR7SlNPTi5zdHJpbmdpZnkoZW50cnkpfScgaXNuJ3Qgc3VwcG9ydGVkLiBZb3UgbXVzdCBzdXBwbHkgYW4gYXJyYXkgb2YgYCArXG4gICAgICAgICAgICBgc3RyaW5ncyB3aXRoIG9uZSBvciBtb3JlIGNoYXJhY3RlcnMsIG9iamVjdHMgd2l0aCBhIHVybCBwcm9wZXJ0eSBvciBgICtcbiAgICAgICAgICAgIGBSZXF1ZXN0IG9iamVjdHMuYCk7XG4gICAgfSxcbiAgICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcyc6ICh7IGZpcnN0RW50cnksIHNlY29uZEVudHJ5IH0pID0+IHtcbiAgICAgICAgaWYgKCFmaXJzdEVudHJ5IHx8ICFzZWNvbmRFbnRyeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgKyBgJ2FkZC10by1jYWNoZS1saXN0LWR1cGxpY2F0ZS1lbnRyaWVzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBUd28gb2YgdGhlIGVudHJpZXMgcGFzc2VkIHRvIGAgK1xuICAgICAgICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIGhhZCB0aGUgVVJMIGAgK1xuICAgICAgICAgICAgYCR7Zmlyc3RFbnRyeX0gYnV0IGRpZmZlcmVudCByZXZpc2lvbiBkZXRhaWxzLiBXb3JrYm94IGlzIGAgK1xuICAgICAgICAgICAgYHVuYWJsZSB0byBjYWNoZSBhbmQgdmVyc2lvbiB0aGUgYXNzZXQgY29ycmVjdGx5LiBQbGVhc2UgcmVtb3ZlIG9uZSBgICtcbiAgICAgICAgICAgIGBvZiB0aGUgZW50cmllcy5gKTtcbiAgICB9LFxuICAgICdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJzogKHsgdGhyb3duRXJyb3JNZXNzYWdlIH0pID0+IHtcbiAgICAgICAgaWYgKCF0aHJvd25FcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byBgICsgYCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgQW4gZXJyb3Igd2FzIHRocm93biBieSBhIHBsdWdpbnMgJ3JlcXVlc3RXaWxsRmV0Y2goKScgbWV0aG9kLiBgICtcbiAgICAgICAgICAgIGBUaGUgdGhyb3duIGVycm9yIG1lc3NhZ2Ugd2FzOiAnJHt0aHJvd25FcnJvck1lc3NhZ2V9Jy5gKTtcbiAgICB9LFxuICAgICdpbnZhbGlkLWNhY2hlLW5hbWUnOiAoeyBjYWNoZU5hbWVJZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBpZiAoIWNhY2hlTmFtZUlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGEgJ2NhY2hlTmFtZUlkJyBmb3IgZXJyb3IgJ2ludmFsaWQtY2FjaGUtbmFtZSdgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBZb3UgbXVzdCBwcm92aWRlIGEgbmFtZSBjb250YWluaW5nIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgZm9yIGAgK1xuICAgICAgICAgICAgYHNldENhY2hlRGV0YWlscyh7JHtjYWNoZU5hbWVJZH06ICcuLi4nfSkuIFJlY2VpdmVkIGEgdmFsdWUgb2YgYCArXG4gICAgICAgICAgICBgJyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfSdgKTtcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnOiAoeyBtZXRob2QgfSkgPT4ge1xuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgICAgICAgIGAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBUaGUgcm91dGUgeW91J3JlIHRyeWluZyB0byB1bnJlZ2lzdGVyIHdhcyBub3QgIHByZXZpb3VzbHkgYCArXG4gICAgICAgICAgICBgcmVnaXN0ZXJlZCBmb3IgdGhlIG1ldGhvZCB0eXBlICcke21ldGhvZH0nLmApO1xuICAgIH0sXG4gICAgJ3VucmVnaXN0ZXItcm91dGUtcm91dGUtbm90LXJlZ2lzdGVyZWQnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCBwcmV2aW91c2x5IGAgK1xuICAgICAgICAgICAgYHJlZ2lzdGVyZWQuYCk7XG4gICAgfSxcbiAgICAncXVldWUtcmVwbGF5LWZhaWxlZCc6ICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFJlcGxheWluZyB0aGUgYmFja2dyb3VuZCBzeW5jIHF1ZXVlICcke25hbWV9JyBmYWlsZWQuYDtcbiAgICB9LFxuICAgICdkdXBsaWNhdGUtcXVldWUtbmFtZSc6ICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGUgUXVldWUgbmFtZSAnJHtuYW1lfScgaXMgYWxyZWFkeSBiZWluZyB1c2VkLiBgICtcbiAgICAgICAgICAgIGBBbGwgaW5zdGFuY2VzIG9mIGJhY2tncm91bmRTeW5jLlF1ZXVlIG11c3QgYmUgZ2l2ZW4gdW5pcXVlIG5hbWVzLmApO1xuICAgIH0sXG4gICAgJ2V4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2UnOiAoeyBtZXRob2ROYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGUgJyR7bWV0aG9kTmFtZX0oKScgbWV0aG9kIGNhbiBvbmx5IGJlIHVzZWQgd2hlbiB0aGUgYCArXG4gICAgICAgICAgICBgJyR7cGFyYW1OYW1lfScgaXMgdXNlZCBpbiB0aGUgY29uc3RydWN0b3IuYCk7XG4gICAgfSxcbiAgICAndW5zdXBwb3J0ZWQtcm91dGUtdHlwZSc6ICh7IG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGFuIHVuc3VwcG9ydGVkIHR5cGUuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0gZm9yIGAgK1xuICAgICAgICAgICAgYHZhbGlkIGlucHV0IHR5cGVzLmApO1xuICAgIH0sXG4gICAgJ25vdC1hcnJheS1vZi1jbGFzcyc6ICh7IHZhbHVlLCBleHBlY3RlZENsYXNzLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIGAgK1xuICAgICAgICAgICAgYCcke2V4cGVjdGVkQ2xhc3N9JyBvYmplY3RzLiBSZWNlaXZlZCAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LCcuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgY2FsbCB0byAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGAgK1xuICAgICAgICAgICAgYHRvIGZpeCB0aGUgaXNzdWUuYCk7XG4gICAgfSxcbiAgICAnbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJzogKHsgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFlvdSBtdXN0IGRlZmluZSBlaXRoZXIgY29uZmlnLm1heEVudHJpZXMgb3IgY29uZmlnLm1heEFnZVNlY29uZHNgICtcbiAgICAgICAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWApO1xuICAgIH0sXG4gICAgJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgWW91IG11c3QgZGVmaW5lIGVpdGhlciBjb25maWcuc3RhdHVzZXMgb3IgY29uZmlnLmhlYWRlcnNgICtcbiAgICAgICAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWApO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtc3RyaW5nJzogKHsgbW9kdWxlTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIGlmICghcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXN0cmluZycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgV2hlbiB1c2luZyBzdHJpbmdzLCB0aGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3Qgc3RhcnQgd2l0aCBgICtcbiAgICAgICAgICAgIGAnaHR0cCcgKGZvciBjcm9zcy1vcmlnaW4gbWF0Y2hlcykgb3IgJy8nIChmb3Igc2FtZS1vcmlnaW4gbWF0Y2hlcykuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBzZWUgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtmdW5jTmFtZX0oKSBmb3IgYCArXG4gICAgICAgICAgICBgbW9yZSBpbmZvLmApO1xuICAgIH0sXG4gICAgJ2NoYW5uZWwtbmFtZS1yZXF1aXJlZCc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChgWW91IG11c3QgcHJvdmlkZSBhIGNoYW5uZWxOYW1lIHRvIGNvbnN0cnVjdCBhIGAgK1xuICAgICAgICAgICAgYEJyb2FkY2FzdENhY2hlVXBkYXRlIGluc3RhbmNlLmApO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtcmVzcG9uc2VzLWFyZS1zYW1lLWFyZ3MnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSBhcmd1bWVudHMgcGFzc2VkIGludG8gcmVzcG9uc2VzQXJlU2FtZSgpIGFwcGVhciB0byBiZSBgICtcbiAgICAgICAgICAgIGBpbnZhbGlkLiBQbGVhc2UgZW5zdXJlIHZhbGlkIFJlc3BvbnNlcyBhcmUgdXNlZC5gKTtcbiAgICB9LFxuICAgICdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5JzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGBZb3UgbXVzdCBwcm92aWRlIGEgJ2NhY2hlTmFtZScgcHJvcGVydHkgd2hlbiB1c2luZyB0aGUgYCArXG4gICAgICAgICAgICBgZXhwaXJhdGlvbiBwbHVnaW4gd2l0aCBhIHJ1bnRpbWUgY2FjaGluZyBzdHJhdGVneS5gKTtcbiAgICB9LFxuICAgICd1bml0LW11c3QtYmUtYnl0ZXMnOiAoeyBub3JtYWxpemVkUmFuZ2VIZWFkZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICd1bml0LW11c3QtYmUtYnl0ZXMnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYFRoZSAndW5pdCcgcG9ydGlvbiBvZiB0aGUgUmFuZ2UgaGVhZGVyIG11c3QgYmUgc2V0IHRvICdieXRlcycuIGAgK1xuICAgICAgICAgICAgYFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgKTtcbiAgICB9LFxuICAgICdzaW5nbGUtcmFuZ2Utb25seSc6ICh7IG5vcm1hbGl6ZWRSYW5nZUhlYWRlciB9KSA9PiB7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3NpbmdsZS1yYW5nZS1vbmx5JyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGBNdWx0aXBsZSByYW5nZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgYSAgc2luZ2xlIHN0YXJ0IGAgK1xuICAgICAgICAgICAgYHZhbHVlLCBhbmQgb3B0aW9uYWwgZW5kIHZhbHVlLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgICAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYCk7XG4gICAgfSxcbiAgICAnaW52YWxpZC1yYW5nZS12YWx1ZXMnOiAoeyBub3JtYWxpemVkUmFuZ2VIZWFkZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXJhbmdlLXZhbHVlcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChgVGhlIFJhbmdlIGhlYWRlciBpcyBtaXNzaW5nIGJvdGggc3RhcnQgYW5kIGVuZCB2YWx1ZXMuIEF0IGxlYXN0IGAgK1xuICAgICAgICAgICAgYG9uZSBvZiB0aG9zZSB2YWx1ZXMgaXMgbmVlZGVkLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgICAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYCk7XG4gICAgfSxcbiAgICAnbm8tcmFuZ2UtaGVhZGVyJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYE5vIFJhbmdlIGhlYWRlciB3YXMgZm91bmQgaW4gdGhlIFJlcXVlc3QgcHJvdmlkZWQuYDtcbiAgICB9LFxuICAgICdyYW5nZS1ub3Qtc2F0aXNmaWFibGUnOiAoeyBzaXplLCBzdGFydCwgZW5kIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVGhlIHN0YXJ0ICgke3N0YXJ0fSkgYW5kIGVuZCAoJHtlbmR9KSB2YWx1ZXMgaW4gdGhlIFJhbmdlIGFyZSBgICtcbiAgICAgICAgICAgIGBub3Qgc2F0aXNmaWFibGUgYnkgdGhlIGNhY2hlZCByZXNwb25zZSwgd2hpY2ggaXMgJHtzaXplfSBieXRlcy5gKTtcbiAgICB9LFxuICAgICdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCc6ICh7IHVybCwgbWV0aG9kIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVW5hYmxlIHRvIGNhY2hlICcke3VybH0nIGJlY2F1c2UgaXQgaXMgYSAnJHttZXRob2R9JyByZXF1ZXN0IGFuZCBgICtcbiAgICAgICAgICAgIGBvbmx5ICdHRVQnIHJlcXVlc3RzIGNhbiBiZSBjYWNoZWQuYCk7XG4gICAgfSxcbiAgICAnY2FjaGUtcHV0LXdpdGgtbm8tcmVzcG9uc2UnOiAoeyB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGBUaGVyZSB3YXMgYW4gYXR0ZW1wdCB0byBjYWNoZSAnJHt1cmx9JyBidXQgdGhlIHJlc3BvbnNlIHdhcyBub3QgYCArXG4gICAgICAgICAgICBgZGVmaW5lZC5gKTtcbiAgICB9LFxuICAgICduby1yZXNwb25zZSc6ICh7IHVybCwgZXJyb3IgfSkgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBUaGUgc3RyYXRlZ3kgY291bGQgbm90IGdlbmVyYXRlIGEgcmVzcG9uc2UgZm9yICcke3VybH0nLmA7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgIFRoZSB1bmRlcmx5aW5nIGVycm9yIGlzICR7ZXJyb3J9LmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICAnYmFkLXByZWNhY2hpbmctcmVzcG9uc2UnOiAoeyB1cmwsIHN0YXR1cyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoYFRoZSBwcmVjYWNoaW5nIHJlcXVlc3QgZm9yICcke3VybH0nIGZhaWxlZGAgK1xuICAgICAgICAgICAgKHN0YXR1cyA/IGAgd2l0aCBhbiBIVFRQIHN0YXR1cyBvZiAke3N0YXR1c30uYCA6IGAuYCkpO1xuICAgIH0sXG4gICAgJ25vbi1wcmVjYWNoZWQtdXJsJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwoJyR7dXJsfScpIHdhcyBjYWxsZWQsIGJ1dCB0aGF0IFVSTCBpcyBgICtcbiAgICAgICAgICAgIGBub3QgcHJlY2FjaGVkLiBQbGVhc2UgcGFzcyBpbiBhIFVSTCB0aGF0IGlzIHByZWNhY2hlZCBpbnN0ZWFkLmApO1xuICAgIH0sXG4gICAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWludGVncml0aWVzJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChgVHdvIG9mIHRoZSBlbnRyaWVzIHBhc3NlZCB0byBgICtcbiAgICAgICAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBoYWQgdGhlIFVSTCBgICtcbiAgICAgICAgICAgIGAke3VybH0gd2l0aCBkaWZmZXJlbnQgaW50ZWdyaXR5IHZhbHVlcy4gUGxlYXNlIHJlbW92ZSBvbmUgb2YgdGhlbS5gKTtcbiAgICB9LFxuICAgICdtaXNzaW5nLXByZWNhY2hlLWVudHJ5JzogKHsgY2FjaGVOYW1lLCB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFVuYWJsZSB0byBmaW5kIGEgcHJlY2FjaGVkIHJlc3BvbnNlIGluICR7Y2FjaGVOYW1lfSBmb3IgJHt1cmx9LmA7XG4gICAgfSxcbiAgICAnY3Jvc3Mtb3JpZ2luLWNvcHktcmVzcG9uc2UnOiAoeyBvcmlnaW4gfSkgPT4ge1xuICAgICAgICByZXR1cm4gKGB3b3JrYm94LWNvcmUuY29weVJlc3BvbnNlKCkgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHNhbWUtb3JpZ2luIGAgK1xuICAgICAgICAgICAgYHJlc3BvbnNlcy4gSXQgd2FzIHBhc3NlZCBhIHJlc3BvbnNlIHdpdGggb3JpZ2luICR7b3JpZ2lufS5gKTtcbiAgICB9LFxuICAgICdvcGFxdWUtc3RyZWFtcy1zb3VyY2UnOiAoeyB0eXBlIH0pID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBPbmUgb2YgdGhlIHdvcmtib3gtc3RyZWFtcyBzb3VyY2VzIHJlc3VsdGVkIGluIGFuIGAgK1xuICAgICAgICAgICAgYCcke3R5cGV9JyByZXNwb25zZS5gO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ29wYXF1ZXJlZGlyZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIChgJHttZXNzYWdlfSBQbGVhc2UgZG8gbm90IHVzZSBhIG5hdmlnYXRpb24gcmVxdWVzdCB0aGF0IHJlc3VsdHMgYCArXG4gICAgICAgICAgICAgICAgYGluIGEgcmVkaXJlY3QgYXMgYSBzb3VyY2UuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke21lc3NhZ2V9IFBsZWFzZSBlbnN1cmUgeW91ciBzb3VyY2VzIGFyZSBDT1JTLWVuYWJsZWQuYDtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLy8gQ2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIHdoZW5ldmVyIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbi8vIENhbid0IGNoYW5nZSBGdW5jdGlvbiB0eXBlIHJpZ2h0IG5vdy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5jb25zdCBxdW90YUVycm9yQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xuZXhwb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJy4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBhIGZ1bmN0aW9uIHRvIHRoZSBzZXQgb2YgcXVvdGFFcnJvckNhbGxiYWNrcyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaWZcbiAqIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQG1lbWJlcm9mIHdvcmtib3gtY29yZVxuICovXG4vLyBDYW4ndCBjaGFuZ2UgRnVuY3Rpb24gdHlwZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYXNzZXJ0LmlzVHlwZShjYWxsYmFjaywgJ2Z1bmN0aW9uJywge1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY29yZScsXG4gICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhbGxiYWNrJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHF1b3RhRXJyb3JDYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKCdSZWdpc3RlcmVkIGEgY2FsbGJhY2sgdG8gcmVzcG9uZCB0byBxdW90YSBlcnJvcnMuJywgY2FsbGJhY2spO1xuICAgIH1cbn1cbmV4cG9ydCB7IHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIE1vZGlmaWVzIHRoZSBkZWZhdWx0IGNhY2hlIG5hbWVzIHVzZWQgYnkgdGhlIFdvcmtib3ggcGFja2FnZXMuXG4gKiBDYWNoZSBuYW1lcyBhcmUgZ2VuZXJhdGVkIGFzIGA8cHJlZml4Pi08Q2FjaGUgTmFtZT4tPHN1ZmZpeD5gLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMucHJlZml4XSBUaGUgc3RyaW5nIHRvIGFkZCB0byB0aGUgYmVnaW5uaW5nIG9mXG4gKiAgICAgdGhlIHByZWNhY2hlIGFuZCBydW50aW1lIGNhY2hlIG5hbWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzLnN1ZmZpeF0gVGhlIHN0cmluZyB0byBhZGQgdG8gdGhlIGVuZCBvZlxuICogICAgIHRoZSBwcmVjYWNoZSBhbmQgcnVudGltZSBjYWNoZSBuYW1lcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlscy5wcmVjYWNoZV0gVGhlIGNhY2hlIG5hbWUgdG8gdXNlIGZvciBwcmVjYWNoZVxuICogICAgIGNhY2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMucnVudGltZV0gVGhlIGNhY2hlIG5hbWUgdG8gdXNlIGZvciBydW50aW1lIGNhY2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMuZ29vZ2xlQW5hbHl0aWNzXSBUaGUgY2FjaGUgbmFtZSB0byB1c2UgZm9yXG4gKiAgICAgYHdvcmtib3gtZ29vZ2xlLWFuYWx5dGljc2AgY2FjaGluZy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlTmFtZURldGFpbHMoZGV0YWlscykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRldGFpbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShkZXRhaWxzW2tleV0sICdzdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY29yZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdzZXRDYWNoZU5hbWVEZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6IGBkZXRhaWxzLiR7a2V5fWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgncHJlY2FjaGUnIGluIGRldGFpbHMgJiYgZGV0YWlsc1sncHJlY2FjaGUnXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtY2FjaGUtbmFtZScsIHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWVJZDogJ3ByZWNhY2hlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGV0YWlsc1sncHJlY2FjaGUnXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgncnVudGltZScgaW4gZGV0YWlscyAmJiBkZXRhaWxzWydydW50aW1lJ10ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLWNhY2hlLW5hbWUnLCB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lSWQ6ICdydW50aW1lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGV0YWlsc1sncnVudGltZSddLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdnb29nbGVBbmFseXRpY3MnIGluIGRldGFpbHMgJiZcbiAgICAgICAgICAgIGRldGFpbHNbJ2dvb2dsZUFuYWx5dGljcyddLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1jYWNoZS1uYW1lJywge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZUlkOiAnZ29vZ2xlQW5hbHl0aWNzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGV0YWlsc1snZ29vZ2xlQW5hbHl0aWNzJ10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZU5hbWVzLnVwZGF0ZURldGFpbHMoZGV0YWlscyk7XG59XG5leHBvcnQgeyBzZXRDYWNoZU5hbWVEZXRhaWxzIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFdvcmtib3ggdjcuXG4gKlxuICogQ2FsbGluZyBzZWxmLnNraXBXYWl0aW5nKCkgaXMgZXF1aXZhbGVudCwgYW5kIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtY29yZVxuICovXG5mdW5jdGlvbiBza2lwV2FpdGluZygpIHtcbiAgICAvLyBKdXN0IGNhbGwgc2VsZi5za2lwV2FpdGluZygpIGRpcmVjdGx5LlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI1MjVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIud2Fybihgc2tpcFdhaXRpbmcoKSBmcm9tIHdvcmtib3gtY29yZSBpcyBubyBsb25nZXIgcmVjb21tZW5kZWQgYCArXG4gICAgICAgICAgICBgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBXb3JrYm94IHY3LiBVc2luZyBzZWxmLnNraXBXYWl0aW5nKCkgaW5zdGVhZCBgICtcbiAgICAgICAgICAgIGBpcyBlcXVpdmFsZW50LmApO1xuICAgIH1cbiAgICB2b2lkIHNlbGYuc2tpcFdhaXRpbmcoKTtcbn1cbmV4cG9ydCB7IHNraXBXYWl0aW5nIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IHdhaXRVbnRpbCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS93YWl0VW50aWwuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FjaGVLZXkgfSBmcm9tICcuL3V0aWxzL2NyZWF0ZUNhY2hlS2V5LmpzJztcbmltcG9ydCB7IFByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbiB9IGZyb20gJy4vdXRpbHMvUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luLmpzJztcbmltcG9ydCB7IFByZWNhY2hlQ2FjaGVLZXlQbHVnaW4gfSBmcm9tICcuL3V0aWxzL1ByZWNhY2hlQ2FjaGVLZXlQbHVnaW4uanMnO1xuaW1wb3J0IHsgcHJpbnRDbGVhbnVwRGV0YWlscyB9IGZyb20gJy4vdXRpbHMvcHJpbnRDbGVhbnVwRGV0YWlscy5qcyc7XG5pbXBvcnQgeyBwcmludEluc3RhbGxEZXRhaWxzIH0gZnJvbSAnLi91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLmpzJztcbmltcG9ydCB7IFByZWNhY2hlU3RyYXRlZ3kgfSBmcm9tICcuL1ByZWNhY2hlU3RyYXRlZ3kuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogUGVyZm9ybXMgZWZmaWNpZW50IHByZWNhY2hpbmcgb2YgYXNzZXRzLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuY2xhc3MgUHJlY2FjaGVDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgUHJlY2FjaGVDb250cm9sbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIFRoZSBjYWNoZSB0byB1c2UgZm9yIHByZWNhY2hpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBsdWdpbnNdIFBsdWdpbnMgdG8gdXNlIHdoZW4gcHJlY2FjaGluZyBhcyB3ZWxsXG4gICAgICogYXMgcmVzcG9uZGluZyB0byBmZXRjaCBldmVudHMgZm9yIHByZWNhY2hlZCBhc3NldHMuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mYWxsYmFja1RvTmV0d29yaz10cnVlXSBXaGV0aGVyIHRvIGF0dGVtcHQgdG9cbiAgICAgKiBnZXQgdGhlIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsgaWYgdGhlcmUncyBhIHByZWNhY2hlIG1pc3MuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeyBjYWNoZU5hbWUsIHBsdWdpbnMgPSBbXSwgZmFsbGJhY2tUb05ldHdvcmsgPSB0cnVlLCB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl91cmxzVG9DYWNoZU1vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IG5ldyBQcmVjYWNoZVN0cmF0ZWd5KHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoY2FjaGVOYW1lKSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAuLi5wbHVnaW5zLFxuICAgICAgICAgICAgICAgIG5ldyBQcmVjYWNoZUNhY2hlS2V5UGx1Z2luKHsgcHJlY2FjaGVDb250cm9sbGVyOiB0aGlzIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZhbGxiYWNrVG9OZXR3b3JrLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQmluZCB0aGUgaW5zdGFsbCBhbmQgYWN0aXZhdGUgbWV0aG9kcyB0byB0aGUgaW5zdGFuY2UuXG4gICAgICAgIHRoaXMuaW5zdGFsbCA9IHRoaXMuaW5zdGFsbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlID0gdGhpcy5hY3RpdmF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7d29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlU3RyYXRlZ3l9IFRoZSBzdHJhdGVneSBjcmVhdGVkIGJ5IHRoaXMgY29udHJvbGxlciBhbmRcbiAgICAgKiB1c2VkIHRvIGNhY2hlIGFzc2V0cyBhbmQgcmVzcG9uZCB0byBmZXRjaCBldmVudHMuXG4gICAgICovXG4gICAgZ2V0IHN0cmF0ZWd5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyYXRlZ3k7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgaXRlbXMgdG8gdGhlIHByZWNhY2hlIGxpc3QsIHJlbW92aW5nIGFueSBkdXBsaWNhdGVzIGFuZFxuICAgICAqIHN0b3JlcyB0aGUgZmlsZXMgaW4gdGhlXG4gICAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfFwicHJlY2FjaGUgY2FjaGVcIn0gd2hlbiB0aGUgc2VydmljZVxuICAgICAqIHdvcmtlciBpbnN0YWxscy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBbZW50cmllcz1bXV0gQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAgICAgKi9cbiAgICBwcmVjYWNoZShlbnRyaWVzKSB7XG4gICAgICAgIHRoaXMuYWRkVG9DYWNoZUxpc3QoZW50cmllcyk7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFsbEFuZEFjdGl2ZUxpc3RlbmVyc0FkZGVkKSB7XG4gICAgICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCB0aGlzLmluc3RhbGwpO1xuICAgICAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIHRoaXMuYWN0aXZhdGUpO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFsbEFuZEFjdGl2ZUxpc3RlbmVyc0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGFkZCBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICAgICAqIGFuZCBlbnN1cmluZyB0aGUgaW5mb3JtYXRpb24gaXMgdmFsaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PHdvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuUHJlY2FjaGVFbnRyeXxzdHJpbmc+fSBlbnRyaWVzXG4gICAgICogICAgIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gICAgICovXG4gICAgYWRkVG9DYWNoZUxpc3QoZW50cmllcykge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzQXJyYXkoZW50cmllcywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXByZWNhY2hpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1ByZWNhY2hlQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdhZGRUb0NhY2hlTGlzdCcsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnZW50cmllcycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmxzVG9XYXJuQWJvdXQgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yMjU5XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHVybHNUb1dhcm5BYm91dC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVudHJ5ICYmIGVudHJ5LnJldmlzaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1cmxzVG9XYXJuQWJvdXQucHVzaChlbnRyeS51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBjYWNoZUtleSwgdXJsIH0gPSBjcmVhdGVDYWNoZUtleShlbnRyeSk7XG4gICAgICAgICAgICBjb25zdCBjYWNoZU1vZGUgPSB0eXBlb2YgZW50cnkgIT09ICdzdHJpbmcnICYmIGVudHJ5LnJldmlzaW9uID8gJ3JlbG9hZCcgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgICBpZiAodGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmhhcyh1cmwpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmwpICE9PSBjYWNoZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RW50cnk6IHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsKSxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kRW50cnk6IGNhY2hlS2V5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gJ3N0cmluZycgJiYgZW50cnkuaW50ZWdyaXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuaGFzKGNhY2hlS2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzLmdldChjYWNoZUtleSkgIT09IGVudHJ5LmludGVncml0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1pbnRlZ3JpdGllcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuc2V0KGNhY2hlS2V5LCBlbnRyeS5pbnRlZ3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLnNldCh1cmwsIGNhY2hlS2V5KTtcbiAgICAgICAgICAgIHRoaXMuX3VybHNUb0NhY2hlTW9kZXMuc2V0KHVybCwgY2FjaGVNb2RlKTtcbiAgICAgICAgICAgIGlmICh1cmxzVG9XYXJuQWJvdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gYFdvcmtib3ggaXMgcHJlY2FjaGluZyBVUkxzIHdpdGhvdXQgcmV2aXNpb24gYCArXG4gICAgICAgICAgICAgICAgICAgIGBpbmZvOiAke3VybHNUb1dhcm5BYm91dC5qb2luKCcsICcpfVxcblRoaXMgaXMgZ2VuZXJhbGx5IE5PVCBzYWZlLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9iaXQubHkvd2ItcHJlY2FjaGVgO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBjb25zb2xlIGRpcmVjdGx5IHRvIGRpc3BsYXkgdGhpcyB3YXJuaW5nIHdpdGhvdXQgYmxvYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gYnVuZGxlIHNpemVzIGJ5IHB1bGxpbmcgaW4gYWxsIG9mIHRoZSBsb2dnZXIgY29kZWJhc2UgaW4gcHJvZC5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlY2FjaGVzIG5ldyBhbmQgdXBkYXRlZCBhc3NldHMuIENhbGwgdGhpcyBtZXRob2QgZnJvbSB0aGUgc2VydmljZSB3b3JrZXJcbiAgICAgKiBpbnN0YWxsIGV2ZW50LlxuICAgICAqXG4gICAgICogTm90ZTogdGhpcyBtZXRob2QgY2FsbHMgYGV2ZW50LndhaXRVbnRpbCgpYCBmb3IgeW91LCBzbyB5b3UgZG8gbm90IG5lZWRcbiAgICAgKiB0byBjYWxsIGl0IHlvdXJzZWxmIGluIHlvdXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHdvcmtib3gtcHJlY2FjaGluZy5JbnN0YWxsUmVzdWx0Pn1cbiAgICAgKi9cbiAgICBpbnN0YWxsKGV2ZW50KSB7XG4gICAgICAgIC8vIHdhaXRVbnRpbCByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cbiAgICAgICAgcmV0dXJuIHdhaXRVbnRpbChldmVudCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFsbFJlcG9ydFBsdWdpbiA9IG5ldyBQcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4oKTtcbiAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kucGx1Z2lucy5wdXNoKGluc3RhbGxSZXBvcnRQbHVnaW4pO1xuICAgICAgICAgICAgLy8gQ2FjaGUgZW50cmllcyBvbmUgYXQgYSB0aW1lLlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjUyOFxuICAgICAgICAgICAgZm9yIChjb25zdCBbdXJsLCBjYWNoZUtleV0gb2YgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZWdyaXR5ID0gdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5nZXQoY2FjaGVLZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlTW9kZSA9IHRoaXMuX3VybHNUb0NhY2hlTW9kZXMuZ2V0KHVybCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwge1xuICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHksXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlOiBjYWNoZU1vZGUsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuc3RyYXRlZ3kuaGFuZGxlQWxsKHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGNhY2hlS2V5IH0sXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXBkYXRlZFVSTHMsIG5vdFVwZGF0ZWRVUkxzIH0gPSBpbnN0YWxsUmVwb3J0UGx1Z2luO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcmludEluc3RhbGxEZXRhaWxzKHVwZGF0ZWRVUkxzLCBub3RVcGRhdGVkVVJMcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyB1cGRhdGVkVVJMcywgbm90VXBkYXRlZFVSTHMgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYXNzZXRzIHRoYXQgYXJlIG5vIGxvbmdlciBwcmVzZW50IGluIHRoZSBjdXJyZW50IHByZWNhY2hlIG1hbmlmZXN0LlxuICAgICAqIENhbGwgdGhpcyBtZXRob2QgZnJvbSB0aGUgc2VydmljZSB3b3JrZXIgYWN0aXZhdGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBOb3RlOiB0aGlzIG1ldGhvZCBjYWxscyBgZXZlbnQud2FpdFVudGlsKClgIGZvciB5b3UsIHNvIHlvdSBkbyBub3QgbmVlZFxuICAgICAqIHRvIGNhbGwgaXQgeW91cnNlbGYgaW4geW91ciBldmVudCBoYW5kbGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8d29ya2JveC1wcmVjYWNoaW5nLkNsZWFudXBSZXN1bHQ+fVxuICAgICAqL1xuICAgIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgICAgIC8vIHdhaXRVbnRpbCByZXR1cm5zIFByb21pc2U8YW55PlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cbiAgICAgICAgcmV0dXJuIHdhaXRVbnRpbChldmVudCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKHRoaXMuc3RyYXRlZ3kuY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRseUNhY2hlZFJlcXVlc3RzID0gYXdhaXQgY2FjaGUua2V5cygpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRDYWNoZUtleXMgPSBuZXcgU2V0KHRoaXMuX3VybHNUb0NhY2hlS2V5cy52YWx1ZXMoKSk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVkVVJMcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0IG9mIGN1cnJlbnRseUNhY2hlZFJlcXVlc3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFleHBlY3RlZENhY2hlS2V5cy5oYXMocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGNhY2hlLmRlbGV0ZShyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlZFVSTHMucHVzaChyZXF1ZXN0LnVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcmludENsZWFudXBEZXRhaWxzKGRlbGV0ZWRVUkxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGRlbGV0ZWRVUkxzIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbWFwcGluZyBvZiBhIHByZWNhY2hlZCBVUkwgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FjaGUga2V5LCB0YWtpbmdcbiAgICAgKiBpbnRvIGFjY291bnQgdGhlIHJldmlzaW9uIGluZm9ybWF0aW9uIGZvciB0aGUgVVJMLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TWFwPHN0cmluZywgc3RyaW5nPn0gQSBVUkwgdG8gY2FjaGUga2V5IG1hcHBpbmcuXG4gICAgICovXG4gICAgZ2V0VVJMc1RvQ2FjaGVLZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsc1RvQ2FjaGVLZXlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgdGhlIFVSTHMgdGhhdCBoYXZlIGJlZW4gcHJlY2FjaGVkIGJ5IHRoZSBjdXJyZW50XG4gICAgICogc2VydmljZSB3b3JrZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fSBUaGUgcHJlY2FjaGVkIFVSTHMuXG4gICAgICovXG4gICAgZ2V0Q2FjaGVkVVJMcygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl91cmxzVG9DYWNoZUtleXMua2V5cygpXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FjaGUga2V5IHVzZWQgZm9yIHN0b3JpbmcgYSBnaXZlbiBVUkwuIElmIHRoYXQgVVJMIGlzXG4gICAgICogdW52ZXJzaW9uZWQsIGxpa2UgYC9pbmRleC5odG1sJywgdGhlbiB0aGUgY2FjaGUga2V5IHdpbGwgYmUgdGhlIG9yaWdpbmFsXG4gICAgICogVVJMIHdpdGggYSBzZWFyY2ggcGFyYW1ldGVyIGFwcGVuZGVkIHRvIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBBIFVSTCB3aG9zZSBjYWNoZSBrZXkgeW91IHdhbnQgdG8gbG9vayB1cC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB2ZXJzaW9uZWQgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBjYWNoZSBrZXlcbiAgICAgKiBmb3IgdGhlIG9yaWdpbmFsIFVSTCwgb3IgdW5kZWZpbmVkIGlmIHRoYXQgVVJMIGlzbid0IHByZWNhY2hlZC5cbiAgICAgKi9cbiAgICBnZXRDYWNoZUtleUZvclVSTCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmxPYmplY3QuaHJlZik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQSBjYWNoZSBrZXkgd2hvc2UgU1JJIHlvdSB3YW50IHRvIGxvb2sgdXAuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3VicmVzb3VyY2UgaW50ZWdyaXR5IGFzc29jaWF0ZWQgd2l0aCB0aGUgY2FjaGUga2V5LFxuICAgICAqIG9yIHVuZGVmaW5lZCBpZiBpdCdzIG5vdCBzZXQuXG4gICAgICovXG4gICAgZ2V0SW50ZWdyaXR5Rm9yQ2FjaGVLZXkoY2FjaGVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuZ2V0KGNhY2hlS2V5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBhY3RzIGFzIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3JcbiAgICAgKiBbYGNhY2hlLm1hdGNoKClgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUvbWF0Y2gpXG4gICAgICogd2l0aCB0aGUgZm9sbG93aW5nIGRpZmZlcmVuY2VzOlxuICAgICAqXG4gICAgICogLSBJdCBrbm93cyB3aGF0IHRoZSBuYW1lIG9mIHRoZSBwcmVjYWNoZSBpcywgYW5kIG9ubHkgY2hlY2tzIGluIHRoYXQgY2FjaGUuXG4gICAgICogLSBJdCBhbGxvd3MgeW91IHRvIHBhc3MgaW4gYW4gXCJvcmlnaW5hbFwiIFVSTCB3aXRob3V0IHZlcnNpb25pbmcgcGFyYW1ldGVycyxcbiAgICAgKiBhbmQgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGxvb2sgdXAgdGhlIGNvcnJlY3QgY2FjaGUga2V5IGZvciB0aGUgY3VycmVudGx5XG4gICAgICogYWN0aXZlIHJldmlzaW9uIG9mIHRoYXQgVVJMLlxuICAgICAqXG4gICAgICogRS5nLiwgYG1hdGNoUHJlY2FjaGUoJ2luZGV4Lmh0bWwnKWAgd2lsbCBmaW5kIHRoZSBjb3JyZWN0IHByZWNhY2hlZFxuICAgICAqIHJlc3BvbnNlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBzZXJ2aWNlIHdvcmtlciwgZXZlbiBpZiB0aGUgYWN0dWFsIGNhY2hlXG4gICAgICoga2V5IGlzIGAnL2luZGV4Lmh0bWw/X19XQl9SRVZJU0lPTl9fPTEyMzRhYmNkJ2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xSZXF1ZXN0fSByZXF1ZXN0IFRoZSBrZXkgKHdpdGhvdXQgcmV2aXNpb25pbmcgcGFyYW1ldGVycylcbiAgICAgKiB0byBsb29rIHVwIGluIHRoZSBwcmVjYWNoZS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gICAgICovXG4gICAgYXN5bmMgbWF0Y2hQcmVjYWNoZShyZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHJlcXVlc3QgaW5zdGFuY2VvZiBSZXF1ZXN0ID8gcmVxdWVzdC51cmwgOiByZXF1ZXN0O1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKTtcbiAgICAgICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4odGhpcy5zdHJhdGVneS5jYWNoZU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKGNhY2hlS2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBsb29rcyB1cCBgdXJsYCBpbiB0aGUgcHJlY2FjaGUgKHRha2luZyBpbnRvXG4gICAgICogYWNjb3VudCByZXZpc2lvbiBpbmZvcm1hdGlvbiksIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIGBSZXNwb25zZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBwcmVjYWNoZWQgVVJMIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBsb29rdXAgdGhlXG4gICAgICogYFJlc3BvbnNlYC5cbiAgICAgKiBAcmV0dXJuIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfVxuICAgICAqL1xuICAgIGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKHVybCkge1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKTtcbiAgICAgICAgaWYgKCFjYWNoZUtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm9uLXByZWNhY2hlZC11cmwnLCB7IHVybCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgICAgICAgICBvcHRpb25zLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oeyBjYWNoZUtleSB9LCBvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5oYW5kbGUob3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVDb250cm9sbGVyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogYFByZWNhY2hlRmFsbGJhY2tQbHVnaW5gIGFsbG93cyB5b3UgdG8gc3BlY2lmeSBhbiBcIm9mZmxpbmUgZmFsbGJhY2tcIlxuICogcmVzcG9uc2UgdG8gYmUgdXNlZCB3aGVuIGEgZ2l2ZW4gc3RyYXRlZ3kgaXMgdW5hYmxlIHRvIGdlbmVyYXRlIGEgcmVzcG9uc2UuXG4gKlxuICogSXQgZG9lcyB0aGlzIGJ5IGludGVyY2VwdGluZyB0aGUgYGhhbmRsZXJEaWRFcnJvcmAgcGx1Z2luIGNhbGxiYWNrXG4gKiBhbmQgcmV0dXJuaW5nIGEgcHJlY2FjaGVkIHJlc3BvbnNlLCB0YWtpbmcgdGhlIGV4cGVjdGVkIHJldmlzaW9uIHBhcmFtZXRlclxuICogaW50byBhY2NvdW50IGF1dG9tYXRpY2FsbHkuXG4gKlxuICogVW5sZXNzIHlvdSBleHBsaWNpdGx5IHBhc3MgaW4gYSBgUHJlY2FjaGVDb250cm9sbGVyYCBpbnN0YW5jZSB0byB0aGVcbiAqIGNvbnN0cnVjdG9yLCB0aGUgZGVmYXVsdCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQuIEdlbmVyYWxseSBzcGVha2luZywgbW9zdFxuICogZGV2ZWxvcGVycyB3aWxsIGVuZCB1cCB1c2luZyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmNsYXNzIFByZWNhY2hlRmFsbGJhY2tQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYSBuZXcgUHJlY2FjaGVGYWxsYmFja1BsdWdpbiB3aXRoIHRoZSBhc3NvY2lhdGVkIGZhbGxiYWNrVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZmFsbGJhY2tVUkwgQSBwcmVjYWNoZWQgVVJMIHRvIHVzZSBhcyB0aGUgZmFsbGJhY2tcbiAgICAgKiAgICAgaWYgdGhlIGFzc29jaWF0ZWQgc3RyYXRlZ3kgY2FuJ3QgZ2VuZXJhdGUgYSByZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge1ByZWNhY2hlQ29udHJvbGxlcn0gW2NvbmZpZy5wcmVjYWNoZUNvbnRyb2xsZXJdIEFuIG9wdGlvbmFsXG4gICAgICogICAgIFByZWNhY2hlQ29udHJvbGxlciBpbnN0YW5jZS4gSWYgbm90IHByb3ZpZGVkLCB0aGUgZGVmYXVsdFxuICAgICAqICAgICBQcmVjYWNoZUNvbnRyb2xsZXIgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHsgZmFsbGJhY2tVUkwsIHByZWNhY2hlQ29udHJvbGxlciwgfSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59IFRoZSBwcmVjYWNoZSByZXNwb25zZSBmb3IgdGhlIGZhbGxiYWNrIFVSTC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFuZGxlckRpZEVycm9yID0gKCkgPT4gdGhpcy5fcHJlY2FjaGVDb250cm9sbGVyLm1hdGNoUHJlY2FjaGUodGhpcy5fZmFsbGJhY2tVUkwpO1xuICAgICAgICB0aGlzLl9mYWxsYmFja1VSTCA9IGZhbGxiYWNrVVJMO1xuICAgICAgICB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIgPVxuICAgICAgICAgICAgcHJlY2FjaGVDb250cm9sbGVyIHx8IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVGYWxsYmFja1BsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9Sb3V0ZS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVVSTFZhcmlhdGlvbnMgfSBmcm9tICcuL3V0aWxzL2dlbmVyYXRlVVJMVmFyaWF0aW9ucy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGV9IHRoYXQgdGFrZXMgYVxuICoge0BsaW5rIHdvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXJ9XG4gKiBpbnN0YW5jZSBhbmQgdXNlcyBpdCB0byBtYXRjaCBpbmNvbWluZyByZXF1ZXN0cyBhbmQgaGFuZGxlIGZldGNoaW5nXG4gKiByZXNwb25zZXMgZnJvbSB0aGUgcHJlY2FjaGUuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICogQGV4dGVuZHMgd29ya2JveC1yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIFByZWNhY2hlUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQcmVjYWNoZUNvbnRyb2xsZXJ9IHByZWNhY2hlQ29udHJvbGxlciBBIGBQcmVjYWNoZUNvbnRyb2xsZXJgXG4gICAgICogaW5zdGFuY2UgdXNlZCB0byBib3RoIG1hdGNoIHJlcXVlc3RzIGFuZCByZXNwb25kIHRvIGZldGNoIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgdG8gY29udHJvbCBob3cgcmVxdWVzdHMgYXJlIG1hdGNoZWRcbiAgICAgKiBhZ2FpbnN0IHRoZSBsaXN0IG9mIHByZWNhY2hlZCBVUkxzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kaXJlY3RvcnlJbmRleD1pbmRleC5odG1sXSBUaGUgYGRpcmVjdG9yeUluZGV4YCB3aWxsXG4gICAgICogY2hlY2sgY2FjaGUgZW50cmllcyBmb3IgYSBVUkxzIGVuZGluZyB3aXRoICcvJyB0byBzZWUgaWYgdGhlcmUgaXMgYSBoaXQgd2hlblxuICAgICAqIGFwcGVuZGluZyB0aGUgYGRpcmVjdG9yeUluZGV4YCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IFtvcHRpb25zLmlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZz1bL151dG1fLywgL15mYmNsaWQkL11dIEFuXG4gICAgICogYXJyYXkgb2YgcmVnZXgncyB0byByZW1vdmUgc2VhcmNoIHBhcmFtcyB3aGVuIGxvb2tpbmcgZm9yIGEgY2FjaGUgbWF0Y2guXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jbGVhblVSTHM9dHJ1ZV0gVGhlIGBjbGVhblVSTHNgIG9wdGlvbiB3aWxsXG4gICAgICogY2hlY2sgdGhlIGNhY2hlIGZvciB0aGUgVVJMIHdpdGggYSBgLmh0bWxgIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGVuZC5cbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcHJlY2FjaGluZ351cmxNYW5pcHVsYXRpb259IFtvcHRpb25zLnVybE1hbmlwdWxhdGlvbl1cbiAgICAgKiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBzaG91bGQgdGFrZSBhIFVSTCBhbmQgcmV0dXJuIGFuIGFycmF5IG9mXG4gICAgICogYWx0ZXJuYXRpdmUgVVJMcyB0aGF0IHNob3VsZCBiZSBjaGVja2VkIGZvciBwcmVjYWNoZSBtYXRjaGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByZWNhY2hlQ29udHJvbGxlciwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBtYXRjaCA9ICh7IHJlcXVlc3QsIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybHNUb0NhY2hlS2V5cyA9IHByZWNhY2hlQ29udHJvbGxlci5nZXRVUkxzVG9DYWNoZUtleXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcG9zc2libGVVUkwgb2YgZ2VuZXJhdGVVUkxWYXJpYXRpb25zKHJlcXVlc3QudXJsLCBvcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdXJsc1RvQ2FjaGVLZXlzLmdldChwb3NzaWJsZVVSTCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVncml0eSA9IHByZWNhY2hlQ29udHJvbGxlci5nZXRJbnRlZ3JpdHlGb3JDYWNoZUtleShjYWNoZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGNhY2hlS2V5LCBpbnRlZ3JpdHkgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJlY2FjaGluZyBkaWQgbm90IGZpbmQgYSBtYXRjaCBmb3IgYCArIGdldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKG1hdGNoLCBwcmVjYWNoZUNvbnRyb2xsZXIuc3RyYXRlZ3kpO1xuICAgIH1cbn1cbmV4cG9ydCB7IFByZWNhY2hlUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNvcHlSZXNwb25zZSB9IGZyb20gJ3dvcmtib3gtY29yZS9jb3B5UmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcy9TdHJhdGVneS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l9IGltcGxlbWVudGF0aW9uXG4gKiBzcGVjaWZpY2FsbHkgZGVzaWduZWQgdG8gd29yayB3aXRoXG4gKiB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlcn1cbiAqIHRvIGJvdGggY2FjaGUgYW5kIGZldGNoIHByZWNhY2hlZCBhc3NldHMuXG4gKlxuICogTm90ZTogYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBpcyBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiBjcmVhdGluZyBhXG4gKiBgUHJlY2FjaGVDb250cm9sbGVyYDsgaXQncyBnZW5lcmFsbHkgbm90IG5lY2Vzc2FyeSB0byBjcmVhdGUgdGhpcyB5b3Vyc2VsZi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuY2xhc3MgUHJlY2FjaGVTdHJhdGVneSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiB7QGxpbmsgd29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfFBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnN8aW5pdH1cbiAgICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gVGhlXG4gICAgICoge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfENhY2hlUXVlcnlPcHRpb25zfVxuICAgICAqIGZvciBhbnkgYGNhY2hlLm1hdGNoKClgIG9yIGBjYWNoZS5wdXQoKWAgY2FsbHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvXG4gICAgICogZ2V0IHRoZSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBvcHRpb25zLmNhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrVG9OZXR3b3JrID1cbiAgICAgICAgICAgIG9wdGlvbnMuZmFsbGJhY2tUb05ldHdvcmsgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAvLyBSZWRpcmVjdGVkIHJlc3BvbnNlcyBjYW5ub3QgYmUgdXNlZCB0byBzYXRpc2Z5IGEgbmF2aWdhdGlvbiByZXF1ZXN0LCBzb1xuICAgICAgICAvLyBhbnkgcmVkaXJlY3RlZCByZXNwb25zZSBtdXN0IGJlIFwiY29waWVkXCIgcmF0aGVyIHRoYW4gY2xvbmVkLCBzbyB0aGUgbmV3XG4gICAgICAgIC8vIHJlc3BvbnNlIGRvZXNuJ3QgY29udGFpbiB0aGUgYHJlZGlyZWN0ZWRgIGZsYWcuIFNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjY5MzYzJmRlc2M9MiNjMVxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChQcmVjYWNoZVN0cmF0ZWd5LmNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYW4gYGluc3RhbGxgIGV2ZW50IGZvciBhbiBlbnRyeSB0aGF0IGlzbid0IGFscmVhZHkgY2FjaGVkLFxuICAgICAgICAvLyB0aGVuIHBvcHVsYXRlIHRoZSBjYWNoZS5cbiAgICAgICAgaWYgKGhhbmRsZXIuZXZlbnQgJiYgaGFuZGxlci5ldmVudC50eXBlID09PSAnaW5zdGFsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9oYW5kbGVJbnN0YWxsKHJlcXVlc3QsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldHRpbmcgaGVyZSBtZWFucyBzb21ldGhpbmcgd2VudCB3cm9uZy4gQW4gZW50cnkgdGhhdCBzaG91bGQgaGF2ZSBiZWVuXG4gICAgICAgIC8vIHByZWNhY2hlZCB3YXNuJ3QgZm91bmQgaW4gdGhlIGNhY2hlLlxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faGFuZGxlRmV0Y2gocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgfVxuICAgIGFzeW5jIF9oYW5kbGVGZXRjaChyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gKGhhbmRsZXIucGFyYW1zIHx8IHt9KTtcbiAgICAgICAgLy8gRmFsbCBiYWNrIHRvIHRoZSBuZXR3b3JrIGlmIHdlJ3JlIGNvbmZpZ3VyZWQgdG8gZG8gc28uXG4gICAgICAgIGlmICh0aGlzLl9mYWxsYmFja1RvTmV0d29yaykge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHByZWNhY2hlZCByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGAke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0gaW4gJHt0aGlzLmNhY2hlTmFtZX0gd2FzIG5vdCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGZvdW5kLiBGYWxsaW5nIGJhY2sgdG8gdGhlIG5ldHdvcmsuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnRlZ3JpdHlJbk1hbmlmZXN0ID0gcGFyYW1zLmludGVncml0eTtcbiAgICAgICAgICAgIGNvbnN0IGludGVncml0eUluUmVxdWVzdCA9IHJlcXVlc3QuaW50ZWdyaXR5O1xuICAgICAgICAgICAgY29uc3Qgbm9JbnRlZ3JpdHlDb25mbGljdCA9ICFpbnRlZ3JpdHlJblJlcXVlc3QgfHwgaW50ZWdyaXR5SW5SZXF1ZXN0ID09PSBpbnRlZ3JpdHlJbk1hbmlmZXN0O1xuICAgICAgICAgICAgLy8gRG8gbm90IGFkZCBpbnRlZ3JpdHkgaWYgdGhlIG9yaWdpbmFsIHJlcXVlc3QgaXMgbm8tY29yc1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMzA5NlxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoKG5ldyBSZXF1ZXN0KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBpbnRlZ3JpdHk6IHJlcXVlc3QubW9kZSAhPT0gJ25vLWNvcnMnXG4gICAgICAgICAgICAgICAgICAgID8gaW50ZWdyaXR5SW5SZXF1ZXN0IHx8IGludGVncml0eUluTWFuaWZlc3RcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyBJdCdzIG9ubHkgXCJzYWZlXCIgdG8gcmVwYWlyIHRoZSBjYWNoZSBpZiB3ZSdyZSB1c2luZyBTUkkgdG8gZ3VhcmFudGVlXG4gICAgICAgICAgICAvLyB0aGF0IHRoZSByZXNwb25zZSBtYXRjaGVzIHRoZSBwcmVjYWNoZSBtYW5pZmVzdCdzIGV4cGVjdGF0aW9ucyxcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSdzIGVpdGhlciBhKSBubyBpbnRlZ3JpdHkgcHJvcGVydHkgaW4gdGhlIGluY29taW5nIHJlcXVlc3RcbiAgICAgICAgICAgIC8vIG9yIGIpIHRoZXJlIGlzIGFuIGludGVncml0eSwgYW5kIGl0IG1hdGNoZXMgdGhlIHByZWNhY2hlIG1hbmlmZXN0LlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjg1OFxuICAgICAgICAgICAgLy8gQWxzbyBpZiB0aGUgb3JpZ2luYWwgcmVxdWVzdCB1c2VycyBuby1jb3JzIHdlIGRvbid0IHVzZSBpbnRlZ3JpdHkuXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8zMDk2XG4gICAgICAgICAgICBpZiAoaW50ZWdyaXR5SW5NYW5pZmVzdCAmJlxuICAgICAgICAgICAgICAgIG5vSW50ZWdyaXR5Q29uZmxpY3QgJiZcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm1vZGUgIT09ICduby1jb3JzJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VzZURlZmF1bHRDYWNoZWFiaWxpdHlQbHVnaW5JZk5lZWRlZCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhc0NhY2hlZCA9IGF3YWl0IGhhbmRsZXIuY2FjaGVQdXQocmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhc0NhY2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgQSByZXNwb25zZSBmb3IgJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB3YXMgdXNlZCB0byBcInJlcGFpclwiIHRoZSBwcmVjYWNoZS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkbid0IG5vcm1hbGx5IGhhcHBlbiwgYnV0IHRoZXJlIGFyZSBlZGdlIGNhc2VzOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNDQxXG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtaXNzaW5nLXByZWNhY2hlLWVudHJ5Jywge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5jYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0LnVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IHBhcmFtcy5jYWNoZUtleSB8fCAoYXdhaXQgaGFuZGxlci5nZXRDYWNoZUtleShyZXF1ZXN0LCAncmVhZCcpKTtcbiAgICAgICAgICAgIC8vIFdvcmtib3ggaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgIC8vIHByaW50IHRoZSByb3V0aW5nIGRldGFpbHMgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFByZWNhY2hpbmcgaXMgcmVzcG9uZGluZyB0bzogYCArIGdldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKSk7XG4gICAgICAgICAgICBsb2dnZXIubG9nKGBTZXJ2aW5nIHRoZSBwcmVjYWNoZWQgdXJsOiAke2dldEZyaWVuZGx5VVJMKGNhY2hlS2V5IGluc3RhbmNlb2YgUmVxdWVzdCA/IGNhY2hlS2V5LnVybCA6IGNhY2hlS2V5KX1gKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXF1ZXN0IGRldGFpbHMgaGVyZS5gKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2cocmVxdWVzdCk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXNwb25zZSBkZXRhaWxzIGhlcmUuYCk7XG4gICAgICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBfaGFuZGxlSW5zdGFsbChyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3VzZURlZmF1bHRDYWNoZWFiaWxpdHlQbHVnaW5JZk5lZWRlZCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2gocmVxdWVzdCk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkZWZlciBjYWNoZVB1dCgpIHVudGlsIGFmdGVyIHdlIGtub3cgdGhlIHJlc3BvbnNlXG4gICAgICAgIC8vIHNob3VsZCBiZSBjYWNoZWQ7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI3MzdcbiAgICAgICAgY29uc3Qgd2FzQ2FjaGVkID0gYXdhaXQgaGFuZGxlci5jYWNoZVB1dChyZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgaWYgKCF3YXNDYWNoZWQpIHtcbiAgICAgICAgICAgIC8vIFRocm93aW5nIGhlcmUgd2lsbCBsZWFkIHRvIHRoZSBgaW5zdGFsbGAgaGFuZGxlciBmYWlsaW5nLCB3aGljaFxuICAgICAgICAgICAgLy8gd2Ugd2FudCB0byBkbyBpZiAqYW55KiBvZiB0aGUgcmVzcG9uc2VzIGFyZW4ndCBzYWZlIHRvIGNhY2hlLlxuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYmFkLXByZWNhY2hpbmctcmVzcG9uc2UnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0LnVybCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY29tcGxleCwgYXMgdGhlcmUgYSBudW1iZXIgb2YgdGhpbmdzIHRvIGFjY291bnQgZm9yOlxuICAgICAqXG4gICAgICogVGhlIGBwbHVnaW5zYCBhcnJheSBjYW4gYmUgc2V0IGF0IGNvbnN0cnVjdGlvbiwgYW5kL29yIGl0IG1pZ2h0IGJlIGFkZGVkIHRvXG4gICAgICogdG8gYXQgYW55IHRpbWUgYmVmb3JlIHRoZSBzdHJhdGVneSBpcyB1c2VkLlxuICAgICAqXG4gICAgICogQXQgdGhlIHRpbWUgdGhlIHN0cmF0ZWd5IGlzIHVzZWQgKGkuZS4gZHVyaW5nIGFuIGBpbnN0YWxsYCBldmVudCksIHRoZXJlXG4gICAgICogbmVlZHMgdG8gYmUgYXQgbGVhc3Qgb25lIHBsdWdpbiB0aGF0IGltcGxlbWVudHMgYGNhY2hlV2lsbFVwZGF0ZWAgaW4gdGhlXG4gICAgICogYXJyYXksIG90aGVyIHRoYW4gYGNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luYC5cbiAgICAgKlxuICAgICAqIC0gSWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGFuZCB0aGVyZSBhcmUgbm8gc3VpdGFibGUgYGNhY2hlV2lsbFVwZGF0ZWBcbiAgICAgKiBwbHVnaW5zLCB3ZSBuZWVkIHRvIGFkZCBgZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luYC5cbiAgICAgKlxuICAgICAqIC0gSWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGFuZCB0aGVyZSBpcyBleGFjdGx5IG9uZSBgY2FjaGVXaWxsVXBkYXRlYCwgdGhlblxuICAgICAqIHdlIGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcgKHRoaXMgbWlnaHQgYmUgYSBwcmV2aW91c2x5IGFkZGVkXG4gICAgICogYGRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbmAsIG9yIGl0IG1pZ2h0IGJlIGEgY3VzdG9tIHBsdWdpbikuXG4gICAgICpcbiAgICAgKiAtIElmIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhbmQgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBgY2FjaGVXaWxsVXBkYXRlYCxcbiAgICAgKiB0aGVuIHdlIG5lZWQgdG8gY2hlY2sgaWYgb25lIGlzIGBkZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW5gLiBJZiBzbyxcbiAgICAgKiB3ZSBuZWVkIHRvIHJlbW92ZSBpdC4gKFRoaXMgc2l0dWF0aW9uIGlzIHVubGlrZWx5LCBidXQgaXQgY291bGQgaGFwcGVuIGlmXG4gICAgICogdGhlIHN0cmF0ZWd5IGlzIHVzZWQgbXVsdGlwbGUgdGltZXMsIHRoZSBmaXJzdCB3aXRob3V0IGEgYGNhY2hlV2lsbFVwZGF0ZWAsXG4gICAgICogYW5kIHRoZW4gbGF0ZXIgb24gYWZ0ZXIgbWFudWFsbHkgYWRkaW5nIGEgY3VzdG9tIGBjYWNoZVdpbGxVcGRhdGVgLilcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI3MzcgZm9yIG1vcmUgY29udGV4dC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3VzZURlZmF1bHRDYWNoZWFiaWxpdHlQbHVnaW5JZk5lZWRlZCgpIHtcbiAgICAgICAgbGV0IGRlZmF1bHRQbHVnaW5JbmRleCA9IG51bGw7XG4gICAgICAgIGxldCBjYWNoZVdpbGxVcGRhdGVQbHVnaW5Db3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBwbHVnaW5dIG9mIHRoaXMucGx1Z2lucy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSB0aGUgY29weSByZWRpcmVjdGVkIHBsdWdpbiB3aGVuIGRldGVybWluaW5nIHdoYXQgdG8gZG8uXG4gICAgICAgICAgICBpZiAocGx1Z2luID09PSBQcmVjYWNoZVN0cmF0ZWd5LmNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBkZWZhdWx0IHBsdWdpbidzIGluZGV4LCBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlbW92ZWQuXG4gICAgICAgICAgICBpZiAocGx1Z2luID09PSBQcmVjYWNoZVN0cmF0ZWd5LmRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbikge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRQbHVnaW5JbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsdWdpbi5jYWNoZVdpbGxVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjYWNoZVdpbGxVcGRhdGVQbHVnaW5Db3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWNoZVdpbGxVcGRhdGVQbHVnaW5Db3VudCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5zLnB1c2goUHJlY2FjaGVTdHJhdGVneS5kZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50ID4gMSAmJiBkZWZhdWx0UGx1Z2luSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVtb3ZlIHRoZSBkZWZhdWx0IHBsdWdpbjsgbXVsdGlwbGUgY3VzdG9tIHBsdWdpbnMgYXJlIGFsbG93ZWQuXG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMuc3BsaWNlKGRlZmF1bHRQbHVnaW5JbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90aGluZyBuZWVkcyB0byBiZSBkb25lIGlmIGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50IGlzIDFcbiAgICB9XG59XG5QcmVjYWNoZVN0cmF0ZWd5LmRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbiA9IHtcbiAgICBhc3luYyBjYWNoZVdpbGxVcGRhdGUoeyByZXNwb25zZSB9KSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0sXG59O1xuUHJlY2FjaGVTdHJhdGVneS5jb3B5UmVkaXJlY3RlZENhY2hlYWJsZVJlc3BvbnNlc1BsdWdpbiA9IHtcbiAgICBhc3luYyBjYWNoZVdpbGxVcGRhdGUoeyByZXNwb25zZSB9KSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5yZWRpcmVjdGVkID8gYXdhaXQgY29weVJlc3BvbnNlKHJlc3BvbnNlKSA6IHJlc3BvbnNlO1xuICAgIH0sXG59O1xuZXhwb3J0IHsgUHJlY2FjaGVTdHJhdGVneSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8vICogKiAqIElNUE9SVEFOVCEgKiAqICpcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIGpkc29jIHR5cGUgZGVmaW5pdGlvbnMgY2Fubm90IGJlIGRlY2xhcmVkIGFib3ZlIFR5cGVTY3JpcHQgZGVmaW5pdGlvbnMgb3Jcbi8vIHRoZXknbGwgYmUgc3RyaXBwZWQgZnJvbSB0aGUgYnVpbHQgYC5qc2AgZmlsZXMsIGFuZCB0aGV5J2xsIG9ubHkgYmUgaW4gdGhlXG4vLyBgZC50c2AgZmlsZXMsIHdoaWNoIGFyZW4ndCByZWFkIGJ5IHRoZSBqc2RvYyBnZW5lcmF0b3IuIEFzIGEgcmVzdWx0IHdlXG4vLyBoYXZlIHRvIHB1dCBkZWNsYXJlIHRoZW0gYmVsb3cuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEluc3RhbGxSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gdXBkYXRlZFVSTHMgTGlzdCBvZiBVUkxzIHRoYXQgd2VyZSB1cGRhdGVkIGR1cmluZ1xuICogaW5zdGFsbGF0aW9uLlxuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBub3RVcGRhdGVkVVJMcyBMaXN0IG9mIFVSTHMgdGhhdCB3ZXJlIGFscmVhZHkgdXAgdG9cbiAqIGRhdGUuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENsZWFudXBSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gZGVsZXRlZENhY2hlUmVxdWVzdHMgTGlzdCBvZiBVUkxzIHRoYXQgd2VyZSBkZWxldGVkXG4gKiB3aGlsZSBjbGVhbmluZyB1cCB0aGUgY2FjaGUuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFByZWNhY2hlRW50cnlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmwgVVJMIHRvIHByZWNhY2hlLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtyZXZpc2lvbl0gUmV2aXNpb24gaW5mb3JtYXRpb24gZm9yIHRoZSBVUkwuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2ludGVncml0eV0gSW50ZWdyaXR5IG1ldGFkYXRhIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW5cbiAqIG1ha2luZyB0aGUgbmV0d29yayByZXF1ZXN0IGZvciB0aGUgVVJMLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuLyoqXG4gKiBUaGUgXCJ1cmxNYW5pcHVsYXRpb25cIiBjYWxsYmFjayBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlcmUgYXJlIGFueVxuICogYWRkaXRpb25hbCBwZXJtdXRhdGlvbnMgb2YgYSBVUkwgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjaGVjayBhZ2FpbnN0XG4gKiB0aGUgYXZhaWxhYmxlIHByZWNhY2hlZCBmaWxlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgV29ya2JveCBzdXBwb3J0cyBjaGVja2luZyBmb3IgJy9pbmRleC5odG1sJyB3aGVuIHRoZSBVUkxcbiAqICcvJyBpcyBwcm92aWRlZC4gVGhpcyBjYWxsYmFjayBhbGxvd3MgYWRkaXRpb25hbCwgY3VzdG9tIGNoZWNrcy5cbiAqXG4gKiBAY2FsbGJhY2sgfnVybE1hbmlwdWxhdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAqIEBwYXJhbSB7VVJMfSBjb250ZXh0LnVybCBUaGUgcmVxdWVzdCdzIFVSTC5cbiAqIEByZXR1cm4ge0FycmF5PFVSTD59IFRvIGFkZCBhZGRpdGlvbmFsIHVybHMgdG8gdGVzdCwgcmV0dXJuIGFuIEFycmF5IG9mXG4gKiBVUkxzLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZXNlICoqc2hvdWxkIG5vdCBiZSBzdHJpbmdzKiosIGJ1dCBVUkwgb2JqZWN0cy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OnByZWNhY2hpbmc6Ny4wLjAnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBwbHVnaW5zIHRvIHRoZSBwcmVjYWNoaW5nIHN0cmF0ZWd5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gcGx1Z2luc1xuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gYWRkUGx1Z2lucyhwbHVnaW5zKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICBwcmVjYWNoZUNvbnRyb2xsZXIuc3RyYXRlZ3kucGx1Z2lucy5wdXNoKC4uLnBsdWdpbnMpO1xufVxuZXhwb3J0IHsgYWRkUGx1Z2lucyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHJlZ2lzdGVyUm91dGUgfSBmcm9tICd3b3JrYm94LXJvdXRpbmcvcmVnaXN0ZXJSb3V0ZS5qcyc7XG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgUHJlY2FjaGVSb3V0ZSB9IGZyb20gJy4vUHJlY2FjaGVSb3V0ZS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGQgYSBgZmV0Y2hgIGxpc3RlbmVyIHRvIHRoZSBzZXJ2aWNlIHdvcmtlciB0aGF0IHdpbGxcbiAqIHJlc3BvbmQgdG9cbiAqIFtuZXR3b3JrIHJlcXVlc3RzXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZV9Xb3JrZXJfQVBJL1VzaW5nX1NlcnZpY2VfV29ya2VycyNDdXN0b21fcmVzcG9uc2VzX3RvX3JlcXVlc3RzfVxuICogd2l0aCBwcmVjYWNoZWQgYXNzZXRzLlxuICpcbiAqIFJlcXVlc3RzIGZvciBhc3NldHMgdGhhdCBhcmVuJ3QgcHJlY2FjaGVkLCB0aGUgYEZldGNoRXZlbnRgIHdpbGwgbm90IGJlXG4gKiByZXNwb25kZWQgdG8sIGFsbG93aW5nIHRoZSBldmVudCB0byBmYWxsIHRocm91Z2ggdG8gb3RoZXIgYGZldGNoYCBldmVudFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gU2VlIHRoZSB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlUm91dGV9XG4gKiBvcHRpb25zLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gYWRkUm91dGUob3B0aW9ucykge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgY29uc3QgcHJlY2FjaGVSb3V0ZSA9IG5ldyBQcmVjYWNoZVJvdXRlKHByZWNhY2hlQ29udHJvbGxlciwgb3B0aW9ucyk7XG4gICAgcmVnaXN0ZXJSb3V0ZShwcmVjYWNoZVJvdXRlKTtcbn1cbmV4cG9ydCB7IGFkZFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBkZWxldGVPdXRkYXRlZENhY2hlcyB9IGZyb20gJy4vdXRpbHMvZGVsZXRlT3V0ZGF0ZWRDYWNoZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBhbiBgYWN0aXZhdGVgIGV2ZW50IGxpc3RlbmVyIHdoaWNoIHdpbGwgY2xlYW4gdXAgaW5jb21wYXRpYmxlXG4gKiBwcmVjYWNoZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgb2xkZXIgdmVyc2lvbnMgb2YgV29ya2JveC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGNsZWFudXBPdXRkYXRlZENhY2hlcygpIHtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsICgoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoKTtcbiAgICAgICAgZXZlbnQud2FpdFVudGlsKGRlbGV0ZU91dGRhdGVkQ2FjaGVzKGNhY2hlTmFtZSkudGhlbigoY2FjaGVzRGVsZXRlZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVzRGVsZXRlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFRoZSBmb2xsb3dpbmcgb3V0LW9mLWRhdGUgcHJlY2FjaGVzIHdlcmUgY2xlYW5lZCB1cCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhdXRvbWF0aWNhbGx5OmAsIGNhY2hlc0RlbGV0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH0pKTtcbn1cbmV4cG9ydCB7IGNsZWFudXBPdXRkYXRlZENhY2hlcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNhbGxzXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI2NyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMfSBvbiB0aGUgZGVmYXVsdFxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0gaW5zdGFuY2UuXG4gKlxuICogSWYgeW91IGFyZSBjcmVhdGluZyB5b3VyIG93biB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSwgdGhlbiBjYWxsIHRoZVxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNjcmVhdGVIYW5kbGVyQm91bmRUb1VSTH0gb24gdGhhdCBpbnN0YW5jZSxcbiAqIGluc3RlYWQgb2YgdXNpbmcgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBwcmVjYWNoZWQgVVJMIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBsb29rdXAgdGhlXG4gKiBgUmVzcG9uc2VgLlxuICogQHBhcmFtIHtib29sZWFufSBbZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvIGdldCB0aGVcbiAqIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsgaWYgdGhlcmUncyBhIHByZWNhY2hlIG1pc3MuXG4gKiBAcmV0dXJuIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfVxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwodXJsKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLmNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKHVybCk7XG59XG5leHBvcnQgeyBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRha2VzIGluIGEgVVJMLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBVUkwgdGhhdCBjb3VsZCBiZSB1c2VkIHRvXG4gKiBsb29rdXAgdGhlIGVudHJ5IGluIHRoZSBwcmVjYWNoZS5cbiAqXG4gKiBJZiBhIHJlbGF0aXZlIFVSTCBpcyBwcm92aWRlZCwgdGhlIGxvY2F0aW9uIG9mIHRoZSBzZXJ2aWNlIHdvcmtlciBmaWxlIHdpbGxcbiAqIGJlIHVzZWQgYXMgdGhlIGJhc2UuXG4gKlxuICogRm9yIHByZWNhY2hlZCBlbnRyaWVzIHdpdGhvdXQgcmV2aXNpb24gaW5mb3JtYXRpb24sIHRoZSBjYWNoZSBrZXkgd2lsbCBiZSB0aGVcbiAqIHNhbWUgYXMgdGhlIG9yaWdpbmFsIFVSTC5cbiAqXG4gKiBGb3IgcHJlY2FjaGVkIGVudHJpZXMgd2l0aCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZVxuICogb3JpZ2luYWwgVVJMIHdpdGggdGhlIGFkZGl0aW9uIG9mIGEgcXVlcnkgcGFyYW1ldGVyIHVzZWQgZm9yIGtlZXBpbmcgdHJhY2sgb2ZcbiAqIHRoZSByZXZpc2lvbiBpbmZvLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB3aG9zZSBjYWNoZSBrZXkgdG8gbG9vayB1cC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNhY2hlIGtleSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoYXQgVVJMLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLmdldENhY2hlS2V5Rm9yVVJMKHVybCk7XG59XG5leHBvcnQgeyBnZXRDYWNoZUtleUZvclVSTCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYWRkUGx1Z2lucyB9IGZyb20gJy4vYWRkUGx1Z2lucy5qcyc7XG5pbXBvcnQgeyBhZGRSb3V0ZSB9IGZyb20gJy4vYWRkUm91dGUuanMnO1xuaW1wb3J0IHsgY2xlYW51cE91dGRhdGVkQ2FjaGVzIH0gZnJvbSAnLi9jbGVhbnVwT3V0ZGF0ZWRDYWNoZXMuanMnO1xuaW1wb3J0IHsgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwgfSBmcm9tICcuL2NyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMLmpzJztcbmltcG9ydCB7IGdldENhY2hlS2V5Rm9yVVJMIH0gZnJvbSAnLi9nZXRDYWNoZUtleUZvclVSTC5qcyc7XG5pbXBvcnQgeyBtYXRjaFByZWNhY2hlIH0gZnJvbSAnLi9tYXRjaFByZWNhY2hlLmpzJztcbmltcG9ydCB7IHByZWNhY2hlIH0gZnJvbSAnLi9wcmVjYWNoZS5qcyc7XG5pbXBvcnQgeyBwcmVjYWNoZUFuZFJvdXRlIH0gZnJvbSAnLi9wcmVjYWNoZUFuZFJvdXRlLmpzJztcbmltcG9ydCB7IFByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IFByZWNhY2hlUm91dGUgfSBmcm9tICcuL1ByZWNhY2hlUm91dGUuanMnO1xuaW1wb3J0IHsgUHJlY2FjaGVTdHJhdGVneSB9IGZyb20gJy4vUHJlY2FjaGVTdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZUZhbGxiYWNrUGx1Z2luIH0gZnJvbSAnLi9QcmVjYWNoZUZhbGxiYWNrUGx1Z2luLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIE1vc3QgY29uc3VtZXJzIG9mIHRoaXMgbW9kdWxlIHdpbGwgd2FudCB0byB1c2UgdGhlXG4gKiB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGV9XG4gKiBtZXRob2QgdG8gYWRkIGFzc2V0cyB0byB0aGUgY2FjaGUgYW5kIHJlc3BvbmQgdG8gbmV0d29yayByZXF1ZXN0cyB3aXRoIHRoZXNlXG4gKiBjYWNoZWQgYXNzZXRzLlxuICpcbiAqIElmIHlvdSByZXF1aXJlIG1vcmUgY29udHJvbCBvdmVyIGNhY2hpbmcgYW5kIHJvdXRpbmcsIHlvdSBjYW4gdXNlIHRoZVxuICoge0BsaW5rIHdvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXJ9XG4gKiBpbnRlcmZhY2UuXG4gKlxuICogQG1vZHVsZSB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IHsgYWRkUGx1Z2lucywgYWRkUm91dGUsIGNsZWFudXBPdXRkYXRlZENhY2hlcywgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwsIGdldENhY2hlS2V5Rm9yVVJMLCBtYXRjaFByZWNhY2hlLCBwcmVjYWNoZSwgcHJlY2FjaGVBbmRSb3V0ZSwgUHJlY2FjaGVDb250cm9sbGVyLCBQcmVjYWNoZVJvdXRlLCBQcmVjYWNoZVN0cmF0ZWd5LCBQcmVjYWNoZUZhbGxiYWNrUGx1Z2luLCB9O1xuZXhwb3J0ICogZnJvbSAnLi9fdHlwZXMuanMnO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNhbGxzXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI21hdGNoUHJlY2FjaGV9IG9uIHRoZSBkZWZhdWx0XG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSBpbnN0YW5jZS5cbiAqXG4gKiBJZiB5b3UgYXJlIGNyZWF0aW5nIHlvdXIgb3duIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9LCB0aGVuIGNhbGxcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjbWF0Y2hQcmVjYWNoZX0gb24gdGhhdCBpbnN0YW5jZSxcbiAqIGluc3RlYWQgb2YgdXNpbmcgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xSZXF1ZXN0fSByZXF1ZXN0IFRoZSBrZXkgKHdpdGhvdXQgcmV2aXNpb25pbmcgcGFyYW1ldGVycylcbiAqIHRvIGxvb2sgdXAgaW4gdGhlIHByZWNhY2hlLlxuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gbWF0Y2hQcmVjYWNoZShyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLm1hdGNoUHJlY2FjaGUocmVxdWVzdCk7XG59XG5leHBvcnQgeyBtYXRjaFByZWNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZXMgYW5kXG4gKiBzdG9yZXMgdGhlIGZpbGVzIGluIHRoZVxuICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfFwicHJlY2FjaGUgY2FjaGVcIn0gd2hlbiB0aGUgc2VydmljZVxuICogd29ya2VyIGluc3RhbGxzLlxuICpcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogUGxlYXNlIG5vdGU6IFRoaXMgbWV0aG9kICoqd2lsbCBub3QqKiBzZXJ2ZSBhbnkgb2YgdGhlIGNhY2hlZCBmaWxlcyBmb3IgeW91LlxuICogSXQgb25seSBwcmVjYWNoZXMgZmlsZXMuIFRvIHJlc3BvbmQgdG8gYSBuZXR3b3JrIHJlcXVlc3QgeW91IGNhbGxcbiAqIHtAbGluayB3b3JrYm94LXByZWNhY2hpbmcuYWRkUm91dGV9LlxuICpcbiAqIElmIHlvdSBoYXZlIGEgc2luZ2xlIGFycmF5IG9mIGZpbGVzIHRvIHByZWNhY2hlLCB5b3UgY2FuIGp1c3QgY2FsbFxuICoge0BsaW5rIHdvcmtib3gtcHJlY2FjaGluZy5wcmVjYWNoZUFuZFJvdXRlfS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBbZW50cmllcz1bXV0gQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIHByZWNhY2hlKGVudHJpZXMpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHByZWNhY2hlQ29udHJvbGxlci5wcmVjYWNoZShlbnRyaWVzKTtcbn1cbmV4cG9ydCB7IHByZWNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhZGRSb3V0ZSB9IGZyb20gJy4vYWRkUm91dGUuanMnO1xuaW1wb3J0IHsgcHJlY2FjaGUgfSBmcm9tICcuL3ByZWNhY2hlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgYWRkIGVudHJpZXMgdG8gdGhlIHByZWNhY2hlIGxpc3QgYW5kIGFkZCBhIHJvdXRlIHRvXG4gKiByZXNwb25kIHRvIGZldGNoIGV2ZW50cy5cbiAqXG4gKiBUaGlzIGlzIGEgY29udmVuaWVuY2UgbWV0aG9kIHRoYXQgd2lsbCBjYWxsXG4gKiB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLnByZWNhY2hlfSBhbmRcbiAqIHtAbGluayB3b3JrYm94LXByZWNhY2hpbmcuYWRkUm91dGV9IGluIGEgc2luZ2xlIGNhbGwuXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3R8c3RyaW5nPn0gZW50cmllcyBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBTZWUgdGhlXG4gKiB7QGxpbmsgd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlUm91dGV9IG9wdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBwcmVjYWNoZUFuZFJvdXRlKGVudHJpZXMsIG9wdGlvbnMpIHtcbiAgICBwcmVjYWNoZShlbnRyaWVzKTtcbiAgICBhZGRSb3V0ZShvcHRpb25zKTtcbn1cbmV4cG9ydCB7IHByZWNhY2hlQW5kUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHBsdWdpbiwgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIFByZWNhY2hlQ29udHJvbGxlciwgdG8gdHJhbnNsYXRlIFVSTHMgaW50b1xuICogdGhlIGNvcnJlc3BvbmRpbmcgY2FjaGUga2V5LCBiYXNlZCBvbiB0aGUgY3VycmVudCByZXZpc2lvbiBpbmZvLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFByZWNhY2hlQ2FjaGVLZXlQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKHsgcHJlY2FjaGVDb250cm9sbGVyIH0pIHtcbiAgICAgICAgdGhpcy5jYWNoZUtleVdpbGxCZVVzZWQgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMsIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFBhcmFtcyBpcyB0eXBlIGFueSwgY2FuJ3QgY2hhbmdlIHJpZ2h0IG5vdy5cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY2FjaGVLZXkpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlY2FjaGVDb250cm9sbGVyLmdldENhY2hlS2V5Rm9yVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgICAgIHJldHVybiBjYWNoZUtleVxuICAgICAgICAgICAgICAgID8gbmV3IFJlcXVlc3QoY2FjaGVLZXksIHsgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgOiByZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIgPSBwcmVjYWNoZUNvbnRyb2xsZXI7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVDYWNoZUtleVBsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgcGx1Z2luLCBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggUHJlY2FjaGVDb250cm9sbGVyLCB0byBkZXRlcm1pbmUgdGhlXG4gKiBvZiBhc3NldHMgdGhhdCB3ZXJlIHVwZGF0ZWQgKG9yIG5vdCB1cGRhdGVkKSBkdXJpbmcgdGhlIGluc3RhbGwgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkVVJMcyA9IFtdO1xuICAgICAgICB0aGlzLm5vdFVwZGF0ZWRVUkxzID0gW107XG4gICAgICAgIHRoaXMuaGFuZGxlcldpbGxTdGFydCA9IGFzeW5jICh7IHJlcXVlc3QsIHN0YXRlLCB9KSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBgc3RhdGVgIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWQuLi5cbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLm9yaWdpbmFsUmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkID0gYXN5bmMgKHsgZXZlbnQsIHN0YXRlLCBjYWNoZWRSZXNwb25zZSwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnN0YWxsJykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmlnaW5hbFJlcXVlc3QgJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JpZ2luYWxSZXF1ZXN0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBgc3RhdGVgIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWQuLi5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gc3RhdGUub3JpZ2luYWxSZXF1ZXN0LnVybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdFVwZGF0ZWRVUkxzLnB1c2godXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlZFVSTHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCB7IFByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8vIE5hbWUgb2YgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgdXNlZCB0byBzdG9yZSByZXZpc2lvbiBpbmZvLlxuY29uc3QgUkVWSVNJT05fU0VBUkNIX1BBUkFNID0gJ19fV0JfUkVWSVNJT05fXyc7XG4vKipcbiAqIENvbnZlcnRzIGEgbWFuaWZlc3QgZW50cnkgaW50byBhIHZlcnNpb25lZCBVUkwgc3VpdGFibGUgZm9yIHByZWNhY2hpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBlbnRyeVxuICogQHJldHVybiB7c3RyaW5nfSBBIFVSTCB3aXRoIHZlcnNpb25pbmcgaW5mby5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FjaGVLZXkoZW50cnkpIHtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZScsIHsgZW50cnkgfSk7XG4gICAgfVxuICAgIC8vIElmIGEgcHJlY2FjaGUgbWFuaWZlc3QgZW50cnkgaXMgYSBzdHJpbmcsIGl0J3MgYXNzdW1lZCB0byBiZSBhIHZlcnNpb25lZFxuICAgIC8vIFVSTCwgbGlrZSAnL2FwcC5hYmNkMTIzNC5qcycuIFJldHVybiBhcy1pcy5cbiAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKGVudHJ5LCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhY2hlS2V5OiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgICAgIHVybDogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgcmV2aXNpb24sIHVybCB9ID0gZW50cnk7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYWRkLXRvLWNhY2hlLWxpc3QtdW5leHBlY3RlZC10eXBlJywgeyBlbnRyeSB9KTtcbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBqdXN0IGEgVVJMIGFuZCBubyByZXZpc2lvbiwgdGhlbiBpdCdzIGFsc28gYXNzdW1lZCB0byBiZSBhXG4gICAgLy8gdmVyc2lvbmVkIFVSTC5cbiAgICBpZiAoIXJldmlzaW9uKSB7XG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhY2hlS2V5OiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgICAgIHVybDogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgY29uc3RydWN0IGEgcHJvcGVybHkgdmVyc2lvbmVkIFVSTCB1c2luZyB0aGUgY3VzdG9tIFdvcmtib3hcbiAgICAvLyBzZWFyY2ggcGFyYW1ldGVyIGFsb25nIHdpdGggdGhlIHJldmlzaW9uIGluZm8uXG4gICAgY29uc3QgY2FjaGVLZXlVUkwgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgY29uc3Qgb3JpZ2luYWxVUkwgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgY2FjaGVLZXlVUkwuc2VhcmNoUGFyYW1zLnNldChSRVZJU0lPTl9TRUFSQ0hfUEFSQU0sIHJldmlzaW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjYWNoZUtleTogY2FjaGVLZXlVUkwuaHJlZixcbiAgICAgICAgdXJsOiBvcmlnaW5hbFVSTC5ocmVmLFxuICAgIH07XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IFNVQlNUUklOR19UT19GSU5EID0gJy1wcmVjYWNoZS0nO1xuLyoqXG4gKiBDbGVhbnMgdXAgaW5jb21wYXRpYmxlIHByZWNhY2hlcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBvbGRlciB2ZXJzaW9ucyBvZlxuICogV29ya2JveCwgYnkgYSBzZXJ2aWNlIHdvcmtlciByZWdpc3RlcmVkIHVuZGVyIHRoZSBjdXJyZW50IHNjb3BlLlxuICpcbiAqIFRoaXMgaXMgbWVhbnQgdG8gYmUgY2FsbGVkIGFzIHBhcnQgb2YgdGhlIGBhY3RpdmF0ZWAgZXZlbnQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgc2FmZSB0byB1c2UgYXMgbG9uZyBhcyB5b3UgZG9uJ3QgaW5jbHVkZSBgc3Vic3RyaW5nVG9GaW5kYFxuICogKGRlZmF1bHRpbmcgdG8gYC1wcmVjYWNoZS1gKSBpbiB5b3VyIG5vbi1wcmVjYWNoZSBjYWNoZSBuYW1lcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudFByZWNhY2hlTmFtZSBUaGUgY2FjaGUgbmFtZSBjdXJyZW50bHkgaW4gdXNlIGZvclxuICogcHJlY2FjaGluZy4gVGhpcyBjYWNoZSB3b24ndCBiZSBkZWxldGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFtzdWJzdHJpbmdUb0ZpbmQ9Jy1wcmVjYWNoZS0nXSBDYWNoZSBuYW1lcyB3aGljaCBpbmNsdWRlIHRoaXNcbiAqIHN1YnN0cmluZyB3aWxsIGJlIGRlbGV0ZWQgKGV4Y2x1ZGluZyBgY3VycmVudFByZWNhY2hlTmFtZWApLlxuICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gQSBsaXN0IG9mIGFsbCB0aGUgY2FjaGUgbmFtZXMgdGhhdCB3ZXJlIGRlbGV0ZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuY29uc3QgZGVsZXRlT3V0ZGF0ZWRDYWNoZXMgPSBhc3luYyAoY3VycmVudFByZWNhY2hlTmFtZSwgc3Vic3RyaW5nVG9GaW5kID0gU1VCU1RSSU5HX1RPX0ZJTkQpID0+IHtcbiAgICBjb25zdCBjYWNoZU5hbWVzID0gYXdhaXQgc2VsZi5jYWNoZXMua2V5cygpO1xuICAgIGNvbnN0IGNhY2hlTmFtZXNUb0RlbGV0ZSA9IGNhY2hlTmFtZXMuZmlsdGVyKChjYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIChjYWNoZU5hbWUuaW5jbHVkZXMoc3Vic3RyaW5nVG9GaW5kKSAmJlxuICAgICAgICAgICAgY2FjaGVOYW1lLmluY2x1ZGVzKHNlbGYucmVnaXN0cmF0aW9uLnNjb3BlKSAmJlxuICAgICAgICAgICAgY2FjaGVOYW1lICE9PSBjdXJyZW50UHJlY2FjaGVOYW1lKTtcbiAgICB9KTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChjYWNoZU5hbWVzVG9EZWxldGUubWFwKChjYWNoZU5hbWUpID0+IHNlbGYuY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpKSk7XG4gICAgcmV0dXJuIGNhY2hlTmFtZXNUb0RlbGV0ZTtcbn07XG5leHBvcnQgeyBkZWxldGVPdXRkYXRlZENhY2hlcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogR2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgeWllbGRzIHBvc3NpYmxlIHZhcmlhdGlvbnMgb24gdGhlIG9yaWdpbmFsIFVSTCB0b1xuICogY2hlY2ssIG9uZSBhdCBhIHRpbWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24qIGdlbmVyYXRlVVJMVmFyaWF0aW9ucyh1cmwsIHsgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nID0gWy9edXRtXy8sIC9eZmJjbGlkJC9dLCBkaXJlY3RvcnlJbmRleCA9ICdpbmRleC5odG1sJywgY2xlYW5VUkxzID0gdHJ1ZSwgdXJsTWFuaXB1bGF0aW9uLCB9ID0ge30pIHtcbiAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgdXJsT2JqZWN0Lmhhc2ggPSAnJztcbiAgICB5aWVsZCB1cmxPYmplY3QuaHJlZjtcbiAgICBjb25zdCB1cmxXaXRob3V0SWdub3JlZFBhcmFtcyA9IHJlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXModXJsT2JqZWN0LCBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcpO1xuICAgIHlpZWxkIHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLmhyZWY7XG4gICAgaWYgKGRpcmVjdG9yeUluZGV4ICYmIHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLnBhdGhuYW1lLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5VVJMID0gbmV3IFVSTCh1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5ocmVmKTtcbiAgICAgICAgZGlyZWN0b3J5VVJMLnBhdGhuYW1lICs9IGRpcmVjdG9yeUluZGV4O1xuICAgICAgICB5aWVsZCBkaXJlY3RvcnlVUkwuaHJlZjtcbiAgICB9XG4gICAgaWYgKGNsZWFuVVJMcykge1xuICAgICAgICBjb25zdCBjbGVhblVSTCA9IG5ldyBVUkwodXJsV2l0aG91dElnbm9yZWRQYXJhbXMuaHJlZik7XG4gICAgICAgIGNsZWFuVVJMLnBhdGhuYW1lICs9ICcuaHRtbCc7XG4gICAgICAgIHlpZWxkIGNsZWFuVVJMLmhyZWY7XG4gICAgfVxuICAgIGlmICh1cmxNYW5pcHVsYXRpb24pIHtcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFVSTHMgPSB1cmxNYW5pcHVsYXRpb24oeyB1cmw6IHVybE9iamVjdCB9KTtcbiAgICAgICAgZm9yIChjb25zdCB1cmxUb0F0dGVtcHQgb2YgYWRkaXRpb25hbFVSTHMpIHtcbiAgICAgICAgICAgIHlpZWxkIHVybFRvQXR0ZW1wdC5ocmVmO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi4vUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IHByZWNhY2hlQ29udHJvbGxlcjtcbi8qKlxuICogQHJldHVybiB7UHJlY2FjaGVDb250cm9sbGVyfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyID0gKCkgPT4ge1xuICAgIGlmICghcHJlY2FjaGVDb250cm9sbGVyKSB7XG4gICAgICAgIHByZWNhY2hlQ29udHJvbGxlciA9IG5ldyBQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlcjtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBUaXRsZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBkZWxldGVkVVJMc1xuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGxvZ0dyb3VwID0gKGdyb3VwVGl0bGUsIGRlbGV0ZWRVUkxzKSA9PiB7XG4gICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGdyb3VwVGl0bGUpO1xuICAgIGZvciAoY29uc3QgdXJsIG9mIGRlbGV0ZWRVUkxzKSB7XG4gICAgICAgIGxvZ2dlci5sb2codXJsKTtcbiAgICB9XG4gICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGRlbGV0ZWRVUkxzXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50Q2xlYW51cERldGFpbHMoZGVsZXRlZFVSTHMpIHtcbiAgICBjb25zdCBkZWxldGlvbkNvdW50ID0gZGVsZXRlZFVSTHMubGVuZ3RoO1xuICAgIGlmIChkZWxldGlvbkNvdW50ID4gMCkge1xuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYER1cmluZyBwcmVjYWNoaW5nIGNsZWFudXAsIGAgK1xuICAgICAgICAgICAgYCR7ZGVsZXRpb25Db3VudH0gY2FjaGVkIGAgK1xuICAgICAgICAgICAgYHJlcXVlc3Qke2RlbGV0aW9uQ291bnQgPT09IDEgPyAnIHdhcycgOiAncyB3ZXJlJ30gZGVsZXRlZC5gKTtcbiAgICAgICAgbG9nR3JvdXAoJ0RlbGV0ZWQgQ2FjaGUgUmVxdWVzdHMnLCBkZWxldGVkVVJMcyk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBncm91cFRpdGxlXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVybHNcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfbmVzdGVkR3JvdXAoZ3JvdXBUaXRsZSwgdXJscykge1xuICAgIGlmICh1cmxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChncm91cFRpdGxlKTtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzKSB7XG4gICAgICAgIGxvZ2dlci5sb2codXJsKTtcbiAgICB9XG4gICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG59XG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc1RvUHJlY2FjaGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc0FscmVhZHlQcmVjYWNoZWRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRJbnN0YWxsRGV0YWlscyh1cmxzVG9QcmVjYWNoZSwgdXJsc0FscmVhZHlQcmVjYWNoZWQpIHtcbiAgICBjb25zdCBwcmVjYWNoZWRDb3VudCA9IHVybHNUb1ByZWNhY2hlLmxlbmd0aDtcbiAgICBjb25zdCBhbHJlYWR5UHJlY2FjaGVkQ291bnQgPSB1cmxzQWxyZWFkeVByZWNhY2hlZC5sZW5ndGg7XG4gICAgaWYgKHByZWNhY2hlZENvdW50IHx8IGFscmVhZHlQcmVjYWNoZWRDb3VudCkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBQcmVjYWNoaW5nICR7cHJlY2FjaGVkQ291bnR9IGZpbGUke3ByZWNhY2hlZENvdW50ID09PSAxID8gJycgOiAncyd9LmA7XG4gICAgICAgIGlmIChhbHJlYWR5UHJlY2FjaGVkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9XG4gICAgICAgICAgICAgICAgYCAke2FscmVhZHlQcmVjYWNoZWRDb3VudH0gYCArXG4gICAgICAgICAgICAgICAgICAgIGBmaWxlJHthbHJlYWR5UHJlY2FjaGVkQ291bnQgPT09IDEgPyAnIGlzJyA6ICdzIGFyZSd9IGFscmVhZHkgY2FjaGVkLmA7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2UpO1xuICAgICAgICBfbmVzdGVkR3JvdXAoYFZpZXcgbmV3bHkgcHJlY2FjaGVkIFVSTHMuYCwgdXJsc1RvUHJlY2FjaGUpO1xuICAgICAgICBfbmVzdGVkR3JvdXAoYFZpZXcgcHJldmlvdXNseSBwcmVjYWNoZWQgVVJMcy5gLCB1cmxzQWxyZWFkeVByZWNhY2hlZCk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSZW1vdmVzIGFueSBVUkwgc2VhcmNoIHBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge1VSTH0gdXJsT2JqZWN0IFRoZSBvcmlnaW5hbCBVUkwuXG4gKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyBSZWdFeHBzIHRvIHRlc3QgYWdhaW5zdFxuICogZWFjaCBzZWFyY2ggcGFyYW1ldGVyIG5hbWUuIE1hdGNoZXMgbWVhbiB0aGF0IHRoZSBzZWFyY2ggcGFyYW1ldGVyIHNob3VsZCBiZVxuICogaWdub3JlZC5cbiAqIEByZXR1cm4ge1VSTH0gVGhlIFVSTCB3aXRoIGFueSBpZ25vcmVkIHNlYXJjaCBwYXJhbWV0ZXJzIHJlbW92ZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXModXJsT2JqZWN0LCBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcgPSBbXSkge1xuICAgIC8vIENvbnZlcnQgdGhlIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkgYXQgdGhlIHN0YXJ0IG9mIHRoZSBsb29wIHRvIG1ha2Ugc3VyZVxuICAgIC8vIGRlbGV0aW9uIGRvZXNuJ3QgbWVzcyB1cCBpdGVyYXRpb24uXG4gICAgZm9yIChjb25zdCBwYXJhbU5hbWUgb2YgWy4uLnVybE9iamVjdC5zZWFyY2hQYXJhbXMua2V5cygpXSkge1xuICAgICAgICBpZiAoaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nLnNvbWUoKHJlZ0V4cCkgPT4gcmVnRXhwLnRlc3QocGFyYW1OYW1lKSkpIHtcbiAgICAgICAgICAgIHVybE9iamVjdC5zZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybE9iamVjdDtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogUmVnRXhwUm91dGUgbWFrZXMgaXQgZWFzeSB0byBjcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gYmFzZWRcbiAqIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGV9LlxuICpcbiAqIEZvciBzYW1lLW9yaWdpbiByZXF1ZXN0cyB0aGUgUmVnRXhwIG9ubHkgbmVlZHMgdG8gbWF0Y2ggcGFydCBvZiB0aGUgVVJMLiBGb3JcbiAqIHJlcXVlc3RzIGFnYWluc3QgdGhpcmQtcGFydHkgc2VydmVycywgeW91IG11c3QgZGVmaW5lIGEgUmVnRXhwIHRoYXQgbWF0Y2hlc1xuICogdGhlIHN0YXJ0IG9mIHRoZSBVUkwuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICogQGV4dGVuZHMgd29ya2JveC1yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIFJlZ0V4cFJvdXRlIGV4dGVuZHMgUm91dGUge1xuICAgIC8qKlxuICAgICAqIElmIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gY29udGFpbnNcbiAgICAgKiBbY2FwdHVyZSBncm91cHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1JlZ0V4cCNncm91cGluZy1iYWNrLXJlZmVyZW5jZXN9LFxuICAgICAqIHRoZSBjYXB0dXJlZCB2YWx1ZXMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGBwYXJhbXNgXG4gICAgICogYXJndW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnRXhwIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdCBVUkxzLlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgICAqIGFnYWluc3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVnRXhwLCBoYW5kbGVyLCBtZXRob2QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlZ0V4cCwgUmVnRXhwLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUmVnRXhwUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3BhdHRlcm4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2ggPSAoeyB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVnRXhwLmV4ZWModXJsLmhyZWYpO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgbm8gbWF0Y2guXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlcXVpcmUgdGhhdCB0aGUgbWF0Y2ggc3RhcnQgYXQgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgVVJMIHN0cmluZ1xuICAgICAgICAgICAgLy8gaWYgaXQncyBhIGNyb3NzLW9yaWdpbiByZXF1ZXN0LlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxIGZvciB0aGUgY29udGV4dFxuICAgICAgICAgICAgLy8gYmVoaW5kIHRoaXMgYmVoYXZpb3IuXG4gICAgICAgICAgICBpZiAodXJsLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luICYmIHJlc3VsdC5pbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiAnJHtyZWdFeHAudG9TdHJpbmcoKX0nIG9ubHkgcGFydGlhbGx5IG1hdGNoZWQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYWdhaW5zdCB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCAnJHt1cmwudG9TdHJpbmcoKX0nLiBSZWdFeHBSb3V0ZSdzIHdpbGwgb25seSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYW5kbGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSByb3V0ZSBtYXRjaGVzLCBidXQgdGhlcmUgYXJlbid0IGFueSBjYXB0dXJlIGdyb3VwcyBkZWZpbmVkLCB0aGVuXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIFtdLCB3aGljaCBpcyB0cnV0aHkgYW5kIHRoZXJlZm9yZSBzdWZmaWNpZW50IHRvXG4gICAgICAgICAgICAvLyBpbmRpY2F0ZSBhIG1hdGNoLlxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGNhcHR1cmUgZ3JvdXBzLCB0aGVuIGl0IHdpbGwgcmV0dXJuIHRoZWlyIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoMSk7XG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKG1hdGNoLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbn1cbmV4cG9ydCB7IFJlZ0V4cFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGRlZmF1bHRNZXRob2QsIHZhbGlkTWV0aG9kcyB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IG5vcm1hbGl6ZUhhbmRsZXIgfSBmcm9tICcuL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBgUm91dGVgIGNvbnNpc3RzIG9mIGEgcGFpciBvZiBjYWxsYmFjayBmdW5jdGlvbnMsIFwibWF0Y2hcIiBhbmQgXCJoYW5kbGVyXCIuXG4gKiBUaGUgXCJtYXRjaFwiIGNhbGxiYWNrIGRldGVybWluZSBpZiBhIHJvdXRlIHNob3VsZCBiZSB1c2VkIHRvIFwiaGFuZGxlXCIgYVxuICogcmVxdWVzdCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUgaWYgaXQgY2FuLiBUaGUgXCJoYW5kbGVyXCIgY2FsbGJhY2tcbiAqIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbWF0Y2ggYW5kIHNob3VsZCByZXR1cm4gYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXNcbiAqIHRvIGEgYFJlc3BvbnNlYC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUm91dGUgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSBtYXRjaFxuICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJvdXRlIG1hdGNoZXMgYSBnaXZlblxuICAgICAqIGBmZXRjaGAgZXZlbnQgYnkgcmV0dXJuaW5nIGEgbm9uLWZhbHN5IHZhbHVlLlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgICAqIGFnYWluc3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWF0Y2gsIGhhbmRsZXIsIG1ldGhvZCA9IGRlZmF1bHRNZXRob2QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUobWF0Y2gsICdmdW5jdGlvbicsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbWF0Y2gnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzT25lT2YobWV0aG9kLCB2YWxpZE1ldGhvZHMsIHsgcGFyYW1OYW1lOiAnbWV0aG9kJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGVzZSB2YWx1ZXMgYXJlIHJlZmVyZW5jZWQgZGlyZWN0bHkgYnkgUm91dGVyIHNvIGNhbm5vdCBiZVxuICAgICAgICAvLyBhbHRlcmVkIGJ5IG1pbmlmaWNhdG9uLlxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLm1hdGNoID0gbWF0Y2g7XG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLWhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZVxuICAgICAqL1xuICAgIHNldENhdGNoSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuY2F0Y2hIYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgeyBSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0TWV0aG9kIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBub3JtYWxpemVIYW5kbGVyIH0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhlIFJvdXRlciBjYW4gYmUgdXNlZCB0byBwcm9jZXNzIGEgYEZldGNoRXZlbnRgIHVzaW5nIG9uZSBvciBtb3JlXG4gKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfSwgcmVzcG9uZGluZyB3aXRoIGEgYFJlc3BvbnNlYCBpZlxuICogYSBtYXRjaGluZyByb3V0ZSBleGlzdHMuXG4gKlxuICogSWYgbm8gcm91dGUgbWF0Y2hlcyBhIGdpdmVuIGEgcmVxdWVzdCwgdGhlIFJvdXRlciB3aWxsIHVzZSBhIFwiZGVmYXVsdFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkLlxuICpcbiAqIFNob3VsZCB0aGUgbWF0Y2hpbmcgUm91dGUgdGhyb3cgYW4gZXJyb3IsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImNhdGNoXCJcbiAqIGhhbmRsZXIgaWYgb25lIGlzIGRlZmluZWQgdG8gZ3JhY2VmdWxseSBkZWFsIHdpdGggaXNzdWVzIGFuZCByZXNwb25kIHdpdGggYVxuICogUmVxdWVzdC5cbiAqXG4gKiBJZiBhIHJlcXVlc3QgbWF0Y2hlcyBtdWx0aXBsZSByb3V0ZXMsIHRoZSAqKmVhcmxpZXN0KiogcmVnaXN0ZXJlZCByb3V0ZSB3aWxsXG4gKiBiZSB1c2VkIHRvIHJlc3BvbmQgdG8gdGhlIHJlcXVlc3QuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZXIge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IFJvdXRlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcm91dGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TWFwPHN0cmluZywgQXJyYXk8d29ya2JveC1yb3V0aW5nLlJvdXRlPj59IHJvdXRlcyBBIGBNYXBgIG9mIEhUVFBcbiAgICAgKiBtZXRob2QgbmFtZSAoJ0dFVCcsIGV0Yy4pIHRvIGFuIGFycmF5IG9mIGFsbCB0aGUgY29ycmVzcG9uZGluZyBgUm91dGVgXG4gICAgICogaW5zdGFuY2VzIHRoYXQgYXJlIHJlZ2lzdGVyZWQuXG4gICAgICovXG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZldGNoIGV2ZW50IGxpc3RlbmVyIHRvIHJlc3BvbmQgdG8gZXZlbnRzIHdoZW4gYSByb3V0ZSBtYXRjaGVzXG4gICAgICogdGhlIGV2ZW50J3MgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBhZGRGZXRjaExpc3RlbmVyKCkge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHJlcXVlc3QgfSA9IGV2ZW50O1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5oYW5kbGVSZXF1ZXN0KHsgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucmVzcG9uZFdpdGgocmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbWVzc2FnZSBldmVudCBsaXN0ZW5lciBmb3IgVVJMcyB0byBjYWNoZSBmcm9tIHRoZSB3aW5kb3cuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgdG8gY2FjaGUgcmVzb3VyY2VzIGxvYWRlZCBvbiB0aGUgcGFnZSBwcmlvciB0byB3aGVuIHRoZVxuICAgICAqIHNlcnZpY2Ugd29ya2VyIHN0YXJ0ZWQgY29udHJvbGxpbmcgaXQuXG4gICAgICpcbiAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlIGRhdGEgc2VudCBmcm9tIHRoZSB3aW5kb3cgc2hvdWxkIGJlIGFzIGZvbGxvd3MuXG4gICAgICogV2hlcmUgdGhlIGB1cmxzVG9DYWNoZWAgYXJyYXkgbWF5IGNvbnNpc3Qgb2YgVVJMIHN0cmluZ3Mgb3IgYW4gYXJyYXkgb2ZcbiAgICAgKiBVUkwgc3RyaW5nICsgYHJlcXVlc3RJbml0YCBvYmplY3QgKHRoZSBzYW1lIGFzIHlvdSdkIHBhc3MgdG8gYGZldGNoKClgKS5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHtcbiAgICAgKiAgIHR5cGU6ICdDQUNIRV9VUkxTJyxcbiAgICAgKiAgIHBheWxvYWQ6IHtcbiAgICAgKiAgICAgdXJsc1RvQ2FjaGU6IFtcbiAgICAgKiAgICAgICAnLi9zY3JpcHQxLmpzJyxcbiAgICAgKiAgICAgICAnLi9zY3JpcHQyLmpzJyxcbiAgICAgKiAgICAgICBbJy4vc2NyaXB0My5qcycsIHttb2RlOiAnbm8tY29ycyd9XSxcbiAgICAgKiAgICAgXSxcbiAgICAgKiAgIH0sXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGFkZENhY2hlTGlzdGVuZXIoKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gZXZlbnQuZGF0YSBpcyB0eXBlICdhbnknXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdDQUNIRV9VUkxTJykge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoaW5nIFVSTHMgZnJvbSB0aGUgd2luZG93YCwgcGF5bG9hZC51cmxzVG9DYWNoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RQcm9taXNlcyA9IFByb21pc2UuYWxsKHBheWxvYWQudXJsc1RvQ2FjaGUubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBbZW50cnldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCguLi5lbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QoeyByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBUeXBlU2NyaXB0IGVycm9ycyB3aXRob3V0IHRoaXMgdHlwZWNhc3QgZm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgcmVhc29uIChwcm9iYWJseSBhIGJ1ZykuIFRoZSByZWFsIHR5cGUgaGVyZSBzaG91bGQgd29yayBidXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lc24ndDogYEFycmF5PFByb21pc2U8UmVzcG9uc2U+IHwgdW5kZWZpbmVkPmAuXG4gICAgICAgICAgICAgICAgfSkpOyAvLyBUeXBlU2NyaXB0XG4gICAgICAgICAgICAgICAgZXZlbnQud2FpdFVudGlsKHJlcXVlc3RQcm9taXNlcyk7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBNZXNzYWdlQ2hhbm5lbCB3YXMgdXNlZCwgcmVwbHkgdG8gdGhlIG1lc3NhZ2Ugb24gc3VjY2Vzcy5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucG9ydHMgJiYgZXZlbnQucG9ydHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCByZXF1ZXN0UHJvbWlzZXMudGhlbigoKSA9PiBldmVudC5wb3J0c1swXS5wb3N0TWVzc2FnZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSByb3V0aW5nIHJ1bGVzIHRvIGEgRmV0Y2hFdmVudCBvYmplY3QgdG8gZ2V0IGEgUmVzcG9uc2UgZnJvbSBhblxuICAgICAqIGFwcHJvcHJpYXRlIFJvdXRlJ3MgaGFuZGxlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gaGFuZGxlLlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPnx1bmRlZmluZWR9IEEgcHJvbWlzZSBpcyByZXR1cm5lZCBpZiBhXG4gICAgICogICAgIHJlZ2lzdGVyZWQgcm91dGUgY2FuIGhhbmRsZSB0aGUgcmVxdWVzdC4gSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmdcbiAgICAgKiAgICAgcm91dGUgYW5kIHRoZXJlJ3Mgbm8gYGRlZmF1bHRIYW5kbGVyYCwgYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgaGFuZGxlUmVxdWVzdCh7IHJlcXVlc3QsIGV2ZW50LCB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZVJlcXVlc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMucmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgV29ya2JveCBSb3V0ZXIgb25seSBzdXBwb3J0cyBVUkxzIHRoYXQgc3RhcnQgd2l0aCAnaHR0cCcuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2FtZU9yaWdpbiA9IHVybC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbjtcbiAgICAgICAgY29uc3QgeyBwYXJhbXMsIHJvdXRlIH0gPSB0aGlzLmZpbmRNYXRjaGluZ1JvdXRlKHtcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIHNhbWVPcmlnaW4sXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgaGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmhhbmRsZXI7XG4gICAgICAgIGNvbnN0IGRlYnVnTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFtgRm91bmQgYSByb3V0ZSB0byBoYW5kbGUgdGhpcyByZXF1ZXN0OmAsIHJvdXRlXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgYFBhc3NpbmcgdGhlIGZvbGxvd2luZyBwYXJhbXMgdG8gdGhlIHJvdXRlJ3MgaGFuZGxlcjpgLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIGhhbmRsZXIgYmVjYXVzZSB0aGVyZSB3YXMgbm8gbWF0Y2hpbmcgcm91dGUsIHRoZW5cbiAgICAgICAgLy8gZmFsbCBiYWNrIHRvIGRlZmF1bHRIYW5kbGVyIGlmIHRoYXQncyBkZWZpbmVkLlxuICAgICAgICBjb25zdCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICAgICAgaWYgKCFoYW5kbGVyICYmIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLmhhcyhtZXRob2QpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChgRmFpbGVkIHRvIGZpbmQgYSBtYXRjaGluZyByb3V0ZS4gRmFsbGluZyBgICtcbiAgICAgICAgICAgICAgICAgICAgYGJhY2sgdG8gdGhlIGRlZmF1bHQgaGFuZGxlciBmb3IgJHttZXRob2R9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlciA9IHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLmdldChtZXRob2QpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvLyBObyBoYW5kbGVyIHNvIFdvcmtib3ggd2lsbCBkbyBub3RoaW5nLiBJZiBsb2dzIGlzIHNldCBvZiBkZWJ1Z1xuICAgICAgICAgICAgICAgIC8vIGkuZS4gdmVyYm9zZSwgd2Ugc2hvdWxkIHByaW50IG91dCB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gcm91dGUgZm91bmQgZm9yOiAke2dldEZyaWVuZGx5VVJMKHVybCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBoYW5kbGVyLCBtZWFuaW5nIFdvcmtib3ggaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgIC8vIHByaW50IHRoZSByb3V0aW5nIGRldGFpbHMgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFJvdXRlciBpcyByZXNwb25kaW5nIHRvOiAke2dldEZyaWVuZGx5VVJMKHVybCl9YCk7XG4gICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyguLi5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV3JhcCBpbiB0cnkgYW5kIGNhdGNoIGluIGNhc2UgdGhlIGhhbmRsZSBtZXRob2QgdGhyb3dzIGEgc3luY2hyb25vdXNcbiAgICAgICAgLy8gZXJyb3IuIEl0IHNob3VsZCBzdGlsbCBjYWxsYmFjayB0byB0aGUgY2F0Y2ggaGFuZGxlci5cbiAgICAgICAgbGV0IHJlc3BvbnNlUHJvbWlzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IGhhbmRsZXIuaGFuZGxlKHsgdXJsLCByZXF1ZXN0LCBldmVudCwgcGFyYW1zIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHJvdXRlJ3MgY2F0Y2ggaGFuZGxlciwgaWYgaXQgZXhpc3RzXG4gICAgICAgIGNvbnN0IGNhdGNoSGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmNhdGNoSGFuZGxlcjtcbiAgICAgICAgaWYgKHJlc3BvbnNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICAgICAgICh0aGlzLl9jYXRjaEhhbmRsZXIgfHwgY2F0Y2hIYW5kbGVyKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gcmVzcG9uc2VQcm9taXNlLmNhdGNoKGFzeW5jIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcm91dGUgY2F0Y2ggaGFuZGxlciwgcHJvY2VzcyB0aGF0IGZpcnN0XG4gICAgICAgICAgICAgICAgaWYgKGNhdGNoSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RpbGwgaW5jbHVkZSBVUkwgaGVyZSBhcyBpdCB3aWxsIGJlIGFzeW5jIGZyb20gdGhlIGNvbnNvbGUgZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtYXkgbm90IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgVVJMXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYEVycm9yIHRocm93biB3aGVuIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTCh1cmwpfS4gRmFsbGluZyBiYWNrIHRvIHJvdXRlJ3MgQ2F0Y2ggSGFuZGxlci5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXJyb3IgdGhyb3duIGJ5OmAsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYXRjaEhhbmRsZXIuaGFuZGxlKHsgdXJsLCByZXF1ZXN0LCBldmVudCwgcGFyYW1zIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChjYXRjaEVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGNoRXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIgPSBjYXRjaEVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2F0Y2hIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGlsbCBpbmNsdWRlIFVSTCBoZXJlIGFzIGl0IHdpbGwgYmUgYXN5bmMgZnJvbSB0aGUgY29uc29sZSBncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIG1heSBub3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgRXJyb3IgdGhyb3duIHdoZW4gcmVzcG9uZGluZyB0bzogYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2dldEZyaWVuZGx5VVJMKHVybCl9LiBGYWxsaW5nIGJhY2sgdG8gZ2xvYmFsIENhdGNoIEhhbmRsZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEVycm9yIHRocm93biBieTpgLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXRjaEhhbmRsZXIuaGFuZGxlKHsgdXJsLCByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGEgcmVxdWVzdCBhbmQgVVJMIChhbmQgb3B0aW9uYWxseSBhbiBldmVudCkgYWdhaW5zdCB0aGUgbGlzdCBvZlxuICAgICAqIHJlZ2lzdGVyZWQgcm91dGVzLCBhbmQgaWYgdGhlcmUncyBhIG1hdGNoLCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nXG4gICAgICogcm91dGUgYWxvbmcgd2l0aCBhbnkgcGFyYW1zIGdlbmVyYXRlZCBieSB0aGUgbWF0Y2guXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7VVJMfSBvcHRpb25zLnVybFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5zYW1lT3JpZ2luIFRoZSByZXN1bHQgb2YgY29tcGFyaW5nIGB1cmwub3JpZ2luYFxuICAgICAqICAgICBhZ2FpbnN0IHRoZSBjdXJyZW50IG9yaWdpbi5cbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBtYXRjaC5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYHJvdXRlYCBhbmQgYHBhcmFtc2AgcHJvcGVydGllcy5cbiAgICAgKiAgICAgVGhleSBhcmUgcG9wdWxhdGVkIGlmIGEgbWF0Y2hpbmcgcm91dGUgd2FzIGZvdW5kIG9yIGB1bmRlZmluZWRgXG4gICAgICogICAgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBmaW5kTWF0Y2hpbmdSb3V0ZSh7IHVybCwgc2FtZU9yaWdpbiwgcmVxdWVzdCwgZXZlbnQsIH0pIHtcbiAgICAgICAgY29uc3Qgcm91dGVzID0gdGhpcy5fcm91dGVzLmdldChyZXF1ZXN0Lm1ldGhvZCkgfHwgW107XG4gICAgICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zO1xuICAgICAgICAgICAgLy8gcm91dGUubWF0Y2ggcmV0dXJucyB0eXBlIGFueSwgbm90IHBvc3NpYmxlIHRvIGNoYW5nZSByaWdodCBub3cuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgICAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHJvdXRlLm1hdGNoKHsgdXJsLCBzYW1lT3JpZ2luLCByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgIGlmIChtYXRjaFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdhcm4gZGV2ZWxvcGVycyB0aGF0IHVzaW5nIGFuIGFzeW5jIG1hdGNoQ2FsbGJhY2sgaXMgYWxtb3N0IGFsd2F5c1xuICAgICAgICAgICAgICAgICAgICAvLyBub3QgdGhlIHJpZ2h0IHRoaW5nIHRvIGRvLlxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hSZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgV2hpbGUgcm91dGluZyAke2dldEZyaWVuZGx5VVJMKHVybCl9LCBhbiBhc3luYyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbiB3YXMgdXNlZC4gUGxlYXNlIGNvbnZlcnQgdGhlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBmb2xsb3dpbmcgcm91dGUgdG8gdXNlIGEgc3luY2hyb25vdXMgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbjpgLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjA3OVxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBtYXRjaFJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zdGVhZCBvZiBwYXNzaW5nIGFuIGVtcHR5IGFycmF5IGluIGFzIHBhcmFtcywgdXNlIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFJlc3VsdC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWF0Y2hSZXN1bHQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnN0ZWFkIG9mIHBhc3NpbmcgYW4gZW1wdHkgb2JqZWN0IGluIGFzIHBhcmFtcywgdXNlIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWF0Y2hSZXN1bHQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgdGhlIGJvb2xlYW4gdmFsdWUgdHJ1ZSAocmF0aGVyIHRoYW4ganVzdCBzb21ldGhpbmcgdHJ1dGgteSksXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHNldCBwYXJhbXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvcHVsbC8yMTM0I2lzc3VlY29tbWVudC01MTM5MjQzNTNcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gZWFybHkgaWYgaGF2ZSBhIG1hdGNoLlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJvdXRlLCBwYXJhbXMgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyBtYXRjaCB3YXMgZm91bmQgYWJvdmUsIHJldHVybiBhbmQgZW1wdHkgb2JqZWN0LlxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmluZSBhIGRlZmF1bHQgYGhhbmRsZXJgIHRoYXQncyBjYWxsZWQgd2hlbiBubyByb3V0ZXMgZXhwbGljaXRseVxuICAgICAqIG1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0LlxuICAgICAqXG4gICAgICogRWFjaCBIVFRQIG1ldGhvZCAoJ0dFVCcsICdQT1NUJywgZXRjLikgZ2V0cyBpdHMgb3duIGRlZmF1bHQgaGFuZGxlci5cbiAgICAgKlxuICAgICAqIFdpdGhvdXQgYSBkZWZhdWx0IGhhbmRsZXIsIHVubWF0Y2hlZCByZXF1ZXN0cyB3aWxsIGdvIGFnYWluc3QgdGhlXG4gICAgICogbmV0d29yayBhcyBpZiB0aGVyZSB3ZXJlIG5vIHNlcnZpY2Ugd29ya2VyIHByZXNlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBhc3NvY2lhdGUgd2l0aCB0aGlzXG4gICAgICogZGVmYXVsdCBoYW5kbGVyLiBFYWNoIG1ldGhvZCBoYXMgaXRzIG93biBkZWZhdWx0LlxuICAgICAqL1xuICAgIHNldERlZmF1bHRIYW5kbGVyKGhhbmRsZXIsIG1ldGhvZCA9IGRlZmF1bHRNZXRob2QpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuc2V0KG1ldGhvZCwgbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGEgUm91dGUgdGhyb3dzIGFuIGVycm9yIHdoaWxlIGhhbmRsaW5nIGEgcmVxdWVzdCwgdGhpcyBgaGFuZGxlcmBcbiAgICAgKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqL1xuICAgIHNldENhdGNoSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2NhdGNoSGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gcmVnaXN0ZXIuXG4gICAgICovXG4gICAgcmVnaXN0ZXJSb3V0ZShyb3V0ZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZSwgJ29iamVjdCcsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKHJvdXRlLCAnbWF0Y2gnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZS5oYW5kbGVyLCAnb2JqZWN0Jywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5oYXNNZXRob2Qocm91dGUuaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUuaGFuZGxlcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUocm91dGUubWV0aG9kLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZS5tZXRob2QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlcy5zZXQocm91dGUubWV0aG9kLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2l2ZSBwcmVjZWRlbmNlIHRvIGFsbCBvZiB0aGUgZWFybGllciByb3V0ZXMgYnkgYWRkaW5nIHRoaXMgYWRkaXRpb25hbFxuICAgICAgICAvLyByb3V0ZSB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgICAgdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpLnB1c2gocm91dGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gdW5yZWdpc3Rlci5cbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyUm91dGUocm91dGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHJvdXRlLm1ldGhvZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlSW5kZXggPSB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkuaW5kZXhPZihyb3V0ZSk7XG4gICAgICAgIGlmIChyb3V0ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKS5zcGxpY2Uocm91dGVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgeyBSb3V0ZXIgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OnJvdXRpbmc6Ny4wLjAnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCB7IFJlZ0V4cFJvdXRlIH0gZnJvbSAnLi9SZWdFeHBSb3V0ZS5qcyc7XG5pbXBvcnQgeyBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBFYXNpbHkgcmVnaXN0ZXIgYSBSZWdFeHAsIHN0cmluZywgb3IgZnVuY3Rpb24gd2l0aCBhIGNhY2hpbmdcbiAqIHN0cmF0ZWd5IHRvIGEgc2luZ2xldG9uIFJvdXRlciBpbnN0YW5jZS5cbiAqXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGdlbmVyYXRlIGEgUm91dGUgZm9yIHlvdSBpZiBuZWVkZWQgYW5kXG4gKiBjYWxsIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGVyI3JlZ2lzdGVyUm91dGV9LlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ3x3b3JrYm94LXJvdXRpbmcuUm91dGV+bWF0Y2hDYWxsYmFja3x3b3JrYm94LXJvdXRpbmcuUm91dGV9IGNhcHR1cmVcbiAqIElmIHRoZSBjYXB0dXJlIHBhcmFtIGlzIGEgYFJvdXRlYCwgYWxsIG90aGVyIGFyZ3VtZW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IFtoYW5kbGVyXSBBIGNhbGxiYWNrXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLiBUaGlzIHBhcmFtZXRlclxuICogaXMgcmVxdWlyZWQgaWYgYGNhcHR1cmVgIGlzIG5vdCBhIGBSb3V0ZWAgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBtYXRjaCB0aGUgUm91dGVcbiAqIGFnYWluc3QuXG4gKiBAcmV0dXJuIHt3b3JrYm94LXJvdXRpbmcuUm91dGV9IFRoZSBnZW5lcmF0ZWQgYFJvdXRlYC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyUm91dGUoY2FwdHVyZSwgaGFuZGxlciwgbWV0aG9kKSB7XG4gICAgbGV0IHJvdXRlO1xuICAgIGlmICh0eXBlb2YgY2FwdHVyZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgY2FwdHVyZVVybCA9IG5ldyBVUkwoY2FwdHVyZSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoIShjYXB0dXJlLnN0YXJ0c1dpdGgoJy8nKSB8fCBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXN0cmluZycsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhcHR1cmUnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2Ugd2FudCB0byBjaGVjayBpZiBFeHByZXNzLXN0eWxlIHdpbGRjYXJkcyBhcmUgaW4gdGhlIHBhdGhuYW1lIG9ubHkuXG4gICAgICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyBsb2cgbWVzc2FnZSBpbiB2NC5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9DaGVjayA9IGNhcHR1cmUuc3RhcnRzV2l0aCgnaHR0cCcpXG4gICAgICAgICAgICAgICAgPyBjYXB0dXJlVXJsLnBhdGhuYW1lXG4gICAgICAgICAgICAgICAgOiBjYXB0dXJlO1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cCNwYXJhbWV0ZXJzXG4gICAgICAgICAgICBjb25zdCB3aWxkY2FyZHMgPSAnWyo6PytdJztcbiAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKGAke3dpbGRjYXJkc31gKS5leGVjKHZhbHVlVG9DaGVjaykpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSAnJGNhcHR1cmUnIHBhcmFtZXRlciBjb250YWlucyBhbiBFeHByZXNzLXN0eWxlIHdpbGRjYXJkIGAgK1xuICAgICAgICAgICAgICAgICAgICBgY2hhcmFjdGVyICgke3dpbGRjYXJkc30pLiBTdHJpbmdzIGFyZSBub3cgYWx3YXlzIGludGVycHJldGVkIGFzIGAgK1xuICAgICAgICAgICAgICAgICAgICBgZXhhY3QgbWF0Y2hlczsgdXNlIGEgUmVnRXhwIGZvciBwYXJ0aWFsIG9yIHdpbGRjYXJkIG1hdGNoZXMuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2hDYWxsYmFjayA9ICh7IHVybCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh1cmwucGF0aG5hbWUgPT09IGNhcHR1cmVVcmwucGF0aG5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgdXJsLm9yaWdpbiAhPT0gY2FwdHVyZVVybC5vcmlnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGAke2NhcHR1cmV9IG9ubHkgcGFydGlhbGx5IG1hdGNoZXMgdGhlIGNyb3NzLW9yaWdpbiBVUkwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt1cmwudG9TdHJpbmcoKX0uIFRoaXMgcm91dGUgd2lsbCBvbmx5IGhhbmRsZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaWYgdGhleSBtYXRjaCB0aGUgZW50aXJlIFVSTC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXJsLmhyZWYgPT09IGNhcHR1cmVVcmwuaHJlZjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgc3RyaW5nIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKG1hdGNoQ2FsbGJhY2ssIGhhbmRsZXIsIG1ldGhvZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNhcHR1cmUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgYFJlZ0V4cGAgdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICAgICAgcm91dGUgPSBuZXcgUmVnRXhwUm91dGUoY2FwdHVyZSwgaGFuZGxlciwgbWV0aG9kKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgZnVuY3Rpb24gdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICAgICAgcm91dGUgPSBuZXcgUm91dGUoY2FwdHVyZSwgaGFuZGxlciwgbWV0aG9kKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJvdXRlKSB7XG4gICAgICAgIHJvdXRlID0gY2FwdHVyZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnLCB7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgICBkZWZhdWx0Um91dGVyLnJlZ2lzdGVyUm91dGUocm91dGUpO1xuICAgIHJldHVybiByb3V0ZTtcbn1cbmV4cG9ydCB7IHJlZ2lzdGVyUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBIVFRQIG1ldGhvZCwgJ0dFVCcsIHVzZWQgd2hlbiB0aGVyZSdzIG5vIHNwZWNpZmljIG1ldGhvZFxuICogY29uZmlndXJlZCBmb3IgYSByb3V0ZS5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0TWV0aG9kID0gJ0dFVCc7XG4vKipcbiAqIFRoZSBsaXN0IG9mIHZhbGlkIEhUVFAgbWV0aG9kcyBhc3NvY2lhdGVkIHdpdGggcmVxdWVzdHMgdGhhdCBjb3VsZCBiZSByb3V0ZWQuXG4gKlxuICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkTWV0aG9kcyA9IFtcbiAgICAnREVMRVRFJyxcbiAgICAnR0VUJyxcbiAgICAnSEVBRCcsXG4gICAgJ1BBVENIJyxcbiAgICAnUE9TVCcsXG4gICAgJ1BVVCcsXG5dO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vUm91dGVyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IGRlZmF1bHRSb3V0ZXI7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UgaWYgb25lIGRvZXMgbm90IGV4aXN0LiBJZiBvbmVcbiAqIGRvZXMgYWxyZWFkeSBleGlzdCwgdGhhdCBpbnN0YW5jZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Um91dGVyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyID0gKCkgPT4ge1xuICAgIGlmICghZGVmYXVsdFJvdXRlcikge1xuICAgICAgICBkZWZhdWx0Um91dGVyID0gbmV3IFJvdXRlcigpO1xuICAgICAgICAvLyBUaGUgaGVscGVycyB0aGF0IHVzZSB0aGUgZGVmYXVsdCBSb3V0ZXIgYXNzdW1lIHRoZXNlIGxpc3RlbmVycyBleGlzdC5cbiAgICAgICAgZGVmYXVsdFJvdXRlci5hZGRGZXRjaExpc3RlbmVyKCk7XG4gICAgICAgIGRlZmF1bHRSb3V0ZXIuYWRkQ2FjaGVMaXN0ZW5lcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFJvdXRlcjtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCl8T2JqZWN0fSBoYW5kbGVyIEVpdGhlciBhIGZ1bmN0aW9uLCBvciBhbiBvYmplY3Qgd2l0aCBhXG4gKiAnaGFuZGxlJyBtZXRob2QuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGEgaGFuZGxlIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGFuZGxlciA9IChoYW5kbGVyKSA9PiB7XG4gICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKGhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShoYW5kbGVyLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaGFuZGxlOiBoYW5kbGVyIH07XG4gICAgfVxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3lIYW5kbGVyIH0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gYWJzdHJhY3QgYmFzZSBjbGFzcyB0aGF0IGFsbCBvdGhlciBzdHJhdGVneSBjbGFzc2VzIG11c3QgZXh0ZW5kIGZyb206XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgc3RyYXRlZ3kgYW5kIHNldHMgYWxsIGRvY3VtZW50ZWQgb3B0aW9uXG4gICAgICogcHJvcGVydGllcyBhcyBwdWJsaWMgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIE5vdGU6IGlmIGEgY3VzdG9tIHN0cmF0ZWd5IGNsYXNzIGV4dGVuZHMgdGhlIGJhc2UgU3RyYXRlZ3kgY2xhc3MgYW5kIGRvZXNcbiAgICAgKiBub3QgbmVlZCBtb3JlIHRoYW4gdGhlc2UgcHJvcGVydGllcywgaXQgZG9lcyBub3QgbmVlZCB0byBkZWZpbmUgaXRzIG93blxuICAgICAqIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIHRoZSBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFRoZVxuICAgICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgICAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZShvcHRpb25zLmNhY2hlTmFtZSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGlzdFxuICAgICAgICAgKiBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICAgICAqIHVzZWQgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0FycmF5PE9iamVjdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnMgfHwgW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAgICAgKiBbYGluaXRgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzfVxuICAgICAgICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9IG9wdGlvbnMuZmV0Y2hPcHRpb25zO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlXG4gICAgICAgICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICAgICAgICogZm9yIGFueSBgY2FjaGUubWF0Y2goKWAgb3IgYGNhY2hlLnB1dCgpYCBjYWxscyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1hdGNoT3B0aW9ucyA9IG9wdGlvbnMubWF0Y2hPcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGEgcmVxdWVzdCBzdHJhdGVneSBhbmQgcmV0dXJucyBhIGBQcm9taXNlYCB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoXG4gICAgICogYSBgUmVzcG9uc2VgLCBpbnZva2luZyBhbGwgcmVsZXZhbnQgcGx1Z2luIGNhbGxiYWNrcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYSBzdHJhdGVneSBpbnN0YW5jZSBpcyByZWdpc3RlcmVkIHdpdGggYSBXb3JrYm94XG4gICAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZX0sIHRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBjYWxsZWQgd2hlbiB0aGUgcm91dGUgbWF0Y2hlcy5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHksIHRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIGluIGEgc3RhbmRhbG9uZSBgRmV0Y2hFdmVudGBcbiAgICAgKiBsaXN0ZW5lciBieSBwYXNzaW5nIGl0IHRvIGBldmVudC5yZXNwb25kV2l0aCgpYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmV0Y2hFdmVudHxPYmplY3R9IG9wdGlvbnMgQSBgRmV0Y2hFdmVudGAgb3IgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICogICAgIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93LlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAgICogICAgIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLnBhcmFtc11cbiAgICAgKi9cbiAgICBoYW5kbGUob3B0aW9ucykge1xuICAgICAgICBjb25zdCBbcmVzcG9uc2VEb25lXSA9IHRoaXMuaGFuZGxlQWxsKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VEb25lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaW1pbGFyIHRvIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlfSwgYnV0XG4gICAgICogaW5zdGVhZCBvZiBqdXN0IHJldHVybmluZyBhIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHRvIGEgYFJlc3BvbnNlYCBpdFxuICAgICAqIGl0IHdpbGwgcmV0dXJuIGFuIHR1cGxlIG9mIGBbcmVzcG9uc2UsIGRvbmVdYCBwcm9taXNlcywgd2hlcmUgdGhlIGZvcm1lclxuICAgICAqIChgcmVzcG9uc2VgKSBpcyBlcXVpdmFsZW50IHRvIHdoYXQgYGhhbmRsZSgpYCByZXR1cm5zLCBhbmQgdGhlIGxhdHRlciBpcyBhXG4gICAgICogUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbmNlIGFueSBwcm9taXNlcyB0aGF0IHdlcmUgYWRkZWQgdG9cbiAgICAgKiBgZXZlbnQud2FpdFVudGlsKClgIGFzIHBhcnQgb2YgcGVyZm9ybWluZyB0aGUgc3RyYXRlZ3kgaGF2ZSBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGF3YWl0IHRoZSBgZG9uZWAgcHJvbWlzZSB0byBlbnN1cmUgYW55IGV4dHJhIHdvcmsgcGVyZm9ybWVkIGJ5XG4gICAgICogdGhlIHN0cmF0ZWd5ICh1c3VhbGx5IGNhY2hpbmcgcmVzcG9uc2VzKSBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGZXRjaEV2ZW50fE9iamVjdH0gb3B0aW9ucyBBIGBGZXRjaEV2ZW50YCBvciBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgKiAgICAgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cuXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgICAqIEByZXR1cm4ge0FycmF5PFByb21pc2U+fSBBIHR1cGxlIG9mIFtyZXNwb25zZSwgZG9uZV1cbiAgICAgKiAgICAgcHJvbWlzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiB0aGUgcmVzcG9uc2UgcmVzb2x2ZXMgYXNcbiAgICAgKiAgICAgd2VsbCBhcyB3aGVuIHRoZSBoYW5kbGVyIGhhcyBjb21wbGV0ZWQgYWxsIGl0cyB3b3JrLlxuICAgICAqL1xuICAgIGhhbmRsZUFsbChvcHRpb25zKSB7XG4gICAgICAgIC8vIEFsbG93IGZvciBmbGV4aWJsZSBvcHRpb25zIHRvIGJlIHBhc3NlZC5cbiAgICAgICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGZXRjaEV2ZW50KSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IG9wdGlvbnMucmVxdWVzdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnQgPSBvcHRpb25zLmV2ZW50O1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdHlwZW9mIG9wdGlvbnMucmVxdWVzdCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gbmV3IFJlcXVlc3Qob3B0aW9ucy5yZXF1ZXN0KVxuICAgICAgICAgICAgOiBvcHRpb25zLnJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9ICdwYXJhbXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnBhcmFtcyA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IG5ldyBTdHJhdGVneUhhbmRsZXIodGhpcywgeyBldmVudCwgcmVxdWVzdCwgcGFyYW1zIH0pO1xuICAgICAgICBjb25zdCByZXNwb25zZURvbmUgPSB0aGlzLl9nZXRSZXNwb25zZShoYW5kbGVyLCByZXF1ZXN0LCBldmVudCk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJEb25lID0gdGhpcy5fYXdhaXRDb21wbGV0ZShyZXNwb25zZURvbmUsIGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KTtcbiAgICAgICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIHByb21pc2VzLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUHJvbWlzZS5hbGwoKS5cbiAgICAgICAgcmV0dXJuIFtyZXNwb25zZURvbmUsIGhhbmRsZXJEb25lXTtcbiAgICB9XG4gICAgYXN5bmMgX2dldFJlc3BvbnNlKGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KSB7XG4gICAgICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyV2lsbFN0YXJ0JywgeyBldmVudCwgcmVxdWVzdCB9KTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgICAgICAgICAvLyBUaGUgXCJvZmZpY2lhbFwiIFN0cmF0ZWd5IHN1YmNsYXNzZXMgYWxsIHRocm93IHRoaXMgZXJyb3IgYXV0b21hdGljYWxseSxcbiAgICAgICAgICAgIC8vIGJ1dCBpbiBjYXNlIGEgdGhpcmQtcGFydHkgU3RyYXRlZ3kgZG9lc24ndCwgZW5zdXJlIHRoYXQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBjb25zaXN0ZW50IGZhaWx1cmUgd2hlbiB0aGVyZSdzIG5vIHJlc3BvbnNlIG9yIGFuIGVycm9yIHJlc3BvbnNlLlxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgaGFuZGxlci5pdGVyYXRlQ2FsbGJhY2tzKCdoYW5kbGVyRGlkRXJyb3InKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHsgZXJyb3IsIGV2ZW50LCByZXF1ZXN0IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFdoaWxlIHJlc3BvbmRpbmcgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScsIGAgK1xuICAgICAgICAgICAgICAgICAgICBgYW4gJHtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IudG9TdHJpbmcoKSA6ICcnfSBlcnJvciBvY2N1cnJlZC4gVXNpbmcgYSBmYWxsYmFjayByZXNwb25zZSBwcm92aWRlZCBieSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGEgaGFuZGxlckRpZEVycm9yIHBsdWdpbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGhhbmRsZXIuaXRlcmF0ZUNhbGxiYWNrcygnaGFuZGxlcldpbGxSZXNwb25kJykpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soeyBldmVudCwgcmVxdWVzdCwgcmVzcG9uc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBfYXdhaXRDb21wbGV0ZShyZXNwb25zZURvbmUsIGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZURvbmU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgZXJyb3JzLCBhcyByZXNwb25zZSBlcnJvcnMgc2hvdWxkIGJlIGNhdWdodCB2aWEgdGhlIGByZXNwb25zZWBcbiAgICAgICAgICAgIC8vIHByb21pc2UgYWJvdmUuIFRoZSBgZG9uZWAgcHJvbWlzZSB3aWxsIG9ubHkgdGhyb3cgZm9yIGVycm9ycyBpblxuICAgICAgICAgICAgLy8gcHJvbWlzZXMgcGFzc2VkIHRvIGBoYW5kbGVyLndhaXRVbnRpbCgpYC5cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgaGFuZGxlci5ydW5DYWxsYmFja3MoJ2hhbmRsZXJEaWRSZXNwb25kJywge1xuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZXIuZG9uZVdhaXRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAod2FpdFVudGlsRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh3YWl0VW50aWxFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB3YWl0VW50aWxFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlckRpZENvbXBsZXRlJywge1xuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgICBoYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7IFN0cmF0ZWd5IH07XG4vKipcbiAqIENsYXNzZXMgZXh0ZW5kaW5nIHRoZSBgU3RyYXRlZ3lgIGJhc2VkIGNsYXNzIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QsXG4gKiBhbmQgbGV2ZXJhZ2UgdGhlIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfVxuICogYXJnIHRvIHBlcmZvcm0gYWxsIGZldGNoaW5nIGFuZCBjYWNoZSBsb2dpYywgd2hpY2ggd2lsbCBlbnN1cmUgYWxsIHJlbGV2YW50XG4gKiBjYWNoZSwgY2FjaGUgb3B0aW9ucywgZmV0Y2ggb3B0aW9ucyBhbmQgcGx1Z2lucyBhcmUgdXNlZCAocGVyIHRoZSBjdXJyZW50XG4gKiBzdHJhdGVneSBpbnN0YW5jZSkuXG4gKlxuICogQG5hbWUgX2hhbmRsZVxuICogQGluc3RhbmNlXG4gKiBAYWJzdHJhY3RcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqL1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU1hdGNoSWdub3JlUGFyYW1zIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXMuanMnO1xuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvRGVmZXJyZWQuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuZnVuY3Rpb24gdG9SZXF1ZXN0KGlucHV0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBuZXcgUmVxdWVzdChpbnB1dCkgOiBpbnB1dDtcbn1cbi8qKlxuICogQSBjbGFzcyBjcmVhdGVkIGV2ZXJ5IHRpbWUgYSBTdHJhdGVneSBpbnN0YW5jZSBpbnN0YW5jZSBjYWxsc1xuICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGV9IG9yXG4gKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZUFsbH0gdGhhdCB3cmFwcyBhbGwgZmV0Y2ggYW5kXG4gKiBjYWNoZSBhY3Rpb25zIGFyb3VuZCBwbHVnaW4gY2FsbGJhY2tzIGFuZCBrZWVwcyB0cmFjayBvZiB3aGVuIHRoZSBzdHJhdGVneVxuICogaXMgXCJkb25lXCIgKGkuZS4gYWxsIGFkZGVkIGBldmVudC53YWl0VW50aWwoKWAgcHJvbWlzZXMgaGF2ZSByZXNvbHZlZCkuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdHJhdGVneUhhbmRsZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXNzZWQgc3RyYXRlZ3kgYW5kIGV2ZW50XG4gICAgICogdGhhdCdzIGhhbmRsaW5nIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGFsc28gaW5pdGlhbGl6ZXMgdGhlIHN0YXRlIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gZWFjaCBvZlxuICAgICAqIHRoZSBwbHVnaW5zIGhhbmRsaW5nIHRoaXMgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fSBzdHJhdGVneVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlXG4gICAgICogICAgIHtAbGluayB3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gKGlmIGFwcGxpY2FibGUpLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlS2V5cyA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlcXVlc3QgdGhlIHN0cmF0ZWd5IGlzIHBlcmZvcm1pbmcgKHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgICAgICogQG5hbWUgcmVxdWVzdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUge1JlcXVlc3R9XG4gICAgICAgICAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJlcXVlc3QuXG4gICAgICAgICAqIEBuYW1lIGV2ZW50XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7RXh0ZW5kYWJsZUV2ZW50fVxuICAgICAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYFVSTGAgaW5zdGFuY2Ugb2YgYHJlcXVlc3QudXJsYCAoaWYgcGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAgICAgKiBOb3RlOiB0aGUgYHVybGAgcGFyYW0gd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBzdHJhdGVneSB3YXMgaW52b2tlZFxuICAgICAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdC5cbiAgICAgICAgICogQG5hbWUgdXJsXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7VVJMfHVuZGVmaW5lZH1cbiAgICAgICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGBwYXJhbWAgdmFsdWUgKGlmIHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgICAgICogTm90ZTogdGhlIGBwYXJhbWAgcGFyYW0gd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBzdHJhdGVneSB3YXMgaW52b2tlZFxuICAgICAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdCBhbmQgdGhlXG4gICAgICAgICAqIHtAbGluayB3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gcmV0dXJuZWRcbiAgICAgICAgICogYSB0cnV0aHkgdmFsdWUgKGl0IHdpbGwgYmUgdGhhdCB2YWx1ZSkuXG4gICAgICAgICAqIEBuYW1lIHBhcmFtc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgeyp8dW5kZWZpbmVkfVxuICAgICAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKG9wdGlvbnMuZXZlbnQsIEV4dGVuZGFibGVFdmVudCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1N0cmF0ZWd5SGFuZGxlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5ldmVudCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmV2ZW50ID0gb3B0aW9ucy5ldmVudDtcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy5faGFuZGxlckRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgICAgIHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgLy8gQ29weSB0aGUgcGx1Z2lucyBsaXN0IChzaW5jZSBpdCdzIG11dGFibGUgb24gdGhlIHN0cmF0ZWd5KSxcbiAgICAgICAgLy8gc28gYW55IG11dGF0aW9ucyBkb24ndCBhZmZlY3QgdGhpcyBoYW5kbGVyIGluc3RhbmNlLlxuICAgICAgICB0aGlzLl9wbHVnaW5zID0gWy4uLnN0cmF0ZWd5LnBsdWdpbnNdO1xuICAgICAgICB0aGlzLl9wbHVnaW5TdGF0ZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fcGx1Z2lucykge1xuICAgICAgICAgICAgdGhpcy5fcGx1Z2luU3RhdGVNYXAuc2V0KHBsdWdpbiwge30pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnQud2FpdFVudGlsKHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5wcm9taXNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyBhIGdpdmVuIHJlcXVlc3QgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlIHBsdWdpbiBjYWxsYmFja1xuICAgICAqIG1ldGhvZHMpIHVzaW5nIHRoZSBgZmV0Y2hPcHRpb25zYCAoZm9yIG5vbi1uYXZpZ2F0aW9uIHJlcXVlc3RzKSBhbmRcbiAgICAgKiBgcGx1Z2luc2AgZGVmaW5lZCBvbiB0aGUgYFN0cmF0ZWd5YCBvYmplY3QuXG4gICAgICpcbiAgICAgKiBUaGUgZm9sbG93aW5nIHBsdWdpbiBsaWZlY3ljbGUgbWV0aG9kcyBhcmUgaW52b2tlZCB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kOlxuICAgICAqIC0gYHJlcXVlc3RXaWxsRmV0Y2goKWBcbiAgICAgKiAtIGBmZXRjaERpZFN1Y2NlZWQoKWBcbiAgICAgKiAtIGBmZXRjaERpZEZhaWwoKWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGlucHV0IFRoZSBVUkwgb3IgcmVxdWVzdCB0byBmZXRjaC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaChpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGV2ZW50IH0gPSB0aGlzO1xuICAgICAgICBsZXQgcmVxdWVzdCA9IHRvUmVxdWVzdChpbnB1dCk7XG4gICAgICAgIGlmIChyZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScgJiZcbiAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgRmV0Y2hFdmVudCAmJlxuICAgICAgICAgICAgZXZlbnQucHJlbG9hZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZVByZWxvYWRSZXNwb25zZSA9IChhd2FpdCBldmVudC5wcmVsb2FkUmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVXNpbmcgYSBwcmVsb2FkZWQgbmF2aWdhdGlvbiByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgZmV0Y2hEaWRGYWlsIHBsdWdpbiwgd2UgbmVlZCB0byBzYXZlIGEgY2xvbmUgb2YgdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHJlcXVlc3QgYmVmb3JlIGl0J3MgZWl0aGVyIG1vZGlmaWVkIGJ5IGEgcmVxdWVzdFdpbGxGZXRjaFxuICAgICAgICAvLyBwbHVnaW4gb3IgYmVmb3JlIHRoZSBvcmlnaW5hbCByZXF1ZXN0J3MgYm9keSBpcyBjb25zdW1lZCB2aWEgZmV0Y2goKS5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSZXF1ZXN0ID0gdGhpcy5oYXNDYWxsYmFjaygnZmV0Y2hEaWRGYWlsJylcbiAgICAgICAgICAgID8gcmVxdWVzdC5jbG9uZSgpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNiIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygncmVxdWVzdFdpbGxGZXRjaCcpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IGF3YWl0IGNiKHsgcmVxdWVzdDogcmVxdWVzdC5jbG9uZSgpLCBldmVudCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd25FcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGNhbiBiZSBhbHRlcmVkIGJ5IHBsdWdpbnMgd2l0aCBgcmVxdWVzdFdpbGxGZXRjaGAgbWFraW5nXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCByZXF1ZXN0IChtb3N0IGxpa2VseSBmcm9tIGEgYGZldGNoYCBldmVudCkgZGlmZmVyZW50XG4gICAgICAgIC8vIGZyb20gdGhlIFJlcXVlc3Qgd2UgbWFrZS4gUGFzcyBib3RoIHRvIGBmZXRjaERpZEZhaWxgIHRvIGFpZCBkZWJ1Z2dpbmcuXG4gICAgICAgIGNvbnN0IHBsdWdpbkZpbHRlcmVkUmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBmZXRjaFJlc3BvbnNlO1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NlxuICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QsIHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJyA/IHVuZGVmaW5lZCA6IHRoaXMuX3N0cmF0ZWd5LmZldGNoT3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHJldHVybmVkIGEgcmVzcG9uc2Ugd2l0aCBgICtcbiAgICAgICAgICAgICAgICAgICAgYHN0YXR1cyAnJHtmZXRjaFJlc3BvbnNlLnN0YXR1c30nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2ZldGNoRGlkU3VjY2VlZCcpKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IGZldGNoUmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHRocmV3IGFuIGVycm9yLmAsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGBvcmlnaW5hbFJlcXVlc3RgIHdpbGwgb25seSBleGlzdCBpZiBhIGBmZXRjaERpZEZhaWxgIGNhbGxiYWNrXG4gICAgICAgICAgICAvLyBpcyBiZWluZyB1c2VkIChzZWUgYWJvdmUpLlxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucnVuQ2FsbGJhY2tzKCdmZXRjaERpZEZhaWwnLCB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUmVxdWVzdDogb3JpZ2luYWxSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbHMgYHRoaXMuZmV0Y2goKWAgYW5kIChpbiB0aGUgYmFja2dyb3VuZCkgcnVucyBgdGhpcy5jYWNoZVB1dCgpYCBvblxuICAgICAqIHRoZSByZXNwb25zZSBnZW5lcmF0ZWQgYnkgYHRoaXMuZmV0Y2goKWAuXG4gICAgICpcbiAgICAgKiBUaGUgY2FsbCB0byBgdGhpcy5jYWNoZVB1dCgpYCBhdXRvbWF0aWNhbGx5IGludm9rZXMgYHRoaXMud2FpdFVudGlsKClgLFxuICAgICAqIHNvIHlvdSBkbyBub3QgaGF2ZSB0byBtYW51YWxseSBjYWxsIGB3YWl0VW50aWwoKWAgb24gdGhlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gaW5wdXQgVGhlIHJlcXVlc3Qgb3IgVVJMIHRvIGZldGNoIGFuZCBjYWNoZS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaEFuZENhY2hlUHV0KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaChpbnB1dCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQ2xvbmUgPSByZXNwb25zZS5jbG9uZSgpO1xuICAgICAgICB2b2lkIHRoaXMud2FpdFVudGlsKHRoaXMuY2FjaGVQdXQoaW5wdXQsIHJlc3BvbnNlQ2xvbmUpKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYXRjaGVzIGEgcmVxdWVzdCBmcm9tIHRoZSBjYWNoZSAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGUgcGx1Z2luXG4gICAgICogY2FsbGJhY2sgbWV0aG9kcykgdXNpbmcgdGhlIGBjYWNoZU5hbWVgLCBgbWF0Y2hPcHRpb25zYCwgYW5kIGBwbHVnaW5zYFxuICAgICAqIGRlZmluZWQgb24gdGhlIHN0cmF0ZWd5IG9iamVjdC5cbiAgICAgKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAgICogLSBjYWNoZUtleVdpbGxCeVVzZWQoKVxuICAgICAqIC0gY2FjaGVkUmVzcG9uc2VXaWxsQnlVc2VkKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGtleSBUaGUgUmVxdWVzdCBvciBVUkwgdG8gdXNlIGFzIHRoZSBjYWNoZSBrZXkuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fSBBIG1hdGNoaW5nIHJlc3BvbnNlLCBpZiBmb3VuZC5cbiAgICAgKi9cbiAgICBhc3luYyBjYWNoZU1hdGNoKGtleSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdG9SZXF1ZXN0KGtleSk7XG4gICAgICAgIGxldCBjYWNoZWRSZXNwb25zZTtcbiAgICAgICAgY29uc3QgeyBjYWNoZU5hbWUsIG1hdGNoT3B0aW9ucyB9ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCB0aGlzLmdldENhY2hlS2V5KHJlcXVlc3QsICdyZWFkJyk7XG4gICAgICAgIGNvbnN0IG11bHRpTWF0Y2hPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXRjaE9wdGlvbnMpLCB7IGNhY2hlTmFtZSB9KTtcbiAgICAgICAgY2FjaGVkUmVzcG9uc2UgPSBhd2FpdCBjYWNoZXMubWF0Y2goZWZmZWN0aXZlUmVxdWVzdCwgbXVsdGlNYXRjaE9wdGlvbnMpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gY2FjaGVkIHJlc3BvbnNlIGZvdW5kIGluICcke2NhY2hlTmFtZX0nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQnKSkge1xuICAgICAgICAgICAgY2FjaGVkUmVzcG9uc2UgPVxuICAgICAgICAgICAgICAgIChhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBjYWNoZWRSZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAgICAgfSkpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1dHMgYSByZXF1ZXN0L3Jlc3BvbnNlIHBhaXIgaW4gdGhlIGNhY2hlIChhbmQgaW52b2tlcyBhbnkgYXBwbGljYWJsZVxuICAgICAqIHBsdWdpbiBjYWxsYmFjayBtZXRob2RzKSB1c2luZyB0aGUgYGNhY2hlTmFtZWAgYW5kIGBwbHVnaW5zYCBkZWZpbmVkIG9uXG4gICAgICogdGhlIHN0cmF0ZWd5IG9iamVjdC5cbiAgICAgKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAgICogLSBjYWNoZUtleVdpbGxCeVVzZWQoKVxuICAgICAqIC0gY2FjaGVXaWxsVXBkYXRlKClcbiAgICAgKiAtIGNhY2hlRGlkVXBkYXRlKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGtleSBUaGUgcmVxdWVzdCBvciBVUkwgdG8gdXNlIGFzIHRoZSBjYWNoZSBrZXkuXG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIHRvIGNhY2hlLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IGBmYWxzZWAgaWYgYSBjYWNoZVdpbGxVcGRhdGUgY2F1c2VkIHRoZSByZXNwb25zZVxuICAgICAqIG5vdCBiZSBjYWNoZWQsIGFuZCBgdHJ1ZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGFzeW5jIGNhY2hlUHV0KGtleSwgcmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRvUmVxdWVzdChrZXkpO1xuICAgICAgICAvLyBSdW4gaW4gdGhlIG5leHQgdGFzayB0byBhdm9pZCBibG9ja2luZyBvdGhlciBjYWNoZSByZWFkcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9TZXJ2aWNlV29ya2VyL2lzc3Vlcy8xMzk3XG4gICAgICAgIGF3YWl0IHRpbWVvdXQoMCk7XG4gICAgICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCB0aGlzLmdldENhY2hlS2V5KHJlcXVlc3QsICd3cml0ZScpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kICYmIGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2F0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0Jywge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBlZmZlY3RpdmVSZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI4MThcbiAgICAgICAgICAgIGNvbnN0IHZhcnkgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnVmFyeScpO1xuICAgICAgICAgICAgaWYgKHZhcnkpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSByZXNwb25zZSBmb3IgJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaGFzIGEgJ1Zhcnk6ICR7dmFyeX0nIGhlYWRlci4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBDb25zaWRlciBzZXR0aW5nIHRoZSB7aWdub3JlVmFyeTogdHJ1ZX0gb3B0aW9uIG9uIHlvdXIgc3RyYXRlZ3kgYCArXG4gICAgICAgICAgICAgICAgICAgIGB0byBlbnN1cmUgY2FjaGUgbWF0Y2hpbmcgYW5kIGRlbGV0aW9uIHdvcmtzIGFzIGV4cGVjdGVkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBDYW5ub3QgY2FjaGUgbm9uLWV4aXN0ZW50IHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignY2FjaGUtcHV0LXdpdGgtbm8tcmVzcG9uc2UnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiBnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZVRvQ2FjaGUgPSBhd2FpdCB0aGlzLl9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlKHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBSZXNwb25zZSAnJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9JyBgICtcbiAgICAgICAgICAgICAgICAgICAgYHdpbGwgbm90IGJlIGNhY2hlZC5gLCByZXNwb25zZVRvQ2FjaGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgY2FjaGVOYW1lLCBtYXRjaE9wdGlvbnMgfSA9IHRoaXMuX3N0cmF0ZWd5O1xuICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4oY2FjaGVOYW1lKTtcbiAgICAgICAgY29uc3QgaGFzQ2FjaGVVcGRhdGVDYWxsYmFjayA9IHRoaXMuaGFzQ2FsbGJhY2soJ2NhY2hlRGlkVXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IG9sZFJlc3BvbnNlID0gaGFzQ2FjaGVVcGRhdGVDYWxsYmFja1xuICAgICAgICAgICAgPyBhd2FpdCBjYWNoZU1hdGNoSWdub3JlUGFyYW1zKFxuICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiB0aGUgYF9fV0JfUkVWSVNJT05fX2AgcGFyYW0gaXMgYSBwcmVjYWNoaW5nXG4gICAgICAgICAgICAvLyBmZWF0dXJlLiBDb25zaWRlciBpbnRvIHdheXMgdG8gb25seSBhZGQgdGhpcyBiZWhhdmlvciBpZiB1c2luZ1xuICAgICAgICAgICAgLy8gcHJlY2FjaGluZy5cbiAgICAgICAgICAgIGNhY2hlLCBlZmZlY3RpdmVSZXF1ZXN0LmNsb25lKCksIFsnX19XQl9SRVZJU0lPTl9fJ10sIG1hdGNoT3B0aW9ucylcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVXBkYXRpbmcgdGhlICcke2NhY2hlTmFtZX0nIGNhY2hlIHdpdGggYSBuZXcgUmVzcG9uc2UgYCArXG4gICAgICAgICAgICAgICAgYGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlLnB1dChlZmZlY3RpdmVSZXF1ZXN0LCBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID8gcmVzcG9uc2VUb0NhY2hlLmNsb25lKCkgOiByZXNwb25zZVRvQ2FjaGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUV4Y2VwdGlvbiNleGNlcHRpb24tUXVvdGFFeGNlZWRlZEVycm9yXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZURpZFVwZGF0ZScpKSB7XG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIG9sZFJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIG5ld1Jlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgbGlzdCBvZiBwbHVnaW5zIGZvciB0aGUgYGNhY2hlS2V5V2lsbEJlVXNlZGAgY2FsbGJhY2ssIGFuZFxuICAgICAqIGV4ZWN1dGVzIGFueSBvZiB0aG9zZSBjYWxsYmFja3MgZm91bmQgaW4gc2VxdWVuY2UuIFRoZSBmaW5hbCBgUmVxdWVzdGBcbiAgICAgKiBvYmplY3QgcmV0dXJuZWQgYnkgdGhlIGxhc3QgcGx1Z2luIGlzIHRyZWF0ZWQgYXMgdGhlIGNhY2hlIGtleSBmb3IgY2FjaGVcbiAgICAgKiByZWFkcyBhbmQvb3Igd3JpdGVzLiBJZiBubyBgY2FjaGVLZXlXaWxsQmVVc2VkYCBwbHVnaW4gY2FsbGJhY2tzIGhhdmVcbiAgICAgKiBiZWVuIHJlZ2lzdGVyZWQsIHRoZSBwYXNzZWQgcmVxdWVzdCBpcyByZXR1cm5lZCB1bm1vZGlmaWVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVxdWVzdD59XG4gICAgICovXG4gICAgYXN5bmMgZ2V0Q2FjaGVLZXkocmVxdWVzdCwgbW9kZSkge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtyZXF1ZXN0LnVybH0gfCAke21vZGV9YDtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZUtleXNba2V5XSkge1xuICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZVJlcXVlc3QgPSByZXF1ZXN0O1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlS2V5V2lsbEJlVXNlZCcpKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUmVxdWVzdCA9IHRvUmVxdWVzdChhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXJhbXMgaGFzIGEgdHlwZSBhbnkgY2FuJ3QgY2hhbmdlIHJpZ2h0IG5vdy5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1trZXldID0gZWZmZWN0aXZlUmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVLZXlzW2tleV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyYXRlZ3kgaGFzIGF0IGxlYXN0IG9uZSBwbHVnaW4gd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYmFjayB0byBjaGVjayBmb3IuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNDYWxsYmFjayhuYW1lKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3N0cmF0ZWd5LnBsdWdpbnMpIHtcbiAgICAgICAgICAgIGlmIChuYW1lIGluIHBsdWdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUnVucyBhbGwgcGx1Z2luIGNhbGxiYWNrcyBtYXRjaGluZyB0aGUgZ2l2ZW4gbmFtZSwgaW4gb3JkZXIsIHBhc3NpbmcgdGhlXG4gICAgICogZ2l2ZW4gcGFyYW0gb2JqZWN0IChtZXJnZWQgaXRoIHRoZSBjdXJyZW50IHBsdWdpbiBzdGF0ZSkgYXMgdGhlIG9ubHlcbiAgICAgKiBhcmd1bWVudC5cbiAgICAgKlxuICAgICAqIE5vdGU6IHNpbmNlIHRoaXMgbWV0aG9kIHJ1bnMgYWxsIHBsdWdpbnMsIGl0J3Mgbm90IHN1aXRhYmxlIGZvciBjYXNlc1xuICAgICAqIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBjYWxsYmFjayBuZWVkcyB0byBiZSBhcHBsaWVkIHByaW9yIHRvIGNhbGxpbmdcbiAgICAgKiB0aGUgbmV4dCBjYWxsYmFjay4gU2VlXG4gICAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXIjaXRlcmF0ZUNhbGxiYWNrc31cbiAgICAgKiBiZWxvdyBmb3IgaG93IHRvIGhhbmRsZSB0aGF0IGNhc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FsbGJhY2sgdG8gcnVuIHdpdGhpbiBlYWNoIHBsdWdpbi5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gVGhlIG9iamVjdCB0byBwYXNzIGFzIHRoZSBmaXJzdCAoYW5kIG9ubHkpIHBhcmFtXG4gICAgICogICAgIHdoZW4gZXhlY3V0aW5nIGVhY2ggY2FsbGJhY2suIFRoaXMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlXG4gICAgICogICAgIGN1cnJlbnQgcGx1Z2luIHN0YXRlIHByaW9yIHRvIGNhbGxiYWNrIGV4ZWN1dGlvbi5cbiAgICAgKi9cbiAgICBhc3luYyBydW5DYWxsYmFja3MobmFtZSwgcGFyYW0pIHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MobmFtZSkpIHtcbiAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogbm90IHN1cmUgd2h5IGBhbnlgIGlzIG5lZWRlZC4gSXQgc2VlbXMgbGlrZVxuICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgd29yayB3aXRoIGBhcyBXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXWAuXG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayhwYXJhbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWNjZXB0cyBhIGNhbGxiYWNrIGFuZCByZXR1cm5zIGFuIGl0ZXJhYmxlIG9mIG1hdGNoaW5nIHBsdWdpbiBjYWxsYmFja3MsXG4gICAgICogd2hlcmUgZWFjaCBjYWxsYmFjayBpcyB3cmFwcGVkIHdpdGggdGhlIGN1cnJlbnQgaGFuZGxlciBzdGF0ZSAoaS5lLiB3aGVuXG4gICAgICogeW91IGNhbGwgZWFjaCBjYWxsYmFjaywgd2hhdGV2ZXIgb2JqZWN0IHBhcmFtZXRlciB5b3UgcGFzcyBpdCB3aWxsXG4gICAgICogYmUgbWVyZ2VkIHdpdGggdGhlIHBsdWdpbidzIGN1cnJlbnQgc3RhdGUpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgZm8gdGhlIGNhbGxiYWNrIHRvIHJ1blxuICAgICAqIEByZXR1cm4ge0FycmF5PEZ1bmN0aW9uPn1cbiAgICAgKi9cbiAgICAqaXRlcmF0ZUNhbGxiYWNrcyhuYW1lKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3N0cmF0ZWd5LnBsdWdpbnMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGx1Z2luW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9wbHVnaW5TdGF0ZU1hcC5nZXQocGx1Z2luKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZWZ1bENhbGxiYWNrID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlZnVsUGFyYW0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHBhcmFtKSwgeyBzdGF0ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBub3Qgc3VyZSB3aHkgYGFueWAgaXMgbmVlZGVkLiBJdCBzZWVtcyBsaWtlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc2hvdWxkIHdvcmsgd2l0aCBgYXMgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ11gLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luW25hbWVdKHN0YXRlZnVsUGFyYW0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeWllbGQgc3RhdGVmdWxDYWxsYmFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcHJvbWlzZSB0byB0aGVcbiAgICAgKiBbZXh0ZW5kIGxpZmV0aW1lIHByb21pc2VzXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZXh0ZW5kYWJsZWV2ZW50LWV4dGVuZC1saWZldGltZS1wcm9taXNlc31cbiAgICAgKiBvZiB0aGUgZXZlbnQgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXF1ZXN0IGJlaW5nIGhhbmRsZWQgKHVzdWFsbHkgYVxuICAgICAqIGBGZXRjaEV2ZW50YCkuXG4gICAgICpcbiAgICAgKiBOb3RlOiB5b3UgY2FuIGF3YWl0XG4gICAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+ZG9uZVdhaXRpbmd9XG4gICAgICogdG8ga25vdyB3aGVuIGFsbCBhZGRlZCBwcm9taXNlcyBoYXZlIHNldHRsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb21pc2V9IHByb21pc2UgQSBwcm9taXNlIHRvIGFkZCB0byB0aGUgZXh0ZW5kIGxpZmV0aW1lIHByb21pc2VzXG4gICAgICogICAgIG9mIHRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICB3YWl0VW50aWwocHJvbWlzZSkge1xuICAgICAgICB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgYWxsIHByb21pc2VzIHBhc3NlZCB0b1xuICAgICAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfndhaXRVbnRpbH1cbiAgICAgKiBoYXZlIHNldHRsZWQuXG4gICAgICpcbiAgICAgKiBOb3RlOiBhbnkgd29yayBkb25lIGFmdGVyIGBkb25lV2FpdGluZygpYCBzZXR0bGVzIHNob3VsZCBiZSBtYW51YWxseVxuICAgICAqIHBhc3NlZCB0byBhbiBldmVudCdzIGB3YWl0VW50aWwoKWAgbWV0aG9kIChub3QgdGhpcyBoYW5kbGVyJ3NcbiAgICAgKiBgd2FpdFVudGlsKClgIG1ldGhvZCksIG90aGVyd2lzZSB0aGUgc2VydmljZSB3b3JrZXIgdGhyZWFkIG15IGJlIGtpbGxlZFxuICAgICAqIHByaW9yIHRvIHlvdXIgd29yayBjb21wbGV0aW5nLlxuICAgICAqL1xuICAgIGFzeW5jIGRvbmVXYWl0aW5nKCkge1xuICAgICAgICBsZXQgcHJvbWlzZTtcbiAgICAgICAgd2hpbGUgKChwcm9taXNlID0gdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcy5zaGlmdCgpKSkge1xuICAgICAgICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdG9wcyBydW5uaW5nIHRoZSBzdHJhdGVneSBhbmQgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgYW55IHBlbmRpbmdcbiAgICAgKiBgd2FpdFVudGlsKClgIHByb21pc2VzLlxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5yZXNvbHZlKG51bGwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGNhbGwgY2FjaGVXaWxsVXBkYXRlIG9uIHRoZSBhdmFpbGFibGUgcGx1Z2lucyAob3IgdXNlXG4gICAgICogc3RhdHVzID09PSAyMDApIHRvIGRldGVybWluZSBpZiB0aGUgUmVzcG9uc2UgaXMgc2FmZSBhbmQgdmFsaWQgdG8gY2FjaGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlKHJlc3BvbnNlKSB7XG4gICAgICAgIGxldCByZXNwb25zZVRvQ2FjaGUgPSByZXNwb25zZTtcbiAgICAgICAgbGV0IHBsdWdpbnNVc2VkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZVdpbGxVcGRhdGUnKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUb0NhY2hlID1cbiAgICAgICAgICAgICAgICAoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB0aGlzLnJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgICAgIH0pKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBwbHVnaW5zVXNlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghcGx1Z2luc1VzZWQpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUgJiYgcmVzcG9uc2VUb0NhY2hlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUb0NhY2hlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFRoZSByZXNwb25zZSBmb3IgJyR7dGhpcy5yZXF1ZXN0LnVybH0nIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaXMgYW4gb3BhcXVlIHJlc3BvbnNlLiBUaGUgY2FjaGluZyBzdHJhdGVneSB0aGF0IHlvdSdyZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVzaW5nIHdpbGwgbm90IGNhY2hlIG9wYXF1ZSByZXNwb25zZXMgYnkgZGVmYXVsdC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGByZXR1cm5lZCBhIHN0YXR1cyBjb2RlIG9mICcke3Jlc3BvbnNlLnN0YXR1c30nIGFuZCB3b24ndCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGJlIGNhY2hlZCBhcyBhIHJlc3VsdC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VUb0NhY2hlO1xuICAgIH1cbn1cbmV4cG9ydCB7IFN0cmF0ZWd5SGFuZGxlciB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6c3RyYXRlZ2llczo3LjAuMCddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjbGllbnRzQ2xhaW0gfSBmcm9tIFwid29ya2JveC1jb3JlXCI7XHJcbmltcG9ydCB7IHByZWNhY2hlQW5kUm91dGUgfSBmcm9tIFwid29ya2JveC1wcmVjYWNoaW5nXCI7XHJcblxyXG5jbGllbnRzQ2xhaW0oKTtcclxuc2VsZi5za2lwV2FpdGluZygpO1xyXG5cclxucHJlY2FjaGVBbmRSb3V0ZShzZWxmLl9fV0JfTUFOSUZFU1QpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
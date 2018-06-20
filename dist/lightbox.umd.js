/**
 * lightbox - Angular Lightbox
 * @version v1.0.0
 * @author sveguru
 * @link https://github.com/sudeep04/angular.lib.lightbox
 * @license undefined
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/animations"), require("@angular/common"), require("rxjs/BehaviorSubject"), require("rxjs/add/operator/filter"), require("rxjs/add/operator/first"), require("@angular/platform-browser"), require("@angular/platform-browser/animations"), require("rxjs/add/operator/skip"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/animations", "@angular/common", "rxjs/BehaviorSubject", "rxjs/add/operator/filter", "rxjs/add/operator/first", "@angular/platform-browser", "@angular/platform-browser/animations", "rxjs/add/operator/skip"], factory);
	else if(typeof exports === 'object')
		exports["lightbox"] = factory(require("@angular/core"), require("@angular/animations"), require("@angular/common"), require("rxjs/BehaviorSubject"), require("rxjs/add/operator/filter"), require("rxjs/add/operator/first"), require("@angular/platform-browser"), require("@angular/platform-browser/animations"), require("rxjs/add/operator/skip"));
	else
		root["lightbox"] = factory(root["ng"]["core"], root["ng"]["animations"], root["ng"]["common"], root["Rx"], root["Rx"], root["Rx"], root["ng"]["platformBrowser"], root["ng"]["platformBrowserAnimations"], root["Rx"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_54__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var LightboxConfigurationService = /** @class */ (function () {
    function LightboxConfigurationService() {
        this._configuration = {
            controls: {
                toolbar: { position: 'top' },
                back: { icon: 'arrow_back' },
                navigation: { disable: false },
                jumpToStart: { disable: false, icon: 'first_page' },
                backward: { disable: false, icon: 'navigate_before' },
                itemIndex: { disable: false },
                forward: { disable: false, icon: 'navigate_next' },
                jumpToEnd: { disable: false, icon: 'last_page' },
                thumbnails: { disable: false, icon: 'list', position: 'right' },
                zoom: { disable: false },
                zoomIn: { disable: false, icon: 'add' },
                zoomOut: { disable: false, icon: 'remove' },
                feetToWidth: { disable: false, icon: 'zoom_in' },
                resetZoom: { disable: false, icon: 'zoom_out' },
            },
            animations: {
                toolbarShow: { duration: .4 },
                toolbarHide: { duration: .05 },
                backgroundFadeIn: { duration: .4, opacity: .9 },
                backgroundFadeOut: { duration: .05 },
                thumbnailsShow: { duration: .4 },
                thumbnailsHide: { duration: .05 },
                thumbnailsSlice: { duration: .4 },
                zoomShow: { duration: .4 },
                zoomHide: { duration: .05 },
                zoomIn: { duration: .4 },
                zoomOut: { duration: .4 },
                feetToWidth: { duration: .4 },
                resetZoom: { duration: .4 },
                itemSlice: { duration: .4 },
                itemOpen: { duration: .4 },
            }
        };
    }
    Object.defineProperty(LightboxConfigurationService.prototype, "controls", {
        get: function () {
            return this._configuration.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LightboxConfigurationService.prototype, "animations", {
        get: function () {
            return this._configuration.animations;
        },
        enumerable: true,
        configurable: true
    });
    LightboxConfigurationService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], LightboxConfigurationService);
    return LightboxConfigurationService;
}());
exports.LightboxConfigurationService = LightboxConfigurationService;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorSubject_1 = __webpack_require__(7);
var Animator = /** @class */ (function () {
    function Animator() {
        this.animation = { value: 'state1' };
        this._startBehaviorSubject = new BehaviorSubject_1.BehaviorSubject('state1');
        this._doneBehaviorSubject = new BehaviorSubject_1.BehaviorSubject('state1');
    }
    Animator.prototype.animationStart = function (event) {
        this._startBehaviorSubject.next(event.toState);
    };
    Animator.prototype.animationDone = function (event) {
        this._doneBehaviorSubject.next(event.toState);
    };
    Animator.prototype.animate = function (params, startCb, doneCb) {
        var animation = {
            value: this.animation.value === 'state1' ? 'state2' : 'state1',
            params: Object.assign({}, params)
        };
        this.animation = animation;
        if (startCb) {
            this._startBehaviorSubject.filter(function (value) { return value === animation.value; }).first().subscribe(function () {
                startCb();
            });
        }
        if (doneCb) {
            this._doneBehaviorSubject.filter(function (value) { return value === animation.value; }).first().subscribe(function () {
                doneCb();
            });
        }
    };
    return Animator;
}());
exports.Animator = Animator;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dimensions = /** @class */ (function () {
    function Dimensions(width, height) {
        this._height = height;
        this._width = width;
        this._ratio = this._width / this._height;
    }
    Object.defineProperty(Dimensions.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
            this._ratio = this._width / this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
            this._ratio = this._width / this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        enumerable: true,
        configurable: true
    });
    return Dimensions;
}());
exports.Dimensions = Dimensions;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(54);
var doom_service_1 = __webpack_require__(19);
var LightboxService = /** @class */ (function () {
    function LightboxService(_doomService) {
        this._doomService = _doomService;
    }
    LightboxService.prototype.addItem = function (item) {
        this._doomService.lightboxComponentRef.instance.addItem(item);
    };
    LightboxService.prototype.openItem = function (item) {
        this._doomService.lightboxComponentRef.instance.openItem(item);
    };
    LightboxService.prototype.removeItem = function (item) {
        this._doomService.lightboxComponentRef.instance.removeItem(item);
    };
    LightboxService.prototype.onClosed = function (func) {
        this._doomService.lightboxComponentRef.instance.$state.filter(function (state) { return state === 'closed'; }).skip(1).first().subscribe(function () {
            func();
        });
    };
    LightboxService.prototype.onOpening = function (func) {
        this._doomService.lightboxComponentRef.instance.$state.filter(function (state) { return state === 'opening'; }).first().subscribe(function () {
            func();
        });
    };
    LightboxService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [doom_service_1.DoomService])
    ], LightboxService);
    return LightboxService;
}());
exports.LightboxService = LightboxService;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorSubject_1 = __webpack_require__(7);
var Item = /** @class */ (function () {
    function Item() {
        this._dimensionsBehaviorSubject = new BehaviorSubject_1.BehaviorSubject(undefined);
    }
    Object.defineProperty(Item.prototype, "dimensions", {
        get: function () {
            return this._dimensionsBehaviorSubject.getValue();
        },
        set: function (value) {
            this._dimensionsBehaviorSubject.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "$dimensions", {
        get: function () {
            return this._dimensionsBehaviorSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
exports.Item = Item;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵ0 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);

const getWindow = () => window;
const ɵ0 = getWindow;
class YoutubeApiService {
    constructor() {
        this.apiEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hasLoaded = false;
        this._window = getWindow();
    }
    loadApi() {
        if (!this.hasLoaded) {
            const scriptTag = this._window.document.createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.src = 'https://www.youtube.com/iframe_api';
            this._window.document.body.appendChild(scriptTag);
            this._window['onYouTubeIframeAPIReady'] = () => {
                this.apiEmitter.emit();
            };
            this.hasLoaded = true;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = YoutubeApiService;

YoutubeApiService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
YoutubeApiService.ctorParameters = () => [];

//# sourceMappingURL=youtube-api.service.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var BehaviorSubject_1 = __webpack_require__(7);
var lightbox_toolbar_component_1 = __webpack_require__(13);
var lightbox_thumbnails_component_1 = __webpack_require__(14);
var lightbox_zoom_component_1 = __webpack_require__(15);
var lightbox_configuration_service_1 = __webpack_require__(2);
var lightbox_slice_animator_1 = __webpack_require__(47);
var lightbox_animations_1 = __webpack_require__(48);
var background_visibility_animator_1 = __webpack_require__(49);
var dimensions_interface_1 = __webpack_require__(8);
var LightboxComponent = /** @class */ (function () {
    function LightboxComponent(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.pagination = { current: 0, count: 0 };
        this.displayZoom = 'hidden';
        this.displayYoutube = false;
        this.items = {};
        this.state = 'closed';
        this._stateBehaviorSubject = new BehaviorSubject_1.BehaviorSubject('closed');
        this._pointerEvents = 'none';
    }
    Object.defineProperty(LightboxComponent.prototype, "$state", {
        get: function () {
            return this._stateBehaviorSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LightboxComponent.prototype, "config", {
        get: function () {
            return this._lightboxConfigurationService;
        },
        enumerable: true,
        configurable: true
    });
    LightboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lightboxSliceAnimator = new lightbox_slice_animator_1.LightboxSliceAnimator();
        this.backgroundVisibilityAnimator = new background_visibility_animator_1.BackgroundVisibilityAnimator();
        this._stateSubscription = this.$state.subscribe(function (value) {
            _this.state = value;
        });
    };
    LightboxComponent.prototype.ngOnDestroy = function () {
        this._stateSubscription.unsubscribe();
    };
    LightboxComponent.prototype.openItem = function (item) {
        var _this = this;
        if (this.state === 'closed') {
            this.activeItem = item;
            this._pointerEvents = 'auto';
            setTimeout(function () {
                var activeItemIndex = _this._itemIndex(_this.activeItem);
                var activeItemRef = _this._itemRef(activeItemIndex);
                _this.backgroundVisibilityAnimator.show(_this.config.animations.backgroundFadeIn.opacity, _this.config.animations.backgroundFadeIn.duration);
                _this.thumbnails.checkDirection();
                _this.thumbnails.checkThumbnailsDimensions();
                _this._openControls();
                _this._updatePagination();
                _this._initItems();
                _this.lightboxSliceAnimator.slice(-1 * activeItemIndex * 100, 0, function () {
                    activeItemRef.open(_this._getContainerDimensionsAfterOpen(), function () {
                        _this.displayYoutube = false;
                        _this._stateBehaviorSubject.next('opening');
                        _this._checkZoom(activeItemRef);
                    }, function () {
                        _this._checkYoutube(item);
                        _this._stateBehaviorSubject.next('opened');
                    });
                    _this.thumbnails.selectItem(_this.activeItem);
                });
            }, 0);
        }
    };
    LightboxComponent.prototype.getYoutubeVideoId = function () {
        return this.activeItem.youtubeVieoId;
    };
    LightboxComponent.prototype.addItem = function (item) {
        if (!this.items[item.container]) {
            this.items[item.container] = [];
        }
        this.items[item.container].push(item);
    };
    LightboxComponent.prototype.thumbnailsToggle = function () {
        this.thumbnails.toggle();
    };
    LightboxComponent.prototype.removeItem = function (item) {
        var index = this._itemIndex(item);
        if (index > -1) {
            this.items[item.container].splice(index, 1);
        }
    };
    LightboxComponent.prototype.onToggle = function () {
        this.toolbar.toggle();
        this.lightboxZoom.toggle();
        this.thumbnails.toggle();
    };
    LightboxComponent.prototype.onClose = function (event) {
        var _this = this;
        if ((!event || event.target === this.background.nativeElement) && this.state === 'opened') {
            this.activeItem = undefined;
            this._stateBehaviorSubject.next('closing');
            this.displayYoutube = false;
            this.backgroundVisibilityAnimator.hide(this.config.animations.backgroundFadeOut.duration, null, function () {
                _this._pointerEvents = 'none';
                _this._stateBehaviorSubject.next('closed');
            });
            this._closeControls();
            if (this._ytPlayer) {
                this._ytPlayer.stopVideo();
            }
        }
    };
    LightboxComponent.prototype.selectItem = function (item) {
        var _this = this;
        if (item !== this.activeItem) {
            if (this.activeItem) {
                var lastActiveItemIndex = this._itemIndex(this.activeItem);
                var lastActiveItemRef = this._itemRef(lastActiveItemIndex);
                lastActiveItemRef.resetZoom(0);
            }
            this.activeItem = item;
            var activeItemIndex_1 = this._itemIndex(this.activeItem);
            var activeItemRef = this._itemRef(activeItemIndex_1);
            activeItemRef.resetZoom(0, null, function () {
                _this.displayYoutube = false;
            }, function () {
                _this.lightboxSliceAnimator.slice(-1 * activeItemIndex_1 * 100, _this.config.animations.itemSlice.duration, null, function () {
                    _this._checkYoutube(item);
                });
            });
            this._updatePagination();
            this.thumbnails.selectItem(this.activeItem);
            this._checkZoom(activeItemRef);
        }
    };
    LightboxComponent.prototype.onNext = function () {
        var activeItemIndex = this._itemIndex(this.activeItem);
        if (activeItemIndex >= 0 && activeItemIndex < this.items[this.activeItem.container].length - 1) {
            var item = this.items[this.activeItem.container][activeItemIndex + 1];
            this.selectItem(item);
        }
    };
    LightboxComponent.prototype.onLast = function () {
        var activeItemIndex = this._itemIndex(this.activeItem);
        if (activeItemIndex >= 0 && activeItemIndex < this.items[this.activeItem.container].length - 1) {
            var item = this.items[this.activeItem.container][this.items[this.activeItem.container].length - 1];
            this.selectItem(item);
        }
    };
    LightboxComponent.prototype.onFirst = function () {
        var activeItemIndex = this._itemIndex(this.activeItem);
        if (activeItemIndex > 0) {
            var item = this.items[this.activeItem.container][0];
            this.selectItem(item);
        }
    };
    LightboxComponent.prototype.onPrevious = function () {
        var activeItemIndex = this._itemIndex(this.activeItem);
        if (activeItemIndex > 0) {
            var item = this.items[this.activeItem.container][activeItemIndex - 1];
            this.selectItem(item);
        }
    };
    LightboxComponent.prototype.zoomIn = function () {
        var _this = this;
        var activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
        activeItemRef.zoomIn(null, function () {
            _this._checkZoom(activeItemRef);
        });
    };
    LightboxComponent.prototype.zoomOut = function () {
        var _this = this;
        var activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
        activeItemRef.zoomOut(null, function () {
            _this._checkZoom(activeItemRef);
        });
    };
    LightboxComponent.prototype.resetZoom = function () {
        var _this = this;
        var activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
        activeItemRef.resetZoom(this.config.animations.resetZoom.duration, null, function () {
            _this._checkZoom(activeItemRef);
        });
    };
    LightboxComponent.prototype.feetToWidth = function () {
        var _this = this;
        var activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
        activeItemRef.feetToWidth(null, function () {
            _this._checkZoom(activeItemRef);
        });
    };
    LightboxComponent.prototype.swipe = function (action) {
        var itemIndex = this._itemIndex(this.activeItem);
        var itemRef = this._itemRef(itemIndex);
        if (!itemRef.isZoomMin()) {
            return;
        }
        switch (action) {
            case 'swipeleft':
                this.onNext();
                break;
            case 'swiperight':
                this.onPrevious();
                break;
        }
    };
    LightboxComponent.prototype.onReady = function (event) {
        this._ytPlayer = event.target;
    };
    LightboxComponent.prototype.onError = function (event) {
        // on error
    };
    LightboxComponent.prototype.onChange = function (event) {
        switch (event.data) {
            case YT.PlayerState.PLAYING:
                this._closeControls();
                break;
            case YT.PlayerState.PAUSED:
                this._openControls();
                break;
        }
    };
    LightboxComponent.prototype._initItems = function () {
        var _this = this;
        this.items[this.activeItem.container].forEach(function (element) {
            if (element !== _this.activeItem) {
                var elementIndex = _this._itemIndex(element);
                var elementRef = _this._itemRef(elementIndex);
                elementRef.resetZoom(0);
            }
        });
    };
    LightboxComponent.prototype._openControls = function () {
        this.toolbar.open();
        this.lightboxZoom.open();
        this.thumbnails.open();
    };
    LightboxComponent.prototype._closeControls = function () {
        this.toolbar.close();
        this.lightboxZoom.close();
        this.thumbnails.close();
    };
    LightboxComponent.prototype._getContainerDimensionsAfterOpen = function () {
        var containerDimensions;
        if (!this.config.controls.thumbnails.disable) {
            if (this.thumbnails.direction === 'horizontal') {
                containerDimensions = new dimensions_interface_1.Dimensions(this._itemList.nativeElement.clientWidth, this._itemList.nativeElement.clientHeight - this.thumbnails.thickness - 64);
            }
            else {
                containerDimensions = new dimensions_interface_1.Dimensions(this._itemList.nativeElement.clientWidth - this.thumbnails.thickness, this._itemList.nativeElement.clientHeight - 64);
            }
        }
        else {
            containerDimensions = new dimensions_interface_1.Dimensions(this._itemList.nativeElement.clientWidth, this._itemList.nativeElement.clientHeight - 64);
        }
        return containerDimensions;
    };
    LightboxComponent.prototype._updatePagination = function () {
        var activeItemIndex = this._itemIndex(this.activeItem);
        this.pagination.current = activeItemIndex + 1;
        this.pagination.count = this.items[this.activeItem.container].length;
    };
    LightboxComponent.prototype._checkYoutube = function (item) {
        var _this = this;
        setTimeout(function () {
            if (item !== _this.activeItem) {
                _this.displayYoutube = false;
            }
            else {
                if (item.isVideo) {
                    _this.displayYoutube = true;
                }
                else {
                    _this.displayYoutube = false;
                }
            }
        }, 0);
    };
    LightboxComponent.prototype._itemRef = function (index) {
        return this._itemsRef.toArray()[index];
    };
    LightboxComponent.prototype._itemIndex = function (item) {
        return this.items[item.container].indexOf(item);
    };
    LightboxComponent.prototype._onResize = function (event) {
        if (this.activeItem) {
            var activeItemRef = this._itemRef(this._itemIndex(this.activeItem));
            if (!this.activeItem.isVideo) {
                activeItemRef.resize();
            }
            this._checkZoom(activeItemRef);
            this.thumbnails.resize();
        }
    };
    LightboxComponent.prototype._checkZoom = function (item) {
        if (this.activeItem.isVideo) {
            this.displayZoom = 'hidden';
        }
        else {
            this.displayZoom = 'visible';
        }
        this.disableZoomIn = item.isZoomMax();
        this.disableZoomOut = item.isZoomMin();
        this.disableResetZoom = item.isZoomMin();
        this.disableFeetToWidth = item.isFeetToWidth();
    };
    tslib_1.__decorate([
        core_1.ViewChild('background'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('toolbar'),
        tslib_1.__metadata("design:type", lightbox_toolbar_component_1.LightboxToolbarComponent)
    ], LightboxComponent.prototype, "toolbar", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('thumbnails'),
        tslib_1.__metadata("design:type", lightbox_thumbnails_component_1.LightboxThumbnailsComponent)
    ], LightboxComponent.prototype, "thumbnails", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('lightboxZoom'),
        tslib_1.__metadata("design:type", lightbox_zoom_component_1.LightboxZoomComponent)
    ], LightboxComponent.prototype, "lightboxZoom", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('itemList'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_itemList", void 0);
    tslib_1.__decorate([
        core_1.ViewChildren('lightboxItem'),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], LightboxComponent.prototype, "_itemsRef", void 0);
    tslib_1.__decorate([
        core_1.HostListener('window:resize', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LightboxComponent.prototype, "_onResize", null);
    LightboxComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'lightbox',
            template: __webpack_require__(50),
            styles: [__webpack_require__(51)],
            animations: [lightbox_animations_1.LightboxAnimations.visibilityAnimation, lightbox_animations_1.LightboxAnimations.sliceAnimation],
            host: {
                '[style.pointer-events]': '_pointerEvents',
            },
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [lightbox_configuration_service_1.LightboxConfigurationService])
    ], LightboxComponent);
    return LightboxComponent;
}());
exports.LightboxComponent = LightboxComponent;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var lightbox_configuration_service_1 = __webpack_require__(2);
var toolbar_animations_1 = __webpack_require__(31);
var toolbar_visibility_animator_1 = __webpack_require__(32);
var LightboxToolbarComponent = /** @class */ (function () {
    function LightboxToolbarComponent(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.nextEvent = new core_1.EventEmitter();
        this.previousEvent = new core_1.EventEmitter();
        this.firstEvent = new core_1.EventEmitter();
        this.lastEvent = new core_1.EventEmitter();
        this.closeEvent = new core_1.EventEmitter();
        this.thumbnailsToggleEvent = new core_1.EventEmitter();
        this._state = 'closed';
    }
    Object.defineProperty(LightboxToolbarComponent.prototype, "config", {
        get: function () {
            return this._lightboxConfigurationService;
        },
        enumerable: true,
        configurable: true
    });
    LightboxToolbarComponent.prototype.ngOnInit = function () {
        this.toolbarVisibilityAnimator = new toolbar_visibility_animator_1.ToolbarVisibilityAnimator();
    };
    LightboxToolbarComponent.prototype.onNext = function () {
        this.nextEvent.emit();
    };
    LightboxToolbarComponent.prototype.onPrevious = function () {
        this.previousEvent.emit();
    };
    LightboxToolbarComponent.prototype.onFirst = function () {
        this.firstEvent.emit();
    };
    LightboxToolbarComponent.prototype.onLast = function () {
        this.lastEvent.emit();
    };
    LightboxToolbarComponent.prototype.onClose = function () {
        this.closeEvent.emit();
    };
    LightboxToolbarComponent.prototype.onThumbnailsToggle = function () {
        this.thumbnailsToggleEvent.emit();
    };
    LightboxToolbarComponent.prototype.open = function () {
        if (this._state !== 'opened') {
            this._state = 'opened';
            this.toolbarVisibilityAnimator.show(this.config.animations.toolbarShow.duration);
        }
    };
    LightboxToolbarComponent.prototype.close = function () {
        if (this._state !== 'closed') {
            this._state = 'closed';
            this.toolbarVisibilityAnimator.hide(this.config.animations.toolbarHide.duration);
        }
    };
    LightboxToolbarComponent.prototype.toggle = function () {
        if (this._state === 'opened') {
            this.close();
        }
        else {
            this.open();
        }
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxToolbarComponent.prototype, "nextEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxToolbarComponent.prototype, "previousEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxToolbarComponent.prototype, "firstEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxToolbarComponent.prototype, "lastEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxToolbarComponent.prototype, "closeEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxToolbarComponent.prototype, "thumbnailsToggleEvent", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], LightboxToolbarComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxToolbarComponent.prototype, "pagination", void 0);
    LightboxToolbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'lightbox-toolbar',
            template: __webpack_require__(33),
            styles: [__webpack_require__(34)],
            animations: [toolbar_animations_1.ToolbarAnimations.visibilityAnimation],
            host: {
                '[@toolbarVisibility]': 'toolbarVisibilityAnimator.animation',
                '(@toolbarVisibility.start)': 'toolbarVisibilityAnimator.animationStart($event)',
                '(@toolbarVisibility.done)': 'toolbarVisibilityAnimator.animationDone($event)'
            }
        }),
        tslib_1.__metadata("design:paramtypes", [lightbox_configuration_service_1.LightboxConfigurationService])
    ], LightboxToolbarComponent);
    return LightboxToolbarComponent;
}());
exports.LightboxToolbarComponent = LightboxToolbarComponent;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var lightbox_configuration_service_1 = __webpack_require__(2);
var thumbnails_animations_1 = __webpack_require__(36);
var thumbnails_visibility_animator_1 = __webpack_require__(37);
var thumbnails_slice_animator_1 = __webpack_require__(38);
exports.WINDOW = new core_1.InjectionToken('Window');
function _window() { return window; }
exports._window = _window;
var LightboxThumbnailsComponent = /** @class */ (function () {
    function LightboxThumbnailsComponent(_lightboxConfigurationService, _win) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this._win = _win;
        this.items = [];
        this.selectEvent = new core_1.EventEmitter();
        this._state = 'closed';
    }
    LightboxThumbnailsComponent.prototype.ngOnInit = function () {
        if (this._win.innerWidth <= 767) {
            this.thickness = 80;
        }
        else if (this._win.innerWidth <= 1023) {
            this.thickness = 120;
        }
        else if (this._win.innerWidth > 1023) {
            this.thickness = 170;
        }
        this.checkThumbnailsDimensions();
        this.thumbnailsVisibilityAnimator = new thumbnails_visibility_animator_1.ThumbnailsVisibilityAnimator(this.direction, this.thickness);
        this.thumbnailsSliceAnimator = new thumbnails_slice_animator_1.ThumbnailsSliceAnimator(this.direction);
    };
    Object.defineProperty(LightboxThumbnailsComponent.prototype, "direction", {
        get: function () {
            return this.config.controls.thumbnails.position === 'left' || this.config.controls.thumbnails.position === 'right' ? 'vertical' : 'horizontal';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LightboxThumbnailsComponent.prototype, "config", {
        get: function () {
            return this._lightboxConfigurationService;
        },
        enumerable: true,
        configurable: true
    });
    LightboxThumbnailsComponent.prototype.open = function () {
        if (!this.config.controls.thumbnails.disable && this._state !== 'opened') {
            this._state = 'opened';
            this.thumbnailsVisibilityAnimator.show(this.config.animations.thumbnailsShow.duration, null, null);
        }
    };
    LightboxThumbnailsComponent.prototype.close = function () {
        if (!this.config.controls.thumbnails.disable && this._state !== 'closed') {
            this._state = 'closed';
            this.thumbnailsVisibilityAnimator.hide(this.config.animations.thumbnailsHide.duration, null, null);
        }
    };
    LightboxThumbnailsComponent.prototype.toggle = function () {
        if (!this.config.controls.thumbnails.disable) {
            if (this._state === 'opened') {
                this.close();
            }
            else {
                this.open();
            }
        }
    };
    LightboxThumbnailsComponent.prototype.resize = function () {
        var _this = this;
        if (this._win.innerWidth <= 767 && this.thickness !== 80) {
            this.thickness = 80;
            this._refreshThickness();
        }
        else if (this._win.innerWidth <= 1023 && this._win.innerWidth > 767 && this.thickness !== 120) {
            this.thickness = 120;
            this._refreshThickness();
        }
        else if (this._win.innerWidth > 1023 && this.thickness !== 170) {
            this.thickness = 170;
            this._refreshThickness();
        }
        setTimeout(function () {
            _this._animateSlice(_this.activeItem, 0);
        }, 0);
    };
    LightboxThumbnailsComponent.prototype.onTap = function (item) {
        if (item !== this.activeItem) {
            this.selectEvent.emit(item);
        }
    };
    LightboxThumbnailsComponent.prototype.selectItem = function (item) {
        if (!this.config.controls.thumbnails.disable) {
            this.activeItem = item;
            this._animateSlice(this.activeItem, this.config.animations.itemSlice.duration);
        }
    };
    LightboxThumbnailsComponent.prototype.onWheel = function (event) {
        var top = this._thumnailsListRef.nativeElement.offsetTop - 12;
        if (event.deltaY > 0) {
            top -= 50;
        }
        else {
            top += 50;
        }
        top = this._getTop(top);
        this._thumnailsListRef.nativeElement.style.top = top + 'px';
        this.thumbnailsSliceAnimator.animation.params.top = top;
    };
    LightboxThumbnailsComponent.prototype.onSwipe = function (event) {
        if ((event.type === 'swipeleft' || event.type === 'swiperight') && this.direction === 'horizontal') {
            var left = this._thumnailsListRef.nativeElement.offsetLeft - 12;
            left += event.deltaX;
            this.thumbnailsSliceAnimator.slice(this._getLeft(left), this.config.animations.thumbnailsSlice.duration);
        }
        if ((event.type === 'swipeup' || event.type === 'swipedown') && this.direction === 'vertical') {
            var top_1 = this._thumnailsListRef.nativeElement.offsetTop - 12;
            top_1 += event.deltaY;
            this.thumbnailsSliceAnimator.slice(this._getTop(top_1), this.config.animations.thumbnailsSlice.duration);
        }
    };
    LightboxThumbnailsComponent.prototype.getItemSrc = function (item) {
        if (item.src) {
            return item.src;
        }
        if (item.xsSrc) {
            return item.xsSrc;
        }
        if (item.smSrc) {
            return item.smSrc;
        }
        if (item.mdSrc) {
            return item.mdSrc;
        }
        if (item.lgSrc) {
            return item.lgSrc;
        }
        if (item.xlSrc) {
            return item.xlSrc;
        }
        return '';
    };
    LightboxThumbnailsComponent.prototype.checkDirection = function () {
        if (this.direction === 'vertical') {
            this.thumbnailsSliceAnimator.setDirection('vertical');
            this.thumbnailsVisibilityAnimator.setDirection('vertical');
        }
        else {
            this.thumbnailsSliceAnimator.setDirection('horizontal');
            this.thumbnailsVisibilityAnimator.setDirection('horizontal');
        }
    };
    LightboxThumbnailsComponent.prototype.checkThumbnailsDimensions = function () {
        if (this.direction === 'vertical') {
            this.thumbnailsWidth = this.thickness + 'px';
            this.thumbnailsHeight = 'auto';
        }
        else {
            this.thumbnailsWidth = 'auto';
            this.thumbnailsHeight = this.thickness + 'px';
        }
    };
    LightboxThumbnailsComponent.prototype._refreshThickness = function () {
        this.thumbnailsVisibilityAnimator.setThickness(0, this.thickness);
        this.checkThumbnailsDimensions();
    };
    LightboxThumbnailsComponent.prototype._animateSlice = function (item, duration) {
        var activeItemRef = this._thumnailsRef.toArray()[this.items.indexOf(item)];
        if (this.direction === 'horizontal') {
            var left = Math.round(((this._thumnailsContainerRef.nativeElement.clientWidth - activeItemRef.nativeElement.clientWidth) / 2) - activeItemRef.nativeElement.offsetLeft);
            this.thumbnailsSliceAnimator.slice(this._getLeft(left), duration);
        }
        else {
            var top_2 = Math.round(((this._thumnailsContainerRef.nativeElement.clientHeight - activeItemRef.nativeElement.clientHeight) / 2) - activeItemRef.nativeElement.offsetTop);
            this.thumbnailsSliceAnimator.slice(this._getTop(top_2), duration);
        }
    };
    LightboxThumbnailsComponent.prototype._getTop = function (value) {
        var top = value;
        if (top < (this._thumnailsContainerRef.nativeElement.clientHeight - this._thumnailsListRef.nativeElement.clientHeight + 12)) {
            top = this._thumnailsContainerRef.nativeElement.clientHeight - this._thumnailsListRef.nativeElement.clientHeight + 12;
        }
        if (top > 0) {
            top = 0;
        }
        return top;
    };
    LightboxThumbnailsComponent.prototype._getLeft = function (value) {
        var left = value;
        if (left < (this._thumnailsContainerRef.nativeElement.clientWidth - this._thumnailsListRef.nativeElement.clientWidth + 12)) {
            left = this._thumnailsContainerRef.nativeElement.clientWidth - this._thumnailsListRef.nativeElement.clientWidth + 12;
        }
        if (left > 0) {
            left = 0;
        }
        return left;
    };
    tslib_1.__decorate([
        core_1.Input('items'),
        tslib_1.__metadata("design:type", Array)
    ], LightboxThumbnailsComponent.prototype, "items", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxThumbnailsComponent.prototype, "selectEvent", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('thumnailsContainer'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LightboxThumbnailsComponent.prototype, "_thumnailsContainerRef", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('thumnailsList'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LightboxThumbnailsComponent.prototype, "_thumnailsListRef", void 0);
    tslib_1.__decorate([
        core_1.ViewChildren('thumnails'),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], LightboxThumbnailsComponent.prototype, "_thumnailsRef", void 0);
    LightboxThumbnailsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'lightbox-thumbnails',
            template: __webpack_require__(39),
            styles: [__webpack_require__(40)],
            animations: [thumbnails_animations_1.ThumbnailsAnimations.visibilityAnimation, thumbnails_animations_1.ThumbnailsAnimations.sliceAnimation],
            providers: [
                { provide: exports.WINDOW, useFactory: _window }
            ],
            host: {
                '[@thumbnailsVisibility]': 'thumbnailsVisibilityAnimator.animation',
                '(@thumbnailsVisibility.start)': 'thumbnailsVisibilityAnimator.animationStart($event)',
                '(@thumbnailsVisibility.done)': 'thumbnailsVisibilityAnimator.animationDone($event)'
            }
        }),
        tslib_1.__param(1, core_1.Inject(exports.WINDOW)),
        tslib_1.__metadata("design:paramtypes", [lightbox_configuration_service_1.LightboxConfigurationService, Object])
    ], LightboxThumbnailsComponent);
    return LightboxThumbnailsComponent;
}());
exports.LightboxThumbnailsComponent = LightboxThumbnailsComponent;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var lightbox_configuration_service_1 = __webpack_require__(2);
var zoom_animations_1 = __webpack_require__(42);
var zoom_visibility_animator_1 = __webpack_require__(43);
var LightboxZoomComponent = /** @class */ (function () {
    function LightboxZoomComponent(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.zoomInEvent = new core_1.EventEmitter();
        this.zoomOutEvent = new core_1.EventEmitter();
        this.resetZoomEvent = new core_1.EventEmitter();
        this.feetToWidthEvent = new core_1.EventEmitter();
        this._state = 'closed';
    }
    Object.defineProperty(LightboxZoomComponent.prototype, "config", {
        get: function () {
            return this._lightboxConfigurationService;
        },
        enumerable: true,
        configurable: true
    });
    LightboxZoomComponent.prototype.ngOnInit = function () {
        this.zoomVisibilityAnimator = new zoom_visibility_animator_1.ZoomVisibilityAnimator();
    };
    LightboxZoomComponent.prototype.close = function () {
        if (!this.config.controls.zoom.disable && this._state !== 'closed') {
            this._state = 'closed';
            this.zoomVisibilityAnimator.hide(this.config.animations.toolbarHide.duration);
        }
    };
    LightboxZoomComponent.prototype.open = function () {
        if (!this.config.controls.zoom.disable && this._state !== 'opened') {
            this._state = 'opened';
            this.zoomVisibilityAnimator.show(this.config.animations.zoomShow.duration);
        }
    };
    LightboxZoomComponent.prototype.toggle = function () {
        if (!this.config.controls.zoom.disable) {
            if (this._state === 'opened') {
                this.close();
            }
            else {
                this.open();
            }
        }
    };
    LightboxZoomComponent.prototype.onZoomIn = function () {
        if (!this.disableZoomIn) {
            this.zoomInEvent.emit();
        }
    };
    LightboxZoomComponent.prototype.onZoomOut = function () {
        if (!this.disableZoomOut) {
            this.zoomOutEvent.emit();
        }
    };
    LightboxZoomComponent.prototype.onResetZoom = function () {
        if (!this.disableResetZoom) {
            this.resetZoomEvent.emit();
        }
    };
    LightboxZoomComponent.prototype.onFeetToWidth = function () {
        if (!this.disableFeetToWidth) {
            this.feetToWidthEvent.emit();
        }
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxZoomComponent.prototype, "zoomInEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxZoomComponent.prototype, "zoomOutEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxZoomComponent.prototype, "resetZoomEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxZoomComponent.prototype, "feetToWidthEvent", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LightboxZoomComponent.prototype, "disableZoomIn", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LightboxZoomComponent.prototype, "disableZoomOut", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LightboxZoomComponent.prototype, "disableResetZoom", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LightboxZoomComponent.prototype, "disableFeetToWidth", void 0);
    LightboxZoomComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'lightbox-zoom',
            template: __webpack_require__(44),
            styles: [__webpack_require__(45)],
            animations: [zoom_animations_1.ZoomAnimations.visibilityAnimation],
            host: {
                '[@zoomVisibility]': 'zoomVisibilityAnimator.animation',
                '(@zoomVisibility.start)': 'zoomVisibilityAnimator.animationStart($event)',
                '(@zoomVisibility.done)': 'zoomVisibilityAnimator.animationDone($event)'
            }
        }),
        tslib_1.__metadata("design:paramtypes", [lightbox_configuration_service_1.LightboxConfigurationService])
    ], LightboxZoomComponent);
    return LightboxZoomComponent;
}());
exports.LightboxZoomComponent = LightboxZoomComponent;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var dimensions_interface_1 = __webpack_require__(8);
var ItemDirectiveBase = /** @class */ (function () {
    function ItemDirectiveBase(lightboxService, elementRef) {
        this.lightboxService = lightboxService;
        this.elementRef = elementRef;
        this.cursor = 'pointer';
        this._loaded = false;
    }
    ItemDirectiveBase.prototype.onClick = function (event) {
        var _this = this;
        if (this._loaded) {
            this.lightboxService.onOpening(function () {
                _this.visibility = 'hidden';
            });
            this.item.position = {
                offsetTop: Math.round(this.elementRef.nativeElement.getBoundingClientRect().top),
                offsetLeft: Math.round(this.elementRef.nativeElement.getBoundingClientRect().left)
            };
            this.item.dimensions = new dimensions_interface_1.Dimensions(this.elementRef.nativeElement.clientWidth, this.elementRef.nativeElement.clientHeight);
            this.lightboxService.openItem(this.item);
            this.lightboxService.onClosed(function () {
                _this.visibility = 'visible';
            });
        }
    };
    ItemDirectiveBase.prototype.onLoad = function (event) {
        this._loaded = true;
        if (!this.item.dimensions) {
            this.item.dimensions = new dimensions_interface_1.Dimensions(this.elementRef.nativeElement.naturalWidth, this.elementRef.nativeElement.naturalHeight);
        }
    };
    tslib_1.__decorate([
        core_1.Input('container'),
        tslib_1.__metadata("design:type", String)
    ], ItemDirectiveBase.prototype, "container", void 0);
    tslib_1.__decorate([
        core_1.Input('src'),
        tslib_1.__metadata("design:type", String)
    ], ItemDirectiveBase.prototype, "src", void 0);
    tslib_1.__decorate([
        core_1.Input('title'),
        tslib_1.__metadata("design:type", String)
    ], ItemDirectiveBase.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input('xs-breakpoint'),
        tslib_1.__metadata("design:type", Number)
    ], ItemDirectiveBase.prototype, "xsBreakpoint", void 0);
    tslib_1.__decorate([
        core_1.Input('sm-breakpoint'),
        tslib_1.__metadata("design:type", Number)
    ], ItemDirectiveBase.prototype, "smBreakpoint", void 0);
    tslib_1.__decorate([
        core_1.Input('md-breakpoint'),
        tslib_1.__metadata("design:type", Number)
    ], ItemDirectiveBase.prototype, "mdBreakpoint", void 0);
    tslib_1.__decorate([
        core_1.Input('lg-breakpoint'),
        tslib_1.__metadata("design:type", Number)
    ], ItemDirectiveBase.prototype, "lgBreakpoint", void 0);
    tslib_1.__decorate([
        core_1.Input('xs-src'),
        tslib_1.__metadata("design:type", String)
    ], ItemDirectiveBase.prototype, "xsSrc", void 0);
    tslib_1.__decorate([
        core_1.Input('sm-src'),
        tslib_1.__metadata("design:type", String)
    ], ItemDirectiveBase.prototype, "smSrc", void 0);
    tslib_1.__decorate([
        core_1.Input('md-src'),
        tslib_1.__metadata("design:type", String)
    ], ItemDirectiveBase.prototype, "mdSrc", void 0);
    tslib_1.__decorate([
        core_1.Input('lg-src'),
        tslib_1.__metadata("design:type", String)
    ], ItemDirectiveBase.prototype, "lgSrc", void 0);
    tslib_1.__decorate([
        core_1.Input('xl-src'),
        tslib_1.__metadata("design:type", String)
    ], ItemDirectiveBase.prototype, "xlSrc", void 0);
    return ItemDirectiveBase;
}());
exports.ItemDirectiveBase = ItemDirectiveBase;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(6);
var lightbox_component_1 = __webpack_require__(12);
var DoomService = /** @class */ (function () {
    function DoomService(_appRef, _componentFactoryResolver, _injector, _document) {
        this._appRef = _appRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this._document = _document;
        this._lightboxComponentRef = this._componentFactoryResolver
            .resolveComponentFactory(lightbox_component_1.LightboxComponent)
            .create(this._injector);
        this._lightboxComponentRef.changeDetectorRef.detectChanges();
        this._appRef.attachView(this._lightboxComponentRef.hostView);
        var domElement = this._lightboxComponentRef.hostView
            .rootNodes[0];
        var container = this._document.createElement('div');
        container.classList.add('lightbox-overlay-container');
        this._document.body.appendChild(container);
        container.appendChild(domElement);
    }
    Object.defineProperty(DoomService.prototype, "lightboxComponentRef", {
        get: function () {
            return this._lightboxComponentRef;
        },
        enumerable: true,
        configurable: true
    });
    DoomService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(3, core_1.Inject(common_1.DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [core_1.ApplicationRef,
            core_1.ComponentFactoryResolver,
            core_1.Injector, Object])
    ], DoomService);
    return DoomService;
}());
exports.DoomService = DoomService;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var item_1 = __webpack_require__(10);
var Video = /** @class */ (function (_super) {
    tslib_1.__extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Video;
}(item_1.Item));
exports.Video = Video;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);

class DoomSensorService {
    constructor() {
        this._trackedItems = [];
        this._testList = () => {
            this._trackedItems.forEach((item) => {
                this._testItem(item);
            });
        };
        this._trackInterval = setInterval(this._testList, 100);
    }
    track(nativeElement, trackedProperties, callBack) {
        if (this._trackedItems.find((item) => item.nativeElement === nativeElement)) {
            throw new Error('Duplicate tracked element');
        }
        if (trackedProperties.width || trackedProperties.height || trackedProperties.top || trackedProperties.left) {
            const trackedItem = {
                nativeElement,
                lastState: this._getState(nativeElement, trackedProperties),
                trackedProperties,
                callBack
            };
            this._trackedItems.push(trackedItem);
        }
    }
    untrack(nativeElement) {
        const trackedItem = this._trackedItems.find((item) => item.nativeElement === nativeElement);
        if (!trackedItem) {
            throw new Error('tracked item not found');
        }
        const index = this._trackedItems.indexOf(trackedItem);
        this._trackedItems.splice(index, 1);
    }
    _testItem(trackedItem) {
        const currentState = this._getState(trackedItem.nativeElement, trackedItem.trackedProperties);
        if (trackedItem.lastState.width !== currentState.width ||
            trackedItem.lastState.height !== currentState.height ||
            trackedItem.lastState.top !== currentState.top ||
            trackedItem.lastState.left !== currentState.left) {
            trackedItem.lastState = currentState;
            trackedItem.callBack();
        }
    }
    _getState(nativeElement, trackedProperties) {
        const trackedItemState = {};
        if (trackedProperties.width) {
            trackedItemState.width = nativeElement.clientWidth;
        }
        if (trackedProperties.height) {
            trackedItemState.height = nativeElement.clientHeight;
        }
        if (trackedProperties.top) {
            trackedItemState.top = Math.round(nativeElement.getBoundingClientRect().top);
        }
        if (trackedProperties.left) {
            trackedItemState.left = Math.round(nativeElement.getBoundingClientRect().left);
        }
        return trackedItemState;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DoomSensorService;

DoomSensorService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
DoomSensorService.ctorParameters = () => [];
//# sourceMappingURL=doom-sensor.service.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵ0 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__youtube_api_service__ = __webpack_require__(11);


const getWindow = () => window;
const ɵ0 = getWindow;
class YoutubePlayerService {
    constructor(zone, youtubeApi) {
        this.zone = zone;
        this.youtubeApi = youtubeApi;
        this._window = getWindow();
    }
    initialise(playerId, config) {
        if (!this._player) {
            if (this._window['YT'] === undefined) {
                this.youtubeApi.apiEmitter.subscribe(() => this.zone.run(() => {
                    this._newPlayer(playerId, config);
                }));
            }
            else {
                this.zone.run(() => this._newPlayer(playerId, config));
            }
        }
    }
    _newPlayer(playerId, config) {
        return this._player = new YT.Player(playerId, config);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = YoutubePlayerService;

YoutubePlayerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
YoutubePlayerService.ctorParameters = () => [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__youtube_api_service__["a" /* YoutubeApiService */], },
];

//# sourceMappingURL=youtube-player.service.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lightbox_module_1 = __webpack_require__(25);
exports.LightboxModule = lightbox_module_1.LightboxModule;
var lightbox_configuration_service_1 = __webpack_require__(2);
exports.LightboxConfigurationService = lightbox_configuration_service_1.LightboxConfigurationService;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(6);
var animations_1 = __webpack_require__(26);
var lightbox_button_component_1 = __webpack_require__(27);
var lightbox_component_1 = __webpack_require__(12);
var lightbox_toolbar_component_1 = __webpack_require__(13);
var lightbox_img_directive_1 = __webpack_require__(53);
var lightbox_video_directive_1 = __webpack_require__(56);
var lightbox_item_component_1 = __webpack_require__(57);
var lightbox_zoom_component_1 = __webpack_require__(15);
var lightbox_thumbnails_component_1 = __webpack_require__(14);
var lightbox_service_1 = __webpack_require__(9);
var doom_service_1 = __webpack_require__(19);
var lightbox_configuration_service_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(21);
var HammerConfig_1 = __webpack_require__(63);
var lazy_loading_1 = __webpack_require__(64);
var youtube_1 = __webpack_require__(67);
var LightboxModule = /** @class */ (function () {
    function LightboxModule() {
    }
    LightboxModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                lightbox_button_component_1.LightboxButtonComponent,
                lightbox_component_1.LightboxComponent,
                lightbox_toolbar_component_1.LightboxToolbarComponent,
                lightbox_img_directive_1.LightboxImgDirective,
                lightbox_video_directive_1.LightboxVideoDirective,
                lightbox_item_component_1.LightboxItemComponent,
                lightbox_zoom_component_1.LightboxZoomComponent,
                lightbox_thumbnails_component_1.LightboxThumbnailsComponent
            ],
            imports: [
                common_1.CommonModule,
                animations_1.BrowserAnimationsModule,
                lazy_loading_1.LazyLoadingModule,
                youtube_1.YoutubeModule
            ],
            exports: [
                lightbox_img_directive_1.LightboxImgDirective,
                lightbox_video_directive_1.LightboxVideoDirective
            ],
            providers: [
                {
                    provide: platform_browser_1.HAMMER_GESTURE_CONFIG,
                    useClass: HammerConfig_1.HammerConfig
                },
                lightbox_service_1.LightboxService,
                doom_service_1.DoomService,
                lightbox_configuration_service_1.LightboxConfigurationService
            ],
            entryComponents: [lightbox_component_1.LightboxComponent]
        })
    ], LightboxModule);
    return LightboxModule;
}());
exports.LightboxModule = LightboxModule;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var animations_1 = __webpack_require__(4);
var BUTTON_HOST_ATTRIBUTES = [
    'lightbox-button',
    'lightbox-icon-button'
];
var LightboxButtonComponent = /** @class */ (function () {
    function LightboxButtonComponent(_elementRef) {
        this._elementRef = _elementRef;
        this.disable = false;
        this.hoverAnimation = 'leave';
        this._isIconButton = this._hasHostAttributes('lightbox-icon-button');
        for (var _i = 0, BUTTON_HOST_ATTRIBUTES_1 = BUTTON_HOST_ATTRIBUTES; _i < BUTTON_HOST_ATTRIBUTES_1.length; _i++) {
            var attr = BUTTON_HOST_ATTRIBUTES_1[_i];
            if (this._hasHostAttributes(attr)) {
                _elementRef.nativeElement.classList.add(attr);
            }
        }
    }
    LightboxButtonComponent.prototype.ngOnChanges = function () {
        if (this.disable) {
            this._elementRef.nativeElement.classList.add('disable');
            if (this.hoverAnimation === 'enter') {
                this.hoverAnimation = 'leave';
            }
        }
        else {
            if (this._elementRef.nativeElement.classList.contains('disable')) {
                this._elementRef.nativeElement.classList.remove('disable');
            }
        }
    };
    LightboxButtonComponent.prototype._onMouseEnter = function () {
        if (!this.disable) {
            this.hoverAnimation = 'enter';
        }
    };
    LightboxButtonComponent.prototype._onMouseLeave = function () {
        this.hoverAnimation = 'leave';
    };
    LightboxButtonComponent.prototype._getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    LightboxButtonComponent.prototype._hasHostAttributes = function () {
        var _this = this;
        var attributes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attributes[_i] = arguments[_i];
        }
        return attributes.some(function (attribute) { return _this._getHostElement().hasAttribute(attribute); });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LightboxButtonComponent.prototype, "disable", void 0);
    LightboxButtonComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'button[lightbox-button], button[lightbox-icon-button]',
            template: __webpack_require__(28),
            styles: [__webpack_require__(29)],
            animations: [
                animations_1.trigger('hoverAnimation', [
                    animations_1.state('enter', animations_1.style({ backgroundColor: 'rgba(255, 255, 255, 0.3)' })),
                    animations_1.state('leave', animations_1.style({ backgroundColor: 'rgba(255, 255, 255, 0)' })),
                    animations_1.transition('leave => enter', [
                        animations_1.animate('.1s')
                    ]),
                    animations_1.transition('enter => leave', [
                        animations_1.animate('.1s')
                    ])
                ])
            ],
            host: {
                '(mouseenter)': '_onMouseEnter()',
                '(mouseleave)': '_onMouseLeave()'
            }
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
    ], LightboxButtonComponent);
    return LightboxButtonComponent;
}());
exports.LightboxButtonComponent = LightboxButtonComponent;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-focus-overlay\" [@hoverAnimation]=\"hoverAnimation\">\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(30);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ":host {\n  color: inherit;\n  border: none;\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  position: relative;\n  background-color: transparent;\n  padding: 0px;\n  outline: none; }\n  :host .button-focus-overlay {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    pointer-events: none;\n    border-radius: 50%;\n    padding: 8px; }\n\n:host.disable {\n  opacity: .5;\n  cursor: default; }\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__(4);
exports.ToolbarAnimations = {
    visibilityAnimation: animations_1.trigger('toolbarVisibility', [
        animations_1.state('state1', animations_1.style({ height: '{{height}}px' }), { params: { height: 0 } }),
        animations_1.state('state2', animations_1.style({ height: '{{height}}px' }), { params: { height: 0 } }),
        animations_1.transition('* => *', [
            animations_1.animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Animator_1 = __webpack_require__(3);
var ToolbarVisibilityAnimator = /** @class */ (function (_super) {
    tslib_1.__extends(ToolbarVisibilityAnimator, _super);
    function ToolbarVisibilityAnimator() {
        return _super.call(this) || this;
    }
    ToolbarVisibilityAnimator.prototype.show = function (duration, startCb, doneCb) {
        var params = {
            height: 64,
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    ToolbarVisibilityAnimator.prototype.hide = function (duration, startCb, doneCb) {
        var params = {
            height: 0,
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    return ToolbarVisibilityAnimator;
}(Animator_1.Animator));
exports.ToolbarVisibilityAnimator = ToolbarVisibilityAnimator;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-container\">\r\n    <div>\r\n        <button lightbox-icon-button (tap)=\"onClose()\" title=\"Close\">\r\n            <span class=\"material-icons\">{{config.controls.back.icon}}</span>\r\n        </button>\r\n        <span class=\"toolbar-title\">{{title}}</span>\r\n    </div>\r\n    <div class=\"nav-menu\">\r\n        <button *ngIf=\"!config.controls.navigation.disable && !config.controls.jumpToStart.disable\" lightbox-icon-button [disable]=\"pagination.current===1\" (tap)=\"onFirst()\" title=\"First\">\r\n            <span class=\"material-icons\">{{config.controls.jumpToStart.icon}}</span>\r\n        </button>\r\n        <button *ngIf=\"!config.controls.navigation.disable && !config.controls.backward.disable\" lightbox-icon-button [disable]=\"pagination.current===1\" (tap)=\"onPrevious()\" title=\"Previous\">\r\n            <span class=\"material-icons\">{{config.controls.backward.icon}}</span>\r\n        </button>\r\n        <span *ngIf=\"!config.controls.navigation.disable && !config.controls.itemIndex.disable\" class=\"nav-pagination\">{{pagination?.current}} / {{pagination?.count}}</span>\r\n        <button *ngIf=\"!config.controls.navigation.disable && !config.controls.forward.disable\" lightbox-icon-button [disable]=\"pagination.current===pagination.count\" (tap)=\"onNext()\" title=\"Next\">\r\n            <span class=\"material-icons\">{{config.controls.forward.icon}}</span>\r\n        </button>\r\n        <button *ngIf=\"!config.controls.navigation.disable && !config.controls.jumpToEnd.disable\" lightbox-icon-button [disable]=\"pagination.current===pagination.count\" (tap)=\"onLast()\" title=\"Last\">\r\n            <span class=\"material-icons\">{{config.controls.jumpToEnd.icon}}</span>\r\n        </button>\r\n    </div>\r\n    <div>\r\n        <button *ngIf=\"!config.controls.thumbnails.disable\" lightbox-icon-button (tap)=\"onThumbnailsToggle()\" title=\"List\">\r\n            <span class=\"material-icons\">{{config.controls.thumbnails.icon}}</span>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(35);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: relative;\n  overflow: hidden; }\n  :host .toolbar-container {\n    background-color: #000;\n    color: #fff;\n    height: 64px;\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n    position: absolute;\n    z-index: 3;\n    bottom: 0px;\n    width: 100%; }\n    :host .toolbar-container > div {\n      display: flex;\n      align-items: center; }\n    :host .toolbar-container > div:first-child {\n      flex: 1 1 0%;\n      justify-content: flex-start;\n      overflow: hidden;\n      padding-left: 12px; }\n    :host .toolbar-container .nav-menu {\n      flex: 0 0 auto;\n      padding: 0 12px; }\n      :host .toolbar-container .nav-menu .nav-pagination {\n        margin: 0 12px; }\n    :host .toolbar-container > div:last-child {\n      flex: 1 1 0%;\n      justify-content: flex-end;\n      padding-right: 12px; }\n    :host .toolbar-container .toolbar-title {\n      overflow: hidden;\n      margin-left: 12px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      max-width: calc(100% - 52px); }\n    @media (max-width: 479px) {\n      :host .toolbar-container .toolbar-title {\n        display: none; } }\n    @media (max-width: 359px) {\n      :host .toolbar-container > div:last-child {\n        display: none; } }\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__(4);
exports.ThumbnailsAnimations = {
    visibilityAnimation: animations_1.trigger('thumbnailsVisibility', [
        animations_1.state('state1', animations_1.style({ maxWidth: '{{maxWidth}}', maxHeight: '{{maxHeight}}' }), { params: { maxWidth: '0px', maxHeight: '0px' } }),
        animations_1.state('state2', animations_1.style({ maxWidth: '{{maxWidth}}', maxHeight: '{{maxHeight}}' }), { params: { maxWidth: '0px', maxHeight: '0px' } }),
        animations_1.transition('* => *', [
            animations_1.animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ]),
    sliceAnimation: animations_1.trigger('thumbnailsSlice', [
        animations_1.state('state1', animations_1.style({ top: '{{top}}px', left: '{{left}}px' }), { params: { top: 0, left: 0 } }),
        animations_1.state('state2', animations_1.style({ top: '{{top}}px', left: '{{left}}px' }), { params: { top: 0, left: 0 } }),
        animations_1.transition('* => *', [
            animations_1.animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Animator_1 = __webpack_require__(3);
var ThumbnailsVisibilityAnimator = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbnailsVisibilityAnimator, _super);
    function ThumbnailsVisibilityAnimator(direction, thickness) {
        var _this = _super.call(this) || this;
        _this._thickness = thickness;
        _this.setDirection(direction);
        return _this;
    }
    ThumbnailsVisibilityAnimator.prototype.setDirection = function (direction) {
        this._direction = direction;
        var params = {
            maxHeight: direction === 'horizontal' ? '0px' : '100%',
            maxWidth: direction === 'horizontal' ? '100%' : '0px',
            duration: 0
        };
        this.animate(params, null, null);
    };
    ThumbnailsVisibilityAnimator.prototype.setThickness = function (duration, thickness) {
        this._thickness = thickness;
        var params = {
            maxHeight: this._direction === 'horizontal' ? (this.animation.params.maxHeight === '0px' ? '0px' : thickness + 'px') : '100%',
            maxWidth: this._direction === 'horizontal' ? '100%' : (this.animation.params.maxWidth === '0px' ? '0px' : thickness + 'px'),
            duration: duration
        };
        this.animate(params, null, null);
    };
    ThumbnailsVisibilityAnimator.prototype.hide = function (duration, startCb, doneCb) {
        var params = {
            maxHeight: this._direction === 'horizontal' ? '0px' : '100%',
            maxWidth: this._direction === 'horizontal' ? '100%' : '0px',
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    ThumbnailsVisibilityAnimator.prototype.show = function (duration, startCb, doneCb) {
        var params = {
            maxHeight: this._direction === 'horizontal' ? this._thickness + 'px' : '100%',
            maxWidth: this._direction === 'horizontal' ? '100%' : this._thickness + 'px',
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    return ThumbnailsVisibilityAnimator;
}(Animator_1.Animator));
exports.ThumbnailsVisibilityAnimator = ThumbnailsVisibilityAnimator;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Animator_1 = __webpack_require__(3);
var ThumbnailsSliceAnimator = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbnailsSliceAnimator, _super);
    function ThumbnailsSliceAnimator(direction) {
        var _this = _super.call(this) || this;
        _this.setDirection(direction);
        return _this;
    }
    ThumbnailsSliceAnimator.prototype.setDirection = function (direction) {
        this._direction = direction;
        var params = {
            top: direction === 'horizontal' ? 0 : 0,
            left: direction === 'horizontal' ? 0 : 0,
            duration: 0
        };
        this.animate(params, null, null);
    };
    ThumbnailsSliceAnimator.prototype.slice = function (offset, duration, startCb, doneCb) {
        var params = {
            top: this._direction === 'horizontal' ? 0 : offset,
            left: this._direction === 'horizontal' ? offset : 0,
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    return ThumbnailsSliceAnimator;
}(Animator_1.Animator));
exports.ThumbnailsSliceAnimator = ThumbnailsSliceAnimator;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div #thumnailsContainer\r\n    (swipeleft)=\"onSwipe($event)\"\r\n    (swiperight)=\"onSwipe($event)\"\r\n    (swipeup)=\"onSwipe($event)\"\r\n    (swipedown)=\"onSwipe($event)\"\r\n    (wheel)=\"onWheel($event)\"\r\n    class=\"thumbnail-container\">\r\n\r\n    <div #thumnailsList\r\n    [@thumbnailsSlice]=\"thumbnailsSliceAnimator.animation\"\r\n    (@thumbnailsSlice.start)=\"thumbnailsSliceAnimator.animationStart($event)\"\r\n    (@thumbnailsSlice.done)=\"thumbnailsSliceAnimator.animationDone($event)\">\r\n        \r\n        <div #thumnails *ngFor=\"let item of items\"\r\n            (tap)=\"onTap(item)\"\r\n            [style.width]=\"thumbnailsWidth\"\r\n            [style.height]=\"thumbnailsHeight\"\r\n            [ngClass]=\"{'active': item === activeItem}\"\r\n            class=\"thumbnail\">\r\n\r\n            <img [src]=\"getItemSrc(item)\" title=\"{{item.title}}\"/>\r\n\r\n        </div><!-- END THUMNAILS -->\r\n\r\n    </div><!-- END THUMNAILS LIST -->\r\n\r\n</div><!-- END THUMNAILS CONTAINER -->\r\n\r\n"

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(41);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: #222;\n  flex: 1 1 0%;\n  box-sizing: border-box;\n  z-index: 2;\n  position: relative; }\n  :host .thumbnail-container {\n    overflow: hidden; }\n    :host .thumbnail-container > div {\n      display: inline-block;\n      position: relative; }\n    :host .thumbnail-container .thumbnail {\n      display: inline-block;\n      cursor: pointer; }\n      :host .thumbnail-container .thumbnail img {\n        display: block;\n        pointer-events: none; }\n    :host .thumbnail-container .thumbnail.active img {\n      cursor: default; }\n  @media (max-width: 359px) {\n    :host {\n      display: none; } }\n\n:host.vertical-thumbnails .thumbnail-container {\n  margin: 12px 0;\n  margin-bottom: 0px;\n  height: calc(100% - 24px); }\n  :host.vertical-thumbnails .thumbnail-container > div {\n    flex-direction: column; }\n  :host.vertical-thumbnails .thumbnail-container .thumbnail {\n    margin-bottom: 12px; }\n    :host.vertical-thumbnails .thumbnail-container .thumbnail img {\n      width: calc(100% - 24px);\n      margin-left: 12px;\n      margin-right: 12px; }\n  :host.vertical-thumbnails .thumbnail-container .thumbnail.active img {\n    width: calc(100% - 12px);\n    margin-left: 6px;\n    margin-right: 6px; }\n\n:host.horizontal-thumbnails .thumbnail-container {\n  height: 100%;\n  margin: 0px 12px;\n  margin-right: 0px;\n  width: calc(100% - 24px); }\n  :host.horizontal-thumbnails .thumbnail-container > div {\n    height: 100%;\n    white-space: nowrap; }\n  :host.horizontal-thumbnails .thumbnail-container .thumbnail {\n    margin-right: 12px; }\n    :host.horizontal-thumbnails .thumbnail-container .thumbnail img {\n      height: calc(100% - 24px);\n      margin-top: 12px;\n      margin-bottom: 12px; }\n  :host.horizontal-thumbnails .thumbnail-container .thumbnail.active img {\n    height: calc(100% - 12px);\n    margin-top: 6px;\n    margin-bottom: 6px; }\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__(4);
exports.ZoomAnimations = {
    visibilityAnimation: animations_1.trigger('zoomVisibility', [
        animations_1.state('state1', animations_1.style({ height: '{{height}}px' }), { params: { height: 0 } }),
        animations_1.state('state2', animations_1.style({ height: '{{height}}px' }), { params: { height: 0 } }),
        animations_1.transition('* => *', [
            animations_1.animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Animator_1 = __webpack_require__(3);
var ZoomVisibilityAnimator = /** @class */ (function (_super) {
    tslib_1.__extends(ZoomVisibilityAnimator, _super);
    function ZoomVisibilityAnimator() {
        return _super.call(this) || this;
    }
    ZoomVisibilityAnimator.prototype.show = function (duration, startCb, doneCb) {
        var params = {
            height: 64,
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    ZoomVisibilityAnimator.prototype.hide = function (duration, startCb, doneCb) {
        var params = {
            height: 0,
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    return ZoomVisibilityAnimator;
}(Animator_1.Animator));
exports.ZoomVisibilityAnimator = ZoomVisibilityAnimator;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!config.controls.zoom.disable\">\r\n    <button *ngIf=\"!config.controls.zoomOut.disable\" [disable]=\"disableZoomOut\" lightbox-icon-button (tap)=\"onZoomOut()\" title=\"Zoom out\">\r\n        <span class=\"material-icons\">{{config.controls.zoomOut.icon}}</span>\r\n    </button>\r\n    <button *ngIf=\"!config.controls.resetZoom.disable\" [disable]=\"disableResetZoom\" lightbox-icon-button (tap)=\"onResetZoom()\" title=\"Reset zoom\">\r\n        <span class=\"material-icons\">{{config.controls.resetZoom.icon}}</span>\r\n    </button>\r\n    <button *ngIf=\"!config.controls.feetToWidth.disable\" [disable]=\"disableFeetToWidth\" lightbox-icon-button (tap)=\"onFeetToWidth()\" title=\"Feet to width\">\r\n        <span class=\"material-icons\">{{config.controls.feetToWidth.icon}}</span>\r\n    </button>\r\n    <button *ngIf=\"!config.controls.zoomIn.disable\" [disable]=\"disableZoomIn\" lightbox-icon-button (tap)=\"onZoomIn()\" title=\"Zoom in\">\r\n        <span class=\"material-icons\">{{config.controls.zoomIn.icon}}</span>\r\n    </button>\r\n</div>\r\n\r\n"

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(46);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ":host {\n  color: #fff;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n  pointer-events: none;\n  overflow: hidden;\n  bottom: 12px; }\n  :host > div {\n    background-color: #000;\n    pointer-events: auto;\n    padding: 3px;\n    height: 40px;\n    width: auto;\n    border-radius: 3px;\n    display: flex; }\n  :host button {\n    background-color: #000; }\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Animator_1 = __webpack_require__(3);
var LightboxSliceAnimator = /** @class */ (function (_super) {
    tslib_1.__extends(LightboxSliceAnimator, _super);
    function LightboxSliceAnimator() {
        return _super.call(this) || this;
    }
    LightboxSliceAnimator.prototype.slice = function (offset, duration, startCb, doneCb) {
        var params = {
            left: offset,
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    return LightboxSliceAnimator;
}(Animator_1.Animator));
exports.LightboxSliceAnimator = LightboxSliceAnimator;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__(4);
exports.LightboxAnimations = {
    visibilityAnimation: animations_1.trigger('backgroundVisibility', [
        animations_1.state('state1', animations_1.style({ opacity: '{{opacity}}' }), { params: { opacity: 0 } }),
        animations_1.state('state2', animations_1.style({ opacity: '{{opacity}}' }), { params: { opacity: 0 } }),
        animations_1.transition('* => *', [
            animations_1.animate('{{duration}}s'),
        ], { params: { duration: 0 } }),
    ]),
    sliceAnimation: animations_1.trigger('lightboxSlice', [
        animations_1.state('state1', animations_1.style({ left: '{{left}}%' }), { params: { left: 0 } }),
        animations_1.state('state2', animations_1.style({ left: '{{left}}%' }), { params: { left: 0 } }),
        animations_1.transition('* => *', [
            animations_1.animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Animator_1 = __webpack_require__(3);
var BackgroundVisibilityAnimator = /** @class */ (function (_super) {
    tslib_1.__extends(BackgroundVisibilityAnimator, _super);
    function BackgroundVisibilityAnimator() {
        return _super.call(this) || this;
    }
    BackgroundVisibilityAnimator.prototype.hide = function (duration, startCb, doneCb) {
        var params = {
            opacity: 0,
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    BackgroundVisibilityAnimator.prototype.show = function (opacity, duration, startCb, doneCb) {
        var params = {
            opacity: opacity,
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    return BackgroundVisibilityAnimator;
}(Animator_1.Animator));
exports.BackgroundVisibilityAnimator = BackgroundVisibilityAnimator;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<div class=\"lightbox-background\"\r\n    [@backgroundVisibility]=\"backgroundVisibilityAnimator.animation\"\r\n    (@backgroundVisibility.start)=\"backgroundVisibilityAnimator.animationStart($event)\"\r\n    (@backgroundVisibility.done)=\"backgroundVisibilityAnimator.animationDone($event)\">\r\n</div>\r\n\r\n<lightbox-toolbar #toolbar\r\n    [ngStyle]=\"{'order': config.controls.toolbar.position === 'top' ? 1 : 2 }\"\r\n    [pagination]=\"pagination\"\r\n    [title]=\"activeItem?.title\"\r\n    (closeEvent)=\"onClose($event)\"\r\n    (firstEvent)=\"onFirst()\"\r\n    (previousEvent)=\"onPrevious()\"\r\n    (nextEvent)=\"onNext()\"\r\n    (lastEvent)=\"onLast()\"\r\n    (thumbnailsToggleEvent)=\"thumbnailsToggle()\">\r\n</lightbox-toolbar>\r\n\r\n<div class=\"lightbox-container\"\r\n    [ngStyle]=\"{'order': config.controls.toolbar.position === 'bottom' ? 1 : 2 }\"\r\n    [ngClass]=\"{'vertical-container': config.controls.thumbnails.position === 'left' || config.controls.thumbnails.position === 'right', 'horizontal-container': config.controls.thumbnails.position === 'top' || config.controls.thumbnails.position === 'bottom'}\">\r\n    \r\n    <div class=\"lightbox-items-container\"\r\n        [ngStyle]=\"{'order': config.controls.thumbnails.position === 'bottom' || config.controls.thumbnails.position === 'right' ? 1 : 2 }\">\r\n        \r\n        <div #background \r\n            [ngStyle]=\"{'visibility': state === 'closed' || state === 'closing' ? 'hidden' : 'visible' }\" \r\n            (tap)=\"onClose($event)\" \r\n            (swipeleft)=\"swipe($event.type)\" \r\n            (swiperight)=\"swipe($event.type)\" \r\n            class=\"lightbox-items-background\">\r\n\r\n            <div *ngIf=\"activeItem\" class=\"item-list\" #itemList\r\n                [@lightboxSlice]=\"lightboxSliceAnimator.animation\"\r\n                (@lightboxSlice.start)=\"lightboxSliceAnimator.animationStart($event)\"\r\n                (@lightboxSlice.done)=\"lightboxSliceAnimator.animationDone($event)\">\r\n                <lightbox-item (toggleEvent)=\"onToggle()\" #lightboxItem *ngFor=\"let item of items[activeItem.container]\" [item]=\"item\">\r\n                </lightbox-item>\r\n            </div>\r\n        </div>\r\n\r\n        <lightbox-zoom #lightboxZoom\r\n            [style.visibility]=\"displayZoom\"\r\n            [disableZoomIn]=\"disableZoomIn\"\r\n            [disableZoomOut]=\"disableZoomOut\"\r\n            [disableResetZoom]=\"disableResetZoom\"\r\n            [disableFeetToWidth]=\"disableFeetToWidth\"\r\n            (zoomInEvent)=\"zoomIn()\"\r\n            (zoomOutEvent)=\"zoomOut()\"\r\n            (resetZoomEvent)=\"resetZoom()\"\r\n            (feetToWidthEvent)=\"feetToWidth()\">\r\n        </lightbox-zoom>\r\n\r\n        <youtube\r\n            [ngStyle]=\"{'visibility': displayYoutube ? 'visible' : 'hidden' }\" \r\n            [videoId]=\"activeItem? getYoutubeVideoId() : undefined\"\r\n             (ready)=\"onReady($event)\"\r\n            (change)=\"onChange($event)\"\r\n            (error)=\"onError($event)\">\r\n        </youtube>\r\n\r\n    </div>\r\n    <lightbox-thumbnails [ngClass]=\"{'vertical-thumbnails': config.controls.thumbnails.position === 'left' || config.controls.thumbnails.position === 'right', 'horizontal-thumbnails': config.controls.thumbnails.position === 'top' || config.controls.thumbnails.position === 'bottom'}\" #thumbnails [items]=\"activeItem? items[activeItem.container]:[]\" (selectEvent)=\"selectItem($event)\"\r\n    [ngStyle]=\"{'order': config.controls.thumbnails.position === 'top' || config.controls.thumbnails.position === 'left' ? 1 : 2 }\">\r\n    </lightbox-thumbnails>\r\n</div>\r\n"

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(52);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "lightbox {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n  lightbox .lightbox-background,\n  lightbox .lightbox-items-background {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    z-index: 1; }\n    lightbox .lightbox-background .item-list,\n    lightbox .lightbox-items-background .item-list {\n      position: relative;\n      height: 100%;\n      display: flex; }\n  lightbox .lightbox-container {\n    display: flex;\n    flex: 1 1 0%;\n    position: relative;\n    overflow: hidden; }\n  lightbox .lightbox-items-container {\n    flex: 1 1 0%;\n    box-sizing: border-box;\n    height: 100%;\n    position: relative; }\n\n.lightbox-overlay-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 10000;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px; }\n\nlightbox .lightbox-container.vertical-container {\n  flex-direction: row; }\n\nlightbox .lightbox-container.horizontal-container {\n  flex-direction: column; }\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var item_directive_base_1 = __webpack_require__(16);
var lightbox_service_1 = __webpack_require__(9);
var img_1 = __webpack_require__(55);
var LightboxImgDirective = /** @class */ (function (_super) {
    tslib_1.__extends(LightboxImgDirective, _super);
    function LightboxImgDirective(_lightboxService, _elementRef) {
        var _this = _super.call(this, _lightboxService, _elementRef) || this;
        _this._lightboxService = _lightboxService;
        _this._elementRef = _elementRef;
        return _this;
    }
    LightboxImgDirective.prototype.ngOnInit = function () {
        if (!this.container) {
            throw new Error("Attribute 'lightbox-container' is required");
        }
        if (!this.title) {
            throw new Error("Attribute 'lightbox-title' is required");
        }
        var item = new img_1.Img();
        item.title = this.title;
        item.container = this.container;
        item.src = this.src;
        item.xsSrc = this.xsSrc;
        item.smSrc = this.smSrc;
        item.mdSrc = this.mdSrc;
        item.lgSrc = this.lgSrc;
        item.xlSrc = this.xlSrc;
        item.xsBreakpoint = this.xsBreakpoint;
        item.smBreakpoint = this.smBreakpoint;
        item.mdBreakpoint = this.mdBreakpoint;
        item.lgBreakpoint = this.mdBreakpoint;
        item.isVideo = false;
        this.item = item;
        this._lightboxService.addItem(this.item);
    };
    LightboxImgDirective.prototype.ngOnDestroy = function () {
        this.lightboxService.removeItem(this.item);
    };
    LightboxImgDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: 'img[lightbox-img]',
            host: {
                '[style.cursor]': 'cursor',
                '[style.visibility]': 'visibility',
                '(tap)': 'onClick($event)',
                '(load)': 'onLoad($event)'
            }
        }),
        tslib_1.__metadata("design:paramtypes", [lightbox_service_1.LightboxService,
            core_1.ElementRef])
    ], LightboxImgDirective);
    return LightboxImgDirective;
}(item_directive_base_1.ItemDirectiveBase));
exports.LightboxImgDirective = LightboxImgDirective;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var item_1 = __webpack_require__(10);
var Img = /** @class */ (function (_super) {
    tslib_1.__extends(Img, _super);
    function Img() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Img;
}(item_1.Item));
exports.Img = Img;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var item_directive_base_1 = __webpack_require__(16);
var lightbox_service_1 = __webpack_require__(9);
var video_1 = __webpack_require__(20);
var LightboxVideoDirective = /** @class */ (function (_super) {
    tslib_1.__extends(LightboxVideoDirective, _super);
    function LightboxVideoDirective(_lightboxService, _elementRef) {
        var _this = _super.call(this, _lightboxService, _elementRef) || this;
        _this._lightboxService = _lightboxService;
        _this._elementRef = _elementRef;
        return _this;
    }
    LightboxVideoDirective.prototype.ngOnInit = function () {
        if (!this.container) {
            throw new Error("Attribute 'lightbox-container' is required");
        }
        if (!this.title) {
            throw new Error("Attribute 'lightbox-title' is required");
        }
        if (!this.youtubeId) {
            throw new Error("Attribute 'youtube-id' is required");
        }
        var item = new video_1.Video();
        item.title = this.title;
        item.container = this.container;
        item.youtubeVieoId = this.youtubeId;
        item.src = this.src;
        item.xsSrc = this.xsSrc;
        item.smSrc = this.smSrc;
        item.mdSrc = this.mdSrc;
        item.lgSrc = this.lgSrc;
        item.xlSrc = this.xlSrc;
        item.xsBreakpoint = this.xsBreakpoint;
        item.smBreakpoint = this.smBreakpoint;
        item.mdBreakpoint = this.mdBreakpoint;
        item.lgBreakpoint = this.mdBreakpoint;
        item.isVideo = true;
        this.item = item;
        this._lightboxService.addItem(this.item);
    };
    LightboxVideoDirective.prototype.ngOnDestroy = function () {
        this.lightboxService.removeItem(this.item);
    };
    tslib_1.__decorate([
        core_1.Input('youtube-id'),
        tslib_1.__metadata("design:type", String)
    ], LightboxVideoDirective.prototype, "youtubeId", void 0);
    LightboxVideoDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: 'img[lightbox-video]',
            host: {
                '[style.cursor]': 'cursor',
                '[style.visibility]': 'visibility',
                '(tap)': 'onClick($event)',
                '(load)': 'onLoad($event)'
            }
        }),
        tslib_1.__metadata("design:paramtypes", [lightbox_service_1.LightboxService,
            core_1.ElementRef])
    ], LightboxVideoDirective);
    return LightboxVideoDirective;
}(item_directive_base_1.ItemDirectiveBase));
exports.LightboxVideoDirective = LightboxVideoDirective;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var item_1 = __webpack_require__(10);
var lightbox_configuration_service_1 = __webpack_require__(2);
var video_1 = __webpack_require__(20);
var lightbox_item_animations_1 = __webpack_require__(58);
var lightbox_item_zoom_animator_1 = __webpack_require__(59);
var dimensions_interface_1 = __webpack_require__(8);
var ZOOM_PERCENT = 10;
var ZOOM_MAX_AFTER_WIDTH = 3;
var LightboxItemComponent = /** @class */ (function () {
    function LightboxItemComponent(_elementRef, config) {
        this._elementRef = _elementRef;
        this.config = config;
        this.toggleEvent = new core_1.EventEmitter();
        this._dragging = false;
        this._zoomMax = 100 + ZOOM_MAX_AFTER_WIDTH * ZOOM_PERCENT;
    }
    LightboxItemComponent.prototype.ngOnInit = function () {
        this.lightboxItemZoomAnimator = new lightbox_item_zoom_animator_1.LightboxItemZoomAnimator();
        this.item.isVideo = this.item instanceof video_1.Video;
        this.lightboxItemZoomAnimator.animation = { value: 'state1' };
    };
    LightboxItemComponent.prototype.open = function (containerDimensions, startCb, doneCb) {
        var _this = this;
        if (this.item.dimensions) {
            var width = 100 - ZOOM_PERCENT;
            while (containerDimensions.width * (width / 100) / this.item.dimensions.ratio > containerDimensions.height * 9 / 10) {
                width -= ZOOM_PERCENT;
            }
            this._zoomMin = width;
            this._currentZoom = width;
            this.lightboxItemZoomAnimator.origin(this.item.dimensions, this.item.position, this._getContainerDimensions(), startCb, function () {
                _this.resetZoom(_this.config.animations.itemOpen.duration, containerDimensions, null, doneCb);
            });
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    };
    LightboxItemComponent.prototype.resetZoom = function (duration, containerDimensions, startCb, doneCb) {
        var _this = this;
        if (this.item.dimensions) {
            if (containerDimensions) {
                var width = 100 - ZOOM_PERCENT;
                while (containerDimensions.width * (width / 100) / this.item.dimensions.ratio > containerDimensions.height * 9 / 10) {
                    width -= ZOOM_PERCENT;
                }
                this._zoomMin = width;
                this._currentZoom = width;
                this.lightboxItemZoomAnimator.zoom(width, this.item.dimensions, this._getItemDimensions(), containerDimensions, duration, startCb, doneCb);
            }
            else {
                var width = 100 - ZOOM_PERCENT;
                while (this._getContainerDimensions().width * (width / 100) / this.item.dimensions.ratio > this._getContainerDimensions().height * 9 / 10) {
                    width -= ZOOM_PERCENT;
                }
                this._zoomMin = width;
                this._currentZoom = width;
                this.lightboxItemZoomAnimator.zoom(width, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), duration, startCb, doneCb);
            }
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
            this.item.$dimensions.filter(function (value) { return value !== undefined; }).first().subscribe(function () {
                _this.resetZoom(0);
            });
        }
    };
    LightboxItemComponent.prototype.zoomIn = function (startCb, doneCb) {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(this._currentZoom + ZOOM_PERCENT, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom += ZOOM_PERCENT;
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    };
    LightboxItemComponent.prototype.zoomOut = function (startCb, doneCb) {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(this._currentZoom - ZOOM_PERCENT, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom -= ZOOM_PERCENT;
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    };
    LightboxItemComponent.prototype.feetToWidth = function (startCb, doneCb) {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(100, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom = 100;
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    };
    LightboxItemComponent.prototype.onClick = function (event) {
        if (!this.item.isVideo) {
            this.toggleEvent.emit();
        }
    };
    LightboxItemComponent.prototype.isFeetToWidth = function () {
        return this._currentZoom === 100;
    };
    LightboxItemComponent.prototype.isZoomMin = function () {
        return this._currentZoom <= this._zoomMin;
    };
    LightboxItemComponent.prototype.isZoomMax = function () {
        return this._currentZoom >= this._zoomMax;
    };
    LightboxItemComponent.prototype.onDrag = function (event) {
        if (!this._dragging) {
            if (this._currentZoom === this._zoomMin || (this._elementRef.nativeElement.clientWidth >=
                this._img.nativeElement.clientWidth && this._elementRef.nativeElement.clientHeight >= this._img.nativeElement.clientHeight)) {
                return;
            }
            this._img.nativeElement.style.cursor = 'move';
            this._dragPosition = {
                startX: event.deltaX,
                startY: event.deltaY
            };
        }
        else {
            if (this._elementRef.nativeElement.clientWidth >= this._img.nativeElement.clientWidth) {
                this._dragPosition.endX = 0;
            }
            else {
                this._dragPosition.endX = this.lightboxItemZoomAnimator.animation.params.offsetLeft - this._dragPosition.startX + event.deltaX;
                if (this._dragPosition.endX > (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2) {
                    this._dragPosition.endX = (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2;
                }
                if (this._dragPosition.endX < -1 * (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2) {
                    this._dragPosition.endX = -1 * (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2;
                }
            }
            if (this._elementRef.nativeElement.clientHeight >= this._img.nativeElement.clientHeight) {
                this._dragPosition.endY = 0;
            }
            else {
                this._dragPosition.endY = this.lightboxItemZoomAnimator.animation.params.offsetTop - this._dragPosition.startY + event.deltaY;
                if (this._dragPosition.endY > (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2) {
                    this._dragPosition.endY = (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2;
                }
                if (this._dragPosition.endY < -1 * (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2) {
                    this._dragPosition.endY = -1 * (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2;
                }
            }
            this._img.nativeElement.parentNode.style.left = this._dragPosition.endX + 'px';
            this._img.nativeElement.parentNode.style.top = this._dragPosition.endY + 'px';
        }
        if (event.isFinal) {
            this.lightboxItemZoomAnimator.animation.params.offsetLeft = this._dragPosition.endX;
            this.lightboxItemZoomAnimator.animation.params.offsetTop = this._dragPosition.endY;
            this._img.nativeElement.style.cursor = 'default';
            this._dragging = false;
        }
        else {
            this._dragging = true;
        }
    };
    LightboxItemComponent.prototype.onLoad = function (event) {
        if (!this.item.dimensions) {
            this.item.dimensions = new dimensions_interface_1.Dimensions(this._img.nativeElement.naturalWidth, this._img.nativeElement.naturalHeight);
        }
    };
    LightboxItemComponent.prototype.getDefaultSrc = function () {
        if (this.item.src) {
            return this.item.src;
        }
        if (this.item.xsSrc) {
            return this.item.xsSrc;
        }
        if (this.item.smSrc) {
            return this.item.smSrc;
        }
        if (this.item.mdSrc) {
            return this.item.mdSrc;
        }
        if (this.item.lgSrc) {
            return this.item.lgSrc;
        }
        if (this.item.xlSrc) {
            return this.item.xlSrc;
        }
    };
    LightboxItemComponent.prototype.resize = function () {
        if (this.isZoomMin()) {
            this.resetZoom(0);
        }
        else {
            this.lightboxItemZoomAnimator.zoom(this._currentZoom, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration);
        }
    };
    LightboxItemComponent.prototype._getContainerDimensions = function () {
        return new dimensions_interface_1.Dimensions(this._elementRef.nativeElement.clientWidth, this._elementRef.nativeElement.clientHeight);
    };
    LightboxItemComponent.prototype._getItemDimensions = function () {
        return new dimensions_interface_1.Dimensions(this._img.nativeElement.clientWidth, this._img.nativeElement.clientHeight);
    };
    tslib_1.__decorate([
        core_1.Input('item'),
        tslib_1.__metadata("design:type", item_1.Item)
    ], LightboxItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LightboxItemComponent.prototype, "toggleEvent", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('img'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LightboxItemComponent.prototype, "_img", void 0);
    LightboxItemComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'lightbox-item',
            template: __webpack_require__(60),
            styles: [__webpack_require__(61)],
            animations: [lightbox_item_animations_1.LightboxItemAnimations.zoomAnimation]
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
            lightbox_configuration_service_1.LightboxConfigurationService])
    ], LightboxItemComponent);
    return LightboxItemComponent;
}());
exports.LightboxItemComponent = LightboxItemComponent;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__(4);
exports.LightboxItemAnimations = {
    zoomAnimation: animations_1.trigger('lightboxItemZoom', [
        animations_1.state('state1', animations_1.style({ top: '{{offsetTop}}px', left: '{{offsetLeft}}px', width: '{{width}}%', height: 'auto' }), { params: { offsetLeft: 0, offsetTop: 0, width: 0 } }),
        animations_1.state('state2', animations_1.style({ top: '{{offsetTop}}px', left: '{{offsetLeft}}px', width: '{{width}}%', height: 'auto' }), { params: { offsetLeft: 0, offsetTop: 0, width: 0 } }),
        animations_1.transition('* => *', [
            animations_1.animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Animator_1 = __webpack_require__(3);
var ZOOM_PERCENT = 10;
var LightboxItemZoomAnimator = /** @class */ (function (_super) {
    tslib_1.__extends(LightboxItemZoomAnimator, _super);
    function LightboxItemZoomAnimator() {
        return _super.call(this) || this;
    }
    LightboxItemZoomAnimator.prototype.origin = function (itemOriginalDimensions, itemOriginalPosition, containerDimensions, startCb, doneCb) {
        var offsetLeft = Math.round(itemOriginalPosition.offsetLeft + (itemOriginalDimensions.width - containerDimensions.width) / 2);
        var offsetTop = Math.round(itemOriginalPosition.offsetTop + (itemOriginalDimensions.height - containerDimensions.height) / 2);
        var params = {
            width: Math.round(itemOriginalDimensions.width * 100 / containerDimensions.width),
            offsetTop: offsetTop,
            offsetLeft: offsetLeft,
            duration: 0
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    LightboxItemZoomAnimator.prototype.zoom = function (width, itemOriginalDimensions, itemDimensions, containerDimensions, duration, startCb, doneCb) {
        var params = {
            width: width,
            offsetLeft: this.animation.params ? this._getZoomOffsetLeft(itemDimensions, containerDimensions, this.animation.params.offsetLeft, itemOriginalDimensions.width * width / 100) : 0,
            offsetTop: this.animation.params ? this._getZoomOffsetTop(itemDimensions, containerDimensions, this.animation.params.offsetTop, itemOriginalDimensions.height * width / 100) : 0,
            duration: duration
        };
        this.animate(params, function () {
            if (startCb) {
                startCb();
            }
        }, function () {
            if (doneCb) {
                doneCb();
            }
        });
    };
    LightboxItemZoomAnimator.prototype._getZoomOffsetLeft = function (itemDimensions, containerDimensions, offset, width) {
        if (containerDimensions.width >= width) {
            return 0;
        }
        if (offset > (width - itemDimensions.width) / 2) {
            offset = (width - itemDimensions.width) / 2;
        }
        if (offset < -1 * (width - itemDimensions.width) / 2) {
            offset = -1 * (width - itemDimensions.width) / 2;
        }
        return offset;
    };
    LightboxItemZoomAnimator.prototype._getZoomOffsetTop = function (itemDimensions, containerDimensions, offset, height) {
        if (containerDimensions.height >= height) {
            return 0;
        }
        if (offset > (height - itemDimensions.height) / 2) {
            offset = (height - itemDimensions.height) / 2;
        }
        if (offset < -1 * (height - itemDimensions.height) / 2) {
            offset = -1 * (height - itemDimensions.height) / 2;
        }
        return offset;
    };
    return LightboxItemZoomAnimator;
}(Animator_1.Animator));
exports.LightboxItemZoomAnimator = LightboxItemZoomAnimator;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<div\r\n    draggable=\"true\"\r\n    (tap)=\"onClick($event)\"\r\n    (pan)=\"onDrag($event)\"\r\n    [@lightboxItemZoom]=\"lightboxItemZoomAnimator.animation\"\r\n    (@lightboxItemZoom.start)=\"lightboxItemZoomAnimator.animationStart($event)\"\r\n    (@lightboxItemZoom.done)=\"lightboxItemZoomAnimator.animationDone($event)\">\r\n    <img #img lazy-loading\r\n        draggable=\"false\"\r\n        [src]=\"getDefaultSrc()\"\r\n        [xs-src]=\"item.xsSrc\"\r\n        [sm-src]=\"item.smSrc\"\r\n        [md-src]=\"item.mdSrc\"\r\n        [lg-src]=\"item.lgSrc\"\r\n        [xl-src]=\"item.xlSrc\"\r\n        [xs-breakpoint]=\"item.xsBreakpoint\"\r\n        [sm-breakpoint]=\"item.smBreakpoint\"\r\n        [md-breakpoint]=\"item.mdBreakpoint\"\r\n        [lg-breakpoint]=\"item.lgBreakpoint\"\r\n        (load)=\"onLoad($event)\"/>\r\n</div>\r\n\r\n"

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(62);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ":host {\n  z-index: 1;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  flex: 0 0 100%;\n  pointer-events: none; }\n  :host > div {\n    pointer-events: auto;\n    position: relative; }\n  :host img {\n    position: relative;\n    height: auto;\n    width: 100%; }\n", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(21);
var HammerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(HammerConfig, _super);
    function HammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            swipe: { direction: Hammer.DIRECTION_ALL },
            pan: { direction: Hammer.DIRECTION_ALL }
        };
        return _this;
    }
    return HammerConfig;
}(platform_browser_1.HammerGestureConfig));
exports.HammerConfig = HammerConfig;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazy_loading_module__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadingModule", function() { return __WEBPACK_IMPORTED_MODULE_0__lazy_loading_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_doom_sensor_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_lazy_loading_directive__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common__);




class LazyLoadingModule {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LazyLoadingModule;

LazyLoadingModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]
                ],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_lazy_loading_directive__["a" /* LazyLoadingDirective */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_lazy_loading_directive__["a" /* LazyLoadingDirective */]
                ],
                providers: [
                    __WEBPACK_IMPORTED_MODULE_1__services_doom_sensor_service__["a" /* DoomSensorService */]
                ]
            },] },
];
/** @nocollapse */
LazyLoadingModule.ctorParameters = () => [];
//# sourceMappingURL=lazy-loading.module.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_doom_sensor_service__ = __webpack_require__(22);


const XS_BREAKPOINT = 150;
const SM_BREAKPOINT = 300;
const MD_BREAKPOINT = 600;
const LG_BREAKPOINT = 1200;
class LazyLoadingDirective {
    constructor(_doomSensorService, _elementRef) {
        this._doomSensorService = _doomSensorService;
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        if (!this.xsSrc && !this.smSrc && !this.mdSrc && !this.lgSrc && !this.xlSrc && !this.src) {
            throw new Error("At least one of this attributes must be defined 'xs-src | sm-src | md-src | lg-src | xl-src | src'");
        }
        if (!this.xsBreakpoint) {
            this.xsBreakpoint = XS_BREAKPOINT;
        }
        if (!this.smBreakpoint) {
            this.smBreakpoint = SM_BREAKPOINT;
        }
        if (!this.mdBreakpoint) {
            this.mdBreakpoint = MD_BREAKPOINT;
        }
        if (!this.lgBreakpoint) {
            this.lgBreakpoint = LG_BREAKPOINT;
        }
        if (this.src) {
            this._elementRef.nativeElement.src = this.src;
            this._elementRef.nativeElement.style.background = 'url(' + this.src + ')';
        }
    }
    ngAfterViewInit() {
        this._setSrc();
        const trackedProperties = {
            width: true,
            height: true,
            top: true,
            left: true
        };
        this._doomSensorService.track(this._elementRef.nativeElement, trackedProperties, () => {
            this._setSrc();
        });
    }
    ngOnDestroy() {
        this._doomSensorService.untrack(this._elementRef.nativeElement);
    }
    _setSrc() {
        if (this._isInViewPort() || this.load) {
            const width = this._elementRef.nativeElement.clientWidth;
            if (this.xlSrc && width > this.lgBreakpoint) {
                if (!this._currentResolution || this._currentResolution !== 'xl') {
                    this._currentResolution = 'xl';
                    this._elementRef.nativeElement.src = this.xlSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.xlSrc + ')';
                }
                return;
            }
            if (this.lgSrc && width > this.mdBreakpoint) {
                if (!this._currentResolution || this._currentResolution !== 'lg') {
                    this._currentResolution = 'lg';
                    this._elementRef.nativeElement.src = this.lgSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.lgSrc + ')';
                }
                return;
            }
            if (this.mdSrc && width > this.smBreakpoint) {
                if (!this._currentResolution || this._currentResolution !== 'md') {
                    this._currentResolution = 'md';
                    this._elementRef.nativeElement.src = this.mdSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.mdSrc + ')';
                }
                return;
            }
            if (this.smSrc && width > this.xsBreakpoint) {
                if (!this._currentResolution || this._currentResolution !== 'sm') {
                    this._currentResolution = 'sm';
                    this._elementRef.nativeElement.src = this.smSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.smSrc + ')';
                }
                return;
            }
            if (this.xsSrc) {
                if (!this._currentResolution || this._currentResolution !== 'xs') {
                    this._currentResolution = 'xs';
                    this._elementRef.nativeElement.src = this.xsSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.xsSrc + ')';
                }
                return;
            }
            if (this.src) {
                this._elementRef.nativeElement.src = this.src;
                this._elementRef.nativeElement.style.background = 'url(' + this.src + ')';
            }
            else {
                this._elementRef.nativeElement.src = '';
                this._elementRef.nativeElement.style.background = 'none';
            }
        }
    }
    _isInViewPort() {
        const elementTop = Math.round(this._elementRef.nativeElement.getBoundingClientRect().top);
        const elementBottom = elementTop + this._elementRef.nativeElement.clientHeight;
        const elementLeft = Math.round(this._elementRef.nativeElement.getBoundingClientRect().left);
        const elementRight = elementLeft + this._elementRef.nativeElement.clientWidth;
        return (elementLeft <= window.innerWidth && elementRight >= 0 && elementTop <= window.innerHeight && elementBottom >= 0);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LazyLoadingDirective;

LazyLoadingDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'img[lazy-loading]',
            },] },
];
/** @nocollapse */
LazyLoadingDirective.ctorParameters = () => [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_doom_sensor_service__["a" /* DoomSensorService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
];
LazyLoadingDirective.propDecorators = {
    "xsBreakpoint": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['xs-breakpoint',] },],
    "smBreakpoint": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['sm-breakpoint',] },],
    "mdBreakpoint": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['md-breakpoint',] },],
    "lgBreakpoint": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['lg-breakpoint',] },],
    "xsSrc": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['xs-src',] },],
    "smSrc": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['sm-src',] },],
    "mdSrc": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['md-src',] },],
    "lgSrc": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['lg-src',] },],
    "xlSrc": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['xl-src',] },],
    "src": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['src',] },],
    "load": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['load',] },],
};
//# sourceMappingURL=lazy-loading.directive.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__youtube_module__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeModule", function() { return __WEBPACK_IMPORTED_MODULE_0__youtube_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtube_api_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_youtube_player_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_youtube_component__ = __webpack_require__(69);





class YoutubeModule {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = YoutubeModule;

YoutubeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
                ],
                providers: [
                    __WEBPACK_IMPORTED_MODULE_2__services_youtube_api_service__["a" /* YoutubeApiService */],
                    __WEBPACK_IMPORTED_MODULE_3__services_youtube_player_service__["a" /* YoutubePlayerService */]
                ],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_4__components_youtube_component__["a" /* YoutubeComponent */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_4__components_youtube_component__["a" /* YoutubeComponent */]
                ]
            },] },
];
/** @nocollapse */
YoutubeModule.ctorParameters = () => [];
//# sourceMappingURL=youtube.module.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_youtube_api_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtube_player_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);






class YoutubeComponent {
    constructor(youtubeApi, youtubePlayer) {
        this.youtubeApi = youtubeApi;
        this.youtubePlayer = youtubePlayer;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.error = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._ready = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.youtubeApi.loadApi();
        this._config = {
            height: this.height ? this.height : 390,
            width: this.width ? this.width : 390,
            videoId: '',
            playerVars: this.playerVars ? this.playerVars : {
                rel: 0,
                showinfo: 0
            },
            events: {
                onReady: this.onReady.bind(this),
                onError: this.onError.bind(this)
            }
        };
    }
    ngOnChanges(changes) {
        if (changes['videoId'] && changes['videoId'].currentValue) {
            this._config.videoId = changes['videoId'].currentValue;
            this.youtubePlayer.initialise('lightbox-youtube-player', this._config);
            this._ready.filter((value) => value).first().subscribe(() => {
                if (this.videoId) {
                    this.ytPlayer.cueVideoById(this.videoId);
                }
            });
        }
    }
    onReady(event) {
        this.ytPlayer = event.target;
        this._ready.next(true);
        this.ytPlayer.addEventListener('onStateChange', (e) => {
            this.onChange(e);
        });
        this.ready.emit(event);
    }
    onChange(event) {
        this.change.emit(event);
    }
    onError(event) {
        this.error.emit(event);
    }
    ngOnDestroy() {
        if (this.ytPlayer) {
            this.ytPlayer.destroy();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = YoutubeComponent;

YoutubeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'youtube',
                template: `
      <div id="lightbox-youtube-player"></div>
    `,
                styles: [`
      youtube iframe{top:0;position:absolute;z-index:1;height:100%;width:100%}
    `],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            },] },
];
/** @nocollapse */
YoutubeComponent.ctorParameters = () => [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_youtube_api_service__["a" /* YoutubeApiService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__services_youtube_player_service__["a" /* YoutubePlayerService */], },
];
YoutubeComponent.propDecorators = {
    "videoId": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "height": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "width": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "playerVars": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "ready": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "change": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "error": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=youtube.component.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=lightbox.umd.js.map
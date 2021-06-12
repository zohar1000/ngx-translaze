(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-translaze', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-translaze'] = {}, global.ng.core, global.rxjs));
}(this, (function (exports, i0, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var TRANSLAZE_CONFIG = new i0.InjectionToken('TRANSLAZE_CONFIG');

    var BaseTranslazeService = /** @class */ (function () {
        function BaseTranslazeService(componentFactoryResolver, config) {
            var _this = this;
            this.langs = {};
            this.injector = i0.Injector.create({ providers: [] });
            this.subs = [];
            this.isReplaceAllEnabled = Boolean('a'['replaceAll']);
            this.componentFactoryResolver = componentFactoryResolver;
            this.config = config;
            setTimeout(function () { return _this.init(); });
        }
        BaseTranslazeService.prototype.init = function () {
            this.changeLang(this.getInitialLangCode());
        };
        BaseTranslazeService.prototype.changeLang = function (langCode) {
            this.setLang(langCode).then();
        };
        BaseTranslazeService.prototype.setLang = function (langCode) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.langs[langCode]) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.lazyLoadLang(langCode)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (this.langs[langCode])
                                this.onNewLangReady(langCode);
                            return [2 /*return*/];
                    }
                });
            });
        };
        BaseTranslazeService.prototype.onNewLangReady = function (langCode) {
            if (this.config.onLangTextReady)
                this.config.onLangTextReady(this.langs[langCode]);
        };
        BaseTranslazeService.prototype.lazyLoadLang = function (langCode) {
            return __awaiter(this, void 0, void 0, function () {
                var langItem, results, _a, _b, _c, _d, _e, e_1;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            langItem = this.config.langs.find(function (item) { return item.code === langCode; });
                            _f.label = 1;
                        case 1:
                            _f.trys.push([1, 8, , 9]);
                            if (!langItem.complementBy) return [3 /*break*/, 5];
                            _b = (_a = Promise).all;
                            return [4 /*yield*/, this.loadLang(langCode)];
                        case 2:
                            _c = [_f.sent()];
                            return [4 /*yield*/, this.loadLang(langItem.complementBy)];
                        case 3: return [4 /*yield*/, _b.apply(_a, [_c.concat([_f.sent()])])];
                        case 4:
                            results = _f.sent();
                            this.langs[langCode] = results[0];
                            this.langs[langItem.complementBy] = results[1];
                            this.complementLang(langCode, langItem.complementBy);
                            return [3 /*break*/, 7];
                        case 5:
                            _d = this.langs;
                            _e = langCode;
                            return [4 /*yield*/, this.loadLang(langCode)];
                        case 6:
                            _d[_e] = _f.sent();
                            _f.label = 7;
                        case 7: return [3 /*break*/, 9];
                        case 8:
                            e_1 = _f.sent();
                            if (this.config.onLoadError)
                                this.config.onLoadError(langCode, this.config, e_1);
                            console.error('Error loading language file, language:', langCode, ', config:', this.config, ', error:', e_1);
                            return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        /*******************************/
        /*      T R A N S L A T E      */
        /*******************************/
        BaseTranslazeService.prototype.translate = function (str, params) {
            if (!str)
                return '';
            if (!params)
                return str;
            var keys = Object.keys(params);
            for (var i = 0, len = keys.length; i < len && str !== undefined; i++) {
                var key = keys[i];
                if (this.isReplaceAllEnabled) {
                    str = str.replaceAll('{' + key + '}', params[key]);
                }
                else {
                    var regExp = new RegExp('{' + key + '}', 'g');
                    str = str.replace(regExp, params[key]);
                }
            }
            return str;
        };
        /*****************************************/
        /*      L O A D   L A N G   F I L E      */
        /*****************************************/
        BaseTranslazeService.prototype.loadLang = function (langCode) {
            return __awaiter(this, void 0, void 0, function () {
                var file, className, componentFactory, inst;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.config.loadLang(langCode)];
                        case 1:
                            file = _a.sent();
                            className = Object.keys(file)[0];
                            componentFactory = this.componentFactoryResolver.resolveComponentFactory(file[className]);
                            inst = componentFactory.create(this.injector);
                            return [2 /*return*/, inst.instance.text];
                    }
                });
            });
        };
        /***************************************************/
        /*      C O M L E M E N T   L A N G   F I L E      */
        /***************************************************/
        BaseTranslazeService.prototype.complementLang = function (langCode, compByLangCode) {
            this.complementNode(this.langs[langCode], this.langs[compByLangCode]);
        };
        BaseTranslazeService.prototype.complementNode = function (target, source) {
            var keys = Object.keys(source);
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                if (target[key] === undefined) {
                    if (typeof source[key] === 'object') {
                        target[key] = {};
                        this.complementNode(target[key], source[key]);
                    }
                    else {
                        target[key] = source[key];
                    }
                }
                else {
                    if (typeof target[key] === 'object') {
                        this.complementNode(target[key], source[key]);
                    }
                    else if (!target[key]) {
                        target[key] = source[key];
                    }
                }
            }
        };
        BaseTranslazeService.prototype.deleteEmptyKeys = function (node) {
            var keys = Object.keys(node);
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                if (typeof node[key] === 'object') {
                    this.deleteEmptyKeys(node[key]);
                }
                else if (node[key] === '') {
                    delete node[key];
                }
            }
        };
        BaseTranslazeService.prototype.regSub = function (sub) {
            this.subs.push(sub);
        };
        BaseTranslazeService.prototype.ngOnDestroy = function () {
            console.log('onDestroy service, subs:', this.subs.length);
            this.subs.forEach(function (sub) {
                if (!sub.closed)
                    sub.unsubscribe();
            });
        };
        return BaseTranslazeService;
    }());
    BaseTranslazeService.decorators = [
        { type: i0.Injectable }
    ];
    BaseTranslazeService.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: undefined }
    ]; };

    (function (TranslazeLangStatus) {
        TranslazeLangStatus[TranslazeLangStatus["Start"] = 1] = "Start";
        TranslazeLangStatus[TranslazeLangStatus["Complete"] = 2] = "Complete";
    })(exports.TranslazeLangStatus || (exports.TranslazeLangStatus = {}));

    var TranslazeService = /** @class */ (function (_super) {
        __extends(TranslazeService, _super);
        function TranslazeService(componentFactoryResolver, config) {
            var _this = _super.call(this, componentFactoryResolver, config) || this;
            _this.FALLBACK_LANG = 'en';
            _this.DEFAULT_USE_BROWSER_DEFAULT_LANG = true;
            _this.DEFAULT_LOCAL_STORAGE_KEY = 'translaze';
            _this.langCode = '';
            _this.langName = '';
            _this.text$ = new rxjs.BehaviorSubject('');
            _this.lang$ = new rxjs.ReplaySubject(1);
            _this.isText$ = new rxjs.BehaviorSubject(false);
            _this.appText$ = _this.text$;
            return _this;
        }
        TranslazeService.prototype.changeLang = function (langCode) {
            this.lang$.next({ status: exports.TranslazeLangStatus.Start, langCode: langCode, prevLangCode: this.langCode });
            _super.prototype.changeLang.call(this, langCode);
        };
        TranslazeService.prototype.onNewLangReady = function (langCode) {
            var _this = this;
            _super.prototype.onNewLangReady.call(this, langCode);
            this.langCode = langCode;
            this.langName = this.getConfig().langs.find(function (item) { return item.code === _this.langCode; }).name;
            this.updateLocalStorage(langCode);
            if (this.config.onLangTextReady)
                this.config.onLangTextReady(this.langs[langCode]);
            this.lang$.next({ status: exports.TranslazeLangStatus.Complete, langCode: langCode });
            this.text$.next(this.langs[langCode]);
            this.isText$.next(true);
        };
        TranslazeService.prototype.updateLocalStorage = function (langCode) {
            var lsItem = { langCode: langCode };
            var localStorageKey = this.getConfig().localStorageKey || this.DEFAULT_LOCAL_STORAGE_KEY;
            localStorage.setItem(localStorageKey, JSON.stringify(lsItem));
        };
        TranslazeService.prototype.getConfig = function () {
            return this.config;
        };
        TranslazeService.prototype.getInitialLangCode = function () {
            var lsStr = localStorage.getItem(this.getConfig().localStorageKey);
            var langCode;
            if (lsStr) {
                var lsItem = JSON.parse(lsStr);
                langCode = lsItem.langCode;
            }
            else {
                var langItem = void 0;
                var isUseBrowserDefaultLang = this.getConfig().isUseBrowserDefaultLang;
                if (isUseBrowserDefaultLang === undefined)
                    isUseBrowserDefaultLang = this.DEFAULT_USE_BROWSER_DEFAULT_LANG;
                if (isUseBrowserDefaultLang && navigator) {
                    langCode = navigator.language;
                    langItem = this.config.langs.find(function (item) { return item.code.toLowerCase() === langCode.toLowerCase(); });
                    if (!langItem) {
                        langCode = langCode.substr(0, 2);
                        langItem = this.config.langs.find(function (item) { return item.code.toLowerCase() === langCode.toLowerCase(); });
                    }
                    if (!langItem)
                        langCode = '';
                }
                if (!langCode) {
                    langItem = this.config.langs.find(function (item) { return item.default; });
                    if (langItem)
                        langCode = langItem.code;
                }
                if (!langCode)
                    langCode = this.FALLBACK_LANG;
            }
            return langCode;
        };
        TranslazeService.prototype.getInfo = function () {
            return {
                config: this.getConfig(),
                langCode: this.langCode,
                langName: this.langName
            };
        };
        return TranslazeService;
    }(BaseTranslazeService));
    TranslazeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TranslazeService_Factory() { return new TranslazeService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(TRANSLAZE_CONFIG)); }, token: TranslazeService, providedIn: "root" });
    TranslazeService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    TranslazeService.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: undefined, decorators: [{ type: i0.Inject, args: [TRANSLAZE_CONFIG,] }] }
    ]; };

    var TranslazePipe = /** @class */ (function () {
        function TranslazePipe(translazeService) {
            this.translazeService = translazeService;
        }
        TranslazePipe.prototype.transform = function (str, args) {
            return this.translazeService.translate(str, args);
        };
        return TranslazePipe;
    }());
    TranslazePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'translaze' },] }
    ];
    TranslazePipe.ctorParameters = function () { return [
        { type: TranslazeService }
    ]; };

    var isReplaceAllEnabled = Boolean('a'['replaceAll']);
    var translaze = function (value, params) {
        if (!params)
            return value;
        var keys = Object.keys(params);
        for (var i = 0, len = keys.length; i < len && value !== undefined; i++) {
            var key = keys[i];
            if (isReplaceAllEnabled) {
                value = value.replaceAll('{' + keys[i] + '}', params[key]);
            }
            else {
                var regExp = new RegExp('{' + keys[i] + '}', 'g');
                value = value.replace(regExp, params[key]);
            }
        }
        return value;
    };

    var TRANSLAZE_FEATURE_CONFIG = new i0.InjectionToken('TRANSLAZE_FEATURE_CONFIG');

    var TranslazeFeatureService = /** @class */ (function (_super) {
        __extends(TranslazeFeatureService, _super);
        function TranslazeFeatureService(componentFactoryResolver, config, translazeService) {
            var _this = _super.call(this, componentFactoryResolver, config) || this;
            _this.translazeService = translazeService;
            _this.featureText$ = new rxjs.BehaviorSubject('');
            _this.isFeatureText$ = new rxjs.BehaviorSubject(false);
            _this.appText$ = _this.translazeService.text$;
            return _this;
        }
        TranslazeFeatureService.prototype.onNewLangReady = function (langCode) {
            _super.prototype.onNewLangReady.call(this, langCode);
            this.featureText$.next(this.langs[langCode]);
            this.isFeatureText$.next(true);
        };
        TranslazeFeatureService.prototype.getConfig = function () {
            return this.config;
        };
        TranslazeFeatureService.prototype.getInitialLangCode = function () {
            return this.translazeService.getInfo().langCode;
        };
        return TranslazeFeatureService;
    }(BaseTranslazeService));
    TranslazeFeatureService.decorators = [
        { type: i0.Injectable }
    ];
    TranslazeFeatureService.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: undefined, decorators: [{ type: i0.Inject, args: [TRANSLAZE_FEATURE_CONFIG,] }] },
        { type: TranslazeService }
    ]; };

    var TranslazeRootModule = /** @class */ (function () {
        function TranslazeRootModule() {
        }
        TranslazeRootModule.forRoot = function (config) {
            return {
                ngModule: TranslazeRootModule,
                providers: [{ provide: TRANSLAZE_CONFIG, useValue: config }]
            };
        };
        return TranslazeRootModule;
    }());
    TranslazeRootModule.decorators = [
        { type: i0.NgModule, args: [{},] }
    ];

    var TranslazeFeatureModule = /** @class */ (function () {
        function TranslazeFeatureModule() {
        }
        return TranslazeFeatureModule;
    }());
    TranslazeFeatureModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [TranslazePipe],
                    exports: [TranslazePipe]
                },] }
    ];

    /*
     * Public API Surface of ngx-translaze
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TRANSLAZE_FEATURE_CONFIG = TRANSLAZE_FEATURE_CONFIG;
    exports.TranslazeFeatureModule = TranslazeFeatureModule;
    exports.TranslazeFeatureService = TranslazeFeatureService;
    exports.TranslazePipe = TranslazePipe;
    exports.TranslazeRootModule = TranslazeRootModule;
    exports.TranslazeService = TranslazeService;
    exports.translaze = translaze;
    exports.ɵa = BaseTranslazeService;
    exports.ɵb = TRANSLAZE_CONFIG;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-translaze.umd.js.map

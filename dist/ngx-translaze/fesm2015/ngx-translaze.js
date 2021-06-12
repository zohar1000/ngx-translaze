import { InjectionToken, Injector, Injectable, ComponentFactoryResolver, ɵɵdefineInjectable, ɵɵinject, Inject, Pipe, NgModule } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { __awaiter } from 'tslib';

const TRANSLAZE_CONFIG = new InjectionToken('TRANSLAZE_CONFIG');

class BaseTranslazeService {
    constructor(componentFactoryResolver, config) {
        this.langs = {};
        this.injector = Injector.create({ providers: [] });
        this.subs = [];
        this.isReplaceAllEnabled = Boolean('a'['replaceAll']);
        this.componentFactoryResolver = componentFactoryResolver;
        this.config = config;
        setTimeout(() => this.init());
    }
    init() {
        this.changeLang(this.getInitialLangCode());
    }
    changeLang(langCode) {
        this.setLang(langCode).then();
    }
    setLang(langCode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.langs[langCode])
                yield this.lazyLoadLang(langCode);
            if (this.langs[langCode])
                this.onNewLangReady(langCode);
        });
    }
    onNewLangReady(langCode) {
        if (this.config.onLangTextReady)
            this.config.onLangTextReady(this.langs[langCode]);
    }
    lazyLoadLang(langCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const langItem = this.config.langs.find(item => item.code === langCode);
            try {
                if (langItem.complementBy) {
                    const results = yield Promise.all([yield this.loadLang(langCode), yield this.loadLang(langItem.complementBy)]);
                    this.langs[langCode] = results[0];
                    this.langs[langItem.complementBy] = results[1];
                    this.complementLang(langCode, langItem.complementBy);
                }
                else {
                    this.langs[langCode] = yield this.loadLang(langCode);
                }
            }
            catch (e) {
                if (this.config.onLoadError)
                    this.config.onLoadError(langCode, this.config, e);
                console.error('Error loading language file, language:', langCode, ', config:', this.config, ', error:', e);
            }
        });
    }
    /*******************************/
    /*      T R A N S L A T E      */
    /*******************************/
    translate(str, params) {
        if (!str)
            return '';
        if (!params)
            return str;
        const keys = Object.keys(params);
        for (let i = 0, len = keys.length; i < len && str !== undefined; i++) {
            const key = keys[i];
            if (this.isReplaceAllEnabled) {
                str = str.replaceAll('{' + key + '}', params[key]);
            }
            else {
                const regExp = new RegExp('{' + key + '}', 'g');
                str = str.replace(regExp, params[key]);
            }
        }
        return str;
    }
    /*****************************************/
    /*      L O A D   L A N G   F I L E      */
    /*****************************************/
    loadLang(langCode) {
        return __awaiter(this, void 0, void 0, function* () {
            // alt code for lazy loading that was taken from a lecture, needs to check if better
            // https://www.youtube.com/watch?v=e2DHWkP2ggc
            // https://blog.profanis.me/blog/lazy-load-angular-components-in-a-hoc
            // componentType = 'lazy' | 'lazy1';
            // const lazyContentComponent = await import(`../${this.componentType}.content/${this.componentType}.content.
            // const componentClassName = lazyContentComponent[`${this.titleCasePipe.transform(this.componentType)}Conten
            // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClassName);
            // can also use *ngComponentOutlet with the class name
            const file = yield this.config.loadLang(langCode);
            const className = Object.keys(file)[0];
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(file[className]);
            const inst = componentFactory.create(this.injector);
            return inst.instance.text;
        });
    }
    /***************************************************/
    /*      C O M L E M E N T   L A N G   F I L E      */
    /***************************************************/
    complementLang(langCode, compByLangCode) {
        this.complementNode(this.langs[langCode], this.langs[compByLangCode]);
    }
    complementNode(target, source) {
        const keys = Object.keys(source);
        for (let i = 0, len = keys.length; i < len; i++) {
            const key = keys[i];
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
    }
    deleteEmptyKeys(node) {
        const keys = Object.keys(node);
        for (let i = 0, len = keys.length; i < len; i++) {
            const key = keys[i];
            if (typeof node[key] === 'object') {
                this.deleteEmptyKeys(node[key]);
            }
            else if (node[key] === '') {
                delete node[key];
            }
        }
    }
    regSub(sub) {
        this.subs.push(sub);
    }
    ngOnDestroy() {
        console.log('onDestroy service, subs:', this.subs.length);
        this.subs.forEach(sub => { if (!sub.closed)
            sub.unsubscribe(); });
    }
}
BaseTranslazeService.decorators = [
    { type: Injectable }
];
BaseTranslazeService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: undefined }
];

var TranslazeLangStatus;
(function (TranslazeLangStatus) {
    TranslazeLangStatus[TranslazeLangStatus["Start"] = 1] = "Start";
    TranslazeLangStatus[TranslazeLangStatus["Complete"] = 2] = "Complete";
})(TranslazeLangStatus || (TranslazeLangStatus = {}));

class TranslazeService extends BaseTranslazeService {
    constructor(componentFactoryResolver, config) {
        super(componentFactoryResolver, config);
        this.FALLBACK_LANG = 'en';
        this.DEFAULT_USE_BROWSER_DEFAULT_LANG = true;
        this.DEFAULT_LOCAL_STORAGE_KEY = 'translaze';
        this.langCode = '';
        this.langName = '';
        this.text$ = new BehaviorSubject('');
        this.lang$ = new ReplaySubject(1);
        this.isText$ = new BehaviorSubject(false);
        this.appText$ = this.text$;
    }
    changeLang(langCode) {
        this.lang$.next({ status: TranslazeLangStatus.Start, langCode, prevLangCode: this.langCode });
        super.changeLang(langCode);
    }
    onNewLangReady(langCode) {
        super.onNewLangReady(langCode);
        this.langCode = langCode;
        this.langName = this.getConfig().langs.find(item => item.code === this.langCode).name;
        this.updateLocalStorage(langCode);
        if (this.config.onLangTextReady)
            this.config.onLangTextReady(this.langs[langCode]);
        this.lang$.next({ status: TranslazeLangStatus.Complete, langCode });
        this.text$.next(this.langs[langCode]);
        this.isText$.next(true);
    }
    updateLocalStorage(langCode) {
        const lsItem = { langCode };
        const localStorageKey = this.getConfig().localStorageKey || this.DEFAULT_LOCAL_STORAGE_KEY;
        localStorage.setItem(localStorageKey, JSON.stringify(lsItem));
    }
    getConfig() {
        return this.config;
    }
    getInitialLangCode() {
        const lsStr = localStorage.getItem(this.getConfig().localStorageKey);
        let langCode;
        if (lsStr) {
            const lsItem = JSON.parse(lsStr);
            langCode = lsItem.langCode;
        }
        else {
            let langItem;
            let isUseBrowserDefaultLang = this.getConfig().isUseBrowserDefaultLang;
            if (isUseBrowserDefaultLang === undefined)
                isUseBrowserDefaultLang = this.DEFAULT_USE_BROWSER_DEFAULT_LANG;
            if (isUseBrowserDefaultLang && navigator) {
                langCode = navigator.language;
                langItem = this.config.langs.find(item => item.code.toLowerCase() === langCode.toLowerCase());
                if (!langItem) {
                    langCode = langCode.substr(0, 2);
                    langItem = this.config.langs.find(item => item.code.toLowerCase() === langCode.toLowerCase());
                }
                if (!langItem)
                    langCode = '';
            }
            if (!langCode) {
                langItem = this.config.langs.find(item => item.default);
                if (langItem)
                    langCode = langItem.code;
            }
            if (!langCode)
                langCode = this.FALLBACK_LANG;
        }
        return langCode;
    }
    getInfo() {
        return {
            config: this.getConfig(),
            langCode: this.langCode,
            langName: this.langName
        };
    }
}
TranslazeService.ɵprov = ɵɵdefineInjectable({ factory: function TranslazeService_Factory() { return new TranslazeService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(TRANSLAZE_CONFIG)); }, token: TranslazeService, providedIn: "root" });
TranslazeService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
TranslazeService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLAZE_CONFIG,] }] }
];

class TranslazePipe {
    constructor(translazeService) {
        this.translazeService = translazeService;
    }
    transform(str, args) {
        return this.translazeService.translate(str, args);
    }
}
TranslazePipe.decorators = [
    { type: Pipe, args: [{ name: 'translaze' },] }
];
TranslazePipe.ctorParameters = () => [
    { type: TranslazeService }
];

const isReplaceAllEnabled = Boolean('a'['replaceAll']);
const translaze = (value, params) => {
    if (!params)
        return value;
    const keys = Object.keys(params);
    for (let i = 0, len = keys.length; i < len && value !== undefined; i++) {
        const key = keys[i];
        if (isReplaceAllEnabled) {
            value = value.replaceAll('{' + keys[i] + '}', params[key]);
        }
        else {
            const regExp = new RegExp('{' + keys[i] + '}', 'g');
            value = value.replace(regExp, params[key]);
        }
    }
    return value;
};

const TRANSLAZE_FEATURE_CONFIG = new InjectionToken('TRANSLAZE_FEATURE_CONFIG');

class TranslazeFeatureService extends BaseTranslazeService {
    constructor(componentFactoryResolver, config, translazeService) {
        super(componentFactoryResolver, config);
        this.translazeService = translazeService;
        this.featureText$ = new BehaviorSubject('');
        this.isFeatureText$ = new BehaviorSubject(false);
        this.appText$ = this.translazeService.text$;
    }
    onNewLangReady(langCode) {
        super.onNewLangReady(langCode);
        this.featureText$.next(this.langs[langCode]);
        this.isFeatureText$.next(true);
    }
    getConfig() {
        return this.config;
    }
    getInitialLangCode() {
        return this.translazeService.getInfo().langCode;
    }
}
TranslazeFeatureService.decorators = [
    { type: Injectable }
];
TranslazeFeatureService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLAZE_FEATURE_CONFIG,] }] },
    { type: TranslazeService }
];

class TranslazeRootModule {
    static forRoot(config) {
        return {
            ngModule: TranslazeRootModule,
            providers: [{ provide: TRANSLAZE_CONFIG, useValue: config }]
        };
    }
}
TranslazeRootModule.decorators = [
    { type: NgModule, args: [{},] }
];

class TranslazeFeatureModule {
}
TranslazeFeatureModule.decorators = [
    { type: NgModule, args: [{
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

export { TRANSLAZE_FEATURE_CONFIG, TranslazeFeatureModule, TranslazeFeatureService, TranslazeLangStatus, TranslazePipe, TranslazeRootModule, TranslazeService, translaze, BaseTranslazeService as ɵa, TRANSLAZE_CONFIG as ɵb };
//# sourceMappingURL=ngx-translaze.js.map

import { ComponentFactoryResolver, Injector, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TranslazeConfig } from '../models/config/translaze-config.model';
import { TranslazeFeatureConfig } from '../models/config/translaze-feature-config.model';
import * as ɵngcc0 from '@angular/core';
export declare abstract class BaseTranslazeService implements OnDestroy {
    protected config: TranslazeConfig | TranslazeFeatureConfig;
    protected langs: {};
    protected injector: Injector;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected subs: Subscription[];
    private isReplaceAllEnabled;
    appText$: BehaviorSubject<unknown>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, config: TranslazeConfig | TranslazeFeatureConfig);
    protected abstract getInitialLangCode(): any;
    abstract getConfig(): any;
    init(): void;
    changeLang(langCode: any): void;
    private setLang;
    protected onNewLangReady(langCode: any): void;
    private lazyLoadLang;
    /*******************************/
    /*******************************/
    translate(str: any, params?: any): any;
    /*****************************************/
    /*****************************************/
    private loadLang;
    /***************************************************/
    /***************************************************/
    private complementLang;
    private complementNode;
    private deleteEmptyKeys;
    private regSub;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseTranslazeService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BaseTranslazeService>;
}

//# sourceMappingURL=base-translaze.service.d.ts.map
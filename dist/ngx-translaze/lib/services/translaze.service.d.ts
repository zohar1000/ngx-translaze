import { ComponentFactoryResolver } from '@angular/core';
import { TranslazeConfig } from '../models/config/translaze-config.model';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { BaseTranslazeService } from './base-translaze.service';
import { TranslazeInfo } from '../models/info/translaze-info.model';
import { TranslazeLang } from '../models/translaze-lang.model';
import * as ɵngcc0 from '@angular/core';
export declare class TranslazeService extends BaseTranslazeService {
    readonly FALLBACK_LANG = "en";
    readonly DEFAULT_USE_BROWSER_DEFAULT_LANG = true;
    readonly DEFAULT_LOCAL_STORAGE_KEY = "translaze";
    private langCode;
    private langName;
    text$: BehaviorSubject<unknown>;
    lang$: ReplaySubject<TranslazeLang>;
    isText$: BehaviorSubject<boolean>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, config: TranslazeConfig);
    changeLang(langCode: any): void;
    protected onNewLangReady(langCode: any): void;
    private updateLocalStorage;
    getConfig(): TranslazeConfig;
    protected getInitialLangCode(): any;
    getInfo(): TranslazeInfo;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslazeService, never>;
}

//# sourceMappingURL=translaze.service.d.ts.map
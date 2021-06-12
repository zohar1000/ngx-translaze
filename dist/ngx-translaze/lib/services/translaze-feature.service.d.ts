import { ComponentFactoryResolver } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslazeFeatureConfig } from '../models/config/translaze-feature-config.model';
import { TranslazeService } from './translaze.service';
import { BaseTranslazeService } from './base-translaze.service';
import * as ɵngcc0 from '@angular/core';
export declare class TranslazeFeatureService extends BaseTranslazeService {
    private translazeService;
    featureText$: BehaviorSubject<any>;
    isFeatureText$: BehaviorSubject<boolean>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, config: TranslazeFeatureConfig, translazeService: TranslazeService);
    protected onNewLangReady(langCode: any): void;
    getConfig(): TranslazeFeatureConfig;
    getInitialLangCode(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslazeFeatureService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TranslazeFeatureService>;
}

//# sourceMappingURL=translaze-feature.service.d.ts.map
import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslazeFeatureConfig } from '../models/config/translaze-feature-config.model';
import { TRANSLAZE_FEATURE_CONFIG } from '../tokens/translaze-feature-config.token';
import { TranslazeService } from './translaze.service';
import { BaseTranslazeService } from './base-translaze.service';

@Injectable()
export class TranslazeFeatureService extends BaseTranslazeService {
  featureText$: BehaviorSubject<any> = new BehaviorSubject<unknown>('');
  isFeatureText$ = new BehaviorSubject(false);

  constructor(componentFactoryResolver: ComponentFactoryResolver,
              @Inject(TRANSLAZE_FEATURE_CONFIG) config: TranslazeFeatureConfig,
              private translazeService: TranslazeService) {
    super(componentFactoryResolver, config);
    this.appText$ = this.translazeService.text$;
  }

  protected onNewLangReady(langCode) {
    super.onNewLangReady(langCode);
    this.featureText$.next(this.langs[langCode]);
    this.isFeatureText$.next(true);
  }

  getConfig(): TranslazeFeatureConfig {
    return this.config as TranslazeFeatureConfig;
  }

  getInitialLangCode() {
    return this.translazeService.getInfo().langCode;
  }
}

import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { TranslazeLocalStorage } from '../models/translaze-local-storage.model';
import { TranslazeConfig } from '../models/config/translaze-config.model';
import { TRANSLAZE_CONFIG } from '../tokens/translaze-config.token';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { BaseTranslazeService } from './base-translaze.service';
import { TranslazeInfo } from '../models/info/translaze-info.model';
import { TranslazeLang } from '../models/translaze-lang.model';
import { TranslazeLangStatus } from '../enums/translaze-lang-status.enum';

@Injectable({ providedIn: 'root' })
export class TranslazeService extends BaseTranslazeService {
  readonly FALLBACK_LANG = 'en';
  readonly DEFAULT_USE_BROWSER_DEFAULT_LANG = true;
  readonly DEFAULT_LOCAL_STORAGE_KEY = 'translaze';
  private langCode = '';
  private langName = '';
  text$: BehaviorSubject<unknown> = new BehaviorSubject<unknown>('');
  lang$: ReplaySubject<TranslazeLang> = new ReplaySubject<TranslazeLang>(1);
  isText$ = new BehaviorSubject(false);

  constructor(componentFactoryResolver: ComponentFactoryResolver,
              @Inject(TRANSLAZE_CONFIG) config: TranslazeConfig) {
    super(componentFactoryResolver, config);
    this.appText$ = this.text$;
  }

  public changeLang(langCode) {
    this.lang$.next({ status: TranslazeLangStatus.Start, langCode, prevLangCode: this.langCode });
    super.changeLang(langCode);
  }

  protected onNewLangReady(langCode) {
    super.onNewLangReady(langCode);
    this.langCode = langCode;
    this.langName = this.getConfig().langs.find(item => item.code === this.langCode).name;
    this.updateLocalStorage(langCode);
    if (this.config.onLangTextReady) this.config.onLangTextReady(this.langs[langCode]);
    this.lang$.next({ status: TranslazeLangStatus.Complete, langCode });
    (this.text$ as BehaviorSubject<unknown>).next(this.langs[langCode]);
    this.isText$.next(true);
  }

  private updateLocalStorage(langCode) {
    const lsItem: TranslazeLocalStorage = { langCode };
    const localStorageKey = this.getConfig().localStorageKey || this.DEFAULT_LOCAL_STORAGE_KEY;
    localStorage.setItem(localStorageKey, JSON.stringify(lsItem));
  }

  public getConfig(): TranslazeConfig {
    return this.config as TranslazeConfig;
  }

  protected getInitialLangCode() {
    const lsStr = localStorage.getItem(this.getConfig().localStorageKey);
    let langCode;
    if (lsStr) {
      const lsItem: TranslazeLocalStorage = JSON.parse(lsStr);
      langCode = lsItem.langCode;
    } else {
      let langItem;
      let isUseBrowserDefaultLang = this.getConfig().isUseBrowserDefaultLang;
      if (isUseBrowserDefaultLang === undefined ) isUseBrowserDefaultLang = this.DEFAULT_USE_BROWSER_DEFAULT_LANG;
      if (isUseBrowserDefaultLang && navigator) {
        langCode = navigator.language;
        langItem = this.config.langs.find(item => item.code.toLowerCase() === langCode.toLowerCase());
        if (!langItem) {
          langCode = langCode.substr(0, 2);
          langItem = this.config.langs.find(item => item.code.toLowerCase() === langCode.toLowerCase());
        }
        if (!langItem) langCode = '';
      }
      if (!langCode) {
        langItem = (this.config as TranslazeConfig).langs.find(item => item.default);
        if (langItem) langCode = langItem.code;
      }
      if (!langCode) langCode = this.FALLBACK_LANG;
    }
    return langCode;
  }

  public getInfo(): TranslazeInfo {
    return {
      config: this.getConfig(),
      langCode: this.langCode,
      langName: this.langName
    };
  }

  /***************************/
  /*      F E A T U R E      */
  /***************************/
/*
  setFeatureModule(config: TranslazeFeatureConfig) {
    console.log('setFeatureModule:', config);
    if (!config.featureId) {
      console.error('A feature language was configured but it has no "featureId" property, the language file for this module will not be loaded. config:', config);
    }
    // if (this.featureModules[config.featureId])
  }*/
}

import { ComponentFactoryResolver, ComponentRef, Inject, Injectable, Injector, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TranslazeConfig } from '../models/config/translaze-config.model';
import { TranslazeFeatureConfig } from '../models/config/translaze-feature-config.model';

@Injectable()
export abstract class BaseTranslazeService implements OnDestroy {
  protected config: TranslazeConfig | TranslazeFeatureConfig;
  protected langs = {};
  protected injector: Injector = Injector.create({ providers: [] });
  protected componentFactoryResolver: ComponentFactoryResolver;
  protected subs: Subscription[] = [];
  private isReplaceAllEnabled = Boolean('a'['replaceAll']);
  // text$: BehaviorSubject<any> = new BehaviorSubject<unknown>('');
  // isText$ = new BehaviorSubject(false);
  appText$: BehaviorSubject<unknown>;

  constructor(componentFactoryResolver: ComponentFactoryResolver,
              config: TranslazeConfig | TranslazeFeatureConfig) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.config = config;
    setTimeout(() => this.init());
  }

  protected abstract getInitialLangCode();
  public abstract getConfig();

  init() {
    this.changeLang(this.getInitialLangCode());
  }

  public changeLang(langCode) {
    this.setLang(langCode).then();
  }

  private async setLang(langCode) {
    if (!this.langs[langCode]) await this.lazyLoadLang(langCode);
    if (this.langs[langCode]) this.onNewLangReady(langCode);
  }

  protected onNewLangReady(langCode) {
    if (this.config.onLangTextReady) this.config.onLangTextReady(this.langs[langCode]);
  }

  private async lazyLoadLang(langCode) {
    const langItem = this.config.langs.find(item => item.code === langCode);
    try {
      if (langItem.complementBy) {
        const results = await Promise.all([await this.loadLang(langCode), await this.loadLang(langItem.complementBy)]);
        this.langs[langCode] = results[0];
        this.langs[langItem.complementBy] = results[1];
        this.complementLang(langCode, langItem.complementBy);
      } else {
        this.langs[langCode] = await this.loadLang(langCode);
      }
    } catch (e) {
      if (this.config.onLoadError) this.config.onLoadError(langCode, this.config, e);
      console.error('Error loading language file, language:', langCode, ', config:', this.config, ', error:', e);
    }
  }


  /*******************************/
  /*      T R A N S L A T E      */
  /*******************************/

  public translate(str, params?) {
    if (!str) return '';
    if (!params) return str;
    const keys = Object.keys(params);
    for (let i = 0, len = keys.length; i < len && str !== undefined; i++) {
      const key = keys[i];
      if (this.isReplaceAllEnabled) {
        str = str.replaceAll('{' + key + '}', params[key]);
      } else {
        const regExp = new RegExp('{' + key + '}', 'g');
        str = str.replace(regExp, params[key]);
      }
    }
    return str;
  }

  /*****************************************/
  /*      L O A D   L A N G   F I L E      */
  /*****************************************/

  private async loadLang(langCode) {
    // alt code for lazy loading that was taken from a lecture, needs to check if better
    // https://www.youtube.com/watch?v=e2DHWkP2ggc
    // https://blog.profanis.me/blog/lazy-load-angular-components-in-a-hoc
    // componentType = 'lazy' | 'lazy1';
    // const lazyContentComponent = await import(`../${this.componentType}.content/${this.componentType}.content.
    // const componentClassName = lazyContentComponent[`${this.titleCasePipe.transform(this.componentType)}Conten
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClassName);
    // can also use *ngComponentOutlet with the class name

    const file: any = await this.config.loadLang(langCode);
    const className: any = Object.keys(file)[0];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(file[className]);
    const inst: ComponentRef<any> = componentFactory.create(this.injector);
    return inst.instance.text;
  }


  /***************************************************/
  /*      C O M L E M E N T   L A N G   F I L E      */
  /***************************************************/

  private complementLang(langCode, compByLangCode) {
    this.complementNode(this.langs[langCode], this.langs[compByLangCode]);
  }

  private complementNode(target, source) {
    const keys = Object.keys(source);
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      if (target[key] === undefined) {
        if (typeof source[key] === 'object') {
          target[key] = {};
          this.complementNode(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      } else {
        if (typeof target[key] === 'object') {
          this.complementNode(target[key], source[key]);
        } else if (!target[key]) {
          target[key] = source[key];
        }
      }
    }
  }

  private deleteEmptyKeys(node) {
    const keys = Object.keys(node);
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      if (typeof node[key] === 'object') {
        this.deleteEmptyKeys(node[key]);
      } else if (node[key] === '') {
        delete node[key];
      }
    }
  }

  private regSub(sub: Subscription) {
    this.subs.push(sub);
  }

  ngOnDestroy() {
console.log('onDestroy service, subs:', this.subs.length);
    this.subs.forEach(sub => { if (!sub.closed) sub.unsubscribe(); });
  }
}

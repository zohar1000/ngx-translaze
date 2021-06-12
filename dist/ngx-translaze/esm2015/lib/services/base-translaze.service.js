import { __awaiter } from "tslib";
import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
export class BaseTranslazeService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10cmFuc2xhemUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmFuc2xhemUvc3JjL2xpYi9zZXJ2aWNlcy9iYXNlLXRyYW5zbGF6ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQXdCLFVBQVUsRUFBRSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFNaEgsTUFBTSxPQUFnQixvQkFBb0I7SUFXeEMsWUFBWSx3QkFBa0QsRUFDbEQsTUFBZ0Q7UUFWbEQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBYSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEQsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFDNUIsd0JBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBT3ZELElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUtELElBQUk7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFVBQVUsQ0FBQyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVhLE9BQU8sQ0FBQyxRQUFROztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQUUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FB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cEIsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakM7aUJBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQjtTQUNGO0lBQ0gsQ0FBQztJQUVPLE1BQU0sQ0FBQyxHQUFpQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtZQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7OztZQW5KRixVQUFVOzs7WUFMRix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRyYW5zbGF6ZUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcvdHJhbnNsYXplLWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IFRyYW5zbGF6ZUZlYXR1cmVDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnL3RyYW5zbGF6ZS1mZWF0dXJlLWNvbmZpZy5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVHJhbnNsYXplU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJvdGVjdGVkIGNvbmZpZzogVHJhbnNsYXplQ29uZmlnIHwgVHJhbnNsYXplRmVhdHVyZUNvbmZpZztcclxuICBwcm90ZWN0ZWQgbGFuZ3MgPSB7fTtcclxuICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzOiBbXSB9KTtcclxuICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XHJcbiAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgcHJpdmF0ZSBpc1JlcGxhY2VBbGxFbmFibGVkID0gQm9vbGVhbignYSdbJ3JlcGxhY2VBbGwnXSk7XHJcbiAgLy8gdGV4dCQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDx1bmtub3duPignJyk7XHJcbiAgLy8gaXNUZXh0JCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4gIGFwcFRleHQkOiBCZWhhdmlvclN1YmplY3Q8dW5rbm93bj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgICAgICAgIGNvbmZpZzogVHJhbnNsYXplQ29uZmlnIHwgVHJhbnNsYXplRmVhdHVyZUNvbmZpZykge1xyXG4gICAgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEluaXRpYWxMYW5nQ29kZSgpO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRDb25maWcoKTtcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuY2hhbmdlTGFuZyh0aGlzLmdldEluaXRpYWxMYW5nQ29kZSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VMYW5nKGxhbmdDb2RlKSB7XHJcbiAgICB0aGlzLnNldExhbmcobGFuZ0NvZGUpLnRoZW4oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgc2V0TGFuZyhsYW5nQ29kZSkge1xyXG4gICAgaWYgKCF0aGlzLmxhbmdzW2xhbmdDb2RlXSkgYXdhaXQgdGhpcy5sYXp5TG9hZExhbmcobGFuZ0NvZGUpO1xyXG4gICAgaWYgKHRoaXMubGFuZ3NbbGFuZ0NvZGVdKSB0aGlzLm9uTmV3TGFuZ1JlYWR5KGxhbmdDb2RlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbk5ld0xhbmdSZWFkeShsYW5nQ29kZSkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLm9uTGFuZ1RleHRSZWFkeSkgdGhpcy5jb25maWcub25MYW5nVGV4dFJlYWR5KHRoaXMubGFuZ3NbbGFuZ0NvZGVdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgbGF6eUxvYWRMYW5nKGxhbmdDb2RlKSB7XHJcbiAgICBjb25zdCBsYW5nSXRlbSA9IHRoaXMuY29uZmlnLmxhbmdzLmZpbmQoaXRlbSA9PiBpdGVtLmNvZGUgPT09IGxhbmdDb2RlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChsYW5nSXRlbS5jb21wbGVtZW50QnkpIHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW2F3YWl0IHRoaXMubG9hZExhbmcobGFuZ0NvZGUpLCBhd2FpdCB0aGlzLmxvYWRMYW5nKGxhbmdJdGVtLmNvbXBsZW1lbnRCeSldKTtcclxuICAgICAgICB0aGlzLmxhbmdzW2xhbmdDb2RlXSA9IHJlc3VsdHNbMF07XHJcbiAgICAgICAgdGhpcy5sYW5nc1tsYW5nSXRlbS5jb21wbGVtZW50QnldID0gcmVzdWx0c1sxXTtcclxuICAgICAgICB0aGlzLmNvbXBsZW1lbnRMYW5nKGxhbmdDb2RlLCBsYW5nSXRlbS5jb21wbGVtZW50QnkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGFuZ3NbbGFuZ0NvZGVdID0gYXdhaXQgdGhpcy5sb2FkTGFuZyhsYW5nQ29kZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKHRoaXMuY29uZmlnLm9uTG9hZEVycm9yKSB0aGlzLmNvbmZpZy5vbkxvYWRFcnJvcihsYW5nQ29kZSwgdGhpcy5jb25maWcsIGUpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGxhbmd1YWdlIGZpbGUsIGxhbmd1YWdlOicsIGxhbmdDb2RlLCAnLCBjb25maWc6JywgdGhpcy5jb25maWcsICcsIGVycm9yOicsIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8qICAgICAgVCBSIEEgTiBTIEwgQSBUIEUgICAgICAqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICBwdWJsaWMgdHJhbnNsYXRlKHN0ciwgcGFyYW1zPykge1xyXG4gICAgaWYgKCFzdHIpIHJldHVybiAnJztcclxuICAgIGlmICghcGFyYW1zKSByZXR1cm4gc3RyO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW4gJiYgc3RyICE9PSB1bmRlZmluZWQ7IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICBpZiAodGhpcy5pc1JlcGxhY2VBbGxFbmFibGVkKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2VBbGwoJ3snICsga2V5ICsgJ30nLCBwYXJhbXNba2V5XSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCgneycgKyBrZXkgKyAnfScsICdnJyk7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocmVnRXhwLCBwYXJhbXNba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLyogICAgICBMIE8gQSBEICAgTCBBIE4gRyAgIEYgSSBMIEUgICAgICAqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBsb2FkTGFuZyhsYW5nQ29kZSkge1xyXG4gICAgLy8gYWx0IGNvZGUgZm9yIGxhenkgbG9hZGluZyB0aGF0IHdhcyB0YWtlbiBmcm9tIGEgbGVjdHVyZSwgbmVlZHMgdG8gY2hlY2sgaWYgYmV0dGVyXHJcbiAgICAvLyBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWUyREhXa1AyZ2djXHJcbiAgICAvLyBodHRwczovL2Jsb2cucHJvZmFuaXMubWUvYmxvZy9sYXp5LWxvYWQtYW5ndWxhci1jb21wb25lbnRzLWluLWEtaG9jXHJcbiAgICAvLyBjb21wb25lbnRUeXBlID0gJ2xhenknIHwgJ2xhenkxJztcclxuICAgIC8vIGNvbnN0IGxhenlDb250ZW50Q29tcG9uZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8ke3RoaXMuY29tcG9uZW50VHlwZX0uY29udGVudC8ke3RoaXMuY29tcG9uZW50VHlwZX0uY29udGVudC5cclxuICAgIC8vIGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZSA9IGxhenlDb250ZW50Q29tcG9uZW50W2Ake3RoaXMudGl0bGVDYXNlUGlwZS50cmFuc2Zvcm0odGhpcy5jb21wb25lbnRUeXBlKX1Db250ZW5cclxuICAgIC8vIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRDbGFzc05hbWUpO1xyXG4gICAgLy8gY2FuIGFsc28gdXNlICpuZ0NvbXBvbmVudE91dGxldCB3aXRoIHRoZSBjbGFzcyBuYW1lXHJcblxyXG4gICAgY29uc3QgZmlsZTogYW55ID0gYXdhaXQgdGhpcy5jb25maWcubG9hZExhbmcobGFuZ0NvZGUpO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lOiBhbnkgPSBPYmplY3Qua2V5cyhmaWxlKVswXTtcclxuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShmaWxlW2NsYXNzTmFtZV0pO1xyXG4gICAgY29uc3QgaW5zdDogQ29tcG9uZW50UmVmPGFueT4gPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuICAgIHJldHVybiBpbnN0Lmluc3RhbmNlLnRleHQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKiAgICAgIEMgTyBNIEwgRSBNIEUgTiBUICAgTCBBIE4gRyAgIEYgSSBMIEUgICAgICAqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gIHByaXZhdGUgY29tcGxlbWVudExhbmcobGFuZ0NvZGUsIGNvbXBCeUxhbmdDb2RlKSB7XHJcbiAgICB0aGlzLmNvbXBsZW1lbnROb2RlKHRoaXMubGFuZ3NbbGFuZ0NvZGVdLCB0aGlzLmxhbmdzW2NvbXBCeUxhbmdDb2RlXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBsZW1lbnROb2RlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgIGlmICh0YXJnZXRba2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2Vba2V5XSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIHRhcmdldFtrZXldID0ge307XHJcbiAgICAgICAgICB0aGlzLmNvbXBsZW1lbnROb2RlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBsZW1lbnROb2RlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGFyZ2V0W2tleV0pIHtcclxuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGV0ZUVtcHR5S2V5cyhub2RlKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobm9kZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICBpZiAodHlwZW9mIG5vZGVba2V5XSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZUVtcHR5S2V5cyhub2RlW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKG5vZGVba2V5XSA9PT0gJycpIHtcclxuICAgICAgICBkZWxldGUgbm9kZVtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ1N1YihzdWI6IFN1YnNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5zdWJzLnB1c2goc3ViKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG5jb25zb2xlLmxvZygnb25EZXN0cm95IHNlcnZpY2UsIHN1YnM6JywgdGhpcy5zdWJzLmxlbmd0aCk7XHJcbiAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4geyBpZiAoIXN1Yi5jbG9zZWQpIHN1Yi51bnN1YnNjcmliZSgpOyB9KTtcclxuICB9XHJcbn1cclxuIl19
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './pages/about/about.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslazeConfig, TranslazeRootModule } from 'ngx-translaze';
import { setAppText } from './shared/consts/app-text.const';
import { LangEnComponent } from './translations/lang-en.component';
import { LangEsComponent } from './translations/lang-es.component';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

// TODO: locale

const translazeConfig: TranslazeConfig = {
  langs: [
    // { code: 'en', path: `./translations/lang-en.component`, name: 'English', default: true },
    // { code: 'es', path: `./translations/lang-es.component`, name: 'Spanish', complementBy: 'en' }
    { code: 'en', name: 'English', default: true },
    { code: 'es', name: 'Spanish', complementBy: 'en' }
  ],
  isUseBrowserDefaultLang: true,
  loadLang: langCode => import(`./translations/lang-${langCode}.component`),
  // onLangTextReady: text => setAppText(text),
  onLangTextReady: text => environment.appText$.next(text),
  localStorageKey: 'language',
  onLoadError: (langCode, config, e) => console.log('onLoadError:', langCode, config, e)
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // app
    AppRoutingModule,
    SharedModule,

    // translaze
    TranslazeRootModule.forRoot(translazeConfig),

    // Material
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LangEnComponent, LangEsComponent]
})
export class AppModule { }

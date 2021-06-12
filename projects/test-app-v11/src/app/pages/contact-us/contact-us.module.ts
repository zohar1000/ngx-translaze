import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LangEnContactUsComponent } from '../../translations/contact-us/lang-en-contact-us.component';
import { LangEsContactUsComponent } from '../../translations/contact-us/lang-es-contact-us.component';
import { TRANSLAZE_FEATURE_CONFIG, TranslazeFeatureService } from 'ngx-translaze';
// import { TranslazeFeatureModule } from 'ngx-translaze';

const translazeFeatureConfig = {
  featureId : 'contact-us',
  langs: [
    { code: 'en', path: `../../translations/contact-us/lang-en-contact-us.component` },
    { code: 'es', path: `../../translations/contact-us/lang-es-contact-us.component` }
  ],
  loadLang: langCode => import(`../../translations/contact-us/lang-${langCode}-contact-us.component`),
  onLoadError: (langCode, config, e) => console.log('loading feature language component failed:', langCode, config, e)
};

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    SharedModule,
    ContactUsRoutingModule,
    // TranslazeFeatureModule.forChild(translazeFeatureConfig)
  ],
  providers: [
    { provide: TRANSLAZE_FEATURE_CONFIG, useValue: translazeFeatureConfig },
    TranslazeFeatureService
  ],
  entryComponents: [LangEnContactUsComponent, LangEsContactUsComponent]
})
export class ContactUsModule { }

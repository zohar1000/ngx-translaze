import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base-classes/base.component';
import { BehaviorSubject, timer } from 'rxjs';
import { AppText } from '../../../../../test-app-v11/src/app/shared/models/app-text.model';
import { ContactUsText } from '../../../../../test-app-v11/src/app/shared/models/contact-us-text.model';
import { TranslazeFeatureService, TranslazeService } from 'ngx-translaze';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent extends BaseComponent {
  langCode = '${langCode}';

  mdFeatureModule = `
   \`\`\`typescript
import { LangEnContactUsComponent } from '../../translations/contact-us/lang-en-contact-us.component';
import { LangEsContactUsComponent } from '../../translations/contact-us/lang-es-contact-us.component';
import { TRANSLAZE_FEATURE_CONFIG, TranslazeFeatureService } from 'ngx-translaze';

const translazeFeatureConfig = {
  featureId : 'contact-us',
  langs: [
        { code: 'en', path: \`../../translations/contact-us/lang-en-contact-us.component\` },
        { code: 'es', path: \`../../translations/contact-us/lang-es-contact-us.component\` }
  ],
  loadLang: langCode => import(\`../../translations/contact-us/lang-${this.langCode}-contact-us.component\`),
  onLoadError: (langCode, config, e) => console.log('loading user language component failed:', langCode, config, e)
};

@NgModule({
.
.
  providers: [
        { provide: TRANSLAZE_FEATURE_CONFIG, useValue: translazeFeatureConfig },
        TranslazeFeatureService
  ],
  entryComponents: [LangEnContactUsComponent, LangEsContactUsComponent]
})
   \`\`\`
 `;

  mdFeatureConfig = `
   \`\`\`typescript
{
  featureId: string;  // a unique id
  langs: [{
        code: string;
        complementBy?: string;
  }];
  loadLang: (langCode: string) => void;
  onLangTextReady?: (text: string) => void;
  onLoadError?: (langCode: string, config: TranslazeConfig, e: Error) => void;
}
   \`\`\`
 `;

  mdUserComponent = `
   \`\`\`typescript
  appText$: BehaviorSubject<AppText>;
  userText$: BehaviorSubject<UserText>;

  constructor(public translazeFeatureService: TranslazeFeatureService) {
    this.appText$ = this.translazeFeatureService.appText$ as BehaviorSubject<AppText>;
    this.userText$ =  this.translazeFeatureService.featureText$ as BehaviorSubject<UserText>;
   \`\`\`
 `;

  mdUserTemplate1 = `
   \`\`\`html
     <ng-container *ngCond="userText$ | async as text">
        .
        .
        <input placeholder="{{text.enterUserName}}">
        .
     </ng-container>
   \`\`\`
 `;

  mdUserTemplate2 = `
   \`\`\`html
    <ng-container *ngIf="appText$ | async as appText">
        <ng-container *ngIf="userText$ | async as userText">

            <!-- display 'please fill in the form' -->
            <div>{{appText.fillForm}}</div>

            <form>
              .
              .
              <label for="userName">{{text.userName}}</label>
              <input id="userName" name="userName" placeholder="{{text.enterUserName}}">
              .
            </form>
        </ng-container>
    </ng-container>
   \`\`\`
 `;

  mdUserTemplate3 = `
   \`\`\`html
    <ng-container *ngCond="{ appText: appText$, userText: userText$ }">

          <!-- display 'please fill in the form' -->
          <div>{{appText$.value.fillForm}}</div>

          <form>
            .
            .
            <label for="userName">{{userText$.value.userName}}</label>
            <input id="userName" name="userName" placeholder="{{userText$.value.enterUserName}}">
            .
          </form>
    </ng-container>
   \`\`\`
 `;


}

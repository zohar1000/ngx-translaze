import { Component } from '@angular/core';
import { ICopyCodeTooltips } from '@covalent/highlight';
import { copyCodeTooltips } from '../../shared/consts/copy-code-tooltips';
import { BaseComponent } from '../../shared/base-classes/base.component';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent extends BaseComponent {
  inlineFlavoredMarkdown = `
   \`\`\`typescript
     npm install ngx-translaze
   \`\`\`
 `;

  mdTextInterface = `
   \`\`\`typescript
export interface AppText = {
  general: {
       companyName: string;
       productName: string;
  },
  pages: {
       about: {
           title: string;
       },
       users: {
           title: string;
       }
     }
}
   \`\`\`
 `;

  mdVariable = `
   \`\`\`typescript

@Component({
  template: ''
})
export class LangEnComponent {
  appText: AppText = {
        general: {
           companyName: 'Xavilon Inc.',
           productName: 'My Awesome Product'
        },
        pages: {
           about: {
              title: 'About'
           },
           users: {
              title: 'Users'
           }
        }
}
   \`\`\`
 `;

  mdImport = `
   \`\`\`typescript
import { TranslazeConfig, TranslazeRootModule } from 'ngx-translaze';
import { environment } from './environments/environment';

const translazeConfig: TranslazeConfig = {
  langs: [
       { code: 'en', path: \`./translations/lang-en.component\` },
       { code: 'es', path: \`./translations/lang-es.component\` }
  ],
  loadLang: langCode => import(\`./translations/lang-\${langCode}.component\`),   // a function that will lazy load the language component
  setText: text => environment.appText$.next(text)   // a function to will be called when a new language text is ready
};

@NgModule({
  imports: [
       TranslazeRootModule.forRoot(translazeConfig)
  ]
})
   \`\`\`
 `;

  mdLocalVariable = `
   \`\`\`typescript
import { environment } from '../../../environments/environment';

export class MyComponent {
  appText$ = environment.appText$;
  .
}
   \`\`\`
 `;

  mdTemplate = `
   \`\`\`typescript
<ng-container *ngIf="appText$ | async as appText">
  <h1>{{appText.pages.about.title}}</h1><br/>

  <p>Our product <i>{{appText.general.productName}}</i> is a ...</p>
</ng-container>
   \`\`\`
 `;

}

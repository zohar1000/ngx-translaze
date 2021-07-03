import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base-classes/base.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent extends BaseComponent {
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


  mdComponentVariable = `
   \`\`\`typescript
export class AboutComponent {
     appText$: BehaviorSubject<AppText>;
     
     constructor(public translazeService: TranslazeService) {
        this.appText$ = this.translazeService.text$ as BehaviorSubject<AppText>;
     }

   \`\`\`
 `;

  blockquoteMarkdown = `
   > Blockquotes are very handy in email to emulate reply text.
   > This line is part of the same quote.

   Quote break.

   > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure
   this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
 `;

}

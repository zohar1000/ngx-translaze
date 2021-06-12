import { Component } from '@angular/core';
import { ICopyCodeTooltips } from '@covalent/highlight';
import { copyCodeTooltips } from '../../shared/consts/copy-code-tooltips';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss']
})
export class MotivationComponent {
  copyCodeTooltips: ICopyCodeTooltips = copyCodeTooltips;
  codeAngularI18nPre = `
   \`\`\`html
     <h1>Hello</h1>
   \`\`\`
 `;
  codeAngularI18nPost = `
   \`\`\`html
     <h1 i18n="An introduction header for this sample">Hello</h1>
   \`\`\`
 `;
  codeNgxTranslationPre = `
   \`\`\`json
     "home": {
        "hello": "hello {{value}}"
    }
   \`\`\`
 `;
  codeNgxTranslationPost1 = `
   \`\`\`html
     <div [translate]="'home.hello'" [translateParams]="{value: 'world'}"></div>
   \`\`\`
 `;
  codeNgxTranslationPost2 = `
   \`\`\`html
     <div>{{ 'home.hello' | translate:param }}</div>
   \`\`\`
 `;
  codeTranslocoFile = `
   \`\`\`json
   {
      "hello": "transloco en",
      "dynamic": "transloco {{value}}"
    }
   \`\`\`
 `;
  codeTranslocoDirective1 = `
   \`\`\`html
    <ng-container *transloco="let t">
        <p>{{ t('home.hello', { value: dynamic }) }}</p>
        <comp [title]="t('home.hello', params)"></comp>
    </ng-container>
   \`\`\`
 `;
  codeTranslocoDirective2 = `
   \`\`\`html
    <span transloco="home.hello" [translocoParams]="{ value: dynamic }"></span>
   \`\`\`
 `;
  codeTranslocoPipe = `
   \`\`\`html
    <span>{{ 'home.hello' | transloco: { value: dynamic } }}</span>
   \`\`\`
 `;
}

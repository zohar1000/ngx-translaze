import { Component, OnInit } from '@angular/core';
import { ICopyCodeTooltips } from '@covalent/highlight';
import { copyCodeTooltips } from '../../shared/consts/copy-code-tooltips';
import { BaseComponent } from '../../shared/base-classes/base.component';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent extends BaseComponent {
  loadLangLine = 'langCode => import(`./translations/lang-${langCode}.component`)';

  mdConfigSample = `
   \`\`\`typescript
const translazeConfig: TranslazeConfig = {
  langs: [
        { code: 'en', path: \`./translations/lang-en.component\`, name: 'English', default: true },
        { code: 'es', path: \`./translations/lang-es.component\`, name: 'Spanish' }
  ],
  loadLang: ${this.loadLangLine}),
  onLangTextReady: text => setAppText(text),
  localStorageKey: 'language',
  onLoadError: (langCode, config, e) => console.log('onLoadError:', langCode, config, e)
}
   \`\`\`
 `;

  mdConfigInterface = `
   \`\`\`typescript
{
  langs: [{
        code: string;
        name?: string;
        default?: boolean;
        complementBy?: string;
  }];
  loadLang: (langCode: string) => void;
  onLangTextReady?: (text: string) => void;
  onLoadError?: (langCode: string, config: TranslazeConfig, e: Error) => void;
  localStorageKey?: string;
  isUseBrowserDefaultLang?: boolean;
}
   \`\`\`
 `;
}

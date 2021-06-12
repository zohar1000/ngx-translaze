import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base-classes/base.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent extends BaseComponent
{
  mdComponent = `
   \`\`\`typescript
import { TranslazeService } from 'ngx-translaze';

export class MyComponent {
  appText$: BehaviorSubject<AppText>;

  constructor(private translazeService: TranslazeService) {
        this.appText$ = this.translazeService.text$;
  }

  onClickChangeLang(langCode) {
        const config = this.translazeService.getConfig();
        this.translazeService.changeLang(config.langCode);
  }
}
   \`\`\`
 `;

}

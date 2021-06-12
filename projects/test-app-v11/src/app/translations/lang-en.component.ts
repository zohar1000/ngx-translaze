import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppText } from '../shared/models/app-text.model';

@Component({
  template: ''
})
export class LangEnComponent {
  text: AppText = {
    general: {
      companyName: 'Xavilon Inc.',
      productName: 'My Awesome App'
    },
    pages: {
      about: {
        title: 'About'
      },
      users: {
        title: 'Users'
      }
    }
  };
}

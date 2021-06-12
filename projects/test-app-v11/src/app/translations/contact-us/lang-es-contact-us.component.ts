import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactUsText } from '../../shared/models/contact-us-text.model';

@Component({
  selector: 'app-lang-es-contact-us',
  template: ''
})
export class LangEsContactUsComponent {
  // English
  text: ContactUsText = {
    title: 'Contact Us Title in SPANISH'
  };
}

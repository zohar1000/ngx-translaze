import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactUsText } from '../../shared/models/contact-us-text.model';

@Component({
  selector: 'app-lang-en-contact-us',
  template: ''
})
export class LangEnContactUsComponent {
  // English
  text: ContactUsText = {
    title: 'Contact Us Title in ENGLISH'
  };
}

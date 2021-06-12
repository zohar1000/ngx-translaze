import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { AppText } from '../../../shared/models/app-text.model';
import { TranslazeFeatureService, TranslazeLang, TranslazeLangStatus, TranslazeService } from 'ngx-translaze';
import { ContactUsText } from '../../../shared/models/contact-us-text.model';
import { environment } from '../../../../environments/environment';

interface User {
  name: string;
  address: {
    city: string;
    state: string;
  };
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  appText$: BehaviorSubject<AppText>;
  featureText$: BehaviorSubject<any>;
  isMultiz1 = false;
  isMultiz2 = false;
  promise: Promise<any>;
  users: User[];
  ft: ContactUsText = {
    title: 'TEST COMPONENT Title'
  };
  // timer$ = timer(0, 2000); // .pipe(map(value => Math.floor(value / 3)));
  timer$ = timer(2000); // .pipe(map(value => Math.floor(value / 3)));
  testValue = '';

  constructor(public translazeService: TranslazeService,
              public translazeFeatureService: TranslazeFeatureService) {
    this.appText$ = this.translazeFeatureService.appText$ as BehaviorSubject<AppText>;
    this.featureText$ =  this.translazeFeatureService.featureText$;

    this.translazeService.lang$.subscribe((data: TranslazeLang) => {
      if (data && data.status === TranslazeLangStatus.Start) {
        this.translazeFeatureService.changeLang(data.langCode);
      }
    });

    this.users = [{
      name: 'Zohar',
      address: { city: 'Ramat Gan', state: 'Israel' }
    }];

    // setTimeout(() => console.log('timer'), 5000);

    // setInterval(() => this.isMultiz2 = !this.isMultiz2, 1000);

    // setTimeout(() => {
    //   console.log('timeout');
    //   this.featureText$.next({ title: 'TITLE TEST!!!' });
    // }, 2500);

    this.promise = new Promise((resolve, reject) => {
      // setTimeout(() => resolve('OK'), 2000);
      setTimeout(() => reject('OK'), 2000);
    });
  }

  st() {
    setTimeout(() => {});
  }
}

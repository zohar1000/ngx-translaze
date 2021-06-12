import { Component } from '@angular/core';
import { AppText } from '../../shared/models/app-text.model';
import { BehaviorSubject } from 'rxjs';
import { TranslazeService } from 'ngx-translaze';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  appText$ = environment.appText$;
  // envAppText2 = environment.appText$;

  constructor(public translazeService: TranslazeService) {
    // this.appText$ =  this.translazeService.text$ as BehaviorSubject<AppText>;
  }
}

import { Component } from '@angular/core';
import { TranslazeService } from 'ngx-translaze';
import { TranslazeInfo } from 'ngx-translaze';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  langCode;
  langs;

  constructor(private translazeService: TranslazeService) {
    this.translazeService.text$.subscribe(() => {
      const info: TranslazeInfo = this.translazeService.getInfo();
      this.langs = info.config.langs;
      this.langCode = info.langCode;
    });
    // setTimeout(() => console.log('APP START'), 100);
  }

  async onChangeLang() {
    await this.translazeService.changeLang(this.langCode);
  }
}

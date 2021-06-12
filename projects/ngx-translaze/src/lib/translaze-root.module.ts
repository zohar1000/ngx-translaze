import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslazeConfig } from './models/config/translaze-config.model';
import { TRANSLAZE_CONFIG } from './tokens/translaze-config.token';

@NgModule({})
export class TranslazeRootModule {
  static forRoot(config: TranslazeConfig): ModuleWithProviders<TranslazeRootModule> {
    return {
      ngModule: TranslazeRootModule,
      providers: [{ provide: TRANSLAZE_CONFIG, useValue: config }]
    };
  }
}

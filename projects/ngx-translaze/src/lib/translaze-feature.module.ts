import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslazePipe } from './pipes/translaze.pipe';
import { TranslazeFeatureConfig } from './models/config/translaze-feature-config.model';
import { TRANSLAZE_FEATURE_CONFIG } from './tokens/translaze-feature-config.token';
import { TranslazeService } from './services/translaze.service';

@NgModule({
  declarations: [TranslazePipe],
  exports: [TranslazePipe]
})
export class TranslazeFeatureModule {
  // static translazeService: TranslazeService;
  // id = -1;
  //
  // constructor(translazeService: TranslazeService) {
  //   if (this.id === -1) this.id = Math.floor(Math.random() * 1000) + 1;
  //   console.log('TranslazeFeatureModule id:', this.id);
  //   TranslazeFeatureModule.translazeService = translazeService;
  // }
  //
  // static forChild(config: TranslazeFeatureConfig): ModuleWithProviders<TranslazeFeatureModule> {
  //   TranslazeFeatureModule.translazeService.setFeatureModule(config);
  //
  //   return {
  //     ngModule: TranslazeFeatureModule,
  //     providers: [{ provide: TRANSLAZE_FEATURE_CONFIG, useValue: config }]
  //   };
  // }
}

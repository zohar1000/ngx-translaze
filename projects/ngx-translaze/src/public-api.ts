/*
 * Public API Surface of ngx-translaze
 */

export { TranslazePipe } from './lib/pipes/translaze.pipe';
export { TranslazeConfig } from './lib/models/config/translaze-config.model';
export { TranslazeFeatureConfig } from './lib/models/config/translaze-feature-config.model';
export { TranslazeLocalStorage } from './lib/models/translaze-local-storage.model';
export { TranslazeOnText } from './lib/models/translaze-on-text.model';
export { translaze } from './lib/translaze.const';
export { TranslazeService } from './lib/services/translaze.service';
export { TranslazeFeatureService } from './lib/services/translaze-feature.service';
export { TranslazeRootModule } from './lib/translaze-root.module';
export { TranslazeFeatureModule } from './lib/translaze-feature.module';
export { TRANSLAZE_FEATURE_CONFIG } from './lib/tokens/translaze-feature-config.token';
export { TranslazeInfo } from './lib/models/info/translaze-info.model';
export { TranslazeLang } from './lib/models/translaze-lang.model';
export { TranslazeLangStatus } from './lib/enums/translaze-lang-status.enum';

import { TranslazeConfig } from './translaze-config.model';
import { TranslazeFeatureConfig } from './translaze-feature-config.model';
export interface BaseTranslazeConfig {
    loadLang: (langCode: string) => void;
    onLangTextReady?: (text: any) => void;
    onLoadError?: (langCode: string, config: TranslazeConfig | TranslazeFeatureConfig, e: Error) => void;
}

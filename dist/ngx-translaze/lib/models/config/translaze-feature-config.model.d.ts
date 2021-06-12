import { BaseTranslazeConfig } from './base-translaze-config.model';
export interface TranslazeFeatureConfig extends BaseTranslazeConfig {
    featureId: string;
    langs: Array<{
        code: string;
        complementBy?: string;
    }>;
}

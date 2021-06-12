import { BaseTranslazeConfig } from './base-translaze-config.model';
export interface TranslazeConfig extends BaseTranslazeConfig {
    langs: Array<{
        code: string;
        name?: string;
        icon?: any;
        default?: boolean;
        complementBy?: string;
    }>;
    isUseBrowserDefaultLang?: boolean;
    localStorageKey?: string;
}

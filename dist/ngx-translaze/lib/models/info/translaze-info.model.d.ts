import { TranslazeConfig } from '../config/translaze-config.model';
export interface TranslazeInfo {
    config: TranslazeConfig;
    langCode: string;
    langName: string;
}

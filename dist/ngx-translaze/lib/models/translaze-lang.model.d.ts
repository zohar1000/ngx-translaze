import { TranslazeLangStatus } from '../enums/translaze-lang-status.enum';
export interface TranslazeLang {
    status: TranslazeLangStatus;
    langCode: string;
    prevLangCode?: string;
    text?: any;
}

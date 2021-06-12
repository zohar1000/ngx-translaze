import { BehaviorSubject } from 'rxjs';
import { AppText } from '../models/app-text.model';
import { environment } from '../../../environments/environment';

export let appText$: BehaviorSubject<AppText> = new BehaviorSubject<AppText>(('' as unknown) as AppText);
export const setAppText = (text: AppText) => {
  appText$.next(text);
  environment.appText$.next(text);
};

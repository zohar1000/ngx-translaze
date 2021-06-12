import { ICopyCodeTooltips } from '@covalent/highlight';
import { copyCodeTooltips } from '../../shared/consts/copy-code-tooltips';

export abstract class BaseComponent {
  copyCodeTooltips: ICopyCodeTooltips = copyCodeTooltips;
}

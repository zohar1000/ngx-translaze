import { Pipe, PipeTransform } from '@angular/core';
import { TranslazeService } from '../services/translaze.service';

@Pipe({ name: 'translaze' })
export class TranslazePipe implements PipeTransform {
  constructor(private translazeService: TranslazeService) {}

  transform(str: unknown, args: unknown): unknown {
    return this.translazeService.translate(str, args);
  }
}

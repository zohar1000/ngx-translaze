import { PipeTransform } from '@angular/core';
import { TranslazeService } from '../services/translaze.service';
import * as ɵngcc0 from '@angular/core';
export declare class TranslazePipe implements PipeTransform {
    private translazeService;
    constructor(translazeService: TranslazeService);
    transform(str: unknown, args: unknown): unknown;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslazePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<TranslazePipe, "translaze">;
}

//# sourceMappingURL=translaze.pipe.d.ts.map
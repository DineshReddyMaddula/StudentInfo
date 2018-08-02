import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[validateYear][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => YearValidator),
            multi: true
        }
    ]
})

export class YearValidator implements Validator {
    
    constructor(@Attribute('validateYear') public validateYear: number) { }

    validate(c: AbstractControl): {} {
        let v = c.value;
        if (v > 2017) return {
            validateYear: true
        }
        return null
    }
}
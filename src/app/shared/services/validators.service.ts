import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeCristian = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();

    return value === 'cristian' ? { noCristian: true } : null;
  };

  isValidField(form: FormGroup, field: string): boolean | null {
    // prettier-ignore
    return form.controls[field].errors && form.controls[field].touched;
  }
}

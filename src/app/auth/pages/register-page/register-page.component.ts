import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.formBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(
            this.validatorsService.firstNameAndLastnamePattern
          ),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorsService.cantBeCristian],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorsService.isFieldOneEqualFieldTwo(
          'password',
          'confirmPassword'
        ),
      ],
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ) {}

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}

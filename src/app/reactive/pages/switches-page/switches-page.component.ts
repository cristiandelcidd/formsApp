import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup = this.formBuilder.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  public person = { gender: 'F', wantNotifications: false };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
  }

  isValidField(field: string): boolean | null {
    // prettier-ignore
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }
}

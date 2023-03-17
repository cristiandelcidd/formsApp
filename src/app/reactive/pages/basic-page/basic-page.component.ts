import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({ price: 0, inStorage: 0 });
  }

  isValidField(field: string): boolean | null {
    // prettier-ignore
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      if (key === 'required') return 'El campo es requerido';
      else if (key === 'minlength')
        return `Este campo requiere al menos ${errors['minlength'].requiredLength} letras`;
    }

    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) return this.myForm.markAllAsTouched();

    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}

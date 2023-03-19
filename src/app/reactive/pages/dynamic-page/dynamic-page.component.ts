import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPage {
  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteMovies: this.formBuilder.array([
      ['Harry Potter', Validators.required],
      ['Spiderman', Validators.required],
    ]),
  });

  public newFavorite: FormControl = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {}

  get favoriteMovies(): FormArray<any> {
    return this.myForm.get('favoriteMovies') as FormArray;
  }

  onDeleteFavorite(index: number): void {
    this.favoriteMovies.removeAt(index);
  }

  onAddToFavorites(): void {
    if (this.newFavorite.invalid) return;

    this.favoriteMovies.push(
      this.formBuilder.control(this.newFavorite.value, Validators.required)
    );

    this.newFavorite.reset();
  }

  isValidField(field: string): boolean | null {
    // prettier-ignore
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    (this.myForm.controls['favoriteMovies'] as FormArray) =
      this.formBuilder.array([]);

    this.myForm.reset();
  }
}

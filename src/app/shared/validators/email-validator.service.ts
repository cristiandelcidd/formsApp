import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (susbcriber) => {
        if (email === 'cristian@correo.com') {
          susbcriber.next({ emailTaken: true });
          susbcriber.complete();
          return;
        }

        susbcriber.next(null);
        susbcriber.complete();
      }
    ).pipe(delay(3000));

    return httpCallObservable;
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;

  //   return of({ emailTaken: true }).pipe(delay(2000));
  // }
}

// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rfRegister: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.rfRegister = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), this.comparePassword]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  get email() {
    return this.rfRegister.get('email');
  }

  get phone() {
    return this.rfRegister.get('phone');
  }

  get password() {
    return this.rfRegister.get('password');
  }

  // get confirmPassword() { return this.rfRegister.get('confirmPassword'); }
  // comparePassword(control: AbstractControl) {
  //   const passwordControl = control.get('password');
  //   const confirmPasswordControl = control.get('confirmPassword');
  //   console.log(passwordControl);
  //   console.log(confirmPasswordControl);
  //   if (passwordControl?.value !== confirmPasswordControl?.value) {
  //     return { passwordNotMatch: true };
  //   }
  //   return null;
  // }
  comparePassword(control: AbstractControl): ValidationErrors | null {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');
    console.log(passwordControl);
    console.log(confirmPasswordControl);

    // if (passwordControl?.value !== confirmPasswordControl?.value) {
    //   return { passwordNotMatch: true };
    // }
    // return null;
    if (passwordControl && confirmPasswordControl && passwordControl.touched && passwordControl.value !== confirmPasswordControl.value) {
      return {passwordNotMatch: true};
    } else {
      return null;
    }
  }

  // checkAge(control: AbstractControl) {
  //   const age = control.value;
  //   return age < 18 ? {ageDown18: true} : null;
  // }
}

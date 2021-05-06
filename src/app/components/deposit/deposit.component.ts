import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  enteredAmount: any;
  public selection: string;
  radioOtherAccount: boolean = false;
  constructor(private readonly router: Router,
    private location: LocationStrategy) {
      history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
    });
     }
  depositFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(4),
    Validators.minLength(4),
  ]);
  accountFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10),
  ]);

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    if (this.selection == 'other-account') {
      this.radioOtherAccount = true;
    }
  }
  depositAmount(amount) {
    if (this.depositFormControl.valid) {
      this.enteredAmount = amount;
      localStorage.setItem('amount', this.enteredAmount);
      this.router.navigate(['/confirm-pay']);
    }
  }
}

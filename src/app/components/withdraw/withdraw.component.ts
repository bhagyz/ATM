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
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  enteredAmount: any;

  constructor(private readonly router: Router,
    private location: LocationStrategy) {
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }
  withdrawFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(4),
    Validators.minLength(4),
  ]);

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
  }
  withdrawAmount(amount) {
    if (this.withdrawFormControl.valid) {
      this.enteredAmount = amount;
      if (Number(this.enteredAmount) > 10000) {
        alert('Not enough money in account.');
      } else if (Number(this.enteredAmount) <= 10000) {
        localStorage.setItem('amount', this.enteredAmount);
        this.router.navigate(['/confirm-pay']);
      }

    }
  }
}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserIdleService } from 'angular-user-idle';
import { DialogService } from './../../services/dialog.service';
import { LocationStrategy } from '@angular/common';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("dialog") dialog: ElementRef;
  private enteredPinValue: number = 0;

  constructor(private readonly router: Router,
    private userIdle: UserIdleService,
    private dialogService: DialogService,
    private location: LocationStrategy
  ) {
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
    });
  }

  pinFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(4),
    Validators.minLength(4),
  ]);

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => this.showBtnClick());
  }
  checkPin(pin) {
    if (this.pinFormControl.valid) {
      this.enteredPinValue = pin;
      this.router.navigate(['/account-type']);
    }
  }
  showBtnClick() {
    this.dialogService.showDialog(this.dialog.nativeElement, {
      content: 'Please don\'t keep idle, proceed with your transaction.',
      header: 'Idle for sometime....!',
      buttons: [{ click: this.hideBtnClick.bind(this) }]
    });

  }

  hideBtnClick(e) {
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe();
    this.userIdle.onTimeout().subscribe(() => this.showBtnClick());
    this.dialogService.hideDialog();
  }
}

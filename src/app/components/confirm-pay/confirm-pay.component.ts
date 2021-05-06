import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LocationStrategy } from '@angular/common';
@Component({
  selector: 'app-confirm-pay',
  templateUrl: './confirm-pay.component.html',
  styleUrls: ['./confirm-pay.component.scss']
})
export class ConfirmPayComponent implements OnInit {
accountType: any;
enteredAmount: any;
  constructor(private router: Router,
    private location: LocationStrategy) {
      history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
    });
     }

  ngOnInit(): void {
    this.accountType = localStorage.getItem('accountType');
    this.enteredAmount = localStorage.getItem('amount');
  }
  navigate(path) {
    if (path == 'back') {
      this.router.navigate(['/home']);
    } else if (path == 'confirm') {
      this.router.navigate(['/receipt']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent implements OnInit {
selectedAccountType: string = '';
  constructor(private readonly router: Router,
    private location: LocationStrategy) { 
      history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
    });
    }

  ngOnInit(): void {
  }
  navigate(accountType) {
    this.selectedAccountType = accountType;
    localStorage.setItem("accountType", this.selectedAccountType);
    this.router.navigate(['/home']);
  }
}

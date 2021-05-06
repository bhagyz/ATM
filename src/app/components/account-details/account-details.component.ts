import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private router: Router,
    private location: LocationStrategy) {
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
    });
   }

  ngOnInit(): void {
  }
  navigate(path) {
    if (path == 'back') {
      this.router.navigate(['/home']);
    } else if (path == 'confirm') {
      this.router.navigate(['/thankyou']);
    }
  }
}

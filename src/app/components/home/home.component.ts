import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly router: Router,
    private location: LocationStrategy) {history.pushState(null, null, window.location.href);
      this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
      });
     }

  ngOnInit(): void {
  }
navigate (path) {
  if (path == 'fast-cash'){
    this.router.navigate(['/fast-cash']);
  } else if (path == 'withdraw') {
    this.router.navigate(['/withdraw']);
  } else if (path == 'deposit') {
    this.router.navigate(['/deposit']);
  } else if (path == 'account-details') {
    this.router.navigate(['/account-details']);
  } else if (path == 'transfer') {
    this.router.navigate(['/deposit']);
  }
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-fast-cash',
  templateUrl: './fast-cash.component.html',
  styleUrls: ['./fast-cash.component.scss']
})
export class FastCashComponent implements OnInit {
  fastCash: any;
  constructor(private readonly router: Router,
    private location: LocationStrategy) {
      history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
    });
     }

  ngOnInit(): void {
  }
  fastAmount(amount) {
    this.fastCash = amount;
    if (Number(this.fastCash) > 10000) {
      alert('Not enough money in account.');
    } else if (Number(this.fastCash) <= 10000) {
      localStorage.setItem('amount', this.fastCash);
      this.router.navigate(['/confirm-pay']);
    }
  }
}

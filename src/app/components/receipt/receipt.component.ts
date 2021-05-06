import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  constructor(private router: Router,
    private location: LocationStrategy) { history.pushState(null, null, window.location.href);
      this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
      });
    }

  ngOnInit(): void {
  }
  navigate(path) {
    if (path == 'savetree'){
      this.router.navigate(['/thankyou']);
    } else if (path == 'print') {
      this.router.navigate(['/thankyou']);
    } else if (path == 'transaction') {
      this.router.navigate(['/home']);
    }
  }
}

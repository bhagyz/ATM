import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  languageBtnClicked: boolean = false;
  constructor(
    public translate: TranslateService,
    private readonly router: Router,
    private location: LocationStrategy
  ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.router.navigate(['/login']);
  }
}

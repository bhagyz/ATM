import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserIdleModule } from 'angular-user-idle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DialogService } from './services/dialog.service';

import { DialogModule } from '@syncfusion/ej2-angular-popups';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FastCashComponent } from './components/fast-cash/fast-cash.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { ConfirmPayComponent } from './components/confirm-pay/confirm-pay.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WelcomeComponent,
    FastCashComponent,
    WithdrawComponent,
    AccountTypeComponent,
    ConfirmPayComponent,
    DepositComponent,
    AccountDetailsComponent,
    ReceiptComponent,
    ThankyouComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    // Optionally you can set time for `idle`, `timeout` and `ping` in seconds.
    // Default values: `idle` is 600 (10 minutes), `timeout` is 300 (5 minutes) 
    // and `ping` is 120 (2 minutes).
    UserIdleModule.forRoot({idle: 10, timeout: 6, ping: 12})
  ],
  providers: [DialogService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { color: 'primary', appearance: 'fill'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
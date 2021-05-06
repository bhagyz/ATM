import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FastCashComponent } from './components/fast-cash/fast-cash.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { ConfirmPayComponent } from './components/confirm-pay/confirm-pay.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'account-type',
    component: AccountTypeComponent
  },
  {
    path: 'account-details',
    component: AccountDetailsComponent
  },
  {
    path: 'receipt',
    component: ReceiptComponent
  },
  {
    path: 'thankyou',
    component: ThankyouComponent
  },
  {
    path: 'deposit',
    component: DepositComponent
  },
  {
    path: 'confirm-pay',
    component: ConfirmPayComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'fast-cash',
    component: FastCashComponent
  },
  {
    path: 'withdraw',
    component: WithdrawComponent
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { BalanceComponent } from './balance/balance.component';
import { AccountComponent } from './account/account.component';
import { UpdateComponent } from './update/update.component';
import { LoginGuard } from './services/login.guard';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path:'', component:LoginComponent,canActivate:[LoginGuard]
  },
  {
    path:"dashboard", component:DashboardComponent, canActivate:[AuthGuard]
  },
  {
    path:"register", component : RegisterComponent
  },
  {
    path:"transaction", component : TransactionComponent
  },
  {
    path:"deposit", component : DepositComponent
  },
  {
    path:"withdraw", component: WithdrawComponent
  },
  {
    path:"transfer", component: TransferComponent
  },
  {
    path:"balance", component: BalanceComponent
  },
  {
    path :"account", component : AccountComponent
  },
  {
    path : "update", component : UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

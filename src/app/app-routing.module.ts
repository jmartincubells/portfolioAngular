import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent },
  {path: 'login', component: LoginComponent },
  {path: '', redirectTo: './index', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRoutingModule { }

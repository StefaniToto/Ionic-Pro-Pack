import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';


export const LoginSignupRoutes = [
  {
    path: 'template-1',
    loadComponent : () => import('./login-signup-template-1/login-signup-template-1.component').then(c=>c.LoginSignupTemplate1Component)
  }
  ]

@NgModule({
  declarations: [],
  providers: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginSignupRoutes)
  ],
})
export class LoginSignupModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

export const LoginSignupRoutes = [
  {
    path: 'template-1',
    loadComponent: () =>
      import(
        './login-signup-template-1/login-signup-template-1.component'
      ).then((c) => c.LoginSignupTemplate1Component),
  },
  {
    path: 'template-2',
    loadComponent: () =>
      import(
        './login-signup-template-2/login-signup-template-2.component'
      ).then((c) => c.LoginSignupTemplate2Component),
  },
  {
    path: 'template-3',
    loadComponent: () =>
      import(
        './login-signup-template-3/login-signup-template-3.component'
      ).then((c) => c.LoginSignupTemplate3Component),
  },
  {
    path: 'template-tinder-4',
    loadComponent: () =>
      import(
        './login-signup-template-tinder-4/login-signup-template-tinder-4.component'
      ).then((c) => c.LoginSignupTemplateTinder4Component),
  },
  {
    path: 'template-boo-5',
    loadComponent: () =>
      import(
        './login-signup-template-boo-5/login-signup-template-boo-5.component'
      ).then((c) => c.LoginSignupTemplateBoo5Component),
  },
  {
    path: 'template-telegram-6',
    loadComponent: () =>
      import(
        './login-signup-template-telegram-6/login-signup-template-telegram-6.component'
      ).then((c) => c.LoginSignupTemplateTelegram6Component),
  },
  {
    path: 'template-facebook-7',
    loadComponent: () =>
      import(
        './login-signup-template-facebook-7/login-signup-template-facebook-7.component'
      ).then((c) => c.LoginSignupTemplateFacebook7Component),
  },
  {
    path: 'template-instagram-8',
    loadComponent: () =>
      import(
        './login-signup-template-instagram-8/login-signup-template-instagram-8.component'
      ).then((c) => c.LoginSignupTemplateInstagram8Component),
  },
];

@NgModule({
  declarations: [],
  providers: [],
  imports: [CommonModule, RouterModule.forChild(LoginSignupRoutes)],
})
export class LoginSignupModule {}

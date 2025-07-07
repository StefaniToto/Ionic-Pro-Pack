import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeModuleRouting } from './stripe-module-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StripeModuleRouting,
    HttpClientModule,
  ],
  providers: [
    HttpClient
  ]
})
export class StripeModuleModule { }

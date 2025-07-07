import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaypalModuleRouting } from './paypal-module-routing.module';
import { PaymentService } from './services/payment.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaypalModuleRouting
  ],
  providers: [
    PaymentService
  ]
})
export class PaypalModuleModule { }

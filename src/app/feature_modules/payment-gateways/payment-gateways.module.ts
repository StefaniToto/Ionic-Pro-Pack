import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeModuleModule } from './stripe-module/stripe-module.module';
import { PaypalModuleModule } from './paypal-module/paypal-module.module';
import { ApplePayModuleModule } from './apple-pay-module/apple-pay-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StripeModuleModule,
    PaypalModuleModule,
    ApplePayModuleModule
  ]
})
export class PaymentGatewaysModule { }

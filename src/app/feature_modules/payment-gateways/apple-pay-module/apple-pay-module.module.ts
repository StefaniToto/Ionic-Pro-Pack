import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
import { ApplePayRouting } from './apple-pay-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApplePayRouting
  ],
  providers: [ApplePay]
})
export class ApplePayModuleModule { }

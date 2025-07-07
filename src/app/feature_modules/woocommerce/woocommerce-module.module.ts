import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WoocommerceRouting } from './woocommerce-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    WoocommerceRouting
  ],
  providers: [HttpClient]
})
export class WoocommerceModule { }

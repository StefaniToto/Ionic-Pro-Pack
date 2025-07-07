import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { WoocommerceRouting } from './woocommerce-routing.module';

@NgModule({ declarations: [], imports: [CommonModule,
        IonicStorageModule.forRoot(),
        WoocommerceRouting], providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())] })
export class WoocommerceModule { }

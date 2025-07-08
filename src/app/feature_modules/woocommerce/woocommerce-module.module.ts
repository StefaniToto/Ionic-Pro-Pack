import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { WoocommerceRouting } from './woocommerce-routing.module';


@NgModule({ declarations: [], imports: [CommonModule,
        WoocommerceRouting], providers: [HttpClient,Storage,provideHttpClient(withInterceptorsFromDi())] })
export class WoocommerceModule { }

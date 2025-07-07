import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeModuleRouting } from './stripe-module-routing.module';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ declarations: [], imports: [CommonModule,
        StripeModuleRouting], providers: [
        HttpClient,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class StripeModuleModule { }

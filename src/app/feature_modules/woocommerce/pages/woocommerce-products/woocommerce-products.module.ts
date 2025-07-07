/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoocommerceProductsPageRoutingModule } from './woocommerce-products-routing.module';

import { WoocommerceProductsPage } from './woocommerce-products.page';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [WoocommerceProductsPage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        WoocommerceProductsPageRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class WoocommerceProductsPageModule {}

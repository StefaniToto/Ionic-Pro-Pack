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
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { UberMapFlowPageRoutingModule } from './uber-map-flow-routing.module';

import { UberMapFlowPage } from './uber-map-flow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    UberMapFlowPageRoutingModule
  ],
  declarations: [UberMapFlowPage]
})
export class UberMapFlowPageModule { }

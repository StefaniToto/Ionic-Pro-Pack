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

import { GooglePlacesPageRoutingModule } from './google-places-routing.module';

import { GooglePlacesPage } from './google-places.page';
import {SharedModule} from '../../shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglePlacesPageRoutingModule,
    SharedModule
  ],
  declarations: [GooglePlacesPage]
})
export class GooglePlacesPageModule { }

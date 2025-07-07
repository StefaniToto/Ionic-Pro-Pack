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

import { GoogleAutocompletePageRoutingModule } from './google-autocomplete-routing.module';

import { GoogleAutocompletePage } from './google-autocomplete.page';
import { GoogleMapsModule } from '@angular/google-maps';
import { provideHttpClient, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';

@NgModule({ declarations: [GoogleAutocompletePage], imports: [CommonModule,
        FormsModule,
        IonicModule,
        GoogleMapsModule,
        GoogleAutocompletePageRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())] })
export class GoogleAutocompletePageModule { }

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { IonicModule } from '@ionic/angular';
import { FirebaseHomePageRoutingModule } from './firebase-home-routing.module';
import { FirebaseHomePage } from './firebase-home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseHomePageRoutingModule
  ],
  declarations: [FirebaseHomePage, FilterPipe]
})
export class FirebaseHomePageModule { }

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
import { IonicModule } from '@ionic/angular';
import { Slider1Component } from '../../components/slider1/slider1.component';
import { Slider2Component } from '../../components/slider2/slider2.component';
import { Slider3Component } from '../../components/slider3/slider3.component';
import { Slider4Component } from '../../components/slider4/slider4.component';
import { Slider5Component } from '../../components/slider5/slider5.component';
import { SlidersPageRoutingModule } from './sliders-routing.module';
import { SlidersPage } from './sliders.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidersPageRoutingModule
  ],
  declarations: [SlidersPage, Slider1Component, Slider2Component, Slider3Component, Slider4Component, Slider5Component]
})
export class SlidersPageModule { }

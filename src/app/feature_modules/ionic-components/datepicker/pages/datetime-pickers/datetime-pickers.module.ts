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

import { DatetimePickersPageRoutingModule } from './datetime-pickers-routing.module';

import { DatetimePickersPage } from './datetime-pickers.page';
import { SharedModule } from '../../shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimePickersPageRoutingModule,
    SharedModule
  ],
  declarations: [DatetimePickersPage]
})
export class DatetimePickersPageModule { }

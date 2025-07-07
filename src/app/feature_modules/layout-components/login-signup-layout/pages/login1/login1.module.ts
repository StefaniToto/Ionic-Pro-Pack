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

import { Login1PageRoutingModule } from './login1-routing.module';

import { Login1Page } from './login1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Login1PageRoutingModule
  ],
  declarations: [Login1Page]
})
export class Login1PageModule {}

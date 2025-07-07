/**
 * Capacitor Full App - Ionic Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusBarPage } from './status-bar.page';

const routes: Routes = [
  {
    path: '',
    component: StatusBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusBarPageRoutingModule {}

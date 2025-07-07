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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicModule } from '@ionic/angular';

import { TranslatePageRoutingModule } from './translate-routing.module';

import { TranslatePage } from './translate.page';
export const httpLoaderFactory =(http: HttpClient)=> new TranslateHttpLoader(http, '../../assets/i18n/', '.json');


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslatePageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [TranslatePage]
})
export class TranslatePageModule { }

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FunctionService } from '../../services/function.service';
import { PRODUCTS_1 } from '../../data/grid-data';

@Component({
    selector: 'app-shop-grid',
    templateUrl: './shop-grid.page.html',
    styleUrls: ['./shop-grid.page.scss'],
    standalone: false
})
export class ShopGridPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  public products: Array<any>;

  constructor(public funcServ: FunctionService) {

    this.products = PRODUCTS_1;
  }

  ngOnInit() {
  }

}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.page.html',
    styleUrls: ['./product-card.page.scss'],
    standalone: false
})
export class ProductCardPage implements OnInit {
  public electronicsList: Array<any>;

  constructor() {

    this.electronicsList = environment.ELECTRONICS_LIST;
  }

  ngOnInit() {
  }

  favorites(index: number) {
    this.electronicsList[index].checked = !this.electronicsList[index].checked;
  }

}

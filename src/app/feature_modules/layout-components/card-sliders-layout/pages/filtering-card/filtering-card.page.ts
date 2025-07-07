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
  selector: 'app-filtering-card',
  templateUrl: './filtering-card.page.html',
  styleUrls: ['./filtering-card.page.scss'],
})
export class FilteringCardPage implements OnInit {
  public dataLists: Array<any>;
  public activeIndex: number;

  constructor() {

    this.dataLists = environment.FILTERING_LIST;
  }

  ngOnInit() {
    this.activeIndex = 0;
  }

  activeRow(index: number) {
    this.activeIndex = index;
  }

}

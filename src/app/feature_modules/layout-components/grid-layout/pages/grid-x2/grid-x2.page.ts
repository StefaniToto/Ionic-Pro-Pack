/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ELECTRONICS_LIST } from '../../data/grid-data';

@Component({
  selector: 'app-grid-x2',
  templateUrl: './grid-x2.page.html',
  styleUrls: ['./grid-x2.page.scss'],
})
export class GridX2Page implements OnInit {
  public electronicsList: Array<any>;

  constructor() {
    this.electronicsList = ELECTRONICS_LIST;
  }

  ngOnInit() {
  }

  favorites(index) {
    this.electronicsList[index].checked = !this.electronicsList[index].checked;
  }

}

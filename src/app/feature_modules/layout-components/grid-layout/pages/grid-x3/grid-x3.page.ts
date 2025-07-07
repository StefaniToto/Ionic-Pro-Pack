/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ELECTRONICS } from '../../data/grid-data';

@Component({
    selector: 'app-grid-x3',
    templateUrl: './grid-x3.page.html',
    styleUrls: ['./grid-x3.page.scss'],
    standalone: false
})
export class GridX3Page implements OnInit {
  public electronics: Array<any>;
  constructor() {

    this.electronics = ELECTRONICS;
  }

  ngOnInit() {
  }

}

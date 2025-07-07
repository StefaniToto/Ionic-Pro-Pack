/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { FULL_WIDTH_IMAGES } from '../../data/grid-data';
// import { environment } from '@env/environment';

@Component({
    selector: 'app-full-grid',
    templateUrl: './full-grid.page.html',
    styleUrls: ['./full-grid.page.scss'],
    standalone: false
})
export class FullGridPage implements OnInit {
  public gridImages: Array<any>;

  constructor() {
    this.gridImages = FULL_WIDTH_IMAGES;
  }

  ngOnInit() {
  }

}

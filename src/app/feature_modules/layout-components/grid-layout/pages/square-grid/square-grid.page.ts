/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { SQUARE_GRID } from '../../data/grid-data';

@Component({
  selector: 'app-square-grid',
  templateUrl: './square-grid.page.html',
  styleUrls: ['./square-grid.page.scss'],
})
export class SquareGridPage implements OnInit {
  public gridImages: Array<any>;


  constructor() {

    this.gridImages = SQUARE_GRID;
  }

  ngOnInit() {
  }

}

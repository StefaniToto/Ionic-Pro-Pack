/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content-loader2',
    templateUrl: './content-loader2.page.html',
    styleUrls: ['./content-loader2.page.scss'],
    standalone: false
})
export class ContentLoader2Page implements OnInit {
  public itemData: any;

  constructor() {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.itemData = {
        heading: 'Normal text',
        para1: 'Lorem ipsum dolor sit amet, consectetur',
        para2: 'adipiscing elit.'
      };
    }, 5000);
  }

}

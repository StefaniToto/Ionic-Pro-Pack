/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit } from '@angular/core';
import { INSTAGRAM_DATA } from '../../data/instagram-data';

@Component({
    selector: 'instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.scss'],
    standalone: false
})
export class InstagramComponent implements OnInit {
  public instaData: Array<any>;

  constructor() {
    this.instaData = INSTAGRAM_DATA;
  }

  ngOnInit() {

  }

}

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
    selector: 'app-slider2',
    templateUrl: './slider2.component.html',
    styleUrls: ['./slider2.component.scss'],
    standalone: false
})
export class Slider2Component implements OnInit {
  public gridImages: Array<any>;
  public slideOpts = {};

  constructor() {
    this.slideOpts = {
      effect: 'cube',
    };
    this.gridImages = environment.FULL_WIDTH_IMAGES;
  }

  ngOnInit() { }

}

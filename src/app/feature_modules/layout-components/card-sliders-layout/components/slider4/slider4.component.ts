/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '@env/environment';

@Component({
    selector: 'app-slider4',
    templateUrl: './slider4.component.html',
    styleUrls: ['./slider4.component.scss'],
    standalone: false
})
export class Slider4Component implements OnInit {
  @ViewChild('slides', { static: true }) slides: any;
  public electronicsList: Array<any>;
  public numbers: Array<any>;
  public slideOpts= {
    effect: 'cube',
    zoom: false
  };

  constructor() {
    this.numbers = Array(6).fill('1');
    this.electronicsList = environment.ELECTRONICS_LIST_2;
  }

  ngOnInit() { }

  favorites(index) {
    this.electronicsList[index].checked = !this.electronicsList[index].checked;
  }

}

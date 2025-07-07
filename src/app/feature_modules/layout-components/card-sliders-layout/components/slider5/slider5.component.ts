/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { environment } from '@env/environment';

@Component({
  selector: 'app-slider5',
  templateUrl: './slider5.component.html',
  styleUrls: ['./slider5.component.scss'],
})
export class Slider5Component implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  public electronicsList: Array<any>;
  public numbers;
  slideOpts = {
    effect: 'cube',
    zoom: false
  };


  constructor() {
    this.numbers = Array(6).fill('1');
    this.electronicsList = environment.ELECTRONICS_LIST_3;
  }

  ngOnInit() { }

  favorites(index) {
    this.electronicsList[index].checked = !this.electronicsList[index].checked;
  }

}

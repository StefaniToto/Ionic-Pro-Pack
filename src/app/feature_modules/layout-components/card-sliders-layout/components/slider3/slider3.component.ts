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
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-slider3',
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.scss'],
})
export class Slider3Component implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  public pages: Array<any> = [];

  constructor(public cardServ: CardService) {
    this.pages = this.cardServ.Slider;
  }

  ngOnInit() {
    this.slides.options = {
      effect: 'fade'
    };
  }

}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tindericons',
  templateUrl: './tindericons.component.html',
  styleUrls: ['./tindericons.component.scss'],
})
export class TindericonsComponent implements OnInit {
  @Input() value: any;public data: any;
  public slideOpts = {
    effect: 'flip'
  };

  show: boolean;
  isIos: boolean;

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public route: Router,
    public platform: Platform
  ) {
    this.data = this.navParams.get('value');
    this.show = false;
    this.isIos = this.platform.is('ios');
  }

  ngOnInit() { }

  closeModal(id: any) {
    this.modalCtrl.dismiss();
    if (id === 'star' || 'refresh' && id !== 'flash') {
    }
  }

  showcustomButton(index: number) {
    if (index === 1) {
      this.show = true;
    } else if (index === 0 || index === 2) {
      this.show = false;
    }
  }

}

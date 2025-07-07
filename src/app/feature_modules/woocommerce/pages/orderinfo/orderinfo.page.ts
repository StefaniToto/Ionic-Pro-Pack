/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-orderinfo',
  templateUrl: './orderinfo.page.html',
  styleUrls: ['./orderinfo.page.scss'],
})
export class OrderinfoPage implements OnInit {
  public order: any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {

    this.order = this.navParams.get('value');
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}

/**
 * Capacitor Full App - Ionic Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Device } from '@capacitor/device';

@Component({
    selector: 'app-device',
    templateUrl: './device.page.html',
    styleUrls: ['./device.page.scss'],
    standalone: false
})
export class DevicePage implements OnInit {
  deviceInfo: any;
  constructor(
    private menuCtrl: MenuController,
  ) {

  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

  ngOnInit() {
  }

  async getDeviceInfo() {
    const info = await Device.getInfo();
    console.log(info);
    this.deviceInfo = info;
  }
}

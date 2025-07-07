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

import { Animation, StatusBar, Style } from '@capacitor/status-bar';

@Component({
    selector: 'app-status-bar',
    templateUrl: './status-bar.page.html',
    styleUrls: ['./status-bar.page.scss'],
    standalone: false
})
export class StatusBarPage {
  statusBarInfo: any;
  constructor(
    private menuCtrl: MenuController,
  ) { }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
    this.getCurrentStatusBarInfo();
  }

  async showStatusBar() {
    await StatusBar.show({ animation: Animation.Fade });
    this.getCurrentStatusBarInfo();
  }

  async hidetatusBar() {
    await StatusBar.hide({ animation: Animation.Slide });
    this.getCurrentStatusBarInfo();
  }

  async setStyleDark() {
    await StatusBar.setStyle({ style: Style.Dark });
    this.getCurrentStatusBarInfo();
  }

  async setStyleLight() {
    await StatusBar.setStyle({ style: Style.Light });
    this.getCurrentStatusBarInfo();
  }

  getCurrentStatusBarInfo(){
    StatusBar.getInfo().then((info) => {
      this.statusBarInfo = info;
      // Output
      //color: "#000000"
      // overlays: false
      // style: "DARK"
      // visible: true
    });
  }
}

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
import { Clipboard } from '@capacitor/clipboard';


@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {
  secretKey = 'asnsdUdf83-sdf#DFD-ahGwCOZxpcdi-19238';
  pastedContent: any;
  custom = '';
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

  copyKey() {
    Clipboard.write({
      string: this.secretKey
    });
  }
  copyCustom() {
    Clipboard.write({
      string: this.custom
    });
  }
  async paste() {
    const str = await Clipboard.read();
    this.pastedContent = str.value;
  }
}

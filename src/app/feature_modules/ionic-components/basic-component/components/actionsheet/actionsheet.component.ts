/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.component.html',
  styleUrls: ['./actionsheet.component.scss'],
})
export class ActionsheetComponent implements OnInit {
  public response: string;

  constructor(public actionSheetController: ActionSheetController) {
    this.response = '';
  }

  ngOnInit() { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.response = 'Delete clicked';
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            this.response = 'Share clicked';
          }
        }, {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            this.response = 'Play clicked';
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            this.response = 'Favorite clicked';
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

}

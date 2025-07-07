/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { FLUID_CHAT_DATA } from '../../data/chat-screen-data';

@Component({
  selector: 'app-fluid',
  templateUrl: './fluid.page.html',
  styleUrls: ['./fluid.page.scss'],
})
export class FluidPage implements OnInit {
  public conversation: Array<any>;
  public phoneModel: string;
  public textInput: string;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private menuCtrl: MenuController
  ) {

    this.conversation = FLUID_CHAT_DATA;
  }

  ngOnInit() {
    this.phoneModel = 'iPhone';
    this.textInput = '';
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');

    setTimeout(() => {
      this.scrollToBottom();
    }, 10);
    setTimeout(() => {
      this.presentAlert();
    }, 100);


  }

  async presentAlert() {
    if (this.platform.is('ios')) {
      switch (this.platform.height()) {
        case 812:
          this.phoneModel = 'iPhone X';
          break;
        case 736:
          this.phoneModel = 'iPhone 6/7/8 Plus';
          break;
        case 667:
          this.phoneModel = 'iPhone 6/7/8';
          break;
      }

      const alert = await this.alertController.create({
        header: 'Hey there',
        subHeader: 'Information',
        message: 'We have adjusted the layout as per the phone model - ' + this.phoneModel,
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  send() {
    if (this.textInput !== '') {
      this.conversation.push({ text: this.textInput, sender: 1, image: 'assets/chat/images/sg1.jpg' });
      this.textInput = '';
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    }
  }
  something($event: any) {
    $event.preventDefault();
  }
  scrollToBottom() {
    const content = document.getElementById('chat-container');
    const parent = document.getElementById('chat-parent');
    const scrollOptions = {
      left: 0,
      top: content.offsetHeight
    };
    parent.scrollTo(scrollOptions);
  }


}

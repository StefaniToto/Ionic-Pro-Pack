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
import { ScreenReader } from '@capacitor/screen-reader';
import { UtilService } from '../../services/util.service';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
@Component({
  selector: 'app-screen-reader',
  templateUrl: './screen-reader.page.html',
  styleUrls: ['./screen-reader.page.scss'],
})
export class ScreenReaderPage implements OnInit {
  text = 'Screen Reader is helpful when you want to give extra information to a user, other than the text written on the screen. For example, when double clicking a button, you can tell the user what the button does.';
  constructor(
    private menuCtrl: MenuController,
    private util: UtilService
  ) {

  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(false, 'end');
    ScreenReader.addListener('stateChange', ({ value }) => {
      console.log(`Screen reader is now ${value ? 'on' : 'off'}`);
    });
  }

  ngOnInit() {
  }

  async check() {
    const { value } = await ScreenReader.isEnabled();
    this.util.presentToast('Voice over enable status - ' + value, 'bottom', 1500);
  }

  async readText() {
    await ScreenReader.speak({ value: this.text });
  }

  ionViewWillLeave() {
    ScreenReader.removeAllListeners();
  }

  async speak(){
      await TextToSpeech.speak({
        text: this.text,
        lang: 'en-US',
        rate: 1.0,
        pitch: 1.0,
        volume: 1.0,
        category: 'ambient',
      });
  }

  async stop(){
    await TextToSpeech.stop();
  }

  async checkLanguages(){
    const languages = await TextToSpeech.getSupportedLanguages();
    console.log(languages);
  }
}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { INAPP_BORWSER_BLANKURL } from '../../data/inapp-browser-data';
import { Browser, OpenOptions } from '@capacitor/browser';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-in-app-browser',
  templateUrl: './in-app-browser.page.html',
  styleUrls: ['./in-app-browser.page.scss'],
})
export class InAppBrowserPage implements OnInit {

  options: OpenOptions = {
    url: '',
    windowName: '_blank', // web only
    toolbarColor: '#444444', // A hex color to which the toolbar color is set
    presentationStyle: 'popover', // iOS only 'popover' / 'fullscreen'
  };
  public blankUrls: Array<any>;
  public systemUrls: Array<any>;

  constructor(public util: UtilService) {

    this.blankUrls = this.shuffle(JSON.parse(JSON.stringify(INAPP_BORWSER_BLANKURL)));
    this.systemUrls = this.shuffle(JSON.parse(JSON.stringify(INAPP_BORWSER_BLANKURL)));


  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    Browser.addListener('browserPageLoaded',()=>{
      console.log('Browser page loaded');
      this.util.presentToast('Browser page loaded','bottom',2000);
    });
    Browser.addListener('browserFinished',()=>{
      console.log('Browser page closed');
      this.util.presentToast('Browser page closed','bottom',2000);
    });
  }

  ionViewWillLeave(){
    Browser.removeAllListeners();
  }

  shuffle(array) {
    let currentIndex = array.length; let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  async openBlankUrl(url) {
    this.options.url = url;
    this.options.windowName = '_blank';
    await Browser.open(this.options);
  }
  async openSystemUrl(url) {
    this.options.url = url;
    this.options.windowName = '_system';
    await Browser.open(this.options);
  }

}

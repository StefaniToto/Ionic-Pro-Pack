/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
    selector: 'app-view-video',
    templateUrl: './view-video.page.html',
    styleUrls: ['./view-video.page.scss'],
    standalone: false
})
export class ViewVideoPage implements OnInit {
  public videourl: any;

  constructor(
    public modalCtrl: ModalController,
    public navParms: NavParams,
    public sanitizer: DomSanitizer
  ) {
    this.videourl = this.navParms.data.url;
  }

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}

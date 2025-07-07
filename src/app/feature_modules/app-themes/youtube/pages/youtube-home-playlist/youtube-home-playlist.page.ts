/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { ViewVideoPage } from '../view-video/view-video.page';
import { MenuController, ModalController } from '@ionic/angular';
import { YOUTUBE_HOME_PLAYLIST } from '../../data/youtube-data';

@Component({
    selector: 'app-youtube-home-playlist',
    templateUrl: './youtube-home-playlist.page.html',
    styleUrls: ['./youtube-home-playlist.page.scss'],
    standalone: false
})
export class YoutubeHomePlaylistPage implements OnInit {
  public gridImages: Array<any>;

  constructor(
    public modalCtrl: ModalController,
    public menuCtrl: MenuController
  ) {

    this.gridImages = YOUTUBE_HOME_PLAYLIST;
  }

  ngOnInit() {
  }

  async viewVideo(videoUrl: any) {
    const modal = await this.modalCtrl.create({
      component: ViewVideoPage,
      componentProps: { url: videoUrl },
      cssClass: 'viewVideoModal'
    });
    return modal.present();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

}

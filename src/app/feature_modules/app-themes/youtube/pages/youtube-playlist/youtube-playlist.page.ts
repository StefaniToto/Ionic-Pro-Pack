/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { YOUTUBE_HOME_PLAYLIST } from '../../data/youtube-data';

@Component({
    selector: 'app-youtube-playlist',
    templateUrl: './youtube-playlist.page.html',
    styleUrls: ['./youtube-playlist.page.scss'],
    standalone: false
})
export class YoutubePlaylistPage implements OnInit {
  public currentVideo: any;
  public playlistImages: Array<any>;

  constructor(
    public sanitizer: DomSanitizer,
    private menuCtrl: MenuController
  ) {

    this.playlistImages = YOUTUBE_HOME_PLAYLIST;
    this.changeCurrentVideo(this.playlistImages[0]);
  }

  ngOnInit() {
  }
  changeCurrentVideo(video) {
    this.currentVideo = video;
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }
}

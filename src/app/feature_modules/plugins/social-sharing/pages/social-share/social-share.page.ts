
/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { SocialSharingUtilService } from '../../services/util.service';
import { SOCIAL_SHARE } from '../../data/social-sharing-data';
import { Share } from '@capacitor/share';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
    selector: 'app-social-share',
    templateUrl: './social-share.page.html',
    styleUrls: ['./social-share.page.scss'],
    standalone: false
})
export class SocialSharePage {
  public socialShare: Array<any>;
  public shareData = {
    title: 'Capacitor Full App with Angular',
    text: 'This app implements lots of layouts plus all the features of Capacitor ',
    url: 'https://enappd.com',
    dialogTitle: 'Share with Enappd'
  };

  constructor(
    private util: SocialSharingUtilService
  ) {

    this.socialShare = SOCIAL_SHARE;
  }

  async share() {
    await Share.share({
      title: this.shareData.title,
      text: this.shareData.text,
      url: this.shareData.url,
      dialogTitle: this.shareData.dialogTitle,
    });
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      allowEditing: false
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image.path;

    // Can be set to the src of an image now
    this.shareData.url = imageUrl;
  }
}

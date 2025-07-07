
/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit, NgZone } from '@angular/core';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { Camera, CameraDirection, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.page.html',
  styleUrls: ['./cropper.page.scss'],
})
export class CropperPage {
  public galleryImage: any;
  public cameraImage: any;
  public editedImage: any;
  public selfie: any;

  constructor(
    private menuCtrl: MenuController,
    public actionCtrl: ActionSheetController,
    public domSanitizer: DomSanitizer,
    public platform: Platform,
    private ngZone: NgZone
  ) {

  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
    this.checkPermission();
  }


  checkPermission() {
    const isWeb = (this.platform.is('mobileweb') || this.platform.is('desktop'));

    if (!isWeb) {
      Camera.checkPermissions().then((res) => {
        console.log(res);
        if (res.camera !== 'granted') {
          Camera.requestPermissions({ permissions: ['camera'] });
        }
        if (res.photos !== 'granted') {
          Camera.requestPermissions({ permissions: ['photos'] });
        }
      });
    }
  }

  openCamera() {
    const options: ImageOptions = {
      quality: 100,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    };
    Camera.getPhoto(options)
      .then((image) => {
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        const imageUrl = image.webPath;

        // Can be set to the src of an image now
        this.ngZone.run(() => {
          this.cameraImage =
            this.domSanitizer.bypassSecurityTrustUrl(imageUrl);
        });
      });
  }

  public openGallery() {

    const options: ImageOptions = {
      quality: 100,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    };

    Camera.getPhoto(options)
      .then((image) => {
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        const imageUrl = image.webPath;

        // Can be set to the src of an image now
        this.ngZone.run(() => {
          this.galleryImage =
            this.domSanitizer.bypassSecurityTrustUrl(imageUrl);
        });
      });
  }

  editPhoto() {
    const options: ImageOptions = {
      quality: 100,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      allowEditing: true,
      saveToGallery: true
    };

    Camera.getPhoto(options)
      .then((image) => {
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        const imageUrl = image.webPath;

        // Can be set to the src of an image now
        this.ngZone.run(() => {
          this.editedImage =
            this.domSanitizer.bypassSecurityTrustUrl(imageUrl);
        });
      });
  }

  takeSelfie() {
    const options: ImageOptions = {
      quality: 100,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      direction: CameraDirection.Front
    };
    Camera.getPhoto(options)
      .then((image) => {
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        const imageUrl = image.webPath;

        // Can be set to the src of an image now
        this.ngZone.run(() => {
          this.selfie =
            this.domSanitizer.bypassSecurityTrustUrl(imageUrl);
        });
      });
  }


}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, NgZone } from '@angular/core';
import { StorageService } from '../../services/filestorage.service';
import { FirestoreService } from '../../services/firestore.service';
import { FireStorageUtilService } from '../../services/util.service';
import { ActionSheetController, AlertController, MenuController } from '@ionic/angular';
import { UUID } from 'angular2-uuid';
import { Camera, CameraDirection, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.page.html',
  styleUrls: ['./image-upload.page.scss'],
})
export class ImageUploadPage implements OnInit {
  public imageList: any;
  public isUpdate: any;

  constructor(
    private firestoreServ: FirestoreService,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    public util: FireStorageUtilService,
    private ngZone: NgZone,
    private storageServ: StorageService
  ) {

  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

  ngOnInit() {
    this.util.userid.subscribe(data => {
      this.firestoreServ.getImages().subscribe(imgList => {
        this.imageList = imgList;
      });
    });
  }
  async openAlert(index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Sure want to delete this!!!',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          cssClass: 'secondary',
          handler: () => {
            this.deleteData(index);
          }
        }, {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel');

          }
        }
      ]
    });

    await alert.present();
  }


  chooseImage() {
    const options: ImageOptions = {
      quality: 100,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    };
    Camera.getPhoto(options)
      .then((image) => {
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        const imageUrl = image.webPath;

        const name = UUID.UUID();
        // let name = url.split('/');
        this.util.getBlob(imageUrl).then(imageData => {
          this.util.openInfLoader();
          this.storageServ.uploadContent(imageData, name).then(success => {
            this.util.closeLoading();
            this.util.presentToast('image uploaded', true, 'bottom', 2100);

          }).catch(err => {
            this.util.closeLoading();
            this.util.presentToast(`${err}`, true, 'bottom', 2100);
          });
        });
      }).catch(err => { console.log(err); });;

  }

  public deleteData(id) {
    this.firestoreServ.delete('fileReferences', id).then(() => {
      this.util.presentToast('Image Deleted', true, 'bottom', 2100);
    }).catch();
  }

}

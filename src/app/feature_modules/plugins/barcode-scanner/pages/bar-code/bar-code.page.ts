import { Component, OnInit } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { BarCodeModalComponent } from '../../components/bar-code-modal/bar-code-modal.component';
import {BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
    selector: 'app-bar-code',
    templateUrl: './bar-code.page.html',
    styleUrls: ['./bar-code.page.scss'],
    standalone: false
})
export class BarCodePage implements OnInit {
  public scannedData= {};
  public isWeb = false;

  constructor(
    private platform: Platform,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.isWeb = (this.platform.is('mobileweb') || this.platform.is('desktop'));
  }

  async scanBarCode() {
    // BarcodeScanner.hideBackground(); // make background of WebView transparent

    // Style the webview to allow Camera to be visible for barcode
    document.body.style.background = 'none';
    document.body.style.opacity = '0.5';
    // this.showModal();
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // re-style the webview to normal
    // this.modalCtrl.dismiss();
    document.body.style.background = 'inherit';
    document.body.style.opacity = '1';
    // if the result has content
    // if (result) {
    //   this.scannedData = result;
    //   BarcodeScanner.startScan();
    // }
  }

  async didUserGrantPermission() {
    // check if user already granted permission
    const status = await BarcodeScanner.checkPermissions();

    if (status.camera) {
      // user granted permission
      this.scanBarCode();
      return;
    }

    if (status.camera) {
      // user denied permission
      // the user denied permission for good
      // redirect user to app settings if they want to grant it anyway
      const c = confirm(
        'If you want to grant permission for using your camera, enable it in the app settings.',
      );
      if (c) {
        BarcodeScanner.openSettings();
      }
      return;
    }

    if (status.camera) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }

    if (status.camera) {
      // user has not been requested this permission before
      // it is advised to show the user some sort of prompt
      // this way you will not waste your only chance to ask for the permission
      const c = confirm(
        'We need your permission to use your camera to be able to scan barcodes',
      );
      if (!c) {
        return false;
      }
    }

    if (status.camera || status.camera) {
      // ios only
      // probably means the permission has been denied
      return false;
    }

    // user has not denied permission
    // but the user also has not yet granted the permission
    // so request it
    const statusRequest = await BarcodeScanner.checkPermissions();
    if (statusRequest) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }

    if (statusRequest) {
      // the user did grant the permission now
      this.scanBarCode();
      return;
    }

  };


  async showModal() {
    const modal = await this.modalCtrl.create({
      component: BarCodeModalComponent
    });
    modal.onDidDismiss().then(() => {
      BarcodeScanner.stopScan();
    });
    // eslint-disable-next-line no-return-await
    return await modal.present();
  }

}

/**
 * Capacitor Full App - Ionic Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialSharingModule } from './social-sharing/social-sharing.module';
import { InappBrowserModule } from './inapp-browser/inapp-browser.module';
import { BarcodeScannerModule } from './barcode-scanner/barcode-scanner.module';
import { LocalNotificationModule } from './local-notification/local-notification.module';
import { ImageCropperModule } from './image-cropper/image-cropper.module';
import { ClipboardModule } from './clipboard/clipboard.module';
import { DeviceModule } from './device/device.module';
import { AdMobModule } from './admob/admob.module';
import { PushModule } from './push/push.module';
import { ScreenReaderModule } from './screen-reader/screen-reader.module';
import { SplashScreenModule } from './splash-screen/splash-screen.module';
import { StatusBarModule } from './status-bar/status-bar.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialSharingModule,
    InappBrowserModule,
    BarcodeScannerModule,
    LocalNotificationModule,
    ImageCropperModule,
    ClipboardModule,
    DeviceModule,
    AdMobModule,
    PushModule,
    ScreenReaderModule,
    SplashScreenModule,
    StatusBarModule
  ]
})
export class PluginsModule { }

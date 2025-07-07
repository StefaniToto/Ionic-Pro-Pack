/**
 * Capacitor Full App - Ionic Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, NgZone } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { UtilService } from '../../services/util.service';

import { PushNotifications, Token, PushNotificationSchema, ActionPerformed, Importance } from '@capacitor/push-notifications';
import { Browser, OpenOptions } from '@capacitor/browser';

@Component({
  selector: 'app-push',
  templateUrl: './push.page.html',
  styleUrls: ['./push.page.scss'],
})
export class PushPage {
  pushList = [];
  channelList = [];
  channel: any;
  constructor(
    private menuCtrl: MenuController,
    private util: UtilService,
    private platform: Platform,
    private ngZone: NgZone
  ) {
  }


  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');

    this.attachListeners();
  }

  checkPermission() {
    PushNotifications.checkPermissions().then((res) => {
      console.log(res);
      if (res.receive !== 'granted') {
        PushNotifications.requestPermissions().then((res) => {
          if (res.receive === 'denied') {
            this.util.presentToast('Push Notification permission denied', 'bottom', 1500);
          }
          else {
            this.util.presentToast('Push Notification permission granted', 'bottom', 1500);
            this.register();
          }
        });
      }
      else {
        this.register();
      }
    });
  }

  attachListeners() {
    console.log('Initializing HomePage');
    if (this.platform.is('capacitor')) {
      // On success, we should be able to receive notifications
      PushNotifications.addListener('registration',
        (token: Token) => {
          console.log('registered', token);
          this.util.presentToast('Push registered', 'bottom', 1500);
        }
      );

      // Some issue with our setup and push will not work
      PushNotifications.addListener('registrationError',
        (error: any) => {
          console.log('error', error);
          alert('Error on registration: ' + JSON.stringify(error));
        }
      );

      // Show us the notification payload if the app is open on our device
      PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotificationSchema) => {
          console.log('notif', notification);
          this.ngZone.run(() => {
            this.util.presentToast('You received a push. Check data in list or console', 'bottom', 2500);
            this.pushList.push({ id: notification.id, title: notification.title, body: notification.body });
          });
        }
      );

      // Method called when tapping on a notification
      PushNotifications.addListener('pushNotificationActionPerformed',
        (notification: ActionPerformed) => {
          console.log('notification', notification);
          this.ngZone.run(() => {
            this.util.presentToast('You tapped a push. Check data in list or console', 'bottom', 2500);
            this.pushList.push({ id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body });
          });
        }
      );
    }
  }

  register() {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register().then((res) => {
      console.log(res);
    });
  }

  ionViewWillLeave() {
    if(!this.platform.is('mobileweb') && !this.platform.is('desktop')){
      PushNotifications.removeAllListeners().then(() => {
        console.log('All listeners removed');
      });
    }
  }
  async goToLink() {
    const options: OpenOptions = {
      url: 'https://enappd.com/blog/firebase-push-notification-in-ionic-react-capacitor/111/',
      windowName: '_system'
    };
    await Browser.open(options);
  }

  createChannel() {
    const imp: Importance = 5;
    this.channel = {
      id: 'important',
      name: 'Important',
      description: 'Created for important notifications',
      importance: imp,
      sound: 'beep.wav'
    };
    PushNotifications.createChannel(this.channel).then(() => {
      console.log('Channel created');
    });
  }
  listChannel() {
    PushNotifications.listChannels().then((res) => {
      console.log(res);
      this.channelList = res.channels;
    });
  }
  removeChannel() {
    PushNotifications.deleteChannel(this.channel);
  }

  reset() {
    this.channelList = [];
    this.pushList = [];
  }
}

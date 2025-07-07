/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, NgZone, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Importance, LocalNotifications, ScheduleEvery, Visibility } from '@capacitor/local-notifications';
import { UtilService } from '../../services/util.service';
@Component({
  selector: 'app-local-notification',
  templateUrl: './local-notification.page.html',
  styleUrls: ['./local-notification.page.scss'],
})
export class LocalNotificationPage {
  public clickSub: any;
  public showData = true;
  public dataOn = 'tap';
  public notifData = [];

  constructor(public platform: Platform,
    private ngZone: NgZone,
    public util: UtilService,
    public alertController: AlertController
  ) {

  }

  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: data,
      buttons: ['OK']
    });

    await alert.present();
  }

  ionViewWillEnter() {
    LocalNotifications.removeAllListeners();
  }

  ionViewDidEnter() {
    LocalNotifications.checkPermissions().then((res) => {
      console.log(res);
      if (res.display !== 'granted') {
        LocalNotifications.requestPermissions().then((res) => {
          console.log(res);
        });
      }
    });
    this.changeGetMode();

  }

  changeGetMode() {
    this.register();
    if (this.dataOn === 'tap') {
      LocalNotifications.removeAllListeners();
      // To receive all the notificaiton data in the app when notification is tapped
      LocalNotifications.addListener('localNotificationActionPerformed', (data) => {
        console.log('clicked', data);

        this.util.presentToast('You clicked a notification. Check data in console.', 'top', 2000);
        if (this.showData) {
          this.ngZone.run(() => {
            this.notifData.push(data.notification);
          });
        }
      });
    }
    if (this.dataOn === 'receive') {
      LocalNotifications.removeAllListeners();
      // To receive all the notificaiton data in the app when notification is received
      LocalNotifications.addListener('localNotificationReceived', (data) => {
        console.log('received', data);

        this.util.presentToast('You received notification(s). Check data in console.', 'top', 2000);
        if (this.showData) {
          this.ngZone.run(() => {
            this.notifData.push(data);
          });
        }
      });
    }
  }

  register() {
    const isWeb = (this.platform.is('mobileweb') || this.platform.is('desktop'));
    if (!isWeb) {
      const inputAction = { id: '1', title: 'Input', input: true, inputButtonTitle: 'Reply', inputPlaceholder: 'Write your reply here' };
      const foregroundAction = { id: '2', title: 'Foreground', foreground: true };
      const destructive = { id: '3', title: 'Destructive', destructive: true };

      LocalNotifications.registerActionTypes({ types: [{ id: '1', actions: [inputAction] }, { id: '2', actions: [foregroundAction] }] }).then((res) => {
        console.log(res);
      });
    }
  }

  ionViewWillLeave() {
    LocalNotifications.removeAllListeners();
  }

  simpleNotif() {
    this.notifData = [];
    const notification = {
      title: 'Single Notification',
      body: 'Hello World how are you',
      id: 1,
      extra: { data: 'This is extra data' },
      actionTypeId: '3',
      sound: './public/assets/beep.wav',
    };
    LocalNotifications.schedule({
      notifications: [notification]
    }).then((data) => {
      console.log(data);
    });

  }
  soundNotif() {
    if (this.platform.is('ios')) {
      const notification = {
        title: 'Sound Notification',
        body: 'Hello World listen to this',
        id: 1,
        sound: './public/assets/beep.wav',
      };
      LocalNotifications.schedule({
        notifications: [notification]
      }).then((data) => {
        console.log(data);
      });
    }
    else {
      this.notifData = [];
      const imp: Importance = 5;
      const vis: Visibility = 1;
      const channel = {
        id: 'sound',
        name: 'sound',
        importance: imp,
        sound: 'beep.wav',
        visibility: vis,
        vibration: true
      };
      LocalNotifications.createChannel(channel).then(() => {
        const notification = {
          title: 'Sound Notification',
          body: 'Hello World listen to this',
          id: 1,
          channelId: 'sound'
        };
        LocalNotifications.schedule({
          notifications: [notification]
        }).then((data) => {
          console.log(data);
        });
      });
    }
  }
  bigIconNotif() {
    const notification = {
      title: 'Big Icon Notification',
      body: 'Hello World watch this',
      id: 1,
      sound: './public/assets/beep.wav',
      largeIcon: 'notif_large_icon'
    };
    LocalNotifications.schedule({
      notifications: [notification]
    }).then((data) => {
      console.log(data);
    });
  }

  foreNotif() {
    if (this.platform.is('ios')) {
      this.notifData = [];
      const notification = {
        title: 'Foreground Notification',
        body: 'Hello World how are you',
        id: 2,
        extra: { data: 'Extra data' },
        sound: './public/assets/beep.wav',
        actionTypeId: '2'
      };
      LocalNotifications.schedule({
        notifications: [notification]
      }).then((data) => {
        console.log(data);
      });
    }
    else {
      this.notifData = [];
      const imp: Importance = 5;
      const vis: Visibility = 1;
      const channel = {
        id: 'important',
        name: 'important',
        importance: imp,
        visibility: vis,
        vibration: true
      };
      LocalNotifications.createChannel(channel).then(() => {
        const notification = {
          title: 'Foreground Notification',
          body: 'Hello World important announcement',
          id: 1,
          channelId: 'important'
        };
        LocalNotifications.schedule({
          notifications: [notification]
        }).then((data) => {
          console.log(data);
        });
      });
    }

  }
  multipleNotif() {
    const notification_1 = {
      title: '1/2 Notification',
      body: 'Hello World how are you',
      sound: './public/assets/beep.wav',
      id: 3,
      extra: { data: 'Extra data' }
    };
    const notification_2 = {
      title: '2/2 Notification',
      body: 'Are you alright world ?',
      sound: './public/assets/beep.wav',
      id: 4,
      extra: { data: 'Extra data' }
    };
    LocalNotifications.schedule({ notifications: [notification_1, notification_2] });
  }

  repeatNotif() {
    const _every: ScheduleEvery = 'minute';
    const schedule = this.platform.is('ios') ?
      { allowWhileIdle: true, count: 3, every: _every } :  // This to repeat every 3 min, 3 times ? (iOS)
      { allowWhileIdle: true, on: { second: 60 } }; // This to repeat every 60 sec, until cancelled. Does not repeat if previous notif is not cleared (Android)
    const notification = {
      title: 'Repeat Notification',
      body: 'Hello World I\'m late ',
      id: 5,
      sound: './public/assets/beep.wav',
      extra: { data: 'Extra data' },
      schedule
    };
    LocalNotifications.schedule({ notifications: [notification] });

    // Cancel the repeat notifications
  }
  delayNotif() {
    const t = new Date();
    const newT = new Date(t.setSeconds(t.getSeconds() + 5));
    const schedule = { at: newT };
    const notification = {
      title: 'Scheduled Notification',
      body: 'Hello World I\'m scheduled ',
      sound: './public/assets/beep.wav',
      id: 6,
      extra: { data: 'Extra data' },
      schedule
    };
    LocalNotifications.schedule({ notifications: [notification] });
  }

  multiLineNotif() {
    const notification = {
      title: 'Multi-line Notification',
      body: 'This is a multi-line message',
      sound: './public/assets/beep.wav',
      largeBody: 'This is a multi-line message. You might have already figured this out, but this will spill over in next line',
      id: 7
    };
    LocalNotifications.schedule({ notifications: [notification] });

  }


  inputNotif() {
    const notification = {
      title: 'Input Notification',
      body: 'Enter your reply here',
      sound: './public/assets/beep.wav',
      id: 8,
      actionTypeId: '1'
    };
    LocalNotifications.schedule({ notifications: [notification] });

  }

  cancelRepeat() {
    LocalNotifications.cancel({ notifications: [{ id: 5 }] });
  }


}

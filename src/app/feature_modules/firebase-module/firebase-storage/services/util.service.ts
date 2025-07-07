import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireStorageUtilService {
  public fooSubject = new Subject<any>();

  userid: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(
    public http: HttpClient,
    public loadingController: LoadingController,
    public fireAuth: AngularFireAuth,
    public router: Router,
    public toastController: ToastController,
    public nav: NavController,
    public alertController: AlertController
  ) {
    this.getUserId();
  }

  getUserId() {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.userid.next(user.uid);
      }
    });
  }


  async presentToast(message, showButton, position, duration) {
    const toast = await this.toastController.create({
      message,
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ],
      position,
      duration
    });
    toast.present();
  }


  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000
    });
    await loading.present();
  }
  async closeLoading() {
    // eslint-disable-next-line no-return-await
    return await this.loadingController.dismiss();
  }
  async openInfLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...'
    });
    await loading.present();
  }
  async getBlob(webPath: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const blob = await fetch(webPath).then(r => r.blob());
        resolve(blob);
      } catch (e) {
        console.error('Unable to make blob', e);
        reject(e);
      }
    });
  }

}

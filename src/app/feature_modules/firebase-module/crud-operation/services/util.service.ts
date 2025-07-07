import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CrudUtilService {
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
  navigate(link: string, forward?) {
    if (forward) {
      this.nav.navigateForward('/' + link);
    } else {
      this.router.navigateByUrl('/' + link);
    }
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


  removeConform(): Promise<any> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Are you sure you want to remove this item',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (cancel) => {

              resolve('cancel');
            }
          }, {
            text: 'Okay',
            handler: (ok) => {

              resolve('ok');
            }
          }
        ]
      });

      alert.present();
    });
  }
}

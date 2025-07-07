import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AdmobUtilService {
  public fooSubject = new Subject<any>();
  adMobId = environment.ADMOB;
  constructor(public toastController: ToastController) {
  }
  async presentToast(message, position, duration) {
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

}

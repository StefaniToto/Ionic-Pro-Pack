import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesUtilService {

  toast: any;
  constructor(public toastController: ToastController,) {
  }


  async presentToast(message, showButton, position, duration) {
    this.toast = await this.toastController.create({
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
    this.toast.present();
  }

  dismiss(){
    this.toast.dismiss();
  }

}

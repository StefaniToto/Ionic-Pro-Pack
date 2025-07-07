import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InfiniteListService {

  constructor(private http: HttpClient, private toastController: ToastController) { }

  infiniteData() {
    const myUrl = 'http://www.mocky.io/v2/5c9448a0310000a45b55487c?mocky-delay=5000ms';
    return this.http.get(myUrl);
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
}

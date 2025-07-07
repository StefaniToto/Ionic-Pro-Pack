import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PullRefreshService {

  constructor(private http: HttpClient, private toastController: ToastController) { }
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

  getApiResponse() {
    const myUrl = 'http://www.mocky.io/v2/5c9215a73200005d006bccee?mocky-delay=5000ms';
    return this.http.get(myUrl);
  }
}

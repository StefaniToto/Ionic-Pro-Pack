import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WordpressUtilService {

  constructor(private loadingController: LoadingController) { }

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

}

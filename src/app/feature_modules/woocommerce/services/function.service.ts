import { Injectable } from '@angular/core';
import { DataServicesService } from './data-services.service';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  public cartItems = new BehaviorSubject(0);
  constructor(
    public dataService: DataServicesService,
    private toastController: ToastController,
    private nav: NavController,
    public alertController: AlertController,
    private storage: Storage
  ) { }



  updateBehaviourValue() {
    let items = 0;
    this.storage
      .forEach(data => {
        items += 1;
      })
      .then(() => {
        this.cartItems.next(items);
      });
  }

  updateCartBadge() {
    const currentItems: number = this.cartItems.getValue();
    this.cartItems.next(currentItems + 1);
  }

  array(i) {
    const l = [];
    for (let j = 0; j < i; j++) { l.push(1); }
    return l;
  }

  validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkout() {
    if (this.dataService.currentUser.address.length === 0) {
      this.nav.navigateForward('/NewAddress/$1');
    } else {
      this.nav.navigateForward('/Checkout');
    }
  }

  async presentToast(message, showButton, position, duration) {
    const toast = await this.toastController.create({
      message,
      buttons: showButton, // checking Data
      position,
      duration
    });
    toast.present();
  }
  date(date) {
    const monthNames: Array<any> = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const day: string = date.getDate();
    const monthIndex: string = date.getMonth();
    const year: string = date.getFullYear();

    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  update(product) {
    // this.dataService.current_product = product;
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
            handler: cancel => {
              resolve('cancel');
            }
          },
          {
            text: 'Okay',
            handler: ok => {
              resolve('ok');
            }
          }
        ]
      });

      await alert.present();
    });
  }

  calculate(price: any, discount) {
    // eslint-disable-next-line no-param-reassign
    price -= price * discount / 100;
    return price.toFixed(2);
  }
}

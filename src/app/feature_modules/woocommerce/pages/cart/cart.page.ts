/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FunctionService } from '../../services/function.service';
import { DataServicesService } from '../../services/data-services.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public customAlertOptions: any = {
    header: 'Select Quantity',
    translucent: true
  };
  public qty: Array<any> = [];
  public baseProducts: Array<any> = [];
  public code: string;
  public show: boolean;
  public cartData: Array<any> = [];
  public sum: number;
  public userId: any;


  constructor(
    public fun: FunctionService,
    public alertController: AlertController,
    public storage: Storage,
    public route: Router,
    public dataService: DataServicesService,
  ) {

    this.sum = 0;
    this.code = '';
    this.show = true;
    for (let i = 1; i <= 5; i++) { this.qty.push(i); }
  }

  ngOnInit() {
    this.storage
      .forEach((value, key) => {
        const obj: any ={};
        const parsedData = JSON.parse(value);
        this.cartData.push(parsedData);
        obj.product_id = parsedData.id;
        obj.price = parseInt(parsedData.price, 20);
        obj.quantity = 1;
        this.baseProducts.push(obj);
      })
      .then(() => {
        this.dataService.cart = this.baseProducts;
      });
  }

  calculatePrice() {
    this.sum = 0;
    let temp = 0;
    this.baseProducts.forEach(product => {
      temp = product.price * product.quantity;
      this.sum += temp;
    });
    return this.sum;
  }

  checkout() {
    this.route.navigate(['checkout']);
  }

  browse() {
    this.route.navigate(['woocommerce-products']);
  }
  async remove(j: number) {
    this.fun.removeConform().then(res => {
      const Item: number = j + 1;
      if (res === 'ok') {
        this.dataService.cart.splice(j, 1);
        this.cartData.splice(j, 1);
        if (this.dataService.cart.length === 0) {
          this.show = !this.show;
        }
      }
    });
  }


}

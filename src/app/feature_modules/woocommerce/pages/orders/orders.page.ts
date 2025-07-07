/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderinfoPage } from '../orderinfo/orderinfo.page';
import { DataServicesService } from '../../services/data-services.service';
import { FunctionService } from '../../services/function.service';
import { WooCommerceService } from '../../services/woo-commerce.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss'],
    standalone: false
})
export class OrdersPage implements OnInit {
  public orders: any;
  public cartItems: number;

  constructor(
    public modalController: ModalController,
    public storage: Storage,
    public woocommerceService: WooCommerceService,
    public fun: FunctionService,
    public dataService: DataServicesService,
    public route: Router
  ) {

    this.storage.forEach(item => {
      this.cartItems += 1;
    });
    this.woocommerceService.getPastOrders(dataService.currentUser.id).subscribe(data => {
      this.orders = data;
    });
  }

  ngOnInit() {
    this.cartItems = 0;
  }

  async open(order: any) {
    const modal = await this.modalController.create({
      component: OrderinfoPage,
      componentProps: { value: order }
    });
    return modal.present();
  }
  cartPage() {
    this.route.navigate(['cart']);
  }

}

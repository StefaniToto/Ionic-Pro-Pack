/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonContent, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { WooCommerceService } from '../../services/woo-commerce.service';
import { DataServicesService } from '../../services/data-services.service';
import { FunctionService } from '../../services/function.service';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.page.html',
    styleUrls: ['./product-details.page.scss'],
    standalone: false
})
export class ProductDetailsPage implements OnInit {
  @ViewChild('Slides', { static: true }) slides: IonSlides;
  @ViewChild('Content', { static: true }) content: IonContent;
  @ViewChild('slider', { static: true }) slider: IonSlides;
  public index: number;
  public segment: string;
  public productData: Array<any> = [];
  cartItems = 0;
  product: any;

  constructor(
    public activedRoute: ActivatedRoute,
    public woocommerceService: WooCommerceService,
    public toast: ToastController,
    public fun: FunctionService,
    public dataService: DataServicesService,
    public storage: Storage,
    public route: Router
  ) {

    this.segment = '';
    this.index = 0;
    this.activedRoute.params.subscribe((params) => {
      // this.woocommerceService.getProduct(params.id).then(proData => {
      //   this.product = proData;
      // });
      this.woocommerceService.getProduct(params.id).subscribe(result => {
        this.product = result;
      });
    });

    this.productData = this.dataService.item_tab;
    this.segment = this.productData[0].title;
    this.fun.updateBehaviourValue();
  }

  ngOnInit() {
    this.fun.cartItems.subscribe(val => {
      this.cartItems = val;
    });
  }
  async change() {
    await this.slides.getActiveIndex().then(d => this.index = d);
    this.segment = this.productData[this.index].title;
    this.drag();
  }

  onReviewClick(index) {
    this.segment = this.productData[index].title;
    this.index = index;
    this.slides.slideTo(index);
    this.content.scrollToTop();
    this.drag();
  }

  goToCart() {
    this.storage.get(`product_${this.product.id}`).then(async productDetails => {
      if (productDetails) {
        const toast = await this.toast.create({
          message: 'Item already in Cart',
          duration: 2000
        });
        toast.present();
      } else {
        const toast = await this.toast.create({
          message: 'Added to Cart',
          duration: 2000
        });
        toast.present();
        this.storage
          .set(`product_${this.product.id}`, JSON.stringify(this.product))
          .then(() => {
            this.fun.updateCartBadge();
          });
      }
    });
  }

  update(i) {
    this.slides.slideTo(i);
  }

  drag() {
    let distanceToScroll = 0;
    for (const index in this.productData) {
      if (parseInt(index, 10) < this.index) {
        distanceToScroll =
          distanceToScroll +
          document.getElementById('seg_' + index).offsetWidth +
          24;
      }
    }
    document.getElementById('dag').scrollLeft = distanceToScroll;
  }

  seg(event) {
    this.segment = event.detail.value;
  }
  cartPage() {
    this.route.navigate(['cart']);
  }


}

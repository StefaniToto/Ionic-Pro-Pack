/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {  AlertController } from '@ionic/angular';
import { WooCommerceService } from '../../services/woo-commerce.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    standalone: false
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  // @Input() slider: IonSlides;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  public slideOpts = {
    effect: 'flip'
  };
  public open = [false, false, false, false];
  public liked = false;
  public reviews: any;

  constructor(
    private alertController: AlertController,
    // private socialSharing: SocialSharing,
    private woocommerceService: WooCommerceService,
  ) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    const pid = this.product.id;
    this.woocommerceService.getProductReviews(pid).subscribe(reviews => {
      this.reviews = reviews;
    });
  }

  goToReviews() {
    this.notify.emit(2);
  }

  toogle(i) {
    this.open[i] = !this.open[i];
  }

  remove() {
    // this.slider.lockSwipes(true);
  }

  gainback() {
    // this.slider.lockSwipes(false);
  }

  like() {
    this.liked = !this.liked;
  }

  shareViaInstagram(img: string) {
  }

  async createAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Sorry',
      subHeader: 'App not found',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  shareCommon(img: string) {
  }
  array(i) {
    const l = [];
    for (let j = 0; j < i; j++) { l.push(1); }
    return l;
  }


}

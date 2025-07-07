/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
import { APPLE_PAY_ITEM, APPLE_PAY_SHIPPING_METHOD } from '../../data/apple-pay-data';

@Component({
  selector: 'app-applepay',
  templateUrl: './applepay.page.html',
  styleUrls: ['./applepay.page.scss'],
})
export class ApplepayPage implements OnInit {
  public items: Array<any>;
  public shippingMethods: any;
  public supportedNetworks: any = ['visa', 'amex'];
  public merchantCapabilities: any = ['3ds', 'debit', 'credit'];
  public merchantIdentifier = 'merchant.apple.test';
  public currencyCode = 'GBP';
  public countryCode = 'GB';
  public billingAddressRequirement: any = ['name', 'email', 'phone'];
  public shippingAddressRequirement: any = 'none';
  public shippingType = 'shipping';
  public disabledButton = true;

  constructor(
    public applePay: ApplePay,
    public pltform: Platform,
    public alertController: AlertController
  ) {

    if (this.pltform.is('ios')) {
      this.disabledButton = false;
    }
  }

  ngOnInit() {
    this.items = APPLE_PAY_ITEM;
    this.shippingMethods = APPLE_PAY_SHIPPING_METHOD;
  }
  async checkApplePayValid() {
    await this.applePay.canMakePayments().then((message) => {
      this.presentAlert(message);
      // Apple Pay is enabled. Expect:
      // 'This device can make payments.'
    }).catch((error) => {
      console.log(error);
      this.presentAlert(error);
      // There is an issue, examine the message to see the details, will be:
      // 'This device cannot make payments.''
      // 'This device can make payments but has no supported cards'
    });
  }

  async payWithApplePay() {
    try {
      const order: any = {
        items: this.items,
        shippingMethods: this.shippingMethods,
        merchantIdentifier: this.merchantIdentifier,
        currencyCode: this.currencyCode,
        countryCode: this.countryCode,
        billingAddressRequirement: this.billingAddressRequirement,
        shippingAddressRequirement: this.shippingAddressRequirement,
        shippingType: this.shippingType,
        merchantCapabilities: this.merchantCapabilities,
        supportedNetworks: this.supportedNetworks
      };
      this.applePay.makePaymentRequest(order).then(message => {
        this.applePay.completeLastTransaction('success');
      }).catch((error) => {
        console.log(error);
        this.applePay.completeLastTransaction('failure');
        this.presentAlert(error);
      });

      // In real payment, this step should be replaced by an actual payment call to payment provider
      // Here is an example implementation:

      // MyPaymentProvider.authorizeApplePayToken(token.paymentData)
      //    .then((captureStatus) => {
      //        // Displays the 'done' green tick and closes the sheet.
      //        ApplePay.completeLastTransaction('success');
      //    })
      //    .catch((err) => {
      //        // Displays the 'failed' red cross.
      //        ApplePay.completeLastTransaction('failure');
      //    });

    } catch {
      // handle payment request error
      // Can also handle stop complete transaction but these should normally not occur
    }
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Ionic 6 Apple Pay',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }


}

import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Stripe } from '@capacitor-community/stripe';
import { APPLE_PAY_ITEM, APPLE_PAY_SHIPPING_METHOD } from '../../data/apple-pay-data';

@Component({
    selector: 'app-applepay',
    templateUrl: './applepay.page.html',
    styleUrls: ['./applepay.page.scss'],
    standalone: false
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
    // await this.applePay.canMakePayments().then((message) => {
    //   this.presentAlert(message);
    //   // Apple Pay is enabled. Expect:
    //   // 'This device can make payments.'
    // }).catch((error) => {
    //   console.log(error);
    //   this.presentAlert(error);
    //   // There is an issue, examine the message to see the details, will be:
    //   // 'This device cannot make payments.''
    //   // 'This device can make payments but has no supported cards'
    // });
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
      Stripe.createApplePay(order).then(message => {
        Stripe.confirmPaymentFlow();
      }).catch((error) => {
        console.log(error);
        Stripe.confirmPaymentFlow();
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

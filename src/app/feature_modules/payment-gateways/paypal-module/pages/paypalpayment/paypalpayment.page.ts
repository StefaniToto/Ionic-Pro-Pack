/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { AlertController } from '@ionic/angular';
declare const braintree;

@Component({
    selector: 'app-paypalpayment',
    templateUrl: './paypalpayment.page.html',
    styleUrls: ['./paypalpayment.page.scss'],
    standalone: false
})
export class PaypalpaymentPage implements OnInit {
  public paymentAmount: string;
  public currency: string;
  public currencyIcon: string;

  constructor(
    private payment: PaymentService,
    private alert: AlertController
  ) {
    this.paymentAmount = '3.33';
    this.currency = 'USD';
    this.currencyIcon = '$';
    this.initializeBraintree();
  }

  async handleBraintreePayment(nonce) {
    this.payment.makePaymentRequest(this.paymentAmount, nonce).subscribe((transaction: any) => {
      console.log('Transaction Completed', transaction);
      if (transaction.success) {
        this.showDoneAlert('Payment for amount ' + transaction.transaction.currencyIsoCode + transaction.transaction.amountRequested + ' is completed via Paypal.');
      }
    });
  }

  async showDoneAlert(msg) {
    const alert = await this.alert.create({
      header: 'Successfull Transaction',
      subHeader: msg,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            this.initializeBraintree();
          }
        }
      ]
    });
    alert.present();
  }

  initializeBraintree() {
    const that = this;
    this.payment.getClientTokenForPaypal().subscribe((res: any) => {
      console.log(res);
      let checkout;
      braintree.setup(res.clientToken, 'custom', {
        paypal: {
          container: 'paypal-container',
        },
        onReady: (integration) => {
          checkout = integration;
        },
        onCancelled: (obj) => {
          checkout.teardown(() => { checkout = null; });
        },
        onPaymentMethodReceived: (obj) => {
          checkout.teardown(() => {
            checkout = null;
            that.handleBraintreePayment(obj.nonce);
          });
        }
      });
    });
  }

  ngOnInit() {
  }

}

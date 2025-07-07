
/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component } from '@angular/core';
import { Http, HttpResponse } from '@capacitor-community/http';
import { UtilService } from '../../services/util.service';
import { environment } from '@env/environment';
import { Stripe, PaymentSheetEventsEnum } from '@capacitor-community/stripe';
@Component({
  selector: 'app-stripepayment',
  templateUrl: './stripepayment.page.html',
  styleUrls: ['./stripepayment.page.scss'],
})
export class StripepaymentPage {
  public paymentAmount: number;
  public currency: string;
  public currencyIcon: string;
  public stripekey: string;
  public cardDetails: any;
  public cardNumber: any;
  public cvcnumber: number;
  public year: any;
  public month: any;
  public GROUP_SEPARATOR: string;

  constructor(private util: UtilService
  ) {

    this.paymentAmount = 333;
    this.currency = 'USD';
    this.currencyIcon = '$';
    this.cardDetails = {};
    this.GROUP_SEPARATOR = ' ';
    Stripe.initialize({
      publishableKey: environment.STRIPE_PK,
    });
    Stripe.addListener(PaymentSheetEventsEnum.Completed, () => {
      console.log('Payment completed');
      this.util.presentToast('Payment completed succesfully', 'bottom', 2000);
    });
  }
  format(valString: any) {
    if (!valString) {
      return '';
    }
    const valueString = valString
      .replace(/\W/gi, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    if (valueString.length > 19) {
      this.cardNumber = this.cardNumber.slice(0, 19);
    } else {
      this.cardNumber = valueString;
    }
  }
  addCardDateSpacing(expiry) {
    const expiryVal = expiry
      .replace(/\W/gi, '')
      .replace(/\//g, '')
      .trim();

    if (expiryVal.length > 4) {
      return expiryVal.slice(0, 4).replace(/(.{2})/, '$1 /');
    } else {
      if (expiryVal.length < 3) { return expiryVal; }

      return expiry.replace(/(.{2})/, '$1 /');
    }
  }

  presentPaymentSheet() {
    console.log('Present payment sheet');
    Stripe.presentPaymentSheet().then((result) => {
      console.log(result);

    });
  }


  async createPaymentSheet() {
    /**
     * Connect to your backend endpoint, and get every key.
     */
    const options = {
      url: 'https://us-central1-ionic4fullapp.cloudfunctions.net/paymentsheet',
      headers: { 'Content-Type': 'application/json' },
      data: { amount: this.paymentAmount, currency: this.currency },
    };

    const response: HttpResponse = await Http.request({ ...options, method: 'POST' });
    console.log(response);

    Stripe.createPaymentSheet({
      paymentIntentClientSecret: response.data.paymentIntent,
      customerEphemeralKeySecret: response.data.ephemeralKey,
      customerId: response.data.customer,
      merchantDisplayName: 'Enappd Capacitor Full App'
    }).then(() => {
      this.presentPaymentSheet();
    });
  }

}

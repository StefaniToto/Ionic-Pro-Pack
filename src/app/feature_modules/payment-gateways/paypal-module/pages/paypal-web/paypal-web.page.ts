/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'app-paypal-web',
    templateUrl: './paypal-web.page.html',
    styleUrls: ['./paypal-web.page.scss'],
    standalone: false
})
export class PaypalWebPage {
  public paymentAmount: string;
  public currency: string;
  public currencyIcon: string;

  constructor() {

    this.paymentAmount = '3.33';
    this.currency = 'USD';
    this.currencyIcon = '$';
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const this$ = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      const payPalName = 'paypal';
      window[payPalName].Buttons({
        // Set up the transaction
        createOrder: (data: any, actions: { order: { create: (arg0: { purchase_units: { amount: { value: string } }[] }) => any } }) => actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this$.paymentAmount
                }
              }
            ]
          }),

        // Finalize the transaction
        onApprove: (data: any, actions: { order: { capture: () => Promise<any> } }) => actions.order.capture()
            .then((details: { payer: { name: { given_name: string } } }) => {
              // Show a success message to the buyer
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
            })
            .catch((err: any) => {
              console.log(err);
            })
      }).render('#paypal-button-container');
    }, 500);

  }


}

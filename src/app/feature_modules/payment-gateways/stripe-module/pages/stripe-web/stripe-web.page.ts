/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { StripeService } from '../../services/stripe-service.service';
import { UtilService } from '../../services/util.service';
import { Http, HttpResponse } from '@capacitor-community/http';
import { environment } from '@env/environment';
declare let Stripe;

@Component({
  selector: 'app-stripe-web',
  templateUrl: './stripe-web.page.html',
  styleUrls: ['./stripe-web.page.scss'],
})
export class StripeWebPage implements OnInit {
  public stripe = Stripe(environment.STRIPE_PK);
  public card: any;
  public paymentAmount: number;
  public currency: string;
  public currencyIcon: string;

  constructor(
    public service: StripeService,
    public util: UtilService
  ) {

    this.paymentAmount = 333;
    this.currency = 'USD';
    this.currencyIcon = '$';
  }

  ngOnInit() {
    this.setupStripe();
  }

  setupStripe() {
    const elements = this.stripe.elements();
    const styles = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: styles });
    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    const form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.stripe.createSource(this.card).then(result => {
        console.log(result);
        if (result.error) {
          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          this.service.presentToast('Token for the card is generated', true, 'bottom', 2500);
          this.makePayment(result.source);
        }
      }).catch(e => {
        console.log(e);
      });
    });
  }

  /*
  ** Firebase cloud function for sample. You need to call your own server function
  ** This server function should accept the token, amount and currency, and make the payment request from Stripe server
  ** The response can then be transferred to your app
  ** It will give CORS error for browser client (ionic serve) , unless CORS module is used on server side
  ** For device, the function should work, if ionic-native/http OR capacitor/Http is used in app (No need for server to have CORS module)
  */

  async makePayment(token) {
    const options = {
      //dev: http://localhost:5000/ionic4fullapp/us-central1/payWithStripe
      url: environment.stripe_payment_url_firebase,
      headers: { 'Content-Type': 'application/json' },
      data: { token: token.id, amount: this.paymentAmount, currency: this.currency },
    };

    const response: HttpResponse = await Http.request({ ...options, method: 'POST' });
    console.log(response);
    this.util.presentToast('Successfull payment done for amount ' + response.data.amount / 100, 'bottom', 2500);

  };


}

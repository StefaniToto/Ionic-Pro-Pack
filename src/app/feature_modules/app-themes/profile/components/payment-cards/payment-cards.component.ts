/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit } from '@angular/core';
import { USER_CARD_BILLING_DETAILS } from '../../data/profile-data';

@Component({
    selector: 'payment-cards',
    templateUrl: './payment-cards.component.html',
    styleUrls: ['./payment-cards.component.scss'],
    standalone: false
})
export class PaymentCardsComponent implements OnInit {
  public cardDetails: any;
  public USER_CARD_BILLING_DETAILS: Array<any>;

  constructor() {
    this.USER_CARD_BILLING_DETAILS = USER_CARD_BILLING_DETAILS;
    this.cardDetails = { cardNumber: null, cardType: null, cardCvv: null, cardDate: null, zipCode: null };
  }

  ngOnInit() { }

  SaveCard() {
    if (this.cardDetails.cardType === 'visa') {
      this.USER_CARD_BILLING_DETAILS.push({ cardNumber: '3124', expiryDate: '12/22', image: 'assets/profile/visa.png' });
    }
    if (this.cardDetails.cardType === 'master') {
      this.USER_CARD_BILLING_DETAILS.push({ cardNumber: '3124', expiryDate: '12/22', image: 'assets/profile/mastercard.png' });
    }
  }

}

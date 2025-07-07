import { Injectable } from '@angular/core';
import { Http, HttpResponse } from '@capacitor-community/http';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

   getClientTokenForPaypal() {
    const options = { url: environment.braintree_token_url };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

    makePaymentRequest(amount: string, nonce: string) {
    const paymentDetails = {
      paymentAmount: amount,
      nonceFromTheClient: nonce
    };

    const options = { url: environment.braintree_payment_url, data: paymentDetails, headers:{'Content-Type': 'application/json'} };
    return from(Http.request({ ...options, method: 'POST' })).pipe(map(results => results.data));
  }
}

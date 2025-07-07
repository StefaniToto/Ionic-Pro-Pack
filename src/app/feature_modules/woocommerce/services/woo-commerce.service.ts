import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class WooCommerceService {
  url = environment.woocommerce_url;
  consumerKey = environment.woocommerce_consumerKey;
  consumerSecret = environment.woocommerce_consumerSecret;


  constructor() { }
  getProducts(): Observable<any> {
    const options = {
      url: `${this.url}/wp-json/wc/v3/products?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  getTags(): Observable<any> {
    const options = {
      url: `${this.url}/wp-json/wc/v3/products/tags?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  getProduct(pid) {
    const options = {
      url: `${this.url}/wp-json/wc/v3/products/${pid}?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  getProductReviews(pid) {
    const options = {
      url: `${this.url}/wp-json/wc/v2/products/${pid}/reviews?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  updateUser(user, address) {
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      billing: address,
      shipping: address
    };
    const covertedData = this.JSONToURLEncoded(data);
    const options = {
      url: `${this.url}/wp-json/wc/v3/customers/${user.id}?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`,
      data: covertedData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    return from(Http.request({ ...options, method: 'POST' })).pipe(map(results => results.data));
  }

  JSONToURLEncoded(element, key?, list?) {
    const newList = list || [];
    if (typeof element === 'object') {
      for (const idx of Object.keys(element)) {
        this.JSONToURLEncoded(
          element[idx],
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          key ? key + '[' + idx + ']' : idx,
          newList
        );
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      newList.push(key + '=' + encodeURIComponent(element));
    }
    return newList.join('&');
  }

  createOrder(obj) {
    const order = this.JSONToURLEncoded(obj);
    const options = {
      url: `${this.url}/wp-json/wc/v3/orders?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`,
      data: order
    };
    return from(Http.request({ ...options, method: 'POST' })).pipe(map(results => results.data));
  }

  getPastOrders(customerId) {
    const options = {
      url: `${this.url}/wp-json/wc/v3/orders?customer=${customerId}&consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  getPosts() {
    const options = {
      url: `${this.url}/wp-json/wp/v2/posts`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  getPostsTags() {
    const options = {
      url: `${this.url}/wp-json/wp/v2/categories`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  getPostsData(pid) {
    const options = {
      url: `${this.url}/wp-json/wp/v2/posts?categories=${pid}&consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));

  }

  getAttributes() {
    const options = {
      url: `${this.url}/wp-json/wc/v3/products/attributes?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  getAttributeTerms(attrId) {
    const options = {
      url: `${this.url}/wp-json/wc/v3/products/attributes/${attrId}/terms?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  filterProducts(attr, attrTerm) {
    const options = {
      url: `${this.url}/wp-json/wc/v3/products?attribute=${attr}&attribute_term=${attrTerm}&consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  getPaymentGateways() {
    const options = {
      url: `${this.url}/wp-json/wc/v3/payment_gateways?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`
    };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  changePassword(uid, pass) {
    const changedPass = `password=${pass}`;

    const options = {
      url: `${this.url}/wp-json/wc/v3/customers/${uid}?consumer_key=${this.consumerKey
        }&consumer_secret=${this.consumerSecret}`,
      data: changedPass,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    return from(Http.request({ ...options, method: 'POST' })).pipe(map(results => results.data));
  }


}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

export interface GridProduct {
  name: string;
  image: Array<string>;
  size: string;
  color: string;
  costPrice: number;
  discount: number;
  offer: boolean;
  stock: number;
  description: string;
  currency: string;
  bought: number;
  shipping: number;
  rating: number;
  ratingCount: number;
  storeRate: number;
  storeRating: number;
  storeRatingCount: number;
  soldBy: string;
  specs: string;
  reviews: Array<any>;
  storeReviews: Array<any>;
  sizing: {
    small: number;
    okay: number;
    large: number;
  };
  buyerGuarantee: string;
  sponsored: Array<any>;
}

export interface HomeTab {
  title: string;
}

export interface NotificationsCard {
  image: string;
  title: string;
  time: number;
}

export interface Notification {
  all: Array<NotificationsCard>;
  deals: Array<NotificationsCard>;
  orders: Array<NotificationsCard>;
  others: Array<NotificationsCard>;
}

export interface Product {
  name: string;
  image: Array<string>;
  size: string;
  color: string;
  costPrice: number;
  discount: number;
  offer: boolean;
  stock: number;
  description: string;
  currency: string;
  bought: number;
  shipping: number;
  rating: number;
  ratingCount: number;
  storeRate: number;
  storeRating: number;
  storeRatingCount: number;
  soldBy: string;
  specs: string;
  reviews: Array<Review>;
  storeReviews: Array<Review>;
  sizing: {
    small: number;
    okay: number;
    large: number;
  };
  buyerGuarantee: string;
  sponsored: Array<Product>;
}
export interface Review {
  image: string;
  name: string;
  comment: string;
  rating: number;
  images: Array<string>;
}
export interface Cart {
  product: Product;
  quantity: number;
}

export interface User {
  fname: string;
  lname: string;
  email: string;
  address: Array<Address>;
  billing: Array<any>;
  uid: string;
  did: string;
  aid: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  state: string;
  city: string;
  zipcode: number;
  phoneNumber: number;
}

export interface Orders {
  product: Product;
  orderDate: Date;
  id: string;
  amount: number;
  deliveryDate: Date;
  status: string;
  billingAddress: Address;
  shippingAddress: Address;
  tax: number;
}

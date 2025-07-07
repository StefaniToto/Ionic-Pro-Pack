/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { WooCommerceService } from '../../services/woo-commerce.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-woocommerce-products',
    templateUrl: './woocommerce-products.page.html',
    styleUrls: ['./woocommerce-products.page.scss'],
    standalone: false
})
export class WoocommerceProductsPage implements OnInit {
  public getProducts: Array<any>;

  constructor(
    public woocommerceService: WooCommerceService,
    public http: HttpClient,
    public route: Router
  ) {

    this.getProducts = [];
    this.woocommerceService.getProducts().subscribe(result => {
      this.getProducts = result;
    });
    // const products = this.woocommerceService.getProducts();
    // this.http.get(products).subscribe((res: any) => {
    //   this.getProducts = res;
    // });
  }

  ngOnInit() {
  }

  goToProducts(product) {
    this.route.navigate(['product-details', { id: product.id }]);

  }

}

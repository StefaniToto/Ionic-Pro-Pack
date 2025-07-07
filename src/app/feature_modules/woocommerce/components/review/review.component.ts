/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, Input } from '@angular/core';
import { WooCommerceService } from '../../services/woo-commerce.service';

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss'],
    standalone: false
})
export class ReviewComponent implements OnInit {
  @Input() product: any;
  public reviews: any;

  constructor(private woocommerceService: WooCommerceService) { }

  ngOnInit() { }

  getReviews() {
    const pid = this.product.id;
    this.woocommerceService.getProductReviews(pid).subscribe(reviews => {
      this.reviews = reviews;
    });
  }
  productArray(i) {
    const l = [];
    for (let j = 0; j < i; j++) { l.push(1); }
    return l;
  }

}

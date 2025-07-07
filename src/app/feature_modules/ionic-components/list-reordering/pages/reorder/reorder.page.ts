/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {
  public items: Array<any> = [];
  public items2: Array<any> = [];
  public items3: Array<any> = [];

  constructor() {
    for (let x = 0; x < 5; x++) {
      this.items.push(x);
      this.items2.push(x);
      this.items3.push(x);
    }
  }

  ngOnInit() {
  }

  reorderItems(ev: any) {
    const element = this.items[ev.detail.from];
    this.items.splice(ev.detail.from, 1);
    this.items.splice(ev.detail.to, 0, element);
    ev.detail.complete();
  }

  reorderItems2(ev: any) {
    const element = this.items2[ev.detail.from];
    this.items2.splice(ev.detail.from, 1);
    this.items2.splice(ev.detail.to, 0, element);
    ev.detail.complete();
  }

  reorderItems3(ev: any) {
    const element = this.items3[ev.detail.from];
    this.items3.splice(ev.detail.from, 1);
    this.items3.splice(ev.detail.to, 0, element);
    ev.detail.complete();
  }

}

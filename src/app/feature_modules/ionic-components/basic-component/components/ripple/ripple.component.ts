/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss'],
})
export class RippleComponent implements OnInit {
  public response: string;

  constructor() {
    this.response = '';
  }

  ngOnInit() { }

}

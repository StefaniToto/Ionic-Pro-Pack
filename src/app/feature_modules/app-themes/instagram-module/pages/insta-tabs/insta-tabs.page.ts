/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
    selector: 'app-insta-tabs',
    templateUrl: './insta-tabs.page.html',
    styleUrls: ['./insta-tabs.page.scss'],
    standalone: false
})
export class InstaTabsPage implements OnInit {

  constructor(public util: UtilService) {

    this.util.navigate('insta-tabs/home');
  }

  ngOnInit() {
    this.util.navigate('insta-tabs/home');

  }

}

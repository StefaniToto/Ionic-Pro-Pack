/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ELEGANCE_CHAT_LIST } from '../../data/chat-list-data';

@Component({
  selector: 'app-elegance',
  templateUrl: './elegance.page.html',
  styleUrls: ['./elegance.page.scss'],
})
export class ElegancePage implements OnInit {
  public chatData: Array<any>;
  constructor() {

  }

  ngOnInit() {
    this.chatData = ELEGANCE_CHAT_LIST;
  }

}

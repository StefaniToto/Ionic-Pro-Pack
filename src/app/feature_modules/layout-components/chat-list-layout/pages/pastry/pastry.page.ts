/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PASTRY_CHAT_LIST } from '../../data/chat-list-data';

@Component({
    selector: 'app-pastry',
    templateUrl: './pastry.page.html',
    styleUrls: ['./pastry.page.scss'],
    standalone: false
})
export class PastryPage implements OnInit {
  public segmentTab: any;
  public chatData: Array<any>;

  constructor(public route: Router) {

    this.segmentTab = 'chat';
    this.chatData = PASTRY_CHAT_LIST;
  }

  ngOnInit() {

  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }
  goforChat(chat) {
    this.route.navigate(['bubble', chat]);
  }

}

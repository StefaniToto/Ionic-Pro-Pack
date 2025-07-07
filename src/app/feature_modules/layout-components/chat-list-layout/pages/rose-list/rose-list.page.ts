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
import { ROSE_CHAT_LIST } from '../../data/chat-list-data';

@Component({
    selector: 'app-rose-list',
    templateUrl: './rose-list.page.html',
    styleUrls: ['./rose-list.page.scss'],
    standalone: false
})
export class RoseListPage implements OnInit {
  public segmentTab: any;
  public chatData: Array<any>;

  constructor(private route: Router) {

    this.segmentTab = 'chat';
    this.chatData = ROSE_CHAT_LIST;
  }

  ngOnInit() {

  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

  goforChat(chat) {
    this.route.navigate(['rose', chat]);
  }


}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { WHATSAPP_CHAT_DATA } from '../../data/whatsapp-data';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.page.html',
  styleUrls: ['./whatsapp.page.scss'],
})
export class WhatsappPage implements OnInit {
  public segmentTab: any;
  public chatData: Array<any>;
  public title: boolean;


  constructor() {

    this.title = true;
    this.segmentTab = 'Chats';
    this.chatData = WHATSAPP_CHAT_DATA;
  }

  ngOnInit() {
  }

  segmentChanged(event: any) {

    this.segmentTab = event.detail.value;
  }


  toggleSearchTitl() {
    this.title = !this.title;
  }

}

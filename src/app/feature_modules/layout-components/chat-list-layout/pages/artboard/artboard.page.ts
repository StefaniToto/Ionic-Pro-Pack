/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { ARTBOARD_CHAT_LIST, ARTBOARD_USER_DETAILS } from '../../data/chat-list-data';

@Component({
    selector: 'app-artboard',
    templateUrl: './artboard.page.html',
    styleUrls: ['./artboard.page.scss'],
    standalone: false
})
export class ArtboardPage implements OnInit {
  public chatSegmentType;
  public chatData: Array<any>;
  public userDetails: any;

  constructor() {

    this.chatSegmentType = 'person';
    this.chatData = ARTBOARD_CHAT_LIST;
    this.userDetails = ARTBOARD_USER_DETAILS;
  }

  ngOnInit() {

  }

}

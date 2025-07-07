/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { BUBBLE_CHAT_DATA } from '../../data/chat-screen-data';

@Component({
    selector: 'app-bubble',
    templateUrl: './bubble.page.html',
    styleUrls: ['./bubble.page.scss'],
    standalone: false
})
export class BubblePage implements OnInit {
  @ViewChild('IonContent', { static: true }) content: IonContent;
  public paramData: any;
  public msgList: any;
  public userInput: string;
  public User: string;
  public toUser: string;
  public startTyping: any;
  public loader: boolean;

  constructor() {


    this.msgList = BUBBLE_CHAT_DATA;
  }

  ngOnInit() {
    this.userInput = '';
    this.User = 'Me';
    this.toUser = 'HealthBot';
  }

  sendMsg() {
    const msgLength: number = this.msgList.length;
    if (this.userInput !== '') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/chat/chat/chat3.jpg',
        time: '12:01',
        message: this.userInput,
        id: msgLength + 1
      });
      this.userInput = '';
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);

    }
  }
  senderSends() {
    this.loader = true;
    this.scrollDown();
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/chat/chat/chat5.jpg',
        time: '12:01',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please'
      });
      this.loader = false;
      this.scrollDown();
    }, 2000);

  }
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50);
    }, 200);
  }
  something($event: any) {
    $event.preventDefault();
  }
  userTyping(event: any) {
    this.startTyping = event.target.value;
    this.scrollDown();
  }

}

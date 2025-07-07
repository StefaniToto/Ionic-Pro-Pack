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
import { MINIMAL_CHAT_DATA } from '../../data/chat-screen-data';

@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.page.html',
  styleUrls: ['./minimal.page.scss'],
})
export class MinimalPage implements OnInit {
  @ViewChild('IonContent', { static: true }) content: IonContent;

  public data: Array<any> = [];
  public msgList: Array<any>;
  public userInput: string;
  public User: string;
  public toUser: string;
  public startTyping: any;
  public loader: boolean;

  constructor() {


    this.msgList = MINIMAL_CHAT_DATA;
  }

  ngOnInit() {
    this.User = 'Me';
    this.toUser = 'HealthBot';
    this.data = [
      {
        text: 'Thursday 31 January 2019',
      }
    ];
    this.userInput = '';
  }


  sendMsg() {
    if (this.userInput !== '') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: 'assets/chat/chat/chat3.jpg',
        time: '12:01',
        message: this.userInput,
        id: this.msgList.length + 1,
        status: true
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
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/chat/chat/chat3.jpg',
        time: '12:01',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        status: true

      });
      this.loader = false;
      this.scrollDown();
    }, 2000);
    this.scrollDown();
  }

  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50);
    }, 50);
  }

  something($event: any) {
    $event.preventDefault();
  }

  userTyping(event: any) {
    this.startTyping = event.target.value;
    this.scrollDown();
  }

}

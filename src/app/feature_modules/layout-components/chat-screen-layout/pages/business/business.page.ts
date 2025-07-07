/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BUSINESS_CHAT_DATA, BUSINESS_SENDER_CHAT_DATA } from '../../data/chat-screen-data';
import { IonContent } from '@ionic/angular';

@Component({
    selector: 'app-business',
    templateUrl: './business.page.html',
    styleUrls: ['./business.page.scss'],
    standalone: false
})
export class BusinessPage implements OnInit {
  @ViewChild('content', { static: true }) content: IonContent;
  @ViewChild('chat_input', { static: true }) messageInput: ElementRef;
  public User: string;
  public toUser: string;
  public inputText: any;
  public msgList: Array<{
    userId: any;
    userName: any;
    userAvatar: any;
    time: any;
    message: any;
    upertext: any;
  }>;
  public count = 0;
  public chatSenderData: Array<any>;

  constructor() {


    this.msgList = BUSINESS_CHAT_DATA;
    this.chatSenderData = BUSINESS_SENDER_CHAT_DATA;

  }

  ngOnInit() {
    this.User = 'Me';
    this.toUser = 'driver';
  }

  scrollToBottom() {
    this.content.scrollToBottom(100);
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 500);
  }

  logScrollStart() {
    document.getElementById('chat-parent');

  }

  logScrolling(event) {
  }
  sendMsg() {
    let otherUser;
    if (this.count === 0) {
      otherUser = this.chatSenderData[0].message;
      this.count++;
    } else if (this.count === this.chatSenderData.length) {
      this.count = 0;
      otherUser = this.chatSenderData[this.count].message;
    } else {
      otherUser = this.chatSenderData[this.count].message;
      this.count++;
    }

    this.msgList.push({
      userId: this.User,
      userName: this.User,
      userAvatar: 'assets/chat/user.jpeg',
      time: '12:01 pm',
      message: this.inputText,
      upertext: this.inputText
    });
    this.msgList.push({
      userId: this.toUser,
      userName: this.toUser,
      userAvatar: 'assets/chat/user.jpeg',
      time: '12:01 pm',
      message: otherUser,
      upertext: otherUser
    });
    this.inputText = '';
    setTimeout(() => {
      this.scrollToBottom();
    }, 10);
  }

  mouseDown($event: any) {
    $event.preventDefault();
  }

}

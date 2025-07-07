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
import { BREEZE_CHAT_DATA, BREEZE_SHARE_LIST, BREEZE_USER_DETAILS, BREEZE_GALLERY_DATA } from '../../data/chat-screen-data';

@Component({
  selector: 'app-breeze',
  templateUrl: './breeze.page.html',
  styleUrls: ['./breeze.page.scss'],
})
export class BreezePage implements OnInit {
  @ViewChild('content', { static: true }) content: IonContent;
  public User: string;
  public toUser: string;
  public inputText: any;
  public iconColor: any;
  public userDetails: any;
  public GalleryListToggle: boolean;
  public SearchToggle: boolean;
  public ShareToggle: boolean;
  public gallery: Array<any>;
  public shareList: Array<any>;
  public progressbarValue: number;
  public progressbarBuffer = '1';
  public imageMove: any;
  public loader = false;

  msgList: Array<{
    userId: any;
    userName: any;
    userAvatar: any;
    time?: any;
    message?: any;
    image?: any;
  }>;
  constructor() {


    this.msgList = BREEZE_CHAT_DATA;
    this.shareList = BREEZE_SHARE_LIST;
    this.userDetails = BREEZE_USER_DETAILS;
    this.gallery = BREEZE_GALLERY_DATA;
  }

  ngOnInit() {
    this.GalleryListToggle = false;
    this.SearchToggle = false;
    this.ShareToggle = false;
    this.User = 'Me';
    this.toUser = 'driver';
  }


  scrollToBottom() {
    this.content.scrollToBottom(100);
  }
  sendMsg(chipText?) {
    if (this.inputText && this.inputText.trim() !== '') {
      this.inputText = this.inputText ? this.inputText : chipText;
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/driver.jpeg',
        time: '12:01 pm',
        message: this.inputText,
      });

      this.inputText = '';
      setTimeout(() => {
        this.scrollToBottom();
      }, 10);
      this.inputText = '';
      this.loader = true;
      setTimeout(() => {
        this.senderSends();
      }, 2000);
    }
  }
  senderSends() {
    this.msgList.push({
      userId: this.toUser,
      userName: this.toUser,
      userAvatar: 'assets/user.jpeg',
      time: '12:01 pm',
      message: 'Sorry, I don\'t know the answer to that. Please ask something else'
    });
    this.loader = false;
    setTimeout(() => {
      this.scrollToBottom();
    }, 10);
  }

  cameraOpen() {
    this.GalleryListToggle = !this.GalleryListToggle;
  }
  searchOpen() {
    this.SearchToggle = !this.SearchToggle;
  }
  shareOpen() {
    this.ShareToggle = !this.ShareToggle;
  }
  galleryImage(i) {
    this.imageMove = i;
    setTimeout(() => {
      this.GalleryListToggle = false;
      this.iconColor = false;
    }, 300);

    setTimeout(
      this.Load()
      , 3000
    );

    const msg = {
      userId: this.User,
      userName: this.User,
      userAvatar: 'assets/driver.jpeg',
      time: '12:01 pm',
      image: this.gallery[i],
    };
    this.msgList.push(msg);
    setTimeout(() => {
      this.scrollToBottom();
    }, 10);

    setTimeout(() => { this.imageMove = undefined; this.gallery.splice(i, 1); }, 1000);
  }

  Load(): any {
    this.progressbarValue = 10;
    setTimeout(() => {
      this.progressbarValue = 20;
    }, 1);
    setTimeout(() => {
      this.progressbarValue = 30;
    }, 1000);
    setTimeout(() => {
      this.progressbarValue = 40;
    }, 2000);
    setTimeout(() => {
      this.progressbarValue = 50;
    }, 3000);
    setTimeout(() => {
      this.progressbarValue = 60;
    }, 4000);
    setTimeout(() => {
      this.progressbarValue = 70;
    }, 5000);
    setTimeout(() => {
      this.progressbarValue = 80;
    }, 6000);
    setTimeout(() => {
      this.progressbarValue = 100;
    }, 10000);
  }

  something($event: any) {
    $event.preventDefault();
  }

}

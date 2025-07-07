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
import { CLASSIC_CHAT_DATA, CLASSIC_FOOTER_JSON } from '../../data/chat-screen-data';
import { Observable, of } from 'rxjs';
import { MapService } from '@app/map-service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.page.html',
  styleUrls: ['./classic.page.scss'],
})
export class ClassicPage implements OnInit {
  @ViewChild('IonContent', { static: true }) content: IonContent;
  public msgList: Array<any>;
  public userInput: string;
  public User: string;
  public toUser: string;
  public startTyping: any;
  public loader: boolean;
  public footerJson=[];
  public show: boolean;
  public mapWidth = 0.72*window.innerWidth+20;
  apiLoaded: Observable<boolean>;

  constructor(private mapService: MapService) {


    this.msgList = CLASSIC_CHAT_DATA;
    this.footerJson = CLASSIC_FOOTER_JSON;
    this.apiLoaded = this.mapService.apiLoaded;
  }

  ngOnInit() {
    this.userInput = '';
    this.User = 'Me';
    this.toUser = 'HealthBot';
    this.show = false;
  }

  typeSelected(type: any) {
    const msgLength: number = this.msgList.length;
    if (this.userInput === '' && type.icon === 'images') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        image: 'assets/chat/chat/chat3.jpg',
        id: msgLength + 1
      });
      this.userInput = '';
      this.show = false;
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    } else if (this.userInput === '' && type.icon === 'videocam') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        video: 'assets/chat/chat/video.mp4',
        id: msgLength + 1
      });
      this.userInput = '';
      this.show = false;
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    } else if (this.userInput === '' && type.icon === 'location-sharp') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        map: { lat: 52.678418, lng: 7.809007 },
        id: msgLength + 1
      });
      this.userInput = '';
      this.show = false;
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    }
  }

  toggleList() {
    this.show = !this.show;
    this.scrollDown();
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
      this.show = false;
    }
  }
  senderSends() {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: 'assets/chat/chat/chat5.jpg',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please'
      });
      this.loader = false;
      this.scrollDown();
    }, 2000);
    this.scrollDown();
  }
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50);
    }, 200);
  }

  userTyping(event: any) {
    this.show = false;
    this.startTyping = event.target.value;
    this.scrollDown();
  }

  focusFunction(event: any) {
    this.show = false;
  }

  something($event: any) {
    $event.preventDefault();
  }

}

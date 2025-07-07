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
import { ActivatedRoute } from '@angular/router';
import { BLOCKS_CHAT_LIST } from '../../data/chat-screen-data';
import { Observable, of } from 'rxjs';
import { MapService } from '@app/map-service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.page.html',
  styleUrls: ['./blocks.page.scss'],
})
export class BlocksPage implements OnInit {
  @ViewChild('IonContent', { static: true }) content: IonContent;
  public paramData: any;
  public msgList: Array<any>;
  public userName: any;
  public userInput: string;
  public User: string;
  public toUser: string;
  public startTyping: any;
  public loader: boolean;

  public mapWidth = window.innerWidth;
  apiLoaded: Observable<boolean>;

  constructor(private mapService: MapService,public activRoute: ActivatedRoute) {


    this.userInput = '';
    this.User = 'Me';
    this.toUser = 'HealthBot';
    this.apiLoaded = this.mapService.apiLoaded;
  }

  ngOnInit() {
    this.msgList = BLOCKS_CHAT_LIST;
  }
  closeTime(itemSliding) {
    itemSliding.close();
  }

  prepareMsg(image?) {
    // send the msg so it animates
    if (this.userInput !== '' || image) {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        message: this.userInput,
        id: this.msgList.length + 1,
        sent: true, sender: true, read: true,
        image: image ? 'assets/chat/images/user-blocks.jpg' : null,
      });

      this.userInput = '';
      this.scrollDown();

      this.startTyping = false;
      setTimeout(() => {
        this.senderSends(image);
      }, 500);

    }
  }
  prepareMsgcVideo(video) {
    if (this.userInput !== '' || video) {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        message: this.userInput,
        id: this.msgList.length + 1,
        sent: true, sender: true, read: true,
        video: 'assets/chat/chat/video.mp4',
      });
      this.userInput = '';
      this.scrollDown();

      this.startTyping = false;
      this.loader = true;
      setTimeout(() => {
        this.msgList.push({
          userId: this.User,
          userName: this.User,
          time: '12:01',
          message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        });
        this.loader = false;
        this.scrollDown();
        if (video) {
          this.scrollDown();
        }
      }, 2000);
      this.scrollDown();
    }
  }

  prepareMsgMap(map) {
    if (this.userInput !== '' || map) {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        message: this.userInput,
        id: this.msgList.length + 1,
        sent: true, sender: true, read: true,
        map: { lat: 52.678418, lng: 7.809007 },
      });
      this.userInput = '';
      setTimeout(() => {
        this.scrollDown();
      }, 100);

      this.startTyping = false;
      this.loader = true;
      setTimeout(() => {
        this.msgList.push({
          userId: this.User,
          userName: this.User,
          time: '12:01',
          message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        });
        this.loader = false;
        this.scrollDown();
        if (map) {
          setTimeout(() => {
            this.scrollDown();
          }, 100);
        }
      }, 2000);
      this.scrollDown();
    }
  }


  senderSends(image) {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        time: '12:01',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        image: image ? 'assets/chat/images/sender-blocks.jpg' : null,

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
    this.scrollDown();
  }
  something($event: any) {
    $event.preventDefault();
  }

}

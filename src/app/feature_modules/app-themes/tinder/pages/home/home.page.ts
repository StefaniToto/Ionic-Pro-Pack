/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Direction, DragEvent, StackConfig, SwingCardDirective, SwingStackDirective, ThrowEvent } from '../../components/ionic-swing/ionic-swing.module';
import { TindericonsComponent } from '../../components/tindericons/tindericons.component';
import { DataService, HomeTab, footerIcon } from '../../services/data.service';
import { IonContent, IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: false
})
export class HomePage {
  @ViewChild('IonContent', { static: true }) content: IonContent;
  @ViewChild('Slides', { static: true }) slides: IonSlides;
  @ViewChild('swingStack', { static: true, read: SwingStackDirective }) swingStack: SwingStackDirective;
  @ViewChildren('swingCards', { read: SwingCardDirective }) swingCards: QueryList<SwingCardDirective>;

  public segment: string;
  public index: number;
  public tabsData: Array<HomeTab>;
  public segmentButton: any;
  public userDetail: { userDetails: string }[];
  public cards: Array<any>;
  public stackConfig: StackConfig;
  public recentCard: string;
  public slidesImg: { image: string }[];
  public footerIcon: footerIcon[];
  public subSegmentButton: any;
  public modalData: any;
  public modalstarData: any;
  public modalFlashData: any;
  public modalRefreshData: any;
  public showButton: boolean;
  public modalGold: any;
  public hasUserData: any;
  public conversation: Array<any>;
  public phone_model = 'iPhone';
  public input = '';
  public like: boolean;
  public disLike: boolean;
  public superLike: boolean;
  public nope: boolean;
  public clicked: any;

  constructor(
    public dataService: DataService,
    private route: Router,
  ) {

    this.conversation = dataService.TINDER_CHAT_DATA;
    this.tabsData = dataService.tabs;
    this.userDetail = dataService.details;
    this.cards = dataService.card;
    this.footerIcon = dataService.footer_icons;
    this.modalstarData = dataService.star;
    this.modalFlashData = dataService.flash;
    this.modalRefreshData = dataService.refresh;
    this.modalGold = dataService.gold;
    this.showButton = true;
    this.like = false;
    this.disLike = false;
    this.superLike = false;
    this.clicked = true;
    this.hasUserData = false;
    this.recentCard = '';
    this.index = 0;
    this.segmentButton = 'flame';
    this.segment = '';

    this.stackConfig = {
      allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT],
      throwOutConfidence: (offsetX, offsetY, element) => Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1),

      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => 800
    };
    setTimeout(() => {
      this.hasUserData = true;
    }, 2000);
  }

  clikedIconIs(icon) {
    if (icon === 'refresh') {
      this.dataService.openModal(TindericonsComponent, this.modalRefreshData);
    } else if (icon === 'close') {
      this.disLike = true;
      setTimeout(() => {
        this.disLike = false;
        this.cards.pop();
      }, 200);
    } else if (icon === 'star') {
      this.superLike = true;
      setTimeout(() => {
        this.superLike = false;
        this.cards.pop();
      }, 200);
    } else if (icon === 'heart') {
      this.like = true;
      setTimeout(() => {
        this.like = false;
        this.cards.pop();
      }, 200);
    } else if (icon === 'star') {
      this.dataService.openModal(TindericonsComponent, this.modalstarData, 'modalBackground');
    } else if (icon === 'flash') {
      this.dataService.openModal(TindericonsComponent, this.modalFlashData, 'modalBackground');
    } else if (icon === 'star') {
      this.dataService.openModal(TindericonsComponent, this.modalstarData, 'modalBackground');
    }
  }


  updateImage(i) {
  }
  onItemMove(element, x, y, r) {
    element.style.transform = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  voteUp(like: boolean) {
    const removedCard = this.cards.pop();
    this.addNewCards(1);
    if (like) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      this.recentCard = 'You liked: ' + removedCard.name;
    } else {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      this.recentCard = 'You disliked: ' + removedCard.name;
    }
  }

  addNewCards(count: number) {
  }

  decimalToHex(d: any, padding: any) {
    let hex = Number(d).toString(16);
    // eslint-disable-next-line no-param-reassign
    const padding1 = typeof padding === 'undefined' || padding === null ? padding = 2 : padding;
    while (hex.length < padding1) {
      hex = '0' + hex;
    }

    return hex;
  }

  onDragMove(event: DragEvent) {
    if (event.offset > 5 || event.throwDirection === 'Symbol(RIGHT)') {
      this.like = true;
      this.disLike = false;
      this.superLike = false;

    } else if (event.offset < -5 || event.throwDirection === 'Symbol(LEFT)') {
      this.like = false;
      this.disLike = true;
      this.superLike = false;
    } else if (event.offset > 0 || event.throwDirection === 'Symbol(UP)') {
      this.like = false;
      this.disLike = false;
      this.superLike = true;
    }
  }
  onDragEnd(event: DragEvent) {
    this.like = false;
    this.disLike = false;
    this.superLike = false;
  }
  segmentChanged(event: any) {
    this.segmentButton = event.detail.value;
    if (this.segmentButton === 'flame') {
      setTimeout(() => {
        this.swingStack.dragmove.subscribe((dragEvent: DragEvent) => {
          if (dragEvent.offset > 5 || dragEvent.throwDirection === 'Symbol(RIGHT)') {
            this.like = true;
            this.disLike = false;
            this.superLike = false;
          } else if (dragEvent.offset < -5 || dragEvent.throwDirection === 'Symbol(LEFT)') {
            this.like = false;
            this.disLike = true;
            this.superLike = false;
          } else if (dragEvent.offset > 0 || dragEvent.throwDirection === 'Symbol(UP)') {
            this.like = false;
            this.disLike = false;
            this.superLike = true;
          }
        });
        this.swingStack.dragend.subscribe((dragableEvent: DragEvent) => {
          this.like = false;
          this.disLike = false;
          this.superLike = false;
        });
      }, 1000);
    }

  }
  openandHideDetail(userData) {


  }
  async change() {
    await this.slides.getActiveIndex().then(data => this.index = data);
    if (this.index === 0) {
      this.showButton = true;
    } else if (this.index !== 0) {
      this.showButton = false;
    }
  }
  segmentButtonClicked(event: any) {
    this.subSegmentButton = event.detail.value;
  }
  doRefresh(event) {

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  onThrowOut(event: ThrowEvent) {
  }
  send() {
    if (this.input !== '') {
      this.conversation.push({ text: this.input, sender: 1, image: 'assets/images/sg1.jpg' });
      this.input = '';
      setTimeout(() => {
        this.content.scrollToBottom(50);
      }, 200);
    }
  }
  something($event: any) {
    $event.preventDefault();
  }

}

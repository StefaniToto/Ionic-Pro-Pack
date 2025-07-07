/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { FAQDto } from '../../models/faq.model';
import { IonContent, MenuController } from '@ionic/angular';
import { CrudUtilService } from '../../services/util.service';
import { FAQDataService } from '../../services/faq-data.service';
import { UUID } from 'angular2-uuid';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-firebase-home',
  templateUrl: './firebase-home.page.html',
  styleUrls: ['./firebase-home.page.scss'],
})
export class FirebaseHomePage implements OnInit {
  @ViewChild('content', { static: true }) content: IonContent;
  public questionList: Array<FAQDto>;
  public newFaq: FAQDto;
  public isUpdate: boolean;
  public uid: string;
  public filtertag: any;
  public customAlertOptions: any = {
    header: 'Filter',
  };
  constructor(
    private faqDataServ: FAQDataService,
    private util: CrudUtilService,
    private menuCtrl: MenuController
  ) {

    this.newFaq = this.newQuestion();
    this.util.userid.subscribe(data => {
      this.uid = data;
      this.faqDataServ.get().subscribe(questionList => {
        this.questionList = questionList;
      });
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(false, 'end');
    this.content.scrollToTop(300);
    SplashScreen.hide();
  }

  scroll() {
    this.content.scrollToTop(300);
  }

  addQuestionToDB() {
    this.newFaq.uid = this.uid;
    if (this.newFaq.question.trim().length && this.newFaq.answer.trim().length && this.newFaq.tag.trim().length) {
      this.faqDataServ.create(this.newFaq).then(() => {
        this.newFaq = this.newQuestion();
        this.util.presentToast('question Added', true, 'bottom', 2100);
      }).catch(err => {
        console.log(err);
      });
    } else {
      this.util.presentToast('Please Fill Fields', true, 'bottom', 2100);
    }
  }

  newQuestion() {
    this.isUpdate = false;
    return {
      id: UUID.UUID(),
      question: '',
      answer: '',
      uid: this.uid,
      tag: ''
    };
  }

  editQuestion(questionId: string) {
    this.faqDataServ.getOne(questionId)
      .subscribe(questionData => {
        this.newFaq = questionData;
        this.isUpdate = true;
      });
  }

  updateQuestion() {
    if (this.newFaq.question.trim().length && this.newFaq.answer.trim().length && this.newFaq.tag.trim().length) {
      this.faqDataServ.update(this.newFaq)
        .then(() => {
          this.newFaq = this.newQuestion();
          this.isUpdate = false;
          this.util.presentToast('UPDATED', true, 'bottom', 2100);
        }).catch(err => { console.log(err); });
    }
  }

  cancelUpdate() {
    this.newFaq = this.newQuestion();
    this.isUpdate = false;
  }

  alertFilter() {
    document.getElementById('filterSelect').click();
  }

  tagValue(value) {
    console.log(value);
  }

  headTagValue(filterName: string) {
    const filter = this.questionList.filter(item => item.tag === filterName);
    console.log(filter);

  }

  deleteQuestion(id) {
    this.util.removeConform().then(status => {
      if (status === 'ok') {
        this.faqDataServ.delete(id)
          .then((response) => this.util.presentToast('Item is deleted', null, 'bottom', 3000))
          .catch((err) => console.log('Error in Delete', err));
      }
    });
  }

}

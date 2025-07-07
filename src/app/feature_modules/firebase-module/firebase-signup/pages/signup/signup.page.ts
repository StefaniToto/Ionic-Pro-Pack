/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/firebase-authentication.service';
import { UtilService } from '../../services/util.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  constructor(
    public util: UtilService,
    private menuCtrl: MenuController,
    private authServ: AuthenticationService
  ) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
  }

  signup() {
    if (this.firstName !== '' && this.lastName !== '' && this.email !== '' && this.password !== '' && this.util.validateEmail(this.email)) {
      this.authServ.createAccount(this.email, this.password).then(userData => {
        this.util.presentToast('Thanks for Signup', true, 'bottom', 2100);
        this.util.navigate('', false);
      }).catch(err => {
        if (err) {
          this.util.presentToast(`${err}`, true, 'bottom', 2100);
        }
      });
    } else {
      this.util.presentToast('Wrong Input/Invalid Details', true, 'bottom', 2100);
    }
  }

}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login1',
    templateUrl: './login1.page.html',
    styleUrls: ['./login1.page.scss'],
    standalone: false
})
export class Login1Page implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public menuCtrl: MenuController,
    public router: Router,
  ) {


  }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }
  gotoMain() {
    this.router.navigate(['/']);
  }

}

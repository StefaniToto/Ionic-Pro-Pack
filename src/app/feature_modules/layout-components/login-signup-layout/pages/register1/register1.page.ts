/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-register1',
    templateUrl: './register1.page.html',
    styleUrls: ['./register1.page.scss'],
    standalone: false
})
export class Register1Page implements OnInit {
  public fullname: string;
  public mobileno: string;
  public email: string;

  constructor(
    public router: Router,
    public menuCtrl: MenuController
  ) {

  }

  ngOnInit() {
    this.fullname = '';
    this.email = '';
    this.mobileno = '';
  }

  gotoMain() {
    this.router.navigate(['/']);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

}

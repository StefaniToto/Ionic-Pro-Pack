/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, AlertController } from '@ionic/angular';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { UtilService } from '@app/feature_modules/firebase-module/firebase-signup/services/util.service';
import { AuthenticationService } from '@app/feature_modules/firebase-module/firebase-signup/services/firebase-authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MovieTicketPage } from './feature_modules/layout-components/card-sliders-layout/pages/movie-ticket/movie-ticket.page';
import package_info from '../../package.json';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public sidemenu = 1;
  public showChildren = '';
  public sidemenuLayout1: Array<any>;
  public beginnerMenu: Array<any>;
  public startupMenu: Array<any>;
  public proMenu: Array<any>;
  public email: any;
  public email2: any;
  public current_user: any;
  ionic_v: string;
  cap_v: string;
  ang_v: string;
  appVersion: string;
  constructor(
    private platform: Platform,
    private route: Router,
    private authService: AuthenticationService,
    private util: UtilService,
    public modalCtrl: ModalController,
    public fireAuth: AngularFireAuth,
    private alertController: AlertController
  ) {
    console.log(package_info);
    this.ionic_v = String(package_info.dependencies['@ionic/core']).replace('^', '');
    this.ang_v = String(package_info.dependencies['@angular/core']).includes('^') ? String(package_info.dependencies['@angular/core']).replace('^', '') : String(package_info.dependencies['@angular/core']).replace('~', '');
    this.cap_v = String(package_info.dependencies['@capacitor/core']).replace('^', '');
    this.appVersion = package_info.version;
    this.beginnerMenu = environment.BEGINNER_SIDEMENU;
    this.startupMenu = environment.STARTUP_SIDEMENU;
    this.proMenu = environment.PRO_SIDEMENU;
    this.sidemenuLayout1 = environment.SIDEMENU_LAYOUTS;

  }


  showSidemenu(index: number) {
    this.sidemenu = index + 1;
  }

  expandMenu(title) {
    if (this.showChildren === title) {
      this.showChildren = '';
    } else {
      this.showChildren = title;
    }
  }

  ngOnInit() {
    this.current_user = this.authService.current_user;
  }
  async redirectPage(option) {

    if (option.alert) {
      if (option.alert === 'apple_pay') {
        if(!this.platform.is('ios')) {this.presentAlertConfirm();}
      }
      return;
    }
    if (option.disabled) {
      return;
    }
    if (option.url === '/movie-ticket') {
      const modal = await this.modalCtrl.create({
        component: MovieTicketPage
      });
      return modal.present();
    } else if (option.url === '/logout') {
      this.logout();
    } else if (option.url === '/product-details') {
      this.route.navigate([option.url, { id: 19 }]);
    } else {
      this.route.navigate([option.url]);
    }
  }

  logout() {
    this.authService.logout().then(() => {
      this.util.navigate('login', false);
    });
  }

  gotoAppVerison() {
    this.route.navigate(['version-check']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Dear User',
      message: 'Apple Pay Payment will only work on Apple Device or Simulator',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }
}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { LoginUtilService } from '../../services/util.service';
import { AuthenticationService } from '../../services/firebase-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    public util: LoginUtilService,
    private menuCtrl: MenuController,
    private authServ: AuthenticationService
  ) {

    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }

  signin() {
    if (this.util.validateEmail(this.email) && this.password !== '') {
      this.util.openLoader();
      this.authServ.login(this.email, this.password).then(userData => {
        this.util.navigate('home', false);
        this.email = '';
        this.password = '';
      }).catch(err => {
        if (err) {
          this.util.presentToast(`${err}`, true, 'bottom', 2100);
        }

      }).then(el => this.util.closeLoading());
    } else {
      this.util.presentToast('Please enter email and password', true, 'bottom', 2100);
    }
  }

  signInAnonymously() {
    this.authServ.signInAnonymously().then(
      (userData: any) => {
        this.util.navigate('home', false);
      }
    ).catch(async (err: any) => {
      if (err) {
        await this.util.presentToast(`${err}`,false , 'bottom', 2100);
      }

    });
  }


  async forgotPassword() {
    const alert = await this.alertController.create({
      header: 'Reset Email',
      backdropDismiss: false,
      cssClass: 'darkModeAwareAlert',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter your email',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (userResult) => {
            console.log('Cancel');
          }
        }, {
          text: 'Ok',
          handler: (userResult) => {
            const value = this.util.validateEmail(userResult.email);
            this.authServ.forgotPassoword(userResult.email);
            return value;
          }
        }
      ]
    });
    await alert.present();
  }

  facebookLogin($event) {
    if ($event === 'browser') {
      this.authServ.fbLogin().then(success => {
        console.log('Success in fb login browser', success);
        this.util.presentToast('Success in fb login browser', true, 'bottom', 2100);
        this.authServ.createSocialLoginUser(success.user);
        this.util.navigate('home', false);
      }).catch(err => {
        console.log(err.message, 'Error in fb login browser');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    } else {
      this.authServ.loginWithFacebook($event).then(success => {
        console.log('Success in fb login', success);
        this.util.presentToast('Success in fb login', true, 'bottom', 2100);
        this.authServ.createSocialLoginUser(success.user);
        this.util.navigate('home', false);
      }).catch(err => {
        console.log(err.message, 'Error in fb login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    }
  }

  twitterLogin($event: any) {
    if ($event.isBrowser) {
      this.authServ.twitterLogin().then(success => {
        console.log('Success in twitter login', success);
        this.util.presentToast('success in twitter login', true, 'bottom', 2100);
        this.authServ.createSocialLoginUser(success.user);
        this.util.navigate('home', false);
      }).catch(err => {
        console.log(err.message, 'Error in twitter login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    } else {
      this.authServ.loginWithTwitter($event.token, $event.secret).then(success => {
        console.log('Success in twitter login', success);
        this.authServ.createSocialLoginUser(success.user);
        this.util.navigate('home', false);
      }).catch(err => {
        console.log(err.message, 'Error in twitter login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    }
  }

  googleLogin($event: any) {
    if ($event.isBrowser) {
      this.authServ.googleLogin().then(success => {
        console.log('Success in google login', success);
        this.authServ.createSocialLoginUser(success.user);
        this.util.navigate('home', false);
      }).catch(err => {
        console.log(err.message, 'Error in google login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    } else {
      this.authServ.loginWithGoogle($event.idToken, $event.accessToken).then(success => {
        console.log('Success in google login', success);
        this.authServ.createSocialLoginUser(success.user);
        this.util.navigate('home', false);
      }).catch(err => {
        console.log(err.message, 'Error in google login');
        this.util.presentToast(`${err.message}`, true, 'bottom', 2100);
      });
    }
  }

}

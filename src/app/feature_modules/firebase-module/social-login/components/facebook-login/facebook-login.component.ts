/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss'],
})
export class FacebookLoginComponent implements OnInit {
  @Output() accessToken = new EventEmitter<string>();

  constructor(
    private alertController: AlertController,
    private platform: Platform
  ) { }

  ngOnInit() { }

  async doLogin() {
    if (this.platform.is('capacitor')) {
      const faceBookPermissions = ['email'];
      const result = await FacebookLogin.login({ permissions: faceBookPermissions }) as FacebookLoginResponse;

      if (result && result.accessToken) {

        this.accessToken.next(result.accessToken.token);
      }

    } else {
      this.accessToken.next('browser');
    }
  }

  async showDemoCredentials() {
    const alert = await this.alertController.create({
      header: 'Demo FB Credentials',
      message: '<b>Email:</b> open_djfawry_user@tfbnw.net   <b>Password:</b> a1s2d3f4 ' + '</br></br>' +
      'Use test credentials as this app is in development mode on Facebook',
      backdropDismiss: true,
      cssClass: 'darkModeAwareAlert',
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


  // If you are using Facebook auth separate from Firebase, use this function to Logout
  // If you are using Facebook auth along with Firebase,there is no need to logout from Facebook everytime
  // Signout in your app can be taken care of by Firebase, while user always stays logged in via Facebook

  /* async signOut(): Promise<void> {
    await Plugins.FacebookLogin.logout();
    // --> go back to login page or anywhere you want to redirect
  } */

  /** GETTING FACEBOOK USER PROFILE INFO AFTER LOGIN */
  // userId and token are obtained from Auth response in login function
  // More details in this tutorial - https://enappd.com/blog/facebook-login-in-ionic-react-capacitor-apps/118/

  /* async getUserInfo() {
    const response = await fetch(`https://graph.facebook.com/${userId}?fields=id,name,gender,link,picture&type=large&access_token=${token}`);
    const myJson = await response.json();
    console.log(myJson);
  } */

  /** GETTING CURRENT AUTH STATE OF USER */
  // Use this to get current login state of User
  // This is required if you are not using Firebase with Facebook Login
  // If you are using Firebase with Facebook auth, the auth state check can be done by Firebase itself

  /*   async getCurrentState(): Promise<boolean> {
    const result = await Plugins.FacebookLogin.getCurrentAccessToken();

    try {
      console.log(result);
      return result && result.accessToken;
    } catch (e) {
      return false;
    }
  } */
}

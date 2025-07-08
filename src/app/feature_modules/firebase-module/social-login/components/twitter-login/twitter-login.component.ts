/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Twitter} from "@capacitor-community/twitter";

@Component({
    selector: 'twitter-login',
    templateUrl: './twitter-login.component.html',
    styleUrls: ['./twitter-login.component.scss'],
    standalone: false
})
export class TwitterLoginComponent implements OnInit {

  @Output() accessToken = new EventEmitter<{ token?: string; secret?: string; isBrowser?: boolean }>();

  constructor(private platform: Platform) { }

  ngOnInit() { }

  doLogin() {
    if (this.platform.is('capacitor')) {
      Twitter
        .login()
        .then(result => {
          console.log('result', result);
          const { authToken, authTokenSecret } = result;
          const token = authToken;
          const secret = authTokenSecret;
          this.accessToken.next({ token, secret });
        }) // { authToken:string, authTokenSecret:string, userName:string, userID:string }
        .catch(err => console.log(err));
    } else {
      this.accessToken.next({ isBrowser: true });
    }
  }

  // Use this to get current login state of User
  // This is required if you are not using Firebase with Twitter Login
  // If you are using Firebase with Twitter auth, the auth state check can be done by Firebase itself

  /* async getCurrentState() {
    twitter
      .isLogged()
      .then(r => console.log(r)) // returns { in: boolean, out: boolean }
      .catch(err => console.log(err));
  } */

  // If you are using Twitter auth separate from Firebase, use this function to Logout
  // If you are using Twitter auth along with Firebase,there is no need to logout from Twitter everytime
  // Signout in your app can be taken care of by Firebase, while user always stays logged in via Twitter

  /* async signOutFromTwitter(): Promise<void> {
    await twitter.logout();
    // --> go back to login page or anywhere you want to redirect
  } */

  // This function can be used to get user's profile info
  // The API called with YOUR_SERVER_API_URL should call your server, which will get the user info from Twitter
  // This cannot be done on the front-end
  // Check this tutorial for detailed info - https://enappd.com/blog/twitter-login-in-ionic-react-capacitor-app/121/

  /* async getUserInfo() {
    const url = 'YOUR_SERVER_API_URL';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ userName: 'USERNAME_RECEIVED_FROM_AUTH' })
    });

    // This is your user's profile info
    // Check this tutorial for detailed info - https://enappd.com/blog/twitter-login-in-ionic-react-capacitor-app/121/
    const myJson = await response.json();
    console.log(myJson);
  } */
}

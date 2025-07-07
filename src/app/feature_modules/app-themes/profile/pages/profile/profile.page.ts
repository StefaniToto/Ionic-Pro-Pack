/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public selectSegment: string;
  public userDetails: any;

  constructor() {

    this.userDetails = { profileUrl: 'assets/profile/user.jpeg', name: 'John Doe', phoneNo: '+91-000-0000-0000', location: 'NY' };
    this.selectSegment = 'profile';
  }

  ngOnInit() {
  }

  editProfile() {
    this.selectSegment = 'profile';
  }
}

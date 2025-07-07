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
  selector: 'my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  public names: string;
  public email: string;
  public phoneNumber: string;
  public gender: string;

  constructor() {
    this.names = 'Jack Doe';
    this.email = 'Jack@enappd.com';
    this.phoneNumber = '+91 9878745214';
    this.gender = 'Male';
  }

  ngOnInit() { }

}

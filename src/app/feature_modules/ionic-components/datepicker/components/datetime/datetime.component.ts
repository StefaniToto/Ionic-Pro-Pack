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
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent implements OnInit {
  public customYearValues: Array<any> = [];
  public customDayShortNames: Array<any> = [];
  public customPickerOptions: any = {};

  constructor() {
    this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

    this.customDayShortNames = [
      's\u00f8n',
      'man',
      'tir',
      'ons',
      'tor',
      'fre',
      'l\u00f8r'
    ];

    this.customPickerOptions = {
      buttons: [
        {
          text: 'Save',
          handler: () => console.log('Clicked Save!')
        }, {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
          }
        }
      ]
    };
  }

  ngOnInit() { }

}

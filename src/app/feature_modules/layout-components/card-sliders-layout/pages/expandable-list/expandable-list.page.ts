/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { ACCORDION_LIST } from '../../data/card-slider-data';
import {  Platform } from '@ionic/angular';

@Component({
  selector: 'app-expandable-list',
  templateUrl: './expandable-list.page.html',
  styleUrls: ['./expandable-list.page.scss'],
})
export class ExpandableListPage implements OnInit {
  public lists: Array<any>;
  public showToolbar: boolean;
  public shownGroup: number;

  constructor(public platform: Platform) {
    this.lists = ACCORDION_LIST;
  }

  ngOnInit() {
    this.calculateListHeight();
    this.toggleGroup(0);
  }
  calculateListHeight() {
    this.lists.forEach(list => {
      list.height = this.platform.is('ios') ? list.children.length * 85 + 20 + 'px' : list.children.length * 98 + 20 + 'px';
    });
  }
  ionViewWillEnter() {
    this.showToolbar = true;
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }

  isGroupShown(group) {
    return this.shownGroup === group;
  }

}

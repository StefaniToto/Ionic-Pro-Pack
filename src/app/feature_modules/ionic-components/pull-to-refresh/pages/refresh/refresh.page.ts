/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { PullRefreshService } from '../../services/pull-refresh.service';
import { REFRESH_DATA } from '../../data/refresh-data';

@Component({
    selector: 'app-refresh',
    templateUrl: './refresh.page.html',
    styleUrls: ['./refresh.page.scss'],
    standalone: false
})
export class RefreshPage implements OnInit {
  public initialData: Array<any>;
  public loadedData: Array<any> = [];

  constructor(private service: PullRefreshService) {
    this.initialData = REFRESH_DATA;
  }

  ngOnInit() {
    this.resetList();
  }

  doRefresh(event) {
    if (this.loadedData.length > 10) {
      setTimeout(() => {
        this.service.presentToast('No new data available', true, 'top', 1500);
        event.target.complete();
      }, 1000);
    } else {
      this.service.getApiResponse().subscribe((data: any) => {
        const result = data.result;
        result.forEach(element => {
          this.loadedData.unshift(element);
        });
        event.target.complete();
      });
    }
  }

  resetList() {
    this.loadedData = Object.assign([], this.initialData);
  }

}

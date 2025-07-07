/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { NETFLIX_MOVIE_DATA, NETFLIX_SERIES_DATA } from '../../data/netflix-data';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.page.html',
  styleUrls: ['./netflix.page.scss'],
})
export class NetflixPage implements OnInit {
  public netflixSeriesData: any;
  public netflixMoviesData: any;
  public segmentTab = 'series';


  constructor() {

    this.netflixMoviesData = NETFLIX_MOVIE_DATA;
    this.netflixSeriesData = NETFLIX_SERIES_DATA;
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

}

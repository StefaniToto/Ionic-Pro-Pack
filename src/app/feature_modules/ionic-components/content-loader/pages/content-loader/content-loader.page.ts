/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { ContentLoaderService } from '../../services/content-loader.service';

@Component({
    selector: 'app-content-loader',
    templateUrl: './content-loader.page.html',
    styleUrls: ['./content-loader.page.scss'],
    standalone: false
})
export class ContentLoaderPage implements OnInit {
  public segmentTab = 'api';
  public loadedData = null;
  public window = window;
  public toolbarColor: string;
  constructor(private service: ContentLoaderService) {
    this.service.getApiResponse().subscribe((response: any) => {
      this.loadedData = response;
    });

    this.segmentTab = 'api';

    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
  }

  toggleDarkTheme(shouldAdd) {
    // Add or remove the "dark" class based on if the media query matches
    this.toolbarColor = shouldAdd ? 'light' : 'primary';
  }
  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }


}

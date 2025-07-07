/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Browser, OpenOptions } from '@capacitor/browser';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.page.html',
  styleUrls: ['./translate.page.scss'],
})
export class TranslatePage implements OnInit {
  public segmentTab = 'translation';
  public title: string;
  public title2: string;
  public description: string;
  public name: string;
  public language: string;
  toolbarColor: string;

  constructor(private translate: TranslateService) {

    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
  }

  toggleDarkTheme(shouldAdd) {
    // Add or remove the "dark" class based on if the media query matches
    this.toolbarColor = shouldAdd ? 'light': 'primary';
  }

  ngOnInit() {
  }

  ionViewDidEnter(): void {
    this.initTranslate();
  }

  _initialiseTranslation(): void {
    this.translate.get('TITLE').subscribe((res: string) => {
      this.title = res;
    });
    this.translate.get('description').subscribe((res: string) => {
      this.description = res;
    });
    this.translate.get('TITLE_2', { value: 'John' }).subscribe((res: string) => {
      this.title2 = res;
    });
    this.translate.get('data.name', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.name = res;
    });

  }

  public changeLanguage(): void {
    this.translateLanguage();
  }

  translateLanguage(): void {
    this.translate.use(this.language);
    this._initialiseTranslation();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.language = this.translate.getBrowserLang();
    } else {
      // Set your language here
      this.language = 'en';
    }

    this.translateLanguage();
  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

  async goToLink(){
    const options: OpenOptions = {
      url: 'https://enappd.com/blog/how-to-translate-in-ionic-internationalization-and-localization/143/',
      windowName: '_system'
    };
    await Browser.open(options);
  }


}

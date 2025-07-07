/**
 * Capacitor Full App - Ionic Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreenPage } from './splash-screen.page';

describe('SplashScreenPage', () => {
  let component: SplashScreenPage;
  let fixture: ComponentFixture<SplashScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplashScreenPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

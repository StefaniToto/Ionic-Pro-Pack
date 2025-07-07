/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomfontsPage } from './customfonts.page';

describe('CustomfontsPage', () => {
  let component: CustomfontsPage;
  let fixture: ComponentFixture<CustomfontsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CustomfontsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomfontsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

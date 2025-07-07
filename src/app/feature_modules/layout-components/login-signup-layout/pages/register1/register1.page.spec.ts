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

import { Register1Page } from './register1.page';

describe('Register1Page', () => {
  let component: Register1Page;
  let fixture: ComponentFixture<Register1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Register1Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Injectable } from '@angular/core';
import { CrudUtilService } from './util.service';
import { AuthenticationService } from './firebase-authentication.service';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {

  constructor(
    private authServ: AuthenticationService,
    private util: CrudUtilService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    return this.authServ.checkAuth().then(user => {
      if (user) {
        return true;
      } else {
        this.util.navigate('walkthrough', true);
      }
    });
  }
}

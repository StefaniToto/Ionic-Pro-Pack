/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstaTabsPage } from './insta-tabs.page';
const routes: Routes = [
  {
    path: '',
    component: InstaTabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../insta/insta.module').then(m => m.InstaPageModule)
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: () => import('../insta/insta.module').then(m => m.InstaPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../instaprofile/instaprofile.module').then(m => m.InstaprofilePageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
// const routes: Routes = [
//   {
//     path: '',
//     component: InstaTabsPage
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstaTabsPageRoutingModule { }

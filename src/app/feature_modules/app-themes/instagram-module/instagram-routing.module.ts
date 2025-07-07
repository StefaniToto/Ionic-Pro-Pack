import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'insta',
    loadChildren: () => import('./pages/insta/insta.module').then(m => m.InstaPageModule)
  },
  {
    path: 'insta-tabs',
    loadChildren: () => import('./pages/insta-tabs/insta-tabs.module').then(m => m.InstaTabsPageModule)
  },
  {
    path: 'instaprofile',
    loadChildren: () => import('./pages/instaprofile/instaprofile.module').then(m => m.InstaprofilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class InstagramRouting { }

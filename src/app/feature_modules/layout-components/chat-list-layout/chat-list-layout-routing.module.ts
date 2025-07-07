import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'artboard',
    loadChildren: () => import('./pages/artboard/artboard.module').then(m => m.ArtboardPageModule)
  },
  {
    path: 'elegance',
    loadChildren: () => import('./pages/elegance/elegance.module').then(m => m.ElegancePageModule)
  },
  {
    path: 'pastry',
    loadChildren: () => import('./pages/pastry/pastry.module').then(m => m.PastryPageModule)
  },
  {
    path: 'rose-list',
    loadChildren: () => import('./pages/rose-list/rose-list.module').then(m => m.RoseListPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class ChatListLayoutRouting { }

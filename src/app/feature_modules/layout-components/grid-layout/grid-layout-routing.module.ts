import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'full-grid',
    loadChildren: () => import('./pages/full-grid/full-grid.module').then(m => m.FullGridPageModule)
  },
  {
    path: 'grid-x2',
    loadChildren: () => import('./pages/grid-x2/grid-x2.module').then(m => m.GridX2PageModule)
  },
  {
    path: 'grid-x3',
    loadChildren: () => import('./pages/grid-x3/grid-x3.module').then(m => m.GridX3PageModule)
  },
  {
    path: 'masonry-grid',
    loadChildren: () => import('./pages/masonry-grid/masonry-grid.module').then(m => m.MasonryGridPageModule)
  },
  {
    path: 'shop-grid',
    loadChildren: () => import('./pages/shop-grid/shop-grid.module').then(m => m.ShopGridPageModule)
  },
  {
    path: 'square-grid',
    loadChildren: () => import('./pages/square-grid/square-grid.module').then(m => m.SquareGridPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class GridLayoutRouting { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'card-slider',
    loadChildren: () => import('./pages/card-slider/card-slider.module').then(m => m.CardSliderPageModule)
  },
  {
    path: 'card8',
    loadChildren: () => import('./pages/card8/card8.module').then(m => m.Card8PageModule)
  },
  {
    path: 'event-card',
    loadChildren: () => import('./pages/event-card/event-card.module').then(m => m.EventCardPageModule)
  },
  {
    path: 'filtering-list',
    loadChildren: () => import('./pages/filtering-card/filtering-card.module').then(m => m.FilteringCardPageModule)
  },
  {
    path: 'large-card',
    loadChildren: () => import('./pages/large-card/large-card.module').then(m => m.LargeCardPageModule)
  },
  {
    path: 'expandable-list',
    loadChildren: () => import('./pages/expandable-list/expandable-list.module').then(m => m.ExpandableListPageModule)
  },
  {
    path: 'product-card',
    loadChildren: () => import('./pages/product-card/product-card.module').then(m => m.ProductCardPageModule)
  },
  {
    path: 'sliders',
    loadChildren: () => import('./pages/sliders/sliders.module').then(m => m.SlidersPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class CardSliderLayoutRouting { }

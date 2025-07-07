import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blocks',
    loadChildren: () => import('./pages/blocks/blocks.module').then(m => m.BlocksPageModule)
  },
  {
    path: 'breeze',
    loadChildren: () => import('./pages/breeze/breeze.module').then(m => m.BreezePageModule)
  },
  {
    path: 'bubble',
    loadChildren: () => import('./pages/bubble/bubble.module').then(m => m.BubblePageModule)
  },
  {
    path: 'rose',
    loadChildren: () => import('./pages/rose/rose.module').then(m => m.RosePageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./pages/business/business.module').then(m => m.BusinessPageModule)
  },
  {
    path: 'classic',
    loadChildren: () => import('./pages/classic/classic.module').then(m => m.ClassicPageModule)
  },
  {
    path: 'fluid',
    loadChildren: () => import('./pages/fluid/fluid.module').then(m => m.FluidPageModule)
  },
  {
    path: 'minimal',
    loadChildren: () => import('./pages/minimal/minimal.module').then(m => m.MinimalPageModule)
  },
  {
    path: 'starbucks',
    loadChildren: () => import('./pages/starbucks/starbucks.module').then(m => m.StarbucksPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class ChatScreenLayoutRouting { }

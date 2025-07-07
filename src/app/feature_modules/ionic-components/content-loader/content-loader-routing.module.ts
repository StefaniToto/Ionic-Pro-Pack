import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'content-loader',
    loadChildren: () => import('./pages/content-loader/content-loader.module').then(m => m.ContentLoaderPageModule)
  },
  {
    path: 'content-loader2',
    loadChildren: () => import('./pages/content-loader2/content-loader2.module').then(m => m.ContentLoader2PageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class ContentLoaderRoutingModule { }

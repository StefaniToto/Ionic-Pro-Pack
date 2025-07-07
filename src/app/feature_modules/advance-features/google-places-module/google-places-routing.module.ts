import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'google-places',
    loadChildren: () => import('./pages/google-places/google-places.module').then(m => m.GooglePlacesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class GooglePlacesCompleteRouting { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sweet-alert',
    loadChildren: () => import('./pages/sweet-alert/sweet-alert.module').then(m => m.SweetAlertPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class SweetAlertRoutingModule { }

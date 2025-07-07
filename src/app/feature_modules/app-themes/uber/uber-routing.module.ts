import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'uber-map-flow',
    loadChildren: () => import('./pages/uber-map-flow/uber-map-flow.module').then(m => m.UberMapFlowPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class UberRouting { }

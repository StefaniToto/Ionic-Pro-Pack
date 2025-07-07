import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'walkthrough',
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class WalkthroughRoutingModule { }

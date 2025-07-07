import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardsService } from './services/guards.service';
const routes: Routes = [
  {
    path: 'home',
    canActivate: [GuardsService],
    loadChildren: () => import('./pages/firebase-home/firebase-home.module').then(m => m.FirebaseHomePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class CrudOperationRouting { }

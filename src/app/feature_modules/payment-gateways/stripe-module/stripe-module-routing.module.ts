import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'stripepayment',
    loadChildren: () => import('./pages/stripepayment/stripepayment.module').then(m => m.StripepaymentPageModule)
  },
  {
    path: 'stripe-web',
    loadChildren: () => import('./pages/stripe-web/stripe-web.module').then(m => m.StripeWebPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class StripeModuleRouting { }

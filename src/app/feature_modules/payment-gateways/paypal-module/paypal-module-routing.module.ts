import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'paypalpayment',
    loadChildren: () => import('./pages/paypalpayment/paypalpayment.module').then(m => m.PaypalpaymentPageModule)
  },
  {
    path: 'paypal-web',
    loadChildren: () => import('./pages/paypal-web/paypal-web.module').then(m => m.PaypalWebPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class PaypalModuleRouting { }

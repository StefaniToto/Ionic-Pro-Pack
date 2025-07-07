import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'orderinfo',
    loadChildren: () => import('./pages/orderinfo/orderinfo.module').then(m => m.OrderinfoPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'woocommerce-products',
    loadChildren: () => import('./pages/woocommerce-products/woocommerce-products.module').then(m => m.WoocommerceProductsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class WoocommerceRouting { }

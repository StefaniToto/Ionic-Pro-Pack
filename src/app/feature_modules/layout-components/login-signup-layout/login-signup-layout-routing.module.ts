import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login-1',
    loadChildren: () => import('./pages/login1/login1.module').then(m => m.Login1PageModule)
  },
  {
    path: 'login-2',
    loadChildren: () => import('./pages/login2/login2.module').then(m => m.Login2PageModule)
  },
  {
    path: 'login-3',
    loadChildren: () => import('./pages/login3/login3.module').then(m => m.Login3PageModule)
  },
  {
    path: 'register-1',
    loadChildren: () => import('./pages/register1/register1.module').then(m => m.Register1PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class LoginSignupLayoutRouting { }

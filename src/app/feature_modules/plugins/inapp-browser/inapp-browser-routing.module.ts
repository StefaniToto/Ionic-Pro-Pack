import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'in-app-browser',
    loadChildren: () => import('./pages/in-app-browser/in-app-browser.module').then(m => m.InAppBrowserPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class InAppBrowserRouting { }

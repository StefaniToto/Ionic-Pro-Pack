import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'screen-reader',
    loadChildren: () => import('./pages/screen-reader/screen-reader.module').then(m => m.ScreenReaderPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class ScreenReaderRouting { }

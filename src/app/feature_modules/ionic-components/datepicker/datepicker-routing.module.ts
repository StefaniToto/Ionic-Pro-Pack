import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'datetimepickers',
    loadChildren: () => import('./pages/datetime-pickers/datetime-pickers.module').then(m => m.DatetimePickersPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class DatepickerRouting { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'google-autocomplete',
    loadChildren: () => import('./pages/google-autocomplete/google-autocomplete.module').then(m => m.GoogleAutocompletePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class GoogleAutoCompleteRouting { }

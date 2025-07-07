import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blogpage',
    loadChildren: () => import('./pages/blogpage/blogpage.module').then(m => m.BlogpagePageModule)
  },
  {
    path: 'blogs/:id',
    loadChildren: () => import('./pages/blogpage/blogpage.module').then(m => m.BlogpagePageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class WordPressRouting { }

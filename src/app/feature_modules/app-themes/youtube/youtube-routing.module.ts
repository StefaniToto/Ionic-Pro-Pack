import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'video-large-card',
    loadChildren: () => import('./pages/largecard/largecard.module').then(m => m.LargecardPageModule)
  },
  // {
  //     path: 'view-video',
  //     loadChildren: () => import('./pages/view-video/view-video.module').then(m => m.LargecardPageModule)
  // },
  {
    path: 'youtube-home-playlist',
    loadChildren: () => import('./pages/youtube-home-playlist/youtube-home-playlist.module').then(m => m.YoutubeHomePlaylistPageModule)
  },
  {
    path: 'grid-youtube-playlist',
    loadChildren: () => import('./pages/youtube-playlist/youtube-playlist.module').then(m => m.YoutubePlaylistPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class YoutubeRouting { }

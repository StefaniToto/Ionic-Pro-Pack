import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramModule } from './instagram-module/instagram-module.module';
import { NetflixModule } from './netflix/netflix.module';
import { TinderModule } from './tinder/tinder.module';
import { UberModule } from './uber/uber.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { YoutubeModule } from './youtube/youtube.module';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstagramModule,
    NetflixModule,
    TinderModule,
    UberModule,
    WhatsappModule,
    YoutubeModule,
    ProfileModule
  ]
})
export class ThemeModuleModule { }

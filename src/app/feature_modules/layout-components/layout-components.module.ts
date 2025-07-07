import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListLayoutModule } from './chat-list-layout/chat-list-layout.module';
import { ChatScreenLayoutModule } from './chat-screen-layout/chat-screen-layout.module';
import { LoginSignupLayoutModule } from './login-signup-layout/login-signup-layout.module';
import { SlidersLayoutModule } from './card-sliders-layout/sliders-layout.module';
import { GridLayoutModule } from './grid-layout/grid-layout.module';
import { WalkthroughModule } from './walkthrough/walkthrough.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChatListLayoutModule,
    ChatScreenLayoutModule,
    LoginSignupLayoutModule,
    SlidersLayoutModule,
    GridLayoutModule,
    WalkthroughModule
  ]
})
export class LayoutComponentsModule { }

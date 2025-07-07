import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FacebookLoginComponent } from './components/facebook-login/facebook-login.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { TwitterLoginComponent } from './components/twitter-login/twitter-login.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [FacebookLoginComponent, GoogleLoginComponent, TwitterLoginComponent],
  exports: [FacebookLoginComponent, GoogleLoginComponent, TwitterLoginComponent]
})
export class SharedModule {}

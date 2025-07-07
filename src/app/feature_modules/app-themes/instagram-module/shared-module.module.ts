import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { InstagramComponent } from './components/instagram/instagram.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [InstagramComponent],
  exports: [InstagramComponent]
})
export class SharedModule {}

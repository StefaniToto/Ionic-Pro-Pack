import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TinderRouting } from './tinder-routing.module';
import { TindericonsComponent } from './components/tindericons/tindericons.component';
import { SwingModule } from 'angular2-swing';
import { IonicSwingModule } from './components/ionic-swing/ionic-swing.module';


@NgModule({
  declarations: [TindericonsComponent],
  imports: [
    CommonModule,
    TinderRouting,
    SwingModule,
    IonicSwingModule,
    IonicModule
  ]
})
export class TinderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActionsheetComponent } from './components/actionsheet/actionsheet.component';
import { AlertComponent } from './components/alert/alert.component';
import { RangeComponent } from './components/range/range.component';
import { RippleComponent } from './components/ripple/ripple.component';


@NgModule({
  declarations: [
    ActionsheetComponent,
    AlertComponent,
    RangeComponent,
    RippleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ActionsheetComponent,
    AlertComponent,
    RangeComponent,
    RippleComponent
  ]
})
export class ShareModule { }

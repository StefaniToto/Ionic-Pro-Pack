import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerRouting } from './datepicker-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    DatepickerRouting,
  ]
})
export class DatepickerModule { }

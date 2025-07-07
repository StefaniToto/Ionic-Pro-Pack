import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DatetimeComponent } from './components/datetime/datetime.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [DatetimeComponent],
  exports: [DatetimeComponent]
})
export class SharedModule {}

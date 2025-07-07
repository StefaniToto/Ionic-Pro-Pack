import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from './components/product/product.component';
import { InnerhomeComponent } from './components/innerhome/innerhome.component';
import { ReviewComponent } from './components/review/review.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ProductComponent, InnerhomeComponent, ReviewComponent],
  exports: [ProductComponent, InnerhomeComponent, ReviewComponent]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MyAddressComponent } from './components/my-address/my-address.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PaymentCardsComponent } from './components/payment-cards/payment-cards.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [MyAddressComponent, MyProfileComponent, PaymentCardsComponent],
  exports: [MyAddressComponent, MyProfileComponent, PaymentCardsComponent]
})
export class SharedModule {}

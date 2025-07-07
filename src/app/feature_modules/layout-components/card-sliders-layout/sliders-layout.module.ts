import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardSliderLayoutRouting } from './card-slider-layout-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MovieTicketPage } from './pages/movie-ticket/movie-ticket.page';


@NgModule({
  declarations: [MovieTicketPage],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule,
    CardSliderLayoutRouting
  ]
})
export class SlidersLayoutModule { }

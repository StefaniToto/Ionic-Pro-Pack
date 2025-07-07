import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MapDirectionPage } from './pages/map-direction/map-direction.page';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [MapDirectionPage],
  exports: [MapDirectionPage, GoogleMapsModule, HttpClientModule, HttpClientJsonpModule ]
})
export class SharedModule {}

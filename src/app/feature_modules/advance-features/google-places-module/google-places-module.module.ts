import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePlacesCompleteRouting } from './google-places-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GoogleMapsModule,
    GooglePlacesCompleteRouting
  ],
  providers: []
})
export class GooglePlacesModuleModule { }

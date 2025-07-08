import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MapDirectionPage } from './pages/map-direction/map-direction.page';
import { GoogleMapsModule } from '@angular/google-maps';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
  withJsonpSupport
} from '@angular/common/http';
@NgModule({ declarations: [MapDirectionPage],
    exports: [MapDirectionPage, GoogleMapsModule, HttpClientModule, HttpClientJsonpModule], imports: [CommonModule,
        IonicModule,
        GoogleMapsModule], providers: [provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())] })
export class SharedModule {}

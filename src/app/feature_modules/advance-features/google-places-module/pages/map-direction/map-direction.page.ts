/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { MapService } from '@app/map-service';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map-direction',
  templateUrl: './map-direction.page.html',
  styleUrls: ['./map-direction.page.scss'],
})
export class MapDirectionPage implements OnInit {
  @ViewChild('myMap') map: GoogleMap;

  public origin: any;
  public destination: any;
  public center: any;
  public mapWidth = window.innerWidth;
  public mapHeight = window.innerHeight - 56;
  apiLoaded: Observable<boolean>;

  constructor(private mapService: MapService,
    private navParams: NavParams,
    private modalCtrl: ModalController,
  ) { }


  ngOnInit() {
    this.origin = this.navParams.data.origin;
    this.destination = this.navParams.data.destination;
    this.apiLoaded = this.mapService.apiLoaded;
    this.center = this.origin;
    setTimeout(() => {
      this.showRoute();
    }, 2000);
  }

  showRoute(){

    const directionsDisplay = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const request = {
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING
    };
    const getDirections = directionsService.route(request, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(this.map.googleMap);
      } else {
        alert('Google route unsuccesfull!');
      }
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}

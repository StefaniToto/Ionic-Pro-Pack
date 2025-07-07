/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController, AlertController } from '@ionic/angular';
import { TaxiService } from '../../services/taxi.service';
import { Geolocation } from '@capacitor/geolocation';
import { Observable, of } from 'rxjs';
import { MapService } from '@app/map-service';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { UtilService } from '../../services/util.service';

@Component({
    selector: 'app-uber-map-flow',
    templateUrl: './uber-map-flow.page.html',
    styleUrls: ['./uber-map-flow.page.scss'],
    standalone: false
})
export class UberMapFlowPage implements OnInit {
  @ViewChild('myMap') map: GoogleMap;
  public zoom = 12;
  public center = { lat: 42.3431717, lng: -71.1443996 };
  public markerUrl: string;
  public driveStatus: boolean;
  public origin: any;
  public destination: any;
  public userCard: boolean;
  public style: Array<any>;
  public mapWidth = window.innerWidth;
  public mapHeight = window.innerHeight - 112;
  apiLoaded: Observable<boolean>;
  watchId: any;
  isWeb = false;
  constructor(private mapService: MapService,
    private ngZone: NgZone,
    public router: Router,
    public menuCtrl: MenuController,
    public alertController: AlertController,
    public taxiServ: TaxiService,
    public platform: Platform,
    private util: UtilService
  ) {
    this.mapHeight = this.platform.is('ios') ? window.innerHeight - 88 : window.innerHeight - 64;
    this.style = taxiServ.style;
    this.markerUrl = 'assets/map/markerPin.png';
    this.driveStatus = false;
    this.userCard = false;

    this.driveStatus = taxiServ.driverStatus;
    this.userCard = taxiServ.userCard;
    this.menuCtrl.enable(true);
    this.apiLoaded = this.mapService.apiLoaded;
    this.isWeb = (this.platform.is('mobileweb') || this.platform.is('desktop'));


  }

  ngOnInit() {
    // this.getDirection();
  }

  ionViewDidEnter() {
    this.userCard = this.taxiServ.userCard;
  }

  mapReady(check: boolean, event: any) {
    if (event) {
    }
  }

  markerDragEnd($event) {
    this.center = { lat: $event.latLng.lat(), lng: $event.latLng.lng() };
  }

  driverStatusChange(event: any, val: any) {
    this.taxiServ.driverStatus = this.driveStatus;

    if (this.driveStatus) {
      setTimeout(() => {
        this.presentAlertConfirm();
      }, 2000);

    } else {
      this.taxiServ.userCard = false;
      this.userCard = false;
    }

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Request!',
      message: 'You have a new Pickup request',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // Handle cancellation of ride. This can take the driver user to a cancelled ride page,
            // OR show an alert on how many rides he/she has already cancelled, and penalty if any
          }
        }, {
          text: 'Okay',
          handler: () => {

            if (!this.isWeb) {
              this.requestPermission();
            }
            else {
              this.getPosition();
            }
          }
        }
      ]
    });

    await alert.present();
  }


  getDirection() {
    this.origin = { lat: this.center.lat, lng: this.center.lng };
    this.destination = { lat: (this.center.lat - 0.05), lng: (this.center.lng - 0.05) };
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

  async getPosition() {
    const options = {
      enableHighAccuracy: true
    };
    this.util.presentToast('Locating your device', true, 'bottom', 0);
    this.watchId = await Geolocation.watchPosition(options, (position, err) => {
      this.util.dismiss();
      this.taxiServ.userCard = true;
      this.userCard = true;
      this.ngZone.run(() => {
        this.center = { lat: position.coords.latitude, lng: position.coords.longitude };
      });
      if (position) {
        setTimeout(() => {
          this.getDirection();
          this.clearWatch();
        }, 200);
      } else {
        this.center = { lat: 40.7128002, lng: -74.0060002 };
        setTimeout(() => {
          this.getDirection();
          this.clearWatch();
        }, 200);
      }
    })
      .catch((err) => {
        this.center = { lat: 40.7128002, lng: -74.0060002 };
        setTimeout(() => {
          this.clearWatch();
        }, 200);
      });
  }

  clearWatch() {
    console.log('Watch position cleared');
    Geolocation.clearWatch({ id: this.watchId });
  }

  requestPermission() {
    Geolocation.checkPermissions().then((res) => {
      console.log(res);
      if (res.location !== 'granted') {
        Geolocation.requestPermissions().then((result) => {
          console.log(result);
          if (result.location === 'granted') { this.getPosition(); }
        });
      }
    });
  }

}

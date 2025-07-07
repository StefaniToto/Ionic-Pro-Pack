/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Geolocation } from '@capacitor/geolocation';
import { UtilService } from '../../services/util.service';

@Component({
    selector: 'app-google-autocomplete',
    templateUrl: './google-autocomplete.page.html',
    styleUrls: ['./google-autocomplete.page.scss'],
    standalone: false
})
export class GoogleAutocompletePage implements OnInit {
  public zoom: number;
  public query;
  public center = { lat: 42.3431717, lng: -71.1443996 };
  public mapWidth = window.innerWidth;
  public mapHeight = window.innerHeight;
  apiLoaded: Observable<boolean>;
  watchId: any;
  constructor(httpClient: HttpClient,
    private ngZone: NgZone,
    private util: UtilService,
    private platform: Platform
  ) {

    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.GOOGLE_MAPS_API_KEY}&libraries=places`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit() {
    const isWeb = (this.platform.is('mobileweb') || this.platform.is('desktop'));
    this.zoom = 12;
    if (!isWeb) {
      this.requestPermission();
    }
    else {
      this.getPosition();
    }
  }

  searchPlaces(event?) {
    if (this.apiLoaded) {
      const nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];

      const defaultBounds = {
        north: this.center.lat + 0.1,
        south: this.center.lat - 0.1,
        east: this.center.lng + 0.1,
        west: this.center.lng - 0.1,
      };
      const options = {
        bounds: defaultBounds,
        fields: ['geometry'], // limit fields for less cost per API call
        origin: this.center,
        strictBounds: false,
        types: ['establishment'],
      };
      const autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, options);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log('Place Location', place);
          this.query = place.formatted_address;
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.center = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
          this.zoom = 12;
        });
      });
    }
  }

  async getPosition() {
    const options = {
      enableHighAccuracy: true
    };
    await this.util.presentToast('Locating your device', true, 'bottom', 0);

    this.watchId = await Geolocation.watchPosition(options, (position, err) => {

      this.center = { lat: position.coords.latitude, lng: position.coords.longitude };
      if (position) {
        this.ngZone.run(() => {
          this.center = { lat: position.coords.latitude, lng: position.coords.longitude };
          console.log('Device Location', this.center.lat, this.center.lng);
        });
        setTimeout(() => {
          this.clearWatch();
        }, 200);
      } else {
        this.center = { lat: 40.7128002, lng: -74.0060002 };
        setTimeout(() => {
          this.clearWatch();
        }, 200);
      }
    })
      .catch((err) => {
        this.center = { lat: 40.7128002, lng: -74.0060002 };

      });
  }

  clearWatch() {
    console.log('Watch position cleared');
    this.util.dismiss();
    Geolocation.clearWatch({ id: this.watchId });
  }

  requestPermission() {
    Geolocation.checkPermissions().then((response) => {
      console.log(response);
      if (response.location !== 'granted') {
        Geolocation.requestPermissions().then((res) => {
          console.log(res);
          if (res.location === 'granted') {this.getPosition();}
        });
      }else{
        this.getPosition();
      }
    });
  }

}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import {
  Component,
  OnInit,
  NgZone,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { MapDirectionPage } from '../map-direction/map-direction.page';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GooglePlacesUtilService } from '../../services/util.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-google-places',
  templateUrl: './google-places.page.html',
  styleUrls: ['./google-places.page.scss'],
})
export class GooglePlacesPage implements OnInit {
  @ViewChild('search', { static: true }) public searchElementRef: ElementRef;
  @ViewChild('myMap') map: GoogleMap;
  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow>;
  public google;
  public zoom: number;
  public autocompleteService: any;
  public placesService: any;
  public openedWindow;
  public mapStyles: Array<any>;
  public markers: Array<any>;
  public displayMarkers: Array<any>;
  public mapOptions: any;
  public isKM: any = 500;
  public isType: any = '';
  public circleCenter: any;
  radius = 500;
  // public map;
  public query;
  public filtertag;
  public center = { lat: 42.3431717, lng: -71.1443996 };
  customAlertOptions: any = {
    header: 'Filter',
  };
  public mapWidth = window.innerWidth;
  public mapHeight = window.innerHeight;
  apiLoaded: Observable<boolean>;
  watchId: any;
  constructor(
    httpClient: HttpClient,
    public navCtrl: NavController,
    public platform: Platform,
    public modalCtrl: ModalController,
    private ngZone: NgZone,
    private util: GooglePlacesUtilService
  ) {
    this.apiLoaded = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${environment.GOOGLE_MAPS_API_KEY}&libraries=places`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit() {
    this.markers = [];
    this.displayMarkers = [];
  }

  ionViewDidEnter() {
    const isWeb = this.platform.is('mobileweb') || this.platform.is('desktop');
    if (!isWeb) {
      this.requestPermission();
    } else {
      this.getPosition();
    }
  }
  async getPosition() {
    const options = {
      enableHighAccuracy: true,
    };
    await this.util.presentToast('Locating your device', true, 'bottom', 0);
    this.watchId = await Geolocation.watchPosition(options, (position, err) => {
      this.util.dismiss();
      this.ngZone.run(() => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.circleCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
      if (position) {
        setTimeout(() => {
          this.nearByPlaces();
          this.clearWatch();
        }, 200);
      } else {
        this.center = { lat: 40.7128002, lng: -74.0060002 };
        setTimeout(() => {
          this.nearByPlaces();
          this.clearWatch();
        }, 200);
      }
    }).catch((err) => {
      this.center = { lat: 40.7128002, lng: -74.0060002 };
      setTimeout(() => {
        this.nearByPlaces();
      }, 200);
    });
  }

  clearWatch() {
    console.log('Watch position cleared');
    Geolocation.clearWatch({ id: this.watchId });
  }

  requestPermission() {
    Geolocation.checkPermissions().then((response) => {
      console.log(response);
      if (response.location !== 'granted') {
        Geolocation.requestPermissions().then((res) => {
          console.log(res);
          if (res.location === 'granted') {
            this.getPosition();
          }
        });
      } else {
        this.getPosition();
      }
    });
  }

  async nearByPlaces() {
    await this.util.presentToast(
      'Searching for nearby places',
      true,
      'bottom',
      0
    );
    const latLng = new google.maps.LatLng(this.center.lat, this.center.lng);
    const service = new google.maps.places.PlacesService(this.map.googleMap);
    service.nearbySearch(
      {
        location: latLng,
        radius: this.radius, // 500 Meter
        // types: [this.isType]
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            this.ngZone.run(() => {
              this.markers.push({
                id: i,
                center: {
                  lat: results[i].geometry.location.lat(),
                  lng: results[i].geometry.location.lng(),
                },
                name: results[i].name,
                iconUrl: {
                  url: results[i].icon,
                  scaledSize: { height: 27, width: 27 },
                },
                rating: results[i].rating,
                types: results[i].types,
                photos: results[i].photos && this.getPhotos(results[i].photos),
                vicinity: results[i].vicinity,
                total_ratings: results[i].user_ratings_total,
                opening_hours: results[i].opening_hours,
              });
              this.displayMarkers = Object.assign([], this.markers);
            });
          }
          setTimeout(() => {
            this.util.dismiss();
          }, 200);
        }
      }
    );
  }

  getPhotos(data) {
    const photos = [];
    data.forEach((element) => {
      photos.push(element.getUrl());
    });
    return photos;
  }

  async getDirection(dir) {
    const direction = {
      origin: { lat: this.center.lat, lng: this.center.lng },
      destination: { lat: dir.lat, lng: dir.lng },
    };
    const modal = await this.modalCtrl.create({
      component: MapDirectionPage,
      componentProps: direction,
    });
    // eslint-disable-next-line no-return-await
    return await modal.present();
  }

  openInfoWindow(marker: MapMarker, windowIndex: number) {
    /// stores the current index in forEach
    let curIdx = 0;
    this.infoWindowsView.forEach((window: MapInfoWindow) => {
      if (windowIndex === curIdx) {
        window.open(marker);
        curIdx++;
      } else {
        curIdx++;
      }
    });
  }

  searchPlaces(event?) {
    if (this.apiLoaded) {
      const nativeHomeInputBox = document
        .getElementById('txtHome')
        .getElementsByTagName('input')[0];
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
      const autocomplete = new google.maps.places.Autocomplete(
        nativeHomeInputBox,
        options
      );
      autocomplete.addListener('place_changed', () => {
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.query = place.formatted_address;
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
        this.ngZone.run(() => {
          this.center = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          this.circleCenter = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
        });
        this.zoom = 12;
        setTimeout(() => {
          this.nearByPlaces();
        }, 200);
      });
    }
  }
  alertFilter() {
    document.getElementById('placesFilterSelect').click();
  }
  headTagValue(filtername) {
    if (filtername !== 'all') {
      const filtered = this.markers.filter(
        (item) => item.types.indexOf(filtername) !== -1
      );
      this.displayMarkers = Object.assign([], filtered);
    } else {
      this.displayMarkers = Object.assign([], this.markers);
    }
  }
}

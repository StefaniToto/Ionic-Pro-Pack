import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root',
})
export class MapService {
    apiLoaded: Observable<boolean>;
    constructor(httpClient: HttpClient) {
        this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.GOOGLE_MAPS_API_KEY}`, 'callback')
            .pipe(
                map(() => true),
                catchError(() => of(false)),
            );
    }



}

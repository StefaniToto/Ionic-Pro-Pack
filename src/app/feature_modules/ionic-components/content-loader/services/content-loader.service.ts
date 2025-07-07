import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentLoaderService {

  constructor(private http: HttpClient) { }
  getApiResponse() {
    const myUrl = 'https://run.mocky.io/v3/d9b7a933-b373-42e5-b4e1-295af39073cc?mocky-delay=5000ms';
    return this.http.get(myUrl);
  }
}

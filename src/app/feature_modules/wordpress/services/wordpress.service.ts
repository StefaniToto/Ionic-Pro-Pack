import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http } from '@capacitor-community/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  url = environment.wordpress_json_url; // Your wordpress base URL
  apiKey = ''; // <-- Enter your own key here if required!

  /**
   * Constructor of the Service with Dependency Injection
   *
   * @param http The standard Capacitor HttpClient to make requests
   */
  constructor() { }

  /**
   * Get data from wordpress
   * map the result to return only the results that we need
   *
   * @returns Observable with the blogs results
   */
  getBlogs(): Observable<any> {
    const options = { url: `${this.url}/wp/v2/posts/` };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  /**
   * Get the detailed information for an ID using the "i" parameter
   *
   * @param id imdbID to retrieve information
   * @returns Observable with detailed information
   */
  getBlogDetail(id) {
    const options = { url: `${this.url}/wp/v2/posts/${id}` };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  /**
   * Get all images from WP media
   *
   * @returns Observable with detailed information
   */
  getMedia() {
    const options = { url: `${this.url}/wp/v2/media` };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  /**
   * Get the image for a blog post
   *
   * @returns Observable with detailed information
   */
  getImage(id) {
    const options = { url: `${this.url}/wp/v2/media/${id}` };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  /**
   * Get all tags from Wordpress
   *
   * @returns Observable with detailed information
   */
  getTags() {
    const options = { url: `${this.url}/wp/v2/tags` };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }

  /**
   * Get user information by ID
   *
   * @returns Observable with detailed information
   */
  getUser(id) {
    const options = { url: `${this.url}/wp/v2/users/${id}` };
    return from(Http.request({ ...options, method: 'GET' })).pipe(map(results => results.data));
  }
}

/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { WordpressUtilService } from '../../services/wordpress-util.service';
import { WordpressService } from '../../services/wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
  public blogPosts: any;

  constructor(
    private wpService: WordpressService,
    public util: WordpressUtilService
  ) {

  }

  ngOnInit() {
    this.util.openLoader();
    // Initiate the API call to fetch all blogs. Show spinner in meantime
    this.getBlogData();
  }

  getBlogData() {
    // Call our service function which returns an Observable
    this.wpService.getBlogs().subscribe(result => {
      this.blogPosts = result;
      this.getImages();
    });
  }

  getImages() {
    this.wpService.getMedia().subscribe((data) => {
      this.blogPosts.forEach(element => {
        const media = data.filter(item => item.id === element.featured_media);
        element.imageData = media[0];
      });
      this.util.closeLoading();
    });
  }

}

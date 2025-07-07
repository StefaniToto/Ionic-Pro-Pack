/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../services/wordpress.service';
import { WordpressUtilService } from '../../services/wordpress-util.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.page.html',
  styleUrls: ['./blogpage.page.scss'],
})
export class BlogpagePage implements OnInit {
  public blogDetail: any;
  public imageUrl: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public wpService: WordpressService,
    public utilService: WordpressUtilService
  ) {

    this.imageUrl = null;
  }

  ngOnInit() {
    this.utilService.openLoader();
    // Get the ID that was passed with the URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.wpService.getBlogDetail(id).subscribe(result => {
      this.blogDetail = result;
      this.getImage(this.blogDetail);
      this.getTags();
      this.getAuthor();
    });

  }

  getImage(data) {
    this.wpService.getImage(data.featured_media).subscribe(blogDetails => {
      this.blogDetail.imageData = blogDetails;
      this.imageUrl = this.blogDetail.imageData.source_url;
    });
  }

  getTags() {
    this.wpService.getTags().subscribe((data: Array<any>) => {
      this.blogDetail.tagsData = data.filter(item => this.blogDetail.tags.includes(item.id));
    });
  }

  getAuthor() {
    this.wpService.getUser(this.blogDetail.author).subscribe(data => {
      this.blogDetail.authorData = data;
      this.utilService.closeLoading();
    });
  }

}

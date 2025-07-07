/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { MASONRY } from '../../data/grid-data';

@Component({
    selector: 'app-masonry-grid',
    templateUrl: './masonry-grid.page.html',
    styleUrls: ['./masonry-grid.page.scss'],
    standalone: false
})
export class MasonryGridPage implements OnInit {
  public data: Array<any>;
  public leftArray: Array<any> = [];
  public rightArray: Array<any> = [];

  constructor() {

    this.data = MASONRY;
  }

  ngOnInit() {
    this.prepareArrayForMasonry(this.data);
  }

  shuffleFullArray() {
    const newArray = this.shuffle(MASONRY);
    this.prepareArrayForMasonry(newArray);
  }

  shuffle(array: any) {
    let currentIndex = array.length; let temporaryValue; let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  prepareArrayForMasonry(array: any) {
    let leftStackHeight = 0;
    let rightStackHeight = 0;
    this.leftArray = [];
    this.rightArray = [];
    const imageLoadPromises = array.map((item: any) => this.imgLoad(item));
    const that = this;
    Promise.all(imageLoadPromises).then(images=> {
      //images is array of image elements from above
      // do something here , they have all loaded
      images.forEach((image: any) => {
        if (leftStackHeight <= rightStackHeight) {
          that.leftArray.push(image);
          leftStackHeight += image.height * (window.innerWidth / 2) / image.width;
        } else {
          that.rightArray.push(image);
          rightStackHeight += image.height * (window.innerWidth / 2) / image.width;
        }
      });

    }).catch(err=> {
      console.log('One or more images did not load');
    });
  }

  imgLoad(item: any) {
    return new Promise((resolve, reject) =>{
      const img = new Image();
      img.onload = () => {
        const data = { image: item.image, height: img.height, width: img.width, title: item.title };
        resolve(data);
      };
      img.src = item.image;
      img.onerror = reject;
    });
  }

}

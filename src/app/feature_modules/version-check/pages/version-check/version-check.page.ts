import { Component, OnInit } from '@angular/core';
import package_info from '../../../../../../package.json';

@Component({
    selector: 'app-version-check',
    templateUrl: './version-check.page.html',
    styleUrls: ['./version-check.page.scss'],
    standalone: false
})
export class VersionCheckPage implements OnInit {
  app_info = package_info;
  constructor() { }

  ngOnInit() {
  }

}

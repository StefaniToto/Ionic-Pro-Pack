import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersionCheckPageRoutingModule } from './version-check-routing.module';

import { VersionCheckPage } from './version-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersionCheckPageRoutingModule
  ],
  declarations: [VersionCheckPage]
})
export class VersionCheckPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLoaderModule } from './content-loader/content-loader.module';
import { CustomFontModule } from './custom-font/custom-font.module';
import { InfiniteListModule } from './infinite-list/infinite-list.module';
import { ListReorderingModule } from './list-reordering/list-reordering.module';
import { PullToRefreshModule } from './pull-to-refresh/pull-to-refresh.module';
import { SweetAlertModule } from './sweet-alert/sweet-alert.module';
import { BasicComponentModule } from './basic-component/basic-component.module';
import { DatepickerModule } from './datepicker/datepicker.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentLoaderModule,
    CustomFontModule,
    InfiniteListModule,
    ListReorderingModule,
    PullToRefreshModule,
    SweetAlertModule,
    BasicComponentModule,
    DatepickerModule
  ]
})
export class IonicComponentModule { }

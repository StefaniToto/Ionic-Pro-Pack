import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PullToRefreshRoutingModule } from './pull-to-refresh-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PullToRefreshRoutingModule
  ],
  providers: [HttpClient]
})
export class PullToRefreshModule { }

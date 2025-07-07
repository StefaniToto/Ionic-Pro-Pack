import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ContentLoaderRoutingModule } from './content-loader-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ContentLoaderRoutingModule
  ],
  providers: [HttpClient]
})
export class ContentLoaderModule { }

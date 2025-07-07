import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InfiniteListRouting } from './infinite-list-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InfiniteListRouting,
    HttpClientModule
  ],
  providers: [HttpClient]
})
export class InfiniteListModule { }

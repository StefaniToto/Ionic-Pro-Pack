import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PullToRefreshRoutingModule } from './pull-to-refresh-routing.module';


@NgModule({ declarations: [], imports: [CommonModule,
        PullToRefreshRoutingModule], providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())] })
export class PullToRefreshModule { }

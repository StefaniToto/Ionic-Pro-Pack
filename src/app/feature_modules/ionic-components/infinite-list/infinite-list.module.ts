import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InfiniteListRouting } from './infinite-list-routing.module';


@NgModule({ declarations: [], imports: [CommonModule,
        InfiniteListRouting], providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())] })
export class InfiniteListModule { }

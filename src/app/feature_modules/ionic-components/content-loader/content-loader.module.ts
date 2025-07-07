import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ContentLoaderRoutingModule } from './content-loader-routing.module';


@NgModule({ declarations: [], imports: [CommonModule,
        ContentLoaderRoutingModule], providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())] })
export class ContentLoaderModule { }

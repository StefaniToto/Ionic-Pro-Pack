import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,provideHttpClient, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { ViewVideoPage } from '@app/feature_modules/app-themes/youtube/pages/view-video/view-video.page';
import { OrderinfoPage } from '@app/feature_modules/woocommerce/pages/orderinfo/orderinfo.page';
import { environment } from '@env/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { VersionCheckModule } from './feature_modules/version-check/version-check-module.module';


export const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json');

@NgModule({ declarations: [AppComponent, ViewVideoPage, OrderinfoPage],
    bootstrap: [AppComponent], imports: [
      BrowserModule,
        // Modular Component Module
        // IonicComponentModule,
        // LayoutComponentsModule,
        // PaymentGatewaysModule,
        // WordpressModuleModule,
        // WoocommerceModule,
        // PhaserModule,
        // AdvancedFeatureModule,
        // FirebaseModule,
        // PluginsModule,
        // ThemeModuleModule,
        // VersionCheckModule,
        // BrowserModule,
        IonicModule.forRoot(),
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: httpLoaderFactory,
        //         deps: [HttpClient]
        //     },
        // }),
        // AngularFireModule.initializeApp(environment.config),
        // AngularFirestoreModule,
        // AngularFireAuthModule,
        // AngularFireStorageModule,
        // AppRoutingModule], providers: [
        //   Storage,
        // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        // { provide: SETTINGS, useValue: {} },
        // provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())
    ] })
export class AppModule { }

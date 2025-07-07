/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { NgModule } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientJsonpModule, HttpClientModule, HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { ViewVideoPage } from '@app/feature_modules/app-themes/youtube/pages/view-video/view-video.page';
import { OrderinfoPage } from '@app/feature_modules/woocommerce/pages/orderinfo/orderinfo.page';

import { environment } from '@env/environment';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
import { IonicComponentModule } from './feature_modules/ionic-components/ionic-component.module';
import { LayoutComponentsModule } from './feature_modules/layout-components/layout-components.module';
import { PaymentGatewaysModule } from './feature_modules/payment-gateways/payment-gateways.module';
import { WordpressModuleModule } from './feature_modules/wordpress/wordpress-module.module';
import { WoocommerceModule } from './feature_modules/woocommerce/woocommerce-module.module';
import { PhaserModule } from './feature_modules/phaser-game/phaser-module.module';
import { AdvancedFeatureModule } from './feature_modules/advance-features/advanced-feature.module';
import { FirebaseModule } from './feature_modules/firebase-module/firebase-module.module';
import { PluginsModule } from './feature_modules/plugins/plugins-module.module';
import { ThemeModuleModule } from './feature_modules/app-themes/theme-module.module';
import { VersionCheckModule } from './feature_modules/version-check/version-check-module.module';


export const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json');

@NgModule({
    declarations: [AppComponent, ViewVideoPage, OrderinfoPage],
    imports: [
        // Modular Component Module
        IonicComponentModule,
        LayoutComponentsModule,
        PaymentGatewaysModule,
        WordpressModuleModule,
        WoocommerceModule,
        PhaserModule,
        AdvancedFeatureModule,
        FirebaseModule,
        PluginsModule,
        ThemeModuleModule,
        VersionCheckModule,
        BrowserModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NativeHttpModule,
        IonicModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            },
        }),
        AngularFireModule.initializeApp(environment.config),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        IonicStorageModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        ApplePay,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: SETTINGS, useValue: {} },
        { provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend] }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

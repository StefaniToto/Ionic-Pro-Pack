/**
 * Capacitor Full App - Ionic Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit } from '@angular/core';
import { AdmobUtilService } from '../../services/util.service';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {
  AdMob,
  AdMobError,
  AdLoadInfo,
  AdMobRewardItem,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
  BannerAdPluginEvents,
  RewardAdPluginEvents,
  InterstitialAdPluginEvents,
  AdMobBannerSize
} from '@capacitor-community/admob';

@Component({
  selector: 'app-admob',
  templateUrl: './admob.page.html',
  styleUrls: ['./admob.page.scss'],
})
export class AdMobPage implements OnInit {
  private bannerAd: any = null;
  constructor(public alertController: AlertController,
    private util: AdmobUtilService,
    private platform: Platform) {
  }
  ngOnInit() {

  }

  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: 'Ad dismissed',
      subHeader: data.adType,
      message: 'You dismissed the ' + data.adType + ' ad from ' + data.adNetwork,
      buttons: ['OK']
    });

    await alert.present();
  }

  ionViewDidEnter() {
    AdMob.initialize({
      initializeForTesting: true
    });
    // AdMob.onAdDismiss()
    //   .subscribe((data) => {
    //     console.log('User dismissed ad', data);
    //     this.presentAlert(data);
    //   });
  }

  banner() {
    if (this.bannerAd) {
      AdMob.resumeBanner();
      this.util.presentToast('Banner ad resumed','top',1500);
    }
    else{
      AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
        // Subscribe Banner Event Listener
        console.log('Banner ad loaded');
        this.util.presentToast('Banner ad loaded','top',1500);
      });

      AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size: AdMobBannerSize) => {
        // Subscribe Change Banner Size
        console.log('Banner ad size changed', size);
        this.util.presentToast('Banner ad  size changed','top',1500);
      });

      AdMob.addListener(BannerAdPluginEvents.FailedToLoad, (info: AdMobError) => {
        // Subscribe Change Banner Size
        console.log('Banner ad failed to load -', info);
        this.util.presentToast('Banner ad failed to load','top',1500);
      });

      AdMob.addListener(BannerAdPluginEvents.Opened, () => {
        // Subscribe Change Banner Size
        console.log('Banner ad opened');
        this.util.presentToast('Banner ad opened','top',1500);
      });

      AdMob.addListener(BannerAdPluginEvents.Closed, () => {
        // Subscribe Change Banner Size
        console.log('Banner ad closed');
        this.util.presentToast('Banner ad closed','top',1500);
      });

      AdMob.addListener(BannerAdPluginEvents.AdImpression, () => {
        // Subscribe Change Banner Size
        console.log('Banner ad clicked');
        this.util.presentToast('Banner ad clicked','top',1500);
      });


      const options: BannerAdOptions = {
        adId: this.platform.is('android') ? this.util.adMobId.android.banner : this.util.adMobId.ios.banner,
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: true,
        npa: true
      };
      this.bannerAd = AdMob.showBanner(options);
    }
  }

  hideBanner() {
    AdMob.hideBanner();
    this.util.presentToast('Banner ad hid','top',1500);
  }
  removeBanner() {
    AdMob.removeBanner();
    this.bannerAd = null;
    this.util.presentToast('Banner ad removed','top',1500);
  }

  interstitial() {
    AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      console.log('Interstitial ad loaded', info);
      this.util.presentToast('Interstitial ad loaded','bottom',1500);
    });

    AdMob.addListener(InterstitialAdPluginEvents.FailedToShow, (error: AdMobError) => {
      console.log('Interstitial ad failed to show -', error);
      this.util.presentToast('Interstitial ad failed to show','bottom',1500);
    });

    AdMob.addListener(InterstitialAdPluginEvents.FailedToLoad, (info: AdMobError) => {
      console.log('Interstitial ad failed to load -', info);
      this.util.presentToast('Interstitial ad failed to load','bottom',1500);
    });

    AdMob.addListener(InterstitialAdPluginEvents.Showed, () => {
      console.log('Interstitial ad showed');
      this.util.presentToast('Interstitial ad showed','bottom',1500);
    });

    AdMob.addListener(InterstitialAdPluginEvents.Dismissed, () => {
      console.log('Interstitial ad dismissed');
      this.util.presentToast('Interstitial ad dismissed','bottom',1500);
    });


    AdMob.prepareInterstitial({
      adId: this.platform.is('android') ? this.util.adMobId.android.interstitial : this.util.adMobId.ios.interstitial,
      isTesting: true // remove in production
    })
      .then(() => {
        AdMob.showInterstitial();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  reward() {
    AdMob.addListener(RewardAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      console.log('Reward ad loaded', info);
      this.util.presentToast('Reward ad loaded','bottom',1500);
    });

    AdMob.addListener(RewardAdPluginEvents.FailedToShow, (error: AdMobError) => {
      console.log('Reward ad failed to show -', error);
      this.util.presentToast('Reward ad failed to show','bottom',1500);
    });

    AdMob.addListener(RewardAdPluginEvents.FailedToLoad, (info: AdMobError) => {
      console.log('Reward ad failed to load -', info);
      this.util.presentToast('Reward ad failed to load','bottom',1500);
    });

    AdMob.addListener(RewardAdPluginEvents.Showed, () => {
      console.log('Reward ad showed');
      this.util.presentToast('Reward ad showed','bottom',1500);
    });

    AdMob.addListener(RewardAdPluginEvents.Dismissed, () => {
      console.log('Reward ad dismissed');
      this.util.presentToast('Reward ad dismissed','bottom',1500);
    });

    AdMob.addListener(RewardAdPluginEvents.Rewarded, (reward: AdMobRewardItem) => {
      console.log('Reward ad rewarded -', reward);
      this.util.presentToast('Reward ad rewarded','bottom',1500);
    });


    AdMob.prepareRewardVideoAd({
      adId: this.platform.is('android') ? this.util.adMobId.android.reward : this.util.adMobId.ios.reward,
      isTesting: true // remove in production
    })
      .then(() => {
        AdMob.showRewardVideoAd();
      })
      .catch((err) => {
        console.log(err);
      });
  }


}

# Ionic 6 Angular Capacitor Full App 3.0.0

Apart from this README, you can find detailed documentation of the app and features at [Ionic 6 Angular Capacitor Full App](https://app.gitbook.com/@enappd/s/capacitor-full-app-ionic-angular/)

This app is made with Ionic and Angular Frameworks. Capacitor is used for building the app to browser or Android/iOS devices. A variety of layouts, functionalities are available in this app starter.

THIS APP USES NO CORDOVA PLUGIN. THIS IS AN UPGRADE FROM PREVIOUS VERSIONS. 

For Android builds, you'll need latest Android Studio.
For iOS builds, you'll need an Apple system with (latest) Xcode. 

### Tech Stack
* Capacitor - ^3.0
* Angular - ^12
* Ionic - ^6.0
* Node - ^14.x
* TypeScript - ^4.2
* Firebase - ^7.24

## Using this project

Although the app does not use Cordova, you might need cordova installed prior to this for generating resources.

You'll need Ionic installed globally

```
    $ npm install -g ionic
```

## Installation of this project

* Extract the zip file you received after purchase. The app is best used on Node 14.x+

* Install npm dependencies

```
    $ npm install
```
* Run the app on browser

```
    $ ionic serve
```
## Setup

### Changing app name
Since the app comes with a default name 'NgCapFullApp', you can chnage name in `capacitor.config.json` and/or `capacitor.config.ts`

**Note** - If you change `app Id` in `capacitor.config.json` and/or `capacitor.config.ts`, you will have to make corresponding changes in Android and iOS folders. It is easy to remove the platform folders and build again as per Section - **Adding Platforms**. Although this might require a little setup to make sure all plugins work fine, so it is RECOMMENDED to remove the platform folders only if you know how to setup the plugins later by yourself.

## Adding Platforms
**Note** - This starter comes with pre-built platforms which work nicely for all plugins. It is NOT RECOMMENDED to remove these platforms, unless you know how to setup the plugins in new platforms (which is not very difficult).

### Android 
```
$ npx cap add android
```
### iOS 
```
$ npx cap add ios
```
These commands will add the platform, and install all required plugins in each platform. 
## Building App


### Browser

You can run the app in browser for development purpose simply with

```
$ ionic serve
```

The page will reload if you make edits.

You will also see any lint errors in the console.

To build the app in production mode for browser

```
$ ionic build --prod
```

It correctly bundles the code in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed on web!


### Android

* After each change, you need to run `ionic build` and `npx cap copy` so the changes are copied into Android platform.
* If you installed a new plugin, the changes will reflect in Android platform only if you run `npx cap sync`
* Sometimes you will need to run `npx cap update` to refresh plugins in the platform.

Open Android IDE using

```
$ npx cap open android
```

After that, build your app on device or simulator using Android Studio, OR, you can build the app on the device/simulator using
```
$ npx cap run android
```

**Note**: You should have your android studio version more then 3 to run this app

### iOS

* After each change, you need to run `ionic build` and `npx cap copy` so the changes are copied into Android platform.
* If you installed a new plugin, the changes will reflect in Android platform only if you run `npx cap sync`
* Sometimes you will need to run `npx cap update` to refresh plugins in the platform.

Open Xcode IDE using

```
$ npx cap open ios
```

After that, build your app on device or simulator using Xcode, OR, you can build the app on the device/simulator using
```
$ npx cap run ios
```

## Icons and Splash

First, install cordova-res:

```
$ npm install -g cordova-res
```
`cordova-res` expects a Cordova-like structure: place one icon and one splash screen file in a top-level resources folder within your project, like so:

resources/
└── icon.png
└── splash.png
Next, run the following to generate all images then copy them into the native projects:

```
$ cordova-res ios --skip-config --copy
```
``` 
$ cordova-res android --skip-config --copy
```

Visit our blog for detailed instructions on how to create icon and Splash for your Ionic Capacitor app [Custom icon and splash in Ionic Capacitor apps](https://enappd.com/blog/icon-splash-in-ionic-react-capacitor-apps/114/)

# Setup Firebase in App

The project uses a demo Firebase config. You will have to replace the config. with your configuration. You can get this configuration from Firebase. Check our blog [How to Connect Firebase with Ionic](https://enappd.com/blog/connect-firebase-with-ionic-5-app/134/) for more details.

```

apiKey= AIzaSyDctGeAZjwxxxxxxxxxxxx
authDomain=ionic-app.firebaseapp.com
databaseURL=https://ionic-app.firebaseio.com
projectId=ionic-app
storageBucket=ionic-app.appspot.com
messagingSenderId= 694030xxxxxx

```

To get details on how to get `config`details and implement other Firebase functionalities, read our blogs on [Enappd Firebase Blogs]([https://enappd.com/blogcategory/5/](https://enappd.com/blogcategory/5/))


## Plugins List
This starter uses only Capacitor plugins. No Cordova plugins are used. 

```
   "@capacitor-community/admob": "^3.1.0",
    "@capacitor-community/barcode-scanner": "^2.0.1",
    "@capacitor-community/facebook-login": "^3.0.0",
    "@capacitor-community/http": "^1.1.0",
    "@capacitor-community/stripe": "^3.0.0",
    "@capacitor-community/text-to-speech": "^1.1.1",
    "@capacitor-community/twitter": "^1.0.1",
    "@capacitor/app": "1.0.2",
    "@capacitor/browser": "^1.0.2",
    "@capacitor/camera": "^1.0.3",
    "@capacitor/clipboard": "^1.0.2",
    "@capacitor/device": "^1.0.2",
    "@capacitor/geolocation": "^1.0.2",
    "@capacitor/local-notifications": "^1.0.3",
    "@capacitor/push-notifications": "^1.0.3",
    "@capacitor/screen-reader": "^1.0.2",
    "@capacitor/share": "^1.0.3",
    "@capacitor/splash-screen": "^1.0.2",
    "@capacitor/status-bar": "^1.0.2",
    "@codetrix-studio/capacitor-google-auth": "^3.0.2",
```

# Plugin Specific Setup

Capacitor build the apps into a native code where plugins specific values need to be added manually.

## 0. google-services.json
Replace this json / plist file with your own file downloaded from Firebase for Android / iOS respectively.

## 1. AdMob
Replace `appId` and `ad-ids` in `environment.ts`  and environment.prod.ts -> property `ADMOB`.

Detailed information about this plugin can be found at the [plugin page](https://github.com/capacitor-community/admob)
#### Android configuration

In file `android/app/src/main/AndroidManifest.xml`, add the following XML elements under <manifest><application> :
```
<meta-data
 android:name="com.google.android.gms.ads.APPLICATION_ID"
 android:value="@string/admob_app_id"/>
 ```
In file `android/app/src/main/res/values/strings.xml` add the following lines :
```
<string name="admob_app_id">[APP_ID]</string>
```
Don't forget to replace [APP_ID] by your AdMob application Id.

#### iOS configuration
Add the following in the `ios/App/App/info.plist` file inside of the outermost <dict>:
```
<key>GADIsAdManagerApp</key>
<true/>
<key>GADApplicationIdentifier</key>
<string>[APP_ID]</string>
<key>SKAdNetworkItems</key>
<array>
  <dict>
    <key>SKAdNetworkIdentifier</key>
    <string>cstr6suwn9.skadnetwork</string>
  </dict>
</array>
<key>NSUserTrackingUsageDescription</key>
<string>[Why you use NSUserTracking. ex: This identifier will be used to deliver personalized ads to you.]</string>
```
Don't forget to replace [APP_ID] by your AdMob application Id.

## 2. Maps

For all Map related plugins and functionalities, you should use your own Google Maps API Key.

Replace `YOUR_MAP_API_KEY` with your own Maps api key
- Replace in `environment.ts` and `environment.prod.ts`

## 3. Facebook Login

Detailed information about this plugin can be found at the [plugin page](https://github.com/capacitor-community/facebook-login)
#### Android configuration

In file `android/app/src/main/AndroidManifest.xml`, add the following XML elements under `<manifest><application>` :
```
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```
In file `android/app/src/main/res/values/strings.xml` add the following lines :
```
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```
Don't forget to replace [APP_ID] and [CLIENT_TOKEN] by your Facebook application Id.

More information can be found here: https://developers.facebook.com/docs/android/getting-started

If you have trouble.
Please restart Android Studio, and do clean build.

#### iOS configuration
In file `ios/App/App/AppDelegate.swift` add or replace the following:
```
import UIKit
import Capacitor
import FBSDKCoreKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        FBSDKCoreKit.ApplicationDelegate.shared.application(
            application,
            didFinishLaunchingWithOptions: launchOptions
        )

        return true
    }

    ...

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        // Called when the app was launched with a url. Feel free to add additional processing here,
        // but if you want the App API to support tracking app url opens, make sure to keep this call
        if (FBSDKCoreKit.ApplicationDelegate.shared.application(
            app,
            open: url,
            sourceApplication: options[UIApplication.OpenURLOptionsKey.sourceApplication] as? String,
            annotation: options[UIApplication.OpenURLOptionsKey.annotation]
        )) {
            return true;
        } else {
            return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
        }
    }
}
```
Add the following in the `ios/App/App/info.plist` file inside of the outermost <dict>:
```
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>fb[APP_ID]</string>
        </array>
    </dict>
</array>
<key>FacebookAppID</key>
<string>[APP_ID]</string>
<key>FacebookClientToken</key>
<string>[CLIENT_TOKEN]</string>
<key>FacebookDisplayName</key>
<string>[APP_NAME]</string>
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>fbapi</string>
    <string>fbapi20130214</string>
    <string>fbapi20130410</string>
    <string>fbapi20130702</string>
    <string>fbapi20131010</string>
    <string>fbapi20131219</string>
    <string>fbapi20140410</string>
    <string>fbapi20140116</string>
    <string>fbapi20150313</string>
    <string>fbapi20150629</string>
    <string>fbapi20160328</string>
    <string>fbauth</string>
    <string>fb-messenger-share-api</string>
    <string>fbauth2</string>
    <string>fbshareextension</string>
</array>
```

## 4. Twitter login

Replace the `consumerKey` and `consumerSecret` in `Capacitor.config.json` and `Capacitor.config.ts` with your own values.
Read more about Twitter login in Ionic Capacitor in [this blog](https://enappd.com/blog/twitter-login-in-ionic-react-capacitor-app/121) and [official plugin](https://github.com/capacitor-community/twitter)

## 5. WooCommerce & Wordpress

In `src/app/services/woo-commerce.service.ts` Replace 
- `https://woo.enappd.com` with your own woocommerce store address
- `YOUR_WOOCOMMERCE_KEY` with your own woocommerce consumer key
- `YOUR_WOOCOMMERCE_SECRET` with your own woocommerce consumer secret

More details on Woo-commerce integration with Ionic in [this blog](https://enappd.com/blog/ionic-4-and-angular-woocommerce-tutorial/74)

In `src/app/services/wordpress.service.ts` Replace 
- `https://woo.enappd.com` with your own woocommerce store address

More details on Wordpress integration with Ionic in [this blog](https://enappd.com/blog/wordpress-integration-with-ionic-4-app/71)

## 6. Stripe Payment
Replace `STRIPE_PK` and `STRIPE_SK` with your own publishable and secret key from your Stripe account. More details on getting the keys, check the `Stripe Developer` section of [this blog](https://enappd.com/blog/integrate-stripe-payment-gateway-in-ionic-5-apps-and-pwa-using-firebase/158/)

You will also need to place the payment function in your own server. The payment function sample is given in `feature_modules/payment-gateways/stripe-module/index.js` (for Firebase | node.js). You can write these functions in any language and on any server, just the response should match what the app expects. 

Read more about 
* Stripe Charge functions [here](https://stripe.com/docs/api/charges/create)
* Create a customer [here](https://stripe.com/docs/api/customers/create)
* Ephemeral keys [here](https://stripe.dev/stripe-android/com/stripe/android/EphemeralKey.html)
* Payment intents [here](https://stripe.com/docs/payments/payment-intents)

## 7. PayPal Payment
PayPal payments is handled by
- PayPal JS script in web
- Braintree JS script in mobile (Can also do in web)

You will need to have sandbox account credentials to test PayPal in web. Replace these credentials in place of `paypal_sandbox_user` and `paypal_sandbox_pswd` in `environment.ts` and `environment.prod.ts`.
Similarly, you will need a Braintree account to create API keys, and create server functions. These functions will only work from server. 

Read more about 
- PayPal web integration in Ionic [here](https://enappd.com/blog/paypal-integration-in-ionic-apps-and-pwa/142)
- PayPal mobile implementation using Braintree in Ionic [here](https://enappd.com/blog/paypal-payment-integration-using-braintree-in-ionic-5-apps/177/)

# General Troubleshooting

* ERROR in Android Studio

Caused by: org.gradle.api.resources.MissingResourceException: Could not read script 'ION-FULL-CPTR-FB/android/capacitor-cordova-android-plugins/cordova.variables.gradle' as it does not exist.

Solution :
Ionic capacitor update

* Error while running Capacitor update

[!] `GoogleAppMeasurement` requires CocoaPods version `>= 1.10.2`, which is not satisfied by your current version, `1.10.1`.

Solution :
sudo gem install cocoapods

* Twitter plugin error in Android Studio

import com.getcapacitor.Config;
// comment this line when highlighted in android studio

* iOS 'Cannot find module Capacitor' OR Cocoapods install issue

(This link)[https://github.com/ionic-team/capacitor/issues/3897#issuecomment-738274204]

* Cannot find symbol in capacitor/Twitter plugin

Related to `import com.getcapacitor.Config;`

Comment out `import com.getcapacitor.Config;` in `/node_modules/@capacitor-community/twitter/android/src/main/java/com/getcapacitor/community/twitter/TwitterPlugin.java`

* In iOS builds through Xcode, if you get an error similar to

```
The minimum iOS deployment target is 10.0, but Capacitor requires minimum 11.0
```

You will have to change the iOS deployment target of the affected Pod using Xcode. Preferably every Pod should have similar deployment target. In the above case, say, 11.0

You can make this change by clicking on `Pods` folder in left sidemenu, then selecting `target` from dropdown. For each target, go to `Build Setting` -> search `Deployment Target` and set the minimum to 11.0

Repeat this for each affected Pod in the dropdown

* Sometimes, when you build in iOS, you get this error

```
Undefined symbol: _OBJC_CLASS_$_FBSDKAccessToken
Undefined symbol: _OBJC_CLASS_$_FBSDKLoginManager
```

Make sure you have Facebook App ID mentioned in the `info.plist` as mentioned in the `Facebook Login` section above.

If the above checks, just clean your build folder using Xcode, and build again.

* In the Content Loader page (1), if you see a black box instead of the loader in iOS, just go to `public/index.html` and remove

`<base href="/" />`. This should resolve the issue


package com.douglasfreitas.reactnativestart;

import androidx.multidex.MultiDexApplication;

import com.facebook.react.ReactApplication;
import com.dynatrace.plugin.DynatraceReactPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.brentvatne.react.ReactVideoPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.microsoft.codepush.react.CodePush;
import com.airbnb.android.react.maps.MapsPackage;
import org.reactnative.camera.RNCameraPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

// optional packages - add/remove as appropriate
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.config.RNFirebaseRemoteConfigPackage;
import io.invertase.firebase.instanceid.RNFirebaseInstanceIdPackage;
//import io.invertase.firebase.links.RNFirebaseLinksPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
//import io.invertase.firebase.perf.RNFirebasePerformancePackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends MultiDexApplication implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected String getJSBundleFile(){
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
            new DynatraceReactPackage(),
            new RNDeviceInfo(),
            new ReactVideoPackage(),
            new NetInfoPackage(),
            new RNCWebViewPackage(),
            new RNFetchBlobPackage(),
            new RNI18nPackage(),
            new AsyncStoragePackage(),
            new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG),
            new MapsPackage(),
            new RNCameraPackage(),
        new ReactNativeConfigPackage(),
        new RNGestureHandlerPackage(),
        new RNFirebasePackage(),
        // add/remove these packages as appropriate
        //new RNFirebaseAdMobPackage(),
        new RNFirebaseAnalyticsPackage(),
        //new RNFirebaseAuthPackage(),
        new RNFirebaseRemoteConfigPackage(),
        //new RNFirebaseCrashlyticsPackage(),
        //new RNFirebaseDatabasePackage(),
        //new RNFirebaseFirestorePackage(),
        //new RNFirebaseFunctionsPackage(),
        new RNFirebaseInstanceIdPackage(),
        //new RNFirebaseLinksPackage(),
        new RNFirebaseMessagingPackage()
        //new RNFirebaseNotificationsPackage(),
        //new RNFirebasePerformancePackage()
        //new RNFirebaseStoragePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}

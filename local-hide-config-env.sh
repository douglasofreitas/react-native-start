#!/usr/bin/env bash
source .env
APPCENTER_SOURCE_DIRECTORY=$(dirname $0)

#Config Firebase Android config files
cp /dev/null $APPCENTER_SOURCE_DIRECTORY/android/app/google-services.json

#Config Firebase iOS config files
cp /dev/null $APPCENTER_SOURCE_DIRECTORY/ios/GoogleService-Info.plist

#Config Google Maps API
GOOGLE_CONFIG_IOS_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/ReactNativeStart/AppDelegate.m
sed -i '' -e "s/$GOOGLE_MAPS_KEY/__GOOGLE_MAPS_KEY__/" $GOOGLE_CONFIG_IOS_FILE
echo '---------------- GOOGLE MAPS API - iOS'
echo "Google Maps API: File content: $GOOGLE_CONFIG_IOS_FILE"
#cat $GOOGLE_CONFIG_IOS_FILE
echo '----------------'

GOOGLE_CONFIG_ANDROID_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/src/main/AndroidManifest.xml
sed -i '' -e "s/$GOOGLE_MAPS_KEY/__GOOGLE_MAPS_KEY__/" $GOOGLE_CONFIG_ANDROID_FILE 
echo '---------------- GOOGLE MAPS API - Android'
echo "Google Maps API: File content: $GOOGLE_CONFIG_ANDROID_FILE"
#cat $GOOGLE_CONFIG_ANDROID_FILE
echo '----------------'

#Config Codepush 
CODEPUSH_IOS_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/ReactNativeStart/Info.plist
sed -i '' -e "s/$CODEPUSH_KEY/__CODEPUSH_KEY__/" $CODEPUSH_IOS_FILE 
echo "Codepush Key: File content: $CODEPUSH_IOS_FILE"
#cat $CODEPUSH_IOS_FILE
echo '----------------'

CODEPUSH_ANDROID_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/src/main/res/values/strings.xml
sed -i '' -e "s/$CODEPUSH_KEY/__CODEPUSH_KEY__/" $CODEPUSH_ANDROID_FILE 
echo "Codepush Key: File content: $CODEPUSH_ANDROID_FILE"
#cat $CODEPUSH_ANDROID_FILE
echo '----------------'

#Config Dynatrace
DYNATRACE_IOS_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/ReactNativeStart/Info.plist
sed -i '' -e "s/$DYNATRACE_APP_ID/__DYNATRACE_APP_ID__/" $DYNATRACE_IOS_FILE 
sed -i '' -e "s,$DYNATRACE_IOS_ENVIRONMENT,__DYNATRACE_IOS_ENVIRONMENT__,g" $DYNATRACE_IOS_FILE 
sed -i '' -e "s,$DYNATRACE_IOS_CLUSTER_URL,__DYNATRACE_IOS_CLUSTER_URL__,g" $DYNATRACE_IOS_FILE 
echo "DYNATRACE Key: File content: $DYNATRACE_IOS_FILE"
#cat $DYNATRACE_IOS_FILE
echo '----------------'

DYNATRACE_ANDROID_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/build.gradle
sed -i '' -e "s/$DYNATRACE_APP_ID/__DYNATRACE_APP_ID__/" $DYNATRACE_ANDROID_FILE 
sed -i '' -e "s,$DYNATRACE_ANDROID_BEACON_URL,__DYNATRACE_ANDROID_BEACON_URL__,g" $DYNATRACE_ANDROID_FILE 
echo "DYNATRACE Key: File content: $DYNATRACE_ANDROID_FILE"
#cat $DYNATRACE_ANDROID_FILE
echo '----------------'

DYNATRACE_PLUGIN_FILE=$APPCENTER_SOURCE_DIRECTORY/dynatrace.config
sed -i '' -e "s/$DYNATRACE_APP_ID/__DYNATRACE_APP_ID__/g" $DYNATRACE_PLUGIN_FILE 
sed -i '' -e "s,$DYNATRACE_ANDROID_BEACON_URL,__DYNATRACE_ANDROID_BEACON_URL__,g" $DYNATRACE_PLUGIN_FILE 
sed -i '' -e "s,$DYNATRACE_IOS_ENVIRONMENT,__DYNATRACE_IOS_ENVIRONMENT__,g" $DYNATRACE_PLUGIN_FILE 
sed -i '' -e "s,$DYNATRACE_IOS_CLUSTER_URL,__DYNATRACE_IOS_CLUSTER_URL__,g" $DYNATRACE_PLUGIN_FILE 
echo "DYNATRACE Config: File content: $DYNATRACE_PLUGIN_FILE"
#cat $DYNATRACE_PLUGIN_FILE
echo '----------------'

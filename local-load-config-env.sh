#!/usr/bin/env bash
source .env
ROOT_FOLDER=$(dirname $0)
PROJECT_NAME="ReactNativeStart"

#Config Firebase Android config files
cp $ROOT_FOLDER/../DATA/$ENV/google-services.json $ROOT_FOLDER/android/app/google-services.json

#Config Firebase iOS config files
cp $ROOT_FOLDER/../DATA/$ENV/GoogleService-Info.plist $ROOT_FOLDER/ios/GoogleService-Info.plist

#Config Dynatrace config file
cp $ROOT_FOLDER/config/dynatrace.config $ROOT_FOLDER/dynatrace.config

#Config Google Maps API
GOOGLE_CONFIG_IOS_FILE=$ROOT_FOLDER/ios/$PROJECT_NAME/AppDelegate.m
sed -i '' -e "s/__GOOGLE_MAPS_KEY__/$GOOGLE_MAPS_KEY/" $GOOGLE_CONFIG_IOS_FILE
echo '---------------- GOOGLE MAPS API - iOS'
echo "Google Maps API: File content: $GOOGLE_CONFIG_IOS_FILE"
#cat $GOOGLE_CONFIG_IOS_FILE
echo '----------------'

GOOGLE_CONFIG_ANDROID_FILE=$ROOT_FOLDER/android/app/src/main/AndroidManifest.xml
sed -i '' -e "s/__GOOGLE_MAPS_KEY__/$GOOGLE_MAPS_KEY/" $GOOGLE_CONFIG_ANDROID_FILE 
echo '---------------- GOOGLE MAPS API - Android'
echo "Google Maps API: File content: $GOOGLE_CONFIG_ANDROID_FILE"
#cat $GOOGLE_CONFIG_ANDROID_FILE
echo '----------------'

#Config Codepush 
CODEPUSH_IOS_FILE=$ROOT_FOLDER/ios/$PROJECT_NAME/Info.plist
sed -i '' -e "s/__CODEPUSH_KEY__/$CODEPUSH_KEY/" $CODEPUSH_IOS_FILE 
echo "Codepush Key: File content: $CODEPUSH_IOS_FILE"
#cat $CODEPUSH_IOS_FILE
echo '----------------'

CODEPUSH_ANDROID_FILE=$ROOT_FOLDER/android/app/src/main/res/values/strings.xml
sed -i '' -e "s/__CODEPUSH_KEY__/$CODEPUSH_KEY/" $CODEPUSH_ANDROID_FILE 
echo "Codepush Key: File content: $CODEPUSH_ANDROID_FILE"
#cat $CODEPUSH_ANDROID_FILE
echo '----------------'

#Config Dynatrace
DYNATRACE_IOS_FILE=$ROOT_FOLDER/ios/$PROJECT_NAME/Info.plist
sed -i '' -e "s/__DYNATRACE_APP_ID__/$DYNATRACE_APP_ID/" $DYNATRACE_IOS_FILE 
sed -i '' -e "s,__DYNATRACE_IOS_ENVIRONMENT__,$DYNATRACE_IOS_ENVIRONMENT,g" $DYNATRACE_IOS_FILE 
sed -i '' -e "s,__DYNATRACE_IOS_CLUSTER_URL__,$DYNATRACE_IOS_CLUSTER_URL,g" $DYNATRACE_IOS_FILE 
echo "DYNATRACE Key: File content: $DYNATRACE_IOS_FILE"
#cat $DYNATRACE_IOS_FILE
echo '----------------'

DYNATRACE_ANDROID_FILE=$ROOT_FOLDER/android/app/build.gradle
sed -i '' -e "s/__DYNATRACE_APP_ID__/$DYNATRACE_APP_ID/" $DYNATRACE_ANDROID_FILE 
sed -i '' -e "s,__DYNATRACE_ANDROID_BEACON_URL__,$DYNATRACE_ANDROID_BEACON_URL,g" $DYNATRACE_ANDROID_FILE 
echo "DYNATRACE Key: File content: $DYNATRACE_ANDROID_FILE"
#cat $DYNATRACE_ANDROID_FILE
echo '----------------'

DYNATRACE_PLUGIN_FILE=$ROOT_FOLDER/dynatrace.config
sed -i '' -e "s/__DYNATRACE_APP_ID__/$DYNATRACE_APP_ID/g" $DYNATRACE_PLUGIN_FILE 
sed -i '' -e "s,__DYNATRACE_ANDROID_BEACON_URL__,$DYNATRACE_ANDROID_BEACON_URL,g" $DYNATRACE_PLUGIN_FILE 
sed -i '' -e "s,__DYNATRACE_IOS_ENVIRONMENT__,$DYNATRACE_IOS_ENVIRONMENT,g" $DYNATRACE_PLUGIN_FILE 
sed -i '' -e "s,__DYNATRACE_IOS_CLUSTER_URL__,$DYNATRACE_IOS_CLUSTER_URL,g" $DYNATRACE_PLUGIN_FILE 
echo "DYNATRACE Config: File content: $DYNATRACE_PLUGIN_FILE"
#cat $DYNATRACE_PLUGIN_FILE
echo '----------------'

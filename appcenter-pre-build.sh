#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-dotenv
ENV_WHITELIST=${ENV_WHITELIST:-"^RN_"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env
printf "\n.env created with contents:\n\n"
cat .env

#Config Android config files
GOOGLE_CONFIG_ANDROID_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/google-services.json
if [ -e "$GOOGLE_CONFIG_ANDROID_FILE" ]
then
    echo "Updating Google Json"
    echo $GOOGLE_CONFIG_ANDROID | base64 --decode > $GOOGLE_CONFIG_ANDROID_FILE
    sed -i -e 's/\\"/'\"'/g' $GOOGLE_CONFIG_ANDROID_FILE

    echo "File content: $GOOGLE_CONFIG_ANDROID_FILE"
    cat $GOOGLE_CONFIG_ANDROID_FILE
fi

#Config iOS config files
GOOGLE_CONFIG_IOS_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/GoogleService-Info.plist
if [ -e "$GOOGLE_CONFIG_IOS_FILE" ]
then
    echo "Updating Google Json"
    echo $GOOGLE_CONFIG_IOS | base64 --decode > $GOOGLE_CONFIG_IOS_FILE
    sed -i -e 's/\\"/'\"'/g' $GOOGLE_CONFIG_IOS_FILE

    echo "File content: $GOOGLE_CONFIG_IOS_FILE"
    cat $GOOGLE_CONFIG_IOS_FILE
fi

#Config Google Maps API
GOOGLE_CONFIG_IOS_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/ReactNativeStart/AppDelegate.m
sed 's/__GOOGLE_MAPS_KEY__/"$GOOGLE_MAPS_KEY"/' $GOOGLE_CONFIG_IOS_FILE > $GOOGLE_CONFIG_IOS_FILE
echo '---------------- GOOGLE MAPS API - iOS'
echo "File content: $GOOGLE_CONFIG_IOS_FILE"
cat $GOOGLE_CONFIG_IOS_FILE
echo '----------------'

GOOGLE_CONFIG_ANDROID_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/src/main/AndroidManifest.xml
sed 's/__GOOGLE_MAPS_KEY__/"$GOOGLE_MAPS_KEY"/' $GOOGLE_CONFIG_ANDROID_FILE > $GOOGLE_CONFIG_ANDROID_FILE
echo '---------------- GOOGLE MAPS API - Android'
echo "File content: $GOOGLE_CONFIG_ANDROID_FILE"
cat $GOOGLE_CONFIG_ANDROID_FILE
echo '----------------'

#run Jetijy to convert libs to AndroidX. OBS: RN 0.60 run automaticaly on build
node node_modules/jetifier/bin/jetify
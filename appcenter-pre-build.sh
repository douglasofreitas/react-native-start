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
    echo "$GOOGLE_CONFIG_ANDROID" > $GOOGLE_CONFIG_ANDROID_FILE
    sed -i -e 's/\\"/'\"'/g' $GOOGLE_CONFIG_ANDROID_FILE

    echo "File content:"
    cat $GOOGLE_CONFIG_ANDROID_FILE
fi

#Config Android config files
GOOGLE_CONFIG_IOS_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/GoogleService-Info.plist
if [ -e "$GOOGLE_CONFIG_IOS_FILE" ]
then
    echo "Updating Google Json"
    echo "$GOOGLE_CONFIG_IOS" > $GOOGLE_CONFIG_IOS_FILE
    sed -i -e 's/\\"/'\"'/g' $GOOGLE_CONFIG_IOS_FILE

    echo "File content:"
    cat $GOOGLE_CONFIG_IOS_FILE
fi

# React Native Start 

[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/a5db3937935a42b0941411f9750152ca)](https://www.codacy.com/manual/douglasofreitas/react-native-start_2?utm_source=github.com&utm_medium=referral&utm_content=natura-cosmeticos/react-native-start&utm_campaign=Badge_Coverage)
[![Build status](https://build.appcenter.ms/v0.1/apps/fa1d2c09-f10c-4f58-9733-e231fa9a8218/branches/dev/badge)](https://appcenter.ms)
[![Build status](https://build.appcenter.ms/v0.1/apps/187dde4d-1402-48ee-947f-686ae36c4c85/branches/dev/badge)](https://appcenter.ms)

Boilerplate of react-native app with usefull libraries.

Project with:

React: "16.8.3"
React Native: "0.59.9"

To use demo version, use the API above to test login (Auth):
https://github.com/douglasofreitas/node-jwt-authentication-api

Use:
* Hooks

Libraries: 
* react-navigation
* react-native-async-storage
* react-native-config
* react-native-firebase
* react-native-code-push
* react-native-i18n
* react-native-cached-images
* react-native-camera
* react-native-webview
* react-native-maps
* react-native-elements
* axios
* prop-types
* jest-enzyme
* eslint
* test (jest)
* codacy-coverage

Pending samples:
* upload files progress
* get current position (navigation.geolocation)

Native Libraries:
* Dynatrace

## Prepare Enviroment Variables

App Center build de .env file using script "appcenter-pre-build.sh"
The ".env.sample" file is a sample of .env generate by APP Center and is used to run local.

Create the folder "DATA" next to the project folder:

```
 - react-native-start (project folder)
 - DATA
    _ certificates
        - ios
            - .p12 and .mobileprovision certificates 
        - android
            - .keystore file
    - dev (ENV: environment folder)
        - google-services.json
        - GoogleService-Info.plist
    - master 
        ...
```

After prepare DATA folder, run code to prepare the project

```
./local-load-config-env.sh
```

Before commit your changes, run code below to reset configurations

```
./local-hide-config-env.sh
```

## Run app

Follow the steps to run APP.
Create the files on [Firebase console](https://console.firebase.google.com):

* android/app/google-services.json
* ios/GoogleService-Info.plist.local

Create Google Maps Key in [GCP](https://console.cloud.google.com) and replace at:
* android/app/src/main/res/values/strings.xml (reactNativeCodePush_androidDeploymentKey)
* ios/ReactNativeStart/AppDelegate.m (GMSServices provideAPIKey)

```
//ANDROID
yarn install
react-native link
npx jetify 
npm run android

//IOS
yarn install
react-native link
cd ios && pod install
npm run ios

```

## BUILD with AppCenter

To use [AppCenter](https://appcenter.ms), there are configuration:

* Pre-build (appcenter-pre-build.sh)

To use the script, create the environment variables as:
* RN_<VAR_NAME>: create .env file with variables with RN_ at the beginning of the name
* GOOGLE_CONFIG_ANDROID = base64 of google-services.json
* GOOGLE_CONFIG_IOS = base64 of GoogleService-Info.plist
* GOOGLE_MAPS_KEY = Google Maps Key from GCP
* CODEPUSH_KEY = Key of Appcenter Codepush
* CODACY_PROJECT_TOKEN = Key of Codacy to sync test
* DYNATRACE_APP_ID = Daynatrace Application ID
* DYNATRACE_BEACON_URL= Dynatrace Beacon URL

Example of environment in AppCenter backoffice
RN_<VAR_NAME>=value

Example of final .ENV file:
<VAR_NAME>=value

## Run tests

```
npm run test
npm run coverage
npm run coverage:codacy //to send report to Codacy
```
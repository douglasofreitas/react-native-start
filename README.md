# React Native Start 

Boilerplate of react-native app with usefull libraries.

Project with:

React: "16.8.3"
React Native: "0.59.10"

To use demo version, use the API above to test login (Auth):
https://github.com/douglasofreitas/node-jwt-authentication-api

Use:
* Hooks

Libraries: 
* react-navigation
* react-native-async-storage
* react-native-elements
* react-native-config
* react-native-firebase
* react-native-i18n
* axios
* prop-types
* jest-enzyme
* eslint

Pending resourses:
* upload files progress
* get current position (navigation.geolocation)
* view videos


## Prepare Enviroment Variables

App Center build de .env file using script "appcenter-pre-build.sh"
The ".env.sample" file is a sample of .env generate by APP Center and is used to run local.

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

Example of environment in AppCenter backoffice
RN_<VAR_NAME>=value

Example of final .ENV file:
<VAR_NAME>=value

## Run tests

```
npm run test
npm run coverage
```
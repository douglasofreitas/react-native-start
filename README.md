# React Native Start 

Simple react-native app with usefull libraries.

Project with:

React: "16.8.3"
React Native: "0.59.10"

Features:
* Contexts
* Components
* APIs

Libraries: 
* react-navigation
* react-native-async-storage
* react-native-elements
* react-native-config
* react-native-firebase
* axios
* jest-enzyme


## Prepare Enviroment Variables

App Center build de .env file using script "appcenter-pre-build.sh"
The ".env.sample" file is a sample of .env generate by APP Center and is used to run local.

## Run app

```
yarn install
react-native link
cd ios && pod install

#run
npm run ios
npm run android
```

## Run tests

```
npm run test
npm run coverage
```
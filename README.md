# React Native Boilerplate

This repository is a default boilerplate for React Natuve Aplications with Redux, Redux Thunk, Redux Persist, React Router Flux, Axios, and other main dependencies.

To follow this instructions, you must have the RN environment setted up.

The first thing that you need to do is create an empty RN project. So run this command in your terminal:

```
react-native init <project-name>
```

Then, in some other folder, you need to download this project files:

```bash
git clone https://github.com/lucascraveiropaes/react-native-boilerplate.git
```

After this, u must copy all the files and paste them into your RN project, overwriting any other files.

When the copy is done, you need to download all dependencies for your project, so you must run this commands in your root folder:

```bash
npm install --save @react-native-community/netinfo@4.1.5
npm install --save axios@0.19.0
npm install --save js-sha512@0.8.0
npm install --save react-native-animatable@1.3.2
npm install --save react-native-flash-message@0.1.13
npm install --save react-native-gesture-handler@1.3.0
npm install --save react-native-router-flux@4.0.6
npm install --save react-native-vector-icons@6.6.0
npm install --save react-navigation@3.11.1
npm install --save react-navigation-stack@1.4.0
npm install --save react-redux@7.1.0
npm install --save redux@4.0.1
npm install --save redux-persist@5.10.0
npm install --save redux-thunk@2.3.0
npm install --save-dev jetifier
```

And after all dependencies have been downloaded, you must link all the native dependencies:

```bash
react-native link react-native-gesture-handler
react-native link react-native-vector-icons
```
------------------------

## Commands

If you're using windows, you cand add this code to your ```package.json``` for command atails in your project.

Replace this:

```json
"scripts": {
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
}
```

With this:

```json
"scripts": {
    "install-app": "cls && adb reverse tcp:8081 tcp:8081 && react-native run-android",
    "start": "cls && adb reverse tcp:8081 tcp:8081 && react-native start",
    "build": "cls && cd android/ && gradlew.bat assembleRelease",
    "postinstall": "npx jetify",
    "test": "jest",
    "lint": "eslint ."
}
```

* ```npm run install-app```: This command installs the application in your phone or emulator for the first time.
* ```npm run start```: This command starts the Node Server for your application, and points it directly to your phone (if you're using USB Debugging)
* ```npm run build```: This command creates a realease build for your app. But, before that, you must follow the instructions on [RN Official Page](https://facebook.github.io/react-native/docs/signed-apk-android)

------------------------

## Dependencies

* [Axios](https://github.com/axios/axios/) - A Container for HTTP requests
* [Redux](https://github.com/reduxjs/redux) - A State Container for JS
* [React Redux](https://github.com/reduxjs/react-redux) - Official react bindings for Redux
* [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate the redux store
* [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Redux Middleware for async actions
* [NetInfo](https://github.com/react-native-community/react-native-netinfo) - React Native Network Info API for Android & iOS
* [JS SHA512](https://github.com/emn178/js-sha512) - A simple SHA-512 hash functions for JavaScript (UTF-8 supported).
* [React Native Animatable](https://github.com/oblador/react-native-animatable) - Standard set of easy to use animations and declarative transitions for React Native
* [React Native Flash Message](https://github.com/lucasferreira/react-native-flash-message) - React Native flashbar and top notification alert utility
* [React Native Navigation](https://github.com/react-navigation/react-navigation) - Dependencie used to create transitions between pages
* [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) - The first declarative React Native router
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native

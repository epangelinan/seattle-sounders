# SeattleSounders

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Setup/Installation Requirements

* _Clone the project to your machine desktop_
* _Navigate into the project folder_
* _Run the following commands:_
* _$ npm install_
* _$ bower install_
* _Acquire your own Firebase credentials_
* _Create a new file called api-keys.ts in the src/app directory_
* _Place your Firebase credentials into api-keys.ts, like this (Your file should have your specific Firebase credentials and other information here, instead of xxxx):_
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
* _Run the following command to launch the app in the browser:_
* _$ ng serve_

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

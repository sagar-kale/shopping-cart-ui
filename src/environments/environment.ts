// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  globalUrl: '/api',
  mapbox: {
    accessToken:
      'pk.eyJ1Ijoic2FnYXIta2FsZSIsImEiOiJjazhhaDlvcDMwMjhlM3BxcGFzZnNheWg4In0.I6VzMs4Fr5PxcIsnsf-xVQ'
  },
  firebaseConfig: {
    apiKey: 'AIzaSyBCVhzKU2-soM57UJ289GS1DOZc-PZVGQc',
    authDomain: 'sagar-angular-web-app.firebaseapp.com',
    databaseURL: 'https://sagar-angular-web-app.firebaseio.com',
    projectId: 'sagar-angular-web-app',
    storageBucket: 'sagar-angular-web-app.appspot.com',
    messagingSenderId: '1025301033194',
    appId: '1:1025301033194:web:0a38f884366af05b252793',
    measurementId: 'G-Z58YR673H3'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

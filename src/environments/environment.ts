// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken:
      'pk.eyJ1Ijoic2FnYXIta2FsZSIsImEiOiJjazhhaDlvcDMwMjhlM3BxcGFzZnNheWg4In0.I6VzMs4Fr5PxcIsnsf-xVQ'
  },
  apiUrl: 'https://dada3c82.ngrok.io',
  firebaseConfig: {
    apiKey: 'AIzaSyDWEVGe4Wqj73QBm9kSwKWi-Fyo4DH9_6Q',
    authDomain: 'sagar-kale.firebaseapp.com',
    databaseURL: 'https://sagar-kale.firebaseio.com',
    projectId: 'sagar-kale',
    storageBucket: 'sagar-kale.appspot.com',
    messagingSenderId: '697914539719',
    appId: '1:697914539719:web:1d38c7ee13a57c47b548e2'
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

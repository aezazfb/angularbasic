// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 // API_URL: 'http://192.168.1.193:6600/api/v1.0/',
  //API_URL: 'https://192.168.1.129/api/v1.0/',
  //API_URL: 'https://192.168.1.188/api/v1.0/',
  // API_URL: 'http://apibeta.cmbsolutionsinc.com/demo/api/v1.0/',
 //  API_URL: 'https://serv.cmbsolutionsinc.com/PatientPortalWebAPIBeta/api/v1.0/',
  API_URL: 'http://localhost:53867/patientlink/api/v1.0/',
 // API_URL: 'https://serv.cmbsolutionsinc.com/patientportalapi/api/v1.0/',
//   API_URL: "https://bigmintlamp70.conveyor.cloud/patientlink/api/v1.0/",
  ZipCode_API_URL: 'https://api.opencagedata.com/geocode/v1/json',
  API_KEY: '12345@',
  ZipCode_API_KEY: '95c9de117eea446cba4d9c6a1029fce3',
  TokenRenewalTime: 15
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

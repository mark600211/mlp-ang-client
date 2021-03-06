// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // baseURL: "http://192.168.1.6:3000/api/",
  // API_URI: "http://localhost:3010/nestapi/",
  // GQL_URI: "http://192.168.1.6:2000/graphql",
  // GQL_URI_SUB: "http://192.168.1.6:3060/graphql",
  // WS_URI_FILES: "ws://192.168.1.6:3060/graphql",
  // ENVOI: "http://192.168.1.6:8080",
  baseURL: "http://0.0.0.0:3000/api/",
  API_URI: "http://172.17.0.1:3333/nestapi",
  GQL_URI: "http://0.0.0.0:2000/graphql",
  GQL_URI_SUB: "http://0.0.0.0:3060/graphql",
  WS_URI_FILES: "ws://0.0.0.0:3060/graphql",
  ENVOI: "http://0.0.0.0:2050",

  ACTS_GQL: "http://0.0.0.0:3020/graphql",
  CONSUMERS_GQL: "http://0.0.0.0:3030/graphql",
  OPTIONS_GQL: "http://0.0.0.0:3090/graphql",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

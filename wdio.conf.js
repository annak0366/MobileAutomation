// exports.config = {
//     user: process.env.BROWSERSTACK_USERNAME || 'anna_rFw9Wf',
//     key: process.env.BROWSERSTACK_ACCESS_KEY || 'R7svfN1pu97ZCSXfaTEw',
  
//     updateJob: false,
//     specs: [
//       './test/specs/*.js',
//     ],
//     exclude: [],
  
//     capabilities: [{
//       project: "First Webdriverio Android Project",
//       build: 'Webdriverio Android',
//       name: 'first_test',
//       device: 'Google Pixel 3',
//       os_version: "9.0",
//       'browserstack.app_url': 'bs://1a8d8e5a52223246a97f1f580e64b4a3ca3541da',
//       app: 'bs://1a8d8e5a52223246a97f1f580e64b4a3ca3541da',
//       'browserstack.debug': true,
//       showDeviceScreen: true
      
//     }],

//     require: ['ts-node/register'],
    
  
//     logLevel: 'info',
//     coloredLogs: true,
//     screenshotPath: './errorShots/',
//     baseUrl: '',
//     waitforTimeout: 10000,
//     connectionRetryTimeout: 90000,
//     connectionRetryCount: 3,
  
//     framework: 'mocha',
//     mochaOpts: {
//       ui: 'bdd',
//       timeout: 20000
//     }
//   };
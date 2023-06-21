const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {

  baseUrl: "https://us4.leverx.local:44302/sap/bc/ui2/flp",
  waitForUI5Timeout: 90000,
    
  specs: [
    [
       
    "./specs/01_createNewPO.spec.js",
    "./specs/02_checListReport.spec.js",

    ],
  ],

  params: {
    import: {
        data: "./data/",
        purchaseOrderID: "./data/references.json"
    },
    export: {
        purchaseOrderID: "./data/references.json"
    }
  },
  
  framework: "mocha",
  mochaOpts: {
    timeout: 120000,
    bail: true
  },

  maxInstances: 3,

  services: [[QmateService],['chromedriver']],

  capabilities: [{
    browserName: "chrome",
    acceptInsecureCerts: true,
        'goog: chromeOptions':{
           args: [ 
              "--output=/dev/null",
              "--log-lenel=3",
              "--no-sandbox",
              "--incognito",
              "--ignore-certificate-errors",
              "--window-size=1920,1200",
              "--whitelisted-ips",
              "--disable-dev-shm-usage",
              // "--headless",
              "--disable-gpu",
              "--disable-web-security",
              "--disable-infobars",
              "--disable-extensions",
              "--disable-logging",
              "--lang=en-US"

           ]

        }
  }],
    // ...
};
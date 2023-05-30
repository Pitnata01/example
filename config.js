const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {

  baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/suite/ui/generic/template/demokit/sample.manage.products.sepmra/test/index.html",
    
  specs: [
       
    "./specs/01_viewSupplier.spec.js",
   
  ],

  maxInstances: 2,

  services: [[QmateService]],
    // ...
};
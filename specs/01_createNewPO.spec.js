require('dotenv').config();

describe("Create a new Purchase Order", function () {

    it("Step 01: Open the system and navigate to the Purchase Order app", async function () {
      await ui5.navigation.navigateToApplication("PurchaseOrder-manage")
    });
  
    it("Step 02: App login", async function () {
      await ui5.session.login(process.env.USER, process.env.PASSWORD);
      
    });
  
    it("Step 03: Click Create on the List report page", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
          "metadata": "sap.m.Button",
          "id": "*addEntry"
        }   
      };
      await ui5.userInteraction.click(selector);
      //await util.browser.sleep(60000);
    });

    it("Step 04: Select Purchase Order Type - Standard Z-PO (ZNB)", async function () {
        const selector = {
          "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.ComboBox",
            "id": "*PurchaseOrderType::Field-comboBoxEdit"
          }   
        };
        actualValue = "Standard Z-PO (ZNB)"
        await ui5.userInteraction.selectComboBox(selector, "Germany");
  
//     // ...
  
   });
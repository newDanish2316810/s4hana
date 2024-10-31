sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("apptest.controller.View1", {
		
		
	onInit: function() {
            var that = this;
            var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZENPLOYEE_SRV/", {
    useBatch: false
});
            // var oModel = that.getOwnerComponent().getModel("MAIN"){
            // 	useBatch: fa   
            // };
            
            // var entity = "/C_CustomerOP";
            oModel.read("/et_employeeSet", {
            	
                success: function(oData, response) {
                    if (response.statusCode === 200) {
                        var model = new sap.ui.model.json.JSONModel(oData);
                        that.getView().setModel(model, "danModel2");
                    }
                },
                error: function(error) {
                    // Show error details from the response
                    var errorMessage = error.responseText || "An unknown error occurred";
                    MessageBox.error(errorMessage, {
                        title: "Error"
                    });
                }
            });
        }
   


	});
});
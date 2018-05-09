sap.ui.define([
	"com/employerreportaccident/controller/BaseController",
	'sap/ui/model/json/JSONModel'
], function(BaseController,JSONModel) {
	"use strict";

	return BaseController.extend("com.employerreportaccident.controller.Dashboard", {
		onInit: function () {
			// set explored app's demo model on this sample
			var oTableModel = new JSONModel(jQuery.sap.getModulePath("com.employerreportaccident.jsonData", "/EarningsOfEmployee.json"));
			oTableModel.setDefaultBindingMode("TwoWay");
			//var oTableModel = this.models.createModel(jQuery.sap.getModulePath("com.employerreportaccident.jsonData", "/EarningsOfEmployee.json"));
			this.getView().setModel(oTableModel);
		}
	});
});
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createModel:function(data){
			var oModel = new JSONModel();
			oModel.setSizeLimit(9999);
			oModel.setData(data);
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		}

	};
});
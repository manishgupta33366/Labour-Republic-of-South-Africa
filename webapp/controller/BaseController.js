sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History",
		"com/employerreportaccident/utils/formatter",
		"sap/m/MessageToast",
		"sap/m/MessageBox",
		"com/employerreportaccident/model/models"
	], function (Controller, History,Formatter,MessageToast,MessageBox,models) {
		"use strict";

		return Controller.extend("com.employerreportaccident.controller.BaseController", {
			formatter : Formatter,
			MessageToast:MessageToast,
			MessageBox:MessageBox,
			models:models,
			getRouter : function () {
				return this.getOwnerComponent().getRouter();
			},

			getModel : function (sName) {
				return this.getView().getModel(sName);
			},

			setModel : function (oModel, sName) {
				return this.getView().setModel(oModel, sName);
			},
			setModelComponent:function(oModel, sName){
					return this.getOwnerComponent().setModel(oModel, sName);
			},
			getModelComponent:function(sName){
					return this.getOwnerComponent().getModel(sName);
			},
			getResourceBundle : function () {
				return this.getOwnerComponent().getModel("i18n").getResourceBundle();
			},
			getHistory:function(){
				return History.getInstance();
			},
				onNavBack : function() {
				var sPreviousHash = History.getInstance().getPreviousHash();
					if (sPreviousHash !== undefined) {
					history.go(-1);
				} else {
					this.getRouter().navTo("", {}, true);
				}
			},
			_bindingDataModel:function(data,name){
			
				var cModel = this.getModel(name);
				if(cModel){
					cModel.setData(data);
				}
				else{
				cModel = this.models.createModel(data);
				this.setModel(cModel,name);
				this.getView().bindElement(name+">/");
				}
			}
			
		});
		
	});
sap.ui.define([
	"com/employerreportaccident/controller/BaseController",
	'sap/ui/model/json/JSONModel'
], function(BaseController, JSONModel) {
	"use strict";
	return BaseController.extend("com.employerreportaccident.controller.Dashboard", {
		onInit: function() {
			this._backendCall("/destination/services/PDFBuilder/values/Doc1", "GET", "", "");
			//this._backendCall("/destination/services/PDFBuilder/DefaultValues","GET","","");
			// set explored app's demo model on this sample
			var oTableModel = new JSONModel(jQuery.sap.getModulePath("com.employerreportaccident.jsonData", "/EarningsOfEmployee.json"));
			oTableModel.setDefaultBindingMode("TwoWay");
			this.getView().setModel(oTableModel, "tablesData");
		},
		_defaultValues: {},
		_backendCall: function(url, type, input, paramters) {
			var self = this;
			//var oBundle = this.getResourceBundle();
			$.ajax({
				url: url,
				contentType: "application/json",
				type: type,
				data: JSON.stringify(input),
				success: function(data) {
					if (type === "GET") {
						self._defaultValues = data;
						var defaultValuesModel = new sap.ui.model.json.JSONModel(JSON.parse(data));
						defaultValuesModel.setDefaultBindingMode("TwoWay");
						self.getView().setModel(defaultValuesModel, "employerReportAccidentModel");
						self.getView().bindElement("employerReportAccidentModel>/");
					} else if (type === "POST") {
						//postSucess
					}
				}
			});
		},
		onSelectChangeInjuredRadioButtonGroup: function(oEvent) {
			var modelData = this.getView().getModel("employerReportAccidentModel").getData();
			modelData[12].value = oEvent.getSource().getButtons()[oEvent.getParameter("selectedIndex")].getText();
			this.getView().getModel("employerReportAccidentModel").setData(modelData);
		},
		_updateModel: function(objectNumber, value) {
			var modelData = this.getView().getModel("employerReportAccidentModel").getData();
			modelData[objectNumber].value = value;
			this.getView().getModel("employerReportAccidentModel").setData(modelData);
		},
		onSelectionChangeSegmentedButton: function(oEvent) {
			if (oEvent.getSource().getId().indexOf("segmentedButtonSexID") !== -1) {
				this._updateModel(17, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonMartialStateID") !== -1) {
				this._updateModel(18, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonExpectedPeriodID") !== -1) {
				this._updateModel(28, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonAccidentWithTradeID") !== -1) {
				this._updateModel(37, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonMarkApplicable1ID") !== -1) {
				this._updateModel(40.1, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonTraficAccidentID") !== -1) {
				this._updateModel(39, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonSatisfiedID") !== -1) {
				this._updateModel(41, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonFurtherCompensationID") !== -1) {
				this._updateModel(44, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonShiftCompleteID") !== -1) {
				this._updateModel(50, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonFirstAidGIvenID") !== -1) {
				this._updateModel(55, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonActionWhileDrugsUnderInfluenceID") !== -1) {
				this._updateModel(58.3, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonActionNonComplianceWithDirectionsID") !== -1) {
				this._updateModel(58.1, oEvent.getParameters().item.getProperty("text"));
			} else if (oEvent.getSource().getId().indexOf("segmentedButtonRecklessDisregardID") !== -1) {
				this._updateModel(58.2, oEvent.getParameters().item.getProperty("text"));
			}
		},
		handleChangeDateTimePicker: function(oEvent) {
			if (oEvent.getSource().getId().indexOf("dateTimePickerAccident") !== -1) {
				var dateTimeArray = oEvent.getParameter("newValue").split("-");
				var date = new Date(dateTimeArray[0], dateTimeArray[1], dateTimeArray[2], dateTimeArray[3], dateTimeArray[4], dateTimeArray[5]).toISOString();
				dateTimeArray = date.split("T");
				this._updateModel(29, dateTimeArray[0]);
				this._updateModel(30, dateTimeArray[1]);
			}

		},
		onTableInputBoxChange: function(oEvent) {
			this._updateModel(oEvent.getSource().getBindingContext("tablesData").getProperty().R_Month_ID, oEvent.getSource().getBindingContext(
				"tablesData").getProperty().R_Month);
			this._updateModel(oEvent.getSource().getBindingContext("tablesData").getProperty().R_Week_ID, oEvent.getSource().getBindingContext(
				"tablesData").getProperty().R_Week);
		},
		onCheckBoxSelected: function(oEvent) {
			this._updateModel(oEvent.getSource().getBindingContext("tablesData").getProperty().ID, oEvent.getParameter("selected"));
		},
		onPressSubmit: function() {
			var _that = this;
			var dialog = new sap.m.Dialog({
				title: 'Confirm',
				type: 'Message',
				content: new sap.m.Text({
					text: 'Are you sure you want to Submit this form?'
				}),
				beginButton: new sap.m.Button({
					text: 'Yes',
					press: function() {
						var dataTosSend = _that.getView().getModel("employerReportAccidentModel").getData();
						_that._backendCall("/destination/services/PDFBuilder/values/Doc1", "POST", dataTosSend, "");
						dialog.close();
					}
				}),
				endButton: new sap.m.Button({
					text: 'No',
					press: function() {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();
		},
		onPressReset: function() {
			var _that = this;
			var dialog = new sap.m.Dialog({
				title: 'Confirm',
				type: 'Message',
				content: new sap.m.Text({
					text: 'Are you sure you want to Reset this form?'
				}),
				beginButton: new sap.m.Button({
					text: 'Yes',
					press: function() {
						var tableData = jQuery.sap.getModulePath("com.employerreportaccident.jsonData", "/EarningsOfEmployee.json");
						_that.getView().getModel("tablesData").loadData(tableData);
						_that.getView().getModel("employerReportAccidentModel").setData(JSON.parse(_that._defaultValues));
						//_that.getView().bindElement("employerReportAccidentModel>/");
						sap.m.MessageToast.show('Form reset sucessfull!');
						dialog.close();
					}
				}),
				endButton: new sap.m.Button({
					text: 'No',
					press: function() {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();

		}
	});
});
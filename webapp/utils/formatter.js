sap.ui.define([],
	function() {
		"use strict";
		return {
			ExpectedPeriodSegmentedButtonSelectedKey: function(value) {
				var tag = {
					"0-13 days": "SegmentButton0-13Days",
					"14 & more": "satisfiedSegmentButton14OrMore"
				};
				return tag[value];
			},
			injuredRadioButtonGroupSelectIndex: function(value) {
				var tag = {
					"working director": 0,
					"working member of a CC": 1,
					"owner of": 2,
					"partner in the business?": 3,
					"Not applicable": 4
				};
				return tag[value];
			},
			SexSegmentedButtonSelectedKey: function(value) {
				var tag = {
					"Male": "SegmentButtonMale",
					"Female": "SegmentButtonFeMale"
				};
				return tag[value];
				//return ((tag[value]===null) || (tag[value]===undefined) || (tag[value]==="")  ? -1 : tag[value]);
			},
			MartialStateSegmentedButtonSelectedKey: function(value) {
				var tag = {
					"Married": "SegmentButtonMarried",
					"Single": "SegmentButtonSingle"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeyAccidentWithTrade: function(value) {
				var tag = {
					"Yes": "accidentWithTradeSegmentButtonYes",
					"No": "accidentWithTradeSegmentButtonNo"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeyInjuryNature: function(value) {
				var tag = {
					"Killed": "SegmentButtonKilled",
					"Amputation": "SegmentButtonAmputation",
					"Unconsciousness": "SegmentButtonUnconsciousness"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeyTraficAccident: function(value) {
				var tag = {
					"Yes": "traficAccidentSegmentButtonYes",
					"No": "traficAccidentSegmentButtonNo"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeySatisfied: function(value) {
				var tag = {
					"Yes": "satisfiedSegmentButtonYes",
					"No": "satisfiedSegmentButtonNo"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeyFurtherCompensation: function(value) {
				var tag = {
					"Yes": "furtherCompensationSegmentButtonYes",
					"No": "furtherCompensationSegmentButtonNo"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeyShiftComplete: function(value) {
				var tag = {
					"Yes": "ShiftCompleteSegmentButtonYes",
					"No": "ShiftCompleteSegmentButtonNo"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeyFirstAidGIven: function(value) {
				var tag = {
					"Yes": "FirstAidGIvenSegmentButtonYes",
					"No": "FirstAidGIvenSegmentButtonNo"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeyActionWhileDrugs: function(value) {
				var tag = {
					"Yes": "ActionWhileDrugsUnderInfluenceSegmentButtonYes",
					"No": "ActionWhileDrugsUnderInfluenceSegmentButtonNo"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeynonCompliance: function(value) {
				var tag = {
					"Yes": "nonComplianceWithDirectionsSegmentButtonYes",
					"No": "nonComplianceWithDirectionsSegmentButtonNo"
				};
				return tag[value];
			},
			SegmentedButtonSelectedKeyrecklessDisregard: function(value) {
				var tag = {
					"Yes": "recklessDisregardSegmentButtonYes",
					"No": "recklessDisregardSegmentButtonNo"
				};
				return tag[value];
			}
		};

	});
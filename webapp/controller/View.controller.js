sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("soap.soap.controller.View", {
			onInit: function () {

            },

            resSucccess : function(data, status, req) {
                debugger;
            },

            resError : function(data, status, req) {
                debugger;
            },

            onSubmit : function(oEvent) {

                var iNum1 = this.getView().byId("num1").getValue();
                var iNum2 = this.getView().byId("num2").getValue();
                //var sUrl = "https://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=AddInteger&Arg1="+ iNum1 + "&Arg2=" + iNum1;
                var sUrl = "/soap/csp/samples/SOAP.Demo.cls?soap_method=AddInteger&Arg1="+ iNum1 + "&Arg2=" + iNum1;

                $.ajax({
                    type: "GET",
                    url: sUrl,
                    content: "text/xml",
                    dataType: "xml",
                    success: this.resSucccess,
                    error: this.resError
                });
            }
		});
	});

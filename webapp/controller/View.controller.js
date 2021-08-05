sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("soap.soap.controller.View", {
            onInit: function () {

            },

            resSucccess: function (data, status, req) {
                var responseTotal = "";

                var dataXML = req.responseText;
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(dataXML, "text/xml");
                responseTotal = xmlDoc.getElementsByTagName("AddIntegerResult")[0].childNodes[0].nodeValue;

            //    MessageBox.show(responseTotal);
                MessageToast.show(`The sum of the two number is: ${responseTotal}`);
            },

            resError: function (data, status, req) {
                MessageToast.show("Error. Please contact the Administrator");
            },

            onSubmit: function (oEvent) {

                var iNum1 = this.getView().byId("num1").getValue();
                var iNum2 = this.getView().byId("num2").getValue();
                //var sUrl = "https://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=AddInteger&Arg1="+ iNum1 + "&Arg2=" + iNum2;
                var sUrl = "ws/csp/samples/SOAP.Demo.cls?soap_method=AddInteger&Arg1=" + iNum1 + "&Arg2=" + iNum2;
                //var sUrl = this.getOwnerComponent().getManifestObject().resolveUri( "ws/csp/samples/SOAP.Demo.cls?soap_method=AddInteger&Arg1="+ iNum1 + "&Arg2=" + iNum2 );


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

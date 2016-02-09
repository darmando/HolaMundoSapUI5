// sap.ui.controller("apps.App", {
//     onInit : function () {

// 	},
// 	eventoPress : function () {
// 		var txtNombre;
// 		txtNombre = sap.ui.getCore("txtNombre");
// 		if (txtNombre.getValue()!=''){
// 			MessageToast.show("Hola: "+txtNombre.getValue());			
// 		}else{
// 			MessageToast.show("Hello World");			
// 		}
// 	}
// });

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("apps.App", {
		onInit : function () {
            MessageToast.show("www.desarrollohidrocalido.com");
		},
		eventoPress : function () {
			var txtNombre;
			txtNombre = sap.ui.getCore().byId("txtNombre");
			if (txtNombre.getValue()!=''){
				MessageToast.show("Hola: "+txtNombre.getValue());
				txtNombre.setValue("");			
			}else{
				MessageToast.show("Debe Ingresar Un Nombre");			
			}
		}	
	});

});
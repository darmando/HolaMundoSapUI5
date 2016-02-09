sap.ui.jsview("apps.App", {
	getControllerName: function() {
		return "apps.App";
	},
	createContent: function(oController) {
		var currentView,footer,miFooter,miPagina,miCajaTexto,miApp;
		currentView=this;
        footer = [
            oButton = new sap.m.Button("idBtnHolaMundo", {
	            type: "Emphasized",
	            text: "Presioname :)",
	            press: [oController.eventoPress, oController]
             })
          ];

        miFooter = new sap.m.Bar("idMiBar");
        miFooter.addContentMiddle(footer[0]);
		miPagina = new sap.m.Page("idMiPagina", {
            title: "Ejemplo Hola Mundo - Desarrollo Hidrocálido",
            showNavButton: false,
            showHeader: true,
            showFooter: true
        });
       miCajaTexto = new sap.m.Input("txtNombre", {
            type: "Text",
            placeholder: "Escribe tu nombre...",
        });        
        miPagina.setFooter(miFooter);
        miPagina.addContent(miCajaTexto);
     
        miApp = new sap.m.App("idMiApp");
        miApp.addPage(miPagina);

        currentView.destroyContent();
        currentView.addContent(miApp);
    }    
});
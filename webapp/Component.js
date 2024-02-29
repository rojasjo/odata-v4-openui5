sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "odata/openui5/model/models",
], (UIComponent, Device, models) => {
    "use strict";
    return UIComponent.extend("odata.openui5.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // create the views based on the url/hash
            this.getRouter().initialize();
        },
        
        getContentDensityClass() {
			return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
		}
    });
});
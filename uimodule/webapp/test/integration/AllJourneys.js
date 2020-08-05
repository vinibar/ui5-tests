sap.ui.define([
  "sap/ui/test/Opa5",
  "vinibar/testes/test/integration/arrangements/Startup",
  "vinibar/testes/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});

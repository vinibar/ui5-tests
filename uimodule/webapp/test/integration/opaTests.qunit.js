/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "vinibar/testes/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});

sap.ui.define([
  "vinibar/testes/controller/BaseController",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
],
  /**
   * 
   * @param {vinibar.testes.controller.BaseController} Controller
   * @param {sap.ui.model.Filter} Filter
   * @param {sap.ui.model.FilterOperator} FilterOperator
   */
  function (Controller, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("vinibar.testes.controller.Main", {

      onInit: function () {
        this.getView().getModel().attachEventOnce("requestCompleted", this._onFirstLoaded.bind(this));
      },

      /**
       * 
       * @param {sap.ui.base.EventProvider} oEvent 
       */
      onFilterSelect: function (oEvent) {
        const sSelectedTab = oEvent.getParameter("key");
        const oProductListBinding = this._oProductList.getBinding("items");

        const aFilters = [];
        switch (sSelectedTab) {
          case "Ok":
            aFilters.push(new Filter("UnitsInStock", FilterOperator.GT, 0));
          case "NoStock":
            aFilters.push(new Filter("UnitsInStock", FilterOperator.EQ, 0));
        }

        oProductListBinding.filter(aFilters);
      },

      /**
       * 
       * @param {sap.ui.base.EventProvider} oEvent 
       */
      _onFirstLoaded: function (oEvent) {

        this._oProductList = this.byId("idProductsList");

        const oProductListBinding = this._oProductList.getBinding("items");
        const oFilters = new Filter([new Filter("UnitsInStock", FilterOperator.GT, 0)]);
        oProductListBinding.filter(oFilters);
      }
    });
  });

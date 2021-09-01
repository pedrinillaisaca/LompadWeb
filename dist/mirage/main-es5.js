(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "++GG":
    /*!*********************************************!*\
      !*** ./src/app/demo/view/overlaysdemo.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function GG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".product-image {\n  width: 50px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n:host ::ng-deep button {\n  margin-right: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvdmVybGF5c2RlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSx3RUFBQTtBQUNEOztBQUVBO0VBQ0Msb0JBQUE7QUFDRCIsImZpbGUiOiJvdmVybGF5c2RlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWltYWdlIHtcblx0d2lkdGg6IDUwcHg7XG5cdGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKVxufVxuXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uIHtcblx0bWFyZ2luLXJpZ2h0OiAuMjVlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "+BCQ":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/treedemo.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function BCQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"p-grid\">\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h4>Tree</h4>\n\t\t\t<p-tree [value]=\"files1\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles1\"></p-tree>\n\t\t</div>\n\t</div>\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h4>TreeTable</h4>\n\t\t\t<p-treeTable [value]=\"files2\" [columns]=\"cols\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\">\n\t\t\t\t<ng-template pTemplate=\"header\" let-columns>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th *ngFor=\"let col of columns\">\n\t\t\t\t\t\t\t{{col.header}}\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td *ngFor=\"let col of columns; let i = index\">\n\t\t\t\t\t\t\t<p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\n\t\t\t\t\t\t\t<p-treeTableCheckbox [value]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableCheckbox>\n\t\t\t\t\t\t\t{{rowData[col.field]}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t</p-treeTable>\n\t\t</div>\n\t</div>\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h4>Horizontal Tree</h4>\n\t\t\t<p-tree [value]=\"files3\" layout=\"horizontal\" selectionMode=\"single\" [(selection)]=\"selectedFiles3\"></p-tree>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\mirage-ng-11.0.0\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "04hL":
    /*!*************************************************!*\
      !*** ./src/app/demo/service/customerservice.ts ***!
      \*************************************************/

    /*! exports provided: CustomerService */

    /***/
    function hL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
        return CustomerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomerService = /*#__PURE__*/function () {
        function CustomerService(http) {
          _classCallCheck(this, CustomerService);

          this.http = http;
        }

        _createClass(CustomerService, [{
          key: "getCustomersSmall",
          value: function getCustomersSmall() {
            return this.http.get('assets/demo/data/customers-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getCustomersMedium",
          value: function getCustomersMedium() {
            return this.http.get('assets/demo/data/customers-medium.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getCustomersLarge",
          value: function getCustomersLarge() {
            return this.http.get('assets/demo/data/customers-large.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return CustomerService;
      }();

      CustomerService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CustomerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CustomerService);
      /***/
    },

    /***/
    "0FBH":
    /*!********************************************************!*\
      !*** ./src/app/paginas/viewjson/viewjson.component.ts ***!
      \********************************************************/

    /*! exports provided: ViewjsonComponent */

    /***/
    function FBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewjsonComponent", function () {
        return ViewjsonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_viewjson_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./viewjson.component.html */
      "QkCk");
      /* harmony import */


      var _viewjson_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./viewjson.component.css */
      "Qlo/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _servicios_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../servicios/api.service */
      "57S9");

      var ViewjsonComponent = /*#__PURE__*/function () {
        function ViewjsonComponent(apiservice) {
          _classCallCheck(this, ViewjsonComponent);

          this.apiservice = apiservice;
        }

        _createClass(ViewjsonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ViewjsonComponent;
      }();

      ViewjsonComponent.ctorParameters = function () {
        return [{
          type: _servicios_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }];
      };

      ViewjsonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-viewjson',
        template: _raw_loader_viewjson_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_viewjson_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ViewjsonComponent);
      /***/
    },

    /***/
    "1K0L":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/usoeducativo/usoeducativo.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function K0L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div *ngIf=\"ObjOptions.o5_1\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Tipo interactividad\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"tiposActividad\" [(ngModel)]='tiposActividadSelect' name='tiposActividadSelect' (onChange)='cambio_tiposActividad()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o5_2\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Tipo de recurso educativo\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"tiposRecursEducativos\" [(ngModel)]='tiposRecursEducativosSelect' name='tiposRecursEducativosSelect' (onChange)='cambio_tiposRecursEducativos()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"ObjOptions.o5_3\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Nivel de interactividad\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"nivelesInteractividad\" [(ngModel)]='nivelesInteractividadSelect' name='nivelesInteractividadSelect' (onChange)='cambio_nivelesInteractividadSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"ObjOptions.o5_4\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Densidad Semántica\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"densiadesSemanticas\" [(ngModel)]='densiadesSemanticasSelect' name='densiadesSemanticasSelect' (onChange)='cambio_densiadesSemanticasSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"ObjOptions.o5_5\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Destinatario\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"destinatarios\" [(ngModel)]='destinatariosSelect' name='destinatariosSelect' (onChange)='cambio_destinatariosSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"ObjOptions.o5_6\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Contexto\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"contextos\" [(ngModel)]='contextosSelect' name='contextosSelect' (onChange)='cambio_contextosSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o5_7\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Rango típico de edad\" | translate}}</h5>\n        <!-- <div class=\"card\">\n            <div class=\"p-fluid\">\n                <label for=\"rango\">{{\"Rango\" | translate}}</label>\n                <input id=\"rango\" type=\"text\" pInputText>\n            </div>\n        </div> -->\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <input type=\"text\" pInputText [(ngModel)]=\"edad\" readonly/>\n                <p-slider [(ngModel)]=\"edad\"></p-slider>\n            </div>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o5_8\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Dificultad\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"dificultades\" [(ngModel)]='dificultadesSelect' name='dificultadesSelect' (onChange)='cambio_dificultadesSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true \">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n\n    <!-- class=\"card\" -->\n    <div *ngIf=\"ObjOptions.o5_9\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Tiempo tipico de aprendizaje\" | translate}}</h5>\n\n        <div class=\"card\">\n            <div class=\"p-fluid p-formgrid p-grid\">\n                <div class=\"p-field p-col\">\n                    <label for=\"anios\">{{\"Años\" | translate}}</label>\n                    <p-inputNumber id=\"anios\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"100\" [(ngModel)]=\"years\"></p-inputNumber>\n                </div>\n                <div class=\"p-field p-col\">\n                    <label for=\"meses\">{{\"Meses\" | translate}}</label>\n                    <p-inputNumber id=\"meses\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"12\" [(ngModel)]=\"months\"></p-inputNumber>\n                </div>\n\n                <div class=\"p-field p-col\">\n                    <label for=\"dias\">{{\"Días\" | translate}}</label>\n                    <p-inputNumber id=\"dias\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"30\" [(ngModel)]=\"days\"></p-inputNumber>\n                </div>\n\n            </div>\n\n\n            <!-- <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <label for=\"descripcion\">{{\"Descripción\" | translate}}</label>\n                    <textarea id=\"descripcion\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                </div>\n            </div> -->\n\n\n        </div>\n\n    </div>\n\n    <!-- class=\"p-col-12\" -->\n\n    <div *ngIf=\"ObjOptions.o5_10\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Descripción\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid p-formgrid p-grid\">\n                <div class=\"p-field p-col-12 \">\n                    <label for=\"descripcion\">{{\"Descripción\" | translate}}</label>\n                    <textarea id=\"descripcion\" [(ngModel)]='objUsoEdu[\"Description\"]' type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n\n\n</div>";
      /***/
    },

    /***/
    "1L6g":
    /*!******************************************************************!*\
      !*** ./src/app/paginas/accesibilidad/accesibilidad.component.ts ***!
      \******************************************************************/

    /*! exports provided: AccesibilidadComponent */

    /***/
    function L6g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccesibilidadComponent", function () {
        return AccesibilidadComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_accesibilidad_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./accesibilidad.component.html */
      "G4X0");
      /* harmony import */


      var _accesibilidad_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accesibilidad.component.css */
      "buzx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../app.component */
      "Sy1n");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");
      /* harmony import */


      var _modelo_objOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../modelo/objOptions */
      "u28Z");

      var AccesibilidadComponent = /*#__PURE__*/function () {
        function AccesibilidadComponent(componentePrincipal, lompadservice) {
          _classCallCheck(this, AccesibilidadComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.ObjOptions = new _modelo_objOptions__WEBPACK_IMPORTED_MODULE_6__["ObjOptions"]();
        }

        _createClass(AccesibilidadComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            this.objAccess = this.lompadservice.objPricipal['DATA']['accesibility'];
            var accessF = this.objAccess['Accessibility Features']['Resource Content']['br'];
            var accessH = this.objAccess['Accessibility Hazard']['Properties']['br'];
            var accessC = this.objAccess['Accessibility Control']['Methods']['br'];
            var accessA = this.objAccess['Accessibility API']['Compatible Resource']['br'];
            this.mapValues(accessF, this.accessFeatures);
            this.mapValues(accessH, this.accessHazard);
            this.mapValues(accessC, this.accessControl);
            this.mapValues(accessA, this.accessApi);
          }
        }, {
          key: "mapValues",
          value: function mapValues(param, local) {
            param.forEach(function (element) {
              var busqueda = local.find(function (dato) {
                return dato.label == element;
              });

              if (busqueda != undefined) {
                // console.log("MATCH: ",busqueda);
                var palabra = function palabra(element) {
                  return element === busqueda;
                };

                var index = local.findIndex(palabra);
                local[index].value = true;
              }
            });
          }
        }, {
          key: "updateArray",
          value: function updateArray(param) {
            var array = [];
            param.forEach(function (element) {
              if (element.value == true) {
                array.push(element.label);
              }
            });
            return array;
          }
        }, {
          key: "updateValues",
          value: function updateValues() {
            // var accessH_update:any[]=this.updateArray(this.accessApi);
            this.objAccess['Accessibility Features']['Resource Content']['br'] = this.updateArray(this.accessFeatures);
            this.objAccess['Accessibility Hazard']['Properties']['br'] = this.updateArray(this.accessHazard);
            this.objAccess['Accessibility Control']['Methods']['br'] = this.updateArray(this.accessControl);
            this.objAccess['Accessibility API']['Compatible Resource']['br'] = this.updateArray(this.accessApi);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy Accesibilidad: ");
            this.updateValues();
            this.lompadservice.objPricipal['DATA']['accesibility'] = this.objAccess;
            this.lompadservice.saveObjectLompad(this.objAccess, "accesibility");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ObjOptions = this.componentePrincipal.objOptions;
            this.accessFeatures = [{
              label: 'alternativeText',
              value: false,
              code: '1'
            }, {
              label: 'annotations',
              value: false,
              code: '1'
            }, {
              label: 'printPageNumbers',
              value: false,
              code: '1'
            }, {
              label: 'audioDescription',
              value: false,
              code: 'ac'
            }, {
              label: 'bookmarks',
              value: false,
              code: 'ac'
            }, {
              label: 'readingOrder',
              value: false,
              code: 'ac'
            }, {
              label: 'captions',
              value: false,
              code: 'ac'
            }, {
              label: 'braille',
              value: false,
              code: 'ac'
            }, {
              label: 'rubyAnnotations',
              value: false,
              code: 'ac'
            }, {
              label: 'highContrastDisplay',
              value: false,
              code: 'ac'
            }, {
              label: 'chemML',
              value: false,
              code: 'ac'
            }, {
              label: 'tableOfContents',
              value: false,
              code: 'ac'
            }, {
              label: 'jongDescription',
              value: false,
              code: 'ac'
            }, {
              label: 'describeMath',
              value: false,
              code: 'ac'
            }, {
              label: 'taggedPDF ',
              value: false,
              code: 'ac'
            }, {
              label: 'signLanguage',
              value: false,
              code: 'ac'
            }, {
              label: 'index',
              value: false,
              code: 'ac'
            }, {
              label: 'tactileGraphic',
              value: false,
              code: 'ac'
            }, {
              label: 'structuralNavigation',
              value: false,
              code: 'ac'
            }, {
              label: 'largePrint',
              value: false,
              code: 'ac'
            }, {
              label: 'tactileObject',
              value: false,
              code: 'ac'
            }, {
              label: 'synchronizedAudioText',
              value: false,
              code: 'ac'
            }, {
              label: 'latex',
              value: false,
              code: 'ac'
            }, {
              label: 'ttsMarkup',
              value: false,
              code: 'ac'
            }, {
              label: 'timingControl',
              value: false,
              code: 'ac'
            }, {
              label: 'mathML',
              value: false,
              code: 'ac'
            }, {
              label: 'unlocked',
              value: false,
              code: 'ac'
            }, {
              label: 'transcript',
              value: false,
              code: 'ac'
            }, {
              label: 'none',
              value: false,
              code: 'ac'
            }];
            this.accessHazard = [{
              label: 'FlashingHazard',
              value: false,
              code: '1'
            }, {
              label: 'noFlashingHazard',
              value: false,
              code: '1'
            }, {
              label: 'motionSimulationHazard',
              value: false,
              code: '1'
            }, {
              label: 'noMotionSimulationHazard',
              value: false,
              code: '1'
            }, {
              label: 'soundHazard',
              value: false,
              code: '1'
            }, {
              label: 'noSoundHazard',
              value: false,
              code: '1'
            }];
            this.accessControl = [{
              label: 'fullKeyboardControl',
              value: false,
              code: '1'
            }, {
              label: 'fullSwitchControl',
              value: false,
              code: '1'
            }, {
              label: 'fullMouseControl',
              value: false,
              code: '1'
            }, {
              label: 'fullTouchControl',
              value: false,
              code: '1'
            }, {
              label: 'fullVoiceControl',
              value: false,
              code: '1'
            }, {
              label: 'fullVideoControl',
              value: false,
              code: '1'
            }];
            this.accessApi = [{
              label: 'ARIA',
              value: false,
              code: '1'
            }, {
              label: 'androidAccessibility',
              value: false,
              code: '1'
            }, {
              label: 'iosAccessibility',
              value: false,
              code: '1'
            }, {
              label: 'ATK',
              value: false,
              code: '1'
            }, {
              label: 'javaAccessibility',
              value: false,
              code: '1'
            }, {
              label: 'AT-SPI',
              value: false,
              code: '1'
            }, {
              label: 'macOsxAccessibility',
              value: false,
              code: '1'
            }, {
              label: 'blackberryAccessibility',
              value: false,
              code: '1'
            }, {
              label: 'MSAA',
              value: false,
              code: '1'
            }, {
              label: 'iAccessible2',
              value: false,
              code: '1'
            }, {
              label: 'ulAutomation',
              value: false,
              code: '1'
            }];
            this.loadDatos();
          }
        }, {
          key: "changeAccessFeatures",
          value: function changeAccessFeatures(event, param) {
            console.log("parametro : ", event.checked);
          }
        }]);

        return AccesibilidadComponent;
      }();

      AccesibilidadComponent.ctorParameters = function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_5__["LompadService"]
        }];
      };

      AccesibilidadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-accesibilidad',
        template: _raw_loader_accesibilidad_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accesibilidad_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccesibilidadComponent);
      /***/
    },

    /***/
    "1NmO":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/filedemo.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function NmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Advanced</h5>\n            <p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\">\n                <ng-template pTemplate=\"content\">\n                    <ul *ngIf=\"uploadedFiles.length\">\n                        <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n                    </ul>\n                </ng-template>\n            </p-fileUpload>\n\n            <h5>Basic</h5>\n            <p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\n\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "2X1q":
    /*!*******************************************************!*\
      !*** ./src/app/paginas/viewxml/viewxml.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function X1q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3eG1sLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "3Li2":
    /*!***************************************************!*\
      !*** ./src/app/utilities/typography.component.ts ***!
      \***************************************************/

    /*! exports provided: TypographyComponent */

    /***/
    function Li2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyComponent", function () {
        return TypographyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./typography.component.html */
      "m++p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var TypographyComponent = function TypographyComponent(breadcrumbService) {
        _classCallCheck(this, TypographyComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'Typography',
          routerLink: ['/utilities/typography']
        }]);
      };

      TypographyComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TypographyComponent);
      /***/
    },

    /***/
    "3aQ+":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.crud.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function aQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n\n        <p-toast></p-toast>\n\n        <div class=\"card\">\n            <p-toolbar styleClass=\"p-mb-4\">\n                <ng-template pTemplate=\"left\">\n                    <button pButton pRipple label=\"New\" icon=\"pi pi-plus\" class=\"p-button-success p-mr-2 p-mb-2\" (click)=\"openNew()\"></button>\n                    <button pButton pRipple label=\"Delete\" icon=\"pi pi-trash\" class=\"p-button-danger p-mb-2\" (click)=\"deleteSelectedProducts()\" [disabled]=\"!selectedProducts || !selectedProducts.length\"></button>\n                </ng-template>\n\n                <ng-template pTemplate=\"right\">\n                    <p-fileUpload mode=\"basic\" accept=\"image/*\" [maxFileSize]=\"1000000\" label=\"Import\" chooseLabel=\"Import\" class=\"p-mr-2 p-mb-2 p-d-inline-block\"></p-fileUpload>\n                    <button pButton pRipple label=\"Export\" icon=\"pi pi-upload\" class=\"p-button-help p-mb-2\" (click)=\"dt.exportCSV()\"></button>\n                </ng-template>\n            </p-toolbar>\n\n            <p-table #dt [value]=\"products\" [columns]=\"cols\" [rows]=\"10\" [paginator]=\"true\" [globalFilterFields]=\"['name','country.name','representative.name','status']\" [(selection)]=\"selectedProducts\" [rowHover]=\"true\" dataKey=\"id\" styleClass=\"p-datatable-customers\"\n                currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\" [showCurrentPageReport]=\"true\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                        <h5 class=\"p-m-0\">Manage Products</h5>\n                        <span class=\"p-input-icon-left\">\n                        <i class=\"pi pi-search\"></i>\n                        <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" placeholder=\"Search...\" />\n                    </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th style=\"width: 3rem\">\n                            <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                        </th>\n                        <th pSortableColumn=\"name\">Name\n                            <p-sortIcon field=\"name\"></p-sortIcon>\n                        </th>\n                        <th>Image</th>\n                        <th pSortableColumn=\"price\">Price\n                            <p-sortIcon field=\"price\"></p-sortIcon>\n                        </th>\n                        <th pSortableColumn=\"category\">Category\n                            <p-sortIcon field=\"category\"></p-sortIcon>\n                        </th>\n                        <th pSortableColumn=\"rating\">Reviews\n                            <p-sortIcon field=\"rating\"></p-sortIcon>\n                        </th>\n                        <th pSortableColumn=\"inventoryStatus\">Status\n                            <p-sortIcon field=\"inventoryStatus\"></p-sortIcon>\n                        </th>\n                        <th></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-product>\n                    <tr>\n                        <td>\n                            <p-tableCheckbox [value]=\"product\"></p-tableCheckbox>\n                        </td>\n                        <td><span class=\"p-column-title\">Name</span> {{product.name}}\n                        </td>\n                        <td><span class=\"p-column-title\">Image</span>\n                            <img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.name\" width=\"100\" class=\"p-shadow-4\" />\n                        </td>\n                        <td><span class=\"p-column-title\">Price</span> {{product.price | currency:'USD'}}\n                        </td>\n                        <td><span class=\"p-column-title\">Category</span> {{product.category}}\n                        </td>\n                        <td><span class=\"p-column-title\">Reviews</span>\n                            <p-rating [ngModel]=\"product.rating\" [readonly]=\"true\" [cancel]=\"false\"></p-rating>\n                        </td>\n                        <td><span class=\"p-column-title\">Status</span>\n                            <span [class]=\"'product-badge status-' + (product.inventoryStatus ? product.inventoryStatus.toLowerCase() : '')\">{{product.inventoryStatus}}</span>\n                        </td>\n                        <td>\n                            <button pButton pRipple icon=\"pi pi-pencil\" class=\"p-button-rounded p-button-success p-mr-2\" (click)=\"editProduct(product)\"></button>\n                            <button pButton pRipple icon=\"pi pi-trash\" class=\"p-button-rounded p-button-warning\" (click)=\"deleteProduct(product)\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"summary\">\n                    <div class=\"p-d-flex p-ai-center p-jc-between\">\n                        In total there are {{products ? products.length : 0 }} products.\n                    </div>\n                </ng-template>\n            </p-table>\n        </div>\n\n        <p-dialog [(visible)]=\"productDialog\" [style]=\"{width: '450px'}\" header=\"Product Details\" [modal]=\"true\" styleClass=\"p-fluid\">\n            <ng-template pTemplate=\"content\">\n                <img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.image\" class=\"product-image\" *ngIf=\"product.image\">\n                <div class=\"p-field\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"text\" pInputText id=\"name\" [(ngModel)]=\"product.name\" required autofocus />\n                    <small class=\"p-invalid\" *ngIf=\"submitted && !product.name\">Name is required.</small>\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"description\">Description</label>\n                    <textarea id=\"description\" pInputTextarea [(ngModel)]=\"product.description\" required rows=\"3\" cols=\"20\"></textarea>\n                </div>\n\n                <div class=\"p-field\">\n                    <label class=\"p-mb-3\">Category</label>\n                    <div class=\"p-formgrid p-grid\">\n                        <div class=\"p-field-radiobutton p-col-6\">\n                            <p-radioButton id=\"category1\" name=\"category\" value=\"Accessories\" [(ngModel)]=\"product.category\"></p-radioButton>\n                            <label for=\"category1\">Accessories</label>\n                        </div>\n                        <div class=\"p-field-radiobutton p-col-6\">\n                            <p-radioButton id=\"category2\" name=\"category\" value=\"Clothing\" [(ngModel)]=\"product.category\"></p-radioButton>\n                            <label for=\"category2\">Clothing</label>\n                        </div>\n                        <div class=\"p-field-radiobutton p-col-6\">\n                            <p-radioButton id=\"category3\" name=\"category\" value=\"Electronics\" [(ngModel)]=\"product.category\"></p-radioButton>\n                            <label for=\"category3\">Electronics</label>\n                        </div>\n                        <div class=\"p-field-radiobutton p-col-6\">\n                            <p-radioButton id=\"category4\" name=\"category\" value=\"Fitness\" [(ngModel)]=\"product.category\"></p-radioButton>\n                            <label for=\"category4\">Fitness</label>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"p-formgrid p-grid\">\n                    <div class=\"p-field p-col\">\n                        <label for=\"price\">Price</label>\n                        <p-inputNumber id=\"price\" [(ngModel)]=\"product.price\" mode=\"currency\" currency=\"USD\" locale=\"en-US\"></p-inputNumber>\n                    </div>\n                    <div class=\"p-field p-col\">\n                        <label for=\"quantity\">Quantity</label>\n                        <p-inputNumber id=\"quantity\" [(ngModel)]=\"product.quantity\"></p-inputNumber>\n                    </div>\n                </div>\n            </ng-template>\n\n            <ng-template pTemplate=\"footer\">\n                <button pButton pRipple label=\"Cancel\" icon=\"pi pi-times\" class=\"p-button-text\" (click)=\"hideDialog()\"></button>\n                <button pButton pRipple label=\"Save\" icon=\"pi pi-check\" class=\"p-button-text\" (click)=\"saveProduct()\"></button>\n            </ng-template>\n        </p-dialog>\n\n        <p-confirmDialog [style]=\"{width: '450px'}\"></p-confirmDialog>\n    </div>\n</div>";
      /***/
    },

    /***/
    "43f1":
    /*!**********************************************************!*\
      !*** ./src/app/paginas/anotacion/anotacion.component.ts ***!
      \**********************************************************/

    /*! exports provided: AnotacionComponent */

    /***/
    function f1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnotacionComponent", function () {
        return AnotacionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_anotacion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./anotacion.component.html */
      "NdMz");
      /* harmony import */


      var _anotacion_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./anotacion.component.css */
      "joOn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/objOptions */
      "u28Z");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");

      var AnotacionComponent = /*#__PURE__*/function () {
        function AnotacionComponent(componentePrincipal, lompadservice) {
          _classCallCheck(this, AnotacionComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.ObjOptions = new src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"]();
        }

        _createClass(AnotacionComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            this.objAnotacion = this.lompadservice.objPricipal['DATA']['annotation'];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy ciclo de vida");
            this.actualizarVcard(this.objAnotacion["Entity"]);
            this.objAnotacion["Date"] = this.fecha.toISOString();
            this.lompadservice.objPricipal['DATA']['annotation'] = this.objAnotacion;
            this.lompadservice.saveObjectLompad(this.objAnotacion, "annotation");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDatos();
            this.castVcard(this.objAnotacion["Entity"]);
            this.ObjOptions = this.componentePrincipal.objOptions;
            this.modo_acceso = [{
              label: 'visual',
              value: 'visual',
              code: 'visu'
            }, {
              label: 'auditivo',
              value: 'auditory',
              code: 'wartg'
            }, {
              label: 'texto',
              value: 'tex',
              code: 'text'
            }, {
              label: 'tactil',
              value: 'tactile',
              code: 'tac'
            }];
            this.modo_suficiente = [{
              label: 'visual',
              value: 'visual',
              code: 'visu'
            }, {
              label: 'auditivo',
              value: 'auditory',
              code: 'audi'
            }, {
              label: 'texto',
              value: 'tex',
              code: 'text'
            }, {
              label: 'tactil',
              value: 'tactile',
              code: 'tac'
            }];
            this.rol = [{
              label: 'Estudiantes',
              value: 'student',
              code: 'est'
            }, {
              label: 'Profesores',
              value: 'teachers',
              code: 'prof'
            }, {
              label: 'Aplicación',
              value: 'application',
              code: 'app'
            }];
            this.modo_accesoSelect = this.objAnotacion["Mode Access"];
            this.modo_suficienteSelect = this.objAnotacion["Mode Access Sufficient"];
            this.rolSelect = this.objAnotacion["Rol"];
            this.fecha = new Date(this.objAnotacion["Date"]);
            console.log("Desde Anotacion: ", this.objAnotacion);
          }
        }, {
          key: "castVcard",
          value: function castVcard(card) {
            var inicial = card;
            inicial = inicial.replace(" ", "_");
            inicial = inicial.replace(/ /g, "");
            var list = inicial.split("\n"); // console.log(list);

            var varN = list[2].substring(2, list[2].length);
            var list_varN = varN.split(";");
            var nombre = list_varN[1];
            var apellido = list_varN[0];
            var mail = list[4].split(":")[1];
            var organization = list[5].split(":")[1];
            console.log(nombre);
            console.log(apellido);
            console.log(mail);
            console.log(organization);
            this.nombreNew = nombre;
            this.apellidoNew = apellido;
            this.mailNew = mail;
            this.organizacionNew = organization;
          }
        }, {
          key: "actualizarVcard",
          value: function actualizarVcard(card) {
            var carrd = card;
            carrd = carrd.replace(/ /g, "");
            var inicial = card;
            inicial = inicial.replace(" ", "_");
            inicial = inicial.replace(/ /g, "");
            var list = inicial.split("\n");
            var varN = list[2].substring(2, list[2].length);
            var list_varN = varN.split(";");
            var nombre = list_varN[1];
            var apellido = list_varN[0];
            var mail = list[4].split(":")[1];
            var organization = list[5].split(":")[1];
            carrd = carrd.replace(nombre, this.nombreNew.trim());
            carrd = carrd.replace(apellido, this.apellidoNew.trim());
            carrd = carrd.replace(mail, this.mailNew.trim());
            carrd = carrd.replace(organization, this.organizacionNew.trim());
            var temFN = carrd.split("\n");
            temFN[3] = "FN:" + this.nombreNew.trim() + " " + this.apellidoNew.trim();
            var _final = "";
            temFN.forEach(function (element) {
              _final += element + "\n";
            });
            _final = _final.substring(0, _final.length - 1);
            console.log("fiNal card: ", _final);
            this.objAnotacion["Entity"] = _final;
          }
        }, {
          key: "cambio_modo_accesoSelect",
          value: function cambio_modo_accesoSelect() {
            console.log(this.modo_accesoSelect);
            this.objAnotacion["Mode Access"] = this.modo_accesoSelect;
          }
        }, {
          key: "cambio_modo_suficienteSelect",
          value: function cambio_modo_suficienteSelect() {
            console.log(this.modo_suficienteSelect);
            this.objAnotacion["Mode Access Sufficient"] = this.modo_suficienteSelect;
          }
        }, {
          key: "cambio_rolSelect",
          value: function cambio_rolSelect() {
            console.log(this.rolSelect);
            this.objAnotacion["Rol"] = this.rolSelect;
          }
        }]);

        return AnotacionComponent;
      }();

      AnotacionComponent.ctorParameters = function () {
        return [{
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__["LompadService"]
        }];
      };

      AnotacionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-anotacion',
        template: _raw_loader_anotacion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_anotacion_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AnotacionComponent);
      /***/
    },

    /***/
    "48V0":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/formlayoutdemo.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function V0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>Vertical</h5>\n            <div class=\"p-fluid\">\n                <div class=\"p-field\">\n                    <label for=\"firstname1\">Name</label>\n                    <input id=\"firstname1\" type=\"text\" pInputText>\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"lastname1\">Email</label>\n                    <input id=\"lastname1\" type=\"text\" pInputText>\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"age1\">Age</label>\n                    <input id=\"age1\" type=\"text\" pInputText>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h5>Vertical Grid</h5>\n            <div class=\"p-fluid p-formgrid p-grid\">\n                <div class=\"p-field p-col\">\n                    <label for=\"firstname2\">Name</label>\n                    <input id=\"firstname2\" type=\"text\" pInputText>\n                </div>\n                <div class=\"p-field p-col\">\n                    <label for=\"lastname2\">Email</label>\n                    <input id=\"lastname2\" type=\"text\" pInputText>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>Horizontal</h5>\n            <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <label for=\"firstname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Name</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"firstname4\" type=\"text\" pInputText>\n                    </div>\n                </div>\n                <div class=\"p-field p-grid\">\n                    <label for=\"lastname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Email</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"lastname4\" type=\"text\" pInputText>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h5>Inline</h5>\n            <div class=\"p-formgroup-inline\">\n                <div class=\"p-field\">\n                    <label for=\"firstname5\" class=\"p-sr-only\">Firstname</label>\n                    <input id=\"firstname5\" type=\"text\" pInputText placeholder=\"Firstname\">\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"lastname5\" class=\"p-sr-only\">Lastname</label>\n                    <input id=\"lastname5\" type=\"text\" pInputText placeholder=\"Lastname\">\n                </div>\n                <button pButton pRipple type=\"button\" label=\"Submit\"></button>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h5>Help Text</h5>\n            <div class=\"p-field p-fluid\">\n                <label for=\"username\">Username</label>\n                <input id=\"username\" type=\"username\" pInputText aria-describedby=\"username-help\">\n                <small id=\"username-help\">Enter your username to reset your password.</small>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Advanced</h5>\n            <div class=\"p-fluid p-formgrid p-grid\">\n                <div class=\"p-field p-col-12 p-md-6\">\n                    <label for=\"firstname6\">Firstname</label>\n                    <input id=\"firstname6\" type=\"text\" pInputText>\n                </div>\n                <div class=\"p-field p-col-12 p-md-6\">\n                    <label for=\"lastname6\">Lastname</label>\n                    <input id=\"lastname6\" type=\"text\" pInputText>\n                </div>\n                <div class=\"p-field p-col-12\">\n                    <label for=\"address\">Address</label>\n                    <textarea id=\"address\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                </div>\n                <div class=\"p-field p-col-12 p-md-6\">\n                    <label for=\"city\">City</label>\n                    <input id=\"city\" type=\"text\" pInputText>\n                </div>\n                <div class=\"p-field p-col-12 p-md-3\">\n                    <label for=\"state\">State</label>\n                    <p-dropdown inputId=\"state\" [options]=\"states\" [(ngModel)]=\"selectedState\" placeholder=\"Select\" optionLabel=\"name\"></p-dropdown>\n                </div>\n                <div class=\"p-field p-col-12 p-md-3\">\n                    <label for=\"zip\">Zip</label>\n                    <input id=\"zip\" type=\"text\" pInputText>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "4Pek":
    /*!*****************************************************!*\
      !*** ./src/app/demo/view/overlaysdemo.component.ts ***!
      \*****************************************************/

    /*! exports provided: OverlaysDemoComponent */

    /***/
    function Pek(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlaysDemoComponent", function () {
        return OverlaysDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_overlaysdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./overlaysdemo.component.html */
      "GlPy");
      /* harmony import */


      var _overlaysdemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./overlaysdemo.scss */
      "++GG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");

      var OverlaysDemoComponent = /*#__PURE__*/function () {
        function OverlaysDemoComponent(productService, confirmationService, messageService, breadcrumbService) {
          _classCallCheck(this, OverlaysDemoComponent);

          this.productService = productService;
          this.confirmationService = confirmationService;
          this.messageService = messageService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Overlay',
            routerLink: ['/uikit/overlay']
          }]);
        }

        _createClass(OverlaysDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.productService.getProductsSmall().then(function (products) {
              return _this.products = products;
            });
            this.images = [];
            this.images.push({
              source: 'assets/demo/images/sopranos/sopranos1.jpg',
              thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg',
              title: 'Sopranos 1'
            });
            this.images.push({
              source: 'assets/demo/images/sopranos/sopranos2.jpg',
              thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg',
              title: 'Sopranos 2'
            });
            this.images.push({
              source: 'assets/demo/images/sopranos/sopranos3.jpg',
              thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg',
              title: 'Sopranos 3'
            });
            this.images.push({
              source: 'assets/demo/images/sopranos/sopranos4.jpg',
              thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg',
              title: 'Sopranos 4'
            });
          }
        }, {
          key: "confirm1",
          value: function confirm1() {
            this.confirmationService.confirm({
              key: 'confirm1',
              message: 'Are you sure to perform this action?'
            });
          }
        }, {
          key: "confirm2",
          value: function confirm2(event) {
            var _this2 = this;

            this.confirmationService.confirm({
              key: 'confirm2',
              target: event.target,
              message: 'Are you sure that you want to proceed?',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this2.messageService.add({
                  severity: 'info',
                  summary: 'Confirmed',
                  detail: 'You have accepted'
                });
              },
              reject: function reject() {
                _this2.messageService.add({
                  severity: 'error',
                  summary: 'Rejected',
                  detail: 'You have rejected'
                });
              }
            });
          }
        }]);

        return OverlaysDemoComponent;
      }();

      OverlaysDemoComponent.ctorParameters = function () {
        return [{
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbService"]
        }];
      };

      OverlaysDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_overlaysdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
        styles: [_overlaysdemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OverlaysDemoComponent);
      /***/
    },

    /***/
    "4Sr2":
    /*!*********************************************!*\
      !*** ./src/app/demo/service/iconservice.ts ***!
      \*********************************************/

    /*! exports provided: IconService */

    /***/
    function Sr2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconService", function () {
        return IconService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var IconService = /*#__PURE__*/function () {
        function IconService(http) {
          _classCallCheck(this, IconService);

          this.http = http;
          this.apiUrl = 'assets/demo/data/icons.json';
        }

        _createClass(IconService, [{
          key: "getIcons",
          value: function getIcons() {
            var _this3 = this;

            return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              _this3.icons = response.icons;
              return _this3.icons;
            }));
          }
        }]);

        return IconService;
      }();

      IconService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      IconService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], IconService);
      /***/
    },

    /***/
    "4U8t":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/tabledemo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function U8t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Default</h5>\n\t\t\t<p>Pagination, sorting, filtering and checkbox selection.</p>\n\t\t\t<p-table #dt [value]=\"customers1\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n\t\t\t\t\t styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n\t\t\t\t\t [filterDelay]=\"0\" [globalFilterFields]=\"['name','country.name','representative.name','status']\">\n\t\t\t\t<ng-template pTemplate=\"caption\">\n\t\t\t\t\t<div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n\t\t\t\t\t\tCustomers\n\t\t\t\t\t\t<span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n\t\t\t\t\t\t   placeholder=\"Global Search\"/>\n                </span>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"header\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th style=\"width: 3rem\">\n\t\t\t\t\t\t\t<p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"name\">\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\n\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"name\"></p-sortIcon>\n\t\t\t\t\t\t\t\t<p-columnFilter type=\"text\" field=\"name\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"country.name\">\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\n\t\t\t\t\t\t\t\tCountry\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"country.name\"></p-sortIcon>\n\t\t\t\t\t\t\t\t<p-columnFilter type=\"text\" field=\"country.name\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"representative.name\">\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\n\t\t\t\t\t\t\t\tAgent\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"representative.name\"></p-sortIcon>\n\t\t\t\t\t\t\t\t<p-columnFilter field=\"representative\" matchMode=\"in\" display=\"menu\" [showMatchModes]=\"false\" [showOperator]=\"false\" [showAddButton]=\"false\">\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"p-px-3 p-pt-3 p-pb-0\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"p-text-bold\">Agent Picker</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"filter\" let-value let-filter=\"filterCallback\">\n\t\t\t\t\t\t\t\t\t\t<p-multiSelect [ngModel]=\"value\" [options]=\"representatives\" placeholder=\"Any\" (onChange)=\"filter($event.value)\" optionLabel=\"name\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template let-option pTemplate=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"p-multiselect-representative-option\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [alt]=\"option.label\" src=\"assets/demo/images/avatar/{{option.image}}\" width=\"32\" style=\"vertical-align: middle\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"p-ml-1\">{{option.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</p-multiSelect>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t</p-columnFilter>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"date\">\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\n\t\t\t\t\t\t\t\tDate\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"date\"></p-sortIcon>\n\t\t\t\t\t\t\t\t<p-columnFilter type=\"date\" field=\"date\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"balance\">\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\n\t\t\t\t\t\t\t\tBalance\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"balance\"></p-sortIcon>\n\t\t\t\t\t\t\t\t<p-columnFilter type=\"numeric\" field=\"balance\" display=\"menu\" currency=\"USD\" class=\"p-ml-auto\"></p-columnFilter>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"status\">\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\n\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"status\"></p-sortIcon>\n\t\t\t\t\t\t\t\t<p-columnFilter field=\"status\" matchMode=\"equals\" display=\"menu\">\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"filter\" let-value let-filter=\"filterCallback\">\n\t\t\t\t\t\t\t\t\t\t<p-dropdown [ngModel]=\"value\" [options]=\"statuses\" (onChange)=\"filter($event.value)\" placeholder=\"Any\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template let-option pTemplate=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span [class]=\"'customer-badge status-' + option.value\">{{option.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</p-dropdown>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t</p-columnFilter>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"activity\">\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\n\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"activity\"></p-sortIcon>\n\t\t\t\t\t\t\t\t<p-columnFilter field=\"activity\" matchMode=\"between\" display=\"menu\" [showMatchModes]=\"false\" [showOperator]=\"false\" [showAddButton]=\"false\">\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"filter\" let-filter=\"filterCallback\">\n\t\t\t\t\t\t\t\t\t\t<p-slider [ngModel]=\"activityValues\" [range]=\"true\" (onSlideEnd)=\"filter($event.values)\" styleClass=\"p-m-3\"></p-slider>\n\t\t\t\t\t\t\t\t\t\t<div class=\"p-d-flex p-ai-center p-jc-between p-px-2\">\n\t\t\t\t\t\t\t\t\t\t\t<span>{{activityValues[0]}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span>{{activityValues[1]}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t</p-columnFilter>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th style=\"width: 8rem\"></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"body\" let-customer>\n\t\t\t\t\t<tr class=\"p-selectable-row\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p-tableCheckbox [value]=\"customer\"></p-tableCheckbox>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Name</span>\n\t\t\t\t\t\t\t{{customer.name}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Country</span>\n\t\t\t\t\t\t\t<img src=\"assets/demo/flags/flag_placeholder.png\"\n\t\t\t\t\t\t\t\t [class]=\"'flag flag-' + customer.country.code\" width=\"30\">\n\t\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em;vertical-align: middle\">{{customer.country.name}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Representative</span>\n\t\t\t\t\t\t\t<img [alt]=\"customer.representative.name\"\n\t\t\t\t\t\t\t\t src=\"assets/demo/images/avatar/{{customer.representative.image}}\" width=\"32\"\n\t\t\t\t\t\t\t\t style=\"vertical-align: middle\"/>\n\t\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em;vertical-align: middle\">{{customer.representative.name}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Date</span>\n\t\t\t\t\t\t\t{{customer.date | date: 'MM/dd/yyyy'}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Balance</span>\n\t\t\t\t\t\t\t{{customer.balance | currency:'USD':'symbol'}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Status</span>\n\t\t\t\t\t\t\t<span [class]=\"'customer-badge status-' + customer.status\">{{customer.status}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Activity</span>\n\t\t\t\t\t\t\t<p-progressBar [value]=\"customer.activity\" [showValue]=\"false\"></p-progressBar>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td style=\"text-align: center\">\n\t\t\t\t\t\t\t<button pButton type=\"button\" class=\"p-button-secondary\" icon=\"pi pi-cog\"></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"emptymessage\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td colspan=\"8\">No customers found.</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t</p-table>\n\t\t</div>\n\t</div>\n\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Customized</h5>\n\t\t\t<p>Scrollable table with gridlines (<mark>.p-datatable-gridlines</mark>), striped rows (<mark>.p-datatable-striped</mark>) and smaller paddings (<mark>p-datatable-sm</mark>).</p>\n\n\t\t\t<p-table #dtc [value]=\"customers2\" [(selection)]=\"selectedCustomer\" dataKey=\"id\" selectionMode=\"single\"\n\t\t\t\t\t styleClass=\"p-datatable-customers p-datatable-gridlines p-datatable-striped p-datatable-sm\"\n\t\t\t\t\t [scrollable]=\"true\" scrollHeight=\"600px\" [filterDelay]=\"0\" [globalFilterFields]=\"['name','country.name','representative.name','status']\">\n\t\t\t\t<ng-template pTemplate=\"caption\">\n\t\t\t\t\t<div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n\t\t\t\t\t\tCustomers\n\t\t\t\t\t\t<span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dtc.filterGlobal($event.target.value, 'contains')\"\n\t\t\t\t\t\t   placeholder=\"Global Search\"/>\n                </span>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"header\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th pSortableColumn=\"name\">Name\n\t\t\t\t\t\t\t<p-sortIcon field=\"name\"></p-sortIcon>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"country.name\">Country\n\t\t\t\t\t\t\t<p-sortIcon field=\"country.name\"></p-sortIcon>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"representative.name\">Representative\n\t\t\t\t\t\t\t<p-sortIcon field=\"representative.name\"></p-sortIcon>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"date\">Date\n\t\t\t\t\t\t\t<p-sortIcon field=\"date\"></p-sortIcon>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"status\">Status\n\t\t\t\t\t\t\t<p-sortIcon field=\"status\"></p-sortIcon>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"activity\">Activity\n\t\t\t\t\t\t\t<p-sortIcon field=\"activity\"></p-sortIcon>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"body\" let-customer>\n\t\t\t\t\t<tr [pSelectableRow]=\"customer\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Name</span>\n\t\t\t\t\t\t\t{{customer.name}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Country</span>\n\t\t\t\t\t\t\t<img src=\"assets/demo/flags/flag_placeholder.png\"\n\t\t\t\t\t\t\t\t [class]=\"'flag flag-' + customer.country.code\" width=\"30\">\n\t\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em;vertical-align: middle\">{{customer.country.name}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Representative</span>\n\t\t\t\t\t\t\t<img [alt]=\"customer.representative.name\"\n\t\t\t\t\t\t\t\t src=\"assets/demo/images/avatar/{{customer.representative.image}}\" width=\"32\"\n\t\t\t\t\t\t\t\t style=\"vertical-align: middle\"/>\n\t\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em;vertical-align: middle\">{{customer.representative.name}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Date</span>\n\t\t\t\t\t\t\t{{customer.date}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Status</span>\n\t\t\t\t\t\t\t<span [class]=\"'customer-badge status-' + customer.status\">{{customer.status}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Activity</span>\n\t\t\t\t\t\t\t<p-progressBar [value]=\"customer.activity\" [showValue]=\"false\"></p-progressBar>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"emptymessage\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td colspan=\"8\">No customers found.</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t</p-table>\n\t\t</div>\n\t</div>\n\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Row Expand</h5>\n\t\t\t<p-table [value]=\"products\" dataKey=\"name\" styleClass=\"p-datatable-customers rowexpand-table\">\n\t\t\t\t<ng-template pTemplate=\"header\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th style=\"width: 3rem\"></th>\n\t\t\t\t\t\t<th pSortableColumn=\"name\">Name <p-sortIcon field=\"name\"></p-sortIcon></th>\n\t\t\t\t\t\t<th>Image</th>\n\t\t\t\t\t\t<th pSortableColumn=\"price\">Price <p-sortIcon field=\"price\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"category\">Category <p-sortIcon field=\"category\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"rating\">Reviews <p-sortIcon field=\"rating\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"inventoryStatus\">Status <p-sortIcon field=\"inventoryStatus\"></p-sortIcon></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"body\" let-product let-expanded=\"expanded\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button type=\"button\" pButton pRipple [pRowToggler]=\"product\" class=\"p-button-text p-button-rounded p-button-plain\" [icon]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Name</span>{{product.name}}</td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Image</span><img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.name\" width=\"100\" class=\"p-shadow-4\" /></td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Price</span>{{product.price | currency:'USD'}}</td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Category</span>{{product.category}}</td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Reviews</span><p-rating [ngModel]=\"product.rating\" [readonly]=\"true\" [cancel]=\"false\"></p-rating></td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Status</span><span [class]=\"'product-badge status-' + product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"rowexpansion\" let-product>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td colspan=\"7\">\n\t\t\t\t\t\t\t<div class=\"p-p-3\">\n\t\t\t\t\t\t\t\t<p-table [value]=\"product.orders\" dataKey=\"id\">\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"header\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th pSortableColumn=\"id\">Id <p-sortIcon field=\"price\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"customer\">Customer <p-sortIcon field=\"customer\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"date\">Date <p-sortIcon field=\"date\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"amount\">Amount <p-sortIcon field=\"amount\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"stats\">Status <p-sortIcon field=\"status\"></p-sortIcon></th>\n\t\t\t\t\t\t<th style=\"width: 4rem\"></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"body\" let-order>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Id</span>{{order.id}}</td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Customer</span>{{order.customer}}</td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Date</span>{{order.date}}</td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Amount</span>{{order.amount | currency:'USD'}}</td>\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Status</span><span [class]=\"'order-badge order-' + order.status.toLowerCase()\">{{order.status}}</span></td>\n\t\t\t\t\t\t<td><p-button type=\"button\" icon=\"pi pi-search\"></p-button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"emptymessage\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td colspan=\"6\">There are no order for this product yet.</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t</p-table>\n\t\t</div>\n\t\t</td>\n\t\t</tr>\n\t\t</ng-template>\n\t\t</p-table>\n\t</div>\n</div>\n\n<div class=\"p-col-12\">\n\t<div class=\"card\">\n\t\t<h5>Row Group and Scrolling</h5>\n\t\t<p-table [value]=\"customers3\" sortField=\"representative.name\" sortMode=\"single\" (onSort)=\"onSort()\" [scrollable]=\"true\" scrollHeight=\"600px\"\n\t\t\t\t styleClass=\"p-datatable-customers\">\n\t\t\t<ng-template pTemplate=\"header\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t<th>Country</th>\n\t\t\t\t\t<th>Company</th>\n\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t<th>Date</th>\n\t\t\t\t</tr>\n\t\t\t</ng-template>\n\t\t\t<ng-template pTemplate=\"body\" let-customer let-rowIndex=\"rowIndex\">\n\t\t\t\t<tr *ngIf=\"rowGroupMetadata[customer.representative.name].index === rowIndex\">\n\t\t\t\t\t<td colspan=\"5\">\n\t\t\t\t\t\t<img [alt]=\"customer.representative.name\" src=\"assets/demo/images/avatar/{{customer.representative.image}}\" width=\"32\" style=\"vertical-align: middle\" />\n\t\t\t\t\t\t<span class=\"p-text-bold p-ml-2\">{{customer.representative.name}}</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><span class=\"p-column-title\">Name</span>\n\t\t\t\t\t\t{{customer.name}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><span class=\"p-column-title\">Country</span>\n\t\t\t\t\t\t<img src=\"assets/demo/flags/flag_placeholder.png\" [class]=\"'flag flag-' + customer.country.code\" width=\"30\">\n\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em\">{{customer.country.name}}</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><span class=\"p-column-title\">Company</span>\n\t\t\t\t\t\t{{customer.company}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><span class=\"p-column-title\">Status</span>\n\t\t\t\t\t\t<span [class]=\"'customer-badge status-' + customer.status\">{{customer.status}}</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><span class=\"p-column-title\">Date</span>\n\t\t\t\t\t\t{{customer.date}}\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-template>\n\t\t</p-table>\n\t</div>\n</div>\n</div>\n";
      /***/
    },

    /***/
    "4Yau":
    /*!****************************************!*\
      !*** ./src/app/utilities/flexbox.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function Yau(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep .flexbox-demo pre[class*=language-] {\n  box-shadow: none;\n  border: 0 none;\n}\n:host ::ng-deep .flexbox-demo pre[class*=language-]:before, :host ::ng-deep .flexbox-demo pre[class*=language-]:after {\n  display: none !important;\n}\n:host ::ng-deep .flexbox-demo pre[class*=language-] code {\n  border-left: 10px solid var(--surface-d) !important;\n  box-shadow: none !important;\n  background: var(--surface-e) !important;\n  margin: 1em 0;\n  color: var(--text-color);\n  font-size: 14px;\n}\n:host ::ng-deep .flexbox-demo pre[class*=language-] code .token.tag, :host ::ng-deep .flexbox-demo pre[class*=language-] code .token.keyword {\n  color: #2196F3 !important;\n}\n:host ::ng-deep .flexbox-demo pre[class*=language-] code .token.attr-name, :host ::ng-deep .flexbox-demo pre[class*=language-] code .token.attr-string {\n  color: #2196F3 !important;\n}\n:host ::ng-deep .flexbox-demo pre[class*=language-] code .token.attr-value {\n  color: #4CAF50 !important;\n}\n:host ::ng-deep .flexbox-demo pre[class*=language-] code .token.punctuation {\n  color: var(--text-color);\n}\n:host ::ng-deep .flexbox-demo pre[class*=language-] code .token.operator, :host ::ng-deep .flexbox-demo pre[class*=language-] code .token.string {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZsZXhib3guc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBRUU7RUFDQyx3QkFBQTtBQUFIO0FBR0U7RUFDQyxtREFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBREg7QUFJSTtFQUVDLHlCQUFBO0FBSEw7QUFNSTtFQUVDLHlCQUFBO0FBTEw7QUFRSTtFQUNDLHlCQUFBO0FBTkw7QUFTSTtFQUNDLHdCQUFBO0FBUEw7QUFVSTtFQUVDLHVCQUFBO0FBVEwiLCJmaWxlIjoiZmxleGJveC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5mbGV4Ym94LWRlbW8ge1xuXHQgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRib3JkZXI6IDAgbm9uZTtcblxuXHRcdCY6YmVmb3JlLCAmOmFmdGVyIHtcblx0XHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHRjb2RlIHtcblx0XHRcdGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCkgIWltcG9ydGFudDtcblx0XHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZSkgIWltcG9ydGFudDtcblx0XHRcdG1hcmdpbjogMWVtIDA7XG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cblx0XHRcdC50b2tlbiB7XG5cdFx0XHRcdCYudGFnLFxuXHRcdFx0XHQmLmtleXdvcmQge1xuXHRcdFx0XHRcdGNvbG9yOiAjMjE5NkYzICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLmF0dHItbmFtZSxcblx0XHRcdFx0Ji5hdHRyLXN0cmluZyB7XG5cdFx0XHRcdFx0Y29sb3I6ICMyMTk2RjMgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuYXR0ci12YWx1ZSB7XG5cdFx0XHRcdFx0Y29sb3I6ICM0Q0FGNTAgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYucHVuY3R1YXRpb24ge1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYub3BlcmF0b3IsXG5cdFx0XHRcdCYuc3RyaW5nIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */";
      /***/
    },

    /***/
    "57S9":
    /*!******************************************!*\
      !*** ./src/app/servicios/api.service.ts ***!
      \******************************************/

    /*! exports provided: ApiService */

    /***/
    function S9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiService = /*#__PURE__*/function () {
        // private objson: any = { value: "", icon_url: "", id: "", url: "" };
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
        }

        _createClass(ApiService, [{
          key: "send_ObjectApi",
          value: function send_ObjectApi(obj, hascode, hoja) {
            var raw = "";
            console.log("PILAS CON EL api  objecto: ", obj); // console.log("http://localhost:8000/private/update/?hashed_code="+hascode+"&hoja="+hoja+"&data="+obj);
            // console.log("=========================================");

            fetch("http://localhost:8000/private/update/?hashed_code=" + hascode + "&hoja=" + hoja + "&data=" + obj, {
              method: 'POST',
              body: raw,
              redirect: 'follow'
            }).then(function (response) {
              return response.text();
            }).then(function (result) {
              return console.log("RESULTADO: ", result);
            })["catch"](function (error) {
              return console.log('error', error);
            });
          }
        }, {
          key: "api_DownloadFile",
          value: function api_DownloadFile(hash_param) {
            // console.log(hash_param);
            var param;
            fetch("http://localhost:8000/private/download/?hashed_code=" + hash_param, {
              // fetch("http://localhost:8000/private/download/?hashed_code=ArchivoExportado_-6482018054697832733",{
              method: 'GET',
              redirect: 'follow'
            }).then(function (response) {
              return response.text();
            }).then(function (result) {
              return param = result;
            })["catch"](function (error) {
              return console.log('error', error);
            });
            return param;
          }
        }, {
          key: "getXML",
          value: function getXML() {
            return new Promise(function (resolve, reject) {
              var param; // fetch("http://localhost:8000/private/download/?hashed_code="+hash_param, {

              fetch("http://localhost:8000/private/download/?hashed_code=ArchivoExportado_-6482018054697832733", {
                method: 'GET',
                redirect: 'follow'
              }).then(function (response) {
                return response.text();
              }).then(function (result) {
                return param = result;
              })["catch"](function (error) {
                return console.log('error', error);
              });
              resolve(param);
            });
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    },

    /***/
    "5NUu":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/livecicle/livecicle.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NUu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid \">\n\n    <div *ngIf=\"ObjOptions.o2_1\" class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>{{\"Versión\" | translate}}</h5>\n            <div class=\"p-fluid p-formgrid p-grid\">\n                <div class=\"p-field p-col-12 \">\n                    <!-- <label for=\"version\">{{\"Versión\" | translate}}</label> -->\n                    <input [(ngModel)]='objLiveClicle[\"Version\"]' id=\"version\" type=\"text\" pInputText>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"ObjOptions.o2_2\" class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>{{\"Estado\" | translate}}</h5>\n            <div class=\"p-fluid\">\n                <p-dropdown [options]=\"estados\" [(ngModel)]='estadoSelect' name='estadoSelect' (onChange)='cambioEstados()' placeholder='{{\"Seleccionar\"| translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div class=\"p-col-12 \">\n\n        <div *ngIf=\"ObjOptions.o2_3\" class=\"card\">\n            <h5>{{\"Contribución\" | translate}}</h5>\n\n\n            <div *ngIf=\"ObjOptions.o2_3_1\" class=\"card\">\n                <h5>{{\"Tipo\" | translate}}</h5>\n                <div class=\"p-fluid\">\n                    <!-- [(ngModel)]=\"selectedDrop\" -->\n                    <p-dropdown [options]=\"tipos\" [(ngModel)]='tiposSelect' name='tiposSelect' (onChange)='cambio_contr_tipo()' placeholder='{{\"Seleccionar\"| translate}} ' [showClear]=\"true\">\n                        <ng-template pTemplate=\"item\" let-item>\n                            {{item.label| translate }}\n                        </ng-template>\n                        <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                            {{selectedItem.label | translate }}\n                        </ng-template>\n                    </p-dropdown>\n                </div>\n\n            </div>\n\n            <div *ngIf=\"ObjOptions.o2_3_2\" class=\"card\">\n                <h5>{{\"Entidad\" | translate }}</h5>\n                <div class=\"p-fluid\">\n                    <div class=\"p-field p-grid\">\n                        <label for=\"nombre\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Nombre\" | translate }}</label>\n                        <div class=\"p-col-12 p-md-10\">\n                            <input id=\"nombre\" [(ngModel)]='nombreNew' type=\"text\" pInputText>\n                        </div>\n                    </div>\n                    <div class=\"p-field p-grid\">\n                        <label for=\"apellido\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Apellido\" | translate }}</label>\n                        <div class=\"p-col-12 p-md-10\">\n\n                            <input id=\"apellido\" [(ngModel)]='apellidoNew' type=\"text\" pInputText>\n                        </div>\n                    </div>\n                    <div class=\"p-field p-grid\">\n                        <label for=\"lastname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Email\" | translate}}</label>\n                        <div class=\"p-col-12 p-md-10\">\n                            <input id=\"lastname4\" [(ngModel)]='mailNew' type=\"text\" pInputText>\n                        </div>\n                    </div>\n                    <div class=\"p-field p-grid\">\n                        <label for=\"organizacion\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Organización\" | translate}}</label>\n                        <div class=\"p-col-12 p-md-10\">\n                            <input id=\"organizacion\" [(ngModel)]='organizacionNew' type=\"text\" pInputText>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n            <div *ngIf=\"ObjOptions.o2_3_3\" class=\"card\">\n                <h5>{{\"Fecha\" | translate}}</h5>\n\n                <div class=\"p-fluid\">\n\n                    <div class=\"p-field p-grid\">\n                        <div class=\"p-col-12 p-md-10\">\n                            <p-calendar [(ngModel)]=\"fecha\" [showIcon]=\"true\" inputId=\"icon\"></p-calendar>\n                        </div>\n                    </div>\n\n                    <div class=\"p-field p-grid\">\n                        <label for=\"descripcion\">{{\"Descripción\" | translate }}</label>\n                        <textarea id=\"descripcion\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                    </div>\n                </div>\n\n\n            </div>\n\n\n        </div>\n\n        <!-- <div class=\"card\">\n            <h5>Inline</h5>\n            <div class=\"p-formgroup-inline\">\n                <div class=\"p-field\">\n                    <label for=\"firstname5\" class=\"p-sr-only\">Firstname</label>\n                    <input id=\"firstname5\" type=\"text\" pInputText placeholder=\"Firstname\">\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"lastname5\" class=\"p-sr-only\">Lastname</label>\n                    <input id=\"lastname5\" type=\"text\" pInputText placeholder=\"Lastname\">\n                </div>\n                <button pButton pRipple type=\"button\" label=\"Submit\"></button>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h5>Help Text</h5>\n            <div class=\"p-field p-fluid\">\n                <label for=\"username\">Username</label>\n                <input id=\"username\" type=\"username\" pInputText aria-describedby=\"username-help\">\n                <small id=\"username-help\">Enter your username to reset your password.</small>\n            </div>\n        </div> -->\n    </div>\n\n    <!-- <div class=\"p-col-12\">\n        <div class=\"card\">\n\n            <div class=\"p-fluid p-formgrid p-grid\">\n                <div class=\"p-field p-col-12 \">\n                    <label for=\"version\">Versión</label>\n                    <input id=\"version\" type=\"text\" pInputText>\n                </div>\n            </div>\n\n            <div class=\"card\">\n                <h4>naty card</h4>\n                <div class=\"p-fluid p-formgrid p-grid\">\n                    <div class=\"p-field p-col-12 \">\n                        <label for=\"version\">Versión</label>\n                        <input id=\"version\" type=\"text\" pInputText>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n    <!-- <div class=\"p-col-12\">\n        <div class=\"card\">\n            \n            <div class=\"p-fluid p-formgrid p-grid\">\n                <div class=\"p-field p-col-12 \">\n                    <label for=\"titulo\">Título</label>\n                    <input id=\"titulo\" type=\"text\" pInputText>\n                </div>\n\n                <div class=\"p-field p-col-12\">\n                    <label for=\"address\">Address</label>\n                    <textarea id=\"address\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                </div>\n                <div class=\"p-field p-col-12 \">\n                    <label for=\"palabraClave\">Papabra Clave</label>\n                    <input id=\"palabraClave\" type=\"text\" pInputText>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>";
      /***/
    },

    /***/
    "5Od1":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/elevation.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Od1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Shadow</h5>\n\t\t\t<p>Elevation is an add-on utility of <a href=\"https://github.com/primefaces/primeflex\">PrimeFlex</a> and used to specify the separation between surfaces and elements along the z-axis.</p>\n\n\t\t\t<div class=\"p-grid\">\n\t\t\t\t<div *ngFor=\"let box of boxes; index as i\" [class]=\"'box p-shadow-' + (i + 1)\">\n\t\t\t\t\tp-shadow-{{i + 1}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "5QhL":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/inicio/inicio.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function QhL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n    <div class=\"p-col-12\">\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"p-grid\">\r\n    <div class=\"p-col-12\">\r\n\r\n\r\n        <div class=\"card\">\r\n            <div class=\"p-mb-3 p-text-center\">\r\n                <h1>{{\"Bienvenido a\" | translate}} LOMpad Schema</h1>\r\n            </div>\r\n            <div class=\"p-mb-3 p-text-center\">\r\n                <h5>{{\"Por favor configure la aplicación de acuerdo a lo que necesite\" | translate}}</h5>\r\n            </div>\r\n\r\n\r\n            <div *ngIf='fileCharger; then thenBlock else elseBlock'></div>\r\n            <ng-template #thenBlock>\r\n                <div class=\"p-field-radiobutton\">\r\n                    <p-checkbox id='pp' [(ngModel)]='switch' binary=\"true\" (click)='mostrarAdvertencia()'></p-checkbox>\r\n                    <label for=\"pp\">{{ \"Cargar un nuevo objeto de aprendizaje\" | translate}}</label>\r\n                </div>\r\n\r\n                <div *ngIf='switch'>\r\n                    <p-fileUpload (uploadHandler)=\"onUpload($event)\" customUpload=\"true\" multiple=\"multiple\" accept=\".rar,.zip,.xml\" maxFileSize=\"1000000000000\" [chooseLabel]=\"'Seleccionar Archivo' | translate\" [uploadLabel]=\"'Subir' | translate\" [cancelLabel]=\"'Cancelar' | translate\">\r\n                    </p-fileUpload>\r\n                </div>\r\n                <p-messages [value]=\"msgs\"></p-messages>\r\n            </ng-template>\r\n            <ng-template #elseBlock>\r\n                <p-fileUpload (uploadHandler)=\"onUpload($event)\" customUpload=\"true\" multiple=\"multiple\" accept=\".rar,.zip,.xml\" maxFileSize=\"1000000000000\" [chooseLabel]=\"'Seleccionar Archivo' | translate\" [uploadLabel]=\"'Subir' | translate\" [cancelLabel]=\"'Cancelar' | translate\"></p-fileUpload>\r\n                <p-messages [value]=\"msgs\"></p-messages>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <ng-template pTemplate=\"content\">\r\n                    <ul *ngIf=\"uploadedFiles.length\">\r\n                        <li *ngFor=\"let file of uploadedFiles\" class=\"p-mb-3 p-text-center\">{{file.name}} - {{file.size}} bytes</li>\r\n                    </ul>\r\n                </ng-template> -->\r\n<!-- <br>\r\n            <div class=\"p-mb-3 p-text-center\">\r\n                <button pButton pRipple type=\"button\" label=\"Empezar\" class=\"p-mr-2 p-mb-2\" (click)=\"habilitar()\"></button>\r\n            </div> -->\r\n\r\n<!-- <angular-file-uploader [config]=\"afuConfig\">\r\n</angular-file-uploader> -->";
      /***/
    },

    /***/
    "5q1j":
    /*!**************************************************************!*\
      !*** ./src/app/paginas/upload-file/upload-file.component.ts ***!
      \**************************************************************/

    /*! exports provided: UploadFileComponent */

    /***/
    function q1j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function () {
        return UploadFileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_upload_file_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./upload-file.component.html */
      "XVv+");
      /* harmony import */


      var _upload_file_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./upload-file.component.css */
      "H9ub");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");

      var UploadFileComponent = /*#__PURE__*/function () {
        function UploadFileComponent(fb, http, lompadservice) {
          _classCallCheck(this, UploadFileComponent);

          this.fb = fb;
          this.http = http;
          this.lompadservice = lompadservice;
          this.uploadedFiles = [];
          this.form = this.fb.group({
            file: [null]
          });
        }

        _createClass(UploadFileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UploadFileComponent;
      }();

      UploadFileComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__["LompadService"]
        }];
      };

      UploadFileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-upload-file',
        template: _raw_loader_upload_file_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_upload_file_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UploadFileComponent);
      /***/
    },

    /***/
    "66gQ":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/dashboard.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function gQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid layout-dashboard\">\n    <div class=\"p-col-12 p-xl-3 p-md-6\">\n        <div class=\"p-grid p-nogutter widget-overview-box overview-box-1\">\n            <div class=\"p-col-3 overview-box-icon\">\n                <img src=\"assets/layout/images/dashboard/icon-messages.svg\" alt=\"mirage-layout\" />\n            </div>\n            <div class=\"p-col-6 overview-box-text\">\n                <h5>Messages</h5>\n                <span>24 new since last visit</span>\n            </div>\n            <div class=\"p-col-3 overview-box-status\">\n                440\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-xl-3 p-md-6\">\n        <div class=\"p-grid p-nogutter widget-overview-box overview-box-2\">\n            <div class=\"p-col-3 overview-box-icon\">\n                <img src=\"assets/layout/images/dashboard/icon-checkins.svg\" alt=\"mirage-layout\" />\n            </div>\n            <div class=\"p-col-6 overview-box-text\">\n                <h5>Check-ins</h5>\n                <span>48 new since last visit</span>\n            </div>\n            <div class=\"p-col-3 overview-box-status\">\n                532\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-xl-3 p-md-6\">\n        <div class=\"p-grid p-nogutter widget-overview-box overview-box-3\">\n            <div class=\"p-col-3 overview-box-icon\">\n                <img src=\"assets/layout/images/dashboard/icon-filessynced.svg\" alt=\"mirage-layout\" />\n            </div>\n            <div class=\"p-col-6 overview-box-text\">\n                <h5>Files Synced</h5>\n                <span>32,56 / 250 GB</span>\n            </div>\n            <div class=\"p-col-3 overview-box-status\">\n                28\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-xl-3 p-md-6\">\n        <div class=\"p-grid p-nogutter widget-overview-box overview-box-4\">\n            <div class=\"p-col-3 overview-box-icon\">\n                <img src=\"assets/layout/images/dashboard/icon-usersonline.png\" alt=\"mirage-layout\" />\n            </div>\n            <div class=\"p-col-6 overview-box-text\">\n                <h5>Users Online</h5>\n                <span>72 new user this week</span>\n            </div>\n            <div class=\"p-col-3 overview-box-status\">\n                256\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-6 \">\n        <div class=\"p-grid p-dir-col p-nogutter\">\n            <div class=\"p-col-12 \">\n                <div class=\"card widget-statistics\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 p-md-8\">\n                            <h5>Statistics</h5>\n                        </div>\n                        <div class=\"p-col-6 p-md-4 dropdown\">\n                            <p-dropdown [options]=\"dropdownYears\" [(ngModel)]=\"selectedYear\"></p-dropdown>\n                        </div>\n                    </div>\n                    <p-chart id=\"dashboard-chart\" type=\"line\" [data]=\"lineChartData\" [options]=\"lineChartOptions\"></p-chart>\n                </div>\n            </div>\n            <div class=\"p-col-12 widget-news\">\n                <div class=\"news-row\" [ngStyle]=\"{'transform': activeNews === 1 ? 'translate3d(0px, 0px, 0px)':activeNews === 2\n                ?'translate3d(-100%, 0px, 0px)':'translate3d(-200%, 0px, 0px)'}\">\n                    <div class=\"card news news-1 active-news\">\n                        <div class=\"news-title\">\n                            <h5>NEWS</h5>\n                        </div>\n                        <h6>3D-printed robot hand plays the piano</h6>\n                        <p>Scientists have developed a 3D-printed robotic hand which can play simple musical\n                            phrases\n                            on the piano by just moving its wrist</p>\n                        <div class=\"p-grid link\">\n                            <div class=\"p-col-9\">\n                                <a href=\"\">Learn more at Mirage News Central <i\n                                    class=\"pi pi-arrow-right\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card news news-2\">\n                        <div class=\"news-title\">\n                            <h5>NEWS</h5>\n                        </div>\n                        <h6>Scientists are trying to open a portal to a parallel universe</h6>\n                        <p>Does a mysterious mirror world lurk in the shadows of perceived reality? Could 2019\n                            be\n                            the year humans open the first portal to a shadowy dimension which mirrors our own\n                            world?</p>\n                        <div class=\"p-grid link\">\n                            <div class=\"p-col-9\">\n                                <a href=\"\">Learn more at Independent<i class=\"pi pi-arrow-right\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card news news-3\">\n                        <div class=\"news-title\">\n                            <h5>NEWS</h5>\n                        </div>\n                        <h6>Another mysterious deep space signal traced to the other side of the universe</h6>\n                        <p>Fast radio bursts suddenly seem to be everywhere in the news, but they're still\n                            coming\n                            from very far away.</p>\n                        <div class=\"p-grid link\">\n                            <div class=\"p-col-9\">\n                                <a href=\"\">Learn more at CNET <i class=\"pi pi-arrow-right\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"link-points\">\n                    <div class=\"p-grid points\">\n                        <div class=\"p-col-4 point point-1\" [ngClass]=\"{'active-point': activeNews === 1}\" (click)=\"activeNews = 1\"></div>\n                        <div class=\"p-col-4 point point-2 \" [ngClass]=\"{'active-point': activeNews === 2}\" (click)=\"activeNews = 2\"></div>\n                        <div class=\"p-col-4 point point-3 \" [ngClass]=\"{'active-point': activeNews === 3}\" (click)=\"activeNews = 3\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"p-grid\">\n            <div class=\"p-col-12\">\n                <div class=\"card widget-timeline\">\n                    <h5>Timeline</h5>\n                    <div class=\"timeline-row\">\n                        <div class=\"p-grid p-nogutter\">\n                            <div class=\"p-col-1\">\n                                <div class=\"timeline-icon camera-icon\">\n                                    <i class=\"pi pi-camera\"></i>\n                                </div>\n                            </div>\n                            <div class=\"p-col-11\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-10 timeline-content\">\n                                        <h6>Katherine May</h6>\n                                        <span>Lorem ipsun dolor amet</span>\n                                    </div>\n                                    <div class=\"p-col-2 timeline-time\">\n                                        <span>5 mins</span>\n                                    </div>\n                                    <div class=\"p-col-12 timeline-images\">\n                                        <div class=\"p-grid \">\n                                            <div class=\"p-col-6 p-lg-3\">\n                                                <img src=\"assets/layout/images/dashboard/photo-1.png\" alt=\"mirage-layout\" />\n                                            </div>\n                                            <div class=\"p-col-6 p-lg-3\">\n                                                <img src=\"assets/layout/images/dashboard/photo-2.png\" alt=\"mirage-layout\" />\n                                            </div>\n                                            <div class=\"p-col-6 p-lg-3\">\n                                                <img src=\"assets/layout/images/dashboard/photo-3.png\" alt=\"mirage-layout\" />\n                                            </div>\n                                            <div class=\"p-col-6 p-lg-3\">\n                                                <img src=\"assets/layout/images/dashboard/photo-4.png\" alt=\"mirage-layout\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"timeline-row\">\n                        <div class=\"p-grid p-nogutter\">\n                            <div class=\"p-col-1\">\n                                <div class=\"timeline-icon comment-icon\">\n                                    <i class=\"pi pi-comment\"></i>\n                                </div>\n                            </div>\n                            <div class=\"p-col-11\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-10 timeline-content\">\n                                        <h6>Brandon Williams</h6>\n                                        <span>Ab nobis, magnam sunt eum. Laudantium, repudiandae,\n                                                    similique!</span>\n                                    </div>\n                                    <div class=\"p-col-2 timeline-time\">\n                                        <span>8 mins</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"timeline-row\">\n                        <div class=\"p-grid p-nogutter\">\n                            <div class=\"p-col-1\">\n                                <div class=\"timeline-icon chart-icon\">\n                                    <i class=\"pi pi-chart-line\"></i>\n                                </div>\n                            </div>\n                            <div class=\"p-col-11\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-10 timeline-content\">\n                                        <h6>Katherine May</h6>\n                                        <span>Omnis veniam quibusdam ratione est repellat qui nam quisquam ab\n                                                    mollitia dolores ullam voluptates, similique, disnissimos.</span>\n                                    </div>\n                                    <div class=\"p-col-2 timeline-time\">\n                                        <span>14 mins</span>\n                                    </div>\n                                    <div class=\"p-col-12 timeline-images\">\n                                        <div class=\"p-grid \">\n                                            <div class=\"p-col-12 \">\n                                                <div class=\"new\">\n                                                    New!\n                                                </div>\n                                                <img src=\"assets/layout/images/dashboard/photo-5.png\" alt=\"mirage-layout\" style=\"min-height: 150px;\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"timeline-row\">\n                        <div class=\"p-grid p-nogutter\">\n                            <div class=\"p-col-1\">\n                                <div class=\"timeline-icon comment-icon\">\n                                    <i class=\"pi pi-comment\"></i>\n                                </div>\n                            </div>\n                            <div class=\"p-col-11\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-10 timeline-content\">\n                                        <h6>Lara Cohen</h6>\n                                        <span>Quibusdam ratione est repellat qui nam quisquam veniam quibusdam\n                                                    ratione</span>\n                                    </div>\n                                    <div class=\"p-col-2 timeline-time\">\n                                        <span>1 day</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4 p-md-6\">\n        <div class=\"card widget-tasks\">\n            <div class=\"card-header\">\n                <div class=\"title\">\n                    <h5>Tasks</h5>\n                </div>\n                <div class=\" task-info\">\n                    <span>You have</span><span class=\"highlighted\"> 2 tasks</span><span> today</span>\n                </div>\n            </div>\n            <ul class=\"checkboxes\">\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Sales Report</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time\">Today</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row even\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Pay Invoices</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time\">Today</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Customer Meeting</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row even\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Expense Reports</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Plane tickets</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row even\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Dinner with Tony</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Dentist</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row even\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Lunch with John</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Customer service</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4 p-md-6\">\n        <div class=\"card widget-support-request\">\n            <div class=\"p-grid p-nogutter\">\n                <div class=\"p-col-6 title\">\n                    <h5>Support Request</h5>\n                </div>\n                <div class=\"p-col-6 support-info\">\n                    <p>⏰ Estimated wait time</p>\n                    <span class=\"highlighted\">21 minutes</span>\n                </div>\n            </div>\n\n            <label for=\"resolution-username\">Username</label>\n            <input pInputText type=\"text\" id=\"resolution-username\" placeholder=\"Type your username...\" />\n\n            <label for=\"resolution-message\">Message</label>\n            <textarea type=\"text\" pInputTextarea id=\"resolution-message\" [rows]=\"8\" placeholder=\"Type your message...\" [autoResize]=\"false\" ></textarea>\n\n            <div class=\"resolution-button-bar\">\n                <button type=\"button\" label=\"Send Request\" icon=\"pi pi-star\" pButton></button>\n                <button type=\"button\" label=\"Save as Draft\" pButton class=\"p-button-secondary p-button-text\"></button>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"card widget-team\">\n            <h5>Team Members</h5>\n            <ul>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-carmelita.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Carmelita Marsham</h6>\n                                <span class=\"team-member-role\">Sales</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-govzden.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Gvozden Boskovsky</h6>\n                                <span class=\"team-member-role\">Marketing</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-athar.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Athar Makakooti</h6>\n                                <span class=\"team-member-role\">Marketing</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-tokunaga.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Tokunaga Yae</h6>\n                                <span class=\"team-member-role\">Unknown</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-olisha.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Olisha Farmer</h6>\n                                <span class=\"team-member-role\">Design</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-8\">\n        <div class=\"card widget-store-items\">\n            <div class=\"p-grid p-nogutter\">\n                <div class=\"p-col-6 title\">\n                    <h5>Store Items</h5>\n                </div>\n                <div class=\"p-col-6 store-info\">\n                    <div class=\"info-item add\"><i class=\"pi pi-plus\"></i> Add Item</div>\n                    <div class=\"info-item library\">\n                        <img src=\"assets/layout/images/dashboard/icon-library.svg\" alt=\"mirage-layout\" />\n                        Library</div>\n                </div>\n            </div>\n\n            <div class=\"store-cards-container\">\n                <div class=\"p-grid store-cards\">\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-sugar.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Sugar</h5>\n                                <span>Collector's Edition</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-seed.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Seed</h5>\n                                <span>Pretty rare type</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-egg.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Egg</h5>\n                                <span>Chicken babies</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-americano.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Americano</h5>\n                                <span>Best coffee type</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-orange-slice.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Orange</h5>\n                                <span>Slice of slice</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-espresso.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Espresso</h5>\n                                <span>Quic awakening</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-brussel.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Brussels Sprouts</h5>\n                                <span>For soups</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-cherry.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Cherry</h5>\n                                <span>Summer fruit</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-americano.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Americano</h5>\n                                <span>Best coffee type</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-egg.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Egg</h5>\n                                <span>Chicken babies</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-seed.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Seed</h5>\n                                <span>Pretty rare type</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-sugar.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Sugar</h5>\n                                <span>Collector's Edition</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"list-effect\"></div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"card widget-download-files\">\n            <div class=\"card-header\">\n                <div class=\"title\">\n                    <h5>Download Files</h5>\n                </div>\n                <div class=\"files-info\">\n                    <span>Download All</span>\n                </div>\n            </div>\n            <ul>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-sapphire.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Sapphire Documentation</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-mirage.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-8 file-name\">\n                            <h6 class=\"name\">Mirage Marketing Asset</h6>\n                        </div>\n                        <div class=\"p-col-2 new\">\n                            <div class=\"new-tag\">\n                                New\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-primefaces.svg\"\n                                            alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">PrimeFaces Elite Report 2019-Q3</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-ngconf.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">NG-Conf 2020 Presentation</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-internship.svg\"\n                                            alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Internship Reviews</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-design.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Design Team | Spring 021</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-art.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">M02-Feedback Session</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-process.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">.gitignore</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-cd.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Mirage Playlist on Spotify</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-movie.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Launch Movie</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-padlock.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Keychain 00279.88</h6>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <div class=\"list-effect\"></div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-3 p-md-6\">\n        <div class=\"card widget-card-graph graph-1\">\n            <div class=\"graph-header\">\n                <h5>Orders</h5>\n                <div class=\"graph\">\n                    <div class=\"graph-border\">\n                        <div class=\"graph-block\"></div>\n                    </div>\n                    <div class=\"graph-center\"></div>\n                </div>\n            </div>\n            <div class=\"graph-content\">\n                <div class=\"graph-icon\">\n                    <img src=\"assets/layout/images/dashboard/primeicons-apple.svg\" alt=\"mirage-layout\" />\n                </div>\n                <div class=\"graph-content-text\">\n                    <h5>49.2k</h5>\n                    <hr />\n                    <span><i class=\"pi pi-arrow-up\"></i> 42% more than last month</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-3 p-md-6\">\n        <div class=\"card widget-card-graph graph-2\">\n            <div class=\"graph-header\">\n                <h5>Graph Type 2</h5>\n                <div class=\"graph\">\n                    <div class=\"graph-border\"></div>\n                    <div class=\"graph-center\"></div>\n                </div>\n            </div>\n            <div class=\"graph-content\">\n                <div class=\"graph-icon\">\n                    <img src=\"assets/layout/images/dashboard/primeicons-camera.svg\" alt=\"mirage-layout\" />\n                </div>\n                <div class=\"graph-content-text\">\n                    <h5>62.291</h5>\n                    <hr />\n                    <span><i class=\"pi pi-arrow-up\"></i> 33% more than last month</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-3 p-md-6\">\n        <div class=\"card widget-card-graph graph-3\">\n            <div class=\"graph-header\">\n                <h5>Graph Type 3</h5>\n                <div class=\"graph\">\n                    <div class=\"graph-border\"></div>\n                    <div class=\"graph-center\"></div>\n                </div>\n            </div>\n            <div class=\"graph-content\">\n                <div class=\"graph-icon\">\n                    <img src=\"assets/layout/images/dashboard/primeicons-sitemap.svg\" alt=\"mirage-layout\" />\n                </div>\n                <div class=\"graph-content-text\">\n                    <h5>18.7k</h5>\n                    <hr />\n                    <span><i class=\"pi pi-arrow-up\"></i> 7% more than last month</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-3 p-md-6\">\n        <div class=\"card widget-card-graph graph-4\">\n            <div class=\"graph-header\">\n                <img src=\"assets/layout/images/dashboard/asset-bars-all.svg\" alt=\"mirage-layout\" />\n                <div class=\"title-tag\">Graph Type 4</div>\n            </div>\n            <div class=\"graph-content\">\n                <div class=\"graph-icon\">\n                    <img src=\"assets/layout/images/dashboard/primeicons-chart-bar.svg\" alt=\"mirage-layout\" />\n                </div>\n                <div class=\"graph-content-text\">\n                    <h5>5.0k</h5>\n                    <hr />\n                    <span class=\"jun\">Jun</span>\n                    <span><i class=\"pi pi-arrow-up\"></i> 36% more than last month</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-8\">\n        <div class=\"card orders-table\">\n            <h5>Orders Table</h5>\n            <p-table [value]=\"products\" [paginator]=\"true\" [rows]=\"5\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th>Logo</th>\n                        <th pSortableColumn=\"name\">Name\n                            <p-sortIcon field=\"name\"></p-sortIcon>\n                        </th>\n                        <th pSortableColumn=\"category\">Category\n                            <p-sortIcon field=\"category\"></p-sortIcon>\n                        </th>\n                        <th pSortableColumn=\"price\">Price\n                            <p-sortIcon field=\"price\"></p-sortIcon>\n                        </th>\n                        <th>View</th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-product>\n                    <tr>\n                        <td>\n                            <img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.image\" width=\"50px\" />\n                        </td>\n                        <td>{{product.name}}</td>\n                        <td>{{product.category}}</td>\n                        <td>{{product.price | currency:'USD'}}</td>\n                        <td>\n                            <button pButton type=\"button\" icon=\"pi pi-search\" class=\"p-button-success p-mr-2 p-mb-1\"></button>\n                            <button pButton type=\"button\" icon=\"pi pi-times\" class=\"p-button-danger p-mb-1\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"card map\">\n            <div class=\"map-image\">\n                <img src=\"assets/layout/images/dashboard/mask-map.png\" alt=\"mirage-layout\" />\n            </div>\n\n            <div class=\"map-info\">\n                <div class=\"p-grid p-nogutter map-info-header\">\n                    <div class=\"p-col-6\">\n                        <h6>Vondelpark</h6>\n                        <span>Amsterdam | Netherlands</span>\n                    </div>\n                    <div class=\"p-col-6 location-change\">\n                        <i class=\"pi pi-map-maker\"></i>\n                        <span>Change Location</span>\n                    </div>\n                </div>\n                <div class=\"p-grid p-nogutter map-info-bar\">\n                    <div class=\"p-col-4 info\">\n                        <div class=\"location-point point-1\"></div>\n                        <span>Location 1</span>\n                    </div>\n                    <div class=\"p-col-4 info\">\n                        <div class=\"location-point point-2\"></div>\n                        <span>Location 2</span>\n                    </div>\n\n                    <div class=\"p-col-4 info\">\n                        <div class=\"location-point point-3\"></div>\n                        <span>Location 3</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "6dag":
    /*!*********************************************************!*\
      !*** ./src/app/paginas/relacion/relacion.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function dag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxhY2lvbi5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "6pyg":
    /*!********************************************************!*\
      !*** ./src/app/paginas/derechos/derechos.component.ts ***!
      \********************************************************/

    /*! exports provided: DerechosComponent */

    /***/
    function pyg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DerechosComponent", function () {
        return DerechosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_derechos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./derechos.component.html */
      "PqK1");
      /* harmony import */


      var _derechos_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./derechos.component.css */
      "V7uT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/objOptions */
      "u28Z");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");

      var DerechosComponent = /*#__PURE__*/function () {
        function DerechosComponent(componentePrincipal, lompadservice) {
          _classCallCheck(this, DerechosComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.ObjOptions = new src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"]();
        }

        _createClass(DerechosComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            this.objderechos = this.lompadservice.objPricipal['DATA']['rights'];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy Derechos");
            this.lompadservice.objPricipal['DATA']['rights'] = this.objderechos;
            this.lompadservice.saveObjectLompad(this.objderechos, "rights");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDatos();
            this.decision = [{
              label: 'si',
              value: 'yes',
              code: 'yes'
            }, {
              label: 'no',
              value: 'no',
              code: 'no'
            }];
            this.coste = [{
              label: 'si',
              value: 'yes',
              code: 'yes'
            }, {
              label: 'no',
              value: 'no',
              code: 'no'
            }]; // this.objderechos=this.lompadservice.getDerechos();

            console.log("DEsde Derechos: ", this.objderechos);
            this.ObjOptions = this.componentePrincipal.objOptions;
            this.costeSelect = this.objderechos['Cost'];
            this.decisionSelect = this.objderechos['Copyright and Other Restrictions'];
          }
        }, {
          key: "cambio_costeSelect",
          value: function cambio_costeSelect() {
            console.log(this.costeSelect);
            this.objderechos['Cost'] = this.costeSelect;
          }
        }, {
          key: "cambio_decisionSelect",
          value: function cambio_decisionSelect() {
            console.log(this.decisionSelect);
            this.objderechos['Copyright and Other Restrictions'] = this.decisionSelect;
          }
        }]);

        return DerechosComponent;
      }();

      DerechosComponent.ctorParameters = function () {
        return [{
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__["LompadService"]
        }];
      };

      DerechosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-derechos',
        template: _raw_loader_derechos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_derechos_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DerechosComponent);
      /***/
    },

    /***/
    "7APR":
    /*!*****************************************!*\
      !*** ./src/app/app.topbar.component.ts ***!
      \*****************************************/

    /*! exports provided: AppTopBarComponent */

    /***/
    function APR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppTopBarComponent", function () {
        return AppTopBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_topbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.topbar.component.html */
      "lVmz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./servicios/lompad.service */
      "dyE0");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");

      var AppTopBarComponent = /*#__PURE__*/function () {
        function AppTopBarComponent(appMain, componentePrincipal, lompadService, toas, cookieService) {
          _classCallCheck(this, AppTopBarComponent);

          this.appMain = appMain;
          this.componentePrincipal = componentePrincipal;
          this.lompadService = lompadService;
          this.toas = toas;
          this.cookieService = cookieService;
        }

        _createClass(AppTopBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.idiomas = [{
              label: 'es',
              value: {
                id: 1,
                name: 'es',
                code: 'es'
              }
            }, {
              label: 'en',
              value: {
                id: 2,
                name: 'en',
                code: 'en'
              }
            }, {
              label: 'fr',
              value: {
                id: 3,
                name: 'fr',
                code: 'fr'
              }
            }];
            this.perfiles = [{
              label: 'IEEE LOM',
              value: 'IEEE LOM',
              code: 'ieee'
            }, {
              label: 'CanCore',
              value: 'CanCore',
              code: 'cancore'
            }, {
              label: 'SCORM',
              value: 'SCORM',
              code: 'scorm'
            }, {
              label: 'LMRI',
              value: 'LMRI',
              code: 'lmri'
            }]; // this.objprincipal$=this.lompadService.getObjectPrincipal$();
            // this.objprincipal$.subscribe(objto => this.objprincipal=objto);

            this.lompadService.objPricipal$.subscribe(function (param) {
              _this4.objprincipal = param;
            });
            this.lompadService.hash$.subscribe(function (param) {
              _this4.hash = param;
            }); // this.objprincipal=this.lompadService.objPricipal;

            this.lompadService.objPrincipalXML$.subscribe(function (param) {
              _this4.objXML = param;
            });
            this.lompadService.perfil$.subscribe(function (param) {
              _this4.perfilesSelect = param;

              _this4.componentePrincipal.cambioPerfilLocal(param);

              _this4.appMain.cambioPerfil();
            });
            this.display1 = false;
            console.log("DESDE TOOPBAR PERFIL: ", this.perfilesSelect);
            console.log("DESDE TOOPBAR OBJECTO PRINCIPAL JSON: ", this.objprincipal);
            console.log("DESDE TOOPBAR OBJECTO PRINCIPAL XML: ", this.objXML);

            if (this.cookieService.check('perfil')) {
              //Realizo esto solamente para que aparecza en el top bar
              this.lompadService.objPricipal$.unsubscribe();
              this.objprincipal = this.lompadService.objPricipal;
              this.perfilesSelect = this.lompadService.getPerfil();
              this.componentePrincipal.cambioPerfilLocal(this.lompadService.getPerfil());
              this.appMain.cambioPerfil();
              this.hash = this.lompadService.getHash();
            }
          }
        }, {
          key: "mobileMegaMenuItemClick",
          value: function mobileMegaMenuItemClick(index) {
            this.appMain.megaMenuMobileClick = true;
            this.activeItem = this.activeItem === index ? null : index;
          }
        }, {
          key: "cambioIdioma",
          value: function cambioIdioma(event) {
            this.componentePrincipal.cambioIdiomaAplication(event);
          }
        }, {
          key: "cambioPerfil",
          value: function cambioPerfil(event) {
            this.componentePrincipal.cambioPerfil(event);
            this.appMain.cambioPerfil();
          }
        }, {
          key: "runDialog",
          value: function runDialog(param) {
            // this.appMain.saveInfoGeneral();
            // this.lompadService.callComponentMethod("DEsde topbar");
            this.display1 = true;

            if (param === 1) {
              this.band = true;
            } else {
              this.band = false;
            }
          }
        }, {
          key: "descargaJSON",
          value: function descargaJSON() {
            this.lompadService.downloadJSON(); // this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
            // this.service.add({key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
            // this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });

            this.toas.add({
              key: 'tst',
              severity: 'success',
              summary: 'JSON descargado exitosamente',
              detail: 'Message sent'
            });
          }
        }, {
          key: "descargaXML",
          value: function descargaXML() {
            if (this.cookieService.get('tipoArchivo') === 'xml') {
              this.lompadService.downloadXML();
              this.toas.add({
                key: 'tst',
                severity: 'success',
                summary: 'XML descargado exitosamente',
                detail: 'Message sent'
              });
            } else {
              this.toas.add({
                key: 'tst',
                severity: 'error',
                summary: 'Formato no soportado',
                detail: 'Message sent'
              });
            }
          }
        }, {
          key: "descargaZIP",
          value: function descargaZIP() {
            if (this.cookieService.get('tipoArchivo') === 'zip') {
              window.location.href = "http://localhost:8000/private/download?hashed_code=" + this.hash;
              this.toas.add({
                key: 'tst',
                severity: 'success',
                summary: 'ZIP descargado exitosamente',
                detail: 'Message sent'
              });
            } else {
              this.toas.add({
                key: 'tst',
                severity: 'error',
                summary: 'Formato no soportado',
                detail: 'Message sent'
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.lompadService.objPricipal$.unsubscribe();
            this.lompadService.objPrincipalXML$.unsubscribe();
            this.lompadService.perfil$.unsubscribe();
            this.lompadService.hash$.unsubscribe();
          }
        }]);

        return AppTopBarComponent;
      }();

      AppTopBarComponent.ctorParameters = function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_3__["AppMainComponent"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_5__["LompadService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
        }];
      };

      AppTopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-topbar',
        template: _raw_loader_app_topbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
      })], AppTopBarComponent);
      /***/
    },

    /***/
    "7Sq9":
    /*!*****************************************************!*\
      !*** ./src/app/paginas/inicio/inicio.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Sq9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "7s2l":
    /*!*************************************************!*\
      !*** ./src/app/demo/view/filedemo.component.ts ***!
      \*************************************************/

    /*! exports provided: FileDemoComponent */

    /***/
    function s2l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileDemoComponent", function () {
        return FileDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_filedemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./filedemo.component.html */
      "1NmO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var FileDemoComponent = /*#__PURE__*/function () {
        function FileDemoComponent(breadcrumbService, messageService) {
          _classCallCheck(this, FileDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.messageService = messageService;
          this.uploadedFiles = [];
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'File',
            routerLink: ['/uikit/file']
          }]);
        }

        _createClass(FileDemoComponent, [{
          key: "onUpload",
          value: function onUpload(event) {
            var _iterator = _createForOfIteratorHelper(event.files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var file = _step.value;
                this.uploadedFiles.push(file);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.messageService.add({
              severity: 'info',
              summary: 'Success',
              detail: 'File Uploaded'
            });
          }
        }, {
          key: "onBasicUpload",
          value: function onBasicUpload(event) {
            this.messageService.add({
              severity: 'info',
              summary: 'Success',
              detail: 'File Uploaded with Basic Mode'
            });
          }
        }]);

        return FileDemoComponent;
      }();

      FileDemoComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }];
      };

      FileDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_filedemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
      })], FileDemoComponent);
      /***/
    },

    /***/
    "7xPD":
    /*!******************************************************!*\
      !*** ./src/app/paginas/general/general.component.ts ***!
      \******************************************************/

    /*! exports provided: GeneralComponent */

    /***/
    function xPD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralComponent", function () {
        return GeneralComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_general_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./general.component.html */
      "mssk");
      /* harmony import */


      var _general_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./general.component.css */
      "cKra");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_servicios_lompad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/servicios/lompad.service */
      "dyE0");
      /* harmony import */


      var _modelo_objOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../modelo/objOptions */
      "u28Z");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");

      var GeneralComponent = /*#__PURE__*/function () {
        // @HostListener('window:beforeunload', ['$event'])
        // beforeunloadHandler(event) {
        //     console.log("SLIENFO")
        //     // this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
        //     // this.service.add({key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
        //     // this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
        //     // this.toas.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
        // }
        function GeneralComponent(componentePrincipal, lompadservice, toas) {
          _classCallCheck(this, GeneralComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.toas = toas;
          this.estructuras = [];
          this.nivelesAgregacion = [];
          this.ObjOptions = new _modelo_objOptions__WEBPACK_IMPORTED_MODULE_6__["ObjOptions"]();
        }

        _createClass(GeneralComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            // await this.precargaComprobar();
            this.general_obj = this.lompadservice.objPricipal["DATA"]["general"];
          }
        }, {
          key: "precargaComprobar",
          value: function precargaComprobar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        resolve(2);

                        _this5.lompadservice.precarga();
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDatos();
            this.estructuras = [{
              label: "atómica",
              value: "atomic",
              code: "ato"
            }, {
              label: "colección",
              value: "collection",
              code: "coll"
            }, {
              label: "en red",
              value: "networked",
              code: "red"
            }, {
              label: "jerárquica",
              value: "hiperarchical",
              code: "je"
            }, {
              label: "lineal",
              value: "linear",
              code: "li"
            }];
            this.nivelesAgregacion = [{
              label: "1",
              value: "1",
              code: "1"
            }, {
              label: "2",
              value: "2",
              code: "2"
            }, {
              label: "3",
              value: "3",
              code: "3"
            }, {
              label: "4",
              value: "4",
              code: "4"
            }];
            this.columns = [];
            this.ObjOptions = this.componentePrincipal.objOptions; // this.lompadservice.getobject().subscribe(param=>{
            //   this.general_obj=param['DATA']['general'];
            //   console.log('PARAMETRO: ',param);
            // })
            // this.general_obj=this.lompadservice.getObjectGeneral();

            console.log("Desde General: ", this.general_obj); // PILAS CON ESTOS

            this.estructuraSelect = this.general_obj["Structure"];
            this.nivel_select = this.general_obj["Aggregation Level"];
            this.cargarkeywords();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.general_obj["Keyword"] = this.columns;
            this.lompadservice.objPricipal["DATA"]["general"] = this.general_obj;
            console.log("Destroy General");
            this.lompadservice.saveObjectLompad(this.general_obj, "general");
          }
        }, {
          key: "addPalabra",
          value: function addPalabra() {
            this.palabraDialog = true;
          }
        }, {
          key: "cancelPalabra",
          value: function cancelPalabra() {
            this.palabraDialog = false;
          }
        }, {
          key: "removeColumn",
          value: function removeColumn() {
            this.columns.splice(-1, 1);
          }
        }, {
          key: "savePalabra",
          value: function savePalabra() {
            console.log(this.palabra);
            this.palabraDialog = false;
            this.columns.push(this.palabra);
            this.palabra = "";
          }
        }, {
          key: "cargarkeywords",
          value: function cargarkeywords() {
            var _this6 = this;

            var keys = this.general_obj["Keyword"];
            keys.forEach(function (element) {
              console.log("elementos ", element);

              _this6.columns.push(element);
            });
          }
        }, {
          key: "cambioEstructura",
          value: function cambioEstructura() {
            console.log(this.estructuraSelect);
            this.general_obj["Structure"] = this.estructuraSelect;
          }
        }, {
          key: "cambio_nivel",
          value: function cambio_nivel() {
            console.log(this.nivel_select);
            this.general_obj["Aggregation Level"] = this.nivel_select;
            this.toas.add({
              key: "tst",
              severity: "success",
              summary: "NO lo saques papi!!",
              detail: "Message sent"
            }); // this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
            // this.service.add({key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
            // this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
            // this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
          }
        }, {
          key: "saveInfo",
          value: function saveInfo() {// this.lompadservice.setObjectGeneral(this.general_obj);
          }
        }]);

        return GeneralComponent;
      }();

      GeneralComponent.ctorParameters = function () {
        return [{
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: src_app_servicios_lompad_service__WEBPACK_IMPORTED_MODULE_5__["LompadService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }];
      };

      GeneralComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-general",
        template: _raw_loader_general_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        styles: [_general_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GeneralComponent);
      /***/
    },

    /***/
    "82Sa":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.notfound.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Sa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"exception-body notfound\">\n    <div class=\"exception-content\">\n        <div class=\"moon\">\n            <img src=\"assets/layout/images/pages/asset-moon.svg\" alt=\"mirage-layout\" />\n        </div>\n        <div class=\"exception-panel\">\n            <div class=\"exception-panel-content\">\n                <span class=\"tag\">404</span>\n                <h1>Page Not Found</h1>\n                <div class=\"seperator\"></div>\n                <p>Requested resource is not available right now. Please try again later.</p>\n                <button pButton type=\"button\" [routerLink]=\"['/']\" label=\"Go To DashBoard\"></button>\n            </div>\n        </div>\n        <div class=\"desert\"></div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "8Efc":
    /*!******************************************************************!*\
      !*** ./src/app/paginas/clasificacion/clasificacion.component.ts ***!
      \******************************************************************/

    /*! exports provided: ClasificacionComponent */

    /***/
    function Efc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClasificacionComponent", function () {
        return ClasificacionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_clasificacion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./clasificacion.component.html */
      "wwB+");
      /* harmony import */


      var _clasificacion_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./clasificacion.component.css */
      "eDIy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/objOptions */
      "u28Z");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");

      var ClasificacionComponent = /*#__PURE__*/function () {
        function ClasificacionComponent(componentePrincipal, lompadservice) {
          _classCallCheck(this, ClasificacionComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.ObjOptions = new src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"]();
        }

        _createClass(ClasificacionComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            this.objClasification = this.lompadservice.objPricipal['DATA']['classification'];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy ciclo de vida");
            this.lompadservice.objPricipal['DATA']['classification'] = this.objClasification;
            this.lompadservice.saveObjectLompad(this.objClasification, "classification");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDatos();
            this.propositos = [{
              label: 'disciplina',
              value: 'discipline',
              code: 'dis'
            }, {
              label: 'idea',
              value: 'idea',
              code: 'id'
            }, {
              label: 'prerequisito',
              value: 'prerequisite',
              code: 'pre'
            }, {
              label: 'objetivo educativo',
              value: 'educational objective',
              code: 'o_b'
            }, {
              label: 'accesibilidad',
              value: 'accessibility restrictions',
              code: 'acc'
            }, {
              label: 'nivel educativo',
              value: 'educational level',
              code: 'n_ed'
            }, {
              label: 'nivel de habilidad',
              value: 'skill level',
              code: 'n_hab'
            }, {
              label: 'nivel de seguridad',
              value: 'security level',
              code: 'n_seg'
            }, {
              label: 'competencia',
              value: 'competency',
              code: 'n_segsr'
            }];
            this.ObjOptions = this.componentePrincipal.objOptions;
            this.columns = [];
            this.propositosSelect = this.objClasification["Purpose"];
            console.log("DEsde Calsificacion: ", this.objClasification);
          }
        }, {
          key: "addPalabra",
          value: function addPalabra() {
            this.palabraDialog = true;
          }
        }, {
          key: "cancelPalabra",
          value: function cancelPalabra() {
            this.palabraDialog = false;
          }
        }, {
          key: "removeColumn",
          value: function removeColumn() {
            this.columns.splice(-1, 1);
          }
        }, {
          key: "savePalabra",
          value: function savePalabra() {
            console.log(this.palabra);
            this.palabraDialog = false;
            this.columns.push(this.palabra);
            this.palabra = "";
          }
        }, {
          key: "cambio_propositosSelect",
          value: function cambio_propositosSelect() {
            console.log(this.propositosSelect);
            this.objClasification["Purpose"] = this.propositosSelect;
          }
        }]);

        return ClasificacionComponent;
      }();

      ClasificacionComponent.ctorParameters = function () {
        return [{
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__["LompadService"]
        }];
      };

      ClasificacionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-clasificacion',
        template: _raw_loader_clasificacion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clasificacion_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ClasificacionComponent);
      /***/
    },

    /***/
    "8Ygf":
    /*!*****************************************************************!*\
      !*** ./src/app/modulos/objaprendizaje/objaprendizaje.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ObjaprendizajeModule */

    /***/
    function Ygf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjaprendizajeModule", function () {
        return ObjaprendizajeModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ObjaprendizajeModule = function ObjaprendizajeModule() {
        _classCallCheck(this, ObjaprendizajeModule);
      };

      ObjaprendizajeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [// ViewjsonComponent
        ]
      })], ObjaprendizajeModule);
      /***/
    },

    /***/
    "8iZH":
    /*!**************************************************!*\
      !*** ./src/app/utilities/elevation.component.ts ***!
      \**************************************************/

    /*! exports provided: ElevationComponent */

    /***/
    function iZH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElevationComponent", function () {
        return ElevationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_elevation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./elevation.component.html */
      "5Od1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var ElevationComponent = function ElevationComponent(breadcrumbService) {
        _classCallCheck(this, ElevationComponent);

        this.breadcrumbService = breadcrumbService;
        this.boxes = new Array(24);
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'Elevation',
          routerLink: ['/utilities/elevation']
        }]);
      };

      ElevationComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      ElevationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_elevation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        .box {\n            min-height: 100px;\n            min-width: 150px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-weight: 600;\n            margin: 2rem;\n            border-radius: 4px;\n        }\n    "]
      })], ElevationComponent);
      /***/
    },

    /***/
    "8jOm":
    /*!***************************************************!*\
      !*** ./src/app/demo/view/panelsdemo.component.ts ***!
      \***************************************************/

    /*! exports provided: PanelsDemoComponent */

    /***/
    function jOm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelsDemoComponent", function () {
        return PanelsDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_panelsdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./panelsdemo.component.html */
      "eCx7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var PanelsDemoComponent = /*#__PURE__*/function () {
        function PanelsDemoComponent(breadcrumbService) {
          _classCallCheck(this, PanelsDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Panel',
            routerLink: ['/uikit/panel']
          }]);
        }

        _createClass(PanelsDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.items = [{
              label: 'Angular.io',
              icon: 'pi pi-external-link',
              url: 'http://angular.io'
            }, {
              label: 'Theming',
              icon: 'pi pi-bookmark',
              routerLink: ['/theming']
            }];
            this.cardMenu = [{
              label: 'Save',
              icon: 'pi pi-fw pi-check'
            }, {
              label: 'Update',
              icon: 'pi pi-fw pi-refresh'
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            }];
          }
        }]);

        return PanelsDemoComponent;
      }();

      PanelsDemoComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      PanelsDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_panelsdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n\t\t:host ::ng-deep button {\n\t\t\tmargin-right: .25em;\n\t\t\tmargin-left: .25em;\n\t\t}\n\n\t\t:host ::ng-deep .p-splitbutton button {\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t}\n\n        @media screen and (max-width: 960px) {\n            .card.toolbar-demo {\n                overflow: auto;\n            }\n        }\n    "]
      })], PanelsDemoComponent);
      /***/
    },

    /***/
    "8nPe":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/emptydemo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function nPe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h4>Empty Page</h4>\n            <p>This is your empty page template to start building beautiful applications.</p>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var API_BACKEND = "http://localhost:8000";
      var environment = {
        production: false,
        URL_UPLOAD_FILE: "".concat(API_BACKEND, "/uploadfile"),
        URL_READ_FILE: "".concat(API_BACKEND, "/private/read_file"),
        URL_UPDATE_FILE: "".concat(API_BACKEND, "/private/update"),
        URL_DOWNLOAD: "".concat(API_BACKEND, "/private_download")
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Bm+J":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/invalidstatedemo.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BmJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-nogutter\">\n    <div class=\"card\" style=\"width: 100%\">\n        <h5>Invalid State</h5>\n        <p>All form components have an invalid state style to display the validation errors when ng-invalid ng-dirty combination is applied by Angular.</p>\n        <div class=\"p-fluid p-grid\">\n            <div class=\"p-col-12 p-md-6\">\n                <div class=\"p-field\">\n                    <label for=\"inputtext\">InputText</label>\n                    <input type=\"text\" id=\"inputtext\" pInputText class=\"ng-invalid ng-dirty\">\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"autocomplete\">AutoComplete</label>\n                    <p-autoComplete inputId=\"autocomplete\" [(ngModel)]=\"value2\" [suggestions]=\"filteredCountries\" (completeMethod)=\"searchCountry($event)\" field=\"name\" class=\"ng-invalid ng-dirty\"></p-autoComplete>\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"calendar\">Calendar</label>\n                    <p-calendar inputId=\"calendar\" [(ngModel)]=\"value3\" class=\"ng-invalid ng-dirty\" [showIcon]=\"true\"></p-calendar>\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"chips\">Chips</label>\n                    <p-chips inputId=\"chips\" [(ngModel)]=\"value4\" class=\"ng-invalid ng-dirty\"></p-chips>\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"textarea\">Textarea</label>\n                    <textarea inputId=\"textarea\" rows=\"3\" cols=\"30\" [(ngModel)]=\"value9\" pInputTextarea class=\"ng-invalid ng-dirty\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"p-col-12 p-md-6\">\n                <div class=\"p-field\">\n                    <label for=\"inputmask\">InputMask</label>\n                    <p-inputMask inputId=\"inputmask\" mask=\"99/99/9999\" [(ngModel)]=\"value5\" class=\"ng-invalid ng-dirty\"></p-inputMask>\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"inputnumber\">InputNumber</label>\n                    <p-inputNumber inputId=\"inputnumber\" [(ngModel)]=\"value6\" class=\"ng-invalid ng-dirty\"></p-inputNumber>\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"dropdown\">Dropdown</label>\n                    <p-dropdown inputId=\"dropdown\" [autoDisplayFirst]=\"false\" [options]=\"cities\" [(ngModel)]=\"value7\" optionLabel=\"name\" class=\"ng-invalid ng-dirty\"></p-dropdown>\n                </div>\n                <div class=\"p-field\">\n                    <label for=\"multiselect\">MultiSelect</label>\n                    <p-multiSelect inputId=\"multiselect\" [options]=\"cities\" [(ngModel)]=\"value7\" optionLabel=\"name\" [filter]=\"false\" class=\"ng-invalid ng-dirty\"></p-multiSelect>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Bujs":
    /*!********************************************************!*\
      !*** ./src/app/paginas/relacion/relacion.component.ts ***!
      \********************************************************/

    /*! exports provided: RelacionComponent */

    /***/
    function Bujs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelacionComponent", function () {
        return RelacionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_relacion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./relacion.component.html */
      "O+NY");
      /* harmony import */


      var _relacion_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relacion.component.css */
      "6dag");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/objOptions */
      "u28Z");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");

      var RelacionComponent = /*#__PURE__*/function () {
        function RelacionComponent(componentePrincipal, lompadservice) {
          _classCallCheck(this, RelacionComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.ObjOptions = new src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"]();
        }

        _createClass(RelacionComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            this.objRelacion = this.lompadservice.objPricipal['DATA']['relation'];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy Relacion");
            this.lompadservice.objPricipal['DATA']['relation'] = this.objRelacion;
            this.lompadservice.saveObjectLompad(this.objRelacion, "relation");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDatos();
            this.tipos = [{
              label: 'es parte de',
              value: 'ispartof',
              code: 's_p_d'
            }, {
              label: 'tiene parte',
              value: 'haspart',
              code: 't_p'
            }, {
              label: 'es versión de',
              value: 'isversionof',
              code: 'e_v_d'
            }, {
              label: 'tiene versión',
              value: 'hasversion',
              code: 't_v'
            }, {
              label: 'es formato de',
              value: 'isformatof',
              code: 'e_f_d'
            }, {
              label: 'tiene formato',
              value: 'hasformat',
              code: 't_f'
            }, {
              label: 'es referenciado por',
              value: 'is referenced by',
              code: 't234'
            }, {
              label: 'se basa en',
              value: 'is based on',
              code: 't234'
            }, {
              label: 'es base para',
              value: 'is basis for',
              code: 't234'
            }, {
              label: 'requiere',
              value: 'requires',
              code: 't234'
            }, {
              label: 'es requerido por',
              value: 'is required by',
              code: 't234'
            }];
            this.ObjOptions = this.componentePrincipal.objOptions;
            console.log("Desde Relacion: ", this.objRelacion);
            this.tiposSelect = this.objRelacion["Kind"];
          }
        }, {
          key: "cambio_tiposSelect",
          value: function cambio_tiposSelect() {
            console.log(this.tiposSelect);
            this.objRelacion["Kind"] = this.tiposSelect;
          }
        }]);

        return RelacionComponent;
      }();

      RelacionComponent.ctorParameters = function () {
        return [{
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__["LompadService"]
        }];
      };

      RelacionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-relacion',
        template: _raw_loader_relacion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relacion_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RelacionComponent);
      /***/
    },

    /***/
    "CfVz":
    /*!*******************************************************!*\
      !*** ./src/app/demo/view/formlayoutdemo.component.ts ***!
      \*******************************************************/

    /*! exports provided: FormLayoutDemoComponent */

    /***/
    function CfVz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormLayoutDemoComponent", function () {
        return FormLayoutDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formlayoutdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formlayoutdemo.component.html */
      "48V0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var FormLayoutDemoComponent = function FormLayoutDemoComponent(breadcrumbService) {
        _classCallCheck(this, FormLayoutDemoComponent);

        this.breadcrumbService = breadcrumbService;
        this.selectedState = null;
        this.states = [{
          name: 'Arizona',
          code: 'Arizona'
        }, {
          name: 'California',
          value: 'California'
        }, {
          name: 'Florida',
          code: 'Florida'
        }, {
          name: 'Ohio',
          code: 'Ohio'
        }, {
          name: 'Washington',
          code: 'Washington'
        }];
        this.cities1 = [];
        this.cities2 = [];
        this.city1 = null;
        this.city2 = null;
        this.breadcrumbService.setItems([{
          label: 'UI Kit'
        }, {
          label: 'Form Layout',
          routerLink: ['/uikit/formlayout']
        }]);
      };

      FormLayoutDemoComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      FormLayoutDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_formlayoutdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FormLayoutDemoComponent);
      /***/
    },

    /***/
    "CuUz":
    /*!************************************************!*\
      !*** ./src/app/demo/service/countryservice.ts ***!
      \************************************************/

    /*! exports provided: CountryService */

    /***/
    function CuUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountryService", function () {
        return CountryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CountryService = /*#__PURE__*/function () {
        function CountryService(http) {
          _classCallCheck(this, CountryService);

          this.http = http;
        }

        _createClass(CountryService, [{
          key: "getCountries",
          value: function getCountries() {
            return this.http.get('assets/demo/data/countries.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return CountryService;
      }();

      CountryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CountryService);
      /***/
    },

    /***/
    "DByU":
    /*!***************************************!*\
      !*** ./src/app/app.menu.component.ts ***!
      \***************************************/

    /*! exports provided: AppMenuComponent */

    /***/
    function DByU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function () {
        return AppMenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.menu.component.html */
      "WCjU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modelo/objOptions */
      "u28Z");

      var AppMenuComponent = /*#__PURE__*/function () {
        function AppMenuComponent(appMain, app) {
          _classCallCheck(this, AppMenuComponent);

          this.appMain = appMain;
          this.app = app;
          this.ObjOptions = new _modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"](); // this.enableGeneral=true;
        } // AQUI SE PUEDE ADICIONAR LOS DE MAS COMPONENTES QUE VAN EN EL SISTEMA opciones que van en la 
        // barra lateral 


        _createClass(AppMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            // this.serviceGeneral.objOptions$.subscribe(param=>{
            // });
            this.ObjOptions = this.app.objOptions; //Esto es super util 

            this.onChange.subscribe(function (res) {
              // console.log('FUCNIONAAAAAAAA!!!!!',res)
              _this7.recargarMenuLateral();
            }); // console.log("objecti: ",this.ObjOptions)
            // this.ObjOptions=this.serviceGeneral.objOptions;			
            // this.appMain.staticMenuActive=false;
            // this.inicial=[
            //     {label: '1.0. Inicio', icon: 'pi pi-fw pi-file', routerLink: ['/paginas/inicio']}
            // ];

            this.model = [{
              label: '1. General',
              disable: this.ObjOptions.o1,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/general']
            }, {
              label: '2. Ciclo de vida',
              disable: this.ObjOptions.o2,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/livecicle']
            }, {
              label: '3. Meta-Datos',
              disable: this.ObjOptions.o3,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/metadatos']
            }, {
              label: '4. Técnica',
              disable: this.ObjOptions.o4,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/tecnica']
            }, {
              label: '5. Uso Educativo',
              disable: this.ObjOptions.o5,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/usoeducativo']
            }, {
              label: '6. Derechos',
              disable: this.ObjOptions.o6,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/derechos']
            }, {
              label: '7. Relación',
              disable: this.ObjOptions.o7,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/relacion']
            }, {
              label: '8. Anotación',
              disable: this.ObjOptions.o8,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/anotacion']
            }, {
              label: '9. Clasificación',
              disable: this.ObjOptions.o9,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/clasidicacion']
            }, {
              label: '10. Accesibilidad',
              disable: this.ObjOptions.o10,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/accesibilidad']
            } // ,
            // {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            // {
            //     label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
            //     items: [
            //         {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
            //         {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
            //         {label: 'Float Label', icon: 'pi pi-bookmark', routerLink: ['/uikit/floatlabel']},
            //         {label: 'Invalid State', icon: 'pi pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
            //         {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
            //         {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
            //         {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
            //         {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
            //         {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
            //         {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
            //         {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
            //         {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']},
            //         {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
            //         {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
            //         {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
            //         {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']},
            //         {label: 'PRUEBA DE LINK EN GRUPO', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']}
            //     ]
            // },
            // {
            //     label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],
            //     items: [
            //         {label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']},
            //         {label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']},
            //         {label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']},
            //         {label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']},
            //         {label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']},
            //         {label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']},
            //         {label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']},
            //         {label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']},
            //         {label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']}
            //     ]
            // },
            // {
            //     label: 'Pages', icon: 'pi pi-fw pi-copy', routerLink: ['/pages'],
            //     items: [
            //         {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
            //         {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
            //         {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
            //         { label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
            //         { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'], target: '_blank' },
            //         { label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/error'], target: '_blank' },
            //         { label: '404', icon: 'pi pi-fw pi-times', routerLink: ['/404'], target: '_blank' },
            //         {label: 'Access Denied', icon: 'pi pi-fw pi-ban', routerLink: ['/accessdenied'], target: '_blank'},
            //         { label: 'Empty', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/empty'] },
            //     ]
            // },
            // {
            //     label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
            //                     items: [
            //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
            //                     items: [
            //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
            //                     items: [
            //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
            //                     items: [
            //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Docs', icon: 'pi pi-fw pi-file', routerLink: ['/documentation']
            // },
            // {
            //     label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']
            // }
            ]; // Para que el submenu quede estatico    
            // this.appMain.sidebarActive=true;
            // this.appMain.staticMenuActive=true;//este es el mas importante
          }
        }, {
          key: "recargarMenuLateral",
          value: function recargarMenuLateral() {
            this.ObjOptions = this.app.objOptions;
            this.model = [{
              label: '1. General',
              disable: this.ObjOptions.o1,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/general']
            }, {
              label: '2. Ciclo de vida',
              disable: this.ObjOptions.o2,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/livecicle']
            }, {
              label: '3. Meta-Datos',
              disable: this.ObjOptions.o3,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/metadatos']
            }, {
              label: '4. Técnica',
              disable: this.ObjOptions.o4,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/tecnica']
            }, {
              label: '5. Uso Educativo',
              disable: this.ObjOptions.o5,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/usoeducativo']
            }, {
              label: '6. Derechos',
              disable: this.ObjOptions.o6,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/derechos']
            }, {
              label: '7. Relación',
              disable: this.ObjOptions.o7,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/relacion']
            }, {
              label: '8. Anotación',
              disable: this.ObjOptions.o8,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/anotacion']
            }, {
              label: '9. Clasificación',
              disable: this.ObjOptions.o9,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/clasidicacion']
            }, {
              label: '10. Accesibilidad',
              disable: this.ObjOptions.o10,
              icon: 'pi pi-fw pi-file',
              routerLink: ['/paginas/accesibilidad']
            }];
          }
        }, {
          key: "onMenuClick",
          value: function onMenuClick() {
            this.appMain.menuClick = true;
          }
        }]);

        return AppMenuComponent;
      }();

      AppMenuComponent.ctorParameters = function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_3__["AppMainComponent"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }];
      };

      AppMenuComponent.propDecorators = {
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      AppMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_app_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppMenuComponent);
      /***/
    },

    /***/
    "DlPI":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/inputdemo.component.ts ***!
      \**************************************************/

    /*! exports provided: InputDemoComponent */

    /***/
    function DlPI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputDemoComponent", function () {
        return InputDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inputdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inputdemo.component.html */
      "Dzrm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_countryservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/countryservice */
      "CuUz");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var InputDemoComponent = /*#__PURE__*/function () {
        function InputDemoComponent(countryService, breadcrumbService) {
          _classCallCheck(this, InputDemoComponent);

          this.countryService = countryService;
          this.breadcrumbService = breadcrumbService;
          this.valSlider = 50;
          this.valColor = '#424242';
          this.valCheck = [];
          this.selectedMulti = [];
          this.valToggle = false;
          this.valueKnob = 20;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Input',
            routerLink: ['/uikit/input']
          }]);
        }

        _createClass(InputDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.countryService.getCountries().then(function (countries) {
              _this8.countries = countries;
            });
            this.cities = [{
              label: 'New York',
              value: {
                id: 1,
                name: 'New York',
                code: 'NY'
              }
            }, {
              label: 'Rome',
              value: {
                id: 2,
                name: 'Rome',
                code: 'RM'
              }
            }, {
              label: 'London',
              value: {
                id: 3,
                name: 'London',
                code: 'LDN'
              }
            }, {
              label: 'Istanbul',
              value: {
                id: 4,
                name: 'Istanbul',
                code: 'IST'
              }
            }, {
              label: 'Paris',
              value: {
                id: 5,
                name: 'Paris',
                code: 'PRS'
              }
            }];
            this.paymentOptions = [{
              name: 'Option 1',
              value: 1
            }, {
              name: 'Option 2',
              value: 2
            }, {
              name: 'Option 3',
              value: 3
            }];
          }
        }, {
          key: "filterCountry",
          value: function filterCountry(event) {
            var filtered = [];
            var query = event.query;

            for (var i = 0; i < this.countries.length; i++) {
              var country = this.countries[i];

              if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
              }
            }

            this.filteredCountries = filtered;
          }
        }]);

        return InputDemoComponent;
      }();

      InputDemoComponent.ctorParameters = function () {
        return [{
          type: _service_countryservice__WEBPACK_IMPORTED_MODULE_3__["CountryService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }];
      };

      InputDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_inputdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [":host ::ng-deep .p-multiselect {\n\t\tmin-width: 15rem;\n\t}\n\n\t:host ::ng-deep .multiselect-custom-virtual-scroll .p-multiselect {\n\t\tmin-width: 20rem;\n\t}\n\n\t:host ::ng-deep .multiselect-custom .p-multiselect-label {\n\t\tpadding-top: .25rem;\n\t\tpadding-bottom: .25rem;\n\n\t}\n\n\n\t:host ::ng-deep .multiselect-custom .country-item.country-item-value {\n\t\tpadding: .25rem .5rem;\n\t\tborder-radius: 3px;\n\t\tdisplay: inline-flex;\n\t\tmargin-right: .5rem;\n\t\tbackground-color: var(--primary-color);\n\t\tcolor: var(--primary-color-text);\n\t}\n\n\t:host ::ng-deep .multiselect-custom .country-item.country-item-value img.flag {\n\t\twidth: 17px;\n\t}\n\n\t:host ::ng-deep .multiselect-custom .country-item {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t:host ::ng-deep .multiselect-custom .country-item img.flag {\n\t\twidth: 18px;\n\t\tmargin-right: .5rem;\n\t}\n\n\t:host ::ng-deep .multiselect-custom .country-placeholder {\n\t\tpadding: 0.25rem;\n\t}\n\n\t:host ::ng-deep .p-colorpicker {\n\t\twidth: 2.5em\n\t}\n    "]
      })], InputDemoComponent);
      /***/
    },

    /***/
    "Dzrm":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/inputdemo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dzrm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-fluid\">\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>InputText</h5>\n            <div class=\"p-grid p-formgrid\">\n                <div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\n                    <input type=\"text\" pInputText placeholder=\"Default\">\n                </div>\n                <div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\n                    <input type=\"text\" pInputText placeholder=\"Disabled\" [disabled]=\"true\" />\n                </div>\n                <div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\n                    <input type=\"text\" pInputText placeholder=\"Invalid\" class=\"p-invalid\" />\n                </div>\n            </div>\n\n            <h5>Icons</h5>\n            <div class=\"p-grid p-formgrid\">\n                <div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\n                    <span class=\"p-input-icon-left\">\n\t\t\t\t\t\t<i class=\"pi pi-user\"></i>\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Username\"/>\n\t\t\t\t\t</span>\n                </div>\n                <div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\n                    <span class=\"p-input-icon-right\">\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Search\"/>\n\t\t\t\t\t\t<i class=\"pi pi-search\"></i>\n\t\t\t\t\t</span>\n                </div>\n                <div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\n                    <span class=\"p-input-icon-left p-input-icon-right\">\n\t\t\t\t\t\t<i class=\"pi pi-user\"></i>\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Search\"/>\n\t\t\t\t\t\t<i class=\"pi pi-search\"></i>\n\t\t\t\t\t</span>\n                </div>\n            </div>\n\n            <h5>Float Label</h5>\n            <span class=\"p-float-label\">\n\t\t\t\t<input id=\"float-input\" type=\"text\" pInputText>\n\t\t\t\t<label for=\"float-input\">Username</label>\n\t\t\t</span>\n\n            <h5>Textarea</h5>\n            <textarea rows=\"5\" cols=\"30\" placeholder=\"Your Message\" pInputTextarea></textarea>\n\n            <h5>AutoComplete</h5>\n            <p-autoComplete [(ngModel)]=\"selectedCountryAdvanced\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\" [dropdown]=\"true\">\n            </p-autoComplete>\n\n            <h5>Calendar</h5>\n            <p-calendar [showIcon]=\"true\" inputId=\"icon\"></p-calendar>\n\n            <h5>InputNumber</h5>\n            <p-inputNumber mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"100\">\n            </p-inputNumber>\n\n            <h5>Chips</h5>\n            <p-chips></p-chips>\n        </div>\n\n\n        <div class=\"card\">\n            <div class=\"p-grid\">\n                <div class=\"p-col-12\">\n                    <h5>Slider de naty</h5>\n                    <input type=\"text\" pInputText [(ngModel)]=\"valSlider\" readonly/>\n                    <p-slider [(ngModel)]=\"valSlider\"></p-slider>\n                </div>\n                <div class=\"p-col-12 p-md-6\">\n                    <h5>Rating</h5>\n                    <p-rating></p-rating>\n                </div>\n                <div class=\"p-col-12 p-md-6\">\n                    <h5>ColorPicker</h5>\n                    <p-colorPicker [(ngModel)]=\"valColor\"></p-colorPicker>\n                </div>\n                <div class=\"p-col-12\">\n                    <h5>Knob</h5>\n                    <p-knob [(ngModel)]=\"valueKnob\" valueTemplate=\"{value}%\" [step]=\"10\" [min]=\"-50\" [max]=\"50\"></p-knob>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>RadioButton naty</h5>\n            <div class=\"p-grid\">\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton name=\"city\" value=\"Chicago\" [(ngModel)]=\"valRadio\" id=\"city1\"></p-radioButton>\n                        <label for=\"city1\">Chicago</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton name=\"city\" value=\"Los Angeles\" [(ngModel)]=\"valRadio\" id=\"city2\"></p-radioButton>\n                        <label for=\"city2\">Los Angeles</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton name=\"city\" value=\"New York\" [(ngModel)]=\"valRadio\" id=\"city3\"></p-radioButton>\n                        <label for=\"city3\">New York</label>\n                    </div>\n                </div>\n            </div>\n\n            <h5>Checkbox</h5>\n            <div class=\"p-grid\">\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-checkbox\">\n                        <p-checkbox name=\"group1\" value=\"New York\" [(ngModel)]=\"valCheck\" id=\"ny\"></p-checkbox>\n                        <label for=\"ny\">New York</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-checkbox\">\n                        <p-checkbox name=\"group1\" value=\"San Francisco\" [(ngModel)]=\"valCheck\" id=\"sf\"></p-checkbox>\n                        <label for=\"sf\">San Francisco</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-checkbox\">\n                        <p-checkbox name=\"group1\" value=\"Los Angeles\" [(ngModel)]=\"valCheck\" id=\"la\"></p-checkbox>\n                        <label for=\"la\">Los Angeles</label>\n                    </div>\n                </div>\n            </div>\n\n            <h5>Input Switch</h5>\n            <p-inputSwitch [(ngModel)]=\"valSwitch\"></p-inputSwitch>\n        </div>\n\n        <div class=\"card\">\n            <h5>Listbox</h5>\n            <p-listbox [options]=\"cities\" [(ngModel)]=\"selectedList\" [filter]=\"true\"></p-listbox>\n\n            <h5>Dropdown</h5>\n            <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedDrop\" placeholder=\"Select a City\" [showClear]=\"true\"></p-dropdown>\n\n\n            <h5>Multiselect</h5>\n            <p-multiSelect [options]=\"countries\" [(ngModel)]=\"selectedMulti\" defaultLabel=\"Select a Country\" optionLabel=\"name\" class=\"multiselect-custom\">\n                <ng-template let-value pTemplate=\"selectedItems\">\n                    <div class=\"country-item country-item-value\" *ngFor=\"let option of selectedMulti\">\n                        <img src=\"assets/demo/flags/flag_placeholder.png\" [class]=\"'flag flag-' + option.code.toLowerCase()\" />\n                        <div>{{option.name}}</div>\n                    </div>\n                    <div *ngIf=\"!selectedMulti || selectedMulti.length === 0\" class=\"country-placeholder\">\n                        Select Countries\n                    </div>\n                </ng-template>\n                <ng-template let-country pTemplate=\"item\">\n                    <div class=\"country-item\">\n                        <img src=\"assets/demo/flags/flag_placeholder.png\" [class]=\"'flag flag-' + country.code.toLowerCase()\" />\n                        <div>{{country.name}}</div>\n                    </div>\n                </ng-template>\n            </p-multiSelect>\n        </div>\n\n        <div class=\"card\">\n            <h5>ToggleButton</h5>\n            <p-toggleButton [(ngModel)]=\"valToggle\" onLabel=\"Yes\" offLabel=\"No\" [style]=\"{'width': '10em'}\"></p-toggleButton>\n\n            <h5>SelectOneButton</h5>\n            <p-selectButton [options]=\"paymentOptions\" [(ngModel)]=\"valSelect1\" multiple=\"multiple\" optionLabel=\"name\"></p-selectButton>\n\n            <h5>SelectManyButton</h5>\n            <p-selectButton [options]=\"paymentOptions\" [(ngModel)]=\"valSelect2\" multiple=\"multiple\" optionLabel=\"name\"></p-selectButton>\n\n        </div>\n    </div>\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>InputGroup</h5>\n            <div class=\"p-grid p-fluid\">\n                <div class=\"p-col-12 p-md-6\">\n                    <div class=\"p-inputgroup\">\n                        <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\n                        <input type=\"text\" pInputText placeholder=\"Username\">\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-6\">\n                    <div class=\"p-inputgroup\">\n                        <span class=\"p-inputgroup-addon\"><i class=\"pi pi-tags\" style=\"line-height: 1.25;\"></i></span>\n                        <span class=\"p-inputgroup-addon\"><i class=\"pi pi-shopping-cart\" style=\"line-height: 1.25;\"></i></span>\n                        <input type=\"text\" pInputText placeholder=\"Price\">\n                        <span class=\"p-inputgroup-addon\">$</span>\n                        <span class=\"p-inputgroup-addon\">.00</span>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-6\">\n                    <div class=\"p-inputgroup\">\n                        <button type=\"button\" pButton pRipple label=\"Search\"></button>\n                        <input type=\"text\" pInputText placeholder=\"Keyword\">\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-6\">\n                    <div class=\"p-inputgroup\">\n                        <span class=\"p-inputgroup-addon\"><p-checkbox></p-checkbox></span>\n                        <input type=\"text\" pInputText placeholder=\"Username\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";
      /***/
    },

    /***/
    "EwiA":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/tecnica/tecnica.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function EwiA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div *ngIf=\"ObjOptions.o4_1\" class=\"p-col-12\">\n        <h5>{{\"Formato\" | translate}}</h5>\n        <div class=\"card\">\n            <!-- <h4>PIAS HAY QUE PREGUNTAR SOBRE ESTE CAMPO</h4> -->\n            <div class=\"p-field p-fluid\">\n                <label for=\"esquema\">{{\"Esquema\" | translate}}</label>\n                <input [(ngModel)]='objTecnica[\"Format\"]' id=\"esquema\" type=\"esquema\" pInputText aria-describedby=\"username-help\">\n                <!-- <small id=\"username-help\">Enter your username to reset your password.</small> -->\n            </div>\n        </div>\n    </div>\n\n    <!-- perfiles da lo mismo en tamaño y localizacion -->\n\n    <div *ngIf=\"ObjOptions.o4_2\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Tamaño\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <input [(ngModel)]='objTecnica[\"Size\"]' id=\"tamanio\" type=\"text\" pInputText>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"ObjOptions.o4_3\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Localización\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <input [(ngModel)]='objTecnica[\"Location\"]' id=\"localizacion\" type=\"text\" pInputText>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n    <div *ngIf=\"ObjOptions.o4_4\" class=\"p-col-12\">\n        <h5>{{\"Requisitos\" | translate}}</h5>\n        <div class=\"card\">\n            <h6>{{\"Agregador Or\" | translate}}</h6>\n            <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <label for=\"tipo\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Tipo\" | translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <p-dropdown id=\"tipo\" [(ngModel)]='req_tipo_select' name='req_tipo_select' [options]=\"tiposOr\" (onChange)='cambioreq_tipo_select()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                            <ng-template pTemplate=\"item\" let-item>\n                                {{item.label| translate }}\n                            </ng-template>\n                            <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                                {{selectedItem.label | translate }}\n                            </ng-template>\n                        </p-dropdown>\n                    </div>\n                </div>\n                <div class=\"p-field p-grid\">\n                    <label for=\"nombre\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Nombre\" | translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <p-dropdown id=\"tipo\" [(ngModel)]='nombreSelect' name='req_tipo_select' [options]=\"tiposSystem\" (onChange)='cambioreq_nombre()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                            <ng-template pTemplate=\"item\" let-item>\n                                {{item.label| translate }}\n                            </ng-template>\n                            <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                                {{selectedItem.label | translate }}\n                            </ng-template>\n                        </p-dropdown>\n                    </div>\n                </div>\n                <div class=\"p-field p-grid\">\n                    <label for=\"ver_minima\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Versión Mínima\" | translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"ver_minima\" [(ngModel)]='objTecnica[\"Requirement\"][\"OrComposite\"][\"Minimum Version\"]' type=\"text\" pInputText>\n                    </div>\n                </div>\n                <div class=\"p-field p-grid\">\n                    <label for=\"ver_maxima\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Versión Máxima\" | translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"ver_maxima\" [(ngModel)]='objTecnica[\"Requirement\"][\"OrComposite\"][\"Maximum Version\"]' type=\"text\" pInputText>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"ObjOptions.o4_5\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Pautas de Instalación\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <label for=\"descripcion\">{{\"Descripción\" | translate}}</label>\n                    <textarea [(ngModel)]='objTecnica[\"Installation Remarks\"]' id=\"descripcion\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"ObjOptions.o4_6\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Otros Requisitos de Plataforma\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <label for=\"descripcion\">{{\"Descripción\" | translate}}</label>\n                    <textarea [(ngModel)]='objTecnica[\"Other Platform Requirements\"]' id=\"descripcion\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o4_7\" class=\"p-col-12\">\n        <h5>{{\"Duración\"| translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid p-formgrid p-grid\">\n                <div class=\"p-field p-col\">\n                    <label for=\"anios\">{{\"Años\" | translate}}</label>\n                    <p-inputNumber id=\"anios\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"100\" [(ngModel)]='years'></p-inputNumber>\n                </div>\n                <div class=\"p-field p-col\">\n                    <label for=\"meses\">{{\"Meses\" | translate}}</label>\n                    <p-inputNumber id=\"meses\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"12\" [(ngModel)]='months'></p-inputNumber>\n                </div>\n\n                <div class=\"p-field p-col\">\n                    <label for=\"dias\">{{\"Días\" | translate}}</label>\n                    <p-inputNumber id=\"dias\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"30\" [(ngModel)]='days'></p-inputNumber>\n                </div>\n                <div class=\"p-field p-col\">\n                    <label for=\"horas\">{{\"Horas\"| translate}}</label>\n                    <p-inputNumber id=\"horas\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"24\" [(ngModel)]='hours'></p-inputNumber>\n                </div>\n                <div class=\"p-field p-col\">\n                    <label for=\"minutos\">{{\"Minutos\" | translate}}</label>\n                    <p-inputNumber id=\"minutos\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"60\" [(ngModel)]='minutes'></p-inputNumber>\n                </div>\n                <!-- <div class=\"p-field p-col\">\n                    <label for=\"segundos\">{{\"Segundos\"| translate}}</label>\n                    <p-inputNumber id=\"segundos\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"60\" [(ngModel)]='second'></p-inputNumber>\n                </div> -->\n            </div>\n\n\n            <!-- <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <label for=\"descripcion\">{{\"Descripción\" | translate}}</label>\n                    <textarea id=\"descripcion\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                </div>\n            </div> -->\n\n\n        </div>\n    </div>\n\n\n</div>";
      /***/
    },

    /***/
    "FT+5":
    /*!**********************************************************!*\
      !*** ./src/app/paginas/livecicle/livecicle.component.ts ***!
      \**********************************************************/

    /*! exports provided: LivecicleComponent */

    /***/
    function FT5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LivecicleComponent", function () {
        return LivecicleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_livecicle_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./livecicle.component.html */
      "5NUu");
      /* harmony import */


      var _livecicle_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./livecicle.component.css */
      "e8/H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/objOptions */
      "u28Z");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");

      var LivecicleComponent = /*#__PURE__*/function () {
        function LivecicleComponent(componentePrincipal, lompadservice) {
          _classCallCheck(this, LivecicleComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.ObjOptions = new src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"]();
        }

        _createClass(LivecicleComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            this.objLiveClicle = this.lompadservice.objPricipal['DATA']['lifeCycle'];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tipos = [{
              label: 'Autor',
              value: 'author',
              code: 'au'
            }, {
              label: 'Revisor',
              value: 'validator',
              code: 'rv'
            }, {
              label: 'Desconocido',
              value: 'unknown',
              code: 'des'
            }, {
              label: 'iniciador',
              value: 'initiator',
              code: 'in'
            }, {
              label: 'terminador',
              value: 'terminator',
              code: 'ter'
            }, {
              label: 'editor',
              value: 'publisher',
              code: 'ed'
            }, {
              label: 'escritor',
              value: 'editor',
              code: '324'
            }, {
              label: 'diseñador grafico',
              value: 'graphical designer',
              code: '324'
            }, {
              label: 'desarrollador técnico',
              value: 'technical implementer',
              code: '345'
            }, {
              label: 'proveedor de contenido',
              value: 'content provider',
              code: '645'
            }, {
              label: 'revisor técnico',
              value: 'technical validator',
              code: '6654'
            }, {
              label: 'revisor educativo',
              value: 'educational validator',
              code: '6654'
            }, {
              label: 'guionista',
              value: 'script writer',
              code: '54'
            }, {
              label: 'diseñador educativo',
              value: 'instructional designer',
              code: '76'
            }, {
              label: 'experto en la materia',
              value: 'subject matter expert',
              code: '57'
            }];
            this.estados = [{
              label: 'borrador',
              value: 'draft',
              code: 'brr'
            }, {
              label: 'final',
              value: 'final',
              code: 'fin'
            }, {
              label: 'revisado',
              value: 'revised',
              code: 'rev'
            }, {
              label: 'no disponible',
              value: 'unavailable',
              code: 'ndis'
            }];
            this.ObjOptions = this.componentePrincipal.objOptions;
            this.objprincipal = this.lompadservice.objPricipal['DATA']['lifeCycle'];
            this.loadDatos();
            console.log("desde ciclo de vida ", this.objLiveClicle);
            this.estadoSelect = this.objLiveClicle["Status"];
            this.tiposSelect = this.objLiveClicle["Contribute"]["Role"];
            this.fecha = new Date(this.objLiveClicle["Contribute"]["Date"]);
            this.castVcard(this.objLiveClicle["Contribute"]["Entity"]);
          } //   getFormatedDate(date: Date, format: string) {    
          //     const datePipe = new DatePipe('en-US');
          //     return datePipe.transform(date, format);
          // }

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy ciclo de vida");
            this.actualizarVcard(this.objLiveClicle["Contribute"]["Entity"]);
            this.objLiveClicle["Contribute"]["Date"] = this.fecha.toISOString();
            this.lompadservice.objPricipal['DATA']['lifeCycle'] = this.objLiveClicle;
            this.lompadservice.saveObjectLompad(this.objLiveClicle, "lifeCycle");
          }
        }, {
          key: "castVcard",
          value: function castVcard(card) {
            var inicial = card;
            inicial = inicial.replace(" ", "_");
            var list = inicial.split("\n"); // console.log(list);

            var varN = list[2].substring(2, list[2].length);
            var list_varN = varN.split(";");
            var nombre = list_varN[1];
            var apellido = list_varN[0];
            var mail = list[4].split(":")[1];
            var organization = list[5].split(":")[1];
            console.log(nombre);
            console.log(apellido);
            console.log(mail);
            console.log(organization);
            this.nombreNew = nombre;
            this.apellidoNew = apellido;
            this.mailNew = mail;
            this.organizacionNew = organization;
          }
        }, {
          key: "actualizarVcard",
          value: function actualizarVcard(card) {
            var carrd = card;
            var inicial = card;
            inicial = inicial.replace(" ", "_");
            var list = inicial.split("\n");
            var varN = list[2].substring(2, list[2].length);
            var list_varN = varN.split(";");
            var nombre = list_varN[1];
            var apellido = list_varN[0];
            var mail = list[4].split(":")[1];
            var organization = list[5].split(":")[1];
            carrd = carrd.replace(nombre, this.nombreNew.trim());
            carrd = carrd.replace(apellido, this.apellidoNew.trim());
            carrd = carrd.replace(mail, this.mailNew.trim());
            carrd = carrd.replace(organization, this.organizacionNew.trim());
            var temFN = carrd.split("\n");
            temFN[3] = "FN:" + this.nombreNew.trim() + " " + this.apellidoNew.trim();
            var _final2 = "";
            temFN.forEach(function (element) {
              _final2 += element + "\n";
            });
            _final2 = _final2.substring(0, _final2.length - 1);
            console.log("fiNal card: ", _final2);
            this.objLiveClicle["Contribute"]["Entity"] = _final2;
          }
        }, {
          key: "cambioEstados",
          value: function cambioEstados() {
            console.log(this.estadoSelect);
            this.objLiveClicle["Status"] = this.estadoSelect;
          }
        }, {
          key: "cambio_contr_tipo",
          value: function cambio_contr_tipo() {
            console.log(this.tiposSelect);
            this.objLiveClicle["Contribute"]["Role"] = this.tiposSelect;
          }
        }]);

        return LivecicleComponent;
      }();

      LivecicleComponent.ctorParameters = function () {
        return [{
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__["LompadService"]
        }];
      };

      LivecicleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-livecicle',
        template: _raw_loader_livecicle_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_livecicle_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LivecicleComponent);
      /***/
    },

    /***/
    "G4X0":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/accesibilidad/accesibilidad.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G4X0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-fluid\">\n\n\n    <div class=\"p-col-12\">\n\n        <div class=\"p-col-12\">\n\n            <div class=\"card\">\n                <h5>{{\"Resumen de accesibilidad \" | translate}}</h5>\n                <div class=\"p-fluid\">\n                    <div class=\"p-field p-grid\">\n                        <!-- <label for=\"descripcion\">{{\"Descripción\" | translate}}</label> -->\n                        <textarea id=\"descripcion\" type=\"text\" rows=\"4\" [(ngModel)]='objAccess[\"Description\"]' pInputTextarea></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h5>{{\"Características de accesibilidad\" | translate}}</h5>\n            <h5>{{\"Contenido del recurso\" | translate}}</h5>\n            <div class=\"p-grid\">\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"texalternativo\" [(ngModel)]=\"accessFeatures[0].value\" binary=\"true\" id=\"texalternativo1\"></p-checkbox>\n                        <label for=\"texalternativo\">{{\"Texto alternativo\" | translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"anotaciones\" [(ngModel)]=\"accessFeatures[1].value\" binary=\"true\" id=\"anotaciones1\"></p-checkbox>\n                        <label for=\"anotaciones1\">{{\"Anotaciones\" | translate}}</label>\n                    </div>\n                </div>\n\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"printnumpag\" value=\"Imprimir número de páginas\" [(ngModel)]=\"accessFeatures[2].value\" binary=\"true\" id=\"printnumpag1\"></p-checkbox>\n                        <label for=\"printnumpag1\">{{\"Imprimir número de páginas\" | translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"descprideaudio\" value=\"Descripción de audio\" [(ngModel)]=\"accessFeatures[3].value\" binary=\"true\" id=\"descprideaudio1\"></p-checkbox>\n                        <label for=\"descprideaudio1\">{{\"Descripción de audio\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"marcadores\" value=\"Marcadores\" [(ngModel)]=\"accessFeatures[4].value\" binary=\"true\" id=\"marcadores1\"></p-checkbox>\n                        <label for=\"marcadores1\">{{\"Marcadores\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"ordlectura\" value=\"Orden de lectura\" [(ngModel)]=\"accessFeatures[5].value\" binary=\"true\" id=\"ordlectura1\"></p-checkbox>\n                        <label for=\"ordlectura1\">{{\"Orden de lectura\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"subtitulios\" value=\"Subtítulos\" [(ngModel)]=\"accessFeatures[6].value\" binary=\"true\" id=\"subtitulios1\"></p-checkbox>\n                        <label for=\"subtitulios1\">{{\"Subtítulos\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"braile\" value=\"Braile\" [(ngModel)]=\"accessFeatures[7].value\" binary=\"true\" id=\"braile1\"></p-checkbox>\n                        <label for=\"braile1\">{{\"Braile\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"anotaciones\" value=\"Anotacione de ruby\" [(ngModel)]=\"accessFeatures[8].value\" binary=\"true\" id=\"anotaciones1\"></p-checkbox>\n                        <label for=\"anotaciones1\">{{\"Anotacione de ruby\"|translate}}</label>\n                    </div>\n                </div>\n\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"pantllaltocontraste\" value=\"Pantalla de alto contraste\" [(ngModel)]=\"accessFeatures[9].value\" binary=\"true\" id=\"pantllaltocontraste1\"></p-checkbox>\n                        <label for=\"pantllaltocontraste1\">{{\"Pantalla de alto contraste\"|translate}}</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"chemml\" value=\"ChemML\" [(ngModel)]=\"accessFeatures[10].value\" binary=\"true\" id=\"chemml1\"></p-checkbox>\n                        <label for=\"chemml1\">{{\"ChemML\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"tablecontenido\" value=\"Table de contenido\" [(ngModel)]=\"accessFeatures[11].value\" binary=\"true\" id=\"tablecontenido1\"></p-checkbox>\n                        <label for=\"tablecontenido1\">{{\"Table de contenido\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"descriplarga\" value=\"Descripción larga\" [(ngModel)]=\"accessFeatures[12].value\" binary=\"true\" id=\"descriplarga1\"></p-checkbox>\n                        <label for=\"descriplarga1\">{{\"Descripción larga\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"descripmatematicas\" value=\"Describe las matemáticas\" [(ngModel)]=\"accessFeatures[13].value\" binary=\"true\" id=\"descripmatematicas1\"></p-checkbox>\n                        <label for=\"descripmatematicas1\">{{\"Describe las matemáticas\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"pdfetiquetado\" value=\"PDF etiquetado\" [(ngModel)]=\"accessFeatures[14].value\" binary=\"true\" id=\"pdfetiquetado1\"></p-checkbox>\n                        <label for=\"pdfetiquetado1\">{{\"PDF etiquetado\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"lengseñas\" value=\"Lenguaje de señas\" [(ngModel)]=\"accessFeatures[15].value\" binary=\"true\" id=\"lengseñas1\"></p-checkbox>\n                        <label for=\"lengseñas1\">{{\"Lenguaje de señas\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"indice\" value=\"Índice\" [(ngModel)]=\"accessFeatures[16].value\" binary=\"true\" id=\"indice1\"></p-checkbox>\n                        <label for=\"indice1\">{{\"índice\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"graficotactil\" value=\"Grafico táctil\" [(ngModel)]=\"accessFeatures[17].value\" binary=\"true\" id=\"graficotactil1\"></p-checkbox>\n                        <label for=\"graficotactil\">{{\"Grafico táctil\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"navegadorestructural\" value=\"Navegación Estructural\" [(ngModel)]=\"accessFeatures[18].value\" binary=\"true\" id=\"navegadorestructural1\"></p-checkbox>\n                        <label for=\"navegadorestructural1\">{{\"Navegación Estructural\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"letragande\" value=\"Letra grande\" [(ngModel)]=\"accessFeatures[19].value\" binary=\"true\" id=\"letragande1\"></p-checkbox>\n                        <label for=\"letragande1\">{{\"Letra grande\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"objetotac\" value=\"Objeto táctil\" [(ngModel)]=\"accessFeatures[20].value\" binary=\"true\" id=\"objetotac1\"></p-checkbox>\n                        <label for=\"objetotac1\">{{\"Objeto táctil\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"texaudisincro\" value=\"Texto de audio sincronizado\" [(ngModel)]=\"accessFeatures[21].value\" binary=\"true\" id=\"texaudisincro1\"></p-checkbox>\n                        <label for=\"texaudisincro1\">{{\"Texto de audio sincronizado\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"latex\" value=\"Latex\" [(ngModel)]=\"accessFeatures[22].value\" binary=\"true\" id=\"latex1\"></p-checkbox>\n                        <label for=\"latex1\">{{\"Latex\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"marcadodetts\" value=\"Marcado de Tts\" [(ngModel)]=\"accessFeatures[23].value\" binary=\"true\" id=\"marcadodetts1\"></p-checkbox>\n                        <label for=\"marcadodetts1\">{{\"Marcado de Tts\"|translate}}</label>\n                    </div>\n                </div>\n\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"controltiempo\" value=\"Control de tiempo\" [(ngModel)]=\"accessFeatures[24].value\" binary=\"true\" id=\"controltiempo1\"></p-checkbox>\n                        <label for=\"controltiempo1\">{{\"Control de tiempo\"|translate}}</label>\n                    </div>\n                </div>\n\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"mathml\" value=\"Math ML\" [(ngModel)]=\"accessFeatures[25].value\" binary=\"true\" id=\"mathml1\"></p-checkbox>\n                        <label for=\"mathml1\">{{\"Math ML\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"desbloqueado1\" value=\"Desbloqueado\" [(ngModel)]=\"accessFeatures[26].value\" binary=\"true\" id=\"desbloqueado1\"></p-checkbox>\n                        <label for=\"desbloqueado1\">{{\"Desbloqueado\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"transcripcion\" value=\"Transcripción\" [(ngModel)]=\"accessFeatures[27].value\" binary=\"true\" id=\"transcripcion1\"></p-checkbox>\n                        <label for=\"transcripcion1\">{{\"Transcripción\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"ninguno\" value=\"Ninguno\" [(ngModel)]=\"accessFeatures[28].value\" binary=\"true\" id=\"ninguno1\"></p-checkbox>\n                        <label for=\"ninguno1\">{{\"Ninguno\"|translate}}</label>\n                    </div>\n                </div>\n\n\n            </div>\n\n        </div>\n\n        <div class=\"card\">\n            <h5>{{\"Peligro de accesibilidad\"|translate}}</h5>\n            <div class=\"p-grid\">\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"peligro_parpadeo\" value=\"Peligro de parpadeo\" [(ngModel)]=\"accessHazard[0].value\" binary=\"true\" id=\"peligro_parpadeo1\"></p-checkbox>\n                        <label for=\"peligro_parpadeo1\">{{\"Peligro de parpadeo\"|translate}}</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"sin_peligro_parpadeo\" value=\"Sin peligro de parpadeo\" [(ngModel)]=\"accessHazard[1].value\" binary=\"true\" id=\"sin_peligro_parpadeo1\"></p-checkbox>\n                        <label for=\"sin_peligro_parpadeo1\">{{\"Sin peligro de parpadeo\"|translate}}</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"peligrodesimulacion\" value=\"Peligro de simulación de movimiento\" [(ngModel)]=\"accessHazard[2].value\" binary=\"true\" id=\"peligrodesimulacion\"></p-checkbox>\n                        <label for=\"peligrodesimulacion1\">{{\"Peligro de simulación de movimiento\"|translate}}</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"sinpeligrodesimulacion\" value=\"Sin peligro de simulación de movimiento\" [(ngModel)]=\"accessHazard[3].value\" binary=\"true\" id=\"sinpeligrodesimulacion1\"></p-checkbox>\n                        <label for=\"sinpeligrodesimulacion1\">{{\"Sin peligro de simulación de movimiento\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"peligrodelsonido\" value=\"Peligro del sonido\" [(ngModel)]=\"accessHazard[4].value\" binary=\"true\" id=\"peligrodelsonido1\"></p-checkbox>\n                        <label for=\"peligrodelsonido1\">{{\"Peligro del sonido\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"sinpeligrodelsonido\" value=\"Sin peligro del sonido\" [(ngModel)]=\"accessHazard[5].value\" binary=\"true\" id=\"sinpeligrodelsonido1\"></p-checkbox>\n                        <label for=\"sinpeligrodelsonido1\">{{\"Sin peligro del sonido\"|translate}}</label>\n                    </div>\n                </div>\n\n            </div>\n\n\n            <h5>{{\"Control de accesibilidad\"|translate}}</h5>\n            <h5>{{\"Métodos\"|translate}}</h5>\n            <div class=\"p-grid\">\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"controldeteclado\" value=\"Control de teclado\" [(ngModel)]=\"accessControl[0].value\" binary=\"true\" id=\"controldeteclado1\"></p-checkbox>\n                        <label for=\"controldeteclado1\">{{\"Control de teclado\"|translate}}</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"controldeinterruptorcompleto\" value=\"Control de interruptor completo\" [(ngModel)]=\"accessControl[1].value\" binary=\"true\" id=\"controldeinterruptorcompleto1\"></p-checkbox>\n                        <label for=\"controldeinterruptorcompleto1\">{{\"Control de interruptor completo\"|translate}}</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"controltotaldelmouse\" value=\"Control total del mouse\" [(ngModel)]=\"accessControl[2].value\" binary=\"true\" id=\"controltotaldelmouse1\"></p-checkbox>\n                        <label for=\"controltotaldelmouse1\">{{\"Control total del mouse\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"controltactilcompleto\" value=\"Control táctil completo\" [(ngModel)]=\"accessControl[3].value\" binary=\"true\" id=\"controltactilcompleto1\"></p-checkbox>\n                        <label for=\"controltactilcompleto1\">{{\"Control táctil completo\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"controldevozcompleto\" value=\"Control de voz completo\" [(ngModel)]=\"accessControl[4].value\" binary=\"true\" id=\"controldevozcompleto1\"></p-checkbox>\n                        <label for=\"controldevozcompleto1\">{{\"Control de voz completo\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-5\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"controltotaldevideo\" value=\"Control total de video\" [(ngModel)]=\"accessControl[5].value\" binary=\"true\" id=\"controltotaldevideo1\"></p-checkbox>\n                        <label for=\"controltotaldevideo1\">{{\"Control total de video\"|translate}}</label>\n                    </div>\n                </div>\n\n\n            </div>\n\n\n\n        </div>\n\n        <div class=\"card\">\n            <h5>{{\"API de accesibilidad\"|translate}}</h5>\n            <h5>{{\"Recurso compatible\"|translate}}</h5>\n            <div class=\"p-grid\">\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"aria\" value=\"ARIA\" [(ngModel)]=\"accessApi[0].value\" binary=\"true\" id=\"aria1\"></p-checkbox>\n                        <label for=\"aria1\">ARIA</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"accesibilidaandroid\" value=\"Accesibilidad de android\" [(ngModel)]=\"accessApi[1].value\" binary=\"true\" id=\"accesibilidaandroid1\"></p-checkbox>\n                        <label for=\"accesibilidaandroid1\">{{\"Accesibilidad de android\"|translate}}</label>\n                    </div>\n                </div>\n\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"accesibilidios\" value=\"Accesibilidad iOS\" [(ngModel)]=\"accessApi[2].value\" binary=\"true\" id=\"accesibilidios1\"></p-checkbox>\n                        <label for=\"accesibilidios\">{{\"Accesibilidad iOS\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\" style=\"visibility: hidden;\">\n                        <p-checkbox name=\"rellno\" value=\"rellno\" id=\"rellno\"></p-checkbox>\n                        <label for=\"rellno\">rellno</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"atk\" value=\"ATK\" [(ngModel)]=\"accessApi[3].value\" binary=\"true\" id=\"atk1\"></p-checkbox>\n                        <label for=\"atk1\">ATK</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"accesibilidadejava\" value=\"Accesibilidad de java\" [(ngModel)]=\"accessApi[4].value\" binary=\"true\" id=\"accesibilidadejava\"></p-checkbox>\n                        <label for=\"accesibilidadejava1\">{{\"Accesibilidad de java\"|translate}}</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\" style=\"visibility: hidden;\">\n                        <p-checkbox name=\"rellno\" value=\"rellno\" id=\"rellno\"></p-checkbox>\n                        <label for=\"rellno\">rellno</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"AT-SPI\" value=\"AT-SPI\" [(ngModel)]=\"accessApi[5].value\" binary=\"true\" id=\"AT-SPI1\"></p-checkbox>\n                        <label for=\"AT-SPI1\">AT-SPI</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"accesibilidadmac\" value=\"Accesibilidad macOSX\" [(ngModel)]=\"accessApi[6].value\" binary=\"true\" id=\"accesibilidadmac1\"></p-checkbox>\n                        <label for=\"accesibilidadmac1\">{{\"Accesibilidad macOSX\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\" style=\"visibility: hidden;\">\n                        <p-checkbox name=\"rellno\" value=\"rellno\" id=\"rellno\"></p-checkbox>\n                        <label for=\"rellno\">rellno</label>\n                    </div>\n                </div>\n\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"accesibilidblacberry\" value=\"Accesibilidad blackberry\" [(ngModel)]=\"accessApi[7].value\" binary=\"true\" id=\"accesibilidblacberry1\"></p-checkbox>\n                        <label for=\"accesibilidblacberry1\">{{\"Accesibilidad blackberry\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"atk\" value=\"MSAA\" [(ngModel)]=\"accessApi[8].value\" binary=\"true\" id=\"atk1\"></p-checkbox>\n                        <label for=\"atk1\">MSAA</label>\n                    </div>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\" style=\"visibility: hidden;\">\n                        <p-checkbox name=\"rellno\" value=\"rellno\" id=\"rellno\"></p-checkbox>\n                        <label for=\"rellno\">rellno</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"iaccesible2\" value=\"iAccesible 2\" [(ngModel)]=\"accessApi[9].value\" binary=\"true\" id=\"iaccesible21\"></p-checkbox>\n                        <label for=\"iaccesible21\">{{\"iAccesible 2\"|translate}}</label>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-checkbox name=\"autom\" value=\"Automatizaci\" [(ngModel)]=\"accessApi[10].value\" binary=\"true\" id=\"autom1\"></p-checkbox>\n                        <label for=\"autom1\">{{\"Automatizacion\"|translate}}</label>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n    </div>\n</div>";
      /***/
    },

    /***/
    "G5Hk":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.login.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function G5Hk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"login-body\" [ngClass]=\"{'layout-dark': dark, 'layout-light': !dark}\">\n\n    <div class=\"login-content\">\n        <div class=\"night-switch\">\n            <p-button styleClass=\"dark-switch\"  icon=\"pi pi-circle-on\" (click)=\"dark = true\"></p-button>\n            <p-button styleClass=\"light-switch\"  icon=\"pi pi-circle-off\" (click)=\"dark = false\"></p-button>\n        </div>\n        <div class=\"login-panel\">\n            <div class=\"login-panel-content\">\n                <div class=\"logo\">\n                    <img src=\"assets/layout/images/logo-mirage@2x.png\" alt=\"mirage-layout\" />\n                </div>\n                <h1>Sign in to Mirage</h1>\n                <p>Welcome, please use the form to sign-in Mirage network</p>\n                <div class=\"forms\">\n                    <div class=\"login-input-wrapper\">\n                        <label for=\"username\">Username</label>\n                        <input id=\"username\" pInputText placeholder=\"Type your username...\" />\n                        <i class=\"pi pi-user\"></i>\n                    </div>\n\n                    <div class=\"login-input-wrapper\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" id=\"password\" placeholder=\"Type your password\" pPassword [feedback]=\"false\"/>\n                        <i class=\"pi pi-lock\"></i>\n                    </div>\n\n                    <div class=\"p-col-12\">\n                        <p-checkbox [(ngModel)]=\"checked\" label=\"Remember me\" value=\"SaveInfo\" binary=\"true\"></p-checkbox>\n                    </div>\n\n\n                    <div class=\"buttons\">\n                        <button pButton type=\"button\" [routerLink]=\"['/']\" label=\"Login\"></button>\n                        <a href=\"#\" class=\"secondary-button\">Forget Password?</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"desert\"></div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "GlPy":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/overlaysdemo.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GlPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h5>Dialog</h5>\n            <p-dialog header=\"Dialog\" [(visible)]=\"display\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '400px'}\">\n                <div style=\"line-height: 1.5\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </div>\n                <p-footer>\n                    <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"display=false\" label=\"Yes\" class=\"p-button-text\"></button>\n                    <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"display=false\" label=\"No\" class=\"p-button-text\"></button>\n                </p-footer>\n            </p-dialog>\n\n            <button type=\"text\" (click)=\"display=true\" pButton icon=\"pi pi-external-link\" label=\"Show\" style=\"width: auto\"></button>\n        </div>\n\n        <div class=\"card p-fluid\">\n            <h5>Overlay Panel</h5>\n            <div class=\"p-grid\">\n                <div class=\"p-col-6\">\n                    <button type=\"button\" pButton label=\"Image\" (click)=\"op1.toggle($event)\" class=\"p-button-success\"></button>\n                    <p-overlayPanel #op1>\n                        <img src=\"assets/demo/images/nature/nature1.jpg\" alt=\"Nature 1\" />\n                    </p-overlayPanel>\n                </div>\n                <div class=\"p-col-6\">\n                    <button type=\"button\" pButton label=\"DataTable\" (click)=\"op2.toggle($event)\" class=\"p-button-success\"></button>\n                    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [style]=\"{width: '450px'}\">\n                        <ng-template pTemplate>\n                            <p-table [value]=\"products\" selectionMode=\"single\" [(selection)]=\"selectedProduct\" [paginator]=\"true\" [rows]=\"5\" (onRowSelect)=\"op2.hide()\">\n                                <ng-template pTemplate=\"header\">\n                                    <tr>\n                                        <th pSortableColumn=\"name\">Name<p-sortIcon field=\"name\"></p-sortIcon></th>\n                                        <th>Image</th>\n                                        <th pSortableColumn=\"price\">Price <p-sortIcon field=\"price\"></p-sortIcon></th>\n                                    </tr>\n                                </ng-template>\n                                <ng-template pTemplate=\"body\" let-rowData let-product>\n                                    <tr [pSelectableRow]=\"rowData\">\n                                        <td>{{product.name}}</td>\n                                        <td><img src=\"assets/demo/images/product/{{product.image}}\" [alt]=\"product.image\" class=\"product-image\" /></td>\n                                        <td>{{product.price}}</td>\n                                    </tr>\n                                </ng-template>\n                            </p-table>\n                        </ng-template>\n                    </p-overlayPanel>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-6\">\n\n        <div class=\"card\">\n            <h5>Confirmation</h5>\n            <p-confirmDialog header=\"Confirmation\" key=\"confirm1\" icon=\"pi pi-exclamation-triangle\" message=\"Are you sure you want to proceed?\"\n                             [style]=\"{width: '425px'}\" acceptButtonStyleClass=\"p-button-text\" rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>\n\n            <button type=\"text\" (click)=\"confirm1()\" pButton icon=\"pi pi-trash\" label=\"Delete\" class=\"p-button-danger\" style=\"width: auto\"></button>\n        </div>\n\n        <div class=\"card\">\n            <h5>Sidebar</h5>\n            <p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\">\n                <h3 style=\"font-weight:normal\">Left Sidebar</h3>\n            </p-sidebar>\n\n            <p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\">\n                <h3 style=\"font-weight:normal\">Right Sidebar</h3>\n            </p-sidebar>\n\n            <p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\">\n                <h3 style=\"font-weight:normal\">Top Sidebar</h3>\n            </p-sidebar>\n\n            <p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\">\n                <h3 style=\"font-weight:normal\">Bottom Sidebar</h3>\n            </p-sidebar>\n\n            <p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\">\n                <h3 style=\"font-weight:normal\">Full Screen Sidebar</h3>\n            </p-sidebar>\n\n            <button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"pi pi-arrow-right\" class=\"p-button-warning\"></button>\n            <button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"pi pi-arrow-left\" class=\"p-button-warning\"></button>\n            <button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"pi pi-arrow-down\" class=\"p-button-warning\"></button>\n            <button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"pi pi-arrow-up\" class=\"p-button-warning\"></button>\n            <button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"pi pi-th-large\" class=\"p-button-warning\"></button>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h5>Tooltip</h5>\n            <div class=\"p-formgroup-inline\">\n                <div class=\"p-field\">\n                    <label for=\"firstname5\" class=\"p-sr-only\">Username</label>\n                    <input id=\"firstname5\" type=\"text\" pInputText placeholder=\"Username\" pTooltip=\"Enter your username\">\n                </div>\n                <button pButton pRipple type=\"button\" label=\"Submit\" pTooltip=\"Click to proceed\"></button>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h5>ConfirmPopup</h5>\n\n            <p-toast></p-toast>\n            <button (click)=\"confirm2($event)\" pButton icon=\"pi pi-check\" label=\"Confirm\"></button>\n            <p-confirmPopup key=\"confirm2\"></p-confirmPopup>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "H1jX":
    /*!**************************************!*\
      !*** ./src/app/utilities/icons.scss ***!
      \**************************************/

    /*! exports provided: default */

    /***/
    function H1jX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".icon-filter {\n  width: 100%;\n  padding: 1rem;\n  margin: 1rem 0 1.5rem 0;\n}\n\n.icons-list {\n  text-align: center;\n}\n\n.icons-list i {\n  font-size: 1.5rem;\n  color: var(--text-color-secondary);\n  margin-bottom: 0.5rem;\n}\n\n.icons-list .p-md-2 {\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGljb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQkFBQTtBQUNEOztBQUNDO0VBQ0MsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUM7RUFDQyxvQkFBQTtBQUFGIiwiZmlsZSI6Imljb25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1maWx0ZXIge1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMXJlbTtcblx0bWFyZ2luOiAxcmVtIDAgMS41cmVtIDA7XG59XG5cbi5pY29ucy1saXN0IHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdGkge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0bWFyZ2luLWJvdHRvbTogLjVyZW07XG5cdH1cblxuXHQucC1tZC0yIHtcblx0XHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcblx0fVxufVxuIl19 */";
      /***/
    },

    /***/
    "H9ub":
    /*!***************************************************************!*\
      !*** ./src/app/paginas/upload-file/upload-file.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function H9ub(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtZmlsZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Hf0O":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/tabledemo.component.ts ***!
      \**************************************************/

    /*! exports provided: TableDemoComponent */

    /***/
    function Hf0O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableDemoComponent", function () {
        return TableDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabledemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabledemo.component.html */
      "4U8t");
      /* harmony import */


      var _tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabledemo.scss */
      "MBEb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_customerservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/customerservice */
      "04hL");
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var TableDemoComponent = /*#__PURE__*/function () {
        function TableDemoComponent(customerService, productService, breadcrumbService) {
          _classCallCheck(this, TableDemoComponent);

          this.customerService = customerService;
          this.productService = productService;
          this.breadcrumbService = breadcrumbService;
          this.activityValues = [0, 100];
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Table',
            routerLink: ['/uikit/table']
          }]);
        }

        _createClass(TableDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.customerService.getCustomersLarge().then(function (customers) {
              _this9.customers1 = customers; // @ts-ignore

              _this9.customers1.forEach(function (customer) {
                return customer.date = new Date(customer.date);
              });
            });
            this.customerService.getCustomersMedium().then(function (customers) {
              return _this9.customers2 = customers;
            });
            this.customerService.getCustomersMedium().then(function (customers) {
              return _this9.customers3 = customers;
            });
            this.productService.getProductsWithOrdersSmall().then(function (data) {
              return _this9.products = data;
            });
            this.representatives = [{
              name: 'Amy Elsner',
              image: 'amyelsner.png'
            }, {
              name: 'Anna Fali',
              image: 'annafali.png'
            }, {
              name: 'Asiya Javayant',
              image: 'asiyajavayant.png'
            }, {
              name: 'Bernardo Dominic',
              image: 'bernardodominic.png'
            }, {
              name: 'Elwin Sharvill',
              image: 'elwinsharvill.png'
            }, {
              name: 'Ioni Bowcher',
              image: 'ionibowcher.png'
            }, {
              name: 'Ivan Magalhaes',
              image: 'ivanmagalhaes.png'
            }, {
              name: 'Onyama Limba',
              image: 'onyamalimba.png'
            }, {
              name: 'Stephen Shaw',
              image: 'stephenshaw.png'
            }, {
              name: 'XuXue Feng',
              image: 'xuxuefeng.png'
            }];
            this.statuses = [{
              label: 'Unqualified',
              value: 'unqualified'
            }, {
              label: 'Qualified',
              value: 'qualified'
            }, {
              label: 'New',
              value: 'new'
            }, {
              label: 'Negotiation',
              value: 'negotiation'
            }, {
              label: 'Renewal',
              value: 'renewal'
            }, {
              label: 'Proposal',
              value: 'proposal'
            }];
          }
        }, {
          key: "onSort",
          value: function onSort() {
            this.updateRowGroupMetaData();
          }
        }, {
          key: "updateRowGroupMetaData",
          value: function updateRowGroupMetaData() {
            this.rowGroupMetadata = {};

            if (this.customers3) {
              for (var i = 0; i < this.customers3.length; i++) {
                var rowData = this.customers3[i];
                var representativeName = rowData.representative.name;

                if (i === 0) {
                  this.rowGroupMetadata[representativeName] = {
                    index: 0,
                    size: 1
                  };
                } else {
                  var previousRowData = this.customers3[i - 1];
                  var previousRowGroup = previousRowData.representative.name;

                  if (representativeName === previousRowGroup) {
                    this.rowGroupMetadata[representativeName].size++;
                  } else {
                    this.rowGroupMetadata[representativeName] = {
                      index: i,
                      size: 1
                    };
                  }
                }
              }
            }
          }
        }]);

        return TableDemoComponent;
      }();

      TableDemoComponent.ctorParameters = function () {
        return [{
          type: _service_customerservice__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
        }, {
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"]
        }];
      };

      TableDemoComponent.propDecorators = {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['dt']
        }]
      };
      TableDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_tabledemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        @media screen and (max-width: 960px) {\n            :host ::ng-deep .p-datatable.p-datatable-customers.rowexpand-table .p-datatable-tbody > tr > td:nth-child(6) {\n                display: flex;\n            }\n        }\n\n    ", _tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TableDemoComponent);
      /***/
    },

    /***/
    "I3un":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/grid.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function I3un(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4>PrimeFlex grid system is a lightweight flex based responsive layout utility optimized for mobile phones, tablets and\n\tdesktops.</h4>\n<h5>Basic</h5>\n<div class=\"p-grid\">\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">3</div>\n\t</div>\n</div>\n\n<h5>Dynamic</h5>\n<button pButton pRipple type=\"button\" icon=\"pi pi-plus\" title=\"Add Column\" (click)=\"addColumn()\"\n\t\t[disabled]=\"columns.length === 20\" class=\"p-mr-2\"></button>\n<button pButton pRipple type=\"button\" icon=\"pi pi-minus\" title=\"Remove Column\" (click)=\"removeColumn()\"\n\t\t[disabled]=\"columns.length === 1\"></button>\n\n<div class=\"p-grid p-mt-2\">\n\t<div class=\"p-col\" *ngFor=\"let col of columns; let i=index\" [@animation]=\"'visible'\">\n\t\t<div class=\"box\">{{i + 1}}</div>\n\t</div>\n</div>\n\n<h5>Reverse Direction</h5>\n<div class=\"p-grid p-dir-rev\">\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">3</div>\n\t</div>\n</div>\n\n<h5>Column Direction</h5>\n<div class=\"p-grid p-dir-col\">\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">3</div>\n\t</div>\n</div>\n\n<h5>Reverse Column Direction</h5>\n<div class=\"p-grid p-dir-col-rev\">\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">3</div>\n\t</div>\n</div>\n\n<h5>12 Column Grid</h5>\n<div class=\"p-grid\">\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n</div>\n\n<div class=\"p-grid\">\n\t<div class=\"p-col-2\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col-6\">\n\t\t<div class=\"box\">6</div>\n\t</div>\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<div class=\"p-grid\">\n\t<div class=\"p-col-8\">\n\t\t<div class=\"box\">8</div>\n\t</div>\n\t<div class=\"p-col-2\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col-2\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n</div>\n\n<h5>MultiLine</h5>\n<div class=\"p-grid\">\n\t<div class=\"p-col-6\">\n\t\t<div class=\"box\">6</div>\n\t</div>\n\t<div class=\"p-col-6\">\n\t\t<div class=\"box\">6</div>\n\t</div>\n\t<div class=\"p-col-6\">\n\t\t<div class=\"box\">6</div>\n\t</div>\n\t<div class=\"p-col-6\">\n\t\t<div class=\"box\">6</div>\n\t</div>\n</div>\n\n<h5>Fixed Width Column</h5>\n<div class=\"p-grid\">\n\t<div class=\"p-col-fixed\" style=\"width:100px\">\n\t\t<div class=\"box\">100px</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">auto</div>\n\t</div>\n</div>\n\n<h5>Responsive</h5>\n<div class=\"p-grid\">\n\t<div class=\"p-col-12 p-md-6 p-lg-3\">\n\t\t<div class=\"box\">p-col-12 p-md-6 p-lg-3</div>\n\t</div>\n\t<div class=\"p-col-12 p-md-6 p-lg-3\">\n\t\t<div class=\"box\">p-col-12 p-md-6 p-lg-3</div>\n\t</div>\n\t<div class=\"p-col-12 p-md-6 p-lg-3\">\n\t\t<div class=\"box\">p-col-12 p-md-6 p-lg-3</div>\n\t</div>\n\t<div class=\"p-col-12 p-md-6 p-lg-3\">\n\t\t<div class=\"box\">p-col-12 p-md-6 p-lg-3</div>\n\t</div>\n</div>\n\n<h5>Horizontal Alignment - Start</h5>\n<div class=\"p-grid p-justify-start\">\n\t<div class=\"p-col-2\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col-1\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Horizontal Alignment - End</h5>\n<div class=\"p-grid p-justify-end\">\n\t<div class=\"p-col-2\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col-1\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Horizontal Alignment - Center</h5>\n<div class=\"p-grid p-justify-center\">\n\t<div class=\"p-col-2\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col-1\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Horizontal Alignment - Between</h5>\n<div class=\"p-grid p-justify-between\">\n\t<div class=\"p-col-2\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col-1\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Horizontal Alignment - Around</h5>\n<div class=\"p-grid p-justify-around\">\n\t<div class=\"p-col-2\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col-1\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Horizontal Alignment - Even</h5>\n<div class=\"p-grid p-justify-even\">\n\t<div class=\"p-col-2\">\n\t\t<div class=\"box\">2</div>\n\t</div>\n\t<div class=\"p-col-1\">\n\t\t<div class=\"box\">1</div>\n\t</div>\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Vertical Alignment - Start</h5>\n<div class=\"p-grid p-align-start vertical-container\">\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Vertical Alignment - End</h5>\n<div class=\"p-grid p-align-end vertical-container\">\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Vertical Alignment - Center</h5>\n<div class=\"p-grid p-align-center vertical-container\">\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Vertical Alignment - Stretch</h5>\n<div class=\"p-grid p-align-stretch vertical-container\">\n\t<div class=\"p-col\">\n\t\t<div class=\"box box-stretched\">4</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box box-stretched\">4</div>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<div class=\"box box-stretched\">4</div>\n\t</div>\n</div>\n\n<h5>Vertical Alignment - Per Column</h5>\n<div class=\"p-grid vertical-container\">\n\t<div class=\"p-col p-col-align-start\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col p-col-align-center\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col p-col-align-end\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Offset</h5>\n<div class=\"p-grid\">\n\t<div class=\"p-col-6 p-offset-3\">\n\t\t<div class=\"box\">6</div>\n\t</div>\n</div>\n\n<div class=\"p-grid\">\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n\t<div class=\"p-col-4 p-offset-4\">\n\t\t<div class=\"box\">4</div>\n\t</div>\n</div>\n\n<h5>Nested</h5>\n<div class=\"p-grid nested-grid\">\n\t<div class=\"p-col-8\">\n\t\t<div class=\"p-grid\">\n\t\t\t<div class=\"p-col-6\">\n\t\t\t\t<div class=\"box\">6</div>\n\t\t\t</div>\n\t\t\t<div class=\"p-col-6\">\n\t\t\t\t<div class=\"box\">6</div>\n\t\t\t</div>\n\t\t\t<div class=\"p-col-12\">\n\t\t\t\t<div class=\"box\">12</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"p-col-4\">\n\t\t<div class=\"box box-stretched\">4</div>\n\t</div>\n</div>\n\n<h5>Panels</h5>\n<div class=\"p-grid\">\n\t<div class=\"p-col\">\n\t\t<p-panel header=\"Header\">\n\t\t\t<p class=\"p-m-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n\t\t\t\tut labore et dolore magna aliqua.\n\t\t\t\tUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\tconsequat.\n\t\t\t\tDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\t\t\t\tExcepteur sint occaecat\n\t\t\t\tcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t</p-panel>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<p-panel header=\"Header\">\n\t\t\t<p class=\"p-m-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n\t\t\t\tut labore et dolore magna aliqua.\n\t\t\t\tUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\tconsequat.\n\t\t\t\tDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\t\t\t\tExcepteur sint occaecat\n\t\t\t\tcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t</p-panel>\n\t</div>\n\t<div class=\"p-col\">\n\t\t<p-panel header=\"Header\">\n\t\t\t<p class=\"p-m-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n\t\t\t\tut labore et dolore magna aliqua.\n\t\t\t\tUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\tconsequat.\n\t\t\t\tDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\t\t\t\tExcepteur sint occaecat\n\t\t\t\tcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t</p-panel>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "ITH+":
    /*!*********************************************!*\
      !*** ./src/app/app.breadcrumb.component.ts ***!
      \*********************************************/

    /*! exports provided: AppBreadcrumbComponent */

    /***/
    function ITH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppBreadcrumbComponent", function () {
        return AppBreadcrumbComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.breadcrumb.component.html */
      "z7Cp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./breadcrumb.service */
      "pMwP");

      var AppBreadcrumbComponent = /*#__PURE__*/function () {
        function AppBreadcrumbComponent(breadcrumbService) {
          var _this10 = this;

          _classCallCheck(this, AppBreadcrumbComponent);

          this.breadcrumbService = breadcrumbService;
          this.subscription = breadcrumbService.itemsHandler.subscribe(function (response) {
            _this10.items = response;
          });
        }

        _createClass(AppBreadcrumbComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }]);

        return AppBreadcrumbComponent;
      }();

      AppBreadcrumbComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      AppBreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-breadcrumb',
        template: _raw_loader_app_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppBreadcrumbComponent);
      /***/
    },

    /***/
    "IdC1":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/metadatos/metadatos.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IdC1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n\n    <div *ngIf=\"ObjOptions.o3_1\" class=\"p-col-12\">\n        <h5>{{\"Idetificador\" | translate }}</h5>\n\n        <div class=\"card\">\n            <div class=\"p-fluid p-formgrid p-grid\">\n                <label for=\"catalogo\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Catálogo\" | translate }}</label>\n                <div class=\"p-field p-col\">\n                    <input [(ngModel)]='objMetadatos[\"Identifier\"][\"Catalog\"]' id=\"catalogo\" type=\"text\" pInputText>\n                </div>\n                <label for=\"entrada\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Entrada\" | translate}}</label>\n                <div class=\"p-field p-col\">\n                    <input id=\"entrada\" [(ngModel)]='objMetadatos[\"Identifier\"][\"Schema\"]' type=\"text\" pInputText>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n\n\n    <div *ngIf=\"ObjOptions.o3_2\" class=\"p-col-12 \">\n        <h5>{{\"Contribución\" | translate }}</h5>\n        <div class=\"card\">\n\n            <div *ngIf=\"ObjOptions.o3_2_1\" class=\"card\">\n                <h5>{{\"Tipo\" | translate}}</h5>\n                <div class=\"p-fluid\">\n                    <!-- [(ngModel)]=\"selectedDrop\" -->\n                    <p-dropdown [options]=\"tipos\" [(ngModel)]='tipos_Select' name='tipos_Select' (onChange)='cambioTipos()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                        <ng-template pTemplate=\"item\" let-item>\n                            {{item.label| translate }}\n                        </ng-template>\n                        <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                            {{selectedItem.label | translate }}\n                        </ng-template>\n                    </p-dropdown>\n                </div>\n\n            </div>\n\n            <div *ngIf=\"ObjOptions.o3_2_2\" class=\"card\">\n                <h5>{{\"Entidad\" | translate }}</h5>\n                <div class=\"p-fluid\">\n                    <div class=\"p-field p-grid\">\n                        <label for=\"nombre\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Nombre\" | translate }}</label>\n                        <div class=\"p-col-12 p-md-10\">\n                            <input id=\"nombre\" [(ngModel)]='nombreNew' type=\"text\" pInputText>\n                        </div>\n                    </div>\n                    <div class=\"p-field p-grid\">\n                        <label for=\"apellido\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Apellido\" | translate }}</label>\n                        <div class=\"p-col-12 p-md-10\">\n\n                            <input id=\"apellido\" [(ngModel)]='apellidoNew' type=\"text\" pInputText>\n                        </div>\n                    </div>\n                    <div class=\"p-field p-grid\">\n                        <label for=\"lastname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Email\" | translate}}</label>\n                        <div class=\"p-col-12 p-md-10\">\n                            <input id=\"lastname4\" [(ngModel)]='mailNew' type=\"text\" pInputText>\n                        </div>\n                    </div>\n                    <div class=\"p-field p-grid\">\n                        <label for=\"organizacion\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Organización\" | translate}}</label>\n                        <div class=\"p-col-12 p-md-10\">\n                            <input id=\"organizacion\" [(ngModel)]='organizacionNew' type=\"text\" pInputText>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n            <div *ngIf=\"ObjOptions.o3_2_3\" class=\"card\">\n                <h5>{{\"Fecha\" | translate}}</h5>\n\n                <div class=\"p-fluid\">\n\n                    <div class=\"p-field p-grid\">\n                        <div class=\"p-col-12 p-md-10\">\n                            <p-calendar [(ngModel)]='fecha' [showIcon]=\"true\" inputId=\"icon\"></p-calendar>\n                        </div>\n                    </div>\n\n                    <!-- <div class=\"p-field p-grid\">\n                        <label for=\"descripcion\">{{\"Descripción\" | translate}}</label>\n                        <textarea id=\"descripcion\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                    </div> -->\n                </div>\n\n\n\n            </div>\n\n\n        </div>\n\n\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o3_3\" class=\"p-col-12\">\n        <h5>{{\"Esquema de meta datos\" | translate }}</h5>\n        <div class=\"card\">\n            <div class=\"p-field p-fluid\">\n                <label for=\"esquema\">{{\"Esquema\" | translate}}</label>\n                <input [(ngModel)]='objMetadatos[\"Metadata Schema\"]' id=\"esquema\" type=\"esquema\" pInputText aria-describedby=\"username-help\">\n                <!-- <small id=\"username-help\">Enter your username to reset your password.</small> -->\n            </div>\n        </div>\n    </div>\n\n</div>";
      /***/
    },

    /***/
    "IzyT":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/mediademo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function IzyT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-fluid\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Carousel</h5>\n            <p-carousel [value]=\"products\" [numVisible]=\"3\" [numScroll]=\"3\" [circular]=\"false\" [responsiveOptions]=\"carouselResponsiveOptions\">\n                <ng-template let-product pTemplate=\"item\">\n                    <div class=\"product-item\">\n                        <div class=\"product-item-content\">\n                            <div class=\"p-mb-3\">\n                                <img src=\"assets/demo/images/product/{{product.image}}\" [alt]=\"product.name\" class=\"product-image\" />\n                            </div>\n                            <div>\n                                <h4 class=\"p-mb-1\">{{product.name}}</h4>\n                                <h6 class=\"p-mt-0 p-mb-3\">${{product.price}}</h6>\n                                <span [class]=\"'product-badge status-'+product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span>\n                                <div class=\"car-buttons p-mt-5\">\n                                    <p-button type=\"button\" styleClass=\"p-button p-button-rounded p-mr-2\" icon=\"pi pi-search\"></p-button>\n                                    <p-button type=\"button\" styleClass=\"p-button-success p-button-rounded p-mr-2\" icon=\"pi pi-star\"></p-button>\n                                    <p-button type=\"button\" styleClass=\"p-button-help p-button-rounded\" icon=\"pi pi-cog\"></p-button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </p-carousel>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Galleria</h5>\n            <p-galleria [value]=\"images\" [responsiveOptions]=\"galleriaResponsiveOptions\"\n                        [containerStyle]=\"{'max-width': '800px', 'margin':'auto'}\" [numVisible]=\"7\" [circular]=\"true\">\n                <ng-template pTemplate=\"item\" let-item>\n                    <img [src]=\"item.itemImageSrc\" style=\"width: 100%; display: block;\"/>\n                </ng-template>\n                <ng-template pTemplate=\"thumbnail\" let-item>\n                    <div class=\"p-grid p-nogutter p-justify-center\">\n                        <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/>\n                    </div>\n                </ng-template>\n            </p-galleria>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Joch":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/icons.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Joch(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"card icons-demo\">\n\t<h3>Icons</h3>\n\n\t<h5>Getting Started</h5>\n\t<p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>.\n\t\tA standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>\n\n<app-code lang=\"markup\"  ngPreserveWhitespaces ngNonBindable>\n&lt;i class=\"pi pi-check\"&gt;&lt;/i&gt;\n&lt;i class=\"pi pi-times\"&gt;&lt;/i&gt;\n</app-code>\n\n\t<i class=\"pi pi-check\"></i>\n\t<i class=\"pi pi-times\"></i>\n\n\t<h5>Size</h5>\n\t<p>Size of the icons can easily be changed using font-size property.</p>\n\n<app-code lang=\"markup\"  ngPreserveWhitespaces ngNonBindable>\n&lt;i class=\"pi pi-check\"&gt;&lt;/i&gt;\n</app-code>\n\n\t<i class=\"pi pi-check\"></i>\n\n<app-code lang=\"markup\"  ngPreserveWhitespaces ngNonBindable>\n&lt;i class=\"pi pi-check\" style=\"font-size: 2rem\"&gt;&lt;/i&gt;\n</app-code>\n\n\t<i class=\"pi pi-check\" style=\"font-size: 2rem\"></i>\n\n\t<h5>Spinning Animation</h5>\n\t<p>Special pi-spin class applies infinite rotate to an icon.</p>\n\n<app-code lang=\"markup\"  ngPreserveWhitespaces ngNonBindable>\n&lt;i class=\"pi pi-spin pi-spinner\" style=\"font-size: 2rem\"&gt;&lt;/i&gt;\n</app-code>\n\n\t<i class=\"pi pi-spin pi-spinner\" style=\"font-size: 2rem\"></i>\n\n\t<h5>List of Icons</h5>\n\t<p>Here is the current list of PrimeIcons, more icons will be added periodically. You may also <a href=\"https://github.com/primefaces/primeicons/issues\">request new icons</a> at the issue tracker.</p>\n\t<div>\n\t\t<input class=\"icon-filter\" (input)=\"onFilter($event)\" pInputText placeholder=\"Search an icon\">\n\t</div>\n\n\t<div class=\"p-grid icons-list\">\n\t\t<div class=\"p-col-12 p-md-2\" *ngFor=\"let icon of filteredIcons\">\n\t\t\t<i class=\"pi pi-{{icon.properties.name}}\"></i>\n\t\t\t<div>pi-{{icon.properties.name}}</div>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "JvKG":
    /*!*************************************************!*\
      !*** ./src/app/demo/view/treedemo.component.ts ***!
      \*************************************************/

    /*! exports provided: TreeDemoComponent */

    /***/
    function JvKG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDemoComponent", function () {
        return TreeDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_treedemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./treedemo.component.html */
      "+BCQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_nodeservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/nodeservice */
      "WCqc");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var TreeDemoComponent = /*#__PURE__*/function () {
        function TreeDemoComponent(nodeService, breadcrumbService) {
          _classCallCheck(this, TreeDemoComponent);

          this.nodeService = nodeService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Tree',
            routerLink: ['/uikit/tree']
          }]);
        }

        _createClass(TreeDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.nodeService.getFiles().then(function (files) {
              return _this11.files1 = files;
            });
            this.nodeService.getFilesystem().then(function (files) {
              return _this11.files2 = files;
            });
            this.nodeService.getFiles().then(function (files) {
              _this11.files3 = [{
                label: 'Root',
                children: files
              }];
            });
            this.cols = [{
              field: 'name',
              header: 'Name'
            }, {
              field: 'size',
              header: 'Size'
            }, {
              field: 'type',
              header: 'Type'
            }];
          }
        }]);

        return TreeDemoComponent;
      }();

      TreeDemoComponent.ctorParameters = function () {
        return [{
          type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_3__["NodeService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }];
      };

      TreeDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_treedemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TreeDemoComponent);
      /***/
    },

    /***/
    "KaQX":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.accessdenied.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function KaQX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"exception-body access\">\n    <div class=\"exception-content\">\n        <div class=\"moon\">\n            <img src=\"assets/layout/images/pages/asset-moon.svg\" alt=\"mirage-layout\" />\n        </div>\n        <div class=\"exception-panel\">\n            <div class=\"exception-panel-content\">\n                <span class=\"tag\">401</span>\n                <h1>Access Denied</h1>\n                <div class=\"seperator\"></div>\n                <p>You do not have the necesary permisions. Please contact admins.</p>\n                <button pButton type=\"button\" [routerLink]=\"['/']\" label=\"Go To DashBoard\"></button>\n            </div>\n        </div>\n        <div class=\"desert\"></div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "LwCC":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.error.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function LwCC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"exception-body error\">\n    <div class=\"exception-content\">\n        <div class=\"moon\">\n            <img src=\"assets/layout/images/pages/asset-moon.svg\" alt=\"mirage-layout\" />\n        </div>\n        <div class=\"exception-panel\">\n            <div class=\"exception-panel-content\">\n                <span class=\"tag\"><i class=\"pi pi-exclamation-triangle\" style=\"vertical-align: bottom\"></i></span>\n                <h1>Error Occured</h1>\n                <div class=\"seperator\"></div>\n                <p>Something went wrong. </p>\n                <button pButton type=\"button\" [routerLink]=\"['/']\" label=\"Go To DashBoard\"></button>\n            </div>\n        </div>\n        <div class=\"desert\"></div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "M6OY":
    /*!*******************************************************!*\
      !*** ./src/app/demo/view/floatlabeldemo.component.ts ***!
      \*******************************************************/

    /*! exports provided: FloatLabelDemoComponent */

    /***/
    function M6OY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FloatLabelDemoComponent", function () {
        return FloatLabelDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_floatlabeldemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./floatlabeldemo.component.html */
      "W2Tc");
      /* harmony import */


      var _floatlabeldemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./floatlabeldemo.scss */
      "eSy0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_countryservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/countryservice */
      "CuUz");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var FloatLabelDemoComponent = /*#__PURE__*/function () {
        function FloatLabelDemoComponent(countryService, breadcrumbService) {
          _classCallCheck(this, FloatLabelDemoComponent);

          this.countryService = countryService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Float Label',
            routerLink: ['/uikit/floatlabel']
          }]);
          this.cities = [{
            name: 'New York',
            code: 'NY'
          }, {
            name: 'Rome',
            code: 'RM'
          }, {
            name: 'London',
            code: 'LDN'
          }, {
            name: 'Istanbul',
            code: 'IST'
          }, {
            name: 'Paris',
            code: 'PRS'
          }];
        }

        _createClass(FloatLabelDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.countryService.getCountries().then(function (countries) {
              _this12.countries = countries;
            });
          }
        }, {
          key: "searchCountry",
          value: function searchCountry(event) {
            // in a real application, make a request to a remote url with the query and
            // return filtered results, for demo we filter at client side
            var filtered = [];
            var query = event.query; // tslint:disable-next-line:prefer-for-of

            for (var i = 0; i < this.countries.length; i++) {
              var country = this.countries[i];

              if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
              }
            }

            this.filteredCountries = filtered;
          }
        }]);

        return FloatLabelDemoComponent;
      }();

      FloatLabelDemoComponent.ctorParameters = function () {
        return [{
          type: _service_countryservice__WEBPACK_IMPORTED_MODULE_4__["CountryService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbService"]
        }];
      };

      FloatLabelDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_floatlabeldemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_floatlabeldemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FloatLabelDemoComponent);
      /***/
    },

    /***/
    "M8Z4":
    /*!***************************************************!*\
      !*** ./src/app/demo/view/buttondemo.component.ts ***!
      \***************************************************/

    /*! exports provided: ButtonDemoComponent */

    /***/
    function M8Z4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDemoComponent", function () {
        return ButtonDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buttondemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buttondemo.component.html */
      "mOOp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var ButtonDemoComponent = /*#__PURE__*/function () {
        function ButtonDemoComponent(breadcrumbService) {
          _classCallCheck(this, ButtonDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Button',
            routerLink: ['/uikit/button']
          }]);
        }

        _createClass(ButtonDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.items = [{
              label: 'Update',
              icon: 'pi pi-refresh'
            }, {
              label: 'Delete',
              icon: 'pi pi-times'
            }, {
              label: 'Angular.io',
              icon: 'pi pi-info',
              url: 'http://angular.io'
            }, {
              separator: true
            }, {
              label: 'Setup',
              icon: 'pi pi-cog'
            }];
          }
        }]);

        return ButtonDemoComponent;
      }();

      ButtonDemoComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      ButtonDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_buttondemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ButtonDemoComponent);
      /***/
    },

    /***/
    "MBEb":
    /*!******************************************!*\
      !*** ./src/app/demo/view/tabledemo.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function MBEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep {\n  /* Responsive */\n}\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers:not(.p-datatable-gridlines) .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n:host ::ng-deep .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n.customer-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.customer-badge.status-qualified {\n  background: #C8E6C9;\n  color: #256029;\n}\n.customer-badge.status-unqualified {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.customer-badge.status-negotiation {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.customer-badge.status-new {\n  background: #B3E5FC;\n  color: #23547B;\n}\n.customer-badge.status-renewal {\n  background: #ECCFFF;\n  color: #694382;\n}\n.customer-badge.status-proposal {\n  background: #FFD8B2;\n  color: #805B36;\n}\n.product-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.order-badge.order-delivered {\n  background: #C8E6C9;\n  color: #256029;\n}\n.order-badge.order-cancelled {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.order-badge.order-pending {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge.order-returned {\n  background: #ECCFFF;\n  color: #694382;\n}\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--surface-d);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXVEQyxlQUFBO0FBckREO0FBQUU7RUFDQyxpQkFBQTtBQUVIO0FBRUM7RUFDQyxjQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVFO0VBQ0MseUJBQUE7QUFBSDtBQUlDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBRkY7QUFLQztFQUNDLGdCQUFBO0FBSEY7QUFLRTtFQUNDLGdCQUFBO0FBSEg7QUFRRTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTkg7QUFTRTtFQUNDLGFBQUE7QUFQSDtBQVVFO0VBQ0MsZ0JBQUE7QUFSSDtBQVdFO0VBQ0MseUJBQUE7QUFUSDtBQWNFO0VBQ0MsWUFBQTtBQVpIO0FBaUJDO0VBQ0MsYUFBQTtBQWZGO0FBbUJBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFoQkQ7QUFrQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFoQkY7QUFtQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFqQkY7QUFvQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFsQkY7QUFxQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFuQkY7QUFzQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFwQkY7QUF1QkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFyQkY7QUF5QkE7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXRCRDtBQXdCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXRCRjtBQXlCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXZCRjtBQTBCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXhCRjtBQTRCQTtFQUNDLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBekJEO0FBMkJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBekJGO0FBNEJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBMUJGO0FBNkJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBM0JGO0FBOEJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBNUJGO0FBZ0NBO0VBSUk7O0lBRUMsd0JBQUE7RUFoQ0g7RUFtQ0U7SUFDQyx5Q0FBQTtFQWpDSDtFQW1DRztJQUNDLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFqQ0o7RUFtQ0k7SUFDQyxlQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0NBQUE7SUFDQSxpQkFBQTtFQWpDTDtFQW9DSTtJQUNDLGtCQUFBO0VBbENMO0FBQ0YiLCJmaWxlIjoidGFibGVkZW1vLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuXHQucC1wYWdpbmF0b3Ige1xuXHRcdC5wLXBhZ2luYXRvci1jdXJyZW50IHtcblx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdH1cblx0fVxuXG5cdC5wLXByb2dyZXNzYmFyIHtcblx0XHRoZWlnaHQ6IC41cmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNEOERBREM7XG5cblx0XHQucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuXHRcdH1cblx0fVxuXG5cdC50YWJsZS1oZWFkZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cblx0LnAtY2FsZW5kYXIgLnAtZGF0ZXBpY2tlciB7XG5cdFx0bWluLXdpZHRoOiAyNXJlbTtcblxuXHRcdHRkIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0fVxuXHR9XG5cblx0LnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyB7XG5cdFx0LnAtZGF0YXRhYmxlLWhlYWRlciB7XG5cdFx0XHRwYWRkaW5nOiAxcmVtO1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdH1cblxuXHRcdC5wLXBhZ2luYXRvciB7XG5cdFx0XHRwYWRkaW5nOiAxcmVtO1xuXHRcdH1cblxuXHRcdC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgge1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR9XG5cblx0XHQucC1kcm9wZG93bi1sYWJlbDpub3QoLnAtcGxhY2Vob2xkZXIpIHtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0fVxuXHR9XG5cblx0LnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVyczpub3QoLnAtZGF0YXRhYmxlLWdyaWRsaW5lcykge1xuXHRcdC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xuXHRcdFx0Y3Vyc29yOiBhdXRvO1xuXHRcdH1cblx0fVxuXG5cdC8qIFJlc3BvbnNpdmUgKi9cblx0LnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4uY3VzdG9tZXItYmFkZ2Uge1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdHBhZGRpbmc6IC4yNWVtIC41cmVtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGxldHRlci1zcGFjaW5nOiAuM3B4O1xuXG5cdCYuc3RhdHVzLXF1YWxpZmllZCB7XG5cdFx0YmFja2dyb3VuZDogI0M4RTZDOTtcblx0XHRjb2xvcjogIzI1NjAyOTtcblx0fVxuXG5cdCYuc3RhdHVzLXVucXVhbGlmaWVkIHtcblx0XHRiYWNrZ3JvdW5kOiAjRkZDREQyO1xuXHRcdGNvbG9yOiAjQzYzNzM3O1xuXHR9XG5cblx0Ji5zdGF0dXMtbmVnb3RpYXRpb24ge1xuXHRcdGJhY2tncm91bmQ6ICNGRUVEQUY7XG5cdFx0Y29sb3I6ICM4QTUzNDA7XG5cdH1cblxuXHQmLnN0YXR1cy1uZXcge1xuXHRcdGJhY2tncm91bmQ6ICNCM0U1RkM7XG5cdFx0Y29sb3I6ICMyMzU0N0I7XG5cdH1cblxuXHQmLnN0YXR1cy1yZW5ld2FsIHtcblx0XHRiYWNrZ3JvdW5kOiAjRUNDRkZGO1xuXHRcdGNvbG9yOiAjNjk0MzgyO1xuXHR9XG5cblx0Ji5zdGF0dXMtcHJvcG9zYWwge1xuXHRcdGJhY2tncm91bmQ6ICNGRkQ4QjI7XG5cdFx0Y29sb3I6ICM4MDVCMzY7XG5cdH1cbn1cblxuLnByb2R1Y3QtYmFkZ2Uge1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdHBhZGRpbmc6IC4yNWVtIC41cmVtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGxldHRlci1zcGFjaW5nOiAuM3B4O1xuXG5cdCYuc3RhdHVzLWluc3RvY2sge1xuXHRcdGJhY2tncm91bmQ6ICNDOEU2Qzk7XG5cdFx0Y29sb3I6ICMyNTYwMjk7XG5cdH1cblxuXHQmLnN0YXR1cy1vdXRvZnN0b2NrIHtcblx0XHRiYWNrZ3JvdW5kOiAjRkZDREQyO1xuXHRcdGNvbG9yOiAjQzYzNzM3O1xuXHR9XG5cblx0Ji5zdGF0dXMtbG93c3RvY2sge1xuXHRcdGJhY2tncm91bmQ6ICNGRUVEQUY7XG5cdFx0Y29sb3I6ICM4QTUzNDA7XG5cdH1cbn1cblxuLm9yZGVyLWJhZGdlIHtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRwYWRkaW5nOiAuMjVlbSAuNXJlbTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRsZXR0ZXItc3BhY2luZzogLjNweDtcblxuXHQmLm9yZGVyLWRlbGl2ZXJlZCB7XG5cdFx0YmFja2dyb3VuZDogI0M4RTZDOTtcblx0XHRjb2xvcjogIzI1NjAyOTtcblx0fVxuXG5cdCYub3JkZXItY2FuY2VsbGVkIHtcblx0XHRiYWNrZ3JvdW5kOiAjRkZDREQyO1xuXHRcdGNvbG9yOiAjQzYzNzM3O1xuXHR9XG5cblx0Ji5vcmRlci1wZW5kaW5nIHtcblx0XHRiYWNrZ3JvdW5kOiAjRkVFREFGO1xuXHRcdGNvbG9yOiAjOEE1MzQwO1xuXHR9XG5cblx0Ji5vcmRlci1yZXR1cm5lZCB7XG5cdFx0YmFja2dyb3VuZDogI0VDQ0ZGRjtcblx0XHRjb2xvcjogIzY5NDM4Mjtcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuXHQ6aG9zdCA6Om5nLWRlZXAge1xuXHRcdC5wLWRhdGF0YWJsZSB7XG5cdFx0XHQmLnAtZGF0YXRhYmxlLWN1c3RvbWVycyB7XG5cdFx0XHRcdC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgsXG5cdFx0XHRcdC5wLWRhdGF0YWJsZS10Zm9vdCA+IHRyID4gdGQge1xuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyIHtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1kKTtcblxuXHRcdFx0XHRcdD4gdGQge1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdGNsZWFyOiBsZWZ0O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAwIG5vbmU7XG5cblx0XHRcdFx0XHRcdC5wLWNvbHVtbi10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IC40cmVtO1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDMwJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IC0uNHJlbSAxcmVtIC0uNHJlbSAtLjRyZW07XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucC1wcm9ncmVzc2JhciB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC41cmVtO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0= */";
      /***/
    },

    /***/
    "MgdU":
    /*!*********************************************!*\
      !*** ./src/app/utilities/grid.component.ts ***!
      \*********************************************/

    /*! exports provided: GridComponent */

    /***/
    function MgdU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GridComponent", function () {
        return GridComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_grid_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./grid.component.html */
      "I3un");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var GridComponent = /*#__PURE__*/function () {
        function GridComponent(breadcrumbService) {
          _classCallCheck(this, GridComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Utilities'
          }, {
            label: 'Grid System',
            routerLink: ['/utilities/grid']
          }]);
        }

        _createClass(GridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.columns = [0, 1, 2, 3, 4, 5];
          }
        }, {
          key: "addColumn",
          value: function addColumn() {
            this.columns.push(this.columns.length);
          }
        }, {
          key: "removeColumn",
          value: function removeColumn() {
            this.columns.splice(-1, 1);
          }
        }]);

        return GridComponent;
      }();

      GridComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }];
      };

      GridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_grid_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          transform: 'translateX(0)',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          transform: 'translateX(50%)',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: 0,
          opacity: 0,
          transform: 'translateX(50%)'
        }))])])],
        styles: ["\n        .box {\n            background-color: var(--surface-e);\n            text-align: center;\n            padding: 1.25rem;\n            font-size: 1.5rem;\n            border-radius: 4px;\n            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n        }\n\n        .box-stretched {\n            height: 100%;\n        }\n\n        .vertical-container {\n            margin: 0;\n            height: 200px;\n            background: var(--surface-d);\n            border-radius: 4px;\n        }\n\n        .nested-grid .p-col-4 {\n            padding-bottom: 1rem;\n        }\n    "]
      })], GridComponent);
      /***/
    },

    /***/
    "NG6J":
    /*!*****************************************************!*\
      !*** ./src/app/pages/app.timelinedemo.component.ts ***!
      \*****************************************************/

    /*! exports provided: AppTimelineDemoComponent */

    /***/
    function NG6J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppTimelineDemoComponent", function () {
        return AppTimelineDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_timelinedemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.timelinedemo.component.html */
      "OM+n");
      /* harmony import */


      var _app_timelinedemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.timelinedemo.scss */
      "OyBH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");

      var AppTimelineDemoComponent = /*#__PURE__*/function () {
        function AppTimelineDemoComponent(breadcrumbService) {
          _classCallCheck(this, AppTimelineDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Pages'
          }, {
            label: 'Timeline',
            routerLink: ['/pages/timeline']
          }]);
        }

        _createClass(AppTimelineDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customEvents = [{
              status: 'Ordered',
              date: '15/10/2020 10:30',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeIcons"].SHOPPING_CART,
              color: '#9C27B0',
              image: 'game-controller.jpg'
            }, {
              status: 'Processing',
              date: '15/10/2020 14:00',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeIcons"].COG,
              color: '#673AB7'
            }, {
              status: 'Shipped',
              date: '15/10/2020 16:15',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeIcons"].ENVELOPE,
              color: '#FF9800'
            }, {
              status: 'Delivered',
              date: '16/10/2020 10:00',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeIcons"].CHECK,
              color: '#607D8B'
            }];
            this.horizontalEvents = ['2020', '2021', '2022', '2023'];
          }
        }]);

        return AppTimelineDemoComponent;
      }();

      AppTimelineDemoComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }];
      };

      AppTimelineDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_app_timelinedemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_timelinedemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppTimelineDemoComponent);
      /***/
    },

    /***/
    "NdMz":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/anotacion/anotacion.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NdMz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div *ngIf=\"ObjOptions.o8_1\" class=\"p-col-12\">\n        <h5>{{\"Entidad\" | translate }}</h5>\n        <div class=\"card\">\n            <h6>{{\"Identificador\" | translate }}</h6>\n            <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <label for=\"nombre\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Nombre\" | translate }}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"nombre\" [(ngModel)]='nombreNew' type=\"text\" pInputText>\n                    </div>\n                </div>\n                <div class=\"p-field p-grid\">\n                    <label for=\"apellido\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Apellido\" | translate }}</label>\n                    <div class=\"p-col-12 p-md-10\">\n\n                        <input id=\"apellido\" [(ngModel)]='apellidoNew' type=\"text\" pInputText>\n                    </div>\n                </div>\n                <div class=\"p-field p-grid\">\n                    <label for=\"lastname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Email\" | translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"lastname4\" [(ngModel)]='mailNew' type=\"text\" pInputText>\n                    </div>\n                </div>\n                <div class=\"p-field p-grid\">\n                    <label for=\"organizacion\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Organización\" | translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"organizacion\" [(ngModel)]='organizacionNew' type=\"text\" pInputText>\n                    </div>\n                </div>\n\n            </div>\n\n\n        </div>\n\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o8_2\" class=\"p-col-12\">\n        <h5>{{\"Fecha\" | translate }}</h5>\n        <div class=\"card\">\n            <h5>{{\"Fecha\" | translate }}</h5>\n\n            <div class=\"p-fluid\">\n\n                <div class=\"p-field p-grid\">\n                    <div class=\"p-col-12 p-md-10\">\n                        <p-calendar [(ngModel)]='fecha' [showIcon]=\"true\" inputId=\"icon\"></p-calendar>\n                    </div>\n                </div>\n            </div>\n\n            <!-- <h5>Hora</h5>\n            <div class=\"card\">\n                <div class=\"p-fluid p-formgrid p-grid\">\n                    <div class=\"p-field p-col\">\n                        <label for=\"horas\">{{\"Horas\"| translate}}</label>\n                        <p-inputNumber id=\"horas\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"24\"></p-inputNumber>\n                    </div>\n                    <div class=\"p-field p-col\">\n                        <label for=\"minutos\">{{\"Minutos\" | translate}}</label>\n                        <p-inputNumber id=\"minutos\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"60\"></p-inputNumber>\n                    </div>\n                    <div class=\"p-field p-col\">\n                        <label for=\"segundos\">{{\"Segundos\"| translate}}</label>\n                        <p-inputNumber id=\"segundos\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"60\"></p-inputNumber>\n                    </div>\n                </div>\n            </div> -->\n\n\n        </div>\n\n    </div>\n\n    <div *ngIf=\"ObjOptions.o8_3\" class=\"p-col-12\">\n        <h5>{{\"Descripción\" | translate }}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- <label for=\"descripcion\">Descripción</label> -->\n                <textarea id=\"descripcion\" [(ngModel)]='objAnotacion[\"Description\"][\"string\"]' type=\"text\" rows=\"4\" pInputTextarea></textarea>\n            </div>\n        </div>\n\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o8_4\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Modo de acceso\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"modo_acceso\" [(ngModel)]='modo_accesoSelect' name='modo_accesoSelect' (onChange)='cambio_modo_accesoSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"ObjOptions.o8_5\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Modo de acceso suficiente\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n\n                <p-dropdown [options]=\"modo_suficiente\" [(ngModel)]='modo_suficienteSelect' name='modo_suficienteSelect' (onChange)='cambio_modo_suficienteSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"ObjOptions.o8_6\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Rol\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"rol\" [(ngModel)]='rolSelect' name='rolSelect' (onChange)='cambio_rolSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n\n\n</div>";
      /***/
    },

    /***/
    "O+NY":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/relacion/relacion.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ONY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n\n\n    <div *ngIf=\"ObjOptions.o7_1\" class=\"p-col-12 \">\n        <h5>{{\"Tipo\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"tipos\" [(ngModel)]='tiposSelect' name='tiposSelect' (onChange)='cambio_tiposSelect()' placeholder='{{\"Seleccionar\"| translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o7_2\" class=\"p-col-12 \">\n        <h5>{{\"Recurso\" | translate}}</h5>\n        <div class=\"card\">\n            <h6>{{\"Identificador\" | translate}}</h6>\n            <div *ngIf=\"ObjOptions.o7_2_1\" class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <label for=\"catalogo\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Catálogo\" | translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"catalogo\" [(ngModel)]='objRelacion[\"Resource\"][\"Identifier\"][\"Catalog\"]' type=\"text\" pInputText>\n                    </div>\n                </div>\n                <div class=\"p-field p-grid\">\n                    <label for=\"entrada\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Entrada\" | translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n\n                        <input id=\"entrada\" [(ngModel)]='objRelacion[\"Resource\"][\"Identifier\"][\"Entry\"]' type=\"text\" pInputText>\n                    </div>\n                </div>\n                <!-- <div class=\"p-field p-grid\">\n                    <label for=\"lastname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Email\"| translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"lastname4\" type=\"text\" pInputText>\n                    </div>\n                </div>\n                <div class=\"p-field p-grid\">\n                    <label for=\"organizacion\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Organización\"| translate}}</label>\n                    <div class=\"p-col-12 p-md-10\">\n                        <input id=\"organizacion\" type=\"text\" pInputText>\n                    </div>\n                </div> -->\n\n            </div>\n\n            <div *ngIf=\"ObjOptions.o7_2_2\" class=\"card\">\n                <h6>{{\"Descripción\" | translate}}</h6>\n                <div class=\"p-fluid\">\n\n                    <textarea id=\"descripcion\" [(ngModel)]='objRelacion[\"Resource\"][\"Description\"]' type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</div>";
      /***/
    },

    /***/
    "OM+n":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.timelinedemo.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function OMN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h4>Timeline</h4>\n\n            <h5>Custom Timeline</h5>\n            <p-timeline [value]=\"customEvents\" align=\"alternate\" styleClass=\"customized-timeline\">\n                <ng-template pTemplate=\"marker\" let-event>\n                <span class=\"custom-marker p-shadow-2\" [style.backgroundColor]=\"event.color\">\n                    <i [ngClass]=\"event.icon\"></i>\n                </span>\n                </ng-template>\n                <ng-template pTemplate=\"content\" let-event>\n                    <p-card [header]=\"event.status\" [subheader]=\"event.date\">\n                        <img *ngIf=\"event.image\" [src]=\"'assets/demo/images/product/' + event.image\" [alt]=\"event.name\" width=\"200\" class=\"p-shadow-2\" />\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt\n                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>\n                        <button pButton label=\"Read more\" class=\"p-button-text\"></button>\n                    </p-card>\n                </ng-template>\n            </p-timeline>\n\n            <h5 style=\"margin-top: 5em\">Horizontal - Alternate Align</h5>\n            <p-timeline [value]=\"horizontalEvents\" layout=\"horizontal\" align=\"alternate\">\n                <ng-template pTemplate=\"content\" let-event>\n                    {{event}}\n                </ng-template>\n                <ng-template pTemplate=\"opposite\" let-event>\n                    &nbsp;\n                </ng-template>\n            </p-timeline>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "OnSs":
    /*!**********************************************!*\
      !*** ./src/app/pages/app.login.component.ts ***!
      \**********************************************/

    /*! exports provided: AppLoginComponent */

    /***/
    function OnSs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppLoginComponent", function () {
        return AppLoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.login.component.html */
      "G5Hk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppLoginComponent = function AppLoginComponent() {
        _classCallCheck(this, AppLoginComponent);
      };

      AppLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: _raw_loader_app_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppLoginComponent);
      /***/
    },

    /***/
    "OyBH":
    /*!*********************************************!*\
      !*** ./src/app/pages/app.timelinedemo.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function OyBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-marker {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n::ng-deep .p-timeline-event-content,\n::ng-deep .p-timeline-event-opposite {\n  line-height: 1;\n}\n\n@media screen and (max-width: 960px) {\n  ::ng-deep .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n  ::ng-deep .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n  ::ng-deep .customized-timeline .p-timeline-event-opposite {\n    flex: 0;\n  }\n  ::ng-deep .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC50aW1lbGluZWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBSUk7O0VBRUksY0FBQTtBQURSOztBQUtBO0VBR1k7SUFDSSw4QkFBQTtFQUpkO0VBTWM7SUFDSSwyQkFBQTtFQUpsQjtFQVFVO0lBQ0ksT0FBQTtFQU5kO0VBU1U7SUFDSSxnQkFBQTtFQVBkO0FBQ0YiLCJmaWxlIjoiYXBwLnRpbWVsaW5lZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy90aW1lbGluZVxuLmN1c3RvbS1tYXJrZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbjo6bmctZGVlcCB7XG4gICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCxcbiAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgICAuY3VzdG9taXplZC10aW1lbGluZSB7XG4gICAgICAgICAgICAucC10aW1lbGluZS1ldmVudDpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIC5wLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgICAgICAgICAgICAgZmxleDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnAtY2FyZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "P2fs":
    /*!*********************************************************!*\
      !*** ./src/app/demo/view/invalidstatedemo.component.ts ***!
      \*********************************************************/

    /*! exports provided: InvalidStateDemoComponent */

    /***/
    function P2fs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvalidStateDemoComponent", function () {
        return InvalidStateDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invalidstatedemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invalidstatedemo.component.html */
      "Bm+J");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_countryservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/countryservice */
      "CuUz");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var InvalidStateDemoComponent = /*#__PURE__*/function () {
        function InvalidStateDemoComponent(countryService, breadcrumbService) {
          _classCallCheck(this, InvalidStateDemoComponent);

          this.countryService = countryService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Invalid State',
            routerLink: ['/uikit/invalidstate']
          }]);
          this.cities = [{
            name: 'New York',
            code: 'NY'
          }, {
            name: 'Rome',
            code: 'RM'
          }, {
            name: 'London',
            code: 'LDN'
          }, {
            name: 'Istanbul',
            code: 'IST'
          }, {
            name: 'Paris',
            code: 'PRS'
          }];
        }

        _createClass(InvalidStateDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.countryService.getCountries().then(function (countries) {
              _this13.countries = countries;
            });
          }
        }, {
          key: "searchCountry",
          value: function searchCountry(event) {
            // in a real application, make a request to a remote url with the query and return filtered results,
            // for demo we filter at client side
            var filtered = [];
            var query = event.query;

            for (var i = 0; i < this.countries.length; i++) {
              var country = this.countries[i];

              if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
              }
            }

            this.filteredCountries = filtered;
          }
        }]);

        return InvalidStateDemoComponent;
      }();

      InvalidStateDemoComponent.ctorParameters = function () {
        return [{
          type: _service_countryservice__WEBPACK_IMPORTED_MODULE_3__["CountryService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }];
      };

      InvalidStateDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_invalidstatedemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], InvalidStateDemoComponent);
      /***/
    },

    /***/
    "PDy5":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component-name/component-name.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PDy5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>component-name works!</p>\n";
      /***/
    },

    /***/
    "PqK1":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/derechos/derechos.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PqK1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div *ngIf=\"ObjOptions.o6_1\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Coste\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"coste\" [(ngModel)]='costeSelect' name='costeSelect' (onChange)='cambio_costeSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"ObjOptions.o6_2\" class=\"p-col-12 p-md-6\">\n        <h5>{{\"Derechos de autor y otras actividades\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"decision\" [(ngModel)]='decisionSelect' name='decisionSelect' (onChange)='cambio_decisionSelect()' placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o6_3\" class=\"p-col-12\">\n        <h5>{{\"Descripción\" | translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <div class=\"p-field p-grid\">\n                    <label for=\"descripcion\">{{\"Descripción\" | translate}}</label>\n                    <textarea id=\"descripcion\" [(ngModel)]='objderechos[\"Description\"]' type=\"text\" rows=\"4\" pInputTextarea></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n</div>";
      /***/
    },

    /***/
    "Pv7A":
    /*!******************************************************!*\
      !*** ./src/app/demo/view/documentation.component.ts ***!
      \******************************************************/

    /*! exports provided: DocumentationComponent */

    /***/
    function Pv7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () {
        return DocumentationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./documentation.component.html */
      "a6dQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var DocumentationComponent = function DocumentationComponent(breadcrumbService) {
        _classCallCheck(this, DocumentationComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Documentation',
          routerLink: ['/documentation']
        }]);
      };

      DocumentationComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      DocumentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        .docs pre.doc-command {\n            font-family: monospace;\n            background-color: #5a657c;\n            color: #ffffff;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }\n\n        .docs p,\n        .docs li{\n            line-height: 2;\n        }\n\n        .docs i {\n            background: #f1daad;\n            font-family: monaco,Consolas,Lucida Console,monospace;\n            font-weight: 700;\n            padding: 2px 4px;\n            letter-spacing: .5px;\n            font-style: normal;\n            color: #424242;\n            border-radius: 4px;\n        }\n        "]
      })], DocumentationComponent);
      /***/
    },

    /***/
    "QkCk":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/viewjson/viewjson.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QkCk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>viewjson works!</p>";
      /***/
    },

    /***/
    "Qlo/":
    /*!*********************************************************!*\
      !*** ./src/app/paginas/viewjson/viewjson.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Qlo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3anNvbi5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SBVP":
    /*!************************************************************!*\
      !*** ./src/app/component-name/component-name.component.ts ***!
      \************************************************************/

    /*! exports provided: ComponentNameComponent */

    /***/
    function SBVP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentNameComponent", function () {
        return ComponentNameComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_component_name_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./component-name.component.html */
      "PDy5");
      /* harmony import */


      var _component_name_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./component-name.component.css */
      "uzk9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ComponentNameComponent = /*#__PURE__*/function () {
        function ComponentNameComponent() {
          _classCallCheck(this, ComponentNameComponent);
        }

        _createClass(ComponentNameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ComponentNameComponent;
      }();

      ComponentNameComponent.ctorParameters = function () {
        return [];
      };

      ComponentNameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-component-name',
        template: _raw_loader_component_name_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_component_name_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ComponentNameComponent);
      /***/
    },

    /***/
    "SK3t":
    /*!******************************************************!*\
      !*** ./src/app/paginas/viewxml/viewxml.component.ts ***!
      \******************************************************/

    /*! exports provided: ViewxmlComponent */

    /***/
    function SK3t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewxmlComponent", function () {
        return ViewxmlComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_viewxml_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./viewxml.component.html */
      "VseN");
      /* harmony import */


      var _viewxml_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./viewxml.component.css */
      "2X1q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ViewxmlComponent = /*#__PURE__*/function () {
        function ViewxmlComponent() {
          _classCallCheck(this, ViewxmlComponent);
        }

        _createClass(ViewxmlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ViewxmlComponent;
      }();

      ViewxmlComponent.ctorParameters = function () {
        return [];
      };

      ViewxmlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-viewxml',
        template: _raw_loader_viewxml_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_viewxml_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ViewxmlComponent);
      /***/
    },

    /***/
    "SsAV":
    /*!*********************************************!*\
      !*** ./src/app/utilities/text.component.ts ***!
      \*********************************************/

    /*! exports provided: TextComponent */

    /***/
    function SsAV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextComponent", function () {
        return TextComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_text_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./text.component.html */
      "zYCZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var TextComponent = function TextComponent(breadcrumbService) {
        _classCallCheck(this, TextComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'Text',
          routerLink: ['/utilities/text']
        }]);
      };

      TextComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      TextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_text_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        .demo-container {\n            border: 1px solid var(--surface-d);\n        }\n    "]
      })], TextComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modelo/objOptions */
      "u28Z");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./servicios/lompad.service */
      "dyE0");

      var AppComponent = /*#__PURE__*/function () {
        // ESTE ES EL PRINCIPAL
        function AppComponent(primengConfig, translate, lompadService, router // private generalcom:GeneralComponent
        // private comMenuIz:AppMenuComponent
        ) {
          _classCallCheck(this, AppComponent);

          this.primengConfig = primengConfig;
          this.translate = translate;
          this.lompadService = lompadService;
          this.router = router;
          this.darkMode = false;
          this.menuColorMode = 'light';
          this.menuColor = 'layout-menu-light';
          this.themeColor = 'blue';
          this.layoutColor = 'blue';
          this.ripple = true;
          this.inputStyle = 'outlined';
          this.objOptions = new _modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"]();
          this.enableGeneral = false;
          translate.addLangs(['en', 'fr']);
          translate.setDefaultLang('es');
          this.ngOnInit();
        } // @HostListener('window:beforeunload', ['$event'])
        // beforeunloadHandler(event) {
        //     this.router.navigateByUrl("/paginas/accesibilidad");
        //     // this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
        //     // this.service.add({key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
        //     // this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
        //     // this.toas.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
        // }


        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.navigateByUrl("/"); //Esto es necesario ya que cada vez que vayamos a actualizar debemos voler a la pagina de inicio    

            this.primengConfig.ripple = true; // this.cambioPerfilLocal(this.lompadService.getPerfil())
          } // public saveInfoGen(){
          //     this.generalcom.saveInfo();
          // }

        }, {
          key: "cambioIdiomaAplication",
          value: function cambioIdiomaAplication(event) {
            console.log(event.value.name);
            this.translate.use(event.value.name);
          }
        }, {
          key: "cambioPerfilLocal",
          value: function cambioPerfilLocal(param) {
            if (param === "IEEE LOM") {
              this.formatIEEE();
            } else if (param === "CanCore") {
              this.formatCanCore();
            } else if (param === "LMRI") {
              this.formatLMRI();
            } else if (param === "SCORM") {
              this.formatScorm();
            }
          }
        }, {
          key: "cambioPerfil",
          value: function cambioPerfil(event) {
            if (event.value === "IEEE LOM") {
              this.formatIEEE();
            } else if (event.value === "CanCore") {
              this.formatCanCore();
            } else if (event.value === "LMRI") {
              this.formatLMRI();
            } else if (event.value === "SCORM") {
              this.formatScorm();
            }
          }
        }, {
          key: "enableGeneralMethod",
          value: function enableGeneralMethod() {
            console.log("habilitando");
            this.enableGeneral = true;
          }
        }, {
          key: "formatIEEE",
          value: function formatIEEE() {
            console.log("formateando IEEE");
            this.objOptions.o1 = true;
            this.objOptions.o1_1 = true;
            this.objOptions.o1_2 = true;
            this.objOptions.o1_3 = true;
            this.objOptions.o1_4 = true;
            this.objOptions.o1_5 = true;
            this.objOptions.o1_6 = true;
            this.objOptions.o1_7 = true;
            this.objOptions.o1_8 = true;
            this.objOptions.o2 = true;
            this.objOptions.o2_1 = true;
            this.objOptions.o2_2 = true;
            this.objOptions.o2_3 = true;
            this.objOptions.o2_3_1 = true;
            this.objOptions.o2_3_2 = true;
            this.objOptions.o2_3_3 = true;
            this.objOptions.o3 = true;
            this.objOptions.o3_1 = true;
            this.objOptions.o3_2 = true;
            this.objOptions.o3_2_1 = true;
            this.objOptions.o3_2_2 = true;
            this.objOptions.o3_2_3 = true;
            this.objOptions.o3_3 = true;
            this.objOptions.o3_4 = true;
            this.objOptions.o4 = true;
            this.objOptions.o4_1 = true;
            this.objOptions.o4_2 = true;
            this.objOptions.o4_3 = true;
            this.objOptions.o4_4 = true;
            this.objOptions.o4_4_1 = true;
            this.objOptions.o4_5 = true;
            this.objOptions.o4_6 = true;
            this.objOptions.o4_7 = true;
            this.objOptions.o5 = true;
            this.objOptions.o5_1 = true;
            this.objOptions.o5_2 = true;
            this.objOptions.o5_3 = true;
            this.objOptions.o5_4 = true;
            this.objOptions.o5_5 = true;
            this.objOptions.o5_6 = true;
            this.objOptions.o5_7 = true;
            this.objOptions.o5_8 = true;
            this.objOptions.o5_9 = true;
            this.objOptions.o5_10 = true;
            this.objOptions.o5_11 = true;
            this.objOptions.o6 = true;
            this.objOptions.o6_1 = true;
            this.objOptions.o6_2 = true;
            this.objOptions.o6_3 = true;
            this.objOptions.o7 = true;
            this.objOptions.o7_1 = true;
            this.objOptions.o7_2 = true;
            this.objOptions.o7_2_1 = true;
            this.objOptions.o7_2_2 = true;
            this.objOptions.o8 = true;
            this.objOptions.o8_1 = true;
            this.objOptions.o8_2 = true;
            this.objOptions.o8_3 = true;
            this.objOptions.o8_4 = true;
            this.objOptions.o8_5 = true;
            this.objOptions.o8_6 = true;
            this.objOptions.o9 = true;
            this.objOptions.o9_1 = true;
            this.objOptions.o9_2 = true;
            this.objOptions.o9_2_1 = true;
            this.objOptions.o9_2_2 = true;
            this.objOptions.o9_3 = true;
            this.objOptions.o9_4 = true;
            this.objOptions.o10 = true;
          }
        }, {
          key: "formatCanCore",
          value: function formatCanCore() {
            console.log("formateando CanCore");
            this.objOptions.o1 = true;
            this.objOptions.o1_1 = true;
            this.objOptions.o1_2 = true;
            this.objOptions.o1_3 = true;
            this.objOptions.o1_4 = true;
            this.objOptions.o1_5 = true;
            this.objOptions.o1_6 = false;
            this.objOptions.o1_7 = false;
            this.objOptions.o1_8 = true;
            this.objOptions.o2 = true;
            this.objOptions.o2_1 = true;
            this.objOptions.o2_2 = false;
            this.objOptions.o2_3 = true;
            this.objOptions.o2_3_1 = true;
            this.objOptions.o2_3_2 = true;
            this.objOptions.o2_3_3 = true;
            this.objOptions.o3 = true;
            this.objOptions.o3_1 = true;
            this.objOptions.o3_2 = true;
            this.objOptions.o3_2_1 = true;
            this.objOptions.o3_2_2 = true;
            this.objOptions.o3_2_3 = true;
            this.objOptions.o3_3 = true;
            this.objOptions.o3_4 = true;
            this.objOptions.o4 = true;
            this.objOptions.o4_1 = true;
            this.objOptions.o4_2 = true;
            this.objOptions.o4_3 = true;
            this.objOptions.o4_4 = false;
            this.objOptions.o4_4_1 = false;
            this.objOptions.o4_5 = false;
            this.objOptions.o4_6 = true;
            this.objOptions.o4_7 = true;
            this.objOptions.o5 = true;
            this.objOptions.o5_1 = false;
            this.objOptions.o5_2 = true;
            this.objOptions.o5_3 = true;
            this.objOptions.o5_4 = false;
            this.objOptions.o5_5 = true;
            this.objOptions.o5_6 = true;
            this.objOptions.o5_7 = true;
            this.objOptions.o5_8 = false;
            this.objOptions.o5_9 = true;
            this.objOptions.o5_10 = false;
            this.objOptions.o5_11 = true;
            this.objOptions.o6 = true;
            this.objOptions.o6_1 = true;
            this.objOptions.o6_2 = true;
            this.objOptions.o6_3 = true;
            this.objOptions.o7 = true;
            this.objOptions.o7_1 = true;
            this.objOptions.o7_2 = true;
            this.objOptions.o7_2_1 = true;
            this.objOptions.o7_2_2 = false;
            this.objOptions.o8 = true;
            this.objOptions.o8_1 = true;
            this.objOptions.o8_2 = true;
            this.objOptions.o8_3 = true;
            this.objOptions.o8_4 = false;
            this.objOptions.o8_5 = false;
            this.objOptions.o8_6 = true;
            this.objOptions.o9 = true;
            this.objOptions.o9_1 = true;
            this.objOptions.o9_2 = true;
            this.objOptions.o9_2_1 = true;
            this.objOptions.o9_2_2 = true;
            this.objOptions.o9_3 = false;
            this.objOptions.o9_4 = true;
            this.objOptions.o10 = false;
          }
        }, {
          key: "formatLMRI",
          value: function formatLMRI() {
            console.log("formateando LMRI");
            this.objOptions.o1 = true;
            this.objOptions.o1_1 = true;
            this.objOptions.o1_2 = true;
            this.objOptions.o1_3 = false;
            this.objOptions.o1_4 = true;
            this.objOptions.o1_5 = true;
            this.objOptions.o1_6 = false;
            this.objOptions.o1_7 = false;
            this.objOptions.o1_8 = false;
            this.objOptions.o2 = true;
            this.objOptions.o2_1 = true;
            this.objOptions.o2_2 = false;
            this.objOptions.o2_3 = true;
            this.objOptions.o2_3_1 = true;
            this.objOptions.o2_3_2 = true;
            this.objOptions.o2_3_3 = true;
            this.objOptions.o3 = false;
            this.objOptions.o3_1 = false;
            this.objOptions.o3_2 = false;
            this.objOptions.o3_2_1 = false;
            this.objOptions.o3_2_2 = false;
            this.objOptions.o3_2_3 = false;
            this.objOptions.o3_3 = false;
            this.objOptions.o3_4 = false;
            this.objOptions.o4 = true;
            this.objOptions.o4_1 = false;
            this.objOptions.o4_2 = false;
            this.objOptions.o4_3 = true;
            this.objOptions.o4_4 = false;
            this.objOptions.o4_4_1 = false;
            this.objOptions.o4_5 = false;
            this.objOptions.o4_6 = false;
            this.objOptions.o4_7 = true;
            this.objOptions.o5 = true;
            this.objOptions.o5_1 = true;
            this.objOptions.o5_2 = true;
            this.objOptions.o5_3 = true;
            this.objOptions.o5_4 = false;
            this.objOptions.o5_5 = true;
            this.objOptions.o5_6 = true;
            this.objOptions.o5_7 = true;
            this.objOptions.o5_8 = false;
            this.objOptions.o5_9 = true;
            this.objOptions.o5_10 = false;
            this.objOptions.o5_11 = true;
            this.objOptions.o6 = true;
            this.objOptions.o6_1 = false;
            this.objOptions.o6_2 = true;
            this.objOptions.o6_3 = true;
            this.objOptions.o7 = true;
            this.objOptions.o7_1 = true;
            this.objOptions.o7_2 = true;
            this.objOptions.o7_2_1 = true;
            this.objOptions.o7_2_2 = true;
            this.objOptions.o8 = true;
            this.objOptions.o8_1 = false;
            this.objOptions.o8_2 = false;
            this.objOptions.o8_3 = false;
            this.objOptions.o8_4 = false;
            this.objOptions.o8_5 = true;
            this.objOptions.o8_6 = true;
            this.objOptions.o9 = true;
            this.objOptions.o9_1 = true;
            this.objOptions.o9_2 = false;
            this.objOptions.o9_2_1 = false;
            this.objOptions.o9_2_2 = false;
            this.objOptions.o9_3 = true;
            this.objOptions.o9_4 = true;
            this.objOptions.o10 = true;
          }
        }, {
          key: "formatScorm",
          value: function formatScorm() {
            console.log("formateando scorm");
            this.objOptions.o1 = true;
            this.objOptions.o1_1 = true;
            this.objOptions.o1_2 = true;
            this.objOptions.o1_3 = false;
            this.objOptions.o1_4 = true;
            this.objOptions.o1_5 = true;
            this.objOptions.o1_6 = false;
            this.objOptions.o1_7 = false;
            this.objOptions.o1_8 = false;
            this.objOptions.o2 = true;
            this.objOptions.o2_1 = true;
            this.objOptions.o2_2 = true;
            this.objOptions.o2_3 = false;
            this.objOptions.o2_3_1 = false;
            this.objOptions.o2_3_2 = false;
            this.objOptions.o2_3_3 = false;
            this.objOptions.o3 = true;
            this.objOptions.o3_1 = true;
            this.objOptions.o3_2 = false;
            this.objOptions.o3_2_1 = false;
            this.objOptions.o3_2_2 = false;
            this.objOptions.o3_2_3 = false;
            this.objOptions.o3_3 = true;
            this.objOptions.o3_4 = false;
            this.objOptions.o4 = true;
            this.objOptions.o4_1 = true;
            this.objOptions.o4_2 = false;
            this.objOptions.o4_3 = false;
            this.objOptions.o4_4 = false;
            this.objOptions.o4_4_1 = false;
            this.objOptions.o4_5 = false;
            this.objOptions.o4_6 = false;
            this.objOptions.o4_7 = false;
            this.objOptions.o5 = false;
            this.objOptions.o5_1 = false;
            this.objOptions.o5_2 = false;
            this.objOptions.o5_3 = false;
            this.objOptions.o5_4 = false;
            this.objOptions.o5_5 = false;
            this.objOptions.o5_6 = false;
            this.objOptions.o5_7 = false;
            this.objOptions.o5_8 = false;
            this.objOptions.o5_9 = false;
            this.objOptions.o5_10 = false;
            this.objOptions.o5_11 = false;
            this.objOptions.o6 = true;
            this.objOptions.o6_1 = true;
            this.objOptions.o6_2 = true;
            this.objOptions.o6_3 = false;
            this.objOptions.o7 = false;
            this.objOptions.o7_1 = false;
            this.objOptions.o7_2 = false;
            this.objOptions.o7_2_1 = false;
            this.objOptions.o7_2_2 = false;
            this.objOptions.o8 = false;
            this.objOptions.o8_1 = false;
            this.objOptions.o8_2 = false;
            this.objOptions.o8_3 = false;
            this.objOptions.o8_4 = false;
            this.objOptions.o8_5 = false;
            this.objOptions.o8_6 = false;
            this.objOptions.o9 = false;
            this.objOptions.o9_1 = false;
            this.objOptions.o9_2 = false;
            this.objOptions.o9_2_1 = false;
            this.objOptions.o9_2_2 = false;
            this.objOptions.o9_3 = false;
            this.objOptions.o9_4 = false;
            this.objOptions.o10 = false;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeNGConfig"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_7__["LompadService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]]
      })], AppComponent);
      /***/
    },

    /***/
    "U3hP":
    /*!****************************************************!*\
      !*** ./src/app/paginas/inicio/inicio.component.ts ***!
      \****************************************************/

    /*! exports provided: InicioComponent */

    /***/
    function U3hP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
        return InicioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inicio.component.html */
      "5QhL");
      /* harmony import */


      var _inicio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inicio.component.css */
      "7Sq9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_servicios_lompad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/servicios/lompad.service */
      "dyE0");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../app.main.component */
      "mqcR");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");

      var InicioComponent = /*#__PURE__*/function () {
        function InicioComponent(fb, lompadservice, appMain, cookieService) {
          _classCallCheck(this, InicioComponent);

          this.fb = fb;
          this.lompadservice = lompadservice;
          this.appMain = appMain;
          this.cookieService = cookieService;
          this.uploadedFiles = [];
          this.fileCharger = false;
          this["switch"] = false;
          this.msgs = [];
          this.form = this.fb.group({
            file: [null]
          });
        }

        _createClass(InicioComponent, [{
          key: "mostrarAdvertencia",
          value: function mostrarAdvertencia() {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Advertencia: ',
              detail: 'Asegúrese de haber descargado el objeto de aprendizaje anteriormente cargado.'
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pregarga();
          }
        }, {
          key: "pregarga",
          value: function pregarga() {
            //  var datosGenerales=JSON.parse(localStorage.getItem("perfil_hash"));//recuperacion DAtos
            if (this.cookieService.check("perfil")) {
              //PILAS AQUI PUEDE DER EL PERFIL O TAMBIEN EL HASH    
              this.fileCharger = true;
              this.appMain.staticMenuActive = true;
              this.msgs = [];
              this.msgs.push({
                severity: 'info',
                summary: 'OK',
                detail: 'Objeto de aprendizaje cargado.'
              });
            } else {
              this.msgs = [];
              this.msgs.push({
                severity: 'info',
                summary: '',
                detail: 'Por favor carge un objeto de aprendizaje.'
              });
            }
          } // comprobacion(){
          //   if (this.lompadservice.revLocal()!=null){
          //     this.lompadservice.getobject(); 
          //     this.appMain.staticMenuActive=true;
          //     this.router.navigateByUrl("/paginas/general");    
          //   }
          // }

        }, {
          key: "onUpload",
          value: function onUpload(event) {
            // const file = (event.target as HTMLInputElement).files[0];
            var file = event.files[0];
            this.form.patchValue({
              file: file
            });
            this.form.get('file').updateValueAndValidity();
            var formData = new FormData();
            formData.append("file", this.form.get('file').value);
            this.cookieService.set("tipoArchivo", file.name.split(".")[1]);
            this.lompadservice.setArchivo(formData);
            this.appMain.staticMenuActive = true; //info warn error success

            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Correcto',
              detail: 'Objeto de aprendizaje cargado.'
            }); // this.router.navigateByUrl("/paginas/general");
          }
        }, {
          key: "upload",
          value: function upload(event) {
            console.log("subir evento");
            var file = event.target.files[0];
            this.form.patchValue({
              file: file
            });
            this.form.get('file').updateValueAndValidity();
          }
        }]);

        return InicioComponent;
      }();

      InicioComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_servicios_lompad_service__WEBPACK_IMPORTED_MODULE_5__["LompadService"]
        }, {
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_6__["AppMainComponent"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
        }];
      };

      InicioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InicioComponent);
      /***/
    },

    /***/
    "UV3p":
    /*!******************************************!*\
      !*** ./src/app/demo/view/mediademo.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function UV3p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".product-item .product-item-content {\n  border: 1px solid var(--surface-d);\n  border-radius: 3px;\n  margin: 0.3rem;\n  text-align: center;\n  padding: 2rem 0;\n}\n.product-item .product-image {\n  width: 50%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZWRpYWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLFVBQUE7RUFDQSx3RUFBQTtBQURSIiwiZmlsZSI6Im1lZGlhZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaXRlbSB7XG4gICAgLnByb2R1Y3QtaXRlbS1jb250ZW50IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1kKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IC4zcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "V7uT":
    /*!*********************************************************!*\
      !*** ./src/app/paginas/derechos/derechos.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function V7uT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXJlY2hvcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "VseN":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/viewxml/viewxml.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function VseN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>viewxml works!</p>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet>\n</router-outlet>";
      /***/
    },

    /***/
    "W2Tc":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/floatlabeldemo.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function W2Tc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-nogutter floatlabel-demo\">\n    <div class=\"card p-fluid\" style=\"width: 100%\">\n        <h5>Float Label</h5>\n        <p>All input text components support floating labels by adding (<mark>.p-float-label</mark>) to wrapper class.</p>\n        <div class=\"p-grid\">\n            <div class=\"p-col-12 p-md-6\">\n                <div class=\"p-field\">\n                    <span class=\"p-float-label\">\n                        <input type=\"text\" id=\"inputtext\" pInputText [(ngModel)]=\"value1\">\n                        <label for=\"inputtext\">InputText</label>\n                    </span>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label p-input-icon-left\">\n                        <i class=\"pi pi-search\"></i>\n                        <input type=\"text\" id=\"lefticon\" pInputText [(ngModel)]=\"value11\">\n                        <label for=\"lefticon\">Left Icon</label>\n                    </span>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label p-input-icon-right\">\n                        <input type=\"text\" id=\"righticon\" pInputText [(ngModel)]=\"value12\">\n                        <label for=\"righticon\">Right Icon</label>\n                        <i class=\"pi pi-spin pi-spinner\"></i>\n                    </span>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label\">\n                        <p-inputMask inputId=\"inputmask\" mask=\"99/99/9999\" [(ngModel)]=\"value5\"></p-inputMask>\n                        <label for=\"inputmask\">InputMask</label>\n                    </span>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label\">\n                        <p-inputNumber inputId=\"inputnumber\" [(ngModel)]=\"value6\"></p-inputNumber>\n                        <label for=\"inputnumber\">InputNumber</label>\n                    </span>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label\">\n                        <p-chips inputId=\"chips\" [(ngModel)]=\"value4\"></p-chips>\n                        <label for=\"chips\">Chips</label>\n                    </span>\n                </div>\n            </div>\n\n            <div class=\"p-col-12 p-md-6\">\n                <div class=\"p-field\">\n                    <div class=\"p-inputgroup\">\n                        <span class=\"p-inputgroup-addon\">\n                            <i class=\"pi pi-user\"></i>\n                        </span>\n                        <span class=\"p-float-label\">\n                            <input type=\"text\" id=\"inputgroup\" pInputText [(ngModel)]=\"value7\">\n                            <label for=\"inputgroup\">InputGroup</label>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label\">\n                        <p-autoComplete inputId=\"autocomplete\" [(ngModel)]=\"value2\" [suggestions]=\"filteredCountries\"\n                                        (completeMethod)=\"searchCountry($event)\" field=\"name\"></p-autoComplete>\n                        <label for=\"autocomplete\">AutoComplete</label>\n                    </span>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label\">\n                        <p-calendar inputId=\"calendar\" [(ngModel)]=\"value3\"></p-calendar>\n                        <label for=\"calendar\">Calendar</label>\n                    </span>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label\">\n                        <p-dropdown inputId=\"dropdown\" [autoDisplayFirst]=\"false\" [options]=\"cities\" [(ngModel)]=\"value8\"\n                                    optionLabel=\"name\"></p-dropdown>\n                        <label for=\"dropdown\">Dropdown</label>\n                    </span>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label\">\n                        <p-multiSelect inputId=\"multiselect\" [options]=\"cities\" [(ngModel)]=\"value9\" optionLabel=\"name\"\n                                       [filter]=\"false\"></p-multiSelect>\n                        <label for=\"multiselect\">MultiSelect</label>\n                    </span>\n                </div>\n                <div class=\"p-field\">\n                    <span class=\"p-float-label\">\n                        <textarea inputId=\"textarea\" rows=\"3\" cols=\"30\" [(ngModel)]=\"value10\" pInputTextarea></textarea>\n                        <label for=\"textarea\">Textarea</label>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "WCjU":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.menu.component.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function WCjU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"layout-sidebar\" [ngClass]=\"{'layout-sidebar-active': appMain.sidebarActive}\" (click)=\"appMain.onSidebarClick($event)\">\n    <!-- (mouseover)=\"appMain.sidebarActive=true\" (mouseleave)=\"appMain.sidebarActive=false\" -->\n    <div class=\"sidebar-logo\" style=\"padding-right: 20%;\">\n        <!-- <a href=\"#\" class=\"sidebar-pin\" title=\"Toggle Menu\">\n            (click)=\"appMain.onToggleMenuClick($event)\"\n            <i class=\"pi pi-lock\" *ngIf=\"appMain.staticMenuActive\"></i>\n            <i class=\"pi pi-lock-open\" *ngIf=\"!appMain.staticMenuActive\"></i>\n        </a> -->\n        <!-- routerLink=\"/\" ESTABA DENTRO DE ETIQUETA <a> -->\n        <a>\n            <!-- <img alt=\"logo\" src=\"assets/layout/images/logo-mirage@2x.png\" /> -->\n            <span class=\"app-name\">LOMpad Schema </span>\n        </a>\n    </div>\n\n    <div class=\"layout-menu-container\" (click)=\"onMenuClick()\">\n        <ul class=\"layout-menu\">\n            <li app-menuitem *ngFor=\"let item of model; let i = index;\" [item]=\"item\" [index]=\"i\" [root]=\"true\" style=\"padding-top: 0px !important;\"></li>\n        </ul>\n    </div>\n</div>";
      /***/
    },

    /***/
    "WCqc":
    /*!*********************************************!*\
      !*** ./src/app/demo/service/nodeservice.ts ***!
      \*********************************************/

    /*! exports provided: NodeService */

    /***/
    function WCqc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodeService", function () {
        return NodeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NodeService = /*#__PURE__*/function () {
        function NodeService(http) {
          _classCallCheck(this, NodeService);

          this.http = http;
        }

        _createClass(NodeService, [{
          key: "getFiles",
          value: function getFiles() {
            return this.http.get('assets/demo/data/files.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }, {
          key: "getLazyFiles",
          value: function getLazyFiles() {
            return this.http.get('assets/demo/data/files-lazy.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }, {
          key: "getFilesystem",
          value: function getFilesystem() {
            return this.http.get('assets/demo/data/filesystem.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }, {
          key: "getLazyFilesystem",
          value: function getLazyFilesystem() {
            return this.http.get('assets/demo/data/filesystem-lazy.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }]);

        return NodeService;
      }();

      NodeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      NodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], NodeService);
      /***/
    },

    /***/
    "WLLV":
    /*!******************************************************!*\
      !*** ./src/app/paginas/tecnica/tecnica.component.ts ***!
      \******************************************************/

    /*! exports provided: TecnicaComponent */

    /***/
    function WLLV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnicaComponent", function () {
        return TecnicaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tecnica_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tecnica.component.html */
      "EwiA");
      /* harmony import */


      var _tecnica_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tecnica.component.css */
      "pf31");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/objOptions */
      "u28Z");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");

      var TecnicaComponent = /*#__PURE__*/function () {
        function TecnicaComponent(componentePrincipal, lompadservice) {
          _classCallCheck(this, TecnicaComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.ObjOptions = new src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"]();
        }

        _createClass(TecnicaComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            this.objTecnica = this.lompadservice.objPricipal['DATA']['technical'];

            try {
              this.castTime(this.objTecnica['Duration']);
            } catch (error) {
              console.log("Controlado: años meses ...etc");
            }
          }
        }, {
          key: "castTime",
          value: function castTime(param) {
            var one = param.split('DT')[0];
            var dos = param.split('DT')[1];
            one = one.substr(1, one.length);
            this.years = +one.split("Y")[0];
            this.months = +one.split("Y")[1].split("M")[0];
            this.days = +one.split("Y")[1].split("M")[1];
            this.hours = +dos.split("H")[0];
            this.minutes = +dos.split("H")[1].split('M')[0];
          }
        }, {
          key: "saveTime",
          value: function saveTime() {
            this.objTecnica['Duration'] = "P" + this.years + "Y" + this.months + "M" + this.days + "DT" + this.hours + "H" + this.minutes + "M"; // console.log("P"+this.years+"Y"+this.months+"M"+this.days+"DT"+this.hours+"H"+this.minutes+"M")
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy tecnica");
            this.saveTime();
            this.lompadservice.objPricipal['DATA']['technical'] = this.objTecnica;
            this.lompadservice.saveObjectLompad(this.objTecnica, "technical");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDatos();
            this.tiposOr = [{
              label: 'Sistema Operativo',
              value: 'operating system',
              code: 'sys_o'
            }, {
              label: 'Navegador',
              value: 'browser',
              code: 'nav'
            }];
            this.tiposSystem = [{
              label: 'pc-dos',
              value: 'pc-dos',
              code: 'sys_o'
            }, {
              label: 'ms-windows',
              value: 'ms-windows',
              code: 'nav'
            }, {
              label: 'macos',
              value: 'macos',
              code: 'nav'
            }, {
              label: 'unix',
              value: 'unix',
              code: 'nav'
            }, {
              label: 'multi-os',
              value: 'multi-os',
              code: 'nav'
            }, {
              label: 'Ninguno',
              value: 'none',
              code: 'nav'
            }];
            this.ObjOptions = this.componentePrincipal.objOptions; // this.objTecnica=this.lompadservice.getObjTecnica();

            console.log("DEsde TEcnica: ", this.objTecnica);
            this.req_tipo_select = this.objTecnica['Requirement']['OrComposite']['Type'];
            this.nombreSelect = this.objTecnica['Requirement']['OrComposite']['Name'];
          }
        }, {
          key: "cambioreq_tipo_select",
          value: function cambioreq_tipo_select() {
            console.log(this.req_tipo_select);
            this.objTecnica['Requirement']['OrComposite']['Type'] = this.req_tipo_select;
          }
        }, {
          key: "cambioreq_nombre",
          value: function cambioreq_nombre() {
            console.log(this.nombreSelect);
            this.objTecnica['Requirement']['OrComposite']['Name'] = this.nombreSelect;
          }
        }]);

        return TecnicaComponent;
      }();

      TecnicaComponent.ctorParameters = function () {
        return [{
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__["LompadService"]
        }];
      };

      TecnicaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tecnica',
        template: _raw_loader_tecnica_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tecnica_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TecnicaComponent);
      /***/
    },

    /***/
    "WOi/":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/mediademo.component.ts ***!
      \**************************************************/

    /*! exports provided: MediaDemoComponent */

    /***/
    function WOi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaDemoComponent", function () {
        return MediaDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mediademo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mediademo.component.html */
      "IzyT");
      /* harmony import */


      var _mediademo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mediademo.scss */
      "UV3p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");
      /* harmony import */


      var _service_photoservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/photoservice */
      "xLnY");
      /* harmony import */


      var src_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/breadcrumb.service */
      "pMwP");

      var MediaDemoComponent = /*#__PURE__*/function () {
        function MediaDemoComponent(breadcrumbService, productService, photoService) {
          _classCallCheck(this, MediaDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.productService = productService;
          this.photoService = photoService;
          this.galleriaResponsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 5
          }, {
            breakpoint: '960px',
            numVisible: 4
          }, {
            breakpoint: '768px',
            numVisible: 3
          }, {
            breakpoint: '560px',
            numVisible: 1
          }];
          this.carouselResponsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
          }, {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
          }, {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
          }];
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Media',
            routerLink: ['/uikit/media']
          }]);
        }

        _createClass(MediaDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.productService.getProductsSmall().then(function (products) {
              _this14.products = products;
            });
            this.photoService.getImages().then(function (images) {
              _this14.images = images;
            });
          }
        }]);

        return MediaDemoComponent;
      }();

      MediaDemoComponent.ctorParameters = function () {
        return [{
          type: src_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"]
        }, {
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: _service_photoservice__WEBPACK_IMPORTED_MODULE_5__["PhotoService"]
        }];
      };

      MediaDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_mediademo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mediademo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MediaDemoComponent);
      /***/
    },

    /***/
    "XVv+":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/upload-file/upload-file.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XVv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n\n        <div class=\"card\">\n\n            <p-fileUpload name=\"demo[]\" url=\"./upload.php\" multiple=\"multiple\" accept=\".zip/*\" maxFileSize=\"1000000\">\n                <ng-template pTemplate=\"content\">\n                    <ul *ngIf=\"uploadedFiles.length\">\n                        <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n                    </ul>\n                </ng-template>\n            </p-fileUpload>\n\n        </div>\n    </div>\n</div>\n\n\n\n<!-- <angular-file-uploader [config]=\"afuConfig\">\n</angular-file-uploader> -->\n\n\n<!-- <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <input type=\"file\" (change)=\"upload($event)\">\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-danger\">Upload</button>\n    </div>\n</form> -->";
      /***/
    },

    /***/
    "Y0Zo":
    /*!*********************************************!*\
      !*** ./src/app/pages/app.crud.component.ts ***!
      \*********************************************/

    /*! exports provided: AppCrudComponent */

    /***/
    function Y0Zo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCrudComponent", function () {
        return AppCrudComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_crud_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.crud.component.html */
      "3aQ+");
      /* harmony import */


      var _demo_view_tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../demo/view/tabledemo.scss */
      "MBEb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _demo_service_productservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../demo/service/productservice */
      "ibcK");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var AppCrudComponent = /*#__PURE__*/function () {
        function AppCrudComponent(productService, messageService, confirmationService, breadcrumbService) {
          _classCallCheck(this, AppCrudComponent);

          this.productService = productService;
          this.messageService = messageService;
          this.confirmationService = confirmationService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Pages'
          }, {
            label: 'Crud',
            routerLink: ['/pages/crud']
          }]);
        }

        _createClass(AppCrudComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.productService.getProducts().then(function (data) {
              return _this15.products = data;
            });
            this.cols = [{
              field: 'name',
              header: 'Name'
            }, {
              field: 'price',
              header: 'Price'
            }, {
              field: 'category',
              header: 'Category'
            }, {
              field: 'rating',
              header: 'Reviews'
            }, {
              field: 'inventoryStatus',
              header: 'Status'
            }];
          }
        }, {
          key: "openNew",
          value: function openNew() {
            this.product = {};
            this.submitted = false;
            this.productDialog = true;
          }
        }, {
          key: "deleteSelectedProducts",
          value: function deleteSelectedProducts() {
            var _this16 = this;

            this.confirmationService.confirm({
              message: 'Are you sure you want to delete the selected products?',
              header: 'Confirm',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this16.products = _this16.products.filter(function (val) {
                  return !_this16.selectedProducts.includes(val);
                });
                _this16.selectedProducts = null;

                _this16.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Products Deleted',
                  life: 3000
                });
              }
            });
          }
        }, {
          key: "editProduct",
          value: function editProduct(product) {
            this.product = Object.assign({}, product);
            this.productDialog = true;
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(product) {
            var _this17 = this;

            this.confirmationService.confirm({
              message: 'Are you sure you want to delete ' + product.name + '?',
              header: 'Confirm',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this17.products = _this17.products.filter(function (val) {
                  return val.id !== product.id;
                });
                _this17.product = {};

                _this17.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Product Deleted',
                  life: 3000
                });
              }
            });
          }
        }, {
          key: "hideDialog",
          value: function hideDialog() {
            this.productDialog = false;
            this.submitted = false;
          }
        }, {
          key: "saveProduct",
          value: function saveProduct() {
            this.submitted = true;

            if (this.product.name.trim()) {
              if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Product Updated',
                  life: 3000
                });
              } else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Product Created',
                  life: 3000
                });
              }

              this.products = _toConsumableArray(this.products);
              this.productDialog = false;
              this.product = {};
            }
          }
        }, {
          key: "findIndexById",
          value: function findIndexById(id) {
            var index = -1;

            for (var i = 0; i < this.products.length; i++) {
              if (this.products[i].id === id) {
                index = i;
                break;
              }
            }

            return index;
          }
        }, {
          key: "createId",
          value: function createId() {
            var id = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < 5; i++) {
              id += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            return id;
          }
        }]);

        return AppCrudComponent;
      }();

      AppCrudComponent.ctorParameters = function () {
        return [{
          type: _demo_service_productservice__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"]
        }];
      };

      AppCrudComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_app_crud_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]],
        styles: ["\n        :host ::ng-deep .p-dialog .product-image {\n            width: 150px;\n            margin: 0 auto 2rem auto;\n            display: block;\n        }\n\n        @media screen and (max-width: 960px) {\n            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:last-child {\n                text-align: center;\n            }\n\n            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:nth-child(6) {\n                display: flex;\n            }\n        }\n\n    ", _demo_view_tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppCrudComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_vcard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-vcard */
      "TvSm");
      /* harmony import */


      var primeng_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/accordion */
      "7LiV");
      /* harmony import */


      var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/autocomplete */
      "V5BG");
      /* harmony import */


      var primeng_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/avatar */
      "+F6F");
      /* harmony import */


      var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/avatargroup */
      "sKsN");
      /* harmony import */


      var primeng_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/badge */
      "fqaE");
      /* harmony import */


      var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/breadcrumb */
      "URcr");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/calendar */
      "eO1q");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var primeng_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! primeng/carousel */
      "LwO5");
      /* harmony import */


      var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! primeng/cascadeselect */
      "A1Di");
      /* harmony import */


      var primeng_chart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! primeng/chart */
      "I5S5");
      /* harmony import */


      var primeng_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/checkbox */
      "Ji6n");
      /* harmony import */


      var primeng_chip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! primeng/chip */
      "wxlm");
      /* harmony import */


      var primeng_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! primeng/chips */
      "RGqm");
      /* harmony import */


      var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! primeng/codehighlighter */
      "yjSK");
      /* harmony import */


      var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! primeng/confirmdialog */
      "Nf9I");
      /* harmony import */


      var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! primeng/confirmpopup */
      "RTT/");
      /* harmony import */


      var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! primeng/colorpicker */
      "bv7W");
      /* harmony import */


      var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! primeng/contextmenu */
      "yNBN");
      /* harmony import */


      var primeng_dataview__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! primeng/dataview */
      "8CEF");
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! primeng/dialog */
      "/RsI");
      /* harmony import */


      var primeng_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! primeng/divider */
      "lUkA");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! primeng/dropdown */
      "arFO");
      /* harmony import */


      var primeng_fieldset__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! primeng/fieldset */
      "fk4S");
      /* harmony import */


      var primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! primeng/fileupload */
      "NCSE");
      /* harmony import */


      var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! primeng/fullcalendar */
      "9R/8");
      /* harmony import */


      var primeng_galleria__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! primeng/galleria */
      "2art");
      /* harmony import */


      var primeng_inplace__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! primeng/inplace */
      "QvPt");
      /* harmony import */


      var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! primeng/inputnumber */
      "Ks7X");
      /* harmony import */


      var primeng_inputmask__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! primeng/inputmask */
      "CwEU");
      /* harmony import */


      var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! primeng/inputswitch */
      "rLzU");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! primeng/inputtextarea */
      "zFJ7");
      /* harmony import */


      var primeng_knob__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! primeng/knob */
      "EbAv");
      /* harmony import */


      var primeng_lightbox__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! primeng/lightbox */
      "LnpQ");
      /* harmony import */


      var primeng_listbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! primeng/listbox */
      "+07z");
      /* harmony import */


      var primeng_megamenu__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! primeng/megamenu */
      "BAkx");
      /* harmony import */


      var primeng_menu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! primeng/menu */
      "1SLH");
      /* harmony import */


      var primeng_menubar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! primeng/menubar */
      "b1Ni");
      /* harmony import */


      var primeng_messages__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! primeng/messages */
      "dts7");
      /* harmony import */


      var primeng_message__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! primeng/message */
      "FMpt");
      /* harmony import */


      var primeng_multiselect__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! primeng/multiselect */
      "lVkt");
      /* harmony import */


      var primeng_orderlist__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! primeng/orderlist */
      "cQJI");
      /* harmony import */


      var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! primeng/organizationchart */
      "dQiQ");
      /* harmony import */


      var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! primeng/overlaypanel */
      "z8Lm");
      /* harmony import */


      var primeng_paginator__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! primeng/paginator */
      "6t4m");
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! primeng/panel */
      "7CaW");
      /* harmony import */


      var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! primeng/panelmenu */
      "kSmT");
      /* harmony import */


      var primeng_password__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! primeng/password */
      "+YxP");
      /* harmony import */


      var primeng_picklist__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! primeng/picklist */
      "iHf9");
      /* harmony import */


      var primeng_progressbar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! primeng/progressbar */
      "+DzE");
      /* harmony import */


      var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! primeng/radiobutton */
      "LuMj");
      /* harmony import */


      var primeng_rating__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! primeng/rating */
      "Js94");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! primeng/ripple */
      "Q4Mo");
      /* harmony import */


      var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! primeng/scrollpanel */
      "SSqW");
      /* harmony import */


      var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! primeng/scrolltop */
      "JD6B");
      /* harmony import */


      var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! primeng/selectbutton */
      "5o1E");
      /* harmony import */


      var primeng_sidebar__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! primeng/sidebar */
      "jLSX");
      /* harmony import */


      var primeng_skeleton__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! primeng/skeleton */
      "jeV5");
      /* harmony import */


      var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! primeng/slidemenu */
      "3k5r");
      /* harmony import */


      var primeng_slider__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! primeng/slider */
      "+la4");
      /* harmony import */


      var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! primeng/splitbutton */
      "Wq6t");
      /* harmony import */


      var primeng_splitter__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! primeng/splitter */
      "ZZi9");
      /* harmony import */


      var primeng_steps__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! primeng/steps */
      "KcHJ");
      /* harmony import */


      var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! primeng/tabmenu */
      "c+7h");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var primeng_tabview__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! primeng/tabview */
      "dPl2");
      /* harmony import */


      var primeng_tag__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! primeng/tag */
      "hYoW");
      /* harmony import */


      var primeng_terminal__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! primeng/terminal */
      "6s7b");
      /* harmony import */


      var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! primeng/tieredmenu */
      "B16f");
      /* harmony import */


      var primeng_timeline__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! primeng/timeline */
      "mgTN");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! primeng/toast */
      "Gxio");
      /* harmony import */


      var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! primeng/togglebutton */
      "Y+ZO");
      /* harmony import */


      var primeng_toolbar__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! primeng/toolbar */
      "5EWq");
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! primeng/tooltip */
      "xlun");
      /* harmony import */


      var primeng_tree__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! primeng/tree */
      "g9iH");
      /* harmony import */


      var primeng_treetable__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! primeng/treetable */
      "EVgl");
      /* harmony import */


      var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! primeng/virtualscroller */
      "+/m8");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
      /*! ./pages/app.notfound.component */
      "xBH+");
      /* harmony import */


      var _pages_app_error_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
      /*! ./pages/app.error.component */
      "anCR");
      /* harmony import */


      var _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(
      /*! ./pages/app.accessdenied.component */
      "pRB7");
      /* harmony import */


      var _pages_app_login_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(
      /*! ./pages/app.login.component */
      "OnSs");
      /* harmony import */


      var _pages_app_crud_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(
      /*! ./pages/app.crud.component */
      "Y0Zo");
      /* harmony import */


      var _pages_app_calendar_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(
      /*! ./pages/app.calendar.component */
      "fFyx");
      /* harmony import */


      var _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(
      /*! ./pages/app.timelinedemo.component */
      "NG6J");
      /* harmony import */


      var _app_menu_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(
      /*! ./app.menu.component */
      "DByU");
      /* harmony import */


      var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(
      /*! ./app.menuitem.component */
      "kA7y");
      /* harmony import */


      var _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(
      /*! ./app.breadcrumb.component */
      "ITH+");
      /* harmony import */


      var _app_config_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(
      /*! ./app.config.component */
      "jaM/");
      /* harmony import */


      var _app_rightpanel_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(
      /*! ./app.rightpanel.component */
      "hZ8T");
      /* harmony import */


      var _app_topbar_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(
      /*! ./app.topbar.component */
      "7APR");
      /* harmony import */


      var _app_footer_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(
      /*! ./app.footer.component */
      "ffRT");
      /* harmony import */


      var _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(
      /*! ./demo/view/dashboarddemo.component */
      "yd5u");
      /* harmony import */


      var _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(
      /*! ./demo/view/formlayoutdemo.component */
      "CfVz");
      /* harmony import */


      var _demo_view_floatlabeldemo_component__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(
      /*! ./demo/view/floatlabeldemo.component */
      "M6OY");
      /* harmony import */


      var _demo_view_invalidstatedemo_component__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(
      /*! ./demo/view/invalidstatedemo.component */
      "P2fs");
      /* harmony import */


      var _demo_view_inputdemo_component__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(
      /*! ./demo/view/inputdemo.component */
      "DlPI");
      /* harmony import */


      var _demo_view_buttondemo_component__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(
      /*! ./demo/view/buttondemo.component */
      "M8Z4");
      /* harmony import */


      var _demo_view_tabledemo_component__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(
      /*! ./demo/view/tabledemo.component */
      "Hf0O");
      /* harmony import */


      var _demo_view_listdemo_component__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(
      /*! ./demo/view/listdemo.component */
      "nWU1");
      /* harmony import */


      var _demo_view_treedemo_component__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(
      /*! ./demo/view/treedemo.component */
      "JvKG");
      /* harmony import */


      var _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(
      /*! ./demo/view/panelsdemo.component */
      "8jOm");
      /* harmony import */


      var _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(
      /*! ./demo/view/overlaysdemo.component */
      "4Pek");
      /* harmony import */


      var _demo_view_mediademo_component__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(
      /*! ./demo/view/mediademo.component */
      "WOi/");
      /* harmony import */


      var _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(
      /*! ./demo/view/menusdemo.component */
      "gitr");
      /* harmony import */


      var _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(
      /*! ./demo/view/messagesdemo.component */
      "uQp2");
      /* harmony import */


      var _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(
      /*! ./demo/view/miscdemo.component */
      "j1Et");
      /* harmony import */


      var _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(
      /*! ./demo/view/emptydemo.component */
      "a9iL");
      /* harmony import */


      var _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(
      /*! ./demo/view/chartsdemo.component */
      "aOMY");
      /* harmony import */


      var _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(
      /*! ./demo/view/filedemo.component */
      "7s2l");
      /* harmony import */


      var _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(
      /*! ./demo/view/documentation.component */
      "Pv7A");
      /* harmony import */


      var _utilities_display_component__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(
      /*! ./utilities/display.component */
      "Znji");
      /* harmony import */


      var _utilities_elevation_component__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(
      /*! ./utilities/elevation.component */
      "8iZH");
      /* harmony import */


      var _utilities_flexbox_component__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(
      /*! ./utilities/flexbox.component */
      "deSt");
      /* harmony import */


      var _utilities_grid_component__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(
      /*! ./utilities/grid.component */
      "MgdU");
      /* harmony import */


      var _utilities_icons_component__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(
      /*! ./utilities/icons.component */
      "s5Nh");
      /* harmony import */


      var _utilities_spacing_component__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(
      /*! ./utilities/spacing.component */
      "p563");
      /* harmony import */


      var _utilities_typography_component__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(
      /*! ./utilities/typography.component */
      "3Li2");
      /* harmony import */


      var _utilities_text_component__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(
      /*! ./utilities/text.component */
      "SsAV");
      /* harmony import */


      var _utilities_widgets_component__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(
      /*! ./utilities/widgets.component */
      "qBte");
      /* harmony import */


      var _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(
      /*! ./demo/service/countryservice */
      "CuUz");
      /* harmony import */


      var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(
      /*! ./demo/service/eventservice */
      "fgiE");
      /* harmony import */


      var _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(
      /*! ./demo/service/nodeservice */
      "WCqc");
      /* harmony import */


      var _demo_service_customerservice__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(
      /*! ./demo/service/customerservice */
      "04hL");
      /* harmony import */


      var _demo_service_photoservice__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(
      /*! ./demo/service/photoservice */
      "xLnY");
      /* harmony import */


      var _demo_service_productservice__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(
      /*! ./demo/service/productservice */
      "ibcK");
      /* harmony import */


      var _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(
      /*! ./demo/service/iconservice */
      "4Sr2");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(
      /*! ./breadcrumb.service */
      "pMwP");
      /* harmony import */


      var _app_menu_service__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(
      /*! ./app.menu.service */
      "axq9");
      /* harmony import */


      var _app_code_component__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(
      /*! ./app.code.component */
      "ZnEj");
      /* harmony import */


      var _component_name_component_name_component__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(
      /*! ./component-name/component-name.component */
      "SBVP");
      /* harmony import */


      var _paginas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(
      /*! ./paginas/inicio/inicio.component */
      "U3hP");
      /* harmony import */


      var _paginas_livecicle_livecicle_component__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(
      /*! ./paginas/livecicle/livecicle.component */
      "FT+5");
      /* harmony import */


      var _paginas_viewxml_viewxml_component__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(
      /*! ./paginas/viewxml/viewxml.component */
      "SK3t");
      /* harmony import */


      var _paginas_viewjson_viewjson_component__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(
      /*! ./paginas/viewjson/viewjson.component */
      "0FBH");
      /* harmony import */


      var _paginas_usoeducativo_usoeducativo_component__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(
      /*! ./paginas/usoeducativo/usoeducativo.component */
      "yqtk");
      /* harmony import */


      var _paginas_derechos_derechos_component__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(
      /*! ./paginas/derechos/derechos.component */
      "6pyg");
      /* harmony import */


      var _paginas_relacion_relacion_component__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(
      /*! ./paginas/relacion/relacion.component */
      "Bujs");
      /* harmony import */


      var _paginas_anotacion_anotacion_component__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(
      /*! ./paginas/anotacion/anotacion.component */
      "43f1");
      /* harmony import */


      var _paginas_clasificacion_clasificacion_component__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(
      /*! ./paginas/clasificacion/clasificacion.component */
      "8Efc");
      /* harmony import */


      var _paginas_accesibilidad_accesibilidad_component__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(
      /*! ./paginas/accesibilidad/accesibilidad.component */
      "1L6g");
      /* harmony import */


      var _paginas_tecnica_tecnica_component__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(
      /*! ./paginas/tecnica/tecnica.component */
      "WLLV");
      /* harmony import */


      var _paginas_metadatos_metadatos_component__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(
      /*! ./paginas/metadatos/metadatos.component */
      "xwZw");
      /* harmony import */


      var _paginas_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(
      /*! ./paginas/upload-file/upload-file.component */
      "5q1j");
      /* harmony import */


      var angular_file_uploader__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(
      /*! angular-file-uploader */
      "wn2B");
      /* harmony import */


      var _modulos_objaprendizaje_objaprendizaje_module__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(
      /*! ./modulos/objaprendizaje/objaprendizaje.module */
      "8Ygf");
      /* harmony import */


      var _paginas_general_general_component__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(
      /*! ./paginas/general/general.component */
      "7xPD");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw"); // PrimeNG Components for demos
      // Application Components
      // Demo pages
      // Demo services
      // Application services
      //subir archivos
      //internacionalizacion 


      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_159__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [angular_file_uploader__WEBPACK_IMPORTED_MODULE_156__["AngularFileUploaderModule"], _modulos_objaprendizaje_objaprendizaje_module__WEBPACK_IMPORTED_MODULE_157__["ObjaprendizajeModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_88__["AppRoutingModule"], _app_code_component__WEBPACK_IMPORTED_MODULE_141__["AppCodeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_vcard__WEBPACK_IMPORTED_MODULE_7__["NgxVcardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutoCompleteModule"], primeng_avatar__WEBPACK_IMPORTED_MODULE_10__["AvatarModule"], primeng_avatargroup__WEBPACK_IMPORTED_MODULE_11__["AvatarGroupModule"], primeng_badge__WEBPACK_IMPORTED_MODULE_12__["BadgeModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"], primeng_card__WEBPACK_IMPORTED_MODULE_16__["CardModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"], primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_18__["CascadeSelectModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_19__["ChartModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_20__["CheckboxModule"], primeng_chip__WEBPACK_IMPORTED_MODULE_21__["ChipModule"], primeng_chips__WEBPACK_IMPORTED_MODULE_22__["ChipsModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_23__["CodeHighlighterModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"], primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_25__["ConfirmPopupModule"], primeng_colorpicker__WEBPACK_IMPORTED_MODULE_26__["ColorPickerModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__["ContextMenuModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_28__["DataViewModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_29__["DialogModule"], primeng_divider__WEBPACK_IMPORTED_MODULE_30__["DividerModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__["DropdownModule"], primeng_fieldset__WEBPACK_IMPORTED_MODULE_32__["FieldsetModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__["FileUploadModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_34__["FullCalendarModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_35__["GalleriaModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_36__["InplaceModule"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_37__["InputNumberModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_38__["InputMaskModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_39__["InputSwitchModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_40__["InputTextModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_41__["InputTextareaModule"], primeng_knob__WEBPACK_IMPORTED_MODULE_42__["KnobModule"], primeng_lightbox__WEBPACK_IMPORTED_MODULE_43__["LightboxModule"], primeng_listbox__WEBPACK_IMPORTED_MODULE_44__["ListboxModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_45__["MegaMenuModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_46__["MenuModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_47__["MenubarModule"], primeng_message__WEBPACK_IMPORTED_MODULE_49__["MessageModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_48__["MessagesModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_50__["MultiSelectModule"], primeng_orderlist__WEBPACK_IMPORTED_MODULE_51__["OrderListModule"], primeng_organizationchart__WEBPACK_IMPORTED_MODULE_52__["OrganizationChartModule"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_53__["OverlayPanelModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_54__["PaginatorModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_55__["PanelModule"], primeng_panelmenu__WEBPACK_IMPORTED_MODULE_56__["PanelMenuModule"], primeng_password__WEBPACK_IMPORTED_MODULE_57__["PasswordModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_58__["PickListModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_59__["ProgressBarModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_60__["RadioButtonModule"], primeng_rating__WEBPACK_IMPORTED_MODULE_61__["RatingModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_62__["RippleModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_63__["ScrollPanelModule"], primeng_scrolltop__WEBPACK_IMPORTED_MODULE_64__["ScrollTopModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_65__["SelectButtonModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_66__["SidebarModule"], primeng_skeleton__WEBPACK_IMPORTED_MODULE_67__["SkeletonModule"], primeng_slidemenu__WEBPACK_IMPORTED_MODULE_68__["SlideMenuModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_69__["SliderModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_70__["SplitButtonModule"], primeng_splitter__WEBPACK_IMPORTED_MODULE_71__["SplitterModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_72__["StepsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_74__["TableModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_73__["TabMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_75__["TabViewModule"], primeng_tag__WEBPACK_IMPORTED_MODULE_76__["TagModule"], primeng_terminal__WEBPACK_IMPORTED_MODULE_77__["TerminalModule"], primeng_timeline__WEBPACK_IMPORTED_MODULE_79__["TimelineModule"], primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_78__["TieredMenuModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_80__["ToastModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_81__["ToggleButtonModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_82__["ToolbarModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_83__["TooltipModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_84__["TreeModule"], primeng_treetable__WEBPACK_IMPORTED_MODULE_85__["TreeTableModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_86__["VirtualScrollerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_160__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_160__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }
        })],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_87__["AppComponent"], _app_main_component__WEBPACK_IMPORTED_MODULE_89__["AppMainComponent"], _app_menu_component__WEBPACK_IMPORTED_MODULE_97__["AppMenuComponent"], _app_menuitem_component__WEBPACK_IMPORTED_MODULE_98__["AppMenuitemComponent"], _app_topbar_component__WEBPACK_IMPORTED_MODULE_102__["AppTopBarComponent"], _app_footer_component__WEBPACK_IMPORTED_MODULE_103__["AppFooterComponent"], _app_rightpanel_component__WEBPACK_IMPORTED_MODULE_101__["AppRightPanelComponent"], _app_config_component__WEBPACK_IMPORTED_MODULE_100__["AppConfigComponent"], _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_99__["AppBreadcrumbComponent"], _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_90__["AppNotfoundComponent"], _pages_app_error_component__WEBPACK_IMPORTED_MODULE_91__["AppErrorComponent"], _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_92__["AppAccessdeniedComponent"], _pages_app_login_component__WEBPACK_IMPORTED_MODULE_93__["AppLoginComponent"], _pages_app_crud_component__WEBPACK_IMPORTED_MODULE_94__["AppCrudComponent"], _pages_app_calendar_component__WEBPACK_IMPORTED_MODULE_95__["AppCalendarComponent"], _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_96__["AppTimelineDemoComponent"], _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_104__["DashboardDemoComponent"], _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_105__["FormLayoutDemoComponent"], _demo_view_floatlabeldemo_component__WEBPACK_IMPORTED_MODULE_106__["FloatLabelDemoComponent"], _demo_view_invalidstatedemo_component__WEBPACK_IMPORTED_MODULE_107__["InvalidStateDemoComponent"], _demo_view_inputdemo_component__WEBPACK_IMPORTED_MODULE_108__["InputDemoComponent"], _demo_view_buttondemo_component__WEBPACK_IMPORTED_MODULE_109__["ButtonDemoComponent"], _demo_view_tabledemo_component__WEBPACK_IMPORTED_MODULE_110__["TableDemoComponent"], _demo_view_listdemo_component__WEBPACK_IMPORTED_MODULE_111__["ListDemoComponent"], _demo_view_treedemo_component__WEBPACK_IMPORTED_MODULE_112__["TreeDemoComponent"], _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_113__["PanelsDemoComponent"], _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_114__["OverlaysDemoComponent"], _demo_view_mediademo_component__WEBPACK_IMPORTED_MODULE_115__["MediaDemoComponent"], _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_116__["MenusDemoComponent"], _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_117__["MessagesDemoComponent"], _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_117__["MessagesDemoComponent"], _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_118__["MiscDemoComponent"], _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_120__["ChartsDemoComponent"], _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_119__["EmptyDemoComponent"], _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_121__["FileDemoComponent"], _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_122__["DocumentationComponent"], _utilities_display_component__WEBPACK_IMPORTED_MODULE_123__["DisplayComponent"], _utilities_elevation_component__WEBPACK_IMPORTED_MODULE_124__["ElevationComponent"], _utilities_flexbox_component__WEBPACK_IMPORTED_MODULE_125__["FlexboxComponent"], _utilities_grid_component__WEBPACK_IMPORTED_MODULE_126__["GridComponent"], _utilities_icons_component__WEBPACK_IMPORTED_MODULE_127__["IconsComponent"], _utilities_spacing_component__WEBPACK_IMPORTED_MODULE_128__["SpacingComponent"], _utilities_typography_component__WEBPACK_IMPORTED_MODULE_129__["TypographyComponent"], _utilities_text_component__WEBPACK_IMPORTED_MODULE_130__["TextComponent"], _utilities_widgets_component__WEBPACK_IMPORTED_MODULE_131__["WidgetsComponent"], _component_name_component_name_component__WEBPACK_IMPORTED_MODULE_142__["ComponentNameComponent"], _paginas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_143__["InicioComponent"], _paginas_livecicle_livecicle_component__WEBPACK_IMPORTED_MODULE_144__["LivecicleComponent"], _paginas_viewxml_viewxml_component__WEBPACK_IMPORTED_MODULE_145__["ViewxmlComponent"], _paginas_viewjson_viewjson_component__WEBPACK_IMPORTED_MODULE_146__["ViewjsonComponent"], _paginas_usoeducativo_usoeducativo_component__WEBPACK_IMPORTED_MODULE_147__["UsoeducativoComponent"], _paginas_derechos_derechos_component__WEBPACK_IMPORTED_MODULE_148__["DerechosComponent"], _paginas_relacion_relacion_component__WEBPACK_IMPORTED_MODULE_149__["RelacionComponent"], _paginas_anotacion_anotacion_component__WEBPACK_IMPORTED_MODULE_150__["AnotacionComponent"], _paginas_clasificacion_clasificacion_component__WEBPACK_IMPORTED_MODULE_151__["ClasificacionComponent"], _paginas_accesibilidad_accesibilidad_component__WEBPACK_IMPORTED_MODULE_152__["AccesibilidadComponent"], _paginas_tecnica_tecnica_component__WEBPACK_IMPORTED_MODULE_153__["TecnicaComponent"], _paginas_metadatos_metadatos_component__WEBPACK_IMPORTED_MODULE_154__["MetadatosComponent"], _paginas_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_155__["UploadFileComponent"], _paginas_general_general_component__WEBPACK_IMPORTED_MODULE_158__["GeneralComponent"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"]
        }, _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_132__["CountryService"], _demo_service_customerservice__WEBPACK_IMPORTED_MODULE_135__["CustomerService"], _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_133__["EventService"], _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_138__["IconService"], _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_134__["NodeService"], _demo_service_photoservice__WEBPACK_IMPORTED_MODULE_136__["PhotoService"], _demo_service_productservice__WEBPACK_IMPORTED_MODULE_137__["ProductService"], _app_menu_service__WEBPACK_IMPORTED_MODULE_140__["MenuService"], _breadcrumb_service__WEBPACK_IMPORTED_MODULE_139__["BreadcrumbService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_161__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_87__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZETH":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.calendar.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZETH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Calendar</h5>\n\t\t\t<p-fullCalendar [events]=\"events\" [options]=\"options\"></p-fullCalendar>\n\n\t\t\t<p-dialog [(visible)]=\"eventDialog\" [style]=\"{width: '450px'}\" header=\"Event Details\" [modal]=\"true\" [closable]=\"true\">\n\t\t\t\t<ng-template pTemplate=\"content\">\n\t\t\t\t\t<div class=\"p-fluid\">\n\t\t\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t\t\t<label for=\"title\">Title</label>\n\t\t\t\t\t\t\t<input id=\"title\" type=\"text\" pInputText *ngIf=\"clickedEvent\" [(ngModel)]=\"changedEvent.title\" [required]=\"true\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t\t\t<label for=\"start\">From</label>\n\t\t\t\t\t\t\t<p-calendar id=\"start\" *ngIf=\"clickedEvent\" [(ngModel)]=\"changedEvent.start\" [showTime]=\"true\" appendTo=\"body\"></p-calendar>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t\t\t<label for=\"end\">To</label>\n\t\t\t\t\t\t\t<p-calendar id=\"end\" *ngIf=\"clickedEvent\" [(ngModel)]=\"changedEvent.end\" [showTime]=\"true\" appendTo=\"body\"></p-calendar>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-field-checkbox\">\n\t\t\t\t\t\t\t<p-checkbox id=\"allday\" *ngIf=\"clickedEvent\" [(ngModel)]=\"changedEvent.allday\"></p-checkbox>\n\t\t\t\t\t\t\t<label for=\"allday\">All Day</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\n\t\t\t\t<ng-template pTemplate=\"footer\">\n\t\t\t\t\t<button pButton label=\"Save\" icon=\"pi pi-check\" class=\"p-button-text\" (click)=\"save()\"></button>\n\t\t\t\t\t<button pButton label=\"Reset\" icon=\"pi pi-refresh\" class=\"p-button-text\" (click)=\"reset()\"></button>\n\t\t\t\t</ng-template>\n\t\t\t</p-dialog>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "ZIYP":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/listdemo.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZIYP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid list-demo\">\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h5>DataView</h5>\n\t\t\t<p-dataView #dv [value]=\"products\" [paginator]=\"true\" [rows]=\"9\" filterBy=\"name\"\n\t\t\t\t\t\t[sortField]=\"sortField\" [sortOrder]=\"sortOrder\" layout=\"grid\">\n\t\t\t\t<ng-template pTemplate=\"header\">\n\t\t\t\t\t<div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between\">\n\t\t\t\t\t\t<p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By Price\" (onChange)=\"onSortChange($event)\" styleClass=\"p-mb-2 p-mb-md-0\"></p-dropdown>\n\t\t\t\t\t\t<span class=\"p-input-icon-left p-mb-2 p-mb-md-0\">\n                    <i class=\"pi pi-search\"></i>\n                    <input type=\"search\" pInputText placeholder=\"Search by Name\" (input)=\"dv.filter($event.target.value)\">\n                </span>\n\t\t\t\t\t\t<p-dataViewLayoutOptions></p-dataViewLayoutOptions>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template let-product pTemplate=\"listItem\">\n\t\t\t\t\t<div class=\"p-col-12\">\n\t\t\t\t\t\t<div class=\"product-list-item\">\n\t\t\t\t\t\t\t<img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.name\"/>\n\t\t\t\t\t\t\t<div class=\"product-list-detail\">\n\t\t\t\t\t\t\t\t<div class=\"product-name\">{{product.name}}</div>\n\t\t\t\t\t\t\t\t<div class=\"product-description\">{{product.description}}</div>\n\t\t\t\t\t\t\t\t<p-rating [ngModel]=\"product.rating\" [readonly]=\"true\" [cancel]=\"false\"></p-rating>\n\t\t\t\t\t\t\t\t<i class=\"pi pi-tag product-category-icon\"></i><span class=\"product-category\">{{product.category}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"product-list-action\">\n\t\t\t\t\t\t\t\t<span class=\"product-price\">${{product.price}}</span>\n\t\t\t\t\t\t\t\t<p-button icon=\"pi pi-shopping-cart\" label=\"Add to Cart\" [disabled]=\"product.inventoryStatus === 'OUTOFSTOCK'\"></p-button>\n\t\t\t\t\t\t\t\t<span [class]=\"'product-badge status-' + product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template let-product pTemplate=\"gridItem\">\n\t\t\t\t\t<div class=\"p-col-12 p-md-4\">\n\t\t\t\t\t\t<div class=\"product-grid-item card\">\n\t\t\t\t\t\t\t<div class=\"product-grid-item-top\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<i class=\"pi pi-tag product-category-icon\"></i>\n\t\t\t\t\t\t\t\t\t<span class=\"product-category\">{{product.category}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span [class]=\"'product-badge status-' + product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"product-grid-item-content\">\n\t\t\t\t\t\t\t\t<img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.name\"/>\n\t\t\t\t\t\t\t\t<div class=\"product-name\">{{product.name}}</div>\n\t\t\t\t\t\t\t\t<div class=\"product-description\">{{product.description}}</div>\n\t\t\t\t\t\t\t\t<p-rating [ngModel]=\"product.rating\" [readonly]=\"true\" [cancel]=\"false\"></p-rating>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"product-grid-item-bottom\">\n\t\t\t\t\t\t\t\t<span class=\"product-price\">${{product.price}}</span>\n\t\t\t\t\t\t\t\t<p-button icon=\"pi pi-shopping-cart\" [disabled]=\"product.inventoryStatus === 'OUTOFSTOCK'\"></p-button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</p-dataView>\n\t\t</div>\n\t</div>\n\n\t<div class=\"p-col-12 p-lg-8\">\n\t\t<div class=\"card\">\n\t\t\t<h5>PickList</h5>\n\t\t\t<p-pickList [source]=\"sourceCities\" [target]=\"targetCities\" sourceHeader=\"From\" targetHeader=\"To\" dragdrop=\"true\"\n\t\t\t\t\t\t[responsive]=\"true\" [sourceStyle]=\"{'height':'300px'}\" [targetStyle]=\"{'height':'300px'}\">\n\t\t\t\t<ng-template let-city pTemplate=\"item\">\n\t\t\t\t\t<div>{{city.name}}</div>\n\t\t\t\t</ng-template>\n\t\t\t</p-pickList>\n\t\t</div>\n\t</div>\n\n\t<div class=\"p-col-12 p-lg-4\">\n\t\t<div class=\"card\">\n\t\t\t<h5>OrderList</h5>\n\t\t\t<p-orderList [value]=\"orderCities\" [listStyle]=\"{'height':'auto'}\" header=\"Cities\" dragdrop=\"true\">\n\t\t\t\t<ng-template let-city pTemplate=\"item\">\n\t\t\t\t\t<div>{{city.name}}</div>\n\t\t\t\t</ng-template>\n\t\t\t</p-orderList>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "ZnEj":
    /*!***************************************!*\
      !*** ./src/app/app.code.component.ts ***!
      \***************************************/

    /*! exports provided: AppCodeComponent, AppCodeModule */

    /***/
    function ZnEj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCodeComponent", function () {
        return AppCodeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCodeModule", function () {
        return AppCodeModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _app_code_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.code.component.scss */
      "rI0q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AppCodeComponent = /*#__PURE__*/function () {
        function AppCodeComponent(el) {
          _classCallCheck(this, AppCodeComponent);

          this.el = el;
          this.lang = 'markup';
        }

        _createClass(AppCodeComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (window['Prism']) {
              window['Prism'].highlightElement(this.codeViewChild.nativeElement);
            }
          }
        }]);

        return AppCodeComponent;
      }();

      AppCodeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      AppCodeComponent.propDecorators = {
        lang: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        codeViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['code']
        }]
      };
      AppCodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-code',
        template: "\n        <pre [ngClass]=\"'language-' + lang\"><code #code><ng-content></ng-content>\n</code></pre>\n    ",
        styles: [_app_code_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], AppCodeComponent);

      var AppCodeModule = function AppCodeModule() {
        _classCallCheck(this, AppCodeModule);
      };

      AppCodeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [AppCodeComponent],
        declarations: [AppCodeComponent]
      })], AppCodeModule);
      /***/
    },

    /***/
    "Znji":
    /*!************************************************!*\
      !*** ./src/app/utilities/display.component.ts ***!
      \************************************************/

    /*! exports provided: DisplayComponent */

    /***/
    function Znji(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplayComponent", function () {
        return DisplayComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_display_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./display.component.html */
      "xE+y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var DisplayComponent = function DisplayComponent(breadcrumbService) {
        _classCallCheck(this, DisplayComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'Display',
          routerLink: ['/utilities/display']
        }]);
      };

      DisplayComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      DisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_display_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DisplayComponent);
      /***/
    },

    /***/
    "a6dQ":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/documentation.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function a6dQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card docs no-margin\">\n\n            <h4>Current Version</h4>\n            <p>Angular 11 and PrimeNG 11</p>\n\n            <h4>Dependencies</h4>\n            <p>Mirage has no direct dependency. More information about dependencies is available at <a href=\"https://www.primefaces.org/why-primeng-templates/\">Why PrimeNG Templates</a> article.</p>\n\n            <h4>Getting Started</h4>\n            <p>Mirage is a true native application template for Angular and is distributed as a CLI project. In case CLI is not installed already, use\n                the command below to set it up.</p>\n\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nnpm install -g @angular/cli\n</app-code>\n\n            <p>Once CLI is ready in your system, extract the contents of the Mirage zip file distribution, cd to the directory,\n            install the libraries from npm and then execute \"ng serve\" to run the application in your local environment.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\ncd mirage\nnpm install\nng serve\n</app-code>\n\n            <p>The application should run at http://localhost:4200/, you may now start with the development of your application.</p>\n\n            <h4>Important CLI Commands</h4>\n            <p>Following commands are derived from CLI.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nRun 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options.\n</app-code>\n\n            <h4>Structure</h4>\n            <p>Mirage consists of 3 main parts; the application layout, layout resources and theme resources for PrimeNG components. <i>app.component.html</i> inside app folder is the html template for the base layout,\n                required resources for the layout are placed inside the <i>src/assets/layout</i> folder and similarly theme resources are inside <i>src/assets/theme</i> folder.\n            </p>\n\n            <h4>Template</h4>\n            <p>Main layout is the html template of the <i>app.main.component.ts</i>, it is divided into a couple of sections such as topbar, sidebar and footer. Here is the code for\n                the main template. The component class <i>app.main.component.ts</i> implements the logic such as opening menus and managing layout modes.\n            </p>\n<app-code  ngPreserveWhitespaces ngNonBindable lang=\"markup\">\n&lt;div class=\"layout-wrapper\" (click)=\"onLayoutClick()\"\n    [ngClass]=\"&#123;'layout-horizontal': app.horizontalMenu,\n               'layout-wrapper-static': staticMenuActive,\n               'layout-rightpanel-active': rightPanelActive,\n               'layout-topbar-mobile-active': topbarMobileMenuActive,\n               'layout-megamenu-mobile-active': megaMenuMobileActive,\n               'layout-sidebar-mobile-active': menuMobileActive,\n               'p-input-filled': app.inputStyle === 'filled',\n               'p-ripple-disabled': !app.ripple&#125;\" [class]=\"app.menuColor\"&gt;\n\n   &lt;app-menu&gt;&lt;/app-menu&gt;\n\n   &lt;div class=\"layout-main\"&gt;\n       &lt;app-topbar&gt;&lt;/app-topbar&gt;\n\n       &lt;app-rightpanel&gt;&lt;/app-rightpanel&gt;\n\n       &lt;app-breadcrumb&gt;&lt;/app-breadcrumb&gt;\n\n       &lt;div class=\"layout-content\"&gt;\n           &lt;router-outlet&gt;&lt;/router-outlet&gt;\n       &lt;/div&gt;\n\n       &lt;app-footer&gt;&lt;/app-footer&gt;\n\n       &lt;app-config&gt;&lt;/app-config&gt;\n\n       &lt;div class=\"layout-main-mask\"&gt;&lt;/div&gt;\n   &lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n            <h4>Menu</h4>\n            <p>Menu is a separate component defined in <i>app.menu.component.ts</i> file based on PrimeNG MenuModel API. In order to define the menuitems,\n            navigate to this file and define your own model as a nested structure. Here is the menu component from the sample application.</p>\n\n<div style=\"height:400px;overflow: auto;\">\n<app-code  ngPreserveWhitespaces ngNonBindable lang=\"javascript\">\n@Component(&#123;\n    selector: 'app-menu',\n    templateUrl: './app.menu.component.html'\n&#125;)\nexport class AppMenuComponent implements OnInit &#123;\n\n    model: any[];\n\n    constructor(public appMain: AppMainComponent) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.model = [\n            &#123;label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']&#125;,\n            &#123;\n                label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],\n                items: [\n                    &#123;label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']&#125;,\n                    &#123;label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']&#125;,\n                    &#123;label: 'Float Label', icon: 'pi pi-bookmark', routerLink: ['/uikit/floatlabel']&#125;,\n                    &#123;label: 'Invalid State', icon: 'pi pi-exclamation-circle', routerLink: ['/uikit/invalidstate']&#125;,\n                    &#123;label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'&#125;,\n                    &#123;label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']&#125;,\n                    &#123;label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']&#125;,\n                    &#123;label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']&#125;,\n                    &#123;label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']&#125;,\n                    &#123;label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']&#125;,\n                    &#123;label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']&#125;,\n                    &#123;label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']&#125;,\n                    &#123;label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']&#125;,\n                    &#123;label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']&#125;,\n                    &#123;label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],\n                items: [\n                    &#123;label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']&#125;,\n                    &#123;label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']&#125;,\n                    &#123;label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']&#125;,\n                    &#123;label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']&#125;,\n                    &#123;label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']&#125;,\n                    &#123;label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']&#125;,\n                    &#123;label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']&#125;,\n                    &#123;label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']&#125;,\n                    &#123;label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Pages', icon: 'pi pi-fw pi-copy', routerLink: ['/pages'],\n                items: [\n                    &#123;label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']&#125;,\n                    &#123;label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']&#125;,\n                    &#123;label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']&#125;,\n                    &#123; label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' &#125;,\n                    &#123; label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'], target: '_blank' &#125;,\n                    &#123; label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/error'], target: '_blank' &#125;,\n                    &#123; label: '404', icon: 'pi pi-fw pi-times', routerLink: ['/404'], target: '_blank' &#125;,\n                    &#123;label: 'Access Denied', icon: 'pi pi-fw pi-ban',routerLink: ['/accessdenied'], target: '_blank'&#125;,\n                    &#123; label: 'Empty', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/empty'] &#125;,\n                ]\n            &#125;,\n            &#123;\n                label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',\n                items: [\n                    &#123;\n                        label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',\n                        items: [\n                            &#123;\n                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',\n                                items: [\n                                    &#123; label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                    &#123; label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                    &#123; label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',\n                                items: [\n                                    &#123; label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' &#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',\n                        items: [\n                            &#123;\n                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',\n                                items: [\n                                    &#123; label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                    &#123; label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',\n                                items: [\n                                    &#123; label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                ]\n                            &#125;,\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Docs', icon: 'pi pi-fw pi-file', routerLink: ['/documentation']\n            &#125;,\n            &#123;\n                label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']\n            &#125;\n        ];\n    &#125;\n</app-code>\n</div>\n\n            <h4>Integration with an Existing CLI Project</h4>\n            <p>To setup Mirage in an existing project, follow the steps below;</p>\n\n<ul>\n    <li>Copy the <i>src/assets</i> folder to your projects folder with the same name.</li>\n    <li>Copy all app.* files and breadcrumb.service.ts to the <i>src/app</i> folder of your application.</li>\n</ul>\n\n          <p>Install PrimeNG</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nnpm install primeng@latest --save\nnpm install primeicons@latest --save\n</app-code>\n\n          <p>Add PrimeNG CSS at styles section in angular.json.</p>\n\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\n\"styles\": [\n    \"../node_modules/primeng/resources/primeng.min.css\",        //required: PrimeNG components\n    \"node_modules/primeicons/primeicons.css\",                   //required: PrimeIcons\n    \"styles.scss\"                                               //your styles and overrides\n],\n</app-code>\n\n            <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on\n            the fly by changing the path however if this is not a requirement, you may also add them to the styles configuration above or import them in <i>styles.scss </i>so they go inside the bundle.</p>\n\n            <h4>Component Themes</h4>\n            <p>Mirage provides 24 PrimeNG themes out of the box featuring light and dark alternatives.</p>\n\n            <ul>\n                <li>blue/theme-light.scss</li>\n                <li>blue/theme-dark.scss</li>\n                <li>brown/theme-light.scss</li>\n                <li>brown/theme-dark.scss</li>\n                <li>cyan/theme-light.scss</li>\n                <li>cyan/theme-dark.scss</li>\n                <li>green/theme-light.scss</li>\n                <li>green/theme-dark.scss</li>\n                <li>indigo/theme-light.scss</li>\n                <li>indigo/theme-dark.scss</li>\n                <li>lime/theme-light.scss</li>\n                <li>lime/theme-dark.scss</li>\n                <li>magenta/theme-light.scss</li>\n                <li>magenta/theme-dark.scss</li>\n                <li>orange/theme-light.scss</li>\n                <li>orange/theme-dark.scss</li>\n                <li>purple/theme-light.scss</li>\n                <li>purple/theme-dark.scss</li>\n                <li>red/theme-light.scss</li>\n                <li>red/theme-dark.scss</li>\n                <li>teal/theme-light.scss</li>\n                <li>teal/theme-dark.scss</li>\n                <li>yellow/theme-light.scss</li>\n                <li>yellow/theme-dark.scss</li>\n            </ul>\n\n            <p>A custom theme can be developed by the following steps.</p>\n            <ul>\n                <li>Choose a custom theme name such as \"mytheme\".</li>\n                <li>Create a folder named \"mytheme\" under <i>assets/theme folder</i>.</li>\n                <li>Create a file such as theme.scss under <i>assets/theme/mytheme folder</i>.</li>\n                <li>Define the variables listed below in your file.</li>\n                <li>Import either <i>../../sass/variables/_theme_light</i> or <i>../../sass/variables/_theme_dark</i> based on the type of your theme.</li>\n                <li>Import main <i>../../sass/theme/_theme</i> file.</li>\n                <li>Add the <i>theme.scss</i> to your project at <i>styles</i> section of angular.json or import via <i>styles.scss</i>.</li>\n            </ul>\n\n            <p>Here are the variables required to create a theme.</p>\n<div style=\"height:400px;overflow: auto;\">\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n//main\n$primaryColor:#5E81AC;\n$primaryTextColor:#ffffff;\n\n//highlight\n$highlightBgColor:$primaryColor;\n$highlightTextColor:$primaryTextColor;\n\n//input\n$inputFocusBorderColor:#9EB3CD;\n$inputFocusBorderShadowColor:rgba(22,107,212,.25);\n\n//primary button\n$primaryButtonTextColor:#ffffff;\n$primaryButtonBgColor:#5E81AC;\n$primaryButtonBorderColor:#5E81AC;\n$primaryButtonHoverBgColor:#466489;\n$primaryButtonHoverBorderColor:#466489;\n$primaryButtonActiveBgColor:#263951;\n$primaryButtonActiveBorderColor:#263951;\n$primaryButtonFocusBorderShadow:rgba(22,107,212,.5);\n\n@import '../../sass/variables/_theme_light';\n@import '../../sass/theme/_theme';\n</app-code>\n</div>\n\n            <p>In case you'd like to manually build the css instead of using CLI, an example sass command to compile the css would be;</p>\n\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nsass src/assets/theme/mytheme/theme.scss src/assets/theme/mytheme/theme.css\n</app-code>\n\n            <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command\n            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nsass --watch src/:src/ --no-source-map\n</app-code>\n\n            <h4>Layout Theme</h4>\n            <p>There are 24 layout colors in total with light and dark alternatives which is enabled by including the <i>layout-*.scss</i> file to the project such as <i>blue/layout-light.scss.</i>.\n            Note that the primary colors are not utilized when a custom menu theme is used.</p>\n\n            <ul>\n                <li>blue/layout-light.scss</li>\n                <li>blue/layout-dark.scss</li>\n                <li>brown/layout-light.scss</li>\n                <li>brown/layout-dark.scss</li>\n                <li>cyan/layout-light.scss</li>\n                <li>cyan/layout-dark.scss</li>\n                <li>green/layout-light.scss</li>\n                <li>green/layout-dark.scss</li>\n                <li>indigo/layout-light.scss</li>\n                <li>indigo/layout-dark.scss</li>\n                <li>lime/layout-light.scss</li>\n                <li>lime/layout-dark.scss</li>\n                <li>magenta/layout-light.scss</li>\n                <li>magenta/layout-dark.scss</li>\n                <li>orange/layout-light.scss</li>\n                <li>orange/layout-dark.scss</li>\n                <li>purple/layout-light.scss</li>\n                <li>purple/layout-dark.scss</li>\n                <li>red/layout-light.scss</li>\n                <li>red/layout-dark.scss</li>\n                <li>teal/layout-light.scss</li>\n                <li>teal/layout-dark.scss</li>\n                <li>yellow/layout-light.scss</li>\n                <li>yellow/layout-dark.scss</li>\n            </ul>\n\n            <p>Creating a custom layout theme is similar to creating a custom PrimeNG Component Theme.</p>\n            <ul>\n                <li>Choose a layout name such as layout-myown.</li>\n                <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>\n                <li>Define the variables listed below in your file.</li>\n                <li>Import either <i>../../../sass/variables/_layout_light</i> or <i>../../../sass/variables/_layout_dark</i> based on the type of your theme.</li>\n                <li>Import main <i>../../../sass/layout/_layout</i> file.</li>\n                <li>Add the <i>layout-myown.scss</i> to your project at <i>styles.scss</i> section of angular.json or import via <i>styles.scss</i>.</li>\n            </ul>\n\n            <p>Here are the variables required to create a layout.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n$primaryColor:#5e81ac;\n$primaryLightColor:#809bbd;\n$primaryTextColor:#ffffff;\n\n@import '../../../sass/variables/_layout_light';\n@import '../../../sass/layout/_layout';\n</app-code>\n\n            <p><i>_layout_light.scss</i> contains the shared variables of the layout themes with a light color scheme.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n$fontSize:14px;\n$fontFamily:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n$transitionDuration:.15s;\n$letterSpacing:normal;\n$borderRadius:4px;\n$mobileBreakpoint:991px;\n\n$bodyBgColor:#eceff4;\n$textColor:#4c566a;\n$textSecondaryColor:#9199a9;\n\n$topbarBgColor:#eceff4;\n$breadcrumbBgColor:#d8dee9;\n$contentBgColor:#ffffff;\n$contentAltBgColor:#f9fafb;\n$contentAltBorderColor:#e5e9f0;\n$dividerColor:rgba(145,153,169,0.3);\n$menuShadow:3px 0 5px 0 rgba(33, 35, 39, 0.15);\n\n@import '../overrides/layout_variables';\n</app-code>\n\n            <p><i>_layout_dark.scss</i> contains the shared variables of the layout themes with a light color scheme.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n$fontSize:14px;\n$fontFamily:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n$transitionDuration:.15s;\n$letterSpacing:normal;\n$borderRadius:4px;\n$mobileBreakpoint:991px;\n\n$bodyBgColor:#2e3440;\n$textColor:#d8dee9;\n$textSecondaryColor:#9199a9;\n\n$topbarBgColor:#2e3440;\n$breadcrumbBgColor:#20252e;\n$contentBgColor:#20252e;\n$contentAltBgColor:#2e3440;\n$contentAltBorderColor:#434c5e;\n$dividerColor:rgba(90,101,124,0.3);\n$menuShadow:3px 0 5px 0 rgba(33, 35, 39, 0.3);\n\n@import '../overrides/layout_variables';\n</app-code>\n            \n            <p><i>theme/_variables_light.scss</i> contains the shared variables of the component themes with a light color scheme.</p>\n<div style=\"max-height: 400px; overflow:auto\">\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n//reused color variables\n$shade000:#ffffff;              //surface\n$shade100:#efefef;              //header background\n$shade200:#e9ecef;              //hover background\n$shade300:#dee2e6;              //border, divider\n$shade400:#ced4da;              //input border\n$shade500:#adb5bd;              //unused\n$shade600:#6c757d;              //text secondary color\n$shade700:#495057;              //input text color\n$shade800:#343a40;              //unused\n$shade900:#212529;              //text color\n\n//global\n$fontFamily:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n$fontSize:1rem;\n$fontWeight:normal;\n$textColor:$shade900;\n$textSecondaryColor:$shade600;\n$borderRadius:4px;\n$transitionDuration:.15s;\n$formElementTransition:background-color $transitionDuration, border-color $transitionDuration, box-shadow $transitionDuration;\n$actionIconTransition:box-shadow $transitionDuration;\n$listItemTransition:box-shadow $transitionDuration;\n$primeIconFontSize:1rem;\n$divider:1px solid $shade300;\n$inlineSpacing:.5rem;\n$disabledOpacity:.65;\n$maskBg:rgba(0, 0, 0, 0.4);\n$loadingIconFontSize:2rem;\n$errorColor:#dc3545;\n\n//scale\n$scaleSM:0.875;\n$scaleLG:1.25;\n\n//focus\n$focusOutlineColor:$primaryLightColor;\n$focusOutline:0 none;\n$focusOutlineOffset:0;\n$focusShadow:0 0 0 0.2rem $focusOutlineColor;\n\n//action icons\n$actionIconWidth:2rem;\n$actionIconHeight:2rem;\n$actionIconBg:transparent;\n$actionIconBorder:0 none;\n$actionIconColor:$shade600;\n$actionIconHoverBg:transparent;\n$actionIconHoverBorderColor:transparent;\n$actionIconHoverColor:$shade700;\n$actionIconBorderRadius:50%;\n\n//input field (e.g. inputtext, spinner, inputmask)\n$inputPadding:.5rem .75rem;\n$inputTextFontSize:1rem;\n$inputBg:$shade000;\n$inputTextColor:$shade700;\n$inputIconColor:$shade700;\n$inputBorder:1px solid $shade400;\n$inputHoverBorderColor:$shade400;\n$inputFocusBorderColor:$primaryColor;\n$inputErrorBorderColor:$errorColor;\n$inputPlaceholderTextColor:$shade600;\n$inputFilledBg:$shade100;\n$inputFilledHoverBg:$shade100;\n$inputFilledFocusBg:$shade100;\n\n//input groups\n$inputGroupBg:$shade200;\n$inputGroupTextColor:$shade700;\n$inputGroupAddOnMinWidth:2.357rem;\n\n//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)\n$inputListBg:$shade000;\n$inputListTextColor:$shade900;\n$inputListBorder:$inputBorder;\n$inputListPadding:.5rem 0;\n$inputListItemPadding:.5rem 1.5rem;\n$inputListItemBg:transparent;\n$inputListItemTextColor:$shade900;\n$inputListItemHoverBg:$shade200;\n$inputListItemTextHoverColor:$shade900;\n$inputListItemBorder:0 none;\n$inputListItemBorderRadius:0;\n$inputListItemMargin:0;\n$inputListItemFocusShadow:inset 0 0 0 0.15rem $focusOutlineColor;\n$inputListHeaderPadding:.75rem 1.5rem;\n$inputListHeaderMargin:0;\n$inputListHeaderBg:$shade100;\n$inputListHeaderTextColor:$shade900;\n$inputListHeaderBorder:1px solid $shade300;\n\n//inputs with overlays (e.g. autocomplete, dropdown, multiselect)\n$inputOverlayBg:$inputListBg;\n$inputOverlayHeaderBg:$inputListHeaderBg;\n$inputOverlayBorder:1px solid rgba(0,0,0,.15);\n$inputOverlayShadow:none;\n\n//button\n$buttonPadding:.5rem .75rem;\n$buttonIconOnlyWidth:2.357rem;\n$buttonIconOnlyPadding:.5rem 0;\n$buttonBg:$primaryColor;\n$buttonTextColor:$primaryTextColor;\n$buttonBorder:1px solid $primaryColor;\n$buttonHoverBg:$primaryDarkColor;\n$buttonTextHoverColor:$primaryTextColor;\n$buttonHoverBorderColor:$primaryDarkColor;\n$buttonActiveBg:$primaryDarkerColor;\n$buttonTextActiveColor:$primaryTextColor;\n$buttonActiveBorderColor:$primaryDarkerColor;\n$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n$roundedButtonBorderRadius:2rem;\n\n$textButtonHoverBgOpacity:.04;\n$textButtonActiveBgOpacity:.16;\n$outlinedButtonBorder:1px solid;\n$plainButtonTextColor:$textSecondaryColor;\n$plainButtonHoverBgColor:$shade200;\n$plainButtonActiveBgColor:$shade300;\n\n$secondaryButtonBg:#6c757d;\n$secondaryButtonTextColor:#ffffff;\n$secondaryButtonBorder:1px solid #6c757d;\n$secondaryButtonHoverBg:#5a6268;\n$secondaryButtonTextHoverColor:#ffffff;\n$secondaryButtonHoverBorderColor:#5a6268;\n$secondaryButtonActiveBg:#545b62;\n$secondaryButtonTextActiveColor:#ffffff;\n$secondaryButtonActiveBorderColor:#4e555b;\n$secondaryButtonFocusShadow:0 0 0 0.2rem rgba(130,138,145,.5);\n\n$infoButtonBg:#17a2b8;\n$infoButtonTextColor:#ffffff;\n$infoButtonBorder:1px solid #17a2b8;\n$infoButtonHoverBg:#138496;\n$infoButtonTextHoverColor:#ffffff;\n$infoButtonHoverBorderColor:#117a8b;\n$infoButtonActiveBg:#138496;\n$infoButtonTextActiveColor:#ffffff;\n$infoButtonActiveBorderColor:#117a8b;\n$infoButtonFocusShadow:0 0 0 0.2rem rgba(58,176,195,.5);\n\n$successButtonBg:#28a745;\n$successButtonTextColor:#ffffff;\n$successButtonBorder:1px solid #28a745;\n$successButtonHoverBg:#218838;\n$successButtonTextHoverColor:#ffffff;\n$successButtonHoverBorderColor:#1e7e34;\n$successButtonActiveBg:#1e7e34;\n$successButtonTextActiveColor:#ffffff;\n$successButtonActiveBorderColor:#1c7430;\n$successButtonFocusShadow:0 0 0 0.2rem rgba(72,180,97,.5);\n\n$warningButtonBg:#ffc107;\n$warningButtonTextColor:#212529;\n$warningButtonBorder:1px solid #ffc107;\n$warningButtonHoverBg:#e0a800;\n$warningButtonTextHoverColor:#212529;\n$warningButtonHoverBorderColor:#d39e00;\n$warningButtonActiveBg:#d39e00;\n$warningButtonTextActiveColor:#212529;\n$warningButtonActiveBorderColor:#c69500;\n$warningButtonFocusShadow:0 0 0 0.2rem rgba(222,170,12,.5);\n\n$helpButtonBg:#6f42c1;\n$helpButtonTextColor:#ffffff;\n$helpButtonBorder:1px solid #6f42c1;\n$helpButtonHoverBg:#633bad;\n$helpButtonTextHoverColor:#ffffff;\n$helpButtonHoverBorderColor:#58349a;\n$helpButtonActiveBg:#58349a;\n$helpButtonTextActiveColor:#ffffff;\n$helpButtonActiveBorderColor:#4d2e87;\n$helpButtonFocusShadow:0 0 0 0.2rem #d3c6ec;\n\n$dangerButtonBg:#dc3545;\n$dangerButtonTextColor:#ffffff;\n$dangerButtonBorder:1px solid #dc3545;\n$dangerButtonHoverBg:#c82333;\n$dangerButtonTextHoverColor:#ffffff;\n$dangerButtonHoverBorderColor:#bd2130;\n$dangerButtonActiveBg:#bd2130;\n$dangerButtonTextActiveColor:#ffffff;\n$dangerButtonActiveBorderColor:#b21f2d;\n$dangerButtonFocusShadow:0 0 0 0.2rem rgba(225,83,97,.5);\n\n$linkButtonColor:$primaryColor;\n$linkButtonHoverColor:$primaryDarkColor;\n$linkButtonTextHoverDecoration:underline;\n$linkButtonFocusShadow:0 0 0 0.2rem $focusOutlineColor;\n\n//checkbox\n$checkboxWidth:20px;\n$checkboxHeight:20px;\n$checkboxBorder:2px solid $shade400;\n$checkboxIconFontSize:14px;\n$checkboxActiveBorderColor:$primaryColor;\n$checkboxActiveBg:$primaryColor;\n$checkboxIconActiveColor:$primaryTextColor;\n$checkboxActiveHoverBg:$primaryDarkerColor;\n$checkboxIconActiveHoverColor:$primaryTextColor;\n$checkboxActiveHoverBorderColor:$primaryDarkerColor;\n\n//radiobutton\n$radiobuttonWidth:20px;\n$radiobuttonHeight:20px;\n$radiobuttonBorder:2px solid $shade400;\n$radiobuttonIconSize:12px;\n$radiobuttonActiveBorderColor:$primaryColor;\n$radiobuttonActiveBg:$primaryColor;\n$radiobuttonIconActiveColor:$primaryTextColor;\n$radiobuttonActiveHoverBg:$primaryDarkerColor;\n$radiobuttonIconActiveHoverColor:$primaryTextColor;\n$radiobuttonActiveHoverBorderColor:$primaryDarkerColor;\n\n//colorpicker\n$colorPickerPreviewWidth:2rem;\n$colorPickerPreviewHeight:2rem;\n$colorPickerBg:#212529;\n$colorPickerBorderColor:#212529;\n$colorPickerHandleColor:$shade000;\n\n//togglebutton\n$toggleButtonBg:#6c757d;\n$toggleButtonBorder:1px solid #6c757d;\n$toggleButtonTextColor:#ffffff;\n$toggleButtonIconColor:#ffffff;\n$toggleButtonHoverBg:#5a6268;\n$toggleButtonHoverBorderColor:#545b62;\n$toggleButtonTextHoverColor:#ffffff;\n$toggleButtonIconHoverColor:#ffffff;\n$toggleButtonActiveBg:#545b62;\n$toggleButtonActiveBorderColor:#4e555b;\n$toggleButtonTextActiveColor:#ffffff;\n$toggleButtonIconActiveColor:#ffffff;\n$toggleButtonActiveHoverBg:#545b62;\n$toggleButtonActiveHoverBorderColor:#4e555b;\n$toggleButtonTextActiveHoverColor:#ffffff;\n$toggleButtonIconActiveHoverColor:#ffffff;\n\n//inplace\n$inplacePadding:$inputPadding;\n$inplaceHoverBg:$shade200;\n$inplaceTextHoverColor:$shade900;\n\n//rating\n$ratingIconFontSize:1.143rem;\n$ratingCancelIconColor:#dc3545;\n$ratingCancelIconHoverColor:#dc3545;\n$ratingStarIconOffColor:$shade700;\n$ratingStarIconOnColor:$primaryColor;\n$ratingStarIconHoverColor:$primaryColor;\n\n//slider\n$sliderBg:$shade200;\n$sliderBorder:0 none;\n$sliderHorizontalHeight:.286rem;\n$sliderVerticalWidth:0.286rem;\n$sliderHandleWidth:1.143rem;\n$sliderHandleHeight:1.143rem;\n$sliderHandleBg:$primaryColor;\n$sliderHandleBorder:2px solid $primaryColor;\n$sliderHandleBorderRadius:$borderRadius;\n$sliderHandleHoverBorderColor:$primaryDarkColor;\n$sliderHandleHoverBg:$primaryDarkColor;\n$sliderRangeBg:$primaryColor;\n\n//calendar\n$calendarTableMargin:.5rem 0;\n$calendarPadding:0;\n$calendarBg:$shade000;\n$calendarInlineBg:$calendarBg;\n$calendarTextColor:$shade900;\n$calendarBorder:$inputListBorder;\n$calendarOverlayBorder:$inputOverlayBorder;\n\n$calendarHeaderPadding:.5rem;\n$calendarHeaderBg:$shade100;\n$calendarInlineHeaderBg:$calendarBg;\n$calendarHeaderBorder:1px solid $shade300;\n$calendarHeaderTextColor:$shade900;\n$calendarHeaderFontWeight:600;\n$calendarHeaderCellPadding:.5rem;\n\n$calendarCellDatePadding:.5rem;\n$calendarCellDateWidth:2.5rem;\n$calendarCellDateHeight:2.5rem;\n$calendarCellDateBorderRadius:$borderRadius;\n$calendarCellDateBorder:1px solid transparent;\n$calendarCellDateHoverBg:$shade200;\n$calendarCellDateTodayBg:$shade400;\n$calendarCellDateTodayBorderColor:transparent;\n$calendarCellDateTodayTextColor:$shade900;\n\n$calendarButtonBarPadding:1rem 0;\n$calendarTimePickerPadding:.5rem;\n$calendarTimePickerElementPadding:0 .5rem;\n$calendarTimePickerTimeFontSize:1.25rem;\n\n$calendarBreakpoint:769px;\n$calendarCellDatePaddingSM:0;\n\n//input switch\n$inputSwitchWidth:3rem;\n$inputSwitchHeight:1.75rem;\n$inputSwitchBorderRadius:$borderRadius;\n$inputSwitchHandleWidth:1.250rem;\n$inputSwitchHandleHeight:1.250rem;\n$inputSwitchHandleBorderRadius:$borderRadius;\n$inputSwitchSliderPadding:.25rem;\n$inputSwitchSliderOffBg:$shade400;\n$inputSwitchHandleOffBg:$shade000;\n$inputSwitchSliderOffHoverBg:$shade400;\n$inputSwitchSliderOnBg:$primaryColor;\n$inputSwitchSliderOnHoverBg:$primaryColor;\n$inputSwitchHandleOnBg:$shade000;\n\n//panel\n$panelHeaderBorder:1px solid $shade300;\n$panelHeaderBg:$shade100;\n$panelHeaderTextColor:$shade900;\n$panelHeaderFontWeight:600;\n$panelHeaderPadding:1rem 1.25rem;\n$panelToggleableHeaderPadding:.5rem 1.25rem;\n\n$panelHeaderHoverBg:$shade200;\n$panelHeaderHoverBorderColor:$shade300;\n$panelHeaderTextHoverColor:$shade900;\n\n$panelContentBorder:1px solid $shade300;\n$panelContentBg:$shade000;\n$panelContentTextColor:$shade900;\n$panelContentPadding:1.25rem;\n\n$panelFooterBorder:1px solid $shade300;\n$panelFooterBg:$shade000;\n$panelFooterTextColor:$shade900;\n$panelFooterPadding:.5rem 1.25rem;\n\n//accordion\n$accordionSpacing:0;\n$accordionHeaderBorder:$panelHeaderBorder;\n$accordionHeaderBg:$panelHeaderBg;\n$accordionHeaderTextColor:$panelHeaderTextColor;\n$accordionHeaderFontWeight:$panelHeaderFontWeight;\n$accordionHeaderPadding:$panelHeaderPadding;\n\n$accordionHeaderHoverBg:$shade200;\n$accordionHeaderHoverBorderColor:$shade300;\n$accordionHeaderTextHoverColor:$shade900;\n\n$accordionHeaderActiveBg:$panelHeaderBg;\n$accordionHeaderActiveBorderColor:$shade300;\n$accordionHeaderTextActiveColor:$shade900;\n\n$accordionHeaderActiveHoverBg:$shade200;\n$accordionHeaderActiveHoverBorderColor:$shade300;\n$accordionHeaderTextActiveHoverColor:$shade900;\n\n$accordionContentBorder:$panelContentBorder;\n$accordionContentBg:$panelContentBg;\n$accordionContentTextColor:$panelContentTextColor;\n$accordionContentPadding:$panelContentPadding;\n\n//tabview\n$tabviewNavBorder:1px solid #dee2e6;\n$tabviewNavBorderWidth:0 0 1px 0;\n$tabviewNavBg:transparent;\n\n$tabviewHeaderSpacing:0;\n$tabviewHeaderBorder:solid;\n$tabviewHeaderBorderWidth:1px;\n$tabviewHeaderBorderColor:$shade000 $shade000 #dee2e6 $shade000;\n$tabviewHeaderBg:$shade000;\n$tabviewHeaderTextColor:$shade600;\n$tabviewHeaderFontWeight:$panelHeaderFontWeight;\n$tabviewHeaderPadding:.75rem 1rem;\n$tabviewHeaderMargin:0 0 -1px 0;\n\n$tabviewHeaderHoverBg:$shade000;\n$tabviewHeaderHoverBorderColor:#dee2e6;\n$tabviewHeaderTextHoverColor:$shade600;\n\n$tabviewHeaderActiveBg:$shade000;\n$tabviewHeaderActiveBorderColor:#dee2e6 #dee2e6 $shade000 #dee2e6;\n$tabviewHeaderTextActiveColor:$shade700;\n\n$tabviewContentBorder:0 none;\n$tabviewContentBg:$panelContentBg;\n$tabviewContentTextColor:$panelContentTextColor;\n$tabviewContentPadding:$panelContentPadding;\n\n//upload\n$fileUploadProgressBarHeight:.25rem;\n$fileUploadContentPadding:2rem 1rem;\n\n//scrollpanel\n$scrollPanelTrackBorder:0 none;\n$scrollPanelTrackBg:$shade100;\n\n//card\n$cardBodyPadding:1.5rem;\n$cardTitleFontSize:1.5rem;\n$cardTitleFontWeight:700;\n$cardSubTitleFontWeight:400;\n$cardSubTitleColor:$shade600;\n$cardContentPadding:1rem 0;\n$cardFooterPadding:1rem 0 0 0;\n$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n\n//editor\n$editorToolbarBg:$panelHeaderBg;\n$editorToolbarBorder:$panelHeaderBorder;\n$editorToolbarPadding:$panelHeaderPadding;\n$editorToolbarIconColor:$textSecondaryColor;\n$editorToolbarIconHoverColor:$textColor;\n$editorIconActiveColor:$primaryColor;\n$editorContentBorder:$panelContentBorder;\n$editorContentBg:$panelContentBg;\n\n//paginator\n$paginatorBg:$shade000;\n$paginatorTextColor:$primaryColor;\n$paginatorBorder:solid $shade300;\n$paginatorBorderWidth:0;\n$paginatorPadding:.75rem;\n$paginatorElementWidth:$buttonIconOnlyWidth;\n$paginatorElementHeight:$buttonIconOnlyWidth;\n$paginatorElementBg:$shade000;\n$paginatorElementBorder:1px solid #dee2e6;\n$paginatorElementIconColor:$primaryColor;\n$paginatorElementHoverBg:$shade200;\n$paginatorElementHoverBorderColor:#dee2e6;\n$paginatorElementIconHoverColor:$primaryColor;\n$paginatorElementBorderRadius:0;\n$paginatorElementMargin:0 0 0 -1px;\n$paginatorElementPadding:0;\n\n//table\n$tableHeaderBorder:solid #dee2e6;\n$tableHeaderBorderWidth:1px 0 0 0;\n$tableHeaderBg:$shade100;\n$tableHeaderTextColor:$shade900;\n$tableHeaderFontWeight:600;\n$tableHeaderPadding:1rem 1rem;\n\n$tableHeaderCellPadding:1rem 1rem;\n$tableHeaderCellBg:$shade000;\n$tableHeaderCellTextColor:$shade900;\n$tableHeaderCellFontWeight:600;\n$tableHeaderCellBorder:1px solid #dee2e6;\n$tableHeaderCellBorderWidth:1px 0 2px 0;\n$tableHeaderCellHoverBg:$shade200;\n$tableHeaderCellTextHoverColor:$shade900;\n$tableHeaderCellIconColor:$shade600;\n$tableHeaderCellIconHoverColor:$shade600;\n$tableHeaderCellHighlightBg:$shade000;\n$tableHeaderCellHighlightTextColor:$primaryColor;\n$tableHeaderCellHighlightHoverBg:$shade200;\n$tableHeaderCellHighlightTextHoverColor:$primaryColor;\n$tableSortableColumnBadgeSize:1.143rem;\n\n$tableBodyRowBg:$shade000;\n$tableBodyRowTextColor:$shade900;\n$tableBodyRowEvenBg:rgba(0,0,0,.05);\n$tableBodyRowHoverBg:$shade200;\n$tableBodyRowTextHoverColor:$shade900;\n$tableBodyCellBorder:1px solid #dee2e6;\n$tableBodyCellBorderWidth:1px 0 0 0;\n$tableBodyCellPadding:1rem 1rem;\n\n$tableFooterCellPadding:1rem 1rem;\n$tableFooterCellBg:$shade000;\n$tableFooterCellTextColor:$shade900;\n$tableFooterCellFontWeight:600;\n$tableFooterCellBorder:1px solid #dee2e6;\n$tableFooterCellBorderWidth:1px 0 1px 0;\n$tableResizerHelperBg:$primaryColor;\n\n$tableFooterBorder:1px solid #dee2e6;\n$tableFooterBorderWidth:1px 0 1px 0;\n$tableFooterBg:$shade100;\n$tableFooterTextColor:$shade900;\n$tableFooterFontWeight:600;\n$tableFooterPadding:1rem 1rem;\n\n$tableCellContentAlignment:left;\n$tableTopPaginatorBorderWidth:1px 0 0 0;\n$tableBottomPaginatorBorderWidth:1px 0 0 0;\n\n$tableScaleSM:0.5;\n$tableScaleLG:1.25;\n\n//dataview\n$dataViewContentPadding:0;\n$dataViewContentBorder:0 none;\n$dataViewListItemBorder:1px solid $shade300;\n$dataViewListItemBorderWidth:1px 0 0 0;\n\n//orderlist, picklist\n$orderListBreakpoint:769px;\n$pickListBreakpoint:769px;\n\n//schedule\n$fullCalendarEventBg:$primaryDarkColor;\n$fullCalendarEventBorder:1px solid $primaryDarkColor;\n$fullCalendarEventTextColor:$primaryTextColor;\n\n//tree\n$treeContainerPadding:0.286rem;\n$treeNodePadding:0.143rem;\n$treeNodeContentPadding:.5rem;\n$treeNodeChildrenPadding:0 0 0 1rem;\n$treeNodeIconColor:$shade600;\n\n//timeline\n$timelineVerticalEventContentPadding:0 1rem !default;\n$timelineHorizontalEventContentPadding:1rem 0 !default;\n$timelineEventMarkerWidth:1rem !default;\n$timelineEventMarkerHeight:1rem !default;\n$timelineEventMarkerBorderRadius:50% !default;\n$timelineEventMarkerBorder:0 none !default;\n$timelineEventMarkerBackground:$primaryColor !default;\n$timelineEventConnectorSize:2px !default;\n$timelineEventColor:$shade300 !default;\n\n//org chart\n$organizationChartConnectorColor:$shade300;\n\n//message\n$messageMargin:1rem 0;\n$messagePadding:1rem 1.25rem;\n$messageBorderWidth:1px;\n$messageIconFontSize:1.5rem;\n$messageTextFontSize:1rem;\n$messageTextFontWeight:500;\n\n//inline message\n$inlineMessagePadding:$inputPadding;\n$inlineMessageMargin:0;\n$inlineMessageIconFontSize:1rem;\n$inlineMessageTextFontSize:1rem;\n$inlineMessageBorderWidth:0px;\n\n//toast\n$toastIconFontSize:2rem;\n$toastMessageTextMargin:0 0 0 1rem;\n$toastMargin:0 0 1rem 0;\n$toastPadding:1rem;\n$toastBorderWidth:0;\n$toastShadow:0 0.25rem 0.75rem rgba(0,0,0,.1);\n$toastOpacity:1;\n$toastTitleFontWeight:700;\n$toastDetailMargin:$inlineSpacing 0 0 0;\n\n//severities\n$infoMessageBg:#cce5ff;\n$infoMessageBorder:solid #b8daff;\n$infoMessageTextColor:#004085;\n$infoMessageIconColor:#004085;\n$successMessageBg:#d4edda;\n$successMessageBorder:solid #c3e6cb;\n$successMessageTextColor:#155724;\n$successMessageIconColor:#155724;\n$warningMessageBg:#fff3cd;\n$warningMessageBorder:solid #ffeeba;\n$warningMessageTextColor:#856404;\n$warningMessageIconColor:#856404;\n$errorMessageBg:#f8d7da;\n$errorMessageBorder:solid #f5c6cb;\n$errorMessageTextColor:#721c24;\n$errorMessageIconColor:#721c24;\n\n//overlays\n$overlayContentBorder:1px solid rgba(0,0,0,.2);\n$overlayContentBg:$panelContentBg;\n$overlayContainerShadow:none;\n\n//dialog\n$dialogHeaderBg:$shade000;\n$dialogHeaderBorder:1px solid $shade200;\n$dialogHeaderTextColor:$shade900;\n$dialogHeaderFontWeight:600;\n$dialogHeaderFontSize:1.25rem;\n$dialogHeaderPadding:1rem;\n$dialogContentPadding:1rem;\n$dialogFooterBorder:1px solid $shade200;\n$dialogFooterPadding:1rem;\n\n//tooltip\n$tooltipBg:$shade900;\n$tooltipTextColor:$shade000;\n$tooltipPadding:$inputPadding;\n\n//steps\n$stepsItemBg:transparent;\n$stepsItemBorder:1px solid $shade300;\n$stepsItemTextColor:$shade600;\n$stepsItemNumberWidth:2rem;\n$stepsItemNumberHeight:2rem;\n$stepsItemNumberFontSize:1.143rem;\n$stepsItemNumberColor:$shade900;\n$stepsItemNumberBorderRadius:$borderRadius;\n$stepsItemActiveFontWeight:600;\n\n//progressbar\n$progressBarHeight:1.5rem;\n$progressBarBorder:0 none;\n$progressBarBg:$shade200;\n$progressBarValueBg:$primaryColor;\n\n//menu (e.g. menu, menubar, tieredmenu)\n$menuWidth:12.5rem;\n$menuBg:$shade000;\n$menuBorder:1px solid $shade300;\n$menuTextColor:$shade900;\n$menuitemPadding:.75rem 1rem;\n$menuitemBorderRadius:0;\n$menuitemTextColor:$shade900;\n$menuitemIconColor:$shade900;\n$menuitemTextHoverColor:$shade900;\n$menuitemIconHoverColor:$shade900;\n$menuitemHoverBg:$shade200;\n$menuitemTextActiveColor:$shade900;\n$menuitemIconActiveColor:$shade900;\n$menuitemActiveBg:$shade200;\n$menuitemSubmenuIconFontSize:.875rem;\n$submenuHeaderMargin:0;\n$submenuHeaderPadding:.75rem 1rem;\n$submenuHeaderBg:$shade000;\n$submenuHeaderTextColor:$shade900;\n$submenuHeaderBorderRadius:0;\n$submenuHeaderFontWeight:600;\n$overlayMenuBg:$menuBg;\n$overlayMenuBorder:1px solid rgba(0,0,0,.15);\n$overlayMenuShadow:none;\n$verticalMenuPadding:.5rem 0;\n$verticalMenuitemMargin:0;\n$menuSeparatorMargin:.5rem 0;\n\n$breadcrumbPadding:1rem;\n$breadcrumbBg:$shade100;\n$breadcrumbBorder:0 none;\n$breadcrumbItemTextColor:$primaryColor;\n$breadcrumbItemIconColor:$primaryColor;\n$breadcrumbLastItemTextColor:$shade600;\n$breadcrumbLastItemIconColor:$shade600;\n$breadcrumbSeparatorColor:$shade600;\n\n$horizontalMenuPadding:.5rem 1rem;\n$horizontalMenuBg:$shade100;\n$horizontalMenuBorder:0 none;\n$horizontalMenuTextColor:rgba(0,0,0,.9);\n$horizontalMenuRootMenuitemPadding:1rem;\n$horizontalMenuRootMenuitemBorderRadius:$borderRadius;\n$horizontalMenuRootMenuitemTextColor:rgba(0,0,0,.5);\n$horizontalMenuRootMenuitemIconColor:rgba(0,0,0,.5);\n$horizontalMenuRootMenuitemTextHoverColor:rgba(0,0,0,.7);\n$horizontalMenuRootMenuitemIconHoverColor:rgba(0,0,0,.7);\n$horizontalMenuRootMenuitemHoverBg:transparent;\n$horizontalMenuRootMenuitemTextActiveColor:rgba(0,0,0,.9);\n$horizontalMenuRootMenuitemIconActiveColor:rgba(0,0,0,.9);\n$horizontalMenuRootMenuitemActiveBg:transparent;\n\n//badge and tag\n$badgeBg:$primaryColor;\n$badgeTextColor:$primaryTextColor;\n$badgeMinWidth:1.5rem;\n$badgeHeight:1.5rem;\n$badgeFontWeight:700;\n$badgeFontSize:.75rem;\n\n$tagPadding:.25rem .4rem;\n\n//carousel\n$carouselIndicatorsPadding:1rem;\n$carouselIndicatorBg:$shade200;\n$carouselIndicatorHoverBg:$shade300;\n$carouselIndicatorBorderRadius:0;\n$carouselIndicatorWidth:2rem;\n$carouselIndicatorHeight:.5rem;\n\n//galleria\n$galleriaMaskBg:rgba(0,0,0,0.9);\n$galleriaCloseIconMargin:.5rem;\n$galleriaCloseIconFontSize:2rem;\n$galleriaCloseIconBg:transparent;\n$galleriaCloseIconColor:$shade100;\n$galleriaCloseIconHoverBg:rgba(255,255,255,0.1);\n$galleriaCloseIconHoverColor:$shade100;\n$galleriaCloseIconWidth:4rem;\n$galleriaCloseIconHeight:4rem;\n$galleriaCloseIconBorderRadius:$borderRadius;\n\n$galleriaItemNavigatorBg:transparent;\n$galleriaItemNavigatorColor:$shade100;\n$galleriaItemNavigatorMargin:0 .5rem;\n$galleriaItemNavigatorFontSize:2rem;\n$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1);\n$galleriaItemNavigatorHoverColor:$shade100;\n$galleriaItemNavigatorWidth:4rem;\n$galleriaItemNavigatorHeight:4rem;\n$galleriaItemNavigatorBorderRadius:$borderRadius;\n\n$galleriaCaptionBg:rgba(0,0,0,.5);\n$galleriaCaptionTextColor:$shade100;\n$galleriaCaptionPadding:1rem;\n\n$galleriaIndicatorsPadding:1rem;\n$galleriaIndicatorBg:$shade200;\n$galleriaIndicatorHoverBg:$shade300;\n$galleriaIndicatorBorderRadius:$borderRadius;\n$galleriaIndicatorWidth:1rem;\n$galleriaIndicatorHeight:1rem;\n$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5);\n$galleriaIndicatorBgOnItem:rgba(255,255,255,.4);\n$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6);\n\n$galleriaThumbnailContainerBg:rgba(0,0,0,.9);\n$galleriaThumbnailContainerPadding:1rem .25rem;\n$galleriaThumbnailNavigatorBg:transparent;\n$galleriaThumbnailNavigatorColor:$shade100;\n$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1);\n$galleriaThumbnailNavigatorHoverColor:$shade100;\n$galleriaThumbnailNavigatorBorderRadius:$borderRadius;\n$galleriaThumbnailNavigatorWidth:2rem;\n$galleriaThumbnailNavigatorHeight:2rem;\n\n//divider\n$dividerHorizontalMargin:1rem 0;\n$dividerHorizontalPadding:0 1rem;\n$dividerVerticalMargin:0 1rem;\n$dividerVerticalPadding:1rem 0;\n$dividerSize:1px;\n$dividerColor:$shade300;\n\n//avatar\n$avatarBg:$shade300;\n$avatarTextColor:$textColor;\n\n//chip\n$chipBg:$shade300;\n$chipTextColor:$textColor;\n$chipBorderRadius: 16px;\n\n//scrollTop\n$scrollTopBg:rgba(0,0,0,0.7);\n$scrollTopHoverBg:rgba(0,0,0,0.8);\n$scrollTopWidth:3rem;\n$scrollTopHeight:3rem;\n$scrollTopBorderRadius:$borderRadius;\n$scrollTopFontSize:1.5rem;\n$scrollTopTextColor:$shade100;\n\n//skeleton\n$skeletonBg:$shade200;\n$skeletonAnimationBg:rgba(255,255,255,0.4);\n\n//splitter\n$splitterGutterBg:$shade100;\n$splitterGutterHandleBg:$shade300;\n\n:root &#123;\n--surface-a:#&#123;$shade000&#125;;\n--surface-b:#&#123;$shade100&#125;;\n--surface-c:#&#123;$shade200&#125;;\n--surface-d:#&#123;$shade300&#125;;\n--surface-e:#&#123;$shade000&#125;;\n--surface-f:#&#123;$shade000&#125;;\n--text-color:#&#123;$shade900&#125;;\n--text-color-secondary:#&#123;$shade600&#125;;\n--primary-color:#&#123;$primaryColor&#125;;\n--primary-color-text:#&#123;$primaryTextColor&#125;;\n--font-family:#&#123;$fontFamily&#125;;\n&#125;\n</app-code>\n</div>\n\n            <h4>Menu Modes</h4>\n            <p>Menu has 3 modes; <b>static</b>, <b>overlay</b> and <b>horizontal</b>. Layout wrapper element in template.xhtml is used to define which mode to use by adding specific classes. Default\n            is overlay and adding <i>layout-menu-horizontal</i> enables horizontal menu whereas for static menu use <i>ayout-wrapper-static</i>.</p>\n\n<app-code  ngPreserveWhitespaces ngNonBindable lang=\"markup\">\n&lt;div class=\"layout-wrapper layout-menu-horizontal\"&gt;\n</app-code>\n\n            <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an ngClass expression so that user can switch between modes. Sample\n                    application has an example implementation of such use case. Refer to <i>app.main.component.ts</i> for an example.</p>\n\n            <h4>Light and Dark Menu</h4>\n            <p>Menu theme is defined at the main container element, template uses the default light menus whereas a dark theme can be applied using the <i>layout-menu-dark</i> style class.</p>\n<app-code  ngPreserveWhitespaces ngNonBindable lang=\"markup\">\n&lt;div class=\"layout-wrapper layout-menu-dark\"&gt;\n...\n&lt;/div&gt;\n</app-code>\n\n            <h4>Custom Menu Themes</h4>\n            <p>Light and Dark menus utilize the primary color of the chosen layout whereas custom menu themes listed below define their own design. Apply\n                the following style classes for a custom menu theme.\n            </p>\n            <ul>\n                <li>layout-menu-chile</li>\n                <li>layout-menu-naples</li>\n                <li>layout-menu-georgia</li>\n                <li>layout-menu-infinity</li>\n                <li>layout-menu-chicago</li>\n                <li>layout-menu-majesty</li>\n                <li>layout-menu-fish</li>\n                <li>layout-menu-dawn</li>\n                <li>layout-menu-record</li>\n                <li>layout-menu-pool</li>\n                <li>layout-menu-metal</li>\n                <li>layout-menu-china</li>\n                <li>layout-menu-table</li>\n                <li>layout-menu-panorama</li>\n                <li>layout-menu-barcelona</li>\n                <li>layout-menu-underwater</li>\n                <li>layout-menu-symmetry</li>\n                <li>layout-menu-rain</li>\n                <li>layout-menu-utah</li>\n                <li>layout-menu-wave</li>\n                <li>layout-menu-flora</li>\n                <li>layout-menu-speed</li>\n                <li>layout-menu-canopy</li>\n                <li>layout-menu-sanpaolo</li>\n                <li>layout-menu-basketball</li>\n                <li>layout-menu-misty</li>\n                <li>layout-menu-summit</li>\n                <li>layout-menu-snow</li>\n                <li>layout-menu-wall</li>\n                <li>layout-menu-ferris</li>\n                <li>layout-menu-ship</li>\n                <li>layout-menu-ny</li>\n                <li>layout-menu-cyan</li>\n                <li>layout-menu-violet</li>\n                <li>layout-menu-red</li>\n                <li>layout-menu-blue</li>\n                <li>layout-menu-porsuk</li>\n                <li>layout-menu-pink</li>\n                <li>layout-menu-purple</li>\n                <li>layout-menu-orange</li>\n            </ul>\n\n<app-code  ngPreserveWhitespaces ngNonBindable lang=\"javascript\">\n&lt;div class=\"layout-wrapper layout-menu-chile\"&gt;\n...\n&lt;/div&gt;\n</app-code>\n\n            <p>Creating a custom menu theme with the color scheme of your choice requires the following steps.</p>\n            <ul>\n                <li>Choose a menu theme such as myown.</li>\n                <li>Create an empty file named myown.scss inside assets/sass/layout/menu/themes/ folder.</li>\n                <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>\n                <li>Import <i>_menu_theme.scss</i> file.</li>\n                <li>Import your file at <i>/assets/sass/layout/menu/_menu</i> file.</li>.\n            </ul>\n\n            <p>Here are the variables required to create a layout.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n.layout-menu-myown &#123;\n    $menuBgColor: #222932;\n    $rootMenuitemTextColor:#eceff4;\n    $rootMenuitemIconColor:#eceff4;\n    $rootMenuitemHoverBgColor:rgba(255, 255, 255, 0.24);\n    $activeRootMenuitemBgColor:#EBCB8B;\n    $activeRootMenuitemTextColor:#3b4252;\n    $activeRootMenuitemIconColor:#2e3440;\n    $submenuBgColor:rgba(255, 255, 255, 0.12);\n    $horizontalSubmenuBgColor:#2e3440;\n    $submenuItemTextColor:#eceff4;\n    $submenuItemIconColor:#eceff4;\n    $submenuItemHoverBgColor:rgba(0, 0, 0, 0.42);\n    $activeSubmenuItemTextColor:#EBCB8B;\n    $activeSubmenuItemIconColor:#EBCB8B;\n    $appNameTextColor:#ffffff;\n    $pinBgColor:#ffffff;\n    $pinIconColor:#2e3440;\n\n    @import '../_menu_theme';\n&#125;\n</app-code>\n\n            <p>An image can be used as the background of the menu using the menuBgImage variable.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n.layout-menu-myown &#123;\n    $menuBgColor: #222932;\n    $menuBgImage:'myown.jpg';\n    $horizontalMenuBgImage:'myown-horizontal.jpg';\n    $rootMenuitemTextColor:#eceff4;\n    $rootMenuitemIconColor:#eceff4;\n    $rootMenuitemHoverBgColor:rgba(255, 255, 255, 0.24);\n    $activeRootMenuitemBgColor:#EBCB8B;\n    $activeRootMenuitemTextColor:#3b4252;\n    $activeRootMenuitemIconColor:#2e3440;\n    $submenuBgColor:rgba(255, 255, 255, 0.12);\n    $horizontalSubmenuBgColor:#2e3440;\n    $submenuItemTextColor:#eceff4;\n    $submenuItemIconColor:#eceff4;\n    $submenuItemHoverBgColor:rgba(0, 0, 0, 0.42);\n    $activeSubmenuItemTextColor:#EBCB8B;\n    $activeSubmenuItemIconColor:#EBCB8B;\n    $appNameTextColor:#ffffff;\n    $pinBgColor:#ffffff;\n    $pinIconColor:#2e3440;\n\n    @import '../_menu_theme';\n&#125;\n</app-code>\n\n            <h4>Breadcrumb</h4>\n            <p>Mirage has an optional built-in breadcrumb section right below the topbar.\n                The items are dynamically generated using a BreadcrumbService where each main page that goes into the router-outlet should provide a collection of MenuItem instances.\n                Here is an example component that updates the breadcrumb.</p>\n<app-code  ngPreserveWhitespaces ngNonBindable lang=\"javascript\">\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;BreadcrumbService&#125; from '../../breadcrumb.service';\n\n@Component(&#123;\n    templateUrl: './controlpanel.component.html'\n&#125;)\nexport class ControlPanelComponent &#123;\n\n    constructor(private breadcrumbService: BreadcrumbService) &#123;\n        this.breadcrumbService.setItems([\n            &#123;label: 'Admin'&#125;,\n            &#123;label: 'Control Panel', routerLink: ['/controlpanel']&#125;\n        ]);\n    &#125;\n\n&#125;\n</app-code>\n\n            <h4>Grid CSS</h4>\n            <p>Mirage uses PrimeFlex CSS throughout the demos such as Dashboard, however any Grid library can be used with it since Mirage itself does not depend on PrimeFlex except demo pages.</p>\n\n            <h4>Customizing Styles</h4>\n            <p>It is suggested to add your customizations in the following sass files under the override folder instead of adding them to the\n                scss files under sass folder to avoid maintenance issues after an update.</p>\n\n            <ul>\n                <li><b>overrides/_layout_variables</b>: Variables of the layout.</li>\n                <li><b>overrides/_layout_styles</b>: Styles for the layout.</li>\n                <li><b>overrides/_theme_variables</b>: Variables of the theme.</li>\n                <li><b>overrides/_theme_styles</b>: Styles for the theme.</li>\n            </ul>\n\n            <h4>Migration Guide</h4>\n            <p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>\n\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "a9iL":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/emptydemo.component.ts ***!
      \**************************************************/

    /*! exports provided: EmptyDemoComponent */

    /***/
    function a9iL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyDemoComponent", function () {
        return EmptyDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_emptydemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./emptydemo.component.html */
      "8nPe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var EmptyDemoComponent = function EmptyDemoComponent(breadcrumbService) {
        _classCallCheck(this, EmptyDemoComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Pages'
        }, {
          label: 'Empty',
          routerLink: ['/pages/empty']
        }]);
      };

      EmptyDemoComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      EmptyDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_emptydemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], EmptyDemoComponent);
      /***/
    },

    /***/
    "aOMY":
    /*!***************************************************!*\
      !*** ./src/app/demo/view/chartsdemo.component.ts ***!
      \***************************************************/

    /*! exports provided: ChartsDemoComponent */

    /***/
    function aOMY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsDemoComponent", function () {
        return ChartsDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chartsdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chartsdemo.component.html */
      "vdpq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var ChartsDemoComponent = /*#__PURE__*/function () {
        function ChartsDemoComponent(breadcrumbService) {
          _classCallCheck(this, ChartsDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Charts',
            routerLink: ['/uikit/chart']
          }]);
        }

        _createClass(ChartsDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.lineData = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgb(255, 205, 86)',
                borderColor: 'rgb(255, 205, 86)'
              }, {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(75, 192, 192)'
              }]
            };
            this.barData = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [65, 59, 80, 81, 56, 55, 40]
              }, {
                label: 'My Second dataset',
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(54, 162, 235)',
                data: [28, 48, 40, 19, 86, 27, 90]
              }]
            };
            this.pieData = {
              labels: ['A', 'B', 'C'],
              datasets: [{
                data: [540, 325, 702, 421],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)']
              }]
            };
            this.polarData = {
              datasets: [{
                data: [11, 16, 7, 3],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
                label: 'My dataset'
              }],
              labels: ['Blue', 'Purple', 'Orange', 'Green']
            };
            this.radarData = {
              labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
              datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(54, 162, 235,0.2)',
                borderColor: 'rgba(54, 162, 235,1)',
                pointBackgroundColor: 'rgba(54, 162, 235,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
              }, {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255, 99, 132,0.2)',
                borderColor: 'rgba(255, 99, 132,1)',
                pointBackgroundColor: 'rgba(255, 99, 132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }]
            };
          }
        }]);

        return ChartsDemoComponent;
      }();

      ChartsDemoComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      ChartsDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_chartsdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartsDemoComponent);
      /***/
    },

    /***/
    "aWBc":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/flexbox.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function aWBc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid flexbox-demo\">\n\t<div class=\"p-col-12\">\n\t\t<h4>FlexBox</h4>\n\t\t<p>Easily manage the layout of your components with the responsive FlexBox utilities. If you require a utility to manage the layout of your application,\n\t\t\trefer to the <a [routerLink]=\"['/grid']\">Grid System</a> instead.\n\t\t</p>\n\n\t\t<h5>Flex Container</h5>\n\t\t<p>An element can configured as a flexbox container using the <i>p-d-flex</i> or <i>p-d-inline-flex</i> classes.</p>\n\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex\"&gt;Flex Container&lt;/div&gt;\n&lt;div class=\"p-d-inline-flex\"&gt;Inline Flex Container&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"box p-d-flex p-mb-3\">Flex Container</div>\n\t\t<div class=\"box p-d-inline-flex\">Inline Flex Container</div>\n\n\t\t<h5>Direction</h5>\n\t\t<p>Default is applied using the <i>p-flex-&#123;direction&#125;</i> class where direction can be either of the following.</p>\n\t\t<ul>\n\t\t\t<li>row (default)</li>\n\t\t\t<li>row-reverse</li>\n\t\t\t<li>column</li>\n\t\t\t<li>column-reverse</li>\n\t\t</ul>\n\n\t\t<h6>Row</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex\"&gt;\n\t&lt;div class=\"p-mr-2\"&gt;Item 1&lt;/div&gt;\n\t&lt;div class=\"p-mr-2\"&gt;Item 2&lt;/div&gt;\n\t&lt;div&gt;Item 3&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex\">\n\t\t\t<div class=\"p-mr-2\">Item 1</div>\n\t\t\t<div class=\"p-mr-2\">Item 2</div>\n\t\t\t<div>Item 3</div>\n\t\t</div>\n\n\t\t<h6>Column</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-flex-column\"&gt;\n\t&lt;div class=\"p-mb-2\"&gt;Item 1&lt;/div&gt;\n\t&lt;div class=\"p-mb-2\"&gt;Item 2&lt;/div&gt;\n\t&lt;div&gt;Item 3&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex p-flex-column\">\n\t\t\t<div class=\"p-mb-2\">Item 1</div>\n\t\t\t<div class=\"p-mb-2\">Item 2</div>\n\t\t\t<div>Item 3</div>\n\t\t</div>\n\n\t\t<h6>Responsive</h6>\n\t\t<p>Row direction for larger screens and column for smaller.</p>\n\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-flex-column p-flex-md-row\"&gt;\n\t&lt;div class=\"p-mb-2 p-mr-2\"&gt;Item 1&lt;/div&gt;\n\t&lt;div class=\"p-mb-2 p-mr-2\"&gt;Item 2&lt;/div&gt;\n\t&lt;div class=\"p-mb-2 p-mr-2\"&gt;Item 3&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex p-flex-column p-flex-md-row\">\n\t\t\t<div class=\"p-mb-2 p-mr-2\">Item 1</div>\n\t\t\t<div class=\"p-mb-2 p-mr-2\">Item 2</div>\n\t\t\t<div class=\"p-mb-2 p-mr-2\">Item 3</div>\n\t\t</div>\n\n\t\t<h6>Direction Classes</h6>\n\t\t<ul>\n\t\t\t<li>p-flex-row</li>\n\t\t\t<li>p-flex-row-reverse</li>\n\t\t\t<li>p-flex-column</li>\n\t\t\t<li>p-flex-column-reverse</li>\n\t\t\t<li>p-flex-sm-row</li>\n\t\t\t<li>p-flex-sm-row-reverse</li>\n\t\t\t<li>p-flex-sm-column</li>\n\t\t\t<li>p-flex-sm-column-reverse</li>\n\t\t\t<li>p-flex-md-row</li>\n\t\t\t<li>p-flex-md-row-reverse</li>\n\t\t\t<li>p-flex-md-column</li>\n\t\t\t<li>p-flex-md-column-reverse</li>\n\t\t\t<li>p-flex-lg-row</li>\n\t\t\t<li>p-flex-lg-row-reverse</li>\n\t\t\t<li>p-flex-lg-column</li>\n\t\t\t<li>p-flex-lg-column-reverse</li>\n\t\t\t<li>p-flex-xl-row</li>\n\t\t\t<li>p-flex-xl-row-reverse</li>\n\t\t\t<li>p-flex-xl-column</li>\n\t\t\t<li>p-flex-xl-column-reverse</li>\n\t\t</ul>\n\n\t\t<h5>Order</h5>\n\t\t<p>Order configures the way in which they appear in the flex container. <i>p-order-&#123;value&#125;</i> format is used where value can be a number from 0 to 6.</p>\n\n\t\t<h6>Customized</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex\"&gt;\n\t&lt;div class=\"p-mr-2 p-order-3\"&gt;Item 1&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-order-1\"&gt;Item 2&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-order-2\"&gt;Item 3&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex\">\n\t\t\t<div class=\"p-mr-2 p-order-3\">Item 1</div>\n\t\t\t<div class=\"p-mr-2 p-order-1\">Item 2</div>\n\t\t\t<div class=\"p-mr-2 p-order-2\">Item 3</div>\n\t\t</div>\n\n\t\t<h6>Responsive</h6>\n\t\t<p>Orders change depending on the screen size.</p>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex\"&gt;\n\t&lt;div class=\"p-mr-2 p-order-3 p-order-md-2\"&gt;Item 1&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-order-1 p-order-md-3\"&gt;Item 2&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-order-2 p-order-md-1\"&gt;Item 3&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex\">\n\t\t\t<div class=\"p-mr-2 p-order-3 p-order-md-2\">Item 1</div>\n\t\t\t<div class=\"p-mr-2 p-order-1 p-order-md-3\">Item 2</div>\n\t\t\t<div class=\"p-mr-2 p-order-2 p-order-md-1\">Item 3</div>\n\t\t</div>\n\n\t\t<h6>Order Classes</h6>\n\t\t<ul>\n\t\t\t<li>p-order-0</li>\n\t\t\t<li>p-order-1</li>\n\t\t\t<li>p-order-2</li>\n\t\t\t<li>p-order-3</li>\n\t\t\t<li>p-order-4</li>\n\t\t\t<li>p-order-5</li>\n\t\t\t<li>p-order-6</li>\n\t\t\t<li>p-order-sm-0</li>\n\t\t\t<li>p-order-sm-1</li>\n\t\t\t<li>p-order-sm-2</li>\n\t\t\t<li>p-order-sm-3</li>\n\t\t\t<li>p-order-sm-4</li>\n\t\t\t<li>p-order-sm-5</li>\n\t\t\t<li>p-order-sm-6</li>\n\t\t\t<li>p-order-md-0</li>\n\t\t\t<li>p-order-md-1</li>\n\t\t\t<li>p-order-md-2</li>\n\t\t\t<li>p-order-md-3</li>\n\t\t\t<li>p-order-md-4</li>\n\t\t\t<li>p-order-md-5</li>\n\t\t\t<li>p-order-md-6</li>\n\t\t\t<li>p-order-lg-0</li>\n\t\t\t<li>p-order-lg-1</li>\n\t\t\t<li>p-order-lg-2</li>\n\t\t\t<li>p-order-lg-3</li>\n\t\t\t<li>p-order-lg-4</li>\n\t\t\t<li>p-order-lg-5</li>\n\t\t\t<li>p-order-lg-6</li>\n\t\t\t<li>p-order-xl-0</li>\n\t\t\t<li>p-order-xl-1</li>\n\t\t\t<li>p-order-xl-2</li>\n\t\t\t<li>p-order-xl-3</li>\n\t\t\t<li>p-order-xl-4</li>\n\t\t\t<li>p-order-xl-5</li>\n\t\t\t<li>p-order-xl-6</li>\n\t\t</ul>\n\n\t\t<h5>Wrap</h5>\n\t\t<p>Flex wrap defines the wrap behavior when there is not enough space in the container. The format of the class is <i>p-flex-&#123;value&#125;</i> and the value field can be either of the\n\t\t\tlisted alternatives.</p>\n\n\t\t<ul>\n\t\t\t<li>nowrap (default)</li>\n\t\t\t<li>wrap</li>\n\t\t\t<li>wrap-reverse</li>\n\t\t</ul>\n\n\t\t<h6>No Wrap</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex\"&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 1&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 2&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 3&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 4&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 5&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 6&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex\">\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 1</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 2</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 3</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 4</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 5</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 6</div>\n\t\t</div>\n\n\t\t<h6>Wrap</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-flex-wrap\"&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 1&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 2&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 3&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 4&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 5&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 6&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex p-flex-wrap\">\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 1</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 2</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 3</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 4</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 5</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 6</div>\n\t\t</div>\n\n\t\t<h6>Wrap Reverse</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-flex-wrap-reverse\"&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 1&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 2&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 3&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 4&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 5&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-mb-2\"&gt;Item 6&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex p-flex-wrap-reverse\">\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 1</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 2</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 3</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 4</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 5</div>\n\t\t\t<div class=\"p-mr-2 p-mb-2\">Item 6</div>\n\t\t</div>\n\n\t\t<h6>Wrap Classes</h6>\n\t\t<ul>\n\t\t\t<li>p-flex-nowrap</li>\n\t\t\t<li>p-flex-wrap</li>\n\t\t\t<li>p-flex-wrap-reverse</li>\n\t\t\t<li>p-flex-sm-nowrap</li>\n\t\t\t<li>p-flex-sm-wrap</li>\n\t\t\t<li>p-flex-sm-wrap-reverse</li>\n\t\t\t<li>p-flex-md-nowrap</li>\n\t\t\t<li>p-flex-md-wrap</li>\n\t\t\t<li>p-flex-md-wrap-reverse</li>\n\t\t\t<li>p-flex-lg-nowrap</li>\n\t\t\t<li>p-flex-lg-wrap</li>\n\t\t\t<li>p-flex-lg-wrap-reverse</li>\n\t\t\t<li>p-flex-xl-nowrap</li>\n\t\t\t<li>p-flex-xl-wrap</li>\n\t\t\t<li>p-flex-xl-wrap-reverse</li>\n\t\t</ul>\n\n\t\t<h5>Justify Content</h5>\n\t\t<p>Justify content is the alignment along the main axis and defined using the <i>p-jc-&#123;value&#125;</i> format with responsive alternatives. Value field accepts\n\t\t\tthe options below.</p>\n\t\t<ul>\n\t\t\t<li>start</li>\n\t\t\t<li>end</li>\n\t\t\t<li>center</li>\n\t\t\t<li>between</li>\n\t\t\t<li>around</li>\n\t\t\t<li>evenly</li>\n\t\t</ul>\n\n\t\t<h6>Between</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-jc-between\"&gt;\n\t&lt;div&gt;Item 1&lt;/div&gt;\n\t&lt;div&gt;Item 2&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\t\t<div class=\"p-d-flex p-jc-between\">\n\t\t\t<div>Item 1</div>\n\t\t\t<div>Item 2</div>\n\t\t</div>\n\n\t\t<h6>Center</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-jc-center\"&gt;\n\t&lt;div class=\"p-mr-2\"&gt;Item 1&lt;/div&gt;\n\t&lt;div&gt;Item 2&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\t\t<div class=\"p-d-flex p-jc-center\">\n\t\t\t<div class=\"p-mr-2\">Item 1</div>\n\t\t\t<div>Item 2</div>\n\t\t</div>\n\n\t\t<h6>Justify Content Classes</h6>\n\t\t<ul>\n\t\t\t<li>p-jc-start</li>\n\t\t\t<li>p-jc-end</li>\n\t\t\t<li>p-jc-center</li>\n\t\t\t<li>p-jc-between</li>\n\t\t\t<li>p-jc-around</li>\n\t\t\t<li>p-jc-evenly</li>\n\t\t\t<li>p-jc-sm-start</li>\n\t\t\t<li>p-jc-sm-end</li>\n\t\t\t<li>p-jc-sm-center</li>\n\t\t\t<li>p-jc-sm-between</li>\n\t\t\t<li>p-jc-sm-around</li>\n\t\t\t<li>p-jc-sm-evenly</li>\n\t\t\t<li>p-jc-md-start</li>\n\t\t\t<li>p-jc-md-end</li>\n\t\t\t<li>p-jc-md-center</li>\n\t\t\t<li>p-jc-md-between</li>\n\t\t\t<li>p-jc-md-around</li>\n\t\t\t<li>p-jc-md-evenly</li>\n\t\t\t<li>p-jc-lg-start</li>\n\t\t\t<li>p-jc-lg-end</li>\n\t\t\t<li>p-jc-lg-center</li>\n\t\t\t<li>p-jc-lg-between</li>\n\t\t\t<li>p-jc-lg-around</li>\n\t\t\t<li>p-jc-lg-evenly</li>\n\t\t\t<li>p-jc-xl-start</li>\n\t\t\t<li>p-jc-xl-end</li>\n\t\t\t<li>p-jc-xl-center</li>\n\t\t\t<li>p-jc-xl-between</li>\n\t\t\t<li>p-jc-xl-around</li>\n\t\t\t<li>p-jc-xl-evenly</li>\n\t\t</ul>\n\n\t\t<h5>Align Items</h5>\n\t\t<p>Align Items configuration is the alignment along the cross axis and defined using the <i>p-ai-&#123;value&#125;</i> format with responsive alternatives. Value field accepts\n\t\t\tthe options below.</p>\n\t\t<ul>\n\t\t\t<li>start</li>\n\t\t\t<li>end</li>\n\t\t\t<li>center</li>\n\t\t\t<li>baseline</li>\n\t\t\t<li>stretch (default)</li>\n\t\t</ul>\n\n\t\t<h6>Start</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-ai-start\"&gt;\n\t&lt;div class=\"p-mr-2\" style=\"height:100px\"&gt;Item 1&lt;/div&gt;\n\t&lt;div style=\"height:50px\"&gt;Item 2&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\t\t<div class=\"p-d-flex p-ai-start\">\n\t\t\t<div class=\"p-mr-2\" style=\"height:100px\">Item 1</div>\n\t\t\t<div style=\"height:50px\">Item 2</div>\n\t\t</div>\n\n\t\t<h6>Center</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-ai-center\"&gt;\n\t&lt;div class=\"p-mr-2\" style=\"height:100px\"&gt;Item 1&lt;/div&gt;\n\t&lt;div style=\"height:50px\"&gt;Item 2&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\t\t<div class=\"p-d-flex p-ai-center\">\n\t\t\t<div class=\"p-mr-2\" style=\"height:100px\">Item 1</div>\n\t\t\t<div style=\"height:50px\">Item 2</div>\n\t\t</div>\n\n\t\t<h6>Align Items Classes</h6>\n\t\t<ul>\n\t\t\t<li>p-ai-start</li>\n\t\t\t<li>p-ai-end</li>\n\t\t\t<li>p-ai-center</li>\n\t\t\t<li>p-ai-baseline</li>\n\t\t\t<li>p-ai-strech</li>\n\t\t\t<li>p-ai-sm-start</li>\n\t\t\t<li>p-ai-sm-end</li>\n\t\t\t<li>p-ai-sm-center</li>\n\t\t\t<li>p-ai-sm-baseline</li>\n\t\t\t<li>p-ai-sm-strech</li>\n\t\t\t<li>p-ai-md-start</li>\n\t\t\t<li>p-ai-md-end</li>\n\t\t\t<li>p-ai-md-center</li>\n\t\t\t<li>p-ai-md-baseline</li>\n\t\t\t<li>p-ai-md-strech</li>\n\t\t\t<li>p-ai-lg-start</li>\n\t\t\t<li>p-ai-lg-end</li>\n\t\t\t<li>p-ai-lg-center</li>\n\t\t\t<li>p-ai-lg-baseline</li>\n\t\t\t<li>p-ai-lg-strech</li>\n\t\t\t<li>p-ai-xl-start</li>\n\t\t\t<li>p-ai-xl-end</li>\n\t\t\t<li>p-ai-xl-center</li>\n\t\t\t<li>p-ai-xl-baseline</li>\n\t\t\t<li>p-ai-xl-strech</li>\n\t\t</ul>\n\n\t\t<h5>Align Self</h5>\n\t\t<p>Align self configuration is the alignment along the cross axis for a particular element and defined using the <i>p-as-&#123;value&#125;</i> format with responsive alternatives. Value field accepts\n\t\t\tthe options below.</p>\n\t\t<ul>\n\t\t\t<li>start</li>\n\t\t\t<li>end</li>\n\t\t\t<li>center</li>\n\t\t\t<li>baseline</li>\n\t\t\t<li>stretch (default)</li>\n\t\t</ul>\n\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex\" style=\"height: 150px;\"&gt;\n\t&lt;div class=\"p-mr-2 p-as-start\"&gt;Start&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-as-center\"&gt;Center&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-as-end\"&gt;End&lt;/div&gt;\n\t&lt;div class=\"p-mr-2 p-as-stretch\"&gt;Stretch&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex\" style=\"height: 150px;\">\n\t\t\t<div class=\"p-mr-2 p-as-start\">Start</div>\n\t\t\t<div class=\"p-mr-2 p-as-center\">Center</div>\n\t\t\t<div class=\"p-mr-2 p-as-end\">End</div>\n\t\t\t<div class=\"p-mr-2 p-as-stretch\">Stretch</div>\n\t\t</div>\n\n\t\t<h6>Align Items Classes</h6>\n\t\t<ul>\n\t\t\t<li>p-as-start</li>\n\t\t\t<li>p-as-end</li>\n\t\t\t<li>p-as-center</li>\n\t\t\t<li>p-as-baseline</li>\n\t\t\t<li>p-as-strech</li>\n\t\t\t<li>p-as-sm-start</li>\n\t\t\t<li>p-as-sm-end</li>\n\t\t\t<li>p-as-sm-center</li>\n\t\t\t<li>p-as-sm-baseline</li>\n\t\t\t<li>p-as-sm-strech</li>\n\t\t\t<li>p-as-md-start</li>\n\t\t\t<li>p-as-md-end</li>\n\t\t\t<li>p-as-md-center</li>\n\t\t\t<li>p-as-md-baseline</li>\n\t\t\t<li>p-as-md-strech</li>\n\t\t\t<li>p-as-lg-start</li>\n\t\t\t<li>p-as-lg-end</li>\n\t\t\t<li>p-as-lg-center</li>\n\t\t\t<li>p-as-lg-baseline</li>\n\t\t\t<li>p-as-lg-strech</li>\n\t\t\t<li>p-as-xl-start</li>\n\t\t\t<li>p-as-xl-end</li>\n\t\t\t<li>p-as-xl-center</li>\n\t\t\t<li>p-as-xl-baseline</li>\n\t\t\t<li>p-as-xl-strech</li>\n\t\t</ul>\n\n\t\t<h5>Align Content</h5>\n\t\t<p>Align content is the alignment along the cross axis and defined using the <i>p-ac-&#123;value&#125;</i> format with responsive alternatives. Value field accepts\n\t\t\tthe options below.</p>\n\t\t<ul>\n\t\t\t<li>start</li>\n\t\t\t<li>end</li>\n\t\t\t<li>center</li>\n\t\t\t<li>around</li>\n\t\t\t<li>stretch</li>\n\t\t\t<li>between</li>\n\t\t</ul>\n\n\t\t<h6>Align Content Classes</h6>\n\t\t<ul>\n\t\t\t<li>p-ac-start</li>\n\t\t\t<li>p-ac-end</li>\n\t\t\t<li>p-ac-center</li>\n\t\t\t<li>p-ac-around</li>\n\t\t\t<li>p-ac-stretch</li>\n\t\t\t<li>p-ac-between</li>\n\t\t\t<li>p-ac-sm-start</li>\n\t\t\t<li>p-ac-sm-end</li>\n\t\t\t<li>p-ac-sm-center</li>\n\t\t\t<li>p-ac-sm-around</li>\n\t\t\t<li>p-ac-sm-stretch</li>\n\t\t\t<li>p-ac-sm-between</li>\n\t\t\t<li>p-ac-md-start</li>\n\t\t\t<li>p-ac-md-end</li>\n\t\t\t<li>p-ac-md-center</li>\n\t\t\t<li>p-ac-md-around</li>\n\t\t\t<li>p-ac-md-stretch</li>\n\t\t\t<li>p-ac-md-between</li>\n\t\t\t<li>p-ac-lg-start</li>\n\t\t\t<li>p-ac-lg-end</li>\n\t\t\t<li>p-ac-lg-center</li>\n\t\t\t<li>p-ac-lg-around</li>\n\t\t\t<li>p-ac-lg-stretch</li>\n\t\t\t<li>p-ac-lg-between</li>\n\t\t\t<li>p-ac-xl-start</li>\n\t\t\t<li>p-ac-xl-end</li>\n\t\t\t<li>p-ac-xl-center</li>\n\t\t\t<li>p-ac-xl-around</li>\n\t\t\t<li>p-ac-xl-stretch</li>\n\t\t\t<li>p-ac-xl-between</li>\n\t\t</ul>\n\n\t\t<h5>Margin with FlexBox</h5>\n\t\t<p>When combined with <a [routerLink]=\"['/primeflex/spacing']\">spacing utilities</a>, flexbox offers endless possibilities.</p>\n\t\t<h6>Horizontal Spacing</h6>\n\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-p-3 card\"&gt;\n\t&lt;button pButton pRipple type=\"button\" icon=\"pi pi-check\" class=\"p-mr-2\"&gt;&lt;/button&gt;\n\t&lt;button pButton pRipple type=\"button\" icon=\"pi pi-trash\" class=\"p-button-danger\"&gt;&lt;/button&gt;\n\t&lt;button pButton pRipple  type=\"button\" icon=\"pi pi-search\" class=\"p-ml-auto p-button-help\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex p-p-3 card\">\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-check\" class=\"p-mr-2\"></button>\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-trash\" class=\"p-button-danger\"></button>\n\t\t\t<button pButton pRipple  type=\"button\" icon=\"pi pi-search\" class=\"p-ml-auto p-button-help\"></button>\n\t\t</div>\n\n\t\t<h6>Vertical Spacing</h6>\n<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\n&lt;div class=\"p-d-flex p-flex-column\" style=\"height:150px\"&gt;\n\t&lt;div&gt;Item 1&lt;/div&gt;\n\t&lt;div class=\"p-mt-auto\"&gt;Item 2&lt;/div&gt;\n&lt;/div&gt;\n</app-code>\n\n\t\t<div class=\"p-d-flex p-flex-column\" style=\"height:150px\">\n\t\t\t<div>Item 1</div>\n\t\t\t<div class=\"p-mt-auto\">Item 2</div>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "anCR":
    /*!**********************************************!*\
      !*** ./src/app/pages/app.error.component.ts ***!
      \**********************************************/

    /*! exports provided: AppErrorComponent */

    /***/
    function anCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppErrorComponent", function () {
        return AppErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.error.component.html */
      "LwCC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppErrorComponent = function AppErrorComponent() {
        _classCallCheck(this, AppErrorComponent);
      };

      AppErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-error',
        template: _raw_loader_app_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppErrorComponent);
      /***/
    },

    /***/
    "axq9":
    /*!*************************************!*\
      !*** ./src/app/app.menu.service.ts ***!
      \*************************************/

    /*! exports provided: MenuService */

    /***/
    function axq9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuService", function () {
        return MenuService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var MenuService = /*#__PURE__*/function () {
        function MenuService() {
          _classCallCheck(this, MenuService);

          this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.menuSource$ = this.menuSource.asObservable();
          this.resetSource$ = this.resetSource.asObservable();
        }

        _createClass(MenuService, [{
          key: "onMenuStateChange",
          value: function onMenuStateChange(key) {
            this.menuSource.next(key);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.resetSource.next();
          }
        }]);

        return MenuService;
      }();

      MenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MenuService);
      /***/
    },

    /***/
    "buzx":
    /*!*******************************************************************!*\
      !*** ./src/app/paginas/accesibilidad/accesibilidad.component.css ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function buzx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc2liaWxpZGFkLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "cKra":
    /*!*******************************************************!*\
      !*** ./src/app/paginas/general/general.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function cKra(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "crCP":
    /*!*****************************************************************!*\
      !*** ./src/app/paginas/usoeducativo/usoeducativo.component.css ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function crCP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c29lZHVjYXRpdm8uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "deSt":
    /*!************************************************!*\
      !*** ./src/app/utilities/flexbox.component.ts ***!
      \************************************************/

    /*! exports provided: FlexboxComponent */

    /***/
    function deSt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexboxComponent", function () {
        return FlexboxComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_flexbox_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./flexbox.component.html */
      "aWBc");
      /* harmony import */


      var _flexbox_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./flexbox.scss */
      "4Yau");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var FlexboxComponent = function FlexboxComponent(breadcrumbService) {
        _classCallCheck(this, FlexboxComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'FlexBox',
          routerLink: ['/utilities/flexbox']
        }]);
      };

      FlexboxComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }];
      };

      FlexboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_flexbox_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_flexbox_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FlexboxComponent);
      /***/
    },

    /***/
    "dyE0":
    /*!*********************************************!*\
      !*** ./src/app/servicios/lompad.service.ts ***!
      \*********************************************/

    /*! exports provided: LompadService */

    /***/
    function dyE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LompadService", function () {
        return LompadService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api.service */
      "57S9");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");

      var LompadService = /*#__PURE__*/function () {
        function LompadService(http, api_service, cookieService // private toas:MessageService    
        ) {
          _classCallCheck(this, LompadService);

          this.http = http;
          this.api_service = api_service;
          this.cookieService = cookieService;
          this.objPricipal$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.objPrincipalXML$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.hash$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.perfil$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.precarga();
        }

        _createClass(LompadService, [{
          key: "precarga",
          value: function precarga() {
            // this.datosGenerales=JSON.parse(localStorage.getItem("perfil_hash"));//recuperacion DAtos
            // localStorage.removeItem('perfil_hash');
            // this.cookieService.deleteAll();
            this.objPricipal = JSON.parse(localStorage.getItem('objPrincipal'));

            if (this.objPricipal != undefined) {
              //PILAS       
              this.perfil = this.cookieService.get('perfil');
              this.hash = this.cookieService.get('hash');
              console.log("perfl: ", this.perfil);
              console.log("hash; ", this.hash); // ESTO NO HACE NADA AL MOMENTO DE RECARGAR LA PAGINA
              // this.objPricipal$.emit(this.objPricipal);
              // this.objPrincipalXML$.emit(this.api_service.api_DownloadFile(this.hash));              

              console.log("DATA: TYPE: ", this.objPricipal);
            }
          } // PILAS CON EL FORMATO

        }, {
          key: "precargaSimple",
          value: function precargaSimple(response) {
            this.cookieService.set('perfil', response['PERFIL']);
            this.cookieService.set('hash', response['HASHED_VALUE']);
            this.perfil = this.cookieService.get('perfil');
            this.hash = this.cookieService.get('hash');
            console.log("perfl: ", this.perfil);
            console.log("hash; ", this.hash);
            this.getobject();
            this.downloadXML_API(this.hash);
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            return this.perfil;
          }
        }, {
          key: "getHash",
          value: function getHash() {
            return this.hash;
          } // setObjson(param:any){  
          //   this.objPricipal=param;
          //   this.objPricipal$.emit(param);
          //   this.objPrincipalXML$.emit(this.api_service.api_DownloadFile(this.hash));                      
          // }

        }, {
          key: "mapReload",
          value: function mapReload(param) {
            this.objPricipal = param;
            localStorage.setItem('objPrincipal', JSON.stringify(this.objPricipal));
            this.objPricipal$.emit(this.objPricipal);
            this.objPrincipalXML$.emit(this.api_service.api_DownloadFile(this.hash));
            this.perfil$.emit(this.perfil);
            this.hash$.emit(this.hash);
            console.log("DATA: TYPE: ", typeof this.objPricipal);
          }
        }, {
          key: "getobject",
          value: function getobject() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var response, obj;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return fetch("http://localhost:8000/private/read_file/?hashed_code=" + this.hash + "&profile=" + this.perfil, {
                        method: 'GET',
                        redirect: 'follow'
                      });

                    case 2:
                      response = _context2.sent;

                      if (!response.ok) {
                        _context2.next = 10;
                        break;
                      }

                      _context2.next = 6;
                      return response.json();

                    case 6:
                      obj = _context2.sent;
                      this.mapReload(obj);
                      _context2.next = 11;
                      break;

                    case 10:
                      console.log("Error LOMPAD linea 101");

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getObject1",
          value: function getObject1() {
            return this.http.get("http://localhost:8000/private/read_file/?hashed_code=" + this.hash + "&profile=" + this.perfil);
          }
        }, {
          key: "setArchivo",
          value: function setArchivo(data) {
            var _this18 = this;

            console.log("Subiendo archivo...");
            this.http.post("http://localhost:8000/uploadfile", data).subscribe(function (response) {
              return _this18.precargaSimple(response);
            }, function (error) {
              return console.log(error);
            });
          } // revLocal(){
          //   return this.datosGenerales;
          // }
          // AREA DE ACTUALIZACION

        }, {
          key: "saveObjectLompad",
          value: function saveObjectLompad(obj, hoja) {
            localStorage.setItem('objPrincipal', JSON.stringify(this.objPricipal));
            console.log("Guardando: => ", hoja);
            var data = JSON.stringify(obj); //.toLocaleLowerCase(); 

            console.log("TIPO DE DATOS ", typeof data); // var pedro=JSON.parse(JSON.stringify(this.objPricipal).replace(/\s(?=\w+":)/g, ""));  
            // var data=JSON.parse(JSON.stringify(obj).replace(/\s(?=\w+":)/g, ""));     
            // data=JSON.stringify(data).toLocaleLowerCase(); 

            console.log("Enviando.... ", data, "Hoja: ", hoja); // this.precargaSimple();

            this.api_service.send_ObjectApi(data, this.hash, hoja); //enviar solo el objeto y el has a actualizar                                    

            this.downloadXML_API(this.hash); //Actualiza el objecto cada vez que se guarde los cambiaos realiados
          } //AREA DE DESCARGA

        }, {
          key: "downloadJSON",
          value: function downloadJSON() {
            var pedro = JSON.parse(JSON.stringify(this.objPricipal).replace(/\s(?=\w+":)/g, "")); // const file=new Blob([pedro],{type:'application/json'});
            // // const file=new Blob([JSON.stringify(this.objPricipal, null, 2)], {type: 'application/json'});    
            // const url=window.URL.createObjectURL(file);
            // new Blob([pedro], {type: 'application/json'});

            try {
              // var FileSaver = require('file-saver');  
              var blob = new Blob([JSON.stringify(pedro, null, 2)], {
                type: 'application/json'
              });
              Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, "ArchivoExportado.json");
            } catch (error) {
              console.log("Error al Descargar JSON: ======>", error);
            }
          }
        }, {
          key: "downloadXML",
          value: function downloadXML() {
            //  console.log("TIpo de dato:  ",typeof(this.objPrincipalXML));
            try {
              // var FileSaver = require('file-saver');  
              var blob = new Blob([this.objPrincipalXML], {
                type: 'application/xml'
              });
              Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, "ArchivoExportado.xml");
            } catch (error) {
              console.log("Error al Descargar XML: ======>", error);
            }
          }
        }, {
          key: "downloadXML_API",
          value: function downloadXML_API(hash_param) {
            var _this19 = this;

            fetch("http://localhost:8000/private/download/?hashed_code=" + hash_param, {
              // fetch("http://localhost:8000/private/download/?hashed_code=ArchivoExportado_-6482018054697832733",{
              method: 'GET',
              redirect: 'follow'
            }).then(function (response) {
              return response.text();
            }).then(function (result) {
              _this19.objPrincipalXML = result;

              _this19.objPrincipalXML$.emit(_this19.objPrincipalXML);
            })["catch"](function (error) {
              return console.log('error', error);
            });
          }
        }, {
          key: "exitApp",
          value: function exitApp() {
            console.log("saLIENDO APP#################33");
          }
        }]);

        return LompadService;
      }();

      LompadService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
        }];
      };

      LompadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LompadService);
      /***/
    },

    /***/
    "e8/H":
    /*!***********************************************************!*\
      !*** ./src/app/paginas/livecicle/livecicle.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function e8H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZlY2ljbGUuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "eCx7":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/panelsdemo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function eCx7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card toolbar-demo\">\n            <h5>Toolbar</h5>\n            <p-toolbar>\n                <div class=\"p-toolbar-group-left\">\n                    <button pButton type=\"button\" label=\"New\" icon=\"pi pi-plus\"></button>\n                    <button pButton type=\"button\" label=\"Update\" class=\"p-button-secondary\" icon=\"pi pi-refresh\"></button>\n\n                    <i class=\"pi pi-bars p-toolbar-separator\"></i>\n\n                    <button pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-check\"></button>\n                    <button pButton type=\"button\" class=\"p-button-help\" icon=\"pi pi-print\"></button>\n                    <button pButton type=\"button\" class=\"p-button-danger\" icon=\"pi pi-trash\"></button>\n                </div>\n\n                <div class=\"p-toolbar-group-right\">\n                    <p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\"></p-splitButton>\n                </div>\n            </p-toolbar>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>AccordionPanel</h5>\n            <p-accordion>\n                <p-accordionTab header=\"Header I\" [selected]=\"true\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </p-accordionTab>\n                <p-accordionTab header=\"Header II\">\n                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\n                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\n                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n                    Consectetur, adipisci velit, sed quia non numquam eius modi.\n                </p-accordionTab>\n                <p-accordionTab header=\"Header III\">\n                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores\n                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit\n                    quo minus.\n                </p-accordionTab>\n            </p-accordion>\n        </div>\n\n        <div class=\"card\">\n            <h5>TabView</h5>\n            <p-tabView orientation=\"left\">\n                <p-tabPanel header=\"Header I\" leftIcon=\"pi pi-check\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </p-tabPanel>\n                <p-tabPanel header=\"Header II\" leftIcon=\"pi pi-user\">\n                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\n                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\n                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n                    Consectetur, adipisci velit, sed quia non numquam eius modi.\n                </p-tabPanel>\n                <p-tabPanel header=\"Header III\" leftIcon=\"pi pi-mobile\">\n                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores\n                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit\n                    quo minus.\n                </p-tabPanel>\n            </p-tabView>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>Panel</h5>\n            <p-panel header=\"Header\" [toggleable]=\"true\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p-panel>\n        </div>\n\n        <div class=\"card\">\n            <h5>Fieldset</h5>\n            <p-fieldset legend=\"Toggleable\" toggleable=\"true\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p-fieldset>\n        </div>\n\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5>Card</h5>\n                <p-menu #menu [popup]=\"true\" [model]=\"cardMenu\"></p-menu>\n                <button pButton type=\"button\" icon=\"pi pi-plus\" class=\"p-button-rounded p-button-plain p-button-text\" (click)=\"menu.toggle($event)\"></button>\n            </div>\n\n            <p class=\"card-subtitle\">Subtitle</p>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Divider</h5>\n            <div class=\"p-grid\">\n                <div class=\"p-col-5 p-d-flex p-ai-center p-jc-center\">\n                    <div class=\"p-fluid\">\n                        <div class=\"p-field\">\n                            <label for=\"username\">Username</label>\n                            <input pInputText id=\"username\" type=\"text\"/>\n                        </div>\n                        <div class=\"p-field\">\n                            <label for=\"password\">Password</label>\n                            <input pInputText id=\"password\" type=\"password\"/>\n                        </div>\n                        <p-button label=\"Login\"></p-button>\n                    </div>\n                </div>\n                <div class=\"p-col-1\">\n                    <p-divider layout=\"vertical\">\n                        <b>OR</b>\n                    </p-divider>\n                </div>\n                <div class=\"p-col-5 p-ai-center p-jc-center\">\n                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n\n                    <p-divider layout=\"horizontal\" align=\"center\">\n                        <span class=\"p-tag\">Badge</span>\n                    </p-divider>\n\n                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\n                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est\n                        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n\n                    <p-divider align=\"right\">\n                        <p-button label=\"Button\" icon=\"pi pi-search\" styleClass=\"p-button-outlined\"></p-button>\n                    </p-divider>\n\n                    <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et\n                        voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur\n                        a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis\n                        doloribus asperiores repellat.\n                        Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien.\n                        Morbi dapibus luctus odio.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Splitter</h5>\n            <p-splitter [style]=\"{'height': '300px'}\" [panelSizes]=\"[40,60]\" [minSizes]=\"[10,0]\" styleClass=\"p-mb-5\">\n                <ng-template>\n                    <div class=\"p-col p-mt-3\" style=\"overflow: auto\">\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n                        id est laborum.\n                    </div>\n                </ng-template>\n                <ng-template>\n                    <div style=\"overflow: auto\">\n                        <p-splitter layout=\"vertical\" [panelSizes]=\"[15,85]\">\n                            <ng-template>\n                                <div style=\"flex-grow: 1;\" class=\"p-col p-mt-3\" style=\"overflow: auto\">\n                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n                                    doloremque\n                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\n                                    voluptas\n                                    sit\n                                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n                                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius\n                                    modi.\n                                </div>\n                            </ng-template>\n                            <ng-template>\n                                <div style=\"flex-grow: 1;\" class=\"p-col p-mt-3\" style=\"overflow: auto\">\n                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n                                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias\n                                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui\n                                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem\n                                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est\n                                    eligendi optio cumque nihil impedit quo minus.\n                                </div>\n                            </ng-template>\n                        </p-splitter>\n                    </div>\n                </ng-template>\n            </p-splitter>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "eDIy":
    /*!*******************************************************************!*\
      !*** ./src/app/paginas/clasificacion/clasificacion.component.css ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function eDIy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFzaWZpY2FjaW9uLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "eSy0":
    /*!***********************************************!*\
      !*** ./src/app/demo/view/floatlabeldemo.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function eSy0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep .floatlabel-demo .p-field {\n  margin-top: 2rem;\n}\n:host ::ng-deep .floatlabel-demo .p-multiselect-panel .p-multiselect-header {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmbG9hdGxhYmVsZGVtby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUjtBQUdJO0VBQ0ksaUJBQUE7QUFEUiIsImZpbGUiOiJmbG9hdGxhYmVsZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5mbG9hdGxhYmVsLWRlbW8ge1xuICAgIC5wLWZpZWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAucC1tdWx0aXNlbGVjdC1wYW5lbCAucC1tdWx0aXNlbGVjdC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "fFyx":
    /*!*************************************************!*\
      !*** ./src/app/pages/app.calendar.component.ts ***!
      \*************************************************/

    /*! exports provided: AppCalendarComponent */

    /***/
    function fFyx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCalendarComponent", function () {
        return AppCalendarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.calendar.component.html */
      "ZETH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../demo/service/eventservice */
      "fgiE");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fullcalendar/daygrid */
      "PN1e");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fullcalendar/timegrid */
      "PjKf");
      /* harmony import */


      var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fullcalendar/interaction */
      "ogxq");
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var AppCalendarComponent = /*#__PURE__*/function () {
        function AppCalendarComponent(eventService, breadcrumbService) {
          _classCallCheck(this, AppCalendarComponent);

          this.eventService = eventService;
          this.breadcrumbService = breadcrumbService;
          this.clickedEvent = null;
          this.breadcrumbService.setItems([{
            label: 'Pages'
          }, {
            label: 'Calendar',
            routerLink: ['/pages/calendar']
          }]);
        }

        _createClass(AppCalendarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.eventService.getEvents().then(function (events) {
              _this20.events = events;
            });
            this.changedEvent = {
              title: '',
              start: null,
              end: '',
              allDay: null
            };
            this.options = {
              plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6___default.a],
              defaultDate: '2017-02-01',
              header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              },
              editable: true,
              eventClick: function eventClick(e) {
                _this20.eventDialog = true;
                _this20.clickedEvent = e.event;
                _this20.changedEvent.title = _this20.clickedEvent.title;
                _this20.changedEvent.start = _this20.clickedEvent.start;
                _this20.changedEvent.end = _this20.clickedEvent.end;
              }
            };
          }
        }, {
          key: "save",
          value: function save() {
            this.eventDialog = false;
            this.clickedEvent.setProp('title', this.changedEvent.title);
            this.clickedEvent.setStart(this.changedEvent.start);
            this.clickedEvent.setEnd(this.changedEvent.end);
            this.clickedEvent.setAllDay(this.changedEvent.allDay);
            this.changedEvent = {
              title: '',
              start: null,
              end: '',
              allDay: null
            };
          }
        }, {
          key: "reset",
          value: function reset() {
            this.changedEvent.title = this.clickedEvent.title;
            this.changedEvent.start = this.clickedEvent.start;
            this.changedEvent.end = this.clickedEvent.end;
          }
        }]);

        return AppCalendarComponent;
      }();

      AppCalendarComponent.ctorParameters = function () {
        return [{
          type: _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_3__["EventService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbService"]
        }];
      };

      AppCalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_app_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        @media screen and (max-width: 960px) {\n            :host ::ng-deep .fc-header-toolbar {\n                display: flex;\n                flex-wrap: wrap;\n            }\n        }\n    "]
      })], AppCalendarComponent);
      /***/
    },

    /***/
    "fbbu":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/miscdemo.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function fbbu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid misc-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>ProgressBar</h5>\n            <div class=\"p-grid\">\n                <div class=\"p-col\">\n                    <p-progressBar [value]=\"value\" [showValue]=\"false\"></p-progressBar>\n                </div>\n                <div class=\"p-col\">\n                    <p-progressBar [value]=\"50\" [showValue]=\"false\"></p-progressBar>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h4>Badge</h4>\n            <h5>Numbers</h5>\n            <div class=\"badges\">\n                <p-badge [value]=\"2\" styleClass=\"p-mr-2\"></p-badge>\n                <p-badge [value]=\"8\" severity=\"success\" styleClass=\"p-mr-2\"></p-badge>\n                <p-badge [value]=\"4\" severity=\"info\" styleClass=\"p-mr-2\"></p-badge>\n                <p-badge [value]=\"12\" severity=\"warning\" styleClass=\"p-mr-2\"></p-badge>\n                <p-badge [value]=\"3\" severity=\"danger\"></p-badge>\n            </div>\n\n            <h5>Positioned Badge</h5>\n            <i class=\"pi pi-bell p-mr-4 p-text-secondary\" pBadge style=\"font-size: 2rem\" value=\"2\"></i>\n            <i class=\"pi pi-calendar p-mr-4 p-text-secondary\" pBadge style=\"font-size: 2rem\" [value]=\"'10+'\" severity=\"danger\"></i>\n            <i class=\"pi pi-envelope p-text-secondary\" pBadge style=\"font-size: 2rem\" severity=\"danger\"></i>\n\n\n            <h5>Inline Button Badge</h5>\n            <p-button label=\"Emails\" badge=\"8\" styleClass=\"p-mr-2\"></p-button>\n            <p-button label=\"Messages\" icon=\"pi pi-users\" styleClass=\"p-button-warning\" badge=\"8\" badgeClass=\"p-badge-danger\"></p-button>\n\n            <h5>Sizes</h5>\n            <div class=\"badges\">\n                <p-badge [value]=\"2\" styleClass=\"p-mr-2\"></p-badge>\n                <p-badge [value]=\"4\" size=\"large\" severity=\"warning\" styleClass=\"p-mr-2\"></p-badge>\n                <p-badge [value]=\"6\" size=\"xlarge\" severity=\"success\" styleClass=\"p-mr-2\"></p-badge>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h4>Avatar</h4>\n            <h5>Avatar Group</h5>\n            <p-avatarGroup styleClass=\"p-mb-3\">\n                <p-avatar image=\"assets/demo/images/avatar/amyelsner.png\" size=\"large\" shape=\"circle\"></p-avatar>\n                <p-avatar image=\"assets/demo/images/avatar/asiyajavayant.png\" size=\"large\" shape=\"circle\"></p-avatar>\n                <p-avatar image=\"assets/demo/images/avatar/onyamalimba.png\" size=\"large\" shape=\"circle\"></p-avatar>\n                <p-avatar image=\"assets/demo/images/avatar/ionibowcher.png\" size=\"large\" shape=\"circle\"></p-avatar>\n                <p-avatar image=\"assets/demo/images/avatar/xuxuefeng.png\" size=\"large\"shape=\"circle\"></p-avatar>\n                <p-avatar label=\"+2\" shape=\"circle\" size=\"large\" [style]=\"{'background-color':'#9c27b0', 'color': '#ffffff'}\"></p-avatar>\n            </p-avatarGroup>\n\n            <h5>Label - Circle</h5>\n            <p-avatar label=\"P\" styleClass=\"p-mr-2\" size=\"xlarge\" shape=\"circle\"></p-avatar>\n            <p-avatar label=\"V\" styleClass=\"p-mr-2\" size=\"large\" [style]=\"{'background-color':'#2196F3', 'color': '#ffffff'}\" shape=\"circle\"></p-avatar>\n            <p-avatar label=\"U\" styleClass=\"p-mr-2\" [style]=\"{'background-color': '#9c27b0', 'color': '#ffffff'}\" shape=\"circle\"></p-avatar>\n\n            <h5>Icon - Badge</h5>\n            <p-avatar icon=\"pi pi-user\" pBadge value=\"4\" severity=\"success\" styleClass=\"p-mr-2\" size=\"xlarge\"></p-avatar>\n        </div>\n\n        <div class=\"card\">\n            <h4>ScrollTop</h4>\n            <p-scrollPanel [style]=\"{width: '250px', height: '200px'}\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                    Vitae et leo duis ut diam.\n                    Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.\n                    Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.\n                    Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.\n                    Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.\n                    Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.\n                    Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.\n                    Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.\n                    Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.\n                    Mattis aliquam faucibus purus in massa tempor nec.\n                </p>\n                <p-scrollTop target=\"parent\" styleClass=\"custom-scrolltop\" [threshold]=\"100\" icon=\"pi pi-arrow-up\"></p-scrollTop>\n            </p-scrollPanel>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h4>Tag</h4>\n            <h5>Tags</h5>\n            <p-tag styleClass=\"p-mr-2\" value=\"Primary\"></p-tag>\n            <p-tag styleClass=\"p-mr-2\" severity=\"success\" value=\"Success\"></p-tag>\n            <p-tag styleClass=\"p-mr-2\" severity=\"info\" value=\"Info\"></p-tag>\n            <p-tag styleClass=\"p-mr-2\" severity=\"warning\" value=\"Warning\"></p-tag>\n            <p-tag severity=\"danger\" value=\"Danger\"></p-tag>\n\n            <h5>Pills</h5>\n            <p-tag styleClass=\"p-mr-2\" value=\"Primary\" [rounded]=\"true\"></p-tag>\n            <p-tag styleClass=\"p-mr-2\" severity=\"success\" value=\"Success\" [rounded]=\"true\"></p-tag>\n            <p-tag styleClass=\"p-mr-2\" severity=\"info\" value=\"Info\" [rounded]=\"true\"></p-tag>\n            <p-tag styleClass=\"p-mr-2\" severity=\"warning\" value=\"Warning\" [rounded]=\"true\"></p-tag>\n            <p-tag severity=\"danger\" value=\"Danger\" [rounded]=\"true\"></p-tag>\n\n            <h5>Icons</h5>\n            <p-tag styleClass=\"p-mr-2\" icon=\"pi pi-user\" value=\"Primary\"></p-tag>\n            <p-tag styleClass=\"p-mr-2\" icon=\"pi pi-check\" severity=\"success\" value=\"Success\"></p-tag>\n            <p-tag styleClass=\"p-mr-2\" icon=\"pi pi-info-circle\" severity=\"info\" value=\"Info\"></p-tag>\n            <p-tag styleClass=\"p-mr-2\" con=\"pi pi-exclamation-triangle\" severity=\"warning\" value=\"Warning\"></p-tag>\n            <p-tag icon=\"pi pi-times\" severity=\"danger\" value=\"Danger\"></p-tag>\n        </div>\n\n        <div class=\"card\">\n            <h4>Chip</h4>\n            <h5>Basic</h5>\n            <div class=\"p-d-flex p-ai-center\">\n                <p-chip label=\"Action\" styleClass=\"p-mr-2\"></p-chip>\n                <p-chip label=\"Comedy\" styleClass=\"p-mr-2\"></p-chip>\n                <p-chip label=\"Mystery\" styleClass=\"p-mr-2\"></p-chip>\n                <p-chip label=\"Thriller\" [removable]=\"true\"></p-chip>\n            </div>\n\n            <h5>Icon</h5>\n            <div class=\"p-d-flex p-ai-center\">\n                <p-chip label=\"Apple\" icon=\"pi pi-apple\" styleClass=\"p-mr-2\"></p-chip>\n                <p-chip label=\"Facebook\" icon=\"pi pi-facebook\" styleClass=\"p-mr-2\"></p-chip>\n                <p-chip label=\"Google\" icon=\"pi pi-google\" styleClass=\"p-mr-2\"></p-chip>\n                <p-chip label=\"Microsoft\" icon=\"pi pi-microsoft\" [removable]=\"true\"></p-chip>\n            </div>\n\n            <h5>Image</h5>\n            <div class=\"p-d-flex p-ai-center\">\n                <p-chip label=\"Amy Elsner\" image=\"assets/demo/images/avatar/amyelsner.png\" styleClass=\"p-mr-2\"></p-chip>\n                <p-chip label=\"Asiya Javayant\" image=\"assets/demo/images/avatar/asiyajavayant.png\" styleClass=\"p-mr-2\"></p-chip>\n                <p-chip label=\"Onyama Limba\" image=\"assets/demo/images/avatar/onyamalimba.png\" styleClass=\"p-mr-2\"></p-chip>\n                <p-chip label=\"Xuxue Feng\" image=\"assets/demo/images/avatar/xuxuefeng.png\" [removable]=\"true\"></p-chip>\n            </div>\n\n            <h5>Styling</h5>\n            <div class=\"p-d-flex p-ai-center\">\n                <p-chip label=\"Action\" styleClass=\"p-mr-2 custom-chip\"></p-chip>\n                <p-chip label=\"Comedy\" styleClass=\"p-mr-2 custom-chip\"></p-chip>\n                <p-chip label=\"Onyama Limba\" image=\"assets/demo/images/avatar/onyamalimba.png\" styleClass=\"p-mr-2 custom-chip\"></p-chip>\n                <p-chip label=\"Xuxue Feng\" image=\"assets/demo/images/avatar/xuxuefeng.png\" [removable]=\"true\" styleClass=\"custom-chip\"></p-chip>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h4>Skeleton</h4>\n            <div class=\"custom-skeleton p-p-4\">\n                <div class=\"p-d-flex p-mb-3\">\n                    <p-skeleton shape=\"circle\" size=\"4rem\" styleClass=\"p-mr-2\"></p-skeleton>\n                    <div>\n                        <p-skeleton width=\"10rem\" styleClass=\"p-mb-2\"></p-skeleton>\n                        <p-skeleton width=\"5rem\" styleClass=\"p-mb-2\"></p-skeleton>\n                        <p-skeleton height=\".5rem\"></p-skeleton>\n                    </div>\n                </div>\n                <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n                <div class=\"p-d-flex p-jc-between p-mt-3\">\n                    <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n                    <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "ffRT":
    /*!*****************************************!*\
      !*** ./src/app/app.footer.component.ts ***!
      \*****************************************/

    /*! exports provided: AppFooterComponent */

    /***/
    function ffRT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function () {
        return AppFooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppFooterComponent = function AppFooterComponent() {
        _classCallCheck(this, AppFooterComponent);
      };

      AppFooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: "\n        <div class=\"layout-footer\">\n\t\t\t\t\t\t\n\n\t\t<!-- <div class=\"p-mb-3 p-text-left\">Left</div> -->\n\t\t\t<div class=\"p-mb-3 p-text-left\" >\n\t\t\t\t<img src=\"assets/layout/images/logoedutech.svg\" alt=\"assets/layout/images/\" style=\"height: 50px; width:50px\" />\n\t\t\t\t<div >\n\t\t\t\t\t<h1 style=\"font-size: 18px;\n                 \tcolor: $textColor;\n                 \tfont-weight: normal;\n    \t       \t\tmargin: 0;\">LOMpad Schema</h1>\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t<div class=\"p-mb-3 p-text-center\">\n\t\t\t\t<a href=\"https://catedraunescoinclusion.org/\">\n\t\t\t\t\t<img src=\"assets/layout/images/unitwin_ec_salesiana_sp.png\" style=\"height: 80px; width:200px\" >\t\t\t\t\t\n\t\t\t\t</a>\t\t\t\t\n\t\t\t\t<div class=\"text\">\n\t\t\t\t<span>\xA9 2021 {{\"Todos los derechos reservados\" | translate }} | Developed By EduTech</span>\t\n\t\t\t\t<br>\t\t\t\t\t\t\n\t\t\t\t<span>{{\"T\xE9rminos y condiciones\" | translate }}</span>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\t<!-- <div class=\"p-mb-3 p-text-left\">Left</div>\n\t\t\t\t<div class=\"p-mb-3 p-text-center\">Center</div>\n\t\t\t\t<div class=\"p-text-right\">Right</div> -->\n\n\t\t\t\t<!-- <div class=\"p-text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t</div> -->\n\n\t\t\t\t<div class=\"p-mb-3 p-text-rigth\">\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<img src=\"assets/layout/images/cofinanciado_derecha.png\" style=\"height: 60px; width:235px\"  />\t\t\t\t\t\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\n        </div>\n    "
      })], AppFooterComponent);
      /***/
    },

    /***/
    "fgiE":
    /*!**********************************************!*\
      !*** ./src/app/demo/service/eventservice.ts ***!
      \**********************************************/

    /*! exports provided: EventService */

    /***/
    function fgiE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EventService = /*#__PURE__*/function () {
        function EventService(http) {
          _classCallCheck(this, EventService);

          this.http = http;
        }

        _createClass(EventService, [{
          key: "getEvents",
          value: function getEvents() {
            return this.http.get('assets/demo/data/scheduleevents.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return EventService;
      }();

      EventService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], EventService);
      /***/
    },

    /***/
    "fkzr":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.main.component.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function fkzr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"layout-wrapper\" [ngClass]=\"{'layout-horizontal': app.horizontalMenu,\n                'layout-wrapper-static': staticMenuActive,\n                'layout-rightpanel-active': rightPanelActive,\n                'layout-topbar-mobile-active': topbarMobileMenuActive,\n                'layout-megamenu-mobile-active': megaMenuMobileActive,\n                'layout-sidebar-mobile-active': menuMobileActive,\n                'p-input-filled': app.inputStyle === 'filled',\n                'p-ripple-disabled': !app.ripple}\" [class]=\"app.menuColor\">\n\n    <!-- ESTE  ES EL MENU LATERAL IZQUIERDO -->\n    <app-menu [onChange]=\"brodCastChnage\"></app-menu>\n    <!-- ESTA ES LA PAGINA EN LA QUE HAY QUE PONER LOS COMPONENETES -->\n    <div class=\"layout-main\">\n        <!-- Contiene la barra superior -->\n        <app-topbar></app-topbar>\n\n        <!-- <app-rightpanel></app-rightpanel> -->\n        <!--  este componente sirve para ver en donde estamos en el sistema -->\n        <!-- <app-breadcrumb></app-breadcrumb> -->\n\n        <div class=\"layout-content\">\n            <!-- DONDE SE ENCUENTRAN TODOS LOS COMPONENTES   -->\n            <!-- router outlet es el componenete donde se encuentran los contenidos principales -->\n            <router-outlet></router-outlet>\n        </div>\n\n        <app-footer></app-footer>\n        <!-- ESTE ES EL ENGRANAJE DE CONFIGURACIONES -->\n        <!-- <app-config></app-config> -->\n\n        <div class=\"layout-main-mask\"></div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "gitr":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/menusdemo.component.ts ***!
      \**************************************************/

    /*! exports provided: MenusDemoComponent */

    /***/
    function gitr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenusDemoComponent", function () {
        return MenusDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menusdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menusdemo.component.html */
      "l1DX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var MenusDemoComponent = /*#__PURE__*/function () {
        function MenusDemoComponent(breadcrumbService) {
          _classCallCheck(this, MenusDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Menu',
            routerLink: ['/uikit/menu']
          }]);
        }

        _createClass(MenusDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tieredItems = [{
              label: 'Customers',
              icon: 'pi pi-fw pi-table',
              items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [{
                  label: 'Customer',
                  icon: 'pi pi-fw pi-plus'
                }, {
                  label: 'Duplicate',
                  icon: 'pi pi-fw pi-copy'
                }]
              }, {
                label: 'Edit',
                icon: 'pi pi-fw pi-user-edit'
              }]
            }, {
              label: 'Orders',
              icon: 'pi pi-fw pi-shopping-cart',
              items: [{
                label: 'View',
                icon: 'pi pi-fw pi-list'
              }, {
                label: 'Search',
                icon: 'pi pi-fw pi-search'
              }]
            }, {
              label: 'Shipments',
              icon: 'pi pi-fw pi-envelope',
              items: [{
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
              }, {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
              }, {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
              }]
            }, {
              label: 'Profile',
              icon: 'pi pi-fw pi-user',
              items: [{
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
              }, {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
              }]
            }, {
              separator: true
            }, {
              label: 'Quit',
              icon: 'pi pi-fw pi-sign-out'
            }];
            this.items = [{
              label: 'Customers',
              items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus'
              }, {
                label: 'Edit',
                icon: 'pi pi-fw pi-user-edit'
              }]
            }, {
              label: 'Orders',
              items: [{
                label: 'View',
                icon: 'pi pi-fw pi-list'
              }, {
                label: 'Search',
                icon: 'pi pi-fw pi-search'
              }]
            }, {
              label: 'Shipments',
              items: [{
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
              }, {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
              }, {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
              }]
            }];
            this.menuItems = [{
              label: 'Save',
              icon: 'pi pi-fw pi-check'
            }, {
              label: 'Update',
              icon: 'pi pi-fw pi-refresh'
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            }, {
              separator: true
            }, {
              label: 'Quit',
              icon: 'pi pi-fw pi-sign-out'
            }];
            this.slideItems = [{
              label: 'Customers',
              icon: 'pi pi-fw pi-table',
              items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus'
              }, {
                label: 'Edit',
                icon: 'pi pi-fw pi-user-edit'
              }]
            }, {
              label: 'Orders',
              icon: 'pi pi-fw pi-shopping-cart',
              items: [{
                label: 'View',
                icon: 'pi pi-fw pi-list'
              }, {
                label: 'Search',
                icon: 'pi pi-fw pi-search'
              }]
            }, {
              label: 'Shipments',
              icon: 'pi pi-fw pi-envelope',
              items: [{
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
              }, {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
              }, {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
              }]
            }, {
              label: 'Profile',
              icon: 'pi pi-fw pi-user',
              items: [{
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
              }, {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
              }]
            }];
            this.breadcrumbItems = [];
            this.breadcrumbItems.push({
              label: 'Electronics'
            });
            this.breadcrumbItems.push({
              label: 'Computer'
            });
            this.breadcrumbItems.push({
              label: 'Notebook'
            });
            this.breadcrumbItems.push({
              label: 'Accessories'
            });
            this.breadcrumbItems.push({
              label: 'Backpacks'
            });
            this.breadcrumbItems.push({
              label: 'Item'
            });
            this.tabMenuItems = [{
              label: 'Overview',
              icon: 'pi pi-fw pi-home'
            }, {
              label: 'Members',
              icon: 'pi pi-fw pi-users'
            }, {
              label: 'Sales',
              icon: 'pi pi-fw pi-shopping-cart'
            }, {
              label: 'Profile',
              icon: 'pi pi-fw pi-user'
            }, {
              label: 'Settings',
              icon: 'pi pi-fw pi-cog'
            }];
            this.megaMenuItems = [{
              label: 'Fashion',
              icon: 'pi pi-fw pi-tag',
              items: [[{
                label: 'Women',
                items: [{
                  label: 'Women Item'
                }, {
                  label: 'Women Item'
                }, {
                  label: 'Women Item'
                }]
              }, {
                label: 'Men',
                items: [{
                  label: 'Men Item'
                }, {
                  label: 'Men Item'
                }, {
                  label: 'Men Item'
                }]
              }], [{
                label: 'Kids',
                items: [{
                  label: 'Kids Item'
                }, {
                  label: 'Kids Item'
                }]
              }, {
                label: 'Luggage',
                items: [{
                  label: 'Luggage Item'
                }, {
                  label: 'Luggage Item'
                }, {
                  label: 'Luggage Item'
                }]
              }]]
            }, {
              label: 'Electronics',
              icon: 'pi pi-fw pi-desktop',
              items: [[{
                label: 'Computer',
                items: [{
                  label: 'Computer Item'
                }, {
                  label: 'Computer Item'
                }]
              }, {
                label: 'Camcorder',
                items: [{
                  label: 'Camcorder Item'
                }, {
                  label: 'Camcorder Item'
                }, {
                  label: 'Camcorder Item'
                }]
              }], [{
                label: 'TV',
                items: [{
                  label: 'TV Item'
                }, {
                  label: 'TV Item'
                }]
              }, {
                label: 'Audio',
                items: [{
                  label: 'Audio Item'
                }, {
                  label: 'Audio Item'
                }, {
                  label: 'Audio Item'
                }]
              }], [{
                label: 'Sports.7',
                items: [{
                  label: 'Sports.7.1'
                }, {
                  label: 'Sports.7.2'
                }]
              }]]
            }, {
              label: 'Furniture',
              icon: 'pi pi-fw pi-image',
              items: [[{
                label: 'Living Room',
                items: [{
                  label: 'Living Room Item'
                }, {
                  label: 'Living Room Item'
                }]
              }, {
                label: 'Kitchen',
                items: [{
                  label: 'Kitchen Item'
                }, {
                  label: 'Kitchen Item'
                }, {
                  label: 'Kitchen Item'
                }]
              }], [{
                label: 'Bedroom',
                items: [{
                  label: 'Bedroom Item'
                }, {
                  label: 'Bedroom Item'
                }]
              }, {
                label: 'Outdoor',
                items: [{
                  label: 'Outdoor Item'
                }, {
                  label: 'Outdoor Item'
                }, {
                  label: 'Outdoor Item'
                }]
              }]]
            }, {
              label: 'Sports',
              icon: 'pi pi-fw pi-star-o',
              items: [[{
                label: 'Basketball',
                items: [{
                  label: 'Basketball Item'
                }, {
                  label: 'Basketball Item'
                }]
              }, {
                label: 'Football',
                items: [{
                  label: 'Football Item'
                }, {
                  label: 'Football Item'
                }, {
                  label: 'Football Item'
                }]
              }], [{
                label: 'Tennis',
                items: [{
                  label: 'Tennis Item'
                }, {
                  label: 'Tennis Item'
                }]
              }]]
            }];
            this.panelMenuItems = [{
              label: 'Customers',
              items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [{
                  label: 'Customer',
                  icon: 'pi pi-fw pi-plus'
                }, {
                  label: 'Duplicate',
                  icon: 'pi pi-fw pi-copy'
                }]
              }, {
                label: 'Edit',
                icon: 'pi pi-fw pi-user-edit'
              }]
            }, {
              label: 'Orders',
              items: [{
                label: 'View',
                icon: 'pi pi-fw pi-list'
              }, {
                label: 'Search',
                icon: 'pi pi-fw pi-search'
              }]
            }, {
              label: 'Shipments',
              items: [{
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
              }, {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
              }, {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
              }]
            }, {
              label: 'Profile',
              items: [{
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
              }, {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
              }]
            }];
            this.stepsItems = [{
              label: 'Personal'
            }, {
              label: 'Seat'
            }, {
              label: 'Payment'
            }, {
              label: 'Confirmation'
            }];
          }
        }]);

        return MenusDemoComponent;
      }();

      MenusDemoComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      MenusDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_menusdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
      })], MenusDemoComponent);
      /***/
    },

    /***/
    "hZ8T":
    /*!*********************************************!*\
      !*** ./src/app/app.rightpanel.component.ts ***!
      \*********************************************/

    /*! exports provided: AppRightPanelComponent */

    /***/
    function hZ8T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRightPanelComponent", function () {
        return AppRightPanelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");

      var AppRightPanelComponent = function AppRightPanelComponent(appMain) {
        _classCallCheck(this, AppRightPanelComponent);

        this.appMain = appMain;
      };

      AppRightPanelComponent.ctorParameters = function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_2__["AppMainComponent"]
        }];
      };

      AppRightPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rightpanel',
        template: "\n        <div class=\"layout-rightpanel\" (click)=\"appMain.onRightPanelClick($event)\">\n\t\t\t<div class=\"right-panel-header\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<span>Today</span>\n\t\t\t\t\t<h1>Wednesday, 26 Jun</h1>\n\t\t\t\t</div>\n\t\t\t\t<a href=\"#\" class=\"rightpanel-exit-button\" (click)=\"appMain.onRightPanelClose($event)\">\n\t\t\t\t\t<i class=\"pi pi-times\"></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"right-panel-content\">\n\t\t\t\t<div class=\"right-panel-content-row\">\n\t\t\t\t\t<div class=\"tasks\">\n\t\t\t\t\t\t<div class=\"tasks-header\">\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t<h1>Tasks</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tasks-info\">\n\t\t\t\t\t\t\t\t<span>You have</span><span class=\"highlighted\"> 2 tasks</span><span> today</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"tasks-list\">\n\t\t\t\t\t\t\t<li class=\"tasks-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<p-checkbox binary=\"true\"></p-checkbox>\n\t\t\t\t\t\t\t\t\t<p>Sales Report</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tasks-day\">\n\t\t\t\t\t\t\t\t\t<span class=\"time\">Today</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"tasks-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<p-checkbox binary=\"true\"></p-checkbox>\n\t\t\t\t\t\t\t\t\t<p>Pay Invoices</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tasks-day\">\n\t\t\t\t\t\t\t\t\t<span class=\"time\">Today</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"tasks-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<p-checkbox binary=\"true\"></p-checkbox>\n\t\t\t\t\t\t\t\t\t<p>Customer Meeting</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tasks-day\">\n\t\t\t\t\t\t\t\t\t<span class=\"time later\">Later</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"tasks-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<p-checkbox binary=\"true\"></p-checkbox>\n\t\t\t\t\t\t\t\t\t<p>Expense Reports</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tasks-day\">\n\t\t\t\t\t\t\t\t\t<span class=\"time later\">Later</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"tasks-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<p-checkbox binary=\"true\"></p-checkbox>\n\t\t\t\t\t\t\t\t\t<p>Plane Tickets</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tasks-day\">\n\t\t\t\t\t\t\t\t\t<span class=\"time later\">Later</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"tasks-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<p-checkbox binary=\"true\"></p-checkbox>\n\t\t\t\t\t\t\t\t\t<p>Dinner with Tony</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tasks-day\">\n\t\t\t\t\t\t\t\t\t<span class=\"time later\">Later</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n                    </div>\n                </div>\n\t\t\t\t<div class=\"right-panel-content-row\">\n\t\t\t\t\t<div class=\"calendar\">\n\t\t\t\t\t\t<h1>Calendar</h1>\n\t\t\t\t\t\t<p-calendar [inline]=\"true\"></p-calendar>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right-panel-content-row\">\n\t\t\t\t\t<div class=\"weather\">\n\t\t\t\t\t\t<h1>Weather</h1>\n\t\t\t\t\t\t<ul class=\"weather-list\">\n\t\t\t\t\t\t\t<li class=\"weather-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"time-location\">\n\t\t\t\t\t\t\t\t\t<span>15.03</span>\n\t\t\t\t\t\t\t\t\t<p>Lille</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"weather-info\">\n\t\t\t\t\t\t\t\t\t<div class=\"weather-icon icon-1\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/layout/images/rightpanel/weather-icon-1.svg\" alt=\"mirage-layout\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"weather-value\">\n\t\t\t\t\t\t\t\t\t\t31\xB0\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"weather-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"time-location\">\n\t\t\t\t\t\t\t\t\t<span>15.03</span>\n\t\t\t\t\t\t\t\t\t<p>Barcelona</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"weather-info\">\n\t\t\t\t\t\t\t\t\t<div class=\"weather-icon icon-2\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/layout/images/rightpanel/weather-icon-3.svg\" alt=\"mirage-layout\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"weather-value\">\n\t\t\t\t\t\t\t\t\t\t26\xB0\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"weather-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"time-location\">\n\t\t\t\t\t\t\t\t\t<span>09.03</span>\n\t\t\t\t\t\t\t\t\t<p>New York</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"weather-info\">\n\t\t\t\t\t\t\t\t\t<div class=\"weather-icon icon-1\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/layout/images/rightpanel/weathericon-4.svg\" alt=\"mirage-layout\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"weather-value\">\n\t\t\t\t\t\t\t\t\t\t23\xB0\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"weather-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"time-location\">\n\t\t\t\t\t\t\t\t\t<span>15.03</span>\n\t\t\t\t\t\t\t\t\t<p>Amsterdam</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"weather-info\">\n\t\t\t\t\t\t\t\t\t<div class=\"weather-icon icon-3\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/layout/images/rightpanel/weather-icon-4.svg\" alt=\"mirage-layout\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"weather-value\">\n\t\t\t\t\t\t\t\t\t\t31\xB0\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"weather-list-item\">\n\t\t\t\t\t\t\t\t<div class=\"time-location\">\n\t\t\t\t\t\t\t\t\t<span>09.03</span>\n\t\t\t\t\t\t\t\t\t<p>Antalya</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"weather-info\">\n\t\t\t\t\t\t\t\t\t<div class=\"weather-icon icon-4\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/layout/images/rightpanel/weather-icon-4.svg\" alt=\"mirage-layout\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"weather-value\">\n\t\t\t\t\t\t\t\t\t\t33\xB0\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n            </div>\n        </div>\n    "
      })], AppRightPanelComponent);
      /***/
    },

    /***/
    "ibcK":
    /*!************************************************!*\
      !*** ./src/app/demo/service/productservice.ts ***!
      \************************************************/

    /*! exports provided: ProductService */

    /***/
    function ibcK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
        }

        _createClass(ProductService, [{
          key: "getProductsSmall",
          value: function getProductsSmall() {
            return this.http.get('assets/demo/data/products-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            return this.http.get('assets/demo/data/products.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProductsMixed",
          value: function getProductsMixed() {
            return this.http.get('assets/demo/data/products-mixed.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProductsWithOrdersSmall",
          value: function getProductsWithOrdersSmall() {
            return this.http.get('assets/demo/data/products-orders-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return ProductService;
      }();

      ProductService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ProductService);
      /***/
    },

    /***/
    "j1Et":
    /*!*************************************************!*\
      !*** ./src/app/demo/view/miscdemo.component.ts ***!
      \*************************************************/

    /*! exports provided: MiscDemoComponent */

    /***/
    function j1Et(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiscDemoComponent", function () {
        return MiscDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_miscdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./miscdemo.component.html */
      "fbbu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var MiscDemoComponent = /*#__PURE__*/function () {
        function MiscDemoComponent(breadcrumbService) {
          _classCallCheck(this, MiscDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.value = 0;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Misc',
            routerLink: ['/uikit/misc']
          }]);
        }

        _createClass(MiscDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            var interval = setInterval(function () {
              _this21.value = _this21.value + Math.floor(Math.random() * 10) + 1;

              if (_this21.value >= 100) {
                _this21.value = 100;
                clearInterval(interval);
              }
            }, 2000);
          }
        }]);

        return MiscDemoComponent;
      }();

      MiscDemoComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      MiscDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_miscdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n\t\t:host ::ng-deep .misc-demo .p-button.p-widget {\n\t\t    min-width: 6rem;\n\t    }\n\n\t\t:host ::ng-deep .misc-demo .badges .p-badge {\n\t\t    margin-right: .5rem;\n\t\t}\n\n\t\t:host ::ng-deep .misc-demo .badges .p-tag {\n\t\t\tmargin-right: .5rem;\n\t\t}\n    "]
      })], MiscDemoComponent);
      /***/
    },

    /***/
    "jZwK":
    /*!*****************************************!*\
      !*** ./src/app/demo/view/listdemo.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function jZwK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep .p-dropdown {\n  width: 14rem;\n  font-weight: normal;\n}\n:host ::ng-deep .product-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n:host ::ng-deep .product-description {\n  margin: 0 0 1rem 0;\n}\n:host ::ng-deep .product-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n:host ::ng-deep .product-category {\n  font-weight: 600;\n  vertical-align: middle;\n}\n:host ::ng-deep .product-list-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n:host ::ng-deep .product-list-item img {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n:host ::ng-deep .product-list-item .product-list-detail {\n  flex: 1 1 0;\n}\n:host ::ng-deep .product-list-item .p-rating {\n  margin: 0 0 0.5rem 0;\n}\n:host ::ng-deep .product-list-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n:host ::ng-deep .product-list-item .product-list-action {\n  display: flex;\n  flex-direction: column;\n}\n:host ::ng-deep .product-list-item .p-button {\n  margin-bottom: 0.5rem;\n}\n:host ::ng-deep .product-grid-item {\n  margin: 0.5em;\n  border: 1px solid #dee2e6;\n}\n:host ::ng-deep .product-grid-item .product-grid-item-top,\n:host ::ng-deep .product-grid-item .product-grid-item-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n:host ::ng-deep .product-grid-item img {\n  width: 75%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin: 2rem 0;\n}\n:host ::ng-deep .product-grid-item .product-grid-item-content {\n  text-align: center;\n}\n:host ::ng-deep .product-grid-item .product-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.product-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n@media screen and (max-width: 576px) {\n  :host ::ng-deep .product-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  :host ::ng-deep .product-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  :host ::ng-deep .product-list-item .product-list-detail {\n    text-align: center;\n  }\n  :host ::ng-deep .product-list-item .product-price {\n    align-self: center;\n  }\n  :host ::ng-deep .product-list-item .product-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  :host ::ng-deep .product-list-item .product-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXN0ZGVtby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQztFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUlDO0VBQ0Msa0JBQUE7QUFGRjtBQUtDO0VBQ0Msc0JBQUE7RUFDQSxvQkFBQTtBQUhGO0FBTUM7RUFDQyxnQkFBQTtFQUNBLHNCQUFBO0FBSkY7QUFPQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBTEY7QUFPRTtFQUNDLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0FBTEg7QUFRRTtFQUNDLFdBQUE7QUFOSDtBQVNFO0VBQ0Msb0JBQUE7QUFQSDtBQVVFO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFSSDtBQVdFO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FBVEg7QUFZRTtFQUNDLHFCQUFBO0FBVkg7QUFjQztFQUNDLGFBQUE7RUFDQSx5QkFBQTtBQVpGO0FBY0U7O0VBRUMsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFaSDtBQWVFO0VBQ0MsVUFBQTtFQUNBLHdFQUFBO0VBQ0EsY0FBQTtBQWJIO0FBZ0JFO0VBQ0Msa0JBQUE7QUFkSDtBQWlCRTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7QUFmSDtBQW9CQTtFQUNDLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBakJEO0FBbUJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBakJGO0FBb0JDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBbEJGO0FBcUJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBbkJGO0FBdUJBO0VBQ0M7SUFDQyxzQkFBQTtJQUNBLG1CQUFBO0VBcEJBO0VBc0JBO0lBQ0MsVUFBQTtJQUNBLGNBQUE7RUFwQkQ7RUF1QkE7SUFDQyxrQkFBQTtFQXJCRDtFQXdCQTtJQUNDLGtCQUFBO0VBdEJEO0VBeUJBO0lBQ0MsYUFBQTtJQUNBLHNCQUFBO0VBdkJEO0VBMEJBO0lBQ0MsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBeEJEO0FBQ0YiLCJmaWxlIjoibGlzdGRlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG5cdC5wLWRyb3Bkb3duIHtcblx0XHR3aWR0aDogMTRyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0fVxuXG5cdC5wcm9kdWN0LW5hbWUge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdH1cblxuXHQucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG5cdFx0bWFyZ2luOiAwIDAgMXJlbSAwO1xuXHR9XG5cblx0LnByb2R1Y3QtY2F0ZWdvcnktaWNvbiB7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRtYXJnaW4tcmlnaHQ6IC41cmVtO1xuXHR9XG5cblx0LnByb2R1Y3QtY2F0ZWdvcnkge1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxuXG5cdC5wcm9kdWN0LWxpc3QtaXRlbSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDFyZW07XG5cdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDE1MHB4O1xuXHRcdFx0Ym94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAycmVtO1xuXHRcdH1cblxuXHRcdC5wcm9kdWN0LWxpc3QtZGV0YWlsIHtcblx0XHRcdGZsZXg6IDEgMSAwO1xuXHRcdH1cblxuXHRcdC5wLXJhdGluZyB7XG5cdFx0XHRtYXJnaW46IDAgMCAuNXJlbSAwO1xuXHRcdH1cblxuXHRcdC5wcm9kdWN0LXByaWNlIHtcblx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdG1hcmdpbi1ib3R0b206IC41cmVtO1xuXHRcdFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdFx0fVxuXG5cdFx0LnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0fVxuXG5cdFx0LnAtYnV0dG9uIHtcblx0XHRcdG1hcmdpbi1ib3R0b206IC41cmVtO1xuXHRcdH1cblx0fVxuXG5cdC5wcm9kdWN0LWdyaWQtaXRlbSB7XG5cdFx0bWFyZ2luOiAuNWVtO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG5cblx0XHQucHJvZHVjdC1ncmlkLWl0ZW0tdG9wLFxuXHRcdC5wcm9kdWN0LWdyaWQtaXRlbS1ib3R0b20ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0fVxuXG5cdFx0aW1nIHtcblx0XHRcdHdpZHRoOiA3NSU7XG5cdFx0XHRib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG5cdFx0XHRtYXJnaW46IDJyZW0gMDtcblx0XHR9XG5cblx0XHQucHJvZHVjdC1ncmlkLWl0ZW0tY29udGVudCB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0LnByb2R1Y3QtcHJpY2Uge1xuXHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdH1cblx0fVxufVxuXG4ucHJvZHVjdC1iYWRnZSB7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0cGFkZGluZzogLjI1ZW0gLjVyZW07XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0bGV0dGVyLXNwYWNpbmc6IC4zcHg7XG5cblx0Ji5zdGF0dXMtaW5zdG9jayB7XG5cdFx0YmFja2dyb3VuZDogI0M4RTZDOTtcblx0XHRjb2xvcjogIzI1NjAyOTtcblx0fVxuXG5cdCYuc3RhdHVzLW91dG9mc3RvY2sge1xuXHRcdGJhY2tncm91bmQ6ICNGRkNERDI7XG5cdFx0Y29sb3I6ICNDNjM3Mzc7XG5cdH1cblxuXHQmLnN0YXR1cy1sb3dzdG9jayB7XG5cdFx0YmFja2dyb3VuZDogI0ZFRURBRjtcblx0XHRjb2xvcjogIzhBNTM0MDtcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuXHQ6aG9zdCA6Om5nLWRlZXAgLnByb2R1Y3QtbGlzdC1pdGVtIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDc1JTtcblx0XHRcdG1hcmdpbjogMnJlbSAwO1xuXHRcdH1cblxuXHRcdC5wcm9kdWN0LWxpc3QtZGV0YWlsIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHQucHJvZHVjdC1wcmljZSB7XG5cdFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0LnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0fVxuXG5cdFx0LnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuXHRcdFx0bWFyZ2luLXRvcDogMnJlbTtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHR9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "jaM/":
    /*!*****************************************!*\
      !*** ./src/app/app.config.component.ts ***!
      \*****************************************/

    /*! exports provided: AppConfigComponent */

    /***/
    function jaM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConfigComponent", function () {
        return AppConfigComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var AppConfigComponent = /*#__PURE__*/function () {
        function AppConfigComponent(app, appMain, translate) {
          _classCallCheck(this, AppConfigComponent);

          this.app = app;
          this.appMain = appMain;
          this.translate = translate;
          translate.addLangs(['en', 'fr']);
          translate.setDefaultLang('en'); // const browserLang = translate.getBrowserLang();
          // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        }

        _createClass(AppConfigComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.lightColors = [{
              name: 'Blue',
              file: 'blue',
              color: '#5e81ac'
            }, {
              name: 'Green',
              file: 'green',
              color: '#A3BE8C'
            }, {
              name: 'Yellow',
              file: 'yellow',
              color: '#EBCB8B'
            }, {
              name: 'Cyan',
              file: 'cyan',
              color: '#88C0D0'
            }, {
              name: 'Purple',
              file: 'purple',
              color: '#B48EAD'
            }, {
              name: 'Orange',
              file: 'orange',
              color: '#D08770'
            }, {
              name: 'Teal',
              file: 'teal',
              color: '#88D0BD'
            }, {
              name: 'Magenta',
              file: 'magenta',
              color: '#BD69AE'
            }, {
              name: 'Lime',
              file: 'lime',
              color: '#B9BE7F'
            }, {
              name: 'Brown',
              file: 'brown',
              color: '#BE9B7F'
            }, {
              name: 'Red',
              file: 'red',
              color: '#F28686'
            }, {
              name: 'Indigo',
              file: 'indigo',
              color: '#8886F2'
            }];
            this.darkColors = [{
              name: 'Blue',
              file: 'blue',
              color: '#5e81ac'
            }, {
              name: 'Green',
              file: 'green',
              color: '#A3BE8C'
            }, {
              name: 'Yellow',
              file: 'yellow',
              color: '#EBCB8B'
            }, {
              name: 'Cyan',
              file: 'cyan',
              color: '#88C0D0'
            }, {
              name: 'Purple',
              file: 'purple',
              color: '#B48EAD'
            }, {
              name: 'Orange',
              file: 'orange',
              color: '#D08770'
            }, {
              name: 'Teal',
              file: 'teal',
              color: '#88D0BD'
            }, {
              name: 'Magenta',
              file: 'magenta',
              color: '#BD69AE'
            }, {
              name: 'Lime',
              file: 'lime',
              color: '#B9BE7F'
            }, {
              name: 'Brown',
              file: 'brown',
              color: '#BE9B7F'
            }, {
              name: 'Red',
              file: 'red',
              color: '#F28686'
            }, {
              name: 'Indigo',
              file: 'indigo',
              color: '#8886F2'
            }];
            this.customColors = [{
              name: 'Chile',
              file: 'chile',
              image: 'chile.png'
            }, {
              name: 'Naples',
              file: 'naples',
              image: 'naples.png'
            }, {
              name: 'Georgia',
              file: 'georgia',
              image: 'georgia.png'
            }, {
              name: 'Infinity',
              file: 'infinity',
              image: 'infinity.png'
            }, {
              name: 'Chicago',
              file: 'chicago',
              image: 'chicago.png'
            }, {
              name: 'Majesty',
              file: 'majesty',
              image: 'majesty.png'
            }, {
              name: 'Fish',
              file: 'fish',
              image: 'fish.png'
            }, {
              name: 'Dawn',
              file: 'dawn',
              image: 'dawn.png'
            }, {
              name: 'Record',
              file: 'record',
              image: 'record.png'
            }, {
              name: 'Pool',
              file: 'pool',
              image: 'pool.png'
            }, {
              name: 'Metal',
              file: 'metal',
              image: 'metal.png'
            }, {
              name: 'China',
              file: 'china',
              image: 'china.png'
            }, {
              name: 'Table',
              file: 'table',
              image: 'table.png'
            }, {
              name: 'Panorama',
              file: 'panorama',
              image: 'panorama.png'
            }, {
              name: 'Barcelona',
              file: 'barcelona',
              image: 'barcelona.png'
            }, {
              name: 'Underwater',
              file: 'underwater',
              image: 'underwater.png'
            }, {
              name: 'Symmetry',
              file: 'symmetry',
              image: 'symmetry.png'
            }, {
              name: 'Rain',
              file: 'rain',
              image: 'rain.png'
            }, {
              name: 'Utah',
              file: 'utah',
              image: 'utah.png'
            }, {
              name: 'Wave',
              file: 'wave',
              image: 'wave.png'
            }, {
              name: 'Flora',
              file: 'flora',
              image: 'flora.png'
            }, {
              name: 'Speed',
              file: 'speed',
              image: 'speed.png'
            }, {
              name: 'Canopy',
              file: 'canopy',
              image: 'canopy.png'
            }, {
              name: 'SanPaolo',
              file: 'sanpaolo',
              image: 'sanpaolo.png'
            }, {
              name: 'Basketball',
              file: 'basketball',
              image: 'basketball.png'
            }, {
              name: 'Misty',
              file: 'misty',
              image: 'misty.png'
            }, {
              name: 'Summit',
              file: 'summit',
              image: 'summit.png'
            }, {
              name: 'Wall',
              file: 'wall',
              image: 'wall.png'
            }, {
              name: 'Ferris',
              file: 'ferris',
              image: 'ferris.png'
            }, {
              name: 'Ship',
              file: 'ship',
              image: 'ship.png'
            }, {
              name: 'NY',
              file: 'ny',
              image: 'ny.png'
            }, {
              name: 'Cyan',
              file: 'cyan',
              image: 'cyan.png'
            }, {
              name: 'Violet',
              file: 'violet',
              image: 'violet.png'
            }, {
              name: 'Red',
              file: 'red',
              image: 'red.png'
            }, {
              name: 'Blue',
              file: 'blue',
              image: 'blue.png'
            }, {
              name: 'Porsuk',
              file: 'porsuk',
              image: 'porsuk.png'
            }, {
              name: 'Pink',
              file: 'pink',
              image: 'pink.png'
            }, {
              name: 'Purple',
              file: 'purple',
              image: 'purple.png'
            }, {
              name: 'Orange',
              file: 'orange',
              image: 'orange.png'
            }];
            this.menuColors = this.lightColors;
            this.componentThemes = [{
              name: 'Blue',
              file: 'blue',
              color: '#5E81AC'
            }, {
              name: 'Green',
              file: 'green',
              color: '#99CE6B'
            }, {
              name: 'Yellow',
              file: 'yellow',
              color: '#EBCB8B'
            }, {
              name: 'Cyan',
              file: 'cyan',
              color: '#88C0D0'
            }, {
              name: 'Purple',
              file: 'purple',
              color: '#B48EAD'
            }, {
              name: 'Orange',
              file: 'orange',
              color: '#D08770'
            }, {
              name: 'Teal',
              file: 'teal',
              color: '#88D0BD'
            }, {
              name: 'Magenta',
              file: 'magenta',
              color: '#BD69AE'
            }, {
              name: 'Lime',
              file: 'lime',
              color: '#B9BE7F'
            }, {
              name: 'Brown',
              file: 'brown',
              color: '#BE9B7F'
            }, {
              name: 'Red',
              file: 'red',
              color: '#F28686'
            }, {
              name: 'Indigo',
              file: 'indigo',
              color: '#8886F2'
            }];
            this.idiomas = [{
              label: 'es',
              value: {
                id: 1,
                name: 'es',
                code: 'es'
              }
            }, {
              label: 'en',
              value: {
                id: 2,
                name: 'en',
                code: 'en'
              }
            }, {
              label: 'fr',
              value: {
                id: 3,
                name: 'fr',
                code: 'fr'
              }
            }];
          }
        }, {
          key: "cambioIdioma",
          value: function cambioIdioma(event) {
            console.log(event.value.name);
            this.translate.use(event.value.name);
          }
        }, {
          key: "changeLayout",
          value: function changeLayout(event, mode) {
            this.app.darkMode = mode;

            if (mode === true) {
              this.app.menuColorMode = 'dark';
              this.app.menuColor = 'layout-menu-dark';
              this.app.layoutColor = this.darkColors[0].file;
              this.menuColors = this.darkColors;
              this.changeLightDarkLayout('layout-css', this.darkColors[0].file, 'layout-dark');
              this.changeLightDarkTheme('theme-css', 'theme-dark');
            } else {
              this.app.menuColorMode = 'light';
              this.app.menuColor = 'layout-menu-light';
              this.app.layoutColor = this.lightColors[0].file;
              this.menuColors = this.lightColors;
              this.changeLightDarkLayout('layout-css', this.lightColors[0].file, 'layout-light');
              this.changeLightDarkTheme('theme-css', 'theme-light');
            }

            event.preventDefault();
          }
        }, {
          key: "changeLightDarkTheme",
          value: function changeLightDarkTheme(id, value) {
            var element = document.getElementById(id);
            var urlTokens = element.getAttribute('href').split('/');
            urlTokens[urlTokens.length - 1] = value + '.css';
            var newURL = urlTokens.join('/');
            this.replaceLink(element, newURL);
          }
        }, {
          key: "changeLightDarkLayout",
          value: function changeLightDarkLayout(id, color, mode) {
            var element = document.getElementById(id);
            var urlTokens = element.getAttribute('href').split('/');
            urlTokens[urlTokens.length - 2] = color;
            urlTokens[urlTokens.length - 1] = mode + '.css';
            var newURL = urlTokens.join('/');
            this.replaceLink(element, newURL);
          }
        }, {
          key: "changeMenuColorMode",
          value: function changeMenuColorMode(event, mode) {
            this.app.menuColorMode = mode;

            if (mode !== 'custom') {
              if (mode === 'light') {
                this.menuColors = this.lightColors;
                this.changeMenuColor(event, this.lightColors[0].file);
              } else {
                this.menuColors = this.darkColors;
                this.changeMenuColor(event, this.darkColors[0].file);
              }
            } else {
              this.menuColors = this.customColors;
              this.changeMenuColor(event, this.customColors[0].file);
            }
          }
        }, {
          key: "changeMenuColor",
          value: function changeMenuColor(event, color) {
            if (this.app.menuColorMode !== 'custom') {
              this.app.menuColor = 'layout-menu-' + this.app.menuColorMode;

              if (this.app.menuColorMode === 'dark') {
                this.app.layoutColor = color;
                this.changeStyleSheetsColor('layout-css', color);
              } else {
                this.app.layoutColor = color;
                this.changeStyleSheetsColor('layout-css', color);
              }
            } else {
              this.app.layoutColor = color;
              this.app.menuColor = 'layout-menu-' + color;
            }

            event.preventDefault();
          }
        }, {
          key: "changeComponentTheme",
          value: function changeComponentTheme(event, color) {
            this.app.themeColor = color;
            this.changeStyleSheetsColor('theme-css', color);
            event.preventDefault();
          }
        }, {
          key: "changeStyleSheetsColor",
          value: function changeStyleSheetsColor(id, value) {
            var element = document.getElementById(id);
            var urlTokens = element.getAttribute('href').split('/');
            urlTokens[urlTokens.length - 2] = value;
            var newURL = urlTokens.join('/');
            this.replaceLink(element, newURL);
          }
        }, {
          key: "onConfigButtonClick",
          value: function onConfigButtonClick(event) {
            this.appMain.configActive = !this.appMain.configActive;
            event.preventDefault();
          }
        }, {
          key: "onConfigCloseClick",
          value: function onConfigCloseClick(event) {
            this.appMain.configActive = false;
            event.preventDefault();
          }
        }, {
          key: "replaceLink",
          value: function replaceLink(linkElement, href) {
            if (this.isIE()) {
              linkElement.setAttribute('href', href);
            } else {
              var id = linkElement.getAttribute('id');
              var cloneLinkElement = linkElement.cloneNode(true);
              cloneLinkElement.setAttribute('href', href);
              cloneLinkElement.setAttribute('id', id + '-clone');
              linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
              cloneLinkElement.addEventListener('load', function () {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
              });
            }
          }
        }, {
          key: "isIE",
          value: function isIE() {
            return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
          }
        }]);

        return AppConfigComponent;
      }();

      AppConfigComponent.ctorParameters = function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        }, {
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_4__["AppMainComponent"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      AppConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-config',
        template: "\n        <div class=\"layout-config\" [ngClass]=\"{'layout-config-active': appMain.configActive}\" (click)=\"appMain.onConfigClick($event)\">\n            <a style=\"cursor: pointer\" id=\"layout-config-button\" class=\"layout-config-button\" (click)=\"onConfigButtonClick($event)\">\n                <i class=\"pi pi-cog\"></i>\n            </a>\n            <a style=\"cursor: pointer\" class=\"layout-config-close\" (click)=\"onConfigCloseClick($event)\">\n                <i class=\"pi pi-times\"></i>\n            </a>\n            <div class=\"layout-config-content\">\n                <h5>Menu Type </h5>\n                \n                <div class=\"p-grid\">\n                    <div class=\"p-col-6\">\n                        <label>{{'Lenguaje' | translate}}</label>                       \n                       <!-- <select #lanSelect (change)=\"translate.use(lanSelect.value)\">\n                           <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\"\n                           [selected]=\"lang===translate.currentLang\"\n                           >{{lang}}</option>\n                       </select> -->                                      \n                    </div>          \n                    <div class=\"p-col-6\">\n                    <p-dropdown [options]=\"idiomas\" (onChange)=\"cambioIdioma($event)\" styleClass=\"p-mb-2 p-mb-md-0\"></p-dropdown>\n                    </div>\n                    \n                </div>\n               \n                <div class=\"p-grid\">\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"overlay\" name=\"layoutMode\" [(ngModel)]=\"app.horizontalMenu\"></p-radioButton>\n                            <label for=\"static\">Overlay</label>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"horizontal\" name=\"layoutMode\" [value]=\"true\" [(ngModel)]=\"app.horizontalMenu\"></p-radioButton>\n                            <label for=\"horizontal\">Horizontal</label>\n                        </div>\n                    </div>\n                </div>\n\n                <h5>Color Scheme</h5>\n                <div class=\"p-grid\">\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"light\" name=\"colorScheme\" [value]=\"false\" [(ngModel)]=\"app.darkMode\" (onClick)=\"changeLayout($event, false)\"></p-radioButton>\n                            <label for=\"light\">Light</label>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"dark\" name=\"colorScheme\" [value]=\"true\" [(ngModel)]=\"app.darkMode\" (onClick)=\"changeLayout($event, true)\"></p-radioButton>\n                            <label for=\"dark\">Dark</label>\n                        </div>\n                    </div>\n                </div>\n\n                <h5>Input Style</h5>\n                <div class=\"p-formgroup-inline\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton inputId=\"input_outlined\" name=\"inputstyle\" [(ngModel)]=\"app.inputStyle\"  value=\"outlined\"></p-radioButton>\n                        <label for=\"input_outlined\">Outlined</label>\n                    </div>\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton inputId=\"input_filled\" name=\"inputstyle\" [(ngModel)]=\"app.inputStyle\" value=\"filled\"></p-radioButton>\n                        <label for=\"input_filled\">Filled</label>\n                    </div>\n                </div>\n\n                <h5>Ripple Effect</h5>\n                <p-inputSwitch [ngModel]=\"app.ripple\" (onChange)=\"appMain.onRippleChange($event)\"></p-inputSwitch>\n\n                <h5>Menu Colors</h5>\n                <div class=\"p-formgroup-inline\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton inputId=\"lightMenu\" name=\"menuColor\"  value=\"light\" [ngModel]=\"app.menuColorMode\" (onClick)=\"changeMenuColorMode($event, 'light')\"></p-radioButton>\n                        <label for=\"lightMenu\">Light</label>\n                    </div>\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton inputId=\"darkMenu\" name=\"menuColor\" value=\"dark\" [ngModel]=\"app.menuColorMode\" (onClick)=\"changeMenuColorMode($event, 'dark')\"></p-radioButton>\n                        <label for=\"darkMenu\">Dark</label>\n                    </div>\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton inputId=\"customMenu\" name=\"menuColor\" value=\"custom\" [ngModel]=\"app.menuColorMode\" (onClick)=\"changeMenuColorMode($event, 'custom')\"></p-radioButton>\n                        <label for=\"customMenu\">Custom</label>\n                    </div>\n                </div>\n                <div class=\"layout-themes\">\n                    <div *ngFor=\"let color of menuColors\">\n                        <a style=\"cursor: pointer\" (click)=\"changeMenuColor($event, color.file)\"  [ngStyle]=\"{'background-color': color.color}\">\n                            <img src=\"assets/layout/images/configurator/menu/theme/{{color.image}}\" *ngIf=\"app.menuColorMode === 'custom'\" style=\"height: 100%; width: 100%;\" alt=\"{{color.name}}\"/>\n                            <i class=\"pi pi-check\" *ngIf=\"app.layoutColor === color.file\"></i>\n                        </a>\n                    </div>\n                </div>\n\n                <h5>Themes</h5>\n                <div class=\"layout-themes\">\n                    <div *ngFor=\"let t of componentThemes\">\n                        <a style=\"cursor: pointer\" (click)=\"changeComponentTheme($event, t.file)\" [ngStyle]=\"{'background-color': t.color}\">\n                            <i class=\"pi pi-check\" *ngIf=\"app.themeColor === t.file\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('children', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 0,
          transform: ' translateX(-50%) translateY(-50%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 1,
          transform: 'translateX(-50%) translateY(-50%) scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)'))])]
      })], AppConfigComponent);
      /***/
    },

    /***/
    "joOn":
    /*!***********************************************************!*\
      !*** ./src/app/paginas/anotacion/anotacion.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function joOn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbm90YWNpb24uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "kA7y":
    /*!*******************************************!*\
      !*** ./src/app/app.menuitem.component.ts ***!
      \*******************************************/

    /*! exports provided: AppMenuitemComponent */

    /***/
    function kA7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMenuitemComponent", function () {
        return AppMenuitemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.menu.service */
      "axq9");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");

      var AppMenuitemComponent = /*#__PURE__*/function () {
        function AppMenuitemComponent(appMain, router, cd, menuService) {
          var _this22 = this;

          _classCallCheck(this, AppMenuitemComponent);

          this.appMain = appMain;
          this.router = router;
          this.cd = cd;
          this.menuService = menuService;
          this.active = false;
          this.menuSourceSubscription = this.menuService.menuSource$.subscribe(function (key) {
            // deactivate current active menu
            if (_this22.active && _this22.key !== key && key.indexOf(_this22.key) !== 0) {
              _this22.active = false;
            }
          });
          this.menuResetSubscription = this.menuService.resetSource$.subscribe(function () {
            _this22.active = false;
          });
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).subscribe(function (params) {
            if (_this22.appMain.isHorizontal()) {
              _this22.active = false;
            } else {
              if (_this22.item.routerLink) {
                _this22.updateActiveStateFromRoute();
              } else {
                _this22.active = false;
              }
            }
          });
        }

        _createClass(AppMenuitemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.appMain.isHorizontal() && this.item.routerLink) {
              this.updateActiveStateFromRoute();
            }

            this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
          }
        }, {
          key: "updateActiveStateFromRoute",
          value: function updateActiveStateFromRoute() {
            this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
          }
        }, {
          key: "itemClick",
          value: function itemClick(event) {
            // avoid processing disabled items
            if (this.item.disabled) {
              event.preventDefault();
              return true;
            } // navigate with hover in horizontal mode


            if (this.root) {
              this.appMain.menuHoverActive = !this.appMain.menuHoverActive;
            } // notify other items


            this.menuService.onMenuStateChange(this.key); // execute command

            if (this.item.command) {
              this.item.command({
                originalEvent: event,
                item: this.item
              });
            } // toggle active state


            if (this.item.items) {
              this.active = !this.active;
            } else {
              // activate item
              this.active = true; // hide overlay menus

              if (this.appMain.isMobile()) {
                this.appMain.sidebarActive = false;
                this.appMain.menuMobileActive = false;
              } // reset horizontal menu


              if (this.appMain.isHorizontal()) {
                this.menuService.reset();
              }
            }
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            // activate item on hover
            if (this.root && this.appMain.menuHoverActive && this.appMain.isHorizontal() && this.appMain.isDesktop()) {
              this.menuService.onMenuStateChange(this.key);
              this.active = true;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.menuSourceSubscription) {
              this.menuSourceSubscription.unsubscribe();
            }

            if (this.menuResetSubscription) {
              this.menuResetSubscription.unsubscribe();
            }
          }
        }]);

        return AppMenuitemComponent;
      }();

      AppMenuitemComponent.ctorParameters = function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_6__["AppMainComponent"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _app_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
        }];
      };

      AppMenuitemComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        root: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        parentKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      AppMenuitemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable:component-selector 
        selector: '[app-menuitem]',

        /* tslint:enable:component-selector   INTERNACIONALIZACION DE LA BARRA VERTICAL...*/
        template: "\n          <ng-container>\n              <!-- PARA QUE SE RENDERIZE LAS SUBLISTAS  -->              \n              <a [attr.href]=\"item.url\" (click)=\"itemClick($event)\" *ngIf=\"!item.routerLink || item.items\" (mouseenter)=\"onMouseEnter()\" (keydown.enter)=\"itemClick($event)\"\n                [attr.target]=\"item.target\" [attr.tabindex]=\"0\" [ngClass]=\"item.class\">\n                  <span class=\"menuitem-text\">{{item.label | translate}}</span>                  \n                  <i class=\"pi pi-fw pi-angle-down layout-submenu-toggler\" *ngIf=\"item.items\"></i>\n                  <i [ngClass]=\"item.icon\" class=\"layout-menuitem-icon\"></i>\n              </a>\n              <!-- PARA QUE SE RENDERIZE LAS SUBLISTAS ^^^^^^^^^^^^ -->\n\n              <div *ngIf=\"item.disable; then thenBlock else elseBlock\"></div>\n                <ng-template #thenBlock>                    \n                    <a (click)=\"itemClick($event)\" (mouseenter)=\"onMouseEnter()\" *ngIf=\"item.routerLink && !item.items\"\n                    [routerLink]=\"item.routerLink\" routerLinkActive=\"active-menuitem-routerlink\" [ngClass]=\"item.class\"\n                    [routerLinkActiveOptions]=\"{exact: true}\" [attr.target]=\"item.target\" [attr.tabindex]=\"0\">\n                    <span class=\"menuitem-text\">{{item.label | translate}}</span>                \n                    <i class=\"pi pi-fw pi-angle-down layout-submenu-toggler\" *ngIf=\"item.items\"></i>\n                    <i [ngClass]=\"item.icon\" class=\"layout-menuitem-icon\"></i>\n                    </a> \n                </ng-template>\n                    \n                <ng-template #elseBlock>\n                     \n                    <a (click)=\"itemClick($event)\" (mouseenter)=\"onMouseEnter()\" *ngIf=\"item.routerLink && !item.items\"\n                    [routerLink]=\"item.routerLink\" routerLinkActive=\"active-menuitem-routerlink\" [ngClass]=\"item.class\"\n                    [routerLinkActiveOptions]=\"{exact: true}\" [attr.target]=\"item.target\" [attr.tabindex]=\"0\" style=\"pointer-events: none;cursor: default;\">\n                    <span class=\"menuitem-text\" style=\"color: #ccc;\">{{item.label | translate}}</span>                \n                    <i class=\"pi pi-fw pi-angle-down layout-submenu-toggler\" *ngIf=\"item.items\"></i>\n                    <i [ngClass]=\"item.icon\" class=\"layout-menuitem-icon\"></i>\n                    </a>                  \n                </ng-template>\n              \n              <!-- <ul *ngIf=\"item.items && active\" [@children]=\"(appMain.isHorizontal() && root) ? (active ? 'visible' : 'hidden') : (active ? 'visibleAnimated' : 'hiddenAnimated')\">\n                  <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"item.items\">\n                      <li app-menuitem [item]=\"child\" [index]=\"i\" [parentKey]=\"key\" [class]=\"child.badgeClass\"></li>\n                  </ng-template>\n              </ul> -->\n          </ng-container>\n      ",
        host: {
          '[class.active-menuitem]': 'active'
        },
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('children', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '*',
          'z-index': 100
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '0px',
          'z-index': '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visibleAnimated, visibleAnimated => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
      })], AppMenuitemComponent);
      /***/
    },

    /***/
    "l1DX":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/menusdemo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function l1DX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-fluid\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>MenuBar</h5>\n            <p-menubar [model]=\"tieredItems\">\n                <ng-template pTemplate=\"end\">\n                    <span class=\"p-input-icon-right\">\n                        <input type=\"text\" pInputText placeholder=\"Search\">\n                        <i class=\"pi pi-search\"></i>\n                    </span>\n                </ng-template>\n            </p-menubar>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Breadcrumb</h5>\n            <p-breadcrumb [model]=\"breadcrumbItems\" [home]=\"{icon: 'pi pi-home'}\"></p-breadcrumb>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>Steps</h5>\n            <p-steps [model]=\"stepsItems\" [activeIndex]=\"1\"></p-steps>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>TabMenu</h5>\n            <p-tabMenu [model]=\"tabMenuItems\" [activeItem]=\"tabMenuItems[0]\"></p-tabMenu>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-4\">\n        <div class=\"card\">\n            <h5>TieredMenu</h5>\n            <p-tieredMenu [model]=\"tieredItems\" [style]=\"{'width':'100%','margin-bottom':'20px'}\"></p-tieredMenu>\n        </div>\n\n        <div class=\"card\">\n            <h5>MenuButton</h5>\n            <p-menu #menu [popup]=\"true\" [model]=\"menuItems\" [style]=\"{'width':'250px'}\"></p-menu>\n            <button type=\"button\" pButton icon=\"pi pi-chevron-down\" label=\"Options\" (click)=\"menu.toggle($event)\" style=\"width:auto\"></button>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-4\">\n        <div class=\"card\">\n            <h5>Plain Menu</h5>\n            <p-menu [model]=\"items\" [style]=\"{'width':'100%'}\"></p-menu>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-4\">\n        <div class=\"card\">\n            <h5>ContextMenu</h5>\n            Right click to display.\n\n            <p-contextMenu [global]=\"true\" [model]=\"menuItems\"></p-contextMenu>\n        </div>\n\n        <div class=\"card\">\n            <h5>SlideMenu</h5>\n            <p-slideMenu [model]=\"slideItems\" [viewportHeight]=\"250\" [menuWidth]=\"175\"></p-slideMenu>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>MegaMenu - Horizontal</h5>\n            <p-megaMenu [model]=\"megaMenuItems\"></p-megaMenu>\n\n            <h5>MegaMenu - Vertical</h5>\n            <p-megaMenu [model]=\"megaMenuItems\" orientation=\"vertical\" [style]=\"{'width':'200px'}\"></p-megaMenu>\n        </div>\n    </div>\n\n\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>PanelMenu</h5>\n            <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "lVmz":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.topbar.component.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function lVmz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p-toast key=\"tst\"></p-toast>\r\n<div class=\"layout-topbar\">\r\n    <div class=\"layout-topbar-wrapper\">\r\n        <div class=\"layout-topbar-left\">\r\n            <!-- <div class=\"layout-topbar-logo-wrapper\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"layout-topbar-logo\">\r\n\t\t\t\t\t\t\t<img src=\"assets/layout/images/logo-mirage@2x.png\" alt=\"mirage-layout\" />\r\n\t\t\t\t\t\t\t<span class=\"app-name\"> </span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div> -->\r\n\r\n            <a href=\"#\" class=\"sidebar-menu-button\" (click)=\"appMain.onMenuButtonClick($event)\">\r\n                <i class=\"pi pi-bars\"></i>\r\n            </a>\r\n\r\n            <a href=\"#\" class=\"megamenu-mobile-button\" (click)=\"appMain.onMegaMenuMobileButtonClick($event)\">\r\n                <i class=\"pi pi-align-right megamenu-icon\"></i>\r\n            </a>\r\n\r\n            <a href=\"#\" class=\"topbar-menu-mobile-button\" (click)=\"appMain.onTopbarMobileMenuButtonClick($event)\">\r\n                <i class=\"pi pi-ellipsis-v\"></i>\r\n            </a>\r\n\r\n            <div class=\"layout-megamenu-wrapper\">\r\n                <!-- PONER AQUI EL ENLACE AL INICIO -->\r\n                <!-- <a class=\"layout-megamenu-button\" href=\"#\" (click)=\"appMain.onMegaMenuButtonClick($event)\">\r\n\t\t\t\t\t\t\t<i class=\"pi pi-comment\"></i>\r\n\t\t\t\t\t\t\tMega Menu\r\n\t\t\t\t\t\t</a>\t\t\t\t\t\t -->\r\n\r\n                <ul class=\"layout-megamenu\" [ngClass]=\"{'layout-megamenu-active fadeInDown': appMain.megaMenuActive}\" (click)=\"appMain.onMegaMenuClick($event)\">\r\n                    <div class=\"layout-topbar-wrapper\">\r\n                        <div class=\"layout-topbar-left\">\r\n                            <div class=\"p-col-6\">\r\n                                <label>{{'Lenguaje' | translate}}</label>\r\n                            </div>\r\n                            <div class=\"p-col-6\">\r\n                                <p-dropdown [options]=\"idiomas\" (onChange)=\"cambioIdioma($event)\" styleClass=\"p-mb-2 p-mb-md-0\"></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ul>\r\n\r\n                <!-- <ul class=\"layout-megamenu\" [ngClass]=\"{'layout-megamenu-active fadeInDown': appMain.megaMenuActive}\"\r\n                            (click)=\"appMain.onMegaMenuClick($event)\">\r\n\t\t\t\t\t\t\t<li [ngClass]=\"{'active-topmenuitem': activeItem === 1}\" (click)=\"mobileMegaMenuItemClick(1)\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">JavaServer Faces <i class=\"pi pi-angle-down\"></i></a>\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li class=\"active-row \">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"pi pi-circle-on\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n                                        <h5>PrimeFaces</h5>\r\n                                        <span>UI Components for JSF</span>\r\n                                    </span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"pi pi-circle-on\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n                                        <h5>Premium Templates</h5>\r\n                                        <span>UI Components for JSF</span>\r\n                                    </span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"pi pi-circle-on\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n                                        <h5>Extensions</h5>\r\n                                        <span>UI Components for JSF</span>\r\n                                    </span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li [ngClass]=\"{'active-topmenuitem': activeItem === 2}\" (click)=\"mobileMegaMenuItemClick(2)\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Angular <i class=\"pi pi-angle-down\"></i></a>\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"pi pi-circle-on\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n                                        <h5>PrimeNG</h5>\r\n                                        <span>UI Components for Angular</span>\r\n                                    </span>\r\n\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"pi pi-circle-on\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n                                        <h5>Premium Templates</h5>\r\n                                        <span>UI Components for Angular</span>\r\n                                    </span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li [ngClass]=\"{'active-topmenuitem': activeItem === 3}\" (click)=\"mobileMegaMenuItemClick(3)\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">React <i class=\"pi pi-angle-down\"></i></a>\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"pi pi-circle-on\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n                                        <h5>PrimeReact</h5>\r\n                                        <span>UI Components for React</span>\r\n                                    </span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"active-row\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"pi pi-circle-on\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n                                        <h5>Premium Templates</h5>\r\n                                        <span>UI Components for React</span>\r\n                                    </span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul> -->\r\n\r\n\r\n\r\n                <!-- MEGA MENU PERSONALIZADO  -->\r\n                <ul class=\"layout-megamenu\" [ngClass]=\"{'layout-megamenu-active fadeInDown': appMain.megaMenuPerfiles}\" (click)=\"appMain.onMegaMenuPerfilClick($event)\" style=\"margin-left: 10cm;\">\r\n                    <li>\r\n                        <a href=\"#\">{{'Perfíles' | translate}}<i class=\"pi pi-angle-down\"></i></a>\r\n                        <ul>\r\n                            <!-- (onChange)=\"\"  -->\r\n                            <p-dropdown [options]=\"perfiles\" [(ngModel)]='perfilesSelect' (onChange)=\"cambioPerfil($event)\" styleClass=\"p-mb-2 p-mb-md-0\"></p-dropdown>\r\n\r\n                        </ul>\r\n                    </li>\r\n\r\n                </ul>\r\n\r\n\r\n                <!-- MEGA MENU PERSONALIZADO  -->\r\n                <ul class=\"layout-megamenu\" [ngClass]=\"{'layout-megamenu-active fadeInDown': appMain.megaMenuViewJSON}\" (click)=\"appMain.onMegaMenuJSONClick($event)\" style=\"margin-left: 12.3cm;\">\r\n                    <li>\r\n                        <a href=\"#\">{{'Descargar como:' | translate}}<i class=\"pi pi-angle-down\"></i></a>\r\n                        <ul><button pButton pRipple type=\"button\" label=\"JSON\" (click)=\"descargaJSON()\"></button></ul>\r\n                        <ul><button pButton pRipple type=\"button\" label=\"XML\" (click)=\"descargaXML()\"></button></ul>\r\n                        <ul><button pButton pRipple type=\"button\" label=\"ZIP\" (click)=\"descargaZIP()\"></button></ul>\r\n                        <!-- <ul><a mat-raised-button href=\"http://localhost:8000/private/download?hashed_code=aqui iba el sco_-8698188764084338299\">Stackoverflow</a></ul> -->\r\n                    </li>\r\n\r\n                </ul>\r\n\r\n\r\n                <!-- MEGA MENU PERSONALIZADO  \r\n\t\t\t\t\t\t<ul class=\"layout-megamenu\" [ngClass]=\"{'layout-megamenu-active fadeInDown': appMain.megaMenuViewXML}\"\r\n\t\t\t\t\t\t\t(click)=\"appMain.onMegaMenuPerfilClick($event)\" style=\"margin-left: 5cm;\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<h5>ver XML</h5>\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ul>-->\r\n\r\n                <a class=\"layout-megamenu-button\" style=\"margin-left: 30px;\" href=\"#\" (click)=\"runDialog(1)\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t{{\"Previsualización JSON\" | translate }}\r\n\t\t\t\t\t\t</a>\r\n\r\n                <a class=\"layout-megamenu-button\" style=\"margin-left: 30px;\" href=\"#\" (click)=\"runDialog(2)\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t{{\"Previsualización XML\" | translate }}\r\n\t\t\t\t\t\t</a>\r\n\r\n                <a class=\"layout-megamenu-button\" style=\"margin-left: 30px;\" href=\"#\" (click)=\"appMain.onMegamenuButtonPerfiles($event)\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t{{'Perfíles' | translate}}\r\n\t\t\t\t\t\t</a>\r\n\r\n                <a class=\"layout-megamenu-button\" style=\"margin-left: 30px;\" href=\"#\" (click)=\"appMain.onMegamenuButtonJSON($event)\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t{{'Descargar' | translate}}\r\n\t\t\t\t\t\t</a>\r\n\r\n\r\n\r\n\r\n\r\n                <!-- <a class=\"layout-megamenu-button\" href=\"#\" (click)=\"appMain.onMegaMenuButtonClick($event)\">\r\n\t\t\t\t\t\t\t<i class=\"pi pi-comment\"></i>\r\n\t\t\t\t\t\t\tMega Menu\r\n\t\t\t\t\t\t</a> -->\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <!-- ICONOS \"\r\n\t\t\t\t<div class=\"icons\" style=\"padding-top: 2.4%;\">\r\n\t\t\t\t\t\t<div class=\"icon icon-hastag\">\r\n\t\t\t\t\t\t\t<i class=\"pi pi-home\" ></i>\r\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t</div>-->\r\n\r\n        <div class=\"layout-topbar-wrapper\">\r\n            <div class=\"layout-topbar-left\">\r\n\r\n                <ul>\r\n                    <div class=\"icon icon-hastag\">\r\n                        <a href=\"/\"><i class=\"pi pi-home\"></i></a>\r\n                    </div>\r\n                </ul>\r\n                <ul>\r\n                    <li style=\"list-style: none;\">\r\n                        <label>{{'Lenguaje' | translate}}</label>\r\n                        <p-dropdown [options]=\"idiomas\" (onChange)=\"cambioIdioma($event)\" styleClass=\"p-mb-2 p-mb-md-0\"></p-dropdown>\r\n                    </li>\r\n                </ul>\r\n\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<p-dialog id=\"we\" [(visible)]=\"display1\" [style]=\"{width: '80%'}\" header=\"\" [modal]=\"true\" styleClass=\"p-fluid\">\r\n    <ng-template pTemplate=\"content\">\r\n\r\n        <div class=\"p-field\">\r\n            <div *ngIf=\"band; then thenBlock else elseBlock\"></div>\r\n            <ng-template #thenBlock>\r\n                <pre>{{objprincipal |  json }}</pre>\r\n            </ng-template>\r\n\r\n\r\n            <ng-template #elseBlock>\r\n                <!-- <pre><div><a [href]='url'> pulsame</a></div></pre> -->\r\n                <pre>{{objXML }}</pre>\r\n            </ng-template>\r\n\r\n        </div>\r\n    </ng-template>\r\n</p-dialog>";
      /***/
    },

    /***/
    "m++p":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/typography.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid typography-demo\">\n\t<div class=\"p-col-12 p-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<h1>Heading 1</h1>\n\t\t\t<h2>Heading 2</h2>\n\t\t\t<h3>Heading 3</h3>\n\t\t\t<h4>Heading 4</h4>\n\t\t\t<h5>Heading 5</h5>\n\t\t\t<h6>Heading 6</h6>\n\t\t</div>\n\n\t\t<div class=\"card\">\n\t\t\t<h4>Blockquote</h4>\n\t\t\t<blockquote>Libero voluptatum atque exercitationem praesentium provident odit aperiam.</blockquote>\n\t\t</div>\n\t</div>\n\n\t<div class=\"p-col-12 p-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<h4>Paragraph</h4>\n\t\t\t<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptatum atque\n\t\t\t\texercitationem praesentium provident odit aperiam, vitae fugit\n\t\t\t\tdolores nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>\n\t\t</div>\n\n\t\t<div class=\"card\">\n\t\t\t<h4>Text Styles</h4>\n\t\t\t<p><mark>Highlight</mark> text.</p>\n\t\t\t<p><del>Deleted text.</del></p>\n\t\t\t<p><u>Underlined Text</u></p>\n\t\t\t<p><small>Small text.</small></p>\n\t\t\t<p><strong>Bold text.</strong></p>\n\t\t\t<p><em>Italic Text.</em></p>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "mOOp":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/buttondemo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mOOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid button-demo\">\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>Default</h5>\n            <p-button label=\"Submit\" class=\"p-mr-2 p-mb-2\"></p-button>\n            <p-button label=\"Disabled\" disabled=\"true\" class=\"p-mr-2 p-mb-2\"></p-button>\n            <p-button label=\"Link\" styleClass=\"p-button-link p-mr-2\"></p-button>\n\n        </div>\n        <div class=\"card\">\n            <h5>Severities</h5>\n            <button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-secondary p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-success p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-info p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-warning p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-help p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-danger p-mr-2 p-mb-2\"></button>\n        </div>\n        <div class=\"card\">\n            <h5>Text</h5>\n            <button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-secondary p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-success p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-info p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-warning p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-help p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-danger p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Plain\" class=\"p-button-text p-button-plain p-mr-2 p-mb-2\"></button>\n        </div>\n        <div class=\"card\">\n            <h5>Outlined</h5>\n            <button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-button-outlined p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-outlined p-button-secondary p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-outlined p-button-success p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-outlined p-button-info p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-outlined p-button-warning p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-outlined p-button-help p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-outlined p-button-danger p-mr-2 p-mb-2\"></button>\n        </div>\n        <div class=\"card\">\n            <h5>Button Set</h5>\n            <span class=\"p-buttonset\">\n\t\t\t\t<button pButton pRipple label=\"Save\" icon=\"pi pi-check\"></button>\n\t\t\t\t<button pButton pRipple label=\"Delete\" icon=\"pi pi-trash\"></button>\n\t\t\t\t<button pButton pRipple label=\"Cancel\" icon=\"pi pi-times\"></button>\n\t\t\t</span>\n        </div>\n        <div class=\"card\">\n            <h5>SplitButton</h5>\n            <p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-info p-mr-2 p-mb-2\"></p-splitButton>\n            <p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-success p-mr-2 p-mb-2\"></p-splitButton>\n            <p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-warning p-mr-2 p-mb-2\"></p-splitButton>\n            <p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-help p-mr-2 p-mb-2\"></p-splitButton>\n            <p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-danger p-mr-2 p-mb-2\"></p-splitButton>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-6\">\n        <div class=\"card\">\n            <h5>Icons</h5>\n            <p-button icon=\"pi pi-star\" class=\"p-mr-2 p-mb-2\"></p-button>\n            <p-button label=\"Submit\" icon=\"pi pi-bookmark\" class=\"p-mr-2 p-mb-2\"></p-button>\n            <p-button label=\"Submit\" icon=\"pi pi-bookmark\" iconPos=\"right\" class=\"p-mr-2 p-mb-2\"></p-button>\n        </div>\n        <div class=\"card\">\n            <h5>Raised</h5>\n            <button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-button-raised p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-raised p-button-secondary p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-raised p-button-success p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-raised p-button-info p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-raised p-button-warning p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-raised p-button-help p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-raised p-button-danger p-mr-2 p-mb-2\"></button>\n        </div>\n        <div class=\"card\">\n            <h5>Rounded</h5>\n            <button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-rounded p-button-secondary p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-rounded p-button-success p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-rounded p-button-info p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-rounded p-button-warning p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-rounded p-button-help p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-rounded p-button-danger p-mr-2 p-mb-2\"></button>\n        </div>\n        <div class=\"card\">\n            <h5>Rounded Icons</h5>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-check\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-bookmark\" class=\"p-button-rounded p-button-secondary p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-search\" class=\"p-button-rounded p-button-success p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-user\" class=\"p-button-rounded p-button-info p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-bell\" class=\"p-button-rounded p-button-warning p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-heart\" class=\"p-button-rounded p-button-help p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-times\" class=\"p-button-rounded p-button-danger p-mr-2 p-mb-2\"></button>\n        </div>\n        <div class=\"card\">\n            <h5>Rounded Text</h5>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-check\" class=\"p-button-rounded p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-bookmark\" class=\"p-button-rounded p-button-secondary p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-search\" class=\"p-button-rounded p-button-success p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-user\" class=\"p-button-rounded p-button-info p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-bell\" class=\"p-button-rounded p-button-warning p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-heart\" class=\"p-button-rounded p-button-help p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-times\" class=\"p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-filter\" class=\"p-button-rounded p-button-text p-button-plain p-mr-2 p-mb-2\"></button>\n        </div>\n        <div class=\"card\">\n            <h5>Rounded Outlined</h5>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-check\" class=\"p-button-rounded p-button-outlined p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-bookmark\" class=\"p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-search\" class=\"p-button-rounded p-button-success p-button-outlined p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-user\" class=\"p-button-rounded p-button-info p-button-outlined p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-bell\" class=\"p-button-rounded p-button-warning p-button-outlined p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-heart\" class=\"p-button-rounded p-button-help p-button-outlined p-mr-2 p-mb-2\"></button>\n            <button pButton pRipple type=\"button\" icon=\"pi pi-times\" class=\"p-button-rounded p-button-danger p-button-outlined p-mr-2 p-mb-2\"></button>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "mqcR":
    /*!***************************************!*\
      !*** ./src/app/app.main.component.ts ***!
      \***************************************/

    /*! exports provided: AppMainComponent */

    /***/
    function mqcR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMainComponent", function () {
        return AppMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.main.component.html */
      "fkzr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.menu.service */
      "axq9");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppMainComponent = /*#__PURE__*/function () {
        function AppMainComponent(renderer, menuService, primengConfig, app, router) {
          _classCallCheck(this, AppMainComponent);

          this.renderer = renderer;
          this.menuService = menuService;
          this.primengConfig = primengConfig;
          this.app = app;
          this.router = router;
          this.brodCastChnage = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
          this.router.navigateByUrl("");
        }

        _createClass(AppMainComponent, [{
          key: "setGeneral",
          value: function setGeneral(param) {
            this.enableGeneral = param;
          }
        }, {
          key: "onLayoutClick",
          value: function onLayoutClick() {
            if (!this.topbarItemClick) {
              this.activeTopbarItem = null;
              this.topbarMenuActive = false;
            }

            if (!this.rightPanelClick) {
              this.rightPanelActive = false;
            }

            if (!this.megaMenuClick) {
              this.megaMenuActive = false;
            } // Agregado para menu personalizado


            if (!this.megaMenuPerfilesClick) {
              this.megaMenuPerfiles = false;
            }

            if (!this.megaMenuViewJSONClick) {
              this.megaMenuViewJSON = false;
            }

            if (!this.megaMenuViewXMLClick) {
              this.megaMenuViewXML = false;
            }

            if (!this.megaMenuMobileClick) {
              this.megaMenuMobileActive = false;
            }

            if (!this.menuClick) {
              if (this.isHorizontal()) {
                this.menuService.reset();
              }

              if (this.menuMobileActive) {
                this.menuMobileActive = false;
              }

              this.menuHoverActive = false;
            }

            if (this.configActive && !this.configClick) {
              this.configActive = false;
            }

            this.configClick = false;
            this.menuClick = false;
            this.topbarItemClick = false;
            this.megaMenuClick = false;
            this.megaMenuPerfilesClick = false;
            this.megaMenuViewJSONClick = false;
            this.megaMenuViewXMLClick = false;
            this.megaMenuMobileClick = false;
            this.rightPanelClick = false;
          } // saveInfoGeneral(){
          //     this.generalcom.saveInfo();
          // }

        }, {
          key: "onMegaMenuButtonClick",
          value: function onMegaMenuButtonClick(event) {
            this.megaMenuClick = true;
            this.megaMenuActive = !this.megaMenuActive;
            event.preventDefault();
          }
        }, {
          key: "onMegamenuButtonPerfiles",
          value: function onMegamenuButtonPerfiles(event) {
            this.megaMenuPerfilesClick = true;
            this.megaMenuPerfiles = !this.megaMenuPerfiles;
            event.preventDefault();
          }
        }, {
          key: "cambioPerfil",
          value: function cambioPerfil() {
            this.brodCastChnage.next('something'); //PARA APRECIAR LOS CAMBIOS EN LA BARRA LATERAL         
          }
        }, {
          key: "onMegamenuButtonJSON",
          value: function onMegamenuButtonJSON(event) {
            this.megaMenuViewJSONClick = true;
            this.megaMenuViewJSON = !this.megaMenuViewJSON;
            event.preventDefault();
          }
        }, {
          key: "onMegamenuButtonXML",
          value: function onMegamenuButtonXML(event) {
            this.megaMenuViewXMLClick = true;
            this.megaMenuViewXML = !this.megaMenuViewXML;
            event.preventDefault();
          }
        }, {
          key: "onMegaMenuPerfilClick",
          value: function onMegaMenuPerfilClick(event) {
            this.megaMenuPerfilesClick = true;
            event.preventDefault();
          }
        }, {
          key: "onMegaMenuJSONClick",
          value: function onMegaMenuJSONClick(event) {
            this.megaMenuViewJSONClick = true;
            event.preventDefault();
          }
        }, {
          key: "onMegaMenuXMLClick",
          value: function onMegaMenuXMLClick(event) {
            this.megaMenuViewXMLClick = true;
            event.preventDefault();
          }
        }, {
          key: "onMegaMenuClick",
          value: function onMegaMenuClick(event) {
            this.megaMenuClick = true;
            event.preventDefault();
          }
        }, {
          key: "onTopbarItemClick",
          value: function onTopbarItemClick(event, item) {
            this.topbarItemClick = true;

            if (this.activeTopbarItem === item) {
              this.activeTopbarItem = null;
            } else {
              this.activeTopbarItem = item;
            }

            event.preventDefault();
          }
        }, {
          key: "onRightPanelButtonClick",
          value: function onRightPanelButtonClick(event) {
            this.rightPanelClick = true;
            this.rightPanelActive = !this.rightPanelActive;
            event.preventDefault();
          }
        }, {
          key: "onRightPanelClose",
          value: function onRightPanelClose(event) {
            this.rightPanelActive = false;
            this.rightPanelClick = false;
            event.preventDefault();
          }
        }, {
          key: "onRightPanelClick",
          value: function onRightPanelClick(event) {
            this.rightPanelClick = true;
            event.preventDefault();
          }
        }, {
          key: "onTopbarMobileMenuButtonClick",
          value: function onTopbarMobileMenuButtonClick(event) {
            this.topbarMobileMenuClick = true;
            this.topbarMobileMenuActive = !this.topbarMobileMenuActive;
            event.preventDefault();
          }
        }, {
          key: "onMegaMenuMobileButtonClick",
          value: function onMegaMenuMobileButtonClick(event) {
            this.megaMenuMobileClick = true;
            this.megaMenuMobileActive = !this.megaMenuMobileActive;
            event.preventDefault();
          }
        }, {
          key: "onMenuButtonClick",
          value: function onMenuButtonClick(event) {
            this.menuClick = true;
            this.topbarMenuActive = false;

            if (this.isMobile()) {
              this.menuMobileActive = !this.menuMobileActive;
            }

            event.preventDefault();
          }
        }, {
          key: "onSidebarClick",
          value: function onSidebarClick(event) {
            this.menuClick = true;
          }
        }, {
          key: "onToggleMenuClick",
          value: function onToggleMenuClick(event) {
            this.staticMenuActive = !this.staticMenuActive;
            event.preventDefault();
          }
        }, {
          key: "onConfigClick",
          value: function onConfigClick(event) {
            this.configClick = true;
          }
        }, {
          key: "onRippleChange",
          value: function onRippleChange(event) {
            this.app.ripple = event.checked;
            this.primengConfig = event.checked;
          }
        }, {
          key: "isDesktop",
          value: function isDesktop() {
            return window.innerWidth > 991;
          }
        }, {
          key: "isMobile",
          value: function isMobile() {
            return window.innerWidth <= 991;
          }
        }, {
          key: "isHorizontal",
          value: function isHorizontal() {
            return this.app.horizontalMenu === true;
          }
        }]);

        return AppMainComponent;
      }();

      AppMainComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _app_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeNGConfig"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      AppMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-main',
        template: _raw_loader_app_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('mask-anim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 0.8
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('250ms cubic-bezier(0, 0, 0.2, 1)'))])]
      })], AppMainComponent);
      /***/
    },

    /***/
    "mssk":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/general/general.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mssk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p-toast key=\"tst\"></p-toast>\r\n<div class=\"p-grid \">\r\n\r\n\r\n    <div *ngIf=\"ObjOptions.o1_1\" class=\"p-col-12\">\r\n        <h5>{{\"Identificador\" | translate}}</h5>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"p-fluid p-formgrid p-grid\">\r\n                <label for=\"catalogo\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Catálogo\" | translate}}</label>\r\n                <div class=\"p-field p-col\">\r\n                    <input [(ngModel)]='general_obj[\"Identifier\"][\"Catalog\"]' type=\"text\" pInputText>\r\n                </div>\r\n                <label for=\"entrada\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Entrada\" | translate}}</label>\r\n                <div class=\"p-field p-col\">\r\n                    <input [(ngModel)]='general_obj[\"Identifier\"][\"Entry\"]' id=\"entrada\" type=\"text\" pInputText>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"ObjOptions.o1_2\" class=\"p-col-12\">\r\n        <h5>{{\"Título\" | translate}}</h5>\r\n        <div class=\"card\">\r\n            <div class=\"p-fluid p-formgrid p-grid\">\r\n                <div class=\"p-field p-col-12 \">\r\n                    <label for=\"titulo\">{{\"Título\" | translate}}</label>\r\n                    <input [(ngModel)]='general_obj[\"Title\"]' id=\"titulo\" type=\"text\" pInputText>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div *ngIf=\"ObjOptions.o1_5\" class=\"p-col-12\">\r\n        <h5>{{\"Palabra Clave\" | translate}}</h5>\r\n        <div class=\"card\">\r\n            <div class=\"p-fluid p-formgrid p-grid\">\r\n                <div class=\"p-field p-col-12 \">\r\n                    <!-- <label for=\"palabraclave1\">{{\"Palabra Clave\" | translate}}</label>\r\n                     <input id=\"palabraclave1\" type=\"text\" pInputText> -->\r\n                    <button pButton pRipple type=\"button\" icon=\"pi pi-plus\" title=\"Add Column\" (click)=\"addPalabra()\" [disabled]=\"columns.length === 20\" class=\"p-mr-2\"></button>\r\n                    <button pButton pRipple type=\"button\" icon=\"pi pi-minus\" title=\"Remove Column\" (click)=\"removeColumn()\" [disabled]=\"columns.length === 1\"></button>\r\n\r\n                    <div class=\"p-col-12 p-md-10\" *ngFor=\"let col of columns; let i\" [@animation]=\"'visible'\">\r\n                        <div class=\"box\">{{i}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"ObjOptions.o1_6\" class=\"p-col-12\">\r\n        <h5>{{\"Ámbito\" | translate}}</h5>\r\n        <div class=\"card\">\r\n            <div class=\"p-fluid p-formgrid p-grid\">\r\n                <div class=\"p-field p-col-12 \">\r\n                    <label for=\"ambito\">{{\"Ámbito\" | translate}}</label>\r\n                    <!-- [(ngModel)]='general_obj[\"Title\"]' -->\r\n                    <input id=\"ambito\" [(ngModel)]='general_obj[\"Coverage\"]' type=\"text\" pInputText>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"ObjOptions.o1_7\" class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>{{\"Estructura\" | translate}}</h5>\r\n            <div class=\"p-fluid\">\r\n                <p-dropdown [(ngModel)]='estructuraSelect' [options]='estructuras' name='estructuraSelect' (onChange)=\"cambioEstructura()\" placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\r\n                    <ng-template pTemplate=\"item\" let-item>\r\n                        {{item.label| translate }}\r\n                    </ng-template>\r\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\r\n                        {{selectedItem.label | translate }}\r\n                    </ng-template>\r\n                </p-dropdown>\r\n            </div>\r\n            <!-- <p-dropdown [(ngModel)]=\"choosedOption\" [options]=\"sortOptions \">\r\n                <ng-template pTemplate=\"item\" let-item>\r\n                    {{item.label }}\r\n                </ng-template>\r\n                <ng-template let-selectedItem pTemplate=\"selectedItem\">\r\n                    {{item.selectedItem }}\r\n                </ng-template>\r\n            </p-dropdown> -->\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"ObjOptions.o1_8\" class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>{{\"Nivel de Agregación\" | translate }}</h5>\r\n            <div class=\"p-fluid\">\r\n                <!-- [(ngModel)]=\"selectedDrop\" -->\r\n                <p-dropdown [options]=\"nivelesAgregacion\" [(ngModel)]='nivel_select' name='nivel_select' (onChange)=\"cambio_nivel()\" placeholder='{{\"Seleccionar\" | translate}} ' [showClear]=\"true\">\r\n                    <ng-template pTemplate=\"item\" let-item>\r\n                        {{item.label| translate }}\r\n                    </ng-template>\r\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\r\n                        {{selectedItem.label | translate }}\r\n                    </ng-template>\r\n                </p-dropdown>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <p-dialog [(visible)]=\"palabraDialog\" [style]=\"{width: '450px'}\" header=\"\" [modal]=\"true\" styleClass=\"p-fluid\">\r\n        <ng-template pTemplate=\"content\">\r\n\r\n            <div class=\"p-field\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" pInputText id=\"nombrePalabraK\" [(ngModel)]=\"palabra\" required autofocus />\r\n                <!-- <small class=\"p-invalid\" *ngIf=\"![(ngModel)]=\"\"\">Name is required.</small> -->\r\n            </div>\r\n\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"footer\">\r\n            <button pButton pRipple label=\"Cancel\" icon=\"pi pi-times\" class=\"p-button-text\" (click)=\"cancelPalabra()\"></button>\r\n            <button pButton pRipple label=\"Save\" icon=\"pi pi-check\" class=\"p-button-text\" (click)=\"savePalabra()\"></button>\r\n        </ng-template>\r\n    </p-dialog>\r\n\r\n    <!-- <p-confirmDialog [style]=\"{width: '450px'}\"></p-confirmDialog> -->\r\n\r\n\r\n</div>";
      /***/
    },

    /***/
    "nWU1":
    /*!*************************************************!*\
      !*** ./src/app/demo/view/listdemo.component.ts ***!
      \*************************************************/

    /*! exports provided: ListDemoComponent */

    /***/
    function nWU1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListDemoComponent", function () {
        return ListDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_listdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./listdemo.component.html */
      "ZIYP");
      /* harmony import */


      var _listdemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./listdemo.scss */
      "jZwK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");

      var ListDemoComponent = /*#__PURE__*/function () {
        function ListDemoComponent(productService, breadcrumbService) {
          _classCallCheck(this, ListDemoComponent);

          this.productService = productService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'List',
            routerLink: ['/uikit/list']
          }]);
        }

        _createClass(ListDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.productService.getProducts().then(function (data) {
              return _this23.products = data;
            });
            this.sourceCities = [{
              name: 'San Francisco',
              code: 'SF'
            }, {
              name: 'London',
              code: 'LDN'
            }, {
              name: 'Paris',
              code: 'PRS'
            }, {
              name: 'Istanbul',
              code: 'IST'
            }, {
              name: 'Berlin',
              code: 'BRL'
            }, {
              name: 'Barcelona',
              code: 'BRC'
            }, {
              name: 'Rome',
              code: 'RM'
            }];
            this.targetCities = [];
            this.orderCities = [{
              name: 'San Francisco',
              code: 'SF'
            }, {
              name: 'London',
              code: 'LDN'
            }, {
              name: 'Paris',
              code: 'PRS'
            }, {
              name: 'Istanbul',
              code: 'IST'
            }, {
              name: 'Berlin',
              code: 'BRL'
            }, {
              name: 'Barcelona',
              code: 'BRC'
            }, {
              name: 'Rome',
              code: 'RM'
            }];
            this.sortOptions = [{
              label: 'Price High to Low',
              value: '!price'
            }, {
              label: 'Price Low to High',
              value: 'price'
            }];
          }
        }, {
          key: "onSortChange",
          value: function onSortChange(event) {
            var value = event.value;
            console.log("naty-< ", event.value);

            if (value.indexOf('!') === 0) {
              this.sortOrder = -1;
              this.sortField = value.substring(1, value.length);
            } else {
              this.sortOrder = 1;
              this.sortField = value;
            }
          }
        }]);

        return ListDemoComponent;
      }();

      ListDemoComponent.ctorParameters = function () {
        return [{
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }];
      };

      ListDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_listdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listdemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListDemoComponent);
      /***/
    },

    /***/
    "p563":
    /*!************************************************!*\
      !*** ./src/app/utilities/spacing.component.ts ***!
      \************************************************/

    /*! exports provided: SpacingComponent */

    /***/
    function p563(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpacingComponent", function () {
        return SpacingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spacing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spacing.component.html */
      "pl9w");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var SpacingComponent = function SpacingComponent(breadcrumbService) {
        _classCallCheck(this, SpacingComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'Spacing',
          routerLink: ['/utilities/spacing']
        }]);
      };

      SpacingComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      SpacingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_spacing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["i:not([class~=\"pi\"]) {\n        background-color: var(--surface-b);\n        color: var(--primary-color);\n        font-family: Monaco, courier, monospace;\n        font-style: normal;\n        font-size: 12px;\n        padding: 2px 4px;\n        letter-spacing: .5px;\n        border-radius: 3px;\n        font-weight: 600;\n        margin: 0 2px;\n    }"]
      })], SpacingComponent);
      /***/
    },

    /***/
    "pMwP":
    /*!***************************************!*\
      !*** ./src/app/breadcrumb.service.ts ***!
      \***************************************/

    /*! exports provided: BreadcrumbService */

    /***/
    function pMwP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbService", function () {
        return BreadcrumbService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var BreadcrumbService = /*#__PURE__*/function () {
        function BreadcrumbService() {
          _classCallCheck(this, BreadcrumbService);

          this.itemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.itemsHandler = this.itemsSource.asObservable();
        }

        _createClass(BreadcrumbService, [{
          key: "setItems",
          value: function setItems(items) {
            this.itemsSource.next(items);
          }
        }]);

        return BreadcrumbService;
      }();

      BreadcrumbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BreadcrumbService);
      /***/
    },

    /***/
    "pRB7":
    /*!*****************************************************!*\
      !*** ./src/app/pages/app.accessdenied.component.ts ***!
      \*****************************************************/

    /*! exports provided: AppAccessdeniedComponent */

    /***/
    function pRB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppAccessdeniedComponent", function () {
        return AppAccessdeniedComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_accessdenied_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.accessdenied.component.html */
      "KaQX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppAccessdeniedComponent = function AppAccessdeniedComponent() {
        _classCallCheck(this, AppAccessdeniedComponent);
      };

      AppAccessdeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-accessdenied',
        template: _raw_loader_app_accessdenied_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppAccessdeniedComponent);
      /***/
    },

    /***/
    "pf31":
    /*!*******************************************************!*\
      !*** ./src/app/paginas/tecnica/tecnica.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function pf31(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNuaWNhLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "pl9w":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/spacing.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function pl9w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"p-grid spacing-demo\">\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h3>Spacing</h3>\n\t\t\t<p><a [routerLink]=\"['/grid']\">PrimeFlex</a> provides various spacing utilities to modify\n\t\t\t\tan element's layout.</p>\n\n\t\t\t<h5>Classes</h5>\n\t\t\t<p>The spacing classes use the <i>p-&#123;property&#125;&#123;position&#125;-&#123;value&#125;</i> syntax whereas for responsive\n\t\t\t\tvalues <i>p-&#123;property&#125;&#123;position&#125;-&#123;breakpoint&#125;-&#123;value&#125;</i> format is used.</p>\n\n\t\t\t<h5>Property</h5>\n\t\t\t<p>Property can either be a margin or a padding.</p>\n\t\t\t<ul>\n\t\t\t\t<li><b>m</b>: margin</li>\n\t\t\t\t<li><b>p</b>: padding</li>\n\t\t\t</ul>\n\n\t\t\t<h5>Position</h5>\n\t\t\t<p>Position are available for the individual sides, the x-y axis or blank for the shortand of all sides.</p>\n\t\t\t<ul>\n\t\t\t\t<li><b>t</b>: top</li>\n\t\t\t\t<li><b>b</b>: bottom</li>\n\t\t\t\t<li><b>l</b>: left</li>\n\t\t\t\t<li><b>r</b>: right</li>\n\t\t\t\t<li><b>x</b>: left and right</li>\n\t\t\t\t<li><b>y</b>: top and bottom</li>\n\t\t\t\t<li><b>blank</b>: all sides</li>\n\t\t\t</ul>\n\n\t\t\t<h5>Value</h5>\n\t\t\t<p>Value field varies from 0 to 6 where default value of the <i>$spacer</i> is 1rem. The special <i>auto</i> value is available to margins only and used to center elements.</p>\n\t\t\t<ul>\n\t\t\t\t<li><b>0</b>: $spacer * 0</li>\n\t\t\t\t<li><b>1</b>: $spacer * .25</li>\n\t\t\t\t<li><b>2</b>: $spacer * .5</li>\n\t\t\t\t<li><b>3</b>: $spacer * 1</li>\n\t\t\t\t<li><b>4</b>: $spacer * 1.5</li>\n\t\t\t\t<li><b>5</b>: $spacer * 2</li>\n\t\t\t\t<li><b>6</b>: $spacer * 3</li>\n\t\t\t\t<li><b>auto</b>: auto margin</li>\n\t\t\t</ul>\n\n\t\t\t<h5>Breakpoint</h5>\n\t\t\t<p>Breakpoints define how the spacing should be defined depending on the screen size. Design is mobile first so smaller values\n\t\t\t\tcan also apply to larger values e.g. md also applies to lg or xl if they are not explicitly defined.</p>\n\t\t\t<ul>\n\t\t\t\t<li><b>sm</b>: small screens e.g. phones</li>\n\t\t\t\t<li><b>md</b>: medium screens e.g. tablets</li>\n\t\t\t\t<li><b>lg</b>: large screens e.g. notebooks</li>\n\t\t\t\t<li><b>xl</b>: larger screens .e.g monitors</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"p-col-12 p-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Use Case 1</h5>\n\t\t\t<p>Spacing is a handy utility when elements wrap when screen size get smaller. In example below, when buttons wrap\n\t\t\t\tthey are displayed on top of each other whereas with spacing this issue can easily be resolved.\n\t\t\t</p>\n\n\t\t\t<h6>Without Spacing</h6>\n\t\t\t<button pButton type=\"button\" label=\"Button 1\" style=\"width:250px\" ></button>\n\t\t\t<button pButton type=\"button\" label=\"Button 2\" style=\"width:250px\" ></button>\n\n\t\t\t<h6>With Spacing</h6>\n\t\t\t<button pButton type=\"button\" label=\"Button 1\" style=\"width:250px\" class=\"p-mr-2 p-mb-2\" ></button>\n\t\t\t<button pButton type=\"button\" label=\"Button 2\" style=\"width:250px\" class=\"p-mr-2\"></button>\n\t\t</div>\n\t</div>\n\t<div class=\"p-col-12 p-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Use Case 2</h5>\n\t\t\t<p>Spacing utilities also work seamlessly with responsive PrimeFlex grid utilty. Example below demonstrates a case where on a smaller screen inputs receive a margin to position themselves\n\t\t\t\tseparately in stacked mode, reduce the dimension of the window to view the difference.\n\t\t\t</p>\n\n\t\t\t<h6>Without Spacing</h6>\n\t\t\t<div class=\"p-grid p-formgrid p-fluid\">\n\t\t\t\t<div class=\"p-col-12 p-lg-4\">\n\t\t\t\t\t<input pInputText />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-col-12 p-lg-4\">\n\t\t\t\t\t<input pInputText />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-col-12 p-lg-4\">\n\t\t\t\t\t<input pInputText />\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<h6>With Spacing</h6>\n\t\t\t<div class=\"p-grid p-formgrid p-fluid\">\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\n\t\t\t\t\t<input pInputText />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\n\t\t\t\t\t<input pInputText />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\n\t\t\t\t\t<input pInputText />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "qBte":
    /*!************************************************!*\
      !*** ./src/app/utilities/widgets.component.ts ***!
      \************************************************/

    /*! exports provided: WidgetsComponent */

    /***/
    function qBte(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function () {
        return WidgetsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./widgets.component.html */
      "t7uD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");

      var WidgetsComponent = /*#__PURE__*/function () {
        function WidgetsComponent(breadcrumbService) {
          _classCallCheck(this, WidgetsComponent);

          this.breadcrumbService = breadcrumbService;
          this.activeNews = 1;
          this.breadcrumbService.setItems([{
            label: 'Utilities'
          }, {
            label: 'Widgets',
            routerLink: ['/utilities/widgets']
          }]);
        }

        _createClass(WidgetsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.lineChartData = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'Sapphire',
                data: [1, 2, 5, 3, 12, 7, 15],
                borderColor: ['#45b0d5'],
                borderWidth: 3,
                fill: false
              }, {
                label: 'Roma',
                data: [3, 7, 2, 17, 15, 13, 19],
                borderColor: ['#d08770'],
                borderWidth: 3,
                fill: false
              }]
            };
            this.lineChartOptions = {
              responsive: true,
              maintainAspectRatio: true,
              fontFamily: '\'Candara\', \'Calibri\', \'Courier\', \'serif\'',
              hover: {
                mode: 'index'
              },
              scales: {
                xAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontColor: '#9199a9'
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontColor: '#9199a9'
                  }
                }]
              },
              legend: {
                display: true,
                labels: {
                  fontColor: '#9199a9'
                }
              }
            };
            this.dropdownYears = [{
              label: '2019',
              value: 2019
            }, {
              label: '2018',
              value: 2018
            }, {
              label: '2017',
              value: 2017
            }, {
              label: '2016',
              value: 2016
            }, {
              label: '2015',
              value: 2015
            }, {
              label: '2014',
              value: 2014
            }];
          }
        }]);

        return WidgetsComponent;
      }();

      WidgetsComponent.ctorParameters = function () {
        return [{
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      WidgetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], WidgetsComponent);
      /***/
    },

    /***/
    "rI0q":
    /*!*****************************************!*\
      !*** ./src/app/app.code.component.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function rI0q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".p-d-flex > div,\n.box {\n  background-color: var(--surface-e);\n  text-align: center;\n  padding: 1rem;\n  border-radius: 4px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-d-flex > div {\n  width: 8rem;\n}\n\ni:not([class~=pi]) {\n  background-color: var(--surface-b);\n  color: var(--primary-color);\n  font-family: Monaco, courier, monospace;\n  font-style: normal;\n  font-size: 12px;\n  padding: 2px 4px;\n  letter-spacing: 0.5px;\n  border-radius: 3px;\n  font-weight: 600;\n  margin: 0 2px;\n}\n\n:host ::ng-deep pre[class*=language-] {\n  box-shadow: none;\n  border: 0 none;\n}\n\n:host ::ng-deep pre[class*=language-]:before, :host ::ng-deep pre[class*=language-]:after {\n  display: none !important;\n}\n\n:host ::ng-deep pre[class*=language-] code {\n  border-left: 10px solid var(--surface-d) !important;\n  box-shadow: none !important;\n  background: var(--surface-b) !important;\n  margin: 1em 0;\n  color: var(--text-color);\n  font-size: 14px;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.tag, :host ::ng-deep pre[class*=language-] code .token.keyword {\n  color: #2196F3 !important;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.attr-name, :host ::ng-deep pre[class*=language-] code .token.attr-string {\n  color: #2196F3 !important;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.attr-value {\n  color: #4CAF50 !important;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.punctuation {\n  color: var(--text-color);\n}\n\n:host ::ng-deep pre[class*=language-] code .token.operator, :host ::ng-deep pre[class*=language-] code .token.string {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUMsa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0FBQ0Q7O0FBRUE7RUFDQyxXQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRDs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUNDO0VBQ0Msd0JBQUE7QUFDRjs7QUFFQztFQUNDLG1EQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHRztFQUVDLHlCQUFBO0FBRko7O0FBS0c7RUFFQyx5QkFBQTtBQUpKOztBQU9HO0VBQ0MseUJBQUE7QUFMSjs7QUFRRztFQUNDLHdCQUFBO0FBTko7O0FBU0c7RUFFQyx1QkFBQTtBQVJKIiwiZmlsZSI6ImFwcC5jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtZC1mbGV4ID4gZGl2LFxuLmJveCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtZSk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzogMXJlbTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XG59XG5cbi5wLWQtZmxleCA+IGRpdiB7XG5cdHdpZHRoOiA4cmVtO1xufVxuXG5pOm5vdChbY2xhc3N+PVwicGlcIl0pIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1iKTtcblx0Y29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRmb250LWZhbWlseTogTW9uYWNvLCBjb3VyaWVyLCBtb25vc3BhY2U7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRwYWRkaW5nOiAycHggNHB4O1xuXHRsZXR0ZXItc3BhY2luZzogLjVweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRtYXJnaW46IDAgMnB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlcjogMCBub25lO1xuXG5cdCY6YmVmb3JlLCAmOmFmdGVyIHtcblx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cdH1cblxuXHRjb2RlIHtcblx0XHRib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpICFpbXBvcnRhbnQ7XG5cdFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtYikgIWltcG9ydGFudDtcblx0XHRtYXJnaW46IDFlbSAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cblx0XHQudG9rZW4ge1xuXHRcdFx0Ji50YWcsXG5cdFx0XHQmLmtleXdvcmQge1xuXHRcdFx0XHRjb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQmLmF0dHItbmFtZSxcblx0XHRcdCYuYXR0ci1zdHJpbmcge1xuXHRcdFx0XHRjb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQmLmF0dHItdmFsdWUge1xuXHRcdFx0XHRjb2xvcjogIzRDQUY1MCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQmLnB1bmN0dWF0aW9uIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHQmLm9wZXJhdG9yLFxuXHRcdFx0Ji5zdHJpbmcge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "s5Nh":
    /*!**********************************************!*\
      !*** ./src/app/utilities/icons.component.ts ***!
      \**********************************************/

    /*! exports provided: IconsComponent */

    /***/
    function s5Nh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconsComponent", function () {
        return IconsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./icons.component.html */
      "Joch");
      /* harmony import */


      var _icons_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./icons.scss */
      "H1jX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../breadcrumb.service */
      "pMwP");
      /* harmony import */


      var _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../demo/service/iconservice */
      "4Sr2");

      var IconsComponent = /*#__PURE__*/function () {
        function IconsComponent(iconService, breadcrumbService) {
          _classCallCheck(this, IconsComponent);

          this.iconService = iconService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Utilities'
          }, {
            label: 'Icons',
            routerLink: ['/utilities/icons']
          }]);
        }

        _createClass(IconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.iconService.getIcons().subscribe(function (data) {
              var icons = data;
              icons.sort(function (icon1, icon2) {
                if (icon1.properties.name < icon2.properties.name) {
                  return -1;
                } else if (icon1.properties.name < icon2.properties.name) {
                  return 1;
                } else {
                  return 0;
                }
              });
              _this24.icons = icons;
              _this24.filteredIcons = data;
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter(event) {
            var searchText = event.target.value;

            if (!searchText) {
              this.filteredIcons = this.icons;
            } else {
              this.filteredIcons = this.icons.filter(function (it) {
                return it.icon.tags[0].includes(searchText);
              });
            }
          }
        }]);

        return IconsComponent;
      }();

      IconsComponent.ctorParameters = function () {
        return [{
          type: _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_5__["IconService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }];
      };

      IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_icons_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IconsComponent);
      /***/
    },

    /***/
    "sGLk":
    /*!***********************************************************!*\
      !*** ./src/app/paginas/metadatos/metadatos.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function sGLk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRhZGF0b3MuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "t7uD":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/widgets.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function t7uD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4>Reusable CSS widgets for your applications.</h4>\n\n<div class=\"p-grid\">\n\t<div class=\"p-col-12 p-xl-3 p-md-6\">\n        <div class=\"p-grid p-nogutter widget-overview-box overview-box-1\">\n            <div class=\"p-col-3 overview-box-icon\">\n                <img src=\"assets/layout/images/dashboard/icon-messages.svg\" alt=\"mirage-layout\" />\n            </div>\n            <div class=\"p-col-6 overview-box-text\">\n                <h5>Messages</h5>\n                <span>24 new since last visit</span>\n            </div>\n            <div class=\"p-col-3 overview-box-status\">\n                440\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-xl-3 p-md-6\">\n        <div class=\"p-grid p-nogutter widget-overview-box overview-box-2\">\n            <div class=\"p-col-3 overview-box-icon\">\n                <img src=\"assets/layout/images/dashboard/icon-checkins.svg\" alt=\"mirage-layout\" />\n            </div>\n            <div class=\"p-col-6 overview-box-text\">\n                <h5>Check-ins</h5>\n                <span>48 new since last visit</span>\n            </div>\n            <div class=\"p-col-3 overview-box-status\">\n                532\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-xl-3 p-md-6\">\n        <div class=\"p-grid p-nogutter widget-overview-box overview-box-3\">\n            <div class=\"p-col-3 overview-box-icon\">\n                <img src=\"assets/layout/images/dashboard/icon-filessynced.svg\" alt=\"mirage-layout\" />\n            </div>\n            <div class=\"p-col-6 overview-box-text\">\n                <h5>Files Synced</h5>\n                <span>32,56 / 250 GB</span>\n            </div>\n            <div class=\"p-col-3 overview-box-status\">\n                28\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-xl-3 p-md-6\">\n        <div class=\"p-grid p-nogutter widget-overview-box overview-box-4\">\n            <div class=\"p-col-3 overview-box-icon\">\n                <img src=\"assets/layout/images/dashboard/icon-usersonline.png\" alt=\"mirage-layout\" />\n            </div>\n            <div class=\"p-col-6 overview-box-text\">\n                <h5>Users Online</h5>\n                <span>72 new user this week</span>\n            </div>\n            <div class=\"p-col-3 overview-box-status\">\n                256\n            </div>\n        </div>\n    </div>\n\t<div class=\"p-col-12 p-lg-6 \">\n        <div class=\"p-grid p-dir-col p-nogutter\">\n            <div class=\"p-col-12 \">\n                <div class=\"card widget-statistics\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 p-md-8\">\n                            <h5>Statistics</h5>\n                        </div>\n                        <div class=\"p-col-6 p-md-4 dropdown\">\n                            <p-dropdown [options]=\"dropdownYears\" [(ngModel)]=\"selectedYear\"></p-dropdown>\n                        </div>\n                    </div>\n                    <p-chart id=\"dashboard-chart\" type=\"line\" [data]=\"lineChartData\" [options]=\"lineChartOptions\"></p-chart>\n                </div>\n            </div>\n            <div class=\"p-col-12 widget-news\">\n                <div class=\"news-row\" [ngStyle]=\"{'transform': activeNews === 1 ? 'translate3d(0px, 0px, 0px)':activeNews === 2\n                ?'translate3d(-100%, 0px, 0px)':'translate3d(-200%, 0px, 0px)'}\">\n                    <div class=\"card news news-1 active-news\">\n                        <div class=\"news-title\">\n                            <h5>NEWS</h5>\n                        </div>\n                        <h6>3D-printed robot hand plays the piano</h6>\n                        <p>Scientists have developed a 3D-printed robotic hand which can play simple musical\n                            phrases\n                            on the piano by just moving its wrist</p>\n                        <div class=\"p-grid link\">\n                            <div class=\"p-col-9\">\n                                <a href=\"\">Learn more at Mirage News Central <i\n                                    class=\"pi pi-arrow-right\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card news news-2\">\n                        <div class=\"news-title\">\n                            <h5>NEWS</h5>\n                        </div>\n                        <h6>Scientists are trying to open a portal to a parallel universe</h6>\n                        <p>Does a mysterious mirror world lurk in the shadows of perceived reality? Could 2019\n                            be\n                            the year humans open the first portal to a shadowy dimension which mirrors our own\n                            world?</p>\n                        <div class=\"p-grid link\">\n                            <div class=\"p-col-9\">\n                                <a href=\"\">Learn more at Independent<i class=\"pi pi-arrow-right\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card news news-3\">\n                        <div class=\"news-title\">\n                            <h5>NEWS</h5>\n                        </div>\n                        <h6>Another mysterious deep space signal traced to the other side of the universe</h6>\n                        <p>Fast radio bursts suddenly seem to be everywhere in the news, but they're still\n                            coming\n                            from very far away.</p>\n                        <div class=\"p-grid link\">\n                            <div class=\"p-col-9\">\n                                <a href=\"\">Learn more at CNET <i class=\"pi pi-arrow-right\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"link-points\">\n                    <div class=\"p-grid points\">\n                        <div class=\"p-col-4 point point-1\" [ngClass]=\"{'active-point': activeNews === 1}\" (click)=\"activeNews = 1\"></div>\n                        <div class=\"p-col-4 point point-2 \" [ngClass]=\"{'active-point': activeNews === 2}\" (click)=\"activeNews = 2\"></div>\n                        <div class=\"p-col-4 point point-3 \" [ngClass]=\"{'active-point': activeNews === 3}\" (click)=\"activeNews = 3\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"p-grid\">\n            <div class=\"p-col-12\">\n                <div class=\"card widget-timeline\">\n                    <h5>Timeline</h5>\n                    <div class=\"timeline-row\">\n                        <div class=\"p-grid p-nogutter\">\n                            <div class=\"p-col-1\">\n                                <div class=\"timeline-icon camera-icon\">\n                                    <i class=\"pi pi-camera\"></i>\n                                </div>\n                            </div>\n                            <div class=\"p-col-11\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-10 timeline-content\">\n                                        <h6>Katherine May</h6>\n                                        <span>Lorem ipsun dolor amet</span>\n                                    </div>\n                                    <div class=\"p-col-2 timeline-time\">\n                                        <span>5 mins</span>\n                                    </div>\n                                    <div class=\"p-col-12 timeline-images\">\n                                        <div class=\"p-grid \">\n                                            <div class=\"p-col-6 p-lg-3\">\n                                                <img src=\"assets/layout/images/dashboard/photo-1.png\" alt=\"mirage-layout\" />\n                                            </div>\n                                            <div class=\"p-col-6 p-lg-3\">\n                                                <img src=\"assets/layout/images/dashboard/photo-2.png\" alt=\"mirage-layout\" />\n                                            </div>\n                                            <div class=\"p-col-6 p-lg-3\">\n                                                <img src=\"assets/layout/images/dashboard/photo-3.png\" alt=\"mirage-layout\" />\n                                            </div>\n                                            <div class=\"p-col-6 p-lg-3\">\n                                                <img src=\"assets/layout/images/dashboard/photo-4.png\" alt=\"mirage-layout\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"timeline-row\">\n                        <div class=\"p-grid p-nogutter\">\n                            <div class=\"p-col-1\">\n                                <div class=\"timeline-icon comment-icon\">\n                                    <i class=\"pi pi-comment\"></i>\n                                </div>\n                            </div>\n                            <div class=\"p-col-11\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-10 timeline-content\">\n                                        <h6>Brandon Williams</h6>\n                                        <span>Ab nobis, magnam sunt eum. Laudantium, repudiandae,\n                                                    similique!</span>\n                                    </div>\n                                    <div class=\"p-col-2 timeline-time\">\n                                        <span>8 mins</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"timeline-row\">\n                        <div class=\"p-grid p-nogutter\">\n                            <div class=\"p-col-1\">\n                                <div class=\"timeline-icon chart-icon\">\n                                    <i class=\"pi pi-chart-line\"></i>\n                                </div>\n                            </div>\n                            <div class=\"p-col-11\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-10 timeline-content\">\n                                        <h6>Katherine May</h6>\n                                        <span>Omnis veniam quibusdam ratione est repellat qui nam quisquam ab\n                                                    mollitia dolores ullam voluptates, similique, disnissimos.</span>\n                                    </div>\n                                    <div class=\"p-col-2 timeline-time\">\n                                        <span>14 mins</span>\n                                    </div>\n                                    <div class=\"p-col-12 timeline-images\">\n                                        <div class=\"p-grid \">\n                                            <div class=\"p-col-12 \">\n                                                <div class=\"new\">\n                                                    New!\n                                                </div>\n                                                <img src=\"assets/layout/images/dashboard/photo-5.png\" alt=\"mirage-layout\" style=\"min-height: 150px;\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"timeline-row\">\n                        <div class=\"p-grid p-nogutter\">\n                            <div class=\"p-col-1\">\n                                <div class=\"timeline-icon comment-icon\">\n                                    <i class=\"pi pi-comment\"></i>\n                                </div>\n                            </div>\n                            <div class=\"p-col-11\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-10 timeline-content\">\n                                        <h6>Lara Cohen</h6>\n                                        <span>Quibusdam ratione est repellat qui nam quisquam veniam quibusdam\n                                                    ratione</span>\n                                    </div>\n                                    <div class=\"p-col-2 timeline-time\">\n                                        <span>1 day</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4 p-md-6\">\n        <div class=\"card widget-tasks\">\n            <div class=\"card-header\">\n                <div class=\"title\">\n                    <h5>Tasks</h5>\n                </div>\n                <div class=\" task-info\">\n                    <span>You have</span><span class=\"highlighted\"> 2 tasks</span><span> today</span>\n                </div>\n            </div>\n            <ul class=\"checkboxes\">\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Sales Report</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time\">Today</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row even\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Pay Invoices</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time\">Today</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Customer Meeting</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row even\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Expense Reports</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Plane tickets</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row even\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Dinner with Tony</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Dentist</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row even\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Lunch with John</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n\n                <li class=\"checkbox-row\">\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6 checkbox\">\n                            <p-checkbox binary=\"true\"></p-checkbox>\n                            <p>Customer service</p>\n                        </div>\n                        <div class=\"p-col-6 checkbox-row-info\">\n                            <span class=\"time later\">Later</span>\n                            <i class=\"pi pi-tag\"></i>\n                            <i class=\"pi pi-calendar\"></i>\n                            <i class=\"pi pi-bookmark\"></i>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4 p-md-6\">\n        <div class=\"card widget-support-request\">\n            <div class=\"p-grid p-nogutter\">\n                <div class=\"p-col-6 title\">\n                    <h5>Support Request</h5>\n                </div>\n                <div class=\"p-col-6 support-info\">\n                    <p>⏰ Estimated wait time</p>\n                    <span class=\"highlighted\">21 minutes</span>\n                </div>\n            </div>\n\n            <label for=\"resolution-username\">Username</label>\n            <input pInputText type=\"text\" id=\"resolution-username\" placeholder=\"Type your username...\" />\n\n            <label for=\"resolution-message\">Message</label>\n            <textarea type=\"text\" pInputTextarea id=\"resolution-message\" [rows]=\"8\" placeholder=\"Type your message...\" [autoResize]=\"false\" ></textarea>\n\n            <div class=\"resolution-button-bar\">\n                <button type=\"button\" label=\"Send Request\" icon=\"pi pi-star\" pButton></button>\n                <button type=\"button\" label=\"Save as Draft\" pButton class=\"p-button-secondary p-button-text\"></button>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"card widget-team\">\n            <h5>Team Members</h5>\n            <ul>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-carmelita.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Carmelita Marsham</h6>\n                                <span class=\"team-member-role\">Sales</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-govzden.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Gvozden Boskovsky</h6>\n                                <span class=\"team-member-role\">Marketing</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-athar.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Athar Makakooti</h6>\n                                <span class=\"team-member-role\">Marketing</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-tokunaga.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Tokunaga Yae</h6>\n                                <span class=\"team-member-role\">Unknown</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid member\">\n                        <div class=\"p-col-7 team-box\">\n                            <div class=\"profile-image\">\n                                <img src=\"assets/layout/images/dashboard/avatar-olisha.png\" alt=\"mirage-layout\" />\n                            </div>\n                            <div>\n                                <h6 class=\"team-member\">Olisha Farmer</h6>\n                                <span class=\"team-member-role\">Design</span>\n                            </div>\n                        </div>\n                        <div class=\"p-col-5 icons\">\n                            <div class=\"icon icon-hastag\">\n                                <i class=\"pi pi-bookmark\"></i>\n                            </div>\n                            <div class=\"icon icon-twitter\">\n                                <i class=\"pi pi-share-alt\"></i>\n                            </div>\n                            <div class=\"icon icon-prime\">\n                                <img src=\"assets/layout/images/dashboard/icon-prime.svg\" alt=\"mirage-layout\" />\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-3 p-md-6\">\n        <div class=\"card widget-card-graph graph-1\">\n            <div class=\"graph-header\">\n                <h5>Orders</h5>\n                <div class=\"graph\">\n                    <div class=\"graph-border\">\n                        <div class=\"graph-block\"></div>\n                    </div>\n                    <div class=\"graph-center\"></div>\n                </div>\n            </div>\n            <div class=\"graph-content\">\n                <div class=\"graph-icon\">\n                    <img src=\"assets/layout/images/dashboard/primeicons-apple.svg\" alt=\"mirage-layout\" />\n                </div>\n                <div class=\"graph-content-text\">\n                    <h5>49.2k</h5>\n                    <hr />\n                    <span><i class=\"pi pi-arrow-up\"></i> 42% more than last month</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-3 p-md-6\">\n        <div class=\"card widget-card-graph graph-2\">\n            <div class=\"graph-header\">\n                <h5>Graph Type 2</h5>\n                <div class=\"graph\">\n                    <div class=\"graph-border\"></div>\n                    <div class=\"graph-center\"></div>\n                </div>\n            </div>\n            <div class=\"graph-content\">\n                <div class=\"graph-icon\">\n                    <img src=\"assets/layout/images/dashboard/primeicons-camera.svg\" alt=\"mirage-layout\" />\n                </div>\n                <div class=\"graph-content-text\">\n                    <h5>62.291</h5>\n                    <hr />\n                    <span><i class=\"pi pi-arrow-up\"></i> 33% more than last month</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-3 p-md-6\">\n        <div class=\"card widget-card-graph graph-3\">\n            <div class=\"graph-header\">\n                <h5>Graph Type 3</h5>\n                <div class=\"graph\">\n                    <div class=\"graph-border\"></div>\n                    <div class=\"graph-center\"></div>\n                </div>\n            </div>\n            <div class=\"graph-content\">\n                <div class=\"graph-icon\">\n                    <img src=\"assets/layout/images/dashboard/primeicons-sitemap.svg\" alt=\"mirage-layout\" />\n                </div>\n                <div class=\"graph-content-text\">\n                    <h5>18.7k</h5>\n                    <hr />\n                    <span><i class=\"pi pi-arrow-up\"></i> 7% more than last month</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-3 p-md-6\">\n        <div class=\"card widget-card-graph graph-4\">\n            <div class=\"graph-header\">\n                <img src=\"assets/layout/images/dashboard/asset-bars-all.svg\" alt=\"mirage-layout\" />\n                <div class=\"title-tag\">Graph Type 4</div>\n            </div>\n            <div class=\"graph-content\">\n                <div class=\"graph-icon\">\n                    <img src=\"assets/layout/images/dashboard/primeicons-chart-bar.svg\" alt=\"mirage-layout\" />\n                </div>\n                <div class=\"graph-content-text\">\n                    <h5>5.0k</h5>\n                    <hr />\n                    <span class=\"jun\">Jun</span>\n                    <span><i class=\"pi pi-arrow-up\"></i> 36% more than last month</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-8\">\n        <div class=\"card widget-store-items\">\n            <div class=\"p-grid p-nogutter\">\n                <div class=\"p-col-6 title\">\n                    <h5>Store Items</h5>\n                </div>\n                <div class=\"p-col-6 store-info\">\n                    <div class=\"info-item add\"><i class=\"pi pi-plus\"></i> Add Item</div>\n                    <div class=\"info-item library\">\n                        <img src=\"assets/layout/images/dashboard/icon-library.svg\" alt=\"mirage-layout\" />\n                        Library</div>\n                </div>\n            </div>\n\n            <div class=\"store-cards-container\">\n                <div class=\"p-grid store-cards\">\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-sugar.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Sugar</h5>\n                                <span>Collector's Edition</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-seed.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Seed</h5>\n                                <span>Pretty rare type</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-egg.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Egg</h5>\n                                <span>Chicken babies</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-americano.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Americano</h5>\n                                <span>Best coffee type</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-orange-slice.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Orange</h5>\n                                <span>Slice of slice</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-espresso.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Espresso</h5>\n                                <span>Quic awakening</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-brussel.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Brussels Sprouts</h5>\n                                <span>For soups</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-cherry.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Cherry</h5>\n                                <span>Summer fruit</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-americano.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Americano</h5>\n                                <span>Best coffee type</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-egg.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Egg</h5>\n                                <span>Chicken babies</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-seed.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Seed</h5>\n                                <span>Pretty rare type</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6 p-lg-3 p-md-4\">\n                        <div class=\"store-card\">\n                            <div class=\"store-card-icons\">\n                                <div class=\"p-grid p-nogutter\">\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-heart\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-pencil\"></i>\n                                    </div>\n                                    <div class=\"p-col-4\">\n                                        <i class=\"pi pi-trash\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"store-card-image\">\n                                <img src=\"assets/layout/images/dashboard/asset-image-sugar.jpg\" alt=\"mirage-layout\" />\n                            </div>\n                            <div class=\"store-card-content\">\n                                <h5>Sugar</h5>\n                                <span>Collector's Edition</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"list-effect\"></div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"card widget-download-files\">\n            <div class=\"card-header\">\n                <div class=\"title\">\n                    <h5>Download Files</h5>\n                </div>\n                <div class=\"files-info\">\n                    <span>Download All</span>\n                </div>\n            </div>\n            <ul>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-sapphire.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Sapphire Documentation</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-mirage.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-8 file-name\">\n                            <h6 class=\"name\">Mirage Marketing Asset</h6>\n                        </div>\n                        <div class=\"p-col-2 new\">\n                            <div class=\"new-tag\">\n                                New\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-primefaces.svg\"\n                                            alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">PrimeFaces Elite Report 2019-Q3</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-ngconf.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">NG-Conf 2020 Presentation</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-internship.svg\"\n                                            alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Internship Reviews</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-design.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Design Team | Spring 021</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-art.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">M02-Feedback Session</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-process.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">.gitignore</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-cd.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Mirage Playlist on Spotify</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-movie.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Launch Movie</h6>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"p-grid list-item\">\n                        <div class=\"p-col-2 icon\">\n                            <img src=\"assets/layout/images/dashboard/icon-padlock.svg\" alt=\"mirage-layout\" />\n                        </div>\n                        <div class=\"p-col-10 file-name\">\n                            <h6 class=\"name\">Keychain 00279.88</h6>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <div class=\"list-effect\"></div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "u28Z":
    /*!**************************************!*\
      !*** ./src/app/modelo/objOptions.ts ***!
      \**************************************/

    /*! exports provided: ObjOptions */

    /***/
    function u28Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjOptions", function () {
        return ObjOptions;
      });

      var ObjOptions = function ObjOptions() {
        _classCallCheck(this, ObjOptions);
      };
      /***/

    },

    /***/
    "uQp2":
    /*!*****************************************************!*\
      !*** ./src/app/demo/view/messagesdemo.component.ts ***!
      \*****************************************************/

    /*! exports provided: MessagesDemoComponent */

    /***/
    function uQp2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesDemoComponent", function () {
        return MessagesDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_messagesdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./messagesdemo.component.html */
      "w0qD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");

      var MessagesDemoComponent = /*#__PURE__*/function () {
        function MessagesDemoComponent(service, breadcrumbService) {
          _classCallCheck(this, MessagesDemoComponent);

          this.service = service;
          this.breadcrumbService = breadcrumbService;
          this.msgs = [];
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Message',
            routerLink: ['/uikit/message']
          }]);
        }

        _createClass(MessagesDemoComponent, [{
          key: "showInfoViaToast",
          value: function showInfoViaToast() {
            this.service.add({
              key: 'tst',
              severity: 'info',
              summary: 'Info Message',
              detail: 'PrimeNG rocks'
            });
          }
        }, {
          key: "showWarnViaToast",
          value: function showWarnViaToast() {
            this.service.add({
              key: 'tst',
              severity: 'warn',
              summary: 'Warn Message',
              detail: 'There are unsaved changes'
            });
          }
        }, {
          key: "showErrorViaToast",
          value: function showErrorViaToast() {
            this.service.add({
              key: 'tst',
              severity: 'error',
              summary: 'Error Message',
              detail: 'Validation failed'
            });
          }
        }, {
          key: "showSuccessViaToast",
          value: function showSuccessViaToast() {
            this.service.add({
              key: 'tst',
              severity: 'success',
              summary: 'Success Message',
              detail: 'Message sent'
            });
          }
        }, {
          key: "showInfoViaMessages",
          value: function showInfoViaMessages() {
            //info warn error success
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Info Message',
              detail: 'PrimeNG rocks'
            });
          }
        }, {
          key: "showWarnViaMessages",
          value: function showWarnViaMessages() {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Warn Message',
              detail: 'There are unsaved changes'
            });
          }
        }, {
          key: "showErrorViaMessages",
          value: function showErrorViaMessages() {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Error Message',
              detail: 'Validation failed'
            });
          }
        }, {
          key: "showSuccessViaMessages",
          value: function showSuccessViaMessages() {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Success Message',
              detail: 'Message sent'
            });
          }
        }]);

        return MessagesDemoComponent;
      }();

      MessagesDemoComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"]
        }];
      };

      MessagesDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_messagesdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
        styles: ["\n        :host ::ng-deep .p-button {\n            min-width: 8em;\n        }\n\n\t\t:host ::ng-deep .p-message {\n\t\t\tmargin-left: .25em;\n\t\t}\n    "]
      })], MessagesDemoComponent);
      /***/
    },

    /***/
    "uzk9":
    /*!*************************************************************!*\
      !*** ./src/app/component-name/component-name.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function uzk9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQtbmFtZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./demo/view/formlayoutdemo.component */
      "CfVz");
      /* harmony import */


      var _demo_view_floatlabeldemo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./demo/view/floatlabeldemo.component */
      "M6OY");
      /* harmony import */


      var _demo_view_invalidstatedemo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./demo/view/invalidstatedemo.component */
      "P2fs");
      /* harmony import */


      var _demo_view_inputdemo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./demo/view/inputdemo.component */
      "DlPI");
      /* harmony import */


      var _demo_view_buttondemo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./demo/view/buttondemo.component */
      "M8Z4");
      /* harmony import */


      var _demo_view_tabledemo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./demo/view/tabledemo.component */
      "Hf0O");
      /* harmony import */


      var _demo_view_listdemo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./demo/view/listdemo.component */
      "nWU1");
      /* harmony import */


      var _demo_view_treedemo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./demo/view/treedemo.component */
      "JvKG");
      /* harmony import */


      var _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./demo/view/panelsdemo.component */
      "8jOm");
      /* harmony import */


      var _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./demo/view/overlaysdemo.component */
      "4Pek");
      /* harmony import */


      var _demo_view_mediademo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./demo/view/mediademo.component */
      "WOi/");
      /* harmony import */


      var _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./demo/view/menusdemo.component */
      "gitr");
      /* harmony import */


      var _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./demo/view/messagesdemo.component */
      "uQp2");
      /* harmony import */


      var _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./demo/view/miscdemo.component */
      "j1Et");
      /* harmony import */


      var _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./demo/view/emptydemo.component */
      "a9iL");
      /* harmony import */


      var _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./demo/view/chartsdemo.component */
      "aOMY");
      /* harmony import */


      var _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./demo/view/filedemo.component */
      "7s2l");
      /* harmony import */


      var _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./demo/view/documentation.component */
      "Pv7A");
      /* harmony import */


      var _utilities_display_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./utilities/display.component */
      "Znji");
      /* harmony import */


      var _utilities_elevation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./utilities/elevation.component */
      "8iZH");
      /* harmony import */


      var _utilities_flexbox_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./utilities/flexbox.component */
      "deSt");
      /* harmony import */


      var _utilities_grid_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./utilities/grid.component */
      "MgdU");
      /* harmony import */


      var _utilities_icons_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./utilities/icons.component */
      "s5Nh");
      /* harmony import */


      var _utilities_widgets_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./utilities/widgets.component */
      "qBte");
      /* harmony import */


      var _utilities_spacing_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./utilities/spacing.component */
      "p563");
      /* harmony import */


      var _utilities_typography_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./utilities/typography.component */
      "3Li2");
      /* harmony import */


      var _utilities_text_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./utilities/text.component */
      "SsAV");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./pages/app.notfound.component */
      "xBH+");
      /* harmony import */


      var _pages_app_error_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./pages/app.error.component */
      "anCR");
      /* harmony import */


      var _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./pages/app.accessdenied.component */
      "pRB7");
      /* harmony import */


      var _pages_app_login_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./pages/app.login.component */
      "OnSs");
      /* harmony import */


      var _pages_app_crud_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./pages/app.crud.component */
      "Y0Zo");
      /* harmony import */


      var _pages_app_calendar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./pages/app.calendar.component */
      "fFyx");
      /* harmony import */


      var _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./pages/app.timelinedemo.component */
      "NG6J");
      /* harmony import */


      var _paginas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./paginas/inicio/inicio.component */
      "U3hP");
      /* harmony import */


      var _paginas_livecicle_livecicle_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./paginas/livecicle/livecicle.component */
      "FT+5");
      /* harmony import */


      var _paginas_viewxml_viewxml_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./paginas/viewxml/viewxml.component */
      "SK3t");
      /* harmony import */


      var _paginas_viewjson_viewjson_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./paginas/viewjson/viewjson.component */
      "0FBH");
      /* harmony import */


      var _paginas_usoeducativo_usoeducativo_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./paginas/usoeducativo/usoeducativo.component */
      "yqtk");
      /* harmony import */


      var _paginas_derechos_derechos_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./paginas/derechos/derechos.component */
      "6pyg");
      /* harmony import */


      var _paginas_relacion_relacion_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./paginas/relacion/relacion.component */
      "Bujs");
      /* harmony import */


      var _paginas_anotacion_anotacion_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./paginas/anotacion/anotacion.component */
      "43f1");
      /* harmony import */


      var _paginas_clasificacion_clasificacion_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./paginas/clasificacion/clasificacion.component */
      "8Efc");
      /* harmony import */


      var _paginas_accesibilidad_accesibilidad_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./paginas/accesibilidad/accesibilidad.component */
      "1L6g");
      /* harmony import */


      var _paginas_tecnica_tecnica_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./paginas/tecnica/tecnica.component */
      "WLLV");
      /* harmony import */


      var _paginas_metadatos_metadatos_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./paginas/metadatos/metadatos.component */
      "xwZw");
      /* harmony import */


      var _paginas_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./paginas/upload-file/upload-file.component */
      "5q1j");
      /* harmony import */


      var _paginas_general_general_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./paginas/general/general.component */
      "7xPD");

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
          path: '',
          component: _app_main_component__WEBPACK_IMPORTED_MODULE_30__["AppMainComponent"],
          children: [// {path: '', component: DashboardDemoComponent},
          {
            path: '',
            component: _paginas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_38__["InicioComponent"]
          }, {
            path: 'uikit/formlayout',
            component: _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_3__["FormLayoutDemoComponent"]
          }, {
            path: 'uikit/floatlabel',
            component: _demo_view_floatlabeldemo_component__WEBPACK_IMPORTED_MODULE_4__["FloatLabelDemoComponent"]
          }, {
            path: 'uikit/invalidstate',
            component: _demo_view_invalidstatedemo_component__WEBPACK_IMPORTED_MODULE_5__["InvalidStateDemoComponent"]
          }, {
            path: 'uikit/input',
            component: _demo_view_inputdemo_component__WEBPACK_IMPORTED_MODULE_6__["InputDemoComponent"]
          }, {
            path: 'uikit/button',
            component: _demo_view_buttondemo_component__WEBPACK_IMPORTED_MODULE_7__["ButtonDemoComponent"]
          }, {
            path: 'uikit/table',
            component: _demo_view_tabledemo_component__WEBPACK_IMPORTED_MODULE_8__["TableDemoComponent"]
          }, {
            path: 'uikit/list',
            component: _demo_view_listdemo_component__WEBPACK_IMPORTED_MODULE_9__["ListDemoComponent"]
          }, {
            path: 'uikit/tree',
            component: _demo_view_treedemo_component__WEBPACK_IMPORTED_MODULE_10__["TreeDemoComponent"]
          }, {
            path: 'uikit/panel',
            component: _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_11__["PanelsDemoComponent"]
          }, {
            path: 'uikit/overlay',
            component: _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_12__["OverlaysDemoComponent"]
          }, {
            path: 'uikit/media',
            component: _demo_view_mediademo_component__WEBPACK_IMPORTED_MODULE_13__["MediaDemoComponent"]
          }, {
            path: 'uikit/menu',
            component: _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_14__["MenusDemoComponent"]
          }, {
            path: 'uikit/message',
            component: _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_15__["MessagesDemoComponent"]
          }, {
            path: 'uikit/misc',
            component: _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_16__["MiscDemoComponent"]
          }, {
            path: 'uikit/charts',
            component: _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_18__["ChartsDemoComponent"]
          }, {
            path: 'uikit/file',
            component: _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_19__["FileDemoComponent"]
          }, {
            path: 'utilities/display',
            component: _utilities_display_component__WEBPACK_IMPORTED_MODULE_21__["DisplayComponent"]
          }, {
            path: 'utilities/elevation',
            component: _utilities_elevation_component__WEBPACK_IMPORTED_MODULE_22__["ElevationComponent"]
          }, {
            path: 'utilities/flexbox',
            component: _utilities_flexbox_component__WEBPACK_IMPORTED_MODULE_23__["FlexboxComponent"]
          }, {
            path: 'utilities/grid',
            component: _utilities_grid_component__WEBPACK_IMPORTED_MODULE_24__["GridComponent"]
          }, {
            path: 'utilities/icons',
            component: _utilities_icons_component__WEBPACK_IMPORTED_MODULE_25__["IconsComponent"]
          }, {
            path: 'utilities/widgets',
            component: _utilities_widgets_component__WEBPACK_IMPORTED_MODULE_26__["WidgetsComponent"]
          }, {
            path: 'utilities/spacing',
            component: _utilities_spacing_component__WEBPACK_IMPORTED_MODULE_27__["SpacingComponent"]
          }, {
            path: 'utilities/typography',
            component: _utilities_typography_component__WEBPACK_IMPORTED_MODULE_28__["TypographyComponent"]
          }, {
            path: 'utilities/text',
            component: _utilities_text_component__WEBPACK_IMPORTED_MODULE_29__["TextComponent"]
          }, {
            path: 'pages/empty',
            component: _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_17__["EmptyDemoComponent"]
          }, {
            path: 'pages/crud',
            component: _pages_app_crud_component__WEBPACK_IMPORTED_MODULE_35__["AppCrudComponent"]
          }, {
            path: 'pages/calendar',
            component: _pages_app_calendar_component__WEBPACK_IMPORTED_MODULE_36__["AppCalendarComponent"]
          }, {
            path: 'pages/timeline',
            component: _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_37__["AppTimelineDemoComponent"]
          }, {
            path: 'components/charts',
            component: _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_18__["ChartsDemoComponent"]
          }, {
            path: 'components/file',
            component: _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_19__["FileDemoComponent"]
          }, {
            path: 'documentation',
            component: _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_20__["DocumentationComponent"]
          }, {
            path: 'paginas/inicio',
            component: _paginas_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_38__["InicioComponent"]
          }, {
            path: 'paginas/livecicle',
            component: _paginas_livecicle_livecicle_component__WEBPACK_IMPORTED_MODULE_39__["LivecicleComponent"]
          }, {
            path: 'paginas/metadatos',
            component: _paginas_metadatos_metadatos_component__WEBPACK_IMPORTED_MODULE_49__["MetadatosComponent"]
          }, {
            path: 'paginas/tecnica',
            component: _paginas_tecnica_tecnica_component__WEBPACK_IMPORTED_MODULE_48__["TecnicaComponent"]
          }, {
            path: 'paginas/usoeducativo',
            component: _paginas_usoeducativo_usoeducativo_component__WEBPACK_IMPORTED_MODULE_42__["UsoeducativoComponent"]
          }, {
            path: 'paginas/derechos',
            component: _paginas_derechos_derechos_component__WEBPACK_IMPORTED_MODULE_43__["DerechosComponent"]
          }, {
            path: 'paginas/relacion',
            component: _paginas_relacion_relacion_component__WEBPACK_IMPORTED_MODULE_44__["RelacionComponent"]
          }, {
            path: 'paginas/anotacion',
            component: _paginas_anotacion_anotacion_component__WEBPACK_IMPORTED_MODULE_45__["AnotacionComponent"]
          }, {
            path: 'paginas/clasidicacion',
            component: _paginas_clasificacion_clasificacion_component__WEBPACK_IMPORTED_MODULE_46__["ClasificacionComponent"]
          }, {
            path: 'paginas/accesibilidad',
            component: _paginas_accesibilidad_accesibilidad_component__WEBPACK_IMPORTED_MODULE_47__["AccesibilidadComponent"]
          }, {
            path: 'paginas/upload',
            component: _paginas_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_50__["UploadFileComponent"]
          }, {
            path: 'paginas/general',
            component: _paginas_general_general_component__WEBPACK_IMPORTED_MODULE_51__["GeneralComponent"]
          }, {
            path: 'paginas/viewxml',
            component: _paginas_viewxml_viewxml_component__WEBPACK_IMPORTED_MODULE_40__["ViewxmlComponent"]
          }, {
            path: 'paginas/viewjson',
            component: _paginas_viewjson_viewjson_component__WEBPACK_IMPORTED_MODULE_41__["ViewjsonComponent"]
          }]
        }, {
          path: 'error',
          component: _pages_app_error_component__WEBPACK_IMPORTED_MODULE_32__["AppErrorComponent"]
        }, {
          path: 'accessdenied',
          component: _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_33__["AppAccessdeniedComponent"]
        }, {
          path: 'notfound',
          component: _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_31__["AppNotfoundComponent"]
        }, {
          path: 'login',
          component: _pages_app_login_component__WEBPACK_IMPORTED_MODULE_34__["AppLoginComponent"]
        }, {
          path: '**',
          redirectTo: '/notfound'
        }], {
          scrollPositionRestoration: 'enabled'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vdpq":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/chartsdemo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function vdpq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-fluid\">\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h5 class=\"centerText\">Linear Chart</h5>\n            <p-chart type=\"line\" [data]=\"lineData\"></p-chart>\n        </div>\n\n        <div class=\"card\">\n            <h5 class=\"centerText\">Pie Chart</h5>\n            <p-chart type=\"pie\" [data]=\"pieData\"></p-chart>\n        </div>\n\n        <div class=\"card\">\n            <h5 class=\"centerText\">Polar Area Chart</h5>\n            <p-chart type=\"polarArea\" [data]=\"polarData\"></p-chart>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h5 class=\"centerText\">Bar Chart</h5>\n            <p-chart type=\"bar\" [data]=\"barData\"></p-chart>\n        </div>\n\n        <div class=\"card\">\n            <h5 class=\"centerText\">Doughnut Chart</h5>\n            <p-chart type=\"doughnut\" [data]=\"pieData\"></p-chart>\n        </div>\n\n        <div class=\"card\">\n            <h5 class=\"centerText\">Radar Chart</h5>\n            <p-chart type=\"radar\" [data]=\"radarData\"></p-chart>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "w0qD":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/messagesdemo.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function w0qD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h5>Toast</h5>\n            <p-toast key=\"tst\"></p-toast>\n\n            <button type=\"button\" pButton (click)=\"showSuccessViaToast()\" label=\"Success\" class=\"p-button-success p-mr-2 p-mb-2\"></button>\n            <button type=\"button\" pButton (click)=\"showInfoViaToast()\" label=\"Info\" class=\"p-button-info p-mr-2 p-mb-2\"></button>\n            <button type=\"button\" pButton (click)=\"showWarnViaToast()\" label=\"Warn\" class=\"p-button-warning p-mr-2 p-mb-2\"></button>\n            <button type=\"button\" pButton (click)=\"showErrorViaToast()\" label=\"Error\" class=\"p-button-danger p-mb-2\"></button>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h5>Messages</h5>\n            <button type=\"button\" pButton (click)=\"showSuccessViaMessages()\" label=\"Success\" class=\"p-button-success p-mr-2 p-mb-2\"></button>\n            <button type=\"button\" pButton (click)=\"showInfoViaMessages()\" label=\"Info\" class=\"p-button-info p-mr-2 p-mb-2\"></button>\n            <button type=\"button\" pButton (click)=\"showWarnViaMessages()\" label=\"Warn\" class=\"p-button-warning p-mr-2 p-mb-2\"></button>\n            <button type=\"button\" pButton (click)=\"showErrorViaMessages()\" label=\"Error\" class=\"p-button-danger p-mb-2\"></button>\n\n            <p-messages [value]=\"msgs\"></p-messages>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-8\">\n        <div class=\"card\">\n            <h5>Inline Message</h5>\n            <div class=\"p-mt-4\">\n                <input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid p-invalid p-mr-2\">\n                <p-message severity=\"error\" text=\"Field is required\"></p-message>\n            </div>\n\n            <div class=\"p-mt-4\">\n                <input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid p-invalid p-mr-2\">\n                <p-message severity=\"error\"></p-message>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"card\">\n            <h5>Help Text</h5>\n            <div class=\"p-field p-fluid\">\n                <label for=\"username\">Username</label>\n                <input id=\"username\" type=\"username\" aria-describedby=\"username-help\" class=\"p-invalid\" pInputText />\n                <small id=\"username-help\" class=\"p-invalid\">Username is not available.</small>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n";
      /***/
    },

    /***/
    "wwB+":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/clasificacion/clasificacion.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wwB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div *ngIf=\"ObjOptions.o9_1\" class=\"p-col-12\">\n        <h5>{{\"Propósito\"| translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- [(ngModel)]=\"selectedDrop\" -->\n                <p-dropdown [options]=\"propositos\" [(ngModel)]='propositosSelect' name='propositosSelect' (onChange)='cambio_propositosSelect()' placeholder='{{\"Seleccionar\"| translate}} ' [showClear]=\"true\">\n                    <ng-template pTemplate=\"item\" let-item>\n                        {{item.label| translate }}\n                    </ng-template>\n                    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                        {{selectedItem.label | translate }}\n                    </ng-template>\n                </p-dropdown>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"ObjOptions.o9_2\" class=\"p-col-12\">\n        <h5>{{\"Ruta Taxonómica\"| translate}}</h5>\n        <div class=\"card\">\n            <div *ngIf=\"ObjOptions.o9_2_1\" class=\"p-fluid\">\n                <label for=\"fuente\">{{\"Fuente\"| translate}}</label>\n                <input id=\"fuente\" [(ngModel)]='objClasification[\"Taxon Path\"][\"Source\"]' type=\"text\" pInputText>\n            </div>\n\n            <div *ngIf=\"ObjOptions.o9_2_2\" class=\"p-fluid p-formgrid p-grid\">\n                <h6>{{\"Taxón\"| translate}}</h6>\n\n                <label for=\"id\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Id</label>\n                <div class=\"p-field p-col\">\n                    <input id=\"id\" [(ngModel)]='objClasification[\"Taxon Path\"][\"Taxon\"][\"Id\"]' type=\"text\" pInputText>\n                </div>\n                <label for=\"entrada\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">{{\"Entrada\" | translate}}</label>\n                <div class=\"p-field p-col\">\n                    <input id=\"entrada\" [(ngModel)]='objClasification[\"Taxon Path\"][\"Taxon\"][\"Entry\"]' type=\"text\" pInputText>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div *ngIf=\"ObjOptions.o9_3\" class=\"p-col-12\">\n        <h5>{{\"Descripción\"| translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid\">\n                <!-- <label for=\"descripcion\">Descripción</label> -->\n                <textarea id=\"descripcion\" [(ngModel)]='objClasification[\"Description\"]' type=\"text\" rows=\"4\" pInputTextarea></textarea>\n            </div>\n        </div>\n\n    </div>\n\n\n    <div *ngIf=\"ObjOptions.o9_4\" class=\"p-col-12\">\n        <h5>{{\"Palabra Clave\"| translate}}</h5>\n        <div class=\"card\">\n            <div class=\"p-fluid p-formgrid p-grid\">\n                <div class=\"p-field p-col-12 \">\n                    <label for=\"palabraclave1\">{{\"Palabra Clave\" | translate}}</label>\n                    <input id=\"palabraclave1\" [(ngModel)]='objClasification[\"Keyword\"]' type=\"text\" pInputText>\n                    <!-- <button pButton pRipple type=\"button\" icon=\"pi pi-plus\" title=\"Add Column\" (click)=\"addPalabra()\" [disabled]=\"columns.length === 20\" class=\"p-mr-2\"></button>\n                    <button pButton pRipple type=\"button\" icon=\"pi pi-minus\" title=\"Remove Column\" (click)=\"removeColumn()\" [disabled]=\"columns.length === 1\"></button>\n\n                    <div class=\"p-col-12 p-md-10\" *ngFor=\"let col of columns; let i\" [@animation]=\"'visible'\">\n                        <div class=\"box\">{{i}}</div>\n                    </div> -->\n\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n\n\n\n    <p-dialog [(visible)]=\"palabraDialog\" [style]=\"{width: '450px'}\" header=\"\" [modal]=\"true\" styleClass=\"p-fluid\">\n        <ng-template pTemplate=\"content\">\n\n            <div class=\"p-field\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" pInputText id=\"nombrePalabraK\" [(ngModel)]=\"palabra\" required autofocus />\n                <!-- <small class=\"p-invalid\" *ngIf=\"![(ngModel)]=\"\"\">Name is required.</small> -->\n            </div>\n\n        </ng-template>\n\n        <ng-template pTemplate=\"footer\">\n            <button pButton pRipple label=\"Cancel\" icon=\"pi pi-times\" class=\"p-button-text\" (click)=\"cancelPalabra()\"></button>\n            <button pButton pRipple label=\"Save\" icon=\"pi pi-check\" class=\"p-button-text\" (click)=\"savePalabra()\"></button>\n        </ng-template>\n    </p-dialog>\n\n\n\n</div>";
      /***/
    },

    /***/
    "xBH+":
    /*!*************************************************!*\
      !*** ./src/app/pages/app.notfound.component.ts ***!
      \*************************************************/

    /*! exports provided: AppNotfoundComponent */

    /***/
    function xBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppNotfoundComponent", function () {
        return AppNotfoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_notfound_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.notfound.component.html */
      "82Sa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppNotfoundComponent = function AppNotfoundComponent() {
        _classCallCheck(this, AppNotfoundComponent);
      };

      AppNotfoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-notfound',
        template: _raw_loader_app_notfound_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppNotfoundComponent);
      /***/
    },

    /***/
    "xE+y":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/display.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function xEY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h4>Display</h4>\n\t\t\t<p>Efficiently configure the display of the component with <a href=\"https://github.com/primefaces/primeflex\">PrimeFlex</a> display utilities.</p>\n\n\t\t\t<h5>Inline</h5>\n\t\t\t<input type=\"text\" pInputText class=\"p-mr-2 p-d-inline\" />\n\t\t\t<input type=\"text\" pInputText class=\"p-d-inline\" />\n\n\t\t\t<h5>Block</h5>\n\t\t\t<input type=\"text\" pInputText class=\"p-mb-2 p-d-block\" />\n\t\t\t<input type=\"text\" pInputText class=\"p-d-block\" />\n\n\t\t\t<h5>Visible on a Small Screen</h5>\n\t\t\t<p>Resize to view.</p>\n\t\t\t<p-button type=\"button\" icon=\"pi pi-bars\" styleClass=\"p-button-rounded p-d-md-none\"></p-button>\n\n\t\t\t<h5>Hidden on a Small Screen</h5>\n\t\t\t<p>Resize to hide.</p>\n\t\t\t<p-button type=\"button\" icon=\"pi pi-search\" styleClass=\"p-button-rounded p-button-success p-d-none p-d-md-inline-flex\"></p-button>\n\n\t\t\t<h5>Visible to Print, Invisible for Screen</h5>\n\t\t\t<p class=\"p-d-none p-print-block\">Only visible when printed.</p>\n\n\t\t\t<h5>Visible to Screen, Invisible for Print</h5>\n\t\t\t<p class=\"p-d-block p-print-none\">Not available for printing.</p>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "xLnY":
    /*!**********************************************!*\
      !*** ./src/app/demo/service/photoservice.ts ***!
      \**********************************************/

    /*! exports provided: PhotoService */

    /***/
    function xLnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService(http) {
          _classCallCheck(this, PhotoService);

          this.http = http;
        }

        _createClass(PhotoService, [{
          key: "getImages",
          value: function getImages() {
            return this.http.get('assets/demo/data/photos.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], PhotoService);
      /***/
    },

    /***/
    "xwZw":
    /*!**********************************************************!*\
      !*** ./src/app/paginas/metadatos/metadatos.component.ts ***!
      \**********************************************************/

    /*! exports provided: MetadatosComponent */

    /***/
    function xwZw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MetadatosComponent", function () {
        return MetadatosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_metadatos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./metadatos.component.html */
      "IdC1");
      /* harmony import */


      var _metadatos_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./metadatos.component.css */
      "sGLk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/objOptions */
      "u28Z");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");

      var MetadatosComponent = /*#__PURE__*/function () {
        function MetadatosComponent(componentePrincipal, lompadservice) {
          _classCallCheck(this, MetadatosComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.ObjOptions = new src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"]();
        }

        _createClass(MetadatosComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            this.objMetadatos = this.lompadservice.objPricipal['DATA']['metaMetadata'];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy Metadatos");
            this.actualizarVcard(this.objMetadatos['Contribute']['Entity']);
            this.objMetadatos['Contribute']['Date'] = this.fecha.toISOString();
            this.lompadservice.objPricipal['DATA']['metaMetadata'] = this.objMetadatos;
            this.lompadservice.saveObjectLompad(this.objMetadatos, "metaMetadata");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDatos();
            this.castVcard(this.objMetadatos['Contribute']['Entity']);
            this.tipos = [{
              label: 'Creador',
              value: 'creator',
              code: 'cre'
            }, {
              label: 'Visor',
              value: 'validator',
              code: 'vie'
            }];
            this.ObjOptions = this.componentePrincipal.objOptions; // this.objMetadatos=this.lomapdService.getObjMetadata();

            console.log("Desde metadatos: ", this.objMetadatos);
            this.fecha = new Date(this.objMetadatos["Contribute"]["Date"]);
            this.tipos_Select = this.objMetadatos["Contribute"]["Role"];
          }
        }, {
          key: "castVcard",
          value: function castVcard(card) {
            var inicial = card;
            inicial = inicial.replace(" ", "_");
            var list = inicial.split("\n"); // console.log(list);

            var varN = list[2].substring(2, list[2].length);
            var list_varN = varN.split(";");
            var nombre = list_varN[1];
            var apellido = list_varN[0];
            var mail = list[4].split(":")[1];
            var organization = list[5].split(":")[1];
            console.log(nombre);
            console.log(apellido);
            console.log(mail);
            console.log(organization);
            this.nombreNew = nombre;
            this.apellidoNew = apellido;
            this.mailNew = mail;
            this.organizacionNew = organization;
          }
        }, {
          key: "actualizarVcard",
          value: function actualizarVcard(card) {
            var carrd = card;
            var inicial = card;
            inicial = inicial.replace(" ", "_");
            var list = inicial.split("\n");
            var varN = list[2].substring(2, list[2].length);
            var list_varN = varN.split(";");
            var nombre = list_varN[1];
            var apellido = list_varN[0];
            var mail = list[4].split(":")[1];
            var organization = list[5].split(":")[1];
            carrd = carrd.replace(nombre, this.nombreNew.trim());
            carrd = carrd.replace(apellido, this.apellidoNew.trim());
            carrd = carrd.replace(mail, this.mailNew.trim());
            carrd = carrd.replace(organization, this.organizacionNew.trim());
            var temFN = carrd.split("\n");
            temFN[3] = "FN:" + this.nombreNew.trim() + " " + this.apellidoNew.trim();
            var _final3 = "";
            temFN.forEach(function (element) {
              _final3 += element + "\n";
            });
            _final3 = _final3.substring(0, _final3.length - 1);
            console.log("fiNal card: ", _final3);
            this.objMetadatos["Contribute"]["Entity"] = _final3;
          }
        }, {
          key: "cambioTipos",
          value: function cambioTipos() {
            console.log(this.tipos_Select);
            this.objMetadatos["Contribute"]["Role"] = this.tipos_Select;
          }
        }]);

        return MetadatosComponent;
      }();

      MetadatosComponent.ctorParameters = function () {
        return [{
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__["LompadService"]
        }];
      };

      MetadatosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-metadatos',
        template: _raw_loader_metadatos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_metadatos_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MetadatosComponent);
      /***/
    },

    /***/
    "yd5u":
    /*!******************************************************!*\
      !*** ./src/app/demo/view/dashboarddemo.component.ts ***!
      \******************************************************/

    /*! exports provided: DashboardDemoComponent */

    /***/
    function yd5u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardDemoComponent", function () {
        return DashboardDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "66gQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../breadcrumb.service */
      "pMwP");
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");

      var DashboardDemoComponent = /*#__PURE__*/function () {
        function DashboardDemoComponent(productService, breadcrumbService) {
          _classCallCheck(this, DashboardDemoComponent);

          this.productService = productService;
          this.breadcrumbService = breadcrumbService;
          this.activeNews = 1;
          this.breadcrumbService.setItems([{
            label: 'Dashboard',
            routerLink: ['/']
          }]);
        }

        _createClass(DashboardDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.productService.getProducts().then(function (data) {
              return _this25.products = data;
            });
            this.lineChartData = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'Sapphire',
                data: [1, 2, 5, 3, 12, 7, 15],
                borderColor: ['#45b0d5'],
                borderWidth: 3,
                fill: false
              }, {
                label: 'Roma',
                data: [3, 7, 2, 17, 15, 13, 19],
                borderColor: ['#d08770'],
                borderWidth: 3,
                fill: false
              }]
            };
            this.lineChartOptions = {
              responsive: true,
              maintainAspectRatio: true,
              fontFamily: '\'Candara\', \'Calibri\', \'Courier\', \'serif\'',
              hover: {
                mode: 'index'
              },
              scales: {
                xAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontColor: '#9199a9'
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontColor: '#9199a9'
                  }
                }]
              },
              legend: {
                display: true,
                labels: {
                  fontColor: '#9199a9'
                }
              }
            };
            this.dropdownYears = [{
              label: '2019',
              value: 2019
            }, {
              label: '2018',
              value: 2018
            }, {
              label: '2017',
              value: 2017
            }, {
              label: '2016',
              value: 2016
            }, {
              label: '2015',
              value: 2015
            }, {
              label: '2014',
              value: 2014
            }];
          }
        }]);

        return DashboardDemoComponent;
      }();

      DashboardDemoComponent.ctorParameters = function () {
        return [{
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: _breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }];
      };

      DashboardDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DashboardDemoComponent);
      /***/
    },

    /***/
    "yqtk":
    /*!****************************************************************!*\
      !*** ./src/app/paginas/usoeducativo/usoeducativo.component.ts ***!
      \****************************************************************/

    /*! exports provided: UsoeducativoComponent */

    /***/
    function yqtk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsoeducativoComponent", function () {
        return UsoeducativoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_usoeducativo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./usoeducativo.component.html */
      "1K0L");
      /* harmony import */


      var _usoeducativo_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./usoeducativo.component.css */
      "crCP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modelo/objOptions */
      "u28Z");
      /* harmony import */


      var _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/lompad.service */
      "dyE0");

      var UsoeducativoComponent = /*#__PURE__*/function () {
        function UsoeducativoComponent(componentePrincipal, lompadservice) {
          _classCallCheck(this, UsoeducativoComponent);

          this.componentePrincipal = componentePrincipal;
          this.lompadservice = lompadservice;
          this.ObjOptions = new src_app_modelo_objOptions__WEBPACK_IMPORTED_MODULE_5__["ObjOptions"]();
        }

        _createClass(UsoeducativoComponent, [{
          key: "loadDatos",
          value: function loadDatos() {
            this.objUsoEdu = this.lompadservice.objPricipal['DATA']['educational'];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("Destroy Uso Educativo");
            this.saveTime();
            this.lompadservice.objPricipal['DATA']['educational'] = this.objUsoEdu;
            this.lompadservice.saveObjectLompad(this.objUsoEdu, "educational");
          }
        }, {
          key: "castTime",
          value: function castTime(param) {
            var one = param.split('DT')[0];
            var dos = param.split('DT')[1];
            one = one.substr(1, one.length);
            this.years = +one.split("Y")[0];
            this.months = +one.split("Y")[1].split("M")[0];
            this.days = +one.split("Y")[1].split("M")[1];
            this.hours = +dos.split("H")[0];
            this.minutes = +dos.split("H")[1].split('M')[0];
          }
        }, {
          key: "saveTime",
          value: function saveTime() {
            this.objUsoEdu['Typical Learning Time'] = "P" + this.years + "Y" + this.months + "M" + this.days + "DT" + this.hours + "H" + this.minutes + "M"; // console.log("P"+this.years+"Y"+this.months+"M"+this.days+"DT"+this.hours+"H"+this.minutes+"M")
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDatos();
            this.castTime(this.objUsoEdu['Typical Learning Time']);
            this.tiposActividad = [{
              label: 'Activo',
              value: 'active',
              code: 'ac'
            }, {
              label: 'Expositivo',
              value: 'expositive',
              code: 'ex'
            }, {
              label: 'Combinado',
              value: 'mixed',
              code: 'com'
            }];
            this.tiposRecursEducativos = [{
              label: 'Ejercicio',
              value: 'exercise',
              code: 'ejer'
            }, {
              label: 'Simulación',
              value: 'simulation',
              code: 'sim'
            }, {
              label: 'Cuestionario',
              value: 'questionnarie',
              code: 'cuest'
            }, {
              label: 'Diagrama',
              value: 'diagram',
              code: 'dia'
            }, {
              label: 'Figura',
              value: 'figure',
              code: 'fig'
            }, {
              label: 'Gráfico',
              value: 'graph',
              code: 'gra'
            }, {
              label: 'Indice',
              value: 'index',
              code: 'in'
            }, {
              label: 'Diapositiva',
              value: 'slide',
              code: 'in'
            }, {
              label: 'tabla',
              value: 'table',
              code: 'in'
            }, {
              label: 'texto narrativo',
              value: 'narrative text',
              code: 'in'
            }, {
              label: 'examen',
              value: 'exam',
              code: 'in'
            }, {
              label: 'experimento',
              value: 'experiment',
              code: 'in'
            }, {
              label: 'planteamiento del problema',
              value: 'problem statement',
              code: 'in'
            }, {
              label: 'autoevaluacion',
              value: 'self assessment',
              code: 'in'
            }, {
              label: 'conferencia',
              value: 'lecture',
              code: 'in'
            }];
            this.nivelesInteractividad = [{
              label: 'muy bajo',
              value: 'very low',
              code: 'mb'
            }, {
              label: 'bajo',
              value: 'low',
              code: 'baj'
            }, {
              label: 'medio',
              value: 'medium',
              code: 'med'
            }, {
              label: 'alto',
              value: 'high',
              code: 'alt'
            }, {
              label: 'muy alto',
              value: 'very high',
              code: '34523'
            }];
            this.densiadesSemanticas = [{
              label: 'muy bajo',
              value: 'very low',
              code: 'mb'
            }, {
              label: 'bajo',
              value: 'low',
              code: 'baj'
            }, {
              label: 'medio',
              value: 'medium',
              code: 'med'
            }, {
              label: 'alto',
              value: 'high',
              code: 'alt'
            }, {
              label: 'muy alto',
              value: 'very high',
              code: '34523'
            }];
            this.destinatarios = [{
              label: 'autor',
              value: 'author',
              code: 'aut'
            }, {
              label: 'profesor',
              value: 'theacher',
              code: 'pro'
            }, {
              label: 'aprendiz',
              value: 'learner',
              code: 'aprend'
            }, {
              label: 'admimistrador',
              value: 'manager',
              code: 'mana'
            }];
            this.contextos = [{
              label: 'escuela',
              value: 'school',
              code: 'es'
            }, {
              label: 'educación secundaria',
              value: 'higher education',
              code: 'edu_s'
            }, {
              label: 'entrenamiento',
              value: 'training',
              code: 'entre'
            }, {
              label: 'otro',
              value: 'other',
              code: 'otro'
            }];
            this.dificultades = [{
              label: 'muy facíl',
              value: 'very easy',
              code: 'mf'
            }, {
              label: 'facíl',
              value: 'easy',
              code: 'f'
            }, {
              label: 'medio',
              value: 'medium',
              code: 'm'
            }, {
              label: 'dificíl',
              value: 'difficult',
              code: 'd'
            }, {
              label: 'muy dificíl',
              value: 'very difficult',
              code: 'md'
            }];
            this.ObjOptions = this.componentePrincipal.objOptions; // this.objUsoEdu=this.lompadservice.getUsoEducativo();

            console.log("DEsde Uso Edu: ", this.objUsoEdu);
            this.tiposActividadSelect = this.objUsoEdu["Interactivity Type"];
            this.tiposRecursEducativosSelect = this.objUsoEdu["Learning Resource Type"];
            this.nivelesInteractividadSelect = this.objUsoEdu["Interactivity Level"];
            this.densiadesSemanticasSelect = this.objUsoEdu["Semantic Density"];
            this.destinatariosSelect = this.objUsoEdu["Intended End User Roles"];
            this.contextosSelect = this.objUsoEdu["Context"];
            this.dificultadesSelect = this.objUsoEdu["Difficulty"];
            this.edad = +this.objUsoEdu["Typical Age Range"];
          }
        }, {
          key: "cambio_tiposActividad",
          value: function cambio_tiposActividad() {
            console.log(this.tiposActividadSelect);
            this.objUsoEdu["Interactivity Type"] = this.tiposActividadSelect;
          }
        }, {
          key: "cambio_tiposRecursEducativos",
          value: function cambio_tiposRecursEducativos() {
            console.log(this.tiposRecursEducativosSelect);
            this.objUsoEdu["Learning Resource Type"] = this.tiposRecursEducativosSelect;
          }
        }, {
          key: "cambio_nivelesInteractividadSelect",
          value: function cambio_nivelesInteractividadSelect() {
            console.log(this.nivelesInteractividadSelect);
            this.objUsoEdu["Interactivity Level"] = this.nivelesInteractividadSelect;
          }
        }, {
          key: "cambio_densiadesSemanticasSelect",
          value: function cambio_densiadesSemanticasSelect() {
            console.log(this.densiadesSemanticasSelect);
            this.objUsoEdu["Semantic Density"] = this.densiadesSemanticasSelect;
          }
        }, {
          key: "cambio_destinatariosSelect",
          value: function cambio_destinatariosSelect() {
            console.log(this.destinatariosSelect);
            this.objUsoEdu["Intended End User Roles"] = this.destinatariosSelect;
          }
        }, {
          key: "cambio_contextosSelect",
          value: function cambio_contextosSelect() {
            console.log(this.contextosSelect);
            this.objUsoEdu["Context"] = this.contextosSelect;
          }
        }, {
          key: "cambio_dificultadesSelect",
          value: function cambio_dificultadesSelect() {
            console.log(this.dificultadesSelect);
            this.objUsoEdu["Difficulty"] = this.dificultadesSelect;
          }
        }]);

        return UsoeducativoComponent;
      }();

      UsoeducativoComponent.ctorParameters = function () {
        return [{
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _servicios_lompad_service__WEBPACK_IMPORTED_MODULE_6__["LompadService"]
        }];
      };

      UsoeducativoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-usoeducativo',
        template: _raw_loader_usoeducativo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usoeducativo_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UsoeducativoComponent);
      /***/
    },

    /***/
    "z7Cp":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.breadcrumb.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function z7Cp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"layout-breadcrumb\">\n    <div class=\"breadcrumb\">\n        <div class=\"route-bar-breadcrumb\">\n            <ng-template ngFor=\"ngFor\" let-item=\"let-item\" let-last=\"last\" [ngForOf]=\"items\">\n                <li>\n                    <a [routerLink]=\"item.routerLink\" *ngIf=\"item.routerLink\">{{item.label}}</a>\n\n                    <ng-container *ngIf=\"!item.routerLink\">{{item.label}}</ng-container>\n                </li>\n\n                <li *ngIf=\"!last\">\n                    <i class=\"pi pi-angle-right\"></i>\n                </li>\n            </ng-template>\n        </div>\n    </div>\n\n    <!-- <div class=\"notification\">\n        👋 Bonjour Olivia, there is no notification today for you\n    </div> -->\n</div>";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zYCZ":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/text.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function zYCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h4>Text</h4>\n\t\t\t<p>Manage the alignment and the styling of a text with <a href=\"https://github.com/primefaces/primeflex\">PrimeFlex</a> text utilities.</p>\n\n\t\t\t<h5>Alignment</h5>\n\t\t\t<div class=\"p-mb-3 p-text-left\">Left</div>\n\t\t\t<div class=\"p-mb-3 p-text-center\">Center</div>\n\t\t\t<div class=\"p-text-right\">Right</div>\n\n\t\t\t<h5>Wrap</h5>\n\t\t\t<div class=\"p-mb-3 demo-container\" style=\"width: 10rem\">Long text wraps and does not overlow.</div>\n\t\t\t<div class=\"p-mb-3 demo-container p-text-nowrap\" style=\"width: 10rem\">Long text does not wrap and overflows the parent.</div>\n\t\t\t<div class=\"p-mb-3 demo-container p-text-nowrap p-text-truncate\" style=\"width: 10rem\">Long text does not wrap and overflows the parent.</div>\n\n\t\t\t<h5>Transform</h5>\n\t\t\t<div class=\"p-mb-3 p-text-lowercase\">LOWERCASE</div>\n\t\t\t<div class=\"p-mb-3 p-text-uppercase\">uppercase</div>\n\t\t\t<div class=\"p-text-capitalize\">capitalize</div>\n\n\t\t\t<h5>Style</h5>\n\t\t\t<div class=\"p-mb-3 p-text-bold\">Bold</div>\n\t\t\t<div class=\"p-mb-3 p-text-normal\">Normal</div>\n\t\t\t<div class=\"p-mb-3 p-text-light\">Light</div>\n\t\t\t<div class=\"p-mb-3 p-text-italic\">Italic</div>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
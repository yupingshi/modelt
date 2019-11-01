(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-events-store-events-module"],{

/***/ "./src/app/store-events/store-events.component.html":
/*!**********************************************************!*\
  !*** ./src/app/store-events/store-events.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container margin-top-25\" >\r\n  <div #storeEvents></div>\r\n</section>"

/***/ }),

/***/ "./src/app/store-events/store-events.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/store-events/store-events.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/store-events/store-events.component.ts":
/*!********************************************************!*\
  !*** ./src/app/store-events/store-events.component.ts ***!
  \********************************************************/
/*! exports provided: StoreEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreEventsComponent", function() { return StoreEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/singleton.service */ "./src/app/services/singleton.service.ts");
/* harmony import */ var _services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/meta.service */ "./src/app/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreEventsComponent = /** @class */ (function () {
    function StoreEventsComponent(singletonServ, metaService) {
        this.singletonServ = singletonServ;
        this.metaService = metaService;
    }
    StoreEventsComponent.prototype.ngOnInit = function () {
        this.renderTemplate();
    };
    StoreEventsComponent.prototype.renderTemplate = function () {
        var that = this;
        AmpCa.utils = new AmpCa.Utils();
        var baseSite = this.singletonServ.catalogVersion;
        AmpCa.utils.getHtmlServiceData({
            auth: {
                baseUrl: "https://c1.adis.ws",
                id: "8a52922b-461b-45f5-8f90-0cdf06f7a894",
                store: "moltonbrown",
                templateName: "acc-template-homepage",
                locale: baseSite.locale
            },
            callback: function (htm) {
                that.storeEvents.nativeElement.innerHTML = htm;
                AmpCa.utils.postProcessing.execHtmlService("homepage", {});
            }
        });
        this.metaService.createCanonicalURL();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("storeEvents"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StoreEventsComponent.prototype, "storeEvents", void 0);
    StoreEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-events',
            template: __webpack_require__(/*! ./store-events.component.html */ "./src/app/store-events/store-events.component.html"),
            styles: [__webpack_require__(/*! ./store-events.component.scss */ "./src/app/store-events/store-events.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_singleton_service__WEBPACK_IMPORTED_MODULE_1__["SingletonService"],
            _services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"]])
    ], StoreEventsComponent);
    return StoreEventsComponent;
}());



/***/ }),

/***/ "./src/app/store-events/store-events.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/store-events/store-events.module.ts ***!
  \*****************************************************/
/*! exports provided: storeEventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeEventsModule", function() { return storeEventsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-events.component */ "./src/app/store-events/store-events.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _store_events_component__WEBPACK_IMPORTED_MODULE_3__["StoreEventsComponent"], runGuardsAndResolvers: 'always' }
];
var storeEventsModule = /** @class */ (function () {
    function storeEventsModule() {
    }
    storeEventsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _store_events_component__WEBPACK_IMPORTED_MODULE_3__["StoreEventsComponent"]
            ],
            providers: [
                _store_events_component__WEBPACK_IMPORTED_MODULE_3__["StoreEventsComponent"]
            ]
        })
    ], storeEventsModule);
    return storeEventsModule;
}());



/***/ })

}]);
//# sourceMappingURL=store-events-store-events-module.js.map
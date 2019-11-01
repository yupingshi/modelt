(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["corporate-gifts-corporate-gifts-module"],{

/***/ "./src/app/corporate-gifts/corporate-gifts.component.html":
/*!****************************************************************!*\
  !*** ./src/app/corporate-gifts/corporate-gifts.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"container\" style=\"margin-top:25px;\">\r\n  <div #corporateGift></div>\r\n</section>"

/***/ }),

/***/ "./src/app/corporate-gifts/corporate-gifts.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/corporate-gifts/corporate-gifts.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/corporate-gifts/corporate-gifts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/corporate-gifts/corporate-gifts.component.ts ***!
  \**************************************************************/
/*! exports provided: CorporateGiftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateGiftsComponent", function() { return CorporateGiftsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/singleton.service */ "./src/app/services/singleton.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CorporateGiftsComponent = /** @class */ (function () {
    function CorporateGiftsComponent(singletonServ) {
        this.singletonServ = singletonServ;
    }
    CorporateGiftsComponent.prototype.ngOnInit = function () {
        this.renderTemplate();
    };
    CorporateGiftsComponent.prototype.renderTemplate = function () {
        var that = this;
        var baseSite = this.singletonServ.catalogVersion;
        AmpCa.utils = new AmpCa.Utils();
        AmpCa.utils.getHtmlServiceData({
            auth: {
                baseUrl: 'https://c1.adis.ws',
                id: 'ee27602d-f776-483d-93b8-940f63858006',
                store: 'moltonbrown',
                templateName: 'acc-template-homepage',
                locale: baseSite.locale
            },
            callback: function (htm) {
                that.corporateGift.nativeElement.innerHTML = htm;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('corporateGift'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CorporateGiftsComponent.prototype, "corporateGift", void 0);
    CorporateGiftsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-corporate-gifts',
            template: __webpack_require__(/*! ./corporate-gifts.component.html */ "./src/app/corporate-gifts/corporate-gifts.component.html"),
            styles: [__webpack_require__(/*! ./corporate-gifts.component.scss */ "./src/app/corporate-gifts/corporate-gifts.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_singleton_service__WEBPACK_IMPORTED_MODULE_1__["SingletonService"]])
    ], CorporateGiftsComponent);
    return CorporateGiftsComponent;
}());



/***/ }),

/***/ "./src/app/corporate-gifts/corporate-gifts.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/corporate-gifts/corporate-gifts.module.ts ***!
  \***********************************************************/
/*! exports provided: corporateGiftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corporateGiftModule", function() { return corporateGiftModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _corporate_gifts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corporate-gifts.component */ "./src/app/corporate-gifts/corporate-gifts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _corporate_gifts_component__WEBPACK_IMPORTED_MODULE_3__["CorporateGiftsComponent"], runGuardsAndResolvers: 'always' }
];
var corporateGiftModule = /** @class */ (function () {
    function corporateGiftModule() {
    }
    corporateGiftModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _corporate_gifts_component__WEBPACK_IMPORTED_MODULE_3__["CorporateGiftsComponent"]
            ],
            providers: []
        })
    ], corporateGiftModule);
    return corporateGiftModule;
}());



/***/ })

}]);
//# sourceMappingURL=corporate-gifts-corporate-gifts-module.js.map
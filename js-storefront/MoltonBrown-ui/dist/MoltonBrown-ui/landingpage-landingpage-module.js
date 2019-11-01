(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landingpage-landingpage-module"],{

/***/ "./src/app/component/ngui-in-view/ngUiView.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/ngui-in-view/ngUiView.module.ts ***!
  \***********************************************************/
/*! exports provided: NgUiViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgUiViewModule", function() { return NgUiViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngui_in_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngui-in-view.component */ "./src/app/component/ngui-in-view/ngui-in-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgUiViewModule = /** @class */ (function () {
    function NgUiViewModule() {
    }
    NgUiViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_ngui_in_view_component__WEBPACK_IMPORTED_MODULE_3__["NguiInViewComponent"]],
            exports: [_ngui_in_view_component__WEBPACK_IMPORTED_MODULE_3__["NguiInViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        })
    ], NgUiViewModule);
    return NgUiViewModule;
}());



/***/ }),

/***/ "./src/app/component/ngui-in-view/ngui-in-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/ngui-in-view/ngui-in-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"inView\" [ngTemplateOutlet]=\"template\">\r\n</ng-container>"

/***/ }),

/***/ "./src/app/component/ngui-in-view/ngui-in-view.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/ngui-in-view/ngui-in-view.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/ngui-in-view/ngui-in-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/ngui-in-view/ngui-in-view.component.ts ***!
  \******************************************************************/
/*! exports provided: NguiInViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiInViewComponent", function() { return NguiInViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NguiInViewComponent = /** @class */ (function () {
    function NguiInViewComponent(element, renderer, platformId) {
        this.element = element;
        this.renderer = renderer;
        this.platformId = platformId;
        this.inView = false;
        this.once50PctVisible = false;
        this.options = { threshold: [.1, .2, .3, .4, .5, .6, .7, .8] };
        this.inView$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notInView$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NguiInViewComponent.prototype.ngOnInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
            this.observer.observe(this.element.nativeElement);
        }
    };
    NguiInViewComponent.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
    };
    NguiInViewComponent.prototype.handleIntersect = function (entries, observer) {
        var _this = this;
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                _this.inView = true;
                _this.defaultInViewHandler(entry);
                _this.inView$.emit(entry);
            }
            else {
                _this.notInView$.emit(entry);
            }
        });
    };
    NguiInViewComponent.prototype.defaultInViewHandler = function (entry) {
        if (this.once50PctVisible)
            return false;
        if (this.inView$.observers.length)
            return false;
        if (entry.intersectionRatio < 0.8) {
            var opacity = entry.intersectionRatio * (1 / 0.8);
            var blur_1 = 20 - Math.floor(entry.intersectionRatio * 10) * 4;
            var filter = "blur(" + blur_1 + "px)";
            Object.assign(entry.target.style, { opacity: opacity, filter: filter });
        }
        else {
            entry.target.style.opacity = 1;
            entry.target.style.filter = 'unset';
            this.once50PctVisible = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], NguiInViewComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NguiInViewComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('inView'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NguiInViewComponent.prototype, "inView$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('notInView'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NguiInViewComponent.prototype, "notInView$", void 0);
    NguiInViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngui-in-view',
            template: __webpack_require__(/*! ./ngui-in-view.component.html */ "./src/app/component/ngui-in-view/ngui-in-view.component.html"),
            styles: [__webpack_require__(/*! ./ngui-in-view.component.scss */ "./src/app/component/ngui-in-view/ngui-in-view.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], Object])
    ], NguiInViewComponent);
    return NguiInViewComponent;
}());



/***/ }),

/***/ "./src/app/landingpage/landingpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div id=\"landingpage-conatiner\" >\r\n    <div  class=\"landingpage-container main__inner-wrapper landing_template_wrappper\" id=\"landing_template_wrappper\" >\r\n        <div style=\"min-height:500px;height: 100%;\">\r\n             \r\n        </div> \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/landingpage/landingpage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Century Gothic';\n  src: url(\"/assets/fonts/Century/fonts/CENTURY.ttf\") format(\"ttf\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff2\") format(\"woff2\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff\") format(\"woff\"), url(\"/assets/fonts/Century/fonts/CENTURY.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Regular';\n  src: url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Bold';\n  src: url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Italic';\n  src: url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.svg\") format(\"svg\"); }\n\n.padding-top-1 {\n  padding-top: 1px; }\n\n.pt-1 {\n  padding-top: 1px; }\n\n.margin-top-1 {\n  margin-top: 1px; }\n\n.ml-1 {\n  margin-left: 1px; }\n\n.mt-1 {\n  margin-top: 1px; }\n\n.margin-bottom-1 {\n  margin-top: 1px; }\n\n.padding-top-2 {\n  padding-top: 2px; }\n\n.pt-2 {\n  padding-top: 2px; }\n\n.margin-top-2 {\n  margin-top: 2px; }\n\n.ml-2 {\n  margin-left: 2px; }\n\n.mt-2 {\n  margin-top: 2px; }\n\n.margin-bottom-2 {\n  margin-top: 2px; }\n\n.padding-top-3 {\n  padding-top: 3px; }\n\n.pt-3 {\n  padding-top: 3px; }\n\n.margin-top-3 {\n  margin-top: 3px; }\n\n.ml-3 {\n  margin-left: 3px; }\n\n.mt-3 {\n  margin-top: 3px; }\n\n.margin-bottom-3 {\n  margin-top: 3px; }\n\n.padding-top-4 {\n  padding-top: 4px; }\n\n.pt-4 {\n  padding-top: 4px; }\n\n.margin-top-4 {\n  margin-top: 4px; }\n\n.ml-4 {\n  margin-left: 4px; }\n\n.mt-4 {\n  margin-top: 4px; }\n\n.margin-bottom-4 {\n  margin-top: 4px; }\n\n.padding-top-5 {\n  padding-top: 5px; }\n\n.pt-5 {\n  padding-top: 5px; }\n\n.margin-top-5 {\n  margin-top: 5px; }\n\n.ml-5 {\n  margin-left: 5px; }\n\n.mt-5 {\n  margin-top: 5px; }\n\n.margin-bottom-5 {\n  margin-top: 5px; }\n\n.padding-top-6 {\n  padding-top: 6px; }\n\n.pt-6 {\n  padding-top: 6px; }\n\n.margin-top-6 {\n  margin-top: 6px; }\n\n.ml-6 {\n  margin-left: 6px; }\n\n.mt-6 {\n  margin-top: 6px; }\n\n.margin-bottom-6 {\n  margin-top: 6px; }\n\n.padding-top-7 {\n  padding-top: 7px; }\n\n.pt-7 {\n  padding-top: 7px; }\n\n.margin-top-7 {\n  margin-top: 7px; }\n\n.ml-7 {\n  margin-left: 7px; }\n\n.mt-7 {\n  margin-top: 7px; }\n\n.margin-bottom-7 {\n  margin-top: 7px; }\n\n.padding-top-8 {\n  padding-top: 8px; }\n\n.pt-8 {\n  padding-top: 8px; }\n\n.margin-top-8 {\n  margin-top: 8px; }\n\n.ml-8 {\n  margin-left: 8px; }\n\n.mt-8 {\n  margin-top: 8px; }\n\n.margin-bottom-8 {\n  margin-top: 8px; }\n\n.padding-top-9 {\n  padding-top: 9px; }\n\n.pt-9 {\n  padding-top: 9px; }\n\n.margin-top-9 {\n  margin-top: 9px; }\n\n.ml-9 {\n  margin-left: 9px; }\n\n.mt-9 {\n  margin-top: 9px; }\n\n.margin-bottom-9 {\n  margin-top: 9px; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n\n.pt-10 {\n  padding-top: 10px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.margin-bottom-10 {\n  margin-top: 10px; }\n\n.padding-top-11 {\n  padding-top: 11px; }\n\n.pt-11 {\n  padding-top: 11px; }\n\n.margin-top-11 {\n  margin-top: 11px; }\n\n.ml-11 {\n  margin-left: 11px; }\n\n.mt-11 {\n  margin-top: 11px; }\n\n.margin-bottom-11 {\n  margin-top: 11px; }\n\n.padding-top-12 {\n  padding-top: 12px; }\n\n.pt-12 {\n  padding-top: 12px; }\n\n.margin-top-12 {\n  margin-top: 12px; }\n\n.ml-12 {\n  margin-left: 12px; }\n\n.mt-12 {\n  margin-top: 12px; }\n\n.margin-bottom-12 {\n  margin-top: 12px; }\n\n.padding-top-13 {\n  padding-top: 13px; }\n\n.pt-13 {\n  padding-top: 13px; }\n\n.margin-top-13 {\n  margin-top: 13px; }\n\n.ml-13 {\n  margin-left: 13px; }\n\n.mt-13 {\n  margin-top: 13px; }\n\n.margin-bottom-13 {\n  margin-top: 13px; }\n\n.padding-top-14 {\n  padding-top: 14px; }\n\n.pt-14 {\n  padding-top: 14px; }\n\n.margin-top-14 {\n  margin-top: 14px; }\n\n.ml-14 {\n  margin-left: 14px; }\n\n.mt-14 {\n  margin-top: 14px; }\n\n.margin-bottom-14 {\n  margin-top: 14px; }\n\n.padding-top-15 {\n  padding-top: 15px; }\n\n.pt-15 {\n  padding-top: 15px; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.ml-15 {\n  margin-left: 15px; }\n\n.mt-15 {\n  margin-top: 15px; }\n\n.margin-bottom-15 {\n  margin-top: 15px; }\n\n.padding-top-16 {\n  padding-top: 16px; }\n\n.pt-16 {\n  padding-top: 16px; }\n\n.margin-top-16 {\n  margin-top: 16px; }\n\n.ml-16 {\n  margin-left: 16px; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.margin-bottom-16 {\n  margin-top: 16px; }\n\n.padding-top-17 {\n  padding-top: 17px; }\n\n.pt-17 {\n  padding-top: 17px; }\n\n.margin-top-17 {\n  margin-top: 17px; }\n\n.ml-17 {\n  margin-left: 17px; }\n\n.mt-17 {\n  margin-top: 17px; }\n\n.margin-bottom-17 {\n  margin-top: 17px; }\n\n.padding-top-18 {\n  padding-top: 18px; }\n\n.pt-18 {\n  padding-top: 18px; }\n\n.margin-top-18 {\n  margin-top: 18px; }\n\n.ml-18 {\n  margin-left: 18px; }\n\n.mt-18 {\n  margin-top: 18px; }\n\n.margin-bottom-18 {\n  margin-top: 18px; }\n\n.padding-top-19 {\n  padding-top: 19px; }\n\n.pt-19 {\n  padding-top: 19px; }\n\n.margin-top-19 {\n  margin-top: 19px; }\n\n.ml-19 {\n  margin-left: 19px; }\n\n.mt-19 {\n  margin-top: 19px; }\n\n.margin-bottom-19 {\n  margin-top: 19px; }\n\n.padding-top-20 {\n  padding-top: 20px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.margin-bottom-20 {\n  margin-top: 20px; }\n\n.padding-top-21 {\n  padding-top: 21px; }\n\n.pt-21 {\n  padding-top: 21px; }\n\n.margin-top-21 {\n  margin-top: 21px; }\n\n.ml-21 {\n  margin-left: 21px; }\n\n.mt-21 {\n  margin-top: 21px; }\n\n.margin-bottom-21 {\n  margin-top: 21px; }\n\n.padding-top-22 {\n  padding-top: 22px; }\n\n.pt-22 {\n  padding-top: 22px; }\n\n.margin-top-22 {\n  margin-top: 22px; }\n\n.ml-22 {\n  margin-left: 22px; }\n\n.mt-22 {\n  margin-top: 22px; }\n\n.margin-bottom-22 {\n  margin-top: 22px; }\n\n.padding-top-23 {\n  padding-top: 23px; }\n\n.pt-23 {\n  padding-top: 23px; }\n\n.margin-top-23 {\n  margin-top: 23px; }\n\n.ml-23 {\n  margin-left: 23px; }\n\n.mt-23 {\n  margin-top: 23px; }\n\n.margin-bottom-23 {\n  margin-top: 23px; }\n\n.padding-top-24 {\n  padding-top: 24px; }\n\n.pt-24 {\n  padding-top: 24px; }\n\n.margin-top-24 {\n  margin-top: 24px; }\n\n.ml-24 {\n  margin-left: 24px; }\n\n.mt-24 {\n  margin-top: 24px; }\n\n.margin-bottom-24 {\n  margin-top: 24px; }\n\n.padding-top-25 {\n  padding-top: 25px; }\n\n.pt-25 {\n  padding-top: 25px; }\n\n.margin-top-25 {\n  margin-top: 25px; }\n\n.ml-25 {\n  margin-left: 25px; }\n\n.mt-25 {\n  margin-top: 25px; }\n\n.margin-bottom-25 {\n  margin-top: 25px; }\n\n.padding-top-26 {\n  padding-top: 26px; }\n\n.pt-26 {\n  padding-top: 26px; }\n\n.margin-top-26 {\n  margin-top: 26px; }\n\n.ml-26 {\n  margin-left: 26px; }\n\n.mt-26 {\n  margin-top: 26px; }\n\n.margin-bottom-26 {\n  margin-top: 26px; }\n\n.padding-top-27 {\n  padding-top: 27px; }\n\n.pt-27 {\n  padding-top: 27px; }\n\n.margin-top-27 {\n  margin-top: 27px; }\n\n.ml-27 {\n  margin-left: 27px; }\n\n.mt-27 {\n  margin-top: 27px; }\n\n.margin-bottom-27 {\n  margin-top: 27px; }\n\n.padding-top-28 {\n  padding-top: 28px; }\n\n.pt-28 {\n  padding-top: 28px; }\n\n.margin-top-28 {\n  margin-top: 28px; }\n\n.ml-28 {\n  margin-left: 28px; }\n\n.mt-28 {\n  margin-top: 28px; }\n\n.margin-bottom-28 {\n  margin-top: 28px; }\n\n.padding-top-29 {\n  padding-top: 29px; }\n\n.pt-29 {\n  padding-top: 29px; }\n\n.margin-top-29 {\n  margin-top: 29px; }\n\n.ml-29 {\n  margin-left: 29px; }\n\n.mt-29 {\n  margin-top: 29px; }\n\n.margin-bottom-29 {\n  margin-top: 29px; }\n\n.padding-top-30 {\n  padding-top: 30px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.margin-top-30 {\n  margin-top: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.margin-bottom-30 {\n  margin-top: 30px; }\n\n.padding-top-31 {\n  padding-top: 31px; }\n\n.pt-31 {\n  padding-top: 31px; }\n\n.margin-top-31 {\n  margin-top: 31px; }\n\n.ml-31 {\n  margin-left: 31px; }\n\n.mt-31 {\n  margin-top: 31px; }\n\n.margin-bottom-31 {\n  margin-top: 31px; }\n\n.padding-top-32 {\n  padding-top: 32px; }\n\n.pt-32 {\n  padding-top: 32px; }\n\n.margin-top-32 {\n  margin-top: 32px; }\n\n.ml-32 {\n  margin-left: 32px; }\n\n.mt-32 {\n  margin-top: 32px; }\n\n.margin-bottom-32 {\n  margin-top: 32px; }\n\n.padding-top-33 {\n  padding-top: 33px; }\n\n.pt-33 {\n  padding-top: 33px; }\n\n.margin-top-33 {\n  margin-top: 33px; }\n\n.ml-33 {\n  margin-left: 33px; }\n\n.mt-33 {\n  margin-top: 33px; }\n\n.margin-bottom-33 {\n  margin-top: 33px; }\n\n.padding-top-34 {\n  padding-top: 34px; }\n\n.pt-34 {\n  padding-top: 34px; }\n\n.margin-top-34 {\n  margin-top: 34px; }\n\n.ml-34 {\n  margin-left: 34px; }\n\n.mt-34 {\n  margin-top: 34px; }\n\n.margin-bottom-34 {\n  margin-top: 34px; }\n\n.padding-top-35 {\n  padding-top: 35px; }\n\n.pt-35 {\n  padding-top: 35px; }\n\n.margin-top-35 {\n  margin-top: 35px; }\n\n.ml-35 {\n  margin-left: 35px; }\n\n.mt-35 {\n  margin-top: 35px; }\n\n.margin-bottom-35 {\n  margin-top: 35px; }\n\n.padding-top-36 {\n  padding-top: 36px; }\n\n.pt-36 {\n  padding-top: 36px; }\n\n.margin-top-36 {\n  margin-top: 36px; }\n\n.ml-36 {\n  margin-left: 36px; }\n\n.mt-36 {\n  margin-top: 36px; }\n\n.margin-bottom-36 {\n  margin-top: 36px; }\n\n.padding-top-37 {\n  padding-top: 37px; }\n\n.pt-37 {\n  padding-top: 37px; }\n\n.margin-top-37 {\n  margin-top: 37px; }\n\n.ml-37 {\n  margin-left: 37px; }\n\n.mt-37 {\n  margin-top: 37px; }\n\n.margin-bottom-37 {\n  margin-top: 37px; }\n\n.padding-top-38 {\n  padding-top: 38px; }\n\n.pt-38 {\n  padding-top: 38px; }\n\n.margin-top-38 {\n  margin-top: 38px; }\n\n.ml-38 {\n  margin-left: 38px; }\n\n.mt-38 {\n  margin-top: 38px; }\n\n.margin-bottom-38 {\n  margin-top: 38px; }\n\n.padding-top-39 {\n  padding-top: 39px; }\n\n.pt-39 {\n  padding-top: 39px; }\n\n.margin-top-39 {\n  margin-top: 39px; }\n\n.ml-39 {\n  margin-left: 39px; }\n\n.mt-39 {\n  margin-top: 39px; }\n\n.margin-bottom-39 {\n  margin-top: 39px; }\n\n.padding-top-40 {\n  padding-top: 40px; }\n\n.pt-40 {\n  padding-top: 40px; }\n\n.margin-top-40 {\n  margin-top: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.margin-bottom-40 {\n  margin-top: 40px; }\n\n.padding-top-41 {\n  padding-top: 41px; }\n\n.pt-41 {\n  padding-top: 41px; }\n\n.margin-top-41 {\n  margin-top: 41px; }\n\n.ml-41 {\n  margin-left: 41px; }\n\n.mt-41 {\n  margin-top: 41px; }\n\n.margin-bottom-41 {\n  margin-top: 41px; }\n\n.padding-top-42 {\n  padding-top: 42px; }\n\n.pt-42 {\n  padding-top: 42px; }\n\n.margin-top-42 {\n  margin-top: 42px; }\n\n.ml-42 {\n  margin-left: 42px; }\n\n.mt-42 {\n  margin-top: 42px; }\n\n.margin-bottom-42 {\n  margin-top: 42px; }\n\n.padding-top-43 {\n  padding-top: 43px; }\n\n.pt-43 {\n  padding-top: 43px; }\n\n.margin-top-43 {\n  margin-top: 43px; }\n\n.ml-43 {\n  margin-left: 43px; }\n\n.mt-43 {\n  margin-top: 43px; }\n\n.margin-bottom-43 {\n  margin-top: 43px; }\n\n.padding-top-44 {\n  padding-top: 44px; }\n\n.pt-44 {\n  padding-top: 44px; }\n\n.margin-top-44 {\n  margin-top: 44px; }\n\n.ml-44 {\n  margin-left: 44px; }\n\n.mt-44 {\n  margin-top: 44px; }\n\n.margin-bottom-44 {\n  margin-top: 44px; }\n\n.padding-top-45 {\n  padding-top: 45px; }\n\n.pt-45 {\n  padding-top: 45px; }\n\n.margin-top-45 {\n  margin-top: 45px; }\n\n.ml-45 {\n  margin-left: 45px; }\n\n.mt-45 {\n  margin-top: 45px; }\n\n.margin-bottom-45 {\n  margin-top: 45px; }\n\n.padding-top-46 {\n  padding-top: 46px; }\n\n.pt-46 {\n  padding-top: 46px; }\n\n.margin-top-46 {\n  margin-top: 46px; }\n\n.ml-46 {\n  margin-left: 46px; }\n\n.mt-46 {\n  margin-top: 46px; }\n\n.margin-bottom-46 {\n  margin-top: 46px; }\n\n.padding-top-47 {\n  padding-top: 47px; }\n\n.pt-47 {\n  padding-top: 47px; }\n\n.margin-top-47 {\n  margin-top: 47px; }\n\n.ml-47 {\n  margin-left: 47px; }\n\n.mt-47 {\n  margin-top: 47px; }\n\n.margin-bottom-47 {\n  margin-top: 47px; }\n\n.padding-top-48 {\n  padding-top: 48px; }\n\n.pt-48 {\n  padding-top: 48px; }\n\n.margin-top-48 {\n  margin-top: 48px; }\n\n.ml-48 {\n  margin-left: 48px; }\n\n.mt-48 {\n  margin-top: 48px; }\n\n.margin-bottom-48 {\n  margin-top: 48px; }\n\n.padding-top-49 {\n  padding-top: 49px; }\n\n.pt-49 {\n  padding-top: 49px; }\n\n.margin-top-49 {\n  margin-top: 49px; }\n\n.ml-49 {\n  margin-left: 49px; }\n\n.mt-49 {\n  margin-top: 49px; }\n\n.margin-bottom-49 {\n  margin-top: 49px; }\n\n.padding-top-50 {\n  padding-top: 50px; }\n\n.pt-50 {\n  padding-top: 50px; }\n\n.margin-top-50 {\n  margin-top: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.margin-bottom-50 {\n  margin-top: 50px; }\n\n.padding-top-51 {\n  padding-top: 51px; }\n\n.pt-51 {\n  padding-top: 51px; }\n\n.margin-top-51 {\n  margin-top: 51px; }\n\n.ml-51 {\n  margin-left: 51px; }\n\n.mt-51 {\n  margin-top: 51px; }\n\n.margin-bottom-51 {\n  margin-top: 51px; }\n\n.padding-top-52 {\n  padding-top: 52px; }\n\n.pt-52 {\n  padding-top: 52px; }\n\n.margin-top-52 {\n  margin-top: 52px; }\n\n.ml-52 {\n  margin-left: 52px; }\n\n.mt-52 {\n  margin-top: 52px; }\n\n.margin-bottom-52 {\n  margin-top: 52px; }\n\n.padding-top-53 {\n  padding-top: 53px; }\n\n.pt-53 {\n  padding-top: 53px; }\n\n.margin-top-53 {\n  margin-top: 53px; }\n\n.ml-53 {\n  margin-left: 53px; }\n\n.mt-53 {\n  margin-top: 53px; }\n\n.margin-bottom-53 {\n  margin-top: 53px; }\n\n.padding-top-54 {\n  padding-top: 54px; }\n\n.pt-54 {\n  padding-top: 54px; }\n\n.margin-top-54 {\n  margin-top: 54px; }\n\n.ml-54 {\n  margin-left: 54px; }\n\n.mt-54 {\n  margin-top: 54px; }\n\n.margin-bottom-54 {\n  margin-top: 54px; }\n\n.padding-top-55 {\n  padding-top: 55px; }\n\n.pt-55 {\n  padding-top: 55px; }\n\n.margin-top-55 {\n  margin-top: 55px; }\n\n.ml-55 {\n  margin-left: 55px; }\n\n.mt-55 {\n  margin-top: 55px; }\n\n.margin-bottom-55 {\n  margin-top: 55px; }\n\n.padding-top-56 {\n  padding-top: 56px; }\n\n.pt-56 {\n  padding-top: 56px; }\n\n.margin-top-56 {\n  margin-top: 56px; }\n\n.ml-56 {\n  margin-left: 56px; }\n\n.mt-56 {\n  margin-top: 56px; }\n\n.margin-bottom-56 {\n  margin-top: 56px; }\n\n.padding-top-57 {\n  padding-top: 57px; }\n\n.pt-57 {\n  padding-top: 57px; }\n\n.margin-top-57 {\n  margin-top: 57px; }\n\n.ml-57 {\n  margin-left: 57px; }\n\n.mt-57 {\n  margin-top: 57px; }\n\n.margin-bottom-57 {\n  margin-top: 57px; }\n\n.padding-top-58 {\n  padding-top: 58px; }\n\n.pt-58 {\n  padding-top: 58px; }\n\n.margin-top-58 {\n  margin-top: 58px; }\n\n.ml-58 {\n  margin-left: 58px; }\n\n.mt-58 {\n  margin-top: 58px; }\n\n.margin-bottom-58 {\n  margin-top: 58px; }\n\n.padding-top-59 {\n  padding-top: 59px; }\n\n.pt-59 {\n  padding-top: 59px; }\n\n.margin-top-59 {\n  margin-top: 59px; }\n\n.ml-59 {\n  margin-left: 59px; }\n\n.mt-59 {\n  margin-top: 59px; }\n\n.margin-bottom-59 {\n  margin-top: 59px; }\n\n.padding-top-60 {\n  padding-top: 60px; }\n\n.pt-60 {\n  padding-top: 60px; }\n\n.margin-top-60 {\n  margin-top: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.margin-bottom-60 {\n  margin-top: 60px; }\n\n.padding-top-61 {\n  padding-top: 61px; }\n\n.pt-61 {\n  padding-top: 61px; }\n\n.margin-top-61 {\n  margin-top: 61px; }\n\n.ml-61 {\n  margin-left: 61px; }\n\n.mt-61 {\n  margin-top: 61px; }\n\n.margin-bottom-61 {\n  margin-top: 61px; }\n\n.padding-top-62 {\n  padding-top: 62px; }\n\n.pt-62 {\n  padding-top: 62px; }\n\n.margin-top-62 {\n  margin-top: 62px; }\n\n.ml-62 {\n  margin-left: 62px; }\n\n.mt-62 {\n  margin-top: 62px; }\n\n.margin-bottom-62 {\n  margin-top: 62px; }\n\n.padding-top-63 {\n  padding-top: 63px; }\n\n.pt-63 {\n  padding-top: 63px; }\n\n.margin-top-63 {\n  margin-top: 63px; }\n\n.ml-63 {\n  margin-left: 63px; }\n\n.mt-63 {\n  margin-top: 63px; }\n\n.margin-bottom-63 {\n  margin-top: 63px; }\n\n.padding-top-64 {\n  padding-top: 64px; }\n\n.pt-64 {\n  padding-top: 64px; }\n\n.margin-top-64 {\n  margin-top: 64px; }\n\n.ml-64 {\n  margin-left: 64px; }\n\n.mt-64 {\n  margin-top: 64px; }\n\n.margin-bottom-64 {\n  margin-top: 64px; }\n\n.padding-top-65 {\n  padding-top: 65px; }\n\n.pt-65 {\n  padding-top: 65px; }\n\n.margin-top-65 {\n  margin-top: 65px; }\n\n.ml-65 {\n  margin-left: 65px; }\n\n.mt-65 {\n  margin-top: 65px; }\n\n.margin-bottom-65 {\n  margin-top: 65px; }\n\n.padding-top-66 {\n  padding-top: 66px; }\n\n.pt-66 {\n  padding-top: 66px; }\n\n.margin-top-66 {\n  margin-top: 66px; }\n\n.ml-66 {\n  margin-left: 66px; }\n\n.mt-66 {\n  margin-top: 66px; }\n\n.margin-bottom-66 {\n  margin-top: 66px; }\n\n.padding-top-67 {\n  padding-top: 67px; }\n\n.pt-67 {\n  padding-top: 67px; }\n\n.margin-top-67 {\n  margin-top: 67px; }\n\n.ml-67 {\n  margin-left: 67px; }\n\n.mt-67 {\n  margin-top: 67px; }\n\n.margin-bottom-67 {\n  margin-top: 67px; }\n\n.padding-top-68 {\n  padding-top: 68px; }\n\n.pt-68 {\n  padding-top: 68px; }\n\n.margin-top-68 {\n  margin-top: 68px; }\n\n.ml-68 {\n  margin-left: 68px; }\n\n.mt-68 {\n  margin-top: 68px; }\n\n.margin-bottom-68 {\n  margin-top: 68px; }\n\n.padding-top-69 {\n  padding-top: 69px; }\n\n.pt-69 {\n  padding-top: 69px; }\n\n.margin-top-69 {\n  margin-top: 69px; }\n\n.ml-69 {\n  margin-left: 69px; }\n\n.mt-69 {\n  margin-top: 69px; }\n\n.margin-bottom-69 {\n  margin-top: 69px; }\n\n.padding-top-70 {\n  padding-top: 70px; }\n\n.pt-70 {\n  padding-top: 70px; }\n\n.margin-top-70 {\n  margin-top: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.margin-bottom-70 {\n  margin-top: 70px; }\n\n.padding-top-71 {\n  padding-top: 71px; }\n\n.pt-71 {\n  padding-top: 71px; }\n\n.margin-top-71 {\n  margin-top: 71px; }\n\n.ml-71 {\n  margin-left: 71px; }\n\n.mt-71 {\n  margin-top: 71px; }\n\n.margin-bottom-71 {\n  margin-top: 71px; }\n\n.padding-top-72 {\n  padding-top: 72px; }\n\n.pt-72 {\n  padding-top: 72px; }\n\n.margin-top-72 {\n  margin-top: 72px; }\n\n.ml-72 {\n  margin-left: 72px; }\n\n.mt-72 {\n  margin-top: 72px; }\n\n.margin-bottom-72 {\n  margin-top: 72px; }\n\n.padding-top-73 {\n  padding-top: 73px; }\n\n.pt-73 {\n  padding-top: 73px; }\n\n.margin-top-73 {\n  margin-top: 73px; }\n\n.ml-73 {\n  margin-left: 73px; }\n\n.mt-73 {\n  margin-top: 73px; }\n\n.margin-bottom-73 {\n  margin-top: 73px; }\n\n.padding-top-74 {\n  padding-top: 74px; }\n\n.pt-74 {\n  padding-top: 74px; }\n\n.margin-top-74 {\n  margin-top: 74px; }\n\n.ml-74 {\n  margin-left: 74px; }\n\n.mt-74 {\n  margin-top: 74px; }\n\n.margin-bottom-74 {\n  margin-top: 74px; }\n\n.padding-top-75 {\n  padding-top: 75px; }\n\n.pt-75 {\n  padding-top: 75px; }\n\n.margin-top-75 {\n  margin-top: 75px; }\n\n.ml-75 {\n  margin-left: 75px; }\n\n.mt-75 {\n  margin-top: 75px; }\n\n.margin-bottom-75 {\n  margin-top: 75px; }\n\n.padding-top-76 {\n  padding-top: 76px; }\n\n.pt-76 {\n  padding-top: 76px; }\n\n.margin-top-76 {\n  margin-top: 76px; }\n\n.ml-76 {\n  margin-left: 76px; }\n\n.mt-76 {\n  margin-top: 76px; }\n\n.margin-bottom-76 {\n  margin-top: 76px; }\n\n.padding-top-77 {\n  padding-top: 77px; }\n\n.pt-77 {\n  padding-top: 77px; }\n\n.margin-top-77 {\n  margin-top: 77px; }\n\n.ml-77 {\n  margin-left: 77px; }\n\n.mt-77 {\n  margin-top: 77px; }\n\n.margin-bottom-77 {\n  margin-top: 77px; }\n\n.padding-top-78 {\n  padding-top: 78px; }\n\n.pt-78 {\n  padding-top: 78px; }\n\n.margin-top-78 {\n  margin-top: 78px; }\n\n.ml-78 {\n  margin-left: 78px; }\n\n.mt-78 {\n  margin-top: 78px; }\n\n.margin-bottom-78 {\n  margin-top: 78px; }\n\n.padding-top-79 {\n  padding-top: 79px; }\n\n.pt-79 {\n  padding-top: 79px; }\n\n.margin-top-79 {\n  margin-top: 79px; }\n\n.ml-79 {\n  margin-left: 79px; }\n\n.mt-79 {\n  margin-top: 79px; }\n\n.margin-bottom-79 {\n  margin-top: 79px; }\n\n.padding-top-80 {\n  padding-top: 80px; }\n\n.pt-80 {\n  padding-top: 80px; }\n\n.margin-top-80 {\n  margin-top: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.margin-bottom-80 {\n  margin-top: 80px; }\n\n.padding-top-81 {\n  padding-top: 81px; }\n\n.pt-81 {\n  padding-top: 81px; }\n\n.margin-top-81 {\n  margin-top: 81px; }\n\n.ml-81 {\n  margin-left: 81px; }\n\n.mt-81 {\n  margin-top: 81px; }\n\n.margin-bottom-81 {\n  margin-top: 81px; }\n\n.padding-top-82 {\n  padding-top: 82px; }\n\n.pt-82 {\n  padding-top: 82px; }\n\n.margin-top-82 {\n  margin-top: 82px; }\n\n.ml-82 {\n  margin-left: 82px; }\n\n.mt-82 {\n  margin-top: 82px; }\n\n.margin-bottom-82 {\n  margin-top: 82px; }\n\n.padding-top-83 {\n  padding-top: 83px; }\n\n.pt-83 {\n  padding-top: 83px; }\n\n.margin-top-83 {\n  margin-top: 83px; }\n\n.ml-83 {\n  margin-left: 83px; }\n\n.mt-83 {\n  margin-top: 83px; }\n\n.margin-bottom-83 {\n  margin-top: 83px; }\n\n.padding-top-84 {\n  padding-top: 84px; }\n\n.pt-84 {\n  padding-top: 84px; }\n\n.margin-top-84 {\n  margin-top: 84px; }\n\n.ml-84 {\n  margin-left: 84px; }\n\n.mt-84 {\n  margin-top: 84px; }\n\n.margin-bottom-84 {\n  margin-top: 84px; }\n\n.padding-top-85 {\n  padding-top: 85px; }\n\n.pt-85 {\n  padding-top: 85px; }\n\n.margin-top-85 {\n  margin-top: 85px; }\n\n.ml-85 {\n  margin-left: 85px; }\n\n.mt-85 {\n  margin-top: 85px; }\n\n.margin-bottom-85 {\n  margin-top: 85px; }\n\n.padding-top-86 {\n  padding-top: 86px; }\n\n.pt-86 {\n  padding-top: 86px; }\n\n.margin-top-86 {\n  margin-top: 86px; }\n\n.ml-86 {\n  margin-left: 86px; }\n\n.mt-86 {\n  margin-top: 86px; }\n\n.margin-bottom-86 {\n  margin-top: 86px; }\n\n.padding-top-87 {\n  padding-top: 87px; }\n\n.pt-87 {\n  padding-top: 87px; }\n\n.margin-top-87 {\n  margin-top: 87px; }\n\n.ml-87 {\n  margin-left: 87px; }\n\n.mt-87 {\n  margin-top: 87px; }\n\n.margin-bottom-87 {\n  margin-top: 87px; }\n\n.padding-top-88 {\n  padding-top: 88px; }\n\n.pt-88 {\n  padding-top: 88px; }\n\n.margin-top-88 {\n  margin-top: 88px; }\n\n.ml-88 {\n  margin-left: 88px; }\n\n.mt-88 {\n  margin-top: 88px; }\n\n.margin-bottom-88 {\n  margin-top: 88px; }\n\n.padding-top-89 {\n  padding-top: 89px; }\n\n.pt-89 {\n  padding-top: 89px; }\n\n.margin-top-89 {\n  margin-top: 89px; }\n\n.ml-89 {\n  margin-left: 89px; }\n\n.mt-89 {\n  margin-top: 89px; }\n\n.margin-bottom-89 {\n  margin-top: 89px; }\n\n.padding-top-90 {\n  padding-top: 90px; }\n\n.pt-90 {\n  padding-top: 90px; }\n\n.margin-top-90 {\n  margin-top: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.margin-bottom-90 {\n  margin-top: 90px; }\n\n.padding-top-91 {\n  padding-top: 91px; }\n\n.pt-91 {\n  padding-top: 91px; }\n\n.margin-top-91 {\n  margin-top: 91px; }\n\n.ml-91 {\n  margin-left: 91px; }\n\n.mt-91 {\n  margin-top: 91px; }\n\n.margin-bottom-91 {\n  margin-top: 91px; }\n\n.padding-top-92 {\n  padding-top: 92px; }\n\n.pt-92 {\n  padding-top: 92px; }\n\n.margin-top-92 {\n  margin-top: 92px; }\n\n.ml-92 {\n  margin-left: 92px; }\n\n.mt-92 {\n  margin-top: 92px; }\n\n.margin-bottom-92 {\n  margin-top: 92px; }\n\n.padding-top-93 {\n  padding-top: 93px; }\n\n.pt-93 {\n  padding-top: 93px; }\n\n.margin-top-93 {\n  margin-top: 93px; }\n\n.ml-93 {\n  margin-left: 93px; }\n\n.mt-93 {\n  margin-top: 93px; }\n\n.margin-bottom-93 {\n  margin-top: 93px; }\n\n.padding-top-94 {\n  padding-top: 94px; }\n\n.pt-94 {\n  padding-top: 94px; }\n\n.margin-top-94 {\n  margin-top: 94px; }\n\n.ml-94 {\n  margin-left: 94px; }\n\n.mt-94 {\n  margin-top: 94px; }\n\n.margin-bottom-94 {\n  margin-top: 94px; }\n\n.padding-top-95 {\n  padding-top: 95px; }\n\n.pt-95 {\n  padding-top: 95px; }\n\n.margin-top-95 {\n  margin-top: 95px; }\n\n.ml-95 {\n  margin-left: 95px; }\n\n.mt-95 {\n  margin-top: 95px; }\n\n.margin-bottom-95 {\n  margin-top: 95px; }\n\n.padding-top-96 {\n  padding-top: 96px; }\n\n.pt-96 {\n  padding-top: 96px; }\n\n.margin-top-96 {\n  margin-top: 96px; }\n\n.ml-96 {\n  margin-left: 96px; }\n\n.mt-96 {\n  margin-top: 96px; }\n\n.margin-bottom-96 {\n  margin-top: 96px; }\n\n.padding-top-97 {\n  padding-top: 97px; }\n\n.pt-97 {\n  padding-top: 97px; }\n\n.margin-top-97 {\n  margin-top: 97px; }\n\n.ml-97 {\n  margin-left: 97px; }\n\n.mt-97 {\n  margin-top: 97px; }\n\n.margin-bottom-97 {\n  margin-top: 97px; }\n\n.padding-top-98 {\n  padding-top: 98px; }\n\n.pt-98 {\n  padding-top: 98px; }\n\n.margin-top-98 {\n  margin-top: 98px; }\n\n.ml-98 {\n  margin-left: 98px; }\n\n.mt-98 {\n  margin-top: 98px; }\n\n.margin-bottom-98 {\n  margin-top: 98px; }\n\n.padding-top-99 {\n  padding-top: 99px; }\n\n.pt-99 {\n  padding-top: 99px; }\n\n.margin-top-99 {\n  margin-top: 99px; }\n\n.ml-99 {\n  margin-left: 99px; }\n\n.mt-99 {\n  margin-top: 99px; }\n\n.margin-bottom-99 {\n  margin-top: 99px; }\n\n.padding-top-100 {\n  padding-top: 100px; }\n\n.pt-100 {\n  padding-top: 100px; }\n\n.margin-top-100 {\n  margin-top: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.margin-bottom-100 {\n  margin-top: 100px; }\n\n/*for targetting small screens */\n\n#landingpage-conatiner .main__inner-wrapper {\n  width: 934px;\n  margin-right: auto;\n  margin-left: auto;\n  text-rendering: optimizeLegibility; }\n\n@media screen and (max-width: 768px) {\n    #landingpage-conatiner .main__inner-wrapper {\n      width: 100%; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-splitBlock .amp-dc-card-link {\n    border: 2px solid #000000;\n    background-color: #ffffff !important;\n    color: #000000 !important; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-splitBlock .amp-dc-card-link:hover {\n      background-color: #000000 !important;\n      color: #ffffff !important; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .home-banner-container .amp-dc-banner-pic-wrap .amp-dc-image, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .home-banner-container .amp-dc-banner-pic-wrap .amp-dc-video-wrap {\n    height: 500px; }\n\n@media screen and (max-width: 768px) {\n      #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .home-banner-container .amp-dc-banner-pic-wrap .amp-dc-image, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .home-banner-container .amp-dc-banner-pic-wrap .amp-dc-video-wrap {\n        height: auto; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .home-banner-container .amp-dc-banner-pic-wrap .amp-dc-image img, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .home-banner-container .amp-dc-banner-pic-wrap .amp-dc-image video, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .home-banner-container .amp-dc-banner-pic-wrap .amp-dc-video-wrap img, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .home-banner-container .amp-dc-banner-pic-wrap .amp-dc-video-wrap video {\n      width: 100%;\n      height: 100%; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n\n@media screen and (max-width: 768px) {\n      #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part {\n      float: none; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card .amp-dc-card-wrap .homepage-rightsection-card-image-03 {\n        width: 428px;\n        height: 286.97px; }\n\n@media screen and (max-width: 768px) {\n          #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card .amp-dc-card-wrap .homepage-rightsection-card-image-03 {\n            margin: auto;\n            width: 95%;\n            height: auto; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-homepage .amp-dc-block-wrap .amp-dc-image {\n        width: 428px;\n        height: 158.95px; }\n\n@media screen and (max-width: 768px) {\n          #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-homepage .amp-dc-block-wrap .amp-dc-image {\n            margin: auto;\n            width: 95%;\n            height: auto; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .homepage-leftsection-card-01 .amp-dc-card-wrap .amp-dc-card-img-wrap .amp-dc-image, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .homepage-leftsection-card-01 .amp-dc-card-wrap .amp-dc-card-img-wrap .amp-dc-video-wrap {\n        width: 428px;\n        height: 288.41px;\n        float: right; }\n\n@media screen and (max-width: 768px) {\n          #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .homepage-leftsection-card-01 .amp-dc-card-wrap .amp-dc-card-img-wrap .amp-dc-image, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .homepage-leftsection-card-01 .amp-dc-card-wrap .amp-dc-card-img-wrap .amp-dc-video-wrap {\n            float: none; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .homepage-leftsection-card-01 .amp-dc-card-wrap .amp-dc-card-img-wrap::after {\n        clear: both !important; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .homepage-leftsection-card-02 .amp-dc-card-wrap .amp-dc-card-img-wrap .amp-dc-image {\n        float: right; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .amp-dc-card-wrap .amp-dc-card-img-wrap {\n        margin-top: 20px;\n        margin-left: 11px;\n        margin-right: 11px; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .amp-dc-card-wrap .amp-dc-card-img-wrap .homepage-leftsection-card-image-01, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .amp-dc-card-wrap .amp-dc-card-img-wrap .homepage-rightsection-image-01, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .amp-dc-card-wrap .amp-dc-card-img-wrap .homepage-rightsection-card-image-02 {\n          width: 428px;\n          height: 288.41px; }\n\n@media screen and (max-width: 768px) {\n            #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .amp-dc-card-wrap .amp-dc-card-img-wrap .homepage-leftsection-card-image-01, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .amp-dc-card-wrap .amp-dc-card-img-wrap .homepage-rightsection-image-01, #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .amp-dc-card-wrap .amp-dc-card-img-wrap .homepage-rightsection-card-image-02 {\n              margin: auto;\n              width: 95%;\n              height: auto; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .amp-dc-card-wrap .amp-dc-card-img-wrap .homepage-leftsection-card-image-02 {\n          width: 428px;\n          height: 513.34px;\n          float: right; }\n\n@media screen and (max-width: 768px) {\n            #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part .amp-dc-split-part-wrap .amp-dc-card .amp-dc-card-wrap .amp-dc-card-img-wrap .homepage-leftsection-card-image-02 {\n              margin: auto;\n              width: 95%;\n              height: auto;\n              float: none; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .misc-banner-01 .amp-dc-card-wrap .amp-dc-card-text-wrap .amp-dc-card-link {\n    color: #000000;\n    line-height: 21px;\n    font-family: Georgia;\n    font-style: italic;\n    font-size: 18px;\n    background-color: transparent;\n    padding-top: 0px; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .imagecontainer .van-aimation {\n    position: absolute;\n    background-image: url(\"https://www.moltonbrown.co.uk/MBPromoImages/Microsites/SharedImages/FreeDelivery/animated-van.gif\") !important; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card .amp-dc-card-name {\n    font-size: 15px;\n    line-height: 20px;\n    color: #000000;\n    font-weight: 700;\n    margin-bottom: 4px; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card .amp-dc-card-description {\n    font-style: italic;\n    font-family: Georgia;\n    padding-bottom: 11px;\n    font-size: 14px;\n    line-height: 1.2;\n    display: block !important;\n    color: #000000; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-banner .amp-dc-banner-header {\n    font-size: 28px;\n    padding-bottom: 11px;\n    color: #000000;\n    font-weight: 500;\n    line-height: 1.1; }\n\n@media screen and (max-width: 480px) {\n      #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-banner .amp-dc-banner-header {\n        font-size: 24px; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-banner .amp-dc-banner-subheader {\n    font-size: 20px;\n    font-style: italic;\n    font-family: Georgia;\n    line-height: 1.2; }\n\n@media screen and (max-width: 480px) {\n      #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-banner .amp-dc-banner-subheader {\n        font-size: 15px; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card-text-wrap .amp-dc-card-link {\n    padding: 7px 25px 5px;\n    line-height: 20px;\n    display: inline-block;\n    text-decoration: none;\n    color: #ffffff;\n    background-color: #000000;\n    text-transform: uppercase; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card .amp-dc-card-text-wrap {\n    padding: 10px 0 0 0;\n    width: 428.51px; }\n\n@media screen and (max-width: 768px) {\n    #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-splitBlock .amp-dc-split-part:first-child {\n      padding: 0; }\n    #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card .amp-dc-card-text-wrap {\n      width: 100%;\n      margin: 0 !important;\n      padding-left: 10px;\n      padding-right: 10px; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card .amp-dc-card-link {\n    margin-top: 0px !important; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card .amp-dc-card-description {\n    margin: 0 auto; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .misc-banner-01 .amp-dc-banner-pic-wrap .amp-dc-image {\n    width: 880px;\n    height: 175px;\n    margin: auto; }\n\n@media screen and (max-width: 768px) {\n      #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .misc-banner-01 .amp-dc-banner-pic-wrap .amp-dc-image {\n        width: 100%;\n        height: auto; } }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .misc-banner-01 .amp-dc-banner-info-wrap {\n    position: static;\n    width: 750px;\n    margin: auto; }\n\n@media screen and (max-width: 768px) {\n      #landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .misc-banner-01 .amp-dc-banner-info-wrap {\n        width: auto !important; } }\n\n.misc-banner-01 {\n  margin-top: 20px;\n  background: transparent;\n  color: #000000 !important; }\n\n@media screen and (max-width: 768px) {\n    .misc-banner-01 .amp-dc-banner-info-wrap .amp-dc-banner-info {\n      width: 100%; } }\n\n.misc-banner-01 .amp-dc-banner-info-wrap .amp-dc-banner-info .amp-dc-banner-description {\n    font-size: 14px !important;\n    padding-bottom: 10px;\n    line-height: 1.2;\n    margin: auto; }\n\n.misc-banner-01 .amp-dc-banner-info-wrap .amp-dc-banner-info .misc-banner-01 {\n    margin: 0px;\n    background-color: transparent !important;\n    color: #000000 !important;\n    font-family: Georgia !important;\n    font-style: italic;\n    font-size: 18px;\n    line-height: 1.2; }\n\n.misc-banner-01 .amp-dc-banner-info-wrap .amp-dc-banner-info .misc-banner-01::after {\n      border-top: 5px solid transparent;\n      border-left: 5px solid;\n      border-bottom: 5px solid transparent;\n      content: \"\";\n      display: inline-block;\n      height: auto;\n      width: auto;\n      margin-left: 3px;\n      vertical-align: baseline;\n      visibility: visible; }\n\n.misc-banner-01 .amp-dc-banner-info-wrap .amp-dc-banner-description {\n    font-size: 14px !important;\n    padding-bottom: 10px;\n    line-height: 1.2;\n    margin: auto;\n    font-style: normal; }\n\n#landingpage-conatiner .main__inner-wrapper .amp-dc-homepage .amp-dc-block-wrap .amp-dc-card .amp-dc-card-text-wrap {\n  margin-top: 20px;\n  margin-left: 11px;\n  margin-right: 11px; }\n\n.homepage-leftsection-card-02 .amp-dc-card-text-wrap, .homepage-leftsection-card-01 .amp-dc-card-text-wrap {\n  float: right; }\n\n.homepage-gifslot {\n  margin-top: 20px;\n  float: right;\n  margin-right: 11px; }\n\n.homepage-slot .amp-dc-card-wrap {\n  opacity: 0;\n  -webkit-transition: opacity 500ms;\n  transition: opacity 500ms; }\n\n.fade-wrapper {\n  opacity: 1 !important; }\n"

/***/ }),

/***/ "./src/app/landingpage/landingpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.ts ***!
  \******************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/singleton.service */ "./src/app/services/singleton.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/meta.service */ "./src/app/services/meta.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent(singletonServ, location, titleService, router, route, metaService) {
        this.singletonServ = singletonServ;
        this.location = location;
        this.titleService = titleService;
        this.router = router;
        this.route = route;
        this.metaService = metaService;
    }
    LandingpageComponent.prototype.windowScroll = function (event) {
        var scrollDistance = $(window).scrollTop();
        var scroll = $(window).scrollTop();
        var $window = $(window);
        var $sidebar = $(".amp-dc-card-wrap");
        if ($sidebar) {
            var $sidebarHeight = $sidebar.innerHeight();
            var $sidebarOffset = $sidebar.offset();
            if ($sidebarOffset) {
                var hT = $sidebarOffset.top, wH = $(window).height(), hH = $('.amp-dc-card-wrap').outerHeight();
                console.log((wH - hT), $window.scrollTop());
                if ($window.scrollTop() > 450) {
                    $sidebar.addClass("fade-wrapper");
                }
                else {
                    $sidebar.removeClass("fade-wrapper");
                }
            }
            // Calc current offset and get all animatables
            // var offset = $(window).scrollTop() + $(window).height(),
            //     $animatables = $('.amp-dc-card-wrap');
            // // Unbind scroll handler if we have no animatables
            // // if ($animatables.length == 0) {
            // //   $(window).off('scroll', doAnimations);
            // // }
            // // Check all animatables and animate them if necessary
            // $animatables.each(function(i) {
            //    var $animatable = $(this);
            // 	if (($animatable.offset().top + $animatable.height() - 20) < offset) {
            //     $animatable.addClass('fade-wrapper');
            // 	} else{
            //    $animatable.removeClass('fade-wrapper')
            //   }
            // });
        }
    };
    LandingpageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Molton Brown® UK | Luxury Beauty, Fragrance, Bath & Body Gift Sets');
        this.getcardFromRenderingServ();
        this.setBVScript();
        this.metaService.createCanonicalURL();
    };
    LandingpageComponent.prototype.setBVScript = function () {
        var baseSite = this.singletonServ.catalogVersion;
        if (baseSite.bv) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = baseSite.bv;
            head.appendChild(script);
        }
    };
    LandingpageComponent.prototype.getcardFromRenderingServ = function () {
        AmpCa.utils = new AmpCa.Utils();
        var baseSite = this.singletonServ.catalogVersion;
        AmpCa.utils.getHtmlServiceData({
            auth: {
                baseUrl: 'https://c1.adis.ws',
                id: '3188a40c-c79b-47c9-9863-6e1d79616c03',
                store: 'moltonbrown',
                templateName: 'acc-template-homepage',
                locale: baseSite.locale
            },
            callback: function (data) {
                if (data) {
                    if (document.querySelectorAll(".landing_template_wrappper")[0]) {
                        document.querySelectorAll(".landing_template_wrappper")[0].innerHTML = data;
                    }
                    // AmpCa.utils.postProcessing.execHtmlService('splitBlock'); 
                }
                //     crl8.ready(function() {
                //      crl8.createExperience('custom-homepage');
                //  });
            }
        });
    };
    LandingpageComponent.prototype.isMyScriptLoaded = function (url) {
        if (!url)
            url = "http://cdn.curalate.com/sites/moltonbrown-pabiml/site/latest/site.min.js";
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].src == url)
                return true;
        }
        return false;
    };
    LandingpageComponent.prototype.removejscssfile = function (filename, filetype) {
        var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none";
        var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none";
        var allsuspects = document.getElementsByTagName(targetelement);
        for (var i = allsuspects.length; i >= 0; i--) {
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
                allsuspects[i].parentNode.removeChild(allsuspects[i]);
        }
    };
    LandingpageComponent.prototype.replacejscssfile = function (oldfilename, newfilename, filetype) {
        var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none"; //determine element type to create nodelist using
        var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none"; //determine corresponding attribute to test for
        var allsuspects = document.getElementsByTagName(targetelement);
        for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename) != -1) {
                var newelement = this.createjscssfile(newfilename, filetype);
                allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i]);
            }
        }
    };
    LandingpageComponent.prototype.createjscssfile = function (filename, filetype) {
        if (filetype == "js") { //if filename is a external JavaScript file
            var fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filename);
        }
        else if (filetype == "css") { //if filename is an external CSS file
            var fileref_1 = document.createElement("link");
            fileref_1.setAttribute("rel", "stylesheet");
            fileref_1.setAttribute("type", "text/css");
            fileref_1.setAttribute("href", filename);
        }
        return fileref;
    };
    LandingpageComponent.prototype.ngOnDestroy = function () {
        // crl8.ready(function() {
        //   crl8.destroyExperience('custom-homepage');
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LandingpageComponent.prototype, "windowScroll", null);
    LandingpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landingpage',
            template: __webpack_require__(/*! ./landingpage.component.html */ "./src/app/landingpage/landingpage.component.html"),
            styles: [__webpack_require__(/*! ./landingpage.component.scss */ "./src/app/landingpage/landingpage.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_singleton_service__WEBPACK_IMPORTED_MODULE_1__["SingletonService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"]])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/app/landingpage/landingpage.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landingpage/landingpage.module.ts ***!
  \***************************************************/
/*! exports provided: landingpageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingpageModule", function() { return landingpageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingpage.component */ "./src/app/landingpage/landingpage.component.ts");
/* harmony import */ var _component_ngui_in_view_ngUiView_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/ngui-in-view/ngUiView.module */ "./src/app/component/ngui-in-view/ngUiView.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _landingpage_component__WEBPACK_IMPORTED_MODULE_3__["LandingpageComponent"], runGuardsAndResolvers: 'always' }
];
var landingpageModule = /** @class */ (function () {
    function landingpageModule() {
    }
    landingpageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _component_ngui_in_view_ngUiView_module__WEBPACK_IMPORTED_MODULE_4__["NgUiViewModule"]
            ],
            declarations: [
                _landingpage_component__WEBPACK_IMPORTED_MODULE_3__["LandingpageComponent"]
            ]
        })
    ], landingpageModule);
    return landingpageModule;
}());



/***/ })

}]);
//# sourceMappingURL=landingpage-landingpage-module.js.map
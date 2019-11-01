(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myaccount-myacc-module"],{

/***/ "./src/app/checkout-cart/googlePlace.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/checkout-cart/googlePlace.directive.ts ***!
  \********************************************************/
/*! exports provided: GooglePlacesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function() { return GooglePlacesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GooglePlacesDirective = /** @class */ (function () {
    function GooglePlacesDirective(elRef) {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    GooglePlacesDirective.prototype.getFormattedAddress = function (place) {
        //@params: place - Google Autocomplete place object
        //@returns: location_obj - An address object in human readable format
        var location_obj = {};
        for (var i in place.address_components) {
            var item = place.address_components[i];
            location_obj['latitude'] = place.geometry.location.lat();
            location_obj['longitude'] = place.geometry.location.lng();
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf("locality") > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf("administrative_area_level_1") > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf("street_number") > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf("route") > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf("country") > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf("postal_code") > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
            else if (item['types'].indexOf("geometry") > -1) {
            }
        }
        return location_obj;
    };
    GooglePlacesDirective.prototype.ngAfterViewInit = function () {
        var that = this;
        var autocomplete = new google.maps.places.Autocomplete(this.element);
        //Event listener to monitor place changes in the input
        google.maps.event.addListener(autocomplete, 'place_changed', function (event) {
            //Emit the new address object for the updated place
            var _query = that.getFormattedAddress(autocomplete.getPlace());
            console.log(_query);
            if (Object.keys(_query).length != 0) {
                that.onSelect.emit(_query);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GooglePlacesDirective.prototype, "onSelect", void 0);
    GooglePlacesDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[googlePlaces]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GooglePlacesDirective);
    return GooglePlacesDirective;
}());



/***/ }),

/***/ "./src/app/checkout-cart/googleplacedirective.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/checkout-cart/googleplacedirective.module.ts ***!
  \**************************************************************/
/*! exports provided: GooglePlacesDirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirectiveModule", function() { return GooglePlacesDirectiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _googlePlace_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googlePlace.directive */ "./src/app/checkout-cart/googlePlace.directive.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GooglePlacesDirectiveModule = /** @class */ (function () {
    function GooglePlacesDirectiveModule() {
    }
    GooglePlacesDirectiveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_4__["NgxStarsModule"]
            ],
            declarations: [_googlePlace_directive__WEBPACK_IMPORTED_MODULE_3__["GooglePlacesDirective"]],
            exports: [
                _googlePlace_directive__WEBPACK_IMPORTED_MODULE_3__["GooglePlacesDirective"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        })
    ], GooglePlacesDirectiveModule);
    return GooglePlacesDirectiveModule;
}());



/***/ }),

/***/ "./src/app/component/profile-form/profile-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/profile-form/profile-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container reg_form\">\r\n    <app-mb-bread-crumb [breadcrumb]=\"breadcrumb\"></app-mb-bread-crumb>\r\n\r\n    <div class=\"rowComponents\">\r\n      <h2 class=\"col-sm-12 register-in\">New Customer Registration Form</h2>\r\n      <form\r\n        [formGroup]=\"registrationForm\"\r\n        (ngSubmit)=\"onSubmit($event, true)\"\r\n        custom-focus\r\n        class=\"registration_form \"\r\n      >\r\n        <h2>Login Details</h2>\r\n        <div class=\"col-xs-12 required_text\">\r\n          &nbsp;<span class=\"redcolor\">*</span>Required Field\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_email\"\r\n              >Email<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <input\r\n                type=\"email\"\r\n                formControlName=\"uid\"\r\n                class=\"mandatory form-control reg_field\"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['uid'].valid &&\r\n                    registrationForm.get('uid').touched,\r\n                    'cred-error':showCrentialError\r\n                }\"\r\n              />\r\n              <h2 *ngIf=\"showCrentialError\" class=\"credential-err-msg\">\r\n               This email address is already registered.Either sign in or reset \r\n               your password by clicking \"Forgot your password ?\" link. \r\n              </h2>\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['uid'].valid &&\r\n                  registrationForm.get('uid').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"!registrationForm.controls['uid'].errors.required\"\r\n                  >{{ \"register.uid\" | translate }}</span\r\n                >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['uid'].errors.patternInvalid\r\n                  \"\r\n                  >{{ \"register.invalidEmailAddress\" | translate }}</span\r\n                >\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_email\"\r\n              >Verify Email<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <input\r\n                type=\"email\"\r\n                formControlName=\"confirmemail\"\r\n                class=\"mandatory form-control reg_field\"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['confirmemail'].valid &&\r\n                    registrationForm.get('confirmemail').touched\r\n                }\"\r\n              />\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['confirmemail'].valid &&\r\n                  registrationForm.get('confirmemail').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['confirmemail'].errors.required\r\n                  \"\r\n                  >{{ \"register.confirmEmail\" | translate }}</span\r\n                >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['confirmemail'].errors\r\n                      .appCustomValidator\r\n                  \"\r\n                  >{{ \"register.matchEmail\" | translate }}</span\r\n                >\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_password\"\r\n              >Password<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <div class=\"login_fields password_field\">\r\n              <a\r\n                class=\"contextual-help \"\r\n                show-delay=\"100\" ngbTooltip=\"{{'register.passwordInfo'|translate}}\" placement=\"right\" \r\n              ></a>\r\n              <input\r\n                type=\"password\"\r\n                formControlName=\"password\"\r\n                class=\"mandatory form-control reg_field\"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['password'].valid &&\r\n                    registrationForm.get('password').touched\r\n                }\"\r\n              />\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['password'].valid &&\r\n                  registrationForm.get('password').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['password'].errors.required\r\n                  \"\r\n                  >{{ \"register.passwordEnter\" | translate }}</span\r\n                >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['password'].errors.patternInvalid\r\n                  \"\r\n                  >{{ \"register.invalidPassword\" | translate }}</span\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_email\">\r\n              Verify Password<span class=\"redstar\">*</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <input\r\n                type=\"password\"\r\n                formControlName=\"confirmPassword\"\r\n                class=\"mandatory form-control reg_field\"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['confirmPassword'].valid &&\r\n                    registrationForm.get('confirmPassword').touched\r\n                }\"\r\n              />\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['confirmPassword'].valid &&\r\n                  registrationForm.get('confirmPassword').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['confirmPassword'].errors\r\n                      .required\r\n                  \"\r\n                  >{{ \"register.confirmPassword\" | translate }}</span\r\n                >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['confirmPassword'].errors\r\n                      .appCustomValidator\r\n                  \"\r\n                  >{{ \"register.matchPassword\" | translate }}</span\r\n                >\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <h2 class=\"personalDetails\">Personal Details</h2>\r\n        <!-- <app-personal-form [registrationForm]=\"registrationForm\"></app-personal-form> -->\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_title\"\r\n              >Title<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <select\r\n                class=\"mandatory form-control\"\r\n                formControlName=\"titleCode\"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['titleCode'].valid &&\r\n                    registrationForm.get('titleCode').touched\r\n                }\"\r\n              >\r\n                <option value=\"null\" selected>Please Select</option>\r\n                <option value=\"miss\">Miss</option>\r\n                <option value=\"mrs\">Mrs</option>\r\n                <option value=\"ms\">Ms</option>\r\n                <option value=\"mr\">Mr</option>\r\n                <option value=\"dr\">Dr</option>\r\n              </select>\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['titleCode'].valid &&\r\n                  registrationForm.get('titleCode').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['titleCode'].errors.required\r\n                  \"\r\n                  >{{ \"register.titleCode\" | translate }}</span\r\n                >\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_firstname\"\r\n              >First Name<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"firstName\"\r\n                class=\"mandatory form-control reg_field \"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['firstName'].valid &&\r\n                    registrationForm.get('firstName').touched\r\n                }\"\r\n              />\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['firstName'].valid &&\r\n                  registrationForm.get('firstName').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['firstName'].errors.required\r\n                  \"\r\n                >\r\n                  {{ \"register.firstName\" | translate }}\r\n                </span>\r\n                <span\r\n                  *ngIf=\"\r\n                    registrationForm.controls['firstName'].errors.patternInvalid\r\n                  \"\r\n                >\r\n                  {{ \"register.firstName\" | translate }}\r\n                </span>\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_lastname\"\r\n              >Last Name<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"lastName\"\r\n                class=\"mandatory form-control reg_field \"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['lastName'].valid &&\r\n                    registrationForm.get('lastName').touched\r\n                }\"\r\n              />\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['lastName'].valid &&\r\n                  registrationForm.get('lastName').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['lastName'].errors.required\r\n                  \"\r\n                >\r\n                  {{ \"register.lastName\" | translate }}\r\n                </span>\r\n                <span\r\n                  *ngIf=\"\r\n                    registrationForm.controls['lastName'].errors.patternInvalid\r\n                  \"\r\n                >\r\n                  {{ \"register.lastName\" | translate }}\r\n                </span>\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_country\"\r\n              >Country<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <select\r\n                class=\"mandatory form-control\"\r\n                (change)=\"onChangeCountry($event)\"\r\n                formControlName=\"country\"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['country'].valid &&\r\n                    registrationForm.get('country').touched\r\n                }\"\r\n              >\r\n                <option value=\"\" selected=\"selected\">Choose Country *</option>\r\n                <option\r\n                  *ngFor=\"let data of countries; let k = index\"\r\n                  [ngValue]=\"data\"\r\n                  >{{ data.name }}</option\r\n                >\r\n              </select>\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['country'].valid &&\r\n                  registrationForm.get('country').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['country'].errors.required\r\n                  \"\r\n                >\r\n                  {{ \"register.country\" | translate }}</span\r\n                >\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\" *ngIf=\"loadGMscript\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_postcode\"\r\n              >Postcode/Zipcode<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <input\r\n                #myInput\r\n                googlePlaces\r\n                (onSelect)=\"setAddress($event)\"\r\n                type=\"text\"\r\n                (keyup)=\"onSearchKeyUp($event)\"\r\n                class=\"mandatory form-control \"\r\n                formControlName=\"postalCode\"\r\n                maxlength=\"10\"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    (!registrationForm.controls['postalCode'].valid &&\r\n                      registrationForm.get('postalCode').touched),\r\n                  'not-valid-postcode': !postCodeStatus\r\n                }\"\r\n              />\r\n              <span class=\"postcode-status\" *ngIf=\"!postCodeStatus\">Please enter a valid postCode or enter the address manually.</span>\r\n              <div\r\n                *ngIf=\"\r\n                  (!registrationForm.controls['postalCode'].valid &&\r\n                  registrationForm.get('postalCode').touched)\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n             \r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['postalCode'].errors.required\r\n                  \"\r\n                >\r\n                  {{ \"register.postCode\" | translate }}</span\r\n                >\r\n                      <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['postalCode'].errors.patternInvalid\r\n                  \"\r\n                >Please enter a valid postcode</span\r\n                >\r\n              </div>\r\n              <div class=\"postcode-msg-block\">\r\n                <span>Please enter a valid postCode or enter the address manually.</span>\r\n              </div>\r\n            </span>\r\n            <span class=\"ml-8 find-address\" *ngIf=\"ukLoopBtnStatus\">\r\n              <button\r\n                class=\"buttonStyle mt-1\"\r\n                (click)=\"onLookupAddress($event)\"\r\n              >\r\n                Lookup Address\r\n              </button>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- {{registrationForm.controls['postalCode'].errors |json}} -->\r\n\r\n        <div class=\"col-xs-12 row \" *ngIf=\"postalAddresses\">\r\n          <div class=\"col-sm-12 col-md-4  \">\r\n            <label class=\"register_label \"\r\n              >Select Address<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <select\r\n                class=\"mandatory form-control\"\r\n                formControlName=\"address\"\r\n                (change)=\"onSelectPlace($event.target.value)\"\r\n              >\r\n                <option value=\"\"  selected>Select an Address</option>\r\n                <option\r\n                  *ngFor=\"let data of postalAddresses; let k = index\"\r\n                  [value]=\"data.Id\"\r\n                  >{{ data.StreetAddress }}, &nbsp;{{ data.Place }}</option\r\n                >\r\n              </select>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \"\r\n              >Address<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"line1\"\r\n                class=\"mandatory form-control reg_field \"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['line1'].valid &&\r\n                    registrationForm.get('line1').touched\r\n                }\"\r\n              />\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['line1'].valid &&\r\n                  registrationForm.get('line1').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"!registrationForm.controls['line1'].errors.required\"\r\n                >\r\n                  {{ \"register.line1\" | translate }}</span\r\n                >\r\n              </div>\r\n              <input\r\n                type=\"text\"\r\n                class=\"mandatory form-control\"\r\n                formControlName=\"line2\"\r\n                style=\"margin-top:15px;\"\r\n              />\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_town\"\r\n              >Town/City<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"town\"\r\n                class=\"mandatory form-control reg_field \"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['town'].valid &&\r\n                    registrationForm.get('town').touched\r\n                }\"\r\n              />\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['town'].valid &&\r\n                  registrationForm.get('town').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"!registrationForm.controls['town'].errors.required\"\r\n                >\r\n                  {{ \"register.town\" | translate }}</span\r\n                >\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 row\" *ngIf=\"!usSpecificForm; else usStates\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_town\"\r\n              >{{ \"form.label.state\" | translate }}</label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"district\"\r\n                class=\"mandatory form-control reg_field \"\r\n              >\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <ng-template #usStates>\r\n          <div class=\"col-xs-12 row\">\r\n            <div class=\"col-sm-12 col-md-4 \">\r\n              <label class=\"register_label \" for=\"reg_town\">{{ \"form.label.state\" | translate }}\r\n                <span class=\"redstar\" >*</span>\r\n              </label>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-8 text-left \">\r\n              <span class=\"login_fields\">\r\n                <select\r\n                  *ngIf=\"stateList\"\r\n                  class=\"mandatory form-control\"\r\n                  formControlName=\"district\"\r\n                >\r\n                  <option value=\"\"  selected>Choose State *</option>\r\n                  <option\r\n                    *ngFor=\"let data of stateList; let k = index\"\r\n                    [ngValue]=\"data\"\r\n                    >{{ data.name }}</option\r\n                  >\r\n                </select>\r\n                <input\r\n                  *ngIf=\"!stateList\"\r\n                  autocorrect=\"off\"\r\n                  formControlName=\"district\"\r\n                  placeholder=\"State\"\r\n                  type=\"text\"\r\n                  class=\"form-control  mandatory form-control\"\r\n                  autocapitalize=\"on\"\r\n                  [ngClass]=\"{\r\n                    'has-error not-valid':\r\n                      !registrationForm.get('district').valid &&\r\n                      registrationForm.get('district').touched\r\n                  }\"\r\n                /> \r\n              <div\r\n              *ngIf=\"\r\n                !registrationForm.controls['district'].valid &&\r\n                registrationForm.get('district').touched\r\n              \"\r\n              class=\"not-valid-error-msg\"\r\n            >\r\n              <span [hidden]=\"!registrationForm.controls['district'].errors.required\">\r\n                {{ \"register.district\" | translate }}</span\r\n              >\r\n            </div>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_town\"\r\n              >Phone Number<span class=\"redstar\">*</span></label\r\n            >\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields regPhone\">\r\n              <a\r\n                class=\"contextual-help \"\r\n                show-delay=\"500\" ngbTooltip=\"{{'register.phonenumberInfo'|translate}}\" placement=\"right\" \r\n              ></a>\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"phone\"\r\n                class=\"mandatory form-control reg_field \"\r\n                [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !registrationForm.controls['phone'].valid &&\r\n                    registrationForm.get('phone').touched\r\n                }\"\r\n              />\r\n              <div\r\n                *ngIf=\"\r\n                  !registrationForm.controls['phone'].valid &&\r\n                  registrationForm.get('phone').touched\r\n                \"\r\n                class=\"not-valid-error-msg\"\r\n              >\r\n                <span\r\n                  [hidden]=\"!registrationForm.controls['phone'].errors.required\"\r\n                >\r\n                  {{ \"register.phone\" | translate }}\r\n                </span>\r\n                <span\r\n                  [hidden]=\"\r\n                    !registrationForm.controls['phone'].errors.patternInvalid\r\n                  \"\r\n                  >{{ \"register.phoneLength\" | translate }}</span\r\n                >\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-sm-12 col-md-4 \">\r\n            <label class=\"register_label \" for=\"reg_title\">Age Group</label>\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-8 text-left \">\r\n            <span class=\"login_fields\">\r\n              <select class=\"mandatory form-control\" formControlName=\"agegroup\">\r\n                <option value=\"\"  selected>Please Select</option>\r\n                <option value=\"16-18\">16-18</option>\r\n                <option value=\"19-25\">19-25</option>\r\n                <option value=\"26-45\">26-45</option>\r\n                <option value=\"46-60\">46-60</option>\r\n                <option value=\"Over 60\">Over 60</option>\r\n              </select>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <p class=\"col-sm-12 col-md-4 text-right\">\r\n            <label class=\"register_label \"> Gender</label>\r\n          </p>\r\n          <p class=\"col-sm-12 col-md-8 text-left genderAlign\">\r\n            <input\r\n              formControlName=\"gender\"\r\n              type=\"radio\"\r\n              value=\"female\"\r\n              class=\"pull-left\"\r\n            />\r\n            <span class=\"pull-left gender\">Female</span>\r\n            <input\r\n              formControlName=\"gender\"\r\n              type=\"radio\"\r\n              value=\"male\"\r\n              class=\"pull-left\"\r\n            />\r\n            <span class=\"pull-left gender\">Male</span>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-xs-12\">\r\n          <h2>Join Our Guest List</h2>\r\n        </div>\r\n        <div class=\"guest-list \">\r\n          <div class=\"col-xs-12 col-sm-12 row\">\r\n            <div class=\" col-xs-10 col-sm-12 col-md-10 offset-2  \">\r\n              <p>\r\n              Be the first to hear about our latest product launches, limited\r\n              edition collections, private sales and exclusive event invites.\r\n              All straight to your inbox, door or phone.\r\n            </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-12  row\">\r\n            <p class=\" col-xs-10 col-sm-12 col-md-10  offset-2\">\r\n              We always treat your personal details with the utmost care and\r\n              never sell them to other companies. You can unsubscribe at any\r\n              time.\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 offset-md-1 row terms-policy \">\r\n            <p class=\" col-sm-2 col-md-2 text-right checkboxAlignBox\">\r\n              <input\r\n                type=\"checkbox\"\r\n                formControlName=\"marketingOptIn\"\r\n                value=\"true\"\r\n                class=\"pull-right\"\r\n              />\r\n            </p>\r\n\r\n            <p class=\"  col-sm-10 col-md-10 text-left checkboxAlign\">\r\n              I would like to receive communications from Molton Brown.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 \">\r\n          <h2>Terms &amp; Conditions</h2>\r\n        </div>\r\n        <div class=\"col-xs-12  offset-md-1 row terms-policy padding-top-0\">\r\n          <p class=\"col-xs-1 col-sm-12 col-md-2 text-right checkboxAlignBox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"pull-right\"\r\n              formControlName=\"terms\"\r\n              (change)=\"onChangeTerms($event)\"\r\n              [ngClass]=\"{\r\n                'has-error  not-valid':\r\n                  !registrationForm.controls['terms'].valid &&\r\n                  registrationForm.get('terms').touched\r\n              }\"\r\n            />\r\n          </p>\r\n\r\n          <p class=\" col-xs-10 col-sm-12 col-md-10 text-left checkboxAlign\">\r\n            I accept the&nbsp;<a\r\n              data-toggle=\"modal\"\r\n              class=\"terms-lbl-content\"\r\n              data-target=\"#modalTermsPopup\"\r\n              (click)=\"onClickTerms($event)\"\r\n              >Terms &amp; Conditions</a\r\n            >\r\n            and\r\n            <a\r\n              data-toggle=\"modal\"\r\n              data-target=\"#modalTermsPopup\"\r\n              (click)=\"onClickPrivacy($event)\"\r\n              >Privacy &amp; Cookie Policy.</a\r\n            ><span class=\"redstar\">*</span>\r\n          </p>\r\n          <div\r\n            class=\"terms-error-msg-bottom error-block offset-md-4 offset-xs-2 col-md-8 col-xs-10\"\r\n            *ngIf=\"\r\n              getTypeOf(registrationForm.value['terms']) ||\r\n              (!registrationForm.controls['terms'].valid &&\r\n                registrationForm.get('terms').touched)\r\n            \"\r\n          >\r\n            <span\r\n              [hidden]=\"!registrationForm.controls['terms'].errors.required\"\r\n            >\r\n              {{ \"register.termsCheckbox\" | translate }}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 row\">\r\n          <div class=\"col-xs-1 col-sm-12 col-md-2\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 text-right\" style=\"padding: 15px;\">\r\n          <button class=\"buttonStyle\" type=\"submit\">\r\n            Submit  \r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<div\r\n  class=\"backdrop\"\r\n  [ngClass]=\"{ 'display-overlay': loading, 'overlay-bg-hide': !loading }\"\r\n>\r\n</div>\r\n<div\r\n  class=\"modal\"\r\n  id=\"modalTermsPopup\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div\r\n    class=\"chck-modal-dialog modal-dialog modal-full container modal-dialog-scrollable\"\r\n    role=\"document\"\r\n  >\r\n    <div class=\"modal-content\">\r\n      <div class=\"chck-modal-header modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h4 class=\"modal-title text-center\">{{ modalTitle }}</h4>\r\n      </div>\r\n      <div class=\"modal-body chck-modal-body\" #termEl></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/profile-form/profile-form.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/profile-form/profile-form.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Century Gothic';\n  src: url(\"/assets/fonts/Century/fonts/CENTURY.ttf\") format(\"ttf\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff2\") format(\"woff2\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff\") format(\"woff\"), url(\"/assets/fonts/Century/fonts/CENTURY.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Regular';\n  src: url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Bold';\n  src: url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Italic';\n  src: url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.svg\") format(\"svg\"); }\n\n.padding-top-1 {\n  padding-top: 1px; }\n\n.pt-1 {\n  padding-top: 1px; }\n\n.margin-top-1 {\n  margin-top: 1px; }\n\n.ml-1 {\n  margin-left: 1px; }\n\n.mt-1 {\n  margin-top: 1px; }\n\n.margin-bottom-1 {\n  margin-top: 1px; }\n\n.padding-top-2 {\n  padding-top: 2px; }\n\n.pt-2 {\n  padding-top: 2px; }\n\n.margin-top-2 {\n  margin-top: 2px; }\n\n.ml-2 {\n  margin-left: 2px; }\n\n.mt-2 {\n  margin-top: 2px; }\n\n.margin-bottom-2 {\n  margin-top: 2px; }\n\n.padding-top-3 {\n  padding-top: 3px; }\n\n.pt-3 {\n  padding-top: 3px; }\n\n.margin-top-3 {\n  margin-top: 3px; }\n\n.ml-3 {\n  margin-left: 3px; }\n\n.mt-3 {\n  margin-top: 3px; }\n\n.margin-bottom-3 {\n  margin-top: 3px; }\n\n.padding-top-4 {\n  padding-top: 4px; }\n\n.pt-4 {\n  padding-top: 4px; }\n\n.margin-top-4 {\n  margin-top: 4px; }\n\n.ml-4 {\n  margin-left: 4px; }\n\n.mt-4 {\n  margin-top: 4px; }\n\n.margin-bottom-4 {\n  margin-top: 4px; }\n\n.padding-top-5 {\n  padding-top: 5px; }\n\n.pt-5 {\n  padding-top: 5px; }\n\n.margin-top-5 {\n  margin-top: 5px; }\n\n.ml-5 {\n  margin-left: 5px; }\n\n.mt-5 {\n  margin-top: 5px; }\n\n.margin-bottom-5 {\n  margin-top: 5px; }\n\n.padding-top-6 {\n  padding-top: 6px; }\n\n.pt-6 {\n  padding-top: 6px; }\n\n.margin-top-6 {\n  margin-top: 6px; }\n\n.ml-6 {\n  margin-left: 6px; }\n\n.mt-6 {\n  margin-top: 6px; }\n\n.margin-bottom-6 {\n  margin-top: 6px; }\n\n.padding-top-7 {\n  padding-top: 7px; }\n\n.pt-7 {\n  padding-top: 7px; }\n\n.margin-top-7 {\n  margin-top: 7px; }\n\n.ml-7 {\n  margin-left: 7px; }\n\n.mt-7 {\n  margin-top: 7px; }\n\n.margin-bottom-7 {\n  margin-top: 7px; }\n\n.padding-top-8 {\n  padding-top: 8px; }\n\n.pt-8 {\n  padding-top: 8px; }\n\n.margin-top-8 {\n  margin-top: 8px; }\n\n.ml-8 {\n  margin-left: 8px; }\n\n.mt-8 {\n  margin-top: 8px; }\n\n.margin-bottom-8 {\n  margin-top: 8px; }\n\n.padding-top-9 {\n  padding-top: 9px; }\n\n.pt-9 {\n  padding-top: 9px; }\n\n.margin-top-9 {\n  margin-top: 9px; }\n\n.ml-9 {\n  margin-left: 9px; }\n\n.mt-9 {\n  margin-top: 9px; }\n\n.margin-bottom-9 {\n  margin-top: 9px; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n\n.pt-10 {\n  padding-top: 10px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.margin-bottom-10 {\n  margin-top: 10px; }\n\n.padding-top-11 {\n  padding-top: 11px; }\n\n.pt-11 {\n  padding-top: 11px; }\n\n.margin-top-11 {\n  margin-top: 11px; }\n\n.ml-11 {\n  margin-left: 11px; }\n\n.mt-11 {\n  margin-top: 11px; }\n\n.margin-bottom-11 {\n  margin-top: 11px; }\n\n.padding-top-12 {\n  padding-top: 12px; }\n\n.pt-12 {\n  padding-top: 12px; }\n\n.margin-top-12 {\n  margin-top: 12px; }\n\n.ml-12 {\n  margin-left: 12px; }\n\n.mt-12 {\n  margin-top: 12px; }\n\n.margin-bottom-12 {\n  margin-top: 12px; }\n\n.padding-top-13 {\n  padding-top: 13px; }\n\n.pt-13 {\n  padding-top: 13px; }\n\n.margin-top-13 {\n  margin-top: 13px; }\n\n.ml-13 {\n  margin-left: 13px; }\n\n.mt-13 {\n  margin-top: 13px; }\n\n.margin-bottom-13 {\n  margin-top: 13px; }\n\n.padding-top-14 {\n  padding-top: 14px; }\n\n.pt-14 {\n  padding-top: 14px; }\n\n.margin-top-14 {\n  margin-top: 14px; }\n\n.ml-14 {\n  margin-left: 14px; }\n\n.mt-14 {\n  margin-top: 14px; }\n\n.margin-bottom-14 {\n  margin-top: 14px; }\n\n.padding-top-15 {\n  padding-top: 15px; }\n\n.pt-15 {\n  padding-top: 15px; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.ml-15 {\n  margin-left: 15px; }\n\n.mt-15 {\n  margin-top: 15px; }\n\n.margin-bottom-15 {\n  margin-top: 15px; }\n\n.padding-top-16 {\n  padding-top: 16px; }\n\n.pt-16 {\n  padding-top: 16px; }\n\n.margin-top-16 {\n  margin-top: 16px; }\n\n.ml-16 {\n  margin-left: 16px; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.margin-bottom-16 {\n  margin-top: 16px; }\n\n.padding-top-17 {\n  padding-top: 17px; }\n\n.pt-17 {\n  padding-top: 17px; }\n\n.margin-top-17 {\n  margin-top: 17px; }\n\n.ml-17 {\n  margin-left: 17px; }\n\n.mt-17 {\n  margin-top: 17px; }\n\n.margin-bottom-17 {\n  margin-top: 17px; }\n\n.padding-top-18 {\n  padding-top: 18px; }\n\n.pt-18 {\n  padding-top: 18px; }\n\n.margin-top-18 {\n  margin-top: 18px; }\n\n.ml-18 {\n  margin-left: 18px; }\n\n.mt-18 {\n  margin-top: 18px; }\n\n.margin-bottom-18 {\n  margin-top: 18px; }\n\n.padding-top-19 {\n  padding-top: 19px; }\n\n.pt-19 {\n  padding-top: 19px; }\n\n.margin-top-19 {\n  margin-top: 19px; }\n\n.ml-19 {\n  margin-left: 19px; }\n\n.mt-19 {\n  margin-top: 19px; }\n\n.margin-bottom-19 {\n  margin-top: 19px; }\n\n.padding-top-20 {\n  padding-top: 20px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.margin-bottom-20 {\n  margin-top: 20px; }\n\n.padding-top-21 {\n  padding-top: 21px; }\n\n.pt-21 {\n  padding-top: 21px; }\n\n.margin-top-21 {\n  margin-top: 21px; }\n\n.ml-21 {\n  margin-left: 21px; }\n\n.mt-21 {\n  margin-top: 21px; }\n\n.margin-bottom-21 {\n  margin-top: 21px; }\n\n.padding-top-22 {\n  padding-top: 22px; }\n\n.pt-22 {\n  padding-top: 22px; }\n\n.margin-top-22 {\n  margin-top: 22px; }\n\n.ml-22 {\n  margin-left: 22px; }\n\n.mt-22 {\n  margin-top: 22px; }\n\n.margin-bottom-22 {\n  margin-top: 22px; }\n\n.padding-top-23 {\n  padding-top: 23px; }\n\n.pt-23 {\n  padding-top: 23px; }\n\n.margin-top-23 {\n  margin-top: 23px; }\n\n.ml-23 {\n  margin-left: 23px; }\n\n.mt-23 {\n  margin-top: 23px; }\n\n.margin-bottom-23 {\n  margin-top: 23px; }\n\n.padding-top-24 {\n  padding-top: 24px; }\n\n.pt-24 {\n  padding-top: 24px; }\n\n.margin-top-24 {\n  margin-top: 24px; }\n\n.ml-24 {\n  margin-left: 24px; }\n\n.mt-24 {\n  margin-top: 24px; }\n\n.margin-bottom-24 {\n  margin-top: 24px; }\n\n.padding-top-25 {\n  padding-top: 25px; }\n\n.pt-25 {\n  padding-top: 25px; }\n\n.margin-top-25 {\n  margin-top: 25px; }\n\n.ml-25 {\n  margin-left: 25px; }\n\n.mt-25 {\n  margin-top: 25px; }\n\n.margin-bottom-25 {\n  margin-top: 25px; }\n\n.padding-top-26 {\n  padding-top: 26px; }\n\n.pt-26 {\n  padding-top: 26px; }\n\n.margin-top-26 {\n  margin-top: 26px; }\n\n.ml-26 {\n  margin-left: 26px; }\n\n.mt-26 {\n  margin-top: 26px; }\n\n.margin-bottom-26 {\n  margin-top: 26px; }\n\n.padding-top-27 {\n  padding-top: 27px; }\n\n.pt-27 {\n  padding-top: 27px; }\n\n.margin-top-27 {\n  margin-top: 27px; }\n\n.ml-27 {\n  margin-left: 27px; }\n\n.mt-27 {\n  margin-top: 27px; }\n\n.margin-bottom-27 {\n  margin-top: 27px; }\n\n.padding-top-28 {\n  padding-top: 28px; }\n\n.pt-28 {\n  padding-top: 28px; }\n\n.margin-top-28 {\n  margin-top: 28px; }\n\n.ml-28 {\n  margin-left: 28px; }\n\n.mt-28 {\n  margin-top: 28px; }\n\n.margin-bottom-28 {\n  margin-top: 28px; }\n\n.padding-top-29 {\n  padding-top: 29px; }\n\n.pt-29 {\n  padding-top: 29px; }\n\n.margin-top-29 {\n  margin-top: 29px; }\n\n.ml-29 {\n  margin-left: 29px; }\n\n.mt-29 {\n  margin-top: 29px; }\n\n.margin-bottom-29 {\n  margin-top: 29px; }\n\n.padding-top-30 {\n  padding-top: 30px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.margin-top-30 {\n  margin-top: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.margin-bottom-30 {\n  margin-top: 30px; }\n\n.padding-top-31 {\n  padding-top: 31px; }\n\n.pt-31 {\n  padding-top: 31px; }\n\n.margin-top-31 {\n  margin-top: 31px; }\n\n.ml-31 {\n  margin-left: 31px; }\n\n.mt-31 {\n  margin-top: 31px; }\n\n.margin-bottom-31 {\n  margin-top: 31px; }\n\n.padding-top-32 {\n  padding-top: 32px; }\n\n.pt-32 {\n  padding-top: 32px; }\n\n.margin-top-32 {\n  margin-top: 32px; }\n\n.ml-32 {\n  margin-left: 32px; }\n\n.mt-32 {\n  margin-top: 32px; }\n\n.margin-bottom-32 {\n  margin-top: 32px; }\n\n.padding-top-33 {\n  padding-top: 33px; }\n\n.pt-33 {\n  padding-top: 33px; }\n\n.margin-top-33 {\n  margin-top: 33px; }\n\n.ml-33 {\n  margin-left: 33px; }\n\n.mt-33 {\n  margin-top: 33px; }\n\n.margin-bottom-33 {\n  margin-top: 33px; }\n\n.padding-top-34 {\n  padding-top: 34px; }\n\n.pt-34 {\n  padding-top: 34px; }\n\n.margin-top-34 {\n  margin-top: 34px; }\n\n.ml-34 {\n  margin-left: 34px; }\n\n.mt-34 {\n  margin-top: 34px; }\n\n.margin-bottom-34 {\n  margin-top: 34px; }\n\n.padding-top-35 {\n  padding-top: 35px; }\n\n.pt-35 {\n  padding-top: 35px; }\n\n.margin-top-35 {\n  margin-top: 35px; }\n\n.ml-35 {\n  margin-left: 35px; }\n\n.mt-35 {\n  margin-top: 35px; }\n\n.margin-bottom-35 {\n  margin-top: 35px; }\n\n.padding-top-36 {\n  padding-top: 36px; }\n\n.pt-36 {\n  padding-top: 36px; }\n\n.margin-top-36 {\n  margin-top: 36px; }\n\n.ml-36 {\n  margin-left: 36px; }\n\n.mt-36 {\n  margin-top: 36px; }\n\n.margin-bottom-36 {\n  margin-top: 36px; }\n\n.padding-top-37 {\n  padding-top: 37px; }\n\n.pt-37 {\n  padding-top: 37px; }\n\n.margin-top-37 {\n  margin-top: 37px; }\n\n.ml-37 {\n  margin-left: 37px; }\n\n.mt-37 {\n  margin-top: 37px; }\n\n.margin-bottom-37 {\n  margin-top: 37px; }\n\n.padding-top-38 {\n  padding-top: 38px; }\n\n.pt-38 {\n  padding-top: 38px; }\n\n.margin-top-38 {\n  margin-top: 38px; }\n\n.ml-38 {\n  margin-left: 38px; }\n\n.mt-38 {\n  margin-top: 38px; }\n\n.margin-bottom-38 {\n  margin-top: 38px; }\n\n.padding-top-39 {\n  padding-top: 39px; }\n\n.pt-39 {\n  padding-top: 39px; }\n\n.margin-top-39 {\n  margin-top: 39px; }\n\n.ml-39 {\n  margin-left: 39px; }\n\n.mt-39 {\n  margin-top: 39px; }\n\n.margin-bottom-39 {\n  margin-top: 39px; }\n\n.padding-top-40 {\n  padding-top: 40px; }\n\n.pt-40 {\n  padding-top: 40px; }\n\n.margin-top-40 {\n  margin-top: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.margin-bottom-40 {\n  margin-top: 40px; }\n\n.padding-top-41 {\n  padding-top: 41px; }\n\n.pt-41 {\n  padding-top: 41px; }\n\n.margin-top-41 {\n  margin-top: 41px; }\n\n.ml-41 {\n  margin-left: 41px; }\n\n.mt-41 {\n  margin-top: 41px; }\n\n.margin-bottom-41 {\n  margin-top: 41px; }\n\n.padding-top-42 {\n  padding-top: 42px; }\n\n.pt-42 {\n  padding-top: 42px; }\n\n.margin-top-42 {\n  margin-top: 42px; }\n\n.ml-42 {\n  margin-left: 42px; }\n\n.mt-42 {\n  margin-top: 42px; }\n\n.margin-bottom-42 {\n  margin-top: 42px; }\n\n.padding-top-43 {\n  padding-top: 43px; }\n\n.pt-43 {\n  padding-top: 43px; }\n\n.margin-top-43 {\n  margin-top: 43px; }\n\n.ml-43 {\n  margin-left: 43px; }\n\n.mt-43 {\n  margin-top: 43px; }\n\n.margin-bottom-43 {\n  margin-top: 43px; }\n\n.padding-top-44 {\n  padding-top: 44px; }\n\n.pt-44 {\n  padding-top: 44px; }\n\n.margin-top-44 {\n  margin-top: 44px; }\n\n.ml-44 {\n  margin-left: 44px; }\n\n.mt-44 {\n  margin-top: 44px; }\n\n.margin-bottom-44 {\n  margin-top: 44px; }\n\n.padding-top-45 {\n  padding-top: 45px; }\n\n.pt-45 {\n  padding-top: 45px; }\n\n.margin-top-45 {\n  margin-top: 45px; }\n\n.ml-45 {\n  margin-left: 45px; }\n\n.mt-45 {\n  margin-top: 45px; }\n\n.margin-bottom-45 {\n  margin-top: 45px; }\n\n.padding-top-46 {\n  padding-top: 46px; }\n\n.pt-46 {\n  padding-top: 46px; }\n\n.margin-top-46 {\n  margin-top: 46px; }\n\n.ml-46 {\n  margin-left: 46px; }\n\n.mt-46 {\n  margin-top: 46px; }\n\n.margin-bottom-46 {\n  margin-top: 46px; }\n\n.padding-top-47 {\n  padding-top: 47px; }\n\n.pt-47 {\n  padding-top: 47px; }\n\n.margin-top-47 {\n  margin-top: 47px; }\n\n.ml-47 {\n  margin-left: 47px; }\n\n.mt-47 {\n  margin-top: 47px; }\n\n.margin-bottom-47 {\n  margin-top: 47px; }\n\n.padding-top-48 {\n  padding-top: 48px; }\n\n.pt-48 {\n  padding-top: 48px; }\n\n.margin-top-48 {\n  margin-top: 48px; }\n\n.ml-48 {\n  margin-left: 48px; }\n\n.mt-48 {\n  margin-top: 48px; }\n\n.margin-bottom-48 {\n  margin-top: 48px; }\n\n.padding-top-49 {\n  padding-top: 49px; }\n\n.pt-49 {\n  padding-top: 49px; }\n\n.margin-top-49 {\n  margin-top: 49px; }\n\n.ml-49 {\n  margin-left: 49px; }\n\n.mt-49 {\n  margin-top: 49px; }\n\n.margin-bottom-49 {\n  margin-top: 49px; }\n\n.padding-top-50 {\n  padding-top: 50px; }\n\n.pt-50 {\n  padding-top: 50px; }\n\n.margin-top-50 {\n  margin-top: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.margin-bottom-50 {\n  margin-top: 50px; }\n\n.padding-top-51 {\n  padding-top: 51px; }\n\n.pt-51 {\n  padding-top: 51px; }\n\n.margin-top-51 {\n  margin-top: 51px; }\n\n.ml-51 {\n  margin-left: 51px; }\n\n.mt-51 {\n  margin-top: 51px; }\n\n.margin-bottom-51 {\n  margin-top: 51px; }\n\n.padding-top-52 {\n  padding-top: 52px; }\n\n.pt-52 {\n  padding-top: 52px; }\n\n.margin-top-52 {\n  margin-top: 52px; }\n\n.ml-52 {\n  margin-left: 52px; }\n\n.mt-52 {\n  margin-top: 52px; }\n\n.margin-bottom-52 {\n  margin-top: 52px; }\n\n.padding-top-53 {\n  padding-top: 53px; }\n\n.pt-53 {\n  padding-top: 53px; }\n\n.margin-top-53 {\n  margin-top: 53px; }\n\n.ml-53 {\n  margin-left: 53px; }\n\n.mt-53 {\n  margin-top: 53px; }\n\n.margin-bottom-53 {\n  margin-top: 53px; }\n\n.padding-top-54 {\n  padding-top: 54px; }\n\n.pt-54 {\n  padding-top: 54px; }\n\n.margin-top-54 {\n  margin-top: 54px; }\n\n.ml-54 {\n  margin-left: 54px; }\n\n.mt-54 {\n  margin-top: 54px; }\n\n.margin-bottom-54 {\n  margin-top: 54px; }\n\n.padding-top-55 {\n  padding-top: 55px; }\n\n.pt-55 {\n  padding-top: 55px; }\n\n.margin-top-55 {\n  margin-top: 55px; }\n\n.ml-55 {\n  margin-left: 55px; }\n\n.mt-55 {\n  margin-top: 55px; }\n\n.margin-bottom-55 {\n  margin-top: 55px; }\n\n.padding-top-56 {\n  padding-top: 56px; }\n\n.pt-56 {\n  padding-top: 56px; }\n\n.margin-top-56 {\n  margin-top: 56px; }\n\n.ml-56 {\n  margin-left: 56px; }\n\n.mt-56 {\n  margin-top: 56px; }\n\n.margin-bottom-56 {\n  margin-top: 56px; }\n\n.padding-top-57 {\n  padding-top: 57px; }\n\n.pt-57 {\n  padding-top: 57px; }\n\n.margin-top-57 {\n  margin-top: 57px; }\n\n.ml-57 {\n  margin-left: 57px; }\n\n.mt-57 {\n  margin-top: 57px; }\n\n.margin-bottom-57 {\n  margin-top: 57px; }\n\n.padding-top-58 {\n  padding-top: 58px; }\n\n.pt-58 {\n  padding-top: 58px; }\n\n.margin-top-58 {\n  margin-top: 58px; }\n\n.ml-58 {\n  margin-left: 58px; }\n\n.mt-58 {\n  margin-top: 58px; }\n\n.margin-bottom-58 {\n  margin-top: 58px; }\n\n.padding-top-59 {\n  padding-top: 59px; }\n\n.pt-59 {\n  padding-top: 59px; }\n\n.margin-top-59 {\n  margin-top: 59px; }\n\n.ml-59 {\n  margin-left: 59px; }\n\n.mt-59 {\n  margin-top: 59px; }\n\n.margin-bottom-59 {\n  margin-top: 59px; }\n\n.padding-top-60 {\n  padding-top: 60px; }\n\n.pt-60 {\n  padding-top: 60px; }\n\n.margin-top-60 {\n  margin-top: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.margin-bottom-60 {\n  margin-top: 60px; }\n\n.padding-top-61 {\n  padding-top: 61px; }\n\n.pt-61 {\n  padding-top: 61px; }\n\n.margin-top-61 {\n  margin-top: 61px; }\n\n.ml-61 {\n  margin-left: 61px; }\n\n.mt-61 {\n  margin-top: 61px; }\n\n.margin-bottom-61 {\n  margin-top: 61px; }\n\n.padding-top-62 {\n  padding-top: 62px; }\n\n.pt-62 {\n  padding-top: 62px; }\n\n.margin-top-62 {\n  margin-top: 62px; }\n\n.ml-62 {\n  margin-left: 62px; }\n\n.mt-62 {\n  margin-top: 62px; }\n\n.margin-bottom-62 {\n  margin-top: 62px; }\n\n.padding-top-63 {\n  padding-top: 63px; }\n\n.pt-63 {\n  padding-top: 63px; }\n\n.margin-top-63 {\n  margin-top: 63px; }\n\n.ml-63 {\n  margin-left: 63px; }\n\n.mt-63 {\n  margin-top: 63px; }\n\n.margin-bottom-63 {\n  margin-top: 63px; }\n\n.padding-top-64 {\n  padding-top: 64px; }\n\n.pt-64 {\n  padding-top: 64px; }\n\n.margin-top-64 {\n  margin-top: 64px; }\n\n.ml-64 {\n  margin-left: 64px; }\n\n.mt-64 {\n  margin-top: 64px; }\n\n.margin-bottom-64 {\n  margin-top: 64px; }\n\n.padding-top-65 {\n  padding-top: 65px; }\n\n.pt-65 {\n  padding-top: 65px; }\n\n.margin-top-65 {\n  margin-top: 65px; }\n\n.ml-65 {\n  margin-left: 65px; }\n\n.mt-65 {\n  margin-top: 65px; }\n\n.margin-bottom-65 {\n  margin-top: 65px; }\n\n.padding-top-66 {\n  padding-top: 66px; }\n\n.pt-66 {\n  padding-top: 66px; }\n\n.margin-top-66 {\n  margin-top: 66px; }\n\n.ml-66 {\n  margin-left: 66px; }\n\n.mt-66 {\n  margin-top: 66px; }\n\n.margin-bottom-66 {\n  margin-top: 66px; }\n\n.padding-top-67 {\n  padding-top: 67px; }\n\n.pt-67 {\n  padding-top: 67px; }\n\n.margin-top-67 {\n  margin-top: 67px; }\n\n.ml-67 {\n  margin-left: 67px; }\n\n.mt-67 {\n  margin-top: 67px; }\n\n.margin-bottom-67 {\n  margin-top: 67px; }\n\n.padding-top-68 {\n  padding-top: 68px; }\n\n.pt-68 {\n  padding-top: 68px; }\n\n.margin-top-68 {\n  margin-top: 68px; }\n\n.ml-68 {\n  margin-left: 68px; }\n\n.mt-68 {\n  margin-top: 68px; }\n\n.margin-bottom-68 {\n  margin-top: 68px; }\n\n.padding-top-69 {\n  padding-top: 69px; }\n\n.pt-69 {\n  padding-top: 69px; }\n\n.margin-top-69 {\n  margin-top: 69px; }\n\n.ml-69 {\n  margin-left: 69px; }\n\n.mt-69 {\n  margin-top: 69px; }\n\n.margin-bottom-69 {\n  margin-top: 69px; }\n\n.padding-top-70 {\n  padding-top: 70px; }\n\n.pt-70 {\n  padding-top: 70px; }\n\n.margin-top-70 {\n  margin-top: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.margin-bottom-70 {\n  margin-top: 70px; }\n\n.padding-top-71 {\n  padding-top: 71px; }\n\n.pt-71 {\n  padding-top: 71px; }\n\n.margin-top-71 {\n  margin-top: 71px; }\n\n.ml-71 {\n  margin-left: 71px; }\n\n.mt-71 {\n  margin-top: 71px; }\n\n.margin-bottom-71 {\n  margin-top: 71px; }\n\n.padding-top-72 {\n  padding-top: 72px; }\n\n.pt-72 {\n  padding-top: 72px; }\n\n.margin-top-72 {\n  margin-top: 72px; }\n\n.ml-72 {\n  margin-left: 72px; }\n\n.mt-72 {\n  margin-top: 72px; }\n\n.margin-bottom-72 {\n  margin-top: 72px; }\n\n.padding-top-73 {\n  padding-top: 73px; }\n\n.pt-73 {\n  padding-top: 73px; }\n\n.margin-top-73 {\n  margin-top: 73px; }\n\n.ml-73 {\n  margin-left: 73px; }\n\n.mt-73 {\n  margin-top: 73px; }\n\n.margin-bottom-73 {\n  margin-top: 73px; }\n\n.padding-top-74 {\n  padding-top: 74px; }\n\n.pt-74 {\n  padding-top: 74px; }\n\n.margin-top-74 {\n  margin-top: 74px; }\n\n.ml-74 {\n  margin-left: 74px; }\n\n.mt-74 {\n  margin-top: 74px; }\n\n.margin-bottom-74 {\n  margin-top: 74px; }\n\n.padding-top-75 {\n  padding-top: 75px; }\n\n.pt-75 {\n  padding-top: 75px; }\n\n.margin-top-75 {\n  margin-top: 75px; }\n\n.ml-75 {\n  margin-left: 75px; }\n\n.mt-75 {\n  margin-top: 75px; }\n\n.margin-bottom-75 {\n  margin-top: 75px; }\n\n.padding-top-76 {\n  padding-top: 76px; }\n\n.pt-76 {\n  padding-top: 76px; }\n\n.margin-top-76 {\n  margin-top: 76px; }\n\n.ml-76 {\n  margin-left: 76px; }\n\n.mt-76 {\n  margin-top: 76px; }\n\n.margin-bottom-76 {\n  margin-top: 76px; }\n\n.padding-top-77 {\n  padding-top: 77px; }\n\n.pt-77 {\n  padding-top: 77px; }\n\n.margin-top-77 {\n  margin-top: 77px; }\n\n.ml-77 {\n  margin-left: 77px; }\n\n.mt-77 {\n  margin-top: 77px; }\n\n.margin-bottom-77 {\n  margin-top: 77px; }\n\n.padding-top-78 {\n  padding-top: 78px; }\n\n.pt-78 {\n  padding-top: 78px; }\n\n.margin-top-78 {\n  margin-top: 78px; }\n\n.ml-78 {\n  margin-left: 78px; }\n\n.mt-78 {\n  margin-top: 78px; }\n\n.margin-bottom-78 {\n  margin-top: 78px; }\n\n.padding-top-79 {\n  padding-top: 79px; }\n\n.pt-79 {\n  padding-top: 79px; }\n\n.margin-top-79 {\n  margin-top: 79px; }\n\n.ml-79 {\n  margin-left: 79px; }\n\n.mt-79 {\n  margin-top: 79px; }\n\n.margin-bottom-79 {\n  margin-top: 79px; }\n\n.padding-top-80 {\n  padding-top: 80px; }\n\n.pt-80 {\n  padding-top: 80px; }\n\n.margin-top-80 {\n  margin-top: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.margin-bottom-80 {\n  margin-top: 80px; }\n\n.padding-top-81 {\n  padding-top: 81px; }\n\n.pt-81 {\n  padding-top: 81px; }\n\n.margin-top-81 {\n  margin-top: 81px; }\n\n.ml-81 {\n  margin-left: 81px; }\n\n.mt-81 {\n  margin-top: 81px; }\n\n.margin-bottom-81 {\n  margin-top: 81px; }\n\n.padding-top-82 {\n  padding-top: 82px; }\n\n.pt-82 {\n  padding-top: 82px; }\n\n.margin-top-82 {\n  margin-top: 82px; }\n\n.ml-82 {\n  margin-left: 82px; }\n\n.mt-82 {\n  margin-top: 82px; }\n\n.margin-bottom-82 {\n  margin-top: 82px; }\n\n.padding-top-83 {\n  padding-top: 83px; }\n\n.pt-83 {\n  padding-top: 83px; }\n\n.margin-top-83 {\n  margin-top: 83px; }\n\n.ml-83 {\n  margin-left: 83px; }\n\n.mt-83 {\n  margin-top: 83px; }\n\n.margin-bottom-83 {\n  margin-top: 83px; }\n\n.padding-top-84 {\n  padding-top: 84px; }\n\n.pt-84 {\n  padding-top: 84px; }\n\n.margin-top-84 {\n  margin-top: 84px; }\n\n.ml-84 {\n  margin-left: 84px; }\n\n.mt-84 {\n  margin-top: 84px; }\n\n.margin-bottom-84 {\n  margin-top: 84px; }\n\n.padding-top-85 {\n  padding-top: 85px; }\n\n.pt-85 {\n  padding-top: 85px; }\n\n.margin-top-85 {\n  margin-top: 85px; }\n\n.ml-85 {\n  margin-left: 85px; }\n\n.mt-85 {\n  margin-top: 85px; }\n\n.margin-bottom-85 {\n  margin-top: 85px; }\n\n.padding-top-86 {\n  padding-top: 86px; }\n\n.pt-86 {\n  padding-top: 86px; }\n\n.margin-top-86 {\n  margin-top: 86px; }\n\n.ml-86 {\n  margin-left: 86px; }\n\n.mt-86 {\n  margin-top: 86px; }\n\n.margin-bottom-86 {\n  margin-top: 86px; }\n\n.padding-top-87 {\n  padding-top: 87px; }\n\n.pt-87 {\n  padding-top: 87px; }\n\n.margin-top-87 {\n  margin-top: 87px; }\n\n.ml-87 {\n  margin-left: 87px; }\n\n.mt-87 {\n  margin-top: 87px; }\n\n.margin-bottom-87 {\n  margin-top: 87px; }\n\n.padding-top-88 {\n  padding-top: 88px; }\n\n.pt-88 {\n  padding-top: 88px; }\n\n.margin-top-88 {\n  margin-top: 88px; }\n\n.ml-88 {\n  margin-left: 88px; }\n\n.mt-88 {\n  margin-top: 88px; }\n\n.margin-bottom-88 {\n  margin-top: 88px; }\n\n.padding-top-89 {\n  padding-top: 89px; }\n\n.pt-89 {\n  padding-top: 89px; }\n\n.margin-top-89 {\n  margin-top: 89px; }\n\n.ml-89 {\n  margin-left: 89px; }\n\n.mt-89 {\n  margin-top: 89px; }\n\n.margin-bottom-89 {\n  margin-top: 89px; }\n\n.padding-top-90 {\n  padding-top: 90px; }\n\n.pt-90 {\n  padding-top: 90px; }\n\n.margin-top-90 {\n  margin-top: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.margin-bottom-90 {\n  margin-top: 90px; }\n\n.padding-top-91 {\n  padding-top: 91px; }\n\n.pt-91 {\n  padding-top: 91px; }\n\n.margin-top-91 {\n  margin-top: 91px; }\n\n.ml-91 {\n  margin-left: 91px; }\n\n.mt-91 {\n  margin-top: 91px; }\n\n.margin-bottom-91 {\n  margin-top: 91px; }\n\n.padding-top-92 {\n  padding-top: 92px; }\n\n.pt-92 {\n  padding-top: 92px; }\n\n.margin-top-92 {\n  margin-top: 92px; }\n\n.ml-92 {\n  margin-left: 92px; }\n\n.mt-92 {\n  margin-top: 92px; }\n\n.margin-bottom-92 {\n  margin-top: 92px; }\n\n.padding-top-93 {\n  padding-top: 93px; }\n\n.pt-93 {\n  padding-top: 93px; }\n\n.margin-top-93 {\n  margin-top: 93px; }\n\n.ml-93 {\n  margin-left: 93px; }\n\n.mt-93 {\n  margin-top: 93px; }\n\n.margin-bottom-93 {\n  margin-top: 93px; }\n\n.padding-top-94 {\n  padding-top: 94px; }\n\n.pt-94 {\n  padding-top: 94px; }\n\n.margin-top-94 {\n  margin-top: 94px; }\n\n.ml-94 {\n  margin-left: 94px; }\n\n.mt-94 {\n  margin-top: 94px; }\n\n.margin-bottom-94 {\n  margin-top: 94px; }\n\n.padding-top-95 {\n  padding-top: 95px; }\n\n.pt-95 {\n  padding-top: 95px; }\n\n.margin-top-95 {\n  margin-top: 95px; }\n\n.ml-95 {\n  margin-left: 95px; }\n\n.mt-95 {\n  margin-top: 95px; }\n\n.margin-bottom-95 {\n  margin-top: 95px; }\n\n.padding-top-96 {\n  padding-top: 96px; }\n\n.pt-96 {\n  padding-top: 96px; }\n\n.margin-top-96 {\n  margin-top: 96px; }\n\n.ml-96 {\n  margin-left: 96px; }\n\n.mt-96 {\n  margin-top: 96px; }\n\n.margin-bottom-96 {\n  margin-top: 96px; }\n\n.padding-top-97 {\n  padding-top: 97px; }\n\n.pt-97 {\n  padding-top: 97px; }\n\n.margin-top-97 {\n  margin-top: 97px; }\n\n.ml-97 {\n  margin-left: 97px; }\n\n.mt-97 {\n  margin-top: 97px; }\n\n.margin-bottom-97 {\n  margin-top: 97px; }\n\n.padding-top-98 {\n  padding-top: 98px; }\n\n.pt-98 {\n  padding-top: 98px; }\n\n.margin-top-98 {\n  margin-top: 98px; }\n\n.ml-98 {\n  margin-left: 98px; }\n\n.mt-98 {\n  margin-top: 98px; }\n\n.margin-bottom-98 {\n  margin-top: 98px; }\n\n.padding-top-99 {\n  padding-top: 99px; }\n\n.pt-99 {\n  padding-top: 99px; }\n\n.margin-top-99 {\n  margin-top: 99px; }\n\n.ml-99 {\n  margin-left: 99px; }\n\n.mt-99 {\n  margin-top: 99px; }\n\n.margin-bottom-99 {\n  margin-top: 99px; }\n\n.padding-top-100 {\n  padding-top: 100px; }\n\n.pt-100 {\n  padding-top: 100px; }\n\n.margin-top-100 {\n  margin-top: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.margin-bottom-100 {\n  margin-top: 100px; }\n\n/*for targetting small screens */\n\n.registration_form {\n  width: 720px;\n  padding: 10px 20px;\n  margin: 12px 0 15px 25px;\n  border: 1px solid #d7d7d7; }\n\n@media screen and (max-width: 768px) {\n    .registration_form {\n      border: none; } }\n\n.registration_form .required_text {\n    font-size: 12px; }\n\n.registration_form h2 {\n    font-weight: bold;\n    font-size: 14px;\n    padding-top: 15px; }\n\n.registration_form .col-xs-12 {\n    width: 100%;\n    margin-bottom: 5px;\n    padding: 10px 0 0 0; }\n\n.redcolor {\n  color: #ae140d; }\n\n.register_label {\n  float: right;\n  padding-top: 5px;\n  color: #535353;\n  font-weight: normal;\n  font-size: 12px; }\n\n@media screen and (max-width: 767px) {\n    .register_label {\n      float: left; } }\n\n.no-padding {\n  padding: 0; }\n\n.guest-list {\n  font-size: 12px; }\n\n.checkboxAlignBox {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n@media screen and (max-width: 768px) {\n    .checkboxAlignBox {\n      width: 15%;\n      float: left; } }\n\n.checkboxAlign {\n  line-height: 12px;\n  padding-left: 0px; }\n\n@media screen and (max-width: 768px) {\n    .checkboxAlign {\n      width: 80%; } }\n\n.gender {\n  line-height: 13px;\n  margin-left: 5px;\n  margin-right: 15px; }\n\n.genderAlign {\n  margin-top: 8px; }\n\n.login_fields {\n  width: 250px;\n  position: relative;\n  padding: 0 !important;\n  display: inline-block; }\n\n.login_fields input, .login_fields select {\n    height: 25px !important; }\n\n.login_fields input.not-valid, .login_fields select.not-valid {\n      background-position: 95% 4px;\n      border: 1px solid #b63432;\n      background-size: 4px; }\n\n@media screen and (max-width: 768px) {\n        .login_fields input.not-valid, .login_fields select.not-valid {\n          background-position: 95% 4px; } }\n\n.register-in {\n  padding: 3% 0 0 0;\n  margin: 10px 0px;\n  font-size: 28px; }\n\n@media screen and (max-width: 768px) {\n    .register-in {\n      display: block;\n      overflow: hidden;\n      padding: 15px;\n      margin: 0;\n      font-size: 15px;\n      font-weight: bold;\n      color: #ffffff;\n      background: #90d2c5; } }\n\n.overlay-bg-show {\n  display: block; }\n\n.overlay-bg-hide {\n  display: none; }\n\n.err-text {\n  font-size: 10px;\n  color: #ae140d; }\n\n.password {\n  font-size: 10px; }\n\ninput[type=\"text\"].form-control.not-valid,\ninput[type=\"tel\"].form-control.not-valid {\n  background-position: 95% 2px !important;\n  background-size: 4px !important; }\n\n.password_field .contextual-help {\n  width: 30px;\n  height: 30px;\n  right: -10px; }\n\n.login_fields .contextual-help {\n  width: 30px;\n  height: 30px;\n  right: -10px;\n  background-size: 7px; }\n\n.has-match-error + .not-valid-error-msg {\n  display: block; }\n\n.login_fields input[type=\"text\"].form-control,\n.login_fields input[type=\"email\"], .login_fields input[type=\"password\"],\n.login_fields input[type=\"email\"].form-control,\n.login_fields input[type=\"password\"].form-control,\n.login_fields input[type=\"tel\"].form-control {\n  width: 65%;\n  display: block;\n  height: 48px;\n  border: 1px solid #c2c2c2;\n  border-radius: 0; }\n\n.login_fields input[type=\"text\"].form-control ~ .not-valid-error-msg,\n  .login_fields input[type=\"email\"] ~ .not-valid-error-msg, .login_fields input[type=\"password\"] ~ .not-valid-error-msg,\n  .login_fields input[type=\"email\"].form-control ~ .not-valid-error-msg,\n  .login_fields input[type=\"password\"].form-control ~ .not-valid-error-msg,\n  .login_fields input[type=\"tel\"].form-control ~ .not-valid-error-msg {\n    display: none; }\n\n.login_fields input[type=\"text\"].form-control.not-valid:focus,\n  .login_fields input[type=\"email\"].not-valid:focus, .login_fields input[type=\"password\"].not-valid:focus,\n  .login_fields input[type=\"email\"].form-control.not-valid:focus,\n  .login_fields input[type=\"password\"].form-control.not-valid:focus,\n  .login_fields input[type=\"tel\"].form-control.not-valid:focus {\n    box-shadow: none; }\n\n.login_fields input[type=\"text\"].form-control.not-valid:focus ~ .not-valid-error-msg,\n    .login_fields input[type=\"email\"].not-valid:focus ~ .not-valid-error-msg, .login_fields input[type=\"password\"].not-valid:focus ~ .not-valid-error-msg,\n    .login_fields input[type=\"email\"].form-control.not-valid:focus ~ .not-valid-error-msg,\n    .login_fields input[type=\"password\"].form-control.not-valid:focus ~ .not-valid-error-msg,\n    .login_fields input[type=\"tel\"].form-control.not-valid:focus ~ .not-valid-error-msg {\n      display: block; }\n\n.login_fields input[type=\"text\"].form-control.not-valid,\n  .login_fields input[type=\"email\"].not-valid, .login_fields input[type=\"password\"].not-valid,\n  .login_fields input[type=\"email\"].form-control.not-valid,\n  .login_fields input[type=\"password\"].form-control.not-valid,\n  .login_fields input[type=\"tel\"].form-control.not-valid {\n    background-image: url(\"https://www.moltonbrown.co.uk/images/exclamation-symbol.png\");\n    background-position: 95% 4px;\n    border: 1px solid #b63432 !important;\n    background-repeat: no-repeat;\n    background-size: 4px; }\n\n.login_fields input[type=\"text\"].form-control.valid,\n  .login_fields input[type=\"email\"].valid, .login_fields input[type=\"password\"].valid,\n  .login_fields input[type=\"email\"].form-control.valid,\n  .login_fields input[type=\"password\"].form-control.valid,\n  .login_fields input[type=\"tel\"].form-control.valid {\n    background-image: url(\"https://www.moltonbrown.co.uk/images/tick-symbol.png\") !important;\n    background-position: 95% 13px;\n    background-repeat: no-repeat; }\n\nselect.form-control {\n  height: 48px;\n  margin: 5px 0; }\n\n.error-block {\n  display: block !important; }\n\n.terms-error-msg-bottom {\n  color: #ae140d;\n  /* margin: 5px 0; */\n  overflow: hidden;\n  display: none;\n  margin-left: 154px;\n  font-size: 12px;\n  display: none; }\n\n@media screen and (max-width: 480px) {\n    .terms-error-msg-bottom {\n      margin-left: 0px; } }\n\n.login_fields .contextual-help ~ .not-valid, .login_fields .contextual-help ~ .valid {\n  background-position: 91% 4px !important; }\n\n.form-control:focus {\n  border-color: #80bdff !important;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6) !important; }\n\n.display-overlay {\n  display: block;\n  top: 0;\n  background-color: transparent; }\n\n.offset-2 p {\n  color: #000000;\n  font-size: 12px; }\n\np.offset-2 {\n  color: #000000;\n  font-size: 12px; }\n\np.checkboxAlign {\n  color: #000000;\n  font-size: 12px; }\n\np.checkboxAlign a {\n    cursor: pointer; }\n\n.not-valid-postcode {\n  border: 1px solid #b63432 !important;\n  background-image: url(https://www.moltonbrown.co.uk/images/exclamation-symbol.png);\n  background-position: 93% 0px;\n  background-repeat: no-repeat; }\n\n.postcode-status {\n  position: absolute;\n  bottom: 100%;\n  background-color: #b63432;\n  color: #ffffff;\n  padding: 10px;\n  left: 6%;\n  text-align: center;\n  width: 88%;\n  z-index: 9; }\n\n.postcode-status::after {\n    content: \"\";\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border: 0;\n    left: 5%;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    background: #b63432;\n    bottom: -7px; }\n\n.cred-error {\n  border: 1px solid #b63432 !important; }\n\n.credential-err-msg {\n  font-size: 14px;\n  position: absolute;\n  bottom: 100%;\n  background-color: #b63432;\n  color: #ffffff;\n  padding: 10px;\n  left: 6%;\n  text-align: center;\n  width: 88%;\n  z-index: 9; }\n\n.credential-err-msg::after {\n    content: '';\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border: 0;\n    left: 5%;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    background: #b63432;\n    bottom: -7px; }\n"

/***/ }),

/***/ "./src/app/component/profile-form/profile-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/profile-form/profile-form.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormComponent", function() { return ProfileFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_pattern_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/pattern-validator */ "./src/app/forms/pattern-validator.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_registration_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../forms/registration.form */ "./src/app/forms/registration.form.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile.service */ "./src/app/component/profile-form/profile.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/singleton.service */ "./src/app/services/singleton.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProfileFormComponent = /** @class */ (function () {
    function ProfileFormComponent(zone, location, titleService, router, route, singletonServ, customerForm, fb, profileServ, deviceService) {
        this.zone = zone;
        this.location = location;
        this.titleService = titleService;
        this.router = router;
        this.route = route;
        this.singletonServ = singletonServ;
        this.customerForm = customerForm;
        this.fb = fb;
        this.profileServ = profileServ;
        this.deviceService = deviceService;
        this.stateList = [];
        this.postCodeStatus = true;
        this.registrationForm = this.fb.group(customerForm.getForm());
        this.loading = false;
    }
    ProfileFormComponent.prototype.nestedCopy = function (array) {
        return JSON.parse(JSON.stringify(array));
    };
    ProfileFormComponent.prototype.setCountry = function () {
        var baseSite = this.singletonServ.catalogVersion;
        if (baseSite.isoCode === "GB") {
            this.ukSpecificForm = true;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_5__["countries"]);
            var _isoCode_1 = baseSite.isoCode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_1;
            });
            if (_index != -1) {
                this.registrationForm.controls["country"].patchValue(this.countries[_index]);
            }
        }
        else if (baseSite.isoCode === "EU") {
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_5__["EUROPEAN_COUNTRIES"]);
        }
        else if (baseSite.isoCode === "DE") {
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_5__["DE_COUNTRIES"]);
            this.registrationForm.controls["country"].patchValue(this.countries[0]);
        }
        else if (baseSite.isoCode === "US") {
            this.ukSpecificForm = false;
            this.usSpecificForm = true;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_5__["US_COUNTRIES"]);
            var _isoCode_2 = baseSite.isoCode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_2;
            });
            if (_index != -1) {
                this.registrationForm.controls["country"].patchValue(this.countries[_index]);
            }
            this.registrationForm.controls["district"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            this.registrationForm.controls['district'].updateValueAndValidity();
        }
    };
    ProfileFormComponent.prototype.ngOnChanges = function (changes) {
        this.setCountry();
        if (changes["registrationForm"]) {
            if (changes["registrationForm"]["currentValue"] != undefined) {
                var _data = changes["registrationForm"]["currentValue"];
                this.registrationForm.patchValue(_data);
                var _isoCode_3 = changes["registrationForm"]["currentValue"]["country"]["isocode"];
                var _index = lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"](this.countries, function (o) {
                    return o.isocode == _isoCode_3;
                });
                if (_index != -1) {
                    this.registrationForm.controls["country"].patchValue(this.countries[_index]);
                    if (_isoCode_3 != "GB") {
                        this.ukLoopBtnStatus = false;
                    }
                    else {
                        this.ukLoopBtnStatus = true;
                    }
                }
                this.patchCountry(_data);
            }
        }
    };
    ProfileFormComponent.prototype.patchCountry = function (userData) {
        if (userData) {
            var _isoCode_4 = userData.country.isocode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_4;
            });
            if (_index != -1) {
                this.registrationForm.controls["country"].patchValue(this.countries[_index]);
            }
            if (userData.country.isocode == "US") {
                this.registrationForm.controls["postalCode"].setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_4__["patternValidator"])(/^[0-9 ]{5,6}$/)
                ]);
                this.registrationForm.controls["postalCode"].updateValueAndValidity();
            }
            else {
                this.registrationForm.controls["postalCode"].setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_4__["patternValidator"])(/^[a-zA-Z0-9 ]*$/)
                ]);
                this.registrationForm.controls["postalCode"].updateValueAndValidity();
            }
        }
    };
    ProfileFormComponent.prototype.onChangeCountry = function (event) {
        var baseSite = this.singletonServ.catalogVersion;
        var _index = event.target.selectedIndex - 1;
        var country = this.countries[_index];
        if (this.countries[_index].isocode == "US") {
            this.registrationForm.controls["postalCode"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_4__["patternValidator"])(/^[0-9]{5,10}$/)]);
            this.registrationForm.controls['postalCode'].updateValueAndValidity();
        }
        else {
            this.registrationForm.controls["postalCode"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_4__["patternValidator"])(/^[a-zA-Z0-9 ]*$/)]);
            this.registrationForm.controls['postalCode'].updateValueAndValidity();
        }
        if (this.usSpecificForm) {
            this.ukLoopBtnStatus = false;
            this.ukSpecificForm = false;
            if (country.states) {
                this.stateList = country.states;
            }
            else {
                this.stateList = undefined;
                this.registrationForm.controls["district"].setValue("");
            }
        }
        else if (this.ukSpecificForm) {
            this.ukSpecificForm = true;
            var _index_1 = event.target.selectedIndex - 1;
            var country_1 = this.countries[_index_1];
            if (country_1.isocode != "GB") {
                this.ukLoopBtnStatus = false;
            }
            else {
                this.ukLoopBtnStatus = true;
            }
        }
        if (baseSite.isocode === "US") {
            this.registrationForm.controls["district"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            this.registrationForm.controls['district'].updateValueAndValidity();
        }
        else {
            this.registrationForm.controls["district"].setValidators(null);
            this.registrationForm.controls['district'].updateValueAndValidity();
        }
    };
    ProfileFormComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Registration | Molton Brown');
        this.breadcrumb = [{ name: 'MY ACCOUNT', route: '/store/myacc/mbLogin' }, { name: 'MY PROFILE' }];
        var baseSite = this.singletonServ.catalogVersion;
        if (baseSite.isoCode === "GB") {
            this.ukLoopBtnStatus = true;
            this.ukSpecificForm = true;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_5__["countries"]);
            var _isoCode_5 = baseSite.isoCode;
            if (_isoCode_5 != -1) {
                var _index = lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"](this.countries, function (o) {
                    return o.isocode == _isoCode_5;
                });
                this.registrationForm.controls["country"].patchValue(this.countries[_index]);
            }
        }
        else if (baseSite.isoCode === "EU") {
            this.ukLoopBtnStatus = false;
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_5__["EUROPEAN_COUNTRIES"]);
        }
        else if (baseSite.isoCode === "DE") {
            this.ukLoopBtnStatus = false;
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_5__["DE_COUNTRIES"]);
            this.registrationForm.controls["country"].patchValue(this.countries[0]);
        }
        else if (baseSite.isoCode === "US") {
            this.ukLoopBtnStatus = false;
            this.ukSpecificForm = false;
            this.usSpecificForm = true;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_5__["US_COUNTRIES"]);
            var _isoCode_6 = baseSite.isoCode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_6;
            });
            this.registrationForm.controls["country"].patchValue(this.countries[_index]);
            var _states = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](this.countries, function (o) {
                return o.isocode == _isoCode_6;
            });
            this.stateList = _states.states;
        }
        this.getDeviceInfo();
        if (baseSite.isoCode === "US") {
            var _index = lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"](this.countries, function (o) {
                return o.isocode == baseSite.isoCode;
            });
            if (this.countries[_index].isocode === "US") {
                this.registrationForm.controls["postalCode"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_4__["patternValidator"])(/^[0-9]{5,6}$/)]);
                this.registrationForm.controls['postalCode'].updateValueAndValidity();
            }
            else {
                this.registrationForm.controls["postalCode"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_4__["patternValidator"])(/^[a-zA-Z0-9 ]{6,8}$$/)]);
                this.registrationForm.controls['postalCode'].updateValueAndValidity();
            }
            this.registrationForm.controls["district"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            this.registrationForm.controls['district'].updateValueAndValidity();
        }
    };
    ProfileFormComponent.prototype.getDeviceInfo = function () {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        var isDesktopDevice = this.deviceService.isDesktop();
        if (isMobile || isTablet) {
            this.mobileDevice = true;
        }
        else {
            this.mobileDevice = false;
        }
        if (isDesktopDevice) {
            this.desktopDevice = true;
        }
        else {
            this.desktopDevice = false;
        }
    };
    ProfileFormComponent.prototype.setAddress = function (addrObj) {
        var that = this;
        this.zone.run(function () {
            that.registrationForm.controls["postalCode"].setValue(addrObj.postal_code);
        });
    };
    ProfileFormComponent.prototype.onSubmit = function (event, bol) {
        var _this = this;
        event.stopPropagation();
        var email = this.registrationForm.value.uid;
        var user = this.registrationForm.value;
        var state = "";
        if (user.district) {
            if (typeof user.district == "object") {
                state = user.district.name;
            }
            else {
                state = user.district;
            }
        }
        if (this.registrationForm.valid) {
            if (this.registrationForm.valid && bol) {
                this.loading = true;
                var _userBody_1 = {
                    uid: user.uid,
                    password: user.password,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    titleCode: user.titleCode,
                    agegroup: user.agegroup,
                    gender: user.gender,
                    marketingOptIn: user.marketingOptIn
                };
                var _address_1 = {
                    country: {
                        isocode: user.country.isocode
                    },
                    type: "Home",
                    firstName: user.firstName,
                    postalCode: user.postalCode,
                    town: user.town,
                    lastName: user.lastName,
                    phone: user.phone,
                    line1: user.line1,
                    line2: user.line2,
                    companyName: "",
                    shippingAddress: true,
                    visibleInAddressBook: true,
                    fpo: false,
                    recordType: "S",
                    titleCode: user.titleCode,
                    agegroup: user.agegroup,
                    gender: user.gender,
                    district: state
                };
                var baseSite_1 = this.singletonServ.catalogVersion;
                this.profileServ.generateToken().subscribe(function (token) {
                    var tokenId = token["access_token"];
                    _this.profileServ.createUser(_userBody_1, tokenId).subscribe(function (resp) {
                        _this.profileServ
                            .createUserAddress(_address_1, tokenId, email)
                            .subscribe(function (response) {
                            _this.loading = false;
                            var yMarketingObj = JSON.parse(JSON.stringify(_address_1));
                            yMarketingObj["id"] = _this.registrationForm.value.uid;
                            yMarketingObj["idOrigin"] = "ATGWEB";
                            yMarketingObj["marketingArea"] = "MB";
                            yMarketingObj["age"] = user.age;
                            yMarketingObj["gender"] = user.gender;
                            var obj = {
                                access_token: resp["access_token"],
                                email: user.uid,
                                token: token["access_token"]
                            };
                            _this.singletonServ.setStoreData(baseSite_1.reg, JSON.stringify(obj));
                            _this.fetchRelavantBasket(obj);
                        }, function (error) { });
                    }, function (err) {
                        if (err) {
                            if (err.error) {
                                if (err.error.errors) {
                                    if (err.error.errors[0]["type"] == "DuplicateUidError") {
                                        _this.showCrentialError = true;
                                        window.scrollTo(10, 10);
                                    }
                                }
                            }
                        }
                        _this.loading = false;
                    });
                }, function (err) {
                    _this.loading = false;
                });
            }
            this.submitted = true;
        }
        else {
            this.validateAllFormFields(this.registrationForm);
        }
    };
    ProfileFormComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ProfileFormComponent.prototype.onSearchKeyUp = function (event) {
        if (event.key === "Enter") {
            this.registrationForm.controls['postalCode'].patchValue(event.target.value);
            this.myInput.nativeElement.focus();
            this.onLookupAddress(event);
        }
    };
    ProfileFormComponent.prototype.onLookupAddress = function (event) {
        var _this = this;
        event.preventDefault();
        var that = this;
        var val = this.registrationForm.value;
        this.myInput.nativeElement.focus();
        if (this.registrationForm.controls['postalCode'].valid) {
            var postcode = val["postalCode"];
            that.profileServ.getPostCode(postcode).subscribe(function (response) {
                if (response["Items"][0]) {
                    if (response["Items"][0]["Error"]) {
                        _this.postCodeStatus = false;
                    }
                    else {
                        _this.postCodeStatus = true;
                        _this.registrationForm.controls["address"].setValidators([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
                        ]);
                        _this.registrationForm.controls["address"].updateValueAndValidity();
                        that.postalAddresses = response["Items"];
                    }
                }
                else {
                    _this.postCodeStatus = false;
                }
            }, function (error) { });
            this.postCodeError = false;
        }
        else {
            this.postCodeError = true;
            this.myInput.nativeElement.focus();
        }
    };
    ProfileFormComponent.prototype.onSelectPlace = function (val) {
        var that = this;
        var id = val;
        this.profileServ.retrievePostalAddress(id).subscribe(function (resp) {
            that.postalAddresses = undefined;
            var _addresses = resp["Items"][0];
            that.registrationForm.controls["town"].setValue(_addresses["PostTown"]);
            if (_addresses["Company"].length == 0) {
                that.registrationForm.controls["line1"].setValue(_addresses["Line1"]);
                that.registrationForm.controls["line2"].setValue(_addresses["Line2"]);
            }
            else {
                that.registrationForm.controls["line1"].setValue(_addresses["Company"]);
                that.registrationForm.controls["line2"].setValue(_addresses["Line1"]);
            }
            that.registrationForm.controls["postalCode"].setValue(_addresses["Postcode"]);
            that.registrationForm.controls["district"].setValue(_addresses["County"]);
        }, function (err) { });
    };
    ProfileFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var url = "https://maps.googleapis.com/maps/api/js?libraries=geometry,places&key=AIzaSyDHfkdOsaMspf8lm0fNW_GyGb7MdAM5gs0";
        var _checkUrl = this.singletonServ.isMyScriptLoaded(url);
        setTimeout(function () {
            if (!_checkUrl) {
                _this.loadScript(url);
            }
            else {
                _this.loadGMscript = true;
            }
        });
    };
    ProfileFormComponent.prototype.loadScript = function (url) {
        var _this = this;
        this.singletonServ.loadScript(url).then(function () {
            _this.loadGMscript = true;
        });
    };
    ProfileFormComponent.prototype.fetchRelavantBasket = function (data) {
        var _this = this;
        var baseSite = this.singletonServ.catalogVersion;
        var _emptyObj = {};
        if (this.singletonServ.getStoreData(baseSite.guest)) {
            this.profileServ
                .creatEmptyCart(data.token, _emptyObj, data.email)
                .subscribe(function (emptyCart) {
                var guidData = JSON.parse(_this.singletonServ.getStoreData(baseSite.guest));
                _this.profileServ
                    .mergeCart(_emptyObj, data.email, data.token, guidData["guid"], emptyCart["guid"])
                    .subscribe(function (resp) {
                    var _obj = JSON.parse(_this.singletonServ.getStoreData(baseSite.reg));
                    _obj["code"] = resp["code"];
                    _this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_obj));
                    _this.singletonServ.removeItem(baseSite.guest);
                    _this.router.navigate([
                        "store",
                        "myaccount",
                        "profile",
                        "detail"
                    ]);
                    _this.loading = false;
                });
            }, function (error) {
                _this.loading = false;
            });
        }
        else {
            this.router.navigate(["store", "myaccount", "profile", "detail"]);
        }
    };
    ProfileFormComponent.prototype.getTypeOf = function (val) {
        if (typeof val == "boolean" && !val) {
            return true;
        }
        return false;
    };
    ProfileFormComponent.prototype.onClickPrivacy = function (event) {
        var that = this;
        that.modalTitle = "Privacy & Cookie Policy";
        var baseSite = this.singletonServ.catalogVersion;
        AmpCa.utils = new AmpCa.Utils();
        AmpCa.utils.getHtmlServiceData({
            auth: {
                baseUrl: "https://c1.adis.ws",
                id: 'f4e22cd7-8cb7-4d19-b063-5b2a7dde5b8d',
                store: "moltonbrown",
                templateName: "acc-template-homepage",
                locale: baseSite.locale
            },
            callback: function (htm) {
                that.termEl.nativeElement.innerHTML = htm;
            }
        });
    };
    ProfileFormComponent.prototype.onChangeTerms = function (event) {
        if (event.target.checked) {
            this.registrationForm['controls']['terms'].setValue(true);
        }
        else {
            this.registrationForm['controls']['terms'].setValue('');
        }
    };
    ProfileFormComponent.prototype.onClickTerms = function (event) {
        // event.stopPropagation();
        var that = this;
        that.modalTitle = "Terms & Conditions";
        var baseSite = this.singletonServ.catalogVersion;
        AmpCa.utils = new AmpCa.Utils();
        AmpCa.utils.getHtmlServiceData({
            auth: {
                baseUrl: "https://c1.adis.ws",
                id: 'b3b8c0d7-6131-4594-9ae9-50564435d349',
                store: "moltonbrown",
                templateName: "acc-template-homepage",
                locale: baseSite.locale
            },
            callback: function (htm) {
                that.termEl.nativeElement.innerHTML = htm;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileFormComponent.prototype, "myInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("termEl"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileFormComponent.prototype, "termEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('el'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileFormComponent.prototype, "el", void 0);
    ProfileFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile-form",
            template: __webpack_require__(/*! ./profile-form.component.html */ "./src/app/component/profile-form/profile-form.component.html"),
            styles: [__webpack_require__(/*! ./profile-form.component.scss */ "./src/app/component/profile-form/profile-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_singleton_service__WEBPACK_IMPORTED_MODULE_10__["SingletonService"],
            _forms_registration_form__WEBPACK_IMPORTED_MODULE_7__["RegistrationForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _profile_service__WEBPACK_IMPORTED_MODULE_8__["profileComponentService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_11__["DeviceDetectorService"]])
    ], ProfileFormComponent);
    return ProfileFormComponent;
}());



/***/ }),

/***/ "./src/app/component/registration/registration.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/registration/registration.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n      <app-mb-bread-crumb [breadcrumb]=\"breadcrumb\"></app-mb-bread-crumb>\r\n    <div class=\"rowComponents loginAlign\">\r\n        <h2 class=\"col-sm-12 log_in\">Login/Register</h2>\r\n        <div class=\"returning_customer\">\r\n           <div class=\"returning_customer-log_in\">\r\n                 <h2>Returning Customers</h2>\r\n                \r\n                 <form  [formGroup]=\"authForm\" (ngSubmit)=\"onSubmitForm($event)\" custom-focus>\r\n                   <p class=\"requiredFieldText\"><span class=\"redstar\">*</span> Required Field</p>    \r\n                    <p class=\" label_text\">Email Address<span class=\"redstar\">*</span></p>\r\n                    <div class=\"login-fileds\" style=\"position: relative;\">\r\n                     <input \r\n                         formControlName=\"email\"\r\n                         type=\"email\"                         \r\n                         class=\"text mandatory reg-email\" \r\n                         [ngClass]=\"{ \r\n                                   'has-error  not-valid':!authForm.controls['email'].valid &&\r\n                                   authForm.get('email').touched,\r\n                                   'valid':authForm.get('email').valid,\r\n                                   'invalid':!authForm.get('email').valid,\r\n                                   'cred-error':showCrentialError}\">\r\n                     <h2 *ngIf=\"showCrentialError\" class=\"credential-err-msg\">Your email address or password may be incorrect. Please try again. </h2>\r\n                    <div *ngIf=\"!authForm.controls['email'].valid &&  authForm.get('email').touched\" class=\"not-valid-error-msg\">\r\n                      <span  [hidden]=\"!authForm.controls['email'].errors.required\">{{'login.emailInputFocus'|translate}}</span>\r\n                      <span  [hidden]=\"!authForm.controls['email'].errors.patternInvalid\">{{'login.invalidEmailAddress'|translate}}</span>\r\n                    </div>\r\n                  </div>\r\n                   <p class=\" label_text\">Password<span class=\"redstar\">*</span></p>\r\n                    <div class=\"pos-relative login-fileds\">\r\n                        <a class=\"contextual-help\"     show-delay=\"100\"  ngbTooltip=\"{{'login.pswdContextual'|translate}}\" placement=\"right\" ></a>\r\n                      <input \r\n                       formControlName=\"password\"  \r\n                       type=\"password\" \r\n                       class=\"text mandatory\" \r\n                       [ngClass]=\"{ \r\n                        'has-error  not-valid':!authForm.controls['password'].valid &&\r\n                        authForm.get('password').touched,\r\n                        'valid':authForm.get('password').valid,\r\n                        'invalid':!authForm.get('password').valid,\r\n                        'cred-error':showCrentialError\r\n                      }\"\r\n                        >      \r\n                      <div *ngIf=\"!authForm.controls['password'].valid &&  authForm.get('password').touched\" class=\"not-valid-error-msg\">\r\n                        <span  [hidden]=\"!authForm.controls['password'].errors.required\">{{'login.passwordInputFocus'|translate}}</span>\r\n                        <!-- <span  [hidden]=\"!authForm.controls['password'].errors.patternInvalid\">{{'login.invalidPassword'|translate}}</span> -->\r\n                        <span *ngIf=\"!authForm.controls['password'].errors?.maxlength\"> \r\n                            {{'login.invalidPassword'|translate}}\r\n                        </span>\r\n                        <span *ngIf=\"!authForm.controls['password'].errors?.minlength\"> \r\n                            {{'login.invalidPassword'|translate}}\r\n                        </span> \r\n                  </div>\r\n                    </div> \r\n                       <p class=\"text-right\">\r\n                        <a class=\"pull-left enable_password\" (click)=\"onRetrivePassword()\">Forgotten your password?</a>\r\n                    </p>\r\n                    <div class=\"text-center\">\r\n                    <button type=\"submit\" class=\"buttonStyle\">Login</button>\r\n                   </div>\r\n                  </form>\r\n           </div>\r\n        </div>\r\n        <div class=\"hrMb\"><hr></div>\r\n        <div>\r\n          <div class=\" new_customer-block new-login\">\r\n            <h2>New Customer</h2>\r\n            <h6>The benefits of registering</h6>            \r\n             By registering your details and creating an account you will be able to:\r\n             <ul>\r\n               <li>Check order history and status</li>\r\n               <li>Store and manage multiple delivery addresses</li>\r\n               <li>Update your personal profile and preferences</li>\r\n               <li>Enjoy a speedier checkout</li>\r\n              </ul>\r\n              <div class=\"text-center\">\r\n                  <button (click)=\"onShowRegisterForm() \" class=\"buttonStyle\"> Register</button>\r\n                 </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/component/registration/registration.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/registration/registration.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Century Gothic';\n  src: url(\"/assets/fonts/Century/fonts/CENTURY.ttf\") format(\"ttf\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff2\") format(\"woff2\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff\") format(\"woff\"), url(\"/assets/fonts/Century/fonts/CENTURY.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Regular';\n  src: url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Bold';\n  src: url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Italic';\n  src: url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.svg\") format(\"svg\"); }\n\n.padding-top-1 {\n  padding-top: 1px; }\n\n.pt-1 {\n  padding-top: 1px; }\n\n.margin-top-1 {\n  margin-top: 1px; }\n\n.ml-1 {\n  margin-left: 1px; }\n\n.mt-1 {\n  margin-top: 1px; }\n\n.margin-bottom-1 {\n  margin-top: 1px; }\n\n.padding-top-2 {\n  padding-top: 2px; }\n\n.pt-2 {\n  padding-top: 2px; }\n\n.margin-top-2 {\n  margin-top: 2px; }\n\n.ml-2 {\n  margin-left: 2px; }\n\n.mt-2 {\n  margin-top: 2px; }\n\n.margin-bottom-2 {\n  margin-top: 2px; }\n\n.padding-top-3 {\n  padding-top: 3px; }\n\n.pt-3 {\n  padding-top: 3px; }\n\n.margin-top-3 {\n  margin-top: 3px; }\n\n.ml-3 {\n  margin-left: 3px; }\n\n.mt-3 {\n  margin-top: 3px; }\n\n.margin-bottom-3 {\n  margin-top: 3px; }\n\n.padding-top-4 {\n  padding-top: 4px; }\n\n.pt-4 {\n  padding-top: 4px; }\n\n.margin-top-4 {\n  margin-top: 4px; }\n\n.ml-4 {\n  margin-left: 4px; }\n\n.mt-4 {\n  margin-top: 4px; }\n\n.margin-bottom-4 {\n  margin-top: 4px; }\n\n.padding-top-5 {\n  padding-top: 5px; }\n\n.pt-5 {\n  padding-top: 5px; }\n\n.margin-top-5 {\n  margin-top: 5px; }\n\n.ml-5 {\n  margin-left: 5px; }\n\n.mt-5 {\n  margin-top: 5px; }\n\n.margin-bottom-5 {\n  margin-top: 5px; }\n\n.padding-top-6 {\n  padding-top: 6px; }\n\n.pt-6 {\n  padding-top: 6px; }\n\n.margin-top-6 {\n  margin-top: 6px; }\n\n.ml-6 {\n  margin-left: 6px; }\n\n.mt-6 {\n  margin-top: 6px; }\n\n.margin-bottom-6 {\n  margin-top: 6px; }\n\n.padding-top-7 {\n  padding-top: 7px; }\n\n.pt-7 {\n  padding-top: 7px; }\n\n.margin-top-7 {\n  margin-top: 7px; }\n\n.ml-7 {\n  margin-left: 7px; }\n\n.mt-7 {\n  margin-top: 7px; }\n\n.margin-bottom-7 {\n  margin-top: 7px; }\n\n.padding-top-8 {\n  padding-top: 8px; }\n\n.pt-8 {\n  padding-top: 8px; }\n\n.margin-top-8 {\n  margin-top: 8px; }\n\n.ml-8 {\n  margin-left: 8px; }\n\n.mt-8 {\n  margin-top: 8px; }\n\n.margin-bottom-8 {\n  margin-top: 8px; }\n\n.padding-top-9 {\n  padding-top: 9px; }\n\n.pt-9 {\n  padding-top: 9px; }\n\n.margin-top-9 {\n  margin-top: 9px; }\n\n.ml-9 {\n  margin-left: 9px; }\n\n.mt-9 {\n  margin-top: 9px; }\n\n.margin-bottom-9 {\n  margin-top: 9px; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n\n.pt-10 {\n  padding-top: 10px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.margin-bottom-10 {\n  margin-top: 10px; }\n\n.padding-top-11 {\n  padding-top: 11px; }\n\n.pt-11 {\n  padding-top: 11px; }\n\n.margin-top-11 {\n  margin-top: 11px; }\n\n.ml-11 {\n  margin-left: 11px; }\n\n.mt-11 {\n  margin-top: 11px; }\n\n.margin-bottom-11 {\n  margin-top: 11px; }\n\n.padding-top-12 {\n  padding-top: 12px; }\n\n.pt-12 {\n  padding-top: 12px; }\n\n.margin-top-12 {\n  margin-top: 12px; }\n\n.ml-12 {\n  margin-left: 12px; }\n\n.mt-12 {\n  margin-top: 12px; }\n\n.margin-bottom-12 {\n  margin-top: 12px; }\n\n.padding-top-13 {\n  padding-top: 13px; }\n\n.pt-13 {\n  padding-top: 13px; }\n\n.margin-top-13 {\n  margin-top: 13px; }\n\n.ml-13 {\n  margin-left: 13px; }\n\n.mt-13 {\n  margin-top: 13px; }\n\n.margin-bottom-13 {\n  margin-top: 13px; }\n\n.padding-top-14 {\n  padding-top: 14px; }\n\n.pt-14 {\n  padding-top: 14px; }\n\n.margin-top-14 {\n  margin-top: 14px; }\n\n.ml-14 {\n  margin-left: 14px; }\n\n.mt-14 {\n  margin-top: 14px; }\n\n.margin-bottom-14 {\n  margin-top: 14px; }\n\n.padding-top-15 {\n  padding-top: 15px; }\n\n.pt-15 {\n  padding-top: 15px; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.ml-15 {\n  margin-left: 15px; }\n\n.mt-15 {\n  margin-top: 15px; }\n\n.margin-bottom-15 {\n  margin-top: 15px; }\n\n.padding-top-16 {\n  padding-top: 16px; }\n\n.pt-16 {\n  padding-top: 16px; }\n\n.margin-top-16 {\n  margin-top: 16px; }\n\n.ml-16 {\n  margin-left: 16px; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.margin-bottom-16 {\n  margin-top: 16px; }\n\n.padding-top-17 {\n  padding-top: 17px; }\n\n.pt-17 {\n  padding-top: 17px; }\n\n.margin-top-17 {\n  margin-top: 17px; }\n\n.ml-17 {\n  margin-left: 17px; }\n\n.mt-17 {\n  margin-top: 17px; }\n\n.margin-bottom-17 {\n  margin-top: 17px; }\n\n.padding-top-18 {\n  padding-top: 18px; }\n\n.pt-18 {\n  padding-top: 18px; }\n\n.margin-top-18 {\n  margin-top: 18px; }\n\n.ml-18 {\n  margin-left: 18px; }\n\n.mt-18 {\n  margin-top: 18px; }\n\n.margin-bottom-18 {\n  margin-top: 18px; }\n\n.padding-top-19 {\n  padding-top: 19px; }\n\n.pt-19 {\n  padding-top: 19px; }\n\n.margin-top-19 {\n  margin-top: 19px; }\n\n.ml-19 {\n  margin-left: 19px; }\n\n.mt-19 {\n  margin-top: 19px; }\n\n.margin-bottom-19 {\n  margin-top: 19px; }\n\n.padding-top-20 {\n  padding-top: 20px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.margin-bottom-20 {\n  margin-top: 20px; }\n\n.padding-top-21 {\n  padding-top: 21px; }\n\n.pt-21 {\n  padding-top: 21px; }\n\n.margin-top-21 {\n  margin-top: 21px; }\n\n.ml-21 {\n  margin-left: 21px; }\n\n.mt-21 {\n  margin-top: 21px; }\n\n.margin-bottom-21 {\n  margin-top: 21px; }\n\n.padding-top-22 {\n  padding-top: 22px; }\n\n.pt-22 {\n  padding-top: 22px; }\n\n.margin-top-22 {\n  margin-top: 22px; }\n\n.ml-22 {\n  margin-left: 22px; }\n\n.mt-22 {\n  margin-top: 22px; }\n\n.margin-bottom-22 {\n  margin-top: 22px; }\n\n.padding-top-23 {\n  padding-top: 23px; }\n\n.pt-23 {\n  padding-top: 23px; }\n\n.margin-top-23 {\n  margin-top: 23px; }\n\n.ml-23 {\n  margin-left: 23px; }\n\n.mt-23 {\n  margin-top: 23px; }\n\n.margin-bottom-23 {\n  margin-top: 23px; }\n\n.padding-top-24 {\n  padding-top: 24px; }\n\n.pt-24 {\n  padding-top: 24px; }\n\n.margin-top-24 {\n  margin-top: 24px; }\n\n.ml-24 {\n  margin-left: 24px; }\n\n.mt-24 {\n  margin-top: 24px; }\n\n.margin-bottom-24 {\n  margin-top: 24px; }\n\n.padding-top-25 {\n  padding-top: 25px; }\n\n.pt-25 {\n  padding-top: 25px; }\n\n.margin-top-25 {\n  margin-top: 25px; }\n\n.ml-25 {\n  margin-left: 25px; }\n\n.mt-25 {\n  margin-top: 25px; }\n\n.margin-bottom-25 {\n  margin-top: 25px; }\n\n.padding-top-26 {\n  padding-top: 26px; }\n\n.pt-26 {\n  padding-top: 26px; }\n\n.margin-top-26 {\n  margin-top: 26px; }\n\n.ml-26 {\n  margin-left: 26px; }\n\n.mt-26 {\n  margin-top: 26px; }\n\n.margin-bottom-26 {\n  margin-top: 26px; }\n\n.padding-top-27 {\n  padding-top: 27px; }\n\n.pt-27 {\n  padding-top: 27px; }\n\n.margin-top-27 {\n  margin-top: 27px; }\n\n.ml-27 {\n  margin-left: 27px; }\n\n.mt-27 {\n  margin-top: 27px; }\n\n.margin-bottom-27 {\n  margin-top: 27px; }\n\n.padding-top-28 {\n  padding-top: 28px; }\n\n.pt-28 {\n  padding-top: 28px; }\n\n.margin-top-28 {\n  margin-top: 28px; }\n\n.ml-28 {\n  margin-left: 28px; }\n\n.mt-28 {\n  margin-top: 28px; }\n\n.margin-bottom-28 {\n  margin-top: 28px; }\n\n.padding-top-29 {\n  padding-top: 29px; }\n\n.pt-29 {\n  padding-top: 29px; }\n\n.margin-top-29 {\n  margin-top: 29px; }\n\n.ml-29 {\n  margin-left: 29px; }\n\n.mt-29 {\n  margin-top: 29px; }\n\n.margin-bottom-29 {\n  margin-top: 29px; }\n\n.padding-top-30 {\n  padding-top: 30px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.margin-top-30 {\n  margin-top: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.margin-bottom-30 {\n  margin-top: 30px; }\n\n.padding-top-31 {\n  padding-top: 31px; }\n\n.pt-31 {\n  padding-top: 31px; }\n\n.margin-top-31 {\n  margin-top: 31px; }\n\n.ml-31 {\n  margin-left: 31px; }\n\n.mt-31 {\n  margin-top: 31px; }\n\n.margin-bottom-31 {\n  margin-top: 31px; }\n\n.padding-top-32 {\n  padding-top: 32px; }\n\n.pt-32 {\n  padding-top: 32px; }\n\n.margin-top-32 {\n  margin-top: 32px; }\n\n.ml-32 {\n  margin-left: 32px; }\n\n.mt-32 {\n  margin-top: 32px; }\n\n.margin-bottom-32 {\n  margin-top: 32px; }\n\n.padding-top-33 {\n  padding-top: 33px; }\n\n.pt-33 {\n  padding-top: 33px; }\n\n.margin-top-33 {\n  margin-top: 33px; }\n\n.ml-33 {\n  margin-left: 33px; }\n\n.mt-33 {\n  margin-top: 33px; }\n\n.margin-bottom-33 {\n  margin-top: 33px; }\n\n.padding-top-34 {\n  padding-top: 34px; }\n\n.pt-34 {\n  padding-top: 34px; }\n\n.margin-top-34 {\n  margin-top: 34px; }\n\n.ml-34 {\n  margin-left: 34px; }\n\n.mt-34 {\n  margin-top: 34px; }\n\n.margin-bottom-34 {\n  margin-top: 34px; }\n\n.padding-top-35 {\n  padding-top: 35px; }\n\n.pt-35 {\n  padding-top: 35px; }\n\n.margin-top-35 {\n  margin-top: 35px; }\n\n.ml-35 {\n  margin-left: 35px; }\n\n.mt-35 {\n  margin-top: 35px; }\n\n.margin-bottom-35 {\n  margin-top: 35px; }\n\n.padding-top-36 {\n  padding-top: 36px; }\n\n.pt-36 {\n  padding-top: 36px; }\n\n.margin-top-36 {\n  margin-top: 36px; }\n\n.ml-36 {\n  margin-left: 36px; }\n\n.mt-36 {\n  margin-top: 36px; }\n\n.margin-bottom-36 {\n  margin-top: 36px; }\n\n.padding-top-37 {\n  padding-top: 37px; }\n\n.pt-37 {\n  padding-top: 37px; }\n\n.margin-top-37 {\n  margin-top: 37px; }\n\n.ml-37 {\n  margin-left: 37px; }\n\n.mt-37 {\n  margin-top: 37px; }\n\n.margin-bottom-37 {\n  margin-top: 37px; }\n\n.padding-top-38 {\n  padding-top: 38px; }\n\n.pt-38 {\n  padding-top: 38px; }\n\n.margin-top-38 {\n  margin-top: 38px; }\n\n.ml-38 {\n  margin-left: 38px; }\n\n.mt-38 {\n  margin-top: 38px; }\n\n.margin-bottom-38 {\n  margin-top: 38px; }\n\n.padding-top-39 {\n  padding-top: 39px; }\n\n.pt-39 {\n  padding-top: 39px; }\n\n.margin-top-39 {\n  margin-top: 39px; }\n\n.ml-39 {\n  margin-left: 39px; }\n\n.mt-39 {\n  margin-top: 39px; }\n\n.margin-bottom-39 {\n  margin-top: 39px; }\n\n.padding-top-40 {\n  padding-top: 40px; }\n\n.pt-40 {\n  padding-top: 40px; }\n\n.margin-top-40 {\n  margin-top: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.margin-bottom-40 {\n  margin-top: 40px; }\n\n.padding-top-41 {\n  padding-top: 41px; }\n\n.pt-41 {\n  padding-top: 41px; }\n\n.margin-top-41 {\n  margin-top: 41px; }\n\n.ml-41 {\n  margin-left: 41px; }\n\n.mt-41 {\n  margin-top: 41px; }\n\n.margin-bottom-41 {\n  margin-top: 41px; }\n\n.padding-top-42 {\n  padding-top: 42px; }\n\n.pt-42 {\n  padding-top: 42px; }\n\n.margin-top-42 {\n  margin-top: 42px; }\n\n.ml-42 {\n  margin-left: 42px; }\n\n.mt-42 {\n  margin-top: 42px; }\n\n.margin-bottom-42 {\n  margin-top: 42px; }\n\n.padding-top-43 {\n  padding-top: 43px; }\n\n.pt-43 {\n  padding-top: 43px; }\n\n.margin-top-43 {\n  margin-top: 43px; }\n\n.ml-43 {\n  margin-left: 43px; }\n\n.mt-43 {\n  margin-top: 43px; }\n\n.margin-bottom-43 {\n  margin-top: 43px; }\n\n.padding-top-44 {\n  padding-top: 44px; }\n\n.pt-44 {\n  padding-top: 44px; }\n\n.margin-top-44 {\n  margin-top: 44px; }\n\n.ml-44 {\n  margin-left: 44px; }\n\n.mt-44 {\n  margin-top: 44px; }\n\n.margin-bottom-44 {\n  margin-top: 44px; }\n\n.padding-top-45 {\n  padding-top: 45px; }\n\n.pt-45 {\n  padding-top: 45px; }\n\n.margin-top-45 {\n  margin-top: 45px; }\n\n.ml-45 {\n  margin-left: 45px; }\n\n.mt-45 {\n  margin-top: 45px; }\n\n.margin-bottom-45 {\n  margin-top: 45px; }\n\n.padding-top-46 {\n  padding-top: 46px; }\n\n.pt-46 {\n  padding-top: 46px; }\n\n.margin-top-46 {\n  margin-top: 46px; }\n\n.ml-46 {\n  margin-left: 46px; }\n\n.mt-46 {\n  margin-top: 46px; }\n\n.margin-bottom-46 {\n  margin-top: 46px; }\n\n.padding-top-47 {\n  padding-top: 47px; }\n\n.pt-47 {\n  padding-top: 47px; }\n\n.margin-top-47 {\n  margin-top: 47px; }\n\n.ml-47 {\n  margin-left: 47px; }\n\n.mt-47 {\n  margin-top: 47px; }\n\n.margin-bottom-47 {\n  margin-top: 47px; }\n\n.padding-top-48 {\n  padding-top: 48px; }\n\n.pt-48 {\n  padding-top: 48px; }\n\n.margin-top-48 {\n  margin-top: 48px; }\n\n.ml-48 {\n  margin-left: 48px; }\n\n.mt-48 {\n  margin-top: 48px; }\n\n.margin-bottom-48 {\n  margin-top: 48px; }\n\n.padding-top-49 {\n  padding-top: 49px; }\n\n.pt-49 {\n  padding-top: 49px; }\n\n.margin-top-49 {\n  margin-top: 49px; }\n\n.ml-49 {\n  margin-left: 49px; }\n\n.mt-49 {\n  margin-top: 49px; }\n\n.margin-bottom-49 {\n  margin-top: 49px; }\n\n.padding-top-50 {\n  padding-top: 50px; }\n\n.pt-50 {\n  padding-top: 50px; }\n\n.margin-top-50 {\n  margin-top: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.margin-bottom-50 {\n  margin-top: 50px; }\n\n.padding-top-51 {\n  padding-top: 51px; }\n\n.pt-51 {\n  padding-top: 51px; }\n\n.margin-top-51 {\n  margin-top: 51px; }\n\n.ml-51 {\n  margin-left: 51px; }\n\n.mt-51 {\n  margin-top: 51px; }\n\n.margin-bottom-51 {\n  margin-top: 51px; }\n\n.padding-top-52 {\n  padding-top: 52px; }\n\n.pt-52 {\n  padding-top: 52px; }\n\n.margin-top-52 {\n  margin-top: 52px; }\n\n.ml-52 {\n  margin-left: 52px; }\n\n.mt-52 {\n  margin-top: 52px; }\n\n.margin-bottom-52 {\n  margin-top: 52px; }\n\n.padding-top-53 {\n  padding-top: 53px; }\n\n.pt-53 {\n  padding-top: 53px; }\n\n.margin-top-53 {\n  margin-top: 53px; }\n\n.ml-53 {\n  margin-left: 53px; }\n\n.mt-53 {\n  margin-top: 53px; }\n\n.margin-bottom-53 {\n  margin-top: 53px; }\n\n.padding-top-54 {\n  padding-top: 54px; }\n\n.pt-54 {\n  padding-top: 54px; }\n\n.margin-top-54 {\n  margin-top: 54px; }\n\n.ml-54 {\n  margin-left: 54px; }\n\n.mt-54 {\n  margin-top: 54px; }\n\n.margin-bottom-54 {\n  margin-top: 54px; }\n\n.padding-top-55 {\n  padding-top: 55px; }\n\n.pt-55 {\n  padding-top: 55px; }\n\n.margin-top-55 {\n  margin-top: 55px; }\n\n.ml-55 {\n  margin-left: 55px; }\n\n.mt-55 {\n  margin-top: 55px; }\n\n.margin-bottom-55 {\n  margin-top: 55px; }\n\n.padding-top-56 {\n  padding-top: 56px; }\n\n.pt-56 {\n  padding-top: 56px; }\n\n.margin-top-56 {\n  margin-top: 56px; }\n\n.ml-56 {\n  margin-left: 56px; }\n\n.mt-56 {\n  margin-top: 56px; }\n\n.margin-bottom-56 {\n  margin-top: 56px; }\n\n.padding-top-57 {\n  padding-top: 57px; }\n\n.pt-57 {\n  padding-top: 57px; }\n\n.margin-top-57 {\n  margin-top: 57px; }\n\n.ml-57 {\n  margin-left: 57px; }\n\n.mt-57 {\n  margin-top: 57px; }\n\n.margin-bottom-57 {\n  margin-top: 57px; }\n\n.padding-top-58 {\n  padding-top: 58px; }\n\n.pt-58 {\n  padding-top: 58px; }\n\n.margin-top-58 {\n  margin-top: 58px; }\n\n.ml-58 {\n  margin-left: 58px; }\n\n.mt-58 {\n  margin-top: 58px; }\n\n.margin-bottom-58 {\n  margin-top: 58px; }\n\n.padding-top-59 {\n  padding-top: 59px; }\n\n.pt-59 {\n  padding-top: 59px; }\n\n.margin-top-59 {\n  margin-top: 59px; }\n\n.ml-59 {\n  margin-left: 59px; }\n\n.mt-59 {\n  margin-top: 59px; }\n\n.margin-bottom-59 {\n  margin-top: 59px; }\n\n.padding-top-60 {\n  padding-top: 60px; }\n\n.pt-60 {\n  padding-top: 60px; }\n\n.margin-top-60 {\n  margin-top: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.margin-bottom-60 {\n  margin-top: 60px; }\n\n.padding-top-61 {\n  padding-top: 61px; }\n\n.pt-61 {\n  padding-top: 61px; }\n\n.margin-top-61 {\n  margin-top: 61px; }\n\n.ml-61 {\n  margin-left: 61px; }\n\n.mt-61 {\n  margin-top: 61px; }\n\n.margin-bottom-61 {\n  margin-top: 61px; }\n\n.padding-top-62 {\n  padding-top: 62px; }\n\n.pt-62 {\n  padding-top: 62px; }\n\n.margin-top-62 {\n  margin-top: 62px; }\n\n.ml-62 {\n  margin-left: 62px; }\n\n.mt-62 {\n  margin-top: 62px; }\n\n.margin-bottom-62 {\n  margin-top: 62px; }\n\n.padding-top-63 {\n  padding-top: 63px; }\n\n.pt-63 {\n  padding-top: 63px; }\n\n.margin-top-63 {\n  margin-top: 63px; }\n\n.ml-63 {\n  margin-left: 63px; }\n\n.mt-63 {\n  margin-top: 63px; }\n\n.margin-bottom-63 {\n  margin-top: 63px; }\n\n.padding-top-64 {\n  padding-top: 64px; }\n\n.pt-64 {\n  padding-top: 64px; }\n\n.margin-top-64 {\n  margin-top: 64px; }\n\n.ml-64 {\n  margin-left: 64px; }\n\n.mt-64 {\n  margin-top: 64px; }\n\n.margin-bottom-64 {\n  margin-top: 64px; }\n\n.padding-top-65 {\n  padding-top: 65px; }\n\n.pt-65 {\n  padding-top: 65px; }\n\n.margin-top-65 {\n  margin-top: 65px; }\n\n.ml-65 {\n  margin-left: 65px; }\n\n.mt-65 {\n  margin-top: 65px; }\n\n.margin-bottom-65 {\n  margin-top: 65px; }\n\n.padding-top-66 {\n  padding-top: 66px; }\n\n.pt-66 {\n  padding-top: 66px; }\n\n.margin-top-66 {\n  margin-top: 66px; }\n\n.ml-66 {\n  margin-left: 66px; }\n\n.mt-66 {\n  margin-top: 66px; }\n\n.margin-bottom-66 {\n  margin-top: 66px; }\n\n.padding-top-67 {\n  padding-top: 67px; }\n\n.pt-67 {\n  padding-top: 67px; }\n\n.margin-top-67 {\n  margin-top: 67px; }\n\n.ml-67 {\n  margin-left: 67px; }\n\n.mt-67 {\n  margin-top: 67px; }\n\n.margin-bottom-67 {\n  margin-top: 67px; }\n\n.padding-top-68 {\n  padding-top: 68px; }\n\n.pt-68 {\n  padding-top: 68px; }\n\n.margin-top-68 {\n  margin-top: 68px; }\n\n.ml-68 {\n  margin-left: 68px; }\n\n.mt-68 {\n  margin-top: 68px; }\n\n.margin-bottom-68 {\n  margin-top: 68px; }\n\n.padding-top-69 {\n  padding-top: 69px; }\n\n.pt-69 {\n  padding-top: 69px; }\n\n.margin-top-69 {\n  margin-top: 69px; }\n\n.ml-69 {\n  margin-left: 69px; }\n\n.mt-69 {\n  margin-top: 69px; }\n\n.margin-bottom-69 {\n  margin-top: 69px; }\n\n.padding-top-70 {\n  padding-top: 70px; }\n\n.pt-70 {\n  padding-top: 70px; }\n\n.margin-top-70 {\n  margin-top: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.margin-bottom-70 {\n  margin-top: 70px; }\n\n.padding-top-71 {\n  padding-top: 71px; }\n\n.pt-71 {\n  padding-top: 71px; }\n\n.margin-top-71 {\n  margin-top: 71px; }\n\n.ml-71 {\n  margin-left: 71px; }\n\n.mt-71 {\n  margin-top: 71px; }\n\n.margin-bottom-71 {\n  margin-top: 71px; }\n\n.padding-top-72 {\n  padding-top: 72px; }\n\n.pt-72 {\n  padding-top: 72px; }\n\n.margin-top-72 {\n  margin-top: 72px; }\n\n.ml-72 {\n  margin-left: 72px; }\n\n.mt-72 {\n  margin-top: 72px; }\n\n.margin-bottom-72 {\n  margin-top: 72px; }\n\n.padding-top-73 {\n  padding-top: 73px; }\n\n.pt-73 {\n  padding-top: 73px; }\n\n.margin-top-73 {\n  margin-top: 73px; }\n\n.ml-73 {\n  margin-left: 73px; }\n\n.mt-73 {\n  margin-top: 73px; }\n\n.margin-bottom-73 {\n  margin-top: 73px; }\n\n.padding-top-74 {\n  padding-top: 74px; }\n\n.pt-74 {\n  padding-top: 74px; }\n\n.margin-top-74 {\n  margin-top: 74px; }\n\n.ml-74 {\n  margin-left: 74px; }\n\n.mt-74 {\n  margin-top: 74px; }\n\n.margin-bottom-74 {\n  margin-top: 74px; }\n\n.padding-top-75 {\n  padding-top: 75px; }\n\n.pt-75 {\n  padding-top: 75px; }\n\n.margin-top-75 {\n  margin-top: 75px; }\n\n.ml-75 {\n  margin-left: 75px; }\n\n.mt-75 {\n  margin-top: 75px; }\n\n.margin-bottom-75 {\n  margin-top: 75px; }\n\n.padding-top-76 {\n  padding-top: 76px; }\n\n.pt-76 {\n  padding-top: 76px; }\n\n.margin-top-76 {\n  margin-top: 76px; }\n\n.ml-76 {\n  margin-left: 76px; }\n\n.mt-76 {\n  margin-top: 76px; }\n\n.margin-bottom-76 {\n  margin-top: 76px; }\n\n.padding-top-77 {\n  padding-top: 77px; }\n\n.pt-77 {\n  padding-top: 77px; }\n\n.margin-top-77 {\n  margin-top: 77px; }\n\n.ml-77 {\n  margin-left: 77px; }\n\n.mt-77 {\n  margin-top: 77px; }\n\n.margin-bottom-77 {\n  margin-top: 77px; }\n\n.padding-top-78 {\n  padding-top: 78px; }\n\n.pt-78 {\n  padding-top: 78px; }\n\n.margin-top-78 {\n  margin-top: 78px; }\n\n.ml-78 {\n  margin-left: 78px; }\n\n.mt-78 {\n  margin-top: 78px; }\n\n.margin-bottom-78 {\n  margin-top: 78px; }\n\n.padding-top-79 {\n  padding-top: 79px; }\n\n.pt-79 {\n  padding-top: 79px; }\n\n.margin-top-79 {\n  margin-top: 79px; }\n\n.ml-79 {\n  margin-left: 79px; }\n\n.mt-79 {\n  margin-top: 79px; }\n\n.margin-bottom-79 {\n  margin-top: 79px; }\n\n.padding-top-80 {\n  padding-top: 80px; }\n\n.pt-80 {\n  padding-top: 80px; }\n\n.margin-top-80 {\n  margin-top: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.margin-bottom-80 {\n  margin-top: 80px; }\n\n.padding-top-81 {\n  padding-top: 81px; }\n\n.pt-81 {\n  padding-top: 81px; }\n\n.margin-top-81 {\n  margin-top: 81px; }\n\n.ml-81 {\n  margin-left: 81px; }\n\n.mt-81 {\n  margin-top: 81px; }\n\n.margin-bottom-81 {\n  margin-top: 81px; }\n\n.padding-top-82 {\n  padding-top: 82px; }\n\n.pt-82 {\n  padding-top: 82px; }\n\n.margin-top-82 {\n  margin-top: 82px; }\n\n.ml-82 {\n  margin-left: 82px; }\n\n.mt-82 {\n  margin-top: 82px; }\n\n.margin-bottom-82 {\n  margin-top: 82px; }\n\n.padding-top-83 {\n  padding-top: 83px; }\n\n.pt-83 {\n  padding-top: 83px; }\n\n.margin-top-83 {\n  margin-top: 83px; }\n\n.ml-83 {\n  margin-left: 83px; }\n\n.mt-83 {\n  margin-top: 83px; }\n\n.margin-bottom-83 {\n  margin-top: 83px; }\n\n.padding-top-84 {\n  padding-top: 84px; }\n\n.pt-84 {\n  padding-top: 84px; }\n\n.margin-top-84 {\n  margin-top: 84px; }\n\n.ml-84 {\n  margin-left: 84px; }\n\n.mt-84 {\n  margin-top: 84px; }\n\n.margin-bottom-84 {\n  margin-top: 84px; }\n\n.padding-top-85 {\n  padding-top: 85px; }\n\n.pt-85 {\n  padding-top: 85px; }\n\n.margin-top-85 {\n  margin-top: 85px; }\n\n.ml-85 {\n  margin-left: 85px; }\n\n.mt-85 {\n  margin-top: 85px; }\n\n.margin-bottom-85 {\n  margin-top: 85px; }\n\n.padding-top-86 {\n  padding-top: 86px; }\n\n.pt-86 {\n  padding-top: 86px; }\n\n.margin-top-86 {\n  margin-top: 86px; }\n\n.ml-86 {\n  margin-left: 86px; }\n\n.mt-86 {\n  margin-top: 86px; }\n\n.margin-bottom-86 {\n  margin-top: 86px; }\n\n.padding-top-87 {\n  padding-top: 87px; }\n\n.pt-87 {\n  padding-top: 87px; }\n\n.margin-top-87 {\n  margin-top: 87px; }\n\n.ml-87 {\n  margin-left: 87px; }\n\n.mt-87 {\n  margin-top: 87px; }\n\n.margin-bottom-87 {\n  margin-top: 87px; }\n\n.padding-top-88 {\n  padding-top: 88px; }\n\n.pt-88 {\n  padding-top: 88px; }\n\n.margin-top-88 {\n  margin-top: 88px; }\n\n.ml-88 {\n  margin-left: 88px; }\n\n.mt-88 {\n  margin-top: 88px; }\n\n.margin-bottom-88 {\n  margin-top: 88px; }\n\n.padding-top-89 {\n  padding-top: 89px; }\n\n.pt-89 {\n  padding-top: 89px; }\n\n.margin-top-89 {\n  margin-top: 89px; }\n\n.ml-89 {\n  margin-left: 89px; }\n\n.mt-89 {\n  margin-top: 89px; }\n\n.margin-bottom-89 {\n  margin-top: 89px; }\n\n.padding-top-90 {\n  padding-top: 90px; }\n\n.pt-90 {\n  padding-top: 90px; }\n\n.margin-top-90 {\n  margin-top: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.margin-bottom-90 {\n  margin-top: 90px; }\n\n.padding-top-91 {\n  padding-top: 91px; }\n\n.pt-91 {\n  padding-top: 91px; }\n\n.margin-top-91 {\n  margin-top: 91px; }\n\n.ml-91 {\n  margin-left: 91px; }\n\n.mt-91 {\n  margin-top: 91px; }\n\n.margin-bottom-91 {\n  margin-top: 91px; }\n\n.padding-top-92 {\n  padding-top: 92px; }\n\n.pt-92 {\n  padding-top: 92px; }\n\n.margin-top-92 {\n  margin-top: 92px; }\n\n.ml-92 {\n  margin-left: 92px; }\n\n.mt-92 {\n  margin-top: 92px; }\n\n.margin-bottom-92 {\n  margin-top: 92px; }\n\n.padding-top-93 {\n  padding-top: 93px; }\n\n.pt-93 {\n  padding-top: 93px; }\n\n.margin-top-93 {\n  margin-top: 93px; }\n\n.ml-93 {\n  margin-left: 93px; }\n\n.mt-93 {\n  margin-top: 93px; }\n\n.margin-bottom-93 {\n  margin-top: 93px; }\n\n.padding-top-94 {\n  padding-top: 94px; }\n\n.pt-94 {\n  padding-top: 94px; }\n\n.margin-top-94 {\n  margin-top: 94px; }\n\n.ml-94 {\n  margin-left: 94px; }\n\n.mt-94 {\n  margin-top: 94px; }\n\n.margin-bottom-94 {\n  margin-top: 94px; }\n\n.padding-top-95 {\n  padding-top: 95px; }\n\n.pt-95 {\n  padding-top: 95px; }\n\n.margin-top-95 {\n  margin-top: 95px; }\n\n.ml-95 {\n  margin-left: 95px; }\n\n.mt-95 {\n  margin-top: 95px; }\n\n.margin-bottom-95 {\n  margin-top: 95px; }\n\n.padding-top-96 {\n  padding-top: 96px; }\n\n.pt-96 {\n  padding-top: 96px; }\n\n.margin-top-96 {\n  margin-top: 96px; }\n\n.ml-96 {\n  margin-left: 96px; }\n\n.mt-96 {\n  margin-top: 96px; }\n\n.margin-bottom-96 {\n  margin-top: 96px; }\n\n.padding-top-97 {\n  padding-top: 97px; }\n\n.pt-97 {\n  padding-top: 97px; }\n\n.margin-top-97 {\n  margin-top: 97px; }\n\n.ml-97 {\n  margin-left: 97px; }\n\n.mt-97 {\n  margin-top: 97px; }\n\n.margin-bottom-97 {\n  margin-top: 97px; }\n\n.padding-top-98 {\n  padding-top: 98px; }\n\n.pt-98 {\n  padding-top: 98px; }\n\n.margin-top-98 {\n  margin-top: 98px; }\n\n.ml-98 {\n  margin-left: 98px; }\n\n.mt-98 {\n  margin-top: 98px; }\n\n.margin-bottom-98 {\n  margin-top: 98px; }\n\n.padding-top-99 {\n  padding-top: 99px; }\n\n.pt-99 {\n  padding-top: 99px; }\n\n.margin-top-99 {\n  margin-top: 99px; }\n\n.ml-99 {\n  margin-left: 99px; }\n\n.mt-99 {\n  margin-top: 99px; }\n\n.margin-bottom-99 {\n  margin-top: 99px; }\n\n.padding-top-100 {\n  padding-top: 100px; }\n\n.pt-100 {\n  padding-top: 100px; }\n\n.margin-top-100 {\n  margin-top: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.margin-bottom-100 {\n  margin-top: 100px; }\n\n/*for targetting small screens */\n\n.cred-error {\n  border: 1px solid #b63432 !important; }\n\n.credential-err-msg {\n  font-size: 14px;\n  position: absolute;\n  bottom: 100%;\n  background-color: #b63432;\n  color: #ffffff;\n  padding: 10px;\n  left: 6%;\n  text-align: center;\n  width: 88%;\n  z-index: 9; }\n\n.credential-err-msg::after {\n    content: '';\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border: 0;\n    left: 5%;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    background: #b63432;\n    bottom: -7px; }\n\n.log_in {\n  font-size: 28px;\n  padding: 3% 0 0 0px; }\n\n@media screen and (max-width: 768px) {\n    .log_in {\n      display: block;\n      overflow: hidden;\n      padding: 15px;\n      margin: 0;\n      font-size: 15px;\n      font-weight: bold;\n      color: #ffffff;\n      background: #90d2c5; } }\n\n.hrMb {\n  display: none; }\n\n.loginAlign {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.loginAlign .text:focus {\n    border-color: #80bdff !important;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6) !important; }\n\n.loginAlign .not-valid {\n    background-image: url(https://www.moltonbrown.co.uk/images/exclamation-symbol.png);\n    background-position: 95% 3px !important;\n    background-size: 4px;\n    border: 1px solid #b63432 !important;\n    background-repeat: no-repeat; }\n\n.loginAlign.valid {\n    background-image: url(\"https://www.moltonbrown.co.uk/images/tick-symbol.png\") !important;\n    background-position: 95% 2px !important;\n    background-repeat: no-repeat; }\n\n.loginAlign .contextual-help ~ .not-valid, .loginAlign .contextual-help ~ .valid {\n    background-position: 91% 4px !important; }\n\n@media screen and (max-width: 768px) {\n  .enable_password {\n    margin-bottom: 15px; }\n  .loginAlign {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .hrMb {\n    display: block; }\n  .returning_customer-log_in, .new-login {\n    border: none !important;\n    margin: 0px !important; }\n  .container {\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n  .new_customer-block, .returning_customer-log_in {\n    width: 100% !important;\n    min-height: auto !important;\n    padding-left: 0px; } }\n\n.new_customer-block .buttonStyle {\n  margin-top: 80px; }\n\n.returning_customer-log_in {\n  margin: 5% 0 7% 0;\n  box-shadow: none;\n  padding: 20px;\n  border: 1px solid #d6d6d6;\n  float: left;\n  min-height: 312px;\n  padding: 15px;\n  width: 462px; }\n\n.returning_customer-log_in h6 {\n    font-size: 13px;\n    font-weight: 900;\n    color: #260e03;\n    margin: 20px 0 18px 0; }\n\n.returning_customer-log_in .gender {\n    padding: 5px 10px 0 3px; }\n\n.returning_customer-log_in ul {\n    padding: 5px 0; }\n\n.returning_customer-log_in p {\n    padding: 10px 0 5px 0;\n    font-size: 12px;\n    line-height: 1;\n    font-style: normal;\n    color: #484848 !important; }\n\n.returning_customer-log_in form .label_text {\n    font-size: 15.6px;\n    font-weight: bold !important; }\n\n.returning_customer-log_in form a {\n    text-decoration: underline !important;\n    color: #484848 !important;\n    font-weight: normal !important; }\n\n.returning_customer-log_in form input {\n    width: 250px !important;\n    height: 25px !important;\n    padding: 0 5px !important; }\n\n.requiredFieldText {\n  padding: 30px 0 12px 0 !important;\n  font-size: 12px !important;\n  font-weight: 100; }\n\n.return-login span {\n  color: #ae140d; }\n\nh2 {\n  font-size: 24px;\n  color: #000000; }\n\n.new_customer-block {\n  margin: 5% 0 7% 0;\n  box-shadow: none;\n  width: 462px;\n  min-height: 312px;\n  font-size: 12px; }\n\n.new_customer-block h6 {\n    margin: 20px 0 18px 0;\n    font-size: 13px;\n    font-weight: 900;\n    color: #260e03; }\n\n.registerAlign {\n  margin: 19px 30px 0 0; }\n\n.new-login {\n  border: 1px solid #d6d6d6;\n  float: left;\n  padding: 15px; }\n\n.new-login ul {\n    padding: 0 15px; }\n\n.errr_msg {\n  font-size: 12px; }\n\n.enable_password {\n  cursor: pointer; }\n\n.login-fileds {\n  position: relative;\n  width: 250px; }\n\n.login-fileds .contextual-help {\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    right: -12px;\n    background-size: 7px; }\n\ninput[type=\"password\"].not-valid {\n  background-image: url(\"https://www.moltonbrown.co.uk/images/exclamation-symbol.png\");\n  background-position: 93% 0px;\n  border: 1px solid #b63432 !important;\n  background-repeat: no-repeat; }\n\n@media screen and (max-width: 768px) {\n    input[type=\"password\"].not-valid {\n      background-position: calc(100% - 41px) 10px; } }\n\ninput[type=\"password\"].not-valid:focus {\n    background-image: none !important; }\n\ninput[type=\"text\"].form-control.not-valid,\ninput[type=\"tel\"].form-control.not-valid {\n  background-position: 95% 2px !important;\n  background-size: 4px !important; }\n\n.login-filedss {\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/component/registration/registration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/registration/registration.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_form_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile-form/profile.service */ "./src/app/component/profile-form/profile.service.ts");
/* harmony import */ var _forms_guestForm_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/guestForm.form */ "./src/app/forms/guestForm.form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/singleton.service */ "./src/app/services/singleton.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../translate.service */ "./src/app/translate.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, customerForm, fb, titleService, profileServ, singletonServ, _authService, translate, deviceService) {
        this.router = router;
        this.customerForm = customerForm;
        this.fb = fb;
        this.titleService = titleService;
        this.profileServ = profileServ;
        this.singletonServ = singletonServ;
        this._authService = _authService;
        this.translate = translate;
        this.deviceService = deviceService;
        this.authForm = this.fb.group(customerForm.authenticationForm());
        this.showCrentialError = false;
    }
    RegistrationComponent.prototype.getDeviceInfo = function () {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        var isDesktopDevice = this.deviceService.isDesktop();
        if (isMobile || isTablet) {
            this.mobileDevice = true;
        }
        else {
            this.mobileDevice = false;
        }
        if (isDesktopDevice) {
            this.desktopDevice = true;
        }
        else {
            this.desktopDevice = false;
        }
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Login | Molton Brown');
        this.breadcrumb = [{ name: 'MY ACCOUNT', route: '/store/myacc/mbLogin' }, { name: 'MY PROFILE' }];
        var baseSite = this.singletonServ.catalogVersion;
        if (baseSite) {
            this.setLang(baseSite.lngCode);
        }
        this.getDeviceInfo();
    };
    RegistrationComponent.prototype.setLang = function (lang) {
        this.translate.use(lang);
    };
    RegistrationComponent.prototype.onShowRegisterForm = function () {
        this.router.navigate(["store", "myacc", "mbRegister"]);
    };
    RegistrationComponent.prototype.onSubmitForm = function (event) {
        var _this = this;
        event.stopPropagation();
        if (this.authForm.valid) {
            var baseSite_1 = this.singletonServ.catalogVersion;
            var baseSiteid = baseSite_1.catalogversionId;
            var _userForm_1 = this.authForm.value;
            this.loading = true;
            var queryStatus_1 = window
                .location.search.replace('?', '');
            this.profileServ.siteAuthentication(baseSiteid, _userForm_1).subscribe(function (resp) {
                _this.showCrentialError = false;
                var obj = {
                    access_token: resp["access_token"],
                    email: _userForm_1.email
                };
                _this.singletonServ.sendMessage(obj);
                if (queryStatus_1.indexOf('ASM') != -1) {
                    if (_this.singletonServ.getStoreData('csCustomer')) {
                        var _csCustomer = JSON.parse(_this.singletonServ.getStoreData('csCustomer'));
                        obj['token'] = _csCustomer['agentToken'];
                    }
                }
                _this.singletonServ.setStoreData(baseSite_1.reg, JSON.stringify(obj));
                _this.fetchRelavantBasket(obj);
            }, function (error) {
                _this.showCrentialError = true;
            });
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    RegistrationComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    RegistrationComponent.prototype.getFavourites = function (token, email) {
        var _this = this;
        this.profileServ.getFavourites(token, email).subscribe(function (response) {
            _this.singletonServ.favourites = response["products"];
        }, function (error) { });
    };
    RegistrationComponent.prototype.fetchRelavantBasket = function (data) {
        var baseSite = this.singletonServ.catalogVersion;
        var _emptyObj = {};
        if (this.singletonServ.getStoreData(baseSite.guest)) {
            var user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
            this.mergeCart(user.token, _emptyObj, data.email, data);
        }
        else {
            this.relevantCart(data);
        }
    };
    RegistrationComponent.prototype.onRetrivePassword = function () {
        this.router.navigate(["store", "myaccount", "profile", "passwordReset"]);
    };
    RegistrationComponent.prototype.relevantCart = function (data) {
        var _this = this;
        var baseSite = this.singletonServ.catalogVersion;
        this.profileServ.generateToken().subscribe(function (resp) {
            var token = resp["access_token"];
            data['token'] = token;
            _this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(data));
            _this.profileServ
                .getCurrentUserRelevantCart(token, data.email)
                .subscribe(function (resp) {
                if (resp["carts"]) {
                    if (resp["carts"][0]) {
                        var code = resp["carts"][0]["code"];
                        data["code"] = code;
                        data["guid"] = resp["carts"][0]["guid"];
                        _this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(data));
                        _this.singletonServ.removeItem(baseSite.guest);
                        var obj = { updateCart: true };
                        _this.singletonServ.sendMessage(obj);
                    }
                }
                _this.loading = false;
                if (_this.singletonServ.redirectUrl) {
                    _this.router.navigate([_this.singletonServ.redirectUrl]);
                    _this.singletonServ.redirectUrl = null;
                }
                else {
                    _this.router.navigate(["store", "myaccount", "profile", "detail"]);
                }
            }, function (error) {
                _this.loading = false;
                if (_this.singletonServ.redirectUrl) {
                    _this.router.navigate([_this.singletonServ.redirectUrl]);
                    _this.singletonServ.redirectUrl = null;
                }
                else {
                    _this.router.navigate(["store", "myaccount", "profile", "detail"]);
                }
            });
        }, function (error) {
            _this.loading = false;
        });
    };
    RegistrationComponent.prototype.mergeCart = function (token, _emptyObj, email, data) {
        var _this = this;
        var baseSite = this.singletonServ.catalogVersion;
        var user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        this.profileServ
            .creatEmptyCart(token, _emptyObj, email)
            .subscribe(function (emptyCart) {
            _this.profileServ
                .mergeCart(_emptyObj, data.email, user.token, user["guid"], emptyCart["guid"])
                .subscribe(function (resp) {
                var _obj = JSON.parse(_this.singletonServ.getStoreData(baseSite.reg));
                _obj['code'] = resp['code'];
                _obj['guid'] = resp['guid'];
                _obj['token'] = user.token;
                _this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_obj));
                _this.singletonServ.removeItem(baseSite.guest);
                _this.loading = false;
                _this.showCrentialError = false;
                if (_this.singletonServ.redirectUrl) {
                    _this.router.navigate([_this.singletonServ.redirectUrl]);
                    _this.singletonServ.redirectUrl = null;
                }
                else {
                    _this.router.navigate(["store", "myaccount", "profile", "detail"]);
                }
            }, function (error) {
                _this.loading = false;
                _this.singletonServ.removeItem(baseSite.guest);
                var obj = { updateCart: true };
                _this.singletonServ.sendMessage(obj);
                if (_this.singletonServ.redirectUrl) {
                    _this.router.navigate([_this.singletonServ.redirectUrl]);
                    _this.singletonServ.redirectUrl = null;
                }
                else {
                    _this.router.navigate(["store", "myaccount", "profile", "detail"]);
                }
            });
        }, function (error) {
            _this.loading = false;
            _this.singletonServ.removeItem(baseSite.guest);
            if (_this.singletonServ.redirectUrl) {
                _this.router.navigate([_this.singletonServ.redirectUrl]);
                _this.singletonServ.redirectUrl = null;
            }
            else {
                _this.router.navigate(["store", "myaccount", "profile", "detail"]);
            }
        });
    };
    RegistrationComponent.prototype.onSubmitField = function (event) {
        this.showCrentialError = false;
        if (event.key == "Enter" || event.keyCode == 13) {
            this.onSubmitForm(event);
        }
    };
    RegistrationComponent.prototype.onKeydown = function (event) {
        var _this = this;
        if (event.key == "Enter" || event.keyCode == 13) {
            if (this.authForm.valid) {
                var baseSite_2 = this.singletonServ.catalogVersion;
                var baseSiteid = baseSite_2.catalogversionId;
                var _userForm_2 = this.authForm.value;
                this.loading = true;
                var queryStatus_2 = window
                    .location.search.replace('?', '');
                this.profileServ.siteAuthentication(baseSiteid, _userForm_2).subscribe(function (resp) {
                    _this.showCrentialError = false;
                    var obj = {
                        access_token: resp["access_token"],
                        email: _userForm_2.email
                    };
                    _this.singletonServ.sendMessage(obj);
                    if (queryStatus_2.indexOf('ASM') != -1) {
                        if (_this.singletonServ.getStoreData('csCustomer')) {
                            var _csCustomer = JSON.parse(_this.singletonServ.getStoreData('csCustomer'));
                            obj['token'] = _csCustomer['agentToken'];
                        }
                    }
                    _this.singletonServ.setStoreData(baseSite_2.reg, JSON.stringify(obj));
                    _this.fetchRelavantBasket(obj);
                }, function (error) {
                    _this.showCrentialError = true;
                });
            }
            else {
                this.validateAllFormFields(this.authForm);
            }
        }
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-registration",
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/component/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/component/registration/registration.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _forms_guestForm_form__WEBPACK_IMPORTED_MODULE_3__["GuestForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"],
            _profile_form_profile_service__WEBPACK_IMPORTED_MODULE_2__["profileComponentService"],
            _services_singleton_service__WEBPACK_IMPORTED_MODULE_5__["SingletonService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _translate_service__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__["DeviceDetectorService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/forms/guestForm.form.ts":
/*!*****************************************!*\
  !*** ./src/app/forms/guestForm.form.ts ***!
  \*****************************************/
/*! exports provided: GuestForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestForm", function() { return GuestForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pattern_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pattern-validator */ "./src/app/forms/pattern-validator.ts");
/* harmony import */ var _custom_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-validator.directive */ "./src/app/forms/custom-validator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GuestForm = /** @class */ (function () {
    function GuestForm() {
    }
    GuestForm.prototype.getForm = function () {
        return {
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
                updateOn: 'blur' }),
            saveGuest: [''],
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ],
                updateOn: 'blur'
            })
        };
    };
    GuestForm.prototype.authenticationForm = function () {
        return {
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
                updateOn: 'blur' }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ] })
        };
    };
    GuestForm.prototype.orderRegisterForm = function () {
        return {
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^.{6,20}$/)
                ],
                updateOn: 'blur'
            }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_custom_validator_directive__WEBPACK_IMPORTED_MODULE_3__["compareValidator"])('password')
                ],
                updateOn: 'blur'
            })
        };
    };
    GuestForm.prototype.getPromoCodeForm = function () {
        return {
            promoCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], updateOn: 'blur' })
        };
    };
    GuestForm.prototype.getGiftMessageForm = function () {
        return {
            giftBox: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: false }),
            giftMsg: [''],
            giftMessage: ['']
        };
    };
    GuestForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], GuestForm);
    return GuestForm;
}());



/***/ }),

/***/ "./src/app/myaccount/myacc.module.ts":
/*!*******************************************!*\
  !*** ./src/app/myaccount/myacc.module.ts ***!
  \*******************************************/
/*! exports provided: MyaccRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccRouteModule", function() { return MyaccRouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _component_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/profile-form/profile-form.component */ "./src/app/component/profile-form/profile-form.component.ts");
/* harmony import */ var _component_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/registration/registration.component */ "./src/app/component/registration/registration.component.ts");
/* harmony import */ var _component_mb_bread_crumb_mb_bread_crumb_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/mb-bread-crumb/mb-bread-crumb.module */ "./src/app/component/mb-bread-crumb/mb-bread-crumb.module.ts");
/* harmony import */ var _pipe_transalte_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipe/transalte.module */ "./src/app/pipe/transalte.module.ts");
/* harmony import */ var _directives_customFocus_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/customFocus.module */ "./src/app/directives/customFocus.module.ts");
/* harmony import */ var _checkout_cart_googleplacedirective_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../checkout-cart/googleplacedirective.module */ "./src/app/checkout-cart/googleplacedirective.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'mbLogin', pathMatch: 'full' },
    { path: 'mbLogin', component: _component_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] },
    { path: 'mbRegister', component: _component_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFormComponent"] }
];
var MyaccRouteModule = /** @class */ (function () {
    function MyaccRouteModule() {
    }
    MyaccRouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _component_mb_bread_crumb_mb_bread_crumb_module__WEBPACK_IMPORTED_MODULE_7__["MbBreadCrumbModule"],
                _pipe_transalte_module__WEBPACK_IMPORTED_MODULE_8__["TranslatServicePipeModule"],
                _directives_customFocus_module__WEBPACK_IMPORTED_MODULE_9__["CustomFocusControlDirectiveModule"],
                _checkout_cart_googleplacedirective_module__WEBPACK_IMPORTED_MODULE_10__["GooglePlacesDirectiveModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _component_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                _component_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_5__["ProfileFormComponent"]
            ],
            providers: []
        })
    ], MyaccRouteModule);
    return MyaccRouteModule;
}());



/***/ })

}]);
//# sourceMappingURL=myaccount-myacc-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browse-browse-module"],{

/***/ "./src/app/browse/browse.module.ts":
/*!*****************************************!*\
  !*** ./src/app/browse/browse.module.ts ***!
  \*****************************************/
/*! exports provided: BrowseComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponentModule", function() { return BrowseComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/browse/feedback/feedback.component.ts");
/* harmony import */ var _customfocusDirective_browseCustomFocusDirective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customfocusDirective/browseCustomFocusDirective */ "./src/app/browse/customfocusDirective/browseCustomFocusDirective.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"], data: { title: 'Customers' },
    }
];
var BrowseComponentModule = /** @class */ (function () {
    function BrowseComponentModule() {
    }
    BrowseComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [
                _customfocusDirective_browseCustomFocusDirective__WEBPACK_IMPORTED_MODULE_5__["browseCustomFocusDirective"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"]
            ],
            providers: []
        })
    ], BrowseComponentModule);
    return BrowseComponentModule;
}());



/***/ }),

/***/ "./src/app/browse/customfocusDirective/browseCustomFocusDirective.ts":
/*!***************************************************************************!*\
  !*** ./src/app/browse/customfocusDirective/browseCustomFocusDirective.ts ***!
  \***************************************************************************/
/*! exports provided: browseCustomFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browseCustomFocusDirective", function() { return browseCustomFocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var browseCustomFocusDirective = /** @class */ (function () {
    function browseCustomFocusDirective(el) {
        this.el = el;
    }
    browseCustomFocusDirective.prototype.onSubmit = function (event) {
        if ('INVALID' === this.formGroup.status) {
            event.preventDefault();
            var formGroupInvalid = this.el.nativeElement.querySelectorAll('.ng-invalid');
            formGroupInvalid[0].focus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], browseCustomFocusDirective.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], browseCustomFocusDirective.prototype, "formGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('submit', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], browseCustomFocusDirective.prototype, "onSubmit", null);
    browseCustomFocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[custom-focus]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], browseCustomFocusDirective);
    return browseCustomFocusDirective;
}());



/***/ }),

/***/ "./src/app/browse/feedback/feedback.component.html":
/*!*********************************************************!*\
  !*** ./src/app/browse/feedback/feedback.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container reg_form\">\r\n  <div class=\"rowComponents\">\r\n    <h2 class=\"col-sm-12 register-in\">Distribution Enquiry - UK & Ireland</h2>\r\n    <form [formGroup]=\"contactEnquiryForm\" (ngSubmit)=\"onSubmit($event, true)\" custom-focus\r\n      class=\"contact_enquiry_form\">\r\n\r\n      <div class=\"col-xs-12 required_text\">\r\n        &nbsp;<span class=\"redcolor\">*</span>Required Field\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_title\">Title<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <select class=\"mandatory form-control\" formControlName=\"titleCode\" [ngClass]=\"{\r\n                  'has-error  not-valid':\r\n                    !contactEnquiryForm.controls['titleCode'].valid &&\r\n                    contactEnquiryForm.get('titleCode').touched\r\n                }\">\r\n              <option value=\"null\" selected>Please Select</option>\r\n              <option value=\"miss\">Miss</option>\r\n              <option value=\"mrs\">Mrs</option>\r\n              <option value=\"ms\">Ms</option>\r\n              <option value=\"mr\">Mr</option>\r\n              <option value=\"dr\">Dr</option>\r\n            </select>\r\n            <div *ngIf=\"\r\n                  !contactEnquiryForm.controls['titleCode'].valid &&\r\n                  contactEnquiryForm.get('titleCode').touched\r\n                \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"\r\n                    !contactEnquiryForm.controls['titleCode'].errors.required\r\n                  \">Title</span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_firstname\">First Name<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"firstName\" class=\"mandatory form-control reg_field \"     [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['firstName'].valid &&\r\n                contactEnquiryForm.get('firstName').touched\r\n            }\" />\r\n            <div *ngIf=\"\r\n                  !contactEnquiryForm.controls['firstName'].valid &&\r\n                  contactEnquiryForm.get('firstName').touched\r\n                \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"\r\n                    !contactEnquiryForm.controls['firstName'].errors.required\r\n                  \">\r\n                firstname error\r\n              </span>\r\n              <span *ngIf=\"\r\n                    contactEnquiryForm.controls['firstName'].errors.patternInvalid\r\n                  \">\r\n                first name pattern error\r\n              </span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_lastname\">Last Name<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"lastName\" class=\"mandatory form-control reg_field \"      [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['lastName'].valid &&\r\n                contactEnquiryForm.get('lastName').touched\r\n            }\" />\r\n            <div *ngIf=\"\r\n                  !contactEnquiryForm.controls['lastName'].valid &&\r\n                  contactEnquiryForm.get('lastName').touched\r\n                \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"\r\n                    !contactEnquiryForm.controls['lastName'].errors.required\r\n                  \">\r\n                last name error\r\n              </span>\r\n              <span *ngIf=\"\r\n                    contactEnquiryForm.controls['lastName'].errors.patternInvalid\r\n                  \">\r\n                last name pattern error\r\n              </span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_lastname\">Job Title<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"jobTitle\" class=\"mandatory form-control reg_field \"      [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['jobTitle'].valid &&\r\n                contactEnquiryForm.get('jobTitle').touched\r\n            }\" />\r\n            <div *ngIf=\"\r\n          !contactEnquiryForm.controls['jobTitle'].valid &&\r\n          contactEnquiryForm.get('jobTitle').touched\r\n        \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['jobTitle'].errors.required\r\n          \">\r\n                job error\r\n              </span>\r\n              <span *ngIf=\"\r\n            contactEnquiryForm.controls['jobTitle'].errors.patternInvalid\r\n          \">\r\n                job title pattern error\r\n              </span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_compName\">Company Name<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"companyName\" class=\"mandatory form-control reg_field\"      [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['companyName'].valid &&\r\n                contactEnquiryForm.get('companyName').touched\r\n            }\" />\r\n            <div *ngIf=\"\r\n          !contactEnquiryForm.controls['companyName'].valid &&\r\n          contactEnquiryForm.get('companyName').touched\r\n        \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"!contactEnquiryForm.controls['companyName'].errors.required\">companyName error</span>\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['companyName'].errors.patternInvalid\r\n          \">companyName pattern</span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_businessType\">Business Type<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"businessType\" class=\"mandatory form-control reg_field\"      [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['businessType'].valid &&\r\n                contactEnquiryForm.get('businessType').touched\r\n            }\"/>\r\n            <div *ngIf=\"\r\n          !contactEnquiryForm.controls['businessType'].valid &&\r\n          contactEnquiryForm.get('businessType').touched\r\n        \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"!contactEnquiryForm.controls['businessType'].errors.required\">businessType error</span>\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['businessType'].errors.patternInvalid\r\n          \">businessType pattern</span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_email\">Email Address<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"email\" formControlName=\"uid\" class=\"mandatory form-control reg_field\"      [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['uid'].valid &&\r\n                contactEnquiryForm.get('uid').touched\r\n            }\" />\r\n            <div *ngIf=\"\r\n          !contactEnquiryForm.controls['uid'].valid &&\r\n          contactEnquiryForm.get('uid').touched\r\n        \" class=\"not-valid-error-msg\">\r\n              <span\r\n                [hidden]=\"!contactEnquiryForm.controls['uid'].errors.required\">email error</span>\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['uid'].errors.patternInvalid\r\n          \">invaild error</span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_email\">Confirm Email Address<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"email\" formControlName=\"confirmemail\" class=\"mandatory form-control reg_field\"      [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['confirmemail'].valid &&\r\n                contactEnquiryForm.get('confirmemail').touched\r\n            }\"/>\r\n            <div *ngIf=\"\r\n          !contactEnquiryForm.controls['confirmemail'].valid &&\r\n          contactEnquiryForm.get('confirmemail').touched\r\n        \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['confirmemail'].errors.required\r\n          \">confirmemail error</span>\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['confirmemail'].errors\r\n              .appCustomValidator\r\n          \">confirmemail pattern</span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_town\">Phone Number<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields regPhone\">\r\n            <input type=\"text\" formControlName=\"phone\" class=\"mandatory form-control reg_field \"      [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['phone'].valid &&\r\n                contactEnquiryForm.get('phone').touched\r\n            }\" />\r\n            <div *ngIf=\"\r\n          !contactEnquiryForm.controls['phone'].valid &&\r\n          contactEnquiryForm.get('phone').touched\r\n        \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"!contactEnquiryForm.controls['phone'].errors.required\">\r\n                phone error\r\n              </span>\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['phone'].errors.patternInvalid\r\n          \"> phone error pattern</span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_country\">Country<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <select class=\"mandatory form-control\" formControlName=\"country\"  [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['country'].valid &&\r\n                contactEnquiryForm.get('country').touched\r\n            }\">\r\n              <option value=\"\" selected=\"selected\">Choose Country *</option>\r\n              <option></option>\r\n            </select>\r\n            <div *ngIf=\"\r\n          !contactEnquiryForm.controls['country'].valid &&\r\n          contactEnquiryForm.get('country').touched\r\n        \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['country'].errors.required\r\n          \">\r\n                country error</span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_postcode\">Postcode/Zipcode<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" class=\"mandatory form-control \" formControlName=\"postalCode\" maxlength=\"10\"  [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['postalCode'].valid &&\r\n                contactEnquiryForm.get('postalCode').touched\r\n            }\" />\r\n\r\n            <div *ngIf=\"\r\n          (!contactEnquiryForm.controls['postalCode'].valid &&\r\n          contactEnquiryForm.get('postalCode').touched)\r\n        \" class=\"not-valid-error-msg\">\r\n              <span *ngIf=\"!postCodeStatus\">Please enter a valid postcode or enter the address manually.</span>\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['postalCode'].errors.required\r\n          \">\r\n                postalCode error</span>\r\n              <span [hidden]=\"\r\n            !contactEnquiryForm.controls['postalCode'].errors.patternInvalid\r\n          \">postalCode pattern</span>\r\n            </div>\r\n            <div class=\"postcode-msg-block\">\r\n              <span>Please enter a valid postcode or enter the address manually.</span>\r\n            </div>\r\n          </span>\r\n          <span class=\"ml-8 find-address\" *ngIf=\"ukLoopBtnStatus\">\r\n            <button\r\n              class=\"buttonStyle mt-1\"\r\n              (click)=\"onLookupAddress($event)\"\r\n            >\r\n              Lookup Address\r\n            </button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \">Address<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"line1\" class=\"mandatory form-control reg_field \"  [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['line1'].valid &&\r\n                contactEnquiryForm.get('line1').touched\r\n            }\" />\r\n            <div *ngIf=\"\r\n          !contactEnquiryForm.controls['line1'].valid &&\r\n          contactEnquiryForm.get('line1').touched\r\n        \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"!contactEnquiryForm.controls['line1'].errors.required\">\r\n                line1 error</span>\r\n            </div>\r\n            <input type=\"text\" class=\"mandatory form-control\" formControlName=\"line2\" />\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \" for=\"reg_town\">Town/City</label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"town\" class=\"mandatory form-control\" />\r\n        \r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \">Country/State/Region</label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"district\" class=\"mandatory form-control  \" />\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label\">Fax Number</label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"faxNumber\" class=\"mandatory form-control  \" />\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \">Web Site</label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <input type=\"text\" formControlName=\"webSite\" class=\"mandatory form-control  \" />\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-sm-12 col-md-4 \">\r\n          <label class=\"enquiry_label \">Message<span class=\"redstar\">*</span></label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-8 text-left \">\r\n          <span class=\"login_fields\">\r\n            <textarea type=\"text\" formControlName=\"message\" class=\"mandatory form-control reg_field \" [ngClass]=\"{\r\n              'has-error  not-valid':\r\n                !contactEnquiryForm.controls['message'].valid &&\r\n                contactEnquiryForm.get('message').touched\r\n            }\"></textarea>\r\n            <div *ngIf=\"\r\n          !contactEnquiryForm.controls['message'].valid &&\r\n          contactEnquiryForm.get('message').touched\r\n        \" class=\"not-valid-error-msg\">\r\n              <span [hidden]=\"!contactEnquiryForm.controls['message'].errors.required\"> \r\n                message error</span>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 row\">\r\n        <div class=\"col-xs-1 col-sm-12 col-md-2\"></div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 text-right\" >\r\n        <button class=\"buttonStyle\" type=\"submit\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/browse/feedback/feedback.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/browse/feedback/feedback.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Century Gothic';\n  src: url(\"/assets/fonts/Century/fonts/CENTURY.ttf\") format(\"ttf\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff2\") format(\"woff2\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff\") format(\"woff\"), url(\"/assets/fonts/Century/fonts/CENTURY.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Regular';\n  src: url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Bold';\n  src: url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Italic';\n  src: url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.svg\") format(\"svg\"); }\n\n.padding-top-1 {\n  padding-top: 1px; }\n\n.pt-1 {\n  padding-top: 1px; }\n\n.margin-top-1 {\n  margin-top: 1px; }\n\n.ml-1 {\n  margin-left: 1px; }\n\n.mt-1 {\n  margin-top: 1px; }\n\n.margin-bottom-1 {\n  margin-top: 1px; }\n\n.padding-top-2 {\n  padding-top: 2px; }\n\n.pt-2 {\n  padding-top: 2px; }\n\n.margin-top-2 {\n  margin-top: 2px; }\n\n.ml-2 {\n  margin-left: 2px; }\n\n.mt-2 {\n  margin-top: 2px; }\n\n.margin-bottom-2 {\n  margin-top: 2px; }\n\n.padding-top-3 {\n  padding-top: 3px; }\n\n.pt-3 {\n  padding-top: 3px; }\n\n.margin-top-3 {\n  margin-top: 3px; }\n\n.ml-3 {\n  margin-left: 3px; }\n\n.mt-3 {\n  margin-top: 3px; }\n\n.margin-bottom-3 {\n  margin-top: 3px; }\n\n.padding-top-4 {\n  padding-top: 4px; }\n\n.pt-4 {\n  padding-top: 4px; }\n\n.margin-top-4 {\n  margin-top: 4px; }\n\n.ml-4 {\n  margin-left: 4px; }\n\n.mt-4 {\n  margin-top: 4px; }\n\n.margin-bottom-4 {\n  margin-top: 4px; }\n\n.padding-top-5 {\n  padding-top: 5px; }\n\n.pt-5 {\n  padding-top: 5px; }\n\n.margin-top-5 {\n  margin-top: 5px; }\n\n.ml-5 {\n  margin-left: 5px; }\n\n.mt-5 {\n  margin-top: 5px; }\n\n.margin-bottom-5 {\n  margin-top: 5px; }\n\n.padding-top-6 {\n  padding-top: 6px; }\n\n.pt-6 {\n  padding-top: 6px; }\n\n.margin-top-6 {\n  margin-top: 6px; }\n\n.ml-6 {\n  margin-left: 6px; }\n\n.mt-6 {\n  margin-top: 6px; }\n\n.margin-bottom-6 {\n  margin-top: 6px; }\n\n.padding-top-7 {\n  padding-top: 7px; }\n\n.pt-7 {\n  padding-top: 7px; }\n\n.margin-top-7 {\n  margin-top: 7px; }\n\n.ml-7 {\n  margin-left: 7px; }\n\n.mt-7 {\n  margin-top: 7px; }\n\n.margin-bottom-7 {\n  margin-top: 7px; }\n\n.padding-top-8 {\n  padding-top: 8px; }\n\n.pt-8 {\n  padding-top: 8px; }\n\n.margin-top-8 {\n  margin-top: 8px; }\n\n.ml-8 {\n  margin-left: 8px; }\n\n.mt-8 {\n  margin-top: 8px; }\n\n.margin-bottom-8 {\n  margin-top: 8px; }\n\n.padding-top-9 {\n  padding-top: 9px; }\n\n.pt-9 {\n  padding-top: 9px; }\n\n.margin-top-9 {\n  margin-top: 9px; }\n\n.ml-9 {\n  margin-left: 9px; }\n\n.mt-9 {\n  margin-top: 9px; }\n\n.margin-bottom-9 {\n  margin-top: 9px; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n\n.pt-10 {\n  padding-top: 10px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.margin-bottom-10 {\n  margin-top: 10px; }\n\n.padding-top-11 {\n  padding-top: 11px; }\n\n.pt-11 {\n  padding-top: 11px; }\n\n.margin-top-11 {\n  margin-top: 11px; }\n\n.ml-11 {\n  margin-left: 11px; }\n\n.mt-11 {\n  margin-top: 11px; }\n\n.margin-bottom-11 {\n  margin-top: 11px; }\n\n.padding-top-12 {\n  padding-top: 12px; }\n\n.pt-12 {\n  padding-top: 12px; }\n\n.margin-top-12 {\n  margin-top: 12px; }\n\n.ml-12 {\n  margin-left: 12px; }\n\n.mt-12 {\n  margin-top: 12px; }\n\n.margin-bottom-12 {\n  margin-top: 12px; }\n\n.padding-top-13 {\n  padding-top: 13px; }\n\n.pt-13 {\n  padding-top: 13px; }\n\n.margin-top-13 {\n  margin-top: 13px; }\n\n.ml-13 {\n  margin-left: 13px; }\n\n.mt-13 {\n  margin-top: 13px; }\n\n.margin-bottom-13 {\n  margin-top: 13px; }\n\n.padding-top-14 {\n  padding-top: 14px; }\n\n.pt-14 {\n  padding-top: 14px; }\n\n.margin-top-14 {\n  margin-top: 14px; }\n\n.ml-14 {\n  margin-left: 14px; }\n\n.mt-14 {\n  margin-top: 14px; }\n\n.margin-bottom-14 {\n  margin-top: 14px; }\n\n.padding-top-15 {\n  padding-top: 15px; }\n\n.pt-15 {\n  padding-top: 15px; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.ml-15 {\n  margin-left: 15px; }\n\n.mt-15 {\n  margin-top: 15px; }\n\n.margin-bottom-15 {\n  margin-top: 15px; }\n\n.padding-top-16 {\n  padding-top: 16px; }\n\n.pt-16 {\n  padding-top: 16px; }\n\n.margin-top-16 {\n  margin-top: 16px; }\n\n.ml-16 {\n  margin-left: 16px; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.margin-bottom-16 {\n  margin-top: 16px; }\n\n.padding-top-17 {\n  padding-top: 17px; }\n\n.pt-17 {\n  padding-top: 17px; }\n\n.margin-top-17 {\n  margin-top: 17px; }\n\n.ml-17 {\n  margin-left: 17px; }\n\n.mt-17 {\n  margin-top: 17px; }\n\n.margin-bottom-17 {\n  margin-top: 17px; }\n\n.padding-top-18 {\n  padding-top: 18px; }\n\n.pt-18 {\n  padding-top: 18px; }\n\n.margin-top-18 {\n  margin-top: 18px; }\n\n.ml-18 {\n  margin-left: 18px; }\n\n.mt-18 {\n  margin-top: 18px; }\n\n.margin-bottom-18 {\n  margin-top: 18px; }\n\n.padding-top-19 {\n  padding-top: 19px; }\n\n.pt-19 {\n  padding-top: 19px; }\n\n.margin-top-19 {\n  margin-top: 19px; }\n\n.ml-19 {\n  margin-left: 19px; }\n\n.mt-19 {\n  margin-top: 19px; }\n\n.margin-bottom-19 {\n  margin-top: 19px; }\n\n.padding-top-20 {\n  padding-top: 20px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.margin-bottom-20 {\n  margin-top: 20px; }\n\n.padding-top-21 {\n  padding-top: 21px; }\n\n.pt-21 {\n  padding-top: 21px; }\n\n.margin-top-21 {\n  margin-top: 21px; }\n\n.ml-21 {\n  margin-left: 21px; }\n\n.mt-21 {\n  margin-top: 21px; }\n\n.margin-bottom-21 {\n  margin-top: 21px; }\n\n.padding-top-22 {\n  padding-top: 22px; }\n\n.pt-22 {\n  padding-top: 22px; }\n\n.margin-top-22 {\n  margin-top: 22px; }\n\n.ml-22 {\n  margin-left: 22px; }\n\n.mt-22 {\n  margin-top: 22px; }\n\n.margin-bottom-22 {\n  margin-top: 22px; }\n\n.padding-top-23 {\n  padding-top: 23px; }\n\n.pt-23 {\n  padding-top: 23px; }\n\n.margin-top-23 {\n  margin-top: 23px; }\n\n.ml-23 {\n  margin-left: 23px; }\n\n.mt-23 {\n  margin-top: 23px; }\n\n.margin-bottom-23 {\n  margin-top: 23px; }\n\n.padding-top-24 {\n  padding-top: 24px; }\n\n.pt-24 {\n  padding-top: 24px; }\n\n.margin-top-24 {\n  margin-top: 24px; }\n\n.ml-24 {\n  margin-left: 24px; }\n\n.mt-24 {\n  margin-top: 24px; }\n\n.margin-bottom-24 {\n  margin-top: 24px; }\n\n.padding-top-25 {\n  padding-top: 25px; }\n\n.pt-25 {\n  padding-top: 25px; }\n\n.margin-top-25 {\n  margin-top: 25px; }\n\n.ml-25 {\n  margin-left: 25px; }\n\n.mt-25 {\n  margin-top: 25px; }\n\n.margin-bottom-25 {\n  margin-top: 25px; }\n\n.padding-top-26 {\n  padding-top: 26px; }\n\n.pt-26 {\n  padding-top: 26px; }\n\n.margin-top-26 {\n  margin-top: 26px; }\n\n.ml-26 {\n  margin-left: 26px; }\n\n.mt-26 {\n  margin-top: 26px; }\n\n.margin-bottom-26 {\n  margin-top: 26px; }\n\n.padding-top-27 {\n  padding-top: 27px; }\n\n.pt-27 {\n  padding-top: 27px; }\n\n.margin-top-27 {\n  margin-top: 27px; }\n\n.ml-27 {\n  margin-left: 27px; }\n\n.mt-27 {\n  margin-top: 27px; }\n\n.margin-bottom-27 {\n  margin-top: 27px; }\n\n.padding-top-28 {\n  padding-top: 28px; }\n\n.pt-28 {\n  padding-top: 28px; }\n\n.margin-top-28 {\n  margin-top: 28px; }\n\n.ml-28 {\n  margin-left: 28px; }\n\n.mt-28 {\n  margin-top: 28px; }\n\n.margin-bottom-28 {\n  margin-top: 28px; }\n\n.padding-top-29 {\n  padding-top: 29px; }\n\n.pt-29 {\n  padding-top: 29px; }\n\n.margin-top-29 {\n  margin-top: 29px; }\n\n.ml-29 {\n  margin-left: 29px; }\n\n.mt-29 {\n  margin-top: 29px; }\n\n.margin-bottom-29 {\n  margin-top: 29px; }\n\n.padding-top-30 {\n  padding-top: 30px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.margin-top-30 {\n  margin-top: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.margin-bottom-30 {\n  margin-top: 30px; }\n\n.padding-top-31 {\n  padding-top: 31px; }\n\n.pt-31 {\n  padding-top: 31px; }\n\n.margin-top-31 {\n  margin-top: 31px; }\n\n.ml-31 {\n  margin-left: 31px; }\n\n.mt-31 {\n  margin-top: 31px; }\n\n.margin-bottom-31 {\n  margin-top: 31px; }\n\n.padding-top-32 {\n  padding-top: 32px; }\n\n.pt-32 {\n  padding-top: 32px; }\n\n.margin-top-32 {\n  margin-top: 32px; }\n\n.ml-32 {\n  margin-left: 32px; }\n\n.mt-32 {\n  margin-top: 32px; }\n\n.margin-bottom-32 {\n  margin-top: 32px; }\n\n.padding-top-33 {\n  padding-top: 33px; }\n\n.pt-33 {\n  padding-top: 33px; }\n\n.margin-top-33 {\n  margin-top: 33px; }\n\n.ml-33 {\n  margin-left: 33px; }\n\n.mt-33 {\n  margin-top: 33px; }\n\n.margin-bottom-33 {\n  margin-top: 33px; }\n\n.padding-top-34 {\n  padding-top: 34px; }\n\n.pt-34 {\n  padding-top: 34px; }\n\n.margin-top-34 {\n  margin-top: 34px; }\n\n.ml-34 {\n  margin-left: 34px; }\n\n.mt-34 {\n  margin-top: 34px; }\n\n.margin-bottom-34 {\n  margin-top: 34px; }\n\n.padding-top-35 {\n  padding-top: 35px; }\n\n.pt-35 {\n  padding-top: 35px; }\n\n.margin-top-35 {\n  margin-top: 35px; }\n\n.ml-35 {\n  margin-left: 35px; }\n\n.mt-35 {\n  margin-top: 35px; }\n\n.margin-bottom-35 {\n  margin-top: 35px; }\n\n.padding-top-36 {\n  padding-top: 36px; }\n\n.pt-36 {\n  padding-top: 36px; }\n\n.margin-top-36 {\n  margin-top: 36px; }\n\n.ml-36 {\n  margin-left: 36px; }\n\n.mt-36 {\n  margin-top: 36px; }\n\n.margin-bottom-36 {\n  margin-top: 36px; }\n\n.padding-top-37 {\n  padding-top: 37px; }\n\n.pt-37 {\n  padding-top: 37px; }\n\n.margin-top-37 {\n  margin-top: 37px; }\n\n.ml-37 {\n  margin-left: 37px; }\n\n.mt-37 {\n  margin-top: 37px; }\n\n.margin-bottom-37 {\n  margin-top: 37px; }\n\n.padding-top-38 {\n  padding-top: 38px; }\n\n.pt-38 {\n  padding-top: 38px; }\n\n.margin-top-38 {\n  margin-top: 38px; }\n\n.ml-38 {\n  margin-left: 38px; }\n\n.mt-38 {\n  margin-top: 38px; }\n\n.margin-bottom-38 {\n  margin-top: 38px; }\n\n.padding-top-39 {\n  padding-top: 39px; }\n\n.pt-39 {\n  padding-top: 39px; }\n\n.margin-top-39 {\n  margin-top: 39px; }\n\n.ml-39 {\n  margin-left: 39px; }\n\n.mt-39 {\n  margin-top: 39px; }\n\n.margin-bottom-39 {\n  margin-top: 39px; }\n\n.padding-top-40 {\n  padding-top: 40px; }\n\n.pt-40 {\n  padding-top: 40px; }\n\n.margin-top-40 {\n  margin-top: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.margin-bottom-40 {\n  margin-top: 40px; }\n\n.padding-top-41 {\n  padding-top: 41px; }\n\n.pt-41 {\n  padding-top: 41px; }\n\n.margin-top-41 {\n  margin-top: 41px; }\n\n.ml-41 {\n  margin-left: 41px; }\n\n.mt-41 {\n  margin-top: 41px; }\n\n.margin-bottom-41 {\n  margin-top: 41px; }\n\n.padding-top-42 {\n  padding-top: 42px; }\n\n.pt-42 {\n  padding-top: 42px; }\n\n.margin-top-42 {\n  margin-top: 42px; }\n\n.ml-42 {\n  margin-left: 42px; }\n\n.mt-42 {\n  margin-top: 42px; }\n\n.margin-bottom-42 {\n  margin-top: 42px; }\n\n.padding-top-43 {\n  padding-top: 43px; }\n\n.pt-43 {\n  padding-top: 43px; }\n\n.margin-top-43 {\n  margin-top: 43px; }\n\n.ml-43 {\n  margin-left: 43px; }\n\n.mt-43 {\n  margin-top: 43px; }\n\n.margin-bottom-43 {\n  margin-top: 43px; }\n\n.padding-top-44 {\n  padding-top: 44px; }\n\n.pt-44 {\n  padding-top: 44px; }\n\n.margin-top-44 {\n  margin-top: 44px; }\n\n.ml-44 {\n  margin-left: 44px; }\n\n.mt-44 {\n  margin-top: 44px; }\n\n.margin-bottom-44 {\n  margin-top: 44px; }\n\n.padding-top-45 {\n  padding-top: 45px; }\n\n.pt-45 {\n  padding-top: 45px; }\n\n.margin-top-45 {\n  margin-top: 45px; }\n\n.ml-45 {\n  margin-left: 45px; }\n\n.mt-45 {\n  margin-top: 45px; }\n\n.margin-bottom-45 {\n  margin-top: 45px; }\n\n.padding-top-46 {\n  padding-top: 46px; }\n\n.pt-46 {\n  padding-top: 46px; }\n\n.margin-top-46 {\n  margin-top: 46px; }\n\n.ml-46 {\n  margin-left: 46px; }\n\n.mt-46 {\n  margin-top: 46px; }\n\n.margin-bottom-46 {\n  margin-top: 46px; }\n\n.padding-top-47 {\n  padding-top: 47px; }\n\n.pt-47 {\n  padding-top: 47px; }\n\n.margin-top-47 {\n  margin-top: 47px; }\n\n.ml-47 {\n  margin-left: 47px; }\n\n.mt-47 {\n  margin-top: 47px; }\n\n.margin-bottom-47 {\n  margin-top: 47px; }\n\n.padding-top-48 {\n  padding-top: 48px; }\n\n.pt-48 {\n  padding-top: 48px; }\n\n.margin-top-48 {\n  margin-top: 48px; }\n\n.ml-48 {\n  margin-left: 48px; }\n\n.mt-48 {\n  margin-top: 48px; }\n\n.margin-bottom-48 {\n  margin-top: 48px; }\n\n.padding-top-49 {\n  padding-top: 49px; }\n\n.pt-49 {\n  padding-top: 49px; }\n\n.margin-top-49 {\n  margin-top: 49px; }\n\n.ml-49 {\n  margin-left: 49px; }\n\n.mt-49 {\n  margin-top: 49px; }\n\n.margin-bottom-49 {\n  margin-top: 49px; }\n\n.padding-top-50 {\n  padding-top: 50px; }\n\n.pt-50 {\n  padding-top: 50px; }\n\n.margin-top-50 {\n  margin-top: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.margin-bottom-50 {\n  margin-top: 50px; }\n\n.padding-top-51 {\n  padding-top: 51px; }\n\n.pt-51 {\n  padding-top: 51px; }\n\n.margin-top-51 {\n  margin-top: 51px; }\n\n.ml-51 {\n  margin-left: 51px; }\n\n.mt-51 {\n  margin-top: 51px; }\n\n.margin-bottom-51 {\n  margin-top: 51px; }\n\n.padding-top-52 {\n  padding-top: 52px; }\n\n.pt-52 {\n  padding-top: 52px; }\n\n.margin-top-52 {\n  margin-top: 52px; }\n\n.ml-52 {\n  margin-left: 52px; }\n\n.mt-52 {\n  margin-top: 52px; }\n\n.margin-bottom-52 {\n  margin-top: 52px; }\n\n.padding-top-53 {\n  padding-top: 53px; }\n\n.pt-53 {\n  padding-top: 53px; }\n\n.margin-top-53 {\n  margin-top: 53px; }\n\n.ml-53 {\n  margin-left: 53px; }\n\n.mt-53 {\n  margin-top: 53px; }\n\n.margin-bottom-53 {\n  margin-top: 53px; }\n\n.padding-top-54 {\n  padding-top: 54px; }\n\n.pt-54 {\n  padding-top: 54px; }\n\n.margin-top-54 {\n  margin-top: 54px; }\n\n.ml-54 {\n  margin-left: 54px; }\n\n.mt-54 {\n  margin-top: 54px; }\n\n.margin-bottom-54 {\n  margin-top: 54px; }\n\n.padding-top-55 {\n  padding-top: 55px; }\n\n.pt-55 {\n  padding-top: 55px; }\n\n.margin-top-55 {\n  margin-top: 55px; }\n\n.ml-55 {\n  margin-left: 55px; }\n\n.mt-55 {\n  margin-top: 55px; }\n\n.margin-bottom-55 {\n  margin-top: 55px; }\n\n.padding-top-56 {\n  padding-top: 56px; }\n\n.pt-56 {\n  padding-top: 56px; }\n\n.margin-top-56 {\n  margin-top: 56px; }\n\n.ml-56 {\n  margin-left: 56px; }\n\n.mt-56 {\n  margin-top: 56px; }\n\n.margin-bottom-56 {\n  margin-top: 56px; }\n\n.padding-top-57 {\n  padding-top: 57px; }\n\n.pt-57 {\n  padding-top: 57px; }\n\n.margin-top-57 {\n  margin-top: 57px; }\n\n.ml-57 {\n  margin-left: 57px; }\n\n.mt-57 {\n  margin-top: 57px; }\n\n.margin-bottom-57 {\n  margin-top: 57px; }\n\n.padding-top-58 {\n  padding-top: 58px; }\n\n.pt-58 {\n  padding-top: 58px; }\n\n.margin-top-58 {\n  margin-top: 58px; }\n\n.ml-58 {\n  margin-left: 58px; }\n\n.mt-58 {\n  margin-top: 58px; }\n\n.margin-bottom-58 {\n  margin-top: 58px; }\n\n.padding-top-59 {\n  padding-top: 59px; }\n\n.pt-59 {\n  padding-top: 59px; }\n\n.margin-top-59 {\n  margin-top: 59px; }\n\n.ml-59 {\n  margin-left: 59px; }\n\n.mt-59 {\n  margin-top: 59px; }\n\n.margin-bottom-59 {\n  margin-top: 59px; }\n\n.padding-top-60 {\n  padding-top: 60px; }\n\n.pt-60 {\n  padding-top: 60px; }\n\n.margin-top-60 {\n  margin-top: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.margin-bottom-60 {\n  margin-top: 60px; }\n\n.padding-top-61 {\n  padding-top: 61px; }\n\n.pt-61 {\n  padding-top: 61px; }\n\n.margin-top-61 {\n  margin-top: 61px; }\n\n.ml-61 {\n  margin-left: 61px; }\n\n.mt-61 {\n  margin-top: 61px; }\n\n.margin-bottom-61 {\n  margin-top: 61px; }\n\n.padding-top-62 {\n  padding-top: 62px; }\n\n.pt-62 {\n  padding-top: 62px; }\n\n.margin-top-62 {\n  margin-top: 62px; }\n\n.ml-62 {\n  margin-left: 62px; }\n\n.mt-62 {\n  margin-top: 62px; }\n\n.margin-bottom-62 {\n  margin-top: 62px; }\n\n.padding-top-63 {\n  padding-top: 63px; }\n\n.pt-63 {\n  padding-top: 63px; }\n\n.margin-top-63 {\n  margin-top: 63px; }\n\n.ml-63 {\n  margin-left: 63px; }\n\n.mt-63 {\n  margin-top: 63px; }\n\n.margin-bottom-63 {\n  margin-top: 63px; }\n\n.padding-top-64 {\n  padding-top: 64px; }\n\n.pt-64 {\n  padding-top: 64px; }\n\n.margin-top-64 {\n  margin-top: 64px; }\n\n.ml-64 {\n  margin-left: 64px; }\n\n.mt-64 {\n  margin-top: 64px; }\n\n.margin-bottom-64 {\n  margin-top: 64px; }\n\n.padding-top-65 {\n  padding-top: 65px; }\n\n.pt-65 {\n  padding-top: 65px; }\n\n.margin-top-65 {\n  margin-top: 65px; }\n\n.ml-65 {\n  margin-left: 65px; }\n\n.mt-65 {\n  margin-top: 65px; }\n\n.margin-bottom-65 {\n  margin-top: 65px; }\n\n.padding-top-66 {\n  padding-top: 66px; }\n\n.pt-66 {\n  padding-top: 66px; }\n\n.margin-top-66 {\n  margin-top: 66px; }\n\n.ml-66 {\n  margin-left: 66px; }\n\n.mt-66 {\n  margin-top: 66px; }\n\n.margin-bottom-66 {\n  margin-top: 66px; }\n\n.padding-top-67 {\n  padding-top: 67px; }\n\n.pt-67 {\n  padding-top: 67px; }\n\n.margin-top-67 {\n  margin-top: 67px; }\n\n.ml-67 {\n  margin-left: 67px; }\n\n.mt-67 {\n  margin-top: 67px; }\n\n.margin-bottom-67 {\n  margin-top: 67px; }\n\n.padding-top-68 {\n  padding-top: 68px; }\n\n.pt-68 {\n  padding-top: 68px; }\n\n.margin-top-68 {\n  margin-top: 68px; }\n\n.ml-68 {\n  margin-left: 68px; }\n\n.mt-68 {\n  margin-top: 68px; }\n\n.margin-bottom-68 {\n  margin-top: 68px; }\n\n.padding-top-69 {\n  padding-top: 69px; }\n\n.pt-69 {\n  padding-top: 69px; }\n\n.margin-top-69 {\n  margin-top: 69px; }\n\n.ml-69 {\n  margin-left: 69px; }\n\n.mt-69 {\n  margin-top: 69px; }\n\n.margin-bottom-69 {\n  margin-top: 69px; }\n\n.padding-top-70 {\n  padding-top: 70px; }\n\n.pt-70 {\n  padding-top: 70px; }\n\n.margin-top-70 {\n  margin-top: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.margin-bottom-70 {\n  margin-top: 70px; }\n\n.padding-top-71 {\n  padding-top: 71px; }\n\n.pt-71 {\n  padding-top: 71px; }\n\n.margin-top-71 {\n  margin-top: 71px; }\n\n.ml-71 {\n  margin-left: 71px; }\n\n.mt-71 {\n  margin-top: 71px; }\n\n.margin-bottom-71 {\n  margin-top: 71px; }\n\n.padding-top-72 {\n  padding-top: 72px; }\n\n.pt-72 {\n  padding-top: 72px; }\n\n.margin-top-72 {\n  margin-top: 72px; }\n\n.ml-72 {\n  margin-left: 72px; }\n\n.mt-72 {\n  margin-top: 72px; }\n\n.margin-bottom-72 {\n  margin-top: 72px; }\n\n.padding-top-73 {\n  padding-top: 73px; }\n\n.pt-73 {\n  padding-top: 73px; }\n\n.margin-top-73 {\n  margin-top: 73px; }\n\n.ml-73 {\n  margin-left: 73px; }\n\n.mt-73 {\n  margin-top: 73px; }\n\n.margin-bottom-73 {\n  margin-top: 73px; }\n\n.padding-top-74 {\n  padding-top: 74px; }\n\n.pt-74 {\n  padding-top: 74px; }\n\n.margin-top-74 {\n  margin-top: 74px; }\n\n.ml-74 {\n  margin-left: 74px; }\n\n.mt-74 {\n  margin-top: 74px; }\n\n.margin-bottom-74 {\n  margin-top: 74px; }\n\n.padding-top-75 {\n  padding-top: 75px; }\n\n.pt-75 {\n  padding-top: 75px; }\n\n.margin-top-75 {\n  margin-top: 75px; }\n\n.ml-75 {\n  margin-left: 75px; }\n\n.mt-75 {\n  margin-top: 75px; }\n\n.margin-bottom-75 {\n  margin-top: 75px; }\n\n.padding-top-76 {\n  padding-top: 76px; }\n\n.pt-76 {\n  padding-top: 76px; }\n\n.margin-top-76 {\n  margin-top: 76px; }\n\n.ml-76 {\n  margin-left: 76px; }\n\n.mt-76 {\n  margin-top: 76px; }\n\n.margin-bottom-76 {\n  margin-top: 76px; }\n\n.padding-top-77 {\n  padding-top: 77px; }\n\n.pt-77 {\n  padding-top: 77px; }\n\n.margin-top-77 {\n  margin-top: 77px; }\n\n.ml-77 {\n  margin-left: 77px; }\n\n.mt-77 {\n  margin-top: 77px; }\n\n.margin-bottom-77 {\n  margin-top: 77px; }\n\n.padding-top-78 {\n  padding-top: 78px; }\n\n.pt-78 {\n  padding-top: 78px; }\n\n.margin-top-78 {\n  margin-top: 78px; }\n\n.ml-78 {\n  margin-left: 78px; }\n\n.mt-78 {\n  margin-top: 78px; }\n\n.margin-bottom-78 {\n  margin-top: 78px; }\n\n.padding-top-79 {\n  padding-top: 79px; }\n\n.pt-79 {\n  padding-top: 79px; }\n\n.margin-top-79 {\n  margin-top: 79px; }\n\n.ml-79 {\n  margin-left: 79px; }\n\n.mt-79 {\n  margin-top: 79px; }\n\n.margin-bottom-79 {\n  margin-top: 79px; }\n\n.padding-top-80 {\n  padding-top: 80px; }\n\n.pt-80 {\n  padding-top: 80px; }\n\n.margin-top-80 {\n  margin-top: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.margin-bottom-80 {\n  margin-top: 80px; }\n\n.padding-top-81 {\n  padding-top: 81px; }\n\n.pt-81 {\n  padding-top: 81px; }\n\n.margin-top-81 {\n  margin-top: 81px; }\n\n.ml-81 {\n  margin-left: 81px; }\n\n.mt-81 {\n  margin-top: 81px; }\n\n.margin-bottom-81 {\n  margin-top: 81px; }\n\n.padding-top-82 {\n  padding-top: 82px; }\n\n.pt-82 {\n  padding-top: 82px; }\n\n.margin-top-82 {\n  margin-top: 82px; }\n\n.ml-82 {\n  margin-left: 82px; }\n\n.mt-82 {\n  margin-top: 82px; }\n\n.margin-bottom-82 {\n  margin-top: 82px; }\n\n.padding-top-83 {\n  padding-top: 83px; }\n\n.pt-83 {\n  padding-top: 83px; }\n\n.margin-top-83 {\n  margin-top: 83px; }\n\n.ml-83 {\n  margin-left: 83px; }\n\n.mt-83 {\n  margin-top: 83px; }\n\n.margin-bottom-83 {\n  margin-top: 83px; }\n\n.padding-top-84 {\n  padding-top: 84px; }\n\n.pt-84 {\n  padding-top: 84px; }\n\n.margin-top-84 {\n  margin-top: 84px; }\n\n.ml-84 {\n  margin-left: 84px; }\n\n.mt-84 {\n  margin-top: 84px; }\n\n.margin-bottom-84 {\n  margin-top: 84px; }\n\n.padding-top-85 {\n  padding-top: 85px; }\n\n.pt-85 {\n  padding-top: 85px; }\n\n.margin-top-85 {\n  margin-top: 85px; }\n\n.ml-85 {\n  margin-left: 85px; }\n\n.mt-85 {\n  margin-top: 85px; }\n\n.margin-bottom-85 {\n  margin-top: 85px; }\n\n.padding-top-86 {\n  padding-top: 86px; }\n\n.pt-86 {\n  padding-top: 86px; }\n\n.margin-top-86 {\n  margin-top: 86px; }\n\n.ml-86 {\n  margin-left: 86px; }\n\n.mt-86 {\n  margin-top: 86px; }\n\n.margin-bottom-86 {\n  margin-top: 86px; }\n\n.padding-top-87 {\n  padding-top: 87px; }\n\n.pt-87 {\n  padding-top: 87px; }\n\n.margin-top-87 {\n  margin-top: 87px; }\n\n.ml-87 {\n  margin-left: 87px; }\n\n.mt-87 {\n  margin-top: 87px; }\n\n.margin-bottom-87 {\n  margin-top: 87px; }\n\n.padding-top-88 {\n  padding-top: 88px; }\n\n.pt-88 {\n  padding-top: 88px; }\n\n.margin-top-88 {\n  margin-top: 88px; }\n\n.ml-88 {\n  margin-left: 88px; }\n\n.mt-88 {\n  margin-top: 88px; }\n\n.margin-bottom-88 {\n  margin-top: 88px; }\n\n.padding-top-89 {\n  padding-top: 89px; }\n\n.pt-89 {\n  padding-top: 89px; }\n\n.margin-top-89 {\n  margin-top: 89px; }\n\n.ml-89 {\n  margin-left: 89px; }\n\n.mt-89 {\n  margin-top: 89px; }\n\n.margin-bottom-89 {\n  margin-top: 89px; }\n\n.padding-top-90 {\n  padding-top: 90px; }\n\n.pt-90 {\n  padding-top: 90px; }\n\n.margin-top-90 {\n  margin-top: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.margin-bottom-90 {\n  margin-top: 90px; }\n\n.padding-top-91 {\n  padding-top: 91px; }\n\n.pt-91 {\n  padding-top: 91px; }\n\n.margin-top-91 {\n  margin-top: 91px; }\n\n.ml-91 {\n  margin-left: 91px; }\n\n.mt-91 {\n  margin-top: 91px; }\n\n.margin-bottom-91 {\n  margin-top: 91px; }\n\n.padding-top-92 {\n  padding-top: 92px; }\n\n.pt-92 {\n  padding-top: 92px; }\n\n.margin-top-92 {\n  margin-top: 92px; }\n\n.ml-92 {\n  margin-left: 92px; }\n\n.mt-92 {\n  margin-top: 92px; }\n\n.margin-bottom-92 {\n  margin-top: 92px; }\n\n.padding-top-93 {\n  padding-top: 93px; }\n\n.pt-93 {\n  padding-top: 93px; }\n\n.margin-top-93 {\n  margin-top: 93px; }\n\n.ml-93 {\n  margin-left: 93px; }\n\n.mt-93 {\n  margin-top: 93px; }\n\n.margin-bottom-93 {\n  margin-top: 93px; }\n\n.padding-top-94 {\n  padding-top: 94px; }\n\n.pt-94 {\n  padding-top: 94px; }\n\n.margin-top-94 {\n  margin-top: 94px; }\n\n.ml-94 {\n  margin-left: 94px; }\n\n.mt-94 {\n  margin-top: 94px; }\n\n.margin-bottom-94 {\n  margin-top: 94px; }\n\n.padding-top-95 {\n  padding-top: 95px; }\n\n.pt-95 {\n  padding-top: 95px; }\n\n.margin-top-95 {\n  margin-top: 95px; }\n\n.ml-95 {\n  margin-left: 95px; }\n\n.mt-95 {\n  margin-top: 95px; }\n\n.margin-bottom-95 {\n  margin-top: 95px; }\n\n.padding-top-96 {\n  padding-top: 96px; }\n\n.pt-96 {\n  padding-top: 96px; }\n\n.margin-top-96 {\n  margin-top: 96px; }\n\n.ml-96 {\n  margin-left: 96px; }\n\n.mt-96 {\n  margin-top: 96px; }\n\n.margin-bottom-96 {\n  margin-top: 96px; }\n\n.padding-top-97 {\n  padding-top: 97px; }\n\n.pt-97 {\n  padding-top: 97px; }\n\n.margin-top-97 {\n  margin-top: 97px; }\n\n.ml-97 {\n  margin-left: 97px; }\n\n.mt-97 {\n  margin-top: 97px; }\n\n.margin-bottom-97 {\n  margin-top: 97px; }\n\n.padding-top-98 {\n  padding-top: 98px; }\n\n.pt-98 {\n  padding-top: 98px; }\n\n.margin-top-98 {\n  margin-top: 98px; }\n\n.ml-98 {\n  margin-left: 98px; }\n\n.mt-98 {\n  margin-top: 98px; }\n\n.margin-bottom-98 {\n  margin-top: 98px; }\n\n.padding-top-99 {\n  padding-top: 99px; }\n\n.pt-99 {\n  padding-top: 99px; }\n\n.margin-top-99 {\n  margin-top: 99px; }\n\n.ml-99 {\n  margin-left: 99px; }\n\n.mt-99 {\n  margin-top: 99px; }\n\n.margin-bottom-99 {\n  margin-top: 99px; }\n\n.padding-top-100 {\n  padding-top: 100px; }\n\n.pt-100 {\n  padding-top: 100px; }\n\n.margin-top-100 {\n  margin-top: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.margin-bottom-100 {\n  margin-top: 100px; }\n\n/*for targetting small screens */\n\n.contact_enquiry_form {\n  width: 934px;\n  padding: 10px 20px;\n  margin: 0px 0 15px 0px;\n  border: 1px solid #d7d7d7; }\n\n@media screen and (max-width: 768px) {\n    .contact_enquiry_form {\n      border: none; } }\n\n.contact_enquiry_form .required_text {\n    font-size: 12px; }\n\n.contact_enquiry_form h2 {\n    font-weight: bold;\n    font-size: 14px;\n    padding-top: 15px; }\n\n.contact_enquiry_form .col-xs-12 {\n    width: 100%;\n    margin-bottom: 5px;\n    padding: 10px 0 0 0; }\n\n.redcolor {\n  color: #ae140d; }\n\n.enquiry_label {\n  float: right;\n  padding-top: 5px;\n  color: #535353;\n  font-weight: normal;\n  font-size: 12px; }\n\n@media screen and (max-width: 767px) {\n    .enquiry_label {\n      float: left; } }\n\n.no-padding {\n  padding: 0; }\n\n.guest-list {\n  font-size: 12px; }\n\n.checkboxAlignBox {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n@media screen and (max-width: 768px) {\n    .checkboxAlignBox {\n      width: 15%;\n      float: left; } }\n\n.checkboxAlign {\n  line-height: 12px;\n  padding-left: 0px; }\n\n@media screen and (max-width: 768px) {\n    .checkboxAlign {\n      width: 80%; } }\n\n.gender {\n  line-height: 13px;\n  margin-left: 5px;\n  margin-right: 15px; }\n\n.genderAlign {\n  margin-top: 8px; }\n\n.login_fields {\n  width: 250px;\n  position: relative;\n  padding: 0 !important;\n  display: inline-block; }\n\n.login_fields input, .login_fields select {\n    height: 25px !important; }\n\n.login_fields input.not-valid, .login_fields select.not-valid {\n      background-position: 95% 4px;\n      border: 1px solid #b63432;\n      background-position: 88% 11px;\n      border: 1px solid #b63432;\n      background-size: 6px; }\n\n@media screen and (max-width: 768px) {\n        .login_fields input.not-valid, .login_fields select.not-valid {\n          background-position: 95% 4px; } }\n\n.register-in {\n  padding: 3% 0 0 0;\n  margin: 10px 0px;\n  font-size: 28px; }\n\n@media screen and (max-width: 768px) {\n    .register-in {\n      display: block;\n      overflow: hidden;\n      padding: 15px;\n      margin: 0;\n      font-size: 15px;\n      font-weight: bold;\n      color: #ffffff;\n      background: #90d2c5; } }\n\n.overlay-bg-show {\n  display: block; }\n\n.overlay-bg-hide {\n  display: none; }\n\n.err-text {\n  font-size: 10px;\n  color: #ae140d; }\n\n.password {\n  font-size: 10px; }\n\ninput[type=\"text\"].form-control.not-valid,\ninput[type=\"tel\"].form-control.not-valid {\n  background-position: 95% 2px !important;\n  background-size: 4px !important; }\n\n.password_field .contextual-help {\n  width: 30px;\n  height: 30px;\n  right: -10px; }\n\n.login_fields .contextual-help {\n  width: 30px;\n  height: 30px;\n  right: -10px; }\n\n.reg_form .password_field .contextual-help {\n  top: 0px; }\n\n.has-match-error + .not-valid-error-msg {\n  display: block; }\n\n.login_fields input[type=\"text\"].form-control,\n.login_fields input[type=\"email\"], .login_fields input[type=\"password\"],\n.login_fields input[type=\"email\"].form-control,\n.login_fields input[type=\"password\"].form-control,\n.login_fields input[type=\"tel\"].form-control {\n  width: 65%;\n  display: block;\n  height: 48px;\n  border: 1px solid #c2c2c2;\n  border-radius: 0; }\n\n.login_fields input[type=\"text\"].form-control ~ .not-valid-error-msg,\n  .login_fields input[type=\"email\"] ~ .not-valid-error-msg, .login_fields input[type=\"password\"] ~ .not-valid-error-msg,\n  .login_fields input[type=\"email\"].form-control ~ .not-valid-error-msg,\n  .login_fields input[type=\"password\"].form-control ~ .not-valid-error-msg,\n  .login_fields input[type=\"tel\"].form-control ~ .not-valid-error-msg {\n    display: none; }\n\n.login_fields input[type=\"text\"].form-control.not-valid:focus,\n  .login_fields input[type=\"email\"].not-valid:focus, .login_fields input[type=\"password\"].not-valid:focus,\n  .login_fields input[type=\"email\"].form-control.not-valid:focus,\n  .login_fields input[type=\"password\"].form-control.not-valid:focus,\n  .login_fields input[type=\"tel\"].form-control.not-valid:focus {\n    box-shadow: none; }\n\n.login_fields input[type=\"text\"].form-control.not-valid:focus ~ .not-valid-error-msg,\n    .login_fields input[type=\"email\"].not-valid:focus ~ .not-valid-error-msg, .login_fields input[type=\"password\"].not-valid:focus ~ .not-valid-error-msg,\n    .login_fields input[type=\"email\"].form-control.not-valid:focus ~ .not-valid-error-msg,\n    .login_fields input[type=\"password\"].form-control.not-valid:focus ~ .not-valid-error-msg,\n    .login_fields input[type=\"tel\"].form-control.not-valid:focus ~ .not-valid-error-msg {\n      display: block; }\n\n.login_fields input[type=\"text\"].form-control.not-valid,\n  .login_fields input[type=\"email\"].not-valid, .login_fields input[type=\"password\"].not-valid,\n  .login_fields input[type=\"email\"].form-control.not-valid,\n  .login_fields input[type=\"password\"].form-control.not-valid,\n  .login_fields input[type=\"tel\"].form-control.not-valid {\n    background-image: url(\"https://www.moltonbrown.co.uk/images/exclamation-symbol.png\");\n    background-position: 95% 4px;\n    border: 1px solid #b63432 !important;\n    background-repeat: no-repeat;\n    background-size: 4px; }\n\n.login_fields input[type=\"text\"].form-control.valid,\n  .login_fields input[type=\"email\"].valid, .login_fields input[type=\"password\"].valid,\n  .login_fields input[type=\"email\"].form-control.valid,\n  .login_fields input[type=\"password\"].form-control.valid,\n  .login_fields input[type=\"tel\"].form-control.valid {\n    background-image: url(\"https://www.moltonbrown.co.uk/images/tick-symbol.png\") !important;\n    background-position: 95% 13px;\n    background-repeat: no-repeat; }\n\nselect.form-control {\n  height: 48px;\n  margin: 5px 0; }\n\n.error-block {\n  display: block !important; }\n\n.terms-error-msg-bottom {\n  color: #ae140d;\n  /* margin: 5px 0; */\n  overflow: hidden;\n  display: none;\n  margin-left: 154px;\n  font-size: 12px;\n  display: none; }\n\n@media screen and (max-width: 480px) {\n    .terms-error-msg-bottom {\n      margin-left: 0px; } }\n\n.login_fields .contextual-help ~ .not-valid, .login_fields .contextual-help ~ .valid {\n  background-position: 91% 4px !important; }\n\n.display-overlay {\n  display: block;\n  top: 0;\n  background-color: transparent; }\n\n.offset-2 p {\n  color: #000000;\n  font-size: 12px; }\n\np.offset-2 {\n  color: #000000;\n  font-size: 12px; }\n\np.checkboxAlign {\n  color: #000000;\n  font-size: 12px; }\n\np.checkboxAlign a {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/browse/feedback/feedback.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/browse/feedback/feedback.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/singleton.service */ "./src/app/services/singleton.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_contact_feedback_enquiry_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../forms/contact-feedback-enquiry.form */ "./src/app/forms/contact-feedback-enquiry.form.ts");
/* harmony import */ var _forms_pattern_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../forms/pattern-validator */ "./src/app/forms/pattern-validator.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(fb, titleService, router, route, singletonServ, deviceService, customerForm) {
        this.fb = fb;
        this.titleService = titleService;
        this.router = router;
        this.route = route;
        this.singletonServ = singletonServ;
        this.deviceService = deviceService;
        this.customerForm = customerForm;
        this.stateList = [];
        this.contactEnquiryForm = this.fb.group(customerForm.enquiryForm());
    }
    FeedbackComponent.prototype.setCountry = function () {
        var baseSite = this.singletonServ.catalogVersion;
        if (baseSite.isoCode === "GB") {
            this.ukSpecificForm = true;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_1__["countries"]);
            var _isoCode_1 = baseSite.isoCode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_1;
            });
            if (_index != -1) {
                this.contactEnquiryForm.controls["country"].patchValue(this.countries[_index]);
            }
        }
        else if (baseSite.isoCode === "EU") {
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_1__["EUROPEAN_COUNTRIES"]);
        }
        else if (baseSite.isoCode === "DE") {
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_1__["DE_COUNTRIES"]);
            this.contactEnquiryForm.controls["country"].patchValue(this.countries[0]);
        }
        else if (baseSite.isoCode === "US") {
            this.ukSpecificForm = false;
            this.usSpecificForm = true;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_1__["US_COUNTRIES"]);
            var _isoCode_2 = baseSite.isoCode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_2;
            });
            if (_index != -1) {
                this.contactEnquiryForm.controls["country"].patchValue(this.countries[_index]);
            }
            this.contactEnquiryForm.controls["district"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.contactEnquiryForm.controls['district'].updateValueAndValidity();
        }
    };
    FeedbackComponent.prototype.ngOnChanges = function (changes) {
        this.setCountry();
        if (changes["contactEnquiryForm"]) {
            if (changes["contactEnquiryForm"]["currentValue"] != undefined) {
                var _data = changes["contactEnquiryForm"]["currentValue"];
                this.contactEnquiryForm.patchValue(_data);
                var _isoCode_3 = changes["contactEnquiryForm"]["currentValue"]["country"]["isocode"];
                var _index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.countries, function (o) {
                    return o.isocode == _isoCode_3;
                });
                if (_index != -1) {
                    this.contactEnquiryForm.controls["country"].patchValue(this.countries[_index]);
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
    FeedbackComponent.prototype.patchCountry = function (userData) {
        if (userData) {
            var _isoCode_4 = userData.country.isocode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_4;
            });
            if (_index != -1) {
                this.contactEnquiryForm.controls["country"].patchValue(this.countries[_index]);
            }
            if (userData.country.isocode == "US") {
                this.contactEnquiryForm.controls["postalCode"].setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_8__["patternValidator"])(/^[0-9 ]{5,6}$/)
                ]);
                this.contactEnquiryForm.controls["postalCode"].updateValueAndValidity();
            }
            else {
                this.contactEnquiryForm.controls["postalCode"].setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_8__["patternValidator"])(/^[a-zA-Z0-9 ]*$/)
                ]);
                this.contactEnquiryForm.controls["postalCode"].updateValueAndValidity();
            }
        }
    };
    FeedbackComponent.prototype.onChangeCountry = function (event) {
        var baseSite = this.singletonServ.catalogVersion;
        var _index = event.target.selectedIndex - 1;
        var country = this.countries[_index];
        if (this.usSpecificForm) {
            this.ukLoopBtnStatus = false;
            this.ukSpecificForm = false;
            if (country.states) {
                this.stateList = country.states;
            }
            else {
                this.stateList = undefined;
                this.contactEnquiryForm.controls["district"].setValue("");
            }
            if (this.countries[_index].isocode === "US") {
                this.contactEnquiryForm.controls["postalCode"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_8__["patternValidator"])(/^[0-9]{5,10}$/)]);
                this.contactEnquiryForm.controls['postalCode'].updateValueAndValidity();
            }
            else {
                this.contactEnquiryForm.controls["postalCode"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_8__["patternValidator"])(/^[a-zA-Z0-9 ]*$/)]);
                this.contactEnquiryForm.controls['postalCode'].updateValueAndValidity();
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
            this.contactEnquiryForm.controls["district"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.contactEnquiryForm.controls['district'].updateValueAndValidity();
        }
        else {
            this.contactEnquiryForm.controls["district"].setValidators(null);
            this.contactEnquiryForm.controls['district'].updateValueAndValidity();
        }
    };
    FeedbackComponent.prototype.nestedCopy = function (array) {
        return JSON.parse(JSON.stringify(array));
    };
    FeedbackComponent.prototype.ngOnInit = function () {
        var baseSite = this.singletonServ.catalogVersion;
        if (baseSite.isoCode === "GB") {
            this.ukLoopBtnStatus = true;
            this.ukSpecificForm = true;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_1__["countries"]);
            var _isoCode_5 = baseSite.isoCode;
            if (_isoCode_5 != -1) {
                var _index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.countries, function (o) {
                    return o.isocode == _isoCode_5;
                });
                this.contactEnquiryForm.controls["country"].patchValue(this.countries[_index]);
            }
        }
        else if (baseSite.isoCode === "EU") {
            this.ukLoopBtnStatus = false;
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_1__["EUROPEAN_COUNTRIES"]);
        }
        else if (baseSite.isoCode === "DE") {
            this.ukLoopBtnStatus = false;
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_1__["DE_COUNTRIES"]);
            this.contactEnquiryForm.controls["country"].patchValue(this.countries[0]);
        }
        else if (baseSite.isoCode === "US") {
            this.ukLoopBtnStatus = false;
            this.ukSpecificForm = false;
            this.usSpecificForm = true;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_1__["US_COUNTRIES"]);
            var _isoCode_6 = baseSite.isoCode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_6;
            });
            this.contactEnquiryForm.controls["country"].patchValue(this.countries[_index]);
            var _states = lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.countries, function (o) {
                return o.isocode == _isoCode_6;
            });
            this.stateList = _states.states;
        }
        this.getDeviceInfo();
        if (baseSite.isoCode === "US") {
            var _index = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.countries, function (o) {
                return o.isocode == baseSite.isoCode;
            });
            if (this.countries[_index].isocode === "US") {
                this.contactEnquiryForm.controls["postalCode"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_8__["patternValidator"])(/^[0-9]{5,6}$/)]);
                this.contactEnquiryForm.controls['postalCode'].updateValueAndValidity();
            }
            else {
                this.contactEnquiryForm.controls["postalCode"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_forms_pattern_validator__WEBPACK_IMPORTED_MODULE_8__["patternValidator"])(/^[a-zA-Z0-9 ]{6,8}$$/)]);
                this.contactEnquiryForm.controls['postalCode'].updateValueAndValidity();
            }
            this.contactEnquiryForm.controls["district"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.contactEnquiryForm.controls['district'].updateValueAndValidity();
        }
    };
    FeedbackComponent.prototype.getDeviceInfo = function () {
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
    FeedbackComponent.prototype.onLookupAddress = function (event) {
        event.preventDefault();
        var that = this;
        var val = this.contactEnquiryForm.value;
        this.myInput.nativeElement.focus();
        if (this.contactEnquiryForm.controls['postalCode'].valid) {
            var postcode = val["postalCode"];
            this.postCodeError = false;
        }
        else {
            this.postCodeError = true;
            this.myInput.nativeElement.focus();
        }
    };
    FeedbackComponent.prototype.onSubmit = function (event, bol) {
        event.stopPropagation();
        if (this.contactEnquiryForm.valid) {
            this.submitted = true;
        }
        else {
            this.validateAllFormFields(this.contactEnquiryForm);
        }
    };
    FeedbackComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedbackComponent.prototype, "myInput", void 0);
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/browse/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/browse/feedback/feedback.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_singleton_service__WEBPACK_IMPORTED_MODULE_5__["SingletonService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__["DeviceDetectorService"],
            _forms_contact_feedback_enquiry_form__WEBPACK_IMPORTED_MODULE_7__["ContactFeedbackEnquiry"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/forms/contact-feedback-enquiry.form.ts":
/*!********************************************************!*\
  !*** ./src/app/forms/contact-feedback-enquiry.form.ts ***!
  \********************************************************/
/*! exports provided: ContactFeedbackEnquiry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFeedbackEnquiry", function() { return ContactFeedbackEnquiry; });
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




var ContactFeedbackEnquiry = /** @class */ (function () {
    function ContactFeedbackEnquiry() {
    }
    ContactFeedbackEnquiry.prototype.enquiryForm = function () {
        return {
            jobTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            businessType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            uid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
                updateOn: 'blur'
            }),
            confirmemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_custom_validator_directive__WEBPACK_IMPORTED_MODULE_3__["compareValidator"])('uid')], updateOn: 'blur'
            }),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            titleCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,/?:;' ]+$/)
                ], updateOn: 'blur'
            }),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z0-9 ]*$/)] }),
            address: [''],
            line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            line2: [''],
            webSite: [''],
            faxNumber: [''],
            district: [''],
            town: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/)], updateOn: 'blur' }),
        };
    };
    ContactFeedbackEnquiry = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ContactFeedbackEnquiry);
    return ContactFeedbackEnquiry;
}());



/***/ })

}]);
//# sourceMappingURL=browse-browse-module.js.map
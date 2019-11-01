(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~checkout-cart-checkout-cart-module~gift-cards-gift-cards-module~myaccount-myaccount-module"],{

/***/ "./src/app/forms/paymentCard.form.ts":
/*!*******************************************!*\
  !*** ./src/app/forms/paymentCard.form.ts ***!
  \*******************************************/
/*! exports provided: PaymentGateWayForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGateWayForm", function() { return PaymentGateWayForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pattern_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pattern-validator */ "./src/app/forms/pattern-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentGateWayForm = /** @class */ (function () {
    function PaymentGateWayForm() {
    }
    PaymentGateWayForm.prototype.getCardForm = function () {
        return {
            cardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[0-9\+\-\ ]/)]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[0-9]{3,4}$/)], updateOn: 'blur' })
        };
    };
    PaymentGateWayForm.prototype.getGiftForm = function () {
        return {
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            GivexCardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^([0-9\+\-\ ]){19,21}$/)],
                updateOn: 'blur' }),
            GivexPinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^([0-9\+\-\ ]){4,6}$/)],
                updateOn: 'blur' }),
            Amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[0-9.]+$/)],
                updateOn: 'blur' })
        };
    };
    PaymentGateWayForm.prototype.getSpliForm = function () {
        return {
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            GivexCardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^([0-9\+\-\ ]){19,21}$/)],
                updateOn: 'blur' }),
            GivexPinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^([0-9\+\-\ ]){4,6}$/)],
                updateOn: 'blur' }),
            Amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[0-9]/)],
                updateOn: 'blur' }),
            cardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^([0-9\+\-\ ]){16,16}$/)],
                updateOn: 'blur' }),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[0-9]{3,4}$/)], updateOn: 'blur' }),
            communication: [''],
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' })
        };
    };
    PaymentGateWayForm.prototype.giftBalance = function () {
        return {
            GivexCardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            GivexPinNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            captcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' })
        };
    };
    PaymentGateWayForm.prototype.transferBalance = function () {
        return {
            depositor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[0-9\+\-\ ]/)]),
            creditor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[0-9\+\-\ ]/)])
        };
    };
    PaymentGateWayForm.prototype.getPaymentDetails = function () {
        return {};
    };
    PaymentGateWayForm.prototype.getPaymentSavedCard = function () {
        return {
            cardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[0-9\+\-\ ]/)]),
            cardHolderFirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            cardHolderLastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            startDateMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            startDateYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            issueNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            postCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z0-9 ]*$/)] }),
            line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            town: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/)
                ], updateOn: 'blur'
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        };
    };
    PaymentGateWayForm.prototype.getSavedCard = function () {
        return {
            cardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            startDateMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            startDateYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[0-9]{3,4}$/)], updateOn: 'blur' }),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            postCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            line2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            town: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phonenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[\+\d]?(?:[\d-.\s()]*){10,14}$/)
                ],
                updateOn: 'blur'
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        };
    };
    PaymentGateWayForm.prototype.getCCForm = function () {
        return {
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/)
                ],
                updateOn: 'blur'
            }),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            line2: [''],
            town: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            address: [''],
            district: [''],
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z0-9 ]*$/)] })
        };
    };
    PaymentGateWayForm.prototype.getSepaForm = function () {
        return {
            iban: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            bic: [''],
            bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                ],
                updateOn: 'blur'
            })
        };
    };
    PaymentGateWayForm.prototype.getExpressCheckoutForm = function () {
        return {
            cardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            secureCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_pattern_validator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^((\\+91-?)|0)?[0-9]{3,4}$/)], updateOn: 'blur' })
        };
    };
    PaymentGateWayForm.prototype.getpaypal = function () {
        return {
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, updateOn: 'blur' }),
            policy: ['']
        };
    };
    PaymentGateWayForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], PaymentGateWayForm);
    return PaymentGateWayForm;
}());



/***/ })

}]);
//# sourceMappingURL=default~checkout-cart-checkout-cart-module~gift-cards-gift-cards-module~myaccount-myaccount-module.js.map
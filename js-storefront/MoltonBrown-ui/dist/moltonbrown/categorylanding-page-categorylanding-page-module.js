(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorylanding-page-categorylanding-page-module"],{

/***/ "./src/app/categorylanding-page/categorybanner/categorybanner.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/categorylanding-page/categorybanner/categorybanner.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!catBanner;else categoryBanner\">\r\n    <div class=\"category_banner-block\" *ngIf=\"categorybanner\">\r\n        <div class=\"catbanner\">\r\n            <div class=\"banner-container\">\r\n                <h1>{{categorybanner.categoryDisplayName}}</h1>\r\n                <div class=\"banner_description\">\r\n                    <p class=\"bannerDescription\" [innerHtml]=\"categorybanner.description\"></p>\r\n                </div>\r\n                <div class=\"banner_childcategories\" *ngIf=\"childRoot\">\r\n                    <div class=\"categorybanner_row\">\r\n                        <div *ngFor=\"let subproduct of categoryBannerList;\" class=\"categorybanner_products\">\r\n                            <a  routerLink=\"{{getRouterPath(subproduct)}}\" routerLinkActive=\"active\" (click)=\"onSubPrductClick($event,subproduct)\">{{subproduct.categoryDisplayName}}</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #categoryBanner>\r\n    <div #categoryBannerEl>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/categorylanding-page/categorybanner/categorybanner.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/categorylanding-page/categorybanner/categorybanner.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Century Gothic';\n  src: url(\"/assets/fonts/Century/fonts/CENTURY.ttf\") format(\"ttf\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff2\") format(\"woff2\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff\") format(\"woff\"), url(\"/assets/fonts/Century/fonts/CENTURY.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Regular';\n  src: url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Bold';\n  src: url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Italic';\n  src: url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.svg\") format(\"svg\"); }\n\n.padding-top-1 {\n  padding-top: 1px; }\n\n.pt-1 {\n  padding-top: 1px; }\n\n.margin-top-1 {\n  margin-top: 1px; }\n\n.ml-1 {\n  margin-left: 1px; }\n\n.mt-1 {\n  margin-top: 1px; }\n\n.margin-bottom-1 {\n  margin-top: 1px; }\n\n.padding-top-2 {\n  padding-top: 2px; }\n\n.pt-2 {\n  padding-top: 2px; }\n\n.margin-top-2 {\n  margin-top: 2px; }\n\n.ml-2 {\n  margin-left: 2px; }\n\n.mt-2 {\n  margin-top: 2px; }\n\n.margin-bottom-2 {\n  margin-top: 2px; }\n\n.padding-top-3 {\n  padding-top: 3px; }\n\n.pt-3 {\n  padding-top: 3px; }\n\n.margin-top-3 {\n  margin-top: 3px; }\n\n.ml-3 {\n  margin-left: 3px; }\n\n.mt-3 {\n  margin-top: 3px; }\n\n.margin-bottom-3 {\n  margin-top: 3px; }\n\n.padding-top-4 {\n  padding-top: 4px; }\n\n.pt-4 {\n  padding-top: 4px; }\n\n.margin-top-4 {\n  margin-top: 4px; }\n\n.ml-4 {\n  margin-left: 4px; }\n\n.mt-4 {\n  margin-top: 4px; }\n\n.margin-bottom-4 {\n  margin-top: 4px; }\n\n.padding-top-5 {\n  padding-top: 5px; }\n\n.pt-5 {\n  padding-top: 5px; }\n\n.margin-top-5 {\n  margin-top: 5px; }\n\n.ml-5 {\n  margin-left: 5px; }\n\n.mt-5 {\n  margin-top: 5px; }\n\n.margin-bottom-5 {\n  margin-top: 5px; }\n\n.padding-top-6 {\n  padding-top: 6px; }\n\n.pt-6 {\n  padding-top: 6px; }\n\n.margin-top-6 {\n  margin-top: 6px; }\n\n.ml-6 {\n  margin-left: 6px; }\n\n.mt-6 {\n  margin-top: 6px; }\n\n.margin-bottom-6 {\n  margin-top: 6px; }\n\n.padding-top-7 {\n  padding-top: 7px; }\n\n.pt-7 {\n  padding-top: 7px; }\n\n.margin-top-7 {\n  margin-top: 7px; }\n\n.ml-7 {\n  margin-left: 7px; }\n\n.mt-7 {\n  margin-top: 7px; }\n\n.margin-bottom-7 {\n  margin-top: 7px; }\n\n.padding-top-8 {\n  padding-top: 8px; }\n\n.pt-8 {\n  padding-top: 8px; }\n\n.margin-top-8 {\n  margin-top: 8px; }\n\n.ml-8 {\n  margin-left: 8px; }\n\n.mt-8 {\n  margin-top: 8px; }\n\n.margin-bottom-8 {\n  margin-top: 8px; }\n\n.padding-top-9 {\n  padding-top: 9px; }\n\n.pt-9 {\n  padding-top: 9px; }\n\n.margin-top-9 {\n  margin-top: 9px; }\n\n.ml-9 {\n  margin-left: 9px; }\n\n.mt-9 {\n  margin-top: 9px; }\n\n.margin-bottom-9 {\n  margin-top: 9px; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n\n.pt-10 {\n  padding-top: 10px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.margin-bottom-10 {\n  margin-top: 10px; }\n\n.padding-top-11 {\n  padding-top: 11px; }\n\n.pt-11 {\n  padding-top: 11px; }\n\n.margin-top-11 {\n  margin-top: 11px; }\n\n.ml-11 {\n  margin-left: 11px; }\n\n.mt-11 {\n  margin-top: 11px; }\n\n.margin-bottom-11 {\n  margin-top: 11px; }\n\n.padding-top-12 {\n  padding-top: 12px; }\n\n.pt-12 {\n  padding-top: 12px; }\n\n.margin-top-12 {\n  margin-top: 12px; }\n\n.ml-12 {\n  margin-left: 12px; }\n\n.mt-12 {\n  margin-top: 12px; }\n\n.margin-bottom-12 {\n  margin-top: 12px; }\n\n.padding-top-13 {\n  padding-top: 13px; }\n\n.pt-13 {\n  padding-top: 13px; }\n\n.margin-top-13 {\n  margin-top: 13px; }\n\n.ml-13 {\n  margin-left: 13px; }\n\n.mt-13 {\n  margin-top: 13px; }\n\n.margin-bottom-13 {\n  margin-top: 13px; }\n\n.padding-top-14 {\n  padding-top: 14px; }\n\n.pt-14 {\n  padding-top: 14px; }\n\n.margin-top-14 {\n  margin-top: 14px; }\n\n.ml-14 {\n  margin-left: 14px; }\n\n.mt-14 {\n  margin-top: 14px; }\n\n.margin-bottom-14 {\n  margin-top: 14px; }\n\n.padding-top-15 {\n  padding-top: 15px; }\n\n.pt-15 {\n  padding-top: 15px; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.ml-15 {\n  margin-left: 15px; }\n\n.mt-15 {\n  margin-top: 15px; }\n\n.margin-bottom-15 {\n  margin-top: 15px; }\n\n.padding-top-16 {\n  padding-top: 16px; }\n\n.pt-16 {\n  padding-top: 16px; }\n\n.margin-top-16 {\n  margin-top: 16px; }\n\n.ml-16 {\n  margin-left: 16px; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.margin-bottom-16 {\n  margin-top: 16px; }\n\n.padding-top-17 {\n  padding-top: 17px; }\n\n.pt-17 {\n  padding-top: 17px; }\n\n.margin-top-17 {\n  margin-top: 17px; }\n\n.ml-17 {\n  margin-left: 17px; }\n\n.mt-17 {\n  margin-top: 17px; }\n\n.margin-bottom-17 {\n  margin-top: 17px; }\n\n.padding-top-18 {\n  padding-top: 18px; }\n\n.pt-18 {\n  padding-top: 18px; }\n\n.margin-top-18 {\n  margin-top: 18px; }\n\n.ml-18 {\n  margin-left: 18px; }\n\n.mt-18 {\n  margin-top: 18px; }\n\n.margin-bottom-18 {\n  margin-top: 18px; }\n\n.padding-top-19 {\n  padding-top: 19px; }\n\n.pt-19 {\n  padding-top: 19px; }\n\n.margin-top-19 {\n  margin-top: 19px; }\n\n.ml-19 {\n  margin-left: 19px; }\n\n.mt-19 {\n  margin-top: 19px; }\n\n.margin-bottom-19 {\n  margin-top: 19px; }\n\n.padding-top-20 {\n  padding-top: 20px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.margin-bottom-20 {\n  margin-top: 20px; }\n\n.padding-top-21 {\n  padding-top: 21px; }\n\n.pt-21 {\n  padding-top: 21px; }\n\n.margin-top-21 {\n  margin-top: 21px; }\n\n.ml-21 {\n  margin-left: 21px; }\n\n.mt-21 {\n  margin-top: 21px; }\n\n.margin-bottom-21 {\n  margin-top: 21px; }\n\n.padding-top-22 {\n  padding-top: 22px; }\n\n.pt-22 {\n  padding-top: 22px; }\n\n.margin-top-22 {\n  margin-top: 22px; }\n\n.ml-22 {\n  margin-left: 22px; }\n\n.mt-22 {\n  margin-top: 22px; }\n\n.margin-bottom-22 {\n  margin-top: 22px; }\n\n.padding-top-23 {\n  padding-top: 23px; }\n\n.pt-23 {\n  padding-top: 23px; }\n\n.margin-top-23 {\n  margin-top: 23px; }\n\n.ml-23 {\n  margin-left: 23px; }\n\n.mt-23 {\n  margin-top: 23px; }\n\n.margin-bottom-23 {\n  margin-top: 23px; }\n\n.padding-top-24 {\n  padding-top: 24px; }\n\n.pt-24 {\n  padding-top: 24px; }\n\n.margin-top-24 {\n  margin-top: 24px; }\n\n.ml-24 {\n  margin-left: 24px; }\n\n.mt-24 {\n  margin-top: 24px; }\n\n.margin-bottom-24 {\n  margin-top: 24px; }\n\n.padding-top-25 {\n  padding-top: 25px; }\n\n.pt-25 {\n  padding-top: 25px; }\n\n.margin-top-25 {\n  margin-top: 25px; }\n\n.ml-25 {\n  margin-left: 25px; }\n\n.mt-25 {\n  margin-top: 25px; }\n\n.margin-bottom-25 {\n  margin-top: 25px; }\n\n.padding-top-26 {\n  padding-top: 26px; }\n\n.pt-26 {\n  padding-top: 26px; }\n\n.margin-top-26 {\n  margin-top: 26px; }\n\n.ml-26 {\n  margin-left: 26px; }\n\n.mt-26 {\n  margin-top: 26px; }\n\n.margin-bottom-26 {\n  margin-top: 26px; }\n\n.padding-top-27 {\n  padding-top: 27px; }\n\n.pt-27 {\n  padding-top: 27px; }\n\n.margin-top-27 {\n  margin-top: 27px; }\n\n.ml-27 {\n  margin-left: 27px; }\n\n.mt-27 {\n  margin-top: 27px; }\n\n.margin-bottom-27 {\n  margin-top: 27px; }\n\n.padding-top-28 {\n  padding-top: 28px; }\n\n.pt-28 {\n  padding-top: 28px; }\n\n.margin-top-28 {\n  margin-top: 28px; }\n\n.ml-28 {\n  margin-left: 28px; }\n\n.mt-28 {\n  margin-top: 28px; }\n\n.margin-bottom-28 {\n  margin-top: 28px; }\n\n.padding-top-29 {\n  padding-top: 29px; }\n\n.pt-29 {\n  padding-top: 29px; }\n\n.margin-top-29 {\n  margin-top: 29px; }\n\n.ml-29 {\n  margin-left: 29px; }\n\n.mt-29 {\n  margin-top: 29px; }\n\n.margin-bottom-29 {\n  margin-top: 29px; }\n\n.padding-top-30 {\n  padding-top: 30px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.margin-top-30 {\n  margin-top: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.margin-bottom-30 {\n  margin-top: 30px; }\n\n.padding-top-31 {\n  padding-top: 31px; }\n\n.pt-31 {\n  padding-top: 31px; }\n\n.margin-top-31 {\n  margin-top: 31px; }\n\n.ml-31 {\n  margin-left: 31px; }\n\n.mt-31 {\n  margin-top: 31px; }\n\n.margin-bottom-31 {\n  margin-top: 31px; }\n\n.padding-top-32 {\n  padding-top: 32px; }\n\n.pt-32 {\n  padding-top: 32px; }\n\n.margin-top-32 {\n  margin-top: 32px; }\n\n.ml-32 {\n  margin-left: 32px; }\n\n.mt-32 {\n  margin-top: 32px; }\n\n.margin-bottom-32 {\n  margin-top: 32px; }\n\n.padding-top-33 {\n  padding-top: 33px; }\n\n.pt-33 {\n  padding-top: 33px; }\n\n.margin-top-33 {\n  margin-top: 33px; }\n\n.ml-33 {\n  margin-left: 33px; }\n\n.mt-33 {\n  margin-top: 33px; }\n\n.margin-bottom-33 {\n  margin-top: 33px; }\n\n.padding-top-34 {\n  padding-top: 34px; }\n\n.pt-34 {\n  padding-top: 34px; }\n\n.margin-top-34 {\n  margin-top: 34px; }\n\n.ml-34 {\n  margin-left: 34px; }\n\n.mt-34 {\n  margin-top: 34px; }\n\n.margin-bottom-34 {\n  margin-top: 34px; }\n\n.padding-top-35 {\n  padding-top: 35px; }\n\n.pt-35 {\n  padding-top: 35px; }\n\n.margin-top-35 {\n  margin-top: 35px; }\n\n.ml-35 {\n  margin-left: 35px; }\n\n.mt-35 {\n  margin-top: 35px; }\n\n.margin-bottom-35 {\n  margin-top: 35px; }\n\n.padding-top-36 {\n  padding-top: 36px; }\n\n.pt-36 {\n  padding-top: 36px; }\n\n.margin-top-36 {\n  margin-top: 36px; }\n\n.ml-36 {\n  margin-left: 36px; }\n\n.mt-36 {\n  margin-top: 36px; }\n\n.margin-bottom-36 {\n  margin-top: 36px; }\n\n.padding-top-37 {\n  padding-top: 37px; }\n\n.pt-37 {\n  padding-top: 37px; }\n\n.margin-top-37 {\n  margin-top: 37px; }\n\n.ml-37 {\n  margin-left: 37px; }\n\n.mt-37 {\n  margin-top: 37px; }\n\n.margin-bottom-37 {\n  margin-top: 37px; }\n\n.padding-top-38 {\n  padding-top: 38px; }\n\n.pt-38 {\n  padding-top: 38px; }\n\n.margin-top-38 {\n  margin-top: 38px; }\n\n.ml-38 {\n  margin-left: 38px; }\n\n.mt-38 {\n  margin-top: 38px; }\n\n.margin-bottom-38 {\n  margin-top: 38px; }\n\n.padding-top-39 {\n  padding-top: 39px; }\n\n.pt-39 {\n  padding-top: 39px; }\n\n.margin-top-39 {\n  margin-top: 39px; }\n\n.ml-39 {\n  margin-left: 39px; }\n\n.mt-39 {\n  margin-top: 39px; }\n\n.margin-bottom-39 {\n  margin-top: 39px; }\n\n.padding-top-40 {\n  padding-top: 40px; }\n\n.pt-40 {\n  padding-top: 40px; }\n\n.margin-top-40 {\n  margin-top: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.margin-bottom-40 {\n  margin-top: 40px; }\n\n.padding-top-41 {\n  padding-top: 41px; }\n\n.pt-41 {\n  padding-top: 41px; }\n\n.margin-top-41 {\n  margin-top: 41px; }\n\n.ml-41 {\n  margin-left: 41px; }\n\n.mt-41 {\n  margin-top: 41px; }\n\n.margin-bottom-41 {\n  margin-top: 41px; }\n\n.padding-top-42 {\n  padding-top: 42px; }\n\n.pt-42 {\n  padding-top: 42px; }\n\n.margin-top-42 {\n  margin-top: 42px; }\n\n.ml-42 {\n  margin-left: 42px; }\n\n.mt-42 {\n  margin-top: 42px; }\n\n.margin-bottom-42 {\n  margin-top: 42px; }\n\n.padding-top-43 {\n  padding-top: 43px; }\n\n.pt-43 {\n  padding-top: 43px; }\n\n.margin-top-43 {\n  margin-top: 43px; }\n\n.ml-43 {\n  margin-left: 43px; }\n\n.mt-43 {\n  margin-top: 43px; }\n\n.margin-bottom-43 {\n  margin-top: 43px; }\n\n.padding-top-44 {\n  padding-top: 44px; }\n\n.pt-44 {\n  padding-top: 44px; }\n\n.margin-top-44 {\n  margin-top: 44px; }\n\n.ml-44 {\n  margin-left: 44px; }\n\n.mt-44 {\n  margin-top: 44px; }\n\n.margin-bottom-44 {\n  margin-top: 44px; }\n\n.padding-top-45 {\n  padding-top: 45px; }\n\n.pt-45 {\n  padding-top: 45px; }\n\n.margin-top-45 {\n  margin-top: 45px; }\n\n.ml-45 {\n  margin-left: 45px; }\n\n.mt-45 {\n  margin-top: 45px; }\n\n.margin-bottom-45 {\n  margin-top: 45px; }\n\n.padding-top-46 {\n  padding-top: 46px; }\n\n.pt-46 {\n  padding-top: 46px; }\n\n.margin-top-46 {\n  margin-top: 46px; }\n\n.ml-46 {\n  margin-left: 46px; }\n\n.mt-46 {\n  margin-top: 46px; }\n\n.margin-bottom-46 {\n  margin-top: 46px; }\n\n.padding-top-47 {\n  padding-top: 47px; }\n\n.pt-47 {\n  padding-top: 47px; }\n\n.margin-top-47 {\n  margin-top: 47px; }\n\n.ml-47 {\n  margin-left: 47px; }\n\n.mt-47 {\n  margin-top: 47px; }\n\n.margin-bottom-47 {\n  margin-top: 47px; }\n\n.padding-top-48 {\n  padding-top: 48px; }\n\n.pt-48 {\n  padding-top: 48px; }\n\n.margin-top-48 {\n  margin-top: 48px; }\n\n.ml-48 {\n  margin-left: 48px; }\n\n.mt-48 {\n  margin-top: 48px; }\n\n.margin-bottom-48 {\n  margin-top: 48px; }\n\n.padding-top-49 {\n  padding-top: 49px; }\n\n.pt-49 {\n  padding-top: 49px; }\n\n.margin-top-49 {\n  margin-top: 49px; }\n\n.ml-49 {\n  margin-left: 49px; }\n\n.mt-49 {\n  margin-top: 49px; }\n\n.margin-bottom-49 {\n  margin-top: 49px; }\n\n.padding-top-50 {\n  padding-top: 50px; }\n\n.pt-50 {\n  padding-top: 50px; }\n\n.margin-top-50 {\n  margin-top: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.margin-bottom-50 {\n  margin-top: 50px; }\n\n.padding-top-51 {\n  padding-top: 51px; }\n\n.pt-51 {\n  padding-top: 51px; }\n\n.margin-top-51 {\n  margin-top: 51px; }\n\n.ml-51 {\n  margin-left: 51px; }\n\n.mt-51 {\n  margin-top: 51px; }\n\n.margin-bottom-51 {\n  margin-top: 51px; }\n\n.padding-top-52 {\n  padding-top: 52px; }\n\n.pt-52 {\n  padding-top: 52px; }\n\n.margin-top-52 {\n  margin-top: 52px; }\n\n.ml-52 {\n  margin-left: 52px; }\n\n.mt-52 {\n  margin-top: 52px; }\n\n.margin-bottom-52 {\n  margin-top: 52px; }\n\n.padding-top-53 {\n  padding-top: 53px; }\n\n.pt-53 {\n  padding-top: 53px; }\n\n.margin-top-53 {\n  margin-top: 53px; }\n\n.ml-53 {\n  margin-left: 53px; }\n\n.mt-53 {\n  margin-top: 53px; }\n\n.margin-bottom-53 {\n  margin-top: 53px; }\n\n.padding-top-54 {\n  padding-top: 54px; }\n\n.pt-54 {\n  padding-top: 54px; }\n\n.margin-top-54 {\n  margin-top: 54px; }\n\n.ml-54 {\n  margin-left: 54px; }\n\n.mt-54 {\n  margin-top: 54px; }\n\n.margin-bottom-54 {\n  margin-top: 54px; }\n\n.padding-top-55 {\n  padding-top: 55px; }\n\n.pt-55 {\n  padding-top: 55px; }\n\n.margin-top-55 {\n  margin-top: 55px; }\n\n.ml-55 {\n  margin-left: 55px; }\n\n.mt-55 {\n  margin-top: 55px; }\n\n.margin-bottom-55 {\n  margin-top: 55px; }\n\n.padding-top-56 {\n  padding-top: 56px; }\n\n.pt-56 {\n  padding-top: 56px; }\n\n.margin-top-56 {\n  margin-top: 56px; }\n\n.ml-56 {\n  margin-left: 56px; }\n\n.mt-56 {\n  margin-top: 56px; }\n\n.margin-bottom-56 {\n  margin-top: 56px; }\n\n.padding-top-57 {\n  padding-top: 57px; }\n\n.pt-57 {\n  padding-top: 57px; }\n\n.margin-top-57 {\n  margin-top: 57px; }\n\n.ml-57 {\n  margin-left: 57px; }\n\n.mt-57 {\n  margin-top: 57px; }\n\n.margin-bottom-57 {\n  margin-top: 57px; }\n\n.padding-top-58 {\n  padding-top: 58px; }\n\n.pt-58 {\n  padding-top: 58px; }\n\n.margin-top-58 {\n  margin-top: 58px; }\n\n.ml-58 {\n  margin-left: 58px; }\n\n.mt-58 {\n  margin-top: 58px; }\n\n.margin-bottom-58 {\n  margin-top: 58px; }\n\n.padding-top-59 {\n  padding-top: 59px; }\n\n.pt-59 {\n  padding-top: 59px; }\n\n.margin-top-59 {\n  margin-top: 59px; }\n\n.ml-59 {\n  margin-left: 59px; }\n\n.mt-59 {\n  margin-top: 59px; }\n\n.margin-bottom-59 {\n  margin-top: 59px; }\n\n.padding-top-60 {\n  padding-top: 60px; }\n\n.pt-60 {\n  padding-top: 60px; }\n\n.margin-top-60 {\n  margin-top: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.margin-bottom-60 {\n  margin-top: 60px; }\n\n.padding-top-61 {\n  padding-top: 61px; }\n\n.pt-61 {\n  padding-top: 61px; }\n\n.margin-top-61 {\n  margin-top: 61px; }\n\n.ml-61 {\n  margin-left: 61px; }\n\n.mt-61 {\n  margin-top: 61px; }\n\n.margin-bottom-61 {\n  margin-top: 61px; }\n\n.padding-top-62 {\n  padding-top: 62px; }\n\n.pt-62 {\n  padding-top: 62px; }\n\n.margin-top-62 {\n  margin-top: 62px; }\n\n.ml-62 {\n  margin-left: 62px; }\n\n.mt-62 {\n  margin-top: 62px; }\n\n.margin-bottom-62 {\n  margin-top: 62px; }\n\n.padding-top-63 {\n  padding-top: 63px; }\n\n.pt-63 {\n  padding-top: 63px; }\n\n.margin-top-63 {\n  margin-top: 63px; }\n\n.ml-63 {\n  margin-left: 63px; }\n\n.mt-63 {\n  margin-top: 63px; }\n\n.margin-bottom-63 {\n  margin-top: 63px; }\n\n.padding-top-64 {\n  padding-top: 64px; }\n\n.pt-64 {\n  padding-top: 64px; }\n\n.margin-top-64 {\n  margin-top: 64px; }\n\n.ml-64 {\n  margin-left: 64px; }\n\n.mt-64 {\n  margin-top: 64px; }\n\n.margin-bottom-64 {\n  margin-top: 64px; }\n\n.padding-top-65 {\n  padding-top: 65px; }\n\n.pt-65 {\n  padding-top: 65px; }\n\n.margin-top-65 {\n  margin-top: 65px; }\n\n.ml-65 {\n  margin-left: 65px; }\n\n.mt-65 {\n  margin-top: 65px; }\n\n.margin-bottom-65 {\n  margin-top: 65px; }\n\n.padding-top-66 {\n  padding-top: 66px; }\n\n.pt-66 {\n  padding-top: 66px; }\n\n.margin-top-66 {\n  margin-top: 66px; }\n\n.ml-66 {\n  margin-left: 66px; }\n\n.mt-66 {\n  margin-top: 66px; }\n\n.margin-bottom-66 {\n  margin-top: 66px; }\n\n.padding-top-67 {\n  padding-top: 67px; }\n\n.pt-67 {\n  padding-top: 67px; }\n\n.margin-top-67 {\n  margin-top: 67px; }\n\n.ml-67 {\n  margin-left: 67px; }\n\n.mt-67 {\n  margin-top: 67px; }\n\n.margin-bottom-67 {\n  margin-top: 67px; }\n\n.padding-top-68 {\n  padding-top: 68px; }\n\n.pt-68 {\n  padding-top: 68px; }\n\n.margin-top-68 {\n  margin-top: 68px; }\n\n.ml-68 {\n  margin-left: 68px; }\n\n.mt-68 {\n  margin-top: 68px; }\n\n.margin-bottom-68 {\n  margin-top: 68px; }\n\n.padding-top-69 {\n  padding-top: 69px; }\n\n.pt-69 {\n  padding-top: 69px; }\n\n.margin-top-69 {\n  margin-top: 69px; }\n\n.ml-69 {\n  margin-left: 69px; }\n\n.mt-69 {\n  margin-top: 69px; }\n\n.margin-bottom-69 {\n  margin-top: 69px; }\n\n.padding-top-70 {\n  padding-top: 70px; }\n\n.pt-70 {\n  padding-top: 70px; }\n\n.margin-top-70 {\n  margin-top: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.margin-bottom-70 {\n  margin-top: 70px; }\n\n.padding-top-71 {\n  padding-top: 71px; }\n\n.pt-71 {\n  padding-top: 71px; }\n\n.margin-top-71 {\n  margin-top: 71px; }\n\n.ml-71 {\n  margin-left: 71px; }\n\n.mt-71 {\n  margin-top: 71px; }\n\n.margin-bottom-71 {\n  margin-top: 71px; }\n\n.padding-top-72 {\n  padding-top: 72px; }\n\n.pt-72 {\n  padding-top: 72px; }\n\n.margin-top-72 {\n  margin-top: 72px; }\n\n.ml-72 {\n  margin-left: 72px; }\n\n.mt-72 {\n  margin-top: 72px; }\n\n.margin-bottom-72 {\n  margin-top: 72px; }\n\n.padding-top-73 {\n  padding-top: 73px; }\n\n.pt-73 {\n  padding-top: 73px; }\n\n.margin-top-73 {\n  margin-top: 73px; }\n\n.ml-73 {\n  margin-left: 73px; }\n\n.mt-73 {\n  margin-top: 73px; }\n\n.margin-bottom-73 {\n  margin-top: 73px; }\n\n.padding-top-74 {\n  padding-top: 74px; }\n\n.pt-74 {\n  padding-top: 74px; }\n\n.margin-top-74 {\n  margin-top: 74px; }\n\n.ml-74 {\n  margin-left: 74px; }\n\n.mt-74 {\n  margin-top: 74px; }\n\n.margin-bottom-74 {\n  margin-top: 74px; }\n\n.padding-top-75 {\n  padding-top: 75px; }\n\n.pt-75 {\n  padding-top: 75px; }\n\n.margin-top-75 {\n  margin-top: 75px; }\n\n.ml-75 {\n  margin-left: 75px; }\n\n.mt-75 {\n  margin-top: 75px; }\n\n.margin-bottom-75 {\n  margin-top: 75px; }\n\n.padding-top-76 {\n  padding-top: 76px; }\n\n.pt-76 {\n  padding-top: 76px; }\n\n.margin-top-76 {\n  margin-top: 76px; }\n\n.ml-76 {\n  margin-left: 76px; }\n\n.mt-76 {\n  margin-top: 76px; }\n\n.margin-bottom-76 {\n  margin-top: 76px; }\n\n.padding-top-77 {\n  padding-top: 77px; }\n\n.pt-77 {\n  padding-top: 77px; }\n\n.margin-top-77 {\n  margin-top: 77px; }\n\n.ml-77 {\n  margin-left: 77px; }\n\n.mt-77 {\n  margin-top: 77px; }\n\n.margin-bottom-77 {\n  margin-top: 77px; }\n\n.padding-top-78 {\n  padding-top: 78px; }\n\n.pt-78 {\n  padding-top: 78px; }\n\n.margin-top-78 {\n  margin-top: 78px; }\n\n.ml-78 {\n  margin-left: 78px; }\n\n.mt-78 {\n  margin-top: 78px; }\n\n.margin-bottom-78 {\n  margin-top: 78px; }\n\n.padding-top-79 {\n  padding-top: 79px; }\n\n.pt-79 {\n  padding-top: 79px; }\n\n.margin-top-79 {\n  margin-top: 79px; }\n\n.ml-79 {\n  margin-left: 79px; }\n\n.mt-79 {\n  margin-top: 79px; }\n\n.margin-bottom-79 {\n  margin-top: 79px; }\n\n.padding-top-80 {\n  padding-top: 80px; }\n\n.pt-80 {\n  padding-top: 80px; }\n\n.margin-top-80 {\n  margin-top: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.margin-bottom-80 {\n  margin-top: 80px; }\n\n.padding-top-81 {\n  padding-top: 81px; }\n\n.pt-81 {\n  padding-top: 81px; }\n\n.margin-top-81 {\n  margin-top: 81px; }\n\n.ml-81 {\n  margin-left: 81px; }\n\n.mt-81 {\n  margin-top: 81px; }\n\n.margin-bottom-81 {\n  margin-top: 81px; }\n\n.padding-top-82 {\n  padding-top: 82px; }\n\n.pt-82 {\n  padding-top: 82px; }\n\n.margin-top-82 {\n  margin-top: 82px; }\n\n.ml-82 {\n  margin-left: 82px; }\n\n.mt-82 {\n  margin-top: 82px; }\n\n.margin-bottom-82 {\n  margin-top: 82px; }\n\n.padding-top-83 {\n  padding-top: 83px; }\n\n.pt-83 {\n  padding-top: 83px; }\n\n.margin-top-83 {\n  margin-top: 83px; }\n\n.ml-83 {\n  margin-left: 83px; }\n\n.mt-83 {\n  margin-top: 83px; }\n\n.margin-bottom-83 {\n  margin-top: 83px; }\n\n.padding-top-84 {\n  padding-top: 84px; }\n\n.pt-84 {\n  padding-top: 84px; }\n\n.margin-top-84 {\n  margin-top: 84px; }\n\n.ml-84 {\n  margin-left: 84px; }\n\n.mt-84 {\n  margin-top: 84px; }\n\n.margin-bottom-84 {\n  margin-top: 84px; }\n\n.padding-top-85 {\n  padding-top: 85px; }\n\n.pt-85 {\n  padding-top: 85px; }\n\n.margin-top-85 {\n  margin-top: 85px; }\n\n.ml-85 {\n  margin-left: 85px; }\n\n.mt-85 {\n  margin-top: 85px; }\n\n.margin-bottom-85 {\n  margin-top: 85px; }\n\n.padding-top-86 {\n  padding-top: 86px; }\n\n.pt-86 {\n  padding-top: 86px; }\n\n.margin-top-86 {\n  margin-top: 86px; }\n\n.ml-86 {\n  margin-left: 86px; }\n\n.mt-86 {\n  margin-top: 86px; }\n\n.margin-bottom-86 {\n  margin-top: 86px; }\n\n.padding-top-87 {\n  padding-top: 87px; }\n\n.pt-87 {\n  padding-top: 87px; }\n\n.margin-top-87 {\n  margin-top: 87px; }\n\n.ml-87 {\n  margin-left: 87px; }\n\n.mt-87 {\n  margin-top: 87px; }\n\n.margin-bottom-87 {\n  margin-top: 87px; }\n\n.padding-top-88 {\n  padding-top: 88px; }\n\n.pt-88 {\n  padding-top: 88px; }\n\n.margin-top-88 {\n  margin-top: 88px; }\n\n.ml-88 {\n  margin-left: 88px; }\n\n.mt-88 {\n  margin-top: 88px; }\n\n.margin-bottom-88 {\n  margin-top: 88px; }\n\n.padding-top-89 {\n  padding-top: 89px; }\n\n.pt-89 {\n  padding-top: 89px; }\n\n.margin-top-89 {\n  margin-top: 89px; }\n\n.ml-89 {\n  margin-left: 89px; }\n\n.mt-89 {\n  margin-top: 89px; }\n\n.margin-bottom-89 {\n  margin-top: 89px; }\n\n.padding-top-90 {\n  padding-top: 90px; }\n\n.pt-90 {\n  padding-top: 90px; }\n\n.margin-top-90 {\n  margin-top: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.margin-bottom-90 {\n  margin-top: 90px; }\n\n.padding-top-91 {\n  padding-top: 91px; }\n\n.pt-91 {\n  padding-top: 91px; }\n\n.margin-top-91 {\n  margin-top: 91px; }\n\n.ml-91 {\n  margin-left: 91px; }\n\n.mt-91 {\n  margin-top: 91px; }\n\n.margin-bottom-91 {\n  margin-top: 91px; }\n\n.padding-top-92 {\n  padding-top: 92px; }\n\n.pt-92 {\n  padding-top: 92px; }\n\n.margin-top-92 {\n  margin-top: 92px; }\n\n.ml-92 {\n  margin-left: 92px; }\n\n.mt-92 {\n  margin-top: 92px; }\n\n.margin-bottom-92 {\n  margin-top: 92px; }\n\n.padding-top-93 {\n  padding-top: 93px; }\n\n.pt-93 {\n  padding-top: 93px; }\n\n.margin-top-93 {\n  margin-top: 93px; }\n\n.ml-93 {\n  margin-left: 93px; }\n\n.mt-93 {\n  margin-top: 93px; }\n\n.margin-bottom-93 {\n  margin-top: 93px; }\n\n.padding-top-94 {\n  padding-top: 94px; }\n\n.pt-94 {\n  padding-top: 94px; }\n\n.margin-top-94 {\n  margin-top: 94px; }\n\n.ml-94 {\n  margin-left: 94px; }\n\n.mt-94 {\n  margin-top: 94px; }\n\n.margin-bottom-94 {\n  margin-top: 94px; }\n\n.padding-top-95 {\n  padding-top: 95px; }\n\n.pt-95 {\n  padding-top: 95px; }\n\n.margin-top-95 {\n  margin-top: 95px; }\n\n.ml-95 {\n  margin-left: 95px; }\n\n.mt-95 {\n  margin-top: 95px; }\n\n.margin-bottom-95 {\n  margin-top: 95px; }\n\n.padding-top-96 {\n  padding-top: 96px; }\n\n.pt-96 {\n  padding-top: 96px; }\n\n.margin-top-96 {\n  margin-top: 96px; }\n\n.ml-96 {\n  margin-left: 96px; }\n\n.mt-96 {\n  margin-top: 96px; }\n\n.margin-bottom-96 {\n  margin-top: 96px; }\n\n.padding-top-97 {\n  padding-top: 97px; }\n\n.pt-97 {\n  padding-top: 97px; }\n\n.margin-top-97 {\n  margin-top: 97px; }\n\n.ml-97 {\n  margin-left: 97px; }\n\n.mt-97 {\n  margin-top: 97px; }\n\n.margin-bottom-97 {\n  margin-top: 97px; }\n\n.padding-top-98 {\n  padding-top: 98px; }\n\n.pt-98 {\n  padding-top: 98px; }\n\n.margin-top-98 {\n  margin-top: 98px; }\n\n.ml-98 {\n  margin-left: 98px; }\n\n.mt-98 {\n  margin-top: 98px; }\n\n.margin-bottom-98 {\n  margin-top: 98px; }\n\n.padding-top-99 {\n  padding-top: 99px; }\n\n.pt-99 {\n  padding-top: 99px; }\n\n.margin-top-99 {\n  margin-top: 99px; }\n\n.ml-99 {\n  margin-left: 99px; }\n\n.mt-99 {\n  margin-top: 99px; }\n\n.margin-bottom-99 {\n  margin-top: 99px; }\n\n.padding-top-100 {\n  padding-top: 100px; }\n\n.pt-100 {\n  padding-top: 100px; }\n\n.margin-top-100 {\n  margin-top: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.margin-bottom-100 {\n  margin-top: 100px; }\n\n/*for targetting small screens */\n\n.categorybanner_row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-right: 80px;\n  padding-left: 80px;\n  text-align: center; }\n\n.categorybanner_row .categorybanner_products {\n    -ms-flex: 0 0 24%;\n    -webkit-box-flex: 0;\n            flex: 0 0 25%;\n    max-width: 24%;\n    text-align: left; }\n\n.categorybanner_row .categorybanner_products a {\n      color: #232323;\n      font-size: 12px;\n      line-height: 22px;\n      text-transform: capitalize;\n      text-decoration: none;\n      cursor: pointer; }\n\n.categorybanner_row .categorybanner_products a:hover {\n        text-decoration: underline; }\n\n.category_banner-block {\n  width: 100%; }\n\n@media (max-width: 768px) {\n    .category_banner-block {\n      display: none; } }\n\n.category_banner-block .catbanner {\n    text-align: center;\n    background: #fafafd;\n    width: 964px;\n    padding-bottom: 0; }\n\n@media (max-width: 768px) {\n      .category_banner-block .catbanner {\n        display: none; } }\n\n.category_banner-block .catbanner h1 {\n      font-size: 25px;\n      color: #232323;\n      padding-top: 40px; }\n\n.category_banner-block .catbanner .banner-container h1 {\n      line-height: 1.1;\n      color: #232323; }\n\n.category_banner-block .banner_childcategories {\n    padding-top: 25px;\n    position: relative;\n    padding-bottom: 20px; }\n\n.category_banner-block .banner_childcategories table {\n      text-align: center;\n      margin: 0 auto; }\n\n.category_banner-block .banner_childcategories table td {\n        min-width: 165px; }\n\n.category_banner-block .banner_childcategories table td a {\n          color: #232323;\n          font-size: 12px;\n          line-height: 22px; }\n\n.banner_description {\n  padding: 0 80px;\n  padding-top: 20px; }\n"

/***/ }),

/***/ "./src/app/categorylanding-page/categorybanner/categorybanner.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/categorylanding-page/categorybanner/categorybanner.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CategorybannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorybannerComponent", function() { return CategorybannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategorybannerComponent = /** @class */ (function () {
    function CategorybannerComponent(titleService, location, router, route) {
        this.titleService = titleService;
        this.location = location;
        this.router = router;
        this.route = route;
        this.categoryBannerList = [];
        this.childRoot = false;
    }
    CategorybannerComponent.prototype.ngOnInit = function () { };
    CategorybannerComponent.prototype.getRouterPath = function (current) {
        var url = "/store" + current.url.replace("/c/", "/").toLowerCase();
        return url;
    };
    CategorybannerComponent.prototype.onSubPrductClick = function (event, current) {
        event.stopPropagation();
        var url = "/store" + current.url.replace("/c/", "/").toLowerCase();
        this.titleService.setTitle(current.titleName);
        if (event.ctrlKey && event.which === 1) {
            window.open(url);
        }
        else {
            this.router.navigate([url]);
        }
    };
    CategorybannerComponent.prototype.ngOnChanges = function (changes) {
        var that = this;
        if (changes["categorybanner"]) {
            if (changes["categorybanner"]["currentValue"] != undefined) {
                var catlog = changes["categorybanner"]["currentValue"];
                if (catlog["bannerId"] && (catlog.isL3 || catlog.isL2)) {
                    that.catBanner = true;
                    that.renderTemplate(catlog["bannerId"]);
                }
                else {
                    that.catBanner = false;
                    that.categoryBannerList = [];
                    if (that.categorybanner["subcategories"]) {
                        this.childRoot = true;
                        lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](that.categorybanner["subcategories"], function (value, i) {
                            if (value["subcategories"]) {
                                if (value["subcategories"].length == 0) {
                                    that.categoryBannerList.push(value);
                                }
                                else {
                                    lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](value["subcategories"], function (itm, k) {
                                        that.categoryBannerList.push(itm);
                                    });
                                }
                            }
                        });
                        this.categoryBannerList.sort(function (a, b) {
                            return a.id - b.id;
                        });
                    }
                    else {
                        this.childRoot = false;
                    }
                }
            }
        }
    };
    CategorybannerComponent.prototype.renderTemplate = function (_bannerId) {
        AmpCa.utils = new AmpCa.Utils();
        AmpCa.utils.getHtmlServiceData({
            auth: {
                baseUrl: "https://c1.adis.ws",
                id: _bannerId,
                store: "moltonbrown",
                templateName: "acc-template-specialofferbanner"
            },
            callback: function (htm) {
                this.categoryBannerEl.nativeElement.innerHTML = htm;
                AmpCa.utils.postProcessing.execHtmlService("specialofferbanner");
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("categoryBannerEl"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CategorybannerComponent.prototype, "categoryBannerEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategorybannerComponent.prototype, "categorybanner", void 0);
    CategorybannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-categorybanner",
            template: __webpack_require__(/*! ./categorybanner.component.html */ "./src/app/categorylanding-page/categorybanner/categorybanner.component.html"),
            styles: [__webpack_require__(/*! ./categorybanner.component.scss */ "./src/app/categorylanding-page/categorybanner/categorybanner.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategorybannerComponent);
    return CategorybannerComponent;
}());



/***/ }),

/***/ "./src/app/categorylanding-page/categorylanding-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/categorylanding-page/categorylanding-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-mb-bread-crumb [breadcrumb]=\"breadcrumb\"></app-mb-bread-crumb>\r\n  <div class=\"category-main\" *ngIf=\"categorybanner\">\r\n    <h1 *ngIf=\"categorybanner.categoryDisplayName\">\r\n      {{categorybanner.categoryDisplayName}}\r\n    </h1>\r\n</div>\r\n  <app-categorybanner\r\n    *ngIf=\"categorybanner\"\r\n    [categorybanner]=\"categorybanner\"\r\n  ></app-categorybanner>\r\n</div>\r\n\r\n<main class=\"plp-view_container container\">\r\n    <app-sort-type\r\n      [searchPrdId]=\"searchPrdId\"\r\n      [checkList]=\"checkList\"\r\n      (onGridToggle)=\"onGridClick($event)\"\r\n      (clearAll)=\"onClearAll()\"\r\n      (onSortByChange)=\"sortByChange()\"\r\n      (filterby)=\"onMbFilterByClick()\"\r\n      (updateFilterData)=\"onUpdateFilterData($event)\"\r\n      (onShowFilterFacet)=\"onCheckRefineFacet()\"\r\n    >\r\n    </app-sort-type>\r\n <div class=\"category-top-bar\"   \r\n    *ngIf=\"activeProducts\">\r\n    <div>\r\n        <h2>FILTER BY</h2>\r\n    </div>\r\n    <div>\r\n        <app-pager\r\n        [pagination]=\"pagination\"\r\n        [catalogSpecific]=\"catalogSpecific\"\r\n        [pager]=\"pager\"\r\n        [viewAllProducts]=\"viewAllProducts\"\r\n        (viewAll)=\"onviewAllClick($event)\"\r\n        (onShowFirstPage)=\"onShowFirstPage($event)\"\r\n        (productperPage)=\"fetchProductperPage($event)\"\r\n        (fetchperPage)=\"fetchProductNextperPage($event)\"\r\n      ></app-pager>\r\n    </div>\r\n</div>\r\n    <section *ngIf=\"!freshRelevanceSpecific; else freshrelevanceblock\">\r\n      <div class=\"row plp-container-grid\" *ngIf=\"activeProducts;else overlayTmpl\">\r\n          <div class=\"plp-container-load-block\"     [ngClass]=\"{ 'overlay-bg-show': !pageLoad, 'overlay-bg-hide': pageLoad }\">\r\n              <div class=\"b2c-title\">\r\n               <span class=\"loading-txt\"> loading... </span> \r\n              </div>\r\n          </div>\r\n        <!-- facet starts -->\r\n        <div\r\n          class=\"facets col-md-3 left-menu \"\r\n          [ngClass]=\"{\r\n            'container-display-block': catalogSpecific,\r\n            'container-display-none': !catalogSpecific\r\n          }\"\r\n        >\r\n          <app-filter\r\n            [openFacet]=\"openFacet\"\r\n            [searchDisplay]=\"false\"\r\n            [facetResponse]=\"facetResponse\"\r\n            [searchPrdId]=\"searchPrdId\"\r\n            [modal]=\"false\"\r\n            (clearParams)=\"onClearAll()\"\r\n            (refetchProducts)=\"onRefetchProducts($event)\"\r\n          >\r\n          </app-filter>\r\n        </div>\r\n        <!-- facet ends -->\r\n        <div\r\n          class=\"plp-products-container    col-sm-12 \"\r\n          *ngIf=\"activeProducts\"\r\n          [ngClass]=\"{\r\n            'col-md-9': catalogSpecific,\r\n            'col-md-12 no-padding': !catalogSpecific\r\n          }\"\r\n        >\r\n          <div class=\"catalog_plp\">\r\n            <app-product\r\n              *ngIf=\"pagination\"\r\n              [categoryResponse]=\"categoryResponse\"\r\n              [activeProducts]=\"activeProducts\"\r\n              [pagedItems]=\"pagedItems\"\r\n              [displayGrid]=\"displayGrid\"\r\n            >\r\n            </app-product>\r\n          </div>\r\n          <div class=\"page_btm\">\r\n            <app-pager\r\n              [pagination]=\"pagination\"\r\n              [pager]=\"pager\"\r\n              [catalogSpecific]=\"catalogSpecific\"\r\n              [viewAllProducts]=\"viewAllProducts\"\r\n              (viewAll)=\"onviewAllClick($event)\"\r\n              (onShowFirstPage)=\"onShowFirstPage($event)\"\r\n              (productperPage)=\"fetchProductperPage($event)\"\r\n              (fetchperPage)=\"fetchProductNextperPage($event)\"\r\n            ></app-pager>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ng-template #overlayTmpl>\r\n          <div class=\"plp-container-load-block  plp-overlay\">\r\n              <div class=\"b2c-title\">\r\n                <span class=\"loading-txt\"> loading... </span> \r\n              </div>\r\n          </div>\r\n      </ng-template>\r\n    </section>\r\n</main>\r\n\r\n<!-- modal -->\r\n<ng-template #freshrelevanceblock>\r\n  <div class=\"freshrelavance-container container\">\r\n    <div class=\"heading\">\r\n      <h2 class=\"content-inline-block\">Bestsellers</h2>\r\n      <h2 class=\"content-inline-block viewAllProducts\" *ngIf=\"categorybanner\">\r\n        <a (click)=\"onViewAllProducts()\">\r\n          View All&nbsp;{{ categorybanner.categoryDisplayName }}&nbsp;Products\r\n        </a>\r\n      </h2>\r\n    </div>\r\n    <div #parentCategory>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"modal\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-full\" role=\"document\">\r\n    <app-filter\r\n      [facetResponse]=\"facetResponse\"\r\n      [searchPrdId]=\"searchPrdId\"\r\n      [modal]=\"true\"\r\n      (clearParams)=\"onClearAll()\"\r\n      (refetchProducts)=\"onRefetchProducts($event)\"\r\n    >\r\n    </app-filter>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/categorylanding-page/categorylanding-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/categorylanding-page/categorylanding-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Century Gothic';\n  src: url(\"/assets/fonts/Century/fonts/CENTURY.ttf\") format(\"ttf\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff2\") format(\"woff2\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff\") format(\"woff\"), url(\"/assets/fonts/Century/fonts/CENTURY.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Regular';\n  src: url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Bold';\n  src: url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Italic';\n  src: url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.svg\") format(\"svg\"); }\n\n.padding-top-1 {\n  padding-top: 1px; }\n\n.pt-1 {\n  padding-top: 1px; }\n\n.margin-top-1 {\n  margin-top: 1px; }\n\n.ml-1 {\n  margin-left: 1px; }\n\n.mt-1 {\n  margin-top: 1px; }\n\n.margin-bottom-1 {\n  margin-top: 1px; }\n\n.padding-top-2 {\n  padding-top: 2px; }\n\n.pt-2 {\n  padding-top: 2px; }\n\n.margin-top-2 {\n  margin-top: 2px; }\n\n.ml-2 {\n  margin-left: 2px; }\n\n.mt-2 {\n  margin-top: 2px; }\n\n.margin-bottom-2 {\n  margin-top: 2px; }\n\n.padding-top-3 {\n  padding-top: 3px; }\n\n.pt-3 {\n  padding-top: 3px; }\n\n.margin-top-3 {\n  margin-top: 3px; }\n\n.ml-3 {\n  margin-left: 3px; }\n\n.mt-3 {\n  margin-top: 3px; }\n\n.margin-bottom-3 {\n  margin-top: 3px; }\n\n.padding-top-4 {\n  padding-top: 4px; }\n\n.pt-4 {\n  padding-top: 4px; }\n\n.margin-top-4 {\n  margin-top: 4px; }\n\n.ml-4 {\n  margin-left: 4px; }\n\n.mt-4 {\n  margin-top: 4px; }\n\n.margin-bottom-4 {\n  margin-top: 4px; }\n\n.padding-top-5 {\n  padding-top: 5px; }\n\n.pt-5 {\n  padding-top: 5px; }\n\n.margin-top-5 {\n  margin-top: 5px; }\n\n.ml-5 {\n  margin-left: 5px; }\n\n.mt-5 {\n  margin-top: 5px; }\n\n.margin-bottom-5 {\n  margin-top: 5px; }\n\n.padding-top-6 {\n  padding-top: 6px; }\n\n.pt-6 {\n  padding-top: 6px; }\n\n.margin-top-6 {\n  margin-top: 6px; }\n\n.ml-6 {\n  margin-left: 6px; }\n\n.mt-6 {\n  margin-top: 6px; }\n\n.margin-bottom-6 {\n  margin-top: 6px; }\n\n.padding-top-7 {\n  padding-top: 7px; }\n\n.pt-7 {\n  padding-top: 7px; }\n\n.margin-top-7 {\n  margin-top: 7px; }\n\n.ml-7 {\n  margin-left: 7px; }\n\n.mt-7 {\n  margin-top: 7px; }\n\n.margin-bottom-7 {\n  margin-top: 7px; }\n\n.padding-top-8 {\n  padding-top: 8px; }\n\n.pt-8 {\n  padding-top: 8px; }\n\n.margin-top-8 {\n  margin-top: 8px; }\n\n.ml-8 {\n  margin-left: 8px; }\n\n.mt-8 {\n  margin-top: 8px; }\n\n.margin-bottom-8 {\n  margin-top: 8px; }\n\n.padding-top-9 {\n  padding-top: 9px; }\n\n.pt-9 {\n  padding-top: 9px; }\n\n.margin-top-9 {\n  margin-top: 9px; }\n\n.ml-9 {\n  margin-left: 9px; }\n\n.mt-9 {\n  margin-top: 9px; }\n\n.margin-bottom-9 {\n  margin-top: 9px; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n\n.pt-10 {\n  padding-top: 10px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.margin-bottom-10 {\n  margin-top: 10px; }\n\n.padding-top-11 {\n  padding-top: 11px; }\n\n.pt-11 {\n  padding-top: 11px; }\n\n.margin-top-11 {\n  margin-top: 11px; }\n\n.ml-11 {\n  margin-left: 11px; }\n\n.mt-11 {\n  margin-top: 11px; }\n\n.margin-bottom-11 {\n  margin-top: 11px; }\n\n.padding-top-12 {\n  padding-top: 12px; }\n\n.pt-12 {\n  padding-top: 12px; }\n\n.margin-top-12 {\n  margin-top: 12px; }\n\n.ml-12 {\n  margin-left: 12px; }\n\n.mt-12 {\n  margin-top: 12px; }\n\n.margin-bottom-12 {\n  margin-top: 12px; }\n\n.padding-top-13 {\n  padding-top: 13px; }\n\n.pt-13 {\n  padding-top: 13px; }\n\n.margin-top-13 {\n  margin-top: 13px; }\n\n.ml-13 {\n  margin-left: 13px; }\n\n.mt-13 {\n  margin-top: 13px; }\n\n.margin-bottom-13 {\n  margin-top: 13px; }\n\n.padding-top-14 {\n  padding-top: 14px; }\n\n.pt-14 {\n  padding-top: 14px; }\n\n.margin-top-14 {\n  margin-top: 14px; }\n\n.ml-14 {\n  margin-left: 14px; }\n\n.mt-14 {\n  margin-top: 14px; }\n\n.margin-bottom-14 {\n  margin-top: 14px; }\n\n.padding-top-15 {\n  padding-top: 15px; }\n\n.pt-15 {\n  padding-top: 15px; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.ml-15 {\n  margin-left: 15px; }\n\n.mt-15 {\n  margin-top: 15px; }\n\n.margin-bottom-15 {\n  margin-top: 15px; }\n\n.padding-top-16 {\n  padding-top: 16px; }\n\n.pt-16 {\n  padding-top: 16px; }\n\n.margin-top-16 {\n  margin-top: 16px; }\n\n.ml-16 {\n  margin-left: 16px; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.margin-bottom-16 {\n  margin-top: 16px; }\n\n.padding-top-17 {\n  padding-top: 17px; }\n\n.pt-17 {\n  padding-top: 17px; }\n\n.margin-top-17 {\n  margin-top: 17px; }\n\n.ml-17 {\n  margin-left: 17px; }\n\n.mt-17 {\n  margin-top: 17px; }\n\n.margin-bottom-17 {\n  margin-top: 17px; }\n\n.padding-top-18 {\n  padding-top: 18px; }\n\n.pt-18 {\n  padding-top: 18px; }\n\n.margin-top-18 {\n  margin-top: 18px; }\n\n.ml-18 {\n  margin-left: 18px; }\n\n.mt-18 {\n  margin-top: 18px; }\n\n.margin-bottom-18 {\n  margin-top: 18px; }\n\n.padding-top-19 {\n  padding-top: 19px; }\n\n.pt-19 {\n  padding-top: 19px; }\n\n.margin-top-19 {\n  margin-top: 19px; }\n\n.ml-19 {\n  margin-left: 19px; }\n\n.mt-19 {\n  margin-top: 19px; }\n\n.margin-bottom-19 {\n  margin-top: 19px; }\n\n.padding-top-20 {\n  padding-top: 20px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.margin-bottom-20 {\n  margin-top: 20px; }\n\n.padding-top-21 {\n  padding-top: 21px; }\n\n.pt-21 {\n  padding-top: 21px; }\n\n.margin-top-21 {\n  margin-top: 21px; }\n\n.ml-21 {\n  margin-left: 21px; }\n\n.mt-21 {\n  margin-top: 21px; }\n\n.margin-bottom-21 {\n  margin-top: 21px; }\n\n.padding-top-22 {\n  padding-top: 22px; }\n\n.pt-22 {\n  padding-top: 22px; }\n\n.margin-top-22 {\n  margin-top: 22px; }\n\n.ml-22 {\n  margin-left: 22px; }\n\n.mt-22 {\n  margin-top: 22px; }\n\n.margin-bottom-22 {\n  margin-top: 22px; }\n\n.padding-top-23 {\n  padding-top: 23px; }\n\n.pt-23 {\n  padding-top: 23px; }\n\n.margin-top-23 {\n  margin-top: 23px; }\n\n.ml-23 {\n  margin-left: 23px; }\n\n.mt-23 {\n  margin-top: 23px; }\n\n.margin-bottom-23 {\n  margin-top: 23px; }\n\n.padding-top-24 {\n  padding-top: 24px; }\n\n.pt-24 {\n  padding-top: 24px; }\n\n.margin-top-24 {\n  margin-top: 24px; }\n\n.ml-24 {\n  margin-left: 24px; }\n\n.mt-24 {\n  margin-top: 24px; }\n\n.margin-bottom-24 {\n  margin-top: 24px; }\n\n.padding-top-25 {\n  padding-top: 25px; }\n\n.pt-25 {\n  padding-top: 25px; }\n\n.margin-top-25 {\n  margin-top: 25px; }\n\n.ml-25 {\n  margin-left: 25px; }\n\n.mt-25 {\n  margin-top: 25px; }\n\n.margin-bottom-25 {\n  margin-top: 25px; }\n\n.padding-top-26 {\n  padding-top: 26px; }\n\n.pt-26 {\n  padding-top: 26px; }\n\n.margin-top-26 {\n  margin-top: 26px; }\n\n.ml-26 {\n  margin-left: 26px; }\n\n.mt-26 {\n  margin-top: 26px; }\n\n.margin-bottom-26 {\n  margin-top: 26px; }\n\n.padding-top-27 {\n  padding-top: 27px; }\n\n.pt-27 {\n  padding-top: 27px; }\n\n.margin-top-27 {\n  margin-top: 27px; }\n\n.ml-27 {\n  margin-left: 27px; }\n\n.mt-27 {\n  margin-top: 27px; }\n\n.margin-bottom-27 {\n  margin-top: 27px; }\n\n.padding-top-28 {\n  padding-top: 28px; }\n\n.pt-28 {\n  padding-top: 28px; }\n\n.margin-top-28 {\n  margin-top: 28px; }\n\n.ml-28 {\n  margin-left: 28px; }\n\n.mt-28 {\n  margin-top: 28px; }\n\n.margin-bottom-28 {\n  margin-top: 28px; }\n\n.padding-top-29 {\n  padding-top: 29px; }\n\n.pt-29 {\n  padding-top: 29px; }\n\n.margin-top-29 {\n  margin-top: 29px; }\n\n.ml-29 {\n  margin-left: 29px; }\n\n.mt-29 {\n  margin-top: 29px; }\n\n.margin-bottom-29 {\n  margin-top: 29px; }\n\n.padding-top-30 {\n  padding-top: 30px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.margin-top-30 {\n  margin-top: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.margin-bottom-30 {\n  margin-top: 30px; }\n\n.padding-top-31 {\n  padding-top: 31px; }\n\n.pt-31 {\n  padding-top: 31px; }\n\n.margin-top-31 {\n  margin-top: 31px; }\n\n.ml-31 {\n  margin-left: 31px; }\n\n.mt-31 {\n  margin-top: 31px; }\n\n.margin-bottom-31 {\n  margin-top: 31px; }\n\n.padding-top-32 {\n  padding-top: 32px; }\n\n.pt-32 {\n  padding-top: 32px; }\n\n.margin-top-32 {\n  margin-top: 32px; }\n\n.ml-32 {\n  margin-left: 32px; }\n\n.mt-32 {\n  margin-top: 32px; }\n\n.margin-bottom-32 {\n  margin-top: 32px; }\n\n.padding-top-33 {\n  padding-top: 33px; }\n\n.pt-33 {\n  padding-top: 33px; }\n\n.margin-top-33 {\n  margin-top: 33px; }\n\n.ml-33 {\n  margin-left: 33px; }\n\n.mt-33 {\n  margin-top: 33px; }\n\n.margin-bottom-33 {\n  margin-top: 33px; }\n\n.padding-top-34 {\n  padding-top: 34px; }\n\n.pt-34 {\n  padding-top: 34px; }\n\n.margin-top-34 {\n  margin-top: 34px; }\n\n.ml-34 {\n  margin-left: 34px; }\n\n.mt-34 {\n  margin-top: 34px; }\n\n.margin-bottom-34 {\n  margin-top: 34px; }\n\n.padding-top-35 {\n  padding-top: 35px; }\n\n.pt-35 {\n  padding-top: 35px; }\n\n.margin-top-35 {\n  margin-top: 35px; }\n\n.ml-35 {\n  margin-left: 35px; }\n\n.mt-35 {\n  margin-top: 35px; }\n\n.margin-bottom-35 {\n  margin-top: 35px; }\n\n.padding-top-36 {\n  padding-top: 36px; }\n\n.pt-36 {\n  padding-top: 36px; }\n\n.margin-top-36 {\n  margin-top: 36px; }\n\n.ml-36 {\n  margin-left: 36px; }\n\n.mt-36 {\n  margin-top: 36px; }\n\n.margin-bottom-36 {\n  margin-top: 36px; }\n\n.padding-top-37 {\n  padding-top: 37px; }\n\n.pt-37 {\n  padding-top: 37px; }\n\n.margin-top-37 {\n  margin-top: 37px; }\n\n.ml-37 {\n  margin-left: 37px; }\n\n.mt-37 {\n  margin-top: 37px; }\n\n.margin-bottom-37 {\n  margin-top: 37px; }\n\n.padding-top-38 {\n  padding-top: 38px; }\n\n.pt-38 {\n  padding-top: 38px; }\n\n.margin-top-38 {\n  margin-top: 38px; }\n\n.ml-38 {\n  margin-left: 38px; }\n\n.mt-38 {\n  margin-top: 38px; }\n\n.margin-bottom-38 {\n  margin-top: 38px; }\n\n.padding-top-39 {\n  padding-top: 39px; }\n\n.pt-39 {\n  padding-top: 39px; }\n\n.margin-top-39 {\n  margin-top: 39px; }\n\n.ml-39 {\n  margin-left: 39px; }\n\n.mt-39 {\n  margin-top: 39px; }\n\n.margin-bottom-39 {\n  margin-top: 39px; }\n\n.padding-top-40 {\n  padding-top: 40px; }\n\n.pt-40 {\n  padding-top: 40px; }\n\n.margin-top-40 {\n  margin-top: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.margin-bottom-40 {\n  margin-top: 40px; }\n\n.padding-top-41 {\n  padding-top: 41px; }\n\n.pt-41 {\n  padding-top: 41px; }\n\n.margin-top-41 {\n  margin-top: 41px; }\n\n.ml-41 {\n  margin-left: 41px; }\n\n.mt-41 {\n  margin-top: 41px; }\n\n.margin-bottom-41 {\n  margin-top: 41px; }\n\n.padding-top-42 {\n  padding-top: 42px; }\n\n.pt-42 {\n  padding-top: 42px; }\n\n.margin-top-42 {\n  margin-top: 42px; }\n\n.ml-42 {\n  margin-left: 42px; }\n\n.mt-42 {\n  margin-top: 42px; }\n\n.margin-bottom-42 {\n  margin-top: 42px; }\n\n.padding-top-43 {\n  padding-top: 43px; }\n\n.pt-43 {\n  padding-top: 43px; }\n\n.margin-top-43 {\n  margin-top: 43px; }\n\n.ml-43 {\n  margin-left: 43px; }\n\n.mt-43 {\n  margin-top: 43px; }\n\n.margin-bottom-43 {\n  margin-top: 43px; }\n\n.padding-top-44 {\n  padding-top: 44px; }\n\n.pt-44 {\n  padding-top: 44px; }\n\n.margin-top-44 {\n  margin-top: 44px; }\n\n.ml-44 {\n  margin-left: 44px; }\n\n.mt-44 {\n  margin-top: 44px; }\n\n.margin-bottom-44 {\n  margin-top: 44px; }\n\n.padding-top-45 {\n  padding-top: 45px; }\n\n.pt-45 {\n  padding-top: 45px; }\n\n.margin-top-45 {\n  margin-top: 45px; }\n\n.ml-45 {\n  margin-left: 45px; }\n\n.mt-45 {\n  margin-top: 45px; }\n\n.margin-bottom-45 {\n  margin-top: 45px; }\n\n.padding-top-46 {\n  padding-top: 46px; }\n\n.pt-46 {\n  padding-top: 46px; }\n\n.margin-top-46 {\n  margin-top: 46px; }\n\n.ml-46 {\n  margin-left: 46px; }\n\n.mt-46 {\n  margin-top: 46px; }\n\n.margin-bottom-46 {\n  margin-top: 46px; }\n\n.padding-top-47 {\n  padding-top: 47px; }\n\n.pt-47 {\n  padding-top: 47px; }\n\n.margin-top-47 {\n  margin-top: 47px; }\n\n.ml-47 {\n  margin-left: 47px; }\n\n.mt-47 {\n  margin-top: 47px; }\n\n.margin-bottom-47 {\n  margin-top: 47px; }\n\n.padding-top-48 {\n  padding-top: 48px; }\n\n.pt-48 {\n  padding-top: 48px; }\n\n.margin-top-48 {\n  margin-top: 48px; }\n\n.ml-48 {\n  margin-left: 48px; }\n\n.mt-48 {\n  margin-top: 48px; }\n\n.margin-bottom-48 {\n  margin-top: 48px; }\n\n.padding-top-49 {\n  padding-top: 49px; }\n\n.pt-49 {\n  padding-top: 49px; }\n\n.margin-top-49 {\n  margin-top: 49px; }\n\n.ml-49 {\n  margin-left: 49px; }\n\n.mt-49 {\n  margin-top: 49px; }\n\n.margin-bottom-49 {\n  margin-top: 49px; }\n\n.padding-top-50 {\n  padding-top: 50px; }\n\n.pt-50 {\n  padding-top: 50px; }\n\n.margin-top-50 {\n  margin-top: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.margin-bottom-50 {\n  margin-top: 50px; }\n\n.padding-top-51 {\n  padding-top: 51px; }\n\n.pt-51 {\n  padding-top: 51px; }\n\n.margin-top-51 {\n  margin-top: 51px; }\n\n.ml-51 {\n  margin-left: 51px; }\n\n.mt-51 {\n  margin-top: 51px; }\n\n.margin-bottom-51 {\n  margin-top: 51px; }\n\n.padding-top-52 {\n  padding-top: 52px; }\n\n.pt-52 {\n  padding-top: 52px; }\n\n.margin-top-52 {\n  margin-top: 52px; }\n\n.ml-52 {\n  margin-left: 52px; }\n\n.mt-52 {\n  margin-top: 52px; }\n\n.margin-bottom-52 {\n  margin-top: 52px; }\n\n.padding-top-53 {\n  padding-top: 53px; }\n\n.pt-53 {\n  padding-top: 53px; }\n\n.margin-top-53 {\n  margin-top: 53px; }\n\n.ml-53 {\n  margin-left: 53px; }\n\n.mt-53 {\n  margin-top: 53px; }\n\n.margin-bottom-53 {\n  margin-top: 53px; }\n\n.padding-top-54 {\n  padding-top: 54px; }\n\n.pt-54 {\n  padding-top: 54px; }\n\n.margin-top-54 {\n  margin-top: 54px; }\n\n.ml-54 {\n  margin-left: 54px; }\n\n.mt-54 {\n  margin-top: 54px; }\n\n.margin-bottom-54 {\n  margin-top: 54px; }\n\n.padding-top-55 {\n  padding-top: 55px; }\n\n.pt-55 {\n  padding-top: 55px; }\n\n.margin-top-55 {\n  margin-top: 55px; }\n\n.ml-55 {\n  margin-left: 55px; }\n\n.mt-55 {\n  margin-top: 55px; }\n\n.margin-bottom-55 {\n  margin-top: 55px; }\n\n.padding-top-56 {\n  padding-top: 56px; }\n\n.pt-56 {\n  padding-top: 56px; }\n\n.margin-top-56 {\n  margin-top: 56px; }\n\n.ml-56 {\n  margin-left: 56px; }\n\n.mt-56 {\n  margin-top: 56px; }\n\n.margin-bottom-56 {\n  margin-top: 56px; }\n\n.padding-top-57 {\n  padding-top: 57px; }\n\n.pt-57 {\n  padding-top: 57px; }\n\n.margin-top-57 {\n  margin-top: 57px; }\n\n.ml-57 {\n  margin-left: 57px; }\n\n.mt-57 {\n  margin-top: 57px; }\n\n.margin-bottom-57 {\n  margin-top: 57px; }\n\n.padding-top-58 {\n  padding-top: 58px; }\n\n.pt-58 {\n  padding-top: 58px; }\n\n.margin-top-58 {\n  margin-top: 58px; }\n\n.ml-58 {\n  margin-left: 58px; }\n\n.mt-58 {\n  margin-top: 58px; }\n\n.margin-bottom-58 {\n  margin-top: 58px; }\n\n.padding-top-59 {\n  padding-top: 59px; }\n\n.pt-59 {\n  padding-top: 59px; }\n\n.margin-top-59 {\n  margin-top: 59px; }\n\n.ml-59 {\n  margin-left: 59px; }\n\n.mt-59 {\n  margin-top: 59px; }\n\n.margin-bottom-59 {\n  margin-top: 59px; }\n\n.padding-top-60 {\n  padding-top: 60px; }\n\n.pt-60 {\n  padding-top: 60px; }\n\n.margin-top-60 {\n  margin-top: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.margin-bottom-60 {\n  margin-top: 60px; }\n\n.padding-top-61 {\n  padding-top: 61px; }\n\n.pt-61 {\n  padding-top: 61px; }\n\n.margin-top-61 {\n  margin-top: 61px; }\n\n.ml-61 {\n  margin-left: 61px; }\n\n.mt-61 {\n  margin-top: 61px; }\n\n.margin-bottom-61 {\n  margin-top: 61px; }\n\n.padding-top-62 {\n  padding-top: 62px; }\n\n.pt-62 {\n  padding-top: 62px; }\n\n.margin-top-62 {\n  margin-top: 62px; }\n\n.ml-62 {\n  margin-left: 62px; }\n\n.mt-62 {\n  margin-top: 62px; }\n\n.margin-bottom-62 {\n  margin-top: 62px; }\n\n.padding-top-63 {\n  padding-top: 63px; }\n\n.pt-63 {\n  padding-top: 63px; }\n\n.margin-top-63 {\n  margin-top: 63px; }\n\n.ml-63 {\n  margin-left: 63px; }\n\n.mt-63 {\n  margin-top: 63px; }\n\n.margin-bottom-63 {\n  margin-top: 63px; }\n\n.padding-top-64 {\n  padding-top: 64px; }\n\n.pt-64 {\n  padding-top: 64px; }\n\n.margin-top-64 {\n  margin-top: 64px; }\n\n.ml-64 {\n  margin-left: 64px; }\n\n.mt-64 {\n  margin-top: 64px; }\n\n.margin-bottom-64 {\n  margin-top: 64px; }\n\n.padding-top-65 {\n  padding-top: 65px; }\n\n.pt-65 {\n  padding-top: 65px; }\n\n.margin-top-65 {\n  margin-top: 65px; }\n\n.ml-65 {\n  margin-left: 65px; }\n\n.mt-65 {\n  margin-top: 65px; }\n\n.margin-bottom-65 {\n  margin-top: 65px; }\n\n.padding-top-66 {\n  padding-top: 66px; }\n\n.pt-66 {\n  padding-top: 66px; }\n\n.margin-top-66 {\n  margin-top: 66px; }\n\n.ml-66 {\n  margin-left: 66px; }\n\n.mt-66 {\n  margin-top: 66px; }\n\n.margin-bottom-66 {\n  margin-top: 66px; }\n\n.padding-top-67 {\n  padding-top: 67px; }\n\n.pt-67 {\n  padding-top: 67px; }\n\n.margin-top-67 {\n  margin-top: 67px; }\n\n.ml-67 {\n  margin-left: 67px; }\n\n.mt-67 {\n  margin-top: 67px; }\n\n.margin-bottom-67 {\n  margin-top: 67px; }\n\n.padding-top-68 {\n  padding-top: 68px; }\n\n.pt-68 {\n  padding-top: 68px; }\n\n.margin-top-68 {\n  margin-top: 68px; }\n\n.ml-68 {\n  margin-left: 68px; }\n\n.mt-68 {\n  margin-top: 68px; }\n\n.margin-bottom-68 {\n  margin-top: 68px; }\n\n.padding-top-69 {\n  padding-top: 69px; }\n\n.pt-69 {\n  padding-top: 69px; }\n\n.margin-top-69 {\n  margin-top: 69px; }\n\n.ml-69 {\n  margin-left: 69px; }\n\n.mt-69 {\n  margin-top: 69px; }\n\n.margin-bottom-69 {\n  margin-top: 69px; }\n\n.padding-top-70 {\n  padding-top: 70px; }\n\n.pt-70 {\n  padding-top: 70px; }\n\n.margin-top-70 {\n  margin-top: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.margin-bottom-70 {\n  margin-top: 70px; }\n\n.padding-top-71 {\n  padding-top: 71px; }\n\n.pt-71 {\n  padding-top: 71px; }\n\n.margin-top-71 {\n  margin-top: 71px; }\n\n.ml-71 {\n  margin-left: 71px; }\n\n.mt-71 {\n  margin-top: 71px; }\n\n.margin-bottom-71 {\n  margin-top: 71px; }\n\n.padding-top-72 {\n  padding-top: 72px; }\n\n.pt-72 {\n  padding-top: 72px; }\n\n.margin-top-72 {\n  margin-top: 72px; }\n\n.ml-72 {\n  margin-left: 72px; }\n\n.mt-72 {\n  margin-top: 72px; }\n\n.margin-bottom-72 {\n  margin-top: 72px; }\n\n.padding-top-73 {\n  padding-top: 73px; }\n\n.pt-73 {\n  padding-top: 73px; }\n\n.margin-top-73 {\n  margin-top: 73px; }\n\n.ml-73 {\n  margin-left: 73px; }\n\n.mt-73 {\n  margin-top: 73px; }\n\n.margin-bottom-73 {\n  margin-top: 73px; }\n\n.padding-top-74 {\n  padding-top: 74px; }\n\n.pt-74 {\n  padding-top: 74px; }\n\n.margin-top-74 {\n  margin-top: 74px; }\n\n.ml-74 {\n  margin-left: 74px; }\n\n.mt-74 {\n  margin-top: 74px; }\n\n.margin-bottom-74 {\n  margin-top: 74px; }\n\n.padding-top-75 {\n  padding-top: 75px; }\n\n.pt-75 {\n  padding-top: 75px; }\n\n.margin-top-75 {\n  margin-top: 75px; }\n\n.ml-75 {\n  margin-left: 75px; }\n\n.mt-75 {\n  margin-top: 75px; }\n\n.margin-bottom-75 {\n  margin-top: 75px; }\n\n.padding-top-76 {\n  padding-top: 76px; }\n\n.pt-76 {\n  padding-top: 76px; }\n\n.margin-top-76 {\n  margin-top: 76px; }\n\n.ml-76 {\n  margin-left: 76px; }\n\n.mt-76 {\n  margin-top: 76px; }\n\n.margin-bottom-76 {\n  margin-top: 76px; }\n\n.padding-top-77 {\n  padding-top: 77px; }\n\n.pt-77 {\n  padding-top: 77px; }\n\n.margin-top-77 {\n  margin-top: 77px; }\n\n.ml-77 {\n  margin-left: 77px; }\n\n.mt-77 {\n  margin-top: 77px; }\n\n.margin-bottom-77 {\n  margin-top: 77px; }\n\n.padding-top-78 {\n  padding-top: 78px; }\n\n.pt-78 {\n  padding-top: 78px; }\n\n.margin-top-78 {\n  margin-top: 78px; }\n\n.ml-78 {\n  margin-left: 78px; }\n\n.mt-78 {\n  margin-top: 78px; }\n\n.margin-bottom-78 {\n  margin-top: 78px; }\n\n.padding-top-79 {\n  padding-top: 79px; }\n\n.pt-79 {\n  padding-top: 79px; }\n\n.margin-top-79 {\n  margin-top: 79px; }\n\n.ml-79 {\n  margin-left: 79px; }\n\n.mt-79 {\n  margin-top: 79px; }\n\n.margin-bottom-79 {\n  margin-top: 79px; }\n\n.padding-top-80 {\n  padding-top: 80px; }\n\n.pt-80 {\n  padding-top: 80px; }\n\n.margin-top-80 {\n  margin-top: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.margin-bottom-80 {\n  margin-top: 80px; }\n\n.padding-top-81 {\n  padding-top: 81px; }\n\n.pt-81 {\n  padding-top: 81px; }\n\n.margin-top-81 {\n  margin-top: 81px; }\n\n.ml-81 {\n  margin-left: 81px; }\n\n.mt-81 {\n  margin-top: 81px; }\n\n.margin-bottom-81 {\n  margin-top: 81px; }\n\n.padding-top-82 {\n  padding-top: 82px; }\n\n.pt-82 {\n  padding-top: 82px; }\n\n.margin-top-82 {\n  margin-top: 82px; }\n\n.ml-82 {\n  margin-left: 82px; }\n\n.mt-82 {\n  margin-top: 82px; }\n\n.margin-bottom-82 {\n  margin-top: 82px; }\n\n.padding-top-83 {\n  padding-top: 83px; }\n\n.pt-83 {\n  padding-top: 83px; }\n\n.margin-top-83 {\n  margin-top: 83px; }\n\n.ml-83 {\n  margin-left: 83px; }\n\n.mt-83 {\n  margin-top: 83px; }\n\n.margin-bottom-83 {\n  margin-top: 83px; }\n\n.padding-top-84 {\n  padding-top: 84px; }\n\n.pt-84 {\n  padding-top: 84px; }\n\n.margin-top-84 {\n  margin-top: 84px; }\n\n.ml-84 {\n  margin-left: 84px; }\n\n.mt-84 {\n  margin-top: 84px; }\n\n.margin-bottom-84 {\n  margin-top: 84px; }\n\n.padding-top-85 {\n  padding-top: 85px; }\n\n.pt-85 {\n  padding-top: 85px; }\n\n.margin-top-85 {\n  margin-top: 85px; }\n\n.ml-85 {\n  margin-left: 85px; }\n\n.mt-85 {\n  margin-top: 85px; }\n\n.margin-bottom-85 {\n  margin-top: 85px; }\n\n.padding-top-86 {\n  padding-top: 86px; }\n\n.pt-86 {\n  padding-top: 86px; }\n\n.margin-top-86 {\n  margin-top: 86px; }\n\n.ml-86 {\n  margin-left: 86px; }\n\n.mt-86 {\n  margin-top: 86px; }\n\n.margin-bottom-86 {\n  margin-top: 86px; }\n\n.padding-top-87 {\n  padding-top: 87px; }\n\n.pt-87 {\n  padding-top: 87px; }\n\n.margin-top-87 {\n  margin-top: 87px; }\n\n.ml-87 {\n  margin-left: 87px; }\n\n.mt-87 {\n  margin-top: 87px; }\n\n.margin-bottom-87 {\n  margin-top: 87px; }\n\n.padding-top-88 {\n  padding-top: 88px; }\n\n.pt-88 {\n  padding-top: 88px; }\n\n.margin-top-88 {\n  margin-top: 88px; }\n\n.ml-88 {\n  margin-left: 88px; }\n\n.mt-88 {\n  margin-top: 88px; }\n\n.margin-bottom-88 {\n  margin-top: 88px; }\n\n.padding-top-89 {\n  padding-top: 89px; }\n\n.pt-89 {\n  padding-top: 89px; }\n\n.margin-top-89 {\n  margin-top: 89px; }\n\n.ml-89 {\n  margin-left: 89px; }\n\n.mt-89 {\n  margin-top: 89px; }\n\n.margin-bottom-89 {\n  margin-top: 89px; }\n\n.padding-top-90 {\n  padding-top: 90px; }\n\n.pt-90 {\n  padding-top: 90px; }\n\n.margin-top-90 {\n  margin-top: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.margin-bottom-90 {\n  margin-top: 90px; }\n\n.padding-top-91 {\n  padding-top: 91px; }\n\n.pt-91 {\n  padding-top: 91px; }\n\n.margin-top-91 {\n  margin-top: 91px; }\n\n.ml-91 {\n  margin-left: 91px; }\n\n.mt-91 {\n  margin-top: 91px; }\n\n.margin-bottom-91 {\n  margin-top: 91px; }\n\n.padding-top-92 {\n  padding-top: 92px; }\n\n.pt-92 {\n  padding-top: 92px; }\n\n.margin-top-92 {\n  margin-top: 92px; }\n\n.ml-92 {\n  margin-left: 92px; }\n\n.mt-92 {\n  margin-top: 92px; }\n\n.margin-bottom-92 {\n  margin-top: 92px; }\n\n.padding-top-93 {\n  padding-top: 93px; }\n\n.pt-93 {\n  padding-top: 93px; }\n\n.margin-top-93 {\n  margin-top: 93px; }\n\n.ml-93 {\n  margin-left: 93px; }\n\n.mt-93 {\n  margin-top: 93px; }\n\n.margin-bottom-93 {\n  margin-top: 93px; }\n\n.padding-top-94 {\n  padding-top: 94px; }\n\n.pt-94 {\n  padding-top: 94px; }\n\n.margin-top-94 {\n  margin-top: 94px; }\n\n.ml-94 {\n  margin-left: 94px; }\n\n.mt-94 {\n  margin-top: 94px; }\n\n.margin-bottom-94 {\n  margin-top: 94px; }\n\n.padding-top-95 {\n  padding-top: 95px; }\n\n.pt-95 {\n  padding-top: 95px; }\n\n.margin-top-95 {\n  margin-top: 95px; }\n\n.ml-95 {\n  margin-left: 95px; }\n\n.mt-95 {\n  margin-top: 95px; }\n\n.margin-bottom-95 {\n  margin-top: 95px; }\n\n.padding-top-96 {\n  padding-top: 96px; }\n\n.pt-96 {\n  padding-top: 96px; }\n\n.margin-top-96 {\n  margin-top: 96px; }\n\n.ml-96 {\n  margin-left: 96px; }\n\n.mt-96 {\n  margin-top: 96px; }\n\n.margin-bottom-96 {\n  margin-top: 96px; }\n\n.padding-top-97 {\n  padding-top: 97px; }\n\n.pt-97 {\n  padding-top: 97px; }\n\n.margin-top-97 {\n  margin-top: 97px; }\n\n.ml-97 {\n  margin-left: 97px; }\n\n.mt-97 {\n  margin-top: 97px; }\n\n.margin-bottom-97 {\n  margin-top: 97px; }\n\n.padding-top-98 {\n  padding-top: 98px; }\n\n.pt-98 {\n  padding-top: 98px; }\n\n.margin-top-98 {\n  margin-top: 98px; }\n\n.ml-98 {\n  margin-left: 98px; }\n\n.mt-98 {\n  margin-top: 98px; }\n\n.margin-bottom-98 {\n  margin-top: 98px; }\n\n.padding-top-99 {\n  padding-top: 99px; }\n\n.pt-99 {\n  padding-top: 99px; }\n\n.margin-top-99 {\n  margin-top: 99px; }\n\n.ml-99 {\n  margin-left: 99px; }\n\n.mt-99 {\n  margin-top: 99px; }\n\n.margin-bottom-99 {\n  margin-top: 99px; }\n\n.padding-top-100 {\n  padding-top: 100px; }\n\n.pt-100 {\n  padding-top: 100px; }\n\n.margin-top-100 {\n  margin-top: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.margin-bottom-100 {\n  margin-top: 100px; }\n\n/*for targetting small screens */\n\n.plp-view_container {\n  position: relative; }\n\n.plp-view_container .plp-container-grid {\n    margin: 0 auto;\n    width: 964px; }\n\n@media (max-width: 768px) {\n      .plp-view_container .plp-container-grid {\n        width: 100% !important; } }\n\n.plp-view_container b {\n    font-size: 14px;\n    line-height: 16px; }\n\n.no-category {\n  margin-top: 24px !important; }\n\n.plp-products-container.col-md-9 {\n  float: left;\n  max-width: 764px !important;\n  padding: 0 !important; }\n\n@media (max-width: 768px) {\n    .plp-products-container.col-md-9 {\n      padding-top: 0.35em;\n      max-width: 100% !important; } }\n\n.heading {\n  border-bottom: solid 1px #cecece;\n  margin-top: 28px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly; }\n\n.heading .content-inline-block {\n    display: inline-block;\n    width: 49%;\n    font-size: 16px;\n    overflow: hidden;\n    color: #000000; }\n\n.heading h2 {\n    text-transform: uppercase;\n    color: #686873;\n    line-height: 30px;\n    font-weight: 500;\n    font-style: normal; }\n\n.heading h2 a {\n      color: #000000 !important; }\n\n.heading .viewAllProducts {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.container-display-none {\n  display: none; }\n\n.container-display-block {\n  display: block; }\n\n.no-padding {\n  padding: 0px !important; }\n\n.col-md-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 79%;\n          flex: 0 0 79%;\n  max-width: 78%; }\n\n@media screen and (max-width: 768px) {\n  .col-md-9 {\n    -webkit-box-flex: 0 !important;\n        -ms-flex: 0 0 100% !important;\n            flex: 0 0 100% !important;\n    max-width: 100% !important;\n    margin-top: 0px !important; }\n  .category-main {\n    display: block !important; }\n    .category-main h1 {\n      font-size: 14px;\n      padding: 10px;\n      margin: 0;\n      color: #333;\n      font-weight: bold; }\n      .category-main h1 span {\n        font-size: 15px !important; } }\n\n@media screen and (max-width: 979px) {\n  .facets {\n    display: none; } }\n\n.facets.col-md-3 {\n  min-height: 610px;\n  float: left;\n  max-width: 194px;\n  box-sizing: content-box;\n  padding: 0px 6px 0 0; }\n\n.viewAllProducts a {\n  float: right;\n  text-decoration: underline !important; }\n\n.category-main {\n  display: none; }\n\n.col75 {\n  width: 100%; }\n\n.col25 {\n  width: 40%; }\n\n.col25 .page-items {\n    float: right; }\n\n.pager_top app-pager .rowCompts {\n  top: 25px; }\n\n.page_btm {\n  display: block;\n  margin: 20px 0;\n  height: 45px; }\n\n.page_btm app-pager .paginations {\n    height: 55px; }\n\n.page_btm app-pager .pagination {\n    background-color: #ffffff;\n    margin-right: 30px;\n    padding: 6px 0 4px 0; }\n\n.page_btm app-pager .pagination li {\n      height: 19px;\n      padding-top: 3px; }\n\n@media screen and (max-width: 768px) {\n      .page_btm app-pager .pagination {\n        border-top: 1px solid #f1f1f1;\n        border-bottom: 1px solid #f1f1f1;\n        margin-top: 20px;\n        padding: 0 15px; } }\n\n@media screen and (max-width: 768px) {\n  .heading .content-inline-block:first-child {\n    width: 39%;\n    font-size: 11px; }\n  .heading .content-inline-block:last-child {\n    width: 59%;\n    font-size: 11px; } }\n\napp-filter {\n  height: 100%; }\n\n#qvContent:hover {\n  cursor: pointer; }\n\n.FR-plp-prod-price {\n  color: #000000; }\n\n.plp-container-load-block {\n  position: absolute;\n  top: 0;\n  margin: 0 auto;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #ffffff;\n  z-index: 99999;\n  padding: 30px 0;\n  min-height: 200px;\n  height: 100%; }\n\n.plp-container-load-block .b2c-title {\n    position: absolute;\n    top: 5%;\n    left: 45%;\n    text-transform: lowercase;\n    font-size: 14px !important; }\n\n.plp-container-load-block .b2c-title::before {\n      content: \"\";\n      background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 width%3D%2220px%22 height%3D%2220px%22 viewBox%3D%220 0 20 20%22 enable-background%3D%22new 0 0 20 20%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cg%3E%0D%09%09%3Cpath fill%3D%22%23231F20%22 d%3D%22M11.049%2C5.674c0%2C0%2C0.249%2C1.261%2C1.031%2C2.1c0.557-0.593%2C1.285-1.486%2C1.439-2.238%0D%09%09%09c0.436-2.125-1.104-3.524-2.118-4.196c3.717%2C0.6%2C6.652%2C3.535%2C7.253%2C7.252c-0.672-1.014-2.072-2.554-4.197-2.119%0D%09%09%09c-0.751%2C0.154-1.644%2C0.882-2.237%2C1.44c0.838%2C0.782%2C2.1%2C1.031%2C2.1%2C1.031c0.68%2C0.167%2C1.242%2C0.25%2C1.242%2C0.25%0D%09%09%09c1.792%2C0.318%2C4.029%2C0.647%2C4.433%2C0.706C19.941%2C4.457%2C15.537%2C0.053%2C10.092%2C0c0.059%2C0.402%2C0.389%2C2.64%2C0.707%2C4.432%0D%09%09%09C10.799%2C4.432%2C10.882%2C4.995%2C11.049%2C5.674z%22%2F%3E%0D%09%09%3Cpath fill%3D%22%23231F20%22 d%3D%22M8.938%2C14.326c0%2C0-0.25-1.262-1.032-2.1c-0.557%2C0.594-1.286%2C1.486-1.439%2C2.238%0D%09%09%09c-0.435%2C2.123%2C1.104%2C3.523%2C2.119%2C4.195c-3.718-0.6-6.653-3.535-7.252-7.252c0.671%2C1.014%2C2.071%2C2.553%2C4.196%2C2.119%0D%09%09%09c0.751-0.154%2C1.644-0.883%2C2.238-1.441c-0.838-0.781-2.1-1.031-2.1-1.031c-0.68-0.166-1.242-0.25-1.242-0.25%0D%09%09%09c-1.792-0.318-4.03-0.647-4.432-0.706C0.046%2C15.543%2C4.45%2C19.947%2C9.895%2C20c-0.059-0.402-0.388-2.639-0.706-4.432%0D%09%09%09C9.188%2C15.568%2C9.104%2C15.006%2C8.938%2C14.326z%22%2F%3E%0D%09%09%3Cpath fill%3D%22%23231F20%22 d%3D%22M5.667%2C8.945c0%2C0%2C1.261-0.249%2C2.1-1.031c-0.594-0.558-1.486-1.286-2.238-1.44%0D%09%09%09C3.405%2C6.039%2C2.005%2C7.579%2C1.333%2C8.593c0.6-3.718%2C3.535-6.653%2C7.253-7.252C7.572%2C2.012%2C6.032%2C3.412%2C6.467%2C5.536%0D%09%09%09C6.621%2C6.288%2C7.35%2C7.181%2C7.907%2C7.774c0.782-0.838%2C1.032-2.1%2C1.032-2.1c0.166-0.68%2C0.25-1.242%2C0.25-1.242%0D%09%09%09C9.507%2C2.64%2C9.836%2C0.402%2C9.895%2C0C4.45%2C0.053%2C0.046%2C4.457-0.007%2C9.901c0.402-0.059%2C2.64-0.388%2C4.432-0.706%0D%09%09%09C4.425%2C9.195%2C4.988%2C9.112%2C5.667%2C8.945z%22%2F%3E%0D%09%09%3Cpath fill%3D%22%23231F20%22 d%3D%22M14.319%2C11.055c0%2C0-1.262%2C0.25-2.1%2C1.031c0.594%2C0.559%2C1.486%2C1.287%2C2.238%2C1.439%0D%09%09%09c2.124%2C0.436%2C3.523-1.104%2C4.196-2.117c-0.601%2C3.717-3.536%2C6.652-7.253%2C7.252c1.014-0.672%2C2.554-2.072%2C2.118-4.195%0D%09%09%09c-0.154-0.752-0.883-1.645-1.439-2.238c-0.782%2C0.838-1.031%2C2.1-1.031%2C2.1c-0.167%2C0.68-0.25%2C1.242-0.25%2C1.242%0D%09%09%09C10.48%2C17.361%2C10.15%2C19.598%2C10.092%2C20c5.445-0.053%2C9.85-4.457%2C9.902-9.901c-0.403%2C0.059-2.641%2C0.388-4.433%2C0.706%0D%09%09%09C15.562%2C10.805%2C14.999%2C10.889%2C14.319%2C11.055z%22%2F%3E%0D%09%3C%2Fg%3E%0D%09%3Ccircle fill%3D%22%23231F20%22 cx%3D%229.993%22 cy%3D%2210%22 r%3D%221.404%22%2F%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\") no-repeat center center;\n      background-size: 20px 20px;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      transform: translateZ(0) scale(1, 1);\n      -webkit-transform: translateZ(0) scale(1, 1);\n      -ms-transform: translateZ(0) scale(1, 1);\n      transform: translateZ(0) scale(1, 1);\n      -webkit-animation: spin 2.5s linear infinite;\n      animation: spin 2.5s linear infinite;\n      outline: 1px solid transparent; }\n\n.plp-container-load-block .b2c-title .loading-txt {\n      float: right !important;\n      padding-left: 5px !important;\n      font-size: 14px !important;\n      padding-top: 2px !important; }\n\n.plp-overlay {\n  position: unset !important;\n  min-height: 400px; }\n\n.category-top-bar {\n  margin-top: 24px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.category-top-bar h2 {\n    float: left;\n    font-size: 14px !important;\n    line-height: 30px !important;\n    color: #666;\n    font-weight: 600 !important;\n    text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/categorylanding-page/categorylanding-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/categorylanding-page/categorylanding-page.component.ts ***!
  \************************************************************************/
/*! exports provided: CategorylandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylandingPageComponent", function() { return CategorylandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _categorylanding_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorylanding-page.service */ "./src/app/categorylanding-page/categorylanding-page.service.ts");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/pager.service */ "./src/app/services/pager.service.ts");
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/singleton.service */ "./src/app/services/singleton.service.ts");
/* harmony import */ var _services_meta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/meta.service */ "./src/app/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CategorylandingPageComponent = /** @class */ (function () {
    function CategorylandingPageComponent(location, router, route, singletonServ, titleService, mbPagerService, categoryServ, metaService, renderer) {
        this.location = location;
        this.router = router;
        this.route = route;
        this.singletonServ = singletonServ;
        this.titleService = titleService;
        this.mbPagerService = mbPagerService;
        this.categoryServ = categoryServ;
        this.metaService = metaService;
        this.renderer = renderer;
        this.breadcrumb = [];
        this.pager = {};
        this.pageSize = 12;
        this.paths = "";
        this.catalogSpecific = false;
        this.displayGrid = true;
        this.viewAllProducts = false;
        this.pageLoad = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    CategorylandingPageComponent.prototype.fetchCatalogProducts = function () {
        var _this = this;
        this.navigationSubscription = this.route.params.subscribe(function (params) {
            _this.routeParams = params;
            if (params.categoryId) {
                var queryStatus = _this.route.snapshot.queryParamMap.get("viewAllCat");
                var cookieSearch = _this.singletonServ.getCookie("searchId");
                var prdId = "/search?query=:relevance:category:" + params.categoryId;
                _this.catId = params.categoryId;
                if (cookieSearch.length != 0) {
                    var data = JSON.parse(cookieSearch);
                    if (data.catId == params.productid) {
                        prdId = data.id;
                    }
                }
                _this.searchCatId = params.categoryId;
                _this.searchPrdId = prdId;
                if (queryStatus) {
                    _this.catalogSpecific = true;
                    _this.freshRelevanceSpecific = false;
                    var prdId_1 = "/search?query=:relevance:category:" + params.categoryId;
                    _this.getCategoryData(prdId_1, true, _this.pageSize);
                }
                else {
                    _this.wrapFRslots();
                    _this.freshRelevanceSpecific = true;
                    _this.pageLoad = true;
                }
            }
            else if (params.productid) {
                var cookieSearch = _this.singletonServ.getCookie("searchId");
                var prdId = "/search?query=:relevance:category:" + params.productid;
                _this.catId = params.productid;
                if (cookieSearch.length != 0) {
                    var data = JSON.parse(cookieSearch);
                    if (data.catId == params.productid) {
                        prdId = data.id;
                    }
                }
                _this.searchPrdId = prdId;
                _this.getCategoryData(prdId, true, _this.pageSize);
            }
            if (params.categoryname) {
                _this.catalogSpecific = true;
            }
        });
    };
    CategorylandingPageComponent.prototype.constructCatBanner = function () {
        var _catData = this.singletonServ.menudata;
        if (_catData) {
            var splitPath = window.location.pathname.split("/");
            var _catId = splitPath[splitPath.length - 1];
            var _breadCrumb = this.findCat(_catData, _catId);
            if (_breadCrumb) {
                if (_breadCrumb[1]) {
                    if (!_breadCrumb[1].isL3) {
                        _breadCrumb.splice(1, 1);
                        this.breadcrumb = _breadCrumb;
                    }
                    else {
                        this.breadcrumb = _breadCrumb;
                    }
                }
                else {
                    this.breadcrumb = _breadCrumb;
                }
            }
            for (var _i = 0, _catData_1 = _catData; _i < _catData_1.length; _i++) {
                var obj = _catData_1[_i];
                var result = this.getCatalogtree(obj, _catId);
                if (result) {
                    this.titleService.setTitle(result.titleName);
                    this.categorybanner = result;
                    break;
                }
            }
        }
    };
    CategorylandingPageComponent.prototype.wrapFRslots = function () {
        var that = this;
        var baseSite = this.singletonServ.catalogVersion;
        this.categoryServ.getStaticContent(baseSite.lngCode).subscribe(function (response) {
            if (response) {
                that.parentCategory.nativeElement.innerHTML = response.parentProductLandingPage.slotId;
                // that.parentCategory.nativeElement.insertAdjacentHTML('beforeend', response.parentProductLandingPage.slotId);
                // this.renderer.setProperty(this.parentCategory.nativeElement, 'innerHTML', response.parentProductLandingPage.slotId);
            }
        }, function (err) {
        });
    };
    CategorylandingPageComponent.prototype.ngOnInit = function () {
        var message = this.singletonServ.menudata;
        if (message) {
            this.constructCatBanner();
        }
        this.fetchCatalogProducts();
        this.metaService.createCanonicalURL();
    };
    CategorylandingPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.singletonServ.getMessage().subscribe(function (message) {
            if (message.catgories) {
                _this.menuData = message.catgories;
                _this.singletonServ.menudata = message.catgories;
                var splitPath = window.location.pathname.split("/");
                var _catId = splitPath[splitPath.length - 1];
                var _breadCrumb = _this.findCat(message.catgories, _catId);
                if (_breadCrumb) {
                    if (_breadCrumb[1]) {
                        if (!_breadCrumb[1].isL3) {
                            _breadCrumb.splice(1, 1);
                            _this.breadcrumb = _breadCrumb;
                        }
                        else {
                            _this.breadcrumb = _breadCrumb;
                        }
                    }
                    else {
                        _this.breadcrumb = _breadCrumb;
                    }
                }
                for (var _i = 0, _a = message.catgories; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    var result = _this.getCatalogtree(obj, _catId);
                    if (result) {
                        _this.titleService.setTitle(result.titleName);
                        _this.categorybanner = result;
                        break;
                    }
                }
            }
        });
        if (this.freshRelevanceSpecific) {
            var _element = document.querySelectorAll("#frProduct");
            this.totalProducts = _element.length;
        }
    };
    CategorylandingPageComponent.prototype.getCatalogtree = function (obj, targetId) {
        if (obj.id.toLowerCase() === targetId.toLowerCase()) {
            return obj;
        }
        if (obj.subcategories) {
            for (var _i = 0, _a = obj.subcategories; _i < _a.length; _i++) {
                var item = _a[_i];
                var check = this.getCatalogtree(item, targetId);
                if (check) {
                    return check;
                }
            }
        }
        return null;
    };
    CategorylandingPageComponent.prototype.findCat = function (array, id) {
        if (typeof array != "undefined") {
            for (var i = 0; i < array.length; i++) {
                if (array[i].id.toLowerCase() == id.toLowerCase()) {
                    return [array[i]];
                }
                var a = this.findCat(array[i].subcategories, id);
                if (a != null) {
                    a.unshift(array[i]);
                    return a;
                }
            }
        }
        return null;
    };
    /* category level call */
    CategorylandingPageComponent.prototype.onviewAllClick = function (event) {
        window.scrollTo(0, 0);
        this.freshRelevanceSpecific = false;
        var prdId = "/search?query=:relevance:category:" + this.catId;
        var pageSize = 123;
        this.catalogSpecific = true;
        this.pager = false;
        this.viewAllProducts = true;
        this.getCategoryData(prdId, true, pageSize);
    };
    CategorylandingPageComponent.prototype.fetchProductNextperPage = function (data) {
        var status = data.status;
        window.scrollTo(0, 0);
        if (!status) {
            var page = this.pagination.currentPage + 1;
            var prdId = "/search?query=:relevance:category:" + this.catId;
            var id = prdId + this.paths + "&currentPage=" + page;
            this.getCategoryData(id, false, this.pageSize);
        }
        else {
            var _pageNumber = this.pagination.currentPage - 1;
            var prdId = "/search?query=:relevance:category:" + this.catId;
            var id = prdId + this.paths + "&currentPage=" + _pageNumber;
            this.getCategoryData(id, false, this.pageSize);
        }
    };
    CategorylandingPageComponent.prototype.fetchProductperPage = function (data) {
        this.pageLoad = false;
        this.viewAllProducts = false;
        var pgNo = data["pageId"] - 1;
        var prdId = "/search?query=:relevance:category:" + this.catId;
        var id = prdId + this.paths + "&currentPage=" + pgNo;
        window.scrollTo(0, 0);
        this.getCategoryData(id, false, this.pageSize);
    };
    CategorylandingPageComponent.prototype.sortByCahnge = function () { };
    CategorylandingPageComponent.prototype.onViewAllProducts = function () {
        this.freshRelevanceSpecific = false;
        this.catalogSpecific = true;
        var productname = this.routeParams.productname;
        var categoryId = this.routeParams.categoryId;
        this.router.navigate(["store", productname, categoryId], {
            queryParams: { viewAllCat: true },
            queryParamsHandling: "merge"
        });
    };
    //swap products
    CategorylandingPageComponent.prototype.swapproducts = function (products, oldIndex, newIndex) {
        var temp = products[oldIndex];
        products[oldIndex] = products[newIndex];
        products[newIndex] = temp;
    };
    //category Related Call
    CategorylandingPageComponent.prototype.getCategoryData = function (id, facets, pageSize) {
        var _this = this;
        var that = this;
        var _searchId = {
            id: id,
            catId: this.searchCatId
        };
        this.singletonServ.setCookie("searchId", JSON.stringify(_searchId), 365);
        var indexArray = [];
        this.pageLoad = false;
        this.categoryLandingSubscription = this.categoryServ.getMBProduct(id, pageSize).subscribe(function (resp) {
            if (resp) {
            }
            else {
                _this.pageLoad = true;
            }
            _this.categoryResponse = resp;
            lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](resp["products"], function (value, i) {
                lodash__WEBPACK_IMPORTED_MODULE_4__["assignIn"](value, {
                    category: that.categorybanner,
                    redirectUrl: resp["keywordRedirectUrl"],
                    show: false,
                    id: i + 1
                });
                if (value.isDummy) {
                    value["currentIndex"] = i;
                    var obj = {
                        oldindex: i,
                        newIndex: 4
                    };
                    indexArray.push(obj);
                    AmpCa.utils.getHtmlServiceData({
                        auth: {
                            baseUrl: "https://c1.adis.ws",
                            id: value.code,
                            store: "moltonbrown",
                            templateName: "acc-template-card",
                            locale: "en-GB"
                        },
                        callback: function (data) {
                            lodash__WEBPACK_IMPORTED_MODULE_4__["assignIn"](value, { htmlData: data });
                        }
                    });
                }
            });
            var prodPaginator = resp["pagination"];
            _this.pagination = resp["pagination"];
            var products = resp["products"];
            if (indexArray.length >= 1) {
                lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](indexArray, function (value, i) {
                    that.swapproducts(products, value.oldindex, value.newIndex);
                });
            }
            _this.totalProducts = prodPaginator["totalResults"];
            _this.pagedItems = products;
            _this.activeProducts = products ? true : false;
            var _facetObj = {
                facets: resp["facets"],
                status: facets
            };
            _this.facetResponse = _facetObj;
            _this.pageLoad = true;
        }, function (err) {
            _this.pageLoad = true;
        });
    };
    //filters functions
    CategorylandingPageComponent.prototype.onShowFirstPage = function () {
        window.scrollTo(0, 0);
        this.pager = true;
        this.viewAllProducts = false;
        this.freshRelevanceSpecific = false;
        var prdId = "/search?query=:relevance:category:" + this.catId;
        var pageSize = 12;
        this.getCategoryData(prdId, true, pageSize);
    };
    CategorylandingPageComponent.prototype.onCheckRefineFacet = function () {
        this.openFacet = !this.openFacet;
    };
    CategorylandingPageComponent.prototype.onRefetchProducts = function (data) {
        var prdId = "/search?query=:relevance:category:" + this.catId;
        if (data.id.length == 0) {
            this.checkList = false;
        }
        else {
            this.checkList = true;
        }
        this.paths = data.id;
        this.searchPrdId = prdId + this.paths;
        this.getCategoryData(this.searchPrdId, false, 12);
    };
    CategorylandingPageComponent.prototype.onClearAll = function () {
        var prdId = "/search?query=:relevance:category:" + this.catId;
        this.getCategoryData(prdId, true, this.pageSize);
    };
    //tabs
    CategorylandingPageComponent.prototype.onUpdateFilterData = function (data) { };
    CategorylandingPageComponent.prototype.updateFilterData = function (event, valueData, i) { };
    CategorylandingPageComponent.prototype.onMbFilterByClick = function () { };
    CategorylandingPageComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
        if (this.categoryLandingSubscription) {
            this.categoryLandingSubscription.unsubscribe();
        }
    };
    CategorylandingPageComponent.prototype.sortByChange = function () { };
    CategorylandingPageComponent.prototype.onGridClick = function (data) {
        var _bol = data.status;
        if (_bol) {
            this.displayGrid = true;
        }
        else {
            this.displayGrid = false;
        }
        var _element = document.querySelectorAll("#frProduct");
        if (_element != null) {
            for (var i = 0; i < _element.length; i++) {
                if (!_bol) {
                    _element[i].classList.remove("col-md-4");
                    _element[i].classList.remove("col-sm-4");
                    _element[i].classList.remove("col-xs-6");
                    _element[i].classList.remove("col-xxs-6");
                    _element[i].classList.add("col-md-6");
                    _element[i].classList.add("col-sm-6");
                    _element[i].classList.add("col-xs-12");
                    _element[i].classList.add("col-xxs-12");
                }
                else {
                    _element[i].classList.remove("col-md-6");
                    _element[i].classList.remove("col-sm-6");
                    _element[i].classList.remove("col-xs-12");
                    _element[i].classList.remove("col-xxs-12");
                    _element[i].classList.add("col-md-4");
                    _element[i].classList.add("col-sm-4");
                    _element[i].classList.add("col-xs-6");
                    _element[i].classList.add("col-xxs-6");
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("facetTag"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CategorylandingPageComponent.prototype, "facetValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("parentCategory"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CategorylandingPageComponent.prototype, "parentCategory", void 0);
    CategorylandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-categorylanding-page",
            template: __webpack_require__(/*! ./categorylanding-page.component.html */ "./src/app/categorylanding-page/categorylanding-page.component.html"),
            styles: [__webpack_require__(/*! ./categorylanding-page.component.scss */ "./src/app/categorylanding-page/categorylanding-page.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_singleton_service__WEBPACK_IMPORTED_MODULE_7__["SingletonService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _services_pager_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"],
            _categorylanding_page_service__WEBPACK_IMPORTED_MODULE_5__["CategoryComponentService"],
            _services_meta_service__WEBPACK_IMPORTED_MODULE_8__["MetaService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], CategorylandingPageComponent);
    return CategorylandingPageComponent;
}());



/***/ }),

/***/ "./src/app/categorylanding-page/categorylanding-page.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/categorylanding-page/categorylanding-page.module.ts ***!
  \*********************************************************************/
/*! exports provided: CategorylandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylandingPageModule", function() { return CategorylandingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _categorylanding_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categorylanding-page.component */ "./src/app/categorylanding-page/categorylanding-page.component.ts");
/* harmony import */ var _categorybanner_categorybanner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorybanner/categorybanner.component */ "./src/app/categorylanding-page/categorybanner/categorybanner.component.ts");
/* harmony import */ var _component_mb_bread_crumb_mb_bread_crumb_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/mb-bread-crumb/mb-bread-crumb.module */ "./src/app/component/mb-bread-crumb/mb-bread-crumb.module.ts");
/* harmony import */ var _sort_type_sort_type_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sort-type/sort-type.module */ "./src/app/categorylanding-page/sort-type/sort-type.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.module */ "./src/app/categorylanding-page/product/product.module.ts");
/* harmony import */ var _filter_filter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter/filter.module */ "./src/app/categorylanding-page/filter/filter.module.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");
/* harmony import */ var _component_pager_page_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/pager/page.module */ "./src/app/component/pager/page.module.ts");
/* harmony import */ var _component_ngui_in_view_ngUiView_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/ngui-in-view/ngUiView.module */ "./src/app/component/ngui-in-view/ngUiView.module.ts");
/* harmony import */ var _loading_loading_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loading/loading.module */ "./src/app/loading/loading.module.ts");
/* harmony import */ var _pipe_sanitize_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pipe/sanitize.module */ "./src/app/pipe/sanitize.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: _categorylanding_page_component__WEBPACK_IMPORTED_MODULE_4__["CategorylandingPageComponent"], data: { title: 'Customers' } }
];
var CategorylandingPageModule = /** @class */ (function () {
    function CategorylandingPageModule() {
    }
    CategorylandingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _component_ngui_in_view_ngUiView_module__WEBPACK_IMPORTED_MODULE_12__["NgUiViewModule"],
                _component_pager_page_module__WEBPACK_IMPORTED_MODULE_11__["PageTypeModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_10__["NgxStarsModule"],
                _component_mb_bread_crumb_mb_bread_crumb_module__WEBPACK_IMPORTED_MODULE_6__["MbBreadCrumbModule"],
                _sort_type_sort_type_module__WEBPACK_IMPORTED_MODULE_7__["sortTypeModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"],
                _filter_filter_module__WEBPACK_IMPORTED_MODULE_9__["FilterModule"],
                _loading_loading_module__WEBPACK_IMPORTED_MODULE_13__["LoadingModule"],
                _pipe_sanitize_module__WEBPACK_IMPORTED_MODULE_14__["SanitizeHtmlPipeModule"]
            ],
            declarations: [
                _categorylanding_page_component__WEBPACK_IMPORTED_MODULE_4__["CategorylandingPageComponent"],
                _categorybanner_categorybanner_component__WEBPACK_IMPORTED_MODULE_5__["CategorybannerComponent"]
            ]
        })
    ], CategorylandingPageModule);
    return CategorylandingPageModule;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay-body\">\r\n    <div class=\"loading-backdrop overlay-bg-show\" >\r\n            <div class=\"b2c-title\">\r\n                    <span class=\"loading-txt\"> loading... </span> \r\n             </div> \r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loading/loading.component.scss":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay-body {\n  padding: 15px 14px;\n  -webkit-transition: all .5s linear;\n  transition: all .5s linear;\n  min-height: auto; }\n  .overlay-body .loading-backdrop {\n    background-color: #f6f6f6;\n    left: 0;\n    width: 100%;\n    position: absolute;\n    z-index: 555;\n    width: 100%;\n    margin: 0 auto;\n    top: 0;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
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

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.module.ts":
/*!*******************************************!*\
  !*** ./src/app/loading/loading.module.ts ***!
  \*******************************************/
/*! exports provided: LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.component */ "./src/app/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
            exports: [_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        })
    ], LoadingModule);
    return LoadingModule;
}());



/***/ })

}]);
//# sourceMappingURL=categorylanding-page-categorylanding-page-module.js.map
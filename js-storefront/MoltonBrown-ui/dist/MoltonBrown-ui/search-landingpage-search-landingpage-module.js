(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-landingpage-search-landingpage-module"],{

/***/ "./src/app/search-landingpage/search-landingpage.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/search-landingpage/search-landingpage.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"search-view-container container\">\r\n  <app-mb-bread-crumb [breadcrumb]=\"breadcrumb\" ></app-mb-bread-crumb>\r\n  <div *ngIf=\"pageLoad; else backdrop\">\r\n    <app-sort-type\r\n      [searchDisplay]=\"searchDisplay\"\r\n      [searchPrdId]=\"searchPrdId\"\r\n      [facets]=\"facets\"\r\n      [refineFacets]=\"refineFacets\"\r\n      [checkList]=\"checkList\"\r\n      (onGridToggle)=\"onGridClick($event)\"\r\n      (clearAll)=\"onClearAll()\"\r\n      (onSortByChange)=\"sortByChange()\"\r\n      (filterby)=\"onMbFilterByClick()\"\r\n      (updateFilterData)=\"updateFilterData($event)\"\r\n    >\r\n    </app-sort-type>\r\n    <div class=\"search-top-bar\"   \r\n    *ngIf=\"activeProducts\">\r\n    <div class=\"searchBy-filter\">\r\n        <h2>FILTER BY</h2>\r\n    </div>\r\n    <div class=\"search-cat-for\">\r\n        <div *ngIf=\"totalProducts !=0\">\r\n            <div\r\n              class=\"search-viewAllTop \"\r\n              style=\"width:80%;\"\r\n              *ngIf=\"catalogSpecific; else bestSellerBlock\"\r\n            >\r\n              <div class=\"freeTextShow\">\r\n                <span class=\"freeText-content\" *ngIf=\"spellingSuggestion\">\r\n                  Your search for&nbsp;\r\n                  <span>\r\n                    <span>&quot;{{ freeSearchText }}&quot;</span>\r\n                  </span>\r\n                  was adjusted to&nbsp;\r\n                  <span class=\"autoCorrect\">\r\n                    &quot;{{\r\n                      spellingSuggestion ? spellingSuggestion.suggestion : \"\"\r\n                    }}&quot;\r\n                  </span>\r\n                </span>\r\n              </div>\r\n              <h1 class=\"text-left\" style=\"width:100%;\" *ngIf=\"searchDisplay\">\r\n                Products found for\r\n                <span class=\"searchTerm\">\r\n                  <span class=\"searchTerm\">\r\n                    &quot;{{\r\n                      spellingSuggestion\r\n                        ? spellingSuggestion.suggestion\r\n                        : freeSearchText\r\n                    }}&quot;\r\n                  </span>\r\n                  <span>&nbsp;=&nbsp;{{ totalProducts }}</span>\r\n                </span>\r\n              </h1>\r\n            </div>\r\n            <ng-template #bestSellerBlock>\r\n              <h2 class=\"content-inline-block\">Bestsellers</h2>\r\n              <h2\r\n                class=\"content-inline-block viewAllProducts\"\r\n                *ngIf=\"categorybanner\"\r\n              >\r\n                <a (click)=\"onViewAllProducts()\">\r\n                  View All&nbsp;{{ categorybanner.name }}&nbsp;Products\r\n                </a>\r\n              </h2>\r\n            </ng-template>\r\n         </div>\r\n    </div>\r\n    <div class=\"search-pager\" *ngIf=\"pagination\">\r\n        <app-pager\r\n          [pagination]=\"pagination\"\r\n          [catalogSpecific]=\"catalogSpecific\"\r\n          [pager]=\"pager\"\r\n          [viewAllProducts]=\"viewAllProducts\"\r\n          (viewAll)=\"onviewAllClick($event)\"\r\n          (onShowFirstPage)=\"onShowFirstPage($event)\"\r\n          (productperPage)=\"fetchProductperPage($event)\"\r\n          (fetchperPage)=\"fetchProductNextperPage($event)\"\r\n        >\r\n        </app-pager>\r\n      </div>\r\n</div>\r\n    <section>\r\n      <div class=\"row search-container-grid\">\r\n        <!-- facet starts -->\r\n        <div\r\n          class=\"search-facets col-md-3 left-menu \"\r\n          [ngClass]=\"{\r\n            'container-display-block': catalogSpecific,\r\n            'container-display-none': !catalogSpecific\r\n          }\"\r\n        >\r\n          <app-filter\r\n            *ngIf=\"activeProducts\"\r\n            [facetResponse]=\"facetResponse\"\r\n            [searchPrdId]=\"searchPrdId\"\r\n            [searchDisplay]=\"true\"\r\n            (refetchProducts)=\"onRefetchProducts($event)\"\r\n            (clearParams)=\"onClearAll()\"\r\n          >\r\n          </app-filter>\r\n        </div>\r\n        <!-- facet ends -->\r\n\r\n        <div\r\n          class=\"search-products-container   col-sm-12 \"\r\n          [ngClass]=\"{\r\n            'col-md-9': catalogSpecific,\r\n            'col-md-12 no-padding': !catalogSpecific\r\n          }\"\r\n        >\r\n          <div *ngIf=\"totalProducts !=0\">\r\n            <app-product\r\n              [categoryResponse]=\"categoryResponse\"\r\n              [activeProducts]=\"activeProducts\"\r\n              [pagedItems]=\"pagedItems\"\r\n              [displayGrid]=\"displayGrid\"\r\n            >\r\n            </app-product>\r\n            <div class=\"search-page-btm\">\r\n            <app-pager\r\n              [pagination]=\"pagination\"\r\n              [catalogSpecific]=\"catalogSpecific\"\r\n              [pager]=\"pager\"\r\n              [viewAllProducts]=\"viewAllProducts\"\r\n              (viewAll)=\"onviewAllClick($event)\"\r\n              (onShowFirstPage)=\"onShowFirstPage($event)\"\r\n              (productperPage)=\"fetchProductperPage($event)\"\r\n              (fetchperPage)=\"fetchProductNextperPage($event)\"\r\n            ></app-pager>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"justify-content-center mt-15\" *ngIf=\"searchDisplay\">\r\n            <div class=\"searchResults\" *ngIf=\"!activeProducts\">\r\n              <h1>\r\n                Your search for&nbsp;<span class=\"searchTerm\"\r\n                  >&quot;{{ freeSearchText }}&quot;</span\r\n                >&nbsp;returned &nbsp;0&nbsp;results\r\n              </h1>\r\n              <br />\r\n              Please change your criteria or try one of the following\r\n              options:<br /><br />\r\n            </div>\r\n            <div class=\"showFav\">\r\n              <h2 class=\"customer\">\r\n                <div class=\"searchHeader\">Shop our Customer Favourites</div>\r\n              </h2>\r\n              <div #customerFav></div>\r\n            </div>\r\n            <div class=\"search-header needMoreHelp\">\r\n              <h3>Need more help?</h3>\r\n              <div class=\"search-header\">\r\n                You may be able to find the answer in our\r\n                <a routerLink=\"/store/faqs\"><u>FAQs and help</u></a>\r\n                pages or contact our customer services team on freephone: +44\r\n                (0)808 178 1188 or email us on\r\n                <a href=\"mailto:customerservice@moltonbrown.com\">\r\n                  <u>customerservice@moltonbrown.com</u>.\r\n                </a>\r\n                Our lines are open: 8am-8pm (UK Time) Monday to Friday, 10am-4pm\r\n                (UK Time) Saturday. We aim to respond to all messages and call\r\n                backs within 2 working days of receipt.<br /><br />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <ng-template #backdrop>\r\n    <div class=\"loading-backdrop search-landing-page-loader\">\r\n      <div class=\"b2c-title\">\r\n          <span class=\"loading-txt\"> loading... </span> \r\n        <!-- <img src=\"../../assets/imgs/loading-compass.svg\"> -->\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</main>\r\n\r\n<!-- modal -->\r\n<div class=\"modal\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-full\" role=\"document\">\r\n    <app-filter\r\n      [facetResponse]=\"facetResponse\"\r\n      [searchPrdId]=\"searchPrdId\"\r\n      [searchDisplay]=\"searchDisplay\"\r\n      [modal]=\"true\"\r\n      (clearParams)=\"onClearAll()\"\r\n      (refetchProducts)=\"onRefetchProducts($event)\"\r\n    >\r\n    </app-filter>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search-landingpage/search-landingpage.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/search-landingpage/search-landingpage.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Century Gothic';\n  src: url(\"/assets/fonts/Century/fonts/CENTURY.ttf\") format(\"ttf\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff2\") format(\"woff2\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff\") format(\"woff\"), url(\"/assets/fonts/Century/fonts/CENTURY.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Regular';\n  src: url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Bold';\n  src: url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Italic';\n  src: url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.svg\") format(\"svg\"); }\n\n.padding-top-1 {\n  padding-top: 1px; }\n\n.pt-1 {\n  padding-top: 1px; }\n\n.margin-top-1 {\n  margin-top: 1px; }\n\n.ml-1 {\n  margin-left: 1px; }\n\n.mt-1 {\n  margin-top: 1px; }\n\n.margin-bottom-1 {\n  margin-top: 1px; }\n\n.padding-top-2 {\n  padding-top: 2px; }\n\n.pt-2 {\n  padding-top: 2px; }\n\n.margin-top-2 {\n  margin-top: 2px; }\n\n.ml-2 {\n  margin-left: 2px; }\n\n.mt-2 {\n  margin-top: 2px; }\n\n.margin-bottom-2 {\n  margin-top: 2px; }\n\n.padding-top-3 {\n  padding-top: 3px; }\n\n.pt-3 {\n  padding-top: 3px; }\n\n.margin-top-3 {\n  margin-top: 3px; }\n\n.ml-3 {\n  margin-left: 3px; }\n\n.mt-3 {\n  margin-top: 3px; }\n\n.margin-bottom-3 {\n  margin-top: 3px; }\n\n.padding-top-4 {\n  padding-top: 4px; }\n\n.pt-4 {\n  padding-top: 4px; }\n\n.margin-top-4 {\n  margin-top: 4px; }\n\n.ml-4 {\n  margin-left: 4px; }\n\n.mt-4 {\n  margin-top: 4px; }\n\n.margin-bottom-4 {\n  margin-top: 4px; }\n\n.padding-top-5 {\n  padding-top: 5px; }\n\n.pt-5 {\n  padding-top: 5px; }\n\n.margin-top-5 {\n  margin-top: 5px; }\n\n.ml-5 {\n  margin-left: 5px; }\n\n.mt-5 {\n  margin-top: 5px; }\n\n.margin-bottom-5 {\n  margin-top: 5px; }\n\n.padding-top-6 {\n  padding-top: 6px; }\n\n.pt-6 {\n  padding-top: 6px; }\n\n.margin-top-6 {\n  margin-top: 6px; }\n\n.ml-6 {\n  margin-left: 6px; }\n\n.mt-6 {\n  margin-top: 6px; }\n\n.margin-bottom-6 {\n  margin-top: 6px; }\n\n.padding-top-7 {\n  padding-top: 7px; }\n\n.pt-7 {\n  padding-top: 7px; }\n\n.margin-top-7 {\n  margin-top: 7px; }\n\n.ml-7 {\n  margin-left: 7px; }\n\n.mt-7 {\n  margin-top: 7px; }\n\n.margin-bottom-7 {\n  margin-top: 7px; }\n\n.padding-top-8 {\n  padding-top: 8px; }\n\n.pt-8 {\n  padding-top: 8px; }\n\n.margin-top-8 {\n  margin-top: 8px; }\n\n.ml-8 {\n  margin-left: 8px; }\n\n.mt-8 {\n  margin-top: 8px; }\n\n.margin-bottom-8 {\n  margin-top: 8px; }\n\n.padding-top-9 {\n  padding-top: 9px; }\n\n.pt-9 {\n  padding-top: 9px; }\n\n.margin-top-9 {\n  margin-top: 9px; }\n\n.ml-9 {\n  margin-left: 9px; }\n\n.mt-9 {\n  margin-top: 9px; }\n\n.margin-bottom-9 {\n  margin-top: 9px; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n\n.pt-10 {\n  padding-top: 10px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.margin-bottom-10 {\n  margin-top: 10px; }\n\n.padding-top-11 {\n  padding-top: 11px; }\n\n.pt-11 {\n  padding-top: 11px; }\n\n.margin-top-11 {\n  margin-top: 11px; }\n\n.ml-11 {\n  margin-left: 11px; }\n\n.mt-11 {\n  margin-top: 11px; }\n\n.margin-bottom-11 {\n  margin-top: 11px; }\n\n.padding-top-12 {\n  padding-top: 12px; }\n\n.pt-12 {\n  padding-top: 12px; }\n\n.margin-top-12 {\n  margin-top: 12px; }\n\n.ml-12 {\n  margin-left: 12px; }\n\n.mt-12 {\n  margin-top: 12px; }\n\n.margin-bottom-12 {\n  margin-top: 12px; }\n\n.padding-top-13 {\n  padding-top: 13px; }\n\n.pt-13 {\n  padding-top: 13px; }\n\n.margin-top-13 {\n  margin-top: 13px; }\n\n.ml-13 {\n  margin-left: 13px; }\n\n.mt-13 {\n  margin-top: 13px; }\n\n.margin-bottom-13 {\n  margin-top: 13px; }\n\n.padding-top-14 {\n  padding-top: 14px; }\n\n.pt-14 {\n  padding-top: 14px; }\n\n.margin-top-14 {\n  margin-top: 14px; }\n\n.ml-14 {\n  margin-left: 14px; }\n\n.mt-14 {\n  margin-top: 14px; }\n\n.margin-bottom-14 {\n  margin-top: 14px; }\n\n.padding-top-15 {\n  padding-top: 15px; }\n\n.pt-15 {\n  padding-top: 15px; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.ml-15 {\n  margin-left: 15px; }\n\n.mt-15 {\n  margin-top: 15px; }\n\n.margin-bottom-15 {\n  margin-top: 15px; }\n\n.padding-top-16 {\n  padding-top: 16px; }\n\n.pt-16 {\n  padding-top: 16px; }\n\n.margin-top-16 {\n  margin-top: 16px; }\n\n.ml-16 {\n  margin-left: 16px; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.margin-bottom-16 {\n  margin-top: 16px; }\n\n.padding-top-17 {\n  padding-top: 17px; }\n\n.pt-17 {\n  padding-top: 17px; }\n\n.margin-top-17 {\n  margin-top: 17px; }\n\n.ml-17 {\n  margin-left: 17px; }\n\n.mt-17 {\n  margin-top: 17px; }\n\n.margin-bottom-17 {\n  margin-top: 17px; }\n\n.padding-top-18 {\n  padding-top: 18px; }\n\n.pt-18 {\n  padding-top: 18px; }\n\n.margin-top-18 {\n  margin-top: 18px; }\n\n.ml-18 {\n  margin-left: 18px; }\n\n.mt-18 {\n  margin-top: 18px; }\n\n.margin-bottom-18 {\n  margin-top: 18px; }\n\n.padding-top-19 {\n  padding-top: 19px; }\n\n.pt-19 {\n  padding-top: 19px; }\n\n.margin-top-19 {\n  margin-top: 19px; }\n\n.ml-19 {\n  margin-left: 19px; }\n\n.mt-19 {\n  margin-top: 19px; }\n\n.margin-bottom-19 {\n  margin-top: 19px; }\n\n.padding-top-20 {\n  padding-top: 20px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.margin-bottom-20 {\n  margin-top: 20px; }\n\n.padding-top-21 {\n  padding-top: 21px; }\n\n.pt-21 {\n  padding-top: 21px; }\n\n.margin-top-21 {\n  margin-top: 21px; }\n\n.ml-21 {\n  margin-left: 21px; }\n\n.mt-21 {\n  margin-top: 21px; }\n\n.margin-bottom-21 {\n  margin-top: 21px; }\n\n.padding-top-22 {\n  padding-top: 22px; }\n\n.pt-22 {\n  padding-top: 22px; }\n\n.margin-top-22 {\n  margin-top: 22px; }\n\n.ml-22 {\n  margin-left: 22px; }\n\n.mt-22 {\n  margin-top: 22px; }\n\n.margin-bottom-22 {\n  margin-top: 22px; }\n\n.padding-top-23 {\n  padding-top: 23px; }\n\n.pt-23 {\n  padding-top: 23px; }\n\n.margin-top-23 {\n  margin-top: 23px; }\n\n.ml-23 {\n  margin-left: 23px; }\n\n.mt-23 {\n  margin-top: 23px; }\n\n.margin-bottom-23 {\n  margin-top: 23px; }\n\n.padding-top-24 {\n  padding-top: 24px; }\n\n.pt-24 {\n  padding-top: 24px; }\n\n.margin-top-24 {\n  margin-top: 24px; }\n\n.ml-24 {\n  margin-left: 24px; }\n\n.mt-24 {\n  margin-top: 24px; }\n\n.margin-bottom-24 {\n  margin-top: 24px; }\n\n.padding-top-25 {\n  padding-top: 25px; }\n\n.pt-25 {\n  padding-top: 25px; }\n\n.margin-top-25 {\n  margin-top: 25px; }\n\n.ml-25 {\n  margin-left: 25px; }\n\n.mt-25 {\n  margin-top: 25px; }\n\n.margin-bottom-25 {\n  margin-top: 25px; }\n\n.padding-top-26 {\n  padding-top: 26px; }\n\n.pt-26 {\n  padding-top: 26px; }\n\n.margin-top-26 {\n  margin-top: 26px; }\n\n.ml-26 {\n  margin-left: 26px; }\n\n.mt-26 {\n  margin-top: 26px; }\n\n.margin-bottom-26 {\n  margin-top: 26px; }\n\n.padding-top-27 {\n  padding-top: 27px; }\n\n.pt-27 {\n  padding-top: 27px; }\n\n.margin-top-27 {\n  margin-top: 27px; }\n\n.ml-27 {\n  margin-left: 27px; }\n\n.mt-27 {\n  margin-top: 27px; }\n\n.margin-bottom-27 {\n  margin-top: 27px; }\n\n.padding-top-28 {\n  padding-top: 28px; }\n\n.pt-28 {\n  padding-top: 28px; }\n\n.margin-top-28 {\n  margin-top: 28px; }\n\n.ml-28 {\n  margin-left: 28px; }\n\n.mt-28 {\n  margin-top: 28px; }\n\n.margin-bottom-28 {\n  margin-top: 28px; }\n\n.padding-top-29 {\n  padding-top: 29px; }\n\n.pt-29 {\n  padding-top: 29px; }\n\n.margin-top-29 {\n  margin-top: 29px; }\n\n.ml-29 {\n  margin-left: 29px; }\n\n.mt-29 {\n  margin-top: 29px; }\n\n.margin-bottom-29 {\n  margin-top: 29px; }\n\n.padding-top-30 {\n  padding-top: 30px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.margin-top-30 {\n  margin-top: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.margin-bottom-30 {\n  margin-top: 30px; }\n\n.padding-top-31 {\n  padding-top: 31px; }\n\n.pt-31 {\n  padding-top: 31px; }\n\n.margin-top-31 {\n  margin-top: 31px; }\n\n.ml-31 {\n  margin-left: 31px; }\n\n.mt-31 {\n  margin-top: 31px; }\n\n.margin-bottom-31 {\n  margin-top: 31px; }\n\n.padding-top-32 {\n  padding-top: 32px; }\n\n.pt-32 {\n  padding-top: 32px; }\n\n.margin-top-32 {\n  margin-top: 32px; }\n\n.ml-32 {\n  margin-left: 32px; }\n\n.mt-32 {\n  margin-top: 32px; }\n\n.margin-bottom-32 {\n  margin-top: 32px; }\n\n.padding-top-33 {\n  padding-top: 33px; }\n\n.pt-33 {\n  padding-top: 33px; }\n\n.margin-top-33 {\n  margin-top: 33px; }\n\n.ml-33 {\n  margin-left: 33px; }\n\n.mt-33 {\n  margin-top: 33px; }\n\n.margin-bottom-33 {\n  margin-top: 33px; }\n\n.padding-top-34 {\n  padding-top: 34px; }\n\n.pt-34 {\n  padding-top: 34px; }\n\n.margin-top-34 {\n  margin-top: 34px; }\n\n.ml-34 {\n  margin-left: 34px; }\n\n.mt-34 {\n  margin-top: 34px; }\n\n.margin-bottom-34 {\n  margin-top: 34px; }\n\n.padding-top-35 {\n  padding-top: 35px; }\n\n.pt-35 {\n  padding-top: 35px; }\n\n.margin-top-35 {\n  margin-top: 35px; }\n\n.ml-35 {\n  margin-left: 35px; }\n\n.mt-35 {\n  margin-top: 35px; }\n\n.margin-bottom-35 {\n  margin-top: 35px; }\n\n.padding-top-36 {\n  padding-top: 36px; }\n\n.pt-36 {\n  padding-top: 36px; }\n\n.margin-top-36 {\n  margin-top: 36px; }\n\n.ml-36 {\n  margin-left: 36px; }\n\n.mt-36 {\n  margin-top: 36px; }\n\n.margin-bottom-36 {\n  margin-top: 36px; }\n\n.padding-top-37 {\n  padding-top: 37px; }\n\n.pt-37 {\n  padding-top: 37px; }\n\n.margin-top-37 {\n  margin-top: 37px; }\n\n.ml-37 {\n  margin-left: 37px; }\n\n.mt-37 {\n  margin-top: 37px; }\n\n.margin-bottom-37 {\n  margin-top: 37px; }\n\n.padding-top-38 {\n  padding-top: 38px; }\n\n.pt-38 {\n  padding-top: 38px; }\n\n.margin-top-38 {\n  margin-top: 38px; }\n\n.ml-38 {\n  margin-left: 38px; }\n\n.mt-38 {\n  margin-top: 38px; }\n\n.margin-bottom-38 {\n  margin-top: 38px; }\n\n.padding-top-39 {\n  padding-top: 39px; }\n\n.pt-39 {\n  padding-top: 39px; }\n\n.margin-top-39 {\n  margin-top: 39px; }\n\n.ml-39 {\n  margin-left: 39px; }\n\n.mt-39 {\n  margin-top: 39px; }\n\n.margin-bottom-39 {\n  margin-top: 39px; }\n\n.padding-top-40 {\n  padding-top: 40px; }\n\n.pt-40 {\n  padding-top: 40px; }\n\n.margin-top-40 {\n  margin-top: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.margin-bottom-40 {\n  margin-top: 40px; }\n\n.padding-top-41 {\n  padding-top: 41px; }\n\n.pt-41 {\n  padding-top: 41px; }\n\n.margin-top-41 {\n  margin-top: 41px; }\n\n.ml-41 {\n  margin-left: 41px; }\n\n.mt-41 {\n  margin-top: 41px; }\n\n.margin-bottom-41 {\n  margin-top: 41px; }\n\n.padding-top-42 {\n  padding-top: 42px; }\n\n.pt-42 {\n  padding-top: 42px; }\n\n.margin-top-42 {\n  margin-top: 42px; }\n\n.ml-42 {\n  margin-left: 42px; }\n\n.mt-42 {\n  margin-top: 42px; }\n\n.margin-bottom-42 {\n  margin-top: 42px; }\n\n.padding-top-43 {\n  padding-top: 43px; }\n\n.pt-43 {\n  padding-top: 43px; }\n\n.margin-top-43 {\n  margin-top: 43px; }\n\n.ml-43 {\n  margin-left: 43px; }\n\n.mt-43 {\n  margin-top: 43px; }\n\n.margin-bottom-43 {\n  margin-top: 43px; }\n\n.padding-top-44 {\n  padding-top: 44px; }\n\n.pt-44 {\n  padding-top: 44px; }\n\n.margin-top-44 {\n  margin-top: 44px; }\n\n.ml-44 {\n  margin-left: 44px; }\n\n.mt-44 {\n  margin-top: 44px; }\n\n.margin-bottom-44 {\n  margin-top: 44px; }\n\n.padding-top-45 {\n  padding-top: 45px; }\n\n.pt-45 {\n  padding-top: 45px; }\n\n.margin-top-45 {\n  margin-top: 45px; }\n\n.ml-45 {\n  margin-left: 45px; }\n\n.mt-45 {\n  margin-top: 45px; }\n\n.margin-bottom-45 {\n  margin-top: 45px; }\n\n.padding-top-46 {\n  padding-top: 46px; }\n\n.pt-46 {\n  padding-top: 46px; }\n\n.margin-top-46 {\n  margin-top: 46px; }\n\n.ml-46 {\n  margin-left: 46px; }\n\n.mt-46 {\n  margin-top: 46px; }\n\n.margin-bottom-46 {\n  margin-top: 46px; }\n\n.padding-top-47 {\n  padding-top: 47px; }\n\n.pt-47 {\n  padding-top: 47px; }\n\n.margin-top-47 {\n  margin-top: 47px; }\n\n.ml-47 {\n  margin-left: 47px; }\n\n.mt-47 {\n  margin-top: 47px; }\n\n.margin-bottom-47 {\n  margin-top: 47px; }\n\n.padding-top-48 {\n  padding-top: 48px; }\n\n.pt-48 {\n  padding-top: 48px; }\n\n.margin-top-48 {\n  margin-top: 48px; }\n\n.ml-48 {\n  margin-left: 48px; }\n\n.mt-48 {\n  margin-top: 48px; }\n\n.margin-bottom-48 {\n  margin-top: 48px; }\n\n.padding-top-49 {\n  padding-top: 49px; }\n\n.pt-49 {\n  padding-top: 49px; }\n\n.margin-top-49 {\n  margin-top: 49px; }\n\n.ml-49 {\n  margin-left: 49px; }\n\n.mt-49 {\n  margin-top: 49px; }\n\n.margin-bottom-49 {\n  margin-top: 49px; }\n\n.padding-top-50 {\n  padding-top: 50px; }\n\n.pt-50 {\n  padding-top: 50px; }\n\n.margin-top-50 {\n  margin-top: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.margin-bottom-50 {\n  margin-top: 50px; }\n\n.padding-top-51 {\n  padding-top: 51px; }\n\n.pt-51 {\n  padding-top: 51px; }\n\n.margin-top-51 {\n  margin-top: 51px; }\n\n.ml-51 {\n  margin-left: 51px; }\n\n.mt-51 {\n  margin-top: 51px; }\n\n.margin-bottom-51 {\n  margin-top: 51px; }\n\n.padding-top-52 {\n  padding-top: 52px; }\n\n.pt-52 {\n  padding-top: 52px; }\n\n.margin-top-52 {\n  margin-top: 52px; }\n\n.ml-52 {\n  margin-left: 52px; }\n\n.mt-52 {\n  margin-top: 52px; }\n\n.margin-bottom-52 {\n  margin-top: 52px; }\n\n.padding-top-53 {\n  padding-top: 53px; }\n\n.pt-53 {\n  padding-top: 53px; }\n\n.margin-top-53 {\n  margin-top: 53px; }\n\n.ml-53 {\n  margin-left: 53px; }\n\n.mt-53 {\n  margin-top: 53px; }\n\n.margin-bottom-53 {\n  margin-top: 53px; }\n\n.padding-top-54 {\n  padding-top: 54px; }\n\n.pt-54 {\n  padding-top: 54px; }\n\n.margin-top-54 {\n  margin-top: 54px; }\n\n.ml-54 {\n  margin-left: 54px; }\n\n.mt-54 {\n  margin-top: 54px; }\n\n.margin-bottom-54 {\n  margin-top: 54px; }\n\n.padding-top-55 {\n  padding-top: 55px; }\n\n.pt-55 {\n  padding-top: 55px; }\n\n.margin-top-55 {\n  margin-top: 55px; }\n\n.ml-55 {\n  margin-left: 55px; }\n\n.mt-55 {\n  margin-top: 55px; }\n\n.margin-bottom-55 {\n  margin-top: 55px; }\n\n.padding-top-56 {\n  padding-top: 56px; }\n\n.pt-56 {\n  padding-top: 56px; }\n\n.margin-top-56 {\n  margin-top: 56px; }\n\n.ml-56 {\n  margin-left: 56px; }\n\n.mt-56 {\n  margin-top: 56px; }\n\n.margin-bottom-56 {\n  margin-top: 56px; }\n\n.padding-top-57 {\n  padding-top: 57px; }\n\n.pt-57 {\n  padding-top: 57px; }\n\n.margin-top-57 {\n  margin-top: 57px; }\n\n.ml-57 {\n  margin-left: 57px; }\n\n.mt-57 {\n  margin-top: 57px; }\n\n.margin-bottom-57 {\n  margin-top: 57px; }\n\n.padding-top-58 {\n  padding-top: 58px; }\n\n.pt-58 {\n  padding-top: 58px; }\n\n.margin-top-58 {\n  margin-top: 58px; }\n\n.ml-58 {\n  margin-left: 58px; }\n\n.mt-58 {\n  margin-top: 58px; }\n\n.margin-bottom-58 {\n  margin-top: 58px; }\n\n.padding-top-59 {\n  padding-top: 59px; }\n\n.pt-59 {\n  padding-top: 59px; }\n\n.margin-top-59 {\n  margin-top: 59px; }\n\n.ml-59 {\n  margin-left: 59px; }\n\n.mt-59 {\n  margin-top: 59px; }\n\n.margin-bottom-59 {\n  margin-top: 59px; }\n\n.padding-top-60 {\n  padding-top: 60px; }\n\n.pt-60 {\n  padding-top: 60px; }\n\n.margin-top-60 {\n  margin-top: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.margin-bottom-60 {\n  margin-top: 60px; }\n\n.padding-top-61 {\n  padding-top: 61px; }\n\n.pt-61 {\n  padding-top: 61px; }\n\n.margin-top-61 {\n  margin-top: 61px; }\n\n.ml-61 {\n  margin-left: 61px; }\n\n.mt-61 {\n  margin-top: 61px; }\n\n.margin-bottom-61 {\n  margin-top: 61px; }\n\n.padding-top-62 {\n  padding-top: 62px; }\n\n.pt-62 {\n  padding-top: 62px; }\n\n.margin-top-62 {\n  margin-top: 62px; }\n\n.ml-62 {\n  margin-left: 62px; }\n\n.mt-62 {\n  margin-top: 62px; }\n\n.margin-bottom-62 {\n  margin-top: 62px; }\n\n.padding-top-63 {\n  padding-top: 63px; }\n\n.pt-63 {\n  padding-top: 63px; }\n\n.margin-top-63 {\n  margin-top: 63px; }\n\n.ml-63 {\n  margin-left: 63px; }\n\n.mt-63 {\n  margin-top: 63px; }\n\n.margin-bottom-63 {\n  margin-top: 63px; }\n\n.padding-top-64 {\n  padding-top: 64px; }\n\n.pt-64 {\n  padding-top: 64px; }\n\n.margin-top-64 {\n  margin-top: 64px; }\n\n.ml-64 {\n  margin-left: 64px; }\n\n.mt-64 {\n  margin-top: 64px; }\n\n.margin-bottom-64 {\n  margin-top: 64px; }\n\n.padding-top-65 {\n  padding-top: 65px; }\n\n.pt-65 {\n  padding-top: 65px; }\n\n.margin-top-65 {\n  margin-top: 65px; }\n\n.ml-65 {\n  margin-left: 65px; }\n\n.mt-65 {\n  margin-top: 65px; }\n\n.margin-bottom-65 {\n  margin-top: 65px; }\n\n.padding-top-66 {\n  padding-top: 66px; }\n\n.pt-66 {\n  padding-top: 66px; }\n\n.margin-top-66 {\n  margin-top: 66px; }\n\n.ml-66 {\n  margin-left: 66px; }\n\n.mt-66 {\n  margin-top: 66px; }\n\n.margin-bottom-66 {\n  margin-top: 66px; }\n\n.padding-top-67 {\n  padding-top: 67px; }\n\n.pt-67 {\n  padding-top: 67px; }\n\n.margin-top-67 {\n  margin-top: 67px; }\n\n.ml-67 {\n  margin-left: 67px; }\n\n.mt-67 {\n  margin-top: 67px; }\n\n.margin-bottom-67 {\n  margin-top: 67px; }\n\n.padding-top-68 {\n  padding-top: 68px; }\n\n.pt-68 {\n  padding-top: 68px; }\n\n.margin-top-68 {\n  margin-top: 68px; }\n\n.ml-68 {\n  margin-left: 68px; }\n\n.mt-68 {\n  margin-top: 68px; }\n\n.margin-bottom-68 {\n  margin-top: 68px; }\n\n.padding-top-69 {\n  padding-top: 69px; }\n\n.pt-69 {\n  padding-top: 69px; }\n\n.margin-top-69 {\n  margin-top: 69px; }\n\n.ml-69 {\n  margin-left: 69px; }\n\n.mt-69 {\n  margin-top: 69px; }\n\n.margin-bottom-69 {\n  margin-top: 69px; }\n\n.padding-top-70 {\n  padding-top: 70px; }\n\n.pt-70 {\n  padding-top: 70px; }\n\n.margin-top-70 {\n  margin-top: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.margin-bottom-70 {\n  margin-top: 70px; }\n\n.padding-top-71 {\n  padding-top: 71px; }\n\n.pt-71 {\n  padding-top: 71px; }\n\n.margin-top-71 {\n  margin-top: 71px; }\n\n.ml-71 {\n  margin-left: 71px; }\n\n.mt-71 {\n  margin-top: 71px; }\n\n.margin-bottom-71 {\n  margin-top: 71px; }\n\n.padding-top-72 {\n  padding-top: 72px; }\n\n.pt-72 {\n  padding-top: 72px; }\n\n.margin-top-72 {\n  margin-top: 72px; }\n\n.ml-72 {\n  margin-left: 72px; }\n\n.mt-72 {\n  margin-top: 72px; }\n\n.margin-bottom-72 {\n  margin-top: 72px; }\n\n.padding-top-73 {\n  padding-top: 73px; }\n\n.pt-73 {\n  padding-top: 73px; }\n\n.margin-top-73 {\n  margin-top: 73px; }\n\n.ml-73 {\n  margin-left: 73px; }\n\n.mt-73 {\n  margin-top: 73px; }\n\n.margin-bottom-73 {\n  margin-top: 73px; }\n\n.padding-top-74 {\n  padding-top: 74px; }\n\n.pt-74 {\n  padding-top: 74px; }\n\n.margin-top-74 {\n  margin-top: 74px; }\n\n.ml-74 {\n  margin-left: 74px; }\n\n.mt-74 {\n  margin-top: 74px; }\n\n.margin-bottom-74 {\n  margin-top: 74px; }\n\n.padding-top-75 {\n  padding-top: 75px; }\n\n.pt-75 {\n  padding-top: 75px; }\n\n.margin-top-75 {\n  margin-top: 75px; }\n\n.ml-75 {\n  margin-left: 75px; }\n\n.mt-75 {\n  margin-top: 75px; }\n\n.margin-bottom-75 {\n  margin-top: 75px; }\n\n.padding-top-76 {\n  padding-top: 76px; }\n\n.pt-76 {\n  padding-top: 76px; }\n\n.margin-top-76 {\n  margin-top: 76px; }\n\n.ml-76 {\n  margin-left: 76px; }\n\n.mt-76 {\n  margin-top: 76px; }\n\n.margin-bottom-76 {\n  margin-top: 76px; }\n\n.padding-top-77 {\n  padding-top: 77px; }\n\n.pt-77 {\n  padding-top: 77px; }\n\n.margin-top-77 {\n  margin-top: 77px; }\n\n.ml-77 {\n  margin-left: 77px; }\n\n.mt-77 {\n  margin-top: 77px; }\n\n.margin-bottom-77 {\n  margin-top: 77px; }\n\n.padding-top-78 {\n  padding-top: 78px; }\n\n.pt-78 {\n  padding-top: 78px; }\n\n.margin-top-78 {\n  margin-top: 78px; }\n\n.ml-78 {\n  margin-left: 78px; }\n\n.mt-78 {\n  margin-top: 78px; }\n\n.margin-bottom-78 {\n  margin-top: 78px; }\n\n.padding-top-79 {\n  padding-top: 79px; }\n\n.pt-79 {\n  padding-top: 79px; }\n\n.margin-top-79 {\n  margin-top: 79px; }\n\n.ml-79 {\n  margin-left: 79px; }\n\n.mt-79 {\n  margin-top: 79px; }\n\n.margin-bottom-79 {\n  margin-top: 79px; }\n\n.padding-top-80 {\n  padding-top: 80px; }\n\n.pt-80 {\n  padding-top: 80px; }\n\n.margin-top-80 {\n  margin-top: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.margin-bottom-80 {\n  margin-top: 80px; }\n\n.padding-top-81 {\n  padding-top: 81px; }\n\n.pt-81 {\n  padding-top: 81px; }\n\n.margin-top-81 {\n  margin-top: 81px; }\n\n.ml-81 {\n  margin-left: 81px; }\n\n.mt-81 {\n  margin-top: 81px; }\n\n.margin-bottom-81 {\n  margin-top: 81px; }\n\n.padding-top-82 {\n  padding-top: 82px; }\n\n.pt-82 {\n  padding-top: 82px; }\n\n.margin-top-82 {\n  margin-top: 82px; }\n\n.ml-82 {\n  margin-left: 82px; }\n\n.mt-82 {\n  margin-top: 82px; }\n\n.margin-bottom-82 {\n  margin-top: 82px; }\n\n.padding-top-83 {\n  padding-top: 83px; }\n\n.pt-83 {\n  padding-top: 83px; }\n\n.margin-top-83 {\n  margin-top: 83px; }\n\n.ml-83 {\n  margin-left: 83px; }\n\n.mt-83 {\n  margin-top: 83px; }\n\n.margin-bottom-83 {\n  margin-top: 83px; }\n\n.padding-top-84 {\n  padding-top: 84px; }\n\n.pt-84 {\n  padding-top: 84px; }\n\n.margin-top-84 {\n  margin-top: 84px; }\n\n.ml-84 {\n  margin-left: 84px; }\n\n.mt-84 {\n  margin-top: 84px; }\n\n.margin-bottom-84 {\n  margin-top: 84px; }\n\n.padding-top-85 {\n  padding-top: 85px; }\n\n.pt-85 {\n  padding-top: 85px; }\n\n.margin-top-85 {\n  margin-top: 85px; }\n\n.ml-85 {\n  margin-left: 85px; }\n\n.mt-85 {\n  margin-top: 85px; }\n\n.margin-bottom-85 {\n  margin-top: 85px; }\n\n.padding-top-86 {\n  padding-top: 86px; }\n\n.pt-86 {\n  padding-top: 86px; }\n\n.margin-top-86 {\n  margin-top: 86px; }\n\n.ml-86 {\n  margin-left: 86px; }\n\n.mt-86 {\n  margin-top: 86px; }\n\n.margin-bottom-86 {\n  margin-top: 86px; }\n\n.padding-top-87 {\n  padding-top: 87px; }\n\n.pt-87 {\n  padding-top: 87px; }\n\n.margin-top-87 {\n  margin-top: 87px; }\n\n.ml-87 {\n  margin-left: 87px; }\n\n.mt-87 {\n  margin-top: 87px; }\n\n.margin-bottom-87 {\n  margin-top: 87px; }\n\n.padding-top-88 {\n  padding-top: 88px; }\n\n.pt-88 {\n  padding-top: 88px; }\n\n.margin-top-88 {\n  margin-top: 88px; }\n\n.ml-88 {\n  margin-left: 88px; }\n\n.mt-88 {\n  margin-top: 88px; }\n\n.margin-bottom-88 {\n  margin-top: 88px; }\n\n.padding-top-89 {\n  padding-top: 89px; }\n\n.pt-89 {\n  padding-top: 89px; }\n\n.margin-top-89 {\n  margin-top: 89px; }\n\n.ml-89 {\n  margin-left: 89px; }\n\n.mt-89 {\n  margin-top: 89px; }\n\n.margin-bottom-89 {\n  margin-top: 89px; }\n\n.padding-top-90 {\n  padding-top: 90px; }\n\n.pt-90 {\n  padding-top: 90px; }\n\n.margin-top-90 {\n  margin-top: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.margin-bottom-90 {\n  margin-top: 90px; }\n\n.padding-top-91 {\n  padding-top: 91px; }\n\n.pt-91 {\n  padding-top: 91px; }\n\n.margin-top-91 {\n  margin-top: 91px; }\n\n.ml-91 {\n  margin-left: 91px; }\n\n.mt-91 {\n  margin-top: 91px; }\n\n.margin-bottom-91 {\n  margin-top: 91px; }\n\n.padding-top-92 {\n  padding-top: 92px; }\n\n.pt-92 {\n  padding-top: 92px; }\n\n.margin-top-92 {\n  margin-top: 92px; }\n\n.ml-92 {\n  margin-left: 92px; }\n\n.mt-92 {\n  margin-top: 92px; }\n\n.margin-bottom-92 {\n  margin-top: 92px; }\n\n.padding-top-93 {\n  padding-top: 93px; }\n\n.pt-93 {\n  padding-top: 93px; }\n\n.margin-top-93 {\n  margin-top: 93px; }\n\n.ml-93 {\n  margin-left: 93px; }\n\n.mt-93 {\n  margin-top: 93px; }\n\n.margin-bottom-93 {\n  margin-top: 93px; }\n\n.padding-top-94 {\n  padding-top: 94px; }\n\n.pt-94 {\n  padding-top: 94px; }\n\n.margin-top-94 {\n  margin-top: 94px; }\n\n.ml-94 {\n  margin-left: 94px; }\n\n.mt-94 {\n  margin-top: 94px; }\n\n.margin-bottom-94 {\n  margin-top: 94px; }\n\n.padding-top-95 {\n  padding-top: 95px; }\n\n.pt-95 {\n  padding-top: 95px; }\n\n.margin-top-95 {\n  margin-top: 95px; }\n\n.ml-95 {\n  margin-left: 95px; }\n\n.mt-95 {\n  margin-top: 95px; }\n\n.margin-bottom-95 {\n  margin-top: 95px; }\n\n.padding-top-96 {\n  padding-top: 96px; }\n\n.pt-96 {\n  padding-top: 96px; }\n\n.margin-top-96 {\n  margin-top: 96px; }\n\n.ml-96 {\n  margin-left: 96px; }\n\n.mt-96 {\n  margin-top: 96px; }\n\n.margin-bottom-96 {\n  margin-top: 96px; }\n\n.padding-top-97 {\n  padding-top: 97px; }\n\n.pt-97 {\n  padding-top: 97px; }\n\n.margin-top-97 {\n  margin-top: 97px; }\n\n.ml-97 {\n  margin-left: 97px; }\n\n.mt-97 {\n  margin-top: 97px; }\n\n.margin-bottom-97 {\n  margin-top: 97px; }\n\n.padding-top-98 {\n  padding-top: 98px; }\n\n.pt-98 {\n  padding-top: 98px; }\n\n.margin-top-98 {\n  margin-top: 98px; }\n\n.ml-98 {\n  margin-left: 98px; }\n\n.mt-98 {\n  margin-top: 98px; }\n\n.margin-bottom-98 {\n  margin-top: 98px; }\n\n.padding-top-99 {\n  padding-top: 99px; }\n\n.pt-99 {\n  padding-top: 99px; }\n\n.margin-top-99 {\n  margin-top: 99px; }\n\n.ml-99 {\n  margin-left: 99px; }\n\n.mt-99 {\n  margin-top: 99px; }\n\n.margin-bottom-99 {\n  margin-top: 99px; }\n\n.padding-top-100 {\n  padding-top: 100px; }\n\n.pt-100 {\n  padding-top: 100px; }\n\n.margin-top-100 {\n  margin-top: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.margin-bottom-100 {\n  margin-top: 100px; }\n\n/*for targetting small screens */\n\n.search-view-container .search-container-grid {\n  margin: 0 auto;\n  width: 964px; }\n\n.search-products-container.col-md-9 {\n  float: left;\n  padding: 0.1em 0 0 0 !important;\n  max-width: 764px; }\n\n.search-heading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly; }\n\n.search-heading .content-inline-block {\n    display: inline-block;\n    width: 49%;\n    font-size: 12px;\n    overflow: hidden;\n    color: #000000; }\n\n.search-heading h2 {\n    font-size: 12px;\n    text-transform: uppercase;\n    color: #686873;\n    line-height: 30px;\n    font-weight: 500;\n    font-style: normal; }\n\n.search-heading .viewAllProducts {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.container-display-none {\n  display: none; }\n\n.container-display-block {\n  display: block; }\n\n.no-padding {\n  padding: 0px !important; }\n\n.search-viewAllTop {\n  display: block; }\n\n.search-viewAllTop h1 {\n    font-weight: normal;\n    font-size: 21.6px; }\n\n.search-viewAllTop h1 span {\n      font-size: inherit;\n      font-weight: inherit; }\n\n.search-viewAllTop .viewAllTop-content {\n    display: table;\n    height: inherit;\n    text-align: right;\n    height: 29px;\n    float: right; }\n\n.search-viewAllTop .viewAllTop-content-cell {\n    display: table-cell;\n    vertical-align: bottom;\n    font-family: arial, sans-serif;\n    font-weight: 500;\n    font-size: 16px;\n    font-style: normal;\n    line-height: 14px; }\n\n@media screen and (max-width: 979px) {\n  .search-facets {\n    display: none; } }\n\n.col-md-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 79%;\n          flex: 0 0 79%;\n  max-width: 78%; }\n\n@media screen and (max-width: 768px) {\n  .col-md-9 {\n    -webkit-box-flex: 0 !important;\n        -ms-flex: 0 0 100% !important;\n            flex: 0 0 100% !important;\n    max-width: 100% !important;\n    margin-top: 0px !important; }\n  .search-container-grid {\n    width: 100% !important; } }\n\n.search-facets.col-md-3 {\n  min-height: 610px;\n  float: left;\n  max-width: 194px;\n  box-sizing: content-box;\n  padding: 0px 6px 0 0; }\n\n.viewAllProducts a {\n  float: right;\n  text-decoration: underline !important; }\n\n.container {\n  padding: 0; }\n\n@media screen and (max-width: 768px) {\n  .search-heading .content-inline-block:first-child {\n    width: 39%;\n    font-size: 11px; }\n  .search-heading .content-inline-block:last-child {\n    width: 59%;\n    font-size: 11px; } }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    max-width: 85%;\n    margin: 0.75rem auto !important; } }\n\n@media screen and (max-width: 768px) {\n  .needMoreHelp {\n    display: none; } }\n\n@media screen and (max-width: 586px) {\n  .showFav {\n    display: none; } }\n\n.hide-filterbtn {\n  display: none; }\n\n.show-filterbtn {\n  display: inline-block; }\n\napp-filter {\n  height: 100%; }\n\n.needMoreHelp img {\n  cursor: pointer; }\n\n.searchResults {\n  font-size: 12px; }\n\n.searchResults h1 {\n    font-size: 1.8em;\n    font-weight: normal; }\n\n.searchResults h1 span {\n      font-size: inherit; }\n\n.search-pager_top app-pager .pager-cntnt {\n  margin-top: 15px; }\n\n.search-page-btm {\n  height: 65px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n\n.showFav .customer {\n  font-size: 25px;\n  padding: 10px 15px 10px 0;\n  border-bottom: 1px solid #d6d6d6; }\n\n.showFav .customer .searchHeader {\n    line-height: initial;\n    font-size: 1em; }\n\n.search-header {\n  font-size: 12px; }\n\n.search-header.needMoreHelp h3 {\n    width: 100%;\n    font-size: 1.5em;\n    padding: 28px 0 17px 0;\n    font-weight: 700;\n    color: #000000; }\n\n.search-landing-page-loader {\n  background-color: #ffffff; }\n\n.search-top-bar {\n  margin-top: 24px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.search-top-bar div.searchBy-filter {\n    width: 21%;\n    margin-right: 4px;\n    -ms-flex-item-align: end;\n        align-self: flex-end; }\n\n.search-top-bar div.search-cat-for {\n    width: 55%; }\n\n.search-top-bar div.search-pager {\n    width: 22%;\n    float: right;\n    -ms-flex-item-align: end;\n        align-self: flex-end; }\n\n.search-top-bar h2 {\n    float: left;\n    font-size: 14px !important;\n    line-height: 30px !important;\n    color: #666;\n    font-weight: 600 !important;\n    text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/search-landingpage/search-landingpage.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/search-landingpage/search-landingpage.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchLandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLandingpageComponent", function() { return SearchLandingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _categorylanding_page_categorylanding_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../categorylanding-page/categorylanding-page.service */ "./src/app/categorylanding-page/categorylanding-page.service.ts");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/pager.service */ "./src/app/services/pager.service.ts");
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/singleton.service */ "./src/app/services/singleton.service.ts");
/* harmony import */ var _services_meta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/meta.service */ "./src/app/services/meta.service.ts");
/* harmony import */ var _assets_js_handlebars_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/js/handlebars_helpers */ "./src/assets/js/handlebars_helpers.js");
/* harmony import */ var _assets_js_handlebars_helpers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_js_handlebars_helpers__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SearchLandingpageComponent = /** @class */ (function () {
    function SearchLandingpageComponent(el, titleService, location, router, route, singletonServ, mbPagerService, categoryServ, metaService) {
        this.el = el;
        this.titleService = titleService;
        this.location = location;
        this.router = router;
        this.route = route;
        this.singletonServ = singletonServ;
        this.mbPagerService = mbPagerService;
        this.categoryServ = categoryServ;
        this.metaService = metaService;
        this.breadcrumb = [{ name: "SEARCH", search: true }, { name: "MY SEARCH", search: true }];
        this.pager = {};
        this.checkList = false;
        this.checkedData = [];
        this.pageSize = 12;
        this.filterQuery = '';
        this.paths = "";
        this.showFacets = true;
        this.categoryData = [];
        this.checkedCount = 1;
        this.catalogSpecific = false;
        this.displayGrid = true;
        this.facets = [{}];
        this.refinePath = "";
        this.IsmodelShow = false;
        this.mbFacet = true;
        this.viewAllProducts = false;
        this.pageNumber = 0;
        this.pageLoad = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    SearchLandingpageComponent.prototype.fetchCatalogProducts = function () {
        var _this = this;
        var that = this;
        this.navigationSubscription = this.route.params.subscribe(function (params) {
            that.routeParams = params;
            that.searchDisplay = true;
            that.searchPrdId = params.searchId;
            that.paramcode = params.searchId;
            if (_this.singletonServ.getStoreData('searchId')) {
                that.searchPrdId = JSON.parse(_this.singletonServ.getStoreData('searchId'));
            }
            that.renderSearchRelatedpage(that.searchPrdId, true, _this.pageSize);
        });
    };
    SearchLandingpageComponent.prototype.ngOnInit = function () {
        var _host = this.location['_platformStrategy']._platformLocation.location.href;
        this.titleService.setTitle(_host);
        this.fetchCatalogProducts();
        this.metaService.createCanonicalURL();
    };
    SearchLandingpageComponent.prototype.wrapFRslots = function () {
        var that = this;
        var baseSite = this.singletonServ.catalogVersion;
        this.categoryServ.getStaticContent(baseSite.lngCode).subscribe(function (response) {
            if (response) {
                that.customerFav.nativeElement.innerHTML = response.searchCategory.slotId;
            }
        }, function (err) {
        });
    };
    /* category level call */
    SearchLandingpageComponent.prototype.onviewAllClick = function (event) {
        this.freshRelevanceSpecific = false;
        var prdId = this.searchPrdId;
        var pageSize = 123;
        this.catalogSpecific = true;
        this.pager = false;
        this.viewAllProducts = true;
        this.renderSearchRelatedpage(prdId, true, pageSize);
    };
    SearchLandingpageComponent.prototype.fetchProductNextperPage = function (data) {
        var status = data.status;
        this.pageLoad = false;
        if (!status) {
            var page = this.pagination.currentPage + 1;
            this.pageNumber = page;
            var id = this.paramcode + this.filterQuery + "&currentPage=" + page;
            this.renderSearchRelatedpage(id, false, 12);
        }
        else {
            var _pageNumber = this.pagination.currentPage - 1;
            this.pageNumber = _pageNumber;
            var id = this.paramcode +
                this.filterQuery +
                "&currentPage=" +
                _pageNumber;
            this.renderSearchRelatedpage(id, false, 12);
        }
    };
    SearchLandingpageComponent.prototype.fetchProductperPage = function (data) {
        var page = data.page;
        this.pageLoad = false;
        this.viewAllProducts = false;
        this.pageNumber = page["content"];
        var pgNo = data["pageId"] - 1;
        var id = this.paramcode + this.filterQuery + "&currentPage=" + pgNo;
        this.viewAllProducts = false;
        this.renderSearchRelatedpage(id, false, 12);
    };
    SearchLandingpageComponent.prototype.onViewAllProducts = function () {
        this.freshRelevanceSpecific = false;
        this.catalogSpecific = true;
        var productname = this.routeParams.productname;
        var categoryId = this.routeParams.categoryId;
        this.router.navigate(["store", productname, categoryId], {
            queryParams: { viewAllCat: true },
            queryParamsHandling: "merge"
        });
    };
    //search related call
    SearchLandingpageComponent.prototype.renderSearchRelatedpage = function (searchId, facets, pageSize) {
        var _this = this;
        var that = this;
        this.catalogSpecific = true;
        this.singletonServ.setStoreData('searchId', JSON.stringify(searchId));
        this.singletonServ.setCookie("searchId", searchId, 365);
        this.categoryServ
            .getCategorySearchResults(searchId, pageSize)
            .subscribe(function (resp) {
            _this.pageLoad = true;
            _this.categoryResponse = resp;
            var products = resp["products"];
            var prodPaginator = resp["pagination"];
            _this.pagination = resp["pagination"];
            lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](products, function (value, i) {
                lodash__WEBPACK_IMPORTED_MODULE_4__["assignIn"](value, {
                    redirectUrl: resp['keywordRedirectUrl'],
                    show: false,
                    id: i + 1,
                    category: that.categorybanner
                });
            });
            var _facetObj = {
                facets: resp["facets"],
                status: facets
            };
            _this.facetResponse = _facetObj;
            _this.categoryData = products;
            _this.pagedItems = products;
            if (products) {
                that.activeProducts = (products.length != 0) ? true : false;
            }
            else {
                that.activeProducts = false;
            }
            _this.totalProducts = prodPaginator["totalResults"];
            _this.currentPage = prodPaginator["currentPage"];
            _this.freeSearchText = resp["freeTextSearch"];
            _this.spellingSuggestion = resp["spellingSuggestion"];
            _this.wrapFRslots();
        }, function (error) {
            _this.pageLoad = true;
        });
    };
    //filters functions
    SearchLandingpageComponent.prototype.onShowFirstPage = function () {
        this.pager = true;
        this.viewAllProducts = false;
        this.freshRelevanceSpecific = false;
        var pageSize = 12;
        this.pageLoad = false;
        this.renderSearchRelatedpage(this.paramcode, true, pageSize);
    };
    SearchLandingpageComponent.prototype.onRefetchProducts = function (data) {
        this.filterQuery = ':relavance' + data.id;
        var id = this.paramcode + this.filterQuery;
        this.pageLoad = false;
        this.renderSearchRelatedpage(id, false, 12);
    };
    SearchLandingpageComponent.prototype.onClearAll = function () {
        this.checkList = false;
        this.showFacets = true;
        this.pageLoad = false;
        this.renderSearchRelatedpage(this.paramcode, true, this.pageSize);
    };
    SearchLandingpageComponent.prototype.onFacetClicked = function (filterData, sortId) {
        this.facets[sortId]["checked"] = !this.facets[sortId]["checked"];
    };
    //tabs
    SearchLandingpageComponent.prototype.updateFilterData = function (event, valueData, i) {
        var sortId = this.sortId;
        this.checkList = false;
        this.checkedfilter = true;
    };
    SearchLandingpageComponent.prototype.onMbFilterByClick = function () {
        this.refinePath = "";
        this.refineFacets = [];
        this.mbFacet = true;
        this.IsmodelShow = true;
    };
    SearchLandingpageComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    SearchLandingpageComponent.prototype.sortByChange = function () {
    };
    SearchLandingpageComponent.prototype.onGridClick = function (data) {
        var _bol = data.status;
        if (_bol) {
            this.displayGrid = true;
        }
        else {
            this.displayGrid = false;
        }
    };
    SearchLandingpageComponent.prototype.onShowStore = function () {
        this.router.navigate(['store', 'company', 'stores']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("facetTag"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchLandingpageComponent.prototype, "facetValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("customerFav"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchLandingpageComponent.prototype, "customerFav", void 0);
    SearchLandingpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-landingpage',
            template: __webpack_require__(/*! ./search-landingpage.component.html */ "./src/app/search-landingpage/search-landingpage.component.html"),
            styles: [__webpack_require__(/*! ./search-landingpage.component.scss */ "./src/app/search-landingpage/search-landingpage.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_singleton_service__WEBPACK_IMPORTED_MODULE_7__["SingletonService"],
            _services_pager_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"],
            _categorylanding_page_categorylanding_page_service__WEBPACK_IMPORTED_MODULE_5__["CategoryComponentService"],
            _services_meta_service__WEBPACK_IMPORTED_MODULE_8__["MetaService"]])
    ], SearchLandingpageComponent);
    return SearchLandingpageComponent;
}());



/***/ }),

/***/ "./src/app/search-landingpage/search-landingpage.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/search-landingpage/search-landingpage.module.ts ***!
  \*****************************************************************/
/*! exports provided: SearchLandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLandingPageModule", function() { return SearchLandingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_landingpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-landingpage.component */ "./src/app/search-landingpage/search-landingpage.component.ts");
/* harmony import */ var _component_mb_bread_crumb_mb_bread_crumb_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/mb-bread-crumb/mb-bread-crumb.module */ "./src/app/component/mb-bread-crumb/mb-bread-crumb.module.ts");
/* harmony import */ var _categorylanding_page_sort_type_sort_type_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../categorylanding-page/sort-type/sort-type.module */ "./src/app/categorylanding-page/sort-type/sort-type.module.ts");
/* harmony import */ var _categorylanding_page_product_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../categorylanding-page/product/product.module */ "./src/app/categorylanding-page/product/product.module.ts");
/* harmony import */ var _categorylanding_page_filter_filter_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../categorylanding-page/filter/filter.module */ "./src/app/categorylanding-page/filter/filter.module.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");
/* harmony import */ var _component_pager_page_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/pager/page.module */ "./src/app/component/pager/page.module.ts");
/* harmony import */ var _component_ngui_in_view_ngUiView_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/ngui-in-view/ngUiView.module */ "./src/app/component/ngui-in-view/ngUiView.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _search_landingpage_component__WEBPACK_IMPORTED_MODULE_4__["SearchLandingpageComponent"], data: { title: 'Customers' } }
];
var SearchLandingPageModule = /** @class */ (function () {
    function SearchLandingPageModule() {
    }
    SearchLandingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _component_ngui_in_view_ngUiView_module__WEBPACK_IMPORTED_MODULE_11__["NgUiViewModule"],
                _component_pager_page_module__WEBPACK_IMPORTED_MODULE_10__["PageTypeModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_9__["NgxStarsModule"],
                _component_mb_bread_crumb_mb_bread_crumb_module__WEBPACK_IMPORTED_MODULE_5__["MbBreadCrumbModule"],
                _categorylanding_page_sort_type_sort_type_module__WEBPACK_IMPORTED_MODULE_6__["sortTypeModule"],
                _categorylanding_page_product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
                _categorylanding_page_filter_filter_module__WEBPACK_IMPORTED_MODULE_8__["FilterModule"]
            ],
            declarations: [
                _search_landingpage_component__WEBPACK_IMPORTED_MODULE_4__["SearchLandingpageComponent"]
            ],
            providers: []
        })
    ], SearchLandingPageModule);
    return SearchLandingPageModule;
}());



/***/ }),

/***/ "./src/assets/js/handlebars_helpers.js":
/*!*********************************************!*\
  !*** ./src/assets/js/handlebars_helpers.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var Hbars, renderTypes; }
})(this, function() {
    return function(Hbars, renderTps) {
        if (renderTps && typeof renderTypes === 'undefined') {
            var renderTypes = renderTps;
        }
        if (Hbars && typeof Handlebars === 'undefined') {
            Handlebars = Hbars;
        }

        if (typeof Handlebars !== 'undefined') {
            Handlebars.registerHelper('compare_length', function(
                arr,
                operator,
                val,
                opts
            ) {
                var result = false;
                switch (operator) {
                    case '==':
                        result = arr.length == val;
                        break;
                    case '<':
                        result = arr.length < val;
                        break;
                    case '>':
                        result = arr.length > val;
                        break;
                    default:
                        throw 'Unknown operator ' + operator;
                }

                if (result) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('escapeUrl', function(url) {
                if (!url || url.length < 1) {
                    return '';
                }
                return encodeURIComponent(url);
            });

            Handlebars.registerHelper('templateChooser', function(
                context,
                addTemplateClassname
            ) {
                var context = context instanceof Array ? context[0] : context;

                var parsedName = context['_meta']['schema']
                    .match(/(\/\w+)/g)
                    .splice(-1)[0]
                    .replace('/', '');
                var matchedTemplate;
                var templateName = 'acc-template-' + parsedName;
                for (var x in Handlebars.partials) {
                    if ((templateName.toLowerCase() === x.toLowerCase()) || (parsedName.toLowerCase() === x.toLowerCase())) {
                        matchedTemplate = Handlebars.partials[x].length ?
                            Handlebars.partials[x] :
                            Handlebars.template(Handlebars.partials[x]);
                        console.log(matchedTemplate);
                        break;
                    }
                }

                if (!matchedTemplate) {
                    return 'Template matching id: ' + matchedTemplate + ' not found';
                }

                context.addTemplateClassname =
                    typeof addTemplateClassname !== 'undefined' ?
                    addTemplateClassname :
                    '';
                return new Handlebars.SafeString(matchedTemplate(context));
            });

            Handlebars.registerHelper('aspectRatio', function(wh) {
                var str = '';

                if (wh) {
                    str += '&$poi=0$&sm=aspect&aspect=' + wh;
                }

                return str;
            });

            Handlebars.registerHelper('dynamicTemplate', function(
                id,
                renderTypes,
                context,
                addTemplateClassname
            ) {
                if (id === false) {
                    id = context['@type'];
                }

                if (renderTypes) {
                    context.renderTypes = renderTypes;
                } else {
                    renderTypes = context.renderTypes;
                }

                var parsedId =
                    id.indexOf('/') === -1 ?
                    id :
                    id.substring(id.lastIndexOf('/') + 1, id.length);
                var matchedTemplate;
                for (var name in renderTypes) {
                    if (parsedId === renderTypes[name]) {
                        matchedTemplate = Handlebars.partials[name].length ?
                            Handlebars.partials[name] :
                            Handlebars.template(Handlebars.partials[name]);
                        break;
                    }
                }
                if (!matchedTemplate) {
                    return 'Template matching id: ' + id + ' not found';
                }

                context.addTemplateClassname =
                    typeof addTemplateClassname !== 'undefined' ?
                    addTemplateClassname :
                    '';
                return new Handlebars.SafeString(matchedTemplate(context));
            });

            Handlebars.registerHelper('matchType', function(id, renderName, opts) {
                if (!renderTypes) {
                    return new Handlebars.SafeString('renderTypes are undefined');
                }

                var parsedId =
                    id.indexOf('/') === -1 ?
                    id :
                    id.substring(id.lastIndexOf('/') + 1, id.length);
                if (renderTypes[renderName] === parsedId) {
                    return opts.fn(this);
                }
            });

            Handlebars.registerHelper('math', function(
                lvalue,
                operator,
                rvalue,
                options
            ) {
                lvalue = parseFloat(lvalue);
                rvalue = parseFloat(rvalue);

                return {
                    '+': lvalue + rvalue,
                    '-': lvalue - rvalue,
                    '*': lvalue * rvalue,
                    '/': lvalue / rvalue,
                    '%': lvalue % rvalue
                }[operator];
            });

            Handlebars.registerHelper('bannerConfig', function(opts) {
                var style = '';
                hex = this.bannerColor || '#fff';
                alpha = this.bannerOpacity || 1;
                hex = hex.replace('#', '');

                if (hex.length === 3) {
                    var hexArr = hex.split('');
                    hex = hexArr[0] + hexArr[0];
                    hex += hexArr[1] + hexArr[1];
                    hex += hexArr[2] + hexArr[2];
                }

                var r = parseInt(hex.slice(0, 2), 16);
                var g = parseInt(hex.slice(2, 4), 16);
                var b = parseInt(hex.slice(4, 6), 16);

                if (alpha) {
                    style +=
                        'background-color:rgba(' +
                        r +
                        ', ' +
                        g +
                        ', ' +
                        b +
                        ', ' +
                        alpha +
                        '); ';
                } else {
                    style += 'background-color:rgb(' + r + ', ' + g + ', ' + b + '); ';
                }

                if (this.textColour) {
                    style += 'color: #' + this.textColour;
                }

                return style;
            });

            Handlebars.registerHelper('roundelConfig', function(roundel) {
                if (
                    roundel &&
                    roundel[0] &&
                    roundel[0].roundel &&
                    roundel[0].roundel.name
                ) {
                    var roundelParams = [];
                    var imageRoundelIndex;
                    for (var x = 0; x < roundel.length; x++) {
                        var roundelParam = '';
                        switch (roundel[x].roundelPosition) {
                            case 'Bottom Right':
                                roundelParam = 'p1_img=';
                                imageRoundelIndex = 1;
                                break;
                            case 'Bottom Left':
                                roundelParam = 'p2_img=';
                                imageRoundelIndex = 2;
                                break;
                            case 'Top Left':
                                roundelParam = 'p3_img=';
                                imageRoundelIndex = 3;
                                break;
                            case 'Top Right':
                                roundelParam = 'p4_img=';
                                imageRoundelIndex = 4;
                                break;
                        }

                        var roundelRatio = roundel[x].roundelRatio;
                        roundelParam +=
                            roundel[x].roundel.name +
                            (roundelRatio ?
                                '&roundelRatio' + imageRoundelIndex + '=' + roundelRatio :
                                '');
                        roundelParams.push(roundelParam);
                    }

                    return roundelParams.join('&');
                } else {
                    return '';
                }
            });

            Handlebars.registerHelper('bannerRoundel', function(roundel, options) {
                if (
                    roundel &&
                    roundel[0] &&
                    roundel[0].roundel &&
                    roundel[0].roundel.name
                ) {
                    var roundelParams = ['$banner-roundel$'];
                    var imageRoundelIndex;
                    for (var x = 0; x < roundel.length; x++) {
                        var roundelParam = '';
                        switch (roundel[x].roundelPosition) {
                            case 'Bottom Right':
                                roundelParam = 'p1_img=';
                                imageRoundelIndex = 1;
                                break;
                            case 'Bottom Left':
                                roundelParam = 'p2_img=';
                                imageRoundelIndex = 2;
                                break;
                            case 'Top Left':
                                roundelParam = 'p3_img=';
                                imageRoundelIndex = 3;
                                break;
                            case 'Top Right':
                                roundelParam = 'p4_img=';
                                imageRoundelIndex = 4;
                                break;
                        }

                        var roundelRatio = roundel[x].roundelRatio;

                        if (options && options.hash && options.hash.aspectRatio) {
                            roundelRatio = options.hash.aspectRatio;
                        }
                        roundelParam +=
                            roundel[x].roundel.name +
                            (roundelRatio ?
                                '&roundelRatio' + imageRoundelIndex + '=' + roundelRatio :
                                '');
                        roundelParams.push(roundelParam);
                    }

                    return roundelParams.join('&');
                } else {
                    return '';
                }
            });

            Handlebars.registerHelper('bannerPOI', function(options) {
                if (!options || !options.hash || !options.hash.name) {
                    return '';
                }

                var str = '$banner-poi=0$&layer0=[src=/i//' + options.hash.name;

                if (options.hash.aspect) {
                    str += '&aspect=' + options.hash.aspect;
                }

                if (options.hash.w) {
                    str += '&w=' + options.hash.w;
                }

                if (options.hash.h) {
                    str += '&h=' + options.hash.h;
                }

                str += ']';

                return str;
            });

            Handlebars.registerHelper('splitBlock', function(index, split) {
                if (typeof split === 'undefined') {
                    return '';
                }
                var id = parseInt(index, 10);
                var splitter = split.split('/');
                if (id === 0) {
                    return 'amp-dc-size-' + splitter[0];
                }

                return 'amp-dc-size-' + splitter[1];
            });

            Handlebars.registerHelper('iff', function(a, operator, b, opts) {
                var bool = false;
                switch (operator) {
                    case '==':
                        bool = a == b;
                        break;
                    case '>':
                        bool = a > b;
                        break;
                    case '<':
                        bool = a < b;
                        break;
                    default:
                        throw 'Unknown operator ' + operator;
                }

                if (bool) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('roundelProperties', function(opts) {
                if (
                    this.roundel &&
                    this.roundel[0] &&
                    this.roundel[0].roundel &&
                    this.roundel[0].roundelPosition &&
                    this.roundel[0].roundelRatio
                ) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('showdown', function(text) {
                if (typeof showdown === 'undefined') {
                    return text || '';
                }
                var converter = new showdown.Converter({
                    noHeaderId: true,
                    simpleLineBreaks: true
                });

                var text = converter.makeHtml(text);

                if (typeof text === 'undefined') {
                    text = '';
                }

                return new Handlebars.SafeString(text);
            });

            Handlebars.registerHelper("foreach", function(arr, options) {
                if (options.inverse && !arr.length)
                    return options.inverse(this);

                return arr.map(function(item, index) {
                    item.$index = index;
                    item.$first = index === 0;
                    item.$last = index === arr.length - 1;
                    return options.fn(item);
                }).join('');
            });

            // Handlebars.registerHelper("totalAmount", function(arr, options) {
            //     let sum = 0;

            //     for (let i = 0; i < arr.length; i++) {
            //         sum += arr[i]['price']['value'] * arr[i]['count'];
            //     }
            //     return sum;
            // });
            Handlebars.registerHelper('reverseWord', function(value) {
                var reversedWord = value.split("").reverse().join("");
                return reveredWord;
            });

            Handlebars.registerHelper('ifSecond', function(index, options) {
                if (index % 2 == 0) {
                    return options.fn(this);
                } else {
                    return options.inverse(this);
                }

            });
        } else {
            console.warn(
                'Handlebars is not defined, please make sure you included Handlebars library'
            );
        }
    };
});

/***/ })

}]);
//# sourceMappingURL=search-landingpage-search-landingpage-module.js.map
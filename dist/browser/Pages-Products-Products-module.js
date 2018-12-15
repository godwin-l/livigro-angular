(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Products-Products-module"],{

/***/ "./src/app/Pages/Products/DetailPage/DetailPage.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Pages/Products/DetailPage/DetailPage.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"singleProductData\">\r\n  <embryo-PageTitle heading=\"{{singleProductData.name}}\"></embryo-PageTitle>\r\n  <div class=\"inner-container\">\r\n    <div class=\"product-detail-page\">\r\n      <embryo-ShopDetails [currency]=\"embryoService?.currency\" [detailData]=\"singleProductData\"></embryo-ShopDetails>\r\n      <div class=\"bg-grey section-gap\" *ngIf=\"productsList && productsList.length>0\">\r\n        <div class=\"container\">\r\n          <div class=\"block-title text-center gap\">\r\n            <h2>You Might Also Like</h2>\r\n          </div>\r\n          <embryo-ProductGrid [currency]=\"embryoService?.currency\" [products]=\"productsList\" gridLength=\"4\" (addToCart)=\"addToCart($event)\" (addToWishList)=\"addToWishList($event)\"></embryo-ProductGrid>\r\n          <div class=\"text-center mt-4\">\r\n            <button mat-raised-button [routerLink]=\"['/products', type]\">Show All</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/Pages/Products/DetailPage/DetailPage.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Pages/Products/DetailPage/DetailPage.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-group .mat-form-field {\n  width: 110px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvUHJvZHVjdHMvRGV0YWlsUGFnZS9DOlxcVXNlcnNcXEdvZHdpblxcRGVza3RvcFxcbGl2aWdyby1hbmd1bGFyL3NyY1xcYXBwXFxQYWdlc1xcUHJvZHVjdHNcXERldGFpbFBhZ2VcXERldGFpbFBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFZLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9Qcm9kdWN0cy9EZXRhaWxQYWdlL0RldGFpbFBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWdyb3VwIC5tYXQtZm9ybS1maWVsZCB7XHJcblx0d2lkdGg6IDExMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/Products/DetailPage/DetailPage.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/Products/DetailPage/DetailPage.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageComponent", function() { return DetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPageComponent = /** @class */ (function () {
    function DetailPageComponent(route, router, embryoService) {
        this.route = route;
        this.router = router;
        this.embryoService = embryoService;
    }
    DetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.id = res.id;
            _this.type = res.type;
            _this.getData();
        });
    };
    DetailPageComponent.prototype.getData = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges().subscribe(function (res) { return _this.checkResponse(res); });
    };
    DetailPageComponent.prototype.checkResponse = function (response) {
        this.productsList = null;
        this.productsList = response[this.type];
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.id == this.id) {
                this.singleProductData = data;
                break;
            }
        }
    };
    DetailPageComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    DetailPageComponent.prototype.addToWishList = function (value) {
        this.embryoService.addToWishlist(value);
    };
    DetailPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-DetailPage',
            template: __webpack_require__(/*! ./DetailPage.component.html */ "./src/app/Pages/Products/DetailPage/DetailPage.component.html"),
            styles: [__webpack_require__(/*! ./DetailPage.component.scss */ "./src/app/Pages/Products/DetailPage/DetailPage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"]])
    ], DetailPageComponent);
    return DetailPageComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Products/Products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/Products/Products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-instantsearch */ "./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Products_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Products.routing */ "./src/app/Pages/Products/Products.routing.ts");
/* harmony import */ var _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductsList/ProductsList.component */ "./src/app/Pages/Products/ProductsList/ProductsList.component.ts");
/* harmony import */ var _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailPage/DetailPage.component */ "./src/app/Pages/Products/DetailPage/DetailPage.component.ts");
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Global/Global.module */ "./src/app/Global/Global.module.ts");
/* harmony import */ var _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Templates/Templates.module */ "./src/app/Templates/Templates.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Products_routing__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutes"]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__["GlobalModule"],
                _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__["NgAisModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [
                _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_6__["ProductsListComponent"],
                _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_7__["DetailPageComponent"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/Pages/Products/Products.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/Pages/Products/Products.routing.ts ***!
  \****************************************************/
/*! exports provided: ProductsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutes", function() { return ProductsRoutes; });
/* harmony import */ var _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsList/ProductsList.component */ "./src/app/Pages/Products/ProductsList/ProductsList.component.ts");
/* harmony import */ var _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailPage/DetailPage.component */ "./src/app/Pages/Products/DetailPage/DetailPage.component.ts");


var ProductsRoutes = [
    {
        path: '',
        component: _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_0__["ProductsListComponent"]
    },
    {
        path: ':type/:id',
        component: _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_1__["DetailPageComponent"]
    },
    {
        path: ':type',
        component: _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_0__["ProductsListComponent"]
    }
];


/***/ }),

/***/ "./src/app/Pages/Products/ProductsList/ProductsList.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Products/ProductsList/ProductsList.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"pageTitle\">\r\n<embryo-PageTitle heading=\"{{pageTitle}}\" subHeading=\"{{subPageTitle}}\"></embryo-PageTitle>\r\n<div class=\"inner-container section-gap\">\r\n  <div class=\"container\">\r\n    <!-- Products with free api key  -->\r\n    <ais-instantsearch\r\n        [config]=\"{\r\n          appId: 'latency',\r\n          apiKey: '6be0576ff61c053d5f9a3225e2a90f76',\r\n          indexName: 'ikea'\r\n        }\">\r\n      <div fxLayout=\"row wrap\"  class=\"col-gap\">\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"35\" fxFlex.lg=\"25\" fxFlex.xl=\"25\">\r\n          <div class=\"mat-card mb-4\">\r\n            <ais-search-box placeholder=\"Search a product\"></ais-search-box>\r\n          </div>\r\n          <div class=\"mat-card mb-4\">\r\n            <div class=\"facet-category-title\">Show results for</div>\r\n            <ais-hierarchical-menu\r\n              [attributes]=\"['category', 'sub_category', 'sub_sub_category']\"\r\n              [sortBy]=\"['name:asc']\"\r\n            >\r\n            </ais-hierarchical-menu>\r\n          </div>\r\n          <div class=\"mat-card mb-4\">\r\n            <ais-panel header=\"Categories\">\r\n              <ais-refinement-list\r\n                attribute=\"materials\"\r\n                operator=\"or\"\r\n                limit=\"10\"\r\n              >\r\n              </ais-refinement-list>\r\n            </ais-panel>\r\n          </div>\r\n          <div class=\"mat-card mb-4\">\r\n              <ais-panel header=\"Colors\">\r\n                <ais-refinement-list\r\n                  attribute=\"colors\"\r\n                  operator=\"or\"\r\n                  limit=\"10\"\r\n                >\r\n                </ais-refinement-list>\r\n              </ais-panel>\r\n            </div>\r\n            <div class=\"mat-card mb-4\">\r\n              <ais-panel header=\"Prices\">\r\n                <ais-range-slider attribute=\"price\" [pips]=\"true\" [tooltips]=\"true\" [min]=\"0\"></ais-range-slider>\r\n              </ais-panel>\r\n            </div>\r\n            <div class=\"mat-card mb-4\">\r\n              <ais-panel header=\"CUSTOMER RATINGS\"></ais-panel>\r\n              <ais-rating-menu attribute=\"rating\" andUpLabel=\"\"></ais-rating-menu>\r\n            </div>\r\n            <div class=\"mat-card mb-4\">\r\n              <ais-clear-refinements buttonLabel=\"Clear all filters\"></ais-clear-refinements>\r\n            </div>\r\n          </div>\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"75\" fxFlex.xl=\"75\" class=\"algolia-main-list\">\r\n            <ais-stats></ais-stats>\r\n            <ais-panel header=\"Sort by\">\r\n              <ais-sort-by\r\n              [items]=\"[\r\n                {name: 'ikea', label: 'Featured'},\r\n                {name: 'ikea_price_asc', label: 'Price asc.'},\r\n                {name: 'ikea_price_desc', label: 'Price desc.'}\r\n              ]\r\n              \">\r\n              </ais-sort-by>\r\n            </ais-panel>\r\n            <ais-hits-per-page [items]=\"[\r\n                { value: 3, label: '3 per page' },\r\n                { value: 6, label: '6 per page' },\r\n                { value: 12, label: '12 per page', default:true}\r\n             ]\"></ais-hits-per-page>\r\n            <ais-hits [transformItems]=\"transformHits\">\r\n              <ng-template let-hits=\"hits\" let-results=\"results\">\r\n                <ng-container *ngIf=\"(hits && hits.length>0); else errorBlock\">\r\n                  <embryo-ProductGrid [currency]=\"embryoService?.currency\" [products]=\"hits\" (addToCart)=\"addToCart($event)\" (addToWishList)=\"addToWishList($event)\" gridThree=true> \r\n                  </embryo-ProductGrid>\r\n                </ng-container>\r\n                <ng-template #errorBlock>\r\n                  No Product Found.\r\n                </ng-template>\r\n              </ng-template> \r\n            </ais-hits>\r\n            <ais-pagination></ais-pagination>\r\n          </div>\r\n        </div>\r\n      </ais-instantsearch>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/Pages/Products/ProductsList/ProductsList.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Products/ProductsList/ProductsList.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1Byb2R1Y3RzL1Byb2R1Y3RzTGlzdC9Qcm9kdWN0c0xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Pages/Products/ProductsList/ProductsList.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Products/ProductsList/ProductsList.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(route, router, embryoService) {
        this.route = route;
        this.router = router;
        this.embryoService = embryoService;
        this.pips = true;
        this.tooltips = true;
        this.subscribers = {};
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.category = queryParams['category'];
                _this.type = null;
                _this.type = params['type'];
                _this.getPageTitle();
            });
        });
    };
    ProductsListComponent.prototype.getPageTitle = function () {
        this.pageTitle = null;
        this.subPageTitle = null;
        switch (this.type || this.category) {
            case undefined:
                this.pageTitle = "Fashion";
                this.subPageTitle = "Explore your favourite fashion style.";
                break;
            case "gadgets":
                this.pageTitle = "Gadgets";
                this.subPageTitle = "Check out our new gadgets.";
                break;
            case "accessories":
                this.pageTitle = "Accessories";
                this.subPageTitle = "Choose the wide range of best accessories.";
                break;
            default:
                this.pageTitle = "Products";
                this.subPageTitle = null;
                break;
        }
    };
    ProductsListComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    ProductsListComponent.prototype.addToWishList = function (value) {
        this.embryoService.addToWishlist(value);
    };
    ProductsListComponent.prototype.transformHits = function (hits) {
        hits.forEach(function (hit) {
            hit.stars = [];
            for (var i = 1; i <= 5; i) {
                hit.stars.push(i <= hit.rating);
                i += 1;
            }
        });
        return hits;
    };
    ProductsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ProductsList',
            template: __webpack_require__(/*! ./ProductsList.component.html */ "./src/app/Pages/Products/ProductsList/ProductsList.component.html"),
            styles: [__webpack_require__(/*! ./ProductsList.component.scss */ "./src/app/Pages/Products/ProductsList/ProductsList.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Products-Products-module.js.map
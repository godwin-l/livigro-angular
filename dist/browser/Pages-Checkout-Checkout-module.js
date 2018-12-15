(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Checkout-Checkout-module"],{

/***/ "./node_modules/ngx-card/card.js":
/*!***************************************!*\
  !*** ./node_modules/ngx-card/card.js ***!
  \***************************************/
/*! exports provided: NgxCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCard", function() { return NgxCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs */ "./node_modules/ngx-card/inputs.js");


var defaultPlaceholders = {
    number: '•••• •••• •••• ••••',
    name: 'Full Name',
    expiry: '••/••',
    cvc: '•••',
};
var defaultMessages = {
    validDate: 'valid\nthru',
    monthYear: 'month/year',
};
var NgxCard = (function () {
    function NgxCard(element) {
        this.element = element;
        this.formatting = true; // optional - default true
        // if true, will log helpful messages for setting up Card
        this.debug = false; // optional - default false
    }
    Object.defineProperty(NgxCard.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        set: function (_messages) {
            this._messages = Object.assign({}, defaultMessages, _messages);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxCard.prototype, "placeholders", {
        get: function () {
            return this._placeholders;
        },
        set: function (_placeholders) {
            this._placeholders = Object.assign({}, defaultPlaceholders, _placeholders);
        },
        enumerable: true,
        configurable: true
    });
    NgxCard.prototype.ngAfterViewInit = function () {
        new Card({
            form: this.element.nativeElement,
            container: this.container,
            width: this.width,
            formSelectors: {
                numberInput: this.findSelectors(this.numbers),
                expiryInput: this.findSelectors(this.expiries),
                cvcInput: this.findSelectors(this.cvcs),
                nameInput: this.findSelectors(this.names),
            },
            formatting: this.formatting,
            messages: this.messages,
            placeholders: this.placeholders,
            masks: this.masks,
            debug: this.debug,
        });
    };
    NgxCard.prototype.findSelectors = function (list) {
        return list.map(function (template) { return template.elementRef.nativeElement.tagName.toLowerCase() + '[name="' + template.name + '"]'; })
            .join(', ');
    };
    return NgxCard;
}());

NgxCard.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[card]',
            },] },
];
/** @nocollapse */
NgxCard.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
NgxCard.propDecorators = {
    'container': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['card-width',] },],
    'messages': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'placeholders': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'masks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'formatting': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'debug': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'numbers': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_inputs__WEBPACK_IMPORTED_MODULE_1__["NgxCardNumberTemplate"], { descendants: true },] },],
    'names': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_inputs__WEBPACK_IMPORTED_MODULE_1__["NgxCardNameTemplate"], { descendants: true },] },],
    'expiries': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_inputs__WEBPACK_IMPORTED_MODULE_1__["NgxCardExpiryTemplate"], { descendants: true },] },],
    'cvcs': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_inputs__WEBPACK_IMPORTED_MODULE_1__["NgxCardCvcTemplate"], { descendants: true },] },],
};
;
//# sourceMappingURL=card.js.map

/***/ }),

/***/ "./node_modules/ngx-card/inputs.js":
/*!*****************************************!*\
  !*** ./node_modules/ngx-card/inputs.js ***!
  \*****************************************/
/*! exports provided: NgxCardNumberTemplate, NgxCardNameTemplate, NgxCardExpiryTemplate, NgxCardCvcTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCardNumberTemplate", function() { return NgxCardNumberTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCardNameTemplate", function() { return NgxCardNameTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCardExpiryTemplate", function() { return NgxCardExpiryTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCardCvcTemplate", function() { return NgxCardCvcTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/ngx-card/util.js");


var NgxCardNumberTemplate = (function () {
    function NgxCardNumberTemplate(elementRef, name) {
        this.elementRef = elementRef;
        this.name = name;
    }
    NgxCardNumberTemplate.prototype.ngOnInit = function () {
        this.name = this.name || Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniqueId"])('number');
    };
    return NgxCardNumberTemplate;
}());

NgxCardNumberTemplate.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[card-number]',
                host: {
                    '[name]': 'name',
                },
            },] },
];
/** @nocollapse */
NgxCardNumberTemplate.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['name',] },] },
]; };
var NgxCardNameTemplate = (function () {
    function NgxCardNameTemplate(elementRef, name) {
        this.elementRef = elementRef;
        this.name = name;
    }
    NgxCardNameTemplate.prototype.ngOnInit = function () {
        this.name = this.name || Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniqueId"])('name');
    };
    return NgxCardNameTemplate;
}());

NgxCardNameTemplate.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[card-name]',
                host: {
                    '[name]': 'name',
                },
            },] },
];
/** @nocollapse */
NgxCardNameTemplate.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['name',] },] },
]; };
var NgxCardExpiryTemplate = (function () {
    function NgxCardExpiryTemplate(elementRef, name) {
        this.elementRef = elementRef;
        this.name = name;
    }
    NgxCardExpiryTemplate.prototype.ngOnInit = function () {
        this.name = this.name || Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniqueId"])('expiry');
    };
    return NgxCardExpiryTemplate;
}());

NgxCardExpiryTemplate.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[card-expiry]',
                host: {
                    '[name]': 'name',
                },
            },] },
];
/** @nocollapse */
NgxCardExpiryTemplate.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['name',] },] },
]; };
var NgxCardCvcTemplate = (function () {
    function NgxCardCvcTemplate(elementRef, name) {
        this.elementRef = elementRef;
        this.name = name;
    }
    NgxCardCvcTemplate.prototype.ngOnInit = function () {
        this.name = this.name || Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniqueId"])('cvc');
    };
    return NgxCardCvcTemplate;
}());

NgxCardCvcTemplate.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[card-cvc]',
                host: {
                    '[name]': 'name',
                },
            },] },
];
/** @nocollapse */
NgxCardCvcTemplate.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['name',] },] },
]; };
//# sourceMappingURL=inputs.js.map

/***/ }),

/***/ "./node_modules/ngx-card/module.js":
/*!*****************************************!*\
  !*** ./node_modules/ngx-card/module.js ***!
  \*****************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs */ "./node_modules/ngx-card/inputs.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./node_modules/ngx-card/card.js");



var CARD_DIRECTIVES = [
    _card__WEBPACK_IMPORTED_MODULE_2__["NgxCard"],
    _inputs__WEBPACK_IMPORTED_MODULE_1__["NgxCardNumberTemplate"],
    _inputs__WEBPACK_IMPORTED_MODULE_1__["NgxCardNameTemplate"],
    _inputs__WEBPACK_IMPORTED_MODULE_1__["NgxCardExpiryTemplate"],
    _inputs__WEBPACK_IMPORTED_MODULE_1__["NgxCardCvcTemplate"],
];
var CardModule = (function () {
    function CardModule() {
    }
    return CardModule;
}());

CardModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [CARD_DIRECTIVES],
                exports: [CARD_DIRECTIVES],
            },] },
];
/** @nocollapse */
CardModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/ngx-card/ngx-card.js":
/*!*******************************************!*\
  !*** ./node_modules/ngx-card/ngx-card.js ***!
  \*******************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./node_modules/ngx-card/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return _module__WEBPACK_IMPORTED_MODULE_0__["CardModule"]; });


//# sourceMappingURL=ngx-card.js.map

/***/ }),

/***/ "./node_modules/ngx-card/util.js":
/*!***************************************!*\
  !*** ./node_modules/ngx-card/util.js ***!
  \***************************************/
/*! exports provided: uniqueId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
// Generate a unique id (unique within the entire client session).
// Useful for temporary DOM ids.
// Generate a unique id (unique within the entire client session).
var uniqueId = (function () {
    var idCounter = 0;
    return function (prefix) {
        if (prefix === void 0) { prefix = 'uid'; }
        return "card_" + prefix + "_" + ++idCounter;
    };
}());
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./src/app/Pages/Checkout/Checkout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/Checkout/Checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_card_ngx_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-card/ngx-card */ "./node_modules/ngx-card/ngx-card.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _Checkout_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Checkout.routing */ "./src/app/Pages/Checkout/Checkout.routing.ts");
/* harmony import */ var _Payment_Payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Payment/Payment.component */ "./src/app/Pages/Checkout/Payment/Payment.component.ts");
/* harmony import */ var _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Signin/Signin.component */ "./src/app/Pages/Checkout/Signin/Signin.component.ts");
/* harmony import */ var _FinalReceipt_FinalReceipt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FinalReceipt/FinalReceipt.component */ "./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.ts");
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Global/Global.module */ "./src/app/Global/Global.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Checkout_routing__WEBPACK_IMPORTED_MODULE_7__["CheckoutRoutes"]),
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_11__["GlobalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_card_ngx_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"]
            ],
            declarations: [
                _Payment_Payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"],
                _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"],
                _FinalReceipt_FinalReceipt_component__WEBPACK_IMPORTED_MODULE_10__["FinalReceiptComponent"]
            ]
        })
    ], CheckoutModule);
    return CheckoutModule;
}());



/***/ }),

/***/ "./src/app/Pages/Checkout/Checkout.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/Pages/Checkout/Checkout.routing.ts ***!
  \****************************************************/
/*! exports provided: CheckoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutRoutes", function() { return CheckoutRoutes; });
/* harmony import */ var _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signin/Signin.component */ "./src/app/Pages/Checkout/Signin/Signin.component.ts");
/* harmony import */ var _Payment_Payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payment/Payment.component */ "./src/app/Pages/Checkout/Payment/Payment.component.ts");
/* harmony import */ var _FinalReceipt_FinalReceipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FinalReceipt/FinalReceipt.component */ "./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.ts");



var CheckoutRoutes = [
    {
        path: "",
        component: _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"]
    },
    {
        path: 'signin',
        component: _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"]
    },
    {
        path: 'payment',
        component: _Payment_Payment_component__WEBPACK_IMPORTED_MODULE_1__["PaymentComponent"]
    },
    {
        path: 'final-receipt',
        component: _FinalReceipt_FinalReceipt_component__WEBPACK_IMPORTED_MODULE_2__["FinalReceiptComponent"]
    }
];


/***/ }),

/***/ "./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<embryo-PageTitle heading=\"Payment Confirmation\"></embryo-PageTitle>\r\n\r\n<div class=\"inner-container\" *ngIf=\"(embryoService.buyUserCartProducts && embryoService.buyUserCartProducts.length>0); else elseBlock\">\r\n  <div class=\"bg-white final-receipt-page section-gap\" *ngIf=\"userDetails\">\r\n    <div class=\"final-receipt\">\r\n      <div class=\"container\">\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"col-gap\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"60\" fxFlex.lg=\"60\" fxFlex.xl=\"60\">\r\n            <mat-card class=\"pt-0\">\r\n              <div id=\"payment-receipt\">\r\n              <div class=\"text-center bg-grey p-5 mat-card-pad-none\">\r\n                <h1>Thank You</h1>\r\n                <h5 class=\"mb-4\">Payment is successfully processsed and your order is on the way </h5>\r\n                <h6 class=\"mb-4\">Transaction ID:267676GHERT105467</h6>\r\n                <img src=\"assets/images/checked.png\" width=\"64\" height=\"64\" alt=\"Success\">\r\n              </div>\r\n              <div class=\"py-5\">\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\">\r\n                  <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                    <h6>Summery</h6>\r\n                    <p class=\"mb-1\">Order ID: 2563883628932</p>\r\n                    <p class=\"mb-1\">Order Date: {{todayDate | date:'MMMM d, y'}} </p>\r\n                    <p class=\"mb-1\">Order Total: {{getTotalPrice() | currency:embryoService?.currency}}</p>\r\n                  </div>\r\n                  <div class=\"pb-4\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                    <h6>Ship To</h6>\r\n                    <p class=\"mb-1 text-capitalize\">{{userDetails?.user_details?.first_name}} {{userDetails?.user_details?.last_name}}</p>\r\n                    <p class=\"mb-1 text-capitalize\">{{userDetails?.user_details?.apt}}</p>\r\n                    <p class=\"mb-1 text-capitalize\">{{userDetails?.user_details?.city_state}}</p>\r\n                    <p class=\"mb-1 text-capitalize\">{{userDetails?.user_details?.country}} - {{userDetails?.user_details?.zip_code}}</p>\r\n                    <p class=\"mb-1\">Contact No. {{userDetails?.user_details?.mobile}}</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"py-4 text-center bg-grey\">\r\n                  <h4>Expected Date of Delivery</h4>\r\n                  <h3>{{deliveryDate | date:'MMMM d, y'}}</h3>\r\n                </div>\r\n                <h4 class=\"pt-5\">Your Ordered Details</h4>\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"col-gap\" *ngFor=\"let product of embryoService.buyUserCartProducts\">\r\n                  <div fxFlex.xs=\"20\" fxFlex.sm=\"25\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\">\r\n                    <img width=\"100\" [src]=\"product?.image\" alt=\"cart Image\">\r\n                  </div>\r\n                  <div fxFlex.xs=\"30\" fxFlex.sm=\"25\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\">\r\n                    <h6>Product Name</h6>\r\n                    <p class=\"font-bold\">{{product?.name}}</p>\r\n                  </div>\r\n                  <div fxFlex.xs=\"25\" fxFlex.sm=\"25\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\">\r\n                    <h6>Quantity</h6>\r\n                    <p *ngIf=\"product?.quantity\">{{product?.quantity}}</p>\r\n                    <p *ngIf=\"!product?.quantity\">1</p>\r\n                  </div>\r\n                  <div fxFlex.xs=\"25\" fxFlex.sm=\"25\" fxFlex.md=\"25\" fxFlex.lg=\"25\" fxFlex.xl=\"25\">\r\n                    <h6>Price</h6>\r\n                    <p>{{ calculateProductSinglePrice(product, product?.quantity) | currency:embryoService?.currency}}</p>\r\n                  </div>\r\n                </div>\r\n                <hr class=\"dark-border spacer\">\r\n                <div class=\"text-right \">\r\n                  <div>\r\n                    <p>Subtotal</p><span fxFlex></span> {{calculateTotalPrice() | currency:embryoService?.currency}}\r\n                  </div>\r\n                  <div>\r\n                    <p>Shipping</p><span fxFlex></span> {{embryoService.shipping | currency:embryoService?.currency}}\r\n                  </div>\r\n                  <div>\r\n                    <p>Tax(GST)</p><span fxFlex></span> {{embryoService.tax | currency:embryoService?.currency}}\r\n                  </div>\r\n                  <hr class=\"spacer\">\r\n                  <div class=\"mb-4\">\r\n                    <h4>Total</h4><span fxFlex></span>\r\n                    <h4> {{getTotalPrice() | currency:embryoService?.currency}}</h4>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>\r\n              <div class=\"btn-group\">\r\n              \r\n              <button mat-raised-button color=\"accent\" class=\"button-lg\" type=\"button\" (click)=\"printDiv()\">Download PDF</button>\r\n              <button mat-raised-button color=\"accent\" class=\"button-lg\" [routerLink]=\"['/']\">Go to Home</button>\r\n            </div>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #elseBlock>\r\n  <div class=\"section-gap-lg text-center\">\r\n    <div class=\"mb-4\">\r\n    <img src=\"assets/images/empty-cart.png\" height=\"128\" width=\"128\" alt=\"cart-empty\">\r\n  </div>\r\n    <h4> Your Shopping Bag is empty.</h4>\r\n    <a href=\"javascript:void(0)\" class=\"primary-color\" (click)=\"goToHome()\">Go for Shopping</a>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0NoZWNrb3V0L0ZpbmFsUmVjZWlwdC9GaW5hbFJlY2VpcHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.ts ***!
  \***********************************************************************/
/*! exports provided: FinalReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalReceiptComponent", function() { return FinalReceiptComponent; });
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



var FinalReceiptComponent = /** @class */ (function () {
    function FinalReceiptComponent(embryoService, router) {
        this.embryoService = embryoService;
        this.router = router;
        this.todayDate = new Date();
        this.getDeliveryDate();
        this.userDetails = JSON.parse(localStorage.getItem("user"));
    }
    FinalReceiptComponent.prototype.ngOnInit = function () {
    };
    FinalReceiptComponent.prototype.getDeliveryDate = function () {
        this.deliveryDate = new Date();
        this.deliveryDate.setDate(this.deliveryDate.getDate() + 5);
    };
    FinalReceiptComponent.prototype.calculateProductSinglePrice = function (product, value) {
        var price = 0;
        if (!value) {
            value = 1;
        }
        price = product.price * value;
        return price;
    };
    FinalReceiptComponent.prototype.calculateTotalPrice = function () {
        var subtotal = 0;
        if (this.embryoService.buyUserCartProducts && this.embryoService.buyUserCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.buyUserCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                subtotal += (product.price * product.quantity);
            }
            return subtotal;
        }
        return subtotal;
    };
    FinalReceiptComponent.prototype.getTotalPrice = function () {
        var total = 0;
        if (this.embryoService.buyUserCartProducts && this.embryoService.buyUserCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.buyUserCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                total += (product.price * product.quantity);
            }
            total += (this.embryoService.shipping + this.embryoService.tax);
            return total;
        }
        return total;
    };
    FinalReceiptComponent.prototype.goToHome = function () {
        this.embryoService.removeBuyProducts();
        this.router.navigate(['/']);
    };
    FinalReceiptComponent.prototype.printDiv = function () {
        var printContents = $($('#payment-receipt').html());
        var originalContents = $('body > *').hide();
        $('body').append(printContents);
        window.print();
        printContents.remove();
        originalContents.show();
    };
    FinalReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-FinalReceipt',
            template: __webpack_require__(/*! ./FinalReceipt.component.html */ "./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.html"),
            styles: [__webpack_require__(/*! ./FinalReceipt.component.scss */ "./src/app/Pages/Checkout/FinalReceipt/FinalReceipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FinalReceiptComponent);
    return FinalReceiptComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Checkout/Payment/Payment.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Pages/Checkout/Payment/Payment.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<embryo-PageTitle heading=\"Payment Information\"></embryo-PageTitle>\r\n\r\n<div class=\"inner-container section-gap\" *ngIf=\"(embryoService.localStorageCartProducts && embryoService.localStorageCartProducts.length>0); else elseBlock\">\r\n   <div class=\"checkout-option\">\r\n    <div class=\"container\">\r\n    <div class=\"view-cart text-right mb-5\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"toggleRightSidenav()\">Show Order Detail : {{getCartProducts() | currency:embryoService?.currency}}</button>\r\n    </div>\r\n      <mat-accordion class=\"mat-ex-wrapper\">\r\n        <form card container=\".card-container\" [formGroup] = \"paymentFormOne\">\r\n          <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n            <mat-expansion-panel-header>\r\n              <h4 class=\"mb-0\">Enter Your Shipping Address</h4>\r\n            </mat-expansion-panel-header>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\" formGroupName=\"user_details\">\r\n              <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"100\" fxFlex.xl=\"100\">\r\n                  <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\">\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"text\" placeholder=\"First Name\" formControlName=\"first_name\" required>\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.first_name').hasError('required') && paymentFormOne.get('user_details.first_name').touched\">This field should not be empty.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"text\" placeholder=\"Last Name\" formControlName=\"last_name\" required>\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.last_name').hasError('required') && paymentFormOne.get('user_details.last_name').touched\">This field should not be empty.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"text\" formControlName=\"street_name_number\" placeholder=\"Street Name or Number\">\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.street_name_number').hasError('required') && paymentFormOne.get('user_details.street_name_number').touched\">This field should not be empty.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\">\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"text\" placeholder=\"Apt Building Name\" formControlName=\"apt\" required>\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.apt').hasError('required') && paymentFormOne.get('user_details.apt').touched\">This field should not be empty.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"text\" placeholder=\"Zip Code\" formControlName=\"zip_code\" required>\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.zip_code').hasError('required') && paymentFormOne.get('user_details.zip_code').touched\">This field should not be empty.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\">\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"text\" placeholder=\"City and State\" formControlName=\"city_state\" required>\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.city_state').hasError('required') && paymentFormOne.get('user_details.city_state').touched\">This field should not be empty.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"text\" placeholder=\"Country\" formControlName=\"country\" required>\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.country').hasError('required') && paymentFormOne.get('user_details.country').touched\">This field should not be empty.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <h4>Enter Your Contact Infomation</h4>\r\n                  <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\">\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"text\" placeholder=\"Mobile\" formControlName=\"mobile\" required>\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.mobile').hasError('required') && paymentFormOne.get('user_details.mobile').touched\">This field should not be empty.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.email').hasError('required') && paymentFormOne.get('user_details.email').touched\">This field should not be empty.</mat-error>\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.email').hasError('pattern') && paymentFormOne.get('user_details.email').touched\">Please enter a valid email.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\">\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                      <h4>Share with other?</h4>\r\n                      <p>If you want to share order and shipping details with someone else then enter the email of that\r\n                        person. We will send order updates to this email also.\r\n                      </p>\r\n                      <div class=\"mb-2\">\r\n                        <mat-form-field class=\"w-100\">\r\n                          <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"share_email\">\r\n                          <mat-error *ngIf=\"paymentFormOne.get('user_details.share_email').hasError('pattern') && paymentFormOne.get('user_details.share_email').touched\">Please enter a valid email.</mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <button color=\"accent\" class=\"button-lg\" mat-raised-button type=\"button\" (click)=\"submitPayment()\">Continue to Payment </button>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n              </div>\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" [disabled]=\"isDisabledPaymentStepTwo\">\r\n            <mat-expansion-panel-header>\r\n              <h4 class=\"mb-0\">Unlock Offers or Apply PromoCodes</h4>\r\n            </mat-expansion-panel-header>\r\n            <mat-tab-group>\r\n              <mat-tab label=\"Offer Code\">\r\n                <div class=\"mat-inner-tab\">\r\n                  <div class=\"header-mat-tab bg-grey text-center\">\r\n                    <div class=\"mb-4\"><img src=\"assets/images/discount.png\" alt=\"\"></div>\r\n                    <h4 class=\"mb-5\">Apply for Embryo offer/Discount</h4>\r\n                  </div>\r\n                  <div class=\"container-mat-tab\">\r\n                    <div fxLayout='row wrap' fxLayoutAlign=\"center center\">\r\n                      <div fxLayout.xs=\"100\" fxLayout.sm=\"100\" fxLayout.md=\"50\" fxLayout.lg=\"50\" fxLayout.xl=\"50\">\r\n                        <div fxLayoutAlign=\"start center\" formGroupName=\"offers\">\r\n                          <mat-form-field class=\"w-100\">\r\n                            <input matInput type=\"text\" formControlName=\"discount_code\" placeholder=\"Enter Code\">\r\n                          </mat-form-field>\r\n                          <button mat-icon-button type=\"button\" (click)=\"submitPayment()\">\r\n                            <i class=\"material-icons\">send</i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div fxLayout='row wrap' fxLayoutAlign=\"center center\" class=\"text-center\">\r\n                      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                        <p class=\"text-muted mb-0\">*Only Valid coupon or offer code is acceptable.</p>\r\n                        <p class=\"text-muted\"> To know your coupon valid or not click <a href=\"javascript:void()\">Here</a></p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </mat-tab>\r\n              <mat-tab label=\"Credit/Debit/NetBanking\" *ngIf=\"offerCards && offerCards.length>0\">\r\n                <div class=\"mat-inner-tab text-center\" formGroupName=\"offers\">\r\n                  <div class=\"header-mat-tab bg-grey\">\r\n                    <div class=\"mb-4\"> <img src=\"assets/images/card.png\" alt=\"\"></div>\r\n                    <h4 class=\"mb-5\">Apply for Card offers</h4>\r\n                  </div>\r\n                  <hr class=\"dark-border\">\r\n                  <div >\r\n                    <div class=\"card-radio\">\r\n                     \r\n                        <mat-radio-group formControlName=\"card_type\">\r\n                          <mat-radio-button *ngFor=\"let card of offerCards\" [value]=\"card?.id\" >\r\n                            <span class=\"font-bold\"> {{card?.content}}</span>\r\n                            <p class=\"text-muted\">{{card?.name}}</p>\r\n                          </mat-radio-button>\r\n                        </mat-radio-group>\r\n                      \r\n                    </div>\r\n                  </div>\r\n                  <hr class=\"dark-border\">\r\n                  <div>\r\n                    <h4 class=\"mb-5\">Select Offer Name</h4>\r\n                  </div>\r\n                    <mat-form-field>\r\n                      <mat-select formControlName=\"card_type_offer_name\">\r\n                        <mat-option value=null>None</mat-option>\r\n                        <mat-option value=\"option1\">Option 1</mat-option>\r\n                        <mat-option value=\"option2\">Option 2</mat-option>\r\n                        <mat-option value=\"option3\">Option 3</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </mat-expansion-panel>\r\n          <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" [disabled]=\"isDisabledPaymentStepThree\">\r\n            <mat-expansion-panel-header>\r\n              <h4 class=\"mb-0\">Payment Options</h4>\r\n            </mat-expansion-panel-header>\r\n            <mat-tab-group (selectedTabChange)=\"selectedPaymentTabChange($event)\">\r\n              <mat-tab label=\"Offer Code\">\r\n                <div class=\"mat-inner-tab text-center\">\r\n                  <div class=\"header-mat-tab bg-grey\">\r\n                    <div class=\"mb-4\"><img src=\"assets/images/card.png\" alt=\"\">\r\n                    </div>\r\n                    <h4 class=\"mb-5\">Enter Card Details</h4>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-mat-tab card-details\">\r\n                  <div fxLayout='row wrap' class=\"col-gap\">\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" formGroupName=\"payment\">\r\n                        <div fxLayout='row wrap' class=\"col-gap\">\r\n                          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"100\" fxFlex.xl=\"100\">\r\n                            <mat-form-field class=\"w-100\">\r\n                              <input matInput type=\"text\" placeholder=\"Card Number\" formControlName=\"card_number\" card-number>\r\n                              <mat-error *ngIf=\"paymentFormOne.get('payment.card_number').hasError('required') && paymentFormOne.get('payment.card_number').touched\">This field should not be empty.</mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"100\" fxFlex.xl=\"100\">\r\n                            <mat-form-field class=\"w-100\">\r\n                              <input matInput type=\"text\" placeholder=\"Name\" formControlName=\"user_card_name\" card-name>\r\n                              <mat-error *ngIf=\"paymentFormOne.get('payment.user_card_name').hasError('required') && paymentFormOne.get('payment.user_card_name').touched\">This field should not be empty.</mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                            <mat-form-field class=\"w-100\">\r\n                              <input matInput type=\"text\" placeholder=\"CVV\" formControlName=\"cvv\" card-cvc>\r\n                              <mat-error *ngIf=\"paymentFormOne.get('payment.cvv').hasError('required') && paymentFormOne.get('payment.cvv').touched\">This field should not be empty.</mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                            <mat-form-field class=\"w-100\">\r\n                              <input matInput type=\"text\" placeholder=\"Expiry Date (01/10)\" formControlName=\"expiry_date\" card-expiry>\r\n                              <mat-error *ngIf=\"paymentFormOne.get('payment.expiry_date').hasError('required') && paymentFormOne.get('payment.expiry_date').touched\">This field should not be empty.</mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"finalStep()\">Submit</button>\r\n                        <button mat-raised-button class=\"mx-2\">Clear</button>\r\n                    </div>\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                      <h4 class=\"mb-5 text-center\">Card Infomation</h4>\r\n                      <div class=\"card-container\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </mat-tab>\r\n              <mat-tab label=\"Credit/Debit/NetBanking\" *ngIf=\"bankCardsImages && bankCardsImages.length>0\">\r\n                <div class=\"mat-inner-tab netbanking-wrapper checkbox-small\" formGroupName=\"payment\">\r\n                  <div class=\"header-mat-tab bg-grey text-center\">\r\n                    <div class=\"mb-4\"> <img src=\"assets/images/online-shop.png\" alt=\"\"></div>\r\n                    <h4 class=\"mb-5\">Select Bank for NetBanking</h4>\r\n                  </div>\r\n                  <hr class=\"dark-border\">\r\n                  <div class=\"mb-5\">\r\n                    <div class=\"card-radio \">\r\n                  \r\n                        <mat-radio-group formControlName=\"card_id\">\r\n                           <mat-radio-button *ngFor=\"let card of bankCardsImages\" [value]=\"card?.id\" >\r\n                              <img [src]=\"card?.image\" width=\"150\" height=\"30\" alt=\"Bank\">\r\n                           </mat-radio-button>\r\n                        </mat-radio-group>\r\n                    \r\n                    </div>\r\n                  </div>\r\n                  <div fxLayout='row wrap' class=\"pb-5\">\r\n                    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"40\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n                     <h6>All Banks</h6>\r\n                     <mat-form-field class=\"w-100\">\r\n                       <mat-select formControlName=\"bank_card_value\">\r\n                         <mat-option value=null disabled=\"disabled\" hidden>Select</mat-option>\r\n                         <mat-option value=\"option1\">Option 1</mat-option>\r\n                         <mat-option value=\"option2\">Option 2</mat-option>\r\n                         <mat-option value=\"option3\">Option 3</mat-option>\r\n                       </mat-select>\r\n                       <mat-error *ngIf=\"paymentFormOne.get('payment.bank_card_value').hasError('required') && paymentFormOne.get('payment.bank_card_value')\">This field should not be empty.</mat-error>\r\n                     </mat-form-field>\r\n\r\n                     <div>\r\n                       <button mat-raised-button color=\"accent\" (click)=\"finalStep()\">Make Payment</button>\r\n                     </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </mat-expansion-panel>\r\n        </form>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #elseBlock>\r\n  <div class=\"section-gap-lg text-center\">\r\n    <div class=\"mb-4\">\r\n    <img src=\"assets/images/empty-cart.png\" height=\"128\" width=\"128\" alt=\"cart-empty\">\r\n  </div>\r\n    <h4> Your Shopping Bag is empty.</h4>\r\n    <a href=\"javascript:void(0)\" class=\"primary-color\" [routerLink]=\"['/']\">Go for Shopping</a>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n  "

/***/ }),

/***/ "./src/app/Pages/Checkout/Payment/Payment.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Pages/Checkout/Payment/Payment.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0NoZWNrb3V0L1BheW1lbnQvUGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/Checkout/Payment/Payment.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/Checkout/Payment/Payment.component.ts ***!
  \*************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(embryoService, formGroup, router) {
        this.embryoService = embryoService;
        this.formGroup = formGroup;
        this.router = router;
        this.step = 0;
        this.isDisabledPaymentStepTwo = true;
        this.isDisabledPaymentStepThree = false;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.offerCards = [
            {
                id: 1,
                name: "Debit Card",
                content: "Visa Mega Shopping Offer"
            },
            {
                id: 2,
                name: "Credit Card",
                content: "American Express 20% Flat"
            },
            {
                id: 3,
                name: "Debit Card",
                content: "BOA Buy 1 Get One Offer"
            },
            {
                id: 4,
                name: "Master Card",
                content: "Mastercard Elite Card"
            },
            {
                id: 5,
                name: "Debit Card",
                content: "Visa Mega Shopping Offer"
            }
        ];
        this.bankCardsImages = [
            {
                id: 1,
                image: "assets/images/client-logo-1.png"
            },
            {
                id: 2,
                image: "assets/images/client-logo-2.png"
            },
            {
                id: 3,
                image: "assets/images/client-logo-3.png"
            },
            {
                id: 4,
                image: "assets/images/client-logo-4.png"
            },
            {
                id: 5,
                image: "assets/images/client-logo-5.png"
            }
        ];
        this.embryoService.removeBuyProducts();
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.paymentFormOne = this.formGroup.group({
            user_details: this.formGroup.group({
                first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                street_name_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                apt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zip_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                city_state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]],
                share_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]],
            }),
            offers: this.formGroup.group({
                discount_code: [''],
                card_type: [1],
                card_type_offer_name: [null]
            }),
            payment: this.formGroup.group({
                card_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                user_card_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                cvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                expiry_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                card_id: [1],
                bank_card_value: [null]
            })
        });
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
    };
    PaymentComponent.prototype.setStep = function (index) {
        this.step = index;
        switch (index) {
            case 0:
                this.isDisabledPaymentStepTwo = true;
                this.isDisabledPaymentStepThree = true;
                break;
            case 1:
                this.isDisabledPaymentStepThree = false;
                break;
            default:
                break;
        }
    };
    PaymentComponent.prototype.toggleRightSidenav = function () {
        this.embryoService.paymentSidenavOpen = !this.embryoService.paymentSidenavOpen;
    };
    PaymentComponent.prototype.getCartProducts = function () {
        var total = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                total += (product.price * product.quantity);
            }
            total += (this.embryoService.shipping + this.embryoService.tax);
            return total;
        }
        return total;
    };
    PaymentComponent.prototype.submitPayment = function () {
        var userDetailsGroup = (this.paymentFormOne.controls['user_details']);
        if (userDetailsGroup.valid) {
            switch (this.step) {
                case 0:
                    this.step = 1;
                    this.isDisabledPaymentStepTwo = false;
                    break;
                case 1:
                    this.step = 2;
                    break;
                default:
                    // code...
                    break;
            }
        }
        else {
            this.isDisabledPaymentStepTwo = true;
            this.isDisabledPaymentStepThree = true;
            for (var i in userDetailsGroup.controls) {
                userDetailsGroup.controls[i].markAsTouched();
            }
        }
    };
    PaymentComponent.prototype.selectedPaymentTabChange = function (value) {
        var paymentGroup = (this.paymentFormOne.controls['payment']);
        paymentGroup.markAsUntouched();
        if (value && value.index == 1) {
            paymentGroup.controls['card_number'].clearValidators();
            paymentGroup.controls['user_card_name'].clearValidators();
            paymentGroup.controls['cvv'].clearValidators();
            paymentGroup.controls['expiry_date'].clearValidators();
            paymentGroup.controls['bank_card_value'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
        else {
            paymentGroup.controls['card_number'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            paymentGroup.controls['user_card_name'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            paymentGroup.controls['cvv'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            paymentGroup.controls['expiry_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            paymentGroup.controls['bank_card_value'].clearValidators();
        }
        paymentGroup.controls['card_number'].updateValueAndValidity();
        paymentGroup.controls['user_card_name'].updateValueAndValidity();
        paymentGroup.controls['cvv'].updateValueAndValidity();
        paymentGroup.controls['expiry_date'].updateValueAndValidity();
        paymentGroup.controls['bank_card_value'].updateValueAndValidity();
    };
    PaymentComponent.prototype.finalStep = function () {
        var paymentGroup = (this.paymentFormOne.controls['payment']);
        if (paymentGroup.valid) {
            this.embryoService.addBuyUserDetails(this.paymentFormOne.value);
            this.router.navigate(['/checkout/final-receipt']);
        }
        else {
            for (var i in paymentGroup.controls) {
                paymentGroup.controls[i].markAsTouched();
            }
        }
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Payment',
            template: __webpack_require__(/*! ./Payment.component.html */ "./src/app/Pages/Checkout/Payment/Payment.component.html"),
            styles: [__webpack_require__(/*! ./Payment.component.scss */ "./src/app/Pages/Checkout/Payment/Payment.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/Pages/Checkout/Signin/Signin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Pages/Checkout/Signin/Signin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n<embryo-PageTitle heading=\"Checkout\"></embryo-PageTitle>\r\n\r\n<div class=\"bg-white shop-by-category section-gap\" *ngIf=\"(embryoService.localStorageCartProducts && embryoService.localStorageCartProducts.length>0); else elseBlock\">\r\n  <div class=\"checkout-option\">\r\n    <div class=\"container\">\r\n      <div class=\"view-cart text-right mb-5\">\r\n        <button mat-raised-button color=\"accent\" (click)=\"toggleRightSidenav()\">Show Order Detail :\r\n          {{getCartProducts() | currency:embryoService?.currency}}</button>\r\n      </div>\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"none\" class=\"col-gap\">\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n          <mat-card>\r\n            <h4>User Sign In</h4>\r\n           <embryo-SignIn></embryo-SignIn>\r\n          </mat-card>\r\n        </div>\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n          <mat-card>\r\n            <h4>Guest Checkout</h4>\r\n            <p>Proceed to checkout and create an account later.</p>\r\n            <button color=\"accent\" class=\"button-lg mb-3\" mat-raised-button [routerLink]=\"['/checkout/payment']\">Continue\r\n              as Guest</button>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #elseBlock>\r\n  <div class=\"section-gap-lg text-center\">\r\n    <div class=\"mb-4\">\r\n    <img src=\"assets/images/empty-cart.png\" height=\"128\" width=\"128\" alt=\"cart-empty\">\r\n  </div>\r\n    <h4> Your Shopping Bag is empty.</h4>\r\n    <a href=\"javascript:void(0)\" class=\"primary-color\" [routerLink]=\"['/']\">Go for Shopping</a>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/Pages/Checkout/Signin/Signin.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Pages/Checkout/Signin/Signin.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0NoZWNrb3V0L1NpZ25pbi9TaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Pages/Checkout/Signin/Signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Pages/Checkout/Signin/Signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(embryoService) {
        this.embryoService = embryoService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.toggleRightSidenav = function () {
        this.embryoService.paymentSidenavOpen = !this.embryoService.paymentSidenavOpen;
    };
    SigninComponent.prototype.getCartProducts = function () {
        var total = 0;
        if (this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.embryoService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                total += (product.price * product.quantity);
            }
            total += (this.embryoService.shipping + this.embryoService.tax);
            return total;
        }
        return total;
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Signin',
            template: __webpack_require__(/*! ./Signin.component.html */ "./src/app/Pages/Checkout/Signin/Signin.component.html"),
            styles: [__webpack_require__(/*! ./Signin.component.scss */ "./src/app/Pages/Checkout/Signin/Signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Checkout-Checkout-module.js.map
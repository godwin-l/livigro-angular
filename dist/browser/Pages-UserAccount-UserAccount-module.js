(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-UserAccount-UserAccount-module"],{

/***/ "./src/app/Pages/UserAccount/Account/Account.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Account/Account.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container\">\r\n  <div class=\"bg-white final-receipt-page section-gap\">\r\n    <div class=\"account-info\">\r\n      <div class=\"container\">\r\n        <div>\r\n          <div fxLayoutAlign=\"flex-start\">\r\n            <div class=\"login-user-img\">\r\n              <img src=\"assets/images/user-4.jpg\" width=\"70\" alt=\"Active User\">\r\n            </div>\r\n            <div class=\"px-3\">\r\n              <h4>Hi, John Doe</h4>\r\n              <div class=\"text-muted text-xl\">johndoe@deo.com</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"20\" fxFlex.lg=\"20\" fxFlex.xl=\"20\" class=\"user-nav-list\">\r\n            <mat-list role=\"list\">\r\n              <mat-list-item role=\"listitem\"> <a [routerLink]=\"['/account/order-history']\" routerLinkActive=\"tab-active\">\r\n                  <i class=\"material-icons\">history</i>\r\n                  <span> Order History</span> </a></mat-list-item>\r\n              <mat-list-item role=\"listitem\"> <a [routerLink]=\"['/account/profile']\" routerLinkActive=\"tab-active\">\r\n                  <span><i class=\"material-icons\">\r\n                      account_circle\r\n                    </i> Profile</span> </a></mat-list-item>\r\n              <mat-list-item role=\"listitem\"> <a [routerLink]=\"['/account/address']\" routerLinkActive=\"tab-active\"><i\r\n                    class=\"material-icons\">\r\n                    location_on\r\n                  </i> <span>Addresses</span> </a></mat-list-item>\r\n              <mat-list-item role=\"listitem\"> <a [routerLink]=\"['/account/cards']\" routerLinkActive=\"tab-active\"><i\r\n                    class=\"material-icons\">\r\n                    credit_card\r\n                  </i> <span>Saved Cards</span> </a></mat-list-item>\r\n            </mat-list>\r\n          </div>\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"80\" fxFlex.lg=\"80\" fxFlex.xl=\"80\" class=\"user-content-wrapper\">\r\n            <div class=\"tab-container\">\r\n              <router-outlet></router-outlet>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/UserAccount/Account/Account.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Account/Account.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1VzZXJBY2NvdW50L0FjY291bnQvQWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/UserAccount/Account/Account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Account/Account.component.ts ***!
  \****************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
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

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Account',
            template: __webpack_require__(/*! ./Account.component.html */ "./src/app/Pages/UserAccount/Account/Account.component.html"),
            styles: [__webpack_require__(/*! ./Account.component.scss */ "./src/app/Pages/UserAccount/Account/Account.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/Pages/UserAccount/Address/Address.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Address/Address.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <h4>Address Infomation</h4>\r\n  <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"40\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n      <h5>Billing Address</h5>\r\n      <div class=\"pt-3\">\r\n         <address class=\"mb-4\">\r\n               2735  Sherman Street<br>\r\n               Hodour Sheridan Plaza<br>\r\n               New Jersey<br>\r\n               Zip - 6739HG1<br>\r\n               USA<br>\r\n         </address>\r\n        <button mat-raised-button color=\"accent\" [routerLink]=\"['/account/profile/edit']\" [queryParams]=\"{type:'address'}\">Edit</button>\r\n      </div>\r\n    </div>\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"40\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n      <h5>Shipping Address</h5>\r\n      <div class=\"pt-3\">\r\n         <address class=\"mb-4\">\r\n               2735  Sherman Street<br>\r\n               Hodour Sheridan Plaza<br>\r\n               New Jersey<br>\r\n               Zip - 6739HG1<br>\r\n               USA<br>\r\n         </address>\r\n        <button mat-raised-button color=\"accent\" [routerLink]=\"['/account/profile/edit']\" [queryParams]=\"{type:'ship-address'}\">Edit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/Pages/UserAccount/Address/Address.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Address/Address.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1VzZXJBY2NvdW50L0FkZHJlc3MvQWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/UserAccount/Address/Address.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Address/Address.component.ts ***!
  \****************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
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

var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Address',
            template: __webpack_require__(/*! ./Address.component.html */ "./src/app/Pages/UserAccount/Address/Address.component.html"),
            styles: [__webpack_require__(/*! ./Address.component.scss */ "./src/app/Pages/UserAccount/Address/Address.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/Pages/UserAccount/Cards/Cards.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Cards/Cards.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n   <div fxLayoutAlign=\"space-between\"><h4>Saved Card Infomation</h4> <button mat-raised-button color=\"accent\" [routerLink]=\"['/account/profile/edit']\" [queryParams]=\"{type:'add-card'}\">Add New Card</button></div>\r\n  \r\n  <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"40\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n      <mat-card>\r\n        <h5>VISA -- Credit Card</h5>\r\n        <div class=\"pt-3\">\r\n          <div class=\"saved-card-box text-xl mb-4\">\r\n            <span>4545 4XXX XXX5 4545</span>\r\n          </div>\r\n          <button mat-raised-button color=\"accent\" [routerLink]=\"['/account/profile/edit']\" [queryParams]=\"{type:'card'}\">Edit</button>\r\n    </div>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"40\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n      <mat-card>\r\n        <h5>MasterCard -- Debit Card</h5>\r\n        <div class=\"pt-3\">\r\n          <div class=\"saved-card-box text-xl mb-4\">\r\n            <span>8585 8XXX XXX5 8585</span>\r\n          </div>\r\n\r\n          <button mat-raised-button color=\"accent\" [routerLink]=\"['/account/profile/edit']\" [queryParams]=\"{type:'card'}\">Edit</button>\r\n       \r\n    </div>\r\n    </mat-card>\r\n  </div>\r\n  </div>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/Pages/UserAccount/Cards/Cards.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Cards/Cards.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1VzZXJBY2NvdW50L0NhcmRzL0NhcmRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/UserAccount/Cards/Cards.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Cards/Cards.component.ts ***!
  \************************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
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

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Cards',
            template: __webpack_require__(/*! ./Cards.component.html */ "./src/app/Pages/UserAccount/Cards/Cards.component.html"),
            styles: [__webpack_require__(/*! ./Cards.component.scss */ "./src/app/Pages/UserAccount/Cards/Cards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/Pages/UserAccount/EditProfile/EditProfile.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/UserAccount/EditProfile/EditProfile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"type == 'info'\">\r\n  <h4> Edit Profile Information</h4>\r\n  <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n      <form [formGroup] = \"info\">\r\n        <div class=\"example-container\">\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"First Name\" formControlName=\"first_name\">\r\n            <mat-error *ngIf=\"info.get('first_name').hasError('required') && info.get('first_name').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"Last Name\" formControlName=\"last_name\">\r\n            <mat-error *ngIf=\"info.get('last_name').hasError('required') && info.get('last_name').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n          <div class=\"mb-3\">\r\n            <mat-radio-group formControlName=\"gender\">\r\n              <mat-radio-button class=\"mr-2\" value=\"male\">Male</mat-radio-button>\r\n              <mat-radio-button value=\"female\">Female</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <div>\r\n            <mat-form-field class=\"w-100 mb-3\">\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Bith Date\" formControlName=\"date\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n              <mat-error *ngIf=\"info.get('date').hasError('required') && info.get('date').touched\">This field should not be empty.</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"Mobile No.\" formControlName=\"phone_number\">\r\n            <mat-error *ngIf=\"info.get('phone_number').hasError('required') && info.get('phone_number').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"Location\" formControlName=\"location\">\r\n            <mat-error *ngIf=\"info.get('location').hasError('required') && info.get('location').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n            <mat-error *ngIf=\"info.get('email').hasError('required') && info.get('email').touched\">This field should not be empty.</mat-error>\r\n            <mat-error *ngIf=\"info.get('email').hasError('pattern') && info.get('email').touched\">Please enter a valid email.</mat-error>\r\n          </mat-form-field>\r\n          <button mat-raised-button color=\"accent\" (click)=\"submitProfileInfo()\">Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"edit-profile\" style=\"background-image: url(assets/images/user-edit.png)\">\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"type == 'address' || type == 'ship-address'\">\r\n  <h4 *ngIf=\"type == 'address'\"> Edit Billing Information</h4>\r\n  <h4 *ngIf=\"type == 'ship-address'\"> Edit Shipping Information</h4>\r\n  <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n      <form [formGroup] = \"address\">\r\n        <div class=\"example-container\">\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"Address\" formControlName=\"address\">\r\n            <mat-error *ngIf=\"address.get('address').hasError('required') && address.get('address').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"Buiding Name\" formControlName=\"buiding_name\">\r\n            <mat-error *ngIf=\"address.get('buiding_name').hasError('required') && address.get('buiding_name').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"Street No.\" formControlName=\"street_no\">\r\n            <mat-error *ngIf=\"address.get('street_no').hasError('required') && address.get('street_no').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"State\" formControlName=\"state\">\r\n            <mat-error *ngIf=\"address.get('state').hasError('required') && address.get('state').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"Zip Code/Pin Code\" formControlName=\"zip_code\">\r\n            <mat-error *ngIf=\"address.get('zip_code').hasError('required') && address.get('zip_code').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"w-100 mb-3\">\r\n            <input matInput placeholder=\"Country\" formControlName=\"country\">\r\n            <mat-error *ngIf=\"address.get('country').hasError('required') && address.get('country').touched\">This field should not be empty.</mat-error>\r\n          </mat-form-field>\r\n          <button mat-raised-button color=\"accent\" (click)=\"submitAddress()\">Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"edit-profile\" style=\"background-image: url(assets/images/billing-edit.png)\">\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"type == 'card' || type == 'add-card'\">\r\n  <h4 *ngIf=\"type == 'card'\"> Edit Card Information</h4>\r\n  <h4 *ngIf=\"type == 'add-card'\"> Add Card Information</h4>\r\n  <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n    <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n      <form [formGroup] = \"card\">\r\n        <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"70\" fxFlex.xl=\"70\">\r\n            <mat-form-field class=\"w-100 mb-3\">\r\n              <input matInput placeholder=\"Card Number\" formControlName=\"card_number\">\r\n              <mat-error *ngIf=\"card.get('card_number').hasError('required') && card.get('card_number').touched\">This field should not be empty.</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"30\" fxFlex.xl=\"30\">\r\n            <mat-form-field class=\"w-100 mb-3\">\r\n              <input matInput placeholder=\"CVV\" formControlName=\"cvv\">\r\n              <mat-error *ngIf=\"card.get('cvv').hasError('required') && card.get('cvv').touched\">This field should not be empty.</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"100\" fxFlex.xl=\"100\">\r\n            <mat-form-field class=\"w-100 mb-3\">\r\n              <input matInput placeholder=\"Name on Card\" formControlName=\"name\">\r\n              <mat-error *ngIf=\"card.get('name').hasError('required') && card.get('name').touched\">This field should not be empty.</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <Label class=\"pl-3 text-muted\">Expiry Date</Label>\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"100\" fxFlex.xl=\"100\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Month\" formControlName=\"month\">\r\n                <mat-option value=\"January\">January</mat-option>\r\n                <mat-option value=\"February\">February</mat-option>\r\n                <mat-option value=\"March\">March</mat-option>\r\n                <mat-option value=\"April\">April</mat-option>\r\n                <mat-option value=\"May\">May</mat-option>\r\n                <mat-option value=\"June\">June</mat-option>\r\n                <mat-option value=\"July\">July</mat-option>\r\n                <mat-option value=\"August\">August</mat-option>\r\n                <mat-option value=\"September\">September</mat-option>\r\n                <mat-option value=\"October\">October</mat-option>\r\n                <mat-option value=\"November\">November</mat-option>\r\n                <mat-option value=\"December\">December</mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"card.get('month').hasError('required') && card.get('month').touched\">This field should not be empty.</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"mx-3\">\r\n                  <mat-select placeholder=\"Year\" formControlName=\"year\">\r\n                    <mat-option value=\"2019\">2019</mat-option>\r\n                    <mat-option value=\"2020\">2020</mat-option>\r\n                    <mat-option value=\"2021\">2021</mat-option>\r\n                    <mat-option value=\"2022\">2022</mat-option>\r\n                    <mat-option value=\"2023\">2023</mat-option>\r\n                    <mat-option value=\"2024\">2024</mat-option>\r\n                    <mat-option value=\"2025\">2025</mat-option>\r\n                    <mat-option value=\"2026\">2026</mat-option>\r\n                    <mat-option value=\"2027\">2027</mat-option>\r\n                    <mat-option value=\"2028\">2028</mat-option>\r\n                    <mat-option value=\"2029\">2029</mat-option>\r\n                    <mat-option value=\"2030\">2030</mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"card.get('year').hasError('required') && card.get('year').touched\">This field should not be empty.</mat-error>\r\n                </mat-form-field>\r\n          </div>\r\n    </div>\r\n    <button mat-raised-button color=\"accent\" (click)=\"submitCard()\">Save</button>\r\n    </form>\r\n  </div>\r\n  <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"edit-profile\" style=\"background-image: url(assets/images/card-edit.png)\">\r\n  </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/Pages/UserAccount/EditProfile/EditProfile.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/UserAccount/EditProfile/EditProfile.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1VzZXJBY2NvdW50L0VkaXRQcm9maWxlL0VkaXRQcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Pages/UserAccount/EditProfile/EditProfile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Pages/UserAccount/EditProfile/EditProfile.component.ts ***!
  \************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/fesm5/ngx-toasta.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(route, router, formGroup, toastyService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.formGroup = formGroup;
        this.toastyService = toastyService;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.toastOption = {
            title: "Account Information",
            msg: "Your account information updated successfully!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
        this.route.params.subscribe(function (params) {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.type = queryParams['type'];
            });
        });
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.info = this.formGroup.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['male'],
            date: [],
            phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            location: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]]
        });
        this.address = this.formGroup.group({
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            buiding_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            street_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            zip_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.card = this.formGroup.group({
            card_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            month: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    /**
     * Function is used to submit the profile info.
     * If form value is valid, redirect to profile page.
     */
    EditProfileComponent.prototype.submitProfileInfo = function () {
        var _this = this;
        if (this.info.valid) {
            this.router.navigate(['/account/profile']).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }
        else {
            for (var i in this.info.controls) {
                this.info.controls[i].markAsTouched();
            }
        }
    };
    /**
     * Function is used to submit the profile address.
     * If form value is valid, redirect to address page.
     */
    EditProfileComponent.prototype.submitAddress = function () {
        var _this = this;
        if (this.address.valid) {
            this.router.navigate(['/account/address']).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }
        else {
            for (var i in this.address.controls) {
                this.address.controls[i].markAsTouched();
            }
        }
    };
    /**
     * Function is used to submit the profile card.
     * If form value is valid, redirect to card page.
     */
    EditProfileComponent.prototype.submitCard = function () {
        var _this = this;
        if (this.card.valid) {
            this.router.navigate(['/account/card']).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }
        else {
            for (var i in this.card.controls) {
                this.card.controls[i].markAsTouched();
            }
        }
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-EditProfile',
            template: __webpack_require__(/*! ./EditProfile.component.html */ "./src/app/Pages/UserAccount/EditProfile/EditProfile.component.html"),
            styles: [__webpack_require__(/*! ./EditProfile.component.scss */ "./src/app/Pages/UserAccount/EditProfile/EditProfile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toasta__WEBPACK_IMPORTED_MODULE_3__["ToastaService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n   <h4 class=\"mb-3\">Order History</h4>\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"w-100\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n                  The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- id Column -->\r\n    <ng-container matColumnDef=\"orderid\">\r\n      <th mat-header-cell *matHeaderCellDef> Order Id </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.orderid}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef>Product Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- price Column -->\r\n    <ng-container matColumnDef=\"price\">\r\n      <th mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element\"> ${{element.price}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Status Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n         <th mat-header-cell *matHeaderCellDef> Status </th>\r\n         <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\r\n       </ng-container>\r\n\r\n       \r\n    <!-- Actions Column -->\r\n    <ng-container matColumnDef=\"action\">\r\n         <th mat-header-cell *matHeaderCellDef> Action </th>\r\n         <td mat-cell *matCellDef=\"let element\">\r\n            <a href=\"javascript:void\" class=\"accent-color\">   <i class=\"material-icons\">\r\n               remove_red_eye\r\n            </i></a>  \r\n         </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1VzZXJBY2NvdW50L09yZGVySGlzdG9yeS9PcmRlckhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
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

var order_history = [
    { position: 1, orderid: 1801, name: 'LEGITIM', price: 1.0079, status: 'Sent', action: '' },
    { position: 2, orderid: 1832, name: 'GRUNDTAL', price: 4.0026, status: 'In processing', action: '' },
    { position: 3, orderid: 1881, name: 'BOHOLMEN', price: 6.941, status: 'Sent', action: '' },
    { position: 4, orderid: 1832, name: 'ROSTAD LÖK', price: 9.0122, status: 'Return', action: '' },
    { position: 5, orderid: 1810, name: 'TÅRTA CHOKLADKROKANT', price: 10.811, status: 'Sent', action: '' },
];
var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent() {
        this.displayedColumns = ['position', 'orderid', 'name', 'price', 'status', 'action'];
        this.dataSource = order_history;
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-OrderHistory',
            template: __webpack_require__(/*! ./OrderHistory.component.html */ "./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.html"),
            styles: [__webpack_require__(/*! ./OrderHistory.component.scss */ "./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/Pages/UserAccount/Profile/Profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Profile/Profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <h4>Profile Information</h4>\r\n  <div class=\"pt-3\">\r\n    <div class=\"proflie-field mb-3\">\r\n      <label>First Name:</label>\r\n      <span>John</span>\r\n    </div>\r\n    <div class=\"proflie-field mb-3\">\r\n      <label>Last Name:</label>\r\n      <span>Doe</span>\r\n    </div>\r\n    <div class=\"proflie-field mb-3\">\r\n      <label>Gender:</label>\r\n      <span>Male</span>\r\n    </div>\r\n    <div class=\"proflie-field mb-3\">\r\n      <label>Date of birth:</label>\r\n      <span>Jan,06,1979</span>\r\n    </div>\r\n    <div class=\"proflie-field mb-3\">\r\n      <label>Mobile Number:</label>\r\n      <span>+120 256 254 125</span>\r\n    </div>\r\n    <div class=\"proflie-field mb-3\">\r\n      <label>location:</label>\r\n      <span>New York</span>\r\n    </div>\r\n    <div class=\"proflie-field mb-3\">\r\n      <label>E-mail id:</label>\r\n      <span>johnDoe@doe.com</span>\r\n    </div>\r\n\r\n    <button mat-raised-button color=\"accent\" [routerLink]=\"['edit']\" [queryParams]=\"{type:'info'}\">Edit</button>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/Pages/UserAccount/Profile/Profile.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Profile/Profile.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1VzZXJBY2NvdW50L1Byb2ZpbGUvUHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/UserAccount/Profile/Profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Pages/UserAccount/Profile/Profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Profile',
            template: __webpack_require__(/*! ./Profile.component.html */ "./src/app/Pages/UserAccount/Profile/Profile.component.html"),
            styles: [__webpack_require__(/*! ./Profile.component.scss */ "./src/app/Pages/UserAccount/Profile/Profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/Pages/UserAccount/UserAccount.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Pages/UserAccount/UserAccount.module.ts ***!
  \*********************************************************/
/*! exports provided: UserAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _UserAccount_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserAccount.routing */ "./src/app/Pages/UserAccount/UserAccount.routing.ts");
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Account/Account.component */ "./src/app/Pages/UserAccount/Account/Account.component.ts");
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Profile/Profile.component */ "./src/app/Pages/UserAccount/Profile/Profile.component.ts");
/* harmony import */ var _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditProfile/EditProfile.component */ "./src/app/Pages/UserAccount/EditProfile/EditProfile.component.ts");
/* harmony import */ var _Cards_Cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Cards/Cards.component */ "./src/app/Pages/UserAccount/Cards/Cards.component.ts");
/* harmony import */ var _Address_Address_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Address/Address.component */ "./src/app/Pages/UserAccount/Address/Address.component.ts");
/* harmony import */ var _OrderHistory_OrderHistory_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OrderHistory/OrderHistory.component */ "./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UserAccountModule = /** @class */ (function () {
    function UserAccountModule() {
    }
    UserAccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_UserAccount_routing__WEBPACK_IMPORTED_MODULE_6__["UserAccountRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [
                _Account_Account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
                _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_9__["EditProfileComponent"],
                _Cards_Cards_component__WEBPACK_IMPORTED_MODULE_10__["CardsComponent"],
                _Address_Address_component__WEBPACK_IMPORTED_MODULE_11__["AddressComponent"],
                _OrderHistory_OrderHistory_component__WEBPACK_IMPORTED_MODULE_12__["OrderHistoryComponent"]
            ]
        })
    ], UserAccountModule);
    return UserAccountModule;
}());



/***/ }),

/***/ "./src/app/Pages/UserAccount/UserAccount.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/Pages/UserAccount/UserAccount.routing.ts ***!
  \**********************************************************/
/*! exports provided: UserAccountRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountRoutes", function() { return UserAccountRoutes; });
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account/Account.component */ "./src/app/Pages/UserAccount/Account/Account.component.ts");
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile/Profile.component */ "./src/app/Pages/UserAccount/Profile/Profile.component.ts");
/* harmony import */ var _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProfile/EditProfile.component */ "./src/app/Pages/UserAccount/EditProfile/EditProfile.component.ts");
/* harmony import */ var _Cards_Cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards/Cards.component */ "./src/app/Pages/UserAccount/Cards/Cards.component.ts");
/* harmony import */ var _Address_Address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Address/Address.component */ "./src/app/Pages/UserAccount/Address/Address.component.ts");
/* harmony import */ var _OrderHistory_OrderHistory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OrderHistory/OrderHistory.component */ "./src/app/Pages/UserAccount/OrderHistory/OrderHistory.component.ts");






var UserAccountRoutes = [
    {
        path: '',
        component: _Account_Account_component__WEBPACK_IMPORTED_MODULE_0__["AccountComponent"],
        children: [
            {
                path: 'profile',
                component: _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
            },
            {
                path: 'cards',
                component: _Cards_Cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"]
            },
            {
                path: 'address',
                component: _Address_Address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"]
            },
            {
                path: 'order-history',
                component: _OrderHistory_OrderHistory_component__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryComponent"]
            },
            {
                path: 'profile/edit',
                component: _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=Pages-UserAccount-UserAccount-module.js.map
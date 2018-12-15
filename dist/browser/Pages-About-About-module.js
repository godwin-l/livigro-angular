(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-About-About-module"],{

/***/ "./src/app/Pages/About/About.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/About/About.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _About_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About.routing */ "./src/app/Pages/About/About.routing.ts");
/* harmony import */ var _AboutUs_AboutUs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AboutUs/AboutUs.component */ "./src/app/Pages/About/AboutUs/AboutUs.component.ts");
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Contact/Contact.component */ "./src/app/Pages/About/Contact/Contact.component.ts");
/* harmony import */ var _Faq_Faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Faq/Faq.component */ "./src/app/Pages/About/Faq/Faq.component.ts");
/* harmony import */ var _TermAndCondition_TermAndCondition_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TermAndCondition/TermAndCondition.component */ "./src/app/Pages/About/TermAndCondition/TermAndCondition.component.ts");
/* harmony import */ var _PrivacyPolicy_PrivacyPolicy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrivacyPolicy/PrivacyPolicy.component */ "./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.ts");
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Global/Global.module */ "./src/app/Global/Global.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_About_routing__WEBPACK_IMPORTED_MODULE_6__["AboutRoutes"]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_12__["GlobalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [
                _AboutUs_AboutUs_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _Faq_Faq_component__WEBPACK_IMPORTED_MODULE_9__["FaqComponent"],
                _TermAndCondition_TermAndCondition_component__WEBPACK_IMPORTED_MODULE_10__["TermAndConditionComponent"],
                _PrivacyPolicy_PrivacyPolicy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyPolicyComponent"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/Pages/About/About.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/Pages/About/About.routing.ts ***!
  \**********************************************/
/*! exports provided: AboutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutes", function() { return AboutRoutes; });
/* harmony import */ var _AboutUs_AboutUs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs/AboutUs.component */ "./src/app/Pages/About/AboutUs/AboutUs.component.ts");
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact/Contact.component */ "./src/app/Pages/About/Contact/Contact.component.ts");
/* harmony import */ var _Faq_Faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Faq/Faq.component */ "./src/app/Pages/About/Faq/Faq.component.ts");
/* harmony import */ var _TermAndCondition_TermAndCondition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TermAndCondition/TermAndCondition.component */ "./src/app/Pages/About/TermAndCondition/TermAndCondition.component.ts");
/* harmony import */ var _PrivacyPolicy_PrivacyPolicy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrivacyPolicy/PrivacyPolicy.component */ "./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.ts");





var AboutRoutes = [
    {
        path: 'about',
        component: _AboutUs_AboutUs_component__WEBPACK_IMPORTED_MODULE_0__["AboutUsComponent"]
    },
    {
        path: 'contact',
        component: _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]
    },
    {
        path: 'faq',
        component: _Faq_Faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"]
    },
    {
        path: 'term-condition',
        component: _TermAndCondition_TermAndCondition_component__WEBPACK_IMPORTED_MODULE_3__["TermAndConditionComponent"]
    },
    {
        path: 'privacy-policy',
        component: _PrivacyPolicy_PrivacyPolicy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyPolicyComponent"]
    }
];


/***/ }),

/***/ "./src/app/Pages/About/AboutUs/AboutUs.component.html":
/*!************************************************************!*\
  !*** ./src/app/Pages/About/AboutUs/AboutUs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<embryo-PageTitle heading=\"About Us\" subHeading=\"Creative team and wide goals.\"></embryo-PageTitle>\r\n<div class=\"inner-container\">\r\n  <div class=\"about-page\">\r\n    <div class=\"about-info bg-white section-gap\" *ngIf=\"aboutInfo\">\r\n      <embryo-AboutInfo [data]=\"aboutInfo\"></embryo-AboutInfo>\r\n    </div>\r\n    <div class=\"about-alt-section bg-grey section-gap\" *ngIf=\"missionVisionData && missionVisionData.length>0\">\r\n      <embryo-MissionVision [data]=\"missionVisionData\"></embryo-MissionVision>\r\n    </div>\r\n    <div class=\"testimonail-v2 text-center section-gap\" *ngIf=\"testimonialData\">\r\n      <embryo-Testimonial [data]=\"testimonialData\"></embryo-Testimonial>\r\n    </div>\r\n    <div class=\"team-section text-center section-gap bg-grey\" *ngIf=\"teamData && teamData.length>0\">\r\n      <div class=\"container\">\r\n        <div class=\"block-title text-center\">\r\n          <h2>Meet Our Crew</h2>\r\n        </div>\r\n          <embryo-Team fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"col-gap\" [data]=\"teamData\"></embryo-Team>\r\n      </div>\r\n    </div>\r\n    <div class=\"about-contact-form bg-white\">\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"col-stretch\">\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\" about-contact-bg\">\r\n        </div>\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"p-5\">\r\n          <div class=\"about-cobtact-form-inner\">\r\n            <div class=\"block-title \">\r\n              <h2>Write to Us</h2>\r\n            </div>\r\n            <embryo-ContactForm>\r\n            </embryo-ContactForm>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/Pages/About/AboutUs/AboutUs.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Pages/About/AboutUs/AboutUs.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Fib3V0L0Fib3V0VXMvQWJvdXRVcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/About/AboutUs/AboutUs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Pages/About/AboutUs/AboutUs.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
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


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(embryoService) {
        this.embryoService = embryoService;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        this.getAboutInfo();
        this.getMissionVision();
        this.getTestimonialData();
        this.getTeamData();
    };
    AboutUsComponent.prototype.getAboutInfo = function () {
        var _this = this;
        this.embryoService.getAboutInfo().valueChanges().subscribe(function (res) { _this.aboutInfo = res; });
    };
    AboutUsComponent.prototype.getMissionVision = function () {
        var _this = this;
        this.embryoService.getMissionVision().valueChanges().subscribe(function (res) { _this.missionVisionData = res; });
    };
    AboutUsComponent.prototype.getTeamData = function () {
        var _this = this;
        this.embryoService.getTeam().valueChanges().subscribe(function (res) { _this.teamData = res; });
    };
    AboutUsComponent.prototype.getTestimonialData = function () {
        var _this = this;
        this.embryoService.getTestimonial().valueChanges().subscribe(function (res) { _this.testimonialData = res; });
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-AboutUs',
            template: __webpack_require__(/*! ./AboutUs.component.html */ "./src/app/Pages/About/AboutUs/AboutUs.component.html"),
            styles: [__webpack_require__(/*! ./AboutUs.component.scss */ "./src/app/Pages/About/AboutUs/AboutUs.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/Pages/About/Contact/Contact.component.html":
/*!************************************************************!*\
  !*** ./src/app/Pages/About/Contact/Contact.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<embryo-PageTitle heading=\"Contact Us\" subHeading=\"Share your feedback with us.\"></embryo-PageTitle>\r\n<div class=\"inner-container\">\r\n  <div class=\"Contact-page\" *ngIf=\"contactInfo\">\r\n    <div class=\"contact-map\">\r\n      <embryo-Map [address]=\"contactInfo?.address\"></embryo-Map>\r\n    </div>\r\n    <div class=\"contact-info-wrapper\">\r\n      <div class=\"container\">\r\n        <div class=\"section-gap\">\r\n          <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"40\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\r\n              <div class=\"block-title \">\r\n                <h2>Contact Info</h2>\r\n                <h5 class=\"text-italic mb-4\">{{contactInfo?.info}}</h5> \r\n              </div>\r\n              <div class=\"mb-4\">\r\n                <h3>Call</h3>\r\n                  <a href=\"tel:12345688\">{{contactInfo?.call}}</a>\r\n              </div>\r\n              <div class=\"mb-4\">\r\n                <h3>Mail</h3>\r\n                <a href=\"mailto:{{contactInfo?.mail}}\">{{contactInfo?.mail}}</a>\r\n              </div>\r\n              <div class=\"mb-4\">\r\n                <h3>Address</h3>\r\n                <p> {{contactInfo?.address}} </p>\r\n              </div>\r\n            </div>\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"60\" fxFlex.lg=\"60\" fxFlex.xl=\"60\">\r\n              <div class=\"block-title \">\r\n                <h2>Write to Us</h2>\r\n              </div>\r\n              <embryo-ContactForm></embryo-ContactForm>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/About/Contact/Contact.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Pages/About/Contact/Contact.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Fib3V0L0NvbnRhY3QvQ29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/About/Contact/Contact.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Pages/About/Contact/Contact.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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


var ContactComponent = /** @class */ (function () {
    function ContactComponent(embryoService) {
        var _this = this;
        this.embryoService = embryoService;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.embryoService.getContactInfo().valueChanges().subscribe(function (res) { _this.contactInfo = res; });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./Contact.component.html */ "./src/app/Pages/About/Contact/Contact.component.html"),
            styles: [__webpack_require__(/*! ./Contact.component.scss */ "./src/app/Pages/About/Contact/Contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/Pages/About/Faq/Faq.component.html":
/*!****************************************************!*\
  !*** ./src/app/Pages/About/Faq/Faq.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<embryo-PageTitle heading=\"Frequently Asked Question\" subHeading=\"We explained the basics question in this section.\"></embryo-PageTitle>\r\n<div class=\"inner-container section-gap pb-0 bg-white\" *ngIf=\"faqData\">\r\n  <div class=\"container\">\r\n    <div class=\"faq-page\">\r\n      <div class=\"block-title\">\r\n        <h2 class=\"mb-1\">{{faqData?.heading}}</h2>\r\n        <p>{{faqData?.content}}</p>\r\n      </div>\r\n      <div class=\"section-gap\" *ngIf=\"faqData?.faqs && (faqData.faqs).length>0\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel *ngFor=\"let faq of faqData.faqs\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                <h5>{{faq?.ques}}</h5>\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <p>{{faq?.ans}}</p>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cta-v1 section-gap\">\r\n    <div class=\"container\">\r\n      <div fxLayout='row wrap' fxLayoutAlign=\"center center\" class=\"text-center\">\r\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"60\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n          <h2 class=\"font-bold text-inverse mb-4\"> {{faqData?.can_get_answer?.heading}}</h2>\r\n          <h6 class=\"text-inverse mb-4\">{{faqData?.can_get_answer?.content}}</h6>\r\n          <button mat-raised-button color=\"accent\" class=\"button-lg\" [routerLink]=\"['/contact']\">Submit Reqest</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/About/Faq/Faq.component.scss":
/*!****************************************************!*\
  !*** ./src/app/Pages/About/Faq/Faq.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Fib3V0L0ZhcS9GYXEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Pages/About/Faq/Faq.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Pages/About/Faq/Faq.component.ts ***!
  \**************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
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


var FaqComponent = /** @class */ (function () {
    function FaqComponent(embryoService) {
        this.embryoService = embryoService;
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.embryoService.getFaq().valueChanges().subscribe(function (res) { _this.faqData = res; });
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Faq',
            template: __webpack_require__(/*! ./Faq.component.html */ "./src/app/Pages/About/Faq/Faq.component.html"),
            styles: [__webpack_require__(/*! ./Faq.component.scss */ "./src/app/Pages/About/Faq/Faq.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<embryo-PageTitle heading=\"Privacy Policy\" subHeading=\"Your information is fully secure with us.\"></embryo-PageTitle>\r\n<div class=\"inner-container section-gap bg-white\" *ngIf=\"privacyPolicyData && privacyPolicyData.length>0\">\r\n  <div class=\"container\">\r\n    <div class=\"privacy-page\">\r\n      <mat-card class=\"mb-5\" *ngFor=\"let privacyPolicy of privacyPolicyData\">\r\n        <h4 class=\"mb-3\" *ngIf=\"privacyPolicy?.name\">\r\n          {{privacyPolicy?.name}}\r\n        </h4>\r\n        <p [innerHTML]=\"privacyPolicy?.content\"></p>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Fib3V0L1ByaXZhY3lQb2xpY3kvUHJpdmFjeVBvbGljeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.ts ***!
  \**********************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
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


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(embryoService) {
        this.embryoService = embryoService;
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.embryoService.getPrivacyPolicy().valueChanges().subscribe(function (res) { _this.privacyPolicyData = res; });
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-PrivacyPolicy',
            template: __webpack_require__(/*! ./PrivacyPolicy.component.html */ "./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.html"),
            styles: [__webpack_require__(/*! ./PrivacyPolicy.component.scss */ "./src/app/Pages/About/PrivacyPolicy/PrivacyPolicy.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/Pages/About/TermAndCondition/TermAndCondition.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Pages/About/TermAndCondition/TermAndCondition.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<embryo-PageTitle heading=\"Terms and Conditions\" subHeading=\"Please read and contact with if you have some issue.\"></embryo-PageTitle>\r\n<div class=\"inner-container section-gap bg-white\" *ngIf=\"termContions && termContions.length >0\">\r\n  <div class=\"container\">\r\n    <div class=\"tnc-page\">\r\n      <mat-card class=\"mb-5\" *ngFor=\"let termcondition of termContions\">\r\n        <h4 class=\"mb-3\" *ngIf=\"termcondition?.name\">\r\n         {{termcondition?.name}}\r\n        </h4>\r\n        <div [innerHTML]=\"termcondition?.content\">\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Pages/About/TermAndCondition/TermAndCondition.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Pages/About/TermAndCondition/TermAndCondition.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Fib3V0L1Rlcm1BbmRDb25kaXRpb24vVGVybUFuZENvbmRpdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/About/TermAndCondition/TermAndCondition.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Pages/About/TermAndCondition/TermAndCondition.component.ts ***!
  \****************************************************************************/
/*! exports provided: TermAndConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermAndConditionComponent", function() { return TermAndConditionComponent; });
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


var TermAndConditionComponent = /** @class */ (function () {
    function TermAndConditionComponent(embryoService) {
        this.embryoService = embryoService;
    }
    TermAndConditionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.embryoService.getTermCondition().valueChanges().subscribe(function (res) { _this.termContions = res; });
    };
    TermAndConditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-TermAndCondition',
            template: __webpack_require__(/*! ./TermAndCondition.component.html */ "./src/app/Pages/About/TermAndCondition/TermAndCondition.component.html"),
            styles: [__webpack_require__(/*! ./TermAndCondition.component.scss */ "./src/app/Pages/About/TermAndCondition/TermAndCondition.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_1__["EmbryoService"]])
    ], TermAndConditionComponent);
    return TermAndConditionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-About-About-module.js.map
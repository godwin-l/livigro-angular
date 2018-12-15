(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Blogs-Blogs-module"],{

/***/ "./src/app/Pages/Blogs/Blogs.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/Blogs/Blogs.module.ts ***!
  \*********************************************/
/*! exports provided: BlogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsModule", function() { return BlogsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Blogs_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Blogs.routing */ "./src/app/Pages/Blogs/Blogs.routing.ts");
/* harmony import */ var _Details_Details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Details/Details.component */ "./src/app/Pages/Blogs/Details/Details.component.ts");
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Global/Global.module */ "./src/app/Global/Global.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BlogsModule = /** @class */ (function () {
    function BlogsModule() {
    }
    BlogsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Blogs_routing__WEBPACK_IMPORTED_MODULE_6__["BlogsRoutes"]),
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__["GlobalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [
                _Details_Details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"]
            ]
        })
    ], BlogsModule);
    return BlogsModule;
}());



/***/ }),

/***/ "./src/app/Pages/Blogs/Blogs.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/Pages/Blogs/Blogs.routing.ts ***!
  \**********************************************/
/*! exports provided: BlogsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsRoutes", function() { return BlogsRoutes; });
/* harmony import */ var _Details_Details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details/Details.component */ "./src/app/Pages/Blogs/Details/Details.component.ts");

var BlogsRoutes = [
    {
        path: 'detail',
        component: _Details_Details_component__WEBPACK_IMPORTED_MODULE_0__["DetailsComponent"]
    },
    {
        path: 'detail/:id',
        component: _Details_Details_component__WEBPACK_IMPORTED_MODULE_0__["DetailsComponent"]
    }
];


/***/ }),

/***/ "./src/app/Pages/Blogs/Details/Details.component.html":
/*!************************************************************!*\
  !*** ./src/app/Pages/Blogs/Details/Details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container *ngIf=\"blogDetails\">\r\n   <div class=\"blog-img-wrapper relative\" [ngStyle]=\"{'background-image': 'url(' + blogDetails?.banner_img + ')'}\">\r\n    <div class=\"center-holder\">\r\n       <div class=\"container\">\r\n          <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n             <div fxFlex.sm=\" 100\" fxFlex.xs=\"100\" fxFlex.md=\"70\" fxFlex.lg=\"70\" fxFlex.xl=\"70\">\r\n                <h5 class=\"mb-4\"> <i class=\"material-icons\">\r\n                   trending_up\r\n                   </i> {{blogDetails?.post_type}}\r\n                </h5>\r\n                <h2 class=\"mb-4 text-white\"> {{blogDetails?.name}} </h2>\r\n                <div class=\"blog-meta mb-3 \">\r\n                   <a class=\"mr-3\" href=\"javascript:void(0);\">\r\n                      <!--For modern browsers-->\r\n                      <i class=\"material-icons\">\r\n                      account_circle\r\n                      </i><span class=\"text-white font-sm\">\r\n                            {{blogDetails?.author?.author_name}}</span>\r\n                   </a>\r\n                   <a href=\"javascript:void(0);\"><i class=\"material-icons\">\r\n                   date_range\r\n                   </i><span class=\"text-white font-sm\">{{blogDetails?.author?.post_date}}</span></a>\r\n                </div>\r\n               \r\n             </div>\r\n          </div>\r\n       </div>\r\n    </div>\r\n </div>\r\n <div class=\"inner-container bg-white\">\r\n    <div class=\"container\">\r\n       <div class=\"blog-detail section-gap\">\r\n          <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"col-gap\">\r\n             <div fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxFlex.md=\"60\" fxFlex.lg=\"60\" fxFlex.xl=\"60\" class=\"mb-4\">\r\n                <div class=\"blog-content mb-5\" [innerHTML]=\"blogDetails?.content\">\r\n                </div>\r\n                <div class=\"tag-n-social mb-4\" fxLayoutAlign=\"space-between\">\r\n                   <div>\r\n                      <mat-chip-list *ngFor=\"let tag of blogDetails?.tags\">\r\n                       \r\n                         <mat-chip color=\"accent\" selected> <a href=\"javascript:void(0);\">{{tag}}</a></mat-chip>\r\n                      </mat-chip-list>\r\n                   </div>\r\n                   <div>\r\n                      <embryo-SocialShare></embryo-SocialShare>\r\n                   </div>\r\n                </div>\r\n                <div class=\"blog-nav p-4\" fxLayoutAlign=\"space-between\">\r\n                   <button mat-raised-button color=\"accent\">Prev</button>\r\n                   <button mat-raised-button color=\"accent\">Next</button>\r\n                </div>\r\n                <div class=\"author-section pt-4 pb-2\">\r\n                   <div class=\"block-title mb-4\">\r\n                      <h3>About the Author</h3>\r\n                   </div>\r\n                   <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n                      <div class=\"mb-3\" fxFlex.sm=\"20\" fxFlex.xs=\"100\" fxFlex.md=\"15\" fxFlex.lg=\"15\" fxFlex.xl=\"15\">\r\n                         <img class=\"round-radius\" src=\"{{blogDetails?.author?.author_img}}\" width=\"150\" alt=\"author detail\">\r\n                      </div>\r\n                      <div fxFlex.sm=\"80\" fxFlex.xs=\"100\" fxFlex.md=\"80\" fxFlex.lg=\"80\" fxFlex.xl=\"80\" class=\"px-4 mb-3\">\r\n                         <h4>{{blogDetails?.author?.author_name}}</h4>\r\n                         <p>{{blogDetails?.author?.author_bio}}\r\n                         </p>\r\n                      </div>\r\n                   </div>\r\n                </div>\r\n                <hr class=\"spacer\">\r\n                <div class=\"blog-comment-section\">\r\n                    <div class=\"block-title mb-4\">\r\n                        <h3>Comments({{(blogDetails?.user_comments).length}})</h3>\r\n                     </div>\r\n                   <div class=\"commented-wrapper\">\r\n                      <ul>\r\n                         <li *ngFor=\"let comment of blogDetails?.user_comments\">\r\n                            <div class=\"comment-item\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n                               <div class=\"mb-3\" fxFlex.sm=\"20\" fxFlex.xs=\"100\" fxFlex.md=\"15\" fxFlex.lg=\"15\" fxFlex.xl=\"15\">\r\n                                  <img class=\"round-radius\" [src]=\"comment.img\" width=\"100\" alt=\"user comment\">\r\n                               </div>\r\n                               <div fxFlex.sm=\"80\" fxFlex.xs=\"100\" fxFlex.md=\"80\" fxFlex.lg=\"80\" fxFlex.xl=\"80\" class=\"px-4 mb-3\">\r\n                                  <h5>{{comment?.name}}</h5>\r\n                                  <p> {{comment?.comment}}\r\n                                  </p>\r\n                                  <div fxLayoutAlign=\"space-between\">\r\n                                     <div>\r\n                                        <a href=\"javascript:void(0);\" class=\"primary-color font-bold\">Replay</a>\r\n                                     </div>\r\n                                     <div class=\"primary-color font-bold\">\r\n                                            {{comment?.date}}\r\n                                     </div>\r\n                                  </div>\r\n                               \r\n                               </div>\r\n                            </div>\r\n                            <ul>\r\n                               <li *ngFor=\"let subComment of comment?.sub_comments\">\r\n                                  <div class=\"comment-item\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n                                     <div class=\"mb-3\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxFlex.md=\"15\" fxFlex.lg=\"15\" fxFlex.xl=\"15\">\r\n                                        <img class=\"round-radius\" [src]=\"subComment.img\" width=\"100\" alt=\"user comment\">\r\n                                     </div>\r\n                                     <div fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxFlex.md=\"80\" fxFlex.lg=\"80\" fxFlex.xl=\"80\" class=\"px-4 mb-3\">\r\n                                        <h5>{{subComment?.name}}</h5>\r\n                                        <p> {{subComment?.comment}}\r\n                                        </p>\r\n                                        <div fxLayoutAlign=\"space-between\">\r\n                                            <div>\r\n                                               <a href=\"javascript:void(0);\" class=\"primary-color font-bold\">Replay</a>\r\n                                            </div>\r\n                                            <div class=\"primary-color font-bold\">\r\n                                                    {{subComment?.date}}\r\n                                            </div>\r\n                                         </div>\r\n                                       \r\n                                     </div>\r\n                                  </div>\r\n                               </li>\r\n                              \r\n                            </ul>\r\n                         </li>\r\n                      </ul>\r\n                   </div>\r\n                </div>\r\n                <div class=\"leave-commet mt-4\">\r\n                   <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"100\" fxFlex.lg=\"100\" fxFlex.xl=\"100\">\r\n                      <div class=\"block-title \">\r\n                         <h3>Leave Comments</h3>\r\n                      </div>\r\n                      <form [formGroup] = \"commentForm\" (ngSubmit) = \"submitForm()\">\r\n                       <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"First Name\" formControlName=\"first_name\">\r\n                       </mat-form-field>\r\n                       <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Last Name\" formControlName=\"last_name\">\r\n                       </mat-form-field>\r\n                       <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                       </mat-form-field>\r\n                       <mat-error *ngIf=\"commentForm.controls['email'].hasError('pattern') && commentForm.controls['email'].touched\">Please enter a valid email.</mat-error>\r\n                       <mat-form-field class=\"w-100\">\r\n                          <textarea matInput placeholder=\"Leave a Message\" formControlName=\"message\"></textarea>\r\n                       </mat-form-field>\r\n                       <button mat-raised-button color=\"accent\" class=\"button-lg\" type=\"submit\">Send Messsage</button>\r\n                    </form>\r\n                   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       </div>\r\n    </div>\r\n </div>\r\n</ng-container>\r\n \r\n "

/***/ }),

/***/ "./src/app/Pages/Blogs/Details/Details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Pages/Blogs/Details/Details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL0Jsb2dzL0RldGFpbHMvRGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/Blogs/Details/Details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Pages/Blogs/Details/Details.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "./src/app/Services/Embryo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(embryoService, route, router, formGroup) {
        this.embryoService = embryoService;
        this.route = route;
        this.router = router;
        this.formGroup = formGroup;
        this.emailPattern = /\S+@\S+\.\S+/;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentForm = this.formGroup.group({
            first_name: [''],
            last_name: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)],
            message: ['']
        });
        this.route.params.subscribe(function (res) {
            _this.blogId = res.id;
            _this.getBlodDetails();
        });
    };
    DetailsComponent.prototype.getBlodDetails = function () {
        var _this = this;
        this.blogId = (this.blogId) ? this.blogId : 1;
        this.embryoService.getBlogList().valueChanges().
            subscribe(function (res) { _this.getBlogDetailsResponse(res); });
    };
    DetailsComponent.prototype.getBlogDetailsResponse = function (response) {
        for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
            var data = response_1[_i];
            if (data.id == this.blogId) {
                this.blogDetails = data;
                break;
            }
        }
    };
    DetailsComponent.prototype.submitForm = function () {
        console.log(this.commentForm.value);
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Details',
            template: __webpack_require__(/*! ./Details.component.html */ "./src/app/Pages/Blogs/Details/Details.component.html"),
            styles: [__webpack_require__(/*! ./Details.component.scss */ "./src/app/Pages/Blogs/Details/Details.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_3__["EmbryoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-Blogs-Blogs-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 33, vars: 0, consts: [[1, "about-container"], [1, "inner-about"], [1, "first_container"], ["src", "../../assets/images/profile-img.JPG"], [1, "second_container"], [1, "titles"], ["href", "https://uca.edu/", "target", "blank"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Aung Kyaw Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Location: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Little Rock, AR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Age: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Job Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Front End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Hi, I am Aung Kyaw Min, a software engineer based in Little Rock, AR. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Shortly after graduating from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "University of Central Arkansas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ", I joined Arkansas Blue Cross Blue Shield where I work on a wide variety of interesting and meaningful projects on a daily basis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-container[_ngcontent-%COMP%]{\r\n    font-family: \"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\r\n    margin: 0px;\r\n    padding: 125px 50px;\r\n    background-color: #21364b;\r\n    height: 100vh;\r\n    max-height: 100vh;\r\n}\r\n\r\n\r\n.inner-about[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    max-width: 700px;\r\n    \r\n    \r\n    margin: 0px auto 100px;\r\n}\r\n\r\n\r\n.first_container[_ngcontent-%COMP%]{ \r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.titles[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    \r\n    font-weight: 500;\r\n    color: #a7e0f3;\r\n}\r\n\r\n\r\nul[_ngcontent-%COMP%]{\r\n    columns: 2;\r\n}\r\n\r\n\r\nli[_ngcontent-%COMP%]{\r\n    color: #869bb0;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    list-style-type: none;\r\n    padding: 10px;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    color: #869bb0;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 0px 20px;\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\na[_ngcontent-%COMP%]{\r\n    color:  #a7e0f3;\r\n    list-style: none;\r\n}\r\n\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-width: 320px)\r\n{\r\n    .about-container[_ngcontent-%COMP%]{\r\n        padding: 45px 0px;\r\n    }\r\n    \r\n    ul[_ngcontent-%COMP%]{\r\n        padding-right: 10px;\r\n        padding-left: 30px;\r\n    }\r\n\r\n    li[_ngcontent-%COMP%]{\r\n        padding-left: 5px;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 480px)\r\n{\r\n    .about-container[_ngcontent-%COMP%]{\r\n        padding: 45px 0px;\r\n    }\r\n    \r\n    ul[_ngcontent-%COMP%]{\r\n        padding-right: 10px;\r\n        padding-left: 30px;\r\n    }\r\n\r\n    li[_ngcontent-%COMP%]{\r\n        padding-left: 5px;\r\n        padding-right: 5px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0NJOzs7QUFHSjtJQUNJLCtGQUErRjtJQUMvRixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBLGFBQWE7OztBQUNiOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7QUFDSjs7O0FBRUE7O0lBRUk7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5hYm91dC1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwODBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaW5uZXItY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5maXJzdF9jb250YWluZXJ7IFxyXG4gICAgZmxvYXQ6bGVmdDsgIFxyXG4gICAgYmFja2dyb3VuZDpSZWQ7IFxyXG4gICAgd2lkdGg6NTAlOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDQwcHggMTIwcHg7XHJcbn0gXHJcblxyXG4uc2Vjb25kX2NvbnRhaW5lcnsgXHJcbiAgICBmbG9hdDpyaWdodDsgIFxyXG4gICAgYmFja2dyb3VuZDpibHVlOyBcclxuICAgIHdpZHRoOjUwJTsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0gICovXHJcblxyXG5cclxuLmFib3V0LWNvbnRhaW5lcntcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxcIkx1Y2lkYSBHcmFuZGVcIixzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMjVweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMzY0YjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmlubmVyLWFib3V0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIC8qIHBhZGRpbmc6IDE1MHB4IDBweDsgKi9cclxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAyMDBweDsgKi9cclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMTAwcHg7XHJcbn1cclxuXHJcbi5maXJzdF9jb250YWluZXJ7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSBcclxuXHJcbi50aXRsZXN7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2E3ZTBmMztcclxufVxyXG5cclxudWx7XHJcbiAgICBjb2x1bW5zOiAyO1xyXG59XHJcblxyXG5saXtcclxuICAgIGNvbG9yOiAjODY5YmIwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBjb2xvcjogIzg2OWJiMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiAgI2E3ZTBmMztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogTW9iaWxlIFMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweClcclxue1xyXG4gICAgLmFib3V0LWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiA0NXB4IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdWx7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGl7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KVxyXG57XHJcbiAgICAuYWJvdXQtY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDQ1cHggMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1bHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBsaXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const appRoutes = [
// { path: '', redirectTo: '/intro', pathMatch: 'full'},
// { path: 'about', component: AboutComponent},
// { path: 'skills', component: SkillsComponent},
// { path: 'experience', component: ExperienceComponent},
// { path: 'projects', component: ProjectsComponent},
// { path: 'get-in-touch', component: GetInTouchComponent}
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-in-touch/get-in-touch.component */ "./src/app/get-in-touch/get-in-touch.component.ts");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./copyright/copyright.component */ "./src/app/copyright/copyright.component.ts");










class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Aung Kyaw Min';
        titleService.setTitle("Aung Kyaw Min | Software Engineer");
    }
    onScroll(event) {
        console.log(event);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 0, consts: [["id", "about", 3, "scroll"], ["id", "skills"], ["id", "experience"], ["id", "contact"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-about", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_Template_app_about_scroll_2_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-experience", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-get-in-touch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-copyright");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"], _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_7__["GetInTouchComponent"], _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_8__["CopyrightComponent"]], styles: ["body[_ngcontent-%COMP%]{\r\n    background-color:   #BBBBBB;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjogICNFRUVFRUU7XHJcbn0gKi9cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgICNCQkJCQkI7XHJcbn1cclxuXHJcbmh0bWx7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./copyright/copyright.component */ "./src/app/copyright/copyright.component.ts");
/* harmony import */ var _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scroll/scroll.component */ "./src/app/scroll/scroll.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./get-in-touch/get-in-touch.component */ "./src/app/get-in-touch/get-in-touch.component.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_6__["CopyrightComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"],
        _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_14__["GetInTouchComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"],
        _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_7__["ScrollComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBRootModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                    _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_6__["CopyrightComponent"],
                    _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"],
                    _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_14__["GetInTouchComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"],
                    _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_7__["ScrollComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/copyright/copyright.component.ts":
/*!**************************************************!*\
  !*** ./src/app/copyright/copyright.component.ts ***!
  \**************************************************/
/*! exports provided: CopyrightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function() { return CopyrightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






class CopyrightComponent {
    constructor() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
        this.faEnvelope = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
    }
    ngOnInit() {
    }
}
CopyrightComponent.ɵfac = function CopyrightComponent_Factory(t) { return new (t || CopyrightComponent)(); };
CopyrightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CopyrightComponent, selectors: [["app-copyright"]], decls: 13, vars: 3, consts: [[1, "footer"], [1, "icon-list"], ["href", "https://github.com/AungKyaw-Min", "target", "blank"], [1, "icon", 3, "icon"], ["href", "https://www.linkedin.com/in/aungkyaw-min/", "target", "blank"], ["href", "mailto:koaungkyaw-min23@gmail.com"]], template: function CopyrightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Copyright \u00A9 2020 Aung Kyaw Min. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".footer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #212121;\r\n    color: rgba(255, 255, 255, 0.5);\r\n    padding: 10px 0px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: rgba(255, 255, 255, 0.5);\r\n    \r\n    \r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    background: rgba(128, 128, 128, 0.568);\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    padding: 15px 30px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    list-style-type: none;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n    font-size: 1em;\r\n    padding: 10px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtCQUErQjs7SUFFL0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb3B5cmlnaHQvY29weXJpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIFxyXG4gICAgLyogcGFkZGluZzogMzBweCAxNXB4OyAqL1xyXG59XHJcblxyXG5mYS1pY29ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU2OCk7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG59XHJcblxyXG51bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyrightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-copyright',
                templateUrl: './copyright.component.html',
                styleUrls: ['./copyright.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 27, vars: 0, consts: [[1, "experience-contaniner"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "timeline"], ["target", "blank", "href", "https://uca.edu/"], [1, "float-right"], [1, "position"], ["target", "blank", "href", "https://www.arkansasbluecross.com/"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "University of Central Arkansas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "December, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Graduated from University of Central Arkansas with Bachelor of Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Arkansas Blue Cross Blue Shield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "March, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Associate Software Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Build, design and create robust prompt page interface from IBM Cognos framework into Angular framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h4[_ngcontent-%COMP%]{\r\n    color: #b3e9e3;\r\n}\r\n\r\n.experience-contaniner[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 30px 50px;\r\n    background-color: #679895;\r\n    color: #fff;\r\n    height: 100vh;\r\n    max-height: 100vh;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    position: relative;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]:before {\r\n    content: ' ';\r\n    background: #d4d9df;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 29px;\r\n    width: 2px;\r\n    height: 100%;\r\n    z-index: 400;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    padding-left: 20px;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\r\n    content: ' ';\r\n    background: white;\r\n    display: inline-block;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    border: 3px solid #32c7b8;\r\n    left: 20px;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 400;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: #D4FAF6;\r\n    font-weight: bold;\r\n}\r\n\r\n.position[_ngcontent-%COMP%]{\r\n    color: #b3e9e3;\r\n    \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px)\r\n{\r\n    .container[_ngcontent-%COMP%]{\r\n        margin-top: 150px;\r\n        margin-bottom: 150px;\r\n    }\r\n    \r\n    .experience-contaniner[_ngcontent-%COMP%]{\r\n        padding-left: 0px;\r\n        padding-right: 0px;\r\n    }\r\n\r\n    a[_ngcontent-%COMP%]{\r\n        font-weight: 200;\r\n    }\r\n    \r\n    .float-right[_ngcontent-%COMP%]{\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 481px)\r\n{\r\n    .container[_ngcontent-%COMP%]{\r\n        margin-top: 200px;\r\n        margin-bottom: 200px;\r\n    }\r\n    \r\n    .col-md-8[_ngcontent-%COMP%]{\r\n        margin-left: 10%;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 769px) and (min-width: 1280px)\r\n{\r\n    .container[_ngcontent-%COMP%]{\r\n        margin-top: 300px;\r\n        margin-bottom: 300px;\r\n    }\r\n\r\n    .col-lg-6[_ngcontent-%COMP%]{\r\n        margin-left: 25%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBSUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBLFdBQVc7O0FBQ1g7O0lBRUk7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBLFdBQVc7O0FBQ1g7O0lBRUk7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUEsV0FBVzs7QUFDWDs7SUFFSTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDR7XHJcbiAgICBjb2xvcjogI2IzZTllMztcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtY29udGFuaW5lcntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3OTg5NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5cclxuXHJcbnVsLnRpbWVsaW5lIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG51bC50aW1lbGluZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZDlkZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI5cHg7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNDAwO1xyXG59XHJcbnVsLnRpbWVsaW5lID4gbGkge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxudWwudGltZWxpbmUgPiBsaTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzJjN2I4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogNDAwO1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICNENEZBRjY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBvc2l0aW9ue1xyXG4gICAgY29sb3I6ICNiM2U5ZTM7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxufVxyXG5cclxuLyogTW9iaWxlICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpXHJcbntcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leHBlcmllbmNlLWNvbnRhbmluZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZsb2F0LXJpZ2h0e1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuLyogVGFibGV0ICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpXHJcbntcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtbWQtOHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBMYXB0b3AgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtaW4td2lkdGg6IDEyODBweClcclxue1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWxnLTZ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/get-in-touch/get-in-touch.component.ts":
/*!********************************************************!*\
  !*** ./src/app/get-in-touch/get-in-touch.component.ts ***!
  \********************************************************/
/*! exports provided: GetInTouchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInTouchComponent", function() { return GetInTouchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



class GetInTouchComponent {
    constructor() {
        this.faHandPointRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHandPointRight"];
    }
    ngOnInit() {
    }
}
GetInTouchComponent.ɵfac = function GetInTouchComponent_Factory(t) { return new (t || GetInTouchComponent)(); };
GetInTouchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetInTouchComponent, selectors: [["app-get-in-touch"]], decls: 11, vars: 0, consts: [[1, "get-in-touch-container"], [1, "inner-get-in-touch"], ["href", "mailto:koaungkyaw-min23@gmail.com"]], template: function GetInTouchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "I can help.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I am available for full-time employment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Say Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".get-in-touch-container[_ngcontent-%COMP%]{\r\n    font-family: \"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\r\n    background-color: #31355b;\r\n    margin: 0px;\r\n    height: 100vh;\r\n    padding: 150px 50px;\r\n    color: #fff;\r\n    max-height: 100vh;\r\n}\r\n\r\n.inner-get-in-touch[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    max-width: 600px;\r\n    padding: 150px 0px;\r\n    margin: 0px auto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-size: 3em;\r\n    font-weight: 300;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    padding-top: 15px;\r\n    font-weight: 500;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 10px 20px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    background-color: #4299ed;\r\n    list-style: none;\r\n    border-radius: 8px;\r\n    padding: 18px 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LWluLXRvdWNoL2dldC1pbi10b3VjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0ZBQStGO0lBQy9GLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZ2V0LWluLXRvdWNoL2dldC1pbi10b3VjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldC1pbi10b3VjaC1jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsXCJMdWNpZGEgR3JhbmRlXCIsc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTM1NWI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiAxNTBweCA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmlubmVyLWdldC1pbi10b3VjaHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNTBweCAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuaDN7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOTllZDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDI1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetInTouchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-get-in-touch',
                templateUrl: './get-in-touch.component.html',
                styleUrls: ['./get-in-touch.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
    scroll(i) {
        document.getElementById(i).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 11, vars: 0, consts: [[1, "intro-container"], [1, "inner-intro"], [1, "second_intro"], [1, "third_intro"], [3, "click"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aung Kyaw Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I'm a software engineer & front\u2011end developer focused on crafting clean & user\u2011friendly experiences.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroComponent_Template_a_click_9_listener() { return ctx.scroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".intro-container[_ngcontent-%COMP%]{\r\n    background-color: #75a7b2;\r\n    \r\n    color: #e7e7e7;\r\n    margin: 0px;\r\n    \r\n    padding-right: auto;\r\n    padding-bottom: 170px;\r\n    padding-top: 170px;\r\n    height: 100vh;\r\n    max-height: 100vh;\r\n}\r\n\r\n.inner-intro[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    text-align: center;\r\n    width: 50%;\r\n    \r\n    padding: 120px 0px;\r\n    margin: 0px auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: #e7e7e7;\r\n    background-color: \t#2e5861;\r\n    list-style: none;\r\n    border-radius: 8px;\r\n    padding: 18px 25px;\r\n}\r\n\r\n\r\n\r\n.second_intro[_ngcontent-%COMP%]{\r\n    font-size: 75px;\r\n}\r\n\r\n.third_intro[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px)\r\n{\r\n    .inner-intro[_ngcontent-%COMP%]{\r\n        margin: 0px;\r\n        width: 100%;\r\n    }\r\n    .second_intro[_ngcontent-%COMP%]{\r\n        font-size: 45px;\r\n    }\r\n\r\n    .third_intro[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 481px)\r\n{\r\n    .intro-container[_ngcontent-%COMP%]{\r\n        padding: 180px 100px;\r\n    }\r\n    .inner-intro[_ngcontent-%COMP%]{\r\n        margin: 0px;\r\n        width: 100%;\r\n    }\r\n    .second_intro[_ngcontent-%COMP%]{\r\n        font-size: 45px;\r\n    }\r\n\r\n    .third_intro[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 481px)\r\n{\r\n    .second_intro[_ngcontent-%COMP%]{\r\n        font-size: 75px;\r\n    }\r\n\r\n    .third_intro[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSDs7Ozs7O0dBTUc7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBOztHQUVHOztBQUVIO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsV0FBVzs7QUFDWDs7SUFFSTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUVBLFdBQVc7O0FBQ1g7O0lBRUk7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUVBLFdBQVc7O0FBQ1g7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8tY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1YTdiMjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNhM2QzZGQ7ICovXHJcbiAgICBjb2xvcjogI2U3ZTdlNztcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMGVtOyAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNzBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmlubmVyLWludHJve1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC8qIHBhZGRpbmc6IDE1MHB4IDBweDsgKi9cclxuICAgIHBhZGRpbmc6IDEyMHB4IDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi8qIHNwYW57XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59ICovXHJcblxyXG4vKiBhe1xyXG4gICAgY29sb3I6ICNlN2U3ZTc7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXHQjMmU1ODYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgcGFkZGluZzogMThweCAyNXB4O1xyXG59ICovXHJcblxyXG5he1xyXG4gICAgY29sb3I6ICNlN2U3ZTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcdCMyZTU4NjE7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMThweCAyNXB4O1xyXG59XHJcbi8qIC5maXJzdF9pbnRyb3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSAqL1xyXG5cclxuLnNlY29uZF9pbnRyb3tcclxuICAgIGZvbnQtc2l6ZTogNzVweDtcclxufVxyXG5cclxuLnRoaXJkX2ludHJve1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5oM3tcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qIE1vYmlsZSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KVxyXG57XHJcbiAgICAuaW5uZXItaW50cm97XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kX2ludHJve1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGhpcmRfaW50cm97XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogVGFibGV0ICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpXHJcbntcclxuICAgIC5pbnRyby1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMTgwcHggMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItaW50cm97XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kX2ludHJve1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGhpcmRfaW50cm97XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogTGFwdG9wICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpXHJcbntcclxuICAgIC5zZWNvbmRfaW50cm97XHJcbiAgICAgICAgZm9udC1zaXplOiA3NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aGlyZF9pbnRyb3tcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { "show": a0 }; };
class NavbarComponent {
    constructor() {
        this.faAutoprefixer = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAutoprefixer"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.navbarOpen = false;
    }
    ngOnInit() {
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    scroll(i) {
        document.getElementById(i).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    onWindowScroll(e) {
        let element = document.querySelector('.navbar');
        if (window.pageYOffset > 80) {
            // console.log(window.pageYOffset)
            // console.log(element.clientHeight)
            // element.classList.add('fadeInDown');
            // element.classList.add('animated');
            // element.classList.add('navbar-change');
        }
        else {
            element.classList.remove('navbar-change');
            element.classList.remove('fadeInUp');
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 25, vars: 4, consts: [["id", "navbar ", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top"], [1, "navbar-brand"], ["id", "logo", 3, "icon"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "click"], ["href", "/resume.pdf", "target", "blank", 1, "nav-link", "resume"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.scroll("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() { return ctx.scroll("experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_17_listener() { return ctx.scroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_20_listener() { return ctx.scroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAutoprefixer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.navbarOpen));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n   width: 100%;\r\n   min-height: 50px;\r\n   \r\n   \r\n   \r\n   \r\n}\r\n\r\n\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: 50px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n.resume[_ngcontent-%COMP%]{\r\n    padding: 8px;\r\n    border: rgba(255, 255, 255, 0.5) solid 1px;\r\n    border-radius: 4px;\r\n    max-width: 95px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n    padding-left: 50px;\r\n    font-size: 28px;\r\n}\r\n\r\n\r\n\r\n\r\n@media only screen and (min-width: 576px)\r\n{\r\n    .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        padding-right: 1rem;\r\n        padding-left: 1rem;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n@media only screen and (min-width: 1280px) {\r\n    .collapse[_ngcontent-%COMP%]{\r\n        height: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7Ozs7QUFLSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUVHOzs7OztBQUVILFVBQVU7Ozs7O0FBRVY7R0FDRyxXQUFXO0dBQ1gsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQjt5Q0FDc0M7R0FDdEMsZ0NBQWdDO0dBQ2hDOzBCQUN1QjtBQUMxQjs7Ozs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COzs7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmOzs7c0JBR2tCO0FBQ3RCOzs7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7Ozs7O0FBRUE7O0lBRUk7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCO0FBQ0o7Ozs7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5yZXN1bWV7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bltjbGFzcyo9YnRuLW91dGxpbmUtXS5idG4tc217XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufSAqL1xyXG5cclxuXHJcblxyXG5cclxuLyogKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgY29sb3I6ICAjRUVFRUVFO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICNFRUVFRUU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHBhZGRpbmc6IDcuNXB4IDEwcHggNy41cHggMDtcclxufVxyXG5cclxuLml0ZW17XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaXRlbS5idXR0b24ge1xyXG4gICAgcGFkZGluZzogOXB4IDVweDtcclxufVxyXG5cclxuLml0ZW06aG92ZXIsIGE6aG92ZXI6OmFmdGVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnUgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweCA1cHg7XHJcbn1cclxuXHJcbi50b2dnbGV7XHJcbiAgICBvcmRlcjogMTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLml0ZW1cclxue1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUgLml0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0gKi9cclxuXHJcbi8qIDEyOjE4ICovXHJcblxyXG4ubmF2YmFye1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWluLWhlaWdodDogNTBweDtcclxuICAgLyogaGVpZ2h0OmF1dG87ICovXHJcbiAgIC8qIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgIHRyYW5zaXRpb246bWF4LWhlaWdodCAwLjNzIGVhc2Utb3V0OyAqL1xyXG4gICAvKiB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDsgKi9cclxuICAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgIHRyYW5zaXRpb24tZGVsYXk6IDJzOyAqL1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnJlc3VtZXtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1heC13aWR0aDogOTVweDtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIHNvbGlkIDFweDtcclxuICAgIG1heC13aWR0aDogNzVweDsgKi9cclxufVxyXG5cclxuLm5hdmJhci1icmFuZHtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweClcclxue1xyXG4gICAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5jb2xsYXBzZXtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 0, template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/scroll/scroll.component.ts":
/*!********************************************!*\
  !*** ./src/app/scroll/scroll.component.ts ***!
  \********************************************/
/*! exports provided: ScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ScrollComponent {
    constructor() { }
    ngOnInit() {
    }
    scroll(i) {
        document.getElementById(i).scrollIntoView();
    }
}
ScrollComponent.ɵfac = function ScrollComponent_Factory(t) { return new (t || ScrollComponent)(); };
ScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollComponent, selectors: [["app-scroll"]], decls: 4, vars: 0, consts: [[3, "click"], ["id", "target"]], template: function ScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollComponent_Template_button_click_0_listener() { return ctx.scroll("target"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Click to scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] { \r\n    font-family: Lato; \r\n}\r\ndiv[_ngcontent-%COMP%] { \r\n    margin-top: 5000px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsL3Njcm9sbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zY3JvbGwvc2Nyb2xsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7IFxyXG4gICAgZm9udC1mYW1pbHk6IExhdG87IFxyXG59XHJcbmRpdiB7IFxyXG4gICAgbWFyZ2luLXRvcDogNTAwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll',
                templateUrl: './scroll.component.html',
                styleUrls: ['./scroll.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");




class SkillsComponent {
    constructor() {
        this.faLanguage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLanguage"];
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 4, vars: 1, consts: [[1, "skills-container"], [1, "inner-skills"], [3, "icon"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLanguage);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".skills-container[_ngcontent-%COMP%]{\r\n    font-family: \"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\r\n    background-color: #bc855b;\r\n    margin: 0px;\r\n    padding: 150px 50px;\r\n    color: #e4b58f;\r\n    height: 100vh;\r\n    max-height: 100vh;\r\n}\r\n\r\n.inner-skills[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    max-width: 600px;\r\n    padding: 150px 0px;\r\n    margin: 0px auto 100px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 10px 20px;\r\n    margin-bottom: 0px;\r\n    font-size: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0ZBQStGO0lBQy9GLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzLWNvbnRhaW5lcntcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxcIkx1Y2lkYSBHcmFuZGVcIixzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JjODU1YjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMTUwcHggNTBweDtcclxuICAgIGNvbG9yOiAjZTRiNThmO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaW5uZXItc2tpbGxze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmc6IDE1MHB4IDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMTAwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Min\Documents\GitHub\aungkyawmin.github.io\project-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
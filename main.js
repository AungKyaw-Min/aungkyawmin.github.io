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
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 33, vars: 0, consts: [[1, "about-container"], [1, "inner-about"], [1, "first_container"], ["src", "../../assets/images/profile-img.JPG"], [1, "second_container"], [1, "titles"], ["href", "https://uca.edu/"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: [".about-container[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    height: 100%;\r\n    padding: 150px 50px;\r\n    background-color: #21364b;\r\n}\r\n\r\n\r\n.inner-about[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    max-width: 700px;\r\n    \r\n    \r\n    margin: 0px auto 100px;\r\n}\r\n\r\n\r\n.first_container[_ngcontent-%COMP%]{ \r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.titles[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    color: #a7e0f3;\r\n}\r\n\r\n\r\nul[_ngcontent-%COMP%]{\r\n    columns: 2;\r\n}\r\n\r\n\r\nli[_ngcontent-%COMP%]{\r\n    color: #869bb0;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    list-style-type: none;\r\n    padding: 10px;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    color: #869bb0;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 0px 20px;\r\n    padding-top: 40px;\r\n}\r\n\r\n\r\na[_ngcontent-%COMP%]{\r\n    color:  #a7e0f3;\r\n    list-style: none;\r\n}\r\n\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0NJOzs7QUFHSjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmFib3V0LWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE5MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pbm5lci1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmZpcnN0X2NvbnRhaW5lcnsgXHJcbiAgICBmbG9hdDpsZWZ0OyAgXHJcbiAgICBiYWNrZ3JvdW5kOlJlZDsgXHJcbiAgICB3aWR0aDo1MCU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNDBweCAxMjBweDtcclxufSBcclxuXHJcbi5zZWNvbmRfY29udGFpbmVyeyBcclxuICAgIGZsb2F0OnJpZ2h0OyAgXHJcbiAgICBiYWNrZ3JvdW5kOmJsdWU7IFxyXG4gICAgd2lkdGg6NTAlOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxufSAgKi9cclxuXHJcblxyXG4uYWJvdXQtY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNTBweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMzY0YjtcclxufVxyXG5cclxuLmlubmVyLWFib3V0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIC8qIHBhZGRpbmc6IDE1MHB4IDBweDsgKi9cclxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAyMDBweDsgKi9cclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMTAwcHg7XHJcbn1cclxuXHJcbi5maXJzdF9jb250YWluZXJ7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSBcclxuXHJcbi50aXRsZXN7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjYTdlMGYzO1xyXG59XHJcblxyXG51bHtcclxuICAgIGNvbHVtbnM6IDI7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgY29sb3I6ICM4NjliYjA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxucHtcclxuICAgIGNvbG9yOiAjODY5YmIwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICAjYTdlMGYzO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-in-touch/get-in-touch.component */ "./src/app/get-in-touch/get-in-touch.component.ts");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./copyright/copyright.component */ "./src/app/copyright/copyright.component.ts");








class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'aungkyaw-min';
        titleService.setTitle("Aung Kyaw Min | Software Engineer");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-get-in-touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_5__["GetInTouchComponent"], _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_6__["CopyrightComponent"]], styles: ["body[_ngcontent-%COMP%]{\r\n    background-color:   #BBBBBB;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgIGNvbG9yOiAgI0VFRUVFRTtcclxufSAqL1xyXG5cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAgI0JCQkJCQjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./copyright/copyright.component */ "./src/app/copyright/copyright.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-in-touch/get-in-touch.component */ "./src/app/get-in-touch/get-in-touch.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_7__["CopyrightComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
        _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_9__["GetInTouchComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_7__["CopyrightComponent"],
                    _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
                    _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_9__["GetInTouchComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot()
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
CopyrightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CopyrightComponent, selectors: [["app-copyright"]], decls: 13, vars: 3, consts: [[1, "footer"], [1, "icon-list"], ["href", "https://github.com/AungKyaw-Min", "target", "blank"], [1, "icon", 3, "icon"], ["href", "https://www.linkedin.com/in/aungkyaw-min/", "target", "blank"], ["href", "mailto:koaungkyawmin23@gmail.com"]], template: function CopyrightComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
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
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".footer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #212121;\r\n    color: rgba(255, 255, 255, 0.5);\r\n    padding: 15px 0px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: rgba(255, 255, 255, 0.5);\r\n    \r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    padding: 15px 30px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    list-style-type: none;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvcHlyaWdodC9jb3B5cmlnaHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgLyogcGFkZGluZzogMzBweCAxNXB4OyAqL1xyXG59XHJcblxyXG5saXtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxufVxyXG5cclxudWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyrightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-copyright',
                templateUrl: './copyright.component.html',
                styleUrls: ['./copyright.component.css']
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


class GetInTouchComponent {
    constructor() { }
    ngOnInit() {
    }
}
GetInTouchComponent.ɵfac = function GetInTouchComponent_Factory(t) { return new (t || GetInTouchComponent)(); };
GetInTouchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetInTouchComponent, selectors: [["app-get-in-touch"]], decls: 8, vars: 0, consts: [[1, "footer-container"], [1, "inner-footer"]], template: function GetInTouchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Say Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-container[_ngcontent-%COMP%]{\r\n    background-color: #31355b;\r\n    margin: 0px;\r\n    height: 100%;\r\n    padding: 150px 50px;\r\n    color: rgba(255, 255, 255, 0.856);\r\n}\r\n\r\n.inner-footer[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    max-width: 600px;\r\n    padding: 150px 0px;\r\n    margin: 0px auto 100px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    font-size: 2.5em;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 40px 20px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    background-color: #4299ed;\r\n    list-style: none;\r\n    border-radius: 10%;\r\n    padding: 18px 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LWluLXRvdWNoL2dldC1pbi10b3VjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2dldC1pbi10b3VjaC9nZXQtaW4tdG91Y2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzU1YjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTUwcHggNTBweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KTtcclxufVxyXG5cclxuLmlubmVyLWZvb3RlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNTBweCAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDEwMHB4O1xyXG59XHJcblxyXG5zcGFue1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxufVxyXG5cclxucHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI5OWVkO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHBhZGRpbmc6IDE4cHggMjVweDtcclxufSJdfQ== */"] });
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
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 14, vars: 0, consts: [[1, "about-container"], [1, "inner-about"], [1, "first_intro"], [1, "second_intro"], [1, "third_intro"], ["href", "#"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi, my name is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Aung Kyaw Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I build things for the web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " I'm a software enginner based in Little Rock, AR specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-container[_ngcontent-%COMP%]{\r\n    background-color: #75a7b2;\r\n    \r\n    color: #e7e7e7;\r\n    margin: 0px;\r\n    height: 100%;\r\n    padding-left: 10em;\r\n    padding-right: auto;\r\n    padding-bottom: 190px;\r\n    padding-top: 190px;\r\n}\r\n\r\n.inner-about[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    width: 100%;\r\n    \r\n    padding-bottom: 0px;\r\n    padding-top: 0px;\r\n    padding-right: 300px;\r\n    padding-left: 0px;\r\n    margin: 0px auto 80px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    font-size: 2.5em;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    font-size: 18px;\r\n    text-align: left;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: #e7e7e7;\r\n    list-style: none;\r\n    \r\n    \r\n    background-color: \t#2e5861;\r\n    border-radius: 1px;\r\n    padding: 18px 25px;\r\n}\r\n\r\n.first_intro[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n\r\n.second_intro[_ngcontent-%COMP%]{\r\n    font-size: 80px;\r\n}\r\n\r\n.third_intro[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9pbnRyby9pbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NWE3YjI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNkM2RkOyAqL1xyXG4gICAgY29sb3I6ICNlN2U3ZTc7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTkwcHg7XHJcbn1cclxuXHJcbi5pbm5lci1hYm91dHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBhZGRpbmc6IDE1MHB4IDBweDsgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gODBweDtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuXHJcbnB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogI2U3ZTdlNztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNkM2RkOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzc1YTdiMjsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IFx0IzJlNTg2MTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIHBhZGRpbmc6IDE4cHggMjVweDtcclxufVxyXG5cclxuLmZpcnN0X2ludHJve1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc2Vjb25kX2ludHJve1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG59XHJcblxyXG4udGhpcmRfaW50cm97XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbn0iXX0= */"] });
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
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand"], [3, "icon"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#/about", 1, "nav-link"], ["href", "#/experience", 1, "nav-link"], ["href", "#/contact", 1, "nav-link"], ["href", "/resume.pdf", "target", "blank", 1, "nav-link", "resume"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Resume");
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
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n   width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: 50px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width: 576px)\r\n{\r\n    .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        padding-right: 1rem;\r\n        padding-left: 1rem;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n.resume[_ngcontent-%COMP%]{\r\n    border: rgba(255, 255, 255, 0.5) solid 1px;\r\n    border-radius: 4px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n    padding-left: 50px;\r\n    font-size: 28px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7Ozs7QUFLSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUVHOzs7OztBQUVILFVBQVU7Ozs7O0FBQ1Y7R0FDRyxXQUFXO0FBQ2Q7Ozs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7Ozs7QUFFQTs7SUFFSTtRQUNJLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7QUFDSjs7Ozs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEI7OztzQkFHa0I7QUFDdEI7Ozs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5yZXN1bWV7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bltjbGFzcyo9YnRuLW91dGxpbmUtXS5idG4tc217XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufSAqL1xyXG5cclxuXHJcblxyXG5cclxuLyogKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgY29sb3I6ICAjRUVFRUVFO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICNFRUVFRUU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHBhZGRpbmc6IDcuNXB4IDEwcHggNy41cHggMDtcclxufVxyXG5cclxuLml0ZW17XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaXRlbS5idXR0b24ge1xyXG4gICAgcGFkZGluZzogOXB4IDVweDtcclxufVxyXG5cclxuLml0ZW06aG92ZXIsIGE6aG92ZXI6OmFmdGVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnUgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweCA1cHg7XHJcbn1cclxuXHJcbi50b2dnbGV7XHJcbiAgICBvcmRlcjogMTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLml0ZW1cclxue1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUgLml0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0gKi9cclxuXHJcbi8qIDEyOjE4ICovXHJcbi5uYXZiYXJ7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KVxyXG57XHJcbiAgICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVzdW1le1xyXG4gICAgYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgc29saWQgMXB4O1xyXG4gICAgbWF4LXdpZHRoOiA3NXB4OyAqL1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
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


class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 2, vars: 0, template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "skills works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJ9 */"] });
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
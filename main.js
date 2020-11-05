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
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 33, vars: 0, consts: [[1, "about-container"], [1, "inner-about"], [1, "first_container"], ["src", "../../assets/images/profile-img.JPG"], [1, "second_container"], [1, "titles"], [1, "detail"], ["href", "https://uca.edu/", "target", "blank"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Shortly after graduating from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "University of Central Arkansas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ", I joined Arkansas Blue Cross Blue Shield where I work on a wide variety of interesting and meaningful projects on a daily basis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-container[_ngcontent-%COMP%] {\r\n  font-family: \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial,\r\n    \"Lucida Grande\", sans-serif;\r\n  margin: 0px;\r\n  overflow: hidden;\r\n  background-color: #21364b;\r\n  height: 100vh;\r\n  max-height: 100vh;\r\n}\r\n\r\n.inner-about[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  max-width: 700px;\r\n  \r\n  \r\n  margin: 0px auto 100px;\r\n}\r\n\r\n.first_container[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.titles[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  \r\n  font-weight: 500;\r\n  color: #a7e0f3;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  columns: 2;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  color: #869bb0;\r\n  font-size: 16px;\r\n  text-align: left;\r\n  list-style-type: none;\r\n  padding: 10px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: #869bb0;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 0px 20px;\r\n  padding-top: 10px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #a7e0f3;\r\n  list-style: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n  img[_ngcontent-%COMP%] {\r\n    max-width: 70%;\r\n    height: auto;\r\n  }\r\n\r\n  .about-container[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    padding-right: 10px;\r\n    padding-left: 30px;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%] {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .about-container[_ngcontent-%COMP%] {\r\n    padding: 30px 0px;\r\n  }\r\n}\r\n\r\n@media only screen and (width: 375px) {\r\n  .about-container[_ngcontent-%COMP%] {\r\n    padding: 100px 0px;\r\n  }\r\n\r\n  .detail[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@media only screen and (width: 320px) and (height: 568px) {\r\n  .about-container[_ngcontent-%COMP%] {\r\n    padding: 70px 0px;\r\n  }\r\n\r\n  .detail[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .about-container[_ngcontent-%COMP%] {\r\n    padding: 50px 50px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1280px) {\r\n  .about-container[_ngcontent-%COMP%] {\r\n    padding: 150px 50px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0NJOztBQUVKO0VBQ0U7K0JBQzZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUNYO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsMERBQTBEOztBQUMxRDtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQSw0RkFBNEY7O0FBQzVGOzs7O0lBSUk7O0FBRUosd0ZBQXdGOztBQUN4RjtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsc0VBQXNFOztBQUN0RTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmFib3V0LWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE5MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pbm5lci1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmZpcnN0X2NvbnRhaW5lcnsgXHJcbiAgICBmbG9hdDpsZWZ0OyAgXHJcbiAgICBiYWNrZ3JvdW5kOlJlZDsgXHJcbiAgICB3aWR0aDo1MCU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNDBweCAxMjBweDtcclxufSBcclxuXHJcbi5zZWNvbmRfY29udGFpbmVyeyBcclxuICAgIGZsb2F0OnJpZ2h0OyAgXHJcbiAgICBiYWNrZ3JvdW5kOmJsdWU7IFxyXG4gICAgd2lkdGg6NTAlOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxufSAgKi9cclxuXHJcbi5hYm91dC1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAgIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMzY0YjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaW5uZXItYWJvdXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIC8qIHBhZGRpbmc6IDE1MHB4IDBweDsgKi9cclxuICAvKiBwYWRkaW5nLWJvdHRvbTogMjAwcHg7ICovXHJcbiAgbWFyZ2luOiAwcHggYXV0byAxMDBweDtcclxufVxyXG5cclxuLmZpcnN0X2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRpdGxlcyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNhN2UwZjM7XHJcbn1cclxuXHJcbnVsIHtcclxuICBjb2x1bW5zOiAyO1xyXG59XHJcblxyXG5saSB7XHJcbiAgY29sb3I6ICM4NjliYjA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiAjODY5YmIwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICNhN2UwZjM7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qIE1vYmlsZSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogRm9yIGRldmljZXMgd2l0aCB3aWR0aCBvZiA0ODBweCBhbmQgbGVzcywgbGlrZSBwaG9uZXMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5hYm91dC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICh3aWR0aDogMzc1cHgpIHtcclxuICAuYWJvdXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5kZXRhaWwge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAod2lkdGg6IDMyMHB4KSBhbmQgKGhlaWdodDogNTY4cHgpIHtcclxuICAuYWJvdXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDcwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGb3IgZGV2aWNlcyB3aXRoIHdpZHRoIGJldHdlZW4gNDgxcHggYW5kIDc2OHB4LCBsaWtlIGxhcmdlciBwaG9uZXMgYW5kIHBvcnRyYWl0IHRhYmxldHMgKi9cclxuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG4gICAgLmFib3V0LWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAxMjBweCA1MHB4O1xyXG4gICAgfVxyXG59ICAqL1xyXG5cclxuLyogRm9yIGRldmljZXMgd2l0aCB3aWR0aCBiZXR3ZWVuIDc2OXB4IGFuZCAxMjc5cHgsIGxpa2UgbGFuZHNjYXBlIHRhYmxldHMgYW5kIGxhcHRvcHMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5hYm91dC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNTBweCA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogRm9yIGRldmljZXMgd2l0aCB3aWR0aCBvZiAxMjgwcHggYW5kIG1vcmUsIGxpa2UgZGVza3RvcCBjb21wdXRlcnMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAuYWJvdXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1MHB4IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-in-touch/get-in-touch.component */ "./src/app/get-in-touch/get-in-touch.component.ts");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./copyright/copyright.component */ "./src/app/copyright/copyright.component.ts");









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
    } }, decls: 6, vars: 0, consts: [["id", "about", 3, "scroll"], ["id", "experience"], ["id", "contact"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-about", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_Template_app_about_scroll_2_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-experience", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-get-in-touch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-copyright");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"], _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_6__["GetInTouchComponent"], _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_7__["CopyrightComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0g7Ozs7Ozs7R0FPRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjogICNFRUVFRUU7XHJcbn0gKi9cclxuLyogXHJcbi5zY3JvbGxlcntcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xyXG59XHJcblxyXG4ubWluaV9zY3JvbGx7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbn0gKi9cclxuIl19 */"] });
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
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".footer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #212121;\r\n    color: rgba(255, 255, 255, 0.5);\r\n    padding: 10px 0px;\r\n    overflow: hidden;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: rgba(255, 255, 255, 0.5);\r\n    \r\n    \r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    background: rgba(128, 128, 128, 0.568);\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    padding: 15px 30px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    list-style-type: none;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n    font-size: 1em;\r\n    padding: 10px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7O0lBRS9CLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgXHJcbiAgICAvKiBwYWRkaW5nOiAzMHB4IDE1cHg7ICovXHJcbn1cclxuXHJcbmZhLWljb257XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTY4KTtcclxufVxyXG5cclxubGl7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbn1cclxuXHJcbnVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn0iXX0= */"] });
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
    } }, styles: ["h4[_ngcontent-%COMP%]{\r\n    color: #b3e9e3;\r\n}\r\n\r\n.experience-contaniner[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin: 0px;\r\n    padding: 30px 50px;\r\n    background-color: #679895;\r\n    color: #fff;\r\n    height: 100vh;\r\n    max-height: 100vh;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    position: relative;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]:before {\r\n    content: ' ';\r\n    background: #d4d9df;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 29px;\r\n    width: 2px;\r\n    height: 100%;\r\n    z-index: 400;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    padding-left: 20px;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\r\n    content: ' ';\r\n    background: white;\r\n    display: inline-block;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    border: 3px solid #32c7b8;\r\n    left: 20px;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 400;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: #D4FAF6;\r\n    font-weight: bold;\r\n}\r\n\r\n.position[_ngcontent-%COMP%]{\r\n    color: #b3e9e3;\r\n    \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px)\r\n{\r\n    .container[_ngcontent-%COMP%]{\r\n        margin-top: 150px;\r\n        margin-bottom: 150px;\r\n    }\r\n    \r\n    .experience-contaniner[_ngcontent-%COMP%]{\r\n        padding-left: 0px;\r\n        padding-right: 0px;\r\n    }\r\n\r\n    a[_ngcontent-%COMP%]{\r\n        font-weight: 200;\r\n    }\r\n    \r\n    .float-right[_ngcontent-%COMP%]{\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 481px)\r\n{\r\n    .container[_ngcontent-%COMP%]{\r\n        margin-top: 150px;\r\n        margin-bottom: 200px;\r\n    }\r\n    \r\n    .col-md-8[_ngcontent-%COMP%]{\r\n        margin-left: 10%;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 769px) and (min-width: 1280px)\r\n{\r\n    .container[_ngcontent-%COMP%]{\r\n        margin-top: 280px;\r\n        margin-bottom: 120px;\r\n    }\r\n\r\n    .col-lg-6[_ngcontent-%COMP%]{\r\n        margin-left: 25%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUlBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQSxXQUFXOztBQUNYOztJQUVJO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQSxXQUFXOztBQUNYOztJQUVJO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBLFdBQVc7O0FBQ1g7O0lBRUk7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xyXG4gICAgY29sb3I6ICNiM2U5ZTM7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWNvbnRhbmluZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc5ODk1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcblxyXG5cclxudWwudGltZWxpbmUge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbnVsLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDRkOWRmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjlweDtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA0MDA7XHJcbn1cclxudWwudGltZWxpbmUgPiBsaSB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG51bC50aW1lbGluZSA+IGxpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMmM3Yjg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB6LWluZGV4OiA0MDA7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogI0Q0RkFGNjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucG9zaXRpb257XHJcbiAgICBjb2xvcjogI2IzZTllMztcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG59XHJcblxyXG4vKiBNb2JpbGUgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweClcclxue1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV4cGVyaWVuY2UtY29udGFuaW5lcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYXtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmxvYXQtcmlnaHR7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBUYWJsZXQgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweClcclxue1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC1tZC04e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIExhcHRvcCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1pbi13aWR0aDogMTI4MHB4KVxyXG57XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbGctNntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgfVxyXG59Il19 */"] });
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
    } }, styles: [".get-in-touch-container[_ngcontent-%COMP%] {\r\n  font-family: \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial,\r\n    \"Lucida Grande\", sans-serif;\r\n  background-color: #31355b;\r\n  margin: 0px;\r\n  height: 82vh;\r\n  padding: 150px 50px;\r\n  color: #fff;\r\n  overflow: hidden;\r\n}\r\n\r\n.inner-get-in-touch[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  max-width: 600px;\r\n\r\n  margin: 0px auto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 3em;\r\n  font-weight: 300;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  padding-top: 15px;\r\n  font-weight: 500;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #4299ed;\r\n  list-style: none;\r\n  border-radius: 8px;\r\n  padding: 18px 25px;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .get-in-touch-container[_ngcontent-%COMP%] {\r\n    padding: 150px 5px;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2.5em;\r\n  }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 481px) {\r\n  .get-in-touch-container[_ngcontent-%COMP%] {\r\n    padding: 80px 50px;\r\n  }\r\n  .inner-get-in-touch[_ngcontent-%COMP%] {\r\n    padding: 100px 0px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 769px) {\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .get-in-touch-container[_ngcontent-%COMP%] {\r\n    padding: 100px 50px;\r\n  }\r\n  .inner-get-in-touch[_ngcontent-%COMP%] {\r\n    padding: 130px 0px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1280px) {\r\n  .get-in-touch-container[_ngcontent-%COMP%] {\r\n    padding: 150px 50px;\r\n  }\r\n\r\n  .inner-get-in-touch[_ngcontent-%COMP%] {\r\n    padding: 60px 0px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LWluLXRvdWNoL2dldC1pbi10b3VjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7K0JBQzZCO0VBQzdCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjs7RUFFaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBLDBEQUEwRDs7QUFDMUQ7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLDRGQUE0Rjs7QUFDNUY7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsd0ZBQXdGOztBQUN4RjtBQUNBOztBQUVBLDZDQUE2Qzs7QUFDN0M7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nZXQtaW4tdG91Y2gvZ2V0LWluLXRvdWNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2V0LWluLXRvdWNoLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLFxyXG4gICAgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzU1YjtcclxuICBtYXJnaW46IDBweDtcclxuICBoZWlnaHQ6IDgydmg7XHJcbiAgcGFkZGluZzogMTUwcHggNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW5uZXItZ2V0LWluLXRvdWNoIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuXHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOTllZDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxOHB4IDI1cHg7XHJcbn1cclxuXHJcbi8qIEZvciBkZXZpY2VzIHdpdGggd2lkdGggb2YgNDgwcHggYW5kIGxlc3MsIGxpa2UgcGhvbmVzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuZ2V0LWluLXRvdWNoLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNTBweCA1cHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEZvciBkZXZpY2VzIHdpdGggd2lkdGggYmV0d2VlbiA0ODFweCBhbmQgNzY4cHgsIGxpa2UgbGFyZ2VyIHBob25lcyBhbmQgcG9ydHJhaXQgdGFibGV0cyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcbiAgLmdldC1pbi10b3VjaC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogODBweCA1MHB4O1xyXG4gIH1cclxuICAuaW5uZXItZ2V0LWluLXRvdWNoIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEZvciBkZXZpY2VzIHdpdGggd2lkdGggYmV0d2VlbiA3NjlweCBhbmQgMTI3OXB4LCBsaWtlIGxhbmRzY2FwZSB0YWJsZXRzIGFuZCBsYXB0b3BzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxufVxyXG5cclxuLyogRm9yIGRldmljZXMgd2l0aCB3aWR0aCBvZiAxMDI0cHggYW5kIG1vcmUqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5nZXQtaW4tdG91Y2gtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDUwcHg7XHJcbiAgfVxyXG4gIC5pbm5lci1nZXQtaW4tdG91Y2gge1xyXG4gICAgcGFkZGluZzogMTMwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2UgTGFwdG9wICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgLmdldC1pbi10b3VjaC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTUwcHggNTBweDtcclxuICB9XHJcblxyXG4gIC5pbm5lci1nZXQtaW4tdG91Y2gge1xyXG4gICAgcGFkZGluZzogNjBweCAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
    } }, styles: [".intro-container[_ngcontent-%COMP%]{\r\n    background-color: #75a7b2;\r\n    overflow: hidden;\r\n    \r\n    color: white;\r\n    margin: 0px;\r\n    \r\n    \r\n    height: 100vh;\r\n    max-height: 100vh;\r\n}\r\n\r\n.inner-intro[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    text-align: center;\r\n    width: 50%;\r\n    \r\n    padding: 120px 0px;\r\n    margin: 0px auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: #e7e7e7;\r\n    background-color: \t#2e5861;\r\n    list-style: none;\r\n    border-radius: 8px;\r\n    padding: 18px 25px;\r\n}\r\n\r\n\r\n\r\n.second_intro[_ngcontent-%COMP%]{\r\n    font-size: 75px;\r\n}\r\n\r\n.third_intro[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px)\r\n{\r\n    .intro-container[_ngcontent-%COMP%]{\r\n        padding: 80px 0px;\r\n    }\r\n    .inner-intro[_ngcontent-%COMP%]{\r\n        margin: 0px;\r\n        width: 100%;\r\n    }\r\n    .second_intro[_ngcontent-%COMP%]{\r\n        font-size: 45px;\r\n    }\r\n\r\n    .third_intro[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 481px)\r\n{\r\n    .intro-container[_ngcontent-%COMP%]{\r\n        padding: 10px 100px;\r\n    }\r\n    .inner-intro[_ngcontent-%COMP%]{\r\n        margin: 0px;\r\n        width: 100%;\r\n    }\r\n    .second_intro[_ngcontent-%COMP%]{\r\n        font-size: 45px;\r\n    }\r\n\r\n    .third_intro[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1280px)\r\n{\r\n    .intro-container[_ngcontent-%COMP%]{\r\n        padding: 180px 0px;\r\n    }\r\n    \r\n    .second_intro[_ngcontent-%COMP%]{\r\n        font-size: 75px;\r\n    }\r\n\r\n    .third_intro[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCOzt5QkFFcUI7SUFDckIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSDs7Ozs7O0dBTUc7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBOztHQUVHOztBQUVIO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsV0FBVzs7QUFDWDs7SUFFSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUEsV0FBVzs7QUFDWDs7SUFFSTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUEsV0FBVzs7QUFDWDs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyby1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVhN2IyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNhM2QzZGQ7ICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMTBlbTsgKi9cclxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTcwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTcwcHg7ICovXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5pbm5lci1pbnRyb3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvKiBwYWRkaW5nOiAxNTBweCAwcHg7ICovXHJcbiAgICBwYWRkaW5nOiAxMjBweCAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4vKiBzcGFue1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxufVxyXG5cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufSAqL1xyXG5cclxuLyogYXtcclxuICAgIGNvbG9yOiAjZTdlN2U3O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFx0IzJlNTg2MTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIHBhZGRpbmc6IDE4cHggMjVweDtcclxufSAqL1xyXG5cclxuYXtcclxuICAgIGNvbG9yOiAjZTdlN2U3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXHQjMmU1ODYxO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDE4cHggMjVweDtcclxufVxyXG4vKiAuZmlyc3RfaW50cm97XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0gKi9cclxuXHJcbi5zZWNvbmRfaW50cm97XHJcbiAgICBmb250LXNpemU6IDc1cHg7XHJcbn1cclxuXHJcbi50aGlyZF9pbnRyb3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaDN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKiBNb2JpbGUgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweClcclxue1xyXG4gICAgLmludHJvLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiA4MHB4IDBweDtcclxuICAgIH1cclxuICAgIC5pbm5lci1pbnRyb3tcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5zZWNvbmRfaW50cm97XHJcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aGlyZF9pbnRyb3tcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBUYWJsZXQgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweClcclxue1xyXG4gICAgLmludHJvLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmlubmVyLWludHJve1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNlY29uZF9pbnRyb3tcclxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoaXJkX2ludHJve1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qIExhcHRvcCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweClcclxue1xyXG4gICAgLmludHJvLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAxODBweCAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWNvbmRfaW50cm97XHJcbiAgICAgICAgZm9udC1zaXplOiA3NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aGlyZF9pbnRyb3tcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
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
    // innerHeight: any;
    constructor() {
        //   @HostListener('window:resize', ['$event'])
        // onResize(event) {
        //   this.innerHeight = window.innerHeight;
        // }
        this.faAutoprefixer = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAutoprefixer"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.navbarOpen = false;
    }
    ngOnInit() {
        // this.innerHeight = window.innerHeight;
    }
    // vh: any;
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    scroll(i) {
        this.toggleNavbar();
        document.getElementById(i).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    // getVh(height_in_px) {
    //   this.vh = innerHeight*0.01;
    //   return (height_in_px/ this.vh);
    // }
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
            // element.classList.remove('navbar-change');
            // element.classList.remove('fadeInUp');
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 19, vars: 4, consts: [["id", "navbar ", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top"], [1, "navbar-brand"], ["id", "logo", 3, "icon"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "click"], ["href", "/resume.pdf", "target", "blank", 1, "nav-link", "resume"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.scroll("experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() { return ctx.scroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
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
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 50px;\r\n  \r\n  \r\n  \r\n  \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: 50px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  border: rgba(255, 255, 255, 0.5) solid 1px;\r\n  border-radius: 4px;\r\n  max-width: 95px;\r\n  \r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding-left: 50px;\r\n  font-size: 28px;\r\n}\r\n\r\n@media only screen and (min-width: 576px) {\r\n  .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1280px) {\r\n  .collapse[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUVHOztBQUVILFVBQVU7O0FBRVY7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQjt5Q0FDdUM7RUFDdkMsZ0NBQWdDO0VBQ2hDOzBCQUN3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmOzs7c0JBR29CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucmVzdW1le1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG5bY2xhc3MqPWJ0bi1vdXRsaW5lLV0uYnRuLXNte1xyXG4gICAgcGFkZGluZzogMCU7XHJcbn0gKi9cclxuXHJcbi8qICp7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgIGNvbG9yOiAgI0VFRUVFRTtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiAjRUVFRUVFO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubWVudXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBwYWRkaW5nOiA3LjVweCAxMHB4IDcuNXB4IDA7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLml0ZW0uYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDlweCA1cHg7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyLCBhOmhvdmVyOjphZnRlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51IGxpIGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xyXG59XHJcblxyXG4udG9nZ2xle1xyXG4gICAgb3JkZXI6IDE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pdGVtXHJcbntcclxuICAgIG9yZGVyOiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlIC5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG4vKiAxMjoxOCAqL1xyXG5cclxuLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICAvKiBoZWlnaHQ6YXV0bzsgKi9cclxuICAvKiBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICB0cmFuc2l0aW9uOm1heC1oZWlnaHQgMC4zcyBlYXNlLW91dDsgKi9cclxuICAvKiB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDsgKi9cclxuICAvKiB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1cztcclxuICAgdHJhbnNpdGlvbi1kZWxheTogMnM7ICovXHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucmVzdW1lIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgc29saWQgMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXgtd2lkdGg6IDk1cHg7XHJcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgc29saWQgMXB4O1xyXG4gICAgbWF4LXdpZHRoOiA3NXB4OyAqL1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gIC5jb2xsYXBzZSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
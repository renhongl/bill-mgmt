(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\">\r\n  <app-card>\r\n    <div class=\"content\">\r\n      <img width=\"70px\" height=\"70px\" src=\"/gui/assets/images/bill.png\" alt=\"\">\r\n      <h4>材料</h4>\r\n      <p>用于管理账单</p>\r\n      <app-button width=\"70px\" height=\"25px\">\r\n        <div class=\"open\"><span>进入</span></div>\r\n      </app-button>\r\n    </div>\r\n  </app-card>\r\n  <app-card>\r\n    <div class=\"content\">\r\n      <img width=\"70px\" height=\"70px\" src=\"/gui/assets/images/campus.png\" alt=\"\">\r\n      <h4>学校</h4>\r\n      <p>用于管理学校，可以增加，修改，删除学校</p>\r\n      <app-button width=\"70px\" height=\"25px\" (handleClick)=\"onClick('/university')\">\r\n        <div class=\"open\"><span>进入</span></div>\r\n      </app-button>\r\n    </div>\r\n  </app-card>\r\n  <app-card>\r\n    <div class=\"content\">\r\n      <img width=\"70px\" height=\"70px\" src=\"/gui/assets/images/teacher.png\" alt=\"\">\r\n      <h4>老师</h4>\r\n      <p>用于管理老师，可以增加，修改，删除老师</p>\r\n      <app-button width=\"70px\" height=\"25px\" (handleClick)=\"onClick('/teacher')\">\r\n        <div class=\"open\"><span>进入</span></div>\r\n      </app-button>\r\n    </div>\r\n  </app-card>\r\n  <app-card>\r\n    <div class=\"content\">\r\n      <img width=\"70px\" height=\"70px\" src=\"/gui/assets/images/student.png\" alt=\"\">\r\n      <h4>学生</h4>\r\n      <p>用于管理学生，可以增加，修改，删除学生</p>\r\n      <app-button width=\"70px\" height=\"25px\" (handleClick)=\"onClick('/student')\">\r\n        <div class=\"open\"><span>进入</span></div>\r\n      </app-button>\r\n    </div>\r\n  </app-card>\r\n  <app-card>\r\n    <div class=\"content\">\r\n      <img width=\"70px\" height=\"70px\" src=\"/gui/assets/images/user.png\" alt=\"\">\r\n      <h4>账号</h4>\r\n      <p>用于管理账号</p>\r\n      <app-button width=\"70px\" height=\"25px\" (handleClick)=\"onClick('/account')\">\r\n        <div class=\"open\"><span>进入</span></div>\r\n      </app-button>\r\n    </div>\r\n  </app-card>\r\n  \r\n</div>\r\n  \r\n");

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (min-width: 992px) {\n  .dashboard {\n    width: 992px !important;\n    margin: 0 auto !important;\n  }\n  .dashboard app-card {\n    width: 28% !important;\n    height: 30% !important;\n  }\n  .dashboard::after {\n    content: \"\";\n    width: 28% !important;\n    height: 30%;\n  }\n}\n.dashboard {\n  width: 100%;\n  padding-top: 20px;\n  height: calc(100% - 50px);\n  overflow: auto;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.dashboard app-button {\n  font-size: 13px;\n}\n.dashboard app-card {\n  width: 100%;\n  height: 30%;\n  margin: 20px;\n  min-width: 200px;\n  min-height: 200px;\n}\n.dashboard::after {\n  content: \"\";\n  width: 100%;\n  height: 30%;\n  margin: 20px;\n  min-width: 200px;\n  min-height: 200px;\n}\n.dashboard .content {\n  width: 90%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: space-evenly;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  margin: 0 auto;\n}\n.dashboard .content h4 {\n  color: var(--primary);\n  font-weight: 700;\n  font-size: 1.2em;\n  letter-spacing: 2px;\n}\n.dashboard .content p {\n  color: var(--default);\n  font-size: 12px;\n}\n.dashboard .content > i {\n  font-size: 100px;\n}\n.dashboard .content .open {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvRTpcXHBvbWVsby13b3Jrc3BhY2VcXGJpbGwtbWdtdC1ndWkvc3JjXFxhcHBcXG1vZHVsZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EseUJBQUE7RUNERjtFREdFO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQ0RKO0VESUU7SUFDRSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0VDRko7QUFDRjtBRE9BO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFFQSxlQUFBO0FDTkY7QURRRTtFQUNFLGVBQUE7QUNOSjtBRFNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUU7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1JOO0FEV0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ1RKO0FEYUk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1hOO0FEY0k7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNaTjtBRGVJO0VBQ0UsZ0JBQUE7QUNiTjtBRGdCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0VBQ0EsV0FBQTtBQ2ROIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmRhc2hib2FyZCB7XHJcbiAgICB3aWR0aDogOTkycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgYXBwLWNhcmQge1xyXG4gICAgICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5kYXNoYm9hcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAvLyBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICBhcHAtYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgYXBwLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICB9XHJcblxyXG4gICY6OmFmdGVye1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcblxyXG5cclxuICAgIGg0IHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogdmFyKC0tZGVmYXVsdCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAmPmkge1xyXG4gICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5vcGVuIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5kYXNoYm9hcmQge1xuICAgIHdpZHRoOiA5OTJweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRhc2hib2FyZCBhcHAtY2FyZCB7XG4gICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRhc2hib2FyZDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzAlO1xuICB9XG59XG4uZGFzaGJvYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5kYXNoYm9hcmQgYXBwLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5kYXNoYm9hcmQgYXBwLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIG1hcmdpbjogMjBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG4uZGFzaGJvYXJkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgbWFyZ2luOiAyMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cbi5kYXNoYm9hcmQgLmNvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZGFzaGJvYXJkIC5jb250ZW50IGg0IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLmRhc2hib2FyZCAuY29udGVudCBwIHtcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQpO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZGFzaGJvYXJkIC5jb250ZW50ID4gaSB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG4uZGFzaGJvYXJkIC5jb250ZW50IC5vcGVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onClick(path) {
        this.router.navigate([path]);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_commonComps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/commonComps */ "./src/app/shared/commonComps.ts");






const DashboardRoutes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    }
];
let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(DashboardRoutes),
            _shared_commonComps__WEBPACK_IMPORTED_MODULE_5__["CommonCompsModule"],
        ],
        exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-module-es2015.js.map
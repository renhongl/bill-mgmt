(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-student-student-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/student.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/student.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesStudentStudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>student works!</p>\r\n";
    /***/
  },

  /***/
  "./src/app/modules/student/student.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/modules/student/student.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesStudentStudentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/student/student.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/student/student.component.ts ***!
    \******************************************************/

  /*! exports provided: StudentComponent */

  /***/
  function srcAppModulesStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let StudentComponent = class StudentComponent {
      constructor() {}

      ngOnInit() {}

    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/student/student.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student.component.scss */
      "./src/app/modules/student/student.component.scss")).default]
    })], StudentComponent);
    /***/
  },

  /***/
  "./src/app/modules/student/student.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/student/student.module.ts ***!
    \***************************************************/

  /*! exports provided: StudentModule */

  /***/
  function srcAppModulesStudentStudentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentModule", function () {
      return StudentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/modules/student/student.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    const StudentRoutes = [{
      path: '',
      component: _student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"]
    }];
    let StudentModule = class StudentModule {};
    StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(StudentRoutes)]
    })], StudentModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-student-student-module-es5.js.map
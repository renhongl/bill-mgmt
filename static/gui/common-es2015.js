(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/university/university.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/university/university.service.ts ***!
  \**********************************************************/
/*! exports provided: UniversityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityService", function() { return UniversityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/url */ "./src/app/utils/url.js");




let UniversityService = class UniversityService {
    constructor(http) {
        this.http = http;
    }
    updateUni(id, name, address) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            token: localStorage.getItem('bill-token'),
        });
        const options = {
            headers,
        };
        return this.http.put(_utils_url__WEBPACK_IMPORTED_MODULE_3__["default"].UNIVERSITY, {
            id,
            name,
            address,
        }, options);
    }
    createUni(name, address) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            token: localStorage.getItem('bill-token'),
        });
        const options = {
            headers,
        };
        return this.http.post(_utils_url__WEBPACK_IMPORTED_MODULE_3__["default"].UNIVERSITY, {
            name,
            address,
        }, options);
    }
    searchUni(index, total, searchWord, sortKey, asc) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            token: localStorage.getItem('bill-token'),
        });
        const options = {
            headers,
        };
        return this.http.post(_utils_url__WEBPACK_IMPORTED_MODULE_3__["default"].UNIVERSITY_SEARCH, {
            index,
            total,
            searchWord,
            sortKey,
            asc,
        }, options);
    }
    deleteUni(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            token: localStorage.getItem('bill-token'),
        });
        const options = {
            headers,
        };
        return this.http.delete(`${_utils_url__WEBPACK_IMPORTED_MODULE_3__["default"].UNIVERSITY}/${id}`, options);
    }
};
UniversityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UniversityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UniversityService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
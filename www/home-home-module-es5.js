(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title color=\"primary\">\r\n      Cara Employee\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col>\r\n      <div  style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\r\n        <img src=\"../../assets/imgs/CaraLogo.jpg\"/>                          \r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n<ion-row>\r\n  <ion-col>\r\n      <ion-card>\r\n          <ion-card-header>\r\n              <ion-card-title>\r\n                  Log in to Cara\r\n              </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"saveDetails(form.value)\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Email</ion-label>\r\n                <ion-input type=\"email\" [formControl]=\"form.controls['email']\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Password</ion-label>\r\n                <ion-input type=\"Password\" [formControl]=\"form.controls['pwd']\"></ion-input>\r\n              </ion-item> \r\n              <div margin-vertical text-right>\r\n                <ion-button fill=\"outline\" color=\"danger\" id=\"btn-cancel\">\r\n                    <ion-icon name=\"close\" slot=\"start\">\r\n                    </ion-icon>\r\n                    Clear\r\n                </ion-button>\r\n                <ion-button fill=\"outline\" color=\"success\" slot=\"start\" id=\"btn-ok\">\r\n                  <ion-icon name=\"add\">\r\n                  </ion-icon>\r\n                  Log in\r\n                </ion-button>\r\n              </div>              \r\n            </form>\r\n            <div *ngIf=\"form.controls['email'].dirty && !form.controls['email'].valid\">\r\n              <p style=\"color: red;\" *ngIf=\"form.controls['email'].errors.InvalidEmail\">Email Address is not valid.</p>\r\n            </div>\r\n            <div *ngIf=\"form.controls['pwd'].dirty && !form.controls['pwd'].valid\">\r\n              <p  style=\"color: red;\" *ngIf=\"form.controls['pwd'].errors.InvalidPwd\">Password should have one uppercase, one lowercase and a number.</p>\r\n            </div>            \r\n          </ion-card-content>\r\n      </ion-card>    \r\n  </ion-col>\r\n</ion-row>        \r\n<!---     <div class=\"vertical-center\">\r\n<div class=\"center\">\r\n    <ion-img src=\"resources/CaraLogo.jpg\" class=\"ion-align-self-end\" href=\"#\" onclick=\"showMessage()\"/>\r\n</div>           \r\n</div>    -->  \r\n <!--<ion-alert-controller></ion-alert-controller>-->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _provider_validator_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../provider/validator-helper */
    "./src/provider/validator-helper.ts");

    let HomePage = class HomePage {
      constructor(fb, val) {
        this.fb = fb;
        this.val = val;
        this.form = this.fb.group({
          pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.val.pwdValid],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.val.emailValid]
        });
        const email = this.form.controls.email;
        email.valueChanges.subscribe(value => {
          console.log("Entered name is ".concat(value));
        });
      }

      saveDetails(value) {
        console.dir(value);
      }

    };

    HomePage.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _provider_validator_helper__WEBPACK_IMPORTED_MODULE_3__["Validator"]
    }];

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _provider_validator_helper__WEBPACK_IMPORTED_MODULE_3__["Validator"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map
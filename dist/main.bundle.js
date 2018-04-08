webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_landing_landing_component__ = __webpack_require__("./src/app/core/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_about_about_component__ = __webpack_require__("./src/app/core/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_about_about_edit_about_edit_component__ = __webpack_require__("./src/app/core/about/about-edit/about-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_home_home_component__ = __webpack_require__("./src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_albums_albums_component__ = __webpack_require__("./src/app/core/albums/albums.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_posts_post_edit_post_edit_component__ = __webpack_require__("./src/app/core/posts/post-edit/post-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_albums_albums_edit_albums_edit_component__ = __webpack_require__("./src/app/core/albums/albums-edit/albums-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__documents_documents_edit_documents_edit_component__ = __webpack_require__("./src/app/documents/documents-edit/documents-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_auth_signin_signin_component__ = __webpack_require__("./src/app/core/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_auth_auth_guard_service__ = __webpack_require__("./src/app/core/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__core_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__core_home_home_component__["a" /* HomeComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_10__core_auth_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_7__core_posts_post_edit_post_edit_component__["a" /* PostEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__core_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__core_about_about_component__["a" /* AboutComponent */] },
    { path: 'about/edit', component: __WEBPACK_IMPORTED_MODULE_4__core_about_about_edit_about_edit_component__["a" /* AboutEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__core_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'albums', component: __WEBPACK_IMPORTED_MODULE_6__core_albums_albums_component__["a" /* AlbumsComponent */] },
    { path: 'albums/new', component: __WEBPACK_IMPORTED_MODULE_8__core_albums_albums_edit_albums_edit_component__["a" /* AlbumsEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__core_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'albums/:_id/edit', component: __WEBPACK_IMPORTED_MODULE_8__core_albums_albums_edit_albums_edit_component__["a" /* AlbumsEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__core_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'documents/new', component: __WEBPACK_IMPORTED_MODULE_9__documents_documents_edit_documents_edit_component__["a" /* DocumentsEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__core_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'documents/:_id/edit', component: __WEBPACK_IMPORTED_MODULE_9__documents_documents_edit_documents_edit_component__["a" /* DocumentsEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__core_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: ':_id/edit', component: __WEBPACK_IMPORTED_MODULE_7__core_posts_post_edit_post_edit_component__["a" /* PostEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__core_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__core_home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */] })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\n    max-width: 100%;\n}\n\n\n@media screen and (max-width: 1200px) {\n    .row div:first-child {\n        -webkit-box-ordinal-group: 1;\n            -ms-flex-order: 0;\n                order: 0;\n        -webkit-order: 0;\n    }\n    .row div:nth-child(2) {\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2;\n        -webkit-order: 2;\n    }\n    .row div:nth-child(3) {\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1;\n        -webkit-order: 1;\n    }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 w-100\">\n    <section class=\"col-xl-12\">\n        <app-navbar></app-navbar>\n    </section>\n    <section class=\"col-xl-12 p-0\">\n        <div class=\"row m-0\">\n            <div class=\"col-xl-2 ml-0 mr-auto p-0 animateMenu\" [class.showMenu]=\"menuState\" [class.hideMenu]=\"!menuState\">\n                <ng-template [ngIf]=\"animateMenu && authService.isAuthenticated()\">   \n                    <app-user></app-user>\n                </ng-template> \n            </div>\n            <div class=\"col-xl-8 p-0 mx-auto\">\n                <router-outlet></router-outlet>\n            </div>\n            <div class=\"col-xl-2 mr-0 p-0 ml-auto animateMenu docs\" [class.showMenu]=\"documentState\" [class.hideMenu]=\"!documentState\">\n                <ng-template [ngIf]=\"animateDocument\">   \n                    <app-documents></app-documents>\n                </ng-template> \n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_visibility_service__ = __webpack_require__("./src/app/component-visibility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_auth_service__ = __webpack_require__("./src/app/core/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(componentVisibilityService, authService) {
        this.componentVisibilityService = componentVisibilityService;
        this.authService = authService;
        this.title = 'app';
        this.documentState = false;
        this.menuState = false;
        this.animateMenu = false;
        this.animateDocument = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.componentVisibilityService.currentStateOfDocument.subscribe(function (documentState) { return _this.documentState = documentState; });
        this.componentVisibilityService.currentStateOfMenu.subscribe(function (menuState) { return _this.menuState = menuState; });
        this.componentVisibilityService.currentAnimateDocument.subscribe(function (documentState) { return _this.animateDocument = documentState; });
        this.componentVisibilityService.currentAnimateMenu.subscribe(function (menuState) { return _this.animateMenu = menuState; });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__component_visibility_service__["a" /* ComponentVisibilityService */], __WEBPACK_IMPORTED_MODULE_2__core_auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__documents_documents_component__ = __webpack_require__("./src/app/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__documents_documents_edit_documents_edit_component__ = __webpack_require__("./src/app/documents/documents-edit/documents-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_posts_post_post_service__ = __webpack_require__("./src/app/core/posts/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_about_about_service__ = __webpack_require__("./src/app/core/about/about.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_auth_auth_service__ = __webpack_require__("./src/app/core/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_albums_albums_service__ = __webpack_require__("./src/app/core/albums/albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__documents_document_service__ = __webpack_require__("./src/app/documents/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_visibility_service__ = __webpack_require__("./src/app/component-visibility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_auth_auth_guard_service__ = __webpack_require__("./src/app/core/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_quill_src_quill_module__ = __webpack_require__("./node_modules/ngx-quill/src/quill.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/esm5/angular-confirmation-popover.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { NgbModule }                from '@ng-bootstrap/ng-bootstrap';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__documents_documents_component__["a" /* DocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__documents_documents_edit_documents_edit_component__["a" /* DocumentsEditComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_quill_src_quill_module__["a" /* QuillModule */],
                // NgbModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_21_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({
                    confirmButtonType: 'danger'
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__core_posts_post_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_16__core_albums_albums_service__["a" /* AlbumsService */],
                __WEBPACK_IMPORTED_MODULE_17__documents_document_service__["a" /* DocumentService */],
                __WEBPACK_IMPORTED_MODULE_15__core_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__core_about_about_service__["a" /* AboutService */],
                __WEBPACK_IMPORTED_MODULE_18__component_visibility_service__["a" /* ComponentVisibilityService */],
                __WEBPACK_IMPORTED_MODULE_19__core_auth_auth_guard_service__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component-visibility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentVisibilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentVisibilityService = /** @class */ (function () {
    function ComponentVisibilityService() {
        this.documentClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.menuClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.animateDocument = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.animateMenu = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.currentStateOfDocument = this.documentClicked.asObservable();
        this.currentStateOfMenu = this.menuClicked.asObservable();
        this.currentAnimateDocument = this.animateDocument.asObservable();
        this.currentAnimateMenu = this.animateMenu.asObservable();
    }
    ComponentVisibilityService.prototype.changeDocumentState = function (documentState) {
        this.documentClicked.next(documentState);
    };
    ComponentVisibilityService.prototype.changeMenuState = function (menuState) {
        this.menuClicked.next(menuState);
    };
    ComponentVisibilityService.prototype.onAnimateDocument = function (documentState) {
        var _this = this;
        if (!documentState) {
            setTimeout(function () { return _this.animateDocument.next(documentState); }, 630);
        }
        else {
            this.animateDocument.next(documentState);
        }
    };
    ComponentVisibilityService.prototype.onAnimateMenu = function (menuState) {
        var _this = this;
        if (!menuState) {
            setTimeout(function () { return _this.animateMenu.next(menuState); }, 630);
        }
        else {
            this.animateMenu.next(menuState);
        }
    };
    ComponentVisibilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ComponentVisibilityService);
    return ComponentVisibilityService;
}());



/***/ }),

/***/ "./src/app/core/about/about-edit/about-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/about/about-edit/about-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" m-0 p-0\">\n    <form class=\"m-0 p-3\" [formGroup]=\"aboutForm\" (ngSubmit)=\"onSubmit()\">\n    <h1>Edytuj Powitanie:</h1>\n        <div class=\"form-group\">\n            <label for=\"img\">Adres do zdjęcia:</label>\n            <input class=\"form-control\" type=\"text\" name=\"img\" formControlName=\"img\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"content\">Tekst powitania:</label>\n            <quill-editor name=\"content\" formControlName=\"content\">\n                <div quill-editor-toolbar>\n                    <span class=\"ql-formats\">\n                        <button type=\"button\" class=\"ql-bold\" [title]=\"'Pogrubienie'\"></button>\n                        <button type=\"button\" class=\"ql-italic\" [title]=\"'Pochylenie'\"></button>\n                        <button type=\"button\" class=\"ql-underline\" [title]=\"'Podkreślenie'\"></button>\n                        <button type=\"button\" class=\"ql-strike\" [title]=\"'Przekreślenie'\"></button>\n                    </span>\n                      \n                    <span class=\"ql-formats\" >\n                      <select class=\"ql-size\" [title]=\"'Wielkość Czcionki'\">\n                        <option value=\"small\"></option>\n                        <option selected [value]=\"false\"></option>\n                        <option value=\"large\"></option>\n                        <option value=\"huge\"></option>\n                      </select>\n                      \n                      <select class=\"ql-header\" [title]=\"'Nagłówek'\">\n                        <option [value]=\"1\"></option>\n                        <option [value]=\"2\"></option>\n                        <option [value]=\"3\"></option>\n                        <option [value]=\"4\"></option>\n                        <option [value]=\"5\"></option>\n                        <option [value]=\"6\"></option>\n                        <option selected [value]=\"false\"></option>\n                      </select>\n                    </span>\n                    <span class=\"ql-formats\">\n                        <span class=\"ql-color ql-picker ql-color-picker\" [title]=\"'Kolor Czcionki'\">\n                            <span class=\"ql-picker-label\"></span>\n                            <span class=\"ql-picker-options\"></span>\n                        </span>\n                        <span class=\"ql-background ql-picker ql-color-picker\" [title]=\"'Kolor Tła'\">\n                            <span class=\"ql-picker-label\"></span>\n                            <span class=\"ql-picker-options\"></span>\n                        </span>\n                    </span>\n                    <span class=\"ql-formats\">\n                        <button type=\"button\" class=\"ql-link\" [title]=\"'Odnośnik'\"></button>    \n                    </span> \n                    \n                </div>\n            </quill-editor>\n        </div>\n        <div class=\"form-group row m-2 d-flex justify-content-between\">\n            <button class=\"btn btn-warning col-md-2 mb-4\" (click)=\"onCancel()\" type=\"button\">Anuluj</button>\n            <button class=\"btn btn-success col-md-2 mb-4\" type=\"submit\" [disabled]=\"aboutForm.invalid\">Zatwierdź</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/core/about/about-edit/about-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_model__ = __webpack_require__("./src/app/core/about/about.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_service__ = __webpack_require__("./src/app/core/about/about.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__("./node_modules/quill/dist/quill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Add fonts to whitelist
var Font = __WEBPACK_IMPORTED_MODULE_6_quill___default.a.import('formats/font');
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['mirza', 'aref', 'sans-serif', 'monospace', 'serif'];
__WEBPACK_IMPORTED_MODULE_6_quill___default.a.register(Font, true);
var AboutEditComponent = /** @class */ (function () {
    function AboutEditComponent(aboutService, router, _location) {
        this.aboutService = aboutService;
        this.router = router;
        this._location = _location;
    }
    AboutEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionAbout = this.aboutService.aboutsChanged
            .subscribe(function (abouts) {
            _this.abouts = abouts;
        });
        this.initForm();
    };
    AboutEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptionAbout.unsubscribe();
    };
    AboutEditComponent.prototype.onSubmit = function () {
        var newAbout = new __WEBPACK_IMPORTED_MODULE_4__about_model__["a" /* About */](this.aboutForm.value['img'], this.aboutForm.value['content']);
        this.aboutService.updateAbout(newAbout);
        this.router.navigate(['/about']);
    };
    AboutEditComponent.prototype.initForm = function () {
        this.abouts = this.aboutService.getAbouts();
        console.log(this.abouts[0]);
        var aboutImg = this.abouts[0].img;
        var aboutContent = this.abouts[0].content;
        this.aboutForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'img': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](aboutImg, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'content': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](aboutContent, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
    };
    AboutEditComponent.prototype.onCancel = function () {
        this._location.back();
    };
    AboutEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-edit',
            template: __webpack_require__("./src/app/core/about/about-edit/about-edit.component.html"),
            styles: [__webpack_require__("./src/app/core/about/about-edit/about-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__about_service__["a" /* AboutService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], AboutEditComponent);
    return AboutEditComponent;
}());



/***/ }),

/***/ "./src/app/core/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n    padding-top: calc(226/ 416 *100%);\n}\ndiv {\n    text-align: justify !important;\n}"

/***/ }),

/***/ "./src/app/core/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" m-0 p-0\">    \n    <section class=\"about m-0 row justify-content-between  border border-light \" *ngFor=\"let about of abouts\">\n        <div class=\"col-xl-3  col-lg-12 justify-content-center\">\n         <img class=\"img-thumbnail my-2 p-0 border border-dark d-inline-block\" [src]=\"about.img\"/>    \n        </div>\n    \n     <div class=\"col-xl-9 col-lg-12 d-inline-block my-2\" [innerHTML]=\"about.content | sanitizeHtml\"></div>\n    </section>\n    \n</div>"

/***/ }),

/***/ "./src/app/core/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_service__ = __webpack_require__("./src/app/core/about/about.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(aboutService) {
        this.aboutService = aboutService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.aboutService.aboutsChanged
            .subscribe(function (abouts) {
            _this.abouts = abouts;
        });
        this.abouts = this.aboutService.getAbouts();
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/core/about/about.component.html"),
            styles: [__webpack_require__("./src/app/core/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__about_service__["a" /* AboutService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/core/about/about.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
var About = /** @class */ (function () {
    function About(img, content) {
        this.img = img;
        this.content = content;
    }
    return About;
}());



/***/ }),

/***/ "./src/app/core/about/about.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutService = /** @class */ (function () {
    function AboutService(httpClient) {
        this.httpClient = httpClient;
        this.aboutsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.aboutChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    AboutService.prototype.getAbouts = function () {
        var _this = this;
        this.httpClient.get('/api/about', {
            observe: 'body',
            responseType: 'json'
        })
            .subscribe(function (abouts) {
            console.log(abouts);
            _this.setAbouts(abouts);
        });
        return this.abouts;
    };
    AboutService.prototype.setAbouts = function (abouts) {
        this.abouts = abouts;
        this.aboutsChanged.next(this.abouts.slice());
    };
    AboutService.prototype.setAbout = function (about) {
        this.about = about;
        // this.aboutChanged.next(this.about);
    };
    AboutService.prototype.getAbout = function () {
        // this.httpClient.get<About>('/api/about/5a8b094a3e37b032e04aaa3a', {
        //   observe: 'body',
        //   responseType: 'json'
        // })
        // .subscribe(
        //   (about) => {
        //       this.setAbout(about);
        //     }
        //   );
        //       console.log(this.about);
        return this.abouts[0];
    };
    AboutService.prototype.updateAbout = function (newAbout) {
        this.httpClient.put('/api/about/5a8b094a3e37b032e04aaa3a', newAbout)
            .subscribe();
        // this.aboutChanged.next(this.about.slice())
    };
    AboutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AboutService);
    return AboutService;
}());



/***/ }),

/***/ "./src/app/core/albums/albums-edit/albums-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/albums/albums-edit/albums-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" m-0 p-0\">\n    <form class=\"m-0 p-3\" [formGroup]=\"albumForm\" (ngSubmit)=\"onSubmit()\">\n    <h1 *ngIf=\"editMode; else createBlock\">Edytuj: {{album.caption}}</h1>\n    <ng-template #createBlock><h1>Stwórz album:</h1></ng-template>\n        <div class=\"form-group\">\n            <label for=\"caption\">Podpis:</label>\n            <input class=\"form-control\" type=\"text\" name=\"caption\" formControlName=\"caption\"/>\n        </div>\n         <div\n          class=\"alert alert-danger\" *ngIf=\"albumForm.get('caption').hasError('required') && albumForm.get('caption').touched\">\n          Brak podpisu.\n        </div>\n        <div class=\"form-group\">\n            <label for=\"url\">Adres internetowy do albumu:</label>\n            <input class=\"form-control\" type=\"text\" name=\"url\" formControlName=\"url\"/>\n        </div>\n         <div\n          class=\"alert alert-danger\" *ngIf=\"albumForm.get('url').hasError('required') && albumForm.get('url').touched\">\n          Brak adresu internetowego.\n        </div>\n        <div class=\"form-group\">\n            <label for=\"img\">Adres do zdjęcia:</label>\n            <input class=\"form-control\" type=\"text\" name=\"img\" formControlName=\"img\"/>\n        </div>\n         <div\n          class=\"alert alert-danger\" *ngIf=\"albumForm.get('img').hasError('required') && albumForm.get('img').touched\">\n          Brak zdjęcia.\n        </div>\n        <div class=\"form-group row m-2 d-flex justify-content-between\">\n            <button\n              class=\"btn btn-danger  col-md-2 mb-4\"\n              mwlConfirmationPopover\n              [popoverTitle]=\"popoverTitle\"\n            [popoverMessage]=\"popoverMessage\"\n            [confirmText]=\"confirmText\"\n            [cancelText]=\"cancelText\"\n            [placement]=\"placement\"\n            (confirm)=\"confirmClicked = true;  onDeleteAlbum()\"\n            (cancel)=\"cancelClicked = true\"\n            confirmButtonType=\"danger\"\n            cancelButtonType=\"default\"\n            (click)=\"confirmClicked = false; cancelClicked = false;\"\n            [appendToBody]=\"true\"\n            *ngIf=\"editMode\">\n              Usuń\n            </button>\n            <button class=\"btn btn-warning col-md-2 mb-4\" (click)=\"onCancel()\" type=\"button\">Anuluj</button>\n            <button class=\"btn btn-success col-md-2 mb-4\" type=\"submit\" [disabled]=\"albumForm.invalid\">Zatwierdź</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/core/albums/albums-edit/albums-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__albums_model__ = __webpack_require__("./src/app/core/albums/albums.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albums_service__ = __webpack_require__("./src/app/core/albums/albums.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumsEditComponent = /** @class */ (function () {
    function AlbumsEditComponent(route, router, albumsService, _location) {
        this.route = route;
        this.router = router;
        this.albumsService = albumsService;
        this._location = _location;
        this.editMode = false;
        this.placements = ['top', 'left', 'right', 'bottom'];
        this.popoverTitle = 'Czy jesteś pewny?';
        this.popoverMessage = 'Ale tak na 100% pewien?';
        this.confirmText = 'Tak';
        this.cancelText = 'Nie';
        this.confirmClicked = false;
        this.cancelClicked = false;
    }
    AlbumsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribeQueryParams = this.route.queryParams.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.subscribeParams = this.route.params
            .subscribe(function (params) {
            _this._id = params['_id'];
            _this.editMode = params['_id'] != null;
            _this.initForm();
        });
    };
    AlbumsEditComponent.prototype.onSubmit = function () {
        var newAlbum = new __WEBPACK_IMPORTED_MODULE_4__albums_model__["a" /* Album */](this.albumForm.value['img'], this.albumForm.value['url'], this.albumForm.value['caption']);
        if (this.editMode) {
            console.log(this._id, newAlbum);
            this.albumsService.updateAlbum(newAlbum, this._id);
        }
        else {
            console.log(newAlbum);
            this.albumsService.createAlbum(newAlbum);
        }
        this.router.navigate(['/albums']);
    };
    AlbumsEditComponent.prototype.initForm = function () {
        var albumImg = '';
        var albumUrl = '';
        var albumCaption = '';
        if (this.editMode) {
            console.log(this.id);
            this.album = this.albumsService.getAlbum(this.id);
            albumImg = this.album.img;
            albumUrl = this.album.url;
            albumCaption = this.album.caption;
        }
        this.albumForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'img': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](albumImg, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'url': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](albumUrl, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'caption': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](albumCaption, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        });
    };
    AlbumsEditComponent.prototype.onCancel = function () {
        this._location.back();
    };
    AlbumsEditComponent.prototype.onDeleteAlbum = function () {
        this._id = this.albumsService.getId(this.id);
        this.albumsService.deleteAlbum(this.id, this._id);
        this.albumsService.getAlbums();
        this.onCancel();
    };
    AlbumsEditComponent.prototype.ngOnDestroy = function () {
        this.subscribeParams.unsubscribe();
        this.subscribeQueryParams.unsubscribe();
    };
    AlbumsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-albums-edit',
            template: __webpack_require__("./src/app/core/albums/albums-edit/albums-edit.component.html"),
            styles: [__webpack_require__("./src/app/core/albums/albums-edit/albums-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__albums_service__["a" /* AlbumsService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], AlbumsEditComponent);
    return AlbumsEditComponent;
}());



/***/ }),

/***/ "./src/app/core/albums/albums.component.css":
/***/ (function(module, exports) {

module.exports = "/*.albums {*/\n/*\tmargin: 0 auto;*/\n/*\twidth: 66%;*/\n/*\tbackground-color: #f2f2f2;*/\n/*\tpadding: 0 15px;*/\n/*\topacity: 0.98;*/\n/*\tdisplay: flex;*/\n/*\tflex-direction: row;*/\n/*\tflex-wrap: wrap;*/\n/*\tjustify-content: center;*/\n/*\theight: auto;*/\n/*\tmargin-top: 200px;*/\n/*}*/\n/*.albums div {*/\n/*\tmargin: 1.5%;*/\n/*\theight: 100%;*/\n/*}*/\n/*.album-container img {*/\n/*\twidth: 100%;*/\n/*\tmin-width: 100px;*/\n/*\tmax-height: 300px;*/\n/*\tmax-width: 400px;*/\n/*}*/\n/*.album-container:hover a img {*/\n/*\tflex-grow: 2;*/\n/*\tmax-width: 640px;*/\n/*\tmax-height: 480px;*/\n/*}*/\n/*.album-container {*/\n/*    position: relative;*/\n/*    text-align: center;*/\n/*    */\n/*}*/\n/*.album-container:hover a div {*/\n/*}*/\n/*.album-container a div {*/\n/*}*/"

/***/ }),

/***/ "./src/app/core/albums/albums.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" m-0 p-0\">\n    <div class=\"about m-0 px-2\">\n        <div class=\"row justify-content-between\">\n            <h4 class=\"my-4 text-center text-lg-left col-xl-4\">Galeria Albumów</h4>\n            <ng-template [ngIf]=\"authService.isAuthenticated()\">\n                <div class=\"col-xl-3 my-4\">\n                    <a class=\"btn btn-success w-100\" routerLink=\"/albums/new\">Nowy Album</a>\n                </div>\n            </ng-template>\n        </div>\n        <hr>\n        <div class=\"row p-2 justify-content-around\">\n            <div class=\"col-md-6 col-xs-12\" *ngFor=\"let album of albums; let i = index\">\n                <div class=\"responsive-imgs p-0 m-0\">\n                    <a  [href]=\"album.url\">\n                        <img class=\"d-block mb-4 img-fluid\" [src]=\"album.img\" [alt]=\"album.caption\"/>\n                        <span>{{album.caption}}</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/albums/albums.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albums_service__ = __webpack_require__("./src/app/core/albums/albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/core/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(albumsService, authService) {
        this.albumsService = albumsService;
        this.authService = authService;
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.albumsService.albumsChanged
            .subscribe(function (albums) {
            _this.albums = albums;
        });
        this.albums = this.albumsService.getAlbums();
    };
    AlbumsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlbumsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-albums',
            template: __webpack_require__("./src/app/core/albums/albums.component.html"),
            styles: [__webpack_require__("./src/app/core/albums/albums.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__albums_service__["a" /* AlbumsService */], __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "./src/app/core/albums/albums.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
var Album = /** @class */ (function () {
    function Album(img, url, caption) {
        this.img = img;
        this.url = url;
        this.caption = caption;
    }
    return Album;
}());



/***/ }),

/***/ "./src/app/core/albums/albums.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlbumsService = /** @class */ (function () {
    function AlbumsService(httpClient) {
        this.httpClient = httpClient;
        this.albumsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    AlbumsService.prototype.getAlbums = function () {
        var _this = this;
        this.httpClient.get('/api/albums', {
            observe: 'body',
            responseType: 'json'
        })
            .subscribe(function (albums) {
            _this.setAlbums(albums.reverse());
        });
        return this.albums;
    };
    AlbumsService.prototype.setAlbums = function (albums) {
        this.albums = albums;
        this.albumsChanged.next(this.albums.slice());
    };
    AlbumsService.prototype.getAlbum = function (id) {
        return this.albums[id];
    };
    AlbumsService.prototype.createAlbum = function (album) {
        var _this = this;
        this.httpClient.post('/api/albums', album)
            .subscribe(function (album) {
            _this.albums.splice(0, 0, album);
            _this.albumsChanged.next(_this.albums.slice());
        });
    };
    AlbumsService.prototype.updateAlbum = function (newAlbum, _id) {
        this.httpClient.put('/api/albums/' + _id, newAlbum)
            .subscribe();
        this.albumsChanged.next(this.albums.slice());
    };
    AlbumsService.prototype.deleteAlbum = function (index, _id) {
        this.httpClient.delete('/api/albums/' + _id)
            .subscribe();
        this.albumsChanged.next(this.albums.slice());
    };
    AlbumsService.prototype.getId = function (id) {
        return this.albums[id]._id;
    };
    AlbumsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AlbumsService);
    return AlbumsService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/core/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        body.set("username", username);
        body.set("password", password);
        return this.http.post('/api/users/login', body)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log(response);
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/auth/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" m-0 p-0\">\n    <form class=\"m-0 p-3\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"signinForm\">\n        <div\n          class=\"alert alert-danger\" \n          *ngIf=\"!success\">\n          Błędne dane logowania.\n        </div>\n        \n        <h1>Logowanie</h1>\n        <div class=\"form-group\">\n            <label for=\"usernameForm\">Nazwa Użytkownika:</label>\n            <input class=\"form-control\" type=\"text\" name=\"usernameForm\" formControlName=\"usernameForm\"/>\n        </div>\n         <div\n          class=\"alert alert-danger\" \n          *ngIf=\"signinForm.get('usernameForm').hasError('required') && signinForm.get('usernameForm').touched\">\n          Brak nazwy użytkownika.\n        </div>\n        <div class=\"form-group\">\n            <label for=\"passwordForm\">Hasło:</label>\n            <input class=\"form-control\" type=\"password\" name=\"passwordForm\" formControlName=\"passwordForm\"/>\n        </div>\n        <div\n          class=\"alert alert-danger\" \n          *ngIf=\"signinForm.get('passwordForm').hasError('required') && signinForm.get('passwordForm').touched\">\n          Brak hasła.\n        </div>\n\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"signinForm.invalid\">Zaloguj się</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/core/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/core/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.success = true;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var username = this.signinForm.value['usernameForm'];
        var password = this.signinForm.value['passwordForm'];
        this.authService.login(username, password)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.success = result;
                _this.router.navigate(['/home']);
            }
            else {
                // login failed
                _this.success = result;
            }
        });
    };
    SigninComponent.prototype.initForm = function () {
        var usernameForm = '';
        var passwordForm = '';
        this.signinForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'usernameForm': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](usernameForm, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'passwordForm': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](passwordForm, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        });
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/core/auth/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/core/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__ = __webpack_require__("./src/app/core/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("./src/app/core/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__albums_albums_component__ = __webpack_require__("./src/app/core/albums/albums.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__posts_posts_component__ = __webpack_require__("./src/app/core/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__posts_post_post_component__ = __webpack_require__("./src/app/core/posts/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__posts_post_edit_post_edit_component__ = __webpack_require__("./src/app/core/posts/post-edit/post-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__albums_albums_edit_albums_edit_component__ = __webpack_require__("./src/app/core/albums/albums-edit/albums-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_signin_signin_component__ = __webpack_require__("./src/app/core/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_edit_about_edit_component__ = __webpack_require__("./src/app/core/about/about-edit/about-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_quill_src_quill_module__ = __webpack_require__("./node_modules/ngx-quill/src/quill.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_sanitize_html_pipe__ = __webpack_require__("./src/app/pipes/sanitize-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/esm5/angular-confirmation-popover.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import {NgbModule}          from '@ng-bootstrap/ng-bootstrap';












var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__about_about_edit_about_edit_component__["a" /* AboutEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__albums_albums_component__["a" /* AlbumsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__albums_albums_edit_albums_edit_component__["a" /* AlbumsEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__posts_post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_13__posts_post_edit_post_edit_component__["a" /* PostEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__auth_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_sanitize_html_pipe__["a" /* SanitizeHtmlPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_quill_src_quill_module__["a" /* QuillModule */],
                // NgbModule,
                __WEBPACK_IMPORTED_MODULE_19_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\" m-0 p-0\">\n\t<section class=\"contact row m-0 p-2 border-bottom-0 border-light text-center\">\n\t\t<h1 class=\"col-lg-12\">Radomski Ośrodek Łyżwiastwa Alternatywnego</h1>\n\t\t<h3 class=\"col-lg-12\">Dane Kontaktowe:</h3>\n\t\t<section class=\"row w-100\">\n\t\t\t<h4 class=\"col-lg-3 col-md-6\">Telefon:</h4>\n\t\t\t<h4 class=\"col-lg-3 col-md-6\">606-888-960</h4>\n\t\t\t<h4 class=\"col-lg-3 col-md-6\">E-mail:</h4>\n\t\t\t<h4 class=\"col-lg-3 col-md-6\">rola@rola.radom.pl</h4>\n\t\t</section>\n\t</section>\n\t\n\t<app-posts></app-posts>\n\t\n\t<footer class=\"p-5 text-center\">\n\t\t<h4>Projekt zrobiony przez Marcina Dobrzańskiego</h4>\n\t</footer>\n</section>\n\n"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/core/home/home.component.html"),
            styles: [__webpack_require__("./src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/landing/landing.component.css":
/***/ (function(module, exports) {

module.exports = "\ndiv {\n    height: 83.35vh!important;\n    \n    z-index:2;\n}\na {\n    margin: 0 auto;\n    max-width: 600px;\n    width: 100%;\n}\n.svg-logo {\n    position:fixed;\n    top:12.5%;\n    width: 800px;\n    height: 600px;\n}\n@media screen and (max-width: 799px) {\n    a {\n        max-width: 300px;\n    }\n    .svg-logo {\n        width: 400px;\n    }\n}\n@-webkit-keyframes draw {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes draw {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/core/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n    <a routerLink=\"/home\" class=\" align-middle\">\n       <span class=\"svg-logo mx-auto\" [innerHTML]=\"svg\"></span>\n    </a>\n</div>\n"

/***/ }),

/***/ "./src/app/core/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    //   svg2: SafeHtml = '';
    function LandingComponent(sanitizer, cdRef) {
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.width = "600";
        this.svg = '';
    }
    LandingComponent.prototype.ngAfterViewInit = function () {
        this.svg = this.sanitizer.bypassSecurityTrustHtml("<svg version=\"1\" \n       xmlns=\"http://www.w3.org/2000/svg\" \n       class=\"svg-logo\"\n       viewBox=\"0 0 300 200\" \n       \n       ><path d=\"M20.013 132.33c-8.924-2.333-16.493-9.844-18.754-18.607-.877-3.4-.885-10-.016-13.346 2.518-9.703 9.988-16.81 20.012-19.04 8.804-1.959 18.944 1.38 24.918 8.207 2.4 2.742 5.103 7.918 5.779 11.066.28 1.306.622 2.861.759 3.455.181.789.4.211.813-2.141 2.421-13.822 16.158-23.155 30.323-20.601 9.105 1.641 16.557 8.03 19.853 17.022 1.427 3.894 1.792 10.338.818 14.468-2.665 11.304-12.236 19.363-23.81 20.05-7.725.458-14.535-2.078-19.894-7.41-4.237-4.215-7.481-10.778-7.567-15.311-.038-1.991-.537-.863-1.203 2.721-1.626 8.744-10.068 17.347-19.115 19.48-3.449.813-9.78.806-12.915-.014zm12.329-2.14c8.798-2.245 15.601-9.151 17.673-17.94 2.291-9.72-1.946-19.862-10.65-25.487-7.571-4.894-17.737-4.896-25.304-.004-13.139 8.493-15.123 26.007-4.19 36.996 5.979 6.01 14.539 8.461 22.472 6.436zm2.236-8.195c-1.137-.312-3.538-1.267-5.337-2.121-1.798-.854-3.42-1.553-3.606-1.553-.184 0-.558.885-.83 1.966l-.495 1.966-4.434-.26-.985-5.832c-.813-4.812-3.333-17.036-4.337-21.034l-.25-.996h7.721c8.65 0 9.494.223 12.82 3.39 2.317 2.207 3.311 4.33 3.311 7.075 0 3.473-1.032 5.007-4.586 6.814-1.635.831-3.06 1.567-3.168 1.634-.106.067 1.789 2.111 4.212 4.543 2.424 2.432 4.406 4.563 4.406 4.738 0 .47-2.1.315-4.442-.33zm-2.237-14.229c.585-.383 1.064-1.064 1.064-1.512 0-1.2-2.482-3.126-3.825-2.968-.981.116-1.17.423-1.605 2.605-.272 1.361-.376 2.594-.232 2.74.439.446 3.468-.124 4.599-.865zm52.881 22.445c8.822-2.347 15.618-9.56 17.513-18.586.8-3.805.799-5.705-.002-9.503-1.002-4.752-2.915-8.178-6.653-11.916-9.802-9.802-24.007-9.802-33.75 0-6.434 6.474-8.628 14.746-6.19 23.346 2.134 7.526 8.201 13.779 15.738 16.219 3.815 1.235 9.64 1.427 13.345.441zm-8.506-8.41c-3.465-.855-6.19-4.388-8.35-10.824-1.814-5.405-2.09-8.714-.94-11.312 1.648-3.726 5.49-5.645 11.336-5.663 4.096-.012 6.989.95 9.218 3.067 1.928 1.832 2.445 3.218 2.445 6.557 0 5.885-4.157 14.926-7.93 17.244-1.668 1.026-3.925 1.39-5.78.932zm4.269-8.525c1.635-1.433 1.127-6.189-.905-8.462-1.945-2.178-3.769-.56-4.212 3.738-.494 4.78 2.207 7.274 5.117 4.724zm44.088 18.858c-13.516-3.54-21.925-17.243-18.908-30.807 2.279-10.245 10.455-18.166 20.649-20.004 8.58-1.547 17.147 1.103 23.23 7.187 4.04 4.04 7.34 10.809 7.34 15.058 0 2.145.283 1.589 1.04-2.046 2.005-9.613 9.785-17.68 19.263-19.973 3.395-.822 10.022-.708 13.153.225 9.834 2.933 16.626 10.272 18.623 20.126 1.774 8.758-.798 17.023-7.341 23.586-6.408 6.429-15.702 8.947-24.61 6.669-4.859-1.243-8.192-3.168-11.96-6.908-3.766-3.737-6.065-7.867-7.065-12.693-.695-3.35-1.103-4.109-1.103-2.049 0 2.185-1.985 7.56-3.926 10.633-5.833 9.235-17.644 13.81-28.386 10.996zm14.018-2.374c7.83-2.629 13.87-9.051 15.923-16.927.815-3.132.818-8.72.006-11.772-2.3-8.642-9.29-15.45-17.961-17.494-14.782-3.484-29.311 8.17-29.345 23.539-.024 10.329 7.694 20.354 17.753 23.059 3.89 1.046 9.826.87 13.624-.406zm-11.482-9.172c-1.792-6.685-5.215-24.054-5.215-26.456 0-.274 2.706-.435 7.352-.435h7.351l-.22.972c-.692 3.05-2.847 18.584-2.611 18.82.155.155 1.726.355 3.492.444 1.766.089 3.208.287 3.204.439-.005.236-.42 2.114-1.514 6.864-.218.947-.37.972-5.815.972h-5.59zm64.142 9.037c7.38-2.57 12.788-8.07 15.148-15.408 2.85-8.865.29-18.477-6.61-24.81-3.35-3.075-6.073-4.566-10.327-5.654-5.968-1.526-10.581-1.03-16.443 1.768-7.703 3.677-12.811 11.318-13.4 20.045-.461 6.837 1.964 13.146 6.98 18.157 5.052 5.048 9.876 7.051 17.068 7.091 3.418.02 4.684-.18 7.583-1.188zm-17.665-15.948c-.156-4.455-.284-10.675-.285-13.823V94.13h19.87v27.647h-6.007l-1.167-3.888c-1.101-3.67-1.234-3.888-2.354-3.888-1.242 0-1.206-.076-3.27 7.02-.183.63-.74.756-3.362.756h-3.142zm12.102-3.165c.882-.883-.841-6.015-2.02-6.015-1.21 0-2.932 4.902-2.083 5.925.558.673 3.456.737 4.102.09z\" stroke-dasharray=\"800\" stroke-dashoffset=\"800\" fill=\"none\" stroke=\"#000\" style=\"animation:draw 3s linear 1 forwards\"><animate attributeName=\"fill\" from=\"#d4d6d8\" to=\"#000000\" dur=\"3s\" additive=\"replace\" fill=\"freeze\"/></path><g opacity=\"0\" transform=\"translate(-17.039 14.629) scale(1.2179)\" stroke=\"#000\"><path d=\"M140.69 100.11c-1.326-.406-3.556-2.217-18.67-15.165l-8.381-7.18-.934.449c-.514.246-1.148.472-1.41.501-.422.048-.54.004-1.084-.403-.935-.7-4.127-3.933-4.06-4.11.033-.084.091-.897.13-1.806.108-2.485.259-2.52-4.378 1.01-2.983 2.272-7.096 4.894-7.678 4.896-.109 0-.58-.406-1.048-.903l-.851-.902-.51.65c-.281.357-.584.864-.673 1.126-.233.686-.726 1.236-2.93 3.275-1.08.998-2.54 2.36-3.247 3.027-2.943 2.78-5.58 4.543-7.266 4.854-1.204.223-1.692.54-4.335 2.811-1.715 1.474-3.023 2.459-4.114 3.095l-.777.454-2.017-.246c-3.3-.404-3.882-.515-4.104-.787-.238-.293-.247-.783-.029-1.504.234-.771.21-1.245-.11-2.093-.153-.406-.278-.91-.278-1.121 0-.795 1.267-1.723 2.356-1.725.59-.001.918-.232.81-.572-.102-.322.334-1.117.961-1.755.632-.642.933-.711 1.125-.26.202.473.431.695.718.695.348 0 .703-.585.704-1.16 0-.39-.078-.514-.765-1.201l-.766-.766.36-.856c.2-.47.7-1.756 1.114-2.858 1.353-3.602 2.092-4.929 4.331-7.774 1.476-1.876 1.89-2.534 2.272-3.616.496-1.402.954-2.055 2.615-3.735l1.541-1.557-.063-.558a108.47 108.47 0 0 0-.136-1.122c-.093-.733.065-1.039 1.457-2.828 1.87-2.403 3.26-4.606 3.126-4.955-.032-.082-.248-.178-.48-.212-.893-.133-1.372-.29-1.89-.62-.294-.187-.74-.392-.989-.455-.752-.19-2.784-2.115-3.713-3.518-.344-.52-.672-1.723-.672-2.464 0-1.734.72-2.931 2.836-4.717 1.774-1.497 2.723-2.41 3.535-3.4.736-.897 1.127-1.127 1.917-1.127.28 0 .694-.095.922-.211.227-.116 1.414-1.206 2.637-2.422 2.36-2.345 3.39-3.229 5.005-4.294 2.24-1.478 4.442-2.303 7.178-2.692 1.96-.279 4.017-.186 6.534.296.978.187 1.284.21 1.389.106.087-.087.148-.68.176-1.692l.043-1.558 1.221-1.11c.672-.61 1.53-1.329 1.906-1.597 1.13-.803 2.377-1.053 3.108-.621.29.17.694.244 1.722.314 1.226.082 1.379.117 1.748.4.598.455 1.08 1.164 1.953 2.873.454.888.85 1.53.942 1.53.268 0 .41.431.402 1.23-.014 1.497-.398 2.452-1.88 4.684-1.522 2.291-1.61 2.54-.908 2.54.274 0 .5.145 1.072.694 3.385 3.246 6.629 9.789 7.754 15.638.45 2.339.557 3.424.557 5.636.001 3.99-.634 6.573-2.332 9.478-.834 1.428-2.255 2.845-4.192 4.18-1.775 1.224-3.283 2.438-4.645 3.74l-1.056 1.011 1.168 1.128c2.093 2.022 10.23 9.306 15.628 13.991 4.11 3.567 6.39 5.285 7.72 5.817.534.214.818.247 2.013.24 1.712-.013 2.532-.213 5.84-1.43 3.532-1.3 5.179-1.83 5.69-1.834.596-.004.965.406 1.163 1.289.28 1.247-.27 3.273-.987 3.644-.625.323-5.24 1.232-7.103 1.399-.68.06-1.293.185-1.606.326-.989.443-3.516.715-4.332.465zm3.115-.79c1.887-.232 2.475-.338 2.807-.51.186-.096 1.616-.497 3.178-.89 3.541-.892 3.747-.977 3.92-1.618.127-.468.092-1.625-.056-1.864-.188-.304-.756-.168-4.844 1.16-5.894 1.914-7.833 2.138-10.002 1.155-.99-.45-1.426-.794-5.738-4.545-9.418-8.192-16.725-14.463-16.855-14.463-.263 0-.205.283.13.635.586.617 5.993 5.419 10.388 9.227 9.436 8.174 12.227 10.447 13.845 11.276 1.096.56 1.63.633 3.226.438zm-78.04-5.065c.236-.235.22-.46-.04-.6-.674-.36-1.678.172-1.208.642.194.194 1.04.166 1.249-.042zm2.065.01c.2-.24.053-.502-.28-.502-.41 0-.72.193-.72.448 0 .18.077.219.432.219.246 0 .49-.071.568-.165zm.604-1.577c.377-.18.563-.417.46-.585-.028-.045-.338-.147-.688-.225-.582-.13-.65-.125-.784.058-.203.277-.184.455.076.714.27.271.434.277.936.038zm-1.719-.364c.063-.118.115-.446.115-.728 0-1.69-2.06-2.842-3.495-1.955-.617.382-.56.781.218 1.536 1.098 1.063 2.864 1.704 3.162 1.147zM70 89.947c1.242-1.279 1.884-2.18 2.014-2.83.14-.705-.55-.63-1.348.146-.452.439-.515.553-.458.834.063.316.05.326-.364.326-.524 0-.633.126-.707.818-.031.297-.136.618-.232.714-.157.158-.214.146-.609-.127a5.298 5.298 0 0 1-.692-.575c-.26-.278-.492-.348-.595-.182-.064.103.998 1.92 1.196 2.048.34.22.622.036 1.795-1.173zm8.93-2.132c1.495-.71 3.695-2.305 3.695-2.679 0-.227-.367-.383-.91-.386-.606-.003-1.477-.36-2.505-1.025-1.6-1.036-2.008-1.111-2.614-.483-.321.333-2.423 3.646-2.591 4.085-.095.248 1.055.585 1.937.567.564-.01.774.034 1.001.213.385.303.89.228 1.986-.292zm-5.335-2.25c.028-.197-.076-.301-.519-.526-.593-.3-2.023-.731-2.427-.731-.497 0-.45.396.085.711.616.364 2.041.84 2.437.815.307-.02.396-.076.424-.27zm.977-1.91c.764-.562 3.826-3.903 4.45-4.856.168-.256.17-.308.023-.455-.091-.091-.547-.261-1.013-.378-1.843-.46-3.482-1.683-4.733-3.53-.259-.383-.519-.696-.578-.696-.188 0-1.062 1.286-1.642 2.416-1.162 2.262-2.022 4.726-1.849 5.297.23.755 1.477 1.68 2.966 2.198 1.21.421 1.807.422 2.376.004zm8.999-.103c.883-.302.815-.694-.21-1.213-.683-.346-1.589-1.005-2.404-1.748-.336-.307-.742-.675-.902-.818l-.29-.26-.458.76c-.253.418-.49.912-.527 1.098-.306 1.53 2.695 2.897 4.79 2.181zm2.892-1.956c.753-.355 1.538-1.018 2.358-1.993.889-1.057 1.288-1.8 1.194-2.224-.095-.434.229-.761 1.133-1.145.39-.166.71-.332.71-.369-.001-.037-.46-.567-1.019-1.179a89.858 89.858 0 0 1-2.07-2.366c-.916-1.09-1.077-1.236-1.235-1.114-.1.077-.878.767-1.73 1.532-2.452 2.201-4.09 4.229-4.468 5.526-.165.57-.165.651.008 1.105.206.538.689.978 1.81 1.648 1.444.862 2.366 1.024 3.309.58zm-6.389-4.645c.558-.167 1.265-.882 1.17-1.183-.043-.132-.48-.438-1.093-.762-1.69-.896-3.356-2.267-4.275-3.518-.452-.614-.737-.672-1.238-.252-1.146.965-.863 2.814.646 4.21 1.35 1.25 3.445 1.908 4.79 1.505zm15.148-.165c1.242-.63 4.527-2.755 6.147-3.977 2.05-1.547 2.712-2.41 2.492-3.248-.191-.731-3.066-3.484-12.596-12.061-2.617-2.355-4.81-4.3-4.873-4.323-.154-.054-1.327 1.24-2.8 3.09-1.522 1.912-2.098 2.77-2.056 3.06.024.173.395.411 1.484.954 1.731.862 2.635 1.491 3.617 2.518.952.996 1.285 1.498 2.165 3.263.401.806.775 1.449.83 1.429.057-.02.968-.845 2.027-1.833 3.076-2.874 4.092-3.649 4.092-3.119 0 .288-.6.952-3.089 3.415-3.187 3.155-3.686 3.93-3.317 5.158.206.684.528 1.1 2.41 3.109.883.942 1.832 1.97 2.11 2.285.278.314.567.571.643.571.076 0 .397-.131.714-.292zm18.77-1.32c.308-.273.71-.575.892-.669.396-.205.686-.743.931-1.731.212-.853.233-1.577.055-1.92-.243-.468-.896-1.193-1.233-1.367-.49-.253-.792-.073-1.18.704-.948 1.895-1.438 4.73-.91 5.26.37.37.813.285 1.444-.276zM82.424 73.95c1.235-.262 2.345-1.048 3.488-2.47 1.272-1.583 2.496-3.794 2.497-4.508 0-1.003-1.585-2.898-3.533-4.223-1.894-1.288-4.231-2.252-4.64-1.914-.248.207-.21.452.162 1.04.43.677.512 1.025.325 1.374-.082.154-.664.655-1.293 1.113-1.39 1.014-2.138 1.829-2.68 2.922-.382.772-.41.898-.409 1.836.001.925.031 1.065.377 1.73.532 1.024 1.544 1.98 2.7 2.55 1.286.635 1.994.765 3.006.55zm26.47-.292c.594-.642 1.222-1.582 1.185-1.773-.117-.609-1.048.122-1.605 1.26-.402.821-.15 1.13.42.513zm8.82-2.21c.226-.087.505-.616.505-.958 0-.365-.663-1.695-1.211-2.427-.785-1.05-2.455-1.96-4.066-2.218-1.236-.198-1.944.05-2.156.755-.19.635-.167 1.527.044 1.739.096.096.184.174.195.172.01 0 .395-.1.854-.22 1.051-.276 1.706-.276 2.31-.002.617.28 1.605 1.219 2.169 2.06.758 1.132.922 1.265 1.356 1.099zm-5.803-.35c.25-.277.63-1.145.633-1.448.003-.298-.22-.41-.616-.31-.332.083-1.273.915-1.273 1.126 0 .079.13.298.288.486.325.386.7.442.968.146zm-4.395-1.118c.064-.194-.596-.832-6.424-6.199a1410.696 1410.696 0 0 1-8.9-8.272c-6.112-5.75-7.124-6.614-7.669-6.55-.193.022-.297.11-.32.268-.025.18.423.67 1.892 2.07C89.29 54.344 97.125 61.46 102.7 66.38c4.31 3.803 4.661 4.066 4.817 3.6zm12.776-.42c2.068-.914 3.951-2.853 5.053-5.205 1.008-2.15 1.277-3.9 1.185-7.688-.087-3.569-.383-5.586-1.26-8.565-1.44-4.899-3.38-8.55-6.312-11.883-.894-1.017-1.24-1.23-1.474-.911-.385.526-.025 1.511 1.042 2.852 3.237 4.068 5.79 9.778 6.377 14.264.118.898.115 1.09-.019 1.252-.205.25-1.334.755-2.078.93-.852.2-1.056.034-1.402-1.138a33.992 33.992 0 0 1-.46-1.751c-.985-4.35-2.404-7.506-4.635-10.314l-.55-.692-.91.574c-3.375 2.124-4.955 2.871-6.06 2.864-.754-.005-.908-.17-1.049-1.116-.206-1.391.175-4.843.76-6.863.344-1.194.34-1.34-.041-1.43-.168-.04-1.114-.44-2.101-.89-.988-.448-2.169-.918-2.625-1.043-1.09-.299-2.558-.42-3.867-.32-3.7.282-3.865.263-4.048-.473-.219-.88.214-1.754 1.086-2.188.934-.465 2.185-.613 4.63-.547 2.451.065 3.41.225 4.947.823 1.922.747 2.065.75 2.086.028.021-.754-1.099-1.335-3.614-1.875-4.06-.872-7.752-.167-11.316 2.16-2.077 1.355-6.563 5.699-6.563 6.355 0 .081.342.523.76.982.53.58.956 1.21 1.402 2.068.352.678.716 1.262.807 1.297.092.035 1.196-.441 2.464-1.064 2.541-1.248 2.899-1.351 4.68-1.351 2.133 0 3.814.305 4.33.786.232.216.327.704.156.81-.045.028-.634-.013-1.307-.09s-1.242-.125-1.265-.105c-.098.084.254 2.31.545 3.443.83 3.228 2.271 5.78 4.554 8.062 2.285 2.282 4.568 3.549 7.338 4.07 1.11.208 2.698.232 3.178.046.492-.19.933-.66 1.011-1.076.11-.582-.312-1.762-.987-2.766-.657-.978-1.192-1.869-1.192-1.983 0-.04.128-.074.286-.074.82 0 2.374 1.77 2.882 3.282.4 1.193.4 4.002-.002 6.167-.23 1.234-.584 2.443-1.151 3.928-.252.658-.458 1.318-.458 1.466 0 .203.223.445.919.997 1.066.844 1.72 1.587 2.729 3.098.398.596.76 1.084.805 1.084.044 0 .374-.13.734-.288zm-10.767-.24c.085-.167.138-.604.274-2.25.042-.51-.322-.39-1.087.356-.864.843-.9 1.05-.294 1.657.472.47.935.57 1.107.237zM107.1 66.73c.654-.334 1.83-1.476 1.746-1.696-.2-.523-6.13-3.979-8.345-4.864-1.209-.483-1.662-.293-1.12.469.453.636 4.66 4.503 6.103 5.609.371.285 1.024.685 1.144.702.018.002.23-.097.472-.22zm6.46-2.477c.424-.285 1.434-1.562 1.434-1.814 0-.357-.364-.287-1.092.213-1.164.798-1.852 1.448-1.768 1.667.111.29.955.25 1.425-.066zm-3.136-.601c.982-.575 3.371-2.16 3.325-2.207-.025-.025-.735-.122-1.577-.216-2.85-.316-4.674-.815-6.91-1.893-2.233-1.075-4.127-2.465-6.012-4.41-2.185-2.256-3.61-4.445-4.908-7.543-.881-2.102-1.193-2.444-1.9-2.079-.419.217-1.01.889-1.216 1.38-.15.361-.141.414.196 1.061.512.984 1.741 2.984 3.077 5.005 2.697 4.082 3.746 5.015 8.315 7.397 1.285.67 3.337 1.8 4.56 2.51 1.224.712 2.296 1.294 2.382 1.294.087 0 .387-.135.668-.299zm4.377-3.747c.3-.203.902-1.326 1.19-2.215.217-.673.137-.705-1.914-.779-2.12-.075-3.384-.28-4.94-.8-4.935-1.65-8.744-5.798-10.327-11.245a39.12 39.12 0 0 1-.6-2.536c-.203-1.006-.37-1.576-.48-1.638-.126-.07-.503.232-1.508 1.21-1.819 1.77-2.043 2.27-1.613 3.6.302.937 1.713 3.721 2.443 4.823 3.268 4.93 8.23 8.576 13.086 9.62 1.406.301 4.195.278 4.663-.04zM96.753 57.77c0-.203-.39-.722-2.836-3.774-.98-1.223-2.103-2.675-2.495-3.225-1.228-1.729-1.584-1.998-1.949-1.477-.372.532-.101 1.836.562 2.706.385.505 3.641 3.586 5.246 4.964 1.122.963 1.472 1.155 1.472.806zm26.583-4.44c.382-.197.49-.478.474-1.225-.032-1.5-2.22-7.505-3.553-9.749-1.159-1.952-2.8-3.868-3.196-3.729-.355.126-.046.95 1.584 4.22 1.923 3.856 2.31 4.836 2.92 7.405.58 2.442.651 2.698.84 2.993.186.291.48.318.931.085zm-39.834-1.452c.185-.156.368-.383.407-.506.1-.314-.226-.768-.55-.768-.468 0-1.233 1.086-1.014 1.44.138.223.808.128 1.157-.166zm-2.648-1.306c.157-.136.48-.497.716-.803.784-1.01 1.762-1.954 3.17-3.054 2.016-1.577 3.404-2.837 3.724-3.384.772-1.316-.195-4.336-1.613-5.045-1.024-.511-2.252-.428-3.344.226-1.14.682-1.172 1.297-.099 1.869 1.212.645 2.774 2.462 2.777 3.229.002.617-3.178 3.184-3.52 2.842-.11-.11.31-.825.868-1.475.709-.826 1.029-1.501.938-1.983-.09-.477-.726-1.077-1.658-1.562-1.024-.532-1.59-.537-2.36-.019-.857.577-1.83 1.544-1.83 1.818 0 .407.958.921 1.719.921.902 0 .932.507.14 2.338-.869 2.006-1.06 3.085-.697 3.95.13.312.22.385.472.382.172-.002.44-.115.597-.25zm7.138-1.387c.16-.168.596-.706.97-1.195 1.014-1.327 3.05-3.52 4.888-5.266 2.275-2.16 2.67-2.79 1.663-2.655-.64.086-3.712 1.639-4.482 2.265-.869.708-3.336 3.516-3.65 4.154-.194.396-.246.698-.247 1.446-.003 1.14.096 1.557.368 1.557.11 0 .33-.137.49-.306zm-9.44-1.197c.346-.733.686-2.263.537-2.412-.23-.23-.682.088-.933.655-.236.535-.397 1.768-.272 2.093.116.302.447.136.669-.336zm32.55-5.691c2.563-1.38 4.561-3.287 4.561-4.354 0-.367-.228-.307-1.593.418-1.487.79-2.15.986-2.637.784-.39-.161-1.283-1.115-1.531-1.634-.351-.734-.717-.51-.896.547-.174 1.03-.28 3.298-.19 4.03.05.396.161.717.295.85.2.202.24.205.63.042.229-.096.842-.403 1.362-.683zm2.177-4.48c1.347-.664 3.015-2.84 4.17-5.443.533-1.2.52-1.49-.094-2.028-1.101-.967-3.763-1.652-6.43-1.655h-.901l-.073 1.185c-.204 3.34.048 5.465.842 7.101.178.367.458.81.623.983.255.27.361.308.729.26.236-.032.747-.213 1.134-.404zm-4.752-4.316c.204-.39-.323-1.084-1.37-1.805-1.488-1.024-2.915-1.339-6.066-1.34-2.604 0-4.004.266-4.004.764 0 .294.158.321 2.67.46 4.1.228 5.855.606 7.468 1.61.882.549 1.145.612 1.302.311zm11.083-3.695c.143-.276.723-2.248.724-2.46 0-.035-.638-.37-1.418-.743-2.625-1.256-5.045-1.895-7.536-1.99-1.253-.048-1.498-.028-1.835.148-.587.306-.778.795-.779 1.988v1.007l1.919-.003c1.473-.003 2.1.042 2.697.192 1.504.379 2.584.77 4.066 1.475.823.39 1.607.712 1.744.714.163.002.305-.11.418-.328zm-.966-4.809c.212-.212.156-.546-.195-1.158-.382-.665-.92-1.155-1.271-1.155-.63 0-1.75 1.075-1.58 1.517.072.188.624.441 1.566.718.797.234 1.298.26 1.48.078zm-6.193-1.385c.205-.247.177-1.118-.044-1.34-.158-.158-.208-.153-.545.056-.342.212-.728.588-1.253 1.218l-.209.25h.95c.747 0 .98-.039 1.101-.184zm2.378-.825c0-.23-.06-.275-.407-.304-.315-.026-.445.02-.576.207-.32.459.036.73.649.495.244-.094.334-.2.334-.398z\" stroke-width=\".111\"/><g fill=\"#fff\" stroke-width=\".42\"><path d=\"M110.928 23.34c.152-.199.49-.525.75-.726.578-.445.782-.348.782.374 0 .602-.176.714-1.12.714h-.688zM113.873 23.075c-.039-.038-.02-.163.04-.278.156-.291.771-.289.771.003 0 .283-.6.487-.811.275zM117.378 24.864c-.876-.236-1.691-.613-1.691-.783 0-.375 1.053-1.269 1.495-1.269.547 0 1.692 1.703 1.39 2.066-.161.194-.43.191-1.194-.014zM117.855 29.48c-3.21-1.46-4.369-1.758-6.986-1.799l-1.967-.03v-.93c-.002-1.78.389-2.09 2.502-1.982 2.502.127 4.987.79 7.528 2.007l1.3.623-.21.763c-.334 1.203-.603 1.85-.78 1.878-.09.014-.714-.225-1.387-.53zM111.513 37.89c-.386-.385-.885-1.477-1.173-2.565-.268-1.017-.412-3.9-.275-5.541l.08-.966h.964c2.537.003 5.373.797 6.29 1.764.424.446.369.865-.298 2.251-1.118 2.328-2.788 4.392-3.99 4.93-.977.439-1.264.462-1.598.127z\" stroke-width=\".11112359999999999\"/><path d=\"M118.783 68.608c-1.142-1.617-1.471-1.992-2.568-2.927-.535-.456-.973-.91-.973-1.008 0-.098.296-1.06.659-2.139.707-2.104.946-3.13 1.119-4.796.246-2.38.085-4.092-.498-5.284-.498-1.017-1.278-1.99-1.92-2.398-.508-.322-1.14-.438-1.14-.21 0 .174.294.714.997 1.83 1.408 2.237 1.495 3.254.33 3.873-.328.174-.568.195-1.716.147-3.3-.136-5.978-1.42-8.734-4.181-2.059-2.064-3.273-3.985-4.15-6.569-.41-1.205-.805-2.956-.923-4.085l-.068-.645 1.243.101c1.36.11 1.53.06 1.41-.42-.212-.848-1.768-1.28-4.633-1.288-1.68-.004-2.137.125-4.752 1.342-1.186.552-2.233.989-2.328.97-.095-.02-.479-.573-.854-1.23-.375-.658-.999-1.57-1.386-2.028-.488-.579-.684-.894-.64-1.034.179-.561 3.155-3.525 5.237-5.215 1.728-1.403 3.953-2.517 6.121-3.063.855-.216 1.292-.252 3.055-.254 1.757-.002 2.228.035 3.22.257 2.47.553 3.627 1.163 3.547 1.869-.048.416-.263.394-1.821-.184-1.853-.687-2.72-.815-5.613-.824-3.274-.01-4.128.196-4.938 1.198-.305.377-.345.51-.345 1.128 0 .545.05.756.222.947.222.246.224.246 3.115.167 3.862-.105 4.04-.072 7.36 1.35 1.051.45 1.962.819 2.024.819.245 0 .231.26-.08 1.468a22.348 22.348 0 0 0-.733 5.54c-.005 1.335.027 1.674.189 1.969.547 1 2.536.387 6.31-1.946l1.611-.996.491.625c2.048 2.61 3.44 5.612 4.418 9.524.584 2.342.906 3.332 1.153 3.556.326.295 1.223.171 2.271-.313 1.002-.463 1.078-.597.945-1.685-.534-4.382-2.82-9.648-6.105-14.071-1.324-1.782-1.671-2.586-1.342-3.106.145-.228.494.027 1.356.99 3.002 3.352 5.277 7.874 6.589 13.094.517 2.059.724 3.516.863 6.084.164 3.037.007 5.36-.474 7.004-.889 3.042-3.159 5.788-5.723 6.922l-.595.263z\" stroke-width=\".11112359999999999\"/><path d=\"M107.345 33.136c-1.973-1.094-3.26-1.378-7.453-1.645-2.239-.143-2.67-.205-2.67-.384 0-.447 1.737-.667 4.616-.587 2.433.068 3.2.2 4.33.744 1.286.62 2.421 1.723 2.246 2.18-.086.223-.139.208-1.068-.308zM79.97 50.548c-.088-.105-.166-.517-.186-.973-.035-.82.037-1.075 1.026-3.672.502-1.317.38-1.84-.432-1.852-.68-.01-1.62-.49-1.62-.83 0-.072.288-.414.64-.76 1.421-1.394 2.013-1.559 3.3-.923.479.237.989.594 1.232.864.374.413.41.508.363.931-.034.297-.193.666-.43.995-1.414 1.963-1.518 2.18-1.088 2.263.432.083 2.974-1.932 3.374-2.674.206-.384.206-.39-.052-.923-.33-.681-1.609-2.033-2.427-2.564-.711-.463-.907-.668-.907-.951 0-.285.52-.742 1.224-1.076.815-.386 2.048-.407 2.739-.046.844.44 1.497 1.485 1.781 2.847.345 1.654.049 2.201-2.202 4.072-3.23 2.686-3.692 3.098-4.449 3.98-1.238 1.442-1.572 1.671-1.887 1.292zM77.98 47.897c0-.776.217-1.592.52-1.952.153-.182.324-.33.38-.33.363 0-.341 2.559-.747 2.715-.116.044-.153-.062-.153-.433zM82.427 51.887c.001-.599.819-1.333 1.164-1.046.433.358-.021 1.07-.759 1.19-.346.055-.405.034-.405-.144zM106.327 69.35C103.543 67.11 89.634 54.561 86.1 51.1c-1.469-1.44-1.809-1.828-1.698-1.94.342-.348 1.286.428 6.925 5.695 2.05 1.914 6.054 5.635 8.899 8.269 6.412 5.937 7.163 6.661 7.102 6.844-.032.095-.38-.12-1.001-.62zM110.96 59.962c-2.431-.31-5.496-1.684-8.139-3.649-1.358-1.009-3.821-3.503-4.9-4.96-1.465-1.98-3.22-5.438-3.337-6.578-.052-.501-.018-.666.222-1.072.41-.695 2.724-2.943 2.874-2.792.065.065.314.962.553 1.993.537 2.312.866 3.324 1.564 4.815 1.575 3.365 4.566 6.42 7.67 7.834 1.998.91 3.439 1.247 6.051 1.415 1.04.066 2.004.143 2.141.17.379.074.319.442-.26 1.597-.378.756-.586 1.048-.806 1.134-.404.156-2.678.214-3.633.093z\" stroke-width=\".11112359999999999\"/><path d=\"M107.732 62.732c-1.1-.62-3.202-1.777-4.67-2.572-3.928-2.128-4.918-2.837-6.332-4.533-1.916-2.298-5.625-8.265-5.46-8.784.126-.397.912-1.297 1.258-1.44.504-.21.731-.02 1.23 1.02.242.504.77 1.61 1.173 2.46 1.26 2.646 2.58 4.467 4.81 6.635 2.462 2.394 4.655 3.766 7.728 4.835 1.149.4 3.394.866 4.825 1.002 1.278.121 1.281.126.428.702-.91.613-2.841 1.8-2.928 1.8-.034 0-.962-.506-2.062-1.125zM106.097 66.534c-1.293-.82-6.338-5.44-6.712-6.145-.207-.391-.054-.444.67-.231 1.586.464 8.377 4.326 8.591 4.885.086.224-.967 1.253-1.628 1.59l-.424.216zM95.83 57.282c-1.059-.873-3.675-3.308-4.844-4.51-.919-.943-1.217-1.327-1.362-1.755-.301-.884-.205-1.844.184-1.844.204 0 .707.561 1.697 1.891a156.33 156.33 0 0 0 2.37 3.059c2.7 3.398 2.855 3.615 2.595 3.615-.047 0-.334-.206-.64-.457zM117.225 71.28c-.095-.076-.447-.514-.783-.973-.68-.93-1.533-1.77-2.09-2.058-.565-.291-1.487-.32-2.47-.078-.598.148-.891.177-.973.095-.162-.161-.144-1.402.025-1.74.076-.154.333-.374.571-.49.39-.191.516-.2 1.248-.086 2.35.365 3.888 1.437 4.884 3.402.496.98.517 1.057.39 1.441-.073.223-.227.455-.34.516-.258.139-.255.139-.462-.029z\" stroke-width=\".11112359999999999\"/><path d=\"M112.616 75.588c-.623-.951.797-5.836 1.697-5.836.226 0 .939.676 1.283 1.218.358.563.374.762.148 1.828-.248 1.17-.516 1.623-1.292 2.187-1.404 1.022-1.534 1.064-1.836.603zM111.087 70.905c-.162-.161-.294-.36-.294-.443 0-.082.255-.35.566-.596.92-.727 1.306-.55.885.402-.262.593-.527.93-.73.93-.074 0-.266-.132-.427-.293zM108.404 73.617c.225-.754 1.276-2.018 1.496-1.798.18.18-1.166 2.048-1.474 2.048-.053 0-.063-.113-.022-.25zM92.22 74.564c-2.866-3.105-3.18-3.67-2.67-4.795.335-.738.734-1.197 3.465-3.984 2.399-2.448 2.968-3.13 2.816-3.377-.232-.374-.975.169-3.905 2.853-1.194 1.094-2.212 2.004-2.262 2.022-.05.018-.379-.532-.73-1.223-.896-1.763-1.458-2.574-2.463-3.55-.992-.964-1.7-1.448-3.48-2.376-.687-.359-1.277-.72-1.309-.805-.116-.302 2.402-3.656 3.972-5.29l.724-.755 1.836 1.64c9.95 8.887 15.3 13.921 15.516 14.605.323 1.018-.927 2.255-5.005 4.953-1.933 1.28-3.986 2.5-4.203 2.5-.039 0-1.074-1.088-2.302-2.418zM141.426 99.112c-.872-.277-2.114-1.09-3.407-2.23a31.245 31.245 0 0 0-2.083-1.66c-1.392-.993-9.155-7.657-15.741-13.513-3.536-3.143-4.012-3.59-3.92-3.683.095-.095 4.126 3.342 16.247 13.854 2.006 1.74 4.007 3.455 4.447 3.811 1.057.857 2.142 1.39 3.291 1.616 1.674.33 3.708-.052 8.63-1.619 4.085-1.3 4.506-1.401 4.672-1.132.038.061.075.366.082.678.012.52-.019.59-.368.861-.21.162-.59.486-.844.719-.43.393-.629.467-2.74 1.022-1.252.33-2.695.725-3.207.88-.878.267-3.258.631-4.028.617-.193-.003-.657-.103-1.031-.221zM84.83 81.647c-.66-.162-2.145-.988-2.75-1.53-.713-.638-.862-1.112-.599-1.904.248-.745 1.061-1.955 2.023-3.01.81-.887 2.886-2.878 3.692-3.541l.485-.399.35.39c.886.99 3.262 3.715 3.44 3.947l.2.26-.7.343c-.852.416-1.09.68-1.091 1.21-.003.978-1.943 3.31-3.352 4.028a2.499 2.499 0 0 1-1.699.206z\" stroke-width=\".11112359999999999\"/><path d=\"M80.792 73.813c-1.598-.44-3.241-1.682-3.927-2.969-.449-.843-.576-2.05-.299-2.845.41-1.176 1.377-2.372 2.76-3.416 1.234-.931 1.546-1.277 1.546-1.712 0-.223-.14-.635-.334-.977-.556-.986-.417-1.176.634-.871 2.534.734 5.915 3.262 6.82 5.099.347.706.359.77.226 1.215-.304 1.014-1.537 3.047-2.66 4.385-1.428 1.7-3.262 2.504-4.766 2.09zM78.051 76.808c-1.531-.371-3.112-1.568-3.694-2.798-.245-.517-.287-.739-.25-1.313.05-.791.443-1.442.947-1.568.252-.064.356.005.794.527 1.12 1.333 2.577 2.497 4.618 3.686.71.414.755.592.268 1.04-.656.6-1.446.725-2.683.426zM81.345 83.538c-1.165-.23-2.302-1.04-2.432-1.734-.057-.306.003-.532.292-1.102.533-1.05.579-1.068 1.198-.473.861.827 1.866 1.61 2.673 2.08.964.564 1.083.699.823.934-.394.357-1.559.492-2.554.296zM72.357 83.57c-1.137-.385-2.067-.945-2.632-1.582-.411-.465-.439-.536-.377-.988.17-1.251 1.616-4.615 2.67-6.214.292-.443.572-.831.622-.862.05-.031.341.281.648.694.545.735 1.58 1.815 2.133 2.227.658.49 1.237.772 2.334 1.138.745.248 1.18.452 1.2.561.072.372-3.97 4.812-4.689 5.154-.522.248-.869.225-1.909-.128zM76.977 87.997c-.254-.14-.613-.216-1.035-.22-.792-.005-1.634-.206-1.711-.408-.066-.172.224-.694 1.384-2.488 1.43-2.212 1.499-2.24 3.146-1.274 1.477.866 2.13 1.15 2.833 1.233.335.039.69.13.79.203.157.114.111.19-.362.607-1.158 1.021-3.437 2.34-4.322 2.5-.217.04-.47-.014-.723-.153zM72.64 85.645c-1.492-.406-2.786-1.21-1.947-1.21.373 0 2.273.617 2.592.842.203.143.229.212.126.337-.147.177-.222.18-.77.03zM67.99 90.637c-.326-.474-.8-1.35-.8-1.477 0-.037.296.166.658.45.978.769 1.144.703 1.458-.58.106-.433.143-.468.528-.5.377-.031.418-.067.45-.391.025-.266.179-.488.601-.868.864-.776 1.298-.554.8.41-.448.867-2.848 3.429-3.213 3.429-.087 0-.305-.213-.483-.473zM65.529 92.262c-.68-.238-1.306-.642-1.928-1.244-.602-.583-.665-.897-.245-1.227 1.252-.985 3.52.35 3.351 1.972-.074.71-.3.806-1.178.499zM67.587 92.563c-.198-.219-.156-.675.062-.675.28 0 1.099.26 1.099.348 0 .116-.664.54-.845.541-.067 0-.21-.096-.316-.214zM122.54 53.191c-.107-.118-.447-1.241-.784-2.588-.741-2.96-.957-3.527-2.806-7.36-1.876-3.891-2.132-4.525-1.822-4.525.324 0 1.869 1.846 2.799 3.346 1.35 2.177 3.536 7.908 3.732 9.787.088.845-.009 1.176-.404 1.38-.418.217-.486.213-.715-.04zM109.047 42.529c-.148-.35-.165-.708-.104-2.197.078-1.918.207-2.8.443-3.036.125-.125.207-.059.504.403.195.304.6.783.901 1.064.496.464.598.512 1.093.512.44 0 .8-.126 1.87-.652.728-.358 1.442-.69 1.587-.735.245-.078.258-.062.186.234-.184.754-1.235 1.904-2.71 2.964-.95.681-3.105 1.86-3.404 1.86-.115 0-.26-.166-.366-.418z\" stroke-width=\".11112359999999999\"/></g><animateMotion dur=\"1.5s\" begin=\"2s\" repeatCount=\"1\"><mpath xlink:href=\"#a\"/></animateMotion><animate attributeName=\"opacity\" from=\"0\" to=\"1\" begin=\"2s\" additive=\"replace\" fill=\"freeze\" dur=\"0.2s\"/><animateTransform attributeName=\"transform\" additive=\"sum\" dur=\"1.5s\" type=\"scale\" begin=\"2s\" from=\"0 0\" to=\"1 1\" repeatCount=\"1\"/></g><path id=\"a\" fill=\"transparent\" d=\"M400 50Q-100-100 0 0\"/></svg>\n      ");
        //   this.svg2 = this.sanitizer.bypassSecurityTrustHtml(`<svg version="1" 
        //   xmlns="http://www.w3.org/2000/svg" 
        //   class="svg-logo" 
        //   viewBox="0 0 300 200" 
        //   ></svg>
        //   `);
    };
    LandingComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("./src/app/core/landing/landing.component.html"),
            styles: [__webpack_require__("./src/app/core/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/core/posts/post-edit/post-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/posts/post-edit/post-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" m-0 p-0\">\n    <form class=\"m-0 p-3\" [formGroup]=\"postForm\" (ngSubmit)=\"onSubmit()\">\n    <h1 *ngIf=\"editMode; else createBlock\">Edytuj: {{post.titlePost}}</h1>\n    <ng-template #createBlock><h1>Stwórz post:</h1></ng-template>\n        <div class=\"form-group\">\n            <label for=\"titlePost\">Tytuł:</label>\n            <input class=\"form-control\" type=\"text\" name=\"titlePost\" formControlName=\"titlePost\"/>\n        </div>\n         <div\n          class=\"alert alert-danger\" *ngIf=\"postForm.get('titlePost').hasError('required') && postForm.get('titlePost').touched\">\n          Brak tytułu postu.\n        </div>\n        <div class=\"form-group m-auto row d-flex justify-content-between\">\n            <div formArrayName=\"imagePath\" class=\"col-md-10 images\">\n                <div class=\"row m-3 justify-content-between\" \n                *ngFor=\"let imagePathControl of postForm['controls'].imagePath['controls']; let i = index\">\n                 <label class=\"col-md-12\" for=\"imagePath\">Adres zdjęcia:</label>\n                 <input class=\"form-control col-md-10 mb-3\" type=\"text\" name=\"imagePath\" [formControlName]=\"i\"/>\n                 <button class=\"btn btn-warning col-md-1 p-1 mb-auto mt-0\" (click)=\"onDeleteImage(i)\" type=\"button\">X</button>\n                </div>\n            </div>\n            <button class=\"btn btn-success col-md-1 m-auto\" (click)=\"onAddImage()\" type=\"button\">+</button>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"contentPost\">Tekst postu:</label>\n            <quill-editor name=\"contentPost\" formControlName=\"contentPost\">\n                <div quill-editor-toolbar>\n                    <span class=\"ql-formats\">\n                        <button type=\"button\" class=\"ql-bold\" [title]=\"'Pogrubienie'\"></button>\n                        <button type=\"button\" class=\"ql-italic\" [title]=\"'Pochylenie'\"></button>\n                        <button type=\"button\" class=\"ql-underline\" [title]=\"'Podkreślenie'\"></button>\n                        <button type=\"button\" class=\"ql-strike\" [title]=\"'Przekreślenie'\"></button>\n                    </span>\n                      \n                    <span class=\"ql-formats\" >\n                      <select class=\"ql-size\" [title]=\"'Wielkość Czcionki'\">\n                        <option value=\"small\"></option>\n                        <option selected [value]=\"false\"></option>\n                        <option value=\"large\"></option>\n                        <option value=\"huge\"></option>\n                      </select>\n                      \n                      <select class=\"ql-header\" [title]=\"'Nagłówek'\">\n                        <option [value]=\"1\"></option>\n                        <option [value]=\"2\"></option>\n                        <option [value]=\"3\"></option>\n                        <option [value]=\"4\"></option>\n                        <option [value]=\"5\"></option>\n                        <option [value]=\"6\"></option>\n                        <option selected [value]=\"false\"></option>\n                      </select>\n                    </span>\n                    <span class=\"ql-formats\">\n                        <span class=\"ql-color ql-picker ql-color-picker\" [title]=\"'Kolor Czcionki'\">\n                            <span class=\"ql-picker-label\"></span>\n                            <span class=\"ql-picker-options\"></span>\n                        </span>\n                        <span class=\"ql-background ql-picker ql-color-picker\" [title]=\"'Kolor Tła'\">\n                            <span class=\"ql-picker-label\"></span>\n                            <span class=\"ql-picker-options\"></span>\n                        </span>\n                    </span>\n                    <span class=\"ql-formats\">\n                        <button type=\"button\" class=\"ql-link\" [title]=\"'Odnośnik'\"></button>    \n                    </span> \n                    \n                </div>\n            </quill-editor>\n        </div>\n        <div\n          class=\"alert alert-danger\" *ngIf=\"postForm.get('contentPost').hasError('required') && postForm.get('contentPost').touched\">\n          Brak treści postu.\n        </div>\n        <div class=\"form-group row m-2 d-flex justify-content-between\">\n            <button\n              class=\"btn btn-danger  col-md-2 mb-4\"\n              mwlConfirmationPopover\n              [popoverTitle]=\"popoverTitle\"\n            [popoverMessage]=\"popoverMessage\"\n            [confirmText]=\"confirmText\"\n            [cancelText]=\"cancelText\"\n            [placement]=\"placement\"\n            (confirm)=\"confirmClicked = true;  onDeletePost()\"\n            (cancel)=\"cancelClicked = true\"\n            confirmButtonType=\"danger\"\n            cancelButtonType=\"default\"\n            (click)=\"confirmClicked = false; cancelClicked = false;\"\n            [appendToBody]=\"true\"\n            *ngIf=\"editMode\">\n              Usuń\n            </button>\n            <button class=\"btn btn-warning col-md-2 mb-4\" (click)=\"onCancel()\" type=\"button\">Anuluj</button>\n            <button class=\"btn btn-success col-md-2 mb-4\" type=\"submit\" [disabled]=\"postForm.invalid\">Zatwierdź</button>\n        </div>\n       \n    </form>\n    \n</div>"

/***/ }),

/***/ "./src/app/core/posts/post-edit/post-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post_model__ = __webpack_require__("./src/app/core/posts/post/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_post_service__ = __webpack_require__("./src/app/core/posts/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__("./node_modules/quill/dist/quill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Add fonts to whitelist
var Font = __WEBPACK_IMPORTED_MODULE_6_quill___default.a.import('formats/font');
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['mirza', 'aref', 'sans-serif', 'monospace', 'serif'];
__WEBPACK_IMPORTED_MODULE_6_quill___default.a.register(Font, true);
var PostEditComponent = /** @class */ (function () {
    function PostEditComponent(route, router, postService, _location) {
        this.route = route;
        this.router = router;
        this.postService = postService;
        this._location = _location;
        this.editMode = false;
        this.placements = ['top', 'left', 'right', 'bottom'];
        this.popoverTitle = 'Czy jesteś pewny?';
        this.popoverMessage = 'Ale tak na 100% pewien?';
        this.confirmText = 'Tak';
        this.cancelText = 'Nie';
        this.confirmClicked = false;
        this.cancelClicked = false;
    }
    PostEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribeQueryParams = this.route.queryParams.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.subscribeParams = this.route.params
            .subscribe(function (params) {
            _this._id = params['_id'];
            _this.editMode = params['_id'] != null;
            _this.initFormPost();
        });
    };
    PostEditComponent.prototype.onSubmit = function () {
        var newPost = new __WEBPACK_IMPORTED_MODULE_4__post_post_model__["a" /* Post */](this.postForm.value['titlePost'], new Date().toLocaleString(), "DW", this.postForm.value['contentPost'], this.postForm.value['imagePath']);
        if (this.editMode) {
            this.postService.updatePost(newPost, this._id);
        }
        else {
            console.log(newPost);
            this.postService.createPost(newPost);
        }
        this.router.navigate(['/home']);
    };
    PostEditComponent.prototype.initFormPost = function () {
        var postTitle = '';
        var postImagePath = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([]);
        var contentPost = '';
        if (this.editMode) {
            this.post = this.postService.getPost(this.id);
            postTitle = this.post.titlePost;
            if (this.post['imagePath']) {
                for (var _i = 0, _a = this.post.imagePath; _i < _a.length; _i++) {
                    var image = _a[_i];
                    postImagePath.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](image));
                }
            }
            contentPost = this.post.contentPost;
        }
        if (this.postForm) {
            this.postForm.reset({
                'titlePost': postTitle,
                'contentPost': contentPost,
            });
            this.postForm.controls['imagePath'] = postImagePath;
        }
        else {
            this.postForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                'titlePost': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](postTitle, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                'contentPost': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](contentPost, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                'imagePath': postImagePath
            });
        }
    };
    PostEditComponent.prototype.onAddImage = function () {
        this.postForm.get('imagePath').push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]());
    };
    PostEditComponent.prototype.onCancel = function () {
        this._location.back();
    };
    PostEditComponent.prototype.onDeleteImage = function (index) {
        this.postForm.get('imagePath').removeAt(index);
    };
    PostEditComponent.prototype.onDeletePost = function () {
        this._id = this.postService.getId(this.id);
        this.postService.deletePost(this.id, this._id);
        this.postService.getPosts();
        this.onCancel();
    };
    PostEditComponent.prototype.ngOnDestroy = function () {
        this.subscribeParams.unsubscribe();
        this.subscribeQueryParams.unsubscribe();
    };
    PostEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-edit',
            template: __webpack_require__("./src/app/core/posts/post-edit/post-edit.component.html"),
            styles: [__webpack_require__("./src/app/core/posts/post-edit/post-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__post_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], PostEditComponent);
    return PostEditComponent;
}());



/***/ }),

/***/ "./src/app/core/posts/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/posts/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"card mb-4\">\n    <section class=\"card-title row justify-content-between m-2\">\n        <h4 class=\"col-lg-8\">{{post.titlePost}}</h4>\n        <h4 class=\"col-lg-3\">{{post.date}}</h4>\n    </section>\n    <section class=\"card-img-top images row\">\n        <img class=\"col-lg-6 h-100\"  *ngFor=\"let imagePath of post.imagePath\" [src]=\"imagePath\"/>\n    </section>\n       <div class=\"card-text text-justify m-3\" [innerHTML]=\"post.contentPost | sanitizeHtml\"></div>\n    <section class=\"row m-2 justify-content-between\">\n        <h4 class=\"col-lg-8 col-sm-8 col-xs-8\">{{post.author}}</h4>\n        <div class=\"row col-lg-4 col-sm-4 col-xs-4 justify-content-end\">\n            <ng-template [ngIf]=\"authService.isAuthenticated()\">\n                <a class=\"btn btn-success btn-width col-lg-6\" (click)=\"onEditPost()\">Edytuj</a> \n            </ng-template>\n        </div>\n    </section>\n</section>\n"

/***/ }),

/***/ "./src/app/core/posts/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_model__ = __webpack_require__("./src/app/core/posts/post/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__("./src/app/core/posts/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("./src/app/core/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = /** @class */ (function () {
    function PostComponent(postService, authService, router) {
        this.postService = postService;
        this.authService = authService;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.onEditPost = function () {
        this._id = this.postService.getId(this.id);
        this.router.navigate(['/', this._id, 'edit'], { queryParams: { id: this.id } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__post_model__["a" /* Post */])
    ], PostComponent.prototype, "post", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PostComponent.prototype, "id", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/core/posts/post/post.component.html"),
            styles: [__webpack_require__("./src/app/core/posts/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/core/posts/post/post.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(titlePost, date, author, contentPost, imagePath) {
        this.titlePost = titlePost;
        this.date = date;
        this.author = author;
        this.contentPost = contentPost;
        this.imagePath = imagePath;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/core/posts/post/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostService = /** @class */ (function () {
    function PostService(httpClient) {
        this.httpClient = httpClient;
        this.postsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    PostService.prototype.getPosts = function () {
        var _this = this;
        this.httpClient.get('/api/posts', {
            observe: 'body',
            responseType: 'json'
        })
            .map(function (posts) {
            for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                var post = posts_1[_i];
                if (!post['imagePath']) {
                    post['imagePath'] = [];
                }
            }
            return posts;
        })
            .subscribe(function (posts) {
            console.log(posts);
            _this.setPosts(posts);
        });
        return this.posts;
    };
    PostService.prototype.setPosts = function (posts) {
        this.posts = posts;
        this.postsChanged.next(this.posts.slice());
    };
    PostService.prototype.getPost = function (id) {
        return this.posts[id];
    };
    PostService.prototype.createPost = function (post) {
        var _this = this;
        this.httpClient.post('/api/posts', post)
            .subscribe(function (post) {
            _this.posts.splice(0, 0, post);
            _this.postsChanged.next(_this.posts.slice());
        });
        // this.postsChanged.next(this.posts.slice())
    };
    PostService.prototype.updatePost = function (newPost, _id) {
        this.httpClient.put('/api/posts/' + _id, newPost)
            .subscribe();
        this.postsChanged.next(this.posts.slice());
    };
    PostService.prototype.deletePost = function (index, _id) {
        this.httpClient.delete('/api/posts/' + _id)
            .subscribe();
        this.postsChanged.next(this.posts.slice());
    };
    PostService.prototype.getId = function (id) {
        return this.posts[id]._id;
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/core/posts/posts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"card p-2 border-top-0 border-light \">\n    <ng-template [ngIf]=\"authService.isAuthenticated()\">\n        <a class=\"btn btn-success\" routerLink=\"/new\">Nowy Post</a>\n    </ng-template>\n    <hr>\n    <app-post *ngFor=\"let postItem of posts; let i = index\"\n    [post]=\"postItem\" [id]=\"i\"></app-post>\n</section>\n"

/***/ }),

/***/ "./src/app/core/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_post_service__ = __webpack_require__("./src/app/core/posts/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/core/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService, authService) {
        this.postService = postService;
        this.authService = authService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.postService.postsChanged
            .subscribe(function (posts) {
            _this.posts = posts;
        });
        this.posts = this.postService.getPosts();
    };
    PostsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("./src/app/core/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/core/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__post_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/documents/document.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
var Document = /** @class */ (function () {
    function Document(name, url) {
        this.name = name;
        this.url = url;
    }
    return Document;
}());



/***/ }),

/***/ "./src/app/documents/document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentService = /** @class */ (function () {
    function DocumentService(httpClient) {
        this.httpClient = httpClient;
        this.documentsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    DocumentService.prototype.getDocuments = function () {
        var _this = this;
        this.httpClient.get('/api/documents', {
            observe: 'body',
            responseType: 'json'
        })
            .subscribe(function (documents) {
            console.log(documents);
            _this.setDocuments(documents);
        });
        return this.documents;
    };
    DocumentService.prototype.setDocuments = function (documents) {
        this.documents = documents;
        this.documentsChanged.next(this.documents.slice());
    };
    DocumentService.prototype.getDocument = function (id) {
        return this.documents[id];
    };
    DocumentService.prototype.createDocument = function (document) {
        var _this = this;
        this.httpClient.post('/api/documents', document)
            .subscribe(function (document) {
            _this.documents.splice(0, 0, document);
            _this.documentsChanged.next(_this.documents.slice());
        });
        // this.documentsChanged.next(this.documents.slice())
    };
    DocumentService.prototype.updateDocument = function (newDocument, _id) {
        this.httpClient.put('/api/documents/' + _id, newDocument)
            .subscribe();
        // this.documentsChanged.next(this.documents.slice())
    };
    DocumentService.prototype.deleteDocument = function (index, _id) {
        this.httpClient.delete('/api/documents/' + _id)
            .subscribe();
        this.documentsChanged.next(this.documents.slice());
    };
    DocumentService.prototype.getId = function (id) {
        return this.documents[id]._id;
    };
    DocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/documents/documents-edit/documents-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/documents-edit/documents-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" m-0 p-0\">\n    <form class=\"m-0 p-3\" [formGroup]=\"documentForm\" (ngSubmit)=\"onSubmit()\">\n        <h1 *ngIf=\"editMode; else createBlock\">Edytuj: {{document.name}}</h1>\n        <ng-template #createBlock><h1>Stwórz dokument:</h1></ng-template>\n        <div class=\"form-group\">\n            <label for=\"name\">Nazwa Dokumentu:</label>\n            <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\"/>\n        </div>\n        <div\n          class=\"alert alert-danger\" *ngIf=\"documentForm.get('name').hasError('required') && documentForm.get('name').touched\">\n          Brak nazwy.\n        </div>\n        <div class=\"form-group\">\n            <label for=\"url\">Adres internetowy dokumentu:</label>\n            <input class=\"form-control\" type=\"text\" name=\"url\" formControlName=\"url\"/>\n        </div>\n        <div\n          class=\"alert alert-danger\" *ngIf=\"documentForm.get('url').hasError('required') && documentForm.get('url').touched\">\n          Brak adresu.\n        </div>\n        <div class=\"form-group row m-2 d-flex justify-content-between\">\n            <button\n              class=\"btn btn-danger  col-md-2 mb-4\"\n              mwlConfirmationPopover\n              [popoverTitle]=\"popoverTitle\"\n            [popoverMessage]=\"popoverMessage\"\n            [confirmText]=\"confirmText\"\n            [cancelText]=\"cancelText\"\n            [placement]=\"placement\"\n            (confirm)=\"confirmClicked = true;  onDeleteDocuments()\"\n            (cancel)=\"cancelClicked = true\"\n            confirmButtonType=\"danger\"\n            cancelButtonType=\"default\"\n            (click)=\"confirmClicked = false; cancelClicked = false;\"\n            [appendToBody]=\"true\"\n            *ngIf=\"editMode\">\n              Usuń\n            </button>\n            <button class=\"btn btn-warning col-md-2 mb-4\" (click)=\"onCancel()\" type=\"button\">Anuluj</button>\n            <button class=\"btn btn-success col-md-2 mb-4\" type=\"submit\" [disabled]=\"documentForm.invalid\">Zatwierdź</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/documents/documents-edit/documents-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__document_model__ = __webpack_require__("./src/app/documents/document.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__document_service__ = __webpack_require__("./src/app/documents/document.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocumentsEditComponent = /** @class */ (function () {
    function DocumentsEditComponent(route, router, documentService, _location) {
        this.route = route;
        this.router = router;
        this.documentService = documentService;
        this._location = _location;
        this.editMode = false;
        this.show = false;
        this.placements = ['top', 'left', 'right', 'bottom'];
        this.popoverTitle = 'Czy jesteś pewny?';
        this.popoverMessage = 'Ale tak na 100% pewien?';
        this.confirmText = 'Tak';
        this.cancelText = 'Nie';
        this.confirmClicked = false;
        this.cancelClicked = false;
    }
    DocumentsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribeQueryParams = this.route.queryParams.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.subscribeParams = this.route.params
            .subscribe(function (params) {
            _this._id = params['_id'];
            _this.editMode = params['_id'] != null;
            _this.initForm();
        });
    };
    DocumentsEditComponent.prototype.onSubmit = function () {
        var newDocument = new __WEBPACK_IMPORTED_MODULE_4__document_model__["a" /* Document */](this.documentForm.value['name'], this.documentForm.value['url']);
        if (this.editMode) {
            this.documentService.updateDocument(newDocument, this._id);
        }
        else {
            console.log(newDocument);
            this.documentService.createDocument(newDocument);
        }
        this._location.back();
    };
    DocumentsEditComponent.prototype.initForm = function () {
        var name = '';
        var url = '';
        if (this.editMode) {
            this.document = this.documentService.getDocument(this.id);
            name = this.document.name;
            url = this.document.url;
        }
        this.documentForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'url': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](url, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
    };
    DocumentsEditComponent.prototype.onCancel = function () {
        this._location.back();
    };
    DocumentsEditComponent.prototype.onDeleteDocuments = function () {
        this._id = this.documentService.getId(this.id);
        this.documentService.deleteDocument(this.id, this._id);
        this.documentService.getDocuments();
        this.onCancel();
    };
    DocumentsEditComponent.prototype.ngOnDestroy = function () {
        this.subscribeParams.unsubscribe();
        this.subscribeQueryParams.unsubscribe();
    };
    DocumentsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-documents-edit',
            template: __webpack_require__("./src/app/documents/documents-edit/documents-edit.component.html"),
            styles: [__webpack_require__("./src/app/documents/documents-edit/documents-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__document_service__["a" /* DocumentService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], DocumentsEditComponent);
    return DocumentsEditComponent;
}());



/***/ }),

/***/ "./src/app/documents/documents.component.css":
/***/ (function(module, exports) {

module.exports = ".documents{\n    max-height: calc(100vh - 302px);\n    overflow-x: hidden;\n}"

/***/ }),

/***/ "./src/app/documents/documents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" text-center m-0 p-0\">\n\t<div class=\"documents m-0 p-2 border border-light\">\n\t\t<div class=\"row mx-auto my-0\" *ngFor=\"let document of documents\">\n\t\t\t<p class=\"mx-auto\">{{document.name}}</p>\n\t\t\t<a class=\"col-md-12 p-0\"  [href]=\"document.url\" [download]=\"document.name\">Pobierz<hr></a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/documents/documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document_service__ = __webpack_require__("./src/app/documents/document.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent(documentService) {
        this.documentService = documentService;
    }
    DocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.documentService.documentsChanged
            .subscribe(function (documents) {
            _this.documents = documents;
        });
        this.documents = this.documentService.getDocuments();
    };
    DocumentsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-documents',
            template: __webpack_require__("./src/app/documents/documents.component.html"),
            styles: [__webpack_require__("./src/app/documents/documents.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__document_service__["a" /* DocumentService */]])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "header {\n    z-index: 99;\n    height: 122px;\n}\nheader img {\n\twidth: 300px;\n\t-webkit-filter: contrast(140%) invert(100%) grayscale(100%) drop-shadow(8px 8px 10px #d4d8dd);\n\t        filter: contrast(140%) invert(100%) grayscale(100%) drop-shadow(8px 8px 10px #d4d8dd);\n}\n.signup{\n\t-webkit-filter: none;\n\t        filter: none;\n}\nheader a {\n\tfont-size: 1.4em;\n}\nheader li {\n\topacity: 0.9;\n}\nheader li:focus {\n\toutline: none;\n}\n.active ,header li:hover {\n\topacity: 1;\n\ttext-decoration: underline;\n\tcursor: pointer;\n\t-webkit-transition: opacity 0.4s, -webkit-text-decoration 0.4s;\n\ttransition: opacity 0.4s, -webkit-text-decoration 0.4s;\n\ttransition: opacity 0.4s, text-decoration 0.4s;\n\ttransition: opacity 0.4s, text-decoration 0.4s, -webkit-text-decoration 0.4s;\n}\n@media screen and (max-width: 992px) {\n\theader {\n\t\theight: 59px;\n\t}\n\theader img {\n\t\twidth: 100px;\n\t}\n\t.documents h4 {\n\t\tfont-size: 20px;\n\t}\n\theader a {\n\t\ttext-align: center;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.documents h4, .documents a {\n\t\tfont-size: 14px;\n\t}\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\t<nav class=\"navbar navbar-expand-lg fixed-top navbar-light bg-light\">\n\t  <a class=\"navbar-brand\" (click)=\"onSigninOrLogout()\"><img src=\"./../../../assets/logo.png\"/></a>\n\t  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t    <span class=\"navbar-toggler-icon\"></span>\n\t  </button>\n\t\n\t  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t    <ul class=\"navbar-nav mr-auto\">\n\t    <ng-template [ngIf]=\"authService.isAuthenticated()\">\n\t    \t<li class=\"nav-item\" (click)=\"onMenuClick()\">\n\t    \t\t<a class=\"nav-link\">Menu</a>\n\t    \t</li>\n\t    </ng-template>\n\t    </ul>\n\t    <ul class=\"navbar-nav ml-auto\">\n\t      <li routerLinkActive=\"active\" routerLink=\"/home\" class=\"nav-item\">\n\t        <a class=\"nav-link\">Informacje</a>\n\t      </li>\n\t      <li routerLinkActive=\"active\" routerLink=\"/about\" class=\"nav-item\">\n\t        <a class=\"nav-link\">Powitanie</a>\n\t      </li>\n\t      <li routerLinkActive=\"active\" routerLink=\"/albums\" class=\"nav-item\">\n\t        <a class=\"nav-link\">Albumy</a>\n\t      </li>\n\t      <li routerLinkActive=\"active\" class=\"nav-item\" (click)=\"onDocumentClick()\">\n\t        <a class=\"nav-link\">Dokumenty</a>\n\t      </li>\n\t    </ul>\n\t  </div>\n\t</nav>\n</header>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_visibility_service__ = __webpack_require__("./src/app/component-visibility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_auth_service__ = __webpack_require__("./src/app/core/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(componentVisibilityService, router, authService) {
        this.componentVisibilityService = componentVisibilityService;
        this.router = router;
        this.authService = authService;
        this.documentState = false;
        this.menuState = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isAuthenticated) {
            this.signinState = false;
        }
        else {
            this.signinState = true;
        }
        this.componentVisibilityService.currentStateOfDocument.subscribe(function (documentState) { return _this.documentState = documentState; });
        this.componentVisibilityService.currentStateOfMenu.subscribe(function (menuState) { return _this.menuState = menuState; });
    };
    NavbarComponent.prototype.onDocumentClick = function () {
        this.documentState = !this.documentState;
        this.componentVisibilityService.changeDocumentState(this.documentState);
        this.componentVisibilityService.onAnimateDocument(this.documentState);
    };
    NavbarComponent.prototype.onMenuClick = function () {
        this.menuState = !this.menuState;
        this.componentVisibilityService.changeMenuState(this.menuState);
        this.componentVisibilityService.onAnimateMenu(this.menuState);
    };
    NavbarComponent.prototype.onSigninOrLogout = function () {
        if (this.signinState) {
            this.router.navigate(['/signin']);
            this.signinState = false;
        }
        else {
            this.authService.logout();
            this.router.navigate(['/home']);
            this.signinState = true;
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__component_visibility_service__["a" /* ComponentVisibilityService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__core_auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/sanitize-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sanitizeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" w-100 h-100 m-0 p-0\">\n    <div class=\"row about m-0\">\n        \n            <div class=\"col-md-12\" *ngIf=\"menuMode == 'menu'\">\n                <h4 class=\"my-4 text-center\">Menu Główne:</h4>\n                <div class=\"btn btn-success w-100 my-2\" (click)=\"menuMode = 'posts'\">Lista postów</div>\n                <div class=\"btn btn-success w-100 my-2\" (click)=\"menuMode = 'albums'\">Lista albumów</div>\n                <div class=\"btn btn-success w-100 my-2\" (click)=\"menuMode = 'documents'\">Lista dokumentów</div>\n                <div class=\"btn btn-success w-100 my-2\" routerLink=\"about/edit\">Edytuj Powitanie</div>\n            </div>\n            \n            <div class=\"col-md-12\" *ngIf=\"menuMode ==  'albums'\">\n                <div class=\"header\">\n                    <h4 class=\"my-4 text-center\">Albumy:</h4>\n                    <div class=\"btn btn-success w-100 my-2\" (click)=\"menuMode =  'menu'\">Wróć do Menu</div>\n                    <div class=\"btn btn-success w-100 my-2\" routerLink=\"/albums/new\">Nowy Album</div>\n                </div>\n                <div class=\"row p-2 justify-content-around scroll albums\">\n                    <div *ngFor=\"let album of albums; let iAlbums = index\" class=\"card mb-2\" style=\"width: 18rem;\" (click)=\"onAlbumEdit(iAlbums)\">\n                      <img class=\"card-img-top\" [src]=\"album.img\" [alt]=\"album.caption\">\n                      <div class=\"card-body\">\n                        <h4 class=\"card-title\">{{album.caption}}</h4>\n                      </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"col-md-12\" *ngIf=\"menuMode ==  'posts'\">\n                <div class=\"menu-header\">\n                    <h4 class=\"my-4 text-center\">Posty:</h4>\n                    <div class=\"btn btn-success w-100 my-2\" (click)=\"menuMode =  'menu'\">Wróć do Menu</div>\n                    <div class=\"btn btn-success w-100 my-2\" routerLink=\"/new\">Nowy Post</div>\n                </div>\n                <div class=\"row p-2 justify-content-around scroll\">\n                    <ul class=\"list-group\">\n                       <li *ngFor=\"let post of posts; let iPosts = index\"\n                       class=\"list-group-item list-group-item-action\" (click)=\"onPostEdit(iPosts, post)\">\n                       <div [class.roadRunner]=\"post === selectedPost\"> <strong>{{post.titlePost}}</strong> - {{post.date}}</div></li>\n                    </ul>\n                </div>\n            </div>\n            \n            <div class=\"col-md-12\" *ngIf=\"menuMode ==  'documents'\">\n                <div class=\"menu-header\">\n                    <h4 class=\"my-4 text-center\">Dokumenty:</h4>\n                    <div class=\"btn btn-success w-100 my-2\" (click)=\"menuMode =  'menu'\">Wróć do Menu</div>\n                    <div class=\"btn btn-success w-100 my-2\" routerLink=\"/documents/new\">Nowy Dokument</div>\n                </div>\n                <div class=\"row p-2 justify-content-around scroll\">\n                    <ul class=\"list-group\">\n                       <li *ngFor=\"let document of documents; let iDocuments = index\"\n                       class=\"list-group-item list-group-item-action\" (click)=\"onDocumentEdit(iDocuments, document)\">\n                           <div [class.roadRunner]=\"document === selectedDocument\"> <strong>{{document.name}}</strong></div></li>\n                    </ul>\n                </div>\n            </div>\n            \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_posts_post_post_service__ = __webpack_require__("./src/app/core/posts/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_albums_albums_service__ = __webpack_require__("./src/app/core/albums/albums.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documents_document_service__ = __webpack_require__("./src/app/documents/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_about_about_service__ = __webpack_require__("./src/app/core/about/about.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = /** @class */ (function () {
    function UserComponent(router, postService, albumsService, documentService, aboutService) {
        this.router = router;
        this.postService = postService;
        this.albumsService = albumsService;
        this.documentService = documentService;
        this.aboutService = aboutService;
        this.menuMode = "menu";
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionPosts = this.postService.postsChanged
            .subscribe(function (posts) {
            _this.posts = posts;
        });
        this.posts = this.postService.getPosts();
        this.subscriptionDocuments = this.documentService.documentsChanged
            .subscribe(function (documents) {
            _this.documents = documents;
        });
        this.documents = this.documentService.getDocuments();
        this.subscriptionAlbums = this.albumsService.albumsChanged
            .subscribe(function (albums) {
            _this.albums = albums;
        });
        this.albums = this.albumsService.getAlbums();
        this.subscriptionAbout = this.aboutService.aboutsChanged
            .subscribe(function (abouts) {
            _this.abouts = abouts;
        });
        this.abouts = this.aboutService.getAbouts();
    };
    UserComponent.prototype.onAlbumEdit = function (iAlbum) {
        var _albumId = this.albumsService.getId(iAlbum);
        this.router.navigate(['/albums', _albumId, 'edit'], { queryParams: { id: iAlbum } });
    };
    UserComponent.prototype.onPostEdit = function (iPost, post) {
        this.selectedPost = post;
        var _id = this.postService.getId(iPost);
        this.router.navigate(['/', _id, 'edit'], { queryParams: { id: iPost } });
    };
    UserComponent.prototype.onDocumentEdit = function (iDocument, document) {
        this.selectedDocument = document;
        var _documentsId = this.documentService.getId(iDocument);
        this.router.navigate(['/documents/', _documentsId, 'edit'], { queryParams: { id: iDocument } });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.subscriptionPosts.unsubscribe();
        this.subscriptionAlbums.unsubscribe();
        this.subscriptionDocuments.unsubscribe();
        this.subscriptionAbout.unsubscribe();
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_posts_post_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3__core_albums_albums_service__["a" /* AlbumsService */],
            __WEBPACK_IMPORTED_MODULE_4__documents_document_service__["a" /* DocumentService */],
            __WEBPACK_IMPORTED_MODULE_5__core_about_about_service__["a" /* AboutService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
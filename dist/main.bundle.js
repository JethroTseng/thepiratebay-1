webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <app-torrent></app-torrent>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_piratebay_service__ = __webpack_require__("../../../../../src/app/services/piratebay.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_piratebay_service__["a" /* PiratebayService */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_piratebay_service__ = __webpack_require__("../../../../../src/app/services/piratebay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_torrents_torrent_component__ = __webpack_require__("../../../../../src/app/components/torrents/torrent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_display_display_component__ = __webpack_require__("../../../../../src/app/components/display/display.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_torrents_torrent_component__["a" /* TorrentComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_display_display_component__["a" /* DisplayComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_piratebay_service__["a" /* PiratebayService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to The Pirate Bay Angular app.</h1>\r\n\r\n<p align=\"center\" *ngIf=\"loader\">Loading ...</p>\r\n\r\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/display/display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_piratebay_service__ = __webpack_require__("../../../../../src/app/services/piratebay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(_http, _piratebay) {
        this._http = _http;
        this._piratebay = _piratebay;
        this.user = [];
    }
    DisplayComponent.prototype.getTorrents = function () {
        var _this = this;
        this.loader = true;
        var torrentUrl = "https://tpbc.herokuapp.com/recent/";
        this.repos = this._http.get(torrentUrl).map(function (res) { return res; }).subscribe(function (res2) {
            console.log('Response: ' + res2);
            _this.torrents = res2;
        });
        this.loader = false;
    };
    DisplayComponent.prototype.getTopTorrents = function () {
        var _this = this;
        this.loader = true;
        var torrentUrl = "https://tpbc.herokuapp.com/top/0";
        this.repos = this._http.get(torrentUrl).map(function (res) { return res; }).subscribe(function (res2) {
            console.log('Response: ' + res2);
            _this.torrents = res2;
        });
        this.loader = false;
    };
    DisplayComponent.prototype.getTop48Torrents = function () {
        var _this = this;
        this.loader = true;
        var torrentUrl = "https://tpbc.herokuapp.com/top48h/0";
        this.repos = this._http.get(torrentUrl).map(function (res) { return res; }).subscribe(function (res2) {
            console.log('Response: ' + res2);
            _this.torrents = res2;
        });
        this.loader = false;
    };
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-display',
            template: __webpack_require__("../../../../../src/app/components/display/display.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_piratebay_service__["a" /* PiratebayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_piratebay_service__["a" /* PiratebayService */]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"#\">Pirate Search</a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav\">\r\n            <li class=\"active\"><a href=\"#\">Home</a></li>\r\n            <li><a href=\"#\">About</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/torrents/torrent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.thumbnail {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/torrents/torrent.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Pirate Search...</h1>\r\n<small class=\"text-warning\">Worlds number 1 Torrent search Engine</small>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<ul class=\"nav nav-tabs\">\r\n    <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Search</a></li>\r\n    <li><a data-toggle=\"tab\" href=\"#menu1\">Recent Torrents</a></li>\r\n    <li><a data-toggle=\"tab\" href=\"#menu2\">Top Torrents</a></li>\r\n    <li><a data-toggle=\"tab\" href=\"#menu3\">Top 48hours Torrents</a></li>\r\n    <li><a data-toggle=\"tab\" href=\"#menu4\">Advanced search</a></li>\r\n</ul>\r\n\r\n<div class=\"tab-content\">\r\n    <!-- <SEARCH TAB> -->\r\n    <div id=\"home\" class=\"tab-pane fade in active\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <br><br>\r\n                <input class=\"form-control\" id=\"searchbox\" (keyup)=\"search2()\" name=\"searchTerm\" [(ngModel)]=\"searchTerm\" type=\"text\" placeholder=\"Search torrents...\">\r\n                <br>\r\n                <!-- <button (keyup)=\"search2($event)\" class=\"btn btn-primary\">Search</button> -->\r\n            </div>\r\n        </form>\r\n        <br><br>\r\n        <div *ngIf=\"searchTorrents\">\r\n            <div *ngFor=\"let searchResponse of searchTorrents\">\r\n                <div class=\"panel panel-info\">\r\n                    <div class=\"panel-heading\">\r\n                        <h2 class=\"panel-title\">\r\n                            {{searchResponse.title}}\r\n                        </h2>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h4>\r\n                            <fa style=\"color:red\" name=\"bars\"></fa> Category:\r\n                            <span> {{searchResponse.category}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"magnet\"></fa> Magnet:\r\n                            <span> <a href=\"{{searchResponse.magnet}}\" class=\"btn btn-primary\">Magnet Link</a></span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"users\"></fa> Seeds:\r\n                            <span> {{searchResponse.seeds}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"upload\"></fa> Uploaded at:\r\n                            <span> {{searchResponse.time}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"user\"></fa> Uploader:\r\n                            <span> {{searchResponse.uploader}}</span>\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- </search> -->\r\n\r\n    <!-- <RECENT TORRENTS> -->\r\n    <div id=\"menu1\" class=\"tab-pane fade\">\r\n        <br>\r\n        <div class=\"row\" style=\"padding-top: 10px\">\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTorrents()\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"tv\" style=\"color:orangered\"></fa> Display Recent Torrents\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"torrents\">\r\n            <div *ngFor=\"let torrent of torrents\">\r\n                <div class=\"panel panel-info\">\r\n                    <div class=\"panel-heading\">\r\n                        <h2 class=\"panel-title\">\r\n                            {{torrent.title}}\r\n                        </h2>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h4>\r\n                            <fa style=\"color:red\" name=\"bars\"></fa> Category:\r\n                            <span> {{torrent.category}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"magnet\"></fa> Magnet:\r\n                            <span> <a href=\"{{torrent.magnet}}\" class=\"btn btn-primary\">Magnet Link</a></span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"users\"></fa> Seeds:\r\n                            <span> {{torrent.seeds}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"upload\"></fa> Uploaded at:\r\n                            <span> {{torrent.time}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"user\"></fa> Uploader:\r\n                            <span> {{torrent.uploader}}</span>\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- </RECENT TORRENTS> -->\r\n\r\n    <!-- <TOP TORRENTS> -->\r\n    <div id=\"menu2\" class=\"tab-pane fade\">\r\n        <br>\r\n        <div class=\"row\" style=\"padding-top: 20px\">\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTopTorrents(0)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"home\" style=\"color: blue;\"></fa> All\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTopTorrents(100)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"music\" style=\"color: brown;\"></fa> Audio\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTopTorrents(200)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"film\" style=\"color: fuchsia;\"></fa> Video\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- <2nd row> -->\r\n        <div class=\"row\" style=\"padding-top: 20px\">\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTopTorrents(300)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"rocket\" style=\"color: red;\"></fa> Applications\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTopTorrents(400)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"gamepad\" style=\"color: blueviolet;\"></fa> Games\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTopTorrents(500)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"film\" style=\"color: palevioletred;\"></fa> ...\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- <3rd row> -->\r\n        <div class=\"row\" style=\"padding-top: 20px\">\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTopTorrents(600)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"braille\" style=\"color: green;\"></fa> Other\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <!-- </rows> -->\r\n\r\n        <div *ngIf=\"topTorrents\">\r\n            <div *ngFor=\"let topTorrent of topTorrents\">\r\n                <div class=\"panel panel-info\">\r\n                    <div class=\"panel-heading\">\r\n                        <h2 class=\"panel-title\">\r\n                            {{topTorrent.title}}\r\n                        </h2>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h4>\r\n                            <fa style=\"color:red\" name=\"bars\"></fa> Category:\r\n                            <span> {{topTorrent.category}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"magnet\"></fa> Magnet:\r\n                            <span> <a href=\"{{topTorrent.magnet}}\" class=\"btn btn-primary\">Magnet Link</a></span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"users\"></fa> Seeds:\r\n                            <span> {{topTorrent.seeds}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"upload\"></fa> Uploaded at:\r\n                            <span> {{topTorrent.time}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"user\"></fa> Uploader:\r\n                            <span> {{topTorrent.uploader}}</span>\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- </TOP TORRENTS> -->\r\n\r\n    <!-- <TOP 48HOURS TORRENTS> -->\r\n    <div id=\"menu3\" class=\"tab-pane fade\">\r\n        <br>\r\n        <div class=\"row\" style=\"padding-top: 20px\">\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTop48Torrents(0)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"home\" style=\"color: blue;\"></fa>All\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTop48Torrents(100)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"music\" style=\"color: brown;\"></fa>Audio\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTop48Torrents(200)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"film\" style=\"color: hotpink;\"></fa>Video\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <!-- <2nd row> -->\r\n        <div class=\"row\" style=\"padding-top: 20px\">\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTop48Torrents(300)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"rocket\" style=\"color: red;\"></fa>Applications\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTop48Torrents(400)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"gamepad\" style=\"color: purple;\"></fa>Games\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTop48Torrents(500)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"film\" style=\"color: pink;\"></fa>...\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <!-- <3rd row> -->\r\n        <div class=\"row\" style=\"padding-top: 20px\">\r\n            <div class=\"col-xs-4\">\r\n                <a class=\"thumbnail\" (click)=\"getTop48Torrents(600)\">\r\n                    <div class=\"caption\">\r\n                        <h3>\r\n                            <fa name=\"braille\" style=\"color: green;\"></fa>Others\r\n                        </h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"top40Torrents\">\r\n            <div *ngFor=\"let top40Torrent of top40Torrents\">\r\n                <div class=\"panel panel-info\">\r\n                    <div class=\"panel-heading\">\r\n                        <h2 class=\"panel-title\">\r\n                            {{top40Torrent.title}}\r\n                        </h2>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h4>\r\n                            <fa style=\"color:red\" name=\"bars\"></fa> Category:\r\n                            <span> {{top40Torrent.category}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"magnet\"></fa> Magnet:\r\n                            <span> <a href=\"{{top40Torrent.magnet}}\" class=\"btn btn-primary\">Magnet Link</a></span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"users\"></fa> Seeds:\r\n                            <span> {{top40Torrent.seeds}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"upload\"></fa> Uploaded at:\r\n                            <span> {{top40Torrent.time}}</span>\r\n                        </h4>\r\n                        <h4>\r\n                            <fa name=\"user\"></fa> Uploader:\r\n                            <span> {{top40Torrent.uploader}}</span>\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- </TOP 48HOURS TORRENTS> -->\r\n\r\n    <!-- <ADVANCED SEARCH TAB> -->\r\n    <div id=\"menu4\" class=\"tab-pane fade\">\r\n        <br><br>\r\n        <h1 class=\"text-center text-info\">Coming Soon...</h1>\r\n        <br><br>\r\n    </div>\r\n    <!-- </ADVANCED SEARCH TAB> -->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/torrents/torrent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorrentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_piratebay_service__ = __webpack_require__("../../../../../src/app/services/piratebay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TorrentComponent = /** @class */ (function () {
    function TorrentComponent(_http, _piratebay) {
        this._http = _http;
        this._piratebay = _piratebay;
        this.user = [];
    }
    TorrentComponent.prototype.getTorrents = function () {
        var _this = this;
        this.loader = true;
        var torrentUrl = "https://tpbc.herokuapp.com/recent/";
        this.torrent = this._http.get(torrentUrl).map(function (res) { return res; }).subscribe(function (res2) {
            // console.log('Response: ' + res2);
            _this.torrents = res2;
        });
        this.loader = false;
    };
    TorrentComponent.prototype.getTopTorrents = function (x) {
        var _this = this;
        this.loader = true;
        var torrentUrl = "https://tpbc.herokuapp.com/top/" + x + "/";
        this.torrent = this._http.get(torrentUrl).map(function (res) { return res; }).subscribe(function (res2) {
            // console.log('Response: ' + res2);
            _this.topTorrents = res2;
        });
        this.loader = false;
    };
    TorrentComponent.prototype.getTop48Torrents = function (y) {
        var _this = this;
        this.loader = true;
        var torrentUrl = "https://tpbc.herokuapp.com/top48h/" + y + "/";
        this.torrent = this._http.get(torrentUrl).map(function (res) { return res; }).subscribe(function (res2) {
            // console.log('Response: ' + res2);
            _this.top40Torrents = res2;
        });
        this.loader = false;
    };
    TorrentComponent.prototype.search2 = function () {
        var _this = this;
        console.log(this.searchTerm);
        this.loader = true;
        if (this.searchTerm.length > 0 || this.searchTerm !== ' ') {
            var torrentUrl = "https://tpbc.herokuapp.com/search/" + this.searchTerm + "/";
            this.torrent = this._http.get(torrentUrl).map(function (res) { return res; }).subscribe(function (res2) {
                _this.searchTorrents = res2;
            });
            this.loader = false;
        }
    };
    TorrentComponent.prototype.searchAdvanced = function () { };
    TorrentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-torrent',
            template: __webpack_require__("../../../../../src/app/components/torrents/torrent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/torrents/torrent.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_piratebay_service__["a" /* PiratebayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_piratebay_service__["a" /* PiratebayService */]])
    ], TorrentComponent);
    return TorrentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/piratebay.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiratebayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PiratebayService = /** @class */ (function () {
    function PiratebayService(_http) {
        this._http = _http;
        console.log('Piratebay service ready');
    }
    PiratebayService.prototype.getTorrents = function () {
        var torrentUrl = "https://tpbc.herokuapp.com/recent/";
        return this._http.get(torrentUrl);
    };
    PiratebayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PiratebayService);
    return PiratebayService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".intro{\r\n    text-align: center;\r\n}\r\n\r\n.intro a{\r\n    color: initial;\r\n}\r\n\r\n.excercise {\r\n    border: 1px solid gray;\r\n    padding: 1.5em 0.7em;\r\n    margin: 1.5em 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"intro\">\r\n        <h1>Angular 6 Excercises</h1>\r\n        <h4> Udemy, <a href=\"https://www.udemy.com/the-complete-guide-to-angular-2\">Angular 6 - The Complete Guide</a></h4>\r\n    </div>\r\n    <div class=\"row excercise\" id=\"directives\">\r\n        <app-directives></app-directives>\r\n    </div>\r\n    <div class=\"row excercise\" id=\"server-console\">\r\n        <app-servers-2></app-servers-2>\r\n    </div>\r\n    <div class=\"row excercise\" id=\"server-console\">\r\n        <app-servers-1></app-servers-1>\r\n    </div>\r\n    <div class=\"row excercise\" id=\"basic-assigment-1\">\r\n        <app-basic-assigment-1></app-basic-assigment-1>\r\n    </div>\r\n    <div class=\"row excercise\" id=\"basic-assigment-2\">\r\n        <app-basic-assigment-2></app-basic-assigment-2>\r\n    </div>\r\n    <div class=\"row excercise\" id=\"basic-assigment-3\">\r\n        <app-basic-assigment-3></app-basic-assigment-3>\r\n    </div>\r\n    <div class=\"row excercise\" id=\"assigment-cmp-databinding\">\r\n        <app-assigment-cmp-databinding></app-assigment-cmp-databinding>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_basic_assigment_1_basic_assigment_1_component__ = __webpack_require__("./src/app/components/basic-assigment-1/basic-assigment-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_basic_assigment_1_success_alert_success_alert_component__ = __webpack_require__("./src/app/components/basic-assigment-1/success-alert/success-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_basic_assigment_1_warning_alert_warning_alert_component__ = __webpack_require__("./src/app/components/basic-assigment-1/warning-alert/warning-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_basic_assigment_2_basic_assigment_2_component__ = __webpack_require__("./src/app/components/basic-assigment-2/basic-assigment-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_basic_assigment_3_basic_assigment_3_component__ = __webpack_require__("./src/app/components/basic-assigment-3/basic-assigment-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_server_console_1_server_server_component__ = __webpack_require__("./src/app/components/server-console-1/server/server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_server_console_1_servers_servers_component__ = __webpack_require__("./src/app/components/server-console-1/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_server_console_1_servers_console_servers_console_component__ = __webpack_require__("./src/app/components/server-console-1/servers-console/servers-console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_server_console_2_server_console_2_component__ = __webpack_require__("./src/app/components/server-console-2/server-console-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_server_console_2_cockpit_cockpit_component__ = __webpack_require__("./src/app/components/server-console-2/cockpit/cockpit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_server_console_2_server_element_server_element_component__ = __webpack_require__("./src/app/components/server-console-2/server-element/server-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_assigment_cmp_databinding_assigment_cmp_databinding_component__ = __webpack_require__("./src/app/components/assigment-cmp-databinding/assigment-cmp-databinding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_assigment_cmp_databinding_game_control_game_control_component__ = __webpack_require__("./src/app/components/assigment-cmp-databinding/game-control/game-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_assigment_cmp_databinding_odd_odd_component__ = __webpack_require__("./src/app/components/assigment-cmp-databinding/odd/odd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_assigment_cmp_databinding_even_even_component__ = __webpack_require__("./src/app/components/assigment-cmp-databinding/even/even.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_directives_directives_component__ = __webpack_require__("./src/app/components/directives/directives.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_directives_basic_highlight_basic_highlight_directive__ = __webpack_require__("./src/app/components/directives/basic-highlight/basic-highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_directives_better_highlight_better_highlight_directive__ = __webpack_require__("./src/app/components/directives/better-highlight/better-highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_directives_unless_directive__ = __webpack_require__("./src/app/components/directives/unless.directive.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_basic_assigment_1_basic_assigment_1_component__["a" /* BasicAssigment1Component */],
                __WEBPACK_IMPORTED_MODULE_6__components_basic_assigment_1_success_alert_success_alert_component__["a" /* SuccessAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_basic_assigment_1_warning_alert_warning_alert_component__["a" /* WarningAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_basic_assigment_2_basic_assigment_2_component__["a" /* BasicAssigment2Component */],
                __WEBPACK_IMPORTED_MODULE_9__components_basic_assigment_3_basic_assigment_3_component__["a" /* BasicAssigment3Component */],
                __WEBPACK_IMPORTED_MODULE_10__components_server_console_1_server_server_component__["a" /* ServerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_server_console_1_servers_servers_component__["a" /* ServersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_server_console_1_servers_console_servers_console_component__["a" /* ServersConsoleComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_server_console_2_server_console_2_component__["a" /* ServerConsole2Component */],
                __WEBPACK_IMPORTED_MODULE_14__components_server_console_2_cockpit_cockpit_component__["a" /* CockpitComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_server_console_2_server_element_server_element_component__["a" /* ServerElementComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_assigment_cmp_databinding_assigment_cmp_databinding_component__["a" /* AssigmentCmpDatabindingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_assigment_cmp_databinding_game_control_game_control_component__["a" /* GameControlComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_assigment_cmp_databinding_odd_odd_component__["a" /* OddComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_assigment_cmp_databinding_even_even_component__["a" /* EvenComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_directives_directives_component__["a" /* DirectivesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_directives_basic_highlight_basic_highlight_directive__["a" /* BasicHighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_22__components_directives_better_highlight_better_highlight_directive__["a" /* BetterHighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_23__components_directives_unless_directive__["a" /* UnlessDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/assigment-cmp-databinding.component.css":
/***/ (function(module, exports) {

module.exports = ".odd {\r\n    color: purple;\r\n}\r\n\r\n.even {\r\n    color: seagreen;\r\n}"

/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/assigment-cmp-databinding.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"answer\">\r\n    <div class=\"col-xs-5\">\r\n        <h4>Assigment 4 - Databinding</h4>\r\n        <app-game-control (intervalFired)=\"onIntervalFired($event)\"></app-game-control>\r\n        <div class=\"col-xs-3\">\r\n            <app-odd *ngFor=\"let oddNumber of oddNumbers\">\r\n                <p class=\"odd\">{{ oddNumber }} is odd</p>\r\n            </app-odd>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n            <app-even *ngFor=\"let evenNumber of evenNumbers\">\r\n                <p class=\"even\">{{ evenNumber }} is even</p>\r\n            </app-even>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-7\">\r\n        <h3>Bind it!</h3>\r\n        <ol>\r\n            <li>Create three new components: GameControl, Odd and Even</li>\r\n            <li>The GameControl Component should have buttons to start and stop the game</li>\r\n            <li>When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())</li>\r\n            <li>The event should be listenable from outside the component</li>\r\n            <li>When stopping the game, no more events should get emitted (clearInterval(ref))</li>\r\n            <li>A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)</li>\r\n            <li>Simply output Odd - NUMBER or Even - NUMBER in the two components</li>\r\n            <li>Style the element (e.g. paragraph) holding your output text differently in both components</li>\r\n        </ol>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/assigment-cmp-databinding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssigmentCmpDatabindingComponent; });
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

var AssigmentCmpDatabindingComponent = /** @class */ (function () {
    function AssigmentCmpDatabindingComponent() {
        this.oddNumbers = [];
        this.evenNumbers = [];
    }
    AssigmentCmpDatabindingComponent.prototype.ngOnInit = function () {
    };
    AssigmentCmpDatabindingComponent.prototype.onIntervalFired = function (firedNumber) {
        if (firedNumber % 2 === 0) {
            this.evenNumbers.push(firedNumber);
        }
        else {
            this.oddNumbers.push(firedNumber);
        }
    };
    AssigmentCmpDatabindingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-assigment-cmp-databinding',
            template: __webpack_require__("./src/app/components/assigment-cmp-databinding/assigment-cmp-databinding.component.html"),
            styles: [__webpack_require__("./src/app/components/assigment-cmp-databinding/assigment-cmp-databinding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssigmentCmpDatabindingComponent);
    return AssigmentCmpDatabindingComponent;
}());



/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/even/even.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/even/even.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/even/even.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvenComponent; });
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

var EvenComponent = /** @class */ (function () {
    function EvenComponent() {
    }
    EvenComponent.prototype.ngOnInit = function () {
    };
    EvenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-even',
            template: __webpack_require__("./src/app/components/assigment-cmp-databinding/even/even.component.html"),
            styles: [__webpack_require__("./src/app/components/assigment-cmp-databinding/even/even.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EvenComponent);
    return EvenComponent;
}());



/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/game-control/game-control.component.css":
/***/ (function(module, exports) {

module.exports = "button {\r\n    width: 80px;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/game-control/game-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons\">\r\n    <button class=\"btn btn-primary start\" (click)=\"onStart()\">Start</button>\r\n    <button class=\"btn btn-danger stop\" (click)=\"onStop()\">Stop</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/game-control/game-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameControlComponent; });
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

var GameControlComponent = /** @class */ (function () {
    function GameControlComponent() {
        this.intervalFired = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.lastNumber = 0;
    }
    GameControlComponent.prototype.ngOnInit = function () {
    };
    GameControlComponent.prototype.onStart = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.intervalFired.emit(_this.lastNumber + 1);
            _this.lastNumber++;
        }, 1000);
    };
    GameControlComponent.prototype.onStop = function () {
        clearInterval(this.interval);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], GameControlComponent.prototype, "intervalFired", void 0);
    GameControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game-control',
            template: __webpack_require__("./src/app/components/assigment-cmp-databinding/game-control/game-control.component.html"),
            styles: [__webpack_require__("./src/app/components/assigment-cmp-databinding/game-control/game-control.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameControlComponent);
    return GameControlComponent;
}());



/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/odd/odd.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/odd/odd.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/components/assigment-cmp-databinding/odd/odd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OddComponent; });
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

var OddComponent = /** @class */ (function () {
    function OddComponent() {
    }
    OddComponent.prototype.ngOnInit = function () {
    };
    OddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-odd',
            template: __webpack_require__("./src/app/components/assigment-cmp-databinding/odd/odd.component.html"),
            styles: [__webpack_require__("./src/app/components/assigment-cmp-databinding/odd/odd.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OddComponent);
    return OddComponent;
}());



/***/ }),

/***/ "./src/app/components/basic-assigment-1/basic-assigment-1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"answer\">\r\n  <div class=\"col-xs-3\">\r\n    <h4>Basic assigment 1</h4>\r\n      <h5>Messages:</h5>\r\n      <app-success-alert></app-success-alert>\r\n      <app-warning-alert></app-warning-alert>\r\n    </div>\r\n\r\n  <div class=\"col-xs-9\">\r\n    <ol>\r\n      <li>Create two new Components (manually or with CLI): WarningAlert and SuccessAlert</li>\r\n      <li>Output them beneath each other in the AppComponent</li>\r\n      <li>Output a warning or success message in the Components</li>\r\n      <li>Style the Components appropriately (maybe some red/ green text?)</li>\r\n    </ol>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/basic-assigment-1/basic-assigment-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAssigment1Component; });
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

var BasicAssigment1Component = /** @class */ (function () {
    function BasicAssigment1Component() {
    }
    BasicAssigment1Component.prototype.ngOnInit = function () {
    };
    BasicAssigment1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-basic-assigment-1',
            template: __webpack_require__("./src/app/components/basic-assigment-1/basic-assigment-1.component.html"),
            styles: [__webpack_require__("./src/styles/answer.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicAssigment1Component);
    return BasicAssigment1Component;
}());



/***/ }),

/***/ "./src/app/components/basic-assigment-1/success-alert/success-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessAlertComponent; });
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

var SuccessAlertComponent = /** @class */ (function () {
    function SuccessAlertComponent() {
    }
    SuccessAlertComponent.prototype.ngOnInit = function () {
    };
    SuccessAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-success-alert',
            template: '<p class="message">Success, congratulations!</p>',
            styles: ["p.message {\n    color: green;\n}"]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessAlertComponent);
    return SuccessAlertComponent;
}());



/***/ }),

/***/ "./src/app/components/basic-assigment-1/warning-alert/warning-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarningAlertComponent; });
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

var WarningAlertComponent = /** @class */ (function () {
    function WarningAlertComponent() {
    }
    WarningAlertComponent.prototype.ngOnInit = function () {
    };
    WarningAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-warning-alert',
            template: '<p class="message">Error, error, something went wrong!</p>',
            styles: ["p.message {\n    color: red;\n}"]
        }),
        __metadata("design:paramtypes", [])
    ], WarningAlertComponent);
    return WarningAlertComponent;
}());



/***/ }),

/***/ "./src/app/components/basic-assigment-2/basic-assigment-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"answer\">\r\n  <div class=\"col-xs-3\">\r\n    <h4>Basic assigment 2</h4>\r\n    <h5>Reset Password:</h5>\r\n    <label for=\"username\">Username: {{ username }}</label>\r\n    <input \r\n    type=\"text\" \r\n    class=\"form-control\" \r\n    [(ngModel)]=\"username\">\r\n    <button \r\n    class=\"btn btn-primary\" \r\n    [disabled]=\"usernameIsEmpty()\" \r\n    (click)=\"onResetPassword()\">\r\n      Reset password</button>\r\n    <p>{{ message }}</p>\r\n  </div>\r\n  <div class=\"col-xs-9\">\r\n    <ol>\r\n      <li>Add a Input field which updates a property ('username') via Two-Way-Binding</li>\r\n      <li>Output the username property via String Interpolation (in a paragraph below the input)</li>\r\n      <li>Add a button which may only be clicked if the username is NOT an empty string</li>\r\n      <li>Upon clicking the button, the username should be reset to an empty string</li>\r\n    </ol>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/basic-assigment-2/basic-assigment-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAssigment2Component; });
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

var BasicAssigment2Component = /** @class */ (function () {
    function BasicAssigment2Component() {
        this.username = 'TestName';
        this.message = '';
    }
    BasicAssigment2Component.prototype.onUsernameInput = function (event) {
        this.username = event.target.value;
    };
    BasicAssigment2Component.prototype.usernameIsEmpty = function () {
        return (this.username.length === 0 || !this.username.trim());
    };
    BasicAssigment2Component.prototype.onResetPassword = function () {
        this.message = "Password of the user " + this.username + " is reset. Go to another form to set a new one";
    };
    BasicAssigment2Component.prototype.ngOnInit = function () {
    };
    BasicAssigment2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-basic-assigment-2',
            template: __webpack_require__("./src/app/components/basic-assigment-2/basic-assigment-2.component.html"),
            styles: [__webpack_require__("./src/styles/answer.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicAssigment2Component);
    return BasicAssigment2Component;
}());



/***/ }),

/***/ "./src/app/components/basic-assigment-3/basic-assigment-3.component.css":
/***/ (function(module, exports) {

module.exports = ".logs{\r\n    width : 250px;\r\n}\r\n\r\n.white{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/components/basic-assigment-3/basic-assigment-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"answer\">\r\n    <div class=\"col-xs-3\">\r\n  <h4>Basic assigment 3</h4>\r\n  <button\r\n  class=\"btn btn-primary\"\r\n  (click)=\"onDisplayDetails()\"\r\n  >{{ displayDetailsButtonLabel }}</button>\r\n  <div class=\"logs\" *ngIf=\"displayDetails\">\r\n    <p \r\n    *ngFor=\"let log of logs\"\r\n    [ngStyle]=\"{backgroundColor: getColor()}\"\r\n    [ngClass]=\"{white : ifLogsLength(5)}\">\r\n    {{ log }}</p>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-xs-8\">\r\n    <ol>\r\n      <li>Add A button which says 'Display Details'</li>\r\n      <li>Add a paragraph with any content of your choice (e.g. 'Secret Password = tuna')</li>\r\n      <li>Toggle the displaying of that paragraph with the button created in the first step</li>\r\n      <li>Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number)</li>\r\n      <li>Starting at the 5th log item, give all future log items \r\n        a blue background (via ngStyle) and white color (ngClass)</li>\r\n    </ol>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/basic-assigment-3/basic-assigment-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAssigment3Component; });
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

var BasicAssigment3Component = /** @class */ (function () {
    function BasicAssigment3Component() {
        this.displayDetailsButtonLabel = 'Display Details';
        this.secretPassword = 'Secret Password = tuna';
        this.logs = [];
        this.displayDetails = false;
        console.log(this.logs);
    }
    BasicAssigment3Component.prototype.ngOnInit = function () {
    };
    BasicAssigment3Component.prototype.onDisplayDetails = function () {
        this.displayDetails = !this.displayDetails;
        if (this.displayDetails) {
            this.logs.push(this.logLine());
            this.displayDetailsButtonLabel = 'Hide Details';
        }
        else {
            this.displayDetailsButtonLabel = 'Display Details';
        }
    };
    BasicAssigment3Component.prototype.displayTime = function () {
        var str = '';
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        str += hours + ':' + minutes + ':' + seconds + ' ';
        if (hours > 11) {
            str += 'PM';
        }
        else {
            str += 'AM';
        }
        return str;
    };
    BasicAssigment3Component.prototype.logLine = function () {
        return this.displayTime() + " " + this.secretPassword;
    };
    BasicAssigment3Component.prototype.ifLogsLength = function (length) {
        return this.logs.length >= length;
    };
    BasicAssigment3Component.prototype.getColor = function () {
        return this.ifLogsLength(5) ? 'blue' : '';
    };
    BasicAssigment3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-basic-assigment-3',
            template: __webpack_require__("./src/app/components/basic-assigment-3/basic-assigment-3.component.html"),
            styles: [__webpack_require__("./src/styles/answer.css"), __webpack_require__("./src/app/components/basic-assigment-3/basic-assigment-3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicAssigment3Component);
    return BasicAssigment3Component;
}());



/***/ }),

/***/ "./src/app/components/directives/basic-highlight/basic-highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicHighlightDirective; });
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

var BasicHighlightDirective = /** @class */ (function () {
    function BasicHighlightDirective(elementRef) {
        this.elementRef = elementRef;
    }
    // thanks to "private", which is TS shortcut in this case we will have value assign to the property (85, 4:00)
    BasicHighlightDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.style.backgroundColor = 'greenyellow';
    };
    BasicHighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Directive */])({
            selector: '[appBasicHighlight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
    ], BasicHighlightDirective);
    return BasicHighlightDirective;
}());



/***/ }),

/***/ "./src/app/components/directives/better-highlight/better-highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetterHighlightDirective; });
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

var BetterHighlightDirective = /** @class */ (function () {
    // () - to which property of the emelent you want to bind
    // Camel case is important here as we accessing DOM property which does not know dashes
    function BetterHighlightDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.defaultColor = 'transparent';
        // @Input() highlightColor: string = 'blue';
        this.highlightColor = 'blue';
    }
    BetterHighlightDirective.prototype.ngOnInit = function () {
        this.backgroundColor = this.defaultColor; // to prevent white at the beginning, which happens as property is not set yet. 
    };
    BetterHighlightDirective.prototype.mouseover = function (eventData) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue') 
        // Renderer in not wrong usage, but not more needed in this example 
        this.backgroundColor = this.highlightColor;
    };
    BetterHighlightDirective.prototype.mouseleave = function (eventData) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')  
        this.backgroundColor = this.defaultColor;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], BetterHighlightDirective.prototype, "defaultColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('appBetterHighlight'),
        __metadata("design:type", String)
    ], BetterHighlightDirective.prototype, "highlightColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostBinding */])('style.backgroundColor'),
        __metadata("design:type", String)
    ], BetterHighlightDirective.prototype, "backgroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BetterHighlightDirective.prototype, "mouseover", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BetterHighlightDirective.prototype, "mouseleave", null);
    BetterHighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Directive */])({
            selector: '[appBetterHighlight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */]])
    ], BetterHighlightDirective);
    return BetterHighlightDirective;
}());



/***/ }),

/***/ "./src/app/components/directives/directives.component.css":
/***/ (function(module, exports) {

module.exports = ".header{\r\n    text-align: center;\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n  }\r\n\r\n.odd {\r\n      color: red;\r\n  }\r\n\r\n.even {\r\n    color: green;\r\n}\r\n\r\na{\r\n    color: initial;\r\n    text-decoration: underline;\r\n}"

/***/ }),

/***/ "./src/app/components/directives/directives.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"header\">\r\n    <h2>Directives</h2>\r\n  </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <button\r\n          class=\"btn btn-primary\"\r\n          (click)=\"onlyOdd = !onlyOdd\">Only show odd numbers</button>\r\n        <br><br>\r\n        <ul class=\"list-group\">\r\n          <div *ngIf=\"onlyOdd\">\r\n            <li\r\n            class=\"list-group-item\"\r\n            [ngClass]=\"{odd: number % 2 !== 0}\"\r\n            [ngStyle]=\"{backgroundColor: number % 2 !== 0 ? 'yellow' : 'transparent'}\"\r\n            *ngFor=\"let number of oddNumbers\">\r\n            {{ number }}\r\n          </li>\r\n        </div>\r\n        <!-- Commented to check our own \"unless directive\" -->\r\n        <!-- <div *ngIf=\"!onlyOdd\">\r\n          <li\r\n          class=\"list-group-item\"\r\n          [ngClass]=\"{even: number % 2 == 0}\"\r\n          *ngFor=\"let number of evenNumbers\">\r\n          {{ number }}\r\n        </li>\r\n      </div> -->\r\n      <!-- star indicates that this is structural directive. there is no * in anguilar syntax - angular will transform them into sth else -->\r\n      <!-- Example what will happen with div above: (You do not have to use it, but you should be aware of this) -->\r\n      <!-- <ng-template [ngIf]=\"!onlyOdd\">\r\n          <li\r\n          class=\"list-group-item\"\r\n          [ngClass]=\"{even: number % 2 == 0}\"\r\n          *ngFor=\"let number of evenNumbers\">\r\n          {{ number }}\r\n        </li>\r\n      </ng-template> -->\r\n       <div *appUnless=\"onlyOdd\">\r\n          <li\r\n          class=\"list-group-item\"\r\n          [ngClass]=\"{even: number % 2 == 0}\"\r\n          *ngFor=\"let number of evenNumbers\">\r\n          {{ number }}\r\n        </li>\r\n      </div>\r\n      </ul>\r\n        <p appBasicHighlight>Style me with basic directive!</p>\r\n        <p>Done with <a href=\"https://angular.io/api/core/Renderer2\">Renderer2</a>: </p>\r\n        <p [appBetterHighlight]=\"'red'\" defaultColor=\"yellow\">Style me with basic directive! (mouse over)</p>\r\n        <!-- [appBetterHighlight]=\"'red'\" is an alias which you may use, but you don't have too. You may use [highlightColor]=\"'red'\" at is was before used here. Chck what is set in @Input()!-->\r\n        <!-- You can aso replace defaultColor=\"yellow\" with [defaultColor]=\"'yellow'\", but remember about the single quotation mark -->\r\n        <div [ngSwitch]=\"value\">\r\n          <p>ngSwitch: </p>\r\n          <div *ngSwitchCase=\"5\">Value is 5</div>\r\n          <div *ngSwitchCase=\"10\">Value is 10</div>\r\n          <div *ngSwitchCase=\"100\">Value is 100</div>\r\n          <div *ngSwitchDefault>Value is default</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/directives/directives.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesComponent; });
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

var DirectivesComponent = /** @class */ (function () {
    function DirectivesComponent() {
        this.oddNumbers = [1, 3, 5];
        this.evenNumbers = [2, 4, 6];
        this.onlyOdd = false;
        this.value = 5;
    }
    DirectivesComponent.prototype.ngOnInit = function () {
    };
    DirectivesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-directives',
            template: __webpack_require__("./src/app/components/directives/directives.component.html"),
            styles: [__webpack_require__("./src/app/components/directives/directives.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectivesComponent);
    return DirectivesComponent;
}());



/***/ }),

/***/ "./src/app/components/directives/unless.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnlessDirective; });
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

var UnlessDirective = /** @class */ (function () {
    function UnlessDirective(templateRef, vcRef) {
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    Object.defineProperty(UnlessDirective.prototype, "appUnless", {
        // unless - directive is oposite of ngIf 
        set: function (condition) {
            // still a property, but with setter,
            // the name should be the same as selector
            if (!condition) {
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.vcRef.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UnlessDirective.prototype, "appUnless", null);
    UnlessDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Directive */])({
            selector: '[appUnless]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewContainerRef */]])
    ], UnlessDirective);
    return UnlessDirective;
}());



/***/ }),

/***/ "./src/app/components/server-console-1/server/server.component.css":
/***/ (function(module, exports) {

module.exports = ".online {\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/components/server-console-1/server/server.component.html":
/***/ (function(module, exports) {

module.exports = "<p \r\n[ngStyle]=\"{backgroundColor: getColor()}\"\r\n[ngClass]=\"{online : serverStatus === 'online'}\">\r\nThe server with id {{ serverId }} is {{ serverStatus }}\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/server-console-1/server/server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
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

var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.serverId = 10;
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    ServerComponent.prototype.getColor = function () {
        return this.serverStatus === 'offline' ? 'green' : 'red';
    };
    ServerComponent.prototype.ngOnInit = function () {
    };
    ServerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-server',
            template: __webpack_require__("./src/app/components/server-console-1/server/server.component.html"),
            styles: [__webpack_require__("./src/app/components/server-console-1/server/server.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/components/server-console-1/servers-console/servers-console.component.css":
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/server-console-1/servers-console/servers-console.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>Servers console</h3>\r\n  <app-servers></app-servers>\r\n</div>"

/***/ }),

/***/ "./src/app/components/server-console-1/servers-console/servers-console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersConsoleComponent; });
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

var ServersConsoleComponent = /** @class */ (function () {
    function ServersConsoleComponent() {
    }
    ServersConsoleComponent.prototype.ngOnInit = function () {
    };
    ServersConsoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-servers-1',
            template: __webpack_require__("./src/app/components/server-console-1/servers-console/servers-console.component.html"),
            styles: [__webpack_require__("./src/app/components/server-console-1/servers-console/servers-console.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServersConsoleComponent);
    return ServersConsoleComponent;
}());



/***/ }),

/***/ "./src/app/components/server-console-1/servers/servers.component.css":
/***/ (function(module, exports) {

module.exports = ".add-server, \r\n.server-statuses {\r\n    width: 300px;\r\n    margin: 10px 0px;\r\n}\r\n\r\nbutton{\r\n    margin: 10px 0px;\r\n}\r\n\r\n.serverCreationStatus {\r\n    font-size: 90%;\r\n    color: gray;\r\n}"

/***/ }),

/***/ "./src/app/components/server-console-1/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-server\">\r\n    <label for=\"Server Name\"></label>\r\n    <input type=\"text\" class=\"form-control\" (input)=\"onUpdateServerName($event)\" [(ngModel)]=\"serverName\">\r\n    <p>{{ serverName }}</p>\r\n    <button class=\"btn btn-primary\" [disabled]=\"!allowNewServer\" (click)=\"onCreateServer()\">\r\n  Add Server</button>\r\n    <!-- <p class=\"serverCreationStatus\">{{ serverCreationStatus }}</p> -->\r\n    <p *ngIf=\"serverCreated; else noServer\">Server was created, it is name is {{serverName}}</p>\r\n    <ng-template #noServer>\r\n        <p>No server was created</p>\r\n    </ng-template>\r\n</div>\r\n<div class=\"server-statuses\">\r\n    <app-server *ngFor=\"let server of servers\"></app-server>\r\n</div>"

/***/ }),

/***/ "./src/app/components/server-console-1/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
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

var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverCreationStatus = 'No server was created';
        this.serverName = 'TestServer';
        this.serverCreated = false;
        this.servers = ['Test Server 01', 'Test Server 02'];
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent.prototype.onCreateServer = function () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = "Server was created. Name is " + this.serverName;
    };
    ServersComponent.prototype.onUpdateServerName = function (event) {
        this.serverName = event.target.value;
    };
    ServersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            /* selector: '[app-servers]', as an attribute
                        -> to use: <div app-servers></div>
          
            selector: '.app-servers', as a class
                        -> to use:  <div class="app-servers"></div>*/
            selector: 'app-servers',
            template: __webpack_require__("./src/app/components/server-console-1/servers/servers.component.html"),
            styles: [__webpack_require__("./src/app/components/server-console-1/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/components/server-console-2/cockpit/cockpit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/server-console-2/cockpit/cockpit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <p>Add new Servers or blueprints!</p>\r\n        <label>Server Name</label>\r\n        <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newServerName\"> -->\r\n        <!-- local reference - Note: you can use it only in the template, in HTML code,  not in your ts code -->\r\n        <!-- #serverNameInput - will hold reference to this element with all its properties -->\r\n        <input type=\"text\" class=\"form-control\" #serverNameInput>\r\n        <label>Server Content</label>\r\n        <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newServerContent\"> -->\r\n        <input type=\"text\" class=\"form-control\" #serverContentInput>\r\n        <br>\r\n        <button class=\"btn btn-primary\" (click)=\"onAddServer(serverNameInput)\">Add Server</button>\r\n        <button class=\"btn btn-primary\" (click)=\"onAddBlueprint(serverNameInput)\">Add Server Blueprint</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/server-console-2/cockpit/cockpit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CockpitComponent; });
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

var CockpitComponent = /** @class */ (function () {
    function CockpitComponent() {
        this.serverCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */](); //EventEmitter - TS generic type
        this.blueprintCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */](); //alias
    }
    //ngOnInit - a lifecycle hook called when tha comp. is initialized 
    //More: ngOnChanges - bound input property changes, ngDoCheck - on every chanage detection, 
    //ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked
    CockpitComponent.prototype.ngOnInit = function () {
    };
    CockpitComponent.prototype.onAddServer = function (nameInput) {
        // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent}); // will emit a new event of this type using EventEmitter
        this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value }); // will emit a new event of this type using EventEmitter
    };
    CockpitComponent.prototype.onAddBlueprint = function (nameInput) {
        // this.blueprintCreated.emit({blueprintName: this.newServerName, blueprintContent: this.newServerContent});
        this.blueprintCreated.emit({ blueprintName: nameInput.value, blueprintContent: this.serverContentInput.nativeElement.value });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], CockpitComponent.prototype, "serverCreated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])('bpCreated'),
        __metadata("design:type", Object)
    ], CockpitComponent.prototype, "blueprintCreated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('serverContentInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], CockpitComponent.prototype, "serverContentInput", void 0);
    CockpitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-cockpit',
            template: __webpack_require__("./src/app/components/server-console-2/cockpit/cockpit.component.html"),
            styles: [__webpack_require__("./src/app/components/server-console-2/cockpit/cockpit.component.css"), __webpack_require__("./src/styles/answer.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CockpitComponent);
    return CockpitComponent;
}());



/***/ }),

/***/ "./src/app/components/server-console-2/server-console-2.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 30px;\r\n}\r\n\r\np {\r\n    color: blue;\r\n}"

/***/ }),

/***/ "./src/app/components/server-console-2/server-console-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-cockpit (serverCreated)=\"onServerAdded($event)\" (bpCreated)=\"onBlueprintAdded($event)\"></app-cockpit>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-primary\" (click)=\"onChangeFirst()\">Change first element</button>\r\n            <button class=\"btn btn-danger\" (click)=\"onDestroyFirst()\">Destroy first element</button>\r\n            <app-server-element *ngFor=\"let serverElement of serverElements\" [srvElement]=\"serverElement\">\r\n                <p #contentParagraph>\r\n                    <strong *ngIf=\"serverElement.type === 'server'\" style=\"color: red\">{{ serverElement.content }}</strong>\r\n                    <em *ngIf=\"serverElement.type === 'blueprint'\" style=\"color: blue\">{{ serverElement.content }}</em>\r\n                </p>\r\n            </app-server-element>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/server-console-2/server-console-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerConsole2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServerConsole2Component = /** @class */ (function () {
    function ServerConsole2Component() {
        this.serverElements = [];
    }
    ServerConsole2Component.prototype.onServerAdded = function (serverData) {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    };
    ServerConsole2Component.prototype.onBlueprintAdded = function (blueprintData) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.blueprintName,
            content: blueprintData.blueprintContent
        });
    };
    ServerConsole2Component.prototype.onChangeFirst = function () {
        (this.serverElements.length > 0) ? this.serverElements[0].name = 'Changed' : console.log('No elements to change');
    };
    ServerConsole2Component.prototype.onDestroyFirst = function () {
        this.serverElements.splice(0, 1);
    };
    ServerConsole2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-servers-2',
            template: __webpack_require__("./src/app/components/server-console-2/server-console-2.component.html"),
            styles: [__webpack_require__("./src/app/components/server-console-2/server-console-2.component.css")]
        })
    ], ServerConsole2Component);
    return ServerConsole2Component;
}());



/***/ }),

/***/ "./src/app/components/server-console-2/server-element/server-element.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/server-console-2/server-element/server-element.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\" #heading>{{ element.name }}</div>\r\n    <div class=\"panel-body\">\r\n        <!-- directive - to mark a place for the content. The content is placed in server-console-2 -->\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/server-console-2/server-element/server-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerElementComponent; });
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

// import { ViewEncapsulation } from '@angular/compiler/src/core';
var ServerElementComponent = /** @class */ (function () {
    function ServerElementComponent() {
    }
    ServerElementComponent.prototype.ngOnInit = function () {
        console.log(this.header.nativeElement.textContent); //empty, see ngAfterViewInit
        console.log('Text Content pf paragraph: ' + this.paragraph.nativeElement.textContent);
    };
    ServerElementComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    ServerElementComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck called");
    };
    ServerElementComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit called");
        console.log('Text Content pf paragraph: ' + this.paragraph.nativeElement.textContent);
    };
    ServerElementComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked called");
    };
    ServerElementComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit called");
        console.log("Text content: " + this.header.nativeElement.textContent); //accessed to the content
    };
    ServerElementComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked called");
    };
    ServerElementComponent.prototype.ngOnDestroy = function () {
        console.log("element destroyed");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('srvElement'),
        __metadata("design:type", Object)
    ], ServerElementComponent.prototype, "element", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('heading'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], ServerElementComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChild */])('contentParagraph'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], ServerElementComponent.prototype, "paragraph", void 0);
    ServerElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-server-element',
            template: __webpack_require__("./src/app/components/server-console-2/server-element/server-element.component.html"),
            styles: [__webpack_require__("./src/app/components/server-console-2/server-element/server-element.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ServerElementComponent);
    return ServerElementComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/styles/answer.css":
/***/ (function(module, exports) {

module.exports = ".answer {\r\n    margin: 1em;\r\n}\r\n\r\ninput,\r\nbutton {\r\n    margin: 1em 0;\r\n}\r\n\r\ninput {\r\n    width: 250px;\r\n}"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
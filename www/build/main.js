webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'Call History';
        this.saturation = 34;
        this.selectedAll = true;
        this.selectedMissed = false;
        this.intensions = [
            { title: 'Just for fun', value: false },
            { title: 'Dating', value: false },
            { title: 'New friends', value: false },
            { title: 'Long term', value: false }
        ];
        this.settings = [
            { title: 'Gender', Select: 'Male' },
            { title: 'Orientation', Select: 'Straight' },
            { title: 'Education', Select: 'High school' },
            { title: 'Income', Select: '0 - 10.00' },
        ];
        var page = this.navParams.get('page');
        if (page)
            this.title = page;
    }
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="white" col-12>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <div id="title" col-4 offset-3 *ngIf="title !== \'Call History\' ">{{title}}</div>\n    <button *ngIf="title == \'Home\' || title == \'My Profile\' || title == \'My Matches\' " id="messages"><img src="assets/icon/message.png">\n      <span>3</span>\n    </button>\n    <!--<button ion-item no-lines id="editBtn">Edit</button>-->\n    <ion-col *ngIf="title == \'Call History\' ">\n        <ion-row   class="distinguish">\n          <ion-col col-6 [ngClass]="selectedAll?\'selected\':\'unselected\'" class="allButton" (click)="selectAll()">All</ion-col>\n          <ion-col col-6 [ngClass]="selectedMissed?\'selected\':\'unselected\'" (click)="selectMissed()">Missed</ion-col>\n        </ion-row>\n      </ion-col>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid style="padding:0px;height: 100%;" >\n    <ion-row style="height: 100%;">\n\n\n      <!--This is the Home Part -->\n      <ion-col  *ngIf="title == \'Home\' || title == \'Settings\'">\n       <div class="ageDiv">\n         <span class="subtitle">Your Match Age Range</span><br/>\n         <ion-item no-lines>\n          <ion-range min="18" max="120" pin="true" [(ngModel)]="saturation" color="primary">\n            <ion-label range-left>18</ion-label>\n          </ion-range>\n        </ion-item>\n       </div>\n        <div class="ageDiv">\n         <span class="subtitle">Your Match Intentions</span><br/><br/>\n           <button *ngFor="let intension of intensions let x = index" col-6>\n            <span>{{intension.title}}</span>\n            <ion-checkbox [(ngModel)]="intensions[x].value"></ion-checkbox>\n          </button>\n       </div>\n        <div *ngFor="let setting of settings" class="othersDiv">\n          <span class="subtitle">{{setting.title}}</span>\n          <button ion-item no-lines col-6>{{setting.Select}} <img src="assets/icon/rightArrow.png"></button>\n        </div>\n        <div *ngIf="title == \'Home\' ">\n          <button ion-item no-lines id="randomSearchBtn"> Random search</button>\n          <button ion-item no-lines id="findSearchBtn"> Find match</button>\n        </div>\n        <button  *ngIf="title == \'Settings\' "ion-item no-lines id="updateBtn">Update</button>\n      </ion-col>\n\n\n      <!-- My Matches !-->\n  <ion-col style="background-color: #F8F8F9;"  *ngIf="title == \'My Matches\' ">\n        <div id="searchDiv">\n           <ion-icon name="search" style="padding-left: 3px;"></ion-icon>\n           <input placeholder="search" />\n           <button ><ion-icon name="close"></ion-icon></button>\n        </div>\n        <ion-list>\n          <button ion-item style="background: rgba(211, 59, 160 ,0.2);">\n            <img class="img blurredImage" src="assets/imgs/trial.png" >\n            <img class="status" src="assets/icon/online.png" />\n            <div style="position: absolute;top:10px;left:80px;width:76%;">\n              <div class="time">11.25 am</div>\n              <div class="name">Jane</div>\n              <div class="message">Hey! How was dinner yesterday?</div>\n            </div>\n          </button>         \n        </ion-list>\n      </ion-col>\n\n\n      <!--This is the friends part -->\n      <ion-col style="background-color: #F8F8F9;" *ngIf="title == \'My Friends\' ">\n        <div id="searchDiv">\n           <ion-icon name="search" style="padding-left: 3px;"></ion-icon>\n           <input placeholder="search" />\n           <button ><ion-icon name="close"></ion-icon></button>\n        </div>\n        <ion-list>\n          <button ion-item style="background: rgba(211, 59, 160 ,0.2);">\n            <img class="img" src="assets/imgs/trial.png">\n            <img class="status" src="assets/icon/online.png" />\n            <div style="position: absolute;top:10px;left:80px;width:76%;">\n              <div class="time">11.25 am</div>\n              <div class="name">Jane <span class="unreadText">3</span></div>\n              <div class="message">Hey! How was dinner yesterday?</div>\n            </div>\n          </button>\n          \n        </ion-list>\n      </ion-col>\n\n       <!--This is the my profile part -->\n      <ion-col *ngIf="title == \'My Profile\' " style="text-align: center;padding:0px;background-color: rgb(232, 232, 232);height: 100%;">\n       <div id="picDiv" style="height:150px">\n            <img src="assets/imgs/trial.png">\n        </div>\n        <div id="imgDiv" class="profileImage">\n           <img src="assets/imgs/trial.png" style="display: none;">\n           <img src="assets/imgs/upload.png">\n           <div id="profileName" style="border: none;">\n              Edward\n           </div>\n           <button style="display: none;" id="editBtn" no-lines ion-item>Edit profile</button>\n           <div style="text-align: center;">\n             <button  id="morePhotos" no-lines >More Photos</button>\n           </div>\n           <div id="bio">\n             <strong>Bio: </strong><br/>\n             <textarea placeholder="Write something about yourself here." ></textarea >\n           </div>\n        </div>\n         <div id="myPhotos">\n             <span>My photos</span><br><br>\n             <div style="margin:0px;width:95% ;text-align: center;">\n               <img src="assets/imgs/trial.png">\n             </div>\n           </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!--archive and delete button-->\n<ion-footer  *ngIf="title == \'My Friends\' ">\n  <button ion-item class="footerBtn">Archive</button>\n  <button ion-item class="footerBtn" style="text-align:right">Delete</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */], icon: 'home' },
            { title: 'My Matches', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */], icon: 'matches' },
            { title: 'My Friends', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */], icon: 'friends' },
            { title: 'Call History', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */], icon: 'history' },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */], icon: 'profile' },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */], icon: 'settings' },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */], icon: 'help' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, { page: page.title });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-content style="background-color: rgba(242, 242, 242, 0.4);">\n    <div id="picDiv">\n      <img src="assets/imgs/trial.png">\n    </div>\n    <div id="imgDiv">\n       <img src="assets/imgs/trial.png">\n       <div id="profileName">\n          Edward\n       </div>\n    </div>\n    <ion-list id="ionList">\n      <button menuClose ion-item no-lines *ngFor="let p of pages" (click)="openPage(p)">\n        <img src="assets/icon/{{p.icon}}.png">        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer no-border>\n    <img class="version" src="assets/imgs/index1.png">\n  </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.inputs = [
            { title: 'Login',
                inputs: [
                    { name: 'Username', value: '', type: 'text' },
                    { name: 'Password', value: '', type: 'password' }
                ] },
            { title: 'Sign up',
                inputs: [
                    { name: 'Email address', value: '', type: 'email' },
                    { name: 'Username', value: '', type: 'text' },
                    { name: 'Phone number', value: '', type: 'number' },
                    { name: 'Password', value: '', type: 'password' }
                ] }
        ];
        this.Inputs = this.inputs[0];
    }
    HomePage.prototype.goTo = function (index) {
        this.Inputs = this.inputs[index];
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/brianhenry/Desktop/blindyy/src/pages/home/home.html"*/'\n<ion-content class="ioncontent">\n <img src="assets/imgs/index.png">\n <ion-list >\n   <ion-item *ngFor="let input of Inputs.inputs" class=“ionItem” style="border: none;"  no-lines>\n     <ion-label floating color="primary">{{input.name}}</ion-label>\n     <ion-input type="{{input.type}}" [(ngModel)]="input.value"></ion-input>\n   </ion-item>\n   <ion-item style="margin-top: 20px; border: none" no-lines>\n     <button *ngIf="Inputs.title ==\'Login\' " [disabled]="!Inputs.inputs[0].value || Inputs.inputs[0].value.trim() == \'\' || !Inputs.inputs[1].value || Inputs.inputs[1].value.trim() == \'\'">Login</button>\n     <button *ngIf="Inputs.title ==\'Sign up\' " [disabled]="!Inputs.inputs[0].value || Inputs.inputs[0].value.trim() == \'\' || !Inputs.inputs[1].value || Inputs.inputs[1].value.trim() == \'\' || !Inputs.inputs[2].value || !Inputs.inputs[3].value || Inputs.inputs[3].value.trim() == \'\' ">Sign up</button>\n   </ion-item>\n    <ion-item *ngIf="Inputs.title ==\'Login\' "  style="margin-top: -13px;border: none;" no-lines>\n     <button class="fgPass">Forgot password?</button>\n   </ion-item>\n   <ion-item style="margin-top: 20px;border: none;" no-lines>\n     <button (click)="goTo(1)" *ngIf="Inputs.title ==\'Login\' " class="signup">Don\'t have an account? Sign up!</button>\n     <button (click)="goTo(0)" *ngIf="Inputs.title !==\'Login\' " class="signup">Already have an account? Login!</button>\n   </ion-item>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/brianhenry/Desktop/blindyy/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map
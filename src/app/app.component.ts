import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav , ViewController, Events } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage, LoginPage } from '../pages';
import { CallService, Provider, LoginService } from '../services';
import { CallModalTrigger } from '../components';


import * as moment from 'moment';
//import * as locales from 'moment/min/locales';

declare var cordova:any;


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	 @ViewChild(Nav) nav: Nav;
	rootPage: any;
	isInCall = false
    pages: Array<{title: string, component: any, icon: string}>;
	constructor(platform: Platform, public loginService: LoginService, public provider: Provider,callService: CallService, events: Events, callModal: CallModalTrigger, statusBar: StatusBar, splashScreen: SplashScreen) {
			 this.pages = [
		      { title: 'Home', component: ListPage, icon: 'home' },
		      { title: 'My Matches', component: ListPage, icon: 'matches' },
		      { title: 'My Friends', component: ListPage, icon: 'friends' },
		      { title: 'Call History', component: ListPage, icon: 'history' },
		      { title: 'My Profile', component: ListPage, icon: 'profile' },
		      { title: 'Settings', component: ListPage, icon: 'settings' },
		      { title: 'Help', component: ListPage, icon: 'help' },
		      { title: 'Log out', component: '', icon: '' }
		    ];

		// format chat date diffs
		moment.locale('en', {
			relativeTime: {
				future: 'now',
				past: '%s',
				s: 'now',
				m: '1 m',
				mm: '%d m',
				h: '1 h',
				hh: '%d h',
				d: '1 d',
				dd: '%d d',
				M: '1 m',
				MM: '%d m',
				y: '1 y',
				yy: '%d y'
			}
		});

		platform.ready().then(() => {
			this.provider.userLoginCheck();
			statusBar.styleBlackTranslucent();
			splashScreen.hide();
      
			if (platform.is('cordova') && cordova.plugins.iosrtc) {
				cordova.plugins.iosrtc.registerGlobals();
			}
			let thisx = this;
			setTimeout(function(){
               if(thisx.provider.acc){
				   thisx.rootPage = ListPage
				}else{
				   thisx.rootPage = LoginPage
				}
			},500)

			
		});

		events.subscribe('call.status.isincall', status => {
			console.debug('call status changed to ', status);
			this.isInCall = status;
		});
	}
	openPage(page) {
		if(page.component){
		    this.provider.title = page.title;
		     if(page.title == 'Settings')
               this.provider.userLoginCheck();
		}else{
			this.provider.storage.remove('blindyVariables').then(()=>{
				let thisx = this;
				this.loginService.logout();
		       this.nav.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
				setTimeout(function(){
                     thisx.provider.acc = undefined;
				}, 1000)
			}, err=>{
				console.log(err)
			});
		}
  }

}

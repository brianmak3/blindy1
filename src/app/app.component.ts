import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav , ViewController, Events } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages';
import { ChatPage } from '../pages';
import { CallService } from '../services';
import { CallModalTrigger } from '../components';


import * as moment from 'moment';
//import * as locales from 'moment/min/locales';

declare var cordova:any;


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	 @ViewChild(Nav) nav: Nav;
	rootPage = ListPage;
	isInCall = false
    pages: Array<{title: string, component: any, icon: string}>;
	constructor(platform: Platform, callService: CallService, events: Events, callModal: CallModalTrigger, statusBar: StatusBar, splashScreen: SplashScreen) {
			 this.pages = [
		      { title: 'Home', component: ChatPage, icon: 'home' },
		      { title: 'My Matches', component: ListPage, icon: 'matches' },
		      { title: 'My Friends', component: ListPage, icon: 'friends' },
		      { title: 'Call History', component: ListPage, icon: 'history' },
		      { title: 'My Profile', component: ListPage, icon: 'profile' },
		      { title: 'Settings', component: ListPage, icon: 'settings' },
		      { title: 'Help', component: ListPage, icon: 'help' },
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
			statusBar.styleBlackTranslucent();
			splashScreen.hide();

			if (platform.is('cordova') && cordova.plugins.iosrtc) {
				cordova.plugins.iosrtc.registerGlobals();
			}
		});

		events.subscribe('call.status.isincall', status => {
			console.debug('call status changed to ', status);
			this.isInCall = status;
		});
	}
	openPage(page) {
    this.nav.push(page.component, {page: page.title});
  }
}

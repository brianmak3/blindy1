import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: ListPage, icon: 'home' },
      { title: 'My Matches', component: ListPage, icon: 'matches' },
      { title: 'My Friends', component: ListPage, icon: 'friends' },
      { title: 'Call History', component: ListPage, icon: 'history' },
      { title: 'My Profile', component: ListPage, icon: 'profile' },
      { title: 'Settings', component: ListPage, icon: 'settings' },
      { title: 'Help', component: ListPage, icon: 'help' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component, {page: page.title});
  }
}

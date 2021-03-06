import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
//import { IonicImageViewerModule } from 'ionic-img-viewer'
import { MomentModule } from 'angular2-moment';
import { Geolocation } from '@ionic-native/geolocation';
import { ChatsPage, ChatPage, LoginPage, AccountPage, ContactsPage, ListPage, PopPage } from '../pages';
import { CallModal, ContactModal, UserImage, CallModalTrigger, ContactAddModal, KeyboardAttach } from '../components';
import { AttachmentService, AudioService, CallService, ChatService, ContactService, LoginService, SocketService, VideoService, Provider} from '../services';

@NgModule({
	declarations: [
		MyApp,
		ChatsPage,
		ChatPage,
		LoginPage,
		ListPage,
		AccountPage,
		CallModal,
		ContactModal,
		UserImage,
		ContactsPage,
		ContactAddModal,
		KeyboardAttach,
		PopPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		//IonicImageViewerModule,
		IonicModule.forRoot(MyApp, {
			backButtonText: 'Back',
			iconMode: 'ios',
 			modalEnter: 'modal-slide-in',
			modalLeave: 'modal-slide-out',
			tabsPlacement: 'bottom',
			pageTransition: 'ios'
		}),
		IonicStorageModule.forRoot(),
		MomentModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		ChatsPage,
		ChatPage,
		LoginPage,
		AccountPage,
		PopPage,
		CallModal,
		ListPage,
		ContactModal,
		UserImage,
		ContactsPage,
		ContactAddModal
	],
	providers: [
		AttachmentService,
		CallModalTrigger,
		LoginService,
		AudioService,
		Geolocation,
		SocketService,
		CallService,
		ContactService,
		VideoService,
		Provider,
		ChatService,
		StatusBar,
		SplashScreen,
		Keyboard,
		NativeAudio,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}

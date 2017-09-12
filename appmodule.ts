# chatting-app-using-firebase

1. install library for Firebase
   npm install angularfire2 firebase --save
2.add code in appModule.ts

import { LoginPage } from './../pages/login/login';
import { ChatPage } from './../pages/chat/chat';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyD9KzrVZw2Xx12xTaYriuHI0GPfx0szOMI",
  authDomain: "ionic-chat-33957.firebaseapp.com",
  databaseURL: "https://ionic-chat-33957.firebaseio.com",
  projectId: "ionic-chat-33957",
  storageBucket: "",
  messagingSenderId: "1069873898211"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    ChatPage,
    LoginPage,
    TabsPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    ChatPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

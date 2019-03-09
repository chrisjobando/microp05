import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ContactBookPage} from '../pages/contact-book/contact-book';
import {AboutPage} from '../pages/about/about'
import {NewContactPage} from '../pages/new-contact/new-contact';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactService } from '../services/contact.service';
import { Services } from '@angular/core/src/view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactBookPage,
    AboutPage,
    NewContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactBookPage,
    AboutPage,
    NewContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService
  ]
})
export class AppModule {}

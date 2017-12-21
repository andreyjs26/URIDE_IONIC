import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DriverPage } from '../pages/driver/driver';
import { PassengerPage } from '../pages/passenger/passenger';
import {RegisterDriverPage} from '../pages/register-driver/register-driver';
import {RegisterPassengerPage} from '../pages/register-passenger/register-passenger';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DriverPage,
    PassengerPage,
    RegisterDriverPage,
    RegisterPassengerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DriverPage,
    PassengerPage,
    RegisterDriverPage,
    RegisterPassengerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

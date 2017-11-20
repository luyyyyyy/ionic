import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http'
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index/index'
import { UserCenterPage } from '../pages/user-center/user-center'
import { ClassifyPage } from '../pages/classify/classify'
import { SearchMenuPage } from '../pages/search-menu/search-menu'
import { RegisterPage } from '../pages/register/register'
import { LoginPage } from '../pages/login/login'
import { AllMenuPage } from '../pages/all-menu/all-menu'
import { MenuListPage } from '../pages/menu-list/menu-list'
import { StepPage } from '../pages/step/step'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyHttpService } from './utility/service/myhttp.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IndexPage,
    UserCenterPage,
    ClassifyPage,
    SearchMenuPage,
    RegisterPage,
    LoginPage,
    AllMenuPage,
    MenuListPage,
    StepPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IndexPage,
    UserCenterPage,
    ClassifyPage,
    SearchMenuPage,
    RegisterPage,
    LoginPage,
    AllMenuPage,
    MenuListPage,
    StepPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyHttpService
  ]
})
export class AppModule {}

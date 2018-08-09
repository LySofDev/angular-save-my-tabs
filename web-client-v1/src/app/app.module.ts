import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './/shared.module';
import { AppRoutingModule } from './/app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { TabsModule } from './tabs/tabs.module';
import { HeaderModule } from './header/header.module';
import { CookiesModule } from './cookies/cookies.module';
import { SplashModule } from './splash/splash.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    UsersModule,
    HomeModule,
    TabsModule,
    HeaderModule,
    CookiesModule,
    SplashModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

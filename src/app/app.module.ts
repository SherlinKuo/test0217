import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SCommonModule } from './components/s-common/s-common.module';

import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './component/dialog/error/error.component';
import { HomeComponent } from './home/home.component';
import { P1Component } from './home/pages/p1/p1.component';
import { P2Component } from './home/pages/p2/p2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    P1Component,
    P2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SCommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

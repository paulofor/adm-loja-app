import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './shared/sdk';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { PrinicipalRoutingModule } from './prinicipal-routing/prinicipal-routing.module';



@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    PrinicipalRoutingModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [
    SocketDriver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

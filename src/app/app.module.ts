import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { PrinicipalRoutingModule } from './prinicipal-routing/prinicipal-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    PrinicipalRoutingModule,
    LoginComponent,
    FormsModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [
    SocketDriver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

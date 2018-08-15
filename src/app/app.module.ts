import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './shared/sdk';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { PrinicipalRoutingModule } from './prinicipal-routing/prinicipal-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent ,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    PrinicipalRoutingModule,
    FormsModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [
    SocketDriver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

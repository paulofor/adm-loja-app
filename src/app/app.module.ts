import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule } from '@angular/router';
import { rotasPrincipal } from './rotas/rotasPrincipal';
import { FormsModule }   from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotasPrincipal),
    FormsModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [
    SocketDriver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

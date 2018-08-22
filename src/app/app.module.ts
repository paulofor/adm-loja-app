import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './shared/sdk';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { PrinicipalRoutingModule } from './prinicipal-routing/prinicipal-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AdmHomeComponent } from './adm-home/adm-home.component';

@NgModule({
  declarations: [
    AppComponent ,
    LoginComponent,
    PrincipalComponent,
    SideBarComponent,
    ProdutoComponent,
    PedidoComponent,
    AdmHomeComponent
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

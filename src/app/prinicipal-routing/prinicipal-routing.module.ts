import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { LoginComponent } from '../login/login.component';
import { ProdutoComponent } from '../produto/produto.component';
import { PedidoComponent } from '../pedido/pedido.component';
import { AdmHomeComponent } from '../adm-home/adm-home.component';

import { FormsModule }   from '@angular/forms';
import { SideBarComponent } from '../side-bar/side-bar.component';

const principalRotas: Routes = [
  { path : '' , component: LoginComponent  },
  { 
    path : 'home' , component: PrincipalComponent, 
    children : [
      {path:'', component: AdmHomeComponent},
      {path:'pedido', component: PedidoComponent},
      {path:'produto', component: ProdutoComponent}
    ]
  }
]




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(principalRotas),
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LoginComponent,
    PrincipalComponent,
    AdmHomeComponent,
    PedidoComponent,
    ProdutoComponent,
    SideBarComponent
  ]
})
export class PrinicipalRoutingModule { }

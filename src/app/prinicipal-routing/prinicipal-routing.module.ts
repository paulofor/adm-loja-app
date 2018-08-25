import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { LoginComponent } from '../login/login.component';
import { ProdutoComponent } from '../produto/produto.component';
import { PedidoComponent } from '../pedido/pedido.component';
import { AdmHomeComponent } from '../adm-home/adm-home.component';


const principalRotas: Routes = [
  { path : '' , component: LoginComponent  },
  { 
    path : 'home' , component: PrincipalComponent,
    children : [
      { path : 'produto' , component: ProdutoComponent  },
      { path : 'pedido' , component: PedidoComponent},
      { path : 'home' , component: AdmHomeComponent}
    ]
  }
]




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(principalRotas)
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class PrinicipalRoutingModule { }

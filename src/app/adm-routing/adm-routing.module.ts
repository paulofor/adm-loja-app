import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from '../produto/produto.component';
import { PedidoComponent } from '../pedido/pedido.component';
import { AdmHomeComponent } from '../adm-home/adm-home.component';
import { PrincipalComponent } from '../principal/principal.component';


const admRotas: Routes = [
  { path : 'produto' , component: ProdutoComponent  },
  { path : 'pedido' , component: PedidoComponent},
  { 
    path : 'home' , component: PrincipalComponent, 
    children : [
      { path:'home', component: AdmHomeComponent}
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(admRotas)
  ],
  declarations: []
})
export class AdmRoutingModule { }

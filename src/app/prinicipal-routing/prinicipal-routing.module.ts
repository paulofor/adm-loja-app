import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { LoginComponent } from '../login/login.component';
import { ProdutoComponent } from '../produto/produto.component';
import { PedidoComponent } from '../pedido/pedido.component';
import { AdmHomeComponent } from '../adm-home/adm-home.component';
import { AdmRoutingModule } from '../adm-routing/adm-routing.module';


const principalRotas: Routes = [
  { path : '' , component: LoginComponent  },
  { 
    path : 'home' ,
    loadChildren: 'app/adm-routing/adm-routing.module#AdmRoutingModule'
  }
]




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(principalRotas,
      {
        enableTracing: true // <-- debugging purposes only
      }
    ),
    AdmRoutingModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class PrinicipalRoutingModule { }

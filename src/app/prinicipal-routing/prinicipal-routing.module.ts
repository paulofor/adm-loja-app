import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { LoginComponent } from '../login/login.component';


const principalRotas: Routes = [
  { path : '' , component: LoginComponent  },
  { path : 'home' , component: PrincipalComponent}
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

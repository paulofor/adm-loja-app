import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { PrincipalComponent } from '../principal/principal.component';
import { Routes, RouterModule } from '@angular/router';


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
    LoginComponent,
    PrincipalComponent
  ]
})
export class PrinicipalRoutingModule { }

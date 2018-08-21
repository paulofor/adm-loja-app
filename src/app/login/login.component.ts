import { Component, OnInit } from '@angular/core';
import { ClienteApi, Cliente } from '../shared/sdk';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  /*
  constructor(  ) { }

  ngOnInit() {
    
  }
  */


  
  isLoginError : boolean = false;
  cliente : Cliente;

  constructor( private clienteSrv: ClienteApi, private router: Router) { }

  ngOnInit() {
    this.cliente = new Cliente();
  }


  onSubmit() {
    console.log("User: ", this.cliente);
    this.verificaLogin();
  }


  verificaLogin() {
    this.clienteSrv.findOne({ "where": { "login": this.cliente.login } })
      .subscribe((item: Cliente) => {
        console.log('Cliente: ', item);
        if (item.senha === this.cliente.senha) {
          this.router.navigate(['/home']);
        } else {
        }
      })
  }

  /*
  OnSubmit(userName,password){
     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }
  */

}

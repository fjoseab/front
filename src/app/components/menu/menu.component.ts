import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/services/login/authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  accsesLevel: string = "0";//extraccion del valor del servicio

  constructor( private authentication : AuthenticationServiceService ) { 
    this.authentication.acceso.subscribe(x => this.accsesLevel = x);
   }

  ngOnInit() {
  }

  Finalizar(){
    localStorage.removeItem('acceso');//quita la secion
    this.accsesLevel = "0";
    Router.caller('login');
  }

  Iniciar(){
    this.accsesLevel = "7"; //Solo para eliminar el boton de iniciar secion
    Router.caller('login');
  }
}

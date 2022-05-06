import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/services/login/authentication-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogeado: Usuario;
  accsesLevel: string
  formInicio: FormGroup;

  constructor(private formBuilder: FormBuilder, private serviceLogIn: AuthenticationServiceService, private route: Router) {
    this.serviceLogIn.acceso.subscribe(x => this.accsesLevel = x);
  }

  ngOnInit() {
    this.formInicio = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  LogIn() {
    let entryUser: string = this.formInicio.controls['usuario'].value;
    let entryPassword: string = this.formInicio.controls['contrasena'].value;

    var userInfo: Usuario = {
      user: entryUser,
      password: entryPassword,
      permisos: "0"
    };

    this.serviceLogIn.logIn(userInfo)
    .pipe(first())
    .subscribe(
      data => this.route.navigate(["principal"]),
      error => alert("Usuario y/o contraseña incorrecto.")
    );
  }

}

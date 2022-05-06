import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Models/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private accesoSubject: BehaviorSubject<string>;
  public acceso: Observable<string>;

  baseURL = environment.baseUrl + 'Usuarios/';

  constructor(private http: HttpClient) { 
    this.accesoSubject = new BehaviorSubject<string>(localStorage.getItem("acceso"));
    this.acceso = this.accesoSubject.asObservable();
  }

  logIn( consumer: Usuario ){
    return this.http.post<Usuario>(this.baseURL, consumer)
    .pipe(map(response => {
      localStorage.setItem("acceso",response.permisos);
      this.accesoSubject.next(response.permisos);      
    }));
  }

  logOut(){
    
  }

}

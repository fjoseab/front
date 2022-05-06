import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlumnoContactoDTO } from 'src/app/Models/alumno/alumno-contacto-dto';

@Injectable({
  providedIn: 'root'
})
export class ContactoAlumnoService {

  baseURL = environment.baseUrl + 'ContactoAlumnos/';

  constructor(private http: HttpClient) { }

  get( id: number): Observable<AlumnoContactoDTO>{
    const url = this.baseURL + id;
    return this.http.get<AlumnoContactoDTO>(url);
  }

  post( dto: AlumnoContactoDTO): Observable<AlumnoContactoDTO>{
    return this.http.post<AlumnoContactoDTO>(this.baseURL, dto);
  }

}

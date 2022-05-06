import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/Models/alumno';
import { AlumnoCompleto } from 'src/app/Models/alumno/alumno-completo';
import { Filter } from 'src/app/Models/consultasFiltro/filter';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  baseURL = environment.baseUrl + 'alumnos/';

  constructor(private http: HttpClient) { }

  gets(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.baseURL);
  }

  create(alumno: AlumnoCompleto): Observable<AlumnoCompleto>{
    return this.http.post<AlumnoCompleto>(this.baseURL, alumno);
  }

  update(alumno: AlumnoCompleto): Observable<AlumnoCompleto>{
    return this.http.post<AlumnoCompleto>(this.baseURL, alumno);
  }

  getWithFiltro(limitar: Filter){
    let url = environment.baseUrl + 'Carreras/';
    return this.http.post<Alumno[]>(url, limitar);
  }
  
}

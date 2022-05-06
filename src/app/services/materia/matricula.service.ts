import { Injectable } from '@angular/core';
import { MateriaAlumnoVistaModelo } from 'src/app/Models/materia-alumno-vista-modelo';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlumnoCarreraMatricula } from 'src/app/Models/alumno-carrera-matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  baseURL = environment.baseUrl + 'AlumnoCarreraMatriculas/';

  constructor(private http: HttpClient) { }

  gets(nuControl: string): Observable<MateriaAlumnoVistaModelo[]>{
    const url = this.baseURL + nuControl;
    return this.http.get<MateriaAlumnoVistaModelo[]>(url);
  }

  post(matriculaOBJ: AlumnoCarreraMatricula): Observable<AlumnoCarreraMatricula>{
    return this.http.post<AlumnoCarreraMatricula>(this.baseURL,matriculaOBJ);
  }

}

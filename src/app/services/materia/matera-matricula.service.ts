import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Materia } from 'src/app/Models/materia';
import { Observable } from 'rxjs';
import { AlumnoCarreraMatricula } from 'src/app/Models/alumno-carrera-matricula';

@Injectable({
  providedIn: 'root'
})
export class MateraMatriculaService {

  baseURL = environment.baseUrl + 'Materias/';

  constructor(private http: HttpClient) { }

  //Obtener materias por alumno NumControl
  get(numeroControl: string): Observable<AlumnoCarreraMatricula[]>{
    const url = this.baseURL+numeroControl;
    console.log(url);
    return this.http.get<AlumnoCarreraMatricula[]>(url);
  }

  //Da de alta materias o modifica materias.
  update(materia: Materia): Observable<AlumnoCarreraMatricula>{
    return this.http.post<AlumnoCarreraMatricula>(this.baseURL, materia);
  }

}

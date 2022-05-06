import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'src/app/services/materia/matricula.service';
import { MateriaAlumnoVistaModelo } from 'src/app/Models/materia-alumno-vista-modelo';
import { AuthenticationServiceService } from 'src/app/services/login/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-vista',
  templateUrl: './alumno-vista.component.html',
  styleUrls: ['./alumno-vista.component.css']
})
export class AlumnoVistaComponent implements OnInit {

  // Inicio Validar apertura, con nivel de acceso
  accsesLevel: string = "0";// Para la redireccion del usuario
  // Fin Validar apertura, con nivel de acceso
  
  constructor(private matriculaNew: MatriculaService,
              // Inicio Validar apertura, con nivel de acceso
              private authentication : AuthenticationServiceService, 
              private route: Router 
              // Fin Validar apertura, con nivel de acceso
  ) { 
    // Inicio Validar apertura, con nivel de acceso
    this.authentication.acceso.subscribe(x => this.accsesLevel = x);
    // Fin Validar apertura, con nivel de acceso
  }

  ngOnInit() {
    // Inicio Validar apertura, con nivel de acceso
    // if (this.accsesLevel != "2" && this.accsesLevel != "1"){
    //   this.route.navigate(["login"])
    // }
    // Fin Validar apertura, con nivel de acceso
  }

  //Variables pata tabla
  semestres = [
    //{semestre, materias del semestre}
    { id: '1', listaSemestre: [] },
    { id: '2', listaSemestre: [] },
    { id: '3', listaSemestre: [] },
    { id: '4', listaSemestre: [] },
    { id: '5', listaSemestre: [] },
    { id: '6', listaSemestre: [] },
    { id: '7', listaSemestre: [] },
    { id: '8', listaSemestre: [] },
    { id: '9', listaSemestre: [] },
    { id: '10', listaSemestre: [] },
    { id: '11', listaSemestre: [] },
    { id: '12', listaSemestre: [] },
    { id: '13', listaSemestre: [] }
  ];
  connectedTo = [];

  //Variale 
  listadoMatricula: any = [];

  //Variables Reticula
  materiasVAModelo: MateriaAlumnoVistaModelo[];

  //Carga la reticula del alumno
  getReticula(control: string) {
    this.matriculaNew.gets(control).subscribe((response: any) => {
      this.materiasVAModelo = response;
      this.cargarMaterias();
    });
  }

  //recepcion

  cargarMaterias() {

    this.limpiarSemestre();

    for (let mat = 0; mat < this.materiasVAModelo.length; mat++) {

      var materiaVM: MateriaAlumnoVistaModelo = this.materiasVAModelo[mat];

      //medio de seleccion para el semestre cargado
      var semestreDefault: number = materiaVM.alumnoCarreraMatricula.semestre;

      this.listadoMatricula.push(materiaVM);

      //estatus de la materia
      if (materiaVM.alumnoCarreraMatricula.estatusMateria == "") {
        var estatusNew: string = "Sin cursar";
      } else {
        var estatusNew: string = materiaVM.alumnoCarreraMatricula.estatusMateria;
      }

      if (semestreDefault == 1) {
        this.semestres[0].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 2) {
        this.semestres[1].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 3) {
        this.semestres[2].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 4) {
        this.semestres[3].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 5) {
        this.semestres[4].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 6) {
        this.semestres[5].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 7) {
        this.semestres[6].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 8) {
        this.semestres[7].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 9) {
        this.semestres[8].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 10) {
        this.semestres[9].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 11) {
        this.semestres[10].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 12) {
        this.semestres[11].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else if (semestreDefault == 13) {
        this.semestres[12].listaSemestre.push(materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
      } else {
        alert("Error, por favor ponerse en contacto con su jefe de divicion.");
      }

    }

    for (let semestre of this.semestres) {
      this.connectedTo.push(semestre.id);
    };

  }

  //Limpia el arreglo
  limpiarSemestre() {
    this.semestres[0].listaSemestre = [];
    this.semestres[1].listaSemestre = [];
    this.semestres[2].listaSemestre = [];
    this.semestres[3].listaSemestre = [];
    this.semestres[4].listaSemestre = [];
    this.semestres[5].listaSemestre = [];
    this.semestres[6].listaSemestre = [];
    this.semestres[7].listaSemestre = [];
    this.semestres[8].listaSemestre = [];
    this.semestres[9].listaSemestre = [];
    this.semestres[10].listaSemestre = [];
    this.semestres[11].listaSemestre = [];
    this.semestres[12].listaSemestre = [];
  }

}

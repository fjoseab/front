import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Models/alumno';
import { AlumnoService } from 'src/app/services/alumno/alumno.service';
import { AlumnoCarreraMatricula } from 'src/app/Models/alumno-carrera-matricula';
import { MateraMatriculaService } from 'src/app/services/materia/matera-matricula.service';
import { MateriaAlumnoVistaModelo } from 'src/app/Models/materia-alumno-vista-modelo';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatriculaService } from 'src/app/services/materia/matricula.service';
import { AuthenticationServiceService } from 'src/app/services/login/authentication-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reticulas',
    templateUrl: './reticulas.component.html',
    styleUrls: ['./reticulas.component.css']
})
export class ReticulasComponent implements OnInit {

    // Inicio Validar apertura, con nivel de acceso
    accsesLevel: string = "0";// Para la redireccion del usuario
    // Fin Validar apertura, con nivel de acceso
    
    visible:boolean = true;
    
    //Variables cargar datos a tabla
    alumnos: Alumno[];
    alumno: Alumno;

    //Variables Reticula
    materiasVAModelo: MateriaAlumnoVistaModelo[];

    //Variables pata tabla dinamica.
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

    //Constructor
    constructor(private alumnoService: AlumnoService, 
                private matriculaNew: MatriculaService,
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
        //     this.route.navigate(["login"])
        // }
        // Fin Validar apertura, con nivel de acceso
        this.getsAlumnos();
    }

    //Cargar alumnos Inicial
    getsAlumnos() {                                                         //Carga todos los alumnos
        this.alumnoService.gets().subscribe((response: any) => {
            this.alumnos = response;
        }, error => console.log(error));
    }

    //Carga la reticula del alumno
    getReticula(control: string) {
        this.matriculaNew.gets(control).subscribe((response: any) => {
            this.materiasVAModelo = response;
            this.cargarMaterias();
        });
        this.visible = !this.visible
    }

    //recepcion

    cargarMaterias() {
        
        this.limpiarSemestre();

        for (let mat = 0; mat < this.materiasVAModelo.length; mat++) {

            var materiaVM: MateriaAlumnoVistaModelo = this.materiasVAModelo[mat];

            //medio de seleccion para el semestre cargado
            var semestreDefault: number = materiaVM.alumnoCarreraMatricula.semestre;
            
            this.listadoMatricula.push( materiaVM );

            //estatus de la materia
            if(materiaVM.alumnoCarreraMatricula.estatusMateria == ""){
                var estatusNew:string = "Sin cursar";
            } else {
                var estatusNew:string = materiaVM.alumnoCarreraMatricula.estatusMateria;
            }

            if (semestreDefault == 1) {
                this.semestres[0].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 2) {
                this.semestres[1].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 3) {
                this.semestres[2].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 4) {
                this.semestres[3].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 5) {
                this.semestres[4].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 6) {
                this.semestres[5].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 7) {
                this.semestres[6].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 8) {
                this.semestres[7].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 9) {
                this.semestres[8].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 10) {
                this.semestres[9].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 11) {
                this.semestres[10].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 12) {
                this.semestres[11].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else if (semestreDefault == 13) {
                this.semestres[12].listaSemestre.push( materiaVM.materia.idMateria + " - " + materiaVM.materia.nombre + " - " + estatusNew + " - " + materiaVM.materia.valorCreditos);
            } else {
                alert("Error, por favor ponerse en contacto con su jefe de divicion.");
            }

        }

        for (let semestre of this.semestres) {
            this.connectedTo.push(semestre.id);
        };
        
    }

    //Evento drop
    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            // start datos de la materia pasada
            let materia: string = event.previousContainer.data[event.previousIndex]; //let materia es la cadena de la variable pasada.
            var datosMateria = materia.split(" - ");
            // end datos de la materia pasada
            //console.log(datosMateria[1]);
            if (datosMateria[1] === "Aprobado") {
                // Mataria aprobado, no se recarga ni se modifica.
            } else {
                // start datos para el calculo de creditos en tabla
                let creditosCargados: number = 1;
                let cadenaTemporal = [];
                let valor = "";
                // end datos para el calculo de creditos en tabla
                var cadenaReceptora = event.container.data; //arreglo de la tabla donde esta la materia
                for (let posicion = 0; posicion < cadenaReceptora.length; posicion++) {
                    valor = cadenaReceptora[posicion];// carga la cadena de la materia
                    cadenaTemporal = valor.split(" - "); // separando la cadena de la materia por secciones, separado por: espacio gion espacio ' - '.
                    valor = cadenaTemporal[(cadenaTemporal.length) - 1]; // cargando el valor en creditos de la materia 
                    creditosCargados = creditosCargados + (+valor); // casteando y sumando el valor en creditos al total de creditos 
                }
                //if cambio es valido 
                if (creditosCargados <= 30) {
                    //Start Update
                    let nuevoSemestre = event.container.id;
                    //End Update
                    transferArrayItem(
                        event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex
                    );
                    //Start Update
                    this.actualizarMatricula(datosMateria[0],nuevoSemestre);
                    //End Update
                }
            }
        }
    }

    actualizador: AlumnoCarreraMatricula;

    //actualizar matricula
    actualizarMatricula( id:String, nuevoSemestre: string ){
        for (let position = 0; position < this.listadoMatricula.length; position++) {

            const aComparar:MateriaAlumnoVistaModelo = this.listadoMatricula[position];

            if ( aComparar.alumnoCarreraMatricula.idMatricula == Number(id) ) {

                console.log("Entra IF");

                aComparar.alumnoCarreraMatricula.semestre = Number(nuevoSemestre);

                console.log(aComparar);

                
                this.matriculaNew.post( aComparar.alumnoCarreraMatricula ).subscribe( ( response: any ) => {
                },error => alert(error) );
            }
        }
    }

    //Limpia el arreglo
    limpiarSemestre(){
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

import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno/alumno.service';
import { Alumno } from 'src/app/Models/alumno';
import { AlumnoCompleto } from 'src/app/Models/alumno/alumno-completo';
import { AlumnoContactoDTO } from 'src/app/Models/alumno/alumno-contacto-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoAlumnoService } from 'src/app/services/contacto/contacto-alumno.service';
import { ContactoAlumno } from 'src/app/Models/contacto-alumno';
import { AuthenticationServiceService } from 'src/app/services/login/authentication-service.service';
import { Router } from '@angular/router';
import { Filter } from 'src/app/Models/consultasFiltro/filter';

@Component({
    selector: 'app-table-with-buttons',
    templateUrl: './table-with-buttons.component.html',
    styleUrls: ['./table-with-buttons.component.css']
})
export class TableWithButtonsComponent implements OnInit {
    
    // Inicio Validar apertura, con nivel de acceso
    accsesLevel: string = "0";// Para la redireccion del usuario
    // Fin Validar apertura, con nivel de acceso
    
    registerFormModificaciones: FormGroup;
    registerForm: FormGroup;

    alumnos: Alumno[];
    alumno: Alumno;
    estado: number;
    
    error :boolean = false;

    alumnoSeleccionado: AlumnoCompleto = {idAlumno: 0, idContacto: 0, estatus: 0, nombre: "", primerApellido: "", segundoApellido: "", sexo: "", fechaNacimiento: null, tipoSangre:"", curp: "", servicioMedico: ""};

    alumnoDTO: AlumnoContactoDTO;
    temporal: AlumnoContactoDTO;

    constructor(private alumnoService: AlumnoService, 
                private contactoService: ContactoAlumnoService, 
                private formBuilder: FormBuilder, 
                // Inicio Validar apertura, con nivel de acceso
                private authentication : AuthenticationServiceService, 
                private route: Router 
                // Fin Validar apertura, con nivel de acceso
    ) {
        // Inicio Validar apertura, con nivel de acceso
        this.authentication.acceso.subscribe(x => this.accsesLevel = x);
        // Fin Validar apertura, con nivel de acceso
    }
    
    
    filtradoForm: FormGroup;

    ngOnInit() {

        // Inicio Validar apertura, con nivel de acceso
        // if (this.accsesLevel != "2" && this.accsesLevel != "1"){
        //     this.route.navigate(["login"])
        // }
        // Fin Validar apertura, con nivel de acceso

        this.getsAlumnos();
        this.registerForm = this.formBuilder.group({
            Nombre: ['', Validators.required],
            PrimerApellido: ['', Validators.required],
            SegundoApellido:['', Validators.required],
            Sexo:['M'],
            FechaNacimiento:[Date, Validators.required],
            TipoSangre:['A+'],
            Curp:['', Validators.required],
            ServicioMedico:['', Validators.required],
            Email:['', Validators.required],
            CodigoPostal:["", Validators.required],
            EntidadFederativa:['Zacatecas'],
            Municipio:['', Validators.required],
            Colonia:['', Validators.required],
            Calle:['', Validators.required],
            NumeroExterior:['', Validators.required],
            NumeroInterior:['', Validators.required],
            AyudaDireccion:['', Validators.required],
            NumeroTelefono:['', Validators.required],
            NumeroTelefonoSecundario:['', Validators.required],
            Tutor:['', Validators.required],
            TelefonoTutor:['', Validators.required]
        });   

        this.filtradoForm = this.formBuilder.group({
            buscado: [''],
            filtrarPor: [1]
        });

    }    

    //Consumo
    getsAlumnos() {                                                         //Carga todos los alumnos
        
        this.alumnoService.gets().subscribe((response: any) => {
            this.alumnos = response;
        }, error => console.log(error));

    }

    getsAlumnosFiltro(valor:string) {                                                         //Carga todos los alumnos
        
        this.alumnoService.gets().subscribe((response: any) => {
            this.alumnos = response;
            console.log(this.alumnos);
        }, error => console.log(error));

    }

    getAlumnoEspecifico(idAlumnoBuscar:number){
        this.contactoService.get(idAlumnoBuscar).subscribe((response: any) => {
            this.alumnoDTO = response;
            //Inicio prueba
            //Objetos de alumno
            this.registerForm.get('Nombre').setValue(this.alumnoDTO.alumno.nombre);
            this.registerForm.get('PrimerApellido').setValue(this.alumnoDTO.alumno.primerApellido);
            this.registerForm.get('SegundoApellido').setValue(this.alumnoDTO.alumno.segundoApellido);
            this.registerForm.get('Sexo').setValue(this.alumnoDTO.alumno.sexo);
            this.registerForm.get('FechaNacimiento').setValue(this.alumnoDTO.alumno.fechaNacimiento);
            this.registerForm.get('TipoSangre').setValue(this.alumnoDTO.alumno.tipoSangre);
            this.registerForm.get('Curp').setValue(this.alumnoDTO.alumno.curp);
            this.registerForm.get('ServicioMedico').setValue(this.alumnoDTO.alumno.servicioMedico);
            //Objetos de alumno contacto
            this.registerForm.get('Email').setValue(this.alumnoDTO.contacto.email);
            this.registerForm.get('CodigoPostal').setValue(this.alumnoDTO.contacto.codigoPostal);
            this.registerForm.get('EntidadFederativa').setValue(this.alumnoDTO.contacto.entidadFederativa);
            this.registerForm.get('Municipio').setValue(this.alumnoDTO.contacto.municipio);
            this.registerForm.get('Colonia').setValue(this.alumnoDTO.contacto.colonia);
            this.registerForm.get('Calle').setValue(this.alumnoDTO.contacto.calle);
            this.registerForm.get('NumeroExterior').setValue(this.alumnoDTO.contacto.numeroExterior);
            this.registerForm.get('NumeroInterior').setValue(this.alumnoDTO.contacto.numeroInterior);
            this.registerForm.get('AyudaDireccion').setValue(this.alumnoDTO.contacto.ayudaDirecion);
            this.registerForm.get('NumeroTelefono').setValue(this.alumnoDTO.contacto.numeroInterior);
            this.registerForm.get('NumeroTelefonoSecundario').setValue(this.alumnoDTO.contacto.numeroTelefonoSecundario);
            this.registerForm.get('Tutor').setValue(this.alumnoDTO.contacto.tutor);
            this.registerForm.get('NumeroTelefono').setValue(this.alumnoDTO.contacto.telefonoTutor);
            //Fin prueba
        }, error => console.log(error));

    }

    actualizarEstadoAlumno(){
        this.alumnoDTO.alumno.estatus = this.estado;
        this.alumnoService.create(this.alumnoDTO.alumno).subscribe((response: AlumnoCompleto) => {
            this.alumnoDTO.alumno = response;
            this.getsAlumnos();
        }, error => console.log(error));
    }

    seleccion(estado:number){
        this.estado = estado;
    }

    NuevoAlumno(){

        this.error = false;

        //constantes para valores de tipo alumno
        const n = this.registerForm.get('Nombre').value;
        const pap = this.registerForm.get('PrimerApellido').value;
        const sap = this.registerForm.get('SegundoApellido').value;
        const sexo = this.registerForm.get('Sexo').value;
        const fcn = this.registerForm.get('FechaNacimiento').value;
        const ts = this.registerForm.get('TipoSangre').value;
        const curp = this.registerForm.get('Curp').value;
        const sm = this.registerForm.get('ServicioMedico').value;
        

        //constantes para valores de tipo alumnoontacto
        const cr = this.registerForm.get('Email').value;
        const cp = this.registerForm.get('CodigoPostal').value;
        const en = this.registerForm.get('EntidadFederativa').value;
        const m = this.registerForm.get('Municipio').value;
        const cl = this.registerForm.get('Colonia').value;
        const cll = this.registerForm.get('Calle').value;
        const ne = this.registerForm.get('NumeroExterior').value;
        const ni = this.registerForm.get('NumeroInterior').value;
        const ad = this.registerForm.get('AyudaDireccion').value;
        const nt = this.registerForm.get('NumeroTelefono').value;
        const nts = this.registerForm.get('NumeroTelefonoSecundario').value;
        const nmt = this.registerForm.get('Tutor').value;
        const tt = this.registerForm.get('NumeroTelefono').value;

        //Valida los campos
        if (n == "" || pap == "" || sap == "" || sexo == "" || fcn == "" || ts == "" || curp == "" || sm == "" || cr == "" || cp == "" || en == "" || m == "" || cl == "" || cll == "" || ne == "" || ad == "" || nt == "" || nmt == "" || tt == "" ){
            alert("Revise los datos");
            this.error=true;
        }
        if (ni == "") {
            const ni = "0";
        }
        if (nts == "") {
            const nts = "0";
        }

        if(this.error === false){
            //Crea el obj de usuario
            const alumnoDatos: AlumnoCompleto = {idAlumno: 0, idContacto: 0, estatus: 1, nombre: n, 
                primerApellido: pap, segundoApellido: sap, sexo: sexo, fechaNacimiento: fcn, tipoSangre:ts, curp: curp, servicioMedico: sm};

            //crea un objeto de contacto.
            const alumnoontacto: ContactoAlumno={idContacto: 0, email: cr, codigoPostal: cp, 
                entidadFederativa: en, municipio: m, colonia: cl, calle: cll, numeroExterior: ne, numeroInterior: ni,
                ayudaDirecion: ad, numeroTelefono: nt, numeroTelefonoSecundario: nts, tutor: nmt, telefonoTutor: tt};
            
            //Crea un obj de DTO
            const alumnoontactoDTO: AlumnoContactoDTO={alumno:alumnoDatos, contacto: alumnoontacto};
            console.log(alumnoontactoDTO);
            

            this.contactoService.post(alumnoontactoDTO).subscribe((response: any) => {
                this.alumnoDTO = response;
                this.getsAlumnos();
            }, error => alert("Error contacte a soporte tecnico"));

             
        }

        this.limpiarRegister();
        
    }

    ActualizarAlumno(){
        //constantes para valores de tipo alumno
        const n = this.registerForm.get('Nombre').value;
        const pap = this.registerForm.get('PrimerApellido').value;
        const sap = this.registerForm.get('SegundoApellido').value;
        const sexo = this.registerForm.get('Sexo').value;
        const fcn = this.registerForm.get('FechaNacimiento').value;
        const ts = this.registerForm.get('TipoSangre').value;
        const curp = this.registerForm.get('Curp').value;
        const sm = this.registerForm.get('ServicioMedico').value;
        console.log(this.alumnoDTO.alumno.idAlumno);
        
        //Crea el alumno nuevo
        const alumnoDatos: AlumnoCompleto = {
            idAlumno: this.alumnoDTO.alumno.idAlumno, 
            idContacto: this.alumnoDTO.alumno.idContacto,
            estatus: this.alumnoDTO.alumno.estatus, nombre: n, 
            primerApellido: pap, segundoApellido: sap, 
            sexo: sexo, 
            fechaNacimiento: fcn, 
            tipoSangre: ts, 
            curp: curp, 
            servicioMedico: sm
        };

        //constantes para valores de tipo alumnoontacto
        const cr = this.registerForm.get('Email').value;
        const cp = this.registerForm.get('CodigoPostal').value;
        const en = this.registerForm.get('EntidadFederativa').value;
        const m = this.registerForm.get('Municipio').value;
        const cl = this.registerForm.get('Colonia').value;
        const cll = this.registerForm.get('Calle').value;
        const ne = this.registerForm.get('NumeroExterior').value;
        const ni = this.registerForm.get('NumeroInterior').value;
        const ad = this.registerForm.get('AyudaDireccion').value;
        const nt = this.registerForm.get('NumeroTelefono').value;
        const nts = this.registerForm.get('NumeroTelefonoSecundario').value;
        const nmt = this.registerForm.get('Tutor').value;
        const tt = this.registerForm.get('NumeroTelefono').value;

        //Crea el contacto
        const alumnoontacto: ContactoAlumno = {
            idContacto: this.alumnoDTO.contacto.idContacto, 
            email: cr, 
            codigoPostal: cp, 
            entidadFederativa: en, 
            municipio: m, 
            colonia: cl, 
            calle: cll, 
            numeroExterior: ne, 
            numeroInterior: ni,
            ayudaDirecion: ad, 
            numeroTelefono: nt, 
            numeroTelefonoSecundario: nts, 
            tutor: nmt, 
            telefonoTutor: tt
        };
        
        //Cra alumno DTO
        const alumnoontactoDTO: AlumnoContactoDTO={alumno:alumnoDatos, contacto: alumnoontacto};
        console.log(alumnoontactoDTO);
        
        //Envia el nuevo alumno
        this.contactoService.post(alumnoontactoDTO).subscribe((response: any) => {
            this.alumnoDTO = response;
            this.getsAlumnos();
        }, error => alert(error));

    }


    limpiarRegister() {
        //Reinicia los datos
        this.registerForm = this.formBuilder.group({
            Nombre: ['', Validators.required],
            PrimerApellido: ['', Validators.required],
            SegundoApellido: ['', Validators.required],
            Sexo: ['M', Validators.required],
            FechaNacimiento: [Date, Validators.required],
            TipoSangre: ['A+', Validators.required],
            Curp: ['', Validators.required],
            ServicioMedico: ['', Validators.required],
            Email: ['', Validators.required],
            CodigoPostal: [Number, Validators.required],
            EntidadFederativa: ['Zacatecas', Validators.required],
            Municipio: ['', Validators.required],
            Colonia: ['', Validators.required],
            Calle: ['', Validators.required],
            NumeroExterior: ['', Validators.required],
            NumeroInterior: ['', Validators.required],
            AyudaDireccion: ['', Validators.required],
            NumeroTelefono: [Number, Validators.required],
            NumeroTelefonoSecundario: [Number, Validators.required],
            Tutor: ['', Validators.required],
            TelefonoTutor: ['', Validators.required]
        });
    }

    filtrar(){

        var filtro: Filter = {
            filtro: this.filtradoForm.controls['filtrarPor'].value,
            buscando: this.filtradoForm.controls['buscado'].value
        }

        console.log(filtro);

        this.alumnoService.getWithFiltro(filtro).subscribe((response: any) => {
            this.alumnos = response;
        }, error => console.log(error));

    }

}
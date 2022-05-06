import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TableWithButtonsComponent } from './components/table-with-buttons/table-with-buttons.component';
import { ReticulasComponent } from './components/reticulas/reticulas.component';
import { AlumnoVistaComponent } from './components/alumno-vista/alumno-vista.component';


const routes: Routes = [
  // vistas administrador
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'alumnos', component: TableWithButtonsComponent},
  { path: 'Academica', component: ReticulasComponent},
  // vistas alumno
  { path: 'MisDatos', component: AlumnoVistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

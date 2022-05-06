import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { PiepaginaComponent } from './components/piepagina/piepagina.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableWithButtonsComponent } from './components/table-with-buttons/table-with-buttons.component';
import { ReticulasComponent } from './components/reticulas/reticulas.component';
import { AlumnoVistaComponent } from './components/alumno-vista/alumno-vista.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    PiepaginaComponent,
    TableWithButtonsComponent,
    ReticulasComponent,
    AlumnoVistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

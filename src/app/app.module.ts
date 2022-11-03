import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarCitasComponent } from './components/listas/listar-citas/listar-citas.component';
import { AgregarCitaComponent } from './components/agregar-cita/agregar-cita.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { CitasPorAgregarComponent } from './components/citas-por-agregar/citas-por-agregar.component';
import { ListarUsuariosComponent } from './components/listas/listar-usuarios/listar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListarCitasComponent,
    AgregarCitaComponent,
    AgregarClienteComponent,
    CitasPorAgregarComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

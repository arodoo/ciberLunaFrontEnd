import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { LoginComponent } from './components/vistas/login/login.component';
import { NavbarComponent } from './components/vistas/navbar/navbar.component';
import { ListarCitasComponent } from './components/listas/listar-citas/listar-citas.component';
import { AgregarCitaComponent } from './components/agregar/agregar-cita/agregar-cita.component';
import { AgregarClienteComponent } from './components/agregar/agregar-cliente/agregar-cliente.component';
import { CitasPorAgregarComponent } from './components/listas/citas-por-agregar/citas-por-agregar.component';
import { ListarClientesComponent } from './components/listas/listar-clientes/listar-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarClienteCitaComponent } from './components/agregar/agregar-cliente-cita/agregar-cliente-cita.component';
import { AgregarDetalleEquipoComponent } from './components/agregar/agregar-detalle-equipo/agregar-detalle-equipo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListarCitasComponent,
    AgregarCitaComponent,
    AgregarClienteComponent,
    CitasPorAgregarComponent,
    ListarClientesComponent,
    AgregarClienteCitaComponent,
    AgregarDetalleEquipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

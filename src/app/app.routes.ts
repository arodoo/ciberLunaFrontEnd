import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCitaComponent } from './components/agregar/agregar-cita/agregar-cita.component';
import { AgregarClienteComponent } from './components/agregar/agregar-cliente/agregar-cliente.component';
import { CitasPorAgregarComponent } from './components/listas/citas-por-agregar/citas-por-agregar.component';
import { ListarCitasComponent } from './components/listas/listar-citas/listar-citas.component';
import { ListarClientesComponent } from './components/listas/listar-clientes/listar-clientes.component';
import { LoginComponent } from './components/vistas/login/login.component';
import { NavbarComponent } from './components/vistas/navbar/navbar.component';

const APP_ROUTES : Routes = [
    {path : '', redirectTo:'login', pathMatch:'full'},
    {path : 'navbar', component : NavbarComponent},
    {path : 'login', component : LoginComponent},
    {path : 'listar-citas', component : ListarCitasComponent},
    {path : 'listar-clientes', component : ListarClientesComponent},
    {path : 'agregar-cita', component : AgregarCitaComponent},
    {path : 'agregar-cliennte', component : AgregarClienteComponent},
    {path : 'citas-por-aprobar', component : CitasPorAgregarComponent},
    {path : '***', pathMatch : 'full', redirectTo: ''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);    
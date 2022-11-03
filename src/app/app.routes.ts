import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCitaComponent } from './components/agregar-cita/agregar-cita.component';
import { CitasPorAgregarComponent } from './components/citas-por-agregar/citas-por-agregar.component';
import { ListarCitasComponent } from './components/listas/listar-citas/listar-citas.component';
import { ListarUsuariosComponent } from './components/listas/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const APP_ROUTES : Routes = [
    {path : 'navbar', component : NavbarComponent},
    {path : 'login', component : LoginComponent},
    {path : 'listar-citas', component : ListarCitasComponent},
    {path : 'listar-clientes', component : ListarUsuariosComponent},
    {path : 'agregar-cita', component : AgregarCitaComponent},
    {path : 'citas-por-aprobar', component : CitasPorAgregarComponent},
    {path : '***', pathMatch : 'full', redirectTo: ''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);    
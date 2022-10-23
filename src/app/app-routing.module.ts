import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path : 'navbar', component : NavbarComponent},
  {path : 'menu', component : MenuComponent},
  {path : 'login', component : LoginComponent},
  {path : '***', pathMatch : 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

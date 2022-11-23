import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {

  titulo = 'Equipos';
  equipos: any;
  id_equipo: any;

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.equipoService.getAllEquipos().subscribe(response =>{
      console.log(response.id_equipo)
      this.equipos = response;
    },
    error =>{
      console.log(error)
    });
  }

}

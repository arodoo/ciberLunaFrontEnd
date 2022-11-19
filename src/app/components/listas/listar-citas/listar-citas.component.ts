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
  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.equipoService.getAllEquipos().subscribe(response =>{
      this.equipos = response;
    },
    error =>{
      console.log(error)
    });
  }

}

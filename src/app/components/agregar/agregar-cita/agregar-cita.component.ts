import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent implements OnInit {

  equipoForm: FormGroup;
  id_equipo: any | null;
  titulo = "Agregar Equipo";

  constructor(public fb: FormBuilder,
              public equipoService: EquipoService,
              private router: Router,
              private aRouter: ActivatedRoute ) { 
                this.equipoForm = this.fb.group({
                  marca:[],
                  modelo:[],
                  fecha_recibido:[],
                  entregado:[],
                  estado_reparacion:[]
                })

                this.id_equipo = this.aRouter.snapshot.paramMap.get('id_servicio')
              }

  ngOnInit(): void {
  }

  save(): void {
    this.equipoService.createEquipo(this.equipoForm.value).subscribe(response =>{
      this.router.navigate(['listar-citas'])
    },
    error => {
      console.log(error)
    });
  }

}

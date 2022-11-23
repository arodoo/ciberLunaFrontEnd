import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleEquipoService } from 'src/app/services/detalle-equipo.service';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-agregar-detalle-equipo',
  templateUrl: './agregar-detalle-equipo.component.html',
  styleUrls: ['./agregar-detalle-equipo.component.css']
})
export class AgregarDetalleEquipoComponent implements OnInit {

  detalleEquipoForm: FormGroup;
  equipo_id: any | null;
  titulo = 'Detalle';

  constructor(public fb: FormBuilder,
    public detalleEquipoSerive: DetalleEquipoService,
    public equipoService: EquipoService,
    private router: Router,
    private aRouter: ActivatedRoute){
      this.detalleEquipoForm = this.fb.group({
        detalle_problema:[''],
        costo_reparacion:[''],
       // equipo:['']
       equipo:[]
      })
      this.equipo_id = this.aRouter.snapshot.paramMap.get('id_equipo')
  }

  ngOnInit(): void {
  }
  

  save(): void{
    this.detalleEquipoSerive.createDetalleEquipo(this.detalleEquipoForm.value).subscribe(response =>{
      this.router.navigate(['listar-citas'])
    },
    error =>{
      console.log(error)
    });
  }

}

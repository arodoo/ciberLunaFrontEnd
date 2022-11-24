import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})
export class EditarCitaComponent implements OnInit {

  equipoForm: FormGroup;

  id_equipo: any | null;
  equipos: any;
  titulo = "Detalles del equipo";

  constructor(public fb: FormBuilder,
    public equipoService: EquipoService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.equipoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      fecha_recibido: ['', Validators.required],
      detalle_problema: ['', Validators.required],
      costo_reparacion: ['', Validators.required],
      //entregado: new FormControl,
      //reparado: new FormControl,
    })

    this.id_equipo = this.aRouter.snapshot.paramMap.get('id_equipo');
    console.log(this.id_equipo);
  }

  ngOnInit(): void {
    this.isUpdate();
  }

  isUpdate() {
    this.equipoService.getEquipo(this.id_equipo).subscribe(response => {
      this.equipoForm.setValue({
        marca: response.marca,
        modelo: response.modelo,
        fecha_recibido: response.fecha_recibido,
        detalle_problema: response.detalle_problema,
        costo_reparacion: response.costo_reparacion,
        //entregado: response.entregado,
        //reparado: response.reparado
      });
    });
  }

  update(id_equipo: any) {
    const equipo: any = {
      marca: this.equipoForm.value.marca,
      modelo: this.equipoForm.value.modelo,
      detalle_problema: this.equipoForm.value.detalle_problema,
      costo_reparacion: this.equipoForm.value.costo_reparacion,
      //entregado: this.equipoForm.value.entregado,
      //reparado: this.equipoForm.value.reparado
    };
    this.equipoService.updateEquipo(id_equipo, equipo).subscribe(response => {
      alert('Equipo actualizado');
      this.router.navigate(['listar-citas'])
    },
      error => {
        console.log(error)
      });
  }

  saveOrUpdate(){
    this.update(this.id_equipo);
    
  };

  delete(equipo: any) {
    confirm('¿Eliminar equipo?');
    this.equipoService.deleteEquipo(equipo.id_equipo).subscribe(response => {
      this.router.navigate(['listar-citas'])
      if(response.delete == true) {
        this.equipos.pop(equipo);
      }
    });
  }
}

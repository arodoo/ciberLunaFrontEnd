import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { EquipoService } from 'src/app/services/equipo.service';

interface Empleado {
  id_empleado: number;
}



@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent implements OnInit {

  equipoForm: FormGroup;

  id_equipo: any | null;
  titulo = "Agregar Equipo";
  clientes: any;


  public isClicked: boolean = true;

  public bloquear(): void {
    if (this.isClicked == false)
      this.isClicked = true;
    else if (this.isClicked == true)
      this.isClicked = false;
  }

  public desbloquear(): void {
    this.isClicked = false;
  }

  empleado: Empleado = {
    id_empleado: 1
  }

  constructor(public fb: FormBuilder,
    public equipoService: EquipoService,
    public clienteService: ClienteService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.equipoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      detalle_problema: ['', Validators.required],
      costo_reparacion: ['', Validators.required],
      /*fecha_recibido: ['', Validators.required],*/
      cliente: new FormControl,
      empleado: [this.empleado]
    })

    //this.id_equipo = this.aRouter.snapshot.paramMap.get('id_equipo')
  }

  /*
  logCliente() {
    let select = document.getElementById("clien");
    console.log(select);
  }*/

  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe(response => {
      console.log(response);
      this.clientes = response;
    },
      error => {
        console.log(error)
      });
  }

  save(): void {
    //console.log(this.equipoForm.value);
    this.equipoService.createEquipo(this.equipoForm.value).subscribe(response => {
      alert('Equipo registrado');
      this.router.navigate(['listar-citas'])
    },
      error => {
        console.log(error)
      });
  }



}

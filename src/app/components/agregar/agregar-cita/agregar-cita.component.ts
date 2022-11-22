import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
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
  clientes: any;

  public isClicked: boolean = false;

  public bloquear(): void {
    if (this.isClicked == false)
      this.isClicked = true;
    else if (this.isClicked == true)
      this.isClicked = false;
  }

  public desbloquear(): void {
    this.isClicked = false;
  }

  constructor(public fb: FormBuilder,
    public equipoService: EquipoService,
    public clienteService: ClienteService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.equipoForm = this.fb.group({
      marca: [],
      modelo: [],
      fecha_recibido: [],
      entregado: [],
      estado_reparacion: [],
      cliente:[]
    })

    this.id_equipo = this.aRouter.snapshot.paramMap.get('id_servicio')
  }

  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe(response =>{
      this.clientes = response;
    },
    error =>{
      console.log(error)
    });
  }

  save(): void {
    this.equipoService.createEquipo(this.equipoForm.value).subscribe(response => {
      this.router.navigate(['listar-citas'])
    },
      error => {
        console.log(error)
      });
  }



}

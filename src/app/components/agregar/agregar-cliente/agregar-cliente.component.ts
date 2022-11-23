import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

interface Empleado {
  id_empleado: number
}

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  clienteForm: FormGroup;
  id_cliente: any | null;
  titulo = 'Registrar cliente';

  empleado: Empleado = {
    id_empleado: 1
  }

  constructor(public fb: FormBuilder,
    public clienteService: ClienteService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      empleado:[this.empleado]
    })

    this.id_cliente = this.aRouter.snapshot.paramMap.get('id_cliente'); //AYUDA A RECUPERAR EL Id(Guarda las rutas)
    // console.log(this.id)
  }

    ngOnInit(): void {
      
    }

    /*saveOrUpdate(): void{
      if(this.id_cliente === null){
        this.save();
      }
      else {
        this.update(this.id_cliente)
      }
    }*/

    save(): void {
      console.log(this.clienteForm.value)
      this.clienteService.createCliente(this.clienteForm.value).subscribe(response =>{ 
        this.router.navigate(['listar-clientes'])
      },
        error => {
          console.error(error)
        }
      );
    }

    /*isUpdate() {
      if(this.id_cliente !== null) {
        this.titulo = 'Editar usuario';
        this.userService.getUser(this.id_cliente).subscribe(response => {
          // console.log(response.name);
          this.clienteForm.setValue({
            nombre: response.nombre,
            apellido: response.apellido,
            telefono: response.telefono
          });
        });
      }
    }*/

    /*update(id_cliente: any) {
      const user: any = {
        nombre: this.clienteForm.value.nombre,
        las_name: this.clienteForm.value.apellido,
        email: this.clienteForm.value.telefono
      };
  
      this.userService.updateUser(id_cliente, user).subscribe(response => {
        this.router.navigate(['listar-clientes']);
      },
        error => {
          console.error(error)
        }
      );
    }*/

  }

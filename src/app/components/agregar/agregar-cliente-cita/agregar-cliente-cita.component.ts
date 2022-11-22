import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-agregar-cliente-cita',
  templateUrl: './agregar-cliente-cita.component.html',
  styleUrls: ['./agregar-cliente-cita.component.css']
})
export class AgregarClienteCitaComponent implements OnInit {

  clienteForm: FormGroup;
  id_cliente: any | null;
  titulo = 'Registrar cliente';

  constructor(public fb: FormBuilder,
    public userService: UserService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required]
    })

    this.id_cliente = this.aRouter.snapshot.paramMap.get('id_cliente'); //AYUDA A RECUPERAR EL Id(Guarda las rutas)
    // console.log(this.id)
  }

    ngOnInit(): void {
    this.isUpdate();
    }

    saveOrUpdate(): void{
      console.log(this.id_cliente);
      if(this.id_cliente === null){
        this.save();
      }
      else {
        this.update(this.id_cliente)
      }
    }

    save(): void {
      this.userService.creteUser(this.clienteForm.value).subscribe(response =>{ //funciones de flecha en Ts
        // this.userForm.reset();
        this.router.navigate(['agregar-cita'])
      },
        error => {
          console.error(error)
        }
      );
    }

    isUpdate() {
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
    }

    update(id_cliente: any) {
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
    }

}

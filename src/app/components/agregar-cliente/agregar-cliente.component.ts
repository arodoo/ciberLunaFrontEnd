import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  userForm: FormGroup;
  id: any | null;
  titulo = 'Registrar cliente';

  constructor(public fb: FormBuilder,
    public userService: UserService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required]
    })

    this.id = this.aRouter.snapshot.paramMap.get('id'); //AYUDA A RECUPERAR EL Id(Guarda las rutas)
    // console.log(this.id)
  }

    ngOnInit(): void {
    this.isUpdate();
    }

    saveOrUpdate(): void{
      if(this.id === null){
        this.save();
      }
      else {
        this.update(this.id)
      }
    }

    save(): void {
      this.userService.creteUser(this.userForm.value).subscribe(response =>{ //funciones de flecha en Ts
        // this.userForm.reset();
        this.router.navigate(['agregar-cita'])
      },
        error => {
          console.error(error)
        }
      );
    }

    isUpdate() {
      if(this.id !== null) {
        this.titulo = 'Editar usuario';
        this.userService.getUser(this.id).subscribe(response => {
          // console.log(response.name);
          this.userForm.setValue({
            nombre: response.nombre,
            apellido: response.apellido,
            telefono: response.telefono
          });
        });
      }
    }

    update(id: any) {
      const user: any = {
        nombre: this.userForm.value.nombre,
        las_name: this.userForm.value.apellido,
        email: this.userForm.value.telefono
      };
  
      this.userService.updateUser(id, user).subscribe(response => {
        this.router.navigate(['listar-clientes']);
      },
        error => {
          console.error(error)
        }
      );
    }

  }

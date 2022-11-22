import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  titulo = 'Clientes';
  tieneEquipo: boolean = false;
  clientes: any;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe(response =>{
      this.clientes = response;
    },
    error =>{
      console.log(error)
    });
  }

}

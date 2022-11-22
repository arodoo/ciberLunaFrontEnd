import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL = 'http://localhost:8080/api/clientes'

  constructor(private httpClient: HttpClient) { }

  public getAllClientes(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getCliente(id_cliente: any): Observable<any> {
    return this.httpClient.get(this.URL + "/" + id_cliente);
  }

  public createCliente(cliente: any): Observable<any> {
    return this.httpClient.post(this.URL, cliente);
  }

  public deleteCliente(id_cliente: any): Observable<any> {
    return this.httpClient.delete(this.URL + "/" + id_cliente)
  }

  public updateCliente(id_cliente: any, cliente: any) {
    return this.httpClient.put(this.URL + "/" + id_cliente, cliente);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleEquipoService {
  private URL = 'http://localhost:8080/api/detalles_equipos'

  constructor(private httpClient: HttpClient) { }

  public getAllgetAllDetallesEquipo(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getDetalleEquipo(id_detalle_equipo: any): Observable<any> {
    return this.httpClient.get(this.URL + "/" + id_detalle_equipo);
  }

  public createDetalleEquipo(detalleEquipo: any): Observable<any> {
    return this.httpClient.post(this.URL, detalleEquipo);
  }

  public deleteDetalleEquipo(id_detalle_equipo: any): Observable<any> {
    return this.httpClient.delete(this.URL + "/" + id_detalle_equipo)
  }
}


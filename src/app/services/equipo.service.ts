import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private URL = 'http://localhost:8080/api/equipos';

  constructor(private httpClient: HttpClient) { }

  public getAllEquipos(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getEquipo(id_equipo: any): Observable<any> {
    return this.httpClient.get(this.URL + "/" + id_equipo);
  }

  public createEquipo(equipo: any): Observable<any> {
    return this.httpClient.post(this.URL, equipo);
  }

  public deleteEquipo(id_equipo: any): Observable<any> {
    return this.httpClient.delete(this.URL + "/" + id_equipo);
  }

  public updateEquipo(id_equipo: any, equipo: any) {
    return this.httpClient.put(this.URL + "/" + id_equipo, equipo);
  }
}

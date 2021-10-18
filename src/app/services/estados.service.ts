import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {


  private url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

  constructor(
    private http: HttpClient
  ) { }

  pegaEstados(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  pegaEstadoPorUf(uf: string): Observable<any> {
    console.log(this.url + '/' + uf);
    return this.http.get<any>(this.url + '/' + uf);
  }
}

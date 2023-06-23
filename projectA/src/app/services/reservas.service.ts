import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private url = 'https://allramos.github.io/desenvolvimento-web/lista-reservas.json'

  constructor(private http: HttpClient) {}

  requisicao(): Observable<any>{
    return this.http.get<any>(this.url)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JugadorDetail } from './jugador-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

private apiUrl: string = environment.baseUrl + 'jugador';
constructor(private http: HttpClient) { }

getJugadores(): Observable<JugadorDetail[]> {
  return this.http.get<JugadorDetail[]>(this.apiUrl);
}

getApertura(id: string): Observable<JugadorDetail> {
  return this.http.get<JugadorDetail>(this.apiUrl + "/" + id);
}

}

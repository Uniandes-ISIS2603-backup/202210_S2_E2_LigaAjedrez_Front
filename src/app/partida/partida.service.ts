import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PartidaDetail } from './partida-detail';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {


  private apiUrl: string = environment.baseUrl + 'partidas';


  constructor(private http: HttpClient) { }

  getPartidas(): Observable<PartidaDetail[]> {
    return this.http.get<PartidaDetail[]>(this.apiUrl);
  }

  getPartida(id: string): Observable<PartidaDetail> {
    return this.http.get<PartidaDetail>(this.apiUrl + "/" + id);
  }
}

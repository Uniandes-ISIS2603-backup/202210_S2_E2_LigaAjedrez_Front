import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

private apiUrl: string = environment.baseUrl + 'jugador';
constructor(private http: HttpClient) { }

}

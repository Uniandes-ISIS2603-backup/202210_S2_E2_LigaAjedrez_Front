import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JugadaDetail } from './jugada-detail';

@Injectable({
  providedIn: 'root'
})
export class JugadaService {

  private apiUrl: string = environment.baseUrl + 'jugadas';

  constructor(private http: HttpClient) { }



}

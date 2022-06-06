import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AperturaDetail } from './apertura-detail';


@Injectable({
  providedIn: 'root'
})
export class AperturaService {

  private apiUrl: string = environment.baseUrl + 'aperturas';

  constructor(private http: HttpClient) { }

  getAperturas(): Observable<AperturaDetail[]> {
    return this.http.get<AperturaDetail[]>(this.apiUrl);
  }

  getApertura(id: string): Observable<AperturaDetail> {
    return this.http.get<AperturaDetail>(this.apiUrl + "/" + id);
  }

}

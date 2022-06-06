import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigaDetail } from './liga-detail';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  private apiUrl: string = environment.baseUrl + 'ligas';
  constructor(private http: HttpClient) { }

  getLigas(): Observable<LigaDetail[]> {
    return this.http.get<LigaDetail[]>(this.apiUrl);
  }

  getLiga(id: string): Observable<LigaDetail> {
    return this.http.get<LigaDetail>(this.apiUrl + "/" + id);
  }

}

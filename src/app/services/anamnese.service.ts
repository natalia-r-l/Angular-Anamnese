import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Anamnese } from '../models/anamnese';
import { ErrorHandlerService } from './errorHandlerService.service';


@Injectable({
  providedIn: 'root'
})
export class AnamneseService {

  private url = 'http://localhost:3000/anamneses';

  httpOptions:{headers:HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    ) { }

  fetchAll(): Observable<Anamnese[]> {
    const token = localStorage.getItem('token');
    return this.httpClient
    .get<Anamnese[]>(this.url, {responseType: "json"})
    .pipe(
      catchError(this.errorHandlerService.handleError<Anamnese[]>("fetchAll", []))
    )
  }

  findAnamnese(dentista: string) {
    const token = localStorage.getItem('token');
    const body = {
      dentista: dentista
    }
    return this.httpClient.post<Anamnese[]>(this.url, body, {responseType: "json"})
  }


}

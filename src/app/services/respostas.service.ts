import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Resposta } from '../models/respostas';
import { ErrorHandlerService } from './errorHandlerService.service';

@Injectable({
  providedIn: 'root'
})
export class RespostasService {

  private url = 'http://localhost:3000/respostas';

  httpOptions:{headers:HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    ) { }

    fetchAllAnswers(): Observable<Resposta[]> {
    const token = localStorage.getItem('token');
    return this.httpClient
    .get<Resposta[]>(this.url, {responseType: "json"})
    .pipe(
      catchError(this.errorHandlerService.handleError<Resposta[]>("fetchAllAnswers", []))
    )
  }
}

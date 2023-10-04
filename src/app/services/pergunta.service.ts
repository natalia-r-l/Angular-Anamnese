import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pergunta } from '../model/perguntas';
import { ErrorHandlerService } from './errorHandlerService.service';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  private url = 'http://localhost:3000/perguntas';

  httpOptions:{headers:HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    ) { }

  fetchAllQuestions(): Observable<Pergunta[]> {
    const token = localStorage.getItem('token');
    return this.httpClient
    .get<Pergunta[]>(this.url, {responseType: "json"})
    .pipe(
      catchError(this.errorHandlerService.handleError<Pergunta[]>("fetchAllQuestions", []))
    )
  }

}

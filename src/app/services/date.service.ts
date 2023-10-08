import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Anamnese } from '../models/anamnese';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private url = 'http://localhost:3000/date';

  httpOptions:{headers:HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  findDate(date: number){
    const body = {
      date: date
    }
    return this.httpClient.post<[Anamnese]>(this.url, body, {responseType: "json"})
  }

}

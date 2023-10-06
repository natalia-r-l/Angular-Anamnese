import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Anamnese } from '../models/anamnese';


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
    ) { }


  findAnamnese(dentista: string) {
    const token = localStorage.getItem('token');
    const body = {
      dentista: dentista
    }
    return this.httpClient.post<Anamnese[]>(this.url, body, {responseType: "json"})
  }


}

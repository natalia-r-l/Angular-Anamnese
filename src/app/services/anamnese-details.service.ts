import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { AnamneseDetails } from '../models/anamneseDetails';


@Injectable({
  providedIn: 'root'
})
export class AnamneseDetailsService {

  private url = 'http://localhost:3000/anamneseDetails';

  httpOptions:{headers:HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private httpClient: HttpClient,
    ) { }


  findAnamneseDetails(id: string) {
    const token = localStorage.getItem('token');
    const body = {
      id: id
    }
    return this.httpClient.post<AnamneseDetails[]>(this.url, body, {responseType: "json"})
  }
}

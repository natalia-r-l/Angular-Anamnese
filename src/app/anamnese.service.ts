import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnamneseService {

  url = 'http://localhost:3000';

  constructor( private httpclient: HttpClient) { }

  listarAnamnese(){
    return this.httpclient.get(`http://localhost:3000/api/anm_anamnese`);
  }

  listarUm(){
    return this.httpclient.get(`http://localhost:3000/api/anm_anamnese/${1}`);
  }

  searchForDentist(){
    return this.httpclient.get(`http://localhost:3000/api/anm_anamnese/${'4ac1048f3286eb185b21c3440e882ffc'}`)
  }

}

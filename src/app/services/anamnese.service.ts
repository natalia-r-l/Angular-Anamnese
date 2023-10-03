import { Anamnese } from 'src/app/anamnese';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from './errorHandlerService.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AnamneseService {

  private url = 'http://localhost:3000/auth';

  isDentistLogged$ = new BehaviorSubject<boolean>(false);
  anamneseId: Pick<Anamnese, "id"> | any;

  httpOptions:{headers:HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(
    private httpclient: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { }

  sigup(anamnese: Omit<Anamnese, "id">): Observable<Anamnese>{
    return this.httpclient
    .post<Anamnese>(`${this.url}/signup`, anamnese, this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Anamnese>("signup"))
    );
  }

  login(
    dentista: Pick<Anamnese, "dentista">
  ): Observable<{
  token: string;
  anamneseId: Pick<Anamnese, "id">,
  dentista: Pick<Anamnese, "dentista">
  }> {
    return this.httpclient
    .post(`${this.url}/login`, { dentista }, this.httpOptions)
    .pipe(
      first(),
      tap((tokenObject: { token: string; anamneseId: Pick<Anamnese, "id">, dentista: Pick<Anamnese, "dentista"> } | any) => {
        this.anamneseId = tokenObject.anamneseId;
        localStorage.setItem("token", tokenObject.token);
        this.isDentistLogged$.next(true);
        this.router.navigate(["home"]);
      }),
      catchError(
        this.errorHandlerService.handleError<{
        token: string;
        anamneseId: Pick<Anamnese, "id">,
        dentista: Pick<Anamnese, "dentista">;
      }>("login")
      )
    );
  }


  /*
  listarAnamnese(){
    return this.httpclient.get(`http://localhost:3000/api/anm_anamnese`);
  }

  listarUm(){
    return this.httpclient.get(`http://localhost:3000/api/anm_anamnese/${1}`);
  }

  searchForDentist(){
    return this.httpclient.get(`http://localhost:3000/api/anm_anamnese/${'4ac1048f3286eb185b21c3440e882ffc'}`)
  }*/

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './errorHandlerService.service';
import { Anamnese } from 'src/app/anamnese';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = 'http://localhost:3000/auth';

  isDentistLogged$ = new BehaviorSubject<boolean>(false);
  anamneseId!: Pick<Anamnese, "id">;

  httpOptions:{headers:HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(
    private httpclient: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { }

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


}
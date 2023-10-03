import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    console.log("token", token)
    if(token){
      const clonedRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      })
      return next.handle(clonedRequest);
    } else {
      return next.handle(req);
    }
  }

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DentistaService {

  dentista: string = '';
  password: string = '';

  constructor() { }

  getDentista() {
    return this.dentista;
  }

  setDentista(novoDentista: string) {
    this.dentista = novoDentista;
  }
}

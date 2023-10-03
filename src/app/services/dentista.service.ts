import { Injectable } from '@angular/core';
import { Anamnese } from '../model/anamnese';

@Injectable({
  providedIn: 'root'
})
export class DentistaService {

  dentista: string | Pick<Anamnese, "dentista"> = '';

  constructor() { }

  getDentista() {
    return this.dentista;
  }

  setDentista(novoDentista: string | Pick<Anamnese, "dentista">) {
    this.dentista = novoDentista;
  }
}

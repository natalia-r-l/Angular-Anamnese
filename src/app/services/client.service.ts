import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Anamnese } from '../anamnese';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client: string | Pick<Anamnese, "dentista"> = '';

  constructor() { }

  getClient() {
    return this.client;
  }

  setClient(novoClient: string | Pick<Anamnese, "dentista">) {
    this.client = novoClient;
  }
}

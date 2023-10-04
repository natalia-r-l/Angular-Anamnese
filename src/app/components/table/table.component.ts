import { PerguntaService } from './../../services/pergunta.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Anamnese } from '../../model/anamnese';

import { AuthService } from 'src/app/services/auth.service';
import { AnamneseService } from 'src/app/services/anamnese.service';
import { Pergunta } from 'src/app/model/perguntas';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  anamnese$!: Observable<Anamnese[]> ;
  anamneseId!: Pick<Anamnese, "id"> ;

  pergunta$!: Observable<Pergunta[]> ;
  perguntaId!: Pick<Pergunta, "id"> ;

  constructor(
  private authService: AuthService,
  private anamneseService: AnamneseService,
  private perguntaService: PerguntaService,
 ){ }


  ngOnInit(): void {
   // this.anamnese$ = this.fetchAll();
   // this.anamneseId = this.authService.anamneseId
    this.pergunta$ = this.fetchAllQuestions();
    this.perguntaId = this.authService.perguntaId
  }

  fetchAll(): Observable<Anamnese[]>{
    return this.anamneseService.fetchAll()
  }

  fetchAllQuestions(): Observable<Pergunta[]>{
    return this.perguntaService.fetchAllQuestions()
  }

}

import { PerguntaService } from './../../services/pergunta.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Anamnese } from '../../models/anamnese';

import { AuthService } from 'src/app/services/auth.service';
import { AnamneseService } from 'src/app/services/anamnese.service';
import { Pergunta } from 'src/app/models/perguntas';
import { Resposta } from 'src/app/models/respostas';
import { RespostasService } from 'src/app/services/respostas.service';

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

  resposta$!: Observable<Resposta[]> ;
  respostaId!: Pick<Resposta, "id"> ;

  constructor(
  private authService: AuthService,
  private anamneseService: AnamneseService,
  private perguntaService: PerguntaService,
  private respostaService: RespostasService
 ){ }


  ngOnInit(): void {
   // this.anamnese$ = this.fetchAll();
   // this.anamneseId = this.authService.anamneseId
   // this.pergunta$ = this.fetchAllQuestions();
   // this.perguntaId = this.authService.perguntaId
      this.resposta$ = this.fetchAllAnswers();
      this.respostaId = this.authService.anamneseId;
  }

  fetchAll(): Observable<Anamnese[]>{
    return this.anamneseService.fetchAll()
  }

  fetchAllQuestions(): Observable<Pergunta[]>{
    return this.perguntaService.fetchAllQuestions()
  }

  fetchAllAnswers(): Observable<Resposta[]>{
    return this.respostaService.fetchAllAnswers()
  }

}

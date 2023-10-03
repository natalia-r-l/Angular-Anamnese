import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Anamnese } from 'src/app/anamnese';

import { AuthService } from 'src/app/services/auth.service';
import { AnamneseService } from 'src/app/services/anamnese.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  anamnese$!: Observable<Anamnese[]> ;
  anamneseId!: Pick<Anamnese, "id"> ;

  constructor(
  private authService: AuthService,
  private anamneseService: AnamneseService,
 ){ }


  ngOnInit(): void {
    this.anamnese$ = this.fetchAll();
    this.anamneseId = this.authService.anamneseId
  }

  fetchAll(): Observable<Anamnese[]>{
    return this.anamneseService.fetchAll()
  }


}

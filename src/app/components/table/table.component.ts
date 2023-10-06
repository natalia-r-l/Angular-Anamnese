import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { AnamneseService } from 'src/app/services/anamnese.service';
import { Anamnese } from '../../models/anamnese';
import { DentistaService } from 'src/app/services/dentista.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dentista!: string;

  anamneses!: any;
  anamneseId!: Pick<Anamnese, "id"> ;

  constructor(
  private authService: AuthService,
  private anamneseService: AnamneseService,

  private dentistaService: DentistaService,
 ){ }


  ngOnInit(): void {
    this.dentista = this.dentistaService.getDentista();
    this.findAnamnese(this.dentista);
    //this.anamnese$ = this.fetchAll();
    this.anamneseId = this.authService.anamneseId;
  }

  fetchAll(): Observable<Anamnese[]>{
    return this.anamneseService.fetchAll();
  }

  findAnamnese(dentista: string) {
    this.anamneseService.findAnamnese(dentista).subscribe(response => {
      this.anamneses = response[0];
    })
  };



}

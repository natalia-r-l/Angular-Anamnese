import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { AnamneseService } from 'src/app/services/anamnese.service';
import { Anamnese } from '../../models/anamnese';
import { DentistaService } from 'src/app/services/dentista.service';
import { AnamneseDetailsService } from 'src/app/services/anamnese-details.service';
import { AnamneseDetails } from 'src/app/models/anamneseDetails';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dentista!: string;

  anamneses!: any;
  anamnesesDetails!: any;
  anamneseId!: Pick<Anamnese, "id"> ;


  constructor(
  private authService: AuthService,
  private anamneseService: AnamneseService,
  private dentistaService: DentistaService,
 ){ }


  ngOnInit(): void {
    this.dentista = this.dentistaService.getDentista();
    this.findAnamnese(this.dentista);
    this.anamneseId = this.authService.anamneseId;

  }

  findAnamnese(dentista: string) {
    this.anamneseService.findAnamnese(dentista).subscribe(response => {
      this.anamneses = response[0];
    })
  };





}

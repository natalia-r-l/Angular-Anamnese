import { Component, OnInit } from '@angular/core';

import { Anamnese } from 'src/app/models/anamnese';
import { AnamneseService } from 'src/app/services/anamnese.service';
import { AuthService } from 'src/app/services/auth.service';
import { DentistaService } from 'src/app/services/dentista.service';

@Component({
  selector: 'app-table-anamneses',
  templateUrl: './table-anamneses.component.html',
  styleUrls: ['./table-anamneses.component.css']
})
export class TableAnamnesesComponent implements OnInit {

  dentista!: string;
  anamneses!: any;
  anamneseId!: Pick<Anamnese, "id"> ;

  constructor(
    private authService: AuthService,
    private anamneseService: AnamneseService,
    private dentistaService: DentistaService,
  ) { }

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

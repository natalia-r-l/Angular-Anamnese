
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BnNgIdleService } from 'bn-ng-idle';

import { Anamnese } from 'src/app/models/anamnese';
import { AnamneseService } from 'src/app/services/anamnese.service';
import { AuthService } from 'src/app/services/auth.service';
import { DentistaService } from 'src/app/services/dentista.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dentista!: string;

  anamneses!: any;

  anamneseId!: Pick<Anamnese, "id"> ;

  constructor(
    private bnIdle: BnNgIdleService,
    private router: Router,
    private authService: AuthService,
    private anamneseService: AnamneseService,
    private dentistaService: DentistaService,
  ) { }

  ngOnInit(): void {
    this.dentista = this.dentistaService.getDentista();
    this.findAnamnese(this.dentista);
    this.anamneseId = this.authService.anamneseId;
    this.bnIdle.startWatching(300).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.bnIdle.stopTimer();
      }
    });
  }

  findAnamnese(dentista: string) {
    this.anamneseService.findAnamnese(dentista).subscribe(response => {
      this.anamneses = response[0];
    })
  };


}

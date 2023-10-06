import { Component, OnInit } from '@angular/core';
import { AnamneseDetails } from 'src/app/models/anamneseDetails';
import { AnamneseDetailsService } from 'src/app/services/anamnese-details.service';
import { AuthService } from 'src/app/services/auth.service';
import { DentistaService } from 'src/app/services/dentista.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  anamneseDetailId!: Pick<AnamneseDetails, "id">;
  anamnesesDetails!: any;
  dentista!: string;

  constructor(
    private anamneseDetailsService: AnamneseDetailsService,
    private authService: AuthService,
    private dentistaService: DentistaService,
  ) { }

  ngOnInit(): void {
    this.dentista = this.dentistaService.getDentista();
    this.findAnamneseDetails(this.dentista);
    this.anamneseDetailId = this.authService.anamneseDetailId;
  }

  findAnamneseDetails(dentista: string){
    this.anamneseDetailsService.findAnamneseDetails(dentista).subscribe(response => {
      this.anamnesesDetails = response[0];
    })
  };
}

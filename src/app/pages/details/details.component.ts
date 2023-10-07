import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anamnese } from 'src/app/models/anamnese';
import { AnamneseDetails } from 'src/app/models/anamneseDetails';
import { AnamneseDetailsService } from 'src/app/services/anamnese-details.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  anamneseDetailId!: Pick<AnamneseDetails, "id">;
  anamnesesDetails!: any;

  dentista!: string;
  id!: number;

  constructor(
    private anamneseDetailsService: AnamneseDetailsService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.findAnamneseDetails(id);
    }
    this.anamneseDetailId = this.authService.anamneseDetailId;
  }

  findAnamneseDetails(id: string){
    this.anamneseDetailsService.findAnamneseDetails(id).subscribe(response => {
      this.anamnesesDetails = response[0];
    })
  };
}

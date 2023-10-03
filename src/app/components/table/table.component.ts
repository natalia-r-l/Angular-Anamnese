import { Component, Input, OnInit } from '@angular/core';
import { Anamnese } from 'src/app/anamnese';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() anamnese: Anamnese = {
    id: 0,
    paciente:'',
    data:0,
    dentista:'',
  }


  ngOnInit(): void {
    //this.listarAnamnese();
    //this.buscarUm();
    //this.searchForDentist();
  }

  /*
  listarAnamnese(){
    this.ananmeseService.listarAnamnese().subscribe( response => {
      console.log("anamnese:", response);
    })
  }

  buscarUm(){
    this.ananmeseService.listarUm().subscribe( response => {
      console.log("anamnese:", response);
    })
  }

 searchForDentist(){
  this.ananmeseService.searchForDentist().subscribe( response => {
    console.log("dentista:", response);
  })
 }*/

}

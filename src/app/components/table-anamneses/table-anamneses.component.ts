import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-anamneses',
  templateUrl: './table-anamneses.component.html',
  styleUrls: ['./table-anamneses.component.css']
})
export class TableAnamnesesComponent implements OnInit {

  dentista!: string;
  @Input() anamneses!: any;

  constructor() { }

  ngOnInit(): void { }


}

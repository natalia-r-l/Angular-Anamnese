import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {

  @Input() anamnesesDetails!: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }


}

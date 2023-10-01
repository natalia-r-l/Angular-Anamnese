import { Anamnese } from './../anamnese';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anamnese-list',
  templateUrl: './anamnese-list.component.html',
  styleUrls: ['./anamnese-list.component.css']
})
export class AnamneseListComponent implements OnInit {

  anamneseList : Anamnese[] = []

  constructor() { }

  ngOnInit(): void {
  }

}

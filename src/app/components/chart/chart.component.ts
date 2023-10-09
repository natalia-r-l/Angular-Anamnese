import { Component, Input, OnInit } from '@angular/core';

import { Chart, registerables } from 'node_modules/chart.js';

import { Anamnese } from 'src/app/models/anamnese';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() anamneses!: Anamnese[];
  arrayData: any = [];
  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.findDate();
    this.RenderChart();
  }

  RenderChart(){
    const myChart = new Chart("ctx" , {
        type: 'bar',
        data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [{
            label: 'Quantidade de Anamneses',
            data: this.data,
            borderWidth: 1,

          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    } )
  }

  findDate() {
    this.anamneses.forEach(anamnese => {
      const str = anamnese.data.toString();
      this.arrayData.push(+str.substring(9))
    })

    for (let num of this.arrayData) {
      this.data[num] = this.data[num] ? this.data[num] + 1 : 1;
      console.log('Array:', this.arrayData )
    }
  }
}

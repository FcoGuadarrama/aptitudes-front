import {Component, Input, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() results: any;
  public chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['abstracta', 'coord. Visio', 'numerica', 'verbal', 'persuasiva', 'mecanica', 'social', 'directiva',
          'organización', 'musical', 'a.plastico', 'espacial'],
        datasets: [
          {
            label: "Puntaje",
            data: this.results,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)',
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)'
            ],
            borderColor: 'black'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }


}

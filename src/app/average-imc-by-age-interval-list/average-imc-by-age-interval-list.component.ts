import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../service/candidate.service';

@Component({
  selector: 'app-average-imc-by-age-interval-list',
  templateUrl: './average-imc-by-age-interval-list.component.html',
  styleUrls: ['./average-imc-by-age-interval-list.component.css']
})
export class AverageImcByAgeIntervalListComponent implements OnInit {

    ages: string[];
    imcAverages: number[];

  constructor(private candidateService: CandidateService) {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = 'bar';

  public barChartLegend = false;

  public barChartLabels: any;

  public barChartData = [];

  ngOnInit() {
    this.candidateService.getAverageImcByAgeInterval().subscribe(data => {

      this.ages = data.map(data => data.age); 
      this.imcAverages = data.map(data => data.imcAverage); 
      this.barChartLabels = this.ages;

      console.log("to no intervalo de tempo");

      let yAxis = [{
        data: this.imcAverages, label: 'IMC Médio'
      }];

      this.barChartData = yAxis;
    });
  }
}
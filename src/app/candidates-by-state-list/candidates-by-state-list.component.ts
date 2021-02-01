import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../service/candidate.service';

@Component({
  selector: 'app-candidates-by-state-list',
  templateUrl: './candidates-by-state-list.component.html',
  styleUrls: ['./candidates-by-state-list.component.css']
})

export class CandidatesByStateListComponent implements OnInit {

  constructor(private candidateService: CandidateService) {
  }

  states: string[];
  candidates: number[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = 'bar';

  public barChartLegend = true;

  public barChartLabels: any;

  public barChartData = [];

  ngOnInit() {
    this.candidateService.getCandidatesByState().subscribe(data => {
      
      this.states = data.map(data => data.state); 
      this.candidates = data.map(data => data.candidates); 
      this.barChartLabels = this.states;

      console.log("to no por estado");

      let yAxis = [{
        data: this.candidates, label: 'Quantidade de candidatos'
      }];

      this.barChartData = yAxis;
    });
  }
}
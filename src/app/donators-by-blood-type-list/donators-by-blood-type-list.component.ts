import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../service/candidate.service';

@Component({
  selector: 'app-donators-by-blood-type-list',
  templateUrl: './donators-by-blood-type-list.component.html',
  styleUrls: ['./donators-by-blood-type-list.component.css']
})
export class DonatorsByBloodTypeListComponent implements OnInit {

  bloodTypes: string[];
  donators: number[];

  constructor(private candidateService: CandidateService) {
  }

  public doughnutChartType = 'doughnut';

  public doughnutChartLabels: any;

  public doughnutChartData = [];

  ngOnInit() {
    this.candidateService.getDonatorsByBloodType().subscribe(data => {

      this.bloodTypes = data.map(data => data.bloodType); 
      this.donators = data.map(data => data.donators); 
      this.doughnutChartLabels = this.bloodTypes;

      console.log("to nos doadores");

      console.log(this.doughnutChartData);

      let yAxis = {
        datasets: [{
          data: this.donators,
          backGroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ]
        }],
        labels: this.bloodTypes
      };
      
      
      this.doughnutChartData = this.donators;

      console.log(this.doughnutChartData);
      console.log(this.doughnutChartLabels);
    });
  }
}
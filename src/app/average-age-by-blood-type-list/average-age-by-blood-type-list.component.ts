import { Component, OnInit } from '@angular/core';
import { AverageAgeByBloodType } from '../model/average-age-by-blood-type';
import { CandidateService } from '../service/candidate.service';

@Component({
  selector: 'app-average-age-by-blood-type-list',
  templateUrl: './average-age-by-blood-type-list.component.html',
  styleUrls: ['./average-age-by-blood-type-list.component.css']
})
export class AverageAgeByBloodTypeListComponent implements OnInit {

  averageList: AverageAgeByBloodType[];

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit() {
    this.candidateService.getAverageAgeByBloodType().subscribe(data => {
      this.averageList = data;
    });
  }
}
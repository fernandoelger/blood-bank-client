import { Component, OnInit } from '@angular/core';
import { ObesePercentageBySex } from '../model/obese-percentage-by-sex';
import { CandidateService } from '../service/candidate.service';

@Component({
  selector: 'app-obese-percentage-by-sex-list',
  templateUrl: './obese-percentage-by-sex-list.component.html',
  styleUrls: ['./obese-percentage-by-sex-list.component.css']
})
export class ObesePercentageBySexListComponent implements OnInit {

  percentageList: ObesePercentageBySex[];

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit() {
    this.candidateService.getObesePercentageBySex().subscribe(data => {
      this.percentageList = data;
    });
  }
}
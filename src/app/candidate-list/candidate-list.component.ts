import { Component, OnInit } from '@angular/core';
import { CandidatesByState } from '../model/candidates-by-state';
import { CandidateService } from '../service/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  list: CandidatesByState[];

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit() {
    this.candidateService.getCandidatesByState().subscribe(data => {
      this.list = data;
    });
  }
}
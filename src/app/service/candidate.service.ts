import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatesByState } from '../model/candidates-by-state';
import { AverageImcByAgeInterval } from '../model/average-imc-by-age-interval';
import { ObesePercentageBySex } from '../model/obese-percentage-by-sex';
import { AverageAgeByBloodType } from '../model/average-age-by-blood-type';
import { DonatorsByBloodType } from '../model/donators-by-blood-type';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private candidatesByStateUrl: string;
  private averageImcByAgeIntervalUrl: string;
  private obesePercentageBySexUrl: string;
  private averageAgeByBloodTypeUrl: string;
  private donatorsByBloodTypeUrl: string;

  constructor(private http: HttpClient) {
    this.candidatesByStateUrl       = 'http://localhost:8080/candidate/candidatesByState';
    this.averageImcByAgeIntervalUrl = 'http://localhost:8080/candidate/averageImcByAgeInterval';
    this.obesePercentageBySexUrl    = 'http://localhost:8080/candidate/obesePercentageBySex';
    this.averageAgeByBloodTypeUrl   = 'http://localhost:8080/candidate/averageAgeByBloodType';
    this.donatorsByBloodTypeUrl     = 'http://localhost:8080/candidate/donatorsByBloodType';
  }

  public getCandidatesByState(): Observable<CandidatesByState[]> {

    return this.http.get<CandidatesByState[]>(this.candidatesByStateUrl);
  }

  public getStates(): Observable<CandidatesByState[]> {
    return this.http.get<CandidatesByState[]>(this.candidatesByStateUrl);
  }

  public getAverageImcByAgeInterval(): Observable<AverageImcByAgeInterval[]> {
    return this.http.get<AverageImcByAgeInterval[]>(this.averageImcByAgeIntervalUrl);
  }

  public getObesePercentageBySex(): Observable<ObesePercentageBySex[]> {
    return this.http.get<ObesePercentageBySex[]>(this.obesePercentageBySexUrl);
  }

  public getAverageAgeByBloodType(): Observable<AverageAgeByBloodType[]> {
    return this.http.get<AverageAgeByBloodType[]>(this.averageAgeByBloodTypeUrl);
  }

  public getDonatorsByBloodType(): Observable<DonatorsByBloodType[]> {
    return this.http.get<DonatorsByBloodType[]>(this.donatorsByBloodTypeUrl);
  }
}
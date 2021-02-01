import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesByStateListComponent } from './candidates-by-state-list/candidates-by-state-list.component';
import { AverageImcByAgeIntervalListComponent } from './average-imc-by-age-interval-list/average-imc-by-age-interval-list.component';
import { ObesePercentageBySexListComponent } from './obese-percentage-by-sex-list/obese-percentage-by-sex-list.component';
import { AverageAgeByBloodTypeListComponent } from './average-age-by-blood-type-list/average-age-by-blood-type-list.component';
import { DonatorsByBloodTypeListComponent } from './donators-by-blood-type-list/donators-by-blood-type-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  { path: 'candidate/candidatesByState', component: CandidatesByStateListComponent },
  { path: 'candidate/averageImcByAgeInterval', component: AverageImcByAgeIntervalListComponent },
  { path: 'candidate/obesePercentageBySex', component: ObesePercentageBySexListComponent },
  { path: 'candidate/averageAgeByBloodType', component: AverageAgeByBloodTypeListComponent },
  { path: 'candidate/donatorsByBloodType', component: DonatorsByBloodTypeListComponent },
  { path: '**', component: CandidatesByStateListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

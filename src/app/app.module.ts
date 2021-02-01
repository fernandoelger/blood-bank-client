import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule} from 'ng2-charts';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateService } from './service/candidate.service';
import { CandidatesByStateListComponent } from './candidates-by-state-list/candidates-by-state-list.component';
import { AverageImcByAgeIntervalListComponent } from './average-imc-by-age-interval-list/average-imc-by-age-interval-list.component';
import { ObesePercentageBySexListComponent } from './obese-percentage-by-sex-list/obese-percentage-by-sex-list.component';
import { AverageAgeByBloodTypeListComponent } from './average-age-by-blood-type-list/average-age-by-blood-type-list.component';
import { DonatorsByBloodTypeListComponent } from './donators-by-blood-type-list/donators-by-blood-type-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CandidatesByStateListComponent,
    AverageImcByAgeIntervalListComponent,
    ObesePercentageBySexListComponent,
    AverageAgeByBloodTypeListComponent,
    DonatorsByBloodTypeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

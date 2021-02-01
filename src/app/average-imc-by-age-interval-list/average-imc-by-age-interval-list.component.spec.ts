import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageImcByAgeIntervalListComponent } from './average-imc-by-age-interval-list.component';

describe('AverageImcByAgeIntervalListComponent', () => {
  let component: AverageImcByAgeIntervalListComponent;
  let fixture: ComponentFixture<AverageImcByAgeIntervalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageImcByAgeIntervalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageImcByAgeIntervalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

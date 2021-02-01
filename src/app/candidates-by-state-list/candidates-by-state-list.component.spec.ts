import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesByStateListComponent } from './candidates-by-state-list.component';

describe('CandidatesByStateListComponent', () => {
  let component: CandidatesByStateListComponent;
  let fixture: ComponentFixture<CandidatesByStateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesByStateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesByStateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

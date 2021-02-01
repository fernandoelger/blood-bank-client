import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesePercentageBySexListComponent } from './obese-percentage-by-sex-list.component';

describe('ObesePercentageBySexListComponent', () => {
  let component: ObesePercentageBySexListComponent;
  let fixture: ComponentFixture<ObesePercentageBySexListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObesePercentageBySexListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObesePercentageBySexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

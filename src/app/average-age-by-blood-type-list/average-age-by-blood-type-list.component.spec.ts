import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageAgeByBloodTypeListComponent } from './average-age-by-blood-type-list.component';

describe('AverageAgeByBloodTypeListComponent', () => {
  let component: AverageAgeByBloodTypeListComponent;
  let fixture: ComponentFixture<AverageAgeByBloodTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageAgeByBloodTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageAgeByBloodTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

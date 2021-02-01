import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorsByBloodTypeListComponent } from './donators-by-blood-type-list.component';

describe('DonatorsByBloodTypeListComponent', () => {
  let component: DonatorsByBloodTypeListComponent;
  let fixture: ComponentFixture<DonatorsByBloodTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatorsByBloodTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorsByBloodTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

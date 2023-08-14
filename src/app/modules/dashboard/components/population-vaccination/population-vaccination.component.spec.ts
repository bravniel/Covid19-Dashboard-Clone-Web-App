import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationVaccinationComponent } from './population-vaccination.component';

describe('PopulationVaccinationComponent', () => {
  let component: PopulationVaccinationComponent;
  let fixture: ComponentFixture<PopulationVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationVaccinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

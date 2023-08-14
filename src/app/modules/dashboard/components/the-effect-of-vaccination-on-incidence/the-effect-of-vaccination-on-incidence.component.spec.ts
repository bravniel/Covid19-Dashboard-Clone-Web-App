import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheEffectOfVaccinationOnIncidenceComponent } from './the-effect-of-vaccination-on-incidence.component';

describe('TheEffectOfVaccinationOnIncidenceComponent', () => {
  let component: TheEffectOfVaccinationOnIncidenceComponent;
  let fixture: ComponentFixture<TheEffectOfVaccinationOnIncidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheEffectOfVaccinationOnIncidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheEffectOfVaccinationOnIncidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

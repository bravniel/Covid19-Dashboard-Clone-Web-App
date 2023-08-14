import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorbidityAndHospitalizationOfChildrenComponent } from './morbidity-and-hospitalization-of-children.component';

describe('MorbidityAndHospitalizationOfChildrenComponent', () => {
  let component: MorbidityAndHospitalizationOfChildrenComponent;
  let fixture: ComponentFixture<MorbidityAndHospitalizationOfChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorbidityAndHospitalizationOfChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorbidityAndHospitalizationOfChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

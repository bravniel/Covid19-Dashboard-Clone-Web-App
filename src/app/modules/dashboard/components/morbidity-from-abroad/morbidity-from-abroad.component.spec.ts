import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorbidityFromAbroadComponent } from './morbidity-from-abroad.component';

describe('MorbidityFromAbroadComponent', () => {
  let component: MorbidityFromAbroadComponent;
  let fixture: ComponentFixture<MorbidityFromAbroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorbidityFromAbroadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorbidityFromAbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

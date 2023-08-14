import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesOfGeneralMorbidityComponent } from './indices-of-general-morbidity.component';

describe('IndicesOfGeneralMorbidityComponent', () => {
  let component: IndicesOfGeneralMorbidityComponent;
  let fixture: ComponentFixture<IndicesOfGeneralMorbidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicesOfGeneralMorbidityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicesOfGeneralMorbidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

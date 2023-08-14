import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiLinesComponent } from './kpi-lines.component';

describe('KpiLinesComponent', () => {
  let component: KpiLinesComponent;
  let fixture: ComponentFixture<KpiLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

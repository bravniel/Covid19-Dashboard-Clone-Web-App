import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeasuresComponent } from './main-measures.component';

describe('MainMeasuresComponent', () => {
  let component: MainMeasuresComponent;
  let fixture: ComponentFixture<MainMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMeasuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

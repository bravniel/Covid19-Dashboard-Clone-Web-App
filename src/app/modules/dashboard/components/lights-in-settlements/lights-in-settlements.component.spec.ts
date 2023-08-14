import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsInSettlementsComponent } from './lights-in-settlements.component';

describe('LightsInSettlementsComponent', () => {
  let component: LightsInSettlementsComponent;
  let fixture: ComponentFixture<LightsInSettlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightsInSettlementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightsInSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInvestigationComponent } from './additional-investigation.component';

describe('AdditionalInvestigationComponent', () => {
  let component: AdditionalInvestigationComponent;
  let fixture: ComponentFixture<AdditionalInvestigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalInvestigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

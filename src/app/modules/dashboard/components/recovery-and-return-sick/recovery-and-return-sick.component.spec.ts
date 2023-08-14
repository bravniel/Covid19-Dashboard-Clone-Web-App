import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryAndReturnSickComponent } from './recovery-and-return-sick.component';

describe('RecoveryAndReturnSickComponent', () => {
  let component: RecoveryAndReturnSickComponent;
  let fixture: ComponentFixture<RecoveryAndReturnSickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryAndReturnSickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryAndReturnSickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

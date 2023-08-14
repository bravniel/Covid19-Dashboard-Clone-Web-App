import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOptionsButtonComponent } from './more-options-button.component';

describe('MoreOptionsButtonComponent', () => {
  let component: MoreOptionsButtonComponent;
  let fixture: ComponentFixture<MoreOptionsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreOptionsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreOptionsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

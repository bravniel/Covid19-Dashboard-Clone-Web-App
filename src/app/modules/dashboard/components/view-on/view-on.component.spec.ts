import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnComponent } from './view-on.component';

describe('ViewOnComponent', () => {
  let component: ViewOnComponent;
  let fixture: ComponentFixture<ViewOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

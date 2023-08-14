import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavbarItemComponent } from './dashboard-navbar-item.component';

describe('DashboardNavbarItemComponent', () => {
  let component: DashboardNavbarItemComponent;
  let fixture: ComponentFixture<DashboardNavbarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNavbarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

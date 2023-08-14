import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLinksDropdownComponent } from './section-links-dropdown.component';

describe('SectionLinksDropdownComponent', () => {
  let component: SectionLinksDropdownComponent;
  let fixture: ComponentFixture<SectionLinksDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLinksDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionLinksDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

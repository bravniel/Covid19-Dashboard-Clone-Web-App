import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLinksDropdownItemComponent } from './section-links-dropdown-item.component';

describe('SectionLinksDropdownItemComponent', () => {
  let component: SectionLinksDropdownItemComponent;
  let fixture: ComponentFixture<SectionLinksDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLinksDropdownItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionLinksDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

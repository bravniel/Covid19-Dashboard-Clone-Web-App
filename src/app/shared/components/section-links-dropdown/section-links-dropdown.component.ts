import { Component, Input } from '@angular/core';
import { Link } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-section-links-dropdown',
  templateUrl: './section-links-dropdown.component.html',
  styleUrls: ['./section-links-dropdown.component.scss'],
})
export class SectionLinksDropdownComponent {
  @Input() sectionLinks: Link[] = [];

  isLinksOptionsOpen: boolean = false;

  toggleLinksDropdown() {
    this.isLinksOptionsOpen = !this.isLinksOptionsOpen;
  }
  closeLinksDropdown() {
    this.isLinksOptionsOpen = false;
  }
  openLinksDropdown() {
    this.isLinksOptionsOpen = true;
  }
}

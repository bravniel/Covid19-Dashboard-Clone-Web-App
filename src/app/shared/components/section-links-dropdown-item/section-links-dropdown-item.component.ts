import { Component, Input } from '@angular/core';
import { Link } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-section-links-dropdown-item',
  templateUrl: './section-links-dropdown-item.component.html',
  styleUrls: ['./section-links-dropdown-item.component.scss'],
})
export class SectionLinksDropdownItemComponent {
  @Input() linkItem: Link = {} as Link;
}

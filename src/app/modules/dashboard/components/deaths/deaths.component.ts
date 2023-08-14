import { Component } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import { DashboardNavItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.scss'],
})
export class DeathsComponent {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = { label: 'נפטרים', link: 'deaths' };
}

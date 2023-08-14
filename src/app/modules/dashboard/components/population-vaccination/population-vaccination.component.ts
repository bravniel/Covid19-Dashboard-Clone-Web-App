import { Component, Input } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import { DashboardNavItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-population-vaccination',
  templateUrl: './population-vaccination.component.html',
  styleUrls: ['./population-vaccination.component.scss'],
})
export class PopulationVaccinationComponent {
  sectionLinks = VaccLinks;
  @Input() x = 0;
  section: DashboardNavItem =   { label: 'התחסנות האוכלוסיה', link: 'populationVaccination' };
}

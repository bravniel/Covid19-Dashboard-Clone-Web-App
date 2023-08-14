import { Component } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import { DashboardNavItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-the-effect-of-vaccination-on-incidence',
  templateUrl: './the-effect-of-vaccination-on-incidence.component.html',
  styleUrls: ['./the-effect-of-vaccination-on-incidence.component.scss'],
})
export class TheEffectOfVaccinationOnIncidenceComponent {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = {
    label: 'השפעת התחסנות על התחלואה',
    link: 'theEffectOfVaccinationOnIncidence',
  };
}

import { Component } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import { DashboardNavItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-main-measures',
  templateUrl: './main-measures.component.html',
  styleUrls: ['./main-measures.component.scss'],
})
export class MainMeasuresComponent {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = { label: 'מדדים מרכזיים', link: 'mainMeasures' };
}

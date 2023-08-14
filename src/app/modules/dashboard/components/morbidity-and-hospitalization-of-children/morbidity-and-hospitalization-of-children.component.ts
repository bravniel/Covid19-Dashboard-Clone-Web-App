import { Component } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import { DashboardNavItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-morbidity-and-hospitalization-of-children',
  templateUrl: './morbidity-and-hospitalization-of-children.component.html',
  styleUrls: ['./morbidity-and-hospitalization-of-children.component.scss'],
})
export class MorbidityAndHospitalizationOfChildrenComponent {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = {
    label: 'תחלואה ואשפוזי ילדים',
    link: 'morbidityAndHospitalizationOfChildren',
  };
}

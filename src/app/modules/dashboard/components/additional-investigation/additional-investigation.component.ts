import { Component } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import { DashboardNavItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-additional-investigation',
  templateUrl: './additional-investigation.component.html',
  styleUrls: ['./additional-investigation.component.scss'],
})
export class AdditionalInvestigationComponent {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = { label: 'תחקורים נוספים', link: 'additionalInvestigation' };
}

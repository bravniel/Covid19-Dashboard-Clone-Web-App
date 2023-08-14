import { Component } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import { DashboardNavItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-recovery-and-return-sick',
  templateUrl: './recovery-and-return-sick.component.html',
  styleUrls: ['./recovery-and-return-sick.component.scss'],
})
export class RecoveryAndReturnSickComponent {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = {
    label: 'תחלואה חוזרת ומחלימים',
    link: 'recoveryAndReturnSick',
  };
}

import { Component, Input } from '@angular/core';
import { DashboardNavItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-dashboard-navbar-item',
  templateUrl: './dashboard-navbar-item.component.html',
  styleUrls: ['./dashboard-navbar-item.component.scss'],
})
export class DashboardNavbarItemComponent {
  @Input() section: DashboardNavItem = {} as DashboardNavItem;
  @Input() activeComponentName:string='';
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-side-navbar-item',
  templateUrl: './side-navbar-item.component.html',
  styleUrls: ['./side-navbar-item.component.scss'],
})
export class SideNavbarItemComponent {
  @Input() optionItem: SideNavItem = {} as SideNavItem;
  @Output() closeSideBar = new EventEmitter<void>();

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.closeSideBar.emit();
    this.router.navigate([route]);
  }
}

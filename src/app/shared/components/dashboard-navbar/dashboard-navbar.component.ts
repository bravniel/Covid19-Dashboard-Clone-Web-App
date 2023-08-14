import { Component, OnInit } from '@angular/core';
import { pages } from 'src/app/data/app.arrays';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss'],
})
export class DashboardNavbarComponent implements OnInit {
  activeComponentName: string = '';
  sections = pages;
  lastComponentActiveId: string = '';
  ranges?: any[];
  constructor() {} // private scrollSvc: ScrollService // private generalSvc: GeneralService,

  ngOnInit(): void {
    // this.generalSvc.ActiveComponentName.subscribe((newName) => {
    //   this.ActiveComponentName = newName;
    // });
    // this.generalSvc.ranges.subscribe((newData) => {
    //   this.ranges = newData;
    //   this.scrollToTitleOfComponentHandler();
    // });
    this.activeComponentName = 'viewOn';
  }

  scrollToClickedComponent(anchor: string) {
    // this.generalSvc.ActiveComponentName.next(anchor);
    // this.scrollSvc.scrollToClickedComponent(this);
  }

  scrollToTitleOfComponentHandler() {
    // this.scrollSvc.scrollToTitleOfComponentHandler(this);
    // this.lastComponentActiveId = this.ActiveComponentName;
  }
}


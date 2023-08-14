import { Component, Input, OnInit } from '@angular/core';
import { DashboardNavItem, Link } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.scss'],
})
export class PageSectionComponent implements OnInit {
  @Input() sectionLinks: Link[] = [];
  @Input() section: DashboardNavItem = {} as DashboardNavItem;

  ngOnInit(): void {
    // this.TopTitle = this.visObjsArray[0]?.TopTitle;
    // this.ClassTitleContainer = this.visObjsArray[0]?.ClassTitleContainer;
  }
}

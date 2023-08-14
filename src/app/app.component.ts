import { Component, OnInit } from '@angular/core';
import { GeneralService } from './core/services/general.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CoronaDataDashboardApp';

  isSideNavBarOpen: boolean = false;
  // isSideNavBarClose: boolean = true;

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    
  }

  onCloseSideNavBar() {
    this.isSideNavBarOpen = false;
  }

  onOpenSideNavBar() {
    this.isSideNavBarOpen = true;
  }
}

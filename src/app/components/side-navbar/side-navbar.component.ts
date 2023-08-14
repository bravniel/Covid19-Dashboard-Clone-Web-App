import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { sideNavData } from 'src/app/data/app.arrays';
import { SideNavItem } from 'src/app/data/app.interfaces';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
  // animations: [
  //   trigger('slideInOut', [
  //     state(
  //       'open',
  //       style({
  //         transform: 'translateX(0%)',
  //       })
  //     ),
  //     state(
  //       'closed',
  //       style({
  //         transform: 'translateX(-100%)',
  //       })
  //     ),
  //     transition('closed <=> open', [animate('300ms ease-in-out')]),
  //   ]),
  // ],
})
export class SideNavbarComponent implements OnInit, OnDestroy {
  // @Input() isOpen: boolean;
  // sidebarState: string;
  @Output() closeSideBar = new EventEmitter<void>();

  sideNavData: { id: string; options: SideNavItem[] }[][] = sideNavData;

  // @Input() isSideNavBarOpen?: boolean;
  isSideNavBarOpenSub!: Subscription;

  @Input() isSideNavBarOpen: boolean = false;

  constructor(private generalService: GeneralService, private router: Router) {}

  ngOnInit(): void {
    // this.sidebarState = this.isOpen ? 'open' : 'closed';
    // this.isSideNavBarOpenSub = this.generalService.isSideNavBarOpen.subscribe(
    //   (isSideNavBarOpen) => {
    //     this.isSideNavBarOpen = isSideNavBarOpen;
    //   }
    // );
  }

  ngOnDestroy() {
    this.isSideNavBarOpenSub.unsubscribe();
  }

  toggleSideMenu() {
    this.generalService.toggleSideNavBar();
  }

  onClick() {
    this.closeSideBar.emit();
  }
}

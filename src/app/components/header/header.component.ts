import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from 'src/app/core/services/general.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('show', [
      state(
        'in',
        style({
          opacity: 1,
          height: '100px',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          height: '0px',
        }),
        animate(300),
      ]),
      transition('* => void', [
        animate(
          300,
          style({
            height: '0px',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isDarkModeActive?: boolean;

  // isSideNavBarOpen?: boolean;
  // isSideNavBarOpenSub!: Subscription;

  isLanguageOptionsOpen: boolean = false;

  // faBars = faBars;

  @Output() openSideBar = new EventEmitter<void>();

  date?: string;
  dateSub!: Subscription;

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    // this.generalService.isDarkModeActive.subscribe((newStatus) => {
    //   this.isDarkModeActive = newStatus;
    // });
    this.generalService.latestDateToDisplay.subscribe((date) => {
      console.log('dataHeader ', date);
      this.date = date;
    });
  }

  ngOnDestroy() {
    // this.isSideNavBarOpenSub.unsubscribe();
  }

  toggleMode() {
    // this.generalSvc.isDarkModeActive.next(!this.isDarkModeActive);
  }

  toggleSideMenu() {
    this.generalService.toggleSideNavBar();
  }

  onClick() {
    this.openSideBar.emit();
  }

  toggleLanguageDropdown() {
    this.isLanguageOptionsOpen = !this.isLanguageOptionsOpen;
  }
  closeLanguageDropdown() {
    this.isLanguageOptionsOpen = false;
  }
  openLanguageDropdown() {
    this.isLanguageOptionsOpen = true;
  }
}

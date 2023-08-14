import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { LanguageOption } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.scss'],
  // animations: [
  //   trigger('openClose', [
  //     state(
  //       'open',
  //       style({
  //         opacity: 1,
  //         height: '100px',
  //       })
  //     ),
  //     state(
  //       'closed',
  //       style({
  //         opacity: 0,
  //         height: '0px',
  //       })
  //     ),
  //     transition('closed <=> open', [animate('300ms ease-in-out')]),
  //   ]),
  // ],
})
export class LanguageDropdownComponent {
  // @Input() isOpen!: boolean;
  // @Output() toggle = new EventEmitter<void>();

  options: LanguageOption[] = [
    { language: 'en', displayName: 'English' },
    { language: 'he', displayName: 'עברית' },
  ];

  // onToggle() {
  //   this.toggle.emit();
  // }
}

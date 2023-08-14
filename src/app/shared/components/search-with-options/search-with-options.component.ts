import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterOption, FilterOptionItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-search-with-options',
  templateUrl: './search-with-options.component.html',
  styleUrls: ['./search-with-options.component.scss'],
})
export class SearchWithOptionsComponent implements OnInit {
  @Input() searchItems: FilterOptionItem[] = [];
  @Input() selectedItems: FilterOptionItem[] = [];
  @Input() isSearchDropdownOpen: boolean = false;
  @Output() selectedItemsChange = new EventEmitter<FilterOptionItem[]>();
  @Output() inputClick = new EventEmitter<void>();

  @Input() searchPlaceholder: string = '';
  filteredItems: FilterOptionItem[] = [];

  @Input() inputType: string = 'checkbox';
  @Input() search?: FilterOption;

  searchInputValue: string = '';

  ngOnInit(): void {
    // this.filteredItems = [...this.searchItems];
    this.filteredItems = this.searchItems;

    // this.previousSelectedItems = [...this.selectedItems];
  }

  // onItemCheckboxChange(item: FilterOptionItem) {
  //   item.isChecked = !item.isChecked;
  //   const selectedItems = this.searchItems.filter((option) => option.isChecked);
  //   this.selectedItemsChange.emit(selectedItems);
  // }

  onSearchInput(event: Event) {
    const searchText = (event.target as HTMLInputElement).value;
    this.filteredItems = this.searchItems.filter((item) =>
      item.label.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  onItemCheckboxChange(event: Event, item: FilterOptionItem) {
    console.log(item);
    console.log('1 - this.searchItems', this.searchItems);
    console.log('1 - this.filteredItems', this.filteredItems);
    const checked = (event.target as HTMLInputElement).checked;

    item.isChecked = checked;

    console.log('2 - this.searchItems', this.searchItems);
    console.log('2 - this.filteredItems', this.filteredItems);

    this.emitSelectedItems();
    // item.checkedChange.subscribe(() => {
    //   this.emitSelectedItems();
    // });
  }
  onItemRadioChange(item: FilterOptionItem) {
    console.log(item);
    this.searchInputValue = item.label;
    this.selectedItemsChange.emit([item]);
  }

  ////
  //// {
  ////dates:[]720
  ////mediumSic:[]720
  ///,simpleSick:[]720
  ///
  ///עוד סאבגט
  ///שעושה ספלייס כל פעם שהוא מבקש תקופת זמן אחרת
  ///
  private emitSelectedItems() {
    const selectedItems = this.searchItems.filter((option) => option.isChecked);
    this.selectedItemsChange.emit(selectedItems);
  }
  onInputClicked() {
    this.inputClick.emit();
  }
}

// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { FilterOptionItem } from 'src/app/data/app.interfaces';

// @Component({
//   selector: 'app-search-with-options',
//   templateUrl: './search-with-options.component.html',
//   styleUrls: ['./search-with-options.component.scss'],
// })
// export class SearchWithOptionsComponent implements OnInit {
//   @Input() suggestedItems: FilterOptionItem[] = [];
//   previousSelection: FilterOptionItem[] = [];
//   @Output() selectedItemsChange = new EventEmitter<FilterOptionItem[]>();

//   @Input() isSearchDropdownOpen = false;
//   searchText = '';
//   filteredItems: FilterOptionItem[] = [];

//   @Output() inputClick = new EventEmitter<void>();

//   @Input() selectedItems: FilterOptionItem[] = [];

//   ngOnInit(): void {
//     this.cloneSearchOptions();
//     this.filteredItems = JSON.parse(JSON.stringify(this.suggestedItems));
//   }

//   cloneSearchOptions() {
//     this.previousSelection = JSON.parse(JSON.stringify(this.suggestedItems));
//   }

//   onSearchInput(event: Event) {
//     const searchText = (event.target as HTMLInputElement).value;
//     this.searchText = searchText;
//     this.filteredItems = this.previousSelection.filter((item) =>
//       item.label.toLowerCase().includes(searchText.toLowerCase())
//     );
//   }

//   onItemCheckboxChange(item: FilterOptionItem) {
//     item.isChecked = !item.isChecked;
//     this.selectedItemsChange.emit(this.selectedItems);
//   }

//   onInputClicked() {
//     this.inputClick.emit();
//   }
// }

// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { FilterOptionItem } from 'src/app/data/app.interfaces';

// @Component({
//   selector: 'app-search-with-options',
//   templateUrl: './search-with-options.component.html',
//   styleUrls: ['./search-with-options.component.scss'],
// })
// export class SearchWithOptionsComponent implements OnInit {
//   @Input() searchItems: FilterOptionItem[] = [];
//   @Output() selectedItemsChange = new EventEmitter<FilterOptionItem[]>();

//   @Input() isSearchDropdownOpen = false;
//   searchText = '';
//   filteredItems: FilterOptionItem[] = [];
//   previousSelection: FilterOptionItem[] = [];

//   @Input() selectedItems: FilterOptionItem[] = [];

//   ngOnInit(): void {
//     this.cloneSearchOptions();
//     this.filteredItems = JSON.parse(JSON.stringify(this.searchItems));
//   }

//   cloneSearchOptions() {
//     this.previousSelection = JSON.parse(JSON.stringify(this.searchItems));
//   }

//   onSearchInput(event: Event) {
//     const searchText = (event.target as HTMLInputElement).value;
//     this.searchText = searchText;
//     this.filteredItems = this.previousSelection.filter((item) =>
//       item.label.toLowerCase().includes(searchText.toLowerCase())
//     );
//   }

//   onItemCheckboxChange(item: FilterOptionItem) {
//     item.isChecked = !item.isChecked;
//     // this.selectedItems = this.filteredItems.filter(
//     //   (option) => option.isChecked
//     // );
//     this.selectedItemsChange.emit(this.selectedItems);
//   }

//   onInputClicked() {
//     this.isSearchDropdownOpen = true;
//   }
// }

// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { FilterOptionItem } from 'src/app/data/app.interfaces';

// // interface SearchItem {
// //   value: string;
// //   label: string;
// //   selected: boolean;
// // }

// @Component({
//   selector: 'app-search-with-options',
//   templateUrl: './search-with-options.component.html',
//   styleUrls: ['./search-with-options.component.scss'],
// })
// export class SearchWithOptionsComponent implements OnInit {
//   @Input() searchItems: FilterOptionItem[] = [];
//   previousSelection: FilterOptionItem[] = [];
//   @Output() selectedItemsChange = new EventEmitter<FilterOptionItem[]>();

//   @Input() isSearchDropdownOpen = false;
//   searchText = '';
//   filteredItems: FilterOptionItem[] = [];

//   @Output() inputClick = new EventEmitter<void>();

//   @Input() selectedItems: FilterOptionItem[] = [];

//   // constructor() {} // public TableSvc: TablesService // public generalSvc: GeneralService,

//   ngOnInit(): void {
//     this.cloneSearchOptions();
//     this.filteredItems = JSON.parse(JSON.stringify(this.searchItems));
//   }

// cloneSearchOptions() {
//     this.previousSelection = JSON.parse(JSON.stringify(this.searchItems));
// }

//   onSearchInput(event: Event) {
//     const searchText = (event.target as HTMLInputElement).value;
//     this.searchText = searchText;
//     this.filteredItems = this.previousSelection.filter((item) =>
//       item.label.toLowerCase().includes(searchText.toLowerCase())
//     );
//   }

//   onItemCheckboxChange(item: FilterOptionItem) {
//     item.isChecked = !item.isChecked;
//     this.selectedItems = this.filteredItems.filter(
//       (option) => option.isChecke
//     this.selectedItemsChange.emit(this.filteredItems);
//   }

//   onInputClicked() {
//     this.inputClick.emit();
//   }
// }

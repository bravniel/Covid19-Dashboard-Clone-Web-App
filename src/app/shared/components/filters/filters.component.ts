import { Component, Input, OnInit } from '@angular/core';
import { FilterOption, FilterOptionItem } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() filterOptions: FilterOption[] = [];

  selectedValues: string = '';

  isFilteringOptionOpen: boolean = false;

  previousSelection: FilterOption[] = [];

  isSearchDropdownOpen = false;

  selectedItems: FilterOptionItem[] = [];

  previousSelectedItems: FilterOptionItem[] = [];

  @Input() allDataLangth: number = 0;

  ngOnInit(): void {
    this.cloneFilterOptions();
    this.getSelectedValues();
  }

  toggleFilteringDropdown() {
    this.isFilteringOptionOpen = !this.isFilteringOptionOpen;
    if (this.isFilteringOptionOpen && this.isSearchDropdownOpen) {
      this.isSearchDropdownOpen = false;
    }
  }

  closeFilteringDropdown() {
    this.isFilteringOptionOpen = false;
  }

  cloneFilterOptions() {
    this.previousSelection = JSON.parse(JSON.stringify(this.filterOptions));
    this.previousSelectedItems = JSON.parse(JSON.stringify(this.selectedItems));
    console.log("previousSelection ",this.previousSelection);
    console.log("previousSelectedItems ",this.previousSelectedItems);
  }

  cancelSelection() {
    this.filterOptions = JSON.parse(JSON.stringify(this.previousSelection));
    this.selectedItems = JSON.parse(JSON.stringify(this.previousSelectedItems));
    this.getSelectedValues();
    // this.isSearchDropdownOpen = false;
    // this.isFilteringOptionOpen = false;
    this.isSearchDropdownOpen
      ? (this.isSearchDropdownOpen = false)
      : (this.isFilteringOptionOpen = false);
  }

  onSelectedItemsChange(items: FilterOptionItem[]) {
    console.log(items);
    this.selectedItems = items;
    console.log(this.selectedItems);

    // this.getSelectedValues();
  }

  onSearchInputClick() {
    this.isSearchDropdownOpen = true;
  }

  private getSelectedOptionsCount(section: FilterOption): number {
    return section.options.filter((option) => option.isChecked).length;
  }

  getSelectedValues() {
    const selectedValues = [];

    for (const section of this.filterOptions) {
      if (section.isCanSearch && section.type != 'text') {
        const selectedCount = this.getSelectedOptionsCount(section);
        selectedCount > 0
          ? selectedValues.push(
              `${selectedCount} ${section.searchPlaceholderForFilter} נבחרו`
            )
          : selectedValues.push(
              `${this.allDataLangth} ${section.searchPlaceholderForFilter} נבחרו`
            );
      } else if (section.isCanSearch && section.type == 'text') {
        selectedValues.push(`${section.selectedItem}`);
      } else if (section.type === 'checkbox') {
        const selectedOptions = section.options.filter(
          (option) => option.isChecked
        );
        selectedValues.push(...selectedOptions.map((option) => option.label));
      } else if (section.type === 'radio') {
        const selectedItem = section.options.find(
          (option) => option.value === section.selectedItem
        );
        if (selectedItem) {
          selectedValues.push(selectedItem.label);
        }
      }
    }

    this.selectedValues = selectedValues.join(', ');
  }

  applySelection() {
    this.cloneFilterOptions();
    if (this.isSearchDropdownOpen) {
      this.isSearchDropdownOpen = false;
    } else {
      this.getSelectedValues();
      this.isFilteringOptionOpen = false;
    }
  }

  getSearchOptions(): {
    option: FilterOptionItem[];
    searchPlaceholder: string;
    searchPlaceholderForFilter: string;
    type: string;
    all?: FilterOption;
  } {
    const searchOption = this.filterOptions.find(
      (option) => option.isCanSearch
    );
    return {
      option: searchOption ? searchOption.options : [],
      searchPlaceholder: searchOption?.searchPlaceholder
        ? searchOption?.searchPlaceholder
        : '',
      searchPlaceholderForFilter: searchOption?.searchPlaceholderForFilter
        ? searchOption?.searchPlaceholderForFilter
        : '',
      type: searchOption?.type ? searchOption?.type : '',
      all: searchOption,
    };
  }
}

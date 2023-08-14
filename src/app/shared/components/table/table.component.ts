import { Component, Input, OnInit } from '@angular/core';
import {
  CellStyle,
  RiskLevel,
  TableColumn,
  TableSettings,
} from 'src/app/data/app.interfaces';

enum SortDirection {
  Default = 'default',
  Ascending = 'ascending',
  Descending = 'descending',
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];

  sortedData: any[] = [];
  sortColumn: string = '';
  sortDirection: SortDirection = SortDirection.Default;
  clickCount: number = 0;

  @Input() items: TableSettings[] = [];

  constructor() {} // private graphSvc: GraphsService // private generalSvc: GeneralService,

  ngOnInit() {
    // this.generalSvc.isDarkModeActive.subscribe((newStatus: boolean) => {
    //   this.isDarkModeActive = newStatus;
    //   this.graphSvc.toggleDarkModeForItems(this);
    //   this.initializeGraph();
    // });
    // this.generalSvc.timePeriodsInDays.subscribe(() => {
    //   this.initializeGraph();
    // });
    this.resetData();
  }

  resetData() {
    this.sortedData = [...this.data];
  }

  getRiskLevelOrder(riskLevel: RiskLevel): number {
    switch (riskLevel) {
      case RiskLevel.Low:
        return 0;
      case RiskLevel.Moderate:
        return 1;
      case RiskLevel.Maximum:
        return 2;
      default:
        return -1; // Handle unknown risk levels if needed
    }
  }

  sortData(column: string) {
    this.clickCount++;
    if (this.clickCount % 3 === 0) {
      this.resetData();
      this.sortColumn = '';
      this.sortDirection = SortDirection.Default;
    } else {
      this.sortColumn = column;
      if (
        this.sortDirection === SortDirection.Default ||
        this.sortDirection === SortDirection.Descending
      ) {
        this.sortDirection = SortDirection.Ascending;
      } else {
        this.sortDirection = SortDirection.Descending;
      }
      // this.sortedData.sort((a: any, b: any) => {
      //   const valueA = a[this.sortColumn];
      //   const valueB = b[this.sortColumn];
      //   if (valueA < valueB) {
      //     return this.sortDirection === SortDirection.Ascending ? 1 : -1;
      //   } else if (valueA > valueB) {
      //     return this.sortDirection === SortDirection.Ascending ? -1 : 1;
      //   } else {
      //     return 0;
      //   }
      // });
      // Custom sorting for the 'risk' column
      if (column === 'risk') {
        this.sortedData.sort((a: any, b: any) => {
          const riskLevelA = this.getRiskLevelOrder(a[column]);
          const riskLevelB = this.getRiskLevelOrder(b[column]);

          if (riskLevelA < riskLevelB) {
            return this.sortDirection === SortDirection.Ascending ? 1 : -1;
          } else if (riskLevelA > riskLevelB) {
            return this.sortDirection === SortDirection.Ascending ? -1 : 1;
          } else {
            return 0;
          }
        });
      } else {
        // Default sorting for other columns
        this.sortedData.sort((a: any, b: any) => {
          const valueA = a[this.sortColumn];
          const valueB = b[this.sortColumn];
          if (valueA < valueB) {
            return this.sortDirection === SortDirection.Ascending ? 1 : -1;
          } else if (valueA > valueB) {
            return this.sortDirection === SortDirection.Ascending ? -1 : 1;
          } else {
            return 0;
          }
        });
      }
    }
  }

  getSortIndicatorClass(column: string): string {
    if (column === this.sortColumn) {
      if (this.sortDirection === SortDirection.Ascending) {
        return 'asc';
      } else if (this.sortDirection === SortDirection.Descending) {
        return 'desc';
      }
    }
    return '';
  }

  isNumeric(value: any): boolean {
    return !isNaN(value);
  }

  // getCellStyle(column: string): string {
  //   const tableSetting = this.items.find((item) => item.forColumn === column);
  //   return tableSetting ? tableSetting.cellStyle : '';
  // }

  // getCellColor(column: string): string {
  //   const tableSetting = this.items.find((item) => item.forColumn === column);
  //   return tableSetting ? tableSetting.cellColor! : '';
  // }

  // shouldApplyCellStyle(column: string, cellStyle: string): boolean {
  //   return column === cellStyle;
  // }

  getCellStyleClass(column: string, first: boolean): string {
    const tableSetting = this.items.find((item) => item.forColumn === column);
    const cellStyle = tableSetting ? tableSetting.cellStyle : '';

    if (first) {
      return 'table-cell-bold ' + cellStyle;
    }

    return cellStyle;
  }

  // getCellColor(column: string): string {
  //   const tableSetting = this.items.find((item) => item.forColumn === column);
  //   return tableSetting && tableSetting.cellColor ? tableSetting.cellColor : '';
  // }

  getCellColor(column: string, value: string): string {
    const numericValue = parseFloat(value);
    const tableSetting = this.items.find((item) => item.forColumn === column);
    if (tableSetting && tableSetting.options) {
      const matchedOption = tableSetting.options.find(
        (option) => option.riskLevel === value
      );
      if (matchedOption) {
        return matchedOption.cellColor;
      } else {
        const rangeOption = tableSetting.options.find((option) => {
          if (option.minRangeNum && option.maxRangeNum) {
            return (
              numericValue >= option.minRangeNum &&
              numericValue <= option.maxRangeNum
            );
          } else if (option.minRangeNum) {
            return numericValue >= option.minRangeNum;
          } else if (option.maxRangeNum) {
            return numericValue <= option.maxRangeNum;
          }
          return false;
        });
        if (rangeOption) {
          return rangeOption.cellColor;
        }
      }
    }
    return '';
  }

  isCellNeedContainContent(column: string): boolean {
    const tableSetting = this.items.find((item) => item.forColumn === column);
    return tableSetting
      ? tableSetting.hasContent !== undefined
        ? tableSetting.hasContent
        : true
      : true;
  }

  isCellNeedContainBar(column: string): boolean {
    const tableSetting = this.items.find((item) => item.forColumn === column);
    return tableSetting
      ? tableSetting.hasBar !== undefined
        ? tableSetting.hasBar
        : false
      : false;
  }
}

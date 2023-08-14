import { Component, Input, OnInit } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import {
  DashboardNavItem,
  FilterOption,
  RiskLevel,
  TableSettings,
  CellStyle,
  TableColumn,
  Hospital,
  IsraelHospitals,
  HospitalToDisplay,
  SettlementOption,
} from 'src/app/data/app.interfaces';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-indices-of-general-morbidity',
  templateUrl: './indices-of-general-morbidity.component.html',
  styleUrls: ['./indices-of-general-morbidity.component.scss'],
})
export class IndicesOfGeneralMorbidityComponent {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = {
    label: 'מדדי תחלואה כללית',
    link: 'indicesOfGeneralMorbidity',
  };

  tableColumns: TableColumn[] = [
    { value: 'HospitalName', label: 'בית חולים' },
    { value: 'OverallBedOccupancyPercentage', label: '% תפוסה כללית' },
    {
      value: 'PercentageOfIndoorWardBedOccupancy',
      label: '% תפוסה מחלקה פנימית',
    },
  ];

  @Input() tableData: Hospital[] = [];

  filterOptions: FilterOption[] = [
    {
      section: 'id',
      type: 'checkbox',
      options: this.getSettlementOptions(),
      isCanSearch: true,
      searchPlaceholder: "בית חולים / מוסד",
      searchPlaceholderForFilter: "בתי חולים / מוסדות",
    },
    // {
    //   section: 'Section 1',
    //   type: 'checkbox',
    //   options: [
    //     { label: 'Option 1', isChecked: false },
    //     { label: 'Option 2', isChecked: true },
    //     { label: 'Option 3', isChecked: false },
    //   ],
    // },
    // {
    //   section: 'Section 2',
    //   type: 'radio',
    //   options: [
    //     { label: 'Option 4', value: 'value1' },
    //     { label: 'Option 5', value: 'value2' },
    //     { label: 'Option 6', value: 'value3' },
    //   ],
    //   selectedItem: 'value2',
    // },
  ];

  columnSettings: TableSettings[] = [
    // {
    //   forColumn: 'risk',
    //   cellStyle: CellStyle.CellSquareIcon,
    //   options: [
    //     {
    //       cellColor: '#fae626',
    //       riskLevel: RiskLevel.Low,
    //     },
    //     {
    //       cellColor: '#fae626',
    //       riskLevel: RiskLevel.Low,
    //     },
    //     {
    //       cellColor: '#fab278',
    //       riskLevel: RiskLevel.Medium,
    //     },
    //     {
    //       cellColor: '#fb4f67',
    //       riskLevel: RiskLevel.Max,
    //     },
    //   ],
    //   hasBar: false,
    //   hasContent: false,
    // },
    {
      forColumn: 'grade',
      cellStyle: CellStyle.CellSquareBackgroundWithUnderlineText,
      options: [
        {
          cellColor: '#b8de92',
          minRangeNum: 0,
          maxRangeNum: 4.4,
        },
        {
          cellColor: '#fcfc70',
          minRangeNum: 4.5,
          maxRangeNum: 5.9,
        },
        {
          cellColor: '#f2c580',
          minRangeNum: 6,
          maxRangeNum: 7.4,
        },
        {
          cellColor: '#fa9e8f',
          minRangeNum: 7.5,
          maxRangeNum: 10,
        },
      ],
      hasBar: false,
      hasContent: true,
    },
    {
      forColumn: 'OverallBedOccupancyPercentage',
      cellStyle: CellStyle.CellBoldTextWithPercent,
      hasBar: true,
      hasContent: true,
    },
    {
      forColumn: 'PercentageOfIndoorWardBedOccupancy',
      cellStyle: CellStyle.CellBoldTextWithPercent,
      hasBar: true,
      hasContent: true,
    },
  ];

  mapHospitalsEnumKeyToValue(key: string): string {
    return IsraelHospitals[key as keyof typeof IsraelHospitals] || '';
  }
  getSettlementOptions(): SettlementOption[] {
    const hospitalOptions: SettlementOption[] = [];

    for (const hospital in IsraelHospitals) {
      if (Object.prototype.hasOwnProperty.call(IsraelHospitals, hospital)) {
        const option: SettlementOption = {
          value: IsraelHospitals[hospital as keyof typeof IsraelHospitals], // Use keyof to access the enum values
          label: IsraelHospitals[hospital as keyof typeof IsraelHospitals], // Use keyof to access the enum values
          isChecked: true,
        };
        hospitalOptions.push(option);
      }
    }
    return hospitalOptions;
  }
}

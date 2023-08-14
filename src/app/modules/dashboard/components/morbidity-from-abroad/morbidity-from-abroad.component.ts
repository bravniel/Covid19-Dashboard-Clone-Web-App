import { Component, Input } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import {
  DashboardNavItem,
  FilterOption,
  RiskLevel,
  TableSettings,
  CellStyle,
  TableColumn,
  MorbidityFromAbroad,
  Country,
  LegendSettings,
  IconStyle,
} from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-morbidity-from-abroad',
  templateUrl: './morbidity-from-abroad.component.html',
  styleUrls: ['./morbidity-from-abroad.component.scss'],
})
export class MorbidityFromAbroadComponent {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = {
    label: 'תחלואה מחול',
    link: 'morbidityFromAbroad',
  };

  filterOptions: FilterOption[] = [
    {
      section: 'id',
      type: 'checkbox',
      options: [
        { value: 'item1', label: 'Item 1', isChecked: false },
        { value: 'item2', label: 'Item 2', isChecked: false },
        { value: 'item3', label: 'Item 3', isChecked: false },
        { value: 'item4', label: 'Item 4', isChecked: false },
        { value: 'item5', label: 'Item 5', isChecked: false },
        { value: 'item5', label: 'Item 5', isChecked: false },
        { value: 'item5', label: 'Item 5', isChecked: false },
        { value: 'item5', label: 'Item 5', isChecked: false },
        { value: 'item5', label: 'Item 5', isChecked: false },
        { value: 'item5', label: 'Item 5', isChecked: false },
        { value: 'item5', label: 'Item 5', isChecked: false },
        { value: 'item5', label: 'Item 5', isChecked: false },
        { value: 'item5', label: 'Item 5', isChecked: false },
      ],
      isCanSearch: true,
      searchPlaceholder: 'מדינה',
      searchPlaceholderForFilter: 'מדינות',
    },
    {
      section: 'Section 2',
      type: 'radio',
      options: [
        { label: 'Option 4', value: 'value1' },
        { label: 'Option 5', value: 'value2' },
        { label: 'Option 6', value: 'value3' },
      ],
      selectedItem: 'value2',
    },
  ];

  tableColumns: TableColumn[] = [
    { value: 'CountryName', label: 'מדינה' },
    { value: 'RiskLevel', label: 'צבע' },
    { value: 'NumberOfEnteringPeopleToIsrael', label: 'נכנסים לישראל' },
    { value: 'NumberOfVerifiedCitizens', label: 'אזרחים מאומתים' },
    { value: 'NumberOfVerifiedForeigners', label: 'זרים מאומתים' },
    { value: 'PercentageOfVerifiedArrivals', label: '% מאומתים מהנכנסים' },
  ];

  @Input() tableData: Country[] = [];

  columnSettings: TableSettings[] = [
    {
      forColumn: 'RiskLevel',
      cellStyle: CellStyle.CellSquareIcon,
      options: [
        {
          cellColor: '#fae626',
          riskLevel: RiskLevel.Low,
        },
        {
          cellColor: '#fab278',
          riskLevel: RiskLevel.Moderate,
        },
        {
          cellColor: '#fb4f67',
          riskLevel: RiskLevel.Maximum,
        },
      ],
      hasBar: false,
      hasContent: false,
    },
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
      forColumn: 'generalOccupancy',
      cellStyle: CellStyle.CellBoldTextWithPercent,
      hasBar: true,
      hasContent: true,
    },
    {
      forColumn: 'internalDepartmentOccupancy',
      cellStyle: CellStyle.CellBoldTextWithPercent,
      hasBar: true,
      hasContent: true,
    },
  ];
  legendSettings: LegendSettings[] = [
    {
      iconStyle: IconStyle.SmallSquare,
      iconColor: '#fb4f67',
      descriptionText: 'מדינות בסיכון מירבי',
    },
    {
      iconStyle: IconStyle.SmallSquare,
      iconColor: '#fab278',
      descriptionText: 'מדינות בסיכון',
    },
    {
      iconStyle: IconStyle.SmallSquare,
      iconColor: '#fae626',
      descriptionText: 'מדינות בסיכון נמוך',
    },
  ];

  // mapHospitalsEnumKeyToValue(key: string): string {
  //   return IsraelHospitals[key as keyof typeof IsraelHospitals] || '';
  // }
  // get transformedHospitalsDataToDisplay(): HospitalToDisplay[] {
  //   return this.tableData.map((item) => ({
  //     ...item,
  //     HospitalName: this.mapHospitalsEnumKeyToValue(item.HospitalName),
  //     OverallBedOccupancyPercentage: `${item.OverallBedOccupancyPercentage}%`,
  //     PercentageOfIndoorWardBedOccupancy: `${item.PercentageOfIndoorWardBedOccupancy}%`,
  //   }));
  // }
}

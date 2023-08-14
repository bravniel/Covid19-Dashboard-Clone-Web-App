import { Component, Input } from '@angular/core';
import { VaccLinks } from 'src/app/data/app.arrays';
import {
  DashboardNavItem,
  FilterOption,
  RiskLevel,
  TableSettings,
  CellStyle,
  LightInSettlement,
  SettlementOption,
  IsraelSettlements,
  TableColumn,
  IconStyle,
  LegendSettings,
  FilterOptionItem,
} from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-lights-in-settlements',
  templateUrl: './lights-in-settlements.component.html',
  styleUrls: ['./lights-in-settlements.component.scss'],
})
export class LightsInSettlementsComponent {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = {
    label: 'רמזור בישובים',
    link: 'lightsInSettlements',
  };

  filterOptions: FilterOption[] = [
    {
      section: 'id',
      type: 'text',
      options: this.getSettlementOptions(),
      isCanSearch: true,
      searchPlaceholder: 'ישוב',
      // searchPlaceholderForFilter: 'מדינות',
      selectedItem: 'כלל הישובים',
    },
  ];
  legendSettings: LegendSettings[] = [
    {
      iconStyle: IconStyle.BigSquare,
      iconColor: '#fa9e8f',
      descriptionText: 'אדום',
      detailedDescriptionText: 'ציון 7.5 ומעלה',
    },
    {
      iconStyle: IconStyle.BigSquare,
      iconColor: '#f2c580',
      descriptionText: 'כתום',
      detailedDescriptionText: 'ציון בין 6 ל- 7.5',
    },
    {
      iconStyle: IconStyle.BigSquare,
      iconColor: '#fcfc70',
      descriptionText: 'צהוב',
      detailedDescriptionText: 'ציון בין 4.5 ל- 6',
    },
    {
      iconStyle: IconStyle.BigSquare,
      iconColor: '#b8de92',
      descriptionText: 'ירוק',
      detailedDescriptionText: 'ציון עד 4.5',
    },
  ];
  tableColumns: TableColumn[] = [
    { value: 'settlementName', label: 'יישוב' },
    { value: 'scoreAccordingToTrafficLightPlan', label: 'ציון וצבע יומי' },
    { value: 'newVerifiedPatients', label: 'חולים חדשים לכל 10,000 נפש *' },
    { value: 'percentageOfPositiveTests', label: '% הבדיקות החיוביות *' },
    { value: 'verifiedChangeRate', label: 'שיעור שינוי מאומתים *' },
    { value: 'activePatients', label: 'חולים פעילים' },
  ];

  @Input() tableData: LightInSettlement[] = [];

  columnSettings: TableSettings[] = [
    {
      forColumn: 'scoreAccordingToTrafficLightPlan',
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
  ];

  getSettlementOptions(): FilterOptionItem[] {
    const settlementOptions: FilterOptionItem[] = [];
    const option: FilterOptionItem = {
      value: 'כלל הישובים',
      label: 'כלל הישובים',
    };
    settlementOptions.push(option);
    for (const settlement in IsraelSettlements) {
      if (Object.prototype.hasOwnProperty.call(IsraelSettlements, settlement)) {
        const option: FilterOptionItem = {
          value:
            IsraelSettlements[settlement as keyof typeof IsraelSettlements], // Use keyof to access the enum values
          label:
            IsraelSettlements[settlement as keyof typeof IsraelSettlements], // Use keyof to access the enum values
        };
        settlementOptions.push(option);
      }
    }
    return settlementOptions;
  }
}

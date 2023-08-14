import { Component, Input, OnInit } from '@angular/core';
import { VaccLinks, statisticsViewOn } from 'src/app/data/app.arrays';
import {
  CardData,
  CellStyle,
  DashboardNavItem,
  FilterOption,
  RiskLevel,
  StatisticsViewOn,
  TableSettings,
} from 'src/app/data/app.interfaces';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-view-on',
  templateUrl: './view-on.component.html',
  styleUrls: ['./view-on.component.scss'],
})
export class ViewOnComponent implements OnInit {
  sectionLinks = VaccLinks;
  section: DashboardNavItem = { label: 'מבט על', link: 'viewOn' };
  @Input() viewOnData?: StatisticsViewOn;
  viewOnYesterdayData?: CardData[];
  viewOnSummaryOfTheLast7DaysData?: CardData[];
  viewOnVisualSettingsAndData = statisticsViewOn;

  getObjectOfVisualSettingsAndDataForCardInYesterday(cardId: string): any {
    return this.viewOnVisualSettingsAndData.yesterday.find(
      (obj) => obj.cardId === cardId
    );
  }
  getObjectOfVisualSettingsAndDataForCardInSummaryOfTheLast7Days(
    cardId: string
  ): any {
    return this.viewOnVisualSettingsAndData.summaryOfTheLast7Days.find(
      (obj) => obj.cardId === cardId
    );
  }

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
    },
    {
      section: 'Section 1',
      type: 'checkbox',
      options: [
        { label: 'Option 1', isChecked: false },
        { label: 'Option 2', isChecked: true },
        { label: 'Option 3', isChecked: false },
      ],
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

  tableColumns: string[] = [
    'id',
    'name',
    'age',
    'risk',
    'grade',
    'generalOccupancy',
    'internalDepartmentOccupancy',
  ];
  tableData: any[] = [
    {
      age: 25,
      id: 1,
      name: 'John',
      risk: RiskLevel.Moderate,
      grade: 4.3,
      generalOccupancy: 87.4,
      internalDepartmentOccupancy: 119.3,
    },
    {
      id: 2,
      name: 'Jane',
      age: 30,
      risk: RiskLevel.Moderate,
      grade: 5.1,
      generalOccupancy: 80,
      internalDepartmentOccupancy: 97,
    },
    {
      id: 3,
      age: 40,
      name: 'Bob',
      risk: RiskLevel.Maximum,
      grade: 8,
      generalOccupancy: 11,
      internalDepartmentOccupancy: 5,
    },
    {
      id: 4,
      name: 'Alice',
      age: 35,
      risk: RiskLevel.Moderate,
      grade: 4.9,
      generalOccupancy: 6.4,
      internalDepartmentOccupancy: 9,
    },
    {
      id: 5,
      name: 'Mark',
      age: 28,
      risk: RiskLevel.Low,
      grade: 6.3,
      generalOccupancy: 50,
      internalDepartmentOccupancy: 7.4,
    },
  ];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // this.dashboardService.viewOnData.subscribe((data: any): void => {
    //   console.log('data', data.yesterday);
    //   this.viewOnYesterdayData = data.yesterday;
    //   this.viewOnSummaryOfTheLast7DaysData = data.summaryOfTheLast7Days;
    // });
    this.viewOnYesterdayData = this.viewOnData?.yesterday;
    this.viewOnSummaryOfTheLast7DaysData =
      this.viewOnData?.summaryOfTheLast7Days;
  }

  // columnSettings_1: TableSettings[] = [
  //   {
  //     cellStyle: CellStyle.CellSquareIcon,
  //     forColumn: 'risk',
  //     cellColor: '#fae626',
  //     riskLevel: RiskLevel.Low,
  //   },
  //   {
  //     cellStyle: CellStyle.CellSquareIcon,
  //     forColumn: 'risk',
  //     cellColor: '#fab278',
  //     riskLevel: RiskLevel.Medium,
  //   },
  //   {
  //     cellStyle: CellStyle.CellSquareIcon,
  //     forColumn: 'risk',
  //     cellColor: '#fb4f67',
  //     riskLevel: RiskLevel.Max,
  //   },
  // ];
  columnSettings_1: TableSettings[] = [
    {
      forColumn: 'risk',
      cellStyle: CellStyle.CellSquareIcon,
      options: [
        {
          cellColor: '#fae626',
          riskLevel: RiskLevel.Low,
        },
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
  // columnSettings_2: TableSettings[] = [
  //   {
  //     forColumn: 'grade',
  //     cellStyle: CellStyle.CellSquareBackgroundWithUnderlineText,
  //     cellColor: '#b8de92',
  //     minRangeNum: 0,
  //     maxRangeNum: 4.4,
  //   },
  //   {
  //     forColumn: 'grade',
  //     cellStyle: CellStyle.CellSquareBackgroundWithUnderlineText,
  //     cellColor: '#fcfc70',
  //     minRangeNum: 4.5,
  //     maxRangeNum: 5.9,
  //   },
  //   {
  //     forColumn: 'grade',
  //     cellStyle: CellStyle.CellSquareBackgroundWithUnderlineText,
  //     cellColor: '#f2c580',
  //     minRangeNum: 6,
  //     maxRangeNum: 7.4,
  //   },
  //   {
  //     forColumn: 'grade',
  //     cellStyle: CellStyle.CellSquareBackgroundWithUnderlineText,
  //     cellColor: '#fa9e8f',
  //     minRangeNum: 7.5,
  //     maxRangeNum: 10,
  //   },
  // ];
  // columnSettings_3: TableSettings[] = [
  //   {
  //     cellStyle: CellStyle.CellBoldTextWithPercent,
  //     forColumn: 'generalOccupancy',
  //     hasBar: true,
  //   },
  //   {
  //     cellStyle: CellStyle.CellBoldTextWithPercent,
  //     forColumn: 'internalDepartmentOccupancy',
  //     hasBar: true,
  //   },
  // ];

  //   statisticsViewOn = {
  //     yesterday: [
  //       {
  //         cardId: 'verifiedYesterday',
  //         cardInfo: 'מספר המאומתים לנגיף COVID-19 שאותרו משעה 00:00 עד שעה 23:59 של יום אתמול.

  // סה"כ: מספר המאומתים מפרוץ המגיפה, כולל מי שהתגלו כמאומתים לנגיף שוב.

  // מאומתים - מי שנבדקו ונמצאו חיוביים לנגיף COVID-19 בבדיקת PCR או בבדיקת אנטיגן מפוקחת (החל מה 5.1.2022) , בין אם הופיעו אצלם תסמינים ובין אם לא, בין אם הם חולים, החלימו או נפטרו.',
  //         headerTitle: 'מאומתים אתמול',
  //         headerNumber: numberOfNewVerifiedYesterday,
  //         moreData: [
  //           {
  //             lineId: 'numberOfNewVerifiedToday',
  //             lineTitle: 'מחצות',
  //             lineNumber: numberOfNewVerifiedToday,
  //           },
  //           {
  //             lineId: 'totalNumberOfVerified',
  //             lineTitle: 'סה"כ',
  //             lineNumber: totalNumberOfVerified,
  //           },
  //         ],
  //       },
  //       {
  //         cardId: 'activePatients',
  //         cardInfo: 'מספר החולים הפעילים במחלת הנגיף COVID-19, נכון למועד העדכון האחרון.

  // חולים פעילים - מי שנבדקו ונמצאו חיוביים לנגיף בבדיקת PCR או בבדיקת אנטיגן מפוקחת (החל מה 5.1.2022) COVID-19, ללא קשר להופעת תסמינים, שעוד לא הוגדרו כמחלימים ושלא נפטרו.',
  //         headerTitle: 'חולים פעילים',
  //         headerNumber: totalNumberOfActivePatients,
  //         moreData: [
  //           {
  //             lineId: 'numberOfActivePatientsHospitalized',
  //             lineTitle: 'בבי"ח',
  //             lineNumber: numberOfActivePatientsHospitalized,
  //           },
  //         ],
  //       },
  //       {
  //         cardId: 'seriousPatients',
  //         cardInfo: 'מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים.

  // חולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.',
  //         headerTitle: 'חולים קשה',
  //         headerNumber: numberOfHospitalizedPatientsInSevereAndCriticalCondition,
  //         moreData: [
  //           {
  //             lineId: 'numberOfHospitalizedPatientsInCriticalCondition',
  //             lineTitle: 'מתוכם קריטי',
  //             lineNumber: numberOfHospitalizedPatientsInCriticalCondition,
  //           },
  //           {
  //             lineId: 'numberOfHospitalizedPatientsConnectedToACMO',
  //             lineTitle: 'מחוברים לאקמו',
  //             lineNumber: numberOfHospitalizedPatientsConnectedToACMO,
  //           },
  //           {
  //             lineId: 'numberOfHospitalizedPatientsVentilated',
  //             lineTitle: 'מונשמים',
  //             lineNumber: numberOfHospitalizedPatientsVentilated,
  //           },
  //           {
  //             lineId: 'numberOfHospitalizedPatientsInModerateCondition',
  //             lineTitle: 'חולים בינוני',
  //             lineNumber: numberOfHospitalizedPatientsInModerateCondition,
  //           },
  //           {
  //             lineId: 'numberOfHospitalizedPatientsInMildCondition',
  //             lineTitle: 'חולים קל',
  //             lineNumber: numberOfHospitalizedPatientsInMildCondition,
  //           },
  //         ],
  //       },
  //       {
  //         cardId: 'vaccinated',
  //         cardInfo: 'מספר מקבלי החיסון מפני נגיף COVID-19 מתחילת מבצע החיסונים.

  // החלוקה למנות אינה כוללת אומיקרון',
  //         headerTitle: 'מתחסנים',
  //         moreData: [
  //           {
  //             lineId: 'numberOfPeopleGetVaccinatedInFirstDose',
  //             lineTitle: 'מנה 1',
  //             lineNumber: numberOfPeopleGetVaccinatedInFirstDose,
  //           },
  //           {
  //             lineId: 'numberOfPeopleGetVaccinatedInSecondDose',
  //             lineTitle: 'מנה 2',
  //             lineNumber: numberOfPeopleGetVaccinatedInSecondDose,
  //           },
  //           {
  //             lineId: 'numberOfPeopleGetVaccinatedInThirdDose',
  //             lineTitle: 'מנה 3',
  //             lineNumber: numberOfPeopleGetVaccinatedInThirdDose,
  //           },
  //           {
  //             lineId: 'numberOfPeopleGetVaccinatedInFourthDose',
  //             lineTitle: 'מנה 4',
  //             lineNumber: numberOfPeopleGetVaccinatedInFourthDose,
  //           },
  //           {
  //             lineId: 'numberOfPeopleGetVaccinatedInOmicron',
  //             lineTitle: 'אומיקרון',
  //             lineNumber: numberOfPeopleGetVaccinatedInOmicron,
  //           },
  //         ],
  //       },
  //       {
  //         cardId: 'deceasedAccumulate',
  //         cardInfo: 'מספר הנפטרים המצטבר ממחלת הנגיף COVID-19 החל מפרוץ המגפה.
  // נתוני הנפטרים מתעדכנים לאחר שנבדקו תעודות הפטירה לוידוא סיבת המוות ולכן ייתכנו עדכונים מאוחרים של מספר הנפטרים.',
  //         headerTitle: 'נפטרים מצטבר',
  //         headerNumber: cumulativeNumberOfDeceased,
  //       },
  //       {
  //         cardId: 'percentageOfPositiveTestsYesterday',
  //         cardInfo: 'אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר נבדקים לגילוי הנגיף אתמול.

  // נבדקים לגילוי הנגיף אתמול - מספר הנבדקים לאיתור ראשוני של הנגיף (ללא בדיקות נלוות לקביעת החלמה) בבדיקות PCR או אנטיגן מפוקחות, שהתבצעו ותוצאותיהן התקבלו משעה 00:00 עד שעה 23:59 של יום אתמול.

  // כלל הבדיקות אתמול – מספר כל תוצאות הבדיקות לגילוי קורונה שבוצעו מסוג PCR או אנטיגן ,הן לבדיקה ראשונית לאיתור הנגיף והן לבדיקות נלוות לקביעת החלמה, שהתקבלו החל מחצות 00:00 עד שעה 23:59 של יום אתמול.',
  //         headerTitle: 'אחוז נבדקים חיוביים אתמול',
  //         headerNumber: percentageNumberOfPositiveTestsYesterday + '%',
  //         moreData: [
  //           {
  //             lineId: 'numberOfNewTestsForVirusDetectionYesterday',
  //             lineTitle: 'נבדקים לגילוי הנגיף אתמול',
  //             lineNumber: numberOfNewTestsForVirusDetectionYesterday,
  //           },
  //           {
  //             lineId: 'totalNumberOfTestsYesterday',
  //             lineTitle: 'כלל הבדיקות אתמול',
  //             lineNumber: totalNumberOfTestsYesterday,
  //           },
  //         ],
  //       },
  //     ],
  //     summaryOfTheLast7Days: [
  //       {
  //         cardId: 'amountOfNewVerifiedPeopleInLast7Days',
  //         cardInfo: 'מספר המאומתים לנגיף COVID-19 שאותרו ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
  //         headerTitle: 'מספר המאומתים',
  //         headerNumber: numberOfNewVerifiedPeopleInLast7Days,
  //         moreData: [
  //           {
  //             lineId: 'percentageChangeOfNewVerifiedPeopleFromPrevious7Days',
  //             lineTitle: 'משבעה ימים קודמים',
  //             lineNumber:
  //               percentageChangeOfNewVerifiedPeopleFromPrevious7Days + '%',
  //           },
  //         ],
  //       },
  //       {
  //         cardId:
  //           'amountOfNewHospitalizedPatientsInSeriousAndCriticalConditionInLast7Days',
  //         cardInfo: 'מספר החולים החדשים במצב קשה וקריטי במחלת נגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
  //         headerTitle: 'מספר חולים קשה',
  //         headerNumber:
  //           numberOfNewHospitalizedPatientsInSeriousAndCriticalConditionInLast7Days,
  //         moreData: [
  //           {
  //             lineId:
  //               'percentageChangeOfNewPatientsHospitalizedInSeriousAndCriticalConditionFromPrevious7Days',
  //             lineTitle: 'משבעה ימים קודמים',
  //             lineNumber:
  //               percentageChangeOfNewPatientsHospitalizedInSeriousAndCriticalConditionFromPrevious7Days +
  //               '%',
  //           },
  //         ],
  //       },
  //       {
  //         cardId: 'amountOfDeathsInLast7Days',
  //         cardInfo: 'מספר הנפטרים מנגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
  //         headerTitle: 'מספר נפטרים',
  //         headerNumber: numberOfDeathsInLast7Days,
  //         moreData: [
  //           {
  //             lineId: 'percentageChangeOfDeathsFromPrevious7Days',
  //             lineTitle: 'משבעה ימים קודמים',
  //             lineNumber: percentageChangeOfDeathsFromPrevious7Days + '%',
  //           },
  //         ],
  //       },
  //       {
  //         cardId: 'amountOfNewTastedPatientsInLast7Days',
  //         cardInfo: 'מספר הנבדקים בבדיקות לגילוי נגיף COVID-19 מסוג PCR או אנטיגן ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.
  // הנתון אינו כולל נבדקים בבדיקות נלוות לקביעת החלמה.

  // נבדקים חיוביים - אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר הנבדקים לגילוי הנגיף ב 7 הימים האחרונים.',
  //         headerTitle: 'מספר נבדקים',
  //         headerNumber: numberOfNewTastedPatientsInLast7Days,
  //         moreData: [
  //           {
  //             lineId: 'percentageChangeOfNewTastedPatientsFromPrevious7Days',
  //             lineTitle: 'משבעה ימים קודמים',
  //             lineNumber:
  //               percentageChangeOfNewTastedPatientsFromPrevious7Days + '%',
  //           },
  //           {
  //             lineId:
  //               'percentageChangeOfNewPositiveTastedPatientsFromPrevious7Days',
  //             lineTitle: 'נבדקים חיוביים',
  //             lineNumber:
  //               percentageChangeOfNewPositiveTastedPatientsFromPrevious7Days +
  //               '%',
  //           },
  //         ],
  //       },
  //     ],
  //   };
}

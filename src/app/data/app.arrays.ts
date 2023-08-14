import {
  CardOption,
  Link,
  SideNavItem,
  StatisticsViewOn,
  TableRow,
} from './app.interfaces';

export const CardOptions: CardOption[] = [
  {
    pictureClass: 'share',
    label: 'לשיתוף',
  },
  {
    pictureClass: 'download',
    label: 'להורדה',
  },
];

export interface Option {
  label?: string | number;
  value?: number | string;
  isRadioBtnNeeded?: boolean;
  name?: string | number;
}
export const colors = [
  { name: 'אדום', range: 'ציון 7.5 ומעלה', class: 'red' },
  { name: 'כתום', range: 'ציון בין 6 ל - 7.5', class: 'orange' },
  { name: 'צהוב', range: 'ציון בין 4.5 ל - 6', class: 'yellow' },
  { name: 'ירוק', range: 'ציון עד 4.5', class: 'green' },
];
export const options: any[] = [
  [
    { label: 'זמן', value: 365, isRadioBtnNeeded: false, name: 'firstChoice' },

    {
      label: 'עד עכשיו',
      value: 730,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
    { label: 'שנה', value: 365, isRadioBtnNeeded: true, name: 'firstChoice' },
    {
      label: 'חצי שנה',
      value: 180,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
    {
      label: '3 חודשים',
      value: 90,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
    {
      label: 'חודש אחרון',
      value: 30,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
  ],
];

////פילוח מדדים שונים לפי גיל ומין
export const options4: Option[] = [
  {
    label: 'הצג לפי',
    value: 365,
    isRadioBtnNeeded: false,
    name: 'firstChoice',
  },

  { label: 'מאומתים', value: 720, isRadioBtnNeeded: true, name: 'firstChoice' },
  { label: 'נפטרים', value: 710, isRadioBtnNeeded: true, name: 'firstChoice' },
  { label: 'מונשמים', value: 700, isRadioBtnNeeded: true, name: 'firstChoice' },
  { label: 'מצב קשה', value: 690, isRadioBtnNeeded: true, name: 'firstChoice' },
  {
    label: 'מאושפזים',
    value: 680,
    isRadioBtnNeeded: true,
    name: 'firstChoice',
  },
  { label: 'זמן', value: 660, isRadioBtnNeeded: false, name: 'lastChoice' },
  { label: 'עד עכשיו', value: 730, isRadioBtnNeeded: true, name: 'lastChoice' },

  { label: 'שנה', value: 365, isRadioBtnNeeded: true, name: 'lastChoice' },
  { label: 'חצי שנה', value: 180, isRadioBtnNeeded: true, name: 'lastChoice' },
  { label: '3 חודשים', value: 90, isRadioBtnNeeded: true, name: 'lastChoice' },
  {
    label: 'חודש אחרון',
    value: 30,
    isRadioBtnNeeded: true,
    name: 'lastChoice',
  },
  { label: '    ', value: 30, isRadioBtnNeeded: false, name: 'lastChoice' },
  { label: '     ', value: 30, isRadioBtnNeeded: false, name: 'lastChoice' },
];
export const FurtherOptions: Option[][] = [
  [
    {
      label: 'הצג לפי',
      value: 365,
      isRadioBtnNeeded: false,
      name: 'firstChoice',
    },
    {
      label: 'מאומתים',
      value: 720,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
    {
      label: 'נפטרים',
      value: 710,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
    {
      label: 'מונשמים',
      value: 700,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
    {
      label: 'מצב קשה',
      value: 690,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
    {
      label: 'מאושפזים',
      value: 680,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
    {
      label: 'זמן',
      value: 660,
      isRadioBtnNeeded: false,
      name: 'lastChoice',
    },
  ],
  [
    {
      label: 'עד עכשיו',
      value: 730,
      isRadioBtnNeeded: true,
      name: 'lastChoice',
    },
    {
      label: 'שנה',
      value: 365,
      isRadioBtnNeeded: true,
      name: 'lastChoice',
    },
    {
      label: 'חצי שנה',
      value: 180,
      isRadioBtnNeeded: true,
      name: 'lastChoice',
    },
    {
      label: '3 חודשים',
      value: 90,
      isRadioBtnNeeded: true,
      name: 'lastChoice',
    },
    {
      label: 'חודש אחרון',
      value: 30,
      isRadioBtnNeeded: true,
      name: 'lastChoice',
    },
    {
      label: '',
      value: 30,
      isRadioBtnNeeded: false,
      name: 'lastChoice',
    },
    {
      label: '',
      value: 30,
      isRadioBtnNeeded: false,
      name: 'lastChoice',
    },
  ],
];
/////////interface

export const VaccOptions: Option[][] = [
  [
    {
      label: 'משתנה',
      value: 660,
      isRadioBtnNeeded: false,
      name: 'firstChoice',
    },

    {
      label: 'חולים פעילים',
      value: 650,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
    {
      label: 'חולים קשה',
      value: 640,
      isRadioBtnNeeded: true,
      name: 'firstChoice',
    },
  ],
  [
    {
      label: 'סוג הניתוח',
      value: 630,
      isRadioBtnNeeded: false,
      name: 'lastChoice',
    },

    {
      label: 'מספר מוחלט',
      value: 670,
      isRadioBtnNeeded: true,
      name: 'lastChoice',
    },
    {
      label: 'ל-100 אלף תושבים',
      value: 660,
      isRadioBtnNeeded: true,
      name: 'lastChoice',
    },
  ],
];

export const data: any[] = [
  { label: 'עד עכשיו', value: 730 },
  { label: 'שנה', value: 365 },
  { label: 'חצי שנה', value: 180 },
  { label: '3 חודשים', value: 90 },
  { label: 'חודש אחרון', value: 30 },
];
export const clickCounterObj: any = {
  id: 0,
  name: 0,
  age: 0,
  email: 0,
  phone: 0,
  address: 0,
};
export const periodOfTimeMap: { [key: number]: string } = {
  730: 'עד עכשיו',
  365: 'שנה',
  180: 'חצי שנה',
  90: '3 חודשים',
  30: 'חודש אחרון',

  720: 'מאומתים',
  710: 'נפטרים',
  700: 'מונשמים',
  690: 'מצב קשה',
  680: 'מאושפזים',
  670: 'מספר מוחלט',
  660: 'ל-100 אלף תושבים',
  650: 'חולים פעילים',
  640: 'חולים קשה',
  630: 'סוג הניתוח',
};
export const emphasisStyle = {
  itemStyle: {
    shadowBlur: 0.5,
    shadowColor: 'rgba(0,0,0,0.3)',
  },
};

export const lightsTable: TableRow[] = [
  { id: 34, name: '10%', age: '24%', email: 7.2, phone: 7.6, address: 'אילת' },
  {
    id: 63,
    name: '30%',
    age: '24%',
    email: 4.2,
    phone: 2.2,
    address: 'מודיעין',
  },
  {
    id: 257,
    name: '0%',
    age: '30%',
    email: 2.2,
    phone: 5.2,
    address: 'ירושלים',
  },
  {
    id: 29,
    name: '20%',
    age: '24%',
    email: 4.2,
    phone: 4.2,
    address: 'תל אביב',
  },
];

export const VaccTable: TableRow[] = [
  {
    id: 8,
    name: 'אין מידע',
    age: '72.69%',
    email: '84.76%',
    phone: 'מעל 90%',
    address: 'אלון שבות',
  },
  {
    id: 3.1,
    name: 'אין מידע',
    age: '72.69%',
    email: '89.81%',
    phone: 'מעל 90%',
    address: 'הר אדר',
  },
  {
    id: 2,
    name: 'אין מידע',
    age: '72.69%',
    email: '85.76%',
    phone: 'מעל 90%',
    address: 'חשמונאים',
  },
  {
    id: 4.2,
    name: 'אין מידע',
    age: '72.69%',
    email: '86.31%',
    phone: 'מעל 90%',
    address: 'מזכרת בתיה',
  },
];

export const tableColumns = ['address', 'phone', 'email', 'age', 'name', 'id'];

export const columnLabels: TableRow = {
  id: 'ציון יומי מחושב',
  name: 'חולים פעילים לכל 10,000 נפש',
  age: '% מתחסנים מנה שלישית',
  email: '% מתחסנים מנה שנייה',
  phone: 'מתחסנים במנה ראשונה %',
  address: 'ישוב',
};

export const columnLabelsLights: TableRow = {
  address: 'חולים פעילים',
  phone: 'שיעור שינוי מאומתים',
  email: '% הבדיקות החיוביות',
  age: 'חולים חדשים לכל 10,000 נפש',
  name: 'ציון וצבע יומי',
  id: 'ישוב',
};
export const pages = [
  { label: 'מבט על', link: 'viewOn' },
  { label: 'מדדים מרכזיים', link: 'mainMeasures' },
  {
    label: 'מדדי תחלואה כללית',
    link: 'indicesOfGeneralMorbidity',
  },
  {
    label: 'תחלואה ואשפוזי ילדים',
    link: 'morbidityAndHospitalizationOfChildren',
  },
  {
    label: 'תחלואה מחול',
    link: 'morbidityFromAbroad',
  },
  {
    label: 'השפעת התחסנות על התחלואה',
    link: 'theEffectOfVaccinationOnIncidence',
  },
  { label: 'נפטרים', link: 'deaths' },
  { label: 'בדיקות', link: 'tests' },
  { label: 'תחקורים נוספים', link: 'additionalInvestigation' },
  { label: 'תחלואה חוזרת ומחלימים', link: 'recoveryAndReturnSick' },
  { label: 'התחסנות האוכלוסיה', link: 'populationVaccination' },
  { label: 'רמזור בישובים', link: 'lightsInSettlements' },
];

export const sideNavData: { id: string; options: SideNavItem[] }[][] = [
  [
    {
      id: 'firstDiv',
      options: [
        {
          label: 'עמוד הבית',
          iconPath: 'images/house.svg',
          alt: 'home',
        },
      ],
    },
  ],
  [
    {
      id: 'secondDiv',
      options: [
        {
          label: 'גדילה והנקה בילדים',
        },
        {
          label: 'איכות במערכת הבריאות',
        },
        {
          label: 'קורונה',
          route: '/dashboard',
        },
      ],
    },
  ],
  [
    {
      id: 'thirdDiv',
      options: [
        {
          label: 'אודות',
        },
        {
          label: 'הצהרת נגישות',
        },
        {
          label: 'תנאי שימוש',
        },
      ],
    },
  ],
];

// export const sideNavData = [
//   {
//     id: 'firstDiv',
//     options: [
//       {
//         label: 'עמוד הבית',
//         // route: '/home',
//         iconPath: 'images/house.svg',
//         alt: 'home'
//       },
//     ],
//   },
//   {
//     id: 'secondDiv',
//     options: [
//       {
//         label: 'גדילה והנקה בילדים',
//         // route: '/growth-and-nursing',
//       },
//       {
//         label: 'קורונה',
//         route: '/dashboard',
//       },
//       {
//         label: 'איכות במערכת הבריאות',
//         // route: '/healthcare-quality',
//       },
//     ],
//   },
//   {
//     id: 'thirdDiv',
//     options: [
//       {
//         label: 'אודות',
//         // route: '/about',
//       },
//       {
//         label: 'הצהרת נגישות',
//         // route: '/accessibility',
//       },
//       {
//         label: 'תנאי שימוש',
//         // route: '/terms-of-use',
//       },
//     ],
//   },
// ];

export const VaccLinks: Link[] = [
  {
    pictureClass: 'blueEarth',
    link: 'experience.arcgis.com',
    title: 'התחסנות לקורונה',
    description: 'נתוני אוכלוסיית מחוסנים בתוקף, לפי יישובים',
  },
  {
    pictureClass: 'blueEarth',
    link: 'experience.arcgis.com',
    title: 'מוקדי התחסנות',
    description:
      'מפת מוקדי ההתחסנות נגד נגיף הקורונה, כולל נתונים אודות שעות פתיחה וניווט',
  },
  {
    pictureClass: 'exelPic',
    link: 'data.gov.il',
    title: 'טבלת גילאי המתחסנים',
    description: 'מספר המתחסנים במנה הראשונה והשנייה לפי גילאים',
  },
];
export const testLinks: Link[] = [
  {
    pictureClass: 'purpleIsrael',
    link: 'health.gov.il',
    title: 'בדיקות מהירות',
    description:
      'מפת בדיקות מהירות לקורונה, כולל נתונים אודות שעות פתיחה וניווט',
  },
  {
    pictureClass: 'orangeIsrael',
    link: 'ourworldindata.org',
    title: 'בדיקות יומיות בעולם',
    description: 'תמונת מצב אודות בדיקות יומיות, במדינות העולם',
  },
  {
    pictureClass: 'labPic',
    link: 'health.gov.il',
    title: 'סוגי בדיקות',
    description: 'מרכז ',
  },
];
export const abroadLinks: Link[] = [
  {
    pictureClass: 'greenEarth',
    link: 'experience.arcgis.com',
    title: 'תעופה בזמן קורונה',
    description: 'רמזור מדינות העולם לפי רמת סיכון',
  },
  {
    pictureClass: 'orangeEarth',
    link: 'ourworldindata.org',
    title: 'מאומתים לפי מדינות העולם',
    description: 'תמונת מצב בעולם, מספר מאומתים יומי לפי מדינות',
  },
  {
    pictureClass: 'blueEarth',
    link: 'experience.arcgis.com',
    title: 'נתוני תחלואה בעולם Who',
    description: 'תמונת מצב בעולם מוצגת ע&quot;י ארגון הבריאות העולמי',
  },
];

export const FurtherLinks: Link[] = [
  {
    pictureClass: 'littlePurpleIsrael',
    link: 'maps.arcgis.com',
    title: 'מבודדים לפי רשות מקומית וגיל',
    description: 'תמונת מצב אודות נתוני בידודים פעילים, לפי רשות מקומית וגיל',
  },
  {
    pictureClass: 'exelPic',
    link: 'data.gov.il',
    title: 'נתוני מבודדים',
    description: 'נתונים אודות בדודים פעילים',
  },
  {
    pictureClass: 'exelPic',
    link: 'health.gov.il',
    title: 'נתוני קורונה לפי אזורים',
    description: 'נתוני הלמ״ס לפי אזורים',
  },
];
export const lightsLinks: Link[] = [
  {
    pictureClass: 'greenIsrael',
    link: 'experience.arcgis.com',
    title: 'מפת מדדי רמזור',
    description: 'מדדי תחלואה וציוני רמזור, בחלוקה לפי יישובים ורובעים',
  },
  {
    pictureClass: 'littlePurpleIsrael',
    link: 'maps.arcgis.com',
    title: 'רובעי רמזור',
    description:
      'תמונת מצב מובחנת אודות האוכלוסיה, בתוך תשעת היישובים הגדולים בארץ, רובעי רמזור',
  },
  {
    pictureClass: 'turkizIsrael',
    link: 'experience.arcgis.com',
    title: 'נתוני תחלואה לפי יישוב',
    description:
      'תמונת מצב לפי יישוב בקטגוריות- חולים פעילים, מבודדים, מאושפזים, נפטרים ומחוסנים בתוקף',
  },
];
export const optionPeriods: { [key: string]: number } = {
  'עד עכשיו': 730,
  שנה: 365,
  'חצי שנה': 180,
  '3 חודשים': 90,
  'חודש אחרון': 30,

  מאומתים: 720,
  נפטרים: 710,
  מונשמים: 700,
  'מצב קשה': 690,
  מאושפזים: 680,
  'מספר מוחלט': 670,
  'ל-100 אלף תושבים': 660,
  'חולים פעילים': 650,
  'חולים קשה': 640,
  'סוג הניתוח': 630,
};

export const graphPeriods: { [key: string]: string } = {
  main: 'firstGraph',
  main1: 'secondGraph',
  main3: 'thirdGraph',
  main4: 'fourGraph',
};

export const componentsId = [
  'רמזור בישובים',
  'התחסנות האוכלוסיה',
  'תחלואה חוזרת ומחלימים',
  'תחקורים נוספים',
  'בדיקות',
  'נפטרים',
  'חולים קשה ומאושפזים',
  'תחלואה מחול',
  'תחלואה ואשפוזי ילדים',
  'מדדי תחלואה כללית',
  'מדדים מרכזיים',
  'מבט על',
];

export const viewOnObj = [
  {
    title: 'מאומתים אתמול',
    bigNumberId: 'newUnhealthyPeopleYesterday',
    id: 'c1',
    subLineObjects: [
      {
        classText: 'littleLine',
        classContainer: 'container-1-line-b',
        classNum: 'littleNumber',
        num: '4,791,172',
        text: 'סה"כ',
      },
      {
        classText: 'littleLine',
        classContainer: 'container-1-line-a',
        classNum: 'littleNumber',
        num: 137,
        text: 'מחצות',
      },
    ],
  },
  {
    title: 'חולים פעילים',
    bigNumber: '4,354',
    id: 'c2',
    subLineObjects: [
      {
        classText: 'littleLine',
        classContainer: 'container-2-line-a',
        classNum: 'littleNumber',
        num: 337,
        text: 'בבי"ח',
      },
    ],
  },
  {
    title: 'חולים קשה',
    bigNumber: 90,

    id: 'c3',
    isCircleNeeded: true,
    subLineObjects: [
      {
        classText: 'littleLine',
        classContainer: 'container-3-line-a',
        classNum: 'littleNumber',
        num: 24,
        text: 'מתוכם קריטי',
      },
      {
        classText: 'littleLine',
        classContainer: 'container-3-line-b',
        classNum: 'littleNumber',
        num: 0,
        text: 'מחוברים לאקמו',
      },
      {
        classText: 'littleLine',
        classContainer: 'container-3-line-c',
        classNum: 'littleNumber',
        num: 26,
        text: 'מונשמים',
      },
      {
        classText: 'littleLine',
        classContainer: 'container-3-line-d',
        classNum: 'littleNumber',
        num: 33,
        text: 'חולים בינוני',
      },
      {
        classText: 'littleLine',
        classContainer: 'container-3-line-e',
        classNum: 'littleNumber',
        num: 186,
        text: 'חולים קל',
      },
    ],
  },
  {
    title: 'מתחסנים',

    id: 'c4',
    subLineObjects: [
      {
        classContainer: 'container-5-line',
        classNum: 'bigger-num',
        num: '6,722,324',
        text: 'מנה 1',
      },
      {
        classContainer: 'container-5-line',
        classNum: 'bigger-num',
        num: '6,122,324',
        text: 'מנה 2',
      },
      {
        classContainer: 'container-5-line',
        classNum: 'bigger-num',
        num: '4,513,122',
        text: 'מנה 3',
      },
      {
        classContainer: 'container-5-line',
        classNum: 'bigger-num',
        num: '840,001',
        text: 'מנה 4',
      },
      {
        classContainer: 'container-5-line',
        classNum: 'bigger-num',
        num: '399,333',
        text: 'אומיקרון',
      },
    ],
  },
  {
    title: 'נפטרים מצטבר',
    bigNumber: '12,354',
    id: 'c5',
    subLineObjects: [],
  },
  {
    title: 'אחוז נבדקים חיוביים אתמול',
    bigNumber: '4.67%',
    idBigNumber: 'idBigNumber1',
    id: 'c6',
    subLineObjects: [
      {
        classText: 'littleLine',
        classContainer: 'container-6-line-a',
        classNum: 'littleNumber',
        num: '9,453',
        text: 'נבדקים לגילוי הנגיף אתמול',
      },
      {
        classText: 'littleLine',
        classContainer: 'container-6-line-b',
        classNum: 'littleNumber',
        num: '10,005',
        text: 'כלל הבדיקות אתמול',
      },
    ],
  },
];

// export const viewOnObj = [
//   {
//     title: 'מאומתים אתמול',
//     bigNumber: 174,
//     id: 'c1',
//     subLineObjects: [
//       {
//         classText: 'littleLine',
//         classContainer: 'container-1-line-b',
//         classNum: 'littleNumber',
//         num: '4,791,172',
//         text: 'סה"כ',
//       },
//       {
//         classText: 'littleLine',
//         classContainer: 'container-1-line-a',
//         classNum: 'littleNumber',
//         num: 137,
//         text: 'מחצות',
//       },
//     ],
//   },
//   {
//     title: 'חולים פעילים',
//     bigNumber: '4,354',
//     id: 'c2',
//     subLineObjects: [
//       {
//         classText: 'littleLine',
//         classContainer: 'container-2-line-a',
//         classNum: 'littleNumber',
//         num: 337,
//         text: 'בבי"ח',
//       },
//     ],
//   },
//   {
//     title: 'חולים קשה',
//     bigNumber: 90,

//     id: 'c3',
//     isCircleNeeded: true,
//     subLineObjects: [
//       {
//         classText: 'littleLine',
//         classContainer: 'container-3-line-a',
//         classNum: 'littleNumber',
//         num: 24,
//         text: 'מתוכם קריטי',
//       },
//       {
//         classText: 'littleLine',
//         classContainer: 'container-3-line-b',
//         classNum: 'littleNumber',
//         num: 0,
//         text: 'מחוברים לאקמו',
//       },
//       {
//         classText: 'littleLine',
//         classContainer: 'container-3-line-c',
//         classNum: 'littleNumber',
//         num: 26,
//         text: 'מונשמים',
//       },
//       {
//         classText: 'littleLine',
//         classContainer: 'container-3-line-d',
//         classNum: 'littleNumber',
//         num: 33,
//         text: 'חולים בינוני',
//       },
//       {
//         classText: 'littleLine',
//         classContainer: 'container-3-line-e',
//         classNum: 'littleNumber',
//         num: 186,
//         text: 'חולים קל',
//       },
//     ],
//   },
//   {
//     title: 'מתחסנים',

//     id: 'c4',
//     subLineObjects: [
//       {
//         classContainer: 'container-5-line',
//         classNum: 'bigger-num',
//         num: '6,722,324',
//         text: 'מנה 1',
//       },
//       {
//         classContainer: 'container-5-line',
//         classNum: 'bigger-num',
//         num: '6,122,324',
//         text: 'מנה 2',
//       },
//       {
//         classContainer: 'container-5-line',
//         classNum: 'bigger-num',
//         num: '4,513,122',
//         text: 'מנה 3',
//       },
//       {
//         classContainer: 'container-5-line',
//         classNum: 'bigger-num',
//         num: '840,001',
//         text: 'מנה 4',
//       },
//       {
//         classContainer: 'container-5-line',
//         classNum: 'bigger-num',
//         num: '399,333',
//         text: 'אומיקרון',
//       },
//     ],
//   },
//   {
//     title: 'נפטרים מצטבר',
//     bigNumber: '12,354',
//     id: 'c5',
//     subLineObjects: [],
//   },
//   {
//     title: 'אחוז נבדקים חיוביים אתמול',
//     bigNumber: '4.67%',
//     idBigNumber: 'idBigNumber1',
//     id: 'c6',
//     subLineObjects: [
//       {
//         classText: 'littleLine',
//         classContainer: 'container-6-line-a',
//         classNum: 'littleNumber',
//         num: '9,453',
//         text: 'נבדקים לגילוי הנגיף אתמול',
//       },
//       {
//         classText: 'littleLine',
//         classContainer: 'container-6-line-b',
//         classNum: 'littleNumber',
//         num: '10,005',
//         text: 'כלל הבדיקות אתמול',
//       },
//     ],
//   },
// ];

export const SummaryOf7DaysObj = [
  {
    title: 'מספר המאומתים',
    bigNumber: '2,839',
    id: 'c7',
    subLineObjects: [
      {
        classText: 'littleLine',
        classContainer: 'container-7-line-a',
        classNum: 'littleNumber',
        num: '-14.2%',
        text: 'משבעה ימים קודמים',
      },
    ],
  },
  {
    title: 'מספר חולים קשה',
    bigNumber: 56,

    id: 'c8',
    subLineObjects: [
      {
        classText: 'littleLine',
        classContainer: 'container-8-line-a',
        classNum: 'littleNumber',
        num: '-31.7%',
        text: 'משבעה ימים קודמים',
      },
    ],
  },
  {
    title: 'מספר נפטרים',
    bigNumber: 13,

    id: 'c9',
    subLineObjects: [
      {
        classText: 'littleLine',
        classContainer: 'container-9-line-a',
        classNum: 'littleNumber',
        num: '-51.9%',
        text: 'משבעה ימים קודמים',
      },
    ],
  },
  {
    title: 'מספר נבדקים',
    bigNumber: '43,074',

    id: 'c10',
    subLineObjects: [
      {
        classText: 'littleLine',
        classContainer: 'container-10-line-a',
        classNum: 'littleNumber',
        num: '+0.8%',
        text: 'משבעה ימים קודמים',
      },
      {
        classText: 'littleLine',
        classContainer: 'container-10-line-b',
        classNum: 'littleNumber',
        num: '6.6%',
        text: 'נבדקים חיוביים',
      },
    ],
  },
];

export const Ranges = [
  [0, 0, 'view-on'],
  [0, 0, 'major-indicators-component'],
  [0, 0, 'indices-of-general-morbidity-component'],
  [0, 0, 'morbidity-and-hospitalizations-component'],
  [0, 0, 'morbidity-from-abroad-component'],
  [0, 0, 'effect-of-vaccination-on-morbidity-component'],
  [0, 0, 'deads-component'],
  [0, 0, 'tests-component'],
  [0, 0, 'further-investigations-component'],
  [0, 0, 'recurrent-morbidity-and-recovery-component'],
  [0, 0, 'vaccination-of-the-population-component'],
  [0, 0, 'lights-in-settlements-component'],
];
export const idAnchors = [
  'view-on',
  'major-indicators-component',
  'indices-of-general-morbidity-component',
  'morbidity-and-hospitalizations-component',
  'morbidity-from-abroad-component',
  'effect-of-vaccination-on-morbidity-component',
  'deads-component',
  'tests-component',
  'further-investigations-component',
  'recurrent-morbidity-and-recovery-component',
  'vaccination-of-the-population-component',
  'lights-in-settlements-component',
];
export const openWindowIconI = [
  'מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים.\n\nחולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.',
  'מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים.\n\nחולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.',
  'מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים.\n\nחולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.',
  'מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים.\n\nחולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.',
  'מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים.\n\nחולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.',
  'מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים.\n\nחולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.',
  'מספר המאומתים לנגיף COVID-19 שאותרו ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
  'מספר החולים החדשים במצב קשה וקריטי במחלת נגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
  'מספר הנפטרים מנגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
  'ליאור דניאל, מספר הנבדקים בבדיקות לגילוי נגיף COVID-19 מסוג PCR או אנטיגן ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים. הנתון אינו כולל נבדקים בבדיקות נלוות לקביעת החלמה. נבדקים חיוביים - אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר הנבדקים לגילוי הנגיף ב 7 הימים האחרונים.',
];

export const statisticsViewOn = {
  yesterday: [
    {
      cardId: 'verifiedYesterday',
      cardInfo:
        'מספר המאומתים לנגיף COVID-19 שאותרו משעה 00:00 עד שעה 23:59 של יום אתמול.',
      headerTitle: 'מאומתים אתמול',
      lineNumberFontSize: 0.75,
      lineTitleFontSize: 0.75,
      subDataLines: [
        {
          lineId: 'numberOfNewVerifiedToday',
          lineTitle: 'מחצות',
        },
        {
          lineId: 'totalNumberOfVerified',
          lineTitle: 'סה"כ',
        },
      ],
    },
    {
      cardId: 'activePatients',
      cardInfo:
        'מספר החולים הפעילים במחלת הנגיף COVID-19, נכון למועד העדכון האחרון.',
      headerTitle: 'חולים פעילים',
      lineNumberFontSize: 0.75,
      lineTitleFontSize: 0.75,
      subDataLines: [
        {
          lineId: 'numberOfActivePatientsHospitalized',
          lineTitle: 'בבי"ח',
        },
      ],
    },
    {
      cardId: 'seriousPatients',
      cardInfo: 'מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים.',
      headerTitle: 'חולים קשה',
      isTitleFirstInLine: true,
      lineNumberFontSize: 0.8,
      lineTitleFontSize: 0.8,
      subDataLines: [
        {
          lineId: 'numberOfHospitalizedPatientsInCriticalCondition',
          lineTitle: 'מתוכם קריטי',
          isHasCircleIcon: true,
          circleIconColor: '#E21D48',
        },
        {
          lineId: 'numberOfHospitalizedPatientsConnectedToACMO',
          lineTitle: 'מחוברים לאקמו',
          isHasCircleIcon: true,
          circleIconColor: '#E21D48',
        },
        {
          lineId: 'numberOfHospitalizedPatientsVentilated',
          lineTitle: 'מונשמים',
          isHasCircleIcon: true,
          circleIconColor: '#E6B957',
        },
        {
          lineId: 'numberOfHospitalizedPatientsInModerateCondition',
          lineTitle: 'חולים בינוני',
        },
        {
          lineId: 'numberOfHospitalizedPatientsInMildCondition',
          lineTitle: 'חולים קל',
        },
      ],
    },
    {
      cardId: 'vaccinated',
      cardInfo: 'מספר מקבלי החיסון מפני נגיף COVID-19 מתחילת מבצע החיסונים.',
      headerTitle: 'מתחסנים',
      isTitleFirstInLine: true,
      lineNumberFontSize: 1.1,
      lineTitleFontSize: 0.8,
      subDataLines: [
        {
          lineId: 'numberOfPeopleGetVaccinatedInFirstDose',
          lineTitle: 'מנה 1',
        },
        {
          lineId: 'numberOfPeopleGetVaccinatedInSecondDose',
          lineTitle: 'מנה 2',
        },
        {
          lineId: 'numberOfPeopleGetVaccinatedInThirdDose',
          lineTitle: 'מנה 3',
        },
        {
          lineId: 'numberOfPeopleGetVaccinatedInFourthDose',
          lineTitle: 'מנה 4',
        },
        {
          lineId: 'numberOfPeopleGetVaccinatedInOmicron',
          lineTitle: 'אומיקרון',
        },
      ],
    },
    {
      cardId: 'deceasedAccumulate',
      cardInfo:
        'מספר הנפטרים המצטבר ממחלת הנגיף COVID-19 החל מפרוץ המגפה. נתוני הנפטרים מתעדכנים לאחר שנבדקו תעודות הפטירה לוידוא סיבת המוות ולכן ייתכנו עדכונים מאוחרים של מספר הנפטרים.',
      headerTitle: 'נפטרים מצטבר',
    },
    {
      cardId: 'percentageOfPositiveTestsYesterday',
      cardInfo:
        'אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר נבדקים לגילוי הנגיף אתמול.',
      headerTitle: 'אחוז נבדקים חיוביים אתמול',
      isHeaderNumberHasPercentageIcon: true,
      lineNumberFontSize: 0.75,
      lineTitleFontSize: 0.75,
      subDataLines: [
        {
          lineId: 'numberOfNewTestsForVirusDetectionYesterday',
          lineTitle: 'נבדקים לגילוי הנגיף אתמול',
        },
        {
          lineId: 'totalNumberOfTestsYesterday',
          lineTitle: 'כלל הבדיקות אתמול',
        },
      ],
    },
  ],
  summaryOfTheLast7Days: [
    {
      cardId: 'amountOfNewVerifiedPeopleInLast7Days',
      cardInfo:
        'מספר המאומתים לנגיף COVID-19 שאותרו ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
      headerTitle: 'מספר המאומתים',
      lineNumberFontSize: 0.75,
      lineTitleFontSize: 0.75,
      subDataLines: [
        {
          lineId: 'percentageChangeOfNewVerifiedPeopleFromPrevious7Days',
          lineTitle: 'משבעה ימים קודמים',
          isLineNumberHasPercentageIcon: true,
        },
      ],
    },
    {
      cardId:
        'amountOfNewHospitalizedPatientsInSeriousAndCriticalConditionInLast7Days',
      cardInfo:
        'מספר החולים החדשים במצב קשה וקריטי במחלת נגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
      headerTitle: 'מספר חולים קשה',
      lineNumberFontSize: 0.75,
      lineTitleFontSize: 0.75,
      subDataLines: [
        {
          lineId:
            'percentageChangeOfNewPatientsHospitalizedInSeriousAndCriticalConditionFromPrevious7Days',
          lineTitle: 'משבעה ימים קודמים',
          isLineNumberHasPercentageIcon: true,
        },
      ],
    },
    {
      cardId: 'amountOfDeathsInLast7Days',
      cardInfo:
        'מספר הנפטרים מנגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
      headerTitle: 'מספר נפטרים',
      lineNumberFontSize: 0.75,
      lineTitleFontSize: 0.75,
      subDataLines: [
        {
          lineId: 'percentageChangeOfDeathsFromPrevious7Days',
          lineTitle: 'משבעה ימים קודמים',
          isLineNumberHasPercentageIcon: true,
        },
      ],
    },
    {
      cardId: 'amountOfNewTastedPatientsInLast7Days',
      cardInfo:
        'מספר הנבדקים בבדיקות לגילוי נגיף COVID-19 מסוג PCR או אנטיגן ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים. הנתון אינו כולל נבדקים בבדיקות נלוות לקביעת החלמה.',
      headerTitle: 'מספר נבדקים',
      lineNumberFontSize: 0.75,
      lineTitleFontSize: 0.75,
      subDataLines: [
        {
          lineId: 'percentageChangeOfNewTastedPatientsFromPrevious7Days',
          lineTitle: 'משבעה ימים קודמים',
          isLineNumberHasPercentageIcon: true,
        },
        {
          lineId:
            'percentageChangeOfNewPositiveTastedPatientsFromPrevious7Days',
          lineTitle: 'נבדקים חיוביים',
          isLineNumberHasPercentageIcon: true,
        },
      ],
    },
  ],
};

export interface DataVisualObj {
  isTable?: boolean;
  title?: string;
  // chart?: echarts.ECharts | null;
  resizeTimeoutId?: string;
  optionObj?: {};
  periodOfTime?: number | string;
  tablesData?: any[];
  graphSize?: string;
  textDownGraph?: string;
  textAboveGraph?: string;
  ClassTextAboveGraph?: string;
  TopTitle?: string;
  graphName?: string;
  selectBoxId?: string;
  selectedOption?: string;
  tableHeaderId?: string;
  classContainer?: string;
  options?: {} | undefined;
}
export interface TableRow {
  id: number | string;
  name: string | number;
  age: string | number;
  email: string | number;
  phone: string | number;
  address: string | number;
}
export interface Link {
  pictureClass: string;
  link: string;
  title: string;
  description: string;
}
export type Option = {
  label: string;
  value: number;
  isRadioBtnNeeded: boolean;
  name: string;
};

export interface SideNavItem {
  label: string;
  route?: string;
  iconPath?: string;
  alt?: string;
}

// export interface SideNavSection {
//   id: string;
//   options: SideNavItem[];
// }

export interface LanguageOption {
  language: string;
  displayName: string;
}

export interface DashboardNavItem {
  label: string;
  link: string;
}

export interface CardData {
  title: { title: string; value: string };
  stats: { title: string; value: string }[];
  tooltip: string;
}

export interface CardOption {
  label: string;
  pictureClass: string;
}
export interface FilterOption {
  section: string;
  type: 'checkbox' | 'radio' | 'text';
  options: FilterOptionItem[];
  selectedItem?: string;
  isCanSearch?: boolean;
  searchPlaceholder?: string;
  searchPlaceholderForFilter?: string;
}
export interface FilterOptionItem {
  label: string;
  value?: string;
  isChecked?: boolean;
}

export enum IconStyle {
  SmallSquare = 'small-square-icon',
  Dot = 'circle-icon',
  BigSquare = 'big-square-icon',
}
export enum CellStyle {
  Default = '',
  CellSquareIcon = 'square-icon-for-cell',
  CellSquareBackgroundWithUnderlineText = 'underline-data-with-background-for-cell',
  CellBoldTextWithPercent = 'bold-data-with-percent-and-bar-for-cell',
}
// export enum RiskLevel {
//   Low = 'lowRisk',
//   Moderate = 'risk',
//   Maximum = 'maximumRisk',
// }
export enum RiskLevel {
  Low = 'Low',
  Moderate = 'Moderate',
  Maximum = 'Maximum',
}

export interface LegendSettings {
  iconStyle: IconStyle;
  iconColor: string;
  descriptionText?: string;
  detailedDescriptionText?: string;
}
// export interface TableSettings {
//   cellStyle: CellStyle;
//   cellColor?: string;
//   forColumn: string;
//   minRangeNum?: number;
//   maxRangeNum?: number;
//   riskLevel?: RiskLevel;
//   hasBar?: boolean;
// }
export interface TableSettings {
  cellStyle: CellStyle;
  forColumn: string;
  options?: {
    cellColor: string;
    riskLevel?: RiskLevel;
    minRangeNum?: number;
    maxRangeNum?: number;
  }[];
  hasBar?: boolean;
  hasContent?: boolean;
}

export interface LineData {
  lineId: string;
  lineTitle?: string;
  lineNumber?: number;
  isHasCircleIcon?: boolean;
  circleIconColor?: string;
  isLineNumberHasPercentageIcon?: boolean;
}

export interface CardData {
  cardId: string;
  cardInfo?: string;
  headerTitle?: string;
  headerNumber?: number;
  subDataLines?: LineData[];
  isHeaderNumberHasPercentageIcon?: boolean;
  lineNumberFontSize?: number;
  lineTitleFontSize?: number;
  isTitleFirstInLine?: boolean;
}

export interface StatisticsViewOn {
  yesterday: CardData[];
  summaryOfTheLast7Days: CardData[];
}

export interface LightInSettlement {
  SettlementName: IsraelSettlements;
  ScoreAccordingToTrafficLightPlan: number;
  NewVerifiedPatients: number;
  PercentageOfPositiveTests: number;
  VerifiedChangeRate: number;
  ActivePatients: number;
}
export enum IsraelSettlements {
  TelAviv = 'תל אביב',
  RishonLeZion = 'ראשון לציון',
  Haifa = 'חיפה',
  Beersheba = 'באר שבע',
  Holon = 'חולון',
  Ashdod = 'אשדוד',
  Nahariya = 'נהריה',
  RamatGan = 'רמת גן',
  Ashkelon = 'אשקלון',
  BatYam = 'בת ים',
  Ramla = 'רמלה',
  Jerusalem = 'ירושלים',
  PetahTikva = 'פתח תקווה',
  Netanya = 'נתניה',
  BneiBrak = 'בני ברק',
  BeitShemesh = 'בית שמש',
  Rehovot = 'רחובות',
  Herzliya = 'הרצליה',
  Hadera = 'חדרה',
  KfarSaba = 'כפר סבא',
  Modiin = 'מודיעין',
  Lod = 'לוד',
  Raanana = 'רעננה',
  NofHaGalil = 'נוף הגליל',
  RoshHaAyin = 'ראש העין',
  HodHaSharon = 'הוד השרון',
  Givatayim = 'גבעתיים',
  KiryatGat = 'קריית גת',
  KiryatAta = 'קריית אתא',
  Afula = 'עפולה',
  Eilat = 'אילת',
  Acre = 'עכו',
  Tiberias = 'טבריה',
  KiryatMotzkin = 'קריית מוצקין',
  Carmiel = 'כרמיאל',
  KiryatBialik = 'קריית ביאליק',
  KiryatYam = 'קריית ים',
  Zefat = 'צפת',
  TiratCarmel = 'טירת כרמל',
  MigdalHaEmek = 'מגדל העמק',
  Yakneam = 'יקנעם',
  Nesher = 'נשר',
  KiryatShmona = 'קריית שמונה',
  MaalotTarshiha = 'מעלות-תרשיחא',
}

export interface SettlementOption {
  value: string;
  label: string;
  isChecked: boolean;
}

export interface TableColumn {
  value: string;
  label: string;
}
export interface MorbidityFromAbroad {
  id: string;
  date: string;
  countries: Country[];
}
export interface Country {
  CountryName: string;
  RiskLevel: RiskLevel;
  NumberOfEnteringPeopleToIsrael: number;
  NumberOfVerifiedCitizens: number;
  NumberOfVerifiedForeigners: number;
  PercentageOfVerifiedArrivals: number;
}
export enum IsraelHospitals {
  Barzilai = 'ברזילי',
  BneiZion = 'בני ציון',
  HillelYaffe = 'הלל יפה',
  Wolfson = 'וולפסון',
  Ziv = 'זיו',
  Galilee = 'גליל',
  Poria = 'פוריה',
  Rambam = 'רמב"ם',
  TelHashomer = 'תל השומר',
  AssafHarofeh = 'אסף הרופא',
  Ichilov = 'איכילוב',
}
export interface Hospital {
  Date: Date;
  HospitalName: IsraelHospitals;
  OverallBedOccupancyPercentage: number;
  PercentageOfIndoorWardBedOccupancy: number;
}
export interface HospitalToDisplay {
  Date: Date;
  HospitalName: string;
  OverallBedOccupancyPercentage: string;
  PercentageOfIndoorWardBedOccupancy: string;
}

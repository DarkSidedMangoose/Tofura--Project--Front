//Diagram.tsx
interface diagramInfoProperties {
  color: string;
  text: string;
}

export const diagramInfo: diagramInfoProperties[] = [
  {
    color: "rgba(156, 1, 1, 0.863)",
    text: "განსაკუთრებით მაღალი რისკი",
  },
  {
    color: "rgba(234, 113, 14, 0.863)",
    text: "მაღალი რისკი",
  },
  {
    color: "rgba(156, 146, 1, 0.863)",
    text: "საშუალო რისკი",
  },
  {
    color: "rgba(13, 97, 2, 0.863)",
    text: "დაბალი რისკი",
  },
  {
    color: "rgba(5, 182, 84, 0.863)",
    text: "რისკის გარეშე",
  },
];

interface detailsProperties {
  radius: number;
  percentage: number;
  Pi: number;
  stroke: string;
}

export const details: detailsProperties[] = [
  {
    radius: 45,
    percentage: 10,
    Pi: Math.PI,
    stroke: "rgba(156, 1, 1, 0.863)",
  },
  {
    radius: 36,
    percentage: 3,
    Pi: Math.PI,
    stroke: "rgba(234, 113, 14, 0.863)",
  },
  {
    radius: 27,
    percentage: 15,
    Pi: Math.PI,
    stroke: "rgba(156, 146, 1, 0.863)",
  },
  {
    radius: 18,
    percentage: 65,
    Pi: Math.PI,
    stroke: "rgba(13, 97, 2, 0.863)",
  },
  {
    radius: 9,
    percentage: 23,
    Pi: Math.PI,
    stroke: "rgba(5, 182, 84, 0.863)",
  },
];

// MonthlyCellDiagrams.tsx

interface Percentage {
  planned: number;
  unplanned: number;
  month: string;
}

export interface YearData {
  [year: number]: Percentage[];
}

export const object: YearData = {
  1978: [
    { planned: 30, unplanned: 43, month: "იანვარი" },
    { planned: 31, unplanned: 52, month: "თებერვალი" },
    { planned: 20, unplanned: 76, month: "მარტი" },
    { planned: 80, unplanned: 61, month: "აპრილი" },
    { planned: 70, unplanned: 96, month: "მაისი" },
    { planned: 100, unplanned: 69, month: "ივნისი" },
    { planned: 13, unplanned: 30, month: "ივლისი" },
    { planned: 54, unplanned: 15, month: "აგვისტო" },
    { planned: 13, unplanned: 35, month: "სექტემბერი" },
    { planned: 67, unplanned: 55, month: "ოქტომბერი" },
    { planned: 98, unplanned: 99, month: "ნოემბერი" },
    { planned: 65, unplanned: 1, month: "დეკემბერი" },
  ],
  1979: [
    { planned: 30, unplanned: 43, month: "იანვარი" },
    { planned: 31, unplanned: 52, month: "თებერვალი" },
    { planned: 20, unplanned: 76, month: "მარტი" },
    { planned: 80, unplanned: 61, month: "აპრილი" },
    { planned: 70, unplanned: 96, month: "მაისი" },
    { planned: 100, unplanned: 69, month: "ივნისი" },
    { planned: 13, unplanned: 30, month: "ივლისი" },
    { planned: 54, unplanned: 15, month: "აგვისტო" },
    { planned: 13, unplanned: 35, month: "სექტემბერი" },
    { planned: 67, unplanned: 55, month: "ოქტომბერი" },
    { planned: 98, unplanned: 99, month: "ნოემბერი" },
    { planned: 65, unplanned: 1, month: "დეკემბერი" },
  ],
  1980: [
    { planned: 30, unplanned: 43, month: "იანვარი" },
    { planned: 31, unplanned: 52, month: "თებერვალი" },
    { planned: 20, unplanned: 76, month: "მარტი" },
    { planned: 80, unplanned: 61, month: "აპრილი" },
    { planned: 70, unplanned: 96, month: "მაისი" },
    { planned: 100, unplanned: 69, month: "ივნისი" },
    { planned: 13, unplanned: 30, month: "ივლისი" },
    { planned: 54, unplanned: 15, month: "აგვისტო" },
    { planned: 13, unplanned: 35, month: "სექტემბერი" },
    { planned: 67, unplanned: 55, month: "ოქტომბერი" },
    { planned: 98, unplanned: 99, month: "ნოემბერი" },
    { planned: 65, unplanned: 5, month: "დეკემბერი" },
  ],
  1981: [
    { planned: 30, unplanned: 43, month: "იანვარი" },
    { planned: 31, unplanned: 52, month: "თებერვალი" },
    { planned: 20, unplanned: 76, month: "მარტი" },
    { planned: 80, unplanned: 61, month: "აპრილი" },
    { planned: 70, unplanned: 96, month: "მაისი" },
    { planned: 100, unplanned: 69, month: "ივნისი" },
    { planned: 13, unplanned: 30, month: "ივლისი" },
    { planned: 54, unplanned: 15, month: "აგვისტო" },
    { planned: 13, unplanned: 35, month: "სექტემბერი" },
    { planned: 67, unplanned: 55, month: "ოქტომბერი" },
    { planned: 98, unplanned: 99, month: "ნოემბერი" },
    { planned: 65, unplanned: 1, month: "დეკემბერი" },
  ],
};

interface MapObjectsProperties {
  region: string;
  violation: number;
  corrected: number;
  accidents: number;
}

export const MapObjects: MapObjectsProperties[] = [
  { region: "აფხაზეთი", violation: 1322, corrected: 450, accidents: 15 },
  {
    region: "სამეგრელო-ზემო სვანეთი",
    violation: 324,
    corrected: 1514,
    accidents: 3100,
  },
  { region: "შიდა ქართლი", violation: 1322, corrected: 450, accidents: 15 },
  {
    region: "რაჭა-ლეჩხუმი და ქვემო-სვანეთი",
    violation: 23,
    corrected: 1766,
    accidents: 5151,
  },
  { region: "მცხეთა-მთიანეთი", violation: 1, corrected: 898, accidents: 1531 },
  { region: "კახეთი", violation: 4, corrected: 756, accidents: 1663 },
  { region: "სამცხე-ჯავახეთი", violation: 2, corrected: 450, accidents: 1877 },
  { region: "აჭარა", violation: 1, corrected: 65, accidents: 232 },
  { region: "ქვემო ქართლი", violation: 4, corrected: 1003, accidents: 1891 },
  { region: "გურია", violation: 11, corrected: 450, accidents: 766 },
  { region: "თბილისი", violation: 0, corrected: 541, accidents: 877 },
  { region: "იმერეთი", violation: 1, corrected: 3450, accidents: 4422 },
];

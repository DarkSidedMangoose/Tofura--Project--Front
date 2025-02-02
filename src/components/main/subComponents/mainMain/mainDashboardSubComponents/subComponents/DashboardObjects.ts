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

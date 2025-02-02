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
}

export interface YearData {
  [year: number]: Percentage[];
}
export const months = [
  "იანვარი",
  "თებერვალი",
  "მარტი",
  "აპრილი",
  "მაისი",
  "ივნისი",
  "ივლისი",
  "აგვისტო",
  "სექტემბერი",
  "ოქტომბერი",
  "ნოემბერი",
  "დეკემბერი",
];
export const percentages: YearData = {
  2020: [
    { planned: 30, unplanned: 43 },
    { planned: 31, unplanned: 52 },
    { planned: 20, unplanned: 76 },
    { planned: 80, unplanned: 61 },
    { planned: 70, unplanned: 96 },
    { planned: 100, unplanned: 69 },
    { planned: 13, unplanned: 30 },
    { planned: 54, unplanned: 15 },
    { planned: 13, unplanned: 35 },
    { planned: 67, unplanned: 55 },
    { planned: 98, unplanned: 99 },
    { planned: 65, unplanned: 1 },
  ],
  2021: [
    { planned: 30, unplanned: 43 },
    { planned: 31, unplanned: 52 },
    { planned: 20, unplanned: 76 },
    { planned: 80, unplanned: 61 },
    { planned: 70, unplanned: 96 },
    { planned: 100, unplanned: 69 },
    { planned: 13, unplanned: 30 },
    { planned: 54, unplanned: 15 },
    { planned: 13, unplanned: 35 },
    { planned: 67, unplanned: 55 },
    { planned: 98, unplanned: 99 },
    { planned: 65, unplanned: 1 },
  ],
  2022: [
    { planned: 30, unplanned: 43 },
    { planned: 31, unplanned: 52 },
    { planned: 20, unplanned: 76 },
    { planned: 80, unplanned: 61 },
    { planned: 70, unplanned: 96 },
    { planned: 100, unplanned: 69 },
    { planned: 13, unplanned: 30 },
    { planned: 54, unplanned: 15 },
    { planned: 13, unplanned: 35 },
    { planned: 67, unplanned: 55 },
    { planned: 98, unplanned: 99 },
    { planned: 65, unplanned: 1 },
  ],
  2023: [
    { planned: 30, unplanned: 43 },
    { planned: 31, unplanned: 52 },
    { planned: 20, unplanned: 76 },
    { planned: 80, unplanned: 61 },
    { planned: 70, unplanned: 96 },
    { planned: 100, unplanned: 69 },
    { planned: 13, unplanned: 30 },
    { planned: 54, unplanned: 15 },
    { planned: 13, unplanned: 35 },
    { planned: 67, unplanned: 55 },
    { planned: 98, unplanned: 99 },
    { planned: 65, unplanned: 1 },
  ],
  2024: [
    { planned: 30, unplanned: 43 },
    { planned: 31, unplanned: 52 },
    { planned: 20, unplanned: 76 },
    { planned: 80, unplanned: 61 },
    { planned: 70, unplanned: 96 },
    { planned: 100, unplanned: 69 },
    { planned: 13, unplanned: 30 },
    { planned: 54, unplanned: 15 },
    { planned: 13, unplanned: 35 },
    { planned: 67, unplanned: 55 },
    { planned: 98, unplanned: 99 },
    { planned: 65, unplanned: 1 },
  ],
  2025: [
    { planned: 1, unplanned: 1 },
    { planned: 31, unplanned: 52 },
    { planned: 20, unplanned: 76 },
    { planned: 80, unplanned: 61 },
    { planned: 70, unplanned: 96 },
    { planned: 100, unplanned: 69 },
    { planned: 13, unplanned: 30 },
    { planned: 54, unplanned: 15 },
    { planned: 13, unplanned: 35 },
    { planned: 67, unplanned: 55 },
    { planned: 98, unplanned: 99 },
    { planned: 65, unplanned: 1 },
  ],
};

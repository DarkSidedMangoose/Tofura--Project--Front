interface AdditionalInfoOfBaseStates {
  baseInfoP: string[];
  baseInfoNdP: string[];
}

interface AdditionalInfoOfDashboardStates {
  dashboardInfoP: string[];
}

export const baseState: AdditionalInfoOfBaseStates = {
  baseInfoP: [
    "ობიექტების რეესტრი",
    "ინსპექტირების ობიექტები",
    "შემოწმებული ობიექტების რეესტრი",
  ],
  baseInfoNdP: [
    "ახალი ობიექტები",
    "შემოწმებული ობიექტები",
    "წაშლილი ობიექტები",
  ],
};

export const dashboardState: AdditionalInfoOfDashboardStates = {
  dashboardInfoP: [
    "ობიექტების რეგიონალური რუკა",
    "ობიექტების დიაგრამული გამოსახულება",
    "ობიექტების წლიური დიაგრამა თვეების მიხედვით",
  ],
};

export interface AdditionalInfoOfBaseStates {
  InfoP: string[];
  InfoNdP: string[];
}

export interface AdditionalInfoOfDashboardStates {
  InfoP: string[];
}

export interface AdditionalInfoOfSettingsStates {
  InfoP: string[];
}

export const baseState: AdditionalInfoOfBaseStates = {
  InfoP: [
    "ობიექტების რეესტრი",
    "ინსპექტირების ობიექტები",
    "შემოწმებული ობიექტების რეესტრი",
  ],
  InfoNdP: ["ახალი ობიექტები", "შემოწმებული ობიექტები", "წაშლილი ობიექტები"],
};

export const dashboardState: AdditionalInfoOfDashboardStates = {
  InfoP: [
    "ობიექტების რეგიონალური რუკა",
    "ობიექტების დიაგრამული გამოსახულება",
    "ობიექტების წლიური დიაგრამა თვეების მიხედვით",
  ],
};
export const settingsState: AdditionalInfoOfSettingsStates = {
  InfoP: ["მომხმარებლების კონფიგურაცია"],
};

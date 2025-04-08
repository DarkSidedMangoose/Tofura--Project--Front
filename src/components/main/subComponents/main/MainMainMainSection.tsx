import React, { Fragment, memo } from "react";
import { BaseMain } from "./mainBaseSubComponents/main/BaseMain";
// import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";
import DashboardMain from "./mainDashboardSubComponents/main/DashboardMain";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import SettingsMain from "./mainSettingsSubComponents/main/SettingsMain";

export const MainMainMainSection: React.FC = memo(() => {
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );

  return (
    <Fragment>
      {isOption === "ობიექტების რეესტრი" ||
      isOption === "ინსპექტირების ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "ახალი ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "წაშლილი ობიექტები" ? (
        <div className="w-full  h-[80%] ">
          <BaseMain />
        </div>
      ) : isOption === "ობიექტების რეგიონალური რუკა" ||
        isOption === "ობიექტების დიაგრამული გამოსახულება" ? (
        <div className="w-[98%] h-90% flex justify-center items-center  ">
          <div className="w-full h-100% gap-[2%] ">
            <DashboardMain />
          </div>
        </div>
      ) : (
        isOption === "მომხმარებლების კონფიგურაცია" && (
          <div className="w-full h-full">
            <SettingsMain />
          </div>
        )
      )}
    </Fragment>
  );
});

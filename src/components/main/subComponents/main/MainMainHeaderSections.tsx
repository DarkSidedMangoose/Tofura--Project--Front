import React, { Fragment, memo } from "react";
import BaseHeader from "./mainBaseSubComponents/header/BaseHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import ConfigrueUsersHeader from "./mainSettingsSubComponents/subComponents/configureUsers/ConfigureUsersSubcomponents/ConfigureUsersHeader";
// import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";

export const MainMainHeaderSections: React.FC = memo(() => {
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );

  return (
    <Fragment>
      <div className=" w-full  h-[10%]  min-h-[50px] flex justify-center items-center relative    ">
        <h1
          style={{ width: "auto", paddingRight: "50px", paddingLeft: "50px" }}
          className="text-xl   text-sidebarChoose font-bold rounded-lg h-50% w-full flex justify-center items-center   "
        >
          {isOption}
        </h1>
      </div>

      {isOption === "ობიექტების რეესტრი" ||
      isOption === "ინსპექტირების ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "ახალი ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "წაშლილი ობიექტები" ? (
        <div className="w-full h-[7%] flex justify-center items-center  ">
          <BaseHeader />
        </div>
      ) : (
        isOption === "მომხმარებლების კონფიგურაცია" && 
        <div className="w-full h-[7%] flex justify-center items-center  ">
        
        <ConfigrueUsersHeader /> 
        </div>
      )}
    </Fragment>
  );
});

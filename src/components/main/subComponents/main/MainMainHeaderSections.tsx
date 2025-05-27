import React, { Fragment, memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import ButtonsHeader from "../../../reusableComponents/MainHeaders/ButtonsHeader";
// import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";

export const MainMainHeaderSections: React.FC = memo(() => {
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  const [identifier,setIdnetifier] = useState<string>("base");
  useEffect(() => {
    if(isOption === "ობიექტების რეესტრი" ||
      isOption === "ინსპექტირების ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "ახალი ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "წაშლილი ობიექტები") {
      setIdnetifier("base");
    } else if (isOption === "მომხმარებლების კონფიგურაცია") {
      setIdnetifier("Settings");
      }
  },[isOption])
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

      {(isOption === "ობიექტების რეესტრი" ||
      isOption === "ინსპექტირების ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "ახალი ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "წაშლილი ობიექტები" || isOption === "მომხმარებლების კონფიგურაცია") && (
        <ButtonsHeader identifier={identifier} />
      ) }
    </Fragment>
  );
});

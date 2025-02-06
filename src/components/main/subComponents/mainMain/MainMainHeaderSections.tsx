import React, { Fragment, memo } from "react";
import BaseHeader from "./mainBaseSubComponents/header/BaseHeader";
import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";
export const MainMainHeaderSections: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();

  return (
    <Fragment>
      <div className=" w-full  h-[10%]  min-h-[50px] flex justify-center items-center relative    ">
        <h1
          style={{ width: "auto", paddingRight: "50px", paddingLeft: "50px" }}
          className="text-xl bg-white  text-sidebarChoose font-bold rounded-lg h-50% w-full flex justify-center items-center  shadow-boxShadow  "
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
        <div className="w-full h-[7%] flex justify-center items-center ">
          <BaseHeader />
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
});

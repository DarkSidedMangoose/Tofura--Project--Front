import React, { Fragment, memo } from "react";
import BaseHeader from "./mainBaseSubComponents/header/BaseHeader";
import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";
export const MainMainHeaderSections: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();

  return (
    <Fragment>
      <div className=" w-full  h-[10%]  min-h-[50px] flex justify-center items-center relative    ">
        <h1 className="text-xl  text-sidebarChoose font-bold rounded-2xl h-70% w-full flex justify-center items-center   ">
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

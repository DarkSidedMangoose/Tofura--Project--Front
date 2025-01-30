import React, { Fragment, memo } from "react";
import BaseHeader from "./mainBaseSubComponents/header/BaseHeader";
import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";
export const MainMainHeaderSections: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();

  return (
    <Fragment>
      <div className=" w-full  h-[10%] min-h-[50px] flex justify-center items-center relative    ">
        {/* <img
          src={BookMark}
          alt="bookmarks"
          className="h-full absolute left-[-0.6%] top-[-30%] "
          ></img> */}
        <div className="h-full w-30%  rounded-2xl relative flex items-center">
          <h1 className="text-xl bg-white text-sidebarChoose font-bold rounded-2xl h-70% w-full flex justify-center items-center border-solid border-[1.2px] border-sidebarChoose shadow-bottom-right">
            {isOption}
          </h1>
        </div>
        {/* <img
          src={BookMark}
          alt="bookmarks"
          className="h-full absolute right-[-0.3%] top-[-29%] "
        ></img> */}
      </div>
      {isOption !== "საინფორმაციო დაფა" && isOption !== "პროფილი" ? (
        <div className="w-full h-[12%] flex justify-center items-center ">
          <BaseHeader />
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
});

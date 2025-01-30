import React, { Fragment, memo } from "react";
import BaseHeader from "./mainBaseSubComponents/header/BaseHeader";
import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";
import BookMark from "../../../../assets/images/main/bookmark.png";
export const MainMainHeaderSections: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();

  return (
    <Fragment>
      <div className="bg-footerText w-full  h-[8%] min-h-[50px] flex justify-center items-center relative   ">
        {/* <img
          src={BookMark}
          alt="bookmarks"
          className="h-full absolute left-[-0.6%] top-[-30%] "
        ></img> */}
        <h1 className="text-xl text-white font-bold">{isOption}</h1>
        <img
          src={BookMark}
          alt="bookmarks"
          className="h-full absolute right-[-0.3%] top-[-29%]"
        ></img>
      </div>
      <div className="w-full h-[12%] flex justify-center items-center ">
        <BaseHeader />
      </div>
    </Fragment>
  );
});

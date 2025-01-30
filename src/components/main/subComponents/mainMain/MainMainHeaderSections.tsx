import React, { Fragment, memo } from "react";
import BaseHeader from "./mainBaseSubComponents/header/BaseHeader";
import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";
export const MainMainHeaderSections: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();

  return (
    <Fragment>
      <div className="bg-footerText w-full  h-[8%] min-h-[50px] flex justify-center items-center  ">
        <h1 className="text-xl text-white font-bold">{isOption}</h1>
      </div>
      <div className="w-full h-[12%] flex justify-center items-center ">
        <BaseHeader />
      </div>
    </Fragment>
  );
});

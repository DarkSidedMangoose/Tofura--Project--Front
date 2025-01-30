import React, { Fragment, memo } from "react";
import MainMainMainSectionHeader from "./MainMainMainSubComponents/MainMainMainSectionHeader";
import MainMainMainSectionMain from "./MainMainMainSubComponents/MainMainMainSectionMain";

export const MainMainMainSection: React.FC = memo(() => {
  return (
    <Fragment>
      <div className="h-full w-full flex items-center flex-col border-t-[1.5px] rounded-bl-lg rounded-br-lg  border-blue-950">
        <MainMainMainSectionHeader />
        <MainMainMainSectionMain />
      </div>
    </Fragment>
  );
});

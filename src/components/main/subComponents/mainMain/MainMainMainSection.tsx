import React, { Fragment, memo } from "react";
import { BaseMain } from "./mainBaseSubComponents/main/BaseMain";

export const MainMainMainSection: React.FC = memo(() => {
  return (
    <Fragment>
      <div
        className={`h-[65%] w-[98%] flex items-center flex-col bg-white rounded-br-lg rounded-lg `}
      >
        <BaseMain />
      </div>
    </Fragment>
  );
});

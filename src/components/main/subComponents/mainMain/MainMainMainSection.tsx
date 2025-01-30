import React, { Fragment, memo } from "react";
import { BaseMain } from "./mainBaseSubComponents/main/BaseMain";

export const MainMainMainSection: React.FC = memo(() => {
  return (
    <Fragment>
      <div
        className={`h-[80%] w-full flex items-center flex-col bg-white rounded-br-lg rounded-bl-lg `}
      >
        <BaseMain />
      </div>
    </Fragment>
  );
});

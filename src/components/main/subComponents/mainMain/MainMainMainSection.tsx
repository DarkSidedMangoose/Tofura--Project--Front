import React, { Fragment, memo } from "react";
import { BaseMain } from "./mainBaseSubComponents/main/BaseMain";
import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";
import { DashboardMain } from "./mainDashboardSubComponents/main/DashboardMain";

export const MainMainMainSection: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();

  return (
    <Fragment>
      {isOption !== "საინფორმაციო დაფა" && isOption !== "პროფილი" ? (
        <div className="w-full h-[80%] ">
          <BaseMain />
        </div>
      ) : (
        <DashboardMain />
      )}
    </Fragment>
  );
});

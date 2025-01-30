import React, { Fragment, memo } from "react";
import { BaseMain } from "./mainBaseSubComponents/main/BaseMain";
import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";
import { DashboardMain } from "./mainDashboardSubComponents/main/DashboardMain";

export const MainMainMainSection: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();

  return (
    <Fragment>
      {isOption !== "საინფორმაციო დაფა" && isOption !== "პროფილი" ? (
        <div
          className={`h-[65%] w-[98%] flex items-center flex-col bg-white rounded-br-lg rounded-lg shadow-boxShadow`}
        >
          <BaseMain />
        </div>
      ) : (
        <DashboardMain />
      )}
    </Fragment>
  );
});

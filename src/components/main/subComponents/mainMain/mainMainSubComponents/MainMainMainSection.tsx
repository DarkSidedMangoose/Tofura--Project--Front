import React, { Fragment, memo } from "react";
import MainMainMainSectionHeader from "./MainMainMainSubComponents/MainMainMainSectionHeader";
import MainMainMainSectionMain from "./MainMainMainSubComponents/MainMainMainSectionMain";
import { useAdditionalOption } from "../../../../../contextApis/ContextChooseFromAdditional";

export const MainMainMainSection: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();
  return (
    <div
      className={`w-98% ${
        isOption !== "საინფორმაციო დაფა" && isOption !== "პროფილი"
          ? "h-[85%]"
          : "h-full"
      } bg-white rounded-[1.5%] shadow-boxShadow flex items-center flex-col`}
    >
      {isOption !== "საინფორმაციო დაფა" && isOption !== "პროფილი" ? (
        <Fragment>
          <MainMainMainSectionHeader />
          <MainMainMainSectionMain />
        </Fragment>
      ) : (
        <div className=" bg-footerText opacity-95 w-30% h-10% flex justify-center items-center rounded-bl-[30%] rounded-br-[30%]">
          <h1 className="text-xl text-white font-bold">{isOption}</h1>
        </div>
      )}
    </div>
  );
});

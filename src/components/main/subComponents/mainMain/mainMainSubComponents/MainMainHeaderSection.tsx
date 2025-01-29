import React, { memo } from "react";
import { useAdditionalOption } from "../../../../../contextApis/ContextChooseFromAdditional";
import {
  MainMainHeaderFirstSection,
  MainMainHeaderSecondSection,
} from "./MainMainHeaderSubComponents/MainMainHeaderSubComponentSections";
export const MainMainHeaderSection: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();
  return (
    <>
      {isOption !== "საინფორმაციო დაფა" && isOption !== "პროფილი" && (
        <div className={`w-98% h-[15%] `}>
          <section className="w-full h-100% flex flex-col justify-evenly items-center">
            <header className={`flex items-center `}>
              <h1 className="text-xl text-blue-950 font-bold">{isOption}</h1>
            </header>
            {isOption !== "საინფორმაციო დაფა" && isOption !== "პროფილი" && (
              <nav className="h-[27%] w-full flex items-center justify-between ">
                <MainMainHeaderFirstSection />
                <MainMainHeaderSecondSection />
              </nav>
            )}
          </section>
        </div>
      )}
    </>
  );
});

import React, { memo } from "react";
import {
  MainMainHeaderFirstSection,
  MainMainHeaderSecondSection,
} from "./MainMainHeaderSubComponents/MainMainHeaderSubComponentSections";
export const MainMainHeaderSections: React.FC = memo(() => {
  return (
    <>
      <nav className="h-[70%] w-[99%] flex items-center justify-between  ">
        <MainMainHeaderFirstSection />
        <MainMainHeaderSecondSection />
      </nav>
    </>
  );
});

import React from "react";
import {
  MainMainHeaderFirstSection,
  MainMainHeaderSecondSection,
  MainMainHeaderThirdSection,
} from "./BaseHeaderSections";

const BaseHeader: React.FC = () => {
  return (
    <nav className="h-full  w-98% flex items-center justify-between  ">
      <MainMainHeaderFirstSection />
      <MainMainHeaderSecondSection />
      <MainMainHeaderThirdSection />
    </nav>
  );
};

export default BaseHeader;

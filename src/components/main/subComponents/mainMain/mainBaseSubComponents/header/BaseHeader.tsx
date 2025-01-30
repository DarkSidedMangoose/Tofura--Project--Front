import React from "react";
import {
  MainMainHeaderFirstSection,
  MainMainHeaderSecondSection,
} from "./BaseHeaderSections";

const BaseHeader: React.FC = () => {
  return (
    <nav className="h-[70%] w-[99%] flex items-center justify-between  ">
      <MainMainHeaderFirstSection />
      <MainMainHeaderSecondSection />
    </nav>
  );
};

export default BaseHeader;

import React from "react";
import {
  MainMainHeaderSection,
  MainMainMainSection,
} from "./subComponents/mainMain/mainMainSubComponents";

const MainMain: React.FC = () => {
  return (
    <main
      className={`w-full h-full  min-h-[700px]  flex flex-col justify-center items-center  transition-width`}
    >
      <MainMainHeaderSection />
      <MainMainMainSection />
    </main>
  );
};

export default MainMain;

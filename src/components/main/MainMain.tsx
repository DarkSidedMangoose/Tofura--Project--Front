import React from "react";
import { MainMainHeaderSection } from "./subComponents/mainMain/mainMainSubComponents/MainMainHeaderSection";
import { MainMainMainSection } from "./subComponents/mainMain/mainMainSubComponents/MainMainMainSection";
import "./MainAnimations.css";
import { MainLoading } from "./subComponents/mainMain/mainMainSubComponents/MainLoading";

const MainMain: React.FC = () => {
  return (
    <main
      className={` w-full h-full  min-h-[700px] min-w-[1000px]  flex flex-col justify-center items-center  transition-width relative`}
    >
      <MainLoading />
      <MainMainHeaderSection />
      <MainMainMainSection />
    </main>
  );
};

export default MainMain;

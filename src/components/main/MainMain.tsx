import React from "react";
import { MainMainHeaderSection } from "./subComponents/mainMain/mainMainSubComponents/MainMainHeaderSection";
import { MainMainMainSection } from "./subComponents/mainMain/mainMainSubComponents/MainMainMainSection";
import "./MainAnimations.css";

const MainMain: React.FC = () => {
  return (
    <main
      className={` w-full h-full  min-h-[700px]  flex flex-col justify-center items-center  transition-width`}
    >
      <MainMainHeaderSection />
      <MainMainMainSection />
    </main>
  );
};

export default MainMain;

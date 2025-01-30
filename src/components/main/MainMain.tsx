import React from "react";
import { MainMainMainSection } from "./subComponents/mainMain//MainMainMainSection";
import "./MainAnimations.css";
import { MainLoading } from "./subComponents/mainMain//MainLoading";
import { MainMainHeaderSections } from "./subComponents/mainMain//MainMainHeaderSections";

const MainMain: React.FC = () => {
  return (
    <main
      className={` w-full h-full  min-h-[700px] min-w-[1000px]  flex flex-col justify-center items-center  transition-width relative`}
    >
      <MainLoading />

      <div className="w-[98%] h-full  rounded-bl-lg rounded-br-lg shadow-boxShadow flex items-center flex-col ">
        <MainMainHeaderSections />

        <MainMainMainSection />
      </div>
    </main>
  );
};

export default MainMain;

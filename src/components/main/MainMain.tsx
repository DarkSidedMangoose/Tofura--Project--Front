import React from "react";
import { MainMainMainSection } from "./subComponents/mainMain//MainMainMainSection";
import "./MainAnimations.css";
import { MainLoading } from "./subComponents/mainMain//MainLoading";
import { MainMainHeaderSections } from "./subComponents/mainMain//MainMainHeaderSections";
import { useAdditionalOption } from "../../contextApis/ContextChooseFromAdditional";

const MainMain: React.FC = () => {
  const { isOption } = useAdditionalOption();
  return (
    <main
      className={` w-full h-full  min-h-[700px] min-w-[1000px]  flex flex-col justify-center items-center  transition-width relative`}
    >
      <MainLoading />

      <div className="w-[98%] h-full  rounded-bl-lg rounded-br-lg shadow-boxShadow flex items-center flex-col ">
        {/* Header */}
        <div className="bg-footerText w-full  h-[8%] min-h-[50px] flex justify-center items-center  ">
          <h1 className="text-xl text-white font-bold">{isOption}</h1>
        </div>
        {isOption !== "პროფილი" && isOption !== "საინფორმაციო დაფა" && (
          <div className="w-full h-[12%] flex justify-center items-center ">
            <MainMainHeaderSections />
          </div>
        )}
        <div
          className={`${
            isOption !== "პროფილი" && isOption !== "საინფორმაციო დაფა"
              ? "h-[80%]"
              : "h-[92%]"
          } w-full flex items-center flex-col bg-white rounded-br-lg rounded-bl-lg `}
        >
          <MainMainMainSection />
        </div>
      </div>
    </main>
  );
};

export default MainMain;

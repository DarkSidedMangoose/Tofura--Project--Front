import React, { Fragment } from "react";
import { MainMainMainSection } from "./subComponents/mainMain//MainMainMainSection";
import "./MainAnimations.css";
import { MainLoading } from "./subComponents/mainMain//MainLoading";
import { MainMainHeaderSections } from "./subComponents/mainMain//MainMainHeaderSections";
import { useMainLoading } from "../../contextApis/ContextLoading";

const MainMain: React.FC = () => {
  const { isLoading } = useMainLoading();
  return (
    <main
      className={` w-full h-full  min-h-[750px] min-w-[1000px]  flex flex-col justify-center items-center  transition-width relative`}
    >
      <MainLoading />
      <div className="w-[98%] h-full  rounded-bl-lg rounded-br-lg  flex items-center flex-col ">
        {!isLoading ? (
          <Fragment>
            <MainMainHeaderSections />
            <MainMainMainSection />
          </Fragment>
        ) : null}
      </div>
    </main>
  );
};

export default MainMain;

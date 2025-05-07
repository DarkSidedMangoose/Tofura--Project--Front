import React, { Fragment } from "react";
import { MainMainMainSection } from "./subComponents/main/MainMainMainSection";
import "./MainAnimations.css";
import { MainMainHeaderSections } from "./subComponents/main/MainMainHeaderSections";

// import { useMainLoading } from "../../contextApis/ContextLoading";
import ContextAuthenticatedUserInfo from "../../contextApis/ContextAuthenticatedUserInfo";

const MainMain:React.FC = () => {
  return (
    <main
      className={` w-full h-full  min-h-[750px] min-w-[1000px]  flex flex-col justify-center items-center  transition-width relative`}
    >
      <div className="w-[98%] h-full  rounded-bl-lg rounded-br-lg  flex items-center flex-col ">
        <Fragment>
          <ContextAuthenticatedUserInfo>
            <MainMainHeaderSections />
            <MainMainMainSection />
          </ContextAuthenticatedUserInfo>
        </Fragment>
      </div>
    </main>
  );
};

export default MainMain;

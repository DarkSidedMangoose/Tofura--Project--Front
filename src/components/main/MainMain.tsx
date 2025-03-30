import React, { Fragment } from "react";
import { MainMainMainSection } from "./subComponents/main/MainMainMainSection";
import "./MainAnimations.css";
import { MainLoading } from "./subComponents/main/MainLoading";
import { MainMainHeaderSections } from "./subComponents/main/MainMainHeaderSections";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// import { useMainLoading } from "../../contextApis/ContextLoading";
import ContextAuthenticatedUserInfo from "../../contextApis/ContextAuthenticatedUserInfo";

const MainMain: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.LoadingScreen.data);

  return (
    <main
      className={` w-full h-full  min-h-[750px] min-w-[1000px]  flex flex-col justify-center items-center  transition-width relative`}
    >
      <MainLoading />
      <div className="w-[98%] h-full  rounded-bl-lg rounded-br-lg  flex items-center flex-col ">
        {!isLoading ? (
          <Fragment>
            <ContextAuthenticatedUserInfo>
              <MainMainHeaderSections />
              <MainMainMainSection />
            </ContextAuthenticatedUserInfo>
          </Fragment>
        ) : null}
      </div>
    </main>
  );
};

export default MainMain;

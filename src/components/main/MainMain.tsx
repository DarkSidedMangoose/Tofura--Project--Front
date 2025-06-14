import React, { Fragment } from "react";
import { MainMainMainSection } from "./subComponents/main/MainMainMainSection";
import "./MainAnimations.css";
import { MainMainHeaderSections } from "./subComponents/main/MainMainHeaderSections";

// import { useMainLoading } from "../../contextApis/ContextLoading";
import { setAdditionalShow } from "../../redux/reducers/AdditionalShow";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";


const MainMain:React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
   const isOption = useSelector(
      (state: RootState) => state.setAdditionalShow.data
    );

  return (
    <main
      className={` w-full h-full  min-h-[750px] min-w-[1000px]  flex flex-col justify-center items-center  transition-width relative`}
      onMouseEnter={() => isOption && dispatch(setAdditionalShow(false))}
    >
      <div className="w-[98%] h-full  rounded-bl-lg rounded-br-lg  flex items-center flex-col ">
        <Fragment>
            <MainMainHeaderSections />
            <MainMainMainSection />
        </Fragment>
      </div>
    </main>
  );
};

export default MainMain;

import React, { useEffect } from "react";
import movedLogo from "./../../../../assets/images/main/mainLogoCenter.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { setLoadingFalse } from "../../../../redux/reducers/LoadingScreen";
// import { useMainLoading } from "../../../../contextApis/ContextLoading";

export const MainLoading: React.FC<{}> = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.LoadingScreen.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoadingFalse(false));
    }, 1400);
  }, []);

  return (
    <section
      className={`${
        isLoading ? "FromUpToDown" : "FromDownToUp"
      } absolute w-full  top-0 bg-loginBackground  z-40 rounded-bl-lg rounded-br-lg `}
    >
      <div className="flex w-100% h-100% justify-center items-center">
        <img
          src={movedLogo}
          alt="movedLogo"
          className="w-20% h-20% object-contain movedLogo"
        ></img>
      </div>
    </section>
  );
};

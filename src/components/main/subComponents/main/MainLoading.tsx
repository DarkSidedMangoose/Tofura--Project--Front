import React from "react";
import movedLogo from "./../../../../assets/images/main/mainLogoCenter.png";
import { useMainLoading } from "../../../../contextApis/ContextLoading";

export const MainLoading: React.FC<{}> = () => {
  const { isLoading } = useMainLoading();
  return (
    <section
      className={`${
        isLoading ? "FromUpToDown" : "FromDownToUp"
      } absolute w-full  top-0 bg-white z-40 rounded-bl-lg rounded-br-lg `}
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

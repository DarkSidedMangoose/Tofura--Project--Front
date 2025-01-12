import React from "react";
import MainLogos from "./mainLogo";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const MainHeader: React.FC = () => {
  const sidebarChooseStore = useSelector(
    (state: RootState) => state.sidebarChoose.data
  );
  const store = useSelector((state: RootState) => state.sidebarBase.data);
  return (
    <header className="h-15% min-h-[100px] ">
      <MainLogos />
      <div className="h-100% w-screen flex justify-center items-center  ">
        <div className="h-40% w-30% min-h-[50px] bg-white  stroke-black  opacity-85 font-bold text-gray-800 flex justify-center items-center text-l shadow-lg shadow-black text-[1.1vw] rounded-lg">
          {sidebarChooseStore === "base"
            ? store
            : sidebarChooseStore === "dashboard"
            ? "საინფორმაციო დაფა"
            : sidebarChooseStore === "tasks"
            ? "მიღებული დავალებები"
            : sidebarChooseStore === "profile"
            ? "პროფილი"
            : "ელ.ფოსტა"}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

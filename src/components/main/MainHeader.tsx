import React from "react";
import "./mainHeader.css";
import MainLogos from "./mainLogo";

const MainHeader: React.FC = () => {
  return (
    <header className="h-15% min-h-[100px]">
      <MainLogos />
      <div className="h-100% w-screen flex justify-center items-center ">
        <div className="h-40% w-40% min-h-[50px] bg-white  stroke-black  opacity-85 font-bold text-gray-800 flex justify-center items-center text-l shadow-lg shadow-black text-[1.3vw]">
          საერთო ობიექტების რეესტრი
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

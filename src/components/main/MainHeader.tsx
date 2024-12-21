import React from "react";
import "./mainHeader.css";

const MainHeader: React.FC = () => {
  return (
    <header className="h-15% w-screen flex justify-center items-center">
      <div className="h-40% w-40% bg-white shadow-lg stroke-black bg-header opacity-85 font-bold text-gray-800 flex justify-center items-center text-l shadow-lg shadow-black">
        საერთო ობიექტების რეესტრი
      </div>
    </header>
  );
};

export default MainHeader;

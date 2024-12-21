import React from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
const MainLogos: React.FC = () => {
  //* check
  return (
    <div className="absolute  w-[5%] min-w-[90px] h-[11%] min-h-[90px] left-0 opacity-90  mt-4 z-0">
      <img
        className=" w-100% h-[100%]  absolute"
        src={MainLogo}
        alt="Logo"
      ></img>
    </div>
  );
};

export default MainLogos;

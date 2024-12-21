import React from "react";
import MainLogo from "../../assets/images/login/mainLogo.png";
import MainLogoCenter from "../../assets/images/login/mainLogoCenter.png";
import "./mainLogo.css";
const MainLogos: React.FC = () => {
  //* check
  return (
    <div className="MainLogoDivMain">
      <img className="MainLogoMain" src={MainLogo} alt="Logo"></img>
      <img className="MainMovedLogoMain" src={MainLogoCenter} alt="Logo"></img>
    </div>
  );
};

export default MainLogos;

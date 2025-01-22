import React, { useState } from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Base from "../../assets/images/main/base.png";
import Dashboard from "../../assets/images/main/dashboard.png";
import MyProfile from "../../assets/images/main/myProfile.png";
import "./mainAnimations.css";
import { NavItem } from "./subComponents/sidebar/sidebarSubComponents";
import {
  mainSidebarProps,
  sideState,
} from "./subComponents/sidebar/sidebarInterfaces";
import { handleSidebarClick } from "./subComponents/sidebar/sidebarFunctions";

//main component
const MainSidebar: React.FC<mainSidebarProps> = ({ setIsActive }) => {
  const [sidebarStates, setSidebarStates] = useState<sideState>({
    identifier: "base",
    state: true,
  });

  const toggleSidebar = (identifier: string) => {
    handleSidebarClick(
      identifier,
      sidebarStates,
      setSidebarStates,
      setIsActive
    );
  };

  return (
    <div className="w-[5.6%] min-w-[83px]">
      <div className="flex w-[5%] min-w-[80.5px] h-90% min-h-[600px] fixed z-20">
        <aside
          className={`z-10 w-full h-full bg-sidebarChoose flex flex-col items-center shadow-bottom-right`}
        >
          <img src={MainLogo} className="w-[70%] mt-[30%]" alt="logo"></img>
          <nav className="w-[60%] h-[30%] mt-[40%]">
            <NavItem
              icon={Base}
              alt="Base"
              isActive={sidebarStates.identifier === "base"}
              onClick={() => toggleSidebar("base")}
              onMouseEnter={() => {
                if (sidebarStates.identifier === "base") {
                  setIsActive(false);
                  setTimeout(() => {
                    setIsActive(true);
                  }, 20); // to stay in folder page and when i enter mouse to this icon to slide right additional info i need setTimeout for handle freezeing on setIsActive(true) and avoid more props drilling
                }
              }}
            />
            <NavItem
              icon={Dashboard}
              alt="dashboard"
              isActive={sidebarStates.identifier === "dashboard"}
              onClick={() => toggleSidebar("dashboard")}
              onMouseEnter={() => null}
            />
            <NavItem
              icon={MyProfile}
              alt="profile"
              isActive={sidebarStates.identifier === "profile"}
              onClick={() => toggleSidebar("profile")}
              onMouseEnter={() => null}
            />
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default MainSidebar;

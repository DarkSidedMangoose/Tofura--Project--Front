import React, { useState, useCallback } from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Base from "../../assets/images/main/base.png";
import Dashboard from "../../assets/images/main/dashboard.png";
import MyProfile from "../../assets/images/main/myProfile.png";
import "./MainAnimations.css";
import { NavItem } from "./subComponents/sidebar/sidebarComponents/SidebarNavItem";
import { handleSidebarClick } from "./subComponents/sidebar/sidebarFunctions";

// main component

export interface sideState {
  identifier: string;
}

export interface mainSidebarProps {
  setIsActive: (isActive: boolean) => void;
  isActive: boolean;
}

const MainSidebar: React.FC<mainSidebarProps> = ({ setIsActive, isActive }) => {
  const [sidebarStates, setSidebarStates] = useState<sideState>({
    identifier: "base",
  });

  const toggleSidebar = useCallback(
    (identifier: string) => {
      handleSidebarClick(
        identifier,
        sidebarStates,
        setSidebarStates,
        setIsActive
      );
    },
    [sidebarStates, setSidebarStates, setIsActive]
  );

  const handleMouseEnter = useCallback(() => {
    if (sidebarStates.identifier === "base" && isActive === false) {
      setIsActive(true);
    }
  }, [isActive, setIsActive, sidebarStates]);

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
              NavIsActive={sidebarStates.identifier === "base"}
              onClick={() => toggleSidebar("base")}
              onMouseEnter={() => handleMouseEnter()}
            />
            <NavItem
              icon={Dashboard}
              alt="dashboard"
              NavIsActive={sidebarStates.identifier === "dashboard"}
              onClick={() => toggleSidebar("dashboard")}
              onMouseEnter={() => null}
            />
            <NavItem
              icon={MyProfile}
              alt="profile"
              NavIsActive={sidebarStates.identifier === "profile"}
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

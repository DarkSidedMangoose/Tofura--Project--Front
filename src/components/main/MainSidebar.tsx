import React, { useState } from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Base from "../../assets/images/main/base.png";
import Dashboard from "../../assets/images/main/dashboard.png";
import MyProfile from "../../assets/images/main/myProfile.png";
import "./mainAnimations.css";
import { NavItem } from "./subComponents/sidebarSubComponents";
import { AdditionalInfoOfBase } from "./subComponents/sidebarSubComponents";
import { sideState } from "./subComponents/sidebarInterfaces";
import { handleSidebarClick } from "./subComponents/sidebarFunctions";

//main component
const MainSidebar: React.FC = () => {
  const [sidebarStates, setSidebarStates] = useState<sideState>({
    identifier: "base",
    state: true,
  });

  return (
    <div
      className={`${
        sidebarStates.identifier === "base"
          ? "w-[20%] min-w-[350px]"
          : "w-[4.6%] min-w-[80.5px]"
      } flex  min-h-[700px] h-full bg-blue `}
    >
      <aside
        className={`z-10 ${
          sidebarStates.identifier === "base" ? "w-[23%]" : "w-full"
        } h-full  bg-sidebarChoose flex flex-col items-center shadow-bottom-right`}
      >
        <img src={MainLogo} className="w-[70%]   mt-[30%]" alt="logo"></img>
        <nav className="w-[60%] h-[30%]  mt-[40%]  ">
          <NavItem
            icon={Base}
            alt="Base"
            isActive={sidebarStates.identifier === "base"}
            onClick={() =>
              handleSidebarClick("base", sidebarStates, setSidebarStates)
            }
          />
          <NavItem
            icon={Dashboard}
            alt="dashboard"
            isActive={sidebarStates.identifier === "dashboard"}
            onClick={() =>
              handleSidebarClick("dashboard", sidebarStates, setSidebarStates)
            }
          />
          <NavItem
            icon={MyProfile}
            alt="profile"
            isActive={sidebarStates.identifier === "profile"}
            onClick={() =>
              handleSidebarClick("profile", sidebarStates, setSidebarStates)
            }
          />
        </nav>
      </aside>
      {sidebarStates.identifier === "base" && (
        <AdditionalInfoOfBase isActive={sidebarStates.state} />
      )}
    </div>
  );
};

export default MainSidebar;

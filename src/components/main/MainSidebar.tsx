import React, { useState } from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Base from "../../assets/images/main/base.png";
import Dashboard from "../../assets/images/main/dashboard.png";
import MyProfile from "../../assets/images/main/myProfile.png";
import "./mainAnimations.css";
import { NavItem } from "./subComponents/mainSidebarComp/sidebarSubComponents";
import { AdditionalInfoOfBase } from "./subComponents/mainSidebarComp/sidebarSubComponents";
import { sideState } from "./subComponents/mainSidebarComp/sidebarInterfaces";

//main component
const MainSidebar: React.FC = () => {
  const [sidebarStates, setSidebarStates] = useState<sideState>({
    identifier: "base",
    state: true,
  });

  const handleSidebarClick = (sidebar: string) => {
    if (sidebar === "base") {
      setSidebarStates({ identifier: sidebar, state: true });
    } else if (sidebar !== "base" && sidebarStates.identifier === "base") {
      setSidebarStates({ ...sidebarStates, state: false });

      setTimeout(() => {
        setSidebarStates({ ...sidebarStates, identifier: sidebar });
      }, 500);
    } else {
      setSidebarStates({ ...sidebarStates, identifier: sidebar });
    }
  };

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
            onClick={() => handleSidebarClick("base")}
          />
          <NavItem
            icon={Dashboard}
            alt="dashboard"
            isActive={sidebarStates.identifier === "dashboard"}
            onClick={() => handleSidebarClick("dashboard")}
          />
          <NavItem
            icon={MyProfile}
            alt="profile"
            isActive={sidebarStates.identifier === "profile"}
            onClick={() => handleSidebarClick("profile")}
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

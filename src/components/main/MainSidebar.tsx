import React, { useState } from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Folder from "../../assets/images/main/folder.png";
import Dashboard from "../../assets/images/main/dashboard.png";
import MyProfile from "../../assets/images/main/myProfile.png";
import "./mainAnimations.css";

//interfaces of props

interface sideState {
  identifier: string;
  state: boolean;
}

interface NavItemProps {
  icon: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
}

interface AdditionalInfoOfFolderProps {
  isActive: boolean;
}
/* end of interfaces */

//subComponents of main component
const NavItem: React.FC<NavItemProps> = ({ icon, alt, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full h-1/5 flex justify-center items-center  rounded-[100%] hover:opacity-70 cursor-pointer ${
        isActive && "bg-blue-900"
      }`}
    >
      <img className="w-[40%] h-[40%]" src={icon} alt={alt}></img>
    </div>
  );
};

const AdditionalInfoOfFolder: React.FC<AdditionalInfoOfFolderProps> = ({
  isActive,
}) => {
  return (
    <div
      className={`z-0 ${
        isActive ? "sidebarFolderInfoShown-div" : "sidebarFolderInfoClose-div"
      } w-[77%] h-full bg-white shadow-bottom-right rounded-br-2xl `}
    ></div>
  );
};
/* end of subComponents */

//main component
const MainSidebar: React.FC = () => {
  const [sidebarStates, setSidebarStates] = useState<sideState>({
    identifier: "folder",
    state: true,
  });

  const handleSidebarClick = (sidebar: string) => {
    if (sidebar === "folder") {
      setSidebarStates({ identifier: sidebar, state: true });
    } else if (sidebar !== "folder" && sidebarStates.identifier === "folder") {
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
        sidebarStates.identifier === "folder"
          ? "w-[20%] min-w-[350px]"
          : "w-[4.6%] min-w-[80.5px]"
      } flex  min-h-[700px] h-full bg-blue `}
    >
      <aside
        className={`z-10 ${
          sidebarStates.identifier === "folder" ? "w-[23%]" : "w-full"
        } h-full  bg-sidebarChoose flex flex-col items-center shadow-bottom-right`}
      >
        <img src={MainLogo} className="w-[70%]   mt-[30%]" alt="logo"></img>
        <nav className="w-[60%] h-[30%]  mt-[40%]  ">
          <NavItem
            icon={Folder}
            alt="folder"
            isActive={sidebarStates.identifier === "folder"}
            onClick={() => handleSidebarClick("folder")}
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
      {sidebarStates.identifier === "folder" && (
        <AdditionalInfoOfFolder isActive={sidebarStates.state} />
      )}
    </div>
  );
};

export default MainSidebar;

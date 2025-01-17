import React, { useState } from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Folder from "../../assets/images/main/folder.png";
import Dashboard from "../../assets/images/main/dashboard.png";
import MyProfile from "../../assets/images/main/myProfile.png";
import "./mainAnimations.css";
const MainSidebar: React.FC = () => {
  const [choosedSidebar, setChoosedSidebar] = useState<string>("folder"); // to identify which icon is choosed and what is state of our main
  const [folderInfoAnimToBack, setFolderInfoAnimToBack] =
    useState<boolean>(false); // additional state to make move to back animation of folder additional info
  return (
    <div
      className={`${
        choosedSidebar === "folder"
          ? "w-[20%] min-w-[350px]"
          : "w-[4.6%] min-w-[80.5px]"
      } flex  min-h-[700px] h-full bg-blue `}
    >
      <aside
        className={`z-10 ${
          choosedSidebar === "folder" ? "w-[23%]" : "w-full"
        } h-full  bg-sidebarChoose flex flex-col items-center shadow-bottom-right`}
      >
        <img src={MainLogo} className="w-[70%]   mt-[30%]" alt="logo"></img>
        <nav className="w-[60%] h-[30%]  mt-[40%]  ">
          <div
            onClick={() => setChoosedSidebar("folder")}
            className={`w-full h-1/5 flex justify-center items-center  rounded-[100%] hover:opacity-70 cursor-pointer ${
              choosedSidebar === "folder" && "bg-blue-900"
            }`}
          >
            <img className="w-[40%] h-[40%]" src={Folder} alt="folder"></img>
          </div>
          <div
            onClick={() => {
              setTimeout(() => {
                setChoosedSidebar("dashboard");
                setFolderInfoAnimToBack(false);
              }, 500);
              setFolderInfoAnimToBack(true);
            }}
            className="w-full h-1/5 flex justify-center items-center  rounded-[100%] hover:opacity-70 cursor-pointer"
          >
            <img
              className="w-[40%] h-[40%]"
              src={Dashboard}
              alt="dashboard"
            ></img>
          </div>
          <div className="w-full h-1/5 flex justify-center items-center  rounded-[100%] hover:opacity-70 cursor-pointer">
            <img
              className="w-[40%] h-[40%]"
              src={MyProfile}
              alt="myProfile"
            ></img>
          </div>
        </nav>
      </aside>
      {choosedSidebar === "folder" && (
        <div
          className={`z-0 ${
            folderInfoAnimToBack === false
              ? "sidebarFolderInfoShown-div"
              : "sidebarFolderInfoClose-div"
          } w-[77%] h-full bg-white shadow-bottom-right rounded-br-2xl `}
        ></div>
      )}
    </div>
  );
};

export default MainSidebar;

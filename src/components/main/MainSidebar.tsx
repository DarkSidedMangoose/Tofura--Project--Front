import React from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Folder from "../../assets/images/main/folder.png";
import Dashboard from "../../assets/images/main/dashboard.png";
import MyProfile from "../../assets/images/main/myProfile.png";

const MainSidebar: React.FC = () => {
  return (
    <div className="w-[20%] min-w-[350px] min-h-[500px] h-full bg-white">
      <aside className="w-[23%] h-full  bg-sidebarChoose flex flex-col items-center">
        <img src={MainLogo} className="w-[70%]   mt-[30%]" alt="logo"></img>
        <nav className="w-[60%] h-[250px]  mt-[40%]  ">
          <div className="w-full h-1/5 flex justify-center items-center  rounded-[100%] hover:bg-blue-900 ">
            <img className="w-[40%] h-[40%]" src={Folder} alt="folder"></img>
          </div>
          <div className="w-full h-1/5 flex justify-center items-center  rounded-[100%] hover:bg-blue-900 ">
            <img
              className="w-[40%] h-[40%]"
              src={Dashboard}
              alt="dashboard"
            ></img>
          </div>
          <div className="w-full h-1/5 flex justify-center items-center  rounded-[100%] hover:bg-blue-900 ">
            <img
              className="w-[40%] h-[40%]"
              src={MyProfile}
              alt="myProfile"
            ></img>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default MainSidebar;

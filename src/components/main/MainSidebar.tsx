import React from "react";
import MainLogo from "../../assets/images/main/fullLogo.png";
import Folder from "../../assets/images/main/folder.png";

const MainSidebar: React.FC = () => {
  return (
    <div className="w-[20%] min-w-[350px] min-h-[500px] h-full bg-white">
      <aside className="w-[23%] h-full  bg-sidebarChoose flex flex-col items-center">
        <img src={MainLogo} className="w-[80%]   mt-1" alt="logo"></img>
        <nav className="w-[40%] h-[250px]  mt-[20%]  ">
          <div className="w-full h-1/5 flex justify-center items-center  rounded-[100%] ">
            <img className="w-[60%] h-50%" src={Folder}></img>
          </div>
          <div className="w-full h-1/5 flex justify-center items-center  rounded-[100%] ">
            <img className="w-[60%] h-50%" src={Folder}></img>
          </div>
          <div className="w-full h-1/5 flex justify-center items-center  rounded-[100%] ">
            <img className="w-[60%] h-50%" src={Folder}></img>
          </div>
          <div className="w-full h-1/5 flex justify-center items-center  rounded-[100%] ">
            <img className="w-[60%] h-50%" src={Folder}></img>
          </div>
          <div className="w-full h-1/5 flex justify-center items-center  rounded-[100%] ">
            <img className="w-[60%] h-50%" src={Folder}></img>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default MainSidebar;

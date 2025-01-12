import React from "react";
import MainSidebar from "../../components/main/mainSidebar";

const Main: React.FC = () => {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-[95%]">
        <MainSidebar />
      </div>
      <div className="fixed bottom-0  w-full h-[5%] min-h-[50px] z-10 bg-white   ">
        ss
      </div>
    </div>
  );
};

export default Main;

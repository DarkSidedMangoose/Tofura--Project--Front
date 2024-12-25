import React from "react";
import MainSidebar from "../../components/main/mainSidebar";
import MainHeader from "../../components/main/mainHeader";
import MainMain from "../../components/main/mainMain";

const Main: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-loginBackground">
      <MainHeader />
      <div className="flex  gap-4 h-80%  ">
        <MainSidebar />
        <MainMain />
      </div>
    </div>
  );
};

export default Main;

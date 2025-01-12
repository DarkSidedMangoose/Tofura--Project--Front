import React from "react";
import MainSidebar from "../../components/main/mainSidebar";
import MainHeader from "../../components/main/mainHeader";
import MainMain from "../../components/main/mainMain";

const Main: React.FC = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-[90%]">
        <MainSidebar />
      </div>
    </div>
  );
};

export default Main;

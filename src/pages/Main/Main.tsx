import React from "react";
import MainSidebar from "../../components/main/mainSidebar";
import MainFooter from "../../components/main/mainFooter";
import MainMain from "../../components/main/mainMain";

const Main: React.FC = () => {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-[90%] flex">
        <MainSidebar />
        <MainMain />
      </div>
      <MainFooter />
    </div>
  );
};

export default Main;

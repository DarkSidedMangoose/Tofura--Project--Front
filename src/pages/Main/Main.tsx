import React, { useState } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import MainFooter from "../../components/main/mainFooter";
import MainMain from "../../components/main/mainMain";
import { AdditionalInfoOfBase } from "../../components/main/subComponents/sidebar/sidebarSubComponents";

const Main: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <div className="w-screen h-screen ">
      <div className="w-full  h-[90%] flex">
        <MainSidebar
          setIsActive={(e) => {
            setIsActive(e);
          }}
        />
        <AdditionalInfoOfBase isActive={isActive} />
        <MainMain isActive={isActive} />
      </div>
      <MainFooter />
    </div>
  );
};

export default Main;
